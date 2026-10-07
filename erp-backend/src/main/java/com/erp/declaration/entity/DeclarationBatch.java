package com.erp.declaration.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/** Une génération de factures du module Déclaration : paramètres, résultat et factures créées. */
@Entity
@Table(name = "declaration_batches", indexes = {
    @Index(name = "idx_declaration_batch_company", columnList = "company_id, created_at")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeclarationBatch {

    public static final String RUNNING = "RUNNING";
    public static final String DONE = "DONE";
    public static final String FAILED = "FAILED";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "created_by", length = 100)
    private String createdBy;

    @Column(name = "date_from")
    private LocalDate dateFrom;

    @Column(name = "date_to")
    private LocalDate dateTo;

    @Column(name = "min_amount", precision = 18, scale = 2)
    private BigDecimal minAmount;

    @Column(name = "max_amount", precision = 18, scale = 2)
    private BigDecimal maxAmount;

    @Column(name = "requested_total", precision = 18, scale = 2)
    private BigDecimal requestedTotal;

    @Column(name = "generated_total", precision = 18, scale = 2)
    private BigDecimal generatedTotal;

    @Column(name = "invoice_count")
    private Integer invoiceCount;

    @Column(length = 255)
    private String notes;

    /** RUNNING pendant la génération en arrière-plan, puis DONE ou FAILED (null = ancienne génération, terminée). */
    @Column(length = 20)
    private String status;

    /** Nombre de factures déjà créées, validées et réglées */
    @Column(name = "processed_count")
    private Integer processedCount;

    @Column(name = "error_message", length = 1000)
    private String errorMessage;

    /** Factures créées, dans l'ordre de génération (chronologique). */
    @JsonIgnore
    @Builder.Default
    @ElementCollection
    @CollectionTable(name = "declaration_batch_invoices", joinColumns = @JoinColumn(name = "batch_id"))
    @OrderColumn(name = "position")
    @Column(name = "invoice_id", nullable = false)
    private List<Long> invoiceIds = new ArrayList<>();
}
