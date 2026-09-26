package com.erp.config.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class UserDTO {
    private Long    id;
    private String  username;
    private String  email;
    private String  fullName;
    private Long    roleId;
    private String  roleCode;
    private String  roleLabel;
    private boolean active;
    private boolean mustChangePassword;
    /** Caisse rattachée (optionnel). */
    private Long    caisseId;
    private String  caisseName;
}
