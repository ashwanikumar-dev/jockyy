from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models
from ..database import get_db

router = APIRouter(prefix="/timeline", tags=["Timeline"])


@router.get("")
def get_timeline(
    investigation_id: int,
    db: Session = Depends(get_db),
):
    events = (
        db.query(models.TimelineEvent)
        .join(models.Evidence)
        .join(models.Task)
        .filter(models.Task.investigation_id == investigation_id)
        .order_by(models.TimelineEvent.timestamp_utc.asc())
        .all()
    )

    return [
        {
            "timeline_id": event.timeline_id,
            "evidence_id": event.evidence_id,
            "timestamp_utc": event.timestamp_utc,
        }
        for event in events
    ]
