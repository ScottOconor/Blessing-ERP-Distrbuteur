package com.erp.stock.dto;

import lombok.*;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class WarehouseDTO {
    private Long id;
    private String name;
    private String code;
    private Long stockLocationId;
    private String stockLocationName;
    private Long stockJournalId;
    private String stockJournalName;
    /** Entrepôt Dépôt Achat — zone de transit des marchandises achetées en attente de réception physique */
    private Long depotAchatWarehouseId;
    private String depotAchatWarehouseName;
    /** Entrepôt Avaries — reçoit les reliquats lors de la réception */
    private Long avarWarehouseId;
    private String avarWarehouseName;
    private Long companyId;
    private boolean active;
    private List<StockLocationDTO> locations;
}
