package com.erp.config.dto;

import lombok.*;

import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class CompanyGroupDTO {
    private Long id;
    private String name;
    private String code;
    private String description;
    private boolean active;
    private List<CompanyDTO> companies;
}
