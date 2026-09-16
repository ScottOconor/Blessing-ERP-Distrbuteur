package com.erp.hr.init;

import com.erp.hr.entity.SalaryRule;
import com.erp.hr.entity.SalaryRuleCategory;
import com.erp.hr.repository.SalaryRuleCategoryRepository;
import com.erp.hr.repository.SalaryRuleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Initialise, pour une société, les catégories et règles salariales standard du Cameroun
 * (CNPS, CFC, RAV, IRPP, CAC, charges patronales). Idempotent : ne fait rien si déjà présent.
 *
 * Comptes OHADA à 6 chiffres — vérifiés contre le plan comptable réel de la société
 * (import « Compte (account.account).xlsx »), modifiables ensuite via la configuration paie :
 *
 *  GAINS (débit, classe 66/actif circulant non concerné) :
 *   661100 Appointements, salaires et commissions   → Salaire de base
 *   661200 Primes et gratifications                 → Prime de fonction, Prime d'ancienneté
 *   663100 Indemnités de logement                    → Indemnité logement
 *   663200 Indemnités de représentation               → Indemnité représentation
 *   663400 Indemnités de transport                    → Indemnité transport
 *   663800 Autres indemnités et avantages divers      → Autres primes
 *  (Le Salaire Brut lui-même n'est PAS repostée : c'est un sous-total informatif — chaque
 *   gain est déjà comptabilisé individuellement ci-dessus. Le posté deux fois créerait un doublon.)
 *
 *  RETENUES SALARIALES (crédit — sommes dues aux organismes/État) :
 *   431300 Caisse de retraite obligatoire (PVID)      → Retenue CNPS salarié (4,2%, seule branche à charge salarié)
 *   447200 Impôts sur salaires                        → Crédit Foncier salarié (1%)
 *   447100 Impôt Général sur le Revenu (IGR/IRPP)      → IRPP
 *   447800 Autres impôts et contributions              → RAV et CAC (pas de ligne dédiée dans le plan)
 *
 *  NET À PAYER (crédit) :
 *   422000 Personnel, rémunérations dues
 *
 *  CHARGES PATRONALES — deux natures distinctes, chacune sur sa propre famille de comptes :
 *
 *   a) Cotisations sociales CNPS (664xxx débit / 431xxx crédit, scindées par branche pour le DIPE) :
 *      664100 Charges sociales sur rémunération du personnel national → débit PVID/AF/ATMP patronaux
 *      431300 Caisse de retraite obligatoire   → PVID patronal (7%)
 *      431100 Prestations familiales           → Allocations familiales patronales (7%)
 *      431200 Accidents de travail             → ATMP patronal (2,5%)
 *
 *   b) Impôts/taxes patronaux assis sur les salaires (641300 débit — PAS 664, ce ne sont pas des
 *      cotisations sociales mais des impôts dus à la DGI) :
 *      641300 Taxes sur appointements et salaires → débit CFC patronal et FNE
 *      447200 Impôts sur salaires                 → crédit CFC patronal (même compte que la part salariale)
 *      442800 Autres impôts et taxes d'État        → crédit FNE (taxe patronale pure, pas une retenue —
 *                                                     443xxx est réservé à la TVA dans ce plan, donc exclu)
 *
 * Comptes sans ligne dédiée dans le plan importé (RAV et CAC regroupés sur 447800, retenues
 * salariales sans compte propre) : à affiner si la société souhaite un suivi séparé — ajouter la
 * sous-ligne correspondante au plan comptable puis mettre à jour la règle dans Configuration paie.
 */
@Component
@RequiredArgsConstructor
public class PayrollSeeder {

    private final SalaryRuleCategoryRepository categoryRepo;
    private final SalaryRuleRepository ruleRepo;

    // Gains
    private static final String ACC_SALAIRE   = "661100"; // Appointements, salaires et commissions
    private static final String ACC_PRIMES    = "661200"; // Primes et gratifications
    private static final String ACC_LOGEMENT  = "663100"; // Indemnités de logement
    private static final String ACC_REPRES    = "663200"; // Indemnités de représentation
    private static final String ACC_TRANSPORT = "663400"; // Indemnités de transport
    private static final String ACC_AUTRES_IND= "663800"; // Autres indemnités et avantages divers

    // Retenues salariales / État
    private static final String ACC_CNPS_PVID = "431300"; // Caisse de retraite obligatoire (PVID)
    private static final String ACC_CNPS_AF    = "431100"; // Prestations familiales
    private static final String ACC_CNPS_ATMP  = "431200"; // Accidents de travail
    private static final String ACC_IMPOT_SAL  = "447200"; // Impôts sur salaires (CFC salarié + patronal)
    private static final String ACC_IRPP       = "447100"; // Impôt Général sur le Revenu (IGR/IRPP)
    private static final String ACC_AUTRES_IMP = "447800"; // Autres impôts et contributions (RAV, CAC — retenues salariales)
    private static final String ACC_AUTRES_TAXE_ETAT = "442800"; // Autres impôts et taxes d'État (FNE — taxe patronale, non retenue sur salaire)

    // Net et charges patronales
    private static final String ACC_NET        = "422000"; // Personnel, rémunérations dues
    private static final String ACC_CHARGE_SOC = "664100"; // Charges sociales sur rémunération du personnel national (cotisations CNPS)
    private static final String ACC_TAXE_SAL   = "641300"; // Taxes sur appointements et salaires (CFC patronal + FNE : ce sont des IMPÔTS, pas des cotisations sociales)

    /**
     * {@code synchronized} (pas {@code @Transactional} à ce niveau) : la config paie déclenche
     * couramment deux appels HTTP quasi simultanés (ex. getCategories() + getRules() au chargement
     * de l'écran), qui sans verrou passent TOUS LES DEUX le test "déjà seedé ?" avant que l'un des
     * deux ait rien inséré → doublons. Le verrou sérialise les appels ; comme chaque repository
     * Spring Data committe sa propre transaction dès son retour, le second appel voit forcément
     * les lignes déjà insérées par le premier une fois le verrou libéré.
     */
    public synchronized void seedIfEmpty(Long companyId) {
        if (categoryRepo.countByCompanyId(companyId) > 0 || ruleRepo.countByCompanyId(companyId) > 0) return;

        List<SalaryRuleCategory> cats = new ArrayList<>();
        cats.add(cat("Salaire de base", "BASIC", 10, companyId));
        cats.add(cat("Indemnités & primes", "ALW", 20, companyId));
        cats.add(cat("Salaire brut", "GROSS", 30, companyId));
        cats.add(cat("Retenues salariales", "DED", 40, companyId));
        cats.add(cat("Net à payer", "NET", 50, companyId));
        cats.add(cat("Charges patronales", "COMP", 60, companyId));
        categoryRepo.saveAll(cats);

        List<SalaryRule> rules = new ArrayList<>();

        // ── Gains — chacun posté individuellement à son compte de charge réel ──
        rules.add(withDebit(builtin("Salaire de Base", "BASIC", 10, "BASIC", "BASIC", null, companyId), ACC_SALAIRE));
        rules.add(withDebit(field("Indemnité de Transport", "TRANS", 20, "primeTransport", companyId), ACC_TRANSPORT));
        rules.add(withDebit(field("Indemnité de Logement", "LOG", 21, "primeLogement", companyId), ACC_LOGEMENT));
        rules.add(withDebit(field("Indemnité de Représentation", "REP", 22, "primeRepresentation", companyId), ACC_REPRES));
        rules.add(withDebit(field("Prime de Fonction", "FONC", 23, "primeFonction", companyId), ACC_PRIMES));
        rules.add(withDebit(field("Prime d'Ancienneté", "ANC", 24, "primeAnciennete", companyId), ACC_PRIMES));
        rules.add(withDebit(field("Autres Primes", "AUTRES", 25, "autresPrimes", companyId), ACC_AUTRES_IND));

        // Brut : sous-total informatif, sans compte (déjà couvert par les gains individuels ci-dessus).
        rules.add(builtin("Salaire Brut", "GROSS", 100, "GROSS", "GROSS", null, companyId));

        // ── Retenues salariales (crédit) — les taux (%) sont éditables depuis Configuration paie ──
        rules.add(ceiling(pct(ded("Retenue CNPS", "CNPS_EMP", 200, "CNPS_EMP", ACC_CNPS_PVID, companyId), "4.2"), CNPS_CEILING_DEFAULT));
        rules.add(pct(ded("Crédit Foncier salarié", "CFC_EMP", 205, "CFC_EMP", ACC_IMPOT_SAL, companyId), "1"));
        rules.add(brackets(ded("Redevance Audiovisuelle (RAV)", "RAV", 210, "RAV", ACC_AUTRES_IMP, companyId), RAV_BRACKETS_DEFAULT));
        SalaryRule irpp = ded("IRPP", "IRPP", 300, "IRPP", ACC_IRPP, companyId);
        irpp.setAmountFix(IRPP_THRESHOLD_DEFAULT); // seuil d'imposition (RNI en-dessous duquel : 0 FCFA)
        irpp.setBracketsConfig(IRPP_BRACKETS_DEFAULT);
        rules.add(irpp);
        rules.add(pct(ded("CAC", "CAC", 305, "CAC", ACC_AUTRES_IMP, companyId), "10"));

        // Net (crédit)
        SalaryRule net = builtin("Net à Payer", "NET", 500, "NET", "NET", null, companyId);
        net.setAccountCreditCode(ACC_NET);
        rules.add(net);

        // ── Charges patronales — CNPS scindée par branche pour un DIPE exploitable ──
        rules.add(ceiling(pct(patronal("CNPS Patronale - PVID", "PVID_PAT", 600, "PVID_PAT", ACC_CNPS_PVID, companyId), "7"), CNPS_CEILING_DEFAULT));
        rules.add(ceiling(pct(patronal("CNPS Patronale - Allocations Familiales", "AF_PAT", 601, "AF_PAT", ACC_CNPS_AF, companyId), "7"), CNPS_CEILING_DEFAULT));
        rules.add(ceiling(pct(patronal("CNPS Patronale - ATMP", "ATMP_PAT", 602, "ATMP_PAT", ACC_CNPS_ATMP, companyId), "2.5"), CNPS_CEILING_DEFAULT));
        // CFC et FNE patronaux : des IMPÔTS assis sur les salaires, pas des cotisations sociales
        // → débit 641300 (Taxes sur appointements et salaires), pas 664100.
        rules.add(pct(patronal("Crédit Foncier patronal", "CFC_PAT", 603, "CFC_PAT", ACC_TAXE_SAL, ACC_IMPOT_SAL, companyId), "1.5"));
        rules.add(pct(patronal("FNE Patronal", "FNE_PAT", 604, "FNE_PAT", ACC_TAXE_SAL, ACC_AUTRES_TAXE_ETAT, companyId), "1"));

        ruleRepo.saveAll(rules);
    }

    /** Plafond CNPS légal par défaut (FCFA) — CNPS_EMP, CNPS_PAT, PVID_PAT, AF_PAT, ATMP_PAT. */
    private static final BigDecimal CNPS_CEILING_DEFAULT = new BigDecimal("750000");

    /** Seuil d'imposition IRPP légal par défaut (FCFA de RNI mensuel). */
    private static final BigDecimal IRPP_THRESHOLD_DEFAULT = new BigDecimal("62000");

    /** Tranches IRPP légales par défaut : "plafondRNI:tauxPct,...". */
    private static final String IRPP_BRACKETS_DEFAULT =
            "2000000:10,3000000:15,5000000:25,999999999999:35";

    /** Tranches RAV légales par défaut : "plafondBrut:montantMensuel,...". */
    private static final String RAV_BRACKETS_DEFAULT =
            "50000:0,100000:750,200000:1950,300000:3250,400000:4550,500000:5850,"
            + "600000:7150,700000:8450,800000:9750,900000:11050,1000000:12350,999999999999:13000";

    /** Taux légaux par défaut des formules BUILTIN à taux plat — utilisés pour le seed initial ci-dessus
     *  ET pour rétro-remplir les sociétés déjà seedées avant que ces taux ne deviennent éditables
     *  ({@link #backfillBuiltinRates}). RAV et IRPP en sont exclus : ce sont des barèmes par tranches,
     *  pas un simple pourcentage. */
    private static final Map<String, BigDecimal> RATE_DEFAULTS = Map.of(
            "CNPS_EMP", new BigDecimal("4.2"),
            "CFC_EMP", new BigDecimal("1"),
            "CAC", new BigDecimal("10"),
            "CNPS_PAT", new BigDecimal("16.5"),
            "PVID_PAT", new BigDecimal("7"),
            "AF_PAT", new BigDecimal("7"),
            "ATMP_PAT", new BigDecimal("2.5"),
            "CFC_PAT", new BigDecimal("1.5"),
            "FNE_PAT", new BigDecimal("1")
    );

    /**
     * Rétro-compatibilité : les sociétés déjà seedées avant l'introduction des taux éditables ont
     * ces règles BUILTIN avec {@code amountPercentage=0} (jamais renseigné par l'ancien seeder, qui
     * codait le taux en dur dans {@code PayrollEngine}). Sans ce correctif, le moteur lirait 0 % et
     * annulerait silencieusement CNPS/CFC/charges patronales. Rétro-remplit uniquement les règles à
     * 0 % (jamais explicitement configurées) — n'écrase pas un taux qu'un utilisateur aurait
     * volontairement mis à 0. Appelé aux mêmes points que {@link #seedIfEmpty}, donc idempotent et bon marché
     * une fois les taux renseignés (la condition à 0 % ne matche plus).
     */
    public void backfillBuiltinRates(Long companyId) {
        List<SalaryRule> all = ruleRepo.findByCompanyIdOrderBySequenceAscIdAsc(companyId);

        List<SalaryRule> rateFix = all.stream()
                .filter(r -> "BUILTIN".equals(r.getComputeType()))
                .filter(r -> RATE_DEFAULTS.containsKey(r.getBuiltinCode()))
                .filter(r -> r.getAmountPercentage() == null || r.getAmountPercentage().compareTo(BigDecimal.ZERO) == 0)
                .toList();
        rateFix.forEach(r -> r.setAmountPercentage(RATE_DEFAULTS.get(r.getBuiltinCode())));

        // Même logique de rétro-compatibilité pour le plafond CNPS et les barèmes IRPP/RAV,
        // introduits après le premier seed de certaines sociétés — sans ce correctif, ces règles
        // liraient un plafond/barème vide et PayrollEngine retomberait sur les valeurs légales
        // codées en dur (silencieux, mais alors non éditable pour ces sociétés-là).
        java.util.Set<String> ceilingCodes = java.util.Set.of("CNPS_EMP", "CNPS_PAT", "PVID_PAT", "AF_PAT", "ATMP_PAT");
        List<SalaryRule> ceilingFix = all.stream()
                .filter(r -> "BUILTIN".equals(r.getComputeType()))
                .filter(r -> ceilingCodes.contains(r.getBuiltinCode()))
                .filter(r -> r.getCeilingAmount() == null)
                .toList();
        ceilingFix.forEach(r -> r.setCeilingAmount(CNPS_CEILING_DEFAULT));

        List<SalaryRule> irppFix = all.stream()
                .filter(r -> "BUILTIN".equals(r.getComputeType()) && "IRPP".equals(r.getBuiltinCode()))
                .filter(r -> r.getBracketsConfig() == null || r.getBracketsConfig().isBlank())
                .toList();
        irppFix.forEach(r -> {
            r.setBracketsConfig(IRPP_BRACKETS_DEFAULT);
            if (r.getAmountFix() == null || r.getAmountFix().compareTo(BigDecimal.ZERO) == 0) {
                r.setAmountFix(IRPP_THRESHOLD_DEFAULT);
            }
        });

        List<SalaryRule> ravFix = all.stream()
                .filter(r -> "BUILTIN".equals(r.getComputeType()) && "RAV".equals(r.getBuiltinCode()))
                .filter(r -> r.getBracketsConfig() == null || r.getBracketsConfig().isBlank())
                .toList();
        ravFix.forEach(r -> r.setBracketsConfig(RAV_BRACKETS_DEFAULT));

        List<SalaryRule> toSave = new ArrayList<>();
        toSave.addAll(rateFix);
        toSave.addAll(ceilingFix);
        toSave.addAll(irppFix);
        toSave.addAll(ravFix);
        if (!toSave.isEmpty()) ruleRepo.saveAll(toSave);
    }

    private SalaryRuleCategory cat(String name, String code, int seq, Long companyId) {
        return SalaryRuleCategory.builder().name(name).code(code).sequence(seq).companyId(companyId).build();
    }

    private SalaryRule base(String name, String code, int seq, String catCode, Long companyId) {
        return SalaryRule.builder()
                .name(name).code(code).sequence(seq).categoryCode(catCode)
                .amountFix(BigDecimal.ZERO).amountPercentage(BigDecimal.ZERO)
                .active(true).hideIfZero(true).companyId(companyId).build();
    }

    private SalaryRule builtin(String name, String code, int seq, String catCode, String builtinCode, String base, Long companyId) {
        SalaryRule r = base(name, code, seq, catCode, companyId);
        r.setComputeType("BUILTIN");
        r.setBuiltinCode(builtinCode);
        r.setBaseCode(base);
        return r;
    }

    private SalaryRule field(String name, String code, int seq, String contractField, Long companyId) {
        SalaryRule r = base(name, code, seq, "ALW", companyId);
        r.setComputeType("BUILTIN");
        r.setBuiltinCode("CONTRACT_FIELD");
        r.setBaseCode(contractField);
        return r;
    }

    private SalaryRule withDebit(SalaryRule r, String debitAccount) {
        r.setAccountDebitCode(debitAccount);
        return r;
    }

    /** Taux (%) par défaut d'une règle BUILTIN à taux plat — éditable ensuite dans Configuration paie. */
    private SalaryRule ceiling(SalaryRule r, BigDecimal ceilingAmount) {
        r.setCeilingAmount(ceilingAmount);
        return r;
    }

    private SalaryRule brackets(SalaryRule r, String bracketsConfig) {
        r.setBracketsConfig(bracketsConfig);
        return r;
    }

    private SalaryRule pct(SalaryRule r, String percentage) {
        r.setAmountPercentage(new BigDecimal(percentage));
        return r;
    }

    private SalaryRule ded(String name, String code, int seq, String builtinCode, String creditAccount, Long companyId) {
        SalaryRule r = builtin(name, code, seq, "DED", builtinCode, null, companyId);
        r.setAccountCreditCode(creditAccount);
        return r;
    }

    /** Charge patronale = cotisation sociale CNPS : débit 664100 (charges sociales). */
    private SalaryRule patronal(String name, String code, int seq, String builtinCode, String creditAccount, Long companyId) {
        return patronal(name, code, seq, builtinCode, ACC_CHARGE_SOC, creditAccount, companyId);
    }

    /** Charge patronale = impôt/taxe sur salaires (CFC, FNE) : débit paramétrable (641300, pas 664). */
    private SalaryRule patronal(String name, String code, int seq, String builtinCode, String debitAccount, String creditAccount, Long companyId) {
        SalaryRule r = builtin(name, code, seq, "COMP", builtinCode, null, companyId);
        r.setAccountDebitCode(debitAccount);
        r.setAccountCreditCode(creditAccount);
        return r;
    }
}
