package com.erp.accounting.service;

import com.erp.accounting.dto.*;
import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountMoveLine;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountMoveLineRepository;
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

    // ======================== BALANCE GÉNÉRALE 4 COLONNES ========================

    public Map<String, Object> getGeneralBalance4Cols(LocalDate dateFrom, LocalDate dateTo,
                                                        Long companyId, List<Long> journalIds,
                                                        String displayAccount) {
        List<AccountMoveLine> lines = fetchPostedLines(companyId, dateFrom, dateTo, journalIds);

        Map<Long, AccountAggregation> byAccount = new LinkedHashMap<>();
        for (AccountMoveLine line : lines) {
            if (line.getAccount() == null) continue;
            Long accountId = line.getAccount().getId();
            byAccount.computeIfAbsent(accountId, k -> new AccountAggregation(line.getAccount()))
                    .addLine(line);
        }

        List<BalanceLineDTO> resultLines = new ArrayList<>();
        BigDecimal totalDebit = BigDecimal.ZERO, totalCredit = BigDecimal.ZERO;
        BigDecimal totalFinalDebit = BigDecimal.ZERO, totalFinalCredit = BigDecimal.ZERO;
        BigDecimal bilanDebit = BigDecimal.ZERO, bilanCredit = BigDecimal.ZERO;
        BigDecimal bilanFinalDebit = BigDecimal.ZERO, bilanFinalCredit = BigDecimal.ZERO;
        BigDecimal gestionDebit = BigDecimal.ZERO, gestionCredit = BigDecimal.ZERO;
        BigDecimal gestionFinalDebit = BigDecimal.ZERO, gestionFinalCredit = BigDecimal.ZERO;

        List<AccountAccount> allAccounts = accountRepo.findByCompanyIdAndDeprecatedFalseOrderByCode(companyId);

        for (AccountAccount account : allAccounts) {
            AccountAggregation agg = byAccount.get(account.getId());
            BigDecimal debit = agg != null ? agg.debit : BigDecimal.ZERO;
            BigDecimal credit = agg != null ? agg.credit : BigDecimal.ZERO;

            if (shouldInclude(displayAccount, debit, credit)) {
                BigDecimal diff = debit.subtract(credit);
                BigDecimal finalDebit = diff.compareTo(BigDecimal.ZERO) > 0 ? diff : BigDecimal.ZERO;
                BigDecimal finalCredit = diff.compareTo(BigDecimal.ZERO) < 0 ? diff.abs() : BigDecimal.ZERO;

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
                        bilanDebit = bilanDebit.add(debit); bilanCredit = bilanCredit.add(credit);
                        bilanFinalDebit = bilanFinalDebit.add(finalDebit); bilanFinalCredit = bilanFinalCredit.add(finalCredit);
                    } else if (c >= '6' && c <= '8') {
                        gestionDebit = gestionDebit.add(debit); gestionCredit = gestionCredit.add(credit);
                        gestionFinalDebit = gestionFinalDebit.add(finalDebit); gestionFinalCredit = gestionFinalCredit.add(finalCredit);
                    }
                }
            }
        }

        Map<String, Object> totals = new LinkedHashMap<>();
        totals.put("totalDebit", totalDebit); totals.put("totalCredit", totalCredit);
        totals.put("totalFinalDebit", totalFinalDebit); totals.put("totalFinalCredit", totalFinalCredit);
        totals.put("bilanDebit", bilanDebit); totals.put("bilanCredit", bilanCredit);
        totals.put("bilanFinalDebit", bilanFinalDebit); totals.put("bilanFinalCredit", bilanFinalCredit);
        totals.put("gestionDebit", gestionDebit); totals.put("gestionCredit", gestionCredit);
        totals.put("gestionFinalDebit", gestionFinalDebit); totals.put("gestionFinalCredit", gestionFinalCredit);

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

        Map<String, Object> totals = new LinkedHashMap<>();
        totals.put("totalInitDebit", totalInitDebit); totals.put("totalInitCredit", totalInitCredit);
        totals.put("totalDebit", totalDebit); totals.put("totalCredit", totalCredit);
        totals.put("totalFinalDebit", totalFinalDebit); totals.put("totalFinalCredit", totalFinalCredit);

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
            BigDecimal cumulativeBalance = BigDecimal.ZERO;
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
            accountResult.put("lines", lineResults);
            accountResult.put("totalDebit", totalDebit); accountResult.put("totalCredit", totalCredit);
            accountResult.put("finalBalance", cumulativeBalance);
            accountsResult.put(code, accountResult);
        }

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("accounts", accountsResult);
        return result;
    }

    // ======================== BILAN OHADA ========================

    public Map<String, Object> getBilanOhada(LocalDate dateFrom, LocalDate dateTo, Long companyId) {
        List<AccountMoveLine> lines = moveLineRepo.findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo);
        Map<String, BigDecimal> balanceByCode = new LinkedHashMap<>();
        for (AccountMoveLine line : lines) {
            if (line.getAccount() == null) continue;
            String code = line.getAccount().getCode();
            BigDecimal debit = line.getDebit() != null ? line.getDebit() : BigDecimal.ZERO;
            BigDecimal credit = line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO;
            balanceByCode.merge(code, debit.subtract(credit), BigDecimal::add);
        }

        Map<String, Object> actif = new LinkedHashMap<>();
        BigDecimal immoNette = sumByPrefixes(balanceByCode, "2");
        Map<String, Object> actifImmobilise = new LinkedHashMap<>();
        actifImmobilise.put("label", "ACTIF IMMOBILISÉ");
        actifImmobilise.put("immoCorporelles", sumByPrefixes(balanceByCode, "21", "22", "23"));
        actifImmobilise.put("immoIncorporelles", sumByPrefixes(balanceByCode, "20"));
        actifImmobilise.put("immoFinancieres", sumByPrefixes(balanceByCode, "24", "25", "26"));
        actifImmobilise.put("amortissements", sumByPrefixes(balanceByCode, "28", "29").abs());
        actifImmobilise.put("total", immoNette);
        actif.put("actifImmobilise", actifImmobilise);

        BigDecimal stocks = sumByPrefixes(balanceByCode, "3");
        BigDecimal creances = sumPositiveByPrefix(balanceByCode, "4");
        Map<String, Object> actifCirculant = new LinkedHashMap<>();
        actifCirculant.put("label", "ACTIF CIRCULANT");
        actifCirculant.put("stocks", stocks); actifCirculant.put("creances", creances);
        actifCirculant.put("total", stocks.add(creances));
        actif.put("actifCirculant", actifCirculant);

        BigDecimal tresoActif = sumPositiveByPrefix(balanceByCode, "5");
        Map<String, Object> tresorerieActif = new LinkedHashMap<>();
        tresorerieActif.put("label", "TRÉSORERIE ACTIF");
        tresorerieActif.put("banques", sumPositiveByPrefix(balanceByCode, "52"));
        tresorerieActif.put("caisse", sumPositiveByPrefix(balanceByCode, "57"));
        tresorerieActif.put("total", tresoActif);
        actif.put("tresorerieActif", tresorerieActif);
        actif.put("totalActif", immoNette.add(stocks).add(creances).add(tresoActif));

        Map<String, Object> passif = new LinkedHashMap<>();
        BigDecimal capitalSocial = sumByPrefixes(balanceByCode, "101", "1012", "1013");
        BigDecimal reserves = sumByPrefixes(balanceByCode, "106");
        BigDecimal reportNouveau = sumByPrefixes(balanceByCode, "11");
        BigDecimal resultatExo = sumByPrefixes(balanceByCode, "12");
        BigDecimal autresCapitaux = sumByPrefixes(balanceByCode, "13", "14", "15");
        BigDecimal totalCapitauxPropres = capitalSocial.add(reserves).add(reportNouveau).add(resultatExo).add(autresCapitaux).negate();
        Map<String, Object> capitauxPropres = new LinkedHashMap<>();
        capitauxPropres.put("label", "CAPITAUX PROPRES");
        capitauxPropres.put("capitalSocial", capitalSocial.negate()); capitauxPropres.put("reserves", reserves.negate());
        capitauxPropres.put("reportNouveau", reportNouveau.negate()); capitauxPropres.put("resultatExercice", resultatExo.negate());
        capitauxPropres.put("autresCapitaux", autresCapitaux.negate()); capitauxPropres.put("total", totalCapitauxPropres);
        passif.put("capitauxPropres", capitauxPropres);

        BigDecimal emprunts = sumByPrefixes(balanceByCode, "16", "17", "18").negate();
        Map<String, Object> dettesFinancieres = new LinkedHashMap<>();
        dettesFinancieres.put("label", "DETTES FINANCIÈRES");
        dettesFinancieres.put("emprunts", emprunts); dettesFinancieres.put("total", emprunts);
        passif.put("dettesFinancieres", dettesFinancieres);

        BigDecimal dettesCirkulant = sumNegativeByPrefix(balanceByCode, "4").abs();
        Map<String, Object> passifCirculant = new LinkedHashMap<>();
        passifCirculant.put("label", "PASSIF CIRCULANT");
        passifCirculant.put("fournisseurs", sumNegativeByPrefix(balanceByCode, "40").abs());
        passifCirculant.put("dettesPersonnel", sumNegativeByPrefix(balanceByCode, "42").abs());
        passifCirculant.put("dettesFiscales", sumNegativeByPrefix(balanceByCode, "44").abs());
        passifCirculant.put("autresDettes", dettesCirkulant); passifCirculant.put("total", dettesCirkulant);
        passif.put("passifCirculant", passifCirculant);

        BigDecimal tresoPassif = sumNegativeByPrefix(balanceByCode, "5").abs();
        Map<String, Object> tresoreriePassif = new LinkedHashMap<>();
        tresoreriePassif.put("label", "TRÉSORERIE PASSIF"); tresoreriePassif.put("total", tresoPassif);
        passif.put("tresoreriePassif", tresoreriePassif);

        BigDecimal totalPassif = totalCapitauxPropres.add(emprunts).add(dettesCirkulant).add(tresoPassif);
        passif.put("totalPassif", totalPassif);

        BigDecimal totalActif = immoNette.add(stocks).add(creances).add(tresoActif);
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("actif", actif); result.put("passif", passif);
        result.put("equilibre", totalActif.subtract(totalPassif).abs().compareTo(new BigDecimal("0.01")) < 0);
        return result;
    }

    // ======================== COMPTE DE RÉSULTAT SYSCOHADA ========================

    public Map<String, Object> getCompteDeResultat(LocalDate dateFrom, LocalDate dateTo, Long companyId) {
        List<AccountMoveLine> lines = moveLineRepo.findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo);
        Map<String, BigDecimal> bc = new LinkedHashMap<>();
        for (AccountMoveLine line : lines) {
            if (line.getAccount() == null) continue;
            String code = line.getAccount().getCode();
            BigDecimal debit = line.getDebit() != null ? line.getDebit() : BigDecimal.ZERO;
            BigDecimal credit = line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO;
            bc.merge(code, debit.subtract(credit), BigDecimal::add);
        }

        Map<String, Object> rubriques = new LinkedHashMap<>();
        BigDecimal ta = getCredit(bc, "701"); rubriques.put("TA", rubrique("TA", "Ventes de marchandises", ta));
        BigDecimal ra = getDebit(bc, "601"), rb = getDebit(bc, "6031");
        rubriques.put("RA", rubrique("RA", "Achats de marchandises", ra));
        rubriques.put("RB", rubrique("RB", "Variation de stocks de marchandises", rb));
        BigDecimal xa = ta.subtract(ra).subtract(rb);
        rubriques.put("XA", rubrique("XA", "MARGE COMMERCIALE", xa));
        BigDecimal tb = getCredit(bc, "702").add(getCredit(bc, "703")).add(getCredit(bc, "705")).add(getCredit(bc, "706")).add(getCredit(bc, "707")).add(getCredit(bc, "708"));
        rubriques.put("TB", rubrique("TB", "Ventes de produits fabriqués, travaux, services vendus", tb));
        BigDecimal tc = getNetCredit(bc, "73"); rubriques.put("TC", rubrique("TC", "Production stockée (ou déstockée)", tc));
        BigDecimal td = getCredit(bc, "72"); rubriques.put("TD", rubrique("TD", "Production immobilisée", td));
        BigDecimal xb = xa.add(tb).add(tc).add(td); rubriques.put("XB", rubrique("XB", "CHIFFRE D'AFFAIRES", xb));
        BigDecimal te = getDebit(bc, "602").add(getDebit(bc, "6032")).add(getDebit(bc, "6033"));
        rubriques.put("TE", rubrique("TE", "Achats de matières premières et fournitures liées", te));
        BigDecimal tf = getDebit(bc, "605"); rubriques.put("TF", rubrique("TF", "Autres achats", tf));
        BigDecimal tg = getDebit(bc, "61"); rubriques.put("TG", rubrique("TG", "Transports", tg));
        BigDecimal th = getDebit(bc, "62").add(getDebit(bc, "63")); rubriques.put("TH", rubrique("TH", "Services extérieurs", th));
        BigDecimal ti = getDebit(bc, "64"); rubriques.put("TI", rubrique("TI", "Impôts et taxes", ti));
        BigDecimal tj = getDebit(bc, "65"); rubriques.put("TJ", rubrique("TJ", "Autres charges", tj));
        BigDecimal tk = getDebit(bc, "66"); rubriques.put("TK", rubrique("TK", "Charges de personnel", tk));
        BigDecimal va = xb.subtract(te).subtract(tf).subtract(tg).subtract(th).subtract(ti).subtract(tj);
        rubriques.put("XC", rubrique("XC", "VALEUR AJOUTÉE", va));
        BigDecimal ebe = va.subtract(tk); rubriques.put("XD", rubrique("XD", "EXCÉDENT BRUT D'EXPLOITATION", ebe));
        BigDecimal tl = getCredit(bc, "781"); rubriques.put("TL", rubrique("TL", "Reprises d'amortissements, provisions et dépréciations", tl));
        BigDecimal tm = getCredit(bc, "791"); rubriques.put("TM", rubrique("TM", "Transferts de charges d'exploitation", tm));
        BigDecimal tn = getDebit(bc, "681"); rubriques.put("TN", rubrique("TN", "Dotations aux amortissements", tn));
        BigDecimal to = getDebit(bc, "691"); rubriques.put("TO", rubrique("TO", "Dotations aux provisions d'exploitation", to));
        BigDecimal re = ebe.add(tl).add(tm).subtract(tn).subtract(to);
        rubriques.put("XI", rubrique("XI", "RÉSULTAT D'EXPLOITATION", re));
        BigDecimal tp = getCredit(bc, "771").add(getCredit(bc, "772")).add(getCredit(bc, "773")).add(getCredit(bc, "776")).add(getCredit(bc, "778")).add(getCredit(bc, "786")).add(getCredit(bc, "796"));
        rubriques.put("TP", rubrique("TP", "Revenus financiers", tp));
        BigDecimal tq = getDebit(bc, "671").add(getDebit(bc, "672")).add(getDebit(bc, "673"));
        rubriques.put("TQ", rubrique("TQ", "Frais financiers et charges assimilées", tq));
        BigDecimal rf = tp.subtract(tq); rubriques.put("XJ", rubrique("XJ", "RÉSULTAT FINANCIER", rf));
        BigDecimal rao = re.add(rf); rubriques.put("XK", rubrique("XK", "RÉSULTAT DES ACTIVITÉS ORDINAIRES", rao));
        BigDecimal tr = getCredit(bc, "82").add(getCredit(bc, "84")).add(getCredit(bc, "86")).add(getCredit(bc, "88"));
        rubriques.put("TR", rubrique("TR", "Produits HAO", tr));
        BigDecimal ts = getDebit(bc, "81").add(getDebit(bc, "83")).add(getDebit(bc, "85")).add(getDebit(bc, "87"));
        rubriques.put("TS", rubrique("TS", "Charges HAO", ts));
        BigDecimal rhao = tr.subtract(ts); rubriques.put("XL", rubrique("XL", "RÉSULTAT HAO", rhao));
        BigDecimal tt = getDebit(bc, "87"); rubriques.put("TT", rubrique("TT", "Participation des travailleurs", tt));
        BigDecimal tu = getDebit(bc, "891"); rubriques.put("TU", rubrique("TU", "Impôts sur le résultat", tu));
        BigDecimal rn = rao.add(rhao).subtract(tt).subtract(tu);
        rubriques.put("XM", rubrique("XM", "RÉSULTAT NET", rn));

        Map<String, Object> totals = new LinkedHashMap<>();
        totals.put("margeCommerciale", xa); totals.put("chiffreAffaires", xb);
        totals.put("valeurAjoutee", va); totals.put("ebe", ebe);
        totals.put("resultatExploitation", re); totals.put("resultatFinancier", rf);
        totals.put("resultatActivitesOrdinaires", rao); totals.put("resultatHao", rhao); totals.put("resultatNet", rn);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("rubriques", rubriques); result.put("totals", totals);
        return result;
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

    private Map<String, Object> rubrique(String code, String label, BigDecimal amount) {
        Map<String, Object> r = new LinkedHashMap<>();
        r.put("code", code); r.put("label", label); r.put("amount", amount);
        return r;
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
