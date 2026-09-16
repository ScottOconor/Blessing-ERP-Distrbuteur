package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

/** Lot de bulletins de paie (traitement d'une période pour plusieurs employés). */
@Entity
@Table(name = "hr_payslip_runs")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipRun {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private LocalDate dateStart;
    private LocalDate dateEnd;

    /** DRAFT, VERIFY (calculé), DONE (validé/comptabilisé). */
    @Builder.Default
    private String state = "DRAFT";

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
