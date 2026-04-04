package com.erp.sales.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "sales_order_lines")
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

    /** Compte de produit (ex: 706100) */
    private String accountCode;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTTC;
}
