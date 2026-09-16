package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReconcileRequest {
    private Long accountMoveId;
    private BigDecimal amount;
    private LocalDate date;
}
