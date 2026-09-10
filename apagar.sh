#!/usr/bin/env bash
# Escudo Virtual 2026 — baja todos los servicios
cd "$(dirname "$0")"
echo "Bajando servicios..."
pkill -f "app.py"           2>/dev/null && echo "  blog detenido"
pkill -f "http.server 8347" 2>/dev/null && echo "  terosocial detenido"
if command -v docker >/dev/null 2>&1; then
  ( cd BlueTeam && docker compose down ) && echo "  blue team detenido"
fi
echo "Listo."
