from pydub import AudioSegment

# --- CONFIG ---
# Requiere ffmpeg disponible en el PATH del sistema.
ruta_mp3 = "entrada.mp3"
mensaje_morse = "alerta"
unidad = 10  # milisegundos por unidad morse (1 decisegundo = 100 ms)
inicio_morse = 7000  # milisegundos desde donde empieza el efecto
# ----------------

# Diccionario Morse
MORSE = {
    "a": ".-",    "b": "-...",  "c": "-.-.",  "d": "-..",   "e": ".",
    "f": "..-.",  "g": "--.",   "h": "....",  "i": "..",    "j": ".---",
    "k": "-.-",   "l": ".-..",  "m": "--",    "n": "-.",    "o": "---",
    "p": ".--.",  "q": "--.-",  "r": ".-.",   "s": "...",   "t": "-",
    "u": "..-",   "v": "...-",  "w": ".--",   "x": "-..-",  "y": "-.--",
    "z": "--..",  " ": " "
}

# Cargar audio original
audio = AudioSegment.from_mp3(ruta_mp3)

# Convertir mensaje a Morse
morse = ' '.join(MORSE[c] for c in mensaje_morse.lower())

# Posición inicial del efecto en milisegundos
pos = inicio_morse

for c in morse:
    if c == ".":
        dur = unidad  # punto = 1 unidad
    elif c == "-":
        dur = unidad * 3  # raya = 3 unidades
    elif c == " ":
        pos += unidad * 7  # espacio entre palabras
        continue
    else:
        continue

    # Insertar silencio en el audio original
    audio = audio[:pos] + AudioSegment.silent(duration=dur) + audio[pos + dur:]
    pos += dur + unidad  # Avanzar: duración + espacio entre símbolos

# Exportar resultado
audio.export("salida_morse.mp3", format="mp3")
print("✅ Archivo creado: salida_morse.mp3")