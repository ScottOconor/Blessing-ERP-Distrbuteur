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
  DatePipe,
  DecimalPipe,
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

// src/app/modules/sales/components/orders/order-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.id;
function OrderListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newOrder());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau bon ");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMsg, " ");
  }
}
function OrderListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 4);
    \u0275\u0275text(2, "error");
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
function OrderListComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function OrderListComponent_For_14_Template_button_click_0_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter(f_r4.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.stateFilter === f_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.label);
  }
}
function OrderListComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function OrderListComponent_For_30_Template_button_click_0_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setGroupBy(opt_r6.key));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.groupBy === opt_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r6.label, " ");
  }
}
function OrderListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 26);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_34_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newOrder());
    });
    \u0275\u0275text(1, "Cr\xE9er un bon");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 4);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun bon de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, OrderListComponent_Conditional_34_Conditional_5_Template, 2, 0, "button", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.canCreate ? 5 : -1);
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_20_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const order_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.viewInvoice(order_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r12.invoiceName, " ");
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_23_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const order_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editOrder(order_r12));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_23_Conditional_0_Template, 3, 0, "button", 44);
    \u0275\u0275elementStart(1, "button", 45);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_23_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const order_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.confirmOrder(order_r12, $event));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_23_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const order_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelOrder(order_r12, $event));
    });
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.canEdit ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.confirming === order_r12.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.confirming === order_r12.id ? "hourglass_empty" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.cancelling === order_r12.id);
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const order_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.viewInvoice(order_r12));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Template_tr_click_0_listener() {
      const order_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editOrder(order_r12));
    });
    \u0275\u0275elementStart(1, "td", 37);
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
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275conditionalCreate(20, OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_20_Template, 2, 1, "a", 39)(21, OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_21_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 41);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Template_td_click_22_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(23, OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_23_Template, 7, 4);
    \u0275\u0275conditionalCreate(24, OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Conditional_24_Template, 3, 0, "button", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 12, order_r12.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r12.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r12.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 15, order_r12.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, order_r12.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStateBadge(order_r12.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStateLabel(order_r12.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(order_r12.invoiceName ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(order_r12.state === "draft" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r12.state === "invoiced" ? 24 : -1);
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_For_1_Template, 25, 21, "tr", 35, _forTrack2);
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.getGroupItems(row_r10.key));
  }
}
function OrderListComponent_Conditional_35_Conditional_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_22_For_1_Template_tr_click_0_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(row_r10.key));
    });
    \u0275\u0275elementStart(1, "td", 30)(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "td")(13, "td")(14, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, OrderListComponent_Conditional_35_Conditional_22_For_1_Conditional_15_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded(row_r10.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtN(row_r10.totalHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtN(row_r10.totalTTC));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isExpanded(row_r10.key) ? 15 : -1);
  }
}
function OrderListComponent_Conditional_35_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderListComponent_Conditional_35_Conditional_22_For_1_Template, 16, 6, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.groupedRows);
  }
}
function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_20_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const order_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.viewInvoice(order_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r18.invoiceName, " ");
  }
}
function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_23_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const order_r18 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editOrder(order_r18));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_23_Conditional_0_Template, 3, 0, "button", 44);
    \u0275\u0275elementStart(1, "button", 45);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_23_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const order_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmOrder(order_r18, $event));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_23_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const order_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelOrder(order_r18, $event));
    });
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.canEdit ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.confirming === order_r18.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.confirming === order_r18.id ? "hourglass_empty" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.cancelling === order_r18.id);
  }
}
function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const order_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewInvoice(order_r18));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_Conditional_35_Conditional_23_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_23_For_1_Template_tr_click_0_listener() {
      const order_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editOrder(order_r18));
    });
    \u0275\u0275elementStart(1, "td", 37);
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
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275conditionalCreate(20, OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_20_Template, 2, 1, "a", 39)(21, OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_21_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 41);
    \u0275\u0275listener("click", function OrderListComponent_Conditional_35_Conditional_23_For_1_Template_td_click_22_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(23, OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_23_Template, 7, 4);
    \u0275\u0275conditionalCreate(24, OrderListComponent_Conditional_35_Conditional_23_For_1_Conditional_24_Template, 3, 0, "button", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 12, order_r18.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r18.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r18.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 15, order_r18.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, order_r18.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStateBadge(order_r18.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStateLabel(order_r18.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(order_r18.invoiceName ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(order_r18.state === "draft" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r18.state === "invoiced" ? 24 : -1);
  }
}
function OrderListComponent_Conditional_35_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderListComponent_Conditional_35_Conditional_23_For_1_Template, 25, 21, "tr", 49, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.filteredOrders);
  }
}
function OrderListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 27);
    \u0275\u0275text(12, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 27);
    \u0275\u0275text(14, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 28);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275conditionalCreate(22, OrderListComponent_Conditional_35_Conditional_22_Template, 2, 0)(23, OrderListComponent_Conditional_35_Conditional_23_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275conditional(ctx_r1.groupBy ? 22 : 23);
  }
}
var OrderListComponent = class _OrderListComponent {
  constructor(salesService, authService, router) {
    this.salesService = salesService;
    this.authService = authService;
    this.router = router;
    this.orders = [];
    this.filteredOrders = [];
    this.loading = false;
    this.canCreate = false;
    this.canEdit = false;
    this.stateFilter = "all";
    this.dateFrom = "";
    this.dateTo = "";
    this.successMsg = "";
    this.errorMsg = "";
    this.confirming = null;
    this.cancelling = null;
    this.stateFilters = [
      { value: "all", label: "Tous" },
      { value: "draft", label: "Brouillon" },
      { value: "confirmed", label: "Confirm\xE9" },
      { value: "invoiced", label: "Factur\xE9" },
      { value: "cancelled", label: "Annul\xE9" }
    ];
    this.groupBy = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
    this.groupByOptions = [
      { key: "mois", label: "Mois", icon: "calendar_month" },
      { key: "client", label: "Client", icon: "person" },
      { key: "statut", label: "Statut", icon: "label" },
      { key: "entrepot", label: "Entrep\xF4t", icon: "warehouse" }
    ];
  }
  ngOnInit() {
    this.canCreate = this.authService.hasPermission("VENTES", "BONS_COMMANDE", "CREATE");
    this.canEdit = this.authService.hasPermission("VENTES", "BONS_COMMANDE", "EDIT");
    this.loadOrders();
  }
  loadOrders() {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    this.salesService.getOrders(companyId).subscribe({
      next: (data) => {
        this.orders = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filteredOrders = this.orders.filter((o) => {
      if (this.stateFilter !== "all" && o.state !== this.stateFilter)
        return false;
      if (this.dateFrom && o.date < this.dateFrom)
        return false;
      if (this.dateTo && o.date > this.dateTo)
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
  newOrder() {
    this.router.navigate(["/sales/orders/new"]);
  }
  editOrder(order) {
    this.router.navigate(["/sales/orders", order.id]);
  }
  viewInvoice(order) {
    if (order.invoiceId) {
      this.router.navigate(["/sales/invoices", order.invoiceId]);
    }
  }
  confirmOrder(order, event) {
    event.stopPropagation();
    if (!confirm(`Confirmer le bon ${order.name} ? Une facture sera cr\xE9\xE9e automatiquement.`))
      return;
    this.confirming = order.id;
    this.errorMsg = "";
    this.salesService.confirmOrder(order.id).subscribe({
      next: (updated) => {
        this.confirming = null;
        this.showSuccess(`Bon ${order.name} confirm\xE9. Facture ${updated.invoiceName} cr\xE9\xE9e.`);
        this.loadOrders();
      },
      error: (err) => {
        this.confirming = null;
        this.errorMsg = err.error?.message || "Erreur lors de la confirmation";
      }
    });
  }
  cancelOrder(order, event) {
    event.stopPropagation();
    if (!confirm(`Annuler le bon ${order.name} ?`))
      return;
    this.cancelling = order.id;
    this.salesService.cancelOrder(order.id).subscribe({
      next: () => {
        this.cancelling = null;
        this.showSuccess(`Bon ${order.name} annul\xE9`);
        this.loadOrders();
      },
      error: (err) => {
        this.cancelling = null;
        this.errorMsg = err.error?.message || "Erreur lors de l'annulation";
      }
    });
  }
  getStateBadge(state) {
    const map = {
      draft: "badge-draft",
      confirmed: "badge-confirmed",
      invoiced: "badge-invoiced",
      cancelled: "badge-cancelled"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      invoiced: "Factur\xE9",
      cancelled: "Annul\xE9"
    };
    return map[state] || state;
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const map = /* @__PURE__ */ new Map();
    for (const item of this.filteredOrders) {
      let key, label;
      switch (this.groupBy) {
        case "mois":
          key = (item.date || "").substring(0, 7);
          label = key ? this.fmtMonth(key) : "(Sans date)";
          break;
        case "client":
          key = label = item.partnerName || "(Sans client)";
          break;
        case "statut":
          key = item.state || "?";
          label = this.getStateLabel(item.state || "");
          break;
        case "entrepot":
          key = label = item.warehouseName || "(Sans entrep\xF4t)";
          break;
        default:
          key = label = "?";
      }
      if (!map.has(key))
        map.set(key, { key, label, count: 0, totalHT: 0, totalTTC: 0, items: [] });
      const g = map.get(key);
      g.count++;
      g.totalHT += item.totalHT || 0;
      g.totalTTC += item.totalTTC || 0;
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
    return formatFCFA(v, false);
  }
  static {
    this.\u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderListComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], decls: 36, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "btn-primary"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "filter-btn", 3, "click"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "btn-primary", 3, "click"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "text-center"], [1, "group-header-row", 3, "click"], ["colspan", "4", 1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "text-right", "group-num"], [1, "detail-row", "clickable-row"], [1, "detail-row", "clickable-row", 3, "click"], [1, "font-mono", "font-bold"], [1, "text-right", "font-bold"], [1, "link-invoice"], [1, "text-muted"], [1, "text-center", "actions-cell", 3, "click"], ["title", "Voir la facture", 1, "btn-icon", "btn-view"], [1, "link-invoice", 3, "click"], ["title", "Modifier", 1, "btn-icon", "btn-edit"], ["title", "Confirmer (cr\xE9e la facture)", 1, "btn-icon", "btn-confirm", 3, "click", "disabled"], ["title", "Annuler", 1, "btn-icon", "btn-cancel", 3, "click", "disabled"], ["title", "Modifier", 1, "btn-icon", "btn-edit", 3, "click"], ["title", "Voir la facture", 1, "btn-icon", "btn-view", 3, "click"], [1, "clickable-row"], [1, "clickable-row", 3, "click"]], template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "receipt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Bons de commande ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, OrderListComponent_Conditional_9_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, OrderListComponent_Conditional_10_Template, 4, 1, "div", 7);
        \u0275\u0275conditionalCreate(11, OrderListComponent_Conditional_11_Template, 4, 1, "div", 8);
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275repeaterCreate(13, OrderListComponent_For_14_Template, 2, 3, "button", 10, _forTrack0);
        \u0275\u0275elementStart(15, "div", 11)(16, "label");
        \u0275\u0275text(17, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_18_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 11)(20, "label");
        \u0275\u0275text(21, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_22_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 13);
        \u0275\u0275listener("click", function OrderListComponent_Template_button_click_23_listener() {
          return ctx.clearDateFilter();
        });
        \u0275\u0275text(24, "Toutes dates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "span", 15);
        \u0275\u0275text(27, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16);
        \u0275\u0275repeaterCreate(29, OrderListComponent_For_30_Template, 4, 4, "button", 17, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(31, OrderListComponent_Conditional_31_Template, 4, 0, "button", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 19);
        \u0275\u0275conditionalCreate(33, OrderListComponent_Conditional_33_Template, 4, 0, "div", 20)(34, OrderListComponent_Conditional_34_Template, 6, 1, "div", 21)(35, OrderListComponent_Conditional_35_Template, 24, 1, "table", 22);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filteredOrders.length, " bon(s)");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.canCreate ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.groupByOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.groupBy ? 31 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 33 : ctx.filteredOrders.length === 0 ? 34 : 35);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 12px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-invoiced[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.link-invoice[_ngcontent-%COMP%] {\n  color: var(--accent);\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: underline;\n}\n.link-invoice[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-subtle);\n}\n.btn-icon.btn-confirm[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.btn-icon.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: var(--success-bg);\n}\n.btn-icon.btn-cancel[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.btn-icon.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-icon[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=order-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListComponent, [{
    type: Component,
    args: [{ selector: "app-order-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Header -->
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">receipt</span>
        Bons de commande
      </h1>
      <span class="record-count">{{ filteredOrders.length }} bon(s)</span>
    </div>
    @if (canCreate) {
      <button class="btn-primary" (click)="newOrder()">
        <span class="material-icons">add</span>
        Nouveau bon
      </button>
    }
  </div>

  <!-- Messages -->
  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span>
      {{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger">
      <span class="material-icons">error</span>
      {{ errorMsg }}
    </div>
  }

  <!-- Filtres -->
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

  <!-- Table -->
  <div class="card">
    @if (loading) {
      <div class="loading-state">
        <span class="material-icons spin">refresh</span>
        Chargement...
      </div>
    } @else if (filteredOrders.length === 0) {
      <div class="empty-state">
        <span class="material-icons">receipt_long</span>
        <p>Aucun bon de commande</p>
        @if (canCreate) {
          <button class="btn-primary" (click)="newOrder()">Cr\xE9er un bon</button>
        }
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>Num\xE9ro</th>
            <th>Date</th>
            <th>Client</th>
            <th>Journal</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th>Statut</th>
            <th>Facture</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @if (groupBy) {
            @for (row of groupedRows; track row.key) {
              <tr class="group-header-row" (click)="toggleGroup(row.key)">
                <td class="group-header-cell" colspan="4">
                  <span class="material-icons expand-icon">{{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}</span>
                  <span class="group-label">{{ row.label }}</span>
                  <span class="badge">{{ row.count }}</span>
                </td>
                <td class="text-right group-num">{{ fmtN(row.totalHT) }}</td>
                <td class="text-right group-num">{{ fmtN(row.totalTTC) }}</td>
                <td></td><td></td><td></td>
              </tr>
              @if (isExpanded(row.key)) {
                @for (order of getGroupItems(row.key); track order.id) {
                  <tr (click)="editOrder(order)" class="detail-row clickable-row">
                    <td class="font-mono font-bold">{{ order.name }}</td>
                    <td>{{ order.date | date:'dd/MM/yyyy' }}</td>
                    <td>{{ order.partnerName }}</td>
                    <td>{{ order.journalName }}</td>
                    <td class="text-right">{{ order.totalHT | number:'1.0-0' }}</td>
                    <td class="text-right font-bold">{{ order.totalTTC | number:'1.0-0' }}</td>
                    <td><span [class]="getStateBadge(order.state || '')">{{ getStateLabel(order.state || '') }}</span></td>
                    <td>
                      @if (order.invoiceName) {
                        <a class="link-invoice" (click)="viewInvoice(order); $event.stopPropagation()">
                          {{ order.invoiceName }}
                        </a>
                      } @else {
                        <span class="text-muted">\u2014</span>
                      }
                    </td>
                    <td class="text-center actions-cell" (click)="$event.stopPropagation()">
                      @if (order.state === 'draft') {
                        @if (canEdit) {
                          <button class="btn-icon btn-edit" title="Modifier" (click)="editOrder(order)">
                            <span class="material-icons">edit</span>
                          </button>
                        }
                        <button
                          class="btn-icon btn-confirm"
                          title="Confirmer (cr\xE9e la facture)"
                          [disabled]="confirming === order.id"
                          (click)="confirmOrder(order, $event)"
                        >
                          <span class="material-icons">{{ confirming === order.id ? 'hourglass_empty' : 'check_circle' }}</span>
                        </button>
                        <button
                          class="btn-icon btn-cancel"
                          title="Annuler"
                          [disabled]="cancelling === order.id"
                          (click)="cancelOrder(order, $event)"
                        >
                          <span class="material-icons">cancel</span>
                        </button>
                      }
                      @if (order.state === 'invoiced') {
                        <button class="btn-icon btn-view" title="Voir la facture" (click)="viewInvoice(order)">
                          <span class="material-icons">description</span>
                        </button>
                      }
                    </td>
                  </tr>
                }
              }
            }
          } @else {
            @for (order of filteredOrders; track order.id) {
              <tr (click)="editOrder(order)" class="clickable-row">
                <td class="font-mono font-bold">{{ order.name }}</td>
                <td>{{ order.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ order.partnerName }}</td>
                <td>{{ order.journalName }}</td>
                <td class="text-right">{{ order.totalHT | number:'1.0-0' }}</td>
                <td class="text-right font-bold">{{ order.totalTTC | number:'1.0-0' }}</td>
                <td><span [class]="getStateBadge(order.state || '')">{{ getStateLabel(order.state || '') }}</span></td>
                <td>
                  @if (order.invoiceName) {
                    <a class="link-invoice" (click)="viewInvoice(order); $event.stopPropagation()">
                      {{ order.invoiceName }}
                    </a>
                  } @else {
                    <span class="text-muted">\u2014</span>
                  }
                </td>
                <td class="text-center actions-cell" (click)="$event.stopPropagation()">
                  @if (order.state === 'draft') {
                    @if (canEdit) {
                      <button class="btn-icon btn-edit" title="Modifier" (click)="editOrder(order)">
                        <span class="material-icons">edit</span>
                      </button>
                    }
                    <button
                      class="btn-icon btn-confirm"
                      title="Confirmer (cr\xE9e la facture)"
                      [disabled]="confirming === order.id"
                      (click)="confirmOrder(order, $event)"
                    >
                      <span class="material-icons">{{ confirming === order.id ? 'hourglass_empty' : 'check_circle' }}</span>
                    </button>
                    <button
                      class="btn-icon btn-cancel"
                      title="Annuler"
                      [disabled]="cancelling === order.id"
                      (click)="cancelOrder(order, $event)"
                    >
                      <span class="material-icons">cancel</span>
                    </button>
                  }
                  @if (order.state === 'invoiced') {
                    <button class="btn-icon btn-view" title="Voir la facture" (click)="viewInvoice(order)">
                      <span class="material-icons">description</span>
                    </button>
                  }
                </td>
              </tr>
            }
          }
        </tbody>
      </table>
    }
  </div>
</div>
`, styles: ['/* src/app/modules/sales/components/orders/order-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: var(--accent);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 12px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-btn.active {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table .clickable-row {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.data-table .clickable-row:hover td {\n  background: var(--bg-hover);\n}\n.data-table .clickable-row:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-invoiced {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.link-invoice {\n  color: var(--accent);\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: underline;\n}\n.link-invoice:hover {\n  color: var(--accent);\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon.btn-edit {\n  color: var(--primary);\n}\n.btn-icon.btn-edit:hover {\n  background: var(--primary-subtle);\n}\n.btn-icon.btn-confirm {\n  color: var(--accent);\n}\n.btn-icon.btn-confirm:hover {\n  background: var(--success-bg);\n}\n.btn-icon.btn-cancel {\n  color: var(--danger);\n}\n.btn-icon.btn-cancel:hover {\n  background: var(--danger-bg);\n}\n.btn-icon.btn-view {\n  color: var(--text-muted);\n}\n.btn-icon.btn-view:hover {\n  background: var(--bg-hover);\n}\n.btn-icon:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=order-list.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "app/modules/sales/components/orders/order-list.component.ts", lineNumber: 16 });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=chunk-TMCZKISA.js.map
