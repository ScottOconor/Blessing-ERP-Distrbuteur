import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/purchases/services/enlevement.service.ts
var EnlevementService = class _EnlevementService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/enlevements`;
  }
  // ── Config CRUD ───────────────────────────────────────────────────────────
  getAll(companyId) {
    return this.http.get(this.base, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  save(dto) {
    return this.http.post(this.base, dto);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  // ── Rapport ───────────────────────────────────────────────────────────────
  getRapport(companyId, dateFrom, dateTo) {
    const params = new HttpParams().set("companyId", companyId).set("dateFrom", dateFrom).set("dateTo", dateTo);
    return this.http.get(`${this.base}/rapport`, { params });
  }
  getInvoiceCosts(invoiceId) {
    return this.http.get(`${this.base}/invoice/${invoiceId}/costs`);
  }
  static {
    this.\u0275fac = function EnlevementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnlevementService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnlevementService, factory: _EnlevementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnlevementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EnlevementService
};
//# sourceMappingURL=chunk-4EAQGYLV.js.map
