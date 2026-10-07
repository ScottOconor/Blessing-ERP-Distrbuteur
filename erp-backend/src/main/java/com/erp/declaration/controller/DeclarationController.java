package com.erp.declaration.controller;

import com.erp.config.permission.PermissionService;
import com.erp.declaration.dto.DeclarationBatchDTO;
import com.erp.declaration.dto.InvoiceGenerationPlan;
import com.erp.declaration.dto.InvoiceGenerationRequest;
import com.erp.declaration.service.InvoiceGeneratorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Module Déclaration : génération en masse de factures de vente validées.
 * Outil sensible (écritures comptables et sorties de stock en série) : réservé aux administrateurs.
 */
@RestController
@RequestMapping("/api/declaration")
@RequiredArgsConstructor
public class DeclarationController {

    private final InvoiceGeneratorService generatorService;
    private final PermissionService permissionService;

    /** Calcule le plan de génération sans rien écrire en base. */
    @PostMapping("/invoices/preview")
    public ResponseEntity<InvoiceGenerationPlan> preview(@RequestBody InvoiceGenerationRequest request) {
        assertAdmin();
        return ResponseEntity.ok(generatorService.preview(request));
    }

    /**
     * Lance en arrière-plan la création, la validation et le règlement des factures du plan ;
     * répond immédiatement avec la génération (statut RUNNING) dont on suit l'avancement via /status.
     */
    @PostMapping("/invoices/generate")
    public ResponseEntity<DeclarationBatchDTO> generate(@RequestBody InvoiceGenerationPlan plan) {
        assertAdmin();
        return ResponseEntity.ok(generatorService.generate(plan));
    }

    /** Dernières générations de la société (les plus récentes d'abord). */
    @GetMapping("/batches")
    public ResponseEntity<List<DeclarationBatchDTO>> getBatches(@RequestParam("companyId") Long companyId,
                                                                @RequestParam(value = "limit", defaultValue = "500") int limit) {
        assertAdmin();
        return ResponseEntity.ok(generatorService.getBatches(companyId, limit));
    }

    /** Avancement d'une génération (sans les factures) — interrogé régulièrement par l'écran. */
    @GetMapping("/batches/{id}/status")
    public ResponseEntity<DeclarationBatchDTO> getBatchStatus(@PathVariable("id") Long id) {
        assertAdmin();
        return ResponseEntity.ok(generatorService.getBatchStatus(id));
    }

    /** Détail d'une génération avec ses factures (pour consultation et réimpression). */
    @GetMapping("/batches/{id}")
    public ResponseEntity<DeclarationBatchDTO> getBatch(@PathVariable("id") Long id) {
        assertAdmin();
        return ResponseEntity.ok(generatorService.getBatch(id));
    }

    private void assertAdmin() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !permissionService.isPrivileged(auth)) {
            throw new AccessDeniedException("Module Déclaration réservé aux administrateurs");
        }
    }
}
