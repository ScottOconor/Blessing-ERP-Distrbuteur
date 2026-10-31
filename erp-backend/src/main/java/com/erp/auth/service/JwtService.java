package com.erp.auth.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.PosixFilePermissions;
import java.security.Key;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 * Signe/valide les JWT de session. Le secret HS256 n'est jamais commité en dur : soit fourni
 * explicitement (jwt.secret / JWT_SECRET), soit généré automatiquement une seule fois au premier
 * démarrage et persisté à secretPath — jamais régénéré ensuite (sinon toutes les sessions actives
 * seraient invalidées à chaque redémarrage).
 */
@Service
@Slf4j
public class JwtService {

    @Value("${jwt.secret:}")
    private String configuredSecret;

    @Value("${jwt.secret-path:${user.home}/.kira/jwt-secret.key}")
    private String secretPath;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    private String secretKey;

    @PostConstruct
    public void resolveSecret() {
        if (configuredSecret != null && !configuredSecret.isBlank()) {
            secretKey = configuredSecret;
            log.info("Secret JWT : valeur explicite (jwt.secret)");
            return;
        }
        try {
            Path path = Path.of(secretPath);
            if (Files.exists(path)) {
                secretKey = Files.readString(path).trim();
            } else {
                secretKey = generateSecret();
                Files.createDirectories(path.getParent());
                Files.writeString(path, secretKey);
                try {
                    Files.setPosixFilePermissions(path, PosixFilePermissions.fromString("rw-------"));
                } catch (UnsupportedOperationException ignored) {
                    // Système de fichiers non-POSIX — permissions par défaut de l'OS.
                }
                log.info("Secret JWT généré et persisté ({})", secretPath);
            }
        } catch (Exception e) {
            throw new IllegalStateException(
                    "Impossible de charger/générer le secret JWT (" + secretPath + ")", e);
        }
    }

    private String generateSecret() {
        byte[] bytes = new byte[64]; // 512 bits — largement au-dessus du minimum HS256 (256 bits)
        new SecureRandom().nextBytes(bytes);
        return Base64.getEncoder().encodeToString(bytes);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public String extractRoleCode(String token) {
        return extractClaim(token, c -> c.get("roleCode", String.class));
    }

    public Boolean extractCentralized(String token) {
        return extractClaim(token, c -> c.get("centralized", Boolean.class));
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        return claimsResolver.apply(extractAllClaims(token));
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .setClaims(extraClaims)
                .claim(ISSUED_AT_MS, now)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + jwtExpiration))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        return extractUsername(token).equals(userDetails.getUsername())
                && !isTokenExpired(token)
                && !issuedBeforeCredentialsChange(token, userDetails)
                && userDetails.isEnabled()
                && userDetails.isAccountNonLocked();
    }

    /** Instant d'émission à la milliseconde : le champ standard iat n'a qu'une précision à la seconde,
     *  ce qui laissait valide un jeton émis dans la seconde même d'un changement de mot de passe. */
    private static final String ISSUED_AT_MS = "iatMs";

    /** Jeton émis avant le dernier changement de mot de passe : refusé, la session ouverte avec
     *  l'ancien mot de passe est révoquée. Les jetons sans iatMs (antérieurs) sont comparés à la seconde. */
    private boolean issuedBeforeCredentialsChange(String token, UserDetails userDetails) {
        if (!(userDetails instanceof KiraUserDetails kira) || kira.getCredentialsChangedAt() == null) return false;
        Claims claims = extractAllClaims(token);
        long changedAtMs = kira.getCredentialsChangedAt().atZone(java.time.ZoneId.systemDefault()).toInstant().toEpochMilli();
        Long issuedAtMs = claims.get(ISSUED_AT_MS, Long.class);
        if (issuedAtMs != null) return issuedAtMs < changedAtMs;
        Date issuedAt = claims.getIssuedAt();
        return issuedAt == null || issuedAt.getTime() / 1000 < changedAtMs / 1000;
    }

    private boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] paddedKey = new byte[32];
        byte[] keyBytes  = secretKey.getBytes();
        System.arraycopy(keyBytes, 0, paddedKey, 0, Math.min(keyBytes.length, 32));
        return Keys.hmacShaKeyFor(paddedKey);
    }
}
