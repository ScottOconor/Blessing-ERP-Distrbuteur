package com.erp.helpdesk.controller;

import com.erp.helpdesk.service.HelpdeskService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Endpoints appelés par le Hub pour synchroniser les changements vers ce spoke.
 * Placés sous /api/sync/ pour contourner le filtre de permissions (bypass déjà configuré).
 */
@RestController
@RequestMapping("/api/sync/helpdesk")
@RequiredArgsConstructor
@Slf4j
public class HelpdeskSyncController {

    private final HelpdeskService helpdeskService;

    /** Hub notifie un changement de statut sur un ticket de ce spoke. */
    @PostMapping("/hub-status")
    public ResponseEntity<Void> hubStatusUpdate(@RequestBody Map<String, Object> payload) {
        try {
            Long spokeTicketId = Long.valueOf(payload.get("spokeTicketId").toString());
            String status = payload.get("status").toString();
            helpdeskService.hubStatusUpdate(spokeTicketId, status);
        } catch (Exception e) {
            log.warn("Hub status callback error: {}", e.getMessage());
        }
        return ResponseEntity.ok().build();
    }

    /** Hub pousse un commentaire vers ce spoke. */
    @PostMapping("/hub-comment")
    public ResponseEntity<Void> hubCommentReceived(@RequestBody Map<String, Object> payload) {
        try {
            Long spokeTicketId = Long.valueOf(payload.get("spokeTicketId").toString());
            String content = payload.get("content").toString();
            String author = payload.get("authorUsername").toString();
            helpdeskService.hubCommentReceived(spokeTicketId, content, author);
        } catch (Exception e) {
            log.warn("Hub comment callback error: {}", e.getMessage());
        }
        return ResponseEntity.ok().build();
    }
}
