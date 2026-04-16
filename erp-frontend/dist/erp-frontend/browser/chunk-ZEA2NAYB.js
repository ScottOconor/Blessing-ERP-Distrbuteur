import {
  SalesService
} from "./chunk-C6CRDXMM.js";
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
  ɵɵclassMap,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/sales/components/dashboard/sales-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function SalesDashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 18);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275domElementEnd();
  }
}
function SalesDashboardComponent_For_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const kpi_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kpi_r2.sub);
  }
}
function SalesDashboardComponent_For_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 25);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275domElementEnd();
  }
}
function SalesDashboardComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 19);
    \u0275\u0275domListener("click", function SalesDashboardComponent_For_12_Template_div_click_0_listener() {
      const kpi_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateTo(kpi_r2.route));
    });
    \u0275\u0275domElementStart(1, "div", 20)(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, SalesDashboardComponent_For_12_Conditional_9_Template, 2, 1, "div", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(10, SalesDashboardComponent_For_12_Conditional_10_Template, 2, 0, "span", 25);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const kpi_r2 = ctx.$implicit;
    \u0275\u0275classProp("clickable", !!kpi_r2.route);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", kpi_r2.color + "18")("color", kpi_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", kpi_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kpi_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(kpi_r2.sub ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(kpi_r2.route ? 10 : -1);
  }
}
function SalesDashboardComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275domElement(1, "div", 26);
    \u0275\u0275domElementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", s_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4.count);
  }
}
function SalesDashboardComponent_For_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, s_r5.amount, "1.0-0"), " F");
  }
}
function SalesDashboardComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275domElement(1, "div", 26);
    \u0275\u0275domElementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 29)(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, SalesDashboardComponent_For_29_Conditional_7_Template, 3, 4, "span", 30);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", s_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.count);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r5.amount > 0 ? 7 : -1);
  }
}
function SalesDashboardComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275text(1, "Aucun bon de commande");
    \u0275\u0275domElementEnd();
  }
}
function SalesDashboardComponent_Conditional_38_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 33);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_38_For_13_Template_tr_click_0_listener() {
      const o_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToOrder(o_r7.id));
    });
    \u0275\u0275domElementStart(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td")(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, o_r7.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getStateBadge(o_r7.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStateLabel(o_r7.state || ""));
  }
}
function SalesDashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Num\xE9ro");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th", 31);
    \u0275\u0275text(8, "TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, SalesDashboardComponent_Conditional_38_For_13_Template, 11, 9, "tr", 32, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.recentOrders);
  }
}
function SalesDashboardComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275text(1, "Aucune facture");
    \u0275\u0275domElementEnd();
  }
}
function SalesDashboardComponent_Conditional_46_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 33);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_46_For_15_Template_tr_click_0_listener() {
      const inv_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToInvoice(inv_r9.id));
    });
    \u0275\u0275domElementStart(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const inv_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r9.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, inv_r9.totalTTC, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", (inv_r9.montantDu || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 12, inv_r9.montantDu, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getStateBadge(inv_r9.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStateLabel(inv_r9.state || ""));
  }
}
function SalesDashboardComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Num\xE9ro");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th", 31);
    \u0275\u0275text(8, "TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th", 31);
    \u0275\u0275text(10, "Reste");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SalesDashboardComponent_Conditional_46_For_15_Template, 14, 15, "tr", 32, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.recentInvoices);
  }
}
var SalesDashboardComponent = class _SalesDashboardComponent {
  constructor(salesService, authService, router) {
    this.salesService = salesService;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.kpis = [];
    this.recentOrders = [];
    this.recentInvoices = [];
    this.orderStats = [];
    this.invoiceStats = [];
  }
  ngOnInit() {
    this.loadDashboard();
  }
  loadDashboard() {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    forkJoin({
      orders: this.salesService.getOrders(companyId),
      invoices: this.salesService.getInvoices(companyId),
      avoirs: this.salesService.getAvoirs(companyId)
    }).subscribe({
      next: ({ orders, invoices, avoirs }) => {
        this.buildKpis(orders, invoices, avoirs);
        this.buildOrderStats(orders);
        this.buildInvoiceStats(invoices);
        this.recentOrders = orders.slice(0, 5);
        this.recentInvoices = invoices.slice(0, 5);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  buildKpis(orders, invoices, avoirs) {
    const totalCA = invoices.filter((i) => i.state === "posted" || i.state === "paid").reduce((s, i) => s + (i.totalTTC || 0), 0);
    const totalEncaisse = invoices.reduce((s, i) => s + (i.montantPaye || 0), 0);
    const totalDu = invoices.filter((i) => i.state === "posted").reduce((s, i) => s + (i.montantDu || 0), 0);
    const totalAvoirs = avoirs.filter((a) => a.state === "posted").reduce((s, a) => s + (a.totalTTC || 0), 0);
    this.kpis = [
      {
        label: "Chiffre d'affaires",
        value: this.formatAmount(totalCA),
        sub: "Factures valid\xE9es + pay\xE9es",
        icon: "trending_up",
        color: "#017E84"
      },
      {
        label: "Encaiss\xE9",
        value: this.formatAmount(totalEncaisse),
        sub: "Total paiements re\xE7us",
        icon: "payments",
        color: "#198754"
      },
      {
        label: "Reste \xE0 encaisser",
        value: this.formatAmount(totalDu),
        sub: "Factures valid\xE9es non sold\xE9es",
        icon: "schedule",
        color: totalDu > 0 ? "#dc3545" : "#6c757d"
      },
      {
        label: "Bons de commande",
        value: orders.length,
        sub: `${orders.filter((o) => o.state === "draft").length} en brouillon`,
        icon: "receipt",
        color: "#0d6efd",
        route: "/sales/orders"
      },
      {
        label: "Factures",
        value: invoices.length,
        sub: `${invoices.filter((i) => i.state === "posted").length} \xE0 encaisser`,
        icon: "description",
        color: "#fd7e14",
        route: "/sales/invoices"
      },
      {
        label: "Avoirs",
        value: avoirs.length,
        sub: this.formatAmount(totalAvoirs) + " \xE9mis",
        icon: "undo",
        color: "#6f42c1",
        route: "/sales/avoirs"
      }
    ];
  }
  buildOrderStats(orders) {
    const count = (state) => orders.filter((o) => o.state === state).length;
    this.orderStats = [
      { label: "Brouillon", count: count("draft"), color: "#6c757d" },
      { label: "Confirm\xE9", count: count("confirmed"), color: "#0d6efd" },
      { label: "Factur\xE9", count: count("invoiced"), color: "#017E84" },
      { label: "Annul\xE9", count: count("cancelled"), color: "#dc3545" }
    ];
  }
  buildInvoiceStats(invoices) {
    const sumTTC = (state) => invoices.filter((i) => i.state === state).reduce((s, i) => s + (i.totalTTC || 0), 0);
    this.invoiceStats = [
      { label: "Brouillon", count: invoices.filter((i) => i.state === "draft").length, amount: sumTTC("draft"), color: "#6c757d" },
      { label: "Valid\xE9e", count: invoices.filter((i) => i.state === "posted").length, amount: sumTTC("posted"), color: "#017E84" },
      { label: "Pay\xE9e", count: invoices.filter((i) => i.state === "paid").length, amount: sumTTC("paid"), color: "#198754" },
      { label: "Annul\xE9e", count: invoices.filter((i) => i.state === "cancelled").length, amount: sumTTC("cancelled"), color: "#dc3545" }
    ];
  }
  formatAmount(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n)) + " FCFA";
  }
  getStateBadge(state, type = "invoice") {
    const map = {
      draft: "badge-draft",
      confirmed: "badge-confirmed",
      invoiced: "badge-invoiced",
      posted: "badge-posted",
      paid: "badge-paid",
      cancelled: "badge-cancelled"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      invoiced: "Factur\xE9",
      posted: "Valid\xE9e",
      paid: "Pay\xE9e",
      cancelled: "Annul\xE9/e"
    };
    return map[state] || state;
  }
  navigateTo(route) {
    if (route)
      this.router.navigate([route]);
  }
  goToOrder(id) {
    if (id)
      this.router.navigate(["/sales/orders", id]);
  }
  goToInvoice(id) {
    if (id)
      this.router.navigate(["/sales/invoices", id]);
  }
  static {
    this.\u0275fac = function SalesDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalesDashboardComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesDashboardComponent, selectors: [["app-sales-dashboard"]], decls: 47, vars: 5, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], ["title", "Actualiser", 1, "btn-refresh", 3, "click"], [1, "loading-overlay"], [1, "kpi-grid"], [1, "kpi-card", 3, "clickable"], [1, "stats-row"], [1, "card", "stats-card"], [1, "card-header"], [1, "stats-list"], [1, "stat-item"], [1, "activity-row"], [1, "card", "activity-card"], [1, "btn-link", 3, "click"], [1, "empty-activity"], [1, "mini-table"], [1, "material-icons", "spin"], [1, "kpi-card", 3, "click"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-sub"], [1, "material-icons", "kpi-arrow"], [1, "stat-dot"], [1, "stat-label"], [1, "stat-count"], [1, "stat-right"], [1, "stat-amount"], [1, "text-right"], [1, "clickable-row"], [1, "clickable-row", 3, "click"], [1, "font-mono"], [1, "text-right", "font-bold"]], template: function SalesDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "dashboard");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(5, " Tableau de bord \u2014 Ventes ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "button", 4);
        \u0275\u0275domListener("click", function SalesDashboardComponent_Template_button_click_6_listener() {
          return ctx.loadDashboard();
        });
        \u0275\u0275domElementStart(7, "span", 3);
        \u0275\u0275text(8, "refresh");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(9, SalesDashboardComponent_Conditional_9_Template, 4, 0, "div", 5);
        \u0275\u0275domElementStart(10, "div", 6);
        \u0275\u0275repeaterCreate(11, SalesDashboardComponent_For_12_Template, 11, 13, "div", 7, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "span", 3);
        \u0275\u0275text(17, "receipt");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(18, " Bons de commande par statut ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(19, "div", 11);
        \u0275\u0275repeaterCreate(20, SalesDashboardComponent_For_21_Template, 6, 6, "div", 12, _forTrack0);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(22, "div", 9)(23, "div", 10)(24, "span", 3);
        \u0275\u0275text(25, "description");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(26, " Factures par statut ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(27, "div", 11);
        \u0275\u0275repeaterCreate(28, SalesDashboardComponent_For_29_Template, 8, 7, "div", 12, _forTrack0);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(30, "div", 13)(31, "div", 14)(32, "div", 10)(33, "span");
        \u0275\u0275text(34, "Derniers bons de commande");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(35, "button", 15);
        \u0275\u0275domListener("click", function SalesDashboardComponent_Template_button_click_35_listener() {
          return ctx.navigateTo("/sales/orders");
        });
        \u0275\u0275text(36, "Voir tout");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(37, SalesDashboardComponent_Conditional_37_Template, 2, 0, "div", 16)(38, SalesDashboardComponent_Conditional_38_Template, 14, 0, "table", 17);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(39, "div", 14)(40, "div", 10)(41, "span");
        \u0275\u0275text(42, "Derni\xE8res factures");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(43, "button", 15);
        \u0275\u0275domListener("click", function SalesDashboardComponent_Template_button_click_43_listener() {
          return ctx.navigateTo("/sales/invoices");
        });
        \u0275\u0275text(44, "Voir tout");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(45, SalesDashboardComponent_Conditional_45_Template, 2, 0, "div", 16)(46, SalesDashboardComponent_Conditional_46_Template, 16, 0, "table", 17);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("spin", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.kpis);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.orderStats);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.invoiceStats);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.recentOrders.length === 0 ? 37 : 38);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.recentInvoices.length === 0 ? 45 : 46);
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-size: 24px;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background: #f0fafa;\n  color: #017E84;\n}\n.btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  color: #6c757d;\n  font-size: 14px;\n  justify-content: center;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: box-shadow 0.2s;\n}\n.kpi-card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.kpi-card.clickable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #adb5bd;\n  margin-top: 2px;\n}\n.kpi-arrow[_ngcontent-%COMP%] {\n  color: #dee2e6;\n  font-size: 20px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n  gap: 8px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #017E84;\n}\n.stats-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  border-bottom: 1px solid #f8f8f8;\n}\n.stat-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.stat-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.stat-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  color: #495057;\n}\n.stat-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.stat-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  min-width: 30px;\n  text-align: right;\n}\n.stat-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  font-family: monospace;\n}\n.activity-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #017E84;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  padding: 0;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.empty-activity[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.mini-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.mini-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.mini-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #212529;\n  border-bottom: 1px solid #f5f5f5;\n}\n.mini-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mini-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.mini-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.badge.badge-invoiced[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n@media (max-width: 1100px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats-row[_ngcontent-%COMP%], \n   .activity-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=sales-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-sales-dashboard", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">dashboard</span>
      Tableau de bord \u2014 Ventes
    </h1>
    <button class="btn-refresh" (click)="loadDashboard()" title="Actualiser">
      <span class="material-icons" [class.spin]="loading">refresh</span>
    </button>
  </div>

  @if (loading) {
    <div class="loading-overlay">
      <span class="material-icons spin">refresh</span> Chargement...
    </div>
  }

  <!-- KPI Cards -->
  <div class="kpi-grid">
    @for (kpi of kpis; track kpi.label) {
      <div class="kpi-card" [class.clickable]="!!kpi.route" (click)="navigateTo(kpi.route)">
        <div class="kpi-icon" [style.background]="kpi.color + '18'" [style.color]="kpi.color">
          <span class="material-icons">{{ kpi.icon }}</span>
        </div>
        <div class="kpi-body">
          <div class="kpi-value" [style.color]="kpi.color">{{ kpi.value }}</div>
          <div class="kpi-label">{{ kpi.label }}</div>
          @if (kpi.sub) { <div class="kpi-sub">{{ kpi.sub }}</div> }
        </div>
        @if (kpi.route) {
          <span class="material-icons kpi-arrow">chevron_right</span>
        }
      </div>
    }
  </div>

  <!-- Stats bons & factures -->
  <div class="stats-row">
    <!-- Bons de commande par statut -->
    <div class="card stats-card">
      <div class="card-header">
        <span class="material-icons">receipt</span>
        Bons de commande par statut
      </div>
      <div class="stats-list">
        @for (s of orderStats; track s.label) {
          <div class="stat-item">
            <div class="stat-dot" [style.background]="s.color"></div>
            <span class="stat-label">{{ s.label }}</span>
            <span class="stat-count" [style.color]="s.color">{{ s.count }}</span>
          </div>
        }
      </div>
    </div>

    <!-- Factures par statut -->
    <div class="card stats-card">
      <div class="card-header">
        <span class="material-icons">description</span>
        Factures par statut
      </div>
      <div class="stats-list">
        @for (s of invoiceStats; track s.label) {
          <div class="stat-item">
            <div class="stat-dot" [style.background]="s.color"></div>
            <span class="stat-label">{{ s.label }}</span>
            <div class="stat-right">
              <span class="stat-count" [style.color]="s.color">{{ s.count }}</span>
              @if (s.amount > 0) {
                <span class="stat-amount">{{ s.amount | number:'1.0-0' }} F</span>
              }
            </div>
          </div>
        }
      </div>
    </div>
  </div>

  <!-- Derni\xE8res activit\xE9s -->
  <div class="activity-row">
    <!-- Derniers bons -->
    <div class="card activity-card">
      <div class="card-header">
        <span>Derniers bons de commande</span>
        <button class="btn-link" (click)="navigateTo('/sales/orders')">Voir tout</button>
      </div>
      @if (recentOrders.length === 0) {
        <div class="empty-activity">Aucun bon de commande</div>
      } @else {
        <table class="mini-table">
          <thead>
            <tr><th>Num\xE9ro</th><th>Client</th><th class="text-right">TTC</th><th>Statut</th></tr>
          </thead>
          <tbody>
            @for (o of recentOrders; track o.id) {
              <tr class="clickable-row" (click)="goToOrder(o.id)">
                <td class="font-mono">{{ o.name }}</td>
                <td>{{ o.partnerName }}</td>
                <td class="text-right font-bold">{{ o.totalTTC | number:'1.0-0' }}</td>
                <td><span [class]="getStateBadge(o.state || '')">{{ getStateLabel(o.state || '') }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>

    <!-- Derni\xE8res factures -->
    <div class="card activity-card">
      <div class="card-header">
        <span>Derni\xE8res factures</span>
        <button class="btn-link" (click)="navigateTo('/sales/invoices')">Voir tout</button>
      </div>
      @if (recentInvoices.length === 0) {
        <div class="empty-activity">Aucune facture</div>
      } @else {
        <table class="mini-table">
          <thead>
            <tr><th>Num\xE9ro</th><th>Client</th><th class="text-right">TTC</th><th class="text-right">Reste</th><th>Statut</th></tr>
          </thead>
          <tbody>
            @for (inv of recentInvoices; track inv.id) {
              <tr class="clickable-row" (click)="goToInvoice(inv.id)">
                <td class="font-mono">{{ inv.name }}</td>
                <td>{{ inv.partnerName }}</td>
                <td class="text-right font-bold">{{ inv.totalTTC | number:'1.0-0' }}</td>
                <td class="text-right" [class.text-danger]="(inv.montantDu || 0) > 0">
                  {{ inv.montantDu | number:'1.0-0' }}
                </td>
                <td><span [class]="getStateBadge(inv.state || '')">{{ getStateLabel(inv.state || '') }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  </div>
</div>
`, styles: ['/* src/app/modules/sales/components/dashboard/sales-dashboard.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #017E84;\n  font-size: 24px;\n}\n.btn-refresh {\n  width: 36px;\n  height: 36px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.btn-refresh:hover {\n  background: #f0fafa;\n  color: #017E84;\n}\n.btn-refresh .material-icons {\n  font-size: 20px;\n}\n.loading-overlay {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  color: #6c757d;\n  font-size: 14px;\n  justify-content: center;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: box-shadow 0.2s;\n}\n.kpi-card.clickable {\n  cursor: pointer;\n}\n.kpi-card.clickable:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.kpi-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-icon .material-icons {\n  font-size: 26px;\n}\n.kpi-body {\n  flex: 1;\n}\n.kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.kpi-label {\n  font-size: 13px;\n  color: #6c757d;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.kpi-sub {\n  font-size: 11px;\n  color: #adb5bd;\n  margin-top: 2px;\n}\n.kpi-arrow {\n  color: #dee2e6;\n  font-size: 20px;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n  gap: 8px;\n}\n.card .card-header .material-icons {\n  font-size: 18px;\n  color: #017E84;\n}\n.stats-list {\n  padding: 8px 0;\n}\n.stat-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  border-bottom: 1px solid #f8f8f8;\n}\n.stat-item:last-child {\n  border-bottom: none;\n}\n.stat-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.stat-label {\n  flex: 1;\n  font-size: 14px;\n  color: #495057;\n}\n.stat-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.stat-count {\n  font-size: 18px;\n  font-weight: 700;\n  min-width: 30px;\n  text-align: right;\n}\n.stat-amount {\n  font-size: 12px;\n  color: #6c757d;\n  font-family: monospace;\n}\n.activity-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #017E84;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  padding: 0;\n}\n.btn-link:hover {\n  text-decoration: underline;\n}\n.empty-activity {\n  padding: 32px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.mini-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.mini-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.mini-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #212529;\n  border-bottom: 1px solid #f5f5f5;\n}\n.mini-table tbody tr {\n  cursor: pointer;\n}\n.mini-table tbody tr:hover td {\n  background: #f8f9fa;\n}\n.mini-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-danger {\n  color: #dc3545;\n  font-weight: 600;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-confirmed {\n  background: #cfe2ff;\n  color: #084298;\n}\n.badge.badge-invoiced {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-posted {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-paid {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.badge.badge-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n@media (max-width: 1100px) {\n  .kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats-row,\n  .activity-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=sales-dashboard.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesDashboardComponent, { className: "SalesDashboardComponent", filePath: "src/app/modules/sales/components/dashboard/sales-dashboard.component.ts", lineNumber: 24 });
})();
export {
  SalesDashboardComponent
};
//# sourceMappingURL=chunk-ZEA2NAYB.js.map
