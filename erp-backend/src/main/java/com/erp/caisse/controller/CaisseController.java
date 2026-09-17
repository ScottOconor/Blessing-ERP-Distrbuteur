package com.erp.caisse.controller;

import com.erp.caisse.dto.*;
import com.erp.caisse.entity.OperationType;
import com.erp.caisse.service.CaisseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/caisses")
@RequiredArgsConstructor
public class CaisseController {

    private final CaisseService caisseService;

    // ── Caisses CRUD ──

    @GetMapping
    public List<CaisseDTO> getCaisses(@RequestParam Long companyId) {
        return caisseService.getCaisses(companyId);
    }

    @GetMapping("/{id}")
    public CaisseDTO getCaisse(@PathVariable Long id) {
        return caisseService.getCaisse(id);
    }

    @PostMapping
    public CaisseDTO createCaisse(@RequestBody @Valid CaisseDTO dto) {
        return caisseService.createCaisse(dto);
    }

    @PutMapping("/{id}")
    public CaisseDTO updateCaisse(@PathVariable Long id, @RequestBody @Valid CaisseDTO dto) {
        return caisseService.updateCaisse(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCaisse(@PathVariable Long id) {
        caisseService.deleteCaisse(id);
        return ResponseEntity.noContent().build();
    }

    // ── Dashboard ──

    @GetMapping("/dashboard")
    public List<CaisseDTO> getDashboard(@RequestParam Long companyId) {
        return caisseService.getDashboard(companyId);
    }

    // ── Opérations ──

    @GetMapping("/{id}/operations")
    public List<CaisseOperationDTO> getOperations(
            @PathVariable Long id,
            @RequestParam Long companyId,
            @RequestParam(required = false) OperationType type) {
        return caisseService.getOperations(id, companyId, type);
    }

    @GetMapping("/operations")
    public List<CaisseOperationDTO> getAllOperations(
            @RequestParam Long companyId,
            @RequestParam(required = false) OperationType type) {
        return caisseService.getAllOperations(companyId, type);
    }

    @PostMapping("/operations")
    public CaisseOperationDTO addOperation(
            @RequestBody @Valid AddOperationRequest req,
            Principal principal) {
        String userName = principal != null ? principal.getName() : "système";
        return caisseService.addOperation(req, userName);
    }

    // ── Ouverture / Clôture ──

    @PostMapping("/{id}/ouvrir")
    public CaisseSessionDTO ouvrirSession(
            @PathVariable Long id,
            @RequestBody(required = false) OuvertureCaisseRequest req,
            Principal principal) {
        String userName = principal != null ? principal.getName() : "système";
        return caisseService.ouvrirSession(id, req != null ? req : OuvertureCaisseRequest.builder().build(), userName);
    }

    @PutMapping("/{id}/cloturer")
    public CaisseSessionDTO cloturerCaisse(
            @PathVariable Long id,
            @RequestParam Long companyId,
            @RequestBody(required = false) ClotureCaisseRequest req,
            Principal principal) {
        String userName = principal != null ? principal.getName() : "système";
        return caisseService.cloturerCaisse(id, companyId, req, userName);
    }

    @PostMapping("/{id}/rouvrir")
    public CaisseDTO rouvrirCaisse(@PathVariable Long id) {
        return caisseService.rouvrirCaisse(id);
    }

    // ── Coupures ──

    @GetMapping("/denominations")
    public List<CashDenominationDTO> getDenominations(@RequestParam Long companyId) {
        return caisseService.getDenominations(companyId);
    }

    @PostMapping("/denominations")
    public CashDenominationDTO createDenomination(@RequestBody CashDenominationDTO dto) {
        return caisseService.createDenomination(dto);
    }

    @PostMapping("/denominations/seed-defaults")
    public List<CashDenominationDTO> seedDefaultDenominations(@RequestParam Long companyId) {
        caisseService.seedDefaultDenominations(companyId);
        return caisseService.getDenominations(companyId);
    }

    @PutMapping("/denominations/{id}")
    public CashDenominationDTO updateDenomination(@PathVariable Long id, @RequestBody CashDenominationDTO dto) {
        return caisseService.updateDenomination(id, dto);
    }

    @DeleteMapping("/denominations/{id}")
    public ResponseEntity<Void> deleteDenomination(@PathVariable Long id) {
        caisseService.deleteDenomination(id);
        return ResponseEntity.noContent().build();
    }

    // ── Sessions ──

    @GetMapping("/{id}/sessions")
    public List<CaisseSessionDTO> getSessions(@PathVariable Long id) {
        return caisseService.getSessions(id);
    }

    @GetMapping("/{id}/session-active")
    public CaisseSessionDTO getActiveSession(@PathVariable Long id) {
        return caisseService.getActiveSessionForCaisse(id);
    }

    // ── Rapports ──

    @GetMapping("/sessions/{sessionId}/rapport-cloture")
    public RapportClotureDTO getRapportCloture(@PathVariable Long sessionId) {
        return caisseService.getRapportCloture(sessionId);
    }

    @GetMapping("/rapport-consolide")
    public RapportConsolideDTO getRapportConsolide(
            @RequestParam Long companyId,
            @RequestParam(required = false) List<Long> caisseIds,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateFrom,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateTo) {
        return caisseService.getRapportConsolide(caisseIds, dateFrom, dateTo, companyId);
    }

    // ── Brouillard ──

    @GetMapping("/{id}/brouillard")
    public BrouillardDTO getBrouillard(
            @PathVariable Long id,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return caisseService.getBrouillard(id, date);
    }
}
