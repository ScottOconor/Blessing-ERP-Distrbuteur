import {
  utils,
  writeFileSync
} from "./chunk-ZJANBOXO.js";
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
  AccountingService
} from "./chunk-PGZXUWCB.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/journal-entries/journal-entries.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function JournalEntriesComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
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
function JournalEntriesComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementEnd();
  }
}
function JournalEntriesComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 3);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune pi\xE8ce trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Modifiez les filtres ou cr\xE9ez une nouvelle pi\xE8ce comptable.");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_Conditional_63_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('\u2014 filtr\xE9e(s) sur "', ctx_r1.search, '"');
  }
}
function JournalEntriesComponent_Conditional_63_For_26_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_63_For_26_Conditional_27_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const move_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.postMove(move_r4.id, $event));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_Conditional_63_For_26_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_63_For_26_Conditional_28_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const move_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reverseMove(move_r4.id, $event));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_Conditional_63_For_26_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39)(1, "span", 42);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const move_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate(move_r4.reversalId ? "D\xE9j\xE0 extourn\xE9e" : "Pi\xE8ce d'extourne"));
  }
}
function JournalEntriesComponent_Conditional_63_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_63_For_26_Template_tr_click_0_listener() {
      const move_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/accounting/journal-entries", move_r4.id]));
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
    \u0275\u0275elementStart(9, "td", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 32);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 33);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 34);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_63_For_26_Template_td_click_22_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(23, "div", 35)(24, "button", 36);
    \u0275\u0275listener("click", function JournalEntriesComponent_Conditional_63_For_26_Template_button_click_24_listener() {
      const move_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/accounting/journal-entries", move_r4.id]));
    });
    \u0275\u0275elementStart(25, "span", 3);
    \u0275\u0275text(26, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, JournalEntriesComponent_Conditional_63_For_26_Conditional_27_Template, 3, 0, "button", 37);
    \u0275\u0275conditionalCreate(28, JournalEntriesComponent_Conditional_63_For_26_Conditional_28_Template, 3, 0, "button", 38);
    \u0275\u0275conditionalCreate(29, JournalEntriesComponent_Conditional_63_For_26_Conditional_29_Template, 3, 2, "span", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const move_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r4.name || "Brouillon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 13, move_r4.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r4.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r4.ref || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r4.partnerName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 16, move_r4.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 19, move_r4.totalCredit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStateBadgeClass(move_r4.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStateLabel(move_r4.state));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(move_r4.state === "draft" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(move_r4.state === "posted" && !move_r4.reversalId && !move_r4.isReversal ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(move_r4.state === "posted" && (move_r4.reversalId || move_r4.isReversal) ? 29 : -1);
  }
}
function JournalEntriesComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, JournalEntriesComponent_Conditional_63_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 26)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "N\xB0 Pi\xE8ce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 27);
    \u0275\u0275text(17, "Total D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 27);
    \u0275\u0275text(19, "Total Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 28);
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, JournalEntriesComponent_Conditional_63_For_26_Template, 30, 22, "tr", 29, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredMoves.length, " pi\xE8ce(s) ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.search.trim() ? 2 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.filteredMoves);
  }
}
var JournalEntriesComponent = class _JournalEntriesComponent {
  static today() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  static firstDayOfMonth() {
    const d = /* @__PURE__ */ new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1).toISOString().split("T")[0];
  }
  get filteredMoves() {
    if (!this.search.trim())
      return this.moves;
    const s = this.search.toLowerCase().trim();
    return this.moves.filter((m) => (m.name || "").toLowerCase().includes(s) || (m.ref || "").toLowerCase().includes(s) || (m.partnerName || "").toLowerCase().includes(s));
  }
  constructor(accountingService, authService, router, route) {
    this.accountingService = accountingService;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.moves = [];
    this.journals = [];
    this.loading = false;
    this.confirmCancelId = null;
    this.search = "";
    this.filters = {
      journalId: "",
      dateFrom: _JournalEntriesComponent.firstDayOfMonth(),
      dateTo: _JournalEntriesComponent.today(),
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
    this.filters = {
      journalId: "",
      dateFrom: _JournalEntriesComponent.firstDayOfMonth(),
      dateTo: _JournalEntriesComponent.today(),
      state: ""
    };
    this.search = "";
    this.loadMoves();
  }
  exportToExcel() {
    const data = this.filteredMoves.map((m) => ({
      "N\xB0 Pi\xE8ce": m.name || "Brouillon",
      "Date": m.date ? new Date(m.date).toLocaleDateString("fr-FR") : "",
      "Journal": m.journalName || "",
      "R\xE9f\xE9rence": m.ref || "",
      "Partenaire": m.partnerName || "",
      "Total D\xE9bit": m.totalDebit || 0,
      "Total Cr\xE9dit": m.totalCredit || 0,
      "Statut": this.getStateLabel(m.state)
    }));
    const ws = utils.json_to_sheet(data);
    ws["!cols"] = [20, 14, 20, 24, 24, 16, 16, 12].map((wch) => ({ wch }));
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Pi\xE8ces");
    writeFileSync(wb, `ecritures_${_JournalEntriesComponent.today()}.xlsx`);
  }
  postMove(id, event) {
    event.stopPropagation();
    if (!confirm("Valider cette pi\xE8ce ? Cette action est irr\xE9versible."))
      return;
    this.accountingService.postMove(id).subscribe({
      next: () => this.loadMoves(),
      error: (err) => alert(err.error?.message || "Erreur lors de la validation")
    });
  }
  reverseMove(id, event) {
    event.stopPropagation();
    if (!confirm("Extourner cette pi\xE8ce ? Une pi\xE8ce inverse valid\xE9e sera cr\xE9\xE9e."))
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalEntriesComponent, selectors: [["app-journal-entries"]], decls: 64, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-actions"], ["title", "Exporter en Excel", 1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click"], [1, "filters-bar"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "draft"], ["value", "posted"], ["value", "cancel"], [1, "filter-group", 2, "flex", "1", "min-width", "200px"], [1, "search-box"], ["type", "text", "placeholder", "N\xB0 pi\xE8ce, r\xE9f\xE9rence, partenaire...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "table-container"], [2, "text-align", "center", "padding", "60px"], [1, "empty-state"], [1, "spinner"], [2, "padding", "8px 16px 4px", "font-size", "13px", "color", "#6c757d"], [1, "table-erp"], [1, "text-right"], [1, "text-center"], [2, "cursor", "pointer"], [2, "cursor", "pointer", 3, "click"], [1, "text-muted"], [1, "text-right", "amount-debit"], [1, "text-right", "amount-credit"], [1, "text-center", 3, "click"], [1, "action-btns"], ["title", "Voir/Modifier", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["title", "Valider", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#28a745"], ["title", "Extourner", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#6f42c1"], [2, "color", "#adb5bd", "padding", "4px 6px", "display", "inline-flex", "align-items", "center", 3, "title"], ["title", "Valider", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#28a745", 3, "click"], ["title", "Extourner", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#6f42c1", 3, "click"], [1, "material-icons", 2, "font-size", "16px"]], template: function JournalEntriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Pi\xE8ces Comptables ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_7_listener() {
          return ctx.exportToExcel();
        });
        \u0275\u0275elementStart(8, "span", 3);
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Exporter Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_11_listener() {
          return ctx.router.navigate(["/accounting/journal-entries/new"]);
        });
        \u0275\u0275elementStart(12, "span", 3);
        \u0275\u0275text(13, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Nouvelle pi\xE8ce ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "label");
        \u0275\u0275text(18, "Journal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_select_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.journalId, $event) || (ctx.filters.journalId = $event);
          return $event;
        });
        \u0275\u0275elementStart(20, "option", 10);
        \u0275\u0275text(21, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(22, JournalEntriesComponent_For_23_Template, 2, 3, "option", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 8)(25, "label");
        \u0275\u0275text(26, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.dateFrom, $event) || (ctx.filters.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 8)(29, "label");
        \u0275\u0275text(30, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.dateTo, $event) || (ctx.filters.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 8)(33, "label");
        \u0275\u0275text(34, "Statut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_select_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.state, $event) || (ctx.filters.state = $event);
          return $event;
        });
        \u0275\u0275elementStart(36, "option", 10);
        \u0275\u0275text(37, "Tous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 13);
        \u0275\u0275text(39, "Brouillon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 14);
        \u0275\u0275text(41, "Valid\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 15);
        \u0275\u0275text(43, "Annul\xE9");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 16)(45, "label");
        \u0275\u0275text(46, "Rechercher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 17)(48, "span", 3);
        \u0275\u0275text(49, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_input_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 19)(52, "button", 6);
        \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_52_listener() {
          return ctx.loadMoves();
        });
        \u0275\u0275elementStart(53, "span", 3);
        \u0275\u0275text(54, "filter_list");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " Filtrer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 20);
        \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_56_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275elementStart(57, "span", 3);
        \u0275\u0275text(58, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " R\xE9initialiser ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 21);
        \u0275\u0275conditionalCreate(61, JournalEntriesComponent_Conditional_61_Template, 2, 0, "div", 22)(62, JournalEntriesComponent_Conditional_62_Template, 7, 0, "div", 23)(63, JournalEntriesComponent_Conditional_63_Template, 27, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.filteredMoves.length === 0);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.journalId);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.journals);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.state);
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.loading ? 61 : ctx.filteredMoves.length === 0 ? 62 : 63);
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
      Pi\xE8ces Comptables
    </h1>
    <div class="page-actions">
      <button class="btn btn-outline" (click)="exportToExcel()" [disabled]="filteredMoves.length === 0" title="Exporter en Excel">
        <span class="material-icons">download</span>
        Exporter Excel
      </button>
      <button class="btn btn-primary" (click)="router.navigate(['/accounting/journal-entries/new'])">
        <span class="material-icons">add</span>
        Nouvelle pi\xE8ce
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
    <div class="filter-group" style="flex:1;min-width:200px">
      <label>Rechercher</label>
      <div class="search-box">
        <span class="material-icons">search</span>
        <input type="text" class="form-control" placeholder="N\xB0 pi\xE8ce, r\xE9f\xE9rence, partenaire..."
          [(ngModel)]="search">
      </div>
    </div>
    <div class="filter-actions">
      <button class="btn btn-primary" (click)="loadMoves()">
        <span class="material-icons">filter_list</span>
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
    } @else if (filteredMoves.length === 0) {
      <div class="empty-state">
        <span class="material-icons">receipt_long</span>
        <h3>Aucune pi\xE8ce trouv\xE9e</h3>
        <p>Modifiez les filtres ou cr\xE9ez une nouvelle pi\xE8ce comptable.</p>
      </div>
    } @else {
      <div style="padding:8px 16px 4px;font-size:13px;color:#6c757d">
        {{ filteredMoves.length }} pi\xE8ce(s)
        @if (search.trim()) { <span>\u2014 filtr\xE9e(s) sur "{{ search }}"</span> }
      </div>
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
          @for (move of filteredMoves; track move.id) {
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
                    <span title="{{ move.reversalId ? 'D\xE9j\xE0 extourn\xE9e' : 'Pi\xE8ce d\\'extourne' }}"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalEntriesComponent, { className: "JournalEntriesComponent", filePath: "app/modules/accounting/components/journal-entries/journal-entries.component.ts", lineNumber: 18 });
})();
export {
  JournalEntriesComponent
};
//# sourceMappingURL=chunk-5XOG3QQD.js.map
