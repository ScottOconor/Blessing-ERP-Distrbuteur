package com.erp.accounting.controller;

import com.erp.accounting.dto.ReportRequest;
import com.erp.accounting.service.ReportService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
@Slf4j
public class ReportController {

    private final ReportService reportService;

    // ===================== BALANCE GÉNÉRALE =====================

    @PostMapping("/general-balance/4cols")
    public ResponseEntity<Map<String, Object>> getGeneralBalance4Cols(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getGeneralBalance4Cols(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getJournalIds(),
                request.getDisplayAccount()
        );
        return ResponseEntity.ok(result);
    }

    @PostMapping("/general-balance/6cols")
    public ResponseEntity<Map<String, Object>> getGeneralBalance6Cols(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getGeneralBalance6Cols(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getJournalIds(),
                request.getDisplayAccount()
        );
        return ResponseEntity.ok(result);
    }

    // ===================== BALANCE DES TIERS =====================

    @PostMapping("/partner-balance/4cols")
    public ResponseEntity<Map<String, Object>> getPartnerBalance4Cols(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getPartnerBalance4Cols(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getResultSelection(),
                request.getPartnerIds()
        );
        return ResponseEntity.ok(result);
    }

    @PostMapping("/partner-balance/6cols")
    public ResponseEntity<Map<String, Object>> getPartnerBalance6Cols(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getPartnerBalance6Cols(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getResultSelection(),
                request.getPartnerIds()
        );
        return ResponseEntity.ok(result);
    }

    // ===================== GRAND LIVRE =====================

    @PostMapping("/grand-livre")
    public ResponseEntity<Map<String, Object>> getGrandLivre(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getGrandLivre(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getAccountIds()
        );
        return ResponseEntity.ok(result);
    }

    @PostMapping("/grand-livre-tiers")
    public ResponseEntity<Map<String, Object>> getGrandLivreTiers(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getGrandLivreTiers(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getResultSelection()
        );
        return ResponseEntity.ok(result);
    }

    // ===================== CASHBOOK =====================

    @PostMapping("/cashbook")
    public ResponseEntity<Map<String, Object>> getCashbook(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getCashbook(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getJournalIds()
        );
        return ResponseEntity.ok(result);
    }

    // ===================== BILAN OHADA =====================

    @PostMapping("/bilan")
    public ResponseEntity<Map<String, Object>> getBilan(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getBilanOhada(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getPeriodType(),
                request.getIncludeUnposted(),
                request.getComparisonEnabled()
        );
        return ResponseEntity.ok(result);
    }

    // ===================== COMPTE DE RÉSULTAT =====================

    @PostMapping("/compte-de-resultat")
    public ResponseEntity<Map<String, Object>> getCompteDeResultat(
            @Valid @RequestBody ReportRequest request) {
        Map<String, Object> result = reportService.getCompteDeResultat(
                request.getDateFrom(),
                request.getDateTo(),
                request.getCompanyId(),
                request.getMode()
        );
        return ResponseEntity.ok(result);
    }

    // ===================== SUIVI DETTES & CRÉANCES =====================

    @GetMapping("/suivi-tiers")
    public ResponseEntity<Map<String, Object>> getSuiviTiers(@RequestParam Long companyId) {
        return ResponseEntity.ok(reportService.getSuiviTiers(companyId));
    }
}
