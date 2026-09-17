package com.erp.caisse.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaisseSessionDTO {
    private Long id;
    private Long caisseId;
    private String caisseName;
    private Long journalId;
    private String journalName;
    private Long companyId;
    private LocalDate dateSession;
    private String status;
    private BigDecimal soldeDebut;
    private BigDecimal soldeFin;
    private BigDecimal totalEntrees;
    private BigDecimal totalSorties;
    private LocalDateTime dateCloture;
    private String createdBy;

    private Long userId;
    private BigDecimal montantCompteOuverture;
    private BigDecimal montantCompteCloture;
    private BigDecimal ecartOuverture;
    private BigDecimal ecart;
    private boolean ouvertureControlee;
    private boolean ecartDepasseSeuil;
}
