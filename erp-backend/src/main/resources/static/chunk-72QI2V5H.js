import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/dashboard/stock-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _forTrack0 = ($index, $item) => $item.id;
function StockDashboardComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 8);
  }
}
function StockDashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, StockDashboardComponent_Conditional_10_For_2_Template, 1, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function StockDashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 7)(1, "span", 5);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 9);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ngOnInit());
    });
    \u0275\u0275domElementStart(6, "span", 5);
    \u0275\u0275text(7, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8, " R\xE9essayer ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMsg);
  }
}
function StockDashboardComponent_Conditional_12_Conditional_84_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td")(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td", 38);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "td", 39);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 40);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 36);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275domElementStart(13, "span", 41);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "td", 42);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "td", 43);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    const \u0275$index_222_r6 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_222_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.productCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.locationCompleteName || q_r5.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 8, q_r5.quantity, "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5.uomName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 11, q_r5.standardPrice, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 14, q_r5.totalValue, "1.0-0"));
  }
}
function StockDashboardComponent_Conditional_12_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 25)(1, "div", 30)(2, "span", 31)(3, "span", 5);
    \u0275\u0275text(4, "workspace_premium");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(5, " Top articles par valeur de stock ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 32);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Conditional_84_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/analyse/rapport"]));
    });
    \u0275\u0275text(7, " Voir tout ");
    \u0275\u0275domElementStart(8, "span", 5);
    \u0275\u0275text(9, "arrow_forward");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "div", 33)(11, "table", 34)(12, "thead")(13, "tr")(14, "th", 35);
    \u0275\u0275text(15, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "th");
    \u0275\u0275text(17, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "th");
    \u0275\u0275text(19, "Article");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "th");
    \u0275\u0275text(21, "Emplacement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "th", 36);
    \u0275\u0275text(23, "Quantit\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "th", 36);
    \u0275\u0275text(25, "CMUP");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "th", 36);
    \u0275\u0275text(27, "Valeur stock");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, StockDashboardComponent_Conditional_12_Conditional_84_For_30_Template, 21, 17, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(29);
    \u0275\u0275repeater(ctx_r1.topQuants);
  }
}
function StockDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "span", 5);
    \u0275\u0275text(4, "paid");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 13)(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 15);
    \u0275\u0275text(10, "M FCFA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 16);
    \u0275\u0275text(12, "Valeur totale stock");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "div", 18);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/products"]));
    });
    \u0275\u0275domElementStart(17, "div", 12)(18, "span", 5);
    \u0275\u0275text(19, "category");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 13)(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span", 16);
    \u0275\u0275text(24, "Articles actifs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "span", 17);
    \u0275\u0275text(26, "G\xE9rer le catalogue");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "span", 19);
    \u0275\u0275text(28, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(29, "div", 20);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/warehouses"]));
    });
    \u0275\u0275domElementStart(30, "div", 12)(31, "span", 5);
    \u0275\u0275text(32, "warehouse");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "div", 13)(34, "span", 14);
    \u0275\u0275text(35);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "span", 16);
    \u0275\u0275text(37, "Entrep\xF4ts / D\xE9p\xF4ts");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "span", 17);
    \u0275\u0275text(39, "Voir les emplacements");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(40, "span", 19);
    \u0275\u0275text(41, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(42, "div", 21);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/receptions"]));
    });
    \u0275\u0275domElementStart(43, "div", 12)(44, "span", 5);
    \u0275\u0275text(45, "move_to_inbox");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(46, "div", 13)(47, "span", 14);
    \u0275\u0275text(48);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "span", 16);
    \u0275\u0275text(50, "R\xE9ceptions en attente");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "span", 17);
    \u0275\u0275text(52);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(53, "span", 19);
    \u0275\u0275text(54, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(55, "div", 22);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/expeditions"]));
    });
    \u0275\u0275domElementStart(56, "div", 12)(57, "span", 5);
    \u0275\u0275text(58, "local_shipping");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(59, "div", 13)(60, "span", 14);
    \u0275\u0275text(61);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "span", 16);
    \u0275\u0275text(63, "Livraisons");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(64, "span", 17);
    \u0275\u0275text(65, "Total toutes p\xE9riodes");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(66, "span", 19);
    \u0275\u0275text(67, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(68, "div", 23);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_div_click_68_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts"]));
    });
    \u0275\u0275domElementStart(69, "div", 12)(70, "span", 5);
    \u0275\u0275text(71, "compare_arrows");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(72, "div", 13)(73, "span", 14);
    \u0275\u0275text(74);
    \u0275\u0275domElementStart(75, "span", 24);
    \u0275\u0275text(76, "/");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(77);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(78, "span", 16);
    \u0275\u0275text(79, "Transferts");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "span", 17);
    \u0275\u0275text(81, "Fait / Total");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(82, "span", 19);
    \u0275\u0275text(83, "chevron_right");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(84, StockDashboardComponent_Conditional_12_Conditional_84_Template, 31, 0, "div", 25);
    \u0275\u0275domElementStart(85, "div", 26)(86, "div", 27)(87, "span", 5);
    \u0275\u0275text(88, "bolt");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(89, " Actions rapides");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(90, "div", 28)(91, "button", 29);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/receptions/new"]));
    });
    \u0275\u0275domElementStart(92, "span", 5);
    \u0275\u0275text(93, "move_to_inbox");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(94, " Nouvelle r\xE9ception ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "button", 29);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/expeditions/new"]));
    });
    \u0275\u0275domElementStart(96, "span", 5);
    \u0275\u0275text(97, "local_shipping");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(98, " Nouvelle livraison ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(99, "button", 29);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts/new"]));
    });
    \u0275\u0275domElementStart(100, "span", 5);
    \u0275\u0275text(101, "compare_arrows");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(102, " Nouveau transfert ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(103, "button", 29);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/products"]));
    });
    \u0275\u0275domElementStart(104, "span", 5);
    \u0275\u0275text(105, "add_circle_outline");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(106, " Nouvel article ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(107, "button", 29);
    \u0275\u0275domListener("click", function StockDashboardComponent_Conditional_12_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/analyse/rapport"]));
    });
    \u0275\u0275domElementStart(108, "span", 5);
    \u0275\u0275text(109, "assessment");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(110, " Rapport stock ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 14, (ctx_r1.dashboard.totalStockValue / 1e6).toFixed(1), "1.1-1"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 17, ctx_r1.dashboard.totalStockValue, "1.0-0"), " FCFA");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbProducts);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbWarehouses);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("hero-orange", ctx_r1.dashboard.nbReceptionsDraft > 0)("hero-gray", ctx_r1.dashboard.nbReceptionsDraft === 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbReceptionsDraft);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.dashboard.nbReceptionsDone, " d\xE9j\xE0 trait\xE9es");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbLivraisons);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbTransfertsDone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.dashboard.nbTransferts);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.topQuants.length > 0 ? 84 : -1);
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
    this.errorMsg = "";
  }
  ngOnInit() {
    this.loading = true;
    this.errorMsg = "";
    const cid = this.authService.getCompanyId();
    forkJoin({
      dashboard: this.stockService.getDashboard(cid).pipe(catchError(() => of(null))),
      quants: this.stockService.getQuants(cid).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ dashboard, quants }) => {
        if (!dashboard) {
          this.errorMsg = "Impossible de charger le tableau de bord \u2014 v\xE9rifiez que le serveur est d\xE9marr\xE9.";
        } else {
          this.dashboard = dashboard;
          this.topQuants = quants.filter((q) => q.quantity > 0).sort((a, b) => (b.totalValue || 0) - (a.totalValue || 0)).slice(0, 10);
        }
        this.loading = false;
      },
      error: () => {
        this.errorMsg = "Erreur de connexion au serveur. Assurez-vous que le backend est d\xE9marr\xE9 sur le bon port.";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockDashboardComponent, selectors: [["app-stock-dashboard"]], decls: 13, vars: 3, consts: [[1, "dash"], [1, "dash-header"], [1, "dash-title"], [1, "dash-sub"], [1, "btn-refresh", 3, "click"], [1, "material-icons"], [1, "skeleton-row"], [1, "error-state"], [1, "skeleton-card"], [1, "btn-retry", 3, "click"], [1, "kpi-row"], [1, "kpi", "hero-green"], [1, "kpi-icon-wrap"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-cur"], [1, "kpi-lbl"], [1, "kpi-hint"], [1, "kpi", "hero-blue", "clickable", 3, "click"], [1, "material-icons", "kpi-arrow"], [1, "kpi", "hero-indigo", "clickable", 3, "click"], [1, "kpi", "clickable", 3, "click"], [1, "kpi", "hero-teal", "clickable", 3, "click"], [1, "kpi", "hero-purple", "clickable", 3, "click"], [1, "kpi-slash"], [1, "card"], [1, "quick-block"], [1, "quick-title"], [1, "quick-row"], [1, "quick-btn", 3, "click"], [1, "card-hd"], [1, "card-title"], [1, "btn-link", 3, "click"], [1, "table-wrap"], [1, "data-table"], [1, "col-rank"], [1, "r"], [1, "rank-badge"], [1, "mono", "muted"], [1, "bold"], [1, "muted", "small"], [1, "unit"], [1, "r", "mono"], [1, "r", "bold", "val-blue"]], template: function StockDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Tableau de bord stock");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6, "Inventaire et mouvements en temps r\xE9el");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "button", 4);
        \u0275\u0275domListener("click", function StockDashboardComponent_Template_button_click_7_listener() {
          return ctx.ngOnInit();
        });
        \u0275\u0275domElementStart(8, "span", 5);
        \u0275\u0275text(9, "refresh");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(10, StockDashboardComponent_Conditional_10_Template, 3, 1, "div", 6)(11, StockDashboardComponent_Conditional_11_Template, 9, 1, "div", 7)(12, StockDashboardComponent_Conditional_12_Template, 111, 20);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("spinning", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 10 : ctx.errorMsg ? 11 : ctx.dashboard ? 12 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ['\n.dash[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.dash-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n}\n.dash-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.2s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-refresh.spinning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 110px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-elevated) 25%,\n      var(--bg-hover) 50%,\n      var(--bg-elevated) 75%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px;\n  gap: 14px;\n  background: var(--bg-surface);\n  border-radius: 14px;\n}\n.error-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n  text-align: center;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #00A09D;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-retry[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n@media (max-width: 1300px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 18px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.15s, box-shadow 0.15s;\n  position: relative;\n  overflow: hidden;\n}\n.kpi.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.kpi.clickable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.13);\n}\n.kpi.hero-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e);\n  color: white;\n}\n.kpi.hero-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #60a5fa);\n  color: white;\n}\n.kpi.hero-indigo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #818cf8);\n  color: white;\n}\n.kpi.hero-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n  color: white;\n}\n.kpi.hero-gray[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #cbd5e1);\n  color: white;\n}\n.kpi.hero-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D,\n      #2dd4bf);\n  color: white;\n}\n.kpi.hero-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #a78bfa);\n  color: white;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.kpi-slash[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n  margin: 0 2px;\n}\n.kpi-cur[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.8;\n  margin-top: -1px;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 6px;\n}\n.kpi-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n  margin-top: 2px;\n}\n.kpi-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n  align-self: center;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 18px;\n}\n.card-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #00A09D;\n}\n.btn-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.btn-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.data-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.data-table[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.data-table[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%]   .val-blue[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.rank-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #00A09D;\n  color: white;\n  font-size: 11px;\n  font-weight: 800;\n}\n.quick-block[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.quick-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.quick-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.quick-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.quick-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #00A09D;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  background: var(--bg-hover);\n  color: #00A09D;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=stock-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-stock-dashboard", standalone: true, imports: [CommonModule], template: `<div class="dash">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="dash-header">
    <div>
      <h1 class="dash-title">Tableau de bord stock</h1>
      <p class="dash-sub">Inventaire et mouvements en temps r\xE9el</p>
    </div>
    <button class="btn-refresh" (click)="ngOnInit()" [class.spinning]="loading">
      <span class="material-icons">refresh</span>
    </button>
  </div>

  @if (loading) {
    <div class="skeleton-row">
      @for (i of [1,2,3,4,5,6]; track i) { <div class="skeleton-card"></div> }
    </div>
  } @else if (errorMsg) {
    <div class="error-state">
      <span class="material-icons">cloud_off</span>
      <p>{{ errorMsg }}</p>
      <button class="btn-retry" (click)="ngOnInit()">
        <span class="material-icons">refresh</span> R\xE9essayer
      </button>
    </div>
  } @else if (dashboard) {

  <!-- \u2550\u2550 KPI ROW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="kpi-row">

    <div class="kpi hero-green">
      <div class="kpi-icon-wrap"><span class="material-icons">paid</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ (dashboard.totalStockValue / 1000000).toFixed(1) | number:'1.1-1' }}</span>
        <span class="kpi-cur">M FCFA</span>
        <span class="kpi-lbl">Valeur totale stock</span>
        <span class="kpi-hint">{{ dashboard.totalStockValue | number:'1.0-0' }} FCFA</span>
      </div>
    </div>

    <div class="kpi hero-blue clickable" (click)="router.navigate(['/stock/products'])">
      <div class="kpi-icon-wrap"><span class="material-icons">category</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ dashboard.nbProducts }}</span>
        <span class="kpi-lbl">Articles actifs</span>
        <span class="kpi-hint">G\xE9rer le catalogue</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <div class="kpi hero-indigo clickable" (click)="router.navigate(['/stock/warehouses'])">
      <div class="kpi-icon-wrap"><span class="material-icons">warehouse</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ dashboard.nbWarehouses }}</span>
        <span class="kpi-lbl">Entrep\xF4ts / D\xE9p\xF4ts</span>
        <span class="kpi-hint">Voir les emplacements</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <div class="kpi clickable" [class.hero-orange]="dashboard.nbReceptionsDraft > 0" [class.hero-gray]="dashboard.nbReceptionsDraft === 0"
         (click)="router.navigate(['/stock/receptions'])">
      <div class="kpi-icon-wrap"><span class="material-icons">move_to_inbox</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ dashboard.nbReceptionsDraft }}</span>
        <span class="kpi-lbl">R\xE9ceptions en attente</span>
        <span class="kpi-hint">{{ dashboard.nbReceptionsDone }} d\xE9j\xE0 trait\xE9es</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <div class="kpi hero-teal clickable" (click)="router.navigate(['/stock/expeditions'])">
      <div class="kpi-icon-wrap"><span class="material-icons">local_shipping</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ dashboard.nbLivraisons }}</span>
        <span class="kpi-lbl">Livraisons</span>
        <span class="kpi-hint">Total toutes p\xE9riodes</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <div class="kpi hero-purple clickable" (click)="router.navigate(['/stock/transferts'])">
      <div class="kpi-icon-wrap"><span class="material-icons">compare_arrows</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ dashboard.nbTransfertsDone }}<span class="kpi-slash">/</span>{{ dashboard.nbTransferts }}</span>
        <span class="kpi-lbl">Transferts</span>
        <span class="kpi-hint">Fait / Total</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

  </div>

  <!-- \u2550\u2550 TOP ARTICLES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (topQuants.length > 0) {
    <div class="card">
      <div class="card-hd">
        <span class="card-title">
          <span class="material-icons">workspace_premium</span> Top articles par valeur de stock
        </span>
        <button class="btn-link" (click)="router.navigate(['/stock/analyse/rapport'])">
          Voir tout <span class="material-icons">arrow_forward</span>
        </button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th class="col-rank">#</th>
              <th>R\xE9f\xE9rence</th>
              <th>Article</th>
              <th>Emplacement</th>
              <th class="r">Quantit\xE9</th>
              <th class="r">CMUP</th>
              <th class="r">Valeur stock</th>
            </tr>
          </thead>
          <tbody>
            @for (q of topQuants; track q.id; let i = $index) {
              <tr>
                <td><span class="rank-badge">{{ i + 1 }}</span></td>
                <td class="mono muted">{{ q.productCode || '\u2014' }}</td>
                <td class="bold">{{ q.productName }}</td>
                <td class="muted small">{{ q.locationCompleteName || q.locationName }}</td>
                <td class="r">{{ q.quantity | number:'1.0-2' }} <span class="unit">{{ q.uomName }}</span></td>
                <td class="r mono">{{ q.standardPrice | number:'1.0-0' }}</td>
                <td class="r bold val-blue">{{ q.totalValue | number:'1.0-0' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  }

  <!-- \u2550\u2550 ACTIONS RAPIDES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="quick-block">
    <div class="quick-title"><span class="material-icons">bolt</span> Actions rapides</div>
    <div class="quick-row">
      <button class="quick-btn" (click)="router.navigate(['/stock/receptions/new'])">
        <span class="material-icons">move_to_inbox</span> Nouvelle r\xE9ception
      </button>
      <button class="quick-btn" (click)="router.navigate(['/stock/expeditions/new'])">
        <span class="material-icons">local_shipping</span> Nouvelle livraison
      </button>
      <button class="quick-btn" (click)="router.navigate(['/stock/transferts/new'])">
        <span class="material-icons">compare_arrows</span> Nouveau transfert
      </button>
      <button class="quick-btn" (click)="router.navigate(['/stock/products'])">
        <span class="material-icons">add_circle_outline</span> Nouvel article
      </button>
      <button class="quick-btn" (click)="router.navigate(['/stock/analyse/rapport'])">
        <span class="material-icons">assessment</span> Rapport stock
      </button>
    </div>
  </div>

  }
</div>
`, styles: ['/* src/app/modules/stock/components/dashboard/stock-dashboard.component.scss */\n.dash {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.dash-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.dash-title {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n}\n.dash-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-refresh {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.2s;\n}\n.btn-refresh:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.btn-refresh .material-icons {\n  font-size: 20px;\n}\n.btn-refresh.spinning .material-icons {\n  animation: spin 1s linear infinite;\n}\n.skeleton-row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.skeleton-card {\n  height: 110px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-elevated) 25%,\n      var(--bg-hover) 50%,\n      var(--bg-elevated) 75%);\n  background-size: 400% 100%;\n  animation: shimmer 1.4s ease infinite;\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px;\n  gap: 14px;\n  background: var(--bg-surface);\n  border-radius: 14px;\n}\n.error-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.error-state p {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n  text-align: center;\n}\n.btn-retry {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #00A09D;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-retry .material-icons {\n  font-size: 16px;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n@media (max-width: 1300px) {\n  .kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi {\n  border-radius: 14px;\n  padding: 18px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.15s, box-shadow 0.15s;\n  position: relative;\n  overflow: hidden;\n}\n.kpi.clickable {\n  cursor: pointer;\n}\n.kpi.clickable:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.13);\n}\n.kpi.hero-green {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e);\n  color: white;\n}\n.kpi.hero-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #60a5fa);\n  color: white;\n}\n.kpi.hero-indigo {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #818cf8);\n  color: white;\n}\n.kpi.hero-orange {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n  color: white;\n}\n.kpi.hero-gray {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #cbd5e1);\n  color: white;\n}\n.kpi.hero-teal {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D,\n      #2dd4bf);\n  color: white;\n}\n.kpi.hero-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #a78bfa);\n  color: white;\n}\n.kpi-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap .material-icons {\n  font-size: 20px;\n  color: white;\n}\n.kpi-body {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.kpi-slash {\n  font-size: 16px;\n  opacity: 0.7;\n  margin: 0 2px;\n}\n.kpi-cur {\n  font-size: 11px;\n  opacity: 0.8;\n  margin-top: -1px;\n}\n.kpi-lbl {\n  font-size: 11px;\n  font-weight: 700;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 6px;\n}\n.kpi-hint {\n  font-size: 10px;\n  opacity: 0.7;\n  margin-top: 2px;\n}\n.kpi-arrow {\n  color: rgba(255, 255, 255, 0.45);\n  align-self: center;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 18px;\n}\n.card-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title .material-icons {\n  font-size: 17px;\n  color: #00A09D;\n}\n.btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.btn-link .material-icons {\n  font-size: 14px;\n}\n.btn-link:hover {\n  background: var(--bg-hover);\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table .r {\n  text-align: right;\n}\n.data-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.data-table .bold {\n  font-weight: 700;\n}\n.data-table .muted {\n  color: var(--text-muted);\n}\n.data-table .small {\n  font-size: 11px;\n}\n.data-table .unit {\n  font-size: 10px;\n  color: var(--text-muted);\n}\n.data-table .val-blue {\n  color: var(--primary);\n}\n.rank-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #00A09D;\n  color: white;\n  font-size: 11px;\n  font-weight: 800;\n}\n.quick-block {\n  margin-bottom: 8px;\n}\n.quick-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.quick-title .material-icons {\n  font-size: 15px;\n}\n.quick-row {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.quick-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.quick-btn .material-icons {\n  font-size: 18px;\n  color: #00A09D;\n}\n.quick-btn:hover {\n  border-color: #00A09D;\n  background: var(--bg-hover);\n  color: #00A09D;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=stock-dashboard.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockDashboardComponent, { className: "StockDashboardComponent", filePath: "app/modules/stock/components/dashboard/stock-dashboard.component.ts", lineNumber: 16 });
})();
export {
  StockDashboardComponent
};
//# sourceMappingURL=chunk-72QI2V5H.js.map
