import {
  CaisseService
} from "./chunk-MBTSHWNJ.js";
import {
  formatFCFA
} from "./chunk-TKYALNMA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/denominations/denominations.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DenominationsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.seedDefaults());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "auto_fix_high");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Coupures FCFA par d\xE9faut ");
    \u0275\u0275elementEnd();
  }
}
function DenominationsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 12);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function DenominationsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune coupure configur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Utilisez les coupures FCFA par d\xE9faut ou cr\xE9ez-les manuellement.");
    \u0275\u0275elementEnd()();
  }
}
function DenominationsComponent_Conditional_18_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 14)(9, "button", 15);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_18_For_12_Template_button_click_9_listener() {
      const d_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(d_r4));
    });
    \u0275\u0275elementStart(10, "span", 3);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 16);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_18_For_12_Template_button_click_12_listener() {
      const d_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(d_r4));
    });
    \u0275\u0275elementStart(13, "span", 3);
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.formatAmount(d_r4.valeur), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inactive", !d_r4.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.active ? "Active" : "Inactive");
  }
}
function DenominationsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, DenominationsComponent_Conditional_18_For_12_Template, 15, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.denominations);
  }
}
function DenominationsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_19_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "span", 3);
    \u0275\u0275text(4, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(8, "span", 3);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22)(12, "label");
    \u0275\u0275text(13, "Libell\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function DenominationsComponent_Conditional_19_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.label, $event) || (ctx_r1.form.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22)(16, "label");
    \u0275\u0275text(17, "Valeur (FCFA) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function DenominationsComponent_Conditional_19_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.valeur, $event) || (ctx_r1.form.valeur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 25)(20, "button", 26);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_19_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(21, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 27);
    \u0275\u0275listener("click", function DenominationsComponent_Conditional_19_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.editMode ? "Modifier" : "Nouvelle", " coupure");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.label);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.valeur);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.form.label || !ctx_r1.form.valeur);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer", " ");
  }
}
var DenominationsComponent = class _DenominationsComponent {
  constructor(caisseService, authService) {
    this.caisseService = caisseService;
    this.authService = authService;
    this.denominations = [];
    this.loading = true;
    this.saving = false;
    this.companyId = 0;
    this.showForm = false;
    this.editMode = false;
    this.form = { companyId: 0, label: "", valeur: 0 };
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }
  load() {
    this.loading = true;
    this.caisseService.getDenominations(this.companyId).subscribe({
      next: (d) => {
        this.denominations = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  seedDefaults() {
    this.caisseService.seedDefaultDenominations(this.companyId).subscribe({
      next: (d) => {
        this.denominations = d;
      }
    });
  }
  openCreate() {
    this.form = { companyId: this.companyId, label: "", valeur: 0 };
    this.editMode = false;
    this.showForm = true;
  }
  openEdit(d) {
    this.form = __spreadValues({}, d);
    this.editMode = true;
    this.showForm = true;
  }
  closeForm() {
    this.showForm = false;
  }
  save() {
    if (!this.form.label || !this.form.valeur)
      return;
    this.saving = true;
    const obs = this.editMode ? this.caisseService.updateDenomination(this.form.id, this.form) : this.caisseService.createDenomination(this.form);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.load();
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  remove(d) {
    if (!confirm(`D\xE9sactiver la coupure "${d.label}" ?`))
      return;
    this.caisseService.deleteDenomination(d.id).subscribe({ next: () => this.load() });
  }
  formatAmount(v) {
    return formatFCFA(v, false);
  }
  static {
    this.\u0275fac = function DenominationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DenominationsComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DenominationsComponent, selectors: [["app-denominations"]], decls: 20, vars: 3, consts: [[1, "list-page"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "header-actions"], [1, "btn-outline"], [1, "btn-primary", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "modal-overlay"], [1, "btn-outline", 3, "click"], [1, "material-icons", "spin"], [1, "status-badge"], [1, "actions"], [1, "btn-icon", 3, "click"], [1, "btn-icon", "danger", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-row"], ["type", "text", "placeholder", "Ex: Billet 5 000", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"]], template: function DenominationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1");
        \u0275\u0275text(7, "Coupures");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Billets et pi\xE8ces utilis\xE9s pour le comptage de caisse");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275conditionalCreate(11, DenominationsComponent_Conditional_11_Template, 4, 0, "button", 5);
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function DenominationsComponent_Template_button_click_12_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(13, "span", 3);
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Nouvelle coupure ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(16, DenominationsComponent_Conditional_16_Template, 4, 0, "div", 7)(17, DenominationsComponent_Conditional_17_Template, 7, 0, "div", 8)(18, DenominationsComponent_Conditional_18_Template, 13, 0, "table", 9);
        \u0275\u0275conditionalCreate(19, DenominationsComponent_Conditional_19_Template, 24, 5, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.denominations.length === 0 ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.loading ? 16 : ctx.denominations.length === 0 ? 17 : 18);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showForm ? 19 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n.list-page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #16A34A;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #16A34A;\n  border: none;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #15803D;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 24px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n  color: var(--text-muted);\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 12px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #64748B;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC2626;\n  color: #DC2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  width: 420px;\n  max-width: 95vw;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #16A34A;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=denominations.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DenominationsComponent, [{
    type: Component,
    args: [{ selector: "app-denominations", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="list-page">
  <div class="page-header">
    <div class="page-title">
      <span class="material-icons">payments</span>
      <div><h1>Coupures</h1><p>Billets et pi\xE8ces utilis\xE9s pour le comptage de caisse</p></div>
    </div>
    <div class="header-actions">
      @if (denominations.length === 0) {
        <button class="btn-outline" (click)="seedDefaults()">
          <span class="material-icons">auto_fix_high</span> Coupures FCFA par d\xE9faut
        </button>
      }
      <button class="btn-primary" (click)="openCreate()">
        <span class="material-icons">add</span> Nouvelle coupure
      </button>
    </div>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">sync</span> Chargement\u2026</div>
  } @else if (denominations.length === 0) {
    <div class="empty-state">
      <span class="material-icons">payments</span>
      <h3>Aucune coupure configur\xE9e</h3>
      <p>Utilisez les coupures FCFA par d\xE9faut ou cr\xE9ez-les manuellement.</p>
    </div>
  } @else {
    <table class="data-table">
      <thead><tr><th>Libell\xE9</th><th>Valeur</th><th>Statut</th><th></th></tr></thead>
      <tbody>
        @for (d of denominations; track d.id) {
          <tr>
            <td>{{ d.label }}</td>
            <td>{{ formatAmount(d.valeur) }} FCFA</td>
            <td><span class="status-badge" [class.inactive]="!d.active">{{ d.active ? 'Active' : 'Inactive' }}</span></td>
            <td class="actions">
              <button class="btn-icon" (click)="openEdit(d)"><span class="material-icons">edit</span></button>
              <button class="btn-icon danger" (click)="remove(d)"><span class="material-icons">delete</span></button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  }

  @if (showForm) {
    <div class="modal-overlay" (click)="closeForm()">
      <div class="modal-box" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <span class="material-icons">payments</span>
          <h2>{{ editMode ? 'Modifier' : 'Nouvelle' }} coupure</h2>
          <button class="btn-close" (click)="closeForm()"><span class="material-icons">close</span></button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <label>Libell\xE9 *</label>
            <input type="text" [(ngModel)]="form.label" placeholder="Ex: Billet 5 000" />
          </div>
          <div class="form-row">
            <label>Valeur (FCFA) *</label>
            <input type="number" [(ngModel)]="form.valeur" min="0" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" (click)="closeForm()">Annuler</button>
          <button class="btn-save" (click)="save()" [disabled]="saving || !form.label || !form.valeur">
            {{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}
          </button>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/modules/caisses/components/denominations/denominations.component.scss */\n.list-page {\n  padding: 28px 32px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-title .material-icons {\n  font-size: 32px;\n  color: #16A34A;\n}\n.page-header .page-title h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-title p {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-primary,\n.btn-outline {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-primary .material-icons,\n.btn-outline .material-icons {\n  font-size: 17px;\n}\n.btn-primary {\n  background: #16A34A;\n  border: none;\n  color: white;\n}\n.btn-primary:hover {\n  background: #15803D;\n}\n.btn-outline {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n}\n.btn-outline:hover {\n  color: var(--text-primary);\n}\n.loading-state,\n.empty-state {\n  text-align: center;\n  padding: 50px 24px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n  color: var(--text-muted);\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 44px;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 12px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.data-table th {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border);\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.status-badge {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.status-badge.inactive {\n  background: rgba(100, 116, 139, 0.12);\n  color: #64748B;\n}\n.actions {\n  display: flex;\n  gap: 4px;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 15px;\n}\n.btn-icon.danger:hover {\n  border-color: #DC2626;\n  color: #DC2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  width: 420px;\n  max-width: 95vw;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header .material-icons {\n  font-size: 22px;\n  color: #16A34A;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close .material-icons {\n  font-size: 18px;\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.form-row input {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.btn-cancel {\n  padding: 8px 18px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-save {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-save:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=denominations.component.css.map */\n"] }]
  }], () => [{ type: CaisseService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DenominationsComponent, { className: "DenominationsComponent", filePath: "app/modules/caisses/components/denominations/denominations.component.ts", lineNumber: 15 });
})();
export {
  DenominationsComponent
};
//# sourceMappingURL=chunk-GB55E4SD.js.map
