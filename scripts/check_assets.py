"""Verify every /assets/ reference in src exists in public/."""

import glob
import os
import re

refs = set()
for f in glob.glob("src/**/*.tsx", recursive=True) + glob.glob("src/**/*.ts", recursive=True):
    text = open(f, encoding="utf-8").read()
    refs.update(re.findall(r'["\'](/assets/[^"\']+)["\']', text))

missing = [p for p in sorted(refs) if not os.path.exists("public" + p)]
print("asset refs:", len(refs))
for p in sorted(refs):
    print("  ok " if os.path.exists("public" + p) else "  MISSING ", p)
print("missing:", missing if missing else "NONE")
