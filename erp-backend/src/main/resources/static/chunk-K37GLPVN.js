import {
  AnalyticService
} from "./chunk-C5R2LK6A.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/analytic/analytic-accounts.component.ts
var _c0 = ["fileInput"];
var _forTrack0 = ($index, $item) => $item.id;
function AnalyticAccountsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 9);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg);
  }
}
function AnalyticAccountsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function AnalyticAccountsComponent_Conditional_31_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function AnalyticAccountsComponent_Conditional_31_For_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngValue", a_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r3.code, " \u2013 ", a_r3.name);
  }
}
function AnalyticAccountsComponent_Conditional_31_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AnalyticAccountsComponent_Conditional_31_For_27_Conditional_0_Template, 2, 3, "option", 35);
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(a_r3.id !== ctx_r0.form.id ? 0 : -1);
  }
}
function AnalyticAccountsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 25)(2, "div", 26)(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 27);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_31_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275conditionalCreate(10, AnalyticAccountsComponent_Conditional_31_Conditional_10_Template, 4, 1, "div", 29);
    \u0275\u0275elementStart(11, "div", 30)(12, "div", 31)(13, "label");
    \u0275\u0275text(14, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_31_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.code, $event) || (ctx_r0.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 31)(17, "label");
    \u0275\u0275text(18, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_31_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 31)(21, "label");
    \u0275\u0275text(22, "Compte parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_31_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.parentId, $event) || (ctx_r0.form.parentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 35);
    \u0275\u0275text(25, "\u2013 Aucun (racine) \u2013");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, AnalyticAccountsComponent_Conditional_31_For_27_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 36)(29, "label");
    \u0275\u0275text(30, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_31_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.description, $event) || (ctx_r0.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 38)(33, "button", 13);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_31_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(34, "span", 9);
    \u0275\u0275text(35, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 39);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_31_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275text(38, "Annuler");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editMode ? "edit" : "add_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editMode ? "Modifier le compte analytique" : "Nouveau compte analytique", " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.parentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.flatAccounts);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.description);
  }
}
function AnalyticAccountsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticAccountsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 9);
    \u0275\u0275text(2, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun compte analytique. Cr\xE9ez votre premier compte pour commencer.");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticAccountsComponent_Conditional_43_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "subdirectory_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function AnalyticAccountsComponent_Conditional_43_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 43);
    \u0275\u0275conditionalCreate(3, AnalyticAccountsComponent_Conditional_43_For_16_Conditional_3_Template, 2, 0, "span", 44);
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 42)(17, "button", 48);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_43_For_16_Template_button_click_17_listener() {
      const account_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(account_r5));
    });
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 49);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_43_For_16_Template_button_click_20_listener() {
      const account_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(account_r5));
    });
    \u0275\u0275elementStart(21, "span", 9);
    \u0275\u0275text(22, "archive");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const account_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("padding-left", ctx_r0.getDepth(account_r5) * 22, "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getDepth(account_r5) > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("root-avatar", ctx_r0.getDepth(account_r5) === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", account_r5.code.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("root-code", ctx_r0.getDepth(account_r5) === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(account_r5.code);
    \u0275\u0275advance();
    \u0275\u0275classProp("root-name", ctx_r0.getDepth(account_r5) === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(account_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getParentLabel(account_r5.parentId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(account_r5.description || "\u2013");
  }
}
function AnalyticAccountsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 41)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 42);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AnalyticAccountsComponent_Conditional_43_For_16_Template, 23, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.getSortedAccounts());
  }
}
var AnalyticAccountsComponent = class _AnalyticAccountsComponent {
  constructor(analyticService, accountingService, authService) {
    this.analyticService = analyticService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.accounts = [];
    this.flatAccounts = [];
    this.loading = false;
    this.recalculating = false;
    this.showForm = false;
    this.editMode = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.downloadingTemplate = false;
    this.importing = false;
    this.form = this.emptyForm();
    this.companyId = 1;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }
  load() {
    this.loading = true;
    this.analyticService.getAccounts(this.companyId).subscribe({
      next: (all) => {
        this.flatAccounts = all;
        this.accounts = this.buildTree(all);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  buildTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((a) => map.set(a.id, __spreadProps(__spreadValues({}, a), { children: [] })));
    const roots = [];
    list.forEach((a) => {
      const node = map.get(a.id);
      if (a.parentId) {
        const parent = map.get(a.parentId);
        if (parent)
          parent.children = [...parent.children || [], node];
      } else {
        roots.push(node);
      }
    });
    return roots;
  }
  openNew() {
    this.form = this.emptyForm();
    this.editMode = false;
    this.showForm = true;
    this.errorMsg = "";
  }
  openEdit(account) {
    this.form = __spreadValues({}, account);
    this.editMode = true;
    this.showForm = true;
    this.errorMsg = "";
  }
  closeForm() {
    this.showForm = false;
  }
  save() {
    if (!this.form.code.trim()) {
      this.errorMsg = "Le code est obligatoire";
      return;
    }
    if (!this.form.name.trim()) {
      this.errorMsg = "Le nom est obligatoire";
      return;
    }
    this.form.companyId = this.companyId;
    const obs = this.editMode && this.form.id ? this.analyticService.updateAccount(this.form.id, this.form) : this.analyticService.createAccount(this.form);
    obs.subscribe({
      next: () => {
        this.showForm = false;
        this.successMsg = this.editMode ? "Compte mis \xE0 jour" : "Compte cr\xE9\xE9";
        setTimeout(() => this.successMsg = "", 3e3);
        this.load();
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  delete(account) {
    if (!confirm(`Archiver le compte "${account.name}" ?`))
      return;
    this.analyticService.deleteAccount(account.id).subscribe({
      next: () => {
        this.successMsg = "Compte archiv\xE9";
        setTimeout(() => this.successMsg = "", 3e3);
        this.load();
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur";
      }
    });
  }
  recalculate() {
    this.recalculating = true;
    this.analyticService.recalculate(this.companyId).subscribe({
      next: (res) => {
        this.recalculating = false;
        this.successMsg = res.message;
        setTimeout(() => this.successMsg = "", 4e3);
      },
      error: () => {
        this.recalculating = false;
        this.errorMsg = "Erreur lors du recalcul";
      }
    });
  }
  downloadTemplate() {
    this.downloadingTemplate = true;
    this.accountingService.downloadAnalyticAccountsTemplate().subscribe({
      next: (blob) => {
        this.downloadingTemplate = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "modele_comptes_analytiques.xlsx";
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.downloadingTemplate = false;
        this.errorMsg = "Erreur t\xE9l\xE9chargement mod\xE8le";
      }
    });
  }
  onImport(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    input.value = "";
    this.importing = true;
    this.errorMsg = "";
    this.accountingService.importAnalyticAccounts(file, this.companyId).subscribe({
      next: (res) => {
        this.importing = false;
        this.successMsg = `Import termin\xE9 \u2014 ${res.created} cr\xE9\xE9s, ${res.updated} mis \xE0 jour`;
        if (res.errors?.length > 0)
          this.errorMsg = res.errors.slice(0, 3).join(" | ");
        setTimeout(() => this.successMsg = "", 4e3);
        this.load();
      },
      error: (err) => {
        this.importing = false;
        this.errorMsg = err?.error?.message || "Erreur lors de l'import";
      }
    });
  }
  emptyForm() {
    return { code: "", name: "", description: "", parentId: null, companyId: 1, active: true };
  }
  getParentLabel(parentId) {
    if (!parentId)
      return "\u2014";
    return this.flatAccounts.find((a) => a.id === parentId)?.name || "\u2014";
  }
  getDepth(account) {
    let depth = 0;
    let currentId = account.parentId;
    const visited = /* @__PURE__ */ new Set();
    while (currentId) {
      if (visited.has(currentId))
        break;
      visited.add(currentId);
      depth++;
      currentId = this.flatAccounts.find((a) => a.id === currentId)?.parentId;
    }
    return depth;
  }
  getSortedAccounts() {
    const result = [];
    const roots = this.flatAccounts.filter((a) => !a.parentId);
    const addWithChildren = (acc) => {
      result.push(acc);
      this.flatAccounts.filter((a) => a.parentId === acc.id).forEach((child) => addWithChildren(child));
    };
    roots.forEach((r) => addWithChildren(r));
    return result;
  }
  static {
    this.\u0275fac = function AnalyticAccountsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticAccountsComponent)(\u0275\u0275directiveInject(AnalyticService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticAccountsComponent, selectors: [["app-analytic-accounts"]], viewQuery: function AnalyticAccountsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 44, vars: 16, consts: [["fileInput", ""], [1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], ["title", "T\xE9l\xE9charger le mod\xE8le Excel", 1, "btn-outline", 3, "click", "disabled"], [1, "material-icons"], ["title", "Importer depuis Excel", 1, "btn-outline", 2, "cursor", "pointer", "margin", "0"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change", "disabled"], ["title", "R\xE9g\xE9n\xE8re les lignes analytiques depuis les \xE9critures valid\xE9es", 1, "btn-outline", 3, "click", "disabled"], [1, "btn-generate", 3, "click"], [1, "alert-ok"], [1, "alert-err"], [1, "form-panel"], [1, "content-card"], [1, "content-card-header"], [1, "card-title-left"], [1, "material-icons", 2, "color", "#2563eb", "font-size", "20px"], [1, "badge-count"], [1, "loading-state"], [1, "empty-state"], [1, "table-wrap"], [1, "form-panel-header"], [1, "form-panel-title"], [1, "btn-icon-close", 3, "click"], [1, "form-panel-body"], [1, "alert-err", "mb"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "ADM, ADM-DIR\u2026", "maxlength", "20", 1, "form-ctl", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Administration, Direction\u2026", 1, "form-ctl", "wide", 3, "ngModelChange", "ngModel"], [1, "form-ctl", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "form-group", "wide2"], ["type", "text", "placeholder", "Description optionnelle\u2026", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-outline", 3, "click"], [1, "spinner-lg"], [1, "gl-table"], [1, "c"], [1, "code-cell"], [1, "material-icons", "sub-arrow"], [1, "acc-avatar"], [1, "text-muted"], [1, "text-muted", "small"], ["title", "Modifier", 1, "action-btn", 3, "click"], ["title", "Archiver", 1, "action-btn", "danger", 3, "click"]], template: function AnalyticAccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
        \u0275\u0275text(4, "analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 5);
        \u0275\u0275text(7, "Comptes Analytiques");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "Plan analytique \u2014 centres de co\xFBt, projets, axes d'analyse");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
        \u0275\u0275listener("click", function AnalyticAccountsComponent_Template_button_click_11_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 10)(16, "span", 9);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275text(18);
        \u0275\u0275elementStart(19, "input", 11, 0);
        \u0275\u0275listener("change", function AnalyticAccountsComponent_Template_input_change_19_listener($event) {
          return ctx.onImport($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275listener("click", function AnalyticAccountsComponent_Template_button_click_21_listener() {
          return ctx.recalculate();
        });
        \u0275\u0275elementStart(22, "span", 9);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 13);
        \u0275\u0275listener("click", function AnalyticAccountsComponent_Template_button_click_25_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(26, "span", 9);
        \u0275\u0275text(27, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " Nouveau compte ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(29, AnalyticAccountsComponent_Conditional_29_Template, 4, 1, "div", 14);
        \u0275\u0275conditionalCreate(30, AnalyticAccountsComponent_Conditional_30_Template, 4, 1, "div", 15);
        \u0275\u0275conditionalCreate(31, AnalyticAccountsComponent_Conditional_31_Template, 39, 8, "div", 16);
        \u0275\u0275elementStart(32, "div", 17)(33, "div", 18)(34, "div", 19)(35, "span", 20);
        \u0275\u0275text(36, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "Plan analytique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 21);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(41, AnalyticAccountsComponent_Conditional_41_Template, 4, 0, "div", 22)(42, AnalyticAccountsComponent_Conditional_42_Template, 5, 0, "div", 23)(43, AnalyticAccountsComponent_Conditional_43_Template, 17, 0, "div", 24);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.downloadingTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.downloadingTemplate ? "hourglass_empty" : "download");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.downloadingTemplate ? "T\xE9l\xE9chargement\u2026" : "Mod\xE8le Excel", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.importing);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.importing ? "hourglass_empty" : "upload_file");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.importing ? "Import\u2026" : "Importer Excel", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.importing);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.recalculating);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.recalculating ? "hourglass_empty" : "refresh");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.recalculating ? "Recalcul\u2026" : "Recalculer", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg && !ctx.showForm ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showForm ? 31 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", ctx.flatAccounts.length, " compte(s)");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 41 : ctx.flatAccounts.length === 0 ? 42 : 43);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.alert-ok[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 14px;\n  padding: 10px 14px;\n  background: var(--success-bg);\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  color: var(--success);\n  font-size: 13px;\n}\n.alert-ok[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 14px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert-err.mb[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid #bfdbfe;\n  margin-bottom: 18px;\n  overflow: hidden;\n}\n.form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  background: var(--primary-subtle);\n  border-bottom: 1px solid #bfdbfe;\n}\n.form-panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.form-panel-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon-close[_ngcontent-%COMP%]:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.form-panel-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-group.wide[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.form-group.wide2[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 200px;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n  min-width: 120px;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n}\n.content-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.content-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.card-title-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.badge-count[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.gl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.gl-table[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.code-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sub-arrow[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #d1d5db;\n}\n.acc-avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.acc-avatar.root-avatar[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.root-code[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n.root-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=analytic-accounts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticAccountsComponent, [{
    type: Component,
    args: [{ selector: "app-analytic-accounts", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">analytics</span>
      <div>
        <h1 class="page-title">Comptes Analytiques</h1>
        <p class="page-sub">Plan analytique \u2014 centres de co\xFBt, projets, axes d'analyse</p>
      </div>
    </div>
    <div class="header-actions">
      <button class="btn-outline" (click)="downloadTemplate()" [disabled]="downloadingTemplate" title="T\xE9l\xE9charger le mod\xE8le Excel">
        <span class="material-icons">{{ downloadingTemplate ? 'hourglass_empty' : 'download' }}</span>
        {{ downloadingTemplate ? 'T\xE9l\xE9chargement\u2026' : 'Mod\xE8le Excel' }}
      </button>
      <label class="btn-outline" [class.disabled]="importing" title="Importer depuis Excel" style="cursor:pointer;margin:0">
        <span class="material-icons">{{ importing ? 'hourglass_empty' : 'upload_file' }}</span>
        {{ importing ? 'Import\u2026' : 'Importer Excel' }}
        <input #fileInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImport($event)" [disabled]="importing">
      </label>
      <button class="btn-outline" (click)="recalculate()" [disabled]="recalculating" title="R\xE9g\xE9n\xE8re les lignes analytiques depuis les \xE9critures valid\xE9es">
        <span class="material-icons">{{ recalculating ? 'hourglass_empty' : 'refresh' }}</span>
        {{ recalculating ? 'Recalcul\u2026' : 'Recalculer' }}
      </button>
      <button class="btn-generate" (click)="openNew()">
        <span class="material-icons">add</span> Nouveau compte
      </button>
    </div>
  </div>

  <!-- \u2550\u2550 ALERTES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (successMsg) {
    <div class="alert-ok"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (errorMsg && !showForm) {
    <div class="alert-err"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
  }

  <!-- \u2550\u2550 FORMULAIRE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (showForm) {
    <div class="form-panel">
      <div class="form-panel-header">
        <div class="form-panel-title">
          <span class="material-icons">{{ editMode ? 'edit' : 'add_circle' }}</span>
          {{ editMode ? 'Modifier le compte analytique' : 'Nouveau compte analytique' }}
        </div>
        <button class="btn-icon-close" (click)="closeForm()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="form-panel-body">
        @if (errorMsg) {
          <div class="alert-err mb"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
        }
        <div class="form-row">
          <div class="form-group">
            <label>Code *</label>
            <input type="text" class="form-ctl" [(ngModel)]="form.code" placeholder="ADM, ADM-DIR\u2026" maxlength="20">
          </div>
          <div class="form-group">
            <label>Nom *</label>
            <input type="text" class="form-ctl wide" [(ngModel)]="form.name" placeholder="Administration, Direction\u2026">
          </div>
          <div class="form-group">
            <label>Compte parent</label>
            <select class="form-ctl" [(ngModel)]="form.parentId">
              <option [ngValue]="null">\u2013 Aucun (racine) \u2013</option>
              @for (a of flatAccounts; track a.id) {
                @if (a.id !== form.id) {
                  <option [ngValue]="a.id">{{ a.code }} \u2013 {{ a.name }}</option>
                }
              }
            </select>
          </div>
          <div class="form-group wide2">
            <label>Description</label>
            <input type="text" class="form-ctl" [(ngModel)]="form.description" placeholder="Description optionnelle\u2026">
          </div>
        </div>
        <div class="form-actions">
          <button class="btn-generate" (click)="save()">
            <span class="material-icons">save</span> Sauvegarder
          </button>
          <button class="btn-outline" (click)="closeForm()">Annuler</button>
        </div>
      </div>
    </div>
  }

  <!-- \u2550\u2550 TABLEAU \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="content-card">
    <div class="content-card-header">
      <div class="card-title-left">
        <span class="material-icons" style="color:#2563eb;font-size:20px">account_tree</span>
        <span>Plan analytique</span>
        <span class="badge-count">{{ flatAccounts.length }} compte(s)</span>
      </div>
    </div>

    @if (loading) {
      <div class="loading-state">
        <div class="spinner-lg"></div>
        <p>Chargement\u2026</p>
      </div>
    } @else if (flatAccounts.length === 0) {
      <div class="empty-state">
        <span class="material-icons">analytics</span>
        <p>Aucun compte analytique. Cr\xE9ez votre premier compte pour commencer.</p>
      </div>
    } @else {
      <div class="table-wrap">
        <table class="gl-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Nom</th>
              <th>Parent</th>
              <th>Description</th>
              <th class="c">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (account of getSortedAccounts(); track account.id) {
              <tr>
                <td>
                  <div class="code-cell" [style.paddingLeft.px]="getDepth(account) * 22">
                    @if (getDepth(account) > 0) {
                      <span class="material-icons sub-arrow">subdirectory_arrow_right</span>
                    }
                    <span class="acc-avatar" [class.root-avatar]="getDepth(account) === 0">
                      {{ account.code.charAt(0) }}
                    </span>
                    <strong [class.root-code]="getDepth(account) === 0">{{ account.code }}</strong>
                  </div>
                </td>
                <td [class.root-name]="getDepth(account) === 0">{{ account.name }}</td>
                <td><span class="text-muted">{{ getParentLabel(account.parentId) }}</span></td>
                <td><span class="text-muted small">{{ account.description || '\u2013' }}</span></td>
                <td class="c">
                  <button class="action-btn" title="Modifier" (click)="openEdit(account)">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="action-btn danger" title="Archiver" (click)="delete(account)">
                    <span class="material-icons">archive</span>
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

</div>
`, styles: ["/* src/app/modules/accounting/components/analytic/analytic-accounts.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover {\n  background: #1d4ed8;\n}\n.alert-ok {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 14px;\n  padding: 10px 14px;\n  background: var(--success-bg);\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  color: var(--success);\n  font-size: 13px;\n}\n.alert-ok .material-icons {\n  font-size: 16px;\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 14px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.alert-err.mb {\n  margin-bottom: 16px;\n}\n.form-panel {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid #bfdbfe;\n  margin-bottom: 18px;\n  overflow: hidden;\n}\n.form-panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  background: var(--primary-subtle);\n  border-bottom: 1px solid #bfdbfe;\n}\n.form-panel-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.form-panel-title .material-icons {\n  font-size: 18px;\n}\n.btn-icon-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon-close .material-icons {\n  font-size: 18px;\n}\n.btn-icon-close:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.form-panel-body {\n  padding: 20px;\n}\n.form-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-group.wide {\n  flex: 1;\n  min-width: 180px;\n}\n.form-group.wide2 {\n  flex: 2;\n  min-width: 200px;\n}\n.form-ctl {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n  min-width: 120px;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.form-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n}\n.content-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.content-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.card-title-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.badge-count {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.gl-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table th {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table td {\n  padding: 9px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.gl-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.gl-table .c {\n  text-align: center;\n}\n.code-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sub-arrow {\n  font-size: 13px;\n  color: #d1d5db;\n}\n.acc-avatar {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.acc-avatar.root-avatar {\n  background: var(--primary);\n  color: white;\n}\n.root-code {\n  color: var(--primary);\n  font-weight: 700;\n}\n.root-name {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.text-muted {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.small {\n  font-size: 11px;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.action-btn .material-icons {\n  font-size: 17px;\n}\n.action-btn:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.action-btn.danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=analytic-accounts.component.css.map */\n"] }]
  }], () => [{ type: AnalyticService }, { type: AccountingService }, { type: AuthService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticAccountsComponent, { className: "AnalyticAccountsComponent", filePath: "app/modules/accounting/components/analytic/analytic-accounts.component.ts", lineNumber: 15 });
})();
export {
  AnalyticAccountsComponent
};
//# sourceMappingURL=chunk-K37GLPVN.js.map
