import {
  ThemeService
} from "./chunk-FQUFPJIF.js";
import {
  BUSINESS_MODULES,
  ModuleService
} from "./chunk-IIQL67GJ.js";
import {
  AppBrandingService
} from "./chunk-TJ6Z44ZG.js";
import "./chunk-K42XCUBR.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/pages/welcome/welcome.component.ts
var _forTrack0 = ($index, $item) => $item.code;
function WelcomeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.branding.appLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function WelcomeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1, "BE");
    \u0275\u0275domElementEnd();
  }
}
function WelcomeComponent_For_73_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38);
    \u0275\u0275text(1, "Bient\xF4t");
    \u0275\u0275domElementEnd();
  }
}
function WelcomeComponent_For_73_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2, "Ouvrir");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 16);
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275domElementEnd()();
  }
}
function WelcomeComponent_For_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 37);
    \u0275\u0275domListener("click", function WelcomeComponent_For_73_Template_div_click_0_listener() {
      const module_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navigateTo(module_r3));
    });
    \u0275\u0275conditionalCreate(1, WelcomeComponent_For_73_Conditional_1_Template, 2, 0, "div", 38);
    \u0275\u0275domElementStart(2, "div", 39)(3, "div", 40)(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(6, "div", 41)(7, "div", 42);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 43);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, WelcomeComponent_For_73_Conditional_11_Template, 5, 0, "div", 44);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const module_r3 = ctx.$implicit;
    \u0275\u0275styleProp("--module-color", module_r3.color);
    \u0275\u0275classProp("available", module_r3.available)("disabled", !module_r3.available);
    \u0275\u0275domProperty("tabIndex", module_r3.available ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!module_r3.available ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(module_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r3.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(module_r3.available ? 11 : -1);
  }
}
var WelcomeComponent = class _WelcomeComponent {
  constructor(authService, router, themeService, branding, moduleService) {
    this.authService = authService;
    this.router = router;
    this.themeService = themeService;
    this.branding = branding;
    this.moduleService = moduleService;
    this.userName = "Bienvenue";
    this.userInitials = "BV";
    this.currentDate = /* @__PURE__ */ new Date();
    this.showModules = true;
    this.modules = [];
    this.userRole = "";
  }
  ngOnInit() {
    this.loadUserInfo();
    this.moduleService.getModules(this.authService.getCompanyId()).subscribe({
      next: () => this.buildModules(),
      error: () => this.buildModules()
      // fail-open : si l'appel échoue, tout reste affiché
    });
  }
  loadUserInfo() {
    const session = this.authService.getSession();
    const displayName = this.authService.getUserDisplayName();
    if (displayName && displayName !== "Utilisateur") {
      this.userName = displayName;
    }
    const initials = this.authService.getUserInitials();
    if (initials && initials.length > 0) {
      this.userInitials = initials;
    }
    this.userRole = session?.roleLabel || session?.roleCode || "";
  }
  buildModules() {
    this.modules = BUSINESS_MODULES.filter((m) => {
      if (!this.moduleService.isInstalledCached(m.code))
        return false;
      if (this.authService.isPrivileged())
        return true;
      return this.authService.hasAnyModulePermission(m.code);
    }).map((m) => __spreadProps(__spreadValues({}, m), { available: true }));
  }
  goToExtraApps() {
    this.router.navigate(["/extra-apps"]);
  }
  navigateTo(module) {
    if (module.available) {
      this.router.navigate([module.route]);
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  getGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "Bonjour";
    if (hour < 18)
      return "Bon apr\xE8s-midi";
    return "Bonsoir";
  }
  static {
    this.\u0275fac = function WelcomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WelcomeComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AppBrandingService), \u0275\u0275directiveInject(ModuleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeComponent, selectors: [["app-welcome"]], decls: 79, vars: 15, consts: [[1, "welcome-page"], [1, "welcome-header"], [1, "header-brand"], [1, "brand-icon"], ["alt", "Logo", 1, "brand-app-logo", 3, "src"], [1, "blessing-logo-mark"], [1, "brand-name-block"], [1, "brand-text"], [1, "brand-tagline"], [1, "header-right"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"], [1, "btn-theme-toggle", 3, "click", "title"], [1, "material-icons"], ["title", "Se d\xE9connecter", 1, "btn-logout", 3, "click"], [1, "welcome-hero"], [1, "hero-inner"], [1, "hero-text"], [1, "hero-meta"], [1, "hero-date"], [1, "hero-badge"], ["title", "Applications suppl\xE9mentaires", 1, "hero-graphic-btn", 3, "click"], [1, "hero-graphic"], [1, "h-dot", "d1"], [1, "h-dot", "d2"], [1, "h-dot", "d3"], [1, "h-dot", "d4"], [1, "welcome-main"], [1, "modules-section"], [1, "section-header"], [1, "modules-grid"], ["role", "button", 1, "module-card", 3, "available", "disabled", "--module-color", "tabindex"], [1, "welcome-footer"], [1, "footer-logo"], ["role", "button", 1, "module-card", 3, "click", "tabindex"], [1, "soon-badge"], [1, "module-icon-wrap"], [1, "module-icon"], [1, "module-body"], [1, "module-name"], [1, "module-desc"], [1, "module-arrow-row"], [1, "module-open-label"]], template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275conditionalCreate(4, WelcomeComponent_Conditional_4_Template, 1, 1, "img", 4)(5, WelcomeComponent_Conditional_5_Template, 2, 0, "span", 5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 6)(7, "span", 7);
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "span", 8);
        \u0275\u0275text(10, "Blessing Enterprise Resource Planning");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(11, "div", 9)(12, "div", 10)(13, "div", 11);
        \u0275\u0275text(14);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(15, "div", 12)(16, "span", 13);
        \u0275\u0275text(17);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(18, "span", 14);
        \u0275\u0275text(19);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(20, "button", 15);
        \u0275\u0275domListener("click", function WelcomeComponent_Template_button_click_20_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275domElementStart(21, "span", 16);
        \u0275\u0275text(22);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(23, "button", 17);
        \u0275\u0275domListener("click", function WelcomeComponent_Template_button_click_23_listener() {
          return ctx.logout();
        });
        \u0275\u0275domElementStart(24, "span", 16);
        \u0275\u0275text(25, "logout");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(26, "span");
        \u0275\u0275text(27, "D\xE9connexion");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "h1");
        \u0275\u0275text(32);
        \u0275\u0275domElementStart(33, "strong");
        \u0275\u0275text(34);
        \u0275\u0275domElementEnd();
        \u0275\u0275text(35, "\xA0\u{1F44B}");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(36, "p");
        \u0275\u0275text(37, "Que souhaitez-vous faire aujourd'hui ?");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(38, "div", 21)(39, "div", 22)(40, "span", 16);
        \u0275\u0275text(41, "calendar_today");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "date");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(44, "div", 23)(45, "span", 16);
        \u0275\u0275text(46, "rocket_launch");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(47, " K\xB7I\xB7R\xB7A ERP v1.0 ");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(48, "button", 24);
        \u0275\u0275domListener("click", function WelcomeComponent_Template_button_click_48_listener() {
          return ctx.goToExtraApps();
        });
        \u0275\u0275domElementStart(49, "div", 25)(50, "div", 26)(51, "span", 16);
        \u0275\u0275text(52, "calculate");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(53, "div", 27)(54, "span", 16);
        \u0275\u0275text(55, "point_of_sale");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(56, "div", 28)(57, "span", 16);
        \u0275\u0275text(58, "local_shipping");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(59, "div", 29)(60, "span", 16);
        \u0275\u0275text(61, "inventory_2");
        \u0275\u0275domElementEnd()()()()()();
        \u0275\u0275domElementStart(62, "main", 30)(63, "section", 31)(64, "div", 32)(65, "h2")(66, "span", 16);
        \u0275\u0275text(67, "apps");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(68, " Applications disponibles ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(69, "p");
        \u0275\u0275text(70, "S\xE9lectionnez un module pour commencer");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(71, "div", 33);
        \u0275\u0275repeaterCreate(72, WelcomeComponent_For_73_Template, 12, 12, "div", 34, _forTrack0);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(74, "footer", 35)(75, "span", 36);
        \u0275\u0275text(76, "K\xB7I\xB7R\xB7A");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(77, "p");
        \u0275\u0275text(78, "Kairos Integrated Resource Application v1.0 \u2014 \xA9 Kairos Innovation Technologies \u2014 Tous droits r\xE9serv\xE9s");
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("has-logo", ctx.branding.hasAppLogo);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.branding.hasAppLogo ? 4 : 5);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.branding.appName);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userRole);
        \u0275\u0275advance();
        \u0275\u0275domProperty("title", ctx.themeService.isDark() ? "Mode jour" : "Mode nuit");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "light_mode" : "dark_mode");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("", ctx.getGreeting(), ", ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 12, ctx.currentDate, "EEEE d MMMM yyyy"), " ");
        \u0275\u0275advance(30);
        \u0275\u0275repeater(ctx.modules);
      }
    }, dependencies: [CommonModule, DatePipe], styles: ['@charset "UTF-8";\n\n\n.welcome-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-page);\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.welcome-header[_ngcontent-%COMP%] {\n  background: var(--navbar-bg);\n  border-bottom: 1px solid var(--navbar-border);\n  padding: 0 28px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 3px 14px rgba(0, 0, 0, 0.28);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.header-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary),\n      var(--primary-light));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.42);\n}\n.blessing-logo-mark[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: -0.5px;\n  font-family: "Inter", sans-serif;\n}\n.brand-app-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.brand-icon.has-logo[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n.brand-name-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: 1px;\n  font-family: "Inter", sans-serif;\n  line-height: 1;\n}\n.brand-text[_ngcontent-%COMP%]   .blessing-dot[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-weight: 300;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.28);\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--primary-light));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.35);\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: white;\n  line-height: 1.2;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.32);\n}\n.btn-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.55);\n  cursor: pointer;\n  transition: var(--ease);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.18);\n  border-color: rgba(220, 38, 38, 0.35);\n  color: #FCA5A5;\n}\n.welcome-hero[_ngcontent-%COMP%] {\n  background: var(--navbar-bg);\n  position: relative;\n  overflow: hidden;\n  padding: 36px 40px 32px;\n  border-bottom: 1px solid var(--navbar-border);\n}\n.welcome-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  right: -40px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(29, 78, 216, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.welcome-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -60px;\n  left: 30%;\n  width: 250px;\n  height: 250px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  z-index: 1;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.78);\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: white;\n}\n.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.38);\n  margin-bottom: 14px;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: capitalize;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-date[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 11.5px;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n}\n.hero-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--primary-light);\n}\n.hero-graphic-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  border-radius: 10px;\n  flex-shrink: 0;\n  transition: opacity 0.2s, transform 0.15s;\n}\n.hero-graphic-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  transform: scale(1.05);\n}\n.hero-graphic-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.hero-graphic[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  opacity: 0.35;\n  transition: opacity 0.2s;\n}\n.hero-graphic-btn[_ngcontent-%COMP%]:hover   .hero-graphic[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.hero-graphic[_ngcontent-%COMP%]   .h-dot[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-graphic[_ngcontent-%COMP%]   .h-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n.hero-graphic[_ngcontent-%COMP%]   .h-dot.d1[_ngcontent-%COMP%] {\n  background: #1D4ED8;\n}\n.hero-graphic[_ngcontent-%COMP%]   .h-dot.d2[_ngcontent-%COMP%] {\n  background: #0891B2;\n}\n.hero-graphic[_ngcontent-%COMP%]   .h-dot.d3[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.hero-graphic[_ngcontent-%COMP%]   .h-dot.d4[_ngcontent-%COMP%] {\n  background: #EA580C;\n}\n.welcome-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 36px 40px;\n  background: var(--bg-page);\n}\n.modules-section[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary);\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.modules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 18px;\n  width: 100%;\n}\n.module-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-xl);\n  padding: 28px 22px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid var(--border-light);\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  cursor: pointer;\n  min-height: 210px;\n}\n.module-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--module-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.module-card[_ngcontent-%COMP%] {\n}\n.module-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--module-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  pointer-events: none;\n}\n.module-card.available[_ngcontent-%COMP%]:hover {\n  border-color: var(--module-color, var(--primary));\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-5px);\n}\n.module-card.available[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.module-card.available[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.04;\n}\n.module-card.available[_ngcontent-%COMP%]:hover   .module-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-4deg);\n}\n.module-card.available[_ngcontent-%COMP%]:hover   .module-arrow-row[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.module-card.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.45;\n  filter: grayscale(50%);\n}\n.soon-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  padding: 3px 10px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 9.5px;\n  font-weight: 700;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  z-index: 1;\n}\n.module-icon-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--module-color, var(--primary));\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  flex-shrink: 0;\n}\n.module-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 34px;\n  color: white;\n}\n.module-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.module-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.3px;\n  line-height: 1.2;\n}\n.module-desc[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.module-arrow-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  opacity: 0;\n  transform: translateY(6px);\n  transition: all 0.2s ease;\n}\n.module-arrow-row[_ngcontent-%COMP%]   .module-open-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--module-color, var(--primary));\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.module-arrow-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--module-color, var(--primary));\n}\n.welcome-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  border-top: 1px solid var(--border-light);\n  background: var(--bg-surface);\n}\n.welcome-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--primary);\n  letter-spacing: 3px;\n  margin-bottom: 4px;\n  font-family: "Inter", sans-serif;\n}\n.welcome-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n@media (max-width: 1200px) {\n  .modules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .welcome-header[_ngcontent-%COMP%] {\n    padding: 0 16px;\n    height: 52px;\n  }\n  .user-details[_ngcontent-%COMP%] {\n    max-width: 130px;\n  }\n  .welcome-hero[_ngcontent-%COMP%] {\n    padding: 22px 18px;\n  }\n  .hero-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0;\n  }\n  .hero-graphic-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .welcome-main[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .modules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .module-card[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n    min-height: 180px;\n  }\n  .module-icon[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n  }\n  .module-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .module-name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .welcome-header[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  .btn-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .brand-tagline[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .welcome-hero[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n  }\n  .modules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .module-card[_ngcontent-%COMP%] {\n    padding: 16px 13px;\n    min-height: 160px;\n    border-radius: var(--radius-lg);\n  }\n  .module-icon[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 46px;\n  }\n  .module-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .module-icon[_ngcontent-%COMP%] {\n    margin-bottom: 14px;\n  }\n  .module-name[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .module-desc[_ngcontent-%COMP%] {\n    font-size: 11.5px;\n    -webkit-line-clamp: 2;\n  }\n}\n/*# sourceMappingURL=welcome.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeComponent, [{
    type: Component,
    args: [{ selector: "app-welcome", standalone: true, imports: [CommonModule], template: `<div class="welcome-page">
  <!-- HEADER -->
  <header class="welcome-header">
    <div class="header-brand">
      <div class="brand-icon" [class.has-logo]="branding.hasAppLogo">
        @if (branding.hasAppLogo) {
          <img [src]="branding.appLogoUrl" class="brand-app-logo" alt="Logo">
        } @else {
          <span class="blessing-logo-mark">BE</span>
        }
      </div>
      <div class="brand-name-block">
        <span class="brand-text">{{ branding.appName }}</span>
        <span class="brand-tagline">Blessing Enterprise Resource Planning</span>
      </div>
    </div>

    <div class="header-right">
      <div class="user-info">
        <div class="user-avatar">{{ userInitials }}</div>
        <div class="user-details">
          <span class="user-name">{{ userName }}</span>
          <span class="user-role">{{ userRole }}</span>
        </div>
      </div>
      <button class="btn-theme-toggle" (click)="themeService.toggle()" [title]="themeService.isDark() ? 'Mode jour' : 'Mode nuit'">
        <span class="material-icons">{{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}</span>
      </button>
      <button class="btn-logout" (click)="logout()" title="Se d\xE9connecter">
        <span class="material-icons">logout</span>
        <span>D\xE9connexion</span>
      </button>
    </div>
  </header>

  <!-- HERO -->
  <div class="welcome-hero">
    <div class="hero-inner">
      <div class="hero-text">
        <h1>{{ getGreeting() }}, <strong>{{ userName }}</strong>&nbsp;\u{1F44B}</h1>
        <p>Que souhaitez-vous faire aujourd'hui ?</p>
        <div class="hero-meta">
          <div class="hero-date">
            <span class="material-icons">calendar_today</span>
            {{ currentDate | date:'EEEE d MMMM yyyy' }}
          </div>
          <div class="hero-badge">
            <span class="material-icons">rocket_launch</span>
            K\xB7I\xB7R\xB7A ERP v1.0
          </div>
        </div>
      </div>
      <!-- Ic\xF4ne de navigation vers les apps suppl\xE9mentaires -->
      <button class="hero-graphic-btn"
              (click)="goToExtraApps()"
              title="Applications suppl\xE9mentaires">
        <div class="hero-graphic">
          <div class="h-dot d1"><span class="material-icons">calculate</span></div>
          <div class="h-dot d2"><span class="material-icons">point_of_sale</span></div>
          <div class="h-dot d3"><span class="material-icons">local_shipping</span></div>
          <div class="h-dot d4"><span class="material-icons">inventory_2</span></div>
        </div>
      </button>
    </div>
  </div>

  <!-- MODULES GRID -->
  <main class="welcome-main">
    <section class="modules-section">
      <div class="section-header">
        <h2>
          <span class="material-icons">apps</span>
          Applications disponibles
        </h2>
        <p>S\xE9lectionnez un module pour commencer</p>
      </div>

      <div class="modules-grid">
        @for (module of modules; track module.code) {
          <div class="module-card"
               [class.available]="module.available"
               [class.disabled]="!module.available"
               (click)="navigateTo(module)"
               [style.--module-color]="module.color"
               role="button"
               [tabindex]="module.available ? 0 : -1">

            @if (!module.available) {
              <div class="soon-badge">Bient\xF4t</div>
            }

            <div class="module-icon-wrap">
              <div class="module-icon">
                <span class="material-icons">{{ module.icon }}</span>
              </div>
            </div>

            <div class="module-body">
              <div class="module-name">{{ module.name }}</div>
              <div class="module-desc">{{ module.description }}</div>

              @if (module.available) {
                <div class="module-arrow-row">
                  <span class="module-open-label">Ouvrir</span>
                  <span class="material-icons">arrow_forward</span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="welcome-footer">
    <span class="footer-logo">K\xB7I\xB7R\xB7A</span>
    <p>Kairos Integrated Resource Application v1.0 &mdash; &copy; Kairos Innovation Technologies &mdash; Tous droits r\xE9serv\xE9s</p>
  </footer>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/welcome/welcome.component.scss */\n.welcome-page {\n  min-height: 100vh;\n  background: var(--bg-page);\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.welcome-header {\n  background: var(--navbar-bg);\n  border-bottom: 1px solid var(--navbar-border);\n  padding: 0 28px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 3px 14px rgba(0, 0, 0, 0.28);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.header-brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.brand-icon {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary),\n      var(--primary-light));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.42);\n}\n.blessing-logo-mark {\n  font-size: 14px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: -0.5px;\n  font-family: "Inter", sans-serif;\n}\n.brand-app-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.brand-icon.has-logo {\n  background: #ffffff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n.brand-name-block {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand-text {\n  font-size: 16px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: 1px;\n  font-family: "Inter", sans-serif;\n  line-height: 1;\n}\n.brand-text .blessing-dot {\n  color: var(--primary-light);\n  font-weight: 300;\n}\n.brand-tagline {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.28);\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.user-info .user-avatar {\n  width: 34px;\n  height: 34px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--primary-light));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.35);\n}\n.user-info .user-details {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-info .user-details .user-name,\n.user-info .user-details .user-role {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info .user-details .user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: white;\n  line-height: 1.2;\n}\n.user-info .user-details .user-role {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.32);\n}\n.btn-logout {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.55);\n  cursor: pointer;\n  transition: var(--ease);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-logout .material-icons {\n  font-size: 18px;\n}\n.btn-logout:hover {\n  background: rgba(220, 38, 38, 0.18);\n  border-color: rgba(220, 38, 38, 0.35);\n  color: #FCA5A5;\n}\n.welcome-hero {\n  background: var(--navbar-bg);\n  position: relative;\n  overflow: hidden;\n  padding: 36px 40px 32px;\n  border-bottom: 1px solid var(--navbar-border);\n}\n.welcome-hero::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  right: -40px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(29, 78, 216, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.welcome-hero::after {\n  content: "";\n  position: absolute;\n  bottom: -60px;\n  left: 30%;\n  width: 250px;\n  height: 250px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  z-index: 1;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.hero-text h1 {\n  font-size: 30px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.78);\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n}\n.hero-text h1 strong {\n  font-weight: 700;\n  color: white;\n}\n.hero-text p {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.38);\n  margin-bottom: 14px;\n}\n.hero-text .hero-meta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.hero-text .hero-date {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: capitalize;\n}\n.hero-text .hero-date .material-icons {\n  font-size: 13px;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 11.5px;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n}\n.hero-badge .material-icons {\n  font-size: 13px;\n  color: var(--primary-light);\n}\n.hero-graphic-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  border-radius: 10px;\n  flex-shrink: 0;\n  transition: opacity 0.2s, transform 0.15s;\n}\n.hero-graphic-btn:hover {\n  opacity: 0.7;\n  transform: scale(1.05);\n}\n.hero-graphic-btn:active {\n  transform: scale(0.95);\n}\n.hero-graphic {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  opacity: 0.35;\n  transition: opacity 0.2s;\n}\n.hero-graphic-btn:hover .hero-graphic {\n  opacity: 0.6;\n}\n.hero-graphic .h-dot {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-graphic .h-dot .material-icons {\n  font-size: 20px;\n  color: white;\n}\n.hero-graphic .h-dot.d1 {\n  background: #1D4ED8;\n}\n.hero-graphic .h-dot.d2 {\n  background: #0891B2;\n}\n.hero-graphic .h-dot.d3 {\n  background: #059669;\n}\n.hero-graphic .h-dot.d4 {\n  background: #EA580C;\n}\n.welcome-main {\n  flex: 1;\n  padding: 36px 40px;\n  background: var(--bg-page);\n}\n.modules-section {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.section-header {\n  margin-bottom: 28px;\n}\n.section-header h2 {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-header h2 .material-icons {\n  font-size: 16px;\n  color: var(--primary);\n}\n.section-header p {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.modules-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 18px;\n  width: 100%;\n}\n.module-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-xl);\n  padding: 28px 22px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid var(--border-light);\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  cursor: pointer;\n  min-height: 210px;\n}\n.module-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--module-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.module-card {\n}\n.module-card::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--module-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  pointer-events: none;\n}\n.module-card.available:hover {\n  border-color: var(--module-color, var(--primary));\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-5px);\n}\n.module-card.available:hover::before {\n  opacity: 1;\n}\n.module-card.available:hover::after {\n  opacity: 0.04;\n}\n.module-card.available:hover .module-icon {\n  transform: scale(1.1) rotate(-4deg);\n}\n.module-card.available:hover .module-arrow-row {\n  opacity: 1;\n  transform: translateY(0);\n}\n.module-card.disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n  filter: grayscale(50%);\n}\n.soon-badge {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  padding: 3px 10px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 9.5px;\n  font-weight: 700;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  z-index: 1;\n}\n.module-icon-wrap {\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.module-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--module-color, var(--primary));\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  flex-shrink: 0;\n}\n.module-icon .material-icons {\n  font-size: 34px;\n  color: white;\n}\n.module-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.module-name {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.3px;\n  line-height: 1.2;\n}\n.module-desc {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.module-arrow-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  opacity: 0;\n  transform: translateY(6px);\n  transition: all 0.2s ease;\n}\n.module-arrow-row .module-open-label {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--module-color, var(--primary));\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.module-arrow-row .material-icons {\n  font-size: 19px;\n  color: var(--module-color, var(--primary));\n}\n.welcome-footer {\n  text-align: center;\n  padding: 16px;\n  border-top: 1px solid var(--border-light);\n  background: var(--bg-surface);\n}\n.welcome-footer .footer-logo {\n  display: block;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--primary);\n  letter-spacing: 3px;\n  margin-bottom: 4px;\n  font-family: "Inter", sans-serif;\n}\n.welcome-footer p {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n@media (max-width: 1200px) {\n  .modules-grid {\n    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .welcome-header {\n    padding: 0 16px;\n    height: 52px;\n  }\n  .user-details {\n    max-width: 130px;\n  }\n  .welcome-hero {\n    padding: 22px 18px;\n  }\n  .hero-inner {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0;\n  }\n  .hero-graphic-btn {\n    display: none;\n  }\n  .hero-text h1 {\n    font-size: 22px;\n  }\n  .welcome-main {\n    padding: 20px 16px;\n  }\n  .modules-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .module-card {\n    padding: 20px 16px;\n    min-height: 180px;\n  }\n  .module-icon {\n    width: 52px;\n    height: 52px;\n  }\n  .module-icon .material-icons {\n    font-size: 28px;\n  }\n  .module-name {\n    font-size: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .welcome-header {\n    height: 50px;\n  }\n  .btn-logout span:last-child {\n    display: none;\n  }\n  .brand-tagline {\n    display: none;\n  }\n  .welcome-hero {\n    padding: 16px 14px;\n  }\n  .modules-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .module-card {\n    padding: 16px 13px;\n    min-height: 160px;\n    border-radius: var(--radius-lg);\n  }\n  .module-icon {\n    width: 46px;\n    height: 46px;\n  }\n  .module-icon .material-icons {\n    font-size: 24px;\n  }\n  .module-icon {\n    margin-bottom: 14px;\n  }\n  .module-name {\n    font-size: 13px;\n  }\n  .module-desc {\n    font-size: 11.5px;\n    -webkit-line-clamp: 2;\n  }\n}\n/*# sourceMappingURL=welcome.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ThemeService }, { type: AppBrandingService }, { type: ModuleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeComponent, { className: "WelcomeComponent", filePath: "app/pages/welcome/welcome.component.ts", lineNumber: 20 });
})();
export {
  WelcomeComponent
};
//# sourceMappingURL=chunk-FFC6ZSDO.js.map
