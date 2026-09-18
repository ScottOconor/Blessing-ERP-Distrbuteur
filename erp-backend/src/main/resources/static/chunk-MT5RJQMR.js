import {
  HelpdeskService
} from "./chunk-AHKEZOPG.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/helpdesk/components/dashboard/helpdesk-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HelpdeskDashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275domElementEnd();
  }
}
function HelpdeskDashboardComponent_Conditional_15_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "div", 11)(2, "span", 3);
    \u0275\u0275text(3, "priority_high");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 12)(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 14);
    \u0275\u0275text(8, "Critiques actifs");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalCritique);
  }
}
function HelpdeskDashboardComponent_Conditional_15_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20)(1, "span", 3);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucun ticket pour le moment");
    \u0275\u0275domElementEnd()();
  }
}
function HelpdeskDashboardComponent_Conditional_15_Conditional_41_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 24);
    \u0275\u0275domListener("click", function HelpdeskDashboardComponent_Conditional_15_Conditional_41_For_18_Template_tr_click_0_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/helpdesk/tickets", t_r4.id]));
    });
    \u0275\u0275domElementStart(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "td")(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "td", 27);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 27);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.ticketNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-status-", t_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(t_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-prio-", t_r4.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.priorityLabel(t_r4.priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.assignedToUsername || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 12, t_r4.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
function HelpdeskDashboardComponent_Conditional_15_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "N\xB0");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Titre");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Priorit\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th");
    \u0275\u0275text(13, "Assign\xE9 \xE0");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th");
    \u0275\u0275text(15, "Cr\xE9\xE9 le");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, HelpdeskDashboardComponent_Conditional_15_Conditional_41_For_18_Template, 16, 15, "tr", 23, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.recentTickets);
  }
}
function HelpdeskDashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275domListener("click", function HelpdeskDashboardComponent_Conditional_15_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/helpdesk/tickets"], { queryParams: { status: "OUVERT" } }));
    });
    \u0275\u0275domElementStart(2, "div", 11)(3, "span", 3);
    \u0275\u0275text(4, "inbox");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 12)(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 14);
    \u0275\u0275text(9, "Ouverts");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "div", 15);
    \u0275\u0275domListener("click", function HelpdeskDashboardComponent_Conditional_15_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/helpdesk/tickets"], { queryParams: { status: "EN_COURS" } }));
    });
    \u0275\u0275domElementStart(11, "div", 11)(12, "span", 3);
    \u0275\u0275text(13, "pending");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div", 12)(15, "div", 13);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 14);
    \u0275\u0275text(18, "En cours");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(19, "div", 16);
    \u0275\u0275domListener("click", function HelpdeskDashboardComponent_Conditional_15_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/helpdesk/tickets"], { queryParams: { status: "RESOLU" } }));
    });
    \u0275\u0275domElementStart(20, "div", 11)(21, "span", 3);
    \u0275\u0275text(22, "check_circle");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 12)(24, "div", 13);
    \u0275\u0275text(25);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 14);
    \u0275\u0275text(27, "R\xE9solus");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(28, "div", 17);
    \u0275\u0275domListener("click", function HelpdeskDashboardComponent_Conditional_15_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/helpdesk/tickets"], { queryParams: { status: "FERME" } }));
    });
    \u0275\u0275domElementStart(29, "div", 11)(30, "span", 3);
    \u0275\u0275text(31, "archive");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 12)(33, "div", 13);
    \u0275\u0275text(34);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "div", 14);
    \u0275\u0275text(36, "Ferm\xE9s");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(37, HelpdeskDashboardComponent_Conditional_15_Conditional_37_Template, 9, 1, "div", 18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "h2", 19);
    \u0275\u0275text(39, "Tickets r\xE9cents");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(40, HelpdeskDashboardComponent_Conditional_15_Conditional_40_Template, 5, 0, "div", 20)(41, HelpdeskDashboardComponent_Conditional_15_Conditional_41_Template, 19, 0, "div", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalOuvert);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalEnCours);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalResolu);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalFerme);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.stats.totalCritique > 0 ? 37 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.recentTickets.length === 0 ? 40 : 41);
  }
}
var HelpdeskDashboardComponent = class _HelpdeskDashboardComponent {
  constructor(helpdeskService, authService, router) {
    this.helpdeskService = helpdeskService;
    this.authService = authService;
    this.router = router;
    this.stats = null;
    this.recentTickets = [];
    this.loading = true;
  }
  ngOnInit() {
    const companyId = this.authService.getCompanyId();
    this.helpdeskService.getStats(companyId).subscribe({
      next: (s) => {
        this.stats = s;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.helpdeskService.getTickets(companyId).subscribe({
      next: (tickets) => {
        this.recentTickets = tickets.slice(0, 8);
      }
    });
  }
  statusLabel(s) {
    const m = { OUVERT: "Ouvert", EN_COURS: "En cours", RESOLU: "R\xE9solu", FERME: "Ferm\xE9" };
    return m[s ?? ""] ?? s ?? "";
  }
  priorityLabel(p) {
    const m = { BASSE: "Basse", MOYENNE: "Moyenne", HAUTE: "Haute", CRITIQUE: "Critique" };
    return m[p ?? ""] ?? p ?? "";
  }
  static {
    this.\u0275fac = function HelpdeskDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpdeskDashboardComponent)(\u0275\u0275directiveInject(HelpdeskService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpdeskDashboardComponent, selectors: [["app-helpdesk-dashboard"]], decls: 16, vars: 1, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-sub"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "loading"], [1, "material-icons", "spin"], [1, "stats-grid"], [1, "stat-card", "stat-open", 3, "click"], [1, "stat-icon"], [1, "stat-body"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "stat-inprogress", 3, "click"], [1, "stat-card", "stat-resolved", 3, "click"], [1, "stat-card", "stat-closed", 3, "click"], [1, "stat-card", "stat-critical"], [1, "section-title"], [1, "empty-state"], [1, "card"], [1, "data-table"], [1, "clickable"], [1, "clickable", 3, "click"], [1, "mono"], [1, "col-title"], [1, "text-muted"]], template: function HelpdeskDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "dashboard");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6, " Tableau de bord Helpdesk");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "p", 4);
        \u0275\u0275text(8, "Vue d'ensemble des tickets et incidents");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275domListener("click", function HelpdeskDashboardComponent_Template_button_click_10_listener() {
          return ctx.router.navigate(["/helpdesk/tickets"], { queryParams: { new: "1" } });
        });
        \u0275\u0275domElementStart(11, "span", 3);
        \u0275\u0275text(12, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(13, " Nouveau ticket ");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(14, HelpdeskDashboardComponent_Conditional_14_Template, 4, 0, "div", 7)(15, HelpdeskDashboardComponent_Conditional_15_Template, 42, 6);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.loading ? 14 : ctx.stats ? 15 : -1);
      }
    }, dependencies: [CommonModule, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #0891b2;\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0891b2;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0891b2;\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.form-control-sm[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0891b2;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n  cursor: default;\n}\n.data-table[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%] {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 540px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg[_ngcontent-%COMP%] {\n  width: 640px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-status-OUVERT[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-status-EN_COURS[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-status-RESOLU[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-status-FERME[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-prio-BASSE[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-prio-MOYENNE[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-prio-HAUTE[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-prio-CRITIQUE[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-weight: 700;\n}\n.badge-cat-INCIDENT[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-cat-DEMANDE[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-cat-QUESTION[_ngcontent-%COMP%] {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7C3AED;\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.info-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  cursor: pointer;\n  border: 1px solid var(--border-light);\n  box-shadow: var(--shadow-sm);\n  transition: var(--ease);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-1px);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.stat-card.stat-open[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--info);\n}\n.stat-card.stat-inprogress[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.stat-card.stat-resolved[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.stat-card.stat-closed[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n}\n.stat-card.stat-critical[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=helpdesk-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpdeskDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-helpdesk-dashboard", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title"><span class="material-icons">dashboard</span> Tableau de bord Helpdesk</h1>
      <p class="page-sub">Vue d'ensemble des tickets et incidents</p>
    </div>
    <div class="header-actions">
      <button class="btn-primary" (click)="router.navigate(['/helpdesk/tickets'], { queryParams: { new: '1' } })">
        <span class="material-icons">add</span> Nouveau ticket
      </button>
    </div>
  </div>

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (stats) {

    <div class="stats-grid">
      <div class="stat-card stat-open" (click)="router.navigate(['/helpdesk/tickets'], { queryParams: { status: 'OUVERT' } })">
        <div class="stat-icon"><span class="material-icons">inbox</span></div>
        <div class="stat-body">
          <div class="stat-value">{{ stats.totalOuvert }}</div>
          <div class="stat-label">Ouverts</div>
        </div>
      </div>
      <div class="stat-card stat-inprogress" (click)="router.navigate(['/helpdesk/tickets'], { queryParams: { status: 'EN_COURS' } })">
        <div class="stat-icon"><span class="material-icons">pending</span></div>
        <div class="stat-body">
          <div class="stat-value">{{ stats.totalEnCours }}</div>
          <div class="stat-label">En cours</div>
        </div>
      </div>
      <div class="stat-card stat-resolved" (click)="router.navigate(['/helpdesk/tickets'], { queryParams: { status: 'RESOLU' } })">
        <div class="stat-icon"><span class="material-icons">check_circle</span></div>
        <div class="stat-body">
          <div class="stat-value">{{ stats.totalResolu }}</div>
          <div class="stat-label">R\xE9solus</div>
        </div>
      </div>
      <div class="stat-card stat-closed" (click)="router.navigate(['/helpdesk/tickets'], { queryParams: { status: 'FERME' } })">
        <div class="stat-icon"><span class="material-icons">archive</span></div>
        <div class="stat-body">
          <div class="stat-value">{{ stats.totalFerme }}</div>
          <div class="stat-label">Ferm\xE9s</div>
        </div>
      </div>
      @if (stats.totalCritique > 0) {
        <div class="stat-card stat-critical">
          <div class="stat-icon"><span class="material-icons">priority_high</span></div>
          <div class="stat-body">
            <div class="stat-value">{{ stats.totalCritique }}</div>
            <div class="stat-label">Critiques actifs</div>
          </div>
        </div>
      }
    </div>

    <h2 class="section-title">Tickets r\xE9cents</h2>
    @if (recentTickets.length === 0) {
      <div class="empty-state">
        <span class="material-icons">inbox</span>
        <p>Aucun ticket pour le moment</p>
      </div>
    } @else {
      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th>N\xB0</th>
              <th>Titre</th>
              <th>Statut</th>
              <th>Priorit\xE9</th>
              <th>Assign\xE9 \xE0</th>
              <th>Cr\xE9\xE9 le</th>
            </tr>
          </thead>
          <tbody>
            @for (t of recentTickets; track t.id) {
              <tr class="clickable" (click)="router.navigate(['/helpdesk/tickets', t.id])">
                <td class="mono">{{ t.ticketNumber }}</td>
                <td class="col-title">{{ t.title }}</td>
                <td><span class="badge badge-status-{{ t.status }}">{{ statusLabel(t.status) }}</span></td>
                <td><span class="badge badge-prio-{{ t.priority }}">{{ priorityLabel(t.priority) }}</span></td>
                <td class="text-muted">{{ t.assignedToUsername || '\u2014' }}</td>
                <td class="text-muted">{{ t.createdAt | date:'dd/MM/yyyy HH:mm' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/helpdesk/components/dashboard/helpdesk-dashboard.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title .material-icons {\n  font-size: 24px;\n  color: #0891b2;\n}\n.page-header .page-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm,\n.btn-secondary.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm .material-icons,\n.btn-secondary.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-primary {\n  background: #0891b2;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon:hover {\n  background: var(--danger-bg);\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control:focus {\n  outline: none;\n  border-color: #0891b2;\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-control-sm {\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.form-control-sm:focus {\n  outline: none;\n  border-color: #0891b2;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.toggle-label input {\n  cursor: pointer;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table tbody tr {\n  transition: background 0.1s;\n}\n.data-table tbody tr.clickable {\n  cursor: pointer;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table .empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n  cursor: default;\n}\n.data-table .col-title {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 540px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg {\n  width: 640px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h3 {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-status-OUVERT {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-status-EN_COURS {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-status-RESOLU {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-status-FERME {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-prio-BASSE {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-prio-MOYENNE {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-prio-HAUTE {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-prio-CRITIQUE {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-weight: 700;\n}\n.badge-cat-INCIDENT {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-cat-DEMANDE {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-cat-QUESTION {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7C3AED;\n}\n.info-note {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.info-note .material-icons {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.stat-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  cursor: pointer;\n  border: 1px solid var(--border-light);\n  box-shadow: var(--shadow-sm);\n  transition: var(--ease);\n}\n.stat-card:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-1px);\n}\n.stat-card .stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card .stat-icon .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.stat-card .stat-value {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.stat-card .stat-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.stat-card.stat-open .stat-icon {\n  background: var(--info);\n}\n.stat-card.stat-inprogress .stat-icon {\n  background: var(--warning);\n}\n.stat-card.stat-resolved .stat-icon {\n  background: var(--success);\n}\n.stat-card.stat-closed .stat-icon {\n  background: var(--text-muted);\n}\n.stat-card.stat-critical .stat-icon {\n  background: var(--danger);\n}\n.section-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=helpdesk-dashboard.component.css.map */\n'] }]
  }], () => [{ type: HelpdeskService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpdeskDashboardComponent, { className: "HelpdeskDashboardComponent", filePath: "app/modules/helpdesk/components/dashboard/helpdesk-dashboard.component.ts", lineNumber: 14 });
})();
export {
  HelpdeskDashboardComponent
};
//# sourceMappingURL=chunk-MT5RJQMR.js.map
