package com.erp.license;

import lombok.extern.slf4j.Slf4j;
import oshi.SystemInfo;
import oshi.hardware.HWDiskStore;
import oshi.hardware.HardwareAbstractionLayer;

import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

/**
 * Calcule l'empreinte matérielle de la machine (numéro de série du disque système, numéro de
 * série de la carte mère), chacun haché en SHA-256 séparément — jamais combinés en un seul hash —
 * pour permettre une tolérance de mismatch au niveau composant (cf. LicenseService).
 *
 * L'adresse MAC en a volontairement été retirée (2026-09-22) : elle change dès qu'un poste bascule
 * du wifi à l'ethernet (interface réseau principale différente), ce qui déclenchait un blocage de
 * licence à chaque changement de connexion — un poste devait rester en permanence sur la même
 * interface réseau pour ne pas se faire bloquer, inutilisable en pratique. Disque + carte mère
 * suffisent à identifier une machine physique de façon stable.
 */
@Service
@Slf4j
public class FingerprintService {

    /** Valeurs placeholder connues des constructeurs — un composant portant l'une de ces valeurs
     *  est considéré comme "non lisible" (hash null), pas hashé tel quel (sinon toutes les VM avec
     *  le même firmware générique deviendraient indiscernables). */
    private static final Set<String> PLACEHOLDER_VALUES = Set.of(
            "", "none", "not specified", "to be filled by o.e.m.", "default string",
            "system serial number", "not available", "n/a", "unknown", "0", "0000000000",
            "00000000-0000-0000-0000-000000000000", "ffffffff-ffff-ffff-ffff-ffffffffffff"
    );

    /** UUID SMBIOS connus pour être partagés par des lots entiers de cartes mères. */
    private static final Set<String> GENERIC_UUIDS = Set.of(
            "03000200-0400-0500-0006-000700080009",
            "00020003-0004-0005-0006-000700080009"
    );

    /** @param diskHash      disque "principal" — celui envoyé au Hub à la demande d'activation
     *  @param allDiskHashes hashes de TOUS les disques lisibles de la machine : la vérification
     *                       locale accepte n'importe lequel (cf. LicenseService#compareFingerprint),
     *                       l'ordre d'énumération OSHI n'étant pas garanti stable (clé USB branchée,
     *                       disque externe, réordonnancement du contrôleur au redémarrage). */
    public record Fingerprint(String diskHash, String boardHash, String uuidHash, Set<String> allDiskHashes) {
        public int availableCount() {
            int n = 0;
            if (diskHash != null) n++;
            if (boardHash != null) n++;
            if (uuidHash != null) n++;
            return n;
        }
    }

    /** Dernière empreinte lue — le matériel ne change pas pendant la vie du process. Relire à
     *  chaque recheck (toutes les 30 min, et à chaque poll de l'écran de blocage) exposait l'appli
     *  aux lectures ratées ponctuelles (timeout WMI sous Windows quand la machine est chargée) :
     *  une lecture nulle était alors prise pour une "autre machine" et bloquait l'appli au bout de
     *  quelques heures d'utilisation. On ne relit que tant qu'un composant manque. */
    private volatile Fingerprint cached;

    public Fingerprint compute() {
        Fingerprint c = cached;
        if (c != null && c.availableCount() == 3) return c;

        SystemInfo si = new SystemInfo();
        HardwareAbstractionLayer hal = si.getHardware();

        String disk = readDiskSerial(hal);
        String board = readBoardSerial(hal);
        Fingerprint fresh = new Fingerprint(hashOrNull(disk), hashOrNull(board), readUuidHash(hal), readAllDiskHashes(hal));

        // Une valeur déjà lue n'est jamais remplacée : on ne fait que compléter les composants
        // qui manquaient (lecture ratée précédente). Le matériel ne change pas en cours d'exécution.
        cached = c == null ? fresh : new Fingerprint(
                c.diskHash() != null ? c.diskHash() : fresh.diskHash(),
                c.boardHash() != null ? c.boardHash() : fresh.boardHash(),
                c.uuidHash() != null ? c.uuidHash() : fresh.uuidHash(),
                !c.allDiskHashes().isEmpty() ? c.allDiskHashes() : fresh.allDiskHashes());
        return cached;
    }

    /** UUID matériel SMBIOS : écrit dans le firmware par le fabricant, identique après
     *  réinstallation de Windows, changement de disque ou de réseau, et toujours restitué sous la
     *  même forme — c'est le SEUL composant dont une différence bloque l'appli (cf. LicenseService).
     *  Les UUID génériques de certaines cartes bas de gamme (partagés par tout un lot) sont
     *  considérés comme illisibles. Normalisé en minuscules avant hachage. */
    private String readUuidHash(HardwareAbstractionLayer hal) {
        try {
            String uuid = hal.getComputerSystem().getHardwareUUID();
            if (uuid == null) return null;
            String normalized = uuid.trim().toLowerCase(Locale.ROOT);
            if (PLACEHOLDER_VALUES.contains(normalized) || GENERIC_UUIDS.contains(normalized)) return null;
            return sha256(normalized);
        } catch (Exception e) {
            log.warn("Lecture de l'UUID matériel impossible : {}", e.getMessage());
            return null;
        }
    }

    private Set<String> readAllDiskHashes(HardwareAbstractionLayer hal) {
        Set<String> hashes = new LinkedHashSet<>();
        try {
            for (HWDiskStore d : hal.getDiskStores()) {
                for (String v : serialVariants(d.getSerial())) {
                    String h = hashOrNull(v);
                    if (h != null) hashes.add(h);
                }
            }
        } catch (Exception e) {
            log.warn("Énumération des disques impossible : {}", e.getMessage());
        }
        return Set.copyOf(hashes);
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

    /** Sous Windows, le même disque peut remonter son numéro de série sous plusieurs formes selon
     *  la classe WMI interrogée, le compte qui lance l'appli (service vs session) ou la version de
     *  Windows : en clair, encodé en hexadécimal, ou avec les caractères inversés deux à deux. Une
     *  licence émise avec une forme devait rester reconnue quand l'autre ressort — sinon "disque
     *  ne correspond pas" sur une machine qui n'a jamais changé de disque. */
    static Set<String> serialVariants(String raw) {
        Set<String> out = new LinkedHashSet<>();
        if (raw == null || raw.isBlank()) return out;
        String plain = raw.trim();
        out.add(plain);
        String decoded = hexDecode(plain);
        if (decoded != null) { out.add(decoded); out.add(swapPairs(decoded).trim()); }
        String swapped = swapPairs(plain).trim();
        out.add(swapped);
        out.add(hexEncode(plain));
        out.add(hexEncode(swapped));
        out.remove("");
        return out;
    }

    private static String hexDecode(String s) {
        if (s.length() < 2 || s.length() % 2 != 0 || !s.matches("[0-9A-Fa-f]+")) return null;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i += 2) {
            int c = Integer.parseInt(s.substring(i, i + 2), 16);
            if (c < 0x20 || c > 0x7e) return null; // pas du texte : ce n'était pas de l'hexa encodé
            sb.append((char) c);
        }
        String r = sb.toString().trim();
        return r.isEmpty() ? null : r;
    }

    private static String swapPairs(String s) {
        StringBuilder sb = new StringBuilder(s.length());
        int i = 0;
        for (; i + 1 < s.length(); i += 2) sb.append(s.charAt(i + 1)).append(s.charAt(i));
        if (i < s.length()) sb.append(s.charAt(i));
        return sb.toString();
    }

    private static String hexEncode(String s) {
        StringBuilder sb = new StringBuilder();
        for (byte b : s.getBytes(StandardCharsets.UTF_8)) sb.append(String.format("%02x", b));
        return sb.toString();
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
