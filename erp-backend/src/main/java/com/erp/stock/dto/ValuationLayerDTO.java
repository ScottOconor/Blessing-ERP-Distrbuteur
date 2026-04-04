package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ValuationLayerDTO {
    private Long id;
    private Long productId;
    private String productCode;
    private String productName;
    private String uomName;
    private Long locationId;
    private String locationName;
    private BigDecimal quantity;
    private BigDecimal unitCost;
    private BigDecimal value;
    private String description;
    private Long companyId;
    private LocalDateTime createdAt;
}
