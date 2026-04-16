import {
  ReportService
} from "./chunk-NAOYGS5K.js";
import {
  ExcelExportService,
  PdfExportService
} from "./chunk-MTQHHWC2.js";
import "./chunk-7YWLATDR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FU5PLMG6.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
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
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/reports/profit-loss/profit-loss.component.ts
function ProfitLossComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 14);
    \u0275\u0275listener("click", function ProfitLossComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Exporter PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function ProfitLossComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Exporter Excel ");
    \u0275\u0275elementEnd()();
  }
}
function ProfitLossComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function ProfitLossComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMsg, " ");
  }
}
function ProfitLossComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function ProfitLossComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 3);
    \u0275\u0275text(2, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune donn\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Aucun mouvement pour cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function ProfitLossComponent_Conditional_25_Conditional_11_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "td", 32)(6, "td", 33);
    \u0275\u0275elementStart(7, "td", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 34);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    \u0275\u0275classProp("pl-row-header", line_r3.isSectionHeader)("pl-row-subtotal", line_r3.isTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r3.code);
    \u0275\u0275advance();
    \u0275\u0275classProp("fw-bold", line_r3.isTotal || line_r3.isSectionHeader);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r3.label);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fw-bold", line_r3.isTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r3.current !== 0 || line_r3.isTotal ? \u0275\u0275pipeBind2(9, 12, line_r3.current, "1.0-0") : "", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", line_r3.previous !== void 0 && line_r3.previous !== 0 ? \u0275\u0275pipeBind2(12, 15, line_r3.previous, "1.0-0") : "", " ");
  }
}
function ProfitLossComponent_Conditional_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 21)(2, "thead")(3, "tr")(4, "th", 22);
    \u0275\u0275text(5, "REF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 23);
    \u0275\u0275text(7, "LIBELL\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "COMPTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, "SIGNE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 26);
    \u0275\u0275text(13, "NET N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "NET N-1");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ProfitLossComponent_Conditional_25_Conditional_11_For_18_Template, 13, 18, "tr", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "tfoot")(20, "tr", 28)(21, "td", 29);
    \u0275\u0275text(22, "R\xC9SULTAT NET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 30);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 1, ctx_r1.resultNet, "1.0-0"));
  }
}
function ProfitLossComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "COMPTE DE R\xC9SULTAT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ProfitLossComponent_Conditional_25_Conditional_10_Template, 7, 0, "div", 19)(11, ProfitLossComponent_Conditional_25_Conditional_11_Template, 27, 4, "div", 20);
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
    this.lines = [];
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
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
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: (res) => {
        const rubriques = res.rubriques || {};
        this.lines = Object.values(rubriques).map((r) => ({
          code: r.code || "",
          label: r.label || "",
          current: Number(r.amount) || 0,
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
    this.pdfExport.exportCompteResultat(this.lines, this.dateFrom, this.dateTo);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfitLossComponent, selectors: [["app-profit-loss"]], decls: 26, vars: 7, consts: [[1, "page-container", "report-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [2, "display", "flex", "gap", "8px"], [1, "report-header", "no-print"], [1, "filters-bar", 2, "margin-bottom", "0"], [1, "filter-group"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], [1, "alert-error", "mb-3", "no-print"], [1, "no-print", 2, "text-align", "center", "padding", "60px"], [1, "btn", "btn-outline", 3, "click"], [1, "spinner"], [1, "pl-print-header"], [1, "pl-period"], [1, "pl-printed"], [1, "empty-state", "no-print"], [1, "pl-table-wrap"], [1, "pl-table"], [2, "width", "7%"], [2, "width", "49%"], [2, "width", "12%"], [2, "width", "4%", "text-align", "center"], [1, "text-right", 2, "width", "14%"], [3, "pl-row-header", "pl-row-subtotal"], [1, "pl-tfoot-result"], ["colspan", "4"], [1, "text-right", "mono"], [1, "mono"], [1, "mono", "text-center", "fs-xs"], [1, "text-center"], [1, "text-right", "mono", "text-muted"]], template: function ProfitLossComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "trending_up");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Compte de R\xE9sultat ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ProfitLossComponent_Conditional_6_Template, 9, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label");
        \u0275\u0275text(11, "P\xE9riode du *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ProfitLossComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "label");
        \u0275\u0275text(15, "Au *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ProfitLossComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "button", 10);
        \u0275\u0275listener("click", function ProfitLossComponent_Template_button_click_18_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(19, ProfitLossComponent_Conditional_19_Template, 1, 0, "span", 11);
        \u0275\u0275elementStart(20, "span", 3);
        \u0275\u0275text(21, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " G\xE9n\xE9rer ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(23, ProfitLossComponent_Conditional_23_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(24, ProfitLossComponent_Conditional_24_Template, 2, 0, "div", 13)(25, ProfitLossComponent_Conditional_25_Template, 12, 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.generated ? 6 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 19 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMsg ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 24 : ctx.generated ? 25 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.fs-xs[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pl-print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.pl-print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.pl-print-header[_ngcontent-%COMP%]   .pl-period[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n}\n.pl-print-header[_ngcontent-%COMP%]   .pl-printed[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #777;\n  margin-top: 2px;\n}\n.pl-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.pl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 12px;\n  border: 1px solid #dee2e6;\n}\n.pl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #dee2e6;\n  vertical-align: middle;\n}\n.pl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #714B67;\n  color: white;\n  font-weight: 600;\n  font-size: 11px;\n  text-align: left;\n}\n.pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f5f0f7;\n}\n.pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.pl-row-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #e9ecef !important;\n  font-weight: 700;\n  color: #714B67;\n}\n.pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.pl-row-subtotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #f0eff4 !important;\n  font-weight: 700;\n  border-top: 1px solid #714B67;\n}\n.pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #e8f5e8 !important;\n  font-weight: 700;\n  border-top: 2px solid #28a745;\n  font-size: 13px;\n}\n.pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  color: #155724;\n}\n.pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .pl-print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .pl-table[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .pl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .pl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 5px;\n  }\n  .pl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #714B67 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.pl-row-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #e9ecef !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.pl-row-subtotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #f0eff4 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .pl-tfoot-result[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #e8f5e8 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=profit-loss.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfitLossComponent, [{
    type: Component,
    args: [{ selector: "app-profit-loss", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container report-container">

  <!-- ===== HEADER (\xE9cran seulement) ===== -->
  <div class="page-header no-print">
    <h1 class="page-title">
      <span class="material-icons">trending_up</span>
      Compte de R\xE9sultat
    </h1>
    @if (generated) {
      <div style="display:flex;gap:8px">
        <button class="btn btn-outline" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> Exporter PDF
        </button>
        <button class="btn btn-outline" (click)="exportExcel()">
          <span class="material-icons">table_view</span> Exporter Excel
        </button>
      </div>
    }
  </div>

  <!-- ===== FILTRES ===== -->
  <div class="report-header no-print">
    <div class="filters-bar" style="margin-bottom:0">
      <div class="filter-group">
        <label>P\xE9riode du *</label>
        <input type="date" class="form-control" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>Au *</label>
        <input type="date" class="form-control" [(ngModel)]="dateTo">
      </div>
      <div class="filter-actions">
        <button class="btn btn-primary" (click)="generate()" [disabled]="loading">
          @if (loading) { <span class="spinner-sm"></span> }
          <span class="material-icons">play_arrow</span> G\xE9n\xE9rer
        </button>
      </div>
    </div>
  </div>

  @if (errorMsg) {
    <div class="alert-error mb-3 no-print">
      <span class="material-icons">error_outline</span>{{ errorMsg }}
    </div>
  }

  @if (loading) {
    <div class="no-print" style="text-align:center;padding:60px"><div class="spinner"></div></div>
  } @else if (generated) {

    <!-- ===== EN-T\xCATE D'IMPRESSION ===== -->
    <div class="pl-print-header">
      <h2>COMPTE DE R\xC9SULTAT</h2>
      <div class="pl-period">P\xE9riode du {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</div>
      <div class="pl-printed">Imprim\xE9 le {{ today | date:'dd/MM/yyyy HH:mm' }}</div>
    </div>

    @if (lines.length === 0) {
      <div class="empty-state no-print">
        <span class="material-icons">trending_up</span>
        <h3>Aucune donn\xE9e</h3>
        <p>Aucun mouvement pour cette p\xE9riode.</p>
      </div>
    } @else {
      <div class="pl-table-wrap">
        <table class="pl-table">
          <thead>
            <tr>
              <th style="width:7%">REF</th>
              <th style="width:49%">LIBELL\xC9</th>
              <th style="width:12%">COMPTE</th>
              <th style="width:4%; text-align:center">SIGNE</th>
              <th class="text-right" style="width:14%">NET N</th>
              <th class="text-right" style="width:14%">NET N-1</th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track $index) {
              <tr [class.pl-row-header]="line.isSectionHeader"
                  [class.pl-row-subtotal]="line.isTotal">
                <td class="mono">{{ line.code }}</td>
                <td [class.fw-bold]="line.isTotal || line.isSectionHeader">{{ line.label }}</td>
                <td class="mono text-center fs-xs"></td>
                <td class="text-center"></td>
                <td class="text-right mono" [class.fw-bold]="line.isTotal">
                  {{ line.current !== 0 || line.isTotal ? (line.current | number:'1.0-0') : '' }}
                </td>
                <td class="text-right mono text-muted">
                  {{ line.previous !== undefined && line.previous !== 0 ? (line.previous | number:'1.0-0') : '' }}
                </td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="pl-tfoot-result">
              <td colspan="4">R\xC9SULTAT NET</td>
              <td class="text-right mono">{{ resultNet | number:'1.0-0' }}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/accounting/components/reports/profit-loss/profit-loss.component.scss */\n.mono {\n  font-family: "Courier New", monospace;\n}\n.fw-bold {\n  font-weight: 700;\n}\n.text-muted {\n  color: #6c757d;\n}\n.fs-xs {\n  font-size: 10px;\n}\n.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center {\n  text-align: center;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pl-print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.pl-print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.pl-print-header .pl-period {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n}\n.pl-print-header .pl-printed {\n  font-size: 10px;\n  color: #777;\n  margin-top: 2px;\n}\n.pl-table-wrap {\n  overflow-x: auto;\n}\n.pl-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 12px;\n  border: 1px solid #dee2e6;\n}\n.pl-table th,\n.pl-table td {\n  padding: 6px 10px;\n  border: 1px solid #dee2e6;\n  vertical-align: middle;\n}\n.pl-table thead th {\n  background-color: #714B67;\n  color: white;\n  font-weight: 600;\n  font-size: 11px;\n  text-align: left;\n}\n.pl-table tbody tr:nth-child(even) {\n  background-color: #fafafa;\n}\n.pl-table tbody tr:hover {\n  background-color: #f5f0f7;\n}\n.pl-table tbody tr.pl-row-header td {\n  background-color: #e9ecef !important;\n  font-weight: 700;\n  color: #714B67;\n}\n.pl-table tbody tr.pl-row-subtotal td {\n  background-color: #f0eff4 !important;\n  font-weight: 700;\n  border-top: 1px solid #714B67;\n}\n.pl-table tfoot .pl-tfoot-result td {\n  background-color: #e8f5e8 !important;\n  font-weight: 700;\n  border-top: 2px solid #28a745;\n  font-size: 13px;\n}\n.pl-table tfoot .pl-tfoot-result td:first-child {\n  text-align: left;\n  color: #155724;\n}\n.pl-table tfoot .pl-tfoot-result td.text-right {\n  text-align: right;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .pl-print-header {\n    display: block !important;\n  }\n  .pl-table {\n    font-size: 8px;\n  }\n  .pl-table th,\n  .pl-table td {\n    padding: 3px 5px;\n  }\n  .pl-table thead th {\n    background-color: #714B67 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table tbody tr.pl-row-header td {\n    background-color: #e9ecef !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table tbody tr.pl-row-subtotal td {\n    background-color: #f0eff4 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .pl-table tfoot .pl-tfoot-result td {\n    background-color: #e8f5e8 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=profit-loss.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfitLossComponent, { className: "ProfitLossComponent", filePath: "src/app/modules/accounting/components/reports/profit-loss/profit-loss.component.ts", lineNumber: 17 });
})();
export {
  ProfitLossComponent
};
//# sourceMappingURL=chunk-GF6J4N4L.js.map
