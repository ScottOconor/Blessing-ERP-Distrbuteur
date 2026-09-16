package com.erp.config.dto;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class CreateUserRequest {
    private String  username;
    private String  email;
    private String  fullName;
    private String  password;
    private Long    roleId;
}
