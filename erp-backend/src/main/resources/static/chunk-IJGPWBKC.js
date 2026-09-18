import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  PdfExportService
} from "./chunk-H5LFPJCV.js";
import "./chunk-AJFTTPVD.js";
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
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/analyse/movement-analysis.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function MovementAnalysisComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3, "arrow_downward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8, "FCFA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275text(10, "Valeur des entr\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 37)(12, "span", 33);
    \u0275\u0275text(13, "arrow_upward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "div", 34);
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "span", 35);
    \u0275\u0275text(18, "FCFA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 36);
    \u0275\u0275text(20, "Valeur des sorties");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 38)(22, "span", 33);
    \u0275\u0275text(23, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "div", 34);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.fmt(ctx_r0.grandEntrees), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r0.fmt(ctx_r0.grandSorties), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.totalMoves);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Mouvement(s) ", ctx_r0.typeFilter ? "filtr\xE9s" : "au total");
  }
}
function MovementAnalysisComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275listener("click", function MovementAnalysisComponent_Conditional_43_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.search = "";
      return \u0275\u0275resetView(ctx_r0.applyFilter());
    });
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function MovementAnalysisComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 40);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des mouvements...");
    \u0275\u0275elementEnd();
  }
}
function MovementAnalysisComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function MovementAnalysisComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, "Aucun mouvement trouv\xE9 pour cette p\xE9riode");
    \u0275\u0275elementEnd();
  }
}
function MovementAnalysisComponent_Conditional_78_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Article ");
  }
}
function MovementAnalysisComponent_Conditional_78_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cat\xE9gorie ");
  }
}
function MovementAnalysisComponent_Conditional_78_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Type d'op\xE9ration ");
  }
}
function MovementAnalysisComponent_Conditional_78_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Mois ");
  }
}
function MovementAnalysisComponent_Conditional_78_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tiers ");
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("type-badge ", ctx_r0.typeColor(row_r4.key)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.label);
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.subLabel);
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, MovementAnalysisComponent_Conditional_78_For_26_Conditional_5_Conditional_2_Template, 2, 1, "span", 61);
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.subLabel ? 2 : -1);
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.productCode);
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.productName);
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", m_r5.partnerName);
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.pickingRef);
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 62)(1, "td", 63)(2, "span", 64);
    \u0275\u0275text(3, "subdirectory_arrow_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_6_Template, 2, 1, "span", 65);
    \u0275\u0275conditionalCreate(7, MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(8, MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_8_Template, 2, 1, "span", 66);
    \u0275\u0275conditionalCreate(9, MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Conditional_9_Template, 2, 1, "span", 67);
    \u0275\u0275elementStart(10, "span", 68);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 69);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 69);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 70);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 70);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 71);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 71);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "td", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275interpolate1("type-badge ", ctx_r0.typeColor(m_r5.moveDirection || m_r5.pickingTypeCode), " small"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.typeLabel(m_r5.moveDirection || m_r5.pickingTypeCode));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy !== "product" && m_r5.productCode ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy !== "product" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy !== "partner" && m_r5.partnerName ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r5.pickingRef ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtDate(m_r5.dateDone));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (m_r5.moveDirection || m_r5.pickingTypeCode) === "incoming" ? ctx_r0.fmt(m_r5.qtyDone || m_r5.qtyDemanded, 2) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (m_r5.moveDirection || m_r5.pickingTypeCode) === "incoming" ? ctx_r0.fmt(m_r5.subtotalValue || 0) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (m_r5.moveDirection || m_r5.pickingTypeCode) === "outgoing" ? ctx_r0.fmt(m_r5.qtyDone || m_r5.qtyDemanded, 2) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (m_r5.moveDirection || m_r5.pickingTypeCode) === "outgoing" ? ctx_r0.fmt(m_r5.subtotalValue || 0) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (m_r5.moveDirection || m_r5.pickingTypeCode) === "internal" ? ctx_r0.fmt(m_r5.qtyDone || m_r5.qtyDemanded, 2) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (m_r5.moveDirection || m_r5.pickingTypeCode) === "internal" ? ctx_r0.fmt(m_r5.subtotalValue || 0) : "", " ");
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_For_1_Template, 25, 15, "tr", 62, _forTrack1);
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.getGroupMoves(row_r4.key));
  }
}
function MovementAnalysisComponent_Conditional_78_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 52);
    \u0275\u0275listener("click", function MovementAnalysisComponent_Conditional_78_For_26_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleGroup(row_r4.key));
    });
    \u0275\u0275elementStart(1, "td", 53)(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MovementAnalysisComponent_Conditional_78_For_26_Conditional_4_Template, 2, 4, "span", 55)(5, MovementAnalysisComponent_Conditional_78_For_26_Conditional_5_Template, 3, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 57);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 58);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 58);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 59)(19, "span", 51);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, MovementAnalysisComponent_Conditional_78_For_26_Conditional_21_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isExpanded(row_r4.key) ? "expand_more" : "chevron_right", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy === "type" ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.qtyEntrees > 0 ? ctx_r0.fmt(row_r4.qtyEntrees, 2) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.valEntrees > 0 ? ctx_r0.fmt(row_r4.valEntrees) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.qtySorties > 0 ? ctx_r0.fmt(row_r4.qtySorties, 2) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.valSorties > 0 ? ctx_r0.fmt(row_r4.valSorties) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.qtyTransferts > 0 ? ctx_r0.fmt(row_r4.qtyTransferts, 2) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.valTransferts > 0 ? ctx_r0.fmt(row_r4.valTransferts) : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.rowCount);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isExpanded(row_r4.key) ? 21 : -1);
  }
}
function MovementAnalysisComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 41)(2, "thead")(3, "tr")(4, "th", 42);
    \u0275\u0275conditionalCreate(5, MovementAnalysisComponent_Conditional_78_Conditional_5_Template, 1, 0);
    \u0275\u0275conditionalCreate(6, MovementAnalysisComponent_Conditional_78_Conditional_6_Template, 1, 0);
    \u0275\u0275conditionalCreate(7, MovementAnalysisComponent_Conditional_78_Conditional_7_Template, 1, 0);
    \u0275\u0275conditionalCreate(8, MovementAnalysisComponent_Conditional_78_Conditional_8_Template, 1, 0);
    \u0275\u0275conditionalCreate(9, MovementAnalysisComponent_Conditional_78_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11, "Qt\xE9 Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 43);
    \u0275\u0275text(13, "Val. Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 44);
    \u0275\u0275text(15, "Qt\xE9 Sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 44);
    \u0275\u0275text(17, "Val. Sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 45);
    \u0275\u0275text(19, "Qt\xE9 Transferts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 45);
    \u0275\u0275text(21, "Val. Transferts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 46);
    \u0275\u0275text(23, "Mvts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, MovementAnalysisComponent_Conditional_78_For_26_Template, 22, 10, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "tfoot")(28, "tr", 47)(29, "td")(30, "strong");
    \u0275\u0275text(31, "TOTAL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 48);
    \u0275\u0275text(33, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 48);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 49);
    \u0275\u0275text(37, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 49);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 50);
    \u0275\u0275text(41, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 50);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td", 46)(45, "span", 51);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.groupBy === "product" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy === "category" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy === "type" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy === "month" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.groupBy === "partner" ? 9 : -1);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.summaryRows);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.fmt(ctx_r0.grandEntrees));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.fmt(ctx_r0.grandSorties));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.fmt(ctx_r0.grandTransferts));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.totalMoves);
  }
}
var MovementAnalysisComponent = class _MovementAnalysisComponent {
  constructor(stockService, authService, pdfExport) {
    this.stockService = stockService;
    this.authService = authService;
    this.pdfExport = pdfExport;
    this.moves = [];
    this.filtered = [];
    this.loading = false;
    this.errorMsg = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.search = "";
    this.groupBy = "product";
    this.typeFilter = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateFrom = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
    this.dateTo = now.toISOString().slice(0, 10);
    this.load();
  }
  load() {
    const cid = this.authService.getCompanyId();
    this.loading = true;
    this.errorMsg = "";
    this.stockService.getMovements(cid, {
      dateFrom: this.dateFrom || void 0,
      dateTo: this.dateTo || void 0
    }).subscribe({
      next: (data) => {
        this.moves = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.errorMsg = "Erreur de chargement";
        this.loading = false;
      }
    });
  }
  applyFilter() {
    let result = [...this.moves];
    if (this.typeFilter)
      result = result.filter((m) => (m.moveDirection || m.pickingTypeCode) === this.typeFilter);
    const q = this.search.toLowerCase().trim();
    if (q)
      result = result.filter((m) => (m.productName || "").toLowerCase().includes(q) || (m.productCode || "").toLowerCase().includes(q) || (m.categoryName || "").toLowerCase().includes(q) || (m.partnerName || "").toLowerCase().includes(q));
    this.filtered = result;
    this.expandedGroups.clear();
  }
  toggleGroup(key) {
    if (this.expandedGroups.has(key))
      this.expandedGroups.delete(key);
    else
      this.expandedGroups.add(key);
  }
  isExpanded(key) {
    return this.expandedGroups.has(key);
  }
  expandAll() {
    this.summaryRows.forEach((r) => this.expandedGroups.add(r.key));
  }
  collapseAll() {
    this.expandedGroups.clear();
  }
  // ── Summary aggregation ────────────────────────────────────────────────────
  get summaryRows() {
    const map = /* @__PURE__ */ new Map();
    for (const m of this.filtered) {
      let key;
      let label;
      let subLabel;
      switch (this.groupBy) {
        case "category":
          key = String(m.categoryId ?? "0");
          label = m.categoryName || "(Sans cat\xE9gorie)";
          subLabel = void 0;
          break;
        case "type":
          key = m.moveDirection || m.pickingTypeCode || "unknown";
          label = this.typeLabel(m.moveDirection || m.pickingTypeCode);
          break;
        case "month":
          if (m.dateDone) {
            const d = new Date(m.dateDone);
            key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
            label = d.toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
          } else {
            key = "nodate";
            label = "Date inconnue";
          }
          break;
        case "partner":
          key = m.partnerName || "(Sans tiers)";
          label = m.partnerName || "(Sans tiers)";
          break;
        default:
          key = String(m.productId);
          label = m.productName || "?";
          subLabel = m.productCode || void 0;
      }
      if (!map.has(key)) {
        map.set(key, {
          key,
          label,
          subLabel,
          qtyEntrees: 0,
          valEntrees: 0,
          qtySorties: 0,
          valSorties: 0,
          qtyTransferts: 0,
          valTransferts: 0,
          rowCount: 0,
          moves: []
        });
      }
      const g = map.get(key);
      const qty = m.qtyDone || m.qtyDemanded || 0;
      const val = m.subtotalValue || 0;
      const dir = m.moveDirection || m.pickingTypeCode || "internal";
      if (dir === "incoming") {
        g.qtyEntrees += qty;
        g.valEntrees += val;
      } else if (dir === "outgoing") {
        g.qtySorties += qty;
        g.valSorties += val;
      } else {
        g.qtyTransferts += qty;
        g.valTransferts += val;
      }
      g.rowCount++;
      g.moves.push(m);
    }
    const arr = Array.from(map.values());
    if (this.groupBy === "month")
      arr.sort((a, b) => a.key.localeCompare(b.key));
    else
      arr.sort((a, b) => b.valEntrees + b.valSorties - (a.valEntrees + a.valSorties));
    return arr;
  }
  getGroupMoves(key) {
    return this.filtered.filter((m) => {
      switch (this.groupBy) {
        case "category":
          return String(m.categoryId ?? "0") === key;
        case "type":
          return (m.pickingTypeCode || "unknown") === key;
        case "month": {
          if (!m.dateDone)
            return key === "nodate";
          const d = new Date(m.dateDone);
          return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}` === key;
        }
        case "partner":
          return (m.partnerName || "(Sans tiers)") === key;
        default:
          return String(m.productId) === key;
      }
    });
  }
  // ── Totaux ─────────────────────────────────────────────────────────────────
  get grandEntrees() {
    return this.summaryRows.reduce((s, r) => s + r.valEntrees, 0);
  }
  get grandSorties() {
    return this.summaryRows.reduce((s, r) => s + r.valSorties, 0);
  }
  get grandTransferts() {
    return this.summaryRows.reduce((s, r) => s + r.valTransferts, 0);
  }
  get totalMoves() {
    return this.filtered.length;
  }
  typeLabel(code) {
    if (code === "incoming")
      return "R\xE9ceptions";
    if (code === "outgoing")
      return "Livraisons";
    if (code === "internal")
      return "Transferts internes";
    return "Inconnu";
  }
  typeColor(code) {
    if (code === "incoming")
      return "reception";
    if (code === "outgoing")
      return "livraison";
    return "transfert";
  }
  fmt(v, dec = 0) {
    return new Intl.NumberFormat("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v || 0);
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("fr-FR");
  }
  exportPdf() {
    window.print();
  }
  static {
    this.\u0275fac = function MovementAnalysisComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MovementAnalysisComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementAnalysisComponent, selectors: [["app-movement-analysis"]], decls: 79, vars: 17, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions", "no-print"], [1, "btn-secondary", "btn-pdf", 3, "click"], [1, "material-icons"], [1, "filter-bar", "no-print"], [1, "filter-group"], ["type", "date", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "incoming"], ["value", "outgoing"], ["value", "internal"], [1, "btn-primary", 3, "click"], [1, "kpi-row"], [1, "toolbar", "no-print"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher un article, cat\xE9gorie, tiers...", 3, "ngModelChange", "ngModel"], [1, "material-icons", "clear-icon"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "click"], [1, "expand-btns"], [1, "btn-link", 3, "click"], [1, "sep"], [1, "loading-state"], [1, "alert-error"], [1, "empty-card"], [1, "report-card"], [1, "kpi-card", "green"], [1, "kpi-icon", "material-icons"], [1, "kpi-value"], [1, "kpi-currency"], [1, "kpi-label"], [1, "kpi-card", "red"], [1, "kpi-card"], [1, "material-icons", "clear-icon", 3, "click"], [1, "material-icons", "spin"], [1, "report-table"], [1, "col-group"], [1, "col-num", "col-green"], [1, "col-num", "col-red"], [1, "col-num", "col-blue", "no-print"], [1, "col-num", "no-print"], [1, "total-row"], [1, "col-num", "mono", "fw-bold", "col-green"], [1, "col-num", "mono", "fw-bold", "col-red"], [1, "col-num", "mono", "fw-bold", "col-blue", "no-print"], [1, "badge"], [1, "group-header-row", 3, "click"], [1, "group-header-cell"], [1, "expand-icon", "material-icons", "no-print"], [3, "class"], [1, "col-num", "group-num", "col-green"], [1, "col-num", "group-num", "col-red"], [1, "col-num", "group-num", "col-blue", "no-print"], [1, "col-num", "group-num", "no-print"], [1, "group-label"], [1, "code-badge", "ml-4"], [1, "detail-row"], [1, "detail-label-cell"], [1, "indent-icon", "material-icons"], [1, "code-badge"], [1, "text-muted"], [1, "picking-ref"], [1, "text-muted", "small", "ml-4"], [1, "col-num", "mono", "col-green"], [1, "col-num", "mono", "col-red"], [1, "col-num", "mono", "col-blue", "no-print"], [1, "no-print"]], template: function MovementAnalysisComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Analyse des Mouvements de Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Entr\xE9es, sorties et transferts par p\xE9riode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_8_listener() {
          return ctx.exportPdf();
        });
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Imprimer ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "label");
        \u0275\u0275text(15, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function MovementAnalysisComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "label");
        \u0275\u0275text(19, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function MovementAnalysisComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "label");
        \u0275\u0275text(23, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MovementAnalysisComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.typeFilter, $event) || (ctx.typeFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MovementAnalysisComponent_Template_select_ngModelChange_24_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(25, "option", 11);
        \u0275\u0275text(26, "Tous les types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 12);
        \u0275\u0275text(28, "R\xE9ceptions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 13);
        \u0275\u0275text(30, "Livraisons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 14);
        \u0275\u0275text(32, "Transferts internes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "button", 15);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_33_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(34, "span", 6);
        \u0275\u0275text(35, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " Analyser ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(37, MovementAnalysisComponent_Conditional_37_Template, 29, 4, "div", 16);
        \u0275\u0275elementStart(38, "div", 17)(39, "div", 18)(40, "span", 6);
        \u0275\u0275text(41, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function MovementAnalysisComponent_Template_input_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MovementAnalysisComponent_Template_input_ngModelChange_42_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(43, MovementAnalysisComponent_Conditional_43_Template, 2, 0, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 21)(45, "span", 22);
        \u0275\u0275text(46, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 23)(48, "button", 24);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_48_listener() {
          ctx.groupBy = "product";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(49, "span", 6);
        \u0275\u0275text(50, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " Article ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 24);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_52_listener() {
          ctx.groupBy = "category";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(53, "span", 6);
        \u0275\u0275text(54, "label");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " Cat\xE9gorie ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 24);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_56_listener() {
          ctx.groupBy = "type";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(57, "span", 6);
        \u0275\u0275text(58, "sync_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " Type ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 24);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_60_listener() {
          ctx.groupBy = "month";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(61, "span", 6);
        \u0275\u0275text(62, "calendar_month");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " Mois ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 24);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_64_listener() {
          ctx.groupBy = "partner";
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(65, "span", 6);
        \u0275\u0275text(66, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " Tiers ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 25)(69, "button", 26);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_69_listener() {
          return ctx.expandAll();
        });
        \u0275\u0275text(70, "Tout d\xE9velopper");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "span", 27);
        \u0275\u0275text(72, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "button", 26);
        \u0275\u0275listener("click", function MovementAnalysisComponent_Template_button_click_73_listener() {
          return ctx.collapseAll();
        });
        \u0275\u0275text(74, "Tout r\xE9duire");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(75, MovementAnalysisComponent_Conditional_75_Template, 4, 0, "div", 28)(76, MovementAnalysisComponent_Conditional_76_Template, 2, 1, "div", 29)(77, MovementAnalysisComponent_Conditional_77_Template, 2, 0, "div", 30)(78, MovementAnalysisComponent_Conditional_78_Template, 47, 9, "div", 31);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.typeFilter);
        \u0275\u0275advance(13);
        \u0275\u0275conditional(!ctx.loading && ctx.filtered.length > 0 ? 37 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.search ? 43 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.groupBy === "product");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.groupBy === "category");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.groupBy === "type");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.groupBy === "month");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.groupBy === "partner");
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.loading ? 75 : ctx.errorMsg ? 76 : ctx.summaryRows.length === 0 ? 77 : 78);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--bg-hover);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid var(--border-light);\n}\n.kpi-card.accent[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--primary);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%]   .kpi-currency[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.report-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--primary);\n}\n.report-card-header.warehouse[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.report-card-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.col-code[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.col-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n  width: 60px;\n}\n.col-num[_ngcontent-%COMP%] {\n  text-align: right !important;\n  width: 110px;\n}\n.col-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  text-align: center !important;\n}\n.product-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.product-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n}\n.product-name-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.location-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n  border-bottom: 1px solid var(--border-light);\n}\n.loc-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.loc-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.subtotal-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated) !important;\n  border-top: 1px solid var(--border);\n  font-weight: 600;\n}\n.groupby-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.groupby-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.groupby-btns[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n  border-right: 1px solid var(--border);\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.groupby-btns[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.groupby-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--bg-hover);\n}\n.expand-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  font-size: 12px;\n}\n.expand-btns[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: var(--border);\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 12px;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.clear-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 16px;\n}\n.clear-icon[_ngcontent-%COMP%]:hover {\n  color: var(--text-secondary);\n}\n.col-group[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n.group-header-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: var(--bg-elevated) !important;\n}\n.group-header-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n}\n.group-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.group-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 12px !important;\n}\n.group-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.group-count[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.group-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--primary);\n}\n.group-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: var(--bg-elevated) !important;\n}\n.detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.detail-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover) !important;\n}\n.detail-label-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-left: 28px !important;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.indent-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.grand-total-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-elevated);\n  border-radius: 8px;\n  padding: 12px 20px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.grand-total-bar[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 16px;\n}\n.empty-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-top: 2px solid var(--border);\n  background: var(--bg-hover);\n  font-weight: 600;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.positive[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.negative[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.low-stock[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--bg-hover);\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.ajustement[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-badge.transfert[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n@media print {\n  .toolbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%], \n   .no-print[_ngcontent-%COMP%], \n   .expand-icon[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .card[_ngcontent-%COMP%], \n   .report-card[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 14px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n  border: 1px solid var(--border);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.kpi-card.green[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: var(--success-bg);\n}\n.kpi-card.green[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.kpi-card.red[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  background: var(--danger-bg);\n}\n.kpi-card.red[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.col-green[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.col-red[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.col-blue[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\nthead[_ngcontent-%COMP%]   th.col-green[_ngcontent-%COMP%] {\n  background: var(--success-bg) !important;\n  color: var(--success);\n}\nthead[_ngcontent-%COMP%]   th.col-red[_ngcontent-%COMP%] {\n  background: var(--danger-bg) !important;\n  color: var(--danger);\n}\nthead[_ngcontent-%COMP%]   th.col-blue[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n  color: var(--primary);\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.picking-ref[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.ml-4[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.type-badge.reception[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.transfert[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.type-badge.small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 1px 5px;\n}\n/*# sourceMappingURL=movement-analysis.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovementAnalysisComponent, [{
    type: Component,
    args: [{ selector: "app-movement-analysis", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2500\u2500 En-t\xEAte \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div>
      <h1 class="page-title">Analyse des Mouvements de Stock</h1>
      <p class="page-subtitle">Entr\xE9es, sorties et transferts par p\xE9riode</p>
    </div>
    <div class="header-actions no-print">
      <button class="btn-secondary btn-pdf" (click)="exportPdf()">
        <span class="material-icons">print</span> Imprimer
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 Filtres \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="filter-bar no-print">
    <div class="filter-group">
      <label>Du</label>
      <input type="date" [(ngModel)]="dateFrom" />
    </div>
    <div class="filter-group">
      <label>Au</label>
      <input type="date" [(ngModel)]="dateTo" />
    </div>
    <div class="filter-group">
      <label>Type</label>
      <select [(ngModel)]="typeFilter" (ngModelChange)="applyFilter()">
        <option value="">Tous les types</option>
        <option value="incoming">R\xE9ceptions</option>
        <option value="outgoing">Livraisons</option>
        <option value="internal">Transferts internes</option>
      </select>
    </div>
    <button class="btn-primary" (click)="load()">
      <span class="material-icons">search</span> Analyser
    </button>
  </div>

  <!-- \u2500\u2500 KPIs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (!loading && filtered.length > 0) {
    <div class="kpi-row">
      <div class="kpi-card green">
        <span class="kpi-icon material-icons">arrow_downward</span>
        <div>
          <div class="kpi-value">{{ fmt(grandEntrees) }} <span class="kpi-currency">FCFA</span></div>
          <div class="kpi-label">Valeur des entr\xE9es</div>
        </div>
      </div>
      <div class="kpi-card red">
        <span class="kpi-icon material-icons">arrow_upward</span>
        <div>
          <div class="kpi-value">{{ fmt(grandSorties) }} <span class="kpi-currency">FCFA</span></div>
          <div class="kpi-label">Valeur des sorties</div>
        </div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon material-icons">swap_horiz</span>
        <div>
          <div class="kpi-value">{{ totalMoves }}</div>
          <div class="kpi-label">Mouvement(s) {{ typeFilter ? 'filtr\xE9s' : 'au total' }}</div>
        </div>
      </div>
    </div>
  }

  <!-- \u2500\u2500 Toolbar GroupBy + Recherche \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="toolbar no-print">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()"
             placeholder="Rechercher un article, cat\xE9gorie, tiers..." />
      @if (search) {
        <span class="material-icons clear-icon" (click)="search=''; applyFilter()">close</span>
      }
    </div>

    <div class="groupby-bar">
      <span class="groupby-label">Regrouper par :</span>
      <div class="groupby-btns">
        <button [class.active]="groupBy === 'product'"  (click)="groupBy='product';  applyFilter()">
          <span class="material-icons">category</span> Article
        </button>
        <button [class.active]="groupBy === 'category'" (click)="groupBy='category'; applyFilter()">
          <span class="material-icons">label</span> Cat\xE9gorie
        </button>
        <button [class.active]="groupBy === 'type'"     (click)="groupBy='type';     applyFilter()">
          <span class="material-icons">sync_alt</span> Type
        </button>
        <button [class.active]="groupBy === 'month'"    (click)="groupBy='month';    applyFilter()">
          <span class="material-icons">calendar_month</span> Mois
        </button>
        <button [class.active]="groupBy === 'partner'"  (click)="groupBy='partner';  applyFilter()">
          <span class="material-icons">person</span> Tiers
        </button>
      </div>
      <div class="expand-btns">
        <button class="btn-link" (click)="expandAll()">Tout d\xE9velopper</button>
        <span class="sep">|</span>
        <button class="btn-link" (click)="collapseAll()">Tout r\xE9duire</button>
      </div>
    </div>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement des mouvements...</div>
  } @else if (errorMsg) {
    <div class="alert-error">{{ errorMsg }}</div>
  } @else if (summaryRows.length === 0) {
    <div class="empty-card">Aucun mouvement trouv\xE9 pour cette p\xE9riode</div>
  } @else {

    <div class="report-card">
      <table class="report-table">
        <thead>
          <tr>
            <th class="col-group">
              @if (groupBy === 'product')  { Article }
              @if (groupBy === 'category') { Cat\xE9gorie }
              @if (groupBy === 'type')     { Type d'op\xE9ration }
              @if (groupBy === 'month')    { Mois }
              @if (groupBy === 'partner')  { Tiers }
            </th>
            <th class="col-num col-green">Qt\xE9 Entr\xE9es</th>
            <th class="col-num col-green">Val. Entr\xE9es</th>
            <th class="col-num col-red">Qt\xE9 Sorties</th>
            <th class="col-num col-red">Val. Sorties</th>
            <th class="col-num col-blue no-print">Qt\xE9 Transferts</th>
            <th class="col-num col-blue no-print">Val. Transferts</th>
            <th class="col-num no-print">Mvts</th>
          </tr>
        </thead>
        <tbody>
          @for (row of summaryRows; track row.key) {

            <!-- Ligne de groupe -->
            <tr class="group-header-row" (click)="toggleGroup(row.key)">
              <td class="group-header-cell">
                <span class="expand-icon material-icons no-print">
                  {{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}
                </span>
                @if (groupBy === 'type') {
                  <span class="type-badge {{ typeColor(row.key) }}">{{ row.label }}</span>
                } @else {
                  <span class="group-label">{{ row.label }}</span>
                  @if (row.subLabel) { <span class="code-badge ml-4">{{ row.subLabel }}</span> }
                }
              </td>
              <td class="col-num group-num col-green">{{ row.qtyEntrees > 0 ? fmt(row.qtyEntrees, 2) : '\u2014' }}</td>
              <td class="col-num group-num col-green">{{ row.valEntrees > 0 ? fmt(row.valEntrees) : '\u2014' }}</td>
              <td class="col-num group-num col-red">{{ row.qtySorties > 0 ? fmt(row.qtySorties, 2) : '\u2014' }}</td>
              <td class="col-num group-num col-red">{{ row.valSorties > 0 ? fmt(row.valSorties) : '\u2014' }}</td>
              <td class="col-num group-num col-blue no-print">{{ row.qtyTransferts > 0 ? fmt(row.qtyTransferts, 2) : '\u2014' }}</td>
              <td class="col-num group-num col-blue no-print">{{ row.valTransferts > 0 ? fmt(row.valTransferts) : '\u2014' }}</td>
              <td class="col-num group-num no-print">
                <span class="badge">{{ row.rowCount }}</span>
              </td>
            </tr>

            <!-- D\xE9tail des mouvements (expand\xE9s) -->
            @if (isExpanded(row.key)) {
              @for (m of getGroupMoves(row.key); track m.id) {
                <tr class="detail-row">
                  <td class="detail-label-cell">
                    <span class="indent-icon material-icons">subdirectory_arrow_right</span>
                    <span class="type-badge {{ typeColor(m.moveDirection || m.pickingTypeCode) }} small">{{ typeLabel(m.moveDirection || m.pickingTypeCode) }}</span>
                    @if (groupBy !== 'product' && m.productCode) {
                      <span class="code-badge">{{ m.productCode }}</span>
                    }
                    @if (groupBy !== 'product') { <span>{{ m.productName }}</span> }
                    @if (groupBy !== 'partner' && m.partnerName) {
                      <span class="text-muted"> \u2014 {{ m.partnerName }}</span>
                    }
                    @if (m.pickingRef) {
                      <span class="picking-ref">{{ m.pickingRef }}</span>
                    }
                    <span class="text-muted small ml-4">{{ fmtDate(m.dateDone) }}</span>
                  </td>
                  <td class="col-num mono col-green">
                    {{ (m.moveDirection || m.pickingTypeCode) === 'incoming' ? fmt(m.qtyDone || m.qtyDemanded, 2) : '' }}
                  </td>
                  <td class="col-num mono col-green">
                    {{ (m.moveDirection || m.pickingTypeCode) === 'incoming' ? fmt(m.subtotalValue || 0) : '' }}
                  </td>
                  <td class="col-num mono col-red">
                    {{ (m.moveDirection || m.pickingTypeCode) === 'outgoing' ? fmt(m.qtyDone || m.qtyDemanded, 2) : '' }}
                  </td>
                  <td class="col-num mono col-red">
                    {{ (m.moveDirection || m.pickingTypeCode) === 'outgoing' ? fmt(m.subtotalValue || 0) : '' }}
                  </td>
                  <td class="col-num mono col-blue no-print">
                    {{ (m.moveDirection || m.pickingTypeCode) === 'internal' ? fmt(m.qtyDone || m.qtyDemanded, 2) : '' }}
                  </td>
                  <td class="col-num mono col-blue no-print">
                    {{ (m.moveDirection || m.pickingTypeCode) === 'internal' ? fmt(m.subtotalValue || 0) : '' }}
                  </td>
                  <td class="no-print"></td>
                </tr>
              }
            }

          }
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>TOTAL</strong></td>
            <td class="col-num mono fw-bold col-green">\u2014</td>
            <td class="col-num mono fw-bold col-green">{{ fmt(grandEntrees) }}</td>
            <td class="col-num mono fw-bold col-red">\u2014</td>
            <td class="col-num mono fw-bold col-red">{{ fmt(grandSorties) }}</td>
            <td class="col-num mono fw-bold col-blue no-print">\u2014</td>
            <td class="col-num mono fw-bold col-blue no-print">{{ fmt(grandTransferts) }}</td>
            <td class="col-num no-print"><span class="badge">{{ totalMoves }}</span></td>
          </tr>
        </tfoot>
      </table>
    </div>

  }
</div>
`, styles: ['/* src/app/modules/stock/components/analyse/movement-analysis.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.view-toggle button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.view-toggle button .material-icons {\n  font-size: 15px;\n}\n.view-toggle button.active {\n  background: var(--primary);\n  color: white;\n}\n.view-toggle button:not(.active):hover {\n  background: var(--bg-hover);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  border: 1px solid var(--border-light);\n}\n.kpi-card.accent {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.kpi-card .kpi-icon {\n  font-size: 32px;\n  color: var(--primary);\n}\n.kpi-card .kpi-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Roboto Mono", monospace;\n}\n.kpi-card .kpi-value .kpi-currency {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.kpi-card .kpi-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 7px 12px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.filter-select {\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.filter-select:focus {\n  border-color: var(--primary);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.report-card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.report-card-header .material-icons {\n  font-size: 18px;\n  color: var(--primary);\n}\n.report-card-header.warehouse .material-icons {\n  color: var(--text-secondary);\n}\n.report-card-header .badge {\n  margin-left: auto;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.col-code {\n  width: 110px;\n}\n.col-center {\n  text-align: center !important;\n  width: 60px;\n}\n.col-num {\n  text-align: right !important;\n  width: 110px;\n}\n.col-icon {\n  width: 36px;\n  text-align: center !important;\n}\n.product-row {\n  cursor: pointer;\n}\n.product-row:hover td {\n  background: var(--primary-subtle) !important;\n}\n.product-name-cell {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.location-row td {\n  background: var(--bg-elevated) !important;\n  border-bottom: 1px solid var(--border-light);\n}\n.loc-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.loc-icon {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.expand-icon {\n  font-size: 18px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.subtotal-row td {\n  background: var(--bg-elevated) !important;\n  border-top: 1px solid var(--border);\n  font-weight: 600;\n}\n.groupby-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.groupby-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.groupby-btns {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.groupby-btns button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border: none;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  white-space: nowrap;\n  border-right: 1px solid var(--border);\n}\n.groupby-btns button .material-icons {\n  font-size: 15px;\n}\n.groupby-btns button:last-child {\n  border-right: none;\n}\n.groupby-btns button.active {\n  background: var(--primary);\n  color: white;\n}\n.groupby-btns button:not(.active):hover {\n  background: var(--bg-hover);\n}\n.expand-btns {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  font-size: 12px;\n}\n.expand-btns .sep {\n  color: var(--border);\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 12px;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: var(--primary);\n}\n.clear-icon {\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 16px;\n}\n.clear-icon:hover {\n  color: var(--text-secondary);\n}\n.col-group {\n  min-width: 260px;\n}\n.group-header-row {\n  cursor: pointer;\n  background: var(--bg-elevated) !important;\n}\n.group-header-row:hover td {\n  background: var(--primary-subtle) !important;\n}\n.group-header-row td {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.group-header-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 12px !important;\n}\n.group-label {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.group-count {\n  margin-left: 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.group-icon {\n  font-size: 17px;\n  color: var(--primary);\n}\n.group-num {\n  font-weight: 600;\n  background: var(--bg-elevated) !important;\n}\n.detail-row td {\n  background: var(--bg-surface);\n}\n.detail-row:hover td {\n  background: var(--bg-hover) !important;\n}\n.detail-label-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-left: 28px !important;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.indent-icon {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.grand-total-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-elevated);\n  border-radius: 8px;\n  padding: 12px 20px;\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.grand-total-bar .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 16px;\n}\n.empty-card {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\ntd {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\ntbody tr:hover td {\n  background: var(--bg-hover);\n}\ntfoot td {\n  padding: 9px 12px;\n  border-top: 2px solid var(--border);\n  background: var(--bg-hover);\n  font-weight: 600;\n}\n.total-row td {\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.fw-bold {\n  font-weight: 600;\n}\n.positive {\n  color: var(--success);\n}\n.negative {\n  color: var(--danger);\n}\n.low-stock {\n  color: var(--danger);\n  font-weight: 600;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.code-badge {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.loc-chip {\n  display: inline-block;\n  background: var(--bg-hover);\n  border-radius: 3px;\n  padding: 1px 5px;\n  font-size: 11px;\n  margin: 1px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.reception {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.ajustement {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-badge.transfert {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n@media print {\n  .toolbar,\n  .header-actions,\n  .btn-secondary,\n  .btn-primary,\n  .no-print,\n  .expand-icon {\n    display: none !important;\n  }\n  .page-container {\n    padding: 0;\n  }\n  .card,\n  .report-card {\n    box-shadow: none;\n  }\n  .view-toggle {\n    display: none !important;\n  }\n}\n.filter-bar {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 14px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n  border: 1px solid var(--border);\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.filter-group input,\n.filter-group select {\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.filter-group input:focus,\n.filter-group select:focus {\n  border-color: var(--primary);\n}\n.kpi-card.green {\n  border-color: #28a745;\n  background: var(--success-bg);\n}\n.kpi-card.green .kpi-icon {\n  color: #28a745;\n}\n.kpi-card.red {\n  border-color: var(--danger);\n  background: var(--danger-bg);\n}\n.kpi-card.red .kpi-icon {\n  color: var(--danger);\n}\n.col-green {\n  color: var(--success);\n}\n.col-red {\n  color: var(--danger);\n}\n.col-blue {\n  color: var(--primary);\n}\nthead th.col-green {\n  background: var(--success-bg) !important;\n  color: var(--success);\n}\nthead th.col-red {\n  background: var(--danger-bg) !important;\n  color: var(--danger);\n}\nthead th.col-blue {\n  background: var(--primary-subtle) !important;\n  color: var(--primary);\n}\n.alert-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.picking-ref {\n  display: inline-block;\n  margin-left: 6px;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.ml-4 {\n  margin-left: 4px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.type-badge.reception {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-badge.livraison {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.type-badge.transfert {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.type-badge.small {\n  font-size: 10px;\n  padding: 1px 5px;\n}\n/*# sourceMappingURL=movement-analysis.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementAnalysisComponent, { className: "MovementAnalysisComponent", filePath: "app/modules/stock/components/analyse/movement-analysis.component.ts", lineNumber: 30 });
})();
export {
  MovementAnalysisComponent
};
//# sourceMappingURL=chunk-IJGPWBKC.js.map
