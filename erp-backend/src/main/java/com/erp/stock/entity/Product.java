package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
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

    /** Unité de mesure */
    private String uomName;

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

    /** Compte coût des ventes (ex: 60500). Si null, hérite de la catégorie */
    private String cogsAccountCode;

    private String description;

    @Builder.Default
    private boolean active = true;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
