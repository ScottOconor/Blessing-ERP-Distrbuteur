package com.erp.auth.controller;

import com.erp.auth.dto.AuthRequest;
import com.erp.auth.dto.AuthResponse;
import com.erp.auth.entity.User;
import com.erp.auth.service.JwtService;
import com.erp.auth.service.UserDetailsServiceImpl;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.config.DataSeeder;
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
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private static final Set<String> SYSTEM_ROLES = Set.of(
            DataSeeder.SUPER_ADMIN, DataSeeder.ADMIN,
            DataSeeder.SUPER_AUDITEUR, DataSeeder.AUDITEUR, DataSeeder.CONTROLEUR);

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserDetailsServiceImpl userDetailsService;
    private final CompanyRepository companyRepository;
    private final RolePermissionRepository rolePermissionRepository;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        User user = userDetailsService.findUserEntity(request.getUsername());
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());

        String roleCode = user.getRole().getCode();
        boolean centralized = roleCode != null && SYSTEM_ROLES.contains(roleCode);

        // Claims embarqués dans le JWT
        Map<String, Object> claims = new HashMap<>();
        claims.put("roleCode", roleCode);
        claims.put("centralized", centralized);
        if (centralized && user.getGroup() != null) {
            claims.put("groupId", user.getGroup().getId());
        } else if (user.getCompany() != null) {
            claims.put("companyId", user.getCompany().getId());
        }

        String token = jwtService.generateToken(claims, userDetails);

        // Construire la réponse
        AuthResponse.AuthResponseBuilder resp = AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .username(user.getUsername())
                .fullName(user.getFullName())
                .roleCode(roleCode)
                .roleLabel(user.getRole().getLabel())
                .centralized(centralized)
                .mustChangePassword(user.isMustChangePassword());

        if (centralized && user.getGroup() != null) {
            List<Company> companies = companyRepository.findByGroupId(user.getGroup().getId());
            resp.groupId(user.getGroup().getId())
                .groupName(user.getGroup().getName())
                .companies(companies.stream()
                    .map(c -> AuthResponse.CompanyInfo.builder()
                            .id(c.getId()).name(c.getName()).sigle(c.getSigle()).build())
                    .collect(Collectors.toList()));
        } else if (user.getCompany() != null) {
            resp.companyId(user.getCompany().getId())
                .companyName(user.getCompany().getName());
            // Permissions granulaires pour les rôles custom
            List<AuthResponse.PermissionInfo> perms = rolePermissionRepository
                    .findByRole(user.getRole()).stream()
                    .map(p -> AuthResponse.PermissionInfo.builder()
                            .module(p.getModule()).resource(p.getResource()).action(p.getAction()).build())
                    .collect(Collectors.toList());
            resp.permissions(perms);
        }

        log.info("Connexion réussie : {} [{}]", user.getUsername(), roleCode);
        return ResponseEntity.ok(resp.build());
    }
}
