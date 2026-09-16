package com.erp.caisse.dto;

import com.erp.caisse.entity.OperationType;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaisseOperationDTO {
    private Long id;
    private Long caisseId;
    private String caisseName;
    private Long companyId;
    private LocalDate date;
    private OperationType type;
    private BigDecimal montant;
    private String libelle;
    private String reference;
    private String tiersName;
    private Long compteContrepartieId;
    private String compteContrepartieCode;
    private String compteContrepartieName;
    private Long journalMoveId;
    private String createdBy;
    private LocalDateTime createdAt;
}
