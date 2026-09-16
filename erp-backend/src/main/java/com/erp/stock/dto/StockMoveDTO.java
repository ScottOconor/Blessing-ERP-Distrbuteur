package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockMoveDTO {
    private Long id;
    private Long pickingId;
    private String pickingRef;
    private Long productId;
    private String productCode;
    private String productName;
    private String uomName;
    private Long categoryId;
    private String categoryName;
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
    // Contexte du bon de transfert parent
    private String pickingTypeCode;   // incoming / outgoing / internal
    private LocalDateTime dateDone;
    private String partnerName;
    // Direction réelle calculée depuis les emplacements (fiable même pour déconsignes)
    // "incoming" | "outgoing" | "internal"
    private String moveDirection;
    // Stock disponible à la source
    private BigDecimal availableQty;
}
