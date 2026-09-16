package com.erp.purchases.entity;

import com.erp.accounting.entity.AccountMove;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Lettrage : rattachement d'une facture d'achat à une écriture de paiement existante.
 * Aucune nouvelle écriture n'est créée — seul ce lien est enregistré.
 */
@Entity
@Table(name = "purchase_invoice_reconciliations")
@EntityListeners(AuditingEntityListener.class)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoiceReconciliation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id", nullable = false)
    private PurchaseInvoice invoice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_move_id", nullable = false)
    private AccountMove accountMove;

    @Column(precision = 20, scale = 2, nullable = false)
    private BigDecimal amount;

    private LocalDate date;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;
}
