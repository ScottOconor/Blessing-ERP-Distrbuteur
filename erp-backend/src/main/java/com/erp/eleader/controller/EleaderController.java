package com.erp.eleader.controller;

import com.erp.eleader.dto.EleaderConfigDTO;
import com.erp.eleader.dto.EleaderEmballageMappingDTO;
import com.erp.eleader.dto.EleaderImportLogDTO;
import com.erp.eleader.dto.EleaderImportResultDTO;
import com.erp.eleader.service.EleaderConfigService;
import com.erp.eleader.service.EleaderImportService;
import com.erp.eleader.service.EleaderPdfParserService;
import com.erp.sales.dto.SalesOrderDTO;
import com.erp.sales.repository.SalesOrderRepository;
import com.erp.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/eleader")
@RequiredArgsConstructor
public class EleaderController {

    private final EleaderConfigService    configService;
    private final EleaderImportService    importService;
    private final EleaderPdfParserService parserService;
    private final SalesService            salesService;
    private final SalesOrderRepository    orderRepo;

    // ─────────────────────────────────────────────────────────────────────────
    //  Configuration
    // ─────────────────────────────────────────────────────────────────────────

    @GetMapping("/config")
    public ResponseEntity<EleaderConfigDTO> getConfig(@RequestParam Long companyId) {
        return ResponseEntity.ok(configService.getConfig(companyId));
    }

    @PutMapping("/config")
    public ResponseEntity<EleaderConfigDTO> saveConfig(@RequestBody EleaderConfigDTO dto) {
        return ResponseEntity.ok(configService.saveConfig(dto));
    }

    @PostMapping("/config/emballages")
    public ResponseEntity<EleaderEmballageMappingDTO> addMapping(
            @RequestParam Long companyId,
            @RequestBody EleaderEmballageMappingDTO dto) {
        return ResponseEntity.ok(configService.addMapping(companyId, dto));
    }

    @DeleteMapping("/config/emballages/{id}")
    public ResponseEntity<Void> deleteMapping(@PathVariable Long id) {
        configService.deleteMapping(id);
        return ResponseEntity.noContent().build();
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Import PDF
    // ─────────────────────────────────────────────────────────────────────────

    @PostMapping("/extract-text")
    public ResponseEntity<java.util.Map<String, String>> extractText(
            @RequestParam("file") MultipartFile file) {
        try {
            String text = parserService.extractText(file);
            String detected = parserService.detectModel(text);
            return ResponseEntity.ok(java.util.Map.of("text", text, "detectedModel", detected));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/import")
    public ResponseEntity<EleaderImportResultDTO> importPdf(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "invoiceModel", required = false) String invoiceModel,
            @RequestParam Long companyId) {
        EleaderImportResultDTO result = importService.importPdf(file, invoiceModel, companyId);
        return result.isSuccess() ? ResponseEntity.ok(result) : ResponseEntity.badRequest().body(result);
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Bons de commande eLeader
    // ─────────────────────────────────────────────────────────────────────────

    @GetMapping("/orders")
    public ResponseEntity<List<SalesOrderDTO>> getEleaderOrders(@RequestParam Long companyId) {
        List<SalesOrderDTO> orders = orderRepo.findByCompanyIdOrderByDateDescNameDesc(companyId)
                .stream()
                .filter(o -> o.getEleaderReference() != null && !o.getEleaderReference().isBlank())
                .map(o -> salesService.getOrderById(o.getId()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(orders);
    }

    // Ces deux endpoints appellent directement SalesService en contournant PermissionFilter
    // (PermissionService.RULES ne couvre pas /api/eleader/**) — @PreAuthorize reproduit ici
    // explicitement l'exigence de permission de la route équivalente /api/sales/orders/**
    // (POST → VENTES.COMMANDES.EDIT) pour ne pas dépendre uniquement de règles ajoutées
    // séparément dans PermissionService.RULES.
    @PreAuthorize("hasAuthority('PERM_VENTES_COMMANDES_EDIT')")
    @PostMapping("/orders/{id}/confirm")
    public ResponseEntity<SalesOrderDTO> confirmOrder(@PathVariable Long id) {
        return ResponseEntity.ok(salesService.confirmOrder(id));
    }

    @PreAuthorize("hasAuthority('PERM_VENTES_COMMANDES_EDIT')")
    @PostMapping("/orders/{id}/cancel")
    public ResponseEntity<SalesOrderDTO> cancelOrder(@PathVariable Long id) {
        return ResponseEntity.ok(salesService.cancelOrder(id));
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Logs d'import
    // ─────────────────────────────────────────────────────────────────────────

    @GetMapping("/logs")
    public ResponseEntity<List<EleaderImportLogDTO>> getLogs(@RequestParam Long companyId) {
        return ResponseEntity.ok(importService.getLogs(companyId));
    }
}
