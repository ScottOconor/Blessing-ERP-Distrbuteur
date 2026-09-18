import {
  CONSIGNE_CODES,
  PrintPreviewComponent
} from "./chunk-ZYBKBHPO.js";
import {
  StockService
} from "./chunk-VJTDSZQK.js";
import {
  formatFCFA
} from "./chunk-TKYALNMA.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
import {
  AuditFooterComponent
} from "./chunk-DTINOBZJ.js";
import {
  AuditTrailComponent
} from "./chunk-Z3T7EMK6.js";
import "./chunk-G4ORCRQ7.js";
import {
  CompanyService
} from "./chunk-K42XCUBR.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
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
  ɵɵreference,
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
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/invoices/invoice-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.categoryName;
var _forTrack2 = ($index, $item) => $item.moveId;
var _forTrack3 = ($index, $item) => $item.lineId;
function InvoiceDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "AVOIR");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_9_Template(rf, ctx) {
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
function InvoiceDetailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10)(1, "span", 5);
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
function InvoiceDetailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10)(1, "span", 5);
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
function InvoiceDetailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openPrint());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Imprimer ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_14_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelInvoice());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function InvoiceDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.postInvoice());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, InvoiceDetailComponent_Conditional_14_Conditional_4_Template, 4, 1, "button", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.posting);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.posting ? "Validation..." : ctx_r0.isAvoir ? "Valider l'avoir" : "Valider la facture", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canCancelInvoice ? 4 : -1);
  }
}
function InvoiceDetailComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_15_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Enregistrer un paiement ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, InvoiceDetailComponent_Conditional_15_Conditional_0_Template, 4, 0, "button", 27);
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAvoirModal());
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Cr\xE9er un avoir ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hasSoldeDu ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.creatingAvoir);
  }
}
function InvoiceDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAvoirModal());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cr\xE9er un avoir ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.creatingAvoir);
  }
}
function InvoiceDetailComponent_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_17_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Enregistrer un paiement ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, InvoiceDetailComponent_Conditional_17_Conditional_0_Template, 4, 0, "button", 27);
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAvoirModal());
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Avoir compl\xE9mentaire ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hasSoldeDu ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.creatingAvoir);
  }
}
function InvoiceDetailComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_18_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Enregistrer un paiement ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_18_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelInvoice());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.cancelling);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cancelling ? "Annulation..." : "Annuler l'avoir", " ");
  }
}
function InvoiceDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, InvoiceDetailComponent_Conditional_18_Conditional_0_Template, 4, 0, "button", 27);
    \u0275\u0275elementStart(1, "button", 30);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateRistournes());
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, InvoiceDetailComponent_Conditional_18_Conditional_5_Template, 4, 2, "button", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hasSoldeDu ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.generatingRistournes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.generatingRistournes ? "G\xE9n\xE9ration..." : "Ristournes (annulation)", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canCancelInvoice ? 5 : -1);
  }
}
function InvoiceDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reverseEntries());
    });
    \u0275\u0275elementStart(1, "span", 5);
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
function InvoiceDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 5);
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
function InvoiceDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 5);
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
function InvoiceDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 32);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 5);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Champs obligatoires manquants avant validation :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.missingFields.join(", "), " ");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Doit");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "On lui doit");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "Sold\xE9");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Cr\xE9dit disponible : ", \u0275\u0275pipeBind2(4, 1, ctx_r0.invoice.partnerCreditDisponible, "1.0-2"), " FCFA ");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 66);
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Solde client ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275conditionalCreate(8, InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_8_Template, 2, 0, "span", 67)(9, InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_9_Template, 2, 0, "span", 68)(10, InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_10_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, InvoiceDetailComponent_Conditional_23_Conditional_7_Conditional_11_Template, 5, 4, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.partnerBalanceClass);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, ctx_r0.invoice.partnerBalance || 0, "1.0-0"), " FCFA ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.invoice.partnerBalance || 0) > 0 ? 8 : (ctx_r0.invoice.partnerBalance || 0) < 0 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.invoice.partnerCreditDisponible || 0) > 0 ? 11 : -1);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_30_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r15 = ctx.$implicit;
    \u0275\u0275property("ngValue", wh_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(wh_r15.name);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "select", 73);
    \u0275\u0275listener("ngModelChange", function InvoiceDetailComponent_Conditional_23_Conditional_30_Conditional_7_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setWarehouse($event));
    });
    \u0275\u0275elementStart(2, "option", 74);
    \u0275\u0275text(3, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, InvoiceDetailComponent_Conditional_23_Conditional_30_Conditional_7_For_5_Template, 2, 2, "option", 74, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.invoice.warehouseId)("disabled", ctx_r0.savingWarehouse);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warehouses);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.invoice.warehouseName || "\u2014");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 66);
    \u0275\u0275text(3, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Entrep\xF4t ");
    \u0275\u0275elementStart(5, "span", 72);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, InvoiceDetailComponent_Conditional_23_Conditional_30_Conditional_7_Template, 6, 3, "div", 39)(8, InvoiceDetailComponent_Conditional_23_Conditional_30_Conditional_8_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("missing-field", !ctx_r0.invoice.warehouseId && ctx_r0.invoice.state === "draft");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.invoice.state === "draft" ? 7 : 8);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_23_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewOrder());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275text(2, "Bon de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.invoice.salesOrderName);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.invoice.notes);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "Facture d'origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_23_Conditional_33_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r17);
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
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r18.rabaisUnitaire, "1.0-0"), " ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r18.rabaisUnitaireTTC, "1.0-0"), " ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 85);
    \u0275\u0275text(3, "Ristourne Guinness");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("TVA ", line_r18.tauxTVA || 0, "%");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("TVA ", line_r18.tauxTVA || 0, "%");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r18.totalRabaisLigne, "1.0-0"), " ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r18.totalRabaisLigneTTC, "1.0-0"), " ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function InvoiceDetailComponent_Conditional_23_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 45);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 45);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 45);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 80);
    \u0275\u0275conditionalCreate(15, InvoiceDetailComponent_Conditional_23_For_68_Conditional_15_Template, 2, 4)(16, InvoiceDetailComponent_Conditional_23_For_68_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 81);
    \u0275\u0275conditionalCreate(18, InvoiceDetailComponent_Conditional_23_For_68_Conditional_18_Template, 2, 4)(19, InvoiceDetailComponent_Conditional_23_For_68_Conditional_19_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 45);
    \u0275\u0275conditionalCreate(21, InvoiceDetailComponent_Conditional_23_For_68_Conditional_21_Template, 4, 1)(22, InvoiceDetailComponent_Conditional_23_For_68_Conditional_22_Template, 2, 1, "span", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 45);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 83);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 80);
    \u0275\u0275conditionalCreate(30, InvoiceDetailComponent_Conditional_23_For_68_Conditional_30_Template, 2, 4)(31, InvoiceDetailComponent_Conditional_23_For_68_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 84);
    \u0275\u0275conditionalCreate(33, InvoiceDetailComponent_Conditional_23_For_68_Conditional_33_Template, 2, 4)(34, InvoiceDetailComponent_Conditional_23_For_68_Conditional_34_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td", 48);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r18.productCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r18.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 13, line_r18.quantity, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 16, line_r18.prixUnitaire, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 19, line_r18.prixUnitaireTTC ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r18.rabaisUnitaire ?? 0) > 0 ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r18.rabaisUnitaireTTC ?? 0) > 0 ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r18.guinessTaxe ?? 0) > 0 ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 22, line_r18.montantHT, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 25, line_r18.montantTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r18.totalRabaisLigne ?? 0) > 0 ? 30 : 31);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r18.totalRabaisLigneTTC ?? 0) > 0 ? 33 : 34);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 28, (line_r18.fraisEnlevement ?? 0) + (line_r18.fraisEnlevementTVA ?? 0), "1.0-0"));
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_69_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Rabais HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 46);
    \u0275\u0275text(3, "Rabais TTC");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_69_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 93);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 84);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(2, 2, ctx_r0.invoice.totalRabais, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(5, 5, ctx_r0.invoice.totalRabaisTTC ?? ctx_r0.invoice.totalRabais, "1.0-0"));
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 86)(2, "span", 5);
    \u0275\u0275text(3, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " R\xE9capitulatif ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 87)(6, "table", 88)(7, "thead")(8, "tr")(9, "th", 45);
    \u0275\u0275text(10, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 45);
    \u0275\u0275text(12, "Total TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 89);
    \u0275\u0275text(14, "PSA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 45);
    \u0275\u0275text(16, "Total Colis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 45);
    \u0275\u0275text(18, "Total PET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 45);
    \u0275\u0275text(20, "Total Casier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 90);
    \u0275\u0275text(22, "Total Liquide Nu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 48);
    \u0275\u0275text(24, "Frais Enl\xE8v. TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 45);
    \u0275\u0275text(26, "Consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 45);
    \u0275\u0275text(28, "D\xE9consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 45);
    \u0275\u0275text(30, "Qt\xE9 Consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 45);
    \u0275\u0275text(32, "Qt\xE9 D\xE9consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 83);
    \u0275\u0275text(34, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, InvoiceDetailComponent_Conditional_23_Conditional_69_Conditional_35_Template, 4, 0);
    \u0275\u0275elementStart(36, "th", 91);
    \u0275\u0275text(37, "Net \xE0 payer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody")(39, "tr", 92)(40, "td", 45);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 45);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td", 89);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td", 45);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td", 45);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td", 45);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td", 90);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td", 48);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td", 45);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td", 45);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td", 45);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td", 45);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "td", 83);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(79, InvoiceDetailComponent_Conditional_23_Conditional_69_Conditional_79_Template, 6, 8);
    \u0275\u0275elementStart(80, "td", 91)(81, "strong");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "number");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(35);
    \u0275\u0275conditional((ctx_r0.invoice.totalRabais ?? 0) > 0 ? 35 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 16, ctx_r0.invoice.totalHT ?? 0, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 19, ctx_r0.invoice.totalTVA ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 22, ctx_r0.invoice.totalPrecompte ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 25, ctx_r0.totalColis, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 28, ctx_r0.totalPET, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 31, ctx_r0.totalCasier, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 34, ctx_r0.invoice.totalLiquideNu ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 37, ctx_r0.invoice.fraisEnlevementTTC ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 40, ctx_r0.consigneMontant, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 43, ctx_r0.deconsigneMontant, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 46, ctx_r0.qteConsigne, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 49, ctx_r0.qteDeconsigne, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 52, ctx_r0.invoice.totalTTC ?? 0, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.invoice.totalRabais ?? 0) > 0 ? 79 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 55, ctx_r0.invoice.netAPayer ?? 0, "1.0-0"));
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_70_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ristournes annul\xE9es par cet avoir ");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_70_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ristournes applicables ");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_70_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 45);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 98);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 95)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r19 = ctx.$implicit;
    \u0275\u0275classProp("ristourne-negative", r_r19.montantTotal < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r19.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-type badge-" + (r_r19.typeRistourne || "brut"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r19.typeRistourne === "brasserie" ? "Brasserie" : r_r19.typeRistourne === "guinness" ? "Guinness" : "HT brut", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, r_r19.quantite, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 12, r_r19.montantUnitaire, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 15, r_r19.montantTotal, "1.0-0"));
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 86)(2, "span", 5);
    \u0275\u0275text(3, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, InvoiceDetailComponent_Conditional_23_Conditional_70_Conditional_4_Template, 1, 0)(5, InvoiceDetailComponent_Conditional_23_Conditional_70_Conditional_5_Template, 1, 0);
    \u0275\u0275elementStart(6, "span", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "table", 44)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 45);
    \u0275\u0275text(16, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 45);
    \u0275\u0275text(18, "Montant/U. TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 95);
    \u0275\u0275text(20, "Total ristourne");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, InvoiceDetailComponent_Conditional_23_Conditional_70_For_23_Template, 16, 18, "tr", 96, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "tfoot")(25, "tr", 92)(26, "td", 97)(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 95)(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.isAvoir ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isAvoir ? "montants n\xE9gatifs \u2014 annulation des ristournes de la facture d'origine" : "calcul\xE9es & conserv\xE9es \u2014 r\xE9cup\xE9r\xE9es par trimestre", " ");
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.invoice.ristourneDetails);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ristourne-negative", (ctx_r0.invoice.totalRistourne ?? 0) < 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isAvoir ? "Total ristournes annul\xE9es" : "Total ristournes (informatif)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(32, 6, ctx_r0.invoice.totalRistourne ?? 0, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_77_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_23_Conditional_77_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openCreditForm());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Cr\xE9dit (", \u0275\u0275pipeBind2(4, 1, ctx_r0.invoice.partnerCreditDisponible, "1.0-0"), ") ");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275conditionalCreate(1, InvoiceDetailComponent_Conditional_23_Conditional_77_Conditional_1_Template, 5, 4, "button", 99);
    \u0275\u0275elementStart(2, "button", 100);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_23_Conditional_77_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Ajouter ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.invoice.partnerCreditDisponible || 0) > 0 && (ctx_r0.invoice.montantDu || 0) > 0 ? 1 : -1);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1, "Aucun paiement enregistr\xE9");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104)(1, "span", 71);
    \u0275\u0275text(2, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r22.creditNoteName || "Avoir", " ");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", p_r22.journalName || "\u2014", " ");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275text(1, "Invers\xE9");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const p_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.reversePayment(p_r22.id));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_7_Template, 4, 1, "span", 104)(8, InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 105);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 83);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275conditionalCreate(14, InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_14_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 107);
    \u0275\u0275conditionalCreate(16, InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Conditional_16_Template, 3, 0, "button", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    \u0275\u0275classProp("payment-reversed", p_r22.state === "reversed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, p_r22.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r22.creditNoteId ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r22.memo || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", p_r22.state !== "reversed")("text-muted", p_r22.state === "reversed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 16, p_r22.amount, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r22.state === "reversed" ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r22.state !== "reversed" && p_r22.id && !p_r22.creditNoteId ? 16 : -1);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 54)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "M\xE9mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 45);
    \u0275\u0275text(12, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, InvoiceDetailComponent_Conditional_23_Conditional_79_For_16_Template, 17, 19, "tr", 102, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.invoice.payments);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_80_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 105);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 111);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r24.accountMoveName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, r_r24.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r24.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r24.accountMoveRef || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 8, r_r24.amount, "1.0-0"));
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "span", 5);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Versements rattach\xE9s (lettrage) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "table", 54)(5, "tbody");
    \u0275\u0275repeaterCreate(6, InvoiceDetailComponent_Conditional_23_Conditional_80_For_7_Template, 13, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.reconciliations);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span");
    \u0275\u0275text(2, "+ PSA (Pr\xE9compte)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r0.invoice.totalPrecompte, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "span");
    \u0275\u0275text(2, "+ Frais d'enl\xE8vement HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 112)(7, "span");
    \u0275\u0275text(8, "+ TVA frais d'enl\xE8vement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 112)(13, "span");
    \u0275\u0275text(14, "= Frais d'enl\xE8vement TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 3, ctx_r0.invoice.fraisEnlevementHT ?? 0, "1.2-2"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 6, ctx_r0.invoice.fraisEnlevementTVA ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 9, ctx_r0.invoice.fraisEnlevementTTC, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span");
    \u0275\u0275text(2, "+ Consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r0.consigneMontant, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span");
    \u0275\u0275text(2, "\u2212 D\xE9consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r0.deconsigneMontant, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span");
    \u0275\u0275text(2, "\u2212 Rabais HT accord\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 114)(7, "span");
    \u0275\u0275text(8, "\u2212 Rabais TTC d\xE9duit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, ctx_r0.invoice.totalRabais, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 5, ctx_r0.invoice.totalRabaisTTC ?? ctx_r0.invoice.totalRabais, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 115);
    \u0275\u0275element(2, "div", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 117);
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
function InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openReconcileModal());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "add_link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Rattacher un versement ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275text(1, ' Aucun versement rattach\xE9 \u2014 utilisez "Rattacher un versement" pour lettrer cette facture \xE0 une \xE9criture de caisse ou banque existante. ');
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_8_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 105);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 124);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 125);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_8_For_16_Template_button_click_14_listener() {
      const r_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.unreconcile(r_r27.id));
    });
    \u0275\u0275elementStart(15, "span", 126);
    \u0275\u0275text(16, "link_off");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r27.accountMoveName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, r_r27.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r27.journalName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r27.accountMoveRef || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 8, r_r27.amount, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 54)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "R\xE9f.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 45);
    \u0275\u0275text(12, "Montant lettre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_8_For_16_Template, 17, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.reconciliations);
  }
}
function InvoiceDetailComponent_Conditional_23_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 118)(2, "span", 119)(3, "span", 120);
    \u0275\u0275text(4, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Rattachement de versements (Lettrage) ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_6_Template, 4, 0, "button", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_7_Template, 2, 0, "div", 122)(8, InvoiceDetailComponent_Conditional_23_Conditional_131_Conditional_8_Template, 17, 0, "table", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.reconciliations.length === 0 ? 7 : 8);
  }
}
function InvoiceDetailComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InvoiceDetailComponent_Conditional_23_Conditional_0_Template, 6, 1, "div", 33);
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "div", 36);
    \u0275\u0275text(4, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, InvoiceDetailComponent_Conditional_23_Conditional_7_Template, 12, 8, "div", 38);
    \u0275\u0275elementStart(8, "div", 35)(9, "div", 36);
    \u0275\u0275text(10, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 35)(14, "div", 36);
    \u0275\u0275text(15, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 39);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 35)(20, "div", 36);
    \u0275\u0275text(21, "\xC9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 39);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 35)(26, "div", 36);
    \u0275\u0275text(27, "Vendeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 39);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, InvoiceDetailComponent_Conditional_23_Conditional_30_Template, 9, 3, "div", 40);
    \u0275\u0275conditionalCreate(31, InvoiceDetailComponent_Conditional_23_Conditional_31_Template, 5, 1, "div", 41);
    \u0275\u0275conditionalCreate(32, InvoiceDetailComponent_Conditional_23_Conditional_32_Template, 5, 1, "div", 35);
    \u0275\u0275conditionalCreate(33, InvoiceDetailComponent_Conditional_23_Conditional_33_Template, 5, 1, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 42)(35, "div", 43);
    \u0275\u0275text(36, "Lignes de facturation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "table", 44)(38, "thead")(39, "tr")(40, "th");
    \u0275\u0275text(41, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "D\xE9signation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 45);
    \u0275\u0275text(45, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 45);
    \u0275\u0275text(47, "Prix U. HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 45);
    \u0275\u0275text(49, "Prix U. TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 46);
    \u0275\u0275text(51, "Rabais/u HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 47);
    \u0275\u0275text(53, "Rabais/u TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 45);
    \u0275\u0275text(55, "Taxe(s)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 45);
    \u0275\u0275text(57, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 45);
    \u0275\u0275text(59, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 46);
    \u0275\u0275text(61, "Rabais HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th", 47);
    \u0275\u0275text(63, "Rabais TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th", 48);
    \u0275\u0275text(65, "Frais Enl\xE8v.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "tbody");
    \u0275\u0275repeaterCreate(67, InvoiceDetailComponent_Conditional_23_For_68_Template, 38, 31, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(69, InvoiceDetailComponent_Conditional_23_Conditional_69_Template, 84, 58, "div", 42);
    \u0275\u0275conditionalCreate(70, InvoiceDetailComponent_Conditional_23_Conditional_70_Template, 33, 9, "div", 42);
    \u0275\u0275elementStart(71, "div", 49)(72, "div", 50)(73, "div", 51)(74, "div", 43)(75, "span");
    \u0275\u0275text(76, "Paiements");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(77, InvoiceDetailComponent_Conditional_23_Conditional_77_Template, 6, 1, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(78, InvoiceDetailComponent_Conditional_23_Conditional_78_Template, 2, 0, "div", 53)(79, InvoiceDetailComponent_Conditional_23_Conditional_79_Template, 17, 0, "table", 54);
    \u0275\u0275conditionalCreate(80, InvoiceDetailComponent_Conditional_23_Conditional_80_Template, 8, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 55)(82, "div", 56)(83, "div", 57)(84, "span");
    \u0275\u0275text(85, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 57)(90, "span");
    \u0275\u0275text(91, "+ TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span");
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(95, InvoiceDetailComponent_Conditional_23_Conditional_95_Template, 6, 4, "div", 58);
    \u0275\u0275elementStart(96, "div", 59)(97, "span");
    \u0275\u0275text(98, "= Total Liquide Nu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "span");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(102, InvoiceDetailComponent_Conditional_23_Conditional_102_Template, 18, 12);
    \u0275\u0275elementStart(103, "div", 60)(104, "span");
    \u0275\u0275text(105, "= Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span");
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(109, InvoiceDetailComponent_Conditional_23_Conditional_109_Template, 6, 4, "div", 57);
    \u0275\u0275conditionalCreate(110, InvoiceDetailComponent_Conditional_23_Conditional_110_Template, 6, 4, "div", 57);
    \u0275\u0275conditionalCreate(111, InvoiceDetailComponent_Conditional_23_Conditional_111_Template, 12, 8);
    \u0275\u0275elementStart(112, "div", 61)(113, "span");
    \u0275\u0275text(114, "= Net \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "span");
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 62)(119, "span");
    \u0275\u0275text(120, "Montant pay\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 57)(125, "span");
    \u0275\u0275text(126, "Reste d\xFB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "span");
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(130, InvoiceDetailComponent_Conditional_23_Conditional_130_Template, 5, 3, "div", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(131, InvoiceDetailComponent_Conditional_23_Conditional_131_Template, 9, 2, "div", 42);
    \u0275\u0275element(132, "app-audit-footer", 64)(133, "app-audit-trail", 65);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.missingFields.length > 0 ? 0 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.invoice.partnerName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.partnerBalance !== void 0 && ctx_r0.invoice.partnerBalance !== null ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.invoice.journalName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 37, ctx_r0.invoice.date, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.invoice.dateEcheance ? \u0275\u0275pipeBind2(24, 40, ctx_r0.invoice.dateEcheance, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.invoice.sellerName || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isInvoice ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.salesOrderName ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.notes ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.originalInvoiceName ? 33 : -1);
    \u0275\u0275advance(34);
    \u0275\u0275repeater(ctx_r0.invoice.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invoice.lines && ctx_r0.invoice.lines.length > 0 ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.ristourneDetails && ctx_r0.invoice.ristourneDetails.length > 0 ? 70 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" ? 77 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((!ctx_r0.invoice.payments || ctx_r0.invoice.payments.length === 0) && (!ctx_r0.reconciliations || ctx_r0.reconciliations.length === 0) ? 78 : 79);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.reconciliations && ctx_r0.reconciliations.length > 0 ? 80 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(88, 43, ctx_r0.invoice.totalHT ?? 0, "1.2-2"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(94, 46, ctx_r0.invoice.totalTVA ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.invoice.totalPrecompte ?? 0) > 0 ? 95 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(101, 49, ctx_r0.invoice.totalLiquideNu ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.invoice.fraisEnlevementTTC ?? 0) > 0 ? 102 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(108, 52, ctx_r0.invoice.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.consigneMontant > 0 ? 109 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.deconsigneMontant > 0 ? 110 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.invoice.totalRabais ?? 0) > 0 ? 111 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(117, 55, ctx_r0.invoice.netAPayer ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(123, 58, ctx_r0.invoice.montantPaye, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("total-due", (ctx_r0.invoice.montantDu || 0) > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(129, 61, ctx_r0.invoice.montantDu, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" || ctx_r0.invoice.state === "paid" ? 130 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isInvoice && ctx_r0.invoice.state !== "draft" && ctx_r0.invoice.state !== "cancelled" ? 131 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("createdBy", ctx_r0.invoice.createdBy)("createdAt", ctx_r0.invoice.createdAt)("updatedBy", ctx_r0.invoice.updatedBy)("updatedAt", ctx_r0.invoice.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275property("entityId", ctx_r0.invoice.id ?? null);
  }
}
function InvoiceDetailComponent_Conditional_24_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "span", 32);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_24_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275text(1, " Aucun versement disponible pour ce client.");
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3, ` V\xE9rifiez qu'une \xE9criture de type "D\xE9bit Banque/Caisse \u2013 Cr\xE9dit Client" a bien \xE9t\xE9 valid\xE9e en comptabilit\xE9. `);
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_24_Conditional_27_For_19_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 148);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_24_Conditional_27_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 145);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_24_Conditional_27_For_19_Template_tr_click_0_listener() {
      const m_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectMove(m_r30));
    });
    \u0275\u0275elementStart(1, "td", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 45);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 146);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 147);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275conditionalCreate(18, InvoiceDetailComponent_Conditional_24_Conditional_27_For_19_Conditional_18_Template, 2, 0, "span", 148);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r30 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected-row", (ctx_r0.selectedMove == null ? null : ctx_r0.selectedMove.moveId) === m_r30.moveId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r30.moveName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 9, m_r30.moveDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r30.journalName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, m_r30.montantTotal, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, m_r30.montantLettre, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 18, m_r30.montantDisponible, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.selectedMove == null ? null : ctx_r0.selectedMove.moveId) === m_r30.moveId ? 18 : -1);
  }
}
function InvoiceDetailComponent_Conditional_24_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "table", 143)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 45);
    \u0275\u0275text(11, "Total vers\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 45);
    \u0275\u0275text(13, "D\xE9j\xE0 lettre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 45);
    \u0275\u0275text(15, "Disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, InvoiceDetailComponent_Conditional_24_Conditional_27_For_19_Template, 19, 21, "tr", 144, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.availableMoves);
  }
}
function InvoiceDetailComponent_Conditional_24_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 149);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 150)(5, "div", 151)(6, "label");
    \u0275\u0275text(7, "Montant \xE0 lettrer ");
    \u0275\u0275elementStart(8, "span", 152);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 153, 0);
    \u0275\u0275listener("focus", function InvoiceDetailComponent_Conditional_24_Conditional_28_Template_input_focus_10_listener() {
      \u0275\u0275restoreView(_r31);
      const recAmtInput_r32 = \u0275\u0275reference(11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(recAmtInput_r32.value = ctx_r0.reconcileForm.amount > 0 ? ctx_r0.reconcileForm.amount.toString() : "");
    })("input", function InvoiceDetailComponent_Conditional_24_Conditional_28_Template_input_input_10_listener() {
      \u0275\u0275restoreView(_r31);
      const recAmtInput_r32 = \u0275\u0275reference(11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reconcileForm.amount = ctx_r0.parseM(recAmtInput_r32.value));
    })("blur", function InvoiceDetailComponent_Conditional_24_Conditional_28_Template_input_blur_10_listener() {
      \u0275\u0275restoreView(_r31);
      const recAmtInput_r32 = \u0275\u0275reference(11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(recAmtInput_r32.value = ctx_r0.fmtM(ctx_r0.reconcileForm.amount));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 151)(13, "label");
    \u0275\u0275text(14, "Date de lettrage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_24_Conditional_28_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.reconcileForm.date, $event) || (ctx_r0.reconcileForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Versement s\xE9lectionn\xE9 : ", ctx_r0.selectedMove.moveName, " \u2014 disponible : ", \u0275\u0275pipeBind2(3, 4, ctx_r0.selectedMove.montantDisponible, "1.0-0"), " FCFA ");
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.fmtM(ctx_r0.reconcileForm.amount));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reconcileForm.date);
  }
}
function InvoiceDetailComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 127)(2, "div", 128)(3, "div", 129)(4, "span", 5);
    \u0275\u0275text(5, "add_link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 130);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showReconcileModal = false);
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 131)(11, "div", 132)(12, "div", 133)(13, "span");
    \u0275\u0275text(14, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 133)(18, "span");
    \u0275\u0275text(19, "Reste d\xFB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong", 134);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 135);
    \u0275\u0275text(24, " Versements disponibles pour ce client ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, InvoiceDetailComponent_Conditional_24_Conditional_25_Template, 4, 0, "div", 136)(26, InvoiceDetailComponent_Conditional_24_Conditional_26_Template, 4, 0, "div", 137)(27, InvoiceDetailComponent_Conditional_24_Conditional_27_Template, 20, 0, "div", 138);
    \u0275\u0275conditionalCreate(28, InvoiceDetailComponent_Conditional_24_Conditional_28_Template, 16, 7, "div", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 140)(30, "button", 141);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_24_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showReconcileModal = false);
    });
    \u0275\u0275elementStart(31, "span", 5);
    \u0275\u0275text(32, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 142);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_24_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveReconcile());
    });
    \u0275\u0275elementStart(35, "span", 5);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Rattacher un versement \xE0 ", ctx_r0.invoice.name, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.invoice.partnerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 8, ctx_r0.invoice.montantDu || 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.loadingMoves ? 25 : ctx_r0.availableMoves.length === 0 ? 26 : 27);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.selectedMove ? 28 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.savingReconcile || !ctx_r0.selectedMove || ctx_r0.reconcileForm.amount <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.savingReconcile ? "hourglass_empty" : "add_link");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingReconcile ? "Rattachement..." : "Confirmer le rattachement", " ");
  }
}
function InvoiceDetailComponent_Conditional_25_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 160);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r34 = ctx.$implicit;
    \u0275\u0275property("value", j_r34.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r34.code, " \u2013 ", j_r34.name);
  }
}
function InvoiceDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 155)(2, "div", 156)(3, "div", 129)(4, "span", 5);
    \u0275\u0275text(5, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 130);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentForm());
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 131)(11, "div", 157)(12, "div", 133)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 133)(18, "span");
    \u0275\u0275text(19, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 133)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong", 134);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 158)(29, "div", 151)(30, "label");
    \u0275\u0275text(31, "Journal ");
    \u0275\u0275elementStart(32, "span", 152);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "select", 159);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_25_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.journalId, $event) || (ctx_r0.payment.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(35, InvoiceDetailComponent_Conditional_25_For_36_Template, 2, 3, "option", 160, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 151)(38, "label");
    \u0275\u0275text(39, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_25_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.date, $event) || (ctx_r0.payment.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 151)(42, "label");
    \u0275\u0275text(43, "Montant ");
    \u0275\u0275elementStart(44, "span", 152);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "input", 153, 1);
    \u0275\u0275listener("focus", function InvoiceDetailComponent_Conditional_25_Template_input_focus_46_listener() {
      \u0275\u0275restoreView(_r33);
      const payAmtInput_r35 = \u0275\u0275reference(47);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(payAmtInput_r35.value = ctx_r0.payment.amount > 0 ? ctx_r0.payment.amount.toString() : "");
    })("input", function InvoiceDetailComponent_Conditional_25_Template_input_input_46_listener() {
      \u0275\u0275restoreView(_r33);
      const payAmtInput_r35 = \u0275\u0275reference(47);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.payment.amount = ctx_r0.parseM(payAmtInput_r35.value));
    })("blur", function InvoiceDetailComponent_Conditional_25_Template_input_blur_46_listener() {
      \u0275\u0275restoreView(_r33);
      const payAmtInput_r35 = \u0275\u0275reference(47);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(payAmtInput_r35.value = ctx_r0.fmtM(ctx_r0.payment.amount));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 151)(49, "label");
    \u0275\u0275text(50, "M\xE9mo / R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_25_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.memo, $event) || (ctx_r0.payment.memo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 140)(53, "button", 141);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_25_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentForm());
    });
    \u0275\u0275elementStart(54, "span", 5);
    \u0275\u0275text(55, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 162);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_25_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePayment());
    });
    \u0275\u0275elementStart(58, "span", 5);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isAvoir ? "Enregistrer un remboursement" : "Enregistrer un paiement", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.isAvoir ? "Avoir" : "Facture");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.invoice.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.invoice.partnerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isAvoir ? "Cr\xE9dit disponible" : "Reste d\xFB");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 13, ctx_r0.invoice.montantDu ?? ctx_r0.invoice.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payment.journalId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.cashBankJournals);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payment.date);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.fmtM(ctx_r0.payment.amount));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payment.memo);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.savingPayment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.savingPayment ? "hourglass_empty" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingPayment ? "Enregistrement..." : "Enregistrer", " ");
  }
}
function InvoiceDetailComponent_Conditional_26_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 168);
    \u0275\u0275text(1, "Chargement des avoirs disponibles\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_26_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 168);
    \u0275\u0275text(1, "Aucun avoir disponible pour ce client.");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_26_Conditional_31_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 extourne de ", c_r38.originalInvoiceName);
  }
}
function InvoiceDetailComponent_Conditional_26_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_26_Conditional_31_For_2_Template_div_click_0_listener() {
      const c_r38 = \u0275\u0275restoreView(_r37).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCredit(c_r38));
    });
    \u0275\u0275element(1, "input", 174);
    \u0275\u0275elementStart(2, "div", 175)(3, "span", 176);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 177);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, InvoiceDetailComponent_Conditional_26_Conditional_31_For_2_Conditional_7_Template, 2, 1, "span", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong", 179);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r38 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.selectedCreditId === c_r38.id);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedCreditId === c_r38.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r38.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r38.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r38.originalInvoiceName ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 7, c_r38.montantDu, "1.0-0"), " FCFA");
  }
}
function InvoiceDetailComponent_Conditional_26_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275repeaterCreate(1, InvoiceDetailComponent_Conditional_26_Conditional_31_For_2_Template, 11, 10, "div", 172, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.availableCredits);
  }
}
function InvoiceDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 155)(2, "div", 163)(3, "div", 129)(4, "span", 5);
    \u0275\u0275text(5, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Appliquer un cr\xE9dit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 130);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCreditForm = false);
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 131)(11, "div", 164)(12, "div", 165)(13, "span");
    \u0275\u0275text(14, "Cr\xE9dit disponible (total)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 166);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 165)(19, "span");
    \u0275\u0275text(20, "Reste d\xFB sur cette facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong", 134);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 167)(25, "label");
    \u0275\u0275text(26, "Avoir \xE0 imputer ");
    \u0275\u0275elementStart(27, "span", 152);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, InvoiceDetailComponent_Conditional_26_Conditional_29_Template, 2, 0, "p", 168)(30, InvoiceDetailComponent_Conditional_26_Conditional_30_Template, 2, 0, "p", 168)(31, InvoiceDetailComponent_Conditional_26_Conditional_31_Template, 3, 0, "div", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 167)(33, "label");
    \u0275\u0275text(34, "Montant \xE0 compenser ");
    \u0275\u0275elementStart(35, "span", 152);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 170);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_26_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.creditAmount, $event) || (ctx_r0.creditAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 140)(39, "button", 141);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_26_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCreditForm = false);
    });
    \u0275\u0275elementStart(40, "span", 5);
    \u0275\u0275text(41, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 171);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_26_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyCredit());
    });
    \u0275\u0275elementStart(44, "span", 5);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 9, ctx_r0.invoice.partnerCreditDisponible || 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 12, ctx_r0.invoice.montantDu || 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.loadingCredits ? 29 : ctx_r0.availableCredits.length === 0 ? 30 : 31);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.creditAmount);
    \u0275\u0275property("disabled", !ctx_r0.selectedCreditId)("max", ctx_r0.selectedCreditMax);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.applyingCredit || ctx_r0.creditAmount <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.applyingCredit ? "hourglass_empty" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.applyingCredit ? "Application..." : "Appliquer le cr\xE9dit", " ");
  }
}
function InvoiceDetailComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-print-preview", 180);
    \u0275\u0275listener("closed", function InvoiceDetailComponent_Conditional_27_Template_app_print_preview_closed_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePrint());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("invoice", ctx_r0.invoice)("docType", ctx_r0.printDocType)("companyName", ctx_r0.printCompanyName)("companyPhone", ctx_r0.printCompanyPhone)("companyLogoUrl", ctx_r0.printCompanyLogoUrl)("companyLogoDataUrl", ctx_r0.printCompanyLogoDataUrl)("companyInfo", ctx_r0.printCompany);
  }
}
function InvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 199);
    \u0275\u0275text(1, "Emballage");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, InvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Conditional_3_Template, 2, 0, "span", 199);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 200);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 197)(7, "input", 201);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Template_input_ngModelChange_7_listener($event) {
      const line_r42 = \u0275\u0275restoreView(_r41).$implicit;
      \u0275\u0275twoWayBindingSet(line_r42.quantite, $event) || (line_r42.quantite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const line_r42 = ctx.$implicit;
    \u0275\u0275classProp("avoir-line-consigne", line_r42.isConsigne);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", line_r42.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r42.isConsigne ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r42.originalQty);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r42.quantite);
    \u0275\u0275property("min", 0)("max", line_r42.originalQty);
  }
}
function InvoiceDetailComponent_Conditional_28_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "D\xE9signation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 197);
    \u0275\u0275text(7, "Qt\xE9 factur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 197);
    \u0275\u0275text(9, "Qt\xE9 avoir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, InvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Template, 8, 8, "tr", 198, _forTrack3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.avoirLines);
  }
}
function InvoiceDetailComponent_Conditional_28_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function InvoiceDetailComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAvoirModal());
    });
    \u0275\u0275elementStart(1, "div", 182);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 183)(3, "div", 184)(4, "span", 5);
    \u0275\u0275text(5, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Cr\xE9er un avoir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 185);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_28_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAvoirModal());
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 186)(11, "div", 187)(12, "label");
    \u0275\u0275text(13, "Date de l'avoir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_28_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirDate, $event) || (ctx_r0.avoirDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 188)(16, "label", 189)(17, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_28_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirType, $event) || (ctx_r0.avoirType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 5);
    \u0275\u0275text(19, "article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "strong");
    \u0275\u0275text(22, "Avoir int\xE9gral");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Annulation totale de la facture \u2014 toutes les lignes sont reprises int\xE9gralement.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "label", 189)(26, "input", 191);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceDetailComponent_Conditional_28_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirType, $event) || (ctx_r0.avoirType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 5);
    \u0275\u0275text(28, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "strong");
    \u0275\u0275text(31, "Avoir partiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Remboursement partiel \u2014 choisissez les quantit\xE9s \xE0 retourner.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(34, InvoiceDetailComponent_Conditional_28_Conditional_34_Template, 13, 0, "div", 192);
    \u0275\u0275conditionalCreate(35, InvoiceDetailComponent_Conditional_28_Conditional_35_Template, 4, 1, "div", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 194)(37, "button", 195);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_28_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAvoirModal());
    });
    \u0275\u0275text(38, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 196);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_28_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmAvoir());
    });
    \u0275\u0275elementStart(40, "span", 5);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirDate);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r0.avoirType === "integral");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirType);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("selected", ctx_r0.avoirType === "partiel");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.avoirType);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.avoirType === "partiel" ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorMsg ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.creatingAvoir);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r0.creatingAvoir);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.creatingAvoir ? "hourglass_empty" : "check_circle", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.creatingAvoir ? "Cr\xE9ation..." : "Confirmer l'avoir", " ");
  }
}
var InvoiceDetailComponent = class _InvoiceDetailComponent {
  constructor(salesService, accountingService, authService, companyService, stockService, route, router) {
    this.salesService = salesService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.companyService = companyService;
    this.stockService = stockService;
    this.route = route;
    this.router = router;
    this.invoice = null;
    this.cashBankJournals = [];
    this.warehouses = [];
    this.loading = false;
    this.posting = false;
    this.cancelling = false;
    this.reversing = false;
    this.creatingAvoir = false;
    this.generatingRistournes = false;
    this.savingWarehouse = false;
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
    this.showCreditForm = false;
    this.creditAmount = 0;
    this.applyingCredit = false;
    this.availableCredits = [];
    this.loadingCredits = false;
    this.selectedCreditId = null;
    this.reconciliations = [];
    this.showReconcileModal = false;
    this.availableMoves = [];
    this.loadingMoves = false;
    this.reconcileForm = { moveId: 0, amount: 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] };
    this.savingReconcile = false;
    this.selectedMove = null;
    this.showAvoirModal = false;
    this.avoirType = "integral";
    this.avoirDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.avoirLines = [];
    this.showPrintModal = false;
    this.Math = Math;
    this.CONSIGNE_CODES = CONSIGNE_CODES;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.invoiceId = +params.get("id");
      this.invoice = null;
      this.loadInvoice();
    });
    this.loadJournals();
    this.loadWarehouses();
  }
  loadInvoice() {
    this.loading = true;
    this.salesService.getInvoice(this.invoiceId).subscribe({
      next: (data) => {
        this.invoice = data;
        this.payment.amount = data.montantDu || 0;
        this.loading = false;
        this.loadReconciliations();
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadReconciliations() {
    this.salesService.getReconciliations(this.invoiceId).subscribe({
      next: (data) => {
        this.reconciliations = data;
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
  loadWarehouses() {
    this.stockService.getWarehouses(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.warehouses = data.filter((w) => w.active !== false);
      }
    });
  }
  setWarehouse(warehouseId) {
    if (!warehouseId || !this.invoice?.id)
      return;
    this.savingWarehouse = true;
    this.salesService.setWarehouse(this.invoice.id, warehouseId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.savingWarehouse = false;
        this.showSuccess("Entrep\xF4t enregistr\xE9");
        const wh = this.warehouses.find((w) => w.id === Number(warehouseId));
        if (wh?.cashJournalId && this.cashBankJournals.some((j) => j.id === wh.cashJournalId)) {
          this.payment.journalId = wh.cashJournalId;
        }
      },
      error: (err) => {
        this.savingWarehouse = false;
        this.showError(err.error?.message || "Erreur lors de la mise \xE0 jour de l'entrep\xF4t");
      }
    });
  }
  get partnerBalanceClass() {
    const b = this.invoice?.partnerBalance ?? 0;
    if (b > 0)
      return "balance-positive";
    if (b < 0)
      return "balance-negative";
    return "balance-zero";
  }
  get missingFields() {
    if (!this.invoice || this.invoice.state !== "draft")
      return [];
    const isAvoir = this.invoice.type === "credit_note";
    const missing = [];
    if (!this.invoice.partnerId)
      missing.push("Client");
    if (!this.invoice.journalId)
      missing.push("Journal");
    if (!this.invoice.date)
      missing.push("Date");
    if (!isAvoir && !this.invoice.warehouseId)
      missing.push("Entrep\xF4t");
    if (!this.invoice.lines || this.invoice.lines.length === 0)
      missing.push("Lignes de facturation");
    return missing;
  }
  postInvoice() {
    if (!confirm("Valider cette facture ? Une \xE9criture comptable sera g\xE9n\xE9r\xE9e."))
      return;
    this.posting = true;
    this.errorMsg = "";
    this.salesService.postInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.posting = false;
        this.showSuccess("Facture valid\xE9e \u2014 \xE9criture comptable cr\xE9\xE9e");
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || "Erreur lors de la validation";
      }
    });
  }
  cancelInvoice() {
    const doc = this.isAvoir ? "cet avoir" : "cette facture";
    const hasEntries = this.invoice?.accountMoveId;
    const stockNote = this.isAvoir ? " Le stock retourn\xE9 sera restitu\xE9." : "";
    const msg = hasEntries ? `Annuler ${doc} ?${stockNote} Les \xE9critures comptables NE seront PAS automatiquement invers\xE9es. Cliquez sur "Inverser les \xE9critures" ensuite.` : `Annuler ${doc} ?`;
    if (!confirm(msg))
      return;
    this.cancelling = true;
    this.salesService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess((this.isAvoir ? "Avoir annul\xE9 \u2014 stock restitu\xE9." : "Facture annul\xE9e.") + ' Cliquez sur "Inverser les \xE9critures" pour extourner les \xE9critures comptables.');
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
    this.salesService.reverseInvoiceEntries(this.invoiceId).subscribe({
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
    this.salesService.createPayment({
      invoiceId: this.invoiceId,
      journalId: this.payment.journalId,
      date: this.payment.date,
      amount: this.payment.amount,
      memo: this.payment.memo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: () => {
        this.savingPayment = false;
        this.showPaymentForm = false;
        this.showSuccess(this.isAvoir ? "Remboursement enregistr\xE9" : "Paiement enregistr\xE9");
        this.loadInvoice();
      },
      error: (err) => {
        this.savingPayment = false;
        this.errorMsg = err.error?.message || "Erreur lors du paiement";
      }
    });
  }
  openCreditForm() {
    if (!this.invoice?.partnerId)
      return;
    this.selectedCreditId = null;
    this.creditAmount = 0;
    this.availableCredits = [];
    this.showCreditForm = true;
    this.loadingCredits = true;
    this.salesService.getAvailableCredits(this.invoice.partnerId, this.authService.getCompanyId()).subscribe({
      next: (credits) => {
        this.availableCredits = credits;
        this.loadingCredits = false;
      },
      error: () => {
        this.loadingCredits = false;
      }
    });
  }
  get selectedCreditMax() {
    if (!this.selectedCreditId)
      return 0;
    const credit = this.availableCredits.find((c) => c.id === this.selectedCreditId);
    return Math.min(this.invoice?.montantDu ?? 0, credit?.montantDu ?? 0);
  }
  selectCredit(credit) {
    this.selectedCreditId = credit.id;
    this.creditAmount = Math.min(this.invoice?.montantDu ?? 0, credit.montantDu);
  }
  applyCredit() {
    if (!this.selectedCreditId) {
      this.errorMsg = "S\xE9lectionnez un avoir \xE0 imputer.";
      return;
    }
    if (!this.creditAmount || this.creditAmount <= 0)
      return;
    this.applyingCredit = true;
    this.errorMsg = "";
    this.salesService.applyCredit(this.invoiceId, this.creditAmount, this.authService.getCompanyId(), this.selectedCreditId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.applyingCredit = false;
        this.showCreditForm = false;
        this.showSuccess("Cr\xE9dit appliqu\xE9 \u2014 facture mise \xE0 jour");
      },
      error: (err) => {
        this.applyingCredit = false;
        this.errorMsg = err.error?.message || "Erreur lors de la compensation";
      }
    });
  }
  generateRistournes() {
    if (!confirm("G\xE9n\xE9rer un r\xE8glement ristourne \xE0 partir de cette facture ?"))
      return;
    this.generatingRistournes = true;
    this.errorMsg = "";
    this.salesService.generateRistournes(this.invoiceId).subscribe({
      next: (rst) => {
        this.generatingRistournes = false;
        this.showSuccess(`R\xE8glement ristourne ${rst.name} cr\xE9\xE9 (brouillon)`);
      },
      error: (err) => {
        this.generatingRistournes = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration des ristournes";
      }
    });
  }
  reversePayment(paymentId) {
    if (!confirm("Inverser ce paiement ? Une \xE9criture comptable inverse sera g\xE9n\xE9r\xE9e."))
      return;
    this.salesService.reversePayment(paymentId).subscribe({
      next: () => {
        this.showSuccess("Paiement invers\xE9");
        this.loadInvoice();
      },
      error: (e) => {
        this.errorMsg = e?.error?.message || "Erreur lors de l'inversion du paiement";
      }
    });
  }
  openAvoirModal() {
    this.avoirType = "integral";
    this.avoirDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.avoirLines = (this.invoice?.lines ?? []).filter((l) => (l.quantity ?? 0) > 0).map((l) => ({
      lineId: l.id,
      description: l.description || l.productCode || "",
      originalQty: l.quantity ?? 0,
      quantite: l.quantity ?? 0,
      isConsigne: l.consigne ?? false
    }));
    this.errorMsg = "";
    this.showAvoirModal = true;
  }
  closeAvoirModal() {
    this.showAvoirModal = false;
  }
  confirmAvoir() {
    this.creatingAvoir = true;
    this.errorMsg = "";
    const date = this.avoirDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const req = this.avoirType === "partiel" ? { avoirType: "partiel", date, lines: this.avoirLines.map((l) => ({ lineId: l.lineId, quantite: l.quantite })) } : { avoirType: "integral", date };
    this.salesService.createAvoirFromInvoice(this.invoiceId, req).subscribe({
      next: (avoir) => {
        this.creatingAvoir = false;
        this.showAvoirModal = false;
        this.loadInvoice();
        if (avoir.id) {
          this.router.navigate(["/sales/invoices", avoir.id]);
        }
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
  get printDocType() {
    return this.isAvoir ? "avoir" : "invoice";
  }
  get printCompany() {
    return this.companyService.getCached();
  }
  get printCompanyName() {
    return this.companyService.getCached()?.name ?? "";
  }
  get printCompanyPhone() {
    return this.companyService.getCached()?.telephone ?? "";
  }
  get printCompanyLogoUrl() {
    return this.companyService.getLogoUrl();
  }
  get printCompanyLogoDataUrl() {
    return this.companyService.getCachedLogoDataUrl();
  }
  openPrint() {
    this.showPrintModal = true;
  }
  closePrint() {
    this.showPrintModal = false;
  }
  get isAvoir() {
    return this.invoice?.type === "credit_note";
  }
  /**
   * true seulement s'il reste un solde à encaisser (> 0). Quand la déconsigne
   * (emballages repris) ramène le net à payer à 0 ou en négatif, la facture est
   * déjà réglée — voire nous devons au client — donc aucun paiement à enregistrer.
   */
  get hasSoldeDu() {
    return (this.invoice?.montantDu ?? 0) > 0;
  }
  /**
   * Droit d'annuler une facture de vente (VENTES/FACTURES/CANCEL). Sans ce droit,
   * l'utilisateur doit passer par l'extourne. Les rôles privilégiés l'ont toujours.
   */
  get canCancelInvoice() {
    return this.authService.hasPermission("VENTES", "FACTURES", "CANCEL");
  }
  back() {
    if (this.isAvoir) {
      this.router.navigate(["/sales/avoirs"]);
    } else {
      this.router.navigate(["/sales/invoices"]);
    }
  }
  viewOrder() {
    if (this.invoice?.salesOrderId) {
      this.router.navigate(["/sales/orders", this.invoice.salesOrderId]);
    }
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
  getProgressPct() {
    if (!this.invoice?.totalTTC || this.invoice.totalTTC === 0)
      return 0;
    return Math.min(100, Math.round((this.invoice.montantPaye || 0) / this.invoice.totalTTC * 100));
  }
  fmtM(n) {
    return n > 0 ? formatFCFA(n, false) : "";
  }
  parseM(s) {
    return Math.round(parseFloat((s || "").replace(/[\s  ]/g, "").replace(",", ".")) || 0);
  }
  isConsigneCode(code) {
    if (!code)
      return false;
    return this.CONSIGNE_CODES.has(code.trim().toUpperCase());
  }
  /** Total Colis = quantité totale de tous les produits non-consigne */
  get totalColis() {
    return this.invoice?.lines.filter((l) => !this.isConsigneCode(l.productCode)).reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }
  /** Total PET = articles dont la catégorie commence par "PET" */
  get totalPET() {
    return this.invoice?.lines.filter((l) => !this.isConsigneCode(l.productCode) && this.isPETCategory(l.categoryName)).reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }
  isPETCategory(name) {
    if (!name)
      return false;
    return name.trim().toUpperCase().startsWith("PET");
  }
  /** Total Casier = articles dont l'unité de mesure contient "casier" (Casier 12, Casier 24…) */
  get totalCasier() {
    return this.invoice?.lines.filter((l) => !this.isConsigneCode(l.productCode) && this.isCasierUom(l.uomName)).reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }
  isCasierUom(uom) {
    if (!uom)
      return false;
    return uom.toLowerCase().includes("casier");
  }
  get consigneMontant() {
    return this.invoice?.lines.filter((l) => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) >= 0).reduce((s, l) => s + (Number(l.montantTTC) || 0), 0) || 0;
  }
  get deconsigneMontant() {
    return this.invoice?.lines.filter((l) => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) < 0).reduce((s, l) => s + Math.abs(Number(l.montantTTC) || 0), 0) || 0;
  }
  get qteConsigne() {
    return this.invoice?.lines.filter((l) => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) >= 0).reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }
  get qteDeconsigne() {
    return this.invoice?.lines.filter((l) => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) < 0).reduce((s, l) => s + Math.abs(Number(l.quantity) || 0), 0) || 0;
  }
  // ===== Lettrage =====
  openReconcileModal() {
    this.loadingMoves = true;
    this.showReconcileModal = true;
    this.selectedMove = null;
    this.reconcileForm = { moveId: 0, amount: this.invoice?.montantDu || 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] };
    this.salesService.getAvailableMoves(this.invoiceId, this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.availableMoves = data;
        this.loadingMoves = false;
      },
      error: () => {
        this.loadingMoves = false;
      }
    });
  }
  selectMove(move) {
    this.selectedMove = move;
    this.reconcileForm.moveId = move.moveId;
    this.reconcileForm.amount = Math.min(this.invoice?.montantDu || 0, move.montantDisponible);
  }
  saveReconcile() {
    if (!this.reconcileForm.moveId || this.reconcileForm.amount <= 0)
      return;
    this.savingReconcile = true;
    this.salesService.reconcile(this.invoiceId, {
      accountMoveId: this.reconcileForm.moveId,
      amount: this.reconcileForm.amount,
      date: this.reconcileForm.date
    }).subscribe({
      next: () => {
        this.savingReconcile = false;
        this.showReconcileModal = false;
        this.showSuccess("Facture rattach\xE9e au versement");
        this.loadInvoice();
      },
      error: (err) => {
        this.savingReconcile = false;
        this.showError(err.error?.message || "Erreur lors du lettrage");
      }
    });
  }
  unreconcile(id) {
    if (!confirm('D\xE9lettrer ce rattachement ? Le montant sera remis en "reste d\xFB".'))
      return;
    this.salesService.unreconcile(id).subscribe({
      next: () => {
        this.showSuccess("Lettrage supprim\xE9");
        this.loadInvoice();
      },
      error: (err) => {
        this.showError(err.error?.message || "Erreur");
      }
    });
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
  }
  showError(msg) {
    this.errorMsg = msg;
    setTimeout(() => this.errorMsg = "", 6e3);
  }
  goToOriginalInvoice(id) {
    this.router.navigate(["/sales/invoices", id]);
  }
  static {
    this.\u0275fac = function InvoiceDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceDetailComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailComponent, selectors: [["app-invoice-detail"]], decls: 29, vars: 20, consts: [["recAmtInput", ""], ["payAmtInput", ""], [1, "page-container"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [1, "badge-type-avoir"], [3, "class"], [1, "ecriture-ref"], [1, "header-actions"], [1, "btn-print"], [1, "btn-avoir", 3, "disabled"], [1, "btn-warning", 3, "disabled"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading-state"], ["(click).self", "showReconcileModal = false", 1, "pay-overlay"], ["(click).self", "closePaymentForm()", 1, "pay-overlay"], ["(click).self", "showCreditForm = false", 1, "pay-overlay"], [3, "invoice", "docType", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"], [1, "modal-overlay"], [1, "btn-print", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "btn-danger", 3, "disabled"], [1, "btn-danger", 3, "click", "disabled"], [1, "btn-payment"], [1, "btn-avoir", 3, "click", "disabled"], [1, "btn-payment", 3, "click"], [1, "btn-ristourne", 3, "click", "disabled"], [1, "btn-warning", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "alert", "alert-warning", "mb-16"], [1, "info-grid", "mb-16"], [1, "info-card"], [1, "info-label"], [1, "info-value", "font-bold"], [1, "info-card", 3, "class"], [1, "info-value"], [1, "info-card", 3, "missing-field"], [1, "info-card", "clickable"], [1, "card", "mb-16"], [1, "card-header"], [1, "lines-table"], [1, "text-right"], [1, "text-right", 2, "color", "#e65100"], [1, "text-right", 2, "color", "#c0392b"], [1, "text-right", "col-enl"], [1, "bottom-section"], [1, "payments-section"], [1, "card"], [2, "display", "flex", "gap", "6px"], [1, "no-payments"], [1, "payments-table"], [1, "totals-section"], [1, "totals-card"], [1, "total-row"], [1, "total-row", "total-precompte"], [1, "total-row", "total-liquide"], [1, "total-row", "total-ttc"], [1, "total-row", "net-a-payer"], [1, "total-row", "text-success"], [1, "progress-section"], [3, "createdBy", "createdAt", "updatedBy", "updatedAt"], ["entityType", "SALE_INVOICE", 3, "entityId"], [1, "material-icons", 2, "font-size", "14px", "vertical-align", "middle"], [1, "balance-tag", "balance-tag-debit"], [1, "balance-tag", "balance-tag-credit"], [1, "balance-tag", "balance-tag-zero"], [2, "margin-top", "6px", "font-size", "12px", "color", "#017E84", "font-weight", "500", "display", "flex", "align-items", "center", "gap", "4px"], [1, "material-icons", 2, "font-size", "14px"], [1, "required-star"], [1, "form-select-inline", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], [1, "info-card", "clickable", 3, "click"], [1, "info-value", "link"], [1, "info-value", 2, "white-space", "pre-wrap"], [1, "info-value", "link", 3, "click"], [1, "text-muted", "font-mono"], [1, "text-right", 2, "color", "#e65100", "font-weight", "500"], [1, "text-right", 2, "color", "#c0392b", "font-weight", "700"], [1, "taxe-tag", "taxe-tva"], [1, "text-right", "font-bold"], [1, "text-right", 2, "color", "#e65100", "font-weight", "700"], [1, "taxe-tag", "taxe-guiness"], [1, "card-header", "recap-header"], [1, "recap-global-wrapper"], [1, "lines-table", "recap-global-table"], [1, "text-right", "col-psa"], [1, "text-right", "col-liquide"], [1, "text-right", "col-net"], [1, "recap-total-row"], [1, "text-right", 2, "color", "#e65100", "font-weight", "600"], [1, "badge-info-only"], [1, "text-right", "col-ristourne"], [3, "ristourne-negative"], ["colspan", "4"], [1, "text-right", "font-mono"], [1, "btn-add-payment", 2, "background", "#017E84"], [1, "btn-add-payment", 3, "click"], [1, "btn-add-payment", 2, "background", "#017E84", 3, "click"], [3, "payment-reversed"], [1, "font-mono"], [2, "color", "#017E84", "font-size", "12px", "display", "flex", "align-items", "center", "gap", "3px"], [1, "text-muted"], [1, "badge-reversed"], [1, "pay-action-cell"], ["title", "Inverser ce paiement", 1, "btn-reverse-payment"], ["title", "Inverser ce paiement", 1, "btn-reverse-payment", 3, "click"], [1, "recon-divider"], [1, "text-right", "recon-amount"], [1, "total-row", "total-enlevement"], [1, "total-row", 2, "color", "#e65100"], [1, "total-row", 2, "color", "#e65100", "font-weight", "700"], [1, "progress-bar-lg"], [1, "progress-fill"], [1, "progress-label"], [1, "card-header", 2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "display", "flex", "align-items", "center", "gap", "6px"], [1, "material-icons", 2, "font-size", "18px", "color", "#0ea5e9"], [1, "btn-add-payment", 2, "background", "#0ea5e9"], [1, "no-payments", 2, "color", "#64748b"], [1, "btn-add-payment", 2, "background", "#0ea5e9", 3, "click"], [1, "text-right", "text-success", "font-bold"], ["title", "D\xE9lettrer", 1, "btn-icon-danger", 3, "click"], [1, "material-icons", 2, "font-size", "16px"], [1, "pay-modal", 2, "max-width", "680px"], [1, "pay-modal-hdr", 2, "background", "linear-gradient(135deg,#0ea5e9,#0284c7)"], [1, "pay-modal-title"], [1, "pay-modal-close", 3, "click"], [1, "pay-modal-body"], [1, "pay-summary", 2, "margin-bottom", "16px"], [1, "pay-sum-row"], [1, "pay-due"], [2, "font-size", "13px", "font-weight", "600", "color", "#475569", "margin-bottom", "8px"], [2, "text-align", "center", "padding", "24px", "color", "#64748b"], [2, "padding", "16px", "background", "#f1f5f9", "border-radius", "8px", "color", "#64748b", "font-size", "13px", "text-align", "center"], [2, "max-height", "260px", "overflow-y", "auto", "border", "1px solid #e2e8f0", "border-radius", "8px"], [2, "margin-top", "16px", "padding", "12px", "background", "#f0f9ff", "border-radius", "8px", "border", "1px solid #bae6fd"], [1, "pay-modal-ftr"], [1, "pay-btn-cancel", 3, "click"], [1, "pay-btn-save", 2, "background", "#0ea5e9", 3, "click", "disabled"], [1, "payments-table", 2, "margin", "0"], [2, "cursor", "pointer", 3, "selected-row"], [2, "cursor", "pointer", 3, "click"], [1, "text-right", "text-muted"], [1, "text-right", "font-bold", 2, "color", "#0ea5e9"], [1, "material-icons", 2, "color", "#0ea5e9", "font-size", "18px"], [2, "font-size", "13px", "font-weight", "600", "color", "#0284c7", "margin-bottom", "10px"], [1, "pay-form-grid", 2, "grid-template-columns", "1fr 1fr"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "0", 1, "form-control", 3, "focus", "input", "blur", "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "pay-modal"], [1, "pay-modal-hdr"], [1, "pay-summary"], [1, "pay-form-grid"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "placeholder", "N\xB0 ch\xE8que, virement...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "pay-btn-save", 3, "click", "disabled"], [1, "pay-modal-hdr", "credit-hdr"], [1, "credit-info-box"], [1, "credit-info-row"], [1, "credit-avail"], [1, "form-group", 2, "margin-top", "16px"], [1, "text-muted", 2, "margin", "8px 0"], [1, "credit-list"], ["type", "number", "min", "0", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled", "max"], [1, "pay-btn-save", "credit-save", 3, "click", "disabled"], [1, "credit-row", 3, "selected"], [1, "credit-row", 3, "click"], ["type", "radio", "name", "creditChoice", 3, "checked"], [1, "credit-row-info"], [1, "credit-row-name"], [1, "credit-row-date"], [1, "credit-row-origin"], [1, "credit-row-amount"], [3, "closed", "invoice", "docType", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"], [1, "modal-overlay", 3, "click"], [1, "avoir-modal", 3, "click"], [1, "avoir-modal-hdr"], [1, "avoir-modal-title"], [1, "avoir-modal-close", 3, "click"], [1, "avoir-modal-body"], [1, "avoir-date-row"], [1, "avoir-type-choice"], [1, "avoir-type-option"], ["type", "radio", "name", "avoirType", "value", "integral", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "avoirType", "value", "partiel", 3, "ngModelChange", "ngModel"], [1, "avoir-lines-table"], [1, "avoir-error"], [1, "avoir-modal-ftr"], [1, "avoir-btn-cancel", 3, "click"], [1, "avoir-btn-confirm", 3, "click", "disabled"], [1, "r"], [3, "avoir-line-consigne"], [1, "badge-consigne"], [1, "r", "muted"], ["type", "number", "step", "1", 1, "avoir-qty-input", 3, "ngModelChange", "ngModel", "min", "max"]], template: function InvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
        \u0275\u0275listener("click", function InvoiceDetailComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "span", 5);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6)(6, "h1", 7);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, InvoiceDetailComponent_Conditional_8_Template, 2, 0, "span", 8);
        \u0275\u0275conditionalCreate(9, InvoiceDetailComponent_Conditional_9_Template, 2, 3, "span", 9);
        \u0275\u0275conditionalCreate(10, InvoiceDetailComponent_Conditional_10_Template, 4, 1, "span", 10);
        \u0275\u0275conditionalCreate(11, InvoiceDetailComponent_Conditional_11_Template, 4, 1, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11);
        \u0275\u0275conditionalCreate(13, InvoiceDetailComponent_Conditional_13_Template, 4, 0, "button", 12);
        \u0275\u0275conditionalCreate(14, InvoiceDetailComponent_Conditional_14_Template, 5, 3);
        \u0275\u0275conditionalCreate(15, InvoiceDetailComponent_Conditional_15_Template, 5, 2);
        \u0275\u0275conditionalCreate(16, InvoiceDetailComponent_Conditional_16_Template, 4, 1, "button", 13);
        \u0275\u0275conditionalCreate(17, InvoiceDetailComponent_Conditional_17_Template, 5, 2);
        \u0275\u0275conditionalCreate(18, InvoiceDetailComponent_Conditional_18_Template, 6, 4);
        \u0275\u0275conditionalCreate(19, InvoiceDetailComponent_Conditional_19_Template, 4, 2, "button", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(20, InvoiceDetailComponent_Conditional_20_Template, 4, 1, "div", 15);
        \u0275\u0275conditionalCreate(21, InvoiceDetailComponent_Conditional_21_Template, 4, 1, "div", 16);
        \u0275\u0275conditionalCreate(22, InvoiceDetailComponent_Conditional_22_Template, 4, 0, "div", 17)(23, InvoiceDetailComponent_Conditional_23_Template, 134, 64);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, InvoiceDetailComponent_Conditional_24_Template, 38, 11, "div", 18);
        \u0275\u0275conditionalCreate(25, InvoiceDetailComponent_Conditional_25_Template, 61, 16, "div", 19);
        \u0275\u0275conditionalCreate(26, InvoiceDetailComponent_Conditional_26_Template, 47, 15, "div", 20);
        \u0275\u0275conditionalCreate(27, InvoiceDetailComponent_Conditional_27_Template, 1, 7, "app-print-preview", 21);
        \u0275\u0275conditionalCreate(28, InvoiceDetailComponent_Conditional_28_Template, 43, 14, "div", 22);
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
        \u0275\u0275conditional(ctx.invoice && ctx.invoice.state !== "draft" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "draft" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "posted" && ctx.isInvoice ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "paid" && ctx.isInvoice ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "partiellement_extournee" && ctx.isInvoice ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((ctx.invoice == null ? null : ctx.invoice.state) === "posted" || (ctx.invoice == null ? null : ctx.invoice.state) === "paid") && ctx.isAvoir ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "cancelled" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 22 : ctx.invoice ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showReconcileModal && ctx.invoice ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPaymentForm && ctx.invoice ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showCreditForm && ctx.invoice ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPrintModal && ctx.invoice ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAvoirModal ? 28 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, PrintPreviewComponent, AuditFooterComponent, AuditTrailComponent, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .ecriture-ref[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.page-header[_ngcontent-%COMP%]   .ecriture-ref[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-print[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-print[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%], \n.btn-payment[_ngcontent-%COMP%], \n.btn-avoir[_ngcontent-%COMP%], \n.btn-warning[_ngcontent-%COMP%], \n.btn-ristourne[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-avoir[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-ristourne[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-danger[_ngcontent-%COMP%]:disabled, \n.btn-payment[_ngcontent-%COMP%]:disabled, \n.btn-avoir[_ngcontent-%COMP%]:disabled, \n.btn-warning[_ngcontent-%COMP%]:disabled, \n.btn-ristourne[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #017E84;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #bb2d3b;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: white;\n}\n.btn-payment[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-avoir[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: white;\n}\n.btn-avoir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  color: white;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e06912;\n}\n.btn-ristourne[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: white;\n}\n.btn-ristourne[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #a93226;\n}\n.badge-type-avoir[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  border: 1px solid #d4c6f5;\n  letter-spacing: 0.5px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 180px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value.link[_ngcontent-%COMP%] {\n  color: var(--accent);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card.clickable[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mt-12[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #0f5132;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-extournee[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.badge.badge-partial-ext[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.bottom-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.no-payments[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.amount-preview[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0ea5e9;\n  letter-spacing: 0.4px;\n}\n.payments-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.payments-table[_ngcontent-%COMP%]   .payment-reversed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.pay-action-cell[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n  padding: 4px 8px !important;\n}\n.btn-reverse-payment[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: 1px solid #fca5a5;\n  background: var(--danger-bg);\n  color: var(--danger);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-reverse-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-reverse-payment[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  border-color: #ef4444;\n}\n.badge-reversed[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  background: var(--danger-bg);\n  color: #991b1b;\n  border-radius: 8px;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.btn-add-payment[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-add-payment[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.payment-form-body[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.payment-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.totals-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 18px 22px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n}\n.total-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  font-family: monospace;\n}\n.total-row.total-ttc[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--accent);\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.total-row.text-success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #198754 !important;\n}\n.total-row.total-due[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #dc3545 !important;\n  font-weight: 600;\n}\n.total-row.total-due[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #dc3545 !important;\n  font-weight: 700;\n}\n.total-row.total-precompte[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--warning);\n}\n.total-row.total-enlevement[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--info);\n}\n.total-row.total-liquide[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  padding: 8px 6px;\n  border-radius: 4px;\n}\n.total-row.total-liquide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n  color: rgba(139, 92, 246, 0.9);\n}\n.total-row.total-liquide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.total-row.total-ristourne[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--danger);\n}\n.total-row.net-a-payer[_ngcontent-%COMP%] {\n  border-top: 2px solid #6f42c1;\n  margin-top: 4px;\n  padding-top: 10px;\n}\n.total-row.net-a-payer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 14px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.total-row.net-a-payer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-bar-lg[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--bg-elevated);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-bar-lg[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent);\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  display: block;\n  text-align: right;\n}\n.recap-header[_ngcontent-%COMP%] {\n  gap: 8px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.recap-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--accent);\n}\n.recap-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-size: 13px;\n  padding: 10px 14px;\n}\n.recap-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n}\n.col-psa[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.col-enl[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.col-liquide[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.col-net[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.col-ristourne[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.ristourne-negative[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.ristourne-negative[_ngcontent-%COMP%] {\n  color: #7c3aed;\n  font-style: italic;\n}\n.ristourne-negative[_ngcontent-%COMP%]   .col-ristourne[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.col-remise[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.recap-global-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.recap-global-table[_ngcontent-%COMP%] {\n  min-width: 1100px;\n}\n.recap-global-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.recap-global-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 8px 12px;\n  font-size: 13px;\n}\n.recap-global-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  border-bottom: 2px solid var(--border);\n}\n.recap-global-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.recap-global-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.badge-info-only[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 500;\n  background: var(--warning-bg);\n  color: var(--warning);\n  padding: 2px 10px;\n  border-radius: 10px;\n  border: 1px solid #ffc107;\n}\n.badge-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-type.badge-brasserie[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-type.badge-guinness[_ngcontent-%COMP%] {\n  background: #cff4fc;\n  color: #055160;\n}\n.badge-type.badge-brut[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.info-card.balance-positive[_ngcontent-%COMP%] {\n  border-left: 3px solid #dc3545;\n}\n.info-card.balance-negative[_ngcontent-%COMP%] {\n  border-left: 3px solid #198754;\n}\n.info-card.balance-zero[_ngcontent-%COMP%] {\n  border-left: 3px solid #6c757d;\n}\n.info-card.missing-field[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545 !important;\n  background: var(--danger-bg);\n}\n.balance-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 6px;\n}\n.balance-tag.balance-tag-debit[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.balance-tag.balance-tag-credit[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.balance-tag.balance-tag-zero[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.form-select-inline[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 13px;\n  width: 100%;\n  cursor: pointer;\n  background: var(--bg-surface);\n  font-family: "Roboto", sans-serif;\n}\n.form-select-inline[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n}\n.pay-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.pay-modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.pay-modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-modal-hdr.credit-hdr[_ngcontent-%COMP%]   .pay-modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.pay-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.pay-modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-size: 20px;\n}\n.pay-modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.pay-modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.pay-modal-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pay-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.pay-summary[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.pay-sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.pay-due[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 14px;\n}\n.pay-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.credit-info-box[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n  border-radius: 8px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.credit-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.credit-avail[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-size: 14px;\n}\n.credit-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 220px;\n  overflow-y: auto;\n  margin-top: 6px;\n}\n.credit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n}\n.credit-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.credit-row.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.credit-row[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin: 0;\n  flex-shrink: 0;\n}\n.credit-row-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.credit-row-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.credit-row-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.credit-row-origin[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.credit-row-amount[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-size: 13px;\n  white-space: nowrap;\n}\n.pay-modal-ftr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pay-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.pay-btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pay-btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.pay-btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.pay-btn-save.credit-save[_ngcontent-%COMP%] {\n  background: #017E84;\n}\n.pay-btn-save.credit-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.required-star[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.selected-row[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n  outline: 2px solid #0ea5e9;\n  outline-offset: -2px;\n}\n.btn-icon-danger[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--danger);\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.recon-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n  border-top: 1px dashed #bee3f8;\n  background: var(--bg-hover);\n}\n.recon-divider[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.recon-amount[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  font-weight: 600;\n  font-family: monospace;\n}\n.taxe-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.taxe-tag.taxe-tva[_ngcontent-%COMP%] {\n  background: var(--bg-active);\n  color: #0066cc;\n  border: 1px solid #b3d9f5;\n}\n.taxe-tag.taxe-guiness[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n  margin-left: 3px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9100;\n  padding: 20px;\n}\n.avoir-modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 580px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.avoir-modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.avoir-modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.avoir-modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.avoir-modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.avoir-modal-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.avoir-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.avoir-date-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.avoir-date-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.avoir-date-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 0 0 160px;\n}\n.avoir-modal-ftr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-type-choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.avoir-type-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.avoir-type-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.avoir-type-option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--text-muted);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.avoir-type-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  display: block;\n  margin-bottom: 2px;\n}\n.avoir-type-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.avoir-type-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n}\n.avoir-type-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.avoir-type-option.selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.avoir-lines-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background: var(--bg-hover);\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.avoir-lines-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   .avoir-line-consigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #f8f4ff;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.badge-consigne[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  background: #ede9ff;\n  color: #6d28d9;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  vertical-align: middle;\n}\n.avoir-qty-input[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 4px 8px;\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  text-align: right;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-qty-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.avoir-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.avoir-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.avoir-btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.avoir-btn-confirm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-confirm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.avoir-btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.avoir-btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin-kf 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin-kf {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceDetailComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-detail", standalone: true, imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditFooterComponent, AuditTrailComponent], template: `<div class="page-container">
  <!-- Header -->
  <div class="page-header">
    <button class="btn-back" (click)="back()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      <h1 class="page-title">{{ invoice?.name || 'Document' }}</h1>
      @if (isAvoir) {
        <span class="badge-type-avoir">AVOIR</span>
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
      @if (invoice && invoice.state !== 'draft') {
        <button class="btn-print" (click)="openPrint()">
          <span class="material-icons">print</span> Imprimer
        </button>
      }
      @if (invoice?.state === 'draft') {
        <button class="btn-primary" (click)="postInvoice()" [disabled]="posting">
          <span class="material-icons">check_circle</span>
          {{ posting ? 'Validation...' : (isAvoir ? 'Valider l\\'avoir' : 'Valider la facture') }}
        </button>
        @if (canCancelInvoice) {
          <button class="btn-danger" (click)="cancelInvoice()" [disabled]="cancelling">
            <span class="material-icons">cancel</span> Annuler
          </button>
        }
      }
      @if (invoice?.state === 'posted' && isInvoice) {
        @if (hasSoldeDu) {
          <button class="btn-payment" (click)="openPaymentForm()">
            <span class="material-icons">payments</span>
            Enregistrer un paiement
          </button>
        }
        <button class="btn-avoir" (click)="openAvoirModal()" [disabled]="creatingAvoir">
          <span class="material-icons">undo</span>
          Cr\xE9er un avoir
        </button>
      }
      @if (invoice?.state === 'paid' && isInvoice) {
        <button class="btn-avoir" (click)="openAvoirModal()" [disabled]="creatingAvoir">
          <span class="material-icons">undo</span>
          Cr\xE9er un avoir
        </button>
      }
      @if (invoice?.state === 'partiellement_extournee' && isInvoice) {
        @if (hasSoldeDu) {
          <button class="btn-payment" (click)="openPaymentForm()">
            <span class="material-icons">payments</span>
            Enregistrer un paiement
          </button>
        }
        <button class="btn-avoir" (click)="openAvoirModal()" [disabled]="creatingAvoir">
          <span class="material-icons">undo</span>
          Avoir compl\xE9mentaire
        </button>
      }
      @if ((invoice?.state === 'posted' || invoice?.state === 'paid') && isAvoir) {
        @if (hasSoldeDu) {
          <button class="btn-payment" (click)="openPaymentForm()">
            <span class="material-icons">payments</span>
            Enregistrer un paiement
          </button>
        }
        <button class="btn-ristourne" (click)="generateRistournes()" [disabled]="generatingRistournes">
          <span class="material-icons">redeem</span>
          {{ generatingRistournes ? 'G\xE9n\xE9ration...' : 'Ristournes (annulation)' }}
        </button>
        @if (canCancelInvoice) {
          <button class="btn-danger" (click)="cancelInvoice()" [disabled]="cancelling">
            <span class="material-icons">cancel</span> {{ cancelling ? 'Annulation...' : 'Annuler l\\'avoir' }}
          </button>
        }
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

    <!-- Alertes champs manquants (brouillon uniquement) -->
    @if (missingFields.length > 0) {
      <div class="alert alert-warning mb-16">
        <span class="material-icons">warning</span>
        <strong>Champs obligatoires manquants avant validation :</strong>
        {{ missingFields.join(', ') }}
      </div>
    }

    <!-- Infos facture -->
    <div class="info-grid mb-16">
      <div class="info-card">
        <div class="info-label">Client</div>
        <div class="info-value font-bold">{{ invoice.partnerName }}</div>
      </div>

      <!-- Solde partenaire -->
      @if (invoice.partnerBalance !== undefined && invoice.partnerBalance !== null) {
        <div class="info-card" [class]="partnerBalanceClass">
          <div class="info-label">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">account_balance_wallet</span>
            Solde client
          </div>
          <div class="info-value font-bold">
            {{ (invoice.partnerBalance || 0) | number:'1.0-0' }} FCFA
            @if ((invoice.partnerBalance || 0) > 0) {
              <span class="balance-tag balance-tag-debit">Doit</span>
            } @else if ((invoice.partnerBalance || 0) < 0) {
              <span class="balance-tag balance-tag-credit">On lui doit</span>
            } @else {
              <span class="balance-tag balance-tag-zero">Sold\xE9</span>
            }
          </div>
          @if ((invoice.partnerCreditDisponible || 0) > 0) {
            <div style="margin-top:6px;font-size:12px;color:#017E84;font-weight:500;display:flex;align-items:center;gap:4px">
              <span class="material-icons" style="font-size:14px">redeem</span>
              Cr\xE9dit disponible : {{ invoice.partnerCreditDisponible | number:'1.0-2' }} FCFA
            </div>
          }
        </div>
      }

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
      <div class="info-card">
        <div class="info-label">Vendeur</div>
        <div class="info-value">{{ invoice.sellerName || '\u2014' }}</div>
      </div>

      <!-- Entrep\xF4t -->
      @if (isInvoice) {
        <div class="info-card" [class.missing-field]="!invoice.warehouseId && invoice.state === 'draft'">
          <div class="info-label">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">warehouse</span>
            Entrep\xF4t <span class="required-star">*</span>
          </div>
          @if (invoice.state === 'draft') {
            <div class="info-value">
              <select class="form-select-inline" [ngModel]="invoice.warehouseId"
                      (ngModelChange)="setWarehouse($event)" [disabled]="savingWarehouse">
                <option [ngValue]="undefined">\u2014 S\xE9lectionner \u2014</option>
                @for (wh of warehouses; track wh.id) {
                  <option [ngValue]="wh.id">{{ wh.name }}</option>
                }
              </select>
            </div>
          } @else {
            <div class="info-value">{{ invoice.warehouseName || '\u2014' }}</div>
          }
        </div>
      }

      @if (invoice.salesOrderName) {
        <div class="info-card clickable" (click)="viewOrder()">
          <div class="info-label">Bon de commande</div>
          <div class="info-value link">{{ invoice.salesOrderName }}</div>
        </div>
      }
      @if (invoice.notes) {
        <div class="info-card">
          <div class="info-label">Notes</div>
          <div class="info-value" style="white-space: pre-wrap">{{ invoice.notes }}</div>
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
            <th>D\xE9signation</th>
            <th class="text-right">Qt\xE9</th>
            <th class="text-right">Prix U. HT</th>
            <th class="text-right">Prix U. TTC</th>
            <th class="text-right" style="color:#e65100">Rabais/u HT</th>
            <th class="text-right" style="color:#c0392b">Rabais/u TTC</th>
            <th class="text-right">Taxe(s)</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th class="text-right" style="color:#e65100">Rabais HT</th>
            <th class="text-right" style="color:#c0392b">Rabais TTC</th>
            <th class="text-right col-enl">Frais Enl\xE8v.</th>
          </tr>
        </thead>
        <tbody>
          @for (line of invoice.lines; track line.id) {
            <tr>
              <td class="text-muted font-mono">{{ line.productCode || '\u2014' }}</td>
              <td>{{ line.description }}</td>
              <td class="text-right">{{ line.quantity | number:'1.0-2' }}</td>
              <td class="text-right">{{ line.prixUnitaire | number:'1.2-2' }}</td>
              <td class="text-right">{{ (line.prixUnitaireTTC ?? 0) | number:'1.0-0' }}</td>
              <td class="text-right" style="color:#e65100;font-weight:500">
                @if ((line.rabaisUnitaire ?? 0) > 0) {
                  \u2013 {{ line.rabaisUnitaire | number:'1.0-0' }}
                } @else { \u2014 }
              </td>
              <td class="text-right" style="color:#c0392b;font-weight:700">
                @if ((line.rabaisUnitaireTTC ?? 0) > 0) {
                  \u2013 {{ line.rabaisUnitaireTTC | number:'1.0-0' }}
                } @else { \u2014 }
              </td>
              <td class="text-right">
                @if ((line.guinessTaxe ?? 0) > 0) {
                  <span class="taxe-tag taxe-tva">TVA {{ line.tauxTVA || 0 }}%</span>
                  <span class="taxe-tag taxe-guiness">Ristourne Guinness</span>
                } @else {
                  <span class="taxe-tag taxe-tva">TVA {{ line.tauxTVA || 0 }}%</span>
                }
              </td>
              <td class="text-right">{{ line.montantHT | number:'1.2-2' }}</td>
              <td class="text-right font-bold">{{ line.montantTTC | number:'1.0-0' }}</td>
              <td class="text-right" style="color:#e65100;font-weight:500">
                @if ((line.totalRabaisLigne ?? 0) > 0) {
                  \u2013 {{ line.totalRabaisLigne | number:'1.0-0' }}
                } @else { \u2014 }
              </td>
              <td class="text-right" style="color:#e65100;font-weight:700">
                @if ((line.totalRabaisLigneTTC ?? 0) > 0) {
                  \u2013 {{ line.totalRabaisLigneTTC | number:'1.0-0' }}
                } @else { \u2014 }
              </td>
              <td class="text-right col-enl">{{ ((line.fraisEnlevement ?? 0) + (line.fraisEnlevementTVA ?? 0)) | number:'1.0-0' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- R\xE9capitulatif global -->
    @if (invoice.lines && invoice.lines.length > 0) {
      <div class="card mb-16">
        <div class="card-header recap-header">
          <span class="material-icons">summarize</span> R\xE9capitulatif
        </div>
        <div class="recap-global-wrapper">
          <table class="lines-table recap-global-table">
            <thead>
              <tr>
                <th class="text-right">Montant HT</th>
                <th class="text-right">Total TVA</th>
                <th class="text-right col-psa">PSA</th>
                <th class="text-right">Total Colis</th>
                <th class="text-right">Total PET</th>
                <th class="text-right">Total Casier</th>
                <th class="text-right col-liquide">Total Liquide Nu</th>
                <th class="text-right col-enl">Frais Enl\xE8v. TTC</th>
                <th class="text-right">Consigne</th>
                <th class="text-right">D\xE9consigne</th>
                <th class="text-right">Qt\xE9 Consigne</th>
                <th class="text-right">Qt\xE9 D\xE9consigne</th>
                <th class="text-right font-bold">Total TTC</th>
                @if ((invoice.totalRabais ?? 0) > 0) {
                  <th class="text-right" style="color:#e65100">Rabais HT</th>
                  <th class="text-right" style="color:#e65100">Rabais TTC</th>
                }
                <th class="text-right col-net">Net \xE0 payer</th>
              </tr>
            </thead>
            <tbody>
              <tr class="recap-total-row">
                <td class="text-right">{{ (invoice.totalHT ?? 0) | number:'1.2-2' }}</td>
                <td class="text-right">{{ (invoice.totalTVA ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right col-psa">{{ (invoice.totalPrecompte ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right">{{ totalColis | number:'1.0-2' }}</td>
                <td class="text-right">{{ totalPET | number:'1.0-2' }}</td>
                <td class="text-right">{{ totalCasier | number:'1.0-2' }}</td>
                <td class="text-right col-liquide">{{ (invoice.totalLiquideNu ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right col-enl">{{ (invoice.fraisEnlevementTTC ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right">{{ consigneMontant | number:'1.0-0' }}</td>
                <td class="text-right">{{ deconsigneMontant | number:'1.0-0' }}</td>
                <td class="text-right">{{ qteConsigne | number:'1.0-2' }}</td>
                <td class="text-right">{{ qteDeconsigne | number:'1.0-2' }}</td>
                <td class="text-right font-bold">{{ (invoice.totalTTC ?? 0) | number:'1.0-0' }}</td>
                @if ((invoice.totalRabais ?? 0) > 0) {
                  <td class="text-right" style="color:#e65100;font-weight:600">\u2013 {{ invoice.totalRabais | number:'1.0-0' }}</td>
                  <td class="text-right" style="color:#e65100;font-weight:700">\u2013 {{ (invoice.totalRabaisTTC ?? invoice.totalRabais) | number:'1.0-0' }}</td>
                }
                <td class="text-right col-net"><strong>{{ (invoice.netAPayer ?? 0) | number:'1.0-0' }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    }

    <!-- Ristournes \u2014 informatif pour factures, n\xE9gatif pour avoirs -->
    @if (invoice.ristourneDetails && invoice.ristourneDetails.length > 0) {
      <div class="card mb-16">
        <div class="card-header recap-header">
          <span class="material-icons">redeem</span>
          @if (isAvoir) { Ristournes annul\xE9es par cet avoir }
          @else { Ristournes applicables }
          <span class="badge-info-only">
            {{ isAvoir ? 'montants n\xE9gatifs \u2014 annulation des ristournes de la facture d\\'origine' : 'calcul\xE9es &amp; conserv\xE9es \u2014 r\xE9cup\xE9r\xE9es par trimestre' }}
          </span>
        </div>
        <table class="lines-table">
          <thead>
            <tr>
              <th>Cat\xE9gorie</th>
              <th>Type</th>
              <th class="text-right">Qt\xE9</th>
              <th class="text-right">Montant/U. TTC</th>
              <th class="text-right col-ristourne">Total ristourne</th>
            </tr>
          </thead>
          <tbody>
            @for (r of invoice.ristourneDetails; track r.categoryName) {
              <tr [class.ristourne-negative]="r.montantTotal < 0">
                <td>{{ r.categoryName }}</td>
                <td><span [class]="'badge-type badge-' + (r.typeRistourne || 'brut')">
                  {{ r.typeRistourne === 'brasserie' ? 'Brasserie' : r.typeRistourne === 'guinness' ? 'Guinness' : 'HT brut' }}
                </span></td>
                <td class="text-right">{{ r.quantite | number:'1.0-2' }}</td>
                <td class="text-right font-mono">{{ r.montantUnitaire | number:'1.2-2' }}</td>
                <td class="text-right col-ristourne"><strong>{{ r.montantTotal | number:'1.0-0' }}</strong></td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="recap-total-row" [class.ristourne-negative]="(invoice.totalRistourne ?? 0) < 0">
              <td colspan="4"><strong>{{ isAvoir ? 'Total ristournes annul\xE9es' : 'Total ristournes (informatif)' }}</strong></td>
              <td class="text-right col-ristourne"><strong>{{ (invoice.totalRistourne ?? 0) | number:'1.0-0' }} FCFA</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    }

    <!-- Totaux & paiements -->
    <div class="bottom-section">
      <!-- Paiements -->
      <div class="payments-section">
        <div class="card">
          <div class="card-header">
            <span>Paiements</span>
            @if (invoice.state === 'posted') {
              <div style="display:flex;gap:6px">
                @if ((invoice.partnerCreditDisponible || 0) > 0 && (invoice.montantDu || 0) > 0) {
                  <button class="btn-add-payment" style="background:#017E84" (click)="openCreditForm()">
                    <span class="material-icons">redeem</span> Cr\xE9dit ({{ invoice.partnerCreditDisponible | number:'1.0-0' }})
                  </button>
                }
                <button class="btn-add-payment" (click)="openPaymentForm()">
                  <span class="material-icons">add</span> Ajouter
                </button>
              </div>
            }
          </div>
          @if ((!invoice.payments || invoice.payments.length === 0) && (!reconciliations || reconciliations.length === 0)) {
            <div class="no-payments">Aucun paiement enregistr\xE9</div>
          } @else {
            <table class="payments-table">
              <thead>
                <tr>
                  <th>R\xE9f\xE9rence</th>
                  <th>Date</th>
                  <th>Source</th>
                  <th>M\xE9mo</th>
                  <th class="text-right">Montant</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (p of invoice.payments; track p.id) {
                  <tr [class.payment-reversed]="p.state === 'reversed'">
                    <td class="font-mono">{{ p.name }}</td>
                    <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                    <td>
                      @if (p.creditNoteId) {
                        <span style="color:#017E84;font-size:12px;display:flex;align-items:center;gap:3px">
                          <span class="material-icons" style="font-size:14px">redeem</span>
                          {{ p.creditNoteName || 'Avoir' }}
                        </span>
                      } @else {
                        {{ p.journalName || '\u2014' }}
                      }
                    </td>
                    <td class="text-muted">{{ p.memo || '\u2014' }}</td>
                    <td class="text-right font-bold" [class.text-success]="p.state !== 'reversed'" [class.text-muted]="p.state === 'reversed'">
                      {{ p.amount | number:'1.0-0' }}
                      @if (p.state === 'reversed') { <span class="badge-reversed">Invers\xE9</span> }
                    </td>
                    <td class="pay-action-cell">
                      @if (p.state !== 'reversed' && p.id && !p.creditNoteId) {
                        <button class="btn-reverse-payment" (click)="reversePayment(p.id)" title="Inverser ce paiement">
                          <span class="material-icons">undo</span>
                        </button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          }
          @if (reconciliations && reconciliations.length > 0) {
            <div class="recon-divider">
              <span class="material-icons">link</span> Versements rattach\xE9s (lettrage)
            </div>
            <table class="payments-table">
              <tbody>
                @for (r of reconciliations; track r.id) {
                  <tr>
                    <td class="font-mono">{{ r.accountMoveName }}</td>
                    <td>{{ r.date | date:'dd/MM/yyyy' }}</td>
                    <td>{{ r.journalName }}</td>
                    <td class="text-muted">{{ r.accountMoveRef || '\u2014' }}</td>
                    <td class="text-right recon-amount">{{ r.amount | number:'1.0-0' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          }
        </div>

      </div>

      <!-- Totaux -->
      <div class="totals-section">
        <div class="totals-card">
          <div class="total-row">
            <span>Montant HT</span>
            <span>{{ (invoice.totalHT ?? 0) | number:'1.2-2' }} FCFA</span>
          </div>
          <div class="total-row">
            <span>+ TVA</span>
            <span>{{ (invoice.totalTVA ?? 0) | number:'1.0-0' }} FCFA</span>
          </div>
          @if ((invoice.totalPrecompte ?? 0) > 0) {
            <div class="total-row total-precompte">
              <span>+ PSA (Pr\xE9compte)</span>
              <span>{{ invoice.totalPrecompte | number:'1.0-0' }} FCFA</span>
            </div>
          }
          <div class="total-row total-liquide">
            <span>= Total Liquide Nu</span>
            <span>{{ (invoice.totalLiquideNu ?? 0) | number:'1.0-0' }} FCFA</span>
          </div>
          @if ((invoice.fraisEnlevementTTC ?? 0) > 0) {
            <div class="total-row total-enlevement">
              <span>+ Frais d'enl\xE8vement HT</span>
              <span>{{ (invoice.fraisEnlevementHT ?? 0) | number:'1.2-2' }} FCFA</span>
            </div>
            <div class="total-row total-enlevement">
              <span>+ TVA frais d'enl\xE8vement</span>
              <span>{{ (invoice.fraisEnlevementTVA ?? 0) | number:'1.0-0' }} FCFA</span>
            </div>
            <div class="total-row total-enlevement">
              <span>= Frais d'enl\xE8vement TTC</span>
              <span>{{ invoice.fraisEnlevementTTC | number:'1.0-0' }} FCFA</span>
            </div>
          }
          <div class="total-row total-ttc">
            <span>= Total TTC</span>
            <span>{{ (invoice.totalTTC ?? 0) | number:'1.0-0' }} FCFA</span>
          </div>
          @if (consigneMontant > 0) {
            <div class="total-row">
              <span>+ Consigne</span>
              <span>{{ consigneMontant | number:'1.0-0' }} FCFA</span>
            </div>
          }
          @if (deconsigneMontant > 0) {
            <div class="total-row">
              <span>\u2212 D\xE9consigne</span>
              <span>{{ deconsigneMontant | number:'1.0-0' }} FCFA</span>
            </div>
          }
          @if ((invoice.totalRabais ?? 0) > 0) {
            <div class="total-row" style="color:#e65100">
              <span>\u2212 Rabais HT accord\xE9s</span>
              <span>{{ invoice.totalRabais | number:'1.0-0' }} FCFA</span>
            </div>
            <div class="total-row" style="color:#e65100;font-weight:700">
              <span>\u2212 Rabais TTC d\xE9duit</span>
              <span>{{ (invoice.totalRabaisTTC ?? invoice.totalRabais) | number:'1.0-0' }} FCFA</span>
            </div>
          }
          <div class="total-row net-a-payer">
            <span>= Net \xE0 payer</span>
            <span>{{ (invoice.netAPayer ?? 0) | number:'1.0-0' }} FCFA</span>
          </div>
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

    <!-- Lettrage (rattachement \xE0 un versement existant) -->
    @if (isInvoice && invoice.state !== 'draft' && invoice.state !== 'cancelled') {
      <div class="card mb-16">
        <div class="card-header" style="display:flex;align-items:center;justify-content:space-between">
          <span style="display:flex;align-items:center;gap:6px">
            <span class="material-icons" style="font-size:18px;color:#0ea5e9">link</span>
            Rattachement de versements (Lettrage)
          </span>
          @if (invoice.state === 'posted') {
            <button class="btn-add-payment" style="background:#0ea5e9" (click)="openReconcileModal()">
              <span class="material-icons">add_link</span> Rattacher un versement
            </button>
          }
        </div>
        @if (reconciliations.length === 0) {
          <div class="no-payments" style="color:#64748b">
            Aucun versement rattach\xE9 \u2014 utilisez "Rattacher un versement" pour lettrer cette facture \xE0 une \xE9criture de caisse ou banque existante.
          </div>
        } @else {
          <table class="payments-table">
            <thead>
              <tr>
                <th>\xC9criture</th>
                <th>Date</th>
                <th>Journal</th>
                <th>R\xE9f.</th>
                <th class="text-right">Montant lettre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              @for (r of reconciliations; track r.id) {
                <tr>
                  <td class="font-mono">{{ r.accountMoveName }}</td>
                  <td>{{ r.date | date:'dd/MM/yyyy' }}</td>
                  <td>{{ r.journalName || '\u2014' }}</td>
                  <td class="text-muted">{{ r.accountMoveRef || '\u2014' }}</td>
                  <td class="text-right text-success font-bold">{{ r.amount | number:'1.0-0' }} FCFA</td>
                  <td>
                    <button class="btn-icon-danger" (click)="unreconcile(r.id)" title="D\xE9lettrer">
                      <span class="material-icons" style="font-size:16px">link_off</span>
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>
    }

    <app-audit-footer
      [createdBy]="invoice.createdBy"
      [createdAt]="invoice.createdAt"
      [updatedBy]="invoice.updatedBy"
      [updatedAt]="invoice.updatedAt">
    </app-audit-footer>

    <app-audit-trail entityType="SALE_INVOICE" [entityId]="invoice.id ?? null"></app-audit-trail>
  }
</div>

<!-- \u2550\u2550 Modal : Rattacher un versement (Lettrage) \u2550\u2550 -->
@if (showReconcileModal && invoice) {
  <div class="pay-overlay" (click).self="showReconcileModal = false">
    <div class="pay-modal" style="max-width:680px">
      <div class="pay-modal-hdr" style="background:linear-gradient(135deg,#0ea5e9,#0284c7)">
        <div class="pay-modal-title">
          <span class="material-icons">add_link</span>
          Rattacher un versement \xE0 {{ invoice.name }}
        </div>
        <button class="pay-modal-close" (click)="showReconcileModal = false">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="pay-modal-body">
        <div class="pay-summary" style="margin-bottom:16px">
          <div class="pay-sum-row">
            <span>Client</span><span>{{ invoice.partnerName }}</span>
          </div>
          <div class="pay-sum-row">
            <span>Reste d\xFB</span>
            <strong class="pay-due">{{ (invoice.montantDu || 0) | number:'1.0-0' }} FCFA</strong>
          </div>
        </div>
        <div style="font-size:13px;font-weight:600;color:#475569;margin-bottom:8px">
          Versements disponibles pour ce client
        </div>
        @if (loadingMoves) {
          <div style="text-align:center;padding:24px;color:#64748b">
            <span class="material-icons spin">refresh</span> Chargement...
          </div>
        } @else if (availableMoves.length === 0) {
          <div style="padding:16px;background:#f1f5f9;border-radius:8px;color:#64748b;font-size:13px;text-align:center">
            Aucun versement disponible pour ce client.<br>
            V\xE9rifiez qu'une \xE9criture de type "D\xE9bit Banque/Caisse \u2013 Cr\xE9dit Client" a bien \xE9t\xE9 valid\xE9e en comptabilit\xE9.
          </div>
        } @else {
          <div style="max-height:260px;overflow-y:auto;border:1px solid #e2e8f0;border-radius:8px">
            <table class="payments-table" style="margin:0">
              <thead>
                <tr>
                  <th>\xC9criture</th>
                  <th>Date</th>
                  <th>Journal</th>
                  <th class="text-right">Total vers\xE9</th>
                  <th class="text-right">D\xE9j\xE0 lettre</th>
                  <th class="text-right">Disponible</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (m of availableMoves; track m.moveId) {
                  <tr [class.selected-row]="selectedMove?.moveId === m.moveId" style="cursor:pointer" (click)="selectMove(m)">
                    <td class="font-mono">{{ m.moveName }}</td>
                    <td>{{ m.moveDate | date:'dd/MM/yyyy' }}</td>
                    <td>{{ m.journalName || '\u2014' }}</td>
                    <td class="text-right">{{ m.montantTotal | number:'1.0-0' }}</td>
                    <td class="text-right text-muted">{{ m.montantLettre | number:'1.0-0' }}</td>
                    <td class="text-right font-bold" style="color:#0ea5e9">{{ m.montantDisponible | number:'1.0-0' }}</td>
                    <td>
                      @if (selectedMove?.moveId === m.moveId) {
                        <span class="material-icons" style="color:#0ea5e9;font-size:18px">check_circle</span>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
        @if (selectedMove) {
          <div style="margin-top:16px;padding:12px;background:#f0f9ff;border-radius:8px;border:1px solid #bae6fd">
            <div style="font-size:13px;font-weight:600;color:#0284c7;margin-bottom:10px">
              Versement s\xE9lectionn\xE9 : {{ selectedMove.moveName }} \u2014 disponible : {{ selectedMove.montantDisponible | number:'1.0-0' }} FCFA
            </div>
            <div class="pay-form-grid" style="grid-template-columns:1fr 1fr">
              <div class="form-group">
                <label>Montant \xE0 lettrer <span class="required">*</span></label>
                <input #recAmtInput type="text" [value]="fmtM(reconcileForm.amount)"
                  (focus)="recAmtInput.value = reconcileForm.amount > 0 ? reconcileForm.amount.toString() : ''"
                  (input)="reconcileForm.amount = parseM(recAmtInput.value)"
                  (blur)="recAmtInput.value = fmtM(reconcileForm.amount)"
                  class="form-control" placeholder="0" />
              </div>
              <div class="form-group">
                <label>Date de lettrage</label>
                <input type="date" [(ngModel)]="reconcileForm.date" class="form-control" />
              </div>
            </div>
          </div>
        }
      </div>
      <div class="pay-modal-ftr">
        <button class="pay-btn-cancel" (click)="showReconcileModal = false">
          <span class="material-icons">close</span> Annuler
        </button>
        <button class="pay-btn-save" style="background:#0ea5e9"
          (click)="saveReconcile()"
          [disabled]="savingReconcile || !selectedMove || reconcileForm.amount <= 0">
          <span class="material-icons">{{ savingReconcile ? 'hourglass_empty' : 'add_link' }}</span>
          {{ savingReconcile ? 'Rattachement...' : 'Confirmer le rattachement' }}
        </button>
      </div>
    </div>
  </div>
}

<!-- \u2550\u2550 Modal : Enregistrer un paiement \u2550\u2550 -->
@if (showPaymentForm && invoice) {
  <div class="pay-overlay" (click).self="closePaymentForm()">
    <div class="pay-modal">
      <div class="pay-modal-hdr">
        <div class="pay-modal-title">
          <span class="material-icons">payments</span>
          {{ isAvoir ? 'Enregistrer un remboursement' : 'Enregistrer un paiement' }}
        </div>
        <button class="pay-modal-close" (click)="closePaymentForm()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="pay-modal-body">
        <div class="pay-summary">
          <div class="pay-sum-row">
            <span>{{ isAvoir ? 'Avoir' : 'Facture' }}</span><strong>{{ invoice.name }}</strong>
          </div>
          <div class="pay-sum-row">
            <span>Client</span><span>{{ invoice.partnerName }}</span>
          </div>
          <div class="pay-sum-row">
            <span>{{ isAvoir ? 'Cr\xE9dit disponible' : 'Reste d\xFB' }}</span>
            <strong class="pay-due">{{ (invoice.montantDu ?? invoice.totalTTC ?? 0) | number:'1.0-0' }} FCFA</strong>
          </div>
        </div>
        <div class="pay-form-grid">
          <div class="form-group">
            <label>Journal <span class="required">*</span></label>
            <select [(ngModel)]="payment.journalId" class="form-control">
              @for (j of cashBankJournals; track j.id) {
                <option [value]="j.id">{{ j.code }} \u2013 {{ j.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Date</label>
            <input type="date" [(ngModel)]="payment.date" class="form-control" />
          </div>
          <div class="form-group">
            <label>Montant <span class="required">*</span></label>
            <input #payAmtInput type="text" [value]="fmtM(payment.amount)"
              (focus)="payAmtInput.value = payment.amount > 0 ? payment.amount.toString() : ''"
              (input)="payment.amount = parseM(payAmtInput.value)"
              (blur)="payAmtInput.value = fmtM(payment.amount)"
              class="form-control" placeholder="0" />
          </div>
          <div class="form-group">
            <label>M\xE9mo / R\xE9f\xE9rence</label>
            <input type="text" [(ngModel)]="payment.memo" class="form-control" placeholder="N\xB0 ch\xE8que, virement..." />
          </div>
        </div>
      </div>
      <div class="pay-modal-ftr">
        <button class="pay-btn-cancel" (click)="closePaymentForm()">
          <span class="material-icons">close</span> Annuler
        </button>
        <button class="pay-btn-save" (click)="savePayment()" [disabled]="savingPayment">
          <span class="material-icons">{{ savingPayment ? 'hourglass_empty' : 'check_circle' }}</span>
          {{ savingPayment ? 'Enregistrement...' : 'Enregistrer' }}
        </button>
      </div>
    </div>
  </div>
}

<!-- \u2550\u2550 Modal : Appliquer un cr\xE9dit \u2550\u2550 -->
@if (showCreditForm && invoice) {
  <div class="pay-overlay" (click).self="showCreditForm = false">
    <div class="pay-modal">
      <div class="pay-modal-hdr credit-hdr">
        <div class="pay-modal-title">
          <span class="material-icons">redeem</span>
          Appliquer un cr\xE9dit
        </div>
        <button class="pay-modal-close" (click)="showCreditForm = false">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="pay-modal-body">
        <div class="credit-info-box">
          <div class="credit-info-row">
            <span>Cr\xE9dit disponible (total)</span>
            <strong class="credit-avail">{{ (invoice.partnerCreditDisponible || 0) | number:'1.0-0' }} FCFA</strong>
          </div>
          <div class="credit-info-row">
            <span>Reste d\xFB sur cette facture</span>
            <strong class="pay-due">{{ (invoice.montantDu || 0) | number:'1.0-0' }} FCFA</strong>
          </div>
        </div>

        <div class="form-group" style="margin-top:16px">
          <label>Avoir \xE0 imputer <span class="required">*</span></label>
          @if (loadingCredits) {
            <p class="text-muted" style="margin:8px 0">Chargement des avoirs disponibles\u2026</p>
          } @else if (availableCredits.length === 0) {
            <p class="text-muted" style="margin:8px 0">Aucun avoir disponible pour ce client.</p>
          } @else {
            <div class="credit-list">
              @for (c of availableCredits; track c.id) {
                <div class="credit-row" [class.selected]="selectedCreditId === c.id" (click)="selectCredit(c)">
                  <input type="radio" name="creditChoice" [checked]="selectedCreditId === c.id" />
                  <div class="credit-row-info">
                    <span class="credit-row-name">{{ c.name }}</span>
                    <span class="credit-row-date">{{ c.date }}</span>
                    @if (c.originalInvoiceName) {
                      <span class="credit-row-origin">\u2014 extourne de {{ c.originalInvoiceName }}</span>
                    }
                  </div>
                  <strong class="credit-row-amount">{{ c.montantDu | number:'1.0-0' }} FCFA</strong>
                </div>
              }
            </div>
          }
        </div>

        <div class="form-group" style="margin-top:16px">
          <label>Montant \xE0 compenser <span class="required">*</span></label>
          <input type="number" [(ngModel)]="creditAmount" class="form-control" min="0"
            [disabled]="!selectedCreditId"
            [max]="selectedCreditMax" step="1" />
        </div>
      </div>
      <div class="pay-modal-ftr">
        <button class="pay-btn-cancel" (click)="showCreditForm = false">
          <span class="material-icons">close</span> Annuler
        </button>
        <button class="pay-btn-save credit-save" (click)="applyCredit()" [disabled]="applyingCredit || creditAmount <= 0">
          <span class="material-icons">{{ applyingCredit ? 'hourglass_empty' : 'check_circle' }}</span>
          {{ applyingCredit ? 'Application...' : 'Appliquer le cr\xE9dit' }}
        </button>
      </div>
    </div>
  </div>
}

@if (showPrintModal && invoice) {
  <app-print-preview
    [invoice]="invoice"
    [docType]="printDocType"
    [companyName]="printCompanyName"
    [companyPhone]="printCompanyPhone"
    [companyLogoUrl]="printCompanyLogoUrl"
    [companyLogoDataUrl]="printCompanyLogoDataUrl"
    [companyInfo]="printCompany"
    (closed)="closePrint()">
  </app-print-preview>
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL AVOIR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showAvoirModal) {
  <div class="modal-overlay" (click)="closeAvoirModal()">
    <div class="avoir-modal" (click)="$event.stopPropagation()">
      <div class="avoir-modal-hdr">
        <div class="avoir-modal-title">
          <span class="material-icons">undo</span> Cr\xE9er un avoir
        </div>
        <button class="avoir-modal-close" (click)="closeAvoirModal()">
          <span class="material-icons">close</span>
        </button>
      </div>

      <div class="avoir-modal-body">
        <!-- Date de l'avoir -->
        <div class="avoir-date-row">
          <label>Date de l'avoir</label>
          <input type="date" class="form-control" [(ngModel)]="avoirDate">
        </div>

        <!-- Choix du type -->
        <div class="avoir-type-choice">
          <label class="avoir-type-option" [class.selected]="avoirType === 'integral'">
            <input type="radio" name="avoirType" value="integral" [(ngModel)]="avoirType">
            <span class="material-icons">article</span>
            <div>
              <strong>Avoir int\xE9gral</strong>
              <p>Annulation totale de la facture \u2014 toutes les lignes sont reprises int\xE9gralement.</p>
            </div>
          </label>
          <label class="avoir-type-option" [class.selected]="avoirType === 'partiel'">
            <input type="radio" name="avoirType" value="partiel" [(ngModel)]="avoirType">
            <span class="material-icons">edit_note</span>
            <div>
              <strong>Avoir partiel</strong>
              <p>Remboursement partiel \u2014 choisissez les quantit\xE9s \xE0 retourner.</p>
            </div>
          </label>
        </div>

        <!-- Lignes (avoir partiel) -->
        @if (avoirType === 'partiel') {
          <div class="avoir-lines-table">
            <table>
              <thead>
                <tr>
                  <th>D\xE9signation</th>
                  <th class="r">Qt\xE9 factur\xE9e</th>
                  <th class="r">Qt\xE9 avoir</th>
                </tr>
              </thead>
              <tbody>
                @for (line of avoirLines; track line.lineId) {
                  <tr [class.avoir-line-consigne]="line.isConsigne">
                    <td>
                      {{ line.description }}
                      @if (line.isConsigne) {
                        <span class="badge-consigne">Emballage</span>
                      }
                    </td>
                    <td class="r muted">{{ line.originalQty }}</td>
                    <td class="r">
                      <input type="number" class="avoir-qty-input"
                             [(ngModel)]="line.quantite"
                             [min]="0" [max]="line.originalQty"
                             step="1">
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }

        @if (errorMsg) {
          <div class="avoir-error">
            <span class="material-icons">error_outline</span>{{ errorMsg }}
          </div>
        }
      </div>

      <div class="avoir-modal-ftr">
        <button class="avoir-btn-cancel" (click)="closeAvoirModal()">Annuler</button>
        <button class="avoir-btn-confirm" (click)="confirmAvoir()" [disabled]="creatingAvoir">
          <span class="material-icons" [class.spin]="creatingAvoir">
            {{ creatingAvoir ? 'hourglass_empty' : 'check_circle' }}
          </span>
          {{ creatingAvoir ? 'Cr\xE9ation...' : 'Confirmer l\\'avoir' }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/sales/components/invoices/invoice-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header .header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 8px;\n}\n.page-header .ecriture-ref {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.page-header .ecriture-ref .material-icons {\n  font-size: 14px;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-back:hover {\n  background: var(--bg-hover);\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-print {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-print .material-icons {\n  font-size: 16px;\n}\n.btn-print:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-primary,\n.btn-secondary,\n.btn-danger,\n.btn-payment,\n.btn-avoir,\n.btn-warning,\n.btn-ristourne {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-danger .material-icons,\n.btn-payment .material-icons,\n.btn-avoir .material-icons,\n.btn-warning .material-icons,\n.btn-ristourne .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-danger:disabled,\n.btn-payment:disabled,\n.btn-avoir:disabled,\n.btn-warning:disabled,\n.btn-ristourne:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #017E84;\n}\n.btn-danger {\n  background: #dc3545;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #bb2d3b;\n}\n.btn-payment {\n  background: #0d6efd;\n  color: white;\n}\n.btn-payment:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-avoir {\n  background: #7C3AED;\n  color: white;\n}\n.btn-avoir:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-warning {\n  background: #fd7e14;\n  color: white;\n}\n.btn-warning:hover:not(:disabled) {\n  background: #e06912;\n}\n.btn-ristourne {\n  background: #c0392b;\n  color: white;\n}\n.btn-ristourne:hover:not(:disabled) {\n  background: #a93226;\n}\n.badge-type-avoir {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  border: 1px solid #d4c6f5;\n  letter-spacing: 0.5px;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid .info-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 180px;\n}\n.info-grid .info-card .info-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid .info-card .info-value {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.info-grid .info-card .info-value.font-bold {\n  font-weight: 600;\n}\n.info-grid .info-card .info-value.link {\n  color: var(--accent);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-grid .info-card.clickable {\n  cursor: pointer;\n}\n.info-grid .info-card.clickable:hover {\n  background: var(--bg-hover);\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.mt-12 {\n  margin-top: 12px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.lines-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-success {\n  color: #198754;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.badge.badge-paid {\n  background: var(--success-bg);\n  color: #0f5132;\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-extournee {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.badge.badge-partial-ext {\n  background: #fef3c7;\n  color: #92400e;\n}\n.bottom-section {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.no-payments {\n  padding: 32px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.amount-preview {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0ea5e9;\n  letter-spacing: 0.4px;\n}\n.payments-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.payments-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.payments-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.payments-table .payment-reversed td {\n  color: var(--text-muted);\n}\n.pay-action-cell {\n  width: 40px;\n  text-align: center;\n  padding: 4px 8px !important;\n}\n.btn-reverse-payment {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: 1px solid #fca5a5;\n  background: var(--danger-bg);\n  color: var(--danger);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-reverse-payment .material-icons {\n  font-size: 15px;\n}\n.btn-reverse-payment:hover {\n  background: var(--danger-bg);\n  border-color: #ef4444;\n}\n.badge-reversed {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  background: var(--danger-bg);\n  color: #991b1b;\n  border-radius: 8px;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.btn-add-payment {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-payment .material-icons {\n  font-size: 14px;\n}\n.btn-add-payment:hover {\n  background: var(--accent);\n}\n.payment-form-body {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .required {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--accent);\n}\n.payment-form-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.totals-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 18px 22px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n}\n.total-row:last-child {\n  border-bottom: none;\n}\n.total-row span:first-child {\n  color: var(--text-muted);\n}\n.total-row span:last-child {\n  font-weight: 500;\n  font-family: monospace;\n}\n.total-row.total-ttc {\n  border-top: 2px solid var(--accent);\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.total-row.total-ttc span:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.total-row.total-ttc span:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.total-row.text-success span {\n  color: #198754 !important;\n}\n.total-row.total-due span:first-child {\n  color: #dc3545 !important;\n  font-weight: 600;\n}\n.total-row.total-due span:last-child {\n  color: #dc3545 !important;\n  font-weight: 700;\n}\n.total-row.total-precompte span:last-child {\n  color: var(--warning);\n}\n.total-row.total-enlevement span:last-child {\n  color: var(--info);\n}\n.total-row.total-liquide {\n  background: var(--bg-hover);\n  padding: 8px 6px;\n  border-radius: 4px;\n}\n.total-row.total-liquide span:first-child {\n  font-weight: 600;\n  color: rgba(139, 92, 246, 0.9);\n}\n.total-row.total-liquide span:last-child {\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.total-row.total-ristourne span:last-child {\n  color: var(--danger);\n}\n.total-row.net-a-payer {\n  border-top: 2px solid #6f42c1;\n  margin-top: 4px;\n  padding-top: 10px;\n}\n.total-row.net-a-payer span:first-child {\n  font-size: 14px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.total-row.net-a-payer span:last-child {\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n}\n.progress-section {\n  margin-top: 16px;\n}\n.progress-section .progress-bar-lg {\n  height: 8px;\n  background: var(--bg-elevated);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-section .progress-bar-lg .progress-fill {\n  height: 100%;\n  background: var(--accent);\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.progress-section .progress-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  display: block;\n  text-align: right;\n}\n.recap-header {\n  gap: 8px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.recap-header .material-icons {\n  font-size: 18px;\n  color: var(--accent);\n}\n.recap-table tfoot td {\n  background: var(--bg-elevated);\n  font-size: 13px;\n  padding: 10px 14px;\n}\n.recap-total-row td {\n  border-top: 2px solid var(--border);\n}\n.col-psa {\n  color: rgba(139, 92, 246, 0.9);\n}\n.col-enl {\n  color: #0d6efd;\n}\n.col-liquide {\n  color: var(--accent);\n}\n.col-net {\n  color: var(--accent);\n}\n.col-ristourne {\n  color: var(--danger);\n}\n.ristourne-negative td,\n.ristourne-negative {\n  color: #7c3aed;\n  font-style: italic;\n}\n.ristourne-negative .col-ristourne {\n  color: #7c3aed;\n}\n.col-remise {\n  color: var(--danger);\n}\n.recap-global-wrapper {\n  overflow-x: auto;\n}\n.recap-global-table {\n  min-width: 1100px;\n}\n.recap-global-table th,\n.recap-global-table td {\n  white-space: nowrap;\n  padding: 8px 12px;\n  font-size: 13px;\n}\n.recap-global-table thead th {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  border-bottom: 2px solid var(--border);\n}\n.recap-global-table tbody tr {\n  background: var(--bg-surface);\n}\n.recap-global-table tbody tr:hover {\n  background: var(--bg-hover);\n}\n.badge-info-only {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 500;\n  background: var(--warning-bg);\n  color: var(--warning);\n  padding: 2px 10px;\n  border-radius: 10px;\n  border: 1px solid #ffc107;\n}\n.badge-type {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-type.badge-brasserie {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-type.badge-guinness {\n  background: #cff4fc;\n  color: #055160;\n}\n.badge-type.badge-brut {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.info-card.balance-positive {\n  border-left: 3px solid #dc3545;\n}\n.info-card.balance-negative {\n  border-left: 3px solid #198754;\n}\n.info-card.balance-zero {\n  border-left: 3px solid #6c757d;\n}\n.info-card.missing-field {\n  border: 1px solid #dc3545 !important;\n  background: var(--danger-bg);\n}\n.balance-tag {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 6px;\n}\n.balance-tag.balance-tag-debit {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.balance-tag.balance-tag-credit {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.balance-tag.balance-tag-zero {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.form-select-inline {\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 13px;\n  width: 100%;\n  cursor: pointer;\n  background: var(--bg-surface);\n  font-family: "Roboto", sans-serif;\n}\n.form-select-inline:focus {\n  outline: none;\n  border-color: var(--accent);\n}\n.pay-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.pay-modal {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.pay-modal-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-modal-hdr.credit-hdr .pay-modal-title .material-icons {\n  color: #017E84;\n}\n.pay-modal-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.pay-modal-title .material-icons {\n  color: #017E84;\n  font-size: 20px;\n}\n.pay-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.pay-modal-close:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.pay-modal-close .material-icons {\n  font-size: 20px;\n}\n.pay-modal-body {\n  padding: 20px;\n}\n.pay-summary {\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.pay-sum-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.pay-due {\n  color: var(--danger);\n  font-size: 14px;\n}\n.pay-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.credit-info-box {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n  border-radius: 8px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.credit-info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.credit-avail {\n  color: var(--success);\n  font-size: 14px;\n}\n.credit-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 220px;\n  overflow-y: auto;\n  margin-top: 6px;\n}\n.credit-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n}\n.credit-row:hover {\n  background: var(--bg-hover);\n}\n.credit-row.selected {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.credit-row input[type=radio] {\n  margin: 0;\n  flex-shrink: 0;\n}\n.credit-row-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.credit-row-name {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.credit-row-date {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.credit-row-origin {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.credit-row-amount {\n  color: var(--success);\n  font-size: 13px;\n  white-space: nowrap;\n}\n.pay-modal-ftr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-cancel .material-icons {\n  font-size: 16px;\n}\n.pay-btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.pay-btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-save .material-icons {\n  font-size: 16px;\n}\n.pay-btn-save:hover:not(:disabled) {\n  background: var(--accent);\n}\n.pay-btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.pay-btn-save.credit-save {\n  background: #017E84;\n}\n.pay-btn-save.credit-save:hover:not(:disabled) {\n  background: var(--accent);\n}\n.required-star {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.selected-row {\n  background: var(--primary-subtle) !important;\n  outline: 2px solid #0ea5e9;\n  outline-offset: -2px;\n}\n.btn-icon-danger {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--danger);\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.btn-icon-danger:hover {\n  background: var(--danger-bg);\n}\n.recon-divider {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n  border-top: 1px dashed #bee3f8;\n  background: var(--bg-hover);\n}\n.recon-divider .material-icons {\n  font-size: 15px;\n}\n.recon-amount {\n  color: #0ea5e9;\n  font-weight: 600;\n  font-family: monospace;\n}\n.taxe-tag {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.taxe-tag.taxe-tva {\n  background: var(--bg-active);\n  color: #0066cc;\n  border: 1px solid #b3d9f5;\n}\n.taxe-tag.taxe-guiness {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n  margin-left: 3px;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9100;\n  padding: 20px;\n}\n.avoir-modal {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 580px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.avoir-modal-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-modal-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.avoir-modal-title .material-icons {\n  color: var(--accent);\n  font-size: 20px;\n}\n.avoir-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.avoir-modal-close:hover {\n  background: var(--bg-elevated);\n}\n.avoir-modal-close .material-icons {\n  font-size: 20px;\n}\n.avoir-modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.avoir-date-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.avoir-date-row label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.avoir-date-row input {\n  flex: 0 0 160px;\n}\n.avoir-modal-ftr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-type-choice {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.avoir-type-option {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.avoir-type-option input[type=radio] {\n  display: none;\n}\n.avoir-type-option .material-icons {\n  font-size: 24px;\n  color: var(--text-muted);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.avoir-type-option strong {\n  font-size: 14px;\n  color: var(--text-primary);\n  display: block;\n  margin-bottom: 2px;\n}\n.avoir-type-option p {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.avoir-type-option:hover {\n  border-color: var(--accent);\n}\n.avoir-type-option.selected {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.avoir-type-option.selected .material-icons {\n  color: var(--accent);\n}\n.avoir-lines-table {\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.avoir-lines-table table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.avoir-lines-table th {\n  padding: 8px 12px;\n  background: var(--bg-hover);\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.avoir-lines-table td {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.avoir-lines-table tr:last-child td {\n  border-bottom: none;\n}\n.avoir-lines-table .avoir-line-consigne td {\n  background: #f8f4ff;\n}\n.avoir-lines-table .r {\n  text-align: right;\n}\n.avoir-lines-table .muted {\n  color: var(--text-muted);\n}\n.badge-consigne {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  background: #ede9ff;\n  color: #6d28d9;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  vertical-align: middle;\n}\n.avoir-qty-input {\n  width: 70px;\n  padding: 4px 8px;\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  text-align: right;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-qty-input:focus {\n  outline: none;\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.avoir-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.avoir-error .material-icons {\n  font-size: 16px;\n}\n.avoir-btn-cancel {\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.avoir-btn-confirm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-confirm .material-icons {\n  font-size: 16px;\n}\n.avoir-btn-confirm:hover:not(:disabled) {\n  background: var(--accent);\n}\n.avoir-btn-confirm:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin {\n  animation: spin-kf 1s linear infinite;\n}\n@keyframes spin-kf {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AccountingService }, { type: AuthService }, { type: CompanyService }, { type: StockService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailComponent, { className: "InvoiceDetailComponent", filePath: "app/modules/sales/components/invoices/invoice-detail.component.ts", lineNumber: 24 });
})();
export {
  InvoiceDetailComponent
};
//# sourceMappingURL=chunk-EZT4GB4L.js.map
