package com.erp.config.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class CompanyDTO {
    private Long id;
    private String name;
    private String sigle;
    private String rccm;
    private String nif;
    private String adresse;
    private String telephone;
    private String email;
    private String logoUrl;
    private Long groupId;
    private String groupName;
    private boolean active;
}
