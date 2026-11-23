package com.erp.stock.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockCessionDTO {
    private Long id;
    private String name;
    private LocalDate date;
    private Long warehouseId;
    private String warehouseName;
    private Long partnerId;
    private String partnerName;
    private String notes;
    private String debitAccountCode;
    private String debitAccountName;
    private String creditAccountCode;
    private String creditAccountName;
    private BigDecimal totalValue;
    private Long accountMoveId;
    private String accountMoveName;
    private Long companyId;
    private List<LineDTO> lines;
    private String createdBy;
    private LocalDateTime createdAt;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LineDTO {
        private Long id;
        private Long productId;
        private String productCode;
        private String description;
        private BigDecimal quantity;
        private BigDecimal unitCost;
        private BigDecimal montantTotal;
    }
}
