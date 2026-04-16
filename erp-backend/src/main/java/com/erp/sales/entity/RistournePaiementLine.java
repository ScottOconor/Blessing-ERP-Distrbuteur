package com.erp.sales.entity;

import com.erp.stock.entity.ProductCategory;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Ligne de règlement ristourne : catégorie + quantité vendue + montant calculé.
 */
@Entity
@Table(name = "ristourne_paiement_lines")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RistournePaiementLine {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paiement_id", nullable = false)
    private RistournePaiement paiement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    /** Quantité totale vendue sur la période */
    @Column(precision = 20, scale = 4)
    private BigDecimal quantite;

    /** Montant unitaire de ristourne (HT) */
    @Column(name = "montant_unitaire", precision = 20, scale = 2)
    private BigDecimal montantUnitaire;

    /** Montant total = quantite * montantUnitaire */
    @Column(name = "montant_total", precision = 20, scale = 2)
    private BigDecimal montantTotal;

    /** Montant TTC (avec précompte et TVA selon type_ristourne) */
    @Column(name = "montant_ttc", precision = 20, scale = 2)
    private BigDecimal montantTTC;
}
