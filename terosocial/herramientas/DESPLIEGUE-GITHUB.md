# Publicar TeroSocial con GitHub + Debian (servidor público)

Guía para novato, de punta a punta. La otra guía (`DESPLIEGUE-UBUNTU.md`)
usa `scp`; esta usa **GitHub** para mover los archivos, que es lo que te
pidieron.

---

## 0. La idea en dos líneas

- **GitHub** = donde guardás el código y desde donde lo bajás. Solo mueve archivos.
- **El Debian + nginx** = el que realmente *publica* el sitio (el "host").

Subir a GitHub por sí solo **no** pone nada online. Lo que lo pone online es
nginx en tu Debian sirviendo la carpeta.

## La regla de oro (no negociable)

1. **El repo tiene que ser PRIVADO.** El proyecto entero contiene el
   solucionario, las pistas y los flags (`CANON.md`, `instructor/`,
   `herramientas/`). Si el repo fuera público, cualquiera los lee.
2. **nginx sirve solo la subcarpeta `entrega/`**, nunca la raíz ni `web/`.
   `entrega/` es la copia limpia, sin `diagnostico.html` (que es un spoiler
   del inventario completo).
3. **`entrega/` hay que regenerarla** cada vez que cambiás contenido, porque
   se arma a partir de `web/`. Está desactualizada ahora mismo.

---

# PARTE A — En Windows (una sola vez)

### A1. Regenerar la copia de entrega

```powershell
cd "C:\Users\ucibe\Desktop\prueba Cowork\Ejercicios De OSINT\TeroSocial"
powershell -ExecutionPolicy Bypass -File .\herramientas\preparar_entrega.ps1
```

Tiene que decir "Copia de entrega lista" y "dejados afuera: diagnostico.html…".

### A2. Poner el `.gitignore`

Copiá el archivo `herramientas/deploy/gitignore.txt` a la **raíz** del
proyecto con el nombre `.gitignore` (con el punto adelante, sin `.txt`).
Deja fuera del repo las fotos crudas y basura, pero **sí sube `entrega/`**.

### A3. Instalar Git (si no lo tenés)

Bajalo de https://git-scm.com/download/win e instalá con las opciones por
defecto. Después, configurá tu nombre una vez:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
```

### A4. Crear el repositorio local

```bash
cd "C:\Users\ucibe\Desktop\prueba Cowork\Ejercicios De OSINT\TeroSocial"
git init
git add .
git commit -m "TeroSocial: primer commit"
```

### A5. Crear el repo PRIVADO en GitHub

1. Entrá a https://github.com/new
2. Nombre: `terosocial` (o el que quieras).
3. **Marcá "Private". Esto es lo más importante de todo.**
4. No marques nada más (ni README, ni .gitignore, ni licencia).
5. "Create repository".

### A6. Subirlo (push)

GitHub te muestra la URL. Con esos comandos (cambiá `TU-USUARIO`):

```bash
git remote add origin https://github.com/TU-USUARIO/terosocial.git
git branch -M main
git push -u origin main
```

Te va a pedir usuario y contraseña: la "contraseña" hoy es un **token**, no
tu clave. Si te lo pide, creá uno en https://github.com/settings/tokens
(Tokens classic → Generate new token → marcá `repo` → copialo y pegalo como
contraseña). Windows lo recuerda para la próxima.

Listo, el código ya está en GitHub. Ahora, el servidor.

---

# PARTE B — En el Debian (por SSH, una sola vez)

Conectate: `ssh usuari0@192.168.0.58`.

**Sobre los permisos.** La cuenta de trabajo no está en el grupo `sudo`, y es
a propósito: para cualquier tarea de administrador se entra con `su`, se hace
lo que hay que hacer, y se sale con `exit`. Así que **todos los pasos de esta
Parte B se hacen como root**, y por eso los comandos van sin `sudo` adelante.

```bash
su -
```

**Con guion, no `su` a secas.** El guion carga el entorno completo de root,
incluido el PATH con `/usr/sbin`, que es donde viven `nginx` y otras
herramientas de administrador. Con `su` pelado te convertís en root pero
conservás el PATH de tu usuario, y `nginx -t` responde "orden no encontrada"
aunque nginx esté perfectamente instalado.

El prompt pasa de `usuari0@debian:~$` a `root@debian:~#`. Ese `#` del final es
la señal de que sos root. Al terminar la Parte B, salí con `exit`.

Todo lo que sigue —la llave, el clone, la configuración de nginx— queda en
manos de root, que es lo coherente: el sitio lo administra root, no la cuenta
de trabajo.

### B1. Actualizar e instalar lo necesario

```bash
apt update && apt install -y nginx git
```

### B2. Darle al servidor una "llave de solo lectura" del repo privado

Como el repo es privado, el Debian necesita una llave para bajarlo. Creá una
**deploy key** (llave dedicada, solo para esto):

```bash
ssh-keygen -t ed25519 -f ~/.ssh/terosocial_deploy -N ""
cat ~/.ssh/terosocial_deploy.pub
```

Copiá TODO lo que imprimió el `cat` (empieza con `ssh-ed25519`). En GitHub:
**https://github.com/Alejandrocasatroja/terosocial/settings/keys** →
**Add deploy key** → pegá la llave, ponele un título, **dejá "Allow write
access" DESmarcado** (solo lectura), y guardá.

Es una llave dedicada: sirve para bajar este repo y nada más. Si el servidor
se compromete, no se lleva tu cuenta de GitHub.

Ahora decile a git que use esa llave para GitHub:

```bash
cat >> ~/.ssh/config <<'EOF'

Host github-terosocial
    HostName github.com
    User git
    IdentityFile ~/.ssh/terosocial_deploy
    IdentitiesOnly yes
EOF
```

### B3. Clonar el repo en /var/www

```bash
mkdir -p /var/www/terosocial
git clone github-terosocial:Alejandrocasatroja/terosocial.git /var/www/terosocial
```

(La primera vez te pregunta si confiás en github.com: escribí `yes`.)

Permisos de lectura para nginx:

```bash
find /var/www/terosocial/TeroSocial/entrega -type d -exec chmod 755 {} \;
find /var/www/terosocial/TeroSocial/entrega -type f -exec chmod 644 {} \;
```

### B4. Configurar nginx

Copiá el archivo `herramientas/deploy/nginx-terosocial.conf` del repo:

```bash
cp /var/www/terosocial/TeroSocial/herramientas/deploy/nginx-terosocial.conf \
        /etc/nginx/sites-available/terosocial
nano /etc/nginx/sites-available/terosocial
```

**Si vas a entrar por IP** (caso de la red interna de la unidad), no hace falta
tocar nada: `server_name _;` responde a cualquier nombre o dirección. Salí de
`nano` con Ctrl+X y saltá al bloque de abajo.

**Si tenés dominio**, cambiá la línea `server_name _;` por el tuyo (ej.
`server_name terosocial.midominio.uy;`), guardá con Ctrl+O y Enter, y salí con
Ctrl+X. Después:

```bash
ln -s /etc/nginx/sites-available/terosocial /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

Ya debería responder por HTTP: abrí `http://IP-DEL-SERVIDOR/` en el navegador.

### B5. Firewall (importante en un server público)

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

Deja pasar solo SSH, HTTP y HTTPS; cierra todo lo demás.

### B6. HTTPS (candado verde) — necesita un dominio

El certificado gratis (Let's Encrypt) **necesita un dominio** apuntando a la
IP del servidor. Con IP sola no se puede. Si ya tenés dominio configurado:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d terosocial.midominio.uy
```

Seguí las preguntas (poné tu mail, aceptá, y elegí redirigir HTTP→HTTPS).
Certbot edita el nginx solo y renueva el certificado automáticamente.

Si todavía no tenés dominio: dejalo en HTTP por ahora; cuando tengas dominio,
corré este paso y listo.

---

# PARTE C — Actualizar el sitio (cada vez que cambiás algo)

**En Windows:**

```powershell
cd "C:\Users\ucibe\Desktop\prueba Cowork\Ejercicios De OSINT\TeroSocial"
powershell -ExecutionPolicy Bypass -File .\herramientas\preparar_entrega.ps1
git add .
git commit -m "cambios del dia"
git push
```

**En el Debian (por SSH):** entrá como root primero, porque el script recarga
nginx.

```bash
su
```

```bash
bash /var/www/terosocial/TeroSocial/herramientas/deploy/deploy.sh
```

Ese script baja lo nuevo, arregla permisos y recarga nginx solo. Al terminar,
`exit` para volver a tu cuenta.

(El script detecta si lo corrés como root o como usuario común, así que
funciona de las dos formas; pero como root es lo que corresponde acá.)

---

# PARTE D — Verificar que quedó bien

Reemplazá `SERVIDOR` por tu IP o dominio.

**El sitio responde:**
```bash
curl -I http://SERVIDOR/index.html
```

**El diagnóstico NO está publicado (tiene que dar 404):**
```bash
curl -sI http://SERVIDOR/diagnostico.html | head -1
```
Si da `200`, subiste `web/` por error en vez de servir `entrega/`. Revisá que
la línea `root` del nginx termine en `/entrega`.

**Los metadatos de las fotos sobrevivieron (clave para el ejercicio 2):**

Este es el chequeo más importante de todos, porque es el único fallo que no se
ve: si algo recomprime las imágenes, el sitio queda idéntico y los ejercicios 2
y 3 se quedan sin flag.

```bash
curl -s http://SERVIDOR/media/fotos/costa_3.jpg -o /tmp/prueba.jpg
tr -d '\0' < /tmp/prueba.jpg | grep -Eo '[A-Za-z0-9+/]{80,}={0,2}' | head -1 | base64 -d | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

Tiene que imprimir un texto **legible en español**, que empieza con
"Tengo uno. El primero de todos...". Ese comando hace el mismo camino que va a
hacer el participante: saca el comentario del archivo, lo decodifica de base64
y le aplica ROT13.

Si no imprime nada, los metadatos se perdieron: algo está recomprimiendo las
imágenes (ver la advertencia de la Parte E).

> El comentario se guarda en UTF-16, o sea con un byte nulo entre letra y
> letra. Por eso hace falta el `tr -d '\0'` primero: un `strings` común no lo
> encuentra, y contar caracteres sueltos del binario da un número positivo
> aunque el archivo esté vacío por dentro. Este comando descifra el mensaje de
> verdad o no imprime nada; no hay término medio.

**El fragmento del ejercicio 3 también (foto de perfil):**
```bash
curl -s http://SERVIDOR/media/perfiles/p111.jpg -o /tmp/perfil.jpg
tr -d '\0' < /tmp/perfil.jpg | grep -o 'dispositivo_origen=[^ ]*'
```
Tiene que contener `-4b19` (aparece pegado al campo siguiente, así que vas a
ver algo como `dispositivo_origen=****-*****-****-****-4b19Xiaomi`).

**El listado de /respaldo/ funciona (ejercicio 3):**
```bash
curl -s http://SERVIDOR/respaldo/ | grep -c "notas_admin"
```
Tiene que dar 1. Si da 0, falta el `autoindex on` en el nginx.

**Las cuentas ocultas llegaron al servidor:**
```bash
curl -s http://SERVIDOR/js/datos_usuarios.js | grep -c 'v\.sokolov\|tero_anon_2019'
```
Tiene que dar 2 o más.

> No sirve pedir `perfil.html?u=v.sokolov` y buscar "Sokolov" ahí: las
> páginas del sitio son una cáscara vacía que se completa con JavaScript en
> el navegador, así que el HTML que devuelve `curl` no tiene ningún nombre
> adentro. Ese chequeo daría 0 siempre, aunque todo funcione. Los datos
> viven en los archivos de `js/`.

---

# PARTE E — Cuidados extra (porque es público)

- **NUNCA actives optimización de imágenes** (ngx_pagespeed, image_filter,
  Cloudflare "Polish", scripts con jpegoptim/optipng/imagemagick sobre la
  carpeta). Todos borran los metadatos EXIF y rompen el ejercicio 2 en
  silencio: el sitio se ve igual pero las fotos quedan vacías por dentro. Los
  JPG tienen que llegar al navegador **byte por byte** como están en disco.

- **Mayúsculas:** Windows no distingue `Ave_5.jpg` de `ave_5.jpg`, Linux sí.
  Si agregás fotos nuevas, revisá que el nombre en el código coincida exacto
  con el del archivo, o dará 404 solo en el servidor.

- **Parches de seguridad automáticos** (recomendado en un server público):
  ```bash
  apt install -y unattended-upgrades
  dpkg-reconfigure -plow unattended-upgrades
  ```

- **SSH más seguro** (opcional pero recomendado): usá login por llave en vez
  de contraseña, y una vez que confirmes que entrás con llave, desactivá el
  login por contraseña. Hacelo con cuidado de no dejarte afuera.

- **El repo, siempre privado.** Si alguna vez GitHub te ofrece "make public",
  no lo hagas: ahí vive el solucionario.
