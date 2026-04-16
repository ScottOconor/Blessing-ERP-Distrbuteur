import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  SalesService
} from "./chunk-C6CRDXMM.js";
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
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/shared/services/precompte.service.ts
var PrecompteService = class _PrecompteService {
  constructor(http) {
    this.http = http;
    this.basePrecompte = `http://${window.location.hostname}:8085/api/precomptes`;
    this.baseEnlevement = `http://${window.location.hostname}:8085/api/enlevements`;
  }
  // ===== Précomptes =====
  getAllPrecomptes(companyId) {
    return this.http.get(this.basePrecompte, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getPrecomptesByPartner(partnerId, companyId) {
    return this.http.get(`${this.basePrecompte}/partner/${partnerId}`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  savePrecompte(dto) {
    return this.http.post(this.basePrecompte, dto);
  }
  deletePrecompte(id) {
    return this.http.delete(`${this.basePrecompte}/${id}`);
  }
  // ===== Enlèvements =====
  getAllEnlevements(companyId) {
    return this.http.get(this.baseEnlevement, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  saveEnlevement(dto) {
    return this.http.post(this.baseEnlevement, dto);
  }
  deleteEnlevement(id) {
    return this.http.delete(`${this.baseEnlevement}/${id}`);
  }
  static {
    this.\u0275fac = function PrecompteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrecompteService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PrecompteService, factory: _PrecompteService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrecompteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/sales/components/precomptes/precompte-config.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function PrecompteConfigComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewPc());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau pr\xE9compte");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewEnl());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau frais enl\xE8vement");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 17);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 10);
    \u0275\u0275text(2, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun pr\xE9compte configur\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_22_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewPc());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Ajouter");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_22_Conditional_3_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 22)(9, "button", 23);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_22_Conditional_3_For_12_Template_button_click_9_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editPc(p_r6));
    });
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 24);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_22_Conditional_3_For_12_Template_button_click_12_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePc(p_r6.id));
    });
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-sale", p_r6.typePrecompte === "sale")("badge-purchase", p_r6.typePrecompte === "purchase");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(p_r6.typePrecompte));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r6.tauxPrecompte, "%");
  }
}
function PrecompteConfigComponent_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 16)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 18);
    \u0275\u0275text(8, "Taux (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, PrecompteConfigComponent_Conditional_22_Conditional_3_For_12_Template, 15, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.precomptes);
  }
}
function PrecompteConfigComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, PrecompteConfigComponent_Conditional_22_Conditional_1_Template, 5, 0, "div", 14)(2, PrecompteConfigComponent_Conditional_22_Conditional_2_Template, 9, 0, "div", 15)(3, PrecompteConfigComponent_Conditional_22_Conditional_3_Template, 13, 0, "table", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingPc ? 1 : ctx_r1.precomptes.length === 0 ? 2 : 3);
  }
}
function PrecompteConfigComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 17);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 10);
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun frais d'enl\xE8vement configur\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_23_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewEnl());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Ajouter");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", e_r9.clients.length, " tarif(s) sp\xE9cifique(s)");
  }
}
function PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Tarif g\xE9n\xE9ral");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Conditional_7_Template, 2, 1, "span", 26)(8, PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Conditional_8_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 22)(10, "button", 23);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Template_button_click_10_listener() {
      const e_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editEnl(e_r9));
    });
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 24);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Template_button_click_13_listener() {
      const e_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteEnl(e_r9.id));
    });
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const e_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r9.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, e_r9.montantFixe, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(e_r9.clients && e_r9.clients.length > 0 ? 7 : 8);
  }
}
function PrecompteConfigComponent_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 16)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 18);
    \u0275\u0275text(6, "Montant fixe (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Tarifs sp\xE9ciaux clients");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, PrecompteConfigComponent_Conditional_23_Conditional_3_For_12_Template, 16, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.enlevements);
  }
}
function PrecompteConfigComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, PrecompteConfigComponent_Conditional_23_Conditional_1_Template, 5, 0, "div", 14)(2, PrecompteConfigComponent_Conditional_23_Conditional_2_Template, 9, 0, "div", 15)(3, PrecompteConfigComponent_Conditional_23_Conditional_3_Template, 13, 0, "table", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingEnl ? 1 : ctx_r1.enlevements.length === 0 ? 2 : 3);
  }
}
function PrecompteConfigComponent_Conditional_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pcError);
  }
}
function PrecompteConfigComponent_Conditional_24_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("value", c_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r11.name);
  }
}
function PrecompteConfigComponent_Conditional_24_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    \u0275\u0275property("value", t_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r12.label);
  }
}
function PrecompteConfigComponent_Conditional_24_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r13 = ctx.$implicit;
    \u0275\u0275property("value", t_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r13, "%");
  }
}
function PrecompteConfigComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click.self", function PrecompteConfigComponent_Conditional_24_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPcModal = false);
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30)(3, "span", 10);
    \u0275\u0275text(4, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPcModal = false);
    });
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PrecompteConfigComponent_Conditional_24_Conditional_10_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(11, "div", 33)(12, "div", 34)(13, "div", 35)(14, "label");
    \u0275\u0275text(15, "Partenaire ");
    \u0275\u0275elementStart(16, "span", 36);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_24_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pcForm.partnerId, $event) || (ctx_r1.pcForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 38);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, PrecompteConfigComponent_Conditional_24_For_22_Template, 2, 2, "option", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 39)(24, "label");
    \u0275\u0275text(25, "Type ");
    \u0275\u0275elementStart(26, "span", 36);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_24_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pcForm.typePrecompte, $event) || (ctx_r1.pcForm.typePrecompte = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(29, PrecompteConfigComponent_Conditional_24_For_30_Template, 2, 2, "option", 38, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 39)(32, "label");
    \u0275\u0275text(33, "Taux (%) ");
    \u0275\u0275elementStart(34, "span", 36);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_24_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pcForm.tauxPrecompte, $event) || (ctx_r1.pcForm.tauxPrecompte = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(37, PrecompteConfigComponent_Conditional_24_For_38_Template, 2, 2, "option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 40)(40, "button", 41);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_24_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPcModal = false);
    });
    \u0275\u0275text(41, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 42);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_24_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePc());
    });
    \u0275\u0275elementStart(43, "span", 10);
    \u0275\u0275text(44, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingPc ? "Modifier pr\xE9compte" : "Nouveau pr\xE9compte");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.pcError ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pcForm.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clients);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pcForm.typePrecompte);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.TYPE_OPTS);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pcForm.tauxPrecompte);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.TAUX_OPTS);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingPc);
  }
}
function PrecompteConfigComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.enlError);
  }
}
function PrecompteConfigComponent_Conditional_25_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r15 = ctx.$implicit;
    \u0275\u0275property("value", cat_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r15.name);
  }
}
function PrecompteConfigComponent_Conditional_25_Conditional_39_For_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("value", c_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18.name);
  }
}
function PrecompteConfigComponent_Conditional_25_Conditional_39_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_25_Conditional_39_For_10_Template_select_ngModelChange_2_listener($event) {
      const ec_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(ec_r17.partnerId, $event) || (ec_r17.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 38);
    \u0275\u0275text(4, "-- Client --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, PrecompteConfigComponent_Conditional_25_Conditional_39_For_10_For_6_Template, 2, 2, "option", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 51)(8, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_25_Conditional_39_For_10_Template_input_ngModelChange_8_listener($event) {
      const ec_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(ec_r17.montant, $event) || (ec_r17.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "button", 54);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_25_Conditional_39_For_10_Template_button_click_10_listener() {
      const \u0275$index_374_r19 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeEnlClient(\u0275$index_374_r19));
    });
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ec_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ec_r17.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clients);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ec_r17.montant);
  }
}
function PrecompteConfigComponent_Conditional_25_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 49)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 51);
    \u0275\u0275text(6, "Montant sp\xE9cifique (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, PrecompteConfigComponent_Conditional_25_Conditional_39_For_10_Template, 13, 3, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.enlForm.clients);
  }
}
function PrecompteConfigComponent_Conditional_25_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1, "Aucun tarif sp\xE9cifique \u2014 le montant fixe s'applique \xE0 tous les clients.");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click.self", function PrecompteConfigComponent_Conditional_25_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEnlModal = false);
    });
    \u0275\u0275elementStart(1, "div", 43)(2, "div", 30)(3, "span", 10);
    \u0275\u0275text(4, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEnlModal = false);
    });
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PrecompteConfigComponent_Conditional_25_Conditional_10_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(11, "div", 33)(12, "div", 34)(13, "div", 39)(14, "label");
    \u0275\u0275text(15, "Cat\xE9gorie de produit ");
    \u0275\u0275elementStart(16, "span", 36);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_25_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.enlForm.categoryId, $event) || (ctx_r1.enlForm.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 38);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, PrecompteConfigComponent_Conditional_25_For_22_Template, 2, 2, "option", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 39)(24, "label");
    \u0275\u0275text(25, "Montant fixe / unit\xE9 (FCFA) ");
    \u0275\u0275elementStart(26, "span", 36);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_25_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.enlForm.montantFixe, $event) || (ctx_r1.enlForm.montantFixe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 45)(30, "span");
    \u0275\u0275text(31, "Tarifs sp\xE9ciaux par client (facultatif)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 46)(33, "span", 47);
    \u0275\u0275text(34, "Tarifs par client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 48);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_25_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEnlClient());
    });
    \u0275\u0275elementStart(36, "span", 10);
    \u0275\u0275text(37, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Ajouter client");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(39, PrecompteConfigComponent_Conditional_25_Conditional_39_Template, 11, 0, "table", 49)(40, PrecompteConfigComponent_Conditional_25_Conditional_40_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 40)(42, "button", 41);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_25_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEnlModal = false);
    });
    \u0275\u0275text(43, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 42);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_25_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEnl());
    });
    \u0275\u0275elementStart(45, "span", 10);
    \u0275\u0275text(46, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingEnl ? "Modifier enl\xE8vement" : "Nouveau frais d'enl\xE8vement");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.enlError ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.enlForm.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.enlForm.montantFixe);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.enlForm.clients && ctx_r1.enlForm.clients.length > 0 ? 39 : 40);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingEnl);
  }
}
var PrecompteConfigComponent = class _PrecompteConfigComponent {
  constructor(svc, salesSvc, stockSvc, auth) {
    this.svc = svc;
    this.salesSvc = salesSvc;
    this.stockSvc = stockSvc;
    this.auth = auth;
    this.activeTab = "precomptes";
    this.precomptes = [];
    this.clients = [];
    this.loadingPc = false;
    this.showPcModal = false;
    this.editingPc = null;
    this.savingPc = false;
    this.pcForm = this.emptyPc();
    this.pcError = "";
    this.TAUX_OPTS = [1, 2, 2.5, 5, 10];
    this.TYPE_OPTS = [
      { value: "sale", label: "Ventes" },
      { value: "purchase", label: "Achats" }
    ];
    this.enlevements = [];
    this.categories = [];
    this.loadingEnl = false;
    this.showEnlModal = false;
    this.editingEnl = null;
    this.savingEnl = false;
    this.enlForm = this.emptyEnl();
    this.enlError = "";
  }
  ngOnInit() {
    this.loadAll();
  }
  get companyId() {
    return this.auth.getCurrentUser()?.companyId ?? 1;
  }
  loadAll() {
    this.salesSvc.getClients(this.companyId).subscribe((c) => this.clients = c);
    this.stockSvc.getCategories(this.companyId).subscribe((cats) => this.categories = cats);
    this.loadPrecomptes();
    this.loadEnlevements();
  }
  // ===== Précomptes =====
  loadPrecomptes() {
    this.loadingPc = true;
    this.svc.getAllPrecomptes(this.companyId).subscribe({
      next: (p) => {
        this.precomptes = p;
        this.loadingPc = false;
      },
      error: () => this.loadingPc = false
    });
  }
  openNewPc() {
    this.editingPc = null;
    this.pcForm = this.emptyPc();
    this.pcError = "";
    this.showPcModal = true;
  }
  editPc(p) {
    this.editingPc = p;
    this.pcForm = __spreadValues({}, p);
    this.pcError = "";
    this.showPcModal = true;
  }
  savePc() {
    if (!this.pcForm.partnerId || !this.pcForm.tauxPrecompte) {
      this.pcError = "Partenaire et taux sont requis.";
      return;
    }
    this.savingPc = true;
    this.pcError = "";
    this.svc.savePrecompte(__spreadProps(__spreadValues({}, this.pcForm), { companyId: this.companyId })).subscribe({
      next: () => {
        this.showPcModal = false;
        this.loadPrecomptes();
        this.savingPc = false;
      },
      error: () => {
        this.pcError = "Erreur lors de la sauvegarde.";
        this.savingPc = false;
      }
    });
  }
  deletePc(id) {
    if (!confirm("Supprimer ce pr\xE9compte ?"))
      return;
    this.svc.deletePrecompte(id).subscribe(() => this.loadPrecomptes());
  }
  // ===== Enlèvements =====
  loadEnlevements() {
    this.loadingEnl = true;
    this.svc.getAllEnlevements(this.companyId).subscribe({
      next: (e) => {
        this.enlevements = e;
        this.loadingEnl = false;
      },
      error: () => this.loadingEnl = false
    });
  }
  openNewEnl() {
    this.editingEnl = null;
    this.enlForm = this.emptyEnl();
    this.enlError = "";
    this.showEnlModal = true;
  }
  editEnl(e) {
    this.editingEnl = e;
    this.enlForm = __spreadProps(__spreadValues({}, e), { clients: (e.clients ?? []).map((c) => __spreadValues({}, c)) });
    this.enlError = "";
    this.showEnlModal = true;
  }
  addEnlClient() {
    if (!this.enlForm.clients)
      this.enlForm.clients = [];
    this.enlForm.clients.push({ partnerId: 0, montant: 0 });
  }
  removeEnlClient(i) {
    this.enlForm.clients?.splice(i, 1);
  }
  saveEnl() {
    if (!this.enlForm.categoryId || !this.enlForm.montantFixe) {
      this.enlError = "Cat\xE9gorie et montant sont requis.";
      return;
    }
    this.savingEnl = true;
    this.enlError = "";
    this.svc.saveEnlevement(__spreadProps(__spreadValues({}, this.enlForm), { companyId: this.companyId })).subscribe({
      next: () => {
        this.showEnlModal = false;
        this.loadEnlevements();
        this.savingEnl = false;
      },
      error: () => {
        this.enlError = "Erreur lors de la sauvegarde.";
        this.savingEnl = false;
      }
    });
  }
  deleteEnl(id) {
    if (!confirm("Supprimer ce frais d'enl\xE8vement ?"))
      return;
    this.svc.deleteEnlevement(id).subscribe(() => this.loadEnlevements());
  }
  typeLabel(t) {
    return t === "sale" ? "Ventes" : "Achats";
  }
  emptyPc() {
    return { partnerId: 0, typePrecompte: "sale", tauxPrecompte: 2, companyId: this.companyId };
  }
  emptyEnl() {
    return { categoryId: 0, montantFixe: 0, companyId: this.companyId, clients: [] };
  }
  static {
    this.\u0275fac = function PrecompteConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrecompteConfigComponent)(\u0275\u0275directiveInject(PrecompteService), \u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrecompteConfigComponent, selectors: [["app-precompte-config"]], decls: 26, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-subtitle"], [1, "header-right"], [1, "btn-new"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "material-icons"], [1, "card"], [1, "modal-overlay"], [1, "btn-new", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "material-icons", "spin"], [1, "text-right"], [1, "font-bold"], [1, "badge"], [1, "text-right", "font-mono", "font-bold"], [1, "actions-cell"], [1, "btn-icon", 3, "click"], [1, "btn-icon", "danger", 3, "click"], [1, "text-right", "font-mono"], [1, "clients-count"], [1, "text-muted"], [1, "modal-overlay", 3, "click.self"], [1, "modal-box"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [1, "modal-error"], [1, "modal-body"], [1, "form-grid"], [1, "form-group", "form-full"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "form-group"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "modal-box", "modal-wide"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-separator"], [1, "lines-header"], [1, "lines-title"], [1, "btn-add-line", 3, "click"], [1, "lines-table"], [1, "text-muted", 2, "font-size", "13px", "padding", "8px 0"], [1, "ar"], [1, "inp", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "inp", "ar", 3, "ngModelChange", "ngModel"], [1, "btn-del", 3, "click"]], template: function PrecompteConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Pr\xE9comptes & Enl\xE8vements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Configuration des retenues \xE0 la source et frais d'enl\xE8vement");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275conditionalCreate(11, PrecompteConfigComponent_Conditional_11_Template, 4, 0, "button", 7)(12, PrecompteConfigComponent_Conditional_12_Template, 4, 0, "button", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
        \u0275\u0275listener("click", function PrecompteConfigComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "precomptes";
        });
        \u0275\u0275elementStart(15, "span", 10);
        \u0275\u0275text(16, "percent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Pr\xE9comptes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 9);
        \u0275\u0275listener("click", function PrecompteConfigComponent_Template_button_click_18_listener() {
          return ctx.activeTab = "enlevements";
        });
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Frais d'enl\xE8vement ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, PrecompteConfigComponent_Conditional_22_Template, 4, 1, "div", 11);
        \u0275\u0275conditionalCreate(23, PrecompteConfigComponent_Conditional_23_Template, 4, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, PrecompteConfigComponent_Conditional_24_Template, 46, 7, "div", 12);
        \u0275\u0275conditionalCreate(25, PrecompteConfigComponent_Conditional_25_Template, 48, 7, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.activeTab === "precomptes" ? 11 : 12);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeTab === "precomptes");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "enlevements");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "precomptes" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "enlevements" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPcModal ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showEnlModal ? 25 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #6f42c1;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 2px 0 0;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #6f42c1;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #6f42c1;\n  border-bottom-color: #6f42c1;\n  font-weight: 700;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: #5a2d9c;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 13px;\n}\n.clients-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #f0ebff;\n  color: #6f42c1;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  padding: 4px 6px;\n  border-radius: 4px;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: #212529;\n  background: #f0f0f0;\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n  color: #dc3545;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-sale[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.badge.badge-purchase[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6f42c1;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  display: flex;\n  padding: 4px;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: #fde8e8;\n  color: #842029;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a2d9c;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #495057;\n  text-transform: uppercase;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n}\n.section-separator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 18px 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-separator[_ngcontent-%COMP%]::before, \n.section-separator[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #dee2e6;\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header[_ngcontent-%COMP%]   .lines-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: #6f42c1;\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: #f4f6f8;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e2e8ef;\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 5px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inp[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp[_ngcontent-%COMP%]:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.inp[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n  background: #fff;\n}\n.inp.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #dee2e6;\n}\n.btn-del[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n/*# sourceMappingURL=precompte-config.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrecompteConfigComponent, [{
    type: Component,
    args: [{ selector: "app-precompte-config", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">account_balance</span>
      <div>
        <h1 class="page-title">Pr\xE9comptes & Enl\xE8vements</h1>
        <p class="page-subtitle">Configuration des retenues \xE0 la source et frais d'enl\xE8vement</p>
      </div>
    </div>
    <div class="header-right">
      @if (activeTab === 'precomptes') {
        <button class="btn-new" (click)="openNewPc()"><span class="material-icons">add</span> Nouveau pr\xE9compte</button>
      } @else {
        <button class="btn-new" (click)="openNewEnl()"><span class="material-icons">add</span> Nouveau frais enl\xE8vement</button>
      }
    </div>
  </div>

  <div class="tabs-bar">
    <button class="tab-btn" [class.active]="activeTab === 'precomptes'" (click)="activeTab = 'precomptes'">
      <span class="material-icons">percent</span> Pr\xE9comptes
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'enlevements'" (click)="activeTab = 'enlevements'">
      <span class="material-icons">local_shipping</span> Frais d'enl\xE8vement
    </button>
  </div>

  <!-- ===== PR\xC9COMPTES ===== -->
  @if (activeTab === 'precomptes') {
    <div class="card">
      @if (loadingPc) {
        <div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div>
      } @else if (precomptes.length === 0) {
        <div class="empty-state">
          <span class="material-icons">percent</span>
          <p>Aucun pr\xE9compte configur\xE9.</p>
          <button class="btn-new" (click)="openNewPc()"><span class="material-icons">add</span> Ajouter</button>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Partenaire</th>
              <th>Type</th>
              <th class="text-right">Taux (%)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (p of precomptes; track p.id) {
              <tr>
                <td class="font-bold">{{ p.partnerName }}</td>
                <td><span class="badge" [class.badge-sale]="p.typePrecompte === 'sale'" [class.badge-purchase]="p.typePrecompte === 'purchase'">{{ typeLabel(p.typePrecompte) }}</span></td>
                <td class="text-right font-mono font-bold">{{ p.tauxPrecompte }}%</td>
                <td class="actions-cell">
                  <button class="btn-icon" (click)="editPc(p)"><span class="material-icons">edit</span></button>
                  <button class="btn-icon danger" (click)="deletePc(p.id!)"><span class="material-icons">delete</span></button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

  <!-- ===== ENL\xC8VEMENTS ===== -->
  @if (activeTab === 'enlevements') {
    <div class="card">
      @if (loadingEnl) {
        <div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div>
      } @else if (enlevements.length === 0) {
        <div class="empty-state">
          <span class="material-icons">local_shipping</span>
          <p>Aucun frais d'enl\xE8vement configur\xE9.</p>
          <button class="btn-new" (click)="openNewEnl()"><span class="material-icons">add</span> Ajouter</button>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Cat\xE9gorie</th>
              <th class="text-right">Montant fixe (FCFA)</th>
              <th>Tarifs sp\xE9ciaux clients</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (e of enlevements; track e.id) {
              <tr>
                <td class="font-bold">{{ e.categoryName }}</td>
                <td class="text-right font-mono">{{ e.montantFixe | number:'1.0-0' }}</td>
                <td>
                  @if (e.clients && e.clients.length > 0) {
                    <span class="clients-count">{{ e.clients.length }} tarif(s) sp\xE9cifique(s)</span>
                  } @else {
                    <span class="text-muted">Tarif g\xE9n\xE9ral</span>
                  }
                </td>
                <td class="actions-cell">
                  <button class="btn-icon" (click)="editEnl(e)"><span class="material-icons">edit</span></button>
                  <button class="btn-icon danger" (click)="deleteEnl(e.id!)"><span class="material-icons">delete</span></button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

</div>

<!-- ===== PR\xC9COMPTE MODAL ===== -->
@if (showPcModal) {
  <div class="modal-overlay" (click.self)="showPcModal = false">
    <div class="modal-box">
      <div class="modal-header">
        <span class="material-icons">percent</span>
        <h2>{{ editingPc ? 'Modifier pr\xE9compte' : 'Nouveau pr\xE9compte' }}</h2>
        <button class="btn-close-modal" (click)="showPcModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (pcError) { <div class="modal-error"><span class="material-icons">error</span>{{ pcError }}</div> }
      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group form-full">
            <label>Partenaire <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="pcForm.partnerId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (c of clients; track c.id) { <option [value]="c.id">{{ c.name }}</option> }
            </select>
          </div>
          <div class="form-group">
            <label>Type <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="pcForm.typePrecompte">
              @for (t of TYPE_OPTS; track t.value) { <option [value]="t.value">{{ t.label }}</option> }
            </select>
          </div>
          <div class="form-group">
            <label>Taux (%) <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="pcForm.tauxPrecompte">
              @for (t of TAUX_OPTS; track t) { <option [value]="t">{{ t }}%</option> }
            </select>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="showPcModal = false">Annuler</button>
        <button class="btn-save" (click)="savePc()" [disabled]="savingPc">
          <span class="material-icons">save</span> Enregistrer
        </button>
      </div>
    </div>
  </div>
}

<!-- ===== ENL\xC8VEMENT MODAL ===== -->
@if (showEnlModal) {
  <div class="modal-overlay" (click.self)="showEnlModal = false">
    <div class="modal-box modal-wide">
      <div class="modal-header">
        <span class="material-icons">local_shipping</span>
        <h2>{{ editingEnl ? 'Modifier enl\xE8vement' : 'Nouveau frais d\\'enl\xE8vement' }}</h2>
        <button class="btn-close-modal" (click)="showEnlModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (enlError) { <div class="modal-error"><span class="material-icons">error</span>{{ enlError }}</div> }
      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group">
            <label>Cat\xE9gorie de produit <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="enlForm.categoryId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (cat of categories; track cat.id) { <option [value]="cat.id">{{ cat.name }}</option> }
            </select>
          </div>
          <div class="form-group">
            <label>Montant fixe / unit\xE9 (FCFA) <span class="req">*</span></label>
            <input type="number" class="form-control" [(ngModel)]="enlForm.montantFixe" min="0" />
          </div>
        </div>

        <!-- Tarifs clients sp\xE9cifiques -->
        <div class="section-separator">
          <span>Tarifs sp\xE9ciaux par client (facultatif)</span>
        </div>
        <div class="lines-header">
          <span class="lines-title">Tarifs par client</span>
          <button class="btn-add-line" (click)="addEnlClient()"><span class="material-icons">add</span> Ajouter client</button>
        </div>
        @if (enlForm.clients && enlForm.clients.length > 0) {
          <table class="lines-table">
            <thead>
              <tr><th>Client</th><th class="ar">Montant sp\xE9cifique (FCFA)</th><th></th></tr>
            </thead>
            <tbody>
              @for (ec of enlForm.clients; track $index; let i = $index) {
                <tr>
                  <td>
                    <select class="inp" [(ngModel)]="ec.partnerId">
                      <option [value]="0">-- Client --</option>
                      @for (c of clients; track c.id) { <option [value]="c.id">{{ c.name }}</option> }
                    </select>
                  </td>
                  <td class="ar"><input type="number" class="inp ar" [(ngModel)]="ec.montant" min="0" /></td>
                  <td><button class="btn-del" (click)="removeEnlClient(i)"><span class="material-icons">delete</span></button></td>
                </tr>
              }
            </tbody>
          </table>
        } @else {
          <p class="text-muted" style="font-size:13px; padding: 8px 0;">Aucun tarif sp\xE9cifique \u2014 le montant fixe s'applique \xE0 tous les clients.</p>
        }
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="showEnlModal = false">Annuler</button>
        <button class="btn-save" (click)="saveEnl()" [disabled]="savingEnl">
          <span class="material-icons">save</span> Enregistrer
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/sales/components/precomptes/precompte-config.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-icon {\n  font-size: 28px;\n  color: #6f42c1;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 2px 0 0;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: #6f42c1;\n}\n.tab-btn.active {\n  color: #6f42c1;\n  border-bottom-color: #6f42c1;\n  font-weight: 700;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: #5a2d9c;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 11px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n  font-size: 13px;\n}\n.clients-count {\n  font-size: 12px;\n  background: #f0ebff;\n  color: #6f42c1;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.actions-cell {\n  text-align: right;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  padding: 4px 6px;\n  border-radius: 4px;\n}\n.btn-icon .material-icons {\n  font-size: 17px;\n}\n.btn-icon:hover {\n  color: #212529;\n  background: #f0f0f0;\n}\n.btn-icon.danger:hover {\n  background: #fde8e8;\n  color: #dc3545;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-sale {\n  background: #d4edda;\n  color: #155724;\n}\n.badge.badge-purchase {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide {\n  max-width: 720px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header .material-icons {\n  color: #6f42c1;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  display: flex;\n  padding: 4px;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n}\n.modal-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: #fde8e8;\n  color: #842029;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-save:hover:not(:disabled) {\n  background: #5a2d9c;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #495057;\n  text-transform: uppercase;\n}\n.form-group .req {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: #6f42c1;\n}\n.section-separator {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 18px 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-separator::before,\n.section-separator::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #dee2e6;\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header .lines-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: #6f42c1;\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-add-line .material-icons {\n  font-size: 15px;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 8px;\n  background: #f4f6f8;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e2e8ef;\n  text-align: left;\n}\n.lines-table td {\n  padding: 4px 5px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table .ar {\n  text-align: right;\n}\n.inp {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.inp:focus {\n  border-color: #6f42c1;\n  background: #fff;\n}\n.inp.ar {\n  text-align: right;\n}\n.btn-del {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #dee2e6;\n}\n.btn-del .material-icons {\n  font-size: 16px;\n}\n.btn-del:hover {\n  color: #dc3545;\n}\n/*# sourceMappingURL=precompte-config.component.css.map */\n'] }]
  }], () => [{ type: PrecompteService }, { type: SalesService }, { type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrecompteConfigComponent, { className: "PrecompteConfigComponent", filePath: "src/app/modules/sales/components/precomptes/precompte-config.component.ts", lineNumber: 16 });
})();
export {
  PrecompteConfigComponent
};
//# sourceMappingURL=chunk-VF5WJEWL.js.map
