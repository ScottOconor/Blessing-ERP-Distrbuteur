package com.erp.purchases.dto;

import lombok.*;
import java.math.BigDecimal;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RemiseDTO {
    private Long id;
    private Long partnerId;
    private String partnerName;
    private Long categoryId;
    private String categoryName;
    private BigDecimal montantFixe;
    private String typeRemise;
    private Long companyId;
    private boolean active;
}
