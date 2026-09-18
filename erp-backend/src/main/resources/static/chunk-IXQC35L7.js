import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
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

// src/app/modules/purchases/components/dashboard/purchase-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id;
function PurchaseDashboardComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 9);
  }
}
function PurchaseDashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, PurchaseDashboardComponent_Conditional_16_For_2_Template, 1, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmtFull(ctx_r1.totalDettes));
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span", 6);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Aucune dette en cours");
    \u0275\u0275domElementEnd()();
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2264 30 j ");
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", d_r4.oldestDays, " j ");
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", d_r4.oldestDays, " j \u26A0 ");
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 50);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/invoices"]));
    });
    \u0275\u0275domElementStart(1, "div", 51)(2, "div", 52);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 53)(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "div", 56)(10, "span", 57);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span");
    \u0275\u0275conditionalCreate(13, PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Conditional_13_Template, 1, 0)(14, PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Conditional_14_Template, 1, 1)(15, PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Conditional_15_Template, 1, 1);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("critical", d_r4.aging === "critical")("late", d_r4.aging === "late");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r4.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", d_r4.nbFactures, " facture", d_r4.nbFactures > 1 ? "s" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(d_r4.totalDu), " FCFA");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("aging-badge aging-", d_r4.aging));
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r4.aging === "current" ? 13 : d_r4.aging === "late" ? 14 : 15);
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 39);
    \u0275\u0275repeaterCreate(1, PurchaseDashboardComponent_Conditional_17_Conditional_104_For_2_Template, 16, 13, "div", 49, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dettes);
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span", 6);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Aucune facture en attente");
    \u0275\u0275domElementEnd()();
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_117_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 59);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Conditional_117_For_13_Template_tr_click_0_listener() {
      const inv_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/invoices", inv_r6.id]));
    });
    \u0275\u0275domElementStart(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 61);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 62);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const inv_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r6.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, inv_r6.date, "dd/MM/yy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, inv_r6.montantDu ?? 0, "1.0-0"));
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 43)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Fournisseur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th", 58);
    \u0275\u0275text(10, "Reste d\xFB");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, PurchaseDashboardComponent_Conditional_17_Conditional_117_For_13_Template, 11, 10, "tr", null, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.recentUnpaid);
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span", 6);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Aucune commande");
    \u0275\u0275domElementEnd()();
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_129_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 65);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Conditional_129_For_2_Template_div_click_0_listener() {
      const o_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/orders", o_r8.id]));
    });
    \u0275\u0275domElementStart(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 69)(7, "span", 70);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r8.partnerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.fmtM(o_r8.totalTTC ?? 0), " FCFA");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", o_r8.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.orderStateLabel(o_r8.state));
  }
}
function PurchaseDashboardComponent_Conditional_17_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 44);
    \u0275\u0275repeaterCreate(1, PurchaseDashboardComponent_Conditional_17_Conditional_129_For_2_Template, 11, 7, "div", 64, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recentOrders);
  }
}
function PurchaseDashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/invoices"]));
    });
    \u0275\u0275domElementStart(2, "div", 12)(3, "span", 6);
    \u0275\u0275text(4, "warning_amber");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 13)(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 15);
    \u0275\u0275text(9, "FCFA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 16);
    \u0275\u0275text(11, "Dettes fournisseurs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "span", 18);
    \u0275\u0275text(15, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 19)(17, "div", 12)(18, "span", 6);
    \u0275\u0275text(19, "shopping_bag");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 13)(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span", 15);
    \u0275\u0275text(24, "FCFA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "span", 16);
    \u0275\u0275text(26, "Total achats");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "span", 17);
    \u0275\u0275text(28, "Factures valid\xE9es + pay\xE9es");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(29, "div", 20);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/payments"]));
    });
    \u0275\u0275domElementStart(30, "div", 12)(31, "span", 6);
    \u0275\u0275text(32, "payments");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "div", 13)(34, "span", 14);
    \u0275\u0275text(35);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "span", 15);
    \u0275\u0275text(37, "FCFA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "span", 16);
    \u0275\u0275text(39, "Paiements ce mois");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "span", 17);
    \u0275\u0275text(41, "D\xE9caiss\xE9s ce mois");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(42, "span", 18);
    \u0275\u0275text(43, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "div", 21);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_div_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/orders"]));
    });
    \u0275\u0275domElementStart(45, "div", 12)(46, "span", 6);
    \u0275\u0275text(47, "shopping_cart");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(48, "div", 13)(49, "span", 14);
    \u0275\u0275text(50);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "span", 16);
    \u0275\u0275text(52, "Commandes confirm\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "span", 17);
    \u0275\u0275text(54);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(55, "span", 18);
    \u0275\u0275text(56, "chevron_right");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(57, "div", 22)(58, "div", 12)(59, "span", 6);
    \u0275\u0275text(60, "donut_large");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(61, "div", 13)(62, "span", 14);
    \u0275\u0275text(63);
    \u0275\u0275domElementStart(64, "span", 23);
    \u0275\u0275text(65, "%");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(66, "span", 16);
    \u0275\u0275text(67, "Taux de r\xE8glement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "div", 24);
    \u0275\u0275domElement(69, "div", 25);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(70, "div", 26)(71, "div", 27);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_div_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/suppliers"]));
    });
    \u0275\u0275domElementStart(72, "span", 28);
    \u0275\u0275text(73, "store");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "div", 29)(75, "span", 30);
    \u0275\u0275text(76);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(77, "span", 31);
    \u0275\u0275text(78, "Fournisseurs actifs");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(79, "div", 32)(80, "span", 28);
    \u0275\u0275text(81, "receipt");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(82, "div", 29)(83, "span", 30);
    \u0275\u0275text(84);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(85, "span", 31);
    \u0275\u0275text(86, "Total factures");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(87, "div", 27);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_div_click_87_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/orders"]));
    });
    \u0275\u0275domElementStart(88, "span", 28);
    \u0275\u0275text(89, "inventory");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(90, "div", 29)(91, "span", 30);
    \u0275\u0275text(92);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(93, "span", 31);
    \u0275\u0275text(94, "Commandes r\xE9ceptionn\xE9es");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(95, "div", 33)(96, "div", 34)(97, "div", 35)(98, "span", 36)(99, "span", 6);
    \u0275\u0275text(100, "account_balance_wallet");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(101, " Dettes fournisseurs ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(102, PurchaseDashboardComponent_Conditional_17_Conditional_102_Template, 2, 1, "span", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(103, PurchaseDashboardComponent_Conditional_17_Conditional_103_Template, 5, 0, "div", 38)(104, PurchaseDashboardComponent_Conditional_17_Conditional_104_Template, 3, 0, "div", 39);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(105, "div", 40)(106, "div", 41)(107, "div", 35)(108, "span", 36)(109, "span", 6);
    \u0275\u0275text(110, "receipt_long");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(111, " Factures impay\xE9es ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(112, "button", 42);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_112_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/invoices"]));
    });
    \u0275\u0275text(113, " Voir tout ");
    \u0275\u0275domElementStart(114, "span", 6);
    \u0275\u0275text(115, "arrow_forward");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(116, PurchaseDashboardComponent_Conditional_17_Conditional_116_Template, 5, 0, "div", 38)(117, PurchaseDashboardComponent_Conditional_17_Conditional_117_Template, 14, 0, "table", 43);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(118, "div", 41)(119, "div", 35)(120, "span", 36)(121, "span", 6);
    \u0275\u0275text(122, "shopping_cart");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(123, " Commandes r\xE9centes ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(124, "button", 42);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_124_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/orders"]));
    });
    \u0275\u0275text(125, " Voir tout ");
    \u0275\u0275domElementStart(126, "span", 6);
    \u0275\u0275text(127, "arrow_forward");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(128, PurchaseDashboardComponent_Conditional_17_Conditional_128_Template, 5, 0, "div", 38)(129, PurchaseDashboardComponent_Conditional_17_Conditional_129_Template, 3, 0, "div", 44);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(130, "div", 45)(131, "div", 46)(132, "span", 6);
    \u0275\u0275text(133, "bolt");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(134, " Acc\xE8s rapides");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(135, "div", 47)(136, "button", 48);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_136_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/orders/new"]));
    });
    \u0275\u0275domElementStart(137, "span", 6);
    \u0275\u0275text(138, "add_shopping_cart");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(139, " Nouvelle commande ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(140, "button", 48);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_140_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/invoices"]));
    });
    \u0275\u0275domElementStart(141, "span", 6);
    \u0275\u0275text(142, "receipt_long");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(143, " Factures fournisseurs ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(144, "button", 48);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_144_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/payments"]));
    });
    \u0275\u0275domElementStart(145, "span", 6);
    \u0275\u0275text(146, "payments");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(147, " Paiements ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(148, "button", 48);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_148_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/remises"]));
    });
    \u0275\u0275domElementStart(149, "span", 6);
    \u0275\u0275text(150, "discount");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(151, " Remises fournisseurs ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(152, "button", 48);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_152_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/enlevements"]));
    });
    \u0275\u0275domElementStart(153, "span", 6);
    \u0275\u0275text(154, "local_shipping");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(155, " Enl\xE8vements ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(156, "button", 48);
    \u0275\u0275domListener("click", function PurchaseDashboardComponent_Conditional_17_Template_button_click_156_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/purchases/rapports"]));
    });
    \u0275\u0275domElementStart(157, "span", 6);
    \u0275\u0275text(158, "bar_chart");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(159, " Rapports ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("hero-red", ctx_r1.montantDuTotal > 0)("hero-gray", ctx_r1.montantDuTotal === 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fmtM(ctx_r1.montantDuTotal));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.facturesNonPayees.length, " facture(s) impay\xE9e(s)");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.fmtM(ctx_r1.totalAchatsPostedPaid));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.fmtM(ctx_r1.paiementsMoisTotal));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.commandesConfirmees);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.commandesBrouillon, " en brouillon \xB7 ", ctx_r1.commandesRecues, " re\xE7ues");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.tauxPaiement);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.tauxPaiement, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.fournisseursActifs);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.invoices.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.commandesRecues);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.totalDettes > 0 ? 102 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dettes.length === 0 ? 103 : 104);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.recentUnpaid.length === 0 ? 116 : 117);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.recentOrders.length === 0 ? 128 : 129);
  }
}
var PurchaseDashboardComponent = class _PurchaseDashboardComponent {
  // ── KPIs ─────────────────────────────────────────────────────────────────
  get commandesBrouillon() {
    return this.orders.filter((o) => o.state === "draft").length;
  }
  get commandesConfirmees() {
    return this.orders.filter((o) => o.state === "confirmed").length;
  }
  get commandesRecues() {
    return this.orders.filter((o) => o.state === "received").length;
  }
  get facturesNonPayees() {
    return this.invoices.filter((i) => i.state === "posted");
  }
  get montantDuTotal() {
    return this.facturesNonPayees.reduce((s, i) => s + (i.montantDu ?? 0), 0);
  }
  get totalAchatsPostedPaid() {
    return this.invoices.filter((i) => i.state === "posted" || i.state === "paid").reduce((s, i) => s + (i.totalTTC ?? 0), 0);
  }
  get paiementsMoisTotal() {
    const now = /* @__PURE__ */ new Date();
    return this.payments.filter((p) => p.date && new Date(p.date).getMonth() === now.getMonth() && new Date(p.date).getFullYear() === now.getFullYear()).reduce((s, p) => s + (p.amount ?? 0), 0);
  }
  get fournisseursActifs() {
    return new Set(this.invoices.filter((i) => i.state !== "cancelled").map((i) => i.partnerId)).size;
  }
  get tauxPaiement() {
    const total = this.totalAchatsPostedPaid;
    if (total === 0)
      return 0;
    const paye = total - this.montantDuTotal;
    return Math.round(paye / total * 100);
  }
  get recentUnpaid() {
    return this.facturesNonPayees.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6);
  }
  get recentOrders() {
    return [...this.orders].filter((o) => o.state !== "cancelled").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
  }
  get currentMonthLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }
  constructor(purchaseService, authService, router) {
    this.purchaseService = purchaseService;
    this.authService = authService;
    this.router = router;
    this.loading = true;
    this.companyId = 1;
    this.companyName = "";
    this.orders = [];
    this.invoices = [];
    this.payments = [];
    this.dettes = [];
    this.totalDettes = 0;
  }
  ngOnInit() {
    const cid = this.authService.getCompanyId();
    if (cid)
      this.companyId = cid;
    this.companyName = this.authService.getActiveCompany()?.name ?? "";
    forkJoin({
      orders: this.purchaseService.getOrders(this.companyId),
      invoices: this.purchaseService.getInvoices(this.companyId),
      payments: this.purchaseService.getAllPayments(this.companyId)
    }).subscribe({
      next: ({ orders, invoices, payments }) => {
        this.orders = orders;
        this.invoices = invoices;
        this.payments = payments;
        this.computeDettes(invoices);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  computeDettes(invoices) {
    const today = /* @__PURE__ */ new Date();
    const map = /* @__PURE__ */ new Map();
    invoices.filter((i) => i.state === "posted" && (i.montantDu ?? 0) > 0).forEach((i) => {
      const name = i.partnerName || "Inconnu";
      const days = i.date ? Math.floor((today.getTime() - new Date(i.date).getTime()) / 864e5) : 0;
      const cur = map.get(name) || { du: 0, nb: 0, oldest: 0 };
      cur.du += i.montantDu ?? 0;
      cur.nb += 1;
      cur.oldest = Math.max(cur.oldest, days);
      map.set(name, cur);
    });
    this.dettes = Array.from(map.entries()).map(([name, v]) => ({
      name,
      totalDu: v.du,
      nbFactures: v.nb,
      oldestDays: v.oldest,
      aging: v.oldest > 60 ? "critical" : v.oldest > 30 ? "late" : "current"
    })).sort((a, b) => b.totalDu - a.totalDu);
    this.totalDettes = this.dettes.reduce((s, d) => s + d.totalDu, 0);
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  fmtM(n) {
    if (n >= 1e6)
      return (n / 1e6).toFixed(1).replace(".", ",") + " M";
    if (n >= 1e3)
      return (n / 1e3).toFixed(0) + " K";
    return String(Math.round(n));
  }
  fmtFull(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n)) + " FCFA";
  }
  orderStateLabel(s) {
    return { draft: "Brouillon", confirmed: "Confirm\xE9e", received: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" }[s ?? ""] ?? s ?? "";
  }
  invoiceStateLabel(s) {
    return { draft: "Brouillon", posted: "Valid\xE9e", paid: "Pay\xE9e", cancelled: "Annul\xE9e" }[s ?? ""] ?? s ?? "";
  }
  static {
    this.\u0275fac = function PurchaseDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseDashboardComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseDashboardComponent, selectors: [["app-purchase-dashboard"]], decls: 18, vars: 3, consts: [[1, "dash"], [1, "dash-header"], [1, "dash-title"], [1, "dash-sub"], [1, "header-actions"], [1, "btn-outline", 3, "click"], [1, "material-icons"], [1, "btn-primary", 3, "click"], [1, "skeleton-row"], [1, "skeleton-card"], [1, "kpi-row"], [1, "kpi", "clickable", 3, "click"], [1, "kpi-icon-wrap"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-cur"], [1, "kpi-lbl"], [1, "kpi-hint"], [1, "material-icons", "kpi-arrow"], [1, "kpi", "hero-teal"], [1, "kpi", "hero-green", "clickable", 3, "click"], [1, "kpi", "hero-blue", "clickable", 3, "click"], [1, "kpi", "hero-purple"], [1, "kpi-pct"], [1, "mini-progress"], [1, "mini-bar"], [1, "secondary-row"], [1, "sec-card", "clickable", 3, "click"], [1, "material-icons", "sec-icon"], [1, "sec-body"], [1, "sec-val"], [1, "sec-lbl"], [1, "sec-card"], [1, "main-grid"], [1, "card", "dettes-card"], [1, "card-hd"], [1, "card-title"], [1, "dettes-total"], [1, "list-empty"], [1, "dettes-list"], [1, "side-col"], [1, "card"], [1, "btn-link", 3, "click"], [1, "act-table"], [1, "order-list"], [1, "quick-block"], [1, "quick-title"], [1, "quick-row"], [1, "quick-btn", 3, "click"], [1, "dette-item", 3, "critical", "late"], [1, "dette-item", 3, "click"], [1, "dette-left"], [1, "dette-avatar"], [1, "dette-info"], [1, "dette-name"], [1, "dette-meta"], [1, "dette-right"], [1, "dette-amount"], [1, "r"], [3, "click"], [1, "mono"], [1, "client-cell"], [1, "muted"], [1, "r", "bold", "du-pill"], [1, "order-item"], [1, "order-item", 3, "click"], [1, "order-left"], [1, "order-ref"], [1, "order-partner"], [1, "order-right"], [1, "order-amount"]], template: function PurchaseDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Tableau de bord achats");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275domListener("click", function PurchaseDashboardComponent_Template_button_click_8_listener() {
          return ctx.router.navigate(["/purchases/invoices"]);
        });
        \u0275\u0275domElementStart(9, "span", 6);
        \u0275\u0275text(10, "receipt_long");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(11, " Factures ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(12, "button", 7);
        \u0275\u0275domListener("click", function PurchaseDashboardComponent_Template_button_click_12_listener() {
          return ctx.router.navigate(["/purchases/orders/new"]);
        });
        \u0275\u0275domElementStart(13, "span", 6);
        \u0275\u0275text(14, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(15, " Nouvelle commande ");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(16, PurchaseDashboardComponent_Conditional_16_Template, 3, 1, "div", 8)(17, PurchaseDashboardComponent_Conditional_17_Template, 160, 21);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.companyName, " \u2014 ", ctx.currentMonthLabel);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.loading ? 16 : 17);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ['\n.dash[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.dash-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n}\n.dash-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: none;\n  border-radius: 9px;\n  background: #00A09D;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: 1.5px solid var(--border);\n  border-radius: 9px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n  background: var(--bg-hover);\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 110px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 14px;\n}\n@media (max-width: 1200px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.kpi[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 18px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.15s, box-shadow 0.15s;\n  position: relative;\n  overflow: hidden;\n}\n.kpi.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.kpi.clickable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.13);\n}\n.kpi.hero-red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #f87171);\n  color: white;\n}\n.kpi.hero-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D,\n      #2dd4bf);\n  color: white;\n}\n.kpi.hero-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e);\n  color: white;\n}\n.kpi.hero-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #60a5fa);\n  color: white;\n}\n.kpi.hero-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #a78bfa);\n  color: white;\n}\n.kpi.hero-gray[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #cbd5e1);\n  color: white;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.kpi-pct[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n}\n.kpi-cur[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.8;\n  margin-top: -1px;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 6px;\n}\n.kpi-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n  margin-top: 2px;\n}\n.kpi-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n  align-self: center;\n}\n.mini-progress[_ngcontent-%COMP%] {\n  height: 5px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 10px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.mini-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.secondary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.sec-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  padding: 13px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-left: 4px solid #e5e7eb;\n  transition: all 0.15s;\n}\n.sec-card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.sec-card.clickable[_ngcontent-%COMP%]:hover {\n  border-left-color: #00A09D;\n  transform: translateX(3px);\n}\n.sec-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #00A09D;\n}\n.sec-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sec-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.sec-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.card-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #00A09D;\n}\n.btn-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.btn-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 1000px) {\n  .main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.side-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.dettes-total[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.list-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 36px;\n  color: #16a34a;\n  font-size: 13px;\n  font-weight: 600;\n}\n.list-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.dettes-list[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.dettes-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.dettes-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 10px;\n}\n.dette-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--border-light);\n  gap: 12px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.dette-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dette-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.dette-item.late[_ngcontent-%COMP%] {\n  border-left: 3px solid #f59e0b;\n}\n.dette-item.critical[_ngcontent-%COMP%] {\n  border-left: 3px solid #dc2626;\n  background: var(--danger-bg);\n}\n.dette-item.critical[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.dette-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.dette-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f59e0b;\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.dette-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.dette-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.dette-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.dette-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.dette-amount[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.aging-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.aging-badge.aging-current[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.aging-badge.aging-late[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.aging-badge.aging-critical[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.act-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.act-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.act-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.act-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.act-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.act-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.act-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.act-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.act-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.act-table[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.act-table[_ngcontent-%COMP%]   .client-cell[_ngcontent-%COMP%] {\n  max-width: 130px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.act-table[_ngcontent-%COMP%]   .du-pill[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-family: "Roboto Mono", monospace;\n}\n.order-list[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--border-light);\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.order-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.order-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.order-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.order-ref[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-primary);\n}\n.order-partner[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.order-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.order-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.quick-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.quick-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.quick-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.quick-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #00A09D;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  background: var(--bg-hover);\n  color: #00A09D;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: #1d4ed8;\n}\n.badge.badge-received[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=purchase-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-dashboard", standalone: true, imports: [CommonModule], template: `<div class="dash">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="dash-header">
    <div>
      <h1 class="dash-title">Tableau de bord achats</h1>
      <p class="dash-sub">{{ companyName }} \u2014 {{ currentMonthLabel }}</p>
    </div>
    <div class="header-actions">
      <button class="btn-outline" (click)="router.navigate(['/purchases/invoices'])">
        <span class="material-icons">receipt_long</span> Factures
      </button>
      <button class="btn-primary" (click)="router.navigate(['/purchases/orders/new'])">
        <span class="material-icons">add</span> Nouvelle commande
      </button>
    </div>
  </div>

  @if (loading) {
    <div class="skeleton-row">
      @for (i of [1,2,3,4,5]; track i) { <div class="skeleton-card"></div> }
    </div>
  } @else {

  <!-- \u2550\u2550 KPI ROW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="kpi-row">

    <!-- Dettes fournisseurs -->
    <div class="kpi clickable" [class.hero-red]="montantDuTotal > 0" [class.hero-gray]="montantDuTotal === 0"
         (click)="router.navigate(['/purchases/invoices'])">
      <div class="kpi-icon-wrap"><span class="material-icons">warning_amber</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ fmtM(montantDuTotal) }}</span>
        <span class="kpi-cur">FCFA</span>
        <span class="kpi-lbl">Dettes fournisseurs</span>
        <span class="kpi-hint">{{ facturesNonPayees.length }} facture(s) impay\xE9e(s)</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <!-- Achats total -->
    <div class="kpi hero-teal">
      <div class="kpi-icon-wrap"><span class="material-icons">shopping_bag</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ fmtM(totalAchatsPostedPaid) }}</span>
        <span class="kpi-cur">FCFA</span>
        <span class="kpi-lbl">Total achats</span>
        <span class="kpi-hint">Factures valid\xE9es + pay\xE9es</span>
      </div>
    </div>

    <!-- Paiements ce mois -->
    <div class="kpi hero-green clickable" (click)="router.navigate(['/purchases/payments'])">
      <div class="kpi-icon-wrap"><span class="material-icons">payments</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ fmtM(paiementsMoisTotal) }}</span>
        <span class="kpi-cur">FCFA</span>
        <span class="kpi-lbl">Paiements ce mois</span>
        <span class="kpi-hint">D\xE9caiss\xE9s ce mois</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <!-- Commandes confirm\xE9es -->
    <div class="kpi hero-blue clickable" (click)="router.navigate(['/purchases/orders'])">
      <div class="kpi-icon-wrap"><span class="material-icons">shopping_cart</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ commandesConfirmees }}</span>
        <span class="kpi-lbl">Commandes confirm\xE9es</span>
        <span class="kpi-hint">{{ commandesBrouillon }} en brouillon \xB7 {{ commandesRecues }} re\xE7ues</span>
      </div>
      <span class="material-icons kpi-arrow">chevron_right</span>
    </div>

    <!-- Taux de r\xE8glement -->
    <div class="kpi hero-purple">
      <div class="kpi-icon-wrap"><span class="material-icons">donut_large</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ tauxPaiement }}<span class="kpi-pct">%</span></span>
        <span class="kpi-lbl">Taux de r\xE8glement</span>
        <div class="mini-progress">
          <div class="mini-bar" [style.width.%]="tauxPaiement"></div>
        </div>
      </div>
    </div>

  </div>

  <!-- \u2550\u2550 LIGNE SECONDAIRE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="secondary-row">
    <div class="sec-card clickable" (click)="router.navigate(['/purchases/suppliers'])">
      <span class="material-icons sec-icon">store</span>
      <div class="sec-body">
        <span class="sec-val">{{ fournisseursActifs }}</span>
        <span class="sec-lbl">Fournisseurs actifs</span>
      </div>
    </div>
    <div class="sec-card">
      <span class="material-icons sec-icon">receipt</span>
      <div class="sec-body">
        <span class="sec-val">{{ invoices.length }}</span>
        <span class="sec-lbl">Total factures</span>
      </div>
    </div>
    <div class="sec-card clickable" (click)="router.navigate(['/purchases/orders'])">
      <span class="material-icons sec-icon">inventory</span>
      <div class="sec-body">
        <span class="sec-val">{{ commandesRecues }}</span>
        <span class="sec-lbl">Commandes r\xE9ceptionn\xE9es</span>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550 CONTENU PRINCIPAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="main-grid">

    <!-- Dettes fournisseurs -->
    <div class="card dettes-card">
      <div class="card-hd">
        <span class="card-title">
          <span class="material-icons">account_balance_wallet</span> Dettes fournisseurs
        </span>
        @if (totalDettes > 0) {
          <span class="dettes-total">{{ fmtFull(totalDettes) }}</span>
        }
      </div>

      @if (dettes.length === 0) {
        <div class="list-empty">
          <span class="material-icons">check_circle</span>
          <span>Aucune dette en cours</span>
        </div>
      } @else {
        <div class="dettes-list">
          @for (d of dettes; track d.name) {
            <div class="dette-item" [class.critical]="d.aging === 'critical'" [class.late]="d.aging === 'late'"
                 (click)="router.navigate(['/purchases/invoices'])">
              <div class="dette-left">
                <div class="dette-avatar">{{ d.name.charAt(0).toUpperCase() }}</div>
                <div class="dette-info">
                  <span class="dette-name">{{ d.name }}</span>
                  <span class="dette-meta">{{ d.nbFactures }} facture{{ d.nbFactures > 1 ? 's' : '' }}</span>
                </div>
              </div>
              <div class="dette-right">
                <span class="dette-amount">{{ fmtM(d.totalDu) }} FCFA</span>
                <span class="aging-badge aging-{{ d.aging }}">
                  @if (d.aging === 'current') { \u2264 30 j }
                  @else if (d.aging === 'late') { {{ d.oldestDays }} j }
                  @else { {{ d.oldestDays }} j \u26A0 }
                </span>
              </div>
            </div>
          }
        </div>
      }
    </div>

    <!-- Colonne droite : factures impay\xE9es + commandes -->
    <div class="side-col">

      <!-- Factures impay\xE9es r\xE9centes -->
      <div class="card">
        <div class="card-hd">
          <span class="card-title">
            <span class="material-icons">receipt_long</span> Factures impay\xE9es
          </span>
          <button class="btn-link" (click)="router.navigate(['/purchases/invoices'])">
            Voir tout <span class="material-icons">arrow_forward</span>
          </button>
        </div>
        @if (recentUnpaid.length === 0) {
          <div class="list-empty">
            <span class="material-icons">check_circle</span>
            <span>Aucune facture en attente</span>
          </div>
        } @else {
          <table class="act-table">
            <thead>
              <tr><th>R\xE9f\xE9rence</th><th>Fournisseur</th><th>Date</th><th class="r">Reste d\xFB</th></tr>
            </thead>
            <tbody>
              @for (inv of recentUnpaid; track inv.id) {
                <tr (click)="router.navigate(['/purchases/invoices', inv.id])">
                  <td class="mono">{{ inv.name }}</td>
                  <td class="client-cell">{{ inv.partnerName }}</td>
                  <td class="muted">{{ inv.date | date:'dd/MM/yy' }}</td>
                  <td class="r bold du-pill">{{ (inv.montantDu ?? 0) | number:'1.0-0' }}</td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>

      <!-- Commandes r\xE9centes -->
      <div class="card">
        <div class="card-hd">
          <span class="card-title">
            <span class="material-icons">shopping_cart</span> Commandes r\xE9centes
          </span>
          <button class="btn-link" (click)="router.navigate(['/purchases/orders'])">
            Voir tout <span class="material-icons">arrow_forward</span>
          </button>
        </div>
        @if (recentOrders.length === 0) {
          <div class="list-empty">
            <span class="material-icons">inbox</span><span>Aucune commande</span>
          </div>
        } @else {
          <div class="order-list">
            @for (o of recentOrders; track o.id) {
              <div class="order-item" (click)="router.navigate(['/purchases/orders', o.id])">
                <div class="order-left">
                  <span class="order-ref">{{ o.name }}</span>
                  <span class="order-partner">{{ o.partnerName }}</span>
                </div>
                <div class="order-right">
                  <span class="order-amount">{{ fmtM(o.totalTTC ?? 0) }} FCFA</span>
                  <span class="badge badge-{{ o.state }}">{{ orderStateLabel(o.state) }}</span>
                </div>
              </div>
            }
          </div>
        }
      </div>

    </div>
  </div>

  <!-- \u2550\u2550 ACC\xC8S RAPIDES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="quick-block">
    <div class="quick-title"><span class="material-icons">bolt</span> Acc\xE8s rapides</div>
    <div class="quick-row">
      <button class="quick-btn" (click)="router.navigate(['/purchases/orders/new'])">
        <span class="material-icons">add_shopping_cart</span> Nouvelle commande
      </button>
      <button class="quick-btn" (click)="router.navigate(['/purchases/invoices'])">
        <span class="material-icons">receipt_long</span> Factures fournisseurs
      </button>
      <button class="quick-btn" (click)="router.navigate(['/purchases/payments'])">
        <span class="material-icons">payments</span> Paiements
      </button>
      <button class="quick-btn" (click)="router.navigate(['/purchases/remises'])">
        <span class="material-icons">discount</span> Remises fournisseurs
      </button>
      <button class="quick-btn" (click)="router.navigate(['/purchases/enlevements'])">
        <span class="material-icons">local_shipping</span> Enl\xE8vements
      </button>
      <button class="quick-btn" (click)="router.navigate(['/purchases/rapports'])">
        <span class="material-icons">bar_chart</span> Rapports
      </button>
    </div>
  </div>

  }
</div>
`, styles: ['/* src/app/modules/purchases/components/dashboard/purchase-dashboard.component.scss */\n.dash {\n  padding: 24px;\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.dash-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.dash-title {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n}\n.dash-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 10px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: none;\n  border-radius: 9px;\n  background: #00A09D;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 16px;\n}\n.btn-primary:hover {\n  background: var(--accent);\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: 1.5px solid var(--border);\n  border-radius: 9px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n  background: var(--bg-hover);\n}\n.skeleton-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.skeleton-card {\n  height: 110px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 400% 100%;\n  animation: shimmer 1.4s ease infinite;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 14px;\n}\n@media (max-width: 1200px) {\n  .kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.kpi {\n  border-radius: 14px;\n  padding: 18px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.15s, box-shadow 0.15s;\n  position: relative;\n  overflow: hidden;\n}\n.kpi.clickable {\n  cursor: pointer;\n}\n.kpi.clickable:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.13);\n}\n.kpi.hero-red {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #f87171);\n  color: white;\n}\n.kpi.hero-teal {\n  background:\n    linear-gradient(\n      135deg,\n      #00A09D,\n      #2dd4bf);\n  color: white;\n}\n.kpi.hero-green {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e);\n  color: white;\n}\n.kpi.hero-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #60a5fa);\n  color: white;\n}\n.kpi.hero-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #a78bfa);\n  color: white;\n}\n.kpi.hero-gray {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #cbd5e1);\n  color: white;\n}\n.kpi-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap .material-icons {\n  font-size: 20px;\n  color: white;\n}\n.kpi-body {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  font-family: "Roboto Mono", monospace;\n  line-height: 1;\n}\n.kpi-pct {\n  font-size: 17px;\n  font-weight: 700;\n}\n.kpi-cur {\n  font-size: 11px;\n  opacity: 0.8;\n  margin-top: -1px;\n}\n.kpi-lbl {\n  font-size: 11px;\n  font-weight: 700;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 6px;\n}\n.kpi-hint {\n  font-size: 10px;\n  opacity: 0.7;\n  margin-top: 2px;\n}\n.kpi-arrow {\n  color: rgba(255, 255, 255, 0.45);\n  align-self: center;\n}\n.mini-progress {\n  height: 5px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 10px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.mini-bar {\n  height: 100%;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.secondary-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.sec-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  padding: 13px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-left: 4px solid #e5e7eb;\n  transition: all 0.15s;\n}\n.sec-card.clickable {\n  cursor: pointer;\n}\n.sec-card.clickable:hover {\n  border-left-color: #00A09D;\n  transform: translateX(3px);\n}\n.sec-icon {\n  font-size: 26px;\n  color: #00A09D;\n}\n.sec-body {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sec-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.sec-lbl {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.card-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 18px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.card-title .material-icons {\n  font-size: 17px;\n  color: #00A09D;\n}\n.btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: none;\n  color: #00A09D;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.btn-link .material-icons {\n  font-size: 14px;\n}\n.btn-link:hover {\n  background: var(--bg-hover);\n}\n.main-grid {\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 1000px) {\n  .main-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.side-col {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.dettes-total {\n  background: var(--danger-bg);\n  color: #dc2626;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.list-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 36px;\n  color: #16a34a;\n  font-size: 13px;\n  font-weight: 600;\n}\n.list-empty .material-icons {\n  font-size: 20px;\n}\n.dettes-list {\n  max-height: 340px;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.dettes-list::-webkit-scrollbar {\n  width: 4px;\n}\n.dettes-list::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 10px;\n}\n.dette-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--border-light);\n  gap: 12px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.dette-item:last-child {\n  border-bottom: none;\n}\n.dette-item:hover {\n  background: var(--bg-hover);\n}\n.dette-item.late {\n  border-left: 3px solid #f59e0b;\n}\n.dette-item.critical {\n  border-left: 3px solid #dc2626;\n  background: var(--danger-bg);\n}\n.dette-item.critical:hover {\n  background: var(--danger-bg);\n}\n.dette-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.dette-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f59e0b;\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.dette-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.dette-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.dette-meta {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.dette-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.dette-amount {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.aging-badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.aging-badge.aging-current {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.aging-badge.aging-late {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.aging-badge.aging-critical {\n  background: var(--danger-bg);\n  color: #dc2626;\n}\n.act-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.act-table th {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.act-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.act-table tbody tr {\n  cursor: pointer;\n}\n.act-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.act-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.act-table .r {\n  text-align: right;\n}\n.act-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n}\n.act-table .bold {\n  font-weight: 700;\n}\n.act-table .muted {\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.act-table .client-cell {\n  max-width: 130px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.act-table .du-pill {\n  color: #dc2626;\n  font-family: "Roboto Mono", monospace;\n}\n.order-list {\n  padding: 4px 0;\n}\n.order-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--border-light);\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.order-item:last-child {\n  border-bottom: none;\n}\n.order-item:hover {\n  background: var(--bg-hover);\n}\n.order-left {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.order-ref {\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-primary);\n}\n.order-partner {\n  font-size: 11px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.order-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.order-amount {\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.quick-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.quick-title .material-icons {\n  font-size: 15px;\n}\n.quick-row {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.quick-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.quick-btn .material-icons {\n  font-size: 18px;\n  color: #00A09D;\n}\n.quick-btn:hover {\n  border-color: #00A09D;\n  background: var(--bg-hover);\n  color: #00A09D;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n}\n.badge.badge-draft {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed {\n  background: var(--primary-subtle);\n  color: #1d4ed8;\n}\n.badge.badge-received {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.badge.badge-posted {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.badge.badge-paid {\n  background: var(--success-bg);\n  color: var(--success);\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=purchase-dashboard.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseDashboardComponent, { className: "PurchaseDashboardComponent", filePath: "app/modules/purchases/components/dashboard/purchase-dashboard.component.ts", lineNumber: 23 });
})();
export {
  PurchaseDashboardComponent
};
//# sourceMappingURL=chunk-IXQC35L7.js.map
