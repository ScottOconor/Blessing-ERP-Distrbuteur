import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  HttpClient,
  Injectable,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/services/fiscal-closure.service.ts
var FiscalClosureService = class _FiscalClosureService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/api/accounting/fiscal-closure`;
  }
  preview(req) {
    return this.http.post(`${this.apiUrl}/preview`, req);
  }
  execute(req) {
    return this.http.post(`${this.apiUrl}/execute`, req);
  }
  static {
    this.\u0275fac = function FiscalClosureService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiscalClosureService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FiscalClosureService, factory: _FiscalClosureService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiscalClosureService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/config/components/fiscal-closure/fiscal-closure.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.accountCode;
function FiscalClosureComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
    \u0275\u0275text(1, " Analyse\u2026 ");
  }
}
function FiscalClosureComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Pr\xE9visualiser ");
  }
}
function FiscalClosureComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 16);
    \u0275\u0275text(2, "error_outline");
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
function FiscalClosureComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function FiscalClosureComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " \xC9criture de cl\xF4ture ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " cr\xE9\xE9e en ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275listener("click", function FiscalClosureComponent_Conditional_28_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToMove());
    });
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Ouvrir l'\xE9criture ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("P\xE9riode cl\xF4tur\xE9e jusqu'au ", ctx_r0.result.lockDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.result.moveName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" (r\xE9sultat net : ", \u0275\u0275pipeBind2(14, 3, ctx_r0.result.netResult, "1.0-0"), " FCFA) \u2014 validez-la vous-m\xEAme quand vous \xEAtes pr\xEAt. ");
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", b_r4.date, " \u2014 ", b_r4.name, " (", b_r4.journalName, ")");
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 16);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Validez ou annulez ces \xE9critures avant de pouvoir cl\xF4turer :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul");
    \u0275\u0275repeaterCreate(9, FiscalClosureComponent_Conditional_29_Conditional_0_For_10_Template, 2, 3, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275listener("click", function FiscalClosureComponent_Conditional_29_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToJournalEntries());
    });
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Voir les pi\xE8ces comptables ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Cl\xF4ture impossible : ", ctx_r0.preview.blockers.length, " \xE9criture(s) non valid\xE9e(s) sur la p\xE9riode");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.preview.blockers);
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_1_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 31);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.accountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, l_r6.balance < 0 ? -l_r6.balance : l_r6.balance, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r6.balance > 0 ? "Cr\xE9dit\xE9" : "D\xE9bit\xE9");
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_1_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r7.code, " \u2014 ", a_r7.name);
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_1_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r8.code, " \u2014 ", a_r8.name);
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
    \u0275\u0275text(1, " Cl\xF4ture en cours\u2026 ");
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_1_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Confirmer la cl\xF4ture ");
  }
}
function FiscalClosureComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "label");
    \u0275\u0275text(6, "R\xE9sultat net r\xE9el de la p\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 22);
    \u0275\u0275text(11, "Somme des comptes de classe 6/7/8 r\xE9ellement mouvement\xE9s \u2014 peut diff\xE9rer l\xE9g\xE8rement du Compte de R\xE9sultat (qui affiche par rubriques), c'est normal.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 23)(13, "table", 24)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 25);
    \u0275\u0275text(21, "Solde \xE0 solder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 26);
    \u0275\u0275text(23, "Sens");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, FiscalClosureComponent_Conditional_29_Conditional_1_For_26_Template, 10, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 6)(28, "div", 7)(29, "div", 8)(30, "label");
    \u0275\u0275text(31, "Compte r\xE9sultat \u2014 b\xE9n\xE9fice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function FiscalClosureComponent_Conditional_29_Conditional_1_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.resultAccountBeneficeId, $event) || (ctx_r0.resultAccountBeneficeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 28);
    \u0275\u0275text(34, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(35, FiscalClosureComponent_Conditional_29_Conditional_1_For_36_Template, 2, 3, "option", 28, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 8)(38, "label");
    \u0275\u0275text(39, "Compte r\xE9sultat \u2014 perte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function FiscalClosureComponent_Conditional_29_Conditional_1_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.resultAccountPerteId, $event) || (ctx_r0.resultAccountPerteId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(41, "option", 28);
    \u0275\u0275text(42, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(43, FiscalClosureComponent_Conditional_29_Conditional_1_For_44_Template, 2, 3, "option", 28, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 10)(46, "label");
    \u0275\u0275text(47, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 29);
    \u0275\u0275listener("click", function FiscalClosureComponent_Conditional_29_Conditional_1_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmClosure());
    });
    \u0275\u0275conditionalCreate(49, FiscalClosureComponent_Conditional_29_Conditional_1_Conditional_49_Template, 2, 0)(50, FiscalClosureComponent_Conditional_29_Conditional_1_Conditional_50_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", ctx_r0.preview.netResult >= 0)("negative", ctx_r0.preview.netResult < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.preview.netResult >= 0 ? "trending_up" : "trending_down");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 12, ctx_r0.preview.netResult, "1.0-0"), " FCFA");
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.preview.accountBalances);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.resultAccountBeneficeId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.accounts);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.resultAccountPerteId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.accounts);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r0.canConfirm || ctx_r0.executing);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.executing ? 49 : 50);
  }
}
function FiscalClosureComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FiscalClosureComponent_Conditional_29_Conditional_0_Template, 15, 1, "div", 19)(1, FiscalClosureComponent_Conditional_29_Conditional_1_Template, 51, 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.preview.blocked ? 0 : 1);
  }
}
var FiscalClosureComponent = class _FiscalClosureComponent {
  constructor(authService, accountingService, fiscalClosureService, router) {
    this.authService = authService;
    this.accountingService = accountingService;
    this.fiscalClosureService = fiscalClosureService;
    this.router = router;
    this.loading = false;
    this.executing = false;
    this.previewed = false;
    this.done = false;
    this.errorMsg = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.accounts = [];
    this.resultAccountBeneficeId = null;
    this.resultAccountPerteId = null;
    this.preview = null;
    this.result = null;
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateFrom = `${now.getFullYear()}-01-01`;
    this.dateTo = now.toISOString().split("T")[0];
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe((a) => this.accounts = a);
  }
  generatePreview() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode \xE0 cl\xF4turer";
      return;
    }
    if (this.dateFrom > this.dateTo) {
      this.errorMsg = "La date de d\xE9but doit pr\xE9c\xE9der la date de fin";
      return;
    }
    this.loading = true;
    this.previewed = false;
    this.done = false;
    this.errorMsg = "";
    this.result = null;
    this.fiscalClosureService.preview({
      companyId: this.authService.getCompanyId(),
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }).subscribe({
      next: (res) => {
        this.preview = res;
        this.loading = false;
        this.previewed = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors de la pr\xE9visualisation";
      }
    });
  }
  get canConfirm() {
    return !!this.preview && !this.preview.blocked && !!this.resultAccountBeneficeId && !!this.resultAccountPerteId;
  }
  confirmClosure() {
    if (!this.canConfirm)
      return;
    const msg = `Cl\xF4turer la p\xE9riode du ${this.dateFrom} au ${this.dateTo} ?

Cette action verrouille toutes les \xE9critures de cette p\xE9riode (plus aucune cr\xE9ation/modification/validation) et cr\xE9e une \xE9criture de cl\xF4ture en BROUILLON que vous devrez valider vous-m\xEAme. Continuer ?`;
    if (!confirm(msg))
      return;
    this.executing = true;
    this.errorMsg = "";
    this.fiscalClosureService.execute({
      companyId: this.authService.getCompanyId(),
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      resultAccountBeneficeId: this.resultAccountBeneficeId,
      resultAccountPerteId: this.resultAccountPerteId
    }).subscribe({
      next: (res) => {
        this.executing = false;
        this.done = true;
        this.result = res;
      },
      error: (err) => {
        this.executing = false;
        this.errorMsg = err.error?.message || "Erreur lors de la cl\xF4ture";
      }
    });
  }
  goToMove() {
    if (this.result?.moveId) {
      this.router.navigate(["/accounting/journal-entries", this.result.moveId]);
    }
  }
  goToJournalEntries() {
    this.router.navigate(["/accounting/journal-entries"]);
  }
  static {
    this.\u0275fac = function FiscalClosureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiscalClosureComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(FiscalClosureService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FiscalClosureComponent, selectors: [["app-fiscal-closure"]], decls: 30, vars: 10, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "filters-card"], [1, "filter-grid"], [1, "filter-group"], ["type", "date", 1, "form-ctl", 3, "ngModelChange", "ngModel", "disabled"], [1, "filter-group", "filter-btn-col"], [1, "btn-generate", 3, "click", "disabled"], [1, "alert-err"], [1, "loading-state"], [1, "closure-success"], [1, "btn-spinner"], [1, "material-icons"], [1, "spinner-lg"], [1, "btn-outline", 3, "click"], [1, "closure-blocked"], [1, "closure-summary"], [1, "summary-card"], [1, "hint"], [1, "closure-table-wrap"], [1, "closure-table"], [1, "text-right"], [1, "text-center"], [1, "form-ctl", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "btn-generate", "btn-confirm", 3, "click", "disabled"], [1, "mono"], [1, "text-right", "mono"]], template: function FiscalClosureComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "lock_clock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Cl\xF4ture d'exercice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Verrouille une p\xE9riode et g\xE9n\xE8re l'\xE9criture de cl\xF4ture des comptes de gestion");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "label");
        \u0275\u0275text(14, "P\xE9riode du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function FiscalClosureComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "label");
        \u0275\u0275text(18, "au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function FiscalClosureComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 10)(21, "label");
        \u0275\u0275text(22, "\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 11);
        \u0275\u0275listener("click", function FiscalClosureComponent_Template_button_click_23_listener() {
          return ctx.generatePreview();
        });
        \u0275\u0275conditionalCreate(24, FiscalClosureComponent_Conditional_24_Template, 2, 0)(25, FiscalClosureComponent_Conditional_25_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(26, FiscalClosureComponent_Conditional_26_Template, 4, 1, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(27, FiscalClosureComponent_Conditional_27_Template, 2, 0, "div", 13);
        \u0275\u0275conditionalCreate(28, FiscalClosureComponent_Conditional_28_Template, 19, 6, "div", 14);
        \u0275\u0275conditionalCreate(29, FiscalClosureComponent_Conditional_29_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275property("disabled", ctx.done);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275property("disabled", ctx.done);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.loading || ctx.done);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 24 : 25);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMsg ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.done && ctx.result ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.previewed && ctx.preview && !ctx.done ? 29 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 180px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.closure-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 20px 24px;\n  background: var(--success-bg);\n  border: 1px solid #16a34a;\n  border-radius: 12px;\n  margin-bottom: 18px;\n}\n.closure-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--success);\n}\n.closure-success[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--success);\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.closure-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.closure-blocked[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 20px 24px;\n  background: var(--danger-bg);\n  border: 1px solid #dc2626;\n  border-radius: 12px;\n  margin-bottom: 18px;\n}\n.closure-blocked[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--danger);\n}\n.closure-blocked[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--danger);\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.closure-blocked[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.closure-blocked[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  padding-left: 18px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.closure-summary[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n}\n.summary-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.summary-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  color: var(--text-muted);\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 22px;\n  font-weight: 800;\n  margin: 2px 0;\n}\n.summary-card[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 11.5px;\n  color: var(--text-muted);\n  max-width: 520px;\n}\n.summary-card.positive[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.summary-card.positive[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.summary-card.negative[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.summary-card.negative[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.closure-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-bottom: 18px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.closure-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.closure-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.closure-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.closure-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-align: left;\n}\n.closure-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--bg-elevated);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=fiscal-closure.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiscalClosureComponent, [{
    type: Component,
    args: [{ selector: "app-fiscal-closure", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">lock_clock</span>
      <div>
        <h1 class="page-title">Cl\xF4ture d'exercice</h1>
        <p class="page-sub">Verrouille une p\xE9riode et g\xE9n\xE8re l'\xE9criture de cl\xF4ture des comptes de gestion</p>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550 FILTRES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="filters-card">
    <div class="filter-grid">
      <div class="filter-group">
        <label>P\xE9riode du</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateFrom" [disabled]="done">
      </div>
      <div class="filter-group">
        <label>au</label>
        <input type="date" class="form-ctl" [(ngModel)]="dateTo" [disabled]="done">
      </div>
      <div class="filter-group filter-btn-col">
        <label>&nbsp;</label>
        <button class="btn-generate" (click)="generatePreview()" [disabled]="loading || done">
          @if (loading) { <span class="btn-spinner"></span> Analyse\u2026 }
          @else { <span class="material-icons">visibility</span> Pr\xE9visualiser }
        </button>
      </div>
    </div>
    @if (errorMsg) {
      <div class="alert-err"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
    }
  </div>

  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
    </div>
  }

  <!-- \u2550\u2550 R\xC9SULTAT DE LA CL\xD4TURE (succ\xE8s) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (done && result) {
    <div class="closure-success">
      <span class="material-icons">check_circle</span>
      <div>
        <strong>P\xE9riode cl\xF4tur\xE9e jusqu'au {{ result.lockDate }}</strong>
        <p>
          \xC9criture de cl\xF4ture <strong>{{ result.moveName }}</strong> cr\xE9\xE9e en <strong>brouillon</strong>
          (r\xE9sultat net : {{ result.netResult | number:'1.0-0' }} FCFA) \u2014 validez-la vous-m\xEAme quand vous \xEAtes pr\xEAt.
        </p>
        <button class="btn-outline" (click)="goToMove()">
          <span class="material-icons">receipt_long</span> Ouvrir l'\xE9criture
        </button>
      </div>
    </div>
  }

  <!-- \u2550\u2550 PR\xC9VISUALISATION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (previewed && preview && !done) {

    @if (preview.blocked) {
      <div class="closure-blocked">
        <span class="material-icons">block</span>
        <div>
          <strong>Cl\xF4ture impossible : {{ preview.blockers.length }} \xE9criture(s) non valid\xE9e(s) sur la p\xE9riode</strong>
          <p>Validez ou annulez ces \xE9critures avant de pouvoir cl\xF4turer :</p>
          <ul>
            @for (b of preview.blockers; track b.id) {
              <li>{{ b.date }} \u2014 {{ b.name }} ({{ b.journalName }})</li>
            }
          </ul>
          <button class="btn-outline" (click)="goToJournalEntries()">
            <span class="material-icons">receipt_long</span> Voir les pi\xE8ces comptables
          </button>
        </div>
      </div>
    } @else {

      <div class="closure-summary">
        <div class="summary-card" [class.positive]="preview.netResult >= 0" [class.negative]="preview.netResult < 0">
          <span class="material-icons">{{ preview.netResult >= 0 ? 'trending_up' : 'trending_down' }}</span>
          <div>
            <label>R\xE9sultat net r\xE9el de la p\xE9riode</label>
            <strong>{{ preview.netResult | number:'1.0-0' }} FCFA</strong>
            <p class="hint">Somme des comptes de classe 6/7/8 r\xE9ellement mouvement\xE9s \u2014 peut diff\xE9rer l\xE9g\xE8rement du
              Compte de R\xE9sultat (qui affiche par rubriques), c'est normal.</p>
          </div>
        </div>
      </div>

      <div class="closure-table-wrap">
        <table class="closure-table">
          <thead>
            <tr>
              <th>Compte</th>
              <th>Libell\xE9</th>
              <th class="text-right">Solde \xE0 solder</th>
              <th class="text-center">Sens</th>
            </tr>
          </thead>
          <tbody>
            @for (l of preview.accountBalances; track l.accountCode) {
              <tr>
                <td class="mono">{{ l.accountCode }}</td>
                <td>{{ l.accountName }}</td>
                <td class="text-right mono">{{ (l.balance < 0 ? -l.balance : l.balance) | number:'1.0-0' }}</td>
                <td class="text-center">{{ l.balance > 0 ? 'Cr\xE9dit\xE9' : 'D\xE9bit\xE9' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- \u2550\u2550 CONFIRMATION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="filters-card">
        <div class="filter-grid">
          <div class="filter-group">
            <label>Compte r\xE9sultat \u2014 b\xE9n\xE9fice</label>
            <select class="form-ctl" [(ngModel)]="resultAccountBeneficeId">
              <option [ngValue]="null">\u2014 S\xE9lectionner \u2014</option>
              @for (a of accounts; track a.id) {
                <option [ngValue]="a.id">{{ a.code }} \u2014 {{ a.name }}</option>
              }
            </select>
          </div>
          <div class="filter-group">
            <label>Compte r\xE9sultat \u2014 perte</label>
            <select class="form-ctl" [(ngModel)]="resultAccountPerteId">
              <option [ngValue]="null">\u2014 S\xE9lectionner \u2014</option>
              @for (a of accounts; track a.id) {
                <option [ngValue]="a.id">{{ a.code }} \u2014 {{ a.name }}</option>
              }
            </select>
          </div>
          <div class="filter-group filter-btn-col">
            <label>&nbsp;</label>
            <button class="btn-generate btn-confirm" (click)="confirmClosure()" [disabled]="!canConfirm || executing">
              @if (executing) { <span class="btn-spinner"></span> Cl\xF4ture en cours\u2026 }
              @else { <span class="material-icons">lock</span> Confirmer la cl\xF4ture }
            </button>
          </div>
        </div>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/config/components/fiscal-closure/fiscal-closure.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filters-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  margin-bottom: 18px;\n}\n.filter-grid {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 180px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.filter-btn-col {\n  margin-left: auto;\n}\n.form-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-generate .material-icons {\n  font-size: 18px;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-generate:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-confirm {\n  background: var(--danger);\n}\n.btn-confirm:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.alert-err {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 12px;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-err .material-icons {\n  font-size: 16px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px;\n  gap: 16px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.spinner-lg {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.closure-success {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 20px 24px;\n  background: var(--success-bg);\n  border: 1px solid #16a34a;\n  border-radius: 12px;\n  margin-bottom: 18px;\n}\n.closure-success .material-icons {\n  font-size: 28px;\n  color: var(--success);\n}\n.closure-success strong {\n  display: block;\n  color: var(--success);\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.closure-success p {\n  margin: 0 0 12px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.closure-blocked {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 20px 24px;\n  background: var(--danger-bg);\n  border: 1px solid #dc2626;\n  border-radius: 12px;\n  margin-bottom: 18px;\n}\n.closure-blocked .material-icons {\n  font-size: 28px;\n  color: var(--danger);\n}\n.closure-blocked strong {\n  display: block;\n  color: var(--danger);\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.closure-blocked p {\n  margin: 0 0 8px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.closure-blocked ul {\n  margin: 0 0 14px;\n  padding-left: 18px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.closure-summary {\n  margin-bottom: 18px;\n}\n.summary-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n}\n.summary-card .material-icons {\n  font-size: 32px;\n}\n.summary-card label {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  color: var(--text-muted);\n}\n.summary-card strong {\n  display: block;\n  font-size: 22px;\n  font-weight: 800;\n  margin: 2px 0;\n}\n.summary-card .hint {\n  margin: 4px 0 0;\n  font-size: 11.5px;\n  color: var(--text-muted);\n  max-width: 520px;\n}\n.summary-card.positive .material-icons,\n.summary-card.positive strong {\n  color: var(--success);\n}\n.summary-card.negative .material-icons,\n.summary-card.negative strong {\n  color: var(--danger);\n}\n.closure-table-wrap {\n  overflow-x: auto;\n  margin-bottom: 18px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center {\n  text-align: center;\n}\n.closure-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.closure-table th,\n.closure-table td {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  vertical-align: middle;\n}\n.closure-table thead th {\n  background: var(--primary);\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  text-align: left;\n}\n.closure-table tbody tr:nth-child(even) {\n  background: var(--bg-elevated);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=fiscal-closure.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: AccountingService }, { type: FiscalClosureService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FiscalClosureComponent, { className: "FiscalClosureComponent", filePath: "app/modules/config/components/fiscal-closure/fiscal-closure.component.ts", lineNumber: 21 });
})();
export {
  FiscalClosureComponent
};
//# sourceMappingURL=chunk-XE6DIRHE.js.map
