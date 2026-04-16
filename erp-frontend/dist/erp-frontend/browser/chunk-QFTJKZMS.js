import {
  PurchaseService
} from "./chunk-J47TS3XK.js";
import {
  ActivatedRoute,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/purchases/components/invoices/invoice-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PurchaseInvoiceDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "AVOIR FOURNISSEUR");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.getStateBadge(ctx_r0.invoice.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(ctx_r0.invoice.state));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "span", 3);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.invoice.originalInvoiceName, " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "span", 3);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.invoice.accountMoveName, " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.postInvoice());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelInvoice());
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Annuler ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.posting);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.posting ? "Validation..." : ctx_r0.isAvoir ? "Valider l'avoir" : "Valider la facture", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Enregistrer un paiement ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createAvoir());
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 16);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelInvoice());
    });
    \u0275\u0275elementStart(9, "span", 3);
    \u0275\u0275text(10, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.creatingAvoir);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.creatingAvoir ? "Cr\xE9ation..." : "Cr\xE9er un avoir", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cancelling ? "Annulation..." : "Annuler la facture", " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelInvoice());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cancelling ? "Annulation..." : "Annuler la facture", " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reverseEntries());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.reversing);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.reversing ? "Inversion..." : "Inverser les \xE9critures", " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 20);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewOrder());
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275text(2, "Commande d'achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.invoice.purchaseOrderName);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2, "Facture d'origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_24_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToOriginalInvoice(ctx_r0.invoice.originalInvoiceId));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.invoice.originalInvoiceName, " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 52);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 53);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.productCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, line_r8.prixUnitaire, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", line_r8.tauxTVA || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.accountCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 12, line_r8.montantHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 15, line_r8.montantTVA, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 18, line_r8.montantTTC, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Aucun paiement enregistr\xE9");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_60_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 56);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, p_r10.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r10.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.memo || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 8, p_r10.amount, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 36)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "M\xE9mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 30);
    \u0275\u0275text(12, "Montant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_60_For_15_Template, 13, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.invoice.payments);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r12 = ctx.$implicit;
    \u0275\u0275property("value", j_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r12.code, " - ", j_r12.name);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 28);
    \u0275\u0275text(2, "Nouveau paiement fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57)(4, "div", 58)(5, "label");
    \u0275\u0275text(6, "Journal ");
    \u0275\u0275elementStart(7, "span", 59);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.journalId, $event) || (ctx_r0.payment.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(10, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_For_11_Template, 2, 3, "option", 61, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 58)(13, "label");
    \u0275\u0275text(14, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.date, $event) || (ctx_r0.payment.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 58)(17, "label");
    \u0275\u0275text(18, "Montant ");
    \u0275\u0275elementStart(19, "span", 59);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.amount, $event) || (ctx_r0.payment.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 58)(23, "label");
    \u0275\u0275text(24, "M\xE9mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.memo, $event) || (ctx_r0.payment.memo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 65)(27, "button", 66);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closePaymentForm());
    });
    \u0275\u0275text(28, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 15);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePayment());
    });
    \u0275\u0275elementStart(30, "span", 3);
    \u0275\u0275text(31, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payment.journalId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.cashBankJournals);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payment.date);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payment.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payment.memo);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.savingPayment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingPayment ? "Enregistrement..." : "Enregistrer", " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span");
    \u0275\u0275text(2, "Pr\xE9compte (retenue source)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind2(5, 1, ctx_r0.invoice.totalPrecompte, "1.0-0"), " FCFA");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span");
    \u0275\u0275text(2, "Remise fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind2(5, 1, ctx_r0.invoice.totalRemise, "1.0-0"), " FCFA");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span");
    \u0275\u0275text(2, "Net \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r0.invoice.netAPayer, "1.0-0"), " FCFA");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 67);
    \u0275\u0275element(2, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPct() + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getProgressPct(), "% pay\xE9");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23);
    \u0275\u0275text(8, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 23);
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22)(18, "div", 23);
    \u0275\u0275text(19, "\xC9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_23_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(24, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_24_Template, 5, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27)(26, "div", 28);
    \u0275\u0275text(27, "Lignes de facturation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "table", 29)(29, "thead")(30, "tr")(31, "th");
    \u0275\u0275text(32, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 30);
    \u0275\u0275text(36, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 30);
    \u0275\u0275text(38, "Prix U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 30);
    \u0275\u0275text(40, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 30);
    \u0275\u0275text(44, "HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 30);
    \u0275\u0275text(46, "TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 30);
    \u0275\u0275text(48, "TTC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275repeaterCreate(50, PurchaseInvoiceDetailComponent_Conditional_20_For_51_Template, 23, 21, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 31)(53, "div", 32)(54, "div", 33)(55, "div", 28)(56, "span");
    \u0275\u0275text(57, "Paiements fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(58, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_58_Template, 4, 0, "button", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_59_Template, 2, 0, "div", 35)(60, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_60_Template, 16, 0, "table", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(61, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_61_Template, 33, 6, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 38)(63, "div", 39)(64, "div", 40)(65, "span");
    \u0275\u0275text(66, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 40)(71, "span");
    \u0275\u0275text(72, "TVA d\xE9ductible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 41)(77, "span");
    \u0275\u0275text(78, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(82, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_82_Template, 6, 4, "div", 42);
    \u0275\u0275conditionalCreate(83, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_83_Template, 6, 4, "div", 43);
    \u0275\u0275conditionalCreate(84, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_84_Template, 6, 4, "div", 44);
    \u0275\u0275elementStart(85, "div", 45)(86, "span");
    \u0275\u0275text(87, "Montant pay\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 40)(92, "span");
    \u0275\u0275text(93, "Reste d\xFB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(97, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_97_Template, 5, 3, "div", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.invoice.partnerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.invoice.journalName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 20, ctx_r0.invoice.date, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.invoice.dateEcheance ? \u0275\u0275pipeBind2(22, 23, ctx_r0.invoice.dateEcheance, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invoice.purchaseOrderName ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.originalInvoiceName ? 24 : -1);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r0.invoice.lines);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.invoice.payments || ctx_r0.invoice.payments.length === 0 ? 59 : 60);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showPaymentForm ? 61 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(69, 26, ctx_r0.invoice.totalHT, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(75, 29, ctx_r0.invoice.totalTVA, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(81, 32, ctx_r0.invoice.totalTTC, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.invoice.totalPrecompte ?? 0) > 0 ? 82 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.invoice.totalRemise ?? 0) > 0 ? 83 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.invoice.netAPayer ?? 0) > 0 && ctx_r0.invoice.netAPayer !== ctx_r0.invoice.totalTTC ? 84 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(90, 35, ctx_r0.invoice.montantPaye, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("total-due", (ctx_r0.invoice.montantDu || 0) > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(96, 38, ctx_r0.invoice.montantDu, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" || ctx_r0.invoice.state === "paid" ? 97 : -1);
  }
}
var PurchaseInvoiceDetailComponent = class _PurchaseInvoiceDetailComponent {
  constructor(purchaseService, accountingService, authService, route, router) {
    this.purchaseService = purchaseService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.invoice = null;
    this.cashBankJournals = [];
    this.loading = false;
    this.posting = false;
    this.cancelling = false;
    this.reversing = false;
    this.creatingAvoir = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.showPaymentForm = false;
    this.payment = {
      journalId: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      amount: 0,
      memo: ""
    };
    this.savingPayment = false;
  }
  ngOnInit() {
    this.invoiceId = +this.route.snapshot.paramMap.get("id");
    this.loadInvoice();
    this.loadJournals();
  }
  loadInvoice() {
    this.loading = true;
    this.purchaseService.getInvoice(this.invoiceId).subscribe({
      next: (data) => {
        this.invoice = data;
        this.payment.amount = data.montantDu || 0;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadJournals() {
    this.accountingService.getJournals(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.cashBankJournals = data.filter((j) => j.type === "cash" || j.type === "bank");
        if (this.cashBankJournals.length > 0) {
          this.payment.journalId = this.cashBankJournals[0].id;
        }
      }
    });
  }
  postInvoice() {
    const msg = this.isAvoir ? "Valider cet avoir fournisseur ? Une \xE9criture comptable sera g\xE9n\xE9r\xE9e." : "Valider cette facture fournisseur ? Une \xE9criture comptable sera g\xE9n\xE9r\xE9e.";
    if (!confirm(msg))
      return;
    this.posting = true;
    this.errorMsg = "";
    this.purchaseService.postInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.posting = false;
        this.showSuccess(this.isAvoir ? "Avoir valid\xE9 \u2014 \xE9criture comptable cr\xE9\xE9e" : "Facture valid\xE9e \u2014 \xE9criture comptable cr\xE9\xE9e");
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || "Erreur lors de la validation";
      }
    });
  }
  cancelInvoice() {
    const hasEntries = this.invoice?.accountMoveId;
    const msg = hasEntries ? 'Annuler cette facture ? Les \xE9critures comptables NE seront PAS automatiquement invers\xE9es. Vous devrez cliquer sur "Inverser les \xE9critures" ensuite.' : "Annuler ce document ?";
    if (!confirm(msg))
      return;
    this.cancelling = true;
    this.purchaseService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess('Document annul\xE9. Cliquez sur "Inverser les \xE9critures" pour extourner les \xE9critures comptables.');
      },
      error: (err) => {
        this.cancelling = false;
        this.errorMsg = err.error?.message || "Erreur lors de l'annulation";
      }
    });
  }
  reverseEntries() {
    if (!confirm("Inverser les \xE9critures comptables de cette facture et de ses paiements ? Cette action est irr\xE9versible."))
      return;
    this.reversing = true;
    this.errorMsg = "";
    this.purchaseService.reverseInvoiceEntries(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.reversing = false;
        this.showSuccess("\xC9critures extourn\xE9es avec succ\xE8s");
      },
      error: (err) => {
        this.reversing = false;
        this.errorMsg = err.error?.message || "Erreur lors de l'inversion des \xE9critures";
      }
    });
  }
  openPaymentForm() {
    this.payment.amount = this.invoice?.montantDu || 0;
    this.payment.date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.showPaymentForm = true;
  }
  closePaymentForm() {
    this.showPaymentForm = false;
  }
  savePayment() {
    if (!this.payment.journalId || this.payment.amount <= 0) {
      this.errorMsg = "Veuillez s\xE9lectionner un journal et saisir un montant valide";
      return;
    }
    this.savingPayment = true;
    this.errorMsg = "";
    this.purchaseService.createPayment({
      invoiceId: this.invoiceId,
      journalId: this.payment.journalId,
      date: this.payment.date,
      amount: this.payment.amount,
      memo: this.payment.memo
    }).subscribe({
      next: () => {
        this.savingPayment = false;
        this.showPaymentForm = false;
        this.showSuccess("Paiement enregistr\xE9");
        this.loadInvoice();
      },
      error: (err) => {
        this.savingPayment = false;
        this.errorMsg = err.error?.message || "Erreur lors du paiement";
      }
    });
  }
  createAvoir() {
    if (!confirm("Cr\xE9er un avoir fournisseur pour cette facture ? Une nouvelle pi\xE8ce AVF-XXXX sera g\xE9n\xE9r\xE9e."))
      return;
    this.creatingAvoir = true;
    this.errorMsg = "";
    this.purchaseService.createAvoirFromInvoice(this.invoiceId).subscribe({
      next: (avoir) => {
        this.creatingAvoir = false;
        this.showSuccess(`Avoir ${avoir.name} cr\xE9\xE9`);
        setTimeout(() => this.router.navigate(["/purchases/invoices", avoir.id]), 1e3);
      },
      error: (err) => {
        this.creatingAvoir = false;
        this.errorMsg = err.error?.message || "Erreur lors de la cr\xE9ation de l'avoir";
      }
    });
  }
  get isInvoice() {
    return !this.invoice?.type || this.invoice.type === "invoice";
  }
  get isAvoir() {
    return this.invoice?.type === "credit_note";
  }
  back() {
    if (this.isAvoir) {
      this.router.navigate(["/purchases/avoirs"]);
    } else {
      this.router.navigate(["/purchases/invoices"]);
    }
  }
  viewOrder() {
    if (this.invoice?.purchaseOrderId) {
      this.router.navigate(["/purchases/orders", this.invoice.purchaseOrderId]);
    }
  }
  goToOriginalInvoice(id) {
    this.router.navigate(["/purchases/invoices", id]);
  }
  getStateBadge(state) {
    const map = {
      draft: "badge-draft",
      posted: "badge-posted",
      paid: "badge-paid",
      cancelled: "badge-cancelled"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = {
      draft: "Brouillon",
      posted: "Valid\xE9e",
      paid: "Pay\xE9e",
      cancelled: "Annul\xE9e"
    };
    return map[state] || state;
  }
  getProgressPct() {
    if (!this.invoice?.totalTTC || this.invoice.totalTTC === 0)
      return 0;
    return Math.min(100, Math.round((this.invoice.montantPaye || 0) / this.invoice.totalTTC * 100));
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
  }
  static {
    this.\u0275fac = function PurchaseInvoiceDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseInvoiceDetailComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseInvoiceDetailComponent, selectors: [["app-purchase-invoice-detail"]], decls: 21, vars: 12, consts: [[1, "page-container"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [1, "badge-type-avoir"], [3, "class"], [1, "ecriture-ref"], [1, "header-actions"], [1, "btn-danger", 3, "disabled"], [1, "btn-warning", 3, "disabled"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading-state"], [1, "btn-primary", 3, "click", "disabled"], [1, "btn-danger", 3, "click", "disabled"], [1, "btn-payment", 3, "click"], [1, "btn-avoir", 3, "click", "disabled"], [1, "btn-warning", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "info-grid", "mb-16"], [1, "info-card"], [1, "info-label"], [1, "info-value", "font-bold"], [1, "info-value"], [1, "info-card", "clickable"], [1, "card", "mb-16"], [1, "card-header"], [1, "lines-table"], [1, "text-right"], [1, "bottom-section"], [1, "payments-section"], [1, "card"], [1, "btn-add-payment"], [1, "no-payments"], [1, "payments-table"], [1, "payment-form", "card", "mt-12"], [1, "totals-section"], [1, "totals-card"], [1, "total-row"], [1, "total-row", "total-ttc"], [1, "total-row", "total-precompte"], [1, "total-row", "total-remise"], [1, "total-row", "net-a-payer"], [1, "total-row", "text-success"], [1, "progress-section"], [1, "info-card", "clickable", 3, "click"], [1, "info-value", "link"], [1, "info-value", "link", 3, "click"], [1, "text-muted"], [1, "font-mono", "text-muted"], [1, "text-right", "text-muted"], [1, "text-right", "font-bold"], [1, "btn-add-payment", 3, "click"], [1, "font-mono"], [1, "text-right", "text-success", "font-bold"], [1, "payment-form-body"], [1, "form-group"], [1, "required"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "R\xE9f\xE9rence ch\xE8que, virement...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "payment-form-actions"], [1, "btn-secondary", 3, "click"], [1, "progress-bar-lg"], [1, "progress-fill"], [1, "progress-label"]], template: function PurchaseInvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "h1", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, PurchaseInvoiceDetailComponent_Conditional_8_Template, 2, 0, "span", 6);
        \u0275\u0275conditionalCreate(9, PurchaseInvoiceDetailComponent_Conditional_9_Template, 2, 3, "span", 7);
        \u0275\u0275conditionalCreate(10, PurchaseInvoiceDetailComponent_Conditional_10_Template, 4, 1, "span", 8);
        \u0275\u0275conditionalCreate(11, PurchaseInvoiceDetailComponent_Conditional_11_Template, 4, 1, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275conditionalCreate(13, PurchaseInvoiceDetailComponent_Conditional_13_Template, 8, 3);
        \u0275\u0275conditionalCreate(14, PurchaseInvoiceDetailComponent_Conditional_14_Template, 12, 4);
        \u0275\u0275conditionalCreate(15, PurchaseInvoiceDetailComponent_Conditional_15_Template, 4, 2, "button", 10);
        \u0275\u0275conditionalCreate(16, PurchaseInvoiceDetailComponent_Conditional_16_Template, 4, 2, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, PurchaseInvoiceDetailComponent_Conditional_17_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(18, PurchaseInvoiceDetailComponent_Conditional_18_Template, 4, 1, "div", 13);
        \u0275\u0275conditionalCreate(19, PurchaseInvoiceDetailComponent_Conditional_19_Template, 4, 0, "div", 14)(20, PurchaseInvoiceDetailComponent_Conditional_20_Template, 98, 41);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((ctx.invoice == null ? null : ctx.invoice.name) || "Document");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isAvoir ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.originalInvoiceName) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.accountMoveName) ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "draft" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "posted" && ctx.isInvoice ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "paid" && ctx.isInvoice ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "cancelled" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 19 : ctx.invoice ? 20 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .ecriture-ref[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6c757d;\n  background: #f0f0f0;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.page-header[_ngcontent-%COMP%]   .ecriture-ref[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%], \n.btn-payment[_ngcontent-%COMP%], \n.btn-avoir[_ngcontent-%COMP%], \n.btn-warning[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-avoir[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-danger[_ngcontent-%COMP%]:disabled, \n.btn-payment[_ngcontent-%COMP%]:disabled, \n.btn-avoir[_ngcontent-%COMP%]:disabled, \n.btn-warning[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #007d7a;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #00A09D;\n  border: 1px solid #00A09D;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #bb2d3b;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: white;\n}\n.btn-payment[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-avoir[_ngcontent-%COMP%] {\n  background: #6f42c1;\n  color: white;\n}\n.btn-avoir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  color: white;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e06912;\n}\n.badge-type-avoir[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: #f0ebff;\n  color: #5a32a3;\n  border: 1px solid #d4c6f5;\n  letter-spacing: 0.5px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 180px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #212529;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value.link[_ngcontent-%COMP%] {\n  color: #00A09D;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card.clickable[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mt-12[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.bottom-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.no-payments[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.payments-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.btn-add-payment[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-add-payment[_ngcontent-%COMP%]:hover {\n  background: #007d7a;\n}\n.payment-form-body[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #00A09D;\n}\n.payment-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.totals-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 18px 22px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n}\n.total-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6c757d;\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  font-family: monospace;\n}\n.total-row.total-ttc[_ngcontent-%COMP%] {\n  border-top: 2px solid #00A09D;\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: #00A09D;\n}\n.total-row.text-success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #198754 !important;\n}\n.total-row.total-due[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #dc3545 !important;\n  font-weight: 600;\n}\n.total-row.total-due[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #dc3545 !important;\n  font-weight: 700;\n}\n.total-row.total-precompte[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #856404;\n}\n.total-row.total-remise[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #198754;\n}\n.total-row.net-a-payer[_ngcontent-%COMP%] {\n  border-top: 2px solid #017E84;\n  margin-top: 4px;\n  padding-top: 10px;\n}\n.total-row.net-a-payer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 14px;\n  font-weight: 700;\n  color: #017E84;\n}\n.total-row.net-a-payer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 16px;\n  font-weight: 700;\n  color: #017E84;\n}\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-bar-lg[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-bar-lg[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #00A09D;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n  display: block;\n  text-align: right;\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseInvoiceDetailComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-invoice-detail", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Header -->
  <div class="page-header">
    <button class="btn-back" (click)="back()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      <h1 class="page-title">{{ invoice?.name || 'Document' }}</h1>
      @if (isAvoir) {
        <span class="badge-type-avoir">AVOIR FOURNISSEUR</span>
      }
      @if (invoice?.state) {
        <span [class]="getStateBadge(invoice!.state!)">{{ getStateLabel(invoice!.state!) }}</span>
      }
      @if (invoice?.originalInvoiceName) {
        <span class="ecriture-ref">
          <span class="material-icons">link</span> {{ invoice!.originalInvoiceName }}
        </span>
      }
      @if (invoice?.accountMoveName) {
        <span class="ecriture-ref">
          <span class="material-icons">receipt_long</span> {{ invoice!.accountMoveName }}
        </span>
      }
    </div>
    <div class="header-actions">
      @if (invoice?.state === 'draft') {
        <button class="btn-primary" (click)="postInvoice()" [disabled]="posting">
          <span class="material-icons">check_circle</span>
          {{ posting ? 'Validation...' : (isAvoir ? 'Valider l\\'avoir' : 'Valider la facture') }}
        </button>
        <button class="btn-danger" (click)="cancelInvoice()" [disabled]="cancelling">
          <span class="material-icons">cancel</span> Annuler
        </button>
      }
      @if (invoice?.state === 'posted' && isInvoice) {
        <button class="btn-payment" (click)="openPaymentForm()">
          <span class="material-icons">payments</span>
          Enregistrer un paiement
        </button>
        <button class="btn-avoir" (click)="createAvoir()" [disabled]="creatingAvoir">
          <span class="material-icons">undo</span>
          {{ creatingAvoir ? 'Cr\xE9ation...' : 'Cr\xE9er un avoir' }}
        </button>
        <button class="btn-danger" (click)="cancelInvoice()" [disabled]="cancelling">
          <span class="material-icons">cancel</span> {{ cancelling ? 'Annulation...' : 'Annuler la facture' }}
        </button>
      }
      @if (invoice?.state === 'paid' && isInvoice) {
        <button class="btn-danger" (click)="cancelInvoice()" [disabled]="cancelling">
          <span class="material-icons">cancel</span> {{ cancelling ? 'Annulation...' : 'Annuler la facture' }}
        </button>
      }
      @if (invoice?.state === 'cancelled') {
        <button class="btn-warning" (click)="reverseEntries()" [disabled]="reversing">
          <span class="material-icons">swap_horiz</span>
          {{ reversing ? 'Inversion...' : 'Inverser les \xE9critures' }}
        </button>
      }
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
  }

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (invoice) {

    <!-- Infos facture -->
    <div class="info-grid mb-16">
      <div class="info-card">
        <div class="info-label">Fournisseur</div>
        <div class="info-value font-bold">{{ invoice.partnerName }}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Journal</div>
        <div class="info-value">{{ invoice.journalName }}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Date</div>
        <div class="info-value">{{ invoice.date | date:'dd/MM/yyyy' }}</div>
      </div>
      <div class="info-card">
        <div class="info-label">\xC9ch\xE9ance</div>
        <div class="info-value">{{ invoice.dateEcheance ? (invoice.dateEcheance | date:'dd/MM/yyyy') : '\u2014' }}</div>
      </div>
      @if (invoice.purchaseOrderName) {
        <div class="info-card clickable" (click)="viewOrder()">
          <div class="info-label">Commande d'achat</div>
          <div class="info-value link">{{ invoice.purchaseOrderName }}</div>
        </div>
      }
      @if (invoice.originalInvoiceName) {
        <div class="info-card">
          <div class="info-label">Facture d'origine</div>
          <div class="info-value link" (click)="goToOriginalInvoice(invoice.originalInvoiceId!)">
            {{ invoice.originalInvoiceName }}
          </div>
        </div>
      }
    </div>

    <!-- Lignes -->
    <div class="card mb-16">
      <div class="card-header">Lignes de facturation</div>
      <table class="lines-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th class="text-right">Qt\xE9</th>
            <th class="text-right">Prix U.</th>
            <th class="text-right">TVA %</th>
            <th>Compte</th>
            <th class="text-right">HT</th>
            <th class="text-right">TVA</th>
            <th class="text-right">TTC</th>
          </tr>
        </thead>
        <tbody>
          @for (line of invoice.lines; track line.id) {
            <tr>
              <td class="text-muted">{{ line.productCode || '\u2014' }}</td>
              <td>{{ line.description }}</td>
              <td class="text-right">{{ line.quantity }}</td>
              <td class="text-right">{{ line.prixUnitaire | number:'1.0-0' }}</td>
              <td class="text-right">{{ line.tauxTVA || 0 }}%</td>
              <td class="font-mono text-muted">{{ line.accountCode || '\u2014' }}</td>
              <td class="text-right">{{ line.montantHT | number:'1.0-0' }}</td>
              <td class="text-right text-muted">{{ line.montantTVA | number:'1.0-0' }}</td>
              <td class="text-right font-bold">{{ line.montantTTC | number:'1.0-0' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Totaux & paiements -->
    <div class="bottom-section">
      <!-- Paiements -->
      <div class="payments-section">
        <div class="card">
          <div class="card-header">
            <span>Paiements fournisseur</span>
            @if (invoice.state === 'posted') {
              <button class="btn-add-payment" (click)="openPaymentForm()">
                <span class="material-icons">add</span> Ajouter
              </button>
            }
          </div>
          @if (!invoice.payments || invoice.payments.length === 0) {
            <div class="no-payments">Aucun paiement enregistr\xE9</div>
          } @else {
            <table class="payments-table">
              <thead>
                <tr>
                  <th>R\xE9f\xE9rence</th>
                  <th>Date</th>
                  <th>Journal</th>
                  <th>M\xE9mo</th>
                  <th class="text-right">Montant</th>
                </tr>
              </thead>
              <tbody>
                @for (p of invoice.payments; track p.id) {
                  <tr>
                    <td class="font-mono">{{ p.name }}</td>
                    <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                    <td>{{ p.journalName }}</td>
                    <td class="text-muted">{{ p.memo || '\u2014' }}</td>
                    <td class="text-right text-success font-bold">{{ p.amount | number:'1.0-0' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          }
        </div>

        <!-- Formulaire de paiement inline -->
        @if (showPaymentForm) {
          <div class="payment-form card mt-12">
            <div class="card-header">Nouveau paiement fournisseur</div>
            <div class="payment-form-body">
              <div class="form-group">
                <label>Journal <span class="required">*</span></label>
                <select [(ngModel)]="payment.journalId" class="form-control">
                  @for (j of cashBankJournals; track j.id) {
                    <option [value]="j.id">{{ j.code }} - {{ j.name }}</option>
                  }
                </select>
              </div>
              <div class="form-group">
                <label>Date</label>
                <input type="date" [(ngModel)]="payment.date" class="form-control" />
              </div>
              <div class="form-group">
                <label>Montant <span class="required">*</span></label>
                <input type="number" [(ngModel)]="payment.amount" class="form-control" min="0" />
              </div>
              <div class="form-group">
                <label>M\xE9mo</label>
                <input type="text" [(ngModel)]="payment.memo" class="form-control" placeholder="R\xE9f\xE9rence ch\xE8que, virement..." />
              </div>
              <div class="payment-form-actions">
                <button class="btn-secondary" (click)="closePaymentForm()">Annuler</button>
                <button class="btn-primary" (click)="savePayment()" [disabled]="savingPayment">
                  <span class="material-icons">save</span>
                  {{ savingPayment ? 'Enregistrement...' : 'Enregistrer' }}
                </button>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Totaux -->
      <div class="totals-section">
        <div class="totals-card">
          <div class="total-row">
            <span>Total HT</span>
            <span>{{ invoice.totalHT | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="total-row">
            <span>TVA d\xE9ductible</span>
            <span>{{ invoice.totalTVA | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="total-row total-ttc">
            <span>Total TTC</span>
            <span>{{ invoice.totalTTC | number:'1.0-0' }} FCFA</span>
          </div>
          @if ((invoice.totalPrecompte ?? 0) > 0) {
            <div class="total-row total-precompte">
              <span>Pr\xE9compte (retenue source)</span>
              <span>- {{ invoice.totalPrecompte | number:'1.0-0' }} FCFA</span>
            </div>
          }
          @if ((invoice.totalRemise ?? 0) > 0) {
            <div class="total-row total-remise">
              <span>Remise fournisseur</span>
              <span>- {{ invoice.totalRemise | number:'1.0-0' }} FCFA</span>
            </div>
          }
          @if ((invoice.netAPayer ?? 0) > 0 && invoice.netAPayer !== invoice.totalTTC) {
            <div class="total-row net-a-payer">
              <span>Net \xE0 payer</span>
              <span>{{ invoice.netAPayer | number:'1.0-0' }} FCFA</span>
            </div>
          }
          <div class="total-row text-success">
            <span>Montant pay\xE9</span>
            <span>{{ invoice.montantPaye | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="total-row" [class.total-due]="(invoice.montantDu || 0) > 0">
            <span>Reste d\xFB</span>
            <span>{{ invoice.montantDu | number:'1.0-0' }} FCFA</span>
          </div>
          @if (invoice.state === 'posted' || invoice.state === 'paid') {
            <div class="progress-section">
              <div class="progress-bar-lg">
                <div class="progress-fill" [style.width]="getProgressPct() + '%'"></div>
              </div>
              <span class="progress-label">{{ getProgressPct() }}% pay\xE9</span>
            </div>
          }
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/purchases/components/invoices/invoice-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header .header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 8px;\n}\n.page-header .ecriture-ref {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6c757d;\n  background: #f0f0f0;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.page-header .ecriture-ref .material-icons {\n  font-size: 14px;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.btn-back:hover {\n  background: #f0f0f0;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-primary,\n.btn-secondary,\n.btn-danger,\n.btn-payment,\n.btn-avoir,\n.btn-warning {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-danger .material-icons,\n.btn-payment .material-icons,\n.btn-avoir .material-icons,\n.btn-warning .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-danger:disabled,\n.btn-payment:disabled,\n.btn-avoir:disabled,\n.btn-warning:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #00A09D;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #007d7a;\n}\n.btn-secondary {\n  background: white;\n  color: #00A09D;\n  border: 1px solid #00A09D;\n}\n.btn-danger {\n  background: #dc3545;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #bb2d3b;\n}\n.btn-payment {\n  background: #0d6efd;\n  color: white;\n}\n.btn-payment:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-avoir {\n  background: #6f42c1;\n  color: white;\n}\n.btn-avoir:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-warning {\n  background: #fd7e14;\n  color: white;\n}\n.btn-warning:hover:not(:disabled) {\n  background: #e06912;\n}\n.badge-type-avoir {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: #f0ebff;\n  color: #5a32a3;\n  border: 1px solid #d4c6f5;\n  letter-spacing: 0.5px;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid .info-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 180px;\n}\n.info-grid .info-card .info-label {\n  font-size: 11px;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid .info-card .info-value {\n  font-size: 14px;\n  color: #212529;\n}\n.info-grid .info-card .info-value.font-bold {\n  font-weight: 600;\n}\n.info-grid .info-card .info-value.link {\n  color: #00A09D;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-grid .info-card.clickable {\n  cursor: pointer;\n}\n.info-grid .info-card.clickable:hover {\n  background: #f8f9fa;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.mt-12 {\n  margin-top: 12px;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.lines-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-success {\n  color: #198754;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-paid {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.badge.badge-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n.bottom-section {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.no-payments {\n  padding: 32px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.payments-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.payments-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.payments-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.btn-add-payment {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-payment .material-icons {\n  font-size: 14px;\n}\n.btn-add-payment:hover {\n  background: #007d7a;\n}\n.payment-form-body {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group .required {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: #00A09D;\n}\n.payment-form-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.totals-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 18px 22px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n}\n.total-row:last-child {\n  border-bottom: none;\n}\n.total-row span:first-child {\n  color: #6c757d;\n}\n.total-row span:last-child {\n  font-weight: 500;\n  font-family: monospace;\n}\n.total-row.total-ttc {\n  border-top: 2px solid #00A09D;\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.total-row.total-ttc span:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n}\n.total-row.total-ttc span:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: #00A09D;\n}\n.total-row.text-success span {\n  color: #198754 !important;\n}\n.total-row.total-due span:first-child {\n  color: #dc3545 !important;\n  font-weight: 600;\n}\n.total-row.total-due span:last-child {\n  color: #dc3545 !important;\n  font-weight: 700;\n}\n.total-row.total-precompte span:last-child {\n  color: #856404;\n}\n.total-row.total-remise span:last-child {\n  color: #198754;\n}\n.total-row.net-a-payer {\n  border-top: 2px solid #017E84;\n  margin-top: 4px;\n  padding-top: 10px;\n}\n.total-row.net-a-payer span:first-child {\n  font-size: 14px;\n  font-weight: 700;\n  color: #017E84;\n}\n.total-row.net-a-payer span:last-child {\n  font-size: 16px;\n  font-weight: 700;\n  color: #017E84;\n}\n.progress-section {\n  margin-top: 16px;\n}\n.progress-section .progress-bar-lg {\n  height: 8px;\n  background: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-section .progress-bar-lg .progress-fill {\n  height: 100%;\n  background: #00A09D;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.progress-section .progress-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n  display: block;\n  text-align: right;\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AccountingService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseInvoiceDetailComponent, { className: "PurchaseInvoiceDetailComponent", filePath: "src/app/modules/purchases/components/invoices/invoice-detail.component.ts", lineNumber: 17 });
})();
export {
  PurchaseInvoiceDetailComponent
};
//# sourceMappingURL=chunk-QFTJKZMS.js.map
