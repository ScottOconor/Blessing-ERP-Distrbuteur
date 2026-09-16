package com.erp.common.controller;

import lombok.Data;

import java.math.BigDecimal;

/**
 * DTO attendu pour l'import Excel de précomptes.
 */
@Data
public class PrecompteImportDTO {

    private Long partnerId;
    private String partnerName;
    private String typePrecompte; // sale | purchase
    private BigDecimal tauxPrecompte;
    private Long companyId;
}


