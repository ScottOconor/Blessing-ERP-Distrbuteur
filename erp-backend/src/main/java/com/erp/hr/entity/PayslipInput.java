package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/** Élément variable saisi sur un bulletin (avance, prime exceptionnelle, retenue ponctuelle…). */
@Entity
@Table(name = "hr_payslip_inputs")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipInput {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long payslipId;

    /** Code référencé par une règle INPUT (ex. AVANCE, PRIME_EXC). */
    @Column(nullable = false)
    private String code;

    private String name;

    @Builder.Default
    private BigDecimal amount = BigDecimal.ZERO;

    @Column(nullable = false)
    private Long companyId;
}
