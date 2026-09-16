package com.erp.stock.controller;

import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import com.erp.stock.dto.*;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.service.BordereauExportService;
import com.erp.stock.service.StockReportService;
import com.erp.stock.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/stock")
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;
    private final StockReportService stockReportService;
    private final BordereauExportService bordereauExportService;
    private final StockPickingTypeRepository pickingTypeRepo;
    private final CompanyRepository companyRepository;
    private final TenantGuard tenantGuard;

    // ---- Categories ----
    @GetMapping("/categories")
    public ResponseEntity<List<ProductCategoryDTO>> getCategories(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getCategories(companyId));
    }

    @PostMapping("/categories")
    public ResponseEntity<ProductCategoryDTO> createCategory(@RequestBody ProductCategoryDTO dto) {
        return ResponseEntity.ok(stockService.createCategory(dto));
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<ProductCategoryDTO> updateCategory(@PathVariable("id") Long id, @RequestBody ProductCategoryDTO dto) {
        return ResponseEntity.ok(stockService.updateCategory(id, dto));
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable("id") Long id) {
        stockService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }

    // ---- Units of measure (UDM) ----
    @GetMapping("/units-of-measure")
    public ResponseEntity<List<UnitOfMeasureDTO>> getUnitsOfMeasure(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getUnitsOfMeasure(companyId));
    }

    @PostMapping("/units-of-measure")
    public ResponseEntity<UnitOfMeasureDTO> createUnitOfMeasure(@RequestBody UnitOfMeasureDTO dto) {
        return ResponseEntity.ok(stockService.createUnitOfMeasure(dto));
    }

    @PutMapping("/units-of-measure/{id}")
    public ResponseEntity<UnitOfMeasureDTO> updateUnitOfMeasure(@PathVariable("id") Long id, @RequestBody UnitOfMeasureDTO dto) {
        return ResponseEntity.ok(stockService.updateUnitOfMeasure(id, dto));
    }

    @DeleteMapping("/units-of-measure/{id}")
    public ResponseEntity<Void> deleteUnitOfMeasure(@PathVariable("id") Long id) {
        stockService.deleteUnitOfMeasure(id);
        return ResponseEntity.noContent().build();
    }

    // ---- Products ----
    @GetMapping("/products")
    public ResponseEntity<List<ProductDTO>> getProducts(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "warehouseId", required = false) Long warehouseId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getProducts(companyId, warehouseId));
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getProduct(id));
    }

    @PostMapping("/products")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO dto) {
        return ResponseEntity.ok(stockService.createProduct(dto));
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<ProductDTO> updateProduct(@PathVariable("id") Long id, @RequestBody ProductDTO dto) {
        return ResponseEntity.ok(stockService.updateProduct(id, dto));
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Long id) {
        stockService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    /** Marque tous les produits des catégories EMBALLAGES comme exemptes de TVA. */
    @PostMapping("/products/apply-emballages-tva-exempt")
    public ResponseEntity<java.util.Map<String, Object>> applyEmballagesTvaExempt(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        int count = stockService.applyEmballagesTvaExempt(companyId);
        return ResponseEntity.ok(java.util.Map.of("updated", count, "message",
                count + " produit(s) de la catégorie EMBALLAGES marqué(s) comme exempte(s) de TVA"));
    }

    // ---- Warehouses ----
    @GetMapping("/warehouses")
    public ResponseEntity<List<WarehouseDTO>> getWarehouses(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getWarehouses(companyId));
    }

    @GetMapping("/warehouses/{id}")
    public ResponseEntity<WarehouseDTO> getWarehouse(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getWarehouse(id));
    }

    @PostMapping("/warehouses")
    public ResponseEntity<WarehouseDTO> createWarehouse(@RequestBody WarehouseDTO dto) {
        return ResponseEntity.ok(stockService.createWarehouse(dto));
    }

    @PutMapping("/warehouses/{id}")
    public ResponseEntity<WarehouseDTO> updateWarehouse(@PathVariable("id") Long id, @RequestBody WarehouseDTO dto) {
        return ResponseEntity.ok(stockService.updateWarehouse(id, dto));
    }

    @DeleteMapping("/warehouses/{id}")
    public ResponseEntity<Void> deleteWarehouse(@PathVariable("id") Long id) {
        stockService.deleteWarehouse(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/warehouses/{id}/set-default")
    public ResponseEntity<WarehouseDTO> setDefaultWarehouse(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.setDefaultWarehouse(id));
    }

    // ---- Agences distantes ----
    @GetMapping("/agencies")
    public ResponseEntity<List<AgencyDTO>> getAgencies(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getAgencies(companyId));
    }

    @PostMapping("/agencies")
    public ResponseEntity<AgencyDTO> createAgency(@RequestBody AgencyDTO dto) {
        return ResponseEntity.ok(stockService.createAgency(dto));
    }

    @PutMapping("/agencies/{id}")
    public ResponseEntity<AgencyDTO> updateAgency(@PathVariable("id") Long id, @RequestBody AgencyDTO dto) {
        return ResponseEntity.ok(stockService.updateAgency(id, dto));
    }

    // ---- Locations ----
    @GetMapping("/locations")
    public ResponseEntity<List<StockLocationDTO>> getLocations(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getLocations(companyId));
    }

    @PostMapping("/locations")
    public ResponseEntity<StockLocationDTO> createLocation(@RequestBody StockLocationDTO dto) {
        return ResponseEntity.ok(stockService.createLocation(dto));
    }

    @PutMapping("/locations/{id}")
    public ResponseEntity<StockLocationDTO> updateLocation(@PathVariable("id") Long id, @RequestBody StockLocationDTO dto) {
        return ResponseEntity.ok(stockService.updateLocation(id, dto));
    }

    @DeleteMapping("/locations/{id}")
    public ResponseEntity<Void> deleteLocation(@PathVariable("id") Long id) {
        stockService.deleteLocation(id);
        return ResponseEntity.noContent().build();
    }

    // ---- Picking Types ----
    @GetMapping("/picking-types")
    public ResponseEntity<List<StockPickingTypeDTO>> getPickingTypes(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getPickingTypes(companyId));
    }

    // ---- Pickings (Réceptions / Livraisons / Transferts) ----
    @GetMapping("/pickings")
    public ResponseEntity<List<StockPickingDTO>> getPickings(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "type", required = false) String type) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getPickings(companyId, type));
    }

    @GetMapping("/pickings/{id}")
    public ResponseEntity<StockPickingDTO> getPicking(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getPicking(id));
    }

    @PostMapping("/pickings")
    public ResponseEntity<?> createPicking(@RequestBody StockPickingRequest req) {
        return ResponseEntity.ok(stockService.createPicking(req));
    }

    @PutMapping("/pickings/{id}")
    public ResponseEntity<StockPickingDTO> updatePicking(@PathVariable("id") Long id, @RequestBody StockPickingRequest req) {
        return ResponseEntity.ok(stockService.updatePicking(id, req));
    }

    @PostMapping("/pickings/{id}/validate")
    public ResponseEntity<StockPickingDTO> validatePicking(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.validatePicking(id));
    }

    @PostMapping("/pickings/{id}/cancel")
    public ResponseEntity<StockPickingDTO> cancelPicking(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.cancelPicking(id));
    }

    // Shortcuts par type
    @GetMapping("/receptions")
    public ResponseEntity<List<StockPickingDTO>> getReceptions(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getPickings(companyId, "incoming"));
    }

    /** Entrées Dépôt Achat en attente de réception physique (état confirmed) */
    @GetMapping("/receptions/pending")
    public ResponseEntity<List<StockPickingDTO>> getPendingReceptions(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getPendingReceptions(companyId));
    }

    /** Obtenir le bordereau de réception pour un picking */
    @GetMapping("/receptions/{id}/bordereau")
    public ResponseEntity<ReceptionBordereauDTO> getBordereau(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getBordereau(id));
    }

    /** Télécharger le bordereau en PDF */
    @GetMapping("/receptions/{id}/bordereau/pdf")
    public ResponseEntity<byte[]> getBordereauPdf(@PathVariable("id") Long id) {
        ReceptionBordereauDTO dto = stockService.getBordereau(id);
        enrichBordereauWithCompany(dto);
        byte[] pdf = bordereauExportService.generatePdf(dto);
        String filename = (dto.getPickingName() != null ? dto.getPickingName() : "bordereau") + ".pdf";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    /** Télécharger le bordereau en Excel */
    @GetMapping("/receptions/{id}/bordereau/excel")
    public ResponseEntity<byte[]> getBordereauExcel(@PathVariable("id") Long id) {
        ReceptionBordereauDTO dto = stockService.getBordereau(id);
        byte[] excel = bordereauExportService.generateExcel(dto);
        String filename = (dto.getPickingName() != null ? dto.getPickingName() : "bordereau") + ".xlsx";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(excel);
    }

    /** Créer et valider une réception directe (sans facture fournisseur). */
    @PostMapping("/receptions/directe")
    public ResponseEntity<StockPickingDTO> createDirectReception(@RequestBody com.erp.stock.dto.DirectReceptionRequest req) {
        return ResponseEntity.ok(stockService.createDirectReception(req));
    }

    /** Valider le bordereau : reçu → Magasin Principal, reste → Avaries */
    @PostMapping("/receptions/{id}/bordereau/validate")
    public ResponseEntity<ReceptionBordereauDTO> validateBordereau(
            @PathVariable("id") Long id,
            @RequestBody List<ReceptionBordereauDTO.LigneBordereau> lignes) {
        return ResponseEntity.ok(stockService.validateBordereau(id, lignes));
    }

    @GetMapping("/livraisons")
    public ResponseEntity<List<StockPickingDTO>> getLivraisons(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getPickings(companyId, "outgoing"));
    }

    @GetMapping("/transferts")
    public ResponseEntity<List<StockPickingDTO>> getTransferts(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getPickings(companyId, "internal"));
    }

    /** Réceptions inter-dépôts en attente de validation */
    @GetMapping("/transferts/receptions")
    public ResponseEntity<List<StockPickingDTO>> getTransferReceptions(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "all", defaultValue = "false") boolean all) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(all
                ? stockService.getAllTransferReceptions(companyId)
                : stockService.getPendingTransferReceptions(companyId));
    }

    /** Bordereau d'une réception inter-dépôts */
    @GetMapping("/transferts/receptions/{id}/bordereau")
    public ResponseEntity<ReceptionBordereauDTO> getTransferBordereau(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getTransferBordereau(id));
    }

    /** Télécharger le bordereau de réception inter-dépôts en PDF */
    @GetMapping("/transferts/receptions/{id}/bordereau/pdf")
    public ResponseEntity<byte[]> getTransferBordereauPdf(@PathVariable("id") Long id) {
        ReceptionBordereauDTO dto = stockService.getTransferBordereau(id);
        enrichBordereauWithCompany(dto);
        byte[] pdf = bordereauExportService.generatePdf(dto);
        String filename = (dto.getPickingName() != null ? dto.getPickingName() : "bordereau") + ".pdf";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    /** Confirmer la réception d'un transfert inter-dépôts (avec quantités reçues) */
    @PostMapping("/transferts/receptions/{id}/confirm")
    public ResponseEntity<StockPickingDTO> confirmTransferReception(
            @PathVariable("id") Long id,
            @RequestBody List<ReceptionBordereauDTO.LigneBordereau> lignes) {
        return ResponseEntity.ok(stockService.confirmTransferReception(id, lignes));
    }

    // ---- Quants (Stock) ----
    @GetMapping("/quants")
    public ResponseEntity<List<StockQuantDTO>> getQuants(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "locationId", required = false) Long locationId,
            @RequestParam(name = "productId", required = false) Long productId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getQuants(companyId, locationId, productId));
    }

    // ---- Dashboard ----
    @GetMapping("/dashboard")
    public ResponseEntity<StockDashboardDTO> getDashboard(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getDashboard(companyId));
    }

    // ---- Ajustements de stock ----
    @GetMapping("/adjustments")
    public ResponseEntity<List<StockAdjustmentDTO>> getAdjustments(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getAdjustments(companyId));
    }

    @PostMapping("/adjustments")
    public ResponseEntity<StockAdjustmentDTO> createAdjustment(@RequestBody StockAdjustmentRequest req) {
        return ResponseEntity.ok(stockService.createAdjustment(req));
    }

    @PostMapping("/adjustments/bulk")
    public ResponseEntity<List<StockAdjustmentDTO>> createAdjustmentsBulk(@RequestBody List<StockAdjustmentRequest> requests) {
        return ResponseEntity.ok(stockService.createAdjustmentsBulk(requests));
    }

    // ---- Trous & Casses ----
    @GetMapping("/casses")
    public ResponseEntity<List<StockLossDTO>> getStockLosses(
            @RequestParam("companyId") Long companyId,
            @RequestParam(value = "dateFrom", required = false) LocalDate dateFrom,
            @RequestParam(value = "dateTo", required = false) LocalDate dateTo) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getStockLosses(companyId, dateFrom, dateTo));
    }

    @PostMapping("/casses")
    public ResponseEntity<StockLossDTO> createStockLoss(@RequestBody StockLossRequest req) {
        return ResponseEntity.ok(stockService.createStockLoss(req));
    }

    /** Bordereau imprimable d'une opération de Trous & Casses */
    @GetMapping("/casses/{id}/bordereau")
    public ResponseEntity<CasseBordereauDTO> getCasseBordereau(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getCasseBordereau(id));
    }

    @GetMapping("/casses/{id}/bordereau/pdf")
    public ResponseEntity<byte[]> getCasseBordereauPdf(@PathVariable("id") Long id) {
        CasseBordereauDTO dto = stockService.getCasseBordereau(id);
        enrichCasseBordereauWithCompany(dto);
        byte[] pdf = bordereauExportService.generateCassePdf(dto);
        String filename = (dto.getName() != null ? dto.getName().replace("/", "-") : "bordereau_casse") + ".pdf";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    private void enrichCasseBordereauWithCompany(CasseBordereauDTO dto) {
        if (dto.getCompanyId() == null) return;
        companyRepository.findById(dto.getCompanyId()).ifPresent(c -> {
            dto.setCompanyName(c.getName());
            dto.setCompanySigle(c.getSigle());
            dto.setCompanyAdresse(c.getAdresse());
            dto.setCompanyTelephone(c.getTelephone());
            dto.setCompanyRccm(c.getRccm());
            dto.setCompanyNif(c.getNif());
        });
    }

    /** Télécharger la feuille de comptage (inventaire vierge) en PDF */
    @PostMapping("/adjustments/counting-sheet/pdf")
    public ResponseEntity<byte[]> getCountingSheetPdf(@RequestBody InventorySheetDTO dto) {
        enrichWithCompany(dto);
        byte[] pdf = bordereauExportService.generateCountingSheetPdf(dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"feuille_comptage.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    /** Télécharger la fiche d'inventaire (PV) en PDF */
    @PostMapping("/adjustments/inventory-report/pdf")
    public ResponseEntity<byte[]> getInventoryReportPdf(@RequestBody InventorySheetDTO dto) {
        enrichWithCompany(dto);
        byte[] pdf = bordereauExportService.generateInventoryReportPdf(dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"pv_inventaire.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    private void enrichWithCompany(InventorySheetDTO dto) {
        if (dto.getCompanyId() == null) return;
        companyRepository.findById(dto.getCompanyId()).ifPresent(c -> {
            // Toujours écraser depuis la DB pour garantir un header complet
            if (c.getName() != null && !c.getName().isEmpty()) dto.setCompanyName(c.getName());
            dto.setCompanySigle(c.getSigle());
            dto.setCompanyAdresse(c.getAdresse());
            dto.setCompanyTelephone(c.getTelephone());
            dto.setCompanyRccm(c.getRccm());
            dto.setCompanyNif(c.getNif());
        });
    }

    private void enrichWithWarehouses(InventorySheetDTO dto, Long companyId, List<Long> warehouseIds) {
        stockService.getWarehouses(companyId).stream()
            .filter(w -> warehouseIds.contains(w.getId()))
            .forEach(w -> {
                if (w.getName() != null && w.getResponsableName() != null)
                    dto.getWarehouseResponsables().put(w.getName(), w.getResponsableName());
                // Si un seul entrepôt, le mettre aussi dans le header principal
                if (warehouseIds.size() == 1) {
                    dto.setWarehouseName(w.getName());
                    dto.setResponsableName(w.getResponsableName());
                }
            });
    }

    private void enrichBordereauWithCompany(ReceptionBordereauDTO dto) {
        if (dto.getCompanyId() == null) return;
        companyRepository.findById(dto.getCompanyId()).ifPresent(c -> {
            dto.setCompanyName(c.getName());
            dto.setCompanySigle(c.getSigle());
            dto.setCompanyAdresse(c.getAdresse());
            dto.setCompanyTelephone(c.getTelephone());
            dto.setCompanyRccm(c.getRccm());
            dto.setCompanyNif(c.getNif());
        });
    }

    // ---- Analyse ----
    @GetMapping("/report")
    public ResponseEntity<List<StockQuantDTO>> getStockReport(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getStockReport(companyId));
    }

    @GetMapping("/movements")
    public ResponseEntity<List<StockMoveDTO>> getMovements(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "productId", required = false) Long productId,
            @RequestParam(name = "dateFrom", required = false) String dateFrom,
            @RequestParam(name = "dateTo", required = false) String dateTo,
            @RequestParam(name = "limit", defaultValue = "1000") int limit) {
        tenantGuard.check(companyId);
        LocalDateTime from = dateFrom != null ? LocalDate.parse(dateFrom).atStartOfDay() : null;
        LocalDateTime to   = dateTo   != null ? LocalDate.parse(dateTo).atTime(23, 59, 59) : null;
        return ResponseEntity.ok(stockService.getMovements(companyId, productId, from, to, limit));
    }

    @GetMapping("/valuation")
    public ResponseEntity<List<ValuationLayerDTO>> getValuation(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "productId", required = false) Long productId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getValuation(companyId, productId));
    }

    // ---- Expéditions inter-agences (agences distantes via API) ----

    @GetMapping("/inter-company/expeditions")
    public ResponseEntity<List<StockPickingDTO>> getInterCompanyExpeditions(
            @RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        return ResponseEntity.ok(stockService.getInterCompanyExpeditions(companyId));
    }

    @GetMapping("/inter-company/expeditions/{id}")
    public ResponseEntity<StockPickingDTO> getInterCompanyExpedition(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getPicking(id));
    }

    @PostMapping("/inter-company/expeditions")
    public ResponseEntity<StockPickingDTO> createInterCompanyExpedition(
            @RequestBody StockPickingRequest req) {
        return ResponseEntity.ok(stockService.createInterCompanyExpedition(req));
    }

    @PutMapping("/inter-company/expeditions/{id}")
    public ResponseEntity<StockPickingDTO> updateInterCompanyExpedition(
            @PathVariable("id") Long id, @RequestBody StockPickingRequest req) {
        return ResponseEntity.ok(stockService.updateInterCompanyExpedition(id, req));
    }

    @PostMapping("/inter-company/expeditions/{id}/validate")
    public ResponseEntity<StockPickingDTO> validateInterCompanyExpedition(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.validateInterCompanyExpedition(id));
    }

    @PostMapping("/inter-company/expeditions/{id}/cancel")
    public ResponseEntity<StockPickingDTO> cancelInterCompanyExpedition(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.cancelInterCompanyExpedition(id));
    }

    @PostMapping("/inter-company/expeditions/{id}/confirm-reception")
    public ResponseEntity<StockPickingDTO> confirmInterCompanyReception(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.confirmInterCompanyReception(id));
    }

    @PostMapping("/inter-company/expeditions/{id}/cancel-reception")
    public ResponseEntity<StockPickingDTO> cancelInterCompanyReception(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.cancelInterCompanyReception(id));
    }

    /** Retente la notification de l'agence expéditrice après une réception déjà validée dont la
     *  notification avait échoué (ex: pare-feu/réseau injoignable au moment de la validation). */
    @PostMapping("/inter-company/expeditions/{id}/retry-notify")
    public ResponseEntity<StockPickingDTO> retryNotifySender(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.retryNotifySender(id));
    }

    @PostMapping("/warehouses/migrate-picking-types")
    public ResponseEntity<String> migrateWarehousePickingTypes() {
        int n = stockService.migrateWarehousePickingTypes();
        return ResponseEntity.ok("Migration terminée : " + n + " type(s) Retours ajouté(s)");
    }

    // ---- Rapports de stock PDF ----

    @GetMapping("/report/pdf")
    public ResponseEntity<byte[]> getStockReportPdf(@RequestParam("companyId") Long companyId) {
        tenantGuard.check(companyId);
        List<StockQuantDTO> quants = stockService.getStockReport(companyId);
        InventorySheetDTO dto = new InventorySheetDTO();
        dto.setCompanyId(companyId);
        enrichWithCompany(dto);
        stockService.getWarehouses(companyId).forEach(w -> {
            if (w.getName() != null && w.getResponsableName() != null)
                dto.getWarehouseResponsables().put(w.getName(), w.getResponsableName());
        });
        byte[] pdf = bordereauExportService.generateStockReportPdf(quants, dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"rapport_stock.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    @GetMapping("/movements/pdf")
    public ResponseEntity<byte[]> getMovementsPdf(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "productId", required = false) Long productId,
            @RequestParam(name = "dateFrom", required = false) String dateFrom,
            @RequestParam(name = "dateTo",   required = false) String dateTo,
            @RequestParam(name = "limit", defaultValue = "1000") int limit) {
        tenantGuard.check(companyId);
        LocalDateTime from = dateFrom != null ? LocalDate.parse(dateFrom).atStartOfDay() : null;
        LocalDateTime to   = dateTo   != null ? LocalDate.parse(dateTo).atTime(23, 59, 59) : null;
        List<StockMoveDTO> moves = stockService.getMovements(companyId, productId, from, to, limit);
        InventorySheetDTO dto = new InventorySheetDTO();
        dto.setCompanyId(companyId);
        enrichWithCompany(dto);
        byte[] pdf = bordereauExportService.generateStockMovementsPdf(moves, dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"mouvements_stock.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    @GetMapping("/report/analytical/pdf")
    public ResponseEntity<byte[]> getAnalyticalReportPdf(
            @RequestParam Long companyId,
            @RequestParam List<Long> warehouseIds,
            @RequestParam String dateFrom,
            @RequestParam String dateTo,
            @RequestParam(required = false) Long productId,
            @RequestParam(required = false) Long categoryId) {
        tenantGuard.check(companyId);
        LocalDate from = LocalDate.parse(dateFrom);
        LocalDate to   = LocalDate.parse(dateTo);
        List<StockReportWarehouseDTO> data = stockReportService.getAnalyticalReport(companyId, warehouseIds, from, to, productId, categoryId);
        InventorySheetDTO dto = new InventorySheetDTO();
        dto.setCompanyId(companyId);
        dto.setDate(dateFrom + " → " + dateTo);
        enrichWithCompany(dto);
        enrichWithWarehouses(dto, companyId, warehouseIds);
        byte[] pdf = bordereauExportService.generateStockAnalyticsPdf(data, dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"rapport_analytique_stock.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    @GetMapping("/report/detailed/pdf")
    public ResponseEntity<byte[]> getDetailedReportPdf(
            @RequestParam Long companyId,
            @RequestParam List<Long> warehouseIds,
            @RequestParam String dateFrom,
            @RequestParam String dateTo,
            @RequestParam(required = false) Long productId,
            @RequestParam(required = false) Long categoryId) {
        tenantGuard.check(companyId);
        LocalDate from = LocalDate.parse(dateFrom);
        LocalDate to   = LocalDate.parse(dateTo);
        List<StockDetailedProductDTO> data = stockReportService.getDetailedReport(companyId, warehouseIds, from, to, productId, categoryId);
        InventorySheetDTO dto = new InventorySheetDTO();
        dto.setCompanyId(companyId);
        dto.setDate(dateFrom + " → " + dateTo);
        enrichWithCompany(dto);
        enrichWithWarehouses(dto, companyId, warehouseIds);
        byte[] pdf = bordereauExportService.generateStockDetailedPdf(data, dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"fiche_detaillee_stock.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    // ---- Rapports de stock analytiques ----

    @GetMapping("/report/analytical")
    public ResponseEntity<List<StockReportWarehouseDTO>> getAnalyticalReport(
            @RequestParam Long companyId,
            @RequestParam List<Long> warehouseIds,
            @RequestParam String dateFrom,
            @RequestParam String dateTo,
            @RequestParam(required = false) Long productId,
            @RequestParam(required = false) Long categoryId) {
        tenantGuard.check(companyId);
        LocalDate from = LocalDate.parse(dateFrom);
        LocalDate to   = LocalDate.parse(dateTo);
        return ResponseEntity.ok(stockReportService.getAnalyticalReport(companyId, warehouseIds, from, to, productId, categoryId));
    }

    @GetMapping("/report/detailed")
    public ResponseEntity<List<StockDetailedProductDTO>> getDetailedReport(
            @RequestParam Long companyId,
            @RequestParam List<Long> warehouseIds,
            @RequestParam String dateFrom,
            @RequestParam String dateTo,
            @RequestParam(required = false) Long productId,
            @RequestParam(required = false) Long categoryId) {
        tenantGuard.check(companyId);
        LocalDate from = LocalDate.parse(dateFrom);
        LocalDate to   = LocalDate.parse(dateTo);
        return ResponseEntity.ok(stockReportService.getDetailedReport(companyId, warehouseIds, from, to, productId, categoryId));
    }
}
