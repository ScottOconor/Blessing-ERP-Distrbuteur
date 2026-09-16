package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Échelon d'une catégorie professionnelle — ex. « Échelon A », « Échelon B » au sein de la
 * catégorie « 6A ». Porte le salaire de base de la grille pour ce couple catégorie/échelon,
 * utilisé pour pré-remplir {@link EmployeeContract#getWage()}.
 */
@Entity
@Table(name = "hr_echelons",
       uniqueConstraints = @UniqueConstraint(name = "uk_echelon_company_category_code",
               columnNames = {"company_id", "professional_category_id", "code"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Echelon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Libellé — ex. « Échelon A ». */
    @Column(nullable = false)
    private String name;

    /** Code court stocké sur le contrat — ex. « A ». */
    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private Long professionalCategoryId;

    /** Salaire de base de la grille pour ce couple catégorie/échelon. */
    @Builder.Default
    private BigDecimal baseWage = BigDecimal.ZERO;

    @Builder.Default
    private int sequence = 10;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;
}
