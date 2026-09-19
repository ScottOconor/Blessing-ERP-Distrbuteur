package com.erp.sales.controller;

import com.erp.sales.dto.RistourneDTO;
import com.erp.sales.dto.RistournePaiementDTO;
import com.erp.sales.service.RistourneService;
import com.erp.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ristournes")
@RequiredArgsConstructor
public class RistourneController {

    private final RistourneService service;
    private final SalesService salesService;

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
    public ResponseEntity<StreamingResponseBody> getAllPaiements(
            @RequestParam Long companyId,
            @RequestParam(required = false) String type) {
        StreamingResponseBody body = out -> service.streamAllPaiements(companyId, type, out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
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

    // ===== Règlements groupés par client (pour génération avoirs) =====

    @GetMapping("/paiements/grouped")
    public ResponseEntity<List<RistourneService.PartnerGroup>> getGrouped(
            @RequestParam Long companyId,
            @RequestParam(required = false) String type) {
        return ResponseEntity.ok(service.getGroupedPaiements(companyId, type));
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

    // ===== Génération groupée par trimestre / période =====

    @PostMapping("/paiements/generate-by-quarter")
    public ResponseEntity<Map<String, Object>> generateByQuarter(@RequestBody Map<String, Object> req) {
        int quarter   = Integer.parseInt(req.get("quarter").toString());
        int year      = Integer.parseInt(req.get("year").toString());
        Long companyId = Long.valueOf(req.get("companyId").toString());
        return ResponseEntity.ok(service.generateByQuarter(quarter, year, companyId));
    }

    @PostMapping("/paiements/generate-by-period")
    public ResponseEntity<Map<String, Object>> generateByPeriod(@RequestBody Map<String, Object> req) {
        LocalDate dateStart = LocalDate.parse(req.get("dateStart").toString());
        LocalDate dateEnd   = LocalDate.parse(req.get("dateEnd").toString());
        Long companyId      = Long.valueOf(req.get("companyId").toString());
        return ResponseEntity.ok(service.generateByPeriod(dateStart, dateEnd, companyId));
    }

    // ===== Rapport période (depuis les factures) =====

    @GetMapping("/rapport")
    public ResponseEntity<List<RistournePaiementDTO>> getRapport(
            @RequestParam Long companyId,
            @RequestParam String dateFrom,
            @RequestParam String dateTo) {
        return ResponseEntity.ok(salesService.getRapportRistournesFromInvoices(
                LocalDate.parse(dateFrom), LocalDate.parse(dateTo), companyId));
    }

    // ===== Import Excel =====

    @PostMapping("/import")
    public ResponseEntity<List<RistourneDTO>> importRistournes(
            @RequestParam Long companyId,
            @RequestBody List<RistourneService.RistourneImportRow> rows) {
        return ResponseEntity.ok(service.importRistournes(rows, companyId));
    }
}
