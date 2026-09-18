import {
  ThemeService
} from "./chunk-FQUFPJIF.js";
import {
  Router,
  RouterOutlet
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
  ɵɵtextInterpolate1
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/config/layout/config-layout.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function ConfigLayoutComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275listener("click", function ConfigLayoutComponent_For_17_Template_a_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateTo(item_r2.route));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.isActive(item_r2.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
function ConfigLayoutComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function ConfigLayoutComponent_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileMenuOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var ConfigLayoutComponent = class _ConfigLayoutComponent {
  constructor(authService, router, themeService) {
    this.authService = authService;
    this.router = router;
    this.themeService = themeService;
    this.mobileMenuOpen = false;
  }
  get navItems() {
    const items = [
      { label: "Mon entreprise", icon: "business", route: "/config/company", adminOnly: true },
      { label: "Agences distantes", icon: "share", route: "/config/remote-agencies", adminOnly: true },
      { label: "Utilisateurs", icon: "manage_accounts", route: "/config/users", adminOnly: true },
      { label: "R\xF4les", icon: "admin_panel_settings", route: "/config/roles", adminOnly: true },
      {
        label: "Cl\xF4ture d'exercice",
        icon: "lock_clock",
        route: "/config/fiscal-closure",
        visible: this.authService.hasPermission("COMPTABILITE", "ECRITURES", "VIEW")
      },
      { label: "Changer mot de passe", icon: "lock_reset", route: "/config/change-password" },
      { label: "Supervision", icon: "manage_search", route: "/config/supervision", adminOnly: true },
      { label: "Sauvegarde & Restore", icon: "backup", route: "/config/backup", adminOnly: true },
      { label: "Exportation", icon: "file_download", route: "/config/export", adminOnly: true }
    ];
    return items.filter((i) => (i.visible ?? true) && (!i.adminOnly || this.authService.canManageUsers()));
  }
  isActive(route) {
    return this.router.url.startsWith(route);
  }
  navigateTo(route) {
    this.mobileMenuOpen = false;
    this.router.navigate([route]);
  }
  goHome() {
    this.mobileMenuOpen = false;
    this.router.navigate(["/welcome"]);
  }
  logout() {
    this.mobileMenuOpen = false;
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function ConfigLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigLayoutComponent, selectors: [["app-config-layout"]], decls: 33, vars: 10, consts: [[1, "cfg-layout"], [1, "cfg-navbar"], [1, "cfg-brand", 3, "click"], [1, "material-icons"], [1, "brand-icon"], [1, "brand-label"], [1, "nav-divider"], ["type", "button", "aria-label", "Ouvrir le menu", 1, "nav-hamburger", 3, "click"], [1, "nav-mobile-panel"], [1, "cfg-nav", "nav-links"], [1, "nav-link", 3, "active"], [1, "cfg-user", "nav-right"], [1, "user-badge"], [1, "user-initials"], [1, "user-name"], [1, "btn-theme-toggle", 3, "click", "title"], ["title", "D\xE9connexion", 1, "btn-logout", 3, "click"], [1, "nav-backdrop"], [1, "cfg-content"], [1, "nav-link", 3, "click"], [1, "nav-backdrop", 3, "click"]], template: function ConfigLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
        \u0275\u0275listener("click", function ConfigLayoutComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 3);
        \u0275\u0275text(7, "settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "Configuration");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function ConfigLayoutComponent_Template_button_click_11_listener() {
          return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
        });
        \u0275\u0275elementStart(12, "span", 3);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275repeaterCreate(16, ConfigLayoutComponent_For_17_Template, 4, 4, "a", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "span", 13);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "span", 14);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275listener("click", function ConfigLayoutComponent_Template_button_click_24_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275elementStart(25, "span", 3);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 16);
        \u0275\u0275listener("click", function ConfigLayoutComponent_Template_button_click_27_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(28, "span", 3);
        \u0275\u0275text(29, "logout");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(30, ConfigLayoutComponent_Conditional_30_Template, 1, 0, "div", 17);
        \u0275\u0275elementStart(31, "main", 18);
        \u0275\u0275element(32, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("active", ctx.mobileMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.mobileMenuOpen ? "close" : "menu");
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.mobileMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.authService.getUserInitials());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.authService.getUserDisplayName());
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.themeService.isDark() ? "Mode jour" : "Mode nuit");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "light_mode" : "dark_mode");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.mobileMenuOpen ? 30 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet], styles: ['@charset "UTF-8";\n\n\n@keyframes _ngcontent-%COMP%_navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.cfg-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: var(--bg-page);\n}\n.cfg-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  height: 50px;\n  background: var(--navbar-bg);\n  color: white;\n  padding: 0 14px;\n  flex-shrink: 0;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n}\n.cfg-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: var(--radius-sm);\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.cfg-brand[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.cfg-brand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  opacity: 0.55;\n}\n.cfg-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: var(--module-config, #7C3AED);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cfg-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  opacity: 1;\n  color: white;\n}\n.cfg-brand[_ngcontent-%COMP%]   .brand-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 26px;\n  background: var(--navbar-border);\n  margin: 0 10px;\n}\n.cfg-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n}\n.cfg-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: var(--navbar-text);\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--ease);\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.cfg-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.cfg-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n  color: var(--navbar-active);\n}\n.cfg-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.2);\n  color: white;\n  font-weight: 500;\n  border-bottom: 2px solid var(--module-config, #7C3AED);\n}\n.cfg-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.cfg-user[_ngcontent-%COMP%]   .user-badge[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: var(--module-config, #7C3AED);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.cfg-user[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--navbar-text);\n}\n.company-selector[_ngcontent-%COMP%] {\n  position: relative;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  white-space: nowrap;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transition: transform 0.18s;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.13);\n}\n.company-selector.open[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.company-selector[_ngcontent-%COMP%]   .company-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 220px;\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--border);\n  z-index: 300;\n  padding: 5px 0;\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]   .company-opt-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]   .company-sigle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option.selected[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--module-config, #7C3AED);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option.selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--module-config, #7C3AED);\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--navbar-border);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  padding: 5px 8px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.btn-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.22);\n  border-color: rgba(220, 38, 38, 0.4);\n  color: #FCA5A5;\n}\n.cfg-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 22px;\n  background: var(--bg-page);\n}\n.nav-mobile-panel[_ngcontent-%COMP%] {\n  display: contents;\n}\n.nav-hamburger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active[_ngcontent-%COMP%] {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.nav-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links[_ngcontent-%COMP%], \n   .nav-right[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right[_ngcontent-%COMP%] {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active[_ngcontent-%COMP%] {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(1), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(2), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(3), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(4), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(5), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(6), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(7), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(8), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(9), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(10), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(11), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(12), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(13), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(14), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(15), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(16), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(17), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(18), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    animation: _ngcontent-%COMP%_navAccordionIn 0.22s ease;\n  }\n  .company-selector[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-dropdown[_ngcontent-%COMP%] {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill[_ngcontent-%COMP%] {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    color: var(--text-muted) !important;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%], \n   .btn-logout[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%]:hover, \n   .btn-logout[_ngcontent-%COMP%]:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .cfg-brand[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n  }\n}\n@media (max-width: 768px) {\n  .cfg-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=config-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-config-layout", standalone: true, imports: [CommonModule, RouterOutlet], template: `<div class="cfg-layout">
  <nav class="cfg-navbar">
    <div class="cfg-brand" (click)="goHome()">
      <span class="material-icons">chevron_left</span>
      <div class="brand-icon"><span class="material-icons">settings</span></div>
      <span class="brand-label">Configuration</span>
    </div>

    <div class="nav-divider"></div>

    <button type="button" class="nav-hamburger" [class.active]="mobileMenuOpen" (click)="mobileMenuOpen = !mobileMenuOpen" aria-label="Ouvrir le menu">
      <span class="material-icons">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
    </button>

    <div class="nav-mobile-panel" [class.open]="mobileMenuOpen">
      <div class="cfg-nav nav-links">
        @for (item of navItems; track item.route) {
          <a class="nav-link" [class.active]="isActive(item.route)" (click)="navigateTo(item.route)">
            <span class="material-icons">{{ item.icon }}</span>
            {{ item.label }}
          </a>
        }
      </div>

      <div class="cfg-user nav-right">
        <div class="user-badge">
          <span class="user-initials">{{ authService.getUserInitials() }}</span>
        </div>
        <span class="user-name">{{ authService.getUserDisplayName() }}</span>
        <button class="btn-theme-toggle" (click)="themeService.toggle()" [title]="themeService.isDark() ? 'Mode jour' : 'Mode nuit'">
          <span class="material-icons">{{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <button class="btn-logout" (click)="logout()" title="D\xE9connexion">
          <span class="material-icons">logout</span>
        </button>
      </div>
    </div>
  </nav>
  @if (mobileMenuOpen) {
    <div class="nav-backdrop" (click)="mobileMenuOpen = false"></div>
  }

  <main class="cfg-content">
    <router-outlet />
  </main>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/config/layout/config-layout.component.scss */\n@keyframes navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.cfg-layout {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: var(--bg-page);\n}\n.cfg-navbar {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  height: 50px;\n  background: var(--navbar-bg);\n  color: white;\n  padding: 0 14px;\n  flex-shrink: 0;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n}\n.cfg-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: var(--radius-sm);\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.cfg-brand:hover {\n  background: var(--navbar-hover);\n}\n.cfg-brand .material-icons {\n  font-size: 17px;\n  opacity: 0.55;\n}\n.cfg-brand .brand-icon {\n  width: 26px;\n  height: 26px;\n  background: var(--module-config, #7C3AED);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cfg-brand .brand-icon .material-icons {\n  font-size: 15px;\n  opacity: 1;\n  color: white;\n}\n.cfg-brand .brand-label {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider {\n  width: 1px;\n  height: 26px;\n  background: var(--navbar-border);\n  margin: 0 10px;\n}\n.cfg-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n}\n.cfg-nav .nav-link {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: var(--navbar-text);\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--ease);\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.cfg-nav .nav-link .material-icons {\n  font-size: 15px;\n}\n.cfg-nav .nav-link:hover {\n  background: var(--navbar-hover);\n  color: var(--navbar-active);\n}\n.cfg-nav .nav-link.active {\n  background: rgba(124, 58, 237, 0.2);\n  color: white;\n  font-weight: 500;\n  border-bottom: 2px solid var(--module-config, #7C3AED);\n}\n.cfg-user {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.cfg-user .user-badge {\n  width: 28px;\n  height: 28px;\n  background: var(--module-config, #7C3AED);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.cfg-user .user-name {\n  font-size: 12.5px;\n  color: var(--navbar-text);\n}\n.company-selector {\n  position: relative;\n}\n.company-selector .company-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  white-space: nowrap;\n}\n.company-selector .company-btn .material-icons {\n  font-size: 13px;\n}\n.company-selector .company-btn .arrow {\n  transition: transform 0.18s;\n}\n.company-selector .company-btn:hover {\n  background: rgba(255, 255, 255, 0.13);\n}\n.company-selector.open .company-btn .arrow {\n  transform: rotate(180deg);\n}\n.company-selector .company-dropdown {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 220px;\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--border);\n  z-index: 300;\n  padding: 5px 0;\n}\n.company-selector .company-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.company-selector .company-option .material-icons {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.company-selector .company-option .company-opt-name {\n  flex: 1;\n}\n.company-selector .company-option .company-sigle {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.company-selector .company-option:hover {\n  background: var(--bg-hover);\n}\n.company-selector .company-option.selected {\n  font-weight: 600;\n  color: var(--module-config, #7C3AED);\n}\n.company-selector .company-option.selected .material-icons {\n  color: var(--module-config, #7C3AED);\n}\n.btn-logout {\n  background: none;\n  border: 1px solid var(--navbar-border);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  padding: 5px 8px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.btn-logout .material-icons {\n  font-size: 17px;\n}\n.btn-logout:hover {\n  background: rgba(220, 38, 38, 0.22);\n  border-color: rgba(220, 38, 38, 0.4);\n  color: #FCA5A5;\n}\n.cfg-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 22px;\n  background: var(--bg-page);\n}\n.nav-mobile-panel {\n  display: contents;\n}\n.nav-hamburger {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger .material-icons {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active .material-icons {\n  transform: rotate(90deg);\n}\n.nav-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links,\n  .nav-right {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links > .nav-link {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link,\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown {\n    animation: navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(1),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(2),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(3),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(4),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(5),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(6),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(7),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(8),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(9),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(10),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(11),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(12),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(13),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(14),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(15),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(16),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(17),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(18),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown .dropdown-panel {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown .dropdown-panel .dropdown-item {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open .dropdown-panel {\n    display: flex !important;\n    animation: navAccordionIn 0.22s ease;\n  }\n  .company-selector {\n    width: 100%;\n  }\n  .company-selector .company-btn {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector .company-dropdown {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill .company-name {\n    color: var(--text-muted) !important;\n  }\n  .user-name {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout,\n  .btn-logout {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout:hover,\n  .btn-logout:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label {\n    display: none;\n  }\n  .cfg-brand {\n    padding: 6px 8px;\n  }\n}\n@media (max-width: 768px) {\n  .cfg-content {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=config-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigLayoutComponent, { className: "ConfigLayoutComponent", filePath: "app/modules/config/layout/config-layout.component.ts", lineNumber: 14 });
})();

// src/app/modules/config/config.routes.ts
var configRoutes = [
  {
    path: "",
    component: ConfigLayoutComponent,
    children: [
      { path: "", redirectTo: "remote-agencies", pathMatch: "full" },
      { path: "groups", redirectTo: "remote-agencies", pathMatch: "full" },
      {
        path: "remote-agencies",
        loadComponent: () => import("./chunk-HMPD5LYV.js").then((m) => m.GroupsComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-BL6P4PND.js").then((m) => m.UsersComponent)
      },
      {
        path: "roles",
        loadComponent: () => import("./chunk-KIEJK6AB.js").then((m) => m.RolesComponent)
      },
      {
        path: "company",
        loadComponent: () => import("./chunk-PTM5QJH4.js").then((m) => m.CompanyComponent)
      },
      {
        path: "change-password",
        loadComponent: () => import("./chunk-NST25XHK.js").then((m) => m.ChangePasswordComponent)
      },
      {
        path: "supervision",
        loadComponent: () => import("./chunk-LBVYGXUA.js").then((m) => m.SupervisionComponent)
      },
      {
        path: "backup",
        loadComponent: () => import("./chunk-GTLHND5Y.js").then((m) => m.BackupComponent)
      },
      {
        path: "fiscal-closure",
        loadComponent: () => import("./chunk-XE6DIRHE.js").then((m) => m.FiscalClosureComponent)
      },
      {
        path: "export",
        loadComponent: () => import("./chunk-TMSQZHW2.js").then((m) => m.ExportComponent)
      }
    ]
  }
];
export {
  configRoutes
};
//# sourceMappingURL=chunk-TBMBDUVV.js.map
