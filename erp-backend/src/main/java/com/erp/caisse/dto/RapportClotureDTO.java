package com.erp.caisse.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RapportClotureDTO {
    private Long sessionId;
    private Long caisseId;
    private String caisseName;
    private LocalDate dateSession;
    private String createdBy;
    private String status;

    private BigDecimal soldeDebut;
    private BigDecimal montantCompteOuverture;
    private BigDecimal ecartOuverture;
    private boolean ouvertureControlee;

    private BigDecimal totalEntrees;
    private BigDecimal totalSorties;
    private BigDecimal soldeFin;
    private BigDecimal montantCompteCloture;
    private BigDecimal ecart;
    private BigDecimal seuilEcart;
    private boolean ecartDepasseSeuil;

    private LocalDateTime dateCloture;

    private List<DenominationCountLine> countsOuverture;
    private List<DenominationCountLine> countsCloture;
    private List<CaisseOperationDTO> operations;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DenominationCountLine {
        private String label;
        private BigDecimal valeur;
        private Integer quantite;
        private BigDecimal total;
    }
}
