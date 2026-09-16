package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockPickingRequest {

    private Long pickingTypeId;
    private Long locationId;
    private Long locationDestId;
    private Long partnerId;
    private String partnerName;
    private LocalDate scheduledDate;
    private String origin;
    private String notes;
    private Long agencyId;
    private Long remoteAgencyId;
    private Long companyId;
    private List<MoveRequest> moves;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class MoveRequest {
        private Long productId;
        private BigDecimal qtyDemanded;
        private BigDecimal qtyDone;
        private BigDecimal priceUnit;
        private Long locationId;
        private Long locationDestId;
    }
}
