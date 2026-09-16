package com.erp.audit.service;

import com.erp.audit.entity.AuditLog;
import com.erp.audit.repository.AuditLogRepository;
import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuditService {

    private final AuditLogRepository auditLogRepo;
    private final UserRepository     userRepo;

    /** Username du principal connecté, "système" si anonyme. */
    public String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getPrincipal()))
            return "système";
        return auth.getName();
    }

    /** Nom complet du principal connecté (fullName si dispo, sinon username). */
    public String getCurrentFullname() {
        String username = getCurrentUsername();
        if ("système".equals(username)) return "Système";
        return userRepo.findByUsername(username)
                .map(u -> u.getFullName() != null && !u.getFullName().isBlank()
                        ? u.getFullName() : u.getUsername())
                .orElse(username);
    }

    /**
     * Enregistre une entrée d'audit dans une transaction INDÉPENDANTE
     * (REQUIRES_NEW) pour que l'échec d'une opération métier n'efface pas
     * l'entrée, et inversement.
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(String entityType, Long entityId, String entityRef,
                    String action, String actionLabel,
                    String details, Long companyId) {
        try {
            AuditLog entry = AuditLog.builder()
                    .entityType(entityType)
                    .entityId(entityId)
                    .entityRef(entityRef)
                    .action(action)
                    .actionLabel(actionLabel)
                    .performedBy(getCurrentUsername())
                    .performedByFullname(getCurrentFullname())
                    .details(details)
                    .companyId(companyId)
                    .build();
            auditLogRepo.save(entry);
        } catch (Exception e) {
            log.error("Erreur AuditLog entityType={} entityId={} action={}: {}",
                    entityType, entityId, action, e.getMessage());
        }
    }

    /** Raccourci pour les actions sans détails supplémentaires. */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(String entityType, Long entityId, String entityRef,
                    String action, String actionLabel, Long companyId) {
        log(entityType, entityId, entityRef, action, actionLabel, null, companyId);
    }

    /** Construit un JSON de détails simple à partir d'une map clé/valeur. */
    public static String details(Map<String, Object> map) {
        if (map == null || map.isEmpty()) return null;
        StringBuilder sb = new StringBuilder("{");
        map.forEach((k, v) -> {
            sb.append("\"").append(k).append("\":\"")
              .append(v != null ? v.toString().replace("\"", "'") : "").append("\",");
        });
        if (sb.charAt(sb.length() - 1) == ',') sb.deleteCharAt(sb.length() - 1);
        sb.append("}");
        return sb.toString();
    }
}
