package com.erp.config.dto;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class CreateUserRequest {
    private String  username;
    private String  email;
    private String  fullName;
    @ToString.Exclude // jamais dans les journaux (toString affiché en DEBUG)
    private String  password;
    private Long    roleId;
    /** Caisse à laquelle rattacher l'utilisateur (null = aucune). */
    private Long    caisseId;
}
