package com.erp.auth.dto;

import lombok.*;

import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class AuthResponse {
    private String  token;
    private Long    userId;
    private String  username;
    private String  fullName;
    private String  roleCode;
    private String  roleLabel;
    private boolean mustChangePassword;

    /** Permissions effectives de l'utilisateur */
    private List<PermissionInfo> permissions;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class PermissionInfo {
        private String module;
        private String resource;
        private String action;
    }
}
