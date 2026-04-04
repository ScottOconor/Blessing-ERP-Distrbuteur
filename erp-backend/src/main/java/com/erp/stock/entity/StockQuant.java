package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "stock_quants", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"product_id", "location_id", "company_id"})
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockQuant {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "location_id", nullable = false)
    private Long locationId;

    /** Quantité disponible (stock réel) */
    @Column(precision = 20, scale = 4, nullable = false)
    @Builder.Default
    private BigDecimal quantity = BigDecimal.ZERO;

    /** Quantité réservée pour des picking en cours */
    @Column(precision = 20, scale = 4, nullable = false)
    @Builder.Default
    private BigDecimal reservedQuantity = BigDecimal.ZERO;

    @Column(name = "company_id", nullable = false)
    private Long companyId;
}
