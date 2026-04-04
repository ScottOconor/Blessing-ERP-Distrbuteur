package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticDistributionItemDTO {
    private Long id;
    private Long analyticAccountId;
    private String analyticAccountCode;
    private String analyticAccountName;
    private BigDecimal amount;
}
