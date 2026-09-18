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
  ɵɵclassMap,
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

// src/app/modules/accounting/components/reports/general-balance/general-balance4.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.accountCode;
function GeneralBalance4Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 21);
    \u0275\u0275listener("click", function GeneralBalance4Component_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Imprimer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function GeneralBalance4Component_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275listener("click", function GeneralBalance4Component_Conditional_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(10, "span", 22);
    \u0275\u0275text(11, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Excel ");
    \u0275\u0275elementEnd()();
  }
}
function GeneralBalance4Component_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function GeneralBalance4Component_For_36_Template_button_click_0_listener() {
      const j_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleJournal(j_r4.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.selectedJournalIds.includes(j_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r4.code);
  }
}
function GeneralBalance4Component_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
    \u0275\u0275text(1, " G\xE9n\xE9ration\u2026 ");
  }
}
function GeneralBalance4Component_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function GeneralBalance4Component_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 22);
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
function GeneralBalance4Component_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "G\xE9n\xE9ration en cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function GeneralBalance4Component_Conditional_45_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 22);
    \u0275\u0275text(2, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun mouvement pour cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function GeneralBalance4Component_Conditional_45_Conditional_11_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 41);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 41);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 41);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r5.accountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r5.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r5.debit > 0 ? \u0275\u0275pipeBind2(8, 6, line_r5.debit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r5.credit > 0 ? \u0275\u0275pipeBind2(11, 9, line_r5.credit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r5.finalDebit > 0 ? \u0275\u0275pipeBind2(14, 12, line_r5.finalDebit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r5.finalCredit > 0 ? \u0275\u0275pipeBind2(17, 15, line_r5.finalCredit, "1.2-2") : "");
  }
}
function GeneralBalance4Component_Conditional_45_Conditional_11_Conditional_70_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Balance \xE9quilibr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u2014 Les mouvements nets de bilan et de gestion s'\xE9quilibrent. ");
  }
}
function GeneralBalance4Component_Conditional_45_Conditional_11_Conditional_70_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "D\xE9s\xE9quilibre d\xE9tect\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u2014 Les totaux nets de bilan et gestion ne s'\xE9quilibrent pas. ");
  }
}
function GeneralBalance4Component_Conditional_45_Conditional_11_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, GeneralBalance4Component_Conditional_45_Conditional_11_Conditional_70_Conditional_1_Template, 5, 0)(2, GeneralBalance4Component_Conditional_45_Conditional_11_Conditional_70_Conditional_2_Template, 5, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.isEquilibre ? "rpt-equilibre ok" : "rpt-equilibre warn");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEquilibre ? 1 : 2);
  }
}
function GeneralBalance4Component_Conditional_45_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 32)(2, "thead")(3, "tr", 33)(4, "th", 34);
    \u0275\u0275text(5, "N\xB0 Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 35);
    \u0275\u0275text(7, "Libell\xE9 du Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 36);
    \u0275\u0275text(9, "Mouvements P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 36);
    \u0275\u0275text(11, "Soldes Finaux");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tr", 37)(13, "th", 38);
    \u0275\u0275text(14, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 38);
    \u0275\u0275text(16, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 38);
    \u0275\u0275text(18, "D\xE9biteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 38);
    \u0275\u0275text(20, "Cr\xE9diteur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, GeneralBalance4Component_Conditional_45_Conditional_11_For_23_Template, 18, 18, "tr", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "tfoot")(25, "tr", 39)(26, "td", 40);
    \u0275\u0275text(27, "Totaux comptes de bilan (cl. 1\u20135)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 41);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 41);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 41);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 41);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tr", 42)(41, "td", 40);
    \u0275\u0275text(42, "Totaux comptes de gestion (cl. 6\u20138)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 41);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td", 41);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td", 41);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td", 41);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "tr", 43)(56, "td", 40);
    \u0275\u0275text(57, "TOTAUX DE LA BALANCE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td", 41);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td", 41);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td", 41);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td", 41);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(70, GeneralBalance4Component_Conditional_45_Conditional_11_Conditional_70_Template, 3, 3, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.bilanDebit) > 0 ? \u0275\u0275pipeBind2(30, 13, ctx_r1.totals.bilanDebit, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.bilanCredit) > 0 ? \u0275\u0275pipeBind2(33, 16, ctx_r1.totals.bilanCredit, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.bilanFinalDebit) > 0 ? \u0275\u0275pipeBind2(36, 19, ctx_r1.totals.bilanFinalDebit, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.bilanFinalCredit) > 0 ? \u0275\u0275pipeBind2(39, 22, ctx_r1.totals.bilanFinalCredit, "1.2-2") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.gestionDebit) > 0 ? \u0275\u0275pipeBind2(45, 25, ctx_r1.totals.gestionDebit, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.gestionCredit) > 0 ? \u0275\u0275pipeBind2(48, 28, ctx_r1.totals.gestionCredit, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.gestionFinalDebit) > 0 ? \u0275\u0275pipeBind2(51, 31, ctx_r1.totals.gestionFinalDebit, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.totals == null ? null : ctx_r1.totals.gestionFinalCredit) > 0 ? \u0275\u0275pipeBind2(54, 34, ctx_r1.totals.gestionFinalCredit, "1.2-2") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 37, ctx_r1.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 40, ctx_r1.totalCredit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 43, ctx_r1.totalFinalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 46, ctx_r1.totalFinalCredit, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totals ? 70 : -1);
  }
}
function GeneralBalance4Component_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h2");
    \u0275\u0275text(2, "Balance G\xE9n\xE9rale \xE0 4 Colonnes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, GeneralBalance4Component_Conditional_45_Conditional_10_Template, 5, 0, "div", 30)(11, GeneralBalance4Component_Conditional_45_Conditional_11_Template, 71, 49, "div", 31);
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
var GeneralBalance4Component = class _GeneralBalance4Component {
  constructor(reportService, accountingService, authService, excelExport, pdfExport) {
    this.reportService = reportService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.pdfExport = pdfExport;
    this.journals = [];
    this.selectedJournalIds = [];
    this.lines = [];
    this.totals = null;
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.displayAccount = "all";
    this.dateFrom = "";
    this.dateTo = "";
    this.today = /* @__PURE__ */ new Date();
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
    this.reportService.getGeneralBalance4Cols({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      journalIds: this.selectedJournalIds.length > 0 ? this.selectedJournalIds : void 0,
      displayAccount: this.displayAccount
    }).subscribe({
      next: (res) => {
        this.lines = res.lines || res || [];
        this.totals = res.totals || null;
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration";
      }
    });
  }
  get totalDebit() {
    return this.lines.reduce((s, l) => s + (l.debit || 0), 0);
  }
  get totalCredit() {
    return this.lines.reduce((s, l) => s + (l.credit || 0), 0);
  }
  get totalFinalDebit() {
    return this.lines.reduce((s, l) => s + (l.finalDebit || 0), 0);
  }
  get totalFinalCredit() {
    return this.lines.reduce((s, l) => s + (l.finalCredit || 0), 0);
  }
  get isEquilibre() {
    if (!this.totals)
      return true;
    const bilanNet = (this.totals.bilanDebit || 0) - (this.totals.bilanCredit || 0);
    const gestionNet = (this.totals.gestionDebit || 0) - (this.totals.gestionCredit || 0);
    return Math.abs(bilanNet + gestionNet) <= 0.01;
  }
  getAccountClass(code) {
    return code ? code[0] : "";
  }
  print() {
    window.print();
  }
  exportPdf() {
    this.pdfExport.exportBalance4(this.lines, this.totals, this.totalDebit, this.totalCredit, this.totalFinalDebit, this.totalFinalCredit, this.dateFrom, this.dateTo, this.authService.getActiveCompany()?.name);
  }
  exportExcel() {
    this.excelExport.exportBalance4(this.lines, this.totals, this.totalDebit, this.totalCredit, this.totalFinalDebit, this.totalFinalCredit, this.dateFrom, this.dateTo);
  }
  onJournalChange(selectedOptions) {
    this.selectedJournalIds = Array.from(selectedOptions).map((o) => +o.value);
  }
  toggleJournal(id) {
    const idx = this.selectedJournalIds.indexOf(id);
    if (idx >= 0)
      this.selectedJournalIds.splice(idx, 1);
    else
      this.selectedJournalIds.push(id);
  }
  static {
    this.\u0275fac = function GeneralBalance4Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GeneralBalance4Component)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneralBalance4Component, selectors: [["app-general-balance4"]], decls: 46, vars: 10, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "filters-card", "no-print"], [1, "filter-grid"], [1, "filter-group"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "form-ctl", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "movement"], [1, "j-chips"], [1, "j-chip", 3, "click"], [1, "j-chip", 3, "active"], [1, "filter-group", "filter-btn-col"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-err"], [1, "loading-state"], [1, "btn-outline", 3, "click"], [1, "material-icons"], [1, "btn-outline", "btn-pdf", 3, "click"], [1, "btn-outline", "btn-excel", 3, "click"], [1, "btn-spinner"], [1, "spinner-lg"], [1, "rpt-print-header"], [1, "rpt-period"], [1, "rpt-printed"], [1, "empty-state", "no-print"], [1, "rpt-table-wrap"], [1, "rpt-table"], [1, "rpt-thead-group"], ["rowspan", "2", 2, "width", "10%"], ["rowspan", "2", 2, "width", "36%"], ["colspan", "2", 2, "text-align", "center"], [1, "rpt-thead-sub"], [1, "text-right"], [1, "rpt-tfoot-bilan"], ["colspan", "2"], [1, "text-right", "mono"], [1, "rpt-tfoot-gestion"], [1, "rpt-tfoot-total"], [3, "class"], [1, "mono"]], template: function GeneralBalance4Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Balance G\xE9n\xE9rale \u2014 4 Colonnes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Mouvements de la p\xE9riode + soldes finaux par compte");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, GeneralBalance4Component_Conditional_10_Template, 13, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function GeneralBalance4Component_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "label");
        \u0275\u0275text(19, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function GeneralBalance4Component_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "label");
        \u0275\u0275text(23, "Afficher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function GeneralBalance4Component_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.displayAccount, $event) || (ctx.displayAccount = $event);
          return $event;
        });
        \u0275\u0275elementStart(25, "option", 12);
        \u0275\u0275text(26, "Tous les comptes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 13);
        \u0275\u0275text(28, "Avec mouvements");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 9)(30, "label");
        \u0275\u0275text(31, "Journaux");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 14)(33, "button", 15);
        \u0275\u0275listener("click", function GeneralBalance4Component_Template_button_click_33_listener() {
          return ctx.selectedJournalIds = [];
        });
        \u0275\u0275text(34, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(35, GeneralBalance4Component_For_36_Template, 2, 3, "button", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 17)(38, "label");
        \u0275\u0275text(39, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 18);
        \u0275\u0275listener("click", function GeneralBalance4Component_Template_button_click_40_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(41, GeneralBalance4Component_Conditional_41_Template, 2, 0)(42, GeneralBalance4Component_Conditional_42_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(43, GeneralBalance4Component_Conditional_43_Template, 4, 1, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(44, GeneralBalance4Component_Conditional_44_Template, 4, 0, "div", 20)(45, GeneralBalance4Component_Conditional_45_Template, 12, 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.generated ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.displayAccount);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.selectedJournalIds.length === 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.journals);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 41 : 42);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 44 : ctx.generated ? 45 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.j-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n  max-width: 400px;\n}\n.j-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 20px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.j-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.j-chip.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.rpt-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n.rpt-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.rpt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.rpt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .rpt-thead-group[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-align: center;\n  white-space: nowrap;\n}\n.rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .rpt-thead-sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  font-size: 10px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--bg-elevated);\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.rpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-bilan[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  font-weight: 600;\n  border-top: 2px solid var(--primary);\n  font-size: 11px;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-bilan[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-bilan[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  color: #1565c0;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-gestion[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  font-weight: 600;\n  border-top: 1px solid #dc2626;\n  font-size: 11px;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-gestion[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-gestion[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  color: var(--danger);\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  border-top: 2px solid #2563eb;\n  font-size: 12px;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  color: var(--primary);\n}\n.rpt-equilibre[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.rpt-equilibre[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.rpt-equilibre.ok[_ngcontent-%COMP%] {\n  background: #d4edda;\n  border: 1px solid var(--success-bg);\n  color: var(--success);\n}\n.rpt-equilibre.ok[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.rpt-equilibre.warn[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  border: 1px solid var(--warning-bg);\n  color: var(--warning);\n}\n.rpt-equilibre.warn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.rpt-print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.rpt-print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.rpt-print-header[_ngcontent-%COMP%]   .rpt-period[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.rpt-print-header[_ngcontent-%COMP%]   .rpt-printed[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n@media print {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .rpt-print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .rpt-table[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .rpt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .rpt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 5px;\n  }\n  .rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .rpt-thead-group[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .rpt-thead-sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-bilan[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: var(--info-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-gestion[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: var(--danger-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .rpt-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-equilibre.ok[_ngcontent-%COMP%] {\n    background: #d4edda !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-equilibre.warn[_ngcontent-%COMP%] {\n    background: var(--warning-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=general-balance.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneralBalance4Component, [{
    type: Component,
    args: [{ selector: "app-general-balance4", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">table_chart</span>
      <div>
        <h1 class="page-title">Balance G\xE9n\xE9rale \u2014 4 Colonnes</h1>
        <p class="page-sub">Mouvements de la p\xE9riode + soldes finaux par compte</p>
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
        <label>Afficher</label>
        <select class="form-ctl" [(ngModel)]="displayAccount">
          <option value="all">Tous les comptes</option>
          <option value="movement">Avec mouvements</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Journaux</label>
        <div class="j-chips">
          <button class="j-chip" [class.active]="selectedJournalIds.length === 0" (click)="selectedJournalIds = []">Tous</button>
          @for (j of journals; track j.id) {
            <button class="j-chip" [class.active]="selectedJournalIds.includes(j.id!)" (click)="toggleJournal(j.id!)">{{ j.code }}</button>
          }
        </div>
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

    <div class="rpt-print-header">
      <h2>Balance G\xE9n\xE9rale \xE0 4 Colonnes</h2>
      <div class="rpt-period">P\xE9riode du {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</div>
      <div class="rpt-printed">Imprim\xE9 le {{ today | date:'dd/MM/yyyy HH:mm' }}</div>
    </div>

    @if (lines.length === 0) {
      <div class="empty-state no-print">
        <span class="material-icons">table_chart</span>
        <p>Aucun mouvement pour cette p\xE9riode.</p>
      </div>
    } @else {
      <div class="rpt-table-wrap">
        <table class="rpt-table">
          <thead>
            <tr class="rpt-thead-group">
              <th rowspan="2" style="width:10%">N\xB0 Compte</th>
              <th rowspan="2" style="width:36%">Libell\xE9 du Compte</th>
              <th colspan="2" style="text-align:center">Mouvements P\xE9riode</th>
              <th colspan="2" style="text-align:center">Soldes Finaux</th>
            </tr>
            <tr class="rpt-thead-sub">
              <th class="text-right">D\xE9bit</th>
              <th class="text-right">Cr\xE9dit</th>
              <th class="text-right">D\xE9biteur</th>
              <th class="text-right">Cr\xE9diteur</th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track line.accountCode) {
              <tr>
                <td><strong class="mono">{{ line.accountCode }}</strong></td>
                <td>{{ line.accountName }}</td>
                <td class="text-right mono">{{ line.debit > 0 ? (line.debit | number:'1.2-2') : '' }}</td>
                <td class="text-right mono">{{ line.credit > 0 ? (line.credit | number:'1.2-2') : '' }}</td>
                <td class="text-right mono">{{ line.finalDebit > 0 ? (line.finalDebit | number:'1.2-2') : '' }}</td>
                <td class="text-right mono">{{ line.finalCredit > 0 ? (line.finalCredit | number:'1.2-2') : '' }}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="rpt-tfoot-bilan">
              <td colspan="2">Totaux comptes de bilan (cl. 1\u20135)</td>
              <td class="text-right mono">{{ (totals?.bilanDebit > 0 ? (totals.bilanDebit | number:'1.2-2') : '\u2014') }}</td>
              <td class="text-right mono">{{ (totals?.bilanCredit > 0 ? (totals.bilanCredit | number:'1.2-2') : '\u2014') }}</td>
              <td class="text-right mono">{{ (totals?.bilanFinalDebit > 0 ? (totals.bilanFinalDebit | number:'1.2-2') : '\u2014') }}</td>
              <td class="text-right mono">{{ (totals?.bilanFinalCredit > 0 ? (totals.bilanFinalCredit | number:'1.2-2') : '\u2014') }}</td>
            </tr>
            <tr class="rpt-tfoot-gestion">
              <td colspan="2">Totaux comptes de gestion (cl. 6\u20138)</td>
              <td class="text-right mono">{{ (totals?.gestionDebit > 0 ? (totals.gestionDebit | number:'1.2-2') : '\u2014') }}</td>
              <td class="text-right mono">{{ (totals?.gestionCredit > 0 ? (totals.gestionCredit | number:'1.2-2') : '\u2014') }}</td>
              <td class="text-right mono">{{ (totals?.gestionFinalDebit > 0 ? (totals.gestionFinalDebit | number:'1.2-2') : '\u2014') }}</td>
              <td class="text-right mono">{{ (totals?.gestionFinalCredit > 0 ? (totals.gestionFinalCredit | number:'1.2-2') : '\u2014') }}</td>
            </tr>
            <tr class="rpt-tfoot-total">
              <td colspan="2">TOTAUX DE LA BALANCE</td>
              <td class="text-right mono">{{ totalDebit | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ totalCredit | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ totalFinalDebit | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ totalFinalCredit | number:'1.2-2' }}</td>
            </tr>
          </tfoot>
        </table>

        @if (totals) {
          <div [class]="isEquilibre ? 'rpt-equilibre ok' : 'rpt-equilibre warn'">
            @if (isEquilibre) {
              <span class="material-icons">check_circle</span>
              <strong>Balance \xE9quilibr\xE9e</strong> \u2014 Les mouvements nets de bilan et de gestion s'\xE9quilibrent.
            } @else {
              <span class="material-icons">warning</span>
              <strong>D\xE9s\xE9quilibre d\xE9tect\xE9</strong> \u2014 Les totaux nets de bilan et gestion ne s'\xE9quilibrent pas.
            }
          </div>
        }
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/accounting/components/reports/general-balance/general-balance.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.form-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.j-chips {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n  max-width: 400px;\n}\n.j-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 20px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.j-chip:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.j-chip.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.rpt-table-wrap {\n  overflow-x: auto;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n.rpt-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.rpt-table th,\n.rpt-table td {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.rpt-table thead .rpt-thead-group th {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-align: center;\n  white-space: nowrap;\n}\n.rpt-table thead .rpt-thead-sub th {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  font-size: 10px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.rpt-table thead th.text-right {\n  text-align: right;\n}\n.rpt-table tbody tr:nth-child(even) {\n  background: var(--bg-elevated);\n}\n.rpt-table tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.rpt-table tbody td {\n  color: var(--text-primary);\n}\n.rpt-table tbody td.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table tfoot .rpt-tfoot-bilan td {\n  background: var(--info-bg);\n  font-weight: 600;\n  border-top: 2px solid var(--primary);\n  font-size: 11px;\n}\n.rpt-table tfoot .rpt-tfoot-bilan td.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table tfoot .rpt-tfoot-bilan td:first-child {\n  text-align: left;\n  color: #1565c0;\n}\n.rpt-table tfoot .rpt-tfoot-gestion td {\n  background: var(--danger-bg);\n  font-weight: 600;\n  border-top: 1px solid #dc2626;\n  font-size: 11px;\n}\n.rpt-table tfoot .rpt-tfoot-gestion td.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table tfoot .rpt-tfoot-gestion td:first-child {\n  text-align: left;\n  color: var(--danger);\n}\n.rpt-table tfoot .rpt-tfoot-total td {\n  background: var(--bg-elevated);\n  font-weight: 700;\n  border-top: 2px solid #2563eb;\n  font-size: 12px;\n}\n.rpt-table tfoot .rpt-tfoot-total td.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rpt-table tfoot .rpt-tfoot-total td:first-child {\n  text-align: left;\n  color: var(--primary);\n}\n.rpt-equilibre {\n  margin-top: 10px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.rpt-equilibre .material-icons {\n  font-size: 20px;\n}\n.rpt-equilibre.ok {\n  background: #d4edda;\n  border: 1px solid var(--success-bg);\n  color: var(--success);\n}\n.rpt-equilibre.ok .material-icons {\n  color: #28a745;\n}\n.rpt-equilibre.warn {\n  background: var(--warning-bg);\n  border: 1px solid var(--warning-bg);\n  color: var(--warning);\n}\n.rpt-equilibre.warn .material-icons {\n  color: #ffc107;\n}\n.rpt-print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.rpt-print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.rpt-print-header .rpt-period {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.rpt-print-header .rpt-printed {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n@media print {\n  .page-container {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print {\n    display: none !important;\n  }\n  .rpt-print-header {\n    display: block !important;\n  }\n  .rpt-table {\n    font-size: 9px;\n  }\n  .rpt-table th,\n  .rpt-table td {\n    padding: 3px 5px;\n  }\n  .rpt-table thead .rpt-thead-group th {\n    background: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table thead .rpt-thead-sub th {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table tfoot .rpt-tfoot-bilan td {\n    background: var(--info-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table tfoot .rpt-tfoot-gestion td {\n    background: var(--danger-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-table tfoot .rpt-tfoot-total td {\n    background: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-equilibre.ok {\n    background: #d4edda !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .rpt-equilibre.warn {\n    background: var(--warning-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=general-balance.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AccountingService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneralBalance4Component, { className: "GeneralBalance4Component", filePath: "app/modules/accounting/components/reports/general-balance/general-balance4.component.ts", lineNumber: 19 });
})();
export {
  GeneralBalance4Component
};
//# sourceMappingURL=chunk-QBVQ5A36.js.map
