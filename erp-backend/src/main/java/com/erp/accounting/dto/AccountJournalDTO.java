package com.erp.accounting.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountJournalDTO {
    private Long id;
    private String code;
    private String name;
    private String type;
    private Long defaultDebitAccountId;
    private String defaultDebitAccountCode;
    private Long defaultCreditAccountId;
    private String defaultCreditAccountCode;
    private Long companyId;
    private boolean active;
}
