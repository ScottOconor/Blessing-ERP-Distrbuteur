package com.erp.sync.controller;

import com.erp.sync.dto.OutboxEventDTO;
import com.erp.sync.dto.SyncSummaryDTO;
import com.erp.sync.entity.OutboxEvent;
import com.erp.sync.entity.OutboxStatus;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.repository.OutboxEventRepository;
import com.erp.sync.repository.OutboxEventRepository.OutboxEventSummary;
import com.erp.sync.service.SnapshotService;
import com.erp.sync.service.SyncDispatcherScheduler;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/sync")
@RequiredArgsConstructor
public class SyncStatusController {

    private final OutboxEventRepository    outboxRepo;
    private final SyncDispatcherScheduler  dispatcher;
    private final SnapshotService          snapshotService;
    private final ConnectionFactory        rabbitConnectionFactory;

    @Value("${spring.rabbitmq.host:localhost}")   private String rabbitHost;
    @Value("${spring.rabbitmq.port:5672}")        private int    rabbitPort;
    @Value("${spring.rabbitmq.virtual-host:/}")   private String rabbitVhost;

    private static final Map<String, List<SyncEventType>> MODULE_TYPES = new LinkedHashMap<>() {{
        put("VENTES", List.of(
            SyncEventType.SALE_INVOICE_POSTED, SyncEventType.SALE_INVOICE_CANCELLED,
            SyncEventType.SALE_PAYMENT_CREATED, SyncEventType.SALE_PAYMENT_REVERSED,
            SyncEventType.SALE_ORDER_CONFIRMED,
            SyncEventType.ACCOUNT_MOVE_RISTOURNE,
            SyncEventType.RISTOURNE_PAIEMENT_POSTED, SyncEventType.RISTOURNE_PAIEMENT_CANCELLED,
            SyncEventType.ELEADER_IMPORT_DONE, SyncEventType.ENLEVEMENT_SAVED
        ));
        put("ACHATS", List.of(
            SyncEventType.PURCHASE_INVOICE_POSTED, SyncEventType.PURCHASE_INVOICE_CANCELLED,
            SyncEventType.PURCHASE_PAYMENT_CREATED, SyncEventType.PURCHASE_PAYMENT_REVERSED,
            SyncEventType.PURCHASE_ORDER_RECEIVED,
            SyncEventType.REMISE_PAIEMENT_POSTED, SyncEventType.REMISE_PAIEMENT_CANCELLED
        ));
        put("COMPTABILITE", List.of(
            SyncEventType.ACCOUNT_MOVE_POSTED, SyncEventType.ACCOUNT_MOVE_CANCELLED,
            SyncEventType.ACCOUNT_MOVE_REVERSED,
            SyncEventType.ACCOUNT_MOVE_FROM_SALE, SyncEventType.ACCOUNT_MOVE_FROM_SALE_PAYMENT,
            SyncEventType.ACCOUNT_MOVE_FROM_PURCHASE, SyncEventType.ACCOUNT_MOVE_FROM_PURCHASE_PAYMENT,
            SyncEventType.ACCOUNT_MOVE_STOCK_VALUATION
        ));
        put("STOCK", List.of(
            SyncEventType.STOCK_MOVE_DONE,
            SyncEventType.STOCK_PICKING_FROM_SALE, SyncEventType.STOCK_PICKING_FROM_PURCHASE,
            SyncEventType.STOCK_PICKING_VALIDATED, SyncEventType.STOCK_BORDEREAU_VALIDATED
        ));
        put("CAISSES", List.of(
            SyncEventType.CAISSE_OPERATION_ENTREE,
            SyncEventType.CAISSE_OPERATION_SORTIE,
            SyncEventType.CAISSE_CLOTURE
        ));
        put("REFERENTIELS", List.of(
            SyncEventType.PARTNER_UPSERT,
            SyncEventType.PRODUCT_UPSERT,
            SyncEventType.ACCOUNT_UPSERT,
            SyncEventType.FULL_SNAPSHOT
        ));
    }};

    private static final Map<SyncEventType, String> EVENT_LABELS = Map.ofEntries(
        Map.entry(SyncEventType.SALE_INVOICE_POSTED,               "Facture vente validée"),
        Map.entry(SyncEventType.SALE_INVOICE_CANCELLED,            "Facture vente annulée"),
        Map.entry(SyncEventType.SALE_PAYMENT_CREATED,              "Paiement client créé"),
        Map.entry(SyncEventType.SALE_PAYMENT_REVERSED,             "Paiement client inversé"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_FROM_SALE,            "Écriture comptable — facturation vente"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_FROM_SALE_PAYMENT,    "Écriture comptable — paiement client"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_RISTOURNE,            "Écriture comptable — ristourne"),
        Map.entry(SyncEventType.STOCK_PICKING_FROM_SALE,           "Bon de livraison — facture vente"),
        Map.entry(SyncEventType.PURCHASE_INVOICE_POSTED,           "Facture achat validée"),
        Map.entry(SyncEventType.PURCHASE_INVOICE_CANCELLED,        "Facture achat annulée"),
        Map.entry(SyncEventType.PURCHASE_PAYMENT_CREATED,          "Paiement fournisseur créé"),
        Map.entry(SyncEventType.PURCHASE_PAYMENT_REVERSED,         "Paiement fournisseur inversé"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_FROM_PURCHASE,        "Écriture comptable — facturation achat"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_FROM_PURCHASE_PAYMENT,"Écriture comptable — paiement fournisseur"),
        Map.entry(SyncEventType.STOCK_PICKING_FROM_PURCHASE,       "Bon de réception — facture achat"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_POSTED,               "Écriture validée (comptabilité)"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_CANCELLED,            "Écriture annulée (comptabilité)"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_REVERSED,             "Écriture extournée (comptabilité)"),
        Map.entry(SyncEventType.STOCK_MOVE_DONE,                   "Mouvement de stock"),
        Map.entry(SyncEventType.ACCOUNT_MOVE_STOCK_VALUATION,      "Écriture variation de stock (6031/311)"),
        Map.entry(SyncEventType.STOCK_PICKING_VALIDATED,            "Transfert de stock validé"),
        Map.entry(SyncEventType.STOCK_BORDEREAU_VALIDATED,          "Bordereau de réception validé"),
        Map.entry(SyncEventType.PURCHASE_ORDER_RECEIVED,            "Bon de commande réceptionné"),
        Map.entry(SyncEventType.ENLEVEMENT_SAVED,                   "Enlèvement enregistré"),
        Map.entry(SyncEventType.ELEADER_IMPORT_DONE,                "Import eLeader réussi"),
        Map.entry(SyncEventType.CAISSE_OPERATION_ENTREE,            "Entrée de caisse"),
        Map.entry(SyncEventType.CAISSE_OPERATION_SORTIE,            "Sortie de caisse"),
        Map.entry(SyncEventType.SALE_ORDER_CONFIRMED,               "Bon de commande vente confirmé"),
        Map.entry(SyncEventType.RISTOURNE_PAIEMENT_POSTED,          "Paiement de ristourne validé"),
        Map.entry(SyncEventType.RISTOURNE_PAIEMENT_CANCELLED,       "Paiement de ristourne annulé"),
        Map.entry(SyncEventType.REMISE_PAIEMENT_POSTED,             "Paiement de remise fournisseur validé"),
        Map.entry(SyncEventType.REMISE_PAIEMENT_CANCELLED,          "Paiement de remise fournisseur annulé"),
        Map.entry(SyncEventType.PARTNER_UPSERT,                     "Tiers créé ou modifié"),
        Map.entry(SyncEventType.PRODUCT_UPSERT,                     "Article créé ou modifié"),
        Map.entry(SyncEventType.ACCOUNT_UPSERT,                     "Compte comptable créé ou modifié"),
        Map.entry(SyncEventType.FULL_SNAPSHOT,                      "Snapshot complet du spoke"),
        Map.entry(SyncEventType.CAISSE_CLOTURE,                     "Clôture journalière de caisse")
    );

    @GetMapping("/summary")
    public ResponseEntity<SyncSummaryDTO> summary() {
        long pending = outboxRepo.countByStatus(OutboxStatus.PENDING);
        long sent    = outboxRepo.countByStatus(OutboxStatus.SENT);
        long failed  = outboxRepo.countByStatus(OutboxStatus.FAILED);

        Map<String, SyncSummaryDTO.ModuleStats> byModule = new LinkedHashMap<>();
        for (Map.Entry<String, List<SyncEventType>> entry : MODULE_TYPES.entrySet()) {
            List<Object[]> rows = outboxRepo.countByStatusForTypes(entry.getValue());
            long mp = 0, ms = 0, mf = 0;
            for (Object[] row : rows) {
                OutboxStatus s = (OutboxStatus) row[0];
                long cnt = (Long) row[1];
                if (s == OutboxStatus.PENDING) mp = cnt;
                else if (s == OutboxStatus.SENT) ms = cnt;
                else if (s == OutboxStatus.FAILED) mf = cnt;
            }
            byModule.put(entry.getKey(), SyncSummaryDTO.ModuleStats.builder()
                    .pending(mp).sent(ms).failed(mf).build());
        }

        return ResponseEntity.ok(SyncSummaryDTO.builder()
                .total(pending + sent + failed)
                .pending(pending).sent(sent).failed(failed)
                .byModule(byModule).build());
    }

    @GetMapping("/events")
    public ResponseEntity<Page<OutboxEventDTO>> events(
            @RequestParam(required = false) String module,
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "30") int size) {

        List<SyncEventType> types = module != null && MODULE_TYPES.containsKey(module)
                ? MODULE_TYPES.get(module)
                : Arrays.asList(SyncEventType.values());

        Pageable pageable = PageRequest.of(page, size);
        Page<OutboxEventSummary> raw;

        if (status != null && !status.isBlank()) {
            OutboxStatus st = OutboxStatus.valueOf(status.toUpperCase());
            raw = outboxRepo.findByStatusAndEventTypeInOrderByCreatedAtDesc(st, types, pageable);
        } else {
            raw = outboxRepo.findByEventTypeInOrderByCreatedAtDesc(types, pageable);
        }

        return ResponseEntity.ok(raw.map(this::toDTO));
    }

    @GetMapping("/events/{id}")
    public ResponseEntity<OutboxEventDTO> eventDetail(@PathVariable Long id) {
        return outboxRepo.findById(id)
                .map(e -> ResponseEntity.ok(toDTOWithPayload(e)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/retry")
    public ResponseEntity<Map<String, Object>> retry() {
        int requeued = dispatcher.requeueFailed();
        return ResponseEntity.ok(Map.of("requeued", requeued));
    }

    /** Supprime définitivement les événements FAILED — action destructive, distincte de /retry qui
     *  les remet en PENDING pour un nouvel essai. Confirmée côté frontend avant appel. */
    @DeleteMapping("/failed")
    public ResponseEntity<Map<String, Object>> clearFailed() {
        int cleared = dispatcher.clearFailed();
        return ResponseEntity.ok(Map.of("cleared", cleared));
    }

    @PostMapping("/retry/{id}")
    public ResponseEntity<Map<String, Object>> retryOne(@PathVariable Long id) {
        return outboxRepo.findById(id).map(e -> {
            e.setStatus(OutboxStatus.PENDING);
            e.setRetryCount(0);
            outboxRepo.save(e);
            return ResponseEntity.ok(Map.<String, Object>of("ok", true));
        }).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/dispatch")
    public ResponseEntity<Map<String, Object>> dispatch() {
        dispatcher.dispatch();
        return ResponseEntity.ok(Map.of("ok", true));
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> status() {
        return ResponseEntity.ok(Map.of(
            "pending", outboxRepo.countByStatus(OutboxStatus.PENDING),
            "sent",    outboxRepo.countByStatus(OutboxStatus.SENT),
            "failed",  outboxRepo.countByStatus(OutboxStatus.FAILED)
        ));
    }

    /** Snapshot complet (pas de fenêtre de 2 ans sur les factures, tout l'historique renvoyé) —
     *  bouton "Snapshot complet" côté UI. À distinguer de /snapshot/hourly (incrémental, ce que le
     *  job planifié envoie normalement chaque heure) et de /retry (qui ne fait que rejouer les
     *  événements déjà en échec, sans reconstruire de snapshot). */
    @PostMapping("/snapshot/force")
    public ResponseEntity<Map<String, String>> forceSnapshot() {
        try {
            snapshotService.buildAndPublish(true);
            return ResponseEntity.ok(Map.of("status", "ok", "message", "Snapshot complet envoyé dans l'outbox"));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(Map.of("status", "error", "message", e.getMessage()));
        }
    }

    /** Déclenche immédiatement le même snapshot incrémental que le job planifié (SnapshotScheduler),
     *  sans attendre le prochain passage horaire — utile pour vérifier tout de suite l'effet d'un
     *  changement plutôt que d'attendre jusqu'à une heure. Contrairement à /snapshot/force, reste
     *  fenêtré/incrémental (ne renvoie que ce qui a changé depuis le dernier snapshot réussi). */
    @PostMapping("/snapshot/hourly")
    public ResponseEntity<Map<String, String>> triggerHourlySnapshot() {
        try {
            snapshotService.buildAndPublish(false);
            return ResponseEntity.ok(Map.of("status", "ok", "message", "Snapshot incrémental envoyé dans l'outbox"));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(Map.of("status", "error", "message", e.getMessage()));
        }
    }

    private OutboxEventDTO toDTO(OutboxEventSummary e) {
        String moduleName = MODULE_TYPES.entrySet().stream()
                .filter(en -> en.getValue().contains(e.getEventType()))
                .map(Map.Entry::getKey)
                .findFirst().orElse("AUTRE");
        return OutboxEventDTO.builder()
                .id(e.getId())
                .spokeId(e.getSpokeId())
                .eventType(e.getEventType().name())
                .eventModule(moduleName)
                .eventLabel(EVENT_LABELS.getOrDefault(e.getEventType(), e.getEventType().name()))
                .entityId(e.getEntityId())
                .status(e.getStatus())
                .retryCount(e.getRetryCount())
                .createdAt(e.getCreatedAt())
                .lastAttemptAt(e.getLastAttemptAt())
                .errorMessage(e.getErrorMessage())
                .build();
    }

    private OutboxEventDTO toDTOWithPayload(OutboxEvent e) {
        String moduleName = MODULE_TYPES.entrySet().stream()
                .filter(en -> en.getValue().contains(e.getEventType()))
                .map(Map.Entry::getKey)
                .findFirst().orElse("AUTRE");
        return OutboxEventDTO.builder()
                .id(e.getId())
                .spokeId(e.getSpokeId())
                .eventType(e.getEventType().name())
                .eventModule(moduleName)
                .eventLabel(EVENT_LABELS.getOrDefault(e.getEventType(), e.getEventType().name()))
                .entityId(e.getEntityId())
                .status(e.getStatus())
                .retryCount(e.getRetryCount())
                .createdAt(e.getCreatedAt())
                .lastAttemptAt(e.getLastAttemptAt())
                .errorMessage(e.getErrorMessage())
                .payload(e.getPayload())
                .build();
    }

    /** Progression en temps réel : état du batch courant + métriques de dispatch */
    @GetMapping("/progress")
    public ResponseEntity<Map<String, Object>> progress() {
        long pending = outboxRepo.countByStatus(OutboxStatus.PENDING);
        long sent    = outboxRepo.countByStatus(OutboxStatus.SENT);
        long failed  = outboxRepo.countByStatus(OutboxStatus.FAILED);
        long total   = pending + sent + failed;

        // Progression globale (% d'envoi) — évite la division par zéro
        int progressPct = total > 0 ? (int) (sent * 100 / total) : 100;

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("checkedAt",      LocalDateTime.now().toString());
        result.put("pending",        pending);
        result.put("sent",           sent);
        result.put("failed",         failed);
        result.put("total",          total);
        result.put("progressPct",    progressPct);
        result.put("lastDispatchAt", dispatcher.getLastDispatchAt() != null
                                        ? dispatcher.getLastDispatchAt().toString() : null);
        result.put("lastBatchSize",  dispatcher.getLastBatchSize());
        result.put("lastBatchSent",  dispatcher.getLastBatchSent());
        result.put("dispatchIntervalMs", 30_000);

        // Stats par module
        Map<String, Object> modules = new LinkedHashMap<>();
        for (Map.Entry<String, List<SyncEventType>> entry : MODULE_TYPES.entrySet()) {
            List<Object[]> rows = outboxRepo.countByStatusForTypes(entry.getValue());
            long mp = 0, ms = 0, mf = 0;
            for (Object[] row : rows) {
                OutboxStatus s = (OutboxStatus) row[0];
                long cnt = (Long) row[1];
                if (s == OutboxStatus.PENDING) mp = cnt;
                else if (s == OutboxStatus.SENT) ms = cnt;
                else if (s == OutboxStatus.FAILED) mf = cnt;
            }
            modules.put(entry.getKey(), Map.of("pending", mp, "sent", ms, "failed", mf));
        }
        result.put("byModule", modules);

        return ResponseEntity.ok(result);
    }

    /** Test de connectivité Spoke → Broker RabbitMQ (canal réel d'envoi au Hub) */
    @GetMapping("/test-hub")
    public ResponseEntity<Map<String, Object>> testHubConnection() {
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("checkedAt", LocalDateTime.now().toString());
        String brokerUrl = "amqp://" + rabbitHost + ":" + rabbitPort + rabbitVhost;
        result.put("hubUrl", brokerUrl);
        result.put("exchange", com.erp.sync.RabbitMQConfig.EXCHANGE);
        result.put("queue",    com.erp.sync.RabbitMQConfig.QUEUE);
        try {
            long start = System.currentTimeMillis();
            com.rabbitmq.client.Connection conn = rabbitConnectionFactory.createConnection().getDelegate();
            long latency = System.currentTimeMillis() - start;
            boolean open = conn.isOpen();
            result.put("reachable", open);
            result.put("latencyMs", latency);
            result.put("message", open ? "Broker RabbitMQ accessible" : "Connexion établie mais fermée");
        } catch (Exception e) {
            result.put("reachable", false);
            result.put("latencyMs", null);
            result.put("message", e.getMessage());
        }
        return ResponseEntity.ok(result);
    }
}
