import {
  AnalyticService
} from "./chunk-C5R2LK6A.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/analytic/analytic-lines.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AnalyticLinesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 22);
    \u0275\u0275listener("click", function AnalyticLinesComponent_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recalculate());
    });
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
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
function AnalyticLinesComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r3.code, " \u2013 ", a_r3.name);
  }
}
function AnalyticLinesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function AnalyticLinesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function AnalyticLinesComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function AnalyticLinesComponent_Conditional_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recalculate());
    });
    \u0275\u0275elementStart(1, "span", 17);
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
function AnalyticLinesComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticLinesComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 17);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune ligne analytique sur la p\xE9riode s\xE9lectionn\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticLinesComponent_Conditional_40_For_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r5.generalAccountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", line_r5.generalAccountName);
  }
}
function AnalyticLinesComponent_Conditional_40_For_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u2013");
    \u0275\u0275elementEnd();
  }
}
function AnalyticLinesComponent_Conditional_40_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275conditionalCreate(10, AnalyticLinesComponent_Conditional_40_For_27_Conditional_10_Template, 4, 2)(11, AnalyticLinesComponent_Conditional_40_For_27_Conditional_11_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 40);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 41);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, line_r5.date, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(line_r5.analyticAccountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2014 ", line_r5.analyticAccountName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r5.generalAccountCode ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r5.name || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAmountDebit(line_r5) > 0 ? \u0275\u0275pipeBind2(16, 10, ctx_r1.getAmountDebit(line_r5), "1.2-2") : "", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAmountCredit(line_r5) > 0 ? \u0275\u0275pipeBind2(19, 13, ctx_r1.getAmountCredit(line_r5), "1.2-2") : "", " ");
  }
}
function AnalyticLinesComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 24)(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4, "table_rows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Lignes analytiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28)(10, "table", 29)(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Compte analytique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Compte g\xE9n\xE9ral");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 30);
    \u0275\u0275text(22, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 30);
    \u0275\u0275text(24, "Cr\xE9dit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, AnalyticLinesComponent_Conditional_40_For_27_Template, 20, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 31)(29, "span", 32);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 33)(32, "div", 34)(33, "span");
    \u0275\u0275text(34, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong", 35);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 34)(39, "span");
    \u0275\u0275text(40, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong", 36);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 34)(45, "span");
    \u0275\u0275text(46, "Solde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.lines.length);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.lines);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("TOTAL \u2014 ", ctx_r1.lines.length, " ligne(s)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 9, ctx_r1.totalDebit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 12, ctx_r1.totalCredit, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bal-pos", ctx_r1.totalSolde >= 0)("bal-neg", ctx_r1.totalSolde < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 15, ctx_r1.totalSolde, "1.2-2"));
  }
}
var AnalyticLinesComponent = class _AnalyticLinesComponent {
  constructor(analyticService, authService) {
    this.analyticService = analyticService;
    this.authService = authService;
    this.lines = [];
    this.analyticAccounts = [];
    this.loading = false;
    this.companyId = 1;
    this.filters = {
      analyticAccountId: null,
      from: "",
      to: ""
    };
    this.recalculating = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const now = /* @__PURE__ */ new Date();
    this.filters.from = `${now.getFullYear()}-01-01`;
    this.filters.to = now.toISOString().split("T")[0];
    this.analyticService.getAccounts(this.companyId).subscribe({
      next: (a) => this.analyticAccounts = a,
      error: () => {
      }
    });
    this.load();
  }
  load() {
    this.loading = true;
    this.analyticService.getLines(this.companyId, {
      analyticAccountId: this.filters.analyticAccountId || void 0,
      from: this.filters.from || void 0,
      to: this.filters.to || void 0
    }).subscribe({
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
      next: (res) => {
        this.recalculating = false;
        this.load();
      },
      error: () => {
        this.recalculating = false;
      }
    });
  }
  get totalDebit() {
    return this.lines.filter((l) => l.amount > 0).reduce((s, l) => s + l.amount, 0);
  }
  get totalCredit() {
    return this.lines.filter((l) => l.amount < 0).reduce((s, l) => s + Math.abs(l.amount), 0);
  }
  get totalSolde() {
    return this.lines.reduce((s, l) => s + l.amount, 0);
  }
  getAmountDebit(line) {
    return line.amount > 0 ? line.amount : 0;
  }
  getAmountCredit(line) {
    return line.amount < 0 ? Math.abs(line.amount) : 0;
  }
  static {
    this.\u0275fac = function AnalyticLinesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticLinesComponent)(\u0275\u0275directiveInject(AnalyticService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticLinesComponent, selectors: [["app-analytic-lines"]], decls: 41, vars: 9, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "filters-card", "no-print"], [1, "filter-grid"], [1, "filter-group"], [1, "form-ctl", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "filter-group", "filter-btn-col"], [2, "display", "flex", "gap", "8px"], [1, "btn-generate", 3, "click", "disabled"], [1, "btn-spinner"], [1, "material-icons"], ["title", "R\xE9g\xE9n\xE9rer depuis les \xE9critures valid\xE9es", 1, "btn-outline", 3, "disabled"], [1, "loading-state"], [1, "empty-state"], [1, "content-card"], ["title", "R\xE9g\xE9n\xE9rer depuis les \xE9critures valid\xE9es", 1, "btn-outline", 3, "click", "disabled"], [1, "spinner-lg"], [1, "content-card-header"], [1, "card-title-left"], [1, "material-icons", 2, "color", "#2563eb", "font-size", "20px"], [1, "badge-count"], [1, "table-wrap"], [1, "gl-table"], [1, "r"], [1, "grand-total"], [1, "gt-label"], [1, "gt-values"], [1, "gt-item"], [1, "debit-val"], [1, "credit-val"], [1, "date-col"], [1, "analytic-code"], [1, "text-muted"], [1, "r", "mono", "debit-val"], [1, "r", "mono", "credit-val"], [1, "mono"]], template: function AnalyticLinesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Journal Analytique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "D\xE9tail des mouvements par compte analytique");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, AnalyticLinesComponent_Conditional_10_Template, 5, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "Compte analytique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticLinesComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.analyticAccountId, $event) || (ctx.filters.analyticAccountId = $event);
          return $event;
        });
        \u0275\u0275elementStart(17, "option", 11);
        \u0275\u0275text(18, "\u2013 Tous \u2013");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, AnalyticLinesComponent_For_20_Template, 2, 3, "option", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "label");
        \u0275\u0275text(23, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticLinesComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.from, $event) || (ctx.filters.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "label");
        \u0275\u0275text(27, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticLinesComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.to, $event) || (ctx.filters.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 13)(30, "label");
        \u0275\u0275text(31, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 14)(33, "button", 15);
        \u0275\u0275listener("click", function AnalyticLinesComponent_Template_button_click_33_listener() {
          return ctx.load();
        });
        \u0275\u0275conditionalCreate(34, AnalyticLinesComponent_Conditional_34_Template, 1, 0, "span", 16)(35, AnalyticLinesComponent_Conditional_35_Template, 2, 0, "span", 17);
        \u0275\u0275text(36, " Rechercher ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(37, AnalyticLinesComponent_Conditional_37_Template, 3, 2, "button", 18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(38, AnalyticLinesComponent_Conditional_38_Template, 4, 0, "div", 19)(39, AnalyticLinesComponent_Conditional_39_Template, 5, 0, "div", 20)(40, AnalyticLinesComponent_Conditional_40_Template, 50, 18, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.lines.length > 0 ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.analyticAccountId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.analyticAccounts);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.to);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 34 : 35);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.lines.length === 0 ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 38 : ctx.lines.length === 0 ? 39 : 40);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n  min-width: 140px;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.content-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.content-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.card-title-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.badge-count[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.gl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.gl-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.gl-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .date-col[_ngcontent-%COMP%] {\n  width: 90px;\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .debit-val[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 600;\n}\n.gl-table[_ngcontent-%COMP%]   .credit-val[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.analytic-code[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 12px 20px;\n  gap: 12px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.gt-values[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.gt-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n}\n.gt-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.gt-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-primary);\n}\n.gt-item[_ngcontent-%COMP%]   .debit-val[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.gt-item[_ngcontent-%COMP%]   .credit-val[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.gt-item[_ngcontent-%COMP%]   .bal-pos[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.gt-item[_ngcontent-%COMP%]   .bal-neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=analytic-lines.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticLinesComponent, [{
    type: Component,
    args: [{ selector: "app-analytic-lines", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">receipt_long</span>
      <div>
        <h1 class="page-title">Journal Analytique</h1>
        <p class="page-sub">D\xE9tail des mouvements par compte analytique</p>
      </div>
    </div>
    @if (lines.length > 0) {
      <div class="header-actions">
        <button class="btn-outline" (click)="recalculate()" [disabled]="recalculating" title="R\xE9g\xE9n\xE9rer depuis les \xE9critures valid\xE9es">
          <span class="material-icons">{{ recalculating ? 'hourglass_empty' : 'refresh' }}</span>
          {{ recalculating ? 'Recalcul\u2026' : 'Recalculer' }}
        </button>
      </div>
    }
  </div>

  <!-- \u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filters-card no-print">
    <div class="filter-grid">
      <div class="filter-group">
        <label>Compte analytique</label>
        <select class="form-ctl" [(ngModel)]="filters.analyticAccountId">
          <option [ngValue]="null">\u2013 Tous \u2013</option>
          @for (a of analyticAccounts; track a.id) {
            <option [ngValue]="a.id">{{ a.code }} \u2013 {{ a.name }}</option>
          }
        </select>
      </div>
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
            @if (loading) { <span class="btn-spinner"></span> }
            @else { <span class="material-icons">search</span> }
            Rechercher
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

  <!-- \u2550\u2550 R\xC9SULTATS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>Chargement\u2026</p>
    </div>

  } @else if (lines.length === 0) {
    <div class="empty-state">
      <span class="material-icons">receipt_long</span>
      <p>Aucune ligne analytique sur la p\xE9riode s\xE9lectionn\xE9e</p>
    </div>

  } @else {
    <div class="content-card">
      <div class="content-card-header">
        <div class="card-title-left">
          <span class="material-icons" style="color:#2563eb;font-size:20px">table_rows</span>
          <span>Lignes analytiques</span>
          <span class="badge-count">{{ lines.length }}</span>
        </div>
      </div>
      <div class="table-wrap">
        <table class="gl-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Compte analytique</th>
              <th>Compte g\xE9n\xE9ral</th>
              <th>Libell\xE9</th>
              <th class="r">D\xE9bit</th>
              <th class="r">Cr\xE9dit</th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track line.id) {
              <tr>
                <td class="date-col">{{ line.date | date:'dd/MM/yyyy' }}</td>
                <td>
                  <span class="analytic-code">{{ line.analyticAccountCode }}</span>
                  <span class="text-muted"> \u2014 {{ line.analyticAccountName }}</span>
                </td>
                <td>
                  @if (line.generalAccountCode) {
                    <span class="mono">{{ line.generalAccountCode }}</span>
                    <span class="text-muted"> {{ line.generalAccountName }}</span>
                  } @else {
                    <span class="text-muted">\u2013</span>
                  }
                </td>
                <td>{{ line.name || '\u2013' }}</td>
                <td class="r mono debit-val">
                  {{ getAmountDebit(line) > 0 ? (getAmountDebit(line) | number:'1.2-2') : '' }}
                </td>
                <td class="r mono credit-val">
                  {{ getAmountCredit(line) > 0 ? (getAmountCredit(line) | number:'1.2-2') : '' }}
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Grand total \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="grand-total">
        <span class="gt-label">TOTAL \u2014 {{ lines.length }} ligne(s)</span>
        <div class="gt-values">
          <div class="gt-item"><span>D\xE9bit</span><strong class="debit-val">{{ totalDebit | number:'1.2-2' }}</strong></div>
          <div class="gt-item"><span>Cr\xE9dit</span><strong class="credit-val">{{ totalCredit | number:'1.2-2' }}</strong></div>
          <div class="gt-item">
            <span>Solde</span>
            <strong [class.bal-pos]="totalSolde >= 0" [class.bal-neg]="totalSolde < 0">{{ totalSolde | number:'1.2-2' }}</strong>
          </div>
        </div>
      </div>
    </div>
  }

</div>
`, styles: ['/* src/app/modules/accounting/components/analytic/analytic-lines.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.form-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n  min-width: 140px;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.content-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.content-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.card-title-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.badge-count {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.gl-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table th {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table td {\n  padding: 8px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.gl-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.gl-table .r {\n  text-align: right;\n}\n.gl-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table .date-col {\n  width: 90px;\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.gl-table .debit-val {\n  color: var(--success);\n  font-weight: 600;\n}\n.gl-table .credit-val {\n  color: var(--danger);\n  font-weight: 600;\n}\n.analytic-code {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.text-muted {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.grand-total {\n  background: var(--bg-elevated);\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 12px 20px;\n  gap: 12px;\n}\n.gt-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.gt-values {\n  display: flex;\n  gap: 24px;\n}\n.gt-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n}\n.gt-item span {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.gt-item strong {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-primary);\n}\n.gt-item .debit-val {\n  color: var(--success);\n}\n.gt-item .credit-val {\n  color: var(--danger);\n}\n.gt-item .bal-pos {\n  color: var(--success);\n}\n.gt-item .bal-neg {\n  color: var(--danger);\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=analytic-lines.component.css.map */\n'] }]
  }], () => [{ type: AnalyticService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticLinesComponent, { className: "AnalyticLinesComponent", filePath: "app/modules/accounting/components/analytic/analytic-lines.component.ts", lineNumber: 14 });
})();
export {
  AnalyticLinesComponent
};
//# sourceMappingURL=chunk-NSRNRAML.js.map
