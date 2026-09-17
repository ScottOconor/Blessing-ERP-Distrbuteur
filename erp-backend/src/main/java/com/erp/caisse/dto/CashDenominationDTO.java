package com.erp.caisse.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CashDenominationDTO {
    private Long id;
    private Long companyId;
    private String label;
    private BigDecimal valeur;
    private boolean active;
}
