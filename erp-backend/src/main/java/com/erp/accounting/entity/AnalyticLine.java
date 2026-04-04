package com.erp.accounting.entity;

import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Ligne analytique générée automatiquement lors de la validation d'une écriture comptable.
 * Chaque AccountMoveLine avec un compte analytique produit une ou plusieurs AnalyticLine.
 */
@Entity
@Table(name = "analytic_lines")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private String name;

    /**
     * Montant : positif = charge/débit, négatif = produit/crédit
     */
    @Column(precision = 20, scale = 2)
    private BigDecimal amount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "analytic_account_id", nullable = false)
    private AnalyticAccount analyticAccount;

    /**
     * Ligne d'écriture comptable source
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "move_line_id")
    private AccountMoveLine moveLine;

    /**
     * Compte général associé (pour le rapport analytique)
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "general_account_id")
    private AccountAccount generalAccount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;
}
