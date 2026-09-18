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

// src/app/pages/extra-apps/extra-apps.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.code;
function ExtraAppsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.branding.appLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function ExtraAppsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1, "BE");
    \u0275\u0275domElementEnd();
  }
}
function ExtraAppsComponent_For_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19);
    \u0275\u0275text(1, "Bient\xF4t");
    \u0275\u0275domElementEnd();
  }
}
function ExtraAppsComponent_For_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2, "Ouvrir");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 11);
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275domElementEnd()();
  }
}
function ExtraAppsComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275domListener("click", function ExtraAppsComponent_For_29_Template_div_click_0_listener() {
      const app_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navigate(app_r3));
    });
    \u0275\u0275conditionalCreate(1, ExtraAppsComponent_For_29_Conditional_1_Template, 2, 0, "div", 19);
    \u0275\u0275domElementStart(2, "div", 20)(3, "div", 21)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(6, "div", 22)(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, ExtraAppsComponent_For_29_Conditional_11_Template, 5, 0, "div", 25);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    \u0275\u0275styleProp("--app-color", app_r3.color);
    \u0275\u0275classProp("available", app_r3.available)("disabled", !app_r3.available);
    \u0275\u0275domProperty("tabIndex", app_r3.available ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!app_r3.available ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(app_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r3.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r3.available ? 11 : -1);
  }
}
function ExtraAppsComponent_For_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19);
    \u0275\u0275text(1, "D\xE9sinstall\xE9");
    \u0275\u0275domElementEnd();
  }
}
function ExtraAppsComponent_For_39_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2, "Ouvrir");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 11);
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275domElementEnd()();
  }
}
function ExtraAppsComponent_For_39_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 28);
    \u0275\u0275domListener("click", function ExtraAppsComponent_For_39_Conditional_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const m_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleModule(m_r5, $event));
    });
    \u0275\u0275domElementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const m_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("uninstall", m_r5.installed);
    \u0275\u0275domProperty("disabled", ctx_r0.toggling[m_r5.code]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.installed ? "delete_outline" : "download");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.toggling[m_r5.code] ? "\u2026" : m_r5.installed ? "D\xE9sinstaller" : "Installer", " ");
  }
}
function ExtraAppsComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275domListener("click", function ExtraAppsComponent_For_39_Template_div_click_0_listener() {
      const m_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModule(m_r5));
    });
    \u0275\u0275conditionalCreate(1, ExtraAppsComponent_For_39_Conditional_1_Template, 2, 0, "div", 19);
    \u0275\u0275domElementStart(2, "div", 20)(3, "div", 21)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(6, "div", 22)(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, ExtraAppsComponent_For_39_Conditional_11_Template, 5, 0, "div", 25);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(12, ExtraAppsComponent_For_39_Conditional_12_Template, 4, 5, "button", 27);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--app-color", m_r5.color);
    \u0275\u0275classProp("available", m_r5.installed)("disabled", !m_r5.installed);
    \u0275\u0275domProperty("tabIndex", m_r5.installed ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!m_r5.installed ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r5.installed ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canManageModules ? 12 : -1);
  }
}
var ExtraAppsComponent = class _ExtraAppsComponent {
  constructor(router, authService, themeService, branding, moduleService) {
    this.router = router;
    this.authService = authService;
    this.themeService = themeService;
    this.branding = branding;
    this.moduleService = moduleService;
    this.apps = [
      {
        id: "sync",
        name: "Hub & Spoke",
        description: "Synchronisation des op\xE9rations vers le Hub central \u2014 suivi par module",
        icon: "hub",
        color: "#7C3AED",
        route: "/sync",
        available: true
      },
      {
        id: "config",
        name: "Configuration",
        description: "Groupes, entreprises, utilisateurs, r\xF4les & permissions",
        icon: "admin_panel_settings",
        color: "#64748B",
        route: "/config",
        available: true
      }
    ];
    this.moduleCards = [];
    this.toggling = {};
  }
  ngOnInit() {
    this.loadModules();
  }
  loadModules() {
    this.moduleService.getModules(this.authService.getCompanyId()).subscribe((states) => {
      this.moduleCards = BUSINESS_MODULES.map((m) => __spreadProps(__spreadValues({}, m), {
        installed: states.find((s) => s.code === m.code)?.installed ?? true
      }));
    });
  }
  get canManageModules() {
    return this.authService.hasPermission("CONFIG", "MODULES", "EDIT") || this.authService.isPrivileged();
  }
  navigate(app) {
    if (app.available)
      this.router.navigate([app.route]);
  }
  openModule(card) {
    if (card.installed)
      this.router.navigate([card.route]);
  }
  toggleModule(card, event) {
    event.stopPropagation();
    if (!this.canManageModules || this.toggling[card.code])
      return;
    const nextState = !card.installed;
    const verb = nextState ? "installer" : "d\xE9sinstaller";
    if (!confirm(`Voulez-vous ${verb} le module \xAB ${card.name} \xBB ?`))
      return;
    this.toggling[card.code] = true;
    this.moduleService.setInstalled(this.authService.getCompanyId(), card.code, nextState).subscribe({
      next: (updated) => {
        card.installed = updated.installed;
        this.toggling[card.code] = false;
      },
      error: () => {
        this.toggling[card.code] = false;
      }
    });
  }
  back() {
    this.router.navigate(["/welcome"]);
  }
  static {
    this.\u0275fac = function ExtraAppsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtraAppsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AppBrandingService), \u0275\u0275directiveInject(ModuleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExtraAppsComponent, selectors: [["app-extra-apps"]], decls: 40, vars: 6, consts: [[1, "extra-page"], [1, "extra-header"], [1, "header-brand"], [1, "brand-icon"], ["alt", "Logo", 1, "brand-app-logo", 3, "src"], [1, "blessing-logo-mark"], [1, "brand-name-block"], [1, "brand-text"], [1, "brand-tagline"], [1, "header-right"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "btn-theme", 3, "click", "title"], [1, "extra-main"], [1, "section-header"], [1, "apps-grid"], ["role", "button", 1, "app-card", 3, "available", "disabled", "--app-color", "tabindex"], [1, "section-header", 2, "margin-top", "36px"], ["role", "button", 1, "app-card", 3, "click", "tabindex"], [1, "soon-badge"], [1, "app-icon-wrap"], [1, "app-icon"], [1, "app-body"], [1, "app-name"], [1, "app-desc"], [1, "app-arrow-row"], [1, "app-open-label"], [1, "module-toggle-btn", 3, "uninstall", "disabled"], [1, "module-toggle-btn", 3, "click", "disabled"]], template: function ExtraAppsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275conditionalCreate(4, ExtraAppsComponent_Conditional_4_Template, 1, 1, "img", 4)(5, ExtraAppsComponent_Conditional_5_Template, 2, 0, "span", 5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 6)(7, "span", 7);
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "span", 8);
        \u0275\u0275text(10, "Blessing Enterprise Resource Planning");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(11, "div", 9)(12, "button", 10);
        \u0275\u0275domListener("click", function ExtraAppsComponent_Template_button_click_12_listener() {
          return ctx.back();
        });
        \u0275\u0275domElementStart(13, "span", 11);
        \u0275\u0275text(14, "arrow_back");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(15, " Retour ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(16, "button", 12);
        \u0275\u0275domListener("click", function ExtraAppsComponent_Template_button_click_16_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275domElementStart(17, "span", 11);
        \u0275\u0275text(18);
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(19, "main", 13)(20, "div", 14)(21, "h2")(22, "span", 11);
        \u0275\u0275text(23, "apps");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(24, " Applications suppl\xE9mentaires");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(25, "p");
        \u0275\u0275text(26, "Modules additionnels de la plateforme K\xB7I\xB7R\xB7A");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(27, "div", 15);
        \u0275\u0275repeaterCreate(28, ExtraAppsComponent_For_29_Template, 12, 12, "div", 16, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(30, "div", 17)(31, "h2")(32, "span", 11);
        \u0275\u0275text(33, "widgets");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(34, " Modules m\xE9tier");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(35, "p");
        \u0275\u0275text(36, "Installez ou d\xE9sinstallez les modules dont vous avez besoin \u2014 un module d\xE9sinstall\xE9 dispara\xEEt de l'accueil.");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(37, "div", 15);
        \u0275\u0275repeaterCreate(38, ExtraAppsComponent_For_39_Template, 13, 13, "div", 16, _forTrack1);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("has-logo", ctx.branding.hasAppLogo);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.branding.hasAppLogo ? 4 : 5);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.branding.appName);
        \u0275\u0275advance(8);
        \u0275\u0275domProperty("title", ctx.themeService.isDark() ? "Mode jour" : "Mode nuit");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "light_mode" : "dark_mode");
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.apps);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.moduleCards);
      }
    }, dependencies: [CommonModule], styles: ['@charset "UTF-8";\n\n\n.extra-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-page);\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.extra-header[_ngcontent-%COMP%] {\n  background: var(--navbar-bg);\n  border-bottom: 1px solid var(--navbar-border);\n  padding: 0 28px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 3px 14px rgba(0, 0, 0, 0.28);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.header-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary),\n      var(--primary-light));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.blessing-logo-mark[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.brand-app-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.brand-icon.has-logo[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n.brand-name-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: 1px;\n  line-height: 1;\n}\n.blessing-dot[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-weight: 300;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.28);\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.btn-theme[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n}\n.btn-theme[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-theme[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.extra-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 40px;\n  max-width: 900px;\n  margin: 0 auto;\n  width: 100%;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary);\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.apps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 20px;\n}\n.app-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  padding: 28px 22px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid var(--border-light);\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  cursor: pointer;\n  min-height: 210px;\n}\n.app-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--app-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.app-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--app-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n.app-card.available[_ngcontent-%COMP%]:hover {\n  border-color: var(--app-color, var(--primary));\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);\n  transform: translateY(-5px);\n}\n.app-card.available[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.app-card.available[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.04;\n}\n.app-card.available[_ngcontent-%COMP%]:hover   .app-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-4deg);\n}\n.app-card.available[_ngcontent-%COMP%]:hover   .app-arrow-row[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.app-card.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.45;\n  filter: grayscale(50%);\n}\n.soon-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  padding: 3px 10px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 9.5px;\n  font-weight: 700;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  z-index: 1;\n}\n.module-toggle-btn[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 700;\n  cursor: pointer;\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  transition: all 0.15s ease;\n}\n.module-toggle-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.module-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(22, 163, 74, 0.2);\n}\n.module-toggle-btn.uninstall[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.module-toggle-btn.uninstall[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.module-toggle-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.app-icon-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.app-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--app-color, var(--primary));\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.app-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 34px;\n  color: white;\n}\n.app-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.app-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.3px;\n}\n.app-desc[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.app-arrow-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  opacity: 0;\n  transform: translateY(6px);\n  transition: all 0.2s;\n}\n.app-arrow-row[_ngcontent-%COMP%]   .app-open-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--app-color, var(--primary));\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.app-arrow-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--app-color, var(--primary));\n}\n/*# sourceMappingURL=extra-apps.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtraAppsComponent, [{
    type: Component,
    args: [{ selector: "app-extra-apps", standalone: true, imports: [CommonModule], template: `<div class="extra-page">

  <header class="extra-header">
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
      <button class="btn-back" (click)="back()">
        <span class="material-icons">arrow_back</span>
        Retour
      </button>
      <button class="btn-theme" (click)="themeService.toggle()" [title]="themeService.isDark() ? 'Mode jour' : 'Mode nuit'">
        <span class="material-icons">{{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}</span>
      </button>
    </div>
  </header>

  <main class="extra-main">
    <div class="section-header">
      <h2><span class="material-icons">apps</span> Applications suppl\xE9mentaires</h2>
      <p>Modules additionnels de la plateforme K\xB7I\xB7R\xB7A</p>
    </div>

    <div class="apps-grid">
      @for (app of apps; track app.id) {
        <div class="app-card"
             [class.available]="app.available"
             [class.disabled]="!app.available"
             [style.--app-color]="app.color"
             (click)="navigate(app)"
             role="button"
             [tabindex]="app.available ? 0 : -1">

          @if (!app.available) {
            <div class="soon-badge">Bient\xF4t</div>
          }

          <div class="app-icon-wrap">
            <div class="app-icon">
              <span class="material-icons">{{ app.icon }}</span>
            </div>
          </div>

          <div class="app-body">
            <div class="app-name">{{ app.name }}</div>
            <div class="app-desc">{{ app.description }}</div>
            @if (app.available) {
              <div class="app-arrow-row">
                <span class="app-open-label">Ouvrir</span>
                <span class="material-icons">arrow_forward</span>
              </div>
            }
          </div>
        </div>
      }
    </div>

    <div class="section-header" style="margin-top:36px">
      <h2><span class="material-icons">widgets</span> Modules m\xE9tier</h2>
      <p>Installez ou d\xE9sinstallez les modules dont vous avez besoin \u2014 un module d\xE9sinstall\xE9 dispara\xEEt de l'accueil.</p>
    </div>

    <div class="apps-grid">
      @for (m of moduleCards; track m.code) {
        <div class="app-card"
             [class.available]="m.installed"
             [class.disabled]="!m.installed"
             [style.--app-color]="m.color"
             (click)="openModule(m)"
             role="button"
             [tabindex]="m.installed ? 0 : -1">

          @if (!m.installed) {
            <div class="soon-badge">D\xE9sinstall\xE9</div>
          }

          <div class="app-icon-wrap">
            <div class="app-icon">
              <span class="material-icons">{{ m.icon }}</span>
            </div>
          </div>

          <div class="app-body">
            <div class="app-name">{{ m.name }}</div>
            <div class="app-desc">{{ m.description }}</div>
            @if (m.installed) {
              <div class="app-arrow-row">
                <span class="app-open-label">Ouvrir</span>
                <span class="material-icons">arrow_forward</span>
              </div>
            }
          </div>

          @if (canManageModules) {
            <button class="module-toggle-btn" [class.uninstall]="m.installed"
                    [disabled]="toggling[m.code]" (click)="toggleModule(m, $event)">
              <span class="material-icons">{{ m.installed ? 'delete_outline' : 'download' }}</span>
              {{ toggling[m.code] ? '\u2026' : (m.installed ? 'D\xE9sinstaller' : 'Installer') }}
            </button>
          }
        </div>
      }
    </div>
  </main>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/extra-apps/extra-apps.component.scss */\n.extra-page {\n  min-height: 100vh;\n  background: var(--bg-page);\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.extra-header {\n  background: var(--navbar-bg);\n  border-bottom: 1px solid var(--navbar-border);\n  padding: 0 28px;\n  height: 58px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 3px 14px rgba(0, 0, 0, 0.28);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.header-brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary),\n      var(--primary-light));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.blessing-logo-mark {\n  font-size: 14px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.brand-app-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.brand-icon.has-logo {\n  background: #ffffff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n.brand-name-block {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand-text {\n  font-size: 16px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: 1px;\n  line-height: 1;\n}\n.blessing-dot {\n  color: var(--primary-light);\n  font-weight: 300;\n}\n.brand-tagline {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.28);\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-back {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-back .material-icons {\n  font-size: 17px;\n}\n.btn-back:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.btn-theme {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n}\n.btn-theme .material-icons {\n  font-size: 18px;\n}\n.btn-theme:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.extra-main {\n  flex: 1;\n  padding: 40px;\n  max-width: 900px;\n  margin: 0 auto;\n  width: 100%;\n}\n.section-header {\n  margin-bottom: 32px;\n}\n.section-header h2 {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.section-header h2 .material-icons {\n  font-size: 16px;\n  color: var(--primary);\n}\n.section-header p {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.apps-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 20px;\n}\n.app-card {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  padding: 28px 22px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid var(--border-light);\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  cursor: pointer;\n  min-height: 210px;\n}\n.app-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--app-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.app-card::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--app-color, var(--primary));\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n.app-card.available:hover {\n  border-color: var(--app-color, var(--primary));\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);\n  transform: translateY(-5px);\n}\n.app-card.available:hover::before {\n  opacity: 1;\n}\n.app-card.available:hover::after {\n  opacity: 0.04;\n}\n.app-card.available:hover .app-icon {\n  transform: scale(1.1) rotate(-4deg);\n}\n.app-card.available:hover .app-arrow-row {\n  opacity: 1;\n  transform: translateY(0);\n}\n.app-card.disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n  filter: grayscale(50%);\n}\n.soon-badge {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  padding: 3px 10px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 9.5px;\n  font-weight: 700;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  z-index: 1;\n}\n.module-toggle-btn {\n  margin-top: 14px;\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 700;\n  cursor: pointer;\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  transition: all 0.15s ease;\n}\n.module-toggle-btn .material-icons {\n  font-size: 16px;\n}\n.module-toggle-btn:hover {\n  background: rgba(22, 163, 74, 0.2);\n}\n.module-toggle-btn.uninstall {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.module-toggle-btn.uninstall:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.module-toggle-btn:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.app-icon-wrap {\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.app-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--app-color, var(--primary));\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.app-icon .material-icons {\n  font-size: 34px;\n  color: white;\n}\n.app-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.app-name {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  letter-spacing: -0.3px;\n}\n.app-desc {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.app-arrow-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  opacity: 0;\n  transform: translateY(6px);\n  transition: all 0.2s;\n}\n.app-arrow-row .app-open-label {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--app-color, var(--primary));\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.app-arrow-row .material-icons {\n  font-size: 19px;\n  color: var(--app-color, var(--primary));\n}\n/*# sourceMappingURL=extra-apps.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: ThemeService }, { type: AppBrandingService }, { type: ModuleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtraAppsComponent, { className: "ExtraAppsComponent", filePath: "app/pages/extra-apps/extra-apps.component.ts", lineNumber: 30 });
})();
export {
  ExtraAppsComponent
};
//# sourceMappingURL=chunk-YWYWW7JP.js.map
