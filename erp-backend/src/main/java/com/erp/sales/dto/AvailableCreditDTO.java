package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

/** Un avoir client individuel disponible ("crédit en circulation") imputable sur une facture. */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class AvailableCreditDTO {
    private Long id;
    private String name;
    private LocalDate date;
    /** Montant total de l'avoir à sa validation */
    private BigDecimal montantTotal;
    /** Montant encore disponible (non encore imputé) */
    private BigDecimal montantDu;
    private String notes;
    private Long originalInvoiceId;
    private String originalInvoiceName;
}
