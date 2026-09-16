package com.erp.auth.filter;

import com.erp.auth.service.JwtService;
import com.erp.auth.service.UserDetailsServiceImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

/**
 * Un compte désactivé APRÈS l'émission de son JWT devait rester valide jusqu'à expiration du
 * token (bug corrigé) — UserDetailsServiceImpl recharge .disabled(!user.isActive()) à chaque
 * requête, donc le filtre doit refuser l'authentification dès que isEnabled() est faux, même
 * si la signature/expiration du JWT sont par ailleurs valides.
 */
@ExtendWith(MockitoExtension.class)
class JwtAuthFilterTest {

    @Mock private JwtService jwtService;
    @Mock private UserDetailsServiceImpl userDetailsService;
    @Mock private FilterChain filterChain;

    @InjectMocks
    private JwtAuthFilter filter;

    @AfterEach
    void clearContext() {
        SecurityContextHolder.clearContext();
    }

    private HttpServletRequest requestWithBearerToken(String token) {
        HttpServletRequest request = mock(HttpServletRequest.class);
        when(request.getHeader("Authorization")).thenReturn("Bearer " + token);
        return request;
    }

    @Test
    void rejectsAuthenticationWhenUserIsDisabled() throws Exception {
        HttpServletRequest request = requestWithBearerToken("valid-jwt");
        HttpServletResponse response = mock(HttpServletResponse.class);

        UserDetails disabledUser = User.withUsername("bob").password("x").disabled(true).authorities("ROLE_USER").build();
        when(jwtService.extractUsername("valid-jwt")).thenReturn("bob");
        when(userDetailsService.loadUserByUsername("bob")).thenReturn(disabledUser);
        when(jwtService.isTokenValid("valid-jwt", disabledUser)).thenReturn(true);

        filter.doFilter(request, response, filterChain);

        assertThat(SecurityContextHolder.getContext().getAuthentication()).isNull();
        verify(filterChain).doFilter(request, response);
    }

    @Test
    void acceptsAuthenticationWhenUserIsEnabledAndTokenValid() throws Exception {
        HttpServletRequest request = requestWithBearerToken("valid-jwt");
        when(request.getRemoteAddr()).thenReturn("127.0.0.1");
        HttpServletResponse response = mock(HttpServletResponse.class);

        UserDetails enabledUser = User.withUsername("alice").password("x").disabled(false).authorities("ROLE_USER").build();
        when(jwtService.extractUsername("valid-jwt")).thenReturn("alice");
        when(userDetailsService.loadUserByUsername("alice")).thenReturn(enabledUser);
        when(jwtService.isTokenValid("valid-jwt", enabledUser)).thenReturn(true);
        when(jwtService.extractCompanyId("valid-jwt")).thenReturn(7L);

        filter.doFilter(request, response, filterChain);

        assertThat(SecurityContextHolder.getContext().getAuthentication()).isNotNull();
        assertThat(SecurityContextHolder.getContext().getAuthentication().getName()).isEqualTo("alice");
        verify(filterChain).doFilter(request, response);
    }

    @Test
    void skipsAuthenticationWhenNoBearerHeaderPresent() throws Exception {
        HttpServletRequest request = mock(HttpServletRequest.class);
        when(request.getHeader("Authorization")).thenReturn(null);
        HttpServletResponse response = mock(HttpServletResponse.class);

        filter.doFilter(request, response, filterChain);

        assertThat(SecurityContextHolder.getContext().getAuthentication()).isNull();
        verifyNoInteractions(jwtService, userDetailsService);
        verify(filterChain).doFilter(request, response);
    }
}
