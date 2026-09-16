package com.erp.common.service;

import com.erp.auth.SecurityUtils;
import com.erp.config.permission.PermissionService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Objects;

/**
 * Vérifie qu'une entité chargée par id appartient bien à la société de l'utilisateur
 * courant, avant toute lecture/écriture/suppression — empêche l'IDOR cross-société.
 * Les rôles privilégiés (SUPER_ADMIN/ADMIN) sont exemptés, comme pour PermissionFilter
 * (voir PermissionService.isPrivileged), car ce sont eux qui gèrent la société avant
 * même sa création (bootstrap) et sont déjà de confiance totale dans ce système.
 */
@Component
@RequiredArgsConstructor
public class TenantGuard {

    private final PermissionService permissionService;

    /** Lève EntityNotFoundException (404, pas 403) si entityCompanyId ne correspond pas
     *  à la société de l'utilisateur courant — évite de confirmer l'existence de la
     *  ressource à un attaquant qui n'a pas le droit d'y accéder. */
    public void check(Long entityCompanyId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        // Authentication == null (littéralement, pas le principal "anonymous" que
        // AnonymousAuthenticationFilter attache à toute requête HTTP non authentifiée) ne peut
        // provenir que d'un appel interne hors requête HTTP (scheduler, job de synchro...) — la
        // chaîne de filtres Spring Security garantit qu'une vraie requête externe porte toujours
        // une Authentication non-null (authentifiée ou anonyme). Un tel appel est par construction
        // interne à l'instance et de confiance : lui appliquer le cloisonnement par société casserait
        // les traitements batch qui itèrent légitimement sur toutes les sociétés (ex : le calcul de
        // marges du snapshot horaire, qui appelle SalesStatsService.getStats() par société).
        if (auth == null) {
            return;
        }
        if (permissionService.isPrivileged(auth)) {
            return;
        }
        Long currentCompanyId = SecurityUtils.currentCompanyId();
        if (!Objects.equals(entityCompanyId, currentCompanyId)) {
            throw new EntityNotFoundException("Ressource introuvable");
        }
    }
}
