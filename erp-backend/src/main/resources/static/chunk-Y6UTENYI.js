import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/config/services/config.service.ts
var MODULES = [
  "VENTES",
  "ACHATS",
  "STOCK",
  "COMPTABILITE",
  "CAISSE",
  "RH",
  "HELPDESK",
  "CONFIG"
];
var ACTIONS = ["VIEW", "CREATE", "EDIT", "DELETE"];
var OPTIONAL_ACTIONS = ["CANCEL", "VALIDATE"];
var OPTIONAL_ACTION_RESOURCES = {
  // annuler une facture (vente ou achat) ; sans ce droit → extourne obligatoire
  CANCEL: ["VENTES_FACTURES", "ACHATS_FACTURES"],
  // valider/comptabiliser les bulletins de paie
  VALIDATE: ["RH_BULLETINS"]
};
var SYSTEM_ROLE_CODES = ["SUPER_ADMIN", "ADMIN"];
var RESOURCES = {
  VENTES: ["COMMANDES", "FACTURES", "AVOIRS", "CLIENTS", "VENDEURS", "PAIEMENTS", "RISTOURNES", "PRECOMPTES"],
  ACHATS: ["COMMANDES", "FACTURES", "AVOIRS", "PAIEMENTS", "REMISES", "ENLEVEMENTS"],
  STOCK: ["PRODUITS", "MOUVEMENTS", "INVENTAIRE", "CASSES"],
  COMPTABILITE: ["JOURNAUX", "ECRITURES", "RAPPORTS"],
  CAISSE: ["CAISSES"],
  RH: ["EMPLOYES", "CONTRATS", "BULLETINS", "CONFIG_PAIE", "CONGES"],
  HELPDESK: ["TICKETS"],
  CONFIG: ["UTILISATEURS", "ROLES", "ENTREPRISES", "AUDIT", "MODULES"]
};
var MODULE_LABELS = {
  VENTES: "Ventes",
  ACHATS: "Achats",
  STOCK: "Stock",
  COMPTABILITE: "Comptabilit\xE9",
  CAISSE: "Caisse",
  RH: "Ressources Humaines",
  HELPDESK: "Helpdesk",
  CONFIG: "Configuration"
};
var RESOURCE_LABELS = {
  COMMANDES: "Commandes",
  FACTURES: "Factures",
  AVOIRS: "Avoirs",
  CLIENTS: "Clients",
  VENDEURS: "Vendeurs",
  PAIEMENTS: "Paiements",
  RISTOURNES: "Ristournes",
  REMISES: "Remises fournisseurs",
  ENLEVEMENTS: "Enl\xE8vements",
  PRODUITS: "Produits",
  MOUVEMENTS: "Mouvements de stock",
  INVENTAIRE: "Inventaire",
  CASSES: "Trous & Casses",
  JOURNAUX: "Journaux",
  ECRITURES: "\xC9critures comptables",
  RAPPORTS: "Rapports",
  PRECOMPTES: "Pr\xE9comptes",
  CAISSES: "Caisses",
  TICKETS: "Tickets support",
  EMPLOYES: "Employ\xE9s",
  CONTRATS: "Contrats",
  BULLETINS: "Bulletins de paie",
  CONFIG_PAIE: "Configuration paie",
  CONGES: "Cong\xE9s",
  UTILISATEURS: "Utilisateurs",
  ROLES: "R\xF4les",
  ENTREPRISES: "Entreprises",
  AUDIT: "Journal d'audit",
  MODULES: "Applications (installer/d\xE9sinstaller)"
};
var ConfigService = class _ConfigService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/api/config`;
  }
  // ── Entreprises ──────────────────────────────────────────────────
  getAllCompanies() {
    return this.http.get(`${this.api}/companies`);
  }
  getCompany(id) {
    return this.http.get(`${this.api}/companies/${id}`);
  }
  createCompany(c) {
    return this.http.post(`${this.api}/companies`, c);
  }
  updateCompany(id, c) {
    return this.http.put(`${this.api}/companies/${id}`, c);
  }
  // ── Rôles ────────────────────────────────────────────────────────
  getAllRoles() {
    return this.http.get(`${this.api}/roles`);
  }
  getSystemRoles() {
    return this.http.get(`${this.api}/roles/system`);
  }
  createRole(r) {
    return this.http.post(`${this.api}/roles`, r);
  }
  updateRole(roleId, r) {
    return this.http.put(`${this.api}/roles/${roleId}`, r);
  }
  deleteRole(roleId) {
    return this.http.delete(`${this.api}/roles/${roleId}`);
  }
  // ── Utilisateurs ─────────────────────────────────────────────────
  getAllUsers() {
    return this.http.get(`${this.api}/users`);
  }
  getUser(id) {
    return this.http.get(`${this.api}/users/${id}`);
  }
  createUser(req) {
    return this.http.post(`${this.api}/users`, req);
  }
  updateUser(id, req) {
    return this.http.put(`${this.api}/users/${id}`, req);
  }
  toggleUserActive(id) {
    return this.http.post(`${this.api}/users/${id}/toggle-active`, {});
  }
  // ── Clé API inter-agences ─────────────────────────────────────────
  getInterAgencyKey() {
    return this.http.get(`${this.api}/inter-agency-key`);
  }
  regenerateInterAgencyKey() {
    return this.http.post(`${this.api}/inter-agency-key/regenerate`, {});
  }
  // ── URL du Hub (licensing, helpdesk) ───────────────────────────────
  getHubUrl() {
    return this.http.get(`${this.api}/hub-url`);
  }
  setHubUrl(hubUrl) {
    return this.http.put(`${this.api}/hub-url`, { hubUrl });
  }
  // ── Agences distantes ─────────────────────────────────────────────
  getRemoteAgencies(all = false) {
    return this.http.get(`${this.api}/remote-agencies`, { params: { all: String(all) } });
  }
  getRemoteAgency(id) {
    return this.http.get(`${this.api}/remote-agencies/${id}`);
  }
  createRemoteAgency(a) {
    return this.http.post(`${this.api}/remote-agencies`, a);
  }
  updateRemoteAgency(id, a) {
    return this.http.put(`${this.api}/remote-agencies/${id}`, a);
  }
  toggleRemoteAgency(id) {
    return this.http.post(`${this.api}/remote-agencies/${id}/toggle`, {});
  }
  deleteRemoteAgency(id) {
    return this.http.delete(`${this.api}/remote-agencies/${id}`);
  }
  pingRemoteAgency(id) {
    return this.http.get(`${this.api}/remote-agencies/${id}/ping`);
  }
  static {
    this.\u0275fac = function ConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfigService, factory: _ConfigService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MODULES,
  ACTIONS,
  OPTIONAL_ACTIONS,
  OPTIONAL_ACTION_RESOURCES,
  SYSTEM_ROLE_CODES,
  RESOURCES,
  MODULE_LABELS,
  RESOURCE_LABELS,
  ConfigService
};
//# sourceMappingURL=chunk-Y6UTENYI.js.map
