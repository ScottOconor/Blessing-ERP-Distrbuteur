package com.erp.purchases.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "purchase_invoice_lines", indexes = {
    @Index(name = "idx_purchase_invoice_lines_invoice_id", columnList = "invoice_id")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoiceLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private PurchaseInvoice invoice;

    private String productCode;

    @Column(name = "product_id")
    private Long productId;

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

    // ===== Champs précompte =====

    /** Précompte calculé sur cette ligne */
    @Column(precision = 20, scale = 2)
    private BigDecimal precompte;

    /** Prix unitaire TTC */
    @Column(name = "prix_unitaire_ttc", precision = 20, scale = 4)
    private BigDecimal prixUnitaireTTC;

    /** Indique si c'est un produit consigne */
    @Builder.Default
    @Column(name = "is_consigne")
    private boolean consigne = false;

    /** Catégorie de produit (pour calcul remise fournisseur) */
    @Column(name = "category_id")
    private Long categoryId;

    /** Rabais unitaire HT obtenu du fournisseur (standardPrice - prixFournisseur) */
    @Column(name = "rabais_unitaire", precision = 20, scale = 4)
    private BigDecimal rabaisUnitaire;

    /** Montant total du rabais HT sur cette ligne = rabaisUnitaire × quantité */
    @Column(name = "total_rabais_ligne", precision = 20, scale = 2)
    private BigDecimal totalRabaisLigne;
}
