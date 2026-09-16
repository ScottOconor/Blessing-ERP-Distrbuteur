package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Catalogue des éléments variables saisissables sur un bulletin (avance, prime exceptionnelle,
 * retenue diverse…). Une règle salariale de type INPUT référence un de ces codes.
 */
@Entity
@Table(name = "hr_payslip_input_types")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipInputType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    /** Code unique (par société) — ex. AVANCE, PRIME_EXC. */
    @Column(nullable = false)
    private String code;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;
}
