package com.erp.caisse.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RapportConsolideDTO {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private List<CaisseSessionDTO> sessions;

    private int totalSessions;
    private BigDecimal grandTotalEntrees;
    private BigDecimal grandTotalSorties;
    private BigDecimal grandTotalEcarts;
}
