package com.erp.auth.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequest {

    @NotBlank
    private String username;

    @NotBlank
    @ToString.Exclude // jamais dans les journaux (toString affiché en DEBUG)
    private String password;
}
