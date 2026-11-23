package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Cession de stock : sortie de marchandises du stock vers un tiers, calquée sur les Trous &amp;
 * Casses (StockLoss). Différence : les comptes de l'écriture comptable (débit et crédit) sont
 * choisis par l'utilisateur au moment de l'opération, au lieu d'être figés (659300/603100).
 */
@Entity
@Table(name = "stock_cessions")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockCession {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "warehouse_id", nullable = false)
    private Long warehouseId;

    @Column(name = "partner_id")
    private Long partnerId;

    private String notes;

    /** Compte débité de l'écriture (choisi à l'opération). */
    @Column(name = "debit_account_code", nullable = false)
    private String debitAccountCode;

    /** Compte crédité de l'écriture (choisi à l'opération). */
    @Column(name = "credit_account_code", nullable = false)
    private String creditAccountCode;

    @Column(name = "total_value", precision = 20, scale = 2)
    private BigDecimal totalValue;

    @Column(name = "account_move_id")
    private Long accountMoveId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    @OneToMany(mappedBy = "stockCession", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StockCessionLine> lines = new ArrayList<>();

    private String createdBy;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
