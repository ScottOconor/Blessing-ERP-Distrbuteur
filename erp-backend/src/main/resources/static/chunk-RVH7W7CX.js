import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/purchases/services/remise.service.ts
var RemiseService = class _RemiseService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/remises`;
  }
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
  getAllPaiements(companyId, type) {
    let params = new HttpParams().set("companyId", companyId);
    if (type)
      params = params.set("type", type);
    return this.http.get(`${this.base}/paiements`, { params });
  }
  getPaiement(id) {
    return this.http.get(`${this.base}/paiements/${id}`);
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
  getRapport(companyId, dateFrom, dateTo) {
    return this.http.get(`${this.base}/rapport`, {
      params: new HttpParams().set("companyId", companyId).set("dateFrom", dateFrom).set("dateTo", dateTo)
    });
  }
  static {
    this.\u0275fac = function RemiseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemiseService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemiseService, factory: _RemiseService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemiseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RemiseService
};
//# sourceMappingURL=chunk-RVH7W7CX.js.map
