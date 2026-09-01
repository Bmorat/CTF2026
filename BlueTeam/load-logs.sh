#!/usr/bin/env bash
# Carga los logs del CTF de Blue Team en OpenSearch (un indice por version) y
# crea en OpenSearch Dashboards un index pattern por version, con nombre
# amigable "CTF v1/v2/v3", para que el jugador cambie de etapa desde el
# selector de Discover en vez de tener que tocar el rango de fechas a mano.
set -euo pipefail

OS_URL="${OS_URL:-http://localhost:9200}"
DASHBOARDS_URL="${DASHBOARDS_URL:-http://localhost:5601}"
BULK_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/logs-ctf/bulk"

echo "==> Esperando a que OpenSearch este disponible en ${OS_URL} ..."
until curl -s -o /dev/null -w '%{http_code}' "${OS_URL}/_cluster/health" | grep -qE '200'; do
  printf '.'
  sleep 3
done
echo
echo "==> OpenSearch disponible."

echo "==> Borrando indice combinado viejo (si existe) ..."
curl -s -X DELETE "${OS_URL}/wazuh-alerts-4.x-2025.10.08" > /dev/null || true

for f in "${BULK_DIR}"/*.ndjson; do
  echo "==> Cargando $(basename "$f") ..."
  response=$(curl -s -H "Content-Type: application/x-ndjson" \
    -X POST "${OS_URL}/_bulk" --data-binary "@${f}")
  errors=$(echo "$response" | grep -o '"errors":[a-z]*' | head -1 || true)
  echo "    ${errors:-sin respuesta de errores}"
done

echo "==> Refrescando indices..."
curl -s -X POST "${OS_URL}/wazuh-alerts-ctf-v*/_refresh" > /dev/null

echo "==> Esperando a que OpenSearch Dashboards este disponible en ${DASHBOARDS_URL} ..."
until curl -s -o /dev/null -w '%{http_code}' "${DASHBOARDS_URL}/api/status" | grep -qE '200'; do
  printf '.'
  sleep 3
done
echo
echo "==> OpenSearch Dashboards disponible."

echo "==> Borrando index pattern combinado viejo (si existe) ..."
curl -s -X DELETE "${DASHBOARDS_URL}/api/saved_objects/index-pattern/wazuh-alerts-star" \
  -H "osd-xsrf: true" > /dev/null || true

create_pattern () {
  local id="$1" title="$2" name="$3"
  curl -s -X POST "${DASHBOARDS_URL}/api/saved_objects/index-pattern/${id}?overwrite=true" \
    -H "osd-xsrf: true" \
    -H "Content-Type: application/json" \
    -d "{\"attributes\":{\"title\":\"${title}\",\"name\":\"${name}\",\"timeFieldName\":\"timestamp\"}}" \
    | grep -q '"id"' && echo "    ${name} creado (o ya existia)." \
    || echo "    aviso: no se pudo confirmar la creacion de ${name}, revisar manualmente en Dashboards."
}

echo "==> Creando index patterns por version ..."
create_pattern "ctf-v1" "wazuh-alerts-ctf-v1" "CTF v1 - Acceso inicial"
create_pattern "ctf-v2" "wazuh-alerts-ctf-v2" "CTF v2 - Credenciales"
create_pattern "ctf-v3" "wazuh-alerts-ctf-v3" "CTF v3 - Exfiltracion"

echo "==> Fijando rango de fechas por defecto (cubre el 2025-10-08) ..."
curl -s -X POST "${DASHBOARDS_URL}/api/opensearch-dashboards/settings" \
  -H "osd-xsrf: true" \
  -H "Content-Type: application/json" \
  -d '{"changes":{"timepicker:timeDefaults":"{\n  \"from\": \"2025-10-07T00:00:00.000Z\",\n  \"to\": \"2025-10-09T00:00:00.000Z\"\n}"}}' \
  > /dev/null

echo "==> Listo. Abri ${DASHBOARDS_URL} -> Discover y elegi el index pattern"
echo "    'CTF v1 - Acceso inicial' / 'CTF v2 - Credenciales' / 'CTF v3 - Exfiltracion'."
