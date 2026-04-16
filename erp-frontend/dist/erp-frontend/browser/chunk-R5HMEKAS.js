import {
  SalesService
} from "./chunk-C6CRDXMM.js";
import {
  Router
} from "./chunk-K3VCSIQL.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FU5PLMG6.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  forkJoin,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/sales/components/reports/sales-reports.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
function SalesReportsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SalesReportsComponent_Conditional_7_Conditional_62_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    \u0275\u0275property("value", y_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r4);
  }
}
function SalesReportsComponent_Conditional_7_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 39);
    \u0275\u0275listener("ngModelChange", function SalesReportsComponent_Conditional_7_Conditional_62_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setYear($event));
    });
    \u0275\u0275repeaterCreate(1, SalesReportsComponent_Conditional_7_Conditional_62_For_2_Template, 2, 2, "option", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.selectedYear);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.years);
  }
}
function SalesReportsComponent_Conditional_7_For_66_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, p_r5.caTTC, "1.0-0"));
  }
}
function SalesReportsComponent_Conditional_7_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 41);
    \u0275\u0275element(2, "div", 42);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275element(4, "div", 43);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SalesReportsComponent_Conditional_7_For_66_Conditional_8_Template, 3, 4, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", p_r5.encaisse / ctx_r1.getMaxCA() * 160 + "px");
    \u0275\u0275property("title", "Encaiss\xE9: " + \u0275\u0275pipeBind2(3, 8, p_r5.encaisse, "1.0-0") + " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", p_r5.caTTC / ctx_r1.getMaxCA() * 160 + "px");
    \u0275\u0275property("title", "CA TTC: " + \u0275\u0275pipeBind2(5, 11, p_r5.caTTC, "1.0-0") + " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r5.caTTC > 0 ? 8 : -1);
  }
}
function SalesReportsComponent_Conditional_7_For_91_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("full", p_r6.encaisse >= p_r6.caTTC);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, p_r6.encaisse / p_r6.caTTC * 100, "1.0-0"), "% ");
  }
}
function SalesReportsComponent_Conditional_7_For_91_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SalesReportsComponent_Conditional_7_For_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 47);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 48);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 49);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 30);
    \u0275\u0275conditionalCreate(15, SalesReportsComponent_Conditional_7_For_91_Conditional_15_Template, 3, 6, "span", 50)(16, SalesReportsComponent_Conditional_7_For_91_Conditional_16_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275classProp("row-empty", p_r6.caTTC === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.nbFactures);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, p_r6.caHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 11, p_r6.caTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 14, p_r6.encaisse, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r6.caTTC > 0 ? 15 : 16);
  }
}
function SalesReportsComponent_Conditional_7_For_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 53);
    \u0275\u0275elementStart(2, "div", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275element(7, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.count);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", s_r7.color)("width", s_r7.count / (ctx_r1.invoices.length || 1) * 100 + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, s_r7.amount, "1.0-0"));
  }
}
function SalesReportsComponent_Conditional_7_For_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 53);
    \u0275\u0275elementStart(2, "div", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275element(7, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275text(9, "\u2014");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.count);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", s_r8.color)("width", s_r8.count / (ctx_r1.orders.length || 1) * 100 + "%");
  }
}
function SalesReportsComponent_Conditional_7_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p");
    \u0275\u0275text(2, "Aucune donn\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function SalesReportsComponent_Conditional_7_Conditional_108_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275elementStart(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 1, c_r9.du, "1.0-0"), " d\xFB");
  }
}
function SalesReportsComponent_Conditional_7_Conditional_108_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275element(7, "div", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66)(9, "div", 67);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 68)(13, "span", 69);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, SalesReportsComponent_Conditional_7_Conditional_108_For_2_Conditional_16_Template, 4, 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const \u0275$index_285_r10 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", \u0275$index_285_r10 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r9.caTTC / ctx_r1.getMaxClientCA() * 100 + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 7, c_r9.caTTC, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 10, c_r9.encaisse, "1.0-0"), " encaiss\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r9.du > 0 ? 16 : -1);
  }
}
function SalesReportsComponent_Conditional_7_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, SalesReportsComponent_Conditional_7_Conditional_108_For_2_Template, 17, 13, "div", 60, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.clientStats);
  }
}
function SalesReportsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span", 3);
    \u0275\u0275text(4, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11);
    \u0275\u0275text(10, "CA Total TTC (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 12)(13, "span", 3);
    \u0275\u0275text(14, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "div", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275text(20, "Encaiss\xE9 (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 7)(22, "div", 13)(23, "span", 3);
    \u0275\u0275text(24, "pending_actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 9)(26, "div", 10);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 11);
    \u0275\u0275text(30, "Reste d\xFB (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 7)(32, "div", 14)(33, "span", 3);
    \u0275\u0275text(34, "undo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 9)(36, "div", 10);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11);
    \u0275\u0275text(40, "Total avoirs valid\xE9s (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 7)(42, "div", 15)(43, "span", 3);
    \u0275\u0275text(44, "percent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 9)(46, "div", 10);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 11);
    \u0275\u0275text(49, "Taux d'encaissement");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 16)(51, "div", 17)(52, "span");
    \u0275\u0275text(53, "Chiffre d'affaires par p\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 18)(55, "div", 19)(56, "button", 20);
    \u0275\u0275listener("click", function SalesReportsComponent_Conditional_7_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPeriod("month"));
    });
    \u0275\u0275text(57, "Mois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 20);
    \u0275\u0275listener("click", function SalesReportsComponent_Conditional_7_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPeriod("quarter"));
    });
    \u0275\u0275text(59, "Trimestre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 20);
    \u0275\u0275listener("click", function SalesReportsComponent_Conditional_7_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPeriod("year"));
    });
    \u0275\u0275text(61, "Annuel");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(62, SalesReportsComponent_Conditional_7_Conditional_62_Template, 3, 1, "select", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 22)(64, "div", 23);
    \u0275\u0275repeaterCreate(65, SalesReportsComponent_Conditional_7_For_66_Template, 9, 14, "div", 24, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 25)(68, "span", 26);
    \u0275\u0275element(69, "span", 27);
    \u0275\u0275text(70, "CA TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 26);
    \u0275\u0275element(72, "span", 28);
    \u0275\u0275text(73, "Encaiss\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "table", 29)(75, "thead")(76, "tr")(77, "th");
    \u0275\u0275text(78, "P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th", 30);
    \u0275\u0275text(80, "Nb factures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th", 30);
    \u0275\u0275text(82, "CA HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th", 30);
    \u0275\u0275text(84, "CA TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th", 30);
    \u0275\u0275text(86, "Encaiss\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th", 30);
    \u0275\u0275text(88, "Taux");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "tbody");
    \u0275\u0275repeaterCreate(90, SalesReportsComponent_Conditional_7_For_91_Template, 17, 17, "tr", 31, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 32)(93, "div", 33)(94, "div", 17);
    \u0275\u0275text(95, "Factures par statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 34);
    \u0275\u0275repeaterCreate(97, SalesReportsComponent_Conditional_7_For_98_Template, 11, 12, "div", 35, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 36);
    \u0275\u0275text(100, "Bons de commande par statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 34);
    \u0275\u0275repeaterCreate(102, SalesReportsComponent_Conditional_7_For_103_Template, 10, 8, "div", 35, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 33)(105, "div", 17);
    \u0275\u0275text(106, "Top 10 clients (CA TTC)");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(107, SalesReportsComponent_Conditional_7_Conditional_107_Template, 3, 0, "div", 37)(108, SalesReportsComponent_Conditional_7_Conditional_108_Template, 3, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 13, ctx_r1.totalCA, "1.0-0"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 16, ctx_r1.totalEncaisse, "1.0-0"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 19, ctx_r1.totalDu, "1.0-0"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 22, ctx_r1.totalAvoirs, "1.0-0"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxEncaissement, "%");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("active", ctx_r1.periodMode === "month");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.periodMode === "quarter");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.periodMode === "year");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.periodMode !== "year" ? 62 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.periodStats);
    \u0275\u0275advance(25);
    \u0275\u0275repeater(ctx_r1.periodStats);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.invoicesByState);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.ordersByState);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.clientStats.length === 0 ? 107 : 108);
  }
}
var SalesReportsComponent = class _SalesReportsComponent {
  // Totals
  get totalCA() {
    return this.invoicesByState.reduce((s, r) => s + r.amount, 0);
  }
  get totalEncaisse() {
    return this.invoices.filter((i) => i.state === "posted" || i.state === "paid").reduce((s, i) => s + (i.montantPaye || 0), 0);
  }
  get totalDu() {
    return this.invoices.filter((i) => i.state === "posted" || i.state === "paid").reduce((s, i) => s + (i.montantDu || 0), 0);
  }
  get totalAvoirs() {
    return this.avoirs.filter((a) => a.state === "posted").reduce((s, a) => s + (a.totalTTC || 0), 0);
  }
  get tauxEncaissement() {
    const ca = this.invoices.filter((i) => i.state === "posted" || i.state === "paid").reduce((s, i) => s + (i.totalTTC || 0), 0);
    if (ca === 0)
      return 0;
    return Math.round(this.totalEncaisse / ca * 100);
  }
  constructor(salesService, authService, router) {
    this.salesService = salesService;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.orders = [];
    this.invoices = [];
    this.avoirs = [];
    this.periodMode = "month";
    this.selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.years = [];
    this.periodStats = [];
    this.clientStats = [];
    this.invoicesByState = [];
    this.ordersByState = [];
  }
  ngOnInit() {
    const cur = (/* @__PURE__ */ new Date()).getFullYear();
    for (let y = cur; y >= cur - 4; y--)
      this.years.push(y);
    this.loadData();
  }
  loadData() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      orders: this.salesService.getOrders(cid),
      invoices: this.salesService.getInvoices(cid),
      avoirs: this.salesService.getAvoirs(cid)
    }).subscribe({
      next: ({ orders, invoices, avoirs }) => {
        this.orders = orders;
        this.invoices = invoices;
        this.avoirs = avoirs;
        this.loading = false;
        this.compute();
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  compute() {
    this.computePeriodStats();
    this.computeClientStats();
    this.computeInvoicesByState();
    this.computeOrdersByState();
  }
  computePeriodStats() {
    const postedInvoices = this.invoices.filter((i) => (i.state === "posted" || i.state === "paid") && i.date && new Date(i.date).getFullYear() === this.selectedYear);
    if (this.periodMode === "month") {
      const months = ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Jun", "Jul", "Ao\xFB", "Sep", "Oct", "Nov", "D\xE9c"];
      this.periodStats = months.map((label, idx) => {
        const inv = postedInvoices.filter((i) => new Date(i.date).getMonth() === idx);
        return {
          label,
          caHT: inv.reduce((s, i) => s + (i.totalHT || 0), 0),
          caTTC: inv.reduce((s, i) => s + (i.totalTTC || 0), 0),
          nbFactures: inv.length,
          encaisse: inv.reduce((s, i) => s + (i.montantPaye || 0), 0)
        };
      });
    } else if (this.periodMode === "quarter") {
      const quarters = ["T1 (Jan-Mar)", "T2 (Avr-Jun)", "T3 (Jul-Sep)", "T4 (Oct-D\xE9c)"];
      this.periodStats = quarters.map((label, idx) => {
        const inv = postedInvoices.filter((i) => Math.floor(new Date(i.date).getMonth() / 3) === idx);
        return {
          label,
          caHT: inv.reduce((s, i) => s + (i.totalHT || 0), 0),
          caTTC: inv.reduce((s, i) => s + (i.totalTTC || 0), 0),
          nbFactures: inv.length,
          encaisse: inv.reduce((s, i) => s + (i.montantPaye || 0), 0)
        };
      });
    } else {
      const allYears = [...new Set(this.invoices.filter((i) => i.state === "posted" || i.state === "paid").map((i) => i.date ? new Date(i.date).getFullYear() : 0).filter((y) => y > 0))].sort();
      this.periodStats = allYears.map((year) => {
        const inv = this.invoices.filter((i) => (i.state === "posted" || i.state === "paid") && i.date && new Date(i.date).getFullYear() === year);
        return {
          label: String(year),
          caHT: inv.reduce((s, i) => s + (i.totalHT || 0), 0),
          caTTC: inv.reduce((s, i) => s + (i.totalTTC || 0), 0),
          nbFactures: inv.length,
          encaisse: inv.reduce((s, i) => s + (i.montantPaye || 0), 0)
        };
      });
    }
  }
  computeClientStats() {
    const map = /* @__PURE__ */ new Map();
    this.invoices.filter((i) => i.state === "posted" || i.state === "paid").forEach((i) => {
      const name = i.partnerName || "Inconnu";
      const existing = map.get(name) || { name, caTTC: 0, nbFactures: 0, encaisse: 0, du: 0 };
      existing.caTTC += i.totalTTC || 0;
      existing.nbFactures += 1;
      existing.encaisse += i.montantPaye || 0;
      existing.du += i.montantDu || 0;
      map.set(name, existing);
    });
    this.clientStats = Array.from(map.values()).sort((a, b) => b.caTTC - a.caTTC).slice(0, 10);
  }
  computeInvoicesByState() {
    const posted = this.invoices.filter((i) => i.state === "posted");
    const paid = this.invoices.filter((i) => i.state === "paid");
    const draft = this.invoices.filter((i) => i.state === "draft");
    const cancelled = this.invoices.filter((i) => i.state === "cancelled");
    this.invoicesByState = [
      { label: "Valid\xE9es", count: posted.length, amount: posted.reduce((s, i) => s + (i.totalTTC || 0), 0), color: "#017E84" },
      { label: "Pay\xE9es", count: paid.length, amount: paid.reduce((s, i) => s + (i.totalTTC || 0), 0), color: "#198754" },
      { label: "Brouillon", count: draft.length, amount: draft.reduce((s, i) => s + (i.totalTTC || 0), 0), color: "#6c757d" },
      { label: "Annul\xE9es", count: cancelled.length, amount: cancelled.reduce((s, i) => s + (i.totalTTC || 0), 0), color: "#dc3545" }
    ];
  }
  computeOrdersByState() {
    const states = [
      { key: "draft", label: "Brouillon", color: "#6c757d" },
      { key: "confirmed", label: "Confirm\xE9s", color: "#0d6efd" },
      { key: "invoiced", label: "Factur\xE9s", color: "#017E84" },
      { key: "cancelled", label: "Annul\xE9s", color: "#dc3545" }
    ];
    this.ordersByState = states.map((s) => ({
      label: s.label,
      count: this.orders.filter((o) => o.state === s.key).length,
      color: s.color
    }));
  }
  getMaxCA() {
    return Math.max(...this.periodStats.map((p) => p.caTTC), 1);
  }
  getMaxClientCA() {
    return Math.max(...this.clientStats.map((c) => c.caTTC), 1);
  }
  setPeriod(mode) {
    this.periodMode = mode;
    this.computePeriodStats();
  }
  setYear(year) {
    this.selectedYear = year;
    this.computePeriodStats();
  }
  static {
    this.\u0275fac = function SalesReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalesReportsComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesReportsComponent, selectors: [["app-sales-reports"]], decls: 8, vars: 1, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "loading-state"], [1, "material-icons", "spin"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-icon", "teal"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "green"], [1, "kpi-icon", "red"], [1, "kpi-icon", "purple"], [1, "kpi-icon", "blue"], [1, "card", "mb-16"], [1, "card-header"], [1, "card-header-actions"], [1, "period-tabs"], [1, "tab-btn", 3, "click"], [1, "year-select", 3, "ngModel"], [1, "chart-section"], [1, "bar-chart"], [1, "bar-col"], [1, "chart-legend"], [1, "legend-item"], [1, "dot", "teal"], [1, "dot", "green"], [1, "stats-table"], [1, "text-right"], [3, "row-empty"], [1, "two-col"], [1, "card"], [1, "state-list"], [1, "state-row"], [1, "card-header", 2, "border-top", "1px solid #f0f0f0", "margin-top", "8px"], [1, "empty-state"], [1, "client-list"], [1, "year-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "bar-wrap"], [1, "bar-encaisse", 3, "title"], [1, "bar-ca", 3, "title"], [1, "bar-label"], [1, "bar-value"], [1, "font-bold"], [1, "text-right", "font-mono"], [1, "text-right", "font-mono", "font-bold"], [1, "text-right", "font-mono", "text-success"], [1, "pct-badge", 3, "full"], [1, "text-muted"], [1, "pct-badge"], [1, "state-dot"], [1, "state-label"], [1, "state-count"], [1, "state-bar-wrap"], [1, "state-bar"], [1, "state-amount", "font-mono"], [1, "state-amount", "text-muted"], [1, "client-row"], [1, "client-rank"], [1, "client-info"], [1, "client-name"], [1, "client-bar-wrap"], [1, "client-bar"], [1, "client-stats"], [1, "client-ca"], [1, "client-sub"], [1, "text-success"], [1, "text-danger"]], template: function SalesReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "bar_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Statistiques de ventes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, SalesReportsComponent_Conditional_6_Template, 4, 0, "div", 4)(7, SalesReportsComponent_Conditional_7_Template, 109, 25);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading ? 6 : 7);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  min-width: 180px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.teal[_ngcontent-%COMP%] {\n  background: #017E84;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.green[_ngcontent-%COMP%] {\n  background: #198754;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.red[_ngcontent-%COMP%] {\n  background: #dc3545;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.purple[_ngcontent-%COMP%] {\n  background: #6f42c1;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.blue[_ngcontent-%COMP%] {\n  background: #0d6efd;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.period-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 12px;\n  font-family: "Roboto", sans-serif;\n  border: none;\n  background: white;\n  cursor: pointer;\n  color: #6c757d;\n}\n.period-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: #017E84;\n  color: white;\n}\n.period-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f0f0f0;\n}\n.year-select[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 12px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.year-select[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n}\n.chart-section[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 200px;\n  margin-bottom: 8px;\n}\n.bar-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  min-width: 0;\n}\n.bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n  height: 160px;\n  width: 100%;\n  justify-content: center;\n}\n.bar-ca[_ngcontent-%COMP%] {\n  width: 45%;\n  min-height: 2px;\n  background: #017E84;\n  border-radius: 3px 3px 0 0;\n  transition: height 0.3s;\n  cursor: pointer;\n}\n.bar-ca[_ngcontent-%COMP%]:hover {\n  background: #015f64;\n}\n.bar-encaisse[_ngcontent-%COMP%] {\n  width: 45%;\n  min-height: 2px;\n  background: #198754;\n  border-radius: 3px 3px 0 0;\n  transition: height 0.3s;\n  cursor: pointer;\n}\n.bar-encaisse[_ngcontent-%COMP%]:hover {\n  background: #146c43;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6c757d;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.bar-value[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #adb5bd;\n  font-family: monospace;\n  text-align: center;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  margin-top: 8px;\n}\n.chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.chart-legend[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n}\n.chart-legend[_ngcontent-%COMP%]   .dot.teal[_ngcontent-%COMP%] {\n  background: #017E84;\n}\n.chart-legend[_ngcontent-%COMP%]   .dot.green[_ngcontent-%COMP%] {\n  background: #198754;\n}\n.stats-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.stats-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.stats-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.stats-table[_ngcontent-%COMP%]   .row-empty[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.stats-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.state-list[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.state-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.state-row[_ngcontent-%COMP%]   .state-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.state-row[_ngcontent-%COMP%]   .state-label[_ngcontent-%COMP%] {\n  width: 90px;\n  font-size: 13px;\n  color: #495057;\n}\n.state-row[_ngcontent-%COMP%]   .state-count[_ngcontent-%COMP%] {\n  width: 30px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n  text-align: right;\n}\n.state-row[_ngcontent-%COMP%]   .state-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.state-row[_ngcontent-%COMP%]   .state-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.state-row[_ngcontent-%COMP%]   .state-amount[_ngcontent-%COMP%] {\n  width: 100px;\n  font-size: 12px;\n  color: #6c757d;\n  text-align: right;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.client-list[_ngcontent-%COMP%] {\n  padding: 0 18px 12px;\n}\n.client-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f5f5f5;\n}\n.client-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.client-rank[_ngcontent-%COMP%] {\n  width: 28px;\n  font-size: 12px;\n  color: #6c757d;\n  font-weight: 600;\n}\n.client-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.client-info[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.client-info[_ngcontent-%COMP%]   .client-bar-wrap[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #f0f0f0;\n  border-radius: 3px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.client-info[_ngcontent-%COMP%]   .client-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #017E84;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n.client-stats[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.client-stats[_ngcontent-%COMP%]   .client-ca[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n}\n.client-stats[_ngcontent-%COMP%]   .client-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #e9ecef;\n  color: #6c757d;\n}\n.pct-badge.full[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n/*# sourceMappingURL=sales-reports.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesReportsComponent, [{
    type: Component,
    args: [{ selector: "app-sales-reports", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">bar_chart</span>
      Statistiques de ventes
    </h1>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {

    <!-- KPI Row -->
    <div class="kpi-row">
      <div class="kpi-card">
        <div class="kpi-icon teal"><span class="material-icons">receipt_long</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ totalCA | number:'1.0-0' }}</div>
          <div class="kpi-label">CA Total TTC (FCFA)</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon green"><span class="material-icons">payments</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ totalEncaisse | number:'1.0-0' }}</div>
          <div class="kpi-label">Encaiss\xE9 (FCFA)</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon red"><span class="material-icons">pending_actions</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ totalDu | number:'1.0-0' }}</div>
          <div class="kpi-label">Reste d\xFB (FCFA)</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon purple"><span class="material-icons">undo</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ totalAvoirs | number:'1.0-0' }}</div>
          <div class="kpi-label">Total avoirs valid\xE9s (FCFA)</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon blue"><span class="material-icons">percent</span></div>
        <div class="kpi-body">
          <div class="kpi-value">{{ tauxEncaissement }}%</div>
          <div class="kpi-label">Taux d'encaissement</div>
        </div>
      </div>
    </div>

    <!-- CA par p\xE9riode -->
    <div class="card mb-16">
      <div class="card-header">
        <span>Chiffre d'affaires par p\xE9riode</span>
        <div class="card-header-actions">
          <div class="period-tabs">
            <button class="tab-btn" [class.active]="periodMode === 'month'" (click)="setPeriod('month')">Mois</button>
            <button class="tab-btn" [class.active]="periodMode === 'quarter'" (click)="setPeriod('quarter')">Trimestre</button>
            <button class="tab-btn" [class.active]="periodMode === 'year'" (click)="setPeriod('year')">Annuel</button>
          </div>
          @if (periodMode !== 'year') {
            <select class="year-select" [ngModel]="selectedYear" (ngModelChange)="setYear($event)">
              @for (y of years; track y) {
                <option [value]="y">{{ y }}</option>
              }
            </select>
          }
        </div>
      </div>
      <div class="chart-section">
        <div class="bar-chart">
          @for (p of periodStats; track p.label) {
            <div class="bar-col">
              <div class="bar-wrap">
                <div class="bar-encaisse" [style.height]="(p.encaisse / getMaxCA() * 160) + 'px'"
                     [title]="'Encaiss\xE9: ' + (p.encaisse | number:'1.0-0') + ' FCFA'"></div>
                <div class="bar-ca" [style.height]="(p.caTTC / getMaxCA() * 160) + 'px'"
                     [title]="'CA TTC: ' + (p.caTTC | number:'1.0-0') + ' FCFA'"></div>
              </div>
              <div class="bar-label">{{ p.label }}</div>
              @if (p.caTTC > 0) {
                <div class="bar-value">{{ p.caTTC | number:'1.0-0' }}</div>
              }
            </div>
          }
        </div>
        <div class="chart-legend">
          <span class="legend-item"><span class="dot teal"></span>CA TTC</span>
          <span class="legend-item"><span class="dot green"></span>Encaiss\xE9</span>
        </div>
      </div>

      <!-- Period table -->
      <table class="stats-table">
        <thead>
          <tr>
            <th>P\xE9riode</th>
            <th class="text-right">Nb factures</th>
            <th class="text-right">CA HT</th>
            <th class="text-right">CA TTC</th>
            <th class="text-right">Encaiss\xE9</th>
            <th class="text-right">Taux</th>
          </tr>
        </thead>
        <tbody>
          @for (p of periodStats; track p.label) {
            <tr [class.row-empty]="p.caTTC === 0">
              <td class="font-bold">{{ p.label }}</td>
              <td class="text-right">{{ p.nbFactures }}</td>
              <td class="text-right font-mono">{{ p.caHT | number:'1.0-0' }}</td>
              <td class="text-right font-mono font-bold">{{ p.caTTC | number:'1.0-0' }}</td>
              <td class="text-right font-mono text-success">{{ p.encaisse | number:'1.0-0' }}</td>
              <td class="text-right">
                @if (p.caTTC > 0) {
                  <span class="pct-badge" [class.full]="p.encaisse >= p.caTTC">
                    {{ (p.encaisse / p.caTTC * 100 | number:'1.0-0') }}%
                  </span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Bottom row: \xE9tats + top clients -->
    <div class="two-col">
      <!-- Factures par statut -->
      <div class="card">
        <div class="card-header">Factures par statut</div>
        <div class="state-list">
          @for (s of invoicesByState; track s.label) {
            <div class="state-row">
              <div class="state-dot" [style.background]="s.color"></div>
              <div class="state-label">{{ s.label }}</div>
              <div class="state-count">{{ s.count }}</div>
              <div class="state-bar-wrap">
                <div class="state-bar" [style.background]="s.color"
                     [style.width]="(s.count / (invoices.length || 1) * 100) + '%'"></div>
              </div>
              <div class="state-amount font-mono">{{ s.amount | number:'1.0-0' }}</div>
            </div>
          }
        </div>
        <div class="card-header" style="border-top: 1px solid #f0f0f0; margin-top: 8px;">Bons de commande par statut</div>
        <div class="state-list">
          @for (s of ordersByState; track s.label) {
            <div class="state-row">
              <div class="state-dot" [style.background]="s.color"></div>
              <div class="state-label">{{ s.label }}</div>
              <div class="state-count">{{ s.count }}</div>
              <div class="state-bar-wrap">
                <div class="state-bar" [style.background]="s.color"
                     [style.width]="(s.count / (orders.length || 1) * 100) + '%'"></div>
              </div>
              <div class="state-amount text-muted">\u2014</div>
            </div>
          }
        </div>
      </div>

      <!-- Top clients -->
      <div class="card">
        <div class="card-header">Top 10 clients (CA TTC)</div>
        @if (clientStats.length === 0) {
          <div class="empty-state"><p>Aucune donn\xE9e</p></div>
        } @else {
          <div class="client-list">
            @for (c of clientStats; track c.name; let i = $index) {
              <div class="client-row">
                <div class="client-rank">#{{ i + 1 }}</div>
                <div class="client-info">
                  <div class="client-name">{{ c.name }}</div>
                  <div class="client-bar-wrap">
                    <div class="client-bar" [style.width]="(c.caTTC / getMaxClientCA() * 100) + '%'"></div>
                  </div>
                </div>
                <div class="client-stats">
                  <div class="client-ca">{{ c.caTTC | number:'1.0-0' }}</div>
                  <div class="client-sub">
                    <span class="text-success">{{ c.encaisse | number:'1.0-0' }} encaiss\xE9</span>
                    @if (c.du > 0) { \xB7 <span class="text-danger">{{ c.du | number:'1.0-0' }} d\xFB</span> }
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/sales/components/reports/sales-reports.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #017E84;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  min-width: 180px;\n}\n.kpi-card .kpi-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-card .kpi-icon .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.kpi-card .kpi-icon.teal {\n  background: #017E84;\n}\n.kpi-card .kpi-icon.green {\n  background: #198754;\n}\n.kpi-card .kpi-icon.red {\n  background: #dc3545;\n}\n.kpi-card .kpi-icon.purple {\n  background: #6f42c1;\n}\n.kpi-card .kpi-icon.blue {\n  background: #0d6efd;\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n}\n.kpi-card .kpi-label {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card .card-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-tabs {\n  display: flex;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.period-tabs .tab-btn {\n  padding: 5px 12px;\n  font-size: 12px;\n  font-family: "Roboto", sans-serif;\n  border: none;\n  background: white;\n  cursor: pointer;\n  color: #6c757d;\n}\n.period-tabs .tab-btn.active {\n  background: #017E84;\n  color: white;\n}\n.period-tabs .tab-btn:hover:not(.active) {\n  background: #f0f0f0;\n}\n.year-select {\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 12px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.year-select:focus {\n  border-color: #017E84;\n}\n.chart-section {\n  padding: 16px 18px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 200px;\n  margin-bottom: 8px;\n}\n.bar-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  min-width: 0;\n}\n.bar-wrap {\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n  height: 160px;\n  width: 100%;\n  justify-content: center;\n}\n.bar-ca {\n  width: 45%;\n  min-height: 2px;\n  background: #017E84;\n  border-radius: 3px 3px 0 0;\n  transition: height 0.3s;\n  cursor: pointer;\n}\n.bar-ca:hover {\n  background: #015f64;\n}\n.bar-encaisse {\n  width: 45%;\n  min-height: 2px;\n  background: #198754;\n  border-radius: 3px 3px 0 0;\n  transition: height 0.3s;\n  cursor: pointer;\n}\n.bar-encaisse:hover {\n  background: #146c43;\n}\n.bar-label {\n  font-size: 10px;\n  color: #6c757d;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.bar-value {\n  font-size: 9px;\n  color: #adb5bd;\n  font-family: monospace;\n  text-align: center;\n}\n.chart-legend {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  margin-top: 8px;\n}\n.chart-legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.chart-legend .dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n}\n.chart-legend .dot.teal {\n  background: #017E84;\n}\n.chart-legend .dot.green {\n  background: #198754;\n}\n.stats-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.stats-table th {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.stats-table td {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.stats-table .row-empty td {\n  color: #adb5bd;\n}\n.stats-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.state-list {\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.state-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.state-row .state-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.state-row .state-label {\n  width: 90px;\n  font-size: 13px;\n  color: #495057;\n}\n.state-row .state-count {\n  width: 30px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n  text-align: right;\n}\n.state-row .state-bar-wrap {\n  flex: 1;\n  height: 8px;\n  background: #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.state-row .state-bar {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.state-row .state-amount {\n  width: 100px;\n  font-size: 12px;\n  color: #6c757d;\n  text-align: right;\n}\n.empty-state {\n  padding: 32px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.client-list {\n  padding: 0 18px 12px;\n}\n.client-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f5f5f5;\n}\n.client-row:last-child {\n  border-bottom: none;\n}\n.client-rank {\n  width: 28px;\n  font-size: 12px;\n  color: #6c757d;\n  font-weight: 600;\n}\n.client-info {\n  flex: 1;\n  min-width: 0;\n}\n.client-info .client-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.client-info .client-bar-wrap {\n  height: 5px;\n  background: #f0f0f0;\n  border-radius: 3px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.client-info .client-bar {\n  height: 100%;\n  background: #017E84;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n.client-stats {\n  text-align: right;\n}\n.client-stats .client-ca {\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n}\n.client-stats .client-sub {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-success {\n  color: #198754;\n}\n.text-danger {\n  color: #dc3545;\n}\n.pct-badge {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #e9ecef;\n  color: #6c757d;\n}\n.pct-badge.full {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n/*# sourceMappingURL=sales-reports.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesReportsComponent, { className: "SalesReportsComponent", filePath: "src/app/modules/sales/components/reports/sales-reports.component.ts", lineNumber: 32 });
})();
export {
  SalesReportsComponent
};
//# sourceMappingURL=chunk-R5HMEKAS.js.map
