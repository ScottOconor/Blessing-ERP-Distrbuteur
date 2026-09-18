import {
  ThemeService
} from "./chunk-FQUFPJIF.js";
import {
  AppBrandingService
} from "./chunk-TJ6Z44ZG.js";
import "./chunk-K42XCUBR.js";
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

// src/app/modules/hr/layout/hr-layout.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function HrLayoutComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275listener("click", function HrLayoutComponent_For_17_Template_a_click_0_listener() {
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
function HrLayoutComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function HrLayoutComponent_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileMenuOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var HrLayoutComponent = class _HrLayoutComponent {
  constructor(authService, router, themeService, branding) {
    this.authService = authService;
    this.router = router;
    this.themeService = themeService;
    this.branding = branding;
    this.navItems = [];
    this.mobileMenuOpen = false;
  }
  ngOnInit() {
    this.navItems = this.buildNav();
  }
  buildNav() {
    const has = (r, a) => this.authService.hasPermission("RH", r, a) || this.authService.isPrivileged();
    const items = [];
    if (has("EMPLOYES", "VIEW"))
      items.push({ label: "Employ\xE9s", icon: "groups", route: "/hr/employees" });
    if (has("EMPLOYES", "VIEW"))
      items.push({ label: "Organisation", icon: "account_tree", route: "/hr/organisation" });
    if (has("CONTRATS", "VIEW"))
      items.push({ label: "Contrats", icon: "description", route: "/hr/contracts" });
    if (has("BULLETINS", "VIEW"))
      items.push({ label: "Bulletins", icon: "receipt_long", route: "/hr/payslips" });
    if (has("BULLETINS", "VIEW"))
      items.push({ label: "Lots de paie", icon: "event_repeat", route: "/hr/runs" });
    if (has("CONGES", "VIEW"))
      items.push({ label: "Cong\xE9s", icon: "beach_access", route: "/hr/leaves" });
    if (has("CONFIG_PAIE", "VIEW"))
      items.push({ label: "Config. paie", icon: "tune", route: "/hr/config" });
    return items;
  }
  isActive(route) {
    return this.router.url.startsWith(route.split("?")[0]);
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
    this.\u0275fac = function HrLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AppBrandingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrLayoutComponent, selectors: [["app-hr-layout"]], decls: 33, vars: 10, consts: [[1, "hr-layout"], [1, "hr-navbar"], [1, "hr-brand", 3, "click"], [1, "material-icons"], [1, "brand-icon"], [1, "brand-label"], [1, "nav-divider"], ["type", "button", "aria-label", "Ouvrir le menu", 1, "nav-hamburger", 3, "click"], [1, "nav-mobile-panel"], [1, "hr-nav", "nav-links"], [1, "nav-link", 3, "active"], [1, "hr-user", "nav-right"], [1, "user-badge"], [1, "user-initials"], [1, "user-name"], [1, "btn-icon-nav", 3, "click", "title"], ["title", "D\xE9connexion", 1, "btn-icon-nav", 3, "click"], [1, "nav-backdrop"], [1, "hr-content"], [1, "nav-link", 3, "click"], [1, "nav-backdrop", 3, "click"]], template: function HrLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
        \u0275\u0275listener("click", function HrLayoutComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 3);
        \u0275\u0275text(7, "badge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "Ressources Humaines");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function HrLayoutComponent_Template_button_click_11_listener() {
          return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
        });
        \u0275\u0275elementStart(12, "span", 3);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275repeaterCreate(16, HrLayoutComponent_For_17_Template, 4, 4, "a", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "span", 13);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "span", 14);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275listener("click", function HrLayoutComponent_Template_button_click_24_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275elementStart(25, "span", 3);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 16);
        \u0275\u0275listener("click", function HrLayoutComponent_Template_button_click_27_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(28, "span", 3);
        \u0275\u0275text(29, "logout");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(30, HrLayoutComponent_Conditional_30_Template, 1, 0, "div", 17);
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
    }, dependencies: [CommonModule, RouterOutlet], styles: ['\n@keyframes _ngcontent-%COMP%_navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hr-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-page);\n}\n.hr-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  height: 50px;\n  background: var(--navbar-bg);\n  color: white;\n  padding: 0 14px;\n  flex-shrink: 0;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n  position: sticky;\n  top: var(--license-banner-offset, 0px);\n  z-index: 50;\n}\n.hr-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: var(--radius-sm);\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.hr-brand[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.hr-brand[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  opacity: 0.55;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: #7C3AED;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.brand-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: white;\n}\n.brand-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 26px;\n  background: var(--navbar-border);\n  margin: 0 10px;\n}\n.hr-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.hr-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: var(--navbar-text);\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--ease);\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.2);\n  color: white;\n  font-weight: 500;\n  border-bottom: 2px solid #7C3AED;\n}\n.hr-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.user-badge[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #7C3AED;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--navbar-text);\n}\n.btn-icon-nav[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--navbar-border);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  padding: 5px 8px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.btn-icon-nav[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-icon-nav[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.hr-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 22px;\n  background: var(--bg-page);\n}\n.nav-mobile-panel[_ngcontent-%COMP%] {\n  display: contents;\n}\n.nav-hamburger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active[_ngcontent-%COMP%] {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.nav-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links[_ngcontent-%COMP%], \n   .nav-right[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right[_ngcontent-%COMP%] {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active[_ngcontent-%COMP%] {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(1), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(2), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(3), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(4), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(5), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(6), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(7), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(8), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(9), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(10), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(11), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(12), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(13), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(14), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(15), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(16), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(17), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(18), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    animation: _ngcontent-%COMP%_navAccordionIn 0.22s ease;\n  }\n  .company-selector[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-dropdown[_ngcontent-%COMP%] {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill[_ngcontent-%COMP%] {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    color: var(--text-muted) !important;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%], \n   .btn-logout[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%]:hover, \n   .btn-logout[_ngcontent-%COMP%]:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .hr-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=hr-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-hr-layout", standalone: true, imports: [CommonModule, RouterOutlet], template: `
    <div class="hr-layout">
      <nav class="hr-navbar">
        <div class="hr-brand" (click)="goHome()">
          <span class="material-icons">chevron_left</span>
          <div class="brand-icon"><span class="material-icons">badge</span></div>
          <span class="brand-label">Ressources Humaines</span>
        </div>
        <div class="nav-divider"></div>

        <button type="button" class="nav-hamburger" [class.active]="mobileMenuOpen" (click)="mobileMenuOpen = !mobileMenuOpen" aria-label="Ouvrir le menu">
          <span class="material-icons">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
        </button>

        <div class="nav-mobile-panel" [class.open]="mobileMenuOpen">
          <div class="hr-nav nav-links">
            @for (item of navItems; track item.route) {
              <a class="nav-link" [class.active]="isActive(item.route)" (click)="navigateTo(item.route)">
                <span class="material-icons">{{ item.icon }}</span>
                {{ item.label }}
              </a>
            }
          </div>
          <div class="hr-user nav-right">
            <div class="user-badge"><span class="user-initials">{{ authService.getUserInitials() }}</span></div>
            <span class="user-name">{{ authService.getUserDisplayName() }}</span>
            <button class="btn-icon-nav" (click)="themeService.toggle()" [title]="themeService.isDark() ? 'Mode jour' : 'Mode nuit'">
              <span class="material-icons">{{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}</span>
            </button>
            <button class="btn-icon-nav" (click)="logout()" title="D\xE9connexion"><span class="material-icons">logout</span></button>
          </div>
        </div>
      </nav>
      @if (mobileMenuOpen) {
        <div class="nav-backdrop" (click)="mobileMenuOpen = false"></div>
      }
      <main class="hr-content"><router-outlet /></main>
    </div>
  `, styles: ['/* angular:styles/component:scss;fabc2cb2afe52636fb044447826715978877ce0e0545c4ad8bbe4b06f1dd0923;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/layout/hr-layout.component.ts */\n@keyframes navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hr-layout {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-page);\n}\n.hr-navbar {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  height: 50px;\n  background: var(--navbar-bg);\n  color: white;\n  padding: 0 14px;\n  flex-shrink: 0;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n  position: sticky;\n  top: var(--license-banner-offset, 0px);\n  z-index: 50;\n}\n.hr-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: var(--radius-sm);\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.hr-brand:hover {\n  background: var(--navbar-hover);\n}\n.hr-brand > .material-icons {\n  font-size: 17px;\n  opacity: 0.55;\n}\n.brand-icon {\n  width: 26px;\n  height: 26px;\n  background: #7C3AED;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.brand-icon .material-icons {\n  font-size: 15px;\n  color: white;\n}\n.brand-label {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider {\n  width: 1px;\n  height: 26px;\n  background: var(--navbar-border);\n  margin: 0 10px;\n}\n.hr-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.hr-nav::-webkit-scrollbar {\n  display: none;\n}\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: var(--navbar-text);\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--ease);\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-link .material-icons {\n  font-size: 15px;\n}\n.nav-link:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.nav-link.active {\n  background: rgba(124, 58, 237, 0.2);\n  color: white;\n  font-weight: 500;\n  border-bottom: 2px solid #7C3AED;\n}\n.hr-user {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.user-badge {\n  width: 28px;\n  height: 28px;\n  background: #7C3AED;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 12.5px;\n  color: var(--navbar-text);\n}\n.btn-icon-nav {\n  background: none;\n  border: 1px solid var(--navbar-border);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  padding: 5px 8px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.btn-icon-nav .material-icons {\n  font-size: 17px;\n}\n.btn-icon-nav:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.hr-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 22px;\n  background: var(--bg-page);\n}\n.nav-mobile-panel {\n  display: contents;\n}\n.nav-hamburger {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger .material-icons {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active .material-icons {\n  transform: rotate(90deg);\n}\n.nav-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links,\n  .nav-right {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links > .nav-link {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link,\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown {\n    animation: navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(1),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(2),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(3),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(4),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(5),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(6),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(7),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(8),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(9),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(10),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(11),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(12),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(13),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(14),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(15),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(16),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(17),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(18),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown .dropdown-panel {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown .dropdown-panel .dropdown-item {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open .dropdown-panel {\n    display: flex !important;\n    animation: navAccordionIn 0.22s ease;\n  }\n  .company-selector {\n    width: 100%;\n  }\n  .company-selector .company-btn {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector .company-dropdown {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill .company-name {\n    color: var(--text-muted) !important;\n  }\n  .user-name {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout,\n  .btn-logout {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout:hover,\n  .btn-logout:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .hr-content {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=hr-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ThemeService }, { type: AppBrandingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrLayoutComponent, { className: "HrLayoutComponent", filePath: "app/modules/hr/layout/hr-layout.component.ts", lineNumber: 128 });
})();

// src/app/modules/hr/hr.routes.ts
var hrRoutes = [
  {
    path: "",
    component: HrLayoutComponent,
    children: [
      { path: "", redirectTo: "employees", pathMatch: "full" },
      { path: "employees", loadComponent: () => import("./chunk-Y3YORC5A.js").then((m) => m.EmployeesComponent) },
      { path: "organisation", loadComponent: () => import("./chunk-4VEWHNKC.js").then((m) => m.OrganisationComponent) },
      { path: "contracts", loadComponent: () => import("./chunk-TDFQITG4.js").then((m) => m.ContractsComponent) },
      { path: "contracts/:id", loadComponent: () => import("./chunk-VUSUOMNZ.js").then((m) => m.ContractDetailComponent) },
      { path: "payslips", loadComponent: () => import("./chunk-M52OF3O3.js").then((m) => m.PayslipsComponent) },
      { path: "payslips/:id", loadComponent: () => import("./chunk-47RU73VA.js").then((m) => m.PayslipDetailComponent) },
      { path: "runs", loadComponent: () => import("./chunk-JY3URAFE.js").then((m) => m.RunsComponent) },
      { path: "runs/:id/register", loadComponent: () => import("./chunk-POJ3BCLP.js").then((m) => m.PayrollRegisterComponent) },
      { path: "leaves", loadComponent: () => import("./chunk-VXWLCEFY.js").then((m) => m.LeavesComponent) },
      { path: "config", loadComponent: () => import("./chunk-534NMBTN.js").then((m) => m.PayrollConfigComponent) }
    ]
  }
];
export {
  hrRoutes
};
//# sourceMappingURL=chunk-R7MIAFGO.js.map
