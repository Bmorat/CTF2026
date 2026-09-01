from flask import Flask, render_template, request, make_response, redirect, url_for, Response
from threading import Thread
import os
import re
from logins_flags import obtener_bandera
from notas import notas_tero, CATEGORIAS_NOTAS, SLUG_MANIFIESTO, SLUG_RECLUTAMIENTO

# === FLASK APP ===
app = Flask(__name__)

# Credenciales válidas administradas en logins_flags.py

@app.route('/')
def index():
    iluminado = request.cookies.get('Nido')

    if iluminado is None:
        resp = make_response(render_template('no_autorizado.html'))
        resp.set_cookie('Nido', 'False')
        return resp

    if iluminado != 'True':
        return render_template('no_autorizado.html')

    resp = make_response(render_template(
        'index.html',
        notas=notas_tero,
        categorias=CATEGORIAS_NOTAS,
        slug_manifiesto=SLUG_MANIFIESTO,
        slug_reclutamiento=SLUG_RECLUTAMIENTO,
    ))
    resp.set_cookie('bandera', '{Rey_Julian}')
    return resp


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        usuario = request.form.get('usuario', '')
        contrasena = request.form.get('contrasena', '')

        bandera = obtener_bandera(usuario, contrasena)
        if bandera:
            resp = make_response(render_template('login.html', alert=bandera))
            resp.set_cookie('Nido', 'True')
            return resp

        return render_template('login.html', error='Usuario o contraseña incorrectos')

    return render_template('login.html')

@app.route('/p4s5w0rd')
def password_vault():
    return render_template('p4s5w0rd.html')

@app.route('/submit', methods=['POST'])
def submit():
    flag = request.form.get('flag')
    if flag == 'CTF{vamo_arriba_flask}':
        return "✅ Correcto, ñery. El tero bajó la guardia."
    return "❌ Esa no es la flag. El grito sigue activo."

@app.route('/nota/<slug>')
def ver_nota(slug):
    nota = notas_tero.get(slug)
    if nota is None:
        return "<h2>Registro rural no encontrado, ñery.</h2>", 404
    categoria = CATEGORIAS_NOTAS.get(slug, "")
    return render_template('nota.html', categoria=categoria, **nota)

patrones_sqli = [
    # OR 1=1 (con o sin comillas alrededor de 1, con posible comentario)
    re.compile(r"(?ix)^\s*['\"]?\s*or\s+['\"]?1['\"]?\s*=\s*['\"]?1['\"]?\s*(?:--|\#)?\s*$"),

    # admin seguido por comilla (ej: admin' , admin" ) y/o contenido de payload y posible comentario
    # Esto exige al menos una comilla después de admin para considerarlo inyección.
    re.compile(r"(?ix)^\s*admin\s*['\"].*(?:--|\#)?\s*$"),

    # alternativa: admin seguido por un OR / = / comentario sin comilla
    re.compile(r"(?ix)^\s*admin\s+or\b.*"),
    re.compile(r"(?ix)^\s*admin\s*=\s*.*"),
]

@app.route('/cpanel', methods=['GET', 'POST'])
def admin():  # login
    if request.method == 'POST':
        usuario = request.form.get('usuario', '').strip()

        for patron in patrones_sqli:
            if patron.match(usuario):
                # SQLi detectada -> simulamos login exitoso
                return redirect(url_for('admin_success'))

        # Credenciales inválidas -> volvemos al login con mensaje
        return render_template('cpanel.html', mensaje="Usuario o contraseña incorrectos.")

    # GET: mostrar login
    return render_template('cpanel.html')

@app.route('/admx4', methods=['GET'])
def admin_success():
    # Página fake de panel con la bandera
    return render_template('admin.html', flag='la-bandera-es{sqli_exitoso}')


@app.route('/33/grito', methods=['GET'])
def grito():
    # Se sirve crudo desde disco a proposito: Jinja2 no debe tocar este JS.
    # El parametro ?k= lo lee el navegador, el servidor lo ignora.
    ruta = os.path.join(app.root_path, 'templates', 'grito.html')
    with open(ruta, 'rb') as f:
        cuerpo = f.read()
    resp = Response(cuerpo, mimetype='text/html')
    resp.headers['Content-Type'] = 'text/html; charset=utf-8'
    resp.headers['Cache-Control'] = 'no-store'
    return resp


app_secreta = Flask('app_secreta')

@app_secreta.route('/')
def secreto():
    return "<h1>📡 Bienvenido al núcleo del Sistema T.E.R.O.</h1><p>la-bandera-es{oriental}</p>"

def correr_flask_secreta():
    app_secreta.run(host='0.0.0.0', port=7777, debug=False)


def correr_flask():
    app.run(host='0.0.0.0', port=5000, debug=False)

if __name__ == '__main__':
    Thread(target=correr_flask_secreta).start()   # Puerto 7777
    correr_flask()                                # Puerto 5000
