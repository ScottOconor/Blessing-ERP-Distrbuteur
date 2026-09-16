package com.erp.audit.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data @Builder
public class AuditLogDTO {
    Long          id;
    String        entityType;
    Long          entityId;
    String        entityRef;
    String        action;
    String        actionLabel;
    String        performedBy;
    String        performedByFullname;
    LocalDateTime performedAt;
    String        details;
    Long          companyId;
}
