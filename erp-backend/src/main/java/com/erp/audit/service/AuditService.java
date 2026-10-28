package com.erp.audit.service;

import com.erp.audit.entity.AuditLog;
import com.erp.audit.repository.AuditLogRepository;
import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.Map;

@Service
@Slf4j
public class AuditService {

    private final AuditLogRepository auditLogRepo;
    private final UserRepository     userRepo;
    private final TransactionTemplate requiresNew;

    public AuditService(AuditLogRepository auditLogRepo, UserRepository userRepo,
                        PlatformTransactionManager transactionManager) {
        this.auditLogRepo = auditLogRepo;
        this.userRepo = userRepo;
        this.requiresNew = new TransactionTemplate(transactionManager);
        this.requiresNew.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
    }

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
     *
     * La transaction est ouverte À L'INTÉRIEUR du try (TransactionTemplate) : avec
     * @Transactional sur la méthode, l'exception attrapée ici marquait la transaction en échec
     * et sa validation levait ensuite UnexpectedRollbackException chez l'appelant — l'échec de
     * l'audit faisait alors échouer l'opération métier (constaté : téléchargement de sauvegarde).
     */
    public void log(String entityType, Long entityId, String entityRef,
                    String action, String actionLabel,
                    String details, Long companyId) {
        try {
            requiresNew.executeWithoutResult(status -> {
                AuditLog entry = AuditLog.builder()
                        .entityType(entityType)
                        .entityId(entityId)
                        .entityRef(fit(entityRef, 120))
                        .action(action)
                        .actionLabel(fit(actionLabel, 80))
                        .performedBy(getCurrentUsername())
                        .performedByFullname(getCurrentFullname())
                        .details(details)
                        .companyId(companyId)
                        .build();
                auditLogRepo.save(entry);
            });
        } catch (Exception e) {
            log.error("Erreur AuditLog entityType={} entityId={} action={}: {}",
                    entityType, entityId, action, e.getMessage());
        }
    }

    /** Coupe un texte à la taille de sa colonne : un libellé trop long (ex. clôture d'exercice avec
     *  dates et montant) faisait échouer l'insertion et l'entrée d'audit disparaissait sans trace
     *  visible. Le texte complet doit aller dans details ; ceci n'est qu'un filet de sécurité. */
    static String fit(String value, int max) {
        if (value == null || value.length() <= max) return value;
        return value.substring(0, max - 1) + "…";
    }

    /** Raccourci pour les actions sans détails supplémentaires. */
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
