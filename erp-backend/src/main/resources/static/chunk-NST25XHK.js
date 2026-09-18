import {
  Router
} from "./chunk-4W3TIS2I.js";
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
  HttpClient,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/config/components/change-password/change-password.component.ts
function ChangePasswordComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Vous devez d\xE9finir un nouveau mot de passe avant de continuer.");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMsg);
  }
}
function ChangePasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
var ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(http, authService, router) {
    this.http = http;
    this.authService = authService;
    this.router = router;
    this.current = "";
    this.newPwd = "";
    this.confirm = "";
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
  }
  save() {
    if (!this.current || !this.newPwd || !this.confirm) {
      this.errorMsg = "Tous les champs sont requis";
      return;
    }
    if (this.newPwd !== this.confirm) {
      this.errorMsg = "Les mots de passe ne correspondent pas";
      return;
    }
    if (this.newPwd.length < 6) {
      this.errorMsg = "Le mot de passe doit contenir au moins 6 caract\xE8res";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const api = `${environment.apiUrl}/api/config/change-password`;
    this.http.post(api, { currentPassword: this.current, newPassword: this.newPwd }).subscribe({
      next: () => {
        this.saving = false;
        this.successMsg = "Mot de passe chang\xE9 avec succ\xE8s";
        const session = this.authService.getSession();
        if (session) {
          session.mustChangePassword = false;
          localStorage.setItem("erp_session", JSON.stringify(session));
        }
        setTimeout(() => this.router.navigate(["/welcome"]), 1500);
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Mot de passe actuel incorrect";
      }
    });
  }
  static {
    this.\u0275fac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangePasswordComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], decls: 26, vars: 8, consts: [[1, "cp-wrap"], [1, "cp-card"], [1, "cp-icon"], [1, "material-icons"], [1, "cp-notice"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "form-group"], ["type", "password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", "full-width", 3, "click", "disabled"]], template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "lock_reset");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Changer le mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, ChangePasswordComponent_Conditional_7_Template, 2, 0, "p", 4);
        \u0275\u0275conditionalCreate(8, ChangePasswordComponent_Conditional_8_Template, 2, 1, "div", 5);
        \u0275\u0275conditionalCreate(9, ChangePasswordComponent_Conditional_9_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(10, "div", 7)(11, "label");
        \u0275\u0275text(12, "Mot de passe actuel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.current, $event) || (ctx.current = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 7)(15, "label");
        \u0275\u0275text(16, "Nouveau mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newPwd, $event) || (ctx.newPwd = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 7)(19, "label");
        \u0275\u0275text(20, "Confirmer le nouveau mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirm, $event) || (ctx.confirm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 9);
        \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_22_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(23, "span", 3);
        \u0275\u0275text(24, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(7);
        \u0275\u0275conditional(((tmp_0_0 = ctx.authService.getSession()) == null ? null : tmp_0_0.mustChangePassword) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 9 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.current);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newPwd);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.confirm);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.saving);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Enregistrement..." : "Enregistrer", " ");
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.cp-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n}\n.cp-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 32px;\n  width: 400px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.cp-icon[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.cp-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #2c3e50;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #212529;\n}\n.cp-notice[_ngcontent-%COMP%] {\n  color: #856404;\n  background: #fff3cd;\n  border: 1px solid #ffecb5;\n  padding: 10px;\n  border-radius: 6px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  text-align: left;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2c3e50;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=change-password.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-change-password", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="cp-wrap">
      <div class="cp-card">
        <div class="cp-icon"><span class="material-icons">lock_reset</span></div>
        <h2>Changer le mot de passe</h2>
        @if (authService.getSession()?.mustChangePassword) {
          <p class="cp-notice">Vous devez d\xE9finir un nouveau mot de passe avant de continuer.</p>
        }
        @if (successMsg) { <div class="alert alert-success">{{ successMsg }}</div> }
        @if (errorMsg)   { <div class="alert alert-danger">{{ errorMsg }}</div> }

        <div class="form-group">
          <label>Mot de passe actuel</label>
          <input type="password" [(ngModel)]="current" class="form-control" />
        </div>
        <div class="form-group">
          <label>Nouveau mot de passe</label>
          <input type="password" [(ngModel)]="newPwd" class="form-control" />
        </div>
        <div class="form-group">
          <label>Confirmer le nouveau mot de passe</label>
          <input type="password" [(ngModel)]="confirm" class="form-control" />
        </div>
        <button class="btn-primary full-width" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Enregistrement...' : 'Enregistrer' }}
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;5e5303a5d5a3d2b62780eff1e120ee391d79d12692428795e8866f67c7669946;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/config/components/change-password/change-password.component.ts */\n.cp-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n}\n.cp-card {\n  background: white;\n  border-radius: 12px;\n  padding: 32px;\n  width: 400px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.cp-icon {\n  margin-bottom: 16px;\n}\n.cp-icon .material-icons {\n  font-size: 48px;\n  color: #2c3e50;\n}\nh2 {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #212529;\n}\n.cp-notice {\n  color: #856404;\n  background: #fff3cd;\n  border: 1px solid #ffecb5;\n  padding: 10px;\n  border-radius: 6px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.form-group {\n  text-align: left;\n  margin-bottom: 16px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.full-width {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.alert {\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  text-align: left;\n}\n.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2c3e50;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n/*# sourceMappingURL=change-password.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "app/modules/config/components/change-password/change-password.component.ts", lineNumber: 58 });
})();
export {
  ChangePasswordComponent
};
//# sourceMappingURL=chunk-NST25XHK.js.map
