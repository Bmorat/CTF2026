# Publicar TeroSocial en un Ubuntu Server

El sitio es estático: no hay backend, ni base de datos, ni nada que
instalar además del servidor web. `servir.ps1` es solo para probar en
Windows; en Ubuntu se usa nginx.

---

## 1. Armar la copia que se publica

**En Windows**, antes de subir nada:

```powershell
powershell -ExecutionPolicy Bypass -File .\herramientas\preparar_entrega.ps1
```

Eso crea `entrega/`, que es `web/` **sin `diagnostico.html`**. Esa página
lista alias, IDs y volúmenes de todo el contenido: es un spoiler completo
del ejercicio y no puede llegar al servidor.

**Se sube `entrega/`. Nunca `web/`, y nunca la raíz del proyecto** (ahí
están `CANON.md` y `herramientas/`, que tienen absolutamente todo).

---

## 2. Subir los archivos

Desde Windows, con WinSCP, `scp` o `rsync`. Son unos 34 MB.

```bash
scp -r entrega/* usuario@servidor:/var/www/terosocial/
```

**Importante: transferir en modo binario.** Si el cliente FTP está en
modo ASCII, corrompe los JPG y con eso se pierden los metadatos, que es
donde vive el ejercicio 2. WinSCP, scp y rsync usan binario por defecto;
el problema aparece solo con FTP viejo mal configurado.

Después, permisos de lectura para nginx:

```bash
sudo chown -R www-data:www-data /var/www/terosocial
sudo find /var/www/terosocial -type d -exec chmod 755 {} \;
sudo find /var/www/terosocial -type f -exec chmod 644 {} \;
```

---

## 3. Configurar nginx

```bash
sudo apt install nginx
sudo nano /etc/nginx/sites-available/terosocial
```

Contenido:

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/terosocial;
    index index.html;

    charset utf-8;

    # ---- Listado de directorio ----
    # /respaldo/ no tiene index.html y el ejercicio necesita que se
    # pueda ver su contenido. Sin esto, nginx devuelve 403 y la carpeta
    # queda inaccesible aunque se conozca su nombre.
    location /respaldo/ {
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
    }

    location /_dev/ {
        autoindex on;
    }

    location /api/ {
        autoindex on;
    }

    # ---- Compresión ----
    # Solo texto. Las imágenes NO se tocan: cualquier recompresión les
    # borra los metadatos y ahí se cae el ejercicio 2.
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Activar y arrancar:

```bash
sudo ln -s /etc/nginx/sites-available/terosocial /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Si el firewall está activo:

```bash
sudo ufw allow 80/tcp
```

---

## 4. Lo que NO hay que activar

Estas cosas rompen el ejercicio 2 en silencio: el sitio se ve igual, pero
las fotos quedan vacías por dentro.

- **Cualquier módulo de optimización de imágenes**: `ngx_pagespeed`,
  `image_filter`, o el equivalente en un proxy delante.
- **Cloudflare o cualquier CDN con "Polish" / optimización automática.**
- **Scripts de "optimizar el sitio"** que pasen `jpegoptim`, `optipng` o
  `imagemagick` sobre la carpeta. Todos borran metadatos.

La regla es simple: **los JPG tienen que llegar al navegador byte por
byte como están en el disco.**

---

## 5. Verificar después de publicar

Reemplazar `SERVIDOR` por la IP o el nombre.

**Que el sitio responda:**
```bash
curl -I http://SERVIDOR/index.html
```

**Que los metadatos sobrevivieron** (esto es lo más importante):
```bash
curl -s http://SERVIDOR/media/fotos/costa_3.jpg -o /tmp/prueba.jpg
exiftool -XPComment /tmp/prueba.jpg
```
Tiene que devolver una cadena larga en base64. Si sale vacío, algo está
recomprimiendo las imágenes: revisar el punto 4.

Sin exiftool a mano:
```bash
strings /tmp/prueba.jpg | grep -c "="
```

**Que la tipografía se sirve bien:**
```bash
curl -sI http://SERVIDOR/media/fuentes/librefranklin-latin.woff2 | grep -i content-type
```
Tiene que decir `font/woff2`. nginx moderno ya lo trae en `mime.types`.

**Que el listado de /respaldo/ funciona:**
```bash
curl -s http://SERVIDOR/respaldo/ | grep -c "notas_admin"
```
Tiene que devolver 1. Si da 0, falta `autoindex on`.

**Que el perfil oculto responde:**
```bash
curl -s "http://SERVIDOR/perfil.html?u=v.sokolov" | grep -c "Sokolov"
```

**Que el diagnóstico NO está publicado:**
```bash
curl -sI http://SERVIDOR/diagnostico.html | head -1
```
Tiene que decir **404**. Si devuelve 200, se subió `web/` en vez de
`entrega/` y hay que rehacerlo.

---

## 6. Detalle de mayúsculas

Windows no distingue mayúsculas en los nombres de archivo; Linux sí. Una
referencia a `Ave_5.jpg` funciona en la notebook y da 404 en el servidor.

Ya se verificó: las 340 referencias del sitio coinciden exactamente con
los nombres en disco, y ningún archivo tiene espacios ni acentos. Si más
adelante se agregan fotos, conviene volver a comprobarlo antes de subir.
