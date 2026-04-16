import {
  StockService
} from "./chunk-YEOTRJFB.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/analyse/stock-report.component.ts
var _forTrack0 = ($index, $item) => $item.productId;
var _forTrack1 = ($index, $item) => $item.locationId;
var _forTrack2 = ($index, $item) => $item.id;
function StockReportComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function StockReportComponent_Conditional_52_Conditional_0_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.productCode);
  }
}
function StockReportComponent_Conditional_52_Conditional_0_For_18_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", loc_r2.locationName, ": ", \u0275\u0275pipeBind2(2, 2, loc_r2.quantity, "1.0-0"));
  }
}
function StockReportComponent_Conditional_52_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 26);
    \u0275\u0275conditionalCreate(3, StockReportComponent_Conditional_52_Conditional_0_For_18_Conditional_3_Template, 2, 1, "span", 27);
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 30)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 31);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 25);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 29);
    \u0275\u0275repeaterCreate(19, StockReportComponent_Conditional_52_Conditional_0_For_18_For_20_Template, 3, 5, "span", 32, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r1.productCode ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.uomName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low-stock", row_r1.totalQty <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, row_r1.totalQty, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 11, row_r1.locations[0] == null ? null : row_r1.locations[0].standardPrice, "1.0-0"), " FCFA ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 14, row_r1.totalValue, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(row_r1.locations);
  }
}
function StockReportComponent_Conditional_52_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, "Aucun stock disponible");
    \u0275\u0275elementEnd()();
  }
}
function StockReportComponent_Conditional_52_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 21)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 22);
    \u0275\u0275text(9, "Quantit\xE9 totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 22);
    \u0275\u0275text(13, "Valeur totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Emplacements");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, StockReportComponent_Conditional_52_Conditional_0_For_18_Template, 21, 17, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(19, StockReportComponent_Conditional_52_Conditional_0_Conditional_19_Template, 3, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "tfoot")(21, "tr", 23)(22, "td", 24)(23, "strong");
    \u0275\u0275text(24, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 25);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.byProduct);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.byProduct.length === 0 ? 19 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 2, ctx_r2.totalValue, "1.0-0"), " FCFA");
  }
}
function StockReportComponent_Conditional_52_Conditional_1_For_20_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r4.productCode);
  }
}
function StockReportComponent_Conditional_52_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 26);
    \u0275\u0275conditionalCreate(5, StockReportComponent_Conditional_52_Conditional_1_For_20_Conditional_5_Template, 2, 1, "span", 27);
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 30);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 31);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 31);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.locationCompleteName || q_r4.locationName);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(q_r4.productCode ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, q_r4.quantity, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 13, q_r4.reservedQuantity, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low-stock", q_r4.availableQuantity <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 16, q_r4.availableQuantity, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 19, q_r4.standardPrice, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 22, q_r4.totalValue, "1.0-0"), " FCFA");
  }
}
function StockReportComponent_Conditional_52_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "Aucun stock disponible");
    \u0275\u0275elementEnd()();
  }
}
function StockReportComponent_Conditional_52_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 21)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Emplacement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 22);
    \u0275\u0275text(9, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, "R\xE9serv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 22);
    \u0275\u0275text(13, "Disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 22);
    \u0275\u0275text(15, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 22);
    \u0275\u0275text(17, "Valeur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, StockReportComponent_Conditional_52_Conditional_1_For_20_Template, 23, 25, "tr", null, _forTrack2);
    \u0275\u0275conditionalCreate(21, StockReportComponent_Conditional_52_Conditional_1_Conditional_21_Template, 3, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "tfoot")(23, "tr", 23)(24, "td", 34)(25, "strong");
    \u0275\u0275text(26, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 25);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.filtered);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filtered.length === 0 ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(29, 2, ctx_r2.totalValue, "1.0-0"), " FCFA");
  }
}
function StockReportComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StockReportComponent_Conditional_52_Conditional_0_Template, 29, 5, "div", 20)(1, StockReportComponent_Conditional_52_Conditional_1_Template, 30, 5, "div", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.viewMode === "product" ? 0 : 1);
  }
}
var StockReportComponent = class _StockReportComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.quants = [];
    this.filtered = [];
    this.loading = false;
    this.search = "";
    this.viewMode = "product";
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
    this.filtered = q ? this.quants.filter((s) => (s.productName || "").toLowerCase().includes(q) || (s.productCode || "").toLowerCase().includes(q) || (s.locationName || "").toLowerCase().includes(q)) : [...this.quants];
  }
  get totalValue() {
    return this.filtered.reduce((sum, q) => sum + (q.totalValue || 0), 0);
  }
  get totalQty() {
    return this.filtered.length;
  }
  // Group by product (sum qty across locations)
  get byProduct() {
    const map = /* @__PURE__ */ new Map();
    for (const q of this.filtered) {
      if (!map.has(q.productId)) {
        map.set(q.productId, {
          productId: q.productId,
          productCode: q.productCode || "",
          productName: q.productName || "",
          uomName: q.uomName || "",
          totalQty: 0,
          totalValue: 0,
          locations: []
        });
      }
      const entry = map.get(q.productId);
      entry.totalQty += q.quantity || 0;
      entry.totalValue += q.totalValue || 0;
      entry.locations.push(q);
    }
    return Array.from(map.values()).sort((a, b) => b.totalValue - a.totalValue);
  }
  printReport() {
    window.print();
  }
  static {
    this.\u0275fac = function StockReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockReportComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockReportComponent, selectors: [["app-stock-report"]], decls: 53, vars: 12, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "view-toggle"], [3, "click"], [1, "btn-secondary", 3, "click"], [1, "material-icons"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-icon", "material-icons"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-card", "accent"], [1, "toolbar"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher un article...", 3, "ngModelChange", "ngModel"], [1, "loading-state"], [1, "material-icons", "spin"], [1, "card"], [1, "report-table"], [1, "text-right"], [1, "total-row"], ["colspan", "4"], [1, "text-right", "mono", "fw-bold"], [1, "product-cell"], [1, "code-badge"], [1, "product-name"], [1, "text-muted", "small"], [1, "text-right", "mono"], [1, "text-right", "mono", "text-muted"], [1, "loc-chip"], ["colspan", "6", 1, "empty-state"], ["colspan", "6"], ["colspan", "7", 1, "empty-state"]], template: function StockReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Rapport de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "\xC9tat des stocks valoris\xE9s par article et emplacement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_9_listener() {
          return ctx.viewMode = "product";
        });
        \u0275\u0275text(10, "Par article");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_11_listener() {
          return ctx.viewMode = "location";
        });
        \u0275\u0275text(12, "Par emplacement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_13_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(14, "span", 8);
        \u0275\u0275text(15, "refresh");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 7);
        \u0275\u0275listener("click", function StockReportComponent_Template_button_click_16_listener() {
          return ctx.printReport();
        });
        \u0275\u0275elementStart(17, "span", 8);
        \u0275\u0275text(18, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Imprimer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 9)(21, "div", 10)(22, "span", 11);
        \u0275\u0275text(23, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div")(25, "div", 12);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 13);
        \u0275\u0275text(28, "Articles en stock");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 10)(30, "span", 11);
        \u0275\u0275text(31, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div")(33, "div", 12);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 13);
        \u0275\u0275text(36, "Lignes de stock");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 14)(38, "span", 11);
        \u0275\u0275text(39, "price_check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div")(41, "div", 12);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 13);
        \u0275\u0275text(45, "Valeur totale du stock");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div", 15)(47, "div", 16)(48, "span", 8);
        \u0275\u0275text(49, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function StockReportComponent_Template_input_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockReportComponent_Template_input_ngModelChange_50_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(51, StockReportComponent_Conditional_51_Template, 4, 0, "div", 18)(52, StockReportComponent_Conditional_52_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.viewMode === "product");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.viewMode === "location");
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate(ctx.byProduct.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.filtered.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(43, 9, ctx.totalValue, "1.0-0"), " FCFA");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 51 : 52);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: none;\n  background: white;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: #f8f9fa;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0f0f0;\n}\n.kpi-card.accent[_ngcontent-%COMP%] {\n  border-color: #2c7be5;\n  background: #f0f5ff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #2c7be5;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 13px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-top: 2px solid #dee2e6;\n  background: #f8f9fa;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.positive[_ngcontent-%COMP%] {\n  color: #0a5c45;\n}\n.negative[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.low-stock[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #212529;\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f0f0f0;\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.type-badge.livraison[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.type-badge.ajustement[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.type-badge.transfert[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n}\n@media print {\n  .toolbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .card[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=stock-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockReportComponent, [{
    type: Component,
    args: [{ selector: "app-stock-report", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">Rapport de stock</h1>
      <p class="page-subtitle">\xC9tat des stocks valoris\xE9s par article et emplacement</p>
    </div>
    <div class="header-actions">
      <div class="view-toggle">
        <button [class.active]="viewMode === 'product'" (click)="viewMode = 'product'">Par article</button>
        <button [class.active]="viewMode === 'location'" (click)="viewMode = 'location'">Par emplacement</button>
      </div>
      <button class="btn-secondary" (click)="load()"><span class="material-icons">refresh</span></button>
      <button class="btn-secondary" (click)="printReport()"><span class="material-icons">print</span> Imprimer</button>
    </div>
  </div>

  <!-- KPIs -->
  <div class="kpi-row">
    <div class="kpi-card">
      <span class="kpi-icon material-icons">category</span>
      <div>
        <div class="kpi-value">{{ byProduct.length }}</div>
        <div class="kpi-label">Articles en stock</div>
      </div>
    </div>
    <div class="kpi-card">
      <span class="kpi-icon material-icons">inventory_2</span>
      <div>
        <div class="kpi-value">{{ filtered.length }}</div>
        <div class="kpi-label">Lignes de stock</div>
      </div>
    </div>
    <div class="kpi-card accent">
      <span class="kpi-icon material-icons">price_check</span>
      <div>
        <div class="kpi-value">{{ totalValue | number:'1.0-0' }} FCFA</div>
        <div class="kpi-label">Valeur totale du stock</div>
      </div>
    </div>
  </div>

  <!-- Search -->
  <div class="toolbar">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()" placeholder="Rechercher un article..." />
    </div>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    @if (viewMode === 'product') {
      <div class="card">
        <table class="report-table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Cat\xE9gorie</th>
              <th class="text-right">Quantit\xE9 totale</th>
              <th class="text-right">CMUP</th>
              <th class="text-right">Valeur totale</th>
              <th>Emplacements</th>
            </tr>
          </thead>
          <tbody>
            @for (row of byProduct; track row.productId) {
              <tr>
                <td>
                  <div class="product-cell">
                    @if (row.productCode) { <span class="code-badge">{{ row.productCode }}</span> }
                    <span class="product-name">{{ row.productName }}</span>
                  </div>
                </td>
                <td class="text-muted small">{{ row.uomName }}</td>
                <td class="text-right mono">
                  <span [class.low-stock]="row.totalQty <= 0">{{ row.totalQty | number:'1.0-2' }}</span>
                </td>
                <td class="text-right mono text-muted">
                  {{ row.locations[0]?.standardPrice | number:'1.0-0' }} FCFA
                </td>
                <td class="text-right mono fw-bold">{{ row.totalValue | number:'1.0-0' }} FCFA</td>
                <td class="text-muted small">
                  @for (loc of row.locations; track loc.locationId) {
                    <span class="loc-chip">{{ loc.locationName }}: {{ loc.quantity | number:'1.0-0' }}</span>
                  }
                </td>
              </tr>
            }
            @if (byProduct.length === 0) {
              <tr><td colspan="6" class="empty-state">Aucun stock disponible</td></tr>
            }
          </tbody>
          <tfoot>
            <tr class="total-row">
              <td colspan="4"><strong>TOTAL G\xC9N\xC9RAL</strong></td>
              <td class="text-right mono fw-bold">{{ totalValue | number:'1.0-0' }} FCFA</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    } @else {
      <!-- Vue par emplacement -->
      <div class="card">
        <table class="report-table">
          <thead>
            <tr>
              <th>Emplacement</th>
              <th>Article</th>
              <th class="text-right">Quantit\xE9</th>
              <th class="text-right">R\xE9serv\xE9</th>
              <th class="text-right">Disponible</th>
              <th class="text-right">CMUP</th>
              <th class="text-right">Valeur</th>
            </tr>
          </thead>
          <tbody>
            @for (q of filtered; track q.id) {
              <tr>
                <td class="text-muted small">{{ q.locationCompleteName || q.locationName }}</td>
                <td>
                  <div class="product-cell">
                    @if (q.productCode) { <span class="code-badge">{{ q.productCode }}</span> }
                    <span class="product-name">{{ q.productName }}</span>
                  </div>
                </td>
                <td class="text-right mono">{{ q.quantity | number:'1.0-2' }}</td>
                <td class="text-right mono text-muted">{{ q.reservedQuantity | number:'1.0-2' }}</td>
                <td class="text-right mono" [class.low-stock]="q.availableQuantity <= 0">{{ q.availableQuantity | number:'1.0-2' }}</td>
                <td class="text-right mono text-muted">{{ q.standardPrice | number:'1.0-0' }}</td>
                <td class="text-right mono fw-bold">{{ q.totalValue | number:'1.0-0' }} FCFA</td>
              </tr>
            }
            @if (filtered.length === 0) {
              <tr><td colspan="7" class="empty-state">Aucun stock disponible</td></tr>
            }
          </tbody>
          <tfoot>
            <tr class="total-row">
              <td colspan="6"><strong>TOTAL G\xC9N\xC9RAL</strong></td>
              <td class="text-right mono fw-bold">{{ totalValue | number:'1.0-0' }} FCFA</td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/stock/components/analyse/stock-report.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle button {\n  padding: 6px 14px;\n  border: none;\n  background: white;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.view-toggle button.active {\n  background: #2c7be5;\n  color: white;\n}\n.view-toggle button:not(.active):hover {\n  background: #f8f9fa;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0f0f0;\n}\n.kpi-card.accent {\n  border-color: #2c7be5;\n  background: #f0f5ff;\n}\n.kpi-card .kpi-icon {\n  font-size: 32px;\n  color: #2c7be5;\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card .kpi-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  color: #adb5bd;\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.filter-select:focus {\n  border-color: #2c7be5;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 13px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\ntd {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\ntbody tr:hover td {\n  background: #fafafa;\n}\ntfoot td {\n  padding: 10px 12px;\n  border-top: 2px solid #dee2e6;\n  background: #f8f9fa;\n}\n.total-row td {\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: #6c757d;\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold {\n  font-weight: 600;\n}\n.positive {\n  color: #0a5c45;\n}\n.negative {\n  color: #721c24;\n}\n.low-stock {\n  color: #dc3545;\n  font-weight: 600;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name {\n  font-weight: 500;\n  color: #212529;\n}\n.code-badge {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip {\n  display: inline-block;\n  background: #f0f0f0;\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.type-badge.livraison {\n  background: #fde8e8;\n  color: #721c24;\n}\n.type-badge.ajustement {\n  background: #fff3cd;\n  color: #856404;\n}\n.type-badge.transfert {\n  background: #e8f0fe;\n  color: #1a68d1;\n}\n@media print {\n  .toolbar,\n  .header-actions,\n  .btn-secondary,\n  .btn-primary {\n    display: none !important;\n  }\n  .page-container {\n    padding: 0;\n  }\n  .card {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=stock-report.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockReportComponent, { className: "StockReportComponent", filePath: "src/app/modules/stock/components/analyse/stock-report.component.ts", lineNumber: 14 });
})();
export {
  StockReportComponent
};
//# sourceMappingURL=chunk-UOQBE4HP.js.map
