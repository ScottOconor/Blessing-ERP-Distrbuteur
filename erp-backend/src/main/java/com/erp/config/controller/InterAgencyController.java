package com.erp.config.controller;

import com.erp.config.service.HubConfigService;
import com.erp.config.service.InterAgencyKeyService;
import com.erp.stock.dto.InterAgencyTransferPayload;
import com.erp.stock.service.InterAgencyReceptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class InterAgencyController {

    private final InterAgencyKeyService       keyService;
    private final InterAgencyReceptionService receptionService;
    private final HubConfigService            hubConfigService;

    // ── Endpoints inter-agences (protégés par X-Api-Key via filtre) ───────

    @GetMapping("/api/inter-agency/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of("status", "ok", "service", "Blessing ERP Distributeurs"));
    }

    /**
     * Reçoit une notification d'expédition d'un spoke distant.
     * Crée automatiquement une réception en attente dans le système local.
     */
    @PostMapping("/api/inter-agency/receptions")
    public ResponseEntity<Map<String, String>> receiveTransfer(@RequestBody InterAgencyTransferPayload payload) {
        String receptionName = receptionService.createPendingReception(payload);
        return ResponseEntity.ok(Map.of("status", "created", "receptionRef", receptionName));
    }

    /**
     * Callback reçu du destinataire après confirmation de sa réception.
     * Marque l'expédition locale (côté expéditeur) comme done.
     * La ref est dans le corps car IC/XXXXX contient un '/' qui casserait le path.
     */
    @PostMapping("/api/inter-agency/expeditions/confirm")
    public ResponseEntity<Map<String, String>> confirmExpedition(@RequestBody Map<String, String> body) {
        String ref = body.get("expeditionRef");
        receptionService.confirmExpeditionByRef(ref);
        return ResponseEntity.ok(Map.of("status", "confirmed", "expeditionRef", ref != null ? ref : ""));
    }

    /**
     * Callback reçu de l'expéditeur après annulation de son expédition.
     * Annule la réception en attente côté destinataire.
     */
    @PostMapping("/api/inter-agency/receptions/cancel")
    public ResponseEntity<Map<String, String>> cancelReception(@RequestBody Map<String, String> body) {
        String ref = body.get("expeditionRef");
        receptionService.cancelReceptionByExpeditionRef(ref);
        return ResponseEntity.ok(Map.of("status", "cancelled", "expeditionRef", ref != null ? ref : ""));
    }

    /**
     * Callback reçu du destinataire après annulation de SA réception (sens inverse du précédent).
     * Marque l'expédition locale (côté émetteur) comme annulée et restitue le stock.
     */
    @PostMapping("/api/inter-agency/expeditions/cancel")
    public ResponseEntity<Map<String, String>> cancelExpedition(@RequestBody Map<String, String> body) {
        String ref = body.get("expeditionRef");
        receptionService.cancelExpeditionByRef(ref);
        return ResponseEntity.ok(Map.of("status", "cancelled", "expeditionRef", ref != null ? ref : ""));
    }

    // ── Endpoints admin (JWT classique) ───────────────────────────────────

    @GetMapping("/api/config/inter-agency-key")
    public ResponseEntity<Map<String, String>> getKey() {
        return ResponseEntity.ok(Map.of("apiKey", keyService.getOrCreateKey()));
    }

    @PostMapping("/api/config/inter-agency-key/regenerate")
    public ResponseEntity<Map<String, String>> regenerate() {
        return ResponseEntity.ok(Map.of("apiKey", keyService.regenerate()));
    }

    @GetMapping("/api/config/hub-url")
    public ResponseEntity<Map<String, String>> getHubUrl() {
        return ResponseEntity.ok(Map.of("hubUrl", hubConfigService.getHubUrl()));
    }

    @PutMapping("/api/config/hub-url")
    public ResponseEntity<Map<String, String>> setHubUrl(@RequestBody Map<String, String> body) {
        hubConfigService.setHubUrl(body.get("hubUrl"));
        return ResponseEntity.ok(Map.of("hubUrl", hubConfigService.getHubUrl()));
    }
}
