package com.erp.common.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class EnlevementDTO {
    private Long id;

    @NotNull(message = "La catégorie est obligatoire")
    private Long categoryId;
    private String categoryName;

    @NotNull(message = "Le montant fixe est obligatoire")
    @DecimalMin(value = "0", message = "Le montant fixe ne peut pas être négatif")
    private BigDecimal montantFixe;

    @NotNull(message = "Le coût d'enlèvement est obligatoire")
    @DecimalMin(value = "0", message = "Le coût d'enlèvement ne peut pas être négatif")
    private BigDecimal coutEnlevement;

    private Long companyId;
    private boolean active;

    @Valid
    private List<EnlevementClientDTO> clients;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class EnlevementClientDTO {
        private Long id;

        @NotNull(message = "Le partenaire est obligatoire")
        private Long partnerId;
        private String partnerName;

        @NotNull(message = "Le montant est obligatoire")
        @DecimalMin(value = "0", message = "Le montant ne peut pas être négatif")
        private BigDecimal montant;
        private String supplementAccountCode;
    }
}
