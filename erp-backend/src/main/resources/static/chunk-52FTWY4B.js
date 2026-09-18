import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
import {
  require_exceljs_min
} from "./chunk-V5EAPQSQ.js";
import {
  E,
  autoTable
} from "./chunk-AJFTTPVD.js";
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

// src/app/modules/sales/components/reports/stats-ventes/stats-ventes.component.ts
var ExcelJS = __toESM(require_exceljs_min());
var _c0 = () => ({ k: "client", label: "Par client", icon: "person" });
var _c1 = () => ({ k: "category", label: "Par cat\xE9gorie", icon: "category" });
var _c2 = () => ({ k: "product", label: "Par produit", icon: "inventory_2" });
var _c3 = () => ({ k: "vendeur", label: "Par vendeur", icon: "badge" });
var _c4 = () => ({ k: "warehouse", label: "Par entrep\xF4t", icon: "warehouse" });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _forTrack0 = ($index, $item) => $item.k;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.clientName;
var _forTrack3 = ($index, $item) => $item.productCode;
function StatsVentesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 22);
    \u0275\u0275listener("click", function StatsVentesComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function StatsVentesComponent_Conditional_6_Template_button_click_5_listener() {
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
function StatsVentesComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function StatsVentesComponent_For_15_Template_button_click_0_listener() {
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
function StatsVentesComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.name);
  }
}
function StatsVentesComponent_For_51_Template(rf, ctx) {
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
function StatsVentesComponent_For_59_Template(rf, ctx) {
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
function StatsVentesComponent_For_67_Template(rf, ctx) {
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
function StatsVentesComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9ration\u2026 ");
  }
}
function StatsVentesComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function StatsVentesComponent_Conditional_80_Template(rf, ctx) {
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
function StatsVentesComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 26)(2, "span", 3);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Colonnes :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 27)(6, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Conditional_81_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showCA, $event) || (ctx_r1.showCA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " CA HT / CA TTC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 27)(9, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Conditional_81_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showCout, $event) || (ctx_r1.showCout = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Co\xFBt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 27)(12, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Conditional_81_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showMarge, $event) || (ctx_r1.showMarge = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Marge ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.showCA);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.showCA);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.showCout);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.showCout);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.showMarge);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.showMarge);
  }
}
function StatsVentesComponent_Conditional_82_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 3);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune vente sur cette p\xE9riode avec ces filtres.");
    \u0275\u0275elementEnd()();
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 32);
    \u0275\u0275text(2, "CA HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "FCFA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 42)(9, "span", 32);
    \u0275\u0275text(10, "CA TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 33);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15, "FCFA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, ctx_r1.data.grandTotalHT, "1.0-0"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 5, ctx_r1.data.grandTotalTTC, "1.0-0"), " ");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 32);
    \u0275\u0275text(2, "Co\xFBt total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "FCFA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r1.data.grandTotalCout, "1.0-0"), " ");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 32);
    \u0275\u0275text(2, "Marge HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "FCFA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("neg", ctx_r1.data.grandTotalMargeHT < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 3, ctx_r1.data.grandTotalMargeHT, "1.0-0"), " ");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r10.clientRef);
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47)(1, "span", 3);
    \u0275\u0275text(2, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", group_r10.vendeur, " ");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, "CA HT");
    \u0275\u0275elementEnd();
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, "Co\xFBt");
    \u0275\u0275elementEnd();
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, "Marge HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 55);
    \u0275\u0275text(3, "Taux %");
    \u0275\u0275elementEnd();
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 51);
    \u0275\u0275text(1, "CA TTC");
    \u0275\u0275elementEnd();
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r11.productCode);
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, l_r11.caHT, "1.0-0"));
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, l_r11.cout, "1.0-0"));
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 58);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("pos", l_r11.margeHT > 0)("neg", l_r11.margeHT < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 6, l_r11.margeHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 9, l_r11.tauxMarge, "1.1-1"), " %");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, l_r11.caTTC, "1.0-0"));
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_2_Template, 2, 1, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 57);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 57);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_10_Template, 3, 4, "td", 57);
    \u0275\u0275conditionalCreate(11, StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_11_Template, 3, 4, "td", 58);
    \u0275\u0275conditionalCreate(12, StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_12_Template, 6, 12);
    \u0275\u0275conditionalCreate(13, StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Conditional_13_Template, 3, 4, "td", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(l_r11.productCode ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r11.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, l_r11.qty, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 11, l_r11.prixVente, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showCA ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCout ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showMarge ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCA ? 13 : -1);
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, group_r10.totalHT, "1.0-0"));
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, group_r10.totalCout, "1.0-0"));
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "td");
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("pos", group_r10.totalMargeHT > 0)("neg", group_r10.totalMargeHT < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 5, group_r10.totalMargeHT, "1.0-0"));
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, group_r10.totalTTC, "1.0-0"));
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 43)(2, "div", 44)(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_6_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_7_Template, 4, 1, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 48)(9, "table", 49)(10, "thead")(11, "tr")(12, "th", 50);
    \u0275\u0275text(13, "Produit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 51);
    \u0275\u0275text(15, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 51);
    \u0275\u0275text(17, "Px vente HT");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_18_Template, 2, 0, "th", 51);
    \u0275\u0275conditionalCreate(19, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_19_Template, 2, 0, "th", 51);
    \u0275\u0275conditionalCreate(20, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_20_Template, 4, 0);
    \u0275\u0275conditionalCreate(21, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_21_Template, 2, 0, "th", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, StatsVentesComponent_Conditional_82_Conditional_1_For_15_For_24_Template, 14, 14, "tr", null, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "tfoot")(26, "tr", 52)(27, "td", 53);
    \u0275\u0275text(28, "Sous-total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 54);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "td");
    \u0275\u0275conditionalCreate(33, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_33_Template, 3, 4, "td", 54);
    \u0275\u0275conditionalCreate(34, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_34_Template, 3, 4, "td", 54);
    \u0275\u0275conditionalCreate(35, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_35_Template, 4, 8);
    \u0275\u0275conditionalCreate(36, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Conditional_36_Template, 3, 4, "td", 54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.groupLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r10.clientName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r10.clientRef ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r10.vendeur && ctx_r1.data.groupBy === "client" ? 7 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.showCA ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCout ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showMarge ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCA ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r10.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 13, group_r10.totalQty, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showCA ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCout ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showMarge ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCA ? 36 : -1);
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span");
    \u0275\u0275text(2, "CA HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r1.data.grandTotalHT, "1.0-0"), " FCFA");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span");
    \u0275\u0275text(2, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r1.data.grandTotalCout, "1.0-0"), " FCFA");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span");
    \u0275\u0275text(2, "Marge HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("neg", ctx_r1.data.grandTotalMargeHT < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 3, ctx_r1.data.grandTotalMargeHT, "1.0-0"), " FCFA");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span");
    \u0275\u0275text(2, "CA TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r1.data.grandTotalTTC, "1.0-0"), " FCFA");
  }
}
function StatsVentesComponent_Conditional_82_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3, "Factures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, StatsVentesComponent_Conditional_82_Conditional_1_Conditional_11_Template, 16, 8);
    \u0275\u0275conditionalCreate(12, StatsVentesComponent_Conditional_82_Conditional_1_Conditional_12_Template, 8, 4, "div", 34);
    \u0275\u0275conditionalCreate(13, StatsVentesComponent_Conditional_82_Conditional_1_Conditional_13_Template, 8, 6, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, StatsVentesComponent_Conditional_82_Conditional_1_For_15_Template, 37, 16, "div", 36, _forTrack2);
    \u0275\u0275elementStart(16, "div", 37)(17, "span", 38);
    \u0275\u0275text(18, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 39)(20, "div", 40)(21, "span");
    \u0275\u0275text(22, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, StatsVentesComponent_Conditional_82_Conditional_1_Conditional_26_Template, 6, 4, "div", 40);
    \u0275\u0275conditionalCreate(27, StatsVentesComponent_Conditional_82_Conditional_1_Conditional_27_Template, 6, 4, "div", 40);
    \u0275\u0275conditionalCreate(28, StatsVentesComponent_Conditional_82_Conditional_1_Conditional_28_Template, 6, 6, "div", 40);
    \u0275\u0275conditionalCreate(29, StatsVentesComponent_Conditional_82_Conditional_1_Conditional_29_Template, 6, 4, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data.totalInvoices);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.groupLabel, "s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data.clients.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCA ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCout ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showMarge ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.data.clients);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 11, ctx_r1.data.grandTotalQty, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showCA ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCout ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showMarge ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCA ? 29 : -1);
  }
}
function StatsVentesComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StatsVentesComponent_Conditional_82_Conditional_0_Template, 5, 0, "div", 29)(1, StatsVentesComponent_Conditional_82_Conditional_1_Template, 30, 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.data || ctx_r1.data.clients.length === 0 ? 0 : 1);
  }
}
var StatsVentesComponent = class _StatsVentesComponent {
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
  constructor(salesService, authService, stockService) {
    this.salesService = salesService;
    this.authService = authService;
    this.stockService = stockService;
    this.dateFrom = "";
    this.dateTo = "";
    this.groupBy = "client";
    this.selectedPartnerId = null;
    this.selectedCategoryId = null;
    this.selectedProductId = null;
    this.selectedWarehouseId = null;
    this.vendeurSearch = "";
    this.clients = [];
    this.categories = [];
    this.products = [];
    this.warehouses = [];
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.data = null;
    this.showCA = true;
    this.showCout = true;
    this.showMarge = true;
    this.GROUP_LABELS = {
      client: "Client",
      category: "Cat\xE9gorie",
      product: "Produit",
      vendeur: "Vendeur",
      warehouse: "Entrep\xF4t"
    };
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
    const cid = this.companyId;
    this.salesService.getClients(cid).subscribe((c) => this.clients = c);
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
      createdBy: this.vendeurSearch.trim() || null,
      warehouseId: this.selectedWarehouseId || null
    };
    this.salesService.getStatsVentes(req).subscribe({
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
    this.vendeurSearch = "";
    this.groupBy = "client";
    this.generated = false;
    this.data = null;
  }
  // ── Helpers ────────────────────────────────────────────────────────────────
  fmt(n) {
    return Math.round(n ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\xA0");
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
    doc.text("STATISTIQUES DE VENTES", M, y);
    y += 5;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`Regroupement : ${this.groupLabel}   |   P\xE9riode : ${this.printDateLabel}   |   G\xE9n\xE9r\xE9 par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y);
    y += 7;
    const dark = [17, 24, 39];
    const gray = [241, 245, 249];
    const head = [this.groupLabel, "Produit", "Qt\xE9", "Px vente HT"];
    if (this.showCA)
      head.push("CA HT");
    if (this.showCout)
      head.push("Co\xFBt");
    if (this.showMarge)
      head.push("Marge HT", "Tx %");
    if (this.showCA)
      head.push("CA TTC");
    const body = [];
    for (const g of this.data.clients) {
      for (const l of g.lines) {
        const row = [g.clientName, l.productName || l.productCode || "", this.fmtD(l.qty, 2), this.fmt(l.prixVente)];
        if (this.showCA)
          row.push(this.fmt(l.caHT));
        if (this.showCout)
          row.push(this.fmt(l.cout));
        if (this.showMarge)
          row.push(this.fmt(l.margeHT), this.fmtD(l.tauxMarge) + " %");
        if (this.showCA)
          row.push(this.fmt(l.caTTC));
        body.push(row);
      }
      const sub = [
        { content: `Total ${g.clientName}`, colSpan: 3, styles: { fontStyle: "bold", fillColor: gray, halign: "right" } },
        { content: "", styles: { fillColor: gray } }
      ];
      if (this.showCA)
        sub.push({ content: this.fmt(g.totalHT), styles: { fontStyle: "bold", fillColor: gray, halign: "right" } });
      if (this.showCout)
        sub.push({ content: this.fmt(g.totalCout), styles: { fontStyle: "bold", fillColor: gray, halign: "right" } });
      if (this.showMarge)
        sub.push({ content: this.fmt(g.totalMargeHT), styles: { fontStyle: "bold", fillColor: gray, halign: "right" } }, { content: "", styles: { fillColor: gray } });
      if (this.showCA)
        sub.push({ content: this.fmt(g.totalTTC), styles: { fontStyle: "bold", fillColor: gray, halign: "right" } });
      body.push(sub);
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
    doc.save(`stats-ventes-${this.dateFrom}-${this.dateTo}.pdf`);
  }
  // ── Export Excel ────────────────────────────────────────────────────────────
  exportExcel() {
    return __async(this, null, function* () {
      if (!this.data)
        return;
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Stats Ventes");
      const PURPLE = "FF714B67", WHITE = "FFFFFFFF", GRAY = "FFE9ECEF";
      const ncols = 4 + (this.showCA ? 2 : 0) + (this.showCout ? 1 : 0) + (this.showMarge ? 2 : 0);
      ws.mergeCells(1, 1, 1, ncols);
      const t = ws.getCell("A1");
      t.value = `${this.companyName} \u2014 STATISTIQUES DE VENTES \u2014 Regroupement : ${this.groupLabel} \u2014 ${this.printDateLabel}`;
      t.font = { bold: true, size: 12, color: { argb: PURPLE } };
      t.alignment = { horizontal: "center" };
      ws.mergeCells(2, 1, 2, ncols);
      const s = ws.getCell("A2");
      s.value = `G\xE9n\xE9r\xE9 par ${this.generatedBy} le ${this.todayLabel}`;
      s.font = { italic: true, size: 9, color: { argb: "777777" } };
      s.alignment = { horizontal: "center" };
      ws.addRow([]);
      const hdrs = [this.groupLabel, "Produit", "Qt\xE9", "Px vente HT"];
      if (this.showCA)
        hdrs.push("CA HT");
      if (this.showCout)
        hdrs.push("Co\xFBt");
      if (this.showMarge)
        hdrs.push("Marge HT", "Taux %");
      if (this.showCA)
        hdrs.push("CA TTC");
      const hRow = ws.addRow(hdrs);
      hRow.eachCell((c) => {
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: PURPLE } };
        c.font = { bold: true, color: { argb: WHITE }, size: 9 };
        c.alignment = { horizontal: "center", vertical: "middle" };
        c.border = { top: { style: "thin" }, bottom: { style: "thin" }, left: { style: "thin" }, right: { style: "thin" } };
      });
      for (const g of this.data.clients) {
        for (const l of g.lines) {
          const row = [g.clientName, l.productName || l.productCode || "", l.qty, l.prixVente];
          if (this.showCA)
            row.push(l.caHT);
          if (this.showCout)
            row.push(l.cout);
          if (this.showMarge)
            row.push(l.margeHT, l.tauxMarge);
          if (this.showCA)
            row.push(l.caTTC);
          ws.addRow(row).eachCell((c) => {
            c.font = { size: 9 };
            c.border = { bottom: { style: "hair", color: { argb: "FFCCCCCC" } } };
          });
        }
        const sub = [`Total ${g.clientName}`, "", g.totalQty, ""];
        if (this.showCA)
          sub.push(g.totalHT);
        if (this.showCout)
          sub.push(g.totalCout);
        if (this.showMarge)
          sub.push(g.totalMargeHT, "");
        if (this.showCA)
          sub.push(g.totalTTC);
        ws.addRow(sub).eachCell((c) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GRAY } };
          c.font = { bold: true, size: 9 };
          c.border = { top: { style: "thin" }, bottom: { style: "thin" } };
        });
      }
      const tot = ["TOTAL G\xC9N\xC9RAL", "", this.data.grandTotalQty, ""];
      if (this.showCA)
        tot.push(this.data.grandTotalHT);
      if (this.showCout)
        tot.push(this.data.grandTotalCout);
      if (this.showMarge)
        tot.push(this.data.grandTotalMargeHT, "");
      if (this.showCA)
        tot.push(this.data.grandTotalTTC);
      ws.addRow(tot).eachCell((c) => {
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: PURPLE } };
        c.font = { bold: true, color: { argb: WHITE }, size: 10 };
        c.border = { top: { style: "medium" }, bottom: { style: "medium" } };
      });
      ws.columns = [
        { width: 28 },
        { width: 30 },
        { width: 8 },
        { width: 12 },
        ...this.showCA ? [{ width: 13 }] : [],
        ...this.showCout ? [{ width: 13 }] : [],
        ...this.showMarge ? [{ width: 13 }, { width: 9 }] : [],
        ...this.showCA ? [{ width: 13 }] : []
      ];
      const buf = yield wb.xlsx.writeBuffer();
      const blob = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `stats-ventes-${this.groupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  static {
    this.\u0275fac = function StatsVentesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatsVentesComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(StockService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsVentesComponent, selectors: [["app-stats-ventes"]], decls: 83, vars: 28, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "export-actions"], [1, "filter-panel"], [1, "panel-section"], [1, "section-title"], [1, "group-chips"], [1, "group-chip", 3, "active"], [1, "input-row"], [1, "input-group"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "filters-grid"], [1, "form-input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "text", "placeholder", "Identifiant\u2026", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "panel-footer"], [1, "btn-reset", 3, "click"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-error"], [1, "col-toggles"], [1, "btn-export", "btn-excel", 3, "click"], [1, "btn-export", "btn-pdf", 3, "click"], [1, "group-chip", 3, "click"], [1, "material-icons", "spin"], [1, "toggles-label"], [1, "toggle-chip"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "empty-state"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-label"], [1, "kpi-val"], [1, "kpi-card", "kpi-cout"], [1, "kpi-card", "kpi-marge"], [1, "group-block"], [1, "grand-total"], [1, "gt-label"], [1, "gt-items"], [1, "gt-item"], [1, "kpi-card", "kpi-ca"], [1, "kpi-card", "kpi-ttc"], [1, "group-header"], [1, "group-name"], [1, "group-type-badge"], [1, "ref-tag"], [1, "vendeur-tag"], [1, "table-wrapper"], [1, "data-table"], [1, "col-prod"], [1, "col-num"], [1, "sub-row"], [1, "sub-label"], [1, "num", "bold"], [1, "col-pct"], [1, "code-tag"], [1, "num"], [1, "num", "muted"]], template: function StatsVentesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "trending_up");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Statistiques de ventes ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, StatsVentesComponent_Conditional_6_Template, 9, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 3);
        \u0275\u0275text(11, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Regroupement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275repeaterCreate(14, StatsVentesComponent_For_15_Template, 4, 4, "button", 9, _forTrack0);
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
        \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 11)(27, "label");
        \u0275\u0275text(28, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Template_input_ngModelChange_29_listener($event) {
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
        \u0275\u0275text(38, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Template_select_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPartnerId, $event) || (ctx.selectedPartnerId = $event);
          return $event;
        });
        \u0275\u0275elementStart(40, "option", 15);
        \u0275\u0275text(41, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(42, StatsVentesComponent_For_43_Template, 2, 2, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 11)(45, "label");
        \u0275\u0275text(46, "Cat\xE9gorie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Template_select_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategoryId, $event) || (ctx.selectedCategoryId = $event);
          return $event;
        });
        \u0275\u0275elementStart(48, "option", 15);
        \u0275\u0275text(49, "\u2014 Toutes \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(50, StatsVentesComponent_For_51_Template, 2, 2, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 11)(53, "label");
        \u0275\u0275text(54, "Produit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Template_select_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedProductId, $event) || (ctx.selectedProductId = $event);
          return $event;
        });
        \u0275\u0275elementStart(56, "option", 15);
        \u0275\u0275text(57, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(58, StatsVentesComponent_For_59_Template, 2, 3, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 11)(61, "label");
        \u0275\u0275text(62, "Entrep\xF4t");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Template_select_ngModelChange_63_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedWarehouseId, $event) || (ctx.selectedWarehouseId = $event);
          return $event;
        });
        \u0275\u0275elementStart(64, "option", 15);
        \u0275\u0275text(65, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(66, StatsVentesComponent_For_67_Template, 2, 2, "option", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 11)(69, "label");
        \u0275\u0275text(70, "Vendeur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function StatsVentesComponent_Template_input_ngModelChange_71_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.vendeurSearch, $event) || (ctx.vendeurSearch = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "div", 17)(73, "button", 18);
        \u0275\u0275listener("click", function StatsVentesComponent_Template_button_click_73_listener() {
          return ctx.reset();
        });
        \u0275\u0275elementStart(74, "span", 3);
        \u0275\u0275text(75, "restart_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, " R\xE9initialiser ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 19);
        \u0275\u0275listener("click", function StatsVentesComponent_Template_button_click_77_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(78, StatsVentesComponent_Conditional_78_Template, 3, 0)(79, StatsVentesComponent_Conditional_79_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(80, StatsVentesComponent_Conditional_80_Template, 4, 1, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(81, StatsVentesComponent_Conditional_81_Template, 14, 9, "div", 21);
        \u0275\u0275conditionalCreate(82, StatsVentesComponent_Conditional_82_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.generated && ctx.data && ctx.data.clients.length > 0 ? 6 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(\u0275\u0275pureFunction5(22, _c5, \u0275\u0275pureFunction0(17, _c0), \u0275\u0275pureFunction0(18, _c1), \u0275\u0275pureFunction0(19, _c2), \u0275\u0275pureFunction0(20, _c3), \u0275\u0275pureFunction0(21, _c4)));
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPartnerId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.clients);
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
        \u0275\u0275twoWayProperty("ngModel", ctx.vendeurSearch);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 78 : 79);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 80 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated ? 81 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated ? 82 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%] {\n  background: #217346;\n  color: white;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%]:hover {\n  background: #1a5c38;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.filter-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  margin-bottom: 18px;\n  overflow: hidden;\n}\n.panel-section[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  border-bottom: 1px solid var(--border-light);\n}\n.panel-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin-bottom: 12px;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.group-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.group-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 30px;\n  border: 2px solid var(--border);\n  background: var(--bg-elevated);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.group-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: var(--bg-surface);\n}\n.group-chip.active[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: var(--accent);\n  color: white;\n}\n.group-chip.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 1100px) {\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  outline: none;\n  min-width: 0;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.panel-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  background: var(--bg-elevated);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-reset[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-reset[_ngcontent-%COMP%]:hover {\n  background: var(--bg-page);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 26px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 22px 14px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.col-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  padding: 10px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.toggles-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.toggles-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.toggle-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border: 1.5px solid var(--border);\n  transition: all 0.15s;\n}\n.toggle-chip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--accent);\n}\n.toggle-chip.active[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  gap: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 130px;\n  max-width: 220px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border-left: 4px solid #e5e7eb;\n}\n.kpi-card.kpi-ca[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n}\n.kpi-card.kpi-ttc[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.kpi-card.kpi-cout[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n}\n.kpi-card.kpi-marge[_ngcontent-%COMP%] {\n  border-color: #10b981;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.kpi-val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.kpi-val.neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.group-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 18px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.group-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.group-type-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--accent);\n  background: var(--accent-light);\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ref-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 8px;\n  font-weight: 400;\n}\n.vendeur-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.vendeur-tag[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   .col-prod[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.data-table[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: right;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   .col-pct[_ngcontent-%COMP%] {\n  width: 70px;\n  text-align: right;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n}\n.data-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.data-table[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.data-table[_ngcontent-%COMP%]   .neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.sub-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-size: 12px;\n  border-top: 1px solid var(--border-light);\n  border-bottom: none;\n}\n.sub-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.code-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 6px;\n  margin-right: 5px;\n  font-family: "Roboto Mono", monospace;\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n  margin-bottom: 24px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.gt-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  flex-wrap: wrap;\n}\n.gt-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item[_ngcontent-%COMP%]   strong.neg[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=stats-ventes.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsVentesComponent, [{
    type: Component,
    args: [{ selector: "app-stats-ventes", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550\u2550 EN-T\xCATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">trending_up</span>
      Statistiques de ventes
    </h1>
    @if (generated && data && data.clients.length > 0) {
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
          {k:'client',    label:'Par client',    icon:'person'},
          {k:'category',  label:'Par cat\xE9gorie', icon:'category'},
          {k:'product',   label:'Par produit',   icon:'inventory_2'},
          {k:'vendeur',   label:'Par vendeur',   icon:'badge'},
          {k:'warehouse', label:'Par entrep\xF4t',  icon:'warehouse'}
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
          <label>Client</label>
          <select class="form-input" [(ngModel)]="selectedPartnerId">
            <option [ngValue]="null">\u2014 Tous \u2014</option>
            @for (c of clients; track c.id) {
              <option [ngValue]="c.id">{{ c.name }}</option>
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
          <label>Vendeur</label>
          <input type="text" class="form-input" [(ngModel)]="vendeurSearch" placeholder="Identifiant\u2026">
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

  <!-- \u2550\u2550\u2550 OPTIONS COLONNES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (generated) {
    <div class="col-toggles">
      <span class="toggles-label"><span class="material-icons">visibility</span> Colonnes :</span>
      <label class="toggle-chip" [class.active]="showCA">
        <input type="checkbox" [(ngModel)]="showCA"> CA HT / CA TTC
      </label>
      <label class="toggle-chip" [class.active]="showCout">
        <input type="checkbox" [(ngModel)]="showCout"> Co\xFBt
      </label>
      <label class="toggle-chip" [class.active]="showMarge">
        <input type="checkbox" [(ngModel)]="showMarge"> Marge
      </label>
    </div>
  }

  <!-- \u2550\u2550\u2550 R\xC9SULTATS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (generated) {
    @if (!data || data.clients.length === 0) {
      <div class="empty-state">
        <span class="material-icons">search_off</span>
        <p>Aucune vente sur cette p\xE9riode avec ces filtres.</p>
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
          <span class="kpi-val">{{ data.clients.length }}</span>
        </div>
        @if (showCA) {
          <div class="kpi-card kpi-ca">
            <span class="kpi-label">CA HT</span>
            <span class="kpi-val">{{ data.grandTotalHT | number:'1.0-0' }} <small>FCFA</small></span>
          </div>
          <div class="kpi-card kpi-ttc">
            <span class="kpi-label">CA TTC</span>
            <span class="kpi-val">{{ data.grandTotalTTC | number:'1.0-0' }} <small>FCFA</small></span>
          </div>
        }
        @if (showCout) {
          <div class="kpi-card kpi-cout">
            <span class="kpi-label">Co\xFBt total</span>
            <span class="kpi-val">{{ data.grandTotalCout | number:'1.0-0' }} <small>FCFA</small></span>
          </div>
        }
        @if (showMarge) {
          <div class="kpi-card kpi-marge">
            <span class="kpi-label">Marge HT</span>
            <span class="kpi-val" [class.neg]="data.grandTotalMargeHT < 0">
              {{ data.grandTotalMargeHT | number:'1.0-0' }} <small>FCFA</small>
            </span>
          </div>
        }
      </div>

      <!-- Tableau par groupe -->
      @for (group of data.clients; track group.clientName) {
        <div class="group-block">
          <div class="group-header">
            <div class="group-name">
              <span class="group-type-badge">{{ groupLabel }}</span>
              {{ group.clientName }}
              @if (group.clientRef) { <span class="ref-tag">{{ group.clientRef }}</span> }
            </div>
            @if (group.vendeur && data.groupBy === 'client') {
              <span class="vendeur-tag">
                <span class="material-icons">badge</span> {{ group.vendeur }}
              </span>
            }
          </div>

          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th class="col-prod">Produit</th>
                  <th class="col-num">Qt\xE9</th>
                  <th class="col-num">Px vente HT</th>
                  @if (showCA)    { <th class="col-num">CA HT</th> }
                  @if (showCout)  { <th class="col-num">Co\xFBt</th> }
                  @if (showMarge) { <th class="col-num">Marge HT</th> <th class="col-pct">Taux %</th> }
                  @if (showCA)    { <th class="col-num">CA TTC</th> }
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
                    <td class="num">{{ l.prixVente | number:'1.0-0' }}</td>
                    @if (showCA)    { <td class="num">{{ l.caHT | number:'1.0-0' }}</td> }
                    @if (showCout)  { <td class="num muted">{{ l.cout | number:'1.0-0' }}</td> }
                    @if (showMarge) {
                      <td class="num" [class.pos]="l.margeHT > 0" [class.neg]="l.margeHT < 0">{{ l.margeHT | number:'1.0-0' }}</td>
                      <td class="num muted">{{ l.tauxMarge | number:'1.1-1' }} %</td>
                    }
                    @if (showCA)    { <td class="num">{{ l.caTTC | number:'1.0-0' }}</td> }
                  </tr>
                }
              </tbody>
              <tfoot>
                <tr class="sub-row">
                  <td class="sub-label">Sous-total</td>
                  <td class="num bold">{{ group.totalQty | number:'1.0-2' }}</td>
                  <td></td>
                  @if (showCA)    { <td class="num bold">{{ group.totalHT | number:'1.0-0' }}</td> }
                  @if (showCout)  { <td class="num bold">{{ group.totalCout | number:'1.0-0' }}</td> }
                  @if (showMarge) {
                    <td class="num bold" [class.pos]="group.totalMargeHT > 0" [class.neg]="group.totalMargeHT < 0">{{ group.totalMargeHT | number:'1.0-0' }}</td>
                    <td></td>
                  }
                  @if (showCA)    { <td class="num bold">{{ group.totalTTC | number:'1.0-0' }}</td> }
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
          @if (showCA) {
            <div class="gt-item">
              <span>CA HT</span>
              <strong>{{ data.grandTotalHT | number:'1.0-0' }} FCFA</strong>
            </div>
          }
          @if (showCout) {
            <div class="gt-item">
              <span>Co\xFBt</span>
              <strong>{{ data.grandTotalCout | number:'1.0-0' }} FCFA</strong>
            </div>
          }
          @if (showMarge) {
            <div class="gt-item">
              <span>Marge HT</span>
              <strong [class.neg]="data.grandTotalMargeHT < 0">{{ data.grandTotalMargeHT | number:'1.0-0' }} FCFA</strong>
            </div>
          }
          @if (showCA) {
            <div class="gt-item">
              <span>CA TTC</span>
              <strong>{{ data.grandTotalTTC | number:'1.0-0' }} FCFA</strong>
            </div>
          }
        </div>
      </div>

    }
  }

</div>
`, styles: ['/* src/app/modules/sales/components/reports/stats-ventes/stats-ventes.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-title .material-icons {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-export {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export .material-icons {\n  font-size: 16px;\n}\n.btn-export.btn-excel {\n  background: #217346;\n  color: white;\n}\n.btn-export.btn-excel:hover {\n  background: #1a5c38;\n}\n.btn-export.btn-pdf {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf:hover {\n  background: #b91c1c;\n}\n.filter-panel {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  margin-bottom: 18px;\n  overflow: hidden;\n}\n.panel-section {\n  padding: 16px 22px;\n  border-bottom: 1px solid var(--border-light);\n}\n.panel-section:last-of-type {\n  border-bottom: none;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin-bottom: 12px;\n}\n.section-title .material-icons {\n  font-size: 14px;\n}\n.group-chips {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.group-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 30px;\n  border: 2px solid var(--border);\n  background: var(--bg-elevated);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip .material-icons {\n  font-size: 15px;\n}\n.group-chip:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: var(--bg-surface);\n}\n.group-chip.active {\n  border-color: var(--accent);\n  background: var(--accent);\n  color: white;\n}\n.group-chip.active .material-icons {\n  color: white;\n}\n.input-row {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filters-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 1100px) {\n  .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .filters-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.input-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.form-input {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  outline: none;\n  min-width: 0;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.1);\n}\n.form-input::placeholder {\n  color: var(--text-muted);\n}\n.form-input option {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.panel-footer {\n  padding: 14px 22px;\n  background: var(--bg-elevated);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-reset .material-icons {\n  font-size: 15px;\n}\n.btn-reset:hover {\n  background: var(--bg-page);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 26px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 22px 14px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.alert-error .material-icons {\n  font-size: 15px;\n}\n.col-toggles {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  padding: 10px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.toggles-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.toggles-label .material-icons {\n  font-size: 14px;\n}\n.toggle-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border: 1.5px solid var(--border);\n  transition: all 0.15s;\n}\n.toggle-chip input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--accent);\n}\n.toggle-chip.active {\n  background: var(--accent-light);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  gap: 14px;\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.kpi-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.kpi-card {\n  flex: 1;\n  min-width: 130px;\n  max-width: 220px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border-left: 4px solid #e5e7eb;\n}\n.kpi-card.kpi-ca {\n  border-color: var(--accent);\n}\n.kpi-card.kpi-ttc {\n  border-color: #f59e0b;\n}\n.kpi-card.kpi-cout {\n  border-color: #6366f1;\n}\n.kpi-card.kpi-marge {\n  border-color: #10b981;\n}\n.kpi-label {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.kpi-val {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.kpi-val small {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.kpi-val.neg {\n  color: var(--danger);\n}\n.group-block {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 18px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.group-name {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.group-type-badge {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--accent);\n  background: var(--accent-light);\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ref-tag {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 8px;\n  font-weight: 400;\n}\n.vendeur-tag {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.vendeur-tag .material-icons {\n  font-size: 14px;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 8px 13px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 8px 13px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table .col-prod {\n  min-width: 180px;\n}\n.data-table .col-num {\n  width: 100px;\n  text-align: right;\n  white-space: nowrap;\n}\n.data-table .col-pct {\n  width: 70px;\n  text-align: right;\n  white-space: nowrap;\n}\n.data-table .num {\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n}\n.data-table .bold {\n  font-weight: 700;\n}\n.data-table .muted {\n  color: var(--text-muted);\n}\n.data-table .pos {\n  color: #16a34a;\n}\n.data-table .neg {\n  color: var(--danger);\n}\n.sub-row td {\n  background: var(--bg-elevated);\n  font-size: 12px;\n  border-top: 1px solid var(--border-light);\n  border-bottom: none;\n}\n.sub-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.code-tag {\n  display: inline-block;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 6px;\n  margin-right: 5px;\n  font-family: "Roboto Mono", monospace;\n}\n.grand-total {\n  background: var(--accent);\n  color: white;\n  border-radius: 12px;\n  padding: 16px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n  margin-bottom: 24px;\n}\n.gt-label {\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.gt-items {\n  display: flex;\n  gap: 28px;\n  flex-wrap: wrap;\n}\n.gt-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.gt-item span {\n  font-size: 10px;\n  font-weight: 600;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-item strong {\n  font-size: 16px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.gt-item strong.neg {\n  opacity: 0.8;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=stats-ventes.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: StockService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsVentesComponent, { className: "StatsVentesComponent", filePath: "app/modules/sales/components/reports/stats-ventes/stats-ventes.component.ts", lineNumber: 18 });
})();
export {
  StatsVentesComponent
};
//# sourceMappingURL=chunk-52FTWY4B.js.map
