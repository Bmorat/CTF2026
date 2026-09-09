#!/usr/bin/env bash
# ==========================================================
#  Escudo Virtual 2026 — levanta TODOS los servicios del CTF
#  Uso:   ./levantar.sh      Parar: ./apagar.sh
# ==========================================================
cd "$(dirname "$0")"
echo "== Escudo Virtual 2026 =="

# --- limpiar instancias previas (para re-correr sin chocar puertos) ---
pkill -f "app.py"            2>/dev/null
pkill -f "http.server 8347"  2>/dev/null
sleep 1

# --- 1) Blog "Archivo T.E.R.O." (Flask) en :5000 ----------
echo "[*] Preparando entorno del blog..."
python3 -m venv .venv 2>/dev/null
.venv/bin/pip install -q --disable-pip-version-check -r requirements.txt 2>/tmp/pip.log
echo "[*] Blog        -> :5000"
nohup .venv/bin/python app.py > /tmp/blog.log 2>&1 &

# --- 2) TeroSocial (sitio estatico) en :8347 --------------
echo "[*] TeroSocial  -> :8347"
( cd terosocial && nohup python3 -m http.server 8347 > /tmp/terosocial.log 2>&1 & )

# --- 3) Blue Team (OpenSearch + Dashboards) en :9201/:5602 -
if command -v docker >/dev/null 2>&1; then
  echo "[*] Blue Team   -> :9201 / :5602 (Docker)"
  ( cd BlueTeam && docker compose up -d )
  echo "[*] Blue Team   -> esperando a OpenSearch..."
  for i in $(seq 1 40); do
    curl -s -o /dev/null "http://localhost:9201/_cluster/health" && break
    sleep 3
  done
  count=$(curl -s "http://localhost:9201/wazuh-alerts-ctf-v1/_count" 2>/dev/null \
          | grep -o '"count":[0-9]*' | head -1 | cut -d: -f2)
  if [ -z "$count" ] || [ "$count" = "0" ]; then
    echo "[*] Blue Team   -> cargando logs..."
    ( cd BlueTeam && bash load-logs.sh )
  else
    echo "[*] Blue Team   -> ya cargado ($count eventos en v1), no recargo"
  fi
else
  echo "[!] Docker no encontrado -> Blue Team NO se levanta (instalar Docker + compose)."
fi

sleep 2
echo ""
echo "Listo. Servicios arriba:"
echo "  Blog         http://<IP-del-server>:5000"
echo "  TeroSocial   http://<IP-del-server>:8347"
echo "  Blue Team    http://<IP-del-server>:5602   (Dashboards) / :9201 (OpenSearch)"
echo ""
echo "Logs:  /tmp/blog.log   /tmp/terosocial.log"
