package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ProductDTO {
    private Long id;
    private String defaultCode;
    private String barcode;
    private String name;
    private Long categoryId;
    private String categoryName;
    private String uomName;
    private Long unitOfMeasureId;
    private BigDecimal standardPrice;
    private BigDecimal salePrice;
    private BigDecimal minPrice;
    private String type;
    private String stockAccountCode;
    private String description;
    private boolean active;
    private boolean exemptTva;
    private boolean exemptTvaAchat;
    private Long companyId;
    // Stock (calculé)
    private BigDecimal qtyOnHand;
    private BigDecimal qtyReserved;
    private BigDecimal qtyAvailable;
    // CMUP (lecture seule) et valeur du stock au prix d'achat
    private BigDecimal cmup;
    private BigDecimal stockValue;
    private boolean stockValueEstablished;
    private boolean hasPhoto;
    private LocalDateTime createdAt;
}
