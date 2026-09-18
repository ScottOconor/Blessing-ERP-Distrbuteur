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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/invoices/invoice-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.id;
function InvoiceListComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function InvoiceListComponent_For_11_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.stateFilter === f_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function InvoiceListComponent_Conditional_22_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r5.name);
  }
}
function InvoiceListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceListComponent_Conditional_22_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.journalFilter, $event) || (ctx_r2.journalFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InvoiceListComponent_Conditional_22_Template_select_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275elementStart(4, "option", 22);
    \u0275\u0275text(5, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, InvoiceListComponent_Conditional_22_For_7_Template, 2, 2, "option", 22, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.journalFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.journals);
  }
}
function InvoiceListComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function InvoiceListComponent_For_28_Template_button_click_0_listener() {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setGroupBy(opt_r7.key));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.groupBy === opt_r7.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r7.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r7.label, " ");
  }
}
function InvoiceListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function InvoiceListComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 25);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 4);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune facture \u2014 confirmez un bon de commande pour en cr\xE9er une.");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r12.salesOrderName);
  }
}
function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.getProgressPct(inv_r12) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.getProgressPct(inv_r12), "%");
  }
}
function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 40);
    \u0275\u0275listener("click", function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Template_tr_click_0_listener() {
      const inv_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openInvoice(inv_r12));
    });
    \u0275\u0275elementStart(1, "td", 41);
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
    \u0275\u0275conditionalCreate(9, InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Conditional_9_Template, 2, 1, "span", 42)(10, InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Conditional_10_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 26);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 29);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 44);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 26);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275conditionalCreate(26, InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Conditional_26_Template, 4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td")(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inv_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 15, inv_r12.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r12.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(inv_r12.salesOrderName ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r12.sellerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, inv_r12.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 21, inv_r12.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 24, inv_r12.montantPaye, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", (inv_r12.montantDu || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 27, inv_r12.montantDu, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(inv_r12.state === "posted" || inv_r12.state === "paid" ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStateBadge(inv_r12.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStateLabel(inv_r12.state || ""));
  }
}
function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_For_1_Template, 30, 30, "tr", 39, _forTrack2);
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.getGroupItems(row_r10.key));
  }
}
function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 32);
    \u0275\u0275listener("click", function InvoiceListComponent_Conditional_33_Conditional_26_For_1_Template_tr_click_0_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleGroup(row_r10.key));
    });
    \u0275\u0275elementStart(1, "td", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "td");
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "td")(18, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, InvoiceListComponent_Conditional_33_Conditional_26_For_1_Conditional_19_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isExpanded(row_r10.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fmtN(row_r10.totalHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtN(row_r10.totalTTC));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtN(row_r10.paye));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-danger", row_r10.du > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fmtN(row_r10.du));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isExpanded(row_r10.key) ? 19 : -1);
  }
}
function InvoiceListComponent_Conditional_33_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InvoiceListComponent_Conditional_33_Conditional_26_For_1_Template, 20, 10, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.groupedRows);
  }
}
function InvoiceListComponent_Conditional_33_Conditional_27_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r14.salesOrderName);
  }
}
function InvoiceListComponent_Conditional_33_Conditional_27_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InvoiceListComponent_Conditional_33_Conditional_27_For_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.getProgressPct(inv_r14) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.getProgressPct(inv_r14), "%");
  }
}
function InvoiceListComponent_Conditional_33_Conditional_27_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 49);
    \u0275\u0275listener("click", function InvoiceListComponent_Conditional_33_Conditional_27_For_1_Template_tr_click_0_listener() {
      const inv_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openInvoice(inv_r14));
    });
    \u0275\u0275elementStart(1, "td", 41);
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
    \u0275\u0275conditionalCreate(9, InvoiceListComponent_Conditional_33_Conditional_27_For_1_Conditional_9_Template, 2, 1, "span", 42)(10, InvoiceListComponent_Conditional_33_Conditional_27_For_1_Conditional_10_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 26);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 29);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 44);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 26);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275conditionalCreate(26, InvoiceListComponent_Conditional_33_Conditional_27_For_1_Conditional_26_Template, 4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td")(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inv_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 15, inv_r14.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r14.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(inv_r14.salesOrderName ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r14.sellerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, inv_r14.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 21, inv_r14.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 24, inv_r14.montantPaye, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", (inv_r14.montantDu || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 27, inv_r14.montantDu, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(inv_r14.state === "posted" || inv_r14.state === "paid" ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStateBadge(inv_r14.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStateLabel(inv_r14.state || ""));
  }
}
function InvoiceListComponent_Conditional_33_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InvoiceListComponent_Conditional_33_Conditional_27_For_1_Template, 30, 30, "tr", 48, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filteredInvoices);
  }
}
function InvoiceListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Bon de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Vendeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 26);
    \u0275\u0275text(14, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 26);
    \u0275\u0275text(18, "Pay\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 26);
    \u0275\u0275text(20, "Reste d\xFB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275conditionalCreate(26, InvoiceListComponent_Conditional_33_Conditional_26_Template, 2, 0)(27, InvoiceListComponent_Conditional_33_Conditional_27_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "tfoot")(29, "tr", 27)(30, "td", 28);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "td");
    \u0275\u0275elementStart(33, "td", 29);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 29);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 30);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 29);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "td", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275conditional(ctx_r2.groupBy ? 26 : 27);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Totaux (", ctx_r2.filteredInvoices.length, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 8, ctx_r2.totals.ht, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 11, ctx_r2.totals.ttc, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 14, ctx_r2.totals.paye, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", ctx_r2.totals.du > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 17, ctx_r2.totals.du, "1.0-0"));
  }
}
var InvoiceListComponent = class _InvoiceListComponent {
  constructor(salesService, authService, router) {
    this.salesService = salesService;
    this.authService = authService;
    this.router = router;
    this.invoices = [];
    this.filteredInvoices = [];
    this.loading = false;
    this.stateFilter = "all";
    this.dateFrom = "";
    this.dateTo = "";
    this.journalFilter = 0;
    this.journals = [];
    this.stateFilters = [
      { value: "all", label: "Toutes" },
      { value: "draft", label: "Brouillon" },
      { value: "posted", label: "Valid\xE9e" },
      { value: "paid", label: "Pay\xE9e" },
      { value: "partiellement_extournee", label: "Part. Extourn\xE9e" },
      { value: "extournee", label: "Extourn\xE9e" },
      { value: "cancelled", label: "Annul\xE9e" }
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
    this.loadInvoices();
  }
  loadInvoices() {
    this.loading = true;
    this.salesService.getInvoices(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.invoices = data;
        const seen = /* @__PURE__ */ new Set();
        this.journals = [];
        for (const inv of data) {
          if (inv.journalId && !seen.has(inv.journalId)) {
            seen.add(inv.journalId);
            this.journals.push({ id: inv.journalId, name: inv.journalName || String(inv.journalId) });
          }
        }
        this.journals.sort((a, b) => a.name.localeCompare(b.name));
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filteredInvoices = this.invoices.filter((i) => {
      if (this.stateFilter !== "all" && i.state !== this.stateFilter)
        return false;
      if (this.dateFrom && i.date < this.dateFrom)
        return false;
      if (this.dateTo && i.date > this.dateTo)
        return false;
      if (this.journalFilter && i.journalId !== this.journalFilter)
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
  openInvoice(invoice) {
    this.router.navigate(["/sales/invoices", invoice.id]);
  }
  getStateBadge(state) {
    const map = {
      draft: "badge-draft",
      posted: "badge-posted",
      paid: "badge-paid",
      cancelled: "badge-cancelled",
      extournee: "badge-extournee",
      partiellement_extournee: "badge-partial-ext"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = {
      draft: "Brouillon",
      posted: "Valid\xE9e",
      paid: "Pay\xE9e",
      cancelled: "Annul\xE9e",
      extournee: "Extourn\xE9e",
      partiellement_extournee: "Part. Extourn\xE9e"
    };
    return map[state] || state;
  }
  getProgressPct(invoice) {
    if (!invoice.totalTTC || invoice.totalTTC === 0)
      return 0;
    return Math.min(100, Math.round((invoice.montantPaye || 0) / invoice.totalTTC * 100));
  }
  get totals() {
    return this.filteredInvoices.reduce((acc, i) => ({
      ht: acc.ht + (i.totalHT || 0),
      ttc: acc.ttc + (i.totalTTC || 0),
      paye: acc.paye + (i.montantPaye || 0),
      du: acc.du + (i.montantDu || 0)
    }), { ht: 0, ttc: 0, paye: 0, du: 0 });
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const map = /* @__PURE__ */ new Map();
    for (const item of this.filteredInvoices) {
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
    return formatFCFA(v, false);
  }
  static {
    this.\u0275fac = function InvoiceListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceListComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceListComponent, selectors: [["app-invoice-list"]], decls: 34, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["title", "Voir toutes les dates", 1, "filter-btn", 3, "click"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "filter-btn", 3, "click"], [1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "totals-row"], ["colspan", "4", 1, "font-bold"], [1, "text-right", "font-bold"], [1, "text-right", "text-success", "font-bold"], ["colspan", "2"], [1, "group-header-row", 3, "click"], ["colspan", "4", 1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "text-right", "group-num"], [1, "text-right", "group-num", "text-success"], [1, "detail-row", "clickable-row"], [1, "detail-row", "clickable-row", 3, "click"], [1, "font-mono", "font-bold"], [1, "link-ref"], [1, "text-muted"], [1, "text-right", "text-success"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-pct"], [1, "clickable-row"], [1, "clickable-row", 3, "click"]], template: function InvoiceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "description");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Factures ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275repeaterCreate(10, InvoiceListComponent_For_11_Template, 2, 3, "button", 7, _forTrack0);
        \u0275\u0275elementStart(12, "div", 8)(13, "label");
        \u0275\u0275text(14, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_15_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "label");
        \u0275\u0275text(18, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_19_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 10);
        \u0275\u0275listener("click", function InvoiceListComponent_Template_button_click_20_listener() {
          return ctx.clearDateFilter();
        });
        \u0275\u0275text(21, "Toutes dates");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(22, InvoiceListComponent_Conditional_22_Template, 8, 2, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11)(24, "span", 12);
        \u0275\u0275text(25, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13);
        \u0275\u0275repeaterCreate(27, InvoiceListComponent_For_28_Template, 4, 4, "button", 14, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(29, InvoiceListComponent_Conditional_29_Template, 4, 0, "button", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 16);
        \u0275\u0275conditionalCreate(31, InvoiceListComponent_Conditional_31_Template, 4, 0, "div", 17)(32, InvoiceListComponent_Conditional_32_Template, 5, 0, "div", 18)(33, InvoiceListComponent_Conditional_33_Template, 46, 20, "table", 19);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filteredInvoices.length, " facture(s)");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.journals.length > 1 ? 22 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.groupByOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.groupBy ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 31 : ctx.filteredInvoices.length === 0 ? 32 : 33);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 500;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: white;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-extournee[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.badge.badge-partial-ext[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.link-ref[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 13px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: var(--bg-elevated);\n  border-radius: 2px;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent);\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.progress-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=invoice-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceListComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">description</span>
        Factures
      </h1>
      <span class="record-count">{{ filteredInvoices.length }} facture(s)</span>
    </div>
  </div>

  <div class="filter-bar">
    @for (f of stateFilters; track f.value) {
      <button class="filter-btn" [class.active]="stateFilter === f.value" (click)="setFilter(f.value)">
        {{ f.label }}
      </button>
    }
    <div class="filter-date-group">
      <label>Du</label>
      <input type="date" class="form-control form-control-sm" [(ngModel)]="dateFrom" (ngModelChange)="applyFilter()">
    </div>
    <div class="filter-date-group">
      <label>Au</label>
      <input type="date" class="form-control form-control-sm" [(ngModel)]="dateTo" (ngModelChange)="applyFilter()">
    </div>
    <button class="filter-btn" (click)="clearDateFilter()" title="Voir toutes les dates">Toutes dates</button>
    @if (journals.length > 1) {
      <div class="filter-date-group">
        <label>Journal</label>
        <select class="form-control form-control-sm" [(ngModel)]="journalFilter" (ngModelChange)="applyFilter()">
          <option [ngValue]="0">Tous</option>
          @for (j of journals; track j.id) {
            <option [ngValue]="j.id">{{ j.name }}</option>
          }
        </select>
      </div>
    }
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
    } @else if (filteredInvoices.length === 0) {
      <div class="empty-state">
        <span class="material-icons">description</span>
        <p>Aucune facture \u2014 confirmez un bon de commande pour en cr\xE9er une.</p>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>Num\xE9ro</th>
            <th>Date</th>
            <th>Client</th>
            <th>Bon de commande</th>
            <th>Vendeur</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th class="text-right">Pay\xE9</th>
            <th class="text-right">Reste d\xFB</th>
            <th>Paiement</th>
            <th>Statut</th>
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
                <td></td>
                <td class="text-right group-num">{{ fmtN(row.totalHT) }}</td>
                <td class="text-right group-num">{{ fmtN(row.totalTTC) }}</td>
                <td class="text-right group-num text-success">{{ fmtN(row.paye) }}</td>
                <td class="text-right group-num" [class.text-danger]="row.du > 0">{{ fmtN(row.du) }}</td>
                <td></td><td></td>
              </tr>
              @if (isExpanded(row.key)) {
                @for (inv of getGroupItems(row.key); track inv.id) {
                  <tr class="detail-row clickable-row" (click)="openInvoice(inv)">
                    <td class="font-mono font-bold">{{ inv.name }}</td>
                    <td>{{ inv.date | date:'dd/MM/yyyy' }}</td>
                    <td>{{ inv.partnerName }}</td>
                    <td>
                      @if (inv.salesOrderName) {
                        <span class="link-ref">{{ inv.salesOrderName }}</span>
                      } @else { <span class="text-muted">\u2014</span> }
                    </td>
                    <td>{{ inv.sellerName || '\u2014' }}</td>
                    <td class="text-right">{{ inv.totalHT | number:'1.0-0' }}</td>
                    <td class="text-right font-bold">{{ inv.totalTTC | number:'1.0-0' }}</td>
                    <td class="text-right text-success">{{ inv.montantPaye | number:'1.0-0' }}</td>
                    <td class="text-right" [class.text-danger]="(inv.montantDu || 0) > 0">
                      {{ inv.montantDu | number:'1.0-0' }}
                    </td>
                    <td>
                      @if (inv.state === 'posted' || inv.state === 'paid') {
                        <div class="progress-bar">
                          <div class="progress-fill" [style.width]="getProgressPct(inv) + '%'"></div>
                        </div>
                        <span class="progress-pct">{{ getProgressPct(inv) }}%</span>
                      }
                    </td>
                    <td><span [class]="getStateBadge(inv.state || '')">{{ getStateLabel(inv.state || '') }}</span></td>
                  </tr>
                }
              }
            }
          } @else {
            @for (inv of filteredInvoices; track inv.id) {
              <tr class="clickable-row" (click)="openInvoice(inv)">
                <td class="font-mono font-bold">{{ inv.name }}</td>
                <td>{{ inv.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ inv.partnerName }}</td>
                <td>
                  @if (inv.salesOrderName) {
                    <span class="link-ref">{{ inv.salesOrderName }}</span>
                  } @else { <span class="text-muted">\u2014</span> }
                </td>
                <td>{{ inv.sellerName || '\u2014' }}</td>
                <td class="text-right">{{ inv.totalHT | number:'1.0-0' }}</td>
                <td class="text-right font-bold">{{ inv.totalTTC | number:'1.0-0' }}</td>
                <td class="text-right text-success">{{ inv.montantPaye | number:'1.0-0' }}</td>
                <td class="text-right" [class.text-danger]="(inv.montantDu || 0) > 0">
                  {{ inv.montantDu | number:'1.0-0' }}
                </td>
                <td>
                  @if (inv.state === 'posted' || inv.state === 'paid') {
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width]="getProgressPct(inv) + '%'"></div>
                    </div>
                    <span class="progress-pct">{{ getProgressPct(inv) }}%</span>
                  }
                </td>
                <td><span [class]="getStateBadge(inv.state || '')">{{ getStateLabel(inv.state || '') }}</span></td>
              </tr>
            }
          }
        </tbody>
        <tfoot>
          <tr class="totals-row">
            <td colspan="4" class="font-bold">Totaux ({{ filteredInvoices.length }})</td>
            <td></td>
            <td class="text-right font-bold">{{ totals.ht | number:'1.0-0' }}</td>
            <td class="text-right font-bold">{{ totals.ttc | number:'1.0-0' }}</td>
            <td class="text-right text-success font-bold">{{ totals.paye | number:'1.0-0' }}</td>
            <td class="text-right font-bold" [class.text-danger]="totals.du > 0">{{ totals.du | number:'1.0-0' }}</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    }
  </div>
</div>
`, styles: ['/* src/app/modules/sales/components/invoices/invoice-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-btn.active {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table .clickable-row {\n  cursor: pointer;\n}\n.data-table .clickable-row:hover td {\n  background: var(--bg-hover);\n}\n.data-table .clickable-row:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-success {\n  color: var(--success);\n  font-weight: 500;\n}\n.text-danger {\n  color: var(--danger);\n  font-weight: 600;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-paid {\n  background: var(--success);\n  color: white;\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-extournee {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.badge.badge-partial-ext {\n  background: #fef3c7;\n  color: #92400e;\n}\n.link-ref {\n  color: var(--accent);\n  font-size: 13px;\n}\n.progress-bar {\n  height: 4px;\n  background: var(--bg-elevated);\n  border-radius: 2px;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.progress-bar .progress-fill {\n  height: 100%;\n  background: var(--accent);\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.progress-pct {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=invoice-list.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceListComponent, { className: "InvoiceListComponent", filePath: "app/modules/sales/components/invoices/invoice-list.component.ts", lineNumber: 16 });
})();
export {
  InvoiceListComponent
};
//# sourceMappingURL=chunk-7HRFB6HU.js.map
