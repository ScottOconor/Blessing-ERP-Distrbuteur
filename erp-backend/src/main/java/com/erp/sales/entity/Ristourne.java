package com.erp.sales.entity;

import com.erp.accounting.entity.Partner;
import com.erp.stock.entity.ProductCategory;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Configuration d'une ristourne pour un client sur une catégorie de produit.
 * Le HT total est montantFixe + montantEnlevementHT. La formule TTC dépend du type.
 */
@Entity
@Table(name = "ristournes",
       uniqueConstraints = @UniqueConstraint(columnNames = {"partner_id", "category_id", "company_id"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Ristourne {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id", nullable = false)
    private Partner partner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    /** Montant fixe de ristourne par casier/unité (HT) */
    @Column(name = "montant_fixe", precision = 20, scale = 2, nullable = false)
    private BigDecimal montantFixe;

    /** Frais d'enlèvement HT par unité, débités au compte 701500. */
    @Column(name = "montant_enlevement_ht", precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal montantEnlevementHT = BigDecimal.ZERO;

    /**
     * Type de calcul ristourne TTC :
     * brasserie  : montantFixe * (1 + tauxPrecompte/100 + 0.1925)
     * guinness   : (montantFixe + montantEnlevementHT) * (1 + TVA), sans précompte
     */
    @Column(name = "type_ristourne")
    private String typeRistourne;  // "brasserie" | "guinness" | null (HT brut)

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    private boolean active = true;
}
