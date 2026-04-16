import {
  StockService
} from "./chunk-YEOTRJFB.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
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

// src/app/modules/stock/components/analyse/stock-valuation.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StockValuationComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r1.defaultCode ? "[" + p_r1.defaultCode + "] " : "", "", p_r1.name);
  }
}
function StockValuationComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 21);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function StockValuationComponent_Conditional_49_For_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r2.productCode);
  }
}
function StockValuationComponent_Conditional_49_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 28);
    \u0275\u0275conditionalCreate(6, StockValuationComponent_Conditional_49_For_20_Conditional_6_Template, 2, 1, "span", 29);
    \u0275\u0275elementStart(7, "span", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 31);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 32);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 27);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 18, l_r2.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(l_r2.productCode ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.locationName || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", l_r2.quantity > 0)("negative", l_r2.quantity < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", l_r2.quantity > 0 ? "+" : "", "", \u0275\u0275pipeBind2(13, 21, l_r2.quantity, "1.0-4"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 24, l_r2.unitCost, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("positive", l_r2.value > 0)("negative", l_r2.value < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", l_r2.value > 0 ? "+" : "", "", \u0275\u0275pipeBind2(19, 27, l_r2.value, "1.0-0"), " FCFA ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r2.description);
  }
}
function StockValuationComponent_Conditional_49_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, "Aucune couche de valorisation");
    \u0275\u0275elementEnd()();
  }
}
function StockValuationComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Emplacement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 23);
    \u0275\u0275text(11, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 23);
    \u0275\u0275text(13, "Co\xFBt unit.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 23);
    \u0275\u0275text(15, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, StockValuationComponent_Conditional_49_For_20_Template, 22, 30, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(21, StockValuationComponent_Conditional_49_Conditional_21_Template, 3, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "tfoot")(23, "tr", 24)(24, "td", 25)(25, "strong");
    \u0275\u0275text(26, "TOTAL NET");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 26);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.filtered);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filtered.length === 0 ? 21 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("positive", ctx_r2.totalValue > 0)("negative", ctx_r2.totalValue < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 6, ctx_r2.totalValue, "1.0-0"), " FCFA ");
  }
}
var StockValuationComponent = class _StockValuationComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.layers = [];
    this.filtered = [];
    this.products = [];
    this.loading = false;
    this.search = "";
    this.filterProductId = null;
  }
  ngOnInit() {
    const cid = this.authService.getCompanyId();
    this.stockService.getProducts(cid).subscribe({ next: (p) => this.products = p });
    this.load();
  }
  load() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.stockService.getValuation(cid, this.filterProductId ?? void 0).subscribe({
      next: (data) => {
        this.layers = data;
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
    this.filtered = q ? this.layers.filter((l) => (l.productName || "").toLowerCase().includes(q) || (l.productCode || "").toLowerCase().includes(q) || (l.description || "").toLowerCase().includes(q)) : [...this.layers];
  }
  get totalValue() {
    return this.filtered.reduce((s, l) => s + (l.value || 0), 0);
  }
  get totalPositive() {
    return this.filtered.filter((l) => l.value > 0).reduce((s, l) => s + l.value, 0);
  }
  get totalNegative() {
    return this.filtered.filter((l) => l.value < 0).reduce((s, l) => s + l.value, 0);
  }
  static {
    this.\u0275fac = function StockValuationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockValuationComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockValuationComponent, selectors: [["app-stock-valuation"]], decls: 50, vars: 16, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-secondary", 3, "click"], [1, "material-icons"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-icon", "material-icons", 2, "color", "#28a745"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "material-icons", 2, "color", "#dc3545"], [1, "kpi-card", "accent"], [1, "kpi-icon", "material-icons"], [1, "toolbar"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "val-table"], [1, "text-right"], [1, "total-row"], ["colspan", "5"], [1, "text-right", "mono", "fw-bold"], [1, "text-muted", "small"], [1, "product-cell"], [1, "code-badge"], [1, "product-name"], [1, "text-right", "mono"], [1, "text-right", "mono", "text-muted"], ["colspan", "7", 1, "empty-state"]], template: function StockValuationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Valorisation de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Couches de valorisation CMUP \u2014 historique des co\xFBts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function StockValuationComponent_Template_button_click_7_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "span", 8);
        \u0275\u0275text(13, "trending_up");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div")(15, "div", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275text(19, "Entr\xE9es valoris\xE9es");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 7)(21, "span", 11);
        \u0275\u0275text(22, "trending_down");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "div", 9);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 10);
        \u0275\u0275text(28, "Sorties valoris\xE9es");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 12)(30, "span", 13);
        \u0275\u0275text(31, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div")(33, "div", 9);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 10);
        \u0275\u0275text(37, "Solde net valoris\xE9");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 14)(39, "div", 15)(40, "span", 5);
        \u0275\u0275text(41, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function StockValuationComponent_Template_input_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockValuationComponent_Template_input_ngModelChange_42_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function StockValuationComponent_Template_select_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterProductId, $event) || (ctx.filterProductId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockValuationComponent_Template_select_ngModelChange_43_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(44, "option", 18);
        \u0275\u0275text(45, "Tous les articles");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(46, StockValuationComponent_For_47_Template, 2, 3, "option", 18, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(48, StockValuationComponent_Conditional_48_Template, 4, 0, "div", 19)(49, StockValuationComponent_Conditional_49_Template, 31, 9, "div", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 7, ctx.totalPositive, "1.0-0"), " FCFA");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 10, ctx.totalNegative, "1.0-0"), " FCFA");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(35, 13, ctx.totalValue, "1.0-0"), " FCFA");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.filterProductId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.products);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 48 : 49);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: none;\n  background: white;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: #f8f9fa;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0f0f0;\n}\n.kpi-card.accent[_ngcontent-%COMP%] {\n  border-color: #2c7be5;\n  background: #f0f5ff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #2c7be5;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 13px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-top: 2px solid #dee2e6;\n  background: #f8f9fa;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.positive[_ngcontent-%COMP%] {\n  color: #0a5c45;\n}\n.negative[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.low-stock[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #212529;\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f0f0f0;\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.type-badge.livraison[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.type-badge.ajustement[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.type-badge.transfert[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n}\n@media print {\n  .toolbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .card[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=stock-valuation.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockValuationComponent, [{
    type: Component,
    args: [{ selector: "app-stock-valuation", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">Valorisation de stock</h1>
      <p class="page-subtitle">Couches de valorisation CMUP \u2014 historique des co\xFBts</p>
    </div>
    <button class="btn-secondary" (click)="load()"><span class="material-icons">refresh</span></button>
  </div>

  <!-- KPIs -->
  <div class="kpi-row">
    <div class="kpi-card">
      <span class="kpi-icon material-icons" style="color:#28a745">trending_up</span>
      <div>
        <div class="kpi-value">{{ totalPositive | number:'1.0-0' }} FCFA</div>
        <div class="kpi-label">Entr\xE9es valoris\xE9es</div>
      </div>
    </div>
    <div class="kpi-card">
      <span class="kpi-icon material-icons" style="color:#dc3545">trending_down</span>
      <div>
        <div class="kpi-value">{{ totalNegative | number:'1.0-0' }} FCFA</div>
        <div class="kpi-label">Sorties valoris\xE9es</div>
      </div>
    </div>
    <div class="kpi-card accent">
      <span class="kpi-icon material-icons">account_balance</span>
      <div>
        <div class="kpi-value">{{ totalValue | number:'1.0-0' }} FCFA</div>
        <div class="kpi-label">Solde net valoris\xE9</div>
      </div>
    </div>
  </div>

  <!-- Filtres -->
  <div class="toolbar">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()" placeholder="Rechercher..." />
    </div>
    <select [(ngModel)]="filterProductId" (ngModelChange)="load()" class="filter-select">
      <option [ngValue]="null">Tous les articles</option>
      @for (p of products; track p.id) {
        <option [ngValue]="p.id">{{ p.defaultCode ? '[' + p.defaultCode + '] ' : '' }}{{ p.name }}</option>
      }
    </select>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <table class="val-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Article</th>
            <th>Emplacement</th>
            <th class="text-right">Quantit\xE9</th>
            <th class="text-right">Co\xFBt unit.</th>
            <th class="text-right">Valeur</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          @for (l of filtered; track l.id) {
            <tr>
              <td class="text-muted small">{{ l.createdAt | date:'dd/MM/yyyy HH:mm' }}</td>
              <td>
                <div class="product-cell">
                  @if (l.productCode) { <span class="code-badge">{{ l.productCode }}</span> }
                  <span class="product-name">{{ l.productName }}</span>
                </div>
              </td>
              <td class="text-muted small">{{ l.locationName || '\u2014' }}</td>
              <td class="text-right mono" [class.positive]="l.quantity > 0" [class.negative]="l.quantity < 0">
                {{ l.quantity > 0 ? '+' : '' }}{{ l.quantity | number:'1.0-4' }}
              </td>
              <td class="text-right mono text-muted">{{ l.unitCost | number:'1.0-2' }}</td>
              <td class="text-right mono fw-bold" [class.positive]="l.value > 0" [class.negative]="l.value < 0">
                {{ l.value > 0 ? '+' : '' }}{{ l.value | number:'1.0-0' }} FCFA
              </td>
              <td class="text-muted small">{{ l.description }}</td>
            </tr>
          }
          @if (filtered.length === 0) {
            <tr><td colspan="7" class="empty-state">Aucune couche de valorisation</td></tr>
          }
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="5"><strong>TOTAL NET</strong></td>
            <td class="text-right mono fw-bold" [class.positive]="totalValue > 0" [class.negative]="totalValue < 0">
              {{ totalValue | number:'1.0-0' }} FCFA
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/analyse/stock-valuation.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle button {\n  padding: 6px 14px;\n  border: none;\n  background: white;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.view-toggle button.active {\n  background: #2c7be5;\n  color: white;\n}\n.view-toggle button:not(.active):hover {\n  background: #f8f9fa;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0f0f0;\n}\n.kpi-card.accent {\n  border-color: #2c7be5;\n  background: #f0f5ff;\n}\n.kpi-card .kpi-icon {\n  font-size: 32px;\n  color: #2c7be5;\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card .kpi-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  color: #adb5bd;\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.filter-select:focus {\n  border-color: #2c7be5;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 13px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\ntd {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\ntbody tr:hover td {\n  background: #fafafa;\n}\ntfoot td {\n  padding: 10px 12px;\n  border-top: 2px solid #dee2e6;\n  background: #f8f9fa;\n}\n.total-row td {\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: #6c757d;\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold {\n  font-weight: 600;\n}\n.positive {\n  color: #0a5c45;\n}\n.negative {\n  color: #721c24;\n}\n.low-stock {\n  color: #dc3545;\n  font-weight: 600;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name {\n  font-weight: 500;\n  color: #212529;\n}\n.code-badge {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip {\n  display: inline-block;\n  background: #f0f0f0;\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.type-badge.livraison {\n  background: #fde8e8;\n  color: #721c24;\n}\n.type-badge.ajustement {\n  background: #fff3cd;\n  color: #856404;\n}\n.type-badge.transfert {\n  background: #e8f0fe;\n  color: #1a68d1;\n}\n@media print {\n  .toolbar,\n  .header-actions,\n  .btn-secondary,\n  .btn-primary {\n    display: none !important;\n  }\n  .page-container {\n    padding: 0;\n  }\n  .card {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=stock-valuation.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockValuationComponent, { className: "StockValuationComponent", filePath: "src/app/modules/stock/components/analyse/stock-valuation.component.ts", lineNumber: 14 });
})();
export {
  StockValuationComponent
};
//# sourceMappingURL=chunk-6YCOCOJP.js.map
