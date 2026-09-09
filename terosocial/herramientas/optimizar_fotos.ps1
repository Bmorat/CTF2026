# =====================================================================
#  TeroSocial - achica y recomprime las fotos
#
#  Las fotos que llegan de Wikimedia vienen a 960 px, pero el lugar mas
#  grande donde se muestran mide ~700 px (el feed) y en el marketplace
#  ~215 px. Sobra resolucion, y eso es peso al pedo.
#
#  Reescribe cada .jpg de web/media/fotos: lado mayor <= $lado y
#  calidad JPEG $calidad. Es destructivo (pisa el archivo), pero las
#  fotos siempre se pueden volver a bajar con traer_fotos.ps1.
#
#  Uso: powershell -ExecutionPolicy Bypass -File .\optimizar_fotos.ps1
# =====================================================================

param(
  [int]$lado    = 720,
  [int]$calidad = 72
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$raiz = Split-Path -Parent $PSScriptRoot
$dir  = Join-Path $raiz 'web\media\fotos'
if (-not (Test-Path $dir)) { throw "No encuentro $dir" }

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
         Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                      [System.Drawing.Imaging.Encoder]::Quality, [int64]$calidad)

$antes = 0; $despues = 0; $n = 0

foreach ($f in (Get-ChildItem -LiteralPath $dir -Filter *.jpg | Sort-Object Name)) {
  $antes += $f.Length
  $tmp = $f.FullName + '.tmp'

  $img = [System.Drawing.Image]::FromFile($f.FullName)
  try {
    $w = $img.Width; $h = $img.Height
    $escala = [Math]::Min(1.0, $lado / [Math]::Max($w, $h))
    $nw = [int][Math]::Round($w * $escala)
    $nh = [int][Math]::Round($h * $escala)

    $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.DrawImage($img, 0, 0, $nw, $nh)
    $g.Dispose()

    $bmp.Save($tmp, $codec, $params)
    $bmp.Dispose()
  } finally {
    $img.Dispose()
  }

  Move-Item -LiteralPath $tmp -Destination $f.FullName -Force
  $nuevo = (Get-Item $f.FullName).Length
  $despues += $nuevo
  $n++
  Write-Output ('{0,-20} {1,4:N0} KB -> {2,4:N0} KB   ({3}x{4})' -f $f.Name, ($f.Length/1KB), ($nuevo/1KB), $nw, $nh)
}

Write-Output ''
Write-Output ('{0} fotos: {1:N1} MB -> {2:N1} MB  (ahorro {3:N0}%)' -f `
  $n, ($antes/1MB), ($despues/1MB), ((1 - $despues/$antes) * 100))
