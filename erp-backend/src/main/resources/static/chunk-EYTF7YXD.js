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
  AccountingService
} from "./chunk-PGZXUWCB.js";
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

// src/app/modules/accounting/components/reports/partner-balance/partner-balance4.component.ts
var _forTrack0 = ($index, $item) => $item.partnerRef;
function PartnerBalance4Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 21);
    \u0275\u0275listener("click", function PartnerBalance4Component_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Imprimer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function PartnerBalance4Component_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function PartnerBalance4Component_Conditional_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Excel ");
    \u0275\u0275elementEnd()();
  }
}
function PartnerBalance4Component_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
    \u0275\u0275text(1, " G\xE9n\xE9ration\u2026 ");
  }
}
function PartnerBalance4Component_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function PartnerBalance4Component_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 13);
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
function PartnerBalance4Component_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "G\xE9n\xE9ration en cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PartnerBalance4Component_Conditional_51_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 13);
    \u0275\u0275text(2, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun tiers avec des mouvements sur cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_28_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 40);
    \u0275\u0275text(11, "Client");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 35);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 41);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 42);
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
function PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37)(2, "span", 13);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_28_For_6_Template, 24, 19, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" CLIENTS (", ctx_r1.customers.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.customers);
  }
}
function PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_29_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 43);
    \u0275\u0275text(11, "Fournisseur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 35);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 41);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 42);
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
function PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37)(2, "span", 13);
    \u0275\u0275text(3, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_29_For_6_Template, 24, 19, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" FOURNISSEURS (", ctx_r1.suppliers.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.suppliers);
  }
}
function PartnerBalance4Component_Conditional_51_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "table", 30)(9, "thead")(10, "tr", 31)(11, "th");
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
    \u0275\u0275elementStart(19, "th", 32);
    \u0275\u0275text(20, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 32);
    \u0275\u0275text(22, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 32);
    \u0275\u0275text(24, "Solde D\xE9biteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 32);
    \u0275\u0275text(26, "Solde Cr\xE9diteur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275conditionalCreate(28, PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_28_Template, 7, 1);
    \u0275\u0275conditionalCreate(29, PartnerBalance4Component_Conditional_51_Conditional_1_Conditional_29_Template, 7, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "tfoot")(31, "tr", 33)(32, "td", 34);
    \u0275\u0275text(33, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 35);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 35);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 35);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 35);
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
function PartnerBalance4Component_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PartnerBalance4Component_Conditional_51_Conditional_0_Template, 5, 0, "div", 26)(1, PartnerBalance4Component_Conditional_51_Conditional_1_Template, 46, 27, "div", 27);
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
    this.pdfExport.exportPartnerBalance4(this.lines, this.dateFrom, this.dateTo, this.authService.getActiveCompany()?.name);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnerBalance4Component, selectors: [["app-partner-balance4"]], decls: 52, vars: 14, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "filters-card", "no-print"], [1, "filter-grid"], [1, "filter-group"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "type-chips"], [1, "type-chip", 3, "click"], [1, "material-icons"], [1, "form-ctl", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "movement"], [1, "filter-group", "filter-btn-col"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-err"], [1, "loading-state"], [1, "btn-outline", 3, "click"], [1, "btn-outline", "btn-pdf", 3, "click"], [1, "btn-outline", "btn-excel", 3, "click"], [1, "btn-spinner"], [1, "spinner-lg"], [1, "empty-state"], [1, "rpt-table-wrap"], [1, "rpt-title-bar"], [1, "badge-count"], [1, "rpt-table"], [1, "rpt-thead-group"], [1, "text-right"], [1, "rpt-tfoot-total"], ["colspan", "4"], [1, "text-right", "mono"], [1, "section-header"], ["colspan", "8"], [1, "ref-col"], [1, "mono"], [1, "badge", "badge-client"], [1, "text-right", "mono", "amount-debit"], [1, "text-right", "mono", "amount-credit"], [1, "badge", "badge-fournisseur"]], template: function PartnerBalance4Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Balance des Tiers \u2014 4 Colonnes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Mouvements de la p\xE9riode + soldes finaux par tiers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, PartnerBalance4Component_Conditional_10_Template, 13, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function PartnerBalance4Component_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "label");
        \u0275\u0275text(19, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function PartnerBalance4Component_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "label");
        \u0275\u0275text(23, "Type de tiers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11)(25, "button", 12);
        \u0275\u0275listener("click", function PartnerBalance4Component_Template_button_click_25_listener() {
          return ctx.resultSelection = "customer_supplier";
        });
        \u0275\u0275text(26, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 12);
        \u0275\u0275listener("click", function PartnerBalance4Component_Template_button_click_27_listener() {
          return ctx.resultSelection = "customer";
        });
        \u0275\u0275elementStart(28, "span", 13);
        \u0275\u0275text(29, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Clients ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 12);
        \u0275\u0275listener("click", function PartnerBalance4Component_Template_button_click_31_listener() {
          return ctx.resultSelection = "supplier";
        });
        \u0275\u0275elementStart(32, "span", 13);
        \u0275\u0275text(33, "store");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " Fournisseurs ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 9)(36, "label");
        \u0275\u0275text(37, "Afficher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function PartnerBalance4Component_Template_select_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.displayAccount, $event) || (ctx.displayAccount = $event);
          return $event;
        });
        \u0275\u0275elementStart(39, "option", 15);
        \u0275\u0275text(40, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 16);
        \u0275\u0275text(42, "Avec mouvements");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 17)(44, "label");
        \u0275\u0275text(45, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 18);
        \u0275\u0275listener("click", function PartnerBalance4Component_Template_button_click_46_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(47, PartnerBalance4Component_Conditional_47_Template, 2, 0)(48, PartnerBalance4Component_Conditional_48_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(49, PartnerBalance4Component_Conditional_49_Template, 4, 1, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(50, PartnerBalance4Component_Conditional_50_Template, 4, 0, "div", 20)(51, PartnerBalance4Component_Conditional_51_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.generated ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.resultSelection === "customer_supplier");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.resultSelection === "customer");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.resultSelection === "supplier");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.displayAccount);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 47 : 48);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 50 : ctx.generated ? 51 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.type-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.type-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.type-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.type-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.type-chip.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.rpt-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.rpt-title-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-bottom: none;\n  border-radius: 12px 12px 0 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.badge-count[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n.rpt-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n}\n.rpt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.rpt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .rpt-thead-group[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .rpt-thead-sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  font-size: 10px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even):not(.section-header) {\n  background: var(--bg-elevated);\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.section-header):hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #1e40af;\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 7px 12px;\n  border-color: #1e40af;\n  display: table-cell;\n}\n.rpt-table[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  border-top: 2px solid #2563eb;\n  font-size: 12px;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  color: var(--primary);\n}\n.ref-col[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 11px;\n  white-space: nowrap;\n}\n.amount-debit[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 600;\n}\n.amount-credit[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.badge.badge-client[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.badge.badge-fournisseur[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: #92400e;\n}\n@media print {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .rpt-table[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .rpt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .rpt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 5px;\n  }\n  .rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .rpt-thead-group[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: #1e40af !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=partner-balance.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnerBalance4Component, [{
    type: Component,
    args: [{ selector: "app-partner-balance4", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">people</span>
      <div>
        <h1 class="page-title">Balance des Tiers \u2014 4 Colonnes</h1>
        <p class="page-sub">Mouvements de la p\xE9riode + soldes finaux par tiers</p>
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
        <label>P\xE9riode du</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateTo">
      </div>
      <div class="filter-group">
        <label>Type de tiers</label>
        <div class="type-chips">
          <button class="type-chip" [class.active]="resultSelection === 'customer_supplier'" (click)="resultSelection = 'customer_supplier'">Tous</button>
          <button class="type-chip" [class.active]="resultSelection === 'customer'" (click)="resultSelection = 'customer'">
            <span class="material-icons">person</span> Clients
          </button>
          <button class="type-chip" [class.active]="resultSelection === 'supplier'" (click)="resultSelection = 'supplier'">
            <span class="material-icons">store</span> Fournisseurs
          </button>
        </div>
      </div>
      <div class="filter-group">
        <label>Afficher</label>
        <select class="form-ctl" [(ngModel)]="displayAccount">
          <option value="all">Tous</option>
          <option value="movement">Avec mouvements</option>
        </select>
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
    @if (lines.length === 0) {
      <div class="empty-state">
        <span class="material-icons">people_outline</span>
        <p>Aucun tiers avec des mouvements sur cette p\xE9riode.</p>
      </div>
    } @else {
      <div class="rpt-table-wrap">
        <div class="rpt-title-bar">
          <span>Balance des Tiers 4 Colonnes \u2014 {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</span>
          <span class="badge-count">{{ lines.length }} tiers</span>
        </div>
        <table class="rpt-table">
          <thead>
            <tr class="rpt-thead-group">
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
                <td colspan="8">
                  <span class="material-icons">person</span> CLIENTS ({{ customers.length }})
                </td>
              </tr>
              @for (line of customers; track line.partnerRef) {
                <tr>
                  <td class="ref-col">{{ line.partnerRef }}</td>
                  <td><span class="mono">{{ line.accountNumber }}</span></td>
                  <td><strong>{{ line.partnerName }}</strong></td>
                  <td><span class="badge badge-client">Client</span></td>
                  <td class="text-right mono">{{ line.debit > 0 ? (line.debit | number:'1.2-2') : '' }}</td>
                  <td class="text-right mono">{{ line.credit > 0 ? (line.credit | number:'1.2-2') : '' }}</td>
                  <td class="text-right mono amount-debit">{{ line.finalDebit > 0 ? (line.finalDebit | number:'1.2-2') : '' }}</td>
                  <td class="text-right mono amount-credit">{{ line.finalCredit > 0 ? (line.finalCredit | number:'1.2-2') : '' }}</td>
                </tr>
              }
            }
            @if (suppliers.length > 0) {
              <tr class="section-header">
                <td colspan="8">
                  <span class="material-icons">store</span> FOURNISSEURS ({{ suppliers.length }})
                </td>
              </tr>
              @for (line of suppliers; track line.partnerRef) {
                <tr>
                  <td class="ref-col">{{ line.partnerRef }}</td>
                  <td><span class="mono">{{ line.accountNumber }}</span></td>
                  <td><strong>{{ line.partnerName }}</strong></td>
                  <td><span class="badge badge-fournisseur">Fournisseur</span></td>
                  <td class="text-right mono">{{ line.debit > 0 ? (line.debit | number:'1.2-2') : '' }}</td>
                  <td class="text-right mono">{{ line.credit > 0 ? (line.credit | number:'1.2-2') : '' }}</td>
                  <td class="text-right mono amount-debit">{{ line.finalDebit > 0 ? (line.finalDebit | number:'1.2-2') : '' }}</td>
                  <td class="text-right mono amount-credit">{{ line.finalCredit > 0 ? (line.finalCredit | number:'1.2-2') : '' }}</td>
                </tr>
              }
            }
          </tbody>
          <tfoot>
            <tr class="rpt-tfoot-total">
              <td colspan="4">TOTAL G\xC9N\xC9RAL</td>
              <td class="text-right mono">{{ totals.debit | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ totals.credit | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ totals.finD | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ totals.finC | number:'1.2-2' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/accounting/components/reports/partner-balance/partner-balance.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.form-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.type-chips {\n  display: flex;\n  gap: 6px;\n}\n.type-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.type-chip .material-icons {\n  font-size: 14px;\n}\n.type-chip:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.type-chip.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.rpt-table-wrap {\n  overflow-x: auto;\n}\n.rpt-title-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-bottom: none;\n  border-radius: 12px 12px 0 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.badge-count {\n  padding: 2px 8px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n.rpt-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n}\n.rpt-table th,\n.rpt-table td {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.rpt-table thead .rpt-thead-group th {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.rpt-table thead .rpt-thead-sub th {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  font-size: 10px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.rpt-table thead th.text-right {\n  text-align: right;\n}\n.rpt-table tbody tr:nth-child(even):not(.section-header) {\n  background: var(--bg-elevated);\n}\n.rpt-table tbody tr:not(.section-header):hover td {\n  background: var(--bg-elevated);\n}\n.rpt-table tbody td {\n  color: var(--text-primary);\n}\n.rpt-table tbody td.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table .section-header td {\n  background: #1e40af;\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 7px 12px;\n  border-color: #1e40af;\n  display: table-cell;\n}\n.rpt-table .section-header td .material-icons {\n  font-size: 14px;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.rpt-table tfoot .rpt-tfoot-total td {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  border-top: 2px solid #2563eb;\n  font-size: 12px;\n}\n.rpt-table tfoot .rpt-tfoot-total td.text-right {\n  text-align: right;\n}\n.rpt-table tfoot .rpt-tfoot-total td:first-child {\n  text-align: left;\n  color: var(--primary);\n}\n.ref-col {\n  color: var(--text-muted);\n  font-size: 11px;\n  white-space: nowrap;\n}\n.amount-debit {\n  color: var(--success);\n  font-weight: 600;\n}\n.amount-credit {\n  color: var(--danger);\n  font-weight: 600;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.badge.badge-client {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.badge.badge-fournisseur {\n  background: var(--warning-bg);\n  color: #92400e;\n}\n@media print {\n  .page-container {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print {\n    display: none !important;\n  }\n  .rpt-table {\n    font-size: 9px;\n  }\n  .rpt-table th,\n  .rpt-table td {\n    padding: 3px 5px;\n  }\n  .rpt-table thead .rpt-thead-group th {\n    background: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table .section-header td {\n    background: #1e40af !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table tfoot .rpt-tfoot-total td {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=partner-balance.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AccountingService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnerBalance4Component, { className: "PartnerBalance4Component", filePath: "app/modules/accounting/components/reports/partner-balance/partner-balance4.component.ts", lineNumber: 19 });
})();
export {
  PartnerBalance4Component
};
//# sourceMappingURL=chunk-EYTF7YXD.js.map
