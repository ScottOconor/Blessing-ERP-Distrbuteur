import {
  HrService
} from "./chunk-TCOWJUCH.js";
import {
  NotificationService
} from "./chunk-LUF5JDG2.js";
import {
  DefaultValueAccessor,
  FormsModule,
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
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/shared/account-picker.component.ts
var _forTrack0 = ($index, $item) => $item.code;
function AccountPickerComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("mousedown", function AccountPickerComponent_Conditional_2_For_2_Template_div_mousedown_0_listener() {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.select(a_r2));
    });
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.name);
  }
}
function AccountPickerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AccountPickerComponent_Conditional_2_For_2_Template, 5, 2, "div", 4, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.suggestions);
  }
}
function AccountPickerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("acc-missing", !ctx_r2.resolvedName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.resolvedName || "Compte introuvable dans le plan comptable", " ");
  }
}
var AccountPickerComponent = class _AccountPickerComponent {
  set code(value) {
    this._code = value ?? "";
    this.resolveName();
  }
  get code() {
    return this._code;
  }
  constructor(accountingService) {
    this.accountingService = accountingService;
    this._code = "";
    this.codeChange = new EventEmitter();
    this.accounts = [];
    this.suggestions = [];
    this.resolvedName = "";
    this.open = false;
  }
  ngOnInit() {
    this.accountingService.getAccounts(this.companyId).subscribe((a) => {
      this.accounts = a;
      this.resolveName();
    });
  }
  ngOnChanges() {
    this.resolveName();
  }
  resolveName() {
    const found = this.accounts.find((a) => a.code === this.code);
    this.resolvedName = found ? found.name : "";
  }
  onCodeChange(value) {
    this._code = value ?? "";
    this.codeChange.emit(this._code);
    this.resolveName();
    const q = this._code.trim().toLowerCase();
    if (!q) {
      this.suggestions = [];
      return;
    }
    this.suggestions = this.accounts.filter((a) => a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q)).slice(0, 20);
  }
  select(a) {
    this.code = a.code;
    this.codeChange.emit(a.code);
    this.resolveName();
    this.open = false;
  }
  onBlur() {
    setTimeout(() => this.open = false, 150);
  }
  static {
    this.\u0275fac = function AccountPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountPickerComponent)(\u0275\u0275directiveInject(AccountingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountPickerComponent, selectors: [["app-account-picker"]], inputs: { code: "code", companyId: "companyId" }, outputs: { codeChange: "codeChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 3, consts: [[1, "acc-picker"], ["placeholder", "Code ou libell\xE9\u2026", "autocomplete", "off", 3, "ngModelChange", "focus", "blur", "ngModel"], [1, "acc-dropdown"], [1, "acc-resolved", 3, "acc-missing"], [1, "acc-opt"], [1, "acc-opt", 3, "mousedown"], [1, "acc-resolved"]], template: function AccountPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
        \u0275\u0275listener("ngModelChange", function AccountPickerComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.onCodeChange($event);
        })("focus", function AccountPickerComponent_Template_input_focus_1_listener() {
          return ctx.open = true;
        })("blur", function AccountPickerComponent_Template_input_blur_1_listener() {
          return ctx.onBlur();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, AccountPickerComponent_Conditional_2_Template, 3, 0, "div", 2);
        \u0275\u0275conditionalCreate(3, AccountPickerComponent_Conditional_3_Template, 2, 3, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.code);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.open && ctx.suggestions.length > 0 ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.code ? 3 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.acc-picker[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.acc-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n  box-sizing: border-box;\n}\n.acc-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.acc-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n  max-height: 220px;\n  overflow-y: auto;\n  margin-top: 2px;\n}\n.acc-opt[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 7px 10px;\n  cursor: pointer;\n  font-size: 0.82rem;\n}\n.acc-opt[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.acc-opt[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #7C3AED;\n  font-weight: 700;\n  min-width: 60px;\n}\n.acc-opt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.acc-resolved[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.acc-resolved.acc-missing[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n/*# sourceMappingURL=account-picker.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountPickerComponent, [{
    type: Component,
    args: [{ selector: "app-account-picker", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="acc-picker">
      <input [ngModel]="code" (ngModelChange)="onCodeChange($event)"
             (focus)="open = true" (blur)="onBlur()" placeholder="Code ou libell\xE9\u2026" autocomplete="off">
      @if (open && suggestions.length > 0) {
        <div class="acc-dropdown">
          @for (a of suggestions; track a.code) {
            <div class="acc-opt" (mousedown)="select(a)">
              <code>{{ a.code }}</code><span>{{ a.name }}</span>
            </div>
          }
        </div>
      }
      @if (code) {
        <div class="acc-resolved" [class.acc-missing]="!resolvedName">
          {{ resolvedName || 'Compte introuvable dans le plan comptable' }}
        </div>
      }
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;b8a8aedeb5c9bb9800ed8a610d18ef795ae22bc3a7e231a8d5460108ee5aa8ca;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/shared/account-picker.component.ts */\n.acc-picker {\n  position: relative;\n  width: 100%;\n}\n.acc-picker input {\n  width: 100%;\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n  box-sizing: border-box;\n}\n.acc-picker input:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.acc-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n  max-height: 220px;\n  overflow-y: auto;\n  margin-top: 2px;\n}\n.acc-opt {\n  display: flex;\n  gap: 10px;\n  padding: 7px 10px;\n  cursor: pointer;\n  font-size: 0.82rem;\n}\n.acc-opt:hover {\n  background: var(--bg-elevated);\n}\n.acc-opt code {\n  color: #7C3AED;\n  font-weight: 700;\n  min-width: 60px;\n}\n.acc-opt span {\n  color: var(--text-primary);\n}\n.acc-resolved {\n  font-size: 0.76rem;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.acc-resolved.acc-missing {\n  color: #ef4444;\n}\n/*# sourceMappingURL=account-picker.component.css.map */\n'] }]
  }], () => [{ type: AccountingService }], { code: [{
    type: Input
  }], companyId: [{
    type: Input
  }], codeChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountPickerComponent, { className: "AccountPickerComponent", filePath: "app/modules/hr/components/shared/account-picker.component.ts", lineNumber: 63 });
})();

// src/app/modules/hr/components/config/payroll-config.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function PayrollConfigComponent_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_15_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouvelle r\xE8gle");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_15_Conditional_6_For_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_15_Conditional_6_For_25_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(r_r4));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function PayrollConfigComponent_Conditional_15_Conditional_6_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 14);
    \u0275\u0275conditionalCreate(22, PayrollConfigComponent_Conditional_15_Conditional_6_For_25_Conditional_22_Template, 3, 0, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.sequence);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.catName(r_r4.categoryCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(r_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.quantityWorkedDaysCode ? "\xD7 " + ctx_r1.dayTypeName(r_r4.quantityWorkedDaysCode) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.accLabel(r_r4.accountDebitCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.accLabel(r_r4.accountCreditCode));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ok", r_r4.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.active ? "Oui" : "Non");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 22 : -1);
  }
}
function PayrollConfigComponent_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "S\xE9q.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Quantit\xE9 variable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Cpt d\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Cpt cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, PayrollConfigComponent_Conditional_15_Conditional_6_For_25_Template, 23, 12, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.rules);
  }
}
function PayrollConfigComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Bar\xE8mes l\xE9gaux camerounais (CNPS, CFC, RAV, IRPP, CAC, charges patronales) pr\xE9-configur\xE9s. Les taux (%) des formules l\xE9gales \xE0 taux plat (CNPS, CFC, CAC, charges patronales) sont modifiables au cas o\xF9 le bar\xE8me change \u2014 ouvrez la r\xE8gle et changez le champ \xAB Taux (%) \xBB. Une r\xE8gle peut aussi d\xE9pendre des jours saisis sur le bulletin (ex. retenue = taux journalier \xD7 jours d'absence). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "span");
    \u0275\u0275conditionalCreate(4, PayrollConfigComponent_Conditional_15_Conditional_4_Template, 4, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PayrollConfigComponent_Conditional_15_Conditional_5_Template, 2, 0, "div", 9)(6, PayrollConfigComponent_Conditional_15_Conditional_6_Template, 26, 0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.canEdit ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading ? 5 : 6);
  }
}
function PayrollConfigComponent_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_16_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateInput());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau type");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Aucun type d'\xE9l\xE9ment variable d\xE9fini.");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_16_Conditional_6_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_16_Conditional_6_For_13_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const t_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditInput(t_r7));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_16_Conditional_6_For_13_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const t_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.delInput(t_r7));
    });
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function PayrollConfigComponent_Conditional_16_Conditional_6_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 14);
    \u0275\u0275conditionalCreate(10, PayrollConfigComponent_Conditional_16_Conditional_6_For_13_Conditional_10_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ok", t_r7.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7.active ? "Oui" : "Non");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 10 : -1);
  }
}
function PayrollConfigComponent_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, PayrollConfigComponent_Conditional_16_Conditional_6_For_13_Template, 11, 6, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.inputTypes);
  }
}
function PayrollConfigComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Catalogue des \xE9l\xE9ments variables saisissables sur un bulletin (avance, prime exceptionnelle, retenue diverse\u2026). Pour qu'un \xE9l\xE9ment soit r\xE9ellement pris en compte dans le calcul, cr\xE9ez aussi une r\xE8gle salariale de type \xAB \xC9l\xE9ment variable \xBB avec le m\xEAme code (onglet R\xE8gles salariales). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "span");
    \u0275\u0275conditionalCreate(4, PayrollConfigComponent_Conditional_16_Conditional_4_Template, 4, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PayrollConfigComponent_Conditional_16_Conditional_5_Template, 2, 0, "div", 17)(6, PayrollConfigComponent_Conditional_16_Conditional_6_Template, 14, 0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.canEdit ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inputTypes.length === 0 ? 5 : 6);
  }
}
function PayrollConfigComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_17_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateDay());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau type");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Aucun type de jours d\xE9fini.");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_17_Conditional_6_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_17_Conditional_6_For_13_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const t_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditDay(t_r10));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_17_Conditional_6_For_13_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const t_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.delDay(t_r10));
    });
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function PayrollConfigComponent_Conditional_17_Conditional_6_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 14);
    \u0275\u0275conditionalCreate(10, PayrollConfigComponent_Conditional_17_Conditional_6_For_13_Conditional_10_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r10.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ok", t_r10.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r10.active ? "Oui" : "Non");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 10 : -1);
  }
}
function PayrollConfigComponent_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, PayrollConfigComponent_Conditional_17_Conditional_6_For_13_Template, 11, 6, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.dayTypes);
  }
}
function PayrollConfigComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Catalogue des types de jours saisissables sur un bulletin (jours travaill\xE9s, absence, cong\xE9 pay\xE9\u2026). R\xE9f\xE9rencez un de ces codes dans le champ \xAB Quantit\xE9 variable \xBB d'une r\xE8gle salariale pour faire d\xE9pendre son montant du nombre de jours saisi. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "span");
    \u0275\u0275conditionalCreate(4, PayrollConfigComponent_Conditional_17_Conditional_4_Template, 4, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PayrollConfigComponent_Conditional_17_Conditional_5_Template, 2, 0, "div", 17)(6, PayrollConfigComponent_Conditional_17_Conditional_6_Template, 14, 0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.canEdit ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dayTypes.length === 0 ? 5 : 6);
  }
}
function PayrollConfigComponent_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_18_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateLeaveType());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau type");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Aucun type de cong\xE9 d\xE9fini.");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_18_Conditional_6_For_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_18_Conditional_6_For_19_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const t_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditLeaveType(t_r13));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_18_Conditional_6_For_19_Conditional_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const t_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.delLeaveType(t_r13));
    });
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function PayrollConfigComponent_Conditional_18_Conditional_6_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 14);
    \u0275\u0275conditionalCreate(16, PayrollConfigComponent_Conditional_18_Conditional_6_For_19_Conditional_16_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r13.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r13.paid ? "Oui" : "Non");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r13.monthlyAccrualDays || 0, " j");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r13.workedDaysTypeCode ? ctx_r1.dayTypeName(t_r13.workedDaysTypeCode) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ok", t_r13.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r13.active ? "Oui" : "Non");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 16 : -1);
  }
}
function PayrollConfigComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Pay\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 14);
    \u0275\u0275text(11, "Acquisition / mois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Jours travaill\xE9s li\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, PayrollConfigComponent_Conditional_18_Conditional_6_For_19_Template, 17, 9, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.leaveTypes);
  }
}
function PayrollConfigComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Catalogue des types de cong\xE9s (Cong\xE9s Pay\xE9s, RTT, Repos Compensateur\u2026). L'acquisition mensuelle sert \xE0 calculer le compteur \xAB D\xFB \xBB affich\xE9 sur le bulletin. Le lien vers un type de jours travaill\xE9s est facultatif : renseignez-le seulement si ce cong\xE9 doit \xEAtre repris par une r\xE8gle salariale (ex. cong\xE9 sans solde qui retient un montant). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "span");
    \u0275\u0275conditionalCreate(4, PayrollConfigComponent_Conditional_18_Conditional_4_Template, 4, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PayrollConfigComponent_Conditional_18_Conditional_5_Template, 2, 0, "div", 17)(6, PayrollConfigComponent_Conditional_18_Conditional_6_Template, 20, 0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.canEdit ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.leaveTypes.length === 0 ? 5 : 6);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function PayrollConfigComponent_Conditional_19_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("value", c_r15.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r15.name);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label");
    \u0275\u0275text(2, "Montant fixe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_41_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.amountFix, $event) || (ctx_r1.form.amountFix = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.amountFix);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label");
    \u0275\u0275text(2, "Pourcentage (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_42_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.amountPercentage, $event) || (ctx_r1.form.amountPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "label");
    \u0275\u0275text(6, "Base (code r\xE8gle/cat\xE9gorie)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_42_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.baseCode, $event) || (ctx_r1.form.baseCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.amountPercentage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.baseCode);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_43_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r19 = ctx.$implicit;
    \u0275\u0275property("value", t_r19.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r19.name, " (", t_r19.code, ")");
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label");
    \u0275\u0275text(2, "Type d'\xE9l\xE9ment variable r\xE9f\xE9renc\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 25);
    \u0275\u0275listener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_43_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickInputType($event));
    });
    \u0275\u0275elementStart(4, "option", 40);
    \u0275\u0275text(5, "\u2014 Choisir dans le catalogue \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, PayrollConfigComponent_Conditional_19_Conditional_43_For_7_Template, 2, 3, "option", 28, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.code);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.inputTypes);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "label");
    \u0275\u0275text(2, "Formule int\xE9gr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.builtinCode);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label");
    \u0275\u0275text(2, "Taux (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_45_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.amountPercentage, $event) || (ctx_r1.form.amountPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5, "Taux l\xE9gal \u2014 modifiable si le bar\xE8me change (loi de finances, revalorisation\u2026).");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.amountPercentage);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label");
    \u0275\u0275text(2, "Plafond de cotisation (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_46_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ceilingAmount, $event) || (ctx_r1.form.ceilingAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5, "Plafond CNPS \u2014 laisser vide pour utiliser le bar\xE8me l\xE9gal en vigueur.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.ceilingAmount);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_47_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label");
    \u0275\u0275text(2, "Seuil d'imposition (FCFA, RNI mensuel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_47_Conditional_4_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.amountFix, $event) || (ctx_r1.form.amountFix = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.amountFix);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label");
    \u0275\u0275text(2, "Bar\xE8me par tranches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Conditional_47_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.bracketsConfig, $event) || (ctx_r1.form.bracketsConfig = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, PayrollConfigComponent_Conditional_19_Conditional_47_Conditional_4_Template, 4, 1, "div", 24);
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.bracketsConfig);
    \u0275\u0275property("placeholder", ctx_r1.bracketsHint);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.builtinCode === "IRPP" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.bracketsHint);
  }
}
function PayrollConfigComponent_Conditional_19_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r24 = ctx.$implicit;
    \u0275\u0275property("value", t_r24.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Multiplier par : ", t_r24.name, " (", t_r24.code, ")");
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label");
    \u0275\u0275text(2, "Compte de d\xE9bit (OHADA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-account-picker", 46);
    \u0275\u0275twoWayListener("codeChange", function PayrollConfigComponent_Conditional_19_Conditional_56_Template_app_account_picker_codeChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.accountDebitCode, $event) || (ctx_r1.form.accountDebitCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "label");
    \u0275\u0275text(6, "Compte de cr\xE9dit (OHADA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-account-picker", 46);
    \u0275\u0275twoWayListener("codeChange", function PayrollConfigComponent_Conditional_19_Conditional_56_Template_app_account_picker_codeChange_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.accountCreditCode, $event) || (ctx_r1.form.accountCreditCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("code", ctx_r1.form.accountDebitCode);
    \u0275\u0275property("companyId", ctx_r1.companyId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("code", ctx_r1.form.accountCreditCode);
    \u0275\u0275property("companyId", ctx_r1.companyId);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label");
    \u0275\u0275text(2, "Compte cible \u2014 cr\xE9dit (retenue/dette)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-account-picker", 46);
    \u0275\u0275twoWayListener("codeChange", function PayrollConfigComponent_Conditional_19_Conditional_57_Template_app_account_picker_codeChange_3_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.accountCreditCode, $event) || (ctx_r1.form.accountCreditCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("code", ctx_r1.form.accountCreditCode);
    \u0275\u0275property("companyId", ctx_r1.companyId);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label");
    \u0275\u0275text(2, "Compte cible \u2014 d\xE9bit (charge/gain)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-account-picker", 46);
    \u0275\u0275twoWayListener("codeChange", function PayrollConfigComponent_Conditional_19_Conditional_58_Template_app_account_picker_codeChange_3_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.accountDebitCode, $event) || (ctx_r1.form.accountDebitCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("code", ctx_r1.form.accountDebitCode);
    \u0275\u0275property("companyId", ctx_r1.companyId);
  }
}
function PayrollConfigComponent_Conditional_19_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_19_Conditional_76_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.del());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Supprimer");
    \u0275\u0275elementEnd();
  }
}
function PayrollConfigComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_19_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275conditionalCreate(9, PayrollConfigComponent_Conditional_19_Conditional_9_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 24)(12, "label");
    \u0275\u0275text(13, "Libell\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24)(16, "label");
    \u0275\u0275text(17, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.code, $event) || (ctx_r1.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "label");
    \u0275\u0275text(21, "S\xE9quence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sequence, $event) || (ctx_r1.form.sequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 24)(24, "label");
    \u0275\u0275text(25, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.categoryCode, $event) || (ctx_r1.form.categoryCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_select_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange());
    });
    \u0275\u0275repeaterCreate(27, PayrollConfigComponent_Conditional_19_For_28_Template, 2, 2, "option", 28, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 24)(30, "label");
    \u0275\u0275text(31, "Type de calcul");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.computeType, $event) || (ctx_r1.form.computeType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 29);
    \u0275\u0275text(34, "Montant fixe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 30);
    \u0275\u0275text(36, "Pourcentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 31);
    \u0275\u0275text(38, "\xC9l\xE9ment variable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 32);
    \u0275\u0275text(40, "Formule l\xE9gale");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(41, PayrollConfigComponent_Conditional_19_Conditional_41_Template, 4, 1, "div", 24);
    \u0275\u0275conditionalCreate(42, PayrollConfigComponent_Conditional_19_Conditional_42_Template, 8, 2);
    \u0275\u0275conditionalCreate(43, PayrollConfigComponent_Conditional_19_Conditional_43_Template, 8, 1, "div", 33);
    \u0275\u0275conditionalCreate(44, PayrollConfigComponent_Conditional_19_Conditional_44_Template, 4, 1, "div", 33);
    \u0275\u0275conditionalCreate(45, PayrollConfigComponent_Conditional_19_Conditional_45_Template, 6, 1);
    \u0275\u0275conditionalCreate(46, PayrollConfigComponent_Conditional_19_Conditional_46_Template, 6, 1);
    \u0275\u0275conditionalCreate(47, PayrollConfigComponent_Conditional_19_Conditional_47_Template, 7, 4);
    \u0275\u0275elementStart(48, "div", 33)(49, "label");
    \u0275\u0275text(50, "Quantit\xE9 variable (d\xE9pend des jours saisis sur le bulletin)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.quantityWorkedDaysCode, $event) || (ctx_r1.form.quantityWorkedDaysCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(52, "option", 34);
    \u0275\u0275text(53, "Aucune \u2014 quantit\xE9 = 1 (comportement normal)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(54, PayrollConfigComponent_Conditional_19_For_55_Template, 2, 3, "option", 28, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(56, PayrollConfigComponent_Conditional_19_Conditional_56_Template, 8, 4)(57, PayrollConfigComponent_Conditional_19_Conditional_57_Template, 4, 2, "div", 33)(58, PayrollConfigComponent_Conditional_19_Conditional_58_Template, 4, 2, "div", 33);
    \u0275\u0275elementStart(59, "div", 24)(60, "label");
    \u0275\u0275text(61, "Retenue ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_select_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.deduction, $event) || (ctx_r1.form.deduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(63, "option", 34);
    \u0275\u0275text(64, "Non (gain)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 34);
    \u0275\u0275text(66, "Oui (retenue)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 24)(68, "label");
    \u0275\u0275text(69, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_19_Template_select_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.active, $event) || (ctx_r1.form.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(71, "option", 34);
    \u0275\u0275text(72, "Oui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 34);
    \u0275\u0275text(74, "Non");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(75, "div", 35);
    \u0275\u0275conditionalCreate(76, PayrollConfigComponent_Conditional_19_Conditional_76_Template, 4, 0, "button", 36);
    \u0275\u0275elementStart(77, "button", 37);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_19_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(78, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 38);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_19_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.form.id ? "Modifier" : "Nouvelle", " r\xE8gle salariale");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.code);
    \u0275\u0275property("disabled", !!ctx_r1.builtin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sequence);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.categoryCode);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.computeType);
    \u0275\u0275property("disabled", !!ctx_r1.builtin);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.form.computeType === "FIX" ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.computeType === "PERCENTAGE" ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.computeType === "INPUT" ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.builtin ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditableRateBuiltin ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCeilingBuiltin ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBracketsBuiltin ? 47 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.quantityWorkedDaysCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.dayTypes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.accountMode === "BOTH" ? 56 : ctx_r1.accountMode === "CREDIT" ? 57 : 58);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.deduction);
    \u0275\u0275property("disabled", !!ctx_r1.builtin);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.active);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.form.id && !ctx_r1.builtin ? 76 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
function PayrollConfigComponent_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function PayrollConfigComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showInputModal = false);
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_20_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showInputModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275conditionalCreate(9, PayrollConfigComponent_Conditional_20_Conditional_9_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 33)(12, "label");
    \u0275\u0275text(13, "Libell\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_20_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputForm.name, $event) || (ctx_r1.inputForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "label");
    \u0275\u0275text(17, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_20_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputForm.code, $event) || (ctx_r1.inputForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "label");
    \u0275\u0275text(21, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_20_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputForm.active, $event) || (ctx_r1.inputForm.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 34);
    \u0275\u0275text(24, "Oui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 34);
    \u0275\u0275text(26, "Non");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 35)(28, "button", 37);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_20_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showInputModal = false);
    });
    \u0275\u0275text(29, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 38);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_20_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveInput());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.inputForm.id ? "Modifier" : "Nouveau", " type d'\xE9l\xE9ment variable");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputForm.active);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
function PayrollConfigComponent_Conditional_21_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function PayrollConfigComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDayModal = false);
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_21_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDayModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275conditionalCreate(9, PayrollConfigComponent_Conditional_21_Conditional_9_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 33)(12, "label");
    \u0275\u0275text(13, "Libell\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_21_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dayForm.name, $event) || (ctx_r1.dayForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "label");
    \u0275\u0275text(17, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_21_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dayForm.code, $event) || (ctx_r1.dayForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "label");
    \u0275\u0275text(21, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_21_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dayForm.active, $event) || (ctx_r1.dayForm.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 34);
    \u0275\u0275text(24, "Oui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 34);
    \u0275\u0275text(26, "Non");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 35)(28, "button", 37);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_21_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDayModal = false);
    });
    \u0275\u0275text(29, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 38);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_21_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveDay());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.dayForm.id ? "Modifier" : "Nouveau", " type de jours");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dayForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dayForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dayForm.active);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
function PayrollConfigComponent_Conditional_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function PayrollConfigComponent_Conditional_22_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r32 = ctx.$implicit;
    \u0275\u0275property("value", t_r32.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r32.name, " (", t_r32.code, ")");
  }
}
function PayrollConfigComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLeaveTypeModal = false);
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_22_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLeaveTypeModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275conditionalCreate(9, PayrollConfigComponent_Conditional_22_Conditional_9_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 33)(12, "label");
    \u0275\u0275text(13, "Libell\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_22_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveTypeForm.name, $event) || (ctx_r1.leaveTypeForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "label");
    \u0275\u0275text(17, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_22_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveTypeForm.code, $event) || (ctx_r1.leaveTypeForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "label");
    \u0275\u0275text(21, "Pay\xE9 ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_22_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveTypeForm.paid, $event) || (ctx_r1.leaveTypeForm.paid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 34);
    \u0275\u0275text(24, "Oui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 34);
    \u0275\u0275text(26, "Non");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 24)(28, "label");
    \u0275\u0275text(29, "Acquisition (j/mois)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_22_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveTypeForm.monthlyAccrualDays, $event) || (ctx_r1.leaveTypeForm.monthlyAccrualDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 33)(32, "label");
    \u0275\u0275text(33, "Type de jours travaill\xE9s li\xE9 (facultatif)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_22_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveTypeForm.workedDaysTypeCode, $event) || (ctx_r1.leaveTypeForm.workedDaysTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 34);
    \u0275\u0275text(36, "Aucun");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, PayrollConfigComponent_Conditional_22_For_38_Template, 2, 3, "option", 28, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 24)(40, "label");
    \u0275\u0275text(41, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollConfigComponent_Conditional_22_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.leaveTypeForm.active, $event) || (ctx_r1.leaveTypeForm.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 34);
    \u0275\u0275text(44, "Oui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 34);
    \u0275\u0275text(46, "Non");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 35)(48, "button", 37);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_22_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLeaveTypeModal = false);
    });
    \u0275\u0275text(49, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 38);
    \u0275\u0275listener("click", function PayrollConfigComponent_Conditional_22_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveLeaveType());
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.leaveTypeForm.id ? "Modifier" : "Nouveau", " type de cong\xE9");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveTypeForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveTypeForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveTypeForm.paid);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveTypeForm.monthlyAccrualDays);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveTypeForm.workedDaysTypeCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.dayTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.leaveTypeForm.active);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
var PayrollConfigComponent = class _PayrollConfigComponent {
  constructor(hr, auth, accountingService, notificationService) {
    this.hr = hr;
    this.auth = auth;
    this.accountingService = accountingService;
    this.notificationService = notificationService;
    this.tab = "rules";
    this.rules = [];
    this.categories = [];
    this.inputTypes = [];
    this.dayTypes = [];
    this.leaveTypes = [];
    this.loading = false;
    this.saving = false;
    this.err = "";
    this.canEdit = false;
    this.showModal = false;
    this.form = { name: "", code: "", categoryCode: "ALW", companyId: 0 };
    this.showInputModal = false;
    this.inputForm = { name: "", code: "", companyId: 0 };
    this.showDayModal = false;
    this.dayForm = { name: "", code: "", companyId: 0 };
    this.showLeaveTypeModal = false;
    this.leaveTypeForm = { name: "", code: "", companyId: 0 };
    this.accounts = [];
  }
  ngOnInit() {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission("RH", "CONFIG_PAIE", "EDIT") || this.auth.isPrivileged();
    this.hr.getCategories(this.companyId).subscribe((c) => this.categories = c);
    this.accountingService.getAccounts(this.companyId).subscribe((a) => this.accounts = a);
    this.loadDayTypes();
    this.loadInputTypes();
    this.loadLeaveTypes();
    this.load();
  }
  /** "661100 — Appointements salaires et commissions" ou le code brut si le compte est introuvable. */
  accLabel(code) {
    if (!code)
      return "\u2014";
    const a = this.accounts.find((x) => x.code === code);
    return a ? `${a.code} \u2014 ${a.name}` : `${code} (introuvable)`;
  }
  get builtin() {
    return this.form.computeType === "BUILTIN";
  }
  static {
    this.EDITABLE_RATE_BUILTINS = ["CNPS_EMP", "CFC_EMP", "CAC", "CNPS_PAT", "PVID_PAT", "AF_PAT", "ATMP_PAT", "CFC_PAT", "FNE_PAT"];
  }
  get isEditableRateBuiltin() {
    return this.builtin && _PayrollConfigComponent.EDITABLE_RATE_BUILTINS.includes(this.form.builtinCode || "");
  }
  static {
    this.CEILING_BUILTINS = ["CNPS_EMP", "CNPS_PAT"];
  }
  get isCeilingBuiltin() {
    return this.builtin && _PayrollConfigComponent.CEILING_BUILTINS.includes(this.form.builtinCode || "");
  }
  /** IRPP/RAV sont des barèmes par tranches — exclus de EDITABLE_RATE_BUILTINS, édités via bracketsConfig. */
  get isBracketsBuiltin() {
    return this.builtin && (this.form.builtinCode === "IRPP" || this.form.builtinCode === "RAV");
  }
  get bracketsHint() {
    return this.form.builtinCode === "IRPP" ? 'Tranches IRPP : "plafondRNI:tauxPct,..." \u2014 ex. 2000000:10,3000000:15,5000000:25,999999999999:35' : 'Tranches RAV : "plafondBrut:montantMensuel,..." \u2014 laisser vide pour utiliser le bar\xE8me l\xE9gal';
  }
  /**
   * Quel(s) champ(s) compte afficher selon la catégorie : une retenue (DED) ou le net (NET) ne
   * doivent jamais recevoir de compte de débit (déjà couvert par le brut) ; un gain (BASIC/ALW/
   * GROSS) ne doit recevoir qu'un débit ; seules les charges patronales (COMP) ont les deux,
   * car elles ne transitent par aucune autre ligne du bulletin.
   */
  get accountMode() {
    if (this.form.categoryCode === "COMP")
      return "BOTH";
    if (this.form.categoryCode === "DED" || this.form.categoryCode === "NET")
      return "CREDIT";
    return "DEBIT";
  }
  static {
    this.SUGGESTED_ACCOUNTS = {
      BASIC: { debit: "661100" },
      // Appointements, salaires et commissions
      ALW: { debit: "661200" },
      // Primes et gratifications
      DED: { credit: "421100" },
      // Personnel, avances (cas le plus courant : avance/retenue diverse)
      NET: { credit: "422000" },
      // Personnel, rémunérations dues
      COMP: { debit: "664100" }
      // Charges sociales sur rémunération du personnel national
    };
  }
  /** Déclenché au changement de catégorie : pré-remplit le compte cible s'il est encore vide. */
  onCategoryChange() {
    const suggestion = _PayrollConfigComponent.SUGGESTED_ACCOUNTS[this.form.categoryCode];
    if (!suggestion)
      return;
    if (suggestion.debit && !this.form.accountDebitCode)
      this.form.accountDebitCode = suggestion.debit;
    if (suggestion.credit && !this.form.accountCreditCode)
      this.form.accountCreditCode = suggestion.credit;
  }
  load() {
    this.loading = true;
    this.hr.getRules(this.companyId).subscribe({ next: (r) => {
      this.rules = r;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  loadInputTypes() {
    this.hr.getInputTypes(this.companyId).subscribe((t) => this.inputTypes = t);
  }
  loadDayTypes() {
    this.hr.getWorkedDaysTypes(this.companyId).subscribe((t) => this.dayTypes = t);
  }
  loadLeaveTypes() {
    this.hr.getLeaveTypes(this.companyId).subscribe((t) => this.leaveTypes = t);
  }
  catName(code) {
    return this.categories.find((c) => c.code === code)?.name ?? code;
  }
  dayTypeName(code) {
    return this.dayTypes.find((t) => t.code === code)?.name ?? code;
  }
  typeLabel(r) {
    if (r.computeType === "BUILTIN") {
      const rateBuiltins = _PayrollConfigComponent.EDITABLE_RATE_BUILTINS;
      return rateBuiltins.includes(r.builtinCode || "") ? `Formule l\xE9gale \u2014 ${r.amountPercentage || 0} %` : "Formule l\xE9gale";
    }
    if (r.computeType === "PERCENTAGE")
      return (r.amountPercentage || 0) + "% de " + (r.baseCode || "GROSS");
    if (r.computeType === "INPUT")
      return "\xC9l\xE9ment variable";
    return "Fixe : " + (r.amountFix || 0);
  }
  pickInputType(code) {
    this.form.code = code;
    const t = this.inputTypes.find((x) => x.code === code);
    if (t && !this.form.name)
      this.form.name = t.name;
  }
  // ── Règles ──
  openCreate() {
    this.form = { name: "", code: "", categoryCode: "ALW", companyId: this.companyId, computeType: "FIX", sequence: 50, amountFix: 0, amountPercentage: 0, deduction: false, active: true };
    this.onCategoryChange();
    this.err = "";
    this.showModal = true;
  }
  openEdit(r) {
    this.form = __spreadValues({}, r);
    this.err = "";
    this.showModal = true;
  }
  save() {
    if (!this.form.name || !this.form.code) {
      this.err = "Libell\xE9 et code obligatoires";
      return;
    }
    this.form.companyId = this.companyId;
    if (this.accountMode === "CREDIT")
      this.form.accountDebitCode = void 0;
    if (this.accountMode === "DEBIT")
      this.form.accountCreditCode = void 0;
    this.saving = true;
    const obs = this.form.id ? this.hr.updateRule(this.form.id, this.form) : this.hr.saveRule(this.form);
    obs.subscribe({ next: () => {
      this.saving = false;
      this.showModal = false;
      this.load();
    }, error: (e) => {
      this.saving = false;
      this.err = e.error?.message || "Erreur";
    } });
  }
  del() {
    if (!this.form.id || !confirm("Supprimer cette r\xE8gle ?"))
      return;
    this.hr.deleteRule(this.form.id).subscribe({
      next: () => {
        this.showModal = false;
        this.load();
      },
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  // ── Types d'éléments variables ──
  openCreateInput() {
    this.inputForm = { name: "", code: "", companyId: this.companyId, active: true };
    this.err = "";
    this.showInputModal = true;
  }
  openEditInput(t) {
    this.inputForm = __spreadValues({}, t);
    this.err = "";
    this.showInputModal = true;
  }
  saveInput() {
    if (!this.inputForm.name || !this.inputForm.code) {
      this.err = "Libell\xE9 et code obligatoires";
      return;
    }
    this.inputForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.inputForm.id ? this.hr.updateInputType(this.inputForm.id, this.inputForm) : this.hr.saveInputType(this.inputForm);
    obs.subscribe({ next: () => {
      this.saving = false;
      this.showInputModal = false;
      this.loadInputTypes();
    }, error: (e) => {
      this.saving = false;
      this.err = e.error?.message || "Erreur";
    } });
  }
  delInput(t) {
    if (!confirm(`Supprimer \xAB ${t.name} \xBB ?`))
      return;
    this.hr.deleteInputType(t.id).subscribe({
      next: () => this.loadInputTypes(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  // ── Types de jours travaillés ──
  openCreateDay() {
    this.dayForm = { name: "", code: "", companyId: this.companyId, active: true };
    this.err = "";
    this.showDayModal = true;
  }
  openEditDay(t) {
    this.dayForm = __spreadValues({}, t);
    this.err = "";
    this.showDayModal = true;
  }
  saveDay() {
    if (!this.dayForm.name || !this.dayForm.code) {
      this.err = "Libell\xE9 et code obligatoires";
      return;
    }
    this.dayForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.dayForm.id ? this.hr.updateWorkedDaysType(this.dayForm.id, this.dayForm) : this.hr.saveWorkedDaysType(this.dayForm);
    obs.subscribe({ next: () => {
      this.saving = false;
      this.showDayModal = false;
      this.loadDayTypes();
    }, error: (e) => {
      this.saving = false;
      this.err = e.error?.message || "Erreur";
    } });
  }
  delDay(t) {
    if (!confirm(`Supprimer \xAB ${t.name} \xBB ?`))
      return;
    this.hr.deleteWorkedDaysType(t.id).subscribe({
      next: () => this.loadDayTypes(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  // ── Types de congés ──
  openCreateLeaveType() {
    this.leaveTypeForm = { name: "", code: "", companyId: this.companyId, paid: true, monthlyAccrualDays: 0, active: true };
    this.err = "";
    this.showLeaveTypeModal = true;
  }
  openEditLeaveType(t) {
    this.leaveTypeForm = __spreadValues({}, t);
    this.err = "";
    this.showLeaveTypeModal = true;
  }
  saveLeaveType() {
    if (!this.leaveTypeForm.name || !this.leaveTypeForm.code) {
      this.err = "Libell\xE9 et code obligatoires";
      return;
    }
    this.leaveTypeForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.leaveTypeForm.id ? this.hr.updateLeaveType(this.leaveTypeForm.id, this.leaveTypeForm) : this.hr.saveLeaveType(this.leaveTypeForm);
    obs.subscribe({ next: () => {
      this.saving = false;
      this.showLeaveTypeModal = false;
      this.loadLeaveTypes();
    }, error: (e) => {
      this.saving = false;
      this.err = e.error?.message || "Erreur";
    } });
  }
  delLeaveType(t) {
    if (!confirm(`Supprimer \xAB ${t.name} \xBB ?`))
      return;
    this.hr.deleteLeaveType(t.id).subscribe({
      next: () => this.loadLeaveTypes(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  static {
    this.\u0275fac = function PayrollConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PayrollConfigComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayrollConfigComponent, selectors: [["app-hr-payroll-config"]], decls: 23, vars: 16, consts: [[1, "hp"], [1, "hp-head"], [1, "material-icons"], [1, "tabs"], [1, "tab", 3, "click"], [1, "ov"], [1, "muted", 2, "margin", "12px 0"], [1, "hp-head", 2, "margin-bottom", "12px"], [1, "b", "b-primary"], [1, "muted"], [1, "tbl-wrap"], [1, "b", "b-primary", 3, "click"], [1, "tbl"], [1, "badge"], [1, "ta-r"], [1, "b-icon"], [1, "b-icon", 3, "click"], [1, "empty"], [1, "ov", 3, "click"], [1, "mdl", 3, "click"], [1, "mdl-h"], [1, "mdl-b"], [1, "alert"], [1, "grid"], [1, "fg"], [1, "in", 3, "ngModelChange", "ngModel"], [1, "in", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", 1, "in", 3, "ngModelChange", "ngModel"], [3, "value"], ["value", "FIX"], ["value", "PERCENTAGE"], ["value", "INPUT"], ["value", "BUILTIN"], [1, "fg", "fg-2"], [3, "ngValue"], [1, "mdl-f"], [1, "b", "b-danger", 2, "margin-right", "auto"], [1, "b", "b-sec", 3, "click"], [1, "b", "b-primary", 3, "click", "disabled"], ["placeholder", "GROSS", 1, "in", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], ["disabled", "", 1, "in", 3, "ngModel"], ["type", "number", "step", "0.01", 1, "in", 3, "ngModelChange", "ngModel"], [1, "fg", "fg-2", "muted", 2, "font-size", ".78rem", "align-self", "end", "padding-bottom", "8px"], ["type", "number", "placeholder", "Bar\xE8me l\xE9gal si vide", 1, "in", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "in", 3, "ngModelChange", "ngModel", "placeholder"], [3, "codeChange", "code", "companyId"], [1, "b", "b-danger", 2, "margin-right", "auto", 3, "click"], [1, "mdl", 2, "max-width", "460px", 3, "click"], ["placeholder", "Ex: Avance sur salaire", 1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: AVANCE", 1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: Absence", 1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: ABS", 1, "in", 3, "ngModelChange", "ngModel"], [1, "mdl", 2, "max-width", "480px", 3, "click"], ["placeholder", "Ex: Cong\xE9s Pay\xE9s", 1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: CP", 1, "in", 3, "ngModelChange", "ngModel"]], template: function PayrollConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "tune");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Configuration de la paie");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
        \u0275\u0275listener("click", function PayrollConfigComponent_Template_button_click_7_listener() {
          return ctx.tab = "rules";
        });
        \u0275\u0275text(8, "R\xE8gles salariales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function PayrollConfigComponent_Template_button_click_9_listener() {
          return ctx.tab = "inputs";
        });
        \u0275\u0275text(10, "\xC9l\xE9ments variables");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 4);
        \u0275\u0275listener("click", function PayrollConfigComponent_Template_button_click_11_listener() {
          return ctx.tab = "days";
        });
        \u0275\u0275text(12, "Jours travaill\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 4);
        \u0275\u0275listener("click", function PayrollConfigComponent_Template_button_click_13_listener() {
          return ctx.tab = "leaves";
        });
        \u0275\u0275text(14, "Types de cong\xE9s");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, PayrollConfigComponent_Conditional_15_Template, 7, 2);
        \u0275\u0275conditionalCreate(16, PayrollConfigComponent_Conditional_16_Template, 7, 2);
        \u0275\u0275conditionalCreate(17, PayrollConfigComponent_Conditional_17_Template, 7, 2);
        \u0275\u0275conditionalCreate(18, PayrollConfigComponent_Conditional_18_Template, 7, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, PayrollConfigComponent_Conditional_19_Template, 81, 29, "div", 5);
        \u0275\u0275conditionalCreate(20, PayrollConfigComponent_Conditional_20_Template, 32, 9, "div", 5);
        \u0275\u0275conditionalCreate(21, PayrollConfigComponent_Conditional_21_Template, 32, 9, "div", 5);
        \u0275\u0275conditionalCreate(22, PayrollConfigComponent_Conditional_22_Template, 52, 15, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.tab === "rules");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab === "inputs");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab === "days");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab === "leaves");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.tab === "rules" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.tab === "inputs" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.tab === "days" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.tab === "leaves" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showInputModal ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showDayModal ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showLeaveTypeModal ? 22 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AccountPickerComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */", "\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 4px;\n}\n.tab[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 10px 16px;\n  cursor: pointer;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #7C3AED;\n  border-bottom-color: #7C3AED;\n}\n/*# sourceMappingURL=payroll-config.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayrollConfigComponent, [{
    type: Component,
    args: [{ selector: "app-hr-payroll-config", standalone: true, imports: [CommonModule, FormsModule, AccountPickerComponent], template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">tune</span> Configuration de la paie</h1>
      </div>

      <div class="tabs">
        <button class="tab" [class.active]="tab==='rules'" (click)="tab='rules'">R\xE8gles salariales</button>
        <button class="tab" [class.active]="tab==='inputs'" (click)="tab='inputs'">\xC9l\xE9ments variables</button>
        <button class="tab" [class.active]="tab==='days'" (click)="tab='days'">Jours travaill\xE9s</button>
        <button class="tab" [class.active]="tab==='leaves'" (click)="tab='leaves'">Types de cong\xE9s</button>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ONGLET R\xC8GLES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (tab === 'rules') {
        <div class="muted" style="margin:12px 0">
          Bar\xE8mes l\xE9gaux camerounais (CNPS, CFC, RAV, IRPP, CAC, charges patronales) pr\xE9-configur\xE9s.
          Les taux (%) des formules l\xE9gales \xE0 taux plat (CNPS, CFC, CAC, charges patronales) sont modifiables
          au cas o\xF9 le bar\xE8me change \u2014 ouvrez la r\xE8gle et changez le champ \xAB Taux (%) \xBB.
          Une r\xE8gle peut aussi d\xE9pendre des jours saisis sur le bulletin (ex. retenue = taux journalier \xD7 jours d'absence).
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouvelle r\xE8gle</button> }
        </div>

        @if (loading) { <div class="muted">Chargement\u2026</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>S\xE9q.</th><th>Code</th><th>Libell\xE9</th><th>Cat\xE9gorie</th><th>Type</th><th>Quantit\xE9 variable</th><th>Cpt d\xE9bit</th><th>Cpt cr\xE9dit</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (r of rules; track r.id) {
                  <tr>
                    <td>{{ r.sequence }}</td>
                    <td><code>{{ r.code }}</code></td>
                    <td>{{ r.name }}</td>
                    <td>{{ catName(r.categoryCode) }}</td>
                    <td>{{ typeLabel(r) }}</td>
                    <td>{{ r.quantityWorkedDaysCode ? ('\xD7 ' + dayTypeName(r.quantityWorkedDaysCode)) : '\u2014' }}</td>
                    <td>{{ accLabel(r.accountDebitCode) }}</td>
                    <td>{{ accLabel(r.accountCreditCode) }}</td>
                    <td><span class="badge" [class.ok]="r.active">{{ r.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">@if (canEdit) { <button class="b-icon" (click)="openEdit(r)"><span class="material-icons">edit</span></button> }</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ONGLET \xC9L\xC9MENTS VARIABLES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (tab === 'inputs') {
        <div class="muted" style="margin:12px 0">
          Catalogue des \xE9l\xE9ments variables saisissables sur un bulletin (avance, prime exceptionnelle, retenue diverse\u2026).
          Pour qu'un \xE9l\xE9ment soit r\xE9ellement pris en compte dans le calcul, cr\xE9ez aussi une r\xE8gle salariale de type
          \xAB \xC9l\xE9ment variable \xBB avec le m\xEAme code (onglet R\xE8gles salariales).
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreateInput()"><span class="material-icons">add</span> Nouveau type</button> }
        </div>
        @if (inputTypes.length === 0) { <div class="empty">Aucun type d'\xE9l\xE9ment variable d\xE9fini.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Code</th><th>Libell\xE9</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (t of inputTypes; track t.id) {
                  <tr>
                    <td><code>{{ t.code }}</code></td>
                    <td>{{ t.name }}</td>
                    <td><span class="badge" [class.ok]="t.active">{{ t.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">
                      @if (canEdit) {
                        <button class="b-icon" (click)="openEditInput(t)"><span class="material-icons">edit</span></button>
                        <button class="b-icon" (click)="delInput(t)"><span class="material-icons">delete_outline</span></button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ONGLET JOURS TRAVAILL\xC9S \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (tab === 'days') {
        <div class="muted" style="margin:12px 0">
          Catalogue des types de jours saisissables sur un bulletin (jours travaill\xE9s, absence, cong\xE9 pay\xE9\u2026).
          R\xE9f\xE9rencez un de ces codes dans le champ \xAB Quantit\xE9 variable \xBB d'une r\xE8gle salariale pour faire d\xE9pendre
          son montant du nombre de jours saisi.
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreateDay()"><span class="material-icons">add</span> Nouveau type</button> }
        </div>
        @if (dayTypes.length === 0) { <div class="empty">Aucun type de jours d\xE9fini.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Code</th><th>Libell\xE9</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (t of dayTypes; track t.id) {
                  <tr>
                    <td><code>{{ t.code }}</code></td>
                    <td>{{ t.name }}</td>
                    <td><span class="badge" [class.ok]="t.active">{{ t.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">
                      @if (canEdit) {
                        <button class="b-icon" (click)="openEditDay(t)"><span class="material-icons">edit</span></button>
                        <button class="b-icon" (click)="delDay(t)"><span class="material-icons">delete_outline</span></button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ONGLET TYPES DE CONG\xC9S \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @if (tab === 'leaves') {
        <div class="muted" style="margin:12px 0">
          Catalogue des types de cong\xE9s (Cong\xE9s Pay\xE9s, RTT, Repos Compensateur\u2026). L'acquisition mensuelle sert \xE0
          calculer le compteur \xAB D\xFB \xBB affich\xE9 sur le bulletin. Le lien vers un type de jours travaill\xE9s est
          facultatif : renseignez-le seulement si ce cong\xE9 doit \xEAtre repris par une r\xE8gle salariale (ex. cong\xE9
          sans solde qui retient un montant).
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreateLeaveType()"><span class="material-icons">add</span> Nouveau type</button> }
        </div>
        @if (leaveTypes.length === 0) { <div class="empty">Aucun type de cong\xE9 d\xE9fini.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Code</th><th>Libell\xE9</th><th>Pay\xE9</th><th class="ta-r">Acquisition / mois</th><th>Jours travaill\xE9s li\xE9s</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (t of leaveTypes; track t.id) {
                  <tr>
                    <td><code>{{ t.code }}</code></td>
                    <td>{{ t.name }}</td>
                    <td>{{ t.paid ? 'Oui' : 'Non' }}</td>
                    <td class="ta-r">{{ t.monthlyAccrualDays || 0 }} j</td>
                    <td>{{ t.workedDaysTypeCode ? dayTypeName(t.workedDaysTypeCode) : '\u2014' }}</td>
                    <td><span class="badge" [class.ok]="t.active">{{ t.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">
                      @if (canEdit) {
                        <button class="b-icon" (click)="openEditLeaveType(t)"><span class="material-icons">edit</span></button>
                        <button class="b-icon" (click)="delLeaveType(t)"><span class="material-icons">delete_outline</span></button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL R\xC8GLE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ form.id ? 'Modifier' : 'Nouvelle' }} r\xE8gle salariale</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Libell\xE9 *</label><input class="in" [(ngModel)]="form.name"></div>
              <div class="fg"><label>Code *</label><input class="in" [(ngModel)]="form.code" [disabled]="!!builtin"></div>
              <div class="fg"><label>S\xE9quence</label><input type="number" class="in" [(ngModel)]="form.sequence"></div>
              <div class="fg"><label>Cat\xE9gorie</label>
                <select class="in" [(ngModel)]="form.categoryCode" (ngModelChange)="onCategoryChange()">
                  @for (c of categories; track c.id) { <option [value]="c.code">{{ c.name }}</option> }
                </select>
              </div>
              <div class="fg"><label>Type de calcul</label>
                <select class="in" [(ngModel)]="form.computeType" [disabled]="!!builtin">
                  <option value="FIX">Montant fixe</option><option value="PERCENTAGE">Pourcentage</option>
                  <option value="INPUT">\xC9l\xE9ment variable</option><option value="BUILTIN">Formule l\xE9gale</option>
                </select></div>
              @if (form.computeType === 'FIX') { <div class="fg"><label>Montant fixe</label><input type="number" class="in" [(ngModel)]="form.amountFix"></div> }
              @if (form.computeType === 'PERCENTAGE') {
                <div class="fg"><label>Pourcentage (%)</label><input type="number" class="in" [(ngModel)]="form.amountPercentage"></div>
                <div class="fg"><label>Base (code r\xE8gle/cat\xE9gorie)</label><input class="in" [(ngModel)]="form.baseCode" placeholder="GROSS"></div>
              }
              @if (form.computeType === 'INPUT') {
                <div class="fg fg-2">
                  <label>Type d'\xE9l\xE9ment variable r\xE9f\xE9renc\xE9</label>
                  <select class="in" [ngModel]="form.code" (ngModelChange)="pickInputType($event)">
                    <option value="" disabled>\u2014 Choisir dans le catalogue \u2014</option>
                    @for (t of inputTypes; track t.id) { <option [value]="t.code">{{ t.name }} ({{ t.code }})</option> }
                  </select>
                </div>
              }
              @if (builtin) { <div class="fg fg-2"><label>Formule int\xE9gr\xE9e</label><input class="in" [ngModel]="form.builtinCode" disabled></div> }
              @if (isEditableRateBuiltin) {
                <div class="fg"><label>Taux (%)</label><input type="number" step="0.01" class="in" [(ngModel)]="form.amountPercentage"></div>
                <div class="fg fg-2 muted" style="font-size:.78rem;align-self:end;padding-bottom:8px">Taux l\xE9gal \u2014 modifiable si le bar\xE8me change (loi de finances, revalorisation\u2026).</div>
              }
              @if (isCeilingBuiltin) {
                <div class="fg"><label>Plafond de cotisation (FCFA)</label><input type="number" class="in" [(ngModel)]="form.ceilingAmount" placeholder="Bar\xE8me l\xE9gal si vide"></div>
                <div class="fg fg-2 muted" style="font-size:.78rem;align-self:end;padding-bottom:8px">Plafond CNPS \u2014 laisser vide pour utiliser le bar\xE8me l\xE9gal en vigueur.</div>
              }
              @if (isBracketsBuiltin) {
                <div class="fg fg-2"><label>Bar\xE8me par tranches</label><textarea class="in" rows="2" [(ngModel)]="form.bracketsConfig" [placeholder]="bracketsHint"></textarea></div>
                @if (form.builtinCode === 'IRPP') {
                  <div class="fg"><label>Seuil d'imposition (FCFA, RNI mensuel)</label><input type="number" class="in" [(ngModel)]="form.amountFix"></div>
                }
                <div class="fg fg-2 muted" style="font-size:.78rem;align-self:end;padding-bottom:8px">{{ bracketsHint }}</div>
              }

              <div class="fg fg-2">
                <label>Quantit\xE9 variable (d\xE9pend des jours saisis sur le bulletin)</label>
                <select class="in" [(ngModel)]="form.quantityWorkedDaysCode">
                  <option [ngValue]="undefined">Aucune \u2014 quantit\xE9 = 1 (comportement normal)</option>
                  @for (t of dayTypes; track t.id) { <option [value]="t.code">Multiplier par : {{ t.name }} ({{ t.code }})</option> }
                </select>
              </div>

              @if (accountMode === 'BOTH') {
                <div class="fg"><label>Compte de d\xE9bit (OHADA)</label><app-account-picker [(code)]="form.accountDebitCode" [companyId]="companyId"></app-account-picker></div>
                <div class="fg"><label>Compte de cr\xE9dit (OHADA)</label><app-account-picker [(code)]="form.accountCreditCode" [companyId]="companyId"></app-account-picker></div>
              } @else if (accountMode === 'CREDIT') {
                <div class="fg fg-2">
                  <label>Compte cible \u2014 cr\xE9dit (retenue/dette)</label>
                  <app-account-picker [(code)]="form.accountCreditCode" [companyId]="companyId"></app-account-picker>
                </div>
              } @else {
                <div class="fg fg-2">
                  <label>Compte cible \u2014 d\xE9bit (charge/gain)</label>
                  <app-account-picker [(code)]="form.accountDebitCode" [companyId]="companyId"></app-account-picker>
                </div>
              }
              <div class="fg"><label>Retenue ?</label><select class="in" [(ngModel)]="form.deduction" [disabled]="!!builtin"><option [ngValue]="false">Non (gain)</option><option [ngValue]="true">Oui (retenue)</option></select></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="form.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            @if (form.id && !builtin) { <button class="b b-danger" (click)="del()" style="margin-right:auto"><span class="material-icons">delete</span> Supprimer</button> }
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="save()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL TYPE \xC9L\xC9MENT VARIABLE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (showInputModal) {
      <div class="ov" (click)="showInputModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ inputForm.id ? 'Modifier' : 'Nouveau' }} type d'\xE9l\xE9ment variable</h3><button class="b-icon" (click)="showInputModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Libell\xE9 *</label><input class="in" [(ngModel)]="inputForm.name" placeholder="Ex: Avance sur salaire"></div>
              <div class="fg fg-2"><label>Code *</label><input class="in" [(ngModel)]="inputForm.code" placeholder="Ex: AVANCE"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="inputForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showInputModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveInput()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL TYPE JOURS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (showDayModal) {
      <div class="ov" (click)="showDayModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ dayForm.id ? 'Modifier' : 'Nouveau' }} type de jours</h3><button class="b-icon" (click)="showDayModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Libell\xE9 *</label><input class="in" [(ngModel)]="dayForm.name" placeholder="Ex: Absence"></div>
              <div class="fg fg-2"><label>Code *</label><input class="in" [(ngModel)]="dayForm.code" placeholder="Ex: ABS"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="dayForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showDayModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveDay()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL TYPE DE CONG\xC9 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (showLeaveTypeModal) {
      <div class="ov" (click)="showLeaveTypeModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ leaveTypeForm.id ? 'Modifier' : 'Nouveau' }} type de cong\xE9</h3><button class="b-icon" (click)="showLeaveTypeModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Libell\xE9 *</label><input class="in" [(ngModel)]="leaveTypeForm.name" placeholder="Ex: Cong\xE9s Pay\xE9s"></div>
              <div class="fg fg-2"><label>Code *</label><input class="in" [(ngModel)]="leaveTypeForm.code" placeholder="Ex: CP"></div>
              <div class="fg"><label>Pay\xE9 ?</label><select class="in" [(ngModel)]="leaveTypeForm.paid"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
              <div class="fg"><label>Acquisition (j/mois)</label><input type="number" step="0.01" class="in" [(ngModel)]="leaveTypeForm.monthlyAccrualDays"></div>
              <div class="fg fg-2">
                <label>Type de jours travaill\xE9s li\xE9 (facultatif)</label>
                <select class="in" [(ngModel)]="leaveTypeForm.workedDaysTypeCode">
                  <option [ngValue]="undefined">Aucun</option>
                  @for (t of dayTypes; track t.id) { <option [value]="t.code">{{ t.name }} ({{ t.code }})</option> }
                </select>
              </div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="leaveTypeForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showLeaveTypeModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveLeaveType()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n", "/* angular:styles/component:scss;ebd78247d7dc5c633e68a9a1b339f6a722239eb479df02075f7a61bc78a41386;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/config/payroll-config.component.ts */\n.tabs {\n  display: flex;\n  gap: 4px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 4px;\n}\n.tab {\n  border: none;\n  background: transparent;\n  padding: 10px 16px;\n  cursor: pointer;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n}\n.tab:hover {\n  color: var(--text-primary);\n}\n.tab.active {\n  color: #7C3AED;\n  border-bottom-color: #7C3AED;\n}\n/*# sourceMappingURL=payroll-config.component.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: AccountingService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayrollConfigComponent, { className: "PayrollConfigComponent", filePath: "app/modules/hr/components/config/payroll-config.component.ts", lineNumber: 348 });
})();
export {
  PayrollConfigComponent
};
//# sourceMappingURL=chunk-534NMBTN.js.map
