package com.erp.config.permission;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

/**
 * PermissionFilter est passé de fail-open à fail-closed : une route authentifiée sans règle
 * PermissionService.RULES correspondante doit désormais être refusée par défaut, alors qu'avant
 * elle était accessible à n'importe quel utilisateur authentifié — c'était le trou de sécurité
 * le plus critique de l'audit initial. Ces tests verrouillent ce comportement pour empêcher une
 * régression silencieuse vers le fail-open si le filtre est retouché plus tard.
 */
@ExtendWith(MockitoExtension.class)
class PermissionFilterTest {

    @Mock private PermissionService permissionService;

    private PermissionFilter filter;

    @BeforeEach
    void setUp() {
        // Construction manuelle (pas @InjectMocks) : on veut un VRAI ObjectMapper pour sérialiser
        // le corps de la réponse 403, pas un mock qui renverrait null pour writeValue(...).
        filter = new PermissionFilter(permissionService, new ObjectMapper());
    }

    @AfterEach
    void clearContext() {
        SecurityContextHolder.clearContext();
    }

    private HttpServletRequest request(String method, String uri) {
        HttpServletRequest req = mock(HttpServletRequest.class);
        // lenient() : certains tests (bypass avant même la lecture de la méthode HTTP) n'utilisent
        // jamais getMethod() — pas une erreur de test, juste un chemin de code qui s'arrête plus tôt.
        lenient().when(req.getMethod()).thenReturn(method);
        when(req.getRequestURI()).thenReturn(uri);
        return req;
    }

    private void authenticate(boolean privileged) {
        Authentication auth = new UsernamePasswordAuthenticationToken("user", null,
                List.of(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")));
        when(permissionService.isPrivileged(auth)).thenReturn(privileged);
        SecurityContextHolder.getContext().setAuthentication(auth);
    }

    @Test
    void unlistedRouteIsRejectedFailClosed() throws Exception {
        HttpServletRequest req = request("GET", "/api/some/unlisted/route");
        HttpServletResponse res = mock(HttpServletResponse.class);
        StringWriter body = new StringWriter();
        when(res.getWriter()).thenReturn(new PrintWriter(body));
        FilterChain chain = mock(FilterChain.class);

        authenticate(false);
        when(permissionService.findRule("GET", "/api/some/unlisted/route")).thenReturn(null);

        filter.doFilterInternal(req, res, chain);

        verify(res).setStatus(HttpServletResponse.SC_FORBIDDEN);
        verify(chain, never()).doFilter(any(), any());
        assertThat(body.toString()).contains("Accès refusé");
    }

    @Test
    void listedRouteWithoutTheRequiredPermissionIsRejected() throws Exception {
        HttpServletRequest req = request("DELETE", "/api/config/roles/5");
        HttpServletResponse res = mock(HttpServletResponse.class);
        when(res.getWriter()).thenReturn(new PrintWriter(new StringWriter()));
        FilterChain chain = mock(FilterChain.class);

        authenticate(false);
        PermissionRule rule = new PermissionRule("DELETE", "/api/config/roles/**", "CONFIG", "ROLES", "DELETE");
        when(permissionService.findRule("DELETE", "/api/config/roles/5")).thenReturn(rule);
        when(permissionService.hasPermission(any(), eq(rule))).thenReturn(false);

        filter.doFilterInternal(req, res, chain);

        verify(res).setStatus(HttpServletResponse.SC_FORBIDDEN);
        verify(chain, never()).doFilter(any(), any());
    }

    @Test
    void listedRouteWithTheRequiredPermissionPassesThrough() throws Exception {
        HttpServletRequest req = request("GET", "/api/config/roles");
        HttpServletResponse res = mock(HttpServletResponse.class);
        FilterChain chain = mock(FilterChain.class);

        authenticate(false);
        PermissionRule rule = new PermissionRule("GET", "/api/config/roles", "CONFIG", "ROLES", "VIEW");
        when(permissionService.findRule("GET", "/api/config/roles")).thenReturn(rule);
        when(permissionService.hasPermission(any(), eq(rule))).thenReturn(true);

        filter.doFilterInternal(req, res, chain);

        verify(chain).doFilter(req, res);
        verify(res, never()).setStatus(HttpServletResponse.SC_FORBIDDEN);
    }

    @Test
    void privilegedUserBypassesEvenAnUnlistedRoute() throws Exception {
        HttpServletRequest req = request("DELETE", "/api/anything/at/all");
        HttpServletResponse res = mock(HttpServletResponse.class);
        FilterChain chain = mock(FilterChain.class);

        authenticate(true);

        filter.doFilterInternal(req, res, chain);

        verify(chain).doFilter(req, res);
        verify(permissionService, never()).findRule(any(), any());
    }

    @Test
    void nonApiPathBypassesThePermissionCheckEntirely() throws Exception {
        HttpServletRequest req = request("GET", "/index.html");
        HttpServletResponse res = mock(HttpServletResponse.class);
        FilterChain chain = mock(FilterChain.class);

        filter.doFilterInternal(req, res, chain);

        verify(chain).doFilter(req, res);
        verifyNoInteractions(permissionService);
    }

    @Test
    void bypassPrefixSkipsThePermissionCheck() throws Exception {
        HttpServletRequest req = request("POST", "/api/sync/helpdesk/hub-status");
        HttpServletResponse res = mock(HttpServletResponse.class);
        FilterChain chain = mock(FilterChain.class);

        filter.doFilterInternal(req, res, chain);

        verify(chain).doFilter(req, res);
        verifyNoInteractions(permissionService);
    }

    @Test
    void getOnCompanyBrandingBypassesThePermissionCheckEvenAuthenticated() throws Exception {
        // AppBrandingService.apply() est rappelé juste après connexion, JWT attaché — un utilisateur
        // sans CONFIG.ENTREPRISES.VIEW (ex. rôle caissier) ne doit pas se voir bloquer ce simple
        // nom/logo. Incident vécu : ce bypass manquait, cassant silencieusement le rafraîchissement
        // du branding pour tout rôle non-admin après connexion.
        // Pas d'authenticate() ici : le bypass GET-only s'applique AVANT même la lecture de
        // l'Authentication (comme BYPASS_PREFIXES), qu'il y ait un utilisateur ou non.
        HttpServletRequest req = request("GET", "/api/config/companies/1");
        HttpServletResponse res = mock(HttpServletResponse.class);
        FilterChain chain = mock(FilterChain.class);

        filter.doFilterInternal(req, res, chain);

        verify(chain).doFilter(req, res);
        verifyNoInteractions(permissionService);
    }

    @Test
    void putOnCompanyBrandingPrefixStillRequiresThePermissionCheck() throws Exception {
        // Le bypass GET ci-dessus ne doit JAMAIS s'étendre aux mutations (création/mise à jour de
        // société, upload de logo) sous le même préfixe — celles-ci restent gouvernées par
        // CONFIG.ENTREPRISES.EDIT comme avant.
        HttpServletRequest req = request("PUT", "/api/config/companies/1");
        HttpServletResponse res = mock(HttpServletResponse.class);
        when(res.getWriter()).thenReturn(new PrintWriter(new StringWriter()));
        FilterChain chain = mock(FilterChain.class);

        authenticate(false);
        PermissionRule rule = new PermissionRule("PUT", "/api/config/companies/**", "CONFIG", "ENTREPRISES", "EDIT");
        when(permissionService.findRule("PUT", "/api/config/companies/1")).thenReturn(rule);
        when(permissionService.hasPermission(any(), eq(rule))).thenReturn(false);

        filter.doFilterInternal(req, res, chain);

        verify(res).setStatus(HttpServletResponse.SC_FORBIDDEN);
        verify(chain, never()).doFilter(any(), any());
    }

    @Test
    void unauthenticatedRequestOnAProtectedRouteIsAllowedThroughToSpringSecurity() throws Exception {
        // PermissionFilter runs after JwtAuthFilter but before Spring Security's own authorization —
        // an anonymous/absent Authentication must fall through (Spring Security itself rejects it),
        // not be treated as fail-closed by this filter (which would produce the wrong error shape).
        HttpServletRequest req = request("GET", "/api/config/roles");
        HttpServletResponse res = mock(HttpServletResponse.class);
        FilterChain chain = mock(FilterChain.class);

        SecurityContextHolder.getContext().setAuthentication(
                new AnonymousAuthenticationToken("key", "anonymousUser",
                        List.of(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ANONYMOUS"))));

        filter.doFilterInternal(req, res, chain);

        verify(chain).doFilter(req, res);
        verifyNoInteractions(permissionService);
    }
}
