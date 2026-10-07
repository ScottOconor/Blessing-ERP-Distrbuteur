package com.erp.declaration.dto;

import com.erp.sales.dto.SalesInvoiceDTO;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

/** Génération passée ; {@code invoices} n'est renseigné que pour le détail d'une génération. */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeclarationBatchDTO {
    private Long id;
    private LocalDateTime createdAt;
    private String createdBy;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private BigDecimal minAmount;
    private BigDecimal maxAmount;
    private BigDecimal requestedTotal;
    private BigDecimal generatedTotal;
    private Integer invoiceCount;
    private String notes;
    /** RUNNING / DONE / FAILED */
    private String status;
    private Integer processedCount;
    private String errorMessage;
    private List<SalesInvoiceDTO> invoices;
}
