import {
  CaisseService,
  formatFCFA
} from "./chunk-7VYQNHUV.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  HttpClient,
  environment,
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
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/caisse-list/caisse-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CaisseListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 9);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function CaisseListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 3);
    \u0275\u0275text(2, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune caisse configur\xE9e. Cr\xE9ez-en une pour commencer.");
    \u0275\u0275elementEnd()();
  }
}
function CaisseListComponent_Conditional_16_For_20_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_16_For_20_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rouvrirCaisse(c_r2));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "lock_open");
    \u0275\u0275elementEnd()();
  }
}
function CaisseListComponent_Conditional_16_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 13)(11, "span", 3);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 15)(18, "button", 16);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_16_For_20_Template_button_click_18_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(c_r2));
    });
    \u0275\u0275elementStart(19, "span", 3);
    \u0275\u0275text(20, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_16_For_20_Template_button_click_21_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewSessions(c_r2));
    });
    \u0275\u0275elementStart(22, "span", 3);
    \u0275\u0275text(23, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, CaisseListComponent_Conditional_16_For_20_Conditional_24_Template, 3, 0, "button", 18);
    \u0275\u0275elementStart(25, "button", 19);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_16_For_20_Template_button_click_25_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCaisse(c_r2));
    });
    \u0275\u0275elementStart(26, "span", 3);
    \u0275\u0275text(27, "delete_outline");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.code || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.journalName || ctx_r2.getJournalName(c_r2.journalId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.responsableName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ouverte", c_r2.status === "OUVERTE")("cloturee", c_r2.status === "CLOTUREE");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.status === "OUVERTE" ? "lock_open" : "lock");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(c_r2.soldeActuel));
    \u0275\u0275advance(9);
    \u0275\u0275conditional(c_r2.status === "CLOTUREE" ? 24 : -1);
  }
}
function CaisseListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Solde actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, CaisseListComponent_Conditional_16_For_20_Template, 28, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.caisses);
  }
}
function CaisseListComponent_Conditional_17_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r6 = ctx.$implicit;
    \u0275\u0275property("value", j_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r6.name, " (", j_r6.code, ")");
  }
}
function CaisseListComponent_Conditional_17_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.name);
  }
}
function CaisseListComponent_Conditional_17_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function CaisseListComponent_Conditional_17_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function CaisseListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "span", 3);
    \u0275\u0275text(4, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementStart(8, "span", 3);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 25)(11, "div", 26)(12, "label");
    \u0275\u0275text(13, "Nom de la caisse *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseListComponent_Conditional_17_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 26)(16, "label");
    \u0275\u0275text(17, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseListComponent_Conditional_17_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.code, $event) || (ctx_r2.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 26)(20, "label");
    \u0275\u0275text(21, "Journal de caisse *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseListComponent_Conditional_17_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.journalId, $event) || (ctx_r2.form.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 30);
    \u0275\u0275text(24, "\u2014 S\xE9lectionner un journal \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, CaisseListComponent_Conditional_17_For_26_Template, 2, 3, "option", 30, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 26)(28, "label");
    \u0275\u0275text(29, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseListComponent_Conditional_17_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.responsableName, $event) || (ctx_r2.form.responsableName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 26)(32, "label");
    \u0275\u0275text(33, "Vendeur responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseListComponent_Conditional_17_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.sellerId, $event) || (ctx_r2.form.sellerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 32);
    \u0275\u0275text(36, "\u2014 Aucun \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, CaisseListComponent_Conditional_17_For_38_Template, 2, 2, "option", 30, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 26)(40, "label");
    \u0275\u0275text(41, "Seuil d'\xE9cart tol\xE9r\xE9 (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseListComponent_Conditional_17_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.seuilEcart, $event) || (ctx_r2.form.seuilEcart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 34)(44, "button", 35);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_17_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(45, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 36);
    \u0275\u0275listener("click", function CaisseListComponent_Conditional_17_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275conditionalCreate(47, CaisseListComponent_Conditional_17_Conditional_47_Template, 2, 0, "span", 9)(48, CaisseListComponent_Conditional_17_Conditional_48_Template, 2, 0, "span", 3);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.editMode ? "Modifier la caisse" : "Nouvelle caisse");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.journalId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.journals);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.responsableName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.sellerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.sellers);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.seuilEcart);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving || !ctx_r2.form.name || !ctx_r2.form.journalId);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving ? 47 : 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Enregistrement\u2026" : "Enregistrer", " ");
  }
}
var CaisseListComponent = class _CaisseListComponent {
  constructor(caisseService, accountingService, http, authService, router) {
    this.caisseService = caisseService;
    this.accountingService = accountingService;
    this.http = http;
    this.authService = authService;
    this.router = router;
    this.caisses = [];
    this.journals = [];
    this.sellers = [];
    this.loading = true;
    this.error = "";
    this.companyId = 0;
    this.showForm = false;
    this.editMode = false;
    this.saving = false;
    this.form = { name: "", journalId: 0, companyId: 0 };
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.form.companyId = this.companyId;
    this.load();
    this.loadJournals();
    this.loadSellers();
  }
  loadSellers() {
    this.http.get(`${environment.apiUrl}/api/sales/sellers`, { params: { companyId: this.companyId } }).subscribe({
      next: (data) => this.sellers = data,
      error: () => {
        this.sellers = [];
      }
    });
  }
  load() {
    this.loading = true;
    this.caisseService.getCaisses(this.companyId).subscribe({
      next: (data) => {
        this.caisses = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur chargement";
        this.loading = false;
      }
    });
  }
  loadJournals() {
    this.accountingService.getJournals(this.companyId).subscribe({
      next: (data) => {
        this.journals = data.filter((j) => j.type === "cash" || j.type === "bank");
      }
    });
  }
  openCreate() {
    this.form = { name: "", code: "", journalId: 0, companyId: this.companyId, responsableName: "" };
    this.editMode = false;
    this.showForm = true;
  }
  openEdit(caisse) {
    this.form = __spreadValues({}, caisse);
    this.editMode = true;
    this.showForm = true;
  }
  closeForm() {
    this.showForm = false;
  }
  save() {
    if (!this.form.name || !this.form.journalId)
      return;
    this.saving = true;
    const obs = this.editMode ? this.caisseService.updateCaisse(this.form.id, this.form) : this.caisseService.createCaisse(this.form);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        alert(e.error?.message || "Erreur lors de la sauvegarde.");
      }
    });
  }
  deleteCaisse(caisse) {
    if (!confirm(`D\xE9sactiver la caisse "${caisse.name}" ?`))
      return;
    this.caisseService.deleteCaisse(caisse.id).subscribe({
      next: () => this.load(),
      error: (e) => alert(e.error?.message || "Erreur.")
    });
  }
  rouvrirCaisse(caisse) {
    if (!confirm(`Rouvrir la caisse "${caisse.name}" ?`))
      return;
    this.caisseService.rouvrirCaisse(caisse.id).subscribe({
      next: () => this.load(),
      error: (e) => alert(e.error?.message || "Erreur.")
    });
  }
  viewSessions(caisse) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.router.navigate(["/caisses/brouillard"], { queryParams: { caisseId: caisse.id, date: today } });
  }
  getJournalName(id) {
    return this.journals.find((j) => j.id === id)?.name ?? "\u2014";
  }
  formatAmount(v) {
    return formatFCFA(v);
  }
  static {
    this.\u0275fac = function CaisseListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaisseListComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaisseListComponent, selectors: [["app-caisse-list"]], decls: 18, vars: 4, consts: [[1, "list-page"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "btn-primary", 3, "click"], [1, "loading-row"], [1, "empty-state"], [1, "table-wrap"], [1, "modal-overlay"], [1, "material-icons", "spin"], [1, "cai-table"], [1, "mono"], [1, "fw-bold"], [1, "badge"], [1, "amount"], [1, "action-btns"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Brouillard", 1, "btn-icon", 3, "click"], ["title", "Rouvrir", 1, "btn-icon", "green"], ["title", "D\xE9sactiver", 1, "btn-icon", "red", 3, "click"], ["title", "Rouvrir", 1, "btn-icon", "green", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-row"], ["type", "text", "placeholder", "Ex: Caisse principale", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: CAISSE-01", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "placeholder", "Nom du responsable", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "number", "placeholder", "Ex: 500 \u2014 vide = pas de seuil", "min", "0", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"]], template: function CaisseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "point_of_sale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1");
        \u0275\u0275text(7, "Gestion des caisses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Configurez vos caisses et journaux de caisse");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275listener("click", function CaisseListComponent_Template_button_click_10_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(11, "span", 3);
        \u0275\u0275text(12, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nouvelle caisse ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, CaisseListComponent_Conditional_14_Template, 4, 0, "div", 5);
        \u0275\u0275conditionalCreate(15, CaisseListComponent_Conditional_15_Template, 5, 0, "div", 6);
        \u0275\u0275conditionalCreate(16, CaisseListComponent_Conditional_16_Template, 21, 0, "div", 7);
        \u0275\u0275conditionalCreate(17, CaisseListComponent_Conditional_17_Template, 50, 12, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.loading ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.caisses.length === 0 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.caisses.length > 0 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showForm ? 17 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n.list-page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #16A34A;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  font-family: "Inter", sans-serif;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #15803D;\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 24px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.cai-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cai-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.cai-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cai-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: "Inter", sans-serif;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.badge.ouverte[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.badge.cloturee[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #64748B;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.18s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.btn-icon.green[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: rgba(22, 163, 74, 0.08);\n}\n.btn-icon.red[_ngcontent-%COMP%]:hover {\n  border-color: #DC2626;\n  color: #DC2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  width: 480px;\n  max-width: 95vw;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #16A34A;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-size: 13.5px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: border-color 0.18s;\n  outline: none;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.12);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.18s;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=caisse-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaisseListComponent, [{
    type: Component,
    args: [{ selector: "app-caisse-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="list-page">
  <div class="page-header">
    <div class="page-title">
      <span class="material-icons">point_of_sale</span>
      <div>
        <h1>Gestion des caisses</h1>
        <p>Configurez vos caisses et journaux de caisse</p>
      </div>
    </div>
    <button class="btn-primary" (click)="openCreate()">
      <span class="material-icons">add</span>
      Nouvelle caisse
    </button>
  </div>

  @if (loading) {
    <div class="loading-row"><span class="material-icons spin">sync</span> Chargement\u2026</div>
  }

  @if (!loading && caisses.length === 0) {
    <div class="empty-state">
      <span class="material-icons">point_of_sale</span>
      <p>Aucune caisse configur\xE9e. Cr\xE9ez-en une pour commencer.</p>
    </div>
  }

  @if (!loading && caisses.length > 0) {
    <div class="table-wrap">
      <table class="cai-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>Journal</th>
            <th>Responsable</th>
            <th>Statut</th>
            <th>Solde actuel</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (c of caisses; track c.id) {
            <tr>
              <td class="mono">{{ c.code || '\u2014' }}</td>
              <td class="fw-bold">{{ c.name }}</td>
              <td>{{ c.journalName || getJournalName(c.journalId) }}</td>
              <td>{{ c.responsableName || '\u2014' }}</td>
              <td>
                <span class="badge" [class.ouverte]="c.status === 'OUVERTE'" [class.cloturee]="c.status === 'CLOTUREE'">
                  <span class="material-icons">{{ c.status === 'OUVERTE' ? 'lock_open' : 'lock' }}</span>
                  {{ c.status }}
                </span>
              </td>
              <td class="amount">{{ formatAmount(c.soldeActuel) }}</td>
              <td>
                <div class="action-btns">
                  <button class="btn-icon" title="Modifier" (click)="openEdit(c)">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="btn-icon" title="Brouillard" (click)="viewSessions(c)">
                    <span class="material-icons">receipt_long</span>
                  </button>
                  @if (c.status === 'CLOTUREE') {
                    <button class="btn-icon green" title="Rouvrir" (click)="rouvrirCaisse(c)">
                      <span class="material-icons">lock_open</span>
                    </button>
                  }
                  <button class="btn-icon red" title="D\xE9sactiver" (click)="deleteCaisse(c)">
                    <span class="material-icons">delete_outline</span>
                  </button>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- Modal formulaire -->
  @if (showForm) {
    <div class="modal-overlay" (click)="closeForm()">
      <div class="modal-box" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <span class="material-icons">point_of_sale</span>
          <h2>{{ editMode ? 'Modifier la caisse' : 'Nouvelle caisse' }}</h2>
          <button class="btn-close" (click)="closeForm()"><span class="material-icons">close</span></button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <label>Nom de la caisse *</label>
            <input type="text" [(ngModel)]="form.name" placeholder="Ex: Caisse principale" />
          </div>
          <div class="form-row">
            <label>Code</label>
            <input type="text" [(ngModel)]="form.code" placeholder="Ex: CAISSE-01" />
          </div>
          <div class="form-row">
            <label>Journal de caisse *</label>
            <select [(ngModel)]="form.journalId">
              <option [value]="0">\u2014 S\xE9lectionner un journal \u2014</option>
              @for (j of journals; track j.id) {
                <option [value]="j.id">{{ j.name }} ({{ j.code }})</option>
              }
            </select>
          </div>
          <div class="form-row">
            <label>Responsable</label>
            <input type="text" [(ngModel)]="form.responsableName" placeholder="Nom du responsable" />
          </div>
          <div class="form-row">
            <label>Vendeur responsable</label>
            <select [(ngModel)]="form.sellerId">
              <option [ngValue]="undefined">\u2014 Aucun \u2014</option>
              @for (s of sellers; track s.id) { <option [value]="s.id">{{ s.name }}</option> }
            </select>
          </div>
          <div class="form-row">
            <label>Seuil d'\xE9cart tol\xE9r\xE9 (FCFA)</label>
            <input type="number" [(ngModel)]="form.seuilEcart" placeholder="Ex: 500 \u2014 vide = pas de seuil" min="0" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" (click)="closeForm()">Annuler</button>
          <button class="btn-save" (click)="save()" [disabled]="saving || !form.name || !form.journalId">
            @if (saving) { <span class="material-icons spin">sync</span> }
            @else { <span class="material-icons">save</span> }
            {{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}
          </button>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/caisses/components/caisse-list/caisse-list.component.scss */\n.list-page {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-title .material-icons {\n  font-size: 32px;\n  color: #16A34A;\n}\n.page-header .page-title h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  font-family: "Inter", sans-serif;\n}\n.page-header .page-title p {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:hover {\n  background: #15803D;\n}\n.loading-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.empty-state {\n  text-align: center;\n  padding: 50px 24px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n}\n.empty-state .material-icons {\n  font-size: 44px;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.table-wrap {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.cai-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cai-table th {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.cai-table td {\n  padding: 13px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cai-table tr:last-child td {\n  border-bottom: none;\n}\n.cai-table tr:hover td {\n  background: var(--bg-hover);\n}\n.mono {\n  font-family: monospace;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.fw-bold {\n  font-weight: 600;\n}\n.amount {\n  font-weight: 600;\n  font-family: "Inter", sans-serif;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge .material-icons {\n  font-size: 11px;\n}\n.badge.ouverte {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.badge.cloturee {\n  background: rgba(100, 116, 139, 0.12);\n  color: #64748B;\n}\n.action-btns {\n  display: flex;\n  gap: 4px;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.18s;\n}\n.btn-icon .material-icons {\n  font-size: 15px;\n}\n.btn-icon:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.btn-icon.green:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n  background: rgba(22, 163, 74, 0.08);\n}\n.btn-icon.red:hover {\n  border-color: #DC2626;\n  color: #DC2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  width: 480px;\n  max-width: 95vw;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header .material-icons {\n  font-size: 22px;\n  color: #16A34A;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close .material-icons {\n  font-size: 18px;\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-row input,\n.form-row select {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-size: 13.5px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: border-color 0.18s;\n  outline: none;\n}\n.form-row input:focus,\n.form-row select:focus {\n  border-color: #16A34A;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.12);\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.btn-cancel {\n  padding: 8px 18px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-cancel:hover {\n  color: var(--text-primary);\n}\n.btn-save {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.18s;\n}\n.btn-save .material-icons {\n  font-size: 16px;\n}\n.btn-save:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=caisse-list.component.css.map */\n'] }]
  }], () => [{ type: CaisseService }, { type: AccountingService }, { type: HttpClient }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaisseListComponent, { className: "CaisseListComponent", filePath: "app/modules/caisses/components/caisse-list/caisse-list.component.ts", lineNumber: 24 });
})();
export {
  CaisseListComponent
};
//# sourceMappingURL=chunk-6CWLLVYU.js.map
