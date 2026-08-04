from flask import Flask, render_template, request, make_response, redirect, url_for
from threading import Thread
import os
import re
import asyncio
from telegram import Update
from telegram.ext import ApplicationBuilder, MessageHandler, ContextTypes, filters
import nest_asyncio
from telegram.ext import CommandHandler
from logins_flags import obtener_bandera
nest_asyncio.apply()
from notas import notas_terraplanistas

# === FLASK APP ===
app = Flask(__name__)
PASSWORD = "chaja-cifrado"
FLAG = "la-bandera-es{tero_detectado}"
BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN")
RUTA_IMAGEN = r"C:\Users\liber\Downloads\tero_drone.png"

RESPUESTAS_BOT = {
    "hellfire": "1D",
    "maquiavelo": "2E",
    "tero": "3S",
    "oriental": "4I",
    "alien": "5N",
    "bienvenido": "6F",
    "sqli_exitoso": "7O",
    "alerta_rural": "8R",
    "prim": "9M",
    "aleph": "10A",
    "rednex": "11N",
}

# Credenciales válidas administradas en logins_flags.py

# /start → mensaje + imagen
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    mensaje = (
        "📡 *Bienvenido al nodo T\\.E\\.R\\.O\\. 2026\\.*\n\n"
        "🧠 Los teros no son pájaros: son sensores biotecnológicos de vigilancia rural\\.\n"
        "⚠️ Este canal es solo para observadores fuera del radar del MGAP\\.\n"
        "Si estás acá, es porque el grito ya te marcó\\.\n\n"
        "🔐 Ingresá la *contraseña* para acceder\\.\n"
        "_\\(La señal está en el campo, pero la antena vive en tus ojos\\.\\.\\.\\)_"
    )

    try:
        with open(RUTA_IMAGEN, "rb") as imagen:
            await update.message.reply_document(
                document=imagen,
                caption=mensaje,
                parse_mode="MarkdownV2"
            )
    except FileNotFoundError:
        await update.message.reply_text("⚠️ No se encontró el archivo del tero. Contactá al operador rural, ñery.")

# Lógica del bot
async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    mensaje = update.message.text.strip().lower()

    if mensaje in RESPUESTAS_BOT:
        await update.message.reply_text(RESPUESTAS_BOT[mensaje])
    elif mensaje == PASSWORD:
        await update.message.reply_text(f"✅ Contraseña correcta.\n{FLAG}")
    else:
        await update.message.reply_text("❌ Esa no es la palabra. El tero sigue gritando.")

async def correr_bot():
    if not BOT_TOKEN:
        raise RuntimeError("Falta configurar la variable de entorno TELEGRAM_BOT_TOKEN")

    bot = ApplicationBuilder().token(BOT_TOKEN).build()
    bot.add_handler(CommandHandler("start", start))
    bot.add_handler(MessageHandler(filters.TEXT & (~filters.COMMAND), handle_message))
    print("📡 Bot activo. Esperando mensajes...")
    await bot.run_polling()

@app.route('/')
def index():
    iluminado = request.cookies.get('iluminado')

    if iluminado is None:
        resp = make_response(render_template('no_autorizado.html'))
        resp.set_cookie('iluminado', 'False')
        return resp

    if iluminado != 'True':
        return render_template('no_autorizado.html')

    resp = make_response(render_template('index.html', notas=notas_terraplanistas))
    resp.set_cookie('bandera', 'bienvenido')
    return resp


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        usuario = request.form.get('usuario', '')
        contrasena = request.form.get('contrasena', '')

        bandera = obtener_bandera(usuario, contrasena)
        if bandera:
            resp = make_response(render_template('login.html', alert=bandera))
            resp.set_cookie('iluminado', 'True')
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
    nota = notas_terraplanistas.get(slug)
    if nota is None:
        return "<h2>Registro rural no encontrado, ñery.</h2>", 404
    return render_template('nota.html', **nota)

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


app_secreta = Flask('app_secreta')

@app_secreta.route('/')
def secreto():
    iluminado = request.cookies.get('iluminado')

    if iluminado != 'True':
        return "<h2>Acceso no autorizado</h2><p>Esta frecuencia no es para vos, ñery.</p>", 403

    host_sin_puerto = request.host.split(':')[0]
    url_blog = f"http://{host_sin_puerto}:5000/"

    return f"""
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Núcleo T.E.R.O.</title>
        <style>
            body {{
                margin: 0;
                height: 100vh;
                background: radial-gradient(circle, #1e3a8a, #020617);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Arial, sans-serif;
            }}
            .card {{
                background: rgba(15, 23, 42, 0.92);
                border: 3px solid #38bdf8;
                border-radius: 20px;
                padding: 50px;
                text-align: center;
                box-shadow: 0 0 35px #38bdf8;
            }}
            h1 {{ font-size: 32px; color: #facc15; margin-bottom: 20px; }}
            .flag {{
                font-size: 28px;
                font-weight: bold;
                color: #22c55e;
                background: #020617;
                padding: 20px;
                border-radius: 12px;
                border: 2px dashed #22c55e;
                margin-bottom: 30px;
            }}
            a.continuar {{
                display: inline-block;
                background: #2563eb;
                color: white;
                text-decoration: none;
                padding: 14px 30px;
                border-radius: 10px;
                font-size: 18px;
            }}
            a.continuar:hover {{ background: #1d4ed8; }}
        </style>
    </head>
    <body>
        <div class="card">
            <h1>📡 Núcleo del Sistema T.E.R.O.</h1>
            <div class="flag">la-bandera-es{{oriental}}</div>
            <a class="continuar" href="{url_blog}">Continuar →</a>
        </div>
    </body>
    </html>
    """

def correr_flask_secreta():
    app_secreta.run(host='0.0.0.0', port=7777, debug=False)


def correr_flask():
    app.run(host='0.0.0.0', port=5000, debug=False)

if __name__ == '__main__':
    Thread(target=correr_flask).start()           # Puerto 5000
    Thread(target=correr_flask_secreta).start()   # Puerto 7777
    asyncio.run(correr_bot())
