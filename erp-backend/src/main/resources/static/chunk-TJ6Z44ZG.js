import {
  CompanyService
} from "./chunk-K42XCUBR.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/core/services/app-branding.service.ts
var DEFAULT_NAME = "Blessing ERP";
var AppBrandingService = class _AppBrandingService {
  get appLogoUrl() {
    return `${this.companyService.getAppLogoUrl(1)}?t=${this._logoTs}`;
  }
  constructor(companyService) {
    this.companyService = companyService;
    this.appName = DEFAULT_NAME;
    this.hasAppLogo = false;
    this._logoTs = 0;
    const cached = this.companyService.getCached();
    if (cached)
      this.applyCompany(cached);
  }
  /** Appelé au démarrage de l'app — recharge depuis le serveur */
  apply() {
    this.companyService.load(1).subscribe((c) => {
      this.applyCompany(c);
    });
  }
  applyCompany(company) {
    this.appName = company.appName?.trim() || DEFAULT_NAME;
    this.hasAppLogo = !!company.hasAppLogo;
    this._logoTs = Date.now();
    this.applyTitle();
    if (this.hasAppLogo)
      this.applyFavicon();
  }
  updateAppName(name) {
    this.appName = name?.trim() || DEFAULT_NAME;
    this.applyTitle();
  }
  refreshAppLogo() {
    this.hasAppLogo = true;
    this._logoTs = Date.now();
    this.applyFavicon();
  }
  applyTitle(name) {
    const n = name ?? this.appName;
    if (n?.trim())
      document.title = n.trim();
  }
  applyFavicon() {
    const url = this.appLogoUrl;
    let link = document.querySelector('link[rel~="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  }
  static {
    this.\u0275fac = function AppBrandingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppBrandingService)(\u0275\u0275inject(CompanyService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppBrandingService, factory: _AppBrandingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBrandingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: CompanyService }], null);
})();

export {
  AppBrandingService
};
//# sourceMappingURL=chunk-TJ6Z44ZG.js.map
