package com.erp.caisse.dto;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OuvertureCaisseRequest {
    private Long companyId;
    @Builder.Default
    private List<DenominationCountRequest> counts = List.of();
    private String notes;
}
