import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
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
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  environment,
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

// src/app/modules/purchases/components/payments/payment-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function PaymentListComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function PaymentListComponent_For_51_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setStateFilter(f_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.stateFilter === f_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r2.label);
  }
}
function PaymentListComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 34);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PaymentListComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 4);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun paiement trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function PaymentListComponent_Conditional_71_For_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_71_For_19_Conditional_9_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const p_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.openInvoice(p_r5.invoiceId));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r5.invoiceName, " ");
  }
}
function PaymentListComponent_Conditional_71_For_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PaymentListComponent_Conditional_71_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_71_For_19_Template_tr_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(p_r5));
    });
    \u0275\u0275elementStart(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, PaymentListComponent_Conditional_71_For_19_Conditional_9_Template, 4, 1, "span", 43)(10, PaymentListComponent_Conditional_71_For_19_Conditional_10_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 47);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-reversed", p_r5.state === "reversed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, p_r5.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r5.invoiceId ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.journalName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.stateClass(p_r5.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.stateLabel(p_r5.state));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-muted", p_r5.state === "reversed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 16, p_r5.amount, "1.0-0"));
  }
}
function PaymentListComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 31)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Facture li\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 35);
    \u0275\u0275text(16, "Montant (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, PaymentListComponent_Conditional_71_For_19_Template, 19, 19, "tr", 36, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "tfoot")(21, "tr")(22, "td", 37);
    \u0275\u0275text(23, "TOTAL VALID\xC9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 38);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.filtered);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 1, ctx_r2.total, "1.0-0"), " FCFA");
  }
}
function PaymentListComponent_Conditional_72_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 48);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_72_Conditional_37_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.closeDetail();
      return \u0275\u0275resetView(ctx_r2.openInvoice(ctx_r2.selectedPayment.invoiceId));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPayment.invoiceName, " ");
  }
}
function PaymentListComponent_Conditional_72_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function PaymentListComponent_Conditional_72_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.reverseError);
  }
}
function PaymentListComponent_Conditional_72_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_72_Conditional_59_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reverseFromDetail());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.reversing);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r2.reversing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.reversing ? "hourglass_empty" : "undo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.reversing ? "Annulation\u2026" : "Annuler ce paiement", " ");
  }
}
function PaymentListComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_72_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_72_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 51)(3, "div", 52)(4, "span", 4);
    \u0275\u0275text(5, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " D\xE9tail du paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_72_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 54)(11, "div", 55)(12, "div", 56)(13, "span", 57);
    \u0275\u0275text(14, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 58);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 56)(18, "span", 57);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 59);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "span", 57);
    \u0275\u0275text(25, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 60);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 56)(29, "span", 57);
    \u0275\u0275text(30, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 59);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 56)(34, "span", 57);
    \u0275\u0275text(35, "Facture li\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 59);
    \u0275\u0275conditionalCreate(37, PaymentListComponent_Conditional_72_Conditional_37_Template, 4, 1, "a", 43)(38, PaymentListComponent_Conditional_72_Conditional_38_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 56)(40, "span", 57);
    \u0275\u0275text(41, "M\xE9mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 61);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 62)(45, "span", 57);
    \u0275\u0275text(46, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 63);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 56)(51, "span", 57);
    \u0275\u0275text(52, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 46);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(55, PaymentListComponent_Conditional_72_Conditional_55_Template, 4, 1, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 65)(57, "button", 66);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_72_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(58, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, PaymentListComponent_Conditional_72_Conditional_59_Template, 4, 5, "button", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r2.selectedPayment.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 12, ctx_r2.selectedPayment.date, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedPayment.partnerName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPayment.journalName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.selectedPayment.invoiceId ? 37 : 38);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedPayment.memo || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(49, 15, ctx_r2.selectedPayment.amount, "1.0-0"), " FCFA");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.stateClass(ctx_r2.selectedPayment.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.stateLabel(ctx_r2.selectedPayment.state));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.reverseError ? 55 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.selectedPayment.state !== "reversed" ? 59 : -1);
  }
}
function PaymentListComponent_Conditional_73_Conditional_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 34);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des factures\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaymentListComponent_Conditional_73_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune facture impay\xE9e.");
    \u0275\u0275elementEnd()();
  }
}
function PaymentListComponent_Conditional_73_Conditional_29_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Conditional_29_Conditional_2_For_4_Template_div_click_0_listener() {
      const s_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectSupplier(s_r12.id));
    });
    \u0275\u0275elementStart(1, "div", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "div", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 84);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r12.name[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r12.invoiceCount, " facture(s) impay\xE9e(s)");
  }
}
function PaymentListComponent_Conditional_73_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1, "S\xE9lectionnez le fournisseur \xE0 payer :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 77);
    \u0275\u0275repeaterCreate(3, PaymentListComponent_Conditional_73_Conditional_29_Conditional_2_For_4_Template, 10, 3, "div", 78, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.unpaidSuppliers);
  }
}
function PaymentListComponent_Conditional_73_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentListComponent_Conditional_73_Conditional_29_Conditional_0_Template, 4, 0, "div", 74)(1, PaymentListComponent_Conditional_73_Conditional_29_Conditional_1_Template, 5, 0, "div", 75)(2, PaymentListComponent_Conditional_73_Conditional_29_Conditional_2_Template, 5, 0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.loadingInvoices ? 0 : ctx_r2.unpaidSuppliers.length === 0 ? 1 : 2);
  }
}
function PaymentListComponent_Conditional_73_Conditional_30_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Conditional_30_For_11_Template_div_click_0_listener() {
      const inv_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectInvoice(inv_r15));
    });
    \u0275\u0275elementStart(1, "div", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 93)(7, "span", 94);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 95);
    \u0275\u0275text(11, "Reste : ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "span", 84);
    \u0275\u0275text(16, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inv_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, inv_r15.date, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("TTC : ", \u0275\u0275pipeBind2(9, 7, inv_r15.totalTTC, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 10, inv_r15.montantDu, "1.0-0"), " FCFA");
  }
}
function PaymentListComponent_Conditional_73_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "button", 86);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.backToStep(1));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 76);
    \u0275\u0275text(8, "S\xE9lectionnez la facture \xE0 r\xE9gler :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 88);
    \u0275\u0275repeaterCreate(10, PaymentListComponent_Conditional_73_Conditional_30_For_11_Template, 17, 13, "div", 89, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.supplierName(ctx_r2.selectedSupplierId));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.invoicesForSupplier);
  }
}
function PaymentListComponent_Conditional_73_Conditional_31_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r17 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r17.name);
  }
}
function PaymentListComponent_Conditional_73_Conditional_31_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.payError);
  }
}
function PaymentListComponent_Conditional_73_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "button", 86);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.backToStep(2));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Retour ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 96)(6, "div", 97)(7, "span");
    \u0275\u0275text(8, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 97)(12, "span");
    \u0275\u0275text(13, "Facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 97)(17, "span");
    \u0275\u0275text(18, "Reste \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong", 98);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 99)(23, "div", 100)(24, "label");
    \u0275\u0275text(25, "Date du paiement ");
    \u0275\u0275elementStart(26, "span", 101);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentListComponent_Conditional_73_Conditional_31_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.payForm.date, $event) || (ctx_r2.payForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 100)(30, "label");
    \u0275\u0275text(31, "Montant (FCFA) ");
    \u0275\u0275elementStart(32, "span", 101);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentListComponent_Conditional_73_Conditional_31_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.payForm.amount, $event) || (ctx_r2.payForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 100)(36, "label");
    \u0275\u0275text(37, "Journal ");
    \u0275\u0275elementStart(38, "span", 101);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "select", 104);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentListComponent_Conditional_73_Conditional_31_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.payForm.journalId, $event) || (ctx_r2.payForm.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(41, "option", 105);
    \u0275\u0275text(42, "-- Choisir --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(43, PaymentListComponent_Conditional_73_Conditional_31_For_44_Template, 2, 2, "option", 106, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 100)(46, "label");
    \u0275\u0275text(47, "M\xE9mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentListComponent_Conditional_73_Conditional_31_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.payForm.memo, $event) || (ctx_r2.payForm.memo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(49, PaymentListComponent_Conditional_73_Conditional_31_Conditional_49_Template, 4, 1, "div", 64);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.selectedInvoice.partnerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedInvoice.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 9, ctx_r2.selectedInvoice.montantDu, "1.0-0"), " FCFA");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.payForm.date);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.payForm.amount);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.payForm.journalId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.journals);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.payForm.memo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.payError ? 49 : -1);
  }
}
function PaymentListComponent_Conditional_73_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "button", 66);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Conditional_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeNewPayment());
    });
    \u0275\u0275text(2, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 108);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Conditional_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveNewPayment());
    });
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.savingPay);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r2.savingPay);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.savingPay ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.savingPay ? "Enregistrement\u2026" : "Enregistrer le paiement", " ");
  }
}
function PaymentListComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewPayment());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 51)(3, "div", 52)(4, "span", 4);
    \u0275\u0275text(5, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Nouveau paiement fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function PaymentListComponent_Conditional_73_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewPayment());
    });
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 70)(11, "div", 71)(12, "div", 72);
    \u0275\u0275text(13, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Fournisseur");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 73);
    \u0275\u0275elementStart(17, "div", 71)(18, "div", 72);
    \u0275\u0275text(19, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Facture");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 73);
    \u0275\u0275elementStart(23, "div", 71)(24, "div", 72);
    \u0275\u0275text(25, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Paiement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 54);
    \u0275\u0275conditionalCreate(29, PaymentListComponent_Conditional_73_Conditional_29_Template, 3, 1);
    \u0275\u0275conditionalCreate(30, PaymentListComponent_Conditional_73_Conditional_30_Template, 12, 1);
    \u0275\u0275conditionalCreate(31, PaymentListComponent_Conditional_73_Conditional_31_Template, 50, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, PaymentListComponent_Conditional_73_Conditional_32_Template, 7, 5, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275classProp("step-active", ctx_r2.newPayStep === 1)("step-done", ctx_r2.newPayStep > 1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("step-active", ctx_r2.newPayStep === 2)("step-done", ctx_r2.newPayStep > 2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("step-active", ctx_r2.newPayStep === 3);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.newPayStep === 1 ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newPayStep === 2 ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newPayStep === 3 && ctx_r2.selectedInvoice ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newPayStep === 3 ? 32 : -1);
  }
}
var PaymentListComponent = class _PaymentListComponent {
  constructor(purchaseService, auth, http, router) {
    this.purchaseService = purchaseService;
    this.auth = auth;
    this.http = http;
    this.router = router;
    this.payments = [];
    this.filtered = [];
    this.loading = false;
    this.dateFrom = "";
    this.dateTo = "";
    this.searchPartner = "";
    this.stateFilter = "all";
    this.stateFilters = [
      { value: "all", label: "Tous" },
      { value: "posted", label: "Valid\xE9s" },
      { value: "reversed", label: "Annul\xE9s" }
    ];
    this.showDetailModal = false;
    this.selectedPayment = null;
    this.reversing = false;
    this.reverseError = "";
    this.showNewModal = false;
    this.newPayStep = 1;
    this.loadingInvoices = false;
    this.loadingJournals = false;
    this.invoicesAll = [];
    this.journals = [];
    this.selectedSupplierId = null;
    this.selectedInvoice = null;
    this.payForm = { date: "", amount: 0, journalId: 0, memo: "" };
    this.savingPay = false;
    this.payError = "";
  }
  ngOnInit() {
    const today = /* @__PURE__ */ new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom = firstDay.toISOString().slice(0, 10);
    this.dateTo = today.toISOString().slice(0, 10);
    this.load();
  }
  load() {
    this.loading = true;
    this.purchaseService.getAllPayments(this.auth.getCompanyId()).subscribe({
      next: (data) => {
        this.payments = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  setStateFilter(v) {
    this.stateFilter = v;
    this.applyFilter();
  }
  applyFilter() {
    this.filtered = this.payments.filter((p) => {
      if (this.stateFilter !== "all" && p.state !== this.stateFilter)
        return false;
      if (this.dateFrom && (p.date ?? "") < this.dateFrom)
        return false;
      if (this.dateTo && (p.date ?? "") > this.dateTo)
        return false;
      if (this.searchPartner) {
        const q = this.searchPartner.toLowerCase();
        if (!(p.partnerName || "").toLowerCase().includes(q) && !(p.invoiceName || "").toLowerCase().includes(q) && !(p.name || "").toLowerCase().includes(q))
          return false;
      }
      return true;
    });
  }
  clearFilter() {
    this.dateFrom = "";
    this.dateTo = "";
    this.searchPartner = "";
    this.stateFilter = "all";
    this.applyFilter();
  }
  get total() {
    return this.filtered.filter((p) => p.state !== "reversed").reduce((s, p) => s + (p.amount ?? 0), 0);
  }
  get activeCount() {
    return this.filtered.filter((p) => p.state !== "reversed").length;
  }
  get reversedCount() {
    return this.filtered.filter((p) => p.state === "reversed").length;
  }
  stateLabel(s) {
    return s === "reversed" ? "Annul\xE9" : "Valid\xE9";
  }
  stateClass(s) {
    return s === "reversed" ? "badge-cancelled" : "badge-posted";
  }
  openInvoice(id) {
    if (id)
      this.router.navigate(["/purchases/invoices", id]);
  }
  // ── Détail ────────────────────────────────────────────────────────────────────
  openDetail(p) {
    this.selectedPayment = p;
    this.reverseError = "";
    this.reversing = false;
    this.showDetailModal = true;
  }
  closeDetail() {
    this.showDetailModal = false;
    this.selectedPayment = null;
  }
  reverseFromDetail() {
    if (!this.selectedPayment?.id)
      return;
    if (!confirm("Confirmer l'annulation de ce paiement ?"))
      return;
    this.reversing = true;
    this.reverseError = "";
    this.purchaseService.reversePayment(this.selectedPayment.id).subscribe({
      next: () => {
        this.reversing = false;
        this.closeDetail();
        this.load();
      },
      error: (e) => {
        this.reversing = false;
        this.reverseError = e?.error?.message || "Erreur lors de l'annulation.";
      }
    });
  }
  // ── Nouveau paiement ──────────────────────────────────────────────────────────
  openNewPayment() {
    this.newPayStep = 1;
    this.selectedSupplierId = null;
    this.selectedInvoice = null;
    this.payForm = { date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), amount: 0, journalId: 0, memo: "" };
    this.payError = "";
    this.showNewModal = true;
    this.loadInvoicesAndJournals();
  }
  loadInvoicesAndJournals() {
    this.loadingInvoices = true;
    this.purchaseService.getInvoices(this.auth.getCompanyId()).subscribe({
      next: (inv) => {
        this.invoicesAll = inv.filter((i) => i.state === "posted" && (i.montantDu ?? 0) > 0.01);
        this.loadingInvoices = false;
      },
      error: () => {
        this.loadingInvoices = false;
      }
    });
    if (this.journals.length === 0) {
      this.loadingJournals = true;
      this.http.get(`${environment.apiUrl}/api/accounting/journals`, {
        params: new HttpParams().set("companyId", this.auth.getCompanyId())
      }).subscribe({
        next: (j) => {
          this.journals = j.filter((x) => x.type === "bank" || x.type === "cash");
          this.loadingJournals = false;
        },
        error: () => {
          this.loadingJournals = false;
        }
      });
    }
  }
  get unpaidSuppliers() {
    const map = /* @__PURE__ */ new Map();
    for (const inv of this.invoicesAll) {
      if (!map.has(inv.partnerId)) {
        map.set(inv.partnerId, { id: inv.partnerId, name: inv.partnerName || "?", invoiceCount: 0 });
      }
      map.get(inv.partnerId).invoiceCount++;
    }
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }
  get invoicesForSupplier() {
    if (!this.selectedSupplierId)
      return [];
    return this.invoicesAll.filter((i) => i.partnerId === this.selectedSupplierId);
  }
  selectSupplier(id) {
    this.selectedSupplierId = id;
    this.selectedInvoice = null;
    this.newPayStep = 2;
  }
  selectInvoice(inv) {
    this.selectedInvoice = inv;
    this.payForm.amount = inv.montantDu ?? 0;
    this.newPayStep = 3;
  }
  backToStep(n) {
    this.newPayStep = n;
    if (n === 1) {
      this.selectedSupplierId = null;
      this.selectedInvoice = null;
    }
    if (n === 2) {
      this.selectedInvoice = null;
    }
  }
  saveNewPayment() {
    if (!this.selectedInvoice?.id || !this.payForm.journalId || !this.payForm.date || !this.payForm.amount) {
      this.payError = "Tous les champs sont requis.";
      return;
    }
    this.savingPay = true;
    this.payError = "";
    this.purchaseService.createPayment({
      invoiceId: this.selectedInvoice.id,
      journalId: this.payForm.journalId,
      date: this.payForm.date,
      amount: this.payForm.amount,
      memo: this.payForm.memo || void 0
    }).subscribe({
      next: () => {
        this.savingPay = false;
        this.showNewModal = false;
        this.load();
      },
      error: (e) => {
        this.savingPay = false;
        this.payError = e?.error?.message || "Erreur lors de la cr\xE9ation.";
      }
    });
  }
  supplierName(id) {
    return this.unpaidSuppliers.find((s) => s.id === id)?.name ?? "";
  }
  closeNewPayment() {
    this.showNewModal = false;
  }
  static {
    this.\u0275fac = function PaymentListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentListComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentListComponent, selectors: [["app-payment-list"]], decls: 74, vars: 16, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "header-right"], [1, "btn-new", 3, "click"], [1, "btn-refresh", 3, "click", "disabled"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "stat-blue"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "stat-green"], [1, "stat-currency"], [1, "stat-icon", "stat-red"], [1, "filter-bar"], [1, "filter-chips"], [1, "filter-chip", 3, "active"], [1, "filter-right"], [1, "date-range"], [1, "material-icons", "date-icon"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "date-sep"], [1, "search-box"], ["type", "text", "placeholder", "Fournisseur, facture\u2026", 3, "ngModelChange", "ngModel"], [1, "btn-clear", 3, "click"], [1, "card"], [1, "empty-state"], [1, "data-table"], [1, "modal-overlay"], [1, "filter-chip", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "clickable-row", 3, "row-reversed"], ["colspan", "6", 1, "foot-label"], [1, "foot-value"], [1, "clickable-row", 3, "click"], [1, "font-mono", "font-bold"], [1, "nowrap"], [1, "font-bold"], [1, "link-invoice"], [1, "text-muted"], [1, "small", "text-muted"], [1, "badge"], [1, "text-right", "font-mono"], [1, "link-invoice", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", 3, "click"], [1, "modal-hdr"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value", "font-mono", "font-bold"], [1, "detail-value"], [1, "detail-value", "font-bold"], [1, "detail-value", "text-muted"], [1, "detail-item", "detail-item-full"], [1, "detail-value", "amount-big"], [1, "alert-error"], [1, "modal-ftr"], [1, "btn-secondary-modal", 3, "click"], [1, "btn-danger-modal", 3, "disabled"], [1, "btn-danger-modal", 3, "click", "disabled"], [1, "modal-panel", "modal-panel-lg", 3, "click"], [1, "steps-bar"], [1, "step"], [1, "step-dot"], [1, "step-line"], [1, "step-loading"], [1, "step-empty"], [1, "step-hint"], [1, "supplier-grid"], [1, "supplier-card"], [1, "supplier-card", 3, "click"], [1, "supplier-avatar"], [1, "supplier-info"], [1, "supplier-name"], [1, "supplier-count"], [1, "material-icons", "supplier-arrow"], [1, "step-back"], [1, "btn-back-step", 3, "click"], [1, "step-context"], [1, "invoice-list-select"], [1, "invoice-select-card"], [1, "invoice-select-card", 3, "click"], [1, "inv-ref", "font-mono", "font-bold"], [1, "inv-date", "text-muted", "small"], [1, "inv-amounts"], [1, "inv-total"], [1, "inv-due"], [1, "inv-recap"], [1, "inv-recap-row"], [1, "text-danger"], [1, "pay-form-grid"], [1, "form-group"], [1, "req"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["type", "text", "placeholder", "Optionnel", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary-modal", 3, "click", "disabled"]], template: function PaymentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "payments");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "Paiements fournisseurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
        \u0275\u0275listener("click", function PaymentListComponent_Template_button_click_10_listener() {
          return ctx.openNewPayment();
        });
        \u0275\u0275elementStart(11, "span", 4);
        \u0275\u0275text(12, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nouveau paiement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function PaymentListComponent_Template_button_click_14_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(15, "span", 4);
        \u0275\u0275text(16, "refresh");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "span", 4);
        \u0275\u0275text(21, "check_circle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 12)(23, "div", 13);
        \u0275\u0275text(24, "Paiements valid\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 10)(28, "div", 15)(29, "span", 4);
        \u0275\u0275text(30, "account_balance_wallet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
        \u0275\u0275text(33, "Total d\xE9caiss\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 14);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "number");
        \u0275\u0275elementStart(37, "span", 16);
        \u0275\u0275text(38, "FCFA");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div", 10)(40, "div", 17)(41, "span", 4);
        \u0275\u0275text(42, "undo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 12)(44, "div", 13);
        \u0275\u0275text(45, "Paiements annul\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 14);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 18)(49, "div", 19);
        \u0275\u0275repeaterCreate(50, PaymentListComponent_For_51_Template, 2, 3, "button", 20, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 21)(53, "div", 22)(54, "span", 23);
        \u0275\u0275text(55, "date_range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function PaymentListComponent_Template_input_ngModelChange_56_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PaymentListComponent_Template_input_ngModelChange_56_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 25);
        \u0275\u0275text(58, "\u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function PaymentListComponent_Template_input_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PaymentListComponent_Template_input_ngModelChange_59_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 26)(61, "span", 4);
        \u0275\u0275text(62, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function PaymentListComponent_Template_input_ngModelChange_63_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchPartner, $event) || (ctx.searchPartner = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PaymentListComponent_Template_input_ngModelChange_63_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "button", 28);
        \u0275\u0275listener("click", function PaymentListComponent_Template_button_click_64_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementStart(65, "span", 4);
        \u0275\u0275text(66, "clear_all");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " R\xE9initialiser ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 29);
        \u0275\u0275conditionalCreate(69, PaymentListComponent_Conditional_69_Template, 5, 0, "div", 30)(70, PaymentListComponent_Conditional_70_Template, 5, 0, "div", 30)(71, PaymentListComponent_Conditional_71_Template, 27, 4, "table", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(72, PaymentListComponent_Conditional_72_Template, 60, 18, "div", 32);
        \u0275\u0275conditionalCreate(73, PaymentListComponent_Conditional_73_Template, 33, 14, "div", 32);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filtered.length, " paiement(s)");
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275classProp("spin", ctx.loading);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.activeCount);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(36, 13, ctx.total, "1.0-0"), " ");
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.reversedCount);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchPartner);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading ? 69 : ctx.filtered.length === 0 ? 70 : 71);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showDetailModal && ctx.selectedPayment ? 72 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showNewModal ? 73 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 24px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 3px 12px;\n  border-radius: 12px;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.stat-icon.stat-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #38bdf8);\n}\n.stat-icon.stat-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n}\n.stat-icon.stat-red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f87171);\n}\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.stat-currency[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  padding: 12px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  padding: 6px 18px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n  color: var(--text-secondary);\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n  font-weight: 600;\n}\n.filter-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.date-range[_ngcontent-%COMP%]   .date-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.date-range[_ngcontent-%COMP%]   .date-sep[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #bbb;\n  font-weight: 600;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n  width: 130px;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 5px 10px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  width: 190px;\n  outline: none;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #d1d5db;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--accent);\n  background: var(--bg-surface);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  border-color: var(--text-muted);\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.row-reversed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #c0c8d4;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.link-invoice[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #0284c7;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 13px;\n}\n.link-invoice[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.link-invoice[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 11px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n.badge-posted[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.foot-label[_ngcontent-%COMP%] {\n  padding: 13px 14px;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-value[_ngcontent-%COMP%] {\n  padding: 13px 14px;\n  font-weight: 700;\n  font-size: 16px;\n  color: var(--accent);\n  background: var(--bg-elevated);\n  text-align: right;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.modal-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.modal-panel.modal-panel-lg[_ngcontent-%COMP%] {\n  max-width: 580px;\n}\n.modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.modal-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-ftr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.btn-secondary-modal[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary-modal[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-primary-modal[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 7px;\n  background: var(--accent);\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary-modal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-primary-modal[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-danger-modal[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 7px;\n  background: #dc2626;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-danger-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-danger-modal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger-modal[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detail-item.detail-item-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.amount-big[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--accent);\n  font-family: "Roboto Mono", monospace;\n}\n.steps-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 14px 24px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.step[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.step.step-active[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.step.step-active[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: #e6f7f7;\n}\n.step.step-done[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.step.step-done[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #10b981;\n  color: white;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.step-loading[_ngcontent-%COMP%], \n.step-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 40px 20px;\n  color: var(--text-muted);\n}\n.step-loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.step-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--border);\n}\n.step-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n}\n.supplier-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.supplier-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.supplier-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.supplier-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--accent);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.supplier-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.supplier-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.supplier-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.supplier-arrow[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.step-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.btn-back-step[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-family: "Roboto", sans-serif;\n}\n.btn-back-step[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-back-step[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.step-context[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.invoice-list-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.invoice-select-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 14px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.invoice-select-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.inv-ref[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 90px;\n}\n.inv-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 80px;\n}\n.inv-amounts[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 12px;\n}\n.inv-total[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.inv-due[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.inv-due[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.inv-recap[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.inv-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.inv-recap-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n.pay-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.1);\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n/*# sourceMappingURL=payment-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentListComponent, [{
    type: Component,
    args: [{ selector: "app-payment-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title"><span class="material-icons">payments</span>Paiements fournisseurs</h1>
      <span class="record-count">{{ filtered.length }} paiement(s)</span>
    </div>
    <div class="header-right">
      <button class="btn-new" (click)="openNewPayment()">
        <span class="material-icons">add</span> Nouveau paiement
      </button>
      <button class="btn-refresh" (click)="load()" [disabled]="loading">
        <span class="material-icons" [class.spin]="loading">refresh</span>
      </button>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon stat-blue"><span class="material-icons">check_circle</span></div>
      <div class="stat-body">
        <div class="stat-label">Paiements valid\xE9s</div>
        <div class="stat-value">{{ activeCount }}</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon stat-green"><span class="material-icons">account_balance_wallet</span></div>
      <div class="stat-body">
        <div class="stat-label">Total d\xE9caiss\xE9</div>
        <div class="stat-value">{{ total | number:'1.0-0' }} <span class="stat-currency">FCFA</span></div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon stat-red"><span class="material-icons">undo</span></div>
      <div class="stat-body">
        <div class="stat-label">Paiements annul\xE9s</div>
        <div class="stat-value">{{ reversedCount }}</div>
      </div>
    </div>
  </div>

  <div class="filter-bar">
    <div class="filter-chips">
      @for (f of stateFilters; track f.value) {
        <button class="filter-chip" [class.active]="stateFilter === f.value" (click)="setStateFilter(f.value)">{{ f.label }}</button>
      }
    </div>
    <div class="filter-right">
      <div class="date-range">
        <span class="material-icons date-icon">date_range</span>
        <input type="date" class="form-input" [(ngModel)]="dateFrom" (ngModelChange)="applyFilter()">
        <span class="date-sep">\u2192</span>
        <input type="date" class="form-input" [(ngModel)]="dateTo" (ngModelChange)="applyFilter()">
      </div>
      <div class="search-box">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Fournisseur, facture\u2026" [(ngModel)]="searchPartner" (ngModelChange)="applyFilter()">
      </div>
      <button class="btn-clear" (click)="clearFilter()">
        <span class="material-icons">clear_all</span> R\xE9initialiser
      </button>
    </div>
  </div>

  <div class="card">
    @if (loading) {
      <div class="empty-state"><span class="material-icons spin">refresh</span><p>Chargement\u2026</p></div>
    } @else if (filtered.length === 0) {
      <div class="empty-state"><span class="material-icons">payments</span><p>Aucun paiement trouv\xE9.</p></div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th><th>Date</th><th>Fournisseur</th>
            <th>Facture li\xE9e</th><th>Journal</th><th>Statut</th>
            <th class="text-right">Montant (FCFA)</th>
          </tr>
        </thead>
        <tbody>
          @for (p of filtered; track p.id) {
            <tr class="clickable-row" [class.row-reversed]="p.state === 'reversed'" (click)="openDetail(p)">
              <td class="font-mono font-bold">{{ p.name }}</td>
              <td class="nowrap">{{ p.date | date:'dd/MM/yyyy' }}</td>
              <td class="font-bold">{{ p.partnerName || '\u2014' }}</td>
              <td>
                @if (p.invoiceId) {
                  <span class="link-invoice" (click)="$event.stopPropagation(); openInvoice(p.invoiceId)">
                    <span class="material-icons">open_in_new</span>{{ p.invoiceName }}
                  </span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td class="small text-muted">{{ p.journalName || '\u2014' }}</td>
              <td><span class="badge" [class]="stateClass(p.state)">{{ stateLabel(p.state) }}</span></td>
              <td class="text-right font-mono" [class.text-muted]="p.state === 'reversed'">{{ p.amount | number:'1.0-0' }}</td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" class="foot-label">TOTAL VALID\xC9</td>
            <td class="foot-value">{{ total | number:'1.0-0' }} FCFA</td>
          </tr>
        </tfoot>
      </table>
    }
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL D\xC9TAIL PAIEMENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showDetailModal && selectedPayment) {
  <div class="modal-overlay" (click)="closeDetail()">
    <div class="modal-panel" (click)="$event.stopPropagation()">
      <div class="modal-hdr">
        <div class="modal-title"><span class="material-icons">receipt</span> D\xE9tail du paiement</div>
        <button class="modal-close" (click)="closeDetail()"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        <div class="detail-grid">
          <div class="detail-item">
            <span class="detail-label">R\xE9f\xE9rence</span>
            <span class="detail-value font-mono font-bold">{{ selectedPayment.name }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Date</span>
            <span class="detail-value">{{ selectedPayment.date | date:'dd/MM/yyyy' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Fournisseur</span>
            <span class="detail-value font-bold">{{ selectedPayment.partnerName || '\u2014' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Journal</span>
            <span class="detail-value">{{ selectedPayment.journalName || '\u2014' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Facture li\xE9e</span>
            <span class="detail-value">
              @if (selectedPayment.invoiceId) {
                <a class="link-invoice" (click)="closeDetail(); openInvoice(selectedPayment.invoiceId)">
                  <span class="material-icons">open_in_new</span>{{ selectedPayment.invoiceName }}
                </a>
              } @else { \u2014 }
            </span>
          </div>
          <div class="detail-item">
            <span class="detail-label">M\xE9mo</span>
            <span class="detail-value text-muted">{{ selectedPayment.memo || '\u2014' }}</span>
          </div>
          <div class="detail-item detail-item-full">
            <span class="detail-label">Montant</span>
            <span class="detail-value amount-big">{{ selectedPayment.amount | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Statut</span>
            <span class="badge" [class]="stateClass(selectedPayment.state)">{{ stateLabel(selectedPayment.state) }}</span>
          </div>
        </div>

        @if (reverseError) {
          <div class="alert-error"><span class="material-icons">error_outline</span>{{ reverseError }}</div>
        }
      </div>
      <div class="modal-ftr">
        <button class="btn-secondary-modal" (click)="closeDetail()">Fermer</button>
        @if (selectedPayment.state !== 'reversed') {
          <button class="btn-danger-modal" (click)="reverseFromDetail()" [disabled]="reversing">
            <span class="material-icons" [class.spin]="reversing">{{ reversing ? 'hourglass_empty' : 'undo' }}</span>
            {{ reversing ? 'Annulation\u2026' : 'Annuler ce paiement' }}
          </button>
        }
      </div>
    </div>
  </div>
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL NOUVEAU PAIEMENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showNewModal) {
  <div class="modal-overlay" (click)="closeNewPayment()">
    <div class="modal-panel modal-panel-lg" (click)="$event.stopPropagation()">

      <div class="modal-hdr">
        <div class="modal-title"><span class="material-icons">add_circle</span> Nouveau paiement fournisseur</div>
        <button class="modal-close" (click)="closeNewPayment()"><span class="material-icons">close</span></button>
      </div>

      <!-- \xC9tapes -->
      <div class="steps-bar">
        <div class="step" [class.step-active]="newPayStep === 1" [class.step-done]="newPayStep > 1">
          <div class="step-dot">1</div><span>Fournisseur</span>
        </div>
        <div class="step-line"></div>
        <div class="step" [class.step-active]="newPayStep === 2" [class.step-done]="newPayStep > 2">
          <div class="step-dot">2</div><span>Facture</span>
        </div>
        <div class="step-line"></div>
        <div class="step" [class.step-active]="newPayStep === 3">
          <div class="step-dot">3</div><span>Paiement</span>
        </div>
      </div>

      <div class="modal-body">

        <!-- \xC9tape 1 : Choisir fournisseur -->
        @if (newPayStep === 1) {
          @if (loadingInvoices) {
            <div class="step-loading"><span class="material-icons spin">refresh</span> Chargement des factures\u2026</div>
          } @else if (unpaidSuppliers.length === 0) {
            <div class="step-empty"><span class="material-icons">check_circle</span><p>Aucune facture impay\xE9e.</p></div>
          } @else {
            <p class="step-hint">S\xE9lectionnez le fournisseur \xE0 payer :</p>
            <div class="supplier-grid">
              @for (s of unpaidSuppliers; track s.id) {
                <div class="supplier-card" (click)="selectSupplier(s.id)">
                  <div class="supplier-avatar">{{ s.name[0] }}</div>
                  <div class="supplier-info">
                    <div class="supplier-name">{{ s.name }}</div>
                    <div class="supplier-count">{{ s.invoiceCount }} facture(s) impay\xE9e(s)</div>
                  </div>
                  <span class="material-icons supplier-arrow">chevron_right</span>
                </div>
              }
            </div>
          }
        }

        <!-- \xC9tape 2 : Choisir facture -->
        @if (newPayStep === 2) {
          <div class="step-back">
            <button class="btn-back-step" (click)="backToStep(1)">
              <span class="material-icons">arrow_back</span> Retour
            </button>
            <span class="step-context">{{ supplierName(selectedSupplierId) }}</span>
          </div>
          <p class="step-hint">S\xE9lectionnez la facture \xE0 r\xE9gler :</p>
          <div class="invoice-list-select">
            @for (inv of invoicesForSupplier; track inv.id) {
              <div class="invoice-select-card" (click)="selectInvoice(inv)">
                <div class="inv-ref font-mono font-bold">{{ inv.name }}</div>
                <div class="inv-date text-muted small">{{ inv.date | date:'dd/MM/yyyy' }}</div>
                <div class="inv-amounts">
                  <span class="inv-total">TTC : {{ inv.totalTTC | number:'1.0-0' }}</span>
                  <span class="inv-due">Reste : <strong>{{ inv.montantDu | number:'1.0-0' }} FCFA</strong></span>
                </div>
                <span class="material-icons supplier-arrow">chevron_right</span>
              </div>
            }
          </div>
        }

        <!-- \xC9tape 3 : Formulaire paiement -->
        @if (newPayStep === 3 && selectedInvoice) {
          <div class="step-back">
            <button class="btn-back-step" (click)="backToStep(2)">
              <span class="material-icons">arrow_back</span> Retour
            </button>
          </div>

          <div class="inv-recap">
            <div class="inv-recap-row">
              <span>Fournisseur</span><strong>{{ selectedInvoice.partnerName }}</strong>
            </div>
            <div class="inv-recap-row">
              <span>Facture</span><strong>{{ selectedInvoice.name }}</strong>
            </div>
            <div class="inv-recap-row">
              <span>Reste \xE0 payer</span>
              <strong class="text-danger">{{ selectedInvoice.montantDu | number:'1.0-0' }} FCFA</strong>
            </div>
          </div>

          <div class="pay-form-grid">
            <div class="form-group">
              <label>Date du paiement <span class="req">*</span></label>
              <input type="date" class="form-control" [(ngModel)]="payForm.date">
            </div>
            <div class="form-group">
              <label>Montant (FCFA) <span class="req">*</span></label>
              <input type="number" class="form-control" [(ngModel)]="payForm.amount" min="0.01">
            </div>
            <div class="form-group">
              <label>Journal <span class="req">*</span></label>
              <select class="form-control" [(ngModel)]="payForm.journalId">
                <option [ngValue]="0" disabled>-- Choisir --</option>
                @for (j of journals; track j.id) {
                  <option [ngValue]="j.id">{{ j.name }}</option>
                }
              </select>
            </div>
            <div class="form-group">
              <label>M\xE9mo</label>
              <input type="text" class="form-control" [(ngModel)]="payForm.memo" placeholder="Optionnel">
            </div>
          </div>

          @if (payError) {
            <div class="alert-error"><span class="material-icons">error_outline</span>{{ payError }}</div>
          }
        }

      </div>

      @if (newPayStep === 3) {
        <div class="modal-ftr">
          <button class="btn-secondary-modal" (click)="closeNewPayment()">Annuler</button>
          <button class="btn-primary-modal" (click)="saveNewPayment()" [disabled]="savingPay">
            <span class="material-icons" [class.spin]="savingPay">{{ savingPay ? 'hourglass_empty' : 'save' }}</span>
            {{ savingPay ? 'Enregistrement\u2026' : 'Enregistrer le paiement' }}
          </button>
        </div>
      }
    </div>
  </div>
}
`, styles: ['/* src/app/modules/purchases/components/payments/payment-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n  font-size: 24px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 3px 12px;\n  border-radius: 12px;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.15s;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: var(--accent);\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-refresh {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-refresh .material-icons {\n  font-size: 20px;\n}\n.btn-refresh:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-refresh:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: box-shadow 0.2s;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);\n}\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon .material-icons {\n  font-size: 24px;\n  color: white;\n}\n.stat-icon.stat-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #38bdf8);\n}\n.stat-icon.stat-green {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n}\n.stat-icon.stat-red {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f87171);\n}\n.stat-body {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.stat-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.stat-currency {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border-radius: 10px;\n  padding: 12px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.filter-chips {\n  display: flex;\n  gap: 6px;\n}\n.filter-chip {\n  padding: 6px 18px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n  color: var(--text-secondary);\n}\n.filter-chip:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-chip.active {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n  font-weight: 600;\n}\n.filter-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.date-range {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.date-range .date-icon {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.date-range .date-sep {\n  font-size: 14px;\n  color: #bbb;\n  font-weight: 600;\n}\n.form-input {\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n  width: 130px;\n}\n.form-input:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 5px 10px;\n}\n.search-box .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.search-box input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  width: 190px;\n  outline: none;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n}\n.search-box input::placeholder {\n  color: #d1d5db;\n}\n.search-box:focus-within {\n  border-color: var(--accent);\n  background: var(--bg-surface);\n}\n.btn-clear {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-clear .material-icons {\n  font-size: 16px;\n}\n.btn-clear:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  border-color: var(--text-muted);\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.row-reversed td {\n  color: #c0c8d4;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.nowrap {\n  white-space: nowrap;\n}\n.link-invoice {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #0284c7;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 13px;\n}\n.link-invoice .material-icons {\n  font-size: 13px;\n}\n.link-invoice:hover {\n  text-decoration: underline;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 11px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n.badge-posted {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-cancelled {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.foot-label {\n  padding: 13px 14px;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-value {\n  padding: 13px 14px;\n  font-weight: 700;\n  font-size: 16px;\n  color: var(--accent);\n  background: var(--bg-elevated);\n  text-align: right;\n  white-space: nowrap;\n  font-family: "Roboto Mono", monospace;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.modal-panel {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.modal-panel.modal-panel-lg {\n  max-width: 580px;\n}\n.modal-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.modal-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-title .material-icons {\n  color: var(--accent);\n  font-size: 20px;\n}\n.modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.modal-close:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.modal-close .material-icons {\n  font-size: 20px;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-ftr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n  flex-shrink: 0;\n}\n.btn-secondary-modal {\n  padding: 8px 18px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary-modal:hover {\n  background: var(--bg-hover);\n}\n.btn-primary-modal {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 7px;\n  background: var(--accent);\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary-modal .material-icons {\n  font-size: 16px;\n}\n.btn-primary-modal:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-primary-modal:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-danger-modal {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 7px;\n  background: #dc2626;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-danger-modal .material-icons {\n  font-size: 16px;\n}\n.btn-danger-modal:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger-modal:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error .material-icons {\n  font-size: 16px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detail-item.detail-item-full {\n  grid-column: 1/-1;\n}\n.detail-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.detail-value {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.amount-big {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--accent);\n  font-family: "Roboto Mono", monospace;\n}\n.steps-bar {\n  display: flex;\n  align-items: center;\n  padding: 14px 24px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.step .step-dot {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.step.step-active {\n  color: var(--accent);\n}\n.step.step-active .step-dot {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: #e6f7f7;\n}\n.step.step-done {\n  color: #10b981;\n}\n.step.step-done .step-dot {\n  border-color: #10b981;\n  background: #10b981;\n  color: white;\n}\n.step-line {\n  flex: 1;\n  height: 1px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n.step-loading,\n.step-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 40px 20px;\n  color: var(--text-muted);\n}\n.step-loading .material-icons,\n.step-empty .material-icons {\n  font-size: 36px;\n  color: var(--border);\n}\n.step-hint {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n}\n.supplier-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.supplier-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.supplier-card:hover {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.supplier-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--accent);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.supplier-info {\n  flex: 1;\n}\n.supplier-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.supplier-count {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.supplier-arrow {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.step-back {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.btn-back-step {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-family: "Roboto", sans-serif;\n}\n.btn-back-step .material-icons {\n  font-size: 14px;\n}\n.btn-back-step:hover {\n  background: var(--bg-hover);\n}\n.step-context {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.invoice-list-select {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.invoice-select-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 14px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.invoice-select-card:hover {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.inv-ref {\n  font-size: 13px;\n  width: 90px;\n}\n.inv-date {\n  font-size: 12px;\n  width: 80px;\n}\n.inv-amounts {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 12px;\n}\n.inv-total {\n  color: var(--text-muted);\n}\n.inv-due {\n  color: var(--text-secondary);\n}\n.inv-due strong {\n  color: var(--danger);\n}\n.inv-recap {\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.inv-recap-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.inv-recap-row strong {\n  color: var(--text-primary);\n}\n.text-danger {\n  color: #dc2626 !important;\n}\n.pay-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  color: var(--text-primary);\n}\n.form-control:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.1);\n}\n.req {\n  color: var(--danger);\n}\n/*# sourceMappingURL=payment-list.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AuthService }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentListComponent, { className: "PaymentListComponent", filePath: "app/modules/purchases/components/payments/payment-list.component.ts", lineNumber: 20 });
})();
export {
  PaymentListComponent
};
//# sourceMappingURL=chunk-JCIZBVUF.js.map
