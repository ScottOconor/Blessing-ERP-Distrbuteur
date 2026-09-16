package com.erp.auth;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/**
 * SecurityUtils.currentCompanyId() est la source de vérité du companyId courant, dérivée du JWT
 * (jamais d'un paramètre client) — voir JwtAuthFilter. Ces tests verrouillent qu'elle lit
 * exclusivement les TenantAuthenticationDetails posés par le filtre, sans jamais faire confiance
 * à un autre type de détail ou tomber en silence sur une valeur par défaut trompeuse.
 */
class SecurityUtilsTest {

    @AfterEach
    void clearContext() {
        SecurityContextHolder.clearContext();
    }

    @Test
    void returnsCompanyIdFromTenantAuthenticationDetails() {
        Authentication auth = new UsernamePasswordAuthenticationToken("user", null, java.util.List.of());
        ((UsernamePasswordAuthenticationToken) auth).setDetails(new TenantAuthenticationDetails(42L, "10.0.0.1"));
        SecurityContextHolder.getContext().setAuthentication(auth);

        assertThat(SecurityUtils.currentCompanyId()).isEqualTo(42L);
    }

    @Test
    void returnsNullWhenDetailsAreNotTenantAuthenticationDetails() {
        Authentication auth = new UsernamePasswordAuthenticationToken("user", null, java.util.List.of());
        ((UsernamePasswordAuthenticationToken) auth).setDetails("some-other-details-object");
        SecurityContextHolder.getContext().setAuthentication(auth);

        assertThat(SecurityUtils.currentCompanyId()).isNull();
    }

    @Test
    void throwsWhenNoAuthenticationIsPresent() {
        SecurityContextHolder.clearContext();
        assertThatThrownBy(SecurityUtils::currentCompanyId)
                .isInstanceOf(IllegalStateException.class);
    }
}
