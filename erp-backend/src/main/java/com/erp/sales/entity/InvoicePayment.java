package com.erp.sales.entity;

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
@Table(name = "invoice_payments", indexes = {
    // findByInvoiceIdOrderByDateDesc/sumPostedPaymentsByInvoice tournent à chaque ouverture du
    // détail d'une facture de vente — aucun index jusqu'ici sur invoice_id ni company_id.
    @Index(name = "idx_invoice_payments_invoice", columnList = "invoice_id"),
    @Index(name = "idx_invoice_payments_company", columnList = "company_id")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvoicePayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Numéro : PAY-2024-00001 */
    private String name;

    private LocalDate date;

    @Column(precision = 20, scale = 2)
    private BigDecimal amount;

    private String memo;

    /** draft / posted */
    private String state;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private SalesInvoice invoice;

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

    /** ID de l'avoir utilisé comme crédit (si paiement par compensation — pas de journal) */
    @Column(name = "credit_note_id")
    private Long creditNoteId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
