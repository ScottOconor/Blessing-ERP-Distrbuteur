package com.erp.stock.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Bordereau de réception physique : transfert Dépôt Achat → Magasin Principal.
 * Les quantités reçues vont au magasin principal, le reliquat va aux Avaries.
 */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ReceptionBordereauDTO {

    /** ID du StockPicking (incoming, état confirmed) associé */
    private Long pickingId;
    private String pickingName;

    /** Référence de la facture fournisseur source */
    private String invoiceRef;
    private String supplierName;
    private LocalDate invoiceDate;

    private Long   companyId;
    private String companyName;
    private String companySigle;
    private String companyAdresse;
    private String companyTelephone;
    private String companyRccm;
    private String companyNif;

    /** Nom de l'entrepôt destinataire (affiché sur le bordereau) */
    private String warehouseName;

    /** Nom du compte/opérateur qui a effectué l'opération */
    private String operatorName;

    /** État du picking : confirmed / done */
    private String state;
    private LocalDateTime dateDone;

    private List<LigneBordereau> lignes;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LigneBordereau {
        private Long moveId;
        private String productCode;
        private String productName;
        private BigDecimal prixUnitaire;
        /** Quantité commandée (depuis la facture) */
        private BigDecimal qteCommandee;
        /** Quantité physiquement reçue — seul champ saisi par l'utilisateur */
        private BigDecimal qteRecue;
        /** Reste = qteCommandee - qteRecue (calculé automatiquement) */
        private BigDecimal reste;
    }
}
