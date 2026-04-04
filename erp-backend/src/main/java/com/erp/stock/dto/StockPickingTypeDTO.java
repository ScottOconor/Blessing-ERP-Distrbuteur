package com.erp.stock.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockPickingTypeDTO {
    private Long id;
    private String name;
    private String code;
    private Long warehouseId;
    private String warehouseName;
    private Long defaultLocationSrcId;
    private String defaultLocationSrcName;
    private Long defaultLocationDestId;
    private String defaultLocationDestName;
    private String sequencePrefix;
    private Long companyId;
}
