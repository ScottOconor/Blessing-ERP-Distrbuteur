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

    /** Stats de ventes avec filtres optionnels (client, catégorie, produit, vendeur) */
    @PostMapping("/stats-ventes")
    public ResponseEntity<SalesStatsResponse> getStatsVentes(
            @RequestBody SalesStatsRequest req) {
        return ResponseEntity.ok(statsService.getStats(req));
    }

    /** Anciens endpoints conservés pour compatibilité */
    @PostMapping("/etat-commercial")
    public ResponseEntity<SalesStatsResponse> getEtatCommercial(
            @RequestBody SalesStatsRequest req) {
        return ResponseEntity.ok(statsService.getStats(req));
    }

    @PostMapping("/rapport-consolide")
    public ResponseEntity<SalesStatsResponse> getRapportConsolide(
            @RequestBody SalesStatsRequest req) {
        return ResponseEntity.ok(statsService.getStats(req));
    }
}
