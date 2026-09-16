package com.erp.config.dto;

import lombok.*;

/** État d'installation d'un module métier pour l'écran de gestion des modules. */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ModuleStateDTO {
    private String code;
    private boolean installed;
}
