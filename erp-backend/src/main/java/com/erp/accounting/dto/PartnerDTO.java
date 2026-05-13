package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;

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

    private BigDecimal tauxRistourne;
    private BigDecimal tauxPrecompte;
    private BigDecimal creditLimit;
    private String receivableAccountCode;
    private boolean exemptTaxeGuinness;
}
