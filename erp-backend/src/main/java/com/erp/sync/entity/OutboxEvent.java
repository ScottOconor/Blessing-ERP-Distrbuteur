package com.erp.sync.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "sync_outbox_events", indexes = {
    @Index(name = "idx_outbox_status", columnList = "status"),
    @Index(name = "idx_outbox_created", columnList = "createdAt")
})
@Getter
@Setter
@NoArgsConstructor
public class OutboxEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String spokeId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, columnDefinition = "varchar(100)")
    private SyncEventType eventType;

    private String entityId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String payload;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OutboxStatus status = OutboxStatus.PENDING;

    private int retryCount = 0;

    /** Nombre de fois où cet événement a été remis en PENDING depuis FAILED par la reprise
     *  automatique (autoRequeueFailed) — contrairement à retryCount (remis à 0 à chaque
     *  requeue), celui-ci n'est JAMAIS réinitialisé : il sert à détecter un événement
     *  définitivement empoisonné (payload que le Hub ne pourra jamais accepter) qui, sans
     *  cette limite, boucle PENDING→FAILED indéfiniment toutes les 5 minutes. Une reprise
     *  manuelle (bouton "retry" côté UI) n'est pas concernée par cette limite.
     *  columnDefinition avec DEFAULT explicite : sans ça, l'ALTER TABLE généré par Hibernate
     *  (ddl-auto=update) sur une table sync_outbox_events déjà peuplée échoue ("la colonne
     *  contient des valeurs NULL"), faute de valeur de repli pour les lignes existantes. */
    @Column(nullable = false, columnDefinition = "integer not null default 0")
    private int autoRequeueCount = 0;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime lastAttemptAt;

    @Column(columnDefinition = "TEXT")
    private String errorMessage;
}
