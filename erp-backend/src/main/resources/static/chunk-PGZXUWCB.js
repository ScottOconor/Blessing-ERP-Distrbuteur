import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/accounting/services/accounting.service.ts
var AccountingService = class _AccountingService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/api/accounting`;
    this.importUrl = `${environment.apiUrl}/api/import`;
  }
  // ===== PLAN COMPTABLE =====
  getAccounts(companyId) {
    return this.http.get(`${this.apiUrl}/accounts`, {
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
  toggleAccountDeprecated(id) {
    return this.http.patch(`${this.apiUrl}/accounts/${id}/toggle-deprecated`, {});
  }
  // ===== JOURNAUX =====
  getJournals(companyId) {
    return this.http.get(`${this.apiUrl}/journals`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  createJournal(journal) {
    return this.http.post(`${this.apiUrl}/journals`, journal);
  }
  updateJournal(id, journal) {
    return this.http.put(`${this.apiUrl}/journals/${id}`, journal);
  }
  deleteJournal(id) {
    return this.http.delete(`${this.apiUrl}/journals/${id}`);
  }
  // ===== ECRITURES =====
  getMoves(companyId, params) {
    let httpParams = new HttpParams().set("companyId", companyId);
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get(`${this.apiUrl}/moves`, { params: httpParams });
  }
  getMove(id) {
    return this.http.get(`${this.apiUrl}/moves/${id}`);
  }
  createMove(move) {
    return this.http.post(`${this.apiUrl}/moves`, move);
  }
  updateMove(id, move) {
    return this.http.put(`${this.apiUrl}/moves/${id}`, move);
  }
  postMove(id) {
    return this.http.post(`${this.apiUrl}/moves/${id}/post`, {});
  }
  cancelMove(id) {
    return this.http.post(`${this.apiUrl}/moves/${id}/cancel`, {});
  }
  // ===== PARTENAIRES =====
  getPartners(companyId) {
    return this.http.get(`${this.apiUrl}/partners`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  createPartner(partner) {
    return this.http.post(`${this.apiUrl}/partners`, partner);
  }
  updatePartner(id, partner) {
    return this.http.put(`${this.apiUrl}/partners/${id}`, partner);
  }
  deletePartner(id) {
    return this.http.delete(`${this.apiUrl}/partners/${id}`);
  }
  // ===== JOURNAL DETAIL =====
  getJournalAccountBalance(journalId, excludeMoveId) {
    const params = excludeMoveId != null ? new HttpParams().set("excludeMoveId", excludeMoveId) : new HttpParams();
    return this.http.get(`${this.apiUrl}/journals/${journalId}/account-balance`, { params });
  }
  getJournalMoves(journalId, companyId) {
    return this.http.get(`${this.apiUrl}/journals/${journalId}/moves`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getDailyBalances(journalId) {
    return this.http.get(`${this.apiUrl}/journals/${journalId}/daily-balances`);
  }
  getDailyBalance(journalId, date, companyId) {
    let params = new HttpParams().set("date", date);
    if (companyId)
      params = params.set("companyId", companyId);
    return this.http.get(`${this.apiUrl}/journals/${journalId}/daily-balance`, { params });
  }
  closeDayBalance(journalId, date) {
    return this.http.post(`${this.apiUrl}/journals/${journalId}/close-day`, { date });
  }
  reverseMove(id) {
    return this.http.post(`${this.apiUrl}/moves/${id}/reverse`, {});
  }
  resetMoveToDraft(id) {
    return this.http.post(`${this.apiUrl}/moves/${id}/reset-to-draft`, {});
  }
  downloadAccountsTemplate() {
    return this.http.get(`${this.importUrl}/accounts/template`, { responseType: "blob" });
  }
  downloadJournalsTemplate() {
    return this.http.get(`${this.importUrl}/journals/template`, { responseType: "blob" });
  }
  downloadWarehousesTemplate() {
    return this.http.get(`${this.importUrl}/warehouses/template`, { responseType: "blob" });
  }
  importAccounts(file, companyId, replace = false) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    fd.append("replace", String(replace));
    return this.http.post(`${this.importUrl}/accounts`, fd);
  }
  downloadAnalyticAccountsTemplate() {
    return this.http.get(`${this.importUrl}/analytic-accounts/template`, { responseType: "blob" });
  }
  importAnalyticAccounts(file, companyId) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    return this.http.post(`${this.importUrl}/analytic-accounts`, fd);
  }
  importPartners(file, companyId) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    return this.http.post(`${this.importUrl}/partners`, fd);
  }
  previewJournals(file, companyId) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    return this.http.post(`${this.importUrl}/journals/preview`, fd);
  }
  importJournals(file, companyId) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    return this.http.post(`${this.importUrl}/journals`, fd);
  }
  importPrecomptes(file, companyId) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    return this.http.post(`${environment.apiUrl}/api/precomptes/import`, fd);
  }
  importWarehouses(file, companyId) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    return this.http.post(`${this.importUrl}/warehouses`, fd);
  }
  getJournalTypes() {
    return this.http.get(`${this.importUrl}/journal-types`);
  }
  static {
    this.\u0275fac = function AccountingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountingService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountingService, factory: _AccountingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AccountingService
};
//# sourceMappingURL=chunk-PGZXUWCB.js.map
