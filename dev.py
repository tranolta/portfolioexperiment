import subprocess
import sys
from pathlib import Path

root = Path(__file__).parent

backend = subprocess.Popen(
    [root / "backend/.venv/bin/python", root / "backend/run.py"],
    cwd=root / "backend",
)

frontend = subprocess.Popen(
    ["npm", "run", "dev"],
    cwd=root / "frontend",
)

try:
    backend.wait()
except KeyboardInterrupt:
    backend.terminate()
    frontend.terminate()
    sys.exit(0)
