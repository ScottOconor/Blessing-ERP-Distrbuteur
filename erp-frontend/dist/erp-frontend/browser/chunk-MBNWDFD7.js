import {
  HttpClient,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EEF5WTPZ.js";

// src/app/core/auth/auth.service.ts
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `http://${window.location.hostname}:8085/api/auth`;
  }
  login(username, password) {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(tap((response) => {
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        const userData = response.user || { username };
        localStorage.setItem("user", JSON.stringify(userData));
      }
    }));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  isLoggedIn() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const payload = this.decodeToken(token);
      if (!payload || !payload.exp)
        return true;
      return payload.exp * 1e3 > Date.now();
    } catch (e) {
      return false;
    }
  }
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        return null;
      }
    }
    const token = this.getToken();
    if (token) {
      try {
        return this.decodeToken(token);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  getCompanyId() {
    const user = this.getCurrentUser();
    return user?.companyId || user?.company_id || 1;
  }
  getUserDisplayName() {
    const user = this.getCurrentUser();
    return user?.name || user?.username || user?.sub || "Utilisateur";
  }
  getUserInitials() {
    const name = this.getUserDisplayName();
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "US";
  }
  decodeToken(token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(atob(base64).split("").map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
      return JSON.parse(jsonPayload);
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
//# sourceMappingURL=chunk-MBNWDFD7.js.map
