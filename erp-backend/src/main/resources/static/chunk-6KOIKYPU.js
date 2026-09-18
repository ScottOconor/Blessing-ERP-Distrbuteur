import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  require_exceljs_min
} from "./chunk-V5EAPQSQ.js";
import {
  E,
  autoTable
} from "./chunk-AJFTTPVD.js";
import "./chunk-7YWLATDR.js";
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
  DecimalPipe,
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
  ɵɵpureFunction0,
  ɵɵpureFunction5,
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
import {
  __async,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/modules/purchases/components/rapports/stats-achats/stats-achats.component.ts
var ExcelJS = __toESM(require_exceljs_min());
var _c0 = () => ({ k: "fournisseur", label: "Par fournisseur", icon: "store" });
var _c1 = () => ({ k: "category", label: "Par cat\xE9gorie", icon: "category" });
var _c2 = () => ({ k: "product", label: "Par produit", icon: "inventory_2" });
var _c3 = () => ({ k: "agent", label: "Par agent", icon: "badge" });
var _c4 = () => ({ k: "warehouse", label: "Par entrep\xF4t", icon: "warehouse" });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _forTrack0 = ($index, $item) => $item.k;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.supplierName;
var _forTrack3 = ($index, $item) => $item.productCode;
function StatsAchatsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 21);
    \u0275\u0275listener("click", function StatsAchatsComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function StatsAchatsComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd()();
  }
}
function StatsAchatsComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function StatsAchatsComponent_For_15_Template_button_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.groupBy = opt_r4.k);
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.groupBy === opt_r4.k);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4.label, " ");
  }
}
function StatsAchatsComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.name);
  }
}
function StatsAchatsComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", cat_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r6.name);
  }
}
function StatsAchatsComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r7.defaultCode ? "[" + p_r7.defaultCode + "] " : "", "", p_r7.name);
  }
}
function StatsAchatsComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", w_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r8.name);
  }
}
function StatsAchatsComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9ration\u2026 ");
  }
}
function StatsAchatsComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function StatsAchatsComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
function StatsAchatsComponent_Conditional_81_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 3);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun achat sur cette p\xE9riode avec ces filtres.");
    \u0275\u0275elementEnd()();
  }
}
function StatsAchatsComponent_Conditional_81_Conditional_1_For_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r9.supplierRef);
  }
}
function StatsAchatsComponent_Conditional_81_Conditional_1_For_36_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42)(1, "span", 3);
    \u0275\u0275text(2, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", group_r9.agent, " ");
  }
}
function StatsAchatsComponent_Conditional_81_Conditional_1_For_36_For_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r10.productCode);
  }
}
function StatsAchatsComponent_Conditional_81_Conditional_1_For_36_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, StatsAchatsComponent_Conditional_81_Conditional_1_For_36_For_26_Conditional_2_Template, 2, 1, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 51);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 51);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 51);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 52);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 51);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(l_r10.productCode ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r10.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, l_r10.qty, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, l_r10.prixAchat, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 13, l_r10.montantHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 16, l_r10.remise, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 19, l_r10.montantTTC, "1.0-0"));
  }
}
function StatsAchatsComponent_Conditional_81_Conditional_1_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 38)(2, "div", 39)(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, StatsAchatsComponent_Conditional_81_Conditional_1_For_36_Conditional_6_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, StatsAchatsComponent_Conditional_81_Conditional_1_For_36_Conditional_7_Template, 4, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43)(9, "table", 44)(10, "thead")(11, "tr")(12, "th", 45);
    \u0275\u0275text(13, "Produit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 46);
    \u0275\u0275text(17, "Px achat HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 46);
    \u0275\u0275text(19, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 46);
    \u0275\u0275text(21, "Remise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 46);
    \u0275\u0275text(23, "Montant TTC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, StatsAchatsComponent_Conditional_81_Conditional_1_For_36_For_26_Template, 19, 22, "tr", null, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "tfoot")(28, "tr", 47)(29, "td", 48);
    \u0275\u0275text(30, "Sous-total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 49);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "td");
    \u0275\u0275elementStart(35, "td", 49);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 49);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td", 49);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.groupLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r9.supplierName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r9.supplierRef ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r9.agent && ctx_r1.data.groupBy === "fournisseur" ? 7 : -1);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(group_r9.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 8, group_r9.totalQty, "1.0-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 11, group_r9.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 14, group_r9.totalRemise, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 17, group_r9.totalTTC, "1.0-0"));
  }
}
function StatsAchatsComponent_Conditional_81_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3, "Factures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27)(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 30)(12, "span", 28);
    \u0275\u0275text(13, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementStart(17, "small");
    \u0275\u0275text(18, "FCFA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 31)(20, "span", 28);
    \u0275\u0275text(21, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 29);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementStart(25, "small");
    \u0275\u0275text(26, "FCFA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 32)(28, "span", 28);
    \u0275\u0275text(29, "Total remise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 29);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementStart(33, "small");
    \u0275\u0275text(34, "FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275repeaterCreate(35, StatsAchatsComponent_Conditional_81_Conditional_1_For_36_Template, 44, 20, "div", 33, _forTrack2);
    \u0275\u0275elementStart(37, "div", 34)(38, "span", 35);
    \u0275\u0275text(39, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 36)(41, "div", 37)(42, "span");
    \u0275\u0275text(43, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 37)(48, "span");
    \u0275\u0275text(49, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 37)(54, "span");
    \u0275\u0275text(55, "Remise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 37)(60, "span");
    \u0275\u0275text(61, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "strong");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data.totalInvoices);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.groupLabel, "s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data.suppliers.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 10, ctx_r1.data.grandTotalHT, "1.0-0"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 13, ctx_r1.data.grandTotalTTC, "1.0-0"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(32, 16, ctx_r1.data.grandTotalRemise, "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.data.suppliers);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 19, ctx_r1.data.grandTotalQty, "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(52, 22, ctx_r1.data.grandTotalHT, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(58, 25, ctx_r1.data.grandTotalRemise, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(64, 28, ctx_r1.data.grandTotalTTC, "1.0-0"), " FCFA");
  }
}
function StatsAchatsComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StatsAchatsComponent_Conditional_81_Conditional_0_Template, 5, 0, "div", 25)(1, StatsAchatsComponent_Conditional_81_Conditional_1_Template, 65, 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.data || ctx_r1.data.suppliers.length === 0 ? 0 : 1);
  }
}
var StatsAchatsComponent = class _StatsAchatsComponent {
  get companyId() {
    return this.authService.getCompanyId();
  }
  get companyName() {
    return this.authService.getActiveCompany()?.name || "";
  }
  get generatedBy() {
    return this.authService.getUserDisplayName();
  }
  get groupLabel() {
    return this.GROUP_LABELS[this.groupBy] ?? this.groupBy;
  }
  constructor(purchaseService, authService, accountingService, stockService) {
    this.purchaseService = purchaseService;
    this.authService = authService;
    this.accountingService = accountingService;
    this.stockService = stockService;
    this.dateFrom = "";
    this.dateTo = "";
    this.groupBy = "fournisseur";
    this.selectedPartnerId = null;
    this.selectedCategoryId = null;
    this.selectedProductId = null;
    this.selectedWarehouseId = null;
    this.agentSearch = "";
    this.suppliers = [];
    this.categories = [];
    this.products = [];
    this.warehouses = [];
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.data = null;
    this.GROUP_LABELS = {
      fournisseur: "Fournisseur",
      category: "Cat\xE9gorie",
      product: "Produit",
      agent: "Agent",
      warehouse: "Entrep\xF4t"
    };
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
    const cid = this.companyId;
    this.accountingService.getPartners(cid).subscribe((p) => this.suppliers = p.filter((x) => x.type === "supplier" || x.type === "both"));
    this.stockService.getCategories(cid).subscribe((c) => this.categories = c);
    this.stockService.getProducts(cid).subscribe((p) => this.products = p);
    this.stockService.getWarehouses(cid).subscribe((w) => this.warehouses = w.filter((x) => x.active !== false));
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode.";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    const req = {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.companyId,
      groupBy: this.groupBy,
      partnerId: this.selectedPartnerId || null,
      categoryId: this.selectedCategoryId || null,
      productId: this.selectedProductId || null,
      createdBy: this.agentSearch.trim() || null,
      warehouseId: this.selectedWarehouseId || null
    };
    this.purchaseService.getStatsAchats(req).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration.";
      }
    });
  }
  reset() {
    this.selectedPartnerId = null;
    this.selectedCategoryId = null;
    this.selectedProductId = null;
    this.selectedWarehouseId = null;
    this.agentSearch = "";
    this.groupBy = "fournisseur";
    this.generated = false;
    this.data = null;
  }
  // ── Helpers ────────────────────────────────────────────────────────────────
  fmt(n) {
    return Math.round(n ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  fmtD(n, d = 1) {
    return (n ?? 0).toFixed(d);
  }
  get printDateLabel() {
    if (!this.dateFrom || !this.dateTo)
      return "";
    const f = (s) => {
      const [y, m, d] = s.split("-");
      return `${d}/${m}/${y}`;
    };
    return `${f(this.dateFrom)} au ${f(this.dateTo)}`;
  }
  get todayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  }
  // ── Export PDF ─────────────────────────────────────────────────────────────
  exportPdf() {
    if (!this.data)
      return;
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
    doc.setFontSize(11);
    doc.text("STATISTIQUES D'ACHATS", M, y);
    y += 5;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`Regroupement : ${this.groupLabel}   |   P\xE9riode : ${this.printDateLabel}   |   G\xE9n\xE9r\xE9 par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y);
    y += 7;
    const dark = [17, 24, 39];
    const gray = [241, 245, 249];
    const head = [this.groupLabel, "Produit", "Qt\xE9", "Px achat HT", "Montant HT", "Remise", "Montant TTC"];
    const body = [];
    for (const g of this.data.suppliers) {
      for (const l of g.lines) {
        body.push([g.supplierName, l.productName || l.productCode || "", this.fmtD(l.qty, 2), this.fmt(l.prixAchat), this.fmt(l.montantHT), this.fmt(l.remise), this.fmt(l.montantTTC)]);
      }
      body.push([
        { content: `Total ${g.supplierName}`, colSpan: 3, styles: { fontStyle: "bold", fillColor: gray, halign: "right" } },
        { content: "", styles: { fillColor: gray } },
        { content: this.fmt(g.totalHT), styles: { fontStyle: "bold", fillColor: gray, halign: "right" } },
        { content: this.fmt(g.totalRemise), styles: { fontStyle: "bold", fillColor: gray, halign: "right" } },
        { content: this.fmt(g.totalTTC), styles: { fontStyle: "bold", fillColor: gray, halign: "right" } }
      ]);
    }
    autoTable(doc, {
      startY: y,
      margin: { left: M, right: M },
      head: [head.map((h) => ({ content: h, styles: { halign: "center" } }))],
      body,
      theme: "plain",
      styles: { fontSize: 7, cellPadding: 2, textColor: dark, lineColor: [229, 231, 235], lineWidth: 0.1 },
      headStyles: { fillColor: [249, 250, 251], textColor: [80, 80, 80], fontStyle: "bold", fontSize: 7, lineColor: [209, 213, 219], lineWidth: 0.3 }
    });
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(180, 180, 180);
      doc.line(M, 198, pageW - M, 198);
      doc.text(`${this.companyName} \u2014 Blessing ERP`, M, 202);
      doc.text(`Page ${i}/${n}`, pageW - M, 202, { align: "right" });
    }
    doc.save(`stats-achats-${this.dateFrom}-${this.dateTo}.pdf`);
  }
  // ── Export Excel ────────────────────────────────────────────────────────────
  exportExcel() {
    return __async(this, null, function* () {
      if (!this.data)
        return;
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Stats Achats");
      const PURPLE = "FF714B67", WHITE = "FFFFFFFF", GRAY = "FFE9ECEF";
      const ncols = 7;
      ws.mergeCells(1, 1, 1, ncols);
      const t = ws.getCell("A1");
      t.value = `${this.companyName} \u2014 STATISTIQUES D'ACHATS \u2014 Regroupement : ${this.groupLabel} \u2014 ${this.printDateLabel}`;
      t.font = { bold: true, size: 12, color: { argb: PURPLE } };
      t.alignment = { horizontal: "center" };
      ws.mergeCells(2, 1, 2, ncols);
      const s = ws.getCell("A2");
      s.value = `G\xE9n\xE9r\xE9 par ${this.generatedBy} le ${this.todayLabel}`;
      s.font = { italic: true, size: 9, color: { argb: "777777" } };
      s.alignment = { horizontal: "center" };
      ws.addRow([]);
      const hdrs = [this.groupLabel, "Produit", "Qt\xE9", "Px achat HT", "Montant HT", "Remise", "Montant TTC"];
      const hRow = ws.addRow(hdrs);
      hRow.eachCell((c) => {
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: PURPLE } };
        c.font = { bold: true, color: { argb: WHITE }, size: 9 };
        c.alignment = { horizontal: "center", vertical: "middle" };
        c.border = { top: { style: "thin" }, bottom: { style: "thin" }, left: { style: "thin" }, right: { style: "thin" } };
      });
      for (const g of this.data.suppliers) {
        for (const l of g.lines) {
          ws.addRow([g.supplierName, l.productName || l.productCode || "", l.qty, l.prixAchat, l.montantHT, l.remise, l.montantTTC]).eachCell((c) => {
            c.font = { size: 9 };
            c.border = { bottom: { style: "hair", color: { argb: "FFCCCCCC" } } };
          });
        }
        ws.addRow([`Total ${g.supplierName}`, "", g.totalQty, "", g.totalHT, g.totalRemise, g.totalTTC]).eachCell((c) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GRAY } };
          c.font = { bold: true, size: 9 };
          c.border = { top: { style: "thin" }, bottom: { style: "thin" } };
        });
      }
      ws.addRow(["TOTAL G\xC9N\xC9RAL", "", this.data.grandTotalQty, "", this.data.grandTotalHT, this.data.grandTotalRemise, this.data.grandTotalTTC]).eachCell((c) => {
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: PURPLE } };
        c.font = { bold: true, color: { argb: WHITE }, size: 10 };
        c.border = { top: { style: "medium" }, bottom: { style: "medium" } };
      });
      ws.columns = [
        { width: 28 },
        { width: 30 },
        { width: 8 },
        { width: 12 },
        { width: 13 },
        { width: 12 },
        { width: 13 }
      ];
      const buf = yield wb.xlsx.writeBuffer();
      const blob = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `stats-achats-${this.groupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  static {
    this.\u0275fac = function StatsAchatsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatsAchatsComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(StockService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsAchatsComponent, selectors: [["app-stats-achats"]], decls: 82, vars: 27, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "export-actions"], [1, "filter-panel"], [1, "panel-section"], [1, "section-title"], [1, "group-chips"], [1, "group-chip", 3, "active"], [1, "input-row"], [1, "input-group"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "filters-grid"], [1, "form-input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "text", "placeholder", "Identifiant\u2026", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "panel-footer"], [1, "btn-reset", 3, "click"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-error"], [1, "btn-export", "btn-excel", 3, "click"], [1, "btn-export", "btn-pdf", 3, "click"], [1, "group-chip", 3, "click"], [1, "material-icons", "spin"], [1, "empty-state"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-label"], [1, "kpi-val"], [1, "kpi-card", "kpi-ca"], [1, "kpi-card", "kpi-ttc"], [1, "kpi-card", "kpi-remise"], [1, "group-block"], [1, "grand-total"], [1, "gt-label"], [1, "gt-items"], [1, "gt-item"], [1, "group-header"], [1, "group-name"], [1, "group-type-badge"], [1, "ref-tag"], [1, "agent-tag"], [1, "table-wrapper"], [1, "data-table"], [1, "col-prod"], [1, "col-num"], [1, "sub-row"], [1, "sub-label"], [1, "num", "bold"], [1, "code-tag"], [1, "num"], [1, "num", "muted"]], template: function StatsAchatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "shopping_cart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Statistiques d'achats ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, StatsAchatsComponent_Conditional_6_Template, 9, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 3);
        \u0275\u0275text(11, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Regroupement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275repeaterCreate(14, StatsAchatsComponent_For_15_Template, 4, 4, "button", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 6)(17, "div", 7)(18, "span", 3);
        \u0275\u0275text(19, "date_range");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " P\xE9riode ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "label");
        \u0275\u0275text(24, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function StatsAchatsComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 11)(27, "label");
        \u0275\u0275text(28, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function StatsAchatsComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 6)(31, "div", 7)(32, "span", 3);
        \u0275\u0275text(33, "filter_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " Filtres optionnels ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 13)(36, "div", 11)(37, "label");
        \u0275\u0275text(38, "Fournisseur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsAchatsComponent_Template_select_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPartnerId, $event) || (ctx.selectedPartnerId = $event);
          return $event;
        });
        \u0275\u0275elementStart(40, "option", 15);
        \u0275\u0275text(41, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(42, StatsAchatsComponent_For_43_Template, 2, 2, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 11)(45, "label");
        \u0275\u0275text(46, "Cat\xE9gorie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsAchatsComponent_Template_select_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategoryId, $event) || (ctx.selectedCategoryId = $event);
          return $event;
        });
        \u0275\u0275elementStart(48, "option", 15);
        \u0275\u0275text(49, "\u2014 Toutes \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(50, StatsAchatsComponent_For_51_Template, 2, 2, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 11)(53, "label");
        \u0275\u0275text(54, "Produit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsAchatsComponent_Template_select_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedProductId, $event) || (ctx.selectedProductId = $event);
          return $event;
        });
        \u0275\u0275elementStart(56, "option", 15);
        \u0275\u0275text(57, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(58, StatsAchatsComponent_For_59_Template, 2, 3, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 11)(61, "label");
        \u0275\u0275text(62, "Entrep\xF4t");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsAchatsComponent_Template_select_ngModelChange_63_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedWarehouseId, $event) || (ctx.selectedWarehouseId = $event);
          return $event;
        });
        \u0275\u0275elementStart(64, "option", 15);
        \u0275\u0275text(65, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(66, StatsAchatsComponent_For_67_Template, 2, 2, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 11)(69, "label");
        \u0275\u0275text(70, "Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function StatsAchatsComponent_Template_input_ngModelChange_71_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.agentSearch, $event) || (ctx.agentSearch = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "div", 17)(73, "button", 18);
        \u0275\u0275listener("click", function StatsAchatsComponent_Template_button_click_73_listener() {
          return ctx.reset();
        });
        \u0275\u0275elementStart(74, "span", 3);
        \u0275\u0275text(75, "restart_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, " R\xE9initialiser ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 19);
        \u0275\u0275listener("click", function StatsAchatsComponent_Template_button_click_77_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(78, StatsAchatsComponent_Conditional_78_Template, 3, 0)(79, StatsAchatsComponent_Conditional_79_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(80, StatsAchatsComponent_Conditional_80_Template, 4, 1, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(81, StatsAchatsComponent_Conditional_81_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.generated && ctx.data && ctx.data.suppliers.length > 0 ? 6 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(\u0275\u0275pureFunction5(21, _c5, \u0275\u0275pureFunction0(16, _c0), \u0275\u0275pureFunction0(17, _c1), \u0275\u0275pureFunction0(18, _c2), \u0275\u0275pureFunction0(19, _c3), \u0275\u0275pureFunction0(20, _c4)));
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPartnerId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.suppliers);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoryId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedProductId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.products);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedWarehouseId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.warehouses);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.agentSearch);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 78 : 79);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 80 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated ? 81 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%] {\n  background: #217346;\n  color: white;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%]:hover {\n  background: #1a5c38;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.filter-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  margin-bottom: 18px;\n  overflow: hidden;\n}\n.panel-section[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  border-bottom: 1px solid var(--border-light);\n}\n.panel-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin-bottom: 12px;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.group-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.group-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 30px;\n  border: 2px solid var(--border);\n  background: var(--bg-elevated);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.group-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: var(--bg-surface);\n}\n.group-chip.active[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: var(--accent);\n  color: white;\n}\n.group-chip.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 1100px) {\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  outline: none;\n  min-width: 0;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.panel-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  background: var(--bg-elevated);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-reset[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-reset[_ngcontent-%COMP%]:hover {\n  background: var(--bg-page);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 26px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 22px 14px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  gap: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 130px;\n  max-width: 220px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border-left: 4px solid #e5e7eb;\n}\n.kpi-card.kpi-ca[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n}\n.kpi-card.kpi-ttc[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.kpi-card.kpi-remise[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.kpi-val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.kpi-val.neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.group-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 18px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.group-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.group-type-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--accent);\n  background: var(--accent-light);\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ref-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 8px;\n  font-weight: 400;\n}\n.agent-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.agent-tag[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   .col-prod[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.data-table[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: right;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n}\n.data-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.data-table[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.data-table[_ngcontent-%COMP%]   .neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.sub-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-size: 12px;\n  border-top: 1px solid var(--border-light);\n  border-bottom: none;\n}\n.sub-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.code-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 6px;\n  margin-right: 5px;\n  font-family: "Roboto Mono", monospace;\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n  margin-bottom: 24px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.gt-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  flex-wrap: wrap;\n}\n.gt-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item[_ngcontent-%COMP%]   strong.neg[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=stats-achats.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsAchatsComponent, [{
    type: Component,
    args: [{ selector: "app-stats-achats", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550\u2550 EN-T\xCATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">shopping_cart</span>
      Statistiques d'achats
    </h1>
    @if (generated && data && data.suppliers.length > 0) {
      <div class="export-actions">
        <button class="btn-export btn-excel" (click)="exportExcel()">
          <span class="material-icons">table_view</span> Excel
        </button>
        <button class="btn-export btn-pdf" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> PDF
        </button>
      </div>
    }
  </div>

  <!-- \u2550\u2550\u2550 PANNEAU FILTRES / REGROUPEMENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filter-panel">

    <!-- Regroupement -->
    <div class="panel-section">
      <div class="section-title">
        <span class="material-icons">account_tree</span> Regroupement
      </div>
      <div class="group-chips">
        @for (opt of [
          {k:'fournisseur', label:'Par fournisseur', icon:'store'},
          {k:'category',    label:'Par cat\xE9gorie',    icon:'category'},
          {k:'product',     label:'Par produit',      icon:'inventory_2'},
          {k:'agent',       label:'Par agent',        icon:'badge'},
          {k:'warehouse',   label:'Par entrep\xF4t',     icon:'warehouse'}
        ]; track opt.k) {
          <button class="group-chip" [class.active]="groupBy === opt.k" (click)="groupBy = opt.k">
            <span class="material-icons">{{ opt.icon }}</span> {{ opt.label }}
          </button>
        }
      </div>
    </div>

    <!-- P\xE9riode -->
    <div class="panel-section">
      <div class="section-title">
        <span class="material-icons">date_range</span> P\xE9riode
      </div>
      <div class="input-row">
        <div class="input-group">
          <label>Du</label>
          <input type="date" class="form-input" [(ngModel)]="dateFrom">
        </div>
        <div class="input-group">
          <label>Au</label>
          <input type="date" class="form-input" [(ngModel)]="dateTo">
        </div>
      </div>
    </div>

    <!-- Filtres optionnels -->
    <div class="panel-section">
      <div class="section-title">
        <span class="material-icons">filter_alt</span> Filtres optionnels
      </div>
      <div class="filters-grid">
        <div class="input-group">
          <label>Fournisseur</label>
          <select class="form-input" [(ngModel)]="selectedPartnerId">
            <option [ngValue]="null">\u2014 Tous \u2014</option>
            @for (s of suppliers; track s.id) {
              <option [ngValue]="s.id">{{ s.name }}</option>
            }
          </select>
        </div>
        <div class="input-group">
          <label>Cat\xE9gorie</label>
          <select class="form-input" [(ngModel)]="selectedCategoryId">
            <option [ngValue]="null">\u2014 Toutes \u2014</option>
            @for (cat of categories; track cat.id) {
              <option [ngValue]="cat.id">{{ cat.name }}</option>
            }
          </select>
        </div>
        <div class="input-group">
          <label>Produit</label>
          <select class="form-input" [(ngModel)]="selectedProductId">
            <option [ngValue]="null">\u2014 Tous \u2014</option>
            @for (p of products; track p.id) {
              <option [ngValue]="p.id">{{ p.defaultCode ? '[' + p.defaultCode + '] ' : '' }}{{ p.name }}</option>
            }
          </select>
        </div>
        <div class="input-group">
          <label>Entrep\xF4t</label>
          <select class="form-input" [(ngModel)]="selectedWarehouseId">
            <option [ngValue]="null">\u2014 Tous \u2014</option>
            @for (w of warehouses; track w.id) {
              <option [ngValue]="w.id">{{ w.name }}</option>
            }
          </select>
        </div>
        <div class="input-group">
          <label>Agent</label>
          <input type="text" class="form-input" [(ngModel)]="agentSearch" placeholder="Identifiant\u2026">
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="panel-footer">
      <button class="btn-reset" (click)="reset()">
        <span class="material-icons">restart_alt</span> R\xE9initialiser
      </button>
      <button class="btn-generate" (click)="generate()" [disabled]="loading">
        @if (loading) {
          <span class="material-icons spin">hourglass_empty</span> G\xE9n\xE9ration\u2026
        } @else {
          <span class="material-icons">play_arrow</span> G\xE9n\xE9rer
        }
      </button>
    </div>

    @if (errorMsg) {
      <div class="alert-error">
        <span class="material-icons">error_outline</span> {{ errorMsg }}
      </div>
    }
  </div>

  <!-- \u2550\u2550\u2550 R\xC9SULTATS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (generated) {
    @if (!data || data.suppliers.length === 0) {
      <div class="empty-state">
        <span class="material-icons">search_off</span>
        <p>Aucun achat sur cette p\xE9riode avec ces filtres.</p>
      </div>
    } @else {

      <!-- KPIs -->
      <div class="kpi-row">
        <div class="kpi-card">
          <span class="kpi-label">Factures</span>
          <span class="kpi-val">{{ data.totalInvoices }}</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-label">{{ groupLabel }}s</span>
          <span class="kpi-val">{{ data.suppliers.length }}</span>
        </div>
        <div class="kpi-card kpi-ca">
          <span class="kpi-label">Montant HT</span>
          <span class="kpi-val">{{ data.grandTotalHT | number:'1.0-0' }} <small>FCFA</small></span>
        </div>
        <div class="kpi-card kpi-ttc">
          <span class="kpi-label">Montant TTC</span>
          <span class="kpi-val">{{ data.grandTotalTTC | number:'1.0-0' }} <small>FCFA</small></span>
        </div>
        <div class="kpi-card kpi-remise">
          <span class="kpi-label">Total remise</span>
          <span class="kpi-val">{{ data.grandTotalRemise | number:'1.0-0' }} <small>FCFA</small></span>
        </div>
      </div>

      <!-- Tableau par groupe -->
      @for (group of data.suppliers; track group.supplierName) {
        <div class="group-block">
          <div class="group-header">
            <div class="group-name">
              <span class="group-type-badge">{{ groupLabel }}</span>
              {{ group.supplierName }}
              @if (group.supplierRef) { <span class="ref-tag">{{ group.supplierRef }}</span> }
            </div>
            @if (group.agent && data.groupBy === 'fournisseur') {
              <span class="agent-tag">
                <span class="material-icons">badge</span> {{ group.agent }}
              </span>
            }
          </div>

          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th class="col-prod">Produit</th>
                  <th class="col-num">Qt\xE9</th>
                  <th class="col-num">Px achat HT</th>
                  <th class="col-num">Montant HT</th>
                  <th class="col-num">Remise</th>
                  <th class="col-num">Montant TTC</th>
                </tr>
              </thead>
              <tbody>
                @for (l of group.lines; track l.productCode) {
                  <tr>
                    <td>
                      @if (l.productCode) { <span class="code-tag">{{ l.productCode }}</span> }
                      {{ l.productName }}
                    </td>
                    <td class="num">{{ l.qty | number:'1.0-2' }}</td>
                    <td class="num">{{ l.prixAchat | number:'1.0-0' }}</td>
                    <td class="num">{{ l.montantHT | number:'1.0-0' }}</td>
                    <td class="num muted">{{ l.remise | number:'1.0-0' }}</td>
                    <td class="num">{{ l.montantTTC | number:'1.0-0' }}</td>
                  </tr>
                }
              </tbody>
              <tfoot>
                <tr class="sub-row">
                  <td class="sub-label">Sous-total</td>
                  <td class="num bold">{{ group.totalQty | number:'1.0-2' }}</td>
                  <td></td>
                  <td class="num bold">{{ group.totalHT | number:'1.0-0' }}</td>
                  <td class="num bold">{{ group.totalRemise | number:'1.0-0' }}</td>
                  <td class="num bold">{{ group.totalTTC | number:'1.0-0' }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      }

      <!-- Total g\xE9n\xE9ral -->
      <div class="grand-total">
        <span class="gt-label">TOTAL G\xC9N\xC9RAL</span>
        <div class="gt-items">
          <div class="gt-item">
            <span>Qt\xE9</span>
            <strong>{{ data.grandTotalQty | number:'1.0-2' }}</strong>
          </div>
          <div class="gt-item">
            <span>Montant HT</span>
            <strong>{{ data.grandTotalHT | number:'1.0-0' }} FCFA</strong>
          </div>
          <div class="gt-item">
            <span>Remise</span>
            <strong>{{ data.grandTotalRemise | number:'1.0-0' }} FCFA</strong>
          </div>
          <div class="gt-item">
            <span>Montant TTC</span>
            <strong>{{ data.grandTotalTTC | number:'1.0-0' }} FCFA</strong>
          </div>
        </div>
      </div>

    }
  }

</div>
`, styles: ['/* src/app/modules/purchases/components/rapports/stats-achats/stats-achats.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-title .material-icons {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-export {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export .material-icons {\n  font-size: 16px;\n}\n.btn-export.btn-excel {\n  background: #217346;\n  color: white;\n}\n.btn-export.btn-excel:hover {\n  background: #1a5c38;\n}\n.btn-export.btn-pdf {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf:hover {\n  background: #b91c1c;\n}\n.filter-panel {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  margin-bottom: 18px;\n  overflow: hidden;\n}\n.panel-section {\n  padding: 16px 22px;\n  border-bottom: 1px solid var(--border-light);\n}\n.panel-section:last-of-type {\n  border-bottom: none;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin-bottom: 12px;\n}\n.section-title .material-icons {\n  font-size: 14px;\n}\n.group-chips {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.group-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 30px;\n  border: 2px solid var(--border);\n  background: var(--bg-elevated);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip .material-icons {\n  font-size: 15px;\n}\n.group-chip:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: var(--bg-surface);\n}\n.group-chip.active {\n  border-color: var(--accent);\n  background: var(--accent);\n  color: white;\n}\n.group-chip.active .material-icons {\n  color: white;\n}\n.input-row {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filters-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 1100px) {\n  .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .filters-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.input-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-input {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  outline: none;\n  min-width: 0;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.1);\n}\n.form-input::placeholder {\n  color: var(--text-muted);\n}\n.form-input option {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.panel-footer {\n  padding: 14px 22px;\n  background: var(--bg-elevated);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-reset .material-icons {\n  font-size: 15px;\n}\n.btn-reset:hover {\n  background: var(--bg-page);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 26px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 22px 14px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.alert-error .material-icons {\n  font-size: 15px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  gap: 14px;\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.kpi-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.kpi-card {\n  flex: 1;\n  min-width: 130px;\n  max-width: 220px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border-left: 4px solid #e5e7eb;\n}\n.kpi-card.kpi-ca {\n  border-color: var(--accent);\n}\n.kpi-card.kpi-ttc {\n  border-color: #f59e0b;\n}\n.kpi-card.kpi-remise {\n  border-color: #6366f1;\n}\n.kpi-label {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.kpi-val {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.kpi-val small {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.kpi-val.neg {\n  color: var(--danger);\n}\n.group-block {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 18px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.group-name {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.group-type-badge {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--accent);\n  background: var(--accent-light);\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ref-tag {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 8px;\n  font-weight: 400;\n}\n.agent-tag {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.agent-tag .material-icons {\n  font-size: 14px;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 8px 13px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 8px 13px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table .col-prod {\n  min-width: 180px;\n}\n.data-table .col-num {\n  width: 100px;\n  text-align: right;\n  white-space: nowrap;\n}\n.data-table .num {\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n}\n.data-table .bold {\n  font-weight: 700;\n}\n.data-table .muted {\n  color: var(--text-muted);\n}\n.data-table .pos {\n  color: #16a34a;\n}\n.data-table .neg {\n  color: var(--danger);\n}\n.sub-row td {\n  background: var(--bg-elevated);\n  font-size: 12px;\n  border-top: 1px solid var(--border-light);\n  border-bottom: none;\n}\n.sub-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.code-tag {\n  display: inline-block;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 6px;\n  margin-right: 5px;\n  font-family: "Roboto Mono", monospace;\n}\n.grand-total {\n  background: var(--accent);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n  margin-bottom: 24px;\n}\n.gt-label {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.gt-items {\n  display: flex;\n  gap: 28px;\n  flex-wrap: wrap;\n}\n.gt-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item span {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item strong {\n  font-size: 16px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item strong.neg {\n  opacity: 0.8;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=stats-achats.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AuthService }, { type: AccountingService }, { type: StockService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsAchatsComponent, { className: "StatsAchatsComponent", filePath: "app/modules/purchases/components/rapports/stats-achats/stats-achats.component.ts", lineNumber: 20 });
})();
export {
  StatsAchatsComponent
};
//# sourceMappingURL=chunk-6KOIKYPU.js.map
