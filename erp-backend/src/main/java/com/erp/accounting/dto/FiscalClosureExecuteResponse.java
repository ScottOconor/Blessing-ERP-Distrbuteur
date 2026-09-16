package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class FiscalClosureExecuteResponse {
    private Long moveId;
    private String moveName;
    private BigDecimal netResult;
    private LocalDate lockDate;
}
