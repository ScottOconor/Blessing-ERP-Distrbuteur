package com.erp.purchases.entity;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.AccountMove;
import com.erp.accounting.entity.Partner;
import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "purchase_invoices")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Numéro : FAF-2024-00001 ou AVF-2024-00001 */
    private String name;

    private LocalDate date;
    private LocalDate dateEcheance;

    /** draft / posted / paid / cancelled */
    private String state;

    /** invoice (facture fournisseur) / credit_note (avoir fournisseur) */
    private String type;

    /** Facture d'origine (pour les avoirs fournisseurs) */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "original_invoice_id")
    private PurchaseInvoice originalInvoice;

    private String notes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id")
    private Partner partner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "journal_id")
    private AccountJournal journal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    /** Commande d'achat source (nullable si facture directe) */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "purchase_order_id")
    private PurchaseOrder purchaseOrder;

    /** Écriture comptable générée lors de la validation */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_move_id")
    private AccountMove accountMove;

    /** Bon de réception (StockPicking incoming vers Dépôt Achat) créé lors de la validation */
    @Column(name = "picking_id")
    private Long pickingId;

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<PurchaseInvoiceLine> lines = new ArrayList<>();

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
    @Builder.Default
    private List<PurchaseInvoicePayment> payments = new ArrayList<>();

    @Column(precision = 20, scale = 2)
    private BigDecimal totalHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal totalTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal totalTTC;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantPaye;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantDu;

    // ===== Champs remise / précompte =====

    /** Total remise fournisseur TTC déduite sur cette facture */
    @Column(name = "total_remise", precision = 20, scale = 2)
    private BigDecimal totalRemise;

    /** Total précompte (retenue à la source fournisseur) */
    @Column(name = "total_precompte", precision = 20, scale = 2)
    private BigDecimal totalPrecompte;

    /** Total liquide nu = base ristourne/remise */
    @Column(name = "total_liquide_nu", precision = 20, scale = 2)
    private BigDecimal totalLiquideNu;

    /** Net à payer = TTC - précompte (remise exclue de la facture) */
    @Column(name = "net_a_payer", precision = 20, scale = 2)
    private BigDecimal netAPayer;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
