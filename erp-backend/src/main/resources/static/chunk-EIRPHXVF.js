import {
  formatFCFA
} from "./chunk-TKYALNMA.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
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
  DecimalPipe,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/dashboard/sales-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.id;
function SalesDashboardComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 7);
  }
}
function SalesDashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, SalesDashboardComponent_Conditional_10_For_2_Template, 1, 0, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmtFull(ctx_r1.totalCreances));
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 37)(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Aucune cr\xE9ance en cours");
    \u0275\u0275domElementEnd()();
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2264 30 j ");
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", c_r3.oldestDays, " j ");
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", c_r3.oldestDays, " j \u26A0 ");
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 52)(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "div", 55)(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span");
    \u0275\u0275conditionalCreate(13, SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Conditional_13_Template, 1, 0)(14, SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Conditional_14_Template, 1, 1)(15, SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Conditional_15_Template, 1, 1);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("critical", c_r3.aging === "critical")("late", c_r3.aging === "late");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r3.nbFactures, " facture", c_r3.nbFactures > 1 ? "s" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(c_r3.totalDu), " FCFA");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("aging-badge aging-", c_r3.aging));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.aging === "current" ? 13 : c_r3.aging === "late" ? 14 : 15);
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, SalesDashboardComponent_Conditional_11_Conditional_106_For_2_Template, 16, 13, "div", 48, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.creances);
  }
}
function SalesDashboardComponent_Conditional_11_For_115_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const b_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(b_r4.amount), " FCFA");
  }
}
function SalesDashboardComponent_Conditional_11_For_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 41)(1, "div", 57);
    \u0275\u0275domElement(2, "span", 58);
    \u0275\u0275domElementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 60);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 61);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 62);
    \u0275\u0275domElement(10, "div", 63);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, SalesDashboardComponent_Conditional_11_For_115_Conditional_11_Template, 2, 1, "span", 64);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", b_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", b_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", b_r4.pct, " %");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r4.pct, "%")("background", b_r4.color);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r4.amount > 0 ? 11 : -1);
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_116_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(c_r5.du), " d\xFB");
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_116_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 68)(4, "div", 69);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 70);
    \u0275\u0275domElement(7, "div", 71);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 72)(9, "span", 73);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, SalesDashboardComponent_Conditional_11_Conditional_116_For_8_Conditional_11_Template, 2, 1, "span", 74);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const \u0275$index_289_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_289_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r5.pct, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(c_r5.caTTC), " FCFA");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.du > 0 ? 11 : -1);
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 42)(1, "div", 34)(2, "span", 35)(3, "span", 5);
    \u0275\u0275text(4, "workspace_premium");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(5, " Top 5 clients");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 65);
    \u0275\u0275repeaterCreate(7, SalesDashboardComponent_Conditional_11_Conditional_116_For_8_Template, 12, 6, "div", 66, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.topClients);
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 46);
    \u0275\u0275text(1, "Aucune facture");
    \u0275\u0275domElementEnd();
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_129_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 76);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_11_Conditional_129_For_15_Template_tr_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goInvoice(i_r8.id));
    });
    \u0275\u0275domElementStart(1, "td", 77);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 78);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 79);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 80);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, i_r8.totalTTC, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("du-pos", (i_r8.montantDu || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, i_r8.montantDu || 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge badge-" + i_r8.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(i_r8.state || ""));
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 47)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "N\xB0");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th", 75);
    \u0275\u0275text(8, "TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th", 75);
    \u0275\u0275text(10, "Reste");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SalesDashboardComponent_Conditional_11_Conditional_129_For_15_Template, 14, 15, "tr", null, _forTrack2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.recentInvoices);
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 46);
    \u0275\u0275text(1, "Aucun bon de commande");
    \u0275\u0275domElementEnd();
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_141_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 76);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_11_Conditional_141_For_15_Template_tr_click_0_listener() {
      const o_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goOrder(o_r10.id));
    });
    \u0275\u0275domElementStart(1, "td", 77);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 78);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 81);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 79);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r10.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, o_r10.date, "dd/MM/yy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, o_r10.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge badge-" + o_r10.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(o_r10.state || ""));
  }
}
function SalesDashboardComponent_Conditional_11_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 47)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "N\xB0");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th", 75);
    \u0275\u0275text(10, "TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SalesDashboardComponent_Conditional_11_Conditional_141_For_15_Template, 14, 13, "tr", null, _forTrack2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.recentOrders);
  }
}
function SalesDashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span", 5);
    \u0275\u0275text(4, "trending_up");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 11)(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 13);
    \u0275\u0275text(9, "FCFA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 14);
    \u0275\u0275text(11, "Chiffre d'affaires TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(14, "div", 16)(15, "div", 10)(16, "span", 5);
    \u0275\u0275text(17, "payments");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 11)(19, "span", 12);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "span", 13);
    \u0275\u0275text(22, "FCFA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span", 14);
    \u0275\u0275text(24, "Encaiss\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "span", 15);
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(27, "div", 17)(28, "div", 10)(29, "span", 5);
    \u0275\u0275text(30, "schedule");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "div", 11)(32, "span", 12);
    \u0275\u0275text(33);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "span", 13);
    \u0275\u0275text(35, "FCFA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "span", 14);
    \u0275\u0275text(37, "Reste \xE0 encaisser");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "span", 15);
    \u0275\u0275text(39);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(40, "div", 18);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_11_Template_div_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go("/sales/invoices"));
    });
    \u0275\u0275domElementStart(41, "div", 10)(42, "span", 5);
    \u0275\u0275text(43, "description");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "div", 11)(45, "span", 12);
    \u0275\u0275text(46);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span", 14);
    \u0275\u0275text(48, "Factures");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "span", 15);
    \u0275\u0275text(50);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(51, "span", 19);
    \u0275\u0275text(52, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(53, "div", 20)(54, "div", 10)(55, "span", 5);
    \u0275\u0275text(56, "donut_large");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(57, "div", 11)(58, "span", 12);
    \u0275\u0275text(59);
    \u0275\u0275domElementStart(60, "span", 21);
    \u0275\u0275text(61, "%");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(62, "span", 14);
    \u0275\u0275text(63, "Taux d'encaissement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(64, "div", 22);
    \u0275\u0275domElement(65, "div", 23);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(66, "div", 24)(67, "div", 25);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_11_Template_div_click_67_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go("/sales/orders"));
    });
    \u0275\u0275domElementStart(68, "span", 26);
    \u0275\u0275text(69, "receipt_long");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "div", 27)(71, "span", 28);
    \u0275\u0275text(72);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(73, "span", 29);
    \u0275\u0275text(74, "Bons de commande");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(75, "span", 30);
    \u0275\u0275text(76);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(77, "div", 25);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_11_Template_div_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go("/sales/avoirs"));
    });
    \u0275\u0275domElementStart(78, "span", 26);
    \u0275\u0275text(79, "undo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "div", 27)(81, "span", 28);
    \u0275\u0275text(82);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(83, "span", 29);
    \u0275\u0275text(84, "Avoirs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(85, "span", 30);
    \u0275\u0275text(86);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(87, "div", 31)(88, "span", 26);
    \u0275\u0275text(89, "people");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(90, "div", 27)(91, "span", 28);
    \u0275\u0275text(92);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(93, "span", 29);
    \u0275\u0275text(94, "Clients actifs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "span", 30);
    \u0275\u0275text(96, "avec facturation");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(97, "div", 32)(98, "div", 33)(99, "div", 34)(100, "span", 35)(101, "span", 5);
    \u0275\u0275text(102, "account_balance_wallet");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(103, " Cr\xE9ances clients ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(104, SalesDashboardComponent_Conditional_11_Conditional_104_Template, 2, 1, "span", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(105, SalesDashboardComponent_Conditional_11_Conditional_105_Template, 5, 0, "div", 37)(106, SalesDashboardComponent_Conditional_11_Conditional_106_Template, 3, 0, "div", 38);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(107, "div", 39)(108, "div", 34)(109, "span", 35)(110, "span", 5);
    \u0275\u0275text(111, "pie_chart");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(112, " R\xE9partition factures");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(113, "div", 40);
    \u0275\u0275repeaterCreate(114, SalesDashboardComponent_Conditional_11_For_115_Template, 12, 12, "div", 41, _forTrack0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(116, SalesDashboardComponent_Conditional_11_Conditional_116_Template, 9, 0, "div", 42);
    \u0275\u0275domElementStart(117, "div", 43)(118, "div", 44)(119, "div", 34)(120, "span", 35)(121, "span", 5);
    \u0275\u0275text(122, "description");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(123, " Derni\xE8res factures");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(124, "button", 45);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_11_Template_button_click_124_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go("/sales/invoices"));
    });
    \u0275\u0275text(125, "Voir tout ");
    \u0275\u0275domElementStart(126, "span", 5);
    \u0275\u0275text(127, "arrow_forward");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(128, SalesDashboardComponent_Conditional_11_Conditional_128_Template, 2, 0, "div", 46)(129, SalesDashboardComponent_Conditional_11_Conditional_129_Template, 16, 0, "table", 47);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(130, "div", 44)(131, "div", 34)(132, "span", 35)(133, "span", 5);
    \u0275\u0275text(134, "receipt_long");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(135, " Derniers bons de commande");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(136, "button", 45);
    \u0275\u0275domListener("click", function SalesDashboardComponent_Conditional_11_Template_button_click_136_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go("/sales/orders"));
    });
    \u0275\u0275text(137, "Voir tout ");
    \u0275\u0275domElementStart(138, "span", 5);
    \u0275\u0275text(139, "arrow_forward");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(140, SalesDashboardComponent_Conditional_11_Conditional_140_Template, 2, 0, "div", 46)(141, SalesDashboardComponent_Conditional_11_Conditional_141_Template, 16, 0, "table", 47);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.fmtM(ctx_r1.caTTC));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(ctx_r1.caHT), " FCFA HT");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.fmtM(ctx_r1.encaisse));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxEncaissement, " % du CA");
    \u0275\u0275advance();
    \u0275\u0275classProp("hero-orange", ctx_r1.resteAEncaisser > 0)("hero-gray", ctx_r1.resteAEncaisser === 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fmtM(ctx_r1.resteAEncaisser));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.nbFacturesPosted, " facture(s) non sold\xE9e(s)");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.nbFactures);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.nbFacturesPaid, " pay\xE9es \xB7 ", ctx_r1.nbFacturesPosted, " valid\xE9es");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.tauxEncaissement);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.tauxEncaissement, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.nbBCs);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.nbBCsConfirmed, " confirm\xE9s");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.nbAvoirs);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(ctx_r1.totalAvoirs), " FCFA \xE9mis");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.nbClients);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.nbClientsDebiteurs > 0 ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.creances.length === 0 ? 105 : 106);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.invoiceBreakdown);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.topClients.length > 0 ? 116 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.recentInvoices.length === 0 ? 128 : 129);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.recentOrders.length === 0 ? 140 : 141);
  }
}
var SalesDashboardComponent = class _SalesDashboardComponent {
  constructor(salesService, authService, router) {
    this.salesService = salesService;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.caTTC = 0;
    this.caHT = 0;
    this.encaisse = 0;
    this.resteAEncaisser = 0;
    this.tauxEncaissement = 0;
    this.totalAvoirs = 0;
    this.nbFactures = 0;
    this.nbFacturesDraft = 0;
    this.nbFacturesPosted = 0;
    this.nbFacturesPaid = 0;
    this.nbBCs = 0;
    this.nbBCsConfirmed = 0;
    this.nbAvoirs = 0;
    this.nbClients = 0;
    this.creances = [];
    this.totalCreances = 0;
    this.nbClientsDebiteurs = 0;
    this.topClients = [];
    this.recentInvoices = [];
    this.recentOrders = [];
    this.invoiceBreakdown = [];
  }
  ngOnInit() {
    this.loadDashboard();
  }
  loadDashboard() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      orders: this.salesService.getOrders(cid),
      invoices: this.salesService.getInvoices(cid),
      avoirs: this.salesService.getAvoirs(cid)
    }).subscribe({
      next: ({ orders, invoices, avoirs }) => {
        this.computeKpis(orders, invoices, avoirs);
        this.computeCreances(invoices);
        this.computeTopClients(invoices);
        this.computeBreakdown(invoices);
        this.recentInvoices = [...invoices].filter((i) => i.state !== "cancelled").sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 6);
        this.recentOrders = [...orders].filter((o) => o.state !== "cancelled").sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 6);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  computeKpis(orders, invoices, avoirs) {
    const active = invoices.filter((i) => i.state === "posted" || i.state === "paid");
    this.caTTC = active.reduce((s, i) => s + (i.totalTTC || 0), 0);
    this.caHT = active.reduce((s, i) => s + (i.totalHT || 0), 0);
    this.encaisse = active.reduce((s, i) => s + (i.montantPaye || 0), 0);
    this.resteAEncaisser = active.reduce((s, i) => s + (i.montantDu || 0), 0);
    this.tauxEncaissement = this.caTTC > 0 ? Math.round(this.encaisse / this.caTTC * 100) : 0;
    this.totalAvoirs = avoirs.filter((a) => a.state === "posted").reduce((s, a) => s + (a.totalTTC || 0), 0);
    this.nbFactures = invoices.length;
    this.nbFacturesDraft = invoices.filter((i) => i.state === "draft").length;
    this.nbFacturesPosted = invoices.filter((i) => i.state === "posted").length;
    this.nbFacturesPaid = invoices.filter((i) => i.state === "paid").length;
    this.nbBCs = orders.length;
    this.nbBCsConfirmed = orders.filter((o) => o.state === "confirmed").length;
    this.nbAvoirs = avoirs.length;
    this.nbClients = new Set(invoices.map((i) => i.partnerId)).size;
  }
  computeCreances(invoices) {
    const today = /* @__PURE__ */ new Date();
    const map = /* @__PURE__ */ new Map();
    invoices.filter((i) => i.state === "posted" && (i.montantDu || 0) > 0).forEach((i) => {
      const days = i.date ? Math.floor((today.getTime() - new Date(i.date).getTime()) / 864e5) : 0;
      const cur = map.get(i.partnerId) || { name: i.partnerName || "Inconnu", du: 0, nb: 0, oldest: 0 };
      cur.du += i.montantDu || 0;
      cur.nb += 1;
      cur.oldest = Math.max(cur.oldest, days);
      map.set(i.partnerId, cur);
    });
    this.creances = Array.from(map.values()).map((v) => ({
      name: v.name,
      totalDu: v.du,
      nbFactures: v.nb,
      oldestDays: v.oldest,
      aging: v.oldest > 60 ? "critical" : v.oldest > 30 ? "late" : "current"
    })).sort((a, b) => b.totalDu - a.totalDu);
    this.totalCreances = this.creances.reduce((s, c) => s + c.totalDu, 0);
    this.nbClientsDebiteurs = this.creances.length;
  }
  computeTopClients(invoices) {
    const map = /* @__PURE__ */ new Map();
    invoices.filter((i) => i.state === "posted" || i.state === "paid").forEach((i) => {
      const cur = map.get(i.partnerId) || { name: i.partnerName || "Inconnu", caTTC: 0, du: 0 };
      cur.caTTC += i.totalTTC || 0;
      cur.du += i.montantDu || 0;
      map.set(i.partnerId, cur);
    });
    const sorted = Array.from(map.values()).sort((a, b) => b.caTTC - a.caTTC).slice(0, 5);
    const maxCA = sorted.length ? sorted[0].caTTC : 1;
    this.topClients = sorted.map((v) => ({
      name: v.name,
      caTTC: v.caTTC,
      du: v.du,
      pct: Math.round(v.caTTC / maxCA * 100)
    }));
  }
  computeBreakdown(invoices) {
    const total = invoices.length || 1;
    const cfg = [
      { key: "draft", label: "Brouillon", color: "#94a3b8" },
      { key: "posted", label: "Valid\xE9e", color: "#00A09D" },
      { key: "paid", label: "Pay\xE9e", color: "#16a34a" },
      { key: "cancelled", label: "Annul\xE9e", color: "#dc2626" },
      { key: "extournee", label: "Extourn\xE9e", color: "#f59e0b" }
    ];
    this.invoiceBreakdown = cfg.map((c) => {
      const list = invoices.filter((i) => i.state === c.key);
      return {
        label: c.label,
        color: c.color,
        count: list.length,
        amount: list.reduce((s, i) => s + (i.totalTTC || 0), 0),
        pct: Math.round(list.length / total * 100)
      };
    }).filter((c) => c.count > 0);
  }
  // ── Helpers ──────────────────────────────────────────────────────────────
  fmtM(n) {
    if (n >= 1e6)
      return (n / 1e6).toFixed(1).replace(".", ",") + " M";
    if (n >= 1e3)
      return (n / 1e3).toFixed(0) + " K";
    return String(Math.round(n));
  }
  fmtFull(n) {
    return formatFCFA(Math.round(n));
  }
  stateLabel(s) {
    return {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      invoiced: "Factur\xE9",
      posted: "Valid\xE9e",
      paid: "Pay\xE9e",
      cancelled: "Annul\xE9/e",
      extournee: "Extourn\xE9e"
    }[s] || s;
  }
  stateBadge(s) {
    return "badge badge-" + s;
  }
  goInvoice(id) {
    if (id)
      this.router.navigate(["/sales/invoices", id]);
  }
  goOrder(id) {
    if (id)
      this.router.navigate(["/sales/orders", id]);
  }
  go(r) {
    this.router.navigate([r]);
  }
  static {
    this.\u0275fac = function SalesDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalesDashboardComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesDashboardComponent, selectors: [["app-sales-dashboard"]], decls: 12, vars: 3, consts: [[1, "dash"], [1, "dash-header"], [1, "dash-title"], [1, "dash-sub"], [1, "btn-refresh", 3, "click"], [1, "material-icons"], [1, "skeleton-row"], [1, "skeleton-card"], [1, "kpi-row"], [1, "kpi", "hero-card", "hero-teal"], [1, "kpi-icon-wrap"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-cur"], [1, "kpi-lbl"], [1, "kpi-hint"], [1, "kpi", "hero-card", "hero-green"], [1, "kpi", "hero-card"], [1, "kpi", "hero-card", "hero-purple", "clickable", 3, "click"], [1, "material-icons", "kpi-arrow"], [1, "kpi", "hero-card", "hero-blue"], [1, "kpi-pct"], [1, "mini-progress"], [1, "mini-bar"], [1, "secondary-row"], [1, "sec-card", "clickable", 3, "click"], [1, "material-icons", "sec-icon"], [1, "sec-body"], [1, "sec-val"], [1, "sec-lbl"], [1, "sec-hint"], [1, "sec-card"], [1, "mid-row"], [1, "card", "creances-card"], [1, "card-hd"], [1, "card-title"], [1, "creances-total-badge"], [1, "creances-empty"], [1, "creances-list"], [1, "card", "break-card"], [1, "breakdown-list"], [1, "break-item"], [1, "card", "top-clients-card"], [1, "activity-row"], [1, "card", "activity-card"], [1, "btn-link", 3, "click"], [1, "empty-act"], [1, "act-table"], [1, "creance-item", 3, "critical", "late"], [1, "creance-item"], [1, "creance-left"], [1, "creance-avatar"], [1, "creance-info"], [1, "creance-name"], [1, "creance-meta"], [1, "creance-right"], [1, "creance-amount"], [1, "break-top"], [1, "break-dot"], [1, "break-lbl"], [1, "break-count"], [1, "break-pct"], [1, "break-track"], [1, "break-bar"], [1, "break-amount"], [1, "top-list"], [1, "top-item"], [1, "top-rank"], [1, "top-info"], [1, "top-name"], [1, "top-bar-track"], [1, "top-bar-fill"], [1, "top-nums"], [1, "top-ca"], [1, "top-du"], [1, "r"], [3, "click"], [1, "mono"], [1, "client-cell"], [1, "r", "mono", "bold"], [1, "r", "mono"], [1, "muted"]], template: function SalesDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Tableau de bord");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6, "Vue d'ensemble des ventes en temps r\xE9el");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "button", 4);
        \u0275\u0275domListener("click", function SalesDashboardComponent_Template_button_click_7_listener() {
          return ctx.loadDashboard();
        });
        \u0275\u0275domElementStart(8, "span", 5);
        \u0275\u0275text(9, "refresh");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(10, SalesDashboardComponent_Conditional_10_Template, 3, 1, "div", 6)(11, SalesDashboardComponent_Conditional_11_Template, 142, 26);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("spinning", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 10 : 11);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ['\n.dash[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.dash-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n}\n.dash-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.2s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n  background: var(--bg-hover);\n}\n.btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-refresh.spinning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 110px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-elevated) 25%,\n      var(--bg-hover) 50%,\n      var(--bg-elevated) 75%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 14px;\n}\n@media (max-width: 1200px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.kpi[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.kpi.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.kpi.clickable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n}\n.hero-card.hero-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D 0%,\n      #00c4c1 100%);\n  color: white;\n}\n.hero-card.hero-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a 0%,\n      #22c55e 100%);\n  color: white;\n}\n.hero-card.hero-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #fbbf24 100%);\n  color: white;\n}\n.hero-card.hero-gray[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8 0%,\n      #cbd5e1 100%);\n  color: white;\n}\n.hero-card.hero-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #a78bfa 100%);\n  color: white;\n}\n.hero-card.hero-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #60a5fa 100%);\n  color: white;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-pct[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n.kpi-cur[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  opacity: 0.8;\n  margin-top: -2px;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 6px;\n}\n.kpi-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.75;\n  margin-top: 2px;\n}\n.kpi-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  align-self: center;\n}\n.mini-progress[_ngcontent-%COMP%] {\n  height: 5px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 10px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.mini-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.secondary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.sec-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border-left: 4px solid #e5e7eb;\n  transition: all 0.15s;\n}\n.sec-card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.sec-card.clickable[_ngcontent-%COMP%]:hover {\n  border-left-color: #00A09D;\n  transform: translateX(3px);\n}\n.sec-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #00A09D;\n}\n.sec-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.sec-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.sec-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sec-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #00A09D;\n}\n.btn-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.btn-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.mid-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n@media (max-width: 1000px) {\n  .mid-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.creances-total-badge[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.creances-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 40px;\n  color: #16a34a;\n  font-size: 13px;\n  font-weight: 600;\n}\n.creances-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.creances-list[_ngcontent-%COMP%] {\n  max-height: 280px;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.creances-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.creances-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-elevated);\n}\n.creances-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 10px;\n}\n.creance-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--border-light);\n  gap: 12px;\n  transition: background 0.12s;\n}\n.creance-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.creance-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.creance-item.late[_ngcontent-%COMP%] {\n  border-left: 3px solid #f59e0b;\n}\n.creance-item.critical[_ngcontent-%COMP%] {\n  border-left: 3px solid #dc2626;\n  background: var(--danger-bg);\n}\n.creance-item.critical[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.creance-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.creance-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #00A09D;\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.creance-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.creance-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 180px;\n}\n.creance-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.creance-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.creance-amount[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.aging-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.aging-badge.aging-current[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.aging-badge.aging-late[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.aging-badge.aging-critical[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.breakdown-list[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.break-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.break-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.break-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.break-lbl[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.break-count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.break-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  min-width: 32px;\n  text-align: right;\n}\n.break-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--bg-elevated);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.break-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.break-amount[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: "Roboto Mono", monospace;\n}\n.top-clients-card[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.top-list[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.top-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.top-rank[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #00A09D;\n  color: white;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.top-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 0;\n}\n.top-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.top-bar-track[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--bg-elevated);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.top-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #00A09D,\n      #2dd4bf);\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.top-nums[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.top-ca[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.top-du[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #dc2626;\n  font-weight: 600;\n}\n.activity-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .activity-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.empty-act[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.act-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.act-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.act-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.act-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.act-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.act-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.act-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.act-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.act-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.act-table[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.act-table[_ngcontent-%COMP%]   .client-cell[_ngcontent-%COMP%] {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.act-table[_ngcontent-%COMP%]   .du-pos[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: #1d4ed8;\n}\n.badge.badge-invoiced[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.badge.badge-extournee[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n/*# sourceMappingURL=sales-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-sales-dashboard", standalone: true, imports: [CommonModule], template: `<div class="dash">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="dash-header">
    <div>
      <h1 class="dash-title">Tableau de bord</h1>
      <p class="dash-sub">Vue d'ensemble des ventes en temps r\xE9el</p>
    </div>
    <button class="btn-refresh" (click)="loadDashboard()" [class.spinning]="loading">
      <span class="material-icons">refresh</span>
    </button>
  </div>

  @if (loading) {
    <div class="skeleton-row">
      @for (i of [1,2,3,4,5]; track i) {
        <div class="skeleton-card"></div>
      }
    </div>
  } @else {

  <!-- \u2550\u2550 KPI HERO (5 cartes top) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="kpi-row">

    <!-- CA TTC -->
    <div class="kpi hero-card hero-teal">
      <div class="kpi-icon-wrap"><span class="material-icons">trending_up</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ fmtM(caTTC) }}</span>
        <span class="kpi-cur">FCFA</span>
        <span class="kpi-lbl">Chiffre d'affaires TTC</span>
        <span class="kpi-hint">{{ fmtM(caHT) }} FCFA HT</span>
      </div>
    </div>

    <!-- Encaiss\xE9 -->
    <div class="kpi hero-card hero-green">
      <div class="kpi-icon-wrap"><span class="material-icons">payments</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ fmtM(encaisse) }}</span>
        <span class="kpi-cur">FCFA</span>
        <span class="kpi-lbl">Encaiss\xE9</span>
        <span class="kpi-hint">{{ tauxEncaissement }} % du CA</span>
      </div>
    </div>

    <!-- Reste d\xFB -->
    <div class="kpi hero-card" [class.hero-orange]="resteAEncaisser > 0" [class.hero-gray]="resteAEncaisser === 0">
      <div class="kpi-icon-wrap"><span class="material-icons">schedule</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ fmtM(resteAEncaisser) }}</span>
        <span class="kpi-cur">FCFA</span>
        <span class="kpi-lbl">Reste \xE0 encaisser</span>
        <span class="kpi-hint">{{ nbFacturesPosted }} facture(s) non sold\xE9e(s)</span>
      </div>
    </div>

    <!-- Factures -->
    <div class="kpi hero-card hero-purple clickable" (click)="go('/sales/invoices')">
      <div class="kpi-icon-wrap"><span class="material-icons">description</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ nbFactures }}</span>
        <span class="kpi-lbl">Factures</span>
        <span class="kpi-hint">{{ nbFacturesPaid }} pay\xE9es \xB7 {{ nbFacturesPosted }} valid\xE9es</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <!-- Taux d'encaissement -->
    <div class="kpi hero-card hero-blue">
      <div class="kpi-icon-wrap"><span class="material-icons">donut_large</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ tauxEncaissement }}<span class="kpi-pct">%</span></span>
        <span class="kpi-lbl">Taux d'encaissement</span>
        <div class="mini-progress">
          <div class="mini-bar" [style.width.%]="tauxEncaissement"></div>
        </div>
      </div>
    </div>

  </div>

  <!-- \u2550\u2550 LIGNE SECONDAIRE (3 compteurs) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="secondary-row">
    <div class="sec-card clickable" (click)="go('/sales/orders')">
      <span class="material-icons sec-icon">receipt_long</span>
      <div class="sec-body">
        <span class="sec-val">{{ nbBCs }}</span>
        <span class="sec-lbl">Bons de commande</span>
        <span class="sec-hint">{{ nbBCsConfirmed }} confirm\xE9s</span>
      </div>
    </div>
    <div class="sec-card clickable" (click)="go('/sales/avoirs')">
      <span class="material-icons sec-icon">undo</span>
      <div class="sec-body">
        <span class="sec-val">{{ nbAvoirs }}</span>
        <span class="sec-lbl">Avoirs</span>
        <span class="sec-hint">{{ fmtM(totalAvoirs) }} FCFA \xE9mis</span>
      </div>
    </div>
    <div class="sec-card">
      <span class="material-icons sec-icon">people</span>
      <div class="sec-body">
        <span class="sec-val">{{ nbClients }}</span>
        <span class="sec-lbl">Clients actifs</span>
        <span class="sec-hint">avec facturation</span>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550 LIGNE MILIEU : \xE9volution + r\xE9partition \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="mid-row">

    <!-- Cr\xE9ances clients -->
    <div class="card creances-card">
      <div class="card-hd">
        <span class="card-title">
          <span class="material-icons">account_balance_wallet</span>
          Cr\xE9ances clients
        </span>
        @if (nbClientsDebiteurs > 0) {
          <span class="creances-total-badge">{{ fmtFull(totalCreances) }}</span>
        }
      </div>

      @if (creances.length === 0) {
        <div class="creances-empty">
          <span class="material-icons">check_circle</span>
          <span>Aucune cr\xE9ance en cours</span>
        </div>
      } @else {
        <div class="creances-list">
          @for (c of creances; track c.name) {
            <div class="creance-item" [class.critical]="c.aging === 'critical'" [class.late]="c.aging === 'late'">
              <div class="creance-left">
                <div class="creance-avatar">{{ c.name.charAt(0).toUpperCase() }}</div>
                <div class="creance-info">
                  <span class="creance-name">{{ c.name }}</span>
                  <span class="creance-meta">{{ c.nbFactures }} facture{{ c.nbFactures > 1 ? 's' : '' }}</span>
                </div>
              </div>
              <div class="creance-right">
                <span class="creance-amount">{{ fmtM(c.totalDu) }} FCFA</span>
                <span class="aging-badge aging-{{ c.aging }}">
                  @if (c.aging === 'current') { \u2264 30 j }
                  @else if (c.aging === 'late') { {{ c.oldestDays }} j }
                  @else { {{ c.oldestDays }} j \u26A0 }
                </span>
              </div>
            </div>
          }
        </div>
      }
    </div>

    <!-- R\xE9partition factures -->
    <div class="card break-card">
      <div class="card-hd">
        <span class="card-title"><span class="material-icons">pie_chart</span> R\xE9partition factures</span>
      </div>
      <div class="breakdown-list">
        @for (b of invoiceBreakdown; track b.label) {
          <div class="break-item">
            <div class="break-top">
              <span class="break-dot" [style.background]="b.color"></span>
              <span class="break-lbl">{{ b.label }}</span>
              <span class="break-count" [style.color]="b.color">{{ b.count }}</span>
              <span class="break-pct">{{ b.pct }} %</span>
            </div>
            <div class="break-track">
              <div class="break-bar" [style.width.%]="b.pct" [style.background]="b.color"></div>
            </div>
            @if (b.amount > 0) {
              <span class="break-amount">{{ fmtM(b.amount) }} FCFA</span>
            }
          </div>
        }
      </div>
    </div>

  </div>

  <!-- \u2550\u2550 TOP CLIENTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (topClients.length > 0) {
    <div class="card top-clients-card">
      <div class="card-hd">
        <span class="card-title"><span class="material-icons">workspace_premium</span> Top 5 clients</span>
      </div>
      <div class="top-list">
        @for (c of topClients; track c.name; let idx = $index) {
          <div class="top-item">
            <span class="top-rank">{{ idx + 1 }}</span>
            <div class="top-info">
              <div class="top-name">{{ c.name }}</div>
              <div class="top-bar-track">
                <div class="top-bar-fill" [style.width.%]="c.pct"></div>
              </div>
            </div>
            <div class="top-nums">
              <span class="top-ca">{{ fmtM(c.caTTC) }} FCFA</span>
              @if (c.du > 0) {
                <span class="top-du">{{ fmtM(c.du) }} d\xFB</span>
              }
            </div>
          </div>
        }
      </div>
    </div>
  }

  <!-- \u2550\u2550 DERNI\xC8RES ACTIVIT\xC9S \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="activity-row">

    <!-- Derni\xE8res factures -->
    <div class="card activity-card">
      <div class="card-hd">
        <span class="card-title"><span class="material-icons">description</span> Derni\xE8res factures</span>
        <button class="btn-link" (click)="go('/sales/invoices')">Voir tout <span class="material-icons">arrow_forward</span></button>
      </div>
      @if (recentInvoices.length === 0) {
        <div class="empty-act">Aucune facture</div>
      } @else {
        <table class="act-table">
          <thead><tr><th>N\xB0</th><th>Client</th><th class="r">TTC</th><th class="r">Reste</th><th>Statut</th></tr></thead>
          <tbody>
            @for (i of recentInvoices; track i.id) {
              <tr (click)="goInvoice(i.id)">
                <td class="mono">{{ i.name }}</td>
                <td class="client-cell">{{ i.partnerName }}</td>
                <td class="r mono bold">{{ i.totalTTC | number:'1.0-0' }}</td>
                <td class="r mono" [class.du-pos]="(i.montantDu || 0) > 0">{{ (i.montantDu || 0) | number:'1.0-0' }}</td>
                <td><span [class]="'badge badge-' + i.state">{{ stateLabel(i.state || '') }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>

    <!-- Derniers bons de commande -->
    <div class="card activity-card">
      <div class="card-hd">
        <span class="card-title"><span class="material-icons">receipt_long</span> Derniers bons de commande</span>
        <button class="btn-link" (click)="go('/sales/orders')">Voir tout <span class="material-icons">arrow_forward</span></button>
      </div>
      @if (recentOrders.length === 0) {
        <div class="empty-act">Aucun bon de commande</div>
      } @else {
        <table class="act-table">
          <thead><tr><th>N\xB0</th><th>Client</th><th>Date</th><th class="r">TTC</th><th>Statut</th></tr></thead>
          <tbody>
            @for (o of recentOrders; track o.id) {
              <tr (click)="goOrder(o.id)">
                <td class="mono">{{ o.name }}</td>
                <td class="client-cell">{{ o.partnerName }}</td>
                <td class="muted">{{ o.date | date:'dd/MM/yy' }}</td>
                <td class="r mono bold">{{ o.totalTTC | number:'1.0-0' }}</td>
                <td><span [class]="'badge badge-' + o.state">{{ stateLabel(o.state || '') }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>

  </div>

  } <!-- end !loading -->
</div>
`, styles: ['/* src/app/modules/sales/components/dashboard/sales-dashboard.component.scss */\n.dash {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.dash-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.dash-title {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n}\n.dash-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-refresh {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.2s;\n}\n.btn-refresh:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n  background: var(--bg-hover);\n}\n.btn-refresh .material-icons {\n  font-size: 20px;\n}\n.btn-refresh.spinning .material-icons {\n  animation: spin 1s linear infinite;\n}\n.skeleton-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.skeleton-card {\n  height: 110px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-elevated) 25%,\n      var(--bg-hover) 50%,\n      var(--bg-elevated) 75%);\n  background-size: 400% 100%;\n  animation: shimmer 1.4s ease infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 14px;\n}\n@media (max-width: 1200px) {\n  .kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.kpi {\n  border-radius: 14px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.kpi.clickable {\n  cursor: pointer;\n}\n.kpi.clickable:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n}\n.hero-card.hero-teal {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D 0%,\n      #00c4c1 100%);\n  color: white;\n}\n.hero-card.hero-green {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a 0%,\n      #22c55e 100%);\n  color: white;\n}\n.hero-card.hero-orange {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #fbbf24 100%);\n  color: white;\n}\n.hero-card.hero-gray {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8 0%,\n      #cbd5e1 100%);\n  color: white;\n}\n.hero-card.hero-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #a78bfa 100%);\n  color: white;\n}\n.hero-card.hero-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #60a5fa 100%);\n  color: white;\n}\n.kpi-icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.kpi-body {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.kpi-val {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-pct {\n  font-size: 18px;\n  font-weight: 700;\n}\n.kpi-cur {\n  font-size: 12px;\n  font-weight: 600;\n  opacity: 0.8;\n  margin-top: -2px;\n}\n.kpi-lbl {\n  font-size: 12px;\n  font-weight: 700;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 6px;\n}\n.kpi-hint {\n  font-size: 11px;\n  opacity: 0.75;\n  margin-top: 2px;\n}\n.kpi-arrow {\n  color: rgba(255, 255, 255, 0.5);\n  align-self: center;\n}\n.mini-progress {\n  height: 5px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 10px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.mini-bar {\n  height: 100%;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.secondary-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.sec-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border-left: 4px solid #e5e7eb;\n  transition: all 0.15s;\n}\n.sec-card.clickable {\n  cursor: pointer;\n}\n.sec-card.clickable:hover {\n  border-left-color: #00A09D;\n  transform: translateX(3px);\n}\n.sec-icon {\n  font-size: 26px;\n  color: #00A09D;\n}\n.sec-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.sec-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.sec-lbl {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sec-hint {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title .material-icons {\n  font-size: 17px;\n  color: #00A09D;\n}\n.btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.btn-link .material-icons {\n  font-size: 14px;\n}\n.btn-link:hover {\n  background: var(--bg-hover);\n}\n.mid-row {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n@media (max-width: 1000px) {\n  .mid-row {\n    grid-template-columns: 1fr;\n  }\n}\n.creances-total-badge {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.creances-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 40px;\n  color: #16a34a;\n  font-size: 13px;\n  font-weight: 600;\n}\n.creances-empty .material-icons {\n  font-size: 22px;\n}\n.creances-list {\n  max-height: 280px;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.creances-list::-webkit-scrollbar {\n  width: 4px;\n}\n.creances-list::-webkit-scrollbar-track {\n  background: var(--bg-elevated);\n}\n.creances-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 10px;\n}\n.creance-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--border-light);\n  gap: 12px;\n  transition: background 0.12s;\n}\n.creance-item:last-child {\n  border-bottom: none;\n}\n.creance-item:hover {\n  background: var(--bg-hover);\n}\n.creance-item.late {\n  border-left: 3px solid #f59e0b;\n}\n.creance-item.critical {\n  border-left: 3px solid #dc2626;\n  background: var(--danger-bg);\n}\n.creance-item.critical:hover {\n  background: var(--danger-bg);\n}\n.creance-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.creance-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #00A09D;\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.creance-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.creance-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 180px;\n}\n.creance-meta {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.creance-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.creance-amount {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.aging-badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.aging-badge.aging-current {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.aging-badge.aging-late {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.aging-badge.aging-critical {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.breakdown-list {\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.break-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.break-top {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.break-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.break-lbl {\n  flex: 1;\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.break-count {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.break-pct {\n  font-size: 11px;\n  color: var(--text-muted);\n  min-width: 32px;\n  text-align: right;\n}\n.break-track {\n  height: 6px;\n  background: var(--bg-elevated);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.break-bar {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.break-amount {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: "Roboto Mono", monospace;\n}\n.top-clients-card {\n  margin-bottom: 18px;\n}\n.top-list {\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.top-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.top-rank {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #00A09D;\n  color: white;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.top-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 0;\n}\n.top-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.top-bar-track {\n  height: 5px;\n  background: var(--bg-elevated);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.top-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #00A09D,\n      #2dd4bf);\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.top-nums {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.top-ca {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.top-du {\n  font-size: 11px;\n  color: #dc2626;\n  font-weight: 600;\n}\n.activity-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .activity-row {\n    grid-template-columns: 1fr;\n  }\n}\n.empty-act {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.act-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.act-table th {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.act-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.act-table tbody tr {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.act-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.act-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.act-table .r {\n  text-align: right;\n}\n.act-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.act-table .bold {\n  font-weight: 700;\n}\n.act-table .muted {\n  color: var(--text-muted);\n}\n.act-table .client-cell {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.act-table .du-pos {\n  color: #dc2626;\n  font-weight: 700;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n}\n.badge.badge-draft {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed {\n  background: var(--primary-subtle);\n  color: #1d4ed8;\n}\n.badge.badge-invoiced {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-posted {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.badge.badge-paid {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.badge.badge-extournee {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n/*# sourceMappingURL=sales-dashboard.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesDashboardComponent, { className: "SalesDashboardComponent", filePath: "app/modules/sales/components/dashboard/sales-dashboard.component.ts", lineNumber: 31 });
})();
export {
  SalesDashboardComponent
};
//# sourceMappingURL=chunk-EIRPHXVF.js.map
