package com.erp.sales.entity;

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
@Table(name = "sales_invoices", indexes = {
    @Index(name = "idx_sales_invoices_company_type",    columnList = "company_id, type"),
    @Index(name = "idx_sales_invoices_partner_company", columnList = "partner_id, company_id")
})
@EntityListeners(AuditingEntityListener.class)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Numéro : FAC-2024-00001 ou AV-2024-00001 */
    private String name;

    private LocalDate date;
    private LocalDate dateEcheance;

    /** draft / posted / paid / cancelled */
    private String state;

    /** Verrou optimiste — empêche une double validation concurrente (deux requêtes passant
     *  toutes les deux le contrôle state=="draft" avant de générer l'écriture comptable). */
    @Version
    private Long version;

    /** invoice (facture) / credit_note (avoir) */
    private String type;

    /** Facture d'origine (pour les avoirs) */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "original_invoice_id")
    private SalesInvoice originalInvoice;

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

    /** Bon de commande source (nullable si facture directe) */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sales_order_id")
    private SalesOrder salesOrder;

    /** Écriture comptable générée lors de la validation */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_move_id")
    private AccountMove accountMove;

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<SalesInvoiceLine> lines = new ArrayList<>();

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
    @Builder.Default
    private List<InvoicePayment> payments = new ArrayList<>();

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

    // ===== Champs ristourne / précompte / enlèvement =====

    /** Total ristourne TTC déduit sur cette facture */
    @Column(name = "total_ristourne", precision = 20, scale = 2)
    private BigDecimal totalRistourne;

    /** Total frais d'enlèvement TTC (HT + TVA) */
    @Column(name = "frais_enlevement_ttc", precision = 20, scale = 2)
    private BigDecimal fraisEnlevementTTC;

    /** Total frais d'enlèvement HT */
    @Column(name = "frais_enlevement_ht", precision = 20, scale = 2)
    private BigDecimal fraisEnlevementHT;

    /** Total TVA sur les frais d'enlèvement */
    @Column(name = "frais_enlevement_tva", precision = 20, scale = 2)
    private BigDecimal fraisEnlevementTVA;

    /** Total précompte (retenue à la source) */
    @Column(name = "total_precompte", precision = 20, scale = 2)
    private BigDecimal totalPrecompte;

    /**
     * Total liquide nu = somme(price_subtotal + precompte pour les non-consignes) + TVA
     * Base de calcul de la ristourne
     */
    @Column(name = "total_liquide_nu", precision = 20, scale = 2)
    private BigDecimal totalLiquideNu;

    /** Net à payer = TTC - ristourne + enlèvement */
    @Column(name = "net_a_payer", precision = 20, scale = 2)
    private BigDecimal netAPayer;

    /** Total taxe Guinness (300 fixe par ligne de catégorie Guinness, hors exempté) */
    @Column(name = "total_guinness_taxe", precision = 20, scale = 2)
    private BigDecimal totalGuinessTaxe;

    /** Total rabais HT accordés sur cette facture (= Σ totalRabaisLigne) */
    @Column(name = "total_rabais", precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal totalRabais = BigDecimal.ZERO;

    /** Total rabais TTC accordés, déduit du net à payer */
    @Column(name = "total_rabais_ttc", precision = 20, scale = 2)
    @Builder.Default
    private BigDecimal totalRabaisTTC = BigDecimal.ZERO;

    /** Entrepôt de départ pour les mouvements de stock (obligatoire sur les factures) */
    @Column(name = "warehouse_id")
    private Long warehouseId;

    /** Vendeur ayant réalisé la vente (nullable — facultatif) */
    @Column(name = "seller_id")
    private Long sellerId;

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
}
