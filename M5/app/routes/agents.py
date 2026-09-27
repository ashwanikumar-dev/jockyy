from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models
from ..database import get_db
from ..schemas import (
    AgentCreate,
    AgentRegistrationResponse,
    AgentResponse,
)

router = APIRouter(prefix="/agents", tags=["Agents"])


@router.post(
    "/register",
    response_model=AgentRegistrationResponse,
)
def register_agent(data: AgentCreate, db: Session = Depends(get_db)):
    machine = (
        db.query(models.Machine)
        .filter(models.Machine.hostname == data.machine_id)
        .first()
    )

    if machine is None:
        machine = models.Machine(
            hostname=data.machine_id,
            os=data.os,
            status="online",
        )

        db.add(machine)
        db.flush()
    else:
        machine.os = data.os
        machine.status = "online"

    agent = machine.agent

    if agent is None:
        agent = models.Agent(
            machine_id=machine.machine_id,
            version=data.agent_version,
            last_heartbeat=datetime.now(timezone.utc),
        )
        db.add(agent)
    else:
        agent.version = data.agent_version
        agent.last_heartbeat = datetime.now(timezone.utc)

    db.commit()
    db.refresh(agent)

    return AgentRegistrationResponse(
        agent_id=str(agent.agent_id),
        machine_id=str(machine.machine_id),
    )


@router.get("", response_model=list[AgentResponse])
def get_agents(db: Session = Depends(get_db)):
    return db.query(models.Agent).all()
