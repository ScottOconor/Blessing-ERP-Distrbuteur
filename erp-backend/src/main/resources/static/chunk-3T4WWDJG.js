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

// src/app/modules/accounting/components/grand-livre/grand-livre.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.accountCode;
function GrandLivreComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 22);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Imprimer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd()();
  }
}
function GrandLivreComponent_Conditional_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_31_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAccountFilter());
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2, "clear_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9s\xE9lectionner tout ");
    \u0275\u0275elementEnd();
  }
}
function GrandLivreComponent_Conditional_31_For_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function GrandLivreComponent_Conditional_31_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 30);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_31_For_8_Template_label_click_0_listener() {
      const acc_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAccountFilter(acc_r6.id));
    });
    \u0275\u0275element(1, "span", 31);
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, GrandLivreComponent_Conditional_31_For_8_Conditional_6_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isAccountSelected(acc_r6.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.accountColor(acc_r6.code));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r6.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAccountSelected(acc_r6.id) ? 6 : -1);
  }
}
function GrandLivreComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 24)(2, "span", 13);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function GrandLivreComponent_Conditional_31_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountPickerSearch, $event) || (ctx_r1.accountPickerSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_31_Template_input_click_4_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275conditionalCreate(6, GrandLivreComponent_Conditional_31_Conditional_6_Template, 4, 0, "button", 27);
    \u0275\u0275repeaterCreate(7, GrandLivreComponent_Conditional_31_For_8_Template, 7, 7, "label", 28, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accountPickerSearch);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedAccountIds.length > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredPickerAccounts);
  }
}
function GrandLivreComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
    \u0275\u0275text(1, " G\xE9n\xE9ration\u2026 ");
  }
}
function GrandLivreComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function GrandLivreComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 13);
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
function GrandLivreComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "G\xE9n\xE9ration en cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function GrandLivreComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 13);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun compte avec des mouvements sur cette p\xE9riode");
    \u0275\u0275elementEnd()();
  }
}
function GrandLivreComponent_Conditional_41_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 filtr\xE9s ");
  }
}
function GrandLivreComponent_Conditional_41_For_30_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, "Aucun mouvement dans la p\xE9riode \u2014 solde report\xE9 uniquement.");
    \u0275\u0275elementEnd();
  }
}
function GrandLivreComponent_Conditional_41_For_30_Conditional_31_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 79);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_41_For_30_Conditional_31_For_23_Template_tr_click_0_listener($event) {
      const $index_r11 = \u0275\u0275restoreView(_r10).$index;
      const account_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleLine(account_r9.accountCode, $index_r11, $event));
    });
    \u0275\u0275elementStart(1, "td", 80);
    \u0275\u0275element(2, "span", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 84);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 85);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 85);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 86);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 86);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 78);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r12 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    const account_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("line-pointed", ctx_r1.isPointed(account_r9.accountCode, $index_r11));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("dot-active", ctx_r1.isPointed(account_r9.accountCode, $index_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(line_r12.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r12.moveRef);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r12.journalCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r12.partner);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r12.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("debit-val", line_r12.debit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r12.debit > 0 ? ctx_r1.fmt2(line_r12.debit) : "", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("credit-val", line_r12.credit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r12.credit > 0 ? ctx_r1.fmt2(line_r12.credit) : "", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bal-pos", line_r12.balance >= 0)("bal-neg", line_r12.balance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt2(line_r12.balance), " ");
  }
}
function GrandLivreComponent_Conditional_41_For_30_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "table", 70)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 71);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "N\xB0 Pi\xE8ce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 72);
    \u0275\u0275text(16, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 72);
    \u0275\u0275text(18, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 72);
    \u0275\u0275text(20, "Solde");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, GrandLivreComponent_Conditional_41_For_30_Conditional_31_For_23_Template, 19, 20, "tr", 73, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "tfoot")(25, "tr", 74)(26, "td", 75);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 76);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 77);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 78);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const account_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275repeater(account_r9.lines);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Total ", account_r9.accountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(account_r9.totalDebit));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(account_r9.totalCredit));
    \u0275\u0275advance();
    \u0275\u0275classProp("bal-pos", account_r9.finalBalance >= 0)("bal-neg", account_r9.finalBalance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt2(account_r9.finalBalance), " ");
  }
}
function GrandLivreComponent_Conditional_41_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_41_For_30_Template_div_click_1_listener() {
      const account_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAccount(account_r9.accountCode));
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "div", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 58)(11, "div", 59)(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 63);
    \u0275\u0275text(19, " Cl\xF4t. ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "span", 64);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 65)(25, "span", 66);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 67);
    \u0275\u0275conditionalCreate(30, GrandLivreComponent_Conditional_41_For_30_Conditional_30_Template, 2, 0, "div", 68)(31, GrandLivreComponent_Conditional_41_For_30_Conditional_31_Template, 34, 8, "div", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const account_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-open", ctx_r1.expandedAccounts.has(account_r9.accountCode));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.accountColor(account_r9.accountCode));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", account_r9.accountCode.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", account_r9.accountCode, " \u2014 ", account_r9.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", account_r9.lines.length, " mouvement(s)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Ouv. ", ctx_r1.fmt2(account_r9.openingBalance), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.fmt2(account_r9.totalDebit));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212 ", ctx_r1.fmt2(account_r9.totalCredit));
    \u0275\u0275advance();
    \u0275\u0275classProp("chip-pos", account_r9.finalBalance >= 0)("chip-neg", account_r9.finalBalance < 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(account_r9.finalBalance));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedAccounts.has(account_r9.accountCode) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.accountColor(account_r9.accountCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", account_r9.accountCode, " \u2014 ", account_r9.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Solde ouv. : ", ctx_r1.fmt2(account_r9.openingBalance), " | Cl\xF4ture : ", ctx_r1.fmt2(account_r9.finalBalance));
    \u0275\u0275advance();
    \u0275\u0275classProp("body-hidden", !ctx_r1.expandedAccounts.has(account_r9.accountCode));
    \u0275\u0275advance();
    \u0275\u0275conditional(account_r9.lines.length === 0 ? 30 : 31);
  }
}
function GrandLivreComponent_Conditional_41_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 87)(2, "span", 88);
    \u0275\u0275text(3, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 90)(7, "div", 91)(8, "span", 92);
    \u0275\u0275text(9, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 93);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 94);
    \u0275\u0275elementStart(13, "div", 91)(14, "span", 92);
    \u0275\u0275text(15, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong", 95);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 94);
    \u0275\u0275elementStart(19, "div", 91)(20, "span", 92);
    \u0275\u0275text(21, "Net");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 96);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_41_Conditional_31_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearPointing());
    });
    \u0275\u0275elementStart(25, "span", 13);
    \u0275\u0275text(26, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Effacer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.pointingSummary.count, " ligne(s) point\xE9e(s)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.pointingSummary.debit));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.pointingSummary.credit));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("pb-net-pos", ctx_r1.pointingSummary.net >= 0)("pb-net-neg", ctx_r1.pointingSummary.net < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt2(ctx_r1.pointingSummary.net), " ");
  }
}
function GrandLivreComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "GRAND LIVRE DES COMPTES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 38)(10, "div", 39)(11, "span", 13);
    \u0275\u0275text(12, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275conditionalCreate(14, GrandLivreComponent_Conditional_41_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 40)(16, "span", 13);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function GrandLivreComponent_Conditional_41_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchAccount, $event) || (ctx_r1.searchAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 42)(20, "button", 43);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_41_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275elementStart(21, "span", 13);
    \u0275\u0275text(22, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Tout ouvrir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 43);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_41_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275elementStart(25, "span", 13);
    \u0275\u0275text(26, "unfold_less");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Tout fermer ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 44);
    \u0275\u0275repeaterCreate(29, GrandLivreComponent_Conditional_41_For_30_Template, 32, 26, "div", 45, _forTrack1);
    \u0275\u0275conditionalCreate(31, GrandLivreComponent_Conditional_41_Conditional_31_Template, 28, 8, "div", 46);
    \u0275\u0275elementStart(32, "div", 47)(33, "span", 48);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 49)(36, "div", 50)(37, "span");
    \u0275\u0275text(38, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 50)(42, "span");
    \u0275\u0275text(43, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 50)(47, "span");
    \u0275\u0275text(48, "Solde net");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "strong");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.companyName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("P\xE9riode : ", \u0275\u0275pipeBind2(7, 13, ctx_r1.dateFrom, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(8, 16, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredData.length, " compte(s) ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchAccount ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchAccount);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.filteredData);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasPointing ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("TOTAL G\xC9N\xC9RAL \u2014 ", ctx_r1.filteredData.length, " compte(s)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.grandTotalDebit));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.grandTotalCredit));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bal-neg", ctx_r1.grandBalance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt2(ctx_r1.grandBalance));
  }
}
var GrandLivreComponent = class _GrandLivreComponent {
  lineKey(accountCode, idx) {
    return `${accountCode}__${idx}`;
  }
  toggleLine(accountCode, idx, event) {
    event.stopPropagation();
    const k = this.lineKey(accountCode, idx);
    if (this.pointedLines.has(k))
      this.pointedLines.delete(k);
    else
      this.pointedLines.add(k);
  }
  isPointed(accountCode, idx) {
    return this.pointedLines.has(this.lineKey(accountCode, idx));
  }
  clearPointing() {
    this.pointedLines.clear();
  }
  get hasPointing() {
    return this.pointedLines.size > 0;
  }
  get pointingSummary() {
    let debit = 0, credit = 0;
    for (const key of this.pointedLines) {
      const [code, idxStr] = key.split("__");
      const acc = this.data.find((a) => a.accountCode === code);
      const line = acc?.lines[+idxStr];
      if (line) {
        debit += line.debit;
        credit += line.credit;
      }
    }
    return { count: this.pointedLines.size, debit, credit, net: debit - credit };
  }
  // ── Helpers filtres ───────────────────────────────────────────────────────
  get filteredData() {
    if (!this.searchAccount.trim())
      return this.data;
    const t = this.searchAccount.toLowerCase();
    return this.data.filter((a) => a.accountCode.toLowerCase().includes(t) || a.accountName.toLowerCase().includes(t));
  }
  get filteredPickerAccounts() {
    if (!this.accountPickerSearch.trim())
      return this.allAccounts;
    const t = this.accountPickerSearch.toLowerCase();
    return this.allAccounts.filter((a) => a.code.toLowerCase().includes(t) || a.name.toLowerCase().includes(t));
  }
  get selectedAccountNames() {
    if (this.selectedAccountIds.length === 0)
      return "Tous les comptes";
    if (this.selectedAccountIds.length === 1) {
      const a = this.allAccounts.find((x) => x.id === this.selectedAccountIds[0]);
      return a ? `${a.code} \u2014 ${a.name}` : "1 compte";
    }
    return `${this.selectedAccountIds.length} comptes s\xE9lectionn\xE9s`;
  }
  get grandTotalDebit() {
    return this.data.reduce((s, a) => s + a.totalDebit, 0);
  }
  get grandTotalCredit() {
    return this.data.reduce((s, a) => s + a.totalCredit, 0);
  }
  get grandBalance() {
    return this.data.reduce((s, a) => s + a.finalBalance, 0);
  }
  get companyName() {
    return this.authService.getActiveCompany()?.name ?? "";
  }
  accountColor(code) {
    return this.CLASS_COLORS[code?.[0]] ?? "#6b7280";
  }
  constructor(reportService, accountingService, authService) {
    this.reportService = reportService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.dateFrom = "";
    this.dateTo = "";
    this.allAccounts = [];
    this.selectedAccountIds = [];
    this.searchAccount = "";
    this.showAccountPicker = false;
    this.accountPickerSearch = "";
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.today = /* @__PURE__ */ new Date();
    this.data = [];
    this.expandedAccounts = /* @__PURE__ */ new Set();
    this.pointedLines = /* @__PURE__ */ new Set();
    this.CLASS_COLORS = {
      "1": "#7c3aed",
      "2": "#2563eb",
      "3": "#0891b2",
      "4": "#059669",
      "5": "#16a34a",
      "6": "#dc2626",
      "7": "#d97706",
      "8": "#6b7280"
    };
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe({
      next: (a) => this.allAccounts = a.filter((x) => !x.deprecated).sort((a2, b) => a2.code.localeCompare(b.code)),
      error: () => {
      }
    });
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.expandedAccounts.clear();
    this.reportService.getGrandLivre({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      accountIds: this.selectedAccountIds.length > 0 ? this.selectedAccountIds : void 0
    }).subscribe({
      next: (res) => {
        const raw = res.accounts || res || {};
        this.data = Object.values(raw).map((a) => ({
          accountCode: a.accountCode,
          accountName: a.accountName,
          openingBalance: a.openingBalance ?? 0,
          totalDebit: a.totalDebit ?? 0,
          totalCredit: a.totalCredit ?? 0,
          finalBalance: a.finalBalance ?? 0,
          lines: (a.lines || []).map((l) => ({
            date: l.date,
            moveRef: l.pieceName || l.ref || "",
            journalCode: l.journal || "",
            label: l.libelle || l.name || "",
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
  // ── Accordéon ─────────────────────────────────────────────────────────────
  toggleAccount(code) {
    if (this.expandedAccounts.has(code))
      this.expandedAccounts.delete(code);
    else
      this.expandedAccounts.add(code);
  }
  expandAll() {
    this.filteredData.forEach((a) => this.expandedAccounts.add(a.accountCode));
  }
  collapseAll() {
    this.expandedAccounts.clear();
  }
  // ── Sélection comptes ─────────────────────────────────────────────────────
  toggleAccountFilter(id) {
    const idx = this.selectedAccountIds.indexOf(id);
    if (idx >= 0)
      this.selectedAccountIds.splice(idx, 1);
    else
      this.selectedAccountIds.push(id);
  }
  isAccountSelected(id) {
    return this.selectedAccountIds.includes(id);
  }
  clearAccountFilter() {
    this.selectedAccountIds = [];
  }
  // ── Impression ─────────────────────────────────────────────────────────────
  print() {
    window.print();
  }
  // ── Export PDF ─────────────────────────────────────────────────────────────
  exportPdf() {
    const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 10;
    let y = M;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y);
    y += 5;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(M, y, pageW - M, y);
    y += 8;
    doc.setFontSize(12);
    doc.text("GRAND LIVRE DES COMPTES", M, y);
    y += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`P\xE9riode : ${this.fmtDate(this.dateFrom)} au ${this.fmtDate(this.dateTo)}   |   G\xE9n\xE9r\xE9 le : ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")}`, M, y);
    y += 8;
    const dark = [17, 24, 39];
    const gray = [241, 245, 249];
    const COL = { 0: 19, 1: 30, 2: 14, 3: 30, 4: 100, 5: 28, 6: 28, 7: 28 };
    for (const acc of this.filteredData) {
      const col = this.hexToRgb(this.accountColor(acc.accountCode));
      autoTable(doc, {
        startY: y,
        margin: { left: M, right: M },
        head: [[
          {
            content: `${acc.accountCode} \u2014 ${acc.accountName}`,
            colSpan: 5,
            styles: { fillColor: col, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8.5 }
          },
          {
            content: `Ouv. ${this.fmt2(acc.openingBalance)}`,
            styles: { fillColor: col, textColor: [255, 255, 255], halign: "right", fontSize: 7.5 }
          },
          {
            content: `Mvt D ${this.fmt2(acc.totalDebit)}`,
            styles: { fillColor: col, textColor: [255, 255, 255], halign: "right", fontSize: 7.5 }
          },
          {
            content: `Cl\xF4t. ${this.fmt2(acc.finalBalance)}`,
            styles: { fillColor: col, textColor: [255, 255, 255], halign: "right", fontSize: 7.5 }
          }
        ]],
        body: [],
        theme: "plain",
        styles: { fontSize: 8, cellPadding: 2.5 },
        columnStyles: {
          0: { cellWidth: COL[0] },
          1: { cellWidth: COL[1] },
          2: { cellWidth: COL[2] },
          3: { cellWidth: COL[3] },
          4: { cellWidth: COL[4] },
          5: { cellWidth: COL[5] },
          6: { cellWidth: COL[6] },
          7: { cellWidth: COL[7] }
        }
      });
      y = doc.lastAutoTable.finalY;
      if (acc.lines.length > 0) {
        autoTable(doc, {
          startY: y,
          margin: { left: M, right: M },
          head: [["Date", "N\xB0 Pi\xE8ce", "Journal", "Tiers", "Libell\xE9", "D\xE9bit", "Cr\xE9dit", "Solde"]],
          body: [
            ...acc.lines.map((l) => [
              this.fmtDate(l.date),
              l.moveRef || "",
              { content: l.journalCode || "", styles: { halign: "center" } },
              l.partner || "",
              l.label || "",
              { content: l.debit > 0 ? this.fmt2(l.debit) : "", styles: { halign: "right" } },
              { content: l.credit > 0 ? this.fmt2(l.credit) : "", styles: { halign: "right" } },
              { content: this.fmt2(l.balance), styles: {
                halign: "right",
                textColor: l.balance >= 0 ? [21, 128, 61] : [185, 28, 28]
              } }
            ]),
            [
              {
                content: `Total ${acc.accountCode}`,
                colSpan: 5,
                styles: { fillColor: gray, fontStyle: "bold", textColor: dark }
              },
              { content: this.fmt2(acc.totalDebit), styles: { fillColor: gray, fontStyle: "bold", halign: "right", textColor: dark } },
              { content: this.fmt2(acc.totalCredit), styles: { fillColor: gray, fontStyle: "bold", halign: "right", textColor: dark } },
              { content: this.fmt2(acc.finalBalance), styles: {
                fillColor: gray,
                fontStyle: "bold",
                halign: "right",
                textColor: acc.finalBalance >= 0 ? [21, 128, 61] : [185, 28, 28]
              } }
            ]
          ],
          theme: "plain",
          styles: { fontSize: 7.5, cellPadding: 2, textColor: dark, lineColor: [229, 231, 235], lineWidth: 0.1 },
          headStyles: { fillColor: [248, 250, 252], textColor: [107, 114, 128], fontStyle: "bold", fontSize: 7.5 },
          columnStyles: {
            0: { cellWidth: COL[0] },
            1: { cellWidth: COL[1] },
            2: { cellWidth: COL[2], halign: "center" },
            3: { cellWidth: COL[3] },
            4: { cellWidth: COL[4] },
            5: { cellWidth: COL[5], halign: "right" },
            6: { cellWidth: COL[6], halign: "right" },
            7: { cellWidth: COL[7], halign: "right" }
          }
        });
        y = doc.lastAutoTable.finalY + 5;
      } else {
        y += 4;
      }
      if (y > 188) {
        doc.addPage();
        y = M + 5;
      }
    }
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(180, 180, 180);
      doc.line(M, 198, pageW - M, 198);
      doc.text(`${this.companyName} \u2014 Blessing ERP`, M, 202);
      doc.text(`Page ${i}/${n}`, pageW - M, 202, { align: "right" });
    }
    doc.save(`grand-livre-comptes-${this.dateFrom}-${this.dateTo}.pdf`);
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
  hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }
  static {
    this.\u0275fac = function GrandLivreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GrandLivreComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GrandLivreComponent, selectors: [["app-grand-livre"]], decls: 42, vars: 10, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "filters-card", "no-print"], [1, "filter-grid"], [1, "filter-group"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel"], [1, "filter-group", "picker-wrap"], [1, "account-picker-btn", 3, "click"], [1, "material-icons"], [1, "picker-label"], [1, "material-icons", "picker-arrow"], [1, "account-picker-dropdown"], [1, "filter-group", "filter-btn-col"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-err"], [1, "loading-state"], [1, "empty-state"], [1, "btn-outline", 3, "click"], [1, "btn-outline", "btn-pdf", 3, "click"], [1, "picker-search"], ["type", "text", "placeholder", "Rechercher un compte\u2026", 1, "search-input", 3, "ngModelChange", "click", "ngModel"], [1, "picker-list"], [1, "picker-clear"], [1, "picker-item", 3, "selected"], [1, "picker-clear", 3, "click"], [1, "picker-item", 3, "click"], [1, "acc-dot"], [1, "acc-code"], [1, "acc-name"], [1, "material-icons", "check-icon"], [1, "btn-spinner"], [1, "spinner-lg"], [1, "print-header", "print-only"], [1, "acc-toolbar", "no-print"], [1, "acc-info"], [1, "acc-search"], ["type", "text", "placeholder", "Rechercher un compte\u2026", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "acc-btns"], [1, "btn-acc", 3, "click"], [1, "gl-content"], [1, "partner-block", 3, "is-open"], [1, "pointing-bar", "no-print"], [1, "grand-total"], [1, "gt-label"], [1, "gt-values"], [1, "gt-item"], [1, "partner-block"], [1, "partner-header", "no-print", 3, "click"], [1, "partner-header-left"], [1, "partner-avatar"], [1, "partner-name-block"], [1, "partner-name"], [1, "partner-meta"], [1, "partner-header-right"], [1, "balance-chips"], [1, "bal-chip", "chip-open"], [1, "bal-chip", "chip-debit"], [1, "bal-chip", "chip-credit"], [1, "bal-chip"], [1, "material-icons", "acc-chevron"], [1, "partner-header-print", "print-only"], [1, "partner-name-print"], [1, "partner-body"], [1, "no-lines", "no-print"], [1, "table-wrap"], [1, "gl-table"], [1, "point-th"], [1, "r"], [3, "line-pointed"], [1, "total-row"], ["colspan", "5", 1, "total-label"], [1, "r", "mono", "debit-val"], [1, "r", "mono", "credit-val"], [1, "r", "mono", "bold"], [3, "click"], [1, "point-col"], [1, "point-dot"], [1, "date-col"], [1, "ref-col", "mono"], [1, "jnl-col"], [1, "lbl-col"], [1, "r", "mono"], [1, "pb-left"], [1, "material-icons", "pb-icon"], [1, "pb-count"], [1, "pb-values"], [1, "pb-item"], [1, "pb-lbl"], [1, "pb-debit"], [1, "pb-sep"], [1, "pb-credit"], [1, "pb-clear", 3, "click"]], template: function GrandLivreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "menu_book");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Grand Livre des Comptes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Mouvements par compte comptable");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, GrandLivreComponent_Conditional_10_Template, 9, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function GrandLivreComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "label");
        \u0275\u0275text(19, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function GrandLivreComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11)(22, "label");
        \u0275\u0275text(23, "Comptes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 12);
        \u0275\u0275listener("click", function GrandLivreComponent_Template_button_click_24_listener() {
          return ctx.showAccountPicker = !ctx.showAccountPicker;
        });
        \u0275\u0275elementStart(25, "span", 13);
        \u0275\u0275text(26, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 14);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 15);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(31, GrandLivreComponent_Conditional_31_Template, 9, 2, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 17)(33, "label");
        \u0275\u0275text(34, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 18);
        \u0275\u0275listener("click", function GrandLivreComponent_Template_button_click_35_listener() {
          ctx.generate();
          return ctx.showAccountPicker = false;
        });
        \u0275\u0275conditionalCreate(36, GrandLivreComponent_Conditional_36_Template, 2, 0)(37, GrandLivreComponent_Conditional_37_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(38, GrandLivreComponent_Conditional_38_Template, 4, 1, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(39, GrandLivreComponent_Conditional_39_Template, 4, 0, "div", 20)(40, GrandLivreComponent_Conditional_40_Template, 5, 0, "div", 21)(41, GrandLivreComponent_Conditional_41_Template, 51, 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.generated && ctx.data.length > 0 ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.selectedAccountNames);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.showAccountPicker ? "expand_less" : "expand_more");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAccountPicker ? 31 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 36 : 37);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 39 : ctx.generated && ctx.data.length === 0 ? 40 : ctx.generated ? 41 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #2563eb;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.btn-outline.btn-pdf[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.picker-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 260px;\n}\n.account-picker-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 13px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  width: 100%;\n  transition: border-color 0.15s;\n}\n.account-picker-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.account-picker-btn[_ngcontent-%COMP%]   .picker-label[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.account-picker-btn[_ngcontent-%COMP%]   .picker-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 18px;\n}\n.account-picker-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n}\n.account-picker-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  min-width: 340px;\n  max-height: 320px;\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.picker-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--border-light);\n  flex-shrink: 0;\n}\n.picker-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.picker-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 250px;\n}\n.picker-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 12px;\n  font-size: 11px;\n  color: #dc2626;\n  cursor: pointer;\n  background: var(--danger-bg);\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid var(--border-light);\n}\n.picker-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.picker-clear[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.picker-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.picker-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.picker-item.selected[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n}\n.acc-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.acc-code[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.acc-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--text-muted);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.check-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2563eb;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.acc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.acc-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.acc-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.acc-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  background: var(--bg-surface);\n}\n.acc-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--text-muted);\n}\n.acc-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n}\n.search-input[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  border: none;\n  outline: none;\n  font-size: 13px;\n  width: 100%;\n  background: transparent;\n}\n.acc-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-left: auto;\n}\n.btn-acc[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-acc[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-acc[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n  background: var(--primary-subtle);\n}\n.gl-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.partner-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.partner-block.is-open[_ngcontent-%COMP%] {\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.partner-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.partner-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.partner-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.partner-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.partner-name-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.partner-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 360px;\n}\n.partner-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.partner-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.balance-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.bal-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.bal-chip.chip-open[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.bal-chip.chip-debit[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.bal-chip.chip-credit[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.bal-chip.chip-pos[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  font-size: 12px;\n}\n.bal-chip.chip-neg[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 12px;\n}\n.acc-chevron[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.partner-block.is-open[_ngcontent-%COMP%]   .acc-chevron[_ngcontent-%COMP%] {\n  color: #2563eb;\n  transform: rotate(180deg);\n}\n.partner-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-light);\n}\n.partner-body.body-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.no-lines[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.gl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.line-pointed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(253, 224, 71, 0.12) !important;\n  border-bottom-color: rgba(253, 224, 71, 0.3);\n}\n.gl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.line-pointed[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(253, 224, 71, 0.18) !important;\n}\n.gl-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.gl-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.gl-table[_ngcontent-%COMP%]   .point-th[_ngcontent-%COMP%] {\n  width: 20px;\n  padding: 0 4px 0 10px;\n}\n.gl-table[_ngcontent-%COMP%]   .point-col[_ngcontent-%COMP%] {\n  width: 20px;\n  padding: 0 4px 0 10px;\n}\n.gl-table[_ngcontent-%COMP%]   .date-col[_ngcontent-%COMP%] {\n  width: 90px;\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.gl-table[_ngcontent-%COMP%]   .ref-col[_ngcontent-%COMP%] {\n  width: 110px;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   .jnl-col[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.gl-table[_ngcontent-%COMP%]   .lbl-col[_ngcontent-%COMP%] {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gl-table[_ngcontent-%COMP%]   .debit-val[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.gl-table[_ngcontent-%COMP%]   .credit-val[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.gl-table[_ngcontent-%COMP%]   .bal-pos[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.gl-table[_ngcontent-%COMP%]   .bal-neg[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border-light);\n  border-bottom: none;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.point-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  transition: all 0.15s;\n}\n.point-dot.dot-active[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  border-color: #d97706;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);\n}\n.pointing-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 16px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  background: #1e293b;\n  color: white;\n  border-radius: 12px;\n  padding: 12px 20px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);\n  border: 1px solid #334155;\n  margin-top: 8px;\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.pb-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.pb-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #f59e0b;\n}\n.pb-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.pb-values[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.pb-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  padding: 0 12px;\n}\n.pb-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #94a3b8;\n}\n.pb-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #334155;\n}\n.pb-debit[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #4ade80;\n}\n.pb-credit[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #f87171;\n}\n.pb-net-pos[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #4ade80;\n}\n.pb-net-neg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #f87171;\n}\n.pb-clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1.5px solid #475569;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pb-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.pb-clear[_ngcontent-%COMP%]:hover {\n  background: #334155;\n  color: white;\n  border-color: #64748b;\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-values[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n}\n.gt-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item[_ngcontent-%COMP%]   strong.bal-neg[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--border);\n}\n.print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin: 0;\n  color: var(--text-secondary);\n}\n.partner-header-print[_ngcontent-%COMP%] {\n  display: none;\n}\n@media print {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .partner-header-print[_ngcontent-%COMP%] {\n    display: flex !important;\n    justify-content: space-between;\n    padding: 6px 10px;\n    color: white;\n    font-size: 11px;\n    font-weight: 700;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .partner-name-print[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 800;\n  }\n  .partner-header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .partner-body.body-hidden[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .partner-block[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid var(--border);\n    margin-bottom: 8px;\n  }\n  .gl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .gl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 9px;\n  }\n  .grand-total[_ngcontent-%COMP%] {\n    background: var(--primary);\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=grand-livre.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GrandLivreComponent, [{
    type: Component,
    args: [{ selector: "app-grand-livre", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header no-print">
    <div class="header-left">
      <span class="material-icons page-icon">menu_book</span>
      <div>
        <h1 class="page-title">Grand Livre des Comptes</h1>
        <p class="page-sub">Mouvements par compte comptable</p>
      </div>
    </div>
    @if (generated && data.length > 0) {
      <div class="header-actions">
        <button class="btn-outline" (click)="print()">
          <span class="material-icons">print</span> Imprimer
        </button>
        <button class="btn-outline btn-pdf" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> PDF
        </button>
      </div>
    }
  </div>

  <!-- \u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filters-card no-print">
    <div class="filter-grid">
      <div class="filter-group">
        <label>P\xE9riode du</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateTo">
      </div>

      <!-- S\xE9lecteur de comptes -->
      <div class="filter-group picker-wrap">
        <label>Comptes</label>
        <button class="account-picker-btn" (click)="showAccountPicker = !showAccountPicker">
          <span class="material-icons">account_balance</span>
          <span class="picker-label">{{ selectedAccountNames }}</span>
          <span class="material-icons picker-arrow">{{ showAccountPicker ? 'expand_less' : 'expand_more' }}</span>
        </button>
        @if (showAccountPicker) {
          <div class="account-picker-dropdown">
            <div class="picker-search">
              <span class="material-icons">search</span>
              <input type="text" placeholder="Rechercher un compte\u2026" [(ngModel)]="accountPickerSearch" class="search-input" (click)="$event.stopPropagation()">
            </div>
            <div class="picker-list">
              @if (selectedAccountIds.length > 0) {
                <button class="picker-clear" (click)="clearAccountFilter()">
                  <span class="material-icons">clear_all</span> D\xE9s\xE9lectionner tout
                </button>
              }
              @for (acc of filteredPickerAccounts; track acc.id) {
                <label class="picker-item" [class.selected]="isAccountSelected(acc.id!)" (click)="toggleAccountFilter(acc.id!)">
                  <span class="acc-dot" [style.background]="accountColor(acc.code)"></span>
                  <span class="acc-code">{{ acc.code }}</span>
                  <span class="acc-name">{{ acc.name }}</span>
                  @if (isAccountSelected(acc.id!)) {
                    <span class="material-icons check-icon">check</span>
                  }
                </label>
              }
            </div>
          </div>
        }
      </div>

      <div class="filter-group filter-btn-col">
        <label>&nbsp;</label>
        <button class="btn-generate" (click)="generate(); showAccountPicker = false" [disabled]="loading">
          @if (loading) { <span class="btn-spinner"></span> G\xE9n\xE9ration\u2026 }
          @else { <span class="material-icons">play_arrow</span> G\xE9n\xE9rer }
        </button>
      </div>
    </div>
    @if (errorMsg) {
      <div class="alert-err"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
    }
  </div>

  <!-- \u2550\u2550 R\xC9SULTAT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>G\xE9n\xE9ration en cours\u2026</p>
    </div>

  } @else if (generated && data.length === 0) {
    <div class="empty-state">
      <span class="material-icons">menu_book</span>
      <p>Aucun compte avec des mouvements sur cette p\xE9riode</p>
    </div>

  } @else if (generated) {

    <!-- En-t\xEAte impression -->
    <div class="print-header print-only">
      <h2>{{ companyName }}</h2>
      <h3>GRAND LIVRE DES COMPTES</h3>
      <p>P\xE9riode : {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</p>
    </div>

    <!-- Barre outils accord\xE9on -->
    <div class="acc-toolbar no-print">
      <div class="acc-info">
        <span class="material-icons">menu_book</span>
        {{ filteredData.length }} compte(s)
        @if (searchAccount) { \xB7 filtr\xE9s }
      </div>
      <div class="acc-search">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Rechercher un compte\u2026" [(ngModel)]="searchAccount" class="search-input">
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

    <!-- Accord\xE9on par compte -->
    <div class="gl-content">
      @for (account of filteredData; track account.accountCode) {
        <div class="partner-block" [class.is-open]="expandedAccounts.has(account.accountCode)">

          <!-- En-t\xEAte compte (\xE9cran) -->
          <div class="partner-header no-print" (click)="toggleAccount(account.accountCode)">
            <div class="partner-header-left">
              <div class="partner-avatar" [style.background]="accountColor(account.accountCode)">
                {{ account.accountCode.charAt(0) }}
              </div>
              <div class="partner-name-block">
                <span class="partner-name">{{ account.accountCode }} \u2014 {{ account.accountName }}</span>
                <span class="partner-meta">{{ account.lines.length }} mouvement(s)</span>
              </div>
            </div>
            <div class="partner-header-right">
              <div class="balance-chips">
                <span class="bal-chip chip-open">
                  Ouv. {{ fmt2(account.openingBalance) }}
                </span>
                <span class="bal-chip chip-debit">+ {{ fmt2(account.totalDebit) }}</span>
                <span class="bal-chip chip-credit">\u2212 {{ fmt2(account.totalCredit) }}</span>
                <span class="bal-chip" [class.chip-pos]="account.finalBalance >= 0"
                                       [class.chip-neg]="account.finalBalance < 0">
                  Cl\xF4t. <strong>{{ fmt2(account.finalBalance) }}</strong>
                </span>
              </div>
              <span class="material-icons acc-chevron">
                {{ expandedAccounts.has(account.accountCode) ? 'expand_less' : 'expand_more' }}
              </span>
            </div>
          </div>

          <!-- En-t\xEAte print -->
          <div class="partner-header-print print-only"
               [style.background]="accountColor(account.accountCode)">
            <span class="partner-name-print">{{ account.accountCode }} \u2014 {{ account.accountName }}</span>
            <span>Solde ouv. : {{ fmt2(account.openingBalance) }} | Cl\xF4ture : {{ fmt2(account.finalBalance) }}</span>
          </div>

          <!-- Corps : lignes -->
          <div class="partner-body" [class.body-hidden]="!expandedAccounts.has(account.accountCode)">

            @if (account.lines.length === 0) {
              <div class="no-lines no-print">Aucun mouvement dans la p\xE9riode \u2014 solde report\xE9 uniquement.</div>
            } @else {
              <div class="table-wrap">
                <table class="gl-table">
                  <thead>
                    <tr>
                      <th class="point-th"></th>
                      <th>Date</th>
                      <th>N\xB0 Pi\xE8ce</th>
                      <th>Journal</th>
                      <th>Tiers</th>
                      <th>Libell\xE9</th>
                      <th class="r">D\xE9bit</th>
                      <th class="r">Cr\xE9dit</th>
                      <th class="r">Solde</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (line of account.lines; track $index) {
                      <tr [class.line-pointed]="isPointed(account.accountCode, $index)"
                          (click)="toggleLine(account.accountCode, $index, $event)">
                        <td class="point-col">
                          <span class="point-dot" [class.dot-active]="isPointed(account.accountCode, $index)"></span>
                        </td>
                        <td class="date-col">{{ fmtDate(line.date) }}</td>
                        <td class="ref-col mono">{{ line.moveRef }}</td>
                        <td class="jnl-col">{{ line.journalCode }}</td>
                        <td class="lbl-col">{{ line.partner }}</td>
                        <td class="lbl-col">{{ line.label }}</td>
                        <td class="r mono" [class.debit-val]="line.debit > 0">
                          {{ line.debit > 0 ? fmt2(line.debit) : '' }}
                        </td>
                        <td class="r mono" [class.credit-val]="line.credit > 0">
                          {{ line.credit > 0 ? fmt2(line.credit) : '' }}
                        </td>
                        <td class="r mono bold" [class.bal-pos]="line.balance >= 0" [class.bal-neg]="line.balance < 0">
                          {{ fmt2(line.balance) }}
                        </td>
                      </tr>
                    }
                  </tbody>
                  <tfoot>
                    <tr class="total-row">
                      <td colspan="5" class="total-label">Total {{ account.accountCode }}</td>
                      <td class="r mono debit-val">{{ fmt2(account.totalDebit) }}</td>
                      <td class="r mono credit-val">{{ fmt2(account.totalCredit) }}</td>
                      <td class="r mono bold" [class.bal-pos]="account.finalBalance >= 0" [class.bal-neg]="account.finalBalance < 0">
                        {{ fmt2(account.finalBalance) }}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            }
          </div>

        </div>
      }

      <!-- Barre de pointage flottante -->
      @if (hasPointing) {
        <div class="pointing-bar no-print">
          <div class="pb-left">
            <span class="material-icons pb-icon">flag</span>
            <span class="pb-count">{{ pointingSummary.count }} ligne(s) point\xE9e(s)</span>
          </div>
          <div class="pb-values">
            <div class="pb-item">
              <span class="pb-lbl">D\xE9bit</span>
              <strong class="pb-debit">{{ fmt2(pointingSummary.debit) }}</strong>
            </div>
            <div class="pb-sep"></div>
            <div class="pb-item">
              <span class="pb-lbl">Cr\xE9dit</span>
              <strong class="pb-credit">{{ fmt2(pointingSummary.credit) }}</strong>
            </div>
            <div class="pb-sep"></div>
            <div class="pb-item">
              <span class="pb-lbl">Net</span>
              <strong [class.pb-net-pos]="pointingSummary.net >= 0" [class.pb-net-neg]="pointingSummary.net < 0">
                {{ fmt2(pointingSummary.net) }}
              </strong>
            </div>
          </div>
          <button class="pb-clear" (click)="clearPointing()">
            <span class="material-icons">close</span> Effacer
          </button>
        </div>
      }

      <!-- Grand total -->
      <div class="grand-total">
        <span class="gt-label">TOTAL G\xC9N\xC9RAL \u2014 {{ filteredData.length }} compte(s)</span>
        <div class="gt-values">
          <div class="gt-item"><span>D\xE9bit</span><strong>{{ fmt2(grandTotalDebit) }}</strong></div>
          <div class="gt-item"><span>Cr\xE9dit</span><strong>{{ fmt2(grandTotalCredit) }}</strong></div>
          <div class="gt-item">
            <span>Solde net</span>
            <strong [class.bal-neg]="grandBalance < 0">{{ fmt2(grandBalance) }}</strong>
          </div>
        </div>
      </div>

    </div>
  }

</div>
`, styles: ['/* src/app/modules/accounting/components/grand-livre/grand-livre.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: #2563eb;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.btn-outline.btn-pdf:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.form-ctl {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-ctl:focus {\n  border-color: #2563eb;\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.picker-wrap {\n  position: relative;\n  min-width: 260px;\n}\n.account-picker-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 13px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  width: 100%;\n  transition: border-color 0.15s;\n}\n.account-picker-btn .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.account-picker-btn .picker-label {\n  flex: 1;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.account-picker-btn .picker-arrow {\n  margin-left: auto;\n  font-size: 18px;\n}\n.account-picker-btn:hover {\n  border-color: #2563eb;\n}\n.account-picker-dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  min-width: 340px;\n  max-height: 320px;\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.picker-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--border-light);\n  flex-shrink: 0;\n}\n.picker-search .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.picker-list {\n  overflow-y: auto;\n  max-height: 250px;\n}\n.picker-clear {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 12px;\n  font-size: 11px;\n  color: #dc2626;\n  cursor: pointer;\n  background: var(--danger-bg);\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid var(--border-light);\n}\n.picker-clear .material-icons {\n  font-size: 14px;\n}\n.picker-clear:hover {\n  background: var(--danger-bg);\n}\n.picker-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.picker-item:hover {\n  background: var(--bg-elevated);\n}\n.picker-item.selected {\n  background: var(--primary-subtle);\n}\n.acc-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.acc-code {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.acc-name {\n  flex: 1;\n  color: var(--text-muted);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.check-icon {\n  font-size: 14px;\n  color: #2563eb;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.acc-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.acc-info {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.acc-info .material-icons {\n  font-size: 16px;\n}\n.acc-search {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  background: var(--bg-surface);\n}\n.acc-search .material-icons {\n  font-size: 17px;\n  color: var(--text-muted);\n}\n.acc-search:focus-within {\n  border-color: #2563eb;\n}\n.search-input {\n  color: var(--text-primary);\n  border: none;\n  outline: none;\n  font-size: 13px;\n  width: 100%;\n  background: transparent;\n}\n.acc-btns {\n  display: flex;\n  gap: 6px;\n  margin-left: auto;\n}\n.btn-acc {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-acc .material-icons {\n  font-size: 15px;\n}\n.btn-acc:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n  background: var(--primary-subtle);\n}\n.gl-content {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.partner-block {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.partner-block.is-open {\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.partner-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.partner-header:hover {\n  background: var(--bg-elevated);\n}\n.partner-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.partner-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.partner-name-block {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.partner-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 360px;\n}\n.partner-meta {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.partner-header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.balance-chips {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.bal-chip {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.bal-chip.chip-open {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.bal-chip.chip-debit {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.bal-chip.chip-credit {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.bal-chip.chip-pos {\n  background: var(--success-bg);\n  color: var(--success);\n  font-size: 12px;\n}\n.bal-chip.chip-neg {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 12px;\n}\n.acc-chevron {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.partner-block.is-open .acc-chevron {\n  color: #2563eb;\n  transform: rotate(180deg);\n}\n.partner-body {\n  border-top: 1px solid var(--border-light);\n}\n.partner-body.body-hidden {\n  display: none;\n}\n.no-lines {\n  padding: 16px 18px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.gl-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.gl-table th {\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.gl-table td {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.gl-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.gl-table tbody tr {\n  cursor: pointer;\n}\n.gl-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.gl-table tbody tr.line-pointed td {\n  background: rgba(253, 224, 71, 0.12) !important;\n  border-bottom-color: rgba(253, 224, 71, 0.3);\n}\n.gl-table tbody tr.line-pointed:hover td {\n  background: rgba(253, 224, 71, 0.18) !important;\n}\n.gl-table .r {\n  text-align: right;\n}\n.gl-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.gl-table .bold {\n  font-weight: 700;\n}\n.gl-table .point-th {\n  width: 20px;\n  padding: 0 4px 0 10px;\n}\n.gl-table .point-col {\n  width: 20px;\n  padding: 0 4px 0 10px;\n}\n.gl-table .date-col {\n  width: 90px;\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.gl-table .ref-col {\n  width: 110px;\n  white-space: nowrap;\n}\n.gl-table .jnl-col {\n  width: 60px;\n}\n.gl-table .lbl-col {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gl-table .debit-val {\n  color: #16a34a;\n  font-weight: 600;\n}\n.gl-table .credit-val {\n  color: #dc2626;\n  font-weight: 600;\n}\n.gl-table .bal-pos {\n  color: #16a34a;\n}\n.gl-table .bal-neg {\n  color: #dc2626;\n}\n.total-row td {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border-light);\n  border-bottom: none;\n}\n.total-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.point-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  transition: all 0.15s;\n}\n.point-dot.dot-active {\n  background: #f59e0b;\n  border-color: #d97706;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);\n}\n.pointing-bar {\n  position: sticky;\n  bottom: 16px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  background: #1e293b;\n  color: white;\n  border-radius: 12px;\n  padding: 12px 20px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);\n  border: 1px solid #334155;\n  margin-top: 8px;\n  animation: slideUp 0.2s ease;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.pb-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.pb-icon {\n  font-size: 20px;\n  color: #f59e0b;\n}\n.pb-count {\n  font-size: 13px;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.pb-values {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.pb-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  padding: 0 12px;\n}\n.pb-lbl {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #94a3b8;\n}\n.pb-sep {\n  width: 1px;\n  height: 32px;\n  background: #334155;\n}\n.pb-debit {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #4ade80;\n}\n.pb-credit {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #f87171;\n}\n.pb-net-pos {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #4ade80;\n}\n.pb-net-neg {\n  font-size: 14px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n  color: #f87171;\n}\n.pb-clear {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1.5px solid #475569;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pb-clear .material-icons {\n  font-size: 15px;\n}\n.pb-clear:hover {\n  background: #334155;\n  color: white;\n  border-color: #64748b;\n}\n.grand-total {\n  background: var(--primary);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n.gt-label {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-values {\n  display: flex;\n  gap: 28px;\n}\n.gt-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item span {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item strong {\n  font-size: 16px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item strong.bal-neg {\n  opacity: 0.85;\n}\n.print-only {\n  display: none;\n}\n.print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--border);\n}\n.print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header h3 {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.print-header p {\n  font-size: 11px;\n  margin: 0;\n  color: var(--text-secondary);\n}\n.partner-header-print {\n  display: none;\n}\n@media print {\n  .page-container {\n    padding: 4mm;\n    max-width: none;\n  }\n  .no-print {\n    display: none !important;\n  }\n  .print-only {\n    display: block !important;\n  }\n  .print-header {\n    display: block !important;\n  }\n  .partner-header-print {\n    display: flex !important;\n    justify-content: space-between;\n    padding: 6px 10px;\n    color: white;\n    font-size: 11px;\n    font-weight: 700;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .partner-name-print {\n    font-size: 12px;\n    font-weight: 800;\n  }\n  .partner-header {\n    display: none !important;\n  }\n  .partner-body.body-hidden {\n    display: block !important;\n  }\n  .partner-block {\n    box-shadow: none;\n    border: 1px solid var(--border);\n    margin-bottom: 8px;\n  }\n  .gl-table th,\n  .gl-table td {\n    padding: 4px 8px;\n    font-size: 9px;\n  }\n  .grand-total {\n    background: var(--primary);\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=grand-livre.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AccountingService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GrandLivreComponent, { className: "GrandLivreComponent", filePath: "app/modules/accounting/components/grand-livre/grand-livre.component.ts", lineNumber: 39 });
})();
export {
  GrandLivreComponent
};
//# sourceMappingURL=chunk-3T4WWDJG.js.map
