package com.erp.stock.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class UnitOfMeasureDTO {
    private Long id;
    private String name;
    private String code;
    private Long companyId;
}
