import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
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

// src/app/modules/purchases/components/orders/order-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.id;
function OrderListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg, " ");
  }
}
function OrderListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function OrderListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function OrderListComponent_For_15_Template_button_click_0_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter(f_r4.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.stateFilter === f_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.label);
  }
}
function OrderListComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function OrderListComponent_For_31_Template_button_click_0_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setGroupBy(opt_r6.key));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.groupBy === opt_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r6.label, " ");
  }
}
function OrderListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275text(2, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 4);
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune commande trouv\xE9e.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newOrder());
    });
    \u0275\u0275text(6, "Cr\xE9er une commande");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_Conditional_35_Conditional_20_For_1_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 32);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_20_For_1_Conditional_14_For_1_Template_tr_click_0_listener() {
      const order_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.editOrder(order_r12.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 24);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 24)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 34);
    \u0275\u0275text(24, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r12.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, order_r12.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r12.dateExpected ? \u0275\u0275pipeBind2(11, 12, order_r12.dateExpected, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 15, order_r12.totalHT ?? 0, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 18, order_r12.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.stateBadge(order_r12.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(order_r12.state));
  }
}
function OrderListComponent_Conditional_35_Conditional_20_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderListComponent_Conditional_35_Conditional_20_For_1_Conditional_14_For_1_Template, 25, 21, "tr", 31, _forTrack2);
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.getGroupItems(row_r10.key));
  }
}
function OrderListComponent_Conditional_35_Conditional_20_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 25);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_20_For_1_Template_tr_click_0_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleGroup(row_r10.key));
    });
    \u0275\u0275elementStart(1, "td", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "td")(13, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, OrderListComponent_Conditional_35_Conditional_20_For_1_Conditional_14_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isExpanded(row_r10.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtN(row_r10.totalHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtN(row_r10.totalTTC));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isExpanded(row_r10.key) ? 14 : -1);
  }
}
function OrderListComponent_Conditional_35_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderListComponent_Conditional_35_Conditional_20_For_1_Template, 15, 6, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.groupedRows);
  }
}
function OrderListComponent_Conditional_35_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_21_For_1_Template_tr_click_0_listener() {
      const order_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editOrder(order_r14.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 24);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 24)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 34);
    \u0275\u0275text(24, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r14.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, order_r14.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r14.dateExpected ? \u0275\u0275pipeBind2(11, 12, order_r14.dateExpected, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 15, order_r14.totalHT ?? 0, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 18, order_r14.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.stateBadge(order_r14.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(order_r14.state));
  }
}
function OrderListComponent_Conditional_35_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderListComponent_Conditional_35_Conditional_21_For_1_Template, 25, 21, "tr", 35, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.filteredOrders);
  }
}
function OrderListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "table", 23)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date livraison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 24);
    \u0275\u0275text(13, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275conditionalCreate(20, OrderListComponent_Conditional_35_Conditional_20_Template, 2, 0)(21, OrderListComponent_Conditional_35_Conditional_21_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275conditional(ctx_r0.groupBy ? 20 : 21);
  }
}
var OrderListComponent = class _OrderListComponent {
  constructor(purchaseService, authService, router) {
    this.purchaseService = purchaseService;
    this.authService = authService;
    this.router = router;
    this.orders = [];
    this.filteredOrders = [];
    this.loading = false;
    this.stateFilter = "all";
    this.dateFrom = "";
    this.dateTo = "";
    this.successMsg = "";
    this.errorMsg = "";
    this.stateFilters = [
      { value: "all", label: "Tous" },
      { value: "draft", label: "Brouillon" },
      { value: "confirmed", label: "Confirm\xE9e" },
      { value: "received", label: "R\xE9ceptionn\xE9e" },
      { value: "cancelled", label: "Annul\xE9e" }
    ];
    this.groupBy = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
    this.groupByOptions = [
      { key: "mois", label: "Mois", icon: "calendar_month" },
      { key: "fournisseur", label: "Fournisseur", icon: "business" },
      { key: "statut", label: "Statut", icon: "label" }
    ];
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.loading = true;
    const cid = this.authService.getCompanyId() ?? 1;
    this.purchaseService.getOrders(cid).subscribe({
      next: (data) => {
        this.orders = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filteredOrders = this.orders.filter((o) => {
      if (this.stateFilter !== "all" && o.state !== this.stateFilter)
        return false;
      if (this.dateFrom && o.date < this.dateFrom)
        return false;
      if (this.dateTo && o.date > this.dateTo)
        return false;
      return true;
    });
  }
  setFilter(state) {
    this.stateFilter = state;
    this.applyFilter();
  }
  clearDateFilter() {
    this.dateFrom = "";
    this.dateTo = "";
    this.applyFilter();
  }
  newOrder() {
    this.router.navigate(["/purchases/orders/new"]);
  }
  editOrder(id) {
    this.router.navigate(["/purchases/orders", id]);
  }
  stateLabel(s) {
    const map = { draft: "Brouillon", confirmed: "Confirm\xE9e", received: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" };
    return map[s ?? ""] ?? s ?? "";
  }
  stateBadge(s) {
    return "badge badge-" + (s ?? "draft");
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  getStateLabel(state) {
    const map = { draft: "Brouillon", confirmed: "Confirm\xE9e", received: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" };
    return map[state] || state;
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const map = /* @__PURE__ */ new Map();
    for (const item of this.filteredOrders) {
      let key, label;
      switch (this.groupBy) {
        case "mois":
          key = (item.date || "").substring(0, 7);
          label = key ? this.fmtMonth(key) : "(Sans date)";
          break;
        case "fournisseur":
          key = label = item.partnerName || "(Sans fournisseur)";
          break;
        case "statut":
          key = item.state || "?";
          label = this.getStateLabel(item.state || "");
          break;
        default:
          key = label = "?";
      }
      if (!map.has(key))
        map.set(key, { key, label, count: 0, totalHT: 0, totalTTC: 0, paye: 0, du: 0, items: [] });
      const g = map.get(key);
      g.count++;
      g.totalHT += item.totalHT || 0;
      g.totalTTC += item.totalTTC || 0;
      g.items.push(item);
    }
    const arr = Array.from(map.values());
    arr.sort((a, b) => a.label.localeCompare(b.label));
    return arr;
  }
  setGroupBy(key) {
    this.groupBy = this.groupBy === key ? "" : key;
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
  getGroupItems(key) {
    return this.groupedRows.find((g) => g.key === key)?.items ?? [];
  }
  fmtMonth(ym) {
    const [y, m] = ym.split("-");
    return new Date(+y, +m - 1, 1).toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
  }
  fmtN(v) {
    return new Intl.NumberFormat("fr-FR").format(v || 0);
  }
  static {
    this.\u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderListComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-purchase-order-list"]], decls: 36, vars: 7, consts: [[1, "pur-list-page"], [1, "page-header"], [1, "subtitle"], [1, "btn-primary", 3, "click"], [1, "material-icons"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "filter-btn", 3, "click"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [1, "loading-state"], [1, "empty-state"], [1, "table-card"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "spinner"], [1, "data-table"], [1, "text-right"], [1, "group-header-row", 3, "click"], ["colspan", "4", 1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "text-right", "group-num"], [1, "detail-row", "row-link"], [1, "detail-row", "row-link", 3, "click"], [1, "ref-link"], [1, "material-icons", "chevron"], [1, "row-link"], [1, "row-link", 3, "click"]], template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Commandes fournisseurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function OrderListComponent_Template_button_click_7_listener() {
          return ctx.newOrder();
        });
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Nouvelle commande ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, OrderListComponent_Conditional_11_Template, 4, 1, "div", 5);
        \u0275\u0275conditionalCreate(12, OrderListComponent_Conditional_12_Template, 6, 1, "div", 6);
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275repeaterCreate(14, OrderListComponent_For_15_Template, 2, 3, "button", 8, _forTrack0);
        \u0275\u0275elementStart(16, "div", 9)(17, "label");
        \u0275\u0275text(18, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_19_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 9)(21, "label");
        \u0275\u0275text(22, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_23_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "button", 11);
        \u0275\u0275listener("click", function OrderListComponent_Template_button_click_24_listener() {
          return ctx.clearDateFilter();
        });
        \u0275\u0275text(25, "Toutes dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 12)(27, "span", 13);
        \u0275\u0275text(28, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 14);
        \u0275\u0275repeaterCreate(30, OrderListComponent_For_31_Template, 4, 4, "button", 15, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(32, OrderListComponent_Conditional_32_Template, 4, 0, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(33, OrderListComponent_Conditional_33_Template, 3, 0, "div", 17)(34, OrderListComponent_Conditional_34_Template, 7, 0, "div", 18)(35, OrderListComponent_Conditional_35_Template, 22, 1, "div", 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.filteredOrders.length, " commande(s)");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.groupByOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.groupBy ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 33 : ctx.filteredOrders.length === 0 ? 34 : 35);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n.pur-list-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-bar[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.filter-bar[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.filter-bar[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n  border-color: #00A09D;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: var(--text-muted);\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--border);\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: var(--bg-hover);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.ref-link[_ngcontent-%COMP%] {\n  color: #00A09D;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.picking-ref[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-received[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-picking-draft[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-picking-done[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-picking-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-action-confirm[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.btn-action-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--success);\n  color: white;\n}\n.btn-action-receive[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.btn-action-receive[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #00A09D;\n  color: white;\n}\n.btn-action-cancel[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-action-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--danger);\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=order-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-order-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="pur-list-page">
  <div class="page-header">
    <div>
      <h1>Commandes fournisseurs</h1>
      <p class="subtitle">{{ filteredOrders.length }} commande(s)</p>
    </div>
    <button class="btn-primary" (click)="newOrder()">
      <span class="material-icons">add</span>
      Nouvelle commande
    </button>
  </div>

  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span>
      {{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-error">
      <span class="material-icons">error</span>
      {{ errorMsg }}
      <button (click)="errorMsg = ''">\xD7</button>
    </div>
  }

  <!-- Filters -->
  <div class="filter-bar">
    @for (f of stateFilters; track f.value) {
      <button class="filter-btn" [class.active]="stateFilter === f.value" (click)="setFilter(f.value)">{{ f.label }}</button>
    }
    <div class="filter-date-group">
      <label>Du</label>
      <input type="date" class="form-control form-control-sm" [(ngModel)]="dateFrom" (ngModelChange)="applyFilter()">
    </div>
    <div class="filter-date-group">
      <label>Au</label>
      <input type="date" class="form-control form-control-sm" [(ngModel)]="dateTo" (ngModelChange)="applyFilter()">
    </div>
    <button class="filter-btn" (click)="clearDateFilter()">Toutes dates</button>
  </div>

  <!-- \u2500\u2500 Regrouper par \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="groupby-bar">
    <span class="groupby-label">Regrouper par :</span>
    <div class="groupby-btns">
      @for (opt of groupByOptions; track opt.key) {
        <button [class.active]="groupBy === opt.key" (click)="setGroupBy(opt.key)">
          <span class="material-icons">{{ opt.icon }}</span> {{ opt.label }}
        </button>
      }
    </div>
    @if (groupBy) {
      <button class="groupby-reset" (click)="setGroupBy('')">
        <span class="material-icons">close</span> Annuler
      </button>
    }
  </div>

  <!-- Table -->
  @if (loading) {
    <div class="loading-state"><span class="spinner"></span> Chargement...</div>
  } @else if (filteredOrders.length === 0) {
    <div class="empty-state">
      <span class="material-icons">shopping_cart</span>
      <p>Aucune commande trouv\xE9e.</p>
      <button class="btn-primary" (click)="newOrder()">Cr\xE9er une commande</button>
    </div>
  } @else {
    <div class="table-card">
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th>
            <th>Fournisseur</th>
            <th>Date</th>
            <th>Date livraison</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @if (groupBy) {
            @for (row of groupedRows; track row.key) {
              <tr class="group-header-row" (click)="toggleGroup(row.key)">
                <td class="group-header-cell" colspan="4">
                  <span class="material-icons expand-icon">{{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}</span>
                  <span class="group-label">{{ row.label }}</span>
                  <span class="badge">{{ row.count }}</span>
                </td>
                <td class="text-right group-num">{{ fmtN(row.totalHT) }}</td>
                <td class="text-right group-num">{{ fmtN(row.totalTTC) }}</td>
                <td></td><td></td>
              </tr>
              @if (isExpanded(row.key)) {
                @for (order of getGroupItems(row.key); track order.id) {
                  <tr class="detail-row row-link" (click)="editOrder(order.id!)">
                    <td><strong class="ref-link">{{ order.name }}</strong></td>
                    <td>{{ order.partnerName }}</td>
                    <td>{{ order.date | date:'dd/MM/yyyy' }}</td>
                    <td>{{ order.dateExpected ? (order.dateExpected | date:'dd/MM/yyyy') : '\u2014' }}</td>
                    <td class="text-right">{{ (order.totalHT ?? 0) | number:'1.0-0' }}</td>
                    <td class="text-right"><strong>{{ (order.totalTTC ?? 0) | number:'1.0-0' }} FCFA</strong></td>
                    <td><span [class]="stateBadge(order.state)">{{ stateLabel(order.state) }}</span></td>
                    <td><span class="material-icons chevron">chevron_right</span></td>
                  </tr>
                }
              }
            }
          } @else {
            @for (order of filteredOrders; track order.id) {
              <tr class="row-link" (click)="editOrder(order.id!)">
                <td><strong class="ref-link">{{ order.name }}</strong></td>
                <td>{{ order.partnerName }}</td>
                <td>{{ order.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ order.dateExpected ? (order.dateExpected | date:'dd/MM/yyyy') : '\u2014' }}</td>
                <td class="text-right">{{ (order.totalHT ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right"><strong>{{ (order.totalTTC ?? 0) | number:'1.0-0' }} FCFA</strong></td>
                <td><span [class]="stateBadge(order.state)">{{ stateLabel(order.state) }}</span></td>
                <td><span class="material-icons chevron">chevron_right</span></td>
              </tr>
            }
          }
        </tbody>
      </table>
    </div>
  }
</div>
`, styles: ["/* src/app/modules/purchases/components/orders/order-list.component.scss */\n.pur-list-page {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .subtitle {\n  color: var(--text-muted);\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: var(--accent);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n}\n.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.alert-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-bar .filter-btn {\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.filter-bar .filter-btn:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.filter-bar .filter-btn.active {\n  background: #00A09D;\n  color: white;\n  border-color: #00A09D;\n}\n.loading-state {\n  text-align: center;\n  padding: 48px;\n  color: var(--text-muted);\n}\n.spinner {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--border);\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n}\n.empty-state .material-icons {\n  font-size: 56px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.table-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table th {\n  padding: 12px 14px;\n  background: var(--bg-hover);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.data-table td {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.data-table .text-right {\n  text-align: right;\n}\n.data-table .row-link {\n  cursor: pointer;\n}\n.data-table .row-link:hover td {\n  background: var(--bg-hover);\n}\n.ref-link {\n  color: #00A09D;\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.picking-ref {\n  font-size: 12px;\n  color: var(--text-secondary);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-confirmed {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-received {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-picking-draft {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-picking-done {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-picking-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-action .material-icons {\n  font-size: 16px;\n}\n.btn-action:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-action-confirm {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.btn-action-confirm:hover:not(:disabled) {\n  background: var(--success);\n  color: white;\n}\n.btn-action-receive {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.btn-action-receive:hover:not(:disabled) {\n  background: #00A09D;\n  color: white;\n}\n.btn-action-cancel {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-action-cancel:hover:not(:disabled) {\n  background: var(--danger);\n  color: white;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=order-list.component.css.map */\n"] }]
  }], () => [{ type: PurchaseService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "app/modules/purchases/components/orders/order-list.component.ts", lineNumber: 15 });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=chunk-XIOOZSI6.js.map
