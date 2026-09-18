import {
  LicenseService
} from "./chunk-4TRWHX2X.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/license-blocked/license-blocked.component.ts
function LicenseBlockedComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, " Cette installation ne correspond plus \xE0 la machine sur laquelle la licence a \xE9t\xE9 d\xE9livr\xE9e. Contactez votre fournisseur pour faire r\xE9\xE9mettre la licence. ");
    \u0275\u0275domElementEnd();
  }
}
function LicenseBlockedComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r0.status == null ? null : ctx_r0.status.message) || "Cette installation ne peut pas \xEAtre utilis\xE9e en l'\xE9tat.");
  }
}
function LicenseBlockedComponent_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.status == null ? null : ctx_r0.status.contactEmail);
  }
}
function LicenseBlockedComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.status == null ? null : ctx_r0.status.contactPhone);
  }
}
function LicenseBlockedComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "Contact support");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, LicenseBlockedComponent_Conditional_8_Conditional_3_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(4, LicenseBlockedComponent_Conditional_8_Conditional_4_Template, 2, 1, "div");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.status == null ? null : ctx_r0.status.contactEmail) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.status == null ? null : ctx_r0.status.contactPhone) ? 4 : -1);
  }
}
var POLL_MS = 30 * 1e3;
var LicenseBlockedComponent = class _LicenseBlockedComponent {
  constructor(licenseService, router) {
    this.licenseService = licenseService;
    this.router = router;
    this.status = null;
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
  refresh() {
    this.licenseService.fetchStatus().subscribe({
      next: (status) => {
        this.status = status;
        if (status.status === "ACTIVE" || status.status === "EXPIRED_READONLY") {
          this.router.navigate(["/welcome"]);
        } else if (status.status === "NOT_ACTIVATED" || status.status === "PENDING") {
          this.router.navigate(["/license-pending"]);
        }
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function LicenseBlockedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LicenseBlockedComponent)(\u0275\u0275directiveInject(LicenseService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LicenseBlockedComponent, selectors: [["app-license-blocked"]], decls: 9, vars: 2, consts: [[1, "license-page"], [1, "license-card"], [1, "material-icons", "icon"], [1, "contact"], [1, "contact-title"]], template: function LicenseBlockedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "block");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "h1");
        \u0275\u0275text(5, "Application bloqu\xE9e sur cette machine");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(6, LicenseBlockedComponent_Conditional_6_Template, 2, 0, "p")(7, LicenseBlockedComponent_Conditional_7_Template, 2, 1, "p");
        \u0275\u0275conditionalCreate(8, LicenseBlockedComponent_Conditional_8_Template, 5, 2, "div", 3);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional((ctx.status == null ? null : ctx.status.status) === "BLOCKED_FINGERPRINT_MISMATCH" ? 6 : 7);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.status == null ? null : ctx.status.contactEmail) || (ctx.status == null ? null : ctx.status.contactPhone) ? 8 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n.license-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: var(--bg-page);\n  padding: 24px;\n}\n.license-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 40px;\n  max-width: 480px;\n  width: 100%;\n  text-align: center;\n}\n.license-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--danger);\n  margin-bottom: 16px;\n}\n.license-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-primary);\n  margin: 0 0 12px;\n}\n.license-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.contact[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background: var(--bg-elevated);\n  border-radius: var(--radius-md);\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 6px;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n/*# sourceMappingURL=license-blocked.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LicenseBlockedComponent, [{
    type: Component,
    args: [{ selector: "app-license-blocked", standalone: true, imports: [CommonModule], template: `<div class="license-page">
  <div class="license-card">
    <span class="material-icons icon">block</span>
    <h1>Application bloqu\xE9e sur cette machine</h1>

    @if (status?.status === 'BLOCKED_FINGERPRINT_MISMATCH') {
      <p>
        Cette installation ne correspond plus \xE0 la machine sur laquelle la licence a \xE9t\xE9
        d\xE9livr\xE9e. Contactez votre fournisseur pour faire r\xE9\xE9mettre la licence.
      </p>
    } @else {
      <p>{{ status?.message || "Cette installation ne peut pas \xEAtre utilis\xE9e en l'\xE9tat." }}</p>
    }

    @if (status?.contactEmail || status?.contactPhone) {
      <div class="contact">
        <div class="contact-title">Contact support</div>
        @if (status?.contactEmail) { <div>{{ status?.contactEmail }}</div> }
        @if (status?.contactPhone) { <div>{{ status?.contactPhone }}</div> }
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/pages/license-blocked/license-blocked.component.scss */\n.license-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: var(--bg-page);\n  padding: 24px;\n}\n.license-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 40px;\n  max-width: 480px;\n  width: 100%;\n  text-align: center;\n}\n.license-card .icon {\n  font-size: 48px;\n  color: var(--danger);\n  margin-bottom: 16px;\n}\n.license-card h1 {\n  font-size: 1.25rem;\n  color: var(--text-primary);\n  margin: 0 0 12px;\n}\n.license-card p {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.contact {\n  margin-top: 24px;\n  padding: 16px;\n  background: var(--bg-elevated);\n  border-radius: var(--radius-md);\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.contact .contact-title {\n  font-weight: 700;\n  margin-bottom: 6px;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n/*# sourceMappingURL=license-blocked.component.css.map */\n"] }]
  }], () => [{ type: LicenseService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LicenseBlockedComponent, { className: "LicenseBlockedComponent", filePath: "app/pages/license-blocked/license-blocked.component.ts", lineNumber: 15 });
})();
export {
  LicenseBlockedComponent
};
//# sourceMappingURL=chunk-ZGXSR6NM.js.map
