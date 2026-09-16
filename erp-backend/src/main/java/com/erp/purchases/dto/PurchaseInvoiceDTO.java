package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoiceDTO {

    private Long id;
    private String name;
    private LocalDate date;
    private LocalDate dateEcheance;
    private String state;
    private String notes;

    private Long partnerId;
    private String partnerName;
    private Long journalId;
    private String journalName;
    private Long companyId;

    /** invoice / credit_note */
    private String type;
    private Long originalInvoiceId;
    private String originalInvoiceName;

    private Long purchaseOrderId;
    private String purchaseOrderName;
    private Long accountMoveId;
    private String accountMoveName;

    /** none / partial / full — calculé à partir de entriesReversedAt et de l'état des paiements.
     *  "full" : l'écriture principale (+ écriture de stock pour un avoir) a été extournée via
     *  "Inverser les écritures" (couvre alors aussi tous les paiements restants).
     *  "partial" : au moins un paiement a été extourné individuellement, sans extourner le reste. */
    private String reversalStatus;
    private java.time.LocalDateTime entriesReversedAt;

    /** Bon de réception Dépôt Achat */
    private Long pickingId;
    private String pickingState;
    private Long warehouseId;
    private String warehouseName;
    /** Nom de l'entrepôt qui recevra physiquement la marchandise (Dépôt Achat résolu) — informatif */
    private String receptionWarehouseName;
    /** Solde courant du partenaire (débit - crédit sur comptes fournisseurs/clients) */
    private BigDecimal partnerBalance;
    /** Total des avoirs non encore compensés disponibles pour ce fournisseur */
    private BigDecimal partnerCreditDisponible;

    private BigDecimal totalHT;
    private BigDecimal totalTVA;
    private BigDecimal totalTTC;
    private BigDecimal montantPaye;
    private BigDecimal montantDu;

    /** Remise fournisseur TTC (informatif, non déduit de la facture) */
    private BigDecimal totalRemise;
    /** Précompte total */
    private BigDecimal totalPrecompte;
    /** Total liquide nu */
    private BigDecimal totalLiquideNu;
    /** Net à payer = TTC - précompte */
    private BigDecimal netAPayer;
    /** Total rabais HT (prix catalogue − prix préférentiel) sur toutes les lignes */
    private BigDecimal totalRabaisHT;

    private List<LineDTO> lines;
    private List<RemiseDetailDTO> remiseDetails;
    private List<PaymentDTO> payments;
    private LocalDateTime createdAt;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime updatedAt;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class RemiseDetailDTO {
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
        private String typeRemise;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LineDTO {
        private Long id;
        private Long productId;
        private String productCode;
        private String description;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
        private BigDecimal tauxTVA;
        private String accountCode;
        private Long categoryId;
        private BigDecimal montantHT;
        private BigDecimal montantTVA;
        private BigDecimal montantTTC;
        private BigDecimal precompte;
        private BigDecimal prixUnitaireTTC;
        private boolean consigne;
        private String categoryName;
        private BigDecimal rabaisUnitaire;
        private BigDecimal totalRabaisLigne;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PaymentDTO {
        private Long id;
        private String name;
        private LocalDate date;
        private BigDecimal amount;
        private String memo;
        private String state;
        private Long journalId;
        private String journalName;
        private Long invoiceId;
        private String invoiceName;
        private Long partnerId;
        private String partnerName;
        /** Si ce paiement est une compensation par avoir fournisseur : id de l'avoir utilisé */
        private Long creditNoteId;
    }
}
