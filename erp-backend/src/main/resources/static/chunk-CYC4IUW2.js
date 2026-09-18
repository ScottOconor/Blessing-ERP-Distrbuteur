import {
  PdfExportService
} from "./chunk-H5LFPJCV.js";
import {
  ExcelExportService
} from "./chunk-RDE6QNFF.js";
import "./chunk-V5EAPQSQ.js";
import {
  ReportService
} from "./chunk-5ADIBSOR.js";
import "./chunk-AJFTTPVD.js";
import "./chunk-7YWLATDR.js";
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
  ɵɵrepeaterTrackByIndex,
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

// src/app/modules/accounting/components/reports/profit-loss/profit-loss.component.ts
function ProfitLossComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 18);
    \u0275\u0275listener("click", function ProfitLossComponent_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Imprimer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function ProfitLossComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 21);
    \u0275\u0275listener("click", function ProfitLossComponent_Conditional_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(10, "span", 19);
    \u0275\u0275text(11, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Excel ");
    \u0275\u0275elementEnd()();
  }
}
function ProfitLossComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
    \u0275\u0275text(1, " G\xE9n\xE9ration\u2026 ");
  }
}
function ProfitLossComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function ProfitLossComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg);
  }
}
function ProfitLossComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "G\xE9n\xE9ration en cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ProfitLossComponent_Conditional_37_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 19);
    \u0275\u0275text(2, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune donn\xE9e pour cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function ProfitLossComponent_Conditional_37_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.dateFrom, "yyyy"));
  }
}
function ProfitLossComponent_Conditional_37_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.dateFromN1, "yyyy"));
  }
}
function ProfitLossComponent_Conditional_37_Conditional_11_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 42);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    \u0275\u0275classProp("pl-row-subtotal", line_r3.isTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r3.code);
    \u0275\u0275advance();
    \u0275\u0275classProp("fw-bold", line_r3.isTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r3.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("sign-pos", line_r3.sign === "+")("sign-neg", line_r3.sign === "-");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r3.sign);
    \u0275\u0275advance();
    \u0275\u0275classProp("fw-bold", line_r3.isTotal)("amount-pos", line_r3.sign === "+" && line_r3.current > 0)("amount-neg", line_r3.sign === "-" && line_r3.current > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r3.current > 0 || line_r3.isTotal ? \u0275\u0275pipeBind2(9, 19, line_r3.current, "1.0-0") : "", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (line_r3.previous ?? 0) > 0 ? \u0275\u0275pipeBind2(12, 22, line_r3.previous ?? 0, "1.0-0") : "", " ");
  }
}
function ProfitLossComponent_Conditional_37_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "table", 29)(2, "thead")(3, "tr", 30)(4, "th", 31);
    \u0275\u0275text(5, "REF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 32);
    \u0275\u0275text(7, "LIBELL\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 33);
    \u0275\u0275text(9, "SGN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 34);
    \u0275\u0275text(11, " NET N ");
    \u0275\u0275conditionalCreate(12, ProfitLossComponent_Conditional_37_Conditional_11_Conditional_12_Template, 3, 4, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 34);
    \u0275\u0275text(14, " NET N-1 ");
    \u0275\u0275conditionalCreate(15, ProfitLossComponent_Conditional_37_Conditional_11_Conditional_15_Template, 3, 4, "span", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ProfitLossComponent_Conditional_37_Conditional_11_For_18_Template, 13, 25, "tr", 36, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "tfoot")(20, "tr", 37)(21, "td", 38);
    \u0275\u0275text(22, "R\xC9SULTAT NET (XI)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 39);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.dateFrom ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.dateFromN1 ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.lines);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("result-pos", ctx_r1.resultNet >= 0)("result-neg", ctx_r1.resultNet < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 7, ctx_r1.resultNet, "1.0-0"), " ");
  }
}
function ProfitLossComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h2");
    \u0275\u0275text(2, "COMPTE DE R\xC9SULTAT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ProfitLossComponent_Conditional_37_Conditional_10_Template, 5, 0, "div", 27)(11, ProfitLossComponent_Conditional_37_Conditional_11_Template, 27, 10, "div", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("P\xE9riode du ", \u0275\u0275pipeBind2(5, 4, ctx_r1.dateFrom, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(6, 7, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Imprim\xE9 le ", \u0275\u0275pipeBind2(9, 10, ctx_r1.today, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lines.length === 0 ? 10 : 11);
  }
}
var ProfitLossComponent = class _ProfitLossComponent {
  constructor(reportService, authService, excelExport, pdfExport) {
    this.reportService = reportService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.pdfExport = pdfExport;
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.today = /* @__PURE__ */ new Date();
    this.dateFromN1 = "";
    this.dateToN1 = "";
    this.lines = [];
    this.mode = "annuel";
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
  }
  onModeChange() {
    const now = /* @__PURE__ */ new Date();
    if (this.mode === "mensuel") {
      const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      this.dateFrom = prev.toISOString().split("T")[0];
      this.dateTo = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split("T")[0];
    } else {
      this.dateFrom = `${now.getFullYear()}-01-01`;
      this.dateTo = now.toISOString().split("T")[0];
    }
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.reportService.getCompteDeResultat({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      mode: this.mode
    }).subscribe({
      next: (res) => {
        const rubriques = res.rubriques || {};
        this.dateFromN1 = res.dateFromN1 || "";
        this.dateToN1 = res.dateToN1 || "";
        this.lines = Object.values(rubriques).map((r) => ({
          code: r.code || "",
          label: r.label || "",
          sign: r.sign || "",
          current: Number(r.amount) || 0,
          previous: Number(r.amount_n1) || 0,
          isTotal: !!(r.code && r.code.startsWith("X"))
        }));
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur";
      }
    });
  }
  print() {
    window.print();
  }
  exportPdf() {
    this.pdfExport.exportCompteResultat(this.lines, this.dateFrom, this.dateTo, this.authService.getActiveCompany()?.name);
  }
  exportExcel() {
    this.excelExport.exportCompteResultat(this.lines, this.dateFrom, this.dateTo);
  }
  get resultNet() {
    const lastTotal = [...this.lines].reverse().find((l) => l.isTotal);
    return lastTotal?.current || 0;
  }
  static {
    this.\u0275fac = function ProfitLossComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfitLossComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfitLossComponent, selectors: [["app-profit-loss"]], decls: 38, vars: 8, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "filters-card", "no-print"], [1, "filter-grid"], [1, "filter-group"], [1, "form-ctl", 3, "ngModelChange", "ngModel"], ["value", "annuel"], ["value", "mensuel"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "filter-group", "filter-btn-col"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-err"], [1, "loading-state"], [1, "btn-outline", 3, "click"], [1, "material-icons"], [1, "btn-outline", "btn-pdf", 3, "click"], [1, "btn-outline", "btn-excel", 3, "click"], [1, "btn-spinner"], [1, "spinner-lg"], [1, "pl-print-header"], [1, "pl-period"], [1, "pl-printed"], [1, "empty-state", "no-print"], [1, "pl-table-wrap"], [1, "pl-table"], [1, "pl-thead-group"], [2, "width", "7%"], [2, "width", "51%"], [2, "width", "4%", "text-align", "center"], [1, "text-right", 2, "width", "19%"], [1, "period-hint"], [3, "pl-row-subtotal"], [1, "pl-tfoot-result"], ["colspan", "3"], [1, "text-right", "mono"], [1, "mono", "ref-col"], [1, "text-center", "sign-col"], [1, "text-right", "mono", "text-muted"]], template: function ProfitLossComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "trending_up");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Compte de R\xE9sultat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "SYSCOHADA R\xE9vis\xE9 \u2014 Charges / Produits / R\xE9sultats");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, ProfitLossComponent_Conditional_10_Template, 13, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ProfitLossComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProfitLossComponent_Template_select_ngModelChange_16_listener() {
          return ctx.onModeChange();
        });
        \u0275\u0275elementStart(17, "option", 11);
        \u0275\u0275text(18, "Annuel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option", 12);
        \u0275\u0275text(20, "Mensuel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 9)(22, "label");
        \u0275\u0275text(23, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ProfitLossComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "label");
        \u0275\u0275text(27, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ProfitLossComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 14)(30, "label");
        \u0275\u0275text(31, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 15);
        \u0275\u0275listener("click", function ProfitLossComponent_Template_button_click_32_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(33, ProfitLossComponent_Conditional_33_Template, 2, 0)(34, ProfitLossComponent_Conditional_34_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(35, ProfitLossComponent_Conditional_35_Template, 4, 1, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(36, ProfitLossComponent_Conditional_36_Template, 4, 0, "div", 17)(37, ProfitLossComponent_Conditional_37_Template, 12, 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.generated ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.mode);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 33 : 34);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 36 : ctx.generated ? 37 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.pl-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.pl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.pl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.pl-table[_ngcontent-%COMP%]   .pl-thead-group[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-align: left;\n  white-space: nowrap;\n}\n.pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even):not(.pl-row-subtotal) {\n  background: var(--bg-elevated);\n}\n.pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.pl-row-subtotal):hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.pl-table[_ngcontent-%COMP%]   .pl-row-subtotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n  font-weight: 700;\n  border-top: 1.5px solid #2563eb;\n  font-size: 12px;\n}\n.pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--success-bg) !important;\n  font-weight: 700;\n  border-top: 2px solid #16a34a;\n  font-size: 13px;\n}\n.pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  color: var(--success);\n}\n.pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td.result-pos[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td.result-neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n  background: var(--danger-bg) !important;\n  border-color: var(--danger) !important;\n}\n.ref-col[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 11px;\n  font-weight: 700;\n}\n.sign-col[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-muted);\n}\n.sign-pos[_ngcontent-%COMP%] {\n  color: var(--success) !important;\n}\n.sign-neg[_ngcontent-%COMP%] {\n  color: var(--danger) !important;\n}\n.amount-pos[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.amount-neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.period-hint[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 4px;\n  padding: 0 5px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  font-size: 10px;\n}\n.pl-print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.pl-print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.pl-print-header[_ngcontent-%COMP%]   .pl-period[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.pl-print-header[_ngcontent-%COMP%]   .pl-printed[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n@media print {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .pl-print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .pl-table[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .pl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .pl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 5px;\n  }\n  .pl-table[_ngcontent-%COMP%]   .pl-thead-group[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table[_ngcontent-%COMP%]   .pl-row-subtotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: var(--success-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=profit-loss.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfitLossComponent, [{
    type: Component,
    args: [{ selector: "app-profit-loss", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">trending_up</span>
      <div>
        <h1 class="page-title">Compte de R\xE9sultat</h1>
        <p class="page-sub">SYSCOHADA R\xE9vis\xE9 \u2014 Charges / Produits / R\xE9sultats</p>
      </div>
    </div>
    @if (generated) {
      <div class="header-actions">
        <button class="btn-outline" (click)="print()">
          <span class="material-icons">print</span> Imprimer
        </button>
        <button class="btn-outline btn-pdf" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> PDF
        </button>
        <button class="btn-outline btn-excel" (click)="exportExcel()">
          <span class="material-icons">table_view</span> Excel
        </button>
      </div>
    }
  </div>

  <!-- \u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="filters-card no-print">
    <div class="filter-grid">
      <div class="filter-group">
        <label>Mode</label>
        <select class="form-ctl" [(ngModel)]="mode" (ngModelChange)="onModeChange()">
          <option value="annuel">Annuel</option>
          <option value="mensuel">Mensuel</option>
        </select>
      </div>
      <div class="filter-group">
        <label>P\xE9riode du</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateTo">
      </div>
      <div class="filter-group filter-btn-col">
        <label>&nbsp;</label>
        <button class="btn-generate" (click)="generate()" [disabled]="loading">
          @if (loading) { <span class="btn-spinner"></span> G\xE9n\xE9ration\u2026 }
          @else { <span class="material-icons">play_arrow</span> G\xE9n\xE9rer }
        </button>
      </div>
    </div>
    @if (errorMsg) {
      <div class="alert-err"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
    }
  </div>

  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>G\xE9n\xE9ration en cours\u2026</p>
    </div>

  } @else if (generated) {

    <!-- En-t\xEAte impression -->
    <div class="pl-print-header">
      <h2>COMPTE DE R\xC9SULTAT</h2>
      <div class="pl-period">P\xE9riode du {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</div>
      <div class="pl-printed">Imprim\xE9 le {{ today | date:'dd/MM/yyyy HH:mm' }}</div>
    </div>

    @if (lines.length === 0) {
      <div class="empty-state no-print">
        <span class="material-icons">trending_up</span>
        <p>Aucune donn\xE9e pour cette p\xE9riode.</p>
      </div>
    } @else {
      <div class="pl-table-wrap">
        <table class="pl-table">
          <thead>
            <tr class="pl-thead-group">
              <th style="width:7%">REF</th>
              <th style="width:51%">LIBELL\xC9</th>
              <th style="width:4%;text-align:center">SGN</th>
              <th class="text-right" style="width:19%">
                NET N
                @if (dateFrom) { <span class="period-hint">{{ dateFrom | date:'yyyy' }}</span> }
              </th>
              <th class="text-right" style="width:19%">
                NET N-1
                @if (dateFromN1) { <span class="period-hint">{{ dateFromN1 | date:'yyyy' }}</span> }
              </th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track $index) {
              <tr [class.pl-row-subtotal]="line.isTotal">
                <td class="mono ref-col">{{ line.code }}</td>
                <td [class.fw-bold]="line.isTotal">{{ line.label }}</td>
                <td class="text-center sign-col"
                    [class.sign-pos]="line.sign === '+'"
                    [class.sign-neg]="line.sign === '-'">{{ line.sign }}</td>
                <td class="text-right mono" [class.fw-bold]="line.isTotal"
                    [class.amount-pos]="line.sign === '+' && line.current > 0"
                    [class.amount-neg]="line.sign === '-' && line.current > 0">
                  {{ line.current > 0 || line.isTotal ? (line.current | number:'1.0-0') : '' }}
                </td>
                <td class="text-right mono text-muted">
                  {{ (line.previous ?? 0) > 0 ? ((line.previous ?? 0) | number:'1.0-0') : '' }}
                </td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="pl-tfoot-result">
              <td colspan="3">R\xC9SULTAT NET (XI)</td>
              <td class="text-right mono" [class.result-pos]="resultNet >= 0" [class.result-neg]="resultNet < 0">
                {{ resultNet | number:'1.0-0' }}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/accounting/components/reports/profit-loss/profit-loss.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.form-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.pl-table-wrap {\n  overflow-x: auto;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold {\n  font-weight: 700;\n}\n.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center {\n  text-align: center;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.pl-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.pl-table th,\n.pl-table td {\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.pl-table .pl-thead-group th {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-align: left;\n  white-space: nowrap;\n}\n.pl-table tbody tr:nth-child(even):not(.pl-row-subtotal) {\n  background: var(--bg-elevated);\n}\n.pl-table tbody tr:not(.pl-row-subtotal):hover td {\n  background: var(--bg-elevated);\n}\n.pl-table .pl-row-subtotal td {\n  background: var(--bg-elevated) !important;\n  font-weight: 700;\n  border-top: 1.5px solid #2563eb;\n  font-size: 12px;\n}\n.pl-table tfoot .pl-tfoot-result td {\n  background: var(--success-bg) !important;\n  font-weight: 700;\n  border-top: 2px solid #16a34a;\n  font-size: 13px;\n}\n.pl-table tfoot .pl-tfoot-result td:first-child {\n  text-align: left;\n  color: var(--success);\n}\n.pl-table tfoot .pl-tfoot-result td.result-pos {\n  color: var(--success);\n}\n.pl-table tfoot .pl-tfoot-result td.result-neg {\n  color: var(--danger);\n  background: var(--danger-bg) !important;\n  border-color: var(--danger) !important;\n}\n.ref-col {\n  color: var(--primary);\n  font-size: 11px;\n  font-weight: 700;\n}\n.sign-col {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-muted);\n}\n.sign-pos {\n  color: var(--success) !important;\n}\n.sign-neg {\n  color: var(--danger) !important;\n}\n.amount-pos {\n  color: var(--success);\n}\n.amount-neg {\n  color: var(--danger);\n}\n.period-hint {\n  display: inline-block;\n  margin-left: 4px;\n  padding: 0 5px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  font-size: 10px;\n}\n.pl-print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.pl-print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.pl-print-header .pl-period {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.pl-print-header .pl-printed {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n@media print {\n  .page-container {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print {\n    display: none !important;\n  }\n  .pl-print-header {\n    display: block !important;\n  }\n  .pl-table {\n    font-size: 9px;\n  }\n  .pl-table th,\n  .pl-table td {\n    padding: 3px 5px;\n  }\n  .pl-table .pl-thead-group th {\n    background: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table .pl-row-subtotal td {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table tfoot .pl-tfoot-result td {\n    background: var(--success-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=profit-loss.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfitLossComponent, { className: "ProfitLossComponent", filePath: "app/modules/accounting/components/reports/profit-loss/profit-loss.component.ts", lineNumber: 17 });
})();
export {
  ProfitLossComponent
};
//# sourceMappingURL=chunk-CYC4IUW2.js.map
