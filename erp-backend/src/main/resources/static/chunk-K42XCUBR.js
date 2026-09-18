import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/core/services/company.service.ts
var CompanyService = class _CompanyService {
  constructor(http) {
    this.http = http;
    this.COMPANY_KEY = "erp_company";
    this.LOGO_KEY = "erp_company_logo";
    this.api = `${environment.apiUrl}/api/config/companies`;
  }
  load(companyId = 1) {
    return this.http.get(`${this.api}/${companyId}`).pipe(tap((c) => {
      localStorage.setItem(this.COMPANY_KEY, JSON.stringify(c));
      this.prefetchLogo(companyId);
    }));
  }
  getCached() {
    const raw = localStorage.getItem(this.COMPANY_KEY);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  save(companyId, c) {
    return this.http.put(`${this.api}/${companyId}`, c).pipe(tap((updated) => localStorage.setItem(this.COMPANY_KEY, JSON.stringify(updated))));
  }
  uploadLogo(companyId, file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.api}/${companyId}/logo`, fd).pipe(tap(() => this.prefetchLogo(companyId)));
  }
  uploadAppLogo(companyId, file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.api}/${companyId}/app-logo`, fd);
  }
  /** URL du logo entreprise (factures) */
  getLogoUrl(companyId = 1) {
    return `${environment.apiUrl}/api/config/companies/${companyId}/logo`;
  }
  /** URL du logo app (favicon + sidebar) */
  getAppLogoUrl(companyId = 1) {
    return `${environment.apiUrl}/api/config/companies/${companyId}/app-logo`;
  }
  /** Data URL base64 du logo mis en cache — pour l'embarquer dans les impressions */
  getCachedLogoDataUrl() {
    return localStorage.getItem(this.LOGO_KEY) ?? "";
  }
  clearCache() {
    localStorage.removeItem(this.COMPANY_KEY);
    localStorage.removeItem(this.LOGO_KEY);
    this.prefetchLogo(1);
  }
  /** Télécharge le logo et le stocke en base64 dans localStorage */
  prefetchLogo(companyId) {
    const url = `${environment.apiUrl}/api/config/companies/${companyId}/logo`;
    fetch(url).then((r) => {
      if (!r.ok) {
        localStorage.removeItem(this.LOGO_KEY);
        return;
      }
      return r.blob();
    }).then((blob) => {
      if (!blob)
        return;
      const reader = new FileReader();
      reader.onload = () => localStorage.setItem(this.LOGO_KEY, reader.result);
      reader.readAsDataURL(blob);
    }).catch(() => localStorage.removeItem(this.LOGO_KEY));
  }
  static {
    this.\u0275fac = function CompanyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CompanyService
};
//# sourceMappingURL=chunk-K42XCUBR.js.map
