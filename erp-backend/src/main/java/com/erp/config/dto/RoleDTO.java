package com.erp.config.dto;

import lombok.*;

import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RoleDTO {
    private Long    id;
    private String  code;
    private String  label;
    private boolean isSystem;
    private boolean active;
    private List<PermissionDTO> permissions;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class PermissionDTO {
        private String module;
        private String resource;
        private String action;
    }
}
