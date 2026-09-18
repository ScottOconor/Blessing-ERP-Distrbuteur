import {
  ConfigService
} from "./chunk-Y6UTENYI.js";
import {
  StockService
} from "./chunk-LIGNVDFD.js";
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
  ViewChildren,
  catchError,
  forkJoin,
  of,
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
  ɵɵrestoreView,
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

// src/app/modules/stock/components/livraisons/livraison-detail.component.ts
var _c0 = ["productInput"];
var _forTrack0 = ($index, $item) => $item.id;
function LivraisonDetailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nouvelle exp\xE9dition inter-agences ");
  }
}
function LivraisonDetailComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "R\xE9ception entrante");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275conditionalCreate(1, LivraisonDetailComponent_Conditional_11_Conditional_1_Template, 2, 0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.picking.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isIncoming ? 1 : -1);
  }
}
function LivraisonDetailComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-state", ctx_r0.picking.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(ctx_r0.picking.state || ""));
  }
}
function LivraisonDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.saving || ctx_r0.validating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
function LivraisonDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validate());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.validating || ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.validating ? "Envoi..." : "Envoyer l'exp\xE9dition", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function LivraisonDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmReception());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.confirming);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirming ? "Confirmation..." : "Confirmer la r\xE9ception", " ");
  }
}
function LivraisonDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function LivraisonDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printBordereau());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Imprimer ");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function LivraisonDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 5);
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
function LivraisonDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 5);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 25);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retryNotifySender());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.warningMsg, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.retryingNotify);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.retryingNotify ? "hourglass_empty" : "refresh");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.retryingNotify ? "Nouvel essai..." : "R\xE9essayer", " ");
  }
}
function LivraisonDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 5);
    \u0275\u0275text(2, "move_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "R\xE9ception \xE0 confirmer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u2014 exp\xE9dition de ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". V\xE9rifiez les quantit\xE9s et confirmez pour mettre \xE0 jour votre stock. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.picking.partnerName || "\u2014");
  }
}
function LivraisonDetailComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 5);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Stock sorti. En attente de r\xE9ception par ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.picking.remoteAgencyName || ctx_r0.picking.partnerName);
  }
}
function LivraisonDetailComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 26);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_25_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter ");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, "Aucun article");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Dispo");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 48);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr")(2, "th", 45);
    \u0275\u0275text(3, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LivraisonDetailComponent_Conditional_25_Conditional_10_Conditional_6_Template, 2, 0, "th", 46);
    \u0275\u0275elementStart(7, "th", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 47);
    \u0275\u0275text(10, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 47);
    \u0275\u0275text(12, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, LivraisonDetailComponent_Conditional_25_Conditional_10_Conditional_13_Template, 1, 0, "th", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r0.isReadonly && !ctx_r0.isIncoming ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isReadonly || ctx_r0.isIncoming ? "Quantit\xE9" : "Qt\xE9 \xE0 envoyer");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadonly && !ctx_r0.isIncoming ? 13 : -1);
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.productName(line_r10.productId));
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Conditional_6_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r14.defaultCode);
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("mousedown", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Conditional_6_For_2_Template_div_mousedown_0_listener() {
      const p_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const \u0275$index_197_r12 = \u0275\u0275nextContext(3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectLineProduct(\u0275$index_197_r12, p_r14));
    });
    \u0275\u0275conditionalCreate(1, LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Conditional_6_For_2_Conditional_1_Template, 2, 1, "span", 60);
    \u0275\u0275elementStart(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
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
    \u0275\u0275advance();
    \u0275\u0275classProp("qty-low", (p_r14.qtyOnHand ?? 0) <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, p_r14.qtyOnHand ?? 0, "1.0-0"));
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275repeaterCreate(1, LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Conditional_6_For_2_Template, 7, 8, "div", 58, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_197_r12 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.lineFilteredProducts(\u0275$index_197_r12));
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 54)(2, "span", 55);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 56, 0);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_197_r12 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearchTexts[\u0275$index_197_r12], $event) || (ctx_r0.lineSearchTexts[\u0275$index_197_r12] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_197_r12 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDropdownIndex = \u0275$index_197_r12);
    })("focus", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Template_input_focus_4_listener() {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_197_r12 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDropdownIndex = \u0275$index_197_r12);
    })("blur", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_197_r12 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLineBlur(\u0275$index_197_r12));
    })("keydown.enter", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Template_input_keydown_enter_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_197_r12 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onProductEnter(\u0275$index_197_r12, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Conditional_6_Template, 3, 0, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_197_r12 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearchTexts[\u0275$index_197_r12]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.openDropdownIndex === \u0275$index_197_r12 && ctx_r0.lineFilteredProducts(\u0275$index_197_r12).length > 0 ? 6 : -1);
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(line_r10.availableQty < line_r10.qtyDone ? "qty-warn" : "qty-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, line_r10.availableQty, "1.0-2"), " ");
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, line_r10.qtyDone, "1.0-2"));
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_9_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const line_r10 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r10.qtyDone, $event) || (line_r10.qtyDone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_9_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r15);
      const line_r10 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(line_r10.qtyDemanded = line_r10.qtyDone);
    })("keydown.enter", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_9_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineEnter());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r10.qtyDone);
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 64);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_25_For_13_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const \u0275$index_197_r12 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_197_r12));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function LivraisonDetailComponent_Conditional_25_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, LivraisonDetailComponent_Conditional_25_For_13_Conditional_2_Template, 2, 1, "span", 49)(3, LivraisonDetailComponent_Conditional_25_For_13_Conditional_3_Template, 7, 2, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LivraisonDetailComponent_Conditional_25_For_13_Conditional_6_Template, 4, 6, "td", 51);
    \u0275\u0275elementStart(7, "td", 47);
    \u0275\u0275conditionalCreate(8, LivraisonDetailComponent_Conditional_25_For_13_Conditional_8_Template, 3, 4, "span", 49)(9, LivraisonDetailComponent_Conditional_25_For_13_Conditional_9_Template, 1, 1, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 47);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 53);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, LivraisonDetailComponent_Conditional_25_For_13_Conditional_16_Template, 4, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isReadonly || ctx_r0.isIncoming ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r10.uomName || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isReadonly && !ctx_r0.isIncoming ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isReadonly || ctx_r0.isIncoming ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 7, line_r10.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 10, line_r10.qtyDone * line_r10.priceUnit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadonly && !ctx_r0.isIncoming ? 16 : -1);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr")(2, "td", 65);
    \u0275\u0275text(3, "VALEUR TOTALE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 66);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, LivraisonDetailComponent_Conditional_25_Conditional_14_Conditional_7_Template, 1, 0, "td");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("colspan", ctx_r0.isReadonly || ctx_r0.isIncoming ? 3 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 3, ctx_r0.lineTotal, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadonly && !ctx_r0.isIncoming ? 7 : -1);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Stock re\xE7u de ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " et ajout\xE9 \xE0 ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.picking.partnerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.picking.locationDestName);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Stock sorti de ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " vers ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.picking.sourceWarehouseName || ctx_r0.picking.locationName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.picking.remoteAgencyName || ctx_r0.picking.partnerName);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 68);
    \u0275\u0275conditionalCreate(7, LivraisonDetailComponent_Conditional_25_Conditional_15_Conditional_7_Template, 7, 2)(8, LivraisonDetailComponent_Conditional_25_Conditional_15_Conditional_8_Template, 7, 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.isIncoming ? "R\xE9ception confirm\xE9e" : "Exp\xE9dition valid\xE9e");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isIncoming ? 7 : 8);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "label");
    \u0275\u0275text(2, "Agence \xE9mettrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 39)(6, "label");
    \u0275\u0275text(7, "R\xE9f\xE9rence exp\xE9dition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 39)(11, "label");
    \u0275\u0275text(12, "Entrep\xF4t de r\xE9ception");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 69)(14, "span", 5);
    \u0275\u0275text(15, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.partnerName) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.origin) || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.picking == null ? null : ctx_r0.picking.locationDestName) || "\u2014", " ");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 5);
    \u0275\u0275text(2, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.picking == null ? null : ctx_r0.picking.sourceWarehouseName) || (ctx_r0.selectedWarehouse == null ? null : ctx_r0.selectedWarehouse.name) || (ctx_r0.picking == null ? null : ctx_r0.picking.locationName) || "\u2014", " ");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r18 = ctx.$implicit;
    \u0275\u0275property("ngValue", w_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", w_r18.name, "", w_r18.code ? " [" + w_r18.code + "]" : "");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 74);
    \u0275\u0275text(1, "Aucun entrep\xF4t disponible");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedWarehouseId, $event) || (ctx_r0.selectedWarehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onWarehouseChange());
    });
    \u0275\u0275repeaterCreate(1, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_For_2_Template, 2, 3, "option", 73, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_Conditional_3_Template, 2, 0, "small", 74);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedWarehouseId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.warehouses.length === 0 ? 3 : -1);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.remoteAgencyName) || (ctx_r0.picking == null ? null : ctx_r0.picking.partnerName) || "\u2014");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_21_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r20 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r20.name, " (", a_r20.location || a_r20.host, ")");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 74);
    \u0275\u0275text(1, "Aucune agence distante configur\xE9e");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_21_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedRemoteAgencyId, $event) || (ctx_r0.selectedRemoteAgencyId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 73);
    \u0275\u0275text(2, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_21_For_4_Template, 2, 3, "option", 73, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_21_Conditional_5_Template, 2, 0, "small", 74);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedRemoteAgencyId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.remoteAgencies);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.remoteAgencies.length === 0 ? 5 : -1);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 5);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.picking == null ? null : ctx_r0.picking.locationDestName) || "\u2014", " ");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_28_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r22 = ctx.$implicit;
    \u0275\u0275property("ngValue", w_r22.stockLocationId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", w_r22.name, " / Stock");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_28_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedDestLocationId, $event) || (ctx_r0.selectedDestLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 73);
    \u0275\u0275text(2, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_28_For_4_Template, 2, 2, "option", 73, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 74);
    \u0275\u0275text(6, "Emplacement depuis lequel les marchandises partent");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedDestLocationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warehouses);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "label");
    \u0275\u0275text(2, "Agence \xE9mettrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 39)(6, "label");
    \u0275\u0275text(7, "Entrep\xF4t source ");
    \u0275\u0275elementStart(8, "span", 70);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_10_Template, 4, 1, "div", 69)(11, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_11_Template, 4, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 71)(13, "span", 5);
    \u0275\u0275text(14, "south");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 39)(16, "label");
    \u0275\u0275text(17, "Agence distante destinataire ");
    \u0275\u0275elementStart(18, "span", 70);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_20_Template, 2, 1, "div", 40)(21, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_21_Template, 6, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 39)(23, "label");
    \u0275\u0275text(24, "Emplacement de sortie ");
    \u0275\u0275elementStart(25, "span", 70);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_27_Template, 4, 1, "div", 69)(28, LivraisonDetailComponent_Conditional_25_Conditional_22_Conditional_28_Template, 7, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.companyName) || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isReadonly ? 10 : 11);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.isReadonly ? 20 : 21);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.isReadonly ? 27 : 28);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r0.scheduledDate, "dd/MM/yyyy"));
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_Conditional_31_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.scheduledDate, $event) || (ctx_r0.scheduledDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.scheduledDate);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.origin || "\u2014");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_Conditional_36_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.origin, $event) || (ctx_r0.origin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.origin);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notes || "\u2014");
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 77);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_25_Conditional_41_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.notes, $event) || (ctx_r0.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notes);
  }
}
function LivraisonDetailComponent_Conditional_25_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-audit-footer", 78)(1, "app-audit-trail", 79);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("createdBy", ctx_r0.picking.createdBy)("createdAt", ctx_r0.picking.createdAt)("updatedBy", ctx_r0.picking.updatedBy)("updatedAt", ctx_r0.picking.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275property("entityId", ctx_r0.picking.id ?? null);
  }
}
function LivraisonDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LivraisonDetailComponent_Conditional_25_Conditional_6_Template, 4, 0, "button", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275conditionalCreate(8, LivraisonDetailComponent_Conditional_25_Conditional_8_Template, 2, 0, "div", 33);
    \u0275\u0275elementStart(9, "table", 34);
    \u0275\u0275conditionalCreate(10, LivraisonDetailComponent_Conditional_25_Conditional_10_Template, 14, 3, "thead");
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, LivraisonDetailComponent_Conditional_25_For_13_Template, 17, 13, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, LivraisonDetailComponent_Conditional_25_Conditional_14_Template, 8, 6, "tfoot");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, LivraisonDetailComponent_Conditional_25_Conditional_15_Template, 9, 2, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36)(17, "div", 29)(18, "div", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 37);
    \u0275\u0275conditionalCreate(21, LivraisonDetailComponent_Conditional_25_Conditional_21_Template, 17, 3)(22, LivraisonDetailComponent_Conditional_25_Conditional_22_Template, 29, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 38)(24, "div", 30);
    \u0275\u0275text(25, "D\xE9tails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 37)(27, "div", 39)(28, "label");
    \u0275\u0275text(29, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, LivraisonDetailComponent_Conditional_25_Conditional_30_Template, 3, 4, "div", 40)(31, LivraisonDetailComponent_Conditional_25_Conditional_31_Template, 1, 1, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 39)(33, "label");
    \u0275\u0275text(34, "R\xE9f\xE9rence / Origine");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, LivraisonDetailComponent_Conditional_25_Conditional_35_Template, 2, 1, "div", 40)(36, LivraisonDetailComponent_Conditional_25_Conditional_36_Template, 1, 1, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 39)(38, "label");
    \u0275\u0275text(39, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, LivraisonDetailComponent_Conditional_25_Conditional_40_Template, 2, 1, "div", 40)(41, LivraisonDetailComponent_Conditional_25_Conditional_41_Template, 1, 1, "textarea", 43);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(42, LivraisonDetailComponent_Conditional_25_Conditional_42_Template, 2, 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.isIncoming ? "Articles re\xE7us" : "Articles \xE0 exp\xE9dier");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isReadonly && !ctx_r0.isIncoming ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length === 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-lines", ctx_r0.lines.length > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isDone && ctx_r0.picking ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isIncoming ? "Exp\xE9dition re\xE7ue de" : "Agences & Emplacements", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isIncoming ? 21 : 22);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.isReadonly || ctx_r0.isIncoming ? 30 : 31);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isReadonly || ctx_r0.isIncoming ? 35 : 36);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isReadonly || ctx_r0.isIncoming ? 40 : 41);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.picking ? 42 : -1);
  }
}
var LivraisonDetailComponent = class _LivraisonDetailComponent {
  lineFilteredProducts(i) {
    const q = (this.lineSearchTexts[i] || "").toLowerCase();
    if (!q)
      return this.products.slice(0, 60);
    return this.products.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q)).slice(0, 60);
  }
  selectLineProduct(i, p) {
    this.lines[i].productId = p.id;
    this.lineSearchTexts[i] = p.defaultCode ? `[${p.defaultCode}] ${p.name}` : p.name;
    this.openDropdownIndex = null;
    this.onProductChange(i);
  }
  onProductEnter(i, e) {
    e.preventDefault();
    const s = this.lineFilteredProducts(i);
    if (s.length > 0) {
      this.selectLineProduct(i, s[0]);
      return;
    }
    if (this.lines[i].productId)
      this.onLineEnter();
  }
  onLineEnter() {
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0)
        inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }
  onLineBlur(i) {
    setTimeout(() => {
      if (this.openDropdownIndex === i)
        this.openDropdownIndex = null;
    }, 200);
  }
  constructor(route, router, stockService, configService, authService, companyService) {
    this.route = route;
    this.router = router;
    this.stockService = stockService;
    this.configService = configService;
    this.authService = authService;
    this.companyService = companyService;
    this.picking = null;
    this.remoteAgencies = [];
    this.products = [];
    this.warehouses = [];
    this.loading = false;
    this.saving = false;
    this.validating = false;
    this.cancelling = false;
    this.confirming = false;
    this.retryingNotify = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.warningMsg = "";
    this.isNew = false;
    this.isReadonly = false;
    this.selectedRemoteAgencyId = null;
    this.selectedWarehouseId = null;
    this.selectedDestLocationId = null;
    this.scheduledDate = "";
    this.origin = "";
    this.notes = "";
    this.lines = [];
    this.lineSearchTexts = [];
    this.openDropdownIndex = null;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const id = this.route.snapshot.paramMap.get("id");
    this.isNew = !id || id === "new";
    forkJoin({
      agencies: this.configService.getRemoteAgencies().pipe(catchError(() => of([]))),
      products: this.stockService.getProducts(this.companyId).pipe(catchError(() => of([]))),
      warehouses: this.stockService.getWarehouses(this.companyId).pipe(catchError(() => of([])))
    }).subscribe(({ agencies, products, warehouses }) => {
      this.remoteAgencies = agencies;
      this.products = products.filter((p) => p.type === "product" || p.type === "consu");
      this.warehouses = warehouses;
      if (this.isNew) {
        this.scheduledDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        if (this.warehouses.length > 0)
          this.selectedWarehouseId = this.warehouses[0].id;
        this.addLine();
      } else {
        this.loadPicking(Number(id));
      }
    });
  }
  loadPicking(id) {
    this.loading = true;
    this.stockService.getInterCompanyExpedition(id).subscribe({
      next: (p) => {
        this.picking = p;
        this.selectedRemoteAgencyId = p.remoteAgencyId ?? null;
        this.selectedDestLocationId = p.locationDestId ?? null;
        this.scheduledDate = p.scheduledDate || "";
        this.origin = p.origin || "";
        this.notes = p.notes || "";
        this.isReadonly = p.state !== "draft" || this.isIncomingPicking(p);
        const matchedWh = this.warehouses.find((w) => w.stockLocationId === p.locationId);
        this.selectedWarehouseId = matchedWh?.id ?? (this.warehouses[0]?.id ?? null);
        this.lines = (p.moves || []).map((m) => ({
          productId: m.productId,
          qtyDemanded: m.qtyDemanded,
          qtyDone: m.qtyDone ?? m.qtyDemanded,
          priceUnit: m.priceUnit ?? 0,
          uomName: m.uomName || "",
          availableQty: 0
        }));
        this.lineSearchTexts = (p.moves || []).map((m) => {
          const prod = this.products.find((pr) => pr.id === m.productId);
          return prod ? prod.defaultCode ? `[${prod.defaultCode}] ${prod.name}` : prod.name : m.productName || "";
        });
        if (!this.isReadonly) {
          this.lines.forEach((_, i) => {
            if (this.lines[i].productId)
              this.refreshLineQty(i);
          });
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  /** Vrai si ce picking est une réception entrante (créée par un spoke distant) */
  isIncomingPicking(p) {
    return !!p.transferReception;
  }
  addLine() {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: "", availableQty: 0 });
    this.lineSearchTexts.push("");
  }
  removeLine(i) {
    this.lines.splice(i, 1);
    this.lineSearchTexts.splice(i, 1);
  }
  get selectedWarehouse() {
    return this.warehouses.find((w) => w.id === Number(this.selectedWarehouseId)) ?? null;
  }
  get selectedWarehouseLocationId() {
    return this.selectedWarehouse?.stockLocationId ?? void 0;
  }
  onWarehouseChange() {
    this.lines.forEach((_, i) => {
      if (this.lines[i].productId)
        this.refreshLineQty(i);
    });
  }
  onProductChange(i) {
    if (!this.selectedWarehouseId) {
      this.errorMsg = "S\xE9lectionnez d'abord l'entrep\xF4t source.";
      this.lines[i].productId = null;
      setTimeout(() => this.errorMsg = "", 4e3);
      return;
    }
    const prod = this.products.find((p) => p.id === Number(this.lines[i].productId));
    if (prod) {
      this.lines[i].uomName = prod.uomName || "";
      this.lines[i].priceUnit = prod.standardPrice || 0;
      this.refreshLineQty(i);
    }
  }
  refreshLineQty(i) {
    const prodId = Number(this.lines[i].productId);
    if (!prodId)
      return;
    const locId = this.selectedWarehouseLocationId;
    if (!locId) {
      this.lines[i].availableQty = 0;
      return;
    }
    this.stockService.getQuants(this.companyId, locId, prodId).subscribe({
      next: (q) => {
        this.lines[i].availableQty = q.reduce((s, qq) => s + (qq.availableQuantity ?? 0), 0);
      },
      error: () => {
      }
    });
  }
  buildReq() {
    return {
      remoteAgencyId: this.selectedRemoteAgencyId,
      locationId: this.selectedWarehouseLocationId ?? null,
      locationDestId: this.selectedDestLocationId,
      scheduledDate: this.scheduledDate,
      origin: this.origin,
      notes: this.notes,
      companyId: this.companyId,
      moves: this.lines.filter((l) => l.productId).map((l) => ({
        productId: Number(l.productId),
        qtyDemanded: l.qtyDemanded,
        qtyDone: l.qtyDone,
        priceUnit: l.priceUnit
      }))
    };
  }
  save() {
    if (!this.selectedRemoteAgencyId) {
      this.errorMsg = "S\xE9lectionner une agence distante destinataire";
      return;
    }
    if (!this.selectedDestLocationId) {
      this.errorMsg = "S\xE9lectionner un emplacement de destination";
      return;
    }
    if (this.lines.filter((l) => l.productId).length === 0) {
      this.errorMsg = "Ajouter au moins un article";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const obs = this.isNew ? this.stockService.createInterCompanyExpedition(this.buildReq()) : this.stockService.updateInterCompanyExpedition(this.picking.id, this.buildReq());
    obs.subscribe({
      next: (p) => {
        this.saving = false;
        if (this.isNew) {
          this.router.navigate(["/stock/expeditions", p.id]);
        } else {
          this.picking = p;
          this.successMsg = "Exp\xE9dition sauvegard\xE9e";
          setTimeout(() => this.successMsg = "", 3e3);
        }
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur de sauvegarde";
      }
    });
  }
  validate() {
    if (!this.picking)
      return;
    this.validating = true;
    this.errorMsg = "";
    this.stockService.updateInterCompanyExpedition(this.picking.id, this.buildReq()).subscribe({
      next: () => {
        this.stockService.validateInterCompanyExpedition(this.picking.id).subscribe({
          next: (p) => {
            this.validating = false;
            this.picking = p;
            this.isReadonly = true;
            this.successMsg = "Exp\xE9dition valid\xE9e \u2014 agence destinataire notifi\xE9e";
            this.loadPicking(p.id);
          },
          error: (e) => {
            this.validating = false;
            this.errorMsg = e.error?.message || "Erreur de validation";
          }
        });
      },
      error: (e) => {
        this.validating = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  cancel() {
    if (!this.picking || !confirm("Annuler cette exp\xE9dition ?"))
      return;
    this.cancelling = true;
    this.stockService.cancelInterCompanyExpedition(this.picking.id).subscribe({
      next: (p) => {
        this.cancelling = false;
        this.picking = p;
        this.isReadonly = true;
      },
      error: (e) => {
        this.cancelling = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  confirmReception() {
    if (!this.picking || !confirm("Confirmer la r\xE9ception ? Le stock sera ajout\xE9 \xE0 cet entrep\xF4t."))
      return;
    this.confirming = true;
    this.errorMsg = "";
    this.warningMsg = "";
    this.stockService.confirmInterCompanyReception(this.picking.id).subscribe({
      next: (p) => {
        this.confirming = false;
        this.picking = p;
        this.isReadonly = true;
        if (p.senderNotifyWarning) {
          this.warningMsg = "R\xE9ception confirm\xE9e localement, mais l'exp\xE9diteur n'a pas pu \xEAtre notifi\xE9 : " + p.senderNotifyWarning;
        } else {
          this.successMsg = "R\xE9ception confirm\xE9e \u2014 stock mis \xE0 jour, exp\xE9diteur notifi\xE9";
        }
        this.loadPicking(p.id);
      },
      error: (e) => {
        this.confirming = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  retryNotifySender() {
    if (!this.picking)
      return;
    this.retryingNotify = true;
    this.errorMsg = "";
    this.stockService.retryNotifySender(this.picking.id).subscribe({
      next: (p) => {
        this.retryingNotify = false;
        this.picking = p;
        if (p.senderNotifyWarning) {
          this.warningMsg = "Toujours impossible de notifier l'exp\xE9diteur : " + p.senderNotifyWarning;
        } else {
          this.warningMsg = "";
          this.successMsg = "Exp\xE9diteur notifi\xE9 avec succ\xE8s";
        }
      },
      error: (e) => {
        this.retryingNotify = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  h(s) {
    if (s == null)
      return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  printBordereau() {
    if (!this.picking)
      return;
    const p = this.picking;
    const ci = this.companyService.getCached();
    const logoDataUrl = this.companyService.getCachedLogoDataUrl();
    const logoUrl = logoDataUrl || `${window.location.origin}${this.companyService.getLogoUrl()}`;
    const agency = this.remoteAgencies.find((a) => a.id === p.remoteAgencyId);
    const agencyName = agency?.name || p.remoteAgencyName || p.partnerName || "\u2014";
    const isRec = this.isIncoming;
    const dateStr = p.scheduledDate ? new Date(p.scheduledDate).toLocaleDateString("fr-FR") : "\u2014";
    const rows = (p.moves || []).map((m) => {
      const qty = m.qtyDone ?? m.qtyDemanded ?? 0;
      const pu = m.priceUnit ?? 0;
      return `<tr>
        <td>${m.productCode ? "[" + this.h(m.productCode) + "] " : ""}${this.h(m.productName || "")}</td>
        <td class="center">${this.h(m.uomName || "")}</td>
        <td class="right">${qty.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</td>
        <td class="right">${pu.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
        <td class="right">${(qty * pu).toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
      </tr>`;
    }).join("");
    const total = (p.moves || []).reduce((s, m) => s + (m.qtyDone ?? m.qtyDemanded ?? 0) * (m.priceUnit ?? 0), 0);
    const stateMap = { draft: "Brouillon", pending_reception: "En attente de r\xE9ception", done: "R\xE9ceptionn\xE9", cancelled: "Annul\xE9" };
    const title = isRec ? "Bordereau de R\xE9ception" : "Bordereau d'Exp\xE9dition";
    const coHeader = `
      <div class="co-header">
        ${logoUrl ? `<img src="${logoUrl}" class="co-logo" alt="logo">` : ""}
        <div class="co-info">
          <div class="co-name">${this.h(ci?.name || "")}</div>
          ${ci?.sigle ? `<div class="co-line">(${this.h(ci.sigle)})</div>` : ""}
          ${ci?.adresse ? `<div class="co-line">${this.h(ci.adresse)}</div>` : ""}
          ${ci?.rccm ? `<div class="co-line"><b>RCCM :</b> ${this.h(ci.rccm)}</div>` : ""}
          ${ci?.nif ? `<div class="co-line"><b>NIF :</b> ${this.h(ci.nif)}</div>` : ""}
          ${ci?.telephone ? `<div class="co-line"><b>T\xE9l :</b> ${this.h(ci.telephone)}</div>` : ""}
          ${ci?.email ? `<div class="co-line"><b>Email :</b> ${this.h(ci.email)}</div>` : ""}
        </div>
      </div>`;
    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
<title>${this.h(title)} ${this.h(p.name)}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;font-size:12px;color:#222;padding:14mm}
.page-header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #017E84;padding-bottom:8px;margin-bottom:14px}
.co-header{display:flex;align-items:flex-start;gap:10px}
.co-logo{max-height:52px;max-width:120px;object-fit:contain}
.co-name{font-size:14px;font-weight:700;color:#017E84}
.co-line{font-size:10px;color:#444;margin-top:2px}
.doc-block{text-align:right}
.doc-title{font-size:18px;font-weight:800;color:#222}
.doc-ref{font-size:11px;font-weight:600;color:#017E84;margin-top:2px}
.state-badge{display:inline-block;padding:2px 10px;border-radius:12px;background:#e0f7fa;color:#017E84;font-weight:bold;font-size:10px;margin-top:4px}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 32px;margin-bottom:14px;border:1px solid #ddd;padding:10px;border-radius:4px}
.info-row label{font-weight:700;display:block;font-size:9px;text-transform:uppercase;color:#888;margin-bottom:1px}
.info-row span{font-size:12px}
table{width:100%;border-collapse:collapse;margin-top:6px}
th{background:#017E84;color:white;padding:6px 8px;text-align:left;font-size:10px}
td{padding:5px 8px;border-bottom:1px solid #eee;font-size:11px}
.right{text-align:right}.center{text-align:center}
tfoot td{font-weight:bold;background:#f5f5f5;border-top:2px solid #017E84}
.signatures{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:36px}
.sig-box{border-top:1px solid #999;padding-top:6px;min-height:50px}
.sig-box label{font-size:9px;font-weight:700;text-transform:uppercase;color:#888}
@media print{body{padding:0}@page{margin:10mm}}
</style>
</head><body>
<div class="page-header">
  ${coHeader}
  <div class="doc-block">
    <div class="doc-title">${this.h(title)}</div>
    <div class="doc-ref">${this.h(p.name)}</div>
    <span class="state-badge">${this.h(stateMap[p.state || ""] || p.state)}</span>
  </div>
</div>
<div class="info-grid">
  <div class="info-row"><label>Agence \xE9mettrice</label><span>${this.h(isRec ? agencyName : p.companyName || "\u2014")}</span></div>
  <div class="info-row"><label>Agence r\xE9ceptrice</label><span>${this.h(isRec ? p.companyName || "\u2014" : agencyName)}</span></div>
  <div class="info-row"><label>Date planifi\xE9e</label><span>${this.h(dateStr)}</span></div>
  <div class="info-row"><label>R\xE9f\xE9rence</label><span>${this.h(p.origin || "\u2014")}</span></div>
  ${p.notes ? `<div class="info-row" style="grid-column:1/-1"><label>Notes</label><span>${this.h(p.notes)}</span></div>` : ""}
</div>
<table>
  <thead><tr><th style="width:38%">Article</th><th class="center">Unit\xE9</th><th class="right">Quantit\xE9</th><th class="right">Prix unit.</th><th class="right">Sous-total</th></tr></thead>
  <tbody>${rows}</tbody>
  <tfoot><tr><td colspan="4" class="right">TOTAL</td><td class="right">${total.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} FCFA</td></tr></tfoot>
</table>
<div class="signatures">
  <div class="sig-box"><label>Signature \xE9metteur</label></div>
  <div class="sig-box"><label>Cachet & signature r\xE9cepteur</label></div>
</div>
<script>window.onload=()=>{window.print()}<\/script>
</body></html>`;
    const w = window.open("", "_blank");
    if (w) {
      w.document.write(html);
      w.document.close();
    }
  }
  // ── Getters état ──────────────────────────────────────────────────────────
  /** Vrai si ce picking est une réception entrante (créée par un spoke émetteur distant) */
  get isIncoming() {
    return !!this.picking?.transferReception;
  }
  get isDraft() {
    return !this.picking || this.picking.state === "draft";
  }
  get isDone() {
    return this.picking?.state === "done";
  }
  get isCancelled() {
    return this.picking?.state === "cancelled";
  }
  get isPendingReception() {
    return this.picking?.state === "pending_reception";
  }
  get lineTotal() {
    return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0);
  }
  productName(id) {
    return this.products.find((p) => p.id === Number(id))?.name || "";
  }
  stateLabel(s) {
    return { draft: "Brouillon", pending_reception: "En attente de r\xE9ception", done: "R\xE9ceptionn\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function LivraisonDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LivraisonDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CompanyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivraisonDetailComponent, selectors: [["app-livraison-detail"]], viewQuery: function LivraisonDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.productInputs = _t);
      }
    }, decls: 26, vars: 14, consts: [["productInput", ""], [1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "page-title"], [1, "state-badge"], [1, "header-actions"], [1, "btn-secondary", 3, "disabled"], [1, "btn-validate", 3, "disabled"], [1, "btn-cancel-picking", 3, "disabled"], [1, "btn-secondary"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "alert", "alert-warning"], [1, "info-banner", "info-banner-reception"], [1, "info-banner"], [1, "loading"], [1, "incoming-tag"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-validate", 3, "click", "disabled"], [1, "btn-cancel-picking", 3, "click", "disabled"], [1, "btn-secondary", 3, "click"], [1, "alert-close", 3, "click"], [1, "btn-retry", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "form-layout"], [1, "form-main"], [1, "card"], [1, "card-header"], [1, "btn-add-line"], [1, "lines-container"], [1, "empty-lines"], [1, "lines-table"], [1, "info-card"], [1, "form-side"], [1, "card-body"], [1, "card", 2, "margin-top", "12px"], [1, "form-group"], [1, "form-value"], ["type", "date", 1, "form-control", 3, "ngModel"], ["type", "text", "placeholder", "BC-001, etc.", 1, "form-control", 3, "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModel"], [1, "btn-add-line", 3, "click"], [2, "width", "36%"], [1, "th-dispo"], [1, "text-right"], [2, "width", "36px"], [1, "font-bold"], [1, "ac-wrap"], [1, "td-dispo"], ["type", "number", "min", "0.01", "step", "0.01", 1, "line-input", "text-right", 3, "ngModel"], [1, "text-right", "font-bold"], [1, "ac-field"], [1, "material-icons", "ac-icon"], ["type", "text", "placeholder", "Chercher un article\u2026", "autocomplete", "off", 1, "line-select", 3, "ngModelChange", "input", "focus", "blur", "keydown.enter", "ngModel"], [1, "ac-dropdown"], [1, "ac-item"], [1, "ac-item", 3, "mousedown"], [1, "ac-code"], [1, "ac-name"], [1, "ac-qty"], ["type", "number", "min", "0.01", "step", "0.01", 1, "line-input", "text-right", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn-remove-line", 3, "click"], [1, "total-label"], [1, "text-right", "total-value"], [1, "info-title"], [1, "info-body"], [1, "form-value", "loc-value"], [1, "required"], [1, "transfer-arrow"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "hint"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "BC-001, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "createdBy", "createdAt", "updatedBy", "updatedAt"], ["entityType", "STOCK_PICKING", 3, "entityId"]], template: function LivraisonDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
        \u0275\u0275listener("click", function LivraisonDetailComponent_Template_button_click_3_listener() {
          return ctx.router.navigate(["/stock/expeditions"]);
        });
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h1", 6)(8, "span", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, LivraisonDetailComponent_Conditional_10_Template, 1, 0)(11, LivraisonDetailComponent_Conditional_11_Template, 2, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, LivraisonDetailComponent_Conditional_12_Template, 2, 2, "span", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275conditionalCreate(14, LivraisonDetailComponent_Conditional_14_Template, 4, 2, "button", 9);
        \u0275\u0275conditionalCreate(15, LivraisonDetailComponent_Conditional_15_Template, 7, 3);
        \u0275\u0275conditionalCreate(16, LivraisonDetailComponent_Conditional_16_Template, 4, 2, "button", 10);
        \u0275\u0275conditionalCreate(17, LivraisonDetailComponent_Conditional_17_Template, 4, 1, "button", 11);
        \u0275\u0275conditionalCreate(18, LivraisonDetailComponent_Conditional_18_Template, 4, 0, "button", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(19, LivraisonDetailComponent_Conditional_19_Template, 7, 1, "div", 13);
        \u0275\u0275conditionalCreate(20, LivraisonDetailComponent_Conditional_20_Template, 4, 1, "div", 14);
        \u0275\u0275conditionalCreate(21, LivraisonDetailComponent_Conditional_21_Template, 8, 4, "div", 15);
        \u0275\u0275conditionalCreate(22, LivraisonDetailComponent_Conditional_22_Template, 10, 1, "div", 16);
        \u0275\u0275conditionalCreate(23, LivraisonDetailComponent_Conditional_23_Template, 7, 1, "div", 17);
        \u0275\u0275conditionalCreate(24, LivraisonDetailComponent_Conditional_24_Template, 5, 0, "div", 18)(25, LivraisonDetailComponent_Conditional_25_Template, 43, 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.isIncoming ? "move_to_inbox" : "swap_horiz");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isNew ? 10 : ctx.picking ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isNew && ctx.picking ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isReadonly && !ctx.isIncoming ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isReadonly && !ctx.isIncoming && !ctx.isNew ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPendingReception && ctx.isIncoming ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPendingReception && !ctx.isIncoming ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.isPendingReception || ctx.isDone) && !ctx.isNew && ctx.picking ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.warningMsg ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPendingReception && ctx.isIncoming && ctx.picking ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPendingReception && !ctx.isIncoming && ctx.picking ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 24 : 25);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, AuditFooterComponent, AuditTrailComponent, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--bg-surface);\n  color: var(--danger);\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--danger-bg);\n}\n.btn-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.incoming-tag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  background: #d1edff;\n  color: #0a5ea8;\n  border-radius: 10px;\n  padding: 2px 8px;\n  margin-left: 8px;\n  font-weight: 600;\n}\n.alert-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-left: auto;\n  padding: 0;\n  color: inherit;\n  display: flex;\n}\n.alert-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=pending_reception][_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-validate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-validate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-cancel-picking[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: var(--bg-surface);\n  color: var(--danger);\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-picking[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-cancel-picking[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.btn-cancel-picking[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid var(--warning-bg);\n  justify-content: space-between;\n}\n.alert.alert-warning[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  background: var(--warning);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.alert.alert-warning[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert.alert-warning[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #e0f2f1;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #004d40;\n  border: 1px solid #b2dfdb;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--accent);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 310px;\n  gap: 16px;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: visible;\n  margin-bottom: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  border-radius: 8px 8px 0 0;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.lines-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  text-align: right;\n}\n.line-select[_ngcontent-%COMP%], \n.line-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.line-select[_ngcontent-%COMP%]:focus, \n.line-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.line-select.text-right[_ngcontent-%COMP%], \n.line-input.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.qty-ok[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n  font-size: 12px;\n}\n.th-dispo[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 90px;\n}\n.td-dispo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.transfer-arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 6px 0;\n  color: var(--text-muted);\n}\n.transfer-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 18px;\n  background: var(--success-bg);\n  border: 1px solid #86efac;\n  border-radius: 8px;\n  margin-top: 12px;\n}\n.info-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 26px;\n  margin-top: 2px;\n}\n.info-card[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 600;\n  color: var(--success);\n  font-size: 13px;\n}\n.info-card[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n  padding: 4px 0;\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  font-size: 15px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap[_ngcontent-%COMP%]:focus-within   .ac-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.ac-field[_ngcontent-%COMP%]   .line-select[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.ac-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  z-index: 1050;\n  min-width: max(100%, 420px);\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 340px;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_acDrop 0.12s ease-out;\n}\n@keyframes _ngcontent-%COMP%_acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ac-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-left-color: var(--accent);\n}\n.ac-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--accent);\n  background: rgba(1, 126, 132, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ac-qty[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n}\n.ac-qty.qty-low[_ngcontent-%COMP%] {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n/*# sourceMappingURL=livraison-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivraisonDetailComponent, [{
    type: Component,
    args: [{ selector: "app-livraison-detail", standalone: true, imports: [CommonModule, FormsModule, AuditFooterComponent, AuditTrailComponent], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <button class="btn-back" (click)="router.navigate(['/stock/expeditions'])">
        <span class="material-icons">arrow_back</span>
      </button>
      <div>
        <h1 class="page-title">
          <span class="material-icons">{{ isIncoming ? 'move_to_inbox' : 'swap_horiz' }}</span>
          @if (isNew) { Nouvelle exp\xE9dition inter-agences }
          @else if (picking) {
            {{ picking.name }}
            @if (isIncoming) { <span class="incoming-tag">R\xE9ception entrante</span> }
          }
        </h1>
        @if (!isNew && picking) {
          <span class="state-badge" [attr.data-state]="picking.state">{{ stateLabel(picking.state || '') }}</span>
        }
      </div>
    </div>
    <div class="header-actions">
      <!-- Boutons \xC9METTEUR (brouillon) -->
      @if (!isReadonly && !isIncoming) {
        <button class="btn-secondary" [disabled]="saving || validating" (click)="save()">
          <span class="material-icons">save</span> {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
        </button>
      }
      @if (!isReadonly && !isIncoming && !isNew) {
        <button class="btn-validate" [disabled]="validating || saving" (click)="validate()">
          <span class="material-icons">local_shipping</span>
          {{ validating ? 'Envoi...' : "Envoyer l'exp\xE9dition" }}
        </button>
        <button class="btn-cancel-picking" [disabled]="cancelling" (click)="cancel()">
          <span class="material-icons">cancel</span>
        </button>
      }
      <!-- Bouton R\xC9CEPTEUR -->
      @if (isPendingReception && isIncoming) {
        <button class="btn-validate" [disabled]="confirming" (click)="confirmReception()">
          <span class="material-icons">check_circle</span>
          {{ confirming ? 'Confirmation...' : 'Confirmer la r\xE9ception' }}
        </button>
      }
      <!-- Annuler c\xF4t\xE9 \xE9metteur en attente -->
      @if (isPendingReception && !isIncoming) {
        <button class="btn-cancel-picking" [disabled]="cancelling" (click)="cancel()">
          <span class="material-icons">cancel</span> Annuler
        </button>
      }
      @if ((isPendingReception || isDone) && !isNew && picking) {
        <button class="btn-secondary" (click)="printBordereau()">
          <span class="material-icons">print</span> Imprimer
        </button>
      }
    </div>
  </div>

  @if (errorMsg) {
    <div class="alert alert-danger">
      <span class="material-icons">error</span> {{ errorMsg }}
      <button class="alert-close" (click)="errorMsg = ''"><span class="material-icons">close</span></button>
    </div>
  }
  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (warningMsg) {
    <div class="alert alert-warning">
      <span class="material-icons">warning</span> {{ warningMsg }}
      <button class="btn-retry" [disabled]="retryingNotify" (click)="retryNotifySender()">
        <span class="material-icons">{{ retryingNotify ? 'hourglass_empty' : 'refresh' }}</span>
        {{ retryingNotify ? 'Nouvel essai...' : 'R\xE9essayer' }}
      </button>
    </div>
  }

  <!-- Banni\xE8re r\xE9ception en attente -->
  @if (isPendingReception && isIncoming && picking) {
    <div class="info-banner info-banner-reception">
      <span class="material-icons">move_to_inbox</span>
      <div>
        <strong>R\xE9ception \xE0 confirmer</strong> \u2014 exp\xE9dition de
        <strong>{{ picking.partnerName || '\u2014' }}</strong>.
        V\xE9rifiez les quantit\xE9s et confirmez pour mettre \xE0 jour votre stock.
      </div>
    </div>
  }
  @if (isPendingReception && !isIncoming && picking) {
    <div class="info-banner">
      <span class="material-icons">hourglass_empty</span>
      Stock sorti. En attente de r\xE9ception par <strong>{{ picking.remoteAgencyName || picking.partnerName }}</strong>.
    </div>
  }

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
  } @else {
    <div class="form-layout">

      <!-- ===== LIGNES ===== -->
      <div class="form-main">
        <div class="card">
          <div class="card-header">
            <span>{{ isIncoming ? 'Articles re\xE7us' : 'Articles \xE0 exp\xE9dier' }}</span>
            @if (!isReadonly && !isIncoming) {
              <button class="btn-add-line" (click)="addLine()">
                <span class="material-icons">add</span> Ajouter
              </button>
            }
          </div>
          <div class="lines-container">
            @if (lines.length === 0) {
              <div class="empty-lines">Aucun article</div>
            }
            <table class="lines-table" [class.has-lines]="lines.length > 0">
              @if (lines.length > 0) {
                <thead><tr>
                  <th style="width:36%">Article</th>
                  <th>Unit\xE9</th>
                  @if (!isReadonly && !isIncoming) {
                    <th class="th-dispo">Dispo</th>
                  }
                  <th class="text-right">{{ (isReadonly || isIncoming) ? 'Quantit\xE9' : 'Qt\xE9 \xE0 envoyer' }}</th>
                  <th class="text-right">CMUP</th>
                  <th class="text-right">Valeur</th>
                  @if (!isReadonly && !isIncoming) { <th style="width:36px"></th> }
                </tr></thead>
              }
              <tbody>
                @for (line of lines; track $index; let i = $index) {
                  <tr>
                    <td>
                      @if (isReadonly || isIncoming) {
                        <span class="font-bold">{{ productName(line.productId) }}</span>
                      } @else {
                        <div class="ac-wrap">
                          <div class="ac-field">
                            <span class="material-icons ac-icon">search</span>
                            <input type="text" class="line-select"
                                   #productInput
                                   [(ngModel)]="lineSearchTexts[i]"
                                   (input)="openDropdownIndex = i"
                                   (focus)="openDropdownIndex = i"
                                   (blur)="onLineBlur(i)"
                                   (keydown.enter)="onProductEnter(i, $event)"
                                   placeholder="Chercher un article\u2026"
                                   autocomplete="off" />
                          </div>
                          @if (openDropdownIndex === i && lineFilteredProducts(i).length > 0) {
                            <div class="ac-dropdown">
                              @for (p of lineFilteredProducts(i); track p.id) {
                                <div class="ac-item" (mousedown)="selectLineProduct(i, p)">
                                  @if (p.defaultCode) { <span class="ac-code">{{ p.defaultCode }}</span> }
                                  <span class="ac-name">{{ p.name }}</span>
                                  <span class="ac-qty" [class.qty-low]="(p.qtyOnHand ?? 0) <= 0">{{ (p.qtyOnHand ?? 0) | number:'1.0-0' }}</span>
                                </div>
                              }
                            </div>
                          }
                        </div>
                      }
                    </td>
                    <td>{{ line.uomName || '\u2014' }}</td>
                    @if (!isReadonly && !isIncoming) {
                      <td class="td-dispo">
                        <span [class]="line.availableQty < line.qtyDone ? 'qty-warn' : 'qty-ok'">
                          {{ line.availableQty | number:'1.0-2' }}
                        </span>
                      </td>
                    }
                    <td class="text-right">
                      @if (isReadonly || isIncoming) {
                        <span class="font-bold">{{ line.qtyDone | number:'1.0-2' }}</span>
                      } @else {
                        <input type="number" class="line-input text-right"
                               [(ngModel)]="line.qtyDone" min="0.01" step="0.01"
                               (ngModelChange)="line.qtyDemanded = line.qtyDone"
                               (keydown.enter)="onLineEnter()">
                      }
                    </td>
                    <td class="text-right">{{ line.priceUnit | number:'1.0-0' }}</td>
                    <td class="text-right font-bold">{{ line.qtyDone * line.priceUnit | number:'1.0-0' }}</td>
                    @if (!isReadonly && !isIncoming) {
                      <td><button class="btn-remove-line" (click)="removeLine(i)">
                        <span class="material-icons">delete</span>
                      </button></td>
                    }
                  </tr>
                }
              </tbody>
              @if (lines.length > 0) {
                <tfoot><tr>
                  <td [attr.colspan]="(isReadonly || isIncoming) ? 3 : 5" class="total-label">VALEUR TOTALE</td>
                  <td class="text-right total-value">{{ lineTotal | number:'1.0-0' }} FCFA</td>
                  @if (!isReadonly && !isIncoming) { <td></td> }
                </tr></tfoot>
              }
            </table>
          </div>
        </div>

        @if (isDone && picking) {
          <div class="info-card">
            <span class="material-icons">check_circle</span>
            <div>
              <p class="info-title">{{ isIncoming ? 'R\xE9ception confirm\xE9e' : 'Exp\xE9dition valid\xE9e' }}</p>
              <p class="info-body">
                @if (isIncoming) {
                  Stock re\xE7u de <strong>{{ picking.partnerName }}</strong>
                  et ajout\xE9 \xE0 <strong>{{ picking.locationDestName }}</strong>.
                } @else {
                  Stock sorti de <strong>{{ picking.sourceWarehouseName || picking.locationName }}</strong>
                  vers <strong>{{ picking.remoteAgencyName || picking.partnerName }}</strong>.
                }
              </p>
            </div>
          </div>
        }
      </div>

      <!-- ===== PANNEAU LAT\xC9RAL ===== -->
      <div class="form-side">
        <div class="card">
          <div class="card-header">
            {{ isIncoming ? 'Exp\xE9dition re\xE7ue de' : 'Agences & Emplacements' }}
          </div>
          <div class="card-body">

            @if (isIncoming) {
              <!-- \u2500\u2500 VUE R\xC9CEPTION \u2500\u2500 -->
              <div class="form-group">
                <label>Agence \xE9mettrice</label>
                <div class="form-value">{{ picking?.partnerName || '\u2014' }}</div>
              </div>
              <div class="form-group">
                <label>R\xE9f\xE9rence exp\xE9dition</label>
                <div class="form-value">{{ picking?.origin || '\u2014' }}</div>
              </div>
              <div class="form-group">
                <label>Entrep\xF4t de r\xE9ception</label>
                <div class="form-value loc-value">
                  <span class="material-icons">warehouse</span>
                  {{ picking?.locationDestName || '\u2014' }}
                </div>
              </div>

            } @else {
              <!-- \u2500\u2500 VUE \xC9MISSION \u2500\u2500 -->
              <div class="form-group">
                <label>Agence \xE9mettrice</label>
                <div class="form-value">{{ picking?.companyName || '\u2014' }}</div>
              </div>
              <div class="form-group">
                <label>Entrep\xF4t source <span class="required">*</span></label>
                @if (isReadonly) {
                  <div class="form-value loc-value">
                    <span class="material-icons">warehouse</span>
                    {{ picking?.sourceWarehouseName || selectedWarehouse?.name || picking?.locationName || '\u2014' }}
                  </div>
                } @else {
                  <select class="form-control" [(ngModel)]="selectedWarehouseId" (ngModelChange)="onWarehouseChange()">
                    @for (w of warehouses; track w.id) {
                      <option [ngValue]="w.id">{{ w.name }}{{ w.code ? ' [' + w.code + ']' : '' }}</option>
                    }
                  </select>
                  @if (warehouses.length === 0) {
                    <small class="hint">Aucun entrep\xF4t disponible</small>
                  }
                }
              </div>

              <div class="transfer-arrow"><span class="material-icons">south</span></div>

              <div class="form-group">
                <label>Agence distante destinataire <span class="required">*</span></label>
                @if (isReadonly) {
                  <div class="form-value">{{ picking?.remoteAgencyName || picking?.partnerName || '\u2014' }}</div>
                } @else {
                  <select class="form-control" [(ngModel)]="selectedRemoteAgencyId">
                    <option [ngValue]="null">\u2014 S\xE9lectionner \u2014</option>
                    @for (a of remoteAgencies; track a.id) {
                      <option [ngValue]="a.id">{{ a.name }} ({{ a.location || a.host }})</option>
                    }
                  </select>
                  @if (remoteAgencies.length === 0) {
                    <small class="hint">Aucune agence distante configur\xE9e</small>
                  }
                }
              </div>

              <div class="form-group">
                <label>Emplacement de sortie <span class="required">*</span></label>
                @if (isReadonly) {
                  <div class="form-value loc-value">
                    <span class="material-icons">place</span>
                    {{ picking?.locationDestName || '\u2014' }}
                  </div>
                } @else {
                  <select class="form-control" [(ngModel)]="selectedDestLocationId">
                    <option [ngValue]="null">\u2014 S\xE9lectionner \u2014</option>
                    @for (w of warehouses; track w.id) {
                      <option [ngValue]="w.stockLocationId">{{ w.name }} / Stock</option>
                    }
                  </select>
                  <small class="hint">Emplacement depuis lequel les marchandises partent</small>
                }
              </div>
            }

          </div>
        </div>

        <div class="card" style="margin-top: 12px">
          <div class="card-header">D\xE9tails</div>
          <div class="card-body">
            <div class="form-group">
              <label>Date planifi\xE9e</label>
              @if (isReadonly || isIncoming) {
                <div class="form-value">{{ scheduledDate | date:'dd/MM/yyyy' }}</div>
              } @else {
                <input type="date" class="form-control" [(ngModel)]="scheduledDate">
              }
            </div>
            <div class="form-group">
              <label>R\xE9f\xE9rence / Origine</label>
              @if (isReadonly || isIncoming) {
                <div class="form-value">{{ origin || '\u2014' }}</div>
              } @else {
                <input type="text" class="form-control" [(ngModel)]="origin" placeholder="BC-001, etc.">
              }
            </div>
            <div class="form-group">
              <label>Notes</label>
              @if (isReadonly || isIncoming) {
                <div class="form-value">{{ notes || '\u2014' }}</div>
              } @else {
                <textarea class="form-control" [(ngModel)]="notes" rows="3"></textarea>
              }
            </div>
          </div>
        </div>
      </div>
    </div>

    @if (picking) {
      <app-audit-footer
        [createdBy]="picking.createdBy"
        [createdAt]="picking.createdAt"
        [updatedBy]="picking.updatedBy"
        [updatedAt]="picking.updatedAt">
      </app-audit-footer>

      <app-audit-trail entityType="STOCK_PICKING" [entityId]="picking.id ?? null"></app-audit-trail>
    }
  }
</div>
`, styles: ['/* src/app/modules/stock/components/livraisons/livraison-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--bg-surface);\n  color: var(--danger);\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-danger .material-icons {\n  font-size: 16px;\n}\n.btn-danger:hover:not(:disabled) {\n  background: var(--danger-bg);\n}\n.btn-danger:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.incoming-tag {\n  font-size: 0.7rem;\n  background: #d1edff;\n  color: #0a5ea8;\n  border-radius: 10px;\n  padding: 2px 8px;\n  margin-left: 8px;\n  font-weight: 600;\n}\n.alert-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-left: auto;\n  padding: 0;\n  color: inherit;\n  display: flex;\n}\n.alert-close .material-icons {\n  font-size: 16px;\n}\n.required {\n  color: var(--danger);\n}\n.btn-back {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n}\n.btn-back:hover {\n  background: var(--bg-hover);\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.state-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=pending_reception] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.state-badge[data-state=done] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.state-badge[data-state=cancelled] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary .material-icons {\n  font-size: 16px;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-validate .material-icons {\n  font-size: 16px;\n}\n.btn-validate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-cancel-picking {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: var(--bg-surface);\n  color: var(--danger);\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-picking .material-icons {\n  font-size: 18px;\n}\n.btn-cancel-picking:hover {\n  background: var(--danger-bg);\n}\n.btn-cancel-picking:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid var(--warning-bg);\n  justify-content: space-between;\n}\n.alert.alert-warning .btn-retry {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  background: var(--warning);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.alert.alert-warning .btn-retry .material-icons {\n  font-size: 16px;\n}\n.alert.alert-warning .btn-retry:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #e0f2f1;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #004d40;\n  border: 1px solid #b2dfdb;\n}\n.info-banner .material-icons {\n  font-size: 18px;\n  color: var(--accent);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout {\n  display: grid;\n  grid-template-columns: 1fr 310px;\n  gap: 16px;\n  align-items: start;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: visible;\n  margin-bottom: 12px;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  border-radius: 8px 8px 0 0;\n}\n.card .card-body {\n  padding: 16px 18px;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: var(--accent);\n}\n.lines-container {\n  padding: 0;\n}\n.empty-lines {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines thead th {\n  padding: 9px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.lines-table td {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table tfoot td {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: var(--bg-hover);\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.text-right {\n  text-align: right;\n}\n.font-bold {\n  font-weight: 600;\n}\n.total-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.total-value {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  text-align: right;\n}\n.line-select,\n.line-input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.line-select:focus,\n.line-input:focus {\n  border-color: var(--accent);\n}\n.line-select.text-right,\n.line-input.text-right {\n  text-align: right;\n}\n.btn-remove-line {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.qty-ok {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn {\n  color: var(--danger);\n  font-weight: 600;\n  font-size: 12px;\n}\n.th-dispo {\n  text-align: right;\n  width: 90px;\n}\n.td-dispo {\n  text-align: right;\n}\n.transfer-arrow {\n  text-align: center;\n  padding: 6px 0;\n  color: var(--text-muted);\n}\n.transfer-arrow .material-icons {\n  font-size: 20px;\n}\n.hint {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.info-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 18px;\n  background: var(--success-bg);\n  border: 1px solid #86efac;\n  border-radius: 8px;\n  margin-top: 12px;\n}\n.info-card .material-icons {\n  color: #16a34a;\n  font-size: 26px;\n  margin-top: 2px;\n}\n.info-card .info-title {\n  margin: 0 0 4px;\n  font-weight: 600;\n  color: var(--success);\n  font-size: 13px;\n}\n.info-card .info-body {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: var(--accent);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-value {\n  font-size: 13px;\n  color: var(--text-primary);\n  padding: 4px 0;\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-field {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon {\n  position: absolute;\n  left: 8px;\n  font-size: 15px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap:focus-within .ac-icon {\n  color: var(--accent);\n}\n.ac-field .line-select {\n  padding-left: 30px;\n}\n.ac-dropdown {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  z-index: 1050;\n  min-width: max(100%, 420px);\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 340px;\n  overflow-y: auto;\n  animation: acDrop 0.12s ease-out;\n}\n@keyframes acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item:last-child {\n  border-bottom: none;\n}\n.ac-item:hover {\n  background: var(--bg-hover);\n  border-left-color: var(--accent);\n}\n.ac-name {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--accent);\n  background: rgba(1, 126, 132, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ac-qty {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n}\n.ac-qty.qty-low {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n/*# sourceMappingURL=livraison-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StockService }, { type: ConfigService }, { type: AuthService }, { type: CompanyService }], { productInputs: [{
    type: ViewChildren,
    args: ["productInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivraisonDetailComponent, { className: "LivraisonDetailComponent", filePath: "app/modules/stock/components/livraisons/livraison-detail.component.ts", lineNumber: 21 });
})();
export {
  LivraisonDetailComponent
};
//# sourceMappingURL=chunk-6W6SYWT2.js.map
