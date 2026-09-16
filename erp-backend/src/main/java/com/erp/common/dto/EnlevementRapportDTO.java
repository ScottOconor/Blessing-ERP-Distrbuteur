package com.erp.common.dto;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class EnlevementRapportDTO {

    private Long partnerId;
    private String partnerName;
    private List<Line> lines;
    /** Lignes par article individuel */
    private List<ArticleLine> articleLines;
    private BigDecimal totalAmount;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class Line {
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class ArticleLine {
        private String productCode;
        private String productName;
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
    }
}
