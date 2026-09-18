import {
  AnalyticService
} from "./chunk-C5R2LK6A.js";
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
  DatePipe,
  DecimalPipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
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
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/analytic/analytic-report.component.ts
var _forTrack0 = ($index, $item) => $item.analyticAccountId;
function AnalyticReportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 17);
    \u0275\u0275listener("click", function AnalyticReportComponent_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recalculate());
    });
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function AnalyticReportComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Imprimer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.recalculating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.recalculating ? "hourglass_empty" : "refresh");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.recalculating ? "Recalcul\u2026" : "Recalculer", " ");
  }
}
function AnalyticReportComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
    \u0275\u0275text(1, " Chargement\u2026 ");
  }
}
function AnalyticReportComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Actualiser ");
  }
}
function AnalyticReportComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function AnalyticReportComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recalculate());
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.recalculating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.recalculating ? "hourglass_empty" : "refresh");
  }
}
function AnalyticReportComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticReportComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 18);
    \u0275\u0275text(2, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun mouvement analytique sur la p\xE9riode s\xE9lectionn\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticReportComponent_Conditional_31_For_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "subdirectory_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function AnalyticReportComponent_Conditional_31_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40);
    \u0275\u0275conditionalCreate(3, AnalyticReportComponent_Conditional_31_For_38_Conditional_3_Template, 2, 0, "span", 41);
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 44);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 45);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 46);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    \u0275\u0275classProp("row-parent", !line_r4.parentId)("row-child", !!line_r4.parentId);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("padding-left", line_r4.parentId ? 16 : 0, "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r4.parentId ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("root-avatar", !line_r4.parentId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r4.analyticAccountCode.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("root-code", !line_r4.parentId)("child-code", !!line_r4.parentId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r4.analyticAccountCode, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("root-name", !line_r4.parentId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r4.analyticAccountName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r4.parentName || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 26, line_r4.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 29, line_r4.totalCredit, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bal-pos", line_r4.solde >= 0)("bal-neg", line_r4.solde < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 32, line_r4.solde, "1.2-2"), " ");
  }
}
function AnalyticReportComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h2");
    \u0275\u0275text(2, "BALANCE ANALYTIQUE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 25)(9, "div", 26)(10, "span", 27);
    \u0275\u0275text(11, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Balance analytique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 29);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 30)(21, "table", 31)(22, "thead")(23, "tr")(24, "th");
    \u0275\u0275text(25, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Compte analytique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 32);
    \u0275\u0275text(31, "Total D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 32);
    \u0275\u0275text(33, "Total Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 32);
    \u0275\u0275text(35, "Solde");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275repeaterCreate(37, AnalyticReportComponent_Conditional_31_For_38_Template, 22, 35, "tr", 33, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 34)(40, "span", 35);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 36)(43, "div", 37)(44, "span");
    \u0275\u0275text(45, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong", 38);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 37)(50, "span");
    \u0275\u0275text(51, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "strong", 39);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 37)(56, "span");
    \u0275\u0275text(57, "Solde net");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("P\xE9riode : ", \u0275\u0275pipeBind2(5, 13, ctx_r1.filters.from, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(6, 16, ctx_r1.filters.to, "dd/MM/yyyy"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 19, ctx_r1.filters.from, "dd/MM/yyyy"), " \u2192 ", \u0275\u0275pipeBind2(17, 22, ctx_r1.filters.to, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.lines.length, " compte(s)");
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.lines);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("TOTAL G\xC9N\xC9RAL \u2014 ", ctx_r1.lines.length, " compte(s)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 25, ctx_r1.totalDebit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 28, ctx_r1.totalCredit, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bal-pos", ctx_r1.totalSolde >= 0)("bal-neg", ctx_r1.totalSolde < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 31, ctx_r1.totalSolde, "1.2-2"));
  }
}
var AnalyticReportComponent = class _AnalyticReportComponent {
  constructor(analyticService, authService) {
    this.analyticService = analyticService;
    this.authService = authService;
    this.lines = [];
    this.loading = false;
    this.companyId = 1;
    this.filters = { from: "", to: "" };
    this.recalculating = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const now = /* @__PURE__ */ new Date();
    this.filters.from = `${now.getFullYear()}-01-01`;
    this.filters.to = now.toISOString().split("T")[0];
    this.load();
  }
  load() {
    this.loading = true;
    this.analyticService.getBalance(this.companyId, this.filters.from || void 0, this.filters.to || void 0).subscribe({
      next: (lines) => {
        this.lines = lines;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  recalculate() {
    this.recalculating = true;
    this.analyticService.recalculate(this.companyId).subscribe({
      next: () => {
        this.recalculating = false;
        this.load();
      },
      error: () => {
        this.recalculating = false;
      }
    });
  }
  get totalDebit() {
    return this.lines.reduce((s, l) => s + (l.totalDebit || 0), 0);
  }
  get totalCredit() {
    return this.lines.reduce((s, l) => s + (l.totalCredit || 0), 0);
  }
  get totalSolde() {
    return this.totalDebit - this.totalCredit;
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function AnalyticReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticReportComponent)(\u0275\u0275directiveInject(AnalyticService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticReportComponent, selectors: [["app-analytic-report"]], decls: 32, vars: 7, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "filters-card", "no-print"], [1, "filter-grid"], [1, "filter-group"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "filter-group", "filter-btn-col"], [2, "display", "flex", "gap", "8px"], [1, "btn-generate", 3, "click", "disabled"], ["title", "R\xE9g\xE9n\xE9rer depuis les \xE9critures valid\xE9es", 1, "btn-outline", 3, "disabled"], [1, "loading-state"], [1, "empty-state"], [1, "btn-outline", 3, "click", "disabled"], [1, "material-icons"], [1, "btn-outline", 3, "click"], [1, "btn-spinner"], ["title", "R\xE9g\xE9n\xE9rer depuis les \xE9critures valid\xE9es", 1, "btn-outline", 3, "click", "disabled"], [1, "spinner-lg"], [1, "print-header", "print-only"], [1, "content-card"], [1, "content-card-header"], [1, "card-title-left"], [1, "material-icons", 2, "color", "#2563eb", "font-size", "20px"], [1, "badge-period"], [1, "badge-count"], [1, "table-wrap"], [1, "gl-table"], [1, "r"], [3, "row-parent", "row-child"], [1, "grand-total"], [1, "gt-label"], [1, "gt-values"], [1, "gt-item"], [1, "debit-val"], [1, "credit-val"], [1, "code-cell"], [1, "material-icons", "sub-arrow"], [1, "acc-avatar"], [1, "text-muted"], [1, "r", "mono", "debit-val"], [1, "r", "mono", "credit-val"], [1, "r", "mono", "bold"]], template: function AnalyticReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "bar_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Balance Analytique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Synth\xE8se des charges et produits par compte analytique");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, AnalyticReportComponent_Conditional_10_Template, 9, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticReportComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.from, $event) || (ctx.filters.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "label");
        \u0275\u0275text(19, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticReportComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.to, $event) || (ctx.filters.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11)(22, "label");
        \u0275\u0275text(23, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12)(25, "button", 13);
        \u0275\u0275listener("click", function AnalyticReportComponent_Template_button_click_25_listener() {
          return ctx.load();
        });
        \u0275\u0275conditionalCreate(26, AnalyticReportComponent_Conditional_26_Template, 2, 0)(27, AnalyticReportComponent_Conditional_27_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(28, AnalyticReportComponent_Conditional_28_Template, 3, 2, "button", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(29, AnalyticReportComponent_Conditional_29_Template, 4, 0, "div", 15)(30, AnalyticReportComponent_Conditional_30_Template, 5, 0, "div", 16)(31, AnalyticReportComponent_Conditional_31_Template, 61, 34);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.lines.length > 0 ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.to);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 26 : 27);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.lines.length === 0 ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 29 : ctx.lines.length === 0 ? 30 : 31);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.content-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.content-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.card-title-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.badge-count[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-period[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.gl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.gl-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.gl-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.gl-table[_ngcontent-%COMP%]   .debit-val[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 600;\n}\n.gl-table[_ngcontent-%COMP%]   .credit-val[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.gl-table[_ngcontent-%COMP%]   .bal-pos[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.gl-table[_ngcontent-%COMP%]   .bal-neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.row-parent[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  font-weight: 600;\n  border-bottom: 1px solid #dbeafe;\n}\n.row-parent[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n}\n.row-child[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f9fafb;\n}\n.row-child[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover) !important;\n}\n.code-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sub-arrow[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #d1d5db;\n}\n.acc-avatar[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  font-size: 10px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.acc-avatar.root-avatar[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.root-code[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n.child-code[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.root-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.gt-values[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.gt-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n}\n.gt-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n}\n.gt-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item[_ngcontent-%COMP%]   strong.debit-val[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.gt-item[_ngcontent-%COMP%]   strong.credit-val[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.gt-item[_ngcontent-%COMP%]   strong.bal-pos[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.gt-item[_ngcontent-%COMP%]   strong.bal-neg[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin: 0;\n  color: var(--text-secondary);\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .grand-total[_ngcontent-%COMP%] {\n    background: var(--primary);\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=analytic-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticReportComponent, [{
    type: Component,
    args: [{ selector: "app-analytic-report", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">bar_chart</span>
      <div>
        <h1 class="page-title">Balance Analytique</h1>
        <p class="page-sub">Synth\xE8se des charges et produits par compte analytique</p>
      </div>
    </div>
    @if (lines.length > 0) {
      <div class="header-actions">
        <button class="btn-outline" (click)="recalculate()" [disabled]="recalculating">
          <span class="material-icons">{{ recalculating ? 'hourglass_empty' : 'refresh' }}</span>
          {{ recalculating ? 'Recalcul\u2026' : 'Recalculer' }}
        </button>
        <button class="btn-outline" (click)="print()">
          <span class="material-icons">print</span> Imprimer
        </button>
      </div>
    }
  </div>

  <!-- \u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filters-card no-print">
    <div class="filter-grid">
      <div class="filter-group">
        <label>Du</label>
        <input type="date" class="form-ctl" [(ngModel)]="filters.from">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-ctl" [(ngModel)]="filters.to">
      </div>
      <div class="filter-group filter-btn-col">
        <label>&nbsp;</label>
        <div style="display:flex;gap:8px">
          <button class="btn-generate" (click)="load()" [disabled]="loading">
            @if (loading) { <span class="btn-spinner"></span> Chargement\u2026 }
            @else { <span class="material-icons">play_arrow</span> Actualiser }
          </button>
          @if (lines.length === 0) {
            <button class="btn-outline" (click)="recalculate()" [disabled]="recalculating" title="R\xE9g\xE9n\xE9rer depuis les \xE9critures valid\xE9es">
              <span class="material-icons">{{ recalculating ? 'hourglass_empty' : 'refresh' }}</span>
            </button>
          }
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550 RAPPORT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>Chargement\u2026</p>
    </div>

  } @else if (lines.length === 0) {
    <div class="empty-state">
      <span class="material-icons">bar_chart</span>
      <p>Aucun mouvement analytique sur la p\xE9riode s\xE9lectionn\xE9e</p>
    </div>

  } @else {

    <!-- En-t\xEAte impression -->
    <div class="print-header print-only">
      <h2>BALANCE ANALYTIQUE</h2>
      <p>P\xE9riode : {{ filters.from | date:'dd/MM/yyyy' }} au {{ filters.to | date:'dd/MM/yyyy' }}</p>
    </div>

    <div class="content-card">
      <div class="content-card-header">
        <div class="card-title-left">
          <span class="material-icons" style="color:#2563eb;font-size:20px">analytics</span>
          <span>Balance analytique</span>
          <span class="badge-period">{{ filters.from | date:'dd/MM/yyyy' }} \u2192 {{ filters.to | date:'dd/MM/yyyy' }}</span>
        </div>
        <span class="badge-count">{{ lines.length }} compte(s)</span>
      </div>

      <div class="table-wrap">
        <table class="gl-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Compte analytique</th>
              <th>Parent</th>
              <th class="r">Total D\xE9bit</th>
              <th class="r">Total Cr\xE9dit</th>
              <th class="r">Solde</th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track line.analyticAccountId) {
              <tr [class.row-parent]="!line.parentId" [class.row-child]="!!line.parentId">
                <td>
                  <div class="code-cell" [style.paddingLeft.px]="line.parentId ? 16 : 0">
                    @if (line.parentId) {
                      <span class="material-icons sub-arrow">subdirectory_arrow_right</span>
                    }
                    <span class="acc-avatar" [class.root-avatar]="!line.parentId">
                      {{ line.analyticAccountCode.charAt(0) }}
                    </span>
                    <strong [class.root-code]="!line.parentId" [class.child-code]="!!line.parentId">
                      {{ line.analyticAccountCode }}
                    </strong>
                  </div>
                </td>
                <td [class.root-name]="!line.parentId">{{ line.analyticAccountName }}</td>
                <td><span class="text-muted">{{ line.parentName || '\u2013' }}</span></td>
                <td class="r mono debit-val">{{ line.totalDebit | number:'1.2-2' }}</td>
                <td class="r mono credit-val">{{ line.totalCredit | number:'1.2-2' }}</td>
                <td class="r mono bold" [class.bal-pos]="line.solde >= 0" [class.bal-neg]="line.solde < 0">
                  {{ line.solde | number:'1.2-2' }}
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Grand total \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="grand-total">
        <span class="gt-label">TOTAL G\xC9N\xC9RAL \u2014 {{ lines.length }} compte(s)</span>
        <div class="gt-values">
          <div class="gt-item"><span>D\xE9bit</span><strong class="debit-val">{{ totalDebit | number:'1.2-2' }}</strong></div>
          <div class="gt-item"><span>Cr\xE9dit</span><strong class="credit-val">{{ totalCredit | number:'1.2-2' }}</strong></div>
          <div class="gt-item">
            <span>Solde net</span>
            <strong [class.bal-pos]="totalSolde >= 0" [class.bal-neg]="totalSolde < 0">{{ totalSolde | number:'1.2-2' }}</strong>
          </div>
        </div>
      </div>
    </div>
  }

</div>
`, styles: ['/* src/app/modules/accounting/components/analytic/analytic-report.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.form-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.content-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.content-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.card-title-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.badge-count {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-period {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.gl-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table th {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.gl-table .r {\n  text-align: right;\n}\n.gl-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table .bold {\n  font-weight: 700;\n}\n.gl-table .debit-val {\n  color: var(--success);\n  font-weight: 600;\n}\n.gl-table .credit-val {\n  color: var(--danger);\n  font-weight: 600;\n}\n.gl-table .bal-pos {\n  color: var(--success);\n}\n.gl-table .bal-neg {\n  color: var(--danger);\n}\n.row-parent td {\n  background: var(--bg-hover);\n  font-weight: 600;\n  border-bottom: 1px solid #dbeafe;\n}\n.row-parent:hover td {\n  background: var(--primary-subtle) !important;\n}\n.row-child td {\n  border-bottom: 1px solid #f9fafb;\n}\n.row-child:hover td {\n  background: var(--bg-hover) !important;\n}\n.code-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sub-arrow {\n  font-size: 13px;\n  color: #d1d5db;\n}\n.acc-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  font-size: 10px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.acc-avatar.root-avatar {\n  background: var(--primary);\n  color: white;\n}\n.root-code {\n  color: var(--primary);\n  font-weight: 700;\n}\n.child-code {\n  color: var(--text-secondary);\n}\n.root-name {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.text-muted {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.grand-total {\n  background: var(--primary);\n  color: white;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.gt-label {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.gt-values {\n  display: flex;\n  gap: 24px;\n}\n.gt-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n}\n.gt-item span {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n}\n.gt-item strong {\n  font-size: 15px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item strong.debit-val {\n  color: #86efac;\n}\n.gt-item strong.credit-val {\n  color: #fca5a5;\n}\n.gt-item strong.bal-pos {\n  color: #86efac;\n}\n.gt-item strong.bal-neg {\n  color: #fca5a5;\n}\n.print-only {\n  display: none;\n}\n.print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header p {\n  font-size: 11px;\n  margin: 0;\n  color: var(--text-secondary);\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .print-only {\n    display: block !important;\n  }\n  .print-header {\n    display: block !important;\n  }\n  .grand-total {\n    background: var(--primary);\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=analytic-report.component.css.map */\n'] }]
  }], () => [{ type: AnalyticService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticReportComponent, { className: "AnalyticReportComponent", filePath: "app/modules/accounting/components/analytic/analytic-report.component.ts", lineNumber: 14 });
})();
export {
  AnalyticReportComponent
};
//# sourceMappingURL=chunk-QCHBCHGJ.js.map
