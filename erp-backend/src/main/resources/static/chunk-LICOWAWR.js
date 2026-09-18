import {
  CaisseService,
  formatFCFA
} from "./chunk-7VYQNHUV.js";
import {
  AmountInputDirective
} from "./chunk-G22KQXIY.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NRXD6HPP.js";
import {
  AccountingService
} from "./chunk-PGZXUWCB.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/operation-form/operation-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OperationFormComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r1.name, " \u2014 ", c_r1.journalName);
  }
}
function OperationFormComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Chargement des caisses\u2026");
    \u0275\u0275elementEnd();
  }
}
function OperationFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Aucune caisse ouverte. V\xE9rifiez la gestion des caisses.");
    \u0275\u0275elementEnd();
  }
}
function OperationFormComponent_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, " \u2192 apr\xE8s op\xE9ration : ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("positive", ctx_r1.type === "ENTREE")("negative", ctx_r1.type === "SORTIE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount((ctx_r1.selectedCaisse.soldeActuel || 0) + (ctx_r1.type === "ENTREE" ? +ctx_r1.form.montant : -ctx_r1.form.montant)), " ");
  }
}
function OperationFormComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 3);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Solde actuel : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, OperationFormComponent_Conditional_25_Conditional_6_Template, 4, 5, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.selectedCaisse.soldeActuel));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.montant ? 6 : -1);
  }
}
function OperationFormComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function OperationFormComponent_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearPartner());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function OperationFormComponent_Conditional_50_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5.ref);
  }
}
function OperationFormComponent_Conditional_50_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function OperationFormComponent_Conditional_50_For_2_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPartner(p_r5));
    });
    \u0275\u0275elementStart(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35)(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, OperationFormComponent_Conditional_50_For_2_Conditional_6_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r5.ref ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("client", p_r5.type === "customer")("supplier", p_r5.type === "supplier");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPartnerTypeLabel(p_r5.type), " ");
  }
}
function OperationFormComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, OperationFormComponent_Conditional_50_For_2_Template, 9, 8, "button", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredPartners);
  }
}
function OperationFormComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function OperationFormComponent_Conditional_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAccount());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function OperationFormComponent_Conditional_59_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function OperationFormComponent_Conditional_59_For_2_Template_button_click_0_listener() {
      const acc_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAccount(acc_r8));
    });
    \u0275\u0275elementStart(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acc_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r8.name);
  }
}
function OperationFormComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, OperationFormComponent_Conditional_59_For_2_Template, 5, 2, "button", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredAccounts);
  }
}
function OperationFormComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function OperationFormComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.type === "ENTREE" ? "add_circle" : "remove_circle");
  }
}
var OperationFormComponent = class _OperationFormComponent {
  get selectedCaisse() {
    return this.caisses.find((c) => c.id === this.form.caisseId);
  }
  constructor(caisseService, accountingService, authService, route, router) {
    this.caisseService = caisseService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.type = "ENTREE";
    this.caisses = [];
    this.accounts = [];
    this.filteredAccounts = [];
    this.partners = [];
    this.filteredPartners = [];
    this.companyId = 0;
    this.saving = false;
    this.loading = true;
    this.form = {
      caisseId: 0,
      companyId: 0,
      type: "ENTREE",
      montant: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      libelle: "",
      reference: "",
      tiersName: "",
      compteContrepartieId: 0
    };
    this.accountSearch = "";
    this.showAccountDrop = false;
    this.tiersSearch = "";
    this.showTiersDrop = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.form.companyId = this.companyId;
    const url = this.router.url;
    this.type = url.includes("sorties") ? "SORTIE" : "ENTREE";
    this.form.type = this.type;
    this.route.queryParams.subscribe((params) => {
      if (params["caisseId"])
        this.form.caisseId = +params["caisseId"];
    });
    this.loadCaisses();
    this.loadAccounts();
    this.loadPartners();
  }
  loadCaisses() {
    this.caisseService.getCaisses(this.companyId).subscribe({
      next: (data) => {
        this.caisses = data.filter((c) => c.status === "OUVERTE");
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadAccounts() {
    this.accountingService.getAccounts(this.companyId).subscribe({
      next: (data) => {
        this.accounts = data.filter((a) => !a.deprecated);
        this.filteredAccounts = this.accounts.slice(0, 30);
      }
    });
  }
  loadPartners() {
    this.accountingService.getPartners(this.companyId).subscribe({
      next: (data) => {
        this.partners = data;
        this.filteredPartners = data.slice(0, 20);
      }
    });
  }
  // ── Autocomplete compte ──
  filterAccounts() {
    const q = this.accountSearch.toLowerCase();
    this.filteredAccounts = q ? this.accounts.filter((a) => a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q)).slice(0, 30) : this.accounts.slice(0, 30);
  }
  selectAccount(acc) {
    this.form.compteContrepartieId = acc.id;
    this.accountSearch = `${acc.code} \u2014 ${acc.name}`;
    this.showAccountDrop = false;
  }
  clearAccount() {
    this.form.compteContrepartieId = 0;
    this.accountSearch = "";
  }
  // ── Autocomplete tiers ──
  filterPartners() {
    const q = this.tiersSearch.toLowerCase();
    this.filteredPartners = q ? this.partners.filter((p) => p.name.toLowerCase().includes(q) || (p.ref || "").toLowerCase().includes(q)).slice(0, 20) : this.partners.slice(0, 20);
  }
  selectPartner(p) {
    this.form.tiersName = p.name;
    this.form.tiersId = p.id;
    this.tiersSearch = p.name;
    this.showTiersDrop = false;
    this.autoFillPartnerAccount(p);
  }
  autoFillPartnerAccount(p) {
    let matchCode = null;
    if (p.type === "customer" && p.receivableAccountCode) {
      matchCode = p.receivableAccountCode;
    } else if (p.type === "supplier") {
      const supplier = this.accounts.find((a) => a.code.startsWith("401"));
      if (supplier) {
        this.form.compteContrepartieId = supplier.id;
        this.accountSearch = `${supplier.code} \u2014 ${supplier.name}`;
        return;
      }
    }
    if (matchCode) {
      const acc = this.accounts.find((a) => a.code === matchCode);
      if (acc) {
        this.form.compteContrepartieId = acc.id;
        this.accountSearch = `${acc.code} \u2014 ${acc.name}`;
      }
    }
  }
  clearPartner() {
    this.form.tiersName = "";
    this.form.tiersId = void 0;
    this.tiersSearch = "";
  }
  getPartnerTypeLabel(type) {
    if (type === "customer")
      return "Client";
    if (type === "supplier")
      return "Fournisseur";
    return type;
  }
  onDocumentClick(e) {
    const t = e.target;
    if (!t.closest(".ac-wrap.account-wrap"))
      this.showAccountDrop = false;
    if (!t.closest(".ac-wrap.tiers-wrap"))
      this.showTiersDrop = false;
  }
  submit() {
    if (!this.form.caisseId || !this.form.montant || !this.form.compteContrepartieId)
      return;
    this.saving = true;
    this.caisseService.addOperation(this.form).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(["/caisses/brouillard"], {
          queryParams: { caisseId: this.form.caisseId, date: this.form.date }
        });
      },
      error: (e) => {
        this.saving = false;
        alert(e.error?.message || "Erreur lors de l'enregistrement.");
      }
    });
  }
  cancel() {
    this.router.navigate(["/caisses/dashboard"]);
  }
  formatAmount(v) {
    return formatFCFA(v);
  }
  static {
    this.\u0275fac = function OperationFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OperationFormComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OperationFormComponent, selectors: [["app-operation-form"]], hostBindings: function OperationFormComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OperationFormComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument);
      }
    }, decls: 67, vars: 31, consts: [[1, "op-form-page"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "page-title"], [1, "form-card"], [1, "form-grid"], [1, "form-row", "full"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "hint"], [1, "hint", "warn"], [1, "solde-preview"], [1, "form-row"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "text", "appAmountInput", "", "inputmode", "decimal", "placeholder", "0", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Description de l'op\xE9ration", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "N\xB0 pi\xE8ce, re\xE7u\u2026", 3, "ngModelChange", "ngModel"], [1, "form-row", "ac-wrap", "tiers-wrap"], [1, "ac-field"], [1, "material-icons", "ac-icon"], ["type", "text", "placeholder", "Rechercher un client ou fournisseur\u2026", 3, "ngModelChange", "input", "focus", "ngModel"], ["type", "button", 1, "ac-clear"], [1, "ac-dropdown"], [1, "form-row", "full", "ac-wrap", "account-wrap"], ["type", "text", "placeholder", "Rechercher un compte (code ou libell\xE9)\u2026", 3, "ngModelChange", "input", "focus", "ngModel"], [1, "form-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "solde-after"], ["type", "button", 1, "ac-clear", 3, "click"], ["type", "button", 1, "ac-item"], ["type", "button", 1, "ac-item", 3, "click"], [1, "partner-avatar"], [1, "partner-info"], [1, "partner-name"], [1, "partner-ref"], [1, "partner-type"], [1, "ac-code"], [1, "ac-name"]], template: function OperationFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function OperationFormComponent_Template_button_click_2_listener() {
          return ctx.cancel();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div")(9, "h1");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 6)(15, "div", 7)(16, "label");
        \u0275\u0275text(17, "Caisse *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function OperationFormComponent_Template_select_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.caisseId, $event) || (ctx.form.caisseId = $event);
          return $event;
        });
        \u0275\u0275elementStart(19, "option", 9);
        \u0275\u0275text(20, "\u2014 S\xE9lectionner une caisse ouverte \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(21, OperationFormComponent_For_22_Template, 2, 3, "option", 9, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, OperationFormComponent_Conditional_23_Template, 2, 0, "span", 10);
        \u0275\u0275conditionalCreate(24, OperationFormComponent_Conditional_24_Template, 2, 0, "span", 11);
        \u0275\u0275conditionalCreate(25, OperationFormComponent_Conditional_25_Template, 7, 2, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13)(27, "label");
        \u0275\u0275text(28, "Date *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function OperationFormComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.date, $event) || (ctx.form.date = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 13)(31, "label");
        \u0275\u0275text(32, "Montant (FCFA) *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function OperationFormComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.montant, $event) || (ctx.form.montant = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 7)(35, "label");
        \u0275\u0275text(36, "Libell\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function OperationFormComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.libelle, $event) || (ctx.form.libelle = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 13)(39, "label");
        \u0275\u0275text(40, "R\xE9f\xE9rence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function OperationFormComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.reference, $event) || (ctx.form.reference = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 18)(43, "label");
        \u0275\u0275text(44, "Tiers (client / fournisseur)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 19)(46, "span", 20);
        \u0275\u0275text(47, "person_search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function OperationFormComponent_Template_input_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tiersSearch, $event) || (ctx.tiersSearch = $event);
          return $event;
        });
        \u0275\u0275listener("input", function OperationFormComponent_Template_input_input_48_listener() {
          return ctx.filterPartners();
        })("focus", function OperationFormComponent_Template_input_focus_48_listener() {
          ctx.showTiersDrop = true;
          return ctx.filterPartners();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(49, OperationFormComponent_Conditional_49_Template, 3, 0, "button", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(50, OperationFormComponent_Conditional_50_Template, 3, 0, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 24)(52, "label");
        \u0275\u0275text(53, "Compte de contrepartie *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 19)(55, "span", 20);
        \u0275\u0275text(56, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function OperationFormComponent_Template_input_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.accountSearch, $event) || (ctx.accountSearch = $event);
          return $event;
        });
        \u0275\u0275listener("input", function OperationFormComponent_Template_input_input_57_listener() {
          return ctx.filterAccounts();
        })("focus", function OperationFormComponent_Template_input_focus_57_listener() {
          ctx.showAccountDrop = true;
          return ctx.filterAccounts();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(58, OperationFormComponent_Conditional_58_Template, 3, 0, "button", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(59, OperationFormComponent_Conditional_59_Template, 3, 0, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 26)(61, "button", 27);
        \u0275\u0275listener("click", function OperationFormComponent_Template_button_click_61_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(62, "Annuler");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "button", 28);
        \u0275\u0275listener("click", function OperationFormComponent_Template_button_click_63_listener() {
          return ctx.submit();
        });
        \u0275\u0275conditionalCreate(64, OperationFormComponent_Conditional_64_Template, 2, 0, "span", 29)(65, OperationFormComponent_Conditional_65_Template, 2, 1, "span", 3);
        \u0275\u0275text(66);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("entree", ctx.type === "ENTREE")("sortie", ctx.type === "SORTIE");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.type === "ENTREE" ? "add_circle" : "remove_circle", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.type === "ENTREE" ? "Nouvelle entr\xE9e de caisse" : "Nouvelle sortie de caisse");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.type === "ENTREE" ? "Enregistrer un encaissement" : "Enregistrer un d\xE9caissement");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("placeholder", !ctx.form.caisseId);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.caisseId);
        \u0275\u0275advance();
        \u0275\u0275property("value", 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.caisses);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading && ctx.caisses.length === 0 ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.caisses.length === 0 ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selectedCaisse && ctx.selectedCaisse.soldeActuel != null ? 25 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.date);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.montant);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.libelle);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.reference);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.tiersSearch);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.tiersName ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTiersDrop && ctx.filteredPartners.length > 0 ? 50 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.accountSearch);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.compteContrepartieId ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAccountDrop && ctx.filteredAccounts.length > 0 ? 59 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("entree", ctx.type === "ENTREE")("sortie", ctx.type === "SORTIE");
        \u0275\u0275property("disabled", ctx.saving || !ctx.form.caisseId || !ctx.form.montant || !ctx.form.compteContrepartieId);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.saving ? 64 : 65);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Enregistrement\u2026" : ctx.type === "ENTREE" ? "Enregistrer l'entr\xE9e" : "Enregistrer la sortie", " ");
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AmountInputDirective], styles: ['@charset "UTF-8";\n\n\n.op-form-page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 820px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  flex-shrink: 0;\n  transition: all 0.18s;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons.entree[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons.sortie[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n  font-family: "Inter", sans-serif;\n}\n.page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-size: 13.5px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  outline: none;\n  transition: border-color 0.18s;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.form-row[_ngcontent-%COMP%]   input.placeholder[_ngcontent-%COMP%], \n.form-row[_ngcontent-%COMP%]   select.placeholder[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.hint.warn[_ngcontent-%COMP%] {\n  color: #B45309;\n}\n.solde-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: 6px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border-light);\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.solde-preview[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary);\n}\n.solde-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.solde-preview[_ngcontent-%COMP%]   .solde-after[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.solde-preview[_ngcontent-%COMP%]   .solde-after[_ngcontent-%COMP%]   strong.positive[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.solde-preview[_ngcontent-%COMP%]   .solde-after[_ngcontent-%COMP%]   strong.negative[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-page);\n  padding: 0 10px;\n  transition: border-color 0.18s;\n}\n.ac-field[_ngcontent-%COMP%]:focus-within {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.ac-field[_ngcontent-%COMP%]   .ac-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--text-muted);\n  margin-right: 6px;\n  flex-shrink: 0;\n}\n.ac-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: none;\n  padding: 10px 0;\n  color: var(--text-primary);\n  font-size: 13.5px;\n  outline: none;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-shadow: none !important;\n}\n.ac-clear[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: var(--text-muted);\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ac-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-clear[_ngcontent-%COMP%]:hover {\n  background: #DC2626;\n}\n.ac-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: var(--shadow-lg);\n  max-height: 280px;\n  overflow-y: auto;\n  z-index: 200;\n  padding: 4px;\n}\n.ac-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 7px;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: background 0.15s;\n}\n.ac-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.ac-code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: monospace;\n  font-weight: 700;\n  color: var(--primary);\n  background: var(--primary-subtle);\n  padding: 2px 7px;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n.ac-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.partner-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A,\n      #22C55E);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.partner-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.partner-info[_ngcontent-%COMP%]   .partner-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.partner-info[_ngcontent-%COMP%]   .partner-ref[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.partner-type[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  flex-shrink: 0;\n}\n.partner-type.client[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.12);\n  color: #0891B2;\n}\n.partner-type.supplier[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n  color: #EA580C;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border-light);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 24px;\n  border-radius: 8px;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-submit.entree[_ngcontent-%COMP%] {\n  background: #16A34A;\n}\n.btn-submit.entree[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-submit.sortie[_ngcontent-%COMP%] {\n  background: #DC2626;\n}\n.btn-submit.sortie[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B91C1C;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=operation-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationFormComponent, [{
    type: Component,
    args: [{ selector: "app-operation-form", standalone: true, imports: [CommonModule, FormsModule, AmountInputDirective], template: `<div class="op-form-page">
  <div class="page-header">
    <button class="btn-back" (click)="cancel()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="page-title">
      <span class="material-icons" [class.entree]="type === 'ENTREE'" [class.sortie]="type === 'SORTIE'">
        {{ type === 'ENTREE' ? 'add_circle' : 'remove_circle' }}
      </span>
      <div>
        <h1>{{ type === 'ENTREE' ? 'Nouvelle entr\xE9e de caisse' : 'Nouvelle sortie de caisse' }}</h1>
        <p>{{ type === 'ENTREE' ? 'Enregistrer un encaissement' : 'Enregistrer un d\xE9caissement' }}</p>
      </div>
    </div>
  </div>

  <div class="form-card">
    <div class="form-grid">

      <!-- Caisse -->
      <div class="form-row full">
        <label>Caisse *</label>
        <select [(ngModel)]="form.caisseId" [class.placeholder]="!form.caisseId">
          <option [value]="0">\u2014 S\xE9lectionner une caisse ouverte \u2014</option>
          @for (c of caisses; track c.id) {
            <option [value]="c.id">{{ c.name }} \u2014 {{ c.journalName }}</option>
          }
        </select>
        @if (loading && caisses.length === 0) {
          <span class="hint">Chargement des caisses\u2026</span>
        }
        @if (!loading && caisses.length === 0) {
          <span class="hint warn">Aucune caisse ouverte. V\xE9rifiez la gestion des caisses.</span>
        }
        @if (selectedCaisse && selectedCaisse.soldeActuel != null) {
          <div class="solde-preview">
            <span class="material-icons">account_balance_wallet</span>
            Solde actuel : <strong>{{ formatAmount(selectedCaisse.soldeActuel) }}</strong>
            @if (form.montant) {
              <span class="solde-after">
                \u2192 apr\xE8s op\xE9ration :
                <strong [class.positive]="type === 'ENTREE'" [class.negative]="type === 'SORTIE'">
                  {{ formatAmount((selectedCaisse.soldeActuel || 0) + (type === 'ENTREE' ? +form.montant : -form.montant)) }}
                </strong>
              </span>
            }
          </div>
        }
      </div>

      <!-- Date + Montant -->
      <div class="form-row">
        <label>Date *</label>
        <input type="date" [(ngModel)]="form.date" />
      </div>
      <div class="form-row">
        <label>Montant (FCFA) *</label>
        <input type="text" appAmountInput inputmode="decimal" [(ngModel)]="form.montant" placeholder="0" />
      </div>

      <!-- Libell\xE9 -->
      <div class="form-row full">
        <label>Libell\xE9</label>
        <input type="text" [(ngModel)]="form.libelle" placeholder="Description de l'op\xE9ration" />
      </div>

      <!-- R\xE9f\xE9rence + Tiers (autocomplete partenaire) -->
      <div class="form-row">
        <label>R\xE9f\xE9rence</label>
        <input type="text" [(ngModel)]="form.reference" placeholder="N\xB0 pi\xE8ce, re\xE7u\u2026" />
      </div>

      <!-- Tiers autocomplete -->
      <div class="form-row ac-wrap tiers-wrap">
        <label>Tiers (client / fournisseur)</label>
        <div class="ac-field">
          <span class="material-icons ac-icon">person_search</span>
          <input type="text"
                 [(ngModel)]="tiersSearch"
                 (input)="filterPartners()"
                 (focus)="showTiersDrop = true; filterPartners()"
                 placeholder="Rechercher un client ou fournisseur\u2026" />
          @if (form.tiersName) {
            <button class="ac-clear" (click)="clearPartner()" type="button">
              <span class="material-icons">close</span>
            </button>
          }
        </div>
        @if (showTiersDrop && filteredPartners.length > 0) {
          <div class="ac-dropdown">
            @for (p of filteredPartners; track p.id) {
              <button type="button" class="ac-item" (click)="selectPartner(p)">
                <span class="partner-avatar">{{ p.name.charAt(0).toUpperCase() }}</span>
                <span class="partner-info">
                  <span class="partner-name">{{ p.name }}</span>
                  @if (p.ref) { <span class="partner-ref">{{ p.ref }}</span> }
                </span>
                <span class="partner-type" [class.client]="p.type === 'customer'" [class.supplier]="p.type === 'supplier'">
                  {{ getPartnerTypeLabel(p.type) }}
                </span>
              </button>
            }
          </div>
        }
      </div>

      <!-- Compte de contrepartie -->
      <div class="form-row full ac-wrap account-wrap">
        <label>Compte de contrepartie *</label>
        <div class="ac-field">
          <span class="material-icons ac-icon">account_tree</span>
          <input type="text"
                 [(ngModel)]="accountSearch"
                 (input)="filterAccounts()"
                 (focus)="showAccountDrop = true; filterAccounts()"
                 placeholder="Rechercher un compte (code ou libell\xE9)\u2026" />
          @if (form.compteContrepartieId) {
            <button class="ac-clear" (click)="clearAccount()" type="button">
              <span class="material-icons">close</span>
            </button>
          }
        </div>
        @if (showAccountDrop && filteredAccounts.length > 0) {
          <div class="ac-dropdown">
            @for (acc of filteredAccounts; track acc.id) {
              <button type="button" class="ac-item" (click)="selectAccount(acc)">
                <span class="ac-code">{{ acc.code }}</span>
                <span class="ac-name">{{ acc.name }}</span>
              </button>
            }
          </div>
        }
      </div>

    </div>

    <div class="form-footer">
      <button class="btn-cancel" (click)="cancel()">Annuler</button>
      <button class="btn-submit"
              [class.entree]="type === 'ENTREE'"
              [class.sortie]="type === 'SORTIE'"
              (click)="submit()"
              [disabled]="saving || !form.caisseId || !form.montant || !form.compteContrepartieId">
        @if (saving) { <span class="material-icons spin">sync</span> }
        @else { <span class="material-icons">{{ type === 'ENTREE' ? 'add_circle' : 'remove_circle' }}</span> }
        {{ saving ? 'Enregistrement\u2026' : (type === 'ENTREE' ? 'Enregistrer l\\'entr\xE9e' : 'Enregistrer la sortie') }}
      </button>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/caisses/components/operation-form/operation-form.component.scss */\n.op-form-page {\n  padding: 28px 32px;\n  max-width: 820px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  flex-shrink: 0;\n  transition: all 0.18s;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-back:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-title .material-icons {\n  font-size: 30px;\n}\n.page-title .material-icons.entree {\n  color: #16A34A;\n}\n.page-title .material-icons.sortie {\n  color: #DC2626;\n}\n.page-title h1 {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n  font-family: "Inter", sans-serif;\n}\n.page-title p {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.form-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row.full {\n  grid-column: 1/-1;\n}\n.form-row label {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-row input,\n.form-row select {\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-size: 13.5px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  outline: none;\n  transition: border-color 0.18s;\n}\n.form-row input:focus,\n.form-row select:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.form-row input.placeholder,\n.form-row select.placeholder {\n  color: var(--text-muted);\n}\n.hint {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.hint.warn {\n  color: #B45309;\n}\n.solde-preview {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: 6px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border-light);\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.solde-preview .material-icons {\n  font-size: 16px;\n  color: var(--primary);\n}\n.solde-preview strong {\n  color: var(--text-primary);\n}\n.solde-preview .solde-after {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.solde-preview .solde-after strong.positive {\n  color: #16A34A;\n}\n.solde-preview .solde-after strong.negative {\n  color: #DC2626;\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-field {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-page);\n  padding: 0 10px;\n  transition: border-color 0.18s;\n}\n.ac-field:focus-within {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.ac-field .ac-icon {\n  font-size: 17px;\n  color: var(--text-muted);\n  margin-right: 6px;\n  flex-shrink: 0;\n}\n.ac-field input {\n  flex: 1;\n  border: none;\n  background: none;\n  padding: 10px 0;\n  color: var(--text-primary);\n  font-size: 13.5px;\n  outline: none;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-shadow: none !important;\n}\n.ac-clear {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: var(--text-muted);\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ac-clear .material-icons {\n  font-size: 13px;\n}\n.ac-clear:hover {\n  background: #DC2626;\n}\n.ac-dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: var(--shadow-lg);\n  max-height: 280px;\n  overflow-y: auto;\n  z-index: 200;\n  padding: 4px;\n}\n.ac-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 7px;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: background 0.15s;\n}\n.ac-item:hover {\n  background: var(--bg-hover);\n}\n.ac-code {\n  font-size: 12px;\n  font-family: monospace;\n  font-weight: 700;\n  color: var(--primary);\n  background: var(--primary-subtle);\n  padding: 2px 7px;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n.ac-name {\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.partner-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #16A34A,\n      #22C55E);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.partner-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.partner-info .partner-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.partner-info .partner-ref {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.partner-type {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  flex-shrink: 0;\n}\n.partner-type.client {\n  background: rgba(6, 182, 212, 0.12);\n  color: #0891B2;\n}\n.partner-type.supplier {\n  background: rgba(249, 115, 22, 0.12);\n  color: #EA580C;\n}\n.form-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border-light);\n}\n.btn-cancel {\n  padding: 10px 20px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-cancel:hover {\n  color: var(--text-primary);\n}\n.btn-submit {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 24px;\n  border-radius: 8px;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-submit .material-icons {\n  font-size: 17px;\n}\n.btn-submit.entree {\n  background: #16A34A;\n}\n.btn-submit.entree:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-submit.sortie {\n  background: #DC2626;\n}\n.btn-submit.sortie:hover:not(:disabled) {\n  background: #B91C1C;\n}\n.btn-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=operation-form.component.css.map */\n'] }]
  }], () => [{ type: CaisseService }, { type: AccountingService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OperationFormComponent, { className: "OperationFormComponent", filePath: "app/modules/caisses/components/operation-form/operation-form.component.ts", lineNumber: 19 });
})();
export {
  OperationFormComponent
};
//# sourceMappingURL=chunk-LICOWAWR.js.map
