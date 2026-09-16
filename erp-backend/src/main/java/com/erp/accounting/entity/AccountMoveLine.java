package com.erp.accounting.entity;

import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "account_move_lines", indexes = {
    @Index(name = "idx_account_move_lines_move_id",         columnList = "move_id"),
    @Index(name = "idx_account_move_lines_partner_company", columnList = "partner_id, company_id")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountMoveLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "move_id")
    private AccountMove move;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private AccountAccount account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id")
    private Partner partner;

    /**
     * Libellé de la ligne
     */
    private String name;

    private LocalDate date;

    @Column(precision = 20, scale = 2)
    private BigDecimal debit;

    @Column(precision = 20, scale = 2)
    private BigDecimal credit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "journal_id")
    private AccountJournal journal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    /**
     * Compte analytique principal associé à cette ligne
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "analytic_account_id")
    private AnalyticAccount analyticAccount;

    /**
     * Ventilation analytique saisie (brouillon ou validée) — ex : 60% Directrice, 40% Employés
     */
    @OneToMany(mappedBy = "moveLine", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private java.util.List<AnalyticDistributionItem> analyticDistributions = new java.util.ArrayList<>();

    /**
     * Lignes analytiques officielles générées lors de la validation
     */
    @OneToMany(mappedBy = "moveLine", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private java.util.List<AnalyticLine> analyticLines = new java.util.ArrayList<>();
}
