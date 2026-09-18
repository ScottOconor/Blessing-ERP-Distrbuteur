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
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> TOP_STOCK = SpokeSnapshotPayload::getTopStock;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> SALES_ORDERS = SpokeSnapshotPayload::getSalesOrders;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> PURCHASE_INVOICES = SpokeSnapshotPayload::getPurchaseInvoices;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> PURCHASE_ORDERS = SpokeSnapshotPayload::getPurchaseOrders;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> RISTOURNE_PAIEMENTS = SpokeSnapshotPayload::getRistournePaiements;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> REMISE_PAIEMENTS = SpokeSnapshotPayload::getRemisePaiements;
    private static final java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> VENTES_JOUR_PAR_ENTREPOT = SpokeSnapshotPayload::getVentesJourParEntrepot;
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
            }
        } catch (Exception e) {
            log.error("Erreur fractionnement snapshot {}: {}", snapshot.getSpokeId(), e.getMessage(), e);
            // Fallback : publier en une seule partie (expose possible rejet côté broker)
            publish(SyncEventType.FULL_SNAPSHOT, "SNAPSHOT_" + snapshot.getSpokeId(), snapshot);
        }
    }

    /**
     * Découpe un `SpokeSnapshotPayload` en plusieurs parties dont la taille JSON sérialisée
     * ne dépasse pas `maxBytes` si possible. Le découpage se fait en parcourant les gros
     * tableaux présents dans le snapshot et en les répartissant entre parties.
     */
    private java.util.List<SpokeSnapshotPayload> splitSnapshotBySize(SpokeSnapshotPayload snapshot, int maxBytes) throws com.fasterxml.jackson.core.JsonProcessingException {
        java.util.List<SpokeSnapshotPayload> parts = new java.util.ArrayList<>();
        ObjectMapper mapper = this.objectMapper;

        // Helper pour cloner les scalaires et initialiser listes vides
        java.util.function.Supplier<SpokeSnapshotPayload.SpokeSnapshotPayloadBuilder> baseBuilder = () -> SpokeSnapshotPayload.builder()
                .spokeId(snapshot.getSpokeId()).spokeName(snapshot.getSpokeName()).snapshotAt(snapshot.getSnapshotAt())
                .caComptesTotal(snapshot.getCaComptesTotal()).caComptesMoisCourant(snapshot.getCaComptesMoisCourant())
                .caVentesTotal(snapshot.getCaVentesTotal()).caVentesJour(snapshot.getCaVentesJour()).caVentesHier(snapshot.getCaVentesHier())
                .caVentesMoisCourant(snapshot.getCaVentesMoisCourant()).caVentesMoisDernier(snapshot.getCaVentesMoisDernier())
                .evolutionCaJour(snapshot.getEvolutionCaJour()).evolutionCaMois(snapshot.getEvolutionCaMois())
                .achatsTotal(snapshot.getAchatsTotal()).achatsMoisCourant(snapshot.getAchatsMoisCourant()).countFacturesAchats(snapshot.getCountFacturesAchats())
                .creancesTotal(snapshot.getCreancesTotal()).creancesJour(snapshot.getCreancesJour()).creancesMois(snapshot.getCreancesMois())
                .dettesTotal(snapshot.getDettesTotal()).dettesJour(snapshot.getDettesJour()).dettesMois(snapshot.getDettesMois())
                .ristournesTotalTotal(snapshot.getRistournesTotalTotal()).ristournesTotalMois(snapshot.getRistournesTotalMois()).ristournesTotalAnnee(snapshot.getRistournesTotalAnnee())
                .ristournesPayeesTotal(snapshot.getRistournesPayeesTotal()).ristournesPayeesMois(snapshot.getRistournesPayeesMois()).ristournesPayeesAnnee(snapshot.getRistournesPayeesAnnee())
                .ristournesNonPayeesTotal(snapshot.getRistournesNonPayeesTotal()).ristournesNonPayeesMois(snapshot.getRistournesNonPayeesMois()).ristournesNonPayeesAnnee(snapshot.getRistournesNonPayeesAnnee())
                .countRistournes(snapshot.getCountRistournes())
                .remisesTotalTotal(snapshot.getRemisesTotalTotal()).remisesTotalMois(snapshot.getRemisesTotalMois()).remisesTotalAnnee(snapshot.getRemisesTotalAnnee())
                .remisesPayeesTotal(snapshot.getRemisesPayeesTotal()).remisesPayeesMois(snapshot.getRemisesPayeesMois()).remisesPayeesAnnee(snapshot.getRemisesPayeesAnnee())
                .remisesNonPayeesTotal(snapshot.getRemisesNonPayeesTotal()).remisesNonPayeesMois(snapshot.getRemisesNonPayeesMois()).remisesNonPayeesAnnee(snapshot.getRemisesNonPayeesAnnee())
                .countRemises(snapshot.getCountRemises())
                .fraisEnlevementsTotal(snapshot.getFraisEnlevementsTotal()).fraisEnlevementsMois(snapshot.getFraisEnlevementsMois()).countEnlevements(snapshot.getCountEnlevements())
                .caissesTotalSolde(snapshot.getCaissesTotalSolde()).caissesTotalEntrees(snapshot.getCaissesTotalEntrees()).caissesTotalSorties(snapshot.getCaissesTotalSorties())
                .valeurStockProduits(snapshot.getValeurStockProduits()).valeurStockEmballages(snapshot.getValeurStockEmballages()).valeurStockTotal(snapshot.getValeurStockTotal())
                .totalReferences(snapshot.getTotalReferences()).margeVentesTotal(snapshot.getMargeVentesTotal()).margeVentesJour(snapshot.getMargeVentesJour()).margeVentesMois(snapshot.getMargeVentesMois()).totalCoutVentes(snapshot.getTotalCoutVentes())
                .nbFacturesJour(snapshot.getNbFacturesJour()).nbFacturesMois(snapshot.getNbFacturesMois()).nbClients(snapshot.getNbClients()).nbSpokes(snapshot.getNbSpokes());

        // Order of list fields to pack (largest/most numerous first by empirical knowledge)
        java.util.List<java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>>> listGetters =
            java.util.Arrays.<java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>>>asList(
                SALE_INVOICES,
                ACCOUNT_MOVE_LINES,
                PRODUCTS,
                PARTNERS,
                TOP_STOCK,
                SALES_ORDERS,
                PURCHASE_INVOICES,
                PURCHASE_ORDERS,
                RISTOURNE_PAIEMENTS,
                REMISE_PAIEMENTS,
                VENTES_JOUR_PAR_ENTREPOT,
                ACCOUNTS
            );

        // Keep track of remaining iterators for each list field
        java.util.Map<java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>>, java.util.Iterator<?>> iters = new java.util.LinkedHashMap<>();
        for (var g : listGetters) {
            var l = g.apply(snapshot);
            iters.put(g, l == null ? java.util.Collections.emptyIterator() : l.iterator());
        }

        SpokeSnapshotPayload.SpokeSnapshotPayloadBuilder current = baseBuilder.get();
        // initialize empty lists
        current.caisses(new java.util.ArrayList<>());
        current.caissesActuelles(new java.util.ArrayList<>());
        current.topStock(new java.util.ArrayList<>());
        current.partners(new java.util.ArrayList<>());
        current.products(new java.util.ArrayList<>());
        current.accounts(new java.util.ArrayList<>());
        current.ristournePaiements(new java.util.ArrayList<>());
        current.remisePaiements(new java.util.ArrayList<>());
        current.saleInvoices(new java.util.ArrayList<>());
        current.ventesJourParEntrepot(new java.util.ArrayList<>());
        current.purchaseInvoices(new java.util.ArrayList<>());
        current.accountMoveLines(new java.util.ArrayList<>());
        current.salesOrders(new java.util.ArrayList<>());
        current.purchaseOrders(new java.util.ArrayList<>());

        while (true) {
            // Try to find next item from any iterator
            Object nextItem = null;
            java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> sourceKey = null;
            for (var e : iters.entrySet()) {
                var it = e.getValue();
                if (it.hasNext()) {
                    nextItem = it.next();
                    sourceKey = e.getKey();
                    break;
                }
            }
            if (nextItem == null) break; // nothing left

            // Add nextItem to the appropriate list on current builder
            addItemToBuilder(current, sourceKey, nextItem);

            // Serialize and check size
            SpokeSnapshotPayload candidate = current.build();
            byte[] bytes = mapper.writeValueAsBytes(candidate);
            if (bytes.length > maxBytes) {
                // remove the last added item from current and finalize it
                removeLastFromBuilder(current, sourceKey);
                parts.add(current.build());
                // start new part and re-add the item
                current = baseBuilder.get();
                // re-init lists
                current.caisses(new java.util.ArrayList<>());
                current.caissesActuelles(new java.util.ArrayList<>());
                current.topStock(new java.util.ArrayList<>());
                current.partners(new java.util.ArrayList<>());
                current.products(new java.util.ArrayList<>());
                current.accounts(new java.util.ArrayList<>());
                current.ristournePaiements(new java.util.ArrayList<>());
                current.remisePaiements(new java.util.ArrayList<>());
                current.saleInvoices(new java.util.ArrayList<>());
                current.ventesJourParEntrepot(new java.util.ArrayList<>());
                current.purchaseInvoices(new java.util.ArrayList<>());
                current.accountMoveLines(new java.util.ArrayList<>());
                current.salesOrders(new java.util.ArrayList<>());
                current.purchaseOrders(new java.util.ArrayList<>());
                // add the item to new part
                addItemToBuilder(current, sourceKey, nextItem);
                // Edge case: single item is larger than maxBytes — accept it (can't split further)
                candidate = current.build();
                bytes = mapper.writeValueAsBytes(candidate);
                if (bytes.length > maxBytes) {
                    log.warn("Un élément individuel du snapshot dépasse la taille max {} bytes; acceptez une partie plus grande", maxBytes);
                }
            }
        }

        // finalize last part
        SpokeSnapshotPayload last = current.build();
        // If last part is empty and there are already parts, skip adding an empty final part
        boolean empty = mapper.writeValueAsBytes(last).length == 0 || (
                (last.getSaleInvoices() == null || last.getSaleInvoices().isEmpty())
                        && (last.getAccountMoveLines() == null || last.getAccountMoveLines().isEmpty())
                        && (last.getProducts() == null || last.getProducts().isEmpty())
                        && (last.getPartners() == null || last.getPartners().isEmpty())
        );
        if (!empty || parts.isEmpty()) parts.add(last);

        return parts;
    }

    private void addItemToBuilder(SpokeSnapshotPayload.SpokeSnapshotPayloadBuilder builder,
                                  java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> sourceKey,
                                  Object item) {
        if (sourceKey == SALE_INVOICES) builder.saleInvoices(java.util.stream.Stream.concat(builder.build().getSaleInvoices()==null?java.util.stream.Stream.empty():builder.build().getSaleInvoices().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.SaleInvoiceItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == ACCOUNT_MOVE_LINES) builder.accountMoveLines(java.util.stream.Stream.concat(builder.build().getAccountMoveLines()==null?java.util.stream.Stream.empty():builder.build().getAccountMoveLines().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.AccountMoveLineItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == PRODUCTS) builder.products(java.util.stream.Stream.concat(builder.build().getProducts()==null?java.util.stream.Stream.empty():builder.build().getProducts().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.ProductItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == PARTNERS) builder.partners(java.util.stream.Stream.concat(builder.build().getPartners()==null?java.util.stream.Stream.empty():builder.build().getPartners().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.PartnerItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == TOP_STOCK) builder.topStock(java.util.stream.Stream.concat(builder.build().getTopStock()==null?java.util.stream.Stream.empty():builder.build().getTopStock().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.StockItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == SALES_ORDERS) builder.salesOrders(java.util.stream.Stream.concat(builder.build().getSalesOrders()==null?java.util.stream.Stream.empty():builder.build().getSalesOrders().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.SaleOrderItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == PURCHASE_INVOICES) builder.purchaseInvoices(java.util.stream.Stream.concat(builder.build().getPurchaseInvoices()==null?java.util.stream.Stream.empty():builder.build().getPurchaseInvoices().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.PurchaseInvoiceItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == PURCHASE_ORDERS) builder.purchaseOrders(java.util.stream.Stream.concat(builder.build().getPurchaseOrders()==null?java.util.stream.Stream.empty():builder.build().getPurchaseOrders().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.PurchaseOrderItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == RISTOURNE_PAIEMENTS) builder.ristournePaiements(java.util.stream.Stream.concat(builder.build().getRistournePaiements()==null?java.util.stream.Stream.empty():builder.build().getRistournePaiements().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.RistournePaiementItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == REMISE_PAIEMENTS) builder.remisePaiements(java.util.stream.Stream.concat(builder.build().getRemisePaiements()==null?java.util.stream.Stream.empty():builder.build().getRemisePaiements().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.RemisePaiementItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == VENTES_JOUR_PAR_ENTREPOT) builder.ventesJourParEntrepot(java.util.stream.Stream.concat(builder.build().getVentesJourParEntrepot()==null?java.util.stream.Stream.empty():builder.build().getVentesJourParEntrepot().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.WarehouseDailySalesItem) item)).collect(java.util.stream.Collectors.toList()));
        else if (sourceKey == ACCOUNTS) builder.accounts(java.util.stream.Stream.concat(builder.build().getAccounts()==null?java.util.stream.Stream.empty():builder.build().getAccounts().stream(), java.util.stream.Stream.of((SpokeSnapshotPayload.AccountItem) item)).collect(java.util.stream.Collectors.toList()));
        else {
            // Unknown source — ignore
        }
    }

    private void removeLastFromBuilder(SpokeSnapshotPayload.SpokeSnapshotPayloadBuilder builder,
                                       java.util.function.Function<SpokeSnapshotPayload, java.util.List<?>> sourceKey) {
        // Rebuild list without last element
        SpokeSnapshotPayload built = builder.build();
        if (sourceKey == SALE_INVOICES && built.getSaleInvoices() != null && !built.getSaleInvoices().isEmpty())
            builder.saleInvoices(new java.util.ArrayList<>(built.getSaleInvoices().subList(0, built.getSaleInvoices().size() - 1)));
        else if (sourceKey == ACCOUNT_MOVE_LINES && built.getAccountMoveLines() != null && !built.getAccountMoveLines().isEmpty())
            builder.accountMoveLines(new java.util.ArrayList<>(built.getAccountMoveLines().subList(0, built.getAccountMoveLines().size() - 1)));
        else if (sourceKey == PRODUCTS && built.getProducts() != null && !built.getProducts().isEmpty())
            builder.products(new java.util.ArrayList<>(built.getProducts().subList(0, built.getProducts().size() - 1)));
        else if (sourceKey == PARTNERS && built.getPartners() != null && !built.getPartners().isEmpty())
            builder.partners(new java.util.ArrayList<>(built.getPartners().subList(0, built.getPartners().size() - 1)));
        else if (sourceKey == TOP_STOCK && built.getTopStock() != null && !built.getTopStock().isEmpty())
            builder.topStock(new java.util.ArrayList<>(built.getTopStock().subList(0, built.getTopStock().size() - 1)));
        else if (sourceKey == SALES_ORDERS && built.getSalesOrders() != null && !built.getSalesOrders().isEmpty())
            builder.salesOrders(new java.util.ArrayList<>(built.getSalesOrders().subList(0, built.getSalesOrders().size() - 1)));
        else if (sourceKey == PURCHASE_INVOICES && built.getPurchaseInvoices() != null && !built.getPurchaseInvoices().isEmpty())
            builder.purchaseInvoices(new java.util.ArrayList<>(built.getPurchaseInvoices().subList(0, built.getPurchaseInvoices().size() - 1)));
        else if (sourceKey == PURCHASE_ORDERS && built.getPurchaseOrders() != null && !built.getPurchaseOrders().isEmpty())
            builder.purchaseOrders(new java.util.ArrayList<>(built.getPurchaseOrders().subList(0, built.getPurchaseOrders().size() - 1)));
        else if (sourceKey == RISTOURNE_PAIEMENTS && built.getRistournePaiements() != null && !built.getRistournePaiements().isEmpty())
            builder.ristournePaiements(new java.util.ArrayList<>(built.getRistournePaiements().subList(0, built.getRistournePaiements().size() - 1)));
        else if (sourceKey == REMISE_PAIEMENTS && built.getRemisePaiements() != null && !built.getRemisePaiements().isEmpty())
            builder.remisePaiements(new java.util.ArrayList<>(built.getRemisePaiements().subList(0, built.getRemisePaiements().size() - 1)));
        else if (sourceKey == VENTES_JOUR_PAR_ENTREPOT && built.getVentesJourParEntrepot() != null && !built.getVentesJourParEntrepot().isEmpty())
            builder.ventesJourParEntrepot(new java.util.ArrayList<>(built.getVentesJourParEntrepot().subList(0, built.getVentesJourParEntrepot().size() - 1)));
        else if (sourceKey == ACCOUNTS && built.getAccounts() != null && !built.getAccounts().isEmpty())
            builder.accounts(new java.util.ArrayList<>(built.getAccounts().subList(0, built.getAccounts().size() - 1)));
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
