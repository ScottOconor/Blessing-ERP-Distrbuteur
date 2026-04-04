package com.erp.accounting.controller;

import com.erp.accounting.dto.ImportResult;
import com.erp.accounting.service.ImportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/import")
@RequiredArgsConstructor
@Slf4j
public class ImportController {

    private final ImportService importService;

    /**
     * Returns the list of valid journal types.
     * Must be seeded before importing journals.
     */
    @GetMapping("/journal-types")
    public ResponseEntity<List<Map<String, String>>> getJournalTypes() {
        List<Map<String, String>> types = List.of(
            Map.of("value", "sale",     "label", "Vente",                "icon", "shopping_cart"),
            Map.of("value", "purchase", "label", "Achat",                "icon", "local_shipping"),
            Map.of("value", "cash",     "label", "Caisse / Espèces",     "icon", "payments"),
            Map.of("value", "bank",     "label", "Banque",               "icon", "account_balance"),
            Map.of("value", "general",  "label", "Opérations diverses",  "icon", "sync_alt")
        );
        return ResponseEntity.ok(types);
    }

    /**
     * Import plan comptable from Odoo account.account Excel export.
     * Must be done BEFORE importing journals.
     */
    @PostMapping("/accounts")
    public ResponseEntity<ImportResult> importAccounts(
            @RequestParam MultipartFile file,
            @RequestParam Long companyId) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(
                    ImportResult.builder().message("Fichier vide").build());
        }
        try {
            ImportResult result = importService.importAccounts(file, companyId);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            log.error("Erreur import plan comptable", e);
            return ResponseEntity.internalServerError().body(
                    ImportResult.builder().message("Erreur lecture fichier: " + e.getMessage()).build());
        }
    }

    /**
     * Import analytic accounts from Odoo account.analytic.account Excel export.
     */
    @PostMapping("/analytic-accounts")
    public ResponseEntity<ImportResult> importAnalyticAccounts(
            @RequestParam MultipartFile file,
            @RequestParam Long companyId) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(
                    ImportResult.builder().message("Fichier vide").build());
        }
        try {
            ImportResult result = importService.importAnalyticAccounts(file, companyId);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            log.error("Erreur import comptes analytiques", e);
            return ResponseEntity.internalServerError().body(
                    ImportResult.builder().message("Erreur lecture fichier: " + e.getMessage()).build());
        }
    }

    /**
     * Import contacts/partners from Odoo res.partner Excel export.
     */
    @PostMapping("/partners")
    public ResponseEntity<ImportResult> importPartners(
            @RequestParam MultipartFile file,
            @RequestParam Long companyId) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(
                    ImportResult.builder().message("Fichier vide").build());
        }
        try {
            ImportResult result = importService.importPartners(file, companyId);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            log.error("Erreur import partenaires", e);
            return ResponseEntity.internalServerError().body(
                    ImportResult.builder().message("Erreur lecture fichier: " + e.getMessage()).build());
        }
    }

    /**
     * Import journals from Odoo account.journal Excel export.
     * REQUIRES plan comptable to be imported first.
     */
    @PostMapping("/journals")
    public ResponseEntity<ImportResult> importJournals(
            @RequestParam MultipartFile file,
            @RequestParam Long companyId) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(
                    ImportResult.builder().message("Fichier vide").build());
        }
        try {
            ImportResult result = importService.importJournals(file, companyId);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            log.error("Erreur import journaux", e);
            return ResponseEntity.internalServerError().body(
                    ImportResult.builder().message("Erreur lecture fichier: " + e.getMessage()).build());
        }
    }
}
