import {
  EnlevementService
} from "./chunk-4EAQGYLV.js";
import {
  require_exceljs_min
} from "./chunk-V5EAPQSQ.js";
import {
  E,
  autoTable
} from "./chunk-AJFTTPVD.js";
import "./chunk-7YWLATDR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/modules/purchases/components/rapports/rapport-enlevement.component.ts
var ExcelJS = __toESM(require_exceljs_min());
var _forTrack0 = ($index, $item) => $item.partnerId;
function RapportEnlevementComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 17);
    \u0275\u0275listener("click", function RapportEnlevementComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function RapportEnlevementComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " PDF ");
    \u0275\u0275elementEnd()();
  }
}
function RapportEnlevementComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9ration\u2026 ");
  }
}
function RapportEnlevementComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " G\xE9n\xE9rer ");
  }
}
function RapportEnlevementComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg);
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 4);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun co\xFBt d'enl\xE8vement calcul\xE9 sur cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Article");
    \u0275\u0275elementEnd();
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "P.U. (FCFA)");
    \u0275\u0275elementEnd();
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r6.productName || "\u2014");
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, l_r6.montantUnit, "1.0-0"));
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_For_14_Conditional_1_Template, 2, 1, "td", 55);
    \u0275\u0275elementStart(2, "td", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 57);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_For_14_Conditional_7_Template, 3, 4, "td", 57);
    \u0275\u0275elementStart(8, "td", 54);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subGroupBy === "articles" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, l_r6.quantite, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.subGroupBy === "articles" ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, l_r6.montantTotal, "1.0-0"));
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49)(2, "thead")(3, "tr");
    \u0275\u0275conditionalCreate(4, RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_Conditional_4_Template, 2, 0, "th");
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 50);
    \u0275\u0275text(8, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_Conditional_9_Template, 2, 0, "th", 50);
    \u0275\u0275elementStart(10, "th", 51);
    \u0275\u0275text(11, "Total (FCFA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_For_14_Template, 11, 11, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "tfoot")(16, "tr", 52)(17, "td", 53);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 54);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const entry_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.subGroupBy === "articles" ? 4 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.subGroupBy === "articles" ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.catLines(entry_r5));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("colspan", ctx_r1.subGroupBy === "articles" ? 4 : 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Sous-total ", entry_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 5, entry_r5.totalAmount, "1.0-0"), " FCFA");
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275listener("click", function RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Template_div_click_1_listener() {
      const entry_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePartner(entry_r5.partnerName));
    });
    \u0275\u0275elementStart(2, "div", 41)(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 46)(12, "span", 47);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Conditional_15_Template, 22, 8, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-open", ctx_r1.isExpanded(entry_r5.partnerName));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded(entry_r5.partnerName) ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.partnerName.charAt(0).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.catLines(entry_r5).length, " ligne(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 8, entry_r5.totalAmount, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded(entry_r5.partnerName) ? 15 : -1);
  }
}
function RapportEnlevementComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "span", 4);
    \u0275\u0275text(4, "local_shipping");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 25);
    \u0275\u0275text(7, "Total enl\xE8vements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementStart(11, "span", 27);
    \u0275\u0275text(12, "FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 22)(14, "div", 28)(15, "span", 4);
    \u0275\u0275text(16, "store");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 24)(18, "div", 25);
    \u0275\u0275text(19, "Fournisseurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 22)(23, "div", 29)(24, "span", 4);
    \u0275\u0275text(25, "category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 24)(27, "div", 25);
    \u0275\u0275text(28, "Cat\xE9gories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 26);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 30)(32, "span", 31)(33, "span", 4);
    \u0275\u0275text(34, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 32)(37, "button", 33);
    \u0275\u0275listener("click", function RapportEnlevementComponent_Conditional_40_Conditional_1_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275elementStart(38, "span", 4);
    \u0275\u0275text(39, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Tout ouvrir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 33);
    \u0275\u0275listener("click", function RapportEnlevementComponent_Conditional_40_Conditional_1_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275elementStart(42, "span", 4);
    \u0275\u0275text(43, "unfold_less");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Tout fermer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 34);
    \u0275\u0275repeaterCreate(46, RapportEnlevementComponent_Conditional_40_Conditional_1_For_47_Template, 16, 11, "div", 35, _forTrack0);
    \u0275\u0275elementStart(48, "div", 36)(49, "span", 37);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 38);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 7, ctx_r1.grandTotal, "1.0-0"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.partnerCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.categoryCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.entries.length, " fournisseur(s) \u2014 d\xE9tail ", ctx_r1.subGroupBy === "articles" ? "par articles" : "par cat\xE9gories", " ");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.entries);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("TOTAL G\xC9N\xC9RAL \u2014 ", ctx_r1.entries.length, " fournisseur(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(53, 10, ctx_r1.grandTotal, "1.0-0"), " FCFA");
  }
}
function RapportEnlevementComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RapportEnlevementComponent_Conditional_40_Conditional_0_Template, 5, 0, "div", 20)(1, RapportEnlevementComponent_Conditional_40_Conditional_1_Template, 54, 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.entries.length === 0 ? 0 : 1);
  }
}
var RapportEnlevementComponent = class _RapportEnlevementComponent {
  constructor(svc, auth) {
    this.svc = svc;
    this.auth = auth;
    this.dateFrom = "";
    this.dateTo = "";
    this.entries = [];
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.subGroupBy = "articles";
    this.expandedPartners = /* @__PURE__ */ new Set();
    const today = /* @__PURE__ */ new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom = firstDay.toISOString().slice(0, 10);
    this.dateTo = today.toISOString().slice(0, 10);
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "Veuillez s\xE9lectionner une p\xE9riode.";
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.svc.getRapport(this.auth.getCompanyId(), this.dateFrom, this.dateTo).subscribe({
      next: (data) => {
        this.entries = data;
        this.generated = true;
        this.loading = false;
        this.expandAll();
      },
      error: (e) => {
        this.loading = false;
        this.errorMsg = e?.error?.message || "Erreur lors de la g\xE9n\xE9ration.";
      }
    });
  }
  setSubGroup(v) {
    this.subGroupBy = v;
  }
  // ── Lignes par catégorie agrégée ──────────────────────────────────────────
  catLines(entry) {
    if (this.subGroupBy === "articles") {
      if (entry.articleLines && entry.articleLines.length > 0) {
        return entry.articleLines.map((l) => ({
          categoryName: l.categoryName || "?",
          productName: l.productName || l.productCode || null,
          quantite: l.quantite,
          montantUnit: l.montantUnitaire,
          montantTotal: l.montantTotal
        }));
      }
      return entry.lines.map((l) => ({ categoryName: l.categoryName, productName: null, quantite: l.quantite, montantUnit: l.montantUnitaire, montantTotal: l.montantTotal }));
    }
    const map = /* @__PURE__ */ new Map();
    for (const l of entry.lines) {
      if (!map.has(l.categoryName))
        map.set(l.categoryName, { categoryName: l.categoryName, productName: null, quantite: 0, montantUnit: l.montantUnitaire, montantTotal: 0 });
      map.get(l.categoryName).quantite += l.quantite;
      map.get(l.categoryName).montantTotal += l.montantTotal;
    }
    return [...map.values()];
  }
  // ── Accordéon ─────────────────────────────────────────────────────────────
  togglePartner(name) {
    if (this.expandedPartners.has(name))
      this.expandedPartners.delete(name);
    else
      this.expandedPartners.add(name);
  }
  isExpanded(name) {
    return this.expandedPartners.has(name);
  }
  expandAll() {
    this.entries.forEach((e) => this.expandedPartners.add(e.partnerName));
  }
  collapseAll() {
    this.expandedPartners.clear();
  }
  // ── KPIs ──────────────────────────────────────────────────────────────────
  get grandTotal() {
    return this.entries.reduce((s, e) => s + (e.totalAmount ?? 0), 0);
  }
  get partnerCount() {
    return this.entries.length;
  }
  get categoryCount() {
    return new Set(this.entries.flatMap((e) => e.lines.map((l) => l.categoryName))).size;
  }
  get companyName() {
    return this.auth.getActiveCompany()?.name || "";
  }
  get generatedBy() {
    return this.auth.getUserDisplayName();
  }
  get printDateLabel() {
    if (!this.dateFrom || !this.dateTo)
      return "";
    const f = (s) => {
      const [y, m, d] = s.split("-");
      return `${d}/${m}/${y}`;
    };
    return `${f(this.dateFrom)} au ${f(this.dateTo)}`;
  }
  get todayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  }
  fmt(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  // ── Export PDF ──────────────────────────────────────────────────────────────
  exportPdf() {
    const byArticles = this.subGroupBy === "articles";
    const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 12;
    let y = M;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y);
    y += 5;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(M, y, pageW - M, y);
    y += 7;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(`RAPPORT DES CO\xDBTS D'ENL\xC8VEMENT`, M, y);
    y += 5;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`P\xE9riode : ${this.printDateLabel}   |   G\xE9n\xE9r\xE9 par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y);
    y += 8;
    const dark = [17, 24, 39];
    const gray = [241, 245, 249];
    const purple = [5, 150, 105];
    for (const entry of this.entries) {
      const lines = this.catLines(entry);
      autoTable(doc, {
        startY: y,
        margin: { left: M, right: M },
        head: [[
          {
            content: entry.partnerName,
            colSpan: byArticles ? 4 : 2,
            styles: { fillColor: purple, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 }
          },
          {
            content: this.fmt(entry.totalAmount ?? 0) + " FCFA",
            styles: { fillColor: purple, textColor: [255, 255, 255], halign: "right", fontStyle: "bold", fontSize: 9 }
          }
        ]],
        body: lines.map((l) => byArticles ? [
          { content: l.productName || "\u2014" },
          { content: l.categoryName },
          { content: this.fmt(l.quantite), styles: { halign: "right" } },
          { content: this.fmt(l.montantUnit), styles: { halign: "right" } },
          { content: this.fmt(l.montantTotal) + " FCFA", styles: { halign: "right" } }
        ] : [
          { content: l.categoryName },
          { content: this.fmt(l.quantite), styles: { halign: "right" } },
          { content: this.fmt(l.montantTotal) + " FCFA", styles: { halign: "right" } }
        ]),
        theme: "plain",
        styles: { fontSize: 8, cellPadding: 2.5, textColor: dark, lineColor: [229, 231, 235], lineWidth: 0.1 },
        headStyles: { fontSize: 9 },
        columnStyles: byArticles ? { 0: { cellWidth: 40 }, 1: { cellWidth: 40 }, 2: { cellWidth: 25, halign: "right" }, 3: { cellWidth: 25, halign: "right" }, 4: { cellWidth: 56, halign: "right" } } : { 0: { cellWidth: 80 }, 1: { cellWidth: 25, halign: "right" }, 2: { cellWidth: 81, halign: "right" } }
      });
      y = doc.lastAutoTable.finalY + 5;
      if (y > 268) {
        doc.addPage();
        y = M;
      }
    }
    autoTable(doc, {
      startY: y,
      margin: { left: M, right: M },
      body: [[
        {
          content: "TOTAL G\xC9N\xC9RAL",
          colSpan: byArticles ? 4 : 2,
          styles: { fillColor: gray, fontStyle: "bold", halign: "right", textColor: [55, 65, 81] }
        },
        {
          content: this.fmt(this.grandTotal) + " FCFA",
          styles: { fillColor: gray, fontStyle: "bold", halign: "right", textColor: dark }
        }
      ]],
      theme: "plain",
      styles: { fontSize: 9, cellPadding: 3, lineColor: [209, 213, 219], lineWidth: 0.2 },
      columnStyles: byArticles ? { 0: { cellWidth: 40 }, 1: { cellWidth: 40 }, 2: { cellWidth: 25 }, 3: { cellWidth: 25 }, 4: { cellWidth: 56, halign: "right" } } : { 0: { cellWidth: 80 }, 1: { cellWidth: 25 }, 2: { cellWidth: 81, halign: "right" } }
    });
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(180, 180, 180);
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.2);
      doc.line(M, 284, pageW - M, 284);
      doc.text(`${this.companyName} \u2014 Blessing ERP`, M, 288);
      doc.text(`Page ${i} / ${n}`, pageW - M, 289, { align: "right" });
    }
    doc.save(`rapport-enlevements-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.pdf`);
  }
  // ── Export Excel ────────────────────────────────────────────────────────────
  exportExcel() {
    return __async(this, null, function* () {
      const byArticles = this.subGroupBy === "articles";
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Enl\xE8vements");
      const GREEN = "FF059669", WHITE = "FFFFFFFF", GRAY = "FFE9ECEF";
      const ncols = byArticles ? 5 : 3;
      ws.mergeCells(1, 1, 1, ncols);
      const t1 = ws.getCell("A1");
      t1.value = `${this.companyName} \u2014 RAPPORT DES CO\xDBTS D'ENL\xC8VEMENT \u2014 ${this.printDateLabel}`;
      t1.font = { bold: true, size: 12, color: { argb: GREEN } };
      t1.alignment = { horizontal: "center" };
      ws.mergeCells(2, 1, 2, ncols);
      const t2 = ws.getCell("A2");
      t2.value = `G\xE9n\xE9r\xE9 par ${this.generatedBy} le ${this.todayLabel}`;
      t2.font = { italic: true, size: 9, color: { argb: "777777" } };
      t2.alignment = { horizontal: "center" };
      ws.addRow([]);
      for (const entry of this.entries) {
        const lines = this.catLines(entry);
        const hRow = ws.addRow([entry.partnerName, ...byArticles ? ["", "", ""] : [""], this.fmt(entry.totalAmount ?? 0) + " FCFA"]);
        ws.mergeCells(ws.rowCount, 1, ws.rowCount, ncols - 1);
        hRow.eachCell((c, col) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN } };
          c.font = { bold: true, color: { argb: WHITE }, size: 10 };
          c.alignment = col === ncols ? { horizontal: "right" } : { horizontal: "left" };
        });
        const headers = byArticles ? ["Article", "Cat\xE9gorie", "Qt\xE9", "P.U.", "Total (FCFA)"] : ["Cat\xE9gorie", "Qt\xE9", "Total (FCFA)"];
        const thRow = ws.addRow(headers);
        thRow.eachCell((c) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD1FAE5" } };
          c.font = { bold: true, size: 8, color: { argb: "374151" } };
          c.border = { bottom: { style: "thin", color: { argb: "FF6EE7B7" } } };
        });
        for (const l of lines) {
          const row = byArticles ? ws.addRow([l.productName || "\u2014", l.categoryName, l.quantite, l.montantUnit, l.montantTotal]) : ws.addRow([l.categoryName, l.quantite, l.montantTotal]);
          row.getCell(ncols).numFmt = "#,##0";
          row.getCell(ncols).alignment = { horizontal: "right" };
          row.eachCell((c) => {
            c.font = { size: 9 };
            c.border = { bottom: { style: "hair", color: { argb: "FFCCCCCC" } } };
          });
        }
        const subData = byArticles ? ["", "", "Sous-total", "", entry.totalAmount ?? 0] : ["", "Sous-total", entry.totalAmount ?? 0];
        const subRow = ws.addRow(subData);
        subRow.eachCell((c) => {
          c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GRAY } };
          c.font = { bold: true, size: 9 };
          c.border = { top: { style: "thin" }, bottom: { style: "thin" } };
        });
        subRow.getCell(ncols).numFmt = "#,##0";
        subRow.getCell(ncols).alignment = { horizontal: "right" };
        ws.addRow([]);
      }
      const totData = byArticles ? ["", "", "", "TOTAL G\xC9N\xC9RAL", this.grandTotal] : ["", "TOTAL G\xC9N\xC9RAL", this.grandTotal];
      const totRow = ws.addRow(totData);
      totRow.eachCell((c) => {
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN } };
        c.font = { bold: true, size: 11, color: { argb: WHITE } };
      });
      totRow.getCell(ncols).numFmt = "#,##0";
      totRow.getCell(ncols).alignment = { horizontal: "right" };
      ws.columns = byArticles ? [{ width: 30 }, { width: 30 }, { width: 10 }, { width: 14 }, { width: 18 }] : [{ width: 38 }, { width: 10 }, { width: 18 }];
      const buf = yield wb.xlsx.writeBuffer();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
      a.download = `rapport-enlevements-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
      a.click();
    });
  }
  static {
    this.\u0275fac = function RapportEnlevementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RapportEnlevementComponent)(\u0275\u0275directiveInject(EnlevementService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RapportEnlevementComponent, selectors: [["app-rapport-enlevement"]], decls: 41, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "export-actions"], [1, "filter-card"], [1, "filter-card-title"], [1, "group-section"], [1, "group-label-text"], [1, "group-chips"], [1, "group-chip", 3, "click"], [1, "filter-row"], [1, "filter-group"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-error"], [1, "btn-export", "btn-excel", 3, "click"], [1, "btn-export", "btn-pdf", 3, "click"], [1, "material-icons", "spin"], [1, "empty-state"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "stat-total"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-cur"], [1, "stat-icon", "stat-partners"], [1, "stat-icon", "stat-cat"], [1, "acc-toolbar"], [1, "acc-info"], [1, "acc-btns"], [1, "btn-acc", 3, "click"], [1, "groups-list"], [1, "group-block", 3, "is-open"], [1, "grand-total"], [1, "gt-label"], [1, "gt-value"], [1, "group-block"], [1, "group-header", 3, "click"], [1, "group-header-left"], [1, "material-icons", "group-chevron"], [1, "client-avatar"], [1, "group-name"], [1, "group-lines-count"], [1, "group-header-right"], [1, "group-total-chip"], [1, "group-body"], [1, "lines-table"], [1, "col-num", "r"], [1, "col-amount", "r"], [1, "sub-total-row"], [1, "sub-total-label"], [1, "r", "font-mono", "font-bold"], [1, "label-cell"], [1, "text-muted"], [1, "r", "font-mono"]], template: function RapportEnlevementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Rapport des co\xFBts d'enl\xE8vement ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, RapportEnlevementComponent_Conditional_7_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "span", 4);
        \u0275\u0275text(11, "tune");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Param\xE8tres du rapport ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "span", 9)(15, "span", 4);
        \u0275\u0275text(16, "layers");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " D\xE9tail sous chaque fournisseur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
        \u0275\u0275listener("click", function RapportEnlevementComponent_Template_button_click_19_listener() {
          return ctx.setSubGroup("articles");
        });
        \u0275\u0275elementStart(20, "span", 4);
        \u0275\u0275text(21, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Par articles (Qt\xE9 + P.U.) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 11);
        \u0275\u0275listener("click", function RapportEnlevementComponent_Template_button_click_23_listener() {
          return ctx.setSubGroup("categories");
        });
        \u0275\u0275elementStart(24, "span", 4);
        \u0275\u0275text(25, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Par cat\xE9gories (Totaux) ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 12)(28, "div", 13)(29, "label");
        \u0275\u0275text(30, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RapportEnlevementComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 13)(33, "label");
        \u0275\u0275text(34, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RapportEnlevementComponent_Template_input_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 15);
        \u0275\u0275listener("click", function RapportEnlevementComponent_Template_button_click_36_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(37, RapportEnlevementComponent_Conditional_37_Template, 3, 0)(38, RapportEnlevementComponent_Conditional_38_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(39, RapportEnlevementComponent_Conditional_39_Template, 4, 1, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(40, RapportEnlevementComponent_Conditional_40_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.generated && ctx.entries.length > 0 ? 7 : -1);
        \u0275\u0275advance(12);
        \u0275\u0275classProp("active", ctx.subGroupBy === "articles");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.subGroupBy === "categories");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 37 : 38);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated ? 40 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: white;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.filter-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 20px;\n}\n.filter-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n}\n.filter-card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.12);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 24px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.stat-icon.stat-total[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n}\n.stat-icon.stat-partners[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #38bdf8);\n}\n.stat-icon.stat-cat[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #a78bfa);\n}\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-cur[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.report-section[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.report-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-first[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid #e9ecef;\n}\n.report-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.report-table[_ngcontent-%COMP%]   .col-partner[_ngcontent-%COMP%] {\n  width: 26%;\n}\n.report-table[_ngcontent-%COMP%]   .col-cat[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.report-table[_ngcontent-%COMP%]   .col-qty[_ngcontent-%COMP%] {\n  width: 12%;\n}\n.report-table[_ngcontent-%COMP%]   .col-unit[_ngcontent-%COMP%] {\n  width: 16%;\n}\n.report-table[_ngcontent-%COMP%]   .col-amount[_ngcontent-%COMP%] {\n  width: 16%;\n}\n.subtotal-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: none;\n  padding: 7px 16px;\n}\n.subtotal-label[_ngcontent-%COMP%] {\n  text-align: right;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.subtotal-val[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.foot-label[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-value[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 14px;\n  background: var(--bg-elevated);\n  white-space: nowrap;\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.group-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.group-label-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.group-label-text[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.group-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.group-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.group-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.group-chip.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.acc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.acc-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.acc-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.acc-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-acc[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.14s;\n}\n.btn-acc[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-acc[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.group-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.group-block.is-open[_ngcontent-%COMP%] {\n  border-color: #6ee7b7;\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.group-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.group-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.group-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.group-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.group-block.is-open[_ngcontent-%COMP%]   .group-chevron[_ngcontent-%COMP%] {\n  color: #059669;\n  transform: rotate(180deg);\n}\n.group-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.group-lines-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.client-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #d1fae5;\n  color: #065f46;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.group-total-chip[_ngcontent-%COMP%] {\n  padding: 3px 12px;\n  border-radius: 20px;\n  background: #d1fae5;\n  color: #064e3b;\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  white-space: nowrap;\n}\n.group-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-light);\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   .col-type[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-amount[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.lines-table[_ngcontent-%COMP%]   .label-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.lines-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.sub-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border) !important;\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--text-muted);\n}\n.grand-total[_ngcontent-%COMP%] {\n  background: #059669;\n  color: white;\n  border-radius: 12px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 4px;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=rapport-enlevement.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RapportEnlevementComponent, [{
    type: Component,
    args: [{ selector: "app-rapport-enlevement", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550\u2550 EN-T\xCATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">local_shipping</span>
        Rapport des co\xFBts d'enl\xE8vement
      </h1>
    </div>
    @if (generated && entries.length > 0) {
      <div class="export-actions">
        <button class="btn-export btn-excel" (click)="exportExcel()">
          <span class="material-icons">table_view</span> Excel
        </button>
        <button class="btn-export btn-pdf" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> PDF
        </button>
      </div>
    }
  </div>

  <!-- \u2550\u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filter-card">
    <div class="filter-card-title">
      <span class="material-icons">tune</span> Param\xE8tres du rapport
    </div>
    <div class="group-section">
      <span class="group-label-text"><span class="material-icons">layers</span> D\xE9tail sous chaque fournisseur</span>
      <div class="group-chips">
        <button class="group-chip" [class.active]="subGroupBy === 'articles'" (click)="setSubGroup('articles')">
          <span class="material-icons">inventory_2</span> Par articles (Qt\xE9 + P.U.)
        </button>
        <button class="group-chip" [class.active]="subGroupBy === 'categories'" (click)="setSubGroup('categories')">
          <span class="material-icons">category</span> Par cat\xE9gories (Totaux)
        </button>
      </div>
    </div>
    <div class="filter-row">
      <div class="filter-group">
        <label>P\xE9riode du</label>
        <input type="date" class="form-input" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-input" [(ngModel)]="dateTo">
      </div>
      <button class="btn-generate" (click)="generate()" [disabled]="loading">
        @if (loading) { <span class="material-icons spin">hourglass_empty</span> G\xE9n\xE9ration\u2026 }
        @else { <span class="material-icons">play_arrow</span> G\xE9n\xE9rer }
      </button>
    </div>
    @if (errorMsg) {
      <div class="alert-error"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
    }
  </div>

  <!-- \u2550\u2550\u2550 R\xC9SULTAT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (generated) {
    @if (entries.length === 0) {
      <div class="empty-state">
        <span class="material-icons">search_off</span>
        <p>Aucun co\xFBt d'enl\xE8vement calcul\xE9 sur cette p\xE9riode.</p>
      </div>
    } @else {

      <!-- KPIs -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon stat-total"><span class="material-icons">local_shipping</span></div>
          <div class="stat-body">
            <div class="stat-label">Total enl\xE8vements</div>
            <div class="stat-value">{{ grandTotal | number:'1.0-0' }} <span class="stat-cur">FCFA</span></div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon stat-partners"><span class="material-icons">store</span></div>
          <div class="stat-body">
            <div class="stat-label">Fournisseurs</div>
            <div class="stat-value">{{ partnerCount }}</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon stat-cat"><span class="material-icons">category</span></div>
          <div class="stat-body">
            <div class="stat-label">Cat\xE9gories</div>
            <div class="stat-value">{{ categoryCount }}</div>
          </div>
        </div>
      </div>

      <!-- Toolbar accord\xE9on -->
      <div class="acc-toolbar">
        <span class="acc-info">
          <span class="material-icons">store</span>
          {{ entries.length }} fournisseur(s) \u2014 d\xE9tail {{ subGroupBy === 'articles' ? 'par articles' : 'par cat\xE9gories' }}
        </span>
        <div class="acc-btns">
          <button class="btn-acc" (click)="expandAll()"><span class="material-icons">unfold_more</span> Tout ouvrir</button>
          <button class="btn-acc" (click)="collapseAll()"><span class="material-icons">unfold_less</span> Tout fermer</button>
        </div>
      </div>

      <!-- Accord\xE9on -->
      <div class="groups-list">
        @for (entry of entries; track entry.partnerId) {
          <div class="group-block" [class.is-open]="isExpanded(entry.partnerName)">

            <div class="group-header" (click)="togglePartner(entry.partnerName)">
              <div class="group-header-left">
                <span class="material-icons group-chevron">{{ isExpanded(entry.partnerName) ? 'expand_less' : 'expand_more' }}</span>
                <div class="client-avatar">{{ entry.partnerName.charAt(0).toUpperCase() }}</div>
                <span class="group-name">{{ entry.partnerName }}</span>
                <span class="group-lines-count">{{ catLines(entry).length }} ligne(s)</span>
              </div>
              <div class="group-header-right">
                <span class="group-total-chip">{{ entry.totalAmount | number:'1.0-0' }} FCFA</span>
              </div>
            </div>

            @if (isExpanded(entry.partnerName)) {
              <div class="group-body">
                <table class="lines-table">
                  <thead>
                    <tr>
                      @if (subGroupBy === 'articles') { <th>Article</th> }
                      <th>Cat\xE9gorie</th>
                      <th class="col-num r">Quantit\xE9</th>
                      @if (subGroupBy === 'articles') { <th class="col-num r">P.U. (FCFA)</th> }
                      <th class="col-amount r">Total (FCFA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (l of catLines(entry); track $index) {
                      <tr>
                        @if (subGroupBy === 'articles') {
                          <td class="label-cell">{{ l.productName || '\u2014' }}</td>
                        }
                        <td class="text-muted">{{ l.categoryName }}</td>
                        <td class="r font-mono">{{ l.quantite | number:'1.0-2' }}</td>
                        @if (subGroupBy === 'articles') {
                          <td class="r font-mono">{{ l.montantUnit | number:'1.0-0' }}</td>
                        }
                        <td class="r font-mono font-bold">{{ l.montantTotal | number:'1.0-0' }}</td>
                      </tr>
                    }
                  </tbody>
                  <tfoot>
                    <tr class="sub-total-row">
                      <td [attr.colspan]="subGroupBy === 'articles' ? 4 : 2" class="sub-total-label">Sous-total {{ entry.partnerName }}</td>
                      <td class="r font-mono font-bold">{{ entry.totalAmount | number:'1.0-0' }} FCFA</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            }
          </div>
        }

        <div class="grand-total">
          <span class="gt-label">TOTAL G\xC9N\xC9RAL \u2014 {{ entries.length }} fournisseur(s)</span>
          <span class="gt-value">{{ grandTotal | number:'1.0-0' }} FCFA</span>
        </div>
      </div>
    }
  }

</div>
`, styles: ['/* src/app/modules/purchases/components/rapports/rapport-enlevement.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n  font-size: 24px;\n}\n.export-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-export {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-export .material-icons {\n  font-size: 16px;\n}\n.btn-export.btn-pdf {\n  background: #dc2626;\n  color: white;\n}\n.btn-export.btn-pdf:hover {\n  background: #b91c1c;\n}\n.btn-export.btn-excel {\n  background: #16a34a;\n  color: white;\n}\n.btn-export.btn-excel:hover {\n  background: #15803d;\n}\n.filter-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  margin-bottom: 20px;\n}\n.filter-card-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n}\n.filter-card-title .material-icons {\n  font-size: 16px;\n}\n.filter-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-input {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  color: var(--text-secondary);\n  outline: none;\n}\n.form-input:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.12);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 24px;\n  border: none;\n  border-radius: 8px;\n  background: var(--accent);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: var(--accent);\n  box-shadow: 0 4px 12px rgba(0, 160, 157, 0.3);\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  color: var(--danger);\n  font-size: 13px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 6px;\n  padding: 8px 12px;\n}\n.alert-error .material-icons {\n  font-size: 16px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 24px;\n  color: var(--text-muted);\n  gap: 14px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.stat-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.stat-icon.stat-total {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n}\n.stat-icon.stat-partners {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #38bdf8);\n}\n.stat-icon.stat-cat {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #a78bfa);\n}\n.stat-body {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.stat-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-cur {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.report-section {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.report-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.report-table th {\n  padding: 11px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.report-table td {\n  padding: 10px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.report-table tbody tr.row-first td {\n  border-top: 2px solid #e9ecef;\n}\n.report-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.report-table .col-partner {\n  width: 26%;\n}\n.report-table .col-cat {\n  width: 30%;\n}\n.report-table .col-qty {\n  width: 12%;\n}\n.report-table .col-unit {\n  width: 16%;\n}\n.report-table .col-amount {\n  width: 16%;\n}\n.subtotal-row td {\n  background: var(--bg-elevated);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: none;\n  padding: 7px 16px;\n}\n.subtotal-label {\n  text-align: right;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.subtotal-val {\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.foot-label {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n  background: var(--bg-elevated);\n  text-align: right;\n}\n.foot-value {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 14px;\n  background: var(--bg-elevated);\n  white-space: nowrap;\n  text-align: right;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary);\n}\n.group-section {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.group-label-text {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.group-label-text .material-icons {\n  font-size: 15px;\n}\n.group-chips {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.group-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.group-chip .material-icons {\n  font-size: 14px;\n}\n.group-chip:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.group-chip.active {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: white;\n}\n.acc-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.acc-info {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.acc-info .material-icons {\n  font-size: 16px;\n}\n.acc-btns {\n  display: flex;\n  gap: 6px;\n}\n.btn-acc {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 11px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.14s;\n}\n.btn-acc .material-icons {\n  font-size: 15px;\n}\n.btn-acc:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.groups-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.group-block {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.group-block.is-open {\n  border-color: #6ee7b7;\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.group-header:hover {\n  background: var(--bg-elevated);\n}\n.group-header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.group-header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.group-chevron {\n  font-size: 18px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.group-block.is-open .group-chevron {\n  color: #059669;\n  transform: rotate(180deg);\n}\n.group-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.group-lines-count {\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  border-radius: 20px;\n  border: 1px solid var(--border);\n}\n.client-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #d1fae5;\n  color: #065f46;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.group-total-chip {\n  padding: 3px 12px;\n  border-radius: 20px;\n  background: #d1fae5;\n  color: #064e3b;\n  font-size: 12px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  white-space: nowrap;\n}\n.group-body {\n  border-top: 1px solid var(--border-light);\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table th {\n  padding: 8px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.lines-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table .col-type {\n  width: 90px;\n}\n.lines-table .col-num {\n  width: 70px;\n}\n.lines-table .col-amount {\n  width: 160px;\n}\n.lines-table .label-cell {\n  font-weight: 600;\n}\n.lines-table .r {\n  text-align: right;\n}\n.sub-total-row td {\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border) !important;\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--text-muted);\n}\n.grand-total {\n  background: #059669;\n  color: white;\n  border-radius: 12px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 4px;\n}\n.gt-label {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.gt-value {\n  font-size: 18px;\n  font-weight: 800;\n  font-family: "Roboto Mono", monospace;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=rapport-enlevement.component.css.map */\n'] }]
  }], () => [{ type: EnlevementService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RapportEnlevementComponent, { className: "RapportEnlevementComponent", filePath: "app/modules/purchases/components/rapports/rapport-enlevement.component.ts", lineNumber: 19 });
})();
export {
  RapportEnlevementComponent
};
//# sourceMappingURL=chunk-EBFUO2QT.js.map
