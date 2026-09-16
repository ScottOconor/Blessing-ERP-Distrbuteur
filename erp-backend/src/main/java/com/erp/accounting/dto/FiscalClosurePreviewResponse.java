package com.erp.accounting.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class FiscalClosurePreviewResponse {
    private LocalDate dateFrom;
    private LocalDate dateTo;

    /** true si la clôture est refusée tant que des écritures non validées subsistent sur la période. */
    private boolean blocked;
    private List<BlockingEntry> blockers;

    /** Somme réelle des comptes de classe 6/7/8 sur la période (débit-crédit inversé côté produits) —
     *  c'est le montant qui sera effectivement soldé par l'écriture de clôture, pas une figure
     *  recalculée par rubrique (voir ReportService.getProfitLossAccountBalances). */
    private BigDecimal netResult;
    private List<AccountBalanceLine> accountBalances;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class BlockingEntry {
        private Long id;
        private String name;
        private LocalDate date;
        private String journalName;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class AccountBalanceLine {
        private String accountCode;
        private String accountName;
        /** Solde brut (débit - crédit) tel quel — négatif pour un compte de produit normalement créditeur. */
        private BigDecimal balance;
    }
}
