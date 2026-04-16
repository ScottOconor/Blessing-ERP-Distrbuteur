import {
  AnalyticService
} from "./chunk-EFGTYIKV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FU5PLMG6.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/analytic/analytic-accounts.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AnalyticAccountsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.successMsg, " ");
  }
}
function AnalyticAccountsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function AnalyticAccountsComponent_Conditional_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function AnalyticAccountsComponent_Conditional_20_For_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngValue", a_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r3.code, " \u2014 ", a_r3.name);
  }
}
function AnalyticAccountsComponent_Conditional_20_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AnalyticAccountsComponent_Conditional_20_For_27_Conditional_0_Template, 2, 3, "option", 26);
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(a_r3.id !== ctx_r0.form.id ? 0 : -1);
  }
}
function AnalyticAccountsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12)(2, "h3", 13)(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275elementStart(7, "span", 3);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275conditionalCreate(10, AnalyticAccountsComponent_Conditional_20_Conditional_10_Template, 4, 1, "div", 9);
    \u0275\u0275elementStart(11, "div", 21)(12, "div", 22)(13, "label");
    \u0275\u0275text(14, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_20_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.code, $event) || (ctx_r0.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 22)(17, "label");
    \u0275\u0275text(18, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_20_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 22)(21, "label");
    \u0275\u0275text(22, "Compte parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_20_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.parentId, $event) || (ctx_r0.form.parentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 26);
    \u0275\u0275text(25, "\u2014 Aucun (compte racine) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, AnalyticAccountsComponent_Conditional_20_For_27_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 22)(29, "label");
    \u0275\u0275text(30, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AnalyticAccountsComponent_Conditional_20_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.description, $event) || (ctx_r0.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 28)(33, "button", 7);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_20_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(34, "span", 3);
    \u0275\u0275text(35, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 29);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_20_Template_button_click_37_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.editMode ? "edit" : "add_circle", " ");
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
function AnalyticAccountsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementEnd();
  }
}
function AnalyticAccountsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 3);
    \u0275\u0275text(2, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun compte analytique. Cr\xE9ez votre premier compte pour commencer.");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticAccountsComponent_Conditional_30_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "subdirectory_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function AnalyticAccountsComponent_Conditional_30_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span");
    \u0275\u0275conditionalCreate(3, AnalyticAccountsComponent_Conditional_30_For_15_Conditional_3_Template, 2, 0, "span", 32);
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 35)(15, "button", 36);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_30_For_15_Template_button_click_15_listener() {
      const account_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(account_r5));
    });
    \u0275\u0275elementStart(16, "span", 3);
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 37);
    \u0275\u0275listener("click", function AnalyticAccountsComponent_Conditional_30_For_15_Template_button_click_18_listener() {
      const account_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(account_r5));
    });
    \u0275\u0275elementStart(19, "span", 3);
    \u0275\u0275text(20, "archive");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const account_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("padding-left", ctx_r0.getDepth(account_r5) * 24, "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getDepth(account_r5) > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getDepth(account_r5) === 0 ? "#714B67" : "#333");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(account_r5.code);
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-weight", ctx_r0.getDepth(account_r5) === 0 ? "600" : "400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(account_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getParentLabel(account_r5.parentId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(account_r5.description || "\u2014");
  }
}
function AnalyticAccountsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 18)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 31);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, AnalyticAccountsComponent_Conditional_30_For_15_Template, 21, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.getSortedAccounts());
  }
}
var AnalyticAccountsComponent = class _AnalyticAccountsComponent {
  constructor(analyticService, authService) {
    this.analyticService = analyticService;
    this.authService = authService;
    this.accounts = [];
    this.flatAccounts = [];
    this.loading = false;
    this.recalculating = false;
    this.showForm = false;
    this.editMode = false;
    this.errorMsg = "";
    this.successMsg = "";
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
    let current = account;
    while (current.parentId) {
      depth++;
      current = this.flatAccounts.find((a) => a.id === current.parentId) || current;
      if (depth > 10)
        break;
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
      return new (__ngFactoryType__ || _AnalyticAccountsComponent)(\u0275\u0275directiveInject(AnalyticService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticAccountsComponent, selectors: [["app-analytic-accounts"]], decls: 31, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-subtitle"], [2, "display", "flex", "gap", "8px"], ["title", "R\xE9g\xE9n\xE8re les lignes analytiques depuis les \xE9critures valid\xE9es", 1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click"], [1, "alert-success", "mb-3"], [1, "alert-error", "mb-3"], [1, "card", "mb-3"], [1, "card"], [1, "card-header"], [2, "font-size", "14px"], [1, "material-icons", 2, "font-size", "18px", "color", "#714B67"], [1, "card-body", 2, "padding", "0"], [2, "text-align", "center", "padding", "40px"], [1, "empty-state"], [1, "data-table"], [1, "btn-icon", 3, "click"], [1, "card-body"], [1, "form-row", "cols-3"], [1, "form-group"], ["type", "text", "placeholder", "ex: ADM, ADM-DIR...", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "ex: Administration, Directrice...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "text", "placeholder", "Description optionnelle...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "spinner"], [2, "width", "120px", "text-align", "center"], [1, "material-icons", 2, "font-size", "13px", "color", "#aaa", "vertical-align", "middle", "margin-right", "4px"], [1, "text-muted"], [1, "text-muted", 2, "font-size", "12px"], [2, "text-align", "center"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Archiver", 1, "btn-icon", "btn-icon-danger", 3, "click"]], template: function AnalyticAccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Comptes Analytiques ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "G\xE9rez votre plan analytique (centres de co\xFBt, projets, axes d'analyse)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function AnalyticAccountsComponent_Template_button_click_10_listener() {
          return ctx.recalculate();
        });
        \u0275\u0275elementStart(11, "span", 3);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function AnalyticAccountsComponent_Template_button_click_14_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(15, "span", 3);
        \u0275\u0275text(16, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Nouveau compte ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(18, AnalyticAccountsComponent_Conditional_18_Template, 4, 1, "div", 8);
        \u0275\u0275conditionalCreate(19, AnalyticAccountsComponent_Conditional_19_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(20, AnalyticAccountsComponent_Conditional_20_Template, 39, 8, "div", 10);
        \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "h3", 13)(24, "span", 14);
        \u0275\u0275text(25, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Plan analytique ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 15);
        \u0275\u0275conditionalCreate(28, AnalyticAccountsComponent_Conditional_28_Template, 2, 0, "div", 16)(29, AnalyticAccountsComponent_Conditional_29_Template, 5, 0, "div", 17)(30, AnalyticAccountsComponent_Conditional_30_Template, 16, 0, "table", 18);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", ctx.recalculating);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.recalculating ? "hourglass_empty" : "refresh");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.recalculating ? "Recalcul..." : "Recalculer", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg && !ctx.showForm ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showForm ? 20 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading ? 28 : ctx.flatAccounts.length === 0 ? 29 : 30);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  color: #aaa;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  color: #ddd;\n}\n/*# sourceMappingURL=analytic-accounts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticAccountsComponent, [{
    type: Component,
    args: [{ selector: "app-analytic-accounts", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- HEADER -->
  <div class="page-header">
    <div>
      <h1 class="page-title">
        <span class="material-icons">analytics</span>
        Comptes Analytiques
      </h1>
      <p class="page-subtitle">G\xE9rez votre plan analytique (centres de co\xFBt, projets, axes d'analyse)</p>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-outline" (click)="recalculate()" [disabled]="recalculating" title="R\xE9g\xE9n\xE8re les lignes analytiques depuis les \xE9critures valid\xE9es">
        <span class="material-icons">{{ recalculating ? 'hourglass_empty' : 'refresh' }}</span>
        {{ recalculating ? 'Recalcul...' : 'Recalculer' }}
      </button>
      <button class="btn btn-primary" (click)="openNew()">
        <span class="material-icons">add</span>
        Nouveau compte
      </button>
    </div>
  </div>

  @if (successMsg) {
    <div class="alert-success mb-3">
      <span class="material-icons">check_circle</span>{{ successMsg }}
    </div>
  }
  @if (errorMsg && !showForm) {
    <div class="alert-error mb-3">
      <span class="material-icons">error_outline</span>{{ errorMsg }}
    </div>
  }

  <!-- FORMULAIRE -->
  @if (showForm) {
    <div class="card mb-3">
      <div class="card-header">
        <h3 style="font-size:14px">
          <span class="material-icons" style="font-size:18px;color:#714B67">
            {{ editMode ? 'edit' : 'add_circle' }}
          </span>
          {{ editMode ? 'Modifier le compte analytique' : 'Nouveau compte analytique' }}
        </h3>
        <button class="btn-icon" (click)="closeForm()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="card-body">
        @if (errorMsg) {
          <div class="alert-error mb-3">
            <span class="material-icons">error_outline</span>{{ errorMsg }}
          </div>
        }
        <div class="form-row cols-3">
          <div class="form-group">
            <label>Code *</label>
            <input type="text" class="form-control" [(ngModel)]="form.code"
              placeholder="ex: ADM, ADM-DIR..." maxlength="20">
          </div>
          <div class="form-group">
            <label>Nom *</label>
            <input type="text" class="form-control" [(ngModel)]="form.name"
              placeholder="ex: Administration, Directrice...">
          </div>
          <div class="form-group">
            <label>Compte parent</label>
            <select class="form-control" [(ngModel)]="form.parentId">
              <option [ngValue]="null">\u2014 Aucun (compte racine) \u2014</option>
              @for (a of flatAccounts; track a.id) {
                @if (a.id !== form.id) {
                  <option [ngValue]="a.id">{{ a.code }} \u2014 {{ a.name }}</option>
                }
              }
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" [(ngModel)]="form.description"
            placeholder="Description optionnelle...">
        </div>
        <div class="form-actions">
          <button class="btn btn-primary" (click)="save()">
            <span class="material-icons">save</span>
            Sauvegarder
          </button>
          <button class="btn btn-outline" (click)="closeForm()">Annuler</button>
        </div>
      </div>
    </div>
  }

  <!-- LISTE DES COMPTES -->
  <div class="card">
    <div class="card-header">
      <h3 style="font-size:14px">
        <span class="material-icons" style="font-size:18px;color:#714B67">account_tree</span>
        Plan analytique
      </h3>
    </div>
    <div class="card-body" style="padding:0">
      @if (loading) {
        <div style="text-align:center;padding:40px"><div class="spinner"></div></div>
      } @else if (flatAccounts.length === 0) {
        <div class="empty-state">
          <span class="material-icons">analytics</span>
          <p>Aucun compte analytique. Cr\xE9ez votre premier compte pour commencer.</p>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Nom</th>
              <th>Parent</th>
              <th>Description</th>
              <th style="width:120px;text-align:center">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (account of getSortedAccounts(); track account.id) {
              <tr>
                <td>
                  <span [style.paddingLeft.px]="getDepth(account) * 24">
                    @if (getDepth(account) > 0) {
                      <span class="material-icons" style="font-size:13px;color:#aaa;vertical-align:middle;margin-right:4px">subdirectory_arrow_right</span>
                    }
                    <strong [style.color]="getDepth(account) === 0 ? '#714B67' : '#333'">{{ account.code }}</strong>
                  </span>
                </td>
                <td [style.fontWeight]="getDepth(account) === 0 ? '600' : '400'">{{ account.name }}</td>
                <td><span class="text-muted">{{ getParentLabel(account.parentId) }}</span></td>
                <td><span class="text-muted" style="font-size:12px">{{ account.description || '\u2014' }}</span></td>
                <td style="text-align:center">
                  <button class="btn-icon" title="Modifier" (click)="openEdit(account)">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="btn-icon btn-icon-danger" title="Archiver" (click)="delete(account)">
                    <span class="material-icons">archive</span>
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/accounting/components/analytic/analytic-accounts.component.scss */\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  color: #aaa;\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  margin-bottom: 12px;\n  color: #ddd;\n}\n/*# sourceMappingURL=analytic-accounts.component.css.map */\n"] }]
  }], () => [{ type: AnalyticService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticAccountsComponent, { className: "AnalyticAccountsComponent", filePath: "src/app/modules/accounting/components/analytic/analytic-accounts.component.ts", lineNumber: 14 });
})();
export {
  AnalyticAccountsComponent
};
//# sourceMappingURL=chunk-ZE62BY3Y.js.map
