import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EEF5WTPZ.js";

// src/app/modules/accounting/services/report.service.ts
var ReportService = class _ReportService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `http://${window.location.hostname}:8085/api/reports`;
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
  getBilan(req) {
    return this.http.post(`${this.apiUrl}/bilan`, req);
  }
  getCompteDeResultat(req) {
    return this.http.post(`${this.apiUrl}/compte-de-resultat`, req);
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
//# sourceMappingURL=chunk-NAOYGS5K.js.map
