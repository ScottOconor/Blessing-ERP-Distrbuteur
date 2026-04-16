import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EEF5WTPZ.js";

// src/app/modules/stock/services/stock.service.ts
var StockService = class _StockService {
  constructor(http) {
    this.http = http;
    this.api = `http://${window.location.hostname}:8085/api/stock`;
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
  // Products
  getProducts(companyId) {
    return this.http.get(`${this.api}/products`, { params: new HttpParams().set("companyId", companyId) });
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
  // Ajustements de stock
  getAdjustments(companyId) {
    return this.http.get(`${this.api}/adjustments`, { params: new HttpParams().set("companyId", companyId) });
  }
  createAdjustment(req) {
    return this.http.post(`${this.api}/adjustments`, req);
  }
  // Analyse
  getStockReport(companyId) {
    return this.http.get(`${this.api}/report`, { params: new HttpParams().set("companyId", companyId) });
  }
  getMovements(companyId, productId, limit = 100) {
    let params = new HttpParams().set("companyId", companyId).set("limit", limit);
    if (productId)
      params = params.set("productId", productId);
    return this.http.get(`${this.api}/movements`, { params });
  }
  getValuation(companyId, productId) {
    let params = new HttpParams().set("companyId", companyId);
    if (productId)
      params = params.set("productId", productId);
    return this.http.get(`${this.api}/valuation`, { params });
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
//# sourceMappingURL=chunk-YEOTRJFB.js.map
