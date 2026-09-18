import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  ExcelExportService
} from "./chunk-RDE6QNFF.js";
import "./chunk-V5EAPQSQ.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/analyse/stock-report.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function StockReportComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function StockReportComponent_Conditional_51_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.search = "";
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function StockReportComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 31);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du stock...");
    \u0275\u0275elementEnd();
  }
}
function StockReportComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "Aucun stock disponible");
    \u0275\u0275elementEnd();
  }
}
function StockReportComponent_Conditional_77_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Article / Emplacement ");
  }
}
function StockReportComponent_Conditional_77_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cat\xE9gorie / Article ");
  }
}
function StockReportComponent_Conditional_77_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Entrep\xF4t / Article ");
  }
}
function StockReportComponent_Conditional_77_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " inventory_2 ");
  }
}
function StockReportComponent_Conditional_77_For_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " label ");
  }
}
function StockReportComponent_Conditional_77_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " warehouse ");
  }
}
function StockReportComponent_Conditional_77_For_18_Conditional_16_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r5.productCode);
  }
}
function StockReportComponent_Conditional_77_For_18_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 46)(1, "td", 47)(2, "span", 48);
    \u0275\u0275text(3, "subdirectory_arrow_right");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, StockReportComponent_Conditional_77_For_18_Conditional_16_For_1_Conditional_4_Template, 2, 1, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 52);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 52);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.groupBy !== "product" && q_r5.productCode ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.rowLabel(q_r5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.uomName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.standardPrice ? ctx_r1.fmt(q_r5.standardPrice) : "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("low-stock", q_r5.quantity <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(q_r5.quantity, 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(q_r5.totalValue || 0));
  }
}
function StockReportComponent_Conditional_77_For_18_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StockReportComponent_Conditional_77_For_18_Conditional_16_For_1_Template, 14, 8, "tr", 46, _forTrack1);
  }
  if (rf & 2) {
    const grp_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(grp_r4.rows);
  }
}
function StockReportComponent_Conditional_77_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function StockReportComponent_Conditional_77_For_18_Template_tr_click_0_listener() {
      const grp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(grp_r4.key));
    });
    \u0275\u0275elementStart(1, "td", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275conditionalCreate(5, StockReportComponent_Conditional_77_For_18_Conditional_5_Template, 1, 0);
    \u0275\u0275conditionalCreate(6, StockReportComponent_Conditional_77_For_18_Conditional_6_Template, 1, 0);
    \u0275\u0275conditionalCreate(7, StockReportComponent_Conditional_77_For_18_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 45);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 45);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, StockReportComponent_Conditional_77_For_18_Conditional_16_Template, 2, 0);
  }
  if (rf & 2) {
    const grp_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExpanded(grp_r4.key) ? "expand_more" : "chevron_right", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.groupBy === "product" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.groupBy === "category" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.groupBy === "warehouse" ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grp_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", grp_r4.rows.length, " article(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(grp_r4.subtotalQty, 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(grp_r4.subtotalValue));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isExpanded(grp_r4.key) ? 16 : -1);
  }
}
function StockReportComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "table", 32)(2, "thead")(3, "tr")(4, "th", 33);
    \u0275\u0275conditionalCreate(5, StockReportComponent_Conditional_77_Conditional_5_Template, 1, 0);
    \u0275\u0275conditionalCreate(6, StockReportComponent_Conditional_77_Conditional_6_Template, 1, 0);
    \u0275\u0275conditionalCreate(7, StockReportComponent_Conditional_77_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 34);
    \u0275\u0275text(9, "UDM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 35);
    \u0275\u0275text(11, "P.U. (CMUP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 35);
    \u0275\u0275text(13, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 35);
    \u0275\u0275text(15, "Valeur (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, StockReportComponent_Conditional_77_For_18_Template, 17, 9, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "tfoot")(20, "tr", 36)(21, "td", 37)(22, "strong");
    \u0275\u0275text(23, "TOTAL G\xC9N\xC9RAL DU STOCK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 38);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 38);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.groupBy === "product" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.groupBy === "category" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.groupBy === "warehouse" ? 7 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.groups);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.totalQtyLines, 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.totalValue));
  }
}
var StockReportComponent = class _StockReportComponent {
  constructor(stockService, authService, excelExport) {
    this.stockService = stockService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.quants = [];
    this.filtered = [];
    this.loading = false;
    this.search = "";
    this.groupBy = "product";
    this.expandedGroups = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.stockService.getStockReport(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.quants = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const q = this.search.toLowerCase().trim();
    this.filtered = q ? this.quants.filter((s) => (s.productName || "").toLowerCase().includes(q) || (s.productCode || "").toLowerCase().includes(q) || (s.categoryName || "").toLowerCase().includes(q) || (s.locationName || "").toLowerCase().includes(q)) : [...this.quants];
    this.expandedGroups.clear();
  }
  toggleGroup(key) {
    if (this.expandedGroups.has(key))
      this.expandedGroups.delete(key);
    else
      this.expandedGroups.add(key);
  }
  isExpanded(key) {
    return this.expandedGroups.has(key);
  }
  expandAll() {
    this.groups.forEach((g) => this.expandedGroups.add(g.key));
  }
  collapseAll() {
    this.expandedGroups.clear();
  }
  get totalValue() {
    return this.filtered.reduce((s, q) => s + (q.totalValue || 0), 0);
  }
  get totalQtyLines() {
    return this.filtered.reduce((s, q) => s + (q.quantity || 0), 0);
  }
  // ── Grouped data ───────────────────────────────────────────────────────────
  get groups() {
    const map = /* @__PURE__ */ new Map();
    for (const q of this.filtered) {
      let key;
      let label;
      switch (this.groupBy) {
        case "category":
          key = String(q.categoryId ?? "0");
          label = q.categoryName || "(Sans cat\xE9gorie)";
          break;
        case "warehouse":
          key = (q.locationCompleteName || q.locationName || "").split("/")[0].trim() || "Entrep\xF4t";
          label = key;
          break;
        // location groupBy removed
        default:
          key = String(q.productId);
          label = (q.productCode ? `[${q.productCode}] ` : "") + (q.productName || "?");
      }
      if (!map.has(key)) {
        map.set(key, { key, label, rows: [], subtotalQty: 0, subtotalValue: 0 });
      }
      const g = map.get(key);
      g.rows.push(q);
      g.subtotalQty += q.quantity || 0;
      g.subtotalValue += q.totalValue || 0;
    }
    return Array.from(map.values()).sort((a, b) => b.subtotalValue - a.subtotalValue);
  }
  // Row columns inside a group depend on groupBy
  rowLabel(q) {
    switch (this.groupBy) {
      case "category":
      case "warehouse":
        return (q.productCode ? `[${q.productCode}] ` : "") + (q.productName || "?");
      case "product":
        return q.locationCompleteName || q.locationName || "?";
      default:
        return (q.productCode ? `[${q.productCode}] ` : "") + (q.productName || "?");
    }
  }
  fmt(v, dec = 0) {
    return new Intl.NumberFormat("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v || 0);
  }
  exportPdf() {
    const cid = this.authService.getCompanyId();
    this.stockService.downloadStockReportPdf(cid).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `rapport_stock_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  }
  exportExcel() {
    const session = this.authService.getSession();
    const whMap = /* @__PURE__ */ new Map();
    for (const q of this.filtered) {
      const wh = (q.locationCompleteName || q.locationName || "").split("/")[0].trim() || "Entrep\xF4t";
      if (!whMap.has(wh))
        whMap.set(wh, { warehouseName: wh, rows: [], subtotalQty: 0, subtotalValue: 0 });
      const entry = whMap.get(wh);
      const existing = entry.rows.find((r) => r.productId === q.productId);
      if (existing) {
        existing.qty += q.quantity || 0;
        existing.value += q.totalValue || 0;
      } else
        entry.rows.push({ productId: q.productId, code: q.productCode || "", name: q.productName || "", uom: q.uomName || "", price: q.standardPrice || 0, qty: q.quantity || 0, value: q.totalValue || 0 });
      entry.subtotalQty += q.quantity || 0;
      entry.subtotalValue += q.totalValue || 0;
    }
    this.excelExport.exportStockReport(Array.from(whMap.values()));
  }
  static {
    this.\u0275fac = function StockReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockReportComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockReportComponent, selectors: [["app-stock-report"]], decls: 78, vars: 13, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions", "no-print"], [1, "btn-secondary", 3, "click"], [1, "material-icons"], [1, "btn-secondary", "btn-pdf", 3, "click"], [1, "btn-secondary", "btn-excel", 3, "click"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-icon", "material-icons"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-card", "accent"], [1, "kpi-currency"], [1, "toolbar", "no-print"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher un article, cat\xE9gorie, emplacement...", 3, "ngModelChange", "ngModel"], [1, "material-icons", "clear-icon"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "click"], [1, "expand-btns"], [1, "btn-link", 3, "click"], [1, "sep"], [1, "loading-state"], [1, "empty-card"], [1, "report-card"], [1, "material-icons", "clear-icon", 3, "click"], [1, "material-icons", "spin"], [1, "report-table"], [1, "col-group"], [1, "col-center", "no-print"], [1, "col-num"], [1, "total-row"], ["colspan", "2"], [1, "col-num", "mono", "fw-bold"], [1, "group-header-row", 3, "click"], ["colspan", "2", 1, "group-header-cell"], [1, "expand-icon", "material-icons", "no-print"], [1, "group-icon", "material-icons"], [1, "group-label"], [1, "group-count", "no-print"], [1, "col-num", "group-num"], [1, "detail-row"], [1, "detail-label-cell"], [1, "indent-icon", "material-icons"], [1, "code-badge"], [1, "col-center", "text-muted", "small", "no-print"], [1, "col-num", "mono", "text-muted"], [1, "col-num", "mono"]], template: function StockReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Rapport de Stock Valoris\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "\xC9tat des stocks par article, cat\xE9gorie ou entrep\xF4t");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_8_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "refresh");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_11_listener() {
          return ctx.exportPdf();
        });
        \u0275\u0275elementStart(12, "span", 6);
        \u0275\u0275text(13, "picture_as_pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " PDF ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_15_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(16, "span", 6);
        \u0275\u0275text(17, "table_view");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "span", 11);
        \u0275\u0275text(22, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "div", 12);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 10)(29, "span", 11);
        \u0275\u0275text(30, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div")(32, "div", 12);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 13);
        \u0275\u0275text(35, "Quantit\xE9 totale");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 14)(37, "span", 11);
        \u0275\u0275text(38, "price_check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div")(40, "div", 12);
        \u0275\u0275text(41);
        \u0275\u0275elementStart(42, "span", 15);
        \u0275\u0275text(43, "FCFA");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 13);
        \u0275\u0275text(45, "Valeur totale du stock");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div", 16)(47, "div", 17)(48, "span", 6);
        \u0275\u0275text(49, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function StockReportComponent_Template_input_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockReportComponent_Template_input_ngModelChange_50_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(51, StockReportComponent_Conditional_51_Template, 2, 0, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 20)(53, "span", 21);
        \u0275\u0275text(54, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 22)(56, "button", 23);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_56_listener() {
          ctx.groupBy = "product";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(57, "span", 6);
        \u0275\u0275text(58, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " Article ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 23);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_60_listener() {
          ctx.groupBy = "category";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(61, "span", 6);
        \u0275\u0275text(62, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " Cat\xE9gorie ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 23);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_64_listener() {
          ctx.groupBy = "warehouse";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(65, "span", 6);
        \u0275\u0275text(66, "warehouse");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " Entrep\xF4t ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 24)(69, "button", 25);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_69_listener() {
          return ctx.expandAll();
        });
        \u0275\u0275text(70, "Tout d\xE9velopper");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "span", 26);
        \u0275\u0275text(72, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "button", 25);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_73_listener() {
          return ctx.collapseAll();
        });
        \u0275\u0275text(74, "Tout r\xE9duire");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(75, StockReportComponent_Conditional_75_Template, 4, 0, "div", 27)(76, StockReportComponent_Conditional_76_Template, 2, 0, "div", 28)(77, StockReportComponent_Conditional_77_Template, 28, 5, "div", 29);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.groups.length);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.groupBy === "product" ? "Articles" : ctx.groupBy === "category" ? "Cat\xE9gories" : "Entrep\xF4ts");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.fmt(ctx.totalQtyLines, 0));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.fmt(ctx.totalValue), " ");
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.search ? 51 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.groupBy === "product");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.groupBy === "category");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.groupBy === "warehouse");
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.loading ? 75 : ctx.groups.length === 0 ? 76 : 77);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--bg-hover);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid var(--border-light);\n}\n.kpi-card.accent[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--primary);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%]   .kpi-currency[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.report-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--primary);\n}\n.report-card-header.warehouse[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.report-card-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.col-code[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.col-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n  width: 60px;\n}\n.col-num[_ngcontent-%COMP%] {\n  text-align: right !important;\n  width: 110px;\n}\n.col-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  text-align: center !important;\n}\n.product-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.product-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n}\n.product-name-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.location-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n  border-bottom: 1px solid var(--border-light);\n}\n.loc-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.loc-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.subtotal-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n  border-top: 1px solid var(--border);\n  font-weight: 600;\n}\n.groupby-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.groupby-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.groupby-btns[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n  border-right: 1px solid var(--border);\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.groupby-btns[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--bg-hover);\n}\n.expand-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  font-size: 12px;\n}\n.expand-btns[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: var(--border);\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 12px;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.clear-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 16px;\n}\n.clear-icon[_ngcontent-%COMP%]:hover {\n  color: var(--text-secondary);\n}\n.col-group[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n.group-header-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: var(--bg-elevated) !important;\n}\n.group-header-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n}\n.group-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.group-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 12px !important;\n}\n.group-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.group-count[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.group-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--primary);\n}\n.group-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: var(--bg-elevated) !important;\n}\n.detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.detail-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover) !important;\n}\n.detail-label-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-left: 28px !important;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.indent-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.grand-total-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-elevated);\n  border-radius: 8px;\n  padding: 12px 20px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.grand-total-bar[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 16px;\n}\n.empty-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-top: 2px solid var(--border);\n  background: var(--bg-hover);\n  font-weight: 600;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.positive[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.negative[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.low-stock[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--bg-hover);\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.ajustement[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-badge.transfert[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n@media print {\n  .toolbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%], \n   .no-print[_ngcontent-%COMP%], \n   .expand-icon[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .card[_ngcontent-%COMP%], \n   .report-card[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=stock-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockReportComponent, [{
    type: Component,
    args: [{ selector: "app-stock-report", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2500\u2500 En-t\xEAte \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div>
      <h1 class="page-title">Rapport de Stock Valoris\xE9</h1>
      <p class="page-subtitle">\xC9tat des stocks par article, cat\xE9gorie ou entrep\xF4t</p>
    </div>
    <div class="header-actions no-print">
      <button class="btn-secondary" (click)="load()">
        <span class="material-icons">refresh</span>
      </button>
      <button class="btn-secondary btn-pdf" (click)="exportPdf()">
        <span class="material-icons">picture_as_pdf</span> PDF
      </button>
      <button class="btn-secondary btn-excel" (click)="exportExcel()">
        <span class="material-icons">table_view</span> Excel
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 KPIs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="kpi-row">
    <div class="kpi-card">
      <span class="kpi-icon material-icons">category</span>
      <div>
        <div class="kpi-value">{{ groups.length }}</div>
        <div class="kpi-label">{{ groupBy === 'product' ? 'Articles' : groupBy === 'category' ? 'Cat\xE9gories' : 'Entrep\xF4ts' }}</div>
      </div>
    </div>
    <div class="kpi-card">
      <span class="kpi-icon material-icons">inventory_2</span>
      <div>
        <div class="kpi-value">{{ fmt(totalQtyLines, 0) }}</div>
        <div class="kpi-label">Quantit\xE9 totale</div>
      </div>
    </div>
    <div class="kpi-card accent">
      <span class="kpi-icon material-icons">price_check</span>
      <div>
        <div class="kpi-value">{{ fmt(totalValue) }} <span class="kpi-currency">FCFA</span></div>
        <div class="kpi-label">Valeur totale du stock</div>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="toolbar no-print">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()"
             placeholder="Rechercher un article, cat\xE9gorie, emplacement..." />
      @if (search) {
        <span class="material-icons clear-icon" (click)="search = ''; applyFilter()">close</span>
      }
    </div>

    <!-- Group By -->
    <div class="groupby-bar">
      <span class="groupby-label">Regrouper par :</span>
      <div class="groupby-btns">
        <button [class.active]="groupBy === 'product'"   (click)="groupBy = 'product';   applyFilter()">
          <span class="material-icons">category</span> Article
        </button>
        <button [class.active]="groupBy === 'category'"  (click)="groupBy = 'category';  applyFilter()">
          <span class="material-icons">label</span> Cat\xE9gorie
        </button>
        <button [class.active]="groupBy === 'warehouse'" (click)="groupBy = 'warehouse'; applyFilter()">
          <span class="material-icons">warehouse</span> Entrep\xF4t
        </button>
      </div>
      <div class="expand-btns">
        <button class="btn-link" (click)="expandAll()">Tout d\xE9velopper</button>
        <span class="sep">|</span>
        <button class="btn-link" (click)="collapseAll()">Tout r\xE9duire</button>
      </div>
    </div>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement du stock...</div>
  } @else if (groups.length === 0) {
    <div class="empty-card">Aucun stock disponible</div>
  } @else {

    <div class="report-card">
      <table class="report-table">
        <thead>
          <tr>
            <th class="col-group">
              @if (groupBy === 'product')   { Article / Emplacement }
              @if (groupBy === 'category')  { Cat\xE9gorie / Article }
              @if (groupBy === 'warehouse') { Entrep\xF4t / Article }
            </th>
            <th class="col-center no-print">UDM</th>
            <th class="col-num">P.U. (CMUP)</th>
            <th class="col-num">Quantit\xE9</th>
            <th class="col-num">Valeur (FCFA)</th>
          </tr>
        </thead>
        <tbody>
          @for (grp of groups; track grp.key) {

            <!-- Ligne de groupe -->
            <tr class="group-header-row" (click)="toggleGroup(grp.key)">
              <td colspan="2" class="group-header-cell">
                <span class="expand-icon material-icons no-print">
                  {{ isExpanded(grp.key) ? 'expand_more' : 'chevron_right' }}
                </span>
                <span class="group-icon material-icons">
                  @if (groupBy === 'product')   { inventory_2 }
                  @if (groupBy === 'category')  { label }
                  @if (groupBy === 'warehouse') { warehouse }
                </span>
                <span class="group-label">{{ grp.label }}</span>
                <span class="group-count no-print">{{ grp.rows.length }} article(s)</span>
              </td>
              <td class="col-num group-num">{{ fmt(grp.subtotalQty, 2) }}</td>
              <td class="col-num group-num">{{ fmt(grp.subtotalValue) }}</td>
            </tr>

            <!-- Lignes d\xE9tail (expand\xE9es) -->
            @if (isExpanded(grp.key)) {
              @for (q of grp.rows; track q.id) {
                <tr class="detail-row">
                  <td class="detail-label-cell">
                    <span class="indent-icon material-icons">subdirectory_arrow_right</span>
                    @if (groupBy !== 'product' && q.productCode) {
                      <span class="code-badge">{{ q.productCode }}</span>
                    }
                    {{ rowLabel(q) }}
                  </td>
                  <td class="col-center text-muted small no-print">{{ q.uomName }}</td>
                  <td class="col-num mono text-muted">{{ q.standardPrice ? fmt(q.standardPrice) : '\u2014' }}</td>
                  <td class="col-num mono" [class.low-stock]="q.quantity <= 0">{{ fmt(q.quantity, 2) }}</td>
                  <td class="col-num mono">{{ fmt(q.totalValue || 0) }}</td>
                </tr>
              }
            }

          }
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="2"><strong>TOTAL G\xC9N\xC9RAL DU STOCK</strong></td>
            <td class="col-num mono fw-bold">{{ fmt(totalQtyLines, 2) }}</td>
            <td class="col-num mono fw-bold">{{ fmt(totalValue) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

  }
</div>
`, styles: ['/* src/app/modules/stock/components/analyse/stock-report.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.view-toggle button .material-icons {\n  font-size: 15px;\n}\n.view-toggle button.active {\n  background: var(--primary);\n  color: white;\n}\n.view-toggle button:not(.active):hover {\n  background: var(--bg-hover);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid var(--border-light);\n}\n.kpi-card.accent {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.kpi-card .kpi-icon {\n  font-size: 32px;\n  color: var(--primary);\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card .kpi-value .kpi-currency {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.kpi-card .kpi-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select {\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.filter-select:focus {\n  border-color: var(--primary);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.report-card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card-header .material-icons {\n  font-size: 18px;\n  color: var(--primary);\n}\n.report-card-header.warehouse .material-icons {\n  color: var(--text-secondary);\n}\n.report-card-header .badge {\n  margin-left: auto;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.col-code {\n  width: 110px;\n}\n.col-center {\n  text-align: center !important;\n  width: 60px;\n}\n.col-num {\n  text-align: right !important;\n  width: 110px;\n}\n.col-icon {\n  width: 36px;\n  text-align: center !important;\n}\n.product-row {\n  cursor: pointer;\n}\n.product-row:hover td {\n  background: var(--primary-subtle) !important;\n}\n.product-name-cell {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.location-row td {\n  background: var(--bg-elevated) !important;\n  border-bottom: 1px solid var(--border-light);\n}\n.loc-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.loc-icon {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.expand-icon {\n  font-size: 18px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.subtotal-row td {\n  background: var(--bg-elevated) !important;\n  border-top: 1px solid var(--border);\n  font-weight: 600;\n}\n.groupby-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.groupby-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.groupby-btns {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.groupby-btns button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n  border-right: 1px solid var(--border);\n}\n.groupby-btns button .material-icons {\n  font-size: 15px;\n}\n.groupby-btns button:last-child {\n  border-right: none;\n}\n.groupby-btns button.active {\n  background: var(--primary);\n  color: white;\n}\n.groupby-btns button:not(.active):hover {\n  background: var(--bg-hover);\n}\n.expand-btns {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  font-size: 12px;\n}\n.expand-btns .sep {\n  color: var(--border);\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 12px;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: var(--primary);\n}\n.clear-icon {\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 16px;\n}\n.clear-icon:hover {\n  color: var(--text-secondary);\n}\n.col-group {\n  min-width: 260px;\n}\n.group-header-row {\n  cursor: pointer;\n  background: var(--bg-elevated) !important;\n}\n.group-header-row:hover td {\n  background: var(--primary-subtle) !important;\n}\n.group-header-row td {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.group-header-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 12px !important;\n}\n.group-label {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.group-count {\n  margin-left: 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.group-icon {\n  font-size: 17px;\n  color: var(--primary);\n}\n.group-num {\n  font-weight: 600;\n  background: var(--bg-elevated) !important;\n}\n.detail-row td {\n  background: var(--bg-surface);\n}\n.detail-row:hover td {\n  background: var(--bg-hover) !important;\n}\n.detail-label-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-left: 28px !important;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.indent-icon {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.grand-total-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-elevated);\n  border-radius: 8px;\n  padding: 12px 20px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.grand-total-bar .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 16px;\n}\n.empty-card {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\ntd {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\ntbody tr:hover td {\n  background: var(--bg-hover);\n}\ntfoot td {\n  padding: 9px 12px;\n  border-top: 2px solid var(--border);\n  background: var(--bg-hover);\n  font-weight: 600;\n}\n.total-row td {\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold {\n  font-weight: 600;\n}\n.positive {\n  color: var(--success);\n}\n.negative {\n  color: var(--danger);\n}\n.low-stock {\n  color: var(--danger);\n  font-weight: 600;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.code-badge {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip {\n  display: inline-block;\n  background: var(--bg-hover);\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.ajustement {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-badge.transfert {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n@media print {\n  .toolbar,\n  .header-actions,\n  .btn-secondary,\n  .btn-primary,\n  .no-print,\n  .expand-icon {\n    display: none !important;\n  }\n  .page-container {\n    padding: 0;\n  }\n  .card,\n  .report-card {\n    box-shadow: none;\n  }\n  .view-toggle {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=stock-report.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: ExcelExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockReportComponent, { className: "StockReportComponent", filePath: "app/modules/stock/components/analyse/stock-report.component.ts", lineNumber: 17 });
})();
export {
  StockReportComponent
};
//# sourceMappingURL=chunk-UQZGK3OR.js.map
