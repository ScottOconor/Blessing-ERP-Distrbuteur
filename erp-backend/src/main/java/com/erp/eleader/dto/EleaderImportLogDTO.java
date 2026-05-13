package com.erp.eleader.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EleaderImportLogDTO {
    private Long id;
    private String reference;
    private String filename;
    private String status;
    private String invoiceModel;
    private String eleaderReference;
    private String clientName;
    private String rawText;
    private String message;
    private Long salesOrderId;
    private String salesOrderName;
    private LocalDateTime importDate;
}
