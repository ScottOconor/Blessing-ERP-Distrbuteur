package com.erp.stock.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockCessionRequest {
    private LocalDate date;
    private Long warehouseId;
    private Long partnerId;
    private String notes;
    /** Compte débité choisi pour l'écriture de cession. */
    private String debitAccountCode;
    /** Compte crédité choisi pour l'écriture de cession. */
    private String creditAccountCode;
    private Long companyId;
    private List<LineRequest> lines;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LineRequest {
        private Long productId;
        private String productCode;
        private BigDecimal quantity;
    }
}
