package com.erp.common.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Frais d'enlèvement collecté (facturé aux clients) vs coût interne, sur une période donnée.
 * Calculé à partir du modèle Enlevement (montantFixe/coutEnlevement), jamais des écritures comptables.
 */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class FraisEnlevementSummaryDTO {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private BigDecimal collecte;        // sum(qty * tarif TTC) — facturé au client
    private BigDecimal cout;            // sum(qty * coût TTC) — charge interne
    private BigDecimal net;             // collecte TTC - coût TTC
}
