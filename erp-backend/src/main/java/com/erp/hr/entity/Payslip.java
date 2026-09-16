package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/** Bulletin de paie d'un employé sur une période. */
@Entity
@Table(name = "hr_payslips")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Payslip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Référence lisible (ex. BULL-2026-00001). */
    private String name;

    @Column(nullable = false)
    private Long employeeId;
    /** Snapshot pour affichage/historique. */
    private String employeeName;
    private String employeeMatricule;

    @Column(nullable = false)
    private Long contractId;

    private Long runId;

    private LocalDate periodFrom;
    private LocalDate periodTo;

    /** DRAFT, VERIFY (calculé), DONE (validé + écriture), CANCELLED. */
    @Builder.Default
    private String state = "DRAFT";

    // Totaux (FCFA)
    @Builder.Default private BigDecimal totalBrut = BigDecimal.ZERO;
    @Builder.Default private BigDecimal totalCotisationsSalariales = BigDecimal.ZERO;
    @Builder.Default private BigDecimal totalNet = BigDecimal.ZERO;
    @Builder.Default private BigDecimal totalChargesPatronales = BigDecimal.ZERO;

    // Comptabilité
    private Long journalId;
    private Long accountMoveId;

    // Les lignes (hr_payslip_lines) et éléments variables (hr_payslip_inputs) référencent
    // ce bulletin par payslipId et sont gérés via leurs repositories.

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
