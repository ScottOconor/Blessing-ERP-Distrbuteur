package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RistourneDTO {
    private Long id;
    private Long partnerId;
    private String partnerName;
    private Long categoryId;
    private String categoryName;
    private BigDecimal montantFixe;
    private String typeRistourne;
    private Long companyId;
    private boolean active;
}
