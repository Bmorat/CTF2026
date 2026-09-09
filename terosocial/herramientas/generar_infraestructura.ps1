# =====================================================================
#  TeroSocial - genera la "infraestructura" de la plataforma a partir
#  del padrón de usuarios:
#     web/api/usuarios.json   volcado interno de cuentas
#     web/sitemap.xml         mapa del sitio
#
#  Los datos de registro (correo, teléfono, IP, dispositivo) se derivan
#  del alias de forma determinista: correr el script dos veces da el
#  mismo resultado.
#
#  Uso:  powershell -ExecutionPolicy Bypass -File .\generar_infraestructura.ps1
# =====================================================================

$ErrorActionPreference = 'Stop'

$raiz    = Split-Path -Parent $PSScriptRoot
$archivo = Join-Path $raiz 'web\js\datos_usuarios.js'
$apiOut  = Join-Path $raiz 'web\api\usuarios.json'
$mapaOut = Join-Path $raiz 'web\sitemap.xml'

if (-not (Test-Path $archivo)) { throw "No encuentro $archivo" }

$txt = Get-Content -LiteralPath $archivo -Raw -Encoding UTF8

# --- parseo de los campos que necesitamos ---
$bloques = [regex]::Matches($txt, '\{[^{}]*alias:\s*"([^"]+)"[^{}]*\}')
Write-Output ("Usuarios encontrados: {0}" -f $bloques.Count)

function Campo([string]$bloque, [string]$nombre) {
    $m = [regex]::Match($bloque, $nombre + ':\s*"((?:[^"\\]|\\.)*)"')
    if ($m.Success) { return $m.Groups[1].Value }
    return ''
}

function Hash32([string]$s) {
    # FNV-1a de 32 bits. Todo en uint64 para que PowerShell no lo pase a double.
    [uint64]$h = 2166136261
    foreach ($c in $s.ToCharArray()) {
        $h = $h -bxor ([uint64][int]$c)
        $h = ($h * [uint64]16777619) -band [uint64]4294967295
    }
    return $h
}

function SinTildes([string]$s) {
    $norm = $s.Normalize([System.Text.NormalizationForm]::FormD)
    $sb = New-Object System.Text.StringBuilder
    foreach ($c in $norm.ToCharArray()) {
        if ([System.Globalization.CharUnicodeInfo]::GetUnicodeCategory($c) -ne 'NonSpacingMark') {
            [void]$sb.Append($c)
        }
    }
    return $sb.ToString()
}

# Rangos de IP plausibles para Uruguay (inventados a los efectos del ejercicio)
$prefijos = @('179.27', '190.64', '167.62', '186.52', '190.135', '179.31', '190.112', '181.44')

# Cuentas que comparten deliberadamente los datos de registro:
# es un gancho preparado para futuros ejercicios de correlación.
$vinculadas = @{
    'charrua_libre'  = 'mateamargo_87'
    'tero_anon_2019' = 'mateamargo_87'
    'jp.burgos'      = 'mateamargo_87'   # sospechoso del ej.3: comparte tel/IP/dispositivo en el volcado
}

$registros = New-Object System.Collections.Generic.List[string]
$perfiles  = New-Object System.Collections.Generic.List[string]
$fichas    = @{}

foreach ($b in $bloques) {
    $bloque = $b.Value
    $alias  = Campo $bloque 'alias'
    if ([string]::IsNullOrWhiteSpace($alias)) { continue }

    $nombre = Campo $bloque 'nombre'
    $ubic   = Campo $bloque 'ubicacion'
    $alta   = Campo $bloque 'se_unio'
    $oculto = $bloque -match 'oculto:\s*true'
    $verif  = $bloque -match 'verificado:\s*true'

    $h = Hash32 $alias

    # correo derivado del nombre real cuando existe
    $limpio = SinTildes $nombre
    if ($limpio -match '^[A-Za-z]' -and $limpio -notmatch '^\(') {
        $partes = ($limpio -replace '[^A-Za-z ]', '').Trim() -split '\s+'
        if ($partes.Count -ge 2) { $usuarioCorreo = ($partes[0] + '.' + $partes[-1]).ToLower() }
        else { $usuarioCorreo = $partes[0].ToLower() }
    } else {
        $usuarioCorreo = ($alias -replace '[^a-zA-Z0-9]', '').ToLower()
    }

    $tel  = '09{0} {1} {2}' -f ([int]($h % 8) + 1), ([int](($h -shr 4) % 900) + 100), ([int](($h -shr 12) % 900) + 100)
    $pref = $prefijos[[int]($h % [uint64]$prefijos.Count)]
    $ip   = '{0}.{1}.{2}' -f $pref, ([int](($h -shr 6) % 254) + 1), ([int](($h -shr 18) % 254) + 1)
    $dev  = 'AND'
    if (($h % 3) -eq 1) { $dev = 'IOS' }
    if (($h % 3) -eq 2) { $dev = 'WEB' }
    $idDev = '{0}-{1:x5}-{2:x4}' -f $dev, [int](($h -shr 2) % 1048575), [int](($h -shr 14) % 65535)

    $fichas[$alias] = @{
        correo = $usuarioCorreo + '@correo.uy'; tel = $tel; ip = $ip; dev = $idDev
    }
}

# aplicar los vínculos deliberados (mismo teléfono, IP y dispositivo)
foreach ($k in $vinculadas.Keys) {
    $destino = $vinculadas[$k]
    if ($fichas.ContainsKey($k) -and $fichas.ContainsKey($destino)) {
        $fichas[$k].tel = $fichas[$destino].tel
        $fichas[$k].ip  = $fichas[$destino].ip
        $fichas[$k].dev = $fichas[$destino].dev
    }
}

# ---------------------------------------------------------------
#  Casi colisiones: ruido deliberado.
#
#  Estos datos se parecen lo suficiente a los de una cuenta relevante
#  como para levantar una hipotesis, pero NO coinciden. Obligan a
#  comparar digito por digito y a descartar con evidencia, que es
#  justamente el trabajo que se quiere entrenar.
# ---------------------------------------------------------------

# mismo telefono salvo el ultimo digito
$casiTelefono = @{
    'mateamargo87'    = 'mateamargo_87'
    'mama_alerta_mvd' = 'mama_alerta_uy'
}
# misma red /24, distinto ultimo octeto
$casiIP = @{
    'tero_anon_2018'      = 'charrua_libre'
    'la_verdad_del_norte' = 'mateamargo_87'
    'esceptico_uy'        = 'escepticouy'
}
# mismo prefijo de dispositivo, sufijo distinto
$casiDispositivo = @{
    'charrua.libre'    = 'charrua_libre'
    'hacker.del.prado' = 'hacker_del_prado'
}

foreach ($k in $casiTelefono.Keys) {
    $ref = $casiTelefono[$k]
    if ($fichas.ContainsKey($k) -and $fichas.ContainsKey($ref)) {
        $t = $fichas[$ref].tel
        $ultimo = [int]$t.Substring($t.Length - 1)
        $fichas[$k].tel = $t.Substring(0, $t.Length - 1) + ((($ultimo + 3) % 10).ToString())
    }
}
foreach ($k in $casiIP.Keys) {
    $ref = $casiIP[$k]
    if ($fichas.ContainsKey($k) -and $fichas.ContainsKey($ref)) {
        $partes = $fichas[$ref].ip.Split('.')
        $ultimo = [int]$partes[3]
        $nuevo  = (($ultimo + 11) % 254) + 1
        if ($nuevo -eq $ultimo) { $nuevo = $ultimo + 1 }
        $fichas[$k].ip = '{0}.{1}.{2}.{3}' -f $partes[0], $partes[1], $partes[2], $nuevo
    }
}
foreach ($k in $casiDispositivo.Keys) {
    $ref = $casiDispositivo[$k]
    if ($fichas.ContainsKey($k) -and $fichas.ContainsKey($ref)) {
        $partes = $fichas[$ref].dev.Split('-')
        if ($partes.Count -eq 3) {
            $fichas[$k].dev = '{0}-{1}-{2}' -f $partes[0], $partes[1], 'a71c'
        }
    }
}

foreach ($b in $bloques) {
    $bloque = $b.Value
    $alias  = Campo $bloque 'alias'
    if ([string]::IsNullOrWhiteSpace($alias)) { continue }
    $nombre = Campo $bloque 'nombre'
    $alta   = Campo $bloque 'se_unio'
    $oculto = $bloque -match 'oculto:\s*true'
    $verif  = $bloque -match 'verificado:\s*true'
    $f = $fichas[$alias]

    $nombreReg = $nombre
    if ($nombre -match '^\(' -or [string]::IsNullOrWhiteSpace($nombre)) { $nombreReg = '-- no declarado --' }
    $nombreReg = SinTildes $nombreReg

    $telMask = $f.tel -replace '^(09)(\d)( )(\d{3})( )(\d{3})$', '$1* *** $6'

    $extra = ''
    if ($oculto) {
        $extra = ",`r`n      ""estado_cuenta"": ""BAJA_VOLUNTARIA""," +
                 "`r`n      ""nota_moderacion"": ""Perfil conservado en modo archivo. Accesible por URL directa con el alias exacto. No listado en buscador."""
    }

    $reg = @"
    {
      "alias": "$alias",
      "nombre_registrado": "$nombreReg",
      "correo": "$($f.correo)",
      "telefono": "$telMask",
      "documento_verificado": $(if ($verif) { 'true' } else { 'false' }),
      "ip_registro": "$($f.ip)",
      "ip_ultimo_acceso": "$($f.ip)",
      "id_dispositivo": "$($f.dev)",
      "alta_utc": "${alta}T00:00:00Z"$extra
    }
"@
    $registros.Add($reg)

    if (-not $oculto) {
        $perfiles.Add("  <url><loc>/perfil.html?u=$alias</loc><priority>0.5</priority></url>")
    }
}

# --- api/usuarios.json ---
$cab = @"
{
  "_meta": {
    "endpoint": "/api/usuarios.json",
    "version": "3.0",
    "aviso": "Volcado interno de cuentas. NO debe exponerse publicamente. Desindexado via robots.txt (ver ticket PLT-2291).",
    "generado_utc": "2026-08-04T05:00:03Z",
    "registros": $($registros.Count)
  },
  "usuarios": [
"@
$pie = @"

  ]
}
"@
$json = $cab + "`r`n" + ($registros -join ",`r`n") + $pie
$dirApi = Split-Path -Parent $apiOut
if (-not (Test-Path $dirApi)) { New-Item -ItemType Directory -Path $dirApi | Out-Null }
[System.IO.File]::WriteAllText($apiOut, $json, (New-Object System.Text.UTF8Encoding($false)))
Write-Output ("Escrito: {0} ({1} registros)" -f $apiOut, $registros.Count)

# --- sitemap.xml ---
$grupos = @('laposta','vecinos-cerro','comprovendo','pesca','murgas','mateando',
            'ruta5','aves','cx-radio','docentes','mascotas','cocina')
$urlsGrupos = ($grupos | ForEach-Object { "  <url><loc>/grupo.html?g=$_</loc><priority>0.7</priority></url>" }) -join "`r`n"

$mapa = @"
<?xml version="1.0" encoding="UTF-8"?>
<!-- Mapa del sitio generado automaticamente. Solo contenido publico e indexable. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url><loc>/index.html</loc><changefreq>hourly</changefreq><priority>1.0</priority></url>
  <url><loc>/grupos.html</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>/marketplace.html</loc><changefreq>hourly</changefreq><priority>0.9</priority></url>
  <url><loc>/eventos.html</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>/buscar.html</loc><changefreq>daily</changefreq><priority>0.6</priority></url>
  <url><loc>/terminos.html</loc><changefreq>yearly</changefreq><priority>0.2</priority></url>

$urlsGrupos

$($perfiles -join "`r`n")

  <!--
    Excluidas del mapa por politica de la plataforma:
      - perfiles en estado BAJA_VOLUNTARIA (siguen accesibles por URL directa)
      - la cola de moderacion (accesible, pero no se difunde)
      - /respaldo/ y /api/ (ver robots.txt)
  -->

</urlset>
"@
[System.IO.File]::WriteAllText($mapaOut, $mapa, (New-Object System.Text.UTF8Encoding($false)))
Write-Output ("Escrito: {0} ({1} perfiles indexados)" -f $mapaOut, $perfiles.Count)
