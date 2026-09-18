import {
  EnlevementService
} from "./chunk-4EAQGYLV.js";
import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
import {
  CONSIGNE_CODES,
  PrintPreviewComponent
} from "./chunk-ZYBKBHPO.js";
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

// src/app/modules/purchases/components/invoices/invoice-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.categoryName;
var _forTrack2 = ($index, $item) => $item.moveId;
var _forTrack3 = ($index, $item) => $item.lineId;
function PurchaseInvoiceDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
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
    \u0275\u0275elementStart(0, "span", 10)(1, "span", 5);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Extourn\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11)(1, "span", 5);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Partiellement extourn\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12)(1, "span", 5);
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
function PurchaseInvoiceDetailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12)(1, "span", 5);
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
function PurchaseInvoiceDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_15_Template_button_click_0_listener() {
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
function PurchaseInvoiceDetailComponent_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_16_Conditional_4_Template_button_click_0_listener() {
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
function PurchaseInvoiceDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.postInvoice());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PurchaseInvoiceDetailComponent_Conditional_16_Conditional_4_Template, 4, 1, "button", 25);
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
function PurchaseInvoiceDetailComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_17_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
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
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Cr\xE9dit (", \u0275\u0275pipeBind2(4, 1, ctx_r0.invoice == null ? null : ctx_r0.invoice.partnerCreditDisponible, "1.0-0"), ") ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Enregistrer un paiement ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PurchaseInvoiceDetailComponent_Conditional_17_Conditional_4_Template, 5, 4, "button", 28);
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAvoirModal());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 30);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateRemises());
    });
    \u0275\u0275elementStart(10, "span", 5);
    \u0275\u0275text(11, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((ctx_r0.invoice == null ? null : ctx_r0.invoice.partnerCreditDisponible) || 0) > 0 && ((ctx_r0.invoice == null ? null : ctx_r0.invoice.montantDu) || 0) > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.creatingAvoir);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.creatingAvoir ? "Cr\xE9ation..." : "Cr\xE9er un avoir", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.generatingRemises);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.generatingRemises ? "G\xE9n\xE9ration..." : "G\xE9n\xE9rer remises", " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAvoirModal());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 30);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateRemises());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.creatingAvoir);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.creatingAvoir ? "Cr\xE9ation..." : "Cr\xE9er un avoir", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.generatingRemises);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.generatingRemises ? "G\xE9n\xE9ration..." : "G\xE9n\xE9rer remises", " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_19_Conditional_0_Template_button_click_0_listener() {
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
function PurchaseInvoiceDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, PurchaseInvoiceDetailComponent_Conditional_19_Conditional_0_Template, 4, 0, "button", 32);
    \u0275\u0275elementStart(1, "button", 29);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_19_Template_button_click_1_listener() {
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
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
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
function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_20_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
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
function PurchaseInvoiceDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_0_Template, 4, 0, "button", 32);
    \u0275\u0275conditionalCreate(1, PurchaseInvoiceDetailComponent_Conditional_20_Conditional_1_Template, 4, 2, "button", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hasSoldeDu ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canCancelInvoice ? 1 : -1);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
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
function PurchaseInvoiceDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 5);
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
function PurchaseInvoiceDetailComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 5);
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
function PurchaseInvoiceDetailComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 34);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 5);
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
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "On lui doit");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Il nous doit");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "Sold\xE9");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_11_Template(rf, ctx) {
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
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 66);
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Solde fournisseur ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275conditionalCreate(8, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_8_Template, 2, 0, "span", 67)(9, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_9_Template, 2, 0, "span", 68)(10, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_10_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Conditional_11_Template, 5, 4, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.partnerBalanceClass);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, ctx_r0.invoice.partnerBalance || 0, "1.0-0"), " FCFA ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.invoice.partnerBalance || 0) < 0 ? 8 : (ctx_r0.invoice.partnerBalance || 0) > 0 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.invoice.partnerCreditDisponible || 0) > 0 ? 11 : -1);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 66);
    \u0275\u0275text(3, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Entrep\xF4t de r\xE9ception ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.invoice.receptionWarehouseName);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewOrder());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275text(2, "Commande d'achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.invoice.purchaseOrderName);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2, "Facture d'origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_27_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r14);
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
function PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r15.rabaisUnitaire, "1.0-0"), " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r15.totalRabaisLigne, "1.0-0"), " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 46);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 76);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 77);
    \u0275\u0275conditionalCreate(12, PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_12_Template, 2, 4)(13, PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 46);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 77);
    \u0275\u0275conditionalCreate(20, PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_20_Template, 2, 4)(21, PurchaseInvoiceDetailComponent_Conditional_25_For_56_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 76);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 76);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r15.productCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r15.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, line_r15.quantity, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 13, ctx_r0.linePrixCatalogue(line_r15), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r15.rabaisUnitaire ?? 0) > 0 ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", line_r15.tauxTVA || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 16, ctx_r0.lineTotalCatalogueHT(line_r15), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r15.totalRabaisLigne ?? 0) > 0 ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 19, ctx_r0.lineNetHT(line_r15), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 22, ctx_r0.lineNetTTC(line_r15), "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_57_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 47);
    \u0275\u0275text(1, "Rabais HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 84);
    \u0275\u0275text(3, "Rabais TTC");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_57_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 85);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(2, 2, ctx_r0.totalRabaisHTCalc, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(5, 5, ctx_r0.totalRabaisTTCCalc, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78)(2, "span", 5);
    \u0275\u0275text(3, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " R\xE9capitulatif ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 79)(6, "table", 80)(7, "thead")(8, "tr")(9, "th", 46);
    \u0275\u0275text(10, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 46);
    \u0275\u0275text(12, "Total TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 81);
    \u0275\u0275text(14, "PSA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 46);
    \u0275\u0275text(16, "Total Colis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 46);
    \u0275\u0275text(18, "Total PET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 46);
    \u0275\u0275text(20, "Total Casier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 46);
    \u0275\u0275text(22, "Total Liquide Nu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 76);
    \u0275\u0275text(24, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 46);
    \u0275\u0275text(26, "Consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 46);
    \u0275\u0275text(28, "D\xE9consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 46);
    \u0275\u0275text(30, "Qt\xE9 Consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 46);
    \u0275\u0275text(32, "Qt\xE9 D\xE9consigne");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_57_Conditional_33_Template, 4, 0);
    \u0275\u0275elementStart(34, "th", 82);
    \u0275\u0275text(35, "Net \xE0 payer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody")(37, "tr", 83)(38, "td", 46);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td", 46);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td", 81);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td", 46);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td", 46);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td", 46);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td", 46);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td", 76);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td", 46);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td", 46);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td", 46);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 46);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(74, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_57_Conditional_74_Template, 6, 8);
    \u0275\u0275elementStart(75, "td", 82)(76, "strong");
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "number");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(33);
    \u0275\u0275conditional(ctx_r0.totalRabaisHTCalc > 0 ? 33 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 15, ctx_r0.invoice.totalHT ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 18, ctx_r0.invoice.totalTVA ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 21, ctx_r0.invoice.totalPrecompte ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 24, ctx_r0.totalColis, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 27, ctx_r0.totalPET, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 30, ctx_r0.totalCasier, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 33, ctx_r0.invoice.totalLiquideNu ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 36, ctx_r0.invoice.totalTTC ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 39, ctx_r0.consigneMontant, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 42, ctx_r0.deconsigneMontant, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 45, ctx_r0.qteConsigne, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 48, ctx_r0.qteDeconsigne, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalRabaisHTCalc > 0 ? 74 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 51, ctx_r0.invoice.netAPayer ?? 0, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_58_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 46);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 89);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 87)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r16.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-type badge-" + (r_r16.typeRemise || "brut"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r16.typeRemise === "brasserie" ? "Brasserie" : r_r16.typeRemise === "guinness" ? "Guinness" : "HT brut", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, r_r16.quantite, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 10, r_r16.montantUnitaire, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 13, r_r16.montantTotal, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78)(2, "span", 5);
    \u0275\u0275text(3, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Remises fournisseur ");
    \u0275\u0275elementStart(5, "span", 86);
    \u0275\u0275text(6, "calcul\xE9es & conserv\xE9es \u2014 non incluses dans la facture");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "table", 45)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 46);
    \u0275\u0275text(17, "Montant/U. TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 87);
    \u0275\u0275text(19, "Total remise");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_58_For_22_Template, 16, 16, "tr", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "tfoot")(24, "tr", 83)(25, "td", 88)(26, "strong");
    \u0275\u0275text(27, "Total remises (informatif)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 87)(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.invoice.remiseDetails);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(31, 1, ctx_r0.invoice.totalRemise ?? 0, "1.0-0"), " FCFA");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_59_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 89);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 87)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r17.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, c_r17.quantite, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, c_r17.montantUnitaire, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 10, c_r17.montantTotal, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 78)(2, "span", 5);
    \u0275\u0275text(3, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Co\xFBts d'enl\xE8vement ");
    \u0275\u0275elementStart(5, "span", 86);
    \u0275\u0275text(6, "calcul\xE9s \xE0 titre informatif \u2014 non inclus dans la facture");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "table", 45)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 46);
    \u0275\u0275text(13, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "Tarif/U. (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 87);
    \u0275\u0275text(17, "Total enl\xE8vement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_59_For_20_Template, 13, 13, "tr", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr", 83)(23, "td", 90)(24, "strong");
    \u0275\u0275text(25, "Total enl\xE8vements (informatif)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 87)(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.enlevementCosts);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(29, 1, ctx_r0.totalEnlevement, "1.0-0"), " FCFA");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_66_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPaymentForm());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, "Aucun paiement enregistr\xE9");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "Annul\xE9");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_For_16_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_For_16_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const p_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.reversePayment(p_r20.id));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 76);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275conditionalCreate(13, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_For_16_Conditional_13_Template, 2, 0, "span", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275conditionalCreate(15, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_For_16_Conditional_15_Template, 3, 0, "button", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    \u0275\u0275classProp("payment-reversed", p_r20.state === "reversed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, p_r20.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r20.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r20.memo || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", p_r20.state !== "reversed")("text-muted", p_r20.state === "reversed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 16, p_r20.amount, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r20.state === "reversed" ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r20.state !== "reversed" ? 15 : -1);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 53)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementStart(11, "th", 46);
    \u0275\u0275text(12, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_For_16_Template, 16, 19, "tr", 93, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.invoice.payments);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_69_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 100);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r21.accountMoveName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, r_r21.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r21.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r21.accountMoveRef || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 8, r_r21.amount, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 5);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Versements rattach\xE9s (lettrage) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "table", 53)(5, "tbody");
    \u0275\u0275repeaterCreate(6, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_69_For_7_Template, 13, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.reconciliations);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span");
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
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span");
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
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span");
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
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 101);
    \u0275\u0275element(2, "div", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 103);
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
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_123_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openReconcileModal());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "add_link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Rattacher un versement ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, "Aucun versement rattach\xE9");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_125_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 104);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 105);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_125_For_16_Template_button_click_14_listener() {
      const r_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.unreconcile(r_r24.id));
    });
    \u0275\u0275elementStart(15, "span", 5);
    \u0275\u0275text(16, "link_off");
    \u0275\u0275elementEnd()()()();
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 8, r_r24.amount, "1.0-0"), " FCFA");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 53)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 46);
    \u0275\u0275text(12, "Montant rattach\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_125_For_16_Template, 17, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.reconciliations);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_0_Template, 6, 1, "div", 35);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37)(3, "div", 38);
    \u0275\u0275text(4, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_7_Template, 12, 8, "div", 40);
    \u0275\u0275elementStart(8, "div", 37)(9, "div", 38);
    \u0275\u0275text(10, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_13_Template, 7, 1, "div", 37);
    \u0275\u0275elementStart(14, "div", 37)(15, "div", 38);
    \u0275\u0275text(16, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 41);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 37)(21, "div", 38);
    \u0275\u0275text(22, "\xC9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 41);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_26_Template, 5, 1, "div", 42);
    \u0275\u0275conditionalCreate(27, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_27_Template, 5, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 43)(29, "div", 44);
    \u0275\u0275text(30, "Lignes de facturation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "table", 45)(32, "thead")(33, "tr")(34, "th");
    \u0275\u0275text(35, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "D\xE9signation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 46);
    \u0275\u0275text(39, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 46);
    \u0275\u0275text(41, "P.U. HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 47);
    \u0275\u0275text(43, "Rabais/u HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 46);
    \u0275\u0275text(45, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 46);
    \u0275\u0275text(47, "Total Cat. HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 47);
    \u0275\u0275text(49, "\u2212 Rabais HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 46);
    \u0275\u0275text(51, "= Net HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 46);
    \u0275\u0275text(53, "Net TTC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "tbody");
    \u0275\u0275repeaterCreate(55, PurchaseInvoiceDetailComponent_Conditional_25_For_56_Template, 28, 25, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(57, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_57_Template, 79, 54, "div", 43);
    \u0275\u0275conditionalCreate(58, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_58_Template, 32, 4, "div", 43);
    \u0275\u0275conditionalCreate(59, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_59_Template, 30, 4, "div", 43);
    \u0275\u0275elementStart(60, "div", 48)(61, "div", 49)(62, "div", 50)(63, "div", 44)(64, "span");
    \u0275\u0275text(65, "Paiements fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(66, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_66_Template, 4, 0, "button", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(67, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_67_Template, 2, 0, "div", 52)(68, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_68_Template, 17, 0, "table", 53);
    \u0275\u0275conditionalCreate(69, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_69_Template, 8, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 54)(71, "div", 55)(72, "div", 56)(73, "span");
    \u0275\u0275text(74, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 56)(79, "span");
    \u0275\u0275text(80, "+ TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(84, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_84_Template, 6, 4, "div", 57);
    \u0275\u0275elementStart(85, "div", 58)(86, "span");
    \u0275\u0275text(87, "= Total Liquide Nu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 59)(92, "span");
    \u0275\u0275text(93, "= Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(97, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_97_Template, 6, 4, "div", 56);
    \u0275\u0275conditionalCreate(98, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_98_Template, 6, 4, "div", 56);
    \u0275\u0275elementStart(99, "div", 60)(100, "span");
    \u0275\u0275text(101, "= Net \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 61)(106, "span");
    \u0275\u0275text(107, "Montant pay\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span");
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 56)(112, "span");
    \u0275\u0275text(113, "Reste d\xFB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span");
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(117, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_117_Template, 5, 3, "div", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 43)(119, "div", 44)(120, "span", 63);
    \u0275\u0275text(121, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, " Rattachement de versements (Lettrage) ");
    \u0275\u0275conditionalCreate(123, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_123_Template, 4, 0, "button", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(124, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_124_Template, 2, 0, "div", 52)(125, PurchaseInvoiceDetailComponent_Conditional_25_Conditional_125_Template, 17, 0, "table", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275element(126, "app-audit-footer", 64)(127, "app-audit-trail", 65);
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
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.receptionWarehouseName ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 35, ctx_r0.invoice.date, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.invoice.dateEcheance ? \u0275\u0275pipeBind2(25, 38, ctx_r0.invoice.dateEcheance, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invoice.purchaseOrderName ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.originalInvoiceName ? 27 : -1);
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r0.invoice.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invoice.lines && ctx_r0.invoice.lines.length > 0 ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoice.remiseDetails && ctx_r0.invoice.remiseDetails.length > 0 ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.enlevementCosts.length > 0 ? 59 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" || ctx_r0.invoice.state === "partiellement_extournee" ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((!ctx_r0.invoice.payments || ctx_r0.invoice.payments.length === 0) && (!ctx_r0.reconciliations || ctx_r0.reconciliations.length === 0) ? 67 : 68);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.reconciliations && ctx_r0.reconciliations.length > 0 ? 69 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(77, 41, ctx_r0.invoice.totalHT ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(83, 44, ctx_r0.invoice.totalTVA ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.invoice.totalPrecompte ?? 0) > 0 ? 84 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(90, 47, ctx_r0.invoice.totalLiquideNu ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(96, 50, ctx_r0.invoice.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.consigneMontant > 0 ? 97 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.deconsigneMontant > 0 ? 98 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(104, 53, ctx_r0.invoice.netAPayer ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(110, 56, ctx_r0.invoice.montantPaye, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("total-due", (ctx_r0.invoice.montantDu || 0) > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(116, 59, ctx_r0.invoice.montantDu, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" || ctx_r0.invoice.state === "paid" || ctx_r0.invoice.state === "partiellement_extournee" ? 117 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.invoice.state === "posted" || ctx_r0.invoice.state === "partiellement_extournee" ? 123 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.reconciliations || ctx_r0.reconciliations.length === 0 ? 124 : 125);
    \u0275\u0275advance(2);
    \u0275\u0275property("createdBy", ctx_r0.invoice.createdBy)("createdAt", ctx_r0.invoice.createdAt)("updatedBy", ctx_r0.invoice.updatedBy)("updatedAt", ctx_r0.invoice.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275property("entityId", ctx_r0.invoice.id ?? null);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_26_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r26 = ctx.$implicit;
    \u0275\u0275property("value", j_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r26.code, " \u2013 ", j_r26.name);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 106)(2, "div", 107)(3, "div", 108)(4, "span", 5);
    \u0275\u0275text(5, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 109);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentForm());
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 110)(11, "div", 111)(12, "div", 112)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 112)(18, "span");
    \u0275\u0275text(19, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 112)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong", 113);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 114)(29, "div", 115)(30, "label");
    \u0275\u0275text(31, "Journal ");
    \u0275\u0275elementStart(32, "span", 116);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "select", 117);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_26_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.journalId, $event) || (ctx_r0.payment.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(35, PurchaseInvoiceDetailComponent_Conditional_26_For_36_Template, 2, 3, "option", 118, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 115)(38, "label");
    \u0275\u0275text(39, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_26_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.date, $event) || (ctx_r0.payment.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 115)(42, "label");
    \u0275\u0275text(43, "Montant ");
    \u0275\u0275elementStart(44, "span", 116);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "input", 120, 0);
    \u0275\u0275listener("focus", function PurchaseInvoiceDetailComponent_Conditional_26_Template_input_focus_46_listener() {
      \u0275\u0275restoreView(_r25);
      const payAmtInput_r27 = \u0275\u0275reference(47);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(payAmtInput_r27.value = ctx_r0.payment.amount > 0 ? ctx_r0.payment.amount.toString() : "");
    })("input", function PurchaseInvoiceDetailComponent_Conditional_26_Template_input_input_46_listener() {
      \u0275\u0275restoreView(_r25);
      const payAmtInput_r27 = \u0275\u0275reference(47);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.payment.amount = ctx_r0.parseM(payAmtInput_r27.value));
    })("blur", function PurchaseInvoiceDetailComponent_Conditional_26_Template_input_blur_46_listener() {
      \u0275\u0275restoreView(_r25);
      const payAmtInput_r27 = \u0275\u0275reference(47);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(payAmtInput_r27.value = ctx_r0.fmtM(ctx_r0.payment.amount));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 115)(49, "label");
    \u0275\u0275text(50, "M\xE9mo / R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 121);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_26_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.payment.memo, $event) || (ctx_r0.payment.memo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 122)(53, "button", 123);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_26_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentForm());
    });
    \u0275\u0275elementStart(54, "span", 5);
    \u0275\u0275text(55, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 124);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_26_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r25);
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.isAvoir ? "Enregistrer un remboursement fournisseur" : "Nouveau paiement fournisseur", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.isAvoir ? "Avoir" : "Facture");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.invoice.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.invoice.partnerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isAvoir ? "Reste \xE0 recevoir" : "Reste d\xFB");
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
function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 34);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des versements... ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, "Aucun versement disponible pour ce fournisseur");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_25_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 133);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_25_For_22_Template_tr_click_0_listener() {
      const m_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectMove(m_r30));
    });
    \u0275\u0275elementStart(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 134);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 104);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
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
    \u0275\u0275textInterpolate(m_r30.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r30.moveRef || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 12, m_r30.montantTotal, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 15, m_r30.montantLettre, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 18, m_r30.montantDisponible, "1.0-0"));
  }
}
function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 129);
    \u0275\u0275text(1, " S\xE9lectionnez un versement \xE0 rattacher \xE0 cette facture : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 130)(3, "table", 53)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "R\xE9f.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 46);
    \u0275\u0275text(17, "Lettr\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 131);
    \u0275\u0275text(19, "Disponible");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, PurchaseInvoiceDetailComponent_Conditional_27_Conditional_25_For_22_Template, 19, 21, "tr", 132, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.availableMoves);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 115)(2, "label");
    \u0275\u0275text(3, "Montant \xE0 rattacher ");
    \u0275\u0275elementStart(4, "span", 116);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 120, 1);
    \u0275\u0275listener("focus", function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_26_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r31);
      const recAmtInput_r32 = \u0275\u0275reference(7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(recAmtInput_r32.value = ctx_r0.reconcileForm.amount > 0 ? ctx_r0.reconcileForm.amount.toString() : "");
    })("input", function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_26_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r31);
      const recAmtInput_r32 = \u0275\u0275reference(7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reconcileForm.amount = ctx_r0.parseM(recAmtInput_r32.value));
    })("blur", function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_26_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r31);
      const recAmtInput_r32 = \u0275\u0275reference(7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(recAmtInput_r32.value = ctx_r0.fmtM(ctx_r0.reconcileForm.amount));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 135);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 115)(12, "label");
    \u0275\u0275text(13, "Date de rattachement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_27_Conditional_26_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.reconcileForm.date, $event) || (ctx_r0.reconcileForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.fmtM(ctx_r0.reconcileForm.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Max : ", \u0275\u0275pipeBind2(10, 3, ctx_r0.Math.min(ctx_r0.invoice.montantDu || 0, ctx_r0.selectedMove.montantDisponible), "1.0-0"), " FCFA ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reconcileForm.date);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 125)(2, "div", 107)(3, "div", 108)(4, "span", 5);
    \u0275\u0275text(5, "add_link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 109);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showReconcileModal = false);
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 110)(11, "div", 126)(12, "div", 112)(13, "span");
    \u0275\u0275text(14, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 112)(18, "span");
    \u0275\u0275text(19, "Reste d\xFB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong", 113);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(23, PurchaseInvoiceDetailComponent_Conditional_27_Conditional_23_Template, 4, 0, "div", 127)(24, PurchaseInvoiceDetailComponent_Conditional_27_Conditional_24_Template, 2, 0, "div", 52)(25, PurchaseInvoiceDetailComponent_Conditional_27_Conditional_25_Template, 23, 0);
    \u0275\u0275conditionalCreate(26, PurchaseInvoiceDetailComponent_Conditional_27_Conditional_26_Template, 15, 6, "div", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 122)(28, "button", 123);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_27_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showReconcileModal = false);
    });
    \u0275\u0275elementStart(29, "span", 5);
    \u0275\u0275text(30, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 124);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_27_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveReconcile());
    });
    \u0275\u0275elementStart(33, "span", 5);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Rattacher un versement \xE0 la facture ", ctx_r0.invoice.name, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.invoice.partnerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 8, ctx_r0.invoice.montantDu ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loadingMoves ? 23 : ctx_r0.availableMoves.length === 0 ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.selectedMove ? 26 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.savingReconcile || !ctx_r0.selectedMove || ctx_r0.reconcileForm.amount <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.savingReconcile ? "hourglass_empty" : "link");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingReconcile ? "Rattachement..." : "Confirmer le rattachement", " ");
  }
}
function PurchaseInvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 154);
    \u0275\u0275text(1, "Emballage");
    \u0275\u0275elementEnd();
  }
}
function PurchaseInvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, PurchaseInvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Conditional_3_Template, 2, 0, "span", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 152)(7, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Template_input_ngModelChange_7_listener($event) {
      const line_r35 = \u0275\u0275restoreView(_r34).$implicit;
      \u0275\u0275twoWayBindingSet(line_r35.quantite, $event) || (line_r35.quantite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const line_r35 = ctx.$implicit;
    \u0275\u0275classProp("avoir-line-consigne", line_r35.isConsigne);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", line_r35.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r35.isConsigne ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r35.originalQty);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r35.quantite);
    \u0275\u0275property("min", 0)("max", line_r35.originalQty);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_28_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "D\xE9signation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 152);
    \u0275\u0275text(7, "Qt\xE9 factur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 152);
    \u0275\u0275text(9, "Qt\xE9 avoir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, PurchaseInvoiceDetailComponent_Conditional_28_Conditional_34_For_12_Template, 8, 8, "tr", 153, _forTrack3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.avoirLines);
  }
}
function PurchaseInvoiceDetailComponent_Conditional_28_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148)(1, "span", 5);
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
function PurchaseInvoiceDetailComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAvoirModal());
    });
    \u0275\u0275elementStart(1, "div", 137);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 138)(3, "div", 139)(4, "span", 5);
    \u0275\u0275text(5, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Cr\xE9er un avoir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 140);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_28_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAvoirModal());
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 141)(11, "div", 142)(12, "label");
    \u0275\u0275text(13, "Date de l'avoir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_28_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.avoirDate, $event) || (ctx_r0.avoirDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 143)(16, "label", 144)(17, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_28_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r33);
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
    \u0275\u0275elementStart(25, "label", 144)(26, "input", 146);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseInvoiceDetailComponent_Conditional_28_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r33);
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
    \u0275\u0275conditionalCreate(34, PurchaseInvoiceDetailComponent_Conditional_28_Conditional_34_Template, 13, 0, "div", 147);
    \u0275\u0275conditionalCreate(35, PurchaseInvoiceDetailComponent_Conditional_28_Conditional_35_Template, 4, 1, "div", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 149)(37, "button", 150);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_28_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAvoirModal());
    });
    \u0275\u0275text(38, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 151);
    \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Conditional_28_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r33);
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
function PurchaseInvoiceDetailComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-print-preview", 157);
    \u0275\u0275listener("closed", function PurchaseInvoiceDetailComponent_Conditional_29_Template_app_print_preview_closed_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePrint());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("purchaseInvoice", ctx_r0.invoice)("docType", ctx_r0.printDocType)("companyName", ctx_r0.printCompanyName)("companyPhone", ctx_r0.printCompanyPhone)("companyLogoUrl", ctx_r0.printCompanyLogoUrl)("companyLogoDataUrl", ctx_r0.printCompanyLogoDataUrl)("companyInfo", ctx_r0.printCompany);
  }
}
var PurchaseInvoiceDetailComponent = class _PurchaseInvoiceDetailComponent {
  get totalEnlevement() {
    return this.enlevementCosts.reduce((s, l) => s + (l.montantTotal ?? 0), 0);
  }
  constructor(purchaseService, accountingService, authService, companyService, enlevementService, route, router) {
    this.purchaseService = purchaseService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.companyService = companyService;
    this.enlevementService = enlevementService;
    this.route = route;
    this.router = router;
    this.invoice = null;
    this.cashBankJournals = [];
    this.loading = false;
    this.posting = false;
    this.cancelling = false;
    this.reversing = false;
    this.creatingAvoir = false;
    this.generatingRemises = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.showAvoirModal = false;
    this.avoirType = "integral";
    this.avoirDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.avoirLines = [];
    this.showCreditForm = false;
    this.creditAmount = 0;
    this.applyingCredit = false;
    this.showPrintModal = false;
    this.reconciliations = [];
    this.showReconcileModal = false;
    this.availableMoves = [];
    this.loadingMoves = false;
    this.reconcileForm = { moveId: 0, amount: 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] };
    this.savingReconcile = false;
    this.selectedMove = null;
    this.Math = Math;
    this.showPaymentForm = false;
    this.payment = {
      journalId: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      amount: 0,
      memo: ""
    };
    this.savingPayment = false;
    this.enlevementCosts = [];
    this.CONSIGNE_CODES = CONSIGNE_CODES;
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
        this.loadReconciliations();
        if (data.state === "posted" || data.state === "paid") {
          this.loadEnlevementCosts();
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadEnlevementCosts() {
    this.enlevementService.getInvoiceCosts(this.invoiceId).subscribe({
      next: (costs) => {
        this.enlevementCosts = costs;
      },
      error: () => {
        this.enlevementCosts = [];
      }
    });
  }
  loadReconciliations() {
    this.purchaseService.getReconciliations(this.invoiceId).subscribe({
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
      missing.push("Fournisseur");
    if (!this.invoice.journalId)
      missing.push("Journal");
    if (!this.invoice.date)
      missing.push("Date");
    if (!this.invoice.lines || this.invoice.lines.length === 0)
      missing.push("Lignes de facturation");
    return missing;
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
        this.loadEnlevementCosts();
        this.showSuccess(this.isAvoir ? "Avoir valid\xE9 \u2014 \xE9criture comptable cr\xE9\xE9e" : "Facture valid\xE9e \u2014 \xE9criture comptable cr\xE9\xE9e");
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || "Erreur lors de la validation";
      }
    });
  }
  cancelInvoice() {
    const doc = this.isAvoir ? "cet avoir" : "cette facture";
    const stockNote = this.isAvoir ? " Le stock retourn\xE9 au fournisseur sera r\xE9int\xE9gr\xE9." : "";
    const hasEntries = this.invoice?.accountMoveId;
    const msg = hasEntries ? `Annuler ${doc} ?${stockNote} Les \xE9critures comptables NE seront PAS automatiquement invers\xE9es. Vous devrez cliquer sur "Inverser les \xE9critures" ensuite.` : `Annuler ${doc} ?`;
    if (!confirm(msg))
      return;
    this.cancelling = true;
    this.purchaseService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess((this.isAvoir ? "Avoir annul\xE9 \u2014 stock r\xE9int\xE9gr\xE9." : "Document annul\xE9.") + ' Cliquez sur "Inverser les \xE9critures" pour extourner les \xE9critures comptables.');
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
        this.showSuccess(this.isAvoir ? "Remboursement enregistr\xE9" : "Paiement enregistr\xE9");
        this.loadInvoice();
      },
      error: (err) => {
        this.savingPayment = false;
        this.errorMsg = err.error?.message || "Erreur lors du paiement";
      }
    });
  }
  reversePayment(paymentId) {
    if (!confirm("Annuler ce paiement ? Une \xE9criture comptable inverse sera g\xE9n\xE9r\xE9e."))
      return;
    this.errorMsg = "";
    this.purchaseService.reversePayment(paymentId).subscribe({
      next: () => {
        this.showSuccess("Paiement annul\xE9 \u2014 \xE9criture comptable inverse cr\xE9\xE9e");
        this.loadInvoice();
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors de l'annulation";
      }
    });
  }
  generateRemises() {
    if (!confirm("G\xE9n\xE9rer un r\xE8glement remise \xE0 partir de cette facture ?"))
      return;
    this.generatingRemises = true;
    this.errorMsg = "";
    this.purchaseService.generateRemises(this.invoiceId).subscribe({
      next: (rms) => {
        this.generatingRemises = false;
        this.showSuccess(`R\xE8glement remise ${rms.name} cr\xE9\xE9 (brouillon)`);
      },
      error: (err) => {
        this.generatingRemises = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration des remises";
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
    this.purchaseService.createAvoirFromInvoice(this.invoiceId, req).subscribe({
      next: (avoir) => {
        this.creatingAvoir = false;
        this.showAvoirModal = false;
        this.showSuccess(`Avoir ${avoir.name} cr\xE9\xE9`);
        setTimeout(() => this.router.navigate(["/purchases/invoices", avoir.id]), 1e3);
      },
      error: (err) => {
        this.creatingAvoir = false;
        this.errorMsg = err.error?.message || "Erreur lors de la cr\xE9ation de l'avoir";
      }
    });
  }
  openCreditForm() {
    this.creditAmount = Math.min(this.invoice?.montantDu ?? 0, this.invoice?.partnerCreditDisponible ?? 0);
    this.showCreditForm = true;
  }
  applyCredit() {
    if (!this.creditAmount || this.creditAmount <= 0)
      return;
    this.applyingCredit = true;
    this.errorMsg = "";
    this.purchaseService.applyCredit(this.invoiceId, this.creditAmount, this.authService.getCompanyId()).subscribe({
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
  get isInvoice() {
    return !this.invoice?.type || this.invoice.type === "invoice";
  }
  get isAvoir() {
    return this.invoice?.type === "credit_note";
  }
  /** Reste-t-il un solde dû après un avoir partiel (permet d'afficher "Enregistrer un paiement"). */
  get hasSoldeDu() {
    return (this.invoice?.montantDu ?? 0) > 0;
  }
  /**
   * Droit d'annuler une facture d'achat (ACHATS/FACTURES/CANCEL). Sans ce droit,
   * l'utilisateur doit passer par l'extourne. Les rôles privilégiés l'ont toujours.
   */
  get canCancelInvoice() {
    return this.authService.hasPermission("ACHATS", "FACTURES", "CANCEL");
  }
  get printDocType() {
    return "purchase_invoice";
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
    return n > 0 ? new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) : "";
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
  /** Total PET = articles avec UOM Palette de 6, Palette de 12, Bidons */
  get totalPET() {
    return this.invoice?.lines.filter((l) => !this.isConsigneCode(l.productCode) && this.isPETCategory(l.categoryName)).reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }
  isPETCategory(name) {
    if (!name)
      return false;
    const n = name.toLowerCase();
    return n.includes("palette") || n.includes("bidon");
  }
  /** Total Casier = articles avec UOM Casier de 12 ou Casier de 24 */
  get totalCasier() {
    return this.invoice?.lines.filter((l) => !this.isConsigneCode(l.productCode) && this.isCasierCategory(l.categoryName)).reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }
  isCasierCategory(name) {
    if (!name)
      return false;
    const n = name.toLowerCase();
    return n.includes("casier");
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
  // ===== TTC par ligne (inclut précompte) =====
  lineTotalTTC(line) {
    return (line.montantHT ?? 0) + (line.montantTVA ?? 0) + (line.precompte ?? 0);
  }
  lineUnitTTC(line) {
    const qty = line.quantity || 1;
    return this.lineTotalTTC(line) / qty;
  }
  get invoiceHasRabais() {
    return (this.invoice?.lines ?? []).some((l) => (l.rabaisUnitaire ?? 0) > 0);
  }
  // Convention alignée sur les ventes : prixUnitaire = prix CATALOGUE (le tarif fournisseur
  // n'affecte pas le prix de l'article, il est isolé en rabais et déduit au total).
  linePrixCatalogue(line) {
    return line.prixUnitaire ?? 0;
  }
  lineTotalCatalogueHT(line) {
    return (line.quantity ?? 0) * this.linePrixCatalogue(line);
  }
  /** Net HT ligne = montant HT catalogue − rabais HT */
  lineNetHT(line) {
    return (line.montantHT ?? 0) - (line.totalRabaisLigne ?? 0);
  }
  /** Net TTC ligne = TTC catalogue − rabais TTC */
  lineNetTTC(line) {
    return this.lineTotalTTC(line) - this.lineTotalRabaisTTC(line);
  }
  lineRabaisUnitaireTTC(line) {
    const r = line.rabaisUnitaire ?? 0;
    if (r <= 0)
      return 0;
    return r * (1 + (line.tauxTVA ?? 0) / 100);
  }
  lineTotalRabaisTTC(line) {
    const r = line.totalRabaisLigne ?? 0;
    if (r <= 0)
      return 0;
    return r * (1 + (line.tauxTVA ?? 0) / 100);
  }
  get totalRabaisHTCalc() {
    return (this.invoice?.lines ?? []).reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }
  get totalRabaisTTCCalc() {
    return (this.invoice?.lines ?? []).reduce((s, l) => s + this.lineTotalRabaisTTC(l), 0);
  }
  // ===== Lettrage =====
  openReconcileModal() {
    this.loadingMoves = true;
    this.showReconcileModal = true;
    this.selectedMove = null;
    this.reconcileForm = { moveId: 0, amount: this.invoice?.montantDu || 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] };
    this.purchaseService.getAvailableMoves(this.invoiceId, this.authService.getCompanyId()).subscribe({
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
    this.purchaseService.reconcile(this.invoiceId, {
      accountMoveId: this.reconcileForm.moveId,
      amount: this.reconcileForm.amount,
      date: this.reconcileForm.date
    }).subscribe({
      next: () => {
        this.savingReconcile = false;
        this.showReconcileModal = false;
        this.showSuccess("Facture rattach\xE9e au paiement");
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
    this.purchaseService.unreconcile(id).subscribe({
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
  static {
    this.\u0275fac = function PurchaseInvoiceDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseInvoiceDetailComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(EnlevementService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseInvoiceDetailComponent, selectors: [["app-purchase-invoice-detail"]], decls: 30, vars: 20, consts: [["payAmtInput", ""], ["recAmtInput", ""], [1, "page-container"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [1, "badge-type-avoir"], [3, "class"], [1, "badge", "badge-reversed"], [1, "badge", "badge-reversed-partial"], [1, "ecriture-ref"], [1, "header-actions"], [1, "btn-print"], [1, "btn-warning", 3, "disabled"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading-state"], ["(click).self", "closePaymentForm()", 1, "pay-overlay"], ["(click).self", "showReconcileModal = false", 1, "pay-overlay"], [1, "modal-overlay"], [3, "purchaseInvoice", "docType", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"], [1, "btn-print", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "btn-danger", 3, "disabled"], [1, "btn-danger", 3, "click", "disabled"], [1, "btn-payment", 3, "click"], [1, "btn-payment", 2, "background", "#017E84"], [1, "btn-avoir", 3, "click", "disabled"], [1, "btn-remise", 3, "click", "disabled"], [1, "btn-payment", 2, "background", "#017E84", 3, "click"], [1, "btn-payment"], [1, "btn-warning", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "alert", "alert-warning", "mb-16"], [1, "info-grid", "mb-16"], [1, "info-card"], [1, "info-label"], [1, "info-value", "font-bold"], [1, "info-card", 3, "class"], [1, "info-value"], [1, "info-card", "clickable"], [1, "card", "mb-16"], [1, "card-header"], [1, "lines-table"], [1, "text-right"], [1, "text-right", 2, "color", "#e65100"], [1, "bottom-section"], [1, "payments-section"], [1, "card"], [1, "btn-add-payment"], [1, "no-payments"], [1, "payments-table"], [1, "totals-section"], [1, "totals-card"], [1, "total-row"], [1, "total-row", "total-precompte"], [1, "total-row", "total-liquide"], [1, "total-row", "total-ttc"], [1, "total-row", "net-a-payer"], [1, "total-row", "text-success"], [1, "progress-section"], [1, "material-icons", 2, "color", "#00A09D", "font-size", "18px", "margin-right", "6px", "vertical-align", "middle"], [3, "createdBy", "createdAt", "updatedBy", "updatedAt"], ["entityType", "PURCHASE_INVOICE", 3, "entityId"], [1, "material-icons", 2, "font-size", "14px", "vertical-align", "middle"], [1, "balance-tag", "balance-tag-debit"], [1, "balance-tag", "balance-tag-credit"], [1, "balance-tag", "balance-tag-zero"], [2, "margin-top", "6px", "font-size", "12px", "color", "#017E84", "font-weight", "500", "display", "flex", "align-items", "center", "gap", "4px"], [1, "material-icons", 2, "font-size", "14px"], [1, "info-card", "clickable", 3, "click"], [1, "info-value", "link"], [1, "info-value", "link", 3, "click"], [1, "text-muted", "font-mono"], [1, "text-right", "font-bold"], [1, "text-right", 2, "color", "#e65100", "font-weight", "600"], [1, "card-header", "recap-header"], [1, "recap-global-wrapper"], [1, "lines-table", "recap-global-table"], [1, "text-right", "col-psa"], [1, "text-right", "col-net"], [1, "recap-total-row"], [1, "text-right", 2, "color", "#c0392b"], [1, "text-right", 2, "color", "#c0392b", "font-weight", "700"], [1, "badge-info-only"], [1, "text-right", "col-remise"], ["colspan", "4"], [1, "text-right", "font-mono"], ["colspan", "3"], [1, "btn-add-payment", 3, "click"], [2, "width", "36px"], [3, "payment-reversed"], [1, "font-mono"], [1, "text-muted"], [1, "tag-annule"], ["title", "Annuler ce paiement", 1, "btn-reverse-payment"], ["title", "Annuler ce paiement", 1, "btn-reverse-payment", 3, "click"], [1, "recon-divider"], [1, "text-right", "recon-amount"], [1, "progress-bar-lg"], [1, "progress-fill"], [1, "progress-label"], [1, "text-right", "text-success", "font-bold"], ["title", "D\xE9lettrer", 1, "btn-icon-danger", 3, "click"], [1, "pay-modal"], [1, "pay-modal-hdr"], [1, "pay-modal-title"], [1, "pay-modal-close", 3, "click"], [1, "pay-modal-body"], [1, "pay-summary"], [1, "pay-sum-row"], [1, "pay-due"], [1, "pay-form-grid"], [1, "form-group"], [1, "required"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "0", 1, "form-control", 3, "focus", "input", "blur", "value"], ["type", "text", "placeholder", "N\xB0 ch\xE8que, virement...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "pay-modal-ftr"], [1, "pay-btn-cancel", 3, "click"], [1, "pay-btn-save", 3, "click", "disabled"], [1, "pay-modal", 2, "max-width", "760px"], [1, "pay-summary", 2, "margin-bottom", "12px"], [1, "loading-state", 2, "padding", "20px"], [1, "pay-form-grid", 2, "margin-top", "8px"], [2, "font-size", "13px", "color", "#6c757d", "margin-bottom", "8px"], [2, "overflow-x", "auto", "margin-bottom", "14px"], [1, "text-right", 2, "color", "#198754"], [2, "cursor", "pointer", 3, "selected-row"], [2, "cursor", "pointer", 3, "click"], [1, "text-right", "text-muted"], [2, "color", "#6c757d", "font-size", "11px"], [1, "modal-overlay", 3, "click"], [1, "avoir-modal", 3, "click"], [1, "avoir-modal-hdr"], [1, "avoir-modal-title"], [1, "avoir-modal-close", 3, "click"], [1, "avoir-modal-body"], [1, "avoir-date-row"], [1, "avoir-type-choice"], [1, "avoir-type-option"], ["type", "radio", "name", "avoirType", "value", "integral", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "avoirType", "value", "partiel", 3, "ngModelChange", "ngModel"], [1, "avoir-lines-table"], [1, "avoir-error"], [1, "avoir-modal-ftr"], [1, "avoir-btn-cancel", 3, "click"], [1, "avoir-btn-confirm", 3, "click", "disabled"], [1, "r"], [3, "avoir-line-consigne"], [1, "badge-consigne"], [1, "r", "muted"], ["type", "number", "step", "1", 1, "avoir-qty-input", 3, "ngModelChange", "ngModel", "min", "max"], [3, "closed", "purchaseInvoice", "docType", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"]], template: function PurchaseInvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
        \u0275\u0275listener("click", function PurchaseInvoiceDetailComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "span", 5);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6)(6, "h1", 7);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, PurchaseInvoiceDetailComponent_Conditional_8_Template, 2, 0, "span", 8);
        \u0275\u0275conditionalCreate(9, PurchaseInvoiceDetailComponent_Conditional_9_Template, 2, 3, "span", 9);
        \u0275\u0275conditionalCreate(10, PurchaseInvoiceDetailComponent_Conditional_10_Template, 4, 0, "span", 10)(11, PurchaseInvoiceDetailComponent_Conditional_11_Template, 4, 0, "span", 11);
        \u0275\u0275conditionalCreate(12, PurchaseInvoiceDetailComponent_Conditional_12_Template, 4, 1, "span", 12);
        \u0275\u0275conditionalCreate(13, PurchaseInvoiceDetailComponent_Conditional_13_Template, 4, 1, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275conditionalCreate(15, PurchaseInvoiceDetailComponent_Conditional_15_Template, 4, 0, "button", 14);
        \u0275\u0275conditionalCreate(16, PurchaseInvoiceDetailComponent_Conditional_16_Template, 5, 3);
        \u0275\u0275conditionalCreate(17, PurchaseInvoiceDetailComponent_Conditional_17_Template, 13, 5);
        \u0275\u0275conditionalCreate(18, PurchaseInvoiceDetailComponent_Conditional_18_Template, 8, 4);
        \u0275\u0275conditionalCreate(19, PurchaseInvoiceDetailComponent_Conditional_19_Template, 5, 2);
        \u0275\u0275conditionalCreate(20, PurchaseInvoiceDetailComponent_Conditional_20_Template, 2, 2);
        \u0275\u0275conditionalCreate(21, PurchaseInvoiceDetailComponent_Conditional_21_Template, 4, 2, "button", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, PurchaseInvoiceDetailComponent_Conditional_22_Template, 4, 1, "div", 16);
        \u0275\u0275conditionalCreate(23, PurchaseInvoiceDetailComponent_Conditional_23_Template, 4, 1, "div", 17);
        \u0275\u0275conditionalCreate(24, PurchaseInvoiceDetailComponent_Conditional_24_Template, 4, 0, "div", 18)(25, PurchaseInvoiceDetailComponent_Conditional_25_Template, 128, 62);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(26, PurchaseInvoiceDetailComponent_Conditional_26_Template, 61, 16, "div", 19);
        \u0275\u0275conditionalCreate(27, PurchaseInvoiceDetailComponent_Conditional_27_Template, 36, 11, "div", 20);
        \u0275\u0275conditionalCreate(28, PurchaseInvoiceDetailComponent_Conditional_28_Template, 43, 14, "div", 21);
        \u0275\u0275conditionalCreate(29, PurchaseInvoiceDetailComponent_Conditional_29_Template, 1, 7, "app-print-preview", 22);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((ctx.invoice == null ? null : ctx.invoice.name) || "Document");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isAvoir ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.reversalStatus) === "full" ? 10 : (ctx.invoice == null ? null : ctx.invoice.reversalStatus) === "partial" ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.originalInvoiceName) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.accountMoveName) ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.invoice && ctx.invoice.state !== "draft" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "draft" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "posted" && ctx.isInvoice ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "paid" && ctx.isInvoice ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "partiellement_extournee" && ctx.isInvoice ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((ctx.invoice == null ? null : ctx.invoice.state) === "posted" || (ctx.invoice == null ? null : ctx.invoice.state) === "paid") && ctx.isAvoir ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.invoice == null ? null : ctx.invoice.state) === "cancelled" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 24 : ctx.invoice ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showPaymentForm && ctx.invoice ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showReconcileModal && ctx.invoice ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAvoirModal ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPrintModal && ctx.invoice ? 29 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, PrintPreviewComponent, AuditFooterComponent, AuditTrailComponent, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .ecriture-ref[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.page-header[_ngcontent-%COMP%]   .ecriture-ref[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-print[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-print[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%], \n.btn-payment[_ngcontent-%COMP%], \n.btn-avoir[_ngcontent-%COMP%], \n.btn-warning[_ngcontent-%COMP%], \n.btn-remise[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-avoir[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-remise[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-danger[_ngcontent-%COMP%]:disabled, \n.btn-payment[_ngcontent-%COMP%]:disabled, \n.btn-avoir[_ngcontent-%COMP%]:disabled, \n.btn-warning[_ngcontent-%COMP%]:disabled, \n.btn-remise[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #00A09D;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #bb2d3b;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: white;\n}\n.btn-payment[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-avoir[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: white;\n}\n.btn-avoir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  color: white;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e06912;\n}\n.btn-remise[_ngcontent-%COMP%] {\n  background: #e67e22;\n  color: white;\n}\n.btn-remise[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ca6f1e;\n}\n.badge-type-avoir[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  border: 1px solid #d4c6f5;\n  letter-spacing: 0.5px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 180px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value.link[_ngcontent-%COMP%] {\n  color: var(--accent);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card.clickable[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mt-12[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #0f5132;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-extournee[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.badge.badge-partial-ext[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-reversed[_ngcontent-%COMP%], \n.badge.badge-reversed-partial[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.badge.badge-reversed[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.badge.badge-reversed-partial[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.badge.badge-reversed[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-reversed-partial[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.bottom-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.no-payments[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.amount-preview[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0ea5e9;\n  letter-spacing: 0.4px;\n}\n.payments-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.payments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.payments-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.btn-add-payment[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-add-payment[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.payment-form-body[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.payment-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.totals-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 18px 22px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n}\n.total-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  font-family: monospace;\n}\n.total-row.total-ttc[_ngcontent-%COMP%] {\n  border-top: 2px solid #00A09D;\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.total-row.text-success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #198754 !important;\n}\n.total-row.total-due[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #dc3545 !important;\n  font-weight: 600;\n}\n.total-row.total-due[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #dc3545 !important;\n  font-weight: 700;\n}\n.total-row.total-precompte[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--warning);\n}\n.total-row.total-liquide[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--border);\n  margin-top: 4px;\n  padding-top: 8px;\n}\n.total-row.total-liquide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n  color: var(--accent);\n}\n.total-row.total-liquide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n  color: var(--accent);\n}\n.total-row.total-remise[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #198754;\n}\n.total-row.net-a-payer[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--accent);\n  margin-top: 4px;\n  padding-top: 10px;\n}\n.total-row.net-a-payer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.total-row.net-a-payer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-bar-lg[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--bg-elevated);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-bar-lg[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent);\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  display: block;\n  text-align: right;\n}\n.recap-header[_ngcontent-%COMP%] {\n  gap: 8px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.recap-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--accent);\n}\n.recap-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-size: 13px;\n  padding: 10px 14px;\n}\n.recap-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n}\n.col-psa[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.col-enl[_ngcontent-%COMP%] {\n  color: #e67e22;\n}\n.col-net[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.col-remise[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.recap-global-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.recap-global-table[_ngcontent-%COMP%] {\n  min-width: 1200px;\n}\n.recap-global-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.recap-global-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 8px 12px;\n  font-size: 13px;\n}\n.recap-global-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  border-bottom: 2px solid var(--border);\n}\n.recap-global-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.recap-global-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.badge-info-only[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 500;\n  background: var(--warning-bg);\n  color: var(--warning);\n  padding: 2px 10px;\n  border-radius: 10px;\n  border: 1px solid #ffc107;\n}\n.badge-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-type.badge-brasserie[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-type.badge-guinness[_ngcontent-%COMP%] {\n  background: #cff4fc;\n  color: #055160;\n}\n.badge-type.badge-brut[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.info-card.balance-positive[_ngcontent-%COMP%] {\n  border-left: 3px solid #dc3545;\n}\n.info-card.balance-negative[_ngcontent-%COMP%] {\n  border-left: 3px solid #198754;\n}\n.info-card.balance-zero[_ngcontent-%COMP%] {\n  border-left: 3px solid #6c757d;\n}\n.info-card.missing-field[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545 !important;\n  background: var(--danger-bg);\n}\n.balance-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 6px;\n}\n.balance-tag.balance-tag-debit[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.balance-tag.balance-tag-credit[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.balance-tag.balance-tag-zero[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.form-select-inline[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 13px;\n  width: 100%;\n  cursor: pointer;\n  background: var(--bg-surface);\n  font-family: "Roboto", sans-serif;\n}\n.form-select-inline[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n}\n.pay-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.pay-modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.pay-modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-modal-hdr.credit-hdr[_ngcontent-%COMP%]   .pay-modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.pay-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.pay-modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00A09D;\n  font-size: 20px;\n}\n.pay-modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.pay-modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.pay-modal-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pay-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.pay-summary[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.pay-sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.pay-due[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 14px;\n}\n.pay-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.credit-info-box[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n  border-radius: 8px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.credit-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.credit-avail[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-size: 14px;\n}\n.pay-modal-ftr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pay-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.pay-btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pay-btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #017a77;\n}\n.pay-btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.pay-btn-save.credit-save[_ngcontent-%COMP%] {\n  background: #00A09D;\n}\n.pay-btn-save.credit-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #017a77;\n}\n.required-star[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.selected-row[_ngcontent-%COMP%] {\n  background: var(--primary-subtle) !important;\n  outline: 2px solid #0ea5e9;\n  outline-offset: -2px;\n}\n.btn-icon-danger[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--danger);\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.btn-icon-danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.btn-reverse-payment[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #fd7e14;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.btn-reverse-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-reverse-payment[_ngcontent-%COMP%]:hover {\n  background: var(--warning-bg);\n}\n.payment-reversed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.tag-annule[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.recon-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n  border-top: 1px dashed #bee3f8;\n  background: var(--bg-hover);\n}\n.recon-divider[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.recon-amount[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  font-weight: 600;\n  font-family: monospace;\n}\n.avoir-modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 580px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.avoir-modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.avoir-modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.avoir-modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.avoir-modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.avoir-modal-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.avoir-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.avoir-date-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.avoir-date-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.avoir-date-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 0 0 160px;\n}\n.avoir-modal-ftr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-type-choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.avoir-type-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.avoir-type-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.avoir-type-option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--text-muted);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.avoir-type-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  display: block;\n  margin-bottom: 2px;\n}\n.avoir-type-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.avoir-type-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n}\n.avoir-type-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.avoir-type-option.selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.avoir-lines-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background: var(--bg-hover);\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.avoir-lines-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   .avoir-line-consigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #f8f4ff;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.avoir-lines-table[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.badge-consigne[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  background: #ede9ff;\n  color: #6d28d9;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  vertical-align: middle;\n}\n.avoir-qty-input[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 4px 8px;\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  text-align: right;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-qty-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.avoir-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.avoir-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.avoir-btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.avoir-btn-confirm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-confirm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.avoir-btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.avoir-btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseInvoiceDetailComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-invoice-detail", standalone: true, imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditFooterComponent, AuditTrailComponent], template: `<div class="page-container">
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
      @if (invoice?.reversalStatus === 'full') {
        <span class="badge badge-reversed">
          <span class="material-icons">swap_horiz</span> Extourn\xE9e
        </span>
      } @else if (invoice?.reversalStatus === 'partial') {
        <span class="badge badge-reversed-partial">
          <span class="material-icons">swap_horiz</span> Partiellement extourn\xE9e
        </span>
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
        <button class="btn-payment" (click)="openPaymentForm()">
          <span class="material-icons">payments</span>
          Enregistrer un paiement
        </button>
        @if ((invoice?.partnerCreditDisponible || 0) > 0 && (invoice?.montantDu || 0) > 0) {
          <button class="btn-payment" style="background:#017E84" (click)="openCreditForm()">
            <span class="material-icons">redeem</span> Cr\xE9dit ({{ invoice?.partnerCreditDisponible | number:'1.0-0' }})
          </button>
        }
        <button class="btn-avoir" (click)="openAvoirModal()" [disabled]="creatingAvoir">
          <span class="material-icons">undo</span>
          {{ creatingAvoir ? 'Cr\xE9ation...' : 'Cr\xE9er un avoir' }}
        </button>
        <button class="btn-remise" (click)="generateRemises()" [disabled]="generatingRemises">
          <span class="material-icons">local_offer</span>
          {{ generatingRemises ? 'G\xE9n\xE9ration...' : 'G\xE9n\xE9rer remises' }}
        </button>
      }
      @if (invoice?.state === 'paid' && isInvoice) {
        <button class="btn-avoir" (click)="openAvoirModal()" [disabled]="creatingAvoir">
          <span class="material-icons">undo</span>
          {{ creatingAvoir ? 'Cr\xE9ation...' : 'Cr\xE9er un avoir' }}
        </button>
        <button class="btn-remise" (click)="generateRemises()" [disabled]="generatingRemises">
          <span class="material-icons">local_offer</span>
          {{ generatingRemises ? 'G\xE9n\xE9ration...' : 'G\xE9n\xE9rer remises' }}
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
        <div class="info-label">Fournisseur</div>
        <div class="info-value font-bold">{{ invoice.partnerName }}</div>
      </div>

      <!-- Solde partenaire -->
      @if (invoice.partnerBalance !== undefined && invoice.partnerBalance !== null) {
        <div class="info-card" [class]="partnerBalanceClass">
          <div class="info-label">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">account_balance_wallet</span>
            Solde fournisseur
          </div>
          <div class="info-value font-bold">
            {{ (invoice.partnerBalance || 0) | number:'1.0-0' }} FCFA
            @if ((invoice.partnerBalance || 0) < 0) {
              <span class="balance-tag balance-tag-debit">On lui doit</span>
            } @else if ((invoice.partnerBalance || 0) > 0) {
              <span class="balance-tag balance-tag-credit">Il nous doit</span>
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
      @if (invoice.receptionWarehouseName) {
        <div class="info-card">
          <div class="info-label">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">warehouse</span>
            Entrep\xF4t de r\xE9ception
          </div>
          <div class="info-value">{{ invoice.receptionWarehouseName }}</div>
        </div>
      }
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
            <th>D\xE9signation</th>
            <th class="text-right">Qt\xE9</th>
            <th class="text-right">P.U. HT</th>
            <th class="text-right" style="color:#e65100">Rabais/u HT</th>
            <th class="text-right">TVA %</th>
            <th class="text-right">Total Cat. HT</th>
            <th class="text-right" style="color:#e65100">\u2212 Rabais HT</th>
            <th class="text-right">= Net HT</th>
            <th class="text-right">Net TTC</th>
          </tr>
        </thead>
        <tbody>
          @for (line of invoice.lines; track line.id) {
            <tr>
              <td class="text-muted font-mono">{{ line.productCode || '\u2014' }}</td>
              <td>{{ line.description }}</td>
              <td class="text-right">{{ line.quantity | number:'1.0-2' }}</td>
              <td class="text-right font-bold">{{ linePrixCatalogue(line) | number:'1.0-0' }}</td>
              <td class="text-right" style="color:#e65100;font-weight:600">
                @if ((line.rabaisUnitaire ?? 0) > 0) { \u2013 {{ line.rabaisUnitaire | number:'1.0-0' }} } @else { \u2014 }
              </td>
              <td class="text-right">{{ line.tauxTVA || 0 }}%</td>
              <td class="text-right">{{ lineTotalCatalogueHT(line) | number:'1.0-0' }}</td>
              <td class="text-right" style="color:#e65100;font-weight:600">
                @if ((line.totalRabaisLigne ?? 0) > 0) { \u2013 {{ line.totalRabaisLigne | number:'1.0-0' }} } @else { \u2014 }
              </td>
              <td class="text-right font-bold">{{ lineNetHT(line) | number:'1.0-0' }}</td>
              <td class="text-right font-bold">{{ lineNetTTC(line) | number:'1.0-0' }}</td>
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
                <th class="text-right">Total Liquide Nu</th>
                <th class="text-right font-bold">Total TTC</th>
                <th class="text-right">Consigne</th>
                <th class="text-right">D\xE9consigne</th>
                <th class="text-right">Qt\xE9 Consigne</th>
                <th class="text-right">Qt\xE9 D\xE9consigne</th>
                @if (totalRabaisHTCalc > 0) {
                  <th class="text-right" style="color:#e65100">Rabais HT</th>
                  <th class="text-right" style="color:#c0392b">Rabais TTC</th>
                }
                <th class="text-right col-net">Net \xE0 payer</th>
              </tr>
            </thead>
            <tbody>
              <tr class="recap-total-row">
                <td class="text-right">{{ (invoice.totalHT ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right">{{ (invoice.totalTVA ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right col-psa">{{ (invoice.totalPrecompte ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right">{{ totalColis | number:'1.0-2' }}</td>
                <td class="text-right">{{ totalPET | number:'1.0-2' }}</td>
                <td class="text-right">{{ totalCasier | number:'1.0-2' }}</td>
                <td class="text-right">{{ (invoice.totalLiquideNu ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right font-bold">{{ (invoice.totalTTC ?? 0) | number:'1.0-0' }}</td>
                <td class="text-right">{{ consigneMontant | number:'1.0-0' }}</td>
                <td class="text-right">{{ deconsigneMontant | number:'1.0-0' }}</td>
                <td class="text-right">{{ qteConsigne | number:'1.0-2' }}</td>
                <td class="text-right">{{ qteDeconsigne | number:'1.0-2' }}</td>
                @if (totalRabaisHTCalc > 0) {
                  <td class="text-right" style="color:#e65100;font-weight:600">\u2013 {{ totalRabaisHTCalc | number:'1.0-0' }}</td>
                  <td class="text-right" style="color:#c0392b;font-weight:700">\u2013 {{ totalRabaisTTCCalc | number:'1.0-0' }}</td>
                }
                <td class="text-right col-net"><strong>{{ (invoice.netAPayer ?? 0) | number:'1.0-0' }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    }

    <!-- Remises fournisseur \u2014 informatif, non incluses dans la facture -->
    @if (invoice.remiseDetails && invoice.remiseDetails.length > 0) {
      <div class="card mb-16">
        <div class="card-header recap-header">
          <span class="material-icons">local_offer</span> Remises fournisseur
          <span class="badge-info-only">calcul\xE9es &amp; conserv\xE9es \u2014 non incluses dans la facture</span>
        </div>
        <table class="lines-table">
          <thead>
            <tr>
              <th>Cat\xE9gorie</th>
              <th>Type</th>
              <th class="text-right">Qt\xE9</th>
              <th class="text-right">Montant/U. TTC</th>
              <th class="text-right col-remise">Total remise</th>
            </tr>
          </thead>
          <tbody>
            @for (r of invoice.remiseDetails; track r.categoryName) {
              <tr>
                <td>{{ r.categoryName }}</td>
                <td><span [class]="'badge-type badge-' + (r.typeRemise || 'brut')">
                  {{ r.typeRemise === 'brasserie' ? 'Brasserie' : r.typeRemise === 'guinness' ? 'Guinness' : 'HT brut' }}
                </span></td>
                <td class="text-right">{{ r.quantite | number:'1.0-2' }}</td>
                <td class="text-right font-mono">{{ r.montantUnitaire | number:'1.2-2' }}</td>
                <td class="text-right col-remise"><strong>{{ r.montantTotal | number:'1.0-0' }}</strong></td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="recap-total-row">
              <td colspan="4"><strong>Total remises (informatif)</strong></td>
              <td class="text-right col-remise"><strong>{{ (invoice.totalRemise ?? 0) | number:'1.0-0' }} FCFA</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    }

    <!-- Co\xFBts d'enl\xE8vement \u2014 informatif, non inclus dans la facture -->
    @if (enlevementCosts.length > 0) {
      <div class="card mb-16">
        <div class="card-header recap-header">
          <span class="material-icons">local_shipping</span> Co\xFBts d'enl\xE8vement
          <span class="badge-info-only">calcul\xE9s \xE0 titre informatif \u2014 non inclus dans la facture</span>
        </div>
        <table class="lines-table">
          <thead>
            <tr>
              <th>Cat\xE9gorie</th>
              <th class="text-right">Quantit\xE9</th>
              <th class="text-right">Tarif/U. (FCFA)</th>
              <th class="text-right col-remise">Total enl\xE8vement</th>
            </tr>
          </thead>
          <tbody>
            @for (c of enlevementCosts; track c.categoryName) {
              <tr>
                <td>{{ c.categoryName }}</td>
                <td class="text-right">{{ c.quantite | number:'1.0-2' }}</td>
                <td class="text-right font-mono">{{ c.montantUnitaire | number:'1.0-0' }}</td>
                <td class="text-right col-remise"><strong>{{ c.montantTotal | number:'1.0-0' }}</strong></td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="recap-total-row">
              <td colspan="3"><strong>Total enl\xE8vements (informatif)</strong></td>
              <td class="text-right col-remise"><strong>{{ totalEnlevement | number:'1.0-0' }} FCFA</strong></td>
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
            <span>Paiements fournisseur</span>
            @if (invoice.state === 'posted' || invoice.state === 'partiellement_extournee') {
              <button class="btn-add-payment" (click)="openPaymentForm()">
                <span class="material-icons">add</span> Ajouter
              </button>
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
                  <th>Journal</th>
                  <th>M\xE9mo</th>
                  <th class="text-right">Montant</th>
                  <th style="width:36px"></th>
                </tr>
              </thead>
              <tbody>
                @for (p of invoice.payments; track p.id) {
                  <tr [class.payment-reversed]="p.state === 'reversed'">
                    <td class="font-mono">{{ p.name }}</td>
                    <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                    <td>{{ p.journalName }}</td>
                    <td class="text-muted">{{ p.memo || '\u2014' }}</td>
                    <td class="text-right font-bold" [class.text-success]="p.state !== 'reversed'" [class.text-muted]="p.state === 'reversed'">
                      {{ p.amount | number:'1.0-0' }}
                      @if (p.state === 'reversed') { <span class="tag-annule">Annul\xE9</span> }
                    </td>
                    <td>
                      @if (p.state !== 'reversed') {
                        <button class="btn-reverse-payment" title="Annuler ce paiement" (click)="reversePayment(p.id!)">
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
            <span>{{ (invoice.totalHT ?? 0) | number:'1.0-0' }} FCFA</span>
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
          @if (invoice.state === 'posted' || invoice.state === 'paid' || invoice.state === 'partiellement_extournee') {
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

    <!-- Rattachement de paiements (Lettrage) -->
    <div class="card mb-16">
      <div class="card-header">
        <span class="material-icons" style="color:#00A09D;font-size:18px;margin-right:6px;vertical-align:middle">link</span>
        Rattachement de versements (Lettrage)
        @if (invoice.state === 'posted' || invoice.state === 'partiellement_extournee') {
          <button class="btn-add-payment" (click)="openReconcileModal()">
            <span class="material-icons">add_link</span> Rattacher un versement
          </button>
        }
      </div>
      @if (!reconciliations || reconciliations.length === 0) {
        <div class="no-payments">Aucun versement rattach\xE9</div>
      } @else {
        <table class="payments-table">
          <thead>
            <tr>
              <th>\xC9criture</th>
              <th>Date</th>
              <th>Journal</th>
              <th>R\xE9f\xE9rence</th>
              <th class="text-right">Montant rattach\xE9</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (r of reconciliations; track r.id) {
              <tr>
                <td class="font-mono">{{ r.accountMoveName }}</td>
                <td>{{ r.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ r.journalName }}</td>
                <td class="text-muted">{{ r.accountMoveRef || '\u2014' }}</td>
                <td class="text-right text-success font-bold">{{ r.amount | number:'1.0-0' }} FCFA</td>
                <td>
                  <button class="btn-icon-danger" (click)="unreconcile(r.id)" title="D\xE9lettrer">
                    <span class="material-icons">link_off</span>
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>

    <app-audit-footer
      [createdBy]="invoice.createdBy"
      [createdAt]="invoice.createdAt"
      [updatedBy]="invoice.updatedBy"
      [updatedAt]="invoice.updatedAt">
    </app-audit-footer>

    <app-audit-trail entityType="PURCHASE_INVOICE" [entityId]="invoice.id ?? null"></app-audit-trail>
  }
</div>

<!-- \u2550\u2550 Modal : Enregistrer un paiement fournisseur \u2550\u2550 -->
@if (showPaymentForm && invoice) {
  <div class="pay-overlay" (click).self="closePaymentForm()">
    <div class="pay-modal">
      <div class="pay-modal-hdr">
        <div class="pay-modal-title">
          <span class="material-icons">payments</span>
          {{ isAvoir ? 'Enregistrer un remboursement fournisseur' : 'Nouveau paiement fournisseur' }}
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
            <span>Fournisseur</span><span>{{ invoice.partnerName }}</span>
          </div>
          <div class="pay-sum-row">
            <span>{{ isAvoir ? 'Reste \xE0 recevoir' : 'Reste d\xFB' }}</span>
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

<!-- \u2550\u2550 Modal : Rattacher un versement (Lettrage Achats) \u2550\u2550 -->
@if (showReconcileModal && invoice) {
  <div class="pay-overlay" (click).self="showReconcileModal = false">
    <div class="pay-modal" style="max-width:760px">
      <div class="pay-modal-hdr">
        <div class="pay-modal-title">
          <span class="material-icons">add_link</span>
          Rattacher un versement \xE0 la facture {{ invoice.name }}
        </div>
        <button class="pay-modal-close" (click)="showReconcileModal = false">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="pay-modal-body">
        <div class="pay-summary" style="margin-bottom:12px">
          <div class="pay-sum-row">
            <span>Fournisseur</span><strong>{{ invoice.partnerName }}</strong>
          </div>
          <div class="pay-sum-row">
            <span>Reste d\xFB</span>
            <strong class="pay-due">{{ (invoice.montantDu ?? 0) | number:'1.0-0' }} FCFA</strong>
          </div>
        </div>

        @if (loadingMoves) {
          <div class="loading-state" style="padding:20px">
            <span class="material-icons spin">refresh</span> Chargement des versements...
          </div>
        } @else if (availableMoves.length === 0) {
          <div class="no-payments">Aucun versement disponible pour ce fournisseur</div>
        } @else {
          <p style="font-size:13px;color:#6c757d;margin-bottom:8px">
            S\xE9lectionnez un versement \xE0 rattacher \xE0 cette facture :
          </p>
          <div style="overflow-x:auto;margin-bottom:14px">
            <table class="payments-table">
              <thead>
                <tr>
                  <th>\xC9criture</th>
                  <th>Date</th>
                  <th>Journal</th>
                  <th>R\xE9f.</th>
                  <th class="text-right">Total</th>
                  <th class="text-right">Lettr\xE9</th>
                  <th class="text-right" style="color:#198754">Disponible</th>
                </tr>
              </thead>
              <tbody>
                @for (m of availableMoves; track m.moveId) {
                  <tr [class.selected-row]="selectedMove?.moveId === m.moveId"
                      style="cursor:pointer" (click)="selectMove(m)">
                    <td class="font-mono">{{ m.moveName }}</td>
                    <td>{{ m.moveDate | date:'dd/MM/yyyy' }}</td>
                    <td>{{ m.journalName }}</td>
                    <td class="text-muted">{{ m.moveRef || '\u2014' }}</td>
                    <td class="text-right">{{ m.montantTotal | number:'1.0-0' }}</td>
                    <td class="text-right text-muted">{{ m.montantLettre | number:'1.0-0' }}</td>
                    <td class="text-right text-success font-bold">{{ m.montantDisponible | number:'1.0-0' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }

        @if (selectedMove) {
          <div class="pay-form-grid" style="margin-top:8px">
            <div class="form-group">
              <label>Montant \xE0 rattacher <span class="required">*</span></label>
              <input #recAmtInput type="text" [value]="fmtM(reconcileForm.amount)"
                (focus)="recAmtInput.value = reconcileForm.amount > 0 ? reconcileForm.amount.toString() : ''"
                (input)="reconcileForm.amount = parseM(recAmtInput.value)"
                (blur)="recAmtInput.value = fmtM(reconcileForm.amount)"
                class="form-control" placeholder="0" />
              <small style="color:#6c757d;font-size:11px">
                Max : {{ Math.min(invoice.montantDu || 0, selectedMove.montantDisponible) | number:'1.0-0' }} FCFA
              </small>
            </div>
            <div class="form-group">
              <label>Date de rattachement</label>
              <input type="date" [(ngModel)]="reconcileForm.date" class="form-control" />
            </div>
          </div>
        }
      </div>
      <div class="pay-modal-ftr">
        <button class="pay-btn-cancel" (click)="showReconcileModal = false">
          <span class="material-icons">close</span> Annuler
        </button>
        <button class="pay-btn-save" (click)="saveReconcile()"
                [disabled]="savingReconcile || !selectedMove || reconcileForm.amount <= 0">
          <span class="material-icons">{{ savingReconcile ? 'hourglass_empty' : 'link' }}</span>
          {{ savingReconcile ? 'Rattachement...' : 'Confirmer le rattachement' }}
        </button>
      </div>
    </div>
  </div>
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

@if (showPrintModal && invoice) {
  <app-print-preview
    [purchaseInvoice]="invoice"
    [docType]="printDocType"
    [companyName]="printCompanyName"
    [companyPhone]="printCompanyPhone"
    [companyLogoUrl]="printCompanyLogoUrl"
    [companyLogoDataUrl]="printCompanyLogoDataUrl"
    [companyInfo]="printCompany"
    (closed)="closePrint()">
  </app-print-preview>
}
`, styles: ['/* src/app/modules/purchases/components/invoices/invoice-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header .header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 8px;\n}\n.page-header .ecriture-ref {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.page-header .ecriture-ref .material-icons {\n  font-size: 14px;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.btn-back:hover {\n  background: var(--bg-hover);\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-print {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-print .material-icons {\n  font-size: 16px;\n}\n.btn-print:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-primary,\n.btn-secondary,\n.btn-danger,\n.btn-payment,\n.btn-avoir,\n.btn-warning,\n.btn-remise {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-danger .material-icons,\n.btn-payment .material-icons,\n.btn-avoir .material-icons,\n.btn-warning .material-icons,\n.btn-remise .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-danger:disabled,\n.btn-payment:disabled,\n.btn-avoir:disabled,\n.btn-warning:disabled,\n.btn-remise:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #00A09D;\n}\n.btn-danger {\n  background: #dc3545;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #bb2d3b;\n}\n.btn-payment {\n  background: #0d6efd;\n  color: white;\n}\n.btn-payment:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-avoir {\n  background: #7C3AED;\n  color: white;\n}\n.btn-avoir:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-warning {\n  background: #fd7e14;\n  color: white;\n}\n.btn-warning:hover:not(:disabled) {\n  background: #e06912;\n}\n.btn-remise {\n  background: #e67e22;\n  color: white;\n}\n.btn-remise:hover:not(:disabled) {\n  background: #ca6f1e;\n}\n.badge-type-avoir {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  border: 1px solid #d4c6f5;\n  letter-spacing: 0.5px;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid .info-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 180px;\n}\n.info-grid .info-card .info-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid .info-card .info-value {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.info-grid .info-card .info-value.font-bold {\n  font-weight: 600;\n}\n.info-grid .info-card .info-value.link {\n  color: var(--accent);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.info-grid .info-card.clickable {\n  cursor: pointer;\n}\n.info-grid .info-card.clickable:hover {\n  background: var(--bg-hover);\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.mt-12 {\n  margin-top: 12px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.lines-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-success {\n  color: #198754;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-posted {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.badge.badge-paid {\n  background: var(--success-bg);\n  color: #0f5132;\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-extournee {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.badge.badge-partial-ext {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-reversed,\n.badge.badge-reversed-partial {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.badge.badge-reversed .material-icons,\n.badge.badge-reversed-partial .material-icons {\n  font-size: 13px;\n}\n.badge.badge-reversed {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-reversed-partial {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.bottom-section {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.no-payments {\n  padding: 32px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.amount-preview {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0ea5e9;\n  letter-spacing: 0.4px;\n}\n.payments-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.payments-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.payments-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.payments-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.btn-add-payment {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-payment .material-icons {\n  font-size: 14px;\n}\n.btn-add-payment:hover {\n  background: var(--accent);\n}\n.payment-form-body {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .required {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--accent);\n}\n.payment-form-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.totals-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 18px 22px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n}\n.total-row:last-child {\n  border-bottom: none;\n}\n.total-row span:first-child {\n  color: var(--text-muted);\n}\n.total-row span:last-child {\n  font-weight: 500;\n  font-family: monospace;\n}\n.total-row.total-ttc {\n  border-top: 2px solid #00A09D;\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.total-row.total-ttc span:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.total-row.total-ttc span:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.total-row.text-success span {\n  color: #198754 !important;\n}\n.total-row.total-due span:first-child {\n  color: #dc3545 !important;\n  font-weight: 600;\n}\n.total-row.total-due span:last-child {\n  color: #dc3545 !important;\n  font-weight: 700;\n}\n.total-row.total-precompte span:last-child {\n  color: var(--warning);\n}\n.total-row.total-liquide {\n  border-top: 1px dashed var(--border);\n  margin-top: 4px;\n  padding-top: 8px;\n}\n.total-row.total-liquide span:first-child {\n  font-weight: 600;\n  color: var(--accent);\n}\n.total-row.total-liquide span:last-child {\n  font-weight: 600;\n  color: var(--accent);\n}\n.total-row.total-remise span:last-child {\n  color: #198754;\n}\n.total-row.net-a-payer {\n  border-top: 2px solid var(--accent);\n  margin-top: 4px;\n  padding-top: 10px;\n}\n.total-row.net-a-payer span:first-child {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.total-row.net-a-payer span:last-child {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.progress-section {\n  margin-top: 16px;\n}\n.progress-section .progress-bar-lg {\n  height: 8px;\n  background: var(--bg-elevated);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-section .progress-bar-lg .progress-fill {\n  height: 100%;\n  background: var(--accent);\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.progress-section .progress-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  display: block;\n  text-align: right;\n}\n.recap-header {\n  gap: 8px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.recap-header .material-icons {\n  font-size: 18px;\n  color: var(--accent);\n}\n.recap-table tfoot td {\n  background: var(--bg-elevated);\n  font-size: 13px;\n  padding: 10px 14px;\n}\n.recap-total-row td {\n  border-top: 2px solid var(--border);\n}\n.col-psa {\n  color: rgba(139, 92, 246, 0.9);\n}\n.col-enl {\n  color: #e67e22;\n}\n.col-net {\n  color: var(--accent);\n}\n.col-remise {\n  color: var(--danger);\n}\n.recap-global-wrapper {\n  overflow-x: auto;\n}\n.recap-global-table {\n  min-width: 1200px;\n}\n.recap-global-table th,\n.recap-global-table td {\n  white-space: nowrap;\n  padding: 8px 12px;\n  font-size: 13px;\n}\n.recap-global-table thead th {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  border-bottom: 2px solid var(--border);\n}\n.recap-global-table tbody tr {\n  background: var(--bg-surface);\n}\n.recap-global-table tbody tr:hover {\n  background: var(--bg-hover);\n}\n.badge-info-only {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 500;\n  background: var(--warning-bg);\n  color: var(--warning);\n  padding: 2px 10px;\n  border-radius: 10px;\n  border: 1px solid #ffc107;\n}\n.badge-type {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-type.badge-brasserie {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-type.badge-guinness {\n  background: #cff4fc;\n  color: #055160;\n}\n.badge-type.badge-brut {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.info-card.balance-positive {\n  border-left: 3px solid #dc3545;\n}\n.info-card.balance-negative {\n  border-left: 3px solid #198754;\n}\n.info-card.balance-zero {\n  border-left: 3px solid #6c757d;\n}\n.info-card.missing-field {\n  border: 1px solid #dc3545 !important;\n  background: var(--danger-bg);\n}\n.balance-tag {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 6px;\n}\n.balance-tag.balance-tag-debit {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.balance-tag.balance-tag-credit {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.balance-tag.balance-tag-zero {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.form-select-inline {\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 13px;\n  width: 100%;\n  cursor: pointer;\n  background: var(--bg-surface);\n  font-family: "Roboto", sans-serif;\n}\n.form-select-inline:focus {\n  outline: none;\n  border-color: var(--accent);\n}\n.pay-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9000;\n  padding: 20px;\n}\n.pay-modal {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.pay-modal-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-modal-hdr.credit-hdr .pay-modal-title .material-icons {\n  color: #00A09D;\n}\n.pay-modal-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.pay-modal-title .material-icons {\n  color: #00A09D;\n  font-size: 20px;\n}\n.pay-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.pay-modal-close:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.pay-modal-close .material-icons {\n  font-size: 20px;\n}\n.pay-modal-body {\n  padding: 20px;\n}\n.pay-summary {\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.pay-sum-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.pay-due {\n  color: var(--danger);\n  font-size: 14px;\n}\n.pay-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.credit-info-box {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n  border-radius: 8px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.credit-info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.credit-avail {\n  color: var(--success);\n  font-size: 14px;\n}\n.pay-modal-ftr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.pay-btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-cancel .material-icons {\n  font-size: 16px;\n}\n.pay-btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.pay-btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pay-btn-save .material-icons {\n  font-size: 16px;\n}\n.pay-btn-save:hover:not(:disabled) {\n  background: #017a77;\n}\n.pay-btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.pay-btn-save.credit-save {\n  background: #00A09D;\n}\n.pay-btn-save.credit-save:hover:not(:disabled) {\n  background: #017a77;\n}\n.required-star {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.selected-row {\n  background: var(--primary-subtle) !important;\n  outline: 2px solid #0ea5e9;\n  outline-offset: -2px;\n}\n.btn-icon-danger {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--danger);\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.btn-icon-danger .material-icons {\n  font-size: 18px;\n}\n.btn-icon-danger:hover {\n  background: var(--danger-bg);\n}\n.btn-reverse-payment {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #fd7e14;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s;\n}\n.btn-reverse-payment .material-icons {\n  font-size: 18px;\n}\n.btn-reverse-payment:hover {\n  background: var(--warning-bg);\n}\n.payment-reversed td {\n  opacity: 0.55;\n}\n.tag-annule {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.recon-divider {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #0ea5e9;\n  border-top: 1px dashed #bee3f8;\n  background: var(--bg-hover);\n}\n.recon-divider .material-icons {\n  font-size: 15px;\n}\n.recon-amount {\n  color: #0ea5e9;\n  font-weight: 600;\n  font-family: monospace;\n}\n.avoir-modal {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 580px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.avoir-modal-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-modal-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.avoir-modal-title .material-icons {\n  color: var(--accent);\n  font-size: 20px;\n}\n.avoir-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.avoir-modal-close:hover {\n  background: var(--bg-elevated);\n}\n.avoir-modal-close .material-icons {\n  font-size: 20px;\n}\n.avoir-modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.avoir-date-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.avoir-date-row label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.avoir-date-row input {\n  flex: 0 0 160px;\n}\n.avoir-modal-ftr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n}\n.avoir-type-choice {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.avoir-type-option {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.avoir-type-option input[type=radio] {\n  display: none;\n}\n.avoir-type-option .material-icons {\n  font-size: 24px;\n  color: var(--text-muted);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.avoir-type-option strong {\n  font-size: 14px;\n  color: var(--text-primary);\n  display: block;\n  margin-bottom: 2px;\n}\n.avoir-type-option p {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.avoir-type-option:hover {\n  border-color: var(--accent);\n}\n.avoir-type-option.selected {\n  border-color: var(--accent);\n  background: rgba(16, 185, 129, 0.08);\n}\n.avoir-type-option.selected .material-icons {\n  color: var(--accent);\n}\n.avoir-lines-table {\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.avoir-lines-table table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.avoir-lines-table th {\n  padding: 8px 12px;\n  background: var(--bg-hover);\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.avoir-lines-table td {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.avoir-lines-table tr:last-child td {\n  border-bottom: none;\n}\n.avoir-lines-table .avoir-line-consigne td {\n  background: #f8f4ff;\n}\n.avoir-lines-table .r {\n  text-align: right;\n}\n.avoir-lines-table .muted {\n  color: var(--text-muted);\n}\n.badge-consigne {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  background: #ede9ff;\n  color: #6d28d9;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  vertical-align: middle;\n}\n.avoir-qty-input {\n  width: 70px;\n  padding: 4px 8px;\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  text-align: right;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-qty-input:focus {\n  outline: none;\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.avoir-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.avoir-error .material-icons {\n  font-size: 16px;\n}\n.avoir-btn-cancel {\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.avoir-btn-confirm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.avoir-btn-confirm .material-icons {\n  font-size: 16px;\n}\n.avoir-btn-confirm:hover:not(:disabled) {\n  background: var(--accent);\n}\n.avoir-btn-confirm:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AccountingService }, { type: AuthService }, { type: CompanyService }, { type: EnlevementService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseInvoiceDetailComponent, { className: "PurchaseInvoiceDetailComponent", filePath: "app/modules/purchases/components/invoices/invoice-detail.component.ts", lineNumber: 23 });
})();
export {
  PurchaseInvoiceDetailComponent
};
//# sourceMappingURL=chunk-G2AUL5QA.js.map
