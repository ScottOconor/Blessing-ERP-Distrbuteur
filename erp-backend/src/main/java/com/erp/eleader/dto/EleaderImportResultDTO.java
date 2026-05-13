package com.erp.eleader.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EleaderImportResultDTO {
    private boolean success;
    private String message;
    private String eleaderReference;
    private String clientName;
    private Long salesOrderId;
    private String salesOrderName;
    private Long importLogId;
    /** Avertissement non-bloquant (client trouvé approximativement, produit inconnu, etc.) */
    private String warning;
}
