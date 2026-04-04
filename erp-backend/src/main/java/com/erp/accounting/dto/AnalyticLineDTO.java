package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticLineDTO {
    private Long id;
    private LocalDate date;
    private String name;
    private BigDecimal amount;
    private Long analyticAccountId;
    private String analyticAccountCode;
    private String analyticAccountName;
    private Long moveLineId;
    private Long generalAccountId;
    private String generalAccountCode;
    private String generalAccountName;
    private Long companyId;
}
