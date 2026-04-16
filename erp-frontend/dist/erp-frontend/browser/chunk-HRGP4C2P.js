import {
  Router
} from "./chunk-K3VCSIQL.js";
import {
  AccountingService
} from "./chunk-TG7BJABV.js";
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

// src/app/modules/accounting/components/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275domElement(1, "div", 27);
    \u0275\u0275domElementEnd();
  }
}
function DashboardComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "span", 3);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3");
    \u0275\u0275text(4, "Aucune \xE9criture");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6, "Commencez par cr\xE9er votre premi\xE8re \xE9criture comptable.");
    \u0275\u0275domElementEnd()();
  }
}
function DashboardComponent_Conditional_59_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 30);
    \u0275\u0275domListener("click", function DashboardComponent_Conditional_59_For_21_Template_tr_click_0_listener() {
      const move_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/accounting/journal-entries", move_r2.id]));
    });
    \u0275\u0275domElementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 31);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 32);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "td", 33);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "td")(20, "span", 34);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const move_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r2.name || "Brouillon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, move_r2.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r2.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r2.ref || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r2.partnerName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 13, move_r2.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 16, move_r2.totalCredit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + move_r2.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStateLabel(move_r2.state), " ");
  }
}
function DashboardComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "N\xB0 Pi\xE8ce");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Journal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Partenaire");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th", 28);
    \u0275\u0275text(14, "Total D\xE9bit");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th", 28);
    \u0275\u0275text(16, "Total Cr\xE9dit");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "th");
    \u0275\u0275text(18, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, DashboardComponent_Conditional_59_For_21_Template, 22, 19, "tr", 29, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r2.recentMoves);
  }
}
function DashboardComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 35);
    \u0275\u0275domListener("click", function DashboardComponent_For_65_Template_div_click_0_listener() {
      const action_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.router.navigate([action_r5.route]));
    });
    \u0275\u0275domElementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", action_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r5.label);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(router, accountingService, authService) {
    this.router = router;
    this.accountingService = accountingService;
    this.authService = authService;
    this.loading = false;
    this.recentMoves = [];
    this.stats = {
      movesThisMonth: 0,
      journalsCount: 0,
      accountsCount: 0,
      draftCount: 0
    };
    this.quickActions = [
      { label: "Nouvelle \xE9criture", icon: "add_circle", color: "#714B67", route: "/accounting/journal-entries/new" },
      { label: "Plan comptable", icon: "account_tree", color: "#017E84", route: "/accounting/chart-of-accounts" },
      { label: "Journaux", icon: "book", color: "#00A09D", route: "/accounting/journals" },
      { label: "Grand Livre", icon: "menu_book", color: "#F06050", route: "/accounting/grand-livre" },
      { label: "Balance 4 cols", icon: "table_chart", color: "#6c5ce7", route: "/accounting/reports/general-balance-4" },
      { label: "Bilan OHADA", icon: "account_balance", color: "#0984e3", route: "/accounting/reports/balance-sheet" }
    ];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    this.accountingService.getMoves(companyId, { pageSize: 10 }).subscribe({
      next: (moves) => {
        this.recentMoves = moves.slice(0, 10);
        this.stats.movesThisMonth = moves.length;
        this.stats.draftCount = moves.filter((m) => m.state === "draft").length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.accountingService.getJournals(companyId).subscribe({
      next: (j) => this.stats.journalsCount = j.filter((x) => x.active).length,
      error: () => {
      }
    });
    this.accountingService.getAccounts(companyId).subscribe({
      next: (a) => this.stats.accountsCount = a.filter((x) => !x.deprecated).length,
      error: () => {
      }
    });
  }
  getStateLabel(state) {
    const map = { draft: "Brouillon", posted: "Valid\xE9", cancel: "Annul\xE9" };
    return map[state || ""] || state || "";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 66, vars: 5, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "primary"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "secondary"], [1, "stat-icon", "success"], [1, "stat-icon", "warning"], [1, "card"], [1, "card-header"], [1, "material-icons", 2, "font-size", "18px", "color", "#714B67", "margin-right", "6px"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "card-body", 2, "padding", "0"], [2, "text-align", "center", "padding", "40px"], [1, "empty-state"], [1, "table-erp"], [1, "quick-actions", "mt-4"], [1, "mb-3"], [1, "quick-grid"], [1, "quick-card"], [1, "spinner"], [1, "text-right"], [2, "cursor", "pointer"], [2, "cursor", "pointer", 3, "click"], [1, "text-muted"], [1, "text-right", "amount-debit"], [1, "text-right", "amount-credit"], [1, "badge"], [1, "quick-card", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "dashboard");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(5, " Tableau de bord ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275domListener("click", function DashboardComponent_Template_button_click_7_listener() {
          return ctx.router.navigate(["/accounting/journal-entries/new"]);
        });
        \u0275\u0275domElementStart(8, "span", 3);
        \u0275\u0275text(9, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(10, " Nouvelle \xE9criture ");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "span", 3);
        \u0275\u0275text(15, "receipt_long");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(16, "div", 9)(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(19, "div", 11);
        \u0275\u0275text(20, "\xC9critures ce mois");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(21, "div", 7)(22, "div", 12)(23, "span", 3);
        \u0275\u0275text(24, "book");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(25, "div", 9)(26, "div", 10);
        \u0275\u0275text(27);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(28, "div", 11);
        \u0275\u0275text(29, "Journaux actifs");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(30, "div", 7)(31, "div", 13)(32, "span", 3);
        \u0275\u0275text(33, "account_tree");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(34, "div", 9)(35, "div", 10);
        \u0275\u0275text(36);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(37, "div", 11);
        \u0275\u0275text(38, "Comptes actifs");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(39, "div", 7)(40, "div", 14)(41, "span", 3);
        \u0275\u0275text(42, "pending_actions");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(43, "div", 9)(44, "div", 10);
        \u0275\u0275text(45);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(46, "div", 11);
        \u0275\u0275text(47, "Brouillons en attente");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(48, "div", 15)(49, "div", 16)(50, "h3")(51, "span", 17);
        \u0275\u0275text(52, "history");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(53, " Derni\xE8res \xE9critures ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(54, "button", 18);
        \u0275\u0275domListener("click", function DashboardComponent_Template_button_click_54_listener() {
          return ctx.router.navigate(["/accounting/journal-entries"]);
        });
        \u0275\u0275text(55, " Voir tout ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(56, "div", 19);
        \u0275\u0275conditionalCreate(57, DashboardComponent_Conditional_57_Template, 2, 0, "div", 20)(58, DashboardComponent_Conditional_58_Template, 7, 0, "div", 21)(59, DashboardComponent_Conditional_59_Template, 22, 0, "table", 22);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(60, "div", 23)(61, "h3", 24);
        \u0275\u0275text(62, "Acc\xE8s rapides");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(63, "div", 25);
        \u0275\u0275repeaterCreate(64, DashboardComponent_For_65_Template, 5, 4, "div", 26, _forTrack0);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.stats.movesThisMonth);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.stats.journalsCount);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.stats.accountsCount);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.stats.draftCount);
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.loading ? 57 : ctx.recentMoves.length === 0 ? 58 : 59);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.quickActions);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ["\n.quick-actions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #495057;\n}\n.quick-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 12px;\n}\n.quick-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.quick-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.quick-card[_ngcontent-%COMP%]:hover {\n  border-color: #714B67;\n  color: #714B67;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule], template: `
<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">dashboard</span>
      Tableau de bord
    </h1>
    <div class="page-actions">
      <button class="btn btn-primary" (click)="router.navigate(['/accounting/journal-entries/new'])">
        <span class="material-icons">add</span>
        Nouvelle \xE9criture
      </button>
    </div>
  </div>

  <!-- STATS -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon primary">
        <span class="material-icons">receipt_long</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.movesThisMonth }}</div>
        <div class="stat-label">\xC9critures ce mois</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon secondary">
        <span class="material-icons">book</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.journalsCount }}</div>
        <div class="stat-label">Journaux actifs</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon success">
        <span class="material-icons">account_tree</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.accountsCount }}</div>
        <div class="stat-label">Comptes actifs</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon warning">
        <span class="material-icons">pending_actions</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.draftCount }}</div>
        <div class="stat-label">Brouillons en attente</div>
      </div>
    </div>
  </div>

  <!-- RECENT MOVES -->
  <div class="card">
    <div class="card-header">
      <h3>
        <span class="material-icons" style="font-size:18px;color:#714B67;margin-right:6px;">history</span>
        Derni\xE8res \xE9critures
      </h3>
      <button class="btn btn-outline btn-sm" (click)="router.navigate(['/accounting/journal-entries'])">
        Voir tout
      </button>
    </div>
    <div class="card-body" style="padding:0">
      @if (loading) {
        <div style="text-align:center;padding:40px">
          <div class="spinner"></div>
        </div>
      } @else if (recentMoves.length === 0) {
        <div class="empty-state">
          <span class="material-icons">receipt_long</span>
          <h3>Aucune \xE9criture</h3>
          <p>Commencez par cr\xE9er votre premi\xE8re \xE9criture comptable.</p>
        </div>
      } @else {
        <table class="table-erp">
          <thead>
            <tr>
              <th>N\xB0 Pi\xE8ce</th>
              <th>Date</th>
              <th>Journal</th>
              <th>R\xE9f\xE9rence</th>
              <th>Partenaire</th>
              <th class="text-right">Total D\xE9bit</th>
              <th class="text-right">Total Cr\xE9dit</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            @for (move of recentMoves; track move.id) {
              <tr (click)="router.navigate(['/accounting/journal-entries', move.id])" style="cursor:pointer">
                <td><strong>{{ move.name || 'Brouillon' }}</strong></td>
                <td>{{ move.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ move.journalName }}</td>
                <td class="text-muted">{{ move.ref || '-' }}</td>
                <td>{{ move.partnerName || '-' }}</td>
                <td class="text-right amount-debit">{{ move.totalDebit | number:'1.2-2' }}</td>
                <td class="text-right amount-credit">{{ move.totalCredit | number:'1.2-2' }}</td>
                <td>
                  <span class="badge" [class]="'badge-' + move.state">
                    {{ getStateLabel(move.state) }}
                  </span>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  </div>

  <!-- QUICK ACTIONS -->
  <div class="quick-actions mt-4">
    <h3 class="mb-3">Acc\xE8s rapides</h3>
    <div class="quick-grid">
      @for (action of quickActions; track action.label) {
        <div class="quick-card" (click)="router.navigate([action.route])">
          <span class="material-icons" [style.color]="action.color">{{ action.icon }}</span>
          <span>{{ action.label }}</span>
        </div>
      }
    </div>
  </div>
</div>
  `, styles: ["/* angular:styles/component:scss;b6c71f6e92a285f8e4ebdc4824b3e3d007341962670024c1b2be814fbd38fcdd;C:/Users/K.I.T/OneDrive/Documents/ERP/erp-frontend/src/app/modules/accounting/components/dashboard/dashboard.component.ts */\n.quick-actions h3 {\n  font-size: 16px;\n  color: #495057;\n}\n.quick-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 12px;\n}\n.quick-card {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.quick-card .material-icons {\n  font-size: 24px;\n}\n.quick-card:hover {\n  border-color: #714B67;\n  color: #714B67;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AccountingService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/modules/accounting/components/dashboard/dashboard.component.ts", lineNumber: 165 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-HRGP4C2P.js.map
