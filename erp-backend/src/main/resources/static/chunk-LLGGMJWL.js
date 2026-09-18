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
  StockService
} from "./chunk-LIGNVDFD.js";
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
  NumberValueAccessor
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
  DecimalPipe,
  HostListener,
  ViewChildren,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/purchases/components/orders/order-form.component.ts
var _c0 = ["productInput"];
var _forTrack0 = ($index, $item) => $item.id;
function OrderFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("badge-" + ctx_r0.order.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(ctx_r0.order.state));
  }
}
function OrderFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openPrint());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Imprimer ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveOrder());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
function OrderFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmOrder());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.confirming);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirming ? "Confirmation..." : "Confirmer", " ");
  }
}
function OrderFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelOrder());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.successMsg, " ");
  }
}
function OrderFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 4);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 25);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function OrderFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 4);
    \u0275\u0275text(2, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " R\xE9ception pr\xE9vue \xE0 : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.receptionWarehouseName);
  }
}
function OrderFormComponent_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_17_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/stock/receptions/bordereau", ctx_r0.order.pickingId]));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Saisir le bordereau ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 4);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " R\xE9ception en attente : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_17_Conditional_8_Template, 4, 0, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.pickingName);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-picking-" + ctx_r0.order.pickingState);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.pickingState);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.pickingState !== "done" && ctx_r0.order.pickingId ? 8 : -1);
  }
}
function OrderFormComponent_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 31);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Reste d\xFB : ", \u0275\u0275pipeBind2(4, 1, ctx_r0.invoiceDetails.montantDu, "1.0-0"), " FCFA ");
  }
}
function OrderFormComponent_Conditional_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "span", 31);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Sold\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Facture associ\xE9e : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_18_Conditional_8_Template, 5, 4, "span", 28)(9, OrderFormComponent_Conditional_18_Conditional_9_Template, 4, 0, "span", 29);
    \u0275\u0275elementStart(10, "button", 30);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/purchases/invoices", ctx_r0.order.invoiceId]));
    });
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Voir la facture ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.invoiceName);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.invoiceBadgeClass(ctx_r0.order.invoiceState));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.invoiceStateLabel(ctx_r0.order.invoiceState));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.invoiceDetails && (ctx_r0.invoiceDetails.montantDu ?? 0) > 0 ? 8 : (ctx_r0.invoiceDetails == null ? null : ctx_r0.invoiceDetails.state) === "paid" ? 9 : -1);
  }
}
function OrderFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275text(2, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_20_Conditional_12_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r11.ref);
  }
}
function OrderFormComponent_Conditional_20_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_20_Conditional_12_For_2_Template_div_mousedown_0_listener() {
      const s_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectSupplier(s_r11));
    });
    \u0275\u0275elementStart(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, OrderFormComponent_Conditional_20_Conditional_12_For_2_Conditional_5_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r11.name.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r11.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r11.ref ? 5 : -1);
  }
}
function OrderFormComponent_Conditional_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, OrderFormComponent_Conditional_20_Conditional_12_For_2_Template, 6, 3, "div", 56, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredSuppliers);
  }
}
function OrderFormComponent_Conditional_20_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_20_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter une ligne ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_20_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 4);
    \u0275\u0275text(2, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, 'Aucune ligne. Cliquez sur "Ajouter une ligne".');
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "PSA %");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 72);
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_10_Template_button_mousedown_0_listener() {
      \u0275\u0275restoreView(_r15);
      const \u0275$index_260_r14 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearLine(\u0275$index_260_r14));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1, "Aucun article dans le stock");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_260_r14 = \u0275\u0275nextContext(3).$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Aucun r\xE9sultat pour "', ctx_r0.lineSearches[\u0275$index_260_r14], '"');
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_1_Conditional_0_Template, 2, 0, "div", 89)(1, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_1_Conditional_1_Template, 2, 1, "div", 89);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r0.allProducts.length === 0 ? 0 : 1);
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_2_For_1_Template_div_mousedown_0_listener() {
      const p_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const \u0275$index_260_r14 = \u0275\u0275nextContext(3).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectProduct(\u0275$index_260_r14, p_r17));
    });
    \u0275\u0275elementStart(1, "span", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 94);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.defaultCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 3, p_r17.standardPrice, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_2_For_1_Template, 8, 6, "div", 90, _forTrack0);
  }
  if (rf & 2) {
    const \u0275$index_260_r14 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.getSuggestions(\u0275$index_260_r14));
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275conditionalCreate(1, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_1_Template, 2, 1)(2, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_260_r14 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", ctx_r0.dropdownRect.top, "px")("left", ctx_r0.dropdownRect.left, "px")("width", ctx_r0.dropdownRect.width, "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getSuggestions(\u0275$index_260_r14).length === 0 ? 1 : 2);
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r18.rabaisUnitaire, "1.0-0"), " ");
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.supplierPrecompteRate, "%");
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 72)(1, "button", 95);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const \u0275$index_260_r14 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_260_r14));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64)(4, "div", 73)(5, "div", 74)(6, "span", 75);
    \u0275\u0275text(7, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 76, 0);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_ngModelChange_8_listener($event) {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearches[\u0275$index_260_r14], $event) || (ctx_r0.lineSearches[\u0275$index_260_r14] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_focus_8_listener($event) {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_260_r14, $event));
    })("blur", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_blur_8_listener() {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeSuggestions(\u0275$index_260_r14));
    })("input", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_input_8_listener($event) {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_260_r14, $event));
    })("keydown.enter", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_keydown_enter_8_listener($event) {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onProductSearchEnter(\u0275$index_260_r14, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_10_Template, 3, 0, "button", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_11_Template, 3, 7, "div", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 79)(13, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_ngModelChange_13_listener($event) {
      const line_r18 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(line_r18.quantity, $event) || (line_r18.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_ngModelChange_13_listener() {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.computeLine(\u0275$index_260_r14));
    })("keydown.enter", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_keydown_enter_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 81)(15, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_ngModelChange_15_listener($event) {
      const line_r18 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(line_r18.prixUnitaire, $event) || (line_r18.prixUnitaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_ngModelChange_15_listener() {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.computeLine(\u0275$index_260_r14));
    })("keydown.enter", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_keydown_enter_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 83);
    \u0275\u0275conditionalCreate(17, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_17_Template, 2, 4)(18, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_18_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 84)(20, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_ngModelChange_20_listener($event) {
      const line_r18 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(line_r18.tauxTVA, $event) || (line_r18.tauxTVA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_ngModelChange_20_listener() {
      const \u0275$index_260_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.computeLine(\u0275$index_260_r14));
    })("keydown.enter", function OrderFormComponent_Conditional_20_Conditional_31_For_24_Template_input_keydown_enter_20_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_21_Template, 2, 1, "td", 86);
    \u0275\u0275elementStart(22, "td", 70);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 71);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, OrderFormComponent_Conditional_20_Conditional_31_For_24_Conditional_28_Template, 4, 0, "td", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r18 = ctx.$implicit;
    const \u0275$index_260_r14 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_260_r14 + 1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearches[\u0275$index_260_r14]);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r18.productId && !ctx_r0.isReadOnly ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSuggestionIdx === \u0275$index_260_r14 && ctx_r0.dropdownRect ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r18.quantity);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r18.prixUnitaire);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((line_r18.rabaisUnitaire ?? 0) > 0 ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", line_r18.tauxTVA);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.supplierPrecompteRate > 0 ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 16, line_r18.montantHT ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 19, line_r18.montantTTC ?? 0, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 28 : -1);
  }
}
function OrderFormComponent_Conditional_20_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 62)(2, "thead")(3, "tr")(4, "th", 63);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 64);
    \u0275\u0275text(7, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 65);
    \u0275\u0275text(9, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 66);
    \u0275\u0275text(11, "Prix unitaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 67);
    \u0275\u0275text(13, "Rabais/u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 68);
    \u0275\u0275text(15, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, OrderFormComponent_Conditional_20_Conditional_31_Conditional_16_Template, 2, 0, "th", 69);
    \u0275\u0275elementStart(17, "th", 70);
    \u0275\u0275text(18, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 71);
    \u0275\u0275text(20, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, OrderFormComponent_Conditional_20_Conditional_31_Conditional_21_Template, 1, 0, "th", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, OrderFormComponent_Conditional_20_Conditional_31_For_24_Template, 29, 22, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r0.supplierPrecompteRate > 0 ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.order.lines);
  }
}
function OrderFormComponent_Conditional_20_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span");
    \u0275\u0275text(2, "+ Frais d'enl\xE8vement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r0.totalFraisEnlevement, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_20_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span");
    \u0275\u0275text(2, "\u2212 Rabais obtenus (601901)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(5, 1, ctx_r0.totalRabais, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 33)(2, "div", 34)(3, "label");
    \u0275\u0275text(4, "Fournisseur ");
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 36)(8, "div", 37)(9, "span", 38);
    \u0275\u0275text(10, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.supplierSearch, $event) || (ctx_r0.supplierSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function OrderFormComponent_Conditional_20_Template_input_input_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.supplierDropdown = true);
    })("focus", function OrderFormComponent_Conditional_20_Template_input_focus_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.supplierDropdown = true);
    })("blur", function OrderFormComponent_Conditional_20_Template_input_blur_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSupplierBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, OrderFormComponent_Conditional_20_Conditional_12_Template, 3, 0, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 34)(14, "label");
    \u0275\u0275text(15, "Date commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.date, $event) || (ctx_r0.order.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 34)(18, "label");
    \u0275\u0275text(19, "Date livraison pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.dateExpected, $event) || (ctx_r0.order.dateExpected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 42)(22, "label");
    \u0275\u0275text(23, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_20_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.notes, $event) || (ctx_r0.order.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 44)(26, "div", 45)(27, "h3");
    \u0275\u0275text(28, "Lignes de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, OrderFormComponent_Conditional_20_Conditional_29_Template, 4, 0, "button", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, OrderFormComponent_Conditional_20_Conditional_30_Template, 5, 0, "div", 47)(31, OrderFormComponent_Conditional_20_Conditional_31_Template, 25, 2, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 49)(33, "div", 50)(34, "div", 51)(35, "span");
    \u0275\u0275text(36, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 51)(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 52)(47, "span");
    \u0275\u0275text(48, "= Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(52, OrderFormComponent_Conditional_20_Conditional_52_Template, 6, 4, "div", 53);
    \u0275\u0275conditionalCreate(53, OrderFormComponent_Conditional_20_Conditional_53_Template, 6, 4, "div", 54);
    \u0275\u0275elementStart(54, "div", 55)(55, "span");
    \u0275\u0275text(56, "= Net \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.supplierSearch);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.supplierDropdown && ctx_r0.filteredSuppliers.length > 0 ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.date);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.dateExpected);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.notes);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.lines.length === 0 ? 30 : 31);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(39, 18, ctx_r0.totalHT, "1.0-0"), " FCFA");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+ Taxes (TVA", ctx_r0.totalPrecompte > 0 ? " + PSA" : "", ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(45, 21, ctx_r0.totalTaxes, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(51, 24, ctx_r0.totalTTC, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalFraisEnlevement > 0 ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.totalRabais > 0 ? 53 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(59, 27, ctx_r0.netAPayer, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-audit-trail", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("entityId", ctx_r0.orderId);
  }
}
function OrderFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-print-preview", 96);
    \u0275\u0275listener("closed", function OrderFormComponent_Conditional_22_Template_app_print_preview_closed_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePrint());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("purchaseOrder", ctx_r0.order)("companyName", ctx_r0.printCompanyName)("companyPhone", ctx_r0.printCompanyPhone)("companyLogoUrl", ctx_r0.printCompanyLogoUrl)("companyLogoDataUrl", ctx_r0.printCompanyLogoDataUrl)("companyInfo", ctx_r0.printCompany);
  }
}
var OrderFormComponent = class _OrderFormComponent {
  get filteredSuppliers() {
    if (!this.supplierSearch.trim())
      return this.suppliers.slice(0, 50);
    const q = this.supplierSearch.toLowerCase();
    return this.suppliers.filter((s) => s.name?.toLowerCase().includes(q) || (s.ref || "").toLowerCase().includes(q)).slice(0, 50);
  }
  selectSupplier(s) {
    this.order.partnerId = s.id;
    this.supplierSearch = s.name + (s.ref ? " (" + s.ref + ")" : "");
    this.supplierDropdown = false;
    this.loadSupplierPrecompteRate(s.id);
  }
  loadSupplierPrecompteRate(partnerId) {
    const cid = this.authService.getCompanyId() ?? 1;
    this.purchaseService.getSupplierPrecompteRate(partnerId, cid).subscribe({
      next: ({ tauxPrecompte }) => {
        this.supplierPrecompteRate = tauxPrecompte ?? 0;
        this.order.lines.forEach((l, i) => {
          this.computeLine(i);
          if (l.productId)
            this.loadSupplierPriceForLine(i, l.productId);
        });
      },
      error: () => {
        this.supplierPrecompteRate = 0;
      }
    });
  }
  onSupplierBlur() {
    setTimeout(() => this.supplierDropdown = false, 200);
  }
  onWindowChange() {
    this.activeSuggestionIdx = null;
  }
  constructor(purchaseService, accountingService, stockService, authService, companyService, enlevementService, route, router) {
    this.purchaseService = purchaseService;
    this.accountingService = accountingService;
    this.stockService = stockService;
    this.authService = authService;
    this.companyService = companyService;
    this.enlevementService = enlevementService;
    this.route = route;
    this.router = router;
    this.orderId = null;
    this.order = this.emptyOrder();
    this.suppliers = [];
    this.allProducts = [];
    this.loading = false;
    this.saving = false;
    this.confirming = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.showPrintModal = false;
    this.invoiceDetails = null;
    this.supplierPrecompteRate = 0;
    this.fraisEnlevementLines = [];
    this.orderTotalPrecompte = 0;
    this.TVA_DEFAULT = 19.25;
    this.lineSearches = [];
    this.activeSuggestionIdx = null;
    this.lineSearchResults = [];
    this.searchTimer = null;
    this.dropdownRect = null;
    this.supplierSearch = "";
    this.supplierDropdown = false;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.orderId = id ? +id : null;
    this.loadReferenceData();
    if (this.orderId)
      this.loadOrder(this.orderId);
  }
  emptyOrder() {
    return {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      partnerId: 0,
      companyId: 0,
      lines: []
    };
  }
  loadReferenceData() {
    const companyId = this.authService.getCompanyId() ?? 1;
    this.order.companyId = companyId;
    this.accountingService.getPartners(companyId).subscribe({
      next: (data) => this.suppliers = data.filter((p) => p.type === "supplier" || p.type === "both")
    });
    this.stockService.getProducts(companyId).subscribe({
      next: (data) => {
        this.allProducts = data.filter((p) => p.type === "product" || p.type === "consu");
      },
      error: () => {
        this.errorMsg = "Impossible de charger les articles du stock";
      }
    });
  }
  loadOrder(id) {
    this.loading = true;
    this.purchaseService.getOrder(id).subscribe({
      next: (data) => {
        this.order = data;
        this.order.lines.forEach((l) => {
          l.consigne = CONSIGNE_CODES.has((l.productCode ?? "").trim().toUpperCase());
        });
        this.supplierSearch = data.partnerName || "";
        this.lineSearches = data.lines.map((l) => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
        this.lineSearchResults = data.lines.map(() => []);
        this.loading = false;
        if (data.partnerId)
          this.loadSupplierPrecompteRate(data.partnerId);
        if (data.invoiceId) {
          this.purchaseService.getInvoice(data.invoiceId).subscribe({
            next: (inv) => {
              this.invoiceDetails = inv;
              this.enlevementService.getInvoiceCosts(data.invoiceId).subscribe({
                next: (costs) => {
                  this.fraisEnlevementLines = costs;
                },
                error: () => {
                  this.fraisEnlevementLines = [];
                }
              });
            }
          });
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get isReadOnly() {
    return !!this.order.state && !["draft"].includes(this.order.state);
  }
  // ===== LINES =====
  addLine() {
    this.order.lines.push({
      description: "",
      quantity: 1,
      prixUnitaire: 0,
      tauxTVA: this.TVA_DEFAULT
    });
    this.lineSearches.push("");
    this.lineSearchResults.push([]);
  }
  removeLine(i) {
    this.order.lines.splice(i, 1);
    this.lineSearches.splice(i, 1);
    this.lineSearchResults.splice(i, 1);
  }
  computeLine(i) {
    const line = this.order.lines[i];
    const qty = line.quantity ?? 0;
    const pu = line.prixUnitaire ?? 0;
    const tva = line.tauxTVA ?? 0;
    const pc = line.consigne ? 0 : this.supplierPrecompteRate ?? 0;
    line.montantHT = Math.round(qty * pu * 100) / 100;
    line.montantTVA = Math.round(line.montantHT * tva) / 100;
    line.montantPrecompte = Math.round(line.montantHT * pc) / 100;
    line.montantTTC = Math.round((line.montantHT + line.montantTVA + (line.montantPrecompte ?? 0)) * 100) / 100;
    line.totalRabaisLigne = Math.round(qty * (line.rabaisUnitaire ?? 0) * 100) / 100;
    this.computeTotals();
  }
  computeTotals() {
    this.order.totalHT = this.order.lines.reduce((s, l) => s + (l.montantHT ?? 0), 0);
    this.order.totalTVA = this.order.lines.reduce((s, l) => s + (l.montantTVA ?? 0), 0);
    this.orderTotalPrecompte = this.order.lines.reduce((s, l) => s + (l.montantPrecompte ?? 0), 0);
    this.order.totalTTC = (this.order.totalHT ?? 0) + (this.order.totalTVA ?? 0) + this.orderTotalPrecompte;
  }
  // ===== AUTOCOMPLETE =====
  getSuggestions(i) {
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const q = (this.lineSearches[i] ?? "").toLowerCase().trim();
    if (!q)
      return this.allProducts.slice(0, 8);
    const matches = this.allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode ?? "").toLowerCase().includes(q));
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
  onSearchInput(i) {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    const query = this.lineSearches[i]?.trim();
    if (!query || query.length < 2 || this.allProducts.length > 0) {
      this.lineSearchResults[i] = [];
      return;
    }
    this.searchTimer = setTimeout(() => {
      const companyId = this.authService.getCompanyId() ?? 1;
      this.stockService.searchProducts(query, companyId).subscribe({
        next: (products) => {
          this.lineSearchResults[i] = products.slice(0, 10);
        },
        error: () => {
          this.lineSearchResults[i] = [];
        }
      });
    }, 300);
  }
  openSuggestions(i, event) {
    if (event instanceof FocusEvent && this.order.lines[i]?.productId) {
      this.lineSearches[i] = "";
    }
    if (event?.target) {
      const rect = event.target.getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
    this.onSearchInput(i);
  }
  onProductSearchEnter(i, event) {
    event.preventDefault();
    const suggestions = this.getSuggestions(i);
    if (suggestions.length > 0) {
      this.selectProduct(i, suggestions[0]);
    }
  }
  onLineEnter(event) {
    event.preventDefault();
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0)
        inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }
  closeSuggestions(i) {
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      if (i !== void 0) {
        const line = this.order.lines[i];
        if (line?.productId && !this.lineSearches[i]) {
          this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
        }
      }
    }, 200);
  }
  selectProduct(i, product) {
    const line = this.order.lines[i];
    line.productId = product.id;
    line.productCode = product.defaultCode ?? "";
    line.description = product.name;
    line.standardPrice = product.standardPrice ?? 0;
    line.prixUnitaire = product.standardPrice ?? 0;
    line.rabaisUnitaire = 0;
    line.totalRabaisLigne = 0;
    line.tauxTVA = product.exemptTvaAchat ? 0 : line.tauxTVA ?? this.TVA_DEFAULT;
    line.categoryId = product.categoryId;
    line.consigne = CONSIGNE_CODES.has((product.defaultCode ?? "").trim().toUpperCase());
    this.lineSearches[i] = `[${product.defaultCode}] ${product.name}`;
    this.activeSuggestionIdx = null;
    this.computeLine(i);
    if (product.id)
      this.loadSupplierPriceForLine(i, product.id);
  }
  /** Récupère le tarif fournisseur d'un produit et place la différence (standard − tarif) en rabais */
  loadSupplierPriceForLine(i, productId) {
    const supplierId = this.order.partnerId;
    const companyId = this.authService.getCompanyId() ?? 1;
    if (!supplierId || !companyId)
      return;
    this.purchaseService.getPrixFournisseurForProduct(supplierId, productId, companyId).subscribe({
      next: (prix) => {
        const line = this.order.lines[i];
        if (!line || !prix)
          return;
        const std = line.standardPrice ?? line.prixUnitaire ?? 0;
        line.rabaisUnitaire = Math.max(0, Math.round((std - (prix.prixFournisseur ?? 0)) * 100) / 100);
        this.computeLine(i);
      },
      error: () => {
      }
    });
  }
  get totalRabais() {
    return this.order.lines.reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }
  /** Rabais TTC (approximation TVA + précompte) déduit du net à payer */
  get totalRabaisTTC() {
    return this.order.lines.reduce((s, l) => {
      const r = l.totalRabaisLigne ?? 0;
      const pc = l.consigne ? 0 : this.supplierPrecompteRate ?? 0;
      return s + r * (1 + (l.tauxTVA ?? 0) / 100 + pc / 100);
    }, 0);
  }
  clearLine(i) {
    const line = this.order.lines[i];
    line.productId = void 0;
    line.productCode = "";
    line.description = "";
    line.prixUnitaire = 0;
    line.standardPrice = 0;
    line.rabaisUnitaire = 0;
    line.totalRabaisLigne = 0;
    this.lineSearches[i] = "";
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
    this.computeLine(i);
  }
  // ===== SAVE =====
  saveOrder() {
    if (!this.order.partnerId) {
      this.errorMsg = "S\xE9lectionnez un fournisseur";
      return;
    }
    if (this.order.lines.length === 0) {
      this.errorMsg = "Ajoutez au moins une ligne";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const action = this.orderId ? this.purchaseService.updateOrder(this.orderId, this.order) : this.purchaseService.createOrder(this.order);
    action.subscribe({
      next: (saved) => {
        this.saving = false;
        if (!this.orderId) {
          this.router.navigate(["/purchases/orders", saved.id]);
        } else {
          this.order = saved;
          this.successMsg = "Commande sauvegard\xE9e";
          setTimeout(() => this.successMsg = "", 4e3);
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  confirmOrder() {
    if (!this.orderId)
      return;
    if (!confirm("Confirmer la commande ?"))
      return;
    this.confirming = true;
    this.errorMsg = "";
    this.purchaseService.confirmOrder(this.orderId).subscribe({
      next: (updated) => {
        this.confirming = false;
        this.order = updated;
        if (updated.invoiceId) {
          this.successMsg = `Commande confirm\xE9e. Redirection vers la facture...`;
          setTimeout(() => this.router.navigate(["/purchases/invoices", updated.invoiceId]), 800);
        } else {
          this.successMsg = "Commande confirm\xE9e.";
        }
      },
      error: (err) => {
        this.confirming = false;
        this.errorMsg = err.error?.message || "Erreur lors de la confirmation";
      }
    });
  }
  cancelOrder() {
    if (!this.orderId)
      return;
    if (!confirm("Annuler la commande ?"))
      return;
    this.purchaseService.cancelOrder(this.orderId).subscribe({
      next: (updated) => {
        this.order = updated;
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors de l'annulation";
      }
    });
  }
  backToList() {
    this.router.navigate(["/purchases/orders"]);
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
  stateLabel(s) {
    const map = { draft: "Brouillon", confirmed: "Confirm\xE9e", received: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" };
    return map[s ?? ""] ?? s ?? "";
  }
  invoiceStateLabel(s) {
    const map = { draft: "Brouillon", posted: "Valid\xE9e", paid: "Pay\xE9e", cancelled: "Annul\xE9e" };
    return map[s ?? ""] ?? s ?? "";
  }
  invoiceBadgeClass(s) {
    const map = { draft: "badge-draft", posted: "badge-posted", paid: "badge-success", cancelled: "badge-cancel" };
    return map[s ?? ""] ?? "badge-secondary";
  }
  get totalHT() {
    return this.invoiceDetails?.totalHT ?? this.order.totalHT ?? 0;
  }
  get totalTVA() {
    return this.invoiceDetails?.totalTVA ?? this.order.totalTVA ?? 0;
  }
  get totalPrecompte() {
    return this.invoiceDetails?.totalPrecompte ?? this.orderTotalPrecompte;
  }
  get totalTaxes() {
    return this.totalTVA + this.totalPrecompte;
  }
  get totalLiquideNu() {
    return this.invoiceDetails?.totalLiquideNu ?? this.totalHT + this.totalTVA;
  }
  get totalTTC() {
    return this.invoiceDetails?.totalTTC ?? this.order.totalTTC ?? 0;
  }
  get totalFraisEnlevement() {
    if (this.invoiceDetails?.fraisEnlevementTTC)
      return this.invoiceDetails.fraisEnlevementTTC;
    return this.fraisEnlevementLines.reduce((s, l) => s + (l.montantTotal ?? 0), 0);
  }
  get netAPayer() {
    return this.invoiceDetails?.netAPayer ?? Math.round(this.totalTTC - this.totalRabaisTTC);
  }
  get supplierPrecompteLabel() {
    return this.supplierPrecompteRate > 0 ? `PSA (${this.supplierPrecompteRate}%)` : "PSA";
  }
  static {
    this.\u0275fac = function OrderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderFormComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(EnlevementService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderFormComponent, selectors: [["app-purchase-order-form"]], viewQuery: function OrderFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.productInputs = _t);
      }
    }, hostBindings: function OrderFormComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function OrderFormComponent_scroll_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow)("resize", function OrderFormComponent_resize_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 23, vars: 14, consts: [["productInput", ""], [1, "pur-form-page"], [1, "form-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "badge", 3, "class"], [1, "header-actions"], [1, "btn-print"], [1, "btn-save", 3, "disabled"], [1, "btn-confirm", 3, "disabled"], [1, "btn-cancel-order"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "picking-banner"], [1, "invoice-banner"], [1, "loading-state"], [1, "form-body"], ["entityType", "PURCHASE_ORDER", 3, "entityId"], ["docType", "purchase_order", 3, "purchaseOrder", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"], [1, "badge"], [1, "btn-print", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-confirm", 3, "click", "disabled"], [1, "btn-cancel-order", 3, "click"], [3, "click"], [1, "btn-goto-reception"], [1, "btn-goto-reception", 3, "click"], [1, "debt-badge"], [1, "paid-badge"], [1, "btn-goto-invoice", 3, "click"], [1, "material-icons", 2, "font-size", "14px"], [1, "spinner"], [1, "meta-section"], [1, "form-group"], [1, "required"], [1, "ac-wrap"], [1, "ac-field"], [1, "material-icons", "ac-icon"], ["type", "text", "placeholder", "Chercher un fournisseur\u2026", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "input", "focus", "blur", "ngModel", "disabled"], [1, "ac-dropdown"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-group", "full-width"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "lines-section"], [1, "lines-header"], [1, "btn-add-line"], [1, "lines-empty"], [1, "lines-table-wrap"], [1, "totals-section"], [1, "totals-box"], [1, "total-row"], [1, "total-row", "total-ttc"], [1, "total-row", "total-frais"], [1, "total-row", 2, "color", "#e65100"], [1, "total-row", "net-a-payer"], [1, "ac-item"], [1, "ac-item", 3, "mousedown"], [1, "ac-avatar"], [1, "ac-name"], [1, "ac-code"], [1, "btn-add-line", 3, "click"], [1, "lines-table"], [1, "col-num"], [1, "col-product"], [1, "col-qty", "text-right"], [1, "col-pu", "text-right"], [1, "text-right", 2, "color", "#e65100"], [1, "col-tva", "text-right"], [1, "col-pc", "text-right"], [1, "col-ht", "text-right"], [1, "col-ttc", "text-right"], [1, "col-del"], [1, "autocomplete-wrap"], [1, "ac-input-row"], [1, "material-icons", "line-search-icon"], ["type", "text", "placeholder", "Rechercher un article...", 1, "ac-input", 3, "ngModelChange", "focus", "blur", "input", "keydown.enter", "ngModel", "disabled"], ["title", "Effacer", 1, "btn-clear-line"], [1, "suggestions-panel", 3, "top", "left", "width"], [1, "col-qty"], ["type", "number", "min", "0.001", "step", "1", 1, "form-control", "text-right", 3, "ngModelChange", "keydown.enter", "ngModel", "disabled"], [1, "col-pu"], ["type", "number", "min", "0", "step", "1", 1, "form-control", "text-right", 3, "ngModelChange", "keydown.enter", "ngModel", "disabled"], [1, "text-right", 2, "color", "#e65100", "font-weight", "600"], [1, "col-tva"], ["type", "number", "min", "0", "max", "100", "step", "0.01", 1, "form-control", "text-right", 3, "ngModelChange", "keydown.enter", "ngModel", "disabled"], [1, "col-pc", "text-right", "text-muted"], ["title", "Effacer", 1, "btn-clear-line", 3, "mousedown"], [1, "suggestions-panel"], [1, "suggestion-empty"], [1, "suggestion-item"], [1, "suggestion-item", 3, "mousedown"], [1, "sug-code"], [1, "sug-name"], [1, "sug-price"], ["title", "Supprimer", 1, "btn-remove-line", 3, "click"], ["docType", "purchase_order", 3, "closed", "purchaseOrder", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"]], template: function OrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function OrderFormComponent_Template_button_click_2_listener() {
          return ctx.backToList();
        });
        \u0275\u0275elementStart(3, "span", 4);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5)(6, "h1");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_8_Template, 2, 3, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275conditionalCreate(10, OrderFormComponent_Conditional_10_Template, 4, 0, "button", 8);
        \u0275\u0275conditionalCreate(11, OrderFormComponent_Conditional_11_Template, 4, 2, "button", 9);
        \u0275\u0275conditionalCreate(12, OrderFormComponent_Conditional_12_Template, 4, 2, "button", 10);
        \u0275\u0275conditionalCreate(13, OrderFormComponent_Conditional_13_Template, 4, 0, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, OrderFormComponent_Conditional_14_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(15, OrderFormComponent_Conditional_15_Template, 6, 1, "div", 13);
        \u0275\u0275conditionalCreate(16, OrderFormComponent_Conditional_16_Template, 6, 1, "div", 14);
        \u0275\u0275conditionalCreate(17, OrderFormComponent_Conditional_17_Template, 9, 5, "div", 14);
        \u0275\u0275conditionalCreate(18, OrderFormComponent_Conditional_18_Template, 14, 5, "div", 15);
        \u0275\u0275conditionalCreate(19, OrderFormComponent_Conditional_19_Template, 3, 0, "div", 16)(20, OrderFormComponent_Conditional_20_Template, 60, 30, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, OrderFormComponent_Conditional_21_Template, 1, 1, "app-audit-trail", 18);
        \u0275\u0275conditionalCreate(22, OrderFormComponent_Conditional_22_Template, 1, 6, "app-print-preview", 19);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.orderId ? ctx.order.name ?? "Commande" : "Nouvelle commande fournisseur");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.orderId && ctx.order.state ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state === "draft" || !ctx.order.state ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state === "draft" && ctx.orderId ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state === "draft" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.receptionWarehouseName ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.pickingName ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.invoiceId ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 19 : 20);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.orderId ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPrintModal && ctx.orderId ? 22 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, PrintPreviewComponent, AuditTrailComponent, DecimalPipe], styles: ['\n.pur-form-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-print[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-print[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-save[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%], \n.btn-cancel-order[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-cancel-order[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-save[_ngcontent-%COMP%]:disabled, \n.btn-confirm[_ngcontent-%COMP%]:disabled, \n.btn-cancel-order[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-cancel-order[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-cancel-order[_ngcontent-%COMP%]:hover {\n  background: #842029;\n  color: white;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.picking-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: var(--info);\n}\n.picking-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.btn-goto-reception[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--warning);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-goto-reception[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-goto-reception[_ngcontent-%COMP%]:hover {\n  background: var(--warning);\n}\n.invoice-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: var(--primary-subtle);\n  border: 1px solid var(--primary-subtle);\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: var(--primary);\n}\n.invoice-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n}\n.invoice-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n}\n.debt-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid var(--warning-bg);\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.paid-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.btn-goto-invoice[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 14px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-goto-invoice[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-goto-invoice[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--border);\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.form-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.meta-section[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.meta-section[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lines-section[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.lines-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #00A09D;\n  color: #00A09D;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 160, 157, 0.08);\n}\n.lines-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px;\n  color: var(--text-muted);\n  border: 2px dashed #e9ecef;\n  border-radius: 8px;\n}\n.lines-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 8px;\n}\n.lines-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  background: var(--bg-elevated);\n  font-weight: 700;\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .btn-remove-line[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lines-table[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lines-table[_ngcontent-%COMP%]   .col-product[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-qty[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-pu[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-tva[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-ht[_ngcontent-%COMP%] {\n  width: 110px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.lines-table[_ngcontent-%COMP%]   .col-ttc[_ngcontent-%COMP%] {\n  width: 120px;\n  font-family: "Roboto Mono", monospace;\n  font-weight: 700;\n  color: #00A09D;\n}\n.lines-table[_ngcontent-%COMP%]   .col-del[_ngcontent-%COMP%] {\n  width: 36px;\n}\n.autocomplete-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  position: relative;\n}\n.line-search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6px;\n  font-size: 14px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n}\n.ac-input-row[_ngcontent-%COMP%]:focus-within   .line-search-icon[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.ac-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: var(--text-primary);\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.15s, background 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.ac-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.ac-input[_ngcontent-%COMP%]:focus {\n  border-color: #00A09D;\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.ac-input[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  border-color: transparent;\n}\n.ac-input[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.btn-clear-line[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 4px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-clear-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-clear-line[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.suggestions-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  z-index: 9999;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.suggestion-empty[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-style: italic;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.suggestion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  transition: background 0.12s;\n  border-bottom: 1px solid var(--border-light);\n}\n.suggestion-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.suggestion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.suggestion-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.suggestion-item[_ngcontent-%COMP%]   .sug-code[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #00A09D;\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  white-space: nowrap;\n  min-width: 52px;\n  text-align: center;\n}\n.suggestion-item[_ngcontent-%COMP%]   .sug-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.suggestion-item[_ngcontent-%COMP%]   .sug-price[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: #00A09D;\n  font-weight: 700;\n  white-space: nowrap;\n  font-family: monospace;\n  background: var(--bg-hover);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.form-control.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 4px;\n  transition: border-color 0.15s, background 0.15s;\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #00A09D;\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  border-color: transparent;\n  background: transparent;\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  color: var(--border);\n  cursor: pointer;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n  opacity: 1 !important;\n}\n.totals-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.totals-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  min-width: 300px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.total-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.total-row.total-ttc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #00A09D;\n  padding-top: 12px;\n}\n.total-row.total-precompte[_ngcontent-%COMP%] {\n  color: var(--warning, #c27c00);\n  font-weight: 600;\n}\n.total-row.total-frais[_ngcontent-%COMP%] {\n  color: var(--info, #0891b2);\n}\n.total-row.net-a-payer[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--success, #16a34a);\n  border-top: 2px solid var(--border-light);\n  padding-top: 12px;\n}\n.total-row.precompte-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  border-bottom: none;\n  padding: 4px 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #cff4fc;\n  color: var(--info);\n}\n.badge-received[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-picking-draft[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-picking-done[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  font-size: 16px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap[_ngcontent-%COMP%]:focus-within   .ac-icon[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.ac-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ac-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  right: 0;\n  z-index: 1050;\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 280px;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_acDrop 0.12s ease-out;\n}\n@keyframes _ngcontent-%COMP%_acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ac-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-left-color: #00A09D;\n}\n.ac-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 160, 157, 0.15);\n  color: #00A09D;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.ac-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=order-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderFormComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-order-form", standalone: true, imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditTrailComponent], template: `<div class="pur-form-page">
  <!-- Header -->
  <div class="form-header">
    <button class="btn-back" (click)="backToList()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      <h1>{{ orderId ? (order.name ?? 'Commande') : 'Nouvelle commande fournisseur' }}</h1>
      @if (order.state) {
        <span class="badge" [class]="'badge-' + order.state">{{ stateLabel(order.state) }}</span>
      }
    </div>
    <div class="header-actions">
      @if (orderId && order.state) {
        <button class="btn-print" (click)="openPrint()">
          <span class="material-icons">print</span> Imprimer
        </button>
      }
      @if (order.state === 'draft' || !order.state) {
        <button class="btn-save" (click)="saveOrder()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
        </button>
      }
      @if (order.state === 'draft' && orderId) {
        <button class="btn-confirm" (click)="confirmOrder()" [disabled]="confirming">
          <span class="material-icons">check_circle</span>
          {{ confirming ? 'Confirmation...' : 'Confirmer' }}
        </button>
      }
      @if (order.state === 'draft') {
        <button class="btn-cancel-order" (click)="cancelOrder()">
          <span class="material-icons">cancel</span>
          Annuler
        </button>
      }
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span>{{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-error">
      <span class="material-icons">error</span>{{ errorMsg }}
      <button (click)="errorMsg = ''">\xD7</button>
    </div>
  }

  <!-- Entrep\xF4t de r\xE9ception (informatif) -->
  @if (order.receptionWarehouseName) {
    <div class="picking-banner">
      <span class="material-icons">warehouse</span>
      R\xE9ception pr\xE9vue \xE0 :
      <strong>{{ order.receptionWarehouseName }}</strong>
    </div>
  }

  <!-- Picking info banner (when confirmed) -->
  @if (order.pickingName) {
    <div class="picking-banner">
      <span class="material-icons">inventory_2</span>
      R\xE9ception en attente :
      <strong>{{ order.pickingName }}</strong>
      <span class="badge" [class]="'badge-picking-' + order.pickingState">{{ order.pickingState }}</span>
      @if (order.pickingState !== 'done' && order.pickingId) {
        <button class="btn-goto-reception" (click)="router.navigate(['/stock/receptions/bordereau', order.pickingId])">
          <span class="material-icons">assignment</span> Saisir le bordereau
        </button>
      }
    </div>
  }

  @if (order.invoiceId) {
    <div class="invoice-banner">
      <span class="material-icons">receipt</span>
      Facture associ\xE9e :
      <strong>{{ order.invoiceName }}</strong>
      <span class="badge" [class]="invoiceBadgeClass(order.invoiceState)">{{ invoiceStateLabel(order.invoiceState) }}</span>
      @if (invoiceDetails && (invoiceDetails.montantDu ?? 0) > 0) {
        <span class="debt-badge">
          <span class="material-icons" style="font-size:14px">warning</span>
          Reste d\xFB : {{ invoiceDetails.montantDu | number:'1.0-0' }} FCFA
        </span>
      } @else if (invoiceDetails?.state === 'paid') {
        <span class="paid-badge">
          <span class="material-icons" style="font-size:14px">check_circle</span> Sold\xE9e
        </span>
      }
      <button class="btn-goto-invoice" (click)="router.navigate(['/purchases/invoices', order.invoiceId])">
        <span class="material-icons">open_in_new</span> Voir la facture
      </button>
    </div>
  }

  @if (loading) {
    <div class="loading-state"><span class="spinner"></span> Chargement...</div>
  } @else {
    <div class="form-body">
      <!-- Meta section -->
      <div class="meta-section">
        <div class="form-group">
          <label>Fournisseur <span class="required">*</span></label>
          <div class="ac-wrap">
            <div class="ac-field">
              <span class="material-icons ac-icon">business</span>
              <input type="text" class="form-control"
                     [(ngModel)]="supplierSearch"
                     (input)="supplierDropdown = true"
                     (focus)="supplierDropdown = true"
                     (blur)="onSupplierBlur()"
                     [disabled]="isReadOnly"
                     placeholder="Chercher un fournisseur\u2026"
                     autocomplete="off" />
            </div>
            @if (supplierDropdown && filteredSuppliers.length > 0) {
              <div class="ac-dropdown">
                @for (s of filteredSuppliers; track s.id) {
                  <div class="ac-item" (mousedown)="selectSupplier(s)">
                    <span class="ac-avatar">{{ s.name.charAt(0) }}</span>
                    <span class="ac-name">{{ s.name }}</span>
                    @if (s.ref) { <span class="ac-code">{{ s.ref }}</span> }
                  </div>
                }
              </div>
            }
          </div>
        </div>
        <div class="form-group">
          <label>Date commande</label>
          <input type="date" [(ngModel)]="order.date" [disabled]="isReadOnly" class="form-control" />
        </div>
        <div class="form-group">
          <label>Date livraison pr\xE9vue</label>
          <input type="date" [(ngModel)]="order.dateExpected" [disabled]="isReadOnly" class="form-control" />
        </div>
        <div class="form-group full-width">
          <label>Notes</label>
          <textarea [(ngModel)]="order.notes" [disabled]="isReadOnly" class="form-control" rows="2"></textarea>
        </div>
      </div>

      <!-- Lines -->
      <div class="lines-section">
        <div class="lines-header">
          <h3>Lignes de commande</h3>
          @if (!isReadOnly) {
            <button class="btn-add-line" (click)="addLine()">
              <span class="material-icons">add</span> Ajouter une ligne
            </button>
          }
        </div>

        @if (order.lines.length === 0) {
          <div class="lines-empty">
            <span class="material-icons">playlist_add</span>
            <p>Aucune ligne. Cliquez sur "Ajouter une ligne".</p>
          </div>
        } @else {
          <div class="lines-table-wrap">
            <table class="lines-table">
              <thead>
                <tr>
                  <th class="col-num">#</th>
                  <th class="col-product">Article</th>
                  <th class="col-qty text-right">Qt\xE9</th>
                  <th class="col-pu text-right">Prix unitaire</th>
                  <th class="text-right" style="color:#e65100">Rabais/u</th>
                  <th class="col-tva text-right">TVA %</th>
                  @if (supplierPrecompteRate > 0) {
                    <th class="col-pc text-right">PSA %</th>
                  }
                  <th class="col-ht text-right">Montant HT</th>
                  <th class="col-ttc text-right">Montant TTC</th>
                  @if (!isReadOnly) { <th class="col-del"></th> }
                </tr>
              </thead>
              <tbody>
                @for (line of order.lines; track $index; let i = $index) {
                  <tr>
                    <td class="col-num">{{ i + 1 }}</td>
                    <!-- Autocomplete product -->
                    <td class="col-product">
                      <div class="autocomplete-wrap">
                        <div class="ac-input-row">
                          <span class="material-icons line-search-icon">search</span>
                          <input
                            #productInput
                            type="text"
                            class="ac-input"
                            [(ngModel)]="lineSearches[i]"
                            [disabled]="isReadOnly"
                            placeholder="Rechercher un article..."
                            (focus)="openSuggestions(i, $event)"
                            (blur)="closeSuggestions(i)"
                            (input)="openSuggestions(i, $event)"
                            (keydown.enter)="onProductSearchEnter(i, $event)"
                          />
                          @if (line.productId && !isReadOnly) {
                            <button class="btn-clear-line" (mousedown)="clearLine(i)" title="Effacer">
                              <span class="material-icons">close</span>
                            </button>
                          }
                        </div>
                        @if (activeSuggestionIdx === i && dropdownRect) {
                          <div class="suggestions-panel"
                            [style.top.px]="dropdownRect.top"
                            [style.left.px]="dropdownRect.left"
                            [style.width.px]="dropdownRect.width">
                            @if (getSuggestions(i).length === 0) {
                              @if (allProducts.length === 0) {
                                <div class="suggestion-empty">Aucun article dans le stock</div>
                              } @else {
                                <div class="suggestion-empty">Aucun r\xE9sultat pour "{{ lineSearches[i] }}"</div>
                              }
                            } @else {
                              @for (p of getSuggestions(i); track p.id) {
                                <div class="suggestion-item" (mousedown)="selectProduct(i, p)">
                                  <span class="sug-code">{{ p.defaultCode }}</span>
                                  <span class="sug-name">{{ p.name }}</span>
                                  <span class="sug-price">{{ p.standardPrice | number:'1.0-0' }} FCFA</span>
                                </div>
                              }
                            }
                          </div>
                        }
                      </div>
                    </td>
                    <td class="col-qty">
                      <input type="number" class="form-control text-right" [(ngModel)]="line.quantity"
                        [disabled]="isReadOnly" min="0.001" step="1"
                        (ngModelChange)="computeLine(i)" (keydown.enter)="onLineEnter($event)" />
                    </td>
                    <td class="col-pu">
                      <input type="number" class="form-control text-right" [(ngModel)]="line.prixUnitaire"
                        [disabled]="isReadOnly" min="0" step="1"
                        (ngModelChange)="computeLine(i)" (keydown.enter)="onLineEnter($event)" />
                    </td>
                    <td class="text-right" style="color:#e65100;font-weight:600">
                      @if ((line.rabaisUnitaire ?? 0) > 0) { \u2013 {{ line.rabaisUnitaire | number:'1.0-0' }} } @else { \u2014 }
                    </td>
                    <td class="col-tva">
                      <input type="number" class="form-control text-right" [(ngModel)]="line.tauxTVA"
                        [disabled]="isReadOnly" min="0" max="100" step="0.01"
                        (ngModelChange)="computeLine(i)" (keydown.enter)="onLineEnter($event)" />
                    </td>
                    @if (supplierPrecompteRate > 0) {
                      <td class="col-pc text-right text-muted">{{ supplierPrecompteRate }}%</td>
                    }
                    <td class="col-ht text-right">{{ (line.montantHT ?? 0) | number:'1.0-0' }}</td>
                    <td class="col-ttc text-right">{{ (line.montantTTC ?? 0) | number:'1.0-0' }}</td>
                    @if (!isReadOnly) {
                      <td class="col-del">
                        <button class="btn-remove-line" (click)="removeLine(i)" title="Supprimer">
                          <span class="material-icons">delete_outline</span>
                        </button>
                      </td>
                    }
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>

      <!-- Totals -->
      <div class="totals-section">
        <div class="totals-box">
          <div class="total-row">
            <span>Montant HT</span>
            <span>{{ totalHT | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="total-row">
            <span>+ Taxes (TVA{{ totalPrecompte > 0 ? ' + PSA' : '' }})</span>
            <span>{{ totalTaxes | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="total-row total-ttc">
            <span>= Total TTC</span>
            <span>{{ totalTTC | number:'1.0-0' }} FCFA</span>
          </div>
          @if (totalFraisEnlevement > 0) {
            <div class="total-row total-frais">
              <span>+ Frais d'enl\xE8vement</span>
              <span>{{ totalFraisEnlevement | number:'1.0-0' }} FCFA</span>
            </div>
          }
          @if (totalRabais > 0) {
            <div class="total-row" style="color:#e65100">
              <span>\u2212 Rabais obtenus (601901)</span>
              <span>\u2013 {{ totalRabais | number:'1.0-0' }} FCFA</span>
            </div>
          }
          <div class="total-row net-a-payer">
            <span>= Net \xE0 payer</span>
            <span>{{ netAPayer | number:'1.0-0' }} FCFA</span>
          </div>
        </div>
      </div>
    </div>
  }
</div>

@if (orderId) {
  <app-audit-trail entityType="PURCHASE_ORDER" [entityId]="orderId"></app-audit-trail>
}

@if (showPrintModal && orderId) {
  <app-print-preview
    [purchaseOrder]="order"
    docType="purchase_order"
    [companyName]="printCompanyName"
    [companyPhone]="printCompanyPhone"
    [companyLogoUrl]="printCompanyLogoUrl"
    [companyLogoDataUrl]="printCompanyLogoDataUrl"
    [companyInfo]="printCompany"
    (closed)="closePrint()">
  </app-print-preview>
}
`, styles: ['/* src/app/modules/purchases/components/orders/order-form.component.scss */\n.pur-form-page {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.form-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.btn-back {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-back:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-info h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-print {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-print .material-icons {\n  font-size: 16px;\n}\n.btn-print:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-save,\n.btn-confirm,\n.btn-cancel-order {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.btn-save .material-icons,\n.btn-confirm .material-icons,\n.btn-cancel-order .material-icons {\n  font-size: 16px;\n}\n.btn-save:disabled,\n.btn-confirm:disabled,\n.btn-cancel-order:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-save {\n  background: #00A09D;\n  color: white;\n}\n.btn-save:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-confirm {\n  background: var(--primary);\n  color: white;\n}\n.btn-confirm:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-cancel-order {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-cancel-order:hover {\n  background: #842029;\n  color: white;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.alert-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.picking-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: var(--info);\n}\n.picking-banner .material-icons {\n  color: #00A09D;\n}\n.btn-goto-reception {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--warning);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-goto-reception .material-icons {\n  font-size: 16px;\n}\n.btn-goto-reception:hover {\n  background: var(--warning);\n}\n.invoice-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: var(--primary-subtle);\n  border: 1px solid var(--primary-subtle);\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: var(--primary);\n}\n.invoice-banner strong {\n  color: var(--primary-dark);\n}\n.invoice-banner .material-icons {\n  color: var(--primary-light);\n}\n.debt-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid var(--warning-bg);\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.paid-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.btn-goto-invoice {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 14px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-goto-invoice .material-icons {\n  font-size: 16px;\n}\n.btn-goto-invoice:hover {\n  background: var(--primary);\n}\n.loading-state {\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.spinner {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--border);\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.form-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.meta-section {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.meta-section .full-width {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group .required {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n.form-control:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.lines-section {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.lines-header h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #00A09D;\n  color: #00A09D;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: rgba(0, 160, 157, 0.08);\n}\n.lines-empty {\n  text-align: center;\n  padding: 36px;\n  color: var(--text-muted);\n  border: 2px dashed #e9ecef;\n  border-radius: 8px;\n}\n.lines-empty .material-icons {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 8px;\n}\n.lines-table-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 9px 10px;\n  background: var(--bg-elevated);\n  font-weight: 700;\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table tbody tr {\n  transition: background 0.1s;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table tbody tr:hover .btn-remove-line {\n  opacity: 1;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lines-table td {\n  padding: 4px 6px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table .text-right {\n  text-align: right;\n}\n.lines-table .col-num {\n  width: 28px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lines-table .col-product {\n  min-width: 260px;\n}\n.lines-table .col-qty {\n  width: 80px;\n}\n.lines-table .col-pu {\n  width: 120px;\n}\n.lines-table .col-tva {\n  width: 80px;\n}\n.lines-table .col-ht {\n  width: 110px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.lines-table .col-ttc {\n  width: 120px;\n  font-family: "Roboto Mono", monospace;\n  font-weight: 700;\n  color: #00A09D;\n}\n.lines-table .col-del {\n  width: 36px;\n}\n.autocomplete-wrap {\n  position: relative;\n}\n.ac-input-row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  position: relative;\n}\n.line-search-icon {\n  position: absolute;\n  left: 6px;\n  font-size: 14px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n}\n.ac-input-row:focus-within .line-search-icon {\n  color: #00A09D;\n}\n.ac-input {\n  flex: 1;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: var(--text-primary);\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.15s, background 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.ac-input:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.ac-input:focus {\n  border-color: #00A09D;\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.ac-input:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  border-color: transparent;\n}\n.ac-input {\n  padding-left: 24px;\n}\n.btn-clear-line {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 4px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-clear-line .material-icons {\n  font-size: 14px;\n}\n.btn-clear-line:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.suggestions-panel {\n  position: fixed;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  z-index: 9999;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.suggestion-empty {\n  padding: 14px 18px;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-style: italic;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.suggestion-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  transition: background 0.12s;\n  border-bottom: 1px solid var(--border-light);\n}\n.suggestion-item:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.suggestion-item:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.suggestion-item:hover {\n  background: var(--bg-hover);\n}\n.suggestion-item .sug-code {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #00A09D;\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  white-space: nowrap;\n  min-width: 52px;\n  text-align: center;\n}\n.suggestion-item .sug-name {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.suggestion-item .sug-price {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: #00A09D;\n  font-weight: 700;\n  white-space: nowrap;\n  font-family: monospace;\n  background: var(--bg-hover);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.form-control.text-right {\n  text-align: right;\n}\ntd .form-control {\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 4px;\n  transition: border-color 0.15s, background 0.15s;\n}\ntd .form-control:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\ntd .form-control:focus {\n  border-color: #00A09D;\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\ntd .form-control:disabled {\n  border-color: transparent;\n  background: transparent;\n}\n.btn-remove-line {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  color: var(--border);\n  cursor: pointer;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n  opacity: 1 !important;\n}\n.totals-section {\n  display: flex;\n  justify-content: flex-end;\n}\n.totals-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  min-width: 300px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.total-row:last-child {\n  border-bottom: none;\n}\n.total-row.total-ttc {\n  font-size: 16px;\n  font-weight: 700;\n  color: #00A09D;\n  padding-top: 12px;\n}\n.total-row.total-precompte {\n  color: var(--warning, #c27c00);\n  font-weight: 600;\n}\n.total-row.total-frais {\n  color: var(--info, #0891b2);\n}\n.total-row.net-a-payer {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--success, #16a34a);\n  border-top: 2px solid var(--border-light);\n  padding-top: 12px;\n}\n.total-row.precompte-hint {\n  font-size: 12px;\n  color: var(--text-muted);\n  border-bottom: none;\n  padding: 4px 0;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-confirmed {\n  background: #cff4fc;\n  color: var(--info);\n}\n.badge-received {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-picking-draft {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-picking-done {\n  background: var(--success-bg);\n  color: var(--success);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-field {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon {\n  position: absolute;\n  left: 9px;\n  font-size: 16px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap:focus-within .ac-icon {\n  color: #00A09D;\n}\n.ac-field .form-control {\n  padding-left: 34px;\n}\n.ac-dropdown {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  right: 0;\n  z-index: 1050;\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 280px;\n  overflow-y: auto;\n  animation: acDrop 0.12s ease-out;\n}\n@keyframes acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item:last-child {\n  border-bottom: none;\n}\n.ac-item:hover {\n  background: var(--bg-hover);\n  border-left-color: #00A09D;\n}\n.ac-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 160, 157, 0.15);\n  color: #00A09D;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.ac-name {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=order-form.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AccountingService }, { type: StockService }, { type: AuthService }, { type: CompanyService }, { type: EnlevementService }, { type: ActivatedRoute }, { type: Router }], { productInputs: [{
    type: ViewChildren,
    args: ["productInput"]
  }], onWindowChange: [{
    type: HostListener,
    args: ["window:scroll", []]
  }, {
    type: HostListener,
    args: ["window:resize", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderFormComponent, { className: "OrderFormComponent", filePath: "app/modules/purchases/components/orders/order-form.component.ts", lineNumber: 22 });
})();
export {
  OrderFormComponent
};
//# sourceMappingURL=chunk-LLGGMJWL.js.map
