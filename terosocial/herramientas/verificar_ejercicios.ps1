# =====================================================================
#  TeroSocial - verificador de integridad del escenario
#
#  Esta carpeta es SOLO la red social; el CTF (y la carga de flags) vive
#  aparte. Lo que hace este script es confirmar que la red social sigue
#  conteniendo intactos los artefactos ocultos que el ejercicio apunta:
#  metadatos de imagenes, y las referencias de datos que los sostienen.
#
#  No imprime las respuestas (las flags). Solo dice OK o FALLA.
#  Corralo despues de tocar contenido, imagenes o los generadores:
#      powershell -ExecutionPolicy Bypass -File .\verificar_ejercicios.ps1
# =====================================================================

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$raiz  = Split-Path -Parent $PSScriptRoot
$media = Join-Path $raiz 'web\media'
$js    = Join-Path $raiz 'web\js'

$ok = 0; $fail = 0
function Chk([string]$nombre, [bool]$cond, [string]$detalle = '') {
    if ($cond) {
        $script:ok++
        Write-Host ("  [OK]    " + $nombre) -ForegroundColor Green
    } else {
        $script:fail++
        Write-Host ("  [FALLA] " + $nombre + $(if ($detalle) { "  -> $detalle" } else { '' })) -ForegroundColor Red
    }
}

# --- lectura de una etiqueta XP (XPComment=40092, XPTitle=40091, XPAuthor=40093) ---
# El valor viene como bytes UTF-16LE terminados en nulo.
function LeerXP([string]$path, [int]$id) {
    if (-not (Test-Path $path)) { return $null }
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
    try {
        $p = $img.PropertyItems | Where-Object { $_.Id -eq $id } | Select-Object -First 1
        if ($null -eq $p) { return '' }
        return ([System.Text.Encoding]::Unicode.GetString($p.Value)).TrimEnd([char]0)
    } finally { $img.Dispose() }
}

# Tiene metadatos SENSIBLES (los que filtran info)? Ignora a propósito las
# propiedades inofensivas como la resolución/JFIF, que casi todo JPEG trae y no
# revelan nada. Solo miramos: fabricante, modelo, software, autor, descripción,
# copyright, GPS, fecha de captura y las etiquetas XP (título/comentario/autor).
function TieneMetaSensible([string]$path) {
    if (-not (Test-Path $path)) { return $false }
    $sensibles = @(271, 272, 305, 315, 270, 33432, 34853, 36867, 40091, 40092, 40093)
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
    try {
        foreach ($id in $img.PropertyIdList) { if ($sensibles -contains [int]$id) { return $true } }
        return $false
    } finally { $img.Dispose() }
}

function Rot13([string]$s) {
    -join ($s.ToCharArray() | ForEach-Object {
        $c = [int]$_
        if     ($c -ge 65 -and $c -le 90)  { [char]((($c - 65 + 13) % 26) + 65) }
        elseif ($c -ge 97 -and $c -le 122) { [char]((($c - 97 + 13) % 26) + 97) }
        else   { [char]$c }
    })
}

function DecodBase64Rot13([string]$b64) {
    try {
        $bytes = [Convert]::FromBase64String($b64)
        $txt   = [System.Text.Encoding]::ASCII.GetString($bytes)
        return (Rot13 $txt)
    } catch { return '' }
}

Write-Host ''
Write-Host '== TeroSocial: verificacion del escenario ==' -ForegroundColor Cyan

# =====================================================================
#  1) Ejercicio 1 - el post-it (solo verificable a ojo, chequeamos el archivo)
# =====================================================================
Write-Host ''
Write-Host 'Ejercicio 1 - la credencial en la foto' -ForegroundColor White
$monitor = Join-Path $media 'fotos\monitor_19.jpg'
Chk 'monitor_19.jpg existe y no esta vacio' `
    ((Test-Path $monitor) -and ((Get-Item $monitor).Length -gt 20000)) `
    'la foto del post-it falta o quedo muy chica (revisar a ojo que se lea la credencial)'

$market = Get-Content (Join-Path $js 'datos_market.js') -Raw -Encoding UTF8
Chk 'aviso 5116 -> elpibe.delcerro + monitor_19.jpg + comentario de hacker_del_prado' `
    (($market -match 'id:\s*5116') -and $market.Contains('monitor_19.jpg') -and $market.Contains('elpibe.delcerro') -and $market.Contains('hacker_del_prado'))

# =====================================================================
#  2) Ejercicio 2 - canal encubierto (10 fotos) + lamina de Sokolov
# =====================================================================
Write-Host ''
Write-Host 'Ejercicio 2 - canal encubierto y lamina de Sokolov' -ForegroundColor White

# cada foto: una palabra clave que TIENE que aparecer al decodificar (base64 -> ROT13)
$covert = [ordered]@{
    'ciudad_5' = 'tero'; 'rambla_4' = 'antena'; 'costa_2' = 'laika';   'ciudad_8' = '1957'
    'costa_3'  = 'sokolov'; 'rambla_5' = 'halcon'; 'ciudad_6' = 'girasol'; 'rambla_6' = '1913'
    'ciudad_7' = 'perfil'; 'costa_4' = 'ruso'
}
foreach ($nombre in $covert.Keys) {
    $f   = Join-Path $media ("fotos\{0}.jpg" -f $nombre)
    $raw = LeerXP $f 40092
    $dec = if ($raw) { DecodBase64Rot13 $raw } else { '' }
    $palabra = $covert[$nombre]
    Chk ("canal encubierto: {0}.jpg decodifica y contiene su mensaje" -f $nombre) `
        ($dec -and ($dec.ToLower().Contains($palabra))) `
        'XPComment ausente, o no decodifica base64->ROT13 (se re-sanitizo la foto?)'
}

# Sokolov: la respuesta esta en cirilico (Нина). No la imprimimos.
$nina = [string]([char]0x041D + [char]0x0438 + [char]0x043D + [char]0x0430)
$aveXP = LeerXP (Join-Path $media 'fotos\ave_5.jpg') 40092
Chk 'ave_5.jpg (lamina de Sokolov) conserva el XPComment en cirilico' `
    ($aveXP -and $aveXP.Contains($nina)) `
    'falta el metadato cirilico -> se rompe la flag del ejercicio 2'

$posts = Get-Content (Join-Path $js 'datos_posts_a.js') -Raw -Encoding UTF8
Chk 'post 1131 -> v.sokolov + ave_5.jpg' `
    (($posts -match 'id:\s*1131') -and $posts.Contains('v.sokolov') -and $posts.Contains('ave_5.jpg'))

$laposta = Get-Content (Join-Path $js 'datos_laposta.js') -Raw -Encoding UTF8
Chk 'los 10 posts del canal (4120..4129) siguen presentes' `
    (($laposta -match 'id:\s*4120') -and ($laposta -match 'id:\s*4129'))

# =====================================================================
#  3) Ejercicio 3 - correlacion de identidades
# =====================================================================
Write-Host ''
Write-Host 'Ejercicio 3 - correlacion de identidades' -ForegroundColor White

$pXP = LeerXP (Join-Path $media 'perfiles\p111.jpg') 40092
Chk 'p111.jpg conserva el ultimo grupo del dispositivo (-4b19)' `
    ($pXP -and $pXP.Contains('4b19')) `
    'falta el metadato -> se rompe el cierre del ejercicio 3'

$avatar = Join-Path $media 'avatar_rambla.svg'
$svgTxt = if (Test-Path $avatar) { Get-Content $avatar -Raw -Encoding UTF8 } else { '' }
Chk 'avatar_rambla.svg conserva el bloque de 2019 (perfil viejo)' `
    ($svgTxt.Contains('2019:04:22') -and $svgTxt.Contains('tero_anon_2019'))

Chk 'p112.jpg sigue LIMPIO (sin metadatos sensibles)' `
    (-not (TieneMetaSensible (Join-Path $media 'perfiles\p112.jpg'))) `
    'aparecieron metadatos sensibles (camara/GPS/XP) donde no deberia haber'

$usuariosJson = Get-Content (Join-Path $raiz 'web\api\usuarios.json') -Raw -Encoding UTF8
Chk 'volcado: la coincidencia de tres comparte dispositivo (IOS-5ec11-305f x3+)' `
    ((([regex]::Matches($usuariosJson, 'IOS-5ec11-305f')).Count) -ge 3)
Chk 'volcado: tero_anon_2019 NO esta en el dump (debe descubrirse en el respaldo)' `
    (-not $usuariosJson.Contains('tero_anon_2019'))
Chk 'volcado: v.sokolov NO esta en el dump (es oculto)' `
    (-not $usuariosJson.Contains('v.sokolov'))

$padron = Get-Content (Join-Path $js 'datos_usuarios.js') -Raw -Encoding UTF8
Chk 'padron: v.sokolov y tero_anon_2019 existen (accesibles por URL directa)' `
    ($padron.Contains('v.sokolov') -and $padron.Contains('tero_anon_2019'))

$respaldo = Get-Content (Join-Path $raiz 'web\respaldo\export_terosocial_2026-08-03.json') -Raw -Encoding UTF8
Chk 'respaldo: telemetria conserva los sufijos a72e (charrua/mate) y c93d (jp.burgos)' `
    ($respaldo.Contains('a72e') -and $respaldo.Contains('c93d'))
Chk 'respaldo: 5116 ya NO se reusa (evita chocar con el aviso vivo)' `
    (-not ($respaldo -match '"id":\s*5116'))

# =====================================================================
#  Resumen
# =====================================================================
Write-Host ''
Write-Host '========================================' -ForegroundColor Cyan
if ($fail -eq 0) {
    Write-Host ("TODO OK - {0} chequeos pasaron. El escenario esta intacto." -f $ok) -ForegroundColor Green
    exit 0
} else {
    Write-Host ("{0} OK, {1} FALLARON. Revisar lo marcado en rojo arriba." -f $ok, $fail) -ForegroundColor Red
    Write-Host 'Pista: casi siempre es una imagen re-procesada que perdio sus metadatos,' -ForegroundColor Yellow
    Write-Host '       o un archivo de datos regenerado. Revertir esa foto/archivo y reintentar.' -ForegroundColor Yellow
    exit 1
}
