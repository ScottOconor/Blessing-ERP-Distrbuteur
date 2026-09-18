import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  ExcelExportService
} from "./chunk-RDE6QNFF.js";
import "./chunk-V5EAPQSQ.js";
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
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/analyse/stock-analysis-report.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.warehouseName;
var _forTrack2 = ($index, $item) => $item.productId;
var _forTrack3 = ($index, $item) => $item.locationName;
function StockAnalysisReportComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.name);
  }
}
function StockAnalysisReportComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("value", p_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r2.defaultCode ? "[" + p_r2.defaultCode + "] " : "", "", p_r2.name);
  }
}
function StockAnalysisReportComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function StockAnalysisReportComponent_For_65_Template_button_click_0_listener() {
      const w_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleWarehouse(w_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r4.isWarehouseSelected(w_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.isWarehouseSelected(w_r4.id) ? "check_box" : "check_box_outline_blank");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", w_r4.name, " ");
  }
}
function StockAnalysisReportComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 2);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.errorMsg);
  }
}
function StockAnalysisReportComponent_Conditional_71_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 2);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun mouvement trouv\xE9 pour les crit\xE8res s\xE9lectionn\xE9s. ");
    \u0275\u0275elementEnd();
  }
}
function StockAnalysisReportComponent_Conditional_71_For_8_For_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r6.productCode);
  }
}
function StockAnalysisReportComponent_Conditional_71_For_8_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275conditionalCreate(2, StockAnalysisReportComponent_Conditional_71_For_8_For_33_Conditional_2_Template, 2, 1, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 48);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 39);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 44);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 45);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-highlight", (line_r6.finalQty || 0) < 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r6.productCode ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r6.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r6.uomName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(line_r6.initialQty));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(line_r6.inQty));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(line_r6.outQty));
    \u0275\u0275advance();
    \u0275\u0275classProp("neg", (line_r6.finalQty || 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.fmt(line_r6.finalQty), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(line_r6.unitCost));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(line_r6.initialValue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(line_r6.inValue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(line_r6.outValue));
    \u0275\u0275advance();
    \u0275\u0275classProp("neg", (line_r6.finalValue || 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.fmt(line_r6.finalValue), " ");
  }
}
function StockAnalysisReportComponent_Conditional_71_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 29)(2, "span", 2);
    \u0275\u0275text(3, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "table", 31)(7, "thead")(8, "tr")(9, "th", 32);
    \u0275\u0275text(10, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 33);
    \u0275\u0275text(12, "UDM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 34);
    \u0275\u0275text(14, "Stock initial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 34);
    \u0275\u0275text(16, "Entr\xE9es (+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 34);
    \u0275\u0275text(18, "Sorties (\u2212)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 34);
    \u0275\u0275text(20, "Stock final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 35);
    \u0275\u0275text(22, "Co\xFBt U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 35);
    \u0275\u0275text(24, "Val. initiale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 35);
    \u0275\u0275text(26, "Val. entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 35);
    \u0275\u0275text(28, "Val. sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 35);
    \u0275\u0275text(30, "Val. finale");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275repeaterCreate(32, StockAnalysisReportComponent_Conditional_71_For_8_For_33_Template, 24, 18, "tr", 36, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "tfoot")(35, "tr", 37)(36, "td", 38)(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td", 39)(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td", 40)(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "td", 41)(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "td", 42)(49, "strong");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "td");
    \u0275\u0275elementStart(52, "td", 39)(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "td", 43)(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "td", 44)(59, "strong");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "td", 45)(62, "strong");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const wh_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", wh_r7.warehouseName, " ");
    \u0275\u0275advance(28);
    \u0275\u0275repeater(wh_r7.lines);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("TOTAL ", wh_r7.warehouseName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalInitialQty));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalInQty));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalOutQty));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalFinalQty));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalInitialValue));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalInValue));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalOutValue));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(wh_r7.totalFinalValue));
  }
}
function StockAnalysisReportComponent_Conditional_71_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 49)(2, "span");
    \u0275\u0275text(3, "GRAND TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50)(5, "span", 51);
    \u0275\u0275text(6, "Qt\xE9 initiale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 50)(10, "span", 51);
    \u0275\u0275text(11, "Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 53);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 50)(15, "span", 51);
    \u0275\u0275text(16, "Sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 54);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 50)(20, "span", 51);
    \u0275\u0275text(21, "Qt\xE9 finale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 52);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 55);
    \u0275\u0275element(25, "span");
    \u0275\u0275elementStart(26, "span", 50)(27, "span", 51);
    \u0275\u0275text(28, "Val. initiale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 52);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "span", 50)(32, "span", 51);
    \u0275\u0275text(33, "Val. entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 56);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "span", 50)(37, "span", 51);
    \u0275\u0275text(38, "Val. sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 57);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span", 50)(42, "span", 51);
    \u0275\u0275text(43, "Val. finale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 52);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r4.fmt(ctx_r4.grandTotals.initQty));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.fmt(ctx_r4.grandTotals.inQty));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.fmt(ctx_r4.grandTotals.outQty));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("neg", ctx_r4.grandTotals.finalQty < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.fmt(ctx_r4.grandTotals.finalQty));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r4.fmt(ctx_r4.grandTotals.initVal), " FCFA");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r4.fmt(ctx_r4.grandTotals.inVal), " FCFA");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r4.fmt(ctx_r4.grandTotals.outVal), " FCFA");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("neg", ctx_r4.grandTotals.finalVal < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r4.fmt(ctx_r4.grandTotals.finalVal), " FCFA");
  }
}
function StockAnalysisReportComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 24)(2, "h2");
    \u0275\u0275text(3, "Rapport de stock analytique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, StockAnalysisReportComponent_Conditional_71_Conditional_6_Template, 4, 0, "div", 26);
    \u0275\u0275repeaterCreate(7, StockAnalysisReportComponent_Conditional_71_For_8_Template, 64, 10, "div", 27, _forTrack1);
    \u0275\u0275conditionalCreate(9, StockAnalysisReportComponent_Conditional_71_Conditional_9_Template, 46, 12, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("P\xE9riode du ", ctx_r4.dateFrom, " au ", ctx_r4.dateTo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.analyticalData.length === 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.analyticalData);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.analyticalData.length > 1 ? 9 : -1);
  }
}
function StockAnalysisReportComponent_Conditional_72_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 2);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun mouvement trouv\xE9 pour les crit\xE8res s\xE9lectionn\xE9s. ");
    \u0275\u0275elementEnd();
  }
}
function StockAnalysisReportComponent_Conditional_72_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "button", 60);
    \u0275\u0275listener("click", function StockAnalysisReportComponent_Conditional_72_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.expandAll());
    });
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Tout d\xE9velopper ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 60);
    \u0275\u0275listener("click", function StockAnalysisReportComponent_Conditional_72_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.collapseAll());
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "unfold_less");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Tout r\xE9duire ");
    \u0275\u0275elementEnd()();
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r11.productCode);
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_For_35_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const mv_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", ctx_r4.fmt(mv_r12.qtyIn), " ");
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_For_35_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const mv_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", ctx_r4.fmt(mv_r12.qtyOut), " ");
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275conditionalCreate(8, StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_For_35_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275conditionalCreate(10, StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_For_35_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mv_r12 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mv_r12.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mv_r12.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mv_r12.partner);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mv_r12.qtyIn ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mv_r12.qtyOut ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("neg", (mv_r12.qtyBalance || 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.fmt(mv_r12.qtyBalance), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("neg", (mv_r12.valueBalance || 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.fmt(mv_r12.valueBalance), " FCFA ");
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2, "Aucun mouvement sur la p\xE9riode");
    \u0275\u0275elementEnd()();
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span", 2);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "table", 67)(7, "thead")(8, "tr")(9, "th", 68);
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 69);
    \u0275\u0275text(12, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 70);
    \u0275\u0275text(14, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 71);
    \u0275\u0275text(16, "Entr\xE9e (+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 71);
    \u0275\u0275text(18, "Sortie (\u2212)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 72);
    \u0275\u0275text(20, "Solde Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 73);
    \u0275\u0275text(22, "Solde Valeur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody")(24, "tr", 74)(25, "td", 75)(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 39)(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td", 39)(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(34, StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_For_35_Template, 15, 11, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(36, StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_Conditional_36_Template, 3, 0, "tr");
    \u0275\u0275elementStart(37, "tr", 76)(38, "td", 75)(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td", 39)(42, "strong");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "td", 39)(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const loc_r13 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", loc_r13.locationName, " ");
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate1("Solde au ", ctx_r4.dateFrom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fmt(loc_r13.initialQty));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r4.fmt(loc_r13.initialValue), " FCFA");
    \u0275\u0275advance();
    \u0275\u0275repeater(loc_r13.movements);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r4.hasMovements(loc_r13) ? 36 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Solde au ", ctx_r4.dateTo);
    \u0275\u0275advance();
    \u0275\u0275classProp("neg", (loc_r13.finalQty || 0) < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fmt(loc_r13.finalQty));
    \u0275\u0275advance();
    \u0275\u0275classProp("neg", (loc_r13.finalValue || 0) < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.fmt(loc_r13.finalValue), " FCFA");
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_For_1_Template, 47, 12, "div", 65, _forTrack3);
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(product_r11.locations);
  }
}
function StockAnalysisReportComponent_Conditional_72_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 61);
    \u0275\u0275listener("click", function StockAnalysisReportComponent_Conditional_72_For_9_Template_div_click_1_listener() {
      const \u0275$index_397_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleProduct(\u0275$index_397_r10));
    });
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, StockAnalysisReportComponent_Conditional_72_For_9_Conditional_4_Template, 2, 1, "span", 46);
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, StockAnalysisReportComponent_Conditional_72_For_9_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const \u0275$index_397_r10 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.isProductExpanded(\u0275$index_397_r10) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r11.productCode ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r11.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Co\xFBt unitaire : ", ctx_r4.fmt(product_r11.unitCost), " FCFA");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.isProductExpanded(\u0275$index_397_r10) ? 9 : -1);
  }
}
function StockAnalysisReportComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 24)(2, "h2");
    \u0275\u0275text(3, "Fiche de stock d\xE9taill\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, StockAnalysisReportComponent_Conditional_72_Conditional_6_Template, 4, 0, "div", 26);
    \u0275\u0275conditionalCreate(7, StockAnalysisReportComponent_Conditional_72_Conditional_7_Template, 9, 0, "div", 58);
    \u0275\u0275repeaterCreate(8, StockAnalysisReportComponent_Conditional_72_For_9_Template, 10, 5, "div", 59, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("P\xE9riode du ", ctx_r4.dateFrom, " au ", ctx_r4.dateTo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.detailedData.length === 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.detailedData.length > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.detailedData);
  }
}
var StockAnalysisReportComponent = class _StockAnalysisReportComponent {
  constructor(stockService, authService, excelExport) {
    this.stockService = stockService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.dateFrom = "";
    this.dateTo = "";
    this.warehouseIds = [];
    this.productId = null;
    this.categoryId = null;
    this.mode = "analytique";
    this.warehouses = [];
    this.products = [];
    this.categories = [];
    this.analyticalData = [];
    this.detailedData = [];
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.expandedProducts = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    const today = /* @__PURE__ */ new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateTo = today.toISOString().split("T")[0];
    this.dateFrom = firstOfMonth.toISOString().split("T")[0];
    const cid = this.authService.getCompanyId();
    this.stockService.getWarehouses(cid).subscribe({
      next: (w) => {
        this.warehouses = w.filter((x) => x.active !== false);
      }
    });
    this.stockService.getCategories(cid).subscribe({
      next: (c) => this.categories = c
    });
    this.stockService.getProducts(cid).subscribe({
      next: (p) => this.products = p.filter((x) => x.type === "product" || x.type === "consu")
    });
  }
  toggleWarehouse(id) {
    const idx = this.warehouseIds.indexOf(id);
    if (idx >= 0)
      this.warehouseIds.splice(idx, 1);
    else
      this.warehouseIds.push(id);
  }
  isWarehouseSelected(id) {
    return this.warehouseIds.includes(id);
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "Veuillez renseigner les dates.";
      return;
    }
    if (this.warehouseIds.length === 0) {
      this.errorMsg = "S\xE9lectionnez au moins un entrep\xF4t.";
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.generated = false;
    const params = {
      companyId: this.authService.getCompanyId(),
      warehouseIds: this.warehouseIds,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      productId: this.productId ?? void 0,
      categoryId: this.categoryId ?? void 0
    };
    if (this.mode === "analytique") {
      this.stockService.getAnalyticalReport(params).subscribe({
        next: (d) => {
          this.analyticalData = d;
          this.generated = true;
          this.loading = false;
        },
        error: (e) => {
          this.errorMsg = e.error?.message || "Erreur lors de la g\xE9n\xE9ration";
          this.loading = false;
        }
      });
    } else {
      this.expandedProducts.clear();
      this.stockService.getDetailedReport(params).subscribe({
        next: (d) => {
          this.detailedData = d;
          this.generated = true;
          this.loading = false;
        },
        error: (e) => {
          this.errorMsg = e.error?.message || "Erreur lors de la g\xE9n\xE9ration";
          this.loading = false;
        }
      });
    }
  }
  // ─── Totaux globaux (analytique) ─────────────────────────────────────────
  get grandTotals() {
    const t = { initQty: 0, inQty: 0, outQty: 0, finalQty: 0, initVal: 0, inVal: 0, outVal: 0, finalVal: 0 };
    for (const wh of this.analyticalData) {
      t.initQty += wh.totalInitialQty || 0;
      t.inQty += wh.totalInQty || 0;
      t.outQty += wh.totalOutQty || 0;
      t.finalQty += wh.totalFinalQty || 0;
      t.initVal += wh.totalInitialValue || 0;
      t.inVal += wh.totalInValue || 0;
      t.outVal += wh.totalOutValue || 0;
      t.finalVal += wh.totalFinalValue || 0;
    }
    return t;
  }
  // ─── Accordéon (détaillé) ────────────────────────────────────────────────
  toggleProduct(i) {
    if (this.expandedProducts.has(i))
      this.expandedProducts.delete(i);
    else
      this.expandedProducts.add(i);
  }
  isProductExpanded(i) {
    return this.expandedProducts.has(i);
  }
  expandAll() {
    this.detailedData.forEach((_, i) => this.expandedProducts.add(i));
  }
  collapseAll() {
    this.expandedProducts.clear();
  }
  // ─── Utilitaires ─────────────────────────────────────────────────────────
  fmt(v, dec = 0) {
    return new Intl.NumberFormat("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v ?? 0);
  }
  hasMovements(loc) {
    return loc.movements && loc.movements.length > 0;
  }
  printReport() {
    window.print();
  }
  get reportParams() {
    return {
      companyId: this.authService.getCompanyId(),
      warehouseIds: this.warehouseIds,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      productId: this.productId ?? void 0,
      categoryId: this.categoryId ?? void 0
    };
  }
  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
  exportPdf() {
    if (!this.generated)
      return;
    if (this.mode === "analytique") {
      this.stockService.downloadAnalyticalReportPdf(this.reportParams).subscribe({
        next: (blob) => this.downloadBlob(blob, `rapport_analytique_${this.dateFrom}_${this.dateTo}.pdf`)
      });
    } else {
      this.stockService.downloadDetailedReportPdf(this.reportParams).subscribe({
        next: (blob) => this.downloadBlob(blob, `fiche_detaillee_${this.dateFrom}_${this.dateTo}.pdf`)
      });
    }
  }
  exportExcel() {
    if (!this.generated)
      return;
    const company = this.authService.getActiveCompany()?.name;
    if (this.mode === "analytique") {
      this.excelExport.exportStockAnalysis(this.analyticalData, this.dateFrom, this.dateTo, company);
    } else {
      this.excelExport.exportStockDetailed(this.detailedData, this.dateFrom, this.dateTo, company);
    }
  }
  static {
    this.\u0275fac = function StockAnalysisReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockAnalysisReportComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockAnalysisReportComponent, selectors: [["app-stock-analysis-report"]], decls: 73, vars: 19, consts: [[1, "sar-page"], [1, "sar-header", "no-print"], [1, "material-icons"], [1, "header-actions"], [1, "btn-print", 3, "click", "disabled"], [1, "btn-print", "btn-pdf", 3, "click", "disabled"], [1, "btn-print", "btn-excel", 3, "click", "disabled"], [1, "sar-filters", "no-print"], [1, "mode-toggle"], [3, "click"], [1, "filters-grid"], [1, "filter-group"], [1, "req"], ["type", "date", 1, "f-ctrl", 3, "ngModelChange", "ngModel"], [1, "f-ctrl", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], [1, "wh-section"], [1, "wh-chips"], [1, "wh-chip", 3, "selected"], [1, "alert-err"], [1, "btn-generate", 3, "click", "disabled"], [1, "sar-report"], [1, "wh-chip", 3, "click"], [1, "print-header", "print-only"], [1, "print-period"], [1, "empty-state"], [1, "wh-section-block"], [1, "grand-total-box"], [1, "wh-title"], [1, "table-wrap"], [1, "rep-table"], [1, "col-prod"], [1, "col-uom"], [1, "col-num", "text-right"], [1, "col-val", "text-right"], [3, "row-highlight"], [1, "row-total"], ["colspan", "2"], [1, "text-right"], [1, "text-right", "qty-in"], [1, "text-right", "qty-out"], [1, "text-right", "qty-final"], [1, "text-right", "val-in"], [1, "text-right", "val-out"], [1, "text-right", "val-final"], [1, "prod-code"], [1, "col-uom", "tgray"], [1, "text-right", "tgray"], [1, "gt-row"], [1, "gt-group"], [1, "gt-label"], [1, "gt-val"], [1, "gt-val", "qty-in"], [1, "gt-val", "qty-out"], [1, "gt-row", "gt-values"], [1, "gt-val", "val-in"], [1, "gt-val", "val-out"], [1, "detail-actions", "no-print"], [1, "prod-block"], [1, "btn-sm", 3, "click"], [1, "prod-header", 3, "click"], [1, "material-icons", "expand-icon"], [1, "prod-name"], [1, "prod-cost"], [1, "loc-block"], [1, "loc-title"], [1, "detail-table"], [2, "width", "13%"], [2, "width", "18%"], [2, "width", "20%"], [1, "text-right", 2, "width", "10%"], [1, "text-right", 2, "width", "12%"], [1, "text-right", 2, "width", "17%"], [1, "row-balance-init"], ["colspan", "5"], [1, "row-balance-final"], [1, "tgray", 2, "white-space", "nowrap"], [1, "move-ref"], [1, "tgray"], ["colspan", "7", 1, "no-moves"]], template: function StockAnalysisReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "assessment");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Rapport de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
        \u0275\u0275listener("click", function StockAnalysisReportComponent_Template_button_click_7_listener() {
          return ctx.printReport();
        });
        \u0275\u0275elementStart(8, "span", 2);
        \u0275\u0275text(9, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Imprimer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function StockAnalysisReportComponent_Template_button_click_11_listener() {
          return ctx.exportPdf();
        });
        \u0275\u0275elementStart(12, "span", 2);
        \u0275\u0275text(13, "picture_as_pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " PDF ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function StockAnalysisReportComponent_Template_button_click_15_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(16, "span", 2);
        \u0275\u0275text(17, "table_view");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "button", 9);
        \u0275\u0275listener("click", function StockAnalysisReportComponent_Template_button_click_21_listener() {
          return ctx.mode = "analytique";
        });
        \u0275\u0275elementStart(22, "span", 2);
        \u0275\u0275text(23, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Analytique ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 9);
        \u0275\u0275listener("click", function StockAnalysisReportComponent_Template_button_click_25_listener() {
          return ctx.mode = "detaille";
        });
        \u0275\u0275elementStart(26, "span", 2);
        \u0275\u0275text(27, "list_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " Fiche d\xE9taill\xE9e ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "label");
        \u0275\u0275text(32, "Date d\xE9but ");
        \u0275\u0275elementStart(33, "span", 12);
        \u0275\u0275text(34, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function StockAnalysisReportComponent_Template_input_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 11)(37, "label");
        \u0275\u0275text(38, "Date fin ");
        \u0275\u0275elementStart(39, "span", 12);
        \u0275\u0275text(40, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function StockAnalysisReportComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 11)(43, "label");
        \u0275\u0275text(44, "Cat\xE9gorie (optionnel)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StockAnalysisReportComponent_Template_select_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.categoryId, $event) || (ctx.categoryId = $event);
          return $event;
        });
        \u0275\u0275elementStart(46, "option", 15);
        \u0275\u0275text(47, "\u2014 Toutes \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(48, StockAnalysisReportComponent_For_49_Template, 2, 2, "option", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 11)(51, "label");
        \u0275\u0275text(52, "Article (optionnel)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function StockAnalysisReportComponent_Template_select_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.productId, $event) || (ctx.productId = $event);
          return $event;
        });
        \u0275\u0275elementStart(54, "option", 15);
        \u0275\u0275text(55, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(56, StockAnalysisReportComponent_For_57_Template, 2, 3, "option", 16, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 17)(59, "label");
        \u0275\u0275text(60, "Entrep\xF4ts ");
        \u0275\u0275elementStart(61, "span", 12);
        \u0275\u0275text(62, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 18);
        \u0275\u0275repeaterCreate(64, StockAnalysisReportComponent_For_65_Template, 4, 4, "button", 19, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(66, StockAnalysisReportComponent_Conditional_66_Template, 4, 1, "div", 20);
        \u0275\u0275elementStart(67, "button", 21);
        \u0275\u0275listener("click", function StockAnalysisReportComponent_Template_button_click_67_listener() {
          return ctx.generate();
        });
        \u0275\u0275elementStart(68, "span", 2);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd();
        \u0275\u0275text(70);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(71, StockAnalysisReportComponent_Conditional_71_Template, 10, 4, "div", 22);
        \u0275\u0275conditionalCreate(72, StockAnalysisReportComponent_Conditional_72_Template, 10, 4, "div", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", !ctx.generated);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.generated);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.generated);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.mode === "analytique");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.mode === "detaille");
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.categoryId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.productId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.products);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.warehouses);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 66 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.loading ? "hourglass_empty" : "play_arrow");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "G\xE9n\xE9ration..." : "G\xE9n\xE9rer le rapport", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated && ctx.mode === "analytique" ? 71 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated && ctx.mode === "detaille" ? 72 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.sar-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.sar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.sar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n}\n.sar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #017E84;\n}\n.btn-print[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-print[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-print[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.sar-filters[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.mode-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n  align-self: flex-start;\n}\n.mode-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.mode-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mode-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #017E84;\n  color: white;\n}\n.mode-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--bg-hover);\n}\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.filter-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.f-ctrl[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.f-ctrl[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.wh-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.wh-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.wh-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.wh-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.wh-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.wh-chip.selected[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border-color: var(--success);\n  color: var(--success);\n}\n.wh-chip.selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.wh-chip[_ngcontent-%COMP%]:hover {\n  border-color: #017E84;\n  color: var(--text-primary);\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  align-self: flex-start;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.sar-report[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 40px;\n  justify-content: center;\n  color: var(--text-muted);\n  font-size: 15px;\n  background: var(--bg-surface);\n  border-radius: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.wh-section-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.wh-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 18px;\n  background: var(--bg-hover);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  border-bottom: 2px solid #017E84;\n}\n.wh-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #017E84;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.rep-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.rep-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.rep-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 2px solid #e9ecef;\n  white-space: nowrap;\n  text-align: left;\n}\n.rep-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.rep-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.rep-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 8px;\n  background: var(--bg-hover);\n  border-top: 2px solid #e9ecef;\n  font-weight: 600;\n}\n.col-prod[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.col-uom[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.col-num[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.col-val[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.tgray[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.prod-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 10px;\n  background: var(--bg-elevated);\n  color: #017E84;\n  padding: 1px 5px;\n  border-radius: 3px;\n  font-weight: 700;\n  margin-right: 5px;\n}\n.qty-in[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 600;\n}\n.qty-out[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.qty-final[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.val-in[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.val-out[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.val-final[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.neg[_ngcontent-%COMP%] {\n  color: var(--danger) !important;\n}\n.row-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 700;\n  background: var(--bg-elevated);\n}\n.row-highlight[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.04) !important;\n}\n.grand-total-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  border-top: 3px solid #017E84;\n}\n.gt-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  padding: 6px 0;\n}\n.gt-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  min-width: 120px;\n}\n.gt-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-primary);\n}\n.gt-values[_ngcontent-%COMP%]   .gt-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-sm[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.prod-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.prod-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--bg-hover);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  border-left: 4px solid #017E84;\n  transition: background 0.1s;\n}\n.prod-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.prod-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  flex: 1;\n}\n.prod-cost[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-left: auto;\n  font-family: "Roboto Mono", monospace;\n}\n.loc-block[_ngcontent-%COMP%] {\n  padding: 12px 16px 16px;\n}\n.loc-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 10px;\n}\n.loc-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.detail-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.detail-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.detail-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.detail-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.detail-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 8px;\n  background: var(--bg-hover);\n  border-top: 2px solid #e9ecef;\n  font-weight: 600;\n}\n.move-ref[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n  color: #017E84;\n}\n.row-balance-init[_ngcontent-%COMP%], \n.row-balance-final[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n}\n.row-balance-init[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.row-balance-final[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 7px 6px;\n}\n.no-moves[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 12px;\n  font-style: italic;\n}\n.print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n}\n.print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 0 4px;\n}\n.print-header[_ngcontent-%COMP%]   .print-period[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .sar-page[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: 100%;\n  }\n  .wh-section-block[_ngcontent-%COMP%], \n   .prod-block[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid #ddd;\n    margin-bottom: 12px;\n  }\n  .prod-block[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .rep-table[_ngcontent-%COMP%], \n   .detail-table[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=stock-analysis-report.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockAnalysisReportComponent, [{
    type: Component,
    args: [{ selector: "app-stock-analysis-report", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="sar-page">

  <!-- \u2500\u2500 En-t\xEAte \u2500\u2500 -->
  <div class="sar-header no-print">
    <h1><span class="material-icons">assessment</span> Rapport de stock</h1>
    <div class="header-actions">
      <button class="btn-print" (click)="printReport()" [disabled]="!generated">
        <span class="material-icons">print</span> Imprimer
      </button>
      <button class="btn-print btn-pdf" (click)="exportPdf()" [disabled]="!generated">
        <span class="material-icons">picture_as_pdf</span> PDF
      </button>
      <button class="btn-print btn-excel" (click)="exportExcel()" [disabled]="!generated">
        <span class="material-icons">table_view</span> Excel
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 Filtres \u2500\u2500 -->
  <div class="sar-filters no-print">

    <!-- Mode -->
    <div class="mode-toggle">
      <button [class.active]="mode === 'analytique'" (click)="mode = 'analytique'">
        <span class="material-icons">table_chart</span> Analytique
      </button>
      <button [class.active]="mode === 'detaille'" (click)="mode = 'detaille'">
        <span class="material-icons">list_alt</span> Fiche d\xE9taill\xE9e
      </button>
    </div>

    <div class="filters-grid">
      <div class="filter-group">
        <label>Date d\xE9but <span class="req">*</span></label>
        <input type="date" [(ngModel)]="dateFrom" class="f-ctrl" />
      </div>
      <div class="filter-group">
        <label>Date fin <span class="req">*</span></label>
        <input type="date" [(ngModel)]="dateTo" class="f-ctrl" />
      </div>
      <div class="filter-group">
        <label>Cat\xE9gorie (optionnel)</label>
        <select [(ngModel)]="categoryId" class="f-ctrl">
          <option [ngValue]="null">\u2014 Toutes \u2014</option>
          @for (c of categories; track c.id) {
            <option [value]="c.id">{{ c.name }}</option>
          }
        </select>
      </div>
      <div class="filter-group">
        <label>Article (optionnel)</label>
        <select [(ngModel)]="productId" class="f-ctrl">
          <option [ngValue]="null">\u2014 Tous \u2014</option>
          @for (p of products; track p.id) {
            <option [value]="p.id">{{ p.defaultCode ? '[' + p.defaultCode + '] ' : '' }}{{ p.name }}</option>
          }
        </select>
      </div>
    </div>

    <!-- S\xE9lection entrep\xF4ts -->
    <div class="wh-section">
      <label>Entrep\xF4ts <span class="req">*</span></label>
      <div class="wh-chips">
        @for (w of warehouses; track w.id) {
          <button class="wh-chip" [class.selected]="isWarehouseSelected(w.id!)"
                  (click)="toggleWarehouse(w.id!)">
            <span class="material-icons">{{ isWarehouseSelected(w.id!) ? 'check_box' : 'check_box_outline_blank' }}</span>
            {{ w.name }}
          </button>
        }
      </div>
    </div>

    @if (errorMsg) {
      <div class="alert-err"><span class="material-icons">error</span> {{ errorMsg }}</div>
    }

    <button class="btn-generate" (click)="generate()" [disabled]="loading">
      <span class="material-icons">{{ loading ? 'hourglass_empty' : 'play_arrow' }}</span>
      {{ loading ? 'G\xE9n\xE9ration...' : 'G\xE9n\xE9rer le rapport' }}
    </button>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       RAPPORT ANALYTIQUE
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (generated && mode === 'analytique') {
    <div class="sar-report">

      <!-- En-t\xEAte imprimable -->
      <div class="print-header print-only">
        <h2>Rapport de stock analytique</h2>
        <div class="print-period">P\xE9riode du {{ dateFrom }} au {{ dateTo }}</div>
      </div>

      @if (analyticalData.length === 0) {
        <div class="empty-state">
          <span class="material-icons">inventory_2</span>
          Aucun mouvement trouv\xE9 pour les crit\xE8res s\xE9lectionn\xE9s.
        </div>
      }

      @for (wh of analyticalData; track wh.warehouseName) {
        <div class="wh-section-block">
          <div class="wh-title">
            <span class="material-icons">warehouse</span>
            {{ wh.warehouseName }}
          </div>

          <div class="table-wrap">
            <table class="rep-table">
              <thead>
                <tr>
                  <th class="col-prod">Article</th>
                  <th class="col-uom">UDM</th>
                  <th class="col-num text-right">Stock initial</th>
                  <th class="col-num text-right">Entr\xE9es (+)</th>
                  <th class="col-num text-right">Sorties (\u2212)</th>
                  <th class="col-num text-right">Stock final</th>
                  <th class="col-val text-right">Co\xFBt U.</th>
                  <th class="col-val text-right">Val. initiale</th>
                  <th class="col-val text-right">Val. entr\xE9es</th>
                  <th class="col-val text-right">Val. sorties</th>
                  <th class="col-val text-right">Val. finale</th>
                </tr>
              </thead>
              <tbody>
                @for (line of wh.lines; track line.productId) {
                  <tr [class.row-highlight]="(line.finalQty || 0) < 0">
                    <td class="col-prod">
                      @if (line.productCode) { <span class="prod-code">{{ line.productCode }}</span> }
                      {{ line.productName }}
                    </td>
                    <td class="col-uom tgray">{{ line.uomName || '\u2014' }}</td>
                    <td class="text-right">{{ fmt(line.initialQty) }}</td>
                    <td class="text-right qty-in">{{ fmt(line.inQty) }}</td>
                    <td class="text-right qty-out">{{ fmt(line.outQty) }}</td>
                    <td class="text-right qty-final" [class.neg]="(line.finalQty || 0) < 0">
                      {{ fmt(line.finalQty) }}
                    </td>
                    <td class="text-right tgray">{{ fmt(line.unitCost) }}</td>
                    <td class="text-right">{{ fmt(line.initialValue) }}</td>
                    <td class="text-right val-in">{{ fmt(line.inValue) }}</td>
                    <td class="text-right val-out">{{ fmt(line.outValue) }}</td>
                    <td class="text-right val-final" [class.neg]="(line.finalValue || 0) < 0">
                      {{ fmt(line.finalValue) }}
                    </td>
                  </tr>
                }
              </tbody>
              <tfoot>
                <tr class="row-total">
                  <td colspan="2"><strong>TOTAL {{ wh.warehouseName }}</strong></td>
                  <td class="text-right"><strong>{{ fmt(wh.totalInitialQty) }}</strong></td>
                  <td class="text-right qty-in"><strong>{{ fmt(wh.totalInQty) }}</strong></td>
                  <td class="text-right qty-out"><strong>{{ fmt(wh.totalOutQty) }}</strong></td>
                  <td class="text-right qty-final"><strong>{{ fmt(wh.totalFinalQty) }}</strong></td>
                  <td></td>
                  <td class="text-right"><strong>{{ fmt(wh.totalInitialValue) }}</strong></td>
                  <td class="text-right val-in"><strong>{{ fmt(wh.totalInValue) }}</strong></td>
                  <td class="text-right val-out"><strong>{{ fmt(wh.totalOutValue) }}</strong></td>
                  <td class="text-right val-final"><strong>{{ fmt(wh.totalFinalValue) }}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      }

      <!-- Grand total multi-entrep\xF4ts -->
      @if (analyticalData.length > 1) {
        <div class="grand-total-box">
          <div class="gt-row">
            <span>GRAND TOTAL</span>
            <span class="gt-group">
              <span class="gt-label">Qt\xE9 initiale</span>
              <span class="gt-val">{{ fmt(grandTotals.initQty) }}</span>
            </span>
            <span class="gt-group">
              <span class="gt-label">Entr\xE9es</span>
              <span class="gt-val qty-in">{{ fmt(grandTotals.inQty) }}</span>
            </span>
            <span class="gt-group">
              <span class="gt-label">Sorties</span>
              <span class="gt-val qty-out">{{ fmt(grandTotals.outQty) }}</span>
            </span>
            <span class="gt-group">
              <span class="gt-label">Qt\xE9 finale</span>
              <span class="gt-val" [class.neg]="grandTotals.finalQty < 0">{{ fmt(grandTotals.finalQty) }}</span>
            </span>
          </div>
          <div class="gt-row gt-values">
            <span></span>
            <span class="gt-group">
              <span class="gt-label">Val. initiale</span>
              <span class="gt-val">{{ fmt(grandTotals.initVal) }} FCFA</span>
            </span>
            <span class="gt-group">
              <span class="gt-label">Val. entr\xE9es</span>
              <span class="gt-val val-in">{{ fmt(grandTotals.inVal) }} FCFA</span>
            </span>
            <span class="gt-group">
              <span class="gt-label">Val. sorties</span>
              <span class="gt-val val-out">{{ fmt(grandTotals.outVal) }} FCFA</span>
            </span>
            <span class="gt-group">
              <span class="gt-label">Val. finale</span>
              <span class="gt-val" [class.neg]="grandTotals.finalVal < 0">{{ fmt(grandTotals.finalVal) }} FCFA</span>
            </span>
          </div>
        </div>
      }
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       FICHE DE STOCK D\xC9TAILL\xC9E
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (generated && mode === 'detaille') {
    <div class="sar-report">

      <div class="print-header print-only">
        <h2>Fiche de stock d\xE9taill\xE9e</h2>
        <div class="print-period">P\xE9riode du {{ dateFrom }} au {{ dateTo }}</div>
      </div>

      @if (detailedData.length === 0) {
        <div class="empty-state">
          <span class="material-icons">inventory_2</span>
          Aucun mouvement trouv\xE9 pour les crit\xE8res s\xE9lectionn\xE9s.
        </div>
      }

      @if (detailedData.length > 0) {
        <div class="detail-actions no-print">
          <button class="btn-sm" (click)="expandAll()">
            <span class="material-icons">unfold_more</span> Tout d\xE9velopper
          </button>
          <button class="btn-sm" (click)="collapseAll()">
            <span class="material-icons">unfold_less</span> Tout r\xE9duire
          </button>
        </div>
      }

      @for (product of detailedData; track $index; let i = $index) {
        <div class="prod-block">
          <!-- En-t\xEAte produit (accord\xE9on) -->
          <div class="prod-header" (click)="toggleProduct(i)">
            <span class="material-icons expand-icon">
              {{ isProductExpanded(i) ? 'expand_less' : 'expand_more' }}
            </span>
            @if (product.productCode) { <span class="prod-code">{{ product.productCode }}</span> }
            <span class="prod-name">{{ product.productName }}</span>
            <span class="prod-cost">Co\xFBt unitaire : {{ fmt(product.unitCost) }} FCFA</span>
          </div>

          @if (isProductExpanded(i)) {
            @for (loc of product.locations; track loc.locationName) {
              <div class="loc-block">
                <div class="loc-title">
                  <span class="material-icons">location_on</span>
                  {{ loc.locationName }}
                </div>

                <div class="table-wrap">
                  <table class="detail-table">
                    <thead>
                      <tr>
                        <th style="width:13%">Date</th>
                        <th style="width:18%">R\xE9f\xE9rence</th>
                        <th style="width:20%">Partenaire</th>
                        <th class="text-right" style="width:10%">Entr\xE9e (+)</th>
                        <th class="text-right" style="width:10%">Sortie (\u2212)</th>
                        <th class="text-right" style="width:12%">Solde Qt\xE9</th>
                        <th class="text-right" style="width:17%">Solde Valeur</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Solde initial -->
                      <tr class="row-balance-init">
                        <td colspan="5"><strong>Solde au {{ dateFrom }}</strong></td>
                        <td class="text-right"><strong>{{ fmt(loc.initialQty) }}</strong></td>
                        <td class="text-right"><strong>{{ fmt(loc.initialValue) }} FCFA</strong></td>
                      </tr>

                      @for (mv of loc.movements; track $index) {
                        <tr>
                          <td class="tgray" style="white-space:nowrap">{{ mv.date }}</td>
                          <td class="move-ref">{{ mv.ref }}</td>
                          <td class="tgray">{{ mv.partner }}</td>
                          <td class="text-right qty-in">
                            @if (mv.qtyIn) { {{ fmt(mv.qtyIn) }} }
                          </td>
                          <td class="text-right qty-out">
                            @if (mv.qtyOut) { {{ fmt(mv.qtyOut) }} }
                          </td>
                          <td class="text-right" [class.neg]="(mv.qtyBalance || 0) < 0">
                            {{ fmt(mv.qtyBalance) }}
                          </td>
                          <td class="text-right" [class.neg]="(mv.valueBalance || 0) < 0">
                            {{ fmt(mv.valueBalance) }} FCFA
                          </td>
                        </tr>
                      }

                      @if (!hasMovements(loc)) {
                        <tr>
                          <td colspan="7" class="no-moves">Aucun mouvement sur la p\xE9riode</td>
                        </tr>
                      }

                      <!-- Solde final -->
                      <tr class="row-balance-final">
                        <td colspan="5"><strong>Solde au {{ dateTo }}</strong></td>
                        <td class="text-right" [class.neg]="(loc.finalQty || 0) < 0">
                          <strong>{{ fmt(loc.finalQty) }}</strong>
                        </td>
                        <td class="text-right" [class.neg]="(loc.finalValue || 0) < 0">
                          <strong>{{ fmt(loc.finalValue) }} FCFA</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            }
          }
        </div>
      }
    </div>
  }

</div>
`, styles: ['/* src/app/modules/stock/components/analyse/stock-analysis-report.component.scss */\n.sar-page {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.sar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.sar-header h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n}\n.sar-header h1 .material-icons {\n  font-size: 24px;\n  color: #017E84;\n}\n.btn-print {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-print .material-icons {\n  font-size: 16px;\n}\n.btn-print:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-print:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.sar-filters {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.mode-toggle {\n  display: inline-flex;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n  align-self: flex-start;\n}\n.mode-toggle button {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.mode-toggle button .material-icons {\n  font-size: 16px;\n}\n.mode-toggle button.active {\n  background: #017E84;\n  color: white;\n}\n.mode-toggle button:not(.active):hover {\n  background: var(--bg-hover);\n}\n.filters-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.filter-group .req {\n  color: var(--danger);\n}\n.f-ctrl {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.f-ctrl:focus {\n  border-color: #017E84;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.wh-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.wh-section label {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.wh-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.wh-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.wh-chip .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.wh-chip.selected {\n  background: var(--success-bg);\n  border-color: var(--success);\n  color: var(--success);\n}\n.wh-chip.selected .material-icons {\n  color: var(--success);\n}\n.wh-chip:hover {\n  border-color: #017E84;\n  color: var(--text-primary);\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  align-self: flex-start;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.sar-report {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 40px;\n  justify-content: center;\n  color: var(--text-muted);\n  font-size: 15px;\n  background: var(--bg-surface);\n  border-radius: 10px;\n}\n.empty-state .material-icons {\n  font-size: 28px;\n}\n.wh-section-block {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.wh-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 18px;\n  background: var(--bg-hover);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  border-bottom: 2px solid #017E84;\n}\n.wh-title .material-icons {\n  font-size: 20px;\n  color: #017E84;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.rep-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.rep-table thead tr {\n  background: var(--bg-hover);\n}\n.rep-table th {\n  padding: 9px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 2px solid #e9ecef;\n  white-space: nowrap;\n  text-align: left;\n}\n.rep-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.rep-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.rep-table tfoot td {\n  padding: 9px 8px;\n  background: var(--bg-hover);\n  border-top: 2px solid #e9ecef;\n  font-weight: 600;\n}\n.col-prod {\n  min-width: 200px;\n}\n.col-uom {\n  width: 60px;\n}\n.col-num {\n  width: 90px;\n}\n.col-val {\n  width: 110px;\n}\n.text-right {\n  text-align: right;\n}\n.tgray {\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.prod-code {\n  font-family: monospace;\n  font-size: 10px;\n  background: var(--bg-elevated);\n  color: #017E84;\n  padding: 1px 5px;\n  border-radius: 3px;\n  font-weight: 700;\n  margin-right: 5px;\n}\n.qty-in {\n  color: var(--success);\n  font-weight: 600;\n}\n.qty-out {\n  color: var(--danger);\n  font-weight: 600;\n}\n.qty-final {\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.val-in {\n  color: var(--success);\n}\n.val-out {\n  color: var(--danger);\n}\n.val-final {\n  font-weight: 700;\n}\n.neg {\n  color: var(--danger) !important;\n}\n.row-total td {\n  font-weight: 700;\n  background: var(--bg-elevated);\n}\n.row-highlight td {\n  background: rgba(220, 38, 38, 0.04) !important;\n}\n.grand-total-box {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  border-top: 3px solid #017E84;\n}\n.gt-row {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  padding: 6px 0;\n}\n.gt-row > span:first-child {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  min-width: 120px;\n}\n.gt-group {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.gt-label {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.gt-val {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-primary);\n}\n.gt-values .gt-val {\n  font-size: 13px;\n}\n.detail-actions {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.btn-sm {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-sm:hover {\n  background: var(--bg-hover);\n}\n.prod-block {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.prod-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--bg-hover);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  border-left: 4px solid #017E84;\n  transition: background 0.1s;\n}\n.prod-header:hover {\n  background: var(--bg-elevated);\n}\n.expand-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.prod-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  flex: 1;\n}\n.prod-cost {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-left: auto;\n  font-family: "Roboto Mono", monospace;\n}\n.loc-block {\n  padding: 12px 16px 16px;\n}\n.loc-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 10px;\n}\n.loc-title .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.detail-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.detail-table thead tr {\n  background: var(--bg-hover);\n}\n.detail-table th {\n  padding: 9px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.detail-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.detail-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.detail-table tfoot td {\n  padding: 9px 8px;\n  background: var(--bg-hover);\n  border-top: 2px solid #e9ecef;\n  font-weight: 600;\n}\n.move-ref {\n  font-family: monospace;\n  font-size: 11px;\n  color: #017E84;\n}\n.row-balance-init,\n.row-balance-final {\n  background: var(--bg-elevated) !important;\n}\n.row-balance-init td,\n.row-balance-final td {\n  font-weight: 600;\n  padding: 7px 6px;\n}\n.no-moves {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 12px;\n  font-style: italic;\n}\n.print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 16px;\n}\n.print-header h2 {\n  font-size: 18px;\n  margin: 0 0 4px;\n}\n.print-header .print-period {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .print-only {\n    display: block !important;\n  }\n  .sar-page {\n    padding: 0;\n    max-width: 100%;\n  }\n  .wh-section-block,\n  .prod-block {\n    box-shadow: none;\n    border: 1px solid #ddd;\n    margin-bottom: 12px;\n  }\n  .prod-block {\n    page-break-inside: avoid;\n  }\n  .rep-table,\n  .detail-table {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=stock-analysis-report.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: ExcelExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockAnalysisReportComponent, { className: "StockAnalysisReportComponent", filePath: "app/modules/stock/components/analyse/stock-analysis-report.component.ts", lineNumber: 21 });
})();
export {
  StockAnalysisReportComponent
};
//# sourceMappingURL=chunk-VZZSY77L.js.map
