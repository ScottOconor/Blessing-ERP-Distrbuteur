package com.erp.audit.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "audit_logs", indexes = {
    @Index(name = "idx_audit_entity",   columnList = "entity_type, entity_id"),
    @Index(name = "idx_audit_company",  columnList = "company_id"),
    @Index(name = "idx_audit_operator", columnList = "performed_by"),
    @Index(name = "idx_audit_at",       columnList = "performed_at")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Type de l'entité (ex: SALE_INVOICE, PURCHASE_INVOICE, STOCK_PICKING, CAISSE_OPERATION, ACCOUNT_MOVE) */
    @Column(name = "entity_type", nullable = false, length = 60)
    private String entityType;

    /** ID de l'entité concernée */
    @Column(name = "entity_id", nullable = false)
    private Long entityId;

    /** Référence lisible de l'entité (numéro facture, nom caisse, etc.) */
    @Column(name = "entity_ref", length = 120)
    private String entityRef;

    /** Action effectuée (CREATED, CONFIRMED, CANCELLED, PAID, VALIDATED, REVERSED, POSTED, CLOTURE, etc.) */
    @Column(name = "action", nullable = false, length = 40)
    private String action;

    /** Label lisible de l'action */
    @Column(name = "action_label", length = 80)
    private String actionLabel;

    /** Username de l'opérateur */
    @Column(name = "performed_by", nullable = false, length = 100)
    private String performedBy;

    /** Nom complet de l'opérateur (si disponible) */
    @Column(name = "performed_by_fullname", length = 150)
    private String performedByFullname;

    @CreationTimestamp
    @Column(name = "performed_at", nullable = false, updatable = false)
    private LocalDateTime performedAt;

    /** Détails supplémentaires en JSON (ex: ancien état → nouveau état, montant, etc.) */
    @Column(name = "details", columnDefinition = "TEXT")
    private String details;

    @Column(name = "company_id")
    private Long companyId;
}
