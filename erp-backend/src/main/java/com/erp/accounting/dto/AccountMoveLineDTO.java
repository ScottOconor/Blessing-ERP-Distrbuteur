package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountMoveLineDTO {
    private Long id;
    private Long moveId;
    private Long accountId;
    private String accountCode;
    private String accountName;
    private Long partnerId;
    private String partnerName;
    private String name;
    private LocalDate date;
    private BigDecimal debit;
    private BigDecimal credit;
    private Long journalId;
    private Long companyId;
    // Analytique
    private Long analyticAccountId;
    private String analyticAccountCode;
    private String analyticAccountName;
    private List<AnalyticDistributionItemDTO> analyticDistributions;
    private List<AnalyticLineDTO> analyticLines;
}
