package com.erp.config;

import com.erp.config.service.InterAgencyKeyService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Valide le header X-Api-Key sur les endpoints /api/inter-agency/* (accès direct d'une agence à
 * une autre) ET /api/sync/helpdesk/* (canal Hub→spoke helpdesk : hub-status, hub-comment) — même
 * clé, même mécanisme. La clé est gérée en base de données via InterAgencyKeyService ; côté Hub,
 * elle est stockée sur HubSpoke.apiKey et envoyée par HubHelpdeskService.
 */
@Component
@RequiredArgsConstructor
public class InterAgencyApiKeyFilter extends OncePerRequestFilter {

    private static final String HEADER = "X-Api-Key";
    private static final String[] PROTECTED_PREFIXES = { "/api/inter-agency/", "/api/sync/helpdesk/" };

    private final InterAgencyKeyService keyService;

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res,
                                    FilterChain chain) throws ServletException, IOException {
        String uri = req.getRequestURI();
        boolean protectedRoute = false;
        for (String prefix : PROTECTED_PREFIXES) {
            if (uri.startsWith(prefix)) { protectedRoute = true; break; }
        }
        if (!protectedRoute) {
            chain.doFilter(req, res);
            return;
        }

        String provided = req.getHeader(HEADER);
        if (!keyService.isValid(provided)) {
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            res.setContentType("application/json;charset=UTF-8");
            res.getWriter().write("{\"error\":\"Clé API inter-agences invalide ou absente\"}");
            return;
        }

        chain.doFilter(req, res);
    }
}
