import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/core/license/license.service.ts
var LicenseService = class _LicenseService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/api/license`;
    this.last = null;
  }
  fetchStatus() {
    return this.http.get(`${this.api}/self-status`).pipe(tap((status) => this.last = status));
  }
  requestActivation(contactEmail, contactPhone) {
    return this.http.post(`${this.api}/request-activation`, { contactEmail, contactPhone }).pipe(tap((status) => this.last = status));
  }
  /** Dernier statut connu (mis à jour par fetchStatus/requestActivation ou par le licenseInterceptor). */
  getLastKnown() {
    return this.last;
  }
  /** Appelé par licenseInterceptor quand un 403 backend révèle un changement d'état non encore vu ici.
   *  contactEmail/contactPhone : envoyés par LicenseEnforcementFilter depuis son propre cache, donc
   *  disponibles dès le tout premier blocage — pas besoin d'attendre un fetchStatus() préalable. */
  applyKnownStatus(status, message, contactEmail = null, contactPhone = null) {
    this.last = __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, this.last ?? { expiresAt: null, spokeId: "", contactEmail: null, contactPhone: null }), {
      status,
      message
    }), contactEmail ? { contactEmail } : {}), contactPhone ? { contactPhone } : {});
  }
  static {
    this.\u0275fac = function LicenseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LicenseService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LicenseService, factory: _LicenseService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LicenseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  LicenseService
};
//# sourceMappingURL=chunk-4TRWHX2X.js.map
