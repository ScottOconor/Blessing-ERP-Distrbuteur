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
  HostListener,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sync/layout/sync-layout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SyncLayoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.branding.appLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function SyncLayoutComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275listener("click", function SyncLayoutComponent_For_18_Template_a_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.go(item_r3.route));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.isRouteActive(item_r3.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
  }
}
function SyncLayoutComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function SyncLayoutComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mobileMenuOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var SyncLayoutComponent = class _SyncLayoutComponent {
  constructor(authService, router, themeService, branding) {
    this.authService = authService;
    this.router = router;
    this.themeService = themeService;
    this.branding = branding;
    this.userName = "";
    this.userInitials = "";
    this.activeDropdown = null;
    this.mobileMenuOpen = false;
    this.navItems = [
      { id: "hub", label: "Synchronisation Hub", icon: "sync", route: "/sync/hub" }
    ];
  }
  ngOnInit() {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
  }
  onDocumentClick(e) {
    if (!e.target.closest(".nav-item-dropdown"))
      this.activeDropdown = null;
  }
  isRouteActive(route) {
    return this.router.url === route || this.router.url.startsWith(route + "/");
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
  go(r) {
    this.mobileMenuOpen = false;
    this.router.navigateByUrl(r);
  }
  static {
    this.\u0275fac = function SyncLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SyncLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AppBrandingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SyncLayoutComponent, selectors: [["app-sync-layout"]], hostBindings: function SyncLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SyncLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument);
      }
    }, decls: 34, vars: 11, consts: [[1, "sync-layout"], [1, "sync-navbar"], [1, "sync-brand", 3, "click"], ["alt", "", 1, "nav-app-logo", 3, "src"], [1, "material-icons"], [1, "brand-icon"], [1, "brand-label"], [1, "nav-divider"], ["type", "button", "aria-label", "Ouvrir le menu", 1, "nav-hamburger", 3, "click"], [1, "nav-mobile-panel"], [1, "sync-nav", "nav-links"], [1, "nav-link", 3, "active"], [1, "nav-right"], [1, "user-pill"], [1, "user-avatar-sm"], [1, "user-name-sm"], [1, "btn-theme-toggle", 3, "click", "title"], ["title", "Se d\xE9connecter", 1, "btn-nav-logout", 3, "click"], [1, "nav-backdrop"], [1, "sync-content"], [1, "nav-link", 3, "click"], [1, "nav-backdrop", 3, "click"]], template: function SyncLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
        \u0275\u0275listener("click", function SyncLayoutComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275conditionalCreate(3, SyncLayoutComponent_Conditional_3_Template, 1, 1, "img", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "span", 4);
        \u0275\u0275text(8, "hub");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "Hub & Spoke");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "div", 7);
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function SyncLayoutComponent_Template_button_click_12_listener() {
          return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
        });
        \u0275\u0275elementStart(13, "span", 4);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "nav", 10);
        \u0275\u0275repeaterCreate(17, SyncLayoutComponent_For_18_Template, 4, 4, "a", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 15);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 16);
        \u0275\u0275listener("click", function SyncLayoutComponent_Template_button_click_25_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275elementStart(26, "span", 4);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function SyncLayoutComponent_Template_button_click_28_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(29, "span", 4);
        \u0275\u0275text(30, "logout");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(31, SyncLayoutComponent_Conditional_31_Template, 1, 0, "div", 18);
        \u0275\u0275elementStart(32, "main", 19);
        \u0275\u0275element(33, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.branding.hasAppLogo ? 3 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.mobileMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.mobileMenuOpen ? "close" : "menu");
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.mobileMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.themeService.isDark() ? "Mode jour" : "Mode nuit");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "light_mode" : "dark_mode");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.mobileMenuOpen ? 31 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet], styles: ['\n@keyframes _ngcontent-%COMP%_navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.sync-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.sync-navbar[_ngcontent-%COMP%] {\n  background-color: var(--navbar-bg);\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: var(--license-banner-offset, 0px);\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n}\n.sync-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 14px;\n  cursor: pointer;\n  transition: var(--ease);\n  border-right: 1px solid var(--navbar-border);\n  min-width: 170px;\n  color: white;\n}\n.sync-brand[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.sync-brand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  font-size: 19px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.sync-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: #7C3AED;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sync-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: white;\n}\n.sync-brand[_ngcontent-%COMP%]   .brand-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: var(--navbar-border);\n  margin: 9px 3px;\n}\n.sync-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 14px;\n  color: var(--navbar-text);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: var(--ease);\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n  font-weight: 600;\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 12px;\n  margin-left: auto;\n}\n.user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #7C3AED;\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-name-sm[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12.5px;\n  font-weight: 500;\n}\n.btn-theme-toggle[_ngcontent-%COMP%], \n.btn-nav-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--navbar-text);\n  border-radius: 6px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.btn-theme-toggle[_ngcontent-%COMP%]:hover, \n.btn-nav-logout[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.btn-theme-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-nav-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sync-content[_ngcontent-%COMP%] {\n  margin-top: calc(50px + var(--license-banner-offset, 0px));\n  flex: 1;\n  background: var(--bg-page);\n  min-height: calc(100vh - 50px);\n}\n.nav-mobile-panel[_ngcontent-%COMP%] {\n  display: contents;\n}\n.nav-hamburger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active[_ngcontent-%COMP%] {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.nav-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links[_ngcontent-%COMP%], \n   .nav-right[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right[_ngcontent-%COMP%] {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active[_ngcontent-%COMP%] {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(1), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(2), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(3), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(4), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(5), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(6), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(7), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(8), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(9), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(10), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(11), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(12), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(13), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(14), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(15), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(16), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(17), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(18), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    animation: _ngcontent-%COMP%_navAccordionIn 0.22s ease;\n  }\n  .company-selector[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-dropdown[_ngcontent-%COMP%] {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill[_ngcontent-%COMP%] {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    color: var(--text-muted) !important;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%], \n   .btn-logout[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%]:hover, \n   .btn-logout[_ngcontent-%COMP%]:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sync-brand[_ngcontent-%COMP%] {\n    min-width: auto;\n    padding: 0 10px;\n  }\n}\n/*# sourceMappingURL=sync-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SyncLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-sync-layout", standalone: true, imports: [CommonModule, RouterOutlet], template: `<div class="sync-layout">
  <nav class="sync-navbar">
    <div class="sync-brand" (click)="goHome()">
              @if (branding.hasAppLogo) {
          <img [src]="branding.appLogoUrl" class="nav-app-logo" alt="">
        }
      <span class="material-icons">chevron_left</span>
      <div class="brand-icon">
        <span class="material-icons">hub</span>
      </div>
      <span class="brand-label">Hub & Spoke</span>
    </div>

    <div class="nav-divider"></div>

    <button type="button" class="nav-hamburger" [class.active]="mobileMenuOpen" (click)="mobileMenuOpen = !mobileMenuOpen" aria-label="Ouvrir le menu">
      <span class="material-icons">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
    </button>

    <div class="nav-mobile-panel" [class.open]="mobileMenuOpen">
      <nav class="sync-nav nav-links">
        @for (item of navItems; track item.id) {
          <a class="nav-link" [class.active]="isRouteActive(item.route)" (click)="go(item.route)">
            <span class="material-icons">{{ item.icon }}</span>
            {{ item.label }}
          </a>
        }
      </nav>

      <div class="nav-right">
        <div class="user-pill">
          <div class="user-avatar-sm">{{ userInitials }}</div>
          <span class="user-name-sm">{{ userName }}</span>
        </div>
        <button class="btn-theme-toggle" (click)="themeService.toggle()"
                [title]="themeService.isDark() ? 'Mode jour' : 'Mode nuit'">
          <span class="material-icons">{{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <button class="btn-nav-logout" (click)="logout()" title="Se d\xE9connecter">
          <span class="material-icons">logout</span>
        </button>
      </div>
    </div>
  </nav>
  @if (mobileMenuOpen) {
    <div class="nav-backdrop" (click)="mobileMenuOpen = false"></div>
  }

  <main class="sync-content">
    <router-outlet></router-outlet>
  </main>
</div>
`, styles: ['/* src/app/modules/sync/layout/sync-layout.component.scss */\n@keyframes navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.sync-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.sync-navbar {\n  background-color: var(--navbar-bg);\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: var(--license-banner-offset, 0px);\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n}\n.sync-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 14px;\n  cursor: pointer;\n  transition: var(--ease);\n  border-right: 1px solid var(--navbar-border);\n  min-width: 170px;\n  color: white;\n}\n.sync-brand:hover {\n  background: var(--navbar-hover);\n}\n.sync-brand .material-icons:first-child {\n  font-size: 19px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.sync-brand .brand-icon {\n  width: 26px;\n  height: 26px;\n  background: #7C3AED;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sync-brand .brand-icon .material-icons {\n  font-size: 15px;\n  color: white;\n}\n.sync-brand .brand-label {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider {\n  width: 1px;\n  background: var(--navbar-border);\n  margin: 9px 3px;\n}\n.sync-nav {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n}\n.nav-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 14px;\n  color: var(--navbar-text);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: var(--ease);\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.nav-link .material-icons {\n  font-size: 18px;\n}\n.nav-link:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.nav-link.active {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n  font-weight: 600;\n}\n.nav-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 12px;\n  margin-left: auto;\n}\n.user-pill {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.user-avatar-sm {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #7C3AED;\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-name-sm {\n  color: white;\n  font-size: 12.5px;\n  font-weight: 500;\n}\n.btn-theme-toggle,\n.btn-nav-logout {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--navbar-text);\n  border-radius: 6px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.btn-theme-toggle:hover,\n.btn-nav-logout:hover {\n  background: var(--navbar-hover);\n  color: white;\n}\n.btn-theme-toggle .material-icons,\n.btn-nav-logout .material-icons {\n  font-size: 18px;\n}\n.sync-content {\n  margin-top: calc(50px + var(--license-banner-offset, 0px));\n  flex: 1;\n  background: var(--bg-page);\n  min-height: calc(100vh - 50px);\n}\n.nav-mobile-panel {\n  display: contents;\n}\n.nav-hamburger {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger .material-icons {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active .material-icons {\n  transform: rotate(90deg);\n}\n.nav-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links,\n  .nav-right {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links > .nav-link {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link,\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown {\n    animation: navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(1),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(2),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(3),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(4),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(5),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(6),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(7),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(8),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(9),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(10),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(11),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(12),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(13),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(14),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(15),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(16),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(17),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(18),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown .dropdown-panel {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown .dropdown-panel .dropdown-item {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open .dropdown-panel {\n    display: flex !important;\n    animation: navAccordionIn 0.22s ease;\n  }\n  .company-selector {\n    width: 100%;\n  }\n  .company-selector .company-btn {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector .company-dropdown {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill .company-name {\n    color: var(--text-muted) !important;\n  }\n  .user-name {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout,\n  .btn-logout {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout:hover,\n  .btn-logout:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label {\n    display: none;\n  }\n  .sync-brand {\n    min-width: auto;\n    padding: 0 10px;\n  }\n}\n/*# sourceMappingURL=sync-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ThemeService }, { type: AppBrandingService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SyncLayoutComponent, { className: "SyncLayoutComponent", filePath: "app/modules/sync/layout/sync-layout.component.ts", lineNumber: 15 });
})();

// src/app/modules/sync/sync.routes.ts
var syncRoutes = [
  {
    path: "",
    component: SyncLayoutComponent,
    children: [
      { path: "", redirectTo: "hub", pathMatch: "full" },
      {
        path: "hub",
        loadComponent: () => import("./chunk-OEKPIQKF.js").then((m) => m.SyncDashboardComponent)
      }
    ]
  }
];
export {
  syncRoutes
};
//# sourceMappingURL=chunk-2RS3NXF2.js.map
