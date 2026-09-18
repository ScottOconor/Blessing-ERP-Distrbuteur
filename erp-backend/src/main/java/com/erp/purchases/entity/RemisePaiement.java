package com.erp.purchases.entity;

import com.erp.accounting.entity.AccountMove;
import com.erp.accounting.entity.Partner;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Règlement d'une remise fournisseur.
 */
@Entity
@Table(name = "remise_paiements", indexes = {
    // Même besoin côté achats que RistournePaiement (dashboard + snapshot horaire).
    @Index(name = "idx_remise_paiements_company_state_date", columnList = "company_id, state, date"),
    @Index(name = "idx_remise_paiements_partner",            columnList = "partner_id, company_id")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RemisePaiement {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Référence : RMS-2024-00001 */
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id", nullable = false)
    private Partner partner;

    private LocalDate date;

    /** Date effective du passage à l'état "done" (avoir fournisseur généré) */
    @Column(name = "date_paiement")
    private LocalDate datePaiement;

    /** draft / confirmed / done / cancelled */
    @Builder.Default
    private String state = "draft";

    @Column(name = "total_amount", precision = 20, scale = 2)
    private BigDecimal totalAmount;

    /** Facture fournisseur avoir générée */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private PurchaseInvoice invoice;

    /** Écriture comptable associée */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_move_id")
    private AccountMove accountMove;

    /** ID de la facture de remise générée (FA-xxx) */
    @Column(name = "generated_invoice_id")
    private Long generatedInvoiceId;

    /** Nom de la facture de remise générée */
    @Column(name = "generated_invoice_name")
    private String generatedInvoiceName;

    @OneToMany(mappedBy = "paiement", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<RemisePaiementLine> lines = new ArrayList<>();

    /** Type de génération : brasserie / guinness */
    @Column(name = "type_remise")
    private String typeRemise;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    private String notes;

    @CreationTimestamp
    private LocalDateTime createdAt;

    /** Alimente le snapshot incrémental (SnapshotService) : ne renvoyer au Hub que les paiements
     *  modifiés depuis le dernier envoi, au lieu de la fenêtre entière à chaque passage horaire. */
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
