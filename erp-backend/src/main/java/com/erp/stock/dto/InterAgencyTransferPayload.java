package com.erp.stock.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

/** Payload envoyé par le spoke émetteur au spoke récepteur lors d'une expédition inter-agences. */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class InterAgencyTransferPayload {

    /** Référence de l'expédition côté émetteur (ex: IC/00001) */
    private String expeditionRef;

    /** Nom de l'agence émettrice */
    private String senderAgencyName;

    /** Code unique de l'agence émettrice (pour la retrouver dans RemoteAgency) */
    private String senderAgencyCode;

    private LocalDate scheduledDate;
    private String    notes;
    private String    origin;

    private List<Line> lines;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class Line {
        /** Code article — utilisé pour matcher le produit côté récepteur */
        private String     productCode;
        private String     productName;
        private String     uomName;
        private BigDecimal qtyExpedied;
        private BigDecimal priceUnit;
    }
}
