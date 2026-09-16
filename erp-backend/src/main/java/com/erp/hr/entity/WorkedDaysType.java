package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Catégorie de jours saisis sur un bulletin (jours travaillés, absence, congé payé…).
 * Référencée par {@link SalaryRule#getQuantityWorkedDaysCode()} pour faire dépendre le montant
 * d'une règle du nombre de jours saisi (ex. retenue = taux journalier × jours d'absence).
 */
@Entity
@Table(name = "hr_worked_days_types")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class WorkedDaysType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    /** Code unique (par société) — ex. WORK, ABS, CP. */
    @Column(nullable = false)
    private String code;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;
}
