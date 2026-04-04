package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "stock_moves")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockMove {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "picking_id")
    private StockPicking picking;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    private String productCode;
    private String productName;
    private String uomName;

    /** Quantité demandée */
    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal qtyDemanded;

    /** Quantité effectivement traitée (saisie lors de la validation) */
    @Column(precision = 20, scale = 4)
    @Builder.Default
    private BigDecimal qtyDone = BigDecimal.ZERO;

    /** Prix unitaire pour valorisation */
    @Column(precision = 20, scale = 4)
    @Builder.Default
    private BigDecimal priceUnit = BigDecimal.ZERO;

    @Column(name = "location_id", nullable = false)
    private Long locationId;

    @Column(name = "location_dest_id", nullable = false)
    private Long locationDestId;

    /** draft / done / cancelled */
    @Builder.Default
    private String state = "draft";

    @Column(name = "company_id", nullable = false)
    private Long companyId;
}
