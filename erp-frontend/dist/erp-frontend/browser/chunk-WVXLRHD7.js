import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  Router
} from "./chunk-K3VCSIQL.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/dashboard/stock-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StockDashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275domElementEnd();
  }
}
function StockDashboardComponent_Conditional_7_Conditional_56_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 29);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 27);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 30);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    const \u0275$index_152_r5 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_152_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.productCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.locationCompleteName || q_r4.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(11, 8, q_r4.quantity, "1.0-2"), " ", q_r4.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, q_r4.standardPrice, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 14, q_r4.totalValue, "1.0-0"));
  }
}
function StockDashboardComponent_Conditional_7_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18)(1, "div", 23)(2, "span");
    \u0275\u0275text(3, "Top articles par valeur de stock");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 24);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Conditional_56_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/stock"]));
    });
    \u0275\u0275text(5, "Voir tout \u2192");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "table", 25)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th");
    \u0275\u0275text(14, "Article");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th");
    \u0275\u0275text(16, "Emplacement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "th", 26);
    \u0275\u0275text(18, "Qt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "th", 26);
    \u0275\u0275text(20, "CMUP");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "th", 26);
    \u0275\u0275text(22, "Valeur");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, StockDashboardComponent_Conditional_7_Conditional_56_For_25_Template, 18, 17, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.topQuants);
  }
}
function StockDashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/products"]));
    });
    \u0275\u0275domElementStart(2, "div", 8)(3, "span", 3);
    \u0275\u0275text(4, "category");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 11);
    \u0275\u0275text(9, "Articles actifs");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "div", 7);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/warehouses"]));
    });
    \u0275\u0275domElementStart(11, "div", 12)(12, "span", 3);
    \u0275\u0275text(13, "warehouse");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div", 9)(15, "div", 10);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 11);
    \u0275\u0275text(18, "Entrep\xF4ts / D\xE9p\xF4ts");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(19, "div", 13)(20, "div", 14)(21, "span", 3);
    \u0275\u0275text(22, "paid");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 9)(24, "div", 10);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "div", 11);
    \u0275\u0275text(28, "Valeur totale stock (FCFA)");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(29, "div", 7);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/receptions"]));
    });
    \u0275\u0275domElementStart(30, "div", 15)(31, "span", 3);
    \u0275\u0275text(32, "move_to_inbox");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "div", 9)(34, "div", 10);
    \u0275\u0275text(35);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "div", 11);
    \u0275\u0275text(37, "R\xE9ceptions en attente");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(38, "div", 7);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/livraisons"]));
    });
    \u0275\u0275domElementStart(39, "div", 16)(40, "span", 3);
    \u0275\u0275text(41, "local_shipping");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(42, "div", 9)(43, "div", 10);
    \u0275\u0275text(44);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "div", 11);
    \u0275\u0275text(46, "Livraisons totales");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(47, "div", 7);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_div_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts"]));
    });
    \u0275\u0275domElementStart(48, "div", 17)(49, "span", 3);
    \u0275\u0275text(50, "compare_arrows");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(51, "div", 9)(52, "div", 10);
    \u0275\u0275text(53);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "div", 11);
    \u0275\u0275text(55, "Transferts (fait / total)");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275conditionalCreate(56, StockDashboardComponent_Conditional_7_Conditional_56_Template, 26, 0, "div", 18);
    \u0275\u0275domElementStart(57, "div", 19)(58, "div", 20);
    \u0275\u0275text(59, "Cr\xE9er rapidement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(60, "div", 21)(61, "button", 22);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/receptions/new"]));
    });
    \u0275\u0275domElementStart(62, "span", 3);
    \u0275\u0275text(63, "move_to_inbox");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(64, " Nouvelle r\xE9ception ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(65, "button", 22);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/livraisons/new"]));
    });
    \u0275\u0275domElementStart(66, "span", 3);
    \u0275\u0275text(67, "local_shipping");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(68, " Nouvelle livraison ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(69, "button", 22);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts/new"]));
    });
    \u0275\u0275domElementStart(70, "span", 3);
    \u0275\u0275text(71, "compare_arrows");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(72, " Nouveau transfert ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(73, "button", 22);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_7_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/products"]));
    });
    \u0275\u0275domElementStart(74, "span", 3);
    \u0275\u0275text(75, "add_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(76, " Nouvel article ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbProducts);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbWarehouses);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 8, ctx_r1.dashboard.totalStockValue, "1.0-0"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbReceptionsDraft);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbLivraisons);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.dashboard.nbTransfertsDone, " / ", ctx_r1.dashboard.nbTransferts);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.topQuants.length > 0 ? 56 : -1);
  }
}
var StockDashboardComponent = class _StockDashboardComponent {
  constructor(stockService, authService, router) {
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.dashboard = null;
    this.topQuants = [];
  }
  ngOnInit() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      dashboard: this.stockService.getDashboard(cid),
      quants: this.stockService.getQuants(cid)
    }).subscribe({
      next: ({ dashboard, quants }) => {
        this.dashboard = dashboard;
        this.topQuants = quants.filter((q) => q.quantity > 0).sort((a, b) => (b.totalValue || 0) - (a.totalValue || 0)).slice(0, 10);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function StockDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockDashboardComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockDashboardComponent, selectors: [["app-stock-dashboard"]], decls: 8, vars: 1, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "loading"], [1, "material-icons", "spin"], [1, "kpi-row"], [1, "kpi-card", 3, "click"], [1, "kpi-icon", "blue"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "indigo"], [1, "kpi-card", "highlight"], [1, "kpi-icon", "green"], [1, "kpi-icon", "orange"], [1, "kpi-icon", "teal"], [1, "kpi-icon", "purple"], [1, "card"], [1, "quick-actions"], [1, "qa-title"], [1, "qa-row"], [1, "qa-btn", 3, "click"], [1, "card-header"], [1, "btn-link", 3, "click"], [1, "data-table"], [1, "text-right"], [1, "text-muted"], [1, "font-mono", "text-muted"], [1, "font-bold"], [1, "text-right", "font-mono"], [1, "text-right", "font-bold", "text-blue"]], template: function StockDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "dashboard");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(5, " Tableau de bord stock");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(6, StockDashboardComponent_Conditional_6_Template, 4, 0, "div", 4)(7, StockDashboardComponent_Conditional_7_Template, 77, 11);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading ? 6 : ctx.dashboard ? 7 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  min-width: 170px;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.kpi-card.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9,\n      #f1f8e9);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.blue[_ngcontent-%COMP%] {\n  background: #2c7be5;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.indigo[_ngcontent-%COMP%] {\n  background: #6610f2;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.green[_ngcontent-%COMP%] {\n  background: #198754;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.orange[_ngcontent-%COMP%] {\n  background: #fd7e14;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.teal[_ngcontent-%COMP%] {\n  background: #017E84;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.purple[_ngcontent-%COMP%] {\n  background: #6f42c1;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #2c7be5;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.quick-actions[_ngcontent-%COMP%]   .qa-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.quick-actions[_ngcontent-%COMP%]   .qa-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.qa-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #212529;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Roboto", sans-serif;\n}\n.qa-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #2c7be5;\n}\n.qa-btn[_ngcontent-%COMP%]:hover {\n  background: #e8f0fb;\n  border-color: #2c7be5;\n  color: #2c7be5;\n}\n/*# sourceMappingURL=stock-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-stock-dashboard", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title"><span class="material-icons">dashboard</span> Tableau de bord stock</h1>
  </div>

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (dashboard) {

    <div class="kpi-row">
      <div class="kpi-card" (click)="router.navigate(['/stock/products'])">
        <div class="kpi-icon blue"><span class="material-icons">category</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ dashboard.nbProducts }}</div>
          <div class="kpi-label">Articles actifs</div>
        </div>
      </div>
      <div class="kpi-card" (click)="router.navigate(['/stock/warehouses'])">
        <div class="kpi-icon indigo"><span class="material-icons">warehouse</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ dashboard.nbWarehouses }}</div>
          <div class="kpi-label">Entrep\xF4ts / D\xE9p\xF4ts</div>
        </div>
      </div>
      <div class="kpi-card highlight">
        <div class="kpi-icon green"><span class="material-icons">paid</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ dashboard.totalStockValue | number:'1.0-0' }}</div>
          <div class="kpi-label">Valeur totale stock (FCFA)</div>
        </div>
      </div>
      <div class="kpi-card" (click)="router.navigate(['/stock/receptions'])">
        <div class="kpi-icon orange"><span class="material-icons">move_to_inbox</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ dashboard.nbReceptionsDraft }}</div>
          <div class="kpi-label">R\xE9ceptions en attente</div>
        </div>
      </div>
      <div class="kpi-card" (click)="router.navigate(['/stock/livraisons'])">
        <div class="kpi-icon teal"><span class="material-icons">local_shipping</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ dashboard.nbLivraisons }}</div>
          <div class="kpi-label">Livraisons totales</div>
        </div>
      </div>
      <div class="kpi-card" (click)="router.navigate(['/stock/transferts'])">
        <div class="kpi-icon purple"><span class="material-icons">compare_arrows</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ dashboard.nbTransfertsDone }} / {{ dashboard.nbTransferts }}</div>
          <div class="kpi-label">Transferts (fait / total)</div>
        </div>
      </div>
    </div>

    <!-- Top stock par valeur -->
    @if (topQuants.length > 0) {
      <div class="card">
        <div class="card-header">
          <span>Top articles par valeur de stock</span>
          <button class="btn-link" (click)="router.navigate(['/stock/stock'])">Voir tout \u2192</button>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>R\xE9f\xE9rence</th>
              <th>Article</th>
              <th>Emplacement</th>
              <th class="text-right">Qt\xE9</th>
              <th class="text-right">CMUP</th>
              <th class="text-right">Valeur</th>
            </tr>
          </thead>
          <tbody>
            @for (q of topQuants; track q.id; let i = $index) {
              <tr>
                <td class="text-muted">{{ i + 1 }}</td>
                <td class="font-mono text-muted">{{ q.productCode || '\u2014' }}</td>
                <td class="font-bold">{{ q.productName }}</td>
                <td class="text-muted">{{ q.locationCompleteName || q.locationName }}</td>
                <td class="text-right">{{ q.quantity | number:'1.0-2' }} {{ q.uomName }}</td>
                <td class="text-right font-mono">{{ q.standardPrice | number:'1.0-0' }}</td>
                <td class="text-right font-bold text-blue">{{ q.totalValue | number:'1.0-0' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }

    <!-- Quick actions -->
    <div class="quick-actions">
      <div class="qa-title">Cr\xE9er rapidement</div>
      <div class="qa-row">
        <button class="qa-btn" (click)="router.navigate(['/stock/receptions/new'])">
          <span class="material-icons">move_to_inbox</span> Nouvelle r\xE9ception
        </button>
        <button class="qa-btn" (click)="router.navigate(['/stock/livraisons/new'])">
          <span class="material-icons">local_shipping</span> Nouvelle livraison
        </button>
        <button class="qa-btn" (click)="router.navigate(['/stock/transferts/new'])">
          <span class="material-icons">compare_arrows</span> Nouveau transfert
        </button>
        <button class="qa-btn" (click)="router.navigate(['/stock/products'])">
          <span class="material-icons">add_circle</span> Nouvel article
        </button>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/dashboard/stock-dashboard.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-title .material-icons {\n  color: #2c7be5;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  min-width: 170px;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.kpi-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.kpi-card.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9,\n      #f1f8e9);\n}\n.kpi-card .kpi-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-card .kpi-icon .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.kpi-card .kpi-icon.blue {\n  background: #2c7be5;\n}\n.kpi-card .kpi-icon.indigo {\n  background: #6610f2;\n}\n.kpi-card .kpi-icon.green {\n  background: #198754;\n}\n.kpi-card .kpi-icon.orange {\n  background: #fd7e14;\n}\n.kpi-card .kpi-icon.teal {\n  background: #017E84;\n}\n.kpi-card .kpi-icon.purple {\n  background: #6f42c1;\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n}\n.kpi-card .kpi-label {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #2c7be5;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-blue {\n  color: #2c7be5;\n}\n.quick-actions {\n  margin-top: 20px;\n}\n.quick-actions .qa-title {\n  font-size: 13px;\n  color: #6c757d;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.quick-actions .qa-row {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.qa-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #212529;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Roboto", sans-serif;\n}\n.qa-btn .material-icons {\n  font-size: 18px;\n  color: #2c7be5;\n}\n.qa-btn:hover {\n  background: #e8f0fb;\n  border-color: #2c7be5;\n  color: #2c7be5;\n}\n/*# sourceMappingURL=stock-dashboard.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockDashboardComponent, { className: "StockDashboardComponent", filePath: "src/app/modules/stock/components/dashboard/stock-dashboard.component.ts", lineNumber: 15 });
})();
export {
  StockDashboardComponent
};
//# sourceMappingURL=chunk-WVXLRHD7.js.map
