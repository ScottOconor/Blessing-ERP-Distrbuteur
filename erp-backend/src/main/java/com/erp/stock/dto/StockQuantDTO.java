package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockQuantDTO {
    private Long id;
    private Long productId;
    private String productCode;
    private String productName;
    private String uomName;
    private Long locationId;
    private String locationName;
    private String locationCompleteName;
    private BigDecimal quantity;
    private BigDecimal reservedQuantity;
    private BigDecimal availableQuantity;
    // Prix d'achat de la fiche (standardPrice), valeur au prix d'achat (totalValue), CMUP à part
    private BigDecimal standardPrice;
    private BigDecimal cmup;
    private BigDecimal totalValue;
    private Long companyId;
    private Long categoryId;
    private String categoryName;
}
