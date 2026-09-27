from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from ..database import get_db
from .. import models

router = APIRouter(prefix="/findings", tags=["findings"])


@router.get("")
def get_findings(
    investigation_id: int = Query(...),
    db: Session = Depends(get_db),
):
    findings = (
        db.query(models.Finding)
        .join(
            models.Evidence,
            models.Finding.evidence_id == models.Evidence.evidence_id,
        )
        .join(
            models.Task,
            models.Evidence.task_id == models.Task.task_id,
        )
        .filter(models.Task.investigation_id == investigation_id)
        .all()
    )

    return [
        {
            "finding_id": finding.finding_id,
            "evidence_id": finding.evidence_id,
            "rule_id": finding.rule_id,
            "severity": finding.severity,
            "reason": finding.reason,
        }
        for finding in findings
    ]
