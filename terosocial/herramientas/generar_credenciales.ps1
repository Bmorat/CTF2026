# =====================================================================
#  TeroSocial - genera web/js/credenciales.js
#
#  Las contraseñas se guardan como SHA-256, nunca en claro: si un
#  participante abre el archivo ve el hash y no la contraseña. Tiene
#  que encontrarla investigando el entorno.
#
#  Editá la tabla $CUENTAS de abajo y volvé a correr el script.
#
#  Uso: powershell -ExecutionPolicy Bypass -File .\generar_credenciales.ps1
# =====================================================================

$ErrorActionPreference = 'Stop'

# ---------------------------------------------------------------
#  Cuentas que pueden iniciar sesión.
#  El "usuario" tiene que ser un alias que exista en el padrón
#  (web/js/datos_usuarios.js). El login acepta el alias tal cual
#  o el alias seguido de @correo.uy
# ---------------------------------------------------------------
$CUENTAS = @(
    @{ usuario = 'marce.peluquera';  clave = 'peluqueria2019' }
    @{ usuario = 'elrusodelquiosco'; clave = 'quiosco1234'    }
)

$raiz   = Split-Path -Parent $PSScriptRoot
$salida = Join-Path $raiz 'web\js\credenciales.js'
$padron = Join-Path $raiz 'web\js\datos_usuarios.js'

# Aviso si alguna cuenta no existe en el padrón
if (Test-Path $padron) {
    $txt = Get-Content $padron -Raw -Encoding UTF8
    foreach ($c in $CUENTAS) {
        if ($txt -notmatch [regex]::Escape('alias: "' + $c.usuario + '"')) {
            Write-Host ("AVISO: '{0}' no figura en el padrón de usuarios." -f $c.usuario) -ForegroundColor Yellow
        }
    }
}

$sha = [System.Security.Cryptography.SHA256]::Create()
$filas = New-Object System.Collections.Generic.List[string]

foreach ($c in $CUENTAS) {
    $h = ($sha.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($c.clave)) |
          ForEach-Object { $_.ToString('x2') }) -join ''
    $filas.Add("  {`r`n    usuario: `"$($c.usuario)`",`r`n    hashes: [`r`n      `"$h`"`r`n    ]`r`n  }")
    Write-Host ("  {0,-20} {1,-18} {2}" -f $c.usuario, $c.clave, $h.Substring(0, 16) + '...')
}

$contenido = @"
/* =========================================================
   TeroSocial - credenciales válidas de la plataforma

   Las contraseñas NO están en claro: se guarda el SHA-256.
   Un participante que lea este archivo ve el hash y no la
   contraseña, así que las credenciales tiene que encontrarlas
   investigando el entorno, no leyendo el código.

   Generado por herramientas\generar_credenciales.ps1
   ========================================================= */

window.CREDENCIALES = [
$($filas -join ",`r`n")
];

/* Mensajes que muestra el formulario. Se dejan acá para poder
   ajustarlos sin tocar la lógica. */
window.MENSAJES_LOGIN = {
  vacio:      "Completá usuario y contraseña.",
  incorrecto: "El usuario o la contraseña no son correctos.",
  bloqueo:    "Demasiados intentos fallidos. Esperá un momento antes de volver a probar."
};
"@

[System.IO.File]::WriteAllText($salida, $contenido, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ''
Write-Host ("Escrito: {0}  ({1} cuentas)" -f $salida, $CUENTAS.Count) -ForegroundColor Green
Write-Host ''
Write-Host 'Recordá sembrar las contraseñas en algún lado del entorno:' -ForegroundColor Cyan
Write-Host '  una captura descuidada, un aviso del marketplace, una publicación vieja,'
Write-Host '  un comentario borrado que quedó en el respaldo.'
