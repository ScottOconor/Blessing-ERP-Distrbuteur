package com.erp.common.entity;

import com.erp.stock.entity.ProductCategory;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Frais d'enlèvement : montant fixe par casier/unité pour une catégorie de produit.
 * Un seul enregistrement par catégorie.
 */
@Entity
@Table(name = "enlevements",
       uniqueConstraints = @UniqueConstraint(columnNames = {"category_id", "company_id"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Enlevement {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    /** Tarif d'enlèvement TTC par unité vendue (la TVA est extraite de ce montant lors de la facturation). */
    @Column(name = "montant_fixe", precision = 20, scale = 2, nullable = false)
    private BigDecimal montantFixe;

    /** Coût interne d'enlèvement TTC par unité. */
    @Column(name = "cout_enlevement", precision = 20, scale = 2)
    private BigDecimal coutEnlevement;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    private boolean active = true;
}
