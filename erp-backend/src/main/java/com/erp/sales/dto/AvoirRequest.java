package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

/**
 * Requête de création d'avoir depuis une facture.
 * avoirType = "integral" → toutes les lignes copiées intégralement
 * avoirType = "partiel"  → seules les lignes/quantités spécifiées
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AvoirRequest {

    /** "integral" ou "partiel" */
    private String avoirType;

    /** Date de l'avoir (si null, date du jour) */
    private LocalDate date;

    /** Lignes à inclure (uniquement pour avoirType = "partiel") */
    private List<LineItem> lines;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LineItem {
        /** ID de la ligne de facture originale */
        private Long lineId;
        /** Quantité à inclure dans l'avoir (≤ quantité originale) */
        private BigDecimal quantite;
    }
}
