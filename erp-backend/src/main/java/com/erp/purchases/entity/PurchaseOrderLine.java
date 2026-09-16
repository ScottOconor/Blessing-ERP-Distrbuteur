package com.erp.purchases.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "purchase_order_lines", indexes = {
    @Index(name = "idx_purchase_order_lines_order_id", columnList = "order_id")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseOrderLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private PurchaseOrder order;

    @Column(name = "product_id")
    private Long productId;

    private String productCode;

    @Column(nullable = false)
    private String description;

    @Column(precision = 20, scale = 4)
    private BigDecimal quantity;

    @Column(precision = 20, scale = 4)
    private BigDecimal prixUnitaire;

    /** Taux de TVA en % (ex: 19.25) */
    @Column(precision = 10, scale = 4)
    private BigDecimal tauxTVA;

    /** Compte de charge (ex: 601100) */
    private String accountCode;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTTC;

    /** Catégorie de produit (pour calcul remise fournisseur) */
    @Column(name = "category_id")
    private Long categoryId;

    /** Produit consigne : exclut du précompte et remise */
    @Builder.Default
    @Column(name = "is_consigne")
    private boolean consigne = false;
}
