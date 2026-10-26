package com.erp.auth.service;

import org.junit.jupiter.api.Test;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.test.util.ReflectionTestUtils;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/** Politique de mot de passe commune, et révocation des jetons émis avant un changement de mot de passe. */
class PasswordAndTokenTest {

    @Test
    void politiqueDeMotDePasse() {
        assertThatCode(() -> PasswordPolicy.validate("Caisse2026", "caissier1")).doesNotThrowAnyException();
        for (String weak : new String[]{"abc", "abcdef", "abcdefgh", "12345678", "Ab1"}) {
            assertThatThrownBy(() -> PasswordPolicy.validate(weak, "u")).as(weak).isInstanceOf(IllegalArgumentException.class);
        }
        assertThatThrownBy(() -> PasswordPolicy.validate("Caissier1", "caissier1")).isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> PasswordPolicy.validate(null, "u")).isInstanceOf(IllegalArgumentException.class);
    }

    private static JwtService jwtService() {
        JwtService jwt = new JwtService();
        ReflectionTestUtils.setField(jwt, "secretKey", "secret-de-test-uniquement-0123456789");
        ReflectionTestUtils.setField(jwt, "jwtExpiration", 3_600_000L);
        return jwt;
    }

    private static KiraUserDetails user(LocalDateTime credentialsChangedAt) {
        return new KiraUserDetails("caissier1", "x", true, List.of(new SimpleGrantedAuthority("ROLE_CUSTOM")),
                credentialsChangedAt);
    }

    @Test
    void jetonEmisAvantLeChangementDeMotDePasseRefuse() {
        JwtService jwt = jwtService();
        String token = jwt.generateToken(Map.of(), user(null));

        assertThat(jwt.isTokenValid(token, user(null))).isTrue();
        assertThat(jwt.isTokenValid(token, user(LocalDateTime.now().minusMinutes(5)))).isTrue();
        assertThat(jwt.isTokenValid(token, user(LocalDateTime.now().plusSeconds(2)))).isFalse();
    }

    @Test
    void jetonEmisDansLaMemeSecondeMaisAvantLeChangementRefuse() throws Exception {
        JwtService jwt = jwtService();
        String token = jwt.generateToken(Map.of(), user(null));
        Thread.sleep(5);
        assertThat(jwt.isTokenValid(token, user(LocalDateTime.now()))).isFalse();
    }

    @Test
    void jetonEmisApresLeChangementAccepte() {
        JwtService jwt = jwtService();
        LocalDateTime changedAt = LocalDateTime.now();
        String token = jwt.generateToken(Map.of(), user(changedAt));

        assertThat(jwt.isTokenValid(token, user(changedAt))).isTrue();
    }

    @Test
    void compteDesactiveRefuse() {
        JwtService jwt = jwtService();
        String token = jwt.generateToken(Map.of(), user(null));
        KiraUserDetails disabled = new KiraUserDetails("caissier1", "x", false, List.of(), null);

        assertThat(jwt.isTokenValid(token, disabled)).isFalse();
    }
}
