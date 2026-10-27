package com.erp.sync.service;

import com.erp.config.service.InterAgencyKeyService;
import com.erp.sync.entity.OutboxEvent;
import com.erp.sync.entity.OutboxStatus;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.repository.OutboxEventRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Confirmation par le Hub du traitement durable des événements envoyés (mode facultatif).
 *
 * SENT signifie seulement « accepté et routé par le broker » : un message perdu ou refusé ensuite
 * côté Hub restait SENT, puis était purgé sans jamais avoir été traité. Ce service demande
 * périodiquement au Hub, en HTTPS, le sort des événements SENT :
 *  - traité   -> CONFIRMED (seuls ceux-là sont ensuite purgés) ;
 *  - refusé   -> FAILED avec le code et le motif du Hub, sans reprise automatique (même contenu, même refus) ;
 *  - ignoré   -> FAILED (installation révoquée côté Hub), sans reprise automatique ;
 *  - déclaré inconnu depuis plus de {@code resend-after-minutes} -> PENDING, donc renvoyé (le Hub ignore
 *    les doublons grâce à son index unique (spokeId, outboxId)).
 * Les snapshots (FULL_SNAPSHOT) ne sont pas suivis par le Hub événement par événement : jamais
 * interrogés, ils restent SENT et sont purgés comme avant.
 *
 * Contrat (proposé au Hub, voir docs/sync-confirmation.md) :
 *   POST {sync.confirmation.url}   en-têtes X-Spoke-Id, X-Api-Key (clé transmise dans REGISTER)
 *   corps {"outboxIds":[...]}  ->  {"processed":[...], "rejected":[{"outboxId":..,"code":..,"reason":..}],
 *                                   "ignored":[...], "unknown":[...]}
 *
 * Désactivé tant que sync.confirmation.url est vide ; si le Hub répond 404 (contrat non pris en
 * charge), le service se met en veille jusqu'au prochain redémarrage : le fonctionnement redevient
 * exactement celui d'avant (SENT purgés après rétention).
 */
@Service
@Slf4j
public class HubConfirmationService {

    private static final String UNCONFIGURED_SPOKE_ID = "CHANGEME";
    /** Types que le Hub ne confirme pas (pas de HubEvent par outboxId). */
    public static final Set<SyncEventType> NOT_CONFIRMED_TYPES = EnumSet.of(SyncEventType.FULL_SNAPSHOT);

    private final OutboxEventRepository outboxRepo;
    private final InterAgencyKeyService interAgencyKeyService;
    private final RestTemplate http;

    @Value("${sync.confirmation.url:}")                    private String confirmationUrl;
    @Value("${sync.confirmation.batch-size:500}")          private int batchSize;
    @Value("${sync.confirmation.resend-after-minutes:30}") private long resendAfterMinutes;
    @Value("${sync.spoke.id:}")                            private String spokeId;

    private volatile boolean unsupportedByHub;

    public HubConfirmationService(OutboxEventRepository outboxRepo, InterAgencyKeyService interAgencyKeyService) {
        this.outboxRepo = outboxRepo;
        this.interAgencyKeyService = interAgencyKeyService;
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(5_000);
        factory.setReadTimeout(15_000);
        this.http = new RestTemplate(factory);
    }

    /** true si les événements ne sont tenus pour livrés qu'une fois confirmés par le Hub. */
    public boolean isActive() {
        return confirmationUrl != null && !confirmationUrl.isBlank() && !unsupportedByHub;
    }

    @Scheduled(fixedDelayString = "${sync.confirmation.interval-ms:120000}", initialDelayString = "${sync.confirmation.initial-delay-ms:60000}")
    public void confirm() {
        if (!isActive() || spokeId == null || spokeId.isBlank() || UNCONFIGURED_SPOKE_ID.equalsIgnoreCase(spokeId.trim())) return;

        // Laisser au Hub le temps de consommer ce qui vient d'être envoyé.
        List<OutboxEvent> awaiting = outboxRepo.findByStatusAndEventTypeNotInAndLastAttemptAtBeforeOrderByIdAsc(
                OutboxStatus.SENT, NOT_CONFIRMED_TYPES, LocalDateTime.now().minusMinutes(1), PageRequest.of(0, batchSize));
        if (awaiting.isEmpty()) return;

        ConfirmationResponse response;
        try {
            response = requestConfirmations(awaiting.stream().map(OutboxEvent::getId).toList());
        } catch (HttpClientErrorException e) {
            if (e.getStatusCode() == HttpStatus.NOT_FOUND) {
                unsupportedByHub = true;
                log.info("Le Hub ne gère pas la confirmation des événements ({}) : fonctionnement sans confirmation.", confirmationUrl);
            } else {
                log.warn("Confirmation des événements refusée par le Hub ({}) : {}", e.getStatusCode(), e.getMessage());
            }
            return;
        } catch (RestClientException e) {
            // Hub injoignable, délai dépassé, réponse perdue : aucun changement, nouvel essai au prochain cycle.
            log.warn("Confirmation des événements impossible (Hub injoignable) : {}", e.getMessage());
            return;
        }
        apply(awaiting, response, LocalDateTime.now());
    }

    /** Applique la réponse du Hub aux événements interrogés (idempotent ; identifiants inattendus ignorés). */
    void apply(List<OutboxEvent> awaiting, ConfirmationResponse response, LocalDateTime now) {
        Set<Long> processed = response.processed() == null ? Set.of() : new HashSet<>(response.processed());
        Set<Long> unknown = response.unknown() == null ? Set.of() : new HashSet<>(response.unknown());
        Set<Long> ignored = response.ignored() == null ? Set.of() : new HashSet<>(response.ignored());
        Map<Long, Rejected> rejected = new HashMap<>();
        if (response.rejected() != null) {
            response.rejected().forEach(r -> rejected.putIfAbsent(r.outboxId(), r));
        }
        LocalDateTime resendBefore = now.minusMinutes(resendAfterMinutes);
        int confirmed = 0, failed = 0, resent = 0;

        for (OutboxEvent event : awaiting) {
            Long id = event.getId();
            if (processed.contains(id)) {
                event.setStatus(OutboxStatus.CONFIRMED);
                event.setErrorMessage(null);
                confirmed++;
            } else if (rejected.containsKey(id)) {
                event.setStatus(OutboxStatus.FAILED);
                Rejected r = rejected.get(id);
                event.setErrorMessage("Refusé par le Hub" + (r.code() != null ? " [" + r.code() + "]" : "") + " : " + r.reason());
                event.setAutoRequeueCount(SyncDispatcherScheduler.MAX_AUTO_REQUEUES);
                failed++;
            } else if (ignored.contains(id)) {
                event.setStatus(OutboxStatus.FAILED);
                event.setErrorMessage("Ignoré par le Hub : installation révoquée");
                event.setAutoRequeueCount(SyncDispatcherScheduler.MAX_AUTO_REQUEUES);
                failed++;
            } else if (unknown.contains(id) && event.getLastAttemptAt() != null
                    && event.getLastAttemptAt().isBefore(resendBefore)) {
                // Déclaré inconnu par le Hub longtemps après l'envoi : perdu en route, on le renvoie.
                // Un événement absent de la réponse n'est jamais renvoyé (réponse partielle du Hub).
                event.setStatus(OutboxStatus.PENDING);
                event.setErrorMessage("Non reçu par le Hub, renvoi");
                resent++;
            }
        }
        outboxRepo.saveAll(awaiting);
        if (confirmed + failed + resent > 0) {
            log.info("Sync: confirmation du Hub — {} confirmé(s), {} refusé(s), {} à renvoyer", confirmed, failed, resent);
        }
        if (failed > 0) log.warn("Sync: {} événement(s) refusé(s) par le Hub (voir l'écran de synchronisation)", failed);
    }

    private ConfirmationResponse requestConfirmations(List<Long> outboxIds) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-Spoke-Id", spokeId);
        headers.set("X-Api-Key", interAgencyKeyService.getOrCreateKey());
        ConfirmationResponse body = http.postForObject(confirmationUrl,
                new HttpEntity<>(Map.of("outboxIds", outboxIds), headers), ConfirmationResponse.class);
        return body != null ? body : new ConfirmationResponse(List.of(), List.of(), List.of(), List.of());
    }

    /** code : IDENTITY, INVALID_PAYLOAD, VERSION, UNKNOWN_SPOKE (motifs normalisés du Hub), facultatif. */
    record Rejected(Long outboxId, String code, String reason) {}

    record ConfirmationResponse(List<Long> processed, List<Rejected> rejected, List<Long> ignored, List<Long> unknown) {}
}
