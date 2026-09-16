package com.erp.hr.service;

import com.erp.hr.entity.EmployeeContract;
import com.erp.hr.entity.PayslipLine;
import com.erp.hr.entity.SalaryRule;
import com.erp.hr.entity.SalaryRuleCategory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

/**
 * Moteur de calcul de paie — localisation Cameroun.
 *
 * Évalue les règles salariales par ordre de séquence (comme le moteur Odoo de référence),
 * mais SANS eval Python : les formules légales sont codées nativement (BUILTIN), tandis que
 * les primes/retenues personnalisées passent par FIX / PERCENTAGE / INPUT.
 *
 * Barèmes intégrés (législation camerounaise) :
 *  - CNPS salarié (PVID) : 4,2 % du brut plafonné à 750 000
 *  - Crédit Foncier salarié : 1 % du brut
 *  - Redevance Audiovisuelle (RAV) : barème par tranches
 *  - IRPP : base = (brut - CNPS) − 30 % frais pro − 500 000 (abattement annuel), barème 10/15/25/35 %
 *  - CAC : 10 % de l'IRPP
 *  - Charges patronales : CNPS 16,5 % (plafond 750 000), CFC 1,5 %, FNE 1 %
 */
@Component
@Slf4j
public class PayrollEngine {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    // Barèmes réglementaires (Cameroun) — repli si la règle correspondante n'a pas encore été
    // seedée/rétro-remplie avec sa propre valeur (voir PayrollSeeder.backfillBuiltinRates, appelé
    // avant chaque calcul). L'admin édite les vraies valeurs depuis Configuration paie
    // (SalaryRule.ceilingAmount / bracketsConfig / amountFix pour IRPP), pas ici.
    private static final BigDecimal CNPS_CEILING_FALLBACK = new BigDecimal("750000");
    private static final BigDecimal IRPP_THRESHOLD_FALLBACK = new BigDecimal("62000");
    private static final String IRPP_BRACKETS_FALLBACK = "2000000:10,3000000:15,5000000:25,999999999999:35";
    private static final String RAV_BRACKETS_FALLBACK =
            "50000:0,100000:750,200000:1950,300000:3250,400000:4550,500000:5850,"
            + "600000:7150,700000:8450,800000:9750,900000:11050,1000000:12350,999999999999:13000";

    private List<BigDecimal[]> parseBracketString(String raw) {
        List<BigDecimal[]> result = new ArrayList<>();
        for (String part : raw.split(",")) {
            String[] kv = part.trim().split(":");
            result.add(new BigDecimal[]{ new BigDecimal(kv[0].trim()), new BigDecimal(kv[1].trim()) });
        }
        return result;
    }

    /** Résultat d'un calcul : lignes du bulletin + valeurs indexées par code/catégorie. */
    public static class Result {
        public final List<PayslipLine> lines = new ArrayList<>();
        public final Map<String, BigDecimal> ruleValues = new HashMap<>();
        public final Map<String, BigDecimal> categoryTotals = new HashMap<>();

        public BigDecimal category(String code) { return categoryTotals.getOrDefault(code, ZERO); }
    }

    /**
     * @param contract   contrat de l'employé (salaire, primes)
     * @param rules      règles actives triées par séquence croissante
     * @param categories catégories (pour libellés)
     * @param inputs     éléments variables agrégés par code (avances, primes exceptionnelles…)
     * @param workedDays nombre de jours saisi sur le bulletin, par code (jours travaillés, absence…)
     * @param prorationFactor fraction (0 à 1) du salaire de base à appliquer — 1 si le contrat
     *                        couvre l'intégralité de la période du bulletin, moins sinon (contrat
     *                        démarré ou terminé en cours de période). Ne s'applique qu'au salaire
     *                        de base (BASIC) ; les indemnités contractuelles ne sont pas affectées.
     */
    public Result compute(EmployeeContract contract, List<SalaryRule> rules, List<SalaryRuleCategory> categories,
                          Map<String, BigDecimal> inputs, Map<String, BigDecimal> workedDays,
                          BigDecimal prorationFactor) {
        Result r = new Result();
        BigDecimal proration = prorationFactor != null ? prorationFactor : BigDecimal.ONE;
        Map<String, String> catName = new HashMap<>();
        for (SalaryRuleCategory c : categories) catName.put(c.getCode(), c.getName());
        checkBuiltinSequenceOrder(rules, contract);

        for (SalaryRule rule : rules) {
            // Montant unitaire (taux fixe, %, élément variable ou formule légale).
            BigDecimal unitAmount = evalRule(rule, contract, r, inputs, proration).setScale(2, RoundingMode.HALF_UP);

            // Si la règle dépend d'un type de jours (ex. taux journalier × jours d'absence),
            // le montant unitaire est multiplié par le nombre de jours saisi sur le bulletin.
            // Sans saisie pour ce code → 0 jour → 0 FCFA (sûr par défaut, pas d'effet inattendu).
            BigDecimal quantity = BigDecimal.ONE;
            String qCode = rule.getQuantityWorkedDaysCode();
            if (qCode != null && !qCode.isBlank()) {
                quantity = workedDays.getOrDefault(qCode, ZERO);
            }
            BigDecimal amount = unitAmount.multiply(quantity).setScale(0, RoundingMode.HALF_UP);

            r.ruleValues.put(rule.getCode(), amount);
            r.categoryTotals.merge(rule.getCategoryCode(), amount, BigDecimal::add);

            PayslipLine line = PayslipLine.builder()
                    .code(rule.getCode())
                    .name(rule.getName())
                    .categoryCode(rule.getCategoryCode())
                    .categoryName(catName.getOrDefault(rule.getCategoryCode(), rule.getCategoryCode()))
                    .sequence(rule.getSequence())
                    .quantity(quantity)
                    .rate(displayRate(rule))
                    .amount(unitAmount.setScale(0, RoundingMode.HALF_UP))
                    .total(amount)
                    .accountDebitCode(rule.getAccountDebitCode())
                    .accountCreditCode(rule.getAccountCreditCode())
                    .companyId(contract.getCompanyId())
                    .build();
            r.lines.add(line);
        }
        return r;
    }

    /** IRPP dépend de CNPS_EMP (déjà déduit du brut imposable) et CAC dépend d'IRPP (10 % de
     *  l'IRPP) — ces dépendances ne sont PAS déclarées structurellement, seulement par ORDRE DE
     *  SÉQUENCE des règles (comme le reste du moteur, cf. compute() ci-dessus). Un admin qui
     *  reséquence les règles depuis "Configuration paie" (éditable depuis cette session) pourrait
     *  silencieusement casser ce calcul : la règle dépendante lirait 0 au lieu de la vraie valeur,
     *  sans aucune erreur visible sur le bulletin généré — ce garde-fou le signale au moins en log. */
    private void checkBuiltinSequenceOrder(List<SalaryRule> rules, EmployeeContract contract) {
        Integer cnpsSeq = null, irppSeq = null, cacSeq = null;
        for (SalaryRule rule : rules) {
            if (!"BUILTIN".equals(rule.getComputeType()) || rule.getBuiltinCode() == null) continue;
            switch (rule.getBuiltinCode()) {
                case "CNPS_EMP" -> cnpsSeq = rule.getSequence();
                case "IRPP" -> irppSeq = rule.getSequence();
                case "CAC" -> cacSeq = rule.getSequence();
                default -> { }
            }
        }
        if (cnpsSeq != null && irppSeq != null && cnpsSeq >= irppSeq) {
            log.error("Configuration paie invalide (contrat {}) : la règle CNPS_EMP (séquence {}) doit être "
                    + "évaluée AVANT IRPP (séquence {}), sinon l'IRPP est calculé sans déduire la CNPS.",
                    contract.getId(), cnpsSeq, irppSeq);
        }
        if (irppSeq != null && cacSeq != null && irppSeq >= cacSeq) {
            log.error("Configuration paie invalide (contrat {}) : la règle IRPP (séquence {}) doit être "
                    + "évaluée AVANT CAC (séquence {}), sinon le CAC (10 % de l'IRPP) est calculé à zéro.",
                    contract.getId(), irppSeq, cacSeq);
        }
    }

    private BigDecimal evalRule(SalaryRule rule, EmployeeContract c, Result r, Map<String, BigDecimal> inputs,
                                 BigDecimal proration) {
        String type = rule.getComputeType() == null ? "FIX" : rule.getComputeType();
        BigDecimal raw;
        switch (type) {
            case "BUILTIN" -> { return builtin(rule, c, r, proration); }
            case "PERCENTAGE" -> {
                BigDecimal base = baseValue(rule.getBaseCode(), r);
                raw = base.multiply(nz(rule.getAmountPercentage())).divide(new BigDecimal("100"), 6, RoundingMode.HALF_UP);
            }
            case "INPUT" -> raw = inputs.getOrDefault(rule.getCode(), ZERO);
            default -> raw = nz(rule.getAmountFix()); // FIX
        }
        return rule.isDeduction() ? raw.negate() : raw;
    }

    /** Base d'un pourcentage : valeur d'une règle déjà calculée ou total d'une catégorie. */
    private BigDecimal baseValue(String baseCode, Result r) {
        if (baseCode == null || baseCode.isBlank()) return r.category("GROSS");
        if (r.ruleValues.containsKey(baseCode)) return r.ruleValues.get(baseCode);
        return r.categoryTotals.getOrDefault(baseCode, ZERO);
    }

    private BigDecimal builtin(SalaryRule rule, EmployeeContract c, Result r, BigDecimal proration) {
        String code = rule.getBuiltinCode();
        String baseCode = rule.getBaseCode();
        if (code == null) return ZERO;
        BigDecimal gross = r.ruleValues.getOrDefault("GROSS", r.category("BASIC").add(r.category("ALW")));
        switch (code) {
            case "BASIC":
                // Proratisé si le contrat ne couvre pas l'intégralité de la période du bulletin
                // (embauche ou fin de contrat en cours de mois) — voir PayrollService.recomputeLines.
                return nz(c.getWage()).multiply(proration);
            case "CONTRACT_FIELD":
                return contractField(baseCode, c);
            case "GROSS":
                // Brut = Salaire de base + Indemnités
                return r.category("BASIC").add(r.category("ALW"));
            case "NET":
                // Net = Brut + Retenues (retenues déjà négatives)
                return r.category("GROSS").add(r.category("DED"));
            case "CNPS_EMP":
                return capped(gross, rule).multiply(pct(rule)).negate();
            case "CFC_EMP":
                return gross.multiply(pct(rule)).negate();
            case "RAV":
                return rav(gross, rule).negate();
            case "IRPP":
                return irpp(gross, r, rule).negate();
            case "CAC":
                // % de l'IRPP (IRPP déjà négatif → CAC négatif)
                return r.ruleValues.getOrDefault("IRPP", ZERO).multiply(pct(rule));
            case "CNPS_PAT":
                // Conservé pour compatibilité (config existante) : PVID + AF + ATMP (plafond éditable).
                // Les nouvelles sociétés utilisent les 3 branches séparées ci-dessous (comptes CNPS distincts + DIPE détaillé).
                return capped(gross, rule).multiply(pct(rule));
            case "PVID_PAT":
                // Pension Vieillesse Invalidité Décès (part patronale) — plafonné (voir ceilingAmount).
                return capped(gross, rule).multiply(pct(rule));
            case "AF_PAT":
                // Allocations Familiales (part patronale) — plafonné (voir ceilingAmount).
                return capped(gross, rule).multiply(pct(rule));
            case "ATMP_PAT":
                // Accidents du Travail et Maladies Professionnelles (part patronale) — plafonné (voir ceilingAmount).
                return capped(gross, rule).multiply(pct(rule));
            case "CFC_PAT":
                return gross.multiply(pct(rule));
            case "FNE_PAT":
                return gross.multiply(pct(rule));
            default:
                return ZERO;
        }
    }

    /** Taux (%) configuré sur la règle, ramené à une fraction (4.2 → 0.042). */
    private BigDecimal pct(SalaryRule rule) {
        return nz(rule.getAmountPercentage()).divide(new BigDecimal("100"), 6, RoundingMode.HALF_UP);
    }

    /** Formules BUILTIN à taux plat (%) — mêmes codes que ceux lus via {@link #pct}. */
    private static final Set<String> RATE_BUILTIN_CODES = Set.of(
            "CNPS_EMP", "CFC_EMP", "CAC", "CNPS_PAT", "PVID_PAT", "AF_PAT", "ATMP_PAT", "CFC_PAT", "FNE_PAT");

    /** Taux (%) à afficher sur la ligne du bulletin (colonne « Taux »). Vide (0) si la ligne n'est pas
     *  un pourcentage d'une base (montant fixe, élément variable, ou formule légale non pourcentuelle
     *  comme RAV/IRPP à tranches). */
    private BigDecimal displayRate(SalaryRule rule) {
        String type = rule.getComputeType() == null ? "FIX" : rule.getComputeType();
        if ("PERCENTAGE".equals(type)) return nz(rule.getAmountPercentage());
        if ("BUILTIN".equals(type) && RATE_BUILTIN_CODES.contains(rule.getBuiltinCode())) return nz(rule.getAmountPercentage());
        return ZERO;
    }

    private BigDecimal contractField(String field, EmployeeContract c) {
        if (field == null) return ZERO;
        return switch (field) {
            case "primeTransport" -> nz(c.getPrimeTransport());
            case "primeLogement" -> nz(c.getPrimeLogement());
            case "primeRepresentation" -> nz(c.getPrimeRepresentation());
            case "primeFonction" -> nz(c.getPrimeFonction());
            case "primeAnciennete" -> nz(c.getPrimeAnciennete());
            case "autresPrimes" -> nz(c.getAutresPrimes());
            default -> ZERO;
        };
    }

    /** IRPP mensuel (valeur positive). 0 si brut sous le seuil d'imposition. Barème par tranches
     *  progressif, lu depuis {@code rule.bracketsConfig} (seuil = {@code rule.amountFix}) —
     *  éditable depuis Configuration paie ; repli sur le barème légal si non configuré. */
    private BigDecimal irpp(BigDecimal gross, Result r, SalaryRule rule) {
        BigDecimal threshold = rule.getAmountFix() != null && rule.getAmountFix().compareTo(ZERO) > 0
                ? rule.getAmountFix() : IRPP_THRESHOLD_FALLBACK;
        if (gross.compareTo(threshold) < 0) return ZERO;
        BigDecimal cnps = r.ruleValues.getOrDefault("CNPS_EMP", ZERO).abs();
        BigDecimal brutAnnuel = gross.multiply(new BigDecimal("12"));
        BigDecimal cnpsAnnuel = cnps.multiply(new BigDecimal("12"));
        BigDecimal netInterm = brutAnnuel.subtract(cnpsAnnuel);
        BigDecimal fraisPro = netInterm.multiply(new BigDecimal("0.30"));
        BigDecimal rni = netInterm.subtract(fraisPro).subtract(new BigDecimal("500000"));
        if (rni.compareTo(ZERO) <= 0) return ZERO;

        List<BigDecimal[]> brackets = parseBracketString(
                rule.getBracketsConfig() != null && !rule.getBracketsConfig().isBlank()
                        ? rule.getBracketsConfig() : IRPP_BRACKETS_FALLBACK);

        BigDecimal impot = ZERO;
        BigDecimal lowerBound = ZERO;
        for (BigDecimal[] bracket : brackets) {
            BigDecimal upperBound = bracket[0];
            BigDecimal ratePct = bracket[1];
            if (rni.compareTo(lowerBound) <= 0) break;
            BigDecimal taxableInBracket = rni.min(upperBound).subtract(lowerBound);
            if (taxableInBracket.compareTo(ZERO) > 0) {
                impot = impot.add(taxableInBracket.multiply(ratePct).divide(new BigDecimal("100"), 6, RoundingMode.HALF_UP));
            }
            lowerBound = upperBound;
        }
        return impot.divide(new BigDecimal("12"), 2, RoundingMode.HALF_UP);
    }

    /** Redevance audiovisuelle mensuelle (valeur positive) par tranche de brut, lue depuis
     *  {@code rule.bracketsConfig} — éditable depuis Configuration paie ; repli sur le barème
     *  légal si non configuré. */
    private BigDecimal rav(BigDecimal gross, SalaryRule rule) {
        List<BigDecimal[]> brackets = parseBracketString(
                rule.getBracketsConfig() != null && !rule.getBracketsConfig().isBlank()
                        ? rule.getBracketsConfig() : RAV_BRACKETS_FALLBACK);
        for (BigDecimal[] bracket : brackets) {
            if (gross.compareTo(bracket[0]) <= 0) return bracket[1];
        }
        return brackets.get(brackets.size() - 1)[1];
    }

    private BigDecimal capped(BigDecimal gross, SalaryRule rule) {
        BigDecimal ceilingAmount = rule.getCeilingAmount() != null ? rule.getCeilingAmount() : CNPS_CEILING_FALLBACK;
        return gross.min(ceilingAmount);
    }

    private static BigDecimal nz(BigDecimal v) { return v == null ? ZERO : v; }
}
