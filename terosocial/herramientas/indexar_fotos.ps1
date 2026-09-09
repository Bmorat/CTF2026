# =====================================================================
#  TeroSocial - indexa las fotos reales disponibles
#
#  Escanea web/media/fotos/*.jpg y genera web/js/fotos.js con el
#  inventario por tema. El motor usa ese indice para elegir imagen;
#  si un tema no tiene fotos, cae en la ilustracion SVG.
#
#  Correr cada vez que se agreguen o borren fotos.
#  Uso: powershell -ExecutionPolicy Bypass -File .\indexar_fotos.ps1
# =====================================================================

$ErrorActionPreference = 'Stop'

$raiz   = Split-Path -Parent $PSScriptRoot
$dir    = Join-Path $raiz 'web\media\fotos'
$salida = Join-Path $raiz 'web\js\fotos.js'

if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }

$porTema = [ordered]@{}
$total = 0

foreach ($f in (Get-ChildItem -LiteralPath $dir -Filter *.jpg | Sort-Object Name)) {
    # nombre esperado: <tema>_<n>.jpg  (tambien acepta <tema>.jpg)
    $tema = ($f.BaseName -replace '_\d+$', '').ToLower()
    if (-not $porTema.Contains($tema)) { $porTema[$tema] = New-Object System.Collections.Generic.List[string] }
    $porTema[$tema].Add('media/fotos/' + $f.Name)
    $total++
}

$lineas = New-Object System.Collections.Generic.List[string]
$lineas.Add('/* =========================================================')
$lineas.Add('   TeroSocial - inventario de fotografias reales')
$lineas.Add('   Generado por herramientas/indexar_fotos.ps1')
$lineas.Add('   No editar a mano: se regenera.')
$lineas.Add('   ========================================================= */')
$lineas.Add('')
$lineas.Add('window.FOTOS = {')

$claves = @($porTema.Keys)
for ($i = 0; $i -lt $claves.Count; $i++) {
    $tema = $claves[$i]
    $lista = ($porTema[$tema] | ForEach-Object { '"' + $_ + '"' }) -join ', '
    $coma = ','
    if ($i -eq $claves.Count - 1) { $coma = '' }
    $lineas.Add(('  "{0}": [{1}]{2}' -f $tema, $lista, $coma))
}
$lineas.Add('};')

[System.IO.File]::WriteAllText($salida, ($lineas -join "`r`n"), (New-Object System.Text.UTF8Encoding($false)))

Write-Output ("Fotos indexadas: {0} en {1} temas" -f $total, $claves.Count)
foreach ($t in $claves) { Write-Output ("  {0,-14} {1}" -f $t, $porTema[$t].Count) }
Write-Output ("Escrito: {0}" -f $salida)
