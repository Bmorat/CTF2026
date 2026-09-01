#!/usr/bin/env python3
"""
Generador de logs progresivos estilo Wazuh/Sysmon para el CTF de Blue Team.

Produce logs-ctf/logs-v1-acceso-inicial.json, logs-v2-credenciales.json y
logs-v3-exfiltracion.json a partir de los dos eventos clave ya existentes en
logs-wazuh-v2.json (descarga+ejecucion de PowerShell en VICTIM-HOST-01 y
mimikatz en SCDC01), agregando ruido benigno y los eventos clave nuevos
descritos en la consigna del CTF.
"""
import json
import random
import uuid
from pathlib import Path

random.seed(1337)

ROOT = Path(__file__).resolve().parent.parent
BASE_FILE = ROOT / "logs-wazuh-v2.json"
OUT_DIR = ROOT / "logs-ctf"
INDEX = "wazuh-alerts-4.x-2025.10.08"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def new_id(noise_counter=[0]):
    """Mezcla ids tipo uuid4 y tipo 'noise-XXXX-YYYY', igual que el archivo base."""
    if random.random() < 0.5:
        return str(uuid.uuid4())
    noise_counter[0] += 1
    return f"noise-{noise_counter[0]:04d}-{random.randint(1000, 9999)}"


def ts(day, hh, mm, ss, micro=0):
    if micro:
        return f"2025-10-{day:02d}T{hh:02d}:{mm:02d}:{ss:02d}.{micro:06d}Z"
    return f"2025-10-{day:02d}T{hh:02d}:{mm:02d}:{ss:02d}Z"


def sec_auditing_event(agent, event_id, description, rule_id, system_time,
                        timestamp, eventdata, level=3, rule_extra=None):
    rule = {"level": level, "description": description, "id": rule_id}
    if rule_extra:
        rule.update(rule_extra)
    return {
        "_index": INDEX,
        "_id": new_id(),
        "_source": {
            "agent": agent,
            "rule": rule,
            "data": {
                "win": {
                    "system": {
                        "eventID": event_id,
                        "systemTime": system_time,
                        "providerName": "Microsoft-Windows-Security-Auditing",
                    },
                    "eventdata": eventdata,
                }
            },
            "timestamp": timestamp,
            "location": "EventChannel",
        },
    }


def sysmon_event(agent, event_id, description, rule_id, system_time,
                  timestamp, eventdata, level=3):
    return {
        "_index": INDEX,
        "_id": new_id(),
        "_source": {
            "agent": agent,
            "rule": {"level": level, "description": description, "id": rule_id},
            "data": {
                "win": {
                    "system": {
                        "eventID": event_id,
                        "systemTime": system_time,
                        "providerName": "Microsoft-Windows-Sysmon",
                    },
                    "eventdata": eventdata,
                }
            },
            "timestamp": timestamp,
            "location": "Sysmon",
        },
    }


AGENT_VICTIM = {"name": "VICTIM-HOST-01.corp.local", "id": "vh01", "ip": "10.10.5.23"}
AGENT_SCDC01 = {"name": "SCDC01", "id": "005", "ip": "172.16.200.50"}
AGENT_FS01 = {"name": "FS01.corp.local", "id": "fs01", "ip": "10.10.5.40"}


def rand_logon_id():
    return f"0x{random.randint(0x1000, 0xfffff):x}"


def rand_process_id():
    return str(random.randint(1000, 9999))


# ---------------------------------------------------------------------------
# V1 - VICTIM-HOST-01 noise (Sysmon eventID 1 / eventID 3)
# ---------------------------------------------------------------------------

BENIGN_PROCESSES = [
    ("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files (x86)\\Microsoft\\Teams\\current\\Teams.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\notepad.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\SearchIndexer.exe", "C:\\Windows\\System32\\services.exe"),
    ("C:\\Windows\\System32\\SearchProtocolHost.exe", "C:\\Windows\\System32\\SearchIndexer.exe"),
    ("C:\\Windows\\System32\\WmiPrvSE.exe", "C:\\Windows\\System32\\svchost.exe"),
    ("C:\\Windows\\System32\\dllhost.exe", "C:\\Windows\\System32\\svchost.exe"),
    ("C:\\Windows\\System32\\RuntimeBroker.exe", "C:\\Windows\\System32\\svchost.exe"),
    ("C:\\Windows\\System32\\taskhostw.exe", "C:\\Windows\\System32\\svchost.exe"),
    ("C:\\Windows\\System32\\conhost.exe", "C:\\Windows\\System32\\cmd.exe"),
    ("C:\\Windows\\System32\\cmd.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Windows Defender\\MsMpEng.exe", "C:\\Windows\\System32\\services.exe"),
    ("C:\\Program Files\\7-Zip\\7zFM.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Microsoft OneDrive\\OneDrive.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\WindowsApps\\SlackTechnologies.Slack\\slack.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Zoom\\bin\\Zoom.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files (x86)\\Adobe\\Acrobat Reader DC\\Reader\\AcroRd32.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\spoolsv.exe", "C:\\Windows\\System32\\services.exe"),
    ("C:\\Windows\\System32\\wuauclt.exe", "C:\\Windows\\System32\\svchost.exe"),
    ("C:\\Windows\\System32\\backgroundTaskHost.exe", "C:\\Windows\\System32\\svchost.exe"),
]

BENIGN_CONNECTIONS = [
    ("update.microsoft.com", "13.107.4.50", "443"),
    ("login.microsoftonline.com", "20.190.160.14", "443"),
    ("outlook.office365.com", "52.96.166.2", "443"),
    ("teams.microsoft.com", "52.112.194.132", "443"),
    ("www.google.com", "142.250.80.100", "443"),
    ("github.com", "140.82.121.3", "443"),
    ("slack.com", "3.233.20.11", "443"),
    ("zoom.us", "3.235.71.2", "443"),
    ("onedrive.live.com", "13.107.42.13", "443"),
    ("", "10.10.5.1", "389"),
    ("", "10.10.5.2", "53"),
    ("", "10.10.5.5", "8080"),
    ("", "10.10.5.10", "445"),
    ("", "10.10.5.20", "9100"),
    ("self-service.corp.local", "10.10.5.9", "443"),
    ("intranet.corp.local", "10.10.5.15", "80"),
]

VICTIM_USERS = ["CORP\\jsmith", "CORP\\svc-backup", "CORP\\mreyes", "NT AUTHORITY\\SYSTEM"]


def gen_victim_noise(n_proc, n_conn, day, hh_range):
    events = []
    for _ in range(n_proc):
        image, parent = random.choice(BENIGN_PROCESSES)
        hh = random.randint(*hh_range)
        mm = random.randint(0, 59)
        ss = random.randint(0, 59)
        micro = random.randint(0, 999999)
        st = ts(day, hh, mm, ss, micro)
        events.append(sysmon_event(
            AGENT_VICTIM, "1", "A process was created.", "34012", st, st,
            {
                "ProcessGuid": "{" + str(uuid.uuid4()) + "}",
                "ProcessId": rand_process_id(),
                "Image": image,
                "CommandLine": image.split("\\")[-1],
                "ParentProcessId": rand_process_id(),
                "ParentImage": parent,
                "Hashes": "SHA256=" + uuid.uuid4().hex + uuid.uuid4().hex[:32],
                "User": random.choice(VICTIM_USERS),
            },
        ))
    for _ in range(n_conn):
        host, ip, port = random.choice(BENIGN_CONNECTIONS)
        hh = random.randint(*hh_range)
        mm = random.randint(0, 59)
        ss = random.randint(0, 59)
        micro = random.randint(0, 999999)
        st = ts(day, hh, mm, ss, micro)
        ed = {
            "ProcessGuid": "{" + str(uuid.uuid4()) + "}",
            "ProcessId": rand_process_id(),
            "Image": random.choice(BENIGN_PROCESSES)[0],
            "User": random.choice(VICTIM_USERS),
            "Protocol": "tcp",
            "SourceIp": "10.10.5.23",
            "SourcePort": str(random.randint(49152, 65535)),
            "DestinationIp": ip,
            "DestinationPort": port,
            "Initiated": "true",
        }
        if host:
            ed["DestinationHostname"] = host
        events.append(sysmon_event(
            AGENT_VICTIM, "3", "Network connection detected.", "34013", st, st, ed,
        ))
    return events


# ---------------------------------------------------------------------------
# FS01 noise (Security-Auditing style + a few Sysmon network events)
# ---------------------------------------------------------------------------

FS01_PROCESSES = [
    ("C:\\Windows\\System32\\notepad.exe", "C:\\Windows\\explorer.exe", "notepad.exe"),
    ("C:\\Windows\\System32\\taskmgr.exe", "C:\\Windows\\explorer.exe", "taskmgr.exe"),
    ("C:\\Windows\\System32\\calc.exe", "C:\\Windows\\explorer.exe", "calc.exe"),
    ("C:\\Program Files\\7-Zip\\7zFM.exe", "C:\\Windows\\explorer.exe", "7zFM.exe"),
    ("C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE", "C:\\Windows\\explorer.exe", "WINWORD.EXE"),
    ("C:\\Program Files\\Veeam\\Backup\\VeeamAgent.exe", "C:\\Windows\\System32\\services.exe", "VeeamAgent.exe /job:NightlyBackup"),
    ("C:\\Windows\\System32\\robocopy.exe", "C:\\Windows\\System32\\cmd.exe", "robocopy.exe \"D:\\Shares\\Public\" \"D:\\Backups\\Public\" /MIR"),
    ("C:\\Windows\\System32\\cmd.exe", "C:\\Windows\\explorer.exe", "cmd.exe"),
    ("C:\\Windows\\System32\\xcopy.exe", "C:\\Windows\\System32\\cmd.exe", "xcopy.exe \"D:\\Shares\\HR\\Templates\" \"D:\\Shares\\HR\\Templates_bak\" /E"),
    ("C:\\Program Files (x86)\\Adobe\\Acrobat Reader DC\\Reader\\AcroRd32.exe", "C:\\Windows\\explorer.exe", "AcroRd32.exe"),
    ("C:\\Windows\\System32\\spoolsv.exe", "C:\\Windows\\System32\\services.exe", "spoolsv.exe"),
    ("C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", "C:\\Windows\\explorer.exe", "powershell.exe Get-ChildItem D:\\Shares"),
    ("C:\\Program Files\\Notepad++\\notepad++.exe", "C:\\Windows\\explorer.exe", "notepad++.exe"),
]

FS01_CONNECTIONS = [
    ("", "10.10.5.1", "389"),
    ("", "10.10.5.2", "53"),
    ("update.microsoft.com", "13.107.4.50", "443"),
    ("", "172.16.200.50", "445"),
    ("", "10.10.5.20", "9100"),
    ("backup-vault.corp.local", "10.10.5.60", "443"),
    ("intranet.corp.local", "10.10.5.15", "80"),
]


def gen_fs01_noise(n_proc, n_conn, day, hh_range):
    events = []
    for _ in range(n_proc):
        image, parent, cmdline = random.choice(FS01_PROCESSES)
        hh = random.randint(*hh_range)
        mm = random.randint(0, 59)
        ss = random.randint(0, 59)
        micro = random.randint(0, 999999)
        st = ts(day, hh, mm, ss, micro)
        event_id, desc = random.choice([
            ("4688", "A process was created."),
            ("4689", "A process has exited."),
        ])
        events.append(sec_auditing_event(
            AGENT_FS01, event_id, desc, "67027", st, st,
            {
                "subjectUserName": "Administrator",
                "newProcessName": image,
                "parentProcessName": parent,
                "commandLine": cmdline,
                "targetLogonId": "0x0",
                "subjectDomainName": "CORP",
                "subjectLogonId": rand_logon_id(),
            },
        ))
    for _ in range(n_conn):
        host, ip, port = random.choice(FS01_CONNECTIONS)
        hh = random.randint(*hh_range)
        mm = random.randint(0, 59)
        ss = random.randint(0, 59)
        micro = random.randint(0, 999999)
        st = ts(day, hh, mm, ss, micro)
        ed = {
            "ProcessGuid": "{" + str(uuid.uuid4()) + "}",
            "ProcessId": rand_process_id(),
            "Image": "C:\\Windows\\System32\\svchost.exe",
            "User": "CORP\\Administrator",
            "Protocol": "tcp",
            "SourceIp": "10.10.5.40",
            "SourcePort": str(random.randint(49152, 65535)),
            "DestinationIp": ip,
            "DestinationPort": port,
            "Initiated": "true",
        }
        if host:
            ed["DestinationHostname"] = host
        events.append(sysmon_event(
            AGENT_FS01, "3", "Network connection detected.", "34013", st, st, ed,
        ))
    return events


# Noise scheduled-task events (4698) to camouflage the persistence task.
SCHEDULED_TASK_NOISE = [
    (AGENT_SCDC01, "CORP", "\\GoogleUpdateTaskMachineUA", "Administrator"),
    (AGENT_VICTIM, "CORP", "\\OneDrive Standalone Update Task-S-1-5-21", "CORP\\jsmith"),
    (AGENT_FS01, "CORP", "\\AdobeAAMUpdater-1.0-Administrator", "Administrator"),
]


def gen_scheduled_task_noise(day, hh_range):
    events = []
    for agent, domain, task_name, user in SCHEDULED_TASK_NOISE:
        hh = random.randint(*hh_range)
        mm = random.randint(0, 59)
        ss = random.randint(0, 59)
        st = ts(day, hh, mm, ss)
        events.append(sec_auditing_event(
            agent, "4698", "A scheduled task was created.", "18107", st, st,
            {
                "subjectUserName": user,
                "subjectDomainName": domain,
                "taskName": task_name,
                "targetLogonId": "0x0",
                "subjectLogonId": rand_logon_id(),
            },
        ))
    return events


# ---------------------------------------------------------------------------
# Load the two pre-existing key events from the base file
# ---------------------------------------------------------------------------

def load_base():
    with open(BASE_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    victim_evt = next(e for e in data if e["_id"] == "d4f8a9c2-6b3e-4f12-9c2a-1e8f9b2a7c5d")
    mimikatz_evt = next(e for e in data if e["_id"] == "fb7c7e24-2044-4018-ba35-47dad0717533")
    return victim_evt, mimikatz_evt


def main():
    OUT_DIR.mkdir(exist_ok=True)
    victim_evt, mimikatz_evt = load_base()

    # ---------------- V1: acceso inicial ----------------
    c2_conn = sysmon_event(
        AGENT_VICTIM, "3", "Network connection detected.", "34013",
        "2025-10-08T10:12:31.456Z", "2025-10-08T10:12:31.456Z",
        {
            "ProcessGuid": "{e9b2a6d2-9f0c-4b3d-91a4-1f2d3e5a6b7c}",
            "ProcessId": "5420",
            "Image": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
            "User": "CORP\\svc-update",
            "Protocol": "tcp",
            "SourceIp": "10.10.5.23",
            "SourcePort": "51322",
            "DestinationIp": "198.51.100.24",
            "DestinationPort": "443",
            "Initiated": "true",
        },
    )
    victim_noise = gen_victim_noise(140, 60, day=8, hh_range=(8, 12))
    v1_events = [victim_evt, c2_conn] + victim_noise
    random.shuffle(v1_events)
    write(v1_events, "logs-v1-acceso-inicial.json")

    # ---------------- V2: credenciales ----------------
    scdc01_noise = gen_scdc01_noise_subset(95)
    pth_logon = sec_auditing_event(
        AGENT_SCDC01, "4624", "A logon was successful.", "67027",
        "2025-10-08T18:07:15.041000Z", "2025-10-08T18:09:02.041000Z",
        {
            "subjectUserName": "adm.backup_svc",
            "newProcessName": "C:\\Windows\\System32\\cmd.exe",
            "parentProcessName": "C:\\Windows\\System32\\wbem\\WmiPrvSE.exe",
            "targetLogonId": "0x0",
            "subjectDomainName": "INSIGHTNEXUS",
            "subjectLogonId": rand_logon_id(),
            "logonType": "9",
        },
    )
    v2_events = list(v1_events) + scdc01_noise + [mimikatz_evt, pth_logon]
    random.shuffle(v2_events)
    write(v2_events, "logs-v2-credenciales.json")

    # ---------------- V3: exfiltracion ----------------
    fs01_noise = gen_fs01_noise(100, 43, day=8, hh_range=(18, 19))
    task_noise = gen_scheduled_task_noise(day=8, hh_range=(9, 16))

    fs01_logon = sec_auditing_event(
        AGENT_FS01, "4624", "A logon was successful.", "67027",
        "2025-10-08T18:12:40.010000Z", "2025-10-08T18:12:40.010000Z",
        {
            "subjectUserName": "adm.backup_svc",
            "newProcessName": "C:\\Windows\\explorer.exe",
            "parentProcessName": "C:\\Windows\\System32\\services.exe",
            "targetLogonId": "0x0",
            "subjectDomainName": "CORP",
            "subjectLogonId": rand_logon_id(),
            "logonType": "3",
            "ipAddress": "10.10.5.23",
        },
    )
    robocopy_evt = sec_auditing_event(
        AGENT_FS01, "4688", "A process was created.", "67027",
        "2025-10-08T18:15:22.014000Z", "2025-10-08T18:15:22.014000Z",
        {
            "subjectUserName": "adm.backup_svc",
            "newProcessName": "C:\\Windows\\System32\\robocopy.exe",
            "parentProcessName": "C:\\Windows\\System32\\cmd.exe",
            "commandLine": "robocopy.exe \"D:\\Shares\\Finance\\Confidential\" C:\\Windows\\Temp\\backup_staging /E /COPYALL /R:1",
            "targetLogonId": "0x0",
            "subjectDomainName": "CORP",
            "subjectLogonId": rand_logon_id(),
        },
    )
    compress_evt = sec_auditing_event(
        AGENT_FS01, "4688", "A process was created.", "67027",
        "2025-10-08T18:18:47.021000Z", "2025-10-08T18:18:47.021000Z",
        {
            "subjectUserName": "adm.backup_svc",
            "newProcessName": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
            "parentProcessName": "C:\\Windows\\System32\\cmd.exe",
            "commandLine": "powershell.exe -NoProfile -Command Compress-Archive -Path C:\\Windows\\Temp\\backup_staging\\* -DestinationPath C:\\Windows\\Temp\\update_cache.zip -Force",
            "targetLogonId": "0x0",
            "subjectDomainName": "CORP",
            "subjectLogonId": rand_logon_id(),
        },
    )
    sched_task_evt = sec_auditing_event(
        AGENT_FS01, "4698", "A scheduled task was created.", "18107",
        "2025-10-08T18:21:03.000000Z", "2025-10-08T18:21:03.000000Z",
        {
            "subjectUserName": "adm.backup_svc",
            "subjectDomainName": "CORP",
            "taskName": "\\WindowsUpdateCheck",
            "targetLogonId": "0x0",
            "subjectLogonId": rand_logon_id(),
            "actionCommand": "C:\\Windows\\Temp\\update_cache.zip -> powershell.exe -NoProfile -File C:\\Windows\\Temp\\sys_health_check.ps1",
        },
    )
    exfil_conn = sysmon_event(
        AGENT_FS01, "3", "Network connection detected.", "34013",
        "2025-10-08T18:24:56.502000Z", "2025-10-08T18:24:56.502000Z",
        {
            "ProcessGuid": "{" + str(uuid.uuid4()) + "}",
            "ProcessId": rand_process_id(),
            "Image": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
            "User": "CORP\\adm.backup_svc",
            "Protocol": "tcp",
            "SourceIp": "10.10.5.40",
            "SourcePort": "52918",
            "DestinationIp": "203.0.113.77",
            "DestinationPort": "8443",
            "Initiated": "true",
        },
    )

    v3_events = (list(v2_events) + fs01_noise + task_noise +
                 [fs01_logon, robocopy_evt, compress_evt, sched_task_evt, exfil_conn])
    random.shuffle(v3_events)
    write(v3_events, "logs-v3-exfiltracion.json")

    print(f"v1: {len(v1_events)} eventos")
    print(f"v2: {len(v2_events)} eventos")
    print(f"v3: {len(v3_events)} eventos")


SCDC01_NOISE_PROCS = [
    ("C:\\Windows\\System32\\notepad.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\calc.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\mspaint.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\taskmgr.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\cmd.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\7-Zip\\7zFM.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Mozilla Firefox\\firefox.exe", "C:\\Windows\\System32\\svchost.exe"),
    ("C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\SnippingTool.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Program Files\\Windows NT\\Accessories\\wordpad.exe", "C:\\Windows\\explorer.exe"),
    ("C:\\Windows\\System32\\WerFault.exe", "C:\\Windows\\explorer.exe"),
]


def gen_scdc01_noise_subset(n):
    events = []
    for _ in range(n):
        image, parent = random.choice(SCDC01_NOISE_PROCS)
        hh = random.randint(17, 19)
        mm = random.randint(0, 59)
        ss = random.randint(0, 59)
        micro = random.randint(0, 999999)
        st = ts(8, hh, mm, ss, micro)
        event_id, desc = random.choice([
            ("4624", "A logon was successful."),
            ("4688", "A process was created."),
            ("4689", "A process has exited."),
        ])
        events.append(sec_auditing_event(
            AGENT_SCDC01, event_id, desc, "67027", st, st,
            {
                "subjectUserName": "Administrator",
                "newProcessName": image,
                "parentProcessName": parent,
                "targetLogonId": "0x0",
                "subjectDomainName": "INSIGHTNEXUS",
                "subjectLogonId": rand_logon_id(),
            },
        ))
    return events


def write(events, filename):
    path = OUT_DIR / filename
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(events, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"wrote {path} ({len(events)} events)")


if __name__ == "__main__":
    main()
