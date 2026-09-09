#!/usr/bin/env bash
cd "$(dirname "$0")"
pkill -f "app.py"           2>/dev/null && echo "blog detenido"
pkill -f "http.server 8347" 2>/dev/null && echo "terosocial detenido"
# ( cd BlueTeam && docker compose down )
