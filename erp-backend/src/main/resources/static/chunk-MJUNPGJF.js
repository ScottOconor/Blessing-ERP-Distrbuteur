import {
  RemiseService
} from "./chunk-RVH7W7CX.js";
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
  NgModel
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

// src/app/modules/purchases/components/rapports/rapport-remise.component.ts
var ExcelJS = __toESM(require_exceljs_min());
var _forTrack0 = ($index, $item) => $item.partnerName;
var _forTrack1 = ($index, $item) => $item.categoryName + $item.typeRemise;
function RapportRemiseComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 17);
    \u0275\u0275listener("click", function RapportRemiseComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function RapportRemiseComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd()();
  }
}
function RapportRemiseComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9ration\u2026 ");
  }
}
function RapportRemiseComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function RapportRemiseComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 4);
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
function RapportRemiseComponent_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 4);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune remise enregistr\xE9e sur cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_1_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 60);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 60);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 56);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-brasserie", l_r6.typeRemise === "brasserie")("badge-guinness", l_r6.typeRemise === "guinness");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r6.typeRemise || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.productName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, l_r6.quantite, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 13, l_r6.montantUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 16, l_r6.montantTotal, "1.0-0"));
  }
}
function RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 50)(1, "thead")(2, "tr")(3, "th", 51);
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 52);
    \u0275\u0275text(10, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 52);
    \u0275\u0275text(12, "P.U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 53);
    \u0275\u0275text(14, "Montant (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_1_For_17_Template, 17, 19, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tfoot")(19, "tr", 54)(20, "td", 55);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 56);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const block_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(16);
    \u0275\u0275repeater(block_r5.articleLines);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Sous-total ", block_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 2, block_r5.total, "1.0-0"), " FCFA");
  }
}
function RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 56);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-brasserie", l_r7.typeRemise === "brasserie")("badge-guinness", l_r7.typeRemise === "guinness");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r7.typeRemise || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r7.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, l_r7.totalAmount, "1.0-0"));
  }
}
function RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 50)(1, "thead")(2, "tr")(3, "th", 51);
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Cat\xE9gorie d'article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 53);
    \u0275\u0275text(8, "Montant (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_2_For_11_Template, 9, 10, "tr", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "tfoot")(13, "tr", 54)(14, "td", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 56);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const block_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275repeater(block_r5.categoryLines);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Sous-total ", block_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 2, block_r5.total, "1.0-0"), " FCFA");
  }
}
function RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275conditionalCreate(1, RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_1_Template, 25, 5, "table", 50);
    \u0275\u0275conditionalCreate(2, RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Conditional_2_Template, 19, 5, "table", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subGroupBy === "articles" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subGroupBy === "categories" ? 2 : -1);
  }
}
function RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275listener("click", function RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Template_div_click_1_listener() {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(block_r5.partnerName));
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 47)(12, "span", 48);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Conditional_15_Template, 3, 2, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-open", ctx_r1.isExpanded(block_r5.partnerName));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded(block_r5.partnerName) ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(block_r5.partnerName.charAt(0).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(block_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.subGroupBy === "articles" ? block_r5.articleLines.length : block_r5.categoryLines.length, " ligne(s) ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 8, block_r5.total, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded(block_r5.partnerName) ? 15 : -1);
  }
}
function RapportRemiseComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "span", 4);
    \u0275\u0275text(4, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 25);
    \u0275\u0275text(7, "Total remises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementStart(11, "span", 27);
    \u0275\u0275text(12, "FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 22)(14, "div", 28)(15, "span", 4);
    \u0275\u0275text(16, "sports_bar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 24)(18, "div", 25);
    \u0275\u0275text(19, "Brasseries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementStart(23, "span", 27);
    \u0275\u0275text(24, "FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 22)(26, "div", 29)(27, "span", 4);
    \u0275\u0275text(28, "liquor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 24)(30, "div", 25);
    \u0275\u0275text(31, "Guinness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 26);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementStart(35, "span", 27);
    \u0275\u0275text(36, "FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 22)(38, "div", 30)(39, "span", 4);
    \u0275\u0275text(40, "store");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "div", 25);
    \u0275\u0275text(43, "Fournisseurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 26);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 31)(47, "span", 32)(48, "span", 4);
    \u0275\u0275text(49, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 33)(52, "button", 34);
    \u0275\u0275listener("click", function RapportRemiseComponent_Conditional_40_Conditional_1_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275elementStart(53, "span", 4);
    \u0275\u0275text(54, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Tout ouvrir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 34);
    \u0275\u0275listener("click", function RapportRemiseComponent_Conditional_40_Conditional_1_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275elementStart(57, "span", 4);
    \u0275\u0275text(58, "unfold_less");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " Tout fermer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 35);
    \u0275\u0275repeaterCreate(61, RapportRemiseComponent_Conditional_40_Conditional_1_For_62_Template, 16, 11, "div", 36, _forTrack0);
    \u0275\u0275elementStart(63, "div", 37)(64, "span", 38);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 39);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, ctx_r1.grandTotal, "1.0-0"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 11, ctx_r1.totalBrasserie, "1.0-0"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 14, ctx_r1.totalGuinness, "1.0-0"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.partnerCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.supplierBlocks.length, " fournisseur(s) \u2014 d\xE9tail ", ctx_r1.subGroupBy === "articles" ? "par articles" : "par cat\xE9gories", " ");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.supplierBlocks);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("TOTAL G\xC9N\xC9RAL \u2014 ", ctx_r1.supplierBlocks.length, " fournisseur(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(68, 17, ctx_r1.grandTotal, "1.0-0"), " FCFA");
  }
}
function RapportRemiseComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RapportRemiseComponent_Conditional_40_Conditional_0_Template, 5, 0, "div", 20)(1, RapportRemiseComponent_Conditional_40_Conditional_1_Template, 69, 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.paiements.length === 0 ? 0 : 1);
  }
}
var RapportRemiseComponent = class _RapportRemiseComponent {
  constructor(svc, auth) {
    this.svc = svc;
    this.auth = auth;
    this.dateFrom = "";
    this.dateTo = "";
    this.paiements = [];
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.subGroupBy = "articles";
    this.expandedPartners = /* @__PURE__ */ new Set();
    const today = /* @__PURE__ */ new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom = firstDay.toISOString().slice(0, 10);
    this.dateTo = today.toISOString().slice(0, 10);
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "Veuillez s\xE9lectionner une p\xE9riode.";
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.svc.getRapport(this.auth.getCompanyId(), this.dateFrom, this.dateTo).subscribe({
      next: (data) => {
        this.paiements = data;
        this.generated = true;
        this.loading = false;
        this.expandAll();
      },
      error: (e) => {
        this.loading = false;
        this.errorMsg = e?.error?.message || "Erreur lors de la g\xE9n\xE9ration.";
      }
    });
  }
  setSubGroup(v) {
    this.subGroupBy = v;
  }
  // ── Blocs par fournisseur ─────────────────────────────────────────────────
  get supplierBlocks() {
    const map = /* @__PURE__ */ new Map();
    for (const p of this.paiements) {
      const name = p.partnerName || "?";
      if (!map.has(name))
        map.set(name, { paiements: [] });
      map.get(name).paiements.push(p);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([name, { paiements }]) => {
      const articleLines = [];
      for (const p of paiements) {
        const srcLines = p.articleLines && p.articleLines.length > 0 ? p.articleLines : null;
        if (srcLines) {
          for (const l of srcLines) {
            if ((l.montantTotal ?? 0) <= 0)
              continue;
            articleLines.push({ typeRemise: p.typeRemise || "", categoryName: l.categoryName || "?", productName: l.productName || l.productCode || null, quantite: l.quantite ?? 0, montantUnit: l.montantUnitaire ?? 0, montantTotal: l.montantTotal });
          }
        } else {
          for (const l of p.lines || []) {
            const mt = l.montantTotal ?? 0;
            if (mt <= 0)
              continue;
            articleLines.push({ typeRemise: p.typeRemise || "", categoryName: l.categoryName || "?", productName: null, quantite: l.quantite ?? 0, montantUnit: l.montantUnitaire ?? 0, montantTotal: mt });
          }
        }
      }
      const catMap = /* @__PURE__ */ new Map();
      for (const al of articleLines) {
        const key = `${al.typeRemise}||${al.categoryName}`;
        if (!catMap.has(key))
          catMap.set(key, { typeRemise: al.typeRemise, categoryName: al.categoryName, totalAmount: 0 });
        catMap.get(key).totalAmount += al.montantTotal;
      }
      const categoryLines = [...catMap.values()].sort((a, b) => a.typeRemise.localeCompare(b.typeRemise) || a.categoryName.localeCompare(b.categoryName));
      return { partnerName: name, articleLines, categoryLines, total: articleLines.reduce((s, l) => s + l.montantTotal, 0) };
    }).filter((b) => b.total > 0);
  }
  // ── Accordéon ─────────────────────────────────────────────────────────────
  togglePartner(name) {
    if (this.expandedPartners.has(name))
      this.expandedPartners.delete(name);
    else
      this.expandedPartners.add(name);
  }
  isExpanded(name) {
    return this.expandedPartners.has(name);
  }
  expandAll() {
    this.supplierBlocks.forEach((b) => this.expandedPartners.add(b.partnerName));
  }
  collapseAll() {
    this.expandedPartners.clear();
  }
  // ── KPIs ──────────────────────────────────────────────────────────────────
  sumByType(type) {
    let t = 0;
    for (const p of this.paiements.filter((x) => x.typeRemise === type))
      for (const l of p.lines || [])
        t += l.montantTotal ?? 0;
    return t;
  }
  get totalBrasserie() {
    return this.sumByType("brasserie");
  }
  get totalGuinness() {
    return this.sumByType("guinness");
  }
  get grandTotal() {
    return this.supplierBlocks.reduce((s, b) => s + b.total, 0);
  }
  get partnerCount() {
    return new Set(this.paiements.map((p) => p.partnerId)).size;
  }
  get companyName() {
    return this.auth.getActiveCompany()?.name || "";
  }
  get generatedBy() {
    return this.auth.getUserDisplayName();
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
  fmt(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  typeColor(t) {
    return t === "brasserie" ? [146, 64, 14] : [6, 78, 59];
  }
  typeBg(t) {
    return t === "brasserie" ? [255, 251, 235] : [240, 253, 244];
  }
  // ── Export PDF ──────────────────────────────────────────────────────────────
  exportPdf() {
    const byArticles = this.subGroupBy === "articles";
    const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 12;
    let y = M;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y);
    y += 5;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(M, y, pageW - M, y);
    y += 7;
    doc.setFontSize(11);
    doc.text(`RAPPORT DES REMISES FOURNISSEURS`, M, y);
    y += 5;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`P\xE9riode : ${this.printDateLabel}   |   G\xE9n\xE9r\xE9 par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y);
    y += 8;
    const dark = [17, 24, 39];
    const gray = [241, 245, 249];
    const purple = [79, 70, 229];
    for (const block of this.supplierBlocks) {
      autoTable(doc, {
        startY: y,
        margin: { left: M, right: M },
        head: [[
          {
            content: block.partnerName,
            colSpan: byArticles ? 5 : 3,
            styles: { fillColor: purple, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 }
          },
          {
            content: this.fmt(block.total) + " FCFA",
            styles: { fillColor: purple, textColor: [255, 255, 255], halign: "right", fontStyle: "bold", fontSize: 9 }
          }
        ]],
        body: byArticles ? block.articleLines.map((l) => [
          { content: l.typeRemise, styles: { textColor: this.typeColor(l.typeRemise), fillColor: this.typeBg(l.typeRemise), fontSize: 7.5 } },
          { content: l.productName || "\u2014" },
          { content: l.categoryName },
          { content: this.fmt(l.quantite), styles: { halign: "right" } },
          { content: this.fmt(l.montantUnit), styles: { halign: "right" } },
          { content: this.fmt(l.montantTotal) + " FCFA", styles: { halign: "right" } }
        ]) : block.categoryLines.map((l) => [
          { content: l.typeRemise, styles: { textColor: this.typeColor(l.typeRemise), fillColor: this.typeBg(l.typeRemise), fontSize: 7.5 } },
          { content: l.categoryName },
          { content: "", styles: {} },
          { content: this.fmt(l.totalAmount) + " FCFA", styles: { halign: "right" } }
        ]),
        theme: "plain",
        styles: { fontSize: 8, cellPadding: 2.5, textColor: dark, lineColor: [229, 231, 235], lineWidth: 0.1 },
        headStyles: { fontSize: 9 },
        columnStyles: byArticles ? { 0: { cellWidth: 18 }, 1: { cellWidth: 45 }, 2: { cellWidth: 38 }, 3: { cellWidth: 15, halign: "right" }, 4: { cellWidth: 22, halign: "right" }, 5: { cellWidth: 48, halign: "right" } } : { 0: { cellWidth: 20 }, 1: { cellWidth: 90 }, 2: { cellWidth: 20 }, 3: { cellWidth: 56, halign: "right" } }
      });
      y = doc.lastAutoTable.finalY + 5;
      if (y > 268) {
        doc.addPage();
        y = M;
      }
    }
    autoTable(doc, {
      startY: y,
      margin: { left: M, right: M },
      body: [[
        {
          content: "TOTAL G\xC9N\xC9RAL",
          colSpan: byArticles ? 5 : 3,
          styles: { fillColor: gray, fontStyle: "bold", halign: "right", textColor: [55, 65, 81] }
        },
        {
          content: this.fmt(this.grandTotal) + " FCFA",
          styles: { fillColor: gray, fontStyle: "bold", halign: "right", textColor: dark }
        }
      ]],
      theme: "plain",
      styles: { fontSize: 9, cellPadding: 3, lineColor: [209, 213, 219], lineWidth: 0.2 },
      columnStyles: byArticles ? { 0: { cellWidth: 18 }, 1: { cellWidth: 45 }, 2: { cellWidth: 38 }, 3: { cellWidth: 15 }, 4: { cellWidth: 22 }, 5: { cellWidth: 48, halign: "right" } } : { 0: { cellWidth: 20 }, 1: { cellWidth: 90 }, 2: { cellWidth: 20 }, 3: { cellWidth: 56, halign: "right" } }
    });
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(180, 180, 180);
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.2);
      doc.line(M, 284, pageW - M, 284);
      doc.text(`${this.companyName} \u2014 Blessing ERP`, M, 288);
      doc.text(`Page ${i} / ${n}`, pageW - M, 289, { align: "right" });
    }
    doc.save(`rapport-remises-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.pdf`);
  }
  // ── Export Excel ────────────────────────────────────────────────────────────
  exportExcel() {
    return __async(this, null, function* () {
      const byArticles = this.subGroupBy === "articles";
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Remises");
      const PURPLE = "FF4F46E5", WHITE = "FFFFFFFF", GRAY = "FFE9ECEF";
      const BRASS = "FFFFF9E8", GUIN = "FFF0FDF4";
      const ncols = byArticles ? 6 : 4;
      ws.mergeCells(1, 1, 1, ncols);
      const t1 = ws.getCell("A1");
      t1.value = `${this.companyName} \u2014 RAPPORT DES REMISES FOURNISSEURS \u2014 ${this.printDateLabel}`;
      t1.font = { bold: true, size: 12, color: { argb: PURPLE } };
      t1.alignment = { horizontal: "center" };
      ws.mergeCells(2, 1, 2, ncols);
      const t2 = ws.getCell("A2");
      t2.value = `G\xE9n\xE9r\xE9 par ${this.generatedBy} le ${this.todayLabel}`;
      t2.font = { italic: true, size: 9, color: { argb: "777777" } };
      t2.alignment = { horizontal: "center" };
      ws.addRow([]);
      for (const block of this.supplierBlocks) {
        const hRow = ws.addRow([block.partnerName, ...byArticles ? ["", "", "", ""] : ["", ""], this.fmt(block.total) + " FCFA"]);
        ws.mergeCells(ws.rowCount, 1, ws.rowCount, ncols - 1);
        hRow.eachCell((c, col) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: PURPLE } };
          c.font = { bold: true, color: { argb: WHITE }, size: 10 };
          c.alignment = col === ncols ? { horizontal: "right" } : { horizontal: "left" };
        });
        const headers = byArticles ? ["Type", "Article", "Cat\xE9gorie", "Qt\xE9", "P.U.", "Montant (FCFA)"] : ["Type", "Cat\xE9gorie", "Sous-total (FCFA)", ""];
        const thRow = ws.addRow(headers);
        thRow.eachCell((c) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFEDE9FE" } };
          c.font = { bold: true, size: 8, color: { argb: "374151" } };
          c.border = { bottom: { style: "thin", color: { argb: "FFC4B5FD" } } };
        });
        const lines = byArticles ? block.articleLines : block.categoryLines;
        for (const l of lines) {
          const type = l.typeRemise ?? l.typeRemise;
          const cat = l.categoryName ?? l.categoryName;
          const amt = byArticles ? l.montantTotal : l.totalAmount;
          const rowData = byArticles ? [type, l.productName || "\u2014", cat, l.quantite, l.montantUnit, amt] : [type, cat, amt, ""];
          const row = ws.addRow(rowData);
          const bg = type === "brasserie" ? BRASS : GUIN;
          row.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: bg } };
          row.getCell(1).font = { size: 8, color: { argb: type === "brasserie" ? "FF92400E" : "FF064E3B" } };
          row.getCell(byArticles ? 5 : 3).numFmt = "#,##0";
          row.getCell(byArticles ? 5 : 3).alignment = { horizontal: "right" };
          row.eachCell((c) => {
            c.border = { bottom: { style: "hair", color: { argb: "FFCCCCCC" } } };
          });
        }
        const subData = byArticles ? ["", "", "Sous-total", "", "", block.total] : ["", "Sous-total", block.total, ""];
        const subRow = ws.addRow(subData);
        subRow.eachCell((c) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GRAY } };
          c.font = { bold: true, size: 9 };
          c.border = { top: { style: "thin" }, bottom: { style: "thin" } };
        });
        const amtCell = byArticles ? 5 : 3;
        subRow.getCell(amtCell).numFmt = "#,##0";
        subRow.getCell(amtCell).alignment = { horizontal: "right" };
        ws.addRow([]);
      }
      const totData = byArticles ? ["", "", "", "", "TOTAL G\xC9N\xC9RAL", this.grandTotal] : ["", "TOTAL G\xC9N\xC9RAL", this.grandTotal, ""];
      const totRow = ws.addRow(totData);
      totRow.eachCell((c) => {
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: PURPLE } };
        c.font = { bold: true, size: 11, color: { argb: WHITE } };
      });
      const totAmtCell = byArticles ? 5 : 3;
      totRow.getCell(totAmtCell).numFmt = "#,##0";
      totRow.getCell(totAmtCell).alignment = { horizontal: "right" };
      ws.columns = byArticles ? [{ width: 14 }, { width: 30 }, { width: 30 }, { width: 10 }, { width: 14 }, { width: 18 }] : [{ width: 14 }, { width: 40 }, { width: 18 }, { width: 10 }];
      const buf = yield wb.xlsx.writeBuffer();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
      a.download = `rapport-remises-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
      a.click();
    });
  }
  static {
    this.\u0275fac = function RapportRemiseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RapportRemiseComponent)(\u0275\u0275directiveInject(RemiseService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RapportRemiseComponent, selectors: [["app-rapport-remise"]], decls: 41, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "export-actions"], [1, "filter-card"], [1, "filter-card-title"], [1, "group-section"], [1, "group-label-text"], [1, "group-chips"], [1, "group-chip", 3, "click"], [1, "filter-row"], [1, "filter-group"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-error"], [1, "btn-export", "btn-excel", 3, "click"], [1, "btn-export", "btn-pdf", 3, "click"], [1, "material-icons", "spin"], [1, "empty-state"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "stat-total"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-cur"], [1, "stat-icon", "stat-brasserie"], [1, "stat-icon", "stat-guinness"], [1, "stat-icon", "stat-partners"], [1, "acc-toolbar"], [1, "acc-info"], [1, "acc-btns"], [1, "btn-acc", 3, "click"], [1, "groups-list"], [1, "group-block", 3, "is-open"], [1, "grand-total"], [1, "gt-label"], [1, "gt-value"], [1, "group-block"], [1, "group-header", 3, "click"], [1, "group-header-left"], [1, "material-icons", "group-chevron"], [1, "client-avatar"], [1, "group-name"], [1, "group-lines-count"], [1, "group-header-right"], [1, "group-total-chip"], [1, "group-body"], [1, "lines-table"], [1, "col-type"], [1, "col-num", "r"], [1, "col-amount", "r"], [1, "sub-total-row"], ["colspan", "5", 1, "sub-total-label"], [1, "r", "font-mono", "font-bold"], [1, "badge-type"], [1, "label-cell"], [1, "text-muted"], [1, "r", "font-mono"], ["colspan", "2", 1, "sub-total-label"]], template: function RapportRemiseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "bar_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Rapport des remises fournisseurs ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, RapportRemiseComponent_Conditional_7_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "span", 4);
        \u0275\u0275text(11, "tune");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Param\xE8tres du rapport ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "span", 9)(15, "span", 4);
        \u0275\u0275text(16, "layers");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " D\xE9tail sous chaque fournisseur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
        \u0275\u0275listener("click", function RapportRemiseComponent_Template_button_click_19_listener() {
          return ctx.setSubGroup("articles");
        });
        \u0275\u0275elementStart(20, "span", 4);
        \u0275\u0275text(21, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Par articles ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 11);
        \u0275\u0275listener("click", function RapportRemiseComponent_Template_button_click_23_listener() {
          return ctx.setSubGroup("categories");
        });
        \u0275\u0275elementStart(24, "span", 4);
        \u0275\u0275text(25, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Par cat\xE9gories ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 12)(28, "div", 13)(29, "label");
        \u0275\u0275text(30, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RapportRemiseComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 13)(33, "label");
        \u0275\u0275text(34, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RapportRemiseComponent_Template_input_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 15);
        \u0275\u0275listener("click", function RapportRemiseComponent_Template_button_click_36_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(37, RapportRemiseComponent_Conditional_37_Template, 3, 0)(38, RapportRemiseComponent_Conditional_38_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(39, RapportRemiseComponent_Conditional_39_Template, 4, 1, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(40, RapportRemiseComponent_Conditional_40_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.generated && ctx.paiements.length > 0 ? 7 : -1);
        \u0275\u0275advance(12);
        \u0275\u0275classProp("active", ctx.subGroupBy === "articles");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.subGroupBy === "categories");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 37 : 38);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated ? 40 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: white;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.filter-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 20px;\n}\n.filter-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n}\n.filter-card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.12);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 24px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.stat-icon.stat-total[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #818cf8);\n}\n.stat-icon.stat-brasserie[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n}\n.stat-icon.stat-guinness[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n}\n.stat-icon.stat-partners[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #38bdf8);\n}\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-cur[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.report-section[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.badge-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-brasserie[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-guinness[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.sub-total[_ngcontent-%COMP%]   .foot-label[_ngcontent-%COMP%], \n.sub-total[_ngcontent-%COMP%]   .foot-value[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.report-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.report-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.report-table[_ngcontent-%COMP%]   .col-type[_ngcontent-%COMP%] {\n  width: 12%;\n}\n.report-table[_ngcontent-%COMP%]   .col-partner[_ngcontent-%COMP%] {\n  width: 28%;\n}\n.report-table[_ngcontent-%COMP%]   .col-cat[_ngcontent-%COMP%] {\n  width: 38%;\n}\n.report-table[_ngcontent-%COMP%]   .col-amount[_ngcontent-%COMP%] {\n  width: 22%;\n}\n.foot-label[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-value[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 14px;\n  background: var(--bg-elevated);\n  white-space: nowrap;\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.grand-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--accent);\n  color: white;\n  border-radius: 12px;\n  padding: 18px 24px;\n}\n.grand-total-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.grand-total-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.group-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.group-label-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.group-label-text[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.group-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.group-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.group-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.group-chip.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.acc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.acc-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.acc-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.acc-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-acc[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.btn-acc[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-acc[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.group-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.group-block.is-open[_ngcontent-%COMP%] {\n  border-color: #c4b5fd;\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.group-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.group-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.group-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.group-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.group-block.is-open[_ngcontent-%COMP%]   .group-chevron[_ngcontent-%COMP%] {\n  color: #7c3aed;\n  transform: rotate(180deg);\n}\n.group-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.group-lines-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.client-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ede9fe;\n  color: #4c1d95;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.group-total-chip[_ngcontent-%COMP%] {\n  padding: 3px 12px;\n  border-radius: 20px;\n  background: #ede9fe;\n  color: #4c1d95;\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  white-space: nowrap;\n}\n.group-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-light);\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   .col-type[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-amount[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.lines-table[_ngcontent-%COMP%]   .label-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.lines-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.sub-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border) !important;\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--text-muted);\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: white;\n  border-radius: 12px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 4px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=rapport-remise.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RapportRemiseComponent, [{
    type: Component,
    args: [{ selector: "app-rapport-remise", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550\u2550 EN-T\xCATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">bar_chart</span>
        Rapport des remises fournisseurs
      </h1>
    </div>
    @if (generated && paiements.length > 0) {
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

  <!-- \u2550\u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filter-card">
    <div class="filter-card-title">
      <span class="material-icons">tune</span> Param\xE8tres du rapport
    </div>
    <div class="group-section">
      <span class="group-label-text"><span class="material-icons">layers</span> D\xE9tail sous chaque fournisseur</span>
      <div class="group-chips">
        <button class="group-chip" [class.active]="subGroupBy === 'articles'" (click)="setSubGroup('articles')">
          <span class="material-icons">inventory_2</span> Par articles
        </button>
        <button class="group-chip" [class.active]="subGroupBy === 'categories'" (click)="setSubGroup('categories')">
          <span class="material-icons">category</span> Par cat\xE9gories
        </button>
      </div>
    </div>
    <div class="filter-row">
      <div class="filter-group">
        <label>P\xE9riode du</label>
        <input type="date" class="form-input" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-input" [(ngModel)]="dateTo">
      </div>
      <button class="btn-generate" (click)="generate()" [disabled]="loading">
        @if (loading) { <span class="material-icons spin">hourglass_empty</span> G\xE9n\xE9ration\u2026 }
        @else { <span class="material-icons">play_arrow</span> G\xE9n\xE9rer }
      </button>
    </div>
    @if (errorMsg) {
      <div class="alert-error"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
    }
  </div>

  <!-- \u2550\u2550\u2550 R\xC9SULTAT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (generated) {
    @if (paiements.length === 0) {
      <div class="empty-state">
        <span class="material-icons">search_off</span>
        <p>Aucune remise enregistr\xE9e sur cette p\xE9riode.</p>
      </div>
    } @else {

      <!-- KPIs -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon stat-total"><span class="material-icons">payments</span></div>
          <div class="stat-body">
            <div class="stat-label">Total remises</div>
            <div class="stat-value">{{ grandTotal | number:'1.0-0' }} <span class="stat-cur">FCFA</span></div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon stat-brasserie"><span class="material-icons">sports_bar</span></div>
          <div class="stat-body">
            <div class="stat-label">Brasseries</div>
            <div class="stat-value">{{ totalBrasserie | number:'1.0-0' }} <span class="stat-cur">FCFA</span></div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon stat-guinness"><span class="material-icons">liquor</span></div>
          <div class="stat-body">
            <div class="stat-label">Guinness</div>
            <div class="stat-value">{{ totalGuinness | number:'1.0-0' }} <span class="stat-cur">FCFA</span></div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon stat-partners"><span class="material-icons">store</span></div>
          <div class="stat-body">
            <div class="stat-label">Fournisseurs</div>
            <div class="stat-value">{{ partnerCount }}</div>
          </div>
        </div>
      </div>

      <!-- Toolbar accord\xE9on -->
      <div class="acc-toolbar">
        <span class="acc-info">
          <span class="material-icons">store</span>
          {{ supplierBlocks.length }} fournisseur(s) \u2014 d\xE9tail {{ subGroupBy === 'articles' ? 'par articles' : 'par cat\xE9gories' }}
        </span>
        <div class="acc-btns">
          <button class="btn-acc" (click)="expandAll()"><span class="material-icons">unfold_more</span> Tout ouvrir</button>
          <button class="btn-acc" (click)="collapseAll()"><span class="material-icons">unfold_less</span> Tout fermer</button>
        </div>
      </div>

      <!-- Accord\xE9on -->
      <div class="groups-list">
        @for (block of supplierBlocks; track block.partnerName) {
          <div class="group-block" [class.is-open]="isExpanded(block.partnerName)">

            <div class="group-header" (click)="togglePartner(block.partnerName)">
              <div class="group-header-left">
                <span class="material-icons group-chevron">{{ isExpanded(block.partnerName) ? 'expand_less' : 'expand_more' }}</span>
                <div class="client-avatar">{{ block.partnerName.charAt(0).toUpperCase() }}</div>
                <span class="group-name">{{ block.partnerName }}</span>
                <span class="group-lines-count">
                  {{ subGroupBy === 'articles' ? block.articleLines.length : block.categoryLines.length }} ligne(s)
                </span>
              </div>
              <div class="group-header-right">
                <span class="group-total-chip">{{ block.total | number:'1.0-0' }} FCFA</span>
              </div>
            </div>

            @if (isExpanded(block.partnerName)) {
              <div class="group-body">

                <!-- Vue articles -->
                @if (subGroupBy === 'articles') {
                  <table class="lines-table">
                    <thead>
                      <tr>
                        <th class="col-type">Type</th>
                        <th>Article</th>
                        <th>Cat\xE9gorie</th>
                        <th class="col-num r">Qt\xE9</th>
                        <th class="col-num r">P.U.</th>
                        <th class="col-amount r">Montant (FCFA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (l of block.articleLines; track $index) {
                        <tr>
                          <td>
                            <span class="badge-type" [class.badge-brasserie]="l.typeRemise === 'brasserie'"
                                                     [class.badge-guinness]="l.typeRemise === 'guinness'">
                              {{ l.typeRemise || '\u2014' }}
                            </span>
                          </td>
                          <td class="label-cell">{{ l.productName || '\u2014' }}</td>
                          <td class="text-muted">{{ l.categoryName }}</td>
                          <td class="r font-mono">{{ l.quantite | number:'1.0-0' }}</td>
                          <td class="r font-mono">{{ l.montantUnit | number:'1.0-0' }}</td>
                          <td class="r font-mono font-bold">{{ l.montantTotal | number:'1.0-0' }}</td>
                        </tr>
                      }
                    </tbody>
                    <tfoot>
                      <tr class="sub-total-row">
                        <td colspan="5" class="sub-total-label">Sous-total {{ block.partnerName }}</td>
                        <td class="r font-mono font-bold">{{ block.total | number:'1.0-0' }} FCFA</td>
                      </tr>
                    </tfoot>
                  </table>
                }

                <!-- Vue cat\xE9gories -->
                @if (subGroupBy === 'categories') {
                  <table class="lines-table">
                    <thead>
                      <tr>
                        <th class="col-type">Type</th>
                        <th>Cat\xE9gorie d'article</th>
                        <th class="col-amount r">Montant (FCFA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (l of block.categoryLines; track l.categoryName + l.typeRemise) {
                        <tr>
                          <td>
                            <span class="badge-type" [class.badge-brasserie]="l.typeRemise === 'brasserie'"
                                                     [class.badge-guinness]="l.typeRemise === 'guinness'">
                              {{ l.typeRemise || '\u2014' }}
                            </span>
                          </td>
                          <td class="label-cell">{{ l.categoryName }}</td>
                          <td class="r font-mono font-bold">{{ l.totalAmount | number:'1.0-0' }}</td>
                        </tr>
                      }
                    </tbody>
                    <tfoot>
                      <tr class="sub-total-row">
                        <td colspan="2" class="sub-total-label">Sous-total {{ block.partnerName }}</td>
                        <td class="r font-mono font-bold">{{ block.total | number:'1.0-0' }} FCFA</td>
                      </tr>
                    </tfoot>
                  </table>
                }

              </div>
            }
          </div>
        }

        <div class="grand-total">
          <span class="gt-label">TOTAL G\xC9N\xC9RAL \u2014 {{ supplierBlocks.length }} fournisseur(s)</span>
          <span class="gt-value">{{ grandTotal | number:'1.0-0' }} FCFA</span>
        </div>
      </div>
    }
  }

</div>
`, styles: ['/* src/app/modules/purchases/components/rapports/rapport-remise.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-export {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export .material-icons {\n  font-size: 16px;\n}\n.btn-export.btn-pdf {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf:hover {\n  background: #b91c1c;\n}\n.btn-export.btn-excel {\n  background: #16a34a;\n  color: white;\n}\n.btn-export.btn-excel:hover {\n  background: #15803d;\n}\n.filter-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 20px;\n}\n.filter-card-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n}\n.filter-card-title .material-icons {\n  font-size: 16px;\n}\n.filter-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-input {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n}\n.form-input:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.12);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 24px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error .material-icons {\n  font-size: 16px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.stat-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.stat-icon.stat-total {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #818cf8);\n}\n.stat-icon.stat-brasserie {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n}\n.stat-icon.stat-guinness {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n}\n.stat-icon.stat-partners {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #38bdf8);\n}\n.stat-body {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.stat-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-cur {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.report-section {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.badge-type {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-brasserie {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-guinness {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.sub-total .foot-label,\n.sub-total .foot-value {\n  background: var(--bg-elevated);\n}\n.report-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.report-table th {\n  padding: 11px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.report-table td {\n  padding: 11px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.report-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.report-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.report-table .col-type {\n  width: 12%;\n}\n.report-table .col-partner {\n  width: 28%;\n}\n.report-table .col-cat {\n  width: 38%;\n}\n.report-table .col-amount {\n  width: 22%;\n}\n.foot-label {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-value {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 14px;\n  background: var(--bg-elevated);\n  white-space: nowrap;\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.grand-total-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--accent);\n  color: white;\n  border-radius: 12px;\n  padding: 18px 24px;\n}\n.grand-total-label {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.grand-total-value {\n  font-size: 24px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.group-section {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.group-label-text {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.group-label-text .material-icons {\n  font-size: 15px;\n}\n.group-chips {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.group-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip .material-icons {\n  font-size: 14px;\n}\n.group-chip:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.group-chip.active {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.acc-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.acc-info {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.acc-info .material-icons {\n  font-size: 16px;\n}\n.acc-btns {\n  display: flex;\n  gap: 6px;\n}\n.btn-acc {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.btn-acc .material-icons {\n  font-size: 15px;\n}\n.btn-acc:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.groups-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.group-block {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.group-block.is-open {\n  border-color: #c4b5fd;\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.group-header:hover {\n  background: var(--bg-elevated);\n}\n.group-header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.group-header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.group-chevron {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.group-block.is-open .group-chevron {\n  color: #7c3aed;\n  transform: rotate(180deg);\n}\n.group-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.group-lines-count {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.client-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ede9fe;\n  color: #4c1d95;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.group-total-chip {\n  padding: 3px 12px;\n  border-radius: 20px;\n  background: #ede9fe;\n  color: #4c1d95;\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  white-space: nowrap;\n}\n.group-body {\n  border-top: 1px solid var(--border-light);\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table th {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.lines-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table .col-type {\n  width: 90px;\n}\n.lines-table .col-num {\n  width: 70px;\n}\n.lines-table .col-amount {\n  width: 160px;\n}\n.lines-table .label-cell {\n  font-weight: 600;\n}\n.lines-table .r {\n  text-align: right;\n}\n.sub-total-row td {\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border) !important;\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--text-muted);\n}\n.grand-total {\n  background: #4f46e5;\n  color: white;\n  border-radius: 12px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 4px;\n}\n.gt-label {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-value {\n  font-size: 18px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=rapport-remise.component.css.map */\n'] }]
  }], () => [{ type: RemiseService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RapportRemiseComponent, { className: "RapportRemiseComponent", filePath: "app/modules/purchases/components/rapports/rapport-remise.component.ts", lineNumber: 21 });
})();
export {
  RapportRemiseComponent
};
//# sourceMappingURL=chunk-MJUNPGJF.js.map
