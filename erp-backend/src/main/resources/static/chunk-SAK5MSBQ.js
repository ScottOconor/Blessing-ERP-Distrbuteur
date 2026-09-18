import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/sales/services/ristourne.service.ts
var RistourneService = class _RistourneService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/ristournes`;
  }
  // ===== Configuration =====
  getAll(companyId) {
    return this.http.get(this.base, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getByPartner(partnerId, companyId) {
    return this.http.get(`${this.base}/partner/${partnerId}`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  save(dto) {
    return this.http.post(this.base, dto);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  // ===== Règlements =====
  getAllPaiements(companyId, type) {
    let params = new HttpParams().set("companyId", companyId);
    if (type)
      params = params.set("type", type);
    return this.http.get(`${this.base}/paiements`, { params });
  }
  getRapport(companyId, dateFrom, dateTo) {
    const params = new HttpParams().set("companyId", companyId).set("dateFrom", dateFrom).set("dateTo", dateTo);
    return this.http.get(`${this.base}/rapport`, { params });
  }
  getPaiement(id) {
    return this.http.get(`${this.base}/paiements/${id}`);
  }
  savePaiement(dto) {
    return this.http.post(`${this.base}/paiements`, dto);
  }
  confirmPaiement(id) {
    return this.http.post(`${this.base}/paiements/${id}/confirm`, {});
  }
  cancelPaiement(id) {
    return this.http.post(`${this.base}/paiements/${id}/cancel`, {});
  }
  getGroupedPaiements(companyId, type) {
    let params = new HttpParams().set("companyId", companyId);
    if (type)
      params = params.set("type", type);
    return this.http.get(`${this.base}/paiements/grouped`, { params });
  }
  generateFacture(paiementIds, companyId) {
    return this.http.post(`${this.base}/paiements/generate-facture`, { paiementIds, companyId });
  }
  generateByQuarter(quarter, year, companyId) {
    return this.http.post(`${this.base}/paiements/generate-by-quarter`, { quarter, year, companyId });
  }
  generateByPeriod(dateStart, dateEnd, companyId) {
    return this.http.post(`${this.base}/paiements/generate-by-period`, { dateStart, dateEnd, companyId });
  }
  importBatch(rows, companyId) {
    return this.http.post(`${this.base}/import`, rows, { params: new HttpParams().set("companyId", companyId) });
  }
  static {
    this.\u0275fac = function RistourneService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RistourneService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RistourneService, factory: _RistourneService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RistourneService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RistourneService
};
//# sourceMappingURL=chunk-SAK5MSBQ.js.map
