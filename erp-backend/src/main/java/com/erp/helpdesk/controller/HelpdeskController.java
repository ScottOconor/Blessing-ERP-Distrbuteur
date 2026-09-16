package com.erp.helpdesk.controller;

import com.erp.helpdesk.dto.TicketCommentDTO;
import com.erp.helpdesk.dto.TicketDTO;
import com.erp.helpdesk.dto.TicketStatsDTO;
import com.erp.helpdesk.service.HelpdeskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/helpdesk")
@RequiredArgsConstructor
public class HelpdeskController {

    private final HelpdeskService helpdeskService;

    @GetMapping("/tickets")
    public ResponseEntity<List<TicketDTO>> getTickets(
            @RequestParam("companyId") Long companyId,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String assignedTo,
            Authentication authentication) {
        boolean isAdmin = authentication.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_SUPER_ADMIN")
                        || a.getAuthority().equals("ROLE_ADMIN"));
        String createdBy = isAdmin ? null : authentication.getName();
        return ResponseEntity.ok(helpdeskService.getTickets(companyId, status, assignedTo, createdBy));
    }

    @GetMapping("/tickets/{id}")
    public ResponseEntity<TicketDTO> getTicket(@PathVariable Long id) {
        return ResponseEntity.ok(helpdeskService.getTicket(id));
    }

    @PostMapping("/tickets")
    public ResponseEntity<TicketDTO> createTicket(@Valid @RequestBody TicketDTO dto) {
        return ResponseEntity.ok(helpdeskService.createTicket(dto));
    }

    @PutMapping("/tickets/{id}")
    // Pas de @Valid ici : updateTicket applique une mise à jour PARTIELLE (chaque champ n'est
    // modifié que s'il est non-null dans le corps de la requête) — @NotBlank sur title rejetterait
    // à tort un appel qui ne veut changer QUE la priorité/catégorie sans renvoyer le titre.
    public ResponseEntity<TicketDTO> updateTicket(@PathVariable Long id, @RequestBody TicketDTO dto) {
        return ResponseEntity.ok(helpdeskService.updateTicket(id, dto));
    }

    @PostMapping("/tickets/{id}/comments")
    public ResponseEntity<TicketCommentDTO> addComment(
            @PathVariable Long id,
            @RequestBody TicketCommentDTO dto) {
        return ResponseEntity.ok(helpdeskService.addComment(id, dto));
    }

    @GetMapping("/stats")
    public ResponseEntity<TicketStatsDTO> getStats(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(helpdeskService.getStats(companyId));
    }
}
