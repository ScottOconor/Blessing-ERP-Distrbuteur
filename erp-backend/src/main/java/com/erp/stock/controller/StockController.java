package com.erp.stock.controller;

import com.erp.stock.dto.*;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.service.BordereauExportService;
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
    private final BordereauExportService bordereauExportService;
    private final StockPickingTypeRepository pickingTypeRepo;

    // ---- Categories ----
    @GetMapping("/categories")
    public ResponseEntity<List<ProductCategoryDTO>> getCategories(@RequestParam("companyId") Long companyId) {
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

    // ---- Products ----
    @GetMapping("/products")
    public ResponseEntity<List<ProductDTO>> getProducts(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(stockService.getProducts(companyId));
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

    // ---- Warehouses ----
    @GetMapping("/warehouses")
    public ResponseEntity<List<WarehouseDTO>> getWarehouses(@RequestParam("companyId") Long companyId) {
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

    // ---- Locations ----
    @GetMapping("/locations")
    public ResponseEntity<List<StockLocationDTO>> getLocations(@RequestParam("companyId") Long companyId) {
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
        return ResponseEntity.ok(stockService.getPickingTypes(companyId));
    }

    // ---- Pickings (Réceptions / Livraisons / Transferts) ----
    @GetMapping("/pickings")
    public ResponseEntity<List<StockPickingDTO>> getPickings(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "type", required = false) String type) {
        return ResponseEntity.ok(stockService.getPickings(companyId, type));
    }

    @GetMapping("/pickings/{id}")
    public ResponseEntity<StockPickingDTO> getPicking(@PathVariable("id") Long id) {
        return ResponseEntity.ok(stockService.getPicking(id));
    }

    @PostMapping("/pickings")
    public ResponseEntity<?> createPicking(@RequestBody StockPickingRequest req) {
        if (req.getPickingTypeId() != null) {
            pickingTypeRepo.findById(req.getPickingTypeId()).ifPresent(pt -> {
                if ("incoming".equals(pt.getCode())) {
                    throw new IllegalArgumentException("Les réceptions ne peuvent pas être créées manuellement. Elles sont générées automatiquement depuis les factures fournisseurs.");
                }
            });
        }
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
        return ResponseEntity.ok(stockService.getPickings(companyId, "incoming"));
    }

    /** Entrées Dépôt Achat en attente de réception physique (état confirmed) */
    @GetMapping("/receptions/pending")
    public ResponseEntity<List<StockPickingDTO>> getPendingReceptions(@RequestParam("companyId") Long companyId) {
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

    /** Valider le bordereau : reçu → Magasin Principal, reste → Avaries */
    @PostMapping("/receptions/{id}/bordereau/validate")
    public ResponseEntity<ReceptionBordereauDTO> validateBordereau(
            @PathVariable("id") Long id,
            @RequestBody List<ReceptionBordereauDTO.LigneBordereau> lignes) {
        return ResponseEntity.ok(stockService.validateBordereau(id, lignes));
    }

    @GetMapping("/livraisons")
    public ResponseEntity<List<StockPickingDTO>> getLivraisons(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(stockService.getPickings(companyId, "outgoing"));
    }

    @GetMapping("/transferts")
    public ResponseEntity<List<StockPickingDTO>> getTransferts(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(stockService.getPickings(companyId, "internal"));
    }

    // ---- Quants (Stock) ----
    @GetMapping("/quants")
    public ResponseEntity<List<StockQuantDTO>> getQuants(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "locationId", required = false) Long locationId,
            @RequestParam(name = "productId", required = false) Long productId) {
        return ResponseEntity.ok(stockService.getQuants(companyId, locationId, productId));
    }

    // ---- Dashboard ----
    @GetMapping("/dashboard")
    public ResponseEntity<StockDashboardDTO> getDashboard(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(stockService.getDashboard(companyId));
    }

    // ---- Ajustements de stock ----
    @GetMapping("/adjustments")
    public ResponseEntity<List<StockAdjustmentDTO>> getAdjustments(@RequestParam("companyId") Long companyId) {
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

    /** Télécharger la feuille de comptage (inventaire vierge) en PDF */
    @PostMapping("/adjustments/counting-sheet/pdf")
    public ResponseEntity<byte[]> getCountingSheetPdf(@RequestBody InventorySheetDTO dto) {
        byte[] pdf = bordereauExportService.generateCountingSheetPdf(dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"feuille_comptage.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    /** Télécharger la fiche d'inventaire (après application) en PDF */
    @PostMapping("/adjustments/inventory-report/pdf")
    public ResponseEntity<byte[]> getInventoryReportPdf(@RequestBody InventorySheetDTO dto) {
        byte[] pdf = bordereauExportService.generateInventoryReportPdf(dto);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"fiche_inventaire.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    // ---- Analyse ----
    @GetMapping("/report")
    public ResponseEntity<List<StockQuantDTO>> getStockReport(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(stockService.getStockReport(companyId));
    }

    @GetMapping("/movements")
    public ResponseEntity<List<StockMoveDTO>> getMovements(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "productId", required = false) Long productId,
            @RequestParam(name = "dateFrom", required = false) String dateFrom,
            @RequestParam(name = "dateTo", required = false) String dateTo,
            @RequestParam(name = "limit", defaultValue = "1000") int limit) {
        LocalDateTime from = dateFrom != null ? LocalDate.parse(dateFrom).atStartOfDay() : null;
        LocalDateTime to   = dateTo   != null ? LocalDate.parse(dateTo).atTime(23, 59, 59) : null;
        return ResponseEntity.ok(stockService.getMovements(companyId, productId, from, to, limit));
    }

    @GetMapping("/valuation")
    public ResponseEntity<List<ValuationLayerDTO>> getValuation(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "productId", required = false) Long productId) {
        return ResponseEntity.ok(stockService.getValuation(companyId, productId));
    }

    // ---- Agences distantes ----
    @GetMapping("/agencies")
    public ResponseEntity<List<AgencyDTO>> getAgencies(@RequestParam("companyId") Long companyId) {
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
}
