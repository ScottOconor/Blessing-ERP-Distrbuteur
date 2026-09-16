package com.erp.license;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Set;

/**
 * Bloque l'accès à l'API selon l'état de licence courant (cf. LicenseService.getStatus()) :
 * - ACTIVE                        : laisse passer. C'est aussi ce que renvoie getStatus() quand
 *                                    LicenseService.isLicenseEnabled() est faux (dev local, JAR
 *                                    non empaqueté) — aucune logique de bypass séparée ici, une
 *                                    seule source de vérité partagée avec LicenseController
 *                                    (donc l'écran Angular voit la même chose que ce filtre).
 * - EXPIRED_READONLY              : laisse passer les lectures (GET/HEAD/OPTIONS) et POST /api/auth/login
 *                                    (nécessaire pour consulter les données existantes), bloque le reste
 *                                    — données existantes consultables, aucune nouvelle opération.
 * - NOT_ACTIVATED/PENDING/
 *   BLOCKED_FINGERPRINT_MISMATCH/
 *   INVALID                       : bloque tout, y compris /api/auth/** — seuls les écrans
 *                                    d'activation/blocage Angular sont utilisables.
 *
 * Ne bloque jamais les ressources statiques (le SPA Angular doit toujours pouvoir se charger pour
 * afficher ces écrans) ni /api/license/** (self-status, demande d'activation).
 */
@Component
@RequiredArgsConstructor
public class LicenseEnforcementFilter extends OncePerRequestFilter {

    private static final Set<String> READ_METHODS = Set.of("GET", "HEAD", "OPTIONS");

    private final LicenseService licenseService;

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        String uri = req.getRequestURI();
        if (!uri.startsWith("/api/") || uri.startsWith("/api/license/")) {
            chain.doFilter(req, res);
            return;
        }

        LicenseStatus status = licenseService.getStatus();
        switch (status) {
            case ACTIVE -> chain.doFilter(req, res);
            case EXPIRED_READONLY -> {
                boolean isLogin = "POST".equals(req.getMethod()) && uri.equals("/api/auth/login");
                if (READ_METHODS.contains(req.getMethod()) || isLogin) {
                    chain.doFilter(req, res);
                } else {
                    respond(res, status, "Licence expirée ou révoquée : consultation seule, "
                            + "aucune nouvelle opération n'est autorisée. Contactez le support pour réactiver la licence.");
                }
            }
            default -> respond(res, status, "Application non activée ou bloquée sur cette machine. "
                    + "Contactez le support pour activer ou réémettre la licence.");
        }
    }

    /** Inclut l'email/téléphone de contact déjà connus de LicenseService (aucun round-trip
     *  supplémentaire — simples champs mis en cache) pour que le message affiché côté client
     *  soit exploitable même sur le tout premier blocage, avant qu'un fetchStatus n'ait eu
     *  l'occasion de les récupérer.
     *  Le message précis calculé par LicenseService.evaluateCurrentStatus (ex : "Licence
     *  révoquée — consultation seule des données existantes.", distinct d'une simple expiration
     *  ou d'une empreinte machine non reconnue) prime toujours sur le texte générique passé ici —
     *  l'utilisateur doit voir la vraie raison, pas un message générique "expirée ou bloquée". */
    private void respond(HttpServletResponse res, LicenseStatus status, String genericMessage) throws IOException {
        String message = licenseService.getCachedMessage() != null
                ? licenseService.getCachedMessage() : genericMessage;
        res.setStatus(HttpServletResponse.SC_FORBIDDEN);
        res.setContentType("application/json;charset=UTF-8");
        String contactEmail = licenseService.getCachedContactEmail();
        String contactPhone = licenseService.getCachedContactPhone();
        StringBuilder json = new StringBuilder("{\"status\":\"").append(status.name())
                .append("\",\"message\":\"").append(escape(message)).append("\"");
        if (contactEmail != null && !contactEmail.isBlank())
            json.append(",\"contactEmail\":\"").append(escape(contactEmail)).append("\"");
        if (contactPhone != null && !contactPhone.isBlank())
            json.append(",\"contactPhone\":\"").append(escape(contactPhone)).append("\"");
        json.append("}");
        res.getWriter().write(json.toString());
    }

    private String escape(String s) {
        return s.replace("\"", "\\\"");
    }
}
