USERS = {
    "Operadora.Chaja": {
        "password": "t3r0/Alerta",
        "flag": "la-bandera-es{hellfire}",
    },
    "YerbaNegra": {
        "password": "M4t3/Ant3na",
        "flag": "la-bandera-es{rednex}",
    },
    "BañadoCero": {
        "password": "305+278TERO",
        "flag": "la-bandera-es{mulder}",
    },
    "NodoPalmera": {
        "password": "OPR-33",
        "flag": "la-bandera-es{prim}",
    },
}

def obtener_bandera(usuario: str, contrasena: str) -> str | None:
    """Devuelve la bandera asociada al usuario si las credenciales son válidas."""
    datos = USERS.get(usuario)
    if datos and contrasena == datos["password"]:
        return datos["flag"]
    return None


def main() -> None:
    usuario = input("Usuario: ")
    contrasena = input("Contraseña: ")
    bandera = obtener_bandera(usuario, contrasena)
    if bandera:
        print(bandera)
    else:
        print("Usuario o contraseña incorrectos")


if __name__ == "__main__":
    main()
