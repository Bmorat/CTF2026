#!/usr/bin/env python3
"""
TeroSocial - servidor para cuando no hay permisos de administrador.

Sirve la carpeta entrega/ sin instalar nada y sin pedir root, en un puerto
alto. Pensado para el Debian de la unidad cuando la cuenta no tiene sudo.

    python3 servidor_sin_root.py                 # puerto 8080
    python3 servidor_sin_root.py 9000            # otro puerto

Reproduce el comportamiento del nginx de deploy/nginx-terosocial.conf, que
NO es el de "python3 -m http.server" pelado. Tres diferencias que importan:

  1. Listado de carpetas SOLO en /respaldo/, /api/ y /_dev/.
     El servidor de Python lista todo por defecto, y eso rompe el ejercicio
     3: /respaldo/ tiene que descubrirse leyendo robots.txt, no navegando.
     Con el listado abierto en todos lados tambien se pueden espiar
     /media/fotos/ y /js/ y adelantarse a los tres ejercicios.

  2. Los errores 404 devuelven la pagina 404.html de la plataforma, que es
     parte del decorado. El participante del ejercicio 3 se pasa un buen
     rato tecleando direcciones a mano; ahi tiene que ver TeroSocial, no un
     mensaje de error de Python.

  3. Tipos MIME de las fuentes. Python no conoce .woff2 y lo manda como
     binario generico; algunos navegadores lo rechazan y la tipografia se
     cae al tipo de letra por defecto sin avisar.

Las imagenes se mandan tal cual estan en disco, byte por byte: aca no hay
nada que recomprima ni optimice, asi que los metadatos de los ejercicios 2
y 3 llegan intactos.
"""
import http.server
import mimetypes
import os
import socket
import socketserver
import sys

# Carpetas que SI se pueden listar. El resto responde 404 aunque exista.
LISTABLES = ("/respaldo/", "/api/", "/_dev/")

# entrega/ esta dos niveles arriba de este archivo:
#   TeroSocial/herramientas/deploy/servidor_sin_root.py  ->  TeroSocial/entrega
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "entrega"))

mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("font/woff", ".woff")
mimetypes.add_type("image/svg+xml", ".svg")


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=RAIZ, **kwargs)

    def list_directory(self, path):
        """Solo lista las carpetas del ejercicio; las demas dan 404."""
        pedido = self.path.split("?")[0].split("#")[0]
        if not pedido.endswith("/"):
            pedido += "/"
        if pedido in LISTABLES:
            return super().list_directory(path)
        self.send_error(404, "No encontrado")
        return None

    def send_error(self, code, message=None, explain=None):
        """Devuelve la 404.html de la plataforma en vez del error de Python."""
        if code == 404:
            pagina = os.path.join(RAIZ, "404.html")
            if os.path.isfile(pagina):
                try:
                    with open(pagina, "rb") as f:
                        cuerpo = f.read()
                except OSError:
                    cuerpo = None
                if cuerpo is not None:
                    self.send_response(404, message)
                    self.send_header("Content-Type", "text/html; charset=utf-8")
                    self.send_header("Content-Length", str(len(cuerpo)))
                    self.send_header("Connection", "close")
                    self.end_headers()
                    if self.command != "HEAD":
                        self.wfile.write(cuerpo)
                    return
        super().send_error(code, message, explain)

    def log_message(self, formato, *args):
        # Solo los errores; si no, 300 lineas por visita y no se ve nada.
        estado = str(args[1]) if len(args) > 1 else ""
        if estado.startswith(("4", "5")):
            sys.stderr.write("  %s %s\n" % (estado, self.path))


class Servidor(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def ip_local():
    """La IP con la que se ve esta maquina desde la red, sin resolver DNS."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("192.0.2.1", 1))  # direccion de documentacion, no se conecta
        return s.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        s.close()


def main():
    puerto = 8080
    if len(sys.argv) > 1:
        try:
            puerto = int(sys.argv[1])
        except ValueError:
            print("El puerto tiene que ser un numero. Ej: python3 %s 9000"
                  % os.path.basename(__file__))
            return 1

    if not os.path.isdir(RAIZ):
        print("No encuentro la carpeta entrega/ en:\n  %s" % RAIZ)
        print("\nEste archivo tiene que quedar dentro del proyecto, en")
        print("TeroSocial/herramientas/deploy/, para ubicarla solo.")
        return 1

    if puerto < 1024 and os.name != "nt" and os.geteuid() != 0:
        print("El puerto %d necesita permisos de administrador." % puerto)
        print("Usa uno arriba de 1024, por ejemplo 8080.")
        return 1

    try:
        srv = Servidor(("0.0.0.0", puerto), Handler)
    except OSError as e:
        print("No pude abrir el puerto %d: %s" % (puerto, e))
        print("Puede estar ocupado. Proba con otro: python3 %s 8081"
              % os.path.basename(__file__))
        return 1

    print("")
    print("  TeroSocial en linea")
    print("  sirviendo : %s" % RAIZ)
    print("  desde esta maquina : http://localhost:%d/" % puerto)
    print("  desde la red       : http://%s:%d/" % (ip_local(), puerto))
    print("")
    print("  Listado de carpetas habilitado solo en: %s" % ", ".join(LISTABLES))
    print("  Cortar con Ctrl+C")
    print("")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\n  Servidor detenido.")
    finally:
        srv.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
