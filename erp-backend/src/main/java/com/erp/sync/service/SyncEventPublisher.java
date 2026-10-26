package com.erp.sync.service;

import com.erp.sync.dto.SpokeSnapshotPayload;
import com.erp.sync.entity.OutboxEvent;
import com.erp.sync.entity.OutboxStatus;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.repository.OutboxEventRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class SyncEventPublisher {

    private final OutboxEventRepository outboxRepo;
    private final ObjectMapper objectMapper;
    private final jakarta.persistence.EntityManager entityManager;

    @Value("${sync.spoke.id}")
    private String spokeId;

    @Value("${sync.snapshot.part-bytes:8388608}")
    private int snapshotPartBytes;

    /** Seuil d'alerte avant la limite réelle du broker (16 Mo) — laisse une marge pour repérer
     *  la croissance avant le rejet 406 PRECONDITION_FAILED plutôt que de le découvrir en prod
     *  (cf. incidents 2026-09-14/16 sur des listes non fenêtrées du snapshot horaire). */
    private static final int PAYLOAD_WARN_BYTES = 8 * 1024 * 1024;

    // Explicit Function constants to avoid ambiguous method-reference target typing
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> SALE_INVOICES = SpokeSnapshotPayload::getSaleInvoices;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> ACCOUNT_MOVE_LINES = SpokeSnapshotPayload::getAccountMoveLines;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> PRODUCTS = SpokeSnapshotPayload::getProducts;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> PARTNERS = SpokeSnapshotPayload::getPartners;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> SALES_ORDERS = SpokeSnapshotPayload::getSalesOrders;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> PURCHASE_INVOICES = SpokeSnapshotPayload::getPurchaseInvoices;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> PURCHASE_ORDERS = SpokeSnapshotPayload::getPurchaseOrders;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> RISTOURNE_PAIEMENTS = SpokeSnapshotPayload::getRistournePaiements;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> REMISE_PAIEMENTS = SpokeSnapshotPayload::getRemisePaiements;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> ACCOUNTS = SpokeSnapshotPayload::getAccounts;

    /**
     * Publie un snapshot dans une nouvelle transaction indépendante.
     * REQUIRES_NEW évite d'hériter de la transaction readOnly du SnapshotService.
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void publishSnapshot(SpokeSnapshotPayload snapshot) {
        // Fractionne le snapshot en plusieurs parties si nécessaire pour rester sous la limite
        // cible par partie (par défaut 8MB) et publie chaque partie séparément.
        try {
            var parts = splitSnapshotBySize(snapshot, snapshotPartBytes);
            int total = parts.size();
            for (int i = 0; i < total; i++) {
                var part = parts.get(i);
                String entityId = String.format("SNAPSHOT_%s_part_%d_of_%d", snapshot.getSpokeId(), i + 1, total);
                publish(SyncEventType.FULL_SNAPSHOT, entityId, part);
                // Écrit la partie puis la détache : sinon chaque OutboxEvent (JSON jusqu'à 8 Mo)
                // reste dans le contexte de persistance jusqu'au commit, toutes parties cumulées.
                // Sans risque : cette transaction REQUIRES_NEW ne gère que ces événements outbox.
                entityManager.flush();
                entityManager.clear();
            }
        } catch (Exception e) {
            log.error("Erreur fractionnement snapshot {}: {}", snapshot.getSpokeId(), e.getMessage(), e);
            // Fallback : publier en une seule partie (expose possible rejet côté broker)
            publish(SyncEventType.FULL_SNAPSHOT, "SNAPSHOT_" + snapshot.getSpokeId(), snapshot);
        }
    }

    /** Liste découpable du snapshot : lecture sur le snapshot source, écriture sur une partie. */
    private record SplitList(java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> getter,
                             java.util.function.BiConsumer<SpokeSnapshotPayload, java.util.List<?>> setter) {}

    @SuppressWarnings("unchecked")
    private static <T> java.util.function.BiConsumer<SpokeSnapshotPayload, java.util.List<?>> setter(
            java.util.function.BiConsumer<SpokeSnapshotPayload, java.util.List<T>> typed) {
        return (p, l) -> typed.accept(p, (java.util.List<T>) l);
    }

    // Ordre de remplissage des parties (les plus volumineuses d'abord).
    private static final java.util.List<SplitList> SPLIT_LISTS = java.util.List.of(
            new SplitList(SALE_INVOICES,       setter(SpokeSnapshotPayload::setSaleInvoices)),
            new SplitList(ACCOUNT_MOVE_LINES,  setter(SpokeSnapshotPayload::setAccountMoveLines)),
            new SplitList(PRODUCTS,            setter(SpokeSnapshotPayload::setProducts)),
            new SplitList(PARTNERS,            setter(SpokeSnapshotPayload::setPartners)),
            new SplitList(SALES_ORDERS,        setter(SpokeSnapshotPayload::setSalesOrders)),
            new SplitList(PURCHASE_INVOICES,   setter(SpokeSnapshotPayload::setPurchaseInvoices)),
            new SplitList(PURCHASE_ORDERS,     setter(SpokeSnapshotPayload::setPurchaseOrders)),
            new SplitList(RISTOURNE_PAIEMENTS, setter(SpokeSnapshotPayload::setRistournePaiements)),
            new SplitList(REMISE_PAIEMENTS,    setter(SpokeSnapshotPayload::setRemisePaiements)),
            new SplitList(ACCOUNTS,            setter(SpokeSnapshotPayload::setAccounts))
    );

    /**
     * Découpe un `SpokeSnapshotPayload` en plusieurs parties dont la taille JSON sérialisée
     * ne dépasse pas `maxBytes` si possible. Le découpage se fait en parcourant les gros
     * tableaux présents dans le snapshot et en les répartissant entre parties.
     *
     * Chaque élément n'est sérialisé qu'UNE fois, pour mesurer sa taille : taille d'une partie =
     * squelette (scalaires + petites listes, listes découpables vides) + Σ(taille élément + 1 virgule).
     * Avant, chaque ajout d'élément recopiait toute la partie en cours puis la resérialisait en
     * entier (jusqu'à 8 Mo) — coût quadratique : sur ~20 000 lignes comptables (60 jours, renvoyées
     * à chaque snapshot), des dizaines de Go alloués par snapshot, ~15 min de construction avec une
     * connexion JDBC retenue, et OutOfMemoryError en boucle chez le client (2026-10-13).
     */
    java.util.List<SpokeSnapshotPayload> splitSnapshotBySize(SpokeSnapshotPayload snapshot, int maxBytes) throws com.fasterxml.jackson.core.JsonProcessingException {
        // Base de chaque partie = copie INTÉGRALE du snapshot (toBuilder) : tous les indicateurs
        // scalaires et les petites listes affichées telles quelles par le Hub (caisses,
        // caissesActuelles, topStock, ventes du jour) sont présents dans chaque partie, et seules
        // les grosses listes découpables repartent vides. Avant : une liste blanche recopiée champ
        // par champ, qui avait oublié les détails ristournes/remises (collecte, paiement) et frais
        // d'enlèvement (année/mois/trimestre) ainsi que les caisses — le Hub, qui relit chaque
        // partie, les recevait à null et les écrasait à 0 à chaque snapshot.
        java.util.function.Supplier<SpokeSnapshotPayload> newPart = () -> {
            SpokeSnapshotPayload p = snapshot.toBuilder().build();
            for (SplitList s : SPLIT_LISTS) s.setter().accept(p, new java.util.ArrayList<>());
            return p;
        };
        long baseBytes = objectMapper.writeValueAsBytes(newPart.get()).length;

        java.util.List<SpokeSnapshotPayload> parts = new java.util.ArrayList<>();
        SpokeSnapshotPayload current = newPart.get();
        long currentBytes = baseBytes;
        boolean currentHasItems = false;

        for (SplitList s : SPLIT_LISTS) {
            java.util.List<?> source = s.getter().apply(snapshot);
            if (source == null) continue;
            for (Object item : source) {
                long itemBytes = objectMapper.writeValueAsBytes(item).length + 1L;
                if (currentHasItems && currentBytes + itemBytes > maxBytes) {
                    parts.add(current);
                    current = newPart.get();
                    currentBytes = baseBytes;
                    currentHasItems = false;
                }
                if (baseBytes + itemBytes > maxBytes) {
                    log.warn("Un élément individuel du snapshot dépasse la taille max {} bytes; acceptez une partie plus grande", maxBytes);
                }
                @SuppressWarnings("unchecked")
                java.util.List<Object> target = (java.util.List<Object>) s.getter().apply(current);
                target.add(item);
                currentBytes += itemBytes;
                currentHasItems = true;
            }
        }

        // Dernière partie gardée si elle porte des éléments, ou s'il n'y a aucune partie du tout
        // (snapshot sans liste découpable : les indicateurs scalaires doivent quand même partir).
        if (currentHasItems || parts.isEmpty()) parts.add(current);
        return parts;
    }

    /**
     * Enregistre un événement métier dans l'outbox pour envoi différé au Hub.
     * Doit être appelé dans la même transaction que l'opération métier.
     */
    public void publish(SyncEventType eventType, String entityId, Object payload) {
        String json;
        try {
            json = objectMapper.writeValueAsString(payload);
        } catch (JsonProcessingException e) {
            // Ne JAMAIS avaler cette erreur : publish() s'exécute dans la même transaction que
            // l'opération métier (garantie outbox transactionnelle) — logger et continuer laisserait
            // l'écriture métier se valider avec un événement outbox silencieusement jamais créé, donc
            // jamais renvoyé au Hub. Faire échouer toute la transaction est le seul moyen de préserver
            // l'atomicité "tout ou rien" attendue du pattern outbox.
            log.error("Impossible de sérialiser le payload pour l'événement {} id={} : {}", eventType, entityId, e.getMessage());
            throw new IllegalStateException("Échec de sérialisation de l'événement de synchronisation " + eventType, e);
        }
        int payloadBytes = json.getBytes(java.nio.charset.StandardCharsets.UTF_8).length;
        if (payloadBytes >= PAYLOAD_WARN_BYTES) {
            log.warn("Payload outbox volumineux ({} Mo) pour {} id={} — approche de la limite du "
                    + "broker (16 Mo), vérifier les fenêtres de date des listes du snapshot",
                    String.format("%.1f", payloadBytes / (1024.0 * 1024.0)), eventType, entityId);
        }
        OutboxEvent event = new OutboxEvent();
        event.setSpokeId(spokeId);
        event.setEventType(eventType);
        event.setEntityId(entityId);
        event.setPayload(json);
        event.setStatus(OutboxStatus.PENDING);
        outboxRepo.save(event);
        log.debug("Outbox event enregistré: {} id={}", eventType, entityId);
    }
}
