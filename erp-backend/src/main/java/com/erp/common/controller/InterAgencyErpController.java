package com.erp.common.controller;

import com.erp.accounting.service.AccountingService;
import com.erp.accounting.service.ReportService;
import com.erp.caisse.entity.OperationType;
import com.erp.caisse.service.CaisseService;
import com.erp.common.repository.CompanyRepository;
import com.erp.purchases.dto.PurchaseInvoiceDTO;
import com.erp.purchases.dto.RemisePaiementDTO;
import com.erp.purchases.service.PurchaseService;
import com.erp.purchases.service.RemiseService;
import com.erp.sales.dto.RistournePaiementDTO;
import com.erp.sales.dto.SalesStatsRequest;
import com.erp.sales.service.RistourneService;
import com.erp.sales.service.SalesService;
import com.erp.sales.service.SalesStatsService;
import com.erp.stock.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Endpoints inter-agences en lecture seule (sécurisés par X-Api-Key via InterAgencyApiKeyFilter).
 * Exposent les données de chaque module au Hub central pour consultation centralisée.
 */
@RestController
@RequestMapping("/api/inter-agency")
@RequiredArgsConstructor
public class InterAgencyErpController {

    private final SalesService       salesService;
    private final SalesStatsService  salesStatsService;
    private final PurchaseService    purchaseService;
    private final StockService       stockService;
    private final CaisseService      caisseService;
    private final AccountingService  accountingService;
    private final ReportService      reportService;
    private final RistourneService   ristourneService;
    private final RemiseService      remiseService;
    private final CompanyRepository  companyRepo;

    // ── Découverte : liste des entreprises du spoke ───────────────────────────

    @GetMapping("/companies")
    public ResponseEntity<?> companies() {
        return ResponseEntity.ok(
            companyRepo.findByActiveTrue().stream()
                .map(c -> {
                    Map<String, Object> m = new LinkedHashMap<>();
                    m.put("id", c.getId());
                    m.put("name", c.getName());
                    m.put("sigle", c.getSigle());
                    return m;
                })
                .collect(Collectors.toList())
        );
    }

    // ── Ventes ───────────────────────────────────────────────────────────────

    @GetMapping("/sales/invoices")
    public ResponseEntity<?> salesInvoices(@RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getAllInvoices(companyId));
    }

    @GetMapping("/sales/orders")
    public ResponseEntity<?> salesOrders(@RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getAllOrders(companyId));
    }

    @GetMapping("/sales/avoirs")
    public ResponseEntity<?> salesAvoirs(@RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getAllAvoirs(companyId));
    }

    @GetMapping("/sales/payments")
    public ResponseEntity<?> salesPayments(@RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getAllPayments(companyId));
    }

    @GetMapping("/sales/clients")
    public ResponseEntity<?> salesClients(@RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getClients(companyId));
    }

    // ── Ristournes ────────────────────────────────────────────────────────────

    @GetMapping("/ristournes")
    public ResponseEntity<?> ristournes(@RequestParam Long companyId) {
        return ResponseEntity.ok(ristourneService.getAll(companyId));
    }

    @GetMapping("/ristournes/paiements")
    public ResponseEntity<?> ristournesPaiements(@RequestParam Long companyId,
            @RequestParam(required = false) String type) {
        return ResponseEntity.ok(ristourneService.getAllPaiements(companyId));
    }

    // ── Achats ────────────────────────────────────────────────────────────────

    @GetMapping("/purchases/invoices")
    public ResponseEntity<?> purchasesInvoices(@RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllInvoices(companyId));
    }

    @GetMapping("/purchases/orders")
    public ResponseEntity<?> purchasesOrders(@RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllOrders(companyId));
    }

    @GetMapping("/purchases/avoirs")
    public ResponseEntity<?> purchasesAvoirs(@RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllAvoirs(companyId));
    }

    @GetMapping("/purchases/payments")
    public ResponseEntity<?> purchasesPayments(@RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllPayments(companyId));
    }

    // ── Remises ────────────────────────────────────────────────────────────────

    @GetMapping("/remises")
    public ResponseEntity<?> remises(@RequestParam Long companyId) {
        return ResponseEntity.ok(remiseService.getAll(companyId));
    }

    @GetMapping("/remises/paiements")
    public ResponseEntity<?> remisesPaiements(@RequestParam Long companyId,
            @RequestParam(required = false) String type) {
        return ResponseEntity.ok(remiseService.getAllPaiements(companyId, type));
    }

    // ── Stock ─────────────────────────────────────────────────────────────────

    @GetMapping("/stock/products")
    public ResponseEntity<?> stockProducts(@RequestParam Long companyId) {
        return ResponseEntity.ok(stockService.getProducts(companyId));
    }

    @GetMapping("/stock/pickings")
    public ResponseEntity<?> stockPickings(@RequestParam Long companyId,
            @RequestParam(required = false) String typeCode) {
        return ResponseEntity.ok(stockService.getPickings(companyId, typeCode));
    }

    @GetMapping("/stock/receptions")
    public ResponseEntity<?> stockReceptions(@RequestParam Long companyId) {
        return ResponseEntity.ok(stockService.getPendingReceptions(companyId));
    }

    @GetMapping("/stock/livraisons")
    public ResponseEntity<?> stockLivraisons(@RequestParam Long companyId) {
        return ResponseEntity.ok(stockService.getPickings(companyId, "outgoing"));
    }

    @GetMapping("/stock/quants")
    public ResponseEntity<?> stockQuants(@RequestParam Long companyId) {
        return ResponseEntity.ok(stockService.getQuants(companyId, null, null));
    }

    // ── Caisse ────────────────────────────────────────────────────────────────

    @GetMapping("/caisse")
    public ResponseEntity<?> caisses(@RequestParam Long companyId) {
        return ResponseEntity.ok(caisseService.getCaisses(companyId));
    }

    @GetMapping("/caisse/operations")
    public ResponseEntity<?> caisseOperations(@RequestParam Long companyId,
            @RequestParam(required = false) String type) {
        OperationType opType = type != null ? OperationType.valueOf(type) : null;
        return ResponseEntity.ok(caisseService.getAllOperations(companyId, opType));
    }

    @GetMapping("/caisse/dashboard")
    public ResponseEntity<?> caisseDashboard(@RequestParam Long companyId) {
        return ResponseEntity.ok(caisseService.getCaisses(companyId));
    }

    // ── Comptabilité ─────────────────────────────────────────────────────────

    @GetMapping("/accounting/accounts")
    public ResponseEntity<?> accounts(@RequestParam Long companyId) {
        return ResponseEntity.ok(accountingService.getAllAccounts(companyId));
    }

    @GetMapping("/accounting/journals")
    public ResponseEntity<?> journals(@RequestParam Long companyId) {
        return ResponseEntity.ok(accountingService.getAllJournals(companyId));
    }

    @GetMapping("/accounting/moves")
    public ResponseEntity<?> moves(@RequestParam Long companyId,
            @RequestParam(required = false) Long journalId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo,
            @RequestParam(required = false) String state) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : null;
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : null;
        return ResponseEntity.ok(accountingService.getJournalEntries(companyId, journalId, from, to, state));
    }

    @GetMapping("/accounting/journals/{journalId}/moves")
    public ResponseEntity<?> journalMoves(@RequestParam Long companyId,
            @PathVariable Long journalId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : null;
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : null;
        return ResponseEntity.ok(accountingService.getJournalEntries(companyId, journalId, from, to, null));
    }

    @GetMapping("/accounting/partners")
    public ResponseEntity<?> partners(@RequestParam Long companyId) {
        return ResponseEntity.ok(accountingService.getAllPartners(companyId));
    }

    // ── Rapports financiers ───────────────────────────────────────────────────

    @GetMapping("/reports/stats/ventes")
    public ResponseEntity<?> statsVentes(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo,
            @RequestParam(required = false) String groupBy) {
        SalesStatsRequest req = new SalesStatsRequest();
        req.setCompanyId(companyId);
        req.setDateFrom(dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1));
        req.setDateTo(dateTo != null ? LocalDate.parse(dateTo) : LocalDate.now());
        req.setGroupBy(groupBy != null ? groupBy : "client");
        return ResponseEntity.ok(salesStatsService.getStats(req));
    }

    @GetMapping("/reports/stats/achats")
    public ResponseEntity<?> statsAchats(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        List<PurchaseInvoiceDTO> all = purchaseService.getAllInvoices(companyId);
        List<PurchaseInvoiceDTO> filtered = all.stream()
                .filter(i -> !"credit_note".equals(i.getType()) && !"cancel".equals(i.getState()))
                .filter(i -> i.getDate() != null && !i.getDate().isBefore(from) && !i.getDate().isAfter(to))
                .collect(Collectors.toList());
        BigDecimal totalHT   = filtered.stream().map(i -> nvl(i.getTotalHT())).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalTTC  = filtered.stream().map(i -> nvl(i.getTotalTTC())).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalPaye = filtered.stream().map(i -> nvl(i.getMontantPaye())).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalDu   = filtered.stream().map(i -> nvl(i.getMontantDu())).reduce(BigDecimal.ZERO, BigDecimal::add);
        Map<String, Map<String, Object>> byPartner = new LinkedHashMap<>();
        for (PurchaseInvoiceDTO inv : filtered) {
            String p = inv.getPartnerName() != null ? inv.getPartnerName() : "Inconnu";
            byPartner.computeIfAbsent(p, k -> {
                Map<String, Object> m = new LinkedHashMap<>();
                m.put("partnerName", k); m.put("count", 0);
                m.put("totalHT", BigDecimal.ZERO); m.put("totalTTC", BigDecimal.ZERO);
                m.put("totalPaye", BigDecimal.ZERO); m.put("solde", BigDecimal.ZERO);
                return m;
            });
            Map<String, Object> m = byPartner.get(p);
            m.put("count", (int) m.get("count") + 1);
            m.put("totalHT",  ((BigDecimal) m.get("totalHT")).add(nvl(inv.getTotalHT())));
            m.put("totalTTC", ((BigDecimal) m.get("totalTTC")).add(nvl(inv.getTotalTTC())));
            m.put("totalPaye",((BigDecimal) m.get("totalPaye")).add(nvl(inv.getMontantPaye())));
            m.put("solde",    ((BigDecimal) m.get("solde")).add(nvl(inv.getMontantDu())));
        }
        List<Map<String, Object>> topFournisseurs = byPartner.values().stream()
                .sorted(Comparator.comparing(m -> ((BigDecimal) m.get("totalHT")).negate()))
                .collect(Collectors.toList());
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("dateFrom", from); result.put("dateTo", to);
        result.put("totalFactures", filtered.size());
        result.put("grandTotalHT", totalHT); result.put("grandTotalTTC", totalTTC);
        result.put("grandTotalPaye", totalPaye); result.put("grandTotalDu", totalDu);
        result.put("parFournisseur", topFournisseurs);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/reports/stats/ristournes")
    public ResponseEntity<?> statsRistournes(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        List<RistournePaiementDTO> all = ristourneService.getAllPaiements(companyId);
        List<RistournePaiementDTO> filtered = all.stream()
                .filter(r -> !"cancel".equals(r.getState()) && !"cancelled".equals(r.getState()))
                .filter(r -> r.getDate() != null && !r.getDate().isBefore(from) && !r.getDate().isAfter(to))
                .collect(Collectors.toList());
        BigDecimal totalMontant = filtered.stream().map(r -> nvl(r.getTotalAmount())).reduce(BigDecimal.ZERO, BigDecimal::add);
        // Par type
        Map<String, BigDecimal> byType = new LinkedHashMap<>();
        filtered.forEach(r -> byType.merge(r.getTypeRistourne() != null ? r.getTypeRistourne() : "standard",
                nvl(r.getTotalAmount()), BigDecimal::add));
        // Par client
        Map<String, BigDecimal> byClient = new LinkedHashMap<>();
        filtered.forEach(r -> byClient.merge(r.getPartnerName() != null ? r.getPartnerName() : "Inconnu",
                nvl(r.getTotalAmount()), BigDecimal::add));
        List<Map<String, Object>> topClients = byClient.entrySet().stream()
                .sorted((a, b) -> b.getValue().compareTo(a.getValue()))
                .map(e -> { Map<String, Object> m = new LinkedHashMap<>(); m.put("partnerName", e.getKey()); m.put("totalAmount", e.getValue()); return m; })
                .collect(Collectors.toList());
        List<Map<String, Object>> parType = byType.entrySet().stream()
                .map(e -> { Map<String, Object> m = new LinkedHashMap<>(); m.put("type", e.getKey()); m.put("totalAmount", e.getValue()); return m; })
                .collect(Collectors.toList());
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("dateFrom", from); result.put("dateTo", to);
        result.put("totalPaiements", filtered.size());
        result.put("grandTotalMontant", totalMontant);
        result.put("parType", parType);
        result.put("topClients", topClients);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/reports/stats/remises")
    public ResponseEntity<?> statsRemises(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        List<RemisePaiementDTO> all = remiseService.getAllPaiements(companyId, null);
        List<RemisePaiementDTO> filtered = all.stream()
                .filter(r -> !"cancel".equals(r.getState()) && !"cancelled".equals(r.getState()))
                .filter(r -> r.getDate() != null && !r.getDate().isBefore(from) && !r.getDate().isAfter(to))
                .collect(Collectors.toList());
        BigDecimal totalMontant = filtered.stream().map(r -> nvl(r.getTotalAmount())).reduce(BigDecimal.ZERO, BigDecimal::add);
        Map<String, BigDecimal> byFournisseur = new LinkedHashMap<>();
        filtered.forEach(r -> byFournisseur.merge(r.getPartnerName() != null ? r.getPartnerName() : "Inconnu",
                nvl(r.getTotalAmount()), BigDecimal::add));
        List<Map<String, Object>> topFournisseurs = byFournisseur.entrySet().stream()
                .sorted((a, b) -> b.getValue().compareTo(a.getValue()))
                .map(e -> { Map<String, Object> m = new LinkedHashMap<>(); m.put("partnerName", e.getKey()); m.put("totalAmount", e.getValue()); return m; })
                .collect(Collectors.toList());
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("dateFrom", from); result.put("dateTo", to);
        result.put("totalPaiements", filtered.size());
        result.put("grandTotalMontant", totalMontant);
        result.put("topFournisseurs", topFournisseurs);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/reports/balance-generale")
    public ResponseEntity<?> balanceGenerale(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo,
            @RequestParam(required = false, defaultValue = "all") String mode) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        return ResponseEntity.ok(reportService.getGeneralBalance6Cols(from, to, companyId, null, mode));
    }

    @GetMapping("/reports/balance-tiers")
    public ResponseEntity<?> balanceTiers(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo,
            @RequestParam(required = false) String type) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        return ResponseEntity.ok(reportService.getPartnerBalance4Cols(from, to, companyId, type, null));
    }

    @GetMapping("/reports/grand-livre")
    public ResponseEntity<?> grandLivre(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        return ResponseEntity.ok(reportService.getGrandLivre(from, to, companyId, null));
    }

    @GetMapping("/reports/grand-livre-tiers")
    public ResponseEntity<?> grandLivreTiers(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        return ResponseEntity.ok(reportService.getGrandLivreTiers(from, to, companyId, null));
    }

@GetMapping("/reports/bilan")
    public ResponseEntity<?> bilan(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo,
            @RequestParam(required = false) String periodType,
            @RequestParam(required = false) Boolean includeUnposted,
            @RequestParam(required = false) Boolean comparisonEnabled) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        return ResponseEntity.ok(reportService.getBilanOhada(from, to, companyId, periodType, includeUnposted, comparisonEnabled));
    }

    @GetMapping("/reports/compte-resultat")
    public ResponseEntity<?> compteResultat(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        return ResponseEntity.ok(reportService.getCompteDeResultat(from, to, companyId, "annuel"));
    }

    @GetMapping("/reports/cashbook")
    public ResponseEntity<?> cashbook(@RequestParam Long companyId,
            @RequestParam(required = false) String dateFrom,
            @RequestParam(required = false) String dateTo) {
        LocalDate from = dateFrom != null ? LocalDate.parse(dateFrom) : LocalDate.now().withDayOfYear(1);
        LocalDate to   = dateTo   != null ? LocalDate.parse(dateTo)   : LocalDate.now();
        return ResponseEntity.ok(reportService.getCashbook(from, to, companyId, null));
    }

    @GetMapping("/reports/suivi-tiers")
    public ResponseEntity<?> suiviTiers(@RequestParam Long companyId) {
        return ResponseEntity.ok(reportService.getSuiviTiers(companyId));
    }

    private static BigDecimal nvl(BigDecimal v) { return v != null ? v : BigDecimal.ZERO; }
}
