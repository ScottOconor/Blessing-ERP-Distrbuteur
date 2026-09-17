package com.erp.sync.service;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.AccountMoveLineRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.caisse.entity.Caisse;
import com.erp.caisse.entity.CaisseStatus;
import com.erp.caisse.repository.CaisseRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.repository.EnlevementRepository;
import com.erp.purchases.repository.PurchaseInvoiceRepository;
import com.erp.purchases.repository.PurchaseOrderRepository;
import com.erp.purchases.repository.RemisePaiementRepository;
import com.erp.sales.dto.SalesStatsRequest;
import com.erp.sales.dto.SalesStatsResponse;
import com.erp.sales.repository.RistournePaiementRepository;
import com.erp.sales.repository.SalesInvoiceRepository;
import com.erp.sales.repository.SalesOrderRepository;
import com.erp.sales.service.SalesStatsService;
import com.erp.stock.entity.StockQuant;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.StockQuantRepository;
import com.erp.sync.dto.SpokeSnapshotPayload;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class SnapshotService {

    private final CompanyRepository              companyRepo;
    private final com.erp.stock.service.ProductValuationService productValuationService;
    private final SalesInvoiceRepository         salesInvoiceRepo;
    private final PurchaseInvoiceRepository      purchaseInvoiceRepo;
    private final RistournePaiementRepository    ristournePaiementRepo;
    private final RemisePaiementRepository       remisePaiementRepo;
    private final EnlevementRepository           enlevementRepo;
    private final com.erp.common.service.EnlevementService enlevementService;
    private final AccountMoveLineRepository      moveLineRepo;
    private final StockQuantRepository           stockQuantRepo;
    private final ProductRepository              productRepo;
    private final SalesStatsService              salesStatsService;
    private final SyncEventPublisher             publisher;
    private final CaisseRepository               caisseRepo;
    private final AccountJournalRepository       journalRepo;
    private final PartnerRepository              partnerRepo;
    private final AccountAccountRepository       accountRepo;
    private final SalesOrderRepository           salesOrderRepo;
    private final PurchaseOrderRepository        purchaseOrderRepo;
    private final com.erp.stock.repository.WarehouseRepository warehouseRepo;

    @Value("${sync.spoke.id}")   private String spokeId;
    @Value("${sync.spoke.name}") private String spokeName;

    private static final Set<String> EMBALLAGE_CODES = Set.of(
        "PRC01","ELV01","CB24M","CB12M","CAIMET","CONS001","CB12","CB24","CV12","CV24",
        "PP","PB","TT","BPM","BGM","VIP24","VIP12","VCP24","VCP12",
        "EGUI24","EGUI12","EGUI15","CBG12","CBG15","CBG24",
        "VIPG12","VIPG15","VIPG24","CVG12","CVG15","CVG24",
        "EMB1","EMB2","EMB3","EMB4","EMB5","CAISMB","PALT-V","PALTPL"
    );

    private static final List<String> PAYEE_STATES     = List.of("done");
    private static final List<String> NON_PAYEE_STATES = List.of("draft", "confirmed");
    private static final List<String> DONE_STATES      = List.of("confirmed", "done");

    /** Snapshot horaire automatique — fenêtré (factures des 2 dernières années) pour rester léger
     *  sur un envoi qui tourne en continu. */
    @Transactional(readOnly = true)
    public void buildAndPublish() {
        buildAndPublish(false);
    }

    /**
     * @param full si vrai (déclenché manuellement via "Forcer envoi"), ignore la fenêtre de 2 ans
     *             sur les factures — récupère tout l'historique en une fois, pour rattraper les
     *             documents dont l'événement temps réel a échoué (ex: longue coupure réseau) et
     *             qui étaient jusque-là exclus indéfiniment de tout filet de sécurité.
     */
    @Transactional(readOnly = true)
    public void buildAndPublish(boolean full) {
        List<Company> companies = companyRepo.findAll();
        if (companies.isEmpty()) {
            log.warn("Snapshot: aucune société, ignoré");
            return;
        }
        for (Company company : companies) {
            if (!company.isActive()) continue;
            try {
                SpokeSnapshotPayload snapshot = buildSnapshot(company, full);
                publisher.publishSnapshot(snapshot);
                log.info("Snapshot {} publié — société {} ({})", full ? "complet" : "horaire",
                        company.getName(), company.getId());
            } catch (Exception e) {
                log.error("Erreur snapshot société {}: {}", company.getId(), e.getMessage(), e);
            }
        }
    }

    private SpokeSnapshotPayload buildSnapshot(Company company, boolean full) {
        Long       cid   = company.getId();
        LocalDate  today = LocalDate.now();
        LocalDate  hier  = today.minusDays(1);
        LocalDate  yearStart  = today.withDayOfYear(1);
        LocalDate  monthStart = today.withDayOfMonth(1);
        LocalDate  prevMonthStart = monthStart.minusMonths(1);
        LocalDate  prevMonthEnd   = monthStart.minusDays(1);

        // Trimestre en cours / trimestre passé — même formule que RistourneService.generateByQuarter.
        int qCur = ((today.getMonthValue() - 1) / 3) + 1;
        LocalDate qCurStart = LocalDate.of(today.getYear(), (qCur - 1) * 3 + 1, 1);
        LocalDate qCurEnd   = qCurStart.plusMonths(3).minusDays(1);
        int  qPrev  = qCur == 1 ? 4 : qCur - 1;
        int  yPrev  = qCur == 1 ? today.getYear() - 1 : today.getYear();
        LocalDate qPrevStart = LocalDate.of(yPrev, (qPrev - 1) * 3 + 1, 1);
        LocalDate qPrevEnd   = qPrevStart.plusMonths(3).minusDays(1);

        BigDecimal caComptesTotal  = orZ(moveLineRepo.soldeComptes701(cid, yearStart, today));
        BigDecimal caComptesMois   = orZ(moveLineRepo.soldeComptes701(cid, monthStart, today));
        BigDecimal caVentesTotal   = orZ(salesInvoiceRepo.sumCaVentesTotal(cid));
        BigDecimal caVentesJour    = orZ(moveLineRepo.soldeComptes701Jour(cid, today));
        BigDecimal caVentesHier    = orZ(moveLineRepo.soldeComptes701Jour(cid, hier));
        BigDecimal caVentesMois    = orZ(salesInvoiceRepo.sumCaVentesMois(cid, today.getYear(), today.getMonthValue()));
        BigDecimal caVentesMoisDernier = orZ(salesInvoiceRepo.sumCaVentesMois(
                cid, prevMonthStart.getYear(), prevMonthStart.getMonthValue()));

        BigDecimal evoJour = caVentesHier.compareTo(BigDecimal.ZERO) != 0
                ? caVentesJour.subtract(caVentesHier).divide(caVentesHier, 4, RoundingMode.HALF_UP).multiply(BigDecimal.valueOf(100))
                : (caVentesJour.compareTo(BigDecimal.ZERO) != 0 ? BigDecimal.valueOf(100) : BigDecimal.ZERO);
        BigDecimal evoMois = caVentesMoisDernier.compareTo(BigDecimal.ZERO) != 0
                ? caVentesMois.subtract(caVentesMoisDernier).divide(caVentesMoisDernier, 4, RoundingMode.HALF_UP).multiply(BigDecimal.valueOf(100))
                : (caVentesMois.compareTo(BigDecimal.ZERO) != 0 ? BigDecimal.valueOf(100) : BigDecimal.ZERO);

        BigDecimal achatsTotal    = orZ(purchaseInvoiceRepo.sumAchatsTotal(cid));
        BigDecimal achatsMois     = orZ(purchaseInvoiceRepo.sumAchatsMois(cid, today.getYear(), today.getMonthValue()));
        long       countAchats    = purchaseInvoiceRepo.countFacturesAchats(cid);

        // Total : même calcul que l'écran "Suivi Tiers" déjà utilisé et vérifié en local
        // (ReportService.getSuiviTiers / AccountMoveLineRepository.creancesParTiers-dettesParTiers)
        // — ventilé par tiers avant de sommer, jamais un solde net global : un partenaire en crédit
        // (avance, trop-perçu) est exclu des créances et compté dans les dettes, au lieu de faire
        // baisser le total créances en dessous de zéro comme le faisait l'ancien solde brut 411/401.
        BigDecimal creancesTotal = sumSoldeParTiers(moveLineRepo.creancesParTiers(cid), true);
        BigDecimal dettesTotal   = sumSoldeParTiers(moveLineRepo.dettesParTiers(cid), false);

        // Jour/Mois : PAS le même calcul par tiers restreint à la période — un tiers déjà soldé
        // avant le mois mais avec une grosse facture nouvelle ce mois-ci gonflait "Ce mois" au-delà
        // du "Total" affiché juste à côté (deux populations de tiers différentes selon la fenêtre).
        // Repris sur le même principe que "CA du mois" : somme des factures encore dues dont la
        // date de facture tombe dans la période — borné par construction, jamais négatif, jamais
        // supérieur au total en pratique.
        BigDecimal creancesJour  = orZ(salesInvoiceRepo.sumMontantDuClientsPeriode(cid, today, today));
        BigDecimal creancesMois  = orZ(salesInvoiceRepo.sumMontantDuClientsPeriode(cid, monthStart, today));
        BigDecimal dettesJour    = orZ(purchaseInvoiceRepo.sumMontantDuFournisseursPeriode(cid, today, today));
        BigDecimal dettesMois    = orZ(purchaseInvoiceRepo.sumMontantDuFournisseursPeriode(cid, monthStart, today));

        BigDecimal ristTotalTotal     = orZ(ristournePaiementRepo.sumTotalByCompany(cid));
        BigDecimal ristTotalMois      = orZ(ristournePaiementRepo.sumByPeriod(cid, monthStart, today));
        BigDecimal ristTotalAnnee     = orZ(ristournePaiementRepo.sumByPeriod(cid, yearStart, today));
        BigDecimal ristPayeesTotal    = orZ(ristournePaiementRepo.sumByStates(cid, PAYEE_STATES));
        BigDecimal ristPayeesMois     = orZ(ristournePaiementRepo.sumByStatesAndPeriod(cid, PAYEE_STATES, monthStart, today));
        BigDecimal ristPayeesAnnee    = orZ(ristournePaiementRepo.sumByStatesAndPeriod(cid, PAYEE_STATES, yearStart, today));
        BigDecimal ristNonPayeesTotal = orZ(ristournePaiementRepo.sumByStates(cid, NON_PAYEE_STATES));
        BigDecimal ristNonPayeesMois  = orZ(ristournePaiementRepo.sumByStatesAndPeriod(cid, NON_PAYEE_STATES, monthStart, today));
        BigDecimal ristNonPayeesAnnee = orZ(ristournePaiementRepo.sumByStatesAndPeriod(cid, NON_PAYEE_STATES, yearStart, today));
        long countRist = ristournePaiementRepo.countByCompanyIdAndStateIn(cid, DONE_STATES);

        BigDecimal remTotalTotal      = orZ(remisePaiementRepo.sumTotalByCompany(cid));
        BigDecimal remTotalMois       = orZ(remisePaiementRepo.sumByPeriod(cid, monthStart, today));
        BigDecimal remTotalAnnee      = orZ(remisePaiementRepo.sumByPeriod(cid, yearStart, today));
        BigDecimal remPayeesTotal     = orZ(remisePaiementRepo.sumByStates(cid, PAYEE_STATES));
        BigDecimal remPayeesMois      = orZ(remisePaiementRepo.sumByStatesAndPeriod(cid, PAYEE_STATES, monthStart, today));
        BigDecimal remPayeesAnnee     = orZ(remisePaiementRepo.sumByStatesAndPeriod(cid, PAYEE_STATES, yearStart, today));
        BigDecimal remNonPayeesTotal  = orZ(remisePaiementRepo.sumByStates(cid, NON_PAYEE_STATES));
        BigDecimal remNonPayeesMois   = orZ(remisePaiementRepo.sumByStatesAndPeriod(cid, NON_PAYEE_STATES, monthStart, today));
        BigDecimal remNonPayeesAnnee  = orZ(remisePaiementRepo.sumByStatesAndPeriod(cid, NON_PAYEE_STATES, yearStart, today));
        long countRem = remisePaiementRepo.countByCompanyIdAndStateIn(cid, DONE_STATES);

        // ── Ristournes/Remises — 2 catégories : collecte (trimestre en cours) / paiement (trimestre passé) ──
        BigDecimal ristCollecteMoisEnCours = orZ(ristournePaiementRepo.sumByPeriod(cid, monthStart, today));
        BigDecimal ristCollecteMoisPasse   = orZ(ristournePaiementRepo.sumByPeriod(cid, prevMonthStart, prevMonthEnd));
        BigDecimal ristCollecteJournee     = orZ(ristournePaiementRepo.sumByPeriod(cid, today, today));
        BigDecimal ristPaiementTotal       = orZ(ristournePaiementRepo.sumByPeriod(cid, qPrevStart, qPrevEnd));
        BigDecimal ristPaiementPaye        = orZ(ristournePaiementRepo.sumByStatesAndPeriod(cid, PAYEE_STATES, qPrevStart, qPrevEnd));
        BigDecimal ristPaiementReste       = ristPaiementTotal.subtract(ristPaiementPaye);
        BigDecimal ristPaiementJournalier  = orZ(ristournePaiementRepo.sumByDatePaiement(cid, today));

        BigDecimal remCollecteMoisEnCours = orZ(remisePaiementRepo.sumByPeriod(cid, monthStart, today));
        BigDecimal remCollecteMoisPasse   = orZ(remisePaiementRepo.sumByPeriod(cid, prevMonthStart, prevMonthEnd));
        BigDecimal remCollecteJournee     = orZ(remisePaiementRepo.sumByPeriod(cid, today, today));
        BigDecimal remPaiementTotal       = orZ(remisePaiementRepo.sumByPeriod(cid, qPrevStart, qPrevEnd));
        BigDecimal remPaiementPaye        = orZ(remisePaiementRepo.sumByStatesAndPeriod(cid, PAYEE_STATES, qPrevStart, qPrevEnd));
        BigDecimal remPaiementReste       = remPaiementTotal.subtract(remPaiementPaye);
        BigDecimal remPaiementJournalier  = orZ(remisePaiementRepo.sumByDatePaiement(cid, today));

        BigDecimal fraisTotal       = orZ(enlevementRepo.sumFraisEnlevements(cid));
        BigDecimal fraisVentesTotal = orZ(salesInvoiceRepo.sumFraisEnlevementsVentes(cid));
        long       countEnlev       = enlevementRepo.countByCompanyIdAndActiveTrue(cid);

        // ── Frais d'enlèvement — collecté/coût pondérés par quantité, calcul unique et cohérent
        // (jamais via les écritures comptables — modèle Enlevement uniquement, cf. EnlevementService)
        // réutilisé sur les 2 fenêtres affichées au dashboard : depuis le 1er janvier et trimestre
        // en cours — remplace les anciennes figures fraisTotal/fraisVentesTotal qui n'étaient ni
        // comparables entre elles (config statique vs factures de vente) ni cohérentes dans le temps.
        com.erp.common.dto.FraisEnlevementSummaryDTO fraisAnnee =
                enlevementService.getFraisEnlevementSummary(cid, yearStart, today);
        com.erp.common.dto.FraisEnlevementSummaryDTO fraisMoisCourant =
                enlevementService.getFraisEnlevementSummary(cid, monthStart, today);
        com.erp.common.dto.FraisEnlevementSummaryDTO fraisTrimestre =
                enlevementService.getFraisEnlevementSummary(cid, qCurStart, qCurEnd);

        List<Object[]> caissesRows     = moveLineRepo.soldesCaissesPeriode(cid, yearStart, today);
        List<Object[]> caissesInitRows = moveLineRepo.soldesInitiauxCaisses(cid, yearStart);

        Map<String, BigDecimal[]> initMap = new HashMap<>();
        for (Object[] r : caissesInitRows) {
            String code = (String) r[0];
            initMap.put(code, new BigDecimal[]{ toBD(r[1]), toBD(r[2]) });
        }

        List<SpokeSnapshotPayload.CaisseItem> caisses = new ArrayList<>();
        BigDecimal caissesTotal  = BigDecimal.ZERO;
        BigDecimal caissesEntrees = BigDecimal.ZERO;
        BigDecimal caissesSorties = BigDecimal.ZERO;

        for (Object[] r : caissesRows) {
            String     code    = (String) r[0];
            String     name    = (String) r[1];
            BigDecimal debit   = toBD(r[2]);
            BigDecimal credit  = toBD(r[3]);
            BigDecimal[] init  = initMap.getOrDefault(code, new BigDecimal[]{ BigDecimal.ZERO, BigDecimal.ZERO });
            BigDecimal initBal = init[0].subtract(init[1]);
            BigDecimal finalBal = initBal.add(debit).subtract(credit);

            caisses.add(SpokeSnapshotPayload.CaisseItem.builder()
                    .accountCode(code).accountName(name)
                    .periodDebit(debit).periodCredit(credit)
                    .initialBalance(initBal).finalBalance(finalBal)
                    .build());
            caissesEntrees = caissesEntrees.add(debit);
            caissesSorties = caissesSorties.add(credit);
            caissesTotal   = caissesTotal.add(finalBal);
        }

        // ── Marges brutes (depuis stats ventes) ──────────────────────────────
        BigDecimal margeVentesTotal = BigDecimal.ZERO;
        BigDecimal margeVentesJour  = BigDecimal.ZERO;
        BigDecimal margeVentesMois  = BigDecimal.ZERO;
        BigDecimal totalCoutVentes  = BigDecimal.ZERO;
        List<SpokeSnapshotPayload.WarehouseDailySalesItem> ventesJourParEntrepot = new ArrayList<>();
        try {
            SalesStatsRequest reqYtd = new SalesStatsRequest();
            reqYtd.setCompanyId(cid);
            reqYtd.setDateFrom(yearStart);
            reqYtd.setDateTo(today);
            SalesStatsResponse statsYtd = salesStatsService.getStats(reqYtd);
            margeVentesTotal = orZ(statsYtd.getGrandTotalMargeHT());
            totalCoutVentes  = orZ(statsYtd.getGrandTotalCout());

            SalesStatsRequest reqMois = new SalesStatsRequest();
            reqMois.setCompanyId(cid);
            reqMois.setDateFrom(monthStart);
            reqMois.setDateTo(today);
            SalesStatsResponse statsMois = salesStatsService.getStats(reqMois);
            margeVentesMois = orZ(statsMois.getGrandTotalMargeHT());

            SalesStatsRequest reqJour = new SalesStatsRequest();
            reqJour.setCompanyId(cid);
            reqJour.setDateFrom(today);
            reqJour.setDateTo(today);
            SalesStatsResponse statsJour = salesStatsService.getStats(reqJour);
            margeVentesJour = orZ(statsJour.getGrandTotalMargeHT());

            SalesStatsRequest reqEntrepot = new SalesStatsRequest();
            reqEntrepot.setCompanyId(cid);
            reqEntrepot.setDateFrom(today);
            reqEntrepot.setDateTo(today);
            reqEntrepot.setGroupBy("warehouse");
            SalesStatsResponse statsEntrepot = salesStatsService.getStats(reqEntrepot);
            if (statsEntrepot.getClients() != null) {
                for (var c : statsEntrepot.getClients()) {
                    List<SpokeSnapshotPayload.WarehouseSaleLine> entrepotLines = new ArrayList<>();
                    if (c.getLines() != null) {
                        for (var l : c.getLines()) {
                            entrepotLines.add(SpokeSnapshotPayload.WarehouseSaleLine.builder()
                                    .productCode(l.getProductCode())
                                    .productName(l.getProductName())
                                    .qty(orZ(l.getQty()))
                                    .montantHT(orZ(l.getCaHT()))
                                    .build());
                        }
                    }
                    ventesJourParEntrepot.add(SpokeSnapshotPayload.WarehouseDailySalesItem.builder()
                            .warehouseName(c.getClientName())
                            .qty(orZ(c.getTotalQty()))
                            .montantHT(orZ(c.getTotalHT()))
                            .montantTTC(orZ(c.getTotalTTC()))
                            .lines(entrepotLines)
                            .build());
                }
            }
        } catch (Exception e) {
            log.warn("Erreur calcul marges société {} : {}", cid, e.getMessage());
        }

        BigDecimal totalStock = orZ(stockQuantRepo.computeTotalStockValue(cid));
        List<StockQuant> quants = stockQuantRepo.findAllWithStock(cid);
        long totalRef = quants.size();

        // Un seul aller-retour DB pour tous les produits référencés par les quants, au lieu d'un
        // findById() par quant (N+1) — sur un client avec des milliers de quants, cette boucle
        // maintenait une transaction readOnly ouverte plusieurs minutes chaque heure, épuisant le
        // pool de connexions partagé avec l'application principale (ralentissements/freeze pour
        // les utilisateurs pendant la fenêtre du snapshot).
        Set<Long> quantProductIds = quants.stream()
                .map(StockQuant::getProductId).filter(java.util.Objects::nonNull).collect(Collectors.toSet());
        Map<Long, com.erp.stock.entity.Product> productById = productRepo.findAllById(quantProductIds).stream()
                .collect(Collectors.toMap(com.erp.stock.entity.Product::getId, p -> p, (a, b) -> a));

        BigDecimal valProduits  = BigDecimal.ZERO;
        BigDecimal valEmballages = BigDecimal.ZERO;
        List<SpokeSnapshotPayload.StockItem> topStock = new ArrayList<>();

        for (StockQuant q : quants) {
            var p = productById.get(q.getProductId());
            BigDecimal price  = p != null
                    ? productValuationService.getWarehouseCmup(p.getId(),
                            productValuationService.resolveWarehouseId(q.getLocationId()), p)
                    : BigDecimal.ZERO;
            BigDecimal valeur = q.getQuantity().multiply(price);
            String     code   = p != null && p.getDefaultCode() != null ? p.getDefaultCode().strip().toUpperCase() : "";
            String     cat    = EMBALLAGE_CODES.contains(code) ? "EMBALLAGE" : "PRODUIT";

            if ("EMBALLAGE".equals(cat)) valEmballages = valEmballages.add(valeur);
            else                         valProduits   = valProduits.add(valeur);

            topStock.add(SpokeSnapshotPayload.StockItem.builder()
                    .productCode(code)
                    .productName(p != null ? p.getName() : "?")
                    .category(cat)
                    .quantity(q.getQuantity())
                    .standardPrice(price)
                    .valeurStock(valeur)
                    .build());
        }

        topStock = topStock.stream()
                .sorted(Comparator.comparing(SpokeSnapshotPayload.StockItem::getValeurStock).reversed())
                .limit(30).collect(Collectors.toList());

        long nbFactJour = salesInvoiceRepo.countFacturesVentesByDate(cid, today);
        long nbFactMois = salesInvoiceRepo.countFacturesVentesByMonth(cid, today.getYear(), today.getMonthValue());

        // ── Référentiels ─────────────────────────────────────────────────────
        List<SpokeSnapshotPayload.PartnerItem> partners = partnerRepo
                .findByCompanyIdAndActiveTrue(cid).stream()
                .map(p -> SpokeSnapshotPayload.PartnerItem.builder()
                        .id(p.getId()).ref(p.getRef()).name(p.getName())
                        .type(p.getType()).phone(p.getPhone()).email(p.getEmail())
                        .tauxRistourne(p.getTauxRistourne())
                        .tauxPrecompte(p.getTauxPrecompte())
                        .build())
                .collect(Collectors.toList());

        // Quantité du premier quant rencontré par produit (même règle que l'ancienne boucle
        // "break" au premier match) — construite une seule fois en O(quants) au lieu d'un balayage
        // complet de quants pour chaque produit (O(produits × quants), quadratique sur un client
        // avec beaucoup de références).
        Map<Long, BigDecimal> firstQtyByProduct = new LinkedHashMap<>();
        Map<Long, Long> firstLocationByProduct = new LinkedHashMap<>();
        for (StockQuant q : quants) {
            if (q.getProductId() != null) {
                firstQtyByProduct.putIfAbsent(q.getProductId(), q.getQuantity());
                firstLocationByProduct.putIfAbsent(q.getProductId(), q.getLocationId());
            }
        }

        List<SpokeSnapshotPayload.ProductItem> products = productRepo
                .findByCompanyIdAndActiveOrderByNameAsc(cid, true).stream()
                .map(p -> {
                    BigDecimal qty = firstQtyByProduct.getOrDefault(p.getId(), BigDecimal.ZERO);
                    Long warehouseId = productValuationService.resolveWarehouseId(firstLocationByProduct.get(p.getId()));
                    BigDecimal price = productValuationService.getWarehouseCmup(p.getId(), warehouseId, p);
                    BigDecimal val = qty.multiply(price);
                    return SpokeSnapshotPayload.ProductItem.builder()
                            .id(p.getId()).code(p.getDefaultCode()).name(p.getName())
                            .uomName(p.getUomName()).type(p.getType())
                            .standardPrice(price).salePrice(p.getSalePrice())
                            .quantiteEnStock(qty).valeurStock(val)
                            .build();
                })
                .collect(Collectors.toList());

        List<SpokeSnapshotPayload.AccountItem> accounts = accountRepo
                .findByCompanyIdAndDeprecatedFalseOrderByCode(cid).stream()
                .map(a -> SpokeSnapshotPayload.AccountItem.builder()
                        .id(a.getId()).code(a.getCode()).name(a.getName())
                        .accountType(a.getAccountType()).internalType(a.getInternalType())
                        .build())
                .collect(Collectors.toList());

        // Fenêtrées comme saleInvoices/purchaseInvoices (2 ans, 5 ans si snapshot forcé — jamais
        // illimité) — avant ce correctif, "Forcer envoi" (full=true) désactivait complètement le
        // filtre de date, ET ce filtre s'appliquait de toute façon APRÈS avoir chargé la table
        // entière en entités JPA (findByCompanyIdOrderByCreatedAtDesc n'a jamais eu de borne SQL).
        // Sur un client ancien à gros volume (Blessing), ça matérialisait chaque heure — pas
        // seulement lors d'un "Forcer envoi" — l'intégralité de l'historique en mémoire avant de le
        // tronquer côté Java, un risque d'OutOfMemoryError croissant avec l'ancienneté du site (cf.
        // plantages répétés de septembre 2026). Les nouvelles requêtes *Since filtrent directement
        // en SQL : plus aucune liste historique n'est jamais chargée sans borne.
        LocalDate invoicesWindowStart = today.minusYears(full ? 5 : 2);

        List<SpokeSnapshotPayload.RistournePaiementItem> ristournePaiements =
                ristournePaiementRepo.findByCompanyIdSince(cid, invoicesWindowStart).stream()
                .map(r -> SpokeSnapshotPayload.RistournePaiementItem.builder()
                        .id(r.getId()).name(r.getName())
                        .partnerName(r.getPartner() != null ? r.getPartner().getName() : null)
                        .typeRistourne(r.getTypeRistourne())
                        .totalAmount(r.getTotalAmount()).date(r.getDate()).state(r.getState())
                        .build())
                .collect(Collectors.toList());

        List<SpokeSnapshotPayload.RemisePaiementItem> remisePaiements =
                remisePaiementRepo.findByCompanyIdSince(cid, invoicesWindowStart).stream()
                .map(r -> SpokeSnapshotPayload.RemisePaiementItem.builder()
                        .id(r.getId()).name(r.getName())
                        .partnerName(r.getPartner() != null ? r.getPartner().getName() : null)
                        .typeRemise(r.getTypeRemise())
                        .totalAmount(r.getTotalAmount()).date(r.getDate()).state(r.getState())
                        .build())
                .collect(Collectors.toList());

        // ── Caisses métier : solde réel par entité Caisse ────────────────────
        LocalDate tomorrow = today.plusDays(1);
        List<SpokeSnapshotPayload.CaisseSnapshot> caissesActuelles = new ArrayList<>();
        for (Caisse caisse : caisseRepo.findByCompanyIdAndActiveTrue(cid)) {
            BigDecimal solde = BigDecimal.ZERO;
            AccountJournal journal = journalRepo.findById(caisse.getJournalId()).orElse(null);
            try {
                // Filtre par COMPTE seul (sans journal), même logique que CaisseService.computeSolde
                // (cf. commentaire getBrouillard dans CaisseService, et CLAUDE.md) : un transfert
                // entre deux caisses classe ses DEUX jambes sous le journal de la caisse
                // initiatrice — filtrer par journalId (comme le faisait sumTreasuryBalanceBeforeDate
                // ci-dessous) fait donc disparaître la jambe de la caisse destinataire du snapshot.
                Long primaryAccountId = null;
                if (journal != null) {
                    if (journal.getDefaultDebitAccount() != null) primaryAccountId = journal.getDefaultDebitAccount().getId();
                    else if (journal.getDefaultCreditAccount() != null) primaryAccountId = journal.getDefaultCreditAccount().getId();
                }
                BigDecimal s = primaryAccountId != null
                        ? moveLineRepo.sumBalanceByAccountBeforeDate(primaryAccountId, cid, tomorrow)
                        : null;
                if (s == null) {
                    // Fallback : tout compte internalType='liquidity' du journal (comme avant).
                    s = moveLineRepo.sumTreasuryBalanceBeforeDate(caisse.getJournalId(), tomorrow);
                }
                if (s != null) solde = s;
            } catch (Exception e) {
                log.warn("Erreur solde caisse id={}: {}", caisse.getId(), e.getMessage());
            }
            caissesActuelles.add(SpokeSnapshotPayload.CaisseSnapshot.builder()
                    .caisseId(caisse.getId())
                    .caisseName(caisse.getName())
                    .caisseCode(caisse.getCode())
                    .journalName(journal != null ? journal.getName() : "?")
                    .responsableName(caisse.getResponsableName())
                    .status(caisse.getStatus() != null ? caisse.getStatus().name() : "INCONNUE")
                    .soldeActuel(solde)
                    .snapshotAt(LocalDateTime.now())
                    .build());
        }

        Map<Long, String> warehouseNames = warehouseRepo.findByCompanyIdOrderByNameAsc(cid).stream()
                .collect(Collectors.toMap(com.erp.stock.entity.Warehouse::getId, com.erp.stock.entity.Warehouse::getName));

        // ── Factures de vente (2 ans, 5 ans si snapshot forcé, filtré en SQL) ────────────────
        List<SpokeSnapshotPayload.SaleInvoiceItem> saleInvoices =
                salesInvoiceRepo.findByCompanyIdAndStateNotSince(cid, "draft", invoicesWindowStart).stream()
                .map(inv -> SpokeSnapshotPayload.SaleInvoiceItem.builder()
                        .id(inv.getId())
                        .name(inv.getName())
                        .date(inv.getDate())
                        .state(inv.getState())
                        .type(inv.getType())
                        .partnerName(inv.getPartner() != null ? inv.getPartner().getName() : null)
                        .totalHT(inv.getTotalHT())
                        .totalTTC(inv.getTotalTTC())
                        .montantPaye(inv.getMontantPaye())
                        .montantDu(inv.getMontantDu())
                        .totalRistourne(inv.getTotalRistourne())
                        .fraisEnlevementTTC(inv.getFraisEnlevementTTC())
                        .netAPayer(inv.getNetAPayer())
                        .journalName(inv.getJournal() != null ? inv.getJournal().getName() : null)
                        .warehouseName(inv.getWarehouseId() != null ? warehouseNames.get(inv.getWarehouseId()) : null)
                        .salesOrderName(inv.getSalesOrder() != null ? inv.getSalesOrder().getName() : null)
                        .build())
                .collect(Collectors.toList());

        // ── Factures d'achat (2 ans, 5 ans si snapshot forcé, filtré en SQL) ─────────────────
        List<SpokeSnapshotPayload.PurchaseInvoiceItem> purchaseInvoices =
                purchaseInvoiceRepo.findByCompanyIdAndStateNotSince(cid, "draft", invoicesWindowStart).stream()
                .map(inv -> SpokeSnapshotPayload.PurchaseInvoiceItem.builder()
                        .id(inv.getId())
                        .name(inv.getName())
                        .date(inv.getDate())
                        .state(inv.getState())
                        .type(inv.getType())
                        .partnerName(inv.getPartner() != null ? inv.getPartner().getName() : null)
                        .totalHT(inv.getTotalHT())
                        .totalTTC(inv.getTotalTTC())
                        .montantPaye(inv.getMontantPaye())
                        .montantDu(inv.getMontantDu())
                        .journalName(inv.getJournal() != null ? inv.getJournal().getName() : null)
                        .purchaseOrderName(null)
                        .build())
                .collect(Collectors.toList());

        // ── Bons de commande (tout sauf brouillon), fenêtrés comme les factures, filtré en SQL ──
        List<SpokeSnapshotPayload.SaleOrderItem> salesOrders =
                salesOrderRepo.findByCompanyIdAndStateNotSince(cid, "draft", invoicesWindowStart).stream()
                .map(o -> SpokeSnapshotPayload.SaleOrderItem.builder()
                        .id(o.getId())
                        .name(o.getName())
                        .date(o.getDate())
                        .state(o.getState())
                        .partnerName(o.getPartner() != null ? o.getPartner().getName() : null)
                        .totalTTC(o.getTotalTTC())
                        .build())
                .collect(Collectors.toList());

        List<SpokeSnapshotPayload.PurchaseOrderItem> purchaseOrders =
                purchaseOrderRepo.findByCompanyIdAndStateNotSince(cid, "draft", invoicesWindowStart).stream()
                .map(o -> SpokeSnapshotPayload.PurchaseOrderItem.builder()
                        .id(o.getId())
                        .name(o.getName())
                        .date(o.getDate())
                        .state(o.getState())
                        .partnerName(o.getPartner() != null ? o.getPartner().getName() : null)
                        .totalTTC(o.getTotalTTC())
                        .build())
                .collect(Collectors.toList());

        // ── Lignes comptables (fenêtre glissante de 60 jours, PAS l'année en cours) ─────────
        // Avant ce correctif, cette liste couvrait le 1er janvier → aujourd'hui : sur un client
        // à gros volume d'écritures, elle grossit tout au long de l'année jusqu'à produire un
        // message RabbitMQ dépassant la limite de taille du broker (ex: 16 Mo) — le Hub rejette
        // alors la publication (406 PRECONDITION_FAILED), et l'événement FULL_SNAPSHOT, jamais
        // acceptable en l'état, était réessayé indéfiniment (dispatch 30s + auto-requeue 5min),
        // consommant CPU/mémoire à chaque tentative sur la machine du client (cf. incident du
        // 2026-09-14 : ce dépassement de taille est apparu juste avant un OOM Postgres). Le
        // snapshot horaire n'est qu'un filet de reconciliation (chaque écriture a déjà déclenché
        // son propre événement temps réel) — 60 jours suffisent largement à cet usage.
        LocalDate accountMoveLinesFrom = today.minusDays(60);
        List<SpokeSnapshotPayload.AccountMoveLineItem> accountMoveLines;
        try {
            accountMoveLines = moveLineRepo.findPostedByCompanyAndDateRange(cid, accountMoveLinesFrom, today).stream()
                .map(l -> SpokeSnapshotPayload.AccountMoveLineItem.builder()
                        .id(l.getId())
                        .date(l.getDate())
                        .moveRef(l.getMove() != null ? l.getMove().getName() : null)
                        .accountCode(l.getAccount() != null ? l.getAccount().getCode() : null)
                        .accountName(l.getAccount() != null ? l.getAccount().getName() : null)
                        .partnerName(l.getPartner() != null ? l.getPartner().getName() : null)
                        .libelle(l.getName())
                        .journalCode(l.getJournal() != null ? l.getJournal().getCode() : null)
                        .debit(l.getDebit())
                        .credit(l.getCredit())
                        .build())
                .collect(Collectors.toList());
        } catch (Exception e) {
            log.warn("Snapshot: impossible de récupérer les lignes comptables: {}", e.getMessage());
            accountMoveLines = Collections.emptyList();
        }

        return SpokeSnapshotPayload.builder()
                .spokeId(spokeId + "_" + cid)
                .spokeName(spokeName + " — " + company.getName())
                .snapshotAt(LocalDateTime.now())
                .caComptesTotal(caComptesTotal)
                .caComptesMoisCourant(caComptesMois)
                .caVentesTotal(caVentesTotal)
                .caVentesJour(caVentesJour)
                .caVentesHier(caVentesHier)
                .caVentesMoisCourant(caVentesMois)
                .caVentesMoisDernier(caVentesMoisDernier)
                .evolutionCaJour(evoJour)
                .evolutionCaMois(evoMois)
                .achatsTotal(achatsTotal)
                .achatsMoisCourant(achatsMois)
                .countFacturesAchats(countAchats)
                .creancesTotal(creancesTotal)
                .creancesJour(creancesJour)
                .creancesMois(creancesMois)
                .dettesTotal(dettesTotal)
                .dettesJour(dettesJour)
                .dettesMois(dettesMois)
                .ristournesTotalTotal(ristTotalTotal)
                .ristournesTotalMois(ristTotalMois)
                .ristournesTotalAnnee(ristTotalAnnee)
                .ristournesPayeesTotal(ristPayeesTotal)
                .ristournesPayeesMois(ristPayeesMois)
                .ristournesPayeesAnnee(ristPayeesAnnee)
                .ristournesNonPayeesTotal(ristNonPayeesTotal)
                .ristournesNonPayeesMois(ristNonPayeesMois)
                .ristournesNonPayeesAnnee(ristNonPayeesAnnee)
                .countRistournes(countRist)
                .ristournesCollecteMoisCourant(ristCollecteMoisEnCours)
                .ristournesCollecteMoisPasse(ristCollecteMoisPasse)
                .ristournesCollecteJournee(ristCollecteJournee)
                .ristournesPaiementTotal(ristPaiementTotal)
                .ristournesPaiementPaye(ristPaiementPaye)
                .ristournesPaiementResteAPayer(ristPaiementReste)
                .ristournesPaiementJournalier(ristPaiementJournalier)
                .remisesTotalTotal(remTotalTotal)
                .remisesTotalMois(remTotalMois)
                .remisesTotalAnnee(remTotalAnnee)
                .remisesPayeesTotal(remPayeesTotal)
                .remisesPayeesMois(remPayeesMois)
                .remisesPayeesAnnee(remPayeesAnnee)
                .remisesNonPayeesTotal(remNonPayeesTotal)
                .remisesNonPayeesMois(remNonPayeesMois)
                .remisesNonPayeesAnnee(remNonPayeesAnnee)
                .countRemises(countRem)
                .remisesCollecteMoisCourant(remCollecteMoisEnCours)
                .remisesCollecteMoisPasse(remCollecteMoisPasse)
                .remisesCollecteJournee(remCollecteJournee)
                .remisesPaiementTotal(remPaiementTotal)
                .remisesPaiementPaye(remPaiementPaye)
                .remisesPaiementResteAPayer(remPaiementReste)
                .remisesPaiementJournalier(remPaiementJournalier)
                .fraisEnlevementsTotal(fraisTotal)
                .fraisEnlevementsMois(fraisTotal)
                .fraisEnlevementsVentesTotal(fraisVentesTotal)
                .fraisEnlevementsVentesMois(fraisVentesTotal)
                .countEnlevements(countEnlev)
                .fraisEnlevementsAnneeCollecte(fraisAnnee.getCollecte())
                .fraisEnlevementsAnneeCout(fraisAnnee.getCout())
                .fraisEnlevementsAnneeNet(fraisAnnee.getNet())
                .fraisEnlevementsMoisCollecte(fraisMoisCourant.getCollecte())
                .fraisEnlevementsMoisCout(fraisMoisCourant.getCout())
                .fraisEnlevementsTrimestreCollecte(fraisTrimestre.getCollecte())
                .fraisEnlevementsTrimestreCout(fraisTrimestre.getCout())
                .fraisEnlevementsTrimestreNet(fraisTrimestre.getNet())
                .caissesTotalSolde(caissesTotal)
                .caissesTotalEntrees(caissesEntrees)
                .caissesTotalSorties(caissesSorties)
                .caisses(caisses)
                .caissesActuelles(caissesActuelles)
                .ventesJourParEntrepot(ventesJourParEntrepot)
                .valeurStockProduits(valProduits)
                .valeurStockEmballages(valEmballages)
                .valeurStockTotal(totalStock)
                .totalReferences(totalRef)
                .topStock(topStock)
                .margeVentesTotal(margeVentesTotal)
                .margeVentesJour(margeVentesJour)
                .margeVentesMois(margeVentesMois)
                .totalCoutVentes(totalCoutVentes)
                .nbFacturesJour(nbFactJour)
                .nbFacturesMois(nbFactMois)
                .nbClients((long) partners.stream().filter(p -> "customer".equals(p.getType()) || "both".equals(p.getType())).count())
                .nbSpokes(1L)
                .partners(partners)
                .products(products)
                .accounts(accounts)
                .ristournePaiements(ristournePaiements)
                .remisePaiements(remisePaiements)
                .saleInvoices(saleInvoices)
                .purchaseInvoices(purchaseInvoices)
                .accountMoveLines(accountMoveLines)
                .salesOrders(salesOrders)
                .purchaseOrders(purchaseOrders)
                .build();
    }

    private static BigDecimal orZ(BigDecimal v) { return v != null ? v : BigDecimal.ZERO; }

    /** Somme le solde net (débit-crédit, ou crédit-débit pour les dettes) des lignes déjà
     *  ventilées par tiers par creancesParTiers/dettesParTiers(Periode) — chaque ligne représente
     *  un tiers dont le HAVING de la requête garantit déjà le solde net dans le bon sens. */
    private static BigDecimal sumSoldeParTiers(java.util.List<Object[]> rows, boolean creance) {
        BigDecimal total = BigDecimal.ZERO;
        for (Object[] row : rows) {
            BigDecimal debit  = toBD(row[2]);
            BigDecimal credit = toBD(row[3]);
            total = total.add(creance ? debit.subtract(credit) : credit.subtract(debit));
        }
        return total;
    }
    private static BigDecimal toBD(Object o) {
        if (o == null) return BigDecimal.ZERO;
        if (o instanceof BigDecimal bd) return bd;
        return new BigDecimal(o.toString());
    }
}
