import {
  HttpClient,
  HttpParams,
  Injectable,
  catchError,
  environment,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/core/services/module.service.ts
var BUSINESS_MODULES = [
  { code: "COMPTABILITE", name: "Comptabilit\xE9", description: "Journaux, pi\xE8ces comptables, rapports financiers", icon: "calculate", color: "#2563EB", route: "/accounting" },
  { code: "VENTES", name: "Ventes", description: "Bons de commande, factures clients, suivi commercial", icon: "point_of_sale", color: "#06B6D4", route: "/sales" },
  { code: "ACHATS", name: "Achats", description: "Commandes fournisseurs, r\xE9ceptions et mise \xE0 jour du stock", icon: "local_shipping", color: "#10B981", route: "/purchases" },
  { code: "STOCK", name: "Stock", description: "Articles, entrep\xF4ts, r\xE9ceptions, livraisons, transferts", icon: "inventory_2", color: "#F97316", route: "/stock" },
  { code: "CAISSE", name: "Caisses", description: "Gestion des caisses, entr\xE9es & sorties, brouillard journalier", icon: "point_of_sale", color: "#16A34A", route: "/caisses" },
  { code: "RH", name: "Ressources Humaines", description: "Employ\xE9s, contrats, paie (CNPS, IRPP, bulletins) et d\xE9clarations", icon: "badge", color: "#7C3AED", route: "/hr" },
  { code: "HELPDESK", name: "Helpdesk", description: "Tickets d'incidents, support utilisateurs, suivi des demandes", icon: "support_agent", color: "#0891b2", route: "/helpdesk" }
];
var ModuleService = class _ModuleService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/api/config/modules`;
    this.cache = null;
  }
  getModules(companyId) {
    return this.http.get(this.api, { params: new HttpParams().set("companyId", companyId) }).pipe(tap((list) => this.cache = list));
  }
  setInstalled(companyId, code, installed) {
    return this.http.put(`${this.api}/${code}`, null, {
      params: new HttpParams().set("companyId", companyId).set("installed", installed)
    }).pipe(tap((updated) => {
      if (this.cache) {
        const existing = this.cache.find((m) => m.code === updated.code);
        if (existing)
          existing.installed = updated.installed;
        else
          this.cache.push(updated);
      }
    }));
  }
  /** Charge (si pas déjà en cache) et renvoie le cache — pour la garde de route. */
  ensureLoaded(companyId) {
    if (this.cache)
      return of(this.cache);
    return this.getModules(companyId).pipe(catchError(() => of([])));
  }
  /** Lecture synchrone du cache — true par défaut si pas encore chargé (fail-open). */
  isInstalledCached(code) {
    if (!this.cache)
      return true;
    const found = this.cache.find((m) => m.code === code);
    return found ? found.installed : true;
  }
  static {
    this.\u0275fac = function ModuleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModuleService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModuleService, factory: _ModuleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  BUSINESS_MODULES,
  ModuleService
};
//# sourceMappingURL=chunk-IIQL67GJ.js.map
