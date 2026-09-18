import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/stock/services/stock.service.ts
var StockService = class _StockService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/api/stock`;
  }
  // Categories
  getCategories(companyId) {
    return this.http.get(`${this.api}/categories`, { params: new HttpParams().set("companyId", companyId) });
  }
  createCategory(dto) {
    return this.http.post(`${this.api}/categories`, dto);
  }
  updateCategory(id, dto) {
    return this.http.put(`${this.api}/categories/${id}`, dto);
  }
  deleteCategory(id) {
    return this.http.delete(`${this.api}/categories/${id}`);
  }
  // Units of measure (UDM)
  getUnitsOfMeasure(companyId) {
    return this.http.get(`${this.api}/units-of-measure`, { params: new HttpParams().set("companyId", companyId) });
  }
  createUnitOfMeasure(dto) {
    return this.http.post(`${this.api}/units-of-measure`, dto);
  }
  updateUnitOfMeasure(id, dto) {
    return this.http.put(`${this.api}/units-of-measure/${id}`, dto);
  }
  deleteUnitOfMeasure(id) {
    return this.http.delete(`${this.api}/units-of-measure/${id}`);
  }
  // Products
  getProducts(companyId, warehouseId) {
    let params = new HttpParams().set("companyId", companyId);
    if (warehouseId)
      params = params.set("warehouseId", warehouseId);
    return this.http.get(`${this.api}/products`, { params });
  }
  searchProducts(query, companyId) {
    let params = new HttpParams().set("companyId", companyId).set("search", query.trim());
    return this.http.get(`${this.api}/products`, { params });
  }
  getProduct(id) {
    return this.http.get(`${this.api}/products/${id}`);
  }
  createProduct(dto) {
    return this.http.post(`${this.api}/products`, dto);
  }
  updateProduct(id, dto) {
    return this.http.put(`${this.api}/products/${id}`, dto);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.api}/products/${id}`);
  }
  // Warehouses
  getWarehouses(companyId) {
    return this.http.get(`${this.api}/warehouses`, { params: new HttpParams().set("companyId", companyId) });
  }
  getWarehouse(id) {
    return this.http.get(`${this.api}/warehouses/${id}`);
  }
  createWarehouse(dto) {
    return this.http.post(`${this.api}/warehouses`, dto);
  }
  updateWarehouse(id, dto) {
    return this.http.put(`${this.api}/warehouses/${id}`, dto);
  }
  deleteWarehouse(id) {
    return this.http.delete(`${this.api}/warehouses/${id}`);
  }
  setDefaultWarehouse(id) {
    return this.http.put(`${this.api}/warehouses/${id}/set-default`, {});
  }
  // Locations
  getLocations(companyId) {
    return this.http.get(`${this.api}/locations`, { params: new HttpParams().set("companyId", companyId) });
  }
  createLocation(dto) {
    return this.http.post(`${this.api}/locations`, dto);
  }
  updateLocation(id, dto) {
    return this.http.put(`${this.api}/locations/${id}`, dto);
  }
  deleteLocation(id) {
    return this.http.delete(`${this.api}/locations/${id}`);
  }
  // Picking types
  getPickingTypes(companyId) {
    return this.http.get(`${this.api}/picking-types`, { params: new HttpParams().set("companyId", companyId) });
  }
  // Pickings
  getPickings(companyId, type) {
    let params = new HttpParams().set("companyId", companyId);
    if (type)
      params = params.set("type", type);
    return this.http.get(`${this.api}/pickings`, { params });
  }
  getReceptions(companyId) {
    return this.http.get(`${this.api}/receptions`, { params: new HttpParams().set("companyId", companyId) });
  }
  getLivraisons(companyId) {
    return this.http.get(`${this.api}/livraisons`, { params: new HttpParams().set("companyId", companyId) });
  }
  getTransferts(companyId) {
    return this.http.get(`${this.api}/transferts`, { params: new HttpParams().set("companyId", companyId) });
  }
  getPicking(id) {
    return this.http.get(`${this.api}/pickings/${id}`);
  }
  createPicking(req) {
    return this.http.post(`${this.api}/pickings`, req);
  }
  updatePicking(id, req) {
    return this.http.put(`${this.api}/pickings/${id}`, req);
  }
  validatePicking(id) {
    return this.http.post(`${this.api}/pickings/${id}/validate`, {});
  }
  cancelPicking(id) {
    return this.http.post(`${this.api}/pickings/${id}/cancel`, {});
  }
  // Quants
  getQuants(companyId, locationId, productId) {
    let params = new HttpParams().set("companyId", companyId);
    if (locationId)
      params = params.set("locationId", locationId);
    if (productId)
      params = params.set("productId", productId);
    return this.http.get(`${this.api}/quants`, { params });
  }
  // Dashboard
  getDashboard(companyId) {
    return this.http.get(`${this.api}/dashboard`, { params: new HttpParams().set("companyId", companyId) });
  }
  // Rapport analytique
  getAnalyticalReport(params) {
    let p = new HttpParams().set("companyId", params.companyId).set("dateFrom", params.dateFrom).set("dateTo", params.dateTo);
    params.warehouseIds.forEach((id) => {
      p = p.append("warehouseIds", id);
    });
    if (params.productId)
      p = p.set("productId", params.productId);
    if (params.categoryId)
      p = p.set("categoryId", params.categoryId);
    return this.http.get(`${this.api}/report/analytical`, { params: p });
  }
  // Fiche de stock détaillée
  getDetailedReport(params) {
    let p = new HttpParams().set("companyId", params.companyId).set("dateFrom", params.dateFrom).set("dateTo", params.dateTo);
    params.warehouseIds.forEach((id) => {
      p = p.append("warehouseIds", id);
    });
    if (params.productId)
      p = p.set("productId", params.productId);
    if (params.categoryId)
      p = p.set("categoryId", params.categoryId);
    return this.http.get(`${this.api}/report/detailed`, { params: p });
  }
  // Ajustements de stock
  getAdjustments(companyId) {
    return this.http.get(`${this.api}/adjustments`, { params: new HttpParams().set("companyId", companyId) });
  }
  createAdjustment(req) {
    return this.http.post(`${this.api}/adjustments`, req);
  }
  createAdjustmentsBulk(requests) {
    return this.http.post(`${this.api}/adjustments/bulk`, requests);
  }
  downloadCountingSheetPdf(dto) {
    return this.http.post(`${this.api}/adjustments/counting-sheet/pdf`, dto, { responseType: "blob" });
  }
  downloadInventoryReportPdf(dto) {
    return this.http.post(`${this.api}/adjustments/inventory-report/pdf`, dto, { responseType: "blob" });
  }
  // Trous & Casses
  getStockLosses(companyId, dateFrom, dateTo) {
    let params = new HttpParams().set("companyId", companyId);
    if (dateFrom)
      params = params.set("dateFrom", dateFrom);
    if (dateTo)
      params = params.set("dateTo", dateTo);
    return this.http.get(`${this.api}/casses`, { params });
  }
  createStockLoss(req) {
    return this.http.post(`${this.api}/casses`, req);
  }
  downloadCasseBordereauPdf(stockLossId) {
    return this.http.get(`${this.api}/casses/${stockLossId}/bordereau/pdf`, { responseType: "blob" });
  }
  downloadStockReportPdf(companyId) {
    return this.http.get(`${this.api}/report/pdf`, {
      params: new HttpParams().set("companyId", companyId),
      responseType: "blob"
    });
  }
  downloadMovementsPdf(companyId, opts = {}) {
    let params = new HttpParams().set("companyId", companyId).set("limit", opts.limit ?? 1e3);
    if (opts.productId)
      params = params.set("productId", opts.productId);
    if (opts.dateFrom)
      params = params.set("dateFrom", opts.dateFrom);
    if (opts.dateTo)
      params = params.set("dateTo", opts.dateTo);
    return this.http.get(`${this.api}/movements/pdf`, { params, responseType: "blob" });
  }
  downloadAnalyticalReportPdf(params) {
    let p = new HttpParams().set("companyId", params.companyId).set("dateFrom", params.dateFrom).set("dateTo", params.dateTo);
    params.warehouseIds.forEach((id) => {
      p = p.append("warehouseIds", id);
    });
    if (params.productId)
      p = p.set("productId", params.productId);
    if (params.categoryId)
      p = p.set("categoryId", params.categoryId);
    return this.http.get(`${this.api}/report/analytical/pdf`, { params: p, responseType: "blob" });
  }
  downloadDetailedReportPdf(params) {
    let p = new HttpParams().set("companyId", params.companyId).set("dateFrom", params.dateFrom).set("dateTo", params.dateTo);
    params.warehouseIds.forEach((id) => {
      p = p.append("warehouseIds", id);
    });
    if (params.productId)
      p = p.set("productId", params.productId);
    if (params.categoryId)
      p = p.set("categoryId", params.categoryId);
    return this.http.get(`${this.api}/report/detailed/pdf`, { params: p, responseType: "blob" });
  }
  // Analyse
  getStockReport(companyId) {
    return this.http.get(`${this.api}/report`, { params: new HttpParams().set("companyId", companyId) });
  }
  getMovements(companyId, opts = {}) {
    let params = new HttpParams().set("companyId", companyId).set("limit", opts.limit ?? 1e3);
    if (opts.productId)
      params = params.set("productId", opts.productId);
    if (opts.dateFrom)
      params = params.set("dateFrom", opts.dateFrom);
    if (opts.dateTo)
      params = params.set("dateTo", opts.dateTo);
    return this.http.get(`${this.api}/movements`, { params });
  }
  getValuation(companyId, productId) {
    let params = new HttpParams().set("companyId", companyId);
    if (productId)
      params = params.set("productId", productId);
    return this.http.get(`${this.api}/valuation`, { params });
  }
  // Réception directe (sans facture achat)
  createDirectReception(req) {
    return this.http.post(`${this.api}/receptions/directe`, req);
  }
  // Bordereau de réception (Dépôt Achat)
  getPendingReceptions(companyId) {
    return this.http.get(`${this.api}/receptions/pending`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getBordereau(pickingId) {
    return this.http.get(`${this.api}/receptions/${pickingId}/bordereau`);
  }
  validateBordereau(pickingId, lignes) {
    return this.http.post(`${this.api}/receptions/${pickingId}/bordereau/validate`, lignes);
  }
  downloadBordereauPdf(pickingId) {
    return this.http.get(`${this.api}/receptions/${pickingId}/bordereau/pdf`, { responseType: "blob" });
  }
  downloadBordereauExcel(pickingId) {
    return this.http.get(`${this.api}/receptions/${pickingId}/bordereau/excel`, { responseType: "blob" });
  }
  // Transferts inter-dépôts — réceptions
  getTransferReceptions(companyId, all = false) {
    let params = new HttpParams().set("companyId", companyId);
    if (all)
      params = params.set("all", true);
    return this.http.get(`${this.api}/transferts/receptions`, { params });
  }
  getTransferBordereau(receptionId) {
    return this.http.get(`${this.api}/transferts/receptions/${receptionId}/bordereau`);
  }
  downloadTransferBordereauPdf(receptionId) {
    return this.http.get(`${this.api}/transferts/receptions/${receptionId}/bordereau/pdf`, { responseType: "blob" });
  }
  confirmTransferReception(receptionId, lignes) {
    return this.http.post(`${this.api}/transferts/receptions/${receptionId}/confirm`, lignes);
  }
  // Agences distantes
  getAgencies(companyId) {
    return this.http.get(`${this.api}/agencies`, { params: new HttpParams().set("companyId", companyId) });
  }
  createAgency(dto) {
    return this.http.post(`${this.api}/agencies`, dto);
  }
  updateAgency(id, dto) {
    return this.http.put(`${this.api}/agencies/${id}`, dto);
  }
  // Expéditions inter-agences (agences distantes)
  getInterCompanyExpeditions(companyId) {
    return this.http.get(`${this.api}/inter-company/expeditions`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getInterCompanyExpedition(id) {
    return this.http.get(`${this.api}/inter-company/expeditions/${id}`);
  }
  createInterCompanyExpedition(req) {
    return this.http.post(`${this.api}/inter-company/expeditions`, req);
  }
  updateInterCompanyExpedition(id, req) {
    return this.http.put(`${this.api}/inter-company/expeditions/${id}`, req);
  }
  validateInterCompanyExpedition(id) {
    return this.http.post(`${this.api}/inter-company/expeditions/${id}/validate`, {});
  }
  cancelInterCompanyExpedition(id) {
    return this.http.post(`${this.api}/inter-company/expeditions/${id}/cancel`, {});
  }
  confirmInterCompanyReception(id) {
    return this.http.post(`${this.api}/inter-company/expeditions/${id}/confirm-reception`, {});
  }
  cancelInterCompanyReception(id) {
    return this.http.post(`${this.api}/inter-company/expeditions/${id}/cancel-reception`, {});
  }
  retryNotifySender(id) {
    return this.http.post(`${this.api}/inter-company/expeditions/${id}/retry-notify`, {});
  }
  static {
    this.\u0275fac = function StockService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StockService, factory: _StockService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  StockService
};
//# sourceMappingURL=chunk-LIGNVDFD.js.map
