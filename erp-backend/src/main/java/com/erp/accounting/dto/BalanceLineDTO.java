package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BalanceLineDTO {
    private String accountCode;
    private String accountName;
    private BigDecimal debit;
    private BigDecimal credit;
    private BigDecimal finalDebit;
    private BigDecimal finalCredit;
}
