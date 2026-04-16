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
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Injectable,
  NgClass,
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

// src/app/modules/sales/services/ristourne.service.ts
var RistourneService = class _RistourneService {
  constructor(http) {
    this.http = http;
    this.base = `http://${window.location.hostname}:8085/api/ristournes`;
  }
  // ===== Configuration =====
  getAll(companyId) {
    return this.http.get(this.base, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getByPartner(partnerId, companyId) {
    return this.http.get(`${this.base}/partner/${partnerId}`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  save(dto) {
    return this.http.post(this.base, dto);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  // ===== Règlements =====
  getAllPaiements(companyId) {
    return this.http.get(`${this.base}/paiements`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getPaiement(id) {
    return this.http.get(`${this.base}/paiements/${id}`);
  }
  savePaiement(dto) {
    return this.http.post(`${this.base}/paiements`, dto);
  }
  confirmPaiement(id) {
    return this.http.post(`${this.base}/paiements/${id}/confirm`, {});
  }
  cancelPaiement(id) {
    return this.http.post(`${this.base}/paiements/${id}/cancel`, {});
  }
  static {
    this.\u0275fac = function RistourneService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RistourneService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RistourneService, factory: _RistourneService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RistourneService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/sales/components/ristournes/ristourne-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function RistourneListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewRst());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouvelle ristourne ");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewPmt());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau r\xE8glement ");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 17);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 10);
    \u0275\u0275text(2, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune ristourne configur\xE9e.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_22_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewRst());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Ajouter");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_22_Conditional_3_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Brasserie");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_22_Conditional_3_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Guinness");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_22_Conditional_3_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "HT brut");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_22_Conditional_3_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, RistourneListComponent_Conditional_22_Conditional_3_For_14_Conditional_9_Template, 2, 0, "span", 21)(10, RistourneListComponent_Conditional_22_Conditional_3_For_14_Conditional_10_Template, 2, 0, "span", 22)(11, RistourneListComponent_Conditional_22_Conditional_3_For_14_Conditional_11_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 24)(13, "button", 25);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_22_Conditional_3_For_14_Template_button_click_13_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editRst(r_r6));
    });
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 26);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_22_Conditional_3_For_14_Template_button_click_16_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteRst(r_r6.id));
    });
    \u0275\u0275elementStart(17, "span", 10);
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, r_r6.montantFixe, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r6.typeRistourne === "brasserie" ? 9 : r_r6.typeRistourne === "guinness" ? 10 : 11);
  }
}
function RistourneListComponent_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 16)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 18);
    \u0275\u0275text(8, "Montant fixe (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type calcul TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, RistourneListComponent_Conditional_22_Conditional_3_For_14_Template, 19, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.ristournes);
  }
}
function RistourneListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, RistourneListComponent_Conditional_22_Conditional_1_Template, 5, 0, "div", 14)(2, RistourneListComponent_Conditional_22_Conditional_2_Template, 9, 0, "div", 15)(3, RistourneListComponent_Conditional_22_Conditional_3_Template, 15, 0, "table", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingRst ? 1 : ctx_r1.ristournes.length === 0 ? 2 : 3);
  }
}
function RistourneListComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 17);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 10);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun r\xE8glement de ristourne.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_23_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewPmt());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Cr\xE9er");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_23_Conditional_3_For_16_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_23_Conditional_3_For_16_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmPmt(p_r9.id));
    });
    \u0275\u0275text(1, "Confirmer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_23_Conditional_3_For_16_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelPmt(p_r9.id));
    });
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_23_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 24);
    \u0275\u0275conditionalCreate(15, RistourneListComponent_Conditional_23_Conditional_3_For_16_Conditional_15_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, p_r9.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, p_r9.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.stateBadge(p_r9.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r9.state));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r9.state === "draft" ? 15 : -1);
  }
}
function RistourneListComponent_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 16)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 18);
    \u0275\u0275text(10, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, RistourneListComponent_Conditional_23_Conditional_3_For_16_Template, 16, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.paiements);
  }
}
function RistourneListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, RistourneListComponent_Conditional_23_Conditional_1_Template, 5, 0, "div", 14)(2, RistourneListComponent_Conditional_23_Conditional_2_Template, 9, 0, "div", 15)(3, RistourneListComponent_Conditional_23_Conditional_3_Template, 17, 0, "table", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingPmt ? 1 : ctx_r1.paiements.length === 0 ? 2 : 3);
  }
}
function RistourneListComponent_Conditional_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.rstError);
  }
}
function RistourneListComponent_Conditional_24_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
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
function RistourneListComponent_Conditional_24_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r12 = ctx.$implicit;
    \u0275\u0275property("value", cat_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r12.name);
  }
}
function RistourneListComponent_Conditional_24_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r13 = ctx.$implicit;
    \u0275\u0275property("value", t_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r13.label);
  }
}
function RistourneListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click.self", function RistourneListComponent_Conditional_24_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRstModal = false);
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34)(3, "span", 10);
    \u0275\u0275text(4, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRstModal = false);
    });
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, RistourneListComponent_Conditional_24_Conditional_10_Template, 4, 1, "div", 36);
    \u0275\u0275elementStart(11, "div", 37)(12, "div", 38)(13, "div", 39)(14, "label");
    \u0275\u0275text(15, "Client ");
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_24_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.partnerId, $event) || (ctx_r1.rstForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 42);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, RistourneListComponent_Conditional_24_For_22_Template, 2, 2, "option", 42, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 39)(24, "label");
    \u0275\u0275text(25, "Cat\xE9gorie de produit ");
    \u0275\u0275elementStart(26, "span", 40);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_24_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.categoryId, $event) || (ctx_r1.rstForm.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 42);
    \u0275\u0275text(30, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, RistourneListComponent_Conditional_24_For_32_Template, 2, 2, "option", 42, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 39)(34, "label");
    \u0275\u0275text(35, "Montant fixe / unit\xE9 (FCFA) ");
    \u0275\u0275elementStart(36, "span", 40);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_24_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.montantFixe, $event) || (ctx_r1.rstForm.montantFixe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 39)(40, "label");
    \u0275\u0275text(41, "Type de calcul TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_24_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.typeRistourne, $event) || (ctx_r1.rstForm.typeRistourne = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(43, RistourneListComponent_Conditional_24_For_44_Template, 2, 2, "option", 42, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 44)(46, "button", 45);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_24_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRstModal = false);
    });
    \u0275\u0275text(47, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 46);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_24_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRst());
    });
    \u0275\u0275elementStart(49, "span", 10);
    \u0275\u0275text(50, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingRst ? "Modifier ristourne" : "Nouvelle ristourne");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.rstError ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clients);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.montantFixe);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.typeRistourne);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.TYPE_OPTS);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingRst);
  }
}
function RistourneListComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pmtError);
  }
}
function RistourneListComponent_Conditional_25_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("value", c_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r15.name);
  }
}
function RistourneListComponent_Conditional_25_Conditional_39_For_17_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r18 = ctx.$implicit;
    \u0275\u0275property("value", cat_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r18.name);
  }
}
function RistourneListComponent_Conditional_25_Conditional_39_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_25_Conditional_39_For_17_Template_select_ngModelChange_4_listener($event) {
      const line_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(line_r17.categoryId, $event) || (line_r17.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 42);
    \u0275\u0275text(6, "-- Cat\xE9gorie --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, RistourneListComponent_Conditional_25_Conditional_39_For_17_For_8_Template, 2, 2, "option", 42, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 59)(10, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_25_Conditional_39_For_17_Template_input_ngModelChange_10_listener($event) {
      const line_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(line_r17.quantite, $event) || (line_r17.quantite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 59)(12, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_25_Conditional_39_For_17_Template_input_ngModelChange_12_listener($event) {
      const line_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(line_r17.montantUnitaire, $event) || (line_r17.montantUnitaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 63);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 64);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_25_Conditional_39_For_17_Template_button_click_17_listener() {
      const \u0275$index_419_r19 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePmtLine(\u0275$index_419_r19));
    });
    \u0275\u0275elementStart(18, "span", 10);
    \u0275\u0275text(19, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r17 = ctx.$implicit;
    const \u0275$index_419_r19 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_419_r19 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r17.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", line_r17.quantite);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r17.montantUnitaire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 6, ctx_r1.getPmtLineMontantTotal(line_r17), "1.0-2"));
  }
}
function RistourneListComponent_Conditional_25_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table", 58)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 59);
    \u0275\u0275text(9, "Quantit\xE9 vendue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 59);
    \u0275\u0275text(11, "Montant unit. (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 59);
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RistourneListComponent_Conditional_25_Conditional_39_For_17_Template, 20, 9, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.pmtForm.lines);
  }
}
function RistourneListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click.self", function RistourneListComponent_Conditional_25_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPmtModal = false);
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 34)(3, "span", 10);
    \u0275\u0275text(4, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Nouveau r\xE8glement ristourne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPmtModal = false);
    });
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, RistourneListComponent_Conditional_25_Conditional_10_Template, 4, 1, "div", 36);
    \u0275\u0275elementStart(11, "div", 37)(12, "div", 38)(13, "div", 39)(14, "label");
    \u0275\u0275text(15, "Client ");
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_25_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pmtForm.partnerId, $event) || (ctx_r1.pmtForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 42);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, RistourneListComponent_Conditional_25_For_22_Template, 2, 2, "option", 42, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 39)(24, "label");
    \u0275\u0275text(25, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_25_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pmtForm.date, $event) || (ctx_r1.pmtForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 49)(28, "label");
    \u0275\u0275text(29, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_25_Template_textarea_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pmtForm.notes, $event) || (ctx_r1.pmtForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 51)(32, "div", 52)(33, "span", 53);
    \u0275\u0275text(34, "Lignes de ristourne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 54);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_25_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPmtLine());
    });
    \u0275\u0275elementStart(36, "span", 10);
    \u0275\u0275text(37, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Ajouter ligne ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(39, RistourneListComponent_Conditional_25_Conditional_39_Template, 18, 0, "div", 55);
    \u0275\u0275elementStart(40, "div", 56)(41, "span");
    \u0275\u0275text(42, "Total estim\xE9 :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 57);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 44)(47, "button", 45);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_25_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPmtModal = false);
    });
    \u0275\u0275text(48, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 46);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_25_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePmt());
    });
    \u0275\u0275elementStart(50, "span", 10);
    \u0275\u0275text(51, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.pmtError ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pmtForm.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clients);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pmtForm.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pmtForm.notes);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.pmtForm.lines.length > 0 ? 39 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(45, 8, ctx_r1.getTotalPmt(), "1.0-2"), " FCFA");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingPmt);
  }
}
var RistourneListComponent = class _RistourneListComponent {
  constructor(svc, salesSvc, stockSvc, auth) {
    this.svc = svc;
    this.salesSvc = salesSvc;
    this.stockSvc = stockSvc;
    this.auth = auth;
    this.ristournes = [];
    this.clients = [];
    this.categories = [];
    this.loadingRst = false;
    this.showRstModal = false;
    this.editingRst = null;
    this.savingRst = false;
    this.rstForm = this.emptyRst();
    this.rstError = "";
    this.paiements = [];
    this.loadingPmt = false;
    this.showPmtModal = false;
    this.editingPmt = null;
    this.savingPmt = false;
    this.pmtForm = this.emptyPmt();
    this.pmtError = "";
    this.activeTab = "config";
    this.TYPE_OPTS = [
      { value: "", label: "Ristourne HT brute" },
      { value: "brasserie", label: "Brasserie (HT \xD7 (1 + pr\xE9compte% + 19.25%))" },
      { value: "guinness", label: "Guinness (HT \xD7 1.1925)" }
    ];
  }
  ngOnInit() {
    this.loadAll();
  }
  get companyId() {
    return this.auth.getCurrentUser()?.companyId ?? 1;
  }
  loadAll() {
    this.loadRistournes();
    this.loadPaiements();
    this.salesSvc.getClients(this.companyId).subscribe((c) => this.clients = c);
    this.stockSvc.getCategories(this.companyId).subscribe((cats) => this.categories = cats);
  }
  // ===== Config =====
  loadRistournes() {
    this.loadingRst = true;
    this.svc.getAll(this.companyId).subscribe({
      next: (r) => {
        this.ristournes = r;
        this.loadingRst = false;
      },
      error: () => this.loadingRst = false
    });
  }
  openNewRst() {
    this.editingRst = null;
    this.rstForm = this.emptyRst();
    this.rstError = "";
    this.showRstModal = true;
  }
  editRst(r) {
    this.editingRst = r;
    this.rstForm = __spreadValues({}, r);
    this.rstError = "";
    this.showRstModal = true;
  }
  saveRst() {
    if (!this.rstForm.partnerId || !this.rstForm.categoryId || !this.rstForm.montantFixe) {
      this.rstError = "Client, cat\xE9gorie et montant sont requis.";
      return;
    }
    this.savingRst = true;
    this.rstError = "";
    this.svc.save(__spreadProps(__spreadValues({}, this.rstForm), { companyId: this.companyId })).subscribe({
      next: () => {
        this.showRstModal = false;
        this.loadRistournes();
        this.savingRst = false;
      },
      error: () => {
        this.rstError = "Erreur lors de la sauvegarde.";
        this.savingRst = false;
      }
    });
  }
  deleteRst(id) {
    if (!confirm("Supprimer cette ristourne ?"))
      return;
    this.svc.delete(id).subscribe(() => this.loadRistournes());
  }
  // ===== Paiements =====
  loadPaiements() {
    this.loadingPmt = true;
    this.svc.getAllPaiements(this.companyId).subscribe({
      next: (p) => {
        this.paiements = p;
        this.loadingPmt = false;
      },
      error: () => this.loadingPmt = false
    });
  }
  openNewPmt() {
    this.editingPmt = null;
    this.pmtForm = this.emptyPmt();
    this.pmtError = "";
    this.showPmtModal = true;
  }
  addPmtLine() {
    this.pmtForm.lines.push({ categoryId: 0, quantite: 0, montantUnitaire: 0 });
  }
  removePmtLine(i) {
    this.pmtForm.lines.splice(i, 1);
  }
  savePmt() {
    if (!this.pmtForm.partnerId) {
      this.pmtError = "Veuillez s\xE9lectionner un client.";
      return;
    }
    this.savingPmt = true;
    this.pmtError = "";
    this.svc.savePaiement(__spreadProps(__spreadValues({}, this.pmtForm), { companyId: this.companyId })).subscribe({
      next: () => {
        this.showPmtModal = false;
        this.loadPaiements();
        this.savingPmt = false;
      },
      error: () => {
        this.pmtError = "Erreur lors de la sauvegarde.";
        this.savingPmt = false;
      }
    });
  }
  confirmPmt(id) {
    if (!confirm("Confirmer ce r\xE8glement ristourne ?"))
      return;
    this.svc.confirmPaiement(id).subscribe(() => this.loadPaiements());
  }
  cancelPmt(id) {
    if (!confirm("Annuler ce r\xE8glement ristourne ?"))
      return;
    this.svc.cancelPaiement(id).subscribe(() => this.loadPaiements());
  }
  getPmtLineMontantTotal(line) {
    return (line.quantite ?? 0) * (line.montantUnitaire ?? 0);
  }
  getTotalPmt() {
    return this.pmtForm.lines.reduce((s, l) => s + this.getPmtLineMontantTotal(l), 0);
  }
  stateBadge(state) {
    switch (state) {
      case "confirmed":
        return "badge-confirmed";
      case "done":
        return "badge-done";
      case "cancelled":
        return "badge-cancelled";
      default:
        return "badge-draft";
    }
  }
  stateLabel(state) {
    switch (state) {
      case "confirmed":
        return "Confirm\xE9";
      case "done":
        return "Fait";
      case "cancelled":
        return "Annul\xE9";
      default:
        return "Brouillon";
    }
  }
  emptyRst() {
    return { partnerId: 0, categoryId: 0, montantFixe: 0, typeRistourne: "", companyId: this.companyId };
  }
  emptyPmt() {
    return { partnerId: 0, companyId: this.companyId, lines: [] };
  }
  static {
    this.\u0275fac = function RistourneListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RistourneListComponent)(\u0275\u0275directiveInject(RistourneService), \u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RistourneListComponent, selectors: [["app-ristourne-list"]], decls: 26, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-subtitle"], [1, "header-right"], [1, "btn-new"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "material-icons"], [1, "card"], [1, "modal-overlay"], [1, "btn-new", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "material-icons", "spin"], [1, "text-right"], [1, "font-bold"], [1, "text-right", "font-mono"], [1, "badge", "badge-brasserie"], [1, "badge", "badge-guinness"], [1, "badge", "badge-ht"], [1, "actions-cell"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "danger", 3, "click"], [1, "ref-col"], [1, "text-right", "font-mono", "font-bold"], [1, "badge", 3, "ngClass"], [1, "btn-action", "confirm", 3, "click"], [1, "btn-icon", "danger", 3, "click"], [1, "modal-overlay", 3, "click.self"], [1, "modal-box"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [1, "modal-error"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "number", "min", "0", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "modal-box", "modal-wide"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "lines-section"], [1, "lines-header"], [1, "lines-title"], [1, "btn-add-line", 3, "click"], [1, "lines-wrap"], [1, "pmt-total"], [1, "total-val"], [1, "lines-table"], [1, "ar"], [1, "ln"], [1, "inp", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "inp", "ar", 3, "ngModelChange", "ngModel"], [1, "ar", "amt"], [1, "btn-del", 3, "click"]], template: function RistourneListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "redeem");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Ristournes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Configuration et r\xE8glements des ristournes clients");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275conditionalCreate(11, RistourneListComponent_Conditional_11_Template, 4, 0, "button", 7)(12, RistourneListComponent_Conditional_12_Template, 4, 0, "button", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
        \u0275\u0275listener("click", function RistourneListComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "config";
        });
        \u0275\u0275elementStart(15, "span", 10);
        \u0275\u0275text(16, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Configuration ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 9);
        \u0275\u0275listener("click", function RistourneListComponent_Template_button_click_18_listener() {
          return ctx.activeTab = "paiements";
        });
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "payments");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " R\xE8glements ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, RistourneListComponent_Conditional_22_Template, 4, 1, "div", 11);
        \u0275\u0275conditionalCreate(23, RistourneListComponent_Conditional_23_Template, 4, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, RistourneListComponent_Conditional_24_Template, 52, 9, "div", 12);
        \u0275\u0275conditionalCreate(25, RistourneListComponent_Conditional_25_Template, 53, 11, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.activeTab === "config" ? 11 : 12);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeTab === "config");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "paiements");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "config" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "paiements" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRstModal ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPmtModal ? 25 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #6f42c1;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 2px 0 0;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #6f42c1;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #6f42c1;\n  border-bottom-color: #6f42c1;\n  font-weight: 600;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: #5a2d9c;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.ref-col[_ngcontent-%COMP%] {\n  color: #6f42c1;\n  font-family: monospace;\n  font-weight: 600;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  padding: 4px 6px;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n  color: #dc3545;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-action.confirm[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.btn-action.confirm[_ngcontent-%COMP%]:hover {\n  background: #c3e6cb;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.badge.badge-done[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.badge.badge-brasserie[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge.badge-guinness[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.badge.badge-ht[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #495057;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide[_ngcontent-%COMP%] {\n  max-width: 860px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6f42c1;\n  font-size: 22px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: #fde8e8;\n  color: #842029;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a2d9c;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lines-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header[_ngcontent-%COMP%]   .lines-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: #6f42c1;\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: #f4f6f8;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e2e8ef;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 5px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #faf8ff;\n}\n.lines-table[_ngcontent-%COMP%]   .ln[_ngcontent-%COMP%] {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: #adb5bd;\n  font-weight: 700;\n}\n.lines-table[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lines-table[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #495057;\n}\n.inp[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp[_ngcontent-%COMP%]:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.inp[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n  background: #fff;\n}\n.inp.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #dee2e6;\n}\n.btn-del[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.pmt-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 0 0;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #6c757d;\n}\n.pmt-total[_ngcontent-%COMP%]   .total-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #6f42c1;\n  font-family: monospace;\n}\n/*# sourceMappingURL=ristourne-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RistourneListComponent, [{
    type: Component,
    args: [{ selector: "app-ristourne-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- Header -->
  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">redeem</span>
      <div>
        <h1 class="page-title">Ristournes</h1>
        <p class="page-subtitle">Configuration et r\xE8glements des ristournes clients</p>
      </div>
    </div>
    <div class="header-right">
      @if (activeTab === 'config') {
        <button class="btn-new" (click)="openNewRst()">
          <span class="material-icons">add</span> Nouvelle ristourne
        </button>
      } @else {
        <button class="btn-new" (click)="openNewPmt()">
          <span class="material-icons">add</span> Nouveau r\xE8glement
        </button>
      }
    </div>
  </div>

  <!-- Tabs -->
  <div class="tabs-bar">
    <button class="tab-btn" [class.active]="activeTab === 'config'" (click)="activeTab = 'config'">
      <span class="material-icons">settings</span> Configuration
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'paiements'" (click)="activeTab = 'paiements'">
      <span class="material-icons">payments</span> R\xE8glements
    </button>
  </div>

  <!-- ===================== CONFIG TAB ===================== -->
  @if (activeTab === 'config') {
    <div class="card">
      @if (loadingRst) {
        <div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div>
      } @else if (ristournes.length === 0) {
        <div class="empty-state">
          <span class="material-icons">redeem</span>
          <p>Aucune ristourne configur\xE9e.</p>
          <button class="btn-new" (click)="openNewRst()"><span class="material-icons">add</span> Ajouter</button>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Cat\xE9gorie</th>
              <th class="text-right">Montant fixe (FCFA)</th>
              <th>Type calcul TTC</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (r of ristournes; track r.id) {
              <tr>
                <td class="font-bold">{{ r.partnerName }}</td>
                <td>{{ r.categoryName }}</td>
                <td class="text-right font-mono">{{ r.montantFixe | number:'1.0-0' }}</td>
                <td>
                  @if (r.typeRistourne === 'brasserie') {
                    <span class="badge badge-brasserie">Brasserie</span>
                  } @else if (r.typeRistourne === 'guinness') {
                    <span class="badge badge-guinness">Guinness</span>
                  } @else {
                    <span class="badge badge-ht">HT brut</span>
                  }
                </td>
                <td class="actions-cell">
                  <button class="btn-icon" (click)="editRst(r)" title="Modifier">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="btn-icon danger" (click)="deleteRst(r.id!)" title="Supprimer">
                    <span class="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

  <!-- ===================== PAIEMENTS TAB ===================== -->
  @if (activeTab === 'paiements') {
    <div class="card">
      @if (loadingPmt) {
        <div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div>
      } @else if (paiements.length === 0) {
        <div class="empty-state">
          <span class="material-icons">payments</span>
          <p>Aucun r\xE8glement de ristourne.</p>
          <button class="btn-new" (click)="openNewPmt()"><span class="material-icons">add</span> Cr\xE9er</button>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th>
              <th>Client</th>
              <th>Date</th>
              <th class="text-right">Montant TTC</th>
              <th>\xC9tat</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (p of paiements; track p.id) {
              <tr>
                <td class="ref-col">{{ p.name }}</td>
                <td class="font-bold">{{ p.partnerName }}</td>
                <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                <td class="text-right font-mono font-bold">{{ p.totalAmount | number:'1.0-2' }}</td>
                <td><span class="badge" [ngClass]="stateBadge(p.state)">{{ stateLabel(p.state) }}</span></td>
                <td class="actions-cell">
                  @if (p.state === 'draft') {
                    <button class="btn-action confirm" (click)="confirmPmt(p.id!)">Confirmer</button>
                    <button class="btn-icon danger" (click)="cancelPmt(p.id!)"><span class="material-icons">close</span></button>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

</div>

<!-- ===================== RISTOURNE MODAL ===================== -->
@if (showRstModal) {
  <div class="modal-overlay" (click.self)="showRstModal = false">
    <div class="modal-box">
      <div class="modal-header">
        <span class="material-icons">redeem</span>
        <h2>{{ editingRst ? 'Modifier ristourne' : 'Nouvelle ristourne' }}</h2>
        <button class="btn-close-modal" (click)="showRstModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (rstError) {
        <div class="modal-error"><span class="material-icons">error</span>{{ rstError }}</div>
      }
      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group">
            <label>Client <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="rstForm.partnerId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (c of clients; track c.id) {
                <option [value]="c.id">{{ c.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Cat\xE9gorie de produit <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="rstForm.categoryId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (cat of categories; track cat.id) {
                <option [value]="cat.id">{{ cat.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Montant fixe / unit\xE9 (FCFA) <span class="req">*</span></label>
            <input type="number" class="form-control" [(ngModel)]="rstForm.montantFixe" min="0" step="1" />
          </div>
          <div class="form-group">
            <label>Type de calcul TTC</label>
            <select class="form-control" [(ngModel)]="rstForm.typeRistourne">
              @for (t of TYPE_OPTS; track t.value) {
                <option [value]="t.value">{{ t.label }}</option>
              }
            </select>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="showRstModal = false">Annuler</button>
        <button class="btn-save" (click)="saveRst()" [disabled]="savingRst">
          <span class="material-icons">save</span> Enregistrer
        </button>
      </div>
    </div>
  </div>
}

<!-- ===================== PAIEMENT MODAL ===================== -->
@if (showPmtModal) {
  <div class="modal-overlay" (click.self)="showPmtModal = false">
    <div class="modal-box modal-wide">
      <div class="modal-header">
        <span class="material-icons">payments</span>
        <h2>Nouveau r\xE8glement ristourne</h2>
        <button class="btn-close-modal" (click)="showPmtModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (pmtError) {
        <div class="modal-error"><span class="material-icons">error</span>{{ pmtError }}</div>
      }
      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group">
            <label>Client <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="pmtForm.partnerId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (c of clients; track c.id) {
                <option [value]="c.id">{{ c.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Date</label>
            <input type="date" class="form-control" [(ngModel)]="pmtForm.date" />
          </div>
          <div class="form-group form-full">
            <label>Notes</label>
            <textarea class="form-control" [(ngModel)]="pmtForm.notes" rows="2"></textarea>
          </div>
        </div>

        <!-- Lines -->
        <div class="lines-section">
          <div class="lines-header">
            <span class="lines-title">Lignes de ristourne</span>
            <button class="btn-add-line" (click)="addPmtLine()">
              <span class="material-icons">add</span> Ajouter ligne
            </button>
          </div>
          @if (pmtForm.lines.length > 0) {
            <div class="lines-wrap">
              <table class="lines-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Cat\xE9gorie</th>
                    <th class="ar">Quantit\xE9 vendue</th>
                    <th class="ar">Montant unit. (FCFA)</th>
                    <th class="ar">Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  @for (line of pmtForm.lines; track $index; let i = $index) {
                    <tr>
                      <td class="ln">{{ i + 1 }}</td>
                      <td>
                        <select class="inp" [(ngModel)]="line.categoryId">
                          <option [value]="0">-- Cat\xE9gorie --</option>
                          @for (cat of categories; track cat.id) {
                            <option [value]="cat.id">{{ cat.name }}</option>
                          }
                        </select>
                      </td>
                      <td class="ar"><input type="number" class="inp ar" [(ngModel)]="line.quantite" min="0" /></td>
                      <td class="ar"><input type="number" class="inp ar" [(ngModel)]="line.montantUnitaire" min="0" /></td>
                      <td class="ar amt">{{ getPmtLineMontantTotal(line) | number:'1.0-2' }}</td>
                      <td><button class="btn-del" (click)="removePmtLine(i)"><span class="material-icons">delete</span></button></td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
          <div class="pmt-total">
            <span>Total estim\xE9 :</span>
            <span class="total-val">{{ getTotalPmt() | number:'1.0-2' }} FCFA</span>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="showPmtModal = false">Annuler</button>
        <button class="btn-save" (click)="savePmt()" [disabled]="savingPmt">
          <span class="material-icons">save</span> Enregistrer
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/sales/components/ristournes/ristourne-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-icon {\n  font-size: 28px;\n  color: #6f42c1;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 2px 0 0;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: #6f42c1;\n}\n.tab-btn.active {\n  color: #6f42c1;\n  border-bottom-color: #6f42c1;\n  font-weight: 600;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: #5a2d9c;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.ref-col {\n  color: #6f42c1;\n  font-family: monospace;\n  font-weight: 600;\n}\n.actions-cell {\n  text-align: right;\n  white-space: nowrap;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  padding: 4px 6px;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 17px;\n}\n.btn-icon:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.btn-icon.danger:hover {\n  background: #fde8e8;\n  color: #dc3545;\n}\n.btn-action {\n  padding: 4px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-action.confirm {\n  background: #d4edda;\n  color: #155724;\n}\n.btn-action.confirm:hover {\n  background: #c3e6cb;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-confirmed {\n  background: #d4edda;\n  color: #155724;\n}\n.badge.badge-done {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.badge.badge-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n.badge.badge-brasserie {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge.badge-guinness {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.badge.badge-ht {\n  background: #f0f0f0;\n  color: #495057;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide {\n  max-width: 860px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header .material-icons {\n  color: #6f42c1;\n  font-size: 22px;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n}\n.btn-close-modal:hover {\n  color: #212529;\n}\n.modal-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: #fde8e8;\n  color: #842029;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error .material-icons {\n  font-size: 17px;\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-cancel:hover {\n  background: #f8f9fa;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.btn-save:hover:not(:disabled) {\n  background: #5a2d9c;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group .req {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: #6f42c1;\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.lines-section {\n  margin-top: 16px;\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header .lines-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: #6f42c1;\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 15px;\n}\n.btn-add-line:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 8px;\n  background: #f4f6f8;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e2e8ef;\n}\n.lines-table td {\n  padding: 4px 5px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table tbody tr:hover td {\n  background: #faf8ff;\n}\n.lines-table .ln {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: #adb5bd;\n  font-weight: 700;\n}\n.lines-table .ar {\n  text-align: right;\n}\n.lines-table .amt {\n  font-family: monospace;\n  color: #495057;\n}\n.inp {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.inp:focus {\n  border-color: #6f42c1;\n  background: #fff;\n}\n.inp.ar {\n  text-align: right;\n}\n.btn-del {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #dee2e6;\n}\n.btn-del .material-icons {\n  font-size: 16px;\n}\n.btn-del:hover {\n  color: #dc3545;\n}\n.pmt-total {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 0 0;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #6c757d;\n}\n.pmt-total .total-val {\n  font-size: 16px;\n  font-weight: 700;\n  color: #6f42c1;\n  font-family: monospace;\n}\n/*# sourceMappingURL=ristourne-list.component.css.map */\n'] }]
  }], () => [{ type: RistourneService }, { type: SalesService }, { type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RistourneListComponent, { className: "RistourneListComponent", filePath: "src/app/modules/sales/components/ristournes/ristourne-list.component.ts", lineNumber: 16 });
})();
export {
  RistourneListComponent
};
//# sourceMappingURL=chunk-5PSNZELU.js.map
