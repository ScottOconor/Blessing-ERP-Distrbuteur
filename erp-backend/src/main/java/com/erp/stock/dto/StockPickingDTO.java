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
    private Long sourceWarehouseId;
    private String sourceWarehouseName;
    private Long destWarehouseId;
    private String destWarehouseName;
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
    private Long remoteAgencyId;
    private String remoteAgencyName;
    private Long companyId;
    private String companyName;
    private Long linkedPickingId;
    private String linkedPickingName;
    private boolean transferReception;
    private List<StockMoveDTO> moves;
    private BigDecimal totalValue;
    private LocalDateTime createdAt;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime updatedAt;

    /** Non-null si la réception a été validée localement mais que la notification de l'agence
     *  expéditrice (pour marquer son expédition comme reçue) a échoué — réception quand même
     *  actée ici, mais l'expéditeur doit être informé manuellement ou la connectivité corrigée. */
    private String senderNotifyWarning;
}
