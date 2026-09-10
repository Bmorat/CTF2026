from PyPDF2 import PdfReader

archivo = "static/archivos/in_albo_latet_final.pdf"

reader = PdfReader(archivo)

texto = ""
for pagina in reader.pages:
    texto += pagina.extract_text() or ""

bits = ""

for c in texto:
    if c == "\u200B":
        bits += "0"
    elif c == "\u200C":
        bits += "1"
    elif c == "_":
        bits += "_"

print("Binario extraído:")
print(bits)

palabras_binarias = bits.split("_")

palabras = []

for bloque in palabras_binarias:
    palabra = ""

    for i in range(0, len(bloque), 8):
        byte = bloque[i:i+8]

        if len(byte) == 8:
            palabra += chr(int(byte, 2))

    palabras.append(palabra)

bandera = "_".join(palabras)

print("\nBandera:")
print(bandera)