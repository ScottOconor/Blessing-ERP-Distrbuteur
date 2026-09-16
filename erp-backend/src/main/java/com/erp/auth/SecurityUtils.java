package com.erp.auth;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/** Accès au companyId de l'utilisateur courant, dérivé côté serveur du JWT
 *  (jamais d'un paramètre fourni par le client) — voir JwtAuthFilter. */
public final class SecurityUtils {

    private SecurityUtils() {
    }

    public static Long currentCompanyId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null) {
            throw new IllegalStateException("Aucun contexte de sécurité actif");
        }
        if (auth.getDetails() instanceof TenantAuthenticationDetails details) {
            return details.companyId();
        }
        return null;
    }
}
