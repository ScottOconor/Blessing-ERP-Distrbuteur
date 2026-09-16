package com.erp.eleader.dto;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EleaderConfigDTO {
    private Long id;
    private Long companyId;
    private Long journalId;
    private String journalName;
    private String psaProductCode;
    private String fraisEnlevementCode;
    private boolean autoConfirm;
    private List<EleaderEmballageMappingDTO> emballageMappings;
    /** Codes ERP supplémentaires traités comme consignes/emballages. */
    private List<String> extraConsigneCodes;
}
