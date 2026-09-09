# =====================================================================
#  TeroSocial - prepara fotos propias para el entorno
#
#  Dejá tus fotos en  TeroSocial\fotos_entrada\  y corré este script.
#
#  Qué hace:
#    1. TE DICE QUÉ METADATOS TRAE CADA FOTO antes de tocar nada.
#       Esto importa: tu teléfono le mete modelo, fecha y muchas veces
#       las coordenadas de donde la sacaste. Vas a poner a un grupo de
#       gente entrenada en OSINT a mirar estas fotos con lupa.
#    2. Las redimensiona y las copia a web\media\fotos\ con el nombre
#       correcto para que el sitio las tome.
#    3. Por defecto BORRA todos los metadatos.
#
#  Uso normal (borra metadatos, ancho 720):
#      .\preparar_fotos_propias.ps1
#
#  Para una foto donde hay que leer un detalle (un post-it, un cartel,
#  una matrícula) 720 px no alcanza. Usá más ancho:
#      .\preparar_fotos_propias.ps1 -Ancho 1600
#
#  Si querés CONSERVAR los metadatos porque son parte del ejercicio,
#  la foto se copia tal cual, sin redimensionar:
#      .\preparar_fotos_propias.ps1 -ConservarMetadatos
#
#  Solo mirar qué metadatos tienen, sin copiar nada:
#      .\preparar_fotos_propias.ps1 -SoloInspeccionar
# =====================================================================

param(
    [int]$Ancho = 720,
    [int]$Calidad = 82,
    [switch]$ConservarMetadatos,
    [switch]$SoloInspeccionar
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$raiz    = Split-Path -Parent $PSScriptRoot
$entrada = Join-Path $raiz 'fotos_entrada'
$destino = Join-Path $raiz 'web\media\fotos'

if (-not (Test-Path $entrada)) {
    New-Item -ItemType Directory -Path $entrada | Out-Null
    Write-Host ''
    Write-Host "Crie la carpeta:  $entrada" -ForegroundColor Cyan
    Write-Host ''
    Write-Host 'Dejá ahí tus fotos con el nombre <tema>_<numero>.jpg' -ForegroundColor Cyan
    Write-Host 'Temas válidos: rambla cancha mate mascota bici ave comida ruta pesca'
    Write-Host '               murga auto casa herramienta electro campo ciudad costa feria'
    Write-Host ''
    Write-Host 'Ejemplo: electro_7.jpg  (una foto de un escritorio con la compu)'
    exit 0
}

# --- IDs EXIF que nos interesan ---
$ETIQUETAS = @{
    0x010F = 'Fabricante'; 0x0110 = 'Modelo'; 0x0131 = 'Software'
    0x9003 = 'Fecha de captura'; 0x0132 = 'Fecha de archivo'
    0x8825 = 'BLOQUE GPS'; 0x0002 = 'GPS latitud'; 0x0004 = 'GPS longitud'
    0x013B = 'Autor'; 0x8298 = 'Copyright'; 0x010E = 'Descripcion'
    0x9286 = 'Comentario'
}

function LeerTexto($prop) {
    if ($null -eq $prop) { return '' }
    try {
        if ($prop.Type -eq 2) { return ([System.Text.Encoding]::ASCII.GetString($prop.Value)).Trim([char]0) }
        return '(' + $prop.Value.Length + ' bytes)'
    } catch { return '(ilegible)' }
}

$fotos = Get-ChildItem -LiteralPath $entrada -Recurse -File -ErrorAction SilentlyContinue |
         Where-Object { $_.Extension -match '^\.(jpg|jpeg|png)$' }
if (-not $fotos) {
    Write-Host "No hay fotos en $entrada" -ForegroundColor Yellow
    exit 0
}

Write-Host ''
Write-Host '=== METADATOS QUE TRAEN TUS FOTOS ===' -ForegroundColor Cyan

$conGPS = New-Object System.Collections.Generic.List[string]

foreach ($f in $fotos) {
    Write-Host ''
    Write-Host ("  " + $f.Name) -ForegroundColor White
    $img = [System.Drawing.Image]::FromFile($f.FullName)
    try {
        Write-Host ("     tamaño: {0}x{1}  ({2:N0} KB)" -f $img.Width, $img.Height, ($f.Length / 1KB))
        $ids = $img.PropertyIdList
        if ($ids.Count -eq 0) {
            Write-Host '     sin metadatos' -ForegroundColor DarkGray
        } else {
            $hayGPS = $false
            foreach ($id in $ids) {
                if ($ETIQUETAS.ContainsKey([int]$id)) {
                    $v = LeerTexto $img.GetPropertyItem($id)
                    $nombre = $ETIQUETAS[[int]$id]
                    if ($nombre -like '*GPS*') {
                        $hayGPS = $true
                        Write-Host ("     {0,-18} {1}" -f $nombre, $v) -ForegroundColor Red
                    } else {
                        Write-Host ("     {0,-18} {1}" -f $nombre, $v) -ForegroundColor DarkGray
                    }
                }
            }
            if ($hayGPS) { $conGPS.Add($f.Name) }
        }
    } finally { $img.Dispose() }
}

if ($conGPS.Count) {
    Write-Host ''
    Write-Host '  ATENCION: estas fotos traen coordenadas GPS:' -ForegroundColor Red
    $conGPS | ForEach-Object { Write-Host ("     - " + $_) -ForegroundColor Red }
    Write-Host '  Si las publicás tal cual, estás publicando dónde fueron sacadas.' -ForegroundColor Red
}

if ($SoloInspeccionar) {
    Write-Host ''
    Write-Host 'Modo inspección: no copié nada.' -ForegroundColor Cyan
    exit 0
}

# --- Copia ---
Write-Host ''
Write-Host '=== COPIANDO A media\fotos ===' -ForegroundColor Cyan
if ($ConservarMetadatos) {
    Write-Host '  (conservando metadatos y tamaño original)' -ForegroundColor Yellow
}

$codec  = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                      [System.Drawing.Imaging.Encoder]::Quality, [int64]$Calidad)

$n = 0
foreach ($f in $fotos) {
    $nombre = [System.IO.Path]::GetFileNameWithoutExtension($f.Name) + '.jpg'
    $salida = Join-Path $destino $nombre

    if ($nombre -notmatch '^[a-z]+_\d+\.jpg$') {
        Write-Host ("  SALTEADA {0}: el nombre debe ser <tema>_<numero>.jpg" -f $f.Name) -ForegroundColor Yellow
        continue
    }

    if ($ConservarMetadatos) {
        Copy-Item -LiteralPath $f.FullName -Destination $salida -Force
        Write-Host ("  {0}  (tal cual, con metadatos)" -f $nombre) -ForegroundColor Green
    } else {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        try {
            $esc = [Math]::Min(1.0, $Ancho / [Math]::Max($img.Width, $img.Height))
            $nw = [int][Math]::Round($img.Width * $esc)
            $nh = [int][Math]::Round($img.Height * $esc)
            $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.DrawImage($img, 0, 0, $nw, $nh)
            $g.Dispose()
            # Al redibujar en un Bitmap nuevo, los metadatos NO se copian.
            $bmp.Save($salida, $codec, $params)
            $bmp.Dispose()
            Write-Host ("  {0}  {1}x{2}  sin metadatos" -f $nombre, $nw, $nh) -ForegroundColor Green
        } finally { $img.Dispose() }
    }
    $n++
}

Write-Host ''
Write-Host ("Copiadas: {0}" -f $n) -ForegroundColor Green
Write-Host ''
Write-Host 'Ahora corré:  .\indexar_fotos.ps1' -ForegroundColor Cyan
Write-Host 'Y acordate de agregar la atribución "foto propia" en media\fotos\CREDITOS.md'
