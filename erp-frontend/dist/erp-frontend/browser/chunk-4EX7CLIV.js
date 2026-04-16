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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/reports/balance-sheet/balance-sheet.component.ts
function BalanceSheetComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 14);
    \u0275\u0275listener("click", function BalanceSheetComponent_Conditional_6_Template_button_click_1_listener() {
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
    \u0275\u0275listener("click", function BalanceSheetComponent_Conditional_6_Template_button_click_5_listener() {
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
function BalanceSheetComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function BalanceSheetComponent_Conditional_19_Template(rf, ctx) {
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
function BalanceSheetComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function BalanceSheetComponent_Conditional_21_For_31_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, actif_r3.brut, "1.0-0"), " ");
  }
}
function BalanceSheetComponent_Conditional_21_For_31_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, actif_r3.amort, "1.0-0"), " ");
  }
}
function BalanceSheetComponent_Conditional_21_For_31_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", actif_r3.net !== 0 || actif_r3.isTotal ? \u0275\u0275pipeBind2(1, 1, actif_r3.net, "1.0-0") : "", " ");
  }
}
function BalanceSheetComponent_Conditional_21_For_31_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passif_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", passif_r4.net !== 0 || passif_r4.isTotal ? \u0275\u0275pipeBind2(1, 1, passif_r4.net, "1.0-0") : "", " ");
  }
}
function BalanceSheetComponent_Conditional_21_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "tr")(3, "td", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275conditionalCreate(8, BalanceSheetComponent_Conditional_21_For_31_Conditional_8_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275conditionalCreate(10, BalanceSheetComponent_Conditional_21_For_31_Conditional_10_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275conditionalCreate(12, BalanceSheetComponent_Conditional_21_For_31_Conditional_12_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 35);
    \u0275\u0275conditionalCreate(18, BalanceSheetComponent_Conditional_21_For_31_Conditional_18_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const actif_r6 = \u0275\u0275storeLet(ctx_r1.actifRows[i_r5]);
    \u0275\u0275advance();
    const passif_r7 = \u0275\u0275storeLet(ctx_r1.passifRows[i_r5]);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-row-header", actif_r6.isHeader || passif_r7.isHeader)("bilan-row-total", actif_r6.isTotal || passif_r7.isTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!actif_r6.isHeader && !actif_r6.isEmpty ? actif_r6.ref : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-section-label", actif_r6.isHeader)("bilan-total-label", actif_r6.isTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(actif_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!actif_r6.isHeader && !actif_r6.isEmpty && actif_r6.brut !== 0 ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!actif_r6.isHeader && !actif_r6.isEmpty && actif_r6.amort !== 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!actif_r6.isHeader && !actif_r6.isEmpty ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!passif_r7.isHeader && !passif_r7.isEmpty ? passif_r7.ref : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-section-label", passif_r7.isHeader)("bilan-total-label", passif_r7.isTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(passif_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!passif_r7.isHeader && !passif_r7.isEmpty ? 18 : -1);
  }
}
function BalanceSheetComponent_Conditional_21_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "\u2713 BILAN \xC9QUILIBR\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u2014 Total Actif = Total Passif = ", \u0275\u0275pipeBind2(5, 1, ctx_r1.totalActif, "1.0-0"), " FCFA ");
  }
}
function BalanceSheetComponent_Conditional_21_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "\u26A0 BILAN D\xC9S\xC9QUILIBR\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u2014 Diff\xE9rence = ", \u0275\u0275pipeBind2(5, 1, ctx_r1.totalActif - ctx_r1.totalPassif, "1.0-0"), " FCFA ");
  }
}
function BalanceSheetComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275text(5, "SYSCOHADA R\xC9VIS\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "table", 20)(11, "thead")(12, "tr", 21)(13, "th", 22);
    \u0275\u0275text(14, "REF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "ACTIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 24);
    \u0275\u0275text(18, "BRUT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 24);
    \u0275\u0275text(20, "AMORT.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 25);
    \u0275\u0275text(22, "NET N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 26);
    \u0275\u0275text(24, "REF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 27);
    \u0275\u0275text(26, "PASSIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 28);
    \u0275\u0275text(28, "NET N");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, BalanceSheetComponent_Conditional_21_For_31_Template, 19, 22, "tr", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "tfoot")(33, "tr", 30)(34, "td", 31);
    \u0275\u0275text(35, "BZ \u2014 TOTAL G\xC9N\xC9RAL ACTIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 32);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 33);
    \u0275\u0275text(40, "BZ \u2014 TOTAL G\xC9N\xC9RAL PASSIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td", 32);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div");
    \u0275\u0275conditionalCreate(45, BalanceSheetComponent_Conditional_21_Conditional_45_Template, 6, 4)(46, BalanceSheetComponent_Conditional_21_Conditional_46_Template, 6, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("BILAN AU ", \u0275\u0275pipeBind2(3, 7, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Imprim\xE9 le ", \u0275\u0275pipeBind2(8, 10, ctx_r1.today, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.rowIndices);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 13, ctx_r1.totalActif, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 16, ctx_r1.totalPassif, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.isEquilibre ? "bilan-equilibre ok" : "bilan-equilibre warn");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEquilibre ? 45 : 46);
  }
}
function n(v) {
  return v != null ? Number(v) : 0;
}
var BalanceSheetComponent = class _BalanceSheetComponent {
  constructor(reportService, authService, excelExport, pdfExport) {
    this.reportService = reportService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.pdfExport = pdfExport;
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.dateTo = "";
    this.today = /* @__PURE__ */ new Date();
    this.totalActif = 0;
    this.totalPassif = 0;
    this.isEquilibre = false;
    this.actifRows = [];
    this.passifRows = [];
    this.emptyRow = { ref: "", label: "", brut: 0, amort: 0, net: 0, netPrev: 0, isHeader: false, isTotal: false, isEmpty: true };
  }
  ngOnInit() {
    this.dateTo = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  generate() {
    if (!this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la date de cl\xF4ture";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.reportService.getBilan({
      dateFrom: new Date(new Date(this.dateTo).getFullYear(), 0, 1).toISOString().split("T")[0],
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: (res) => {
        this.buildRows(res);
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration";
      }
    });
  }
  buildRows(res) {
    const actif = res.actif || {};
    const passif = res.passif || {};
    const ai = actif.actifImmobilise || {};
    const ac = actif.actifCirculant || {};
    const ta = actif.tresorerieActif || {};
    const amort = n(ai.amortissements);
    const immoTotal = n(ai.total);
    this.actifRows = [
      // ACTIF IMMOBILISÉ
      this.header("AD", "ACTIF IMMOBILIS\xC9"),
      this.line("", "Immobilisations incorporelles", n(ai.immoIncorporelles), 0, n(ai.immoIncorporelles)),
      this.line("", "Immobilisations corporelles", n(ai.immoCorporelles), 0, n(ai.immoCorporelles)),
      this.line("", "Immobilisations financi\xE8res", n(ai.immoFinancieres), 0, n(ai.immoFinancieres)),
      this.line("", "Amortissements & provisions", amort, 0, -amort),
      this.total("AZ", "Total Actif Immobilis\xE9", immoTotal + amort, amort, immoTotal),
      // ACTIF CIRCULANT
      this.header("BC", "ACTIF CIRCULANT"),
      this.line("", "Stocks", n(ac.stocks), 0, n(ac.stocks)),
      this.line("", "Cr\xE9ances & emplois assimil\xE9s", n(ac.creances), 0, n(ac.creances)),
      this.total("BT", "Total Actif Circulant", n(ac.total), 0, n(ac.total)),
      // TRÉSORERIE ACTIF
      this.header("", "TR\xC9SORERIE ACTIF"),
      this.line("", "Banques & CCP", n(ta.banques), 0, n(ta.banques)),
      this.line("", "Caisse", n(ta.caisse), 0, n(ta.caisse)),
      this.total("BZ", "Total Tr\xE9sorerie Actif", n(ta.total), 0, n(ta.total))
    ];
    this.totalActif = n(actif.totalActif);
    const cp = passif.capitauxPropres || {};
    const df = passif.dettesFinancieres || {};
    const pc = passif.passifCirculant || {};
    const tp = passif.tresoreriePassif || {};
    this.passifRows = [
      // CAPITAUX PROPRES
      this.header("CP", "CAPITAUX PROPRES"),
      this.line("", "Capital social", 0, 0, n(cp.capitalSocial)),
      this.line("", "R\xE9serves", 0, 0, n(cp.reserves)),
      this.line("", "Report \xE0 nouveau", 0, 0, n(cp.reportNouveau)),
      this.line("", "R\xE9sultat de l'exercice", 0, 0, n(cp.resultatExercice)),
      this.line("", "Autres capitaux propres", 0, 0, n(cp.autresCapitaux)),
      this.total("CP", "Total Capitaux Propres", 0, 0, n(cp.total)),
      // DETTES FINANCIÈRES
      this.header("DD", "DETTES FINANCI\xC8RES"),
      this.line("", "Emprunts & dettes \xE0 LT", 0, 0, n(df.emprunts)),
      this.total("DF", "Total Dettes Financi\xE8res", 0, 0, n(df.total)),
      // PASSIF CIRCULANT
      this.header("DG", "PASSIF CIRCULANT"),
      this.line("", "Fournisseurs", 0, 0, n(pc.fournisseurs)),
      this.line("", "Personnel", 0, 0, n(pc.dettesPersonnel)),
      this.line("", "Dettes fiscales", 0, 0, n(pc.dettesFiscales)),
      this.total("DP", "Total Passif Circulant", 0, 0, n(pc.total)),
      // TRÉSORERIE PASSIF
      this.header("", "TR\xC9SORERIE PASSIF"),
      this.total("DT", "Total Tr\xE9sorerie Passif", 0, 0, n(tp.total))
    ];
    this.totalPassif = n(passif.totalPassif);
    this.isEquilibre = res.equilibre === true || Math.abs(this.totalActif - this.totalPassif) <= 0.01;
  }
  header(ref, label) {
    return { ref, label, brut: 0, amort: 0, net: 0, netPrev: 0, isHeader: true, isTotal: false, isEmpty: false };
  }
  line(ref, label, brut, amort, net) {
    return { ref, label, brut, amort, net, netPrev: 0, isHeader: false, isTotal: false, isEmpty: false };
  }
  total(ref, label, brut, amort, net) {
    return { ref, label, brut, amort, net, netPrev: 0, isHeader: false, isTotal: true, isEmpty: false };
  }
  get rowIndices() {
    const max = Math.max(this.actifRows.length, this.passifRows.length);
    return Array.from({ length: max }, (_, i) => i);
  }
  print() {
    window.print();
  }
  exportPdf() {
    this.pdfExport.exportBilan(this.actifRows, this.passifRows, this.totalActif, this.totalPassif, this.dateTo);
  }
  exportExcel() {
    this.excelExport.exportBilan(this.actifRows, this.passifRows, this.totalActif, this.totalPassif, this.dateTo);
  }
  static {
    this.\u0275fac = function BalanceSheetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BalanceSheetComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BalanceSheetComponent, selectors: [["app-balance-sheet"]], decls: 22, vars: 6, consts: [[1, "page-container", "report-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [2, "display", "flex", "gap", "8px"], [1, "report-header", "no-print"], [1, "filters-bar", 2, "margin-bottom", "0"], [1, "filter-group"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], [1, "alert-error", "mb-3", "no-print"], [1, "no-print", 2, "text-align", "center", "padding", "60px"], [1, "btn", "btn-outline", 3, "click"], [1, "spinner"], [1, "bilan-print-header"], [1, "bilan-subtitle"], [1, "bilan-printed"], [1, "bilan-table-wrap"], [1, "bilan-full-table"], [1, "bilan-thead-main"], [2, "width", "4%"], [2, "width", "21%"], [1, "text-right", 2, "width", "8%"], [1, "text-right", 2, "width", "9%"], [1, "passif-start", "text-center", 2, "width", "4%"], [2, "width", "28%"], [1, "text-right", 2, "width", "18%"], [3, "bilan-row-header", "bilan-row-total"], [1, "bilan-tfoot-total"], ["colspan", "4", 2, "text-align", "left"], [1, "text-right", "mono"], ["colspan", "2", 1, "passif-start", 2, "text-align", "left"], [1, "bilan-ref", "mono"], [1, "text-right", "mono", "fw-bold"], [1, "passif-start", "bilan-ref", "mono"]], template: function BalanceSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Bilan OHADA ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, BalanceSheetComponent_Conditional_6_Template, 9, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label");
        \u0275\u0275text(11, "Date de cl\xF4ture *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
        \u0275\u0275listener("click", function BalanceSheetComponent_Template_button_click_14_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(15, BalanceSheetComponent_Conditional_15_Template, 1, 0, "span", 11);
        \u0275\u0275elementStart(16, "span", 3);
        \u0275\u0275text(17, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " G\xE9n\xE9rer ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(19, BalanceSheetComponent_Conditional_19_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(20, BalanceSheetComponent_Conditional_20_Template, 2, 0, "div", 13)(21, BalanceSheetComponent_Conditional_21_Template, 47, 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.generated ? 6 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMsg ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 20 : ctx.generated ? 21 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.fs-xs[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.bilan-print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.bilan-print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.bilan-print-header[_ngcontent-%COMP%]   .bilan-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n}\n.bilan-print-header[_ngcontent-%COMP%]   .bilan-printed[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #777;\n  margin-top: 2px;\n}\n.bilan-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.bilan-full-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 11px;\n  border: 1px solid #333;\n}\n.bilan-full-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.bilan-full-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n.bilan-full-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .bilan-thead-main[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #714B67;\n  color: white;\n  font-weight: 700;\n  font-size: 10px;\n  text-align: center;\n  padding: 6px;\n}\n.bilan-full-table[_ngcontent-%COMP%] {\n}\n.bilan-full-table[_ngcontent-%COMP%]   .passif-start[_ngcontent-%COMP%] {\n  border-left: 3px solid #714B67 !important;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f5f0f7;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody.bilan-row-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bilan-row-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #e9ecef !important;\n  font-weight: 700;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody.bilan-row-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bilan-row-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #f0eff4 !important;\n  font-weight: 700;\n  border-top: 1px solid #714B67;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-ref[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  color: #714B67;\n  font-size: 10px;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-section-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #714B67;\n  background-color: #e9ecef;\n  font-style: normal;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-total-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #333;\n  font-style: italic;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .bilan-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #e8f5e8 !important;\n  font-weight: 700;\n  border-top: 2px solid #000;\n  border-bottom: 2px solid #000;\n  font-size: 11px;\n}\n.bilan-equilibre[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.bilan-equilibre[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.bilan-equilibre.ok[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  color: #155724;\n}\n.bilan-equilibre.ok[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.bilan-equilibre.warn[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border: 1px solid #ffeeba;\n  color: #856404;\n}\n.bilan-equilibre.warn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .bilan-print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .bilan-full-table[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .bilan-full-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 2px 4px;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .bilan-thead-main[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #714B67 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   .passif-start[_ngcontent-%COMP%] {\n    border-left: 3px solid #714B67 !important;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bilan-row-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #e9ecef !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bilan-row-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #f0eff4 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .bilan-tfoot-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #e8f5e8 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.ok[_ngcontent-%COMP%] {\n    background-color: #d4edda !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.warn[_ngcontent-%COMP%] {\n    background-color: #fff3cd !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=balance-sheet.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BalanceSheetComponent, [{
    type: Component,
    args: [{ selector: "app-balance-sheet", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container report-container">

  <div class="page-header no-print">
    <h1 class="page-title">
      <span class="material-icons">account_balance</span>
      Bilan OHADA
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

  <div class="report-header no-print">
    <div class="filters-bar" style="margin-bottom:0">
      <div class="filter-group">
        <label>Date de cl\xF4ture *</label>
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

    <div class="bilan-print-header">
      <h2>BILAN AU {{ dateTo | date:'dd/MM/yyyy' }}</h2>
      <div class="bilan-subtitle">SYSCOHADA R\xC9VIS\xC9</div>
      <div class="bilan-printed">Imprim\xE9 le {{ today | date:'dd/MM/yyyy HH:mm' }}</div>
    </div>

    <div class="bilan-table-wrap">
      <table class="bilan-full-table">
        <thead>
          <tr class="bilan-thead-main">
            <th style="width:4%">REF</th>
            <th style="width:21%">ACTIF</th>
            <th class="text-right" style="width:8%">BRUT</th>
            <th class="text-right" style="width:8%">AMORT.</th>
            <th class="text-right" style="width:9%">NET N</th>
            <th class="passif-start text-center" style="width:4%">REF</th>
            <th style="width:28%">PASSIF</th>
            <th class="text-right" style="width:18%">NET N</th>
          </tr>
        </thead>
        <tbody>
          @for (i of rowIndices; track i) {
@let actif = actifRows[i];
@let passif = passifRows[i];
            <tr [class.bilan-row-header]="actif.isHeader || passif.isHeader"
                [class.bilan-row-total]="actif.isTotal || passif.isTotal">
              <td class="bilan-ref mono">{{ (!actif.isHeader && !actif.isEmpty) ? actif.ref : '' }}</td>
              <td [class.bilan-section-label]="actif.isHeader" [class.bilan-total-label]="actif.isTotal">{{ actif.label }}</td>
              <td class="text-right mono">
                @if (!actif.isHeader && !actif.isEmpty && actif.brut !== 0) { {{ actif.brut | number:'1.0-0' }} }
              </td>
              <td class="text-right mono">
                @if (!actif.isHeader && !actif.isEmpty && actif.amort !== 0) { {{ actif.amort | number:'1.0-0' }} }
              </td>
              <td class="text-right mono fw-bold">
                @if (!actif.isHeader && !actif.isEmpty) {
                  {{ actif.net !== 0 || actif.isTotal ? (actif.net | number:'1.0-0') : '' }}
                }
              </td>
              <td class="passif-start bilan-ref mono">{{ (!passif.isHeader && !passif.isEmpty) ? passif.ref : '' }}</td>
              <td [class.bilan-section-label]="passif.isHeader" [class.bilan-total-label]="passif.isTotal">{{ passif.label }}</td>
              <td class="text-right mono fw-bold">
                @if (!passif.isHeader && !passif.isEmpty) {
                  {{ passif.net !== 0 || passif.isTotal ? (passif.net | number:'1.0-0') : '' }}
                }
              </td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr class="bilan-tfoot-total">
            <td colspan="4" style="text-align:left;">BZ \u2014 TOTAL G\xC9N\xC9RAL ACTIF</td>
            <td class="text-right mono">{{ totalActif | number:'1.0-0' }}</td>
            <td class="passif-start" colspan="2" style="text-align:left;">BZ \u2014 TOTAL G\xC9N\xC9RAL PASSIF</td>
            <td class="text-right mono">{{ totalPassif | number:'1.0-0' }}</td>
          </tr>
        </tfoot>
      </table>

      <div [class]="isEquilibre ? 'bilan-equilibre ok' : 'bilan-equilibre warn'">
        @if (isEquilibre) {
          <span class="material-icons">check_circle</span>
          <strong>\u2713 BILAN \xC9QUILIBR\xC9</strong> \u2014 Total Actif = Total Passif = {{ totalActif | number:'1.0-0' }} FCFA
        } @else {
          <span class="material-icons">warning</span>
          <strong>\u26A0 BILAN D\xC9S\xC9QUILIBR\xC9</strong> \u2014 Diff\xE9rence = {{ (totalActif - totalPassif) | number:'1.0-0' }} FCFA
        }
      </div>
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/accounting/components/reports/balance-sheet/balance-sheet.component.scss */\n.mono {\n  font-family: "Courier New", monospace;\n}\n.fw-bold {\n  font-weight: 700;\n}\n.text-muted {\n  color: #6c757d;\n}\n.fs-xs {\n  font-size: 10px;\n}\n.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center {\n  text-align: center;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.bilan-print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.bilan-print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.bilan-print-header .bilan-subtitle {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n}\n.bilan-print-header .bilan-printed {\n  font-size: 10px;\n  color: #777;\n  margin-top: 2px;\n}\n.bilan-table-wrap {\n  overflow-x: auto;\n}\n.bilan-full-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 11px;\n  border: 1px solid #333;\n}\n.bilan-full-table th,\n.bilan-full-table td {\n  padding: 4px 6px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n.bilan-full-table thead .bilan-thead-main th {\n  background-color: #714B67;\n  color: white;\n  font-weight: 700;\n  font-size: 10px;\n  text-align: center;\n  padding: 6px;\n}\n.bilan-full-table {\n}\n.bilan-full-table .passif-start {\n  border-left: 3px solid #714B67 !important;\n}\n.bilan-full-table tbody tr:nth-child(even) {\n  background-color: #fafafa;\n}\n.bilan-full-table tbody tr:hover {\n  background-color: #f5f0f7;\n}\n.bilan-full-table tbody.bilan-row-header td,\n.bilan-full-table tbody tr.bilan-row-header td {\n  background-color: #e9ecef !important;\n  font-weight: 700;\n}\n.bilan-full-table tbody.bilan-row-total td,\n.bilan-full-table tbody tr.bilan-row-total td {\n  background-color: #f0eff4 !important;\n  font-weight: 700;\n  border-top: 1px solid #714B67;\n}\n.bilan-full-table tbody .bilan-ref {\n  text-align: center;\n  font-weight: 700;\n  color: #714B67;\n  font-size: 10px;\n}\n.bilan-full-table tbody .bilan-section-label {\n  font-weight: 700;\n  color: #714B67;\n  background-color: #e9ecef;\n  font-style: normal;\n}\n.bilan-full-table tbody .bilan-total-label {\n  font-weight: 700;\n  color: #333;\n  font-style: italic;\n}\n.bilan-full-table tfoot .bilan-tfoot-total td {\n  background-color: #e8f5e8 !important;\n  font-weight: 700;\n  border-top: 2px solid #000;\n  border-bottom: 2px solid #000;\n  font-size: 11px;\n}\n.bilan-equilibre {\n  margin-top: 10px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.bilan-equilibre .material-icons {\n  font-size: 20px;\n}\n.bilan-equilibre.ok {\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  color: #155724;\n}\n.bilan-equilibre.ok .material-icons {\n  color: #28a745;\n}\n.bilan-equilibre.warn {\n  background-color: #fff3cd;\n  border: 1px solid #ffeeba;\n  color: #856404;\n}\n.bilan-equilibre.warn .material-icons {\n  color: #ffc107;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .bilan-print-header {\n    display: block !important;\n  }\n  .bilan-full-table {\n    font-size: 8px;\n  }\n  .bilan-full-table th,\n  .bilan-full-table td {\n    padding: 2px 4px;\n  }\n  .bilan-full-table thead .bilan-thead-main th {\n    background-color: #714B67 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table .passif-start {\n    border-left: 3px solid #714B67 !important;\n  }\n  .bilan-full-table tbody tr.bilan-row-header td {\n    background-color: #e9ecef !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table tbody tr.bilan-row-total td {\n    background-color: #f0eff4 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table tfoot .bilan-tfoot-total td {\n    background-color: #e8f5e8 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.ok {\n    background-color: #d4edda !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.warn {\n    background-color: #fff3cd !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=balance-sheet.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BalanceSheetComponent, { className: "BalanceSheetComponent", filePath: "src/app/modules/accounting/components/reports/balance-sheet/balance-sheet.component.ts", lineNumber: 32 });
})();
export {
  BalanceSheetComponent
};
//# sourceMappingURL=chunk-4EX7CLIV.js.map
