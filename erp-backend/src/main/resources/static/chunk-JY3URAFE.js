import {
  HrService
} from "./chunk-TCOWJUCH.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/runs/runs.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.payslip.id;
function RunsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function RunsComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openGen());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " G\xE9n\xE9rer un lot");
    \u0275\u0275elementEnd();
  }
}
function RunsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function RunsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Aucun lot. \xAB G\xE9n\xE9rer un lot \xBB calcule un bulletin pour chaque employ\xE9 actif.");
    \u0275\u0275elementEnd();
  }
}
function RunsComponent_Conditional_9_For_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function RunsComponent_Conditional_9_For_13_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateRun(r_r4));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function RunsComponent_Conditional_9_For_13_Conditional_17_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19);
    \u0275\u0275listener("click", function RunsComponent_Conditional_9_For_13_Conditional_17_For_17_Template_tr_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.open(p_r7));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 11)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.payslip.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.payslip.employeeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(p_r7.payslip.totalBrut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt(p_r7.payslip.totalNet));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pstate(p_r7.payslip.state));
  }
}
function RunsComponent_Conditional_9_For_13_Conditional_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, "Aucun bulletin dans ce lot.");
    \u0275\u0275elementEnd()();
  }
}
function RunsComponent_Conditional_9_For_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16)(2, "table", 17)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 11);
    \u0275\u0275text(10, "Brut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 11);
    \u0275\u0275text(12, "Net");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\xC9tat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RunsComponent_Conditional_9_For_13_Conditional_17_For_17_Template, 13, 5, "tr", 18, _forTrack1);
    \u0275\u0275conditionalCreate(18, RunsComponent_Conditional_9_For_13_Conditional_17_Conditional_18_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.runSlips);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.runSlips.length === 0 ? 18 : -1);
  }
}
function RunsComponent_Conditional_9_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 11)(10, "button", 12);
    \u0275\u0275listener("click", function RunsComponent_Conditional_9_For_13_Template_button_click_10_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle(r_r4));
    });
    \u0275\u0275elementStart(11, "span", 2);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function RunsComponent_Conditional_9_For_13_Template_button_click_13_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRegister(r_r4));
    });
    \u0275\u0275elementStart(14, "span", 2);
    \u0275\u0275text(15, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, RunsComponent_Conditional_9_For_13_Conditional_16_Template, 3, 0, "button", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, RunsComponent_Conditional_9_For_13_Conditional_17_Template, 19, 1, "tr");
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r4.dateStart, " \u2192 ", r_r4.dateEnd);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", r_r4.state === "DONE")("info", r_r4.state === "VERIFY");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(r_r4.state));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.expanded === r_r4.id ? "expand_less" : "expand_more");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.canValidate && r_r4.state !== "DONE" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expanded === r_r4.id ? 17 : -1);
  }
}
function RunsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Lot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, RunsComponent_Conditional_9_For_13_Template, 18, 11, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.runs);
  }
}
function RunsComponent_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function RunsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function RunsComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGen = false);
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function RunsComponent_Conditional_10_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "h3");
    \u0275\u0275text(4, "G\xE9n\xE9rer un lot de paie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function RunsComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGen = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275conditionalCreate(9, RunsComponent_Conditional_10_Conditional_9_Template, 2, 1, "div", 26);
    \u0275\u0275elementStart(10, "div", 27)(11, "div", 28)(12, "label");
    \u0275\u0275text(13, "Nom du lot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function RunsComponent_Conditional_10_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.genName, $event) || (ctx_r1.genName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "label");
    \u0275\u0275text(17, "Du *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function RunsComponent_Conditional_10_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.genFrom, $event) || (ctx_r1.genFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 30)(20, "label");
    \u0275\u0275text(21, "Au *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function RunsComponent_Conditional_10_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.genTo, $event) || (ctx_r1.genTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 32);
    \u0275\u0275text(24, "Un bulletin sera calcul\xE9 pour chaque employ\xE9 actif ayant un contrat.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 33)(26, "button", 34);
    \u0275\u0275listener("click", function RunsComponent_Conditional_10_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGen = false);
    });
    \u0275\u0275text(27, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 35);
    \u0275\u0275listener("click", function RunsComponent_Conditional_10_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generate());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.genName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.genFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.genTo);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.busy);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.busy ? "G\xE9n\xE9ration\u2026" : "G\xE9n\xE9rer");
  }
}
var RunsComponent = class _RunsComponent {
  constructor(hr, auth, router) {
    this.hr = hr;
    this.auth = auth;
    this.router = router;
    this.runs = [];
    this.runSlips = [];
    this.expanded = null;
    this.loading = false;
    this.showGen = false;
    this.busy = false;
    this.err = "";
    this.genName = "";
    this.genFrom = "";
    this.genTo = "";
    this.canCreate = false;
    this.canValidate = false;
  }
  ngOnInit() {
    this.companyId = this.auth.getCompanyId();
    this.canCreate = this.auth.hasPermission("RH", "BULLETINS", "CREATE") || this.auth.isPrivileged();
    this.canValidate = this.auth.hasPermission("RH", "BULLETINS", "VALIDATE") || this.auth.isPrivileged();
    this.load();
  }
  load() {
    this.loading = true;
    this.hr.getRuns(this.companyId).subscribe({ next: (r) => {
      this.runs = r;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  }
  stateLabel(s) {
    return s === "DONE" ? "Valid\xE9" : s === "VERIFY" ? "Calcul\xE9" : "Brouillon";
  }
  pstate(s) {
    return s === "DONE" ? "Comptabilis\xE9" : s === "VERIFY" ? "Calcul\xE9" : s === "CANCELLED" ? "Annul\xE9" : "Brouillon";
  }
  toggle(r) {
    if (this.expanded === r.id) {
      this.expanded = null;
      return;
    }
    this.expanded = r.id;
    this.runSlips = [];
    this.hr.getRunPayslips(r.id).subscribe((s) => this.runSlips = s);
  }
  open(p) {
    this.router.navigate(["/hr/payslips", p.payslip.id]);
  }
  openRegister(r) {
    this.router.navigate(["/hr/runs", r.id, "register"]);
  }
  openGen() {
    const now = /* @__PURE__ */ new Date();
    this.genFrom = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split("T")[0];
    this.genTo = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split("T")[0];
    this.genName = "Paie " + now.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
    this.err = "";
    this.showGen = true;
  }
  generate() {
    if (!this.genFrom || !this.genTo) {
      this.err = "P\xE9riode obligatoire";
      return;
    }
    this.busy = true;
    this.hr.generateRun({ companyId: this.companyId, name: this.genName, dateStart: this.genFrom, dateEnd: this.genTo }).subscribe({
      next: () => {
        this.busy = false;
        this.showGen = false;
        this.load();
      },
      error: (e) => {
        this.busy = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  validateRun(r) {
    if (!confirm("Valider et comptabiliser tous les bulletins de ce lot ?"))
      return;
    this.hr.validateRun(r.id).subscribe({ next: () => this.load(), error: (e) => alert(e.error?.message || "Erreur") });
  }
  static {
    this.\u0275fac = function RunsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RunsComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RunsComponent, selectors: [["app-hr-runs"]], decls: 11, vars: 3, consts: [[1, "hp"], [1, "hp-head"], [1, "material-icons"], [1, "b", "b-primary"], [1, "muted"], [1, "empty"], [1, "tbl-wrap"], [1, "ov"], [1, "b", "b-primary", 3, "click"], [1, "tbl"], [1, "badge"], [1, "ta-r"], ["title", "Voir les bulletins", 1, "b-icon", 3, "click"], ["title", "Livre de paie (DIPE)", 1, "b-icon", 3, "click"], ["title", "Valider le lot", 1, "b-icon"], ["title", "Valider le lot", 1, "b-icon", 3, "click"], ["colspan", "4", 2, "padding", "0"], [1, "tbl", "sub"], [1, "clk"], [1, "clk", 3, "click"], ["colspan", "5", 1, "muted", 2, "padding", "14px"], [1, "ov", 3, "click"], [1, "mdl", 2, "max-width", "520px", 3, "click"], [1, "mdl-h"], [1, "b-icon", 3, "click"], [1, "mdl-b"], [1, "alert"], [1, "grid"], [1, "fg", "fg-2"], ["placeholder", "Paie de \u2026", 1, "in", 3, "ngModelChange", "ngModel"], [1, "fg"], ["type", "date", 1, "in", 3, "ngModelChange", "ngModel"], [1, "muted", 2, "margin-top", "10px", "font-size", ".85rem"], [1, "mdl-f"], [1, "b", "b-sec", 3, "click"], [1, "b", "b-primary", 3, "click", "disabled"]], template: function RunsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "event_repeat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Lots de paie");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, RunsComponent_Conditional_6_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, RunsComponent_Conditional_7_Template, 2, 0, "div", 4)(8, RunsComponent_Conditional_8_Template, 2, 0, "div", 5)(9, RunsComponent_Conditional_9_Template, 14, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, RunsComponent_Conditional_10_Template, 30, 6, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.canCreate ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 7 : ctx.runs.length === 0 ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showGen ? 10 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */", "\n.sub[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n/*# sourceMappingURL=runs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RunsComponent, [{
    type: Component,
    args: [{ selector: "app-hr-runs", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">event_repeat</span> Lots de paie</h1>
        @if (canCreate) { <button class="b b-primary" (click)="openGen()"><span class="material-icons">group_add</span> G\xE9n\xE9rer un lot</button> }
      </div>
      @if (loading) { <div class="muted">Chargement\u2026</div> }
      @else if (runs.length === 0) { <div class="empty">Aucun lot. \xAB G\xE9n\xE9rer un lot \xBB calcule un bulletin pour chaque employ\xE9 actif.</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>Lot</th><th>P\xE9riode</th><th>\xC9tat</th><th></th></tr></thead>
            <tbody>
              @for (r of runs; track r.id) {
                <tr>
                  <td><strong>{{ r.name }}</strong></td>
                  <td>{{ r.dateStart }} \u2192 {{ r.dateEnd }}</td>
                  <td><span class="badge" [class.done]="r.state==='DONE'" [class.info]="r.state==='VERIFY'">{{ stateLabel(r.state) }}</span></td>
                  <td class="ta-r">
                    <button class="b-icon" (click)="toggle(r)" title="Voir les bulletins"><span class="material-icons">{{ expanded===r.id ? 'expand_less' : 'expand_more' }}</span></button>
                    <button class="b-icon" title="Livre de paie (DIPE)" (click)="openRegister(r)"><span class="material-icons">menu_book</span></button>
                    @if (canValidate && r.state !== 'DONE') { <button class="b-icon" title="Valider le lot" (click)="validateRun(r)"><span class="material-icons">check_circle</span></button> }
                  </td>
                </tr>
                @if (expanded === r.id) {
                  <tr><td colspan="4" style="padding:0">
                    <table class="tbl sub">
                      <thead><tr><th>R\xE9f\xE9rence</th><th>Employ\xE9</th><th class="ta-r">Brut</th><th class="ta-r">Net</th><th>\xC9tat</th></tr></thead>
                      <tbody>
                        @for (p of runSlips; track p.payslip.id) {
                          <tr class="clk" (click)="open(p)">
                            <td>{{ p.payslip.name }}</td><td>{{ p.payslip.employeeName }}</td>
                            <td class="ta-r">{{ fmt(p.payslip.totalBrut) }}</td>
                            <td class="ta-r"><strong>{{ fmt(p.payslip.totalNet) }}</strong></td>
                            <td><span class="badge">{{ pstate(p.payslip.state) }}</span></td>
                          </tr>
                        }
                        @if (runSlips.length === 0) { <tr><td colspan="5" class="muted" style="padding:14px">Aucun bulletin dans ce lot.</td></tr> }
                      </tbody>
                    </table>
                  </td></tr>
                }
              }
            </tbody>
          </table>
        </div>
      }
    </div>

    @if (showGen) {
      <div class="ov" (click)="showGen=false">
        <div class="mdl" (click)="$event.stopPropagation()" style="max-width:520px">
          <div class="mdl-h"><h3>G\xE9n\xE9rer un lot de paie</h3><button class="b-icon" (click)="showGen=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Nom du lot</label><input class="in" [(ngModel)]="genName" placeholder="Paie de \u2026"></div>
              <div class="fg"><label>Du *</label><input type="date" class="in" [(ngModel)]="genFrom"></div>
              <div class="fg"><label>Au *</label><input type="date" class="in" [(ngModel)]="genTo"></div>
            </div>
            <div class="muted" style="margin-top:10px;font-size:.85rem">Un bulletin sera calcul\xE9 pour chaque employ\xE9 actif ayant un contrat.</div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showGen=false">Annuler</button>
            <button class="b b-primary" (click)="generate()" [disabled]="busy">{{ busy ? 'G\xE9n\xE9ration\u2026' : 'G\xE9n\xE9rer' }}</button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n", "/* angular:styles/component:scss;2d3dab6dd5dca661756651e1f7ef4b5c6fc02c1c7fdeffe601ffc8db6b417b73;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/runs/runs.component.ts */\n.sub {\n  background: var(--bg-elevated);\n}\n.sub th {\n  background: var(--bg-elevated);\n}\n/*# sourceMappingURL=runs.component.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RunsComponent, { className: "RunsComponent", filePath: "app/modules/hr/components/runs/runs.component.ts", lineNumber: 85 });
})();
export {
  RunsComponent
};
//# sourceMappingURL=chunk-JY3URAFE.js.map
