package com.erp.sync.dto;

import com.erp.sync.entity.OutboxStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class OutboxEventDTO {
    Long          id;
    String        spokeId;
    String        eventType;
    String        eventModule;
    String        eventLabel;
    String        entityId;
    OutboxStatus  status;
    int           retryCount;
    LocalDateTime createdAt;
    LocalDateTime lastAttemptAt;
    String        errorMessage;
    /** Payload JSON brut — uniquement inclus sur l'endpoint /events/{id} */
    String        payload;
}
