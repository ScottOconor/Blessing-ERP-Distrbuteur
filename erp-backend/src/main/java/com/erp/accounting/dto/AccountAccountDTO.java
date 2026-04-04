package com.erp.accounting.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountAccountDTO {
    private Long id;
    private String code;
    private String name;
    private String accountType;
    private String internalType;
    private boolean deprecated;
    private boolean reconcile;
    private Long companyId;
    private String companyName;
}
