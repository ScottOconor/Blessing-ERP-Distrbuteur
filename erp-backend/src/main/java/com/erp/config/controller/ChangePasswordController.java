package com.erp.config.controller;

import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/config")
@RequiredArgsConstructor
public class ChangePasswordController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest req, Authentication auth) {
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));

        if (!passwordEncoder.matches(req.getCurrentPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body(java.util.Map.of("message", "Mot de passe actuel incorrect"));
        }
        if (req.getNewPassword() == null || req.getNewPassword().length() < 6) {
            return ResponseEntity.badRequest().body(java.util.Map.of("message", "Le nouveau mot de passe doit contenir au moins 6 caractères"));
        }

        user.setPassword(passwordEncoder.encode(req.getNewPassword()));
        user.setMustChangePassword(false);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    @Data
    public static class ChangePasswordRequest {
        private String currentPassword;
        private String newPassword;
    }
}
