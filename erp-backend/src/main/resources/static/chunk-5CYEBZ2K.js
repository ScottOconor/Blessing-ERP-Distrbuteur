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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/journals/journal-detail/journal-detail.component.ts
var _forTrack0 = ($index, $item) => $item.monthKey;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.date;
function JournalDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
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
function JournalDetailComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function JournalDetailComponent_Conditional_16_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Arr\xEAt\xE9 au ", ctx_r0.fmt(ctx_r0.latestDate));
  }
}
function JournalDetailComponent_Conditional_16_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("trend-up", ctx_r0.latestBalance.totalDebit >= ctx_r0.latestBalance.totalCredit)("trend-down", ctx_r0.latestBalance.totalDebit < ctx_r0.latestBalance.totalCredit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.latestBalance.totalDebit >= ctx_r0.latestBalance.totalCredit ? "trending_up" : "trending_down", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.latestBalance.totalDebit >= ctx_r0.latestBalance.totalCredit ? "+" : "-", " ", \u0275\u0275pipeBind2(4, 7, ctx_r0.latestBalance.totalDebit - ctx_r0.latestBalance.totalCredit, "1.0-0"), " ");
  }
}
function JournalDetailComponent_Conditional_16_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_16_Conditional_1_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeToday());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "lock_clock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.closingDay);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.closingDay ? "Cl\xF4ture\u2026" : "Cl\xF4turer aujourd'hui", " ");
  }
}
function JournalDetailComponent_Conditional_16_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Journ\xE9e cl\xF4tur\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "span", 24);
    \u0275\u0275text(7, "Solde actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, JournalDetailComponent_Conditional_16_Conditional_1_Conditional_8_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 26)(10, "span", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 28);
    \u0275\u0275text(14, "FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, JournalDetailComponent_Conditional_16_Conditional_1_Conditional_15_Template, 5, 10, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 30);
    \u0275\u0275conditionalCreate(17, JournalDetailComponent_Conditional_16_Conditional_1_Conditional_17_Template, 4, 2, "button", 31);
    \u0275\u0275conditionalCreate(18, JournalDetailComponent_Conditional_16_Conditional_1_Conditional_18_Template, 4, 0, "span", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hero-positive", ctx_r0.currentBalance >= 0)("hero-negative", ctx_r0.currentBalance < 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.journal == null ? null : ctx_r0.journal.type) === "cash" ? "account_balance_wallet" : "account_balance");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.latestDate ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("neg", ctx_r0.currentBalance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 12, ctx_r0.currentBalance, "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.latestBalance ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.latestBalance && !ctx_r0.latestBalance.closed ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.latestBalance == null ? null : ctx_r0.latestBalance.closed) ? 18 : -1);
  }
}
function JournalDetailComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.closeMsg);
  }
}
function JournalDetailComponent_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.closeError);
  }
}
function JournalDetailComponent_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 35)(2, "div", 36)(3, "span", 3);
    \u0275\u0275text(4, "south_west");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 37)(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10, "FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 40);
    \u0275\u0275text(12, "Entr\xE9es (d\xE9bits)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 41)(14, "div", 36)(15, "span", 3);
    \u0275\u0275text(16, "north_east");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "span", 38);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 39);
    \u0275\u0275text(22, "FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 40);
    \u0275\u0275text(24, "Sorties (cr\xE9dits)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 42)(26, "div", 36)(27, "span", 3);
    \u0275\u0275text(28, "balance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 37)(30, "span", 38);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 39);
    \u0275\u0275text(34, "FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 40);
    \u0275\u0275text(36, "Flux net");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 43)(38, "div", 36)(39, "span", 3);
    \u0275\u0275text(40, "today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 37)(42, "span", 38);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 40);
    \u0275\u0275text(45, "Jour(s) avec activit\xE9");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 10, ctx_r0.periodTotalDebit, "1.0-0"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 13, ctx_r0.periodTotalCredit, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("kpi-net-pos", ctx_r0.periodNet >= 0)("kpi-net-neg", ctx_r0.periodNet < 0);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("neg", ctx_r0.periodNet < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 16, ctx_r0.periodNet, "1.0-0"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.filteredBalances.length);
  }
}
function JournalDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, JournalDetailComponent_Conditional_16_Conditional_0_Template, 1, 0, "div", 15)(1, JournalDetailComponent_Conditional_16_Conditional_1_Template, 19, 15, "div", 16);
    \u0275\u0275conditionalCreate(2, JournalDetailComponent_Conditional_16_Conditional_2_Template, 4, 1, "div", 17);
    \u0275\u0275conditionalCreate(3, JournalDetailComponent_Conditional_16_Conditional_3_Template, 4, 1, "div", 18);
    \u0275\u0275conditionalCreate(4, JournalDetailComponent_Conditional_16_Conditional_4_Template, 46, 19, "div", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loadingBalances && ctx_r0.balances.length === 0 ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.closeMsg ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.closeError ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.balances.length > 0 ? 4 : -1);
  }
}
function JournalDetailComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab = "balances");
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "monitoring");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Historique soldes ");
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab === "balances");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.balances.length);
  }
}
function JournalDetailComponent_Conditional_25_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_25_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
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
function JournalDetailComponent_Conditional_25_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 57);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_25_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 3);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune \xE9criture trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, " Solde ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mg_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("m-chip-pos", mg_r8.closingBalance >= 0)("m-chip-neg", mg_r8.closingBalance < 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 5, mg_r8.closingBalance, "1.0-0"));
  }
}
function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "span", 77);
    \u0275\u0275text(2, " Solde\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_18_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 86);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_18_For_20_Template_tr_click_0_listener() {
      const move_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEntry(move_r10));
    });
    \u0275\u0275elementStart(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 88);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 90);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 91);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 92);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const move_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r10.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 9, move_r10.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r10.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r10.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStateBadge(move_r10.state || "draft"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(move_r10.state || "draft"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 12, move_r10.totalDebit || 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, move_r10.totalCredit || 0, "1.0-0"));
  }
}
function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_18_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "span", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 96)(5, "span", 97);
    \u0275\u0275text(6, "Solde du compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 98);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 99)(10, "span", 100);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 101);
    \u0275\u0275text(14, "FCFA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mg_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("mbb-pos", mg_r8.closingBalance >= 0)("mbb-neg", mg_r8.closingBalance < 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", mg_r8.closingBalance >= 0 ? "account_balance_wallet" : "warning", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Au 31 ", mg_r8.monthLabel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 7, mg_r8.closingBalance, "1.0-0"));
  }
}
function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "table", 78)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementStart(14, "th", 79);
    \u0275\u0275text(15, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 79);
    \u0275\u0275text(17, "Cr\xE9dit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_18_For_20_Template, 19, 18, "tr", 80, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr", 81)(23, "td", 82);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 83);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 84);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(31, JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_18_Conditional_31_Template, 15, 10, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mg_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(19);
    \u0275\u0275repeater(mg_r8.moves);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Mouvement ", mg_r8.monthLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind2(27, 4, mg_r8.totalDebit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(30, 7, mg_r8.totalCredit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mg_r8.closingBalance !== null ? 31 : -1);
  }
}
function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_25_Conditional_17_For_14_Template_div_click_1_listener() {
      const mg_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleMonth(mg_r8.monthKey));
    });
    \u0275\u0275elementStart(2, "div", 66)(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 70)(10, "span", 71);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 72);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_16_Template, 5, 8, "span", 73)(17, JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_17_Template, 3, 0, "span", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, JournalDetailComponent_Conditional_25_Conditional_17_For_14_Conditional_18_Template, 32, 10, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mg_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-open", ctx_r0.isMonthExpanded(mg_r8.monthKey));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isMonthExpanded(mg_r8.monthKey) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mg_r8.monthLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", mg_r8.moves.length, " pi\xE8ce(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind2(12, 9, mg_r8.totalDebit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(15, 12, mg_r8.totalCredit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mg_r8.closingBalance !== null ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isMonthExpanded(mg_r8.monthKey) ? 18 : -1);
  }
}
function JournalDetailComponent_Conditional_25_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60)(4, "button", 61);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_25_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.expandAllMonths());
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Tout ouvrir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 61);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_25_Conditional_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.collapseAllMonths());
    });
    \u0275\u0275elementStart(9, "span", 3);
    \u0275\u0275text(10, "unfold_less");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Tout fermer ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 62);
    \u0275\u0275repeaterCreate(13, JournalDetailComponent_Conditional_25_Conditional_17_For_14_Template, 19, 15, "div", 63, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.monthGroups.length, " mois \xB7 ", ctx_r0.filteredMoves.length, " \xE9criture(s)");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.monthGroups);
  }
}
function JournalDetailComponent_Conditional_25_Conditional_18_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 86);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_25_Conditional_18_For_20_Template_tr_click_0_listener() {
      const move_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEntry(move_r12));
    });
    \u0275\u0275elementStart(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 88);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 90);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 91);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 92);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const move_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r12.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 9, move_r12.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(move_r12.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r12.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStateBadge(move_r12.state || "draft"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(move_r12.state || "draft"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 12, move_r12.totalDebit || 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, move_r12.totalCredit || 0, "1.0-0"));
  }
}
function JournalDetailComponent_Conditional_25_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table", 78)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementStart(14, "th", 79);
    \u0275\u0275text(15, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 79);
    \u0275\u0275text(17, "Cr\xE9dit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, JournalDetailComponent_Conditional_25_Conditional_18_For_20_Template, 19, 18, "tr", 80, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr")(23, "td", 82);
    \u0275\u0275text(24, "Totaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 83);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 84);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.filteredMoves);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 2, ctx_r0.totalDebit(), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 5, ctx_r0.totalCredit(), "1.0-0"));
  }
}
function JournalDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_25_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterState, $event) || (ctx_r0.filterState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 46);
    \u0275\u0275text(3, "Tous les \xE9tats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 47);
    \u0275\u0275text(5, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 48);
    \u0275\u0275text(7, "Valid\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 49);
    \u0275\u0275text(9, "Annul\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_25_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterDateFrom, $event) || (ctx_r0.filterDateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_25_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterDateTo, $event) || (ctx_r0.filterDateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, JournalDetailComponent_Conditional_25_Conditional_12_Template, 4, 0, "button", 51);
    \u0275\u0275elementStart(13, "span", 52);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, JournalDetailComponent_Conditional_25_Conditional_15_Template, 4, 0, "div", 53)(16, JournalDetailComponent_Conditional_25_Conditional_16_Template, 5, 0, "div", 54)(17, JournalDetailComponent_Conditional_25_Conditional_17_Template, 15, 2)(18, JournalDetailComponent_Conditional_25_Conditional_18_Template, 31, 8, "div", 55);
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
    \u0275\u0275conditional(ctx_r0.loadingMoves ? 15 : ctx_r0.filteredMoves.length === 0 ? 16 : ctx_r0.hasDailyBalance() ? 17 : 18);
  }
}
function JournalDetailComponent_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function JournalDetailComponent_Conditional_26_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.balDateFrom = "";
      return \u0275\u0275resetView(ctx_r0.balDateTo = "");
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Effacer ");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 57);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function JournalDetailComponent_Conditional_26_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 3);
    \u0275\u0275text(2, "monitoring");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun solde enregistr\xE9 pour cette p\xE9riode");
    \u0275\u0275elementEnd()();
  }
}
function JournalDetailComponent_Conditional_26_Conditional_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 118);
    \u0275\u0275element(2, "div", 119);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275element(4, "div", 120);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 121);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bal_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r0.barPct(bal_r15.totalDebit), "%");
    \u0275\u0275property("title", \u0275\u0275interpolate1("Entr\xE9es: ", \u0275\u0275pipeBind2(3, 9, bal_r15.totalDebit, "1.0-0"), " FCFA"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r0.barPct(bal_r15.totalCredit), "%");
    \u0275\u0275property("title", \u0275\u0275interpolate1("Sorties: ", \u0275\u0275pipeBind2(5, 12, bal_r15.totalCredit, "1.0-0"), " FCFA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fmt(bal_r15.date).slice(0, 5));
  }
}
function JournalDetailComponent_Conditional_26_Conditional_8_For_34_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125)(1, "span", 3);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd()();
  }
}
function JournalDetailComponent_Conditional_26_Conditional_8_For_34_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126)(1, "span", 3);
    \u0275\u0275text(2, "lock_open");
    \u0275\u0275elementEnd()();
  }
}
function JournalDetailComponent_Conditional_26_Conditional_8_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 123);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 91);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 92);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 124);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 114);
    \u0275\u0275conditionalCreate(16, JournalDetailComponent_Conditional_26_Conditional_8_For_34_Conditional_16_Template, 3, 0, "span", 125)(17, JournalDetailComponent_Conditional_26_Conditional_8_For_34_Conditional_17_Template, 3, 0, "span", 126);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bal_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-closed", bal_r16.closed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(bal_r16.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 12, bal_r16.openingBalance, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind2(8, 15, bal_r16.totalDebit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(11, 18, bal_r16.totalCredit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("balance-pos", bal_r16.closingBalance >= 0)("balance-neg", bal_r16.closingBalance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 21, bal_r16.closingBalance, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(bal_r16.closed ? 16 : 17);
  }
}
function JournalDetailComponent_Conditional_26_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "span", 107)(3, "span", 3);
    \u0275\u0275text(4, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Flux journaliers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 108);
    \u0275\u0275element(7, "span", 109);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "span", 110);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Sorties");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 111);
    \u0275\u0275repeaterCreate(14, JournalDetailComponent_Conditional_26_Conditional_8_For_15_Template, 8, 15, "div", 112, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 55)(17, "table", 113)(18, "thead")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 79);
    \u0275\u0275text(23, "Solde ouverture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 79);
    \u0275\u0275text(25, "Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 79);
    \u0275\u0275text(27, "Sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 79);
    \u0275\u0275text(29, "Solde cl\xF4ture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 114);
    \u0275\u0275text(31, "Cl\xF4tur\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275repeaterCreate(33, JournalDetailComponent_Conditional_26_Conditional_8_For_34_Template, 18, 24, "tr", 115, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "tfoot")(36, "tr")(37, "td", 116);
    \u0275\u0275text(38, "Totaux p\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "td");
    \u0275\u0275elementStart(40, "td", 83);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 84);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td", 117);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.filteredBalances.slice().reverse().slice(-14));
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.filteredBalances);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind2(42, 7, ctx_r0.periodTotalDebit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(45, 10, ctx_r0.periodTotalCredit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("balance-pos", ctx_r0.periodNet >= 0)("balance-neg", ctx_r0.periodNet < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 13, ctx_r0.periodNet, "1.0-0"), " ");
  }
}
function JournalDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "label", 102);
    \u0275\u0275text(2, "P\xE9riode :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_26_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.balDateFrom, $event) || (ctx_r0.balDateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function JournalDetailComponent_Conditional_26_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.balDateTo, $event) || (ctx_r0.balDateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, JournalDetailComponent_Conditional_26_Conditional_5_Template, 4, 0, "button", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, JournalDetailComponent_Conditional_26_Conditional_6_Template, 4, 0, "div", 53)(7, JournalDetailComponent_Conditional_26_Conditional_7_Template, 5, 0, "div", 54)(8, JournalDetailComponent_Conditional_26_Conditional_8_Template, 50, 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.balDateFrom);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.balDateTo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.balDateFrom || ctx_r0.balDateTo ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingBalances ? 6 : ctx_r0.filteredBalances.length === 0 ? 7 : 8);
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
    this.closingDay = false;
    this.closeMsg = "";
    this.closeError = "";
    this.activeTab = "moves";
    this.filterState = "";
    this.filterDateFrom = "";
    this.filterDateTo = "";
    this.balDateFrom = "";
    this.balDateTo = "";
    this.expandedMonths = /* @__PURE__ */ new Set();
    this.MONTHS_FR = [
      "Janvier",
      "F\xE9vrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Ao\xFBt",
      "Septembre",
      "Octobre",
      "Novembre",
      "D\xE9cembre"
    ];
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
        const currentMonthKey = (/* @__PURE__ */ new Date()).toISOString().substring(0, 7);
        this.expandedMonths.add(currentMonthKey);
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
        this.balances = data.sort((a, b) => b.date.localeCompare(a.date));
        this.loadingBalances = false;
      },
      error: () => {
        this.loadingBalances = false;
      }
    });
  }
  refresh() {
    this.loadMoves();
    if (this.hasDailyBalance())
      this.loadBalances();
  }
  hasDailyBalance() {
    const t = this.journal?.type;
    return t === "cash" || t === "bank";
  }
  // ── Solde ───────────────────────────────────────────────────────────────
  get latestBalance() {
    return this.balances.length ? this.balances[0] : null;
  }
  get currentBalance() {
    return this.latestBalance?.closingBalance ?? 0;
  }
  get latestDate() {
    return this.latestBalance?.date ?? "";
  }
  get filteredBalances() {
    return this.balances.filter((b) => {
      if (this.balDateFrom && b.date < this.balDateFrom)
        return false;
      if (this.balDateTo && b.date > this.balDateTo)
        return false;
      return true;
    });
  }
  get periodTotalDebit() {
    return this.filteredBalances.reduce((s, b) => s + b.totalDebit, 0);
  }
  get periodTotalCredit() {
    return this.filteredBalances.reduce((s, b) => s + b.totalCredit, 0);
  }
  get periodNet() {
    return this.periodTotalDebit - this.periodTotalCredit;
  }
  get maxBarValue() {
    return Math.max(...this.filteredBalances.map((b) => Math.max(b.totalDebit, b.totalCredit)), 1);
  }
  barPct(val) {
    return Math.round(val / this.maxBarValue * 100);
  }
  // ── Clôture journée ──────────────────────────────────────────────────────
  closeToday() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (!confirm(`Cl\xF4turer la journ\xE9e du ${this.fmt(today)} ? Cette action recalcule et verrouille le solde.`))
      return;
    this.closingDay = true;
    this.closeMsg = "";
    this.closeError = "";
    this.accountingService.closeDayBalance(this.journalId, today).subscribe({
      next: () => {
        this.closingDay = false;
        this.closeMsg = `Journ\xE9e du ${this.fmt(today)} cl\xF4tur\xE9e.`;
        this.loadBalances();
        setTimeout(() => this.closeMsg = "", 4e3);
      },
      error: (e) => {
        this.closingDay = false;
        this.closeError = e.error?.message || "Erreur lors de la cl\xF4ture.";
      }
    });
  }
  // ── Écritures ────────────────────────────────────────────────────────────
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
  totalDebit() {
    return this.filteredMoves.reduce((s, m) => s + (m.totalDebit || 0), 0);
  }
  totalCredit() {
    return this.filteredMoves.reduce((s, m) => s + (m.totalCredit || 0), 0);
  }
  // ── Regroupement par mois (caisse/banque) ────────────────────────────────
  get monthGroups() {
    const map = /* @__PURE__ */ new Map();
    for (const move of this.filteredMoves) {
      const key = move.date.substring(0, 7);
      if (!map.has(key))
        map.set(key, []);
      map.get(key).push(move);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([key, moves]) => {
      const [y, m] = key.split("-");
      const label = `${this.MONTHS_FR[parseInt(m) - 1]} ${y}`;
      const totalDebit = moves.reduce((s, mv) => s + (mv.totalDebit ?? 0), 0);
      const totalCredit = moves.reduce((s, mv) => s + (mv.totalCredit ?? 0), 0);
      const monthBals = this.balances.filter((b) => b.date.startsWith(key));
      const closingBalance = monthBals.length > 0 ? monthBals.reduce((best, b) => b.date > best.date ? b : best).closingBalance : null;
      return { monthKey: key, monthLabel: label, moves, totalDebit, totalCredit, closingBalance };
    });
  }
  toggleMonth(key) {
    if (this.expandedMonths.has(key))
      this.expandedMonths.delete(key);
    else
      this.expandedMonths.add(key);
  }
  isMonthExpanded(key) {
    return this.expandedMonths.has(key);
  }
  expandAllMonths() {
    this.monthGroups.forEach((g) => this.expandedMonths.add(g.monthKey));
  }
  collapseAllMonths() {
    this.expandedMonths.clear();
  }
  // ── Helpers ──────────────────────────────────────────────────────────────
  fmt(d) {
    if (!d)
      return "\u2014";
    const [y, m, dd] = d.split("-");
    return `${dd}/${m}/${y}`;
  }
  fmtM(n) {
    if (Math.abs(n) >= 1e6)
      return (n / 1e6).toFixed(2).replace(".", ",") + " M";
    if (Math.abs(n) >= 1e3)
      return (n / 1e3).toFixed(0) + " K";
    return Math.round(n).toString();
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
  static {
    this.\u0275fac = function JournalDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JournalDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalDetailComponent, selectors: [["app-journal-detail"]], decls: 27, vars: 8, consts: [[1, "page-wrap"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [1, "header-right"], ["title", "Actualiser", 1, "btn-icon-refresh", 3, "click"], [1, "btn-primary", 3, "click"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "tab-count"], [1, "tab-btn", 3, "active"], [1, "code-badge"], [1, "type-chip"], [1, "balance-hero", "skeleton-hero"], [1, "balance-hero", 3, "hero-positive", "hero-negative"], [1, "alert-ok"], [1, "alert-err"], [1, "kpi-row"], [1, "balance-hero"], [1, "hero-left"], [1, "hero-icon-wrap"], [1, "hero-text"], [1, "hero-label"], [1, "hero-date"], [1, "hero-balance"], [1, "balance-amount"], [1, "balance-cur"], [1, "balance-trend", 3, "trend-up", "trend-down"], [1, "hero-actions"], [1, "btn-close-day", 3, "disabled"], [1, "closed-pill"], [1, "balance-trend"], [1, "btn-close-day", 3, "click", "disabled"], [1, "kpi-card", "kpi-in"], [1, "kpi-icon-w"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-cur"], [1, "kpi-lbl"], [1, "kpi-card", "kpi-out"], [1, "kpi-card"], [1, "kpi-card", "kpi-count"], [1, "filters-row"], [1, "filter-ctl", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "draft"], ["value", "posted"], ["value", "cancel"], ["type", "date", 1, "filter-ctl", 3, "ngModelChange", "ngModel"], [1, "btn-clear"], [1, "filter-info"], [1, "loading-state"], [1, "empty-state"], [1, "table-card"], [1, "btn-clear", 3, "click"], [1, "material-icons", "spin"], [1, "months-toolbar"], [1, "months-info"], [1, "months-btns"], [1, "btn-sm-acc", 3, "click"], [1, "months-list"], [1, "month-block", 3, "is-open"], [1, "month-block"], [1, "month-hd", 3, "click"], [1, "month-hd-left"], [1, "material-icons", "month-chevron"], [1, "month-name"], [1, "month-badge"], [1, "month-hd-right"], [1, "m-chip", "m-chip-in"], [1, "m-chip", "m-chip-out"], [1, "m-chip", 3, "m-chip-pos", "m-chip-neg"], [1, "m-chip", "m-chip-loading"], [1, "month-body"], [1, "m-chip"], [1, "mini-spin"], [1, "moves-table"], [1, "r"], [1, "move-row"], [1, "month-totals-row"], ["colspan", "5", 1, "foot-label"], [1, "r", "mono", "foot-val", "debit-val"], [1, "r", "mono", "foot-val", "credit-val"], [1, "month-balance-bar", 3, "mbb-pos", "mbb-neg"], [1, "move-row", 3, "click"], [1, "mono"], [1, "date-col"], [1, "ref-col"], [1, "partner-col", "muted"], [1, "r", "mono", "debit-val"], [1, "r", "mono", "credit-val"], [1, "month-balance-bar"], [1, "mbb-left"], [1, "material-icons", "mbb-icon"], [1, "mbb-labels"], [1, "mbb-title"], [1, "mbb-sub"], [1, "mbb-amount"], [1, "mbb-value"], [1, "mbb-cur"], [1, "filter-label"], ["type", "date", "placeholder", "Du", 1, "filter-ctl", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Au", 1, "filter-ctl", 3, "ngModelChange", "ngModel"], [1, "card", "chart-card"], [1, "card-hd"], [1, "card-title"], [1, "chart-legend"], [1, "legend-dot", "dot-in"], [1, "legend-dot", "dot-out"], [1, "flux-chart"], [1, "flux-col"], [1, "balances-table"], [1, "c"], [3, "row-closed"], [1, "foot-label"], [1, "r", "mono", "foot-val"], [1, "flux-bars"], [1, "bar-in", 3, "title"], [1, "bar-out", 3, "title"], [1, "flux-date"], [1, "date-col", "bold"], [1, "r", "mono", "muted"], [1, "r", "mono", "bold"], [1, "closed-icon"], [1, "open-icon"]], template: function JournalDetailComponent_Template(rf, ctx) {
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
          return ctx.refresh();
        });
        \u0275\u0275elementStart(10, "span", 3);
        \u0275\u0275text(11, "refresh");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function JournalDetailComponent_Template_button_click_12_listener() {
          return ctx.router.navigate(["/accounting/journal-entries/new"], { queryParams: { journalId: ctx.journalId } });
        });
        \u0275\u0275elementStart(13, "span", 3);
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Nouvelle \xE9criture ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(16, JournalDetailComponent_Conditional_16_Template, 5, 4);
        \u0275\u0275elementStart(17, "div", 9)(18, "button", 10);
        \u0275\u0275listener("click", function JournalDetailComponent_Template_button_click_18_listener() {
          return ctx.activeTab = "moves";
        });
        \u0275\u0275elementStart(19, "span", 3);
        \u0275\u0275text(20, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " \xC9critures ");
        \u0275\u0275elementStart(22, "span", 11);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(24, JournalDetailComponent_Conditional_24_Template, 6, 3, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, JournalDetailComponent_Conditional_25_Template, 19, 6);
        \u0275\u0275conditionalCreate(26, JournalDetailComponent_Conditional_26_Template, 9, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.journal ? 6 : 7);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.hasDailyBalance() ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "moves");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.moves.length);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasDailyBalance() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "moves" ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "balances" && ctx.hasDailyBalance() ? 26 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-icon-refresh[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-icon-refresh[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n  background: var(--bg-hover);\n}\n.btn-icon-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.code-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 6px;\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border: 1px solid #bfdbfe;\n  flex-shrink: 0;\n}\n.type-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  flex-shrink: 0;\n}\n.type-chip.type-sale[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-chip.type-purchase[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-chip.type-cash[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  color: #134e4a;\n}\n.type-chip.type-bank[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: #1e3a8a;\n}\n.type-chip.type-general[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: #475569;\n}\n.balance-hero[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 22px 28px;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.balance-hero.hero-positive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D,\n      #2dd4bf);\n}\n.balance-hero.hero-negative[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #f87171);\n}\n.skeleton-hero[_ngcontent-%COMP%] {\n  height: 100px;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #d1d5db 50%,\n      #e5e7eb 75%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n}\n.hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.hero-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.22);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n}\n.hero-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.hero-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.8);\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.hero-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-balance[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.balance-amount[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 900;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.balance-amount.neg[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.balance-cur[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.75);\n}\n.balance-trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.balance-trend[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-close-day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.btn-close-day[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-close-day[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: white;\n}\n.btn-close-day[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.closed-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n}\n.closed-pill[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.alert-ok[_ngcontent-%COMP%], \n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.alert-ok[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert-ok[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.alert-err[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n  border: 1px solid var(--danger-bg);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 18px;\n}\n@media (max-width: 900px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-left: 4px solid #e5e7eb;\n}\n.kpi-card.kpi-in[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.kpi-card.kpi-out[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.kpi-card.kpi-net-pos[_ngcontent-%COMP%] {\n  border-color: #00A09D;\n}\n.kpi-card.kpi-net-neg[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.kpi-card.kpi-count[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.kpi-icon-w[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: var(--bg-elevated);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-w[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.kpi-in[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n}\n.kpi-in[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-out[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n}\n.kpi-out[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.kpi-net-pos[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n}\n.kpi-net-pos[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.kpi-net-neg[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n}\n.kpi-net-neg[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.kpi-count[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n}\n.kpi-count[_ngcontent-%COMP%]   .kpi-icon-w[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-val.neg[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.kpi-cur[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: -2px;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 4px;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  border-bottom: 2px solid #e9ecef;\n  margin-bottom: 18px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 700;\n}\n.tab-btn.active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.filter-ctl[_ngcontent-%COMP%] {\n  padding: 7px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.filter-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 11px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border-radius: 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.btn-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: var(--bg-page);\n}\n.filter-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 48px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.card-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #00A09D;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.dot-in[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.dot-out[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.flux-chart[_ngcontent-%COMP%] {\n  padding: 16px 18px 10px;\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 130px;\n  overflow-x: auto;\n}\n.flux-col[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  min-width: 32px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.flux-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n}\n.bar-in[_ngcontent-%COMP%], \n.bar-out[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 3px 3px 0 0;\n  min-height: 3px;\n  transition: height 0.4s;\n}\n.bar-in[_ngcontent-%COMP%] {\n  background: #16a34a;\n  opacity: 0.85;\n}\n.bar-out[_ngcontent-%COMP%] {\n  background: #dc2626;\n  opacity: 0.75;\n}\n.flux-date[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.months-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.months-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.months-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-sm-acc[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.14s;\n}\n.btn-sm-acc[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-sm-acc[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.months-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.month-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.month-block.is-open[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n}\n.month-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background: var(--bg-elevated);\n  transition: background 0.12s;\n}\n.month-hd[_ngcontent-%COMP%]:hover {\n  background: var(--primary-subtle);\n}\n.month-hd-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.month-hd-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.month-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.month-block.is-open[_ngcontent-%COMP%]   .month-chevron[_ngcontent-%COMP%] {\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.month-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.month-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-surface);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.m-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.m-chip.m-chip-in[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.m-chip.m-chip-out[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.m-chip.m-chip-pos[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #16a34a;\n  font-size: 12px;\n}\n.m-chip.m-chip-neg[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 12px;\n}\n.m-chip.m-chip-loading[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.mini-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 1.5px solid #cbd5e1;\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.month-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-light);\n}\n.month-totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border) !important;\n  font-weight: 700;\n}\n.month-balance-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-top: 2px solid transparent;\n}\n.month-balance-bar.mbb-pos[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D 0%,\n      #2dd4bf 100%);\n  border-color: #0d9488;\n}\n.month-balance-bar.mbb-neg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #f87171 100%);\n  border-color: var(--danger);\n}\n.mbb-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mbb-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: rgba(255, 255, 255, 0.85);\n}\n.mbb-labels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.mbb-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.75);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.mbb-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n.mbb-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.mbb-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.mbb-cur[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.75);\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.moves-table[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.moves-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.moves-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.moves-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], \n.balances-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.moves-table[_ngcontent-%COMP%]   .move-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.moves-table[_ngcontent-%COMP%]   .move-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.balances-table[_ngcontent-%COMP%]   .row-closed[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n}\n.foot-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.foot-val[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 12px;\n}\n.r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.c[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.date-col[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.ref-col[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.partner-col[_ngcontent-%COMP%] {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 11px;\n}\n.debit-val[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 700;\n}\n.credit-val[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n.balance-pos[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.balance-neg[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.closed-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #16a34a;\n}\n.open-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #d1d5db;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=journal-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JournalDetailComponent, [{
    type: Component,
    args: [{ selector: "app-journal-detail", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-wrap">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <button class="btn-back" (click)="back()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      @if (journal) {
        <span class="code-badge">{{ journal.code }}</span>
        <h1 class="page-title">{{ journal.name }}</h1>
        <span class="type-chip" [class]="'type-' + journal.type">{{ getTypeLabel(journal.type) }}</span>
      } @else {
        <h1 class="page-title">Journal #{{ journalId }}</h1>
      }
    </div>
    <div class="header-right">
      <button class="btn-icon-refresh" (click)="refresh()" title="Actualiser">
        <span class="material-icons">refresh</span>
      </button>
      <button class="btn-primary" (click)="router.navigate(['/accounting/journal-entries/new'], { queryParams: { journalId: journalId } })">
        <span class="material-icons">add</span> Nouvelle \xE9criture
      </button>
    </div>
  </div>

  <!-- \u2550\u2550 SOLDE ACTUEL (liquidit\xE9 uniquement) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (hasDailyBalance()) {

    @if (loadingBalances && balances.length === 0) {
      <div class="balance-hero skeleton-hero"></div>
    } @else {
      <div class="balance-hero" [class.hero-positive]="currentBalance >= 0" [class.hero-negative]="currentBalance < 0">
        <div class="hero-left">
          <div class="hero-icon-wrap">
            <span class="material-icons">{{ journal?.type === 'cash' ? 'account_balance_wallet' : 'account_balance' }}</span>
          </div>
          <div class="hero-text">
            <span class="hero-label">Solde actuel</span>
            @if (latestDate) {
              <span class="hero-date">Arr\xEAt\xE9 au {{ fmt(latestDate) }}</span>
            }
          </div>
        </div>
        <div class="hero-balance">
          <span class="balance-amount" [class.neg]="currentBalance < 0">
            {{ currentBalance | number:'1.0-0' }}
          </span>
          <span class="balance-cur">FCFA</span>
          @if (latestBalance) {
            <span class="balance-trend" [class.trend-up]="latestBalance.totalDebit >= latestBalance.totalCredit"
                                        [class.trend-down]="latestBalance.totalDebit < latestBalance.totalCredit">
              <span class="material-icons">
                {{ latestBalance.totalDebit >= latestBalance.totalCredit ? 'trending_up' : 'trending_down' }}
              </span>
              {{ latestBalance.totalDebit >= latestBalance.totalCredit ? '+' : '-' }}
              {{ (latestBalance.totalDebit - latestBalance.totalCredit | number:'1.0-0') }}
            </span>
          }
        </div>
        <div class="hero-actions">
          @if (latestBalance && !latestBalance.closed) {
            <button class="btn-close-day" (click)="closeToday()" [disabled]="closingDay">
              <span class="material-icons">lock_clock</span>
              {{ closingDay ? 'Cl\xF4ture\u2026' : "Cl\xF4turer aujourd'hui" }}
            </button>
          }
          @if (latestBalance?.closed) {
            <span class="closed-pill">
              <span class="material-icons">check_circle</span> Journ\xE9e cl\xF4tur\xE9e
            </span>
          }
        </div>
      </div>
    }

    @if (closeMsg)   { <div class="alert-ok"><span class="material-icons">check_circle</span> {{ closeMsg }}</div> }
    @if (closeError) { <div class="alert-err"><span class="material-icons">error_outline</span> {{ closeError }}</div> }

    <!-- KPIs p\xE9riode -->
    @if (balances.length > 0) {
      <div class="kpi-row">
        <div class="kpi-card kpi-in">
          <div class="kpi-icon-w"><span class="material-icons">south_west</span></div>
          <div class="kpi-body">
            <span class="kpi-val">{{ periodTotalDebit | number:'1.0-0' }}</span>
            <span class="kpi-cur">FCFA</span>
            <span class="kpi-lbl">Entr\xE9es (d\xE9bits)</span>
          </div>
        </div>
        <div class="kpi-card kpi-out">
          <div class="kpi-icon-w"><span class="material-icons">north_east</span></div>
          <div class="kpi-body">
            <span class="kpi-val">{{ periodTotalCredit | number:'1.0-0' }}</span>
            <span class="kpi-cur">FCFA</span>
            <span class="kpi-lbl">Sorties (cr\xE9dits)</span>
          </div>
        </div>
        <div class="kpi-card" [class.kpi-net-pos]="periodNet >= 0" [class.kpi-net-neg]="periodNet < 0">
          <div class="kpi-icon-w"><span class="material-icons">balance</span></div>
          <div class="kpi-body">
            <span class="kpi-val" [class.neg]="periodNet < 0">{{ periodNet | number:'1.0-0' }}</span>
            <span class="kpi-cur">FCFA</span>
            <span class="kpi-lbl">Flux net</span>
          </div>
        </div>
        <div class="kpi-card kpi-count">
          <div class="kpi-icon-w"><span class="material-icons">today</span></div>
          <div class="kpi-body">
            <span class="kpi-val">{{ filteredBalances.length }}</span>
            <span class="kpi-lbl">Jour(s) avec activit\xE9</span>
          </div>
        </div>
      </div>
    }

  }

  <!-- \u2550\u2550 TABS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="tabs-bar">
    <button class="tab-btn" [class.active]="activeTab === 'moves'" (click)="activeTab = 'moves'">
      <span class="material-icons">receipt_long</span>
      \xC9critures <span class="tab-count">{{ moves.length }}</span>
    </button>
    @if (hasDailyBalance()) {
      <button class="tab-btn" [class.active]="activeTab === 'balances'" (click)="activeTab = 'balances'">
        <span class="material-icons">monitoring</span>
        Historique soldes <span class="tab-count">{{ balances.length }}</span>
      </button>
    }
  </div>

  <!-- \u2550\u2550 TAB : \xC9CRITURES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'moves') {
    <div class="filters-row">
      <select class="filter-ctl" [(ngModel)]="filterState">
        <option value="">Tous les \xE9tats</option>
        <option value="draft">Brouillon</option>
        <option value="posted">Valid\xE9e</option>
        <option value="cancel">Annul\xE9e</option>
      </select>
      <input type="date" class="filter-ctl" [(ngModel)]="filterDateFrom">
      <input type="date" class="filter-ctl" [(ngModel)]="filterDateTo">
      @if (filterState || filterDateFrom || filterDateTo) {
        <button class="btn-clear" (click)="clearFilters()">
          <span class="material-icons">close</span> Effacer
        </button>
      }
      <span class="filter-info">{{ filteredMoves.length }} \xE9criture(s)</span>
    </div>

    @if (loadingMoves) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement\u2026</div>
    } @else if (filteredMoves.length === 0) {
      <div class="empty-state">
        <span class="material-icons">receipt_long</span>
        <p>Aucune \xE9criture trouv\xE9e</p>
      </div>

    <!-- \u2500\u2500 Vue par MOIS (caisse / banque) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    } @else if (hasDailyBalance()) {

      <div class="months-toolbar">
        <span class="months-info">{{ monthGroups.length }} mois \xB7 {{ filteredMoves.length }} \xE9criture(s)</span>
        <div class="months-btns">
          <button class="btn-sm-acc" (click)="expandAllMonths()">
            <span class="material-icons">unfold_more</span> Tout ouvrir
          </button>
          <button class="btn-sm-acc" (click)="collapseAllMonths()">
            <span class="material-icons">unfold_less</span> Tout fermer
          </button>
        </div>
      </div>

      <div class="months-list">
        @for (mg of monthGroups; track mg.monthKey) {
          <div class="month-block" [class.is-open]="isMonthExpanded(mg.monthKey)">

            <!-- En-t\xEAte mois -->
            <div class="month-hd" (click)="toggleMonth(mg.monthKey)">
              <div class="month-hd-left">
                <span class="material-icons month-chevron">
                  {{ isMonthExpanded(mg.monthKey) ? 'expand_less' : 'expand_more' }}
                </span>
                <span class="month-name">{{ mg.monthLabel }}</span>
                <span class="month-badge">{{ mg.moves.length }} pi\xE8ce(s)</span>
              </div>
              <div class="month-hd-right">
                <span class="m-chip m-chip-in">+ {{ mg.totalDebit | number:'1.0-0' }}</span>
                <span class="m-chip m-chip-out">\u2212 {{ mg.totalCredit | number:'1.0-0' }}</span>
                @if (mg.closingBalance !== null) {
                  <span class="m-chip" [class.m-chip-pos]="mg.closingBalance >= 0" [class.m-chip-neg]="mg.closingBalance < 0">
                    Solde <strong>{{ mg.closingBalance | number:'1.0-0' }}</strong>
                  </span>
                } @else {
                  <span class="m-chip m-chip-loading">
                    <span class="mini-spin"></span> Solde\u2026
                  </span>
                }
              </div>
            </div>

            <!-- Lignes du mois -->
            @if (isMonthExpanded(mg.monthKey)) {
              <div class="month-body">
                <table class="moves-table">
                  <thead>
                    <tr>
                      <th>R\xE9f\xE9rence</th>
                      <th>Date</th>
                      <th>Libell\xE9</th>
                      <th>Partenaire</th>
                      <th>\xC9tat</th>
                      <th class="r">D\xE9bit</th>
                      <th class="r">Cr\xE9dit</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (move of mg.moves; track move.id) {
                      <tr class="move-row" (click)="openEntry(move)">
                        <td class="mono">{{ move.name || '\u2014' }}</td>
                        <td class="date-col">{{ move.date | date:'dd/MM/yyyy' }}</td>
                        <td class="ref-col">{{ move.ref || '\u2014' }}</td>
                        <td class="partner-col muted">{{ move.partnerName || '\u2014' }}</td>
                        <td><span [class]="getStateBadge(move.state || 'draft')">{{ getStateLabel(move.state || 'draft') }}</span></td>
                        <td class="r mono debit-val">{{ (move.totalDebit || 0) | number:'1.0-0' }}</td>
                        <td class="r mono credit-val">{{ (move.totalCredit || 0) | number:'1.0-0' }}</td>
                      </tr>
                    }
                  </tbody>
                  <tfoot>
                    <tr class="month-totals-row">
                      <td colspan="5" class="foot-label">Mouvement {{ mg.monthLabel }}</td>
                      <td class="r mono foot-val debit-val">+ {{ mg.totalDebit | number:'1.0-0' }}</td>
                      <td class="r mono foot-val credit-val">\u2212 {{ mg.totalCredit | number:'1.0-0' }}</td>
                    </tr>
                  </tfoot>
                </table>
                <!-- Barre solde fin de mois -->
                @if (mg.closingBalance !== null) {
                  <div class="month-balance-bar"
                       [class.mbb-pos]="mg.closingBalance >= 0"
                       [class.mbb-neg]="mg.closingBalance < 0">
                    <div class="mbb-left">
                      <span class="material-icons mbb-icon">
                        {{ mg.closingBalance >= 0 ? 'account_balance_wallet' : 'warning' }}
                      </span>
                      <div class="mbb-labels">
                        <span class="mbb-title">Solde du compte</span>
                        <span class="mbb-sub">Au 31 {{ mg.monthLabel }}</span>
                      </div>
                    </div>
                    <div class="mbb-amount">
                      <span class="mbb-value">{{ mg.closingBalance | number:'1.0-0' }}</span>
                      <span class="mbb-cur">FCFA</span>
                    </div>
                  </div>
                }
              </div>
            }

          </div>
        }
      </div>

    <!-- \u2500\u2500 Vue plate (autres journaux) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
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
              <th class="r">D\xE9bit</th>
              <th class="r">Cr\xE9dit</th>
            </tr>
          </thead>
          <tbody>
            @for (move of filteredMoves; track move.id) {
              <tr class="move-row" (click)="openEntry(move)">
                <td class="mono">{{ move.name || '\u2014' }}</td>
                <td class="date-col">{{ move.date | date:'dd/MM/yyyy' }}</td>
                <td class="ref-col">{{ move.ref || '\u2014' }}</td>
                <td class="partner-col muted">{{ move.partnerName || '\u2014' }}</td>
                <td><span [class]="getStateBadge(move.state || 'draft')">{{ getStateLabel(move.state || 'draft') }}</span></td>
                <td class="r mono debit-val">{{ (move.totalDebit || 0) | number:'1.0-0' }}</td>
                <td class="r mono credit-val">{{ (move.totalCredit || 0) | number:'1.0-0' }}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="foot-label">Totaux</td>
              <td class="r mono foot-val debit-val">{{ totalDebit() | number:'1.0-0' }}</td>
              <td class="r mono foot-val credit-val">{{ totalCredit() | number:'1.0-0' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }

  <!-- \u2550\u2550 TAB : HISTORIQUE SOLDES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'balances' && hasDailyBalance()) {

    <!-- Filtre p\xE9riode -->
    <div class="filters-row">
      <label class="filter-label">P\xE9riode :</label>
      <input type="date" class="filter-ctl" [(ngModel)]="balDateFrom" placeholder="Du">
      <input type="date" class="filter-ctl" [(ngModel)]="balDateTo"   placeholder="Au">
      @if (balDateFrom || balDateTo) {
        <button class="btn-clear" (click)="balDateFrom = ''; balDateTo = ''">
          <span class="material-icons">close</span> Effacer
        </button>
      }
    </div>

    @if (loadingBalances) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement\u2026</div>
    } @else if (filteredBalances.length === 0) {
      <div class="empty-state">
        <span class="material-icons">monitoring</span>
        <p>Aucun solde enregistr\xE9 pour cette p\xE9riode</p>
      </div>
    } @else {

      <!-- Mini bar chart (flux par jour) -->
      <div class="card chart-card">
        <div class="card-hd">
          <span class="card-title"><span class="material-icons">bar_chart</span> Flux journaliers</span>
          <div class="chart-legend">
            <span class="legend-dot dot-in"></span><span>Entr\xE9es</span>
            <span class="legend-dot dot-out"></span><span>Sorties</span>
          </div>
        </div>
        <div class="flux-chart">
          @for (bal of filteredBalances.slice().reverse().slice(-14); track bal.date) {
            <div class="flux-col">
              <div class="flux-bars">
                <div class="bar-in"  [style.height.%]="barPct(bal.totalDebit)"  title="Entr\xE9es: {{ bal.totalDebit | number:'1.0-0' }} FCFA"></div>
                <div class="bar-out" [style.height.%]="barPct(bal.totalCredit)" title="Sorties: {{ bal.totalCredit | number:'1.0-0' }} FCFA"></div>
              </div>
              <span class="flux-date">{{ fmt(bal.date).slice(0, 5) }}</span>
            </div>
          }
        </div>
      </div>

      <!-- Tableau des soldes -->
      <div class="table-card">
        <table class="balances-table">
          <thead>
            <tr>
              <th>Date</th>
              <th class="r">Solde ouverture</th>
              <th class="r">Entr\xE9es</th>
              <th class="r">Sorties</th>
              <th class="r">Solde cl\xF4ture</th>
              <th class="c">Cl\xF4tur\xE9</th>
            </tr>
          </thead>
          <tbody>
            @for (bal of filteredBalances; track bal.date) {
              <tr [class.row-closed]="bal.closed">
                <td class="date-col bold">{{ fmt(bal.date) }}</td>
                <td class="r mono muted">{{ bal.openingBalance | number:'1.0-0' }}</td>
                <td class="r mono debit-val">+ {{ bal.totalDebit | number:'1.0-0' }}</td>
                <td class="r mono credit-val">\u2212 {{ bal.totalCredit | number:'1.0-0' }}</td>
                <td class="r mono bold" [class.balance-pos]="bal.closingBalance >= 0" [class.balance-neg]="bal.closingBalance < 0">
                  {{ bal.closingBalance | number:'1.0-0' }}
                </td>
                <td class="c">
                  @if (bal.closed) {
                    <span class="closed-icon"><span class="material-icons">lock</span></span>
                  } @else {
                    <span class="open-icon"><span class="material-icons">lock_open</span></span>
                  }
                </td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td class="foot-label">Totaux p\xE9riode</td>
              <td></td>
              <td class="r mono foot-val debit-val">+ {{ periodTotalDebit | number:'1.0-0' }}</td>
              <td class="r mono foot-val credit-val">\u2212 {{ periodTotalCredit | number:'1.0-0' }}</td>
              <td class="r mono foot-val" [class.balance-pos]="periodNet >= 0" [class.balance-neg]="periodNet < 0">
                {{ periodNet | number:'1.0-0' }}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }

</div>
`, styles: ['/* src/app/modules/accounting/components/journals/journal-detail/journal-detail.component.scss */\n.page-wrap {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-icon-refresh {\n  width: 36px;\n  height: 36px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-icon-refresh:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n  background: var(--bg-hover);\n}\n.btn-icon-refresh .material-icons {\n  font-size: 20px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:hover {\n  background: var(--primary-dark);\n}\n.code-badge {\n  display: inline-block;\n  padding: 4px 10px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  border-radius: 6px;\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border: 1px solid #bfdbfe;\n  flex-shrink: 0;\n}\n.type-chip {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  flex-shrink: 0;\n}\n.type-chip.type-sale {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-chip.type-purchase {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-chip.type-cash {\n  background: #ccfbf1;\n  color: #134e4a;\n}\n.type-chip.type-bank {\n  background: var(--primary-subtle);\n  color: #1e3a8a;\n}\n.type-chip.type-general {\n  background: var(--bg-elevated);\n  color: #475569;\n}\n.balance-hero {\n  border-radius: 14px;\n  padding: 22px 28px;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.balance-hero.hero-positive {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D,\n      #2dd4bf);\n}\n.balance-hero.hero-negative {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #f87171);\n}\n.skeleton-hero {\n  height: 100px;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #d1d5db 50%,\n      #e5e7eb 75%);\n  background-size: 400% 100%;\n  animation: shimmer 1.4s ease infinite;\n}\n.hero-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.hero-icon-wrap {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.22);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-icon-wrap .material-icons {\n  font-size: 28px;\n  color: white;\n}\n.hero-text {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.hero-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.8);\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.hero-date {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-balance {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.balance-amount {\n  font-size: 36px;\n  font-weight: 900;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.balance-amount.neg {\n  color: rgba(255, 255, 255, 0.9);\n}\n.balance-cur {\n  font-size: 14px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.75);\n}\n.balance-trend {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.balance-trend .material-icons {\n  font-size: 14px;\n}\n.hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-close-day {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.btn-close-day .material-icons {\n  font-size: 16px;\n}\n.btn-close-day:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: white;\n}\n.btn-close-day:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.closed-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n}\n.closed-pill .material-icons {\n  font-size: 15px;\n}\n.alert-ok,\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.alert-ok .material-icons,\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.alert-ok {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.alert-err {\n  background: var(--danger-bg);\n  color: #dc2626;\n  border: 1px solid var(--danger-bg);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 18px;\n}\n@media (max-width: 900px) {\n  .kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-left: 4px solid #e5e7eb;\n}\n.kpi-card.kpi-in {\n  border-color: #16a34a;\n}\n.kpi-card.kpi-out {\n  border-color: #dc2626;\n}\n.kpi-card.kpi-net-pos {\n  border-color: #00A09D;\n}\n.kpi-card.kpi-net-neg {\n  border-color: #dc2626;\n}\n.kpi-card.kpi-count {\n  border-color: var(--primary);\n}\n.kpi-icon-w {\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: var(--bg-elevated);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-w .material-icons {\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.kpi-in .kpi-icon-w {\n  background: var(--success-bg);\n}\n.kpi-in .kpi-icon-w .material-icons {\n  color: #16a34a;\n}\n.kpi-out .kpi-icon-w {\n  background: var(--danger-bg);\n}\n.kpi-out .kpi-icon-w .material-icons {\n  color: #dc2626;\n}\n.kpi-net-pos .kpi-icon-w {\n  background: #ccfbf1;\n}\n.kpi-net-pos .kpi-icon-w .material-icons {\n  color: #00A09D;\n}\n.kpi-net-neg .kpi-icon-w {\n  background: var(--danger-bg);\n}\n.kpi-net-neg .kpi-icon-w .material-icons {\n  color: #dc2626;\n}\n.kpi-count .kpi-icon-w {\n  background: var(--primary-subtle);\n}\n.kpi-count .kpi-icon-w .material-icons {\n  color: var(--primary);\n}\n.kpi-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.kpi-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-val.neg {\n  color: #dc2626;\n}\n.kpi-cur {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: -2px;\n}\n.kpi-lbl {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 4px;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  border-bottom: 2px solid #e9ecef;\n  margin-bottom: 18px;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 17px;\n}\n.tab-btn:hover {\n  color: var(--primary);\n}\n.tab-btn.active {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 700;\n}\n.tab-btn.active .tab-count {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.filters-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.filter-label {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.filter-ctl {\n  padding: 7px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.filter-ctl:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.btn-clear {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 11px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border-radius: 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.btn-clear .material-icons {\n  font-size: 15px;\n}\n.btn-clear:hover {\n  background: var(--bg-page);\n}\n.filter-info {\n  margin-left: auto;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 48px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.loading-state .material-icons {\n  font-size: 22px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.card-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title .material-icons {\n  font-size: 16px;\n  color: #00A09D;\n}\n.chart-legend {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.dot-in {\n  background: #16a34a;\n}\n.dot-out {\n  background: #dc2626;\n}\n.flux-chart {\n  padding: 16px 18px 10px;\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 130px;\n  overflow-x: auto;\n}\n.flux-col {\n  flex-shrink: 0;\n  min-width: 32px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.flux-bars {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n}\n.bar-in,\n.bar-out {\n  flex: 1;\n  border-radius: 3px 3px 0 0;\n  min-height: 3px;\n  transition: height 0.4s;\n}\n.bar-in {\n  background: #16a34a;\n  opacity: 0.85;\n}\n.bar-out {\n  background: #dc2626;\n  opacity: 0.75;\n}\n.flux-date {\n  font-size: 9px;\n  font-weight: 700;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.months-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.months-info {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.months-btns {\n  display: flex;\n  gap: 6px;\n}\n.btn-sm-acc {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.14s;\n}\n.btn-sm-acc .material-icons {\n  font-size: 15px;\n}\n.btn-sm-acc:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.months-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.month-block {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.month-block.is-open {\n  border-color: #bfdbfe;\n}\n.month-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background: var(--bg-elevated);\n  transition: background 0.12s;\n}\n.month-hd:hover {\n  background: var(--primary-subtle);\n}\n.month-hd-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.month-hd-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.month-chevron {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.month-block.is-open .month-chevron {\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.month-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.month-badge {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-surface);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.m-chip {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.m-chip.m-chip-in {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.m-chip.m-chip-out {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.m-chip.m-chip-pos {\n  background: #d1fae5;\n  color: #16a34a;\n  font-size: 12px;\n}\n.m-chip.m-chip-neg {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 12px;\n}\n.m-chip.m-chip-loading {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.mini-spin {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 1.5px solid #cbd5e1;\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.month-body {\n  border-top: 1px solid var(--border-light);\n}\n.month-totals-row td {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border) !important;\n  font-weight: 700;\n}\n.month-balance-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-top: 2px solid transparent;\n}\n.month-balance-bar.mbb-pos {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D 0%,\n      #2dd4bf 100%);\n  border-color: #0d9488;\n}\n.month-balance-bar.mbb-neg {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #f87171 100%);\n  border-color: var(--danger);\n}\n.mbb-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mbb-icon {\n  font-size: 26px;\n  color: rgba(255, 255, 255, 0.85);\n}\n.mbb-labels {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.mbb-title {\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.75);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.mbb-sub {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n.mbb-amount {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.mbb-value {\n  font-size: 28px;\n  font-weight: 900;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.mbb-cur {\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.75);\n}\n.table-card {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.moves-table,\n.balances-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.moves-table th,\n.balances-table th {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.moves-table td,\n.balances-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.moves-table tbody tr:last-child td,\n.balances-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.moves-table .move-row {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.moves-table .move-row:hover td {\n  background: var(--bg-hover);\n}\n.balances-table .row-closed {\n  background: var(--bg-elevated);\n}\ntfoot td {\n  padding: 9px 14px;\n}\n.foot-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.foot-val {\n  font-weight: 800;\n  font-size: 12px;\n}\n.r {\n  text-align: right;\n}\n.c {\n  text-align: center;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.bold {\n  font-weight: 700;\n}\n.muted {\n  color: var(--text-muted);\n}\n.date-col {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.ref-col {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.partner-col {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 11px;\n}\n.debit-val {\n  color: #16a34a;\n  font-weight: 700;\n}\n.credit-val {\n  color: #dc2626;\n  font-weight: 700;\n}\n.balance-pos {\n  color: #16a34a;\n}\n.balance-neg {\n  color: #dc2626;\n}\n.closed-icon .material-icons {\n  font-size: 16px;\n  color: #16a34a;\n}\n.open-icon .material-icons {\n  font-size: 16px;\n  color: #d1d5db;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.badge.badge-draft {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge.badge-posted {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=journal-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AccountingService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalDetailComponent, { className: "JournalDetailComponent", filePath: "app/modules/accounting/components/journals/journal-detail/journal-detail.component.ts", lineNumber: 26 });
})();
export {
  JournalDetailComponent
};
//# sourceMappingURL=chunk-5CYEBZ2K.js.map
