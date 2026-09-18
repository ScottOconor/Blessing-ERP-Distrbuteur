import {
  CONSIGNE_NAMES,
  PrintPreviewComponent
} from "./chunk-ZYBKBHPO.js";
import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
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
  DecimalPipe,
  HostListener,
  ViewChildren,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵinterpolate1,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/orders/order-form.component.ts
var _c0 = ["productInput"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.code;
function OrderFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", ctx_r0.order.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(ctx_r0.order.state));
  }
}
function OrderFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
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
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
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
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirm());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.confirming || ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirming ? "Confirmation..." : ctx_r0.saving ? "Sauvegarde..." : "Confirmer", " ");
  }
}
function OrderFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg);
  }
}
function OrderFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 4);
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
function OrderFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 4);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Facture associ\xE9e : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/sales/invoices", ctx_r0.order.invoiceId]));
    });
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Voir la facture ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.invoiceName);
  }
}
function OrderFormComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 25);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_18_Conditional_13_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9.ref);
  }
}
function OrderFormComponent_Conditional_18_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_18_Conditional_13_For_2_Template_div_mousedown_0_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectClient(c_r9));
    });
    \u0275\u0275elementStart(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, OrderFormComponent_Conditional_18_Conditional_13_For_2_Conditional_5_Template, 2, 1, "span", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.name.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r9.ref ? 5 : -1);
  }
}
function OrderFormComponent_Conditional_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, OrderFormComponent_Conditional_18_Conditional_13_For_2_Template, 6, 3, "div", 68, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredClients);
  }
}
function OrderFormComponent_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Chargement solde\u2026");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_18_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1, "(doit)");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_18_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1, "(on lui doit)");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_18_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1, "(sold\xE9)");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_18_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Cr\xE9dit : ", \u0275\u0275pipeBind2(2, 1, ctx_r0.partnerCreditDisponible, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 4);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275conditionalCreate(5, OrderFormComponent_Conditional_18_Conditional_15_Conditional_5_Template, 2, 0, "em")(6, OrderFormComponent_Conditional_18_Conditional_15_Conditional_6_Template, 2, 0, "em")(7, OrderFormComponent_Conditional_18_Conditional_15_Conditional_7_Template, 2, 0, "em");
    \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_18_Conditional_15_Conditional_8_Template, 3, 4, "span", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("chip-debit", (ctx_r0.partnerBalance || 0) > 0)("chip-credit", (ctx_r0.partnerBalance || 0) < 0)("chip-zero", (ctx_r0.partnerBalance || 0) === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Solde : ", \u0275\u0275pipeBind2(4, 9, ctx_r0.partnerBalance || 0, "1.0-0"), " FCFA ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.partnerBalance || 0) > 0 ? 5 : (ctx_r0.partnerBalance || 0) < 0 ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.partnerCreditDisponible || 0) > 0 ? 8 : -1);
  }
}
function OrderFormComponent_Conditional_18_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r10 = ctx.$implicit;
    \u0275\u0275property("value", j_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r10.code, " - ", j_r10.name);
  }
}
function OrderFormComponent_Conditional_18_Conditional_29_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r12 = ctx.$implicit;
    \u0275\u0275property("value", w_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r12.name);
  }
}
function OrderFormComponent_Conditional_18_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_Conditional_29_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.order.warehouseId, $event) || (ctx_r0.order.warehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_18_Conditional_29_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onWarehouseChange($event));
    });
    \u0275\u0275elementStart(1, "option", 76);
    \u0275\u0275text(2, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, OrderFormComponent_Conditional_18_Conditional_29_For_4_Template, 2, 2, "option", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.warehouseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warehouses);
  }
}
function OrderFormComponent_Conditional_18_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.warehouseName || "\u2014");
  }
}
function OrderFormComponent_Conditional_18_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_18_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
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
function OrderFormComponent_Conditional_18_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 57);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r14.productCode);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 90);
    \u0275\u0275text(2, "CONSIGNE AUTO");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, OrderFormComponent_Conditional_18_For_73_Conditional_4_Conditional_3_Template, 2, 1, "span", 91);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(line_r14.productCode ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r14.description);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r14.productCode);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 92);
    \u0275\u0275text(2, "D\xC9CONSIGNE");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, OrderFormComponent_Conditional_18_For_73_Conditional_5_Conditional_3_Template, 2, 1, "span", 91);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(line_r14.productCode ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r14.description);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const \u0275$index_266_r16 = \u0275\u0275nextContext(2).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearLine(\u0275$index_266_r16));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r19.defaultCode);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_For_2_Template_div_mousedown_0_listener() {
      const p_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const \u0275$index_266_r16 = \u0275\u0275nextContext(3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectProduct(\u0275$index_266_r16, p_r19));
    });
    \u0275\u0275elementStart(1, "div", 103);
    \u0275\u0275conditionalCreate(2, OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_For_2_Conditional_2_Template, 2, 1, "span", 91);
    \u0275\u0275elementStart(3, "span", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 105)(6, "span", 106);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 107);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r19.defaultCode ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r19.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low", (p_r19.qtyOnHand || 0) <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 7, p_r19.qtyOnHand, "1.0-0"), " ", p_r19.uomName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 10, ctx_r0.computePrixTTC(p_r19.salePrice || 0, p_r19.exemptTva ? 0 : ctx_r0.TVA_DEFAULT), "1.0-0"), " FCFA TTC");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucun article dans le stock ");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_266_r16 = \u0275\u0275nextContext(4).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(' Aucun r\xE9sultat pour "', ctx_r0.lineSearches[\u0275$index_266_r16], '" ');
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275conditionalCreate(1, OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Conditional_3_Conditional_1_Template, 1, 0)(2, OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Conditional_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allProducts.length === 0 ? 1 : 2);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275repeaterCreate(1, OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_For_2_Template, 12, 13, "div", 100, _forTrack0);
    \u0275\u0275conditionalCreate(3, OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Conditional_3_Template, 3, 1, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_266_r16 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r0.dropdownRect.top, "px")("left", ctx_r0.dropdownRect.left, "px")("width", ctx_r0.dropdownRect.width, "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getSuggestions(\u0275$index_266_r16));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getSuggestions(\u0275$index_266_r16).length === 0 ? 3 : -1);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 93)(2, "span", 94);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 95, 0);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const \u0275$index_266_r16 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearches[\u0275$index_266_r16], $event) || (ctx_r0.lineSearches[\u0275$index_266_r16] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function OrderFormComponent_Conditional_18_For_73_Conditional_6_Template_input_focus_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const \u0275$index_266_r16 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_266_r16, $event));
    })("blur", function OrderFormComponent_Conditional_18_For_73_Conditional_6_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r15);
      const \u0275$index_266_r16 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeSuggestions(\u0275$index_266_r16));
    })("input", function OrderFormComponent_Conditional_18_For_73_Conditional_6_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const \u0275$index_266_r16 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_266_r16, $event));
    })("keydown.enter", function OrderFormComponent_Conditional_18_For_73_Conditional_6_Template_input_keydown_enter_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const \u0275$index_266_r16 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onProductSearchEnter(\u0275$index_266_r16, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_6_Template, 3, 0, "button", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, OrderFormComponent_Conditional_18_For_73_Conditional_6_Conditional_7_Template, 4, 7, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = \u0275\u0275nextContext();
    const line_r14 = ctx_r19.$implicit;
    const \u0275$index_266_r16 = ctx_r19.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx_r0.allProducts.length === 0 ? "Aucun article" : "Rechercher...");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearches[\u0275$index_266_r16]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r14.productCode ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSuggestionIdx === \u0275$index_266_r16 && ctx_r0.dropdownRect ? 7 : -1);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r14.productCode);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275conditionalCreate(1, OrderFormComponent_Conditional_18_For_73_Conditional_7_Conditional_1_Template, 2, 1, "span", 91);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r14.productCode ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r14.description);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_266_r16 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("stock-low", ctx_r0.lineStockQty[\u0275$index_266_r16] <= 0)("stock-ok", ctx_r0.lineStockQty[\u0275$index_266_r16] > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.lineStockQty[\u0275$index_266_r16], " dispo ");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_9_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const line_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.quantity, $event) || (line_r14.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_9_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r21);
      const line_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r14));
    })("keydown.enter", function OrderFormComponent_Conditional_18_For_73_Conditional_9_Template_input_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, OrderFormComponent_Conditional_18_For_73_Conditional_9_Conditional_2_Template, 2, 5, "span", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = \u0275\u0275nextContext();
    const line_r14 = ctx_r19.$implicit;
    const \u0275$index_266_r16 = ctx_r19.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("qty-warn", ctx_r0.hasStockWarning(\u0275$index_266_r16));
    \u0275\u0275twoWayProperty("ngModel", line_r14.quantity);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r14.productId && !line_r14.consigne ? 2 : -1);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("qty-neg", (line_r14.quantity || 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r14.quantity);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_12_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const $index_r23 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.linePrixTTC[$index_r23], $event) || (ctx_r0.linePrixTTC[$index_r23] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_12_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r22);
      const $index_r23 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPrixTTCChange($index_r23));
    })("keydown.enter", function OrderFormComponent_Conditional_18_For_73_Conditional_12_Template_input_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "small", 111);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = \u0275\u0275nextContext();
    const line_r14 = ctx_r19.$implicit;
    const $index_r23 = ctx_r19.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.linePrixTTC[$index_r23]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("HT: ", \u0275\u0275pipeBind2(3, 2, line_r14.prixUnitaire, "1.2-2"));
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const $index_r23 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.linePrixTTC[$index_r23], "1.0-0"), " ");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, line_r14.rabaisUnitaire, "1.0-0"), " ");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_18_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const line_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.tauxTVA, $event) || (line_r14.tauxTVA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_18_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r24);
      const $index_r23 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTauxTVAChange($index_r23));
    })("keydown.enter", function OrderFormComponent_Conditional_18_For_73_Conditional_18_Template_input_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r14.tauxTVA);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r14.tauxTVA || 0, "% ");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_For_73_Conditional_21_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const line_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.accountCode, $event) || (line_r14.accountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function OrderFormComponent_Conditional_18_For_73_Conditional_21_Template_input_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r14.accountCode);
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r14.accountCode || "\u2014", " ");
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_18_For_73_Conditional_29_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const $index_r23 = \u0275\u0275nextContext(2).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLine($index_r23));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_Conditional_18_For_73_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275conditionalCreate(1, OrderFormComponent_Conditional_18_For_73_Conditional_29_Conditional_1_Template, 3, 0, "button", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isAutoConsigneLine(line_r14) ? 1 : -1);
  }
}
function OrderFormComponent_Conditional_18_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275conditionalCreate(4, OrderFormComponent_Conditional_18_For_73_Conditional_4_Template, 6, 2, "div", 79)(5, OrderFormComponent_Conditional_18_For_73_Conditional_5_Template, 6, 2, "div", 79)(6, OrderFormComponent_Conditional_18_For_73_Conditional_6_Template, 8, 4, "div", 80)(7, OrderFormComponent_Conditional_18_For_73_Conditional_7_Template, 4, 2, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 82);
    \u0275\u0275conditionalCreate(9, OrderFormComponent_Conditional_18_For_73_Conditional_9_Template, 3, 4, "div", 83)(10, OrderFormComponent_Conditional_18_For_73_Conditional_10_Template, 2, 3, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 82);
    \u0275\u0275conditionalCreate(12, OrderFormComponent_Conditional_18_For_73_Conditional_12_Template, 4, 5)(13, OrderFormComponent_Conditional_18_For_73_Conditional_13_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 85);
    \u0275\u0275conditionalCreate(15, OrderFormComponent_Conditional_18_For_73_Conditional_15_Template, 2, 4)(16, OrderFormComponent_Conditional_18_For_73_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 82);
    \u0275\u0275conditionalCreate(18, OrderFormComponent_Conditional_18_For_73_Conditional_18_Template, 1, 1, "input", 86)(19, OrderFormComponent_Conditional_18_For_73_Conditional_19_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275conditionalCreate(21, OrderFormComponent_Conditional_18_For_73_Conditional_21_Template, 1, 1, "input", 87)(22, OrderFormComponent_Conditional_18_For_73_Conditional_22_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 88);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 89);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, OrderFormComponent_Conditional_18_For_73_Conditional_29_Template, 2, 1, "td", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = ctx.$implicit;
    const \u0275$index_266_r16 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-consigne-auto", ctx_r0.isAutoConsigneLine(line_r14))("row-deconsigne", ctx_r0.isDeconsigneLine(line_r14));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_266_r16 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isAutoConsigneLine(line_r14) ? 4 : ctx_r0.isDeconsigneLine(line_r14) ? 5 : !ctx_r0.isReadOnly ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly && !ctx_r0.isAutoConsigneLine(line_r14) ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly && !ctx_r0.isAutoConsigneLine(line_r14) && !ctx_r0.isDeconsigneLine(line_r14) ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((line_r14.rabaisUnitaire ?? 0) > 0 ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly && !ctx_r0.isAutoConsigneLine(line_r14) && !ctx_r0.isDeconsigneLine(line_r14) ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly && !ctx_r0.isAutoConsigneLine(line_r14) && !ctx_r0.isDeconsigneLine(line_r14) ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 14, line_r14.montantHT, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 17, line_r14.montantTTC, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 29 : -1);
  }
}
function OrderFormComponent_Conditional_18_Conditional_74_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_18_Conditional_74_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cliquez pour ajouter une ligne ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_18_Conditional_74_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucune ligne ");
  }
}
function OrderFormComponent_Conditional_18_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275conditionalCreate(2, OrderFormComponent_Conditional_18_Conditional_74_Conditional_2_Template, 4, 0, "button", 116)(3, OrderFormComponent_Conditional_18_Conditional_74_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.isReadOnly ? 9 : 10);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 2 : 3);
  }
}
function OrderFormComponent_Conditional_18_Conditional_76_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "span");
    \u0275\u0275text(2, "Consigne (sortie)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("+ ", ctx_r0.qteConsigne, " caisse", ctx_r0.qteConsigne > 1 ? "s" : "");
  }
}
function OrderFormComponent_Conditional_18_Conditional_76_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "span");
    \u0275\u0275text(2, "D\xE9consigne (r\xE9cup\xE9ration)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("\u2013 ", ctx_r0.qteDeconsigne, " caisse", ctx_r0.qteDeconsigne > 1 ? "s" : "");
  }
}
function OrderFormComponent_Conditional_18_Conditional_76_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span");
    \u0275\u0275text(2, "Net emballages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.qteConsigne - ctx_r0.qteDeconsigne);
  }
}
function OrderFormComponent_Conditional_18_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 118)(2, "span", 4);
    \u0275\u0275text(3, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Emballages consign\xE9s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 119);
    \u0275\u0275conditionalCreate(6, OrderFormComponent_Conditional_18_Conditional_76_Conditional_6_Template, 5, 2, "div", 120);
    \u0275\u0275conditionalCreate(7, OrderFormComponent_Conditional_18_Conditional_76_Conditional_7_Template, 5, 2, "div", 121);
    \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_18_Conditional_76_Conditional_8_Template, 5, 1, "div", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.qteConsigne > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.qteDeconsigne > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.qteConsigne > 0 && ctx_r0.qteDeconsigne > 0 ? 8 : -1);
  }
}
function OrderFormComponent_Conditional_18_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span");
    \u0275\u0275text(2, "Rabais accord\xE9s (701901)");
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
function OrderFormComponent_Conditional_18_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span");
    \u0275\u0275text(2, "Frais d'enl\xE8vement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r0.order.fraisEnlevementTTC, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "label");
    \u0275\u0275text(5, "Client ");
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "div", 31)(10, "span", 32);
    \u0275\u0275text(11, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.clientSearch, $event) || (ctx_r0.clientSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function OrderFormComponent_Conditional_18_Template_input_input_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clientDropdown = true);
    })("focus", function OrderFormComponent_Conditional_18_Template_input_focus_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clientDropdown = true);
    })("blur", function OrderFormComponent_Conditional_18_Template_input_blur_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClientBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, OrderFormComponent_Conditional_18_Conditional_13_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, OrderFormComponent_Conditional_18_Conditional_14_Template, 2, 0, "span", 35)(15, OrderFormComponent_Conditional_18_Conditional_15_Template, 9, 12, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28)(17, "label");
    \u0275\u0275text(18, "Journal de vente ");
    \u0275\u0275elementStart(19, "span", 29);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.journalId, $event) || (ctx_r0.order.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(22, OrderFormComponent_Conditional_18_For_23_Template, 2, 3, "option", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 28)(25, "label");
    \u0275\u0275text(26, "Entrep\xF4t ");
    \u0275\u0275elementStart(27, "span", 29);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, OrderFormComponent_Conditional_18_Conditional_29_Template, 5, 2, "select", 39)(30, OrderFormComponent_Conditional_18_Conditional_30_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 28)(32, "label");
    \u0275\u0275text(33, "Date du bon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.date, $event) || (ctx_r0.order.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 28)(36, "label");
    \u0275\u0275text(37, "Date d'\xE9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.dateEcheance, $event) || (ctx_r0.order.dateEcheance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 42)(40, "label");
    \u0275\u0275text(41, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_18_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.notes, $event) || (ctx_r0.order.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 44)(44, "div", 45)(45, "span");
    \u0275\u0275text(46, "Lignes de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, OrderFormComponent_Conditional_18_Conditional_47_Template, 4, 0, "button", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 47)(49, "table", 48)(50, "thead")(51, "tr")(52, "th", 49);
    \u0275\u0275text(53, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 50);
    \u0275\u0275text(55, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 51);
    \u0275\u0275text(57, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 52);
    \u0275\u0275text(59, "Prix TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 53);
    \u0275\u0275text(61, "Rabais/u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th", 54);
    \u0275\u0275text(63, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th", 55);
    \u0275\u0275text(65, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th", 56);
    \u0275\u0275text(67, "Mnt HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th", 56);
    \u0275\u0275text(69, "Mnt TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(70, OrderFormComponent_Conditional_18_Conditional_70_Template, 1, 0, "th", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "tbody");
    \u0275\u0275repeaterCreate(72, OrderFormComponent_Conditional_18_For_73_Template, 30, 20, "tr", 58, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(74, OrderFormComponent_Conditional_18_Conditional_74_Template, 4, 2, "tr");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 59);
    \u0275\u0275conditionalCreate(76, OrderFormComponent_Conditional_18_Conditional_76_Template, 9, 3, "div", 60);
    \u0275\u0275elementStart(77, "div", 61)(78, "div", 62)(79, "div", 63)(80, "span");
    \u0275\u0275text(81, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 64)(86, "span");
    \u0275\u0275text(87, "Taxes (TVA + Pr\xE9compte)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 65)(92, "span");
    \u0275\u0275text(93, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(97, OrderFormComponent_Conditional_18_Conditional_97_Template, 6, 4, "div", 66);
    \u0275\u0275conditionalCreate(98, OrderFormComponent_Conditional_18_Conditional_98_Template, 6, 4, "div", 63);
    \u0275\u0275elementStart(99, "div", 67)(100, "span");
    \u0275\u0275text(101, "NET \xC0 PAYER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.clientSearch);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.clientDropdown && ctx_r0.filteredClients.length > 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingBalance ? 14 : ctx_r0.partnerBalance !== null ? 15 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.journalId);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.journals);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 29 : 30);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.date);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.dateEcheance);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.notes);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 47 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 70 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.order.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.order.lines.length === 0 ? 74 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.qteConsigne > 0 || ctx_r0.qteDeconsigne > 0 ? 76 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(84, 23, ctx_r0.order.totalHT, "1.2-2"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(90, 26, (ctx_r0.order.totalTVA ?? 0) + (ctx_r0.order.totalPrecompte ?? 0), "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(96, 29, ctx_r0.order.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalRabais > 0 ? 97 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.order.fraisEnlevementTTC ?? 0) > 0 ? 98 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(104, 32, ctx_r0.netAPayer, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_19_For_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "span", 137);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 138);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_19_For_13_For_4_Template_input_ngModelChange_5_listener($event) {
      const d_r30 = \u0275\u0275restoreView(_r29).$implicit;
      \u0275\u0275twoWayBindingSet(d_r30.qty, $event) || (d_r30.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r30.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r30.nom);
    \u0275\u0275advance();
    \u0275\u0275classProp("di-filled", d_r30.qty !== null && d_r30.qty > 0);
    \u0275\u0275twoWayProperty("ngModel", d_r30.qty);
  }
}
function OrderFormComponent_Conditional_19_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, OrderFormComponent_Conditional_19_For_13_For_4_Template, 6, 5, "div", 136, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r31.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r31.items);
  }
}
function OrderFormComponent_Conditional_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
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
function OrderFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDeconsigne());
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_19_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 125)(3, "span", 4);
    \u0275\u0275text(4, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 126);
    \u0275\u0275text(7, "Saisie des d\xE9consignes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 127);
    \u0275\u0275text(9, "Indiquez les quantit\xE9s r\xE9cup\xE9r\xE9es \u2014 laisser vide = 0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 128)(11, "div", 129);
    \u0275\u0275repeaterCreate(12, OrderFormComponent_Conditional_19_For_13_Template, 5, 1, "div", 130, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, OrderFormComponent_Conditional_19_Conditional_14_Template, 4, 1, "div", 131);
    \u0275\u0275elementStart(15, "div", 132)(16, "button", 133);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_19_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDeconsigne());
    });
    \u0275\u0275elementStart(17, "span", 4);
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 134);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_19_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validateDeconsigne());
    });
    \u0275\u0275elementStart(21, "span", 4);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.deconsigneGroups);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.saving ? "hourglass_empty" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Valider et confirmer le bon", " ");
  }
}
function OrderFormComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-audit-trail", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("entityId", ctx_r0.orderId);
  }
}
function OrderFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-print-preview", 140);
    \u0275\u0275listener("closed", function OrderFormComponent_Conditional_21_Template_app_print_preview_closed_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePrint());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("salesOrder", ctx_r0.order)("companyName", ctx_r0.printCompanyName)("companyPhone", ctx_r0.printCompanyPhone)("companyLogoUrl", ctx_r0.printCompanyLogoUrl)("companyLogoDataUrl", ctx_r0.printCompanyLogoDataUrl)("companyInfo", ctx_r0.printCompany);
  }
}
var OrderFormComponent = class _OrderFormComponent {
  get filteredClients() {
    if (!this.clientSearch.trim())
      return this.clients.slice(0, 50);
    const q = this.clientSearch.toLowerCase();
    return this.clients.filter((c) => c.name.toLowerCase().includes(q) || (c.ref || "").toLowerCase().includes(q)).slice(0, 50);
  }
  selectClient(c) {
    this.order.partnerId = c.id;
    this.clientSearch = c.name + (c.ref ? " (" + c.ref + ")" : "");
    this.clientDropdown = false;
    this.onClientChange(c.id);
  }
  onClientBlur() {
    setTimeout(() => this.clientDropdown = false, 200);
  }
  onWindowChange() {
    this.activeSuggestionIdx = null;
  }
  constructor(salesService, accountingService, stockService, authService, companyService, route, router) {
    this.salesService = salesService;
    this.accountingService = accountingService;
    this.stockService = stockService;
    this.authService = authService;
    this.companyService = companyService;
    this.route = route;
    this.router = router;
    this.orderId = null;
    this.order = this.emptyOrder();
    this.clients = [];
    this.journals = [];
    this.warehouses = [];
    this.allProducts = [];
    this.loading = false;
    this.saving = false;
    this.confirming = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.showPrintModal = false;
    this.TVA_DEFAULT = 19.25;
    this.partnerBalance = null;
    this.partnerCreditDisponible = null;
    this.loadingBalance = false;
    this.clientSearch = "";
    this.clientDropdown = false;
    this.lineSearches = [];
    this.lineStockQty = [];
    this.lineUomNames = [];
    this.lineCategoryNames = [];
    this.linePrixTTC = [];
    this.activeSuggestionIdx = null;
    this.lineSearchResults = [];
    this.searchTimer = null;
    this.dropdownRect = null;
    this.showDeconsigneModal = false;
    this.deconsigneInputs = [];
    this.CASIER12_RE = /casier\s*(?:de\s*)?12/i;
    this.CASIER15_RE = /casier\s*(?:de\s*)?15/i;
    this.CASIER24_RE = /casier\s*(?:de\s*)?24/i;
    this.GUINNESS_CAT_RE = /guinness/i;
    this.CONSIGNE_NAMES = CONSIGNE_NAMES;
    this.CONSIGNE_CODES_SET = new Set(Object.keys(this.CONSIGNE_NAMES));
    this.CONSIGNE_ACCOUNT = "4194";
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.orderId = id ? +id : null;
    this.loadReferenceData();
  }
  emptyOrder() {
    return {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      partnerId: 0,
      journalId: 0,
      companyId: 0,
      lines: []
    };
  }
  onClientChange(partnerId) {
    if (!partnerId) {
      this.partnerBalance = null;
      this.partnerCreditDisponible = null;
      return;
    }
    this.loadingBalance = true;
    this.salesService.getPartnerBalance(partnerId, this.authService.getCompanyId()).subscribe({
      next: (b) => {
        this.partnerBalance = b.balance;
        this.partnerCreditDisponible = b.credit;
        this.loadingBalance = false;
      },
      error: () => this.loadingBalance = false
    });
    this.order.lines.forEach((line, i) => {
      if (line.productId)
        this.loadClientPriceForLine(i, line.productId);
      this.linePrixTTC[i] = this.computePrixTTC(line.prixUnitaire || 0, line.tauxTVA || 0, !line.consigne);
      this.onLineChange(line);
    });
  }
  loadClientPriceForLine(i, productId) {
    const clientId = this.order.partnerId;
    const companyId = this.authService.getCompanyId();
    if (!clientId || !companyId)
      return;
    this.salesService.getPrixClientForProduct(productId, clientId, companyId).subscribe({
      next: (dto) => {
        const line = this.order.lines[i];
        if (!line)
          return;
        const rabais = dto?.rabaisUnitaire ?? 0;
        line.rabaisUnitaire = rabais;
        line.totalRabaisLigne = Math.round((line.quantity || 0) * rabais * 100) / 100;
        this.computeTotals();
      },
      error: () => {
      }
    });
  }
  get totalRabais() {
    return this.order.lines.filter((l) => !l.consigne).reduce((s, l) => s + (l.totalRabaisLigne || 0), 0);
  }
  get netAPayer() {
    return Math.round((this.order.totalTTC || 0) + (this.order.fraisEnlevementTTC || 0) - this.totalRabais);
  }
  getClientTauxPrecompte() {
    return this.clients.find((c) => c.id === this.order.partnerId)?.tauxPrecompte ?? 0;
  }
  loadReferenceData() {
    const companyId = this.authService.getCompanyId();
    this.order.companyId = companyId;
    this.salesService.getClients(companyId).subscribe({
      next: (data) => {
        this.clients = data;
        if (this.orderId) {
          this.loadOrder(this.orderId);
        }
      }
    });
    this.stockService.getWarehouses(companyId).subscribe({
      next: (data) => {
        this.warehouses = data.filter((w) => w.active !== false);
      }
    });
    this.accountingService.getJournals(companyId).subscribe({
      next: (data) => {
        this.journals = data.filter((j) => j.type === "sale");
        if (this.journals.length > 0 && !this.order.journalId) {
          this.order.journalId = this.journals[0].id;
        }
      }
    });
    if (this.order.warehouseId) {
      this.loadProductsForWarehouse(this.order.warehouseId);
    }
  }
  onWarehouseChange(warehouseId) {
    if (warehouseId) {
      this.loadProductsForWarehouse(warehouseId);
      const wh = this.warehouses.find((w) => w.id === Number(warehouseId));
      if (wh?.salesJournalId && this.journals.some((j) => j.id === wh.salesJournalId)) {
        this.order.journalId = wh.salesJournalId;
      }
    } else {
      this.allProducts = [];
      this.lineStockQty = this.lineStockQty.map(() => 0);
    }
  }
  loadProductsForWarehouse(warehouseId) {
    const companyId = this.authService.getCompanyId();
    this.stockService.getProducts(companyId, warehouseId).subscribe({
      next: (data) => {
        this.allProducts = data.filter((p) => p.type === "product" || p.type === "consu");
        this.lineStockQty = this.order.lines.map((l) => {
          if (l.productId) {
            const p = this.allProducts.find((p2) => p2.id === l.productId);
            return p?.qtyOnHand ?? 0;
          }
          return 0;
        });
        this.lineUomNames = this.order.lines.map((l) => {
          if (l.productId && !l.consigne) {
            const p = this.allProducts.find((p2) => p2.id === l.productId);
            return p?.uomName ?? "";
          }
          return "";
        });
        this.lineCategoryNames = this.order.lines.map((l) => {
          if (l.productId && !l.consigne) {
            const p = this.allProducts.find((p2) => p2.id === l.productId);
            return p?.categoryName ?? "";
          }
          return "";
        });
      },
      error: () => {
        this.errorMsg = "Impossible de charger les articles du stock";
      }
    });
  }
  loadOrder(id) {
    this.loading = true;
    this.salesService.getOrder(id).subscribe({
      next: (data) => {
        this.order = data;
        this.clientSearch = data.partnerName || "";
        if (data.partnerId)
          this.onClientChange(data.partnerId);
        this.lineSearches = data.lines.map((l) => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
        this.lineStockQty = data.lines.map(() => 0);
        this.lineSearchResults = data.lines.map(() => []);
        this.lineUomNames = data.lines.map(() => "");
        this.lineCategoryNames = data.lines.map(() => "");
        this.loading = false;
        if (data.warehouseId) {
          this.loadProductsForWarehouse(data.warehouseId);
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get isReadOnly() {
    return this.order.state !== "draft" && this.order.state !== void 0 && this.order.state !== "";
  }
  get pageTitle() {
    if (!this.orderId)
      return "Nouveau bon de commande";
    return this.order.name ? `Bon ${this.order.name}` : "Chargement...";
  }
  addLine() {
    this.order.lines.push({
      description: "",
      quantity: 1,
      prixUnitaire: 0,
      tauxRemise: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: "7011"
    });
    this.lineSearches.push("");
    this.lineStockQty.push(0);
    this.lineSearchResults.push([]);
    this.lineUomNames.push("");
    this.lineCategoryNames.push("");
    this.linePrixTTC.push(0);
  }
  /**
   * Prix TTC = Prix HT × (1 + TVA% + Précompte%).
   * inclurePrecompte=false pour les lignes consigne (pas de PSA sur emballages).
   */
  computePrixTTC(prixUnitaireHT, tauxTVA, inclurePrecompte = true) {
    const tauxPrecompte = inclurePrecompte ? this.getClientTauxPrecompte() : 0;
    return Math.round(prixUnitaireHT * (1 + tauxTVA / 100 + tauxPrecompte / 100));
  }
  /** Prix HT = Prix TTC / (1 + TVA% + Précompte%) — pleine précision, sans arrondi. */
  computePrixHT(prixTTC, tauxTVA, inclurePrecompte = true) {
    const tauxPrecompte = inclurePrecompte ? this.getClientTauxPrecompte() : 0;
    const diviseur = 1 + tauxTVA / 100 + tauxPrecompte / 100;
    return diviseur > 0 ? prixTTC / diviseur : prixTTC;
  }
  /** Appelé quand l'utilisateur saisit un prix TTC dans le formulaire. */
  onPrixTTCChange(i) {
    const line = this.order.lines[i];
    const prixTTC = this.linePrixTTC[i] || 0;
    line.prixUnitaire = this.computePrixHT(prixTTC, line.tauxTVA || 0, !line.consigne);
    this.onLineChange(line);
  }
  /** Appelé quand le taux TVA change — recalcule le prix TTC à partir du HT. */
  onTauxTVAChange(i) {
    const line = this.order.lines[i];
    this.linePrixTTC[i] = this.computePrixTTC(line.prixUnitaire || 0, line.tauxTVA || 0, !line.consigne);
    this.onLineChange(line);
  }
  hasStockWarning(i) {
    const line = this.order.lines[i];
    const available = this.lineStockQty[i] ?? 0;
    return !!line.productId && available >= 0 && (line.quantity || 0) > available;
  }
  // ─── Logique consigne ─────────────────────────────────────────────────────
  /**
   * Retourne le code emballage correspondant à l'UDM + catégorie d'un article.
   * - CASIER 12 + Guinness → CBG12, CASIER 12 normal → CB12
   * - CASIER 15 (toujours Guinness) → CBG15
   * - CASIER 24 + Guinness → CBG24, CASIER 24 normal → CB24
   */
  getConsigneCode(uomName, categoryName) {
    const isGuinness = this.GUINNESS_CAT_RE.test(categoryName);
    if (this.CASIER12_RE.test(uomName))
      return isGuinness ? "CBG12" : "CB12";
    if (this.CASIER15_RE.test(uomName))
      return "CBG15";
    if (this.CASIER24_RE.test(uomName))
      return isGuinness ? "CBG24" : "CB24";
    return null;
  }
  isAutoConsigneLine(line) {
    return !!line.consigne && (line.quantity || 0) > 0 && !!line.productCode && this.CONSIGNE_CODES_SET.has(line.productCode);
  }
  isDeconsigneLine(line) {
    return !!line.consigne && (line.quantity || 0) < 0 && !!line.productCode && this.CONSIGNE_CODES_SET.has(line.productCode);
  }
  syncConsigneLines() {
    const totals = {};
    for (const code of this.CONSIGNE_CODES_SET)
      totals[code] = 0;
    for (let i = 0; i < this.order.lines.length; i++) {
      const line = this.order.lines[i];
      if (line.consigne)
        continue;
      const code = this.getConsigneCode(this.lineUomNames[i] || "", this.lineCategoryNames[i] || "");
      if (code)
        totals[code] += line.quantity || 0;
    }
    for (const code of this.CONSIGNE_CODES_SET) {
      this.syncConsigneLine(code, this.CONSIGNE_NAMES[code], totals[code]);
    }
  }
  syncConsigneLine(code, name, totalQty) {
    const idx = this.order.lines.findIndex((l) => l.consigne && (l.quantity || 0) > 0 && l.productCode === code);
    if (totalQty <= 0) {
      if (idx >= 0) {
        this.order.lines.splice(idx, 1);
        this.lineSearches.splice(idx, 1);
        this.lineStockQty.splice(idx, 1);
        this.lineSearchResults.splice(idx, 1);
        this.lineUomNames.splice(idx, 1);
        this.lineCategoryNames.splice(idx, 1);
        this.linePrixTTC.splice(idx, 1);
        this.computeTotals();
      }
      return;
    }
    const product = this.allProducts.find((p) => p.defaultCode === code);
    const tauxTVA = product?.exemptTva ? 0 : this.TVA_DEFAULT;
    if (idx >= 0) {
      this.order.lines[idx].quantity = totalQty;
      this.onLineChange(this.order.lines[idx]);
    } else {
      const prixUnitaire = product?.salePrice || 0;
      const newLine = {
        description: product?.name || name,
        productId: product?.id,
        productCode: code,
        quantity: totalQty,
        prixUnitaire,
        tauxRemise: 0,
        tauxTVA,
        accountCode: this.CONSIGNE_ACCOUNT,
        consigne: true
      };
      this.order.lines.push(newLine);
      this.lineSearches.push(`[${code}] ${newLine.description}`);
      this.lineStockQty.push(0);
      this.lineSearchResults.push([]);
      this.lineUomNames.push("");
      this.lineCategoryNames.push("");
      this.linePrixTTC.push(this.computePrixTTC(prixUnitaire, tauxTVA, false));
      this.onLineChange(newLine);
    }
  }
  // ─── Autocomplete ──────────────────────────────────────────────────────────
  getSuggestions(i) {
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const q = (this.lineSearches[i] || "").toLowerCase().trim();
    if (!q)
      return this.allProducts.slice(0, 8);
    const matches = this.allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q));
    matches.sort((a, b) => {
      const codeA = (a.defaultCode || "").toLowerCase();
      const codeB = (b.defaultCode || "").toLowerCase();
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const rank = (code, n) => code === q ? 0 : code.startsWith(q) ? 1 : n.startsWith(q) ? 2 : 3;
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
      const companyId = this.authService.getCompanyId();
      this.stockService.searchProducts(query, companyId).subscribe({
        next: (products) => {
          this.lineSearchResults[i] = products.filter((p) => (p.qtyOnHand || 0) >= 0).slice(0, 10);
        },
        error: () => {
          this.lineSearchResults[i] = [];
        }
      });
    }, 300);
  }
  openSuggestions(i, event) {
    if (event instanceof FocusEvent && this.order.lines[i]?.productCode) {
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
        if (line?.productCode && !this.lineSearches[i]) {
          this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
        }
      }
    }, 200);
  }
  selectProduct(i, product) {
    const line = this.order.lines[i];
    line.productId = product.id;
    line.productCode = product.defaultCode || "";
    line.description = product.name;
    line.prixUnitaire = product.salePrice || 0;
    line.rabaisUnitaire = 0;
    line.totalRabaisLigne = 0;
    line.tauxTVA = product.exemptTva ? 0 : this.TVA_DEFAULT;
    line.accountCode = "701100";
    line.categoryId = product.categoryId;
    this.lineSearches[i] = product.defaultCode ? `[${product.defaultCode}] ${product.name}` : product.name;
    this.lineStockQty[i] = product.qtyOnHand ?? 0;
    this.lineUomNames[i] = product.uomName ?? "";
    this.lineCategoryNames[i] = product.categoryName ?? "";
    this.linePrixTTC[i] = this.computePrixTTC(line.prixUnitaire, line.tauxTVA || 0, true);
    this.activeSuggestionIdx = null;
    this.onLineChange(line);
    if (product.id)
      this.loadClientPriceForLine(i, product.id);
  }
  clearLine(i) {
    const line = this.order.lines[i];
    line.productId = void 0;
    line.productCode = "";
    line.description = "";
    line.prixUnitaire = 0;
    this.lineSearches[i] = "";
    this.lineStockQty[i] = 0;
    this.lineSearchResults[i] = [];
    this.lineUomNames[i] = "";
    this.lineCategoryNames[i] = "";
    this.activeSuggestionIdx = i;
    this.syncConsigneLines();
  }
  removeLine(index) {
    const wasConsigne = !!this.order.lines[index]?.consigne;
    this.order.lines.splice(index, 1);
    this.lineSearches.splice(index, 1);
    this.lineStockQty.splice(index, 1);
    this.lineSearchResults.splice(index, 1);
    this.lineUomNames.splice(index, 1);
    this.lineCategoryNames.splice(index, 1);
    this.linePrixTTC.splice(index, 1);
    if (!wasConsigne) {
      this.syncConsigneLines();
    }
    this.computeTotals();
  }
  onLineChange(line) {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const remise = line.tauxRemise || 0;
    const tva = line.tauxTVA || 0;
    const tauxPrecompte = line.consigne ? 0 : this.getClientTauxPrecompte();
    const brut = qty * pu;
    const remiseMontant = brut * remise / 100;
    const ht = brut - remiseMontant;
    const montantTVA = ht * tva / 100;
    const montantPrecompte = ht * tauxPrecompte / 100;
    line.montantHT = ht;
    line.montantTVA = montantTVA;
    line.montantTTC = Math.round(this.computePrixTTC(pu, tva, !line.consigne) * qty);
    line.totalRabaisLigne = Math.round(qty * (line.rabaisUnitaire || 0));
    this.computeTotals();
    if (!line.consigne) {
      this.syncConsigneLines();
    }
  }
  computeTotals() {
    let ht = 0, tva = 0, ttc = 0, remise = 0, precompte = 0;
    const tauxPrecompte = this.getClientTauxPrecompte();
    for (const line of this.order.lines) {
      ht += line.montantHT || 0;
      tva += line.montantTVA || 0;
      ttc += line.montantTTC || 0;
      const brut = (line.quantity || 0) * (line.prixUnitaire || 0);
      remise += brut * (line.tauxRemise || 0) / 100;
      if (!line.consigne) {
        precompte += (line.montantHT || 0) * tauxPrecompte / 100;
      }
    }
    this.order.totalHT = ht;
    this.order.totalTVA = tva;
    this.order.totalPrecompte = precompte;
    this.order.totalRemise = remise;
    this.order.totalTTC = Math.round(ttc);
    this.order.totalRabais = this.totalRabais;
  }
  // ─── Getters résumé consignes ─────────────────────────────────────────────
  get qteConsigne() {
    return this.order.lines.filter((l) => l.consigne && (l.quantity || 0) > 0).reduce((s, l) => s + (l.quantity || 0), 0);
  }
  get qteDeconsigne() {
    return this.order.lines.filter((l) => l.consigne && (l.quantity || 0) < 0).reduce((s, l) => s + Math.abs(l.quantity || 0), 0);
  }
  // ─── Sauvegarde ───────────────────────────────────────────────────────────
  save() {
    const missing = [];
    if (!this.order.partnerId)
      missing.push("Client");
    if (!this.order.journalId)
      missing.push("Journal");
    if (!this.order.warehouseId)
      missing.push("Entrep\xF4t");
    if (this.order.lines.length === 0)
      missing.push("Lignes");
    if (missing.length > 0) {
      this.errorMsg = `Champs manquants : ${missing.join(", ")}`;
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const isNew = !this.orderId;
    const obs = isNew ? this.salesService.createOrder(this.order) : this.salesService.updateOrder(this.orderId, this.order);
    obs.subscribe({
      next: (saved) => {
        this.saving = false;
        this.order = saved;
        if (isNew) {
          this.router.navigate(["/sales/orders", saved.id]);
        } else {
          this.orderId = saved.id;
          this.syncLineArraysFromSaved(saved.lines);
          this.showSuccess("Bon sauvegard\xE9");
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  syncLineArraysFromSaved(lines) {
    this.lineSearches = lines.map((l) => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
    this.lineStockQty = lines.map((l) => {
      if (l.productId) {
        const p = this.allProducts.find((p2) => p2.id === l.productId);
        return p?.qtyOnHand ?? 0;
      }
      return 0;
    });
    this.lineSearchResults = lines.map(() => []);
    this.lineUomNames = lines.map((l) => {
      if (l.productId && !l.consigne) {
        const p = this.allProducts.find((p2) => p2.id === l.productId);
        return p?.uomName ?? "";
      }
      return "";
    });
    this.lineCategoryNames = lines.map((l) => {
      if (l.productId && !l.consigne) {
        const p = this.allProducts.find((p2) => p2.id === l.productId);
        return p?.categoryName ?? "";
      }
      return "";
    });
    this.linePrixTTC = lines.map((l) => this.computePrixTTC(l.prixUnitaire || 0, l.tauxTVA || 0, !l.consigne));
  }
  // ─── Confirmation ─────────────────────────────────────────────────────────
  confirm() {
    if (!this.orderId)
      return;
    if (this.order.eleaderReference) {
      if (!confirm("Confirmer ce bon de commande ? Une facture sera cr\xE9\xE9e automatiquement."))
        return;
      this.doConfirm();
      return;
    }
    this.deconsigneInputs = Array.from(this.CONSIGNE_CODES_SET).map((code) => {
      const product = this.allProducts.find((p) => p.defaultCode === code);
      return {
        code,
        nom: product?.name || this.CONSIGNE_NAMES[code] || code,
        qty: null
      };
    });
    this.showDeconsigneModal = true;
  }
  validateDeconsigne() {
    for (const d of this.deconsigneInputs) {
      if (d.qty === null || d.qty === void 0)
        d.qty = 0;
    }
    for (const d of this.deconsigneInputs) {
      const qty = d.qty || 0;
      if (qty > 0) {
        const product = this.allProducts.find((p) => p.defaultCode === d.code);
        const tauxTVA = product?.exemptTva ? 0 : this.TVA_DEFAULT;
        const prixUnitaire = product?.salePrice || 0;
        const deconsigneLine = {
          description: product?.name || d.nom,
          productId: product?.id,
          productCode: d.code,
          quantity: -qty,
          prixUnitaire,
          tauxRemise: 0,
          tauxTVA,
          accountCode: this.CONSIGNE_ACCOUNT,
          consigne: true
        };
        this.order.lines.push(deconsigneLine);
        this.lineSearches.push(`[${d.code}] D\xE9consigne`);
        this.lineStockQty.push(0);
        this.lineSearchResults.push([]);
        this.lineUomNames.push("");
        this.lineCategoryNames.push("");
        this.linePrixTTC.push(this.computePrixTTC(prixUnitaire, tauxTVA, false));
        this.onLineChange(deconsigneLine);
      }
    }
    this.showDeconsigneModal = false;
    this.errorMsg = "";
    this.saveAndConfirm();
  }
  cancelDeconsigne() {
    this.showDeconsigneModal = false;
    this.deconsigneInputs = [];
  }
  get deconsigneGroups() {
    const defs = [
      { label: "CB \u2014 Casiers Bouteille", codes: ["CB12", "CB24", "CB12M", "CB24M"] },
      { label: "CV \u2014 Casiers Verre", codes: ["CV12", "CV24"] },
      { label: "CBG \u2014 Casiers Bouteille Guinness", codes: ["CBG12", "CBG15", "CBG24"] },
      { label: "CVG \u2014 Casiers Verre Guinness", codes: ["CVG12", "CVG15", "CVG24"] },
      { label: "VIP / VCP", codes: ["VIP12", "VIP24", "VCP12", "VCP24"] },
      { label: "VIPG \u2014 VIP Guinness", codes: ["VIPG12", "VIPG15", "VIPG24"] }
    ];
    return defs.map((g) => ({
      label: g.label,
      items: g.codes.map((c) => this.deconsigneInputs.find((d) => d.code === c)).filter(Boolean)
    })).filter((g) => g.items.length > 0);
  }
  saveAndConfirm() {
    this.saving = true;
    this.salesService.updateOrder(this.orderId, this.order).subscribe({
      next: (saved) => {
        this.saving = false;
        this.order = saved;
        this.syncLineArraysFromSaved(saved.lines);
        this.doConfirm();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  doConfirm() {
    this.confirming = true;
    this.errorMsg = "";
    this.salesService.confirmOrder(this.orderId).subscribe({
      next: (updated) => {
        this.confirming = false;
        this.order = updated;
        this.showSuccess(`Bon confirm\xE9 \u2014 Facture ${updated.invoiceName} cr\xE9\xE9e`);
        if (updated.invoiceId) {
          setTimeout(() => this.router.navigate(["/sales/invoices", updated.invoiceId]), 1500);
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
    if (!confirm("Annuler ce bon de commande ?"))
      return;
    this.salesService.cancelOrder(this.orderId).subscribe({
      next: (updated) => {
        this.order = updated;
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors de l'annulation";
      }
    });
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
    this.router.navigate(["/sales/orders"]);
  }
  stateLabel(s) {
    const map = {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      invoiced: "Factur\xE9",
      cancelled: "Annul\xE9"
    };
    return map[s ?? ""] ?? s ?? "";
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
  }
  static {
    this.\u0275fac = function OrderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderFormComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderFormComponent, selectors: [["app-order-form"]], viewQuery: function OrderFormComponent_Query(rf, ctx) {
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
    }, decls: 22, vars: 13, consts: [["productInput", ""], [1, "so-page"], [1, "so-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [3, "class"], [1, "header-actions"], [1, "btn-print"], [1, "btn-save", 3, "disabled"], [1, "btn-confirm", 3, "disabled"], [1, "btn-cancel-order"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "invoice-banner"], [1, "loading-state"], [1, "so-body"], [1, "modal-backdrop"], ["entityType", "SALE_ORDER", 3, "entityId"], ["docType", "sales_order", 3, "salesOrder", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"], [1, "btn-print", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-confirm", 3, "click", "disabled"], [1, "btn-cancel-order", 3, "click"], [1, "btn-goto-invoice", 3, "click"], [1, "material-icons", "spin"], [1, "so-meta"], [1, "meta-grid"], [1, "form-group"], [1, "required"], [1, "ac-wrap"], [1, "ac-field"], [1, "material-icons", "ac-icon"], ["type", "text", "placeholder", "Chercher un client\u2026", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "input", "focus", "blur", "ngModel", "disabled"], [1, "ac-dropdown"], [1, "balance-note"], [1, "balance-chip", 3, "chip-debit", "chip-credit", "chip-zero"], [1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [1, "form-control", 3, "ngModel"], [1, "form-control", "form-readonly"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-group", "meta-span-full"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "so-lines"], [1, "lines-header"], [1, "btn-add-line"], [1, "lines-table-wrapper"], [1, "lines-table"], [1, "col-num"], [1, "col-product"], [1, "col-num", "text-right"], [1, "col-price", "text-right"], [1, "col-price", "text-right", 2, "color", "#e65100"], [1, "col-pct", "text-right"], [1, "col-account"], [1, "col-amount", "text-right"], [1, "col-del"], [3, "row-consigne-auto", "row-deconsigne"], [1, "so-footer-grid"], [1, "consigne-summary-box"], [1, "so-totals"], [1, "totals-box"], [1, "tot-row"], [1, "tot-row", "tot-taxes"], [1, "tot-row", "tot-ttc"], [1, "tot-row", 2, "color", "#e65100"], [1, "tot-row", "tot-net"], [1, "ac-item"], [1, "ac-item", 3, "mousedown"], [1, "ac-avatar"], [1, "ac-name"], [1, "ac-code"], [1, "balance-chip"], [1, "credit-tag"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "btn-add-line", 3, "click"], [1, "col-num", "text-center", "tgray"], [1, "product-ro", "consigne-ro"], [1, "autocomplete-wrap"], [1, "product-ro"], [1, "text-right"], [1, "qty-wrap"], [3, "qty-neg"], [1, "text-right", 2, "color", "#e65100", "font-weight", "500"], ["type", "number", "min", "0", 1, "input-cell", "text-right", 3, "ngModel"], ["type", "text", "placeholder", "701100", 1, "input-cell", 3, "ngModel"], [1, "text-right", "col-ht"], [1, "text-right", "col-ttc"], [1, "badge-consigne-auto"], [1, "sug-code"], [1, "badge-deconsigne"], [1, "ac-row"], [1, "material-icons", "line-search-icon"], ["type", "text", "autocomplete", "off", 1, "input-cell", "product-search", 3, "ngModelChange", "focus", "blur", "input", "keydown.enter", "placeholder", "ngModel"], [1, "btn-clear"], [1, "suggestions-panel", 3, "top", "left", "width"], [1, "btn-clear", 3, "click"], [1, "suggestions-panel"], [1, "sug-item"], [1, "sug-empty"], [1, "sug-item", 3, "mousedown"], [1, "sug-main"], [1, "sug-name"], [1, "sug-meta"], [1, "sug-stock"], [1, "sug-price"], ["type", "number", "min", "0", 1, "input-cell", "text-right", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "stock-tag", 3, "stock-low", "stock-ok"], [1, "stock-tag"], [1, "prix-ht-hint"], ["type", "text", "placeholder", "701100", 1, "input-cell", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn-remove-line"], [1, "btn-remove-line", 3, "click"], [1, "empty-lines"], [1, "btn-add-inline"], [1, "btn-add-inline", 3, "click"], [1, "cs-title"], [1, "cs-rows"], [1, "cs-row", "cs-plus"], [1, "cs-row", "cs-minus"], [1, "cs-row", "cs-net"], [1, "modal-backdrop", 3, "click"], [1, "modal-deconsigne", 3, "click"], [1, "modal-d-header"], [1, "modal-d-title"], [1, "modal-d-sub"], [1, "modal-d-body"], [1, "deconsigne-grid"], [1, "dg-section"], [1, "modal-d-error"], [1, "modal-d-actions"], [1, "btn-modal-cancel", 3, "click"], [1, "btn-modal-confirm", 3, "click", "disabled"], [1, "dg-section-header"], [1, "dg-row"], [1, "di-code"], [1, "di-nom"], ["type", "number", "min", "0", "placeholder", "0", 1, "di-input", 3, "ngModelChange", "ngModel"], ["docType", "sales_order", 3, "closed", "salesOrder", "companyName", "companyPhone", "companyLogoUrl", "companyLogoDataUrl", "companyInfo"]], template: function OrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function OrderFormComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "span", 4);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5)(6, "h1");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_8_Template, 2, 4, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275conditionalCreate(10, OrderFormComponent_Conditional_10_Template, 4, 0, "button", 8);
        \u0275\u0275conditionalCreate(11, OrderFormComponent_Conditional_11_Template, 4, 2, "button", 9);
        \u0275\u0275conditionalCreate(12, OrderFormComponent_Conditional_12_Template, 4, 2, "button", 10);
        \u0275\u0275conditionalCreate(13, OrderFormComponent_Conditional_13_Template, 4, 0, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, OrderFormComponent_Conditional_14_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(15, OrderFormComponent_Conditional_15_Template, 4, 1, "div", 13);
        \u0275\u0275conditionalCreate(16, OrderFormComponent_Conditional_16_Template, 10, 1, "div", 14);
        \u0275\u0275conditionalCreate(17, OrderFormComponent_Conditional_17_Template, 4, 0, "div", 15)(18, OrderFormComponent_Conditional_18_Template, 105, 35, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, OrderFormComponent_Conditional_19_Template, 24, 4, "div", 17);
        \u0275\u0275conditionalCreate(20, OrderFormComponent_Conditional_20_Template, 1, 1, "app-audit-trail", 18);
        \u0275\u0275conditionalCreate(21, OrderFormComponent_Conditional_21_Template, 1, 6, "app-print-preview", 19);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.orderId && ctx.order.state && ctx.order.state !== "draft" ? 10 : -1);
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
        \u0275\u0275conditional(ctx.order.invoiceId ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 17 : 18);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showDeconsigneModal ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.orderId ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPrintModal && ctx.orderId ? 21 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, PrintPreviewComponent, AuditTrailComponent, DecimalPipe], styles: ['\n.so-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.so-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-invoiced[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-save[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%], \n.btn-cancel-order[_ngcontent-%COMP%], \n.btn-print[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-cancel-order[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-save[_ngcontent-%COMP%]:disabled, \n.btn-confirm[_ngcontent-%COMP%]:disabled, \n.btn-cancel-order[_ngcontent-%COMP%]:disabled, \n.btn-print[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-print[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-color: var(--border);\n}\n.btn-print[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #017E84;\n  color: white;\n  border-color: #017E84;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-cancel-order[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #f5c6cb;\n}\n.btn-cancel-order[_ngcontent-%COMP%]:hover {\n  background: #842029;\n  color: white;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.invoice-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: var(--success-bg);\n  color: var(--success);\n  border-radius: 8px;\n  font-size: 14px;\n}\n.invoice-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--success);\n}\n.btn-goto-invoice[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  padding: 5px 12px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-goto-invoice[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-goto-invoice[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--success) 80%, black);\n}\n.so-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.so-meta[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 20px 24px;\n}\n.meta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.meta-grid[_ngcontent-%COMP%]   .meta-span-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.form-readonly[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  cursor: default;\n}\n.balance-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.balance-chip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 6px;\n  padding: 7px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.balance-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.balance-chip.chip-debit[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  border: 1px solid #f97316;\n  color: var(--warning);\n}\n.balance-chip.chip-credit[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n  color: var(--success);\n}\n.balance-chip.chip-zero[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid #cbd5e1;\n  color: var(--text-muted);\n}\n.credit-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: #017E84;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.so-lines[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.lines-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid var(--border);\n  white-space: nowrap;\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.col-num[_ngcontent-%COMP%] {\n  width: 32px;\n  text-align: center;\n}\n.col-product[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n.col-price[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.col-pct[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.col-account[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.col-amount[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.col-del[_ngcontent-%COMP%] {\n  width: 36px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tgray[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.col-ht[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.col-ttc[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-weight: 700;\n  color: #017E84;\n}\n.prix-ht-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  color: var(--text-muted);\n  text-align: right;\n  margin-top: 1px;\n}\n.input-cell[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: var(--text-primary);\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.12s, background 0.12s;\n  box-sizing: border-box;\n}\n.input-cell[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.input-cell[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.input-cell.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.qty-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.stock-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 5px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n.stock-tag.stock-ok[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.stock-tag.stock-low[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.qty-warn[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  background: var(--danger-bg) !important;\n}\n.autocomplete-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  position: relative;\n}\n.line-search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6px;\n  font-size: 14px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n}\n.ac-row[_ngcontent-%COMP%]:focus-within   .line-search-icon[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.product-search[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 26px !important;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 2px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n}\n.btn-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.suggestions-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);\n  z-index: 9999;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sug-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  gap: 10px;\n  transition: background 0.1s;\n}\n.sug-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.sug-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.sug-item[_ngcontent-%COMP%]:hover {\n  background: var(--accent-light);\n}\n.sug-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.sug-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.sug-code[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-family: monospace;\n  font-size: 11px;\n  background: var(--bg-elevated);\n  color: #017E84;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 700;\n}\n.sug-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sug-stock[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.sug-stock.low[_ngcontent-%COMP%] {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.sug-price[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  font-family: monospace;\n  background: var(--bg-elevated);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.sug-empty[_ngcontent-%COMP%] {\n  padding: 14px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-style: italic;\n}\n.product-ro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.btn-add-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed var(--border);\n  border-radius: 6px;\n  padding: 10px 20px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-add-inline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-add-inline[_ngcontent-%COMP%]:hover {\n  border-color: #017E84;\n  color: #017E84;\n  background: var(--bg-hover);\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--border);\n  transition: all 0.15s;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.row-consigne-auto[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.04) !important;\n}\n.row-consigne-auto[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.09) !important;\n}\n.row-consigne-auto[_ngcontent-%COMP%]   .col-ttc[_ngcontent-%COMP%] {\n  color: var(--success) !important;\n}\n.row-deconsigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.04) !important;\n}\n.row-deconsigne[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.09) !important;\n}\n.row-deconsigne[_ngcontent-%COMP%]   .col-ttc[_ngcontent-%COMP%] {\n  color: var(--danger) !important;\n}\n.consigne-ro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.badge-consigne-auto[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--success-bg);\n  color: var(--success);\n  white-space: nowrap;\n  flex-shrink: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.badge-deconsigne[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--danger-bg);\n  color: var(--danger);\n  white-space: nowrap;\n  flex-shrink: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.qty-neg[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.so-footer-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.consigne-summary-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  min-width: 260px;\n  border-left: 3px solid var(--success);\n}\n.cs-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.cs-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--success);\n}\n.cs-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cs-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  padding: 5px 8px;\n  border-radius: 6px;\n}\n.cs-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n}\n.cs-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.cs-row.cs-plus[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n}\n.cs-row.cs-plus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--success);\n}\n.cs-row.cs-minus[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n}\n.cs-row.cs-minus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--danger);\n}\n.cs-row.cs-net[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border);\n  margin-top: 4px;\n}\n.so-totals[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.totals-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 24px;\n  min-width: 300px;\n}\n.tot-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n}\n.tot-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tot-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n}\n.tot-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  font-family: "Roboto Mono", monospace;\n}\n.tot-row[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: #adb5bd !important;\n}\n.tot-row.tot-ttc[_ngcontent-%COMP%] {\n  border-top: 2px solid #017E84;\n  border-bottom: none;\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.tot-row.tot-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.tot-row.tot-ttc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: #017E84;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal-deconsigne[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  max-width: 760px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.modal-d-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 24px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.modal-d-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: var(--success);\n}\n.modal-d-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.modal-d-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.modal-d-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n.deconsigne-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.dg-section[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border-light);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.dg-section-header[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #017E84;\n  background: color-mix(in srgb, #017E84 8%, transparent);\n  border-bottom: 1px solid var(--border-light);\n}\n.dg-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr 72px;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--border-light);\n}\n.dg-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dg-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.di-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n  font-weight: 700;\n  color: #017E84;\n  white-space: nowrap;\n}\n.di-nom[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.di-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 2px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  text-align: right;\n  outline: none;\n  transition: border-color 0.15s;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.di-input[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.15);\n}\n.di-input.di-filled[_ngcontent-%COMP%] {\n  border-color: var(--success);\n  background: var(--success-bg);\n  color: var(--success);\n  font-weight: 800;\n}\n.modal-d-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 12px 0 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 8px;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.modal-d-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.modal-d-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.btn-modal-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n}\n.btn-modal-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-modal-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  border-color: var(--text-muted);\n}\n.btn-modal-confirm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: "Roboto", sans-serif;\n}\n.btn-modal-confirm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-modal-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--success) 85%, black);\n}\n.btn-modal-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  font-size: 16px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap[_ngcontent-%COMP%]:focus-within   .ac-icon[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.ac-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ac-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  right: 0;\n  z-index: 1050;\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 280px;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_acDrop 0.12s ease-out;\n}\n@keyframes _ngcontent-%COMP%_acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ac-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-left-color: #017E84;\n}\n.ac-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(1, 126, 132, 0.15);\n  color: #017E84;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.ac-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=order-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderFormComponent, [{
    type: Component,
    args: [{ selector: "app-order-form", standalone: true, imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditTrailComponent], template: `<div class="so-page">
  <!-- \u2500\u2500 Header \u2500\u2500 -->
  <div class="so-header">
    <button class="btn-back" (click)="back()"><span class="material-icons">arrow_back</span></button>
    <div class="header-info">
      <h1>{{ pageTitle }}</h1>
      @if (order.state) {
        <span class="badge badge-{{ order.state }}">{{ stateLabel(order.state) }}</span>
      }
    </div>
    <div class="header-actions">
      @if (orderId && order.state && order.state !== 'draft') {
        <button class="btn-print" (click)="openPrint()">
          <span class="material-icons">print</span> Imprimer
        </button>
      }
      @if (order.state === 'draft' || !order.state) {
        <button class="btn-save" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
        </button>
      }
      @if (order.state === 'draft' && orderId) {
        <button class="btn-confirm" (click)="confirm()" [disabled]="confirming || saving">
          <span class="material-icons">check_circle</span>
          {{ confirming ? 'Confirmation...' : saving ? 'Sauvegarde...' : 'Confirmer' }}
        </button>
      }
      @if (order.state === 'draft') {
        <button class="btn-cancel-order" (click)="cancelOrder()">
          <span class="material-icons">cancel</span> Annuler
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

  @if (order.invoiceId) {
    <div class="invoice-banner">
      <span class="material-icons">receipt_long</span>
      Facture associ\xE9e : <strong>{{ order.invoiceName }}</strong>
      <button class="btn-goto-invoice" (click)="router.navigate(['/sales/invoices', order.invoiceId])">
        <span class="material-icons">open_in_new</span> Voir la facture
      </button>
    </div>
  }

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="so-body">

      <!-- \u2500\u2500 Informations \u2500\u2500 -->
      <div class="so-meta">
        <div class="meta-grid">

          <div class="form-group">
            <label>Client <span class="required">*</span></label>
            <div class="ac-wrap">
              <div class="ac-field">
                <span class="material-icons ac-icon">person_search</span>
                <input type="text" class="form-control"
                       [(ngModel)]="clientSearch"
                       (input)="clientDropdown = true"
                       (focus)="clientDropdown = true"
                       (blur)="onClientBlur()"
                       [disabled]="isReadOnly"
                       placeholder="Chercher un client\u2026"
                       autocomplete="off" />
              </div>
              @if (clientDropdown && filteredClients.length > 0) {
                <div class="ac-dropdown">
                  @for (c of filteredClients; track c.id) {
                    <div class="ac-item" (mousedown)="selectClient(c)">
                      <span class="ac-avatar">{{ c.name.charAt(0) }}</span>
                      <span class="ac-name">{{ c.name }}</span>
                      @if (c.ref) { <span class="ac-code">{{ c.ref }}</span> }
                    </div>
                  }
                </div>
              }
            </div>
            @if (loadingBalance) {
              <span class="balance-note">Chargement solde\u2026</span>
            } @else if (partnerBalance !== null) {
              <div class="balance-chip"
                [class.chip-debit]="(partnerBalance || 0) > 0"
                [class.chip-credit]="(partnerBalance || 0) < 0"
                [class.chip-zero]="(partnerBalance || 0) === 0">
                <span class="material-icons">account_balance_wallet</span>
                Solde : {{ (partnerBalance || 0) | number:'1.0-0' }} FCFA
                @if ((partnerBalance || 0) > 0) { <em>(doit)</em> }
                @else if ((partnerBalance || 0) < 0) { <em>(on lui doit)</em> }
                @else { <em>(sold\xE9)</em> }
                @if ((partnerCreditDisponible || 0) > 0) {
                  <span class="credit-tag">Cr\xE9dit : {{ partnerCreditDisponible | number:'1.0-0' }} FCFA</span>
                }
              </div>
            }
          </div>

          <div class="form-group">
            <label>Journal de vente <span class="required">*</span></label>
            <select [(ngModel)]="order.journalId" [disabled]="isReadOnly" class="form-control">
              @for (j of journals; track j.id) {
                <option [value]="j.id">{{ j.code }} - {{ j.name }}</option>
              }
            </select>
          </div>

          <div class="form-group">
            <label>Entrep\xF4t <span class="required">*</span></label>
            @if (!isReadOnly) {
              <select [(ngModel)]="order.warehouseId" class="form-control" (ngModelChange)="onWarehouseChange($event)">
                <option [ngValue]="undefined">\u2014 S\xE9lectionner \u2014</option>
                @for (w of warehouses; track w.id) {
                  <option [value]="w.id">{{ w.name }}</option>
                }
              </select>
            } @else {
              <div class="form-control form-readonly">{{ order.warehouseName || '\u2014' }}</div>
            }
          </div>

          <div class="form-group">
            <label>Date du bon</label>
            <input type="date" [(ngModel)]="order.date" [disabled]="isReadOnly" class="form-control" />
          </div>

          <div class="form-group">
            <label>Date d'\xE9ch\xE9ance</label>
            <input type="date" [(ngModel)]="order.dateEcheance" [disabled]="isReadOnly" class="form-control" />
          </div>

          <div class="form-group meta-span-full">
            <label>Notes</label>
            <textarea [(ngModel)]="order.notes" [disabled]="isReadOnly" class="form-control" rows="2"></textarea>
          </div>

        </div>
      </div>

      <!-- \u2500\u2500 Lignes \u2500\u2500 -->
      <div class="so-lines">
        <div class="lines-header">
          <span>Lignes de commande</span>
          @if (!isReadOnly) {
            <button class="btn-add-line" (click)="addLine()">
              <span class="material-icons">add</span> Ajouter une ligne
            </button>
          }
        </div>
        <div class="lines-table-wrapper">
          <table class="lines-table">
            <thead>
              <tr>
                <th class="col-num">#</th>
                <th class="col-product">Article</th>
                <th class="col-num text-right">Qt\xE9</th>
                <th class="col-price text-right">Prix TTC</th>
                <th class="col-price text-right" style="color:#e65100">Rabais/u</th>
                <th class="col-pct text-right">TVA %</th>
                <th class="col-account">Compte</th>
                <th class="col-amount text-right">Mnt HT</th>
                <th class="col-amount text-right">Mnt TTC</th>
                @if (!isReadOnly) { <th class="col-del"></th> }
              </tr>
            </thead>
            <tbody>
              @for (line of order.lines; track $index; let i = $index) {
                <tr [class.row-consigne-auto]="isAutoConsigneLine(line)"
                    [class.row-deconsigne]="isDeconsigneLine(line)">
                  <td class="col-num text-center tgray">{{ i + 1 }}</td>

                  <td class="col-product">
                    @if (isAutoConsigneLine(line)) {
                      <!-- Ligne consigne automatique \u2014 lecture seule -->
                      <div class="product-ro consigne-ro">
                        <span class="badge-consigne-auto">CONSIGNE AUTO</span>
                        @if (line.productCode) { <span class="sug-code">{{ line.productCode }}</span> }
                        <span>{{ line.description }}</span>
                      </div>
                    } @else if (isDeconsigneLine(line)) {
                      <!-- Ligne d\xE9consigne \u2014 lecture seule -->
                      <div class="product-ro consigne-ro">
                        <span class="badge-deconsigne">D\xC9CONSIGNE</span>
                        @if (line.productCode) { <span class="sug-code">{{ line.productCode }}</span> }
                        <span>{{ line.description }}</span>
                      </div>
                    } @else if (!isReadOnly) {
                      <div class="autocomplete-wrap">
                        <div class="ac-row">
                          <span class="material-icons line-search-icon">search</span>
                          <input #productInput type="text" class="input-cell product-search"
                            [placeholder]="allProducts.length === 0 ? 'Aucun article' : 'Rechercher...'"
                            [(ngModel)]="lineSearches[i]"
                            (focus)="openSuggestions(i, $event)"
                            (blur)="closeSuggestions(i)"
                            (input)="openSuggestions(i, $event)"
                            (keydown.enter)="onProductSearchEnter(i, $event)"
                            autocomplete="off" />
                          @if (line.productCode) {
                            <button class="btn-clear" (click)="clearLine(i)">
                              <span class="material-icons">close</span>
                            </button>
                          }
                        </div>
                        @if (activeSuggestionIdx === i && dropdownRect) {
                          <div class="suggestions-panel"
                            [style.top.px]="dropdownRect.top"
                            [style.left.px]="dropdownRect.left"
                            [style.width.px]="dropdownRect.width">
                            @for (p of getSuggestions(i); track p.id) {
                              <div class="sug-item" (mousedown)="selectProduct(i, p)">
                                <div class="sug-main">
                                  @if (p.defaultCode) { <span class="sug-code">{{ p.defaultCode }}</span> }
                                  <span class="sug-name">{{ p.name }}</span>
                                </div>
                                <div class="sug-meta">
                                  <span class="sug-stock" [class.low]="(p.qtyOnHand || 0) <= 0">
                                    {{ p.qtyOnHand | number:'1.0-0' }} {{ p.uomName }}
                                  </span>
                                  <span class="sug-price">{{ computePrixTTC(p.salePrice || 0, p.exemptTva ? 0 : TVA_DEFAULT) | number:'1.0-0' }} FCFA TTC</span>
                                </div>
                              </div>
                            }
                            @if (getSuggestions(i).length === 0) {
                              <div class="sug-empty">
                                @if (allProducts.length === 0) { Aucun article dans le stock }
                                @else { Aucun r\xE9sultat pour "{{ lineSearches[i] }}" }
                              </div>
                            }
                          </div>
                        }
                      </div>
                    } @else {
                      <div class="product-ro">
                        @if (line.productCode) { <span class="sug-code">{{ line.productCode }}</span> }
                        <span>{{ line.description }}</span>
                      </div>
                    }
                  </td>

                  <td class="text-right">
                    @if (!isReadOnly && !isAutoConsigneLine(line)) {
                      <div class="qty-wrap">
                        <input type="number" [(ngModel)]="line.quantity" (ngModelChange)="onLineChange(line)"
                               class="input-cell text-right" [class.qty-warn]="hasStockWarning(i)" min="0"
                               (keydown.enter)="onLineEnter($event)" />
                        @if (line.productId && !line.consigne) {
                          <span class="stock-tag" [class.stock-low]="lineStockQty[i] <= 0" [class.stock-ok]="lineStockQty[i] > 0">
                            {{ lineStockQty[i] }} dispo
                          </span>
                        }
                      </div>
                    } @else {
                      <span [class.qty-neg]="(line.quantity || 0) < 0">{{ line.quantity }}</span>
                    }
                  </td>

                  <!-- Prix TTC (saisie) / HT calcul\xE9 affich\xE9 en dessous -->
                  <td class="text-right">
                    @if (!isReadOnly && !isAutoConsigneLine(line) && !isDeconsigneLine(line)) {
                      <input type="number" [(ngModel)]="linePrixTTC[$index]" (ngModelChange)="onPrixTTCChange($index)"
                             class="input-cell text-right" min="0" (keydown.enter)="onLineEnter($event)" />
                      <small class="prix-ht-hint">HT: {{ line.prixUnitaire | number:'1.2-2' }}</small>
                    } @else { {{ linePrixTTC[$index] | number:'1.0-0' }} }
                  </td>

                  <!-- Rabais unitaire accord\xE9 \xE0 ce client -->
                  <td class="text-right" style="color:#e65100;font-weight:500">
                    @if ((line.rabaisUnitaire ?? 0) > 0) {
                      \u2013 {{ line.rabaisUnitaire | number:'1.0-0' }}
                    } @else { \u2014 }
                  </td>

                  <td class="text-right">
                    @if (!isReadOnly && !isAutoConsigneLine(line) && !isDeconsigneLine(line)) {
                      <input type="number" [(ngModel)]="line.tauxTVA" (ngModelChange)="onTauxTVAChange($index)"
                             class="input-cell text-right" min="0" (keydown.enter)="onLineEnter($event)" />
                    } @else { {{ line.tauxTVA || 0 }}% }
                  </td>

                  <td>
                    @if (!isReadOnly && !isAutoConsigneLine(line) && !isDeconsigneLine(line)) {
                      <input type="text" [(ngModel)]="line.accountCode" class="input-cell" placeholder="701100"
                             (keydown.enter)="onLineEnter($event)" />
                    } @else { {{ line.accountCode || '\u2014' }} }
                  </td>

                  <td class="text-right col-ht">{{ line.montantHT | number:'1.2-2' }}</td>
                  <td class="text-right col-ttc">{{ line.montantTTC | number:'1.0-0' }}</td>

                  @if (!isReadOnly) {
                    <td class="col-del">
                      @if (!isAutoConsigneLine(line)) {
                        <button class="btn-remove-line" (click)="removeLine($index)">
                          <span class="material-icons">delete_outline</span>
                        </button>
                      }
                    </td>
                  }
                </tr>
              }
              @if (order.lines.length === 0) {
                <tr>
                  <td [attr.colspan]="isReadOnly ? 9 : 10" class="empty-lines">
                    @if (!isReadOnly) {
                      <button class="btn-add-inline" (click)="addLine()">
                        <span class="material-icons">add_circle_outline</span>
                        Cliquez pour ajouter une ligne
                      </button>
                    } @else { Aucune ligne }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <!-- \u2500\u2500 Totaux \u2500\u2500 -->
      <div class="so-footer-grid">

        <!-- R\xE9sum\xE9 consignes (affich\xE9 seulement si des consignes sont pr\xE9sentes) -->
        @if (qteConsigne > 0 || qteDeconsigne > 0) {
          <div class="consigne-summary-box">
            <div class="cs-title">
              <span class="material-icons">inventory_2</span>
              Emballages consign\xE9s
            </div>
            <div class="cs-rows">
              @if (qteConsigne > 0) {
                <div class="cs-row cs-plus">
                  <span>Consigne (sortie)</span>
                  <span>+ {{ qteConsigne }} caisse{{ qteConsigne > 1 ? 's' : '' }}</span>
                </div>
              }
              @if (qteDeconsigne > 0) {
                <div class="cs-row cs-minus">
                  <span>D\xE9consigne (r\xE9cup\xE9ration)</span>
                  <span>\u2013 {{ qteDeconsigne }} caisse{{ qteDeconsigne > 1 ? 's' : '' }}</span>
                </div>
              }
              @if (qteConsigne > 0 && qteDeconsigne > 0) {
                <div class="cs-row cs-net">
                  <span>Net emballages</span>
                  <span>{{ qteConsigne - qteDeconsigne }}</span>
                </div>
              }
            </div>
          </div>
        }

        <div class="so-totals">
          <div class="totals-box">
            <div class="tot-row"><span>Total HT</span><span>{{ order.totalHT | number:'1.2-2' }} FCFA</span></div>
            <div class="tot-row tot-taxes">
              <span>Taxes (TVA + Pr\xE9compte)</span>
              <span>{{ ((order.totalTVA ?? 0) + (order.totalPrecompte ?? 0)) | number:'1.0-0' }} FCFA</span>
            </div>
            <div class="tot-row tot-ttc">
              <span>Total TTC</span>
              <span>{{ (order.totalTTC ?? 0) | number:'1.0-0' }} FCFA</span>
            </div>
            @if (totalRabais > 0) {
              <div class="tot-row" style="color:#e65100">
                <span>Rabais accord\xE9s (701901)</span>
                <span>\u2013 {{ totalRabais | number:'1.0-0' }} FCFA</span>
              </div>
            }
            @if ((order.fraisEnlevementTTC ?? 0) > 0) {
              <div class="tot-row"><span>Frais d'enl\xE8vement</span><span>{{ order.fraisEnlevementTTC | number:'1.0-0' }} FCFA</span></div>
            }
            <div class="tot-row tot-net">
              <span>NET \xC0 PAYER</span>
              <span>{{ netAPayer | number:'1.0-0' }} FCFA</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  }
</div>

<!-- \u2500\u2500 Modal D\xE9consigne \u2500\u2500 -->
@if (showDeconsigneModal) {
  <div class="modal-backdrop" (click)="cancelDeconsigne()">
    <div class="modal-deconsigne" (click)="$event.stopPropagation()">

      <div class="modal-d-header">
        <span class="material-icons">inventory_2</span>
        <div>
          <div class="modal-d-title">Saisie des d\xE9consignes</div>
          <div class="modal-d-sub">Indiquez les quantit\xE9s r\xE9cup\xE9r\xE9es \u2014 laisser vide = 0</div>
        </div>
      </div>

      <div class="modal-d-body">
        <div class="deconsigne-grid">
          @for (group of deconsigneGroups; track group.label) {
            <div class="dg-section">
              <div class="dg-section-header">{{ group.label }}</div>
              @for (d of group.items; track d.code) {
                <div class="dg-row">
                  <span class="di-code">{{ d.code }}</span>
                  <span class="di-nom">{{ d.nom }}</span>
                  <input type="number"
                         [(ngModel)]="d.qty"
                         class="di-input"
                         min="0"
                         placeholder="0"
                         [class.di-filled]="d.qty !== null && d.qty! > 0" />
                </div>
              }
            </div>
          }
        </div>
      </div>

      @if (errorMsg) {
        <div class="modal-d-error">
          <span class="material-icons">error_outline</span> {{ errorMsg }}
        </div>
      }

      <div class="modal-d-actions">
        <button class="btn-modal-cancel" (click)="cancelDeconsigne()">
          <span class="material-icons">close</span> Annuler
        </button>
        <button class="btn-modal-confirm" (click)="validateDeconsigne()" [disabled]="saving">
          <span class="material-icons">{{ saving ? 'hourglass_empty' : 'check_circle' }}</span>
          {{ saving ? 'Sauvegarde...' : 'Valider et confirmer le bon' }}
        </button>
      </div>

    </div>
  </div>
}

@if (orderId) {
  <app-audit-trail entityType="SALE_ORDER" [entityId]="orderId"></app-audit-trail>
}

@if (showPrintModal && orderId) {
  <app-print-preview
    [salesOrder]="order"
    docType="sales_order"
    [companyName]="printCompanyName"
    [companyPhone]="printCompanyPhone"
    [companyLogoUrl]="printCompanyLogoUrl"
    [companyLogoDataUrl]="printCompanyLogoDataUrl"
    [companyInfo]="printCompany"
    (closed)="closePrint()">
  </app-print-preview>
}
`, styles: ['/* src/app/modules/sales/components/orders/order-form.component.scss */\n.so-page {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.so-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.btn-back {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-back:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-info h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-invoiced {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-save,\n.btn-confirm,\n.btn-cancel-order,\n.btn-print {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-save .material-icons,\n.btn-confirm .material-icons,\n.btn-cancel-order .material-icons,\n.btn-print .material-icons {\n  font-size: 16px;\n}\n.btn-save:disabled,\n.btn-confirm:disabled,\n.btn-cancel-order:disabled,\n.btn-print:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-print {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-color: var(--border);\n}\n.btn-print:hover {\n  background: var(--bg-hover);\n  border-color: var(--text-muted);\n}\n.btn-save {\n  background: #017E84;\n  color: white;\n  border-color: #017E84;\n}\n.btn-save:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-confirm {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.btn-confirm:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-cancel-order {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #f5c6cb;\n}\n.btn-cancel-order:hover {\n  background: #842029;\n  color: white;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.invoice-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  background: var(--success-bg);\n  color: var(--success);\n  border-radius: 8px;\n  font-size: 14px;\n}\n.invoice-banner .material-icons {\n  font-size: 18px;\n  color: var(--success);\n}\n.btn-goto-invoice {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  padding: 5px 12px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-goto-invoice .material-icons {\n  font-size: 14px;\n}\n.btn-goto-invoice:hover {\n  background: color-mix(in srgb, var(--success) 80%, black);\n}\n.so-body {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.so-meta {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 20px 24px;\n}\n.meta-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.meta-grid .meta-span-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .required {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control:focus {\n  border-color: #017E84;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.form-control:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.form-readonly {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  cursor: default;\n}\n.balance-note {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.balance-chip {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 6px;\n  padding: 7px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.balance-chip .material-icons {\n  font-size: 14px;\n}\n.balance-chip.chip-debit {\n  background: var(--warning-bg);\n  border: 1px solid #f97316;\n  color: var(--warning);\n}\n.balance-chip.chip-credit {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n  color: var(--success);\n}\n.balance-chip.chip-zero {\n  background: var(--bg-elevated);\n  border: 1px solid #cbd5e1;\n  color: var(--text-muted);\n}\n.credit-tag {\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: #017E84;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.so-lines {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.lines-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: var(--accent);\n}\n.lines-table-wrapper {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table thead tr {\n  background: var(--bg-elevated);\n}\n.lines-table th {\n  padding: 9px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid var(--border);\n  white-space: nowrap;\n  text-align: left;\n}\n.lines-table tbody tr {\n  transition: background 0.1s;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table td {\n  padding: 4px 6px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.col-num {\n  width: 32px;\n  text-align: center;\n}\n.col-product {\n  min-width: 240px;\n}\n.col-price {\n  width: 100px;\n}\n.col-pct {\n  width: 70px;\n}\n.col-account {\n  width: 80px;\n}\n.col-amount {\n  width: 110px;\n}\n.col-del {\n  width: 36px;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.tgray {\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.col-ht {\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.col-ttc {\n  font-family: "Roboto Mono", monospace;\n  font-weight: 700;\n  color: #017E84;\n}\n.prix-ht-hint {\n  display: block;\n  font-size: 10px;\n  color: var(--text-muted);\n  text-align: right;\n  margin-top: 1px;\n}\n.input-cell {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: var(--text-primary);\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.12s, background 0.12s;\n  box-sizing: border-box;\n}\n.input-cell:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.input-cell:focus {\n  border-color: #017E84;\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.input-cell.text-right {\n  text-align: right;\n}\n.qty-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.stock-tag {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 5px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n.stock-tag.stock-ok {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.stock-tag.stock-low {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.qty-warn {\n  border-color: #dc3545 !important;\n  background: var(--danger-bg) !important;\n}\n.autocomplete-wrap {\n  position: relative;\n}\n.ac-row {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  position: relative;\n}\n.line-search-icon {\n  position: absolute;\n  left: 6px;\n  font-size: 14px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n}\n.ac-row:focus-within .line-search-icon {\n  color: #017E84;\n}\n.product-search {\n  flex: 1;\n  padding-left: 26px !important;\n}\n.btn-clear {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 2px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n}\n.btn-clear .material-icons {\n  font-size: 14px;\n}\n.btn-clear:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.suggestions-panel {\n  position: fixed;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);\n  z-index: 9999;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sug-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  gap: 10px;\n  transition: background 0.1s;\n}\n.sug-item:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.sug-item:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.sug-item:hover {\n  background: var(--accent-light);\n}\n.sug-main {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.sug-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.sug-code {\n  flex-shrink: 0;\n  font-family: monospace;\n  font-size: 11px;\n  background: var(--bg-elevated);\n  color: #017E84;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 700;\n}\n.sug-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sug-stock {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.sug-stock.low {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.sug-price {\n  font-size: 11px;\n  color: var(--text-secondary);\n  font-family: monospace;\n  background: var(--bg-elevated);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.sug-empty {\n  padding: 14px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-style: italic;\n}\n.product-ro {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.empty-lines {\n  text-align: center;\n  padding: 36px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.btn-add-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed var(--border);\n  border-radius: 6px;\n  padding: 10px 20px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-add-inline .material-icons {\n  font-size: 20px;\n}\n.btn-add-inline:hover {\n  border-color: #017E84;\n  color: #017E84;\n  background: var(--bg-hover);\n}\n.btn-remove-line {\n  width: 28px;\n  height: 28px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--border);\n  transition: all 0.15s;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.row-consigne-auto td {\n  background: rgba(5, 150, 105, 0.04) !important;\n}\n.row-consigne-auto:hover td {\n  background: rgba(5, 150, 105, 0.09) !important;\n}\n.row-consigne-auto .col-ttc {\n  color: var(--success) !important;\n}\n.row-deconsigne td {\n  background: rgba(220, 38, 38, 0.04) !important;\n}\n.row-deconsigne:hover td {\n  background: rgba(220, 38, 38, 0.09) !important;\n}\n.row-deconsigne .col-ttc {\n  color: var(--danger) !important;\n}\n.consigne-ro {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.badge-consigne-auto {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--success-bg);\n  color: var(--success);\n  white-space: nowrap;\n  flex-shrink: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.badge-deconsigne {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--danger-bg);\n  color: var(--danger);\n  white-space: nowrap;\n  flex-shrink: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.qty-neg {\n  color: var(--danger);\n  font-weight: 600;\n}\n.so-footer-grid {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.consigne-summary-box {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n  min-width: 260px;\n  border-left: 3px solid var(--success);\n}\n.cs-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.cs-title .material-icons {\n  font-size: 18px;\n  color: var(--success);\n}\n.cs-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cs-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  padding: 5px 8px;\n  border-radius: 6px;\n}\n.cs-row span:first-child {\n  color: var(--text-muted);\n}\n.cs-row span:last-child {\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n}\n.cs-row.cs-plus {\n  background: var(--success-bg);\n}\n.cs-row.cs-plus span:last-child {\n  color: var(--success);\n}\n.cs-row.cs-minus {\n  background: var(--danger-bg);\n}\n.cs-row.cs-minus span:last-child {\n  color: var(--danger);\n}\n.cs-row.cs-net {\n  background: var(--bg-elevated);\n  border-top: 1px solid var(--border);\n  margin-top: 4px;\n}\n.so-totals {\n  display: flex;\n  justify-content: flex-end;\n}\n.totals-box {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 24px;\n  min-width: 300px;\n}\n.tot-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 14px;\n}\n.tot-row:last-child {\n  border-bottom: none;\n}\n.tot-row span:first-child {\n  color: var(--text-muted);\n}\n.tot-row span:last-child {\n  font-weight: 500;\n  font-family: "Roboto Mono", monospace;\n}\n.tot-row .muted {\n  color: #adb5bd !important;\n}\n.tot-row.tot-ttc {\n  border-top: 2px solid #017E84;\n  border-bottom: none;\n  margin-top: 4px;\n  padding-top: 12px;\n}\n.tot-row.tot-ttc span:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.tot-row.tot-ttc span:last-child {\n  font-size: 18px;\n  font-weight: 700;\n  color: #017E84;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal-deconsigne {\n  background: var(--bg-surface);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  max-width: 760px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.modal-d-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 24px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.modal-d-header .material-icons {\n  font-size: 26px;\n  color: var(--success);\n}\n.modal-d-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.modal-d-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.modal-d-body {\n  padding: 20px 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n.deconsigne-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.dg-section {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border-light);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.dg-section-header {\n  padding: 7px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #017E84;\n  background: color-mix(in srgb, #017E84 8%, transparent);\n  border-bottom: 1px solid var(--border-light);\n}\n.dg-row {\n  display: grid;\n  grid-template-columns: 60px 1fr 72px;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--border-light);\n}\n.dg-row:last-child {\n  border-bottom: none;\n}\n.dg-row:hover {\n  background: var(--bg-hover);\n}\n.di-code {\n  font-family: monospace;\n  font-size: 11px;\n  font-weight: 700;\n  color: #017E84;\n  white-space: nowrap;\n}\n.di-nom {\n  font-size: 11px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.di-input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 2px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  text-align: right;\n  outline: none;\n  transition: border-color 0.15s;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.di-input:focus {\n  border-color: #017E84;\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.15);\n}\n.di-input.di-filled {\n  border-color: var(--success);\n  background: var(--success-bg);\n  color: var(--success);\n  font-weight: 800;\n}\n.modal-d-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 12px 0 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 8px;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.modal-d-error .material-icons {\n  font-size: 16px;\n}\n.modal-d-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.btn-modal-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n}\n.btn-modal-cancel .material-icons {\n  font-size: 16px;\n}\n.btn-modal-cancel:hover {\n  background: var(--bg-elevated);\n  border-color: var(--text-muted);\n}\n.btn-modal-confirm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: "Roboto", sans-serif;\n}\n.btn-modal-confirm .material-icons {\n  font-size: 16px;\n}\n.btn-modal-confirm:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--success) 85%, black);\n}\n.btn-modal-confirm:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-field {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon {\n  position: absolute;\n  left: 9px;\n  font-size: 16px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap:focus-within .ac-icon {\n  color: #017E84;\n}\n.ac-field .form-control {\n  padding-left: 34px;\n}\n.ac-dropdown {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  right: 0;\n  z-index: 1050;\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 280px;\n  overflow-y: auto;\n  animation: acDrop 0.12s ease-out;\n}\n@keyframes acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item:last-child {\n  border-bottom: none;\n}\n.ac-item:hover {\n  background: var(--bg-hover);\n  border-left-color: #017E84;\n}\n.ac-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(1, 126, 132, 0.15);\n  color: #017E84;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.ac-name {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=order-form.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AccountingService }, { type: StockService }, { type: AuthService }, { type: CompanyService }, { type: ActivatedRoute }, { type: Router }], { productInputs: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderFormComponent, { className: "OrderFormComponent", filePath: "app/modules/sales/components/orders/order-form.component.ts", lineNumber: 22 });
})();
export {
  OrderFormComponent
};
//# sourceMappingURL=chunk-IW3NX56Q.js.map
