import {
  ActivatedRoute,
  Router
} from "./chunk-K3VCSIQL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FU5PLMG6.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/journal-entries/journal-entries.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function JournalEntriesComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r1 = ctx.$implicit;
    \u0275\u0275property("value", j_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r1.code, " - ", j_r1.name);
  }
}
function JournalEntriesComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function JournalEntriesComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 3);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune \xE9criture trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Modifiez les filtres ou cr\xE9ez une nouvelle \xE9criture.");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_Conditional_52_For_23_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_52_For_23_Conditional_27_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const move_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.postMove(move_r3.id, $event));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_Conditional_52_For_23_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_52_For_23_Conditional_28_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const move_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.reverseMove(move_r3.id, $event));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_Conditional_52_For_23_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34)(1, "span", 37);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const move_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate(move_r3.reversalId ? "D\xE9j\xE0 extourn\xE9e" : "\xC9criture d'extourne"));
  }
}
function JournalEntriesComponent_Conditional_52_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 25);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_52_For_23_Template_tr_click_0_listener() {
      const move_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.router.navigate(["/accounting/journal-entries", move_r3.id]));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 27);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 28);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 29);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_52_For_23_Template_td_click_22_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(23, "div", 30)(24, "button", 31);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_52_For_23_Template_button_click_24_listener() {
      const move_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.router.navigate(["/accounting/journal-entries", move_r3.id]));
    });
    \u0275\u0275elementStart(25, "span", 3);
    \u0275\u0275text(26, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, JournalEntriesComponent_Conditional_52_For_23_Conditional_27_Template, 3, 0, "button", 32);
    \u0275\u0275conditionalCreate(28, JournalEntriesComponent_Conditional_52_For_23_Conditional_28_Template, 3, 0, "button", 33);
    \u0275\u0275conditionalCreate(29, JournalEntriesComponent_Conditional_52_For_23_Conditional_29_Template, 3, 2, "span", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const move_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r3.name || "Brouillon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 13, move_r3.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r3.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r3.ref || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r3.partnerName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 16, move_r3.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 19, move_r3.totalCredit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getStateBadgeClass(move_r3.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getStateLabel(move_r3.state));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(move_r3.state === "draft" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(move_r3.state === "posted" && !move_r3.reversalId && !move_r3.isReversal ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(move_r3.state === "posted" && (move_r3.reversalId || move_r3.isReversal) ? 29 : -1);
  }
}
function JournalEntriesComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "N\xB0 Pi\xE8ce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 22);
    \u0275\u0275text(14, "Total D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 22);
    \u0275\u0275text(16, "Total Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 23);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, JournalEntriesComponent_Conditional_52_For_23_Template, 30, 22, "tr", 24, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r3.moves);
  }
}
var JournalEntriesComponent = class _JournalEntriesComponent {
  constructor(accountingService, authService, router, route) {
    this.accountingService = accountingService;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.moves = [];
    this.journals = [];
    this.loading = false;
    this.confirmCancelId = null;
    this.filters = {
      journalId: "",
      dateFrom: "",
      dateTo: "",
      state: ""
    };
  }
  ngOnInit() {
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (j) => this.journals = j,
      error: () => {
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.filters.state = params["state"] || "";
      this.loadMoves();
    });
  }
  loadData() {
    this.loadMoves();
  }
  loadMoves() {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    const params = {};
    if (this.filters.journalId)
      params["journalId"] = this.filters.journalId;
    if (this.filters.dateFrom)
      params["dateFrom"] = this.filters.dateFrom;
    if (this.filters.dateTo)
      params["dateTo"] = this.filters.dateTo;
    if (this.filters.state)
      params["state"] = this.filters.state;
    this.accountingService.getMoves(companyId, params).subscribe({
      next: (data) => {
        this.moves = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  resetFilters() {
    this.filters = { journalId: "", dateFrom: "", dateTo: "", state: "" };
    this.loadMoves();
  }
  postMove(id, event) {
    event.stopPropagation();
    if (!confirm("Valider cette \xE9criture ? Cette action est irr\xE9versible."))
      return;
    this.accountingService.postMove(id).subscribe({
      next: () => this.loadMoves(),
      error: (err) => alert(err.error?.message || "Erreur lors de la validation")
    });
  }
  reverseMove(id, event) {
    event.stopPropagation();
    if (!confirm("Extourner cette \xE9criture ? Une \xE9criture inverse valid\xE9e sera cr\xE9\xE9e."))
      return;
    this.accountingService.reverseMove(id).subscribe({
      next: (reversed) => {
        this.loadMoves();
        this.router.navigate(["/accounting/journal-entries", reversed.id]);
      },
      error: (err) => alert(err.error?.message || "Erreur lors de l'extourne")
    });
  }
  getStateLabel(state) {
    const map = { draft: "Brouillon", posted: "Valid\xE9", cancel: "Annul\xE9" };
    return map[state || ""] || state || "";
  }
  getStateBadgeClass(state) {
    const map = { draft: "badge-draft", posted: "badge-posted", cancel: "badge-cancel" };
    return "badge " + (map[state || ""] || "badge-secondary");
  }
  static {
    this.\u0275fac = function JournalEntriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JournalEntriesComponent)(\u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalEntriesComponent, selectors: [["app-journal-entries"]], decls: 53, vars: 5, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "filters-bar"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "draft"], ["value", "posted"], ["value", "cancel"], [1, "filter-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "table-container"], [2, "text-align", "center", "padding", "60px"], [1, "empty-state"], [1, "table-erp"], [1, "spinner"], [1, "text-right"], [1, "text-center"], [2, "cursor", "pointer"], [2, "cursor", "pointer", 3, "click"], [1, "text-muted"], [1, "text-right", "amount-debit"], [1, "text-right", "amount-credit"], [1, "text-center", 3, "click"], [1, "action-btns"], ["title", "Voir/Modifier", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["title", "Valider", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#28a745"], ["title", "Extourner", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#6f42c1"], [2, "color", "#adb5bd", "padding", "4px 6px", "display", "inline-flex", "align-items", "center", 3, "title"], ["title", "Valider", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#28a745", 3, "click"], ["title", "Extourner", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#6f42c1", 3, "click"], [1, "material-icons", 2, "font-size", "16px"]], template: function JournalEntriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " \xC9critures Comptables ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_7_listener() {
          return ctx.router.navigate(["/accounting/journal-entries/new"]);
        });
        \u0275\u0275elementStart(8, "span", 3);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Nouvelle \xE9criture ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "label");
        \u0275\u0275text(14, "Journal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.journalId, $event) || (ctx.filters.journalId = $event);
          return $event;
        });
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, JournalEntriesComponent_For_19_Template, 2, 3, "option", 10, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "label");
        \u0275\u0275text(22, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.dateFrom, $event) || (ctx.filters.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 7)(25, "label");
        \u0275\u0275text(26, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.dateTo, $event) || (ctx.filters.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "label");
        \u0275\u0275text(30, "Statut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_select_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.state, $event) || (ctx.filters.state = $event);
          return $event;
        });
        \u0275\u0275elementStart(32, "option", 9);
        \u0275\u0275text(33, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 12);
        \u0275\u0275text(35, "Brouillon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option", 13);
        \u0275\u0275text(37, "Valid\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 14);
        \u0275\u0275text(39, "Annul\xE9");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 15)(41, "button", 5);
        \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_41_listener() {
          return ctx.loadMoves();
        });
        \u0275\u0275elementStart(42, "span", 3);
        \u0275\u0275text(43, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " Filtrer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 16);
        \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_45_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275elementStart(46, "span", 3);
        \u0275\u0275text(47, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " R\xE9initialiser ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 17);
        \u0275\u0275conditionalCreate(50, JournalEntriesComponent_Conditional_50_Template, 2, 0, "div", 18)(51, JournalEntriesComponent_Conditional_51_Template, 7, 0, "div", 19)(52, JournalEntriesComponent_Conditional_52_Template, 24, 0, "table", 20);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.journalId);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.journals);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.state);
        \u0275\u0275advance(19);
        \u0275\u0275conditional(ctx.loading ? 50 : ctx.moves.length === 0 ? 51 : 52);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n}\n/*# sourceMappingURL=journal-entries.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JournalEntriesComponent, [{
    type: Component,
    args: [{ selector: "app-journal-entries", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">receipt_long</span>
      \xC9critures Comptables
    </h1>
    <div class="page-actions">
      <button class="btn btn-primary" (click)="router.navigate(['/accounting/journal-entries/new'])">
        <span class="material-icons">add</span>
        Nouvelle \xE9criture
      </button>
    </div>
  </div>

  <!-- FILTERS -->
  <div class="filters-bar">
    <div class="filter-group">
      <label>Journal</label>
      <select class="form-control" [(ngModel)]="filters.journalId">
        <option value="">Tous</option>
        @for (j of journals; track j.id) {
          <option [value]="j.id">{{ j.code }} - {{ j.name }}</option>
        }
      </select>
    </div>
    <div class="filter-group">
      <label>Du</label>
      <input type="date" class="form-control" [(ngModel)]="filters.dateFrom">
    </div>
    <div class="filter-group">
      <label>Au</label>
      <input type="date" class="form-control" [(ngModel)]="filters.dateTo">
    </div>
    <div class="filter-group">
      <label>Statut</label>
      <select class="form-control" [(ngModel)]="filters.state">
        <option value="">Tous</option>
        <option value="draft">Brouillon</option>
        <option value="posted">Valid\xE9</option>
        <option value="cancel">Annul\xE9</option>
      </select>
    </div>
    <div class="filter-actions">
      <button class="btn btn-primary" (click)="loadMoves()">
        <span class="material-icons">search</span>
        Filtrer
      </button>
      <button class="btn btn-outline" (click)="resetFilters()">
        <span class="material-icons">clear</span>
        R\xE9initialiser
      </button>
    </div>
  </div>

  <!-- TABLE -->
  <div class="table-container">
    @if (loading) {
      <div style="text-align:center;padding:60px"><div class="spinner"></div></div>
    } @else if (moves.length === 0) {
      <div class="empty-state">
        <span class="material-icons">receipt_long</span>
        <h3>Aucune \xE9criture trouv\xE9e</h3>
        <p>Modifiez les filtres ou cr\xE9ez une nouvelle \xE9criture.</p>
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
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (move of moves; track move.id) {
            <tr (click)="router.navigate(['/accounting/journal-entries', move.id])" style="cursor:pointer">
              <td><strong>{{ move.name || 'Brouillon' }}</strong></td>
              <td>{{ move.date | date:'dd/MM/yyyy' }}</td>
              <td>{{ move.journalName }}</td>
              <td class="text-muted">{{ move.ref || '-' }}</td>
              <td>{{ move.partnerName || '-' }}</td>
              <td class="text-right amount-debit">{{ move.totalDebit | number:'1.2-2' }}</td>
              <td class="text-right amount-credit">{{ move.totalCredit | number:'1.2-2' }}</td>
              <td><span [class]="getStateBadgeClass(move.state)">{{ getStateLabel(move.state) }}</span></td>
              <td class="text-center" (click)="$event.stopPropagation()">
                <div class="action-btns">
                  <button class="btn btn-ghost btn-sm"
                    (click)="router.navigate(['/accounting/journal-entries', move.id])"
                    title="Voir/Modifier">
                    <span class="material-icons">visibility</span>
                  </button>
                  @if (move.state === 'draft') {
                    <button class="btn btn-ghost btn-sm" style="color:#28a745"
                      (click)="postMove(move.id!, $event)" title="Valider">
                      <span class="material-icons">check_circle</span>
                    </button>
                  }
                  @if (move.state === 'posted' && !move.reversalId && !move.isReversal) {
                    <button class="btn btn-ghost btn-sm" style="color:#6f42c1"
                      (click)="reverseMove(move.id!, $event)" title="Extourner">
                      <span class="material-icons">swap_horiz</span>
                    </button>
                  }
                  @if (move.state === 'posted' && (move.reversalId || move.isReversal)) {
                    <span title="{{ move.reversalId ? 'D\xE9j\xE0 extourn\xE9e' : '\xC9criture d\\'extourne' }}"
                      style="color:#adb5bd;padding:4px 6px;display:inline-flex;align-items:center">
                      <span class="material-icons" style="font-size:16px">block</span>
                    </span>
                  }
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>
`, styles: ["/* src/app/modules/accounting/components/journal-entries/journal-entries.component.scss */\n.action-btns {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n}\n/*# sourceMappingURL=journal-entries.component.css.map */\n"] }]
  }], () => [{ type: AccountingService }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalEntriesComponent, { className: "JournalEntriesComponent", filePath: "src/app/modules/accounting/components/journal-entries/journal-entries.component.ts", lineNumber: 17 });
})();
export {
  JournalEntriesComponent
};
//# sourceMappingURL=chunk-BRFYS3BR.js.map
