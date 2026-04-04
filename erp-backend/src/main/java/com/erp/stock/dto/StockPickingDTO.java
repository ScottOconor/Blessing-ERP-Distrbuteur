package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockPickingDTO {
    private Long id;
    private String name;
    private Long pickingTypeId;
    private String pickingTypeName;
    private String pickingTypeCode;
    private Long locationId;
    private String locationName;
    private Long locationDestId;
    private String locationDestName;
    private Long partnerId;
    private String partnerName;
    private String state;
    private LocalDate scheduledDate;
    private LocalDateTime dateDone;
    private String origin;
    private String notes;
    private Long accountMoveId;
    private String accountMoveName;
    private Long agencyId;
    private String agencyName;
    private Long companyId;
    private List<StockMoveDTO> moves;
    private BigDecimal totalValue;
    private LocalDateTime createdAt;
}
