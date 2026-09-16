package com.erp.sales.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "sales_order_lines", indexes = {
    @Index(name = "idx_sales_order_lines_order_id", columnList = "order_id")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesOrderLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private SalesOrder order;

    @Column(name = "product_id")
    private Long productId;

    private String productCode;

    @Column(nullable = false)
    private String description;

    @Column(precision = 20, scale = 4)
    private BigDecimal quantity;

    @Column(precision = 20, scale = 2)
    private BigDecimal prixUnitaire;

    /** Taux de remise en % (ex: 5.0 = 5%) */
    @Column(precision = 10, scale = 4)
    private BigDecimal tauxRemise;

    /** Taux de TVA en % (ex: 19.25) */
    @Column(precision = 10, scale = 4)
    private BigDecimal tauxTVA;

    /** Compte de produit (ex: 701100) */
    private String accountCode;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTTC;

    /** Catégorie de produit (pour calcul ristourne et frais d'enlèvement) */
    @Column(name = "category_id")
    private Long categoryId;

    /** Produit consigne : exclut du précompte, ristourne, enlèvement */
    @Builder.Default
    @Column(name = "is_consigne")
    private boolean consigne = false;

    /** Rabais unitaire accordé à ce client (= salePrice - prixClient). 0 si aucun tarif client. */
    @Builder.Default
    @Column(name = "rabais_unitaire", precision = 20, scale = 2)
    private BigDecimal rabaisUnitaire = BigDecimal.ZERO;

    /** Montant total du rabais sur cette ligne = quantite × rabaisUnitaire */
    @Builder.Default
    @Column(name = "total_rabais_ligne", precision = 20, scale = 2)
    private BigDecimal totalRabaisLigne = BigDecimal.ZERO;
}
