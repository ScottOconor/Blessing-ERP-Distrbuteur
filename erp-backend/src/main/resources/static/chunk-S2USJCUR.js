import {
  EnlevementService
} from "./chunk-4EAQGYLV.js";
import {
  StockService
} from "./chunk-VJTDSZQK.js";
import {
  E,
  autoTable
} from "./chunk-AJFTTPVD.js";
import "./chunk-7YWLATDR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  HttpClient,
  HttpParams,
  environment,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/purchases/components/enlevements/enlevement-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.partnerId;
var _forTrack2 = ($index, $item) => $item.categoryName;
function EnlevementListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau tarif ");
    \u0275\u0275elementEnd();
  }
}
function EnlevementListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\xE9l\xE9charger PDF ");
    \u0275\u0275elementEnd();
  }
}
function EnlevementListComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 19);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function EnlevementListComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 11);
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun tarif d'enl\xE8vement configur\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_22_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Cr\xE9er le premier");
    \u0275\u0275elementEnd()();
  }
}
function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_14_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r8.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, c_r8.montant, "1.0-0"), " FCFA");
  }
}
function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_14_Conditional_6_For_2_Template, 6, 5, "div", 31, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(e_r7.clients);
  }
}
function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_14_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const e_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(e_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_14_Conditional_6_Template, 3, 0, "div", 30);
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", e_r7.clients.length, " fournisseur(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.expandedId === e_r7.id ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedId === e_r7.id ? 6 : -1);
  }
}
function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Tarif global");
    \u0275\u0275elementEnd();
  }
}
function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20)(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 24);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275conditionalCreate(14, EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_14_Template, 7, 3)(15, EnlevementListComponent_Conditional_22_Conditional_3_For_16_Conditional_15_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 26)(17, "button", 27);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Template_button_click_17_listener() {
      const e_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(e_r7));
    });
    \u0275\u0275elementStart(18, "span", 11);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 28);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_22_Conditional_3_For_16_Template_button_click_20_listener() {
      const e_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeConfig(e_r7.id));
    });
    \u0275\u0275elementStart(21, "span", 11);
    \u0275\u0275text(22, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r7.categoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 5, e_r7.montantFixe, "1.2-2"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 8, ctx_r1.ttc(e_r7.montantFixe), "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 11, e_r7.coutEnlevement ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(e_r7.clients && e_r7.clients.length > 0 ? 14 : 15);
  }
}
function EnlevementListComponent_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 18)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Cat\xE9gorie d'article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 20);
    \u0275\u0275text(6, "Montant fixe HT / U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 20);
    \u0275\u0275text(8, "Montant fixe TTC / U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 20);
    \u0275\u0275text(10, "Co\xFBt interne HT / U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Tarifs sp\xE9cifiques");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, EnlevementListComponent_Conditional_22_Conditional_3_For_16_Template, 23, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.enlevements);
  }
}
function EnlevementListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, EnlevementListComponent_Conditional_22_Conditional_1_Template, 5, 0, "div", 16)(2, EnlevementListComponent_Conditional_22_Conditional_2_Template, 9, 0, "div", 17)(3, EnlevementListComponent_Conditional_22_Conditional_3_Template, 17, 0, "table", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingConfig ? 1 : ctx_r1.enlevements.length === 0 ? 2 : 3);
  }
}
function EnlevementListComponent_Conditional_23_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9ration\u2026 ");
  }
}
function EnlevementListComponent_Conditional_23_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function EnlevementListComponent_Conditional_23_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.reglError);
  }
}
function EnlevementListComponent_Conditional_23_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 17)(2, "span", 11);
    \u0275\u0275text(3, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucun co\xFBt d'enl\xE8vement calcul\xE9 sur cette p\xE9riode.");
    \u0275\u0275elementEnd()()();
  }
}
function EnlevementListComponent_Conditional_23_Conditional_18_Conditional_1_For_44_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 52);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 53);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 52);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r10 = ctx.$implicit;
    const \u0275$index_290_r11 = ctx.$index;
    const entry_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("row-group-start", \u0275$index_290_r11 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_290_r11 === 0 ? entry_r12.partnerName : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r10.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, line_r10.quantite, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, line_r10.montantUnitaire, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 13, line_r10.montantTotal, "1.0-0"));
  }
}
function EnlevementListComponent_Conditional_23_Conditional_18_Conditional_1_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EnlevementListComponent_Conditional_23_Conditional_18_Conditional_1_For_44_For_1_Template, 14, 16, "tr", 48, _forTrack2);
    \u0275\u0275elementStart(2, "tr", 49)(3, "td", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 51);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r12 = ctx.$implicit;
    \u0275\u0275repeater(entry_r12.lines);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Sous-total ", entry_r12.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 2, entry_r12.totalAmount, "1.0-0"));
  }
}
function EnlevementListComponent_Conditional_23_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span", 11);
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 43);
    \u0275\u0275text(6, "Total enl\xE8vements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 45)(13, "span", 11);
    \u0275\u0275text(14, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "div", 43);
    \u0275\u0275text(17, "Fournisseurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 44);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 45)(21, "span", 11);
    \u0275\u0275text(22, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "div", 43);
    \u0275\u0275text(25, "Cat\xE9gories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 44);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 12)(29, "table", 18)(30, "thead")(31, "tr")(32, "th");
    \u0275\u0275text(33, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Cat\xE9gorie d'article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 20);
    \u0275\u0275text(37, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 20);
    \u0275\u0275text(39, "Tarif / U. (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 20);
    \u0275\u0275text(41, "Total (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275repeaterCreate(43, EnlevementListComponent_Conditional_23_Conditional_18_Conditional_1_For_44_Template, 8, 5, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "tfoot")(46, "tr")(47, "td", 46);
    \u0275\u0275text(48, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td", 47);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 4, ctx_r1.grandTotal, "1.0-0"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.partnerCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.categoryCount);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.entries);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(51, 7, ctx_r1.grandTotal, "1.0-0"), " FCFA");
  }
}
function EnlevementListComponent_Conditional_23_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EnlevementListComponent_Conditional_23_Conditional_18_Conditional_0_Template, 6, 0, "div", 12)(1, EnlevementListComponent_Conditional_23_Conditional_18_Conditional_1_Template, 52, 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.entries.length === 0 ? 0 : 1);
  }
}
function EnlevementListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 11);
    \u0275\u0275text(3, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " P\xE9riode \xE0 g\xE9n\xE9rer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36)(6, "div", 37)(7, "label");
    \u0275\u0275text(8, "Du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function EnlevementListComponent_Conditional_23_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateFrom, $event) || (ctx_r1.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 37)(11, "label");
    \u0275\u0275text(12, "Au");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function EnlevementListComponent_Conditional_23_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateTo, $event) || (ctx_r1.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 39);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_23_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generate());
    });
    \u0275\u0275conditionalCreate(15, EnlevementListComponent_Conditional_23_Conditional_15_Template, 3, 0)(16, EnlevementListComponent_Conditional_23_Conditional_16_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, EnlevementListComponent_Conditional_23_Conditional_17_Template, 4, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, EnlevementListComponent_Conditional_23_Conditional_18_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateTo);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.generating);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.generating ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.reglError ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.generated ? 18 : -1);
  }
}
function EnlevementListComponent_Conditional_24_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.name);
  }
}
function EnlevementListComponent_Conditional_24_Conditional_55_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17.name);
  }
}
function EnlevementListComponent_Conditional_24_Conditional_55_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function EnlevementListComponent_Conditional_24_Conditional_55_For_2_Template_select_ngModelChange_1_listener($event) {
      const c_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(c_r16.partnerId, $event) || (c_r16.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 64);
    \u0275\u0275text(3, "-- Fournisseur --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, EnlevementListComponent_Conditional_24_Conditional_55_For_2_For_5_Template, 2, 2, "option", 65, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 82)(7, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function EnlevementListComponent_Conditional_24_Conditional_55_For_2_Template_input_ngModelChange_7_listener($event) {
      const c_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(c_r16.montant, $event) || (c_r16.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 69);
    \u0275\u0275text(9, "FCFA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 84);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_24_Conditional_55_For_2_Template_button_click_10_listener() {
      const \u0275$index_427_r18 = \u0275\u0275restoreView(_r15).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeClientTarif(\u0275$index_427_r18));
    });
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", c_r16.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.suppliers);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", c_r16.montant);
  }
}
function EnlevementListComponent_Conditional_24_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275repeaterCreate(1, EnlevementListComponent_Conditional_24_Conditional_55_For_2_Template, 13, 3, "div", 81, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.form.clients);
  }
}
function EnlevementListComponent_Conditional_24_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1, "Aucun tarif fournisseur \u2014 le montant global s'applique \xE0 tous.");
    \u0275\u0275elementEnd();
  }
}
function EnlevementListComponent_Conditional_24_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.errMsg);
  }
}
function EnlevementListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_24_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 56)(3, "div", 57)(4, "span", 11);
    \u0275\u0275text(5, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 59)(11, "div", 60)(12, "div", 61)(13, "label");
    \u0275\u0275text(14, "Cat\xE9gorie d'article ");
    \u0275\u0275elementStart(15, "span", 62);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function EnlevementListComponent_Conditional_24_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.categoryId, $event) || (ctx_r1.form.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 64);
    \u0275\u0275text(19, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, EnlevementListComponent_Conditional_24_For_21_Template, 2, 2, "option", 65, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 66)(23, "label");
    \u0275\u0275text(24, "Montant fixe HT / unit\xE9 ");
    \u0275\u0275elementStart(25, "span", 62);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 67)(28, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function EnlevementListComponent_Conditional_24_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.montantFixe, $event) || (ctx_r1.form.montantFixe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 69);
    \u0275\u0275text(30, "FCFA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 66)(32, "label");
    \u0275\u0275text(33, "\u2248 Montant TTC / unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 67);
    \u0275\u0275element(35, "input", 70);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 66)(38, "label");
    \u0275\u0275text(39, "Co\xFBt interne HT / unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 67)(41, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function EnlevementListComponent_Conditional_24_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.coutEnlevement, $event) || (ctx_r1.form.coutEnlevement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 69);
    \u0275\u0275text(43, "FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 72)(45, "span", 73)(46, "span", 11);
    \u0275\u0275text(47, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Tarifs sp\xE9cifiques par fournisseur ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 74);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_24_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addClientTarif());
    });
    \u0275\u0275elementStart(50, "span", 11);
    \u0275\u0275text(51, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "p", 75);
    \u0275\u0275text(54, "Ces montants remplacent le tarif global pour les fournisseurs concern\xE9s.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, EnlevementListComponent_Conditional_24_Conditional_55_Template, 3, 0, "div", 76)(56, EnlevementListComponent_Conditional_24_Conditional_56_Template, 2, 0, "p", 77);
    \u0275\u0275conditionalCreate(57, EnlevementListComponent_Conditional_24_Conditional_57_Template, 4, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 78)(59, "button", 79);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_24_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(60, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 80);
    \u0275\u0275listener("click", function EnlevementListComponent_Conditional_24_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveConfig());
    });
    \u0275\u0275elementStart(62, "span", 11);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editing ? "Modifier" : "Nouveau", " tarif d'enl\xE8vement ");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.montantFixe);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(36, 13, ctx_r1.ttc(ctx_r1.form.montantFixe), "1.0-0") + " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.coutEnlevement);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.form.clients && ctx_r1.form.clients.length > 0 ? 55 : 56);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errMsg ? 57 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer", " ");
  }
}
var EnlevementListComponent = class _EnlevementListComponent {
  get companyId() {
    return this.auth.getCompanyId();
  }
  get companyName() {
    return this.auth.getActiveCompany()?.name || "Mon entreprise";
  }
  get generatedBy() {
    return this.auth.getUserDisplayName();
  }
  get grandTotal() {
    return this.entries.reduce((s, e) => s + (e.totalAmount ?? 0), 0);
  }
  get partnerCount() {
    return this.entries.length;
  }
  get categoryCount() {
    const cats = /* @__PURE__ */ new Set();
    this.entries.forEach((e) => e.lines.forEach((l) => cats.add(l.categoryName)));
    return cats.size;
  }
  get printDateLabel() {
    if (!this.dateFrom || !this.dateTo)
      return "";
    const fmt = (s) => {
      const [y, m, d] = s.split("-");
      return `${d}/${m}/${y}`;
    };
    return `${fmt(this.dateFrom)} au ${fmt(this.dateTo)}`;
  }
  get todayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  }
  constructor(svc, auth, stock, http) {
    this.svc = svc;
    this.auth = auth;
    this.stock = stock;
    this.http = http;
    this.activeTab = "config";
    this.enlevements = [];
    this.categories = [];
    this.suppliers = [];
    this.loadingConfig = false;
    this.expandedId = null;
    this.showModal = false;
    this.saving = false;
    this.errMsg = "";
    this.editing = null;
    this.form = this.emptyForm();
    this.dateFrom = "";
    this.dateTo = "";
    this.entries = [];
    this.generating = false;
    this.generated = false;
    this.reglError = "";
    const today = /* @__PURE__ */ new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom = firstDay.toISOString().slice(0, 10);
    this.dateTo = today.toISOString().slice(0, 10);
  }
  ngOnInit() {
    this.loadConfig();
    this.stock.getCategories(this.companyId).subscribe((c) => this.categories = c);
    this.http.get(`${environment.apiUrl}/api/accounting/partners`, {
      params: new HttpParams().set("companyId", this.companyId).set("type", "supplier")
    }).subscribe((s) => this.suppliers = s);
  }
  // ── Config ────────────────────────────────────────────────────────────────
  loadConfig() {
    this.loadingConfig = true;
    this.svc.getAll(this.companyId).subscribe({
      next: (d) => {
        this.enlevements = d;
        this.loadingConfig = false;
      },
      error: () => {
        this.loadingConfig = false;
      }
    });
  }
  openNew() {
    this.editing = null;
    this.form = this.emptyForm();
    this.errMsg = "";
    this.showModal = true;
  }
  openEdit(e) {
    this.editing = e;
    this.form = __spreadProps(__spreadValues({}, e), { clients: e.clients ? e.clients.map((c) => __spreadValues({}, c)) : [] });
    this.errMsg = "";
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  saveConfig() {
    if (!this.form.categoryId || !this.form.montantFixe) {
      this.errMsg = "Cat\xE9gorie et montant fixe requis.";
      return;
    }
    this.saving = true;
    this.errMsg = "";
    this.svc.save(__spreadProps(__spreadValues({}, this.form), { companyId: this.companyId })).subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.loadConfig();
      },
      error: (e) => {
        this.saving = false;
        this.errMsg = e?.error?.message || "Erreur.";
      }
    });
  }
  removeConfig(id) {
    if (!confirm("D\xE9sactiver ce tarif d'enl\xE8vement ?"))
      return;
    this.svc.delete(id).subscribe({ next: () => this.loadConfig() });
  }
  toggleExpand(id) {
    this.expandedId = this.expandedId === id ? null : id;
  }
  addClientTarif() {
    if (!this.form.clients)
      this.form.clients = [];
    this.form.clients.push({ partnerId: 0, montant: 0 });
  }
  removeClientTarif(i) {
    this.form.clients?.splice(i, 1);
  }
  categoryName(id) {
    return this.categories.find((c) => c.id === id)?.name ?? "";
  }
  /** TTC = HT × (1 + 19,25%), pour vérifier le calcul appliqué en facturation */
  ttc(montantHT) {
    return (montantHT ?? 0) * 1.1925;
  }
  emptyForm() {
    return { categoryId: 0, montantFixe: 0, coutEnlevement: 0, companyId: this.companyId, active: true, clients: [] };
  }
  // ── Règlements ────────────────────────────────────────────────────────────
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.reglError = "Veuillez s\xE9lectionner une p\xE9riode.";
      return;
    }
    this.generating = true;
    this.reglError = "";
    this.svc.getRapport(this.companyId, this.dateFrom, this.dateTo).subscribe({
      next: (data) => {
        this.entries = data;
        this.generated = true;
        this.generating = false;
      },
      error: (e) => {
        this.generating = false;
        this.reglError = e?.error?.message || "Erreur lors de la g\xE9n\xE9ration.";
      }
    });
  }
  fmt(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  exportPdf() {
    const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 12;
    let y = margin;
    doc.setFontSize(17);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, margin, y);
    y += 6;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text("R\xC8GLEMENTS DES CO\xDBTS D'ENL\xC8VEMENT", margin, y);
    y += 6;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`P\xE9riode : ${this.printDateLabel}   |   G\xE9n\xE9r\xE9 par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, margin, y);
    y += 8;
    const dark = [17, 24, 39];
    const mid = [55, 65, 81];
    const grayFoot = [241, 245, 249];
    const bodyRows = [];
    for (const entry of this.entries) {
      for (const line of entry.lines) {
        bodyRows.push([
          { content: entry.partnerName, styles: { fontStyle: "bold" } },
          { content: line.categoryName },
          { content: this.fmt(line.quantite), styles: { halign: "right" } },
          { content: this.fmt(line.montantUnitaire) + " FCFA", styles: { halign: "right" } },
          { content: this.fmt(line.montantTotal) + " FCFA", styles: { halign: "right" } }
        ]);
      }
    }
    autoTable(doc, {
      startY: y,
      margin: { left: margin, right: margin },
      head: [[
        { content: "Fournisseur", styles: { halign: "left" } },
        { content: "Cat\xE9gorie", styles: { halign: "left" } },
        { content: "Quantit\xE9", styles: { halign: "right" } },
        { content: "Tarif/U.", styles: { halign: "right" } },
        { content: "Total", styles: { halign: "right" } }
      ]],
      body: bodyRows,
      foot: [[
        { content: "", styles: { fillColor: grayFoot } },
        { content: "", styles: { fillColor: grayFoot } },
        { content: "", styles: { fillColor: grayFoot } },
        { content: "TOTAL G\xC9N\xC9RAL", styles: { fillColor: grayFoot, fontStyle: "bold", halign: "right", textColor: mid } },
        { content: this.fmt(this.grandTotal) + " FCFA", styles: { fillColor: grayFoot, fontStyle: "bold", halign: "right", textColor: dark } }
      ]],
      showFoot: "lastPage",
      theme: "plain",
      styles: { fontSize: 8, cellPadding: 3, textColor: dark, lineColor: [229, 231, 235], lineWidth: 0.1, overflow: "hidden", minCellHeight: 6 },
      headStyles: { fillColor: [249, 250, 251], textColor: [80, 80, 80], fontStyle: "bold", fontSize: 8, lineColor: [209, 213, 219], lineWidth: 0.3, overflow: "hidden" },
      footStyles: { overflow: "hidden" },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 56 },
        2: { cellWidth: 20, halign: "right", overflow: "hidden" },
        3: { cellWidth: 32, halign: "right", overflow: "hidden" },
        4: { cellWidth: 28, halign: "right", overflow: "hidden" }
      }
    });
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(180, 180, 180);
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.2);
      doc.line(margin, 284, pageW - margin, 284);
      doc.text(`${this.companyName} \u2014 Logiciel Blessing ERP`, margin, 288);
      doc.text(`Page ${i} / ${pageCount}`, pageW - margin, 289, { align: "right" });
    }
    doc.save(`reglements-enlevements-${this.dateFrom}-${this.dateTo}.pdf`);
  }
  static {
    this.\u0275fac = function EnlevementListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnlevementListComponent)(\u0275\u0275directiveInject(EnlevementService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnlevementListComponent, selectors: [["app-enlevement-list"]], decls: 25, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-subtitle"], [1, "header-right"], [1, "btn-new"], [1, "btn-pdf"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "material-icons"], [1, "card"], [1, "modal-overlay"], [1, "btn-new", 3, "click"], [1, "btn-pdf", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "material-icons", "spin"], [1, "text-right"], [2, "width", "90px"], [1, "font-bold"], [1, "amount-pill"], [1, "text-right", "text-muted", "font-mono"], [1, "global-tag"], [1, "row-actions"], ["title", "Modifier", 1, "icon-btn", 3, "click"], ["title", "Supprimer", 1, "icon-btn", "icon-btn-danger", 3, "click"], [1, "clients-chip", 3, "click"], [1, "clients-popover"], [1, "client-item"], [1, "client-name"], [1, "client-rate"], [1, "filter-card"], [1, "filter-card-title"], [1, "filter-row"], [1, "filter-group"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-error"], [1, "stats-row"], [1, "stat-chip", "stat-main"], [1, "stat-lbl"], [1, "stat-val"], [1, "stat-chip"], ["colspan", "4", 1, "foot-label"], [1, "foot-val"], [3, "row-group-start"], [1, "subtotal-row"], ["colspan", "4", 1, "subtotal-label"], [1, "text-right", "subtotal-val"], [1, "text-right", "font-mono"], [1, "text-right", "font-mono", "text-muted"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", 3, "click"], [1, "modal-hdr"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group", "form-full"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], [1, "form-group"], [1, "input-suffix"], ["type", "number", "step", "0.01", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "suffix"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-sep"], [1, "section-label"], [1, "btn-add-row", 3, "click"], [1, "section-hint"], [1, "client-rows"], [1, "no-rows"], [1, "modal-ftr"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "client-row"], [1, "input-suffix", "w-amount"], ["type", "number", "placeholder", "Montant", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-remove-row", 3, "click"]], template: function EnlevementListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Co\xFBts d'enl\xE8vement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Configuration des tarifs et r\xE8glements par p\xE9riode");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275conditionalCreate(11, EnlevementListComponent_Conditional_11_Template, 4, 0, "button", 7);
        \u0275\u0275conditionalCreate(12, EnlevementListComponent_Conditional_12_Template, 4, 0, "button", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
        \u0275\u0275listener("click", function EnlevementListComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "config";
        });
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Configuration ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275listener("click", function EnlevementListComponent_Template_button_click_18_listener() {
          return ctx.activeTab = "reglements";
        });
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275text(20, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " R\xE8glements ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, EnlevementListComponent_Conditional_22_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(23, EnlevementListComponent_Conditional_23_Template, 19, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, EnlevementListComponent_Conditional_24_Template, 65, 16, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.activeTab === "config" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "reglements" && ctx.generated && ctx.entries.length > 0 ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "config");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "reglements");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "config" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "reglements" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 24 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--accent);\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: #015f65;\n}\n.btn-pdf[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: none;\n  border-radius: 8px;\n  background: #dc2626;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-pdf[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--accent);\n  border-bottom-color: var(--accent);\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-group-start[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid #e9ecef;\n}\n.amount-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 8px;\n  background: #e6f7f7;\n  color: var(--accent);\n  font-weight: 700;\n  font-size: 13px;\n  font-family: "Roboto Mono", monospace;\n}\n.clients-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #0284c7;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n  border: 1px solid #bae6fd;\n  background: var(--bg-hover);\n}\n.clients-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.clients-chip[_ngcontent-%COMP%]:hover {\n  background: #e0f2fe;\n}\n.clients-popover[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding: 8px 12px;\n  background: var(--bg-hover);\n  border-radius: 6px;\n  border: 1px solid #bae6fd;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.client-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.client-name[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.client-rate[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.global-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-style: italic;\n  font-weight: 500;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: #0284c7;\n}\n.icon-btn.icon-btn-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.filter-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 16px;\n}\n.filter-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n}\n.filter-card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.1);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.stat-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  padding: 14px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  flex: 1;\n  min-width: 160px;\n}\n.stat-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--text-muted);\n}\n.stat-chip.stat-main[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-val[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.subtotal-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--accent);\n  padding: 7px 16px;\n  border-bottom: 2px solid #d1fae5;\n}\n.subtotal-label[_ngcontent-%COMP%] {\n  text-align: right;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.subtotal-val[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.foot-label[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  font-weight: 700;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-val[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  font-weight: 700;\n  font-size: 15px;\n  background: var(--bg-elevated);\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  color: var(--accent);\n  white-space: nowrap;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.modal-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 540px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.modal-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-ftr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  color: var(--text-primary);\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.1);\n}\n.input-suffix[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.input-suffix[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 7px 0 0 7px;\n  flex: 1;\n}\n.input-suffix[_ngcontent-%COMP%]   .suffix[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-left: none;\n  border-radius: 0 7px 7px 0;\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.section-sep[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 4px 0 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-sep[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.section-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0 0 12px;\n}\n.btn-add-row[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border: 1px solid #017E84;\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--accent);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-add-row[_ngcontent-%COMP%]:hover {\n  background: #e6f7f7;\n}\n.client-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.client-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.client-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.client-row[_ngcontent-%COMP%]   .w-amount[_ngcontent-%COMP%] {\n  width: 150px;\n  flex-shrink: 0;\n}\n.btn-remove-row[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 4px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.btn-remove-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-row[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.no-rows[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n  margin: 0 0 12px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 7px;\n  background: var(--accent);\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=enlevement-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnlevementListComponent, [{
    type: Component,
    args: [{ selector: "app-enlevement-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">local_shipping</span>
      <div>
        <h1 class="page-title">Co\xFBts d'enl\xE8vement</h1>
        <p class="page-subtitle">Configuration des tarifs et r\xE8glements par p\xE9riode</p>
      </div>
    </div>
    <div class="header-right">
      @if (activeTab === 'config') {
        <button class="btn-new" (click)="openNew()">
          <span class="material-icons">add</span> Nouveau tarif
        </button>
      }
      @if (activeTab === 'reglements' && generated && entries.length > 0) {
        <button class="btn-pdf" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> T\xE9l\xE9charger PDF
        </button>
      }
    </div>
  </div>

  <!-- \u2550\u2550 TABS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="tabs-bar">
    <button class="tab-btn" [class.active]="activeTab === 'config'" (click)="activeTab = 'config'">
      <span class="material-icons">settings</span> Configuration
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'reglements'" (click)="activeTab = 'reglements'">
      <span class="material-icons">receipt_long</span> R\xE8glements
    </button>
  </div>

  <!-- \u2550\u2550 ONGLET CONFIG \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'config') {
    <div class="card">
      @if (loadingConfig) {
        <div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div>
      } @else if (enlevements.length === 0) {
        <div class="empty-state">
          <span class="material-icons">local_shipping</span>
          <p>Aucun tarif d'enl\xE8vement configur\xE9.</p>
          <button class="btn-new" (click)="openNew()"><span class="material-icons">add</span> Cr\xE9er le premier</button>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Cat\xE9gorie d'article</th>
              <th class="text-right">Montant fixe HT / U.</th>
              <th class="text-right">Montant fixe TTC / U.</th>
              <th class="text-right">Co\xFBt interne HT / U.</th>
              <th>Tarifs sp\xE9cifiques</th>
              <th style="width:90px"></th>
            </tr>
          </thead>
          <tbody>
            @for (e of enlevements; track e.id) {
              <tr>
                <td class="font-bold">{{ e.categoryName }}</td>
                <td class="text-right">
                  <span class="amount-pill">{{ e.montantFixe | number:'1.2-2' }} FCFA</span>
                </td>
                <td class="text-right text-muted font-mono">{{ ttc(e.montantFixe) | number:'1.0-0' }} FCFA</td>
                <td class="text-right text-muted font-mono">{{ (e.coutEnlevement ?? 0) | number:'1.0-0' }} FCFA</td>
                <td>
                  @if (e.clients && e.clients.length > 0) {
                    <span class="clients-chip" (click)="toggleExpand(e.id!)">
                      <span class="material-icons">groups</span>
                      {{ e.clients.length }} fournisseur(s)
                      <span class="material-icons">{{ expandedId === e.id ? 'expand_less' : 'expand_more' }}</span>
                    </span>
                    @if (expandedId === e.id) {
                      <div class="clients-popover">
                        @for (c of e.clients; track c.partnerId) {
                          <div class="client-item">
                            <span class="client-name">{{ c.partnerName }}</span>
                            <span class="client-rate">{{ c.montant | number:'1.0-0' }} FCFA</span>
                          </div>
                        }
                      </div>
                    }
                  } @else {
                    <span class="global-tag">Tarif global</span>
                  }
                </td>
                <td class="row-actions">
                  <button class="icon-btn" (click)="openEdit(e)" title="Modifier">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="icon-btn icon-btn-danger" (click)="removeConfig(e.id!)" title="Supprimer">
                    <span class="material-icons">delete_outline</span>
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

  <!-- \u2550\u2550 ONGLET R\xC8GLEMENTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'reglements') {

    <div class="filter-card">
      <div class="filter-card-title"><span class="material-icons">tune</span> P\xE9riode \xE0 g\xE9n\xE9rer</div>
      <div class="filter-row">
        <div class="filter-group">
          <label>Du</label>
          <input type="date" class="form-input" [(ngModel)]="dateFrom">
        </div>
        <div class="filter-group">
          <label>Au</label>
          <input type="date" class="form-input" [(ngModel)]="dateTo">
        </div>
        <button class="btn-generate" (click)="generate()" [disabled]="generating">
          @if (generating) {
            <span class="material-icons spin">hourglass_empty</span> G\xE9n\xE9ration\u2026
          } @else {
            <span class="material-icons">play_arrow</span> G\xE9n\xE9rer
          }
        </button>
      </div>
      @if (reglError) {
        <div class="alert-error"><span class="material-icons">error_outline</span>{{ reglError }}</div>
      }
    </div>

    @if (generated) {
      @if (entries.length === 0) {
        <div class="card">
          <div class="empty-state">
            <span class="material-icons">search_off</span>
            <p>Aucun co\xFBt d'enl\xE8vement calcul\xE9 sur cette p\xE9riode.</p>
          </div>
        </div>
      } @else {

        <!-- Stats -->
        <div class="stats-row">
          <div class="stat-chip stat-main">
            <span class="material-icons">payments</span>
            <div>
              <div class="stat-lbl">Total enl\xE8vements</div>
              <div class="stat-val">{{ grandTotal | number:'1.0-0' }} <span>FCFA</span></div>
            </div>
          </div>
          <div class="stat-chip">
            <span class="material-icons">store</span>
            <div>
              <div class="stat-lbl">Fournisseurs</div>
              <div class="stat-val">{{ partnerCount }}</div>
            </div>
          </div>
          <div class="stat-chip">
            <span class="material-icons">category</span>
            <div>
              <div class="stat-lbl">Cat\xE9gories</div>
              <div class="stat-val">{{ categoryCount }}</div>
            </div>
          </div>
        </div>

        <!-- Tableau -->
        <div class="card">
          <table class="data-table">
            <thead>
              <tr>
                <th>Fournisseur</th>
                <th>Cat\xE9gorie d'article</th>
                <th class="text-right">Quantit\xE9</th>
                <th class="text-right">Tarif / U. (FCFA)</th>
                <th class="text-right">Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              @for (entry of entries; track entry.partnerId) {
                @for (line of entry.lines; track line.categoryName; let first = $first) {
                  <tr [class.row-group-start]="first">
                    <td class="font-bold">{{ first ? entry.partnerName : '' }}</td>
                    <td>{{ line.categoryName }}</td>
                    <td class="text-right font-mono">{{ line.quantite | number:'1.0-2' }}</td>
                    <td class="text-right font-mono text-muted">{{ line.montantUnitaire | number:'1.0-0' }}</td>
                    <td class="text-right font-mono">{{ line.montantTotal | number:'1.0-0' }}</td>
                  </tr>
                }
                <tr class="subtotal-row">
                  <td colspan="4" class="subtotal-label">Sous-total {{ entry.partnerName }}</td>
                  <td class="text-right subtotal-val">{{ entry.totalAmount | number:'1.0-0' }}</td>
                </tr>
              }
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="foot-label">TOTAL G\xC9N\xC9RAL</td>
                <td class="foot-val">{{ grandTotal | number:'1.0-0' }} FCFA</td>
              </tr>
            </tfoot>
          </table>
        </div>

      }
    }
  }

</div>

<!-- \u2550\u2550 MODAL CONFIG \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showModal) {
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal-panel" (click)="$event.stopPropagation()">

      <div class="modal-hdr">
        <div class="modal-title">
          <span class="material-icons">local_shipping</span>
          {{ editing ? 'Modifier' : 'Nouveau' }} tarif d'enl\xE8vement
        </div>
        <button class="modal-close" (click)="closeModal()"><span class="material-icons">close</span></button>
      </div>

      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group form-full">
            <label>Cat\xE9gorie d'article <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="form.categoryId">
              <option [ngValue]="0" disabled>-- S\xE9lectionner --</option>
              @for (c of categories; track c.id) {
                <option [ngValue]="c.id">{{ c.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Montant fixe HT / unit\xE9 <span class="req">*</span></label>
            <div class="input-suffix">
              <input type="number" step="0.01" class="form-control" [(ngModel)]="form.montantFixe" min="0">
              <span class="suffix">FCFA</span>
            </div>
          </div>
          <div class="form-group">
            <label>\u2248 Montant TTC / unit\xE9</label>
            <div class="input-suffix">
              <input type="text" class="form-control" [value]="(ttc(form.montantFixe) | number:'1.0-0') + ' FCFA'" disabled>
            </div>
          </div>
          <div class="form-group">
            <label>Co\xFBt interne HT / unit\xE9</label>
            <div class="input-suffix">
              <input type="number" class="form-control" [(ngModel)]="form.coutEnlevement" min="0">
              <span class="suffix">FCFA</span>
            </div>
          </div>
        </div>

        <div class="section-sep">
          <span class="section-label">
            <span class="material-icons">groups</span> Tarifs sp\xE9cifiques par fournisseur
          </span>
          <button class="btn-add-row" (click)="addClientTarif()">
            <span class="material-icons">add</span> Ajouter
          </button>
        </div>
        <p class="section-hint">Ces montants remplacent le tarif global pour les fournisseurs concern\xE9s.</p>

        @if (form.clients && form.clients.length > 0) {
          <div class="client-rows">
            @for (c of form.clients; track $index; let i = $index) {
              <div class="client-row">
                <select class="form-control" [(ngModel)]="c.partnerId">
                  <option [ngValue]="0" disabled>-- Fournisseur --</option>
                  @for (s of suppliers; track s.id) {
                    <option [ngValue]="s.id">{{ s.name }}</option>
                  }
                </select>
                <div class="input-suffix w-amount">
                  <input type="number" class="form-control" [(ngModel)]="c.montant" placeholder="Montant" min="0">
                  <span class="suffix">FCFA</span>
                </div>
                <button class="btn-remove-row" (click)="removeClientTarif(i)">
                  <span class="material-icons">close</span>
                </button>
              </div>
            }
          </div>
        } @else {
          <p class="no-rows">Aucun tarif fournisseur \u2014 le montant global s'applique \xE0 tous.</p>
        }

        @if (errMsg) {
          <div class="alert-error"><span class="material-icons">error_outline</span>{{ errMsg }}</div>
        }
      </div>

      <div class="modal-ftr">
        <button class="btn-secondary" (click)="closeModal()">Annuler</button>
        <button class="btn-primary" (click)="saveConfig()" [disabled]="saving">
          <span class="material-icons" [class.spin]="saving">{{ saving ? 'hourglass_empty' : 'save' }}</span>
          {{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}
        </button>
      </div>

    </div>
  </div>
}
`, styles: ['/* src/app/modules/purchases/components/enlevements/enlevement-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-icon {\n  font-size: 28px;\n  color: var(--accent);\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.page-header .header-right {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: #015f65;\n}\n.btn-pdf {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: none;\n  border-radius: 8px;\n  background: #dc2626;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-pdf .material-icons {\n  font-size: 18px;\n}\n.btn-pdf:hover {\n  background: #b91c1c;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: var(--accent);\n}\n.tab-btn.active {\n  color: var(--accent);\n  border-bottom-color: var(--accent);\n  font-weight: 600;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 13px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr.row-group-start td {\n  border-top: 2px solid #e9ecef;\n}\n.amount-pill {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 8px;\n  background: #e6f7f7;\n  color: var(--accent);\n  font-weight: 700;\n  font-size: 13px;\n  font-family: "Roboto Mono", monospace;\n}\n.clients-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #0284c7;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n  border: 1px solid #bae6fd;\n  background: var(--bg-hover);\n}\n.clients-chip .material-icons {\n  font-size: 14px;\n}\n.clients-chip:hover {\n  background: #e0f2fe;\n}\n.clients-popover {\n  margin-top: 6px;\n  padding: 8px 12px;\n  background: var(--bg-hover);\n  border-radius: 6px;\n  border: 1px solid #bae6fd;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.client-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.client-name {\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.client-rate {\n  color: var(--accent);\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.global-tag {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-style: italic;\n  font-weight: 500;\n}\n.row-actions {\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n}\n.icon-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.icon-btn .material-icons {\n  font-size: 18px;\n}\n.icon-btn:hover {\n  background: var(--bg-elevated);\n  color: #0284c7;\n}\n.icon-btn.icon-btn-danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.filter-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 16px;\n}\n.filter-card-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n}\n.filter-card-title .material-icons {\n  font-size: 15px;\n}\n.filter-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-input {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n}\n.form-input:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.1);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.stats-row {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.stat-chip {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  padding: 14px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  flex: 1;\n  min-width: 160px;\n}\n.stat-chip .material-icons {\n  font-size: 24px;\n  color: var(--text-muted);\n}\n.stat-chip.stat-main .material-icons {\n  color: var(--accent);\n}\n.stat-lbl {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-val {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-val span {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.subtotal-row td {\n  background: var(--bg-hover);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--accent);\n  padding: 7px 16px;\n  border-bottom: 2px solid #d1fae5;\n}\n.subtotal-label {\n  text-align: right;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.subtotal-val {\n  font-family: "Roboto Mono", monospace;\n}\n.foot-label {\n  padding: 13px 16px;\n  font-weight: 700;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-val {\n  padding: 13px 16px;\n  font-weight: 700;\n  font-size: 15px;\n  background: var(--bg-elevated);\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  color: var(--accent);\n  white-space: nowrap;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.modal-panel {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 540px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.modal-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.modal-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-title .material-icons {\n  color: var(--accent);\n  font-size: 20px;\n}\n.modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.modal-close:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.modal-close .material-icons {\n  font-size: 20px;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-ftr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-control {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  color: var(--text-primary);\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.1);\n}\n.input-suffix {\n  display: flex;\n  align-items: center;\n}\n.input-suffix .form-control {\n  border-radius: 7px 0 0 7px;\n  flex: 1;\n}\n.input-suffix .suffix {\n  padding: 9px 10px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-left: none;\n  border-radius: 0 7px 7px 0;\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.req {\n  color: var(--danger);\n}\n.section-sep {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 4px 0 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-sep .material-icons {\n  font-size: 15px;\n}\n.section-hint {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0 0 12px;\n}\n.btn-add-row {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border: 1px solid #017E84;\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--accent);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-row .material-icons {\n  font-size: 14px;\n}\n.btn-add-row:hover {\n  background: #e6f7f7;\n}\n.client-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.client-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.client-row select {\n  flex: 1;\n}\n.client-row .w-amount {\n  width: 150px;\n  flex-shrink: 0;\n}\n.btn-remove-row {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 4px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.btn-remove-row .material-icons {\n  font-size: 16px;\n}\n.btn-remove-row:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.no-rows {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n  margin: 0 0 12px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error .material-icons {\n  font-size: 16px;\n}\n.btn-secondary {\n  padding: 8px 18px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 7px;\n  background: var(--accent);\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons {\n  font-size: 16px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.font-mono {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=enlevement-list.component.css.map */\n'] }]
  }], () => [{ type: EnlevementService }, { type: AuthService }, { type: StockService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnlevementListComponent, { className: "EnlevementListComponent", filePath: "app/modules/purchases/components/enlevements/enlevement-list.component.ts", lineNumber: 21 });
})();
export {
  EnlevementListComponent
};
//# sourceMappingURL=chunk-S2USJCUR.js.map
