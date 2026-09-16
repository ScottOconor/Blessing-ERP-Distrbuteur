package com.erp.helpdesk.service;

import com.erp.audit.service.AuditService;
import com.erp.common.service.TenantGuard;
import com.erp.config.service.HubConfigService;
import com.erp.helpdesk.dto.TicketCommentDTO;
import com.erp.helpdesk.dto.TicketDTO;
import com.erp.helpdesk.dto.TicketStatsDTO;
import com.erp.helpdesk.entity.Ticket;
import com.erp.helpdesk.entity.TicketComment;
import com.erp.helpdesk.entity.TicketPriority;
import com.erp.helpdesk.entity.TicketStatus;
import com.erp.helpdesk.repository.TicketCommentRepository;
import com.erp.helpdesk.repository.TicketRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class HelpdeskService {

    private final TicketRepository ticketRepo;
    private final TicketCommentRepository commentRepo;
    private final AuditService auditService;
    private final HubConfigService hubConfigService;
    private final TenantGuard tenantGuard;

    @Value("${sync.spoke.id:SPOKE}")
    private String spokeId;

    @Value("${sync.spoke.name:Spoke}")
    private String spokeName;

    @Value("${server.port:8085}")
    private int serverPort;

    @Value("${sync.spoke.public-url:}")
    private String spokePublicUrl;

    private String getSpokeCallbackUrl() {
        if (spokePublicUrl != null && !spokePublicUrl.isBlank()) return spokePublicUrl;
        return "http://localhost:" + serverPort;
    }

    // ── Lecture ──────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<TicketDTO> getTickets(Long companyId, String status, String assignedTo, String createdBy) {
        tenantGuard.check(companyId);
        List<Ticket> tickets;
        if (createdBy != null) {
            if (status != null) {
                tickets = ticketRepo.findByCompanyIdAndStatusAndCreatedByUsernameOrderByCreatedAtDesc(
                        companyId, TicketStatus.valueOf(status), createdBy);
            } else {
                tickets = ticketRepo.findByCompanyIdAndCreatedByUsernameOrderByCreatedAtDesc(companyId, createdBy);
            }
        } else if (status != null && assignedTo != null) {
            tickets = ticketRepo.findByCompanyIdAndStatusAndAssignedToUsernameOrderByCreatedAtDesc(
                    companyId, TicketStatus.valueOf(status), assignedTo);
        } else if (status != null) {
            tickets = ticketRepo.findByCompanyIdAndStatusOrderByCreatedAtDesc(
                    companyId, TicketStatus.valueOf(status));
        } else if (assignedTo != null) {
            tickets = ticketRepo.findByCompanyIdAndAssignedToUsernameOrderByCreatedAtDesc(companyId, assignedTo);
        } else {
            tickets = ticketRepo.findByCompanyIdOrderByCreatedAtDesc(companyId);
        }
        return tickets.stream().map(t -> toDTO(t, false)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public TicketDTO getTicket(Long id) {
        Ticket t = ticketRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Ticket introuvable : " + id));
        tenantGuard.check(t.getCompanyId());
        return toDTO(t, true);
    }

    // ── Création ─────────────────────────────────────────────────────────────

    public TicketDTO createTicket(TicketDTO dto) {
        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance pour
        // choisir SOUS QUELLE société le ticket est créé.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();
        String number = generateNumber(companyId);
        Ticket t = Ticket.builder()
                .ticketNumber(number)
                .title(dto.getTitle())
                .description(dto.getDescription())
                .status(dto.getStatus() != null ? dto.getStatus() : TicketStatus.OUVERT)
                .priority(dto.getPriority() != null ? dto.getPriority() : TicketPriority.MOYENNE)
                .category(dto.getCategory())
                .createdByUsername(dto.getCreatedByUsername())
                .assignedToUsername(null)
                .companyId(companyId)
                .build();
        Ticket saved = ticketRepo.save(t);
        auditService.log("TICKET", saved.getId(), saved.getTicketNumber(),
                "CREATED", "Ticket créé",
                AuditService.details(java.util.Map.of("titre", saved.getTitle(), "priorité", saved.getPriority().name())),
                saved.getCompanyId());
        pushToHub(saved);
        return toDTO(saved, false);
    }

    // ── Modification ──────────────────────────────────────────────────────────

    public TicketDTO updateTicket(Long id, TicketDTO dto) {
        Ticket t = ticketRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Ticket introuvable : " + id));
        tenantGuard.check(t.getCompanyId());
        if (dto.getTitle() != null) t.setTitle(dto.getTitle());
        if (dto.getDescription() != null) t.setDescription(dto.getDescription());
        if (dto.getPriority() != null) t.setPriority(dto.getPriority());
        if (dto.getCategory() != null) t.setCategory(dto.getCategory());
        Ticket updatedTicket = ticketRepo.save(t);
        auditService.log("TICKET", updatedTicket.getId(), updatedTicket.getTicketNumber(),
                "UPDATED", "Ticket mis à jour", updatedTicket.getCompanyId());
        return toDTO(updatedTicket, false);
    }

    /** Mise à jour de statut reçue depuis le Hub — pas de push retour pour éviter la boucle. */
    public void hubStatusUpdate(Long spokeTicketId, String status) {
        applyStatus(spokeTicketId, status);
    }

    private Ticket applyStatus(Long id, String statusStr) {
        Ticket t = ticketRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Ticket introuvable : " + id));
        TicketStatus newStatus = TicketStatus.valueOf(statusStr);
        t.setStatus(newStatus);
        if (newStatus == TicketStatus.RESOLU || newStatus == TicketStatus.FERME) {
            t.setResolvedAt(LocalDateTime.now());
        } else {
            t.setResolvedAt(null);
        }
        return ticketRepo.save(t);
    }

    // ── Commentaires ──────────────────────────────────────────────────────────

    public TicketCommentDTO addComment(Long ticketId, TicketCommentDTO dto) {
        Ticket ticket = ticketRepo.findById(ticketId)
                .orElseThrow(() -> new EntityNotFoundException("Ticket introuvable : " + ticketId));
        tenantGuard.check(ticket.getCompanyId());
        if (ticket.getStatus() == TicketStatus.FERME) {
            throw new IllegalStateException("Impossible de commenter un ticket clôturé.");
        }
        TicketComment c = TicketComment.builder()
                .ticketId(ticketId)
                .content(dto.getContent())
                .authorUsername(dto.getAuthorUsername())
                .internal(dto.isInternal())
                .fromHub(false)
                .build();
        TicketComment saved = commentRepo.save(c);
        auditService.log("TICKET", ticketId, ticket.getTicketNumber(),
                "COMMENT_ADDED", "Commentaire ajouté", ticket.getCompanyId());
        if (!saved.isInternal()) pushCommentToHub(ticketId, saved);
        return toCommentDTO(saved);
    }

    /** Commentaire reçu depuis le Hub — sauvegardé avec fromHub=true, pas de renvoi au Hub. */
    public TicketCommentDTO hubCommentReceived(Long spokeTicketId, String content, String author) {
        if (!ticketRepo.existsById(spokeTicketId))
            throw new EntityNotFoundException("Ticket introuvable : " + spokeTicketId);
        TicketComment c = TicketComment.builder()
                .ticketId(spokeTicketId)
                .content(content)
                .authorUsername(author)
                .internal(false)
                .fromHub(true)
                .build();
        return toCommentDTO(commentRepo.save(c));
    }

    // ── Stats ─────────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public TicketStatsDTO getStats(Long companyId) {
        tenantGuard.check(companyId);
        return TicketStatsDTO.builder()
                .totalOuvert(ticketRepo.countByCompanyIdAndStatus(companyId, TicketStatus.OUVERT))
                .totalEnCours(ticketRepo.countByCompanyIdAndStatus(companyId, TicketStatus.EN_COURS))
                .totalResolu(ticketRepo.countByCompanyIdAndStatus(companyId, TicketStatus.RESOLU))
                .totalFerme(ticketRepo.countByCompanyIdAndStatus(companyId, TicketStatus.FERME))
                .totalCritique(ticketRepo.findByCompanyIdOrderByCreatedAtDesc(companyId).stream()
                        .filter(t -> t.getPriority() == TicketPriority.CRITIQUE
                                && t.getStatus() != TicketStatus.FERME
                                && t.getStatus() != TicketStatus.RESOLU)
                        .count())
                .totalHaute(ticketRepo.findByCompanyIdOrderByCreatedAtDesc(companyId).stream()
                        .filter(t -> t.getPriority() == TicketPriority.HAUTE
                                && t.getStatus() != TicketStatus.FERME
                                && t.getStatus() != TicketStatus.RESOLU)
                        .count())
                .build();
    }

    // ── Synchro Hub ───────────────────────────────────────────────────────────

    private void pushToHub(Ticket t) {
        String hubUrl = hubConfigService.getHubUrl();
        if (hubUrl == null || hubUrl.isBlank()) return;
        new Thread(() -> {
            try {
                Map<String, Object> payload = new HashMap<>();
                payload.put("spokeId", spokeId);
                payload.put("spokeName", spokeName);
                payload.put("spokeTicketId", t.getId());
                payload.put("spokeCallbackUrl", getSpokeCallbackUrl());
                payload.put("ticketNumber", t.getTicketNumber());
                payload.put("title", t.getTitle());
                payload.put("description", t.getDescription());
                payload.put("status", t.getStatus().name());
                payload.put("priority", t.getPriority().name());
                payload.put("category", t.getCategory() != null ? t.getCategory().name() : "INCIDENT");
                payload.put("createdByUsername", t.getCreatedByUsername());
                payload.put("companyId", t.getCompanyId());
                new RestTemplate().postForObject(hubUrl + "/api/hub/helpdesk/spoke-push", payload, Object.class);
            } catch (Exception e) {
                log.warn("Hub push failed (ticket {}): {}", t.getTicketNumber(), e.getMessage());
            }
        }).start();
    }

    private void pushCommentToHub(Long ticketId, TicketComment c) {
        String hubUrl = hubConfigService.getHubUrl();
        if (hubUrl == null || hubUrl.isBlank()) return;
        new Thread(() -> {
            try {
                Map<String, Object> payload = new HashMap<>();
                payload.put("spokeId", spokeId);
                payload.put("spokeTicketId", ticketId);
                payload.put("content", c.getContent());
                payload.put("authorUsername", c.getAuthorUsername());
                new RestTemplate().postForObject(hubUrl + "/api/hub/helpdesk/spoke-comment", payload, Object.class);
            } catch (Exception e) {
                log.warn("Hub comment push failed (ticket {}): {}", ticketId, e.getMessage());
            }
        }).start();
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private String generateNumber(Long companyId) {
        long count = ticketRepo.countByCompanyId(companyId) + 1;
        String year = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy"));
        return String.format("HD-%s-%04d", year, count);
    }

    private TicketDTO toDTO(Ticket t, boolean withComments) {
        TicketDTO dto = TicketDTO.builder()
                .id(t.getId())
                .ticketNumber(t.getTicketNumber())
                .title(t.getTitle())
                .description(t.getDescription())
                .status(t.getStatus())
                .priority(t.getPriority())
                .category(t.getCategory())
                .createdByUsername(t.getCreatedByUsername())
                .assignedToUsername(t.getAssignedToUsername())
                .companyId(t.getCompanyId())
                .createdAt(t.getCreatedAt())
                .updatedAt(t.getUpdatedAt())
                .resolvedAt(t.getResolvedAt())
                .build();
        if (withComments) {
            dto.setComments(commentRepo.findByTicketIdOrderByCreatedAtAsc(t.getId())
                    .stream().map(this::toCommentDTO).collect(Collectors.toList()));
        }
        return dto;
    }

    private TicketCommentDTO toCommentDTO(TicketComment c) {
        return TicketCommentDTO.builder()
                .id(c.getId())
                .ticketId(c.getTicketId())
                .content(c.getContent())
                .authorUsername(c.getAuthorUsername())
                .internal(c.isInternal())
                .fromHub(c.isFromHub())
                .createdAt(c.getCreatedAt())
                .build();
    }
}
