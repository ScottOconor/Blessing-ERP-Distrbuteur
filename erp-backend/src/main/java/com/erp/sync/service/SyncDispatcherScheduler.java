package com.erp.sync.service;

import com.erp.config.service.InterAgencyKeyService;
import com.erp.sync.RabbitMQConfig;
import com.erp.sync.entity.OutboxEvent;
import com.erp.sync.entity.OutboxStatus;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.repository.OutboxEventRepository;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.AmqpException;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.amqp.support.postprocessor.GZipPostProcessor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.net.Inet4Address;
import java.net.NetworkInterface;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

@Component
@RequiredArgsConstructor
@Slf4j
public class SyncDispatcherScheduler {

    private static final int BATCH_SIZE  = 100;
    private static final int MAX_RETRIES = 5;
    /** Au-delà de ce nombre de reprises AUTOMATIQUES (soit ~50h à raison d'une reprise/5min ×
     *  MAX_RETRIES tentatives par cycle), un événement FAILED est considéré définitivement
     *  empoisonné et n'est plus remis en PENDING tout seul — il reste visible en FAILED pour
     *  une reprise manuelle explicite plutôt que de boucler indéfiniment. */
    private static final int MAX_AUTO_REQUEUES = 20;

    private final OutboxEventRepository  outboxRepo;
    private final RabbitTemplate         rabbitTemplate;
    private final InterAgencyKeyService  interAgencyKeyService;

    @Value("${sync.spoke.id:SPOKE_001}")          private String spokeId;
    @Value("${sync.spoke.name:Blessing ERP Distributeurs}") private String spokeName;
    @Value("${server.port:8085}")                 private int    serverPort;
    @Value("${sync.spoke.public-url:}")           private String configuredPublicUrl;
    @Value("${sync.outbox.sent-retention-days:7}") private int    sentRetentionDays;
    @Value("${sync.broker.max-message-bytes:16777216}") private int brokerMaxMessageBytes;

    private String spokeApiUrl;

    /** Type d'ERP, figé dans le code : le hub refuse de rattacher ce spoke à une entreprise d'un autre type. */
    public static final String SPOKE_CATEGORY = "DISTRIBUTEUR";

    /** Valeur livrée par défaut dans application.properties, à remplacer à l'installation. */
    private static final String UNCONFIGURED_SPOKE_ID = "CHANGEME";

    @Value("${spring.rabbitmq.username:}") private String rabbitUser;
    private volatile long lastIdentityWarning;

    /**
     * Identifiant d'installation absent ou laissé à CHANGEME : rien n'est envoyé au Hub (les
     * événements restent en attente, rien n'est perdu). Sinon, plusieurs installations mal
     * configurées publieraient sous le même identifiant et leurs données seraient mélangées au Hub.
     */
    private boolean spokeIdConfigured() {
        if (spokeId != null && !spokeId.isBlank() && !UNCONFIGURED_SPOKE_ID.equalsIgnoreCase(spokeId.trim())) return true;
        long now = System.currentTimeMillis();
        if (now - lastIdentityWarning > 3_600_000L) {
            lastIdentityWarning = now;
            log.error("Synchronisation Hub suspendue : sync.spoke.id n'est pas renseigné (valeur « {} »). "
                    + "Renseignez l'identifiant de l'installation (voir config/application.properties.example).", spokeId);
        }
        return false;
    }

    /** Délai d'attente de la confirmation du broker pour chaque événement envoyé. */
    private static final long CONFIRM_TIMEOUT_SECONDS = 10;

    @PostConstruct
    void detectSpokeApiUrl() {
        // Niveau 1 : URL configurée explicitement dans application.properties
        if (configuredPublicUrl != null && !configuredPublicUrl.isBlank()) {
            spokeApiUrl = configuredPublicUrl.trim();
            log.info("Spoke API URL (config explicite) : {}", spokeApiUrl);
            return;
        }

        // Niveau 2 : IP publique via service externe (fonctionne si le spoke a accès internet)
        String publicIp = fetchPublicIp();
        if (publicIp != null) {
            spokeApiUrl = "http://" + publicIp + ":" + serverPort;
            log.info("Spoke API URL (IP publique auto-détectée) : {}", spokeApiUrl);
            return;
        }

        // Niveau 3 : IP locale (dernier recours — ne fonctionnera que sur le même réseau)
        String[] VIRTUAL_PREFIXES = {"docker", "br-", "veth", "virbr", "tun", "tap"};
        try {
            String localIp = Collections.list(NetworkInterface.getNetworkInterfaces()).stream()
                .filter(ni -> {
                    try {
                        if (!ni.isUp() || ni.isLoopback()) return false;
                        String name = ni.getName().toLowerCase();
                        for (String p : VIRTUAL_PREFIXES) { if (name.startsWith(p)) return false; }
                        return true;
                    } catch (Exception e) { return false; }
                })
                .flatMap(ni -> Collections.list(ni.getInetAddresses()).stream())
                .filter(addr -> addr instanceof Inet4Address)
                .filter(addr -> {
                    byte[] b = addr.getAddress();
                    if ((b[0] & 0xFF) == 172 && (b[1] & 0xFF) >= 16 && (b[1] & 0xFF) <= 31) return false;
                    if ((b[0] & 0xFF) == 169 && (b[1] & 0xFF) == 254) return false;
                    return true;
                })
                .map(addr -> addr.getHostAddress())
                .findFirst().orElse(null);

            spokeApiUrl = localIp != null ? "http://" + localIp + ":" + serverPort : null;
        } catch (Exception e) {
            spokeApiUrl = null;
        }

        if (spokeApiUrl != null) {
            log.warn("Spoke API URL (IP locale — inaccessible depuis le cloud) : {}. "
                    + "Configurer sync.spoke.public-url dans application.properties.", spokeApiUrl);
        } else {
            log.warn("Spoke API URL non détectée. Configurer sync.spoke.public-url dans application.properties.");
        }
    }

    /**
     * Supprime une contrainte CHECK héritée sur sync_outbox_events.event_type qui rejette tout
     * {@link SyncEventType} ajouté après la création de cette contrainte (ex : RISTOURNE_PAIEMENT_POSTED),
     * en échec silencieux côté appelant (l'insertion outbox échoue, l'action métier elle-même peut
     * sembler ne rien faire). Cf. {@link OutboxEventRepository#dropStaleEventTypeCheckConstraint()}.
     */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void dropStaleEventTypeCheckConstraint() {
        try {
            outboxRepo.dropStaleEventTypeCheckConstraint();
        } catch (Exception e) {
            log.warn("Impossible de supprimer la contrainte sync_outbox_events_event_type_check : {}", e.getMessage());
        }
    }

    /** Interroge plusieurs services publics pour obtenir l'IP WAN du spoke. */
    private String fetchPublicIp() {
        String[] services = {
            "https://api.ipify.org",
            "https://checkip.amazonaws.com",
            "https://ifconfig.me/ip"
        };
        for (String url : services) {
            try {
                java.net.URL u = new java.net.URL(url);
                java.net.HttpURLConnection conn = (java.net.HttpURLConnection) u.openConnection();
                conn.setConnectTimeout(3000);
                conn.setReadTimeout(3000);
                conn.setRequestProperty("User-Agent", "BlessingERP-Spoke/1.0");
                try (java.io.BufferedReader br = new java.io.BufferedReader(
                        new java.io.InputStreamReader(conn.getInputStream()))) {
                    String ip = br.readLine();
                    if (ip != null) ip = ip.trim();
                    if (ip != null && ip.matches("\\d{1,3}(\\.\\d{1,3}){3}")) {
                        return ip;
                    }
                }
            } catch (Exception ignored) {}
        }
        return null;
    }

    /**
     * Envoie une seule fois au démarrage l'identité complète du spoke (id, nom, URL, clé
     * inter-agences) au Hub. Le Hub n'utilise ces valeurs que pour un premier enregistrement —
     * une URL/clé déjà configurée (auto-détectée ou saisie par l'admin) n'est jamais écrasée.
     * Heartbeat et événements métier redeviennent légers et ne renvoient plus ces champs.
     */
    @EventListener(ApplicationReadyEvent.class)
    public void sendRegistration() {
        if (!spokeIdConfigured()) return;
        if (!spokeId.equals(rabbitUser)) {
            log.warn("Identité de l'installation non prouvée auprès du Hub : le compte RabbitMQ « {} » ne porte "
                    + "pas l'identifiant de l'installation « {} ». Créez un compte RabbitMQ nommé « {} » pour que "
                    + "le Hub puisse vérifier l'origine des messages (indispensable s'il passe en mode strict).",
                    rabbitUser, spokeId, spokeId);
        }
        try {
            SyncMessage reg = new SyncMessage();
            reg.setSpokeId(spokeId);
            reg.setSpokeName(spokeName);
            reg.setSpokeApiUrl(spokeApiUrl);
            reg.setSpokeApiKey(interAgencyKeyService.getOrCreateKey());
            reg.setSpokeCategory(SPOKE_CATEGORY);
            reg.setEventType("REGISTER");
            reg.setEventModule("SYSTEM");
            reg.setEventLabel("Enregistrement du spoke");
            reg.setEntityId(spokeId);
            reg.setOccurredAt(LocalDateTime.now());
            rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE, "erp.sync.register", reg);
            log.info("Enregistrement envoyé au Hub : spoke={}", spokeId);
        } catch (Exception e) {
            log.warn("Enregistrement échoué (Hub inaccessible) : {}", e.getMessage());
        }
    }

    @Scheduled(fixedRate = 30_000, initialDelay = 10_000)
    public void sendHeartbeat() {
        if (!spokeIdConfigured()) return;
        try {
            SyncMessage hb = new SyncMessage();
            hb.setOutboxId(null);
            hb.setSpokeId(spokeId);
            hb.setSpokeCategory(SPOKE_CATEGORY);
            hb.setEventType("HEARTBEAT");
            hb.setEventModule("SYSTEM");
            hb.setEventLabel("Heartbeat");
            hb.setEntityId(spokeId);
            hb.setOccurredAt(LocalDateTime.now());
            rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE, "erp.sync.heartbeat", hb);
            log.trace("Heartbeat envoyé au Hub : spoke={}", spokeId);
        } catch (Exception e) {
            log.debug("Heartbeat échoué (Hub inaccessible) : {}", e.getMessage());
        }
    }

    /**
     * Pas de @Transactional englobant toute la boucle : avant ce correctif, une seule transaction
     * (donc une seule connexion DB retenue) couvrait les BATCH_SIZE appels RabbitMQ. Un broker
     * injoignable (DNS/VPN/pare-feu en panne) faisait alors pendre la méthode entière jusqu'à
     * BATCH_SIZE × 60s (timeout de connexion RabbitMQ par défaut), affamant le pool de connexions
     * DB (HikariCP) et bloquant des requêtes HTTP sans aucun rapport (ex : confirmation d'un bon
     * de commande, qui ne publie pourtant aucun événement). Chaque événement est maintenant
     * persisté individuellement juste après sa tentative d'envoi — la connexion DB n'est retenue
     * que le temps du save(), pas pendant l'appel RabbitMQ suivant.
     */
    @Scheduled(fixedDelayString = "${sync.dispatch.interval-ms:30000}")
    public void dispatch() {
        if (!spokeIdConfigured()) return;
        // Ids seuls puis chargement un par un : un lot de BATCH_SIZE entités complètes (parties de
        // FULL_SNAPSHOT jusqu'à 8 Mo chacune) suffisait à épuiser le heap (incident du 2026-10-13).
        List<Long> pending = outboxRepo.findIdsByStatus(
                OutboxStatus.PENDING, PageRequest.of(0, BATCH_SIZE));

        if (pending.isEmpty()) return;

        log.debug("Sync: {} événement(s) PENDING à envoyer au Hub", pending.size());

        lastBatchSize = pending.size();
        int sent = 0;
        List<InFlight> inFlight = new java.util.ArrayList<>();

        for (Long eventId : pending) {
            OutboxEvent event = outboxRepo.findById(eventId).orElse(null);
            if (event == null || event.getStatus() != OutboxStatus.PENDING) continue;
            try {
                SyncMessage msg = buildMessage(event);
                String routingKey = "erp.sync." + event.getEventType().name().toLowerCase();
                // Mesure de la taille APRES compression (GZIP) pour éviter d'envoyer un payload
                // que le broker rejettera avec PRECONDITION_FAILED (message too large).
                try {
                    MessageConverter mc = rabbitTemplate.getMessageConverter();
                    MessageProperties props = new MessageProperties();
                    Message raw = mc.toMessage(msg, props);
                    Message gz = new GZipPostProcessor().postProcessMessage(raw);
                    if (gz.getBody() != null && gz.getBody().length > brokerMaxMessageBytes) {
                        // trop gros : marque en FAILED définitif sans retries automatiques
                        event.setStatus(OutboxStatus.FAILED);
                        event.setAutoRequeueCount(MAX_AUTO_REQUEUES);
                        event.setErrorMessage("Payload too large (" + gz.getBody().length + " bytes)");
                        outboxRepo.save(event);
                        log.error("Événement {} id={} FAILED : payload compressé trop volumineux ({} bytes)",
                                event.getEventType(), event.getEntityId(), gz.getBody().length);
                        continue;
                    }
                } catch (Exception ex) {
                    // En cas d'erreur de (dé)sérialisation locale, ne bloquer pas tout : laisser le
                    // processus d'envoi tenter : la confirmation du broker (awaitDelivery) tranchera.
                    log.debug("Impossible de mesurer la taille du message avant envoi : {}", ex.getMessage());
                }
                CorrelationData correlation = new CorrelationData(String.valueOf(event.getId()));
                rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE, routingKey, msg, correlation);
                // Seul l'identifiant est conservé en attendant la confirmation : garder les entités
                // (parties de FULL_SNAPSHOT jusqu'à 8 Mo) épuiserait le heap (incident du 2026-10-13).
                inFlight.add(new InFlight(event.getId(), correlation));
            } catch (AmqpException e) {
                recordFailure(event, e.getMessage());
                outboxRepo.save(event);
            }
        }

        // Statut fixé APRÈS la réponse du broker, jamais avant : l'événement était auparavant
        // marqué SENT dès l'écriture sur le socket, et le rejet asynchrone pouvait arriver avant
        // cet enregistrement (puis être écrasé par lui) ; un message non routable était en outre
        // confirmé (ack) par le broker et restait SENT sans avoir été livré (constaté).
        for (InFlight f : inFlight) {
            String failure = awaitDelivery(f.correlation());
            OutboxEvent event = outboxRepo.findById(f.eventId()).orElse(null);
            if (event == null) continue;
            if (failure == null) {
                event.setStatus(OutboxStatus.SENT);
                event.setLastAttemptAt(LocalDateTime.now());
                event.setErrorMessage(null);
                sent++;
            } else {
                recordFailure(event, failure);
            }
            outboxRepo.save(event);
        }
        lastBatchSent  = sent;
        lastDispatchAt = LocalDateTime.now();
        log.debug("Sync: {}/{} événements envoyés", sent, pending.size());
    }

    private record InFlight(Long eventId, CorrelationData correlation) {}

    /** null si le broker a accepté ET routé le message, sinon la raison de l'échec. */
    private String awaitDelivery(CorrelationData correlation) {
        try {
            CorrelationData.Confirm confirm = correlation.getFuture().get(CONFIRM_TIMEOUT_SECONDS, TimeUnit.SECONDS);
            if (correlation.getReturned() != null) {
                return "Message non routable (retour broker, code " + correlation.getReturned().getReplyCode()
                        + " " + correlation.getReturned().getReplyText() + ")";
            }
            return confirm.isAck() ? null : "Rejeté par le broker : " + confirm.getReason();
        } catch (TimeoutException e) {
            return "Pas de confirmation du broker sous " + CONFIRM_TIMEOUT_SECONDS + " s";
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return "Attente de confirmation interrompue";
        } catch (ExecutionException e) {
            return "Confirmation du broker en échec : " + e.getCause().getMessage();
        }
    }

    /** Échec d'envoi : l'événement reste PENDING pour le prochain cycle, FAILED après MAX_RETRIES. */
    private void recordFailure(OutboxEvent event, String reason) {
        event.setRetryCount(event.getRetryCount() + 1);
        event.setLastAttemptAt(LocalDateTime.now());
        event.setErrorMessage(reason);
        if (isMessageTooLarge(new RuntimeException(reason))) {
            // Rejet définitif du broker (message au-delà de sa taille max, 406 PRECONDITION_FAILED) :
            // aucune nouvelle tentative ne passera avec le même contenu (cf. incident du 2026-09-14).
            // Figé en FAILED hors reprise automatique ; seule une reprise manuelle le relance.
            event.setStatus(OutboxStatus.FAILED);
            event.setAutoRequeueCount(MAX_AUTO_REQUEUES);
            log.error("Événement {} id={} FAILED définitivement : message trop volumineux pour le broker ({})",
                    event.getEventType(), event.getEntityId(), reason);
            return;
        }
        event.setStatus(event.getRetryCount() >= MAX_RETRIES ? OutboxStatus.FAILED : OutboxStatus.PENDING);
        log.warn("Événement {} id={} non livré ({}/{}) : {}", event.getEventType(), event.getEntityId(),
                event.getRetryCount(), MAX_RETRIES, reason);
    }

    @Transactional
    public int requeueFailed() {
        return outboxRepo.requeueAllFailed();
    }

    /** Supprime définitivement les événements FAILED — à utiliser seulement quand ces opérations
     *  ne doivent plus jamais remonter au Hub (ex : après une longue coupure réseau où l'on
     *  préfère repartir propre plutôt qu'écouler un backlog). Contrairement à requeueFailed(), ceci
     *  perd les données concernées : ne pas confondre les deux boutons côté UI. */
    @Transactional
    public int clearFailed() {
        return outboxRepo.deleteByStatus(OutboxStatus.FAILED);
    }

    /**
     * Jusqu'ici, un événement FAILED (5 échecs de publish RabbitMQ) restait bloqué
     * indéfiniment — seul un appel manuel à /api/sync/retry le débloquait. En cas de coupure
     * réseau transitoire entre le spoke et le broker, les données ne remontaient donc plus
     * jamais vers le Hub sans intervention. Cette reprise périodique referme la boucle.
     */
    @Scheduled(fixedDelayString = "${sync.dispatch.retry-failed-interval-ms:300000}")
    @Transactional
    public void autoRequeueFailed() {
        // UPDATE/COUNT en masse : charger les entités FAILED (payloads de FULL_SNAPSHOT compris)
        // provoquait un OutOfMemoryError toutes les 5 min pendant une coupure broker (2026-10-13).
        long poisoned = outboxRepo.countByStatusAndAutoRequeueCountGreaterThanEqual(
                OutboxStatus.FAILED, MAX_AUTO_REQUEUES);
        if (poisoned > 0) {
            log.warn("Sync: {} événement(s) FAILED laissé(s) tel quel (>{} reprises automatiques déjà tentées) — reprise manuelle requise",
                    poisoned, MAX_AUTO_REQUEUES);
        }
        int requeued = outboxRepo.requeueFailedBelow(MAX_AUTO_REQUEUES);
        if (requeued > 0) log.info("Sync: {} événement(s) FAILED remis en PENDING automatiquement", requeued);
    }

    /**
     * Purge quotidienne des événements SENT vieux de plus de {@code sync.outbox.sent-retention-days}
     * (7 par défaut) — une fois envoyés, ils n'ont plus aucune utilité opérationnelle (le Hub a déjà
     * sa propre copie) et les laisser s'accumuler indéfiniment ne fait que grossir la table
     * sync_outbox_events sans raison (bloat Postgres, autovacuum, requêtes plus lentes). PENDING et
     * FAILED ne sont jamais purgés — seuls les événements déjà transmis avec succès le sont.
     */
    @Scheduled(fixedDelayString = "${sync.outbox.sent-purge-interval-ms:86400000}",
               initialDelayString = "${sync.outbox.sent-purge-initial-delay-ms:120000}")
    @Transactional
    public void purgeOldSentEvents() {
        int retentionDays = sentRetentionDays;
        LocalDateTime cutoff = LocalDateTime.now().minusDays(retentionDays);
        int n = outboxRepo.deleteByStatusAndCreatedAtBefore(OutboxStatus.SENT, cutoff);
        if (n > 0) log.info("Sync: {} événement(s) SENT de plus de {} jour(s) purgé(s)", n, retentionDays);
    }

    /** Détecte un rejet broker "message trop gros" (406 PRECONDITION_FAILED, taille > max size
     *  configurée) — une erreur définitive à ne jamais confondre avec un simple aléa réseau
     *  transitoire (broker injoignable, timeout...), seul cas pour lequel réessayer a du sens. */
    private boolean isMessageTooLarge(Throwable e) {
        for (Throwable t = e; t != null; t = t.getCause()) {
            String msg = t.getMessage();
            if (msg != null && msg.contains("PRECONDITION_FAILED") && msg.contains("message size")) {
                return true;
            }
        }
        return false;
    }

    private SyncMessage buildMessage(OutboxEvent event) {
        SyncMessage msg = new SyncMessage();
        msg.setOutboxId(event.getId());
        msg.setSpokeId(spokeId);
        msg.setSpokeCategory(SPOKE_CATEGORY);
        msg.setEventType(event.getEventType().name());
        msg.setEventModule(resolveModule(event.getEventType()));
        msg.setEventLabel(resolveLabel(event.getEventType()));
        msg.setEntityId(event.getEntityId());
        msg.setPayload(event.getPayload());
        msg.setOccurredAt(event.getCreatedAt());
        return msg;
    }

    private String resolveModule(SyncEventType t) {
        return switch (t) {
            case SALE_INVOICE_POSTED, SALE_INVOICE_CANCELLED,
                 SALE_PAYMENT_CREATED, SALE_PAYMENT_REVERSED,
                 ACCOUNT_MOVE_RISTOURNE,
                 ELEADER_IMPORT_DONE, ENLEVEMENT_SAVED           -> "VENTES";

            case PURCHASE_INVOICE_POSTED, PURCHASE_INVOICE_CANCELLED,
                 PURCHASE_PAYMENT_CREATED, PURCHASE_PAYMENT_REVERSED,
                 PURCHASE_ORDER_RECEIVED                          -> "ACHATS";

            case ACCOUNT_MOVE_POSTED, ACCOUNT_MOVE_CANCELLED, ACCOUNT_MOVE_REVERSED,
                 ACCOUNT_MOVE_FROM_SALE, ACCOUNT_MOVE_FROM_SALE_PAYMENT,
                 ACCOUNT_MOVE_FROM_PURCHASE, ACCOUNT_MOVE_FROM_PURCHASE_PAYMENT,
                 ACCOUNT_MOVE_STOCK_VALUATION                     -> "COMPTABILITE";

            case STOCK_MOVE_DONE,
                 STOCK_PICKING_FROM_SALE, STOCK_PICKING_FROM_PURCHASE,
                 STOCK_PICKING_VALIDATED, STOCK_BORDEREAU_VALIDATED,
                 STOCK_LOSS_CREATED                                -> "STOCK";

            case CAISSE_OPERATION_ENTREE, CAISSE_OPERATION_SORTIE,
                 CAISSE_CLOTURE                                   -> "CAISSES";

            case FULL_SNAPSHOT                                    -> "SYNC";

            case RISTOURNE_PAIEMENT_POSTED, RISTOURNE_PAIEMENT_CANCELLED,
                 SALE_ORDER_CONFIRMED                             -> "VENTES";

            case REMISE_PAIEMENT_POSTED, REMISE_PAIEMENT_CANCELLED -> "ACHATS";

            case PARTNER_UPSERT, PRODUCT_UPSERT, ACCOUNT_UPSERT -> "SYNC";
        };
    }

    private String resolveLabel(SyncEventType t) {
        return switch (t) {
            case SALE_INVOICE_POSTED                -> "Facture vente validée";
            case SALE_INVOICE_CANCELLED             -> "Facture vente annulée";
            case SALE_PAYMENT_CREATED               -> "Paiement client créé";
            case SALE_PAYMENT_REVERSED              -> "Paiement client inversé";
            case ACCOUNT_MOVE_FROM_SALE             -> "Écriture — facturation vente";
            case ACCOUNT_MOVE_FROM_SALE_PAYMENT     -> "Écriture — paiement client";
            case ACCOUNT_MOVE_RISTOURNE             -> "Écriture — ristourne";
            case STOCK_PICKING_FROM_SALE            -> "Bon de livraison — vente";
            case PURCHASE_INVOICE_POSTED            -> "Facture achat validée";
            case PURCHASE_INVOICE_CANCELLED         -> "Facture achat annulée";
            case PURCHASE_PAYMENT_CREATED           -> "Paiement fournisseur créé";
            case PURCHASE_PAYMENT_REVERSED          -> "Paiement fournisseur inversé";
            case ACCOUNT_MOVE_FROM_PURCHASE         -> "Écriture — facturation achat";
            case ACCOUNT_MOVE_FROM_PURCHASE_PAYMENT -> "Écriture — paiement fournisseur";
            case STOCK_PICKING_FROM_PURCHASE        -> "Bon de réception — achat";
            case ACCOUNT_MOVE_POSTED                -> "Écriture validée (comptabilité)";
            case ACCOUNT_MOVE_CANCELLED             -> "Écriture annulée";
            case ACCOUNT_MOVE_REVERSED              -> "Écriture extournée";
            case STOCK_MOVE_DONE                    -> "Mouvement de stock";
            case ACCOUNT_MOVE_STOCK_VALUATION       -> "Variation de stock (6031/311)";
            case STOCK_PICKING_VALIDATED            -> "Transfert de stock validé";
            case STOCK_BORDEREAU_VALIDATED          -> "Bordereau de réception validé";
            case STOCK_LOSS_CREATED                 -> "Trous & casses — sortie de stock";
            case PURCHASE_ORDER_RECEIVED            -> "Bon de commande réceptionné";
            case ENLEVEMENT_SAVED                   -> "Enlèvement enregistré";
            case ELEADER_IMPORT_DONE                -> "Import eLeader réussi";
            case CAISSE_OPERATION_ENTREE            -> "Entrée de caisse";
            case CAISSE_OPERATION_SORTIE            -> "Sortie de caisse";
            case CAISSE_CLOTURE                     -> "Clôture journalière de caisse";
            case FULL_SNAPSHOT                      -> "Snapshot complet";
            case SALE_ORDER_CONFIRMED               -> "Commande client confirmée";
            case RISTOURNE_PAIEMENT_POSTED          -> "Paiement ristourne validé";
            case RISTOURNE_PAIEMENT_CANCELLED       -> "Paiement ristourne annulé";
            case REMISE_PAIEMENT_POSTED             -> "Paiement remise validé";
            case REMISE_PAIEMENT_CANCELLED          -> "Paiement remise annulé";
            case PARTNER_UPSERT                     -> "Tiers mis à jour";
            case PRODUCT_UPSERT                     -> "Article mis à jour";
            case ACCOUNT_UPSERT                     -> "Compte comptable mis à jour";
        };
    }

    // ── Exposition pour le monitoring ──────────────────────────────────────

    private volatile LocalDateTime lastDispatchAt;
    private volatile int lastBatchSize  = 0;
    private volatile int lastBatchSent  = 0;

    public LocalDateTime getLastDispatchAt() { return lastDispatchAt; }
    public int getLastBatchSize()           { return lastBatchSize; }
    public int getLastBatchSent()           { return lastBatchSent; }

    @Getter @Setter
    public static class SyncMessage {
        Long   outboxId;
        String spokeId;
        String spokeName;
        String spokeApiUrl;
        String spokeApiKey;
        String spokeCategory;   // DISTRIBUTEUR | COMMERCANT
        String eventType;
        String eventModule;
        String eventLabel;
        String entityId;
        String payload;
        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        LocalDateTime occurredAt;
    }
}
