package com.erp.purchases.entity;

import com.erp.stock.entity.ProductCategory;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Ligne de règlement remise fournisseur.
 */
@Entity
@Table(name = "remise_paiement_lines")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RemisePaiementLine {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paiement_id", nullable = false)
    private RemisePaiement paiement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    /** Quantité totale achetée sur la période */
    @Column(precision = 20, scale = 4)
    private BigDecimal quantite;

    /** Montant unitaire de remise (HT) */
    @Column(name = "montant_unitaire", precision = 20, scale = 2)
    private BigDecimal montantUnitaire;

    /** Montant total = quantite * montantUnitaire */
    @Column(name = "montant_total", precision = 20, scale = 2)
    private BigDecimal montantTotal;
}
