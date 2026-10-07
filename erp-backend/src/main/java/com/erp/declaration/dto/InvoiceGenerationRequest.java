package com.erp.declaration.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Paramètres de génération automatique de factures de vente (module Déclaration).
 * Les montants sont des montants nets à payer TTC, en FCFA.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvoiceGenerationRequest {
    private Long companyId;
    /** Montant total à atteindre sur l'ensemble des factures générées */
    private BigDecimal totalAmount;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    /** Montant minimum d'une facture */
    private BigDecimal minAmount;
    /** Montant maximum d'une facture */
    private BigDecimal maxAmount;
    /** Nombre de factures à générer */
    private Integer count;
    /** Note reportée sur chaque facture (facultatif) */
    private String notes;
}
