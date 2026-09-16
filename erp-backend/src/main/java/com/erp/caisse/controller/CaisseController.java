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

    // ── Clôture ──

    @PostMapping("/{id}/cloturer")
    public CaisseSessionDTO cloturerCaisse(
            @PathVariable Long id,
            @RequestParam Long companyId,
            Principal principal) {
        String userName = principal != null ? principal.getName() : "système";
        return caisseService.cloturerCaisse(id, companyId, userName);
    }

    @PostMapping("/{id}/rouvrir")
    public CaisseDTO rouvrirCaisse(@PathVariable Long id) {
        return caisseService.rouvrirCaisse(id);
    }

    // ── Sessions ──

    @GetMapping("/{id}/sessions")
    public List<CaisseSessionDTO> getSessions(@PathVariable Long id) {
        return caisseService.getSessions(id);
    }

    // ── Brouillard ──

    @GetMapping("/{id}/brouillard")
    public BrouillardDTO getBrouillard(
            @PathVariable Long id,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return caisseService.getBrouillard(id, date);
    }
}
