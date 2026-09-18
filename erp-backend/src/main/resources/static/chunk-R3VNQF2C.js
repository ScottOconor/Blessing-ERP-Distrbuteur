import {
  PdfExportService
} from "./chunk-H5LFPJCV.js";
import {
  ExcelExportService
} from "./chunk-RDE6QNFF.js";
import "./chunk-V5EAPQSQ.js";
import {
  ReportService
} from "./chunk-5ADIBSOR.js";
import "./chunk-AJFTTPVD.js";
import "./chunk-7YWLATDR.js";
import {
  CheckboxControlValueAccessor,
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
  DecimalPipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/reports/balance-sheet/balance-sheet.component.ts
function BalanceSheetComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function BalanceSheetComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 22);
    \u0275\u0275listener("click", function BalanceSheetComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Exporter PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function BalanceSheetComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Exporter Excel ");
    \u0275\u0275elementEnd()();
  }
}
function BalanceSheetComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function BalanceSheetComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMsg, " ");
  }
}
function BalanceSheetComponent_Conditional_44_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "NET N-1");
    \u0275\u0275elementEnd();
  }
}
function BalanceSheetComponent_Conditional_44_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "NET N-1");
    \u0275\u0275elementEnd();
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, actif_r3.brutN, "1.0-0"), " ");
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, actif_r3.amortN, "1.0-0"), " ");
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", actif_r3.netN !== 0 || actif_r3.isGrandTotal ? \u0275\u0275pipeBind2(1, 1, actif_r3.netN, "1.0-0") : "", " ");
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, actif_r3.netN1, "1.0-0"), " ");
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275conditionalCreate(1, BalanceSheetComponent_Conditional_44_For_39_Conditional_15_Conditional_1_Template, 2, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actif_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classProp("bilan-td-total", actif_r3.isTotal || actif_r3.isGrandTotal)("bilan-td-grandtotal", actif_r3.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275conditional(!actif_r3.isEmpty && actif_r3.netN1 !== 0 ? 1 : -1);
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const passif_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, passif_r4.netN1, "1.0-0"), " ");
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275conditionalCreate(1, BalanceSheetComponent_Conditional_44_For_39_Conditional_22_Conditional_1_Template, 2, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passif_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275classProp("bilan-td-total", passif_r4.isTotal || passif_r4.isGrandTotal)("bilan-td-grandtotal", passif_r4.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275conditional(!passif_r4.isEmpty && passif_r4.netN1 !== 0 ? 1 : -1);
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passif_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", passif_r4.netN !== 0 || passif_r4.isGrandTotal ? \u0275\u0275pipeBind2(1, 1, passif_r4.netN, "1.0-0") : "", " ");
  }
}
function BalanceSheetComponent_Conditional_44_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "tr")(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275conditionalCreate(10, BalanceSheetComponent_Conditional_44_For_39_Conditional_10_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 41);
    \u0275\u0275conditionalCreate(12, BalanceSheetComponent_Conditional_44_For_39_Conditional_12_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 42);
    \u0275\u0275conditionalCreate(14, BalanceSheetComponent_Conditional_44_For_39_Conditional_14_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, BalanceSheetComponent_Conditional_44_For_39_Conditional_15_Template, 2, 5, "td", 44);
    \u0275\u0275elementStart(16, "td", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 40);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, BalanceSheetComponent_Conditional_44_For_39_Conditional_22_Template, 2, 5, "td", 44);
    \u0275\u0275elementStart(23, "td", 42);
    \u0275\u0275conditionalCreate(24, BalanceSheetComponent_Conditional_44_For_39_Conditional_24_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const actif_r6 = \u0275\u0275storeLet(ctx_r1.actifBody.at(i_r5) ?? ctx_r1.emptyRow);
    \u0275\u0275advance();
    const passif_r7 = \u0275\u0275storeLet(ctx_r1.passifBody.at(i_r5) ?? ctx_r1.emptyRow);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bilan-td-total", actif_r6.isTotal || actif_r6.isGrandTotal)("bilan-td-grandtotal", actif_r6.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(!actif_r6.isEmpty && !actif_r6.isTotal ? actif_r6.ref : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-section-label", actif_r6.isTotal || actif_r6.isGrandTotal)("bilan-td-total", actif_r6.isTotal || actif_r6.isGrandTotal)("bilan-td-grandtotal", actif_r6.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(actif_r6.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-td-total", actif_r6.isTotal || actif_r6.isGrandTotal)("bilan-td-grandtotal", actif_r6.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(actif_r6.compte);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-td-total", actif_r6.isTotal || actif_r6.isGrandTotal)("bilan-td-grandtotal", actif_r6.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275conditional(!actif_r6.isEmpty && actif_r6.brutN !== 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-td-total", actif_r6.isTotal || actif_r6.isGrandTotal)("bilan-td-grandtotal", actif_r6.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275conditional(!actif_r6.isEmpty && actif_r6.amortN !== 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-td-total", actif_r6.isTotal || actif_r6.isGrandTotal)("bilan-td-grandtotal", actif_r6.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275conditional(!actif_r6.isEmpty ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.comparisonEnabled ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-td-total", passif_r7.isTotal || passif_r7.isGrandTotal)("bilan-td-grandtotal", passif_r7.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(!passif_r7.isEmpty && !passif_r7.isTotal ? passif_r7.ref : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-section-label", passif_r7.isTotal || passif_r7.isGrandTotal)("bilan-td-total", passif_r7.isTotal || passif_r7.isGrandTotal)("bilan-td-grandtotal", passif_r7.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(passif_r7.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-td-total", passif_r7.isTotal || passif_r7.isGrandTotal)("bilan-td-grandtotal", passif_r7.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(passif_r7.compte);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.comparisonEnabled ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bilan-td-total", passif_r7.isTotal || passif_r7.isGrandTotal)("bilan-td-grandtotal", passif_r7.isGrandTotal);
    \u0275\u0275advance();
    \u0275\u0275conditional(!passif_r7.isEmpty ? 24 : -1);
  }
}
function BalanceSheetComponent_Conditional_44_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.actifFinal.netN1 !== 0 ? \u0275\u0275pipeBind2(2, 1, ctx_r1.actifFinal.netN1, "1.0-0") : "");
  }
}
function BalanceSheetComponent_Conditional_44_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.passifFinal.netN1 !== 0 ? \u0275\u0275pipeBind2(2, 1, ctx_r1.passifFinal.netN1, "1.0-0") : "");
  }
}
function BalanceSheetComponent_Conditional_44_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "\u2713 BILAN \xC9QUILIBR\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u2014 Total Actif = Total Passif = ", \u0275\u0275pipeBind2(5, 1, ctx_r1.totalActif, "1.0-0"), " FCFA ");
  }
}
function BalanceSheetComponent_Conditional_44_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "\u26A0 BILAN D\xC9S\xC9QUILIBR\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u2014 Diff\xE9rence = ", \u0275\u0275pipeBind2(5, 1, ctx_r1.totalActif - ctx_r1.totalPassif, "1.0-0"), " FCFA ");
  }
}
function BalanceSheetComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 27)(12, "table", 28)(13, "thead")(14, "tr", 29)(15, "th", 30);
    \u0275\u0275text(16, "REF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 31);
    \u0275\u0275text(18, "ACTIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 32);
    \u0275\u0275text(20, "Cpte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 33);
    \u0275\u0275text(22, "BRUT N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 33);
    \u0275\u0275text(24, "AMORT.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 34);
    \u0275\u0275text(26, "NET N");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, BalanceSheetComponent_Conditional_44_Conditional_27_Template, 2, 0, "th", 34);
    \u0275\u0275elementStart(28, "th", 35);
    \u0275\u0275text(29, "REF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 36);
    \u0275\u0275text(31, "PASSIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 32);
    \u0275\u0275text(33, "Cpte");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, BalanceSheetComponent_Conditional_44_Conditional_34_Template, 2, 0, "th", 34);
    \u0275\u0275elementStart(35, "th", 37);
    \u0275\u0275text(36, "NET N");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, BalanceSheetComponent_Conditional_44_For_39_Template, 25, 58, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(40, "tr", 38)(41, "td", 39);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 40);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td", 41);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "td", 41);
    \u0275\u0275elementStart(51, "td", 42);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(54, BalanceSheetComponent_Conditional_44_Conditional_54_Template, 3, 4, "td", 41);
    \u0275\u0275elementStart(55, "td", 43);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td", 40);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(61, BalanceSheetComponent_Conditional_44_Conditional_61_Template, 3, 4, "td", 41);
    \u0275\u0275elementStart(62, "td", 42);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div");
    \u0275\u0275conditionalCreate(66, BalanceSheetComponent_Conditional_44_Conditional_66_Template, 6, 4)(67, BalanceSheetComponent_Conditional_44_Conditional_67_Template, 6, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("BILAN AU ", \u0275\u0275pipeBind2(3, 20, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("SYSCOHADA R\xC9VIS\xC9 \u2014 du ", \u0275\u0275pipeBind2(6, 23, ctx_r1.dateFrom, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(7, 26, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Imprim\xE9 le ", \u0275\u0275pipeBind2(10, 29, ctx_r1.today, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r1.comparisonEnabled ? 27 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.comparisonEnabled ? 34 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.rowIndices);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.actifFinal.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.actifFinal.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.actifFinal.compte);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.actifFinal.brutN !== 0 ? \u0275\u0275pipeBind2(49, 32, ctx_r1.actifFinal.brutN, "1.0-0") : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 35, ctx_r1.actifFinal.netN, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.comparisonEnabled ? 54 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.passifFinal.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.passifFinal.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.passifFinal.compte);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.comparisonEnabled ? 61 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 38, ctx_r1.passifFinal.netN, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.isEquilibre ? "bilan-equilibre ok" : "bilan-equilibre warn");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEquilibre ? 66 : 67);
  }
}
function n(v) {
  return v != null ? Number(v) : 0;
}
var BalanceSheetComponent = class _BalanceSheetComponent {
  constructor(reportService, authService, excelExport, pdfExport) {
    this.reportService = reportService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.pdfExport = pdfExport;
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.today = /* @__PURE__ */ new Date();
    this.periodType = "yearly";
    this.dateFrom = "";
    this.dateTo = "";
    this.includeUnposted = false;
    this.comparisonEnabled = true;
    this.totalActif = 0;
    this.totalPassif = 0;
    this.isEquilibre = false;
    this.dateFromN1 = "";
    this.dateToN1 = "";
    this.actifRows = [];
    this.passifRows = [];
    this.emptyRow = { ref: "", label: "", compte: "", brutN: 0, amortN: 0, netN: 0, netN1: 0, isTotal: false, isGrandTotal: false, isEmpty: true };
  }
  ngOnInit() {
    this.resetPeriod();
  }
  /** Applique la période par défaut selon le type choisi */
  resetPeriod() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    switch (this.periodType) {
      case "monthly":
        const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        this.dateFrom = this.fmt(prev);
        this.dateTo = this.fmt(new Date(now.getFullYear(), now.getMonth(), 0));
        break;
      case "quarterly": {
        const q = Math.floor((month - 1) / 3);
        this.dateFrom = this.fmt(new Date(year, q * 3, 1));
        this.dateTo = this.fmt(new Date(year, q * 3 + 3, 0));
        break;
      }
      case "yearly":
      default:
        this.dateFrom = `${year}-01-01`;
        this.dateTo = this.fmt(now);
        break;
    }
  }
  onPeriodTypeChange() {
    if (this.periodType !== "custom") {
      this.resetPeriod();
    }
  }
  fmt(d) {
    return d.toISOString().split("T")[0];
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez l'intervalle (dates d\xE9but/fin)";
      return;
    }
    if (this.dateFrom > this.dateTo) {
      this.errorMsg = "La date de d\xE9but ne peut pas \xEAtre post\xE9rieure \xE0 la date de fin.";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.reportService.getBilan({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      periodType: this.periodType,
      includeUnposted: this.includeUnposted,
      comparisonEnabled: this.comparisonEnabled
    }).subscribe({
      next: (res) => {
        this.buildRows(res);
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration";
      }
    });
  }
  buildRows(res) {
    const postes = res.postes || {};
    this.dateFromN1 = res.dateFromN1 || "";
    this.dateToN1 = res.dateToN1 || "";
    const actifRefs = res.actif?.postes || [];
    const passifRefs = res.passif?.postes || [];
    this.actifRows = actifRefs.filter((r) => postes[r]).map((r) => this.toPoste(r, postes[r]));
    this.passifRows = passifRefs.filter((r) => postes[r]).map((r) => this.toPoste(r, postes[r]));
    this.totalActif = n(res.totalActif);
    this.totalPassif = n(res.totalPassif);
    this.isEquilibre = res.equilibre === true || Math.abs(this.totalActif - this.totalPassif) <= 1;
  }
  toPoste(ref, p) {
    const type = p.type || "";
    return {
      ref,
      label: p.label || "",
      compte: p.compte || "",
      brutN: n(p.brut?.n),
      amortN: n(p.amort?.n),
      netN: n(p.net?.n),
      netN1: this.comparisonEnabled ? n(p.net?.n_1) : 0,
      isTotal: type === "total",
      isGrandTotal: type === "grand_total",
      isEmpty: false
    };
  }
  // L'actif compte un poste de plus que le passif (29 vs 28 réfs OHADA) : un
  // appariement ligne à ligne par index décale donc BZ_ACTIF et BZ_PASSIF d'une
  // ligne l'un par rapport à l'autre. On sort ces deux postes du reste pour les
  // recombiner explicitement sur une seule et même ligne finale (voir template).
  get actifBody() {
    return this.actifRows.filter((r) => r.ref !== "BZ_ACTIF");
  }
  get passifBody() {
    return this.passifRows.filter((r) => r.ref !== "BZ_PASSIF");
  }
  get actifFinal() {
    return this.actifRows.find((r) => r.ref === "BZ_ACTIF") ?? this.emptyRow;
  }
  get passifFinal() {
    return this.passifRows.find((r) => r.ref === "BZ_PASSIF") ?? this.emptyRow;
  }
  get rowIndices() {
    const max = Math.max(this.actifBody.length, this.passifBody.length);
    return Array.from({ length: max }, (_, i) => i);
  }
  print() {
    window.print();
  }
  exportPdf() {
    this.pdfExport.exportBilan(this.actifRows.map((r) => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })), this.passifRows.map((r) => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })), this.totalActif, this.totalPassif, this.dateTo, this.authService.getActiveCompany()?.name);
  }
  exportExcel() {
    this.excelExport.exportBilan(this.actifRows.map((r) => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })), this.passifRows.map((r) => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })), this.totalActif, this.totalPassif, this.dateTo);
  }
  static {
    this.\u0275fac = function BalanceSheetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BalanceSheetComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BalanceSheetComponent, selectors: [["app-balance-sheet"]], decls: 45, vars: 11, consts: [[1, "no-print", 2, "text-align", "center", "padding", "60px"], [1, "page-container", "report-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [2, "display", "flex", "gap", "8px"], [1, "report-header", "no-print"], [1, "filters-bar", 2, "margin-bottom", "0"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "monthly"], ["value", "quarterly"], ["value", "yearly"], ["value", "custom"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-group", "checkbox-group"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], [1, "alert-error", "mb-3", "no-print"], [1, "spinner"], [1, "btn", "btn-outline", "btn-pdf", 3, "click"], [1, "btn", "btn-outline", "btn-excel", 3, "click"], [1, "bilan-print-header"], [1, "bilan-subtitle"], [1, "bilan-printed"], [1, "bilan-table-wrap"], [1, "bilan-full-table"], [1, "bilan-thead-main"], [2, "width", "4%"], [2, "width", "15%"], [1, "text-center", "fs-xs", 2, "width", "7%"], [1, "text-right", 2, "width", "7%"], [1, "text-right", 2, "width", "8%"], [1, "passif-start", "text-center", 2, "width", "4%"], [2, "width", "16%"], [1, "text-right", 2, "width", "9%"], [1, "bilan-row-finaltotal"], [1, "bilan-ref", "mono"], [1, "text-center", "fs-xs", "text-muted"], [1, "text-right", "mono"], [1, "text-right", "mono", "fw-bold"], [1, "passif-start", "bilan-ref", "mono"], [1, "text-right", "mono", 3, "bilan-td-total", "bilan-td-grandtotal"]], template: function BalanceSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BalanceSheetComponent_Conditional_0_Template, 2, 0, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Bilan OHADA ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, BalanceSheetComponent_Conditional_7_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label");
        \u0275\u0275text(12, "Type de p\xE9riode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.periodType, $event) || (ctx.periodType = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BalanceSheetComponent_Template_select_ngModelChange_13_listener() {
          return ctx.onPeriodTypeChange();
        });
        \u0275\u0275elementStart(14, "option", 10);
        \u0275\u0275text(15, "Mensuel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 11);
        \u0275\u0275text(17, "Trimestriel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 12);
        \u0275\u0275text(19, "Annuel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 13);
        \u0275\u0275text(21, "Personnalis\xE9");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8)(23, "label");
        \u0275\u0275text(24, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 8)(27, "label");
        \u0275\u0275text(28, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 15)(31, "label")(32, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.comparisonEnabled, $event) || (ctx.comparisonEnabled = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " Comparaison N-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "label")(35, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.includeUnposted, $event) || (ctx.includeUnposted = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " Inclure non valid\xE9es ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 17)(38, "button", 18);
        \u0275\u0275listener("click", function BalanceSheetComponent_Template_button_click_38_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(39, BalanceSheetComponent_Conditional_39_Template, 1, 0, "span", 19);
        \u0275\u0275elementStart(40, "span", 4);
        \u0275\u0275text(41, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " G\xE9n\xE9rer ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(43, BalanceSheetComponent_Conditional_43_Template, 4, 1, "div", 20);
        \u0275\u0275conditionalCreate(44, BalanceSheetComponent_Conditional_44_Template, 68, 41);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading ? 0 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.generated ? 7 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.periodType);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.comparisonEnabled);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.includeUnposted);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 39 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMsg ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated ? 44 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.fs-xs[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.bilan-print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--border);\n}\n.bilan-print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.bilan-print-header[_ngcontent-%COMP%]   .bilan-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.bilan-print-header[_ngcontent-%COMP%]   .bilan-printed[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.bilan-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.bilan-full-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.bilan-full-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.bilan-full-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.bilan-full-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .bilan-thead-main[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 10px;\n  text-align: center;\n  padding: 6px;\n}\n.bilan-full-table[_ngcontent-%COMP%] {\n}\n.bilan-full-table[_ngcontent-%COMP%]   .passif-start[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--primary) !important;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--bg-elevated);\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f5f0f7;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-td-total[_ngcontent-%COMP%] {\n  background-color: var(--bg-elevated) !important;\n  font-weight: 700;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-td-grandtotal[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--primary);\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-ref[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  color: var(--primary);\n  font-size: 10px;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-section-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary);\n  background-color: var(--bg-elevated);\n  font-style: normal;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-total-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n  font-style: italic;\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n}\n.bilan-full-table[_ngcontent-%COMP%]   tbody.bilan-row-finaltotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bilan-row-finaltotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: var(--success-bg) !important;\n  font-weight: 700;\n  border-top: 2px solid var(--text-primary);\n  border-bottom: 2px solid var(--text-primary);\n  font-size: 11px;\n}\n.bilan-equilibre[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.bilan-equilibre[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.bilan-equilibre.ok[_ngcontent-%COMP%] {\n  background-color: var(--success-bg);\n  border: 1px solid #c3e6cb;\n  color: var(--success);\n}\n.bilan-equilibre.ok[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.bilan-equilibre.warn[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border: 1px solid #ffeeba;\n  color: var(--warning);\n}\n.bilan-equilibre.warn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n@page {\n  size: landscape;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .bilan-print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .bilan-full-table[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .bilan-full-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 2px 4px;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .bilan-thead-main[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   .passif-start[_ngcontent-%COMP%] {\n    border-left: 3px solid var(--primary) !important;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .bilan-td-total[_ngcontent-%COMP%] {\n    background-color: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.bilan-row-finaltotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: var(--success-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.ok[_ngcontent-%COMP%] {\n    background-color: var(--success-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.warn[_ngcontent-%COMP%] {\n    background-color: #fff3cd !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=balance-sheet.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BalanceSheetComponent, [{
    type: Component,
    args: [{ selector: "app-balance-sheet", standalone: true, imports: [CommonModule, FormsModule], template: `@if (loading) {
  <div class="no-print" style="text-align:center;padding:60px"><div class="spinner"></div></div>
}

<div class="page-container report-container">

  <div class="page-header no-print">
    <h1 class="page-title">
      <span class="material-icons">account_balance</span>
      Bilan OHADA
    </h1>
    @if (generated) {
      <div style="display:flex;gap:8px">
        <button class="btn btn-outline btn-pdf" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> Exporter PDF
        </button>
        <button class="btn btn-outline btn-excel" (click)="exportExcel()">
          <span class="material-icons">table_view</span> Exporter Excel
        </button>
      </div>
    }
  </div>

  <div class="report-header no-print">
    <div class="filters-bar" style="margin-bottom:0">
      <div class="filter-group">
        <label>Type de p\xE9riode</label>
        <select class="form-control" [(ngModel)]="periodType" (ngModelChange)="onPeriodTypeChange()">
          <option value="monthly">Mensuel</option>
          <option value="quarterly">Trimestriel</option>
          <option value="yearly">Annuel</option>
          <option value="custom">Personnalis\xE9</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Du</label>
        <input type="date" class="form-control" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>Au</label>
        <input type="date" class="form-control" [(ngModel)]="dateTo">
      </div>
      <div class="filter-group checkbox-group">
        <label>
          <input type="checkbox" [(ngModel)]="comparisonEnabled">
          Comparaison N-1
        </label>
        <label>
          <input type="checkbox" [(ngModel)]="includeUnposted">
          Inclure non valid\xE9es
        </label>
      </div>
      <div class="filter-actions">
        <button class="btn btn-primary" (click)="generate()" [disabled]="loading">
          @if (loading) { <span class="spinner-sm"></span> }
          <span class="material-icons">play_arrow</span> G\xE9n\xE9rer
        </button>
      </div>
    </div>
  </div>

  @if (errorMsg) {
    <div class="alert-error mb-3 no-print">
      <span class="material-icons">error_outline</span>{{ errorMsg }}
    </div>
  }

  @if (generated) {

    <div class="bilan-print-header">
      <h2>BILAN AU {{ dateTo | date:'dd/MM/yyyy' }}</h2>
      <div class="bilan-subtitle">SYSCOHADA R\xC9VIS\xC9 \u2014 du {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</div>
      <div class="bilan-printed">Imprim\xE9 le {{ today | date:'dd/MM/yyyy HH:mm' }}</div>
    </div>

    <div class="bilan-table-wrap">
      <table class="bilan-full-table">
        <thead>
          <tr class="bilan-thead-main">
            <th style="width:4%">REF</th>
            <th style="width:15%">ACTIF</th>
            <th class="text-center fs-xs" style="width:7%">Cpte</th>
            <th class="text-right" style="width:7%">BRUT N</th>
            <th class="text-right" style="width:7%">AMORT.</th>
            <th class="text-right" style="width:8%">NET N</th>
            @if (comparisonEnabled) {
              <th class="text-right" style="width:8%">NET N-1</th>
            }
            <th class="passif-start text-center" style="width:4%">REF</th>
            <th style="width:16%">PASSIF</th>
            <th class="text-center fs-xs" style="width:7%">Cpte</th>
            @if (comparisonEnabled) {
              <th class="text-right" style="width:8%">NET N-1</th>
            }
            <th class="text-right" style="width:9%">NET N</th>
          </tr>
        </thead>
        <tbody>
          @for (i of rowIndices; track i) {
@let actif = actifBody.at(i) ?? emptyRow;
@let passif = passifBody.at(i) ?? emptyRow;
            <tr>
              <td class="bilan-ref mono" [class.bilan-td-total]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-grandtotal]="actif.isGrandTotal">{{ (!actif.isEmpty && !actif.isTotal) ? actif.ref : '' }}</td>
              <td [class.bilan-section-label]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-total]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-grandtotal]="actif.isGrandTotal">{{ actif.label }}</td>
              <td class="text-center fs-xs text-muted" [class.bilan-td-total]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-grandtotal]="actif.isGrandTotal">{{ actif.compte }}</td>
              <td class="text-right mono" [class.bilan-td-total]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-grandtotal]="actif.isGrandTotal">
                @if (!actif.isEmpty && actif.brutN !== 0) { {{ actif.brutN | number:'1.0-0' }} }
              </td>
              <td class="text-right mono" [class.bilan-td-total]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-grandtotal]="actif.isGrandTotal">
                @if (!actif.isEmpty && actif.amortN !== 0) { {{ actif.amortN | number:'1.0-0' }} }
              </td>
              <td class="text-right mono fw-bold" [class.bilan-td-total]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-grandtotal]="actif.isGrandTotal">
                @if (!actif.isEmpty) {
                  {{ actif.netN !== 0 || actif.isGrandTotal ? (actif.netN | number:'1.0-0') : '' }}
                }
              </td>
              @if (comparisonEnabled) {
                <td class="text-right mono" [class.bilan-td-total]="actif.isTotal || actif.isGrandTotal" [class.bilan-td-grandtotal]="actif.isGrandTotal">
                  @if (!actif.isEmpty && actif.netN1 !== 0) { {{ actif.netN1 | number:'1.0-0' }} }
                </td>
              }
              <td class="passif-start bilan-ref mono" [class.bilan-td-total]="passif.isTotal || passif.isGrandTotal" [class.bilan-td-grandtotal]="passif.isGrandTotal">{{ (!passif.isEmpty && !passif.isTotal) ? passif.ref : '' }}</td>
              <td [class.bilan-section-label]="passif.isTotal || passif.isGrandTotal" [class.bilan-td-total]="passif.isTotal || passif.isGrandTotal" [class.bilan-td-grandtotal]="passif.isGrandTotal">{{ passif.label }}</td>
              <td class="text-center fs-xs text-muted" [class.bilan-td-total]="passif.isTotal || passif.isGrandTotal" [class.bilan-td-grandtotal]="passif.isGrandTotal">{{ passif.compte }}</td>
              @if (comparisonEnabled) {
                <td class="text-right mono" [class.bilan-td-total]="passif.isTotal || passif.isGrandTotal" [class.bilan-td-grandtotal]="passif.isGrandTotal">
                  @if (!passif.isEmpty && passif.netN1 !== 0) { {{ passif.netN1 | number:'1.0-0' }} }
                </td>
              }
              <td class="text-right mono fw-bold" [class.bilan-td-total]="passif.isTotal || passif.isGrandTotal" [class.bilan-td-grandtotal]="passif.isGrandTotal">
                @if (!passif.isEmpty) {
                  {{ passif.netN !== 0 || passif.isGrandTotal ? (passif.netN | number:'1.0-0') : '' }}
                }
              </td>
            </tr>
          }
          <!-- TOTAL G\xC9N\xC9RAL : BZ_ACTIF et BZ_PASSIF recombin\xE9s explicitement sur
               une seule ligne (l'actif a un poste de plus que le passif \u2014 un
               appariement par index les aurait mis sur deux lignes distinctes). -->
          <tr class="bilan-row-finaltotal">
            <td class="bilan-ref mono">{{ actifFinal.ref }}</td>
            <td>{{ actifFinal.label }}</td>
            <td class="text-center fs-xs text-muted">{{ actifFinal.compte }}</td>
            <td class="text-right mono">{{ actifFinal.brutN !== 0 ? (actifFinal.brutN | number:'1.0-0') : '' }}</td>
            <td class="text-right mono"></td>
            <td class="text-right mono fw-bold">{{ actifFinal.netN | number:'1.0-0' }}</td>
            @if (comparisonEnabled) {
              <td class="text-right mono">{{ actifFinal.netN1 !== 0 ? (actifFinal.netN1 | number:'1.0-0') : '' }}</td>
            }
            <td class="passif-start bilan-ref mono">{{ passifFinal.ref }}</td>
            <td>{{ passifFinal.label }}</td>
            <td class="text-center fs-xs text-muted">{{ passifFinal.compte }}</td>
            @if (comparisonEnabled) {
              <td class="text-right mono">{{ passifFinal.netN1 !== 0 ? (passifFinal.netN1 | number:'1.0-0') : '' }}</td>
            }
            <td class="text-right mono fw-bold">{{ passifFinal.netN | number:'1.0-0' }}</td>
          </tr>
        </tbody>
      </table>

      <div [class]="isEquilibre ? 'bilan-equilibre ok' : 'bilan-equilibre warn'">
        @if (isEquilibre) {
          <span class="material-icons">check_circle</span>
          <strong>\u2713 BILAN \xC9QUILIBR\xC9</strong> \u2014 Total Actif = Total Passif = {{ totalActif | number:'1.0-0' }} FCFA
        } @else {
          <span class="material-icons">warning</span>
          <strong>\u26A0 BILAN D\xC9S\xC9QUILIBR\xC9</strong> \u2014 Diff\xE9rence = {{ (totalActif - totalPassif) | number:'1.0-0' }} FCFA
        }
      </div>
    </div>
  }
</div>

`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/accounting/components/reports/balance-sheet/balance-sheet.component.scss */\n.mono {\n  font-family: "Courier New", monospace;\n}\n.fw-bold {\n  font-weight: 700;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.fs-xs {\n  font-size: 10px;\n}\n.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center {\n  text-align: center;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.bilan-print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--border);\n}\n.bilan-print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.bilan-print-header .bilan-subtitle {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.bilan-print-header .bilan-printed {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.bilan-table-wrap {\n  overflow-x: auto;\n}\n.bilan-full-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.bilan-full-table th,\n.bilan-full-table td {\n  padding: 4px 6px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.bilan-full-table thead .bilan-thead-main th {\n  background-color: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 10px;\n  text-align: center;\n  padding: 6px;\n}\n.bilan-full-table {\n}\n.bilan-full-table .passif-start {\n  border-left: 3px solid var(--primary) !important;\n}\n.bilan-full-table tbody tr:nth-child(even) {\n  background-color: var(--bg-elevated);\n}\n.bilan-full-table tbody tr:hover {\n  background-color: #f5f0f7;\n}\n.bilan-full-table tbody {\n}\n.bilan-full-table tbody .bilan-td-total {\n  background-color: var(--bg-elevated) !important;\n  font-weight: 700;\n}\n.bilan-full-table tbody .bilan-td-grandtotal {\n  border-top: 1px solid var(--primary);\n}\n.bilan-full-table tbody .bilan-ref {\n  text-align: center;\n  font-weight: 700;\n  color: var(--primary);\n  font-size: 10px;\n}\n.bilan-full-table tbody .bilan-section-label {\n  font-weight: 700;\n  color: var(--primary);\n  background-color: var(--bg-elevated);\n  font-style: normal;\n}\n.bilan-full-table tbody .bilan-total-label {\n  font-weight: 700;\n  color: var(--text-primary);\n  font-style: italic;\n}\n.bilan-full-table tbody {\n}\n.bilan-full-table tbody.bilan-row-finaltotal td,\n.bilan-full-table tbody tr.bilan-row-finaltotal td {\n  background-color: var(--success-bg) !important;\n  font-weight: 700;\n  border-top: 2px solid var(--text-primary);\n  border-bottom: 2px solid var(--text-primary);\n  font-size: 11px;\n}\n.bilan-equilibre {\n  margin-top: 10px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.bilan-equilibre .material-icons {\n  font-size: 20px;\n}\n.bilan-equilibre.ok {\n  background-color: var(--success-bg);\n  border: 1px solid #c3e6cb;\n  color: var(--success);\n}\n.bilan-equilibre.ok .material-icons {\n  color: #28a745;\n}\n.bilan-equilibre.warn {\n  background-color: #fff3cd;\n  border: 1px solid #ffeeba;\n  color: var(--warning);\n}\n.bilan-equilibre.warn .material-icons {\n  color: #ffc107;\n}\n@page {\n  size: landscape;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .bilan-print-header {\n    display: block !important;\n  }\n  .bilan-full-table {\n    font-size: 8px;\n  }\n  .bilan-full-table th,\n  .bilan-full-table td {\n    padding: 2px 4px;\n  }\n  .bilan-full-table thead .bilan-thead-main th {\n    background-color: var(--primary) !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table .passif-start {\n    border-left: 3px solid var(--primary) !important;\n  }\n  .bilan-full-table tbody .bilan-td-total {\n    background-color: var(--bg-elevated) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-full-table tbody tr.bilan-row-finaltotal td {\n    background-color: var(--success-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.ok {\n    background-color: var(--success-bg) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .bilan-equilibre.warn {\n    background-color: #fff3cd !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=balance-sheet.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BalanceSheetComponent, { className: "BalanceSheetComponent", filePath: "app/modules/accounting/components/reports/balance-sheet/balance-sheet.component.ts", lineNumber: 33 });
})();
export {
  BalanceSheetComponent
};
//# sourceMappingURL=chunk-R3VNQF2C.js.map
