package com.erp.caisse.dto;

import com.erp.caisse.entity.OperationType;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddOperationRequest {

    @NotNull
    private Long caisseId;

    @NotNull
    private Long companyId;

    @NotNull
    private OperationType type;

    @NotNull
    private BigDecimal montant;

    @NotNull
    private LocalDate date;

    private String libelle;
    private String reference;
    private String tiersName;
    private Long tiersId;

    @NotNull
    private Long compteContrepartieId;
}
