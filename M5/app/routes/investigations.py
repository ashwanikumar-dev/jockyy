from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models
from ..database import get_db
from ..schemas import InvestigationCreate, InvestigationResponse
from ..services.compiler_service import (
    CompilerServiceError,
    compile_script,
)

router = APIRouter(prefix="/investigations", tags=["Investigations"])


@router.post("", response_model=InvestigationResponse)
def create_investigation(
    data: InvestigationCreate,
    db: Session = Depends(get_db),
):
    investigation = models.Investigation(
        script=data.script,
    )

    db.add(investigation)
    db.flush()

    try:
        compiled_ir = compile_script(
            data.script,
            str(investigation.investigation_id),
        )
    except CompilerServiceError as exc:
        db.rollback()

        raise HTTPException(
            status_code=400,
            detail=f"JOCKY compilation failed: {exc}",
        ) from exc

    investigation.compiled_ir = compiled_ir

    db.commit()
    db.refresh(investigation)

    return investigation


@router.get("")
def get_investigations(
    db: Session = Depends(get_db),
):
    investigations = (
        db.query(models.Investigation)
        .order_by(models.Investigation.investigation_id.desc())
        .all()
    )

    return [
        {
            "investigation_id": investigation.investigation_id,
            "created_at": investigation.created_at,
        }
        for investigation in investigations
    ]


@router.get(
    "/{investigation_id}",
    response_model=InvestigationResponse,
)
def get_investigation(
    investigation_id: int,
    db: Session = Depends(get_db),
):
    investigation = db.get(
        models.Investigation,
        investigation_id,
    )

    if investigation is None:
        raise HTTPException(
            status_code=404,
            detail="Investigation not found",
        )

    return investigation
