package com.erp.accounting.controller;

import com.erp.accounting.dto.ImportResult;
import com.erp.accounting.dto.JournalPreviewDTO;
import com.erp.accounting.service.ImportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
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
     * Download an Excel template showing the expected columns for plan comptable import.
     */
    @GetMapping("/accounts/template")
    public ResponseEntity<byte[]> downloadAccountsTemplate() throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Plan Comptable");

            // Header style
            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            // Headers
            Row header = sheet.createRow(0);
            String[] cols = {"code", "name", "account_type", "deprecated", "reconcile"};
            for (int i = 0; i < cols.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(cols[i]);
                cell.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 6000);
            }

            // Example rows
            Object[][] examples = {
                {"101000", "Capital social",          "equity",          "false", "false"},
                {"401000", "Fournisseurs",            "liability_payable","false", "true"},
                {"411000", "Clients",                 "asset_receivable", "false", "true"},
                {"512000", "Banque",                  "asset_cash",       "false", "false"},
                {"601100", "Achats de marchandises",  "expense",          "false", "false"},
                {"701100", "Ventes de marchandises",  "income",           "false", "false"},
            };
            int rowIdx = 1;
            for (Object[] ex : examples) {
                Row row = sheet.createRow(rowIdx++);
                for (int c = 0; c < ex.length; c++) {
                    row.createCell(c).setCellValue(ex[c].toString());
                }
            }

            wb.write(out);
            byte[] bytes = out.toByteArray();

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"modele_plan_comptable.xlsx\"")
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .contentLength(bytes.length)
                    .body(bytes);
        }
    }

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
            ImportResult result = importService.importAccounts(file, companyId, false);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            log.error("Erreur import plan comptable", e);
            return ResponseEntity.internalServerError().body(
                    ImportResult.builder().message("Erreur lecture fichier: " + e.getMessage()).build());
        }
    }

    @GetMapping("/analytic-accounts/template")
    public ResponseEntity<byte[]> downloadAnalyticAccountsTemplate() throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Comptes Analytiques");

            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            Row header = sheet.createRow(0);
            String[] cols = {"code", "name", "parent_id", "description"};
            for (int i = 0; i < cols.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(cols[i]);
                cell.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 7000);
            }

            Object[][] examples = {
                {"ADM",     "Administration",  "",    "Frais administratifs"},
                {"ADM-DIR", "Direction",       "ADM", "Direction générale"},
                {"COM",     "Commercial",      "",    "Frais commerciaux"},
                {"COM-VTE", "Ventes",          "COM", "Force de vente"},
                {"OPS",     "Opérations",      "",    "Coûts opérationnels"},
            };
            int rowIdx = 1;
            for (Object[] ex : examples) {
                Row row = sheet.createRow(rowIdx++);
                for (int c = 0; c < ex.length; c++) row.createCell(c).setCellValue(ex[c].toString());
            }

            wb.write(out);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"modele_comptes_analytiques.xlsx\"")
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body(out.toByteArray());
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

    @GetMapping("/journals/template")
    public ResponseEntity<byte[]> downloadJournalsTemplate() throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Journaux");

            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            Row header = sheet.createRow(0);
            String[] cols = {"code", "name", "type", "default_account_id"};
            for (int i = 0; i < cols.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(cols[i]);
                cell.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 7000);
            }

            Object[][] examples = {
                {"VTE",  "Journal de Vente",           "sale",     "701100"},
                {"ACH",  "Journal d'Achats",            "purchase", "601100"},
                {"CAI",  "Caisse",                      "cash",     "571000"},
                {"BQ",   "Banque",                      "bank",     "512000"},
                {"OD",   "Opérations Diverses",         "general",  ""},
            };
            int rowIdx = 1;
            for (Object[] ex : examples) {
                Row row = sheet.createRow(rowIdx++);
                for (int c = 0; c < ex.length; c++) {
                    row.createCell(c).setCellValue(ex[c].toString());
                }
            }

            wb.write(out);
            byte[] bytes = out.toByteArray();

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"modele_journaux.xlsx\"")
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .contentLength(bytes.length)
                    .body(bytes);
        }
    }

    @PostMapping("/journals/preview")
    public ResponseEntity<List<JournalPreviewDTO>> previewJournals(
            @RequestParam MultipartFile file,
            @RequestParam Long companyId) {
        if (file.isEmpty()) return ResponseEntity.badRequest().build();
        try {
            return ResponseEntity.ok(importService.previewJournals(file, companyId));
        } catch (IOException e) {
            log.error("Erreur prévisualisation journaux", e);
            return ResponseEntity.internalServerError().build();
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

    /**
     * Download an Excel template for warehouse import (stock.warehouse).
     */
    @GetMapping("/warehouses/template")
    public ResponseEntity<byte[]> downloadWarehousesTemplate() throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Entrepôts");

            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            Row header = sheet.createRow(0);
            String[] cols = {"name", "code", "active"};
            for (int i = 0; i < cols.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(cols[i]);
                cell.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 7000);
            }

            Object[][] examples = {
                {"Entrepôt Principal", "WH",  "true"},
                {"Entrepôt Secondaire", "WH2", "true"},
                {"Dépôt Achat",        "DAC", "true"},
            };
            int rowIdx = 1;
            for (Object[] ex : examples) {
                Row row = sheet.createRow(rowIdx++);
                for (int c = 0; c < ex.length; c++) {
                    row.createCell(c).setCellValue(ex[c].toString());
                }
            }

            wb.write(out);
            byte[] bytes = out.toByteArray();

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"modele_entrepots.xlsx\"")
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .contentLength(bytes.length)
                    .body(bytes);
        }
    }

    /**
     * Import warehouses from Odoo stock.warehouse Excel export.
     */
    @PostMapping("/warehouses")
    public ResponseEntity<ImportResult> importWarehouses(
            @RequestParam MultipartFile file,
            @RequestParam Long companyId) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(
                    ImportResult.builder().message("Fichier vide").build());
        }
        try {
            ImportResult result = importService.importWarehouses(file, companyId);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            log.error("Erreur import entrepôts", e);
            return ResponseEntity.internalServerError().body(
                    ImportResult.builder().message("Erreur lecture fichier: " + e.getMessage()).build());
        }
    }
}
