package com.erp.config.permission;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Map;

@Component
@Order(Ordered.LOWEST_PRECEDENCE - 10)
@RequiredArgsConstructor
public class PermissionFilter extends OncePerRequestFilter {

    private final PermissionService permissionService;
    private final ObjectMapper      objectMapper;

    // /api/sync/helpdesk/ (hub-status, hub-comment) est un canal Hub→spoke serveur-à-serveur,
    // authentifié par InterAgencyApiKeyFilter (X-Api-Key) plutôt que par un JWT utilisateur — il
    // n'y a donc pas d'Authentication à vérifier ici. Le reste de /api/sync/** (SyncStatusController,
    // tableau de bord admin) N'EST PLUS bypassé : il passe par le contrôle de permission normal.
    private static final String[] BYPASS_PREFIXES = {
        "/api/auth/", "/api/health", "/api/inter-agency/", "/actuator/", "/api/sync/helpdesk/"
    };

    // Lecture seule du nom/logo société : GET UNIQUEMENT, jamais PUT/POST (création, mise à jour,
    // upload de logo restent gouvernés par CONFIG.ENTREPRISES.EDIT — un bypass par préfixe sans
    // restriction de méthode aurait aussi dispensé ces mutations de tout contrôle de permission).
    // AppBrandingService.apply()/CompanyService.load() (nom/logo pour titre/favicon) est appelé AVANT
    // connexion (permitAll côté SecurityConfig) ET À NOUVEAU juste après connexion, JWT attaché. Sans
    // ce bypass, un utilisateur authentifié sans CONFIG.ENTREPRISES.VIEW (ex. rôle caissier/vente) se
    // voyait refuser cet appel en boucle après connexion — échec silencieux (le composant n'a pas de
    // gestion d'erreur sur ce subscribe), le nom/logo de l'app ne se rafraîchissant simplement jamais
    // pour ces rôles. ConfigService.getCompany applique déjà lui-même la restriction qui compte
    // (détail sensible RCCM/NIF/adresse/tél/email réservé aux appelants réellement authentifiés).
    private static final String[] GET_ONLY_BYPASS_PREFIXES = {
        "/api/config/companies/"
    };

    // Actions en libre-service pour TOUT utilisateur authentifié, indépendamment de ses
    // permissions (changer son propre mot de passe ; lire l'état d'installation des modules pour
    // l'écran d'accueil / garde de route). Comparaison exacte method+URI (pas un préfixe comme
    // BYPASS_PREFIXES ci-dessus) pour ne pas bypasser par erreur une sous-route qui, elle, doit
    // rester protégée (ex. PUT /api/config/modules/{code} reste gouverné par CONFIG.MODULES.EDIT).
    private static final java.util.Set<String> EXACT_SELF_SERVICE_BYPASS = java.util.Set.of(
        "POST /api/config/change-password",
        "GET /api/config/modules"
    );

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {

        String uri = req.getRequestURI();

        if (!uri.startsWith("/api/")) { chain.doFilter(req, res); return; }
        for (String prefix : BYPASS_PREFIXES) {
            if (uri.startsWith(prefix)) { chain.doFilter(req, res); return; }
        }
        if ("GET".equals(req.getMethod())) {
            for (String prefix : GET_ONLY_BYPASS_PREFIXES) {
                if (uri.startsWith(prefix)) { chain.doFilter(req, res); return; }
            }
        }
        if (EXACT_SELF_SERVICE_BYPASS.contains(req.getMethod() + " " + uri)) {
            chain.doFilter(req, res); return;
        }

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getPrincipal())) {
            chain.doFilter(req, res); return;
        }

        if (permissionService.isPrivileged(auth)) { chain.doFilter(req, res); return; }

        PermissionRule rule = permissionService.findRule(req.getMethod(), uri);

        // Fail-closed : une route authentifiée sans règle correspondante est refusée par défaut
        // (auparavant fail-open — tout endpoint oublié dans PermissionService.RULES était
        // accessible à n'importe quel utilisateur authentifié).
        if (rule == null || !permissionService.hasPermission(auth, rule)) {
            res.setStatus(HttpServletResponse.SC_FORBIDDEN);
            res.setContentType(MediaType.APPLICATION_JSON_VALUE);
            res.setCharacterEncoding("UTF-8");
            objectMapper.writeValue(res.getWriter(), rule != null
                ? Map.of("error", "Accès refusé", "required", rule.module() + "." + rule.resource() + "." + rule.action())
                : Map.of("error", "Accès refusé"));
            return;
        }

        chain.doFilter(req, res);
    }
}
