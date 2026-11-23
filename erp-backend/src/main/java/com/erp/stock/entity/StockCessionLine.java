package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "stock_cession_lines")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockCessionLine {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stock_cession_id", nullable = false)
    private StockCession stockCession;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_code")
    private String productCode;

    private String description;

    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "unit_cost", precision = 20, scale = 4)
    private BigDecimal unitCost;

    @Column(name = "montant_total", precision = 20, scale = 2)
    private BigDecimal montantTotal;
}
