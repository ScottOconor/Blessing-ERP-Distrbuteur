import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/sales/services/eleader.service.ts
var EleaderService = class _EleaderService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/eleader`;
  }
  // ── Configuration ──────────────────────────────────────────────────────────
  getConfig(companyId) {
    return this.http.get(`${this.base}/config`, { params: { companyId } });
  }
  saveConfig(config) {
    return this.http.put(`${this.base}/config`, config);
  }
  addMapping(companyId, mapping) {
    return this.http.post(`${this.base}/config/emballages`, mapping, { params: { companyId } });
  }
  deleteMapping(id) {
    return this.http.delete(`${this.base}/config/emballages/${id}`);
  }
  // ── Import PDF ──────────────────────────────────────────────────────────────
  extractText(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.base}/extract-text`, fd);
  }
  importPdf(file, companyId, invoiceModel) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", companyId.toString());
    if (invoiceModel)
      fd.append("invoiceModel", invoiceModel);
    return this.http.post(`${this.base}/import`, fd);
  }
  // ── Bons de commande eLeader ────────────────────────────────────────────────
  getOrders(companyId) {
    return this.http.get(`${this.base}/orders`, { params: { companyId } });
  }
  confirmOrder(id) {
    return this.http.post(`${this.base}/orders/${id}/confirm`, {});
  }
  cancelOrder(id) {
    return this.http.post(`${this.base}/orders/${id}/cancel`, {});
  }
  // ── Logs ────────────────────────────────────────────────────────────────────
  getLogs(companyId) {
    return this.http.get(`${this.base}/logs`, { params: { companyId } });
  }
  static {
    this.\u0275fac = function EleaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EleaderService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EleaderService, factory: _EleaderService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EleaderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EleaderService
};
//# sourceMappingURL=chunk-N3CNQQZB.js.map
