package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvoicePaymentDTO {

    private Long id;
    private String name;
    private LocalDate date;
    private BigDecimal amount;
    private String memo;
    private String state;

    private Long invoiceId;
    private String invoiceName;
    private Long journalId;
    private String journalName;
    private Long companyId;
    private Long accountMoveId;
    private String accountMoveName;
    /** Présent si ce règlement est une compensation avec un avoir */
    private Long creditNoteId;
    private String creditNoteName;

    private LocalDateTime createdAt;
}
