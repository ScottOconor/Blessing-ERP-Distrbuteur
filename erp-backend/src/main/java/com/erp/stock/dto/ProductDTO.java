package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ProductDTO {
    private Long id;
    private String defaultCode;
    private String name;
    private Long categoryId;
    private String categoryName;
    private String uomName;
    private BigDecimal standardPrice;
    private BigDecimal salePrice;
    private String type;
    private String stockAccountCode;
    private String cogsAccountCode;
    private String description;
    private boolean active;
    private Long companyId;
    // Stock disponible (calculé)
    private BigDecimal qtyOnHand;
    private LocalDateTime createdAt;
}
