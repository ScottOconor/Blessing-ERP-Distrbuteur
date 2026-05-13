package com.erp.eleader.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EleaderEmballageMappingDTO {
    private Long id;
    private String eleaderCode;
    private String erpProductCode;
    private String invoiceModel;
}
