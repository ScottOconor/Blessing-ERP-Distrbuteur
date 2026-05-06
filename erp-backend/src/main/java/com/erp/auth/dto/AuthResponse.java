package com.erp.auth.dto;

import lombok.*;

import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class AuthResponse {
    private String token;
    private Long userId;
    private String username;
    private String fullName;
    private String roleCode;
    private String roleLabel;

    /** true = rôle système → accès multi-company avec espace centralisation */
    private boolean centralized;

    /** Pour les rôles custom : la company unique de l'utilisateur */
    private Long companyId;
    private String companyName;

    /** Pour les rôles système : toutes les companies du groupe */
    private Long groupId;
    private String groupName;
    private List<CompanyInfo> companies;

    private boolean mustChangePassword;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class CompanyInfo {
        private Long id;
        private String name;
        private String sigle;
    }
}
