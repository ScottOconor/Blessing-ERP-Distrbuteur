package com.erp.auth.controller;

import com.erp.auth.dto.AuthRequest;
import com.erp.auth.dto.AuthResponse;
import com.erp.auth.entity.User;
import com.erp.auth.service.JwtService;
import com.erp.auth.service.UserDetailsServiceImpl;
import com.erp.config.repository.RolePermissionRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthenticationManager    authenticationManager;
    private final JwtService               jwtService;
    private final UserDetailsServiceImpl   userDetailsService;
    private final RolePermissionRepository rolePermissionRepository;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        User user = userDetailsService.findUserEntity(request.getUsername());
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());

        String roleCode = user.getRole() != null ? user.getRole().getCode() : null;

        Map<String, Object> claims = new HashMap<>();
        claims.put("roleCode", roleCode);
        claims.put("companyId", user.getCompany() != null ? user.getCompany().getId() : null);

        String token = jwtService.generateToken(claims, userDetails);

        List<AuthResponse.PermissionInfo> perms = user.getRole() != null
                ? rolePermissionRepository.findByRole(user.getRole()).stream()
                        .map(p -> AuthResponse.PermissionInfo.builder()
                                .module(p.getModule()).resource(p.getResource()).action(p.getAction()).build())
                        .collect(Collectors.toList())
                : List.of();

        AuthResponse resp = AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .username(user.getUsername())
                .fullName(user.getFullName())
                .roleCode(roleCode)
                .roleLabel(user.getRole() != null ? user.getRole().getLabel() : null)
                .mustChangePassword(user.isMustChangePassword())
                .permissions(perms)
                .build();

        log.info("Connexion réussie : {} [{}]", user.getUsername(), roleCode);
        return ResponseEntity.ok(resp);
    }
}
