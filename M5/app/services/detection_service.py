from sqlalchemy.orm import Session

from .. import models

HIGH_MEMORY_THRESHOLD_BYTES = 500 * 1024 * 1024


def detect_high_memory_processes(
    evidence: models.Evidence,
    db: Session,
) -> list[models.Finding]:
    if evidence.category != "Process":
        return []

    if not evidence.normalized:
        return []

    processes = evidence.normalized.get("processes", [])

    findings = []

    for process in processes:
        memory_bytes = process.get("memory_bytes")

        if memory_bytes is None:
            continue

        if memory_bytes > HIGH_MEMORY_THRESHOLD_BYTES:
            finding = models.Finding(
                evidence_id=evidence.evidence_id,
                rule_id="PROCESS_HIGH_MEMORY",
                severity="high",
                reason=(
                    f"Process '{process.get('name', 'unknown')}' "
                    f"(PID {process.get('pid', 'unknown')}) is using "
                    f"{memory_bytes} bytes of memory, exceeding the "
                    f"{HIGH_MEMORY_THRESHOLD_BYTES} byte threshold."
                ),
            )

            db.add(finding)
            findings.append(finding)

    return findings


def detect_unexpected_listeners(
    evidence: models.Evidence,
    db: Session,
) -> list[models.Finding]:
    if evidence.category != "Network":
        return []

    if not evidence.normalized:
        return []

    # Rule 2 only applies to listener snapshots.
    current_mode = evidence.normalized.get("mode")

    if current_mode != "listeners":
        return []

    records = evidence.normalized.get("records", [])

    current_ports = {
        record.get("local_port")
        for record in records
        if record.get("state") == "LISTEN" and record.get("local_port") is not None
    }

    if not current_ports:
        return []

    # Find the investigation that produced this evidence.
    task = db.query(models.Task).filter(models.Task.task_id == evidence.task_id).first()

    if task is None:
        return []

    # Find the most recent VERIFIED listener snapshot
    # from the same investigation and same machine.
    previous_evidence = (
        db.query(models.Evidence)
        .join(
            models.Task,
            models.Evidence.task_id == models.Task.task_id,
        )
        .filter(
            models.Task.investigation_id == task.investigation_id,
            models.Evidence.machine_id == evidence.machine_id,
            models.Evidence.category == "Network",
            models.Evidence.status == models.EvidenceStatus.VERIFIED,
            models.Evidence.evidence_id != evidence.evidence_id,
        )
        .order_by(models.Evidence.evidence_id.desc())
        .all()
    )

    # Only use a previous listener snapshot as the baseline.
    previous_listener_evidence = None

    for candidate in previous_evidence:
        if not candidate.normalized:
            continue

        if candidate.normalized.get("mode") == "listeners":
            previous_listener_evidence = candidate
            break

    # No previous listener snapshot means there is no baseline yet.
    if previous_listener_evidence is None:
        return []

    previous_records = previous_listener_evidence.normalized.get(
        "records",
        [],
    )

    previous_ports = {
        record.get("local_port")
        for record in previous_records
        if record.get("state") == "LISTEN" and record.get("local_port") is not None
    }

    unexpected_ports = current_ports - previous_ports

    findings = []

    for record in records:
        if record.get("state") != "LISTEN":
            continue

        local_port = record.get("local_port")

        if local_port not in unexpected_ports:
            continue

        finding = models.Finding(
            evidence_id=evidence.evidence_id,
            rule_id="PROCESS_UNEXPECTED_LISTENER",
            severity="high",
            reason=(
                f"Process with PID {record.get('pid', 'unknown')} "
                f"is listening on unexpected port {local_port} "
                f"at {record.get('local_addr', 'unknown')}."
            ),
        )

        db.add(finding)
        findings.append(finding)

    return findings
