import {
  ExcelExportService
} from "./chunk-RDE6QNFF.js";
import "./chunk-V5EAPQSQ.js";
import {
  ReportService
} from "./chunk-5ADIBSOR.js";
import {
  E,
  autoTable
} from "./chunk-AJFTTPVD.js";
import "./chunk-7YWLATDR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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

// src/app/modules/accounting/components/cashbook/cashbook.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.journalId;
function CashbookComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 20);
    \u0275\u0275listener("click", function CashbookComponent_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Imprimer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function CashbookComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function CashbookComponent_Conditional_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Excel ");
    \u0275\u0275elementEnd()();
  }
}
function CashbookComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function CashbookComponent_For_28_Template_button_click_0_listener() {
      const j_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleJournal(j_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isSelected(j_r4.id))("chip-cash", j_r4.type === "cash")("chip-bank", j_r4.type === "bank");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(j_r4.type === "cash" ? "payments" : "account_balance");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", j_r4.code, " ");
  }
}
function CashbookComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
    \u0275\u0275text(1, " G\xE9n\xE9ration\u2026 ");
  }
}
function CashbookComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function CashbookComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 21);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg);
  }
}
function CashbookComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "G\xE9n\xE9ration en cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CashbookComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 21);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun mouvement de tr\xE9sorerie sur cette p\xE9riode");
    \u0275\u0275elementEnd()();
  }
}
function CashbookComponent_Conditional_38_For_29_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1, "Aucun mouvement sur cette p\xE9riode.");
    \u0275\u0275elementEnd();
  }
}
function CashbookComponent_Conditional_38_For_29_Conditional_34_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 71);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 66);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(line_r8.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.pieceName || line_r8.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.libelle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.partner);
    \u0275\u0275advance();
    \u0275\u0275classProp("debit-val", line_r8.debit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r8.debit > 0 ? ctx_r1.fmt2(line_r8.debit) : "", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("credit-val", line_r8.credit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r8.credit > 0 ? ctx_r1.fmt2(line_r8.credit) : "", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bal-pos", line_r8.balance >= 0)("bal-neg", line_r8.balance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt2(line_r8.balance), " ");
  }
}
function CashbookComponent_Conditional_38_For_29_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "table", 60)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "N\xB0 Pi\xE8ce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 61);
    \u0275\u0275text(13, "Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 61);
    \u0275\u0275text(15, "Sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 61);
    \u0275\u0275text(17, "Solde");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, CashbookComponent_Conditional_38_For_29_Conditional_34_For_20_Template, 15, 15, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr", 62)(23, "td", 63);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 64);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 65);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 66);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const journal_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(journal_r7.lines);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Total ", journal_r7.journalCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(journal_r7.totalDebit));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(journal_r7.totalCredit));
    \u0275\u0275advance();
    \u0275\u0275classProp("bal-pos", journal_r7.closingBalance >= 0)("bal-neg", journal_r7.closingBalance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt2(journal_r7.closingBalance), " ");
  }
}
function CashbookComponent_Conditional_38_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275listener("click", function CashbookComponent_Conditional_38_For_29_Template_div_click_1_listener() {
      const journal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(journal_r7.journalId));
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43)(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 48)(14, "div", 49)(15, "span", 50);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 51);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 52);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 53);
    \u0275\u0275text(22, " Cl\xF4t. ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "span", 54);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 55)(28, "span", 56);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 57);
    \u0275\u0275conditionalCreate(33, CashbookComponent_Conditional_38_For_29_Conditional_33_Template, 2, 0, "div", 58)(34, CashbookComponent_Conditional_38_For_29_Conditional_34_Template, 31, 8, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const journal_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-open", ctx_r1.expandedJournals.has(journal_r7.journalId));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.journalColor(journal_r7.journalType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.journalIcon(journal_r7.journalType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", journal_r7.journalCode, " \u2014 ", journal_r7.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", journal_r7.lines.length, " mouvement(s) \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(journal_r7.journalType === "cash" ? "Caisse" : "Banque");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Ouv. ", ctx_r1.fmt2(journal_r7.openingBalance), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.fmt2(journal_r7.totalDebit));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212 ", ctx_r1.fmt2(journal_r7.totalCredit));
    \u0275\u0275advance();
    \u0275\u0275classProp("chip-pos", journal_r7.closingBalance >= 0)("chip-neg", journal_r7.closingBalance < 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(journal_r7.closingBalance));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedJournals.has(journal_r7.journalId) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.journalColor(journal_r7.journalType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", journal_r7.journalCode, " \u2014 ", journal_r7.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Ouv. ", ctx_r1.fmt2(journal_r7.openingBalance), " | Cl\xF4t. ", ctx_r1.fmt2(journal_r7.closingBalance));
    \u0275\u0275advance();
    \u0275\u0275classProp("body-hidden", !ctx_r1.expandedJournals.has(journal_r7.journalId));
    \u0275\u0275advance();
    \u0275\u0275conditional(journal_r7.lines.length === 0 ? 33 : 34);
  }
}
function CashbookComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "CASHBOOK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 28)(10, "div", 29)(11, "span", 21);
    \u0275\u0275text(12, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30)(15, "span", 21);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CashbookComponent_Conditional_38_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchJournal, $event) || (ctx_r1.searchJournal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 32)(19, "button", 33);
    \u0275\u0275listener("click", function CashbookComponent_Conditional_38_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Tout ouvrir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 33);
    \u0275\u0275listener("click", function CashbookComponent_Conditional_38_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275elementStart(24, "span", 21);
    \u0275\u0275text(25, "unfold_less");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Tout fermer ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 34);
    \u0275\u0275repeaterCreate(28, CashbookComponent_Conditional_38_For_29_Template, 35, 27, "div", 35, _forTrack1);
    \u0275\u0275elementStart(30, "div", 36)(31, "span", 37);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 38)(34, "div", 39)(35, "span");
    \u0275\u0275text(36, "Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 39)(40, "span");
    \u0275\u0275text(41, "Sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "strong");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 39)(45, "span");
    \u0275\u0275text(46, "Solde net");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.companyName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("P\xE9riode : ", \u0275\u0275pipeBind2(7, 11, ctx_r1.dateFrom, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(8, 14, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredJournals.length, " journal(aux) ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchJournal);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.filteredJournals);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("TOTAL TR\xC9SORERIE \u2014 ", ctx_r1.filteredJournals.length, " journal(aux)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.grandTotalDebit));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.grandTotalCredit));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bal-neg", ctx_r1.grandClosing < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.grandClosing));
  }
}
var CashbookComponent = class _CashbookComponent {
  get companyName() {
    return this.authService.getActiveCompany()?.name ?? "";
  }
  get liquidityJournals() {
    return this.allJournals.filter((j) => j.type === "cash" || j.type === "bank");
  }
  get filteredJournals() {
    if (!this.searchJournal.trim())
      return this.journals;
    const t = this.searchJournal.toLowerCase();
    return this.journals.filter((j) => j.journalName.toLowerCase().includes(t) || j.journalCode.toLowerCase().includes(t));
  }
  get grandTotalDebit() {
    return this.journals.reduce((s, j) => s + j.totalDebit, 0);
  }
  get grandTotalCredit() {
    return this.journals.reduce((s, j) => s + j.totalCredit, 0);
  }
  get grandClosing() {
    return this.journals.reduce((s, j) => s + j.closingBalance, 0);
  }
  constructor(reportService, accountingService, authService, excelExport) {
    this.reportService = reportService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.dateFrom = "";
    this.dateTo = "";
    this.allJournals = [];
    this.selectedJournalIds = [];
    this.searchJournal = "";
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.today = /* @__PURE__ */ new Date();
    this.journals = [];
    this.expandedJournals = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split("T")[0];
    this.accountingService.getJournals(this.authService.getCompanyId()).subscribe({
      next: (j) => this.allJournals = j.filter((x) => x.active),
      error: () => {
      }
    });
  }
  toggleJournal(id) {
    const idx = this.selectedJournalIds.indexOf(id);
    if (idx >= 0)
      this.selectedJournalIds.splice(idx, 1);
    else
      this.selectedJournalIds.push(id);
  }
  isSelected(id) {
    return this.selectedJournalIds.includes(id);
  }
  clearJournals() {
    this.selectedJournalIds = [];
  }
  get selectedLabel() {
    if (this.selectedJournalIds.length === 0)
      return "Tous les journaux de liquidit\xE9";
    if (this.selectedJournalIds.length === 1) {
      const j = this.liquidityJournals.find((x) => x.id === this.selectedJournalIds[0]);
      return j ? `${j.code} \u2014 ${j.name}` : "1 journal";
    }
    return `${this.selectedJournalIds.length} journaux s\xE9lectionn\xE9s`;
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.expandedJournals.clear();
    this.reportService.getCashbook({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      journalIds: this.selectedJournalIds.length > 0 ? this.selectedJournalIds : void 0
    }).subscribe({
      next: (res) => {
        this.journals = (res.journals || []).map((j) => ({
          journalId: j.journalId,
          journalName: j.journalName,
          journalCode: j.journalCode,
          journalType: j.journalType,
          openingBalance: j.openingBalance ?? 0,
          totalDebit: j.totalDebit ?? 0,
          totalCredit: j.totalCredit ?? 0,
          closingBalance: j.closingBalance ?? 0,
          lines: (j.lines || []).map((l) => ({
            date: l.date,
            pieceName: l.pieceName || "",
            ref: l.ref || "",
            libelle: l.libelle || "",
            partner: l.partner || "",
            debit: l.debit ?? 0,
            credit: l.credit ?? 0,
            balance: l.balance ?? 0
          }))
        }));
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration";
      }
    });
  }
  toggleExpand(id) {
    if (this.expandedJournals.has(id))
      this.expandedJournals.delete(id);
    else
      this.expandedJournals.add(id);
  }
  expandAll() {
    this.filteredJournals.forEach((j) => this.expandedJournals.add(j.journalId));
  }
  collapseAll() {
    this.expandedJournals.clear();
  }
  journalIcon(type) {
    return type === "cash" ? "payments" : "account_balance";
  }
  journalColor(type) {
    return type === "cash" ? "#16a34a" : "#2563eb";
  }
  // ── Impression ────────────────────────────────────────────────────────────
  print() {
    window.print();
  }
  // ── Export PDF ────────────────────────────────────────────────────────────
  exportPdf() {
    const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 10;
    let y = M;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(33, 37, 41);
    if (this.companyName)
      doc.text(this.companyName.toUpperCase(), M, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(108, 117, 125);
    doc.text("Imprim\xE9 le : " + (/* @__PURE__ */ new Date()).toLocaleString("fr-FR"), pageW - M, y, { align: "right" });
    y += 4;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(M, y, pageW - M, y);
    y += 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(33, 37, 41);
    doc.text("CASHBOOK", M, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(108, 117, 125);
    doc.text("P\xE9riode du : " + this.fmtDate(this.dateFrom) + "   Au : " + this.fmtDate(this.dateTo), M, y);
    y += 4;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.2);
    doc.line(M, y, pageW - M, y);
    y += 4;
    const DARK = [33, 37, 41];
    const GRAY = [241, 245, 249];
    const GREEN = [21, 128, 61];
    const RED = [185, 28, 28];
    for (const j of this.filteredJournals) {
      const color = j.journalType === "cash" ? [21, 128, 61] : [37, 99, 235];
      autoTable(doc, {
        startY: y,
        margin: { left: M, right: M },
        head: [[
          {
            content: `${j.journalCode} \u2014 ${j.journalName}`,
            colSpan: 4,
            styles: { fillColor: color, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 }
          },
          {
            content: "Ouv. : " + this.fmt2(j.openingBalance),
            styles: { fillColor: color, textColor: [255, 255, 255], halign: "right", fontSize: 8 }
          },
          {
            content: "+" + this.fmt2(j.totalDebit),
            styles: { fillColor: color, textColor: [255, 255, 255], halign: "right", fontSize: 8 }
          },
          {
            content: "\u2212" + this.fmt2(j.totalCredit),
            styles: { fillColor: color, textColor: [255, 255, 255], halign: "right", fontSize: 8 }
          },
          {
            content: "Cl\xF4t. : " + this.fmt2(j.closingBalance),
            styles: { fillColor: color, textColor: [255, 255, 255], halign: "right", fontStyle: "bold", fontSize: 8 }
          }
        ]],
        body: [],
        theme: "plain",
        styles: { fontSize: 8.5, cellPadding: { top: 1.5, right: 2, bottom: 1.5, left: 2 } },
        columnStyles: {
          0: { cellWidth: 19 },
          1: { cellWidth: 30 },
          2: { cellWidth: 14 },
          3: { cellWidth: 80 },
          4: { cellWidth: 30 },
          5: { cellWidth: 28 },
          6: { cellWidth: 28 },
          7: { cellWidth: 28 }
        }
      });
      y = doc.lastAutoTable.finalY;
      if (j.lines.length > 0) {
        autoTable(doc, {
          startY: y,
          margin: { left: M, right: M },
          head: [["Date", "N\xB0 Pi\xE8ce", "Journal", "Libell\xE9 / Tiers", "Entr\xE9es (D\xE9bit)", "Sorties (Cr\xE9dit)", "Solde courant", ""]],
          body: [
            ...j.lines.map((l) => [
              this.fmtDate(l.date),
              l.pieceName || l.ref || "",
              { content: j.journalCode, styles: { halign: "center" } },
              l.libelle + (l.partner ? " \u2014 " + l.partner : ""),
              { content: l.debit > 0 ? this.fmt2(l.debit) : "", styles: { halign: "right" } },
              { content: l.credit > 0 ? this.fmt2(l.credit) : "", styles: { halign: "right" } },
              { content: this.fmt2(l.balance), styles: {
                halign: "right",
                textColor: l.balance >= 0 ? GREEN : RED
              } },
              ""
            ]),
            [
              {
                content: "TOTAL " + j.journalCode,
                colSpan: 4,
                styles: { fillColor: GRAY, fontStyle: "bold", textColor: DARK, cellPadding: { top: 2, right: 2, bottom: 2, left: 2 } }
              },
              { content: this.fmt2(j.totalDebit), styles: { fillColor: GRAY, fontStyle: "bold", halign: "right", textColor: GREEN, cellPadding: { top: 2, right: 1.5, bottom: 2, left: 1.5 }, overflow: "hidden" } },
              { content: this.fmt2(j.totalCredit), styles: { fillColor: GRAY, fontStyle: "bold", halign: "right", textColor: RED, cellPadding: { top: 2, right: 1.5, bottom: 2, left: 1.5 }, overflow: "hidden" } },
              { content: this.fmt2(j.closingBalance), styles: {
                fillColor: GRAY,
                fontStyle: "bold",
                halign: "right",
                textColor: j.closingBalance >= 0 ? GREEN : RED,
                cellPadding: { top: 2, right: 1.5, bottom: 2, left: 1.5 },
                overflow: "hidden"
              } },
              ""
            ]
          ],
          theme: "plain",
          styles: { fontSize: 8, cellPadding: { top: 1, right: 2, bottom: 1, left: 2 }, textColor: DARK, lineColor: [229, 231, 235], lineWidth: 0.1 },
          headStyles: { fillColor: [248, 250, 252], textColor: [107, 114, 128], fontStyle: "bold", fontSize: 8 },
          columnStyles: {
            0: { cellWidth: 19 },
            1: { cellWidth: 30 },
            2: { cellWidth: 14 },
            3: { cellWidth: 80 },
            4: { cellWidth: 30, halign: "right" },
            5: { cellWidth: 28, halign: "right" },
            6: { cellWidth: 28, halign: "right" },
            7: { cellWidth: 28 }
          }
        });
        y = doc.lastAutoTable.finalY + 6;
      } else {
        y += 4;
      }
      if (y > 185) {
        doc.addPage();
        y = M + 5;
      }
    }
    const np = doc.getNumberOfPages();
    for (let i = 1; i <= np; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(180, 180, 180);
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.2);
      doc.line(M, 200, pageW - M, 200);
      doc.text(`${this.companyName} \u2014 Blessing ERP`, M, 204);
      doc.text(`Page ${i}/${np}`, pageW - M, 204, { align: "right" });
    }
    doc.save(`cashbook-${this.dateFrom}-${this.dateTo}.pdf`);
  }
  // ── Export Excel ──────────────────────────────────────────────────────────
  exportExcel() {
    this.excelExport.exportCashbook(this.filteredJournals, this.companyName, this.dateFrom, this.dateTo);
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  fmtDate(d) {
    if (!d)
      return "";
    const [y, m, dd] = d.split("-");
    return `${dd}/${m}/${y}`;
  }
  fmt2(v) {
    const num = v ?? 0;
    const sign = num < 0 ? "-" : "";
    const parts = Math.abs(num).toFixed(2).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return sign + parts[0] + "," + parts[1];
  }
  static {
    this.\u0275fac = function CashbookComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CashbookComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CashbookComponent, selectors: [["app-cashbook"]], decls: 39, vars: 9, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "filters-card", "no-print"], [1, "filter-grid"], [1, "filter-group"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "filter-group", "picker-wrap"], [1, "journal-chips"], [1, "j-chip", 3, "click"], [1, "j-chip", 3, "active", "chip-cash", "chip-bank"], [1, "filter-group", "filter-btn-col"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-err"], [1, "loading-state"], [1, "empty-state"], [1, "btn-outline", 3, "click"], [1, "material-icons"], [1, "btn-outline", "btn-pdf", 3, "click"], [1, "btn-outline", "btn-excel", 3, "click"], [1, "material-icons", "chip-icon"], [1, "btn-spinner"], [1, "spinner-lg"], [1, "print-header", "print-only"], [1, "acc-toolbar", "no-print"], [1, "acc-info"], [1, "acc-search"], ["type", "text", "placeholder", "Rechercher un journal\u2026", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "acc-btns"], [1, "btn-acc", 3, "click"], [1, "gl-content"], [1, "journal-block", 3, "is-open"], [1, "grand-total"], [1, "gt-label"], [1, "gt-values"], [1, "gt-item"], [1, "journal-block"], [1, "journal-header", "no-print", 3, "click"], [1, "journal-header-left"], [1, "journal-avatar"], [1, "journal-name-block"], [1, "journal-name"], [1, "journal-meta"], [1, "meta-type"], [1, "journal-header-right"], [1, "balance-chips"], [1, "bal-chip", "chip-open"], [1, "bal-chip", "chip-debit"], [1, "bal-chip", "chip-credit"], [1, "bal-chip"], [1, "material-icons", "acc-chevron"], [1, "journal-header-print", "print-only"], [1, "journal-name-print"], [1, "journal-body"], [1, "no-lines", "no-print"], [1, "table-wrap"], [1, "gl-table"], [1, "r"], [1, "total-row"], ["colspan", "4", 1, "total-label"], [1, "r", "mono", "debit-val"], [1, "r", "mono", "credit-val"], [1, "r", "mono", "bold"], [1, "date-col"], [1, "ref-col", "mono"], [1, "lbl-col"], [1, "partner-col", "text-muted"], [1, "r", "mono"]], template: function CashbookComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "account_balance_wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Cashbook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Mouvements de tr\xE9sorerie par journal de liquidit\xE9");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, CashbookComponent_Conditional_10_Template, 13, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CashbookComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "label");
        \u0275\u0275text(19, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CashbookComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11)(22, "label");
        \u0275\u0275text(23, "Journaux");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12)(25, "button", 13);
        \u0275\u0275listener("click", function CashbookComponent_Template_button_click_25_listener() {
          return ctx.clearJournals();
        });
        \u0275\u0275text(26, " Tous ");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(27, CashbookComponent_For_28_Template, 4, 8, "button", 14, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "label");
        \u0275\u0275text(31, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 16);
        \u0275\u0275listener("click", function CashbookComponent_Template_button_click_32_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(33, CashbookComponent_Conditional_33_Template, 2, 0)(34, CashbookComponent_Conditional_34_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(35, CashbookComponent_Conditional_35_Template, 4, 1, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(36, CashbookComponent_Conditional_36_Template, 4, 0, "div", 18)(37, CashbookComponent_Conditional_37_Template, 5, 0, "div", 19)(38, CashbookComponent_Conditional_38_Template, 49, 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.generated && ctx.journals.length > 0 ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.selectedJournalIds.length === 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.liquidityJournals);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 33 : 34);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 36 : ctx.generated && ctx.journals.length === 0 ? 37 : ctx.generated ? 38 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline.btn-excel[_ngcontent-%COMP%]:hover {\n  border-color: var(--success);\n  color: var(--success);\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.picker-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 260px;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.journal-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.j-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.j-chip[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.j-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.j-chip.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.j-chip.chip-cash.active[_ngcontent-%COMP%] {\n  background: #16a34a;\n  border-color: var(--success);\n}\n.j-chip.chip-bank.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.acc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.acc-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.acc-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.acc-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  background: var(--bg-surface);\n}\n.acc-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--text-muted);\n}\n.acc-search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary);\n}\n.search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  width: 100%;\n  background: transparent;\n}\n.acc-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-left: auto;\n}\n.btn-acc[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-acc[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-acc[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.gl-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.journal-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.journal-block.is-open[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.journal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.journal-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.journal-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.journal-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.journal-avatar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.journal-name-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.journal-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 340px;\n}\n.journal-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.meta-type[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary);\n}\n.journal-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.balance-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.bal-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.bal-chip.chip-open[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.bal-chip.chip-debit[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.bal-chip.chip-credit[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.bal-chip.chip-pos[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  font-size: 12px;\n}\n.bal-chip.chip-neg[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-size: 12px;\n}\n.acc-chevron[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.journal-block.is-open[_ngcontent-%COMP%]   .acc-chevron[_ngcontent-%COMP%] {\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.journal-body[_ngcontent-%COMP%] {\n  border-top: 1px solid #f3f4f6;\n}\n.journal-body.body-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.no-lines[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.month-block[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.month-block[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.month-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 20px 9px 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background: var(--bg-elevated);\n  transition: background 0.12s;\n}\n.month-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.month-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.month-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.month-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.month-block.is-open[_ngcontent-%COMP%]   .month-chevron[_ngcontent-%COMP%] {\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.month-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.month-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-surface);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.month-body.body-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.month-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border) !important;\n  border-bottom: none;\n  font-weight: 700;\n}\n.month-total-row[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.month-total-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--primary);\n}\n.journal-total-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 12px 20px;\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border);\n}\n.jt-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.jt-values[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.jt-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n}\n.jt-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.jt-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.gl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.gl-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.gl-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.gl-table[_ngcontent-%COMP%]   .date-col[_ngcontent-%COMP%] {\n  width: 90px;\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .ref-col[_ngcontent-%COMP%] {\n  width: 120px;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   .lbl-col[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   .partner-col[_ngcontent-%COMP%] {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.gl-table[_ngcontent-%COMP%]   .debit-val[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 600;\n}\n.gl-table[_ngcontent-%COMP%]   .credit-val[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.gl-table[_ngcontent-%COMP%]   .bal-pos[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.gl-table[_ngcontent-%COMP%]   .bal-neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border);\n  border-bottom: none;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-values[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n}\n.gt-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item[_ngcontent-%COMP%]   strong.bal-neg[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin: 0;\n  color: var(--text-secondary);\n}\n.journal-header-print[_ngcontent-%COMP%] {\n  display: none;\n}\n@media print {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .journal-header-print[_ngcontent-%COMP%] {\n    display: flex !important;\n    justify-content: space-between;\n    padding: 6px 10px;\n    color: white;\n    font-size: 11px;\n    font-weight: 700;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .journal-header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .journal-body.body-hidden[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .journal-block[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid var(--border);\n    margin-bottom: 8px;\n  }\n  .gl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .gl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 9px;\n  }\n  .grand-total[_ngcontent-%COMP%] {\n    background: var(--primary);\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=cashbook.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CashbookComponent, [{
    type: Component,
    args: [{ selector: "app-cashbook", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">account_balance_wallet</span>
      <div>
        <h1 class="page-title">Cashbook</h1>
        <p class="page-sub">Mouvements de tr\xE9sorerie par journal de liquidit\xE9</p>
      </div>
    </div>
    @if (generated && journals.length > 0) {
      <div class="header-actions">
        <button class="btn-outline" (click)="print()">
          <span class="material-icons">print</span> Imprimer
        </button>
        <button class="btn-outline btn-pdf" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> PDF
        </button>
        <button class="btn-outline btn-excel" (click)="exportExcel()">
          <span class="material-icons">table_view</span> Excel
        </button>
      </div>
    }
  </div>

  <!-- \u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filters-card no-print">
    <div class="filter-grid">

      <!-- Dates -->
      <div class="filter-group">
        <label>P\xE9riode du</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateTo">
      </div>

      <!-- S\xE9lecteur de journaux -->
      <div class="filter-group picker-wrap">
        <label>Journaux</label>
        <div class="journal-chips">
          <button class="j-chip" [class.active]="selectedJournalIds.length === 0" (click)="clearJournals()">
            Tous
          </button>
          @for (j of liquidityJournals; track j.id) {
            <button class="j-chip" [class.active]="isSelected(j.id!)"
                    [class.chip-cash]="j.type === 'cash'" [class.chip-bank]="j.type === 'bank'"
                    (click)="toggleJournal(j.id!)">
              <span class="material-icons chip-icon">{{ j.type === 'cash' ? 'payments' : 'account_balance' }}</span>
              {{ j.code }}
            </button>
          }
        </div>
      </div>

      <div class="filter-group filter-btn-col">
        <label>&nbsp;</label>
        <button class="btn-generate" (click)="generate()" [disabled]="loading">
          @if (loading) { <span class="btn-spinner"></span> G\xE9n\xE9ration\u2026 }
          @else { <span class="material-icons">play_arrow</span> G\xE9n\xE9rer }
        </button>
      </div>
    </div>
    @if (errorMsg) {
      <div class="alert-err"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
    }
  </div>

  <!-- \u2550\u2550 R\xC9SULTAT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>G\xE9n\xE9ration en cours\u2026</p>
    </div>

  } @else if (generated && journals.length === 0) {
    <div class="empty-state">
      <span class="material-icons">account_balance_wallet</span>
      <p>Aucun mouvement de tr\xE9sorerie sur cette p\xE9riode</p>
    </div>

  } @else if (generated) {

    <!-- En-t\xEAte impression -->
    <div class="print-header print-only">
      <h2>{{ companyName }}</h2>
      <h3>CASHBOOK</h3>
      <p>P\xE9riode : {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</p>
    </div>

    <!-- Barre outils accord\xE9on -->
    <div class="acc-toolbar no-print">
      <div class="acc-info">
        <span class="material-icons">account_balance_wallet</span>
        {{ filteredJournals.length }} journal(aux)
      </div>
      <div class="acc-search">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Rechercher un journal\u2026" [(ngModel)]="searchJournal" class="search-input">
      </div>
      <div class="acc-btns">
        <button class="btn-acc" (click)="expandAll()">
          <span class="material-icons">unfold_more</span> Tout ouvrir
        </button>
        <button class="btn-acc" (click)="collapseAll()">
          <span class="material-icons">unfold_less</span> Tout fermer
        </button>
      </div>
    </div>

    <!-- Accord\xE9on par journal -->
    <div class="gl-content">
      @for (journal of filteredJournals; track journal.journalId) {
        <div class="journal-block" [class.is-open]="expandedJournals.has(journal.journalId)">

          <!-- En-t\xEAte journal (\xE9cran) -->
          <div class="journal-header no-print" (click)="toggleExpand(journal.journalId)">
            <div class="journal-header-left">
              <div class="journal-avatar" [style.background]="journalColor(journal.journalType)">
                <span class="material-icons">{{ journalIcon(journal.journalType) }}</span>
              </div>
              <div class="journal-name-block">
                <span class="journal-name">{{ journal.journalCode }} \u2014 {{ journal.journalName }}</span>
                <span class="journal-meta">
                  {{ journal.lines.length }} mouvement(s) \xB7
                  <span class="meta-type">{{ journal.journalType === 'cash' ? 'Caisse' : 'Banque' }}</span>
                </span>
              </div>
            </div>
            <div class="journal-header-right">
              <div class="balance-chips">
                <span class="bal-chip chip-open">
                  Ouv. {{ fmt2(journal.openingBalance) }}
                </span>
                <span class="bal-chip chip-debit">+ {{ fmt2(journal.totalDebit) }}</span>
                <span class="bal-chip chip-credit">\u2212 {{ fmt2(journal.totalCredit) }}</span>
                <span class="bal-chip"
                      [class.chip-pos]="journal.closingBalance >= 0"
                      [class.chip-neg]="journal.closingBalance < 0">
                  Cl\xF4t. <strong>{{ fmt2(journal.closingBalance) }}</strong>
                </span>
              </div>
              <span class="material-icons acc-chevron">
                {{ expandedJournals.has(journal.journalId) ? 'expand_less' : 'expand_more' }}
              </span>
            </div>
          </div>

          <!-- En-t\xEAte print -->
          <div class="journal-header-print print-only" [style.background]="journalColor(journal.journalType)">
            <span class="journal-name-print">{{ journal.journalCode }} \u2014 {{ journal.journalName }}</span>
            <span>Ouv. {{ fmt2(journal.openingBalance) }} | Cl\xF4t. {{ fmt2(journal.closingBalance) }}</span>
          </div>

          <!-- Corps : lignes -->
          <div class="journal-body" [class.body-hidden]="!expandedJournals.has(journal.journalId)">

            @if (journal.lines.length === 0) {
              <div class="no-lines no-print">Aucun mouvement sur cette p\xE9riode.</div>
            } @else {
              <div class="table-wrap">
                <table class="gl-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>N\xB0 Pi\xE8ce</th>
                      <th>Libell\xE9</th>
                      <th>Tiers</th>
                      <th class="r">Entr\xE9es</th>
                      <th class="r">Sorties</th>
                      <th class="r">Solde</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (line of journal.lines; track $index) {
                      <tr>
                        <td class="date-col">{{ fmtDate(line.date) }}</td>
                        <td class="ref-col mono">{{ line.pieceName || line.ref }}</td>
                        <td class="lbl-col">{{ line.libelle }}</td>
                        <td class="partner-col text-muted">{{ line.partner }}</td>
                        <td class="r mono" [class.debit-val]="line.debit > 0">
                          {{ line.debit > 0 ? fmt2(line.debit) : '' }}
                        </td>
                        <td class="r mono" [class.credit-val]="line.credit > 0">
                          {{ line.credit > 0 ? fmt2(line.credit) : '' }}
                        </td>
                        <td class="r mono bold"
                            [class.bal-pos]="line.balance >= 0"
                            [class.bal-neg]="line.balance < 0">
                          {{ fmt2(line.balance) }}
                        </td>
                      </tr>
                    }
                  </tbody>
                  <tfoot>
                    <tr class="total-row">
                      <td colspan="4" class="total-label">Total {{ journal.journalCode }}</td>
                      <td class="r mono debit-val">{{ fmt2(journal.totalDebit) }}</td>
                      <td class="r mono credit-val">{{ fmt2(journal.totalCredit) }}</td>
                      <td class="r mono bold"
                          [class.bal-pos]="journal.closingBalance >= 0"
                          [class.bal-neg]="journal.closingBalance < 0">
                        {{ fmt2(journal.closingBalance) }}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            }
          </div>
        </div>
      }

      <!-- Grand total -->
      <div class="grand-total">
        <span class="gt-label">TOTAL TR\xC9SORERIE \u2014 {{ filteredJournals.length }} journal(aux)</span>
        <div class="gt-values">
          <div class="gt-item"><span>Entr\xE9es</span><strong>{{ fmt2(grandTotalDebit) }}</strong></div>
          <div class="gt-item"><span>Sorties</span><strong>{{ fmt2(grandTotalCredit) }}</strong></div>
          <div class="gt-item">
            <span>Solde net</span>
            <strong [class.bal-neg]="grandClosing < 0">{{ fmt2(grandClosing) }}</strong>
          </div>
        </div>
      </div>
    </div>
  }

</div>
`, styles: ['/* src/app/modules/accounting/components/cashbook/cashbook.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-outline.btn-excel:hover {\n  border-color: var(--success);\n  color: var(--success);\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.picker-wrap {\n  flex: 1;\n  min-width: 260px;\n}\n.form-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.journal-chips {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.j-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.j-chip .chip-icon {\n  font-size: 14px !important;\n}\n.j-chip:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.j-chip.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.j-chip.chip-cash.active {\n  background: #16a34a;\n  border-color: var(--success);\n}\n.j-chip.chip-bank.active {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.acc-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.acc-info {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.acc-info .material-icons {\n  font-size: 16px;\n}\n.acc-search {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  background: var(--bg-surface);\n}\n.acc-search .material-icons {\n  font-size: 17px;\n  color: var(--text-muted);\n}\n.acc-search:focus-within {\n  border-color: var(--primary);\n}\n.search-input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  width: 100%;\n  background: transparent;\n}\n.acc-btns {\n  display: flex;\n  gap: 6px;\n  margin-left: auto;\n}\n.btn-acc {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-acc .material-icons {\n  font-size: 15px;\n}\n.btn-acc:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.gl-content {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.journal-block {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.journal-block.is-open {\n  border-color: var(--primary);\n}\n.journal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.journal-header:hover {\n  background: var(--bg-elevated);\n}\n.journal-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.journal-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.journal-avatar .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.journal-name-block {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.journal-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 340px;\n}\n.journal-meta {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.meta-type {\n  font-weight: 700;\n  color: var(--primary);\n}\n.journal-header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.balance-chips {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.bal-chip {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.bal-chip.chip-open {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.bal-chip.chip-debit {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.bal-chip.chip-credit {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.bal-chip.chip-pos {\n  background: var(--success-bg);\n  color: var(--success);\n  font-size: 12px;\n}\n.bal-chip.chip-neg {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-size: 12px;\n}\n.acc-chevron {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.journal-block.is-open .acc-chevron {\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.journal-body {\n  border-top: 1px solid #f3f4f6;\n}\n.journal-body.body-hidden {\n  display: none;\n}\n.no-lines {\n  padding: 16px 18px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.month-block {\n  border-bottom: 1px solid #f3f4f6;\n}\n.month-block:last-of-type {\n  border-bottom: none;\n}\n.month-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 20px 9px 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background: var(--bg-elevated);\n  transition: background 0.12s;\n}\n.month-header:hover {\n  background: var(--bg-hover);\n}\n.month-header-left {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.month-header-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.month-chevron {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.month-block.is-open .month-chevron {\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.month-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.month-count {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-surface);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.month-body.body-hidden {\n  display: none;\n}\n.month-total-row td {\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border) !important;\n  border-bottom: none;\n  font-weight: 700;\n}\n.month-total-row .total-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.month-total-icon {\n  font-size: 14px;\n  color: var(--primary);\n}\n.journal-total-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 12px 20px;\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border);\n}\n.jt-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.jt-values {\n  display: flex;\n  gap: 24px;\n}\n.jt-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n}\n.jt-item span {\n  font-size: 9px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.jt-item strong {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.gl-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table th {\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table td {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.gl-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.gl-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.gl-table .r {\n  text-align: right;\n}\n.gl-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table .bold {\n  font-weight: 700;\n}\n.gl-table .date-col {\n  width: 90px;\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.gl-table .ref-col {\n  width: 120px;\n  white-space: nowrap;\n}\n.gl-table .lbl-col {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gl-table .partner-col {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 11px;\n}\n.gl-table .text-muted {\n  color: var(--text-muted);\n}\n.gl-table .debit-val {\n  color: var(--success);\n  font-weight: 600;\n}\n.gl-table .credit-val {\n  color: var(--danger);\n  font-weight: 600;\n}\n.gl-table .bal-pos {\n  color: var(--success);\n}\n.gl-table .bal-neg {\n  color: var(--danger);\n}\n.total-row td {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border);\n  border-bottom: none;\n}\n.total-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.grand-total {\n  background: var(--primary);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n.gt-label {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-values {\n  display: flex;\n  gap: 28px;\n}\n.gt-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item span {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item strong {\n  font-size: 16px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item strong.bal-neg {\n  opacity: 0.85;\n}\n.print-only {\n  display: none;\n}\n.print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header h3 {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header p {\n  font-size: 11px;\n  margin: 0;\n  color: var(--text-secondary);\n}\n.journal-header-print {\n  display: none;\n}\n@media print {\n  .page-container {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print {\n    display: none !important;\n  }\n  .print-only {\n    display: block !important;\n  }\n  .print-header {\n    display: block !important;\n  }\n  .journal-header-print {\n    display: flex !important;\n    justify-content: space-between;\n    padding: 6px 10px;\n    color: white;\n    font-size: 11px;\n    font-weight: 700;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .journal-header {\n    display: none !important;\n  }\n  .journal-body.body-hidden {\n    display: block !important;\n  }\n  .journal-block {\n    box-shadow: none;\n    border: 1px solid var(--border);\n    margin-bottom: 8px;\n  }\n  .gl-table th,\n  .gl-table td {\n    padding: 4px 8px;\n    font-size: 9px;\n  }\n  .grand-total {\n    background: var(--primary);\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=cashbook.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AccountingService }, { type: AuthService }, { type: ExcelExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CashbookComponent, { className: "CashbookComponent", filePath: "app/modules/accounting/components/cashbook/cashbook.component.ts", lineNumber: 42 });
})();
export {
  CashbookComponent
};
//# sourceMappingURL=chunk-KDEHNJYN.js.map
