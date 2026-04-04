package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BalanceLine6ColsDTO {
    private String accountCode;
    private String accountName;
    private BigDecimal initialDebit;
    private BigDecimal initialCredit;
    private BigDecimal debit;
    private BigDecimal credit;
    private BigDecimal finalDebit;
    private BigDecimal finalCredit;
}
