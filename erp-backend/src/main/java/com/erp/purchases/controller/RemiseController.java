package com.erp.purchases.controller;

import com.erp.purchases.dto.RemiseDTO;
import com.erp.purchases.dto.RemisePaiementDTO;
import com.erp.purchases.service.RemiseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/remises")
@RequiredArgsConstructor
public class RemiseController {

    private final RemiseService service;

    // ===== Configuration remises =====

    @GetMapping
    public ResponseEntity<List<RemiseDTO>> getAll(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAll(companyId));
    }

    @GetMapping("/partner/{partnerId}")
    public ResponseEntity<List<RemiseDTO>> getByPartner(
            @PathVariable Long partnerId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(service.getByPartner(partnerId, companyId));
    }

    @PostMapping
    public ResponseEntity<RemiseDTO> save(@RequestBody RemiseDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    // ===== Règlements remises =====

    @GetMapping("/paiements")
    public ResponseEntity<List<RemisePaiementDTO>> getAllPaiements(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAllPaiements(companyId));
    }

    @GetMapping("/paiements/{id}")
    public ResponseEntity<RemisePaiementDTO> getPaiement(@PathVariable Long id) {
        return ResponseEntity.ok(service.getPaiement(id));
    }

    @PostMapping("/import")
    public ResponseEntity<java.util.Map<String, Object>> importRemises(
            @RequestBody java.util.List<RemiseService.RemiseImportRow> rows,
            @RequestParam Long companyId) {
        int count = service.importRemises(rows, companyId);
        return ResponseEntity.ok(java.util.Map.of("imported", count));
    }

    @PostMapping("/paiements")
    public ResponseEntity<RemisePaiementDTO> savePaiement(@RequestBody RemisePaiementDTO dto) {
        return ResponseEntity.ok(service.savePaiement(dto));
    }

    @PostMapping("/paiements/{id}/confirm")
    public ResponseEntity<RemisePaiementDTO> confirmPaiement(@PathVariable Long id) {
        return ResponseEntity.ok(service.confirmPaiement(id));
    }

    @PostMapping("/paiements/{id}/cancel")
    public ResponseEntity<RemisePaiementDTO> cancelPaiement(@PathVariable Long id) {
        return ResponseEntity.ok(service.cancelPaiement(id));
    }

    // ===== Règlements groupés par fournisseur =====

    @GetMapping("/paiements/grouped")
    public ResponseEntity<List<RemiseService.PartnerGroup>> getGrouped(
            @RequestParam Long companyId) {
        return ResponseEntity.ok(service.getGroupedPaiements(companyId));
    }

    @PostMapping("/paiements/generate-facture")
    public ResponseEntity<Map<String, Object>> generateFacture(
            @RequestBody Map<String, Object> req) {
        Long companyId = Long.valueOf(req.get("companyId").toString());
        @SuppressWarnings("unchecked")
        List<Long> ids = ((List<Number>) req.get("paiementIds"))
                .stream().map(Number::longValue).toList();
        return ResponseEntity.ok(service.generateFacture(ids, companyId));
    }
}
