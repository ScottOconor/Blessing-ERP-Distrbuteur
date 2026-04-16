package com.erp.purchases.entity;

import com.erp.accounting.entity.Partner;
import com.erp.stock.entity.ProductCategory;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Configuration d'une remise fournisseur sur une catégorie de produit.
 * Équivalent de la ristourne côté achats.
 */
@Entity
@Table(name = "remises",
       uniqueConstraints = @UniqueConstraint(columnNames = {"partner_id", "category_id", "company_id"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Remise {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id", nullable = false)
    private Partner partner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    /** Montant fixe de remise par unité/casier (HT) */
    @Column(name = "montant_fixe", precision = 20, scale = 2, nullable = false)
    private BigDecimal montantFixe;

    /**
     * Type de calcul remise TTC :
     * brasserie : montantHT × (1 + tauxPrecompte/100)
     * guinness  : montantHT = montantTTC (pas de précompte)
     */
    @Column(name = "type_remise")
    private String typeRemise;  // "brasserie" | "guinness"

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    private boolean active = true;
}
