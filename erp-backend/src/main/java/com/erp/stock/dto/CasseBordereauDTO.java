package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

/** Bordereau imprimable pour une opération de Trous & Casses. */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class CasseBordereauDTO {
    private Long stockLossId;
    private String name;
    private LocalDate date;
    private String warehouseName;
    private String partnerName;
    private String notes;
    private BigDecimal totalValue;
    private String operatorName;

    private Long companyId;
    private String companyName;
    private String companySigle;
    private String companyAdresse;
    private String companyTelephone;
    private String companyRccm;
    private String companyNif;

    private List<LigneCasse> lignes;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LigneCasse {
        private String productCode;
        private String productName;
        private BigDecimal quantite;
        private BigDecimal unitCost;
        private BigDecimal montant;
    }
}
