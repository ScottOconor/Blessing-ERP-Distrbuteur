import {
  ThemeService
} from "./chunk-FQUFPJIF.js";
import {
  AppBrandingService
} from "./chunk-TJ6Z44ZG.js";
import {
  CompanyService
} from "./chunk-K42XCUBR.js";
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

// src/app/modules/sales/layout/sales-layout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.route;
function SalesLayoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.branding.appLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function SalesLayoutComponent_For_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function SalesLayoutComponent_For_18_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navigateTo(item_r3.route));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.isRouteActive(item_r3.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
  }
}
function SalesLayoutComponent_For_18_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function SalesLayoutComponent_For_18_Conditional_1_For_9_Template_button_click_0_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.navigateTo(child_r6.route));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.isRouteActive(child_r6.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r6.label, " ");
  }
}
function SalesLayoutComponent_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25);
    \u0275\u0275listener("click", function SalesLayoutComponent_For_18_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleDropdown(item_r3.id));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275repeaterCreate(8, SalesLayoutComponent_For_18_Conditional_1_For_9_Template, 4, 4, "button", 28, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r0.activeDropdown === item_r3.id)("active", ctx_r0.hasActiveChild(item_r3.children));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r3.children);
  }
}
function SalesLayoutComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SalesLayoutComponent_For_18_Conditional_0_Template, 4, 4, "a", 21);
    \u0275\u0275conditionalCreate(1, SalesLayoutComponent_For_18_Conditional_1_Template, 10, 6, "div", 22);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275conditional(!item_r3.children ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.children ? 1 : -1);
  }
}
function SalesLayoutComponent_Conditional_20_Conditional_8_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9.sigle);
  }
}
function SalesLayoutComponent_Conditional_20_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function SalesLayoutComponent_Conditional_20_Conditional_8_For_2_Template_button_click_0_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.switchCompany(c_r9.id));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SalesLayoutComponent_Conditional_20_Conditional_8_For_2_Conditional_5_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", c_r9.id === (ctx_r0.activeCompany == null ? null : ctx_r0.activeCompany.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.id === (ctx_r0.activeCompany == null ? null : ctx_r0.activeCompany.id) ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r9.sigle ? 5 : -1);
  }
}
function SalesLayoutComponent_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, SalesLayoutComponent_Conditional_20_Conditional_8_For_2_Template, 6, 5, "button", 33, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.companies);
  }
}
function SalesLayoutComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function SalesLayoutComponent_Conditional_20_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.showCompanyPicker = !ctx_r0.showCompanyPicker;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, SalesLayoutComponent_Conditional_20_Conditional_8_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r0.showCompanyPicker);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.activeCompany == null ? null : ctx_r0.activeCompany.sigle) || (ctx_r0.activeCompany == null ? null : ctx_r0.activeCompany.name) || "Entreprise");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.showCompanyPicker ? 8 : -1);
  }
}
function SalesLayoutComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function SalesLayoutComponent_Conditional_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mobileMenuOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var SalesLayoutComponent = class _SalesLayoutComponent {
  get activeCompany() {
    return null;
  }
  get companyLogoUrl() {
    return this.companyService.getLogoUrl();
  }
  get companyDisplayName() {
    return this.companyService.getCached()?.name ?? this.companyName;
  }
  constructor(authService, companyService, branding, router, themeService) {
    this.authService = authService;
    this.companyService = companyService;
    this.branding = branding;
    this.router = router;
    this.themeService = themeService;
    this.userName = "";
    this.userInitials = "";
    this.companyName = "Mon Entreprise";
    this.activeDropdown = null;
    this.showCompanyPicker = false;
    this.mobileMenuOpen = false;
    this.navItems = [];
    this.companies = [];
  }
  ngOnInit() {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
    this.navItems = this.buildNavItems();
  }
  can(resource, action = "VIEW") {
    return this.authService.hasPermission("VENTES", resource, action);
  }
  buildNavItems() {
    const anyVentes = this.authService.hasAnyModulePermission("VENTES");
    const items = [];
    if (anyVentes) {
      items.push({ id: "dashboard", label: "Tableau de bord", icon: "dashboard", route: "/sales/dashboard" });
    }
    const orderChildren = [];
    if (this.can("COMMANDES", "VIEW"))
      orderChildren.push({ label: "Liste des bons", icon: "list", route: "/sales/orders" });
    if (this.can("COMMANDES", "CREATE"))
      orderChildren.push({ label: "Nouveau bon", icon: "add_circle", route: "/sales/orders/new" });
    if (orderChildren.length)
      items.push({ id: "orders", label: "Bons de commande", icon: "receipt", children: orderChildren });
    const invoiceChildren = [];
    if (this.can("FACTURES", "VIEW"))
      invoiceChildren.push({ label: "Factures", icon: "receipt_long", route: "/sales/invoices" });
    if (this.can("AVOIRS", "VIEW"))
      invoiceChildren.push({ label: "Avoirs", icon: "undo", route: "/sales/avoirs" });
    if (invoiceChildren.length)
      items.push({ id: "invoices", label: "Factures & Avoirs", icon: "description", children: invoiceChildren });
    if (this.can("CLIENTS", "VIEW") || this.can("VENDEURS", "VIEW")) {
      const clientChildren = [];
      if (this.can("CLIENTS", "VIEW")) {
        clientChildren.push({ label: "Fiche clients", icon: "people", route: "/sales/clients" });
        clientChildren.push({ label: "Tarifs par client", icon: "sell", route: "/sales/clients/prix" });
      }
      if (this.can("VENDEURS", "VIEW")) {
        clientChildren.push({ label: "Vendeurs", icon: "badge", route: "/sales/vendeurs" });
      }
      items.push({ id: "clients", label: "Clients", icon: "people", children: clientChildren });
    }
    if (this.can("PAIEMENTS", "VIEW"))
      items.push({ id: "payments", label: "Paiements", icon: "payments", route: "/sales/payments" });
    const commChildren = [];
    if (this.can("RISTOURNES", "VIEW"))
      commChildren.push({ label: "Ristournes", icon: "redeem", route: "/sales/ristournes" });
    if (this.can("PRECOMPTES", "VIEW"))
      commChildren.push({ label: "Pr\xE9comptes & Enl\xE8vements", icon: "percent", route: "/sales/precomptes" });
    if (commChildren.length)
      items.push({ id: "commercial", label: "Commercial", icon: "local_offer", children: commChildren });
    if (anyVentes) {
      items.push({
        id: "eleader",
        label: "eLeader",
        icon: "upload_file",
        children: [
          { label: "Import PDF", icon: "upload", route: "/sales/eleader/import" },
          { label: "Journaux", icon: "history", route: "/sales/eleader/journal" },
          { label: "Configuration", icon: "settings", route: "/sales/eleader/config" }
        ]
      });
    }
    const reportChildren = [];
    if (this.can("COMMANDES", "VIEW") || this.can("FACTURES", "VIEW"))
      reportChildren.push({ label: "Stats de ventes", icon: "trending_up", route: "/sales/reports/stats-ventes" });
    if (this.can("RISTOURNES", "VIEW"))
      reportChildren.push({ label: "\xC9tat des Ristournes", icon: "redeem", route: "/sales/reports/rapport-ristournes" });
    if (reportChildren.length)
      items.push({ id: "reports", label: "Rapports", icon: "assessment", children: reportChildren });
    return items;
  }
  toggleDropdown(id) {
    this.activeDropdown = this.activeDropdown === id ? null : id;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".nav-item-dropdown"))
      this.activeDropdown = null;
    if (!target.closest(".company-selector"))
      this.showCompanyPicker = false;
  }
  navigateTo(route) {
    this.activeDropdown = null;
    this.mobileMenuOpen = false;
    this.router.navigateByUrl(route);
  }
  switchCompany(id) {
    this.authService.setActiveCompanyId(id);
    this.showCompanyPicker = false;
    this.mobileMenuOpen = false;
    const url = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => this.router.navigateByUrl(url));
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
  isRouteActive(route) {
    return this.router.url === route || this.router.url.startsWith(route + "/");
  }
  hasActiveChild(children) {
    return children.some((c) => this.isRouteActive(c.route));
  }
  static {
    this.\u0275fac = function SalesLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalesLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(AppBrandingService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesLayoutComponent, selectors: [["app-sales-layout"]], hostBindings: function SalesLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SalesLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument);
      }
    }, decls: 37, vars: 13, consts: [[1, "sales-layout"], [1, "sls-navbar"], [1, "sls-brand", 3, "click"], ["alt", "", 1, "nav-app-logo", 3, "src"], [1, "material-icons"], [1, "brand-icon"], [1, "brand-label"], [1, "nav-divider"], ["type", "button", "aria-label", "Ouvrir le menu", 1, "nav-hamburger", 3, "click"], [1, "nav-mobile-panel"], [1, "sls-nav", "nav-links"], [1, "nav-right"], [1, "company-selector", 3, "open"], [1, "user-pill"], [1, "user-avatar-sm"], [1, "user-name-sm"], [1, "company-name"], [1, "btn-theme-toggle", 3, "click", "title"], ["title", "Se d\xE9connecter", 1, "btn-nav-logout", 3, "click"], [1, "nav-backdrop"], [1, "sls-content"], [1, "nav-link", 3, "active"], [1, "nav-item-dropdown", 3, "open", "active"], [1, "nav-link", 3, "click"], [1, "nav-item-dropdown"], [1, "nav-link", "dropdown-toggle", 3, "click"], [1, "material-icons", "arrow"], [1, "dropdown-panel"], [1, "dropdown-item", 3, "active"], [1, "dropdown-item", 3, "click"], [1, "company-selector"], [1, "company-btn", 3, "click"], [1, "company-dropdown"], [1, "company-option", 3, "selected"], [1, "company-option", 3, "click"], [1, "company-opt-name"], [1, "company-sigle"], [1, "nav-backdrop", 3, "click"]], template: function SalesLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
        \u0275\u0275listener("click", function SalesLayoutComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275conditionalCreate(3, SalesLayoutComponent_Conditional_3_Template, 1, 1, "img", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "span", 4);
        \u0275\u0275text(8, "point_of_sale");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "Ventes");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "div", 7);
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function SalesLayoutComponent_Template_button_click_12_listener() {
          return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
        });
        \u0275\u0275elementStart(13, "span", 4);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "nav", 10);
        \u0275\u0275repeaterCreate(17, SalesLayoutComponent_For_18_Template, 2, 2, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11);
        \u0275\u0275conditionalCreate(20, SalesLayoutComponent_Conditional_20_Template, 9, 4, "div", 12);
        \u0275\u0275elementStart(21, "div", 13)(22, "div", 14);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 15);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 16);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function SalesLayoutComponent_Template_button_click_28_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275elementStart(29, "span", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 18);
        \u0275\u0275listener("click", function SalesLayoutComponent_Template_button_click_31_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(32, "span", 4);
        \u0275\u0275text(33, "logout");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(34, SalesLayoutComponent_Conditional_34_Template, 1, 0, "div", 19);
        \u0275\u0275elementStart(35, "main", 20);
        \u0275\u0275element(36, "router-outlet");
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
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.companies.length > 1 ? 20 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("| ", ctx.companyDisplayName);
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.themeService.isDark() ? "Mode jour" : "Mode nuit");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "light_mode" : "dark_mode");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.mobileMenuOpen ? 34 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet], styles: ['@charset "UTF-8";\n\n\n@keyframes _ngcontent-%COMP%_navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.sales-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.sls-navbar[_ngcontent-%COMP%] {\n  background-color: var(--navbar-bg);\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: var(--license-banner-offset, 0px);\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n}\n.sls-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 14px;\n  cursor: pointer;\n  transition: var(--ease);\n  border-right: 1px solid var(--navbar-border);\n  min-width: 160px;\n  color: white;\n}\n.sls-brand[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.sls-brand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  font-size: 19px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.sls-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: var(--module-ventes, #0891B2);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sls-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: white;\n}\n.sls-brand[_ngcontent-%COMP%]   .brand-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: var(--navbar-border);\n  margin: 9px 3px;\n}\n.sls-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n  overflow: visible;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 14px;\n  color: var(--navbar-text);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: var(--ease);\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--navbar-active);\n  background: var(--navbar-hover);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: var(--navbar-active);\n  background: rgba(8, 145, 178, 0.2);\n  border-bottom: 2px solid var(--module-ventes, #0891B2);\n}\n.nav-item-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.nav-item-dropdown.active[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%] {\n  color: var(--navbar-active);\n  background: rgba(8, 145, 178, 0.18);\n  border-bottom: 2px solid var(--module-ventes, #0891B2);\n}\n.nav-item-dropdown.open[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%] {\n  color: var(--navbar-active);\n  background: var(--navbar-hover);\n}\n.nav-item-dropdown.open[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-item-dropdown[_ngcontent-%COMP%]:hover   .dropdown-panel[_ngcontent-%COMP%], \n.nav-item-dropdown.open[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  font-size: 15px !important;\n  transition: transform 0.18s;\n}\n.dropdown-panel[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 230px;\n  background: var(--bg-surface);\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--border);\n  border-top: none;\n  z-index: 200;\n  padding: 5px 0;\n  animation: _ngcontent-%COMP%_dropIn 0.15s ease;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  transition: var(--ease);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--primary);\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  font-weight: 600;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n  border-left: 1px solid var(--navbar-border);\n}\n.navbar-logo[_ngcontent-%COMP%] {\n  height: 28px;\n  max-width: 80px;\n  object-fit: contain;\n  border-radius: 3px;\n  background: var(--bg-elevated);\n  padding: 2px 4px;\n}\n.user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--navbar-text);\n  font-size: 12.5px;\n}\n.user-pill[_ngcontent-%COMP%]   .user-avatar-sm[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 27px;\n  background: var(--primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.user-pill[_ngcontent-%COMP%]   .user-name-sm[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.user-pill[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 11px;\n}\n.btn-nav-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  transition: var(--ease);\n}\n.btn-nav-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-nav-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.22);\n  border-color: rgba(220, 38, 38, 0.4);\n  color: #FCA5A5;\n}\n.company-selector[_ngcontent-%COMP%] {\n  position: relative;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  white-space: nowrap;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transition: transform 0.18s;\n}\n.company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.13);\n}\n.company-selector.open[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.company-selector[_ngcontent-%COMP%]   .company-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 220px;\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--border);\n  z-index: 300;\n  padding: 5px 0;\n  animation: _ngcontent-%COMP%_dropIn 0.15s ease;\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]   .company-opt-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]   .company-sigle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option.selected[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary);\n}\n.company-selector[_ngcontent-%COMP%]   .company-option.selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.sls-content[_ngcontent-%COMP%] {\n  margin-top: calc(50px + var(--license-banner-offset, 0px));\n  flex: 1;\n  background: var(--bg-page);\n  min-height: calc(100vh - 50px);\n  overflow-y: auto;\n}\n@keyframes _ngcontent-%COMP%_dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.nav-mobile-panel[_ngcontent-%COMP%] {\n  display: contents;\n}\n.nav-hamburger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active[_ngcontent-%COMP%] {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.nav-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links[_ngcontent-%COMP%], \n   .nav-right[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right[_ngcontent-%COMP%] {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active[_ngcontent-%COMP%] {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(1), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(2), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(3), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(4), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(5), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(6), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(7), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(8), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(9), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(10), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(11), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(12), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(13), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(14), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(15), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(16), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(17), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:nth-child(18), \n   .nav-mobile-panel.open[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]    > .nav-item-dropdown[_ngcontent-%COMP%]:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n    display: flex !important;\n    animation: _ngcontent-%COMP%_navAccordionIn 0.22s ease;\n  }\n  .company-selector[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector[_ngcontent-%COMP%]   .company-dropdown[_ngcontent-%COMP%] {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill[_ngcontent-%COMP%] {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    color: var(--text-muted) !important;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%], \n   .btn-logout[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout[_ngcontent-%COMP%]:hover, \n   .btn-logout[_ngcontent-%COMP%]:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%] {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav[_ngcontent-%COMP%]:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sls-brand[_ngcontent-%COMP%] {\n    min-width: auto;\n    padding: 0 10px;\n  }\n}\n/*# sourceMappingURL=sales-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-sales-layout", standalone: true, imports: [CommonModule, RouterOutlet], template: `<div class="sales-layout">
  <!-- TOP NAVBAR -->
  <nav class="sls-navbar">
    <!-- Brand -->
    <div class="sls-brand" (click)="goHome()">
              @if (branding.hasAppLogo) {
          <img [src]="branding.appLogoUrl" class="nav-app-logo" alt="">
        }
      <span class="material-icons">chevron_left</span>
      <div class="brand-icon">
        <span class="material-icons">point_of_sale</span>
      </div>
      <span class="brand-label">Ventes</span>
    </div>

    <!-- Nav divider -->
    <div class="nav-divider"></div>

    <button type="button" class="nav-hamburger" [class.active]="mobileMenuOpen" (click)="mobileMenuOpen = !mobileMenuOpen" aria-label="Ouvrir le menu">
      <span class="material-icons">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
    </button>

    <div class="nav-mobile-panel" [class.open]="mobileMenuOpen">
      <!-- Main Navigation -->
      <nav class="sls-nav nav-links">
        @for (item of navItems; track item.id) {
          <!-- Simple link -->
          @if (!item.children) {
            <a
              class="nav-link"
              [class.active]="isRouteActive(item.route!)"
              (click)="navigateTo(item.route!)"
            >
              <span class="material-icons">{{ item.icon }}</span>
              {{ item.label }}
            </a>
          }

          <!-- Dropdown -->
          @if (item.children) {
            <div
              class="nav-item-dropdown"
              [class.open]="activeDropdown === item.id"
              [class.active]="hasActiveChild(item.children)"
            >
              <button
                class="nav-link dropdown-toggle"
                (click)="toggleDropdown(item.id)"
              >
                <span class="material-icons">{{ item.icon }}</span>
                {{ item.label }}
                <span class="material-icons arrow">expand_more</span>
              </button>
              <div class="dropdown-panel">
                @for (child of item.children; track child.route) {
                  <button
                    class="dropdown-item"
                    [class.active]="isRouteActive(child.route)"
                    (click)="navigateTo(child.route)"
                  >
                    <span class="material-icons">{{ child.icon }}</span>
                    {{ child.label }}
                  </button>
                }
              </div>
            </div>
          }
        }
      </nav>

      <!-- Right side -->
      <div class="nav-right">
        @if (companies.length > 1) {
          <div class="company-selector" [class.open]="showCompanyPicker">
            <button class="company-btn" (click)="showCompanyPicker = !showCompanyPicker; $event.stopPropagation()">
              <span class="material-icons">business</span>
              <span>{{ activeCompany?.sigle || activeCompany?.name || 'Entreprise' }}</span>
              <span class="material-icons arrow">expand_more</span>
            </button>
            @if (showCompanyPicker) {
              <div class="company-dropdown">
                @for (c of companies; track c.id) {
                  <button class="company-option" [class.selected]="c.id === activeCompany?.id" (click)="switchCompany(c.id)">
                    <span class="material-icons">{{ c.id === activeCompany?.id ? 'check_circle' : 'radio_button_unchecked' }}</span>
                    <span class="company-opt-name">{{ c.name }}</span>
                    @if (c.sigle) { <span class="company-sigle">{{ c.sigle }}</span> }
                  </button>
                }
              </div>
            }
          </div>
        }
        <div class="user-pill">
          <div class="user-avatar-sm">{{ userInitials }}</div>
          <span class="user-name-sm">{{ userName }}</span>
          <span class="company-name">| {{ companyDisplayName }}</span>
        </div>
        <button class="btn-theme-toggle" (click)="themeService.toggle()" [title]="themeService.isDark() ? 'Mode jour' : 'Mode nuit'">
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

  <!-- PAGE CONTENT -->
  <main class="sls-content">
    <router-outlet></router-outlet>
  </main>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/sales/layout/sales-layout.component.scss */\n@keyframes navBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes navAccordionIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes navItemIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.sales-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.sls-navbar {\n  background-color: var(--navbar-bg);\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: var(--license-banner-offset, 0px);\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0, 0, 0, 0.22);\n}\n.sls-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 14px;\n  cursor: pointer;\n  transition: var(--ease);\n  border-right: 1px solid var(--navbar-border);\n  min-width: 160px;\n  color: white;\n}\n.sls-brand:hover {\n  background: var(--navbar-hover);\n}\n.sls-brand .material-icons:first-child {\n  font-size: 19px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.sls-brand .brand-icon {\n  width: 26px;\n  height: 26px;\n  background: var(--module-ventes, #0891B2);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sls-brand .brand-icon .material-icons {\n  font-size: 15px;\n  color: white;\n}\n.sls-brand .brand-label {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: white;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.nav-divider {\n  width: 1px;\n  background: var(--navbar-border);\n  margin: 9px 3px;\n}\n.sls-nav {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n  overflow: visible;\n}\n.nav-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 14px;\n  color: var(--navbar-text);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: var(--ease);\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  text-decoration: none;\n}\n.nav-link .material-icons {\n  font-size: 15px;\n}\n.nav-link:hover {\n  color: var(--navbar-active);\n  background: var(--navbar-hover);\n}\n.nav-link.active {\n  color: var(--navbar-active);\n  background: rgba(8, 145, 178, 0.2);\n  border-bottom: 2px solid var(--module-ventes, #0891B2);\n}\n.nav-item-dropdown {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.nav-item-dropdown.active > .dropdown-toggle {\n  color: var(--navbar-active);\n  background: rgba(8, 145, 178, 0.18);\n  border-bottom: 2px solid var(--module-ventes, #0891B2);\n}\n.nav-item-dropdown.open > .dropdown-toggle {\n  color: var(--navbar-active);\n  background: var(--navbar-hover);\n}\n.nav-item-dropdown.open > .dropdown-toggle .arrow {\n  transform: rotate(180deg);\n}\n.nav-item-dropdown:hover .dropdown-panel,\n.nav-item-dropdown.open .dropdown-panel {\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-toggle {\n  cursor: pointer;\n}\n.dropdown-toggle .arrow {\n  margin-left: 2px;\n  font-size: 15px !important;\n  transition: transform 0.18s;\n}\n.dropdown-panel {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 230px;\n  background: var(--bg-surface);\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--border);\n  border-top: none;\n  z-index: 200;\n  padding: 5px 0;\n  animation: dropIn 0.15s ease;\n}\n.dropdown-panel .dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  transition: var(--ease);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.dropdown-panel .dropdown-item .material-icons {\n  font-size: 15px;\n  color: var(--text-muted);\n}\n.dropdown-panel .dropdown-item:hover {\n  background: var(--bg-hover);\n  color: var(--primary);\n}\n.dropdown-panel .dropdown-item:hover .material-icons {\n  color: var(--primary);\n}\n.dropdown-panel .dropdown-item.active {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  font-weight: 600;\n}\n.dropdown-panel .dropdown-item.active .material-icons {\n  color: var(--primary);\n}\n.nav-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n  border-left: 1px solid var(--navbar-border);\n}\n.navbar-logo {\n  height: 28px;\n  max-width: 80px;\n  object-fit: contain;\n  border-radius: 3px;\n  background: var(--bg-elevated);\n  padding: 2px 4px;\n}\n.user-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--navbar-text);\n  font-size: 12.5px;\n}\n.user-pill .user-avatar-sm {\n  width: 27px;\n  height: 27px;\n  background: var(--primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.user-pill .user-name-sm {\n  font-weight: 500;\n}\n.user-pill .company-name {\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 11px;\n}\n.btn-nav-logout {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  transition: var(--ease);\n}\n.btn-nav-logout .material-icons {\n  font-size: 17px;\n}\n.btn-nav-logout:hover {\n  background: rgba(220, 38, 38, 0.22);\n  border-color: rgba(220, 38, 38, 0.4);\n  color: #FCA5A5;\n}\n.company-selector {\n  position: relative;\n}\n.company-selector .company-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  white-space: nowrap;\n}\n.company-selector .company-btn .material-icons {\n  font-size: 13px;\n}\n.company-selector .company-btn .arrow {\n  transition: transform 0.18s;\n}\n.company-selector .company-btn:hover {\n  background: rgba(255, 255, 255, 0.13);\n}\n.company-selector.open .company-btn .arrow {\n  transform: rotate(180deg);\n}\n.company-selector .company-dropdown {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 220px;\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--border);\n  z-index: 300;\n  padding: 5px 0;\n  animation: dropIn 0.15s ease;\n}\n.company-selector .company-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.company-selector .company-option .material-icons {\n  font-size: 15px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.company-selector .company-option .company-opt-name {\n  flex: 1;\n}\n.company-selector .company-option .company-sigle {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.company-selector .company-option:hover {\n  background: var(--bg-hover);\n}\n.company-selector .company-option.selected {\n  font-weight: 600;\n  color: var(--primary);\n}\n.company-selector .company-option.selected .material-icons {\n  color: var(--primary);\n}\n.sls-content {\n  margin-top: calc(50px + var(--license-banner-offset, 0px));\n  flex: 1;\n  background: var(--bg-page);\n  min-height: calc(100vh - 50px);\n  overflow-y: auto;\n}\n@keyframes dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.nav-mobile-panel {\n  display: contents;\n}\n.nav-hamburger {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--navbar-border);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: var(--ease);\n  flex-shrink: 0;\n}\n.nav-hamburger .material-icons {\n  font-size: 20px;\n  transition: transform 0.25s ease;\n}\n.nav-hamburger:hover {\n  background: var(--navbar-hover);\n}\n.nav-hamburger.active {\n  background: var(--navbar-hover);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-hamburger.active .material-icons {\n  transform: rotate(90deg);\n}\n.nav-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  animation: navBackdropIn 0.25s ease forwards;\n}\n@media (max-width: 960px) {\n  .nav-hamburger {\n    display: inline-flex;\n    margin-left: auto;\n  }\n  .nav-mobile-panel {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    position: fixed;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    width: min(300px, 84vw);\n    background: var(--bg-surface);\n    overflow-y: auto;\n    padding: 6px 0 28px;\n    border-left: 1px solid var(--border);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(100%);\n    visibility: hidden;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;\n    z-index: 245;\n  }\n  .nav-mobile-panel.open {\n    transform: translateX(0);\n    visibility: visible;\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .nav-links,\n  .nav-right {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    flex: none !important;\n    width: 100%;\n    overflow: visible !important;\n  }\n  .nav-right {\n    border-top: 1px solid var(--border);\n    margin: 10px 0 0 !important;\n    padding: 14px 16px 0 !important;\n    gap: 10px !important;\n  }\n  .nav-link {\n    height: auto !important;\n    width: 100%;\n    padding: 13px 18px !important;\n    border-bottom: none !important;\n    border-left: 3px solid transparent;\n    border-radius: 0 !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .nav-link.active {\n    border-left-color: var(--primary) !important;\n    background: var(--bg-elevated) !important;\n    color: var(--primary) !important;\n  }\n  .nav-links > .nav-link {\n    opacity: 0;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link,\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown {\n    animation: navItemIn 0.22s ease forwards;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(1),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(1) {\n    animation-delay: 0.025s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(2),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(2) {\n    animation-delay: 0.05s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(3),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(3) {\n    animation-delay: 0.075s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(4),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(4) {\n    animation-delay: 0.1s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(5),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(5) {\n    animation-delay: 0.125s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(6),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(6) {\n    animation-delay: 0.15s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(7),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(7) {\n    animation-delay: 0.175s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(8),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(8) {\n    animation-delay: 0.2s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(9),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(9) {\n    animation-delay: 0.225s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(10),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(10) {\n    animation-delay: 0.25s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(11),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(11) {\n    animation-delay: 0.275s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(12),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(12) {\n    animation-delay: 0.3s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(13),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(13) {\n    animation-delay: 0.325s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(14),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(14) {\n    animation-delay: 0.35s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(15),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(15) {\n    animation-delay: 0.375s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(16),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(16) {\n    animation-delay: 0.4s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(17),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(17) {\n    animation-delay: 0.425s;\n  }\n  .nav-mobile-panel.open .nav-links > .nav-link:nth-child(18),\n  .nav-mobile-panel.open .nav-links > .nav-item-dropdown:nth-child(18) {\n    animation-delay: 0.45s;\n  }\n  .nav-item-dropdown {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    opacity: 0;\n  }\n  .nav-item-dropdown .dropdown-panel {\n    display: none;\n    position: static !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    background: var(--bg-elevated);\n    animation: none;\n    padding: 4px 0;\n    min-width: 0;\n    width: 100%;\n  }\n  .nav-item-dropdown .dropdown-panel .dropdown-item {\n    padding-left: 46px;\n  }\n  .nav-item-dropdown.open .dropdown-panel {\n    display: flex !important;\n    animation: navAccordionIn 0.22s ease;\n  }\n  .company-selector {\n    width: 100%;\n  }\n  .company-selector .company-btn {\n    width: 100%;\n    justify-content: space-between;\n    background: var(--bg-elevated) !important;\n    border-color: var(--border) !important;\n    color: var(--text-primary) !important;\n  }\n  .company-selector .company-dropdown {\n    position: static;\n    box-shadow: none;\n    border: none;\n    margin-top: 6px;\n    width: 100%;\n    animation: none;\n    padding-left: 8px;\n    background: var(--bg-elevated);\n  }\n  .user-pill {\n    padding: 8px 2px;\n    color: var(--text-primary) !important;\n  }\n  .user-pill .company-name {\n    color: var(--text-muted) !important;\n  }\n  .user-name {\n    color: var(--text-primary) !important;\n  }\n  .btn-theme-toggle {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-theme-toggle:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n  .btn-nav-logout,\n  .btn-logout {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-nav-logout:hover,\n  .btn-logout:hover {\n    background: var(--danger-bg) !important;\n    border-color: var(--danger) !important;\n    color: var(--danger) !important;\n  }\n  .btn-icon-nav {\n    border-color: var(--border) !important;\n    color: var(--text-secondary) !important;\n  }\n  .btn-icon-nav:hover {\n    background: var(--bg-hover) !important;\n    color: var(--text-primary) !important;\n  }\n}\n@media (max-width: 400px) {\n  .brand-label {\n    display: none;\n  }\n  .sls-brand {\n    min-width: auto;\n    padding: 0 10px;\n  }\n}\n/*# sourceMappingURL=sales-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: CompanyService }, { type: AppBrandingService }, { type: Router }, { type: ThemeService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesLayoutComponent, { className: "SalesLayoutComponent", filePath: "app/modules/sales/layout/sales-layout.component.ts", lineNumber: 16 });
})();

// src/app/modules/sales/sales.routes.ts
var salesRoutes = [
  {
    path: "",
    component: SalesLayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-EIRPHXVF.js").then((m) => m.SalesDashboardComponent)
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-TMCZKISA.js").then((m) => m.OrderListComponent)
      },
      {
        path: "orders/new",
        loadComponent: () => import("./chunk-2ZT26XKF.js").then((m) => m.OrderFormComponent)
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./chunk-2ZT26XKF.js").then((m) => m.OrderFormComponent)
      },
      {
        path: "invoices",
        loadComponent: () => import("./chunk-7HRFB6HU.js").then((m) => m.InvoiceListComponent)
      },
      {
        path: "invoices/:id",
        loadComponent: () => import("./chunk-EZT4GB4L.js").then((m) => m.InvoiceDetailComponent)
      },
      {
        path: "avoirs",
        loadComponent: () => import("./chunk-R43HRW3F.js").then((m) => m.AvoirListComponent)
      },
      {
        path: "payments",
        loadComponent: () => import("./chunk-JKNVP4TO.js").then((m) => m.SalesPaymentListComponent)
      },
      {
        path: "clients",
        loadComponent: () => import("./chunk-SA5PHO5Z.js").then((m) => m.ClientListComponent)
      },
      {
        path: "clients/prix",
        loadComponent: () => import("./chunk-35U6ZGEK.js").then((m) => m.ClientPriceComponent)
      },
      {
        path: "vendeurs",
        loadComponent: () => import("./chunk-2EVSQYCW.js").then((m) => m.SellerListComponent)
      },
      {
        path: "reports/stats-ventes",
        loadComponent: () => import("./chunk-23SU6SUG.js").then((m) => m.StatsVentesComponent)
      },
      {
        path: "reports/rapport-ristournes",
        loadComponent: () => import("./chunk-UXXNEQ3O.js").then((m) => m.RapportRistourneComponent)
      },
      {
        path: "ristournes",
        loadComponent: () => import("./chunk-IM6RATVR.js").then((m) => m.RistourneListComponent)
      },
      {
        path: "precomptes",
        loadComponent: () => import("./chunk-5CKK4IQF.js").then((m) => m.PrecompteConfigComponent)
      },
      {
        path: "eleader/import",
        loadComponent: () => import("./chunk-6PGNHUOQ.js").then((m) => m.EleaderImportComponent)
      },
      {
        path: "eleader/orders",
        loadComponent: () => import("./chunk-63XAVCXA.js").then((m) => m.EleaderOrdersComponent)
      },
      {
        path: "eleader/config",
        loadComponent: () => import("./chunk-H5FBYBIM.js").then((m) => m.EleaderConfigComponent)
      },
      {
        path: "eleader/journal",
        loadComponent: () => import("./chunk-LQHQSJ5T.js").then((m) => m.EleaderJournalComponent)
      },
      {
        path: "eleader",
        redirectTo: "eleader/import",
        pathMatch: "full"
      }
    ]
  }
];
export {
  salesRoutes
};
//# sourceMappingURL=chunk-KZMGIQWD.js.map
