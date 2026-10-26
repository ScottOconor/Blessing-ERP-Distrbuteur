package com.erp.config.controller;

import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import com.erp.auth.service.JwtService;
import com.erp.auth.service.PasswordPolicy;
import com.erp.auth.service.UserDetailsServiceImpl;
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
    private final JwtService jwtService;
    private final UserDetailsServiceImpl userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest req, Authentication auth) {
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));

        if (!passwordEncoder.matches(req.getCurrentPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body(java.util.Map.of("message", "Mot de passe actuel incorrect"));
        }
        PasswordPolicy.validate(req.getNewPassword(), user.getUsername());
        if (passwordEncoder.matches(req.getNewPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body(java.util.Map.of("message", "Le nouveau mot de passe doit être différent de l'actuel"));
        }

        user.setPassword(passwordEncoder.encode(req.getNewPassword()));
        user.setMustChangePassword(false);
        user.setCredentialsChangedAt(java.time.LocalDateTime.now());
        userRepository.save(user);

        // Les jetons émis avant ce changement sont désormais refusés (JwtService) : on renvoie un
        // nouveau jeton pour que la session en cours continue sans reconnexion.
        java.util.Map<String, Object> claims = new java.util.HashMap<>();
        claims.put("roleCode", user.getRole() != null ? user.getRole().getCode() : null);
        String token = jwtService.generateToken(claims, userDetailsService.loadUserByUsername(user.getUsername()));
        return ResponseEntity.ok(java.util.Map.of("token", token));
    }

    @Data
    public static class ChangePasswordRequest {
        private String currentPassword;
        private String newPassword;
    }
}
