package com.erp.stock.controller;

import com.erp.stock.dto.*;
import com.erp.stock.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stock")
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;

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
    public ResponseEntity<StockPickingDTO> createPicking(@RequestBody StockPickingRequest req) {
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

    // ---- Analyse ----
    @GetMapping("/report")
    public ResponseEntity<List<StockQuantDTO>> getStockReport(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(stockService.getStockReport(companyId));
    }

    @GetMapping("/movements")
    public ResponseEntity<List<StockMoveDTO>> getMovements(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "productId", required = false) Long productId,
            @RequestParam(name = "limit", defaultValue = "100") int limit) {
        return ResponseEntity.ok(stockService.getMovements(companyId, productId, limit));
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
