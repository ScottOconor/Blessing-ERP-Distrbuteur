package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

/** Une ligne du rapport des ventes = une facture (ou un avoir, en négatif). */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RapportVentesLine {
    private Long invoiceId;
    private LocalDate date;
    private String clientName;
    private String clientRef;
    /** Numéro de la facture (FAC-…) ou de l'avoir (AV-…) */
    private String invoiceRef;
    /** Numéro du bon de commande d'origine (BC-…), null si facture directe */
    private String bonRef;
    /** Pour un avoir : numéro de la facture corrigée */
    private String originalInvoiceRef;
    private String warehouseName;
    private boolean avoir;

    private BigDecimal totalHT;
    private BigDecimal totalTTC;
    /** Montant réellement encaissé (paiements validés, hors imputations d'avoirs) */
    private BigDecimal montantEncaisse;
    /** Emballages consignés (sortis chez le client) */
    private BigDecimal qteConsigne;
    /** Emballages déconsignés (rendus par le client) */
    private BigDecimal qteDeconsigne;
    private BigDecimal totalColis;
    private BigDecimal totalCasiers;
    private BigDecimal totalPET;
}
