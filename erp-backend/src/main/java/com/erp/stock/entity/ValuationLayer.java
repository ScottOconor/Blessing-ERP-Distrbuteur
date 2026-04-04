package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "valuation_layers")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ValuationLayer {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "move_id")
    private Long moveId;

    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal unitCost;

    @Column(precision = 20, scale = 2, nullable = false)
    private BigDecimal value;

    @Column(name = "location_id")
    private Long locationId;

    private String description;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
