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

// src/app/modules/accounting/layout/accounting-layout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.route;
function AccountingLayoutComponent_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275listener("click", function AccountingLayoutComponent_For_13_Conditional_0_Template_a_click_0_listener() {
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
    \u0275\u0275classProp("active", ctx_r2.isRouteActive(item_r2.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
function AccountingLayoutComponent_For_13_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function AccountingLayoutComponent_For_13_Conditional_1_For_9_Template_button_click_0_listener() {
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
    \u0275\u0275classProp("active", ctx_r2.isRouteActive(child_r6.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r6.label, " ");
  }
}
function AccountingLayoutComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function AccountingLayoutComponent_For_13_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown(item_r2.id));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275repeaterCreate(8, AccountingLayoutComponent_For_13_Conditional_1_For_9_Template, 4, 4, "button", 22, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.activeDropdown === item_r2.id)("active", ctx_r2.hasActiveChild(item_r2.children));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r2.children);
  }
}
function AccountingLayoutComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AccountingLayoutComponent_For_13_Conditional_0_Template, 4, 4, "a", 15);
    \u0275\u0275conditionalCreate(1, AccountingLayoutComponent_For_13_Conditional_1_Template, 10, 6, "div", 16);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(!item_r2.children ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.children ? 1 : -1);
  }
}
var AccountingLayoutComponent = class _AccountingLayoutComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.userName = "";
    this.userInitials = "";
    this.companyName = "Mon Entreprise";
    this.activeDropdown = null;
    this.navItems = [
      { id: "dashboard", label: "Tableau de bord", icon: "dashboard", route: "/accounting/dashboard" },
      {
        id: "journals",
        label: "Journaux",
        icon: "book",
        children: [
          { label: "Liste des journaux", icon: "list", route: "/accounting/journals" },
          { label: "Saisie d'\xE9criture", icon: "edit", route: "/accounting/journal-entries/new" }
        ]
      },
      {
        id: "entries",
        label: "\xC9critures",
        icon: "receipt_long",
        children: [
          { label: "Toutes les \xE9critures", icon: "format_list_bulleted", route: "/accounting/journal-entries" },
          { label: "Brouillons", icon: "drafts", route: "/accounting/journal-entries?state=draft" },
          { label: "Valid\xE9es", icon: "check_circle", route: "/accounting/journal-entries?state=posted" }
        ]
      },
      { id: "chart", label: "Plan Comptable", icon: "account_tree", route: "/accounting/chart-of-accounts" },
      { id: "grandlivre", label: "Grand Livre", icon: "menu_book", route: "/accounting/grand-livre" },
      {
        id: "analytic",
        label: "Analytique",
        icon: "analytics",
        children: [
          { label: "Comptes analytiques", icon: "account_tree", route: "/accounting/analytic/accounts" },
          { label: "Grand livre analytique", icon: "receipt_long", route: "/accounting/analytic/lines" },
          { label: "Balance analytique", icon: "bar_chart", route: "/accounting/analytic/report" }
        ]
      },
      {
        id: "reports",
        label: "Rapports",
        icon: "assessment",
        children: [
          { label: "Balance G\xE9n\xE9rale 4 colonnes", icon: "table_chart", route: "/accounting/reports/general-balance-4" },
          { label: "Balance G\xE9n\xE9rale 6 colonnes", icon: "table_chart", route: "/accounting/reports/general-balance-6" },
          { label: "Balance des Tiers 4 colonnes", icon: "people", route: "/accounting/reports/partner-balance-4" },
          { label: "Balance des Tiers 6 colonnes", icon: "people", route: "/accounting/reports/partner-balance-6" },
          { label: "Bilan OHADA", icon: "account_balance", route: "/accounting/reports/balance-sheet" },
          { label: "Compte de R\xE9sultat", icon: "trending_up", route: "/accounting/reports/profit-loss" }
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
    const target = event.target;
    if (!target.closest(".nav-item-dropdown")) {
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
  isRouteActive(route) {
    return this.router.url === route || this.router.url.startsWith(route + "/");
  }
  hasActiveChild(children) {
    return children.some((c) => this.isRouteActive(c.route));
  }
  static {
    this.\u0275fac = function AccountingLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountingLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountingLayoutComponent, selectors: [["app-accounting-layout"]], hostBindings: function AccountingLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AccountingLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument);
      }
    }, decls: 27, vars: 3, consts: [[1, "accounting-layout"], [1, "acc-navbar"], [1, "acc-brand", 3, "click"], [1, "material-icons"], [1, "brand-icon"], [1, "brand-label"], [1, "nav-divider"], [1, "acc-nav"], [1, "nav-right"], [1, "user-pill"], [1, "user-avatar-sm"], [1, "user-name-sm"], [1, "company-name"], ["title", "Se d\xE9connecter", 1, "btn-nav-logout", 3, "click"], [1, "acc-content"], [1, "nav-link", 3, "active"], [1, "nav-item-dropdown", 3, "open", "active"], [1, "nav-link", 3, "click"], [1, "nav-item-dropdown"], [1, "nav-link", "dropdown-toggle", 3, "click"], [1, "material-icons", "arrow"], [1, "dropdown-panel"], [1, "dropdown-item", 3, "active"], [1, "dropdown-item", 3, "click"]], template: function AccountingLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
        \u0275\u0275listener("click", function AccountingLayoutComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 3);
        \u0275\u0275text(7, "calculate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "Comptabilit\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementStart(11, "nav", 7);
        \u0275\u0275repeaterCreate(12, AccountingLayoutComponent_For_13_Template, 2, 2, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 12);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 13);
        \u0275\u0275listener("click", function AccountingLayoutComponent_Template_button_click_22_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(23, "span", 3);
        \u0275\u0275text(24, "logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "main", 14);
        \u0275\u0275element(26, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("| ", ctx.companyName);
      }
    }, dependencies: [CommonModule, RouterOutlet], styles: ['\n.accounting-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.acc-navbar[_ngcontent-%COMP%] {\n  background-color: #1c1c1c;\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.acc-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  min-width: 190px;\n  color: white;\n}\n.acc-brand[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.acc-brand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.acc-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #714B67;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.acc-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: white;\n}\n.acc-brand[_ngcontent-%COMP%]   .brand-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 8px 4px;\n}\n.acc-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n  overflow: visible;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 16px;\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.15s;\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  font-family: "Roboto", sans-serif;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.08);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(113, 75, 103, 0.5);\n  border-bottom: 3px solid #714B67;\n}\n.nav-item-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.nav-item-dropdown.active[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(113, 75, 103, 0.3);\n  border-bottom: 3px solid #714B67;\n}\n.nav-item-dropdown.open[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n}\n.nav-item-dropdown.open[_ngcontent-%COMP%]    > .dropdown-toggle[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-item-dropdown[_ngcontent-%COMP%]:hover   .dropdown-panel[_ngcontent-%COMP%], \n.nav-item-dropdown.open[_ngcontent-%COMP%]   .dropdown-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  font-size: 16px !important;\n  transition: transform 0.2s;\n}\n.dropdown-panel[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 260px;\n  background: white;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  z-index: 200;\n  padding: 6px 0;\n  animation: _ngcontent-%COMP%_dropIn 0.15s ease;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  font-size: 13px;\n  color: #212529;\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  transition: background 0.1s;\n  font-family: "Roboto", sans-serif;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6c757d;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #714B67;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: #714B67;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%] {\n  background: #f0eff4;\n  color: #714B67;\n  font-weight: 600;\n}\n.dropdown-panel[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #714B67;\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n}\n.user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 13px;\n}\n.user-pill[_ngcontent-%COMP%]   .user-avatar-sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #714B67;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.user-pill[_ngcontent-%COMP%]   .user-name-sm[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.user-pill[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 12px;\n}\n.btn-nav-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  transition: all 0.2s;\n}\n.btn-nav-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-nav-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 53, 69, 0.3);\n  border-color: rgba(220, 53, 69, 0.5);\n  color: #ff6b6b;\n}\n.acc-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  flex: 1;\n  background: #f5f5f5;\n  min-height: calc(100vh - 50px);\n  overflow-y: auto;\n}\n@keyframes _ngcontent-%COMP%_dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=accounting-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountingLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-accounting-layout", standalone: true, imports: [CommonModule, RouterOutlet], template: '<div class="accounting-layout">\n  <!-- TOP NAVBAR -->\n  <nav class="acc-navbar">\n    <!-- Brand -->\n    <div class="acc-brand" (click)="goHome()">\n      <span class="material-icons">chevron_left</span>\n      <div class="brand-icon">\n        <span class="material-icons">calculate</span>\n      </div>\n      <span class="brand-label">Comptabilit\xE9</span>\n    </div>\n\n    <!-- Nav divider -->\n    <div class="nav-divider"></div>\n\n    <!-- Main Navigation -->\n    <nav class="acc-nav">\n      @for (item of navItems; track item.id) {\n        <!-- Simple link -->\n        @if (!item.children) {\n          <a\n            class="nav-link"\n            [class.active]="isRouteActive(item.route!)"\n            (click)="navigateTo(item.route!)"\n          >\n            <span class="material-icons">{{ item.icon }}</span>\n            {{ item.label }}\n          </a>\n        }\n\n        <!-- Dropdown -->\n        @if (item.children) {\n          <div\n            class="nav-item-dropdown"\n            [class.open]="activeDropdown === item.id"\n            [class.active]="hasActiveChild(item.children)"\n          >\n            <button\n              class="nav-link dropdown-toggle"\n              (click)="toggleDropdown(item.id)"\n            >\n              <span class="material-icons">{{ item.icon }}</span>\n              {{ item.label }}\n              <span class="material-icons arrow">expand_more</span>\n            </button>\n            <div class="dropdown-panel">\n              @for (child of item.children; track child.route) {\n                <button\n                  class="dropdown-item"\n                  [class.active]="isRouteActive(child.route)"\n                  (click)="navigateTo(child.route)"\n                >\n                  <span class="material-icons">{{ child.icon }}</span>\n                  {{ child.label }}\n                </button>\n              }\n            </div>\n          </div>\n        }\n      }\n    </nav>\n\n    <!-- Right side -->\n    <div class="nav-right">\n      <div class="user-pill">\n        <div class="user-avatar-sm">{{ userInitials }}</div>\n        <span class="user-name-sm">{{ userName }}</span>\n        <span class="company-name">| {{ companyName }}</span>\n      </div>\n      <button class="btn-nav-logout" (click)="logout()" title="Se d\xE9connecter">\n        <span class="material-icons">logout</span>\n      </button>\n    </div>\n  </nav>\n\n  <!-- PAGE CONTENT -->\n  <main class="acc-content">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n', styles: ['/* src/app/modules/accounting/layout/accounting-layout.component.scss */\n.accounting-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.acc-navbar {\n  background-color: #1c1c1c;\n  height: 50px;\n  display: flex;\n  align-items: stretch;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.acc-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  min-width: 190px;\n  color: white;\n}\n.acc-brand:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.acc-brand .material-icons:first-child {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.acc-brand .brand-icon {\n  width: 28px;\n  height: 28px;\n  background: #714B67;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.acc-brand .brand-icon .material-icons {\n  font-size: 16px;\n  color: white;\n}\n.acc-brand .brand-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.nav-divider {\n  width: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 8px 4px;\n}\n.acc-nav {\n  display: flex;\n  align-items: stretch;\n  flex: 1;\n  overflow: visible;\n}\n.nav-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 16px;\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.15s;\n  border: none;\n  background: none;\n  height: 100%;\n  white-space: nowrap;\n  font-family: "Roboto", sans-serif;\n  text-decoration: none;\n}\n.nav-link .material-icons {\n  font-size: 16px;\n}\n.nav-link:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.08);\n}\n.nav-link.active {\n  color: white;\n  background: rgba(113, 75, 103, 0.5);\n  border-bottom: 3px solid #714B67;\n}\n.nav-item-dropdown {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.nav-item-dropdown.active > .dropdown-toggle {\n  color: white;\n  background: rgba(113, 75, 103, 0.3);\n  border-bottom: 3px solid #714B67;\n}\n.nav-item-dropdown.open > .dropdown-toggle {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n}\n.nav-item-dropdown.open > .dropdown-toggle .arrow {\n  transform: rotate(180deg);\n}\n.nav-item-dropdown:hover .dropdown-panel,\n.nav-item-dropdown.open .dropdown-panel {\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-toggle {\n  cursor: pointer;\n}\n.dropdown-toggle .arrow {\n  margin-left: 2px;\n  font-size: 16px !important;\n  transition: transform 0.2s;\n}\n.dropdown-panel {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 260px;\n  background: white;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  z-index: 200;\n  padding: 6px 0;\n  animation: dropIn 0.15s ease;\n}\n.dropdown-panel .dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  font-size: 13px;\n  color: #212529;\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  transition: background 0.1s;\n  font-family: "Roboto", sans-serif;\n}\n.dropdown-panel .dropdown-item .material-icons {\n  font-size: 16px;\n  color: #6c757d;\n}\n.dropdown-panel .dropdown-item:hover {\n  background: #f8f9fa;\n  color: #714B67;\n}\n.dropdown-panel .dropdown-item:hover .material-icons {\n  color: #714B67;\n}\n.dropdown-panel .dropdown-item.active {\n  background: #f0eff4;\n  color: #714B67;\n  font-weight: 600;\n}\n.dropdown-panel .dropdown-item.active .material-icons {\n  color: #714B67;\n}\n.nav-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n}\n.user-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 13px;\n}\n.user-pill .user-avatar-sm {\n  width: 28px;\n  height: 28px;\n  background: #714B67;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.user-pill .user-name-sm {\n  font-weight: 500;\n}\n.user-pill .company-name {\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 12px;\n}\n.btn-nav-logout {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  transition: all 0.2s;\n}\n.btn-nav-logout .material-icons {\n  font-size: 18px;\n}\n.btn-nav-logout:hover {\n  background: rgba(220, 53, 69, 0.3);\n  border-color: rgba(220, 53, 69, 0.5);\n  color: #ff6b6b;\n}\n.acc-content {\n  margin-top: 50px;\n  flex: 1;\n  background: #f5f5f5;\n  min-height: calc(100vh - 50px);\n  overflow-y: auto;\n}\n@keyframes dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=accounting-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountingLayoutComponent, { className: "AccountingLayoutComponent", filePath: "src/app/modules/accounting/layout/accounting-layout.component.ts", lineNumber: 13 });
})();

// src/app/modules/accounting/accounting.routes.ts
var accountingRoutes = [
  {
    path: "",
    component: AccountingLayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-HRGP4C2P.js").then((m) => m.DashboardComponent)
      },
      {
        path: "chart-of-accounts",
        loadComponent: () => import("./chunk-VPUCLQI7.js").then((m) => m.ChartOfAccountsComponent)
      },
      {
        path: "journals",
        loadComponent: () => import("./chunk-YDX6DCRM.js").then((m) => m.JournalsComponent)
      },
      {
        path: "journals/:id",
        loadComponent: () => import("./chunk-VDO2TENH.js").then((m) => m.JournalDetailComponent)
      },
      {
        path: "journal-entries",
        loadComponent: () => import("./chunk-BRFYS3BR.js").then((m) => m.JournalEntriesComponent)
      },
      {
        path: "journal-entries/new",
        loadComponent: () => import("./chunk-C2XPKJMQ.js").then((m) => m.JournalEntryFormComponent)
      },
      {
        path: "journal-entries/:id",
        loadComponent: () => import("./chunk-C2XPKJMQ.js").then((m) => m.JournalEntryFormComponent)
      },
      {
        path: "grand-livre",
        loadComponent: () => import("./chunk-VMSKX6PO.js").then((m) => m.GrandLivreComponent)
      },
      {
        path: "reports/general-balance-4",
        loadComponent: () => import("./chunk-TMFAIQSW.js").then((m) => m.GeneralBalance4Component)
      },
      {
        path: "reports/general-balance-6",
        loadComponent: () => import("./chunk-AQEVENYG.js").then((m) => m.GeneralBalance6Component)
      },
      {
        path: "reports/partner-balance-4",
        loadComponent: () => import("./chunk-5KMLQCQ7.js").then((m) => m.PartnerBalance4Component)
      },
      {
        path: "reports/partner-balance-6",
        loadComponent: () => import("./chunk-AXDS7BGH.js").then((m) => m.PartnerBalance6Component)
      },
      {
        path: "reports/balance-sheet",
        loadComponent: () => import("./chunk-4EX7CLIV.js").then((m) => m.BalanceSheetComponent)
      },
      {
        path: "reports/profit-loss",
        loadComponent: () => import("./chunk-GF6J4N4L.js").then((m) => m.ProfitLossComponent)
      },
      {
        path: "analytic/accounts",
        loadComponent: () => import("./chunk-ZE62BY3Y.js").then((m) => m.AnalyticAccountsComponent)
      },
      {
        path: "analytic/lines",
        loadComponent: () => import("./chunk-HSLCSMGI.js").then((m) => m.AnalyticLinesComponent)
      },
      {
        path: "analytic/report",
        loadComponent: () => import("./chunk-6Y5DW7DR.js").then((m) => m.AnalyticReportComponent)
      }
    ]
  }
];
export {
  accountingRoutes
};
//# sourceMappingURL=chunk-2PSOSVKF.js.map
