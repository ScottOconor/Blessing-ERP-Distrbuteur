package com.erp.caisse.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DenominationCountRequest {
    private Long denominationId;
    private Integer quantite;
}
