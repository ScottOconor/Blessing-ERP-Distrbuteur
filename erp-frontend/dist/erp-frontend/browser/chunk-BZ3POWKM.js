import {
  PurchaseService
} from "./chunk-J47TS3XK.js";
import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  Router
} from "./chunk-K3VCSIQL.js";
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
} from "./chunk-FU5PLMG6.js";
import {
  AccountingService
} from "./chunk-TG7BJABV.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HostListener,
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/purchases/components/invoices/avoir-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function PurchaseAvoirListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " Total valid\xE9s : ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 1, ctx_r0.totalAvoirs(), "1.0-0"), " FCFA");
  }
}
function PurchaseAvoirListComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_For_17_Template_button_click_0_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter(f_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.stateFilter === f_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r3.label, " ");
  }
}
function PurchaseAvoirListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 17);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 4);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, 'Aucun avoir. Cliquez sur "Nouvel avoir" pour en cr\xE9er un.');
    \u0275\u0275elementEnd()();
  }
}
function PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r5.originalInvoiceName);
  }
}
function PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r5.purchaseOrderName);
  }
}
function PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r5.accountMoveName);
  }
}
function PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_21_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 20);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_21_For_23_Template_tr_click_0_listener() {
      const avoir_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAvoir(avoir_r5));
    });
    \u0275\u0275elementStart(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_9_Template, 2, 1, "span", 22)(10, PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_10_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_12_Template, 2, 1, "span", 22)(13, PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_13_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 18);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 24);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275conditionalCreate(21, PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_21_Template, 2, 1, "span", 25)(22, PurchaseAvoirListComponent_Conditional_21_For_23_Conditional_22_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const avoir_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(avoir_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 11, avoir_r5.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(avoir_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(avoir_r5.originalInvoiceName ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(avoir_r5.purchaseOrderName ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 14, avoir_r5.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 17, avoir_r5.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(avoir_r5.accountMoveName ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStateBadge(avoir_r5.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(avoir_r5.state || ""));
  }
}
function PurchaseAvoirListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Facture d'origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Commande d'achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 18);
    \u0275\u0275text(14, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 18);
    \u0275\u0275text(16, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, PurchaseAvoirListComponent_Conditional_21_For_23_Template, 26, 20, "tr", 19, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r0.filteredAvoirs);
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 4);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function PurchaseAvoirListComponent_Conditional_22_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.name);
  }
}
function PurchaseAvoirListComponent_Conditional_22_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r8 = ctx.$implicit;
    \u0275\u0275property("value", j_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r8.code, " - ", j_r8.name);
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 49);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Conditional_49_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Cliquez pour ajouter une ligne ");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_282_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearLine(\u0275$index_282_r11));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r14.defaultCode);
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("mousedown", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_For_2_Template_div_mousedown_0_listener() {
      const p_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const \u0275$index_282_r11 = \u0275\u0275nextContext(2).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectProduct(\u0275$index_282_r11, p_r14));
    });
    \u0275\u0275conditionalCreate(1, PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_For_2_Conditional_1_Template, 2, 1, "span", 72);
    \u0275\u0275elementStart(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r14.defaultCode ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, p_r14.standardPrice, "1.0-0"));
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275repeaterCreate(1, PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_For_2_Template, 7, 6, "div", 69, _forTrack1);
    \u0275\u0275conditionalCreate(3, PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_Conditional_3_Template, 2, 0, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_282_r11 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", ctx_r0.dropdownRect.top, "px")("left", ctx_r0.dropdownRect.left, "px")("width", ctx_r0.dropdownRect.width, "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getSuggestions(\u0275$index_282_r11));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getSuggestions(\u0275$index_282_r11).length === 0 ? 3 : -1);
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 58)(5, "div", 59)(6, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_ngModelChange_6_listener($event) {
      const \u0275$index_282_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearches[\u0275$index_282_r11], $event) || (ctx_r0.lineSearches[\u0275$index_282_r11] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_focus_6_listener($event) {
      const \u0275$index_282_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_282_r11, $event));
    })("blur", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_blur_6_listener() {
      const \u0275$index_282_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeSuggestions(\u0275$index_282_r11));
    })("input", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_input_6_listener($event) {
      const \u0275$index_282_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_282_r11, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_7_Template, 3, 0, "button", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Conditional_8_Template, 4, 7, "div", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_ngModelChange_10_listener($event) {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(line_r15.quantity, $event) || (line_r15.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_ngModelChange_10_listener() {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r15));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_ngModelChange_12_listener($event) {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(line_r15.prixUnitaire, $event) || (line_r15.prixUnitaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_ngModelChange_12_listener() {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r15));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_ngModelChange_14_listener($event) {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(line_r15.tauxTVA, $event) || (line_r15.tauxTVA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_input_ngModelChange_14_listener() {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r15));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 64);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 65);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "button", 66);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template_button_click_22_listener() {
      const \u0275$index_282_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_282_r11));
    });
    \u0275\u0275elementStart(23, "span", 4);
    \u0275\u0275text(24, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r15 = ctx.$implicit;
    const \u0275$index_282_r11 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_282_r11 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearches[\u0275$index_282_r11]);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r15.productCode ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSuggestionIdx === \u0275$index_282_r11 && ctx_r0.dropdownRect ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r15.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r15.prixUnitaire);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r15.tauxTVA);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 9, line_r15.montantHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 12, line_r15.montantTTC, "1.0-0"));
  }
}
function PurchaseAvoirListComponent_Conditional_22_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "table", 51)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 52);
    \u0275\u0275text(7, "Article / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 53);
    \u0275\u0275text(9, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 53);
    \u0275\u0275text(11, "Prix U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 53);
    \u0275\u0275text(13, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 53);
    \u0275\u0275text(15, "HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 53);
    \u0275\u0275text(17, "TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, PurchaseAvoirListComponent_Conditional_22_Conditional_50_For_21_Template, 25, 15, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 54)(23, "div", 55)(24, "span");
    \u0275\u0275text(25, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 55)(30, "span");
    \u0275\u0275text(31, "TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 56)(36, "span");
    \u0275\u0275text(37, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.avoirForm.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(28, 3, ctx_r0.avoirForm.totalHT, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 6, ctx_r0.avoirForm.totalTVA, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(40, 9, ctx_r0.avoirForm.totalTTC, "1.0-0"), " FCFA");
  }
}
function PurchaseAvoirListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "span", 4);
    \u0275\u0275text(4, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Nouvel avoir fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PurchaseAvoirListComponent_Conditional_22_Conditional_10_Template, 4, 1, "div", 30);
    \u0275\u0275elementStart(11, "div", 31)(12, "div", 32)(13, "div", 33)(14, "label");
    \u0275\u0275text(15, "Fournisseur ");
    \u0275\u0275elementStart(16, "span", 34);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.partnerId, $event) || (ctx_r0.avoirForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 36);
    \u0275\u0275text(20, "\u2014 S\xE9lectionner un fournisseur \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, PurchaseAvoirListComponent_Conditional_22_For_22_Template, 2, 2, "option", 37, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 33)(24, "label");
    \u0275\u0275text(25, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.journalId, $event) || (ctx_r0.avoirForm.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(27, PurchaseAvoirListComponent_Conditional_22_For_28_Template, 2, 3, "option", 37, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 33)(30, "label");
    \u0275\u0275text(31, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.date, $event) || (ctx_r0.avoirForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 33)(34, "label");
    \u0275\u0275text(35, "Date d'\xE9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.dateEcheance, $event) || (ctx_r0.avoirForm.dateEcheance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 39)(38, "label");
    \u0275\u0275text(39, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_22_Template_textarea_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.notes, $event) || (ctx_r0.avoirForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 41)(42, "div", 42)(43, "span", 43);
    \u0275\u0275text(44, "Lignes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 44);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(46, "span", 4);
    \u0275\u0275text(47, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Ajouter une ligne ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, PurchaseAvoirListComponent_Conditional_22_Conditional_49_Template, 5, 0, "div", 45)(50, PurchaseAvoirListComponent_Conditional_22_Conditional_50_Template, 41, 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 46)(52, "button", 47);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(53, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 48);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_22_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAvoir());
    });
    \u0275\u0275elementStart(55, "span", 4);
    \u0275\u0275text(56, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.suppliers);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.journalId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.journals);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.dateEcheance);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.notes);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.avoirForm.lines.length === 0 ? 49 : 50);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Cr\xE9ation..." : "Cr\xE9er l'avoir", " ");
  }
}
var PurchaseAvoirListComponent = class _PurchaseAvoirListComponent {
  onWindowChange() {
    this.activeSuggestionIdx = null;
  }
  constructor(purchaseService, accountingService, stockService, authService, router) {
    this.purchaseService = purchaseService;
    this.accountingService = accountingService;
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.avoirs = [];
    this.filteredAvoirs = [];
    this.loading = false;
    this.stateFilter = "all";
    this.stateFilters = [
      { value: "all", label: "Tous" },
      { value: "draft", label: "Brouillon" },
      { value: "posted", label: "Valid\xE9" },
      { value: "cancelled", label: "Annul\xE9" }
    ];
    this.showModal = false;
    this.saving = false;
    this.errorMsg = "";
    this.suppliers = [];
    this.journals = [];
    this.allProducts = [];
    this.TVA_DEFAULT = 19.25;
    this.avoirForm = this.emptyAvoir();
    this.lineSearches = [];
    this.lineSearchResults = [];
    this.activeSuggestionIdx = null;
    this.dropdownRect = null;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.loadAvoirs();
  }
  loadAvoirs() {
    this.loading = true;
    this.purchaseService.getAvoirs(this.companyId).subscribe({
      next: (data) => {
        this.avoirs = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filteredAvoirs = this.stateFilter === "all" ? this.avoirs : this.avoirs.filter((a) => a.state === this.stateFilter);
  }
  setFilter(state) {
    this.stateFilter = state;
    this.applyFilter();
  }
  openAvoir(avoir) {
    this.router.navigate(["/purchases/invoices", avoir.id]);
  }
  getStateBadge(state) {
    const map = {
      draft: "badge-draft",
      posted: "badge-posted",
      cancelled: "badge-cancelled"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = { draft: "Brouillon", posted: "Valid\xE9", cancelled: "Annul\xE9" };
    return map[state] || state;
  }
  totalAvoirs() {
    return this.filteredAvoirs.filter((a) => a.state === "posted").reduce((s, a) => s + (a.totalTTC || 0), 0);
  }
  // === Création avoir direct ===
  openCreate() {
    this.errorMsg = "";
    this.avoirForm = this.emptyAvoir();
    this.lineSearches = [];
    this.lineSearchResults = [];
    this.activeSuggestionIdx = null;
    this.showModal = true;
    if (this.suppliers.length === 0 || this.journals.length === 0 || this.allProducts.length === 0) {
      forkJoin({
        partners: this.accountingService.getPartners(this.companyId),
        journals: this.accountingService.getJournals(this.companyId),
        products: this.stockService.getProducts(this.companyId)
      }).subscribe({
        next: ({ partners, journals, products }) => {
          this.suppliers = partners.filter((p) => p.type === "supplier" || p.type === "both");
          this.journals = journals.filter((j) => j.type === "purchase");
          this.allProducts = products.filter((p) => p.type === "product" || p.type === "consu" || p.type === "service");
          if (this.journals.length > 0 && !this.avoirForm.journalId) {
            this.avoirForm.journalId = this.journals[0].id;
          }
        }
      });
    } else if (this.journals.length > 0 && !this.avoirForm.journalId) {
      this.avoirForm.journalId = this.journals[0].id;
    }
  }
  closeModal() {
    this.showModal = false;
    this.errorMsg = "";
  }
  emptyAvoir() {
    return {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      partnerId: 0,
      companyId: this.companyId || 0,
      type: "credit_note",
      lines: []
    };
  }
  addLine() {
    this.avoirForm.lines.push({
      description: "",
      quantity: 1,
      prixUnitaire: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: "601000"
    });
    this.lineSearches.push("");
    this.lineSearchResults.push([]);
  }
  removeLine(i) {
    this.avoirForm.lines.splice(i, 1);
    this.lineSearches.splice(i, 1);
    this.lineSearchResults.splice(i, 1);
    this.computeTotals();
  }
  onLineChange(line) {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const tva = line.tauxTVA || 0;
    const ht = qty * pu;
    line.montantHT = Math.round(ht * 100) / 100;
    line.montantTVA = Math.round(ht * tva / 100 * 100) / 100;
    line.montantTTC = Math.round((ht + (line.montantTVA || 0)) * 100) / 100;
    this.computeTotals();
  }
  computeTotals() {
    let ht = 0, tva = 0, ttc = 0;
    for (const l of this.avoirForm.lines) {
      ht += l.montantHT || 0;
      tva += l.montantTVA || 0;
      ttc += l.montantTTC || 0;
    }
    this.avoirForm.totalHT = Math.round(ht * 100) / 100;
    this.avoirForm.totalTVA = Math.round(tva * 100) / 100;
    this.avoirForm.totalTTC = Math.round(ttc * 100) / 100;
  }
  // Autocomplete
  getSuggestions(i) {
    if (this.lineSearchResults[i]?.length > 0)
      return this.lineSearchResults[i];
    const q = (this.lineSearches[i] || "").toLowerCase().trim();
    if (!q)
      return this.allProducts.slice(0, 8);
    return this.allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q)).slice(0, 10);
  }
  openSuggestions(i, event) {
    if (this.avoirForm.lines[i]?.productCode)
      this.lineSearches[i] = "";
    if (event?.target) {
      const rect = event.target.getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
  }
  closeSuggestions(i) {
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      const line = this.avoirForm.lines[i];
      if (line?.productCode && !this.lineSearches[i]) {
        this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
      }
    }, 200);
  }
  selectProduct(i, product) {
    const line = this.avoirForm.lines[i];
    line.productCode = product.defaultCode || "";
    line.description = product.name;
    line.prixUnitaire = product.standardPrice || 0;
    line.tauxTVA = this.TVA_DEFAULT;
    this.lineSearches[i] = product.defaultCode ? `[${product.defaultCode}] ${product.name}` : product.name;
    this.activeSuggestionIdx = null;
    this.onLineChange(line);
  }
  clearLine(i) {
    const line = this.avoirForm.lines[i];
    line.productCode = "";
    line.description = "";
    line.prixUnitaire = 0;
    this.lineSearches[i] = "";
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
  }
  saveAvoir() {
    if (!this.avoirForm.partnerId || this.avoirForm.partnerId === 0) {
      this.errorMsg = "Veuillez s\xE9lectionner un fournisseur";
      return;
    }
    if (this.avoirForm.lines.length === 0) {
      this.errorMsg = "Ajoutez au moins une ligne";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const payload = __spreadProps(__spreadValues({}, this.avoirForm), { companyId: this.companyId, type: "credit_note" });
    this.purchaseService.createAvoirManuel(payload).subscribe({
      next: (created) => {
        this.saving = false;
        this.showModal = false;
        this.router.navigate(["/purchases/invoices", created.id]);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la cr\xE9ation de l'avoir";
      }
    });
  }
  static {
    this.\u0275fac = function PurchaseAvoirListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseAvoirListComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseAvoirListComponent, selectors: [["app-purchase-avoir-list"]], hostBindings: function PurchaseAvoirListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function PurchaseAvoirListComponent_scroll_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow)("resize", function PurchaseAvoirListComponent_resize_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 23, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "header-right"], [1, "total-badge"], [1, "btn-new", 3, "click"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "modal-overlay"], [1, "filter-btn", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "clickable-row"], [1, "clickable-row", 3, "click"], [1, "font-mono", "font-bold", "avoir-name"], [1, "link-ref"], [1, "text-muted"], [1, "text-right", "font-bold"], [1, "ecriture-chip"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [1, "modal-error"], [1, "modal-body"], [1, "modal-grid"], [1, "form-group"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [3, "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["rows", "2", "placeholder", "Motif de l'avoir...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "lines-section"], [1, "lines-header"], [1, "lines-title"], [1, "btn-add-line", 3, "click"], [1, "lines-empty"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-add-line-empty", 3, "click"], [1, "lines-wrap"], [1, "lines-table"], [2, "min-width", "200px"], [1, "ar"], [1, "modal-totals"], [1, "tot-row"], [1, "tot-row", "tot-ttc"], [1, "ln"], [1, "ac-wrap"], [1, "ac-row"], ["type", "text", "placeholder", "Rechercher un article...", "autocomplete", "off", 1, "inp", 3, "ngModelChange", "focus", "blur", "input", "ngModel"], [1, "btn-clr"], [1, "sug-panel", 3, "top", "left", "width"], ["type", "number", "min", "0", 1, "inp", "ar", 3, "ngModelChange", "ngModel"], [1, "ar", "amt"], [1, "ar", "amt-ttc"], [1, "btn-del", 3, "click"], [1, "btn-clr", 3, "click"], [1, "sug-panel"], [1, "sug-item"], [1, "sug-empty"], [1, "sug-item", 3, "mousedown"], [1, "sc"], [1, "sn"], [1, "sp"]], template: function PurchaseAvoirListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "undo");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Avoirs fournisseurs ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275conditionalCreate(10, PurchaseAvoirListComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function PurchaseAvoirListComponent_Template_button_click_11_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(12, "span", 4);
        \u0275\u0275text(13, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Nouvel avoir ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275repeaterCreate(16, PurchaseAvoirListComponent_For_17_Template, 2, 3, "button", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275conditionalCreate(19, PurchaseAvoirListComponent_Conditional_19_Template, 4, 0, "div", 12)(20, PurchaseAvoirListComponent_Conditional_20_Template, 5, 0, "div", 13)(21, PurchaseAvoirListComponent_Conditional_21_Template, 24, 0, "table", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, PurchaseAvoirListComponent_Conditional_22_Template, 58, 10, "div", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filteredAvoirs.length, " avoir(s)");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.totalAvoirs() > 0 ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 19 : ctx.filteredAvoirs.length === 0 ? 20 : 21);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 22 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6f42c1;\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.total-badge[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a32a3;\n  background: #f0ebff;\n  border: 1px solid #d4c6f5;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: #5a2d9c;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6f42c1;\n  color: #6f42c1;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #6f42c1;\n  border-color: #6f42c1;\n  color: white;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #faf8ff;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.avoir-name[_ngcontent-%COMP%] {\n  color: #5a32a3;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.link-ref[_ngcontent-%COMP%] {\n  color: #00A09D;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.ecriture-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: monospace;\n  background: #f0f0f0;\n  color: #495057;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6f42c1;\n  font-size: 22px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  transition: all 0.15s;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: #fde8e8;\n  color: #842029;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  flex: 1;\n}\n.modal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.modal-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lines-section[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.lines-header[_ngcontent-%COMP%]   .lines-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: #6f42c1;\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n}\n.btn-add-line-empty[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed #dee2e6;\n  color: #adb5bd;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-add-line-empty[_ngcontent-%COMP%]:hover {\n  border-color: #6f42c1;\n  color: #6f42c1;\n}\n.lines-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n  background: #f4f6f8;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #e2e8ef;\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 5px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #faf8ff;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .btn-del[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ln[_ngcontent-%COMP%] {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: #adb5bd;\n  font-weight: 600;\n}\n.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.amt[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #495057;\n}\n.amt-ttc[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #6f42c1;\n}\n.inp[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n  transition: border-color 0.15s, background 0.15s;\n}\n.inp[_ngcontent-%COMP%]:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.inp[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(111, 66, 193, 0.1);\n}\n.inp.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.btn-clr[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  display: flex;\n  align-items: center;\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-clr[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.btn-clr[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.sug-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  background: white;\n  border: 1px solid #c8d0da;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sug-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background 0.12s;\n}\n.sug-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.sug-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.sug-item[_ngcontent-%COMP%]:hover {\n  background: #f8f5ff;\n}\n.sug-item[_ngcontent-%COMP%]   .sc[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  background: #f0ebff;\n  color: #6f42c1;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  min-width: 52px;\n  text-align: center;\n}\n.sug-item[_ngcontent-%COMP%]   .sn[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n}\n.sug-item[_ngcontent-%COMP%]   .sp[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: #6c757d;\n  font-family: monospace;\n  background: #f4f6f8;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-empty[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 13px;\n  font-style: italic;\n}\n.btn-del[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  color: #c8d0da;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-del[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n  color: #dc3545;\n  opacity: 1 !important;\n}\n.modal-totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  padding: 12px 0 4px;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 8px;\n}\n.tot-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  font-size: 13px;\n  color: #6c757d;\n}\n.tot-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  min-width: 130px;\n  text-align: right;\n  font-family: monospace;\n}\n.tot-row.tot-ttc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #6f42c1;\n  padding-top: 6px;\n  border-top: 2px solid #6f42c1;\n  margin-top: 4px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  color: #495057;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a2d9c;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=avoir-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseAvoirListComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-avoir-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">undo</span>
        Avoirs fournisseurs
      </h1>
      <span class="record-count">{{ filteredAvoirs.length }} avoir(s)</span>
    </div>
    <div class="header-right">
      @if (totalAvoirs() > 0) {
        <div class="total-badge">
          Total valid\xE9s : <strong>{{ totalAvoirs() | number:'1.0-0' }} FCFA</strong>
        </div>
      }
      <button class="btn-new" (click)="openCreate()">
        <span class="material-icons">add</span>
        Nouvel avoir
      </button>
    </div>
  </div>

  <div class="filter-bar">
    @for (f of stateFilters; track f.value) {
      <button class="filter-btn" [class.active]="stateFilter === f.value" (click)="setFilter(f.value)">
        {{ f.label }}
      </button>
    }
  </div>

  <div class="card">
    @if (loading) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
    } @else if (filteredAvoirs.length === 0) {
      <div class="empty-state">
        <span class="material-icons">undo</span>
        <p>Aucun avoir. Cliquez sur "Nouvel avoir" pour en cr\xE9er un.</p>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>Num\xE9ro</th>
            <th>Date</th>
            <th>Fournisseur</th>
            <th>Facture d'origine</th>
            <th>Commande d'achat</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th>\xC9criture</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          @for (avoir of filteredAvoirs; track avoir.id) {
            <tr class="clickable-row" (click)="openAvoir(avoir)">
              <td class="font-mono font-bold avoir-name">{{ avoir.name }}</td>
              <td>{{ avoir.date | date:'dd/MM/yyyy' }}</td>
              <td>{{ avoir.partnerName }}</td>
              <td>
                @if (avoir.originalInvoiceName) {
                  <span class="link-ref">{{ avoir.originalInvoiceName }}</span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td>
                @if (avoir.purchaseOrderName) {
                  <span class="link-ref">{{ avoir.purchaseOrderName }}</span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td class="text-right">{{ avoir.totalHT | number:'1.0-0' }}</td>
              <td class="text-right font-bold">{{ avoir.totalTTC | number:'1.0-0' }}</td>
              <td>
                @if (avoir.accountMoveName) {
                  <span class="ecriture-chip">{{ avoir.accountMoveName }}</span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td><span [class]="getStateBadge(avoir.state || '')">{{ getStateLabel(avoir.state || '') }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>

<!-- ===== Modal cr\xE9ation avoir ===== -->
@if (showModal) {
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal-box" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <span class="material-icons">undo</span>
        <h2>Nouvel avoir fournisseur</h2>
        <button class="btn-close-modal" (click)="closeModal()">
          <span class="material-icons">close</span>
        </button>
      </div>

      @if (errorMsg) {
        <div class="modal-error">
          <span class="material-icons">error</span> {{ errorMsg }}
        </div>
      }

      <div class="modal-body">
        <div class="modal-grid">
          <div class="form-group">
            <label>Fournisseur <span class="req">*</span></label>
            <select [(ngModel)]="avoirForm.partnerId" class="form-control">
              <option [value]="0" disabled>\u2014 S\xE9lectionner un fournisseur \u2014</option>
              @for (s of suppliers; track s.id) {
                <option [value]="s.id">{{ s.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Journal</label>
            <select [(ngModel)]="avoirForm.journalId" class="form-control">
              @for (j of journals; track j.id) {
                <option [value]="j.id">{{ j.code }} - {{ j.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Date</label>
            <input type="date" [(ngModel)]="avoirForm.date" class="form-control" />
          </div>
          <div class="form-group">
            <label>Date d'\xE9ch\xE9ance</label>
            <input type="date" [(ngModel)]="avoirForm.dateEcheance" class="form-control" />
          </div>
          <div class="form-group form-full">
            <label>Notes</label>
            <textarea [(ngModel)]="avoirForm.notes" class="form-control" rows="2" placeholder="Motif de l'avoir..."></textarea>
          </div>
        </div>

        <div class="lines-section">
          <div class="lines-header">
            <span class="lines-title">Lignes</span>
            <button class="btn-add-line" (click)="addLine()">
              <span class="material-icons">add</span> Ajouter une ligne
            </button>
          </div>

          @if (avoirForm.lines.length === 0) {
            <div class="lines-empty">
              <button class="btn-add-line-empty" (click)="addLine()">
                <span class="material-icons">add_circle_outline</span>
                Cliquez pour ajouter une ligne
              </button>
            </div>
          } @else {
            <div class="lines-wrap">
              <table class="lines-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th style="min-width:200px">Article / Description</th>
                    <th class="ar">Qt\xE9</th>
                    <th class="ar">Prix U.</th>
                    <th class="ar">TVA %</th>
                    <th class="ar">HT</th>
                    <th class="ar">TTC</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  @for (line of avoirForm.lines; track $index; let i = $index) {
                    <tr>
                      <td class="ln">{{ i + 1 }}</td>
                      <td>
                        <div class="ac-wrap">
                          <div class="ac-row">
                            <input type="text" class="inp" [(ngModel)]="lineSearches[i]"
                              placeholder="Rechercher un article..."
                              (focus)="openSuggestions(i, $event)"
                              (blur)="closeSuggestions(i)"
                              (input)="openSuggestions(i, $event)"
                              autocomplete="off" />
                            @if (line.productCode) {
                              <button class="btn-clr" (click)="clearLine(i)">
                                <span class="material-icons">close</span>
                              </button>
                            }
                          </div>
                          @if (activeSuggestionIdx === i && dropdownRect) {
                            <div class="sug-panel"
                              [style.top.px]="dropdownRect.top"
                              [style.left.px]="dropdownRect.left"
                              [style.width.px]="dropdownRect.width">
                              @for (p of getSuggestions(i); track p.id) {
                                <div class="sug-item" (mousedown)="selectProduct(i, p)">
                                  @if (p.defaultCode) { <span class="sc">{{ p.defaultCode }}</span> }
                                  <span class="sn">{{ p.name }}</span>
                                  <span class="sp">{{ p.standardPrice | number:'1.0-0' }}</span>
                                </div>
                              }
                              @if (getSuggestions(i).length === 0) {
                                <div class="sug-empty">Aucun r\xE9sultat</div>
                              }
                            </div>
                          }
                        </div>
                      </td>
                      <td><input type="number" class="inp ar" [(ngModel)]="line.quantity" (ngModelChange)="onLineChange(line)" min="0" /></td>
                      <td><input type="number" class="inp ar" [(ngModel)]="line.prixUnitaire" (ngModelChange)="onLineChange(line)" min="0" /></td>
                      <td><input type="number" class="inp ar" [(ngModel)]="line.tauxTVA" (ngModelChange)="onLineChange(line)" min="0" /></td>
                      <td class="ar amt">{{ line.montantHT | number:'1.0-0' }}</td>
                      <td class="ar amt-ttc">{{ line.montantTTC | number:'1.0-0' }}</td>
                      <td>
                        <button class="btn-del" (click)="removeLine(i)">
                          <span class="material-icons">delete_outline</span>
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>

            <div class="modal-totals">
              <div class="tot-row"><span>Total HT</span><span>{{ avoirForm.totalHT | number:'1.0-0' }} FCFA</span></div>
              <div class="tot-row"><span>TVA</span><span>{{ avoirForm.totalTVA | number:'1.0-0' }} FCFA</span></div>
              <div class="tot-row tot-ttc"><span>Total TTC</span><span>{{ avoirForm.totalTTC | number:'1.0-0' }} FCFA</span></div>
            </div>
          }
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn-cancel" (click)="closeModal()">Annuler</button>
        <button class="btn-save" (click)="saveAvoir()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Cr\xE9ation...' : 'Cr\xE9er l\\'avoir' }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/purchases/components/invoices/avoir-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #6f42c1;\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.total-badge {\n  font-size: 13px;\n  color: #5a32a3;\n  background: #f0ebff;\n  border: 1px solid #d4c6f5;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: #5a2d9c;\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn {\n  padding: 6px 16px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn:hover {\n  border-color: #6f42c1;\n  color: #6f42c1;\n}\n.filter-btn.active {\n  background: #6f42c1;\n  border-color: #6f42c1;\n  color: white;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table .clickable-row {\n  cursor: pointer;\n}\n.data-table .clickable-row:hover td {\n  background: #faf8ff;\n}\n.data-table .clickable-row:last-child td {\n  border-bottom: none;\n}\n.avoir-name {\n  color: #5a32a3;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.link-ref {\n  color: #00A09D;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n.ecriture-chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: monospace;\n  background: #f0f0f0;\n  color: #495057;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header .material-icons {\n  color: #6f42c1;\n  font-size: 22px;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  transition: all 0.15s;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n}\n.btn-close-modal:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.modal-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: #fde8e8;\n  color: #842029;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error .material-icons {\n  font-size: 17px;\n}\n.modal-body {\n  padding: 20px 24px;\n  flex: 1;\n}\n.modal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.modal-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group .req {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: #6f42c1;\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.lines-section {\n  margin-top: 4px;\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.lines-header .lines-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: #6f42c1;\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 15px;\n}\n.btn-add-line:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-empty {\n  text-align: center;\n  padding: 24px;\n}\n.btn-add-line-empty {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed #dee2e6;\n  color: #adb5bd;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line-empty .material-icons {\n  font-size: 20px;\n}\n.btn-add-line-empty:hover {\n  border-color: #6f42c1;\n  color: #6f42c1;\n}\n.lines-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 8px 8px;\n  background: #f4f6f8;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #e2e8ef;\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table td {\n  padding: 4px 5px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table tbody tr:hover td {\n  background: #faf8ff;\n}\n.lines-table tbody tr:hover .btn-del {\n  opacity: 1;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ln {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: #adb5bd;\n  font-weight: 600;\n}\n.ar {\n  text-align: right;\n}\n.amt {\n  font-family: monospace;\n  color: #495057;\n}\n.amt-ttc {\n  font-family: monospace;\n  font-weight: 700;\n  color: #6f42c1;\n}\n.inp {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n  transition: border-color 0.15s, background 0.15s;\n}\n.inp:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.inp:focus {\n  border-color: #6f42c1;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(111, 66, 193, 0.1);\n}\n.inp.ar {\n  text-align: right;\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-row {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.btn-clr {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  display: flex;\n  align-items: center;\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-clr .material-icons {\n  font-size: 13px;\n}\n.btn-clr:hover {\n  color: #dc3545;\n}\n.sug-panel {\n  position: fixed;\n  z-index: 9999;\n  background: white;\n  border: 1px solid #c8d0da;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sug-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background 0.12s;\n}\n.sug-item:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.sug-item:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.sug-item:hover {\n  background: #f8f5ff;\n}\n.sug-item .sc {\n  flex-shrink: 0;\n  font-size: 11px;\n  background: #f0ebff;\n  color: #6f42c1;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  min-width: 52px;\n  text-align: center;\n}\n.sug-item .sn {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n}\n.sug-item .sp {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: #6c757d;\n  font-family: monospace;\n  background: #f4f6f8;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-empty {\n  padding: 14px 18px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 13px;\n  font-style: italic;\n}\n.btn-del {\n  width: 26px;\n  height: 26px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  color: #c8d0da;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-del .material-icons {\n  font-size: 16px;\n}\n.btn-del:hover {\n  background: #fde8e8;\n  color: #dc3545;\n  opacity: 1 !important;\n}\n.modal-totals {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  padding: 12px 0 4px;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 8px;\n}\n.tot-row {\n  display: flex;\n  gap: 32px;\n  font-size: 13px;\n  color: #6c757d;\n}\n.tot-row span:last-child {\n  min-width: 130px;\n  text-align: right;\n  font-family: monospace;\n}\n.tot-row.tot-ttc {\n  font-size: 15px;\n  font-weight: 700;\n  color: #6f42c1;\n  padding-top: 6px;\n  border-top: 2px solid #6f42c1;\n  margin-top: 4px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  color: #495057;\n}\n.btn-cancel:hover {\n  background: #f8f9fa;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.btn-save:hover:not(:disabled) {\n  background: #5a2d9c;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=avoir-list.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AccountingService }, { type: StockService }, { type: AuthService }, { type: Router }], { onWindowChange: [{
    type: HostListener,
    args: ["window:scroll", []]
  }, {
    type: HostListener,
    args: ["window:resize", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseAvoirListComponent, { className: "PurchaseAvoirListComponent", filePath: "src/app/modules/purchases/components/invoices/avoir-list.component.ts", lineNumber: 19 });
})();
export {
  PurchaseAvoirListComponent
};
//# sourceMappingURL=chunk-BZ3POWKM.js.map
