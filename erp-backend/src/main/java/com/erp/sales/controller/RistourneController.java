package com.erp.sales.controller;

import com.erp.sales.dto.RistourneDTO;
import com.erp.sales.dto.RistournePaiementDTO;
import com.erp.sales.service.RistourneService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ristournes")
@RequiredArgsConstructor
public class RistourneController {

    private final RistourneService service;

    // ===== Configuration ristournes =====

    @GetMapping
    public ResponseEntity<List<RistourneDTO>> getAll(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAll(companyId));
    }

    @GetMapping("/partner/{partnerId}")
    public ResponseEntity<List<RistourneDTO>> getByPartner(
            @PathVariable Long partnerId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(service.getByPartner(partnerId, companyId));
    }

    @PostMapping
    public ResponseEntity<RistourneDTO> save(@RequestBody RistourneDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    // ===== Règlements ristournes =====

    @GetMapping("/paiements")
    public ResponseEntity<List<RistournePaiementDTO>> getAllPaiements(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAllPaiements(companyId));
    }

    @GetMapping("/paiements/{id}")
    public ResponseEntity<RistournePaiementDTO> getPaiement(@PathVariable Long id) {
        return ResponseEntity.ok(service.getPaiement(id));
    }

    @PostMapping("/paiements")
    public ResponseEntity<RistournePaiementDTO> savePaiement(@RequestBody RistournePaiementDTO dto) {
        return ResponseEntity.ok(service.savePaiement(dto));
    }

    @PostMapping("/paiements/{id}/confirm")
    public ResponseEntity<RistournePaiementDTO> confirmPaiement(@PathVariable Long id) {
        return ResponseEntity.ok(service.confirmPaiement(id));
    }

    @PostMapping("/paiements/{id}/cancel")
    public ResponseEntity<RistournePaiementDTO> cancelPaiement(@PathVariable Long id) {
        return ResponseEntity.ok(service.cancelPaiement(id));
    }

    // ===== Règlements groupés par client =====

    @GetMapping("/paiements/grouped")
    public ResponseEntity<List<RistourneService.PartnerGroup>> getGrouped(
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

    // ===== Import Excel =====

    @PostMapping("/import")
    public ResponseEntity<List<RistourneDTO>> importRistournes(
            @RequestParam Long companyId,
            @RequestBody List<RistourneService.RistourneImportRow> rows) {
        return ResponseEntity.ok(service.importRistournes(rows, companyId));
    }
}
