from flask import Flask, render_template, request, make_response, redirect, url_for, Response, session, send_file
from threading import Thread
import os
import sqlite3
import secrets
import string
import re
from logins_flags import obtener_bandera
from notas import notas_tero, CATEGORIAS_NOTAS, SLUG_MANIFIESTO, SLUG_RECLUTAMIENTO

# === FLASK APP ===
app = Flask(__name__)

# Sesion firmada: clave aleatoria y estable durante la corrida.
# Evita que se forje la cookie de sesion a mano; el unico camino adentro es el SQLi.
app.secret_key = os.urandom(32)

# --- Base de operadores (SQLite) para el reto de SQL injection ---
RUTA_OPERADORES_DB = os.path.join(app.root_path, 'operadores.db')

def init_operadores_db():
    """Crea operadores.db con un unico operador si todavia no existe.
    La clave es larga y aleatoria: no es adivinable por fuerza bruta,
    el unico camino de entrada es la inyeccion SQL en /login."""
    if os.path.exists(RUTA_OPERADORES_DB):
        return
    alfabeto = string.ascii_letters + string.digits + "!@#$%^&*()-_=+[]{};:,.?"
    clave = ''.join(secrets.choice(alfabeto) for _ in range(24))
    con = sqlite3.connect(RUTA_OPERADORES_DB)
    con.execute("CREATE TABLE operadores (usuario TEXT, clave TEXT)")
    con.execute(
        "INSERT INTO operadores (usuario, clave) VALUES (?, ?)",
        ("tero_admin", clave),
    )
    con.commit()
    con.close()

init_operadores_db()

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
        clave = request.form.get('clave', '')

        # Reto CTF: consulta armada por concatenacion directa de strings.
        # Es DELIBERADAMENTE vulnerable a SQL injection. No parametrizar.
        q = "SELECT usuario FROM operadores WHERE usuario = '%s' AND clave = '%s'" % (usuario, clave)

        fila = None
        try:
            con = sqlite3.connect(RUTA_OPERADORES_DB)
            try:
                fila = con.execute(q).fetchone()
            finally:
                con.close()
        except Exception:
            fila = None

        if fila:
            session['operador'] = fila[0]
            return redirect(url_for('nodo'))

        # Error generico: no revelamos ni la consulta ni el error de SQL.
        return render_template('login.html', error='Credenciales inválidas'), 401

    return render_template('login.html')


@app.route('/nodo')
def nodo():
    if 'operador' not in session:
        return redirect(url_for('login'))
    return render_template('nodo.html', operador=session['operador'],
                           flag='la-bandera-es{oriental}')

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
    return render_template('nota.html', categoria=categoria, slug=slug, **nota)

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


@app.route('/descargas/senal_6925khz.jpg')
def descarga_senal():
    # Se fuerza la descarga con octet-stream a proposito: el navegador no debe
    # intentar renderizar el archivo. Se sirve tal cual esta en disco.
    ruta = os.path.join(app.root_path, 'static', 'archivos', 'senal_6925khz.jpg')
    return send_file(
        ruta,
        mimetype='application/octet-stream',
        as_attachment=True,
        download_name='senal_6925khz.jpg',
    )


def correr_flask():
    app.run(host='0.0.0.0', port=5000, debug=False)

if __name__ == '__main__':
    correr_flask()                                # Puerto 5000
