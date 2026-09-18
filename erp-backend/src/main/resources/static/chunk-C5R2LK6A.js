import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/accounting/services/analytic.service.ts
var AnalyticService = class _AnalyticService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/api/analytic`;
  }
  // ===== COMPTES ANALYTIQUES =====
  getAccounts(companyId) {
    return this.http.get(`${this.apiUrl}/accounts`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getAccountTree(companyId) {
    return this.http.get(`${this.apiUrl}/accounts/tree`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  createAccount(account) {
    return this.http.post(`${this.apiUrl}/accounts`, account);
  }
  updateAccount(id, account) {
    return this.http.put(`${this.apiUrl}/accounts/${id}`, account);
  }
  deleteAccount(id) {
    return this.http.delete(`${this.apiUrl}/accounts/${id}`);
  }
  // ===== LIGNES ANALYTIQUES =====
  getLines(companyId, params) {
    let httpParams = new HttpParams().set("companyId", companyId);
    if (params?.analyticAccountId)
      httpParams = httpParams.set("analyticAccountId", params.analyticAccountId);
    if (params?.from)
      httpParams = httpParams.set("from", params.from);
    if (params?.to)
      httpParams = httpParams.set("to", params.to);
    return this.http.get(`${this.apiUrl}/lines`, { params: httpParams });
  }
  // ===== RECALCUL =====
  recalculate(companyId) {
    return this.http.post(`${this.apiUrl}/recalculate`, null, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  // ===== RAPPORT BALANCE ANALYTIQUE =====
  getBalance(companyId, from, to) {
    let httpParams = new HttpParams().set("companyId", companyId);
    if (from)
      httpParams = httpParams.set("from", from);
    if (to)
      httpParams = httpParams.set("to", to);
    return this.http.get(`${this.apiUrl}/report/balance`, { params: httpParams });
  }
  static {
    this.\u0275fac = function AnalyticService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticService, factory: _AnalyticService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AnalyticService
};
//# sourceMappingURL=chunk-C5R2LK6A.js.map
