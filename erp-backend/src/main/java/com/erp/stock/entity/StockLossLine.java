package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "stock_loss_lines")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockLossLine {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stock_loss_id", nullable = false)
    private StockLoss stockLoss;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_code")
    private String productCode;

    private String description;

    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal quantity;

    /** CMUP au moment de la casse */
    @Column(name = "unit_cost", precision = 20, scale = 4)
    private BigDecimal unitCost;

    @Column(name = "montant_total", precision = 20, scale = 2)
    private BigDecimal montantTotal;
}
