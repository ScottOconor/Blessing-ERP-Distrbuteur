package com.erp.common.dto;

import lombok.*;
import java.math.BigDecimal;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PrecompteDTO {
    private Long id;
    private Long partnerId;
    private String partnerName;
    private String typePrecompte;
    private BigDecimal tauxPrecompte;
    private Long companyId;
    private boolean active;
}
