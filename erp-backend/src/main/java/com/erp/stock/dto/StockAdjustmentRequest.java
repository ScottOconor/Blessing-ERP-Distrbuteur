package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockAdjustmentRequest {
    private Long productId;
    private Long locationId;
    private BigDecimal newQty;   // quantité réelle comptée
    private String notes;
    private Long companyId;
    private LocalDate date;
}
