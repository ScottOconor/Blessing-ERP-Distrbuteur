import {
  LicenseService
} from "./chunk-4TRWHX2X.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-NRXD6HPP.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/license-pending/license-pending.component.ts
function LicensePendingComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "V\xE9rification de la licence\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Merci de patienter.");
    \u0275\u0275elementEnd();
  }
}
function LicensePendingComponent_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function LicensePendingComponent_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Envoi\u2026 ");
  }
}
function LicensePendingComponent_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Demander l'activation ");
  }
}
function LicensePendingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Activation requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Cette installation n'est pas encore activ\xE9e. Renseignez vos coordonn\xE9es ci-dessous pour envoyer une demande d'activation ; un administrateur validera votre demande. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 3);
    \u0275\u0275listener("ngSubmit", function LicensePendingComponent_Conditional_5_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requestActivation());
    });
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6, " E-mail de contact ");
    \u0275\u0275elementStart(7, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function LicensePendingComponent_Conditional_5_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contactEmail, $event) || (ctx_r1.contactEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, " T\xE9l\xE9phone (optionnel) ");
    \u0275\u0275elementStart(10, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function LicensePendingComponent_Conditional_5_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contactPhone, $event) || (ctx_r1.contactPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, LicensePendingComponent_Conditional_5_Conditional_11_Template, 2, 1, "div", 6);
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275conditionalCreate(13, LicensePendingComponent_Conditional_5_Conditional_13_Template, 1, 0)(14, LicensePendingComponent_Conditional_5_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contactEmail);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contactPhone);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMessage ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitting ? 13 : 14);
  }
}
function LicensePendingComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Contact enregistr\xE9 : ", ctx_r1.status == null ? null : ctx_r1.status.contactEmail);
  }
}
function LicensePendingComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Demande d'activation en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Votre demande a \xE9t\xE9 transmise. Un administrateur doit l'approuver avant que cette installation ne soit activ\xE9e. Cette page se met \xE0 jour automatiquement. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LicensePendingComponent_Conditional_6_Conditional_4_Template, 2, 1, "p", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r1.status == null ? null : ctx_r1.status.contactEmail) ? 4 : -1);
  }
}
var POLL_MS = 3 * 1e3;
var LicensePendingComponent = class _LicensePendingComponent {
  constructor(licenseService, router) {
    this.licenseService = licenseService;
    this.router = router;
    this.status = null;
    this.loading = true;
    this.submitting = false;
    this.errorMessage = "";
    this.contactEmail = "";
    this.contactPhone = "";
    this.timer = null;
  }
  ngOnInit() {
    this.refresh();
    this.timer = setInterval(() => this.refresh(), POLL_MS);
  }
  ngOnDestroy() {
    if (this.timer)
      clearInterval(this.timer);
  }
  get isNotActivated() {
    return this.status?.status === "NOT_ACTIVATED";
  }
  requestActivation() {
    if (!this.contactEmail.trim()) {
      this.errorMessage = "Merci de renseigner au moins un e-mail de contact.";
      return;
    }
    this.submitting = true;
    this.errorMessage = "";
    this.licenseService.requestActivation(this.contactEmail.trim(), this.contactPhone.trim()).subscribe({
      next: (status) => {
        this.status = status;
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
        this.errorMessage = "Impossible de contacter le serveur de licence. R\xE9essayez plus tard.";
      }
    });
  }
  refresh() {
    this.licenseService.fetchStatus().subscribe({
      next: (status) => {
        this.status = status;
        this.loading = false;
        if (status.status === "ACTIVE" || status.status === "EXPIRED_READONLY") {
          this.router.navigate(["/welcome"]);
        } else if (status.status === "BLOCKED_FINGERPRINT_MISMATCH" || status.status === "INVALID") {
          this.router.navigate(["/license-blocked"]);
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = "Impossible de contacter le serveur.";
      }
    });
  }
  static {
    this.\u0275fac = function LicensePendingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LicensePendingComponent)(\u0275\u0275directiveInject(LicenseService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LicensePendingComponent, selectors: [["app-license-pending"]], decls: 7, vars: 1, consts: [[1, "license-page"], [1, "license-card"], [1, "material-icons", "icon"], [1, "contact-form", 3, "ngSubmit"], ["type", "email", "name", "contactEmail", "required", "", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "contactPhone", 3, "ngModelChange", "ngModel"], [1, "error"], ["type", "submit", 3, "disabled"], [1, "contact-recap"]], template: function LicensePendingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "hourglass_top");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, LicensePendingComponent_Conditional_4_Template, 4, 0)(5, LicensePendingComponent_Conditional_5_Template, 15, 5)(6, LicensePendingComponent_Conditional_6_Template, 5, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading ? 4 : ctx.isNotActivated ? 5 : 6);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n.license-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: var(--bg-page);\n  padding: 24px;\n}\n.license-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 40px;\n  max-width: 480px;\n  width: 100%;\n  text-align: center;\n}\n.license-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--warning);\n  margin-bottom: 16px;\n}\n.license-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-primary);\n  margin: 0 0 12px;\n}\n.license-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0 0 8px;\n}\n.license-card[_ngcontent-%COMP%]   .contact-recap[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.contact-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-top: 20px;\n  text-align: left;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n}\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--border-focus);\n}\n.contact-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 10px 16px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: var(--primary);\n  color: var(--text-inverse);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=license-pending.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LicensePendingComponent, [{
    type: Component,
    args: [{ selector: "app-license-pending", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="license-page">
  <div class="license-card">
    <span class="material-icons icon">hourglass_top</span>

    @if (loading) {
      <h1>V\xE9rification de la licence\u2026</h1>
      <p>Merci de patienter.</p>
    } @else if (isNotActivated) {
      <h1>Activation requise</h1>
      <p>
        Cette installation n'est pas encore activ\xE9e. Renseignez vos coordonn\xE9es ci-dessous
        pour envoyer une demande d'activation ; un administrateur validera votre demande.
      </p>

      <form (ngSubmit)="requestActivation()" class="contact-form">
        <label>
          E-mail de contact
          <input type="email" name="contactEmail" [(ngModel)]="contactEmail" required />
        </label>
        <label>
          T\xE9l\xE9phone (optionnel)
          <input type="tel" name="contactPhone" [(ngModel)]="contactPhone" />
        </label>

        @if (errorMessage) {
          <div class="error">{{ errorMessage }}</div>
        }

        <button type="submit" [disabled]="submitting">
          @if (submitting) { Envoi\u2026 } @else { Demander l'activation }
        </button>
      </form>
    } @else {
      <h1>Demande d'activation en attente</h1>
      <p>
        Votre demande a \xE9t\xE9 transmise. Un administrateur doit l'approuver avant que
        cette installation ne soit activ\xE9e. Cette page se met \xE0 jour automatiquement.
      </p>
      @if (status?.contactEmail) {
        <p class="contact-recap">Contact enregistr\xE9 : {{ status?.contactEmail }}</p>
      }
    }
  </div>
</div>
`, styles: ["/* src/app/pages/license-pending/license-pending.component.scss */\n.license-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: var(--bg-page);\n  padding: 24px;\n}\n.license-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 40px;\n  max-width: 480px;\n  width: 100%;\n  text-align: center;\n}\n.license-card .icon {\n  font-size: 48px;\n  color: var(--warning);\n  margin-bottom: 16px;\n}\n.license-card h1 {\n  font-size: 1.25rem;\n  color: var(--text-primary);\n  margin: 0 0 12px;\n}\n.license-card p {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0 0 8px;\n}\n.license-card .contact-recap {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-top: 20px;\n  text-align: left;\n}\n.contact-form label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.contact-form input {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n}\n.contact-form input:focus {\n  outline: none;\n  border-color: var(--border-focus);\n}\n.contact-form .error {\n  color: var(--danger);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.contact-form button {\n  margin-top: 8px;\n  padding: 10px 16px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: var(--primary);\n  color: var(--text-inverse);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.contact-form button:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.contact-form button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=license-pending.component.css.map */\n"] }]
  }], () => [{ type: LicenseService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LicensePendingComponent, { className: "LicensePendingComponent", filePath: "app/pages/license-pending/license-pending.component.ts", lineNumber: 20 });
})();
export {
  LicensePendingComponent
};
//# sourceMappingURL=chunk-EZX3NWTJ.js.map
