package com.erp.audit.controller;

import com.erp.audit.dto.AuditLogDTO;
import com.erp.audit.entity.AuditLog;
import com.erp.audit.repository.AuditLogRepository;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/audit")
@RequiredArgsConstructor
public class AuditController {

    private final AuditLogRepository auditLogRepo;

    /** Historique complet d'une entité précise (ex: facture id=42). */
    @GetMapping("/entity")
    public ResponseEntity<List<AuditLogDTO>> forEntity(
            @RequestParam String entityType,
            @RequestParam Long   entityId) {

        List<AuditLog> logs = auditLogRepo
                .findByEntityTypeAndEntityIdOrderByPerformedAtDesc(entityType, entityId);
        return ResponseEntity.ok(logs.stream().map(this::toDTO).toList());
    }

    /** Recherche paginée sur une société (supervision globale). */
    @GetMapping("/search")
    public ResponseEntity<Page<AuditLogDTO>> search(
            @RequestParam Long companyId,
            @RequestParam(required = false) String operator,
            @RequestParam(required = false) String entityType,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "50") int size) {

        LocalDateTime fromDt = from != null ? from.atStartOfDay() : null;
        LocalDateTime toDt   = to   != null ? to.plusDays(1).atStartOfDay() : null;
        String op  = operator   != null && !operator.isBlank()   ? operator   : null;
        String et  = entityType != null && !entityType.isBlank() ? entityType : null;

        Specification<AuditLog> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(cb.equal(root.get("companyId"), companyId));
            if (op     != null) predicates.add(cb.equal(root.get("performedBy"), op));
            if (et     != null) predicates.add(cb.equal(root.get("entityType"),  et));
            if (fromDt != null) predicates.add(cb.greaterThanOrEqualTo(root.get("performedAt"), fromDt));
            if (toDt   != null) predicates.add(cb.lessThanOrEqualTo(root.get("performedAt"),    toDt));
            query.orderBy(cb.desc(root.get("performedAt")));
            return cb.and(predicates.toArray(new Predicate[0]));
        };

        Page<AuditLog> raw = auditLogRepo.findAll(spec, PageRequest.of(page, size));

        return ResponseEntity.ok(raw.map(this::toDTO));
    }

    private AuditLogDTO toDTO(AuditLog a) {
        return AuditLogDTO.builder()
                .id(a.getId())
                .entityType(a.getEntityType())
                .entityId(a.getEntityId())
                .entityRef(a.getEntityRef())
                .action(a.getAction())
                .actionLabel(a.getActionLabel())
                .performedBy(a.getPerformedBy())
                .performedByFullname(a.getPerformedByFullname())
                .performedAt(a.getPerformedAt())
                .details(a.getDetails())
                .companyId(a.getCompanyId())
                .build();
    }
}
