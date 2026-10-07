package com.erp.common.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Frais d'enlèvement collecté (facturé aux clients) vs coût interne, sur une période donnée.
 * Collecté = solde du compte 701500 ; coût = total du Rapport des enlèvements (factures fournisseur).
 */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class FraisEnlevementSummaryDTO {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private BigDecimal collecte;        // solde créditeur net du compte 701500
    private BigDecimal cout;            // total du Rapport des enlèvements (qty achetée × coût)
    private BigDecimal net;             // collecte facturée - coût importé
}
