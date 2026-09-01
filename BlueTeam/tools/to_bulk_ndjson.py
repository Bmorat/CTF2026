#!/usr/bin/env python3
"""Convierte los JSON de logs-ctf/*.json al formato bulk NDJSON de Elasticsearch."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "logs-ctf"
OUT_DIR = ROOT / "logs-ctf" / "bulk"

# Cada version se carga en su propio indice para que en Discover se pueda
# elegir "CTF v1 / v2 / v3" desde el selector de index pattern en vez de
# tener que acotar manualmente el rango de fechas.
FILES = {
    "logs-v1-acceso-inicial.json": "wazuh-alerts-ctf-v1",
    "logs-v2-credenciales.json": "wazuh-alerts-ctf-v2",
    "logs-v3-exfiltracion.json": "wazuh-alerts-ctf-v3",
}


def convert(filename, target_index):
    events = json.loads((SRC_DIR / filename).read_text(encoding="utf-8"))
    out_name = filename.replace(".json", ".ndjson")
    lines = []
    for e in events:
        action = {"index": {"_index": target_index, "_id": e["_id"]}}
        lines.append(json.dumps(action, ensure_ascii=False))
        lines.append(json.dumps(e["_source"], ensure_ascii=False))
    out_path = OUT_DIR / out_name
    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8", newline="\n")
    print(f"wrote {out_path} ({len(events)} events, {len(lines)} lines) -> index {target_index}")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for f, index in FILES.items():
        convert(f, index)


if __name__ == "__main__":
    main()
