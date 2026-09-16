package com.erp.accounting.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountMoveDTO {
    private Long id;
    private String name;
    private LocalDate date;
    private String ref;
    private String state;
    private Long journalId;
    private String journalName;
    private Long companyId;
    private Long partnerId;
    private String partnerName;
    private List<AccountMoveLineDTO> lines;
    private LocalDateTime createdAt;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime updatedAt;
    private BigDecimal totalDebit;
    private BigDecimal totalCredit;
    /** ID de l'extourne générée — non null = déjà extournée */
    private Long reversalId;
    /** Vrai si cette écriture est elle-même une extourne */
    private boolean isReversal;

    // Traçabilité validation
    private String postedBy;
    private LocalDateTime postedAt;

    // Traçabilité remise en brouillon
    private String resetToDraftBy;
    private LocalDateTime resetToDraftAt;
}
