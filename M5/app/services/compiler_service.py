import json
import os
import subprocess
import tempfile
from pathlib import Path


class CompilerServiceError(Exception):
    """Raised when the JOCKY compiler cannot compile a script."""


def _compiler_path() -> Path:
    configured_path = os.getenv("JOCKY_COMPILER_PATH")

    if configured_path:
        return Path(configured_path)

    return (
        Path(__file__).resolve().parents[3]
        / "mix m3 m4"
        / "compiler"
        / "target"
        / "debug"
        / "compiler.exe"
    )


def compile_script(
    script: str,
    investigation_id: str,
) -> dict:
    """
    Compile JOCKY source using the M3 compiler CLI.

    Returns the canonical Forensic IR document as a dictionary.
    """

    compiler = _compiler_path()

    if not compiler.exists():
        raise CompilerServiceError(f"JOCKY compiler not found at: {compiler}")

    temp_path: Path | None = None

    try:
        with tempfile.NamedTemporaryFile(
            mode="w",
            suffix=".jocky",
            encoding="utf-8",
            delete=False,
        ) as temp_file:
            temp_file.write(script)
            temp_path = Path(temp_file.name)

        result = subprocess.run(
            [
                str(compiler),
                str(temp_path),
                str(investigation_id),
            ],
            capture_output=True,
            text=True,
            timeout=30,
            check=False,
        )

        if result.returncode != 0:
            error = result.stderr.strip() or result.stdout.strip()

            raise CompilerServiceError(
                error or "JOCKY compiler failed without an error message."
            )

        try:
            ir = json.loads(result.stdout)
        except json.JSONDecodeError as exc:
            raise CompilerServiceError(
                f"JOCKY compiler returned invalid JSON: {exc}"
            ) from exc

        if not isinstance(ir, dict):
            raise CompilerServiceError(
                "JOCKY compiler returned an invalid IR document."
            )

        return ir

    except subprocess.TimeoutExpired as exc:
        raise CompilerServiceError(
            "JOCKY compiler timed out after 30 seconds."
        ) from exc

    except OSError as exc:
        raise CompilerServiceError(f"Failed to execute JOCKY compiler: {exc}") from exc

    finally:
        if temp_path is not None:
            try:
                temp_path.unlink(missing_ok=True)
            except OSError:
                pass
