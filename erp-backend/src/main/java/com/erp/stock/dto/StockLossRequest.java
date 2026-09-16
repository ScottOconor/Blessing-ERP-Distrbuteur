package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockLossRequest {
    private LocalDate date;
    private Long warehouseId;
    private Long partnerId;
    private String notes;
    private Long companyId;
    private List<LineRequest> lines;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LineRequest {
        private Long productId;
        private String productCode;
        private BigDecimal quantity;
    }
}
