package com.erp.accounting.dto;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticAccountDTO {
    private Long id;
    private String code;
    private String name;
    private String description;
    private Long parentId;
    private String parentName;
    private Long companyId;
    private boolean active;
    private List<AnalyticAccountDTO> children;
}
