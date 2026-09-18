import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
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
  AccountingService
} from "./chunk-PGZXUWCB.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
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
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/purchases/components/invoices/avoir-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.id;
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
    \u0275\u0275elementStart(0, "button", 13);
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
    \u0275\u0275textInterpolate(f_r3.label);
  }
}
function PurchaseAvoirListComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_For_33_Template_button_click_0_listener() {
      const opt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setGroupBy(opt_r5.key));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.groupBy === opt_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r5.label, " ");
  }
}
function PurchaseAvoirListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 26);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 4);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, 'Aucun avoir. Cliquez sur "Nouvel avoir" pour en cr\xE9er un.');
    \u0275\u0275elementEnd()();
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r10.originalInvoiceName);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r10.purchaseOrderName);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r10.accountMoveName);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 35);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Template_tr_click_0_listener() {
      const avoir_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openAvoir(avoir_r10));
    });
    \u0275\u0275elementStart(1, "td", 36);
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
    \u0275\u0275conditionalCreate(9, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_9_Template, 2, 1, "span", 37)(10, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_10_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_12_Template, 2, 1, "span", 37)(13, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_13_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 27);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 39);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275conditionalCreate(21, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_21_Template, 2, 1, "span", 40)(22, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Conditional_22_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const avoir_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(avoir_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 11, avoir_r10.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(avoir_r10.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(avoir_r10.originalInvoiceName ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(avoir_r10.purchaseOrderName ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 14, avoir_r10.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 17, avoir_r10.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(avoir_r10.accountMoveName ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStateBadge(avoir_r10.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(avoir_r10.state || ""));
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_For_1_Template, 26, 20, "tr", 34, _forTrack2);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.getGroupItems(row_r8.key));
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Template_tr_click_0_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleGroup(row_r8.key));
    });
    \u0275\u0275elementStart(1, "td", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "td")(13, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Conditional_14_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isExpanded(row_r8.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtN(row_r8.totalHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtN(row_r8.totalTTC));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isExpanded(row_r8.key) ? 14 : -1);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PurchaseAvoirListComponent_Conditional_38_Conditional_22_For_1_Template, 15, 6, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.groupedRows);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r12.originalInvoiceName);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r12.purchaseOrderName);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avoir_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(avoir_r12.accountMoveName);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Template_tr_click_0_listener() {
      const avoir_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openAvoir(avoir_r12));
    });
    \u0275\u0275elementStart(1, "td", 36);
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
    \u0275\u0275conditionalCreate(9, PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_9_Template, 2, 1, "span", 37)(10, PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_10_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_12_Template, 2, 1, "span", 37)(13, PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_13_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 27);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 39);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275conditionalCreate(21, PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_21_Template, 2, 1, "span", 40)(22, PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Conditional_22_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const avoir_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(avoir_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 11, avoir_r12.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(avoir_r12.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(avoir_r12.originalInvoiceName ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(avoir_r12.purchaseOrderName ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 14, avoir_r12.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 17, avoir_r12.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(avoir_r12.accountMoveName ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStateBadge(avoir_r12.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(avoir_r12.state || ""));
  }
}
function PurchaseAvoirListComponent_Conditional_38_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PurchaseAvoirListComponent_Conditional_38_Conditional_23_For_1_Template, 26, 20, "tr", 41, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.filteredAvoirs);
  }
}
function PurchaseAvoirListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementStart(13, "th", 27);
    \u0275\u0275text(14, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 27);
    \u0275\u0275text(16, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275conditionalCreate(22, PurchaseAvoirListComponent_Conditional_38_Conditional_22_Template, 2, 0)(23, PurchaseAvoirListComponent_Conditional_38_Conditional_23_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275conditional(ctx_r0.groupBy ? 22 : 23);
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 4);
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
function PurchaseAvoirListComponent_Conditional_39_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275property("value", s_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r14.name);
  }
}
function PurchaseAvoirListComponent_Conditional_39_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r15 = ctx.$implicit;
    \u0275\u0275property("value", j_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r15.code, " - ", j_r15.name);
  }
}
function PurchaseAvoirListComponent_Conditional_39_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r16 = ctx.$implicit;
    \u0275\u0275property("ngValue", w_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r16.name);
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "button", 67);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Conditional_55_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
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
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const \u0275$index_417_r19 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearLine(\u0275$index_417_r19));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r22.defaultCode);
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("mousedown", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_For_2_Template_div_mousedown_0_listener() {
      const p_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const \u0275$index_417_r19 = \u0275\u0275nextContext(2).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectProduct(\u0275$index_417_r19, p_r22));
    });
    \u0275\u0275conditionalCreate(1, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_For_2_Conditional_1_Template, 2, 1, "span", 93);
    \u0275\u0275elementStart(2, "span", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 95);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 96);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r22.defaultCode ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, p_r22.standardPrice, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low", (p_r22.qtyAvailable ?? p_r22.qtyOnHand ?? 0) <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 10, p_r22.qtyAvailable ?? p_r22.qtyOnHand ?? 0, "1.0-0"), " ", p_r22.uomName, " ");
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275repeaterCreate(1, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_For_2_Template, 10, 13, "div", 90, _forTrack2);
    \u0275\u0275conditionalCreate(3, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_Conditional_3_Template, 2, 0, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_417_r19 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", ctx_r0.dropdownRect.top, "px")("left", ctx_r0.dropdownRect.left, "px")("width", ctx_r0.dropdownRect.width, "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getSuggestions(\u0275$index_417_r19));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getSuggestions(\u0275$index_417_r19).length === 0 ? 3 : -1);
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_417_r19 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("stock-low", ctx_r0.lineStockQty[\u0275$index_417_r19] <= 0)("stock-ok", ctx_r0.lineStockQty[\u0275$index_417_r19] > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, ctx_r0.lineStockQty[\u0275$index_417_r19], "1.0-0"), " dispo ");
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r23.rabaisUnitaire, "1.0-0"), " ");
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 77)(5, "div", 78)(6, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_ngModelChange_6_listener($event) {
      const \u0275$index_417_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearches[\u0275$index_417_r19], $event) || (ctx_r0.lineSearches[\u0275$index_417_r19] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_focus_6_listener($event) {
      const \u0275$index_417_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_417_r19, $event));
    })("blur", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_blur_6_listener() {
      const \u0275$index_417_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeSuggestions(\u0275$index_417_r19));
    })("input", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_input_6_listener($event) {
      const \u0275$index_417_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_417_r19, $event));
    })("keydown.enter", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_keydown_enter_6_listener($event) {
      const \u0275$index_417_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onProductSearchEnter(\u0275$index_417_r19, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_7_Template, 3, 0, "button", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_8_Template, 4, 7, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_ngModelChange_10_listener($event) {
      const line_r23 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r23.quantity, $event) || (line_r23.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_ngModelChange_10_listener() {
      const line_r23 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r23));
    })("keydown.enter", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_keydown_enter_10_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_11_Template, 3, 8, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "input", 82);
    \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_ngModelChange_13_listener($event) {
      const \u0275$index_417_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onCatHTChange(\u0275$index_417_r19, $event));
    })("keydown.enter", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_keydown_enter_13_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 84);
    \u0275\u0275conditionalCreate(15, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_15_Template, 2, 4)(16, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_ngModelChange_18_listener($event) {
      const line_r23 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r23.tauxTVA, $event) || (line_r23.tauxTVA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_ngModelChange_18_listener() {
      const line_r23 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r23));
    })("keydown.enter", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_input_keydown_enter_18_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 85);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 86);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "button", 87);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template_button_click_26_listener() {
      const \u0275$index_417_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_417_r19));
    });
    \u0275\u0275elementStart(27, "span", 4);
    \u0275\u0275text(28, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r23 = ctx.$implicit;
    const \u0275$index_417_r19 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_417_r19 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearches[\u0275$index_417_r19]);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r23.productCode ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSuggestionIdx === \u0275$index_417_r19 && ctx_r0.dropdownRect ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r23.quantity);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lineStockQty[\u0275$index_417_r19] !== void 0 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.lineCatHT[\u0275$index_417_r19]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((line_r23.rabaisUnitaire ?? 0) > 0 ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", line_r23.tauxTVA);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 11, line_r23.montantHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 14, line_r23.montantTTC, "1.0-0"));
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "span");
    \u0275\u0275text(2, "Rabais obtenus (601901)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75)(7, "span");
    \u0275\u0275text(8, "Net \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(5, 2, ctx_r0.totalRabaisHTAvoir, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 5, ctx_r0.netApresRabais, "1.0-0"), " FCFA");
  }
}
function PurchaseAvoirListComponent_Conditional_39_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "table", 69)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 70);
    \u0275\u0275text(7, "Article / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 71);
    \u0275\u0275text(9, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 71);
    \u0275\u0275text(11, "P.U. HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 72);
    \u0275\u0275text(13, "Rabais/u HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 71);
    \u0275\u0275text(15, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 71);
    \u0275\u0275text(17, "MNT HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 71);
    \u0275\u0275text(19, "MNT TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, PurchaseAvoirListComponent_Conditional_39_Conditional_56_For_23_Template, 29, 17, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 73)(25, "div", 74)(26, "span");
    \u0275\u0275text(27, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 74)(32, "span");
    \u0275\u0275text(33, "TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 75)(38, "span");
    \u0275\u0275text(39, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(43, PurchaseAvoirListComponent_Conditional_39_Conditional_56_Conditional_43_Template, 12, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r0.avoirForm.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(30, 4, ctx_r0.avoirForm.totalHT, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(36, 7, ctx_r0.avoirForm.totalTVA, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(42, 10, ctx_r0.avoirForm.totalTTC, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalRabaisHTAvoir > 0 ? 43 : -1);
  }
}
function PurchaseAvoirListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "span", 4);
    \u0275\u0275text(4, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Nouvel avoir fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 46);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PurchaseAvoirListComponent_Conditional_39_Conditional_10_Template, 4, 1, "div", 47);
    \u0275\u0275elementStart(11, "div", 48)(12, "div", 49)(13, "div", 50)(14, "label");
    \u0275\u0275text(15, "Fournisseur ");
    \u0275\u0275elementStart(16, "span", 51);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.partnerId, $event) || (ctx_r0.avoirForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 53);
    \u0275\u0275text(20, "\u2014 S\xE9lectionner un fournisseur \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, PurchaseAvoirListComponent_Conditional_39_For_22_Template, 2, 2, "option", 54, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 50)(24, "label");
    \u0275\u0275text(25, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.journalId, $event) || (ctx_r0.avoirForm.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(27, PurchaseAvoirListComponent_Conditional_39_For_28_Template, 2, 3, "option", 54, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 50)(30, "label");
    \u0275\u0275text(31, "Entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedWarehouseId, $event) || (ctx_r0.selectedWarehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Template_select_ngModelChange_32_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onWarehouseChange());
    });
    \u0275\u0275repeaterCreate(33, PurchaseAvoirListComponent_Conditional_39_For_34_Template, 2, 2, "option", 55, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 50)(36, "label");
    \u0275\u0275text(37, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.date, $event) || (ctx_r0.avoirForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 50)(40, "label");
    \u0275\u0275text(41, "Date d'\xE9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.dateEcheance, $event) || (ctx_r0.avoirForm.dateEcheance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 57)(44, "label");
    \u0275\u0275text(45, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "textarea", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Conditional_39_Template_textarea_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirForm.notes, $event) || (ctx_r0.avoirForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 59)(48, "div", 60)(49, "span", 61);
    \u0275\u0275text(50, "Lignes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 62);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(52, "span", 4);
    \u0275\u0275text(53, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Ajouter une ligne ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(55, PurchaseAvoirListComponent_Conditional_39_Conditional_55_Template, 5, 0, "div", 63)(56, PurchaseAvoirListComponent_Conditional_39_Conditional_56_Template, 44, 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 64)(58, "button", 65);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(59, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 66);
    \u0275\u0275listener("click", function PurchaseAvoirListComponent_Conditional_39_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAvoir());
    });
    \u0275\u0275elementStart(61, "span", 4);
    \u0275\u0275text(62, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
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
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedWarehouseId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.dateEcheance);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirForm.notes);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.avoirForm.lines.length === 0 ? 55 : 56);
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
    this.dateFrom = "";
    this.dateTo = "";
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
    this.lineStockQty = [];
    this.lineCatHT = [];
    this.activeSuggestionIdx = null;
    this.dropdownRect = null;
    this.defaultWarehouseId = null;
    this.warehouses = [];
    this.selectedWarehouseId = null;
    this.groupBy = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
    this.groupByOptions = [
      { key: "mois", label: "Mois", icon: "calendar_month" },
      { key: "fournisseur", label: "Fournisseur", icon: "business" },
      { key: "statut", label: "Statut", icon: "label" }
    ];
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
    this.filteredAvoirs = this.avoirs.filter((a) => {
      if (this.stateFilter !== "all" && a.state !== this.stateFilter)
        return false;
      if (this.dateFrom && a.date < this.dateFrom)
        return false;
      if (this.dateTo && a.date > this.dateTo)
        return false;
      return true;
    });
  }
  setFilter(state) {
    this.stateFilter = state;
    this.applyFilter();
  }
  clearDateFilter() {
    this.dateFrom = "";
    this.dateTo = "";
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
    this.lineStockQty = [];
    this.lineCatHT = [];
    this.activeSuggestionIdx = null;
    this.showModal = true;
    if (this.warehouses.length === 0) {
      this.stockService.getWarehouses(this.companyId).subscribe({
        next: (whs) => {
          this.warehouses = whs;
          const def = whs.find((w) => w.isDefault) ?? whs[0] ?? null;
          this.defaultWarehouseId = def?.id ?? null;
          this.selectedWarehouseId = this.defaultWarehouseId;
          this.loadCreateData(this.selectedWarehouseId);
        },
        error: () => this.loadCreateData(null)
      });
    } else {
      this.selectedWarehouseId = this.selectedWarehouseId ?? this.defaultWarehouseId;
      this.loadCreateData(this.selectedWarehouseId);
    }
  }
  loadCreateData(whId) {
    forkJoin({
      partners: this.accountingService.getPartners(this.companyId),
      journals: this.accountingService.getJournals(this.companyId),
      products: this.stockService.getProducts(this.companyId, whId ?? void 0)
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
  }
  /**
   * Rechargement des quantités dispo quand on change d'entrepôt : recharge les produits
   * pour l'entrepôt choisi et rafraîchit la quantité dispo affichée sur les lignes déjà saisies.
   */
  onWarehouseChange() {
    this.stockService.getProducts(this.companyId, this.selectedWarehouseId ?? void 0).subscribe({
      next: (products) => {
        this.allProducts = products.filter((p) => p.type === "product" || p.type === "consu" || p.type === "service");
        this.avoirForm.lines.forEach((line, i) => {
          if (!line.productCode)
            return;
          const p = this.allProducts.find((pr) => pr.defaultCode === line.productCode);
          this.lineStockQty[i] = p?.qtyAvailable ?? p?.qtyOnHand ?? 0;
        });
      }
    });
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
    this.lineStockQty.push(0);
    this.lineCatHT.push(0);
    this.avoirForm.lines.push({
      description: "",
      quantity: 1,
      prixUnitaire: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: "6011"
    });
    this.lineSearches.push("");
    this.lineSearchResults.push([]);
  }
  removeLine(i) {
    this.avoirForm.lines.splice(i, 1);
    this.lineSearches.splice(i, 1);
    this.lineSearchResults.splice(i, 1);
    this.lineStockQty.splice(i, 1);
    this.lineCatHT.splice(i, 1);
    this.computeTotals();
  }
  onCatHTChange(i, catPrice) {
    this.lineCatHT[i] = catPrice;
    const line = this.avoirForm.lines[i];
    line.prixUnitaire = catPrice;
    this.onLineChange(line);
  }
  onLineChange(line) {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const tva = line.tauxTVA || 0;
    const ht = qty * pu;
    line.montantHT = Math.round(ht * 100) / 100;
    line.montantTVA = Math.round(ht * tva / 100 * 100) / 100;
    line.montantTTC = Math.round((ht + (line.montantTVA || 0)) * 100) / 100;
    line.totalRabaisLigne = Math.round(qty * (line.rabaisUnitaire ?? 0) * 100) / 100;
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
  get totalRabaisHTAvoir() {
    return this.avoirForm.lines.reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }
  /** Total des rabais TTC (approximation TVA ; le backend recalcule avec précompte) */
  get totalRabaisTTCAvoir() {
    return this.avoirForm.lines.reduce((s, l) => s + (l.totalRabaisLigne ?? 0) * (1 + (l.tauxTVA ?? 0) / 100), 0);
  }
  /** Net à payer = Total TTC (prix normaux) − rabais TTC obtenus */
  get netApresRabais() {
    return Math.round((this.avoirForm.totalTTC ?? 0) - this.totalRabaisTTCAvoir);
  }
  // Convention alignée sur les ventes : prixUnitaire = prix CATALOGUE (normal). Le tarif
  // fournisseur est isolé en rabaisUnitaire et déduit au total, pas du prix de l'article.
  linePrixCatalogue(line) {
    return line.prixUnitaire ?? 0;
  }
  lineTotalCatalogueHT(line) {
    return (line.quantity ?? 0) * this.linePrixCatalogue(line);
  }
  // Autocomplete
  getSuggestions(i) {
    if (this.lineSearchResults[i]?.length > 0)
      return this.lineSearchResults[i];
    const q = (this.lineSearches[i] || "").toLowerCase().trim();
    if (!q)
      return this.allProducts.slice(0, 8);
    const matches = this.allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q));
    matches.sort((a, b) => {
      const codeA = (a.defaultCode || "").toLowerCase();
      const codeB = (b.defaultCode || "").toLowerCase();
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const rank = (code, name) => code === q ? 0 : code.startsWith(q) ? 1 : name.startsWith(q) ? 2 : 3;
      return rank(codeA, nameA) - rank(codeB, nameB);
    });
    return matches.slice(0, 12);
  }
  openSuggestions(i, event) {
    if (event instanceof FocusEvent && this.avoirForm.lines[i]?.productCode)
      this.lineSearches[i] = "";
    if (event?.target) {
      const rect = event.target.getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
  }
  onProductSearchEnter(i, event) {
    event.preventDefault();
    const suggestions = this.getSuggestions(i);
    if (suggestions.length > 0)
      this.selectProduct(i, suggestions[0]);
  }
  onLineEnter(event) {
    event.preventDefault();
    this.addLine();
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
    line.productId = product.id;
    line.productCode = product.defaultCode || "";
    line.description = product.name;
    const stdPrice = product.standardPrice || 0;
    line.prixUnitaire = stdPrice;
    line.rabaisUnitaire = 0;
    this.lineCatHT[i] = stdPrice;
    line.tauxTVA = product.exemptTvaAchat ? 0 : this.TVA_DEFAULT;
    this.lineSearches[i] = product.defaultCode ? `[${product.defaultCode}] ${product.name}` : product.name;
    this.lineStockQty[i] = product.qtyAvailable ?? product.qtyOnHand ?? 0;
    this.activeSuggestionIdx = null;
    this.onLineChange(line);
    const partnerId = this.avoirForm.partnerId;
    const companyId = this.authService.getCompanyId();
    if (partnerId && product.id && companyId) {
      this.purchaseService.getPrixFournisseurForProduct(partnerId, product.id, companyId).subscribe({
        next: (prix) => {
          if (prix) {
            line.rabaisUnitaire = Math.max(0, Math.round((stdPrice - prix.prixFournisseur) * 100) / 100);
            line.standardPrice = stdPrice;
            line.prixUnitaire = stdPrice;
            this.lineCatHT[i] = stdPrice;
            this.onLineChange(line);
          }
        }
      });
    }
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
    if (!this.avoirForm.journalId) {
      if (this.journals.length > 0) {
        this.avoirForm.journalId = this.journals[0].id;
      } else {
        this.errorMsg = "Veuillez s\xE9lectionner un journal";
        return;
      }
    }
    this.saving = true;
    this.errorMsg = "";
    const payload = __spreadProps(__spreadValues({}, this.avoirForm), {
      companyId: this.companyId,
      type: "credit_note",
      warehouseId: this.selectedWarehouseId ?? this.defaultWarehouseId ?? void 0
    });
    this.purchaseService.createAvoirManuel(payload).subscribe({
      next: (created) => {
        this.saving = false;
        this.showModal = false;
        this.router.navigate(["/purchases/invoices", created.id]);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || err.error?.error || (typeof err.error === "string" ? err.error : null) || err.message || "Erreur lors de la cr\xE9ation de l'avoir";
      }
    });
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const map = /* @__PURE__ */ new Map();
    for (const item of this.filteredAvoirs) {
      let key, label;
      switch (this.groupBy) {
        case "mois":
          key = (item.date || "").substring(0, 7);
          label = key ? this.fmtMonth(key) : "(Sans date)";
          break;
        case "fournisseur":
          key = label = item.partnerName || "(Sans fournisseur)";
          break;
        case "statut":
          key = item.state || "?";
          label = this.getStateLabel(item.state || "");
          break;
        default:
          key = label = "?";
      }
      if (!map.has(key))
        map.set(key, { key, label, count: 0, totalHT: 0, totalTTC: 0, paye: 0, du: 0, items: [] });
      const g = map.get(key);
      g.count++;
      g.totalHT += item.totalHT || 0;
      g.totalTTC += item.totalTTC || 0;
      g.paye += item.montantPaye || 0;
      g.du += item.montantDu || 0;
      g.items.push(item);
    }
    const arr = Array.from(map.values());
    arr.sort((a, b) => a.label.localeCompare(b.label));
    return arr;
  }
  setGroupBy(key) {
    this.groupBy = this.groupBy === key ? "" : key;
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
  getGroupItems(key) {
    return this.groupedRows.find((g) => g.key === key)?.items ?? [];
  }
  fmtMonth(ym) {
    const [y, m] = ym.split("-");
    return new Date(+y, +m - 1, 1).toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
  }
  fmtN(v) {
    return new Intl.NumberFormat("fr-FR").format(v || 0);
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
    }, decls: 40, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "header-right"], [1, "total-badge"], [1, "btn-new", 3, "click"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "filter-btn", 3, "click"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "modal-overlay"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "group-header-row", 3, "click"], ["colspan", "5", 1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "text-right", "group-num"], [1, "detail-row", "clickable-row"], [1, "detail-row", "clickable-row", 3, "click"], [1, "font-mono", "font-bold", "avoir-name"], [1, "link-ref"], [1, "text-muted"], [1, "text-right", "font-bold"], [1, "ecriture-chip"], [1, "clickable-row"], [1, "clickable-row", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [1, "modal-error"], [1, "modal-body"], [1, "modal-grid"], [1, "form-group"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [3, "value"], [3, "ngValue"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["rows", "2", "placeholder", "Motif de l'avoir...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "lines-section"], [1, "lines-header"], [1, "lines-title"], [1, "btn-add-line", 3, "click"], [1, "lines-empty"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-add-line-empty", 3, "click"], [1, "lines-wrap"], [1, "lines-table"], [2, "min-width", "200px"], [1, "ar"], [1, "ar", 2, "color", "#e65100"], [1, "modal-totals"], [1, "tot-row"], [1, "tot-row", "tot-ttc"], [1, "ln"], [1, "ac-wrap"], [1, "ac-row"], ["type", "text", "placeholder", "Rechercher un article...", "autocomplete", "off", 1, "inp", 3, "ngModelChange", "focus", "blur", "input", "keydown.enter", "ngModel"], [1, "btn-clr"], [1, "sug-panel", 3, "top", "left", "width"], ["type", "number", "min", "0", 1, "inp", "ar", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "stock-tag", 3, "stock-low", "stock-ok"], [1, "ar", 2, "color", "#e65100", "font-weight", "600"], [1, "ar", "amt"], [1, "ar", "amt-ttc"], [1, "btn-del", 3, "click"], [1, "btn-clr", 3, "click"], [1, "sug-panel"], [1, "sug-item"], [1, "sug-empty"], [1, "sug-item", 3, "mousedown"], [1, "sc"], [1, "sn"], [1, "sp"], [1, "sug-stock"], [1, "stock-tag"], [1, "tot-row", 2, "color", "#e65100"]], template: function PurchaseAvoirListComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(18, "div", 11)(19, "label");
        \u0275\u0275text(20, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Template_input_ngModelChange_21_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 11)(23, "label");
        \u0275\u0275text(24, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function PurchaseAvoirListComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PurchaseAvoirListComponent_Template_input_ngModelChange_25_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 13);
        \u0275\u0275listener("click", function PurchaseAvoirListComponent_Template_button_click_26_listener() {
          return ctx.clearDateFilter();
        });
        \u0275\u0275text(27, "Toutes dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 14)(29, "span", 15);
        \u0275\u0275text(30, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 16);
        \u0275\u0275repeaterCreate(32, PurchaseAvoirListComponent_For_33_Template, 4, 4, "button", 17, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, PurchaseAvoirListComponent_Conditional_34_Template, 4, 0, "button", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 19);
        \u0275\u0275conditionalCreate(36, PurchaseAvoirListComponent_Conditional_36_Template, 4, 0, "div", 20)(37, PurchaseAvoirListComponent_Conditional_37_Template, 5, 0, "div", 21)(38, PurchaseAvoirListComponent_Conditional_38_Template, 24, 1, "table", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(39, PurchaseAvoirListComponent_Conditional_39_Template, 64, 11, "div", 23);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filteredAvoirs.length, " avoir(s)");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.totalAvoirs() > 0 ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.groupByOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.groupBy ? 34 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 36 : ctx.filteredAvoirs.length === 0 ? 37 : 38);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 39 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.total-badge[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(139, 92, 246, 0.9);\n  background: rgba(109, 40, 217, 0.1);\n  border: 1px solid rgba(109, 40, 217, 0.3);\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(139, 92, 246, 0.9);\n  color: rgba(139, 92, 246, 0.9);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  border-color: rgba(139, 92, 246, 0.9);\n  color: white;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.avoir-name[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.link-ref[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.ecriture-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: monospace;\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n  font-size: 22px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  transition: all 0.15s;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  flex: 1;\n}\n.modal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.modal-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lines-section[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.lines-header[_ngcontent-%COMP%]   .lines-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: rgba(139, 92, 246, 0.9);\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n}\n.btn-add-line-empty[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed var(--border);\n  color: var(--text-muted);\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-add-line-empty[_ngcontent-%COMP%]:hover {\n  border-color: rgba(139, 92, 246, 0.9);\n  color: rgba(139, 92, 246, 0.9);\n}\n.lines-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 5px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .btn-del[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ln[_ngcontent-%COMP%] {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.amt[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.amt-ttc[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.inp[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n  transition: border-color 0.15s, background 0.15s;\n}\n.inp[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(111, 66, 193, 0.1);\n}\n.inp.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.btn-clr[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-clr[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.btn-clr[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n}\n.sug-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sug-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  transition: background 0.12s;\n}\n.sug-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.sug-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.sug-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.sug-item[_ngcontent-%COMP%]   .sc[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  min-width: 52px;\n  text-align: center;\n}\n.sug-item[_ngcontent-%COMP%]   .sn[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.sug-item[_ngcontent-%COMP%]   .sp[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-family: monospace;\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-empty[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-style: italic;\n}\n.sug-stock[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: #198754;\n  background: rgba(25, 135, 84, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-stock.low[_ngcontent-%COMP%] {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.stock-tag[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  font-size: 11px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 6px;\n  border-radius: 4px;\n}\n.stock-tag.stock-ok[_ngcontent-%COMP%] {\n  color: #198754;\n  background: rgba(25, 135, 84, 0.1);\n}\n.stock-tag.stock-low[_ngcontent-%COMP%] {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.btn-del[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  color: var(--border);\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-del[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n  opacity: 1 !important;\n}\n.modal-totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  padding: 12px 0 4px;\n  border-top: 1px solid var(--border-light);\n  margin-top: 8px;\n}\n.tot-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.tot-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  min-width: 130px;\n  text-align: right;\n  font-family: monospace;\n}\n.tot-row.tot-ttc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n  padding-top: 6px;\n  border-top: 2px solid rgba(109, 40, 217, 0.6);\n  margin-top: 4px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-light);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=avoir-list.component.css.map */'] });
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
      <button class="filter-btn" [class.active]="stateFilter === f.value" (click)="setFilter(f.value)">{{ f.label }}</button>
    }
    <div class="filter-date-group">
      <label>Du</label>
      <input type="date" class="form-control form-control-sm" [(ngModel)]="dateFrom" (ngModelChange)="applyFilter()">
    </div>
    <div class="filter-date-group">
      <label>Au</label>
      <input type="date" class="form-control form-control-sm" [(ngModel)]="dateTo" (ngModelChange)="applyFilter()">
    </div>
    <button class="filter-btn" (click)="clearDateFilter()">Toutes dates</button>
  </div>

  <!-- \u2500\u2500 Regrouper par \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="groupby-bar">
    <span class="groupby-label">Regrouper par :</span>
    <div class="groupby-btns">
      @for (opt of groupByOptions; track opt.key) {
        <button [class.active]="groupBy === opt.key" (click)="setGroupBy(opt.key)">
          <span class="material-icons">{{ opt.icon }}</span> {{ opt.label }}
        </button>
      }
    </div>
    @if (groupBy) {
      <button class="groupby-reset" (click)="setGroupBy('')">
        <span class="material-icons">close</span> Annuler
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
          @if (groupBy) {
            @for (row of groupedRows; track row.key) {
              <tr class="group-header-row" (click)="toggleGroup(row.key)">
                <td class="group-header-cell" colspan="5">
                  <span class="material-icons expand-icon">{{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}</span>
                  <span class="group-label">{{ row.label }}</span>
                  <span class="badge">{{ row.count }}</span>
                </td>
                <td class="text-right group-num">{{ fmtN(row.totalHT) }}</td>
                <td class="text-right group-num">{{ fmtN(row.totalTTC) }}</td>
                <td></td><td></td>
              </tr>
              @if (isExpanded(row.key)) {
                @for (avoir of getGroupItems(row.key); track avoir.id) {
                  <tr class="detail-row clickable-row" (click)="openAvoir(avoir)">
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
              }
            }
          } @else {
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
            <label>Entrep\xF4t</label>
            <select [(ngModel)]="selectedWarehouseId" (ngModelChange)="onWarehouseChange()" class="form-control">
              @for (w of warehouses; track w.id) {
                <option [ngValue]="w.id">{{ w.name }}</option>
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
                    <th class="ar">P.U. HT</th>
                    <th class="ar" style="color:#e65100">Rabais/u HT</th>
                    <th class="ar">TVA %</th>
                    <th class="ar">MNT HT</th>
                    <th class="ar">MNT TTC</th>
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
                              (keydown.enter)="onProductSearchEnter(i, $event)"
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
                                  <span class="sug-stock" [class.low]="(p.qtyAvailable ?? p.qtyOnHand ?? 0) <= 0">
                                    {{ (p.qtyAvailable ?? p.qtyOnHand ?? 0) | number:'1.0-0' }} {{ p.uomName }}
                                  </span>
                                </div>
                              }
                              @if (getSuggestions(i).length === 0) {
                                <div class="sug-empty">Aucun r\xE9sultat</div>
                              }
                            </div>
                          }
                        </div>
                      </td>
                      <td>
                        <input type="number" class="inp ar" [(ngModel)]="line.quantity" (ngModelChange)="onLineChange(line)" min="0" (keydown.enter)="onLineEnter($event)" />
                        @if (lineStockQty[i] !== undefined) {
                          <span class="stock-tag" [class.stock-low]="lineStockQty[i] <= 0" [class.stock-ok]="lineStockQty[i] > 0">
                            {{ lineStockQty[i] | number:'1.0-0' }} dispo
                          </span>
                        }
                      </td>
                      <td><input type="number" class="inp ar" [ngModel]="lineCatHT[i]" (ngModelChange)="onCatHTChange(i, $event)" min="0" (keydown.enter)="onLineEnter($event)" /></td>
                      <td class="ar" style="color:#e65100;font-weight:600">
                        @if ((line.rabaisUnitaire ?? 0) > 0) { \u2013 {{ line.rabaisUnitaire | number:'1.0-0' }} } @else { \u2014 }
                      </td>
                      <td><input type="number" class="inp ar" [(ngModel)]="line.tauxTVA" (ngModelChange)="onLineChange(line)" min="0" (keydown.enter)="onLineEnter($event)" /></td>
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
              @if (totalRabaisHTAvoir > 0) {
                <div class="tot-row" style="color:#e65100"><span>Rabais obtenus (601901)</span><span>\u2013 {{ totalRabaisHTAvoir | number:'1.0-0' }} FCFA</span></div>
                <div class="tot-row tot-ttc"><span>Net \xE0 payer</span><span>{{ netApresRabais | number:'1.0-0' }} FCFA</span></div>
              }
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
`, styles: ['/* src/app/modules/purchases/components/invoices/avoir-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: rgba(139, 92, 246, 0.9);\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.total-badge {\n  font-size: 13px;\n  color: rgba(139, 92, 246, 0.9);\n  background: rgba(109, 40, 217, 0.1);\n  border: 1px solid rgba(109, 40, 217, 0.3);\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn:hover {\n  border-color: rgba(139, 92, 246, 0.9);\n  color: rgba(139, 92, 246, 0.9);\n}\n.filter-btn.active {\n  background: #7C3AED;\n  border-color: rgba(139, 92, 246, 0.9);\n  color: white;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table .clickable-row {\n  cursor: pointer;\n}\n.data-table .clickable-row:hover td {\n  background: var(--bg-hover);\n}\n.data-table .clickable-row:last-child td {\n  border-bottom: none;\n}\n.avoir-name {\n  color: rgba(139, 92, 246, 0.9);\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.link-ref {\n  color: var(--accent);\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.ecriture-chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: monospace;\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header .material-icons {\n  color: rgba(139, 92, 246, 0.9);\n  font-size: 22px;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  transition: all 0.15s;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n}\n.btn-close-modal:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error .material-icons {\n  font-size: 17px;\n}\n.modal-body {\n  padding: 20px 24px;\n  flex: 1;\n}\n.modal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.modal-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.lines-section {\n  margin-top: 4px;\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.lines-header .lines-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: rgba(139, 92, 246, 0.9);\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 15px;\n}\n.btn-add-line:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-empty {\n  text-align: center;\n  padding: 24px;\n}\n.btn-add-line-empty {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed var(--border);\n  color: var(--text-muted);\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line-empty .material-icons {\n  font-size: 20px;\n}\n.btn-add-line-empty:hover {\n  border-color: rgba(139, 92, 246, 0.9);\n  color: rgba(139, 92, 246, 0.9);\n}\n.lines-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 8px 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table td {\n  padding: 4px 5px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table tbody tr:hover .btn-del {\n  opacity: 1;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ln {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.ar {\n  text-align: right;\n}\n.amt {\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.amt-ttc {\n  font-family: monospace;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.inp {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n  transition: border-color 0.15s, background 0.15s;\n}\n.inp:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(111, 66, 193, 0.1);\n}\n.inp.ar {\n  text-align: right;\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-row {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.btn-clr {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-clr .material-icons {\n  font-size: 13px;\n}\n.btn-clr:hover {\n  color: var(--danger);\n}\n.sug-panel {\n  position: fixed;\n  z-index: 9999;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sug-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  transition: background 0.12s;\n}\n.sug-item:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.sug-item:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.sug-item:hover {\n  background: var(--bg-hover);\n}\n.sug-item .sc {\n  flex-shrink: 0;\n  font-size: 11px;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  min-width: 52px;\n  text-align: center;\n}\n.sug-item .sn {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.sug-item .sp {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-family: monospace;\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-empty {\n  padding: 14px 18px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-style: italic;\n}\n.sug-stock {\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: #198754;\n  background: rgba(25, 135, 84, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-stock.low {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.stock-tag {\n  display: block;\n  margin-top: 2px;\n  font-size: 11px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 6px;\n  border-radius: 4px;\n}\n.stock-tag.stock-ok {\n  color: #198754;\n  background: rgba(25, 135, 84, 0.1);\n}\n.stock-tag.stock-low {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.btn-del {\n  width: 26px;\n  height: 26px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  color: var(--border);\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-del .material-icons {\n  font-size: 16px;\n}\n.btn-del:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n  opacity: 1 !important;\n}\n.modal-totals {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  padding: 12px 0 4px;\n  border-top: 1px solid var(--border-light);\n  margin-top: 8px;\n}\n.tot-row {\n  display: flex;\n  gap: 32px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.tot-row span:last-child {\n  min-width: 130px;\n  text-align: right;\n  font-family: monospace;\n}\n.tot-row.tot-ttc {\n  font-size: 15px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n  padding-top: 6px;\n  border-top: 2px solid rgba(109, 40, 217, 0.6);\n  margin-top: 4px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-light);\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n}\n.btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.btn-save:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=avoir-list.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AccountingService }, { type: StockService }, { type: AuthService }, { type: Router }], { onWindowChange: [{
    type: HostListener,
    args: ["window:scroll", []]
  }, {
    type: HostListener,
    args: ["window:resize", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseAvoirListComponent, { className: "PurchaseAvoirListComponent", filePath: "app/modules/purchases/components/invoices/avoir-list.component.ts", lineNumber: 19 });
})();
export {
  PurchaseAvoirListComponent
};
//# sourceMappingURL=chunk-VMIAW7Y6.js.map
