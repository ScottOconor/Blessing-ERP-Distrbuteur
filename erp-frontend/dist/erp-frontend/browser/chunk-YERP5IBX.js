import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FU5PLMG6.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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

// src/app/modules/stock/components/agences/agency-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AgencyListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 4);
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
function AgencyListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
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
function AgencyListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 9);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AgencyListComponent_Conditional_11_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 15);
    \u0275\u0275listener("click", function AgencyListComponent_Conditional_11_For_19_Template_button_click_15_listener() {
      const a_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(a_r3));
    });
    \u0275\u0275elementStart(16, "span", 4);
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.contactPerson || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.address || "\u2014");
  }
}
function AgencyListComponent_Conditional_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, 'Aucune agence configur\xE9e \u2014 cliquez sur "Nouvelle agence" pour commencer');
    \u0275\u0275elementEnd()();
  }
}
function AgencyListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, AgencyListComponent_Conditional_11_For_19_Template, 18, 6, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(20, AgencyListComponent_Conditional_11_Conditional_20_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.agencies);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.agencies.length === 0 ? 20 : -1);
  }
}
function AgencyListComponent_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function AgencyListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function AgencyListComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 19)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function AgencyListComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275conditionalCreate(9, AgencyListComponent_Conditional_12_Conditional_9_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(10, "div", 22)(11, "div", 23)(12, "label");
    \u0275\u0275text(13, "Nom ");
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AgencyListComponent_Conditional_12_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "label");
    \u0275\u0275text(19, "Code ");
    \u0275\u0275elementStart(20, "span", 24);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AgencyListComponent_Conditional_12_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.code, $event) || (ctx_r0.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 23)(24, "label");
    \u0275\u0275text(25, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AgencyListComponent_Conditional_12_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.contactPerson, $event) || (ctx_r0.form.contactPerson = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 23)(28, "label");
    \u0275\u0275text(29, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AgencyListComponent_Conditional_12_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.phone, $event) || (ctx_r0.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 23)(32, "label");
    \u0275\u0275text(33, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AgencyListComponent_Conditional_12_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.email, $event) || (ctx_r0.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 30)(36, "label");
    \u0275\u0275text(37, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AgencyListComponent_Conditional_12_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.address, $event) || (ctx_r0.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 32)(40, "button", 33);
    \u0275\u0275listener("click", function AgencyListComponent_Conditional_12_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(41, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 34);
    \u0275\u0275listener("click", function AgencyListComponent_Conditional_12_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(43, "span", 4);
    \u0275\u0275text(44, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingId ? "Modifier l'agence" : "Nouvelle agence distante");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.contactPerson);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.address);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
var AgencyListComponent = class _AgencyListComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.agencies = [];
    this.loading = false;
    this.showModal = false;
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.editingId = null;
    this.form = this.emptyForm();
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.stockService.getAgencies(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.agencies = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openNew() {
    this.editingId = null;
    this.form = this.emptyForm();
    this.errorMsg = "";
    this.showModal = true;
  }
  openEdit(a) {
    this.editingId = a.id;
    this.form = __spreadValues({}, a);
    this.errorMsg = "";
    this.showModal = true;
  }
  close() {
    this.showModal = false;
  }
  save() {
    if (!this.form.name || !this.form.code) {
      this.errorMsg = "Le nom et le code sont obligatoires";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const companyId = this.authService.getCompanyId();
    const dto = __spreadProps(__spreadValues({}, this.form), { companyId, active: true });
    const obs = this.editingId ? this.stockService.updateAgency(this.editingId, dto) : this.stockService.createAgency(dto);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.showSuccess(this.editingId ? "Agence mise \xE0 jour" : "Agence cr\xE9\xE9e");
        this.load();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  emptyForm() {
    return { name: "", code: "", address: "", contactPerson: "", phone: "", email: "", companyId: 0, active: true };
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 3e3);
  }
  static {
    this.\u0275fac = function AgencyListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgencyListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgencyListComponent, selectors: [["app-agency-list"]], decls: 13, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "btn-primary", 3, "click"], [1, "material-icons"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "agencies-table"], [1, "code-badge"], [1, "agency-name"], [1, "text-muted"], [1, "text-muted", "small"], ["title", "Modifier", 1, "btn-edit", 3, "click"], ["colspan", "7", 1, "empty-state"], [1, "modal-backdrop", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Agence Nord", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "AGC-NORD", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom du responsable", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+237 6XX XXX XXX", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "agence@groupe.cm", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["type", "text", "placeholder", "Ville, R\xE9gion", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-primary", 3, "click", "disabled"]], template: function AgencyListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Agences distantes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function AgencyListComponent_Template_button_click_4_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Nouvelle agence ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, AgencyListComponent_Conditional_8_Template, 4, 1, "div", 5);
        \u0275\u0275conditionalCreate(9, AgencyListComponent_Conditional_9_Template, 4, 1, "div", 6);
        \u0275\u0275conditionalCreate(10, AgencyListComponent_Conditional_10_Template, 4, 0, "div", 7)(11, AgencyListComponent_Conditional_11_Template, 21, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, AgencyListComponent_Conditional_12_Template, 46, 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.successMsg ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg && !ctx.showModal ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showModal ? 12 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f5ff;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.agencies-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.agencies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.agencies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.agencies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.agencies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.agency-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #212529;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: monospace;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n}\n.btn-edit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e8f0fe;\n  color: #2c7be5;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 10px;\n  width: 560px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  border-radius: 4px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 14px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n/*# sourceMappingURL=agency-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgencyListComponent, [{
    type: Component,
    args: [{ selector: "app-agency-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">Agences distantes</h1>
    <button class="btn-primary" (click)="openNew()">
      <span class="material-icons">add</span> Nouvelle agence
    </button>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (errorMsg && !showModal) {
    <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
  }

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <table class="agencies-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>Contact</th>
            <th>T\xE9l\xE9phone</th>
            <th>Email</th>
            <th>Adresse</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (a of agencies; track a.id) {
            <tr>
              <td><span class="code-badge">{{ a.code }}</span></td>
              <td class="agency-name">{{ a.name }}</td>
              <td class="text-muted">{{ a.contactPerson || '\u2014' }}</td>
              <td class="text-muted">{{ a.phone || '\u2014' }}</td>
              <td class="text-muted">{{ a.email || '\u2014' }}</td>
              <td class="text-muted small">{{ a.address || '\u2014' }}</td>
              <td>
                <button class="btn-edit" (click)="openEdit(a)" title="Modifier">
                  <span class="material-icons">edit</span>
                </button>
              </td>
            </tr>
          }
          @if (agencies.length === 0) {
            <tr><td colspan="7" class="empty-state">Aucune agence configur\xE9e \u2014 cliquez sur "Nouvelle agence" pour commencer</td></tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>

@if (showModal) {
  <div class="modal-backdrop" (click)="close()"></div>
  <div class="modal">
    <div class="modal-header">
      <h2>{{ editingId ? 'Modifier l\\'agence' : 'Nouvelle agence distante' }}</h2>
      <button class="btn-close" (click)="close()"><span class="material-icons">close</span></button>
    </div>
    <div class="modal-body">
      @if (errorMsg) {
        <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
      }
      <div class="form-grid">
        <div class="form-group">
          <label>Nom <span class="required">*</span></label>
          <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Agence Nord" />
        </div>
        <div class="form-group">
          <label>Code <span class="required">*</span></label>
          <input type="text" [(ngModel)]="form.code" class="form-control" placeholder="AGC-NORD" />
        </div>
        <div class="form-group">
          <label>Contact</label>
          <input type="text" [(ngModel)]="form.contactPerson" class="form-control" placeholder="Nom du responsable" />
        </div>
        <div class="form-group">
          <label>T\xE9l\xE9phone</label>
          <input type="text" [(ngModel)]="form.phone" class="form-control" placeholder="+237 6XX XXX XXX" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" [(ngModel)]="form.email" class="form-control" placeholder="agence@groupe.cm" />
        </div>
        <div class="form-group form-full">
          <label>Adresse</label>
          <input type="text" [(ngModel)]="form.address" class="form-control" placeholder="Ville, R\xE9gion" />
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" (click)="close()" [disabled]="saving">Annuler</button>
      <button class="btn-primary" (click)="save()" [disabled]="saving">
        <span class="material-icons">save</span>
        {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
      </button>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/stock/components/agences/agency-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f0f5ff;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.agencies-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.agencies-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.agencies-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.agencies-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.agencies-table tbody tr:hover td {\n  background: #f8f9fa;\n}\n.agency-name {\n  font-weight: 500;\n  color: #212529;\n}\n.text-muted {\n  color: #6c757d;\n}\n.small {\n  font-size: 12px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.code-badge {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: monospace;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.btn-edit {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n}\n.btn-edit .material-icons {\n  font-size: 16px;\n}\n.btn-edit:hover {\n  background: #e8f0fe;\n  color: #2c7be5;\n}\n.required {\n  color: #dc3545;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 10px;\n  width: 560px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n}\n.btn-close {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  border-radius: 4px;\n}\n.btn-close:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.modal-body {\n  padding: 20px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 14px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: #2c7be5;\n}\n/*# sourceMappingURL=agency-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgencyListComponent, { className: "AgencyListComponent", filePath: "src/app/modules/stock/components/agences/agency-list.component.ts", lineNumber: 14 });
})();
export {
  AgencyListComponent
};
//# sourceMappingURL=chunk-YERP5IBX.js.map
