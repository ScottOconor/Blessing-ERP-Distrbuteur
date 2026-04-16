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
  ɵɵclassProp,
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
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/journals/journal-detail/journal-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.date;
function JournalDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.journal.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.journal.name);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + ctx_r0.journal.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(ctx_r0.journal.type));
  }
}
function JournalDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Journal #", ctx_r0.journalId);
  }
}
function JournalDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab = "balances");
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Soldes journaliers ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab === "balances");
  }
}
function JournalDetailComponent_Conditional_19_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_19_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Effacer ");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_19_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 27);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 3);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune \xE9criture pour ce journal");
    \u0275\u0275elementEnd()();
  }
}
function JournalDetailComponent_Conditional_19_Conditional_17_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_19_Conditional_17_For_20_Template_tr_click_0_listener() {
      const move_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEntry(move_r6));
    });
    \u0275\u0275elementStart(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 33);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const move_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r6.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 9, move_r6.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r6.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r6.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStateBadge(move_r6.state || "draft"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(move_r6.state || "draft"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 12, move_r6.totalDebit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, move_r6.totalCredit, "1.0-0"));
  }
}
function JournalDetailComponent_Conditional_19_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 28)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 29);
    \u0275\u0275text(15, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 29);
    \u0275\u0275text(17, "Cr\xE9dit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, JournalDetailComponent_Conditional_19_Conditional_17_For_20_Template, 19, 18, "tr", 30, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr", 31)(23, "td", 32)(24, "strong");
    \u0275\u0275text(25, "Totaux");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 33)(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 33)(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.filteredMoves);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 2, ctx_r0.totalDebit(), "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 5, ctx_r0.totalCredit(), "1.0-0"));
  }
}
function JournalDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_19_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterState, $event) || (ctx_r0.filterState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 15);
    \u0275\u0275text(3, "Tous les \xE9tats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 16);
    \u0275\u0275text(5, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 17);
    \u0275\u0275text(7, "Valid\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 18);
    \u0275\u0275text(9, "Annul\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_19_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterDateFrom, $event) || (ctx_r0.filterDateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_19_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterDateTo, $event) || (ctx_r0.filterDateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, JournalDetailComponent_Conditional_19_Conditional_12_Template, 4, 0, "button", 21);
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, JournalDetailComponent_Conditional_19_Conditional_15_Template, 4, 0, "div", 23)(16, JournalDetailComponent_Conditional_19_Conditional_16_Template, 5, 0, "div", 24)(17, JournalDetailComponent_Conditional_19_Conditional_17_Template, 34, 8, "div", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterState);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterDateFrom);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterDateTo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filterState || ctx_r0.filterDateFrom || ctx_r0.filterDateTo ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.filteredMoves.length, " \xE9criture(s)");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingMoves ? 15 : ctx_r0.filteredMoves.length === 0 ? 16 : 17);
  }
}
function JournalDetailComponent_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 27);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 3);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun solde journalier enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function JournalDetailComponent_Conditional_20_Conditional_2_For_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_20_Conditional_2_For_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_20_Conditional_2_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 33);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 33)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 38);
    \u0275\u0275conditionalCreate(18, JournalDetailComponent_Conditional_20_Conditional_2_For_18_Conditional_18_Template, 2, 0, "span", 41)(19, JournalDetailComponent_Conditional_20_Conditional_2_For_18_Conditional_19_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bal_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 10, bal_r7.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 13, bal_r7.openingBalance, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 16, bal_r7.totalDebit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 19, bal_r7.totalCredit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("positive", bal_r7.closingBalance >= 0)("negative", bal_r7.closingBalance < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 22, bal_r7.closingBalance, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(bal_r7.closed ? 18 : 19);
  }
}
function JournalDetailComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 37)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 29);
    \u0275\u0275text(7, "Solde ouverture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 29);
    \u0275\u0275text(9, "Total d\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 29);
    \u0275\u0275text(11, "Total cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 29);
    \u0275\u0275text(13, "Solde cl\xF4ture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 38);
    \u0275\u0275text(15, "Cl\xF4tur\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, JournalDetailComponent_Conditional_20_Conditional_2_For_18_Template, 20, 25, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.balances);
  }
}
function JournalDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, JournalDetailComponent_Conditional_20_Conditional_0_Template, 4, 0, "div", 23)(1, JournalDetailComponent_Conditional_20_Conditional_1_Template, 5, 0, "div", 24)(2, JournalDetailComponent_Conditional_20_Conditional_2_Template, 19, 0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loadingBalances ? 0 : ctx_r0.balances.length === 0 ? 1 : 2);
  }
}
var JournalDetailComponent = class _JournalDetailComponent {
  constructor(route, router, accountingService, authService) {
    this.route = route;
    this.router = router;
    this.accountingService = accountingService;
    this.authService = authService;
    this.journal = null;
    this.moves = [];
    this.balances = [];
    this.loading = false;
    this.loadingMoves = false;
    this.loadingBalances = false;
    this.activeTab = "moves";
    this.filterState = "";
    this.filterDateFrom = "";
    this.filterDateTo = "";
    this.journalTypes = [
      { value: "sale", label: "Vente" },
      { value: "purchase", label: "Achat" },
      { value: "cash", label: "Caisse" },
      { value: "bank", label: "Banque" },
      { value: "general", label: "OD" }
    ];
  }
  ngOnInit() {
    this.journalId = +this.route.snapshot.paramMap.get("id");
    this.loadJournal();
    this.loadMoves();
  }
  loadJournal() {
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (journals) => {
        this.journal = journals.find((j) => j.id === this.journalId) || null;
        if (this.journal && this.hasDailyBalance()) {
          this.loadBalances();
        }
      }
    });
  }
  loadMoves() {
    this.loadingMoves = true;
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournalMoves(this.journalId, companyId).subscribe({
      next: (data) => {
        this.moves = data;
        this.loadingMoves = false;
      },
      error: () => {
        this.loadingMoves = false;
      }
    });
  }
  loadBalances() {
    this.loadingBalances = true;
    this.accountingService.getDailyBalances(this.journalId).subscribe({
      next: (data) => {
        this.balances = data;
        this.loadingBalances = false;
      },
      error: () => {
        this.loadingBalances = false;
      }
    });
  }
  hasDailyBalance() {
    const t = this.journal?.type;
    return t === "cash" || t === "bank" || t === "sale" || t === "purchase";
  }
  get filteredMoves() {
    return this.moves.filter((m) => {
      if (this.filterState && m.state !== this.filterState)
        return false;
      if (this.filterDateFrom && m.date < this.filterDateFrom)
        return false;
      if (this.filterDateTo && m.date > this.filterDateTo)
        return false;
      return true;
    });
  }
  getTypeLabel(type) {
    return this.journalTypes.find((t) => t.value === type)?.label || type;
  }
  getStateBadge(state) {
    const map = {
      draft: "badge-draft",
      posted: "badge-posted",
      cancel: "badge-cancelled"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = {
      draft: "Brouillon",
      posted: "Valid\xE9e",
      cancel: "Annul\xE9e"
    };
    return map[state] || state;
  }
  openEntry(move) {
    this.router.navigate(["/accounting/journal-entries", move.id]);
  }
  back() {
    this.router.navigate(["/accounting/journals"]);
  }
  clearFilters() {
    this.filterState = "";
    this.filterDateFrom = "";
    this.filterDateTo = "";
  }
  totalDebit() {
    return this.filteredMoves.reduce((s, m) => s + (m.totalDebit || 0), 0);
  }
  totalCredit() {
    return this.filteredMoves.reduce((s, m) => s + (m.totalCredit || 0), 0);
  }
  static {
    this.\u0275fac = function JournalDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JournalDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalDetailComponent, selectors: [["app-journal-detail"]], decls: 21, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "tab-btn", 3, "active"], [1, "journal-code-badge"], [1, "type-badge"], [1, "filters-bar"], [1, "filter-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "draft"], ["value", "posted"], ["value", "cancel"], ["type", "date", "placeholder", "Du", 1, "filter-control", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Au", 1, "filter-control", 3, "ngModelChange", "ngModel"], [1, "btn-clear"], [1, "filter-count"], [1, "loading-state"], [1, "empty-state"], [1, "table-card"], [1, "btn-clear", 3, "click"], [1, "material-icons", "spin"], [1, "moves-table"], [1, "text-right"], [1, "move-row"], [1, "totals-row"], ["colspan", "5"], [1, "text-right", "font-mono"], [1, "move-row", 3, "click"], [1, "font-mono"], [1, "text-muted"], [1, "balances-table"], [1, "text-center"], [1, "text-right", "font-mono", "debit-col"], [1, "text-right", "font-mono", "credit-col"], [1, "material-icons", 2, "color", "#198754", "font-size", "18px"], [1, "material-icons", 2, "color", "#dee2e6", "font-size", "18px"]], template: function JournalDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function JournalDetailComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275conditionalCreate(6, JournalDetailComponent_Conditional_6_Template, 6, 5)(7, JournalDetailComponent_Conditional_7_Template, 2, 1, "h1", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
        \u0275\u0275listener("click", function JournalDetailComponent_Template_button_click_9_listener() {
          return ctx.router.navigate(["/accounting/journal-entries/new"]);
        });
        \u0275\u0275elementStart(10, "span", 3);
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Nouvelle \xE9criture ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
        \u0275\u0275listener("click", function JournalDetailComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "moves";
        });
        \u0275\u0275elementStart(15, "span", 3);
        \u0275\u0275text(16, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, JournalDetailComponent_Conditional_18_Template, 4, 2, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, JournalDetailComponent_Conditional_19_Template, 18, 6);
        \u0275\u0275conditionalCreate(20, JournalDetailComponent_Conditional_20_Template, 3, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.journal ? 6 : 7);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", ctx.activeTab === "moves");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" \xC9critures (", ctx.moves.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasDailyBalance() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "moves" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "balances" ? 20 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #714B67;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #5a3a52;\n}\n.journal-code-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  background: #f3e8f3;\n  color: #714B67;\n  border-radius: 6px;\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border: 1px solid #d4b8d4;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.type-badge.type-sale[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.type-badge.type-purchase[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #664d03;\n}\n.type-badge.type-cash[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.type-badge.type-bank[_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.type-badge.type-general[_ngcontent-%COMP%] {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #714B67;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #714B67;\n  border-bottom-color: #714B67;\n  font-weight: 600;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.filter-control[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.filter-control[_ngcontent-%COMP%]:focus {\n  border-color: #714B67;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #6c757d;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.filter-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 13px;\n  color: #6c757d;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #adb5bd;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.moves-table[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.moves-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.moves-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.moves-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.move-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.move-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f3f8;\n}\ntfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.debit-col[_ngcontent-%COMP%] {\n  color: #0a5c45;\n}\n.credit-col[_ngcontent-%COMP%] {\n  color: #842029;\n}\n.positive[_ngcontent-%COMP%] {\n  color: #0a5c45;\n}\n.negative[_ngcontent-%COMP%] {\n  color: #842029;\n}\n/*# sourceMappingURL=journal-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JournalDetailComponent, [{
    type: Component,
    args: [{ selector: "app-journal-detail", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Header -->
  <div class="page-header">
    <button class="btn-back" (click)="back()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      @if (journal) {
        <span class="journal-code-badge">{{ journal.code }}</span>
        <h1 class="page-title">{{ journal.name }}</h1>
        <span class="type-badge" [class]="'type-' + journal.type">{{ getTypeLabel(journal.type) }}</span>
      } @else {
        <h1 class="page-title">Journal #{{ journalId }}</h1>
      }
    </div>
    <div class="header-actions">
      <button class="btn-primary" (click)="router.navigate(['/accounting/journal-entries/new'])">
        <span class="material-icons">add</span> Nouvelle \xE9criture
      </button>
    </div>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab-btn" [class.active]="activeTab === 'moves'" (click)="activeTab = 'moves'">
      <span class="material-icons">receipt_long</span> \xC9critures ({{ moves.length }})
    </button>
    @if (hasDailyBalance()) {
      <button class="tab-btn" [class.active]="activeTab === 'balances'" (click)="activeTab = 'balances'">
        <span class="material-icons">account_balance_wallet</span> Soldes journaliers
      </button>
    }
  </div>

  <!-- Tab: Moves -->
  @if (activeTab === 'moves') {
    <!-- Filters -->
    <div class="filters-bar">
      <select class="filter-control" [(ngModel)]="filterState">
        <option value="">Tous les \xE9tats</option>
        <option value="draft">Brouillon</option>
        <option value="posted">Valid\xE9e</option>
        <option value="cancel">Annul\xE9e</option>
      </select>
      <input type="date" class="filter-control" [(ngModel)]="filterDateFrom" placeholder="Du">
      <input type="date" class="filter-control" [(ngModel)]="filterDateTo" placeholder="Au">
      @if (filterState || filterDateFrom || filterDateTo) {
        <button class="btn-clear" (click)="clearFilters()">
          <span class="material-icons">close</span> Effacer
        </button>
      }
      <span class="filter-count">{{ filteredMoves.length }} \xE9criture(s)</span>
    </div>

    @if (loadingMoves) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
    } @else if (filteredMoves.length === 0) {
      <div class="empty-state">
        <span class="material-icons">receipt_long</span>
        <p>Aucune \xE9criture pour ce journal</p>
      </div>
    } @else {
      <div class="table-card">
        <table class="moves-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th>
              <th>Date</th>
              <th>Libell\xE9</th>
              <th>Partenaire</th>
              <th>\xC9tat</th>
              <th class="text-right">D\xE9bit</th>
              <th class="text-right">Cr\xE9dit</th>
            </tr>
          </thead>
          <tbody>
            @for (move of filteredMoves; track move.id) {
              <tr class="move-row" (click)="openEntry(move)">
                <td class="font-mono">{{ move.name || '\u2014' }}</td>
                <td>{{ move.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ move.ref || '\u2014' }}</td>
                <td class="text-muted">{{ move.partnerName || '\u2014' }}</td>
                <td><span [class]="getStateBadge(move.state || 'draft')">{{ getStateLabel(move.state || 'draft') }}</span></td>
                <td class="text-right font-mono">{{ move.totalDebit | number:'1.0-0' }}</td>
                <td class="text-right font-mono">{{ move.totalCredit | number:'1.0-0' }}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="totals-row">
              <td colspan="5"><strong>Totaux</strong></td>
              <td class="text-right font-mono"><strong>{{ totalDebit() | number:'1.0-0' }}</strong></td>
              <td class="text-right font-mono"><strong>{{ totalCredit() | number:'1.0-0' }}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }

  <!-- Tab: Daily Balances -->
  @if (activeTab === 'balances') {
    @if (loadingBalances) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
    } @else if (balances.length === 0) {
      <div class="empty-state">
        <span class="material-icons">account_balance_wallet</span>
        <p>Aucun solde journalier enregistr\xE9</p>
      </div>
    } @else {
      <div class="table-card">
        <table class="balances-table">
          <thead>
            <tr>
              <th>Date</th>
              <th class="text-right">Solde ouverture</th>
              <th class="text-right">Total d\xE9bit</th>
              <th class="text-right">Total cr\xE9dit</th>
              <th class="text-right">Solde cl\xF4ture</th>
              <th class="text-center">Cl\xF4tur\xE9</th>
            </tr>
          </thead>
          <tbody>
            @for (bal of balances; track bal.date) {
              <tr>
                <td>{{ bal.date | date:'dd/MM/yyyy' }}</td>
                <td class="text-right font-mono">{{ bal.openingBalance | number:'1.0-0' }}</td>
                <td class="text-right font-mono debit-col">{{ bal.totalDebit | number:'1.0-0' }}</td>
                <td class="text-right font-mono credit-col">{{ bal.totalCredit | number:'1.0-0' }}</td>
                <td class="text-right font-mono" [class.positive]="bal.closingBalance >= 0" [class.negative]="bal.closingBalance < 0">
                  <strong>{{ bal.closingBalance | number:'1.0-0' }}</strong>
                </td>
                <td class="text-center">
                  @if (bal.closed) {
                    <span class="material-icons" style="color:#198754;font-size:18px">check_circle</span>
                  } @else {
                    <span class="material-icons" style="color:#dee2e6;font-size:18px">radio_button_unchecked</span>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  }
</div>

`, styles: ['/* src/app/modules/accounting/components/journals/journal-detail/journal-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header .header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back:hover {\n  background: #f0f0f0;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #714B67;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #5a3a52;\n}\n.journal-code-badge {\n  display: inline-block;\n  padding: 4px 10px;\n  background: #f3e8f3;\n  color: #714B67;\n  border-radius: 6px;\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border: 1px solid #d4b8d4;\n}\n.type-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.type-badge.type-sale {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.type-badge.type-purchase {\n  background: #fff3cd;\n  color: #664d03;\n}\n.type-badge.type-cash {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.type-badge.type-bank {\n  background: #cce5ff;\n  color: #004085;\n}\n.type-badge.type-general {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: #714B67;\n}\n.tab-btn.active {\n  color: #714B67;\n  border-bottom-color: #714B67;\n  font-weight: 600;\n}\n.filters-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.filter-control {\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.filter-control:focus {\n  border-color: #714B67;\n}\n.btn-clear {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 12px;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #6c757d;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-clear .material-icons {\n  font-size: 16px;\n}\n.btn-clear:hover {\n  background: #f0f0f0;\n}\n.filter-count {\n  margin-left: auto;\n  font-size: 13px;\n  color: #6c757d;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 48px;\n  color: #adb5bd;\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.table-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.moves-table,\n.balances-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.moves-table th,\n.balances-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.moves-table td,\n.balances-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.moves-table tbody tr:last-child td,\n.balances-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.move-row {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.move-row:hover td {\n  background: #f8f3f8;\n}\ntfoot .totals-row td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.font-mono {\n  font-family: monospace;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n.debit-col {\n  color: #0a5c45;\n}\n.credit-col {\n  color: #842029;\n}\n.positive {\n  color: #0a5c45;\n}\n.negative {\n  color: #842029;\n}\n/*# sourceMappingURL=journal-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AccountingService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalDetailComponent, { className: "JournalDetailComponent", filePath: "src/app/modules/accounting/components/journals/journal-detail/journal-detail.component.ts", lineNumber: 17 });
})();
export {
  JournalDetailComponent
};
//# sourceMappingURL=chunk-VDO2TENH.js.map
