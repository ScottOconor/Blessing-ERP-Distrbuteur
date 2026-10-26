package com.erp.common.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/** Demande déjà reçue sous une clé Idempotency-Key, avec sa réponse (voir IdempotencyService). */
@Entity
@Table(name = "idempotency_records", indexes = @Index(name = "idx_idempotency_created", columnList = "created_at"))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class IdempotencyRecord {

    public enum Status { IN_PROGRESS, DONE }

    @Id
    @Column(name = "idem_key", length = 100)
    private String key;

    /** Méthode, chemin et utilisateur : une clé ne vaut que pour la demande qui l'a introduite. */
    @Column(nullable = false, length = 300)
    private String scope;

    /** Empreinte SHA-256 du contenu de la demande. */
    @Column(name = "request_hash", nullable = false, length = 64)
    private String requestHash;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private Status status;

    @Column(name = "http_status")
    private Integer httpStatus;

    @Column(name = "response_body", columnDefinition = "text")
    private String responseBody;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
}
