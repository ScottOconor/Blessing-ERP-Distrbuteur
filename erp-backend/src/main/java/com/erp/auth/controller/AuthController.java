package com.erp.auth.controller;

import com.erp.auth.dto.AuthRequest;
import com.erp.auth.dto.AuthResponse;
import com.erp.auth.entity.User;
import com.erp.auth.service.JwtService;
import com.erp.auth.service.LoginRateLimiter;
import com.erp.auth.service.UserDetailsServiceImpl;
import com.erp.config.repository.RolePermissionRepository;
import com.erp.common.service.SingleCompany;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
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
    private final com.erp.caisse.repository.CaisseRepository caisseRepository;
    private final LoginRateLimiter         loginRateLimiter;
    private final SingleCompany            singleCompany;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest request, HttpServletRequest http) {
        String username = request.getUsername();
        String ip = http.getRemoteAddr();

        if (loginRateLimiter.isBlocked(username, ip)) {
            log.warn("Connexion refusée (trop de tentatives) : {} depuis {}", username, ip);
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(Map.of("message", "Trop de tentatives échouées. Réessayez dans "
                            + loginRateLimiter.remainingWindowMinutes(username, ip) + " minute(s)."));
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        } catch (InternalAuthenticationServiceException ex) {
            // Erreur technique (base injoignable...) : ni « identifiants incorrects », ni échec compté
            // pour la limitation des tentatives — sinon une coupure bloquait les utilisateurs.
            log.warn("Connexion impossible, erreur technique : {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body(Map.of("message", "Service momentanément indisponible. Réessayez dans quelques instants."));
        } catch (AuthenticationException ex) {
            loginRateLimiter.recordFailure(username, ip);
            throw ex;
        }

        loginRateLimiter.recordSuccess(username, ip);

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
                .companyId(singleCompany.getId())
                .permissions(perms)
                .caisseId(user.getCaisseId())
                .caisseName(user.getCaisseId() != null
                        ? caisseRepository.findById(user.getCaisseId()).map(c -> c.getName()).orElse(null)
                        : null)
                .build();

        log.info("Connexion réussie : {} [{}]", user.getUsername(), roleCode);
        return ResponseEntity.ok(resp);
    }
}
