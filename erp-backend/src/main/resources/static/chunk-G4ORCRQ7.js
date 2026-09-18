import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/shared/services/audit.service.ts
var AuditService = class _AuditService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/audit`;
  }
  /** Historique complet d'une entité précise */
  forEntity(entityType, entityId) {
    const params = new HttpParams().set("entityType", entityType).set("entityId", entityId);
    return this.http.get(`${this.base}/entity`, { params });
  }
  /** Supervision globale paginée */
  search(companyId, options = {}) {
    let params = new HttpParams().set("companyId", companyId);
    if (options.operator)
      params = params.set("operator", options.operator);
    if (options.entityType)
      params = params.set("entityType", options.entityType);
    if (options.from)
      params = params.set("from", options.from);
    if (options.to)
      params = params.set("to", options.to);
    if (options.page != null)
      params = params.set("page", options.page);
    if (options.size != null)
      params = params.set("size", options.size);
    return this.http.get(`${this.base}/search`, { params });
  }
  static {
    this.\u0275fac = function AuditService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuditService
};
//# sourceMappingURL=chunk-G4ORCRQ7.js.map
