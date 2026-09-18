import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  AccountingService
} from "./chunk-PGZXUWCB.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  TitleCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275domElement(1, "div", 27);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275domElementEnd()();
  }
}
function DashboardComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 23)(1, "span", 4);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune \xE9criture. Commencez par cr\xE9er votre premi\xE8re \xE9criture comptable.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 28);
    \u0275\u0275domListener("click", function DashboardComponent_Conditional_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/accounting/journal-entries/new"]));
    });
    \u0275\u0275domElementStart(6, "span", 4);
    \u0275\u0275text(7, "add");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8, " Cr\xE9er une \xE9criture ");
    \u0275\u0275domElementEnd()();
  }
}
function DashboardComponent_Conditional_77_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 31);
    \u0275\u0275domListener("click", function DashboardComponent_Conditional_77_For_20_Template_tr_click_0_listener() {
      const move_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/accounting/journal-entries", move_r4.id]));
    });
    \u0275\u0275domElementStart(1, "td")(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td", 33);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 36);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td")(16, "span", 37);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const move_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r4.name || "Brouillon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, move_r4.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r4.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r4.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (move_r4.totalDebit ?? 0) > 0 ? ctx_r1.fmt(move_r4.totalDebit ?? 0) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (move_r4.totalCredit ?? 0) > 0 ? ctx_r1.fmt(move_r4.totalCredit ?? 0) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("state-" + move_r4.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStateLabel(move_r4.state), " ");
  }
}
function DashboardComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24)(1, "table", 29)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "N\xB0 Pi\xE8ce");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Journal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 30);
    \u0275\u0275text(13, "D\xE9bit");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th", 30);
    \u0275\u0275text(15, "Cr\xE9dit");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, DashboardComponent_Conditional_77_For_20_Template, 18, 12, "tr", null, _forTrack1);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.recentMoves);
  }
}
function DashboardComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 38);
    \u0275\u0275domListener("click", function DashboardComponent_For_86_Template_div_click_0_listener() {
      const action_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate([action_r6.route]));
    });
    \u0275\u0275domElementStart(1, "div", 39)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 41);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", action_r6.color + "18");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", action_r6.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r6.label);
  }
}
var DashboardComponent = class _DashboardComponent {
  get companyName() {
    return this.authService.getActiveCompany()?.name ?? "";
  }
  get currentMonthLabel() {
    return this.today.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }
  constructor(router, accountingService, authService) {
    this.router = router;
    this.accountingService = accountingService;
    this.authService = authService;
    this.loading = false;
    this.today = /* @__PURE__ */ new Date();
    this.recentMoves = [];
    this.stats = {
      postedCount: 0,
      draftCount: 0,
      journalsCount: 0,
      accountsCount: 0,
      totalDebit: 0,
      totalCredit: 0
    };
    this.quickActions = [
      { label: "Nouvelle \xE9criture", icon: "add_circle", color: "#2563eb", route: "/accounting/journal-entries/new" },
      { label: "Toutes les \xE9critures", icon: "receipt_long", color: "#374151", route: "/accounting/journal-entries" },
      { label: "Plan comptable", icon: "account_tree", color: "#0891b2", route: "/accounting/chart-of-accounts" },
      { label: "Journaux", icon: "book", color: "#059669", route: "/accounting/journals" },
      { label: "Grand Livre Comptes", icon: "menu_book", color: "#7c3aed", route: "/accounting/grand-livre" },
      { label: "Grand Livre Tiers", icon: "people", color: "#db2777", route: "/accounting/grand-livre-tiers" },
      { label: "Balance 4 colonnes", icon: "table_chart", color: "#d97706", route: "/accounting/reports/general-balance-4" },
      { label: "Balance 6 colonnes", icon: "table_chart", color: "#2563eb", route: "/accounting/reports/general-balance-6" },
      { label: "Balance Tiers 4 col", icon: "people_outline", color: "#16a34a", route: "/accounting/reports/partner-balance-4" },
      { label: "Balance Tiers 6 col", icon: "people_outline", color: "#be185d", route: "/accounting/reports/partner-balance-6" },
      { label: "Bilan OHADA", icon: "account_balance", color: "#dc2626", route: "/accounting/reports/balance-sheet" },
      { label: "Compte de R\xE9sultat", icon: "trending_up", color: "#0284c7", route: "/accounting/reports/profit-loss" },
      { label: "Balance Analytique", icon: "analytics", color: "#7c3aed", route: "/accounting/analytic/report" },
      { label: "Comptes Analytiques", icon: "account_tree", color: "#64748b", route: "/accounting/analytic/accounts" }
    ];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.accountingService.getMoves(cid, { pageSize: 50 }).subscribe({
      next: (moves) => {
        this.recentMoves = moves.slice(0, 12);
        const posted = moves.filter((m) => m.state === "posted");
        this.stats.postedCount = posted.length;
        this.stats.draftCount = moves.filter((m) => m.state === "draft").length;
        this.stats.totalDebit = posted.reduce((s, m) => s + (m.totalDebit ?? 0), 0);
        this.stats.totalCredit = posted.reduce((s, m) => s + (m.totalCredit ?? 0), 0);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.accountingService.getJournals(cid).subscribe({
      next: (j) => this.stats.journalsCount = j.filter((x) => x.active).length,
      error: () => {
      }
    });
    this.accountingService.getAccounts(cid).subscribe({
      next: (a) => this.stats.accountsCount = a.filter((x) => !x.deprecated).length,
      error: () => {
      }
    });
  }
  getStateLabel(state) {
    const map = { draft: "Brouillon", posted: "Valid\xE9", cancel: "Annul\xE9" };
    return map[state ?? ""] ?? state ?? "";
  }
  fmt(v) {
    return (v ?? 0).toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 87, vars: 9, consts: [[1, "dash-container"], [1, "dash-header"], [1, "dash-header-left"], [1, "dash-icon-wrap"], [1, "material-icons"], [1, "dash-title"], [1, "dash-sub"], [1, "btn-new", 3, "click"], [1, "kpi-grid"], [1, "kpi-card", "kpi-blue"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-bg-icon"], [1, "kpi-card", "kpi-orange"], [1, "kpi-card", "kpi-green"], [1, "kpi-card", "kpi-purple"], [1, "section-card"], [1, "section-header"], [1, "section-title"], [1, "btn-see-all", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "table-wrap"], [1, "quick-grid"], [1, "quick-card"], [1, "spinner-ring"], [1, "btn-new-sm", 3, "click"], [1, "move-table"], [1, "r"], [3, "click"], [1, "piece-num"], [1, "date-col"], [1, "text-muted"], [1, "r", "debit-val"], [1, "r", "credit-val"], [1, "state-badge"], [1, "quick-card", 3, "click"], [1, "quick-icon-wrap"], [1, "quick-label"], [1, "material-icons", "quick-arrow"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "account_balance");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(6, "div")(7, "h1", 5);
        \u0275\u0275text(8, "Tableau de Bord Comptable");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "p", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "titlecase");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(12, "button", 7);
        \u0275\u0275domListener("click", function DashboardComponent_Template_button_click_12_listener() {
          return ctx.router.navigate(["/accounting/journal-entries/new"]);
        });
        \u0275\u0275domElementStart(13, "span", 4);
        \u0275\u0275text(14, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(15, " Nouvelle \xE9criture ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(16, "div", 8)(17, "div", 9)(18, "div", 10)(19, "span", 4);
        \u0275\u0275text(20, "check_circle");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(21, "div", 11)(22, "div", 12);
        \u0275\u0275text(23);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(24, "div", 13);
        \u0275\u0275text(25, "\xC9critures valid\xE9es");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(26, "div", 14)(27, "span", 4);
        \u0275\u0275text(28, "check_circle");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(29, "div", 15)(30, "div", 10)(31, "span", 4);
        \u0275\u0275text(32, "pending_actions");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(33, "div", 11)(34, "div", 12);
        \u0275\u0275text(35);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(36, "div", 13);
        \u0275\u0275text(37, "Brouillons en attente");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(38, "div", 14)(39, "span", 4);
        \u0275\u0275text(40, "pending_actions");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(41, "div", 16)(42, "div", 10)(43, "span", 4);
        \u0275\u0275text(44, "book");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(45, "div", 11)(46, "div", 12);
        \u0275\u0275text(47);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(48, "div", 13);
        \u0275\u0275text(49, "Journaux actifs");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(50, "div", 14)(51, "span", 4);
        \u0275\u0275text(52, "book");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(53, "div", 17)(54, "div", 10)(55, "span", 4);
        \u0275\u0275text(56, "account_tree");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(57, "div", 11)(58, "div", 12);
        \u0275\u0275text(59);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(60, "div", 13);
        \u0275\u0275text(61, "Comptes actifs");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(62, "div", 14)(63, "span", 4);
        \u0275\u0275text(64, "account_tree");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(65, "div", 18)(66, "div", 19)(67, "div", 20)(68, "span", 4);
        \u0275\u0275text(69, "history");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(70, " Derni\xE8res \xE9critures ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(71, "button", 21);
        \u0275\u0275domListener("click", function DashboardComponent_Template_button_click_71_listener() {
          return ctx.router.navigate(["/accounting/journal-entries"]);
        });
        \u0275\u0275text(72, " Voir tout ");
        \u0275\u0275domElementStart(73, "span", 4);
        \u0275\u0275text(74, "arrow_forward");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(75, DashboardComponent_Conditional_75_Template, 4, 0, "div", 22)(76, DashboardComponent_Conditional_76_Template, 9, 0, "div", 23)(77, DashboardComponent_Conditional_77_Template, 21, 0, "div", 24);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(78, "div", 18)(79, "div", 19)(80, "div", 20)(81, "span", 4);
        \u0275\u0275text(82, "bolt");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(83, " Acc\xE8s rapides ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(84, "div", 25);
        \u0275\u0275repeaterCreate(85, DashboardComponent_For_86_Template, 8, 6, "div", 26, _forTrack0);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate2("", ctx.companyName, " \xB7 ", \u0275\u0275pipeBind1(11, 7, ctx.currentMonthLabel));
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.stats.postedCount);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats.draftCount);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats.journalsCount);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats.accountsCount);
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.loading ? 75 : ctx.recentMoves.length === 0 ? 76 : 77);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.quickActions);
      }
    }, dependencies: [CommonModule, TitleCasePipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.dash-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.dash-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.dash-icon-wrap[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 13px;\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);\n}\n.dash-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: white;\n}\n.dash-title[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.4px;\n}\n.dash-sub[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--ease);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.25);\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  box-shadow: 0 4px 14px rgba(29, 78, 216, 0.35);\n  transform: translateY(-1px);\n}\n.btn-new[_ngcontent-%COMP%]:active {\n  transform: none;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 1100px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kpi-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n  padding: 20px 22px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--shadow-md);\n  color: white;\n}\n.kpi-card.kpi-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1D4ED8,\n      #3B82F6);\n}\n.kpi-card.kpi-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #C2410C,\n      #F97316);\n}\n.kpi-card.kpi-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #047857,\n      #10B981);\n}\n.kpi-card.kpi-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6D28D9,\n      #A78BFA);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .kpi-card.kpi-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1E40AF,\n      #2563EB);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .kpi-card.kpi-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9A3412,\n      #EA580C);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .kpi-card.kpi-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #065F46,\n      #059669);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .kpi-card.kpi-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #5B21B6,\n      #7C3AED);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -1px;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  opacity: 0.82;\n  margin-top: 4px;\n}\n.kpi-bg-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -10px;\n  bottom: -10px;\n}\n.kpi-bg-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 82px;\n  opacity: 0.1;\n  color: white;\n}\n.fin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 700px) {\n  .fin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.fin-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  padding: 20px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 4px solid transparent;\n  position: relative;\n  overflow: hidden;\n}\n.fin-card.fin-debit[_ngcontent-%COMP%] {\n  border-left-color: var(--success);\n}\n.fin-card.fin-credit[_ngcontent-%COMP%] {\n  border-left-color: var(--danger);\n}\n.fin-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.fin-icon[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n}\n.fin-debit[_ngcontent-%COMP%]   .fin-icon[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.fin-credit[_ngcontent-%COMP%]   .fin-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.fin-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 4px;\n}\n.fin-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.5px;\n}\n.fin-currency[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.fin-bar[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 56px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.fin-bar.debit-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      var(--success),\n      rgba(22, 163, 74, 0.3));\n}\n.fin-bar.credit-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      var(--danger),\n      rgba(220, 38, 38, 0.3));\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Inter", sans-serif;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary);\n}\n.btn-see-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--primary);\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: var(--radius-xs);\n  transition: var(--ease);\n}\n.btn-see-all[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-see-all[_ngcontent-%COMP%]:hover {\n  background: var(--primary-subtle);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 52px;\n  color: var(--text-muted);\n  font-size: 13.5px;\n}\n.spinner-ring[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 56px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13.5px;\n  margin: 0 0 16px;\n}\n.btn-new-sm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.btn-new-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-new-sm[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.move-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.move-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.move-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.move-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.move-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.move-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-active);\n}\n.move-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.piece-num[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.date-col[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n  white-space: nowrap;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.debit-val[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 600;\n}\n.credit-val[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.state-badge.state-posted[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.state-badge.state-draft[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.state-badge.state-cancel[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.quick-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1px;\n  background: var(--border-light);\n}\n.quick-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  background: var(--bg-surface);\n  cursor: pointer;\n  transition: var(--ease);\n}\n.quick-card[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.quick-icon-wrap[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.quick-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.quick-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.quick-arrow[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  color: var(--border);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule], template: `<div class="dash-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="dash-header">
    <div class="dash-header-left">
      <div class="dash-icon-wrap">
        <span class="material-icons">account_balance</span>
      </div>
      <div>
        <h1 class="dash-title">Tableau de Bord Comptable</h1>
        <p class="dash-sub">{{ companyName }} \xB7 {{ currentMonthLabel | titlecase }}</p>
      </div>
    </div>
    <button class="btn-new" (click)="router.navigate(['/accounting/journal-entries/new'])">
      <span class="material-icons">add</span>
      Nouvelle \xE9criture
    </button>
  </div>

  <!-- \u2550\u2550 KPI CARDS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="kpi-grid">

    <div class="kpi-card kpi-blue">
      <div class="kpi-icon"><span class="material-icons">check_circle</span></div>
      <div class="kpi-body">
        <div class="kpi-value">{{ stats.postedCount }}</div>
        <div class="kpi-label">\xC9critures valid\xE9es</div>
      </div>
      <div class="kpi-bg-icon"><span class="material-icons">check_circle</span></div>
    </div>

    <div class="kpi-card kpi-orange">
      <div class="kpi-icon"><span class="material-icons">pending_actions</span></div>
      <div class="kpi-body">
        <div class="kpi-value">{{ stats.draftCount }}</div>
        <div class="kpi-label">Brouillons en attente</div>
      </div>
      <div class="kpi-bg-icon"><span class="material-icons">pending_actions</span></div>
    </div>

    <div class="kpi-card kpi-green">
      <div class="kpi-icon"><span class="material-icons">book</span></div>
      <div class="kpi-body">
        <div class="kpi-value">{{ stats.journalsCount }}</div>
        <div class="kpi-label">Journaux actifs</div>
      </div>
      <div class="kpi-bg-icon"><span class="material-icons">book</span></div>
    </div>

    <div class="kpi-card kpi-purple">
      <div class="kpi-icon"><span class="material-icons">account_tree</span></div>
      <div class="kpi-body">
        <div class="kpi-value">{{ stats.accountsCount }}</div>
        <div class="kpi-label">Comptes actifs</div>
      </div>
      <div class="kpi-bg-icon"><span class="material-icons">account_tree</span></div>
    </div>

  </div>

  <!-- \u2550\u2550 DERNI\xC8RES \xC9CRITURES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="section-card">
    <div class="section-header">
      <div class="section-title">
        <span class="material-icons">history</span>
        Derni\xE8res \xE9critures
      </div>
      <button class="btn-see-all" (click)="router.navigate(['/accounting/journal-entries'])">
        Voir tout <span class="material-icons">arrow_forward</span>
      </button>
    </div>

    @if (loading) {
      <div class="loading-state">
        <div class="spinner-ring"></div>
        <span>Chargement\u2026</span>
      </div>
    } @else if (recentMoves.length === 0) {
      <div class="empty-state">
        <span class="material-icons">receipt_long</span>
        <p>Aucune \xE9criture. Commencez par cr\xE9er votre premi\xE8re \xE9criture comptable.</p>
        <button class="btn-new-sm" (click)="router.navigate(['/accounting/journal-entries/new'])">
          <span class="material-icons">add</span> Cr\xE9er une \xE9criture
        </button>
      </div>
    } @else {
      <div class="table-wrap">
        <table class="move-table">
          <thead>
            <tr>
              <th>N\xB0 Pi\xE8ce</th>
              <th>Date</th>
              <th>Journal</th>
              <th>R\xE9f\xE9rence</th>
              <th class="r">D\xE9bit</th>
              <th class="r">Cr\xE9dit</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            @for (move of recentMoves; track move.id) {
              <tr (click)="router.navigate(['/accounting/journal-entries', move.id])">
                <td><span class="piece-num">{{ move.name || 'Brouillon' }}</span></td>
                <td class="date-col">{{ move.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ move.journalName }}</td>
                <td class="text-muted">{{ move.ref || '\u2014' }}</td>
                <td class="r debit-val">
                  {{ (move.totalDebit ?? 0) > 0 ? fmt(move.totalDebit ?? 0) : '' }}
                </td>
                <td class="r credit-val">
                  {{ (move.totalCredit ?? 0) > 0 ? fmt(move.totalCredit ?? 0) : '' }}
                </td>
                <td>
                  <span class="state-badge" [class]="'state-' + move.state">
                    {{ getStateLabel(move.state) }}
                  </span>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

  <!-- \u2550\u2550 ACC\xC8S RAPIDES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="section-card">
    <div class="section-header">
      <div class="section-title">
        <span class="material-icons">bolt</span>
        Acc\xE8s rapides
      </div>
    </div>
    <div class="quick-grid">
      @for (action of quickActions; track action.label) {
        <div class="quick-card" (click)="router.navigate([action.route])">
          <div class="quick-icon-wrap" [style.background]="action.color + '18'">
            <span class="material-icons" [style.color]="action.color">{{ action.icon }}</span>
          </div>
          <span class="quick-label">{{ action.label }}</span>
          <span class="material-icons quick-arrow">chevron_right</span>
        </div>
      }
    </div>
  </div>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/accounting/components/dashboard/dashboard.component.scss */\n.dash-container {\n  padding: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.dash-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.dash-header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.dash-icon-wrap {\n  width: 50px;\n  height: 50px;\n  border-radius: 13px;\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);\n}\n.dash-icon-wrap .material-icons {\n  font-size: 26px;\n  color: white;\n}\n.dash-title {\n  font-size: 21px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.4px;\n}\n.dash-sub {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--ease);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.25);\n}\n.btn-new .material-icons {\n  font-size: 19px;\n}\n.btn-new:hover {\n  background: var(--primary-dark);\n  box-shadow: 0 4px 14px rgba(29, 78, 216, 0.35);\n  transform: translateY(-1px);\n}\n.btn-new:active {\n  transform: none;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 1100px) {\n  .kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.kpi-card {\n  border-radius: var(--radius-md);\n  padding: 20px 22px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--shadow-md);\n  color: white;\n}\n.kpi-card.kpi-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #1D4ED8,\n      #3B82F6);\n}\n.kpi-card.kpi-orange {\n  background:\n    linear-gradient(\n      135deg,\n      #C2410C,\n      #F97316);\n}\n.kpi-card.kpi-green {\n  background:\n    linear-gradient(\n      135deg,\n      #047857,\n      #10B981);\n}\n.kpi-card.kpi-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #6D28D9,\n      #A78BFA);\n}\n[data-theme=dark] .kpi-card.kpi-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #1E40AF,\n      #2563EB);\n}\n[data-theme=dark] .kpi-card.kpi-orange {\n  background:\n    linear-gradient(\n      135deg,\n      #9A3412,\n      #EA580C);\n}\n[data-theme=dark] .kpi-card.kpi-green {\n  background:\n    linear-gradient(\n      135deg,\n      #065F46,\n      #059669);\n}\n[data-theme=dark] .kpi-card.kpi-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #5B21B6,\n      #7C3AED);\n}\n.kpi-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon .material-icons {\n  font-size: 24px;\n  color: white;\n}\n.kpi-body {\n  flex: 1;\n}\n.kpi-value {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -1px;\n}\n.kpi-label {\n  font-size: 11.5px;\n  font-weight: 500;\n  opacity: 0.82;\n  margin-top: 4px;\n}\n.kpi-bg-icon {\n  position: absolute;\n  right: -10px;\n  bottom: -10px;\n}\n.kpi-bg-icon .material-icons {\n  font-size: 82px;\n  opacity: 0.1;\n  color: white;\n}\n.fin-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 700px) {\n  .fin-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.fin-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  padding: 20px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 4px solid transparent;\n  position: relative;\n  overflow: hidden;\n}\n.fin-card.fin-debit {\n  border-left-color: var(--success);\n}\n.fin-card.fin-credit {\n  border-left-color: var(--danger);\n}\n.fin-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.fin-icon {\n  font-size: 30px !important;\n}\n.fin-debit .fin-icon {\n  color: var(--success);\n}\n.fin-credit .fin-icon {\n  color: var(--danger);\n}\n.fin-label {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 4px;\n}\n.fin-value {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.5px;\n}\n.fin-currency {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.fin-bar {\n  width: 5px;\n  height: 56px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.fin-bar.debit-bar {\n  background:\n    linear-gradient(\n      180deg,\n      var(--success),\n      rgba(22, 163, 74, 0.3));\n}\n.fin-bar.credit-bar {\n  background:\n    linear-gradient(\n      180deg,\n      var(--danger),\n      rgba(220, 38, 38, 0.3));\n}\n.section-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Inter", sans-serif;\n}\n.section-title .material-icons {\n  font-size: 19px;\n  color: var(--primary);\n}\n.btn-see-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--primary);\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: var(--radius-xs);\n  transition: var(--ease);\n}\n.btn-see-all .material-icons {\n  font-size: 15px;\n}\n.btn-see-all:hover {\n  background: var(--primary-subtle);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 52px;\n  color: var(--text-muted);\n  font-size: 13.5px;\n}\n.spinner-ring {\n  width: 34px;\n  height: 34px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 56px;\n}\n.empty-state .material-icons {\n  font-size: 50px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  color: var(--text-muted);\n  font-size: 13.5px;\n  margin: 0 0 16px;\n}\n.btn-new-sm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.btn-new-sm .material-icons {\n  font-size: 15px;\n}\n.btn-new-sm:hover {\n  background: var(--primary-dark);\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.move-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.move-table th {\n  padding: 9px 13px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.move-table td {\n  padding: 9px 13px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.move-table tbody tr {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.move-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.move-table tbody tr:hover td {\n  background: var(--bg-active);\n}\n.move-table .r {\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.piece-num {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.date-col {\n  color: var(--text-muted);\n  font-size: 12px;\n  white-space: nowrap;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.debit-val {\n  color: var(--success);\n  font-weight: 600;\n}\n.credit-val {\n  color: var(--danger);\n  font-weight: 600;\n}\n.state-badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.state-badge.state-posted {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.state-badge.state-draft {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.state-badge.state-cancel {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.quick-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1px;\n  background: var(--border-light);\n}\n.quick-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  background: var(--bg-surface);\n  cursor: pointer;\n  transition: var(--ease);\n}\n.quick-card:hover {\n  background: var(--bg-hover);\n}\n.quick-icon-wrap {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.quick-icon-wrap .material-icons {\n  font-size: 19px;\n}\n.quick-label {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.quick-arrow {\n  font-size: 17px !important;\n  color: var(--border);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: AccountingService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/modules/accounting/components/dashboard/dashboard.component.ts", lineNumber: 15 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-OWCHA34G.js.map
