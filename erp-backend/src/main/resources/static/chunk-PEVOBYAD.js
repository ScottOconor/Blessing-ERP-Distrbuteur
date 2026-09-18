import {
  HelpdeskService
} from "./chunk-AHKEZOPG.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
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
  DatePipe,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/helpdesk/components/ticket-list/ticket-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TicketListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 25);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 3);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun ticket trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function TicketListComponent_Conditional_48_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_48_For_22_Template_tr_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/helpdesk/tickets", t_r2.id]));
    });
    \u0275\u0275elementStart(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 31);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 31);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.ticketNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-cat-", t_r2.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.categoryLabel(t_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-status-", t_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(t_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-prio-", t_r2.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.priorityLabel(t_r2.priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.createdByUsername);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.assignedToUsername || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 17, t_r2.createdAt, "dd/MM/yy HH:mm"));
  }
}
function TicketListComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 26)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "N\xB0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Cr\xE9\xE9 par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Assign\xE9 \xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, TicketListComponent_Conditional_48_For_22_Template, 21, 20, "tr", 27, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function TicketListComponent_Conditional_49_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMsg, " ");
  }
}
function TicketListComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewForm = false);
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_49_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "h3")(4, "span", 3);
    \u0275\u0275text(5, "confirmation_number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Nouveau ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_49_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewForm = false);
    });
    \u0275\u0275elementStart(8, "span", 3);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 36);
    \u0275\u0275conditionalCreate(11, TicketListComponent_Conditional_49_Conditional_11_Template, 4, 1, "div", 37);
    \u0275\u0275elementStart(12, "div", 38)(13, "label");
    \u0275\u0275text(14, "Titre ");
    \u0275\u0275elementStart(15, "span", 39);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Conditional_49_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTicket.title, $event) || (ctx_r2.newTicket.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 41)(19, "div", 38)(20, "label");
    \u0275\u0275text(21, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Conditional_49_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTicket.category, $event) || (ctx_r2.newTicket.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 18);
    \u0275\u0275text(24, "Incident");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 19);
    \u0275\u0275text(26, "Demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 20);
    \u0275\u0275text(28, "Question");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 38)(30, "label");
    \u0275\u0275text(31, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Conditional_49_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTicket.priority, $event) || (ctx_r2.newTicket.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 14);
    \u0275\u0275text(34, "Basse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 15);
    \u0275\u0275text(36, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 16);
    \u0275\u0275text(38, "Haute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 17);
    \u0275\u0275text(40, "Critique");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 43)(42, "span", 3);
    \u0275\u0275text(43, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Ce ticket sera transmis au hub pour prise en charge et affectation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 38)(46, "label");
    \u0275\u0275text(47, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "textarea", 44);
    \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Conditional_49_Template_textarea_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTicket.description, $event) || (ctx_r2.newTicket.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 45)(50, "button", 46);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_49_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewForm = false);
    });
    \u0275\u0275text(51, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 47);
    \u0275\u0275listener("click", function TicketListComponent_Conditional_49_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNew());
    });
    \u0275\u0275elementStart(53, "span", 3);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r2.errorMsg ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTicket.title);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTicket.category);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTicket.priority);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTicket.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.saving ? "hourglass_empty" : "send");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Cr\xE9ation..." : "Cr\xE9er le ticket", " ");
  }
}
var TicketListComponent = class _TicketListComponent {
  constructor(helpdeskService, authService, route, router) {
    this.helpdeskService = helpdeskService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.tickets = [];
    this.loading = false;
    this.filterStatus = "";
    this.filterPriority = "";
    this.filterCategory = "";
    this.myTicketsOnly = false;
    this.showNewForm = false;
    this.saving = false;
    this.errorMsg = "";
    this.newTicket = this.emptyTicket();
  }
  ngOnInit() {
    this.route.queryParams.subscribe((p) => {
      this.filterStatus = p["status"] || "";
      if (p["my"])
        this.myTicketsOnly = true;
      this.load();
      if (p["new"] === "1")
        setTimeout(() => this.openNew(), 0);
    });
  }
  load() {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    const isAdmin = this.authService.isAdmin();
    const username = this.authService.getSession()?.username ?? "";
    const createdBy = isAdmin ? void 0 : username;
    const assignedTo = isAdmin && this.myTicketsOnly ? username : void 0;
    this.helpdeskService.getTickets(companyId, this.filterStatus || void 0, assignedTo, createdBy).subscribe({
      next: (data) => {
        this.tickets = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get filtered() {
    return this.tickets.filter((t) => (!this.filterPriority || t.priority === this.filterPriority) && (!this.filterCategory || t.category === this.filterCategory));
  }
  openNew() {
    this.newTicket = this.emptyTicket();
    this.errorMsg = "";
    this.showNewForm = true;
  }
  saveNew() {
    if (!this.newTicket.title?.trim()) {
      this.errorMsg = "Le titre est obligatoire";
      return;
    }
    this.saving = true;
    const companyId = this.authService.getCompanyId();
    const payload = __spreadProps(__spreadValues({}, this.newTicket), {
      companyId,
      createdByUsername: this.authService.getSession()?.username ?? ""
    });
    this.helpdeskService.createTicket(payload).subscribe({
      next: (t) => {
        this.saving = false;
        this.showNewForm = false;
        this.router.navigate(["/helpdesk/tickets", t.id]);
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur lors de la cr\xE9ation";
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
  categoryLabel(c) {
    const m = { INCIDENT: "Incident", DEMANDE: "Demande", QUESTION: "Question" };
    return m[c ?? ""] ?? c ?? "";
  }
  emptyTicket() {
    return { title: "", description: "", status: "OUVERT", priority: "MOYENNE", category: "INCIDENT" };
  }
  static {
    this.\u0275fac = function TicketListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketListComponent)(\u0275\u0275directiveInject(HelpdeskService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketListComponent, selectors: [["app-ticket-list"]], decls: 50, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-sub"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "filter-bar"], [1, "form-control", "filter-sel", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "OUVERT"], ["value", "EN_COURS"], ["value", "RESOLU"], ["value", "FERME"], ["value", "BASSE"], ["value", "MOYENNE"], ["value", "HAUTE"], ["value", "CRITIQUE"], ["value", "INCIDENT"], ["value", "DEMANDE"], ["value", "QUESTION"], [1, "loading"], [1, "empty-state"], [1, "card"], [1, "modal-backdrop"], [1, "material-icons", "spin"], [1, "data-table"], [1, "clickable"], [1, "clickable", 3, "click"], [1, "mono"], [1, "col-title"], [1, "text-muted"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-group"], [1, "req"], ["type", "text", "placeholder", "R\xE9sum\xE9 du probl\xE8me\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-grid"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "info-note"], ["rows", "4", "placeholder", "D\xE9crivez le probl\xE8me\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"]], template: function TicketListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function TicketListComponent_Template_button_click_10_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(11, "span", 3);
        \u0275\u0275text(12, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nouveau ticket ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 7)(15, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function TicketListComponent_Template_select_ngModelChange_15_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Tous les statuts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "Ouvert");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "En cours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 12);
        \u0275\u0275text(23, "R\xE9solu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option", 13);
        \u0275\u0275text(25, "Ferm\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Template_select_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterPriority, $event) || (ctx.filterPriority = $event);
          return $event;
        });
        \u0275\u0275elementStart(27, "option", 9);
        \u0275\u0275text(28, "Toutes priorit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 14);
        \u0275\u0275text(30, "Basse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 15);
        \u0275\u0275text(32, "Moyenne");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 16);
        \u0275\u0275text(34, "Haute");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 17);
        \u0275\u0275text(36, "Critique");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Template_select_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterCategory, $event) || (ctx.filterCategory = $event);
          return $event;
        });
        \u0275\u0275elementStart(38, "option", 9);
        \u0275\u0275text(39, "Toutes cat\xE9gories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 18);
        \u0275\u0275text(41, "Incident");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 19);
        \u0275\u0275text(43, "Demande");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "option", 20);
        \u0275\u0275text(45, "Question");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(46, TicketListComponent_Conditional_46_Template, 4, 0, "div", 21)(47, TicketListComponent_Conditional_47_Template, 5, 0, "div", 22)(48, TicketListComponent_Conditional_48_Template, 23, 0, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(49, TicketListComponent_Conditional_49_Template, 56, 8, "div", 24);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.myTicketsOnly ? "person_pin" : "list_alt");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.myTicketsOnly ? "Mes tickets" : "Tous les tickets", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.filtered.length, " ticket(s) affich\xE9(s)");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterPriority);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterCategory);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading ? 46 : ctx.filtered.length === 0 ? 47 : 48);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showNewForm ? 49 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #0891b2;\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0891b2;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0891b2;\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.form-control-sm[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0891b2;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n  cursor: default;\n}\n.data-table[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%] {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 540px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg[_ngcontent-%COMP%] {\n  width: 640px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-status-OUVERT[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-status-EN_COURS[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-status-RESOLU[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-status-FERME[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-prio-BASSE[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-prio-MOYENNE[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-prio-HAUTE[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-prio-CRITIQUE[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-weight: 700;\n}\n.badge-cat-INCIDENT[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-cat-DEMANDE[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-cat-QUESTION[_ngcontent-%COMP%] {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7C3AED;\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.info-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.filter-bar[_ngcontent-%COMP%]   .filter-sel[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 160px;\n}\n/*# sourceMappingURL=ticket-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketListComponent, [{
    type: Component,
    args: [{ selector: "app-ticket-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">
        <span class="material-icons">{{ myTicketsOnly ? 'person_pin' : 'list_alt' }}</span>
        {{ myTicketsOnly ? 'Mes tickets' : 'Tous les tickets' }}
      </h1>
      <p class="page-sub">{{ filtered.length }} ticket(s) affich\xE9(s)</p>
    </div>
    <div class="header-actions">
      <button class="btn-primary" (click)="openNew()">
        <span class="material-icons">add</span> Nouveau ticket
      </button>
    </div>
  </div>

  <!-- Filtres -->
  <div class="filter-bar">
    <select [(ngModel)]="filterStatus" (ngModelChange)="load()" class="form-control filter-sel">
      <option value="">Tous les statuts</option>
      <option value="OUVERT">Ouvert</option>
      <option value="EN_COURS">En cours</option>
      <option value="RESOLU">R\xE9solu</option>
      <option value="FERME">Ferm\xE9</option>
    </select>
    <select [(ngModel)]="filterPriority" class="form-control filter-sel">
      <option value="">Toutes priorit\xE9s</option>
      <option value="BASSE">Basse</option>
      <option value="MOYENNE">Moyenne</option>
      <option value="HAUTE">Haute</option>
      <option value="CRITIQUE">Critique</option>
    </select>
    <select [(ngModel)]="filterCategory" class="form-control filter-sel">
      <option value="">Toutes cat\xE9gories</option>
      <option value="INCIDENT">Incident</option>
      <option value="DEMANDE">Demande</option>
      <option value="QUESTION">Question</option>
    </select>
  </div>

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (filtered.length === 0) {
    <div class="empty-state">
      <span class="material-icons">inbox</span>
      <p>Aucun ticket trouv\xE9</p>
    </div>
  } @else {
    <div class="card">
      <table class="data-table">
        <thead>
          <tr>
            <th>N\xB0</th>
            <th>Titre</th>
            <th>Cat\xE9gorie</th>
            <th>Statut</th>
            <th>Priorit\xE9</th>
            <th>Cr\xE9\xE9 par</th>
            <th>Assign\xE9 \xE0</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          @for (t of filtered; track t.id) {
            <tr class="clickable" (click)="router.navigate(['/helpdesk/tickets', t.id])">
              <td class="mono">{{ t.ticketNumber }}</td>
              <td class="col-title">{{ t.title }}</td>
              <td><span class="badge badge-cat-{{ t.category }}">{{ categoryLabel(t.category) }}</span></td>
              <td><span class="badge badge-status-{{ t.status }}">{{ statusLabel(t.status) }}</span></td>
              <td><span class="badge badge-prio-{{ t.priority }}">{{ priorityLabel(t.priority) }}</span></td>
              <td class="text-muted">{{ t.createdByUsername }}</td>
              <td class="text-muted">{{ t.assignedToUsername || '\u2014' }}</td>
              <td class="text-muted">{{ t.createdAt | date:'dd/MM/yy HH:mm' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>

<!-- Modal nouveau ticket -->
@if (showNewForm) {
  <div class="modal-backdrop" (click)="showNewForm = false">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3><span class="material-icons">confirmation_number</span> Nouveau ticket</h3>
        <button class="btn-icon" (click)="showNewForm = false">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="modal-body">
        @if (errorMsg) {
          <div class="alert alert-danger">
            <span class="material-icons">error</span> {{ errorMsg }}
          </div>
        }
        <div class="form-group">
          <label>Titre <span class="req">*</span></label>
          <input type="text" [(ngModel)]="newTicket.title" class="form-control" placeholder="R\xE9sum\xE9 du probl\xE8me\u2026" />
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>Cat\xE9gorie</label>
            <select [(ngModel)]="newTicket.category" class="form-control">
              <option value="INCIDENT">Incident</option>
              <option value="DEMANDE">Demande</option>
              <option value="QUESTION">Question</option>
            </select>
          </div>
          <div class="form-group">
            <label>Priorit\xE9</label>
            <select [(ngModel)]="newTicket.priority" class="form-control">
              <option value="BASSE">Basse</option>
              <option value="MOYENNE">Moyenne</option>
              <option value="HAUTE">Haute</option>
              <option value="CRITIQUE">Critique</option>
            </select>
          </div>
        </div>
        <div class="form-group info-note">
          <span class="material-icons">info</span>
          Ce ticket sera transmis au hub pour prise en charge et affectation.
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea [(ngModel)]="newTicket.description" class="form-control" rows="4" placeholder="D\xE9crivez le probl\xE8me\u2026"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showNewForm = false">Annuler</button>
        <button class="btn-primary" (click)="saveNew()" [disabled]="saving">
          <span class="material-icons">{{ saving ? 'hourglass_empty' : 'send' }}</span>
          {{ saving ? 'Cr\xE9ation...' : 'Cr\xE9er le ticket' }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/helpdesk/components/ticket-list/ticket-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title .material-icons {\n  font-size: 24px;\n  color: #0891b2;\n}\n.page-header .page-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm,\n.btn-secondary.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm .material-icons,\n.btn-secondary.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-primary {\n  background: #0891b2;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon:hover {\n  background: var(--danger-bg);\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control:focus {\n  outline: none;\n  border-color: #0891b2;\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-control-sm {\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.form-control-sm:focus {\n  outline: none;\n  border-color: #0891b2;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.toggle-label input {\n  cursor: pointer;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table tbody tr {\n  transition: background 0.1s;\n}\n.data-table tbody tr.clickable {\n  cursor: pointer;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table .empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n  cursor: default;\n}\n.data-table .col-title {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 540px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg {\n  width: 640px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h3 {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-status-OUVERT {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-status-EN_COURS {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-status-RESOLU {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-status-FERME {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-prio-BASSE {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-prio-MOYENNE {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-prio-HAUTE {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-prio-CRITIQUE {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-weight: 700;\n}\n.badge-cat-INCIDENT {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-cat-DEMANDE {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-cat-QUESTION {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7C3AED;\n}\n.info-note {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.info-note .material-icons {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.filter-bar .filter-sel {\n  width: auto;\n  min-width: 160px;\n}\n/*# sourceMappingURL=ticket-list.component.css.map */\n'] }]
  }], () => [{ type: HelpdeskService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketListComponent, { className: "TicketListComponent", filePath: "app/modules/helpdesk/components/ticket-list/ticket-list.component.ts", lineNumber: 15 });
})();
export {
  TicketListComponent
};
//# sourceMappingURL=chunk-PEVOBYAD.js.map
