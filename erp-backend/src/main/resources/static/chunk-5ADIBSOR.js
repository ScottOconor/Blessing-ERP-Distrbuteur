import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/accounting/services/report.service.ts
var ReportService = class _ReportService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/api/reports`;
  }
  getGeneralBalance4Cols(req) {
    return this.http.post(`${this.apiUrl}/general-balance/4cols`, req);
  }
  getGeneralBalance6Cols(req) {
    return this.http.post(`${this.apiUrl}/general-balance/6cols`, req);
  }
  getPartnerBalance4Cols(req) {
    return this.http.post(`${this.apiUrl}/partner-balance/4cols`, req);
  }
  getPartnerBalance6Cols(req) {
    return this.http.post(`${this.apiUrl}/partner-balance/6cols`, req);
  }
  getGrandLivre(req) {
    return this.http.post(`${this.apiUrl}/grand-livre`, req);
  }
  getGrandLivreTiers(req) {
    return this.http.post(`${this.apiUrl}/grand-livre-tiers`, req);
  }
  getBilan(req) {
    return this.http.post(`${this.apiUrl}/bilan`, req);
  }
  getCompteDeResultat(req) {
    return this.http.post(`${this.apiUrl}/compte-de-resultat`, req);
  }
  getCashbook(req) {
    return this.http.post(`${this.apiUrl}/cashbook`, req);
  }
  getSuiviTiers(companyId) {
    return this.http.get(`${this.apiUrl}/suivi-tiers`, { params: { companyId: companyId.toString() } });
  }
  static {
    this.\u0275fac = function ReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ReportService
};
//# sourceMappingURL=chunk-5ADIBSOR.js.map
