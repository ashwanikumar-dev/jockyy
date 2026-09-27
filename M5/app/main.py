from fastapi import FastAPI
from .database import Base, engine

from .routes.investigations import router as investigations_router
from .routes.agents import router as agents_router
from .routes.tasks import router as tasks_router
from .routes.evidence import router as evidence_router
from .routes.audit import router as audit_router
from .routes import findings
from .routes import timeline
from .routes import machines

app = FastAPI(title="JOCKY Backend")

Base.metadata.create_all(bind=engine)

app.include_router(investigations_router)
app.include_router(agents_router)
app.include_router(tasks_router)
app.include_router(evidence_router)
app.include_router(audit_router)
app.include_router(findings.router)
app.include_router(timeline.router)
app.include_router(machines.router)


@app.get("/")
def root():
    return {"message": "JOCKY backend is running"}
