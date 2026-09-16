package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AvailableMoveDTO {
    private Long moveId;
    private String moveName;
    private LocalDate moveDate;
    private String moveRef;
    private String journalName;
    private BigDecimal montantTotal;
    private BigDecimal montantLettre;
    private BigDecimal montantDisponible;
}
