package com.erp.common.dto;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class EnlevementDTO {
    private Long id;
    private Long categoryId;
    private String categoryName;
    private BigDecimal montantFixe;
    private BigDecimal coutEnlevement;
    private Long companyId;
    private boolean active;
    private List<EnlevementClientDTO> clients;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class EnlevementClientDTO {
        private Long id;
        private Long partnerId;
        private String partnerName;
        private BigDecimal montant;
        private String supplementAccountCode;
    }
}
