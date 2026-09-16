package com.erp.stock.dto;

import lombok.*;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockLocationDTO {
    private Long id;
    private String name;
    private String completeName;
    private Long parentId;
    private String parentName;
    private String usage;
    private Long warehouseId;
    private String warehouseName;
    private Long companyId;
    private boolean active;
    private List<StockLocationDTO> children;
}
