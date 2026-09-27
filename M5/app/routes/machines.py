from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models
from ..database import get_db

router = APIRouter(prefix="/machines", tags=["Machines"])


@router.get("")
def get_machines(
    db: Session = Depends(get_db),
):
    machines = (
        db.query(models.Machine)
        .order_by(models.Machine.machine_id.asc())
        .all()
    )

    return [
        {
            "machine_id": machine.machine_id,
            "hostname": machine.hostname,
            "os": machine.os,
            "status": machine.status,
        }
        for machine in machines
    ]