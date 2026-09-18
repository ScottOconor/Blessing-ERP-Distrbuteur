import {
  StockService
} from "./chunk-LIGNVDFD.js";
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
  ɵɵattribute,
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

// src/app/modules/stock/components/livraisons/livraison-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function LivraisonListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function LivraisonListComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/expeditions/new"]));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouvelle exp\xE9dition ");
    \u0275\u0275elementEnd();
  }
}
function LivraisonListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pendingReceptionCount);
  }
}
function LivraisonListComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function LivraisonListComponent_For_38_Template_button_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setGroupBy(opt_r4.key));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.groupBy === opt_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4.label, " ");
  }
}
function LivraisonListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LivraisonListComponent_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function LivraisonListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 25);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function LivraisonListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "receptions" ? "move_to_inbox" : "local_shipping");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "receptions" ? "Aucune r\xE9ception inter-agences" : "Aucune exp\xE9dition inter-agences");
  }
}
function LivraisonListComponent_Conditional_43_Conditional_19_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33);
    \u0275\u0275listener("click", function LivraisonListComponent_Conditional_43_Conditional_19_For_1_Conditional_8_For_1_Template_tr_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/expeditions", p_r9.id]));
    });
    \u0275\u0275elementStart(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 39);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 40);
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.agenceLabel(p_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.sourceWarehouseName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.destWarehouseName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, p_r9.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r9.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r9.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 11, p_r9.totalValue, "1.0-0"));
  }
}
function LivraisonListComponent_Conditional_43_Conditional_19_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LivraisonListComponent_Conditional_43_Conditional_19_For_1_Conditional_8_For_1_Template, 21, 14, "tr", 32, _forTrack1);
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.getGroupItems(row_r7.key));
  }
}
function LivraisonListComponent_Conditional_43_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 27);
    \u0275\u0275listener("click", function LivraisonListComponent_Conditional_43_Conditional_19_For_1_Template_tr_click_0_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(row_r7.key));
    });
    \u0275\u0275elementStart(1, "td", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, LivraisonListComponent_Conditional_43_Conditional_19_For_1_Conditional_8_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded(row_r7.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.count);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isExpanded(row_r7.key) ? 8 : -1);
  }
}
function LivraisonListComponent_Conditional_43_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LivraisonListComponent_Conditional_43_Conditional_19_For_1_Template, 9, 4, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.groupedRows);
  }
}
function LivraisonListComponent_Conditional_43_Conditional_20_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42);
    \u0275\u0275listener("click", function LivraisonListComponent_Conditional_43_Conditional_20_For_1_Template_tr_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/expeditions", p_r11.id]));
    });
    \u0275\u0275elementStart(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 39);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 40);
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.agenceLabel(p_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.sourceWarehouseName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.destWarehouseName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, p_r11.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r11.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r11.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 11, p_r11.totalValue, "1.0-0"));
  }
}
function LivraisonListComponent_Conditional_43_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LivraisonListComponent_Conditional_43_Conditional_20_For_1_Template, 21, 14, "tr", 41, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.pickings);
  }
}
function LivraisonListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 21)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Entrep\xF4t source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Entrep\xF4t dest.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275conditionalCreate(19, LivraisonListComponent_Conditional_43_Conditional_19_Template, 2, 0)(20, LivraisonListComponent_Conditional_43_Conditional_20_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "receptions" ? "Agence \xE9mettrice" : "Agence destinataire");
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.groupBy ? 19 : 20);
  }
}
var LivraisonListComponent = class _LivraisonListComponent {
  constructor(stockService, authService, router) {
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.allPickings = [];
    this.pickings = [];
    this.loading = false;
    this.dateFrom = "";
    this.dateTo = "";
    this.activeTab = "expeditions";
    this.groupBy = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
    this.groupByOptions = [
      { key: "mois", label: "Mois", icon: "calendar_month" },
      { key: "agence", label: "Agence", icon: "business" },
      { key: "statut", label: "Statut", icon: "label" }
    ];
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }
  load() {
    this.loading = true;
    this.stockService.getInterCompanyExpeditions(this.companyId).subscribe({
      next: (p) => {
        this.allPickings = p;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.pickings = this.allPickings.filter((p) => {
      const isInc = this.isIncoming(p);
      if (this.activeTab === "expeditions" && isInc)
        return false;
      if (this.activeTab === "receptions" && !isInc)
        return false;
      const d = p.scheduledDate?.split("T")[0] ?? "";
      if (this.dateFrom && d < this.dateFrom)
        return false;
      if (this.dateTo && d > this.dateTo)
        return false;
      return true;
    });
  }
  setTab(tab) {
    this.activeTab = tab;
    this.applyFilter();
  }
  get outgoingCount() {
    return this.allPickings.filter((p) => !this.isIncoming(p)).length;
  }
  get incomingCount() {
    return this.allPickings.filter((p) => this.isIncoming(p)).length;
  }
  get pendingReceptionCount() {
    return this.allPickings.filter((p) => this.isIncoming(p) && p.state === "pending_reception").length;
  }
  clearDateFilter() {
    this.dateFrom = "";
    this.dateTo = "";
    this.applyFilter();
  }
  isIncoming(p) {
    return !!p.transferReception;
  }
  agenceLabel(p) {
    if (this.isIncoming(p))
      return p.companyName || p.partnerName || "\u2014";
    return p.remoteAgencyName || p.partnerName || "\u2014";
  }
  stateLabel(s) {
    return { draft: "Brouillon", pending_reception: "En attente de r\xE9ception", done: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" }[s] || s;
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const source = this.pickings;
    const map = /* @__PURE__ */ new Map();
    for (const item of source) {
      let key, label;
      switch (this.groupBy) {
        case "mois":
          key = (item.scheduledDate || "").substring(0, 7);
          label = key ? this.fmtMonth(key) : "(Sans date)";
          break;
        case "agence":
          key = label = this.agenceLabel(item);
          break;
        case "statut":
          key = item.state || "?";
          label = this.stateLabel(key);
          break;
        default:
          key = label = "?";
      }
      if (!map.has(key))
        map.set(key, { key, label, count: 0, items: [] });
      const g = map.get(key);
      g.count++;
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
  static {
    this.\u0275fac = function LivraisonListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LivraisonListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivraisonListComponent, selectors: [["app-livraison-list"]], decls: 44, vars: 14, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "btn-primary"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "tab-count"], [1, "pending-dot"], [1, "filter-bar"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "filter-btn", 3, "click"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [1, "card"], [1, "empty"], [1, "data-table"], [1, "btn-primary", 3, "click"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "group-header-row", 3, "click"], ["colspan", "8", 1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "detail-row", "clickable"], [1, "detail-row", "clickable", 3, "click"], [1, "font-mono", "font-bold", "text-teal"], [1, "font-bold"], [1, "text-muted", "small"], [1, "text-muted"], [1, "state-badge"], [1, "text-right", "font-mono"], [1, "material-icons", "chevron"], [1, "clickable"], [1, "clickable", 3, "click"]], template: function LivraisonListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "swap_horiz");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Exp\xE9ditions inter-agences");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, LivraisonListComponent_Conditional_7_Template, 4, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
        \u0275\u0275listener("click", function LivraisonListComponent_Template_button_click_9_listener() {
          return ctx.setTab("expeditions");
        });
        \u0275\u0275elementStart(10, "span", 4);
        \u0275\u0275text(11, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Exp\xE9ditions ");
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function LivraisonListComponent_Template_button_click_15_listener() {
          return ctx.setTab("receptions");
        });
        \u0275\u0275elementStart(16, "span", 4);
        \u0275\u0275text(17, "move_to_inbox");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " R\xE9ceptions ");
        \u0275\u0275elementStart(19, "span", 8);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, LivraisonListComponent_Conditional_21_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 10)(23, "div", 11)(24, "label");
        \u0275\u0275text(25, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function LivraisonListComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function LivraisonListComponent_Template_input_ngModelChange_26_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 11)(28, "label");
        \u0275\u0275text(29, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function LivraisonListComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function LivraisonListComponent_Template_input_ngModelChange_30_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 13);
        \u0275\u0275listener("click", function LivraisonListComponent_Template_button_click_31_listener() {
          return ctx.clearDateFilter();
        });
        \u0275\u0275text(32, "Toutes dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 14)(34, "span", 15);
        \u0275\u0275text(35, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 16);
        \u0275\u0275repeaterCreate(37, LivraisonListComponent_For_38_Template, 4, 4, "button", 17, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(39, LivraisonListComponent_Conditional_39_Template, 4, 0, "button", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 19);
        \u0275\u0275conditionalCreate(41, LivraisonListComponent_Conditional_41_Template, 5, 0, "div", 20)(42, LivraisonListComponent_Conditional_42_Template, 5, 2, "div", 20)(43, LivraisonListComponent_Conditional_43_Template, 21, 2, "table", 21);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.activeTab === "expeditions" ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "expeditions");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.outgoingCount);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "receptions");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("tab-count-alert", ctx.pendingReceptionCount > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.incomingCount);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.pendingReceptionCount > 0 ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.groupByOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.groupBy ? 39 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 41 : ctx.pickings.length === 0 ? 42 : 43);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid var(--border);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--accent);\n  border-bottom-color: var(--accent);\n  font-weight: 600;\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 10px;\n}\n.tab-count.tab-count-alert[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.pending-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.form-control.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--border);\n  font-size: 18px !important;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=pending_reception][_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.direction-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.direction-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.direction-badge.outgoing[_ngcontent-%COMP%] {\n  background: var(--bg-active);\n  color: #0a5ea8;\n}\n.direction-badge.incoming[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n/*# sourceMappingURL=livraison-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivraisonListComponent, [{
    type: Component,
    args: [{ selector: "app-livraison-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title"><span class="material-icons">swap_horiz</span> Exp\xE9ditions inter-agences</h1>
    </div>
    @if (activeTab === 'expeditions') {
      <button class="btn-primary" (click)="router.navigate(['/stock/expeditions/new'])">
        <span class="material-icons">add</span> Nouvelle exp\xE9dition
      </button>
    }
  </div>

  <div class="tabs-bar">
    <button class="tab-btn" [class.active]="activeTab === 'expeditions'" (click)="setTab('expeditions')">
      <span class="material-icons">local_shipping</span>
      Exp\xE9ditions
      <span class="tab-count">{{ outgoingCount }}</span>
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'receptions'" (click)="setTab('receptions')">
      <span class="material-icons">move_to_inbox</span>
      R\xE9ceptions
      <span class="tab-count" [class.tab-count-alert]="pendingReceptionCount > 0">{{ incomingCount }}</span>
      @if (pendingReceptionCount > 0) {
        <span class="pending-dot">{{ pendingReceptionCount }}</span>
      }
    </button>
  </div>

  <div class="filter-bar">
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

  <div class="card">
    @if (loading) {
      <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
    } @else if (pickings.length === 0) {
      <div class="empty">
        <span class="material-icons">{{ activeTab === 'receptions' ? 'move_to_inbox' : 'local_shipping' }}</span>
        <p>{{ activeTab === 'receptions' ? 'Aucune r\xE9ception inter-agences' : 'Aucune exp\xE9dition inter-agences' }}</p>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th>
            <th>{{ activeTab === 'receptions' ? 'Agence \xE9mettrice' : 'Agence destinataire' }}</th>
            <th>Entrep\xF4t source</th>
            <th>Entrep\xF4t dest.</th>
            <th>Date planifi\xE9e</th>
            <th>Statut</th>
            <th class="text-right">Valeur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @if (groupBy) {
            @for (row of groupedRows; track row.key) {
              <tr class="group-header-row" (click)="toggleGroup(row.key)">
                <td class="group-header-cell" colspan="8">
                  <span class="material-icons expand-icon">{{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}</span>
                  <span class="group-label">{{ row.label }}</span>
                  <span class="badge">{{ row.count }}</span>
                </td>
              </tr>
              @if (isExpanded(row.key)) {
                @for (p of getGroupItems(row.key); track p.id) {
                  <tr class="detail-row clickable" (click)="router.navigate(['/stock/expeditions', p.id])">
                    <td class="font-mono font-bold text-teal">{{ p.name }}</td>
                    <td class="font-bold">{{ agenceLabel(p) }}</td>
                    <td class="text-muted small">{{ p.sourceWarehouseName || '\u2014' }}</td>
                    <td class="text-muted small">{{ p.destWarehouseName || '\u2014' }}</td>
                    <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                    <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                    <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
                    <td><span class="material-icons chevron">chevron_right</span></td>
                  </tr>
                }
              }
            }
          } @else {
            @for (p of pickings; track p.id) {
              <tr (click)="router.navigate(['/stock/expeditions', p.id])" class="clickable">
                <td class="font-mono font-bold text-teal">{{ p.name }}</td>
                <td class="font-bold">{{ agenceLabel(p) }}</td>
                <td class="text-muted small">{{ p.sourceWarehouseName || '\u2014' }}</td>
                <td class="text-muted small">{{ p.destWarehouseName || '\u2014' }}</td>
                <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
                <td><span class="material-icons chevron">chevron_right</span></td>
              </tr>
            }
          }
        </tbody>
      </table>
    }
  </div>
</div>
`, styles: ['/* src/app/modules/stock/components/livraisons/livraison-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .badge-count {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: var(--accent);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid var(--border);\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 17px;\n}\n.tab-btn:hover {\n  color: var(--accent);\n}\n.tab-btn.active {\n  color: var(--accent);\n  border-bottom-color: var(--accent);\n  font-weight: 600;\n}\n.tab-count {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 10px;\n}\n.tab-count.tab-count-alert {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.pending-dot {\n  background: #f59e0b;\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group label {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--accent);\n}\n.form-control.form-control-sm {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn:hover {\n  background: var(--bg-hover);\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.data-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tr.clickable {\n  cursor: pointer;\n}\n.data-table tr.clickable:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty p {\n  margin: 0;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-teal {\n  color: var(--accent);\n}\n.chevron {\n  color: var(--border);\n  font-size: 18px !important;\n}\n.state-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=pending_reception] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.state-badge[data-state=done] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.state-badge[data-state=cancelled] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.direction-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.direction-badge .material-icons {\n  font-size: 13px;\n}\n.direction-badge.outgoing {\n  background: var(--bg-active);\n  color: #0a5ea8;\n}\n.direction-badge.incoming {\n  background: var(--success-bg);\n  color: var(--success);\n}\n/*# sourceMappingURL=livraison-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivraisonListComponent, { className: "LivraisonListComponent", filePath: "app/modules/stock/components/livraisons/livraison-list.component.ts", lineNumber: 15 });
})();
export {
  LivraisonListComponent
};
//# sourceMappingURL=chunk-QVXIUMWU.js.map
