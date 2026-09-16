package com.erp.accounting.service;

import com.erp.accounting.dto.*;
import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountMoveLine;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.AccountMoveLineRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.sales.repository.SalesInvoiceRepository;
import com.erp.purchases.repository.PurchaseInvoiceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class ReportService {

    private final AccountMoveLineRepository moveLineRepo;
    private final AccountAccountRepository accountRepo;
    private final AccountJournalRepository journalRepo;
    private final SalesInvoiceRepository salesInvoiceRepo;
    private final PurchaseInvoiceRepository purchaseInvoiceRepo;
    private final CompanyRepository companyRepository;

    // ======================== BALANCE GÉNÉRALE 4 COLONNES ========================

    public Map<String, Object> getGeneralBalance4Cols(LocalDate dateFrom, LocalDate dateTo,
                                                        Long companyId, List<Long> journalIds,
                                                        String displayAccount) {
        // Soldes d'ouverture (avant dateFrom) — logique identique au module Odoo blessing_repports
        List<AccountMoveLine> initLines = fetchPostedLinesBefore(companyId, dateFrom, journalIds);
        Map<Long, BigDecimal> openingByAccount = new LinkedHashMap<>();
        for (AccountMoveLine line : initLines) {
            if (line.getAccount() == null) continue;
            BigDecimal d = line.getDebit() != null ? line.getDebit() : BigDecimal.ZERO;
            BigDecimal c = line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO;
            openingByAccount.merge(line.getAccount().getId(), d.subtract(c), BigDecimal::add);
        }

        // Mouvements de la période
        List<AccountMoveLine> periodLines = fetchPostedLines(companyId, dateFrom, dateTo, journalIds);
        Map<Long, AccountAggregation> byAccount = new LinkedHashMap<>();
        for (AccountMoveLine line : periodLines) {
            if (line.getAccount() == null) continue;
            byAccount.computeIfAbsent(line.getAccount().getId(),
                    k -> new AccountAggregation(line.getAccount())).addLine(line);
        }

        List<BalanceLineDTO> resultLines = new ArrayList<>();
        BigDecimal totalDebit = BigDecimal.ZERO, totalCredit = BigDecimal.ZERO;
        BigDecimal totalFinalDebit = BigDecimal.ZERO, totalFinalCredit = BigDecimal.ZERO;

        // Accumulateurs NET pour sections (affichage net comme Odoo)
        BigDecimal bilanMovDebit = BigDecimal.ZERO, bilanMovCredit = BigDecimal.ZERO;
        BigDecimal bilanFinalNet = BigDecimal.ZERO;
        BigDecimal gestionMovDebit = BigDecimal.ZERO, gestionMovCredit = BigDecimal.ZERO;
        BigDecimal gestionFinalNet = BigDecimal.ZERO;

        List<AccountAccount> allAccounts = accountRepo.findByCompanyIdAndDeprecatedFalseOrderByCode(companyId);

        for (AccountAccount account : allAccounts) {
            BigDecimal opening = openingByAccount.getOrDefault(account.getId(), BigDecimal.ZERO);
            AccountAggregation agg = byAccount.get(account.getId());
            BigDecimal debit = agg != null ? agg.debit : BigDecimal.ZERO;
            BigDecimal credit = agg != null ? agg.credit : BigDecimal.ZERO;

            boolean hasInitial = opening.abs().compareTo(new BigDecimal("0.01")) > 0;
            boolean hasMovement = debit.compareTo(BigDecimal.ZERO) != 0 || credit.compareTo(BigDecimal.ZERO) != 0;
            if ("movement".equals(displayAccount) && !hasInitial && !hasMovement) continue;

            // Solde final = mouvements de la période SEULS (pas de solde initial ici :
            // c'est le comportement voulu pour la balance à 4 colonnes, qui n'affiche
            // pas de solde d'ouverture — fidèle au module de référence blessing_repports.
            // `opening` reste calculé uniquement pour le filtre d'affichage ci-dessus.
            BigDecimal finalBalance = debit.subtract(credit);
            BigDecimal finalDebit  = finalBalance.compareTo(BigDecimal.ZERO) > 0 ? finalBalance : BigDecimal.ZERO;
            BigDecimal finalCredit = finalBalance.compareTo(BigDecimal.ZERO) < 0 ? finalBalance.abs() : BigDecimal.ZERO;

            resultLines.add(BalanceLineDTO.builder()
                    .accountCode(account.getCode()).accountName(account.getName())
                    .debit(debit).credit(credit)
                    .finalDebit(finalDebit).finalCredit(finalCredit)
                    .build());

            totalDebit = totalDebit.add(debit);
            totalCredit = totalCredit.add(credit);
            totalFinalDebit = totalFinalDebit.add(finalDebit);
            totalFinalCredit = totalFinalCredit.add(finalCredit);

            String code = account.getCode();
            if (code != null && !code.isEmpty()) {
                char c = code.charAt(0);
                if (c >= '1' && c <= '5') {
                    bilanMovDebit = bilanMovDebit.add(debit);
                    bilanMovCredit = bilanMovCredit.add(credit);
                    bilanFinalNet = bilanFinalNet.add(finalBalance);
                } else if (c >= '6' && c <= '8') {
                    gestionMovDebit = gestionMovDebit.add(debit);
                    gestionMovCredit = gestionMovCredit.add(credit);
                    gestionFinalNet = gestionFinalNet.add(finalBalance);
                }
            }
        }

        // Affichage NET des sections (positif → débit, négatif → crédit)
        BigDecimal bilanMovNet = bilanMovDebit.subtract(bilanMovCredit);
        BigDecimal gestionMovNet = gestionMovDebit.subtract(gestionMovCredit);
        boolean equilibreMovement = bilanMovNet.add(gestionMovNet).abs().compareTo(new BigDecimal("0.01")) <= 0;

        Map<String, Object> totals = new LinkedHashMap<>();
        totals.put("bilanDebit",        bilanMovNet.compareTo(BigDecimal.ZERO) > 0 ? bilanMovNet : BigDecimal.ZERO);
        totals.put("bilanCredit",       bilanMovNet.compareTo(BigDecimal.ZERO) < 0 ? bilanMovNet.abs() : BigDecimal.ZERO);
        totals.put("bilanFinalDebit",   bilanFinalNet.compareTo(BigDecimal.ZERO) > 0 ? bilanFinalNet : BigDecimal.ZERO);
        totals.put("bilanFinalCredit",  bilanFinalNet.compareTo(BigDecimal.ZERO) < 0 ? bilanFinalNet.abs() : BigDecimal.ZERO);
        totals.put("gestionDebit",      gestionMovNet.compareTo(BigDecimal.ZERO) > 0 ? gestionMovNet : BigDecimal.ZERO);
        totals.put("gestionCredit",     gestionMovNet.compareTo(BigDecimal.ZERO) < 0 ? gestionMovNet.abs() : BigDecimal.ZERO);
        totals.put("gestionFinalDebit", gestionFinalNet.compareTo(BigDecimal.ZERO) > 0 ? gestionFinalNet : BigDecimal.ZERO);
        totals.put("gestionFinalCredit",gestionFinalNet.compareTo(BigDecimal.ZERO) < 0 ? gestionFinalNet.abs() : BigDecimal.ZERO);
        totals.put("totalDebit", totalDebit); totals.put("totalCredit", totalCredit);
        totals.put("totalFinalDebit", totalFinalDebit); totals.put("totalFinalCredit", totalFinalCredit);
        totals.put("equilibreMovement", equilibreMovement);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("lines", resultLines); result.put("totals", totals);
        return result;
    }

    // ======================== BALANCE GÉNÉRALE 6 COLONNES ========================

    public Map<String, Object> getGeneralBalance6Cols(LocalDate dateFrom, LocalDate dateTo,
                                                        Long companyId, List<Long> journalIds,
                                                        String displayAccount) {
        List<AccountMoveLine> periodLines = fetchPostedLines(companyId, dateFrom, dateTo, journalIds);
        List<AccountMoveLine> initLines = fetchPostedLinesBefore(companyId, dateFrom, journalIds);

        Map<Long, AccountAggregation> initByAccount = new LinkedHashMap<>();
        for (AccountMoveLine line : initLines) {
            if (line.getAccount() == null) continue;
            initByAccount.computeIfAbsent(line.getAccount().getId(),
                    k -> new AccountAggregation(line.getAccount())).addLine(line);
        }

        Map<Long, AccountAggregation> periodByAccount = new LinkedHashMap<>();
        for (AccountMoveLine line : periodLines) {
            if (line.getAccount() == null) continue;
            periodByAccount.computeIfAbsent(line.getAccount().getId(),
                    k -> new AccountAggregation(line.getAccount())).addLine(line);
        }

        List<BalanceLine6ColsDTO> resultLines = new ArrayList<>();
        BigDecimal totalInitDebit = BigDecimal.ZERO, totalInitCredit = BigDecimal.ZERO;
        BigDecimal totalDebit = BigDecimal.ZERO, totalCredit = BigDecimal.ZERO;
        BigDecimal totalFinalDebit = BigDecimal.ZERO, totalFinalCredit = BigDecimal.ZERO;

        List<AccountAccount> allAccounts = accountRepo.findByCompanyIdAndDeprecatedFalseOrderByCode(companyId);

        for (AccountAccount account : allAccounts) {
            AccountAggregation initAgg = initByAccount.get(account.getId());
            AccountAggregation periodAgg = periodByAccount.get(account.getId());

            BigDecimal initDiff = initAgg != null ? initAgg.debit.subtract(initAgg.credit) : BigDecimal.ZERO;
            BigDecimal initDebit = initDiff.compareTo(BigDecimal.ZERO) > 0 ? initDiff : BigDecimal.ZERO;
            BigDecimal initCredit = initDiff.compareTo(BigDecimal.ZERO) < 0 ? initDiff.abs() : BigDecimal.ZERO;
            BigDecimal debit = periodAgg != null ? periodAgg.debit : BigDecimal.ZERO;
            BigDecimal credit = periodAgg != null ? periodAgg.credit : BigDecimal.ZERO;

            BigDecimal finalDiff = initDebit.add(debit).subtract(initCredit.add(credit));
            BigDecimal finalDebit = finalDiff.compareTo(BigDecimal.ZERO) > 0 ? finalDiff : BigDecimal.ZERO;
            BigDecimal finalCredit = finalDiff.compareTo(BigDecimal.ZERO) < 0 ? finalDiff.abs() : BigDecimal.ZERO;

            if (shouldInclude(displayAccount, debit.add(initDebit), credit.add(initCredit))) {
                resultLines.add(BalanceLine6ColsDTO.builder()
                        .accountCode(account.getCode()).accountName(account.getName())
                        .initialDebit(initDebit).initialCredit(initCredit)
                        .debit(debit).credit(credit)
                        .finalDebit(finalDebit).finalCredit(finalCredit)
                        .build());
                totalInitDebit = totalInitDebit.add(initDebit); totalInitCredit = totalInitCredit.add(initCredit);
                totalDebit = totalDebit.add(debit); totalCredit = totalCredit.add(credit);
                totalFinalDebit = totalFinalDebit.add(finalDebit); totalFinalCredit = totalFinalCredit.add(finalCredit);
            }
        }

        // Calcul des totaux bilan/gestion avec affichage NET (comme Odoo 6-col)
        BigDecimal bilanInitNet = BigDecimal.ZERO, bilanFinalNet6 = BigDecimal.ZERO;
        BigDecimal gestionInitNet = BigDecimal.ZERO, gestionFinalNet6 = BigDecimal.ZERO;
        BigDecimal bilanMovD6 = BigDecimal.ZERO, bilanMovC6 = BigDecimal.ZERO;
        BigDecimal gestionMovD6 = BigDecimal.ZERO, gestionMovC6 = BigDecimal.ZERO;
        for (BalanceLine6ColsDTO line : resultLines) {
            String code = line.getAccountCode();
            if (code == null || code.isEmpty()) continue;
            char c = code.charAt(0);
            BigDecimal initNet  = line.getInitialDebit().subtract(line.getInitialCredit());
            BigDecimal finalNet = line.getFinalDebit().subtract(line.getFinalCredit());
            BigDecimal movNet   = line.getDebit().subtract(line.getCredit());
            if (c >= '1' && c <= '5') {
                bilanInitNet   = bilanInitNet.add(initNet);
                bilanMovD6     = bilanMovD6.add(line.getDebit());
                bilanMovC6     = bilanMovC6.add(line.getCredit());
                bilanFinalNet6 = bilanFinalNet6.add(finalNet);
            } else if (c >= '6' && c <= '8') {
                gestionInitNet   = gestionInitNet.add(initNet);
                gestionMovD6     = gestionMovD6.add(line.getDebit());
                gestionMovC6     = gestionMovC6.add(line.getCredit());
                gestionFinalNet6 = gestionFinalNet6.add(finalNet);
            }
        }
        BigDecimal bilanMovNet6    = bilanMovD6.subtract(bilanMovC6);
        BigDecimal gestionMovNet6  = gestionMovD6.subtract(gestionMovC6);
        boolean equilibre6 = bilanFinalNet6.add(gestionFinalNet6).abs().compareTo(new BigDecimal("0.01")) <= 0;

        Map<String, Object> totals = new LinkedHashMap<>();
        totals.put("totalInitDebit", totalInitDebit); totals.put("totalInitCredit", totalInitCredit);
        totals.put("totalDebit", totalDebit); totals.put("totalCredit", totalCredit);
        totals.put("totalFinalDebit", totalFinalDebit); totals.put("totalFinalCredit", totalFinalCredit);
        // Bilan section
        totals.put("bilanInitDebit",    bilanInitNet.compareTo(BigDecimal.ZERO) > 0 ? bilanInitNet : BigDecimal.ZERO);
        totals.put("bilanInitCredit",   bilanInitNet.compareTo(BigDecimal.ZERO) < 0 ? bilanInitNet.abs() : BigDecimal.ZERO);
        totals.put("bilanDebit",        bilanMovNet6.compareTo(BigDecimal.ZERO) > 0 ? bilanMovNet6 : BigDecimal.ZERO);
        totals.put("bilanCredit",       bilanMovNet6.compareTo(BigDecimal.ZERO) < 0 ? bilanMovNet6.abs() : BigDecimal.ZERO);
        totals.put("bilanFinalDebit",   bilanFinalNet6.compareTo(BigDecimal.ZERO) > 0 ? bilanFinalNet6 : BigDecimal.ZERO);
        totals.put("bilanFinalCredit",  bilanFinalNet6.compareTo(BigDecimal.ZERO) < 0 ? bilanFinalNet6.abs() : BigDecimal.ZERO);
        // Gestion section
        totals.put("gestionInitDebit",    gestionInitNet.compareTo(BigDecimal.ZERO) > 0 ? gestionInitNet : BigDecimal.ZERO);
        totals.put("gestionInitCredit",   gestionInitNet.compareTo(BigDecimal.ZERO) < 0 ? gestionInitNet.abs() : BigDecimal.ZERO);
        totals.put("gestionDebit",        gestionMovNet6.compareTo(BigDecimal.ZERO) > 0 ? gestionMovNet6 : BigDecimal.ZERO);
        totals.put("gestionCredit",       gestionMovNet6.compareTo(BigDecimal.ZERO) < 0 ? gestionMovNet6.abs() : BigDecimal.ZERO);
        totals.put("gestionFinalDebit",   gestionFinalNet6.compareTo(BigDecimal.ZERO) > 0 ? gestionFinalNet6 : BigDecimal.ZERO);
        totals.put("gestionFinalCredit",  gestionFinalNet6.compareTo(BigDecimal.ZERO) < 0 ? gestionFinalNet6.abs() : BigDecimal.ZERO);
        totals.put("equilibre", equilibre6);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("lines", resultLines); result.put("totals", totals);
        return result;
    }

    // ======================== BALANCE DES TIERS 4 COLONNES ========================

    public Map<String, Object> getPartnerBalance4Cols(LocalDate dateFrom, LocalDate dateTo,
                                                        Long companyId, String resultSelection,
                                                        List<Long> partnerIds) {
        List<AccountMoveLine> lines = moveLineRepo.findTiersLinesInPeriod(companyId, dateFrom, dateTo);
        Map<String, List<PartnerBalanceLineDTO>> groups = buildPartnerBalance4(lines, resultSelection, partnerIds);
        List<PartnerBalanceLineDTO> flatLines = new ArrayList<>();
        groups.values().forEach(flatLines::addAll);
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("lines", flatLines); result.put("groups", groups); result.put("totals", computePartnerTotals4(groups));
        return result;
    }

    // ======================== BALANCE DES TIERS 6 COLONNES ========================

    public Map<String, Object> getPartnerBalance6Cols(LocalDate dateFrom, LocalDate dateTo,
                                                        Long companyId, String resultSelection,
                                                        List<Long> partnerIds) {
        List<AccountMoveLine> periodLines = moveLineRepo.findTiersLinesInPeriod(companyId, dateFrom, dateTo);
        List<AccountMoveLine> initLines = moveLineRepo.findTiersLinesBeforeDate(companyId, dateFrom);
        Map<String, List<PartnerBalanceLineDTO>> groups = buildPartnerBalance6(initLines, periodLines, resultSelection, partnerIds);
        List<PartnerBalanceLineDTO> flatLines = new ArrayList<>();
        groups.values().forEach(flatLines::addAll);
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("lines", flatLines); result.put("groups", groups); result.put("totals", computePartnerTotals6(groups));
        return result;
    }

    // ======================== GRAND LIVRE ========================

    public Map<String, Object> getGrandLivre(LocalDate dateFrom, LocalDate dateTo,
                                               Long companyId, List<Long> accountIds) {
        // Soldes d'ouverture (mouvements AVANT dateFrom)
        List<AccountMoveLine> openingLines = moveLineRepo.findPostedBeforeDate(companyId, dateFrom);
        Map<String, BigDecimal> openingByAccount = new LinkedHashMap<>();
        for (AccountMoveLine line : openingLines) {
            if (line.getAccount() == null) continue;
            if (accountIds != null && !accountIds.isEmpty() && !accountIds.contains(line.getAccount().getId())) continue;
            String code = line.getAccount().getCode();
            BigDecimal d = line.getDebit()  != null ? line.getDebit()  : BigDecimal.ZERO;
            BigDecimal c = line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO;
            openingByAccount.merge(code, d.subtract(c), BigDecimal::add);
        }

        // Lignes de la période
        List<AccountMoveLine> lines = moveLineRepo.findForGrandLivre(companyId, dateFrom, dateTo, accountIds);

        Map<String, List<AccountMoveLine>> byAccount = new LinkedHashMap<>();
        for (AccountMoveLine line : lines) {
            if (line.getAccount() == null) continue;
            byAccount.computeIfAbsent(line.getAccount().getCode(), k -> new ArrayList<>()).add(line);
        }

        Map<String, Object> accountsResult = new LinkedHashMap<>();
        for (Map.Entry<String, List<AccountMoveLine>> entry : byAccount.entrySet()) {
            String code = entry.getKey();
            List<AccountMoveLine> accountLines = entry.getValue();
            AccountAccount account = accountLines.get(0).getAccount();

            BigDecimal openingBalance  = openingByAccount.getOrDefault(code, BigDecimal.ZERO);
            BigDecimal cumulativeBalance = openingBalance;
            List<Map<String, Object>> lineResults = new ArrayList<>();

            for (AccountMoveLine line : accountLines) {
                BigDecimal debit = line.getDebit() != null ? line.getDebit() : BigDecimal.ZERO;
                BigDecimal credit = line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO;
                cumulativeBalance = cumulativeBalance.add(debit).subtract(credit);
                Map<String, Object> lineMap = new LinkedHashMap<>();
                lineMap.put("date", line.getDate());
                lineMap.put("ref", line.getMove() != null ? line.getMove().getRef() : "");
                lineMap.put("pieceName", line.getMove() != null ? line.getMove().getName() : "");
                lineMap.put("journal", line.getJournal() != null ? line.getJournal().getCode() : "");
                lineMap.put("libelle", line.getName());
                lineMap.put("partner", line.getPartner() != null ? line.getPartner().getName() : "");
                lineMap.put("debit", debit); lineMap.put("credit", credit); lineMap.put("balance", cumulativeBalance);
                lineResults.add(lineMap);
            }

            BigDecimal totalDebit = accountLines.stream().map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO).reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal totalCredit = accountLines.stream().map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO).reduce(BigDecimal.ZERO, BigDecimal::add);

            Map<String, Object> accountResult = new LinkedHashMap<>();
            accountResult.put("accountCode", code); accountResult.put("accountName", account.getName());
            accountResult.put("openingBalance", openingBalance);
            accountResult.put("lines", lineResults);
            accountResult.put("totalDebit", totalDebit); accountResult.put("totalCredit", totalCredit);
            accountResult.put("finalBalance", cumulativeBalance);
            accountsResult.put(code, accountResult);
        }

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("accounts", accountsResult);
        return result;
    }

    // ======================== GRAND LIVRE DES TIERS ========================

    @Transactional(readOnly = true)
    public Map<String, Object> getGrandLivreTiers(LocalDate dateFrom, LocalDate dateTo,
                                                   Long companyId, String resultSelection) {
        final BigDecimal ZERO = BigDecimal.ZERO;

        // Soldes d'ouverture (mouvements AVANT dateFrom)
        List<AccountMoveLine> openingLines = moveLineRepo.findTiersLinesBeforeDate(companyId, dateFrom);
        Map<Long, BigDecimal> openingByPartner = new LinkedHashMap<>();
        for (AccountMoveLine line : openingLines) {
            if (line.getPartner() == null || !matchesTiersFilter(line, resultSelection)) continue;
            Long pid = line.getPartner().getId();
            BigDecimal d = line.getDebit()  != null ? line.getDebit()  : ZERO;
            BigDecimal c = line.getCredit() != null ? line.getCredit() : ZERO;
            openingByPartner.merge(pid, d.subtract(c), BigDecimal::add);
        }

        // Lignes de la période
        List<AccountMoveLine> periodLines = moveLineRepo.findTiersLinesInPeriod(companyId, dateFrom, dateTo);

        // Grouper par partenaire (clé = id partenaire)
        Map<Long, List<AccountMoveLine>> byPartner = new LinkedHashMap<>();
        Map<Long, String> partnerNames = new LinkedHashMap<>();
        for (AccountMoveLine line : periodLines) {
            if (line.getPartner() == null || !matchesTiersFilter(line, resultSelection)) continue;
            Long pid = line.getPartner().getId();
            partnerNames.put(pid, line.getPartner().getName());
            byPartner.computeIfAbsent(pid, k -> new ArrayList<>()).add(line);
        }
        // Inclure les partenaires qui ont un solde d'ouverture mais aucun mouvement dans la période
        for (Long pid : openingByPartner.keySet()) {
            byPartner.computeIfAbsent(pid, k -> new ArrayList<>());
        }

        List<Map<String, Object>> partners = new ArrayList<>();

        for (Map.Entry<Long, List<AccountMoveLine>> entry : byPartner.entrySet()) {
            Long pid = entry.getKey();
            List<AccountMoveLine> lines = entry.getValue();

            String name = partnerNames.getOrDefault(pid,
                    lines.isEmpty() ? "Inconnu" : lines.get(0).getPartner().getName());

            BigDecimal openingBalance  = openingByPartner.getOrDefault(pid, ZERO);
            BigDecimal totalDebit  = ZERO, totalCredit = ZERO;
            BigDecimal cumulativeBalance = openingBalance;

            List<Map<String, Object>> lineResults = new ArrayList<>();
            for (AccountMoveLine line : lines) {
                BigDecimal d = line.getDebit()  != null ? line.getDebit()  : ZERO;
                BigDecimal c = line.getCredit() != null ? line.getCredit() : ZERO;
                cumulativeBalance = cumulativeBalance.add(d).subtract(c);
                totalDebit  = totalDebit.add(d);
                totalCredit = totalCredit.add(c);
                Map<String, Object> lm = new LinkedHashMap<>();
                lm.put("date",        line.getDate());
                lm.put("pieceName",   line.getMove()    != null ? line.getMove().getName()     : "");
                lm.put("ref",         line.getMove()    != null ? line.getMove().getRef()      : "");
                lm.put("journal",     line.getJournal() != null ? line.getJournal().getCode()  : "");
                lm.put("accountCode", line.getAccount() != null ? line.getAccount().getCode()  : "");
                lm.put("libelle",     line.getName() != null ? line.getName() : "");
                lm.put("debit",   d);
                lm.put("credit",  c);
                lm.put("balance", cumulativeBalance);
                lineResults.add(lm);
            }

            // Exclure les partenaires entièrement à zéro (aucun mouvement dans les deux sens)
            if (openingBalance.compareTo(ZERO) == 0 && totalDebit.compareTo(ZERO) == 0 && totalCredit.compareTo(ZERO) == 0) continue;

            Map<String, Object> pm = new LinkedHashMap<>();
            pm.put("partnerId",      pid);
            pm.put("partnerName",    name);
            pm.put("openingBalance", openingBalance);
            pm.put("totalDebit",     totalDebit);
            pm.put("totalCredit",    totalCredit);
            pm.put("closingBalance", cumulativeBalance);
            pm.put("lines",          lineResults);
            partners.add(pm);
        }

        partners.sort(Comparator.comparing(p -> String.valueOf(p.get("partnerName"))));

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("partners", partners);
        return result;
    }

    private boolean matchesTiersFilter(AccountMoveLine line, String sel) {
        if (sel == null || sel.isBlank() || "all".equals(sel)) return true;
        String t = line.getAccount() != null ? line.getAccount().getInternalType() : "";
        return "customer".equals(sel) ? "receivable".equals(t) : "payable".equals(t);
    }

// ======================== BILAN OHADA ========================
    // Structure complète AD→BZ identique au module Odoo blessing_repports :
    // - Soldes CUMULÉS jusqu'à date_to (pas seulement la période)
    // - Colonnes Brut / Amort / Net N / Net N-1
    // - Comparaison N-1 (selon periodType)
    // - Comptes spéciaux (109, 409, 41, 121/129, 131/139)
    // - Trésorerie actif/passif par solde débiteur/créditeur

    /** Mapping des postes du bilan (REF → poste). types: 'total', 'grand_total' */
    private static final Map<String, Map<String, Object>> BILAN_ACCOUNTS = buildBilanAccounts();
    private static final String[] EMPTY_PREFIXES = new String[0];

    private static Map<String, Map<String, Object>> buildBilanAccounts() {
        Map<String, Map<String, Object>> m = new LinkedHashMap<>();
        // ===== ACTIF =====
        // "compte" = liste des comptes affichée dans la colonne "Cpte" du bilan
        // (comme le module de référence) — purement informatif, sans effet sur le calcul.
        m.put("AD", Map.of("label", "IMMOBILISATIONS INCORPORELLES", "type", "total", "children", new String[]{"AE","AF","AG","AH"}));
        m.put("AE", Map.of("label", "Frais de développement et de prospection", "compte", "211,2181,2191", "brut", new String[]{"211","2181","2191"}, "amort", new String[]{"2811"}));
        m.put("AF", Map.of("label", "Brevet, licences, logiciels et droits similaires", "compte", "212,213,214,2193", "brut", new String[]{"212","213","214","2193"}, "amort", new String[]{"2812","2813","2814"}));
        m.put("AG", Map.of("label", "Fond commercial et droit au bail", "compte", "215", "brut", new String[]{"215"}, "amort", new String[]{"2815"}));
        // "218" chevauche AE ("2181") : exclu ici, comme "217,218 sauf 2181,2198" dans le module de référence.
        m.put("AH", Map.of("label", "Autres immobilisations incorporelles", "compte", "217,218 sauf 2181,2198", "brut", new String[]{"217","218","2198"}, "amort", new String[]{"2817","2818"}, "excludeBrut", new String[]{"2181"}));
        m.put("AI", Map.of("label", "IMMOBILISATIONS CORPORELLES", "type", "total", "children", new String[]{"AJ","AK","AL","AM","AN"}));
        m.put("AJ", Map.of("label", "Terrains", "compte", "22", "brut", new String[]{"22"}, "amort", new String[]{"282"}));
        m.put("AK", Map.of("label", "Bâtiments", "compte", "231,232,233,237,2391", "brut", new String[]{"231","232","233","237","2391"}, "amort", new String[]{"2831","2832","2833","2837"}));
        m.put("AL", Map.of("label", "Aménagements, agencements et installations", "compte", "234,235,238,2392,2393", "brut", new String[]{"234","235","238","2392","2393"}, "amort", new String[]{"2834","2835","2838"}));
        // "24"/"284" chevauchent AN ("245","2495"/"2845","2895") : exclus ici, comme
        // "24 sauf 245,2495" / "284 sauf 2845,2895" dans le module de référence.
        m.put("AM", Map.of("label", "Matériel, mobilier et actifs biologiques", "compte", "24 sauf 245,2495", "brut", new String[]{"24"}, "amort", new String[]{"284"},
            "excludeBrut", new String[]{"245","2495"}, "excludeAmort", new String[]{"2845","2895"}));
        m.put("AN", Map.of("label", "Matériel de transport", "compte", "245,2495", "brut", new String[]{"245","2495"}, "amort", new String[]{"2845","2895"}));
        m.put("AP", Map.of("label", "Avances et acomptes versés sur immobilisation", "compte", "251,252", "brut", new String[]{"251","252"}, "amort", new String[]{"2951"}));
        m.put("AQ", Map.of("label", "IMMOBILISATIONS FINANCIÈRES", "type", "total", "children", new String[]{"AR","AS"}));
        m.put("AR", Map.of("label", "Titres de participation", "compte", "26", "brut", new String[]{"26"}, "amort", new String[]{"296"}));
        m.put("AS", Map.of("label", "Autres immobilisations financières", "compte", "27", "brut", new String[]{"27"}, "amort", new String[]{"297"}));
        m.put("AZ", Map.of("label", "TOTAL ACTIF IMMOBILISÉ", "type", "grand_total", "children", new String[]{"AD","AI","AP","AQ"}));

        m.put("BA", Map.of("label", "Actif circulant HAO", "compte", "485,49", "brut", new String[]{"485","49"}, "amort", new String[]{"498"}));
        m.put("BB", Map.of("label", "Stocks et encours", "compte", "31-38", "brut", new String[]{"31","32","33","34","35","36","37","38"}, "amort", new String[]{"39"}));
        m.put("BC", Map.of("label", "Créances et emplois assimilés", "type", "total", "children", new String[]{"BH","BI","BJ"}));
        m.put("BH", Map.of("label", "Fournisseurs avances versées", "compte", "409", "brut", new String[]{"409"}, "amort", new String[]{"490"}, "special", "debit"));
        // "41" chevauche "419" (rattaché à BJ ci-dessous, pas à BI) : exclu ici,
        // comme "41 sauf 419" dans le module de référence.
        m.put("BI", Map.of("label", "Clients", "compte", "41 sauf 419", "brut", new String[]{"41"}, "amort", new String[]{"491"}, "excludeBrut", new String[]{"419"}));
        m.put("BJ", Map.of("label", "Autres créances soldes débiteurs", "compte", "42,43,44,45,46,47,419,185", "brut", new String[]{"42","43","44","45","46","47","419","185"}, "amort", new String[]{"492","493","494","495","496","497"}, "special", "debit"));
        m.put("BK", Map.of("label", "TOTAL ACTIF CIRCULANT", "type", "grand_total", "children", new String[]{"BA","BB","BC"}));

        m.put("BQ", Map.of("label", "Titres de placement", "compte", "50", "brut", new String[]{"50"}, "amort", new String[]{"59"}));
        m.put("BR", Map.of("label", "Valeurs à encaisser", "compte", "51", "brut", new String[]{"51"}, "amort", new String[]{}));
        m.put("BS", Map.of("label", "Banques, chèques postaux, caisse et assimilés soldes débiteurs", "compte", "52,53,54,55,57,58", "brut", new String[]{"52","53","54","55","57","58"}, "amort", new String[]{}, "special", "debit"));
        m.put("BT", Map.of("label", "TOTAL TRÉSORERIE - ACTIF", "type", "grand_total", "children", new String[]{"BQ","BR","BS"}));
        m.put("BU", Map.of("label", "Écart de conversion - Actif", "compte", "478", "brut", new String[]{"478"}, "amort", new String[]{}));

        // ===== PASSIF =====
        // Préfixes alignés sur le plan comptable RÉELLEMENT semé par OhadaDataInitializer (SYSCOHADA
        // standard : 10 Capital / 104 Primes / 105 Écarts de réévaluation / 106 Réserves / 109
        // Actionnaires non appelé / 11(111/119) Report à nouveau / 12(121/129) Résultat net / 13
        // Subventions / 14 Provisions réglementées / 15+19 Provisions risques et charges / 16 Emprunts
        // / 17 Crédit-bail / 18 Dettes liées à des participations) — les anciens préfixes (105/106 pour
        // primes/écarts, 111-113/118 pour réserves, 121/129 pour report à nouveau, 14/15 pour
        // subventions/provisions réglementées, 181-185 sans compte "16" parent) ne correspondaient à
        // AUCUN compte réellement seedé : plusieurs postes du passif (réserves, report à nouveau,
        // subventions, provisions réglementées, dettes liées à des participations) étaient soit vides
        // soit mélangés avec le résultat de l'exercice, rendant le bilan durablement déséquilibré.
        m.put("CA", Map.of("label", "Capital", "compte", "101", "brut", new String[]{"101"}, "special", "credit"));
        m.put("CB", Map.of("label", "Apporteurs capital non appelé (-)", "compte", "109", "brut", new String[]{"109"}, "special", "sub"));
        m.put("CD", Map.of("label", "Primes liées au capital social", "compte", "104", "brut", new String[]{"104"}, "special", "credit"));
        m.put("CE", Map.of("label", "Écarts de réévaluations", "compte", "105", "brut", new String[]{"105"}, "special", "credit"));
        // Réserve légale/statutaires/réglementées = indisponibles (retrait restreint par la loi/les
        // statuts) ; "autres réserves" = libres. Le compte parent "106" (non ventilé par sous-compte)
        // est rattaché aux réserves libres par défaut — à confirmer avec un comptable si une société
        // poste directement dessus sans passer par un sous-compte.
        m.put("CF", Map.of("label", "Réserves indisponibles", "compte", "1061,1062,1063", "brut", new String[]{"1061","1062","1063"}, "special", "credit"));
        m.put("CG", Map.of("label", "Réserves libres", "compte", "106 sauf 1061,1062,1063", "brut", new String[]{"106"}, "excludeBrut", new String[]{"1061","1062","1063"}, "special", "credit"));
        m.put("CH", Map.of("label", "Report à nouveau (+ ou -)", "compte", "111,119", "brut", new String[]{"111","119"}, "special", "sign"));
        m.put("CJ", Map.of("label", "Résultat net de l'exercice (bénéfice + ou perte -)", "compte", "121,129", "brut", new String[]{}, "special", "profit_loss"));
        m.put("CL", Map.of("label", "Subventions d'investissement", "compte", "13", "brut", new String[]{"13"}, "special", "credit"));
        m.put("CM", Map.of("label", "Provisions réglementées", "compte", "14", "brut", new String[]{"14"}, "special", "credit"));
        m.put("CP", Map.of("label", "TOTAL CAPITAUX PROPRES ET RESSOURCES ASSIMILÉES", "type", "grand_total", "children", new String[]{"CA","CB","CD","CE","CF","CG","CH","CJ","CL","CM"}));

        m.put("DA", Map.of("label", "Emprunts et dettes financières diverses", "compte", "16,18", "brut", new String[]{"16","18"}, "special", "credit"));
        m.put("DB", Map.of("label", "Dettes de location acquisition", "compte", "17", "brut", new String[]{"17"}, "special", "credit"));
        // "15" (Provisions pour risques et charges, générique) et "19" (…à long terme) coexistent tous
        // deux dans le plan seedé pour le même concept — les deux préfixes sont inclus pour ne perdre
        // aucun montant, quel que soit le compte choisi lors de la saisie.
        m.put("DC", Map.of("label", "Provisions pour risques et charges", "compte", "15,19", "brut", new String[]{"15","19"}, "special", "credit"));
        m.put("DD", Map.of("label", "TOTAL DETTES FINANCIÈRES ET RESSOURCES ASSIMILÉES", "type", "grand_total", "children", new String[]{"DA","DB","DC"}));
        m.put("DF", Map.of("label", "TOTAL RESSOURCES STABLES", "type", "grand_total", "children", new String[]{"CP","DD"}));

        m.put("DH", Map.of("label", "Dettes circulantes HAO", "compte", "481,482,484,4998", "brut", new String[]{"481","482","484","4998"}, "special", "credit"));
        m.put("DI", Map.of("label", "Clients, avances reçues", "compte", "419", "brut", new String[]{"419"}, "special", "credit"));
        // "40" chevauche BH ("409", solde débiteur) : exclu ici par cohérence avec
        // "40 sauf 409" du module de référence (sans effet pratique — signes opposés).
        m.put("DJ", Map.of("label", "Fournisseurs d'exploitation", "compte", "40 sauf 409", "brut", new String[]{"40"}, "special", "credit", "excludeBrut", new String[]{"409"}));
        m.put("DK", Map.of("label", "Dettes fiscales et sociales soldes créditeurs", "compte", "42,43,44", "brut", new String[]{"42","43","44"}, "special", "credit"));
        // "47" chevauche DY ("479") : exclu ici, comme "45,46,47 sauf 479" dans le module de référence.
        m.put("DL", Map.of("label", "Autres dettes soldes créditeurs", "compte", "45,46,47 sauf 479", "brut", new String[]{"45","46","47"}, "special", "credit", "excludeBrut", new String[]{"479"}));
        // "499" chevauche DH ("4998") : exclu ici, comme "499 sauf 4998,599" dans le module de référence.
        m.put("DM", Map.of("label", "Provisions pour risques à court terme", "compte", "499 sauf 4998,599", "brut", new String[]{"499","599"}, "special", "credit", "excludeBrut", new String[]{"4998"}));
        m.put("DP", Map.of("label", "TOTAL PASSIF CIRCULANT", "type", "grand_total", "children", new String[]{"DH","DI","DJ","DK","DL","DM"}));

        m.put("DQ", Map.of("label", "Banques, crédits d'escompte", "compte", "564,57", "brut", new String[]{"564","57"}, "special", "credit"));
        m.put("DR", Map.of("label", "Banques, établissements financiers et crédits de trésorerie soldes créditeurs", "compte", "52,53,561,566,58", "brut", new String[]{"52","53","561","566","58"}, "special", "credit"));
        m.put("DT", Map.of("label", "TOTAL TRÉSORERIE - PASSIF", "type", "grand_total", "children", new String[]{"DQ","DR"}));
        m.put("DY", Map.of("label", "Écart de conversion - Passif", "compte", "479", "brut", new String[]{"479"}, "special", "credit"));

        m.put("BZ_ACTIF", Map.of("label", "TOTAL GÉNÉRAL", "type", "grand_total", "children", new String[]{"AZ","BK","BT","BU"}));
        m.put("BZ_PASSIF", Map.of("label", "TOTAL GÉNÉRAL", "type", "grand_total", "children", new String[]{"DF","DP","DT","DY"}));
        return m;
    }

    private static final String[] BILAN_ACTIF_REFS = {"AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AP","AQ","AR","AS","AZ",
            "BA","BB","BC","BH","BI","BJ","BK","BQ","BR","BS","BT","BU","BZ_ACTIF"};
    private static final String[] BILAN_PASSIF_REFS = {"CA","CB","CD","CE","CF","CG","CH","CJ","CL","CM","CP",
            "DA","DB","DC","DD","DF","DH","DI","DJ","DK","DL","DM","DP","DQ","DR","DT","DY","BZ_PASSIF"};

    public Map<String, Object> getBilanOhada(LocalDate dateFrom, LocalDate dateTo, Long companyId,
                                              String periodType, Boolean includeUnposted, Boolean comparisonEnabled) {
        boolean incUnposted = includeUnposted != null && includeUnposted;
        boolean cmpEnabled = comparisonEnabled == null || comparisonEnabled;

        // Soldes CUMULÉS jusqu'à date_to (actif/passif) — comme Odoo. Valable pour
        // les comptes de BILAN (classes 1-5, des comptes de stock/position), mais
        // PAS pour le résultat de l'exercice (classes 6/7/8, des comptes de flux) :
        // voir balanceExerciseN plus bas.
        Map<String, BigDecimal> balanceN = buildBalanceByCode(
                incUnposted ? moveLineRepo.findAllUpToDateOptionalUnposted(companyId, dateTo, true)
                            : moveLineRepo.findPostedUpToDate(companyId, dateTo));

        // Période N-1
        LocalDate[] n1 = computePreviousPeriod(dateFrom, dateTo, periodType);
        Map<String, BigDecimal> balanceN1 = new LinkedHashMap<>();
        if (cmpEnabled && n1 != null) {
            balanceN1 = buildBalanceByCode(
                    incUnposted ? moveLineRepo.findAllUpToDateOptionalUnposted(companyId, n1[1], true)
                                : moveLineRepo.findPostedUpToDate(companyId, n1[1]));
        }

        // Résultat net de l'exercice : borné à l'exercice fiscal en cours de la
        // société, pas cumulé depuis l'origine des écritures. Sans cette borne,
        // le résultat affiché grossirait indéfiniment d'un exercice sur l'autre
        // (aucune écriture de clôture n'existe dans ce système — inutile d'en
        // ajouter une : borner la lecture des comptes 6/7/8 à l'exercice suffit).
        int fyStartMonth = companyRepository.findById(companyId)
                .map(Company::getFiscalYearStartMonth)
                .filter(mth -> mth != null && mth >= 1 && mth <= 12)
                .orElse(1);
        LocalDate exerciseStartN = computeExerciseStart(dateTo, fyStartMonth);
        Map<String, BigDecimal> balanceExerciseN = buildBalanceByCode(
                incUnposted ? moveLineRepo.findAllByDateRangeOptionalUnposted(companyId, exerciseStartN, dateTo, true)
                            : moveLineRepo.findPostedByCompanyAndDateRange(companyId, exerciseStartN, dateTo));

        // Résultat N-1 : exercice fiscal COMPLET précédent (pas la période de
        // comparaison n1[], qui peut n'être qu'un fragment — le résultat N-1 d'un
        // bilan est toujours celui de l'exercice antérieur dans son intégralité).
        Map<String, BigDecimal> balanceExerciseN1 = new LinkedHashMap<>();
        if (cmpEnabled) {
            LocalDate exerciseEndPrev = exerciseStartN.minusDays(1);
            LocalDate exerciseStartPrev = exerciseStartN.minusYears(1);
            balanceExerciseN1 = buildBalanceByCode(
                    incUnposted ? moveLineRepo.findAllByDateRangeOptionalUnposted(companyId, exerciseStartPrev, exerciseEndPrev, true)
                                : moveLineRepo.findPostedByCompanyAndDateRange(companyId, exerciseStartPrev, exerciseEndPrev));
        }

        // Calcul des postes individuels + spéciaux
        Map<String, Map<String, Object>> processed = new LinkedHashMap<>();
        for (String ref : BILAN_ACTIF_REFS) {
            if (BILAN_ACCOUNTS.get(ref).get("type") == null) {
                processed.put(ref, computeBilanPoste(ref, balanceN, balanceN1, BILAN_ACCOUNTS.get(ref)));
            }
        }
        for (String ref : BILAN_PASSIF_REFS) {
            if (BILAN_ACCOUNTS.get(ref).get("type") == null) {
                processed.put(ref, computeBilanPoste(ref, balanceN, balanceN1, BILAN_ACCOUNTS.get(ref)));
            }
        }
        // Comptes spéciaux
        handleBilanSpecialAccounts(processed, balanceN, balanceN1, balanceExerciseN, balanceExerciseN1);

        // Calcul des totaux (récursif)
        for (String ref : BILAN_ACTIF_REFS) {
            Map<String, Object> cfg = BILAN_ACCOUNTS.get(ref);
            if ("total".equals(cfg.get("type")) || "grand_total".equals(cfg.get("type"))) {
                processed.put(ref, computeBilanTotal(ref, cfg, processed));
            }
        }
        for (String ref : BILAN_PASSIF_REFS) {
            Map<String, Object> cfg = BILAN_ACCOUNTS.get(ref);
            if ("total".equals(cfg.get("type")) || "grand_total".equals(cfg.get("type"))) {
                processed.put(ref, computeBilanTotal(ref, cfg, processed));
            }
        }

        BigDecimal totalActif = netN(processed.get("BZ_ACTIF"));
        BigDecimal totalPassif = netN(processed.get("BZ_PASSIF"));

        // Construire la réponse structurée (compatible avec le frontend existant + enrichi)
        Map<String, Object> actif = new LinkedHashMap<>();
        actif.put("postes", BILAN_ACTIF_REFS);
        actif.put("processed", processed);
        actif.put("totalActif", totalActif);

        Map<String, Object> passif = new LinkedHashMap<>();
        passif.put("postes", BILAN_PASSIF_REFS);
        passif.put("processed", processed);
        passif.put("totalPassif", totalPassif);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("actif", actif);
        result.put("passif", passif);
        result.put("postes", processed);
        result.put("totalActif", totalActif);
        result.put("totalPassif", totalPassif);
        result.put("equilibre", totalActif.subtract(totalPassif).abs().compareTo(new BigDecimal("1")) <= 0);
        result.put("dateFrom", dateFrom.toString());
        result.put("dateTo", dateTo.toString());
        result.put("comparisonEnabled", cmpEnabled);
        if (n1 != null && cmpEnabled) {
            result.put("dateFromN1", n1[0].toString());
            result.put("dateToN1", n1[1].toString());
        }
        return result;
    }

/** Calcule un poste simple (brut / amort / net / net n-1) */
    private Map<String, Object> computeBilanPoste(String ref, Map<String, BigDecimal> bcN,
                                                  Map<String, BigDecimal> bcN1, Map<String, Object> cfg) {
        String[] brutCodes = (String[]) cfg.get("brut");
        String[] amortCodes = (String[]) cfg.get("amort");
        String special = (String) cfg.get("special");
        // Exclusions (ex. AH="217,218,2198" mais "2181" appartient déjà à AE) :
        // équivalent de la syntaxe "218 sauf 2181" du module de référence.
        String[] excludeBrut = (String[]) cfg.get("excludeBrut");
        String[] excludeAmort = (String[]) cfg.get("excludeAmort");

        // Les postes du passif ne définissent pas de clé "amort" → traiter comme vide
        if (brutCodes == null) brutCodes = new String[0];
        if (amortCodes == null) amortCodes = new String[0];
        if (excludeBrut == null) excludeBrut = new String[0];
        if (excludeAmort == null) excludeAmort = new String[0];

        BigDecimal brutN = BigDecimal.ZERO, amortN = BigDecimal.ZERO;
        BigDecimal brutN1 = BigDecimal.ZERO, amortN1 = BigDecimal.ZERO;

        if ("credit".equals(special)) {
            // Poste du passif : on prend les soldes CRÉDITEURS
            brutN = sumCreditByPrefix(bcN, brutCodes, excludeBrut);
            brutN1 = sumCreditByPrefix(bcN1, brutCodes, excludeBrut);
        } else if ("debit".equals(special)) {
            // Poste de l'actif : on prend les soldes DÉBITEURS
            brutN = sumDebitByPrefix(bcN, brutCodes, excludeBrut);
            brutN1 = sumDebitByPrefix(bcN1, brutCodes, excludeBrut);
        } else if ("sub".equals(special)) {
            // Apporteurs capital non appelé : on soustrait
            BigDecimal rawN = sumByPrefixes(bcN, brutCodes);
            BigDecimal rawN1 = sumByPrefixes(bcN1, brutCodes);
            brutN = rawN.abs().negate();
            brutN1 = rawN1.abs().negate();
        } else if ("sign".equals(special)) {
            // Report à nouveau : créditeur → positif, débiteur → négatif
            brutN = signedReportValue(sumByPrefixes(bcN, brutCodes));
            brutN1 = signedReportValue(sumByPrefixes(bcN1, brutCodes));
        } else if ("profit_loss".equals(special)) {
            // Résultat : calcul depuis les comptes de gestion
            brutN = computeProfitLoss(bcN);
            brutN1 = computeProfitLoss(bcN1);
        } else {
            // Poste normal de l'actif : soldes débiteurs (net)
            brutN = sumDebitByPrefix(bcN, brutCodes, excludeBrut);
            brutN1 = sumDebitByPrefix(bcN1, brutCodes, excludeBrut);
        }

        // Amortissements : toujours créditeurs (soustraits)
        amortN = sumCreditByPrefix(bcN, amortCodes, excludeAmort);
        amortN1 = sumCreditByPrefix(bcN1, amortCodes, excludeAmort);

        BigDecimal netN = brutN.subtract(amortN);
        BigDecimal netN1 = brutN1.subtract(amortN1);

        Map<String, Object> r = new LinkedHashMap<>();
        r.put("ref", ref);
        r.put("label", cfg.get("label"));
        r.put("compte", cfg.getOrDefault("compte", ""));
        r.put("brut", Map.of("n", r2(brutN), "n_1", r2(brutN1)));
        r.put("amort", Map.of("n", r2(amortN), "n_1", r2(amortN1)));
        r.put("net", Map.of("n", r2(netN), "n_1", r2(netN1)));
        r.put("type", null);
        return r;
    }

    /** Calcule un total à partir de ses enfants */
    private Map<String, Object> computeBilanTotal(String ref, Map<String, Object> cfg, Map<String, Map<String, Object>> processed) {
        String[] children = (String[]) cfg.get("children");
        BigDecimal brutN = BigDecimal.ZERO, brutN1 = BigDecimal.ZERO;
        BigDecimal amortN = BigDecimal.ZERO, amortN1 = BigDecimal.ZERO;
        BigDecimal netN = BigDecimal.ZERO, netN1 = BigDecimal.ZERO;

        for (String child : children) {
            Map<String, Object> childData = processed.get(child);
            if (childData == null) continue;
            // Somme du VRAI brut de chaque enfant (pas |net|) : sinon Brut - Amort != Net au
            // niveau d'un total, même si l'égalité est correcte à chaque poste feuille.
            brutN  = brutN.add(brutOf(childData));
            brutN1 = brutN1.add(brutOfN1(childData));
            netN   = netN.add(netN(childData));
            netN1  = netN1.add(netN1(childData));
            amortN = amortN.add(amort(childData));
            amortN1 = amortN1.add(amortN1(childData));
        }

        Map<String, Object> r = new LinkedHashMap<>();
        r.put("ref", ref);
        r.put("label", cfg.get("label"));
        r.put("compte", ""); // les totaux n'ont pas de compte propre, comme dans le module de référence
        r.put("brut", Map.of("n", r2(brutN), "n_1", r2(brutN1)));
        r.put("amort", Map.of("n", r2(amortN), "n_1", r2(amortN1)));
        r.put("net", Map.of("n", r2(netN), "n_1", r2(netN1)));
        r.put("type", cfg.get("type"));
        return r;
    }

    /** Gère les comptes spéciaux qui dépendent de plusieurs codes (BH, DI, CH, CJ, CB) */
    private void handleBilanSpecialAccounts(Map<String, Map<String, Object>> processed,
                                            Map<String, BigDecimal> bcN, Map<String, BigDecimal> bcN1,
                                            Map<String, BigDecimal> bcExerciseN, Map<String, BigDecimal> bcExerciseN1) {
// BH : Fournisseurs avances versées = soldes débiteurs de tous les comptes 40
        Map<String, Object> cfgBH = BILAN_ACCOUNTS.get("BH");
        BigDecimal bhN = sumDebitByPrefix(bcN, new String[]{"40"});
        BigDecimal bhN1 = sumDebitByPrefix(bcN1, new String[]{"40"});
        processed.put("BH", poste("BH", cfgBH.get("label"), null, "409 (soldes débiteurs 40)",
                r2(bhN), r2(bhN1), BigDecimal.ZERO, BigDecimal.ZERO));

        // DI : Clients avances reçues = soldes créditeurs de tous les comptes 41
        Map<String, Object> cfgDI = BILAN_ACCOUNTS.get("DI");
        BigDecimal diN = sumCreditByPrefix(bcN, new String[]{"41"});
        BigDecimal diN1 = sumCreditByPrefix(bcN1, new String[]{"41"});
        processed.put("DI", poste("DI", cfgDI.get("label"), null, "419 (soldes créditeurs 41)",
                r2(diN), r2(diN1), BigDecimal.ZERO, BigDecimal.ZERO));

        // CB : Apporteurs capital non appelé (-)
        Map<String, Object> cfgCB = BILAN_ACCOUNTS.get("CB");
        BigDecimal cbN = sumByPrefixes(bcN, new String[]{"109"});
        BigDecimal cbN1 = sumByPrefixes(bcN1, new String[]{"109"});
        processed.put("CB", Map.of("ref","CB","label",cfgCB.get("label"),"type","subtraction","compte","109",
                "brut", Map.of("n", r2(cbN.abs().negate()), "n_1", r2(cbN1.abs().negate())),
                "amort", Map.of("n", BigDecimal.ZERO, "n_1", BigDecimal.ZERO),
                "net", Map.of("n", r2(cbN.abs().negate()), "n_1", r2(cbN1.abs().negate()))));

        // CH : Report à nouveau (+ ou -) — comptes 111 (créditeur) / 119 (débiteur) du plan seedé
        // (OhadaDataInitializer), PAS 121/129 qui sont le résultat de l'exercice (CJ ci-dessous) :
        // utiliser 121/129 ici faisait apparaître le résultat de l'exercice une seconde fois, sous
        // l'étiquette "report à nouveau", tout en laissant les vrais comptes 111/119 des morts.
        Map<String, Object> cfgCH = BILAN_ACCOUNTS.get("CH");
        BigDecimal chN = signedReportValue(sumByPrefixes(bcN, new String[]{"111","119"}));
        BigDecimal chN1 = signedReportValue(sumByPrefixes(bcN1, new String[]{"111","119"}));
        processed.put("CH", Map.of("ref","CH","label",cfgCH.get("label"),"type","signed_value","compte","111,119",
                "brut", Map.of("n", r2(chN), "n_1", r2(chN1)),
                "amort", Map.of("n", BigDecimal.ZERO, "n_1", BigDecimal.ZERO),
                "net", Map.of("n", r2(chN), "n_1", r2(chN1))));

        // CJ : Résultat net de l'exercice — borné à l'exercice fiscal en cours
        // (bcExerciseN/N1), pas à tout l'historique (bcN/N1 servent aux comptes
        // de bilan uniquement, ce sont des comptes de flux ici). Somme brute des
        // classes 6/7/8, fidèle à _get_profit_loss_traditional() du module de
        // référence blessing_repports (celui-ci utilise le même calcul, PAS la
        // chaîne de rubriques du compte de résultat — les deux peuvent donc
        // légitimement afficher des chiffres différents, comme dans Odoo).
        Map<String, Object> cfgCJ = BILAN_ACCOUNTS.get("CJ");
        BigDecimal cjN = computeProfitLoss(bcExerciseN);
        BigDecimal cjN1 = computeProfitLoss(bcExerciseN1);
        processed.put("CJ", Map.of("ref","CJ","label",cfgCJ.get("label"),"type","signed_value","compte","6,7,8 (résultat net)",
                "brut", Map.of("n", r2(cjN), "n_1", r2(cjN1)),
                "amort", Map.of("n", BigDecimal.ZERO, "n_1", BigDecimal.ZERO),
                "net", Map.of("n", r2(cjN), "n_1", r2(cjN1))));
    }

    /** Date de début de l'exercice fiscal contenant `asOf`, selon le mois de
     *  début d'exercice configuré pour la société (1 = janvier par défaut). */
    private LocalDate computeExerciseStart(LocalDate asOf, int fiscalYearStartMonth) {
        int m = (fiscalYearStartMonth < 1 || fiscalYearStartMonth > 12) ? 1 : fiscalYearStartMonth;
        LocalDate candidate = LocalDate.of(asOf.getYear(), m, 1);
        if (candidate.isAfter(asOf)) candidate = candidate.minusYears(1);
        return candidate;
    }

    /** Calcule la période N-1 selon le type de période */
    private LocalDate[] computePreviousPeriod(LocalDate dateFrom, LocalDate dateTo, String periodType) {
        if (periodType == null) periodType = "monthly";
        switch (periodType) {
            case "yearly":
                return new LocalDate[]{dateFrom.minusYears(1), dateTo.minusYears(1)};
            case "quarterly": {
                int currentQuarter = (dateTo.getMonthValue() - 1) / 3 + 1;
                int prevQuarter = currentQuarter == 1 ? 4 : currentQuarter - 1;
                int prevYear = dateTo.getYear();
                if (currentQuarter == 1) prevYear -= 1;
                LocalDate pf, pt;
                switch (prevQuarter) {
                    case 1: pf = LocalDate.of(prevYear,1,1); pt = LocalDate.of(prevYear,3,31); break;
                    case 2: pf = LocalDate.of(prevYear,4,1); pt = LocalDate.of(prevYear,6,30); break;
                    case 3: pf = LocalDate.of(prevYear,7,1); pt = LocalDate.of(prevYear,9,30); break;
                    default: pf = LocalDate.of(prevYear,10,1); pt = LocalDate.of(prevYear,12,31); break;
                }
                return new LocalDate[]{pf, pt};
            }
            case "custom": {
                // période précédente de même longueur juste avant dateFrom
                long days = java.time.temporal.ChronoUnit.DAYS.between(dateFrom, dateTo);
                LocalDate pt = dateFrom.minusDays(1);
                LocalDate pf = pt.minusDays(days);
                return new LocalDate[]{pf, pt};
            }
            case "monthly":
            default: {
                // Le mois calendaire précédent (ex : mois affiché = mars → N-1 = février),
                // pas une fenêtre de même durée en jours qui déborderait sur le mois d'avant.
                LocalDate pf = dateFrom.withDayOfMonth(1).minusMonths(1);
                LocalDate pt = pf.withDayOfMonth(pf.lengthOfMonth());
                return new LocalDate[]{pf, pt};
            }
        }
    }

    /** Résultat net depuis les comptes de gestion (6,7,8) : résultat = -(débit - crédit) */
    private BigDecimal computeProfitLoss(Map<String, BigDecimal> bc) {
        BigDecimal solde = sumByPrefixes(bc, "6").add(sumByPrefixes(bc, "7")).add(sumByPrefixes(bc, "8"));
        return solde.negate();
    }

    /** Report à nouveau : créditeur → positif, débiteur → négatif */
    private BigDecimal signedReportValue(BigDecimal net) {
        if (net == null) return BigDecimal.ZERO;
        if (net.compareTo(BigDecimal.ZERO) > 0) return net.abs().negate();
        if (net.compareTo(BigDecimal.ZERO) < 0) return net.abs();
        return BigDecimal.ZERO;
    }

    private BigDecimal netN(Map<String, Object> poste) {
        if (poste == null) return BigDecimal.ZERO;
        Object net = ((Map<?,?>) poste.get("net")).get("n");
        return net instanceof BigDecimal bd ? bd : BigDecimal.ZERO;
    }
    private BigDecimal netN1(Map<String, Object> poste) {
        if (poste == null) return BigDecimal.ZERO;
        Object net = ((Map<?,?>) poste.get("net")).get("n_1");
        return net instanceof BigDecimal bd ? bd : BigDecimal.ZERO;
    }
    private BigDecimal brutOf(Map<String, Object> poste) {
        if (poste == null) return BigDecimal.ZERO;
        Object b = ((Map<?,?>) poste.get("brut")).get("n");
        return b instanceof BigDecimal bd ? bd : BigDecimal.ZERO;
    }
    private BigDecimal brutOfN1(Map<String, Object> poste) {
        if (poste == null) return BigDecimal.ZERO;
        Object b = ((Map<?,?>) poste.get("brut")).get("n_1");
        return b instanceof BigDecimal bd ? bd : BigDecimal.ZERO;
    }
    private BigDecimal amort(Map<String, Object> poste) {
        if (poste == null) return BigDecimal.ZERO;
        Object a = ((Map<?,?>) poste.get("amort")).get("n");
        return a instanceof BigDecimal bd ? bd : BigDecimal.ZERO;
    }
    private BigDecimal amortN1(Map<String, Object> poste) {
        if (poste == null) return BigDecimal.ZERO;
        Object a = ((Map<?,?>) poste.get("amort")).get("n_1");
        return a instanceof BigDecimal bd ? bd : BigDecimal.ZERO;
    }

private BigDecimal r2(BigDecimal v) { return v == null ? BigDecimal.ZERO : v.setScale(0, java.math.RoundingMode.HALF_UP); }

    /** Construit une Map de poste sans valeur null interdite par Map.of (utilise LinkedHashMap). */
    private Map<String, Object> poste(String ref, Object label, Object type,
                                      BigDecimal brutN, BigDecimal brutN1,
                                      BigDecimal amortN, BigDecimal amortN1) {
        return poste(ref, label, type, "", brutN, brutN1, amortN, amortN1);
    }

    private Map<String, Object> poste(String ref, Object label, Object type, String compte,
                                      BigDecimal brutN, BigDecimal brutN1,
                                      BigDecimal amortN, BigDecimal amortN1) {
        Map<String, Object> r = new LinkedHashMap<>();
        r.put("ref", ref);
        r.put("label", label);
        r.put("compte", compte);
        r.put("brut", Map.of("n", r2(brutN), "n_1", r2(brutN1)));
        r.put("amort", Map.of("n", r2(amortN), "n_1", r2(amortN1)));
        r.put("net", Map.of("n", r2(brutN).subtract(r2(amortN)), "n_1", r2(brutN1).subtract(r2(amortN1))));
        r.put("type", type);
        return r;
    }

    /** Somme des soldes DÉBITEURS (positifs) pour les codes donnés */
    private BigDecimal sumDebitByPrefix(Map<String, BigDecimal> bc, String[] prefixes) {
        return sumDebitByPrefix(bc, prefixes, EMPTY_PREFIXES);
    }

    /**
     * Somme des soldes DÉBITEURS (positifs) pour les codes donnés, en excluant les
     * comptes commençant par un des préfixes de `excludePrefixes` — équivalent de
     * la syntaxe "218 sauf 2181" du module de référence : évite qu'un compte soit
     * compté à la fois dans un poste au préfixe large et dans un poste plus précis.
     */
    private BigDecimal sumDebitByPrefix(Map<String, BigDecimal> bc, String[] prefixes, String[] excludePrefixes) {
        if (bc == null) return BigDecimal.ZERO;
        BigDecimal total = BigDecimal.ZERO;
        entries:
        for (Map.Entry<String, BigDecimal> e : bc.entrySet()) {
            if (e.getValue().compareTo(BigDecimal.ZERO) > 0) {
                for (String ex : excludePrefixes) if (e.getKey().startsWith(ex)) continue entries;
                for (String p : prefixes) {
                    if (e.getKey().startsWith(p)) { total = total.add(e.getValue()); break; }
                }
            }
        }
        return total;
    }

    /** Somme des soldes CRÉDITEURS (positifs en valeur absolue) pour les codes donnés */
    private BigDecimal sumCreditByPrefix(Map<String, BigDecimal> bc, String[] prefixes) {
        return sumCreditByPrefix(bc, prefixes, EMPTY_PREFIXES);
    }

    /** Somme des soldes CRÉDITEURS (positifs en valeur absolue), avec exclusions — voir sumDebitByPrefix. */
    private BigDecimal sumCreditByPrefix(Map<String, BigDecimal> bc, String[] prefixes, String[] excludePrefixes) {
        if (bc == null) return BigDecimal.ZERO;
        BigDecimal total = BigDecimal.ZERO;
        entries:
        for (Map.Entry<String, BigDecimal> e : bc.entrySet()) {
            if (e.getValue().compareTo(BigDecimal.ZERO) < 0) {
                for (String ex : excludePrefixes) if (e.getKey().startsWith(ex)) continue entries;
                for (String p : prefixes) {
                    if (e.getKey().startsWith(p)) { total = total.add(e.getValue().abs()); break; }
                }
            }
        }
        return total;
    }

    // ======================== COMPTE DE RÉSULTAT SYSCOHADA RÉVISÉ ========================
    // Structure exacte identique au module Odoo blessing_repports (rubriques TA→XI)
    // avec comparaison N / N-1 (exercice précédent)

    public Map<String, Object> getCompteDeResultat(LocalDate dateFrom, LocalDate dateTo, Long companyId, String mode) {
        // Période N-1 : en mode "mensuel", comparer au mois calendaire précédent
        // (comme le module de référence — mars affiché → février en N-1), pas à
        // "ce même mois l'an dernier". En mode "annuel" (par défaut), on compare
        // à la même période un an avant.
        LocalDate dateFromN1, dateToN1;
        if ("mensuel".equals(mode)) {
            LocalDate[] prevMonth = computePreviousPeriod(dateFrom, dateTo, "monthly");
            dateFromN1 = prevMonth[0];
            dateToN1 = prevMonth[1];
        } else {
            dateFromN1 = dateFrom.minusYears(1);
            dateToN1 = dateTo.minusYears(1);
        }

        Map<String, BigDecimal> bc   = buildBalanceByCode(moveLineRepo.findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo));
        Map<String, BigDecimal> bcN1 = buildBalanceByCode(moveLineRepo.findPostedByCompanyAndDateRange(companyId, dateFromN1, dateToN1));

        Map<String, Object> rubriques = new LinkedHashMap<>();

        // ── MARGE COMMERCIALE ──────────────────────────────────────────────────────
        BigDecimal ta   = getCredit(bc,   "701"), taN1   = getCredit(bcN1, "701");
        BigDecimal ra   = getDebit(bc,    "601"), raN1   = getDebit(bcN1,  "601");
        BigDecimal rb   = getDebit(bc,   "6031"), rbN1   = getDebit(bcN1, "6031");
        addRubrique(rubriques, "TA", "Ventes de marchandises",            ta,   taN1,   "+");
        addRubrique(rubriques, "RA", "Achats de marchandises",            ra,   raN1,   "-");
        addRubrique(rubriques, "RB", "Variation de stocks de marchandises", rb, rbN1,   "-");
        BigDecimal xa = ta.subtract(ra).subtract(rb), xaN1 = taN1.subtract(raN1).subtract(rbN1);
        addSubtotal(rubriques, "XA", "MARGE COMMERCIALE", xa, xaN1);

        // ── CHIFFRE D'AFFAIRES ─────────────────────────────────────────────────────
        // Codes exacts du module de référence blessing_repports (Odoo) : TB/TC
        // couvrent chacun PLUSIEURS comptes SYSCOHADA, pas un seul.
        BigDecimal tb   = getCredit(bc, "702").add(getCredit(bc, "703")).add(getCredit(bc, "704"));
        BigDecimal tbN1 = getCredit(bcN1, "702").add(getCredit(bcN1, "703")).add(getCredit(bcN1, "704"));
        BigDecimal tc   = getCredit(bc, "705").add(getCredit(bc, "706"));
        BigDecimal tcN1 = getCredit(bcN1, "705").add(getCredit(bcN1, "706"));
        BigDecimal td   = getCredit(bc,   "707"), tdN1   = getCredit(bcN1, "707");
        addRubrique(rubriques, "TB", "Ventes de produits fabriqués",   tb, tbN1, "+");
        addRubrique(rubriques, "TC", "Travaux, services vendus",        tc, tcN1, "+");
        addRubrique(rubriques, "TD", "Produits accessoires",            td, tdN1, "+");
        BigDecimal xb = ta.add(tb).add(tc).add(td), xbN1 = taN1.add(tbN1).add(tcN1).add(tdN1);
        addSubtotal(rubriques, "XB", "CHIFFRE D'AFFAIRES", xb, xbN1);

        // ── VALEUR AJOUTÉE ─────────────────────────────────────────────────────────
        // TE (Produits stockés / déstockage) = compte 73, un compte de PRODUIT,
        // pas 604 (un compte de CHARGE — 604 appartient à RE ci-dessous). Le solde
        // peut être positif (stockage) ou négatif (déstockage) : on garde le net
        // signé (crédit = positif) plutôt qu'un solde débiteur/créditeur figé,
        // pour refléter les deux sens comme le fait le module de référence.
        BigDecimal te   = getNetCredit(bc,   "73"), teN1 = getNetCredit(bcN1, "73");
        BigDecimal tf   = getCredit(bc,   "72"),  tfN1 = getCredit(bcN1,  "72");
        BigDecimal tg   = getCredit(bc,   "71"),  tgN1 = getCredit(bcN1,  "71");
        BigDecimal th   = getCredit(bc,   "75"),  thN1 = getCredit(bcN1,  "75");
        BigDecimal ti   = getCredit(bc,  "781"),  tiN1 = getCredit(bcN1, "781");
        BigDecimal rc   = getDebit(bc,   "602"),  rcN1 = getDebit(bcN1,  "602");
        BigDecimal rd   = getDebit(bc,  "6032"),  rdN1 = getDebit(bcN1, "6032");
        // RE (Autres achats) = 604 + 605 + 608, comme dans le module de référence.
        BigDecimal re2   = getDebit(bc, "604").add(getDebit(bc, "605")).add(getDebit(bc, "608"));
        BigDecimal re2N1 = getDebit(bcN1, "604").add(getDebit(bcN1, "605")).add(getDebit(bcN1, "608"));
        BigDecimal rf2  = getDebit(bc,  "6033"), rf2N1 = getDebit(bcN1, "6033");
        BigDecimal rg   = getDebit(bc,    "61"),  rgN1 = getDebit(bcN1,   "61");
        BigDecimal rh   = getDebit(bc,    "62").add(getDebit(bc, "63"));
        BigDecimal rhN1 = getDebit(bcN1,  "62").add(getDebit(bcN1, "63"));
        BigDecimal ri   = getDebit(bc,    "64"),  riN1 = getDebit(bcN1,   "64");
        BigDecimal rj   = getDebit(bc,    "65"),  rjN1 = getDebit(bcN1,   "65");
        addRubrique(rubriques, "TE", "Produits stockés (ou déstockage)",                   te.abs(),  teN1.abs(),  te.compareTo(BigDecimal.ZERO)  >= 0 ? "+" : "-");
        addRubrique(rubriques, "TF", "Production immobilisée",                            tf,   tfN1,  "+");
        addRubrique(rubriques, "TG", "Subventions d'exploitation",                        tg,   tgN1,  "+");
        addRubrique(rubriques, "TH", "Autres produits d'exploitation",                    th,   thN1,  "+");
        addRubrique(rubriques, "TI", "Transferts de charges d'exploitation",              ti,   tiN1,  "+");
        addRubrique(rubriques, "RC", "Achats de matières premières et fournitures liées", rc,   rcN1,  "-");
        addRubrique(rubriques, "RD", "Variation de stocks de matières premières et fournitures liées", rd, rdN1, "-");
        addRubrique(rubriques, "RE", "Autres achats",                                     re2, re2N1,  "-");
        addRubrique(rubriques, "RF", "Variation de stock d'autres approvisionnements",    rf2, rf2N1,  "-");
        addRubrique(rubriques, "RG", "Transports",                                        rg,   rgN1,  "-");
        addRubrique(rubriques, "RH", "Services extérieurs",                               rh,   rhN1,  "-");
        addRubrique(rubriques, "RI", "Impôts et taxes",                                   ri,   riN1,  "-");
        addRubrique(rubriques, "RJ", "Autres charges d'exploitation",                     rj,   rjN1,  "-");
        BigDecimal xc = xa.add(te).add(tf).add(tg).add(th).add(ti)
                          .subtract(rc).subtract(rd).subtract(re2).subtract(rf2)
                          .subtract(rg).subtract(rh).subtract(ri).subtract(rj);
        BigDecimal xcN1 = xaN1.add(teN1).add(tfN1).add(tgN1).add(thN1).add(tiN1)
                              .subtract(rcN1).subtract(rdN1).subtract(re2N1).subtract(rf2N1)
                              .subtract(rgN1).subtract(rhN1).subtract(riN1).subtract(rjN1);
        addSubtotal(rubriques, "XC", "VALEUR AJOUTÉE", xc, xcN1);

        // ── EBE ────────────────────────────────────────────────────────────────────
        BigDecimal rk   = getDebit(bc,    "66"), rkN1 = getDebit(bcN1, "66");
        addRubrique(rubriques, "RK", "Charges de personnel", rk, rkN1, "-");
        BigDecimal xd = xc.subtract(rk), xdN1 = xcN1.subtract(rkN1);
        addSubtotal(rubriques, "XD", "EXCEDENT BRUT D'EXPLOITATION", xd, xdN1);

        // ── RÉSULTAT D'EXPLOITATION ────────────────────────────────────────────────
        // TJ (Reprises) = 791 + 798, comme dans le module de référence.
        BigDecimal tj   = getCredit(bc, "791").add(getCredit(bc, "798"));
        BigDecimal tjN1 = getCredit(bcN1, "791").add(getCredit(bcN1, "798"));
        BigDecimal rl   = getDebit(bc,   "681"), rlN1 = getDebit(bcN1,  "681");
        addRubrique(rubriques, "TJ", "Reprises sur amortissements, provisions et dépréciations", tj, tjN1, "+");
        addRubrique(rubriques, "RL", "Dotations aux amortissements, provisions et dépréciations", rl, rlN1, "-");
        BigDecimal xe = xd.add(tj).subtract(rl), xeN1 = xdN1.add(tjN1).subtract(rlN1);
        addSubtotal(rubriques, "XE", "RÉSULTAT D'EXPLOITATION", xe, xeN1);

        // ── RÉSULTAT FINANCIER ─────────────────────────────────────────────────────
        // TL = 797 (pas 786), TM = 787 (pas 796), RN = 697 (pas 691) — les codes de
        // la version précédente pointaient sur les mauvais comptes SYSCOHADA.
        BigDecimal tk2  = getCredit(bc,   "77"), tk2N1 = getCredit(bcN1,  "77");
        BigDecimal tl   = getCredit(bc,  "797"), tlN1  = getCredit(bcN1, "797");
        BigDecimal tm   = getCredit(bc,  "787"), tmN1  = getCredit(bcN1, "787");
        BigDecimal rm   = getDebit(bc,    "67"), rmN1  = getDebit(bcN1,   "67");
        BigDecimal rn2  = getDebit(bc,   "697"), rn2N1 = getDebit(bcN1,  "697");
        addRubrique(rubriques, "TK", "Produits financiers et assimilés",           tk2,  tk2N1, "+");
        addRubrique(rubriques, "TL", "Reprises de provisions et dépréciations financières", tl,  tlN1,  "+");
        addRubrique(rubriques, "TM", "Transferts de charges financières",                   tm,  tmN1,  "+");
        addRubrique(rubriques, "RM", "Frais financiers et charges assimilées",              rm,  rmN1,  "-");
        addRubrique(rubriques, "RN", "Dotations aux provisions et dépréciations financières", rn2, rn2N1, "-");
        BigDecimal xf = tk2.add(tl).add(tm).subtract(rm).subtract(rn2);
        BigDecimal xfN1 = tk2N1.add(tlN1).add(tmN1).subtract(rmN1).subtract(rn2N1);
        addSubtotal(rubriques, "XF", "RÉSULTAT FINANCIER", xf, xfN1);

        // ── RÉSULTAT AO + HAO ──────────────────────────────────────────────────────
        BigDecimal xg = xe.add(xf), xgN1 = xeN1.add(xfN1);
        addSubtotal(rubriques, "XG", "RÉSULTAT DES ACTIVITÉS ORDINAIRES", xg, xgN1);

        // TO (Autres produits HAO) = 84 + 86 + 88 ; RP (Autres charges HAO) = 83 + 85.
        BigDecimal tn2  = getCredit(bc,   "82"), tn2N1 = getCredit(bcN1, "82");
        BigDecimal to2   = getCredit(bc, "84").add(getCredit(bc, "86")).add(getCredit(bc, "88"));
        BigDecimal to2N1 = getCredit(bcN1, "84").add(getCredit(bcN1, "86")).add(getCredit(bcN1, "88"));
        BigDecimal ro   = getDebit(bc,    "81"), roN1  = getDebit(bcN1,  "81");
        BigDecimal rp   = getDebit(bc, "83").add(getDebit(bc, "85"));
        BigDecimal rpN1 = getDebit(bcN1, "83").add(getDebit(bcN1, "85"));
        addRubrique(rubriques, "TN", "Produits des cessions d'immobilisations", tn2,  tn2N1, "+");
        addRubrique(rubriques, "TO", "Autres produits hors activités ordinaires", to2,  to2N1, "+");
        addRubrique(rubriques, "RO", "Valeurs comptables des cessions d'immobilisations", ro, roN1, "-");
        addRubrique(rubriques, "RP", "Autres charges hors activités ordinaires", rp,   rpN1, "-");
        BigDecimal xh = tn2.add(to2).subtract(ro).subtract(rp);
        BigDecimal xhN1 = tn2N1.add(to2N1).subtract(roN1).subtract(rpN1);
        addSubtotal(rubriques, "XH", "RÉSULTAT HORS ACTIVITÉS ORDINAIRES", xh, xhN1);

        // ── RÉSULTAT NET ───────────────────────────────────────────────────────────
        // Le plan seedé (OhadaDataInitializer) crée à la fois "891" (impôt sur le résultat, code
        // SYSCOHADA standard) ET "69" (même libellé, compte non standard mais existant et
        // sélectionnable) — les deux préfixes sont additionnés pour ne perdre aucun montant si un
        // utilisateur a posté sur "69" plutôt que sur "89"/"891".
        BigDecimal rs   = getDebit(bc,    "89").add(getDebit(bc,    "69")),
                   rsN1 = getDebit(bcN1,  "89").add(getDebit(bcN1,  "69"));
        addRubrique(rubriques, "RS", "Impôt sur le résultat", rs, rsN1, "-");
        BigDecimal xi = xg.add(xh).subtract(rs), xiN1 = xgN1.add(xhN1).subtract(rsN1);
        addSubtotal(rubriques, "XI", "RÉSULTAT NET", xi, xiN1);

        Map<String, Object> totals = new LinkedHashMap<>();
        totals.put("margeCommerciale", xa); totals.put("chiffreAffaires", xb);
        totals.put("valeurAjoutee", xc);    totals.put("ebe", xd);
        totals.put("resultatExploitation", xe); totals.put("resultatFinancier", xf);
        totals.put("resultatAo", xg); totals.put("resultatHao", xh); totals.put("resultatNet", xi);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("rubriques", rubriques); result.put("totals", totals);
        result.put("dateFromN1", dateFromN1.toString());
        result.put("dateToN1",   dateToN1.toString());
        return result;
    }

    // ======================== CASHBOOK (LIVRE DE CAISSE / BANQUE) ========================

    @Transactional(readOnly = true)
    public Map<String, Object> getCashbook(LocalDate dateFrom, LocalDate dateTo,
                                            Long companyId, List<Long> journalIds) {
        // Récupérer les journaux de liquidité (cash + bank)
        List<com.erp.accounting.entity.AccountJournal> journals =
            journalRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(j -> "cash".equals(j.getType()) || "bank".equals(j.getType()))
                .collect(java.util.stream.Collectors.toList());

        // Filtrer si des journaux spécifiques ont été demandés
        if (journalIds != null && !journalIds.isEmpty()) {
            journals = journals.stream()
                .filter(j -> journalIds.contains(j.getId()))
                .collect(java.util.stream.Collectors.toList());
        }

        List<Map<String, Object>> result = new ArrayList<>();

        for (com.erp.accounting.entity.AccountJournal journal : journals) {
            BigDecimal ZERO = BigDecimal.ZERO;

            // Le solde du cashbook doit être celui du compte réellement lié au journal
            // (defaultDebitAccount/defaultCreditAccount), filtré PAR COMPTE SEUL (sans condition de
            // journal) : lors d'un transfert entre deux caisses/banques, toute la pièce est classée
            // sous le journal de celle qui a saisi l'opération — filtrer aussi par journal ferait
            // disparaître la jambe touchant l'AUTRE journal. Repli sur internalType uniquement si le
            // journal n'a aucun compte configuré.
            Long primaryAccountId = journal.getDefaultDebitAccount() != null
                    ? journal.getDefaultDebitAccount().getId()
                    : (journal.getDefaultCreditAccount() != null ? journal.getDefaultCreditAccount().getId() : null);

            BigDecimal opening;
            List<AccountMoveLine> lines;
            if (primaryAccountId != null) {
                opening = moveLineRepo.sumBalanceByAccountBeforeDate(primaryAccountId, companyId, dateFrom);
                lines = moveLineRepo.findLinesByAccountAndDateBetween(primaryAccountId, companyId, dateFrom, dateTo);
            } else {
                opening = moveLineRepo.sumTreasuryBalanceBeforeDate(journal.getId(), dateFrom);
                lines = moveLineRepo.findCashbookLines(journal.getId(), dateFrom, dateTo);
            }

            BigDecimal cumulative = opening;
            BigDecimal totalDebit = ZERO, totalCredit = ZERO;
            List<Map<String, Object>> lineResults = new ArrayList<>();

            for (AccountMoveLine line : lines) {
                BigDecimal d = line.getDebit()  != null ? line.getDebit()  : ZERO;
                BigDecimal c = line.getCredit() != null ? line.getCredit() : ZERO;
                cumulative = cumulative.add(d).subtract(c);
                totalDebit  = totalDebit.add(d);
                totalCredit = totalCredit.add(c);

                Map<String, Object> lm = new LinkedHashMap<>();
                lm.put("date",      line.getDate());
                lm.put("pieceName", line.getMove() != null ? line.getMove().getName() : "");
                lm.put("ref",       line.getMove() != null ? line.getMove().getRef()  : "");
                lm.put("libelle",   line.getName());
                lm.put("partner",   line.getPartner() != null ? line.getPartner().getName() : "");
                lm.put("debit",  d);
                lm.put("credit", c);
                lm.put("balance", cumulative);
                lineResults.add(lm);
            }

            Map<String, Object> jm = new LinkedHashMap<>();
            jm.put("journalId",      journal.getId());
            jm.put("journalName",    journal.getName());
            jm.put("journalCode",    journal.getCode());
            jm.put("journalType",    journal.getType());
            jm.put("openingBalance", opening);
            jm.put("totalDebit",     totalDebit);
            jm.put("totalCredit",    totalCredit);
            jm.put("closingBalance", cumulative);
            jm.put("lines",          lineResults);
            result.add(jm);
        }

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("journals", result);
        return response;
    }

    private Map<String, BigDecimal> buildBalanceByCode(List<AccountMoveLine> lines) {
        Map<String, BigDecimal> bc = new LinkedHashMap<>();
        for (AccountMoveLine line : lines) {
            if (line.getAccount() == null) continue;
            String code = line.getAccount().getCode();
            BigDecimal d = line.getDebit()  != null ? line.getDebit()  : BigDecimal.ZERO;
            BigDecimal c = line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO;
            bc.merge(code, d.subtract(c), BigDecimal::add);
        }
        return bc;
    }

    /**
     * Soldes bruts (débit - crédit) de tous les comptes de classe 6/7/8 (charges,
     * produits, HAO) ayant un mouvement non nul sur la période — utilisé par la
     * clôture d'exercice pour générer l'écriture qui solde chaque compte de
     * gestion vers le résultat. Volontairement une somme large sur TOUS les
     * comptes réels (pas les rubriques spécifiques utilisées par
     * getCompteDeResultat) : c'est exactement ce qui doit être soldé, donc le
     * résultat net qui en découle est correct par construction plutôt que
     * recalculé en parallèle d'une autre méthode qui pourrait diverger.
     */
    public Map<String, BigDecimal> getProfitLossAccountBalances(Long companyId, LocalDate dateFrom, LocalDate dateTo) {
        Map<String, BigDecimal> bc = buildBalanceByCode(
                moveLineRepo.findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo));
        Map<String, BigDecimal> result = new LinkedHashMap<>();
        for (Map.Entry<String, BigDecimal> e : bc.entrySet()) {
            String code = e.getKey();
            if (code == null || code.isEmpty()) continue;
            char first = code.charAt(0);
            if ((first == '6' || first == '7' || first == '8') && e.getValue().compareTo(BigDecimal.ZERO) != 0) {
                result.put(code, e.getValue());
            }
        }
        return result;
    }

    private void addRubrique(Map<String, Object> map, String code, String label,
                             BigDecimal amount, BigDecimal amountN1, String sign) {
        Map<String, Object> r = new LinkedHashMap<>();
        r.put("code", code); r.put("label", label);
        r.put("amount", amount); r.put("amount_n1", amountN1); r.put("sign", sign);
        map.put(code, r);
    }

    private void addSubtotal(Map<String, Object> map, String code, String label,
                             BigDecimal val, BigDecimal valN1) {
        String sign = val.compareTo(BigDecimal.ZERO) >= 0 ? "+" : "-";
        addRubrique(map, code, label, val.abs(), valN1.abs(), sign);
    }

    // ======================== HELPERS ========================

    private List<AccountMoveLine> fetchPostedLines(Long companyId, LocalDate dateFrom, LocalDate dateTo, List<Long> journalIds) {
        if (journalIds != null && !journalIds.isEmpty())
            return moveLineRepo.findPostedByCompanyAndDateRangeAndJournals(companyId, dateFrom, dateTo, journalIds);
        return moveLineRepo.findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo);
    }

    private List<AccountMoveLine> fetchPostedLinesBefore(Long companyId, LocalDate date, List<Long> journalIds) {
        if (journalIds != null && !journalIds.isEmpty())
            return moveLineRepo.findPostedBeforeDateAndJournals(companyId, date, journalIds);
        return moveLineRepo.findPostedBeforeDate(companyId, date);
    }

    private boolean shouldInclude(String displayAccount, BigDecimal debit, BigDecimal credit) {
        if (displayAccount == null || "all".equals(displayAccount)) return true;
        return debit.compareTo(BigDecimal.ZERO) != 0 || credit.compareTo(BigDecimal.ZERO) != 0;
    }

    private Map<String, List<PartnerBalanceLineDTO>> buildPartnerBalance4(List<AccountMoveLine> lines, String resultSelection, List<Long> partnerIds) {
        Map<String, PartnerAggregation> byKey = new LinkedHashMap<>();
        for (AccountMoveLine line : lines) {
            if (!matchesResultSelection(line, resultSelection)) continue;
            if (partnerIds != null && !partnerIds.isEmpty() && line.getPartner() != null && !partnerIds.contains(line.getPartner().getId())) continue;
            byKey.computeIfAbsent(buildKey(line), k -> new PartnerAggregation(line)).addLine(line);
        }

        Map<String, List<PartnerBalanceLineDTO>> groups = new LinkedHashMap<>();
        groups.put("Clients", new ArrayList<>()); groups.put("Fournisseurs", new ArrayList<>());
        for (PartnerAggregation agg : byKey.values()) {
            BigDecimal diff = agg.debit.subtract(agg.credit);
            PartnerBalanceLineDTO dto = PartnerBalanceLineDTO.builder()
                    .partnerRef(agg.partnerRef).partnerName(agg.partnerName).accountNumber(agg.accountCode)
                    .initialDebit(BigDecimal.ZERO).initialCredit(BigDecimal.ZERO)
                    .debit(agg.debit).credit(agg.credit)
                    .finalDebit(diff.compareTo(BigDecimal.ZERO) > 0 ? diff : BigDecimal.ZERO)
                    .finalCredit(diff.compareTo(BigDecimal.ZERO) < 0 ? diff.abs() : BigDecimal.ZERO)
                    .type(agg.type).build();
            groups.get("customer".equals(agg.type) ? "Clients" : "Fournisseurs").add(dto);
        }
        return groups;
    }

    private Map<String, List<PartnerBalanceLineDTO>> buildPartnerBalance6(List<AccountMoveLine> initLines, List<AccountMoveLine> periodLines, String resultSelection, List<Long> partnerIds) {
        Map<String, PartnerAggregation> initAgg = new LinkedHashMap<>(), periodAgg = new LinkedHashMap<>();
        for (AccountMoveLine line : initLines) { if (matchesResultSelection(line, resultSelection)) initAgg.computeIfAbsent(buildKey(line), k -> new PartnerAggregation(line)).addLine(line); }
        for (AccountMoveLine line : periodLines) { if (matchesResultSelection(line, resultSelection)) periodAgg.computeIfAbsent(buildKey(line), k -> new PartnerAggregation(line)).addLine(line); }

        Set<String> allKeys = new LinkedHashSet<>(initAgg.keySet()); allKeys.addAll(periodAgg.keySet());
        Map<String, List<PartnerBalanceLineDTO>> groups = new LinkedHashMap<>();
        groups.put("Clients", new ArrayList<>()); groups.put("Fournisseurs", new ArrayList<>());

        for (String key : allKeys) {
            PartnerAggregation init = initAgg.get(key), period = periodAgg.get(key);
            PartnerAggregation ref = init != null ? init : period;
            BigDecimal initDiff = init != null ? init.debit.subtract(init.credit) : BigDecimal.ZERO;
            BigDecimal initD = initDiff.compareTo(BigDecimal.ZERO) > 0 ? initDiff : BigDecimal.ZERO;
            BigDecimal initC = initDiff.compareTo(BigDecimal.ZERO) < 0 ? initDiff.abs() : BigDecimal.ZERO;
            BigDecimal pd = period != null ? period.debit : BigDecimal.ZERO, pc = period != null ? period.credit : BigDecimal.ZERO;
            BigDecimal diff = initD.add(pd).subtract(initC.add(pc));
            PartnerBalanceLineDTO dto = PartnerBalanceLineDTO.builder()
                    .partnerRef(ref.partnerRef).partnerName(ref.partnerName).accountNumber(ref.accountCode)
                    .initialDebit(initD).initialCredit(initC).debit(pd).credit(pc)
                    .finalDebit(diff.compareTo(BigDecimal.ZERO) > 0 ? diff : BigDecimal.ZERO)
                    .finalCredit(diff.compareTo(BigDecimal.ZERO) < 0 ? diff.abs() : BigDecimal.ZERO)
                    .type(ref.type).build();
            groups.get("customer".equals(ref.type) ? "Clients" : "Fournisseurs").add(dto);
        }
        return groups;
    }

    private boolean matchesResultSelection(AccountMoveLine line, String sel) {
        if (line.getAccount() == null) return false;
        String t = line.getAccount().getInternalType();
        if (sel == null || "customer_supplier".equals(sel)) return true;
        if ("customer".equals(sel)) return "receivable".equals(t);
        if ("supplier".equals(sel)) return "payable".equals(t);
        return true;
    }

    private String buildKey(AccountMoveLine line) {
        Long p = line.getPartner() != null ? line.getPartner().getId() : 0L;
        Long a = line.getAccount() != null ? line.getAccount().getId() : 0L;
        return p + "_" + a;
    }

    private Map<String, Object> computePartnerTotals4(Map<String, List<PartnerBalanceLineDTO>> groups) {
        BigDecimal td = BigDecimal.ZERO, tc = BigDecimal.ZERO, tfd = BigDecimal.ZERO, tfc = BigDecimal.ZERO;
        for (List<PartnerBalanceLineDTO> list : groups.values())
            for (PartnerBalanceLineDTO l : list) { td = td.add(l.getDebit()); tc = tc.add(l.getCredit()); tfd = tfd.add(l.getFinalDebit()); tfc = tfc.add(l.getFinalCredit()); }
        Map<String, Object> t = new LinkedHashMap<>();
        t.put("totalDebit", td); t.put("totalCredit", tc); t.put("totalFinalDebit", tfd); t.put("totalFinalCredit", tfc);
        return t;
    }

    private Map<String, Object> computePartnerTotals6(Map<String, List<PartnerBalanceLineDTO>> groups) {
        BigDecimal tid = BigDecimal.ZERO, tic = BigDecimal.ZERO, td = BigDecimal.ZERO, tc = BigDecimal.ZERO, tfd = BigDecimal.ZERO, tfc = BigDecimal.ZERO;
        for (List<PartnerBalanceLineDTO> list : groups.values())
            for (PartnerBalanceLineDTO l : list) { tid = tid.add(l.getInitialDebit()); tic = tic.add(l.getInitialCredit()); td = td.add(l.getDebit()); tc = tc.add(l.getCredit()); tfd = tfd.add(l.getFinalDebit()); tfc = tfc.add(l.getFinalCredit()); }
        Map<String, Object> t = new LinkedHashMap<>();
        t.put("totalInitDebit", tid); t.put("totalInitCredit", tic); t.put("totalDebit", td); t.put("totalCredit", tc); t.put("totalFinalDebit", tfd); t.put("totalFinalCredit", tfc);
        return t;
    }

    private BigDecimal sumByPrefixes(Map<String, BigDecimal> bc, String... prefixes) {
        BigDecimal total = BigDecimal.ZERO;
        for (Map.Entry<String, BigDecimal> e : bc.entrySet())
            for (String p : prefixes) if (e.getKey().startsWith(p)) { total = total.add(e.getValue()); break; }
        return total;
    }

    private BigDecimal sumPositiveByPrefix(Map<String, BigDecimal> bc, String prefix) {
        return bc.entrySet().stream().filter(e -> e.getKey().startsWith(prefix) && e.getValue().compareTo(BigDecimal.ZERO) > 0).map(Map.Entry::getValue).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private BigDecimal sumNegativeByPrefix(Map<String, BigDecimal> bc, String prefix) {
        return bc.entrySet().stream().filter(e -> e.getKey().startsWith(prefix) && e.getValue().compareTo(BigDecimal.ZERO) < 0).map(Map.Entry::getValue).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private BigDecimal getDebit(Map<String, BigDecimal> bc, String prefix) {
        return bc.entrySet().stream().filter(e -> e.getKey().startsWith(prefix) && e.getValue().compareTo(BigDecimal.ZERO) > 0).map(Map.Entry::getValue).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private BigDecimal getCredit(Map<String, BigDecimal> bc, String prefix) {
        return bc.entrySet().stream().filter(e -> e.getKey().startsWith(prefix) && e.getValue().compareTo(BigDecimal.ZERO) < 0).map(e -> e.getValue().abs()).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private BigDecimal getNetCredit(Map<String, BigDecimal> bc, String prefix) {
        return bc.entrySet().stream().filter(e -> e.getKey().startsWith(prefix)).map(e -> e.getValue().negate()).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    // ── Suivi Dettes & Créances ──────────────────────────────────────────────

    @Transactional(readOnly = true)
    public Map<String, Object> getSuiviTiers(Long companyId) {
        List<Object[]> rawCreances = moveLineRepo.creancesParTiers(companyId);
        List<Object[]> rawDettes   = moveLineRepo.dettesParTiers(companyId);

        List<Map<String, Object>> creances = rawCreances.stream().map(row -> {
            BigDecimal debit  = toBD(row[2]);
            BigDecimal credit = toBD(row[3]);
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("partnerId",   row[0]);
            m.put("partnerName", row[1] != null ? row[1] : "—");
            m.put("solde",       debit.subtract(credit));
            return m;
        }).collect(Collectors.toList());

        List<Map<String, Object>> dettes = rawDettes.stream().map(row -> {
            BigDecimal debit  = toBD(row[2]);
            BigDecimal credit = toBD(row[3]);
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("partnerId",   row[0]);
            m.put("partnerName", row[1] != null ? row[1] : "—");
            m.put("solde",       credit.subtract(debit));
            return m;
        }).collect(Collectors.toList());

        BigDecimal totalCreances = creances.stream()
                .map(m -> (BigDecimal) m.get("solde")).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalDettes = dettes.stream()
                .map(m -> (BigDecimal) m.get("solde")).reduce(BigDecimal.ZERO, BigDecimal::add);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("creances",      creances);
        result.put("dettes",        dettes);
        result.put("totalCreances", totalCreances);
        result.put("totalDettes",   totalDettes);
        result.put("soldeNet",      totalCreances.subtract(totalDettes));
        return result;
    }

    private BigDecimal toBD(Object o) {
        if (o == null) return BigDecimal.ZERO;
        if (o instanceof BigDecimal bd) return bd;
        if (o instanceof Number n) return BigDecimal.valueOf(n.doubleValue());
        return BigDecimal.ZERO;
    }

    private static class AccountAggregation {
        AccountAccount account; BigDecimal debit = BigDecimal.ZERO, credit = BigDecimal.ZERO;
        AccountAggregation(AccountAccount account) { this.account = account; }
        void addLine(AccountMoveLine line) {
            debit = debit.add(line.getDebit() != null ? line.getDebit() : BigDecimal.ZERO);
            credit = credit.add(line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO);
        }
    }

    private static class PartnerAggregation {
        String partnerRef, partnerName, accountCode, type;
        BigDecimal debit = BigDecimal.ZERO, credit = BigDecimal.ZERO;
        PartnerAggregation(AccountMoveLine line) {
            this.partnerRef = line.getPartner() != null ? line.getPartner().getRef() : "";
            this.partnerName = line.getPartner() != null ? line.getPartner().getName() : "Sans tiers";
            this.accountCode = line.getAccount() != null ? line.getAccount().getCode() : "";
            String t = line.getAccount() != null ? line.getAccount().getInternalType() : "";
            this.type = "receivable".equals(t) ? "customer" : "supplier";
        }
        void addLine(AccountMoveLine line) {
            debit = debit.add(line.getDebit() != null ? line.getDebit() : BigDecimal.ZERO);
            credit = credit.add(line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO);
        }
    }
}
