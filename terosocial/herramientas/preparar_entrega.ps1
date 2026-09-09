# =====================================================================
#  TeroSocial - arma la copia que ven los participantes
#
#  web/ es el entorno de trabajo: tiene herramientas internas que no
#  deberian estar servidas durante el ejercicio (el diagnostico de
#  contenido lista alias, ids y volumenes: es un spoiler enorme).
#
#  Este script copia web/ a entrega/ dejando afuera todo lo interno.
#  Sirve entrega/ el dia del ejercicio y segui trabajando en web/.
#
#  Uso: powershell -ExecutionPolicy Bypass -File .\preparar_entrega.ps1
# =====================================================================

$ErrorActionPreference = 'Stop'

$raiz    = Split-Path -Parent $PSScriptRoot
$origen  = Join-Path $raiz 'web'
$destino = Join-Path $raiz 'entrega'

# Todo lo que NO va a la copia de los participantes
$excluir = @(
  'diagnostico.html',   # herramienta de validacion: revela el inventario completo
  '_contacto.html',     # hoja de contacto de imagenes, temporal
  'CREDITOS.md'         # se copia aparte, ver mas abajo
)

if (Test-Path $destino) {
  Remove-Item -LiteralPath $destino -Recurse -Force
}
New-Item -ItemType Directory -Path $destino | Out-Null

$copiados = 0
$saltados = New-Object System.Collections.Generic.List[string]

foreach ($f in (Get-ChildItem -LiteralPath $origen -Recurse -File)) {
  if ($excluir -contains $f.Name) { $saltados.Add($f.Name); continue }

  $rel = $f.FullName.Substring($origen.Length).TrimStart('\')
  $dst = Join-Path $destino $rel
  $dir = Split-Path -Parent $dst
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  Copy-Item -LiteralPath $f.FullName -Destination $dst -Force
  $copiados++
}

# Los creditos de las fotos SI tienen que viajar: las licencias CC BY y
# CC BY-SA obligan a mantener la atribucion junto al material publicado.
$cred = Join-Path $origen 'media\fotos\CREDITOS.md'
if (Test-Path $cred) {
  Copy-Item -LiteralPath $cred -Destination (Join-Path $destino 'media\fotos\CREDITOS.md') -Force
  $copiados++
  $saltados.Remove('CREDITOS.md') | Out-Null
}

$mb = (Get-ChildItem -LiteralPath $destino -Recurse -File | Measure-Object Length -Sum).Sum / 1MB

Write-Output ''
Write-Output ('Copia de entrega lista: {0}' -f $destino)
Write-Output ('  archivos: {0}   peso: {1:N1} MB' -f $copiados, $mb)
if ($saltados.Count) {
  Write-Output ('  dejados afuera: {0}' -f ($saltados -join ', '))
}
Write-Output ''
Write-Output 'Para servir la copia de entrega en vez del entorno de trabajo:'
Write-Output '  powershell -ExecutionPolicy Bypass -File .\servir.ps1 -Carpeta entrega'
