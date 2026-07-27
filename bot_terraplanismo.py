# bot_terraplanismo.py
import os
from pathlib import Path
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes, filters

# === CONFIGURACIÓN BÁSICA ===
BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN")
IMAGE_FILENAME = "tero_drone.png"  # debe estar en el mismo directorio del script

PASSWORD = "chaja-cifrado"
FLAG = "la-bandera-es{tero_detectado}"

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

# === HANDLERS ===
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    mensaje = (
        "📡 Bienvenido al nodo T.E.R.O. 2026.\n\n"
        "🧠 Los teros no son pájaros: son drones de vigilancia rural.\n"
        "⚠️ Este canal es solo para observadores fuera del radar del MGAP.\n"
        "Si estás acá, es porque el grito ya te marcó.\n\n"
        "🔐 Ingresá la contraseña para acceder.\n"
        "(La señal está en el campo, pero la antena vive en tus ojos...)"
    )

    ruta_imagen = Path(__file__).parent / IMAGE_FILENAME
    if ruta_imagen.is_file():
        with ruta_imagen.open("rb") as img:
            await update.message.reply_photo(photo=img, caption=mensaje)
    else:
        await update.message.reply_text(
            f"⚠️ No se encontró el archivo '{IMAGE_FILENAME}' al lado del script, ñery."
        )

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if not update.message or not update.message.text:
        return

    mensaje = update.message.text.strip().lower()

    if mensaje in RESPUESTAS_BOT:
        await update.message.reply_text(RESPUESTAS_BOT[mensaje])
    elif mensaje == PASSWORD:
        await update.message.reply_text(f"✅ Contraseña correcta.\n{FLAG}")
    else:
        await update.message.reply_text("❌ Esa no es la palabra. El tero sigue gritando.")

# === MAIN ===
def main() -> None:
    if not BOT_TOKEN:
        raise RuntimeError("Falta configurar la variable de entorno TELEGRAM_BOT_TOKEN")

    app = Application.builder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    print("📡 Bot activo. Esperando mensajes...")
    app.run_polling()

if __name__ == "__main__":
    main()
