package com.erp.purchases.entity;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.AccountMove;
import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "purchase_invoice_payments", indexes = {
    // Même chose côté achats : findByInvoiceId/sumPostedPaymentsByInvoice à chaque détail de
    // facture fournisseur, sans index sur invoice_id ni company_id jusqu'ici.
    @Index(name = "idx_purchase_invoice_payments_invoice", columnList = "invoice_id"),
    @Index(name = "idx_purchase_invoice_payments_company", columnList = "company_id")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoicePayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Numéro : PAY-F-2024-00001 */
    private String name;

    private LocalDate date;

    @Column(precision = 20, scale = 2)
    private BigDecimal amount;

    private String memo;

    /** draft / posted */
    private String state;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private PurchaseInvoice invoice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "journal_id")
    private AccountJournal journal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    /** Écriture comptable générée */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_move_id")
    private AccountMove accountMove;

    /** Si ce paiement est une compensation par avoir fournisseur : id de l'avoir utilisé */
    @Column(name = "credit_note_id")
    private Long creditNoteId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
