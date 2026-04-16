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
  DecimalPipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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

// src/app/modules/stock/components/analyse/stock-movements.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StockMovementsComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
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
function StockMovementsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 14);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function StockMovementsComponent_Conditional_30_For_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r2.productCode);
  }
}
function StockMovementsComponent_Conditional_30_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 19);
    \u0275\u0275conditionalCreate(6, StockMovementsComponent_Conditional_30_For_23_Conditional_6_Template, 2, 1, "span", 20);
    \u0275\u0275elementStart(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 23);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 24);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 25);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getMoveType(m_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMoveTypeLabel(m_r2));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(m_r2.productCode ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.locationDestName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(15, 11, m_r2.qtyDone, "1.0-2"), " ", m_r2.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 14, m_r2.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 17, m_r2.subtotalValue, "1.0-0"), " FCFA");
  }
}
function StockMovementsComponent_Conditional_30_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "Aucun mouvement trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function StockMovementsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 15)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "table", 16)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Vers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 17);
    \u0275\u0275text(16, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 17);
    \u0275\u0275text(18, "Prix unit.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 17);
    \u0275\u0275text(20, "Valeur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, StockMovementsComponent_Conditional_30_For_23_Template, 22, 20, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(24, StockMovementsComponent_Conditional_30_Conditional_24_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.filtered.length, " mouvement(s)");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.filtered);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filtered.length === 0 ? 24 : -1);
  }
}
var StockMovementsComponent = class _StockMovementsComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.movements = [];
    this.filtered = [];
    this.products = [];
    this.loading = false;
    this.search = "";
    this.filterProductId = null;
    this.limit = 100;
  }
  ngOnInit() {
    const cid = this.authService.getCompanyId();
    this.stockService.getProducts(cid).subscribe({ next: (p) => this.products = p });
    this.load();
  }
  load() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.stockService.getMovements(cid, this.filterProductId ?? void 0, this.limit).subscribe({
      next: (data) => {
        this.movements = data;
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
    this.filtered = q ? this.movements.filter((m) => (m.productName || "").toLowerCase().includes(q) || (m.productCode || "").toLowerCase().includes(q) || (m.locationName || "").toLowerCase().includes(q) || (m.locationDestName || "").toLowerCase().includes(q)) : [...this.movements];
  }
  getMoveType(m) {
    const src = m.locationName || "";
    const dest = m.locationDestName || "";
    if (src.toLowerCase().includes("fournisseur") || src.toLowerCase().includes("supplier"))
      return "reception";
    if (dest.toLowerCase().includes("client") || dest.toLowerCase().includes("customer"))
      return "livraison";
    if (src.toLowerCase().includes("inventaire") || dest.toLowerCase().includes("inventaire"))
      return "ajustement";
    return "transfert";
  }
  getMoveTypeLabel(m) {
    const t = this.getMoveType(m);
    const labels = {
      reception: "R\xE9ception",
      livraison: "Livraison",
      ajustement: "Ajustement",
      transfert: "Transfert"
    };
    return labels[t] || "Mouvement";
  }
  get totalMoved() {
    return this.filtered.reduce((s, m) => s + (m.qtyDone || 0), 0);
  }
  static {
    this.\u0275fac = function StockMovementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockMovementsComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockMovementsComponent, selectors: [["app-stock-movements"]], decls: 31, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-secondary", 3, "click"], [1, "material-icons"], [1, "toolbar"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "card-header"], [1, "move-table"], [1, "text-right"], [1, "type-badge"], [1, "product-cell"], [1, "code-badge"], [1, "product-name"], [1, "text-muted", "small"], [1, "text-right", "mono"], [1, "text-right", "mono", "text-muted"], [1, "text-right", "mono", "fw-bold"], ["colspan", "7", 1, "empty-state"]], template: function StockMovementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Mouvements de produits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Historique de tous les mouvements de stock valid\xE9s");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function StockMovementsComponent_Template_button_click_7_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "span", 5);
        \u0275\u0275text(13, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function StockMovementsComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockMovementsComponent_Template_input_ngModelChange_14_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterProductId, $event) || (ctx.filterProductId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_15_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(16, "option", 10);
        \u0275\u0275text(17, "Tous les articles");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, StockMovementsComponent_For_19_Template, 2, 3, "option", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.limit, $event) || (ctx.limit = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_20_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(21, "option", 11);
        \u0275\u0275text(22, "50 derniers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 11);
        \u0275\u0275text(24, "100 derniers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 11);
        \u0275\u0275text(26, "200 derniers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 11);
        \u0275\u0275text(28, "500 derniers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(29, StockMovementsComponent_Conditional_29_Template, 4, 0, "div", 12)(30, StockMovementsComponent_Conditional_30_Template, 25, 2, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.filterProductId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.products);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.limit);
        \u0275\u0275advance();
        \u0275\u0275property("value", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 100);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 500);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 29 : 30);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: none;\n  background: white;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: #f8f9fa;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0f0f0;\n}\n.kpi-card.accent[_ngcontent-%COMP%] {\n  border-color: #2c7be5;\n  background: #f0f5ff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #2c7be5;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 13px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-top: 2px solid #dee2e6;\n  background: #f8f9fa;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.positive[_ngcontent-%COMP%] {\n  color: #0a5c45;\n}\n.negative[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.low-stock[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #212529;\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f0f0f0;\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.type-badge.livraison[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.type-badge.ajustement[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.type-badge.transfert[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n}\n@media print {\n  .toolbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .card[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=stock-movements.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockMovementsComponent, [{
    type: Component,
    args: [{ selector: "app-stock-movements", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">Mouvements de produits</h1>
      <p class="page-subtitle">Historique de tous les mouvements de stock valid\xE9s</p>
    </div>
    <button class="btn-secondary" (click)="load()"><span class="material-icons">refresh</span></button>
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
    <select [(ngModel)]="limit" (ngModelChange)="load()" class="filter-select">
      <option [value]="50">50 derniers</option>
      <option [value]="100">100 derniers</option>
      <option [value]="200">200 derniers</option>
      <option [value]="500">500 derniers</option>
    </select>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <div class="card-header">
        <span>{{ filtered.length }} mouvement(s)</span>
      </div>
      <table class="move-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Article</th>
            <th>De</th>
            <th>Vers</th>
            <th class="text-right">Quantit\xE9</th>
            <th class="text-right">Prix unit.</th>
            <th class="text-right">Valeur</th>
          </tr>
        </thead>
        <tbody>
          @for (m of filtered; track m.id) {
            <tr>
              <td>
                <span class="type-badge" [class]="getMoveType(m)">{{ getMoveTypeLabel(m) }}</span>
              </td>
              <td>
                <div class="product-cell">
                  @if (m.productCode) { <span class="code-badge">{{ m.productCode }}</span> }
                  <span class="product-name">{{ m.productName }}</span>
                </div>
              </td>
              <td class="text-muted small">{{ m.locationName }}</td>
              <td class="text-muted small">{{ m.locationDestName }}</td>
              <td class="text-right mono">{{ m.qtyDone | number:'1.0-2' }} {{ m.uomName }}</td>
              <td class="text-right mono text-muted">{{ m.priceUnit | number:'1.0-0' }}</td>
              <td class="text-right mono fw-bold">{{ m.subtotalValue | number:'1.0-0' }} FCFA</td>
            </tr>
          }
          @if (filtered.length === 0) {
            <tr><td colspan="7" class="empty-state">Aucun mouvement trouv\xE9</td></tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/analyse/stock-movements.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle button {\n  padding: 6px 14px;\n  border: none;\n  background: white;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.view-toggle button.active {\n  background: #2c7be5;\n  color: white;\n}\n.view-toggle button:not(.active):hover {\n  background: #f8f9fa;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0f0f0;\n}\n.kpi-card.accent {\n  border-color: #2c7be5;\n  background: #f0f5ff;\n}\n.kpi-card .kpi-icon {\n  font-size: 32px;\n  color: #2c7be5;\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card .kpi-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  color: #adb5bd;\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.filter-select:focus {\n  border-color: #2c7be5;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 13px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\ntd {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\ntbody tr:hover td {\n  background: #fafafa;\n}\ntfoot td {\n  padding: 10px 12px;\n  border-top: 2px solid #dee2e6;\n  background: #f8f9fa;\n}\n.total-row td {\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: #6c757d;\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold {\n  font-weight: 600;\n}\n.positive {\n  color: #0a5c45;\n}\n.negative {\n  color: #721c24;\n}\n.low-stock {\n  color: #dc3545;\n  font-weight: 600;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name {\n  font-weight: 500;\n  color: #212529;\n}\n.code-badge {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip {\n  display: inline-block;\n  background: #f0f0f0;\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.type-badge.livraison {\n  background: #fde8e8;\n  color: #721c24;\n}\n.type-badge.ajustement {\n  background: #fff3cd;\n  color: #856404;\n}\n.type-badge.transfert {\n  background: #e8f0fe;\n  color: #1a68d1;\n}\n@media print {\n  .toolbar,\n  .header-actions,\n  .btn-secondary,\n  .btn-primary {\n    display: none !important;\n  }\n  .page-container {\n    padding: 0;\n  }\n  .card {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=stock-movements.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockMovementsComponent, { className: "StockMovementsComponent", filePath: "src/app/modules/stock/components/analyse/stock-movements.component.ts", lineNumber: 14 });
})();
export {
  StockMovementsComponent
};
//# sourceMappingURL=chunk-FHD6QAJW.js.map
