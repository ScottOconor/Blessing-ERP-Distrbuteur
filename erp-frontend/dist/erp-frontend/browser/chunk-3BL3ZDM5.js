import {
  PurchaseService
} from "./chunk-J47TS3XK.js";
import {
  Router,
  RouterLink
} from "./chunk-K3VCSIQL.js";
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
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/purchases/components/dashboard/purchase-dashboard.component.ts
var _c0 = (a0) => ["/purchases/orders", a0];
var _forTrack0 = ($index, $item) => $item.id;
function PurchaseDashboardComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 4);
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune commande. ");
    \u0275\u0275elementStart(5, "a", 19);
    \u0275\u0275listener("click", function PurchaseDashboardComponent_Conditional_50_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newOrder());
    });
    \u0275\u0275text(6, "Cr\xE9er la premi\xE8re");
    \u0275\u0275elementEnd()()();
  }
}
function PurchaseDashboardComponent_Conditional_51_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 20)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 21);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, o_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, o_r3.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 11, o_r3.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + o_r3.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(o_r3.state));
  }
}
function PurchaseDashboardComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 18)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, PurchaseDashboardComponent_Conditional_51_For_15_Template, 15, 16, "tr", 20, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.recentOrders);
  }
}
var PurchaseDashboardComponent = class _PurchaseDashboardComponent {
  get totalOrders() {
    return this.orders.length;
  }
  get draftOrders() {
    return this.orders.filter((o) => o.state === "draft").length;
  }
  get confirmedOrders() {
    return this.orders.filter((o) => o.state === "confirmed").length;
  }
  get receivedOrders() {
    return this.orders.filter((o) => o.state === "received").length;
  }
  get recentOrders() {
    return this.orders.slice(0, 5);
  }
  constructor(purchaseService, authService, router) {
    this.purchaseService = purchaseService;
    this.authService = authService;
    this.router = router;
    this.orders = [];
    this.companyId = 1;
  }
  ngOnInit() {
    const cid = this.authService.getCompanyId();
    if (cid)
      this.companyId = cid;
    this.purchaseService.getOrders(this.companyId).subscribe({
      next: (data) => this.orders = data,
      error: () => {
      }
    });
  }
  newOrder() {
    this.router.navigate(["/purchases/orders/new"]);
  }
  viewOrders() {
    this.router.navigate(["/purchases/orders"]);
  }
  stateLabel(s) {
    const map = { draft: "Brouillon", confirmed: "Confirm\xE9e", received: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" };
    return map[s ?? ""] ?? s ?? "";
  }
  static {
    this.\u0275fac = function PurchaseDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseDashboardComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseDashboardComponent, selectors: [["app-purchase-dashboard"]], decls: 52, vars: 5, consts: [[1, "pur-dashboard"], [1, "page-header"], [1, "subtitle"], [1, "btn-primary", 3, "click"], [1, "material-icons"], [1, "kpi-row"], [1, "kpi-card"], [1, "material-icons", "kpi-icon", "blue"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "material-icons", "kpi-icon", "orange"], [1, "material-icons", "kpi-icon", "teal"], [1, "material-icons", "kpi-icon", "green"], [1, "section-card"], [1, "section-header"], [1, "btn-link", 3, "click"], [1, "empty-state"], [1, "data-table"], [3, "click"], [1, "row-link", 3, "routerLink"], [1, "text-right"], [1, "badge"]], template: function PurchaseDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Tableau de bord Achats");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Vue d'ensemble de vos commandes fournisseurs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function PurchaseDashboardComponent_Template_button_click_7_listener() {
          return ctx.newOrder();
        });
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Nouvelle commande ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "span", 7);
        \u0275\u0275text(14, "shopping_cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275text(19, "Total commandes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 6)(21, "span", 11);
        \u0275\u0275text(22, "pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 8)(24, "div", 9);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 10);
        \u0275\u0275text(27, "Brouillons");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 6)(29, "span", 12);
        \u0275\u0275text(30, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 8)(32, "div", 9);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 10);
        \u0275\u0275text(35, "Confirm\xE9es");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 6)(37, "span", 13);
        \u0275\u0275text(38, "inventory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 8)(40, "div", 9);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 10);
        \u0275\u0275text(43, "R\xE9ceptionn\xE9es");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(44, "div", 14)(45, "div", 15)(46, "h2");
        \u0275\u0275text(47, "Commandes r\xE9centes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 16);
        \u0275\u0275listener("click", function PurchaseDashboardComponent_Template_button_click_48_listener() {
          return ctx.viewOrders();
        });
        \u0275\u0275text(49, "Voir tout");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(50, PurchaseDashboardComponent_Conditional_50_Template, 7, 0, "div", 17)(51, PurchaseDashboardComponent_Conditional_51_Template, 16, 0, "table", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.totalOrders);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.draftOrders);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.confirmedOrders);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.receivedOrders);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.recentOrders.length === 0 ? 50 : 51);
      }
    }, dependencies: [CommonModule, RouterLink, DecimalPipe, DatePipe], styles: ["\n.pur-dashboard[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #007674;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.kpi-card[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.kpi-card[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  color: #f6822f;\n}\n.kpi-card[_ngcontent-%COMP%]   .teal[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.kpi-card[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #212529;\n  line-height: 1;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 13px;\n  cursor: pointer;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00A09D;\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 8px 12px;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #212529;\n}\n.data-table[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.badge-received[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n/*# sourceMappingURL=purchase-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="pur-dashboard">
  <div class="page-header">
    <div>
      <h1>Tableau de bord Achats</h1>
      <p class="subtitle">Vue d'ensemble de vos commandes fournisseurs</p>
    </div>
    <button class="btn-primary" (click)="newOrder()">
      <span class="material-icons">add</span>
      Nouvelle commande
    </button>
  </div>

  <div class="kpi-row">
    <div class="kpi-card">
      <span class="material-icons kpi-icon blue">shopping_cart</span>
      <div class="kpi-body">
        <div class="kpi-value">{{ totalOrders }}</div>
        <div class="kpi-label">Total commandes</div>
      </div>
    </div>
    <div class="kpi-card">
      <span class="material-icons kpi-icon orange">pending</span>
      <div class="kpi-body">
        <div class="kpi-value">{{ draftOrders }}</div>
        <div class="kpi-label">Brouillons</div>
      </div>
    </div>
    <div class="kpi-card">
      <span class="material-icons kpi-icon teal">check_circle</span>
      <div class="kpi-body">
        <div class="kpi-value">{{ confirmedOrders }}</div>
        <div class="kpi-label">Confirm\xE9es</div>
      </div>
    </div>
    <div class="kpi-card">
      <span class="material-icons kpi-icon green">inventory</span>
      <div class="kpi-body">
        <div class="kpi-value">{{ receivedOrders }}</div>
        <div class="kpi-label">R\xE9ceptionn\xE9es</div>
      </div>
    </div>
  </div>

  <div class="section-card">
    <div class="section-header">
      <h2>Commandes r\xE9centes</h2>
      <button class="btn-link" (click)="viewOrders()">Voir tout</button>
    </div>
    @if (recentOrders.length === 0) {
      <div class="empty-state">
        <span class="material-icons">shopping_cart</span>
        <p>Aucune commande. <a (click)="newOrder()">Cr\xE9er la premi\xE8re</a></p>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th>
            <th>Fournisseur</th>
            <th>Date</th>
            <th>Total TTC</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          @for (o of recentOrders; track o.id) {
            <tr class="row-link" [routerLink]="['/purchases/orders', o.id]">
              <td><strong>{{ o.name }}</strong></td>
              <td>{{ o.partnerName }}</td>
              <td>{{ o.date | date:'dd/MM/yyyy' }}</td>
              <td class="text-right">{{ (o.totalTTC ?? 0) | number:'1.0-0' }} FCFA</td>
              <td><span class="badge" [class]="'badge-' + o.state">{{ stateLabel(o.state) }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>
`, styles: ["/* src/app/modules/purchases/components/dashboard/purchase-dashboard.component.scss */\n.pur-dashboard {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header .subtitle {\n  color: #6c757d;\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #007674;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.kpi-card .kpi-icon {\n  font-size: 36px;\n}\n.kpi-card .blue {\n  color: #2c7be5;\n}\n.kpi-card .orange {\n  color: #f6822f;\n}\n.kpi-card .teal {\n  color: #00A09D;\n}\n.kpi-card .green {\n  color: #28a745;\n}\n.kpi-card .kpi-value {\n  font-size: 28px;\n  font-weight: 700;\n  color: #212529;\n  line-height: 1;\n}\n.kpi-card .kpi-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.section-card {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-header h2 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 13px;\n  cursor: pointer;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #6c757d;\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.3;\n}\n.empty-state a {\n  color: #00A09D;\n  cursor: pointer;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table th {\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 8px 12px;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 12px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #212529;\n}\n.data-table .text-right {\n  text-align: right;\n}\n.data-table .row-link {\n  cursor: pointer;\n}\n.data-table .row-link:hover td {\n  background: #f8f9fa;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-confirmed {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.badge-received {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-cancelled {\n  background: #f8d7da;\n  color: #842029;\n}\n/*# sourceMappingURL=purchase-dashboard.component.css.map */\n"] }]
  }], () => [{ type: PurchaseService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseDashboardComponent, { className: "PurchaseDashboardComponent", filePath: "src/app/modules/purchases/components/dashboard/purchase-dashboard.component.ts", lineNumber: 14 });
})();
export {
  PurchaseDashboardComponent
};
//# sourceMappingURL=chunk-3BL3ZDM5.js.map
