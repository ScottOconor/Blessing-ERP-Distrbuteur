package com.erp.sales.controller;

import com.erp.sales.dto.SalesStatsRequest;
import com.erp.sales.dto.SalesStatsResponse;
import com.erp.sales.service.SalesStatsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sales/stats")
@RequiredArgsConstructor
public class SalesStatsController {

    private final SalesStatsService statsService;

    /** État Commercial — Qty, CA HT, CA TTC par client/produit */
    @PostMapping("/etat-commercial")
    public ResponseEntity<SalesStatsResponse> getEtatCommercial(
            @RequestBody SalesStatsRequest req) {
        return ResponseEntity.ok(statsService.getStats(req));
    }

    /** Rapport Consolidé — même données + remise et prix moyen */
    @PostMapping("/rapport-consolide")
    public ResponseEntity<SalesStatsResponse> getRapportConsolide(
            @RequestBody SalesStatsRequest req) {
        return ResponseEntity.ok(statsService.getStats(req));
    }
}
