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
    private Long companyId;
    private boolean active;
    private List<StockLocationDTO> locations;
}
