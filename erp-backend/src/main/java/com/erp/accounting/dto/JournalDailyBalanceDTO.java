package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class JournalDailyBalanceDTO {
    private Long id;
    private Long journalId;
    private String journalName;
    private String journalCode;
    private Long companyId;
    private LocalDate date;
    private BigDecimal openingBalance;
    private BigDecimal totalDebit;
    private BigDecimal totalCredit;
    private BigDecimal closingBalance;
}
