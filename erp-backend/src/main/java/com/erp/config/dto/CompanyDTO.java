package com.erp.config.dto;

import lombok.*;

import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class CompanyDTO {
    private Long   id;
    private String name;
    private String sigle;
    private String rccm;
    private String nif;
    private String adresse;
    private String telephone;
    private String email;
    private String logoUrl;
    private byte[] logoData;
    private String logoContentType;
    private String appName;
    private boolean hasAppLogo;
    private boolean active;
    private Integer fiscalYearStartMonth;
    private LocalDate lockDate;
}
