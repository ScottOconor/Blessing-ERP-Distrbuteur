package com.erp.declaration.service;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.accounting.service.FiscalLockGuard;
import com.erp.audit.service.AuditService;
import com.erp.common.service.TenantGuard;
import com.erp.declaration.dto.DeclarationBatchDTO;
import com.erp.declaration.dto.InvoiceGenerationPlan;
import com.erp.declaration.dto.InvoiceGenerationPlan.PlannedInvoice;
import com.erp.declaration.dto.InvoiceGenerationPlan.PlannedLine;
import com.erp.declaration.dto.InvoiceGenerationRequest;
import com.erp.declaration.entity.DeclarationBatch;
import com.erp.declaration.repository.DeclarationBatchRepository;
import com.erp.sales.dto.InvoicePaymentRequest;
import com.erp.sales.dto.SalesInvoiceDTO;
import com.erp.sales.dto.SalesInvoiceRequest;
import com.erp.sales.service.SalesService;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.StockQuant;
import com.erp.stock.entity.Warehouse;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.StockQuantRepository;
import com.erp.stock.repository.WarehouseRepository;
import jakarta.annotation.PreDestroy;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.concurrent.DelegatingSecurityContextRunnable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Module Déclaration — génération automatique de factures de vente pour un montant total donné.
 *
 * Deux étapes :
 *  1. {@link #preview} calcule un plan en mémoire (rien n'est écrit) : le total est réparti
 *     aléatoirement en N montants compris dans l'intervalle [min, max], chaque facture reçoit une
 *     date aléatoire dans la période, un client et un entrepôt tirés au hasard, puis des articles
 *     tirés au hasard parmi ceux réellement en stock dans cet entrepôt (jamais au-delà du stock
 *     disponible, réservations déduites).
 *  2. {@link #generate} crée puis valide chaque facture du plan via le circuit normal des ventes
 *     (SalesService.createInvoice + postInvoice) : écriture comptable, TVA et mouvements de stock
 *     sont donc produits exactement comme pour une facture saisie à la main. Le tout est fait dans
 *     une seule transaction : si une facture échoue (stock insuffisant, période clôturée…), aucune
 *     facture n'est créée.
 */
@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class InvoiceGeneratorService {

    /** Taux de TVA par défaut appliqué aux articles non exonérés (identique aux écrans de vente). */
    private static final BigDecimal DEFAULT_TVA = new BigDecimal("19.25");
    private static final String REVENUE_ACCOUNT = "701100";
    private static final BigDecimal HUNDRED = BigDecimal.valueOf(100);
    private static final int MAX_INVOICES = 1000;
    private static final int MAX_LINES_PER_INVOICE = 20;
    private static final int MAX_DESIRED_LINES = 6;
    /** Écart toléré entre total demandé et total atteint, dû à la granularité des prix articles. */
    private static final BigDecimal TOLERANCE_RATE = new BigDecimal("0.01");

    private final SalesService salesService;
    private final WarehouseRepository warehouseRepo;
    private final StockQuantRepository stockQuantRepo;
    private final ProductRepository productRepo;
    private final PartnerRepository partnerRepo;
    private final AccountJournalRepository journalRepo;
    private final FiscalLockGuard fiscalLockGuard;
    private final TenantGuard tenantGuard;
    private final AuditService auditService;
    private final DeclarationBatchRepository batchRepo;
    private final PlatformTransactionManager transactionManager;

    /** Un seul fil de génération : les séries s'exécutent l'une après l'autre, sans saturer le pool de connexions. */
    private final ExecutorService executor = Executors.newSingleThreadExecutor(r -> {
        Thread t = new Thread(r, "declaration-generator");
        t.setDaemon(true);
        return t;
    });

    // ===================== APERÇU =====================

    @Transactional(readOnly = true)
    public InvoiceGenerationPlan preview(InvoiceGenerationRequest req) {
        validateRequest(req);
        Long companyId = req.getCompanyId();
        tenantGuard.check(companyId);

        long total = req.getTotalAmount().setScale(0, RoundingMode.HALF_UP).longValue();
        long min = req.getMinAmount().setScale(0, RoundingMode.HALF_UP).longValue();
        long max = req.getMaxAmount().setScale(0, RoundingMode.HALF_UP).longValue();
        int count = req.getCount();
        ThreadLocalRandom rnd = ThreadLocalRandom.current();

        List<Partner> clients = findClients(companyId);
        if (clients.isEmpty()) {
            throw new IllegalStateException("Aucun client actif dans le système : aucune facture n'a été générée.");
        }

        List<Warehouse> warehouses = findSalesWarehouses(companyId);
        Map<Long, Product> products = productRepo.findByCompanyIdAndActiveOrderByNameAsc(companyId, true).stream()
                .filter(p -> !"service".equals(p.getType()))
                .filter(p -> p.getSalePrice() != null && p.getSalePrice().compareTo(BigDecimal.ZERO) > 0)
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // Stock disponible par entrepôt : quantité physique − réservations, en unités entières.
        Map<Long, Map<Long, Long>> stock = new LinkedHashMap<>();
        for (Warehouse wh : warehouses) {
            Map<Long, Long> byProduct = new HashMap<>();
            for (StockQuant q : stockQuantRepo.findByLocationIdAndCompanyId(wh.getStockLocationId(), companyId)) {
                if (!products.containsKey(q.getProductId())) continue;
                BigDecimal qty = q.getQuantity() != null ? q.getQuantity() : BigDecimal.ZERO;
                BigDecimal reserved = q.getReservedQuantity() != null ? q.getReservedQuantity() : BigDecimal.ZERO;
                long available = qty.subtract(reserved).setScale(0, RoundingMode.FLOOR).longValue();
                if (available > 0) byProduct.merge(q.getProductId(), available, Long::sum);
            }
            if (!byProduct.isEmpty()) stock.put(wh.getId(), byProduct);
        }
        if (stock.isEmpty()) {
            throw new IllegalStateException("Aucun article en stock dans les entrepôts : aucune facture n'a été générée.");
        }
        Map<Long, Warehouse> warehouseById = warehouses.stream()
                .collect(Collectors.toMap(Warehouse::getId, Function.identity()));
        for (Long whId : stock.keySet()) {
            resolveJournalId(warehouseById.get(whId), companyId);
            resolvePaymentJournalId(warehouseById.get(whId), companyId);
        }

        List<LocalDate> dates = randomDates(req.getDateFrom(), req.getDateTo(), count, rnd);
        for (LocalDate d : new TreeSet<>(dates)) fiscalLockGuard.assertPeriodOpen(companyId, d);

        long[] targets = splitTotal(total, count, min, max, rnd);

        InvoiceGenerationPlan plan = InvoiceGenerationPlan.builder()
                .companyId(companyId)
                .notes(req.getNotes())
                .dateFrom(req.getDateFrom())
                .dateTo(req.getDateTo())
                .minAmount(BigDecimal.valueOf(min))
                .maxAmount(BigDecimal.valueOf(max))
                .requestedTotal(BigDecimal.valueOf(total))
                .build();

        // Référence stable sur le stock restant de chaque entrepôt (stock en retire les entrepôts épuisés).
        Map<Long, Map<Long, Long>> availableByWarehouse = new HashMap<>(stock);
        long carry = 0;
        long plannedTotal = 0;
        for (int i = 0; i < count; i++) {
            long wanted = targets[i] + carry;
            long target = Math.min(max, wanted);
            carry = wanted - target;

            PlannedInvoice inv = buildInvoice(target, min, stock, products, warehouseById, rnd);
            if (inv == null) {
                carry += target;
                continue;
            }
            Partner client = clients.get(rnd.nextInt(clients.size()));
            inv.setPartnerId(client.getId());
            inv.setPartnerName(client.getName());
            inv.setDate(dates.get(i));
            plan.getInvoices().add(inv);

            long net = inv.getNetAPayer().longValue();
            plannedTotal += net;
            carry += target - net;
        }

        int planned = plan.getInvoices().size();
        long shortfall = absorbShortfall(plan.getInvoices(), total - plannedTotal, max,
                availableByWarehouse, products, rnd);
        plannedTotal = total - shortfall;
        if (planned < count) {
            throw new IllegalStateException(String.format(
                    "Stock insuffisant : seulement %d facture(s) sur %d ont pu être constituées dans l'intervalle de prix "
                    + "(%s FCFA atteints sur %s). Aucune facture n'a été générée.",
                    planned, count, fmt(plannedTotal), fmt(total)));
        }
        long tolerance = BigDecimal.valueOf(total).multiply(TOLERANCE_RATE).setScale(0, RoundingMode.HALF_UP).longValue();
        if (shortfall > tolerance) {
            throw new IllegalStateException(String.format(
                    "Stock insuffisant pour atteindre le montant demandé : %s FCFA possibles sur %s. "
                    + "Aucune facture n'a été générée.", fmt(plannedTotal), fmt(total)));
        }
        if (shortfall != 0) {
            plan.getWarnings().add(String.format(
                    "Écart de %s FCFA avec le montant demandé, dû aux prix unitaires des articles.", fmt(shortfall)));
        }
        plan.setPlannedTotal(BigDecimal.valueOf(plannedTotal));
        return plan;
    }

    // ===================== GÉNÉRATION (ARRIÈRE-PLAN) =====================

    /** Facture du plan, contrôlée et prête à être créée. */
    private record PreparedInvoice(SalesInvoiceRequest request, Long paymentJournalId, LocalDate date) {}

    /**
     * Démarre la génération en arrière-plan et rend la main tout de suite (statut RUNNING).
     *
     * Chaque facture est créée, validée et réglée dans sa propre transaction courte : une seule
     * transaction pour toute la série gardait en mémoire Hibernate toutes les entités créées
     * (factures, écritures, mouvements de stock, événements outbox…) — chaque requête suivante
     * re-vérifiait l'ensemble avant de s'exécuter (coût quadratique) — et laissait verrouillés
     * jusqu'à la fin les stocks et factures touchés, bloquant les autres utilisateurs.
     * Contrepartie : en cas d'erreur en cours de route, les factures déjà créées restent (complètes
     * et cohérentes) et la génération est marquée FAILED avec le message d'erreur.
     */
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public DeclarationBatchDTO generate(InvoiceGenerationPlan plan) {
        if (plan == null || plan.getCompanyId() == null) {
            throw new IllegalArgumentException("Plan de génération invalide");
        }
        if (plan.getInvoices() == null || plan.getInvoices().isEmpty()) {
            throw new IllegalArgumentException("Aucune facture à générer");
        }
        if (plan.getInvoices().size() > MAX_INVOICES) {
            throw new IllegalArgumentException("Nombre de factures limité à " + MAX_INVOICES);
        }
        Long companyId = plan.getCompanyId();
        tenantGuard.check(companyId);
        if (batchRepo.existsByCompanyIdAndStatus(companyId, DeclarationBatch.RUNNING)) {
            throw new IllegalStateException("Une génération est déjà en cours : attendez qu'elle se termine.");
        }

        List<PreparedInvoice> prepared = prepare(plan);
        DeclarationBatch batch = batchRepo.save(DeclarationBatch.builder()
                .companyId(companyId)
                .createdBy(auditService.getCurrentUsername())
                .dateFrom(plan.getDateFrom())
                .dateTo(plan.getDateTo())
                .minAmount(plan.getMinAmount())
                .maxAmount(plan.getMaxAmount())
                .requestedTotal(plan.getRequestedTotal())
                .generatedTotal(BigDecimal.ZERO)
                .invoiceCount(prepared.size())
                .processedCount(0)
                .status(DeclarationBatch.RUNNING)
                .notes(plan.getNotes())
                .build());

        Long batchId = batch.getId();
        // Le thread de génération reprend l'utilisateur courant (contrôles d'accès, audit, « validé par »).
        executor.execute(new DelegatingSecurityContextRunnable(
                () -> runGeneration(batchId, companyId, prepared), SecurityContextHolder.getContext()));
        return toBatchDTO(batch, null);
    }

    private void runGeneration(Long batchId, Long companyId, List<PreparedInvoice> prepared) {
        TransactionTemplate tx = new TransactionTemplate(transactionManager);
        tx.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        int index = 0;
        try {
            for (PreparedInvoice p : prepared) {
                index++;
                tx.executeWithoutResult(status -> {
                    SalesInvoiceDTO draft = salesService.createInvoice(p.request());
                    SalesInvoiceDTO posted = salesService.postInvoice(draft.getId());
                    // Règlement intégral à la date de la facture (Dr caisse/banque / Cr client) : facture « payée ».
                    salesService.createPayment(InvoicePaymentRequest.builder()
                            .invoiceId(posted.getId())
                            .journalId(p.paymentJournalId())
                            .date(p.date())
                            .amount(posted.getMontantDu())
                            .memo("Règlement " + posted.getName())
                            .companyId(companyId)
                            .build());
                    // Avancement enregistré dans la même transaction : jamais de facture créée hors historique.
                    DeclarationBatch b = batchRepo.findById(batchId).orElseThrow();
                    b.getInvoiceIds().add(posted.getId());
                    b.setProcessedCount(b.getInvoiceIds().size());
                    b.setGeneratedTotal(b.getGeneratedTotal().add(
                            posted.getNetAPayer() != null ? posted.getNetAPayer() : BigDecimal.ZERO));
                });
            }
            DeclarationBatch done = tx.execute(status -> {
                DeclarationBatch b = batchRepo.findById(batchId).orElseThrow();
                b.setStatus(DeclarationBatch.DONE);
                return b;
            });
            auditService.log("DECLARATION", batchId, "Génération #" + batchId,
                    "GENERATED", "Génération automatique de factures",
                    done.getProcessedCount() + " factures validées et réglées pour un total de "
                            + fmt(done.getGeneratedTotal().longValue()) + " FCFA", companyId);
        } catch (Exception e) {
            log.error("Génération de factures #{} interrompue à la facture {}/{}", batchId, index, prepared.size(), e);
            String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            String message = "Interrompue à la facture " + index + "/" + prepared.size() + " : " + reason;
            tx.executeWithoutResult(status -> batchRepo.findById(batchId).ifPresent(b -> {
                b.setStatus(DeclarationBatch.FAILED);
                b.setErrorMessage(message.length() > 1000 ? message.substring(0, 1000) : message);
            }));
        }
    }

    /** Contrôle tout le plan avant de commencer, pour ne pas échouer au milieu sur une donnée invalide. */
    private List<PreparedInvoice> prepare(InvoiceGenerationPlan plan) {
        Long companyId = plan.getCompanyId();
        Map<Long, Warehouse> warehouseById = findSalesWarehouses(companyId).stream()
                .collect(Collectors.toMap(Warehouse::getId, Function.identity()));
        Map<Long, Partner> clientById = findClients(companyId).stream()
                .collect(Collectors.toMap(Partner::getId, Function.identity()));
        Map<Long, Product> productById = productRepo.findByCompanyIdAndActiveOrderByNameAsc(companyId, true).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // Création dans l'ordre chronologique : la numérotation FAC-AAAA-NNNNN suit les dates.
        List<PlannedInvoice> ordered = new ArrayList<>(plan.getInvoices());
        ordered.sort(Comparator.comparing(PlannedInvoice::getDate, Comparator.nullsLast(Comparator.naturalOrder())));

        List<PreparedInvoice> prepared = new ArrayList<>();
        for (PlannedInvoice inv : ordered) {
            if (inv.getDate() == null) throw new IllegalArgumentException("Date de facture manquante");
            Warehouse wh = warehouseById.get(inv.getWarehouseId());
            if (wh == null) throw new IllegalArgumentException("Entrepôt invalide : " + inv.getWarehouseId());
            if (!clientById.containsKey(inv.getPartnerId())) {
                throw new IllegalArgumentException("Client invalide : " + inv.getPartnerId());
            }
            if (inv.getLines() == null || inv.getLines().isEmpty()) {
                throw new IllegalArgumentException("Facture sans ligne dans le plan");
            }
            fiscalLockGuard.assertPeriodOpen(companyId, inv.getDate());

            List<SalesInvoiceRequest.LineRequest> lines = new ArrayList<>();
            for (PlannedLine pl : inv.getLines()) {
                Product p = productById.get(pl.getProductId());
                if (p == null) throw new IllegalArgumentException("Article invalide : " + pl.getProductId());
                if (pl.getQuantity() == null || pl.getQuantity().signum() <= 0
                        || pl.getPrixUnitaire() == null || pl.getPrixUnitaire().signum() <= 0) {
                    throw new IllegalArgumentException("Ligne invalide pour l'article " + p.getName());
                }
                lines.add(SalesInvoiceRequest.LineRequest.builder()
                        .productId(p.getId())
                        .productCode(p.getDefaultCode())
                        .description(p.getName())
                        .quantity(pl.getQuantity())
                        .prixUnitaire(pl.getPrixUnitaire())
                        .tauxTVA(tvaRate(p))
                        .accountCode(REVENUE_ACCOUNT)
                        .categoryId(p.getCategoryId())
                        .rabaisUnitaire(BigDecimal.ZERO)
                        .build());
            }

            prepared.add(new PreparedInvoice(SalesInvoiceRequest.builder()
                    .type("invoice")
                    .companyId(companyId)
                    .partnerId(inv.getPartnerId())
                    .journalId(resolveJournalId(wh, companyId))
                    .warehouseId(wh.getId())
                    .date(inv.getDate())
                    .dateEcheance(inv.getDate())
                    .notes(plan.getNotes())
                    .lines(lines)
                    .build(), resolvePaymentJournalId(wh, companyId), inv.getDate()));
        }
        return prepared;
    }

    /** Au démarrage : une génération « en cours » a été coupée par l'arrêt du serveur. */
    @EventListener(ApplicationReadyEvent.class)
    public void markInterruptedBatches() {
        int n = batchRepo.markRunningAsFailed("Interrompue par un redémarrage du serveur");
        if (n > 0) log.warn("{} génération(s) de factures interrompue(s) par l'arrêt du serveur", n);
    }

    @PreDestroy
    void shutdownExecutor() {
        executor.shutdown();
    }

    // ===================== HISTORIQUE =====================

    @Transactional(readOnly = true)
    public List<DeclarationBatchDTO> getBatches(Long companyId, int limit) {
        tenantGuard.check(companyId);
        return batchRepo.findByCompanyIdOrderByCreatedAtDesc(companyId, PageRequest.of(0, Math.max(1, Math.min(limit, 500))))
                .stream().map(b -> toBatchDTO(b, null)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public DeclarationBatchDTO getBatchStatus(Long id) {
        DeclarationBatch batch = batchRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Génération introuvable : " + id));
        tenantGuard.check(batch.getCompanyId());
        return toBatchDTO(batch, null);
    }

    /** Détail d'une génération avec l'état actuel de ses factures (une facture supprimée depuis est ignorée). */
    @Transactional(readOnly = true)
    public DeclarationBatchDTO getBatch(Long id) {
        DeclarationBatch batch = batchRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Génération introuvable : " + id));
        tenantGuard.check(batch.getCompanyId());
        List<SalesInvoiceDTO> invoices = new ArrayList<>();
        for (Long invoiceId : batch.getInvoiceIds()) {
            try {
                invoices.add(salesService.getInvoiceById(invoiceId));
            } catch (EntityNotFoundException e) {
                log.warn("Facture {} de la génération {} introuvable", invoiceId, id);
            }
        }
        return toBatchDTO(batch, invoices);
    }

    private DeclarationBatchDTO toBatchDTO(DeclarationBatch b, List<SalesInvoiceDTO> invoices) {
        return DeclarationBatchDTO.builder()
                .id(b.getId())
                .createdAt(b.getCreatedAt())
                .createdBy(b.getCreatedBy())
                .dateFrom(b.getDateFrom())
                .dateTo(b.getDateTo())
                .minAmount(b.getMinAmount())
                .maxAmount(b.getMaxAmount())
                .requestedTotal(b.getRequestedTotal())
                .generatedTotal(b.getGeneratedTotal())
                .invoiceCount(b.getInvoiceCount())
                .notes(b.getNotes())
                .status(b.getStatus() != null ? b.getStatus() : DeclarationBatch.DONE)
                .processedCount(b.getProcessedCount() != null ? b.getProcessedCount() : b.getInvoiceCount())
                .errorMessage(b.getErrorMessage())
                .invoices(invoices)
                .build();
    }

    // ===================== CONSTRUCTION D'UNE FACTURE =====================

    /** Essaie les entrepôts dans un ordre aléatoire jusqu'à obtenir une facture ≥ min. */
    private PlannedInvoice buildInvoice(long target, long min, Map<Long, Map<Long, Long>> stock,
                                        Map<Long, Product> products, Map<Long, Warehouse> warehouseById,
                                        ThreadLocalRandom rnd) {
        List<Long> whIds = new ArrayList<>(stock.keySet());
        Collections.shuffle(whIds, rnd);
        for (Long whId : whIds) {
            Map<Long, Long> available = stock.get(whId);
            List<PlannedLine> lines = fillLines(target, available, products, rnd);
            if (lines.isEmpty()) continue;
            Totals t = totals(lines);
            if (t.net < min) continue;

            // Le stock est consommé : les factures suivantes ne peuvent plus l'utiliser.
            for (PlannedLine l : lines) {
                available.merge(l.getProductId(), -l.getQuantity().longValue(), Long::sum);
            }
            available.values().removeIf(q -> q <= 0);
            if (available.isEmpty()) stock.remove(whId);

            return PlannedInvoice.builder()
                    .warehouseId(whId)
                    .warehouseName(warehouseById.get(whId).getName())
                    .totalHT(t.ht)
                    .totalTVA(t.tva)
                    .netAPayer(BigDecimal.valueOf(t.net))
                    .lines(lines)
                    .build();
        }
        return null;
    }

    /**
     * Tire des articles au hasard dans le stock de l'entrepôt sans dépasser le montant cible :
     * quelques lignes réparties (1 à 6), puis complète au besoin pour se rapprocher de la cible.
     */
    private List<PlannedLine> fillLines(long target, Map<Long, Long> available,
                                        Map<Long, Product> products, ThreadLocalRandom rnd) {
        List<PlannedLine> lines = new ArrayList<>();
        Set<Long> used = new HashSet<>();
        int desiredLines = 1 + rnd.nextInt(MAX_DESIRED_LINES);

        while (lines.size() < MAX_LINES_PER_INVOICE) {
            long remaining = target - totals(lines).net;
            if (remaining <= 0) break;
            List<Long> candidates = new ArrayList<>();
            for (Map.Entry<Long, Long> e : available.entrySet()) {
                if (e.getValue() < 1 || used.contains(e.getKey())) continue;
                if (unitTTC(products.get(e.getKey())).compareTo(BigDecimal.valueOf(remaining)) <= 0) {
                    candidates.add(e.getKey());
                }
            }
            if (candidates.isEmpty()) break;

            Product p = products.get(candidates.get(rnd.nextInt(candidates.size())));
            used.add(p.getId());
            long maxQty = Math.min(available.get(p.getId()),
                    BigDecimal.valueOf(remaining).divide(unitTTC(p), 0, RoundingMode.FLOOR).longValue());
            if (maxQty < 1) continue;

            int linesLeft = desiredLines - lines.size();
            long qty = linesLeft <= 1 ? maxQty : 1 + rnd.nextLong(Math.max(1, maxQty / linesLeft));

            PlannedLine line = PlannedLine.builder()
                    .productId(p.getId())
                    .productCode(p.getDefaultCode())
                    .productName(p.getName())
                    .prixUnitaire(p.getSalePrice())
                    .tauxTVA(tvaRate(p))
                    .build();
            lines.add(line);
            // Les arrondis peuvent faire dépasser la cible d'un franc : on réduit la quantité.
            while (qty > 0) {
                setQuantity(line, qty);
                if (totals(lines).net <= target) break;
                qty--;
            }
            if (qty == 0) lines.remove(line);
        }

        // Plus d'article nouveau possible : on augmente les quantités des lignes existantes.
        Map<Long, Long> extra = new HashMap<>();
        for (PlannedLine l : lines) extra.put(l.getProductId(), available.get(l.getProductId()) - l.getQuantity().longValue());
        topUp(lines, target, extra, products, rnd);
        return lines;
    }

    /**
     * Augmente les quantités des lignes existantes (dans la limite de {@code extraAvailable}, par
     * article) pour se rapprocher de la cible sans la dépasser. Retourne les quantités ajoutées.
     */
    private Map<Long, Long> topUp(List<PlannedLine> lines, long target, Map<Long, Long> extraAvailable,
                                  Map<Long, Product> products, ThreadLocalRandom rnd) {
        Map<Long, Long> added = new HashMap<>();
        List<PlannedLine> order = new ArrayList<>(lines);
        Collections.shuffle(order, rnd);
        for (PlannedLine l : order) {
            long remaining = target - totals(lines).net;
            if (remaining <= 0) break;
            long extra = extraAvailable.getOrDefault(l.getProductId(), 0L);
            long add = Math.min(extra, BigDecimal.valueOf(remaining)
                    .divide(unitTTC(products.get(l.getProductId())), 0, RoundingMode.FLOOR).longValue());
            long base = l.getQuantity().longValue();
            while (add > 0) {
                setQuantity(l, base + add);
                if (totals(lines).net <= target) break;
                add--;
            }
            if (add > 0) added.put(l.getProductId(), add);
            else setQuantity(l, base);
        }
        return added;
    }

    /**
     * Le reliquat non placé (plafond max atteint en fin de série, stock épuisé…) est réparti sur
     * les factures qui ont encore de la marge sous le maximum, avec le stock restant de leur entrepôt.
     */
    private long absorbShortfall(List<PlannedInvoice> invoices, long shortfall, long max,
                                 Map<Long, Map<Long, Long>> availableByWarehouse,
                                 Map<Long, Product> products, ThreadLocalRandom rnd) {
        List<PlannedInvoice> order = new ArrayList<>(invoices);
        Collections.shuffle(order, rnd);
        for (PlannedInvoice inv : order) {
            if (shortfall <= 0) break;
            long net = inv.getNetAPayer().longValue();
            long room = Math.min(max - net, shortfall);
            if (room <= 0) continue;
            Map<Long, Long> available = availableByWarehouse.get(inv.getWarehouseId());
            Map<Long, Long> added = topUp(inv.getLines(), net + room, available, products, rnd);
            added.forEach((pid, q) -> available.merge(pid, -q, Long::sum));
            Totals t = totals(inv.getLines());
            inv.setTotalHT(t.ht);
            inv.setTotalTVA(t.tva);
            inv.setNetAPayer(BigDecimal.valueOf(t.net));
            shortfall -= t.net - net;
        }
        return shortfall;
    }

    private void setQuantity(PlannedLine line, long qty) {
        line.setQuantity(BigDecimal.valueOf(qty));
        BigDecimal ht = lineHT(line);
        line.setMontantTTC(ht.add(lineTVA(line, ht)).setScale(0, RoundingMode.HALF_UP));
    }

    private record Totals(BigDecimal ht, BigDecimal tva, long net) {}

    /**
     * Net à payer tel que comptabilisé par SalesService.postInvoice : Σ HT arrondis au franc
     * + TVA totale arrondie au franc (aucun rabais, aucun service).
     */
    private Totals totals(List<PlannedLine> lines) {
        BigDecimal ht = BigDecimal.ZERO, htRounded = BigDecimal.ZERO, tva = BigDecimal.ZERO;
        for (PlannedLine l : lines) {
            if (l.getQuantity() == null) continue;
            BigDecimal lineHt = lineHT(l);
            ht = ht.add(lineHt);
            htRounded = htRounded.add(lineHt.setScale(0, RoundingMode.HALF_UP));
            tva = tva.add(lineTVA(l, lineHt));
        }
        long net = htRounded.add(tva.setScale(0, RoundingMode.HALF_UP)).longValue();
        return new Totals(ht, tva, net);
    }

    private BigDecimal lineHT(PlannedLine l) {
        return l.getQuantity().multiply(l.getPrixUnitaire()).setScale(2, RoundingMode.HALF_UP);
    }

    private BigDecimal lineTVA(PlannedLine l, BigDecimal ht) {
        return ht.multiply(l.getTauxTVA()).divide(HUNDRED, 2, RoundingMode.HALF_UP);
    }

    private BigDecimal tvaRate(Product p) {
        return Boolean.TRUE.equals(p.getExemptTva()) ? BigDecimal.ZERO : DEFAULT_TVA;
    }

    private BigDecimal unitTTC(Product p) {
        return p.getSalePrice().multiply(BigDecimal.ONE.add(tvaRate(p).divide(HUNDRED, 6, RoundingMode.HALF_UP)));
    }

    // ===================== RÉPARTITION & DATES =====================

    /** Répartit aléatoirement {@code total} en {@code n} montants entiers compris dans [min, max]. */
    private long[] splitTotal(long total, int n, long min, long max, ThreadLocalRandom rnd) {
        long[] parts = new long[n];
        Arrays.fill(parts, min);
        long remaining = total - min * n;
        while (remaining > 0) {
            List<Integer> open = new ArrayList<>();
            for (int i = 0; i < n; i++) if (parts[i] < max) open.add(i);
            double[] weights = new double[open.size()];
            double sum = 0;
            for (int k = 0; k < weights.length; k++) { weights[k] = rnd.nextDouble(0.05, 1.0); sum += weights[k]; }

            long distributed = 0;
            for (int k = 0; k < open.size(); k++) {
                int i = open.get(k);
                long share = Math.min(max - parts[i], (long) Math.floor(remaining * weights[k] / sum));
                parts[i] += share;
                distributed += share;
            }
            if (distributed == 0) {
                // Reliquat trop petit pour être réparti proportionnellement : un franc à la fois.
                int i = open.get(rnd.nextInt(open.size()));
                long share = Math.min(max - parts[i], remaining);
                parts[i] += share;
                distributed = share;
            }
            remaining -= distributed;
        }
        // Ordre aléatoire pour ne pas lier les gros montants aux premières dates.
        for (int i = n - 1; i > 0; i--) {
            int j = rnd.nextInt(i + 1);
            long tmp = parts[i]; parts[i] = parts[j]; parts[j] = tmp;
        }
        return parts;
    }

    private List<LocalDate> randomDates(LocalDate from, LocalDate to, int n, ThreadLocalRandom rnd) {
        long days = ChronoUnit.DAYS.between(from, to);
        List<LocalDate> dates = new ArrayList<>(n);
        for (int i = 0; i < n; i++) dates.add(from.plusDays(rnd.nextLong(days + 1)));
        Collections.sort(dates);
        return dates;
    }

    // ===================== RÉFÉRENTIELS =====================

    private List<Partner> findClients(Long companyId) {
        return partnerRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(p -> "customer".equals(p.getType()) || "both".equals(p.getType()))
                .collect(Collectors.toList());
    }

    /**
     * Entrepôts de vente : actifs, avec un emplacement de stock, hors entrepôts techniques
     * « Dépôt Achat » (transit) et « Avaries » rattachés à un autre entrepôt.
     */
    private List<Warehouse> findSalesWarehouses(Long companyId) {
        List<Warehouse> all = warehouseRepo.findByCompanyIdOrderByNameAsc(companyId);
        Set<Long> technical = new HashSet<>();
        for (Warehouse w : all) {
            if (w.getDepotAchatWarehouseId() != null) technical.add(w.getDepotAchatWarehouseId());
            if (w.getAvarWarehouseId() != null) technical.add(w.getAvarWarehouseId());
        }
        return all.stream()
                .filter(Warehouse::isActive)
                .filter(w -> w.getStockLocationId() != null)
                .filter(w -> !technical.contains(w.getId()))
                .collect(Collectors.toList());
    }

    /** Journal de vente de l'entrepôt, sinon le premier journal de ventes actif de la société. */
    private Long resolveJournalId(Warehouse wh, Long companyId) {
        if (wh.getSalesJournalId() != null) return wh.getSalesJournalId();
        return journalRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(j -> "sale".equals(j.getType()))
                .map(AccountJournal::getId)
                .findFirst()
                .orElseThrow(() -> new IllegalStateException(
                        "Aucun journal de ventes configuré (entrepôt « " + wh.getName() + " » ou société)"));
    }

    /** Journal de caisse de l'entrepôt, sinon le premier journal de caisse (puis de banque) actif. */
    private Long resolvePaymentJournalId(Warehouse wh, Long companyId) {
        if (wh.getCashJournalId() != null) return wh.getCashJournalId();
        List<AccountJournal> journals = journalRepo.findByCompanyIdAndActiveTrue(companyId);
        return journals.stream().filter(j -> "cash".equals(j.getType())).map(AccountJournal::getId).findFirst()
                .or(() -> journals.stream().filter(j -> "bank".equals(j.getType())).map(AccountJournal::getId).findFirst())
                .orElseThrow(() -> new IllegalStateException(
                        "Aucun journal de caisse ou de banque pour régler les factures (entrepôt « " + wh.getName() + " »)"));
    }

    private void validateRequest(InvoiceGenerationRequest req) {
        if (req == null || req.getCompanyId() == null) throw new IllegalArgumentException("Société manquante");
        if (req.getTotalAmount() == null || req.getTotalAmount().signum() <= 0) {
            throw new IllegalArgumentException("Le montant total doit être supérieur à 0");
        }
        if (req.getCount() == null || req.getCount() < 1 || req.getCount() > MAX_INVOICES) {
            throw new IllegalArgumentException("Le nombre de factures doit être compris entre 1 et " + MAX_INVOICES);
        }
        if (req.getDateFrom() == null || req.getDateTo() == null) {
            throw new IllegalArgumentException("L'intervalle de dates est obligatoire");
        }
        if (req.getDateFrom().isAfter(req.getDateTo())) {
            throw new IllegalArgumentException("La date de début doit précéder la date de fin");
        }
        if (req.getMinAmount() == null || req.getMaxAmount() == null || req.getMinAmount().signum() <= 0) {
            throw new IllegalArgumentException("L'intervalle de prix des factures est obligatoire");
        }
        if (req.getMinAmount().compareTo(req.getMaxAmount()) > 0) {
            throw new IllegalArgumentException("Le montant minimum doit être inférieur au montant maximum");
        }
        BigDecimal n = BigDecimal.valueOf(req.getCount());
        BigDecimal lowest = req.getMinAmount().multiply(n);
        BigDecimal highest = req.getMaxAmount().multiply(n);
        if (req.getTotalAmount().compareTo(lowest) < 0 || req.getTotalAmount().compareTo(highest) > 0) {
            throw new IllegalArgumentException(String.format(
                    "Incohérence : %d factures entre %s et %s FCFA donnent un total compris entre %s et %s FCFA",
                    req.getCount(), fmt(req.getMinAmount().longValue()), fmt(req.getMaxAmount().longValue()),
                    fmt(lowest.longValue()), fmt(highest.longValue())));
        }
    }

    private static String fmt(long amount) {
        return String.format(Locale.FRANCE, "%,d", amount).replace(' ', ' ').replace(' ', ' ');
    }
}
