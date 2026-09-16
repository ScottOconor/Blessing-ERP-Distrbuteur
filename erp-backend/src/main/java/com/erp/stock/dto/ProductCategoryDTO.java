package com.erp.stock.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ProductCategoryDTO {
    private Long id;
    private String name;
    private String code;
    private String stockAccountCode;
    private String stockInAccountCode;
    private Long parentId;
    private String parentName;
    private Long companyId;
}
