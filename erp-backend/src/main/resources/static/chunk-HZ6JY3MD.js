import {
  AppBrandingService
} from "./chunk-TJ6Z44ZG.js";
import "./chunk-K42XCUBR.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.branding.appLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function LoginComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "BE");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Se connecter ");
  }
}
function LoginComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
    \u0275\u0275text(1, " Connexion en cours... ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authService, router, branding) {
    this.authService = authService;
    this.router = router;
    this.branding = branding;
    this.username = "";
    this.password = "";
    this.loading = false;
    this.errorMessage = "";
    this.showPassword = false;
    if (this.authService.isLoggedIn()) {
      this.redirectAfterLogin();
    }
  }
  redirectAfterLogin() {
    this.router.navigate(["/welcome"]);
  }
  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = "Veuillez saisir vos identifiants.";
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.authService.login(this.username, this.password).subscribe({
      next: (session) => {
        this.loading = false;
        this.branding.apply();
        if (session.mustChangePassword) {
          this.router.navigate(["/config/change-password"]);
        } else {
          this.redirectAfterLogin();
        }
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 401) {
          this.errorMessage = "Identifiants incorrects. Veuillez r\xE9essayer.";
        } else if (err.status === 0) {
          this.errorMessage = "Impossible de contacter le serveur.";
        } else {
          this.errorMessage = err.error?.message || "Une erreur est survenue.";
        }
      }
    });
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppBrandingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 79, vars: 17, consts: [["loginForm", "ngForm"], [1, "login-page"], [1, "login-left"], [1, "login-brand"], [1, "brand-logo"], ["alt", "Logo", 1, "brand-app-logo", 3, "src"], [1, "blessing-login-mark"], [1, "brand-name"], [1, "brand-subtitle"], [1, "modules-preview"], [1, "module-icon"], [1, "material-icons"], [1, "left-footer"], [1, "login-right"], [1, "login-form-container"], [1, "form-header"], [1, "form-logo"], [3, "ngSubmit"], [1, "form-group"], ["for", "username"], ["id", "username", "type", "text", "name", "username", "placeholder", "Entrez votre nom d'utilisateur", "autocomplete", "username", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password"], [1, "password-field"], ["id", "password", "name", "password", "placeholder", "Entrez votre mot de passe", "autocomplete", "current-password", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-password", 3, "click"], [1, "alert-error"], ["type", "submit", 1, "btn-login", 3, "disabled"], [1, "form-footer"], [1, "spinner-sm"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275conditionalCreate(4, LoginComponent_Conditional_4_Template, 1, 1, "img", 5)(5, LoginComponent_Conditional_5_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 7);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 8);
        \u0275\u0275text(9, "Blessing Enterprise Resource Planning");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "span", 11);
        \u0275\u0275text(13, "calculate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "Comptabilit\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "span", 11);
        \u0275\u0275text(18, "shopping_cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "Ventes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 10)(22, "span", 11);
        \u0275\u0275text(23, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Achats");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 10)(27, "span", 11);
        \u0275\u0275text(28, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "Stock");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 10)(32, "span", 11);
        \u0275\u0275text(33, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "Ressources Humaines");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 10)(37, "span", 11);
        \u0275\u0275text(38, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40, "Param\xE8tres");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 12)(42, "p");
        \u0275\u0275text(43, "Solution int\xE9gr\xE9e pour la gestion de votre entreprise");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 13)(45, "div", 14)(46, "div", 15)(47, "div", 16)(48, "span", 11);
        \u0275\u0275text(49, "lock");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "h2");
        \u0275\u0275text(51, "Connexion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p");
        \u0275\u0275text(53, "Acc\xE9dez \xE0 votre espace de gestion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "form", 17, 0);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_54_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(56, "div", 18)(57, "label", 19)(58, "span", 11);
        \u0275\u0275text(59, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " Nom d'utilisateur ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 18)(63, "label", 21)(64, "span", 11);
        \u0275\u0275text(65, "key");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " Mot de passe ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 22)(68, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "button", 24);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_69_listener() {
          return ctx.togglePassword();
        });
        \u0275\u0275elementStart(70, "span", 11);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(72, LoginComponent_Conditional_72_Template, 4, 1, "div", 25);
        \u0275\u0275elementStart(73, "button", 26);
        \u0275\u0275conditionalCreate(74, LoginComponent_Conditional_74_Template, 3, 0)(75, LoginComponent_Conditional_75_Template, 2, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 27)(77, "p");
        \u0275\u0275text(78, "K\xB7I\xB7R\xB7A v1.0 \u2014 Kairos Innovation Technologies \u2014 \xA9 2026");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("has-logo", ctx.branding.hasAppLogo);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.branding.hasAppLogo ? 4 : 5);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.branding.appName);
        \u0275\u0275advance(54);
        \u0275\u0275classProp("is-invalid", ctx.errorMessage);
        \u0275\u0275twoWayProperty("ngModel", ctx.username);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("is-invalid", ctx.errorMessage);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showPassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMessage ? 72 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("loading", ctx.loading);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading ? 74 : 75);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n.login-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  background: var(--bg-page);\n}\n.login-left[_ngcontent-%COMP%] {\n  width: 42%;\n  background: var(--navbar-bg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 48px;\n  position: relative;\n  overflow: hidden;\n}\n.login-left[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -80px;\n  right: -80px;\n  width: 320px;\n  height: 320px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(29, 78, 216, 0.18) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.login-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  left: -60px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.login-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 56px;\n  position: relative;\n  z-index: 1;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      145deg,\n      #1D4ED8,\n      #3B82F6);\n  border-radius: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 22px;\n  box-shadow: 0 8px 28px rgba(29, 78, 216, 0.45);\n}\n.login-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .blessing-login-mark[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: -0.5px;\n  font-family: "Inter", sans-serif;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-app-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 14px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-logo.has-logo[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);\n}\n.login-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n  color: #ffffff;\n  font-family: "Inter", sans-serif;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.38);\n  font-weight: 400;\n  letter-spacing: 0.4px;\n}\n.modules-preview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  width: 100%;\n  max-width: 300px;\n  position: relative;\n  z-index: 1;\n}\n.module-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: var(--ease);\n  cursor: default;\n}\n.module-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: translateY(-2px);\n}\n.module-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.module-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.3;\n}\n.left-footer[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.left-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.28);\n  font-style: italic;\n}\n.login-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-page);\n  padding: 40px;\n}\n.login-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 36px;\n}\n.form-header[_ngcontent-%COMP%]   .form-logo[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: var(--primary);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 18px;\n  box-shadow: 0 6px 18px rgba(29, 78, 216, 0.28);\n}\n.form-header[_ngcontent-%COMP%]   .form-logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 7px;\n  letter-spacing: -0.4px;\n  font-family: "Inter", sans-serif;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13.5px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--primary);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  transition: var(--ease);\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.password-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 46px;\n}\n.password-field[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 3px;\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.password-field[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.password-field[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: var(--danger-bg);\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  border-left: 3px solid var(--danger);\n  border-radius: var(--radius-sm);\n  color: var(--danger);\n  font-size: 13px;\n  margin-bottom: 18px;\n  animation: _ngcontent-%COMP%_shake 0.3s ease;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14.5px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: var(--ease);\n  box-shadow: 0 3px 12px rgba(29, 78, 216, 0.28);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  letter-spacing: 0.01em;\n}\n.btn-login[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n  box-shadow: 0 5px 18px rgba(29, 78, 216, 0.38);\n  transform: translateY(-1px);\n}\n.btn-login[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: none;\n}\n.btn-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.75;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 36px;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--text-muted);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n@media (max-width: 768px) {\n  .login-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .login-left[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 36px 24px;\n    min-height: 260px;\n  }\n  .modules-preview[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .login-right[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-page">
  <!-- LEFT PANEL -->
  <div class="login-left">
    <div class="login-brand">
      <div class="brand-logo" [class.has-logo]="branding.hasAppLogo">
        @if (branding.hasAppLogo) {
          <img [src]="branding.appLogoUrl" class="brand-app-logo" alt="Logo">
        } @else {
          <span class="blessing-login-mark">BE</span>
        }
      </div>
      <h1 class="brand-name">{{ branding.appName }}</h1>
      <p class="brand-subtitle">Blessing Enterprise Resource Planning</p>
    </div>

    <div class="modules-preview">
      <div class="module-icon">
        <span class="material-icons">calculate</span>
        <span>Comptabilit\xE9</span>
      </div>
      <div class="module-icon">
        <span class="material-icons">shopping_cart</span>
        <span>Ventes</span>
      </div>
      <div class="module-icon">
        <span class="material-icons">local_shipping</span>
        <span>Achats</span>
      </div>
      <div class="module-icon">
        <span class="material-icons">inventory_2</span>
        <span>Stock</span>
      </div>
      <div class="module-icon">
        <span class="material-icons">people</span>
        <span>Ressources Humaines</span>
      </div>
      <div class="module-icon">
        <span class="material-icons">settings</span>
        <span>Param\xE8tres</span>
      </div>
    </div>

    <div class="left-footer">
      <p>Solution int\xE9gr\xE9e pour la gestion de votre entreprise</p>
    </div>
  </div>

  <!-- RIGHT PANEL -->
  <div class="login-right">
    <div class="login-form-container">
      <div class="form-header">
        <div class="form-logo">
          <span class="material-icons">lock</span>
        </div>
        <h2>Connexion</h2>
        <p>Acc\xE9dez \xE0 votre espace de gestion</p>
      </div>

      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <div class="form-group">
          <label for="username">
            <span class="material-icons">person</span>
            Nom d'utilisateur
          </label>
          <input
            id="username"
            type="text"
            class="form-control"
            [(ngModel)]="username"
            name="username"
            placeholder="Entrez votre nom d'utilisateur"
            autocomplete="username"
            required
            [class.is-invalid]="errorMessage"
          >
        </div>

        <div class="form-group">
          <label for="password">
            <span class="material-icons">key</span>
            Mot de passe
          </label>
          <div class="password-field">
            <input
              id="password"
              [type]="showPassword ? 'text' : 'password'"
              class="form-control"
              [(ngModel)]="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              autocomplete="current-password"
              required
              [class.is-invalid]="errorMessage"
            >
            <button type="button" class="toggle-password" (click)="togglePassword()">
              <span class="material-icons">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
            </button>
          </div>
        </div>

        @if (errorMessage) {
          <div class="alert-error">
            <span class="material-icons">error_outline</span>
            {{ errorMessage }}
          </div>
        }

        <button
          type="submit"
          class="btn-login"
          [class.loading]="loading"
          [disabled]="loading"
        >
          @if (!loading) {
            <span class="material-icons">login</span>
            Se connecter
          } @else {
            <span class="spinner-sm"></span>
            Connexion en cours...
          }
        </button>
      </form>

      <div class="form-footer">
        <p>K\xB7I\xB7R\xB7A v1.0 &mdash; Kairos Innovation Technologies &mdash; &copy; 2026</p>
      </div>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/login/login.component.scss */\n.login-page {\n  display: flex;\n  min-height: 100vh;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  background: var(--bg-page);\n}\n.login-left {\n  width: 42%;\n  background: var(--navbar-bg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 48px;\n  position: relative;\n  overflow: hidden;\n}\n.login-left::after {\n  content: "";\n  position: absolute;\n  bottom: -80px;\n  right: -80px;\n  width: 320px;\n  height: 320px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(29, 78, 216, 0.18) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.login-left::before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  left: -60px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.login-brand {\n  text-align: center;\n  margin-bottom: 56px;\n  position: relative;\n  z-index: 1;\n}\n.login-brand .brand-logo {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      145deg,\n      #1D4ED8,\n      #3B82F6);\n  border-radius: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 22px;\n  box-shadow: 0 8px 28px rgba(29, 78, 216, 0.45);\n}\n.login-brand .brand-logo .blessing-login-mark {\n  font-size: 22px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: -0.5px;\n  font-family: "Inter", sans-serif;\n}\n.login-brand .brand-logo .brand-app-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 14px;\n}\n.login-brand .brand-logo.has-logo {\n  background: #ffffff;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);\n}\n.login-brand .brand-name {\n  font-size: 22px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n  color: #ffffff;\n  font-family: "Inter", sans-serif;\n}\n.login-brand .brand-subtitle {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.38);\n  font-weight: 400;\n  letter-spacing: 0.4px;\n}\n.modules-preview {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  width: 100%;\n  max-width: 300px;\n  position: relative;\n  z-index: 1;\n}\n.module-icon {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: var(--ease);\n  cursor: default;\n}\n.module-icon:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: translateY(-2px);\n}\n.module-icon .material-icons {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.module-icon span:last-child {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.3;\n}\n.left-footer {\n  margin-top: 44px;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.left-footer p {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.28);\n  font-style: italic;\n}\n.login-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-page);\n  padding: 40px;\n}\n.login-form-container {\n  width: 100%;\n  max-width: 420px;\n}\n.form-header {\n  text-align: center;\n  margin-bottom: 36px;\n}\n.form-header .form-logo {\n  width: 56px;\n  height: 56px;\n  background: var(--primary);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 18px;\n  box-shadow: 0 6px 18px rgba(29, 78, 216, 0.28);\n}\n.form-header .form-logo .material-icons {\n  font-size: 28px;\n  color: white;\n}\n.form-header h2 {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 7px;\n  letter-spacing: -0.4px;\n  font-family: "Inter", sans-serif;\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 13.5px;\n}\n.form-group {\n  margin-bottom: 18px;\n}\n.form-group label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 7px;\n}\n.form-group label .material-icons {\n  font-size: 15px;\n  color: var(--primary);\n}\n.form-control {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  transition: var(--ease);\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-control.is-invalid {\n  border-color: var(--danger);\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.password-field {\n  position: relative;\n}\n.password-field .form-control {\n  padding-right: 46px;\n}\n.password-field .toggle-password {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 3px;\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.password-field .toggle-password:hover {\n  color: var(--primary);\n}\n.password-field .toggle-password .material-icons {\n  font-size: 19px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: var(--danger-bg);\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  border-left: 3px solid var(--danger);\n  border-radius: var(--radius-sm);\n  color: var(--danger);\n  font-size: 13px;\n  margin-bottom: 18px;\n  animation: shake 0.3s ease;\n}\n.alert-error .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.btn-login {\n  width: 100%;\n  padding: 12px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14.5px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: var(--ease);\n  box-shadow: 0 3px 12px rgba(29, 78, 216, 0.28);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  letter-spacing: 0.01em;\n}\n.btn-login .material-icons {\n  font-size: 19px;\n}\n.btn-login:hover:not(:disabled) {\n  background: var(--primary-dark);\n  box-shadow: 0 5px 18px rgba(29, 78, 216, 0.38);\n  transform: translateY(-1px);\n}\n.btn-login:active:not(:disabled) {\n  transform: none;\n}\n.btn-login:disabled {\n  opacity: 0.75;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner-sm {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.form-footer {\n  text-align: center;\n  margin-top: 36px;\n}\n.form-footer p {\n  font-size: 11.5px;\n  color: var(--text-muted);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n@media (max-width: 768px) {\n  .login-page {\n    flex-direction: column;\n  }\n  .login-left {\n    width: 100%;\n    padding: 36px 24px;\n    min-height: 260px;\n  }\n  .modules-preview {\n    max-width: 100%;\n  }\n  .login-right {\n    padding: 28px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: AppBrandingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/pages/login/login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-HZ6JY3MD.js.map
