#!/usr/bin/env bash
# =====================================================================
#  TeroSocial - actualizar el sitio en el servidor Debian
#
#  Corre ESTO en el Debian (por SSH) cada vez que subiste cambios a
#  GitHub desde Windows. Baja lo nuevo, arregla permisos y recarga nginx.
#
#  Uso:   bash /var/www/terosocial/TeroSocial/herramientas/deploy/deploy.sh
#  (o dale permiso de ejecucion una vez:  chmod +x ...deploy.sh )
#
#  El script se ubica solo a partir de donde esta guardado, asi que no
#  importa donde clones el repo ni como se llame la carpeta.
# =====================================================================
set -e

AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"   # .../TeroSocial/herramientas/deploy
WEB="$(cd "$AQUI/../../entrega" && pwd)"               # lo que sirve nginx
REPO="$(git -C "$AQUI" rev-parse --show-toplevel)"     # raiz del repositorio

echo ">> repositorio: $REPO"
echo ">> sirviendo  : $WEB"

# La cuenta de trabajo no esta en el grupo sudo a proposito: para tareas de
# administrador se entra con "su". Asi que si ya somos root no anteponemos
# nada, y si no, usamos sudo. De las dos formas funciona.
if [ "$(id -u)" -eq 0 ]; then
  COMO_ROOT=""
else
  COMO_ROOT="sudo"
fi

# nginx vive en /usr/sbin, que NO esta en el PATH de un usuario comun. Si se
# entro con "su" a secas (sin guion) se conserva el PATH del usuario y el
# comando "nginx" no aparece, aunque este instalado. Por eso se busca y, si
# no esta en el PATH, se usa la ruta completa.
NGINX="$(command -v nginx || true)"
[ -n "$NGINX" ] || NGINX=/usr/sbin/nginx
if [ ! -x "$NGINX" ]; then
  echo "No encuentro nginx. Probaste entrar con 'su -' en vez de 'su'?" >&2
  exit 1
fi

echo ">> Bajando ultimos cambios de GitHub..."
cd "$REPO"
git pull --ff-only

echo ">> Ajustando permisos de lectura para nginx..."
find "$WEB" -type d -exec chmod 755 {} \;
find "$WEB" -type f -exec chmod 644 {} \;

echo ">> Probando la config de nginx..."
$COMO_ROOT "$NGINX" -t

echo ">> Recargando nginx..."
$COMO_ROOT systemctl reload nginx

echo ">> Listo. Sitio actualizado."
