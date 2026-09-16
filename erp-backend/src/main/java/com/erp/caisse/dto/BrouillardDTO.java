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
public class BrouillardDTO {
    private Long caisseId;
    private String caisseName;
    private String journalName;
    private String journalCode;
    private LocalDate dateSession;
    private BigDecimal soldeDebut;
    private BigDecimal totalEntrees;
    private BigDecimal totalSorties;
    private BigDecimal soldeFin;
    private LocalDateTime dateCloture;
    private String status;
    private List<BrouillardLineDTO> lines;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BrouillardLineDTO {
        private LocalDate date;
        private String ref;
        private String libelle;
        private String tiersName;
        private String compteCode;
        private String compteName;
        private BigDecimal debit;
        private BigDecimal credit;
        private String source;
    }
}
