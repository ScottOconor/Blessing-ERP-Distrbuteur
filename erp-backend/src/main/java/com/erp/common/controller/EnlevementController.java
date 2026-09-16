package com.erp.common.controller;

import com.erp.common.dto.EnlevementDTO;
import com.erp.common.dto.EnlevementRapportDTO;
import com.erp.common.service.EnlevementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/enlevements")
@RequiredArgsConstructor
public class EnlevementController {

    private final EnlevementService service;

    @GetMapping
    public ResponseEntity<List<EnlevementDTO>> getAll(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAll(companyId));
    }

    @PostMapping
    public ResponseEntity<EnlevementDTO> save(@Valid @RequestBody EnlevementDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/import")
    public ResponseEntity<List<EnlevementDTO>> importEnlevements(
            @RequestParam Long companyId,
            @RequestBody List<EnlevementService.EnlevementImportRow> rows) {
        return ResponseEntity.ok(service.importEnlevements(rows, companyId));
    }

    @GetMapping("/rapport")
    public ResponseEntity<List<EnlevementRapportDTO>> getRapport(
            @RequestParam Long companyId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateFrom,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateTo) {
        return ResponseEntity.ok(service.getRapport(companyId, dateFrom, dateTo));
    }

    @GetMapping("/invoice/{invoiceId}/costs")
    public ResponseEntity<List<EnlevementRapportDTO.Line>> getInvoiceCosts(
            @PathVariable Long invoiceId) {
        return ResponseEntity.ok(service.getInvoiceCosts(invoiceId));
    }
}
