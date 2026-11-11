# ===========================================================================
# Blessing ERP - Installation / Mise a jour (service Windows via NSSM)
# A executer en tant qu'Administrateur.
#
# Dans le dossier d'installation (ex. D:\install-blessing), placer :
#   - blessing-deploy.ps1         (ce script)
#   - le JAR de l'application     (BlessingERPCommercial.jar ou blessing-erp.jar)
#   - application.properties      (rempli avec les vraies valeurs : base, RabbitMQ, identifiant du spoke)
#   - nssm.exe                    (seulement si NSSM n'est pas deja installe sur la machine)
#
# Ce que fait le script :
#   1. Installe NSSM de facon PERMANENTE dans C:\Program Files\NSSM et l'ajoute au PATH
#      systeme : le service ne depend plus du dossier d'installation.
#   2. Copie le JAR et la configuration dans le dossier de l'application (C:\blessing\...).
#   3. Premiere installation : cree le service Windows et le demarre.
#      Mise a jour            : arrete le service, remplace le JAR, redemarre.
#      (la configuration en place n'est PAS ecrasee - voir $UpdateConfig)
#
# Une fois le script termine avec succes, le dossier d'installation (D:\install-blessing)
# peut etre SUPPRIME : plus rien n'en depend.
# ===========================================================================

# --- A ADAPTER -------------------------------------------------------------
# "Commercial" ou "Distributeur"
$Produit      = "Distributeur"
$JvmXmx       = "1g"
# Laisser vide : Java est recherche automatiquement (JAVA_HOME, PATH, C:\Program Files\...).
$JavaPath     = ""
# Mettre $true pour ecraser application.properties lors d'une mise a jour.
$UpdateConfig = $false
# ---------------------------------------------------------------------------

$Produits = @{
    "Commercial"   = @{ Service = "BlessingERPCommercial";   Display = "Blessing ERP Commercial";   Dir = "C:\blessing\commercial";   Jar = "BlessingERPCommercial.jar" }
    "Distributeur" = @{ Service = "BlessingERPDistributeur"; Display = "Blessing ERP Distributeur"; Dir = "C:\blessing\distributeur"; Jar = "blessing-erp.jar"         }
}
# Services installes avant le renommage (K.I.R.A) : mis a jour sur place, jamais dupliques.
$AnciensServices = @{
    "Commercial"   = @("KiraCommercial")
    "Distributeur" = @("KiraDistributeur")
}

$NssmHome = Join-Path $env:ProgramFiles "NSSM"
$NssmExe  = Join-Path $NssmHome "nssm.exe"

function Stop-Install([string]$message, [string]$aide = "") {
    Write-Host ""
    Write-Host "ERREUR : $message" -ForegroundColor Red
    if ($aide) { Write-Host $aide }
    exit 1
}

function Find-Java {
    if ($JavaPath -and (Test-Path $JavaPath)) { return $JavaPath }
    if ($env:JAVA_HOME -and (Test-Path (Join-Path $env:JAVA_HOME "bin\java.exe"))) { return (Join-Path $env:JAVA_HOME "bin\java.exe") }
    $cmd = Get-Command java.exe -ErrorAction SilentlyContinue
    if ($cmd -and $cmd.Source -notlike "*\Oracle\Java\javapath*") { return $cmd.Source }
    $roots = @("$env:ProgramFiles\Java", "$env:ProgramFiles\Eclipse Adoptium", "$env:ProgramFiles\Microsoft")
    $found = foreach ($r in $roots) { if (Test-Path $r) { Get-ChildItem $r -Directory | ForEach-Object { Join-Path $_.FullName "bin\java.exe" } | Where-Object { Test-Path $_ } } }
    if ($found) { return ($found | Sort-Object -Descending | Select-Object -First 1) }
    if ($cmd) { return $cmd.Source }
    return $null
}

function Install-NssmPermanent {
    # 1. Deja installe au bon endroit
    if (-not (Test-Path $NssmExe)) {
        # 2. Chercher une copie : PATH, dossier d'installation, emplacements habituels
        $sources = @()
        $inPath = Get-Command nssm.exe -ErrorAction SilentlyContinue
        if ($inPath) { $sources += $inPath.Source }
        $sources += @("$PSScriptRoot\nssm.exe", "$PSScriptRoot\win64\nssm.exe", "$PSScriptRoot\nssm\win64\nssm.exe",
                      "$PSScriptRoot\nssm\nssm.exe", "C:\nssm\win64\nssm.exe", "C:\nssm\nssm.exe", "C:\tools\nssm\win64\nssm.exe",
                      "C:\tools\nssm.exe", "C:\kira\nssm.exe")
        $source = $sources | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1
        if (-not $source) {
            Stop-Install "NSSM introuvable." ("Placez nssm.exe dans le dossier d'installation : $PSScriptRoot`n" +
                "Telechargement : https://nssm.cc/download -> extraire le zip -> prendre win64\nssm.exe")
        }
        New-Item -ItemType Directory -Path $NssmHome -Force | Out-Null
        Copy-Item -Path $source -Destination $NssmExe -Force
        Write-Host "NSSM installe : $NssmExe (copie de $source)"
    } else {
        Write-Host "NSSM deja installe : $NssmExe"
    }

    # 3. Ajouter C:\Program Files\NSSM au PATH systeme (une seule fois)
    $machinePath = [Environment]::GetEnvironmentVariable("Path", "Machine")
    $entries = $machinePath -split ";" | Where-Object { $_ -ne "" }
    if (-not ($entries | Where-Object { $_.TrimEnd("\") -ieq $NssmHome.TrimEnd("\") })) {
        [Environment]::SetEnvironmentVariable("Path", ($machinePath.TrimEnd(";") + ";" + $NssmHome), "Machine")
        Write-Host "  -> $NssmHome ajoute au PATH systeme (commande 'nssm' disponible dans les nouvelles fenetres)"
    }
    if (-not (($env:Path -split ";") | Where-Object { $_.TrimEnd("\") -ieq $NssmHome.TrimEnd("\") })) {
        $env:Path = $env:Path.TrimEnd(";") + ";" + $NssmHome
    }
}

function Repair-ServiceBinary([string]$name) {
    # Un service cree avec un nssm.exe place dans un dossier temporaire cesserait de fonctionner si ce
    # dossier etait supprime : on le fait pointer vers la copie permanente.
    $svc = Get-CimInstance Win32_Service -Filter "Name='$name'" -ErrorAction SilentlyContinue
    if (-not $svc) { return }
    $current = $svc.PathName.Trim().Trim('"')
    if ($current -ine $NssmExe) {
        & sc.exe config $name binPath= "`"$NssmExe`"" | Out-Null
        Write-Host "  Service '$name' rattache a $NssmExe (avant : $current)"
    }
}

function Wait-ServiceStatus([string]$name, [string]$status, [int]$seconds = 60) {
    for ($i = 0; $i -lt $seconds; $i++) {
        $s = Get-Service -Name $name -ErrorAction SilentlyContinue
        if ($s -and $s.Status -eq $status) { return $true }
        Start-Sleep -Seconds 1
    }
    return $false
}

# ===========================================================================
# VERIFICATIONS
# ===========================================================================

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Stop-Install "Ce script doit etre lance en tant qu'Administrateur." "Clic droit sur PowerShell -> Executer en tant qu'administrateur"
}
if (-not $Produits.ContainsKey($Produit)) { Stop-Install "Produit inconnu : '$Produit' (valeurs possibles : Commercial, Distributeur)." }

$P              = $Produits[$Produit]
$ServiceName    = $P.Service
$ServiceDisplay = $P.Display
$InstallDir     = $P.Dir
$JarName        = $P.Jar

$Java = Find-Java
if (-not $Java) { Stop-Install "Java introuvable." "Installez un JDK 21 (ou plus recent) ou renseignez `$JavaPath en haut de ce script." }
Write-Host "Java : $Java"

$SourceJar = Get-ChildItem -Path $PSScriptRoot -Filter *.jar -File | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if (-not $SourceJar) { Stop-Install "Aucun fichier .jar dans $PSScriptRoot." }
$SourceConfig = Join-Path $PSScriptRoot "application.properties"

Install-NssmPermanent

# Installation K.I.R.A deja en place ? On la met a jour sur place (meme service, meme dossier).
if (-not (Get-Service -Name $ServiceName -ErrorAction SilentlyContinue)) {
    foreach ($ancien in $AnciensServices[$Produit]) {
        if (Get-Service -Name $ancien -ErrorAction SilentlyContinue) {
            $dir = (& $NssmExe get $ancien AppDirectory | Out-String).Trim() -replace "`0", ""
            $params = (& $NssmExe get $ancien AppParameters | Out-String) -replace "`0", ""
            Write-Host "Installation existante detectee : service '$ancien' ($dir) - mise a jour sur place." -ForegroundColor Yellow
            $ServiceName = $ancien
            if ($dir) { $InstallDir = $dir }
            if ($params -match '-jar\s+"?([^"]+\.jar)"?') { $JarName = Split-Path $Matches[1] -Leaf }
            break
        }
    }
}

$JarPath    = Join-Path $InstallDir $JarName
$ConfigDir  = Join-Path $InstallDir "config"
$ConfigFile = Join-Path $ConfigDir "application.properties"
$LogDir     = Join-Path $InstallDir "logs"

if ((Resolve-Path $PSScriptRoot).Path.TrimEnd("\") -ieq $InstallDir.TrimEnd("\")) {
    Stop-Install "Le dossier d'installation ne doit pas etre $InstallDir lui-meme." "Copiez les fichiers dans un dossier temporaire (ex. D:\install-blessing) et relancez."
}

New-Item -ItemType Directory -Path $InstallDir, $ConfigDir, $LogDir -Force | Out-Null

# ===========================================================================
# MISE A JOUR ou PREMIERE INSTALLATION
# ===========================================================================

$existing = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue

if ($existing) {
    Write-Host ""
    Write-Host "=== MISE A JOUR : $ServiceDisplay ($ServiceName) ===" -ForegroundColor Cyan

    if ($existing.Status -ne "Stopped") {
        Write-Host "Arret du service..."
        & $NssmExe stop $ServiceName confirm | Out-Null
        if (-not (Wait-ServiceStatus $ServiceName "Stopped" 60)) { Stop-Install "Le service ne s'arrete pas." "Arretez-le dans services.msc puis relancez le script." }
    }

    Repair-ServiceBinary $ServiceName

    Write-Host "Remplacement du JAR..."
    Copy-Item -Path $SourceJar.FullName -Destination $JarPath -Force
    Write-Host "  $($SourceJar.Name) -> $JarPath"

    if ($UpdateConfig -and (Test-Path $SourceConfig)) {
        Copy-Item -Path $SourceConfig -Destination $ConfigFile -Force
        Write-Host "  Configuration remplacee -> $ConfigFile"
    } else {
        Write-Host "  Configuration conservee : $ConfigFile"
    }

    Write-Host "Redemarrage du service..."
    & $NssmExe start $ServiceName | Out-Null

} else {
    Write-Host ""
    Write-Host "=== INSTALLATION : $ServiceDisplay ===" -ForegroundColor Cyan

    if (-not (Test-Path $SourceConfig)) {
        Stop-Install "application.properties introuvable : $SourceConfig" "Remplissez ce fichier avec les parametres de production avant de lancer le script."
    }

    Write-Host "Copie des fichiers..."
    Copy-Item -Path $SourceJar.FullName -Destination $JarPath -Force
    if ((Test-Path $ConfigFile) -and -not $UpdateConfig) {
        Write-Host "  Configuration deja presente, conservee : $ConfigFile"
    } else {
        Copy-Item -Path $SourceConfig -Destination $ConfigFile -Force
    }
    Write-Host "  JAR    -> $JarPath"
    Write-Host "  Config -> $ConfigFile"

    Write-Host "Creation du service Windows..."
    $AppParams = "-Xmx$JvmXmx -Dfile.encoding=UTF-8 -Duser.timezone=Africa/Douala -jar `"$JarPath`""
    & $NssmExe install $ServiceName $Java                           | Out-Null
    & $NssmExe set $ServiceName AppParameters   $AppParams           | Out-Null
    & $NssmExe set $ServiceName AppDirectory    $InstallDir          | Out-Null
    & $NssmExe set $ServiceName DisplayName     $ServiceDisplay      | Out-Null
    & $NssmExe set $ServiceName Description     "$ServiceDisplay - Kairos Innovation Technologies" | Out-Null
    & $NssmExe set $ServiceName AppStdout       "$LogDir\console.log"       | Out-Null
    & $NssmExe set $ServiceName AppStderr       "$LogDir\console-error.log" | Out-Null
    & $NssmExe set $ServiceName AppRotateFiles  1                    | Out-Null
    & $NssmExe set $ServiceName AppRotateBytes  10485760             | Out-Null
    & $NssmExe set $ServiceName Start           SERVICE_AUTO_START   | Out-Null
    & $NssmExe set $ServiceName AppRestartDelay 10000                | Out-Null

    if (-not (Get-Service -Name $ServiceName -ErrorAction SilentlyContinue)) {
        Stop-Install "Le service '$ServiceName' n'a pas ete cree." "Essayez manuellement : nssm install $ServiceName"
    }
    Write-Host "Service cree." -ForegroundColor Green

    Write-Host "Demarrage du service..."
    & $NssmExe start $ServiceName | Out-Null
}

# ===========================================================================
# VERIFICATION FINALE
# ===========================================================================

$running = Wait-ServiceStatus $ServiceName "Running" 30
$svc = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue

Write-Host ""
if ($running) {
    Write-Host "Service '$ServiceName' actif." -ForegroundColor Green
} else {
    Write-Warning "Service pas encore en etat Running. Consultez $LogDir\console-error.log"
}
Write-Host "--------------------------------------------------------------"
Write-Host "  Application : $ServiceDisplay"
Write-Host "  Service     : $ServiceName ($($svc.Status))"
Write-Host "  Dossier     : $InstallDir"
Write-Host "  Config      : $ConfigFile"
Write-Host "  Logs        : $LogDir\erp.log   |   $LogDir\console-error.log"
Write-Host "  NSSM        : $NssmExe (dans le PATH systeme)"
Write-Host ""
Write-Host "  Arreter     : nssm stop $ServiceName     (ou net stop $ServiceName)"
Write-Host "  Demarrer    : nssm start $ServiceName    (ou net start $ServiceName)"
Write-Host "  Voir logs   : Get-Content `"$LogDir\erp.log`" -Tail 50 -Wait"
Write-Host "--------------------------------------------------------------"
if ($running) {
    Write-Host ""
    Write-Host "Vous pouvez maintenant supprimer le dossier d'installation :" -ForegroundColor Green
    Write-Host "  $PSScriptRoot"
}
