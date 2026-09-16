package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseReconcileRequest {
    private Long accountMoveId;
    private BigDecimal amount;
    private LocalDate date;
}
