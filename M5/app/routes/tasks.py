from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models
from ..database import get_db
from ..schemas import (
    TaskCreate,
    TaskResponse,
    TaskStatusUpdate,
    TaskPollResponse,
    TaskPollInstruction,
)

router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.post("", response_model=TaskResponse)
def create_task(data: TaskCreate, db: Session = Depends(get_db)):
    investigation = db.get(models.Investigation, data.investigation_id)

    if investigation is None:
        raise HTTPException(
            status_code=404,
            detail="Investigation not found",
        )

    agent = db.get(models.Agent, data.agent_id)

    if agent is None:
        raise HTTPException(
            status_code=404,
            detail="Agent not found",
        )

    compiled_ir = investigation.compiled_ir

    if not isinstance(compiled_ir, dict):
        raise HTTPException(
            status_code=400,
            detail="Investigation does not contain a valid compiled IR document",
        )

    instructions = compiled_ir.get("instructions")

    if not isinstance(instructions, list):
        raise HTTPException(
            status_code=400,
            detail="Compiled IR does not contain a valid instructions list",
        )

    task = models.Task(
        investigation_id=data.investigation_id,
        agent_id=data.agent_id,
        ir=instructions,
        status=models.TaskStatus.CREATED,
    )

    db.add(task)
    db.commit()
    db.refresh(task)

    return task


@router.get("/poll", response_model=TaskPollResponse | None)
def poll_task(agent_id: int, db: Session = Depends(get_db)):
    task = (
        db.query(models.Task)
        .filter(
            models.Task.agent_id == agent_id,
            models.Task.status == models.TaskStatus.CREATED,
        )
        .order_by(models.Task.created_at)
        .first()
    )

    if task is None:
        return None

    raw_ir = task.ir or []

    ir = [
        TaskPollInstruction(
            instruction=item.get("op", ""),
            params=item.get("params", {}),
        )
        for item in raw_ir
        if isinstance(item, dict)
    ]

    return TaskPollResponse(
        task_id=str(task.task_id),
        investigation_id=str(task.investigation_id),
        agent_id=str(task.agent_id),
        ir=ir,
        status=task.status.value,
        created_at=task.created_at.replace(tzinfo=timezone.utc),
    )


@router.get("/{task_id}", response_model=TaskResponse)
def get_task(task_id: int, db: Session = Depends(get_db)):
    task = db.get(models.Task, task_id)

    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")

    return task


@router.post("/{task_id}/status", response_model=TaskResponse)
def update_task_status(
    task_id: int, data: TaskStatusUpdate, db: Session = Depends(get_db)
):
    task = db.get(models.Task, task_id)

    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")

    valid_transitions = {
        models.TaskStatus.CREATED: {
            models.TaskStatus.DISPATCHED,
        },
        models.TaskStatus.DISPATCHED: {
            models.TaskStatus.RUNNING,
        },
        models.TaskStatus.RUNNING: {
            models.TaskStatus.COMPLETED,
            models.TaskStatus.FAILED,
        },
    }

    if data.status not in valid_transitions.get(task.status, set()):
        raise HTTPException(
            status_code=400,
            detail=f"Invalid task status transition: {task.status} -> {data.status}",
        )

    task.status = data.status

    if data.status in (
        models.TaskStatus.COMPLETED,
        models.TaskStatus.FAILED,
    ):
        task.ended_at = datetime.now(timezone.utc)

    db.commit()
    db.refresh(task)

    return task
