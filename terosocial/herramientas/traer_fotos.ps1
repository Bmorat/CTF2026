# =====================================================================
#  TeroSocial - descarga fotos reales de Wikimedia Commons
#
#  Busca por tema, se queda solo con archivos de licencia libre,
#  baja una version redimensionada a 900 px de ancho y anota la
#  atribucion de cada una en media/fotos/CREDITOS.md
#
#  Uso: powershell -ExecutionPolicy Bypass -File .\traer_fotos.ps1
# =====================================================================

$ErrorActionPreference = 'Stop'
$ProgressPreference    = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$raiz    = Split-Path -Parent $PSScriptRoot
$destino = Join-Path $raiz 'web\media\fotos'
if (-not (Test-Path $destino)) { New-Item -ItemType Directory -Path $destino | Out-Null }

# Wikimedia pide un User-Agent identificable y un ritmo de peticiones bajo.
# Ver https://foundation.wikimedia.org/wiki/Policy:User-Agent_policy
$UA    = 'TeroSocialLab/1.0 (https://example.org/terosocial-lab; instructor@example.org) PowerShell'
$PAUSA = 1800   # milisegundos entre peticiones, para no golpear el servicio

# Licencias que aceptamos (todo lo demas se descarta)
$licenciasOK = @(
  'cc0','public domain','pd','cc by 1.0','cc by 2.0','cc by 2.5','cc by 3.0','cc by 4.0',
  'cc by-sa 1.0','cc by-sa 2.0','cc by-sa 2.5','cc by-sa 3.0','cc by-sa 4.0','cc-by-sa-3.0',
  'cc-by-sa-4.0','cc-by-3.0','cc-by-4.0','cc-by-sa-2.0','cc-by-2.0'
)

# tema -> consultas. Se piden VARIAS por tema para tener variedad.
# Deliberadamente se buscan paisajes, objetos y arquitectura: no personas.
$temas = [ordered]@{
  'rambla'      = @('Rambla Montevideo sunset', 'Rambla de Pocitos Montevideo', 'Rio de la Plata Montevideo coast')
  'cancha'      = @('Estadio Centenario Montevideo', 'Estadio Centenario tribuna')
  'mate'        = @('Mate infusion calabaza', 'Mate gourd bombilla termo')
  'mascota'     = @('Perro mestizo Uruguay', 'Street dog Montevideo', 'Gato callejero Uruguay')
  'bici'        = @('Bicycle leaning wall street', 'Old bicycle parked street')
  'ave'         = @('Vanellus chilensis tero', 'Furnarius rufus hornero nest', 'Pitangus sulphuratus benteveo')
  'comida'      = @('Asado parrilla Uruguay', 'Chivito Uruguay sandwich', 'Tortas fritas')
  'ruta'        = @('Ruta 5 Uruguay road', 'Carretera Uruguay campo', 'Rural road Uruguay')
  'pesca'       = @('Fishing rod beach sunrise', 'Pesca costa Uruguay')
  'murga'       = @('Candombe tambores Montevideo', 'Murga Uruguay carnaval', 'Llamadas Montevideo')
  'auto'        = @('Old car parked street Uruguay', 'Vintage car Montevideo street')
  'casa'        = @('Casa barrio Montevideo fachada', 'Colonia del Sacramento street houses')
  'herramienta' = @('Hand tools workbench', 'Hammer pliers screwdriver tools')
  'electro'     = @('Vintage radio receiver', 'Old television set retro')
  'campo'       = @('Campo Uruguay ganado', 'Uruguayan countryside landscape')
  'ciudad'      = @('Ciudad Vieja Montevideo street', 'Palacio Salvo Montevideo', 'Plaza Independencia Montevideo')
  'costa'       = @('Punta del Diablo Rocha', 'La Paloma Rocha lighthouse', 'Cabo Polonio')
  'feria'       = @('Feria Tristan Narvaja Montevideo', 'Street market stall fruit')
}

$porTema   = 2      # cuantas fotos por tema
# 800 es uno de los anchos de miniatura ESTANDAR de Wikimedia: pedir un ancho
# arbitrario obliga al servidor a generarla al vuelo y devuelve 429.
$ancho     = 800
$creditos  = New-Object System.Collections.Generic.List[string]
$resumen   = New-Object System.Collections.Generic.List[string]
$yaBajados = @{}

function Consultar($consulta) {
  $u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json' +
       '&generator=search&gsrsearch=' + [uri]::EscapeDataString($consulta) +
       '&gsrnamespace=6&gsrlimit=12' +
       '&prop=imageinfo&iiprop=url|extmetadata|size|mime&iiurlwidth=' + $ancho
  for ($intento = 1; $intento -le 3; $intento++) {
    try {
      Start-Sleep -Milliseconds $PAUSA
      return Invoke-RestMethod -Uri $u -Headers @{ 'User-Agent' = $UA } -TimeoutSec 40
    } catch {
      Write-Host ("    consulta rechazada (intento {0}/3)" -f $intento) -ForegroundColor DarkYellow
      Start-Sleep -Seconds (5 * $intento)
    }
  }
  return $null
}

# extmetadata devuelve objetos {value, source, hidden}: hay que sacar .value
function Valor($campo) {
  if (-not $campo) { return '' }
  $v = $campo
  if ($campo.PSObject.Properties.Name -contains 'value') { $v = $campo.value }
  if (-not $v) { return '' }
  $t = [string]$v -replace '<[^>]+>', ''
  $t = $t -replace '&amp;', '&' -replace '&quot;', '"' -replace '&#39;', "'" -replace '&nbsp;', ' '
  return ($t -replace '\s+', ' ').Trim()
}

foreach ($tema in $temas.Keys) {
  Write-Host ""
  Write-Host ("== {0} ==" -f $tema) -ForegroundColor Cyan
  $bajadas = 0

  foreach ($consulta in $temas[$tema]) {
    if ($bajadas -ge $porTema) { break }
    Write-Host ("  buscando: {0}" -f $consulta) -ForegroundColor DarkGray

    $r = Consultar $consulta
    if (-not $r -or -not $r.query -or -not $r.query.pages) { continue }

    $paginas = $r.query.pages.PSObject.Properties | ForEach-Object { $_.Value }

    foreach ($p in $paginas) {
      if ($bajadas -ge $porTema) { break }
      if (-not $p.imageinfo) { continue }
      $info = $p.imageinfo[0]

      if ($info.mime -notin @('image/jpeg', 'image/png')) { continue }
      if ($yaBajados.ContainsKey($p.title)) { continue }

      $meta = $info.extmetadata
      $lic  = ''
      if ($meta) { $lic = Valor $meta.LicenseShortName }
      $licNorm = $lic.ToLower().Trim()
      if (-not $licNorm) { continue }

      $ok = $false
      foreach ($l in $licenciasOK) { if ($licNorm -like ('*' + $l + '*')) { $ok = $true; break } }
      if (-not $ok) { continue }

      $url = $info.thumburl
      if (-not $url) { $url = $info.url }

      $bajadas++
      $nombre = '{0}_{1}.jpg' -f $tema, $bajadas
      $ruta   = Join-Path $destino $nombre

      $exito = $false
      for ($i = 1; $i -le 3; $i++) {
        try {
          Start-Sleep -Milliseconds $PAUSA
          Invoke-WebRequest -Uri $url -OutFile $ruta -Headers @{ 'User-Agent' = $UA } -TimeoutSec 60 -UseBasicParsing
          $exito = $true
          break
        } catch {
          Start-Sleep -Seconds (4 * $i)
        }
      }
      if (-not $exito) {
        Write-Host "    descarga rechazada, sigo con otra" -ForegroundColor DarkYellow
        $bajadas--
        continue
      }

      $yaBajados[$p.title] = $true
      $kb = [math]::Round((Get-Item $ruta).Length / 1KB, 0)

      $autor = ''
      if ($meta) { $autor = Valor $meta.Artist }
      if (-not $autor) { $autor = 'autor no declarado' }
      $desc = ''
      if ($meta) { $desc = Valor $meta.ImageDescription }
      if ($desc.Length -gt 120) { $desc = $desc.Substring(0, 120) + '...' }

      $paginaCommons = 'https://commons.wikimedia.org/wiki/' + [uri]::EscapeDataString($p.title)

      $creditos.Add(('| `{0}` | {1} | {2} | {3} | [ver]({4}) |' -f $nombre, $desc, $autor, $lic, $paginaCommons))
      $resumen.Add(('{0,-16} {1,5} KB  {2}' -f $nombre, $kb, $lic))
      Write-Host ("    OK {0} ({1} KB, {2})" -f $nombre, $kb, $lic) -ForegroundColor Green
    }
  }

  if ($bajadas -eq 0) { Write-Host ("    sin resultados utilizables para {0}" -f $tema) -ForegroundColor Yellow }
}

# --- archivo de creditos ---
$md = New-Object System.Collections.Generic.List[string]
$md.Add('# Créditos de las fotografías')
$md.Add('')
$md.Add('Las fotos de `web/media/fotos/` provienen de **Wikimedia Commons** y se usan bajo')
$md.Add('sus respectivas licencias libres. Este archivo cumple con el requisito de atribución.')
$md.Add('')
$md.Add('Las ilustraciones SVG de `web/media/` son originales de este proyecto.')
$md.Add('')
$md.Add('| Archivo | Descripción | Autor | Licencia | Origen |')
$md.Add('|---|---|---|---|---|')
foreach ($c in $creditos) { $md.Add($c) }
$md.Add('')
$md.Add('Generado por `herramientas/traer_fotos.ps1`.')

# --- No pisar el CREDITOS.md curado a mano ---
# El CREDITOS.md real tiene filas agregadas a mano tras la curaduria visual y
# una seccion "Fotografias aportadas para el ejercicio" que sostiene el CTF.
# Si ya existe, NO lo sobrescribimos: dejamos lo generado en un archivo aparte
# para que el instructor lo compare y fusione a mano.
$creditosPath = Join-Path $destino 'CREDITOS.md'
if (Test-Path $creditosPath) {
  $salidaCred = Join-Path $destino 'CREDITOS_generado_para_fusionar.md'
  [System.IO.File]::WriteAllText($salidaCred, ($md -join "`r`n"),
    (New-Object System.Text.UTF8Encoding($false)))
  Write-Host ''
  Write-Host 'ATENCION: ya existe CREDITOS.md (curado a mano). NO lo toque.' -ForegroundColor Yellow
  Write-Host ("Lo nuevo quedo en: {0}" -f $salidaCred) -ForegroundColor Yellow
  Write-Host 'Fusione a mano las filas que correspondan al CREDITOS.md real.' -ForegroundColor Yellow
} else {
  [System.IO.File]::WriteAllText($creditosPath, ($md -join "`r`n"),
    (New-Object System.Text.UTF8Encoding($false)))
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ("Fotos descargadas: {0}" -f $creditos.Count) -ForegroundColor Cyan
$resumen | ForEach-Object { Write-Host ("  " + $_) }
Write-Host ("Créditos en: {0}" -f (Join-Path $destino 'CREDITOS.md'))
