import {
  StockService
} from "./chunk-VJTDSZQK.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
import {
  NotificationService
} from "./chunk-LUF5JDG2.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
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
  DecimalPipe,
  HttpClient,
  HttpParams,
  Injectable,
  ViewChild,
  environment,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/shared/services/precompte.service.ts
var PrecompteService = class _PrecompteService {
  constructor(http) {
    this.http = http;
    this.basePrecompte = `${environment.apiUrl}/api/precomptes`;
    this.baseEnlevement = `${environment.apiUrl}/api/enlevements`;
  }
  // ===== Précomptes =====
  downloadPrecompteTemplate() {
    return this.http.get(`${this.basePrecompte}/template`, { responseType: "blob" });
  }
  importPrecomptes(file, companyId) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("companyId", String(companyId));
    return this.http.post(`${this.basePrecompte}/import`, fd);
  }
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
var _c0 = ["importEnlInput"];
var _c1 = ["importPcInput"];
var _c2 = () => ["sale", "vente", "ventes"];
var _c3 = () => ["purchase", "achat", "achats"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function PrecompteConfigComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPcTemplate());
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerPcImport());
    });
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewPc());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Nouveau pr\xE9compte");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.importPcLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importPcLoading ? "Lecture..." : "Importer Excel", " ");
  }
}
function PrecompteConfigComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadEnlTemplate());
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerEnlImport());
    });
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewEnl());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Nouveau frais enl\xE8vement");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.importEnlLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importEnlLoading ? "Lecture..." : "Importer Excel", " ");
  }
}
function PrecompteConfigComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 12);
    \u0275\u0275text(2, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun pr\xE9compte configur\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_26_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewPc());
    });
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Ajouter");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_26_Conditional_3_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26)(9, "button", 27);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_26_Conditional_3_For_12_Template_button_click_9_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editPc(p_r6));
    });
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_26_Conditional_3_For_12_Template_button_click_12_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePc(p_r6.id));
    });
    \u0275\u0275elementStart(13, "span", 12);
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
function PrecompteConfigComponent_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 22);
    \u0275\u0275text(8, "Taux (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, PrecompteConfigComponent_Conditional_26_Conditional_3_For_12_Template, 15, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.precomptes);
  }
}
function PrecompteConfigComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, PrecompteConfigComponent_Conditional_26_Conditional_1_Template, 5, 0, "div", 18)(2, PrecompteConfigComponent_Conditional_26_Conditional_2_Template, 9, 0, "div", 19)(3, PrecompteConfigComponent_Conditional_26_Conditional_3_Template, 13, 0, "table", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingPc ? 1 : ctx_r1.precomptes.length === 0 ? 2 : 3);
  }
}
function PrecompteConfigComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 12);
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun frais d'enl\xE8vement configur\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_27_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewEnl());
    });
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Ajouter");
    \u0275\u0275elementEnd()();
  }
}
function PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", e_r9.clients.length, " suppl\xE9ment(s) client");
  }
}
function PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Montant uniforme");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 30);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 30);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275conditionalCreate(13, PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Conditional_13_Template, 2, 1, "span", 31)(14, PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Conditional_14_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 26)(16, "button", 27);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Template_button_click_16_listener() {
      const e_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editEnl(e_r9));
    });
    \u0275\u0275elementStart(17, "span", 12);
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 28);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Template_button_click_19_listener() {
      const e_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteEnl(e_r9.id));
    });
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const e_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r9.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, e_r9.montantFixe, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, ctx_r1.ttc(e_r9.montantFixe), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, e_r9.coutEnlevement ?? 0, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(e_r9.clients && e_r9.clients.length > 0 ? 13 : 14);
  }
}
function PrecompteConfigComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 22);
    \u0275\u0275text(6, "Montant HT (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 22);
    \u0275\u0275text(8, "Montant TTC (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 22);
    \u0275\u0275text(10, "Co\xFBt HT (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Suppl\xE9ments clients");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, PrecompteConfigComponent_Conditional_27_Conditional_3_For_16_Template, 22, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.enlevements);
  }
}
function PrecompteConfigComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, PrecompteConfigComponent_Conditional_27_Conditional_1_Template, 5, 0, "div", 18)(2, PrecompteConfigComponent_Conditional_27_Conditional_2_Template, 9, 0, "div", 19)(3, PrecompteConfigComponent_Conditional_27_Conditional_3_Template, 17, 0, "table", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingEnl ? 1 : ctx_r1.enlevements.length === 0 ? 2 : 3);
  }
}
function PrecompteConfigComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.importPcRows.length, " ligne(s) en cours de traitement");
  }
}
function PrecompteConfigComponent_Conditional_28_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const \u0275$index_314_r12 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_314_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPartnerFromRow(row_r11));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-sale", \u0275\u0275pureFunction0(8, _c2).includes(ctx_r1.getTypeFromRow(row_r11).toLowerCase()))("badge-purchase", \u0275\u0275pureFunction0(9, _c3).includes(ctx_r1.getTypeFromRow(row_r11).toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeFromRow(row_r11), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getTauxFromRow(row_r11), "%");
  }
}
function PrecompteConfigComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportPcModal());
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, PrecompteConfigComponent_Conditional_28_Conditional_2_Template, 6, 1, "div", 35);
    \u0275\u0275elementStart(3, "div", 36)(4, "span", 12);
    \u0275\u0275text(5, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 37);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_28_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportPcModal());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 38)(12, "div", 39);
    \u0275\u0275text(13, " Colonnes accept\xE9es : ");
    \u0275\u0275elementStart(14, "b");
    \u0275\u0275text(15, "partner_id");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " (nom ou ID), ");
    \u0275\u0275elementStart(17, "b");
    \u0275\u0275text(18, "type_precompte");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " (sale / purchase / vente / achat), ");
    \u0275\u0275elementStart(20, "b");
    \u0275\u0275text(21, "taux_precompte");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, ". Le partenaire est r\xE9solu par ");
    \u0275\u0275elementStart(23, "b");
    \u0275\u0275text(24, "nom exact");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " dans la base de donn\xE9es. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 40)(27, "table", 41)(28, "thead")(29, "tr")(30, "th");
    \u0275\u0275text(31, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 22);
    \u0275\u0275text(37, "Taux (%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody");
    \u0275\u0275repeaterCreate(39, PrecompteConfigComponent_Conditional_28_For_40_Template, 10, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 42)(42, "button", 43);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_28_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportPcModal());
    });
    \u0275\u0275text(43, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 44);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_28_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImportPc());
    });
    \u0275\u0275elementStart(45, "span", 12);
    \u0275\u0275text(46, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importPcLoading ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Aper\xE7u import pr\xE9comptes \u2014 ", ctx_r1.importPcRows.length, " ligne(s)");
    \u0275\u0275advance(32);
    \u0275\u0275repeater(ctx_r1.importPcRows);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.importPcLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Confirmer l'import (", ctx_r1.importPcRows.length, " lignes) ");
  }
}
function PrecompteConfigComponent_Conditional_29_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 12);
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
function PrecompteConfigComponent_Conditional_29_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("value", c_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.name);
  }
}
function PrecompteConfigComponent_Conditional_29_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275property("value", t_r15.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15.label);
  }
}
function PrecompteConfigComponent_Conditional_29_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r16 = ctx.$implicit;
    \u0275\u0275property("value", t_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r16, "%");
  }
}
function PrecompteConfigComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPcModal = false);
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_29_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "span", 12);
    \u0275\u0275text(4, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPcModal = false);
    });
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PrecompteConfigComponent_Conditional_29_Conditional_10_Template, 4, 1, "div", 49);
    \u0275\u0275elementStart(11, "div", 50)(12, "div", 51)(13, "div", 52)(14, "label");
    \u0275\u0275text(15, "Partenaire ");
    \u0275\u0275elementStart(16, "span", 53);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_29_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pcForm.partnerId, $event) || (ctx_r1.pcForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 55);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, PrecompteConfigComponent_Conditional_29_For_22_Template, 2, 2, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "label");
    \u0275\u0275text(25, "Type ");
    \u0275\u0275elementStart(26, "span", 53);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_29_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pcForm.typePrecompte, $event) || (ctx_r1.pcForm.typePrecompte = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(29, PrecompteConfigComponent_Conditional_29_For_30_Template, 2, 2, "option", 55, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 56)(32, "label");
    \u0275\u0275text(33, "Taux (%) ");
    \u0275\u0275elementStart(34, "span", 53);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_29_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pcForm.tauxPrecompte, $event) || (ctx_r1.pcForm.tauxPrecompte = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(37, PrecompteConfigComponent_Conditional_29_For_38_Template, 2, 2, "option", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 42)(40, "button", 43);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_29_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPcModal = false);
    });
    \u0275\u0275text(41, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 44);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_29_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePc());
    });
    \u0275\u0275elementStart(43, "span", 12);
    \u0275\u0275text(44, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingPc ? "Modifier le pr\xE9compte" : "Nouveau pr\xE9compte");
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
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingPc ? "Enregistrement..." : "Enregistrer", " ");
  }
}
function PrecompteConfigComponent_Conditional_30_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 12);
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
function PrecompteConfigComponent_Conditional_30_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
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
function PrecompteConfigComponent_Conditional_30_Conditional_53_For_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275property("value", c_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21.name);
  }
}
function PrecompteConfigComponent_Conditional_30_Conditional_53_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_30_Conditional_53_For_10_Template_select_ngModelChange_2_listener($event) {
      const ec_r20 = \u0275\u0275restoreView(_r19).$implicit;
      \u0275\u0275twoWayBindingSet(ec_r20.partnerId, $event) || (ec_r20.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 55);
    \u0275\u0275text(4, "-- Client --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, PrecompteConfigComponent_Conditional_30_Conditional_53_For_10_For_6_Template, 2, 2, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 69)(8, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_30_Conditional_53_For_10_Template_input_ngModelChange_8_listener($event) {
      const ec_r20 = \u0275\u0275restoreView(_r19).$implicit;
      \u0275\u0275twoWayBindingSet(ec_r20.montant, $event) || (ec_r20.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "button", 72);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_30_Conditional_53_For_10_Template_button_click_10_listener() {
      const \u0275$index_538_r22 = \u0275\u0275restoreView(_r19).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeEnlClient(\u0275$index_538_r22));
    });
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ec_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ec_r20.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clients);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ec_r20.montant);
  }
}
function PrecompteConfigComponent_Conditional_30_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 67)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 69);
    \u0275\u0275text(6, "Tarif client (FCFA/unit\xE9)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, PrecompteConfigComponent_Conditional_30_Conditional_53_For_10_Template, 13, 3, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.enlForm.clients);
  }
}
function PrecompteConfigComponent_Conditional_30_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 68);
    \u0275\u0275text(1, "Aucun tarif sp\xE9cifique \u2014 le tarif de base s'applique uniform\xE9ment.");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click.self", function PrecompteConfigComponent_Conditional_30_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEnlModal = false);
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "div", 36)(3, "span", 12);
    \u0275\u0275text(4, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEnlModal = false);
    });
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PrecompteConfigComponent_Conditional_30_Conditional_10_Template, 4, 1, "div", 49);
    \u0275\u0275elementStart(11, "div", 50)(12, "div", 51)(13, "div", 56)(14, "label");
    \u0275\u0275text(15, "Cat\xE9gorie de produit ");
    \u0275\u0275elementStart(16, "span", 53);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_30_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.enlForm.categoryId, $event) || (ctx_r1.enlForm.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 55);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, PrecompteConfigComponent_Conditional_30_For_22_Template, 2, 2, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "label");
    \u0275\u0275text(25, "Montant factur\xE9 HT / unit\xE9 (FCFA) ");
    \u0275\u0275elementStart(26, "span", 53);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_30_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.enlForm.montantFixe, $event) || (ctx_r1.enlForm.montantFixe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 56)(30, "label");
    \u0275\u0275text(31, "\u2248 Montant TTC / unit\xE9 (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 60);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 56)(35, "label");
    \u0275\u0275text(36, "Co\xFBt d'enl\xE8vement HT / unit\xE9 (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function PrecompteConfigComponent_Conditional_30_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.enlForm.coutEnlevement, $event) || (ctx_r1.enlForm.coutEnlevement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 62)(39, "span");
    \u0275\u0275text(40, "Suppl\xE9ments clients (facultatif)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "p", 63);
    \u0275\u0275text(42, " Le montant suppl\xE9mentaire s'");
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44, "ajoute");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " au montant fixe lors de la facturation. Il est comptabilis\xE9 dans un compte distinct (ex. surcharge logistique). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 64)(47, "span", 65);
    \u0275\u0275text(48, "Tarifs clients sp\xE9cifiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 66);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_30_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEnlClient());
    });
    \u0275\u0275elementStart(50, "span", 12);
    \u0275\u0275text(51, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Ajouter client");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(53, PrecompteConfigComponent_Conditional_30_Conditional_53_Template, 11, 0, "table", 67)(54, PrecompteConfigComponent_Conditional_30_Conditional_54_Template, 2, 0, "p", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 42)(56, "button", 43);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_30_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEnlModal = false);
    });
    \u0275\u0275text(57, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 44);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_30_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEnl());
    });
    \u0275\u0275elementStart(59, "span", 12);
    \u0275\u0275text(60, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Enregistrer ");
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
    \u0275\u0275advance(4);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(33, 9, ctx_r1.ttc(ctx_r1.enlForm.montantFixe), "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.enlForm.coutEnlevement);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r1.enlForm.clients && ctx_r1.enlForm.clients.length > 0 ? 53 : 54);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingEnl);
  }
}
function PrecompteConfigComponent_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.importEnlRows.length, " ligne(s) en cours de traitement");
  }
}
function PrecompteConfigComponent_Conditional_31_For_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_31_For_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "\u2717");
    \u0275\u0275elementEnd();
  }
}
function PrecompteConfigComponent_Conditional_31_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 79);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275conditionalCreate(10, PrecompteConfigComponent_Conditional_31_For_27_Conditional_10_Template, 2, 0, "span", 80)(11, PrecompteConfigComponent_Conditional_31_For_27_Conditional_11_Template, 2, 0, "span", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const \u0275$index_632_r25 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_632_r25 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24["Cat\xE9gorie d'article"] || row_r24["Cat\xE9gorie"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24["Montant de l'enl\xE8vement"] ?? row_r24["Montant de l'enl\xE8vement"] ?? "0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24["Cout enlevement"] ?? row_r24["Co\xFBt enl\xE8vement"] ?? "0");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getCategoryIdByName(row_r24["Cat\xE9gorie d'article"] || row_r24["Cat\xE9gorie"]) ? 10 : 11);
  }
}
function PrecompteConfigComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportEnlModal());
    });
    \u0275\u0275elementStart(1, "div", 73);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_31_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, PrecompteConfigComponent_Conditional_31_Conditional_2_Template, 6, 1, "div", 74);
    \u0275\u0275elementStart(3, "div", 36)(4, "h2")(5, "span", 75);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 76);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_31_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportEnlModal());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 77)(12, "table", 41)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Cat\xE9gorie d'article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 22);
    \u0275\u0275text(20, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 22);
    \u0275\u0275text(22, "Co\xFBt HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "R\xE9solu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, PrecompteConfigComponent_Conditional_31_For_27_Template, 12, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 42)(29, "button", 43);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_31_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportEnlModal());
    });
    \u0275\u0275text(30, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 78);
    \u0275\u0275listener("click", function PrecompteConfigComponent_Conditional_31_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImportEnl());
    });
    \u0275\u0275elementStart(32, "span", 12);
    \u0275\u0275text(33, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importEnlLoading ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Aper\xE7u import enl\xE8vements (", ctx_r1.importEnlRows.length, " ligne(s)) ");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.importEnlRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Importer (", ctx_r1.importEnlRows.length, " lignes) ");
  }
}
var ENL_HEADERS = ["Cat\xE9gorie d'article", "Montant de l'enl\xE8vement", "Cout enlevement", "Date de l'enl\xE8vement", "Actif", "Clients sp\xE9cifiques"];
var ENL_SAMPLE = ["Alcools mixtes 12", "600", "528.45", "", "OUI", "NON"];
var PrecompteConfigComponent = class _PrecompteConfigComponent {
  constructor(svc, salesSvc, stockSvc, auth, notificationService) {
    this.svc = svc;
    this.salesSvc = salesSvc;
    this.stockSvc = stockSvc;
    this.auth = auth;
    this.notificationService = notificationService;
    this.showImportPcModal = false;
    this.importPcRows = [];
    this.importPcLoading = false;
    this.PC_HEADERS = ["partnerId", "typePrecompte", "tauxPrecompte"];
    this.pcFile = null;
    this.showImportEnlModal = false;
    this.importEnlRows = [];
    this.importEnlLoading = false;
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
    return this.auth.getCompanyId();
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
    this.svc.deletePrecompte(id).subscribe({
      next: () => this.loadPrecomptes(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
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
  /** TTC = HT × (1 + 19,25%), pour vérifier le calcul appliqué en facturation */
  ttc(montantHT) {
    return (montantHT ?? 0) * 1.1925;
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
    this.svc.deleteEnlevement(id).subscribe({
      next: () => this.loadEnlevements(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  typeLabel(t) {
    return t === "sale" ? "Ventes" : "Achats";
  }
  // ===== Import Excel Enlèvements =====
  downloadPcTemplate() {
    this.svc.downloadPrecompteTemplate().subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "modele_precomptes.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
  triggerPcImport() {
    this.importPcInput.nativeElement.value = "";
    this.importPcInput.nativeElement.click();
  }
  onImportPcFileChange(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.pcFile = file;
      this.importPcLoading = true;
      try {
        const rows = yield parseExcelFile(file);
        this.importPcRows = rows.filter((r) => r["partner_id"] || r["Partner_ID"] || r["partnerId"] || r["PartnerId"] || r["Partenaire"] || r["partenaire"] || r["ID partenaire"] || r["id partenaire"] || r["partner_name"] || r["Nom du partenaire"]);
        if (this.importPcRows.length === 0) {
          alert('Aucune ligne valide. Colonne attendue : "partner_id" ou "Partenaire"');
          this.importPcLoading = false;
          return;
        }
        this.showImportPcModal = true;
      } catch (e) {
        alert("Erreur : " + e.message);
      }
      this.importPcLoading = false;
    });
  }
  closeImportPcModal() {
    this.showImportPcModal = false;
    this.importPcRows = [];
  }
  confirmImportPc() {
    return __async(this, null, function* () {
      if (!this.pcFile) {
        alert("Fichier introuvable.");
        return;
      }
      this.importPcLoading = true;
      this.svc.importPrecomptes(this.pcFile, this.companyId).subscribe({
        next: (res) => {
          this.importPcLoading = false;
          this.closeImportPcModal();
          this.loadPrecomptes();
          const msg = res?.message || "Import termin\xE9";
          const errors = res?.errors?.length ? `

${res.errors.join("\n")}` : "";
          const warnings = res?.warnings?.length ? `

Avertissements :
${res.warnings.join("\n")}` : "";
          alert(msg + errors + warnings);
        },
        error: () => {
          this.importPcLoading = false;
          alert("Erreur import pr\xE9comptes");
        }
      });
    });
  }
  // ===== Import Excel Enlèvements =====
  downloadEnlTemplate() {
    downloadExcelTemplate(ENL_HEADERS, ENL_SAMPLE, "modele_enlevements.xlsx");
  }
  triggerEnlImport() {
    this.importEnlInput.nativeElement.value = "";
    this.importEnlInput.nativeElement.click();
  }
  onImportEnlFileChange(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.importEnlLoading = true;
      try {
        const rows = yield parseExcelFile(file);
        this.importEnlRows = rows.filter((r) => r["Cat\xE9gorie d'article"] || r["Cat\xE9gorie"]);
        if (this.importEnlRows.length === 0) {
          alert(`Aucune ligne valide (colonne "Cat\xE9gorie d'article" requise)`);
          this.importEnlLoading = false;
          return;
        }
        this.showImportEnlModal = true;
      } catch (e) {
        alert("Erreur : " + e.message);
      }
      this.importEnlLoading = false;
    });
  }
  closeImportEnlModal() {
    this.showImportEnlModal = false;
    this.importEnlRows = [];
  }
  norm(s) {
    return (s || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ");
  }
  getCategoryIdByName(name) {
    if (!name)
      return void 0;
    const n = this.norm(name);
    return this.categories.find((c) => this.norm(c.name ?? "") === n)?.id;
  }
  getOrCreateCategoryId(name) {
    return __async(this, null, function* () {
      if (!name)
        return void 0;
      const existing = this.getCategoryIdByName(name);
      if (existing)
        return existing;
      try {
        const created = yield this.stockSvc.createCategory({ name, companyId: this.companyId }).toPromise();
        if (created?.id) {
          this.categories.push(created);
          return created.id;
        }
      } catch (e) {
      }
      return void 0;
    });
  }
  confirmImportEnl() {
    return __async(this, null, function* () {
      this.importEnlLoading = true;
      let done = 0, noCat = 0, apiErr = 0;
      for (const row of this.importEnlRows) {
        const catName = String(row["Cat\xE9gorie d'article"] || row["Cat\xE9gorie"] || "").trim();
        const categoryId = yield this.getOrCreateCategoryId(catName);
        if (!categoryId) {
          noCat++;
          continue;
        }
        const montantRaw = row["Montant de l'enl\xE8vement"] ?? row["Montant de l'enlevement"] ?? row["Montant de l'enl\xE8vement"] ?? 0;
        const coutRaw = row["Cout enlevement"] ?? row["Co\xFBt enl\xE8vement"] ?? row["Co\xFBt enl\xE8vement"] ?? 0;
        const dto = {
          categoryId,
          montantFixe: parseFloat(String(montantRaw)) || 0,
          coutEnlevement: parseFloat(String(coutRaw)) || 0,
          companyId: this.companyId,
          clients: []
        };
        try {
          yield this.svc.saveEnlevement(dto).toPromise();
          done++;
        } catch (e) {
          apiErr++;
        }
      }
      this.importEnlLoading = false;
      this.closeImportEnlModal();
      this.loadEnlevements();
      const msg = [`Import termin\xE9 : ${done} cr\xE9\xE9(s)`];
      if (noCat > 0)
        msg.push(`${noCat} cat\xE9gorie(s) introuvable(s)`);
      if (apiErr > 0)
        msg.push(`${apiErr} erreur(s) serveur`);
      alert(msg.join("\n"));
    });
  }
  getPartnerFromRow(row) {
    return String(row["partner_id"] ?? row["Partner_ID"] ?? row["partnerId"] ?? row["PartnerId"] ?? row["Partenaire"] ?? row["partenaire"] ?? row["ID partenaire"] ?? row["partner_name"] ?? row["Nom du partenaire"] ?? "").trim();
  }
  getTypeFromRow(row) {
    return String(row["type_precompte"] ?? row["typePrecompte"] ?? row["type"] ?? row["Type"] ?? row["Type de pr\xE9compte"] ?? "").trim();
  }
  getTauxFromRow(row) {
    return String(row["taux_precompte"] ?? row["tauxPrecompte"] ?? row["Taux (%)"] ?? row["Taux"] ?? row["taux"] ?? "").trim();
  }
  emptyPc() {
    return { partnerId: 0, typePrecompte: "sale", tauxPrecompte: 2, companyId: this.companyId };
  }
  emptyEnl() {
    return { categoryId: 0, montantFixe: 0, coutEnlevement: 0, companyId: this.companyId, clients: [] };
  }
  static {
    this.\u0275fac = function PrecompteConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrecompteConfigComponent)(\u0275\u0275directiveInject(PrecompteService), \u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrecompteConfigComponent, selectors: [["app-precompte-config"]], viewQuery: function PrecompteConfigComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importEnlInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importPcInput = _t.first);
      }
    }, decls: 32, vars: 11, consts: [["importEnlInput", ""], ["importPcInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-subtitle"], [1, "header-right", 2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "material-icons"], [1, "card"], [1, "modal-overlay"], [1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-new", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "material-icons", "spin"], [1, "text-right"], [1, "font-bold"], [1, "badge"], [1, "text-right", "font-mono", "font-bold"], [1, "actions-cell"], [1, "btn-icon", 3, "click"], [1, "btn-icon", "danger", 3, "click"], [1, "text-right", "font-mono"], [1, "text-right", "font-mono", "text-muted"], [1, "clients-count"], [1, "text-muted"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "720px", "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.92)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [2, "padding", "0 16px 10px 16px"], [2, "font-size", "12px", "color", "#6c757d", "line-height", "1.6"], [2, "overflow-x", "auto", "max-height", "50vh", "padding", "0 16px 16px 16px"], [1, "cfg-table"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [1, "modal-box", 2, "max-width", "480px", 3, "click"], [1, "modal-error"], [1, "modal-body"], [1, "form-grid"], [1, "form-group", "form-full"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "form-group"], [1, "modal-overlay", 3, "click.self"], [1, "modal-box", "modal-wide"], ["type", "number", "step", "0.01", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-separator"], [2, "font-size", "12px", "color", "#6c757d", "margin", "0 0 8px"], [1, "lines-header"], [1, "lines-title"], [1, "btn-add-line", 3, "click"], [1, "lines-table"], [1, "text-muted", 2, "font-size", "13px", "padding", "8px 0"], [1, "ar"], [1, "inp", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "inp", "ar", 3, "ngModelChange", "ngModel"], [1, "btn-del", 3, "click"], [1, "modal-box", 2, "max-width", "650px", "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "material-icons", 2, "vertical-align", "middle", "color", "#017E84"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "50vh"], [1, "btn-save", 3, "click"], [1, "text-right", "text-muted"], [2, "color", "#198754"], ["title", "Cat\xE9gorie introuvable", 2, "color", "#dc3545"]], template: function PrecompteConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "input", 3, 0);
        \u0275\u0275listener("change", function PrecompteConfigComponent_Template_input_change_1_listener($event) {
          return ctx.onImportEnlFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "input", 3, 1);
        \u0275\u0275listener("change", function PrecompteConfigComponent_Template_input_change_3_listener($event) {
          return ctx.onImportPcFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "span", 6);
        \u0275\u0275text(8, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div")(10, "h1", 7);
        \u0275\u0275text(11, "Pr\xE9comptes & Enl\xE8vements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13, "Configuration des retenues \xE0 la source et frais d'enl\xE8vement");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 9);
        \u0275\u0275conditionalCreate(15, PrecompteConfigComponent_Conditional_15_Template, 12, 2)(16, PrecompteConfigComponent_Conditional_16_Template, 12, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
        \u0275\u0275listener("click", function PrecompteConfigComponent_Template_button_click_18_listener() {
          return ctx.activeTab = "precomptes";
        });
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, "percent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Pr\xE9comptes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 11);
        \u0275\u0275listener("click", function PrecompteConfigComponent_Template_button_click_22_listener() {
          return ctx.activeTab = "enlevements";
        });
        \u0275\u0275elementStart(23, "span", 12);
        \u0275\u0275text(24, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Frais d'enl\xE8vement ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(26, PrecompteConfigComponent_Conditional_26_Template, 4, 1, "div", 13);
        \u0275\u0275conditionalCreate(27, PrecompteConfigComponent_Conditional_27_Template, 4, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(28, PrecompteConfigComponent_Conditional_28_Template, 48, 4, "div", 14);
        \u0275\u0275conditionalCreate(29, PrecompteConfigComponent_Conditional_29_Template, 46, 8, "div", 14);
        \u0275\u0275conditionalCreate(30, PrecompteConfigComponent_Conditional_30_Template, 62, 12, "div", 14);
        \u0275\u0275conditionalCreate(31, PrecompteConfigComponent_Conditional_31_Template, 35, 3, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.activeTab === "precomptes" ? 15 : 16);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeTab === "precomptes");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "enlevements");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "precomptes" ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "enlevements" ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showImportPcModal ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPcModal ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showEnlModal ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showImportEnlModal ? 31 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: rgba(139, 92, 246, 0.9);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n  border-bottom-color: rgba(139, 92, 246, 0.9);\n  font-weight: 700;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.clients-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px 6px;\n  border-radius: 4px;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--bg-hover);\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-sale[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-purchase[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  padding: 4px;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.cfg-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.cfg-table[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.cfg-table[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.cfg-table[_ngcontent-%COMP%]   .font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\n.section-separator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 18px 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-separator[_ngcontent-%COMP%]::before, \n.section-separator[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #dee2e6;\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header[_ngcontent-%COMP%]   .lines-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: rgba(139, 92, 246, 0.9);\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 5px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inp[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-surface);\n}\n.inp.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n}\n.btn-del[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n}\n/*# sourceMappingURL=precompte-config.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrecompteConfigComponent, [{
    type: Component,
    args: [{ selector: "app-precompte-config", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
<!-- Input file cach\xE9 pour import -->
  <input #importEnlInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportEnlFileChange($event)" />
  <input #importPcInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportPcFileChange($event)" />


  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">account_balance</span>
      <div>
        <h1 class="page-title">Pr\xE9comptes & Enl\xE8vements</h1>
        <p class="page-subtitle">Configuration des retenues \xE0 la source et frais d'enl\xE8vement</p>
      </div>
    </div>
    <div class="header-right" style="display:flex;gap:8px;align-items:center">
      @if (activeTab === 'precomptes') {
        <button class="btn-outline" (click)="downloadPcTemplate()">
          <span class="material-icons">download</span> Mod\xE8le Excel
        </button>
        <button class="btn-import" (click)="triggerPcImport()" [disabled]="importPcLoading">
          <span class="material-icons">upload_file</span> {{ importPcLoading ? 'Lecture...' : 'Importer Excel' }}
        </button>
        <button class="btn-new" (click)="openNewPc()"><span class="material-icons">add</span> Nouveau pr\xE9compte</button>
      } @else {
        <button class="btn-outline" (click)="downloadEnlTemplate()">
          <span class="material-icons">download</span> Mod\xE8le Excel
        </button>

        <button class="btn-import" (click)="triggerEnlImport()" [disabled]="importEnlLoading">
          <span class="material-icons">upload_file</span> {{ importEnlLoading ? 'Lecture...' : 'Importer Excel' }}
        </button>
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
              <th class="text-right">Montant HT (FCFA)</th>
              <th class="text-right">Montant TTC (FCFA)</th>
              <th class="text-right">Co\xFBt HT (FCFA)</th>
              <th>Suppl\xE9ments clients</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (e of enlevements; track e.id) {
              <tr>
                <td class="font-bold">{{ e.categoryName }}</td>
                <td class="text-right font-mono">{{ e.montantFixe | number:'1.2-2' }}</td>
                <td class="text-right font-mono text-muted">{{ ttc(e.montantFixe) | number:'1.0-0' }}</td>
                <td class="text-right font-mono text-muted">{{ (e.coutEnlevement ?? 0) | number:'1.2-2' }}</td>
                <td>
                  @if (e.clients && e.clients.length > 0) {
                    <span class="clients-count">{{ e.clients.length }} suppl\xE9ment(s) client</span>
                  } @else {
                    <span class="text-muted">Montant uniforme</span>
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

<!-- ===== PR\xC9COMPTES MODAL IMPORT EXCEL ===== -->
@if (showImportPcModal) {
  <div class="modal-overlay" (click)="closeImportPcModal()">
    <div class="modal-box" (click)="$event.stopPropagation()" style="max-width:720px;position:relative">

      @if (importPcLoading) {
        <div style="position:absolute;inset:0;background:rgba(255,255,255,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
          <div class="spinner"></div>
          <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
          <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importPcRows.length }} ligne(s) en cours de traitement</p>
        </div>
      }

      <div class="modal-header">
        <span class="material-icons">percent</span>
        <h2>Aper\xE7u import pr\xE9comptes \u2014 {{ importPcRows.length }} ligne(s)</h2>
        <button class="btn-close-modal" (click)="closeImportPcModal()"><span class="material-icons">close</span></button>
      </div>

      <div style="padding:0 16px 10px 16px">
        <div style="font-size:12px;color:#6c757d;line-height:1.6">
          Colonnes accept\xE9es : <b>partner_id</b> (nom ou ID), <b>type_precompte</b> (sale / purchase / vente / achat), <b>taux_precompte</b>.
          Le partenaire est r\xE9solu par <b>nom exact</b> dans la base de donn\xE9es.
        </div>
      </div>

      <div style="overflow-x:auto;max-height:50vh;padding:0 16px 16px 16px">
        <table class="cfg-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Partenaire</th>
              <th>Type</th>
              <th class="text-right">Taux (%)</th>
            </tr>
          </thead>
          <tbody>
            @for (row of importPcRows; track $index; let i=$index) {
              <tr>
                <td class="text-muted">{{ i+1 }}</td>
                <td class="font-bold">{{ getPartnerFromRow(row) }}</td>
                <td>
                  <span class="badge"
                    [class.badge-sale]="['sale','vente','ventes'].includes(getTypeFromRow(row).toLowerCase())"
                    [class.badge-purchase]="['purchase','achat','achats'].includes(getTypeFromRow(row).toLowerCase())">
                    {{ getTypeFromRow(row) }}
                  </span>
                </td>
                <td class="text-right font-mono">{{ getTauxFromRow(row) }}%</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <div class="modal-footer">
        <button class="btn-cancel" (click)="closeImportPcModal()">Annuler</button>
        <button class="btn-save" (click)="confirmImportPc()" [disabled]="importPcLoading">
          <span class="material-icons">check_circle</span> Confirmer l'import ({{ importPcRows.length }} lignes)
        </button>
      </div>
    </div>
  </div>
}

<!-- ===== PR\xC9COMPTE MODAL CR\xC9ATION / \xC9DITION ===== -->
@if (showPcModal) {
  <div class="modal-overlay" (click)="showPcModal = false">
    <div class="modal-box" (click)="$event.stopPropagation()" style="max-width:480px">
      <div class="modal-header">
        <span class="material-icons">percent</span>
        <h2>{{ editingPc ? 'Modifier le pr\xE9compte' : 'Nouveau pr\xE9compte' }}</h2>
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
          <span class="material-icons">save</span> {{ savingPc ? 'Enregistrement...' : 'Enregistrer' }}
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
            <label>Montant factur\xE9 HT / unit\xE9 (FCFA) <span class="req">*</span></label>
            <input type="number" step="0.01" class="form-control" [(ngModel)]="enlForm.montantFixe" min="0" />
          </div>
          <div class="form-group">
            <label>\u2248 Montant TTC / unit\xE9 (FCFA)</label>
            <input type="text" class="form-control" [value]="ttc(enlForm.montantFixe) | number:'1.0-0'" disabled />
          </div>
          <div class="form-group">
            <label>Co\xFBt d'enl\xE8vement HT / unit\xE9 (FCFA)</label>
            <input type="number" class="form-control" [(ngModel)]="enlForm.coutEnlevement" min="0" step="0.01" />
          </div>
        </div>

        <!-- Suppl\xE9ments clients -->
        <div class="section-separator">
          <span>Suppl\xE9ments clients (facultatif)</span>
        </div>
        <p style="font-size:12px;color:#6c757d;margin:0 0 8px">
          Le montant suppl\xE9mentaire s'<strong>ajoute</strong> au montant fixe lors de la facturation.
          Il est comptabilis\xE9 dans un compte distinct (ex. surcharge logistique).
        </p>
        <div class="lines-header">
          <span class="lines-title">Tarifs clients sp\xE9cifiques</span>
          <button class="btn-add-line" (click)="addEnlClient()"><span class="material-icons">add</span> Ajouter client</button>
        </div>
        @if (enlForm.clients && enlForm.clients.length > 0) {
          <table class="lines-table">
            <thead>
              <tr>
                <th>Client</th>
                <th class="ar">Tarif client (FCFA/unit\xE9)</th>
                <th></th>
              </tr>
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
          <p class="text-muted" style="font-size:13px; padding: 8px 0;">Aucun tarif sp\xE9cifique \u2014 le tarif de base s'applique uniform\xE9ment.</p>
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

<!-- Modal Import Enl\xE8vements Excel -->
@if (showImportEnlModal) {
  <div class="modal-overlay" (click)="closeImportEnlModal()">
    <div class="modal-box" (click)="$event.stopPropagation()" style="max-width:650px;position:relative">
      @if (importEnlLoading) {
        <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
          <div class="spinner"></div>
          <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
          <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importEnlRows.length }} ligne(s) en cours de traitement</p>
        </div>
      }
      <div class="modal-header">
        <h2><span class="material-icons" style="vertical-align:middle;color:#017E84">upload_file</span>
          Aper\xE7u import enl\xE8vements ({{ importEnlRows.length }} ligne(s))
        </h2>
        <button class="btn-close" (click)="closeImportEnlModal()"><span class="material-icons">close</span></button>
      </div>
      <div style="overflow-x:auto;max-height:50vh">
        <table class="cfg-table">
          <thead><tr><th>#</th><th>Cat\xE9gorie d'article</th><th class="text-right">Montant TTC</th><th class="text-right">Co\xFBt HT</th><th>R\xE9solu</th></tr></thead>
          <tbody>
            @for (row of importEnlRows; track $index; let i = $index) {
              <tr>
                <td class="text-muted">{{ i+1 }}</td>
                <td class="font-bold">{{ row["Cat\xE9gorie d'article"] || row['Cat\xE9gorie'] }}</td>
                <td class="text-right">{{ row["Montant de l'enl\xE8vement"] ?? row["Montant de l'enl\\u00e8vement"] ?? '0' }}</td>
                <td class="text-right text-muted">{{ row["Cout enlevement"] ?? row["Co\\u00fbt enl\\u00e8vement"] ?? '0' }}</td>
                <td>
                  @if (getCategoryIdByName(row["Cat\xE9gorie d'article"] || row['Cat\xE9gorie'])) {
                    <span style="color:#198754">\u2713</span>
                  } @else {
                    <span style="color:#dc3545" title="Cat\xE9gorie introuvable">\u2717</span>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="closeImportEnlModal()">Annuler</button>
        <button class="btn-save" (click)="confirmImportEnl()">
          <span class="material-icons">check_circle</span> Importer ({{ importEnlRows.length }} lignes)
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/sales/components/precomptes/precompte-config.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-icon {\n  font-size: 28px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: rgba(139, 92, 246, 0.9);\n}\n.tab-btn.active {\n  color: rgba(139, 92, 246, 0.9);\n  border-bottom-color: rgba(139, 92, 246, 0.9);\n  font-weight: 700;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 11px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.clients-count {\n  font-size: 12px;\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.actions-cell {\n  text-align: right;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px 6px;\n  border-radius: 4px;\n}\n.btn-icon .material-icons {\n  font-size: 17px;\n}\n.btn-icon:hover {\n  color: var(--text-primary);\n  background: var(--bg-hover);\n}\n.btn-icon.danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-sale {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-purchase {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide {\n  max-width: 720px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header .material-icons {\n  color: rgba(139, 92, 246, 0.9);\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  padding: 4px;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n}\n.btn-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  background: var(--bg-hover);\n}\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-import .material-icons {\n  font-size: 16px;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.cfg-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table th {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table td {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.cfg-table .text-right {\n  text-align: right;\n}\n.cfg-table .text-muted {\n  color: var(--text-muted);\n}\n.cfg-table .font-bold {\n  font-weight: 600;\n}\n.modal-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-save:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\n.section-separator {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 18px 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-separator::before,\n.section-separator::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #dee2e6;\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header .lines-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: rgba(139, 92, 246, 0.9);\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-add-line .material-icons {\n  font-size: 15px;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.lines-table td {\n  padding: 4px 5px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table .ar {\n  text-align: right;\n}\n.inp {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-surface);\n}\n.inp.ar {\n  text-align: right;\n}\n.btn-del {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n}\n.btn-del .material-icons {\n  font-size: 16px;\n}\n.btn-del:hover {\n  color: var(--danger);\n}\n/*# sourceMappingURL=precompte-config.component.css.map */\n'] }]
  }], () => [{ type: PrecompteService }, { type: SalesService }, { type: StockService }, { type: AuthService }, { type: NotificationService }], { importEnlInput: [{
    type: ViewChild,
    args: ["importEnlInput"]
  }], importPcInput: [{
    type: ViewChild,
    args: ["importPcInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrecompteConfigComponent, { className: "PrecompteConfigComponent", filePath: "app/modules/sales/components/precomptes/precompte-config.component.ts", lineNumber: 24 });
})();
export {
  PrecompteConfigComponent
};
//# sourceMappingURL=chunk-5CKK4IQF.js.map
