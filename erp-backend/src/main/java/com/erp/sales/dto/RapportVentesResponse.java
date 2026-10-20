package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RapportVentesResponse {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private List<RapportVentesLine> lines;

    private int nbFactures;
    private int nbAvoirs;

    // Total général
    private BigDecimal totalHT;
    private BigDecimal totalTTC;
    /** Montant réellement encaissé (paiements validés, hors imputations d'avoirs) */
    private BigDecimal montantEncaisse;
    private BigDecimal qteConsigne;
    private BigDecimal qteDeconsigne;
    private BigDecimal totalColis;
    private BigDecimal totalCasiers;
    private BigDecimal totalPET;
}
