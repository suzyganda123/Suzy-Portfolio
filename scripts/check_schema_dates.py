"""ponytail: assert schema dateModified is ISO-8601 datetime, not date-only."""
from pathlib import Path
import re
import sys

root = Path(__file__).resolve().parents[1]
site = (root / "src" / "data" / "site.ts").read_text(encoding="utf-8")
m = re.search(r'lastUpdated:\s*"([^"]+)"', site)
assert m, "lastUpdated missing"
val = m.group(1)
assert "T" in val, f"date-only rejected by Google: {val}"
assert re.match(r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}", val), f"bad ISO: {val}"
print("ok", val)
