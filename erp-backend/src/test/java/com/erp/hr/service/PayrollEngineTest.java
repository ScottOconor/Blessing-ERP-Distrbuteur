package com.erp.hr.service;

import com.erp.hr.entity.EmployeeContract;
import com.erp.hr.entity.SalaryRule;
import com.erp.hr.entity.SalaryRuleCategory;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * PayrollEngine est le moteur de calcul de paie — ces tests couvrent les deux correctifs de
 * cette session : la proratisation du salaire de base (contrat démarré/terminé en cours de
 * période) et l'externalisation des barèmes réglementaires (plafond CNPS, tranches IRPP/RAV)
 * depuis SalaryRule plutôt que codés en dur, avec repli sur le barème légal si non configuré.
 */
class PayrollEngineTest {

    private final PayrollEngine engine = new PayrollEngine();
    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private SalaryRuleCategory cat(String code) {
        return SalaryRuleCategory.builder().code(code).name(code).sequence(1).companyId(1L).build();
    }

    private EmployeeContract contract(BigDecimal wage) {
        return EmployeeContract.builder().id(1L).employeeId(1L).wage(wage).companyId(1L).build();
    }

    private SalaryRule basicRule() {
        return SalaryRule.builder().code("BASIC").name("Salaire de Base").sequence(10)
                .categoryCode("BASIC").computeType("BUILTIN").builtinCode("BASIC")
                .companyId(1L).active(true).build();
    }

    @Test
    void basicSalaryIsPaidInFullWhenNoProrationFactorGiven() {
        SalaryRule rule = basicRule();
        var result = engine.compute(contract(new BigDecimal("300000")), List.of(rule),
                List.of(cat("BASIC")), Map.of(), Map.of(), null);

        assertThat(result.ruleValues.get("BASIC")).isEqualByComparingTo("300000");
    }

    @Test
    void basicSalaryIsProratedWhenFactorLessThanOne() {
        SalaryRule rule = basicRule();
        // Contrat actif 15 jours sur 30 → moitié du salaire.
        BigDecimal half = new BigDecimal("0.5");
        var result = engine.compute(contract(new BigDecimal("300000")), List.of(rule),
                List.of(cat("BASIC")), Map.of(), Map.of(), half);

        assertThat(result.ruleValues.get("BASIC")).isEqualByComparingTo("150000");
    }

    @Test
    void basicSalaryIsUnaffectedByOtherRuleTypesLikeContractFields() {
        // La proratisation ne s'applique qu'au BASIC, pas aux indemnités contractuelles.
        SalaryRule transportRule = SalaryRule.builder().code("TRANS").name("Transport").sequence(20)
                .categoryCode("ALW").computeType("BUILTIN").builtinCode("CONTRACT_FIELD")
                .baseCode("primeTransport").companyId(1L).active(true).build();

        EmployeeContract c = EmployeeContract.builder().id(1L).employeeId(1L)
                .wage(new BigDecimal("300000")).primeTransport(new BigDecimal("50000")).companyId(1L).build();

        var result = engine.compute(c, List.of(transportRule), List.of(cat("ALW")),
                Map.of(), Map.of(), new BigDecimal("0.5"));

        assertThat(result.ruleValues.get("TRANS")).isEqualByComparingTo("50000");
    }

    @Test
    void cnpsUsesConfiguredCeilingFromRuleWhenSet() {
        // Plafond personnalisé à 500 000 au lieu du plafond légal 750 000 — le CNPS_EMP (4.2%) doit
        // s'appliquer sur min(brut, 500000), pas sur le brut réel de 900 000.
        SalaryRule basic = basicRule();
        SalaryRule cnps = SalaryRule.builder().code("CNPS_EMP").name("CNPS").sequence(200)
                .categoryCode("DED").computeType("BUILTIN").builtinCode("CNPS_EMP")
                .amountPercentage(new BigDecimal("4.2")).ceilingAmount(new BigDecimal("500000"))
                .deduction(true).companyId(1L).active(true).build();

        var result = engine.compute(contract(new BigDecimal("900000")), List.of(basic, cnps),
                List.of(cat("BASIC"), cat("DED")), Map.of(), Map.of(), null);

        // 500000 * 4.2% = 21000, retenue donc négative.
        assertThat(result.ruleValues.get("CNPS_EMP")).isEqualByComparingTo("-21000");
    }

    @Test
    void cnpsFallsBackToLegalCeilingWhenRuleHasNoCeilingConfigured() {
        SalaryRule basic = basicRule();
        SalaryRule cnps = SalaryRule.builder().code("CNPS_EMP").name("CNPS").sequence(200)
                .categoryCode("DED").computeType("BUILTIN").builtinCode("CNPS_EMP")
                .amountPercentage(new BigDecimal("4.2")).deduction(true)
                .companyId(1L).active(true).build();

        var result = engine.compute(contract(new BigDecimal("900000")), List.of(basic, cnps),
                List.of(cat("BASIC"), cat("DED")), Map.of(), Map.of(), null);

        // Repli sur le plafond légal 750000 : 750000 * 4.2% = 31500.
        assertThat(result.ruleValues.get("CNPS_EMP")).isEqualByComparingTo("-31500");
    }

    @Test
    void ravUsesConfiguredBracketsFromRuleWhenSet() {
        SalaryRule basic = basicRule();
        // Barème RAV personnalisé à un seul palier : tout est à 1000 FCFA quel que soit le brut.
        SalaryRule rav = SalaryRule.builder().code("RAV").name("RAV").sequence(210)
                .categoryCode("DED").computeType("BUILTIN").builtinCode("RAV")
                .bracketsConfig("999999999999:1000").deduction(true)
                .companyId(1L).active(true).build();

        var result = engine.compute(contract(new BigDecimal("300000")), List.of(basic, rav),
                List.of(cat("BASIC"), cat("DED")), Map.of(), Map.of(), null);

        assertThat(result.ruleValues.get("RAV")).isEqualByComparingTo("-1000");
    }

    @Test
    void quantityWorkedDaysCodeMultipliesTheRateByDaysEntered() {
        SalaryRule dailyRate = SalaryRule.builder().code("ABS").name("Absence").sequence(400)
                .categoryCode("DED").computeType("FIX").amountFix(new BigDecimal("10000"))
                .quantityWorkedDaysCode("ABS_DAYS").deduction(true)
                .companyId(1L).active(true).build();

        var result = engine.compute(contract(new BigDecimal("300000")), List.of(dailyRate),
                List.of(cat("DED")), Map.of(), Map.of("ABS_DAYS", new BigDecimal("3")), null);

        // 10000 (taux journalier, déjà négatif car deduction) * 3 jours = -30000.
        assertThat(result.ruleValues.get("ABS")).isEqualByComparingTo("-30000");
    }
}
