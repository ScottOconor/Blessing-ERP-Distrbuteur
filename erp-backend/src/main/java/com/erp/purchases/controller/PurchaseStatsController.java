package com.erp.purchases.controller;

import com.erp.purchases.dto.PurchaseStatsRequest;
import com.erp.purchases.dto.PurchaseStatsResponse;
import com.erp.purchases.service.PurchaseStatsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/purchases/stats")
@RequiredArgsConstructor
public class PurchaseStatsController {

    private final PurchaseStatsService statsService;

    /** Stats d'achats avec filtres optionnels (fournisseur, catégorie, produit, agent, entrepôt) */
    @PostMapping("/stats-achats")
    public ResponseEntity<PurchaseStatsResponse> getStatsAchats(
            @RequestBody PurchaseStatsRequest req) {
        return ResponseEntity.ok(statsService.getStats(req));
    }
}
