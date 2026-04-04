package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PartnerBalanceLineDTO {
    private String partnerRef;
    private String accountNumber;
    private String partnerName;
    private BigDecimal initialDebit;
    private BigDecimal initialCredit;
    private BigDecimal debit;
    private BigDecimal credit;
    private BigDecimal finalDebit;
    private BigDecimal finalCredit;
    /**
     * type: customer / supplier
     */
    private String type;
}
