package com.erp.accounting.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Ventilation analytique d'une ligne d'écriture (en brouillon ou validée).
 * Stocke la répartition d'un montant sur plusieurs comptes analytiques.
 * Exemple : Carburant 10 000 → Directrice 6 000 + Employés 4 000
 */
@Entity
@Table(name = "analytic_distribution_items")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticDistributionItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "move_line_id", nullable = false)
    private AccountMoveLine moveLine;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "analytic_account_id", nullable = false)
    private AnalyticAccount analyticAccount;

    @Column(precision = 20, scale = 2, nullable = false)
    private BigDecimal amount;
}
