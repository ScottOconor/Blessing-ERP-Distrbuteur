import {
  Router,
  RouterOutlet
} from "./chunk-K3VCSIQL.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/stock/layout/stock-layout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.route;
function StockLayoutComponent_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275listener("click", function StockLayoutComponent_For_13_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
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
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.isActive(item_r2.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r2.label, " ");
  }
}
function StockLayoutComponent_For_13_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function StockLayoutComponent_For_13_Conditional_1_For_9_Template_button_click_0_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.navigateTo(child_r6.route));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.isActive(child_r6.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", child_r6.label, " ");
  }
}
function StockLayoutComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275listener("click", function StockLayoutComponent_For_13_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown(item_r2.id));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275repeaterCreate(8, StockLayoutComponent_For_13_Conditional_1_For_9_Template, 4, 4, "button", 21, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.activeDropdown === item_r2.id)("active", ctx_r2.hasActiveChild(item_r2.children));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r2.label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r2.children);
  }
}
function StockLayoutComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StockLayoutComponent_For_13_Conditional_0_Template, 4, 4, "a", 14);
    \u0275\u0275conditionalCreate(1, StockLayoutComponent_For_13_Conditional_1_Template, 10, 6, "div", 15);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(!item_r2.children ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.children ? 1 : -1);
  }
}
var StockLayoutComponent = class _StockLayoutComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.userName = "";
    this.userInitials = "";
    this.activeDropdown = null;
    this.navItems = [
      { id: "dashboard", label: "Tableau de bord", icon: "dashboard", route: "/stock/dashboard" },
      {
        id: "operations",
        label: "Op\xE9rations",
        icon: "swap_horiz",
        children: [
          { label: "R\xE9ceptions fournisseurs", icon: "move_to_inbox", route: "/stock/receptions" },
          { label: "Ajustements de stock", icon: "tune", route: "/stock/adjustments" },
          { label: "Transferts inter-d\xE9p\xF4ts", icon: "compare_arrows", route: "/stock/transferts" }
        ]
      },
      {
        id: "expeditions",
        label: "Exp\xE9ditions",
        icon: "local_shipping",
        children: [
          { label: "Exp\xE9ditions inter-agences", icon: "send", route: "/stock/expeditions" },
          { label: "Agences distantes", icon: "business", route: "/stock/agences" }
        ]
      },
      {
        id: "analyse",
        label: "Analyse",
        icon: "analytics",
        children: [
          { label: "Rapport de stock", icon: "inventory", route: "/stock/analyse/rapport" },
          { label: "Mouvements de produits", icon: "sync_alt", route: "/stock/analyse/mouvements" },
          { label: "Valorisation de stock", icon: "price_check", route: "/stock/analyse/valorisation" }
        ]
      },
      {
        id: "config",
        label: "Configuration",
        icon: "settings",
        children: [
          { label: "Articles", icon: "category", route: "/stock/products" },
          { label: "Cat\xE9gories d'articles", icon: "folder", route: "/stock/categories" },
          { label: "Entrep\xF4ts", icon: "warehouse", route: "/stock/warehouses" },
          { label: "Emplacements", icon: "place", route: "/stock/locations" },
          { label: "Types d'op\xE9rations", icon: "swap_horiz", route: "/stock/picking-types" }
        ]
      }
    ];
  }
  ngOnInit() {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
  }
  toggleDropdown(id) {
    this.activeDropdown = this.activeDropdown === id ? null : id;
  }
  onDocumentClick(event) {
    if (!event.target.closest(".nav-item-dropdown")) {
      this.activeDropdown = null;
    }
  }
  navigateTo(route) {
    this.activeDropdown = null;
    this.router.navigateByUrl(route);
  }
  goHome() {
    this.router.navigate(["/welcome"]);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  isActive(route) {
    return this.router.url === route || this.router.url.startsWith(route + "/");
  }
  hasActiveChild(children) {
    return children.some((c) => this.isActive(c.route));
  }
  static {
    this.\u0275fac = function StockLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockLayoutComponent, selectors: [["app-stock-layout"]], hostBindings: function StockLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function StockLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument);
      }
    }, decls: 25, vars: 2, consts: [[1, "stock-layout"], [1, "stk-navbar"], [1, "stk-brand", 3, "click"], [1, "material-icons"], [1, "brand-icon"], [1, "brand-label"], [1, "nav-divider"], [1, "stk-nav"], [1, "nav-right"], [1, "user-pill"], [1, "user-avatar-sm"], [1, "user-name-sm"], ["title", "Se d\xE9connecter", 1, "btn-nav-logout", 3, "click"], [1, "stk-content"], [1, "nav-link", 3, "active"], [1, "nav-item-dropdown", 3, "open", "active"], [1, "nav-link", 3, "click"], [1, "nav-item-dropdown"], [1, "nav-link", "dropdown-toggle", 3, "click"], [1, "material-icons", "arrow"], [1, "dropdown-panel"], [1, "dropdown-item", 3, "active"], [1, "dropdown-item", 3, "click"]], template: function StockLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
        \u0275\u0275listener("click", function StockLayoutComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 3);
        \u0275\u0275text(7, "inventory_2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "Stock");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementStart(11, "nav", 7);
        \u0275\u0275repeaterCreate(12, StockLayoutComponent_For_13_Template, 2, 2, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 12);
        \u0275\u0275listener("click", function StockLayoutComponent_Template_button_click_20_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(21, "span", 3);
        \u0275\u0275text(22, "logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "main", 13);
        \u0275\u0275element(24, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
      }
    }, dependencies: [CommonModule, RouterOutlet], styles: ['\n.stock-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.stk-navbar[_ngcontent-%COMP%] {\n  background-color: #1a1f2e;\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.stk-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  min-width: 160px;\n  color: white;\n}\n.stk-brand[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.stk-brand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.stk-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #2c7be5;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stk-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: white;\n}\n.stk-brand[_ngcontent-%COMP%]   .brand-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 8px 4px;\n}\n.stk-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n  overflow: visible;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 16px;\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.15s;\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  font-family: "Roboto", sans-serif;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.08);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(44, 123, 229, 0.35);\n  border-bottom: 3px solid #2c7be5;\n}\n.nav-item-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.nav-item-dropdown.active[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(44, 123, 229, 0.3);\n  border-bottom: 3px solid #2c7be5;\n}\n.nav-item-dropdown.open[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n}\n.nav-item-dropdown.open[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-item-dropdown[_ngcontent-%COMP%]:hover   .dropdown-panel[_ngcontent-%COMP%], \n.nav-item-dropdown.open[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  font-size: 16px !important;\n  transition: transform 0.2s;\n}\n.dropdown-panel[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 220px;\n  background: white;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  z-index: 200;\n  padding: 6px 0;\n  animation: _ngcontent-%COMP%_dropIn 0.15s ease;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  font-size: 13px;\n  color: #212529;\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  transition: background 0.1s;\n  font-family: "Roboto", sans-serif;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6c757d;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #2c7be5;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%] {\n  background: #e8f0fb;\n  color: #2c7be5;\n  font-weight: 600;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n}\n.user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 13px;\n}\n.user-pill[_ngcontent-%COMP%]   .user-avatar-sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #2c7be5;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.user-pill[_ngcontent-%COMP%]   .user-name-sm[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.btn-nav-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  transition: all 0.2s;\n}\n.btn-nav-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-nav-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 53, 69, 0.3);\n  border-color: rgba(220, 53, 69, 0.5);\n  color: #ff6b6b;\n}\n.stk-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  flex: 1;\n  background: #f5f5f5;\n  min-height: calc(100vh - 50px);\n  overflow-y: auto;\n}\n@keyframes _ngcontent-%COMP%_dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=stock-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-stock-layout", standalone: true, imports: [CommonModule, RouterOutlet], template: '<div class="stock-layout">\n  <nav class="stk-navbar">\n    <div class="stk-brand" (click)="goHome()">\n      <span class="material-icons">chevron_left</span>\n      <div class="brand-icon"><span class="material-icons">inventory_2</span></div>\n      <span class="brand-label">Stock</span>\n    </div>\n    <div class="nav-divider"></div>\n    <nav class="stk-nav">\n      @for (item of navItems; track item.id) {\n        @if (!item.children) {\n          <a class="nav-link" [class.active]="isActive(item.route!)" (click)="navigateTo(item.route!)">\n            <span class="material-icons">{{ item.icon }}</span>{{ item.label }}\n          </a>\n        }\n        @if (item.children) {\n          <div class="nav-item-dropdown" [class.open]="activeDropdown === item.id" [class.active]="hasActiveChild(item.children)">\n            <button class="nav-link dropdown-toggle" (click)="toggleDropdown(item.id)">\n              <span class="material-icons">{{ item.icon }}</span>{{ item.label }}\n              <span class="material-icons arrow">expand_more</span>\n            </button>\n            <div class="dropdown-panel">\n              @for (child of item.children; track child.route) {\n                <button class="dropdown-item" [class.active]="isActive(child.route)" (click)="navigateTo(child.route)">\n                  <span class="material-icons">{{ child.icon }}</span>{{ child.label }}\n                </button>\n              }\n            </div>\n          </div>\n        }\n      }\n    </nav>\n    <div class="nav-right">\n      <div class="user-pill">\n        <div class="user-avatar-sm">{{ userInitials }}</div>\n        <span class="user-name-sm">{{ userName }}</span>\n      </div>\n      <button class="btn-nav-logout" (click)="logout()" title="Se d\xE9connecter">\n        <span class="material-icons">logout</span>\n      </button>\n    </div>\n  </nav>\n  <main class="stk-content"><router-outlet></router-outlet></main>\n</div>\n', styles: ['/* src/app/modules/stock/layout/stock-layout.component.scss */\n.stock-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.stk-navbar {\n  background-color: #1a1f2e;\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.stk-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  min-width: 160px;\n  color: white;\n}\n.stk-brand:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.stk-brand .material-icons:first-child {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.stk-brand .brand-icon {\n  width: 28px;\n  height: 28px;\n  background: #2c7be5;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stk-brand .brand-icon .material-icons {\n  font-size: 16px;\n  color: white;\n}\n.stk-brand .brand-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.nav-divider {\n  width: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 8px 4px;\n}\n.stk-nav {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n  overflow: visible;\n}\n.nav-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 16px;\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.15s;\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  font-family: "Roboto", sans-serif;\n  text-decoration: none;\n}\n.nav-link .material-icons {\n  font-size: 16px;\n}\n.nav-link:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.08);\n}\n.nav-link.active {\n  color: white;\n  background: rgba(44, 123, 229, 0.35);\n  border-bottom: 3px solid #2c7be5;\n}\n.nav-item-dropdown {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.nav-item-dropdown.active > .dropdown-toggle {\n  color: white;\n  background: rgba(44, 123, 229, 0.3);\n  border-bottom: 3px solid #2c7be5;\n}\n.nav-item-dropdown.open > .dropdown-toggle {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n}\n.nav-item-dropdown.open > .dropdown-toggle .arrow {\n  transform: rotate(180deg);\n}\n.nav-item-dropdown:hover .dropdown-panel,\n.nav-item-dropdown.open .dropdown-panel {\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-toggle {\n  cursor: pointer;\n}\n.dropdown-toggle .arrow {\n  margin-left: 2px;\n  font-size: 16px !important;\n  transition: transform 0.2s;\n}\n.dropdown-panel {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 220px;\n  background: white;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  z-index: 200;\n  padding: 6px 0;\n  animation: dropIn 0.15s ease;\n}\n.dropdown-panel .dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  font-size: 13px;\n  color: #212529;\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  transition: background 0.1s;\n  font-family: "Roboto", sans-serif;\n}\n.dropdown-panel .dropdown-item .material-icons {\n  font-size: 16px;\n  color: #6c757d;\n}\n.dropdown-panel .dropdown-item:hover {\n  background: #f8f9fa;\n  color: #2c7be5;\n}\n.dropdown-panel .dropdown-item:hover .material-icons {\n  color: #2c7be5;\n}\n.dropdown-panel .dropdown-item.active {\n  background: #e8f0fb;\n  color: #2c7be5;\n  font-weight: 600;\n}\n.dropdown-panel .dropdown-item.active .material-icons {\n  color: #2c7be5;\n}\n.nav-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n}\n.user-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 13px;\n}\n.user-pill .user-avatar-sm {\n  width: 28px;\n  height: 28px;\n  background: #2c7be5;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.user-pill .user-name-sm {\n  font-weight: 500;\n}\n.btn-nav-logout {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  transition: all 0.2s;\n}\n.btn-nav-logout .material-icons {\n  font-size: 18px;\n}\n.btn-nav-logout:hover {\n  background: rgba(220, 53, 69, 0.3);\n  border-color: rgba(220, 53, 69, 0.5);\n  color: #ff6b6b;\n}\n.stk-content {\n  margin-top: 50px;\n  flex: 1;\n  background: #f5f5f5;\n  min-height: calc(100vh - 50px);\n  overflow-y: auto;\n}\n@keyframes dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=stock-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockLayoutComponent, { className: "StockLayoutComponent", filePath: "src/app/modules/stock/layout/stock-layout.component.ts", lineNumber: 13 });
})();

// src/app/modules/stock/stock.routes.ts
var stockRoutes = [
  {
    path: "",
    component: StockLayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", loadComponent: () => import("./chunk-WVXLRHD7.js").then((m) => m.StockDashboardComponent) },
      { path: "receptions", loadComponent: () => import("./chunk-4TKC3PLV.js").then((m) => m.ReceptionListComponent) },
      { path: "receptions/new", loadComponent: () => import("./chunk-GW7YUYIT.js").then((m) => m.ReceptionDetailComponent) },
      { path: "receptions/bordereau/:id", loadComponent: () => import("./chunk-NVA4OEVM.js").then((m) => m.BordereauComponent) },
      { path: "receptions/:id", loadComponent: () => import("./chunk-GW7YUYIT.js").then((m) => m.ReceptionDetailComponent) },
      { path: "products", loadComponent: () => import("./chunk-LLP6EMDT.js").then((m) => m.ProductListComponent) },
      { path: "warehouses", loadComponent: () => import("./chunk-XS6S7X3K.js").then((m) => m.WarehouseListComponent) },
      { path: "adjustments", loadComponent: () => import("./chunk-WUJOSIVH.js").then((m) => m.AdjustmentListComponent) },
      { path: "expeditions", loadComponent: () => import("./chunk-42KSCCJY.js").then((m) => m.LivraisonListComponent) },
      { path: "expeditions/new", loadComponent: () => import("./chunk-4K7V2HYQ.js").then((m) => m.LivraisonDetailComponent) },
      { path: "expeditions/:id", loadComponent: () => import("./chunk-4K7V2HYQ.js").then((m) => m.LivraisonDetailComponent) },
      { path: "transferts", loadComponent: () => import("./chunk-7GQFJ7RH.js").then((m) => m.TransfertListComponent) },
      { path: "transferts/new", loadComponent: () => import("./chunk-ITKPBBF3.js").then((m) => m.TransfertDetailComponent) },
      { path: "transferts/:id", loadComponent: () => import("./chunk-ITKPBBF3.js").then((m) => m.TransfertDetailComponent) },
      { path: "agences", loadComponent: () => import("./chunk-YERP5IBX.js").then((m) => m.AgencyListComponent) },
      { path: "categories", loadComponent: () => import("./chunk-UADXF2MO.js").then((m) => m.CategoryListComponent) },
      { path: "locations", loadComponent: () => import("./chunk-XLHYNEVH.js").then((m) => m.LocationListComponent) },
      { path: "picking-types", loadComponent: () => import("./chunk-3IX66DHB.js").then((m) => m.PickingTypeListComponent) },
      { path: "analyse/rapport", loadComponent: () => import("./chunk-UOQBE4HP.js").then((m) => m.StockReportComponent) },
      { path: "analyse/mouvements", loadComponent: () => import("./chunk-FHD6QAJW.js").then((m) => m.StockMovementsComponent) },
      { path: "analyse/valorisation", loadComponent: () => import("./chunk-6YCOCOJP.js").then((m) => m.StockValuationComponent) }
    ]
  }
];
export {
  stockRoutes
};
//# sourceMappingURL=chunk-C3ZOA2KZ.js.map
