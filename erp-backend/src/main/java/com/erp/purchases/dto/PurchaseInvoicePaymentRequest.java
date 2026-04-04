package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoicePaymentRequest {

    private Long invoiceId;
    private Long journalId;
    private LocalDate date;
    private BigDecimal amount;
    private String memo;
}
