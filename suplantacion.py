import re

# Diccionario de sustitución personalizado (puede incluir ñ, mayúsculas, etc.)
diccionario = {
    'a': 'r', 'b': 'd', 'c': 'f', 'd': 'g', 'e': 'h',
    'f': 'b', 'g': 'j', 'h': 'k', 'i': 'e', 'j': 'm',
    'k': 'o', 'l': 'n', 'm': 'q', 'n': 'p', 'ñ': 's',
    'o': 'i', 'p': 'c', 'q': 't', 'r': 'u', 's': 'l',
    't': 'v', 'u': 'a', 'v': 'w', 'w': 'x', 'x': 'y',
    'y': 'z', 'z': 'ñ'
}

def sustituir_texto(texto, sustitucion):
    resultado = ''
    for char in texto:
        # Mantiene mayúsculas, pero las convierte si están en el diccionario
        if char.lower() in sustitucion:
            nuevo = sustitucion[char.lower()]
            resultado += nuevo.upper() if char.isupper() else nuevo
        else:
            resultado += char
    return resultado

def cifrar_html_con_diccionario(html, sustitucion):
    # Divide por etiquetas: lo que está entre <...> se preserva
    partes = re.split(r'(<[^>]+>)', html)
    
    partes_cifradas = [
        parte if parte.startswith('<') and parte.endswith('>') else sustituir_texto(parte, sustitucion)
        for parte in partes
    ]
    
    return ''.join(partes_cifradas)

# --- Ejemplo
html_original = '''
{aleph}
'''

html_cifrado = cifrar_html_con_diccionario(html_original, diccionario)
print(html_cifrado)
