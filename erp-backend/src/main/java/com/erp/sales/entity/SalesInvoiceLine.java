package com.erp.sales.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "sales_invoice_lines", indexes = {
    @Index(name = "idx_sales_invoice_lines_invoice_id", columnList = "invoice_id")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesInvoiceLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private SalesInvoice invoice;

    /** ID du produit (pour mouvements de stock) */
    @Column(name = "product_id")
    private Long productId;

    private String productCode;

    @Column(nullable = false)
    private String description;

    @Column(precision = 20, scale = 4)
    private BigDecimal quantity;

    @Column(precision = 20, scale = 2)
    private BigDecimal prixUnitaire;

    @Column(precision = 10, scale = 4)
    private BigDecimal tauxRemise;

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

    // ===== Champs précompte / enlèvement =====

    /** Précompte calculé sur cette ligne (retenue à la source) */
    @Column(precision = 20, scale = 2)
    private BigDecimal precompte;

    /** Frais d'enlèvement HT pour cette ligne = montantEnlevement (HT) * quantite */
    @Column(name = "frais_enlevement", precision = 20, scale = 2)
    private BigDecimal fraisEnlevement;

    /** TVA sur les frais d'enlèvement de cette ligne = fraisEnlevement * tauxTVA */
    @Column(name = "frais_enlevement_tva", precision = 20, scale = 2)
    private BigDecimal fraisEnlevementTVA;

    /** Prix unitaire TTC (prixUnitaire * (1 + tauxTVA/100)) */
    @Column(name = "prix_unitaire_ttc", precision = 20, scale = 4)
    private BigDecimal prixUnitaireTTC;

    /** Indique si c'est un produit consigne (exclut du précompte et ristourne) */
    @Builder.Default
    @Column(name = "is_consigne")
    private boolean consigne = false;

    /** Catégorie de produit pour le calcul des frais d'enlèvement */
    @Column(name = "category_id")
    private Long categoryId;

    /** Taxe Guinness appliquée sur cette ligne (300 fixe si catégorie Guinness éligible, sinon 0) */
    @Builder.Default
    @Column(name = "guinness_taxe", precision = 20, scale = 2)
    private BigDecimal guinessTaxe = BigDecimal.ZERO;

    /** Rabais unitaire accordé à ce client = salePrice standard - prixClient (0 si pas de tarif client) */
    @Builder.Default
    @Column(name = "rabais_unitaire", precision = 20, scale = 2)
    private BigDecimal rabaisUnitaire = BigDecimal.ZERO;

    /** Montant total du rabais HT sur cette ligne = quantite × rabaisUnitaire */
    @Builder.Default
    @Column(name = "total_rabais_ligne", precision = 20, scale = 2)
    private BigDecimal totalRabaisLigne = BigDecimal.ZERO;

    /** Montant total du rabais TTC sur cette ligne = rabais HT × (1 + TVA% + précompte%) */
    @Builder.Default
    @Column(name = "total_rabais_ligne_ttc", precision = 20, scale = 2)
    private BigDecimal totalRabaisLigneTTC = BigDecimal.ZERO;
}
