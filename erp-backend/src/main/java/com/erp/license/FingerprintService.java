package com.erp.license;

import lombok.extern.slf4j.Slf4j;
import oshi.SystemInfo;
import oshi.hardware.HWDiskStore;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.hardware.NetworkIF;

import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.List;
import java.util.Locale;
import java.util.Set;

/**
 * Calcule l'empreinte matérielle de la machine (MAC de l'interface réseau principale, numéro de
 * série du disque système, numéro de série de la carte mère), chacun haché en SHA-256
 * séparément — jamais combinés en un seul hash — pour permettre une tolérance de mismatch au
 * niveau composant (cf. LicenseService).
 */
@Service
@Slf4j
public class FingerprintService {

    /** Interfaces virtuelles à exclure — même liste que SyncDispatcherScheduler.detectSpokeApiUrl. */
    private static final String[] VIRTUAL_IF_PREFIXES = {"docker", "br-", "veth", "virbr", "tun", "tap", "lo"};

    /** Valeurs placeholder connues des constructeurs — un composant portant l'une de ces valeurs
     *  est considéré comme "non lisible" (hash null), pas hashé tel quel (sinon toutes les VM avec
     *  le même firmware générique deviendraient indiscernables). */
    private static final Set<String> PLACEHOLDER_VALUES = Set.of(
            "", "none", "not specified", "to be filled by o.e.m.", "default string",
            "system serial number", "not available", "n/a", "unknown", "0", "0000000000",
            "00000000-0000-0000-0000-000000000000", "ffffffff-ffff-ffff-ffff-ffffffffffff"
    );

    public record Fingerprint(String macHash, String diskHash, String boardHash) {
        public int availableCount() {
            int n = 0;
            if (macHash != null) n++;
            if (diskHash != null) n++;
            if (boardHash != null) n++;
            return n;
        }
    }

    public Fingerprint compute() {
        SystemInfo si = new SystemInfo();
        HardwareAbstractionLayer hal = si.getHardware();

        String mac = readPrimaryMac(hal);
        String disk = readDiskSerial(hal);
        String board = readBoardSerial(hal);

        return new Fingerprint(hashOrNull(mac), hashOrNull(disk), hashOrNull(board));
    }

    private String readPrimaryMac(HardwareAbstractionLayer hal) {
        try {
            List<NetworkIF> nets = hal.getNetworkIFs();
            for (NetworkIF net : nets) {
                String name = net.getName() != null ? net.getName().toLowerCase(Locale.ROOT) : "";
                boolean virtualByName = false;
                for (String prefix : VIRTUAL_IF_PREFIXES) {
                    if (name.startsWith(prefix)) { virtualByName = true; break; }
                }
                if (virtualByName) continue;

                // Les préfixes ci-dessus sont surtout pertinents sous Linux. Sous Windows, les
                // adaptateurs virtuels (VPN, Hyper-V, VMware, loopback) portent des noms totalement
                // différents et ne matcheraient aucun préfixe — on s'appuie donc en complément sur
                // l'API réseau native de la JVM, cross-platform par construction.
                if (isLoopbackOrVirtual(net)) continue;

                String mac = net.getMacaddr();
                if (mac != null && !mac.isBlank() && !"00:00:00:00:00:00".equalsIgnoreCase(mac)) {
                    return mac.trim();
                }
            }
        } catch (Exception e) {
            log.warn("Lecture MAC impossible : {}", e.getMessage());
        }
        return null;
    }

    private boolean isLoopbackOrVirtual(NetworkIF net) {
        try {
            java.net.NetworkInterface nic = net.queryNetworkInterface();
            return nic != null && (nic.isLoopback() || nic.isVirtual());
        } catch (Exception e) {
            // Certaines plateformes lèvent une exception sur ces appels — on se rabat sur le
            // filtre par nom déjà appliqué plutôt que d'exclure une interface valide par erreur.
            return false;
        }
    }

    private String readDiskSerial(HardwareAbstractionLayer hal) {
        try {
            List<HWDiskStore> disks = hal.getDiskStores();
            if (disks.isEmpty()) return null;
            // Premier disque physique listé — sur la plupart des installations serveur/poste unique
            // c'est le disque système ; pas de moyen fiable multi-OS de cibler le disque de boot précis.
            String serial = disks.get(0).getSerial();
            return serial != null ? serial.trim() : null;
        } catch (Exception e) {
            log.warn("Lecture numéro de série disque impossible : {}", e.getMessage());
            return null;
        }
    }

    private String readBoardSerial(HardwareAbstractionLayer hal) {
        try {
            String serial = hal.getComputerSystem().getBaseboard().getSerialNumber();
            return serial != null ? serial.trim() : null;
        } catch (Exception e) {
            log.warn("Lecture numéro de série carte mère impossible : {}", e.getMessage());
            return null;
        }
    }

    private String hashOrNull(String raw) {
        if (raw == null) return null;
        String normalized = raw.trim().toLowerCase(Locale.ROOT);
        if (PLACEHOLDER_VALUES.contains(normalized)) return null;
        return sha256(raw.trim());
    }

    private String sha256(String value) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(value.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte b : hash) sb.append(String.format("%02x", b));
            return sb.toString();
        } catch (Exception e) {
            throw new IllegalStateException("SHA-256 indisponible", e);
        }
    }
}
