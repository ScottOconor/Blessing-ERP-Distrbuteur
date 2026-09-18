import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-NJUNWWEJ.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.STORAGE_KEY = "blessing-theme";
    this.isDark = signal(this.loadPreference(), ...ngDevMode ? [{ debugName: "isDark" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    effect(() => {
      const dark = this.isDark();
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
      localStorage.setItem(this.STORAGE_KEY, dark ? "dark" : "light");
    });
    this.mediaQuery.addEventListener("change", (e) => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.isDark.set(e.matches);
      }
    });
  }
  toggle() {
    this.isDark.update((v) => !v);
  }
  /** Réinitialise vers le thème système (supprime la préférence stockée) */
  resetToSystem() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.isDark.set(this.mediaQuery.matches);
  }
  loadPreference() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored)
      return stored === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-FQUFPJIF.js.map
