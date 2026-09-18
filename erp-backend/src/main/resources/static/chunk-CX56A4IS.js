import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/core/auth/auth.service.ts
var PRIVILEGED_ROLES = ["SUPER_ADMIN", "ADMIN"];
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/api/auth`;
    this.SESSION_KEY = "erp_session";
    this.ACTIVE_COMPANY_KEY = "erp_active_company";
  }
  login(username, password) {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(tap((session) => localStorage.setItem(this.SESSION_KEY, JSON.stringify(session))));
  }
  logout() {
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.ACTIVE_COMPANY_KEY);
  }
  getToken() {
    return this.getSession()?.token ?? null;
  }
  isLoggedIn() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const payload = this.decodeToken(token);
      return !payload?.exp || payload.exp * 1e3 > Date.now();
    } catch (e) {
      return false;
    }
  }
  getSession() {
    const raw = localStorage.getItem(this.SESSION_KEY);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  /** companyId actif pour toutes les requêtes API (spoke mono-agence, défaut = 1) */
  getCompanyId() {
    const active = localStorage.getItem(this.ACTIVE_COMPANY_KEY);
    if (active) {
      const parsed = +active;
      if (!isNaN(parsed) && parsed > 0)
        return parsed;
    }
    return 1;
  }
  setActiveCompanyId(id) {
    localStorage.setItem(this.ACTIVE_COMPANY_KEY, String(id));
  }
  /** Retourne null — informations d'entreprise à récupérer via ConfigService si besoin */
  getActiveCompany() {
    return null;
  }
  getRoleCode() {
    return this.getSession()?.roleCode ?? "";
  }
  isPrivileged() {
    return PRIVILEGED_ROLES.includes(this.getRoleCode());
  }
  isSuperAdmin() {
    return this.getRoleCode() === "SUPER_ADMIN";
  }
  isAdmin() {
    return this.isPrivileged();
  }
  canDelete() {
    return this.isPrivileged();
  }
  canImport() {
    return this.isPrivileged();
  }
  canManageConfig() {
    return this.isPrivileged();
  }
  canManageUsers() {
    return this.isPrivileged();
  }
  hasPermission(module, resource, action) {
    const session = this.getSession();
    if (!session)
      return false;
    if (this.isPrivileged())
      return true;
    return (session.permissions ?? []).some((p) => p.module === module && p.resource === resource && p.action === action);
  }
  hasAnyModulePermission(module) {
    const session = this.getSession();
    if (!session)
      return false;
    if (this.isPrivileged())
      return true;
    return (session.permissions ?? []).some((p) => p.module === module);
  }
  getUserDisplayName() {
    const s = this.getSession();
    return s?.fullName || s?.username || "Utilisateur";
  }
  getUserInitials() {
    const name = this.getUserDisplayName();
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "US";
  }
  decodeToken(token) {
    try {
      const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(decodeURIComponent(atob(base64).split("").map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join("")));
    } catch (e) {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-CX56A4IS.js.map
