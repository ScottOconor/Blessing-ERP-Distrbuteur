import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/core/utils/currency-format.util.ts
function formatFCFA(v, withSuffix = true) {
  const amount = v ?? 0;
  const formatted = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace(/[  ]/g, " ");
  return withSuffix ? `${formatted} FCFA` : formatted;
}

// src/app/modules/caisses/services/caisse.service.ts
var CaisseService = class _CaisseService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/caisses`;
  }
  getCaisses(companyId) {
    return this.http.get(this.base, { params: { companyId } });
  }
  getCaisse(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  createCaisse(dto) {
    return this.http.post(this.base, dto);
  }
  updateCaisse(id, dto) {
    return this.http.put(`${this.base}/${id}`, dto);
  }
  deleteCaisse(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  getDashboard(companyId) {
    return this.http.get(`${this.base}/dashboard`, { params: { companyId } });
  }
  getOperations(caisseId, companyId, type) {
    let params = { companyId };
    if (type)
      params["type"] = type;
    return this.http.get(`${this.base}/${caisseId}/operations`, { params });
  }
  getAllOperations(companyId, type) {
    let params = { companyId };
    if (type)
      params["type"] = type;
    return this.http.get(`${this.base}/operations`, { params });
  }
  addOperation(req) {
    return this.http.post(`${this.base}/operations`, req);
  }
  cloturerCaisse(id, companyId, req) {
    return this.http.put(`${this.base}/${id}/cloturer`, req ?? { counts: [] }, { params: { companyId } });
  }
  ouvrirSession(id, req) {
    return this.http.post(`${this.base}/${id}/ouvrir`, req);
  }
  rouvrirCaisse(id) {
    return this.http.post(`${this.base}/${id}/rouvrir`, null);
  }
  getSessions(caisseId) {
    return this.http.get(`${this.base}/${caisseId}/sessions`);
  }
  getSessionActive(caisseId) {
    return this.http.get(`${this.base}/${caisseId}/session-active`);
  }
  getBrouillard(caisseId, date) {
    return this.http.get(`${this.base}/${caisseId}/brouillard`, { params: { date } });
  }
  // Coupures
  getDenominations(companyId) {
    return this.http.get(`${this.base}/denominations`, { params: { companyId } });
  }
  seedDefaultDenominations(companyId) {
    return this.http.post(`${this.base}/denominations/seed-defaults`, null, { params: { companyId } });
  }
  createDenomination(dto) {
    return this.http.post(`${this.base}/denominations`, dto);
  }
  updateDenomination(id, dto) {
    return this.http.put(`${this.base}/denominations/${id}`, dto);
  }
  deleteDenomination(id) {
    return this.http.delete(`${this.base}/denominations/${id}`);
  }
  // Rapports
  getRapportCloture(sessionId) {
    return this.http.get(`${this.base}/sessions/${sessionId}/rapport-cloture`);
  }
  getRapportConsolide(companyId, dateFrom, dateTo, caisseIds) {
    let params = { companyId, dateFrom, dateTo };
    if (caisseIds && caisseIds.length)
      params["caisseIds"] = caisseIds;
    return this.http.get(`${this.base}/rapport-consolide`, { params });
  }
  static {
    this.\u0275fac = function CaisseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaisseService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CaisseService, factory: _CaisseService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaisseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  formatFCFA,
  CaisseService
};
//# sourceMappingURL=chunk-7VYQNHUV.js.map
