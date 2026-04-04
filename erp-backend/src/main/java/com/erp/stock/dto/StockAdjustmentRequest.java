package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockAdjustmentRequest {
    private Long productId;
    private Long locationId;
    private BigDecimal newQty;   // quantité réelle comptée
    private String notes;
    private Long companyId;
}
