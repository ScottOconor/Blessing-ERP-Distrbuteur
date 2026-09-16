package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products", indexes = {
    // Toutes les requêtes de listing (getProducts, imports Eleader, recherche) filtrent par
    // company_id — table sans aucun index jusqu'ici (contrairement à SalesInvoice/StockQuant/...
    // déjà couvertes), donc scan complet à chaque écran "Articles" sur un catalogue volumineux.
    @Index(name = "idx_products_company_active",  columnList = "company_id, active"),
    @Index(name = "idx_products_company_code",    columnList = "company_id, default_code")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Product {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Référence / SKU */
    @Column(name = "default_code")
    private String defaultCode;

    @Column(nullable = false)
    private String name;

    @Column(name = "category_id")
    private Long categoryId;

    /** Unité de mesure (texte libre, historique) */
    private String uomName;

    /** Unité de mesure (référence vers la liste UDM gérée), optionnelle */
    @Column(name = "unit_of_measure_id")
    private Long unitOfMeasureId;

    /** Prix de revient CMUP (mis à jour automatiquement) */
    @Column(precision = 20, scale = 4)
    private BigDecimal standardPrice;

    /** Prix de vente */
    @Column(precision = 20, scale = 4)
    private BigDecimal salePrice;

    /** product / service / consu */
    @Column(nullable = false)
    private String type;

    /** Compte stock OHADA (ex: 311000). Si null, hérite de la catégorie */
    private String stockAccountCode;

    private String description;

    @Builder.Default
    private boolean active = true;

    /** Exemption de TVA à la vente */
    @Builder.Default
    @Column(name = "exempt_tva", nullable = false, columnDefinition = "boolean default false")
    private Boolean exemptTva = false;

    /** Exemption de TVA à l'achat */
    @Builder.Default
    @Column(name = "exempt_tva_achat", nullable = false, columnDefinition = "boolean default false")
    private Boolean exemptTvaAchat = false;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
