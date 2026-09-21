package com.erp.license;

import com.erp.config.service.HubConfigService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

import static java.nio.charset.StandardCharsets.UTF_8;

/**
 * Cœur du licensing client : vérification/évaluation de l'état de licence, communication avec le
 * Hub, persistance locale du fichier signé. L'état courant est mis en cache (AtomicReference) et
 * consulté par LicenseEnforcementFilter/LicenseController sans recalcul à chaque requête.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class LicenseService {

    private final FingerprintService fingerprintService;
    private final HubConfigService hubConfigService;
    private final RuntimePackaging runtimePackaging;
    private final BuildIdentityService buildIdentityService;

    @Value("${license.enabled:}")
    private String licenseEnabledOverride;

    @Value("${license.file.path}")
    private String licenseFilePath;

    @Value("${hub.license.public-keys-dir}")
    private String publicKeysDir;

    @Value("${license.clock-skew-tolerance-ms:300000}")
    private long clockSkewToleranceMs;

    @Value("${sync.spoke.id:}")
    private String spokeId;

    @Value("${sync.spoke.name:}")
    private String spokeName;

    @Value("${license.contact.fallback-email:}")
    private String fallbackContactEmail;

    @Value("${license.contact.fallback-phone:}")
    private String fallbackContactPhone;

    private final Map<String, PublicKey> publicKeysByKid = new HashMap<>();
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final RestTemplate restTemplate = shortTimeoutRestTemplate();

    /** État courant mis en cache — lu par le filtre à chaque requête, recalculé au démarrage/recheck. */
    private final AtomicReference<LicenseStatus> cachedStatus = new AtomicReference<>(LicenseStatus.NOT_ACTIVATED);

    @Getter private volatile String cachedExpiresAt;
    @Getter private volatile String cachedContactEmail;
    @Getter private volatile String cachedContactPhone;
    @Getter private volatile String cachedMessage;

    /** Dernier échec de contact avec le Hub (null si le dernier appel a réussi) — sert de motif
     *  affiché quand la machine reste non activée faute d'avoir pu joindre le Hub. */
    private volatile String hubUnreachableMessage;

    /** Résultat de la lecture locale : les claims, qu'elles proviennent d'un token encore valide
     *  ou d'un token expiré (jjwt fournit quand même les claims dans ce dernier cas). */
    private record LicenseClaims(Claims claims) {}

    static class LicenseInvalidException extends RuntimeException {
        LicenseInvalidException(String message) { super(message); }
    }

    @PostConstruct
    public void loadPublicKeys() {
        try {
            Files.createDirectories(Path.of(licenseFilePath).toAbsolutePath().getParent());
            Files.createDirectories(Path.of(publicKeysDir));
        } catch (Exception e) {
            log.error("Impossible de créer le dossier de licence : {}", e.getMessage());
        }
        log.info("Licensing : fichier de licence = {} | clés publiques = {} | Hub = {} | spokeId = {}",
                Path.of(licenseFilePath).toAbsolutePath(), Path.of(publicKeysDir).toAbsolutePath(),
                hubConfigService.getHubUrl(), spokeId);
        fetchHubPublicKeyIfNeeded();
        loadFromClasspath();
        loadFromExternalDir();
        if (publicKeysByKid.isEmpty()) {
            log.warn("Aucune clé publique de licensing disponible (classpath ni {}) "
                    + "— toute licence sera considérée invalide.", publicKeysDir);
        }
    }

    /**
     * Récupère la clé publique de licensing du Hub configuré (hub.health.url) et l'écrit dans
     * {@code publicKeysDir} — UNIQUEMENT si aucun fichier portant ce kid n'existe déjà. Ne
     * régénère/n'écrase jamais une clé déjà présente : une fois récupérée, elle doit rester
     * stable indéfiniment (même garantie que RsaKeyProvider côté Hub). Best-effort : si le Hub
     * est injoignable au démarrage (pas encore configuré, réseau, etc.), échoue silencieusement
     * et réessaiera au prochain redémarrage.
     */
    private void fetchHubPublicKeyIfNeeded() {
        String hubUrl = hubConfigService.getHubUrl();
        if (hubUrl == null || hubUrl.isBlank()) return;
        try {
            ResponseEntity<String> resp = restTemplate.getForEntity(
                    hubUrl + "/api/hub/license/public-key", String.class);
            String kid = resp.getHeaders().getFirst("X-Kid");
            String pem = resp.getBody();
            if (kid == null || kid.isBlank() || pem == null || pem.isBlank()) return;

            Path dest = Path.of(publicKeysDir, kid + ".pem");
            if (Files.exists(dest)) return;

            Files.createDirectories(dest.getParent());
            Files.writeString(dest, pem, UTF_8);
            log.info("Clé publique de licensing récupérée automatiquement du Hub (kid={})", kid);
        } catch (Exception e) {
            log.warn("Impossible de joindre le Hub ({}) pour récupérer sa clé de licence : {} — "
                    + "vérifiez la connexion internet de cette machine et l'URL configurée (hub.health.url). "
                    + "Nouvelle tentative au prochain démarrage.", hubUrl, e.getMessage());
        }
    }

    private void loadFromClasspath() {
        try {
            ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            var resources = resolver.getResources("classpath:license/hub-license-public-keys/*.pem");
            for (var res : resources) {
                String filename = res.getFilename();
                if (filename == null) continue;
                String pem = new String(res.getInputStream().readAllBytes(), UTF_8);
                registerPublicKey(filename.replace(".pem", ""), pem);
            }
        } catch (Exception e) {
            log.error("Erreur au chargement des clés publiques de licensing embarquées : {}", e.getMessage(), e);
        }
    }

    private void loadFromExternalDir() {
        Path dir = Path.of(publicKeysDir);
        if (!Files.isDirectory(dir)) return;
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir, "*.pem")) {
            for (Path path : stream) {
                String filename = path.getFileName().toString();
                String pem = Files.readString(path, UTF_8);
                registerPublicKey(filename.replace(".pem", ""), pem);
            }
        } catch (IOException e) {
            log.error("Erreur au chargement des clés publiques de licensing depuis {} : {}",
                    publicKeysDir, e.getMessage(), e);
        }
    }

    private void registerPublicKey(String kid, String pem) {
        try {
            String base64 = pem
                    .replace("-----BEGIN PUBLIC KEY-----", "")
                    .replace("-----END PUBLIC KEY-----", "")
                    .replaceAll("\\s", "");
            byte[] der = Base64.getDecoder().decode(base64);
            PublicKey key = KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(der));
            publicKeysByKid.put(kid, key);
            log.info("Clé publique de licensing chargée (kid={})", kid);
        } catch (Exception e) {
            log.error("Clé publique de licensing illisible (kid={}) : {}", kid, e.getMessage());
        }
    }

    // ── API publique consommée par le filtre/controller ─────────────────────

    /**
     * Désactivé automatiquement en développement (classes compilées à la volée, pas un JAR
     * empaqueté — cf. RuntimePackaging), surchargeable explicitement via license.enabled.
     * Source unique de vérité : LicenseEnforcementFilter, LicenseStartupListener et
     * LicenseController (self-status, donc l'écran Angular) s'appuient tous sur getStatus()
     * ci-dessous, qui applique cette règle de façon cohérente partout.
     */
    public boolean isLicenseEnabled() {
        if (licenseEnabledOverride != null && !licenseEnabledOverride.isBlank()) {
            return Boolean.parseBoolean(licenseEnabledOverride);
        }
        return runtimePackaging.isRunningFromJar();
    }

    public LicenseStatus getStatus() {
        if (!isLicenseEnabled()) return LicenseStatus.ACTIVE;
        return cachedStatus.get();
    }

    /**
     * Appelée par /api/license/self-status : tant que la machine n'est pas dans un état "stable"
     * (NOT_ACTIVATED/PENDING/BLOQUÉ), revérifie immédiatement auprès du Hub plutôt que d'attendre
     * le prochain recheck planifié (jusqu'à 30 min) — les écrans Angular "en attente"/"bloqué"
     * pollent toutes les quelques secondes ; une approbation ou une réémission admin doit donc
     * apparaître quasi instantanément côté client, pas après une attente arbitraire ni un
     * redémarrage manuel. Ne fait rien une fois ACTIVE/EXPIRED_READONLY (déjà couvert par le
     * recheck périodique, inutile de solliciter le Hub à chaque appel dans ces cas stables).
     */
    public void refreshIfWaitingForActivation() {
        if (!isLicenseEnabled()) return;
        LicenseStatus current = cachedStatus.get();
        if (current == LicenseStatus.NOT_ACTIVATED
                || current == LicenseStatus.PENDING
                || current == LicenseStatus.BLOCKED_FINGERPRINT_MISMATCH
                || current == LicenseStatus.INVALID) {
            refreshFromHub();
        }
    }

    /** Demande d'activation initiale — appelée depuis l'écran "en attente" côté Angular.
     *  Cet endpoint est nécessairement accessible sans authentification (aucun utilisateur/JWT
     *  n'existe encore avant activation) — ce garde-fou évite qu'un appelant non authentifié
     *  spamme le Hub avec des coordonnées de contact arbitraires sur une instance déjà licenciée. */
    public void requestActivation(String contactEmail, String contactPhone) {
        if (getStatus() == LicenseStatus.ACTIVE) {
            return;
        }
        FingerprintService.Fingerprint fp = fingerprintService.compute();
        Map<String, Object> fingerprint = new HashMap<>();
        fingerprint.put("mac", fp.macHash());
        fingerprint.put("disk", fp.diskHash());
        fingerprint.put("board", fp.boardHash());

        Map<String, Object> body = new HashMap<>();
        body.put("spokeId", spokeId);
        body.put("spokeName", spokeName);
        body.put("contactEmail", contactEmail);
        body.put("contactPhone", contactPhone);
        body.put("fingerprint", fingerprint);
        body.put("buildId", buildIdentityService.getBuildId());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        try {
            restTemplate.postForEntity(hubConfigService.getHubUrl() + "/api/hub/license/request", new HttpEntity<>(body, headers), Map.class);
        } catch (org.springframework.web.client.RestClientResponseException e) {
            int code = e.getStatusCode().value();
            String hubMessage = extractMessage(e);
            if (code == 409) {
                // 409 = refus explicite du Hub : ce build précis est déjà lié à une autre machine.
                // Seul cas qui justifie réellement un blocage.
                applyResult(LicenseStatus.BLOCKED_FINGERPRINT_MISMATCH, hubMessage);
            } else {
                // Toute autre erreur n'est PAS une preuve de clonage : on reste en NOT_ACTIVATED
                // avec le vrai motif, pour que l'utilisateur sache quoi corriger.
                log.warn("Demande d'activation refusée par le Hub (HTTP {}) : {}", code, hubMessage);
                applyResult(LicenseStatus.NOT_ACTIVATED, code >= 500
                        ? "Le Hub a rencontré une erreur interne (HTTP " + code + "). Réessayez dans quelques minutes ; "
                          + "si le problème persiste, contactez le support avec ce code."
                        : hubMessage);
            }
            return;
        } catch (org.springframework.web.client.RestClientException e) {
            log.warn("Hub injoignable pour la demande d'activation ({}) : {}", hubConfigService.getHubUrl(), e.getMessage());
            applyResult(LicenseStatus.NOT_ACTIVATED,
                    "Impossible de joindre le Hub à l'adresse " + hubConfigService.getHubUrl() + ". "
                    + "Vérifiez la connexion internet de cette machine et l'adresse du Hub (Config > Agences distantes).");
            return;
        }

        cachedContactEmail = contactEmail;
        cachedContactPhone = contactPhone;
        cachedStatus.set(LicenseStatus.PENDING);
    }

    private String extractMessage(org.springframework.web.client.RestClientResponseException e) {
        try {
            @SuppressWarnings("unchecked")
            Map<String, Object> body = objectMapper.readValue(e.getResponseBodyAsString(), Map.class);
            Object msg = body.get("message");
            if (msg != null) return msg.toString();
        } catch (Exception ignored) {
            // corps non-JSON ou vide — on retombe sur le message générique ci-dessous
        }
        return "Le Hub a refusé la demande d'activation : " + e.getMessage();
    }

    /**
     * Interroge le Hub pour l'état autoritaire. Best-effort : timeout court, ne lève jamais
     * d'exception non gérée (appelé au démarrage et en tâche planifiée, ne doit jamais bloquer).
     * Une révocation/expiration renvoyée par le Hub prime toujours sur un fichier local en cache
     * encore signé-valide.
     */
    public void refreshFromHub() {
        String hubBaseUrl = hubConfigService.getHubUrl();
        if (hubBaseUrl == null || hubBaseUrl.isBlank() || spokeId == null || spokeId.isBlank()) {
            evaluateCurrentStatus();
            return;
        }
        LicenseClaims freshFromHub = null;
        try {
            // buildId + empreinte envoyés à chaque vérification : si cette machine (empreinte
            // reconnue) tourne maintenant sur un JAR plus récent qu'une mise à jour, le Hub garde
            // son buildId à jour — sinon cloner le tout dernier JAR déployé ne serait jamais détecté.
            FingerprintService.Fingerprint fp = fingerprintService.compute();
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(hubBaseUrl + "/api/hub/license/status")
                    .queryParam("spokeId", spokeId);
            if (buildIdentityService.getBuildId() != null) builder.queryParam("buildId", buildIdentityService.getBuildId());
            if (fp.macHash() != null) builder.queryParam("mac", fp.macHash());
            if (fp.diskHash() != null) builder.queryParam("disk", fp.diskHash());
            if (fp.boardHash() != null) builder.queryParam("board", fp.boardHash());
            String url = builder.toUriString();
            @SuppressWarnings("unchecked")
            Map<String, Object> resp = restTemplate.getForObject(url, Map.class);
            if (resp == null) { evaluateCurrentStatus(); return; }
            hubUnreachableMessage = null;

            String remoteStatus = (String) resp.get("status");
            String jwt = (String) resp.get("jwt");
            persistRemoteStatusCache(remoteStatus);

            if (jwt != null && !jwt.isBlank()) {
                // Vérifié en mémoire indépendamment de la persistance disque ci-dessous : un problème
                // de permissions/disque ne doit jamais empêcher d'honorer un JWT que le Hub vient de
                // confirmer valide (sinon un simple souci d'écriture provoquerait un blocage total
                // alors même que la licence est active côté Hub).
                try {
                    freshFromHub = parseAndVerify(jwt);
                } catch (LicenseInvalidException e) {
                    log.warn("JWT reçu du Hub invalide, ignoré : {}", e.getMessage());
                }
                persistLicenseFile(jwt);
            }
            if (resp.get("contactEmail") != null) cachedContactEmail = (String) resp.get("contactEmail");
            if (resp.get("contactPhone") != null) cachedContactPhone = (String) resp.get("contactPhone");
        } catch (Exception e) {
            log.warn("Hub injoignable pour la vérification de licence ({}) — repli sur l'état local.", e.getMessage());
            hubUnreachableMessage = "Impossible de joindre le Hub (" + hubBaseUrl + ") pour vérifier la licence. "
                    + "Vérifiez la connexion internet de cette machine et l'adresse du Hub (Config > Agences distantes).";
        }
        evaluateCurrentStatus(freshFromHub);
    }

    // ── Évaluation de l'état ─────────────────────────────────────────────────

    /** Recalcule l'état courant à partir du fichier local + du dernier statut connu du Hub, et le met en cache. */
    public LicenseStatus evaluateCurrentStatus() {
        return evaluateCurrentStatus(null);
    }

    /**
     * @param freshFromHub si non-null, claims déjà vérifiées provenant d'un appel refreshFromHub()
     *                     tout juste réussi — prime sur le fichier local (évite de dépendre de la
     *                     réussite de l'écriture disque pour honorer un JWT valide reçu à l'instant).
     */
    private LicenseStatus evaluateCurrentStatus(LicenseClaims freshFromHub) {
        String remoteStatus = readRemoteStatusCache();
        if ("REVOKED".equals(remoteStatus)) {
            // Une révocation prime toujours, même si le JWT en cache est encore signé-valide et non expiré :
            // le client était peut-être déjà en train d'utiliser l'appli — il passe en lecture seule,
            // ses données existantes restent consultables (pas de blocage total).
            cachedExpiresAt = null;
            applyResult(LicenseStatus.EXPIRED_READONLY, "Licence révoquée — consultation seule des données existantes.");
            return LicenseStatus.EXPIRED_READONLY;
        }

        Optional<LicenseClaims> parsed;
        if (freshFromHub != null) {
            parsed = Optional.of(freshFromHub);
        } else {
            try {
                parsed = loadAndVerifyLocalFile();
            } catch (LicenseInvalidException e) {
                log.warn("Fichier de licence invalide : {}", e.getMessage());
                applyResult(LicenseStatus.INVALID, "Le fichier de licence de cette machine est invalide (" + e.getMessage() + "). "
                        + "Supprimez-le puis redemandez l'activation, ou contactez le support.");
                return LicenseStatus.INVALID;
            }
        }

        if (parsed.isEmpty()) {
            // Une demande a déjà été soumise et attend l'approbation admin — ne pas retomber sur
            // NOT_ACTIVATED (qui réafficherait le formulaire de contact comme si rien n'avait été fait).
            if ("PENDING".equals(remoteStatus)) {
                applyResult(LicenseStatus.PENDING, null);
                return LicenseStatus.PENDING;
            }
            applyResult(LicenseStatus.NOT_ACTIVATED, hubUnreachableMessage);
            return LicenseStatus.NOT_ACTIVATED;
        }

        Claims claims = parsed.get().claims();
        cachedExpiresAt = claims.getExpiration() != null ? claims.getExpiration().toInstant().toString() : null;

        // Comparaison d'empreinte — le MAC est l'identifiant le plus volatil (carte réseau
        // virtuelle réattribuée, changement de carte physique...) : une dérive MAC seule est
        // tolérée. Le disque et la carte mère sont des identifiants forts qui ne dérivent
        // normalement jamais sur une même machine — un mismatch sur L'UN OU L'AUTRE (même seul)
        // n'est PAS toléré, sinon un clonage de VM qui régénère uniquement le MAC (le cas le plus
        // fréquent) passerait la vérification sans jamais être détecté.
        @SuppressWarnings("unchecked")
        Map<String, Object> fpClaim = claims.get("fp", Map.class);
        FingerprintService.Fingerprint current = fingerprintService.compute();
        FingerprintMismatch mismatchResult = compareFingerprint(fpClaim, current);

        boolean rejected = mismatchResult.diskMismatch || mismatchResult.boardMismatch
                || (mismatchResult.available < 3 && mismatchResult.mismatches > 0);

        if (rejected) {
            applyResult(LicenseStatus.BLOCKED_FINGERPRINT_MISMATCH,
                    "Cette licence a été émise pour une autre machine : " + describeMismatches(fpClaim, current)
                    + ". Si le matériel a réellement changé, contactez le support pour faire réémettre la licence.");
            return LicenseStatus.BLOCKED_FINGERPRINT_MISMATCH;
        }

        if ("EXPIRED".equals(remoteStatus)) {
            applyResult(LicenseStatus.EXPIRED_READONLY, "Licence expirée — consultation seule des données existantes.");
            return LicenseStatus.EXPIRED_READONLY;
        }

        if (claims.getExpiration() != null) {
            long overdueMs = System.currentTimeMillis() - claims.getExpiration().getTime();
            if (overdueMs > clockSkewToleranceMs) {
                applyResult(LicenseStatus.EXPIRED_READONLY, "Licence expirée — consultation seule des données existantes.");
                return LicenseStatus.EXPIRED_READONLY;
            }
        }

        applyResult(LicenseStatus.ACTIVE, null);
        return LicenseStatus.ACTIVE;
    }

    /** Noms lisibles des composants d'empreinte qui diffèrent de ceux enregistrés à l'émission. */
    private String describeMismatches(Map<String, Object> fpClaim, FingerprintService.Fingerprint current) {
        if (fpClaim == null) return "empreinte absente du fichier de licence";
        java.util.List<String> diff = new java.util.ArrayList<>();
        if (fpClaim.get("mac") != null && !fpClaim.get("mac").equals(current.macHash())) diff.add("carte réseau (MAC)");
        if (fpClaim.get("disk") != null && !fpClaim.get("disk").equals(current.diskHash())) diff.add("disque");
        if (fpClaim.get("board") != null && !fpClaim.get("board").equals(current.boardHash())) diff.add("carte mère");
        return diff.isEmpty() ? "empreinte différente" : "différence détectée sur : " + String.join(", ", diff);
    }

    private void applyResult(LicenseStatus status, String message) {
        cachedStatus.set(status);
        cachedMessage = message;
        if (cachedContactEmail == null || cachedContactEmail.isBlank()) cachedContactEmail = fallbackContactEmail;
        if (cachedContactPhone == null || cachedContactPhone.isBlank()) cachedContactPhone = fallbackContactPhone;
    }

    private static final class FingerprintMismatch {
        int available, mismatches;
        boolean diskMismatch, boardMismatch;
    }

    private FingerprintMismatch compareFingerprint(Map<String, Object> fpClaim, FingerprintService.Fingerprint current) {
        FingerprintMismatch r = new FingerprintMismatch();
        if (fpClaim == null) return r;

        String issuedMac   = (String) fpClaim.get("mac");
        String issuedDisk  = (String) fpClaim.get("disk");
        String issuedBoard = (String) fpClaim.get("board");

        if (issuedMac != null) {
            r.available++;
            if (!issuedMac.equals(current.macHash())) r.mismatches++;
        }
        if (issuedDisk != null) {
            r.available++;
            if (!issuedDisk.equals(current.diskHash())) { r.mismatches++; r.diskMismatch = true; }
        }
        if (issuedBoard != null) {
            r.available++;
            if (!issuedBoard.equals(current.boardHash())) { r.mismatches++; r.boardMismatch = true; }
        }
        return r;
    }

    // ── Lecture/vérification du fichier local ───────────────────────────────

    private Optional<LicenseClaims> loadAndVerifyLocalFile() {
        Path path = Path.of(licenseFilePath);
        if (!Files.exists(path)) return Optional.empty();

        String token;
        try {
            token = Files.readString(path, UTF_8).trim();
        } catch (Exception e) {
            throw new LicenseInvalidException("fichier illisible (" + e.getMessage() + ")");
        }
        if (token.isBlank()) return Optional.empty();

        return Optional.of(parseAndVerify(token));
    }

    /** Vérifie un JWT de licence (signature RS256 + émetteur), qu'il vienne du disque ou d'une
     *  réponse fraîche du Hub. Ne dépend d'aucune I/O disque. */
    private LicenseClaims parseAndVerify(String token) {
        String[] parts = token.split("\\.");
        if (parts.length != 3) {
            throw new LicenseInvalidException("format JWT invalide");
        }

        Map<String, Object> header;
        try {
            String headerJson = new String(Base64.getUrlDecoder().decode(parts[0]), UTF_8);
            @SuppressWarnings("unchecked")
            Map<String, Object> h = objectMapper.readValue(headerJson, Map.class);
            header = h;
        } catch (Exception e) {
            throw new LicenseInvalidException("en-tête JWT illisible");
        }

        // Rejet explicite de tout algorithme autre que RS256 AVANT toute tentative de vérification
        // (anti confusion d'algorithme — ne jamais laisser le token dicter comment il doit être vérifié).
        String alg = (String) header.get("alg");
        if (!"RS256".equals(alg)) {
            throw new LicenseInvalidException("algorithme non supporté (" + alg + ")");
        }
        String kid = (String) header.get("kid");
        PublicKey key = kid != null ? publicKeysByKid.get(kid) : null;
        if (key == null) {
            throw new LicenseInvalidException("clé de signature inconnue (kid=" + kid + ") : la clé publique du Hub est absente de cette machine, "
                    + "vérifiez que le Hub est joignable ou que ce JAR correspond à ce Hub");
        }

        try {
            Jws<Claims> jws = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            if (!"kira-hub".equals(jws.getBody().getIssuer())) {
                throw new LicenseInvalidException("émetteur inattendu");
            }
            return new LicenseClaims(jws.getBody());
        } catch (ExpiredJwtException e) {
            // Signature valide mais expirée : on veut quand même lire les claims (mode lecture seule),
            // pas les rejeter comme "invalides" — jjwt les fournit dans l'exception elle-même.
            return new LicenseClaims(e.getClaims());
        } catch (LicenseInvalidException e) {
            throw e;
        } catch (Exception e) {
            throw new LicenseInvalidException("signature invalide (" + e.getMessage() + ")");
        }
    }

    private void persistLicenseFile(String jwt) {
        try {
            Path target = Path.of(licenseFilePath);
            Files.createDirectories(target.getParent());
            Path tmp = target.resolveSibling(target.getFileName() + ".tmp");
            Files.writeString(tmp, jwt, UTF_8);
            Files.move(tmp, target, StandardCopyOption.ATOMIC_MOVE, StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            log.error("Impossible d'écrire le fichier de licence : {}", e.getMessage(), e);
        }
    }

    private Path remoteStatusCachePath() {
        Path target = Path.of(licenseFilePath);
        return target.resolveSibling(target.getFileName() + ".remote-status");
    }

    private void persistRemoteStatusCache(String status) {
        if (status == null) return;
        try {
            Path target = remoteStatusCachePath();
            Files.createDirectories(target.getParent());
            Path tmp = target.resolveSibling(target.getFileName() + ".tmp");
            Files.writeString(tmp, status, UTF_8);
            Files.move(tmp, target, StandardCopyOption.ATOMIC_MOVE, StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            log.warn("Impossible d'écrire le cache de statut distant : {}", e.getMessage());
        }
    }

    private String readRemoteStatusCache() {
        try {
            Path path = remoteStatusCachePath();
            if (!Files.exists(path)) return null;
            return Files.readString(path, UTF_8).trim();
        } catch (Exception e) {
            return null;
        }
    }

    private RestTemplate shortTimeoutRestTemplate() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(5000);
        factory.setReadTimeout(5000);
        return new RestTemplate(factory);
    }
}
