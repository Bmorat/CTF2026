# =====================================================================
#  TeroSocial - servidor local para el ejercicio "Operacion Tero"
#
#  No requiere instalar nada: usa solo lo que ya trae Windows.
#  Sirve la carpeta web\ en http://localhost:8000/ y lista directorios
#  (necesario para que el reto R04 funcione).
#
#  Uso:
#      Clic derecho sobre este archivo  ->  "Ejecutar con PowerShell"
#
#  O desde una consola, parado en la carpeta TeroSocial:
#      powershell -ExecutionPolicy Bypass -File .\servir.ps1
#
#  Para que entren desde otras maquinas de la red, abrir la consola
#  como administrador y agregar -Publico:
#      powershell -ExecutionPolicy Bypass -File .\servir.ps1 -Publico
#
#  Detener con Ctrl+C.
# =====================================================================

param(
    [int]$Puerto = 8000,
    [switch]$Publico,
    [string]$Carpeta = 'web'    # usar 'entrega' para servir la copia sin herramientas internas
)

$ErrorActionPreference = 'Stop'

$raiz = Join-Path $PSScriptRoot $Carpeta
if (-not (Test-Path $raiz)) {
    Write-Host ("ERROR: no encuentro la carpeta '{0}' junto a este script." -f $Carpeta) -ForegroundColor Red
    if ($Carpeta -eq 'entrega') {
        Write-Host "Genera la copia de entrega con: herramientas\preparar_entrega.ps1" -ForegroundColor Yellow
    } else {
        Write-Host "Este archivo tiene que quedar dentro de la carpeta TeroSocial." -ForegroundColor Red
    }
    Read-Host "Enter para salir"
    exit 1
}
$raiz = (Resolve-Path $raiz).Path

$tipos = @{
    '.html' = 'text/html; charset=utf-8'
    '.htm'  = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.txt'  = 'text/plain; charset=utf-8'
    '.xml'  = 'application/xml; charset=utf-8'
    '.svg'  = 'image/svg+xml'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.gif'  = 'image/gif'
    '.ico'  = 'image/x-icon'
    '.webp' = 'image/webp'
    '.pdf'  = 'application/pdf'
    '.md'   = 'text/plain; charset=utf-8'
    # Sin el tipo correcto, algunos navegadores rechazan la tipografia
    # y la pagina cae a una fuente del sistema.
    '.woff2' = 'font/woff2'
    '.woff'  = 'font/woff'
    '.ttf'   = 'font/ttf'
}

$oyente = New-Object System.Net.HttpListener
if ($Publico) {
    $oyente.Prefixes.Add("http://+:$Puerto/")
} else {
    $oyente.Prefixes.Add("http://localhost:$Puerto/")
}

try {
    $oyente.Start()
} catch {
    Write-Host ""
    Write-Host "No se pudo abrir el puerto $Puerto." -ForegroundColor Red
    if ($Publico) {
        Write-Host "El modo -Publico necesita una consola ABIERTA COMO ADMINISTRADOR." -ForegroundColor Yellow
    } else {
        Write-Host "Puede que el puerto ya este en uso. Proba con otro:" -ForegroundColor Yellow
        Write-Host "    .\servir.ps1 -Puerto 8080" -ForegroundColor Yellow
    }
    Write-Host ""
    Write-Host ("Detalle: " + $_.Exception.Message) -ForegroundColor DarkGray
    Read-Host "Enter para salir"
    exit 1
}

Write-Host ""
Write-Host "  TeroSocial - Operacion Tero" -ForegroundColor Cyan
Write-Host "  ============================================" -ForegroundColor Cyan
Write-Host ("  Sirviendo: " + $raiz)
Write-Host ("  Local:     http://localhost:$Puerto/") -ForegroundColor Green

if ($Publico) {
    $ips = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
           Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' }
    foreach ($ip in $ips) {
        Write-Host ("  En red:    http://" + $ip.IPAddress + ":$Puerto/") -ForegroundColor Green
    }
    Write-Host ""
    Write-Host "  Si desde otra maquina no entra, es el firewall de Windows." -ForegroundColor DarkGray
    Write-Host "  Abrir el puerto una sola vez, como administrador:" -ForegroundColor DarkGray
    Write-Host ("    netsh advfirewall firewall add rule name=""TeroSocial $Puerto"" dir=in action=allow protocol=TCP localport=$Puerto") -ForegroundColor DarkGray
    Write-Host "  Y para sacarla cuando termine el ejercicio:" -ForegroundColor DarkGray
    Write-Host ("    netsh advfirewall firewall delete rule name=""TeroSocial $Puerto""") -ForegroundColor DarkGray
}

Write-Host "  ============================================" -ForegroundColor Cyan
Write-Host "  Ctrl+C para detener."
Write-Host ""

try {
    while ($oyente.IsListening) {

        $contexto  = $oyente.GetContext()
        $peticion  = $contexto.Request
        $respuesta = $contexto.Response

        $rutaUrl = [System.Uri]::UnescapeDataString($peticion.Url.AbsolutePath)
        $rutaRel = $rutaUrl.TrimStart('/').Replace('/', '\')
        $destino = Join-Path $raiz $rutaRel

        # Normalizar y verificar que no se escape de la carpeta web\
        $seguro = $true
        try {
            $destinoCompleto = [System.IO.Path]::GetFullPath($destino)
        } catch {
            $seguro = $false
            $destinoCompleto = $raiz
        }
        if (-not $destinoCompleto.StartsWith($raiz, [System.StringComparison]::OrdinalIgnoreCase)) {
            $seguro = $false
        }

        $cuerpo = $null
        $codigo = 200
        $tipo   = 'text/html; charset=utf-8'

        if (-not $seguro) {
            $codigo = 403
            $cuerpo = [System.Text.Encoding]::UTF8.GetBytes('<h1>403 - Prohibido</h1>')
        }
        elseif (Test-Path -LiteralPath $destinoCompleto -PathType Container) {

            $indice = Join-Path $destinoCompleto 'index.html'

            if (Test-Path -LiteralPath $indice -PathType Leaf) {
                $cuerpo = [System.IO.File]::ReadAllBytes($indice)
            }
            else {
                # Listado de directorio, igual que el servidor de Python.
                $urlBase = $rutaUrl
                if (-not $urlBase.EndsWith('/')) { $urlBase += '/' }

                $sb = New-Object System.Text.StringBuilder
                [void]$sb.Append('<!DOCTYPE html><html lang="es"><head><meta charset="utf-8">')
                [void]$sb.Append('<title>Indice de ' + $urlBase + '</title>')
                [void]$sb.Append('<style>body{font-family:Consolas,monospace;margin:2em;background:#f2f4f7;color:#16202c}')
                [void]$sb.Append('h1{font-size:18px}li{margin:.3em 0}a{color:#4a7fb5}</style></head><body>')
                [void]$sb.Append('<h1>Indice de ' + $urlBase + '</h1><hr><ul>')

                if ($urlBase -ne '/') {
                    [void]$sb.Append('<li><a href="../">../</a></li>')
                }
                $orden = @{ Expression = 'PSIsContainer'; Descending = $true }, @{ Expression = 'Name'; Descending = $false }
                foreach ($item in (Get-ChildItem -LiteralPath $destinoCompleto | Sort-Object -Property $orden)) {
                    if ($item.PSIsContainer) {
                        [void]$sb.Append('<li><a href="' + $item.Name + '/">' + $item.Name + '/</a></li>')
                    } else {
                        $kb = [math]::Round($item.Length / 1KB, 1)
                        [void]$sb.Append('<li><a href="' + $item.Name + '">' + $item.Name + '</a>  <span style="color:#62707f">(' + $kb + ' KB)</span></li>')
                    }
                }
                [void]$sb.Append('</ul><hr></body></html>')
                $cuerpo = [System.Text.Encoding]::UTF8.GetBytes($sb.ToString())
            }
        }
        elseif (Test-Path -LiteralPath $destinoCompleto -PathType Leaf) {
            $cuerpo = [System.IO.File]::ReadAllBytes($destinoCompleto)
            $ext = [System.IO.Path]::GetExtension($destinoCompleto).ToLower()
            if ($tipos.ContainsKey($ext)) {
                $tipo = $tipos[$ext]
            } else {
                $tipo = 'application/octet-stream'
            }
        }
        else {
            $codigo = 404
            # Si existe web\404.html (la pagina con el tero), la servimos.
            $pagina404 = Join-Path $raiz '404.html'
            if (Test-Path -LiteralPath $pagina404 -PathType Leaf) {
                $cuerpo = [System.IO.File]::ReadAllBytes($pagina404)
            } else {
                $rutaSegura = $rutaUrl -replace '&', '&amp;' -replace '<', '&lt;' -replace '>', '&gt;'
                $cuerpo = [System.Text.Encoding]::UTF8.GetBytes(
                    '<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><title>404</title></head>' +
                    '<body style="font-family:sans-serif;margin:3em"><h1>404 - No encontrado</h1>' +
                    '<p>' + $rutaSegura + '</p>' +
                    '<p><a href="/">Volver al inicio</a></p></body></html>')
            }
        }

        $respuesta.StatusCode = $codigo
        $respuesta.ContentType = $tipo
        $respuesta.Headers.Add('Cache-Control', 'no-store')
        $respuesta.ContentLength64 = $cuerpo.Length

        try {
            $respuesta.OutputStream.Write($cuerpo, 0, $cuerpo.Length)
        } catch {
            # El cliente corto la conexion; no es un problema.
        }
        $respuesta.OutputStream.Close()

        $color = 'DarkGray'
        if ($codigo -ne 200) { $color = 'Yellow' }
        Write-Host ("  {0}  {1}" -f $codigo, $rutaUrl) -ForegroundColor $color
    }
}
finally {
    $oyente.Stop()
    $oyente.Close()
    Write-Host ""
    Write-Host "  Servidor detenido." -ForegroundColor Cyan
}
