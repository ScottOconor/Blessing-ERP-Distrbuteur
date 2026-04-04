package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "stock_adjustments")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockAdjustment {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "location_id", nullable = false)
    private Long locationId;

    /** Quantité avant ajustement */
    @Column(precision = 20, scale = 4)
    private BigDecimal qtyBefore;

    /** Quantité après ajustement */
    @Column(precision = 20, scale = 4)
    private BigDecimal qtyAfter;

    /** Différence (qtyAfter - qtyBefore) */
    @Column(precision = 20, scale = 4)
    private BigDecimal qtyDiff;

    /** CMUP au moment de l'ajustement */
    @Column(precision = 20, scale = 4)
    private BigDecimal unitCost;

    /** Valeur de l'écart (qtyDiff × unitCost) */
    @Column(precision = 20, scale = 2)
    private BigDecimal valueDiff;

    private String notes;

    @Column(name = "account_move_id")
    private Long accountMoveId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
