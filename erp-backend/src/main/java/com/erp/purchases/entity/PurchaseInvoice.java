package com.erp.purchases.entity;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.AccountMove;
import com.erp.accounting.entity.Partner;
import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "purchase_invoices", indexes = {
    @Index(name = "idx_purchase_invoices_company_type",    columnList = "company_id, type"),
    @Index(name = "idx_purchase_invoices_partner_company", columnList = "partner_id, company_id")
})
@EntityListeners(AuditingEntityListener.class)
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

    /** Verrou optimiste — empêche une double validation concurrente (deux requêtes passant
     *  toutes les deux le contrôle state=="draft" avant de générer l'écriture comptable). */
    @Version
    private Long version;

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

    /** Total des rabais/RRR obtenus des fournisseurs (HT) sur cette facture */
    @Column(name = "total_rabais_ht", precision = 20, scale = 2)
    private BigDecimal totalRabaisHT;

    /** Total des rabais/RRR obtenus (TTC) — déduit du net à payer (comme en ventes) */
    @Column(name = "total_rabais_ttc", precision = 20, scale = 2)
    private BigDecimal totalRabaisTTC;

    /** Entrepôt de réception (obligatoire sur les factures fournisseurs) */
    @Column(name = "warehouse_id")
    private Long warehouseId;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // ── Traçabilité des actions métier ─────────────────────────────────────
    @Column(name = "confirmed_by")
    private String confirmedBy;

    @Column(name = "confirmed_at")
    private LocalDateTime confirmedAt;

    @Column(name = "cancelled_by")
    private String cancelledBy;

    @Column(name = "cancelled_at")
    private LocalDateTime cancelledAt;

    /** Non null = les écritures comptables de cette facture (+ écriture de stock pour les avoirs)
     *  ont été extournées via reverseInvoiceEntries(). Ne dit rien des paiements individuels,
     *  extournables séparément — voir PurchaseInvoicePayment.state="reversed". */
    @Column(name = "entries_reversed_at")
    private LocalDateTime entriesReversedAt;
}
