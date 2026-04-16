package com.erp.accounting.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Solde journalier d'un journal.
 * Le solde de clôture d'un jour J devient le solde d'ouverture du jour J+1.
 */
@Entity
@Table(name = "journal_daily_balances",
       uniqueConstraints = @UniqueConstraint(columnNames = {"journal_id", "date"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class JournalDailyBalance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "journal_id", nullable = false)
    private Long journalId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Column(nullable = false)
    private LocalDate date;

    /** Solde en début de journée (=solde clôture J-1) */
    @Column(name = "opening_balance", precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal openingBalance = BigDecimal.ZERO;

    /** Somme des débits de la journée */
    @Column(name = "total_debit", precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal totalDebit = BigDecimal.ZERO;

    /** Somme des crédits de la journée */
    @Column(name = "total_credit", precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal totalCredit = BigDecimal.ZERO;

    /** Solde de clôture = openingBalance + totalDebit - totalCredit */
    @Column(name = "closing_balance", precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal closingBalance = BigDecimal.ZERO;
}
