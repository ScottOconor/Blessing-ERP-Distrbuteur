package com.erp.accounting.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PartnerDTO {
    private Long id;
    private String ref;
    private String name;
    private String type;
    private String phone;
    private String email;
    private String address;
    private Long companyId;
    private String companyName;

    // Paramètres commerciaux
    private java.math.BigDecimal tauxRistourne;
    private java.math.BigDecimal tauxPrecompte;
    private java.math.BigDecimal creditLimit;
    private String receivableAccountCode;
}
