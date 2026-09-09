# =====================================================================
#  TeroSocial - reconciliación de datos
#
#  El contenido lo escribieron varias personas en paralelo, así que hay
#  incoherencias cruzadas que este script arregla:
#
#   1. Fechas de alta:  si alguien publica antes de la fecha en que se
#      unió, se adelanta su `se_unio` al mes anterior a su primera
#      publicación.
#   2. Reportes huérfanos: los que apuntan a publicaciones que no
#      existen se reapuntan a una publicación real, eligiendo una
#      coherente con el motivo del reporte.
#
#  Ejecutar SIEMPRE después de agregar o cambiar contenido.
#  Uso: powershell -ExecutionPolicy Bypass -File .\reconciliar.ps1
# =====================================================================

$ErrorActionPreference = 'Stop'

$raiz = Split-Path -Parent $PSScriptRoot
$js   = Join-Path $raiz 'web\js'
$enc  = New-Object System.Text.UTF8Encoding($false)

$archivosPosts = @(
  'datos_posts_a.js','datos_posts_b.js','datos_grupos_a.js',
  'datos_grupos_b.js','datos_laposta.js'
) | ForEach-Object { Join-Path $js $_ } | Where-Object { Test-Path $_ }

Write-Output ("Archivos de publicaciones encontrados: {0}" -f $archivosPosts.Count)

# ---------------------------------------------------------------
# 1. Recolectar (autor, fecha) e ids de cada publicación
# ---------------------------------------------------------------

$primeraDe = @{}          # alias -> fecha mínima (AAAA-MM-DD)
$idsPorGrupo = @{}        # slug (o '_feed') -> lista de ids
$todosLosIds = New-Object System.Collections.Generic.List[int]

# En los posts el orden del esquema es: id, autor, fecha.
# En los comentarios es: autor, texto, fecha. Por eso el patrón exige
# que 'fecha' venga inmediatamente después de 'autor': así solo matchea posts.
$patron = 'id:\s*(\d+)\s*,\s*autor:\s*"([^"]+)"\s*,\s*fecha:\s*"(\d{4}-\d{2}-\d{2})'

foreach ($f in $archivosPosts) {
  $txt = Get-Content -LiteralPath $f -Raw -Encoding UTF8
  $ms = [regex]::Matches($txt, $patron)
  foreach ($m in $ms) {
    $id    = [int]$m.Groups[1].Value
    $autor = $m.Groups[2].Value
    $fecha = $m.Groups[3].Value

    $todosLosIds.Add($id)

    if (-not $primeraDe.ContainsKey($autor) -or $fecha -lt $primeraDe[$autor]) {
      $primeraDe[$autor] = $fecha
    }

    # a qué grupo pertenece (para reapuntar reportes con criterio)
    $cola = $txt.Substring($m.Index, [Math]::Min(1200, $txt.Length - $m.Index))
    $g = '_feed'
    $mg = [regex]::Match($cola, 'grupo:\s*"([^"]+)"')
    if ($mg.Success) { $g = $mg.Groups[1].Value }
    if (-not $idsPorGrupo.ContainsKey($g)) { $idsPorGrupo[$g] = New-Object System.Collections.Generic.List[int] }
    $idsPorGrupo[$g].Add($id)
  }
  Write-Output ("  {0}: {1} publicaciones" -f (Split-Path $f -Leaf), $ms.Count)
}

Write-Output ("Total de publicaciones: {0}" -f $todosLosIds.Count)
foreach ($k in ($idsPorGrupo.Keys | Sort-Object)) {
  Write-Output ("   grupo {0,-16} {1} publicaciones" -f $k, $idsPorGrupo[$k].Count)
}

# ---------------------------------------------------------------
# 2. Corregir se_unio en datos_usuarios.js
# ---------------------------------------------------------------

$fUsuarios = Join-Path $js 'datos_usuarios.js'
$txtU = Get-Content -LiteralPath $fUsuarios -Raw -Encoding UTF8
$ajustes = 0

$bloques = [regex]::Matches($txtU, '\{[^{}]*alias:\s*"([^"]+)"[^{}]*\}')
foreach ($b in $bloques) {
  $alias = $b.Groups[1].Value
  if (-not $primeraDe.ContainsKey($alias)) { continue }

  $mSe = [regex]::Match($b.Value, 'se_unio:\s*"(\d{4}-\d{2}-\d{2})"')
  if (-not $mSe.Success) { continue }
  $actual  = $mSe.Groups[1].Value
  $primera = $primeraDe[$alias]

  if ($actual -le $primera) { continue }

  # Nueva fecha: un mes antes de la primera publicación (día 5 para que
  # quede parejo y nunca caiga en un 29/30/31 inexistente).
  $d = [datetime]::ParseExact($primera, 'yyyy-MM-dd', $null).AddMonths(-1)
  $nueva = '{0:yyyy-MM}-05' -f $d

  $bloqueNuevo = $b.Value -replace 'se_unio:\s*"\d{4}-\d{2}-\d{2}"', ('se_unio: "' + $nueva + '"')
  $txtU = $txtU.Replace($b.Value, $bloqueNuevo)
  Write-Output ("  se_unio @{0}: {1} -> {2}  (publica desde {3})" -f $alias, $actual, $nueva, $primera)
  $ajustes++
}

if ($ajustes) {
  [System.IO.File]::WriteAllText($fUsuarios, $txtU, $enc)
  Write-Output ("Fechas de alta corregidas: {0}" -f $ajustes)
} else {
  Write-Output "Fechas de alta: nada que corregir."
}

# ---------------------------------------------------------------
# 3. Reapuntar reportes huérfanos
# ---------------------------------------------------------------

$fEventos = Join-Path $js 'datos_eventos.js'
if (-not (Test-Path $fEventos)) { Write-Output "No hay datos_eventos.js; salteo los reportes."; exit 0 }

$txtE = Get-Content -LiteralPath $fEventos -Raw -Encoding UTF8
$existentes = @{}
foreach ($id in $todosLosIds) { $existentes[$id] = $true }

# Para cada motivo, de qué grupo conviene tomar la publicación reportada.
$preferencia = @{
  'desinformación'    = @('laposta')
  'desinformacion'    = @('laposta')
  'spam'              = @('comprovendo', '_feed')
  'estafa'            = @('comprovendo', '_feed')
  'acoso'             = @('vecinos-cerro', 'laposta', '_feed')
  'contenido sensible'= @('_feed', 'vecinos-cerro', 'mascotas')
}

function ElegirId($motivo, $semilla) {
  $orden = @()
  if ($preferencia.ContainsKey($motivo)) { $orden = $preferencia[$motivo] }
  foreach ($g in $orden) {
    if ($idsPorGrupo.ContainsKey($g) -and $idsPorGrupo[$g].Count -gt 0) {
      return $idsPorGrupo[$g][$semilla % $idsPorGrupo[$g].Count]
    }
  }
  return $todosLosIds[$semilla % $todosLosIds.Count]
}

$reportes = [regex]::Matches($txtE, '\{[^{}]*post_id:\s*(\d+)[^{}]*\}')
$reapuntados = 0
$n = 0

foreach ($r in $reportes) {
  $postId = [int]$r.Groups[1].Value
  if ($existentes.ContainsKey($postId)) { continue }

  $motivo = ''
  $mm = [regex]::Match($r.Value, 'motivo:\s*"([^"]+)"')
  if ($mm.Success) { $motivo = $mm.Groups[1].Value }

  $mid = [regex]::Match($r.Value, 'id:\s*(\d+)')
  $semilla = 0
  if ($mid.Success) { $semilla = [int]$mid.Groups[1].Value }
  $n++

  $nuevo = ElegirId $motivo ($semilla + $n)
  $bloqueNuevo = $r.Value -replace ('post_id:\s*' + $postId), ('post_id: ' + $nuevo)
  $txtE = $txtE.Replace($r.Value, $bloqueNuevo)
  Write-Output ("  reporte: post_id {0} -> {1}  (motivo: {2})" -f $postId, $nuevo, $motivo)
  $reapuntados++
}

if ($reapuntados) {
  [System.IO.File]::WriteAllText($fEventos, $txtE, $enc)
  Write-Output ("Reportes reapuntados: {0}" -f $reapuntados)
} else {
  Write-Output "Reportes: todos apuntan a publicaciones existentes."
}

Write-Output ""
Write-Output "Listo. Abrí web/diagnostico.html para confirmar."
