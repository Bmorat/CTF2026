#!/usr/bin/env bash
cd "$(dirname "$0")"
echo "== Escudo Virtual 2026 =="
pkill -f "app.py"           2>/dev/null
pkill -f "http.server 8347" 2>/dev/null
sleep 1
echo "[*] Preparando entorno del blog..."
python3 -m venv .venv 2>/dev/null
.venv/bin/pip install -q --disable-pip-version-check -r requirements.txt 2>/tmp/pip.log
echo "[*] Blog        -> :5000"
nohup .venv/bin/python app.py > /tmp/blog.log 2>&1 &
echo "[*] TeroSocial  -> :8347"
( cd terosocial && nohup python3 -m http.server 8347 > /tmp/terosocial.log 2>&1 & )
# ( cd BlueTeam && docker compose up -d )   # Blue Team (ajustar segun como se levante)
sleep 2
echo ""
echo "Listo:"
echo "  Blog         http://<IP>:5000"
echo "  TeroSocial   http://<IP>:8347"
echo "Logs: /tmp/blog.log  /tmp/terosocial.log"
