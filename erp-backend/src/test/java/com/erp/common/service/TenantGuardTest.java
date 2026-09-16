package com.erp.common.service;

import com.erp.auth.TenantAuthenticationDetails;
import com.erp.config.permission.PermissionService;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.when;

/**
 * TenantGuard est le cœur du correctif IDOR multi-tenant : chaque service métier l'appelle
 * juste après un findById(id) pour vérifier que l'entité chargée appartient bien à la société
 * de l'utilisateur courant. Ces tests verrouillent son comportement (privilégiés exemptés,
 * mismatch → 404 et non 403 pour ne pas confirmer l'existence de la ressource).
 */
@ExtendWith(MockitoExtension.class)
class TenantGuardTest {

    @Mock
    private PermissionService permissionService;

    @InjectMocks
    private TenantGuard tenantGuard;

    @AfterEach
    void clearContext() {
        SecurityContextHolder.clearContext();
    }

    private void authenticateAs(Long companyId, boolean privileged) {
        Authentication auth = new UsernamePasswordAuthenticationToken("user", null, java.util.List.of());
        ((UsernamePasswordAuthenticationToken) auth).setDetails(new TenantAuthenticationDetails(companyId, "127.0.0.1"));
        when(permissionService.isPrivileged(auth)).thenReturn(privileged);
        SecurityContextHolder.getContext().setAuthentication(auth);
    }

    @Test
    void allowsWhenEntityBelongsToCurrentCompany() {
        authenticateAs(1L, false);
        assertThatCode(() -> tenantGuard.check(1L)).doesNotThrowAnyException();
    }

    @Test
    void rejectsWithNotFoundWhenEntityBelongsToAnotherCompany() {
        authenticateAs(1L, false);
        assertThatThrownBy(() -> tenantGuard.check(2L))
                .isInstanceOf(EntityNotFoundException.class);
    }

    @Test
    void rejectsWhenEntityCompanyIsNullButCurrentCompanyIsSet() {
        authenticateAs(1L, false);
        assertThatThrownBy(() -> tenantGuard.check(null))
                .isInstanceOf(EntityNotFoundException.class);
    }

    @Test
    void privilegedRoleBypassesTheCheckEvenOnMismatch() {
        authenticateAs(1L, true);
        assertThatCode(() -> tenantGuard.check(999L)).doesNotThrowAnyException();
    }

    @Test
    void bothNullCompanyIdsAreConsideredEqualAndAllowed() {
        authenticateAs(null, false);
        assertThatCode(() -> tenantGuard.check(null)).doesNotThrowAnyException();
    }

    @Test
    void noAuthenticationAtAllIsTreatedAsATrustedInternalCallAndBypassesTheCheck() {
        // Un appel sans Authentication DU TOUT (pas le principal "anonymous" qu'attache
        // AnonymousAuthenticationFilter à toute vraie requête HTTP) ne peut venir que d'un
        // traitement interne hors requête (scheduler...) — ex. SnapshotService qui appelle
        // SalesStatsService.getStats() par société depuis un @Scheduled, sans contexte de
        // sécurité. Avant ce correctif, SecurityUtils.currentCompanyId() y levait
        // IllegalStateException, cassant le snapshot horaire (UnexpectedRollbackException).
        SecurityContextHolder.clearContext();
        assertThatCode(() -> tenantGuard.check(999L)).doesNotThrowAnyException();
    }
}
