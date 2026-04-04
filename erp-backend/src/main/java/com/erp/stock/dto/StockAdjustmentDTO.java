package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockAdjustmentDTO {
    private Long id;
    private Long productId;
    private String productCode;
    private String productName;
    private String uomName;
    private Long locationId;
    private String locationName;
    private BigDecimal qtyBefore;
    private BigDecimal qtyAfter;
    private BigDecimal qtyDiff;
    private BigDecimal unitCost;
    private BigDecimal valueDiff;
    private String notes;
    private Long accountMoveId;
    private String accountMoveName;
    private Long companyId;
    private LocalDateTime createdAt;
}
