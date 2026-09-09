# Escudo Virtual 2026 — CTF

Todo el CTF en un solo repo. Se clona y se levanta con **un comando**.

## Cómo levantar todo

```bash
./levantar.sh
```

Servicios que quedan corriendo:

| Servicio | URL | Qué es |
|---|---|---|
| Blog "Archivo T.E.R.O." | `http://<IP>:5000` | Blog conspiranoico (Flask). Varios retos. |
| TeroSocial | `http://<IP>:8347` | Red social del CTF (sitio estático). |
| Blue Team | `http://<IP>:5602` (Dashboards) / `:9201` (OpenSearch) | Threat Hunting sobre logs Wazuh/Sysmon. |

Para bajar todo:

```bash
./apagar.sh
```

## Requisitos en el server

- **Python 3** y **pip** (para el blog y para servir TeroSocial).
- **Docker + docker compose** (para Blue Team). Si no está Docker, el resto
  igual levanta y Blue Team se saltea con un aviso.
- Puertos libres: **5000**, **8347**, **9201** y **5602**.

El script crea un entorno virtual (`.venv/`) para el blog, así que no toca el
Python del sistema. Blue Team corre aislado en contenedores.

## Estructura

```
.
├── app.py, templates/, static/, notas.py …   # Blog (Flask)          -> :5000
├── terosocial/                        # TeroSocial (estático) -> :8347
├── BlueTeam/                          # OpenSearch + Dashboards -> :9201/:5602
│   ├── docker-compose.yml
│   ├── load-logs.sh                   # carga logs y crea index patterns
│   ├── logs-ctf/                      # datasets v1/v2/v3
│   └── CHALLENGES.md                  # enunciados + resoluciones (SOLO organizador)
├── requirements.txt                   # dependencias del blog
├── levantar.sh                        # arranca todo
└── apagar.sh                         # detiene todo
```

## Notas

- El blog usa el servidor de desarrollo de Flask (suficiente para el CTF; no es
  para producción de alto tráfico).
- TeroSocial se sirve como sitio estático con el servidor de Python. Si el
  server ya usa nginx/apache, se puede servir la carpeta `terosocial/` desde ahí
  en el puerto 8347 en lugar de correrlo con el script.
- Blue Team: la primera vez `levantar.sh` levanta los contenedores y carga los
  logs. En las siguientes corridas detecta que ya están cargados y no los
  duplica.
- **`BlueTeam/CHALLENGES.md` tiene las resoluciones**: es material del
  organizador y no se sirve por web (Dashboards sólo muestra los logs). No
  publicar.
- Logs de arranque en `/tmp/blog.log` y `/tmp/terosocial.log`.
