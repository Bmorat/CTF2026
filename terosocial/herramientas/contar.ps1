# =====================================================================
#  TeroSocial - recuento del contenido
#
#  Cuenta perfiles, publicaciones, comentarios, avisos, eventos y
#  reportes reales, y (con -Escribir) actualiza los numeros de la
#  tabla "Que hay adentro" del README para que no queden viejos.
#
#  Uso:
#      powershell -ExecutionPolicy Bypass -File .\contar.ps1
#      powershell -ExecutionPolicy Bypass -File .\contar.ps1 -Escribir
# =====================================================================

param([switch]$Escribir)

$ErrorActionPreference = 'Stop'
$raiz = Split-Path -Parent $PSScriptRoot
$js   = Join-Path $raiz 'web\js'

function Leer($rel) { Get-Content (Join-Path $raiz $rel) -Raw -Encoding UTF8 }
function LeerJs($f) { Get-Content (Join-Path $js $f)   -Raw -Encoding UTF8 }
function Cuenta($txt, $re) { ([regex]::Matches($txt, $re)).Count }
function N($n) { [string]::Format([System.Globalization.CultureInfo]::GetCultureInfo('es-UY'), '{0:N0}', [int]$n) }

# --- publicaciones y comentarios ---
# En los archivos de posts, SOLO las publicaciones tienen "id:"; todas las
# publicaciones, comentarios y respuestas tienen "autor:". Entonces:
#   posts       = cantidad de "id:"
#   comentarios = cantidad de "autor:" menos la de "id:"  (incluye respuestas)
$postFiles = 'datos_posts_a', 'datos_posts_b', 'datos_grupos_a', 'datos_grupos_b', 'datos_laposta', 'datos_senuelos'
$posts = 0; $autores = 0; $feed = 0; $grupos = 0
foreach ($f in $postFiles) {
    $t = LeerJs "$f.js"
    $posts   += Cuenta $t 'id:\s*\d+'
    $autores += Cuenta $t 'autor:\s*"'
    $feed    += Cuenta $t 'grupo:\s*null'
    $grupos  += Cuenta $t 'grupo:\s*"'
}
$comentarios = $autores - $posts

# --- perfiles ---
$perfiles = Cuenta (LeerJs 'datos_usuarios.js') 'alias:\s*"'
$volcado  = Cuenta (Leer 'web\api\usuarios.json') '"alias":\s*"'

# --- avisos ---
$market = 'datos_market', 'datos_market_b', 'datos_market_c', 'datos_market_d', 'datos_market_e'
$avisos = 0
foreach ($f in $market) { $avisos += Cuenta (LeerJs "$f.js") 'id:\s*\d+' }

# --- eventos y reportes (mismo archivo, separados por window.REPORTES) ---
$ev  = LeerJs 'datos_eventos.js'
$cut = $ev.IndexOf('window.REPORTES')
if ($cut -lt 0) { $cut = $ev.Length }
$eventos  = Cuenta $ev.Substring(0, $cut) 'id:\s*\d+'
$reportes = Cuenta $ev.Substring($cut)    'id:\s*\d+'

# --- salida ---
Write-Host ''
Write-Host '== TeroSocial: recuento del contenido ==' -ForegroundColor Cyan
Write-Host ('  Perfiles      : {0}   (volcado api/usuarios.json: {1})' -f (N $perfiles), (N $volcado))
Write-Host ('  Publicaciones : {0}   ({1} en el feed, {2} en los grupos)' -f (N $posts), (N $feed), (N $grupos))
Write-Host ('  Comentarios   : {0}   (incluye respuestas anidadas)' -f (N $comentarios))
Write-Host ('  Avisos        : {0}' -f (N $avisos))
Write-Host ('  Eventos       : {0}' -f (N $eventos))
Write-Host ('  Reportes      : {0}' -f (N $reportes))
Write-Host ''

if (-not $Escribir) {
    Write-Host 'Para volcar estos numeros al README, corre de nuevo con  -Escribir' -ForegroundColor Yellow
    exit 0
}

# --- actualizar los numeros en la tabla del README ---
$readmePath = Join-Path $raiz 'README.md'
$md = Get-Content $readmePath -Raw -Encoding UTF8

# Reemplaza el primer **numero** de cada fila etiquetada, sin tocar la prosa.
function FijarFila([string]$texto, [string]$etiqueta, [string]$valor) {
    $re = '(?m)^(\| ' + [regex]::Escape($etiqueta) + ' \|.*?\*\*)[\d\.\s]+(\*\*)'
    if ([regex]::IsMatch($texto, $re)) {
        return [regex]::Replace($texto, $re, ('${1}' + $valor + '${2}'), 1)
    }
    Write-Host ("  (no encontre la fila '{0}' en el README)" -f $etiqueta) -ForegroundColor DarkYellow
    return $texto
}

$md = FijarFila $md 'Perfiles'                 (N $perfiles)
$md = FijarFila $md 'Publicaciones'            (N $posts)
$md = FijarFila $md 'Comentarios'              (N $comentarios)
$md = FijarFila $md 'Avisos del marketplace'   (N $avisos)
$md = FijarFila $md 'Eventos'                  (N $eventos)
$md = FijarFila $md 'Reportes de moderación'   (N $reportes)

[System.IO.File]::WriteAllText($readmePath, $md, (New-Object System.Text.UTF8Encoding($false)))
Write-Host 'README actualizado (numeros principales de la tabla).' -ForegroundColor Green
Write-Host 'Revisa a mano las cifras entre parentesis (feed/grupos, pasados/por venir).' -ForegroundColor DarkGray
