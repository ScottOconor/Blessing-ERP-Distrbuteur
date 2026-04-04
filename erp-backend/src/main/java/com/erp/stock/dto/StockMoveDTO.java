package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockMoveDTO {
    private Long id;
    private Long pickingId;
    private Long productId;
    private String productCode;
    private String productName;
    private String uomName;
    private BigDecimal qtyDemanded;
    private BigDecimal qtyDone;
    private BigDecimal priceUnit;
    private BigDecimal subtotalValue;
    private Long locationId;
    private String locationName;
    private Long locationDestId;
    private String locationDestName;
    private String state;
    private Long companyId;
    // Stock disponible à la source
    private BigDecimal availableQty;
}
