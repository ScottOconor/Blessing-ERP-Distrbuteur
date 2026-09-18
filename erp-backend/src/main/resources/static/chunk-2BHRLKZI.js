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
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/analyse/stock-movements.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StockMovementsComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
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
function StockMovementsComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 17);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function StockMovementsComponent_Conditional_39_For_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r2.productCode);
  }
}
function StockMovementsComponent_Conditional_39_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 22);
    \u0275\u0275conditionalCreate(6, StockMovementsComponent_Conditional_39_For_25_Conditional_6_Template, 2, 1, "span", 23);
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 26);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 27);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 28);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
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
    \u0275\u0275textInterpolate(m_r2.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(17, 12, m_r2.qtyDone, "1.0-2"), " ", m_r2.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 15, m_r2.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 18, m_r2.subtotalValue, "1.0-0"), " FCFA");
  }
}
function StockMovementsComponent_Conditional_39_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, "Aucun mouvement trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function StockMovementsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "table", 19)(5, "thead")(6, "tr")(7, "th");
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
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Partenaire / Entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 20);
    \u0275\u0275text(18, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 20);
    \u0275\u0275text(20, "Prix unit.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 20);
    \u0275\u0275text(22, "Valeur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, StockMovementsComponent_Conditional_39_For_25_Template, 24, 21, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(26, StockMovementsComponent_Conditional_39_Conditional_26_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.filtered.length, " mouvement(s)");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r2.filtered);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filtered.length === 0 ? 26 : -1);
  }
}
var StockMovementsComponent = class _StockMovementsComponent {
  constructor(stockService, authService, excelExport) {
    this.stockService = stockService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.movements = [];
    this.filtered = [];
    this.products = [];
    this.loading = false;
    this.search = "";
    this.filterProductId = null;
    this.limit = 100;
    this.exporting = false;
  }
  ngOnInit() {
    const cid = this.authService.getCompanyId();
    this.stockService.getProducts(cid).subscribe({ next: (p) => this.products = p });
    this.load();
  }
  load() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.stockService.getMovements(cid, { productId: this.filterProductId ?? void 0, limit: this.limit }).subscribe({
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
  exportPdf() {
    const cid = this.authService.getCompanyId();
    this.stockService.downloadMovementsPdf(cid, {
      productId: this.filterProductId ?? void 0,
      limit: this.limit
    }).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `mouvements_stock_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  }
  exportExcel() {
    this.excelExport.exportStockMovements(this.filtered, this.authService.getActiveCompany()?.name);
  }
  static {
    this.\u0275fac = function StockMovementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockMovementsComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockMovementsComponent, selectors: [["app-stock-movements"]], decls: 40, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn-secondary", 3, "click"], [1, "material-icons"], [1, "btn-secondary", "btn-pdf", 3, "click", "disabled"], [1, "btn-secondary", "btn-excel", 3, "click", "disabled"], [1, "toolbar"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "card-header"], [1, "move-table"], [1, "text-right"], [1, "type-badge"], [1, "product-cell"], [1, "code-badge"], [1, "product-name"], [1, "text-muted", "small"], [1, "text-right", "mono"], [1, "text-right", "mono", "text-muted"], [1, "text-right", "mono", "fw-bold"], ["colspan", "7", 1, "empty-state"]], template: function StockMovementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Mouvements de produits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Historique de tous les mouvements de stock valid\xE9s");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function StockMovementsComponent_Template_button_click_8_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "refresh");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function StockMovementsComponent_Template_button_click_11_listener() {
          return ctx.exportPdf();
        });
        \u0275\u0275elementStart(12, "span", 6);
        \u0275\u0275text(13, "picture_as_pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " PDF ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function StockMovementsComponent_Template_button_click_15_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(16, "span", 6);
        \u0275\u0275text(17, "table_view");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "span", 6);
        \u0275\u0275text(22, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function StockMovementsComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockMovementsComponent_Template_input_ngModelChange_23_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterProductId, $event) || (ctx.filterProductId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_24_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(25, "option", 13);
        \u0275\u0275text(26, "Tous les articles");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(27, StockMovementsComponent_For_28_Template, 2, 3, "option", 13, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.limit, $event) || (ctx.limit = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StockMovementsComponent_Template_select_ngModelChange_29_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(30, "option", 14);
        \u0275\u0275text(31, "50 derniers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 14);
        \u0275\u0275text(33, "100 derniers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 14);
        \u0275\u0275text(35, "200 derniers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option", 14);
        \u0275\u0275text(37, "500 derniers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(38, StockMovementsComponent_Conditional_38_Template, 4, 0, "div", 15)(39, StockMovementsComponent_Conditional_39_Template, 27, 2, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.filtered.length === 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.filtered.length === 0);
        \u0275\u0275advance(8);
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
        \u0275\u0275conditional(ctx.loading ? 38 : 39);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--bg-hover);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid var(--border-light);\n}\n.kpi-card.accent[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--primary);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%]   .kpi-currency[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.report-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--primary);\n}\n.report-card-header.warehouse[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.report-card-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.col-code[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.col-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n  width: 60px;\n}\n.col-num[_ngcontent-%COMP%] {\n  text-align: right !important;\n  width: 110px;\n}\n.col-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  text-align: center !important;\n}\n.product-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.product-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n}\n.product-name-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.location-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n  border-bottom: 1px solid var(--border-light);\n}\n.loc-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.loc-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.subtotal-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n  border-top: 1px solid var(--border);\n  font-weight: 600;\n}\n.groupby-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.groupby-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.groupby-btns[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n  border-right: 1px solid var(--border);\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.groupby-btns[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--bg-hover);\n}\n.expand-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  font-size: 12px;\n}\n.expand-btns[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: var(--border);\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 12px;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.clear-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 16px;\n}\n.clear-icon[_ngcontent-%COMP%]:hover {\n  color: var(--text-secondary);\n}\n.col-group[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n.group-header-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: var(--bg-elevated) !important;\n}\n.group-header-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n}\n.group-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.group-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 12px !important;\n}\n.group-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.group-count[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.group-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--primary);\n}\n.group-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: var(--bg-elevated) !important;\n}\n.detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.detail-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover) !important;\n}\n.detail-label-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-left: 28px !important;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.indent-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.grand-total-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-elevated);\n  border-radius: 8px;\n  padding: 12px 20px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.grand-total-bar[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 16px;\n}\n.empty-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-top: 2px solid var(--border);\n  background: var(--bg-hover);\n  font-weight: 600;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.positive[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.negative[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.low-stock[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--bg-hover);\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.ajustement[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-badge.transfert[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n@media print {\n  .toolbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%], \n   .no-print[_ngcontent-%COMP%], \n   .expand-icon[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .card[_ngcontent-%COMP%], \n   .report-card[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=stock-movements.component.css.map */'] });
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
    <div class="header-actions">
      <button class="btn-secondary" (click)="load()"><span class="material-icons">refresh</span></button>
      <button class="btn-secondary btn-pdf" (click)="exportPdf()" [disabled]="filtered.length === 0">
        <span class="material-icons">picture_as_pdf</span> PDF
      </button>
      <button class="btn-secondary btn-excel" (click)="exportExcel()" [disabled]="filtered.length === 0">
        <span class="material-icons">table_view</span> Excel
      </button>
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
            <th>Partenaire / Entrep\xF4t</th>
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
              <td class="text-muted small">{{ m.partnerName || '\u2014' }}</td>
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
`, styles: ['/* src/app/modules/stock/components/analyse/stock-movements.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.view-toggle button .material-icons {\n  font-size: 15px;\n}\n.view-toggle button.active {\n  background: var(--primary);\n  color: white;\n}\n.view-toggle button:not(.active):hover {\n  background: var(--bg-hover);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid var(--border-light);\n}\n.kpi-card.accent {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.kpi-card .kpi-icon {\n  font-size: 32px;\n  color: var(--primary);\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card .kpi-value .kpi-currency {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.kpi-card .kpi-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select {\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.filter-select:focus {\n  border-color: var(--primary);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.report-card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card-header .material-icons {\n  font-size: 18px;\n  color: var(--primary);\n}\n.report-card-header.warehouse .material-icons {\n  color: var(--text-secondary);\n}\n.report-card-header .badge {\n  margin-left: auto;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.col-code {\n  width: 110px;\n}\n.col-center {\n  text-align: center !important;\n  width: 60px;\n}\n.col-num {\n  text-align: right !important;\n  width: 110px;\n}\n.col-icon {\n  width: 36px;\n  text-align: center !important;\n}\n.product-row {\n  cursor: pointer;\n}\n.product-row:hover td {\n  background: var(--primary-subtle) !important;\n}\n.product-name-cell {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.location-row td {\n  background: var(--bg-elevated) !important;\n  border-bottom: 1px solid var(--border-light);\n}\n.loc-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.loc-icon {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.expand-icon {\n  font-size: 18px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.subtotal-row td {\n  background: var(--bg-elevated) !important;\n  border-top: 1px solid var(--border);\n  font-weight: 600;\n}\n.groupby-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.groupby-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.groupby-btns {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.groupby-btns button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n  border-right: 1px solid var(--border);\n}\n.groupby-btns button .material-icons {\n  font-size: 15px;\n}\n.groupby-btns button:last-child {\n  border-right: none;\n}\n.groupby-btns button.active {\n  background: var(--primary);\n  color: white;\n}\n.groupby-btns button:not(.active):hover {\n  background: var(--bg-hover);\n}\n.expand-btns {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  font-size: 12px;\n}\n.expand-btns .sep {\n  color: var(--border);\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 12px;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: var(--primary);\n}\n.clear-icon {\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 16px;\n}\n.clear-icon:hover {\n  color: var(--text-secondary);\n}\n.col-group {\n  min-width: 260px;\n}\n.group-header-row {\n  cursor: pointer;\n  background: var(--bg-elevated) !important;\n}\n.group-header-row:hover td {\n  background: var(--primary-subtle) !important;\n}\n.group-header-row td {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.group-header-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 12px !important;\n}\n.group-label {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.group-count {\n  margin-left: 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.group-icon {\n  font-size: 17px;\n  color: var(--primary);\n}\n.group-num {\n  font-weight: 600;\n  background: var(--bg-elevated) !important;\n}\n.detail-row td {\n  background: var(--bg-surface);\n}\n.detail-row:hover td {\n  background: var(--bg-hover) !important;\n}\n.detail-label-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-left: 28px !important;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.indent-icon {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.grand-total-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-elevated);\n  border-radius: 8px;\n  padding: 12px 20px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.grand-total-bar .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 16px;\n}\n.empty-card {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\ntd {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\ntbody tr:hover td {\n  background: var(--bg-hover);\n}\ntfoot td {\n  padding: 9px 12px;\n  border-top: 2px solid var(--border);\n  background: var(--bg-hover);\n  font-weight: 600;\n}\n.total-row td {\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold {\n  font-weight: 600;\n}\n.positive {\n  color: var(--success);\n}\n.negative {\n  color: var(--danger);\n}\n.low-stock {\n  color: var(--danger);\n  font-weight: 600;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.code-badge {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip {\n  display: inline-block;\n  background: var(--bg-hover);\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.ajustement {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-badge.transfert {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n@media print {\n  .toolbar,\n  .header-actions,\n  .btn-secondary,\n  .btn-primary,\n  .no-print,\n  .expand-icon {\n    display: none !important;\n  }\n  .page-container {\n    padding: 0;\n  }\n  .card,\n  .report-card {\n    box-shadow: none;\n  }\n  .view-toggle {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=stock-movements.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: ExcelExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockMovementsComponent, { className: "StockMovementsComponent", filePath: "app/modules/stock/components/analyse/stock-movements.component.ts", lineNumber: 15 });
})();
export {
  StockMovementsComponent
};
//# sourceMappingURL=chunk-2BHRLKZI.js.map
