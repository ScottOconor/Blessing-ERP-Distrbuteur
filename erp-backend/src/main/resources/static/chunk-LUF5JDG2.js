import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-NJUNWWEJ.js";

// src/app/core/services/notification.service.ts
var AUTO_DISMISS_MS = 6e3;
var NotificationService = class _NotificationService {
  constructor() {
    this.nextId = 1;
    this.toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  notify(message, type = "info") {
    const id = this.nextId++;
    this.toasts.update((list) => [...list, { id, message, type }]);
    setTimeout(() => this.dismiss(id), AUTO_DISMISS_MS);
  }
  dismiss(id) {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }
  static {
    this.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-LUF5JDG2.js.map
