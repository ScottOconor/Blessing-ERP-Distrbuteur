package com.erp.config.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RemoteAgencyDTO {
    private Long          id;
    @NotBlank(message = "Le nom est obligatoire")
    private String        name;
    @NotBlank(message = "Le code est obligatoire")
    private String        code;
    @NotBlank(message = "L'hôte est obligatoire")
    private String        host;
    @NotNull(message = "Le port est obligatoire")
    @Min(value = 1, message = "Le port doit être compris entre 1 et 65535")
    @Max(value = 65535, message = "Le port doit être compris entre 1 et 65535")
    private Integer       port;
    @NotBlank(message = "La clé API est obligatoire")
    private String        apiKey;
    private String        location;
    private String        contactPerson;
    private String        phone;
    private String        email;
    private String        notes;
    private boolean       active;
    private String        baseUrl;
    private LocalDateTime createdAt;
    /** Statut de connectivité (rempli à la demande) */
    private Boolean       reachable;
    /** URL testée lors du ping */
    private String        pingUrl;
    /** Message d'erreur si injoignable */
    private String        pingError;
}
