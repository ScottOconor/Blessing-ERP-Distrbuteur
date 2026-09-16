package com.erp.stock.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
public class DirectReceptionRequest {

    private Long companyId;
    private Long warehouseId;
    private String supplierName;
    private String reference;
    private LocalDate date;
    private List<LineItem> lines;

    @Data
    public static class LineItem {
        private Long productId;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
    }
}
