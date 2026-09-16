package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/** Ligne d'un bulletin de paie (résultat de l'évaluation d'une règle salariale). */
@Entity
@Table(name = "hr_payslip_lines")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long payslipId;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private String name;

    private String categoryCode;
    private String categoryName;

    @Builder.Default
    private int sequence = 10;

    @Builder.Default
    private BigDecimal quantity = BigDecimal.ONE;

    /** Taux en % (100 = plein). */
    @Builder.Default
    private BigDecimal rate = new BigDecimal("100");

    @Builder.Default
    private BigDecimal amount = BigDecimal.ZERO;

    /** amount * quantity * rate/100 (signé : négatif pour les retenues). */
    @Builder.Default
    private BigDecimal total = BigDecimal.ZERO;

    // Comptes OHADA (copiés de la règle) pour l'écriture de paie.
    private String accountDebitCode;
    private String accountCreditCode;

    @Column(nullable = false)
    private Long companyId;
}
