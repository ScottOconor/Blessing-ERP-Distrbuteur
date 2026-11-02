package com.erp.accounting.controller;

import com.erp.accounting.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/** Soldes des comptes tiers pour les tableaux de bord : chaque module ne lit que son côté. */
@RestController
@RequiredArgsConstructor
public class TiersBalanceController {

    private final ReportService reportService;

    @GetMapping("/api/sales/creances-tiers")
    public ResponseEntity<List<Map<String, Object>>> creances(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(reportService.getCreancesTiers(companyId));
    }

    @GetMapping("/api/purchases/dettes-tiers")
    public ResponseEntity<List<Map<String, Object>>> dettes(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(reportService.getDettesTiers(companyId));
    }
}
