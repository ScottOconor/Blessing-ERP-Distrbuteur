package com.erp.caisse.dto;

import com.erp.caisse.entity.CaisseStatus;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaisseDTO {
    private Long id;
    private String name;
    private String code;
    private Long journalId;
    private String journalName;
    private Long companyId;
    private CaisseStatus status;
    private String responsableName;
    private boolean active;
    private LocalDate lastSessionDate;
    private BigDecimal soldeActuel;
}
