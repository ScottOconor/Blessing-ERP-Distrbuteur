package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Catégorie/échelon de la grille salariale (convention collective) — ex. « 6A », « Cadre »,
 * « Agent de maîtrise ». Catalogue configurable par société (les grilles varient selon le
 * secteur/la convention collective), référencé par {@link JobPosition#getCategory()} et
 * {@link EmployeeContract#getProfessionalCategory()}.
 */
@Entity
@Table(name = "hr_professional_categories",
       uniqueConstraints = @UniqueConstraint(name = "uk_prof_category_company_code", columnNames = {"company_id", "code"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ProfessionalCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Libellé complet — ex. « Catégorie 6A - Chef de service ». */
    @Column(nullable = false)
    private String name;

    /** Code court stocké sur le poste/contrat — ex. « 6A ». */
    @Column(nullable = false)
    private String code;

    @Builder.Default
    private int sequence = 10;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;
}
