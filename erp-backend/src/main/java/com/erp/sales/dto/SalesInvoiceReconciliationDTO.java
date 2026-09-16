package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesInvoiceReconciliationDTO {
    private Long id;
    private Long invoiceId;
    private String invoiceName;
    private Long accountMoveId;
    private String accountMoveName;
    private String accountMoveRef;
    private LocalDate accountMoveDate;
    private String journalName;
    private BigDecimal amount;
    private LocalDate date;
    private String createdBy;
    private LocalDateTime createdAt;
}
