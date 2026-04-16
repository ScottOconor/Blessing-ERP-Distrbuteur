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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FU5PLMG6.js";
import {
  AccountingService
} from "./chunk-TG7BJABV.js";
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
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/reports/partner-balance/partner-balance4.component.ts
var _forTrack0 = ($index, $item) => $item.partnerRef;
function PartnerBalance4Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 20);
    \u0275\u0275listener("click", function PartnerBalance4Component_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Exporter PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function PartnerBalance4Component_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Exporter Excel");
    \u0275\u0275elementEnd()();
  }
}
function PartnerBalance4Component_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function PartnerBalance4Component_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.errorMsg);
  }
}
function PartnerBalance4Component_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function PartnerBalance4Component_Conditional_43_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 3);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune donn\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_28_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 33);
    \u0275\u0275text(11, "Client");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 27);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 27);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 34);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 35);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r3.partnerRef);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r3.accountNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r3.partnerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(line_r3.debit > 0 ? \u0275\u0275pipeBind2(14, 7, line_r3.debit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r3.credit > 0 ? \u0275\u0275pipeBind2(17, 10, line_r3.credit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r3.finalDebit > 0 ? \u0275\u0275pipeBind2(20, 13, line_r3.finalDebit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r3.finalCredit > 0 ? \u0275\u0275pipeBind2(23, 16, line_r3.finalCredit, "1.2-2") : "");
  }
}
function PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 30);
    \u0275\u0275text(2, "CLIENTS");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(3, PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_28_For_4_Template, 24, 19, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.customers);
  }
}
function PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_29_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 36);
    \u0275\u0275text(11, "Fournisseur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 27);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 27);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 34);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 35);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r4.partnerRef);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r4.accountNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r4.partnerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(line_r4.debit > 0 ? \u0275\u0275pipeBind2(14, 7, line_r4.debit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r4.credit > 0 ? \u0275\u0275pipeBind2(17, 10, line_r4.credit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r4.finalDebit > 0 ? \u0275\u0275pipeBind2(20, 13, line_r4.finalDebit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r4.finalCredit > 0 ? \u0275\u0275pipeBind2(23, 16, line_r4.finalCredit, "1.2-2") : "");
  }
}
function PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 30);
    \u0275\u0275text(2, "FOURNISSEURS");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(3, PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_29_For_4_Template, 24, 19, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.suppliers);
  }
}
function PartnerBalance4Component_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "table", 26)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "R\xE9f.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "N\xB0 Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Nom du Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 27);
    \u0275\u0275text(20, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 27);
    \u0275\u0275text(22, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 27);
    \u0275\u0275text(24, "Solde D\xE9biteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 27);
    \u0275\u0275text(26, "Solde Cr\xE9diteur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275conditionalCreate(28, PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_28_Template, 5, 0);
    \u0275\u0275conditionalCreate(29, PartnerBalance4Component_Conditional_43_Conditional_1_Conditional_29_Template, 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "tfoot")(31, "tr")(32, "td", 28);
    \u0275\u0275text(33, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Balance des Tiers 4 Colonnes \u2014 ", \u0275\u0275pipeBind2(4, 9, ctx_r1.dateFrom, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(5, 12, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.lines.length, " tiers");
    \u0275\u0275advance(21);
    \u0275\u0275conditional(ctx_r1.customers.length > 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.suppliers.length > 0 ? 29 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 15, ctx_r1.totals.debit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 18, ctx_r1.totals.credit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 21, ctx_r1.totals.finD, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 24, ctx_r1.totals.finC, "1.2-2"));
  }
}
function PartnerBalance4Component_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PartnerBalance4Component_Conditional_43_Conditional_0_Template, 5, 0, "div", 22)(1, PartnerBalance4Component_Conditional_43_Conditional_1_Template, 46, 27, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.lines.length === 0 ? 0 : 1);
  }
}
var PartnerBalance4Component = class _PartnerBalance4Component {
  constructor(reportService, accountingService, authService, excelExport, pdfExport) {
    this.reportService = reportService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.pdfExport = pdfExport;
    this.journals = [];
    this.lines = [];
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.displayAccount = "all";
    this.resultSelection = "customer_supplier";
    this.dateFrom = "";
    this.dateTo = "";
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
    this.accountingService.getJournals(this.authService.getCompanyId()).subscribe({
      next: (j) => this.journals = j,
      error: () => {
      }
    });
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.reportService.getPartnerBalance4Cols({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      displayAccount: this.displayAccount,
      resultSelection: this.resultSelection
    }).subscribe({
      next: (res) => {
        this.lines = res.lines || res || [];
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur";
      }
    });
  }
  get customers() {
    return this.lines.filter((l) => l.type === "customer");
  }
  get suppliers() {
    return this.lines.filter((l) => l.type === "supplier");
  }
  get totals() {
    return {
      debit: this.lines.reduce((s, l) => s + (l.debit || 0), 0),
      credit: this.lines.reduce((s, l) => s + (l.credit || 0), 0),
      finD: this.lines.reduce((s, l) => s + (l.finalDebit || 0), 0),
      finC: this.lines.reduce((s, l) => s + (l.finalCredit || 0), 0)
    };
  }
  print() {
    window.print();
  }
  exportPdf() {
    this.pdfExport.exportPartnerBalance4(this.lines, this.dateFrom, this.dateTo);
  }
  exportExcel() {
    this.excelExport.exportPartnerBalance4(this.lines, this.dateFrom, this.dateTo);
  }
  static {
    this.\u0275fac = function PartnerBalance4Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PartnerBalance4Component)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnerBalance4Component, selectors: [["app-partner-balance4"]], decls: 44, vars: 9, consts: [[1, "page-container", "report-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [2, "display", "flex", "gap", "8px"], [1, "report-header", "no-print"], [1, "filters-bar", 2, "margin-bottom", "0"], [1, "filter-group"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "customer"], ["value", "supplier"], ["value", "customer_supplier"], ["value", "all"], ["value", "movement"], [1, "filter-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], [1, "alert-error", "mb-3"], [2, "text-align", "center", "padding", "60px"], [1, "btn", "btn-outline", 3, "click"], [1, "spinner"], [1, "empty-state"], [1, "table-container"], [1, "report-title-bar"], [1, "report-period"], [1, "table-erp"], [1, "text-right"], ["colspan", "4"], [1, "section-header"], ["colspan", "8"], [1, "text-muted", "fs-sm"], [1, "mono"], [1, "badge", "badge-sale"], [1, "text-right", "amount-debit"], [1, "text-right", "amount-credit"], [1, "badge", "badge-purchase"]], template: function PartnerBalance4Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Balance des Tiers \u2014 4 Colonnes ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, PartnerBalance4Component_Conditional_6_Template, 9, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label");
        \u0275\u0275text(11, "Du *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function PartnerBalance4Component_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "label");
        \u0275\u0275text(15, "Au *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function PartnerBalance4Component_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 7)(18, "label");
        \u0275\u0275text(19, "Type de tiers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function PartnerBalance4Component_Template_select_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resultSelection, $event) || (ctx.resultSelection = $event);
          return $event;
        });
        \u0275\u0275elementStart(21, "option", 10);
        \u0275\u0275text(22, "Clients seulement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 11);
        \u0275\u0275text(24, "Fournisseurs seulement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 12);
        \u0275\u0275text(26, "Clients et Fournisseurs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 7)(28, "label");
        \u0275\u0275text(29, "Afficher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function PartnerBalance4Component_Template_select_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.displayAccount, $event) || (ctx.displayAccount = $event);
          return $event;
        });
        \u0275\u0275elementStart(31, "option", 13);
        \u0275\u0275text(32, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 14);
        \u0275\u0275text(34, "Avec mouvements");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 15)(36, "button", 16);
        \u0275\u0275listener("click", function PartnerBalance4Component_Template_button_click_36_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(37, PartnerBalance4Component_Conditional_37_Template, 1, 0, "span", 17);
        \u0275\u0275elementStart(38, "span", 3);
        \u0275\u0275text(39, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "G\xE9n\xE9rer ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(41, PartnerBalance4Component_Conditional_41_Template, 4, 1, "div", 18);
        \u0275\u0275conditionalCreate(42, PartnerBalance4Component_Conditional_42_Template, 2, 0, "div", 19)(43, PartnerBalance4Component_Conditional_43_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.generated ? 6 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.resultSelection);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.displayAccount);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 37 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMsg ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 42 : ctx.generated ? 43 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: #714B67;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=partner-balance.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnerBalance4Component, [{
    type: Component,
    args: [{ selector: "app-partner-balance4", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container report-container">
  <div class="page-header no-print">
    <h1 class="page-title">
      <span class="material-icons">people</span>
      Balance des Tiers \u2014 4 Colonnes
    </h1>
    @if (generated) {
      <div style="display:flex;gap:8px">
        <button class="btn btn-outline" (click)="exportPdf()"><span class="material-icons">picture_as_pdf</span> Exporter PDF</button>
        <button class="btn btn-outline" (click)="exportExcel()"><span class="material-icons">table_view</span> Exporter Excel</button>
      </div>
    }
  </div>

  <div class="report-header no-print">
    <div class="filters-bar" style="margin-bottom:0">
      <div class="filter-group">
        <label>Du *</label>
        <input type="date" class="form-control" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>Au *</label>
        <input type="date" class="form-control" [(ngModel)]="dateTo">
      </div>
      <div class="filter-group">
        <label>Type de tiers</label>
        <select class="form-control" [(ngModel)]="resultSelection">
          <option value="customer">Clients seulement</option>
          <option value="supplier">Fournisseurs seulement</option>
          <option value="customer_supplier">Clients et Fournisseurs</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Afficher</label>
        <select class="form-control" [(ngModel)]="displayAccount">
          <option value="all">Tous</option>
          <option value="movement">Avec mouvements</option>
        </select>
      </div>
      <div class="filter-actions">
        <button class="btn btn-primary" (click)="generate()" [disabled]="loading">
          @if (loading) { <span class="spinner-sm"></span> }
          <span class="material-icons">play_arrow</span>G\xE9n\xE9rer
        </button>
      </div>
    </div>
  </div>

  @if (errorMsg) {
    <div class="alert-error mb-3"><span class="material-icons">error_outline</span>{{ errorMsg }}</div>
  }

  @if (loading) {
    <div style="text-align:center;padding:60px"><div class="spinner"></div></div>
  } @else if (generated) {
    @if (lines.length === 0) {
      <div class="empty-state">
        <span class="material-icons">people</span>
        <h3>Aucune donn\xE9e</h3>
      </div>
    } @else {
      <div class="table-container">
        <div class="report-title-bar">
          <h3>Balance des Tiers 4 Colonnes \u2014 {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</h3>
          <span class="report-period">{{ lines.length }} tiers</span>
        </div>
        <table class="table-erp">
          <thead>
            <tr>
              <th>R\xE9f.</th>
              <th>N\xB0 Compte</th>
              <th>Nom du Tiers</th>
              <th>Type</th>
              <th class="text-right">D\xE9bit</th>
              <th class="text-right">Cr\xE9dit</th>
              <th class="text-right">Solde D\xE9biteur</th>
              <th class="text-right">Solde Cr\xE9diteur</th>
            </tr>
          </thead>
          <tbody>
            @if (customers.length > 0) {
              <tr class="section-header">
                <td colspan="8">CLIENTS</td>
              </tr>
              @for (line of customers; track line.partnerRef) {
                <tr>
                  <td class="text-muted fs-sm">{{ line.partnerRef }}</td>
                  <td><span class="mono">{{ line.accountNumber }}</span></td>
                  <td><strong>{{ line.partnerName }}</strong></td>
                  <td><span class="badge badge-sale">Client</span></td>
                  <td class="text-right">{{ line.debit > 0 ? (line.debit | number:'1.2-2') : '' }}</td>
                  <td class="text-right">{{ line.credit > 0 ? (line.credit | number:'1.2-2') : '' }}</td>
                  <td class="text-right amount-debit">{{ line.finalDebit > 0 ? (line.finalDebit | number:'1.2-2') : '' }}</td>
                  <td class="text-right amount-credit">{{ line.finalCredit > 0 ? (line.finalCredit | number:'1.2-2') : '' }}</td>
                </tr>
              }
            }
            @if (suppliers.length > 0) {
              <tr class="section-header">
                <td colspan="8">FOURNISSEURS</td>
              </tr>
              @for (line of suppliers; track line.partnerRef) {
                <tr>
                  <td class="text-muted fs-sm">{{ line.partnerRef }}</td>
                  <td><span class="mono">{{ line.accountNumber }}</span></td>
                  <td><strong>{{ line.partnerName }}</strong></td>
                  <td><span class="badge badge-purchase">Fournisseur</span></td>
                  <td class="text-right">{{ line.debit > 0 ? (line.debit | number:'1.2-2') : '' }}</td>
                  <td class="text-right">{{ line.credit > 0 ? (line.credit | number:'1.2-2') : '' }}</td>
                  <td class="text-right amount-debit">{{ line.finalDebit > 0 ? (line.finalDebit | number:'1.2-2') : '' }}</td>
                  <td class="text-right amount-credit">{{ line.finalCredit > 0 ? (line.finalCredit | number:'1.2-2') : '' }}</td>
                </tr>
              }
            }
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">TOTAL G\xC9N\xC9RAL</td>
              <td>{{ totals.debit | number:'1.2-2' }}</td>
              <td>{{ totals.credit | number:'1.2-2' }}</td>
              <td>{{ totals.finD | number:'1.2-2' }}</td>
              <td>{{ totals.finC | number:'1.2-2' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/accounting/components/reports/partner-balance/partner-balance.component.scss */\n.mono {\n  font-family: "Courier New", monospace;\n  color: #714B67;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=partner-balance.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AccountingService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnerBalance4Component, { className: "PartnerBalance4Component", filePath: "src/app/modules/accounting/components/reports/partner-balance/partner-balance4.component.ts", lineNumber: 19 });
})();
export {
  PartnerBalance4Component
};
//# sourceMappingURL=chunk-5KMLQCQ7.js.map
