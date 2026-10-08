package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

/** Un crédit en circulation imputable sur une facture : un avoir client disponible, ou le
 *  trop-perçu du client (dette envers lui hors avoirs et hors versements à lettrer). */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class AvailableCreditDTO {
    public static final String TYPE_AVOIR = "avoir";
    public static final String TYPE_SURPLUS = "surplus";
    /** Identifiant fictif de la ligne trop-perçu (pas d'avoir associé) */
    public static final Long SURPLUS_ID = -1L;

    private Long id;
    /** "avoir" ou "surplus" */
    private String type;
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
