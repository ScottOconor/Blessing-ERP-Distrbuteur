package com.erp.accounting.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JournalPreviewDTO {
    private String code;
    private String name;
    private String type;
    private String defaultAccountCode;
    private boolean accountFound;
    private String action;   // "create" | "update"
    private String warning;
}
