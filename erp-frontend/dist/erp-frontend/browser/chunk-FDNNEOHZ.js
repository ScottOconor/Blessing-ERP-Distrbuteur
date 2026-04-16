import {
  Router
} from "./chunk-K3VCSIQL.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/pages/welcome/welcome.component.ts
function WelcomeComponent_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "Bient\xF4t disponible");
    \u0275\u0275elementEnd();
  }
}
function WelcomeComponent_div_48_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 4);
    \u0275\u0275text(2, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
}
function WelcomeComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function WelcomeComponent_div_48_Template_div_click_0_listener() {
      const module_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateTo(module_r2));
    });
    \u0275\u0275template(1, WelcomeComponent_div_48_div_1_Template, 2, 0, "div", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "div", 26)(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 27)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, WelcomeComponent_div_48_div_11_Template, 3, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r2 = ctx.$implicit;
    \u0275\u0275styleProp("--module-color", module_r2.color);
    \u0275\u0275classProp("available", module_r2.available)("disabled", !module_r2.available);
    \u0275\u0275property("tabindex", module_r2.available ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !module_r2.available);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", module_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r2.available);
  }
}
var WelcomeComponent = class _WelcomeComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.userName = "Bienvenue";
    this.userInitials = "BV";
    this.currentDate = /* @__PURE__ */ new Date();
    this.showModules = true;
    this.modules = [
      {
        id: "accounting",
        name: "Comptabilit\xE9",
        description: "Journaux, \xE9critures, rapports financiers",
        icon: "calculate",
        color: "#714B67",
        route: "/accounting",
        available: true
      },
      {
        id: "sales",
        name: "Ventes",
        description: "Bons de commande, factures clients",
        icon: "point_of_sale",
        color: "#017E84",
        route: "/sales",
        available: true
      },
      {
        id: "purchases",
        name: "Achats",
        description: "Commandes fournisseurs, r\xE9ceptions et mise \xE0 jour du stock",
        icon: "local_shipping",
        color: "#00A09D",
        route: "/purchases",
        available: true
      },
      {
        id: "stock",
        name: "Stock",
        description: "Articles, entrep\xF4ts, r\xE9ceptions, livraisons, transferts inter-d\xE9p\xF4ts",
        icon: "inventory_2",
        color: "#2c7be5",
        route: "/stock",
        available: true
      },
      {
        id: "hr",
        name: "Ressources Humaines",
        description: "Employ\xE9s, cong\xE9s, paie",
        icon: "people",
        color: "#16C79A",
        route: "/hr",
        available: false
      },
      {
        id: "settings",
        name: "Param\xE8tres",
        description: "Configuration du syst\xE8me",
        icon: "settings",
        color: "#6C757D",
        route: "/settings",
        available: false
      }
    ];
  }
  ngOnInit() {
    this.loadUserInfo();
  }
  loadUserInfo() {
    const displayName = this.authService.getUserDisplayName();
    if (displayName && displayName !== "Utilisateur") {
      this.userName = displayName;
    }
    const initials = this.authService.getUserInitials();
    if (initials && initials.length > 0) {
      this.userInitials = initials;
    }
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
      return new (__ngFactoryType__ || _WelcomeComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeComponent, selectors: [["app-welcome"]], decls: 56, vars: 9, consts: [[1, "welcome-page"], [1, "welcome-header"], [1, "header-brand"], [1, "brand-icon"], [1, "material-icons"], [1, "brand-text"], [1, "header-right"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"], ["title", "Se d\xE9connecter", 1, "btn-logout", 3, "click"], [1, "welcome-hero"], [1, "hero-content"], [1, "hero-date"], [1, "hero-illustration"], [1, "welcome-main"], [1, "modules-section"], [1, "section-title"], [1, "modules-grid"], ["class", "module-card", "role", "button", 3, "available", "disabled", "--module-color", "tabindex", "click", 4, "ngFor", "ngForOf"], [1, "welcome-footer"], ["role", "button", 1, "module-card", 3, "click", "tabindex"], ["class", "soon-badge", 4, "ngIf"], [1, "module-icon-wrapper"], [1, "module-icon"], [1, "module-info"], ["class", "module-arrow", 4, "ngIf"], [1, "soon-badge"], [1, "module-arrow"]], template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "business");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "K.I.T");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Saisir le moment, cr\xE9er l'avenir !");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "span", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 11);
        \u0275\u0275text(18, "Administrateur");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function WelcomeComponent_Template_button_click_19_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(20, "span", 4);
        \u0275\u0275text(21, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " D\xE9connexion ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14)(25, "h1");
        \u0275\u0275text(26);
        \u0275\u0275elementStart(27, "strong");
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\xA0!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, "Que souhaitez-vous faire aujourd'hui ?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 15)(33, "span", 4);
        \u0275\u0275text(34, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 16)(38, "span", 4);
        \u0275\u0275text(39, "dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "main", 17)(41, "section", 18)(42, "div", 19)(43, "h2");
        \u0275\u0275text(44, "\u{1F4F1} Applications disponibles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p");
        \u0275\u0275text(46, "S\xE9lectionnez un module pour commencer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 20);
        \u0275\u0275template(48, WelcomeComponent_div_48_Template, 12, 14, "div", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "footer", 22)(50, "h1");
        \u0275\u0275text(51, "Kairos Innovation Technologies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53, "Saisir le Moment, Cr\xE9er l'avenir !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, "ERP v1.0 \u2014 \xA9 K.I.T \u2014 Tous droits r\xE9serv\xE9s");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("", ctx.getGreeting(), ", ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 6, ctx.currentDate, "EEEE d MMMM yyyy"), " ");
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.modules);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ['\n.welcome-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n}\n.welcome-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0 32px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.header-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #714B67,\n      #8e6285);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.header-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #212529;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #714B67,\n      #8e6285);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  line-height: 1.2;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #6c757d;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Roboto", sans-serif;\n}\n.btn-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n  border-color: #dc3545;\n}\n.welcome-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #714B67 0%,\n      #4a3147 60%,\n      #2d1e2e 100%);\n  color: white;\n  padding: 48px 48px 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -30%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 8px;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: white;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 16px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: capitalize;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-date[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.hero-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-illustration[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 120px;\n  color: rgba(255, 255, 255, 0.1);\n}\n.welcome-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 40px 48px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #f5f5f5;\n}\n.modules-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #212529;\n  margin-bottom: 8px;\n  letter-spacing: -0.5px;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n}\n.modules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 24px;\n  width: 100%;\n}\n.module-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 32px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border: 2px solid #e9ecef;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 260px;\n  justify-content: space-around;\n  cursor: pointer;\n}\n.module-card.available[_ngcontent-%COMP%]:hover {\n  border-color: var(--module-color, #714B67);\n  transform: translateY(-8px);\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);\n}\n.module-card.available[_ngcontent-%COMP%]:hover   .module-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.module-card.available[_ngcontent-%COMP%]:hover   .module-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.module-card.available[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.module-card.available[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--module-color, #714B67);\n  outline-offset: -2px;\n}\n.module-card.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n  background: #fafafa;\n}\n.module-card.disabled[_ngcontent-%COMP%]   .module-icon[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  filter: grayscale(100%);\n}\n.module-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--module-color, #714B67),\n      transparent);\n  transform: scaleX(0);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: left;\n  border-radius: 16px 16px 0 0;\n}\n.soon-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 4px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff8e1,\n      #fff3cd);\n  color: #856404;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  box-shadow: 0 2px 8px rgba(133, 100, 4, 0.1);\n  border: 1px solid #ffeaa7;\n}\n.module-icon-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.16);\n  flex-shrink: 0;\n}\n.module-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: white;\n  font-weight: 300;\n}\n.module-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.module-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin-bottom: 8px;\n  letter-spacing: -0.3px;\n}\n.module-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  line-height: 1.6;\n  margin: 0;\n}\n.module-arrow[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  opacity: 0;\n  transform: translateX(-10px);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  flex-shrink: 0;\n}\n.module-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--module-color, #714B67);\n  font-size: 24px;\n}\n.welcome-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  border-top: 1px solid #e9ecef;\n  background: white;\n}\n.welcome-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #adb5bd;\n}\n@media (max-width: 768px) {\n  .welcome-header[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .welcome-hero[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    flex-direction: column;\n  }\n  .hero-illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .welcome-main[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .modules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=welcome.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeComponent, [{
    type: Component,
    args: [{ selector: "app-welcome", standalone: true, imports: [CommonModule], template: `<div class="welcome-page">
  <!-- HEADER -->
  <header class="welcome-header">
    <div class="header-brand">
      <div class="brand-icon">
        <span class="material-icons">business</span>
      </div>
      <span class="brand-text">K.I.T</span>
      <p>Saisir le moment, cr\xE9er l'avenir !</p>
    </div>

    <div class="header-right">
      <div class="user-info">
        <div class="user-avatar">{{ userInitials }}</div>
        <div class="user-details">
          <span class="user-name">{{ userName }}</span>
          <span class="user-role">Administrateur</span>
        </div>
      </div>
      <button class="btn-logout" (click)="logout()" title="Se d\xE9connecter">
        <span class="material-icons">logout</span>
        D\xE9connexion
      </button>
    </div>
  </header>

  <!-- HERO -->
  <div class="welcome-hero">
    <div class="hero-content">
      <h1>{{ getGreeting() }}, <strong>{{ userName }}</strong>&nbsp;!</h1>
      <p>Que souhaitez-vous faire aujourd'hui ?</p>
      <div class="hero-date">
        <span class="material-icons">calendar_today</span>
        {{ currentDate | date:'EEEE d MMMM yyyy' }}
      </div>
    </div>
    <div class="hero-illustration">
      <span class="material-icons">dashboard</span>
    </div>
  </div>

  <!-- MODULES GRID -->
  <main class="welcome-main">
    <section class="modules-section">
      <div class="section-title">
        <h2>\u{1F4F1} Applications disponibles</h2>
        <p>S\xE9lectionnez un module pour commencer</p>
      </div>

      <div class="modules-grid">
        <div *ngFor="let module of modules" 
             class="module-card"
             [class.available]="module.available"
             [class.disabled]="!module.available"
             (click)="navigateTo(module)"
             [style.--module-color]="module.color"
             role="button"
             [tabindex]="module.available ? 0 : -1">
          
          <div *ngIf="!module.available" class="soon-badge">Bient\xF4t disponible</div>

          <div class="module-icon-wrapper">
            <div class="module-icon" [style.background-color]="module.color">
              <span class="material-icons">{{ module.icon }}</span>
            </div>
          </div>

          <div class="module-info">
            <h3>{{ module.name }}</h3>
            <p>{{ module.description }}</p>
          </div>

          <div *ngIf="module.available" class="module-arrow">
            <span class="material-icons">arrow_forward</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="welcome-footer">
    <h1>Kairos Innovation Technologies</h1>
    <span>Saisir le Moment, Cr\xE9er l'avenir !</span>
    <p>ERP v1.0 &mdash; &copy; K.I.T &mdash; Tous droits r\xE9serv\xE9s</p>
  </footer>
</div>
`, styles: ['/* src/app/pages/welcome/welcome.component.scss */\n.welcome-page {\n  min-height: 100vh;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n}\n.welcome-header {\n  background: white;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0 32px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.header-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-brand .brand-icon {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #714B67,\n      #8e6285);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-brand .brand-icon .material-icons {\n  font-size: 22px;\n  color: white;\n}\n.header-brand .brand-text {\n  font-size: 18px;\n  font-weight: 700;\n  color: #212529;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-info .user-avatar {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #714B67,\n      #8e6285);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n}\n.user-info .user-details {\n  display: flex;\n  flex-direction: column;\n}\n.user-info .user-details .user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  line-height: 1.2;\n}\n.user-info .user-details .user-role {\n  font-size: 11px;\n  color: #6c757d;\n}\n.btn-logout {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #6c757d;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Roboto", sans-serif;\n}\n.btn-logout .material-icons {\n  font-size: 18px;\n}\n.btn-logout:hover {\n  background: #dc3545;\n  color: white;\n  border-color: #dc3545;\n}\n.welcome-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #714B67 0%,\n      #4a3147 60%,\n      #2d1e2e 100%);\n  color: white;\n  padding: 48px 48px 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-hero::before {\n  content: "";\n  position: absolute;\n  top: -30%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n}\n.hero-content h1 {\n  font-size: 32px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 8px;\n}\n.hero-content h1 strong {\n  font-weight: 700;\n  color: white;\n}\n.hero-content p {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 16px;\n}\n.hero-content .hero-date {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: capitalize;\n}\n.hero-content .hero-date .material-icons {\n  font-size: 16px;\n}\n.hero-illustration {\n  position: relative;\n  z-index: 1;\n}\n.hero-illustration .material-icons {\n  font-size: 120px;\n  color: rgba(255, 255, 255, 0.1);\n}\n.welcome-main {\n  flex: 1;\n  padding: 40px 48px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #f5f5f5;\n}\n.modules-section {\n  width: 100%;\n  max-width: 1400px;\n}\n.section-title {\n  margin-bottom: 28px;\n}\n.section-title h2 {\n  font-size: 22px;\n  font-weight: 600;\n  color: #212529;\n  margin-bottom: 8px;\n  letter-spacing: -0.5px;\n}\n.section-title p {\n  font-size: 13px;\n  color: #6c757d;\n}\n.modules-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 24px;\n  width: 100%;\n}\n.module-card {\n  background: white;\n  border-radius: 16px;\n  padding: 32px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border: 2px solid #e9ecef;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 260px;\n  justify-content: space-around;\n  cursor: pointer;\n}\n.module-card.available:hover {\n  border-color: var(--module-color, #714B67);\n  transform: translateY(-8px);\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);\n}\n.module-card.available:hover .module-icon {\n  transform: scale(1.1);\n}\n.module-card.available:hover .module-arrow {\n  opacity: 1;\n  transform: translateX(0);\n}\n.module-card.available:hover::before {\n  transform: scaleX(1);\n}\n.module-card.available:focus-visible {\n  outline: 2px solid var(--module-color, #714B67);\n  outline-offset: -2px;\n}\n.module-card.disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  background: #fafafa;\n}\n.module-card.disabled .module-icon {\n  opacity: 0.7;\n  filter: grayscale(100%);\n}\n.module-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--module-color, #714B67),\n      transparent);\n  transform: scaleX(0);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: left;\n  border-radius: 16px 16px 0 0;\n}\n.soon-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 4px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff8e1,\n      #fff3cd);\n  color: #856404;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  box-shadow: 0 2px 8px rgba(133, 100, 4, 0.1);\n  border: 1px solid #ffeaa7;\n}\n.module-icon-wrapper {\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.module-icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.16);\n  flex-shrink: 0;\n}\n.module-icon .material-icons {\n  font-size: 44px;\n  color: white;\n  font-weight: 300;\n}\n.module-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.module-info h3 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin-bottom: 8px;\n  letter-spacing: -0.3px;\n}\n.module-info p {\n  font-size: 13px;\n  color: #6c757d;\n  line-height: 1.6;\n  margin: 0;\n}\n.module-arrow {\n  margin-top: 12px;\n  opacity: 0;\n  transform: translateX(-10px);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  flex-shrink: 0;\n}\n.module-arrow .material-icons {\n  color: var(--module-color, #714B67);\n  font-size: 24px;\n}\n.welcome-footer {\n  text-align: center;\n  padding: 20px;\n  border-top: 1px solid #e9ecef;\n  background: white;\n}\n.welcome-footer p {\n  font-size: 12px;\n  color: #adb5bd;\n}\n@media (max-width: 768px) {\n  .welcome-header {\n    padding: 0 16px;\n  }\n  .welcome-hero {\n    padding: 32px 24px;\n    flex-direction: column;\n  }\n  .hero-illustration {\n    display: none;\n  }\n  .welcome-main {\n    padding: 24px 16px;\n  }\n  .modules-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=welcome.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeComponent, { className: "WelcomeComponent", filePath: "src/app/pages/welcome/welcome.component.ts", lineNumber: 23 });
})();
export {
  WelcomeComponent
};
//# sourceMappingURL=chunk-FDNNEOHZ.js.map
