import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpHeaders,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/config/components/backup/backup.component.ts
function BackupComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 4)(1, "span", 2);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementStart(4, "button", 26);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMsg, " ");
  }
}
function BackupComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 2);
    \u0275\u0275text(2, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementStart(4, "button", 26);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
function BackupComponent_Conditional_46_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedFile.name, " ");
  }
}
function BackupComponent_Conditional_46_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " S\xE9lectionner un fichier ZIP de sauvegarde ");
  }
}
function BackupComponent_Conditional_46_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 30);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_46_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.askConfirmRestore());
    });
    \u0275\u0275domElementStart(1, "span", 2);
    \u0275\u0275text(2, "restore");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Restaurer depuis ce fichier ");
    \u0275\u0275domElementEnd();
  }
}
function BackupComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 17)(1, "label", 27)(2, "span", 2);
    \u0275\u0275text(3, "folder_open");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, BackupComponent_Conditional_46_Conditional_4_Template, 1, 1)(5, BackupComponent_Conditional_46_Conditional_5_Template, 1, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "input", 28);
    \u0275\u0275domListener("change", function BackupComponent_Conditional_46_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, BackupComponent_Conditional_46_Conditional_7_Template, 4, 0, "button", 29);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedFile ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedFile ? 7 : -1);
  }
}
function BackupComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18)(1, "span", 31);
    \u0275\u0275text(2, "warning");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Vous \xEAtes sur le point de restaurer la base de donn\xE9es depuis :");
    \u0275\u0275domElement(5, "br");
    \u0275\u0275domElementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "p", 32);
    \u0275\u0275text(9, "Cette action est irr\xE9versible. Toutes les donn\xE9es actuelles seront \xE9cras\xE9es.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 33)(11, "button", 34);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_47_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRestore());
    });
    \u0275\u0275text(12, "Annuler");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "button", 35);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_47_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doRestore());
    });
    \u0275\u0275domElementStart(14, "span", 2);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile == null ? null : ctx_r1.selectedFile.name);
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("disabled", ctx_r1.restoring);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.restoring ? "hourglass_empty" : "restore");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.restoring ? "Restauration en cours..." : "Confirmer la restauration", " ");
  }
}
function BackupComponent_Conditional_119_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedConfigFile.name, " ");
  }
}
function BackupComponent_Conditional_119_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " S\xE9lectionner un fichier ZIP de configuration ");
  }
}
function BackupComponent_Conditional_119_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 39);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_119_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.askConfirmRestoreConfig());
    });
    \u0275\u0275domElementStart(1, "span", 2);
    \u0275\u0275text(2, "upload");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Importer cette configuration ");
    \u0275\u0275domElementEnd();
  }
}
function BackupComponent_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 17)(1, "label", 36)(2, "span", 2);
    \u0275\u0275text(3, "folder_open");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, BackupComponent_Conditional_119_Conditional_4_Template, 1, 1)(5, BackupComponent_Conditional_119_Conditional_5_Template, 1, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "input", 37);
    \u0275\u0275domListener("change", function BackupComponent_Conditional_119_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfigFileSelected($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, BackupComponent_Conditional_119_Conditional_7_Template, 4, 0, "button", 38);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedConfigFile ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedConfigFile ? 7 : -1);
  }
}
function BackupComponent_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 25)(1, "span", 40);
    \u0275\u0275text(2, "upload_file");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Vous \xEAtes sur le point d'importer la configuration depuis :");
    \u0275\u0275domElement(5, "br");
    \u0275\u0275domElementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "p");
    \u0275\u0275text(9, "Les donn\xE9es existantes seront mises \xE0 jour. Aucune suppression.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 33)(11, "button", 34);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_120_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRestoreConfig());
    });
    \u0275\u0275text(12, "Annuler");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "button", 13);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_120_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doRestoreConfig());
    });
    \u0275\u0275domElementStart(14, "span", 2);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedConfigFile == null ? null : ctx_r1.selectedConfigFile.name);
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("disabled", ctx_r1.restoringConfig);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.restoringConfig ? "hourglass_empty" : "upload");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.restoringConfig ? "Import en cours..." : "Confirmer l'import", " ");
  }
}
function BackupComponent_Conditional_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 19)(1, "span", 2);
    \u0275\u0275text(2, "build");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Maintenance (SuperAdmin) ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 22)(5, "div", 23)(6, "span", 2);
    \u0275\u0275text(7, "lock_reset");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8, " Lib\xE9rer les stocks r\xE9serv\xE9s ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 9)(10, "p", 10);
    \u0275\u0275text(11, " Remet \xE0 z\xE9ro toutes les quantit\xE9s r\xE9serv\xE9es puis les recalcule depuis les bons de commande confirm\xE9s actifs. \xC0 utiliser si des factures annul\xE9es ont laiss\xE9 du stock bloqu\xE9. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14, "info");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span");
    \u0275\u0275text(16, "Les bons de commande en \xE9tat ");
    \u0275\u0275domElementStart(17, "strong");
    \u0275\u0275text(18, "factur\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(19, " dont la facture est annul\xE9e seront automatiquement remis en \xE9tat ");
    \u0275\u0275domElementStart(20, "strong");
    \u0275\u0275text(21, "confirm\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(22, " pour \xEAtre re-facturables.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 41)(24, "button", 42);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_121_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.releaseReservations());
    });
    \u0275\u0275domElementStart(25, "span", 2);
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "button", 35);
    \u0275\u0275domListener("click", function BackupComponent_Conditional_121_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.releaseAllReservations());
    });
    \u0275\u0275domElementStart(29, "span", 2);
    \u0275\u0275text(30);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(31);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 11)(33, "span", 12);
    \u0275\u0275text(34, "warning");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "span");
    \u0275\u0275text(36, "\xAB Lib\xE9rer TOUT le stock r\xE9serv\xE9 \xBB remet \xE0 z\xE9ro sans exception, sans recalcul \u2014 \xE0 utiliser si des r\xE9servations restent bloqu\xE9es malgr\xE9 le bouton pr\xE9c\xE9dent (bons ou factures qui ne peuvent plus \xEAtre annul\xE9s directement).");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275domProperty("disabled", ctx_r1.releasingReservations);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.releasingReservations ? "hourglass_empty" : "lock_reset");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.releasingReservations ? "Lib\xE9ration en cours..." : "Lib\xE9rer les stocks r\xE9serv\xE9s", " ");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.releasingAllReservations);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.releasingAllReservations ? "hourglass_empty" : "delete_sweep");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.releasingAllReservations ? "Lib\xE9ration en cours..." : "Lib\xE9rer TOUT le stock r\xE9serv\xE9", " ");
  }
}
var BackupComponent = class _BackupComponent {
  get isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.api = `${environment.apiUrl}/api/backup`;
    this.salesApi = `${environment.apiUrl}/api/sales`;
    this.downloading = false;
    this.restoring = false;
    this.confirmRestore = false;
    this.selectedFile = null;
    this.downloadingConfig = false;
    this.restoringConfig = false;
    this.confirmRestoreConfig = false;
    this.selectedConfigFile = null;
    this.successMsg = "";
    this.errorMsg = "";
    this.releasingReservations = false;
    this.releasingAllReservations = false;
  }
  get authHeaders() {
    const token = this.authService.getToken?.() ?? localStorage.getItem("token") ?? "";
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  get companyId() {
    return this.authService.getCompanyId();
  }
  // ── DB BACKUP ──────────────────────────────────────────────
  downloadBackup() {
    this.downloading = true;
    this.clearMsgs();
    this.http.get(this.api + "/download", {
      headers: this.authHeaders,
      responseType: "blob",
      observe: "response"
    }).subscribe({
      next: (resp) => {
        this.downloading = false;
        const blob = resp.body;
        const cd = resp.headers.get("content-disposition") ?? "";
        const m = cd.match(/filename="?([^"]+)"?/);
        this.triggerDownload(blob, m ? m[1] : "blessing-backup.zip");
        this.successMsg = "Sauvegarde BD t\xE9l\xE9charg\xE9e avec succ\xE8s";
      },
      error: (e) => {
        this.downloading = false;
        this.errorMsg = this.formatError(e, "Erreur lors de la sauvegarde BD");
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    this.selectedFile = input.files?.[0] ?? null;
    this.confirmRestore = false;
    this.clearMsgs();
  }
  askConfirmRestore() {
    if (!this.selectedFile) {
      this.errorMsg = "S\xE9lectionnez un fichier ZIP";
      return;
    }
    this.confirmRestore = true;
  }
  cancelRestore() {
    this.confirmRestore = false;
    this.selectedFile = null;
    const input = document.getElementById("restore-file-input");
    if (input)
      input.value = "";
  }
  doRestore() {
    if (!this.selectedFile)
      return;
    this.restoring = true;
    this.confirmRestore = false;
    this.clearMsgs();
    const fd = new FormData();
    fd.append("file", this.selectedFile);
    this.http.post(this.api + "/restore", fd, { headers: this.authHeaders }).subscribe({
      next: (res) => {
        this.restoring = false;
        this.selectedFile = null;
        this.successMsg = res.message ?? "Restauration BD r\xE9ussie";
      },
      error: (e) => {
        this.restoring = false;
        this.errorMsg = this.formatError(e, "Erreur lors de la restauration BD");
      }
    });
  }
  // ── CONFIG BACKUP ──────────────────────────────────────────
  downloadConfigBackup() {
    this.downloadingConfig = true;
    this.clearMsgs();
    this.http.get(`${this.api}/config/download?companyId=${this.companyId}`, {
      headers: this.authHeaders,
      responseType: "blob",
      observe: "response"
    }).subscribe({
      next: (resp) => {
        this.downloadingConfig = false;
        const blob = resp.body;
        const cd = resp.headers.get("content-disposition") ?? "";
        const m = cd.match(/filename="?([^"]+)"?/);
        this.triggerDownload(blob, m ? m[1] : "blessing-config.zip");
        this.successMsg = "Sauvegarde de configuration t\xE9l\xE9charg\xE9e avec succ\xE8s";
      },
      error: (e) => {
        this.downloadingConfig = false;
        this.errorMsg = this.formatError(e, "Erreur lors de la sauvegarde de configuration");
      }
    });
  }
  onConfigFileSelected(event) {
    const input = event.target;
    this.selectedConfigFile = input.files?.[0] ?? null;
    this.confirmRestoreConfig = false;
    this.clearMsgs();
  }
  askConfirmRestoreConfig() {
    if (!this.selectedConfigFile) {
      this.errorMsg = "S\xE9lectionnez un fichier ZIP de configuration";
      return;
    }
    this.confirmRestoreConfig = true;
  }
  cancelRestoreConfig() {
    this.confirmRestoreConfig = false;
    this.selectedConfigFile = null;
    const input = document.getElementById("restore-config-input");
    if (input)
      input.value = "";
  }
  doRestoreConfig() {
    if (!this.selectedConfigFile)
      return;
    this.restoringConfig = true;
    this.confirmRestoreConfig = false;
    this.clearMsgs();
    const fd = new FormData();
    fd.append("file", this.selectedConfigFile);
    this.http.post(`${this.api}/config/restore?companyId=${this.companyId}`, fd, { headers: this.authHeaders }).subscribe({
      next: (res) => {
        this.restoringConfig = false;
        this.selectedConfigFile = null;
        this.successMsg = res.message ?? "Configuration restaur\xE9e avec succ\xE8s";
      },
      error: (e) => {
        this.restoringConfig = false;
        this.errorMsg = this.formatError(e, "Erreur lors de la restauration de configuration");
      }
    });
  }
  // ── MAINTENANCE ────────────────────────────────────────────
  releaseReservations() {
    if (!confirm("Recalculer et lib\xE9rer les r\xE9servations de stock orphelines ?\nCette action remet toutes les r\xE9servations \xE0 z\xE9ro puis les recalcule depuis les bons confirm\xE9s actifs."))
      return;
    this.releasingReservations = true;
    this.clearMsgs();
    this.http.post(`${this.salesApi}/fix-reservations?companyId=${this.companyId}`, null, { headers: this.authHeaders, responseType: "text" }).subscribe({
      next: (msg) => {
        this.releasingReservations = false;
        this.successMsg = msg || "R\xE9servations lib\xE9r\xE9es avec succ\xE8s";
      },
      error: (e) => {
        this.releasingReservations = false;
        this.errorMsg = this.formatError(e, "Erreur lors de la lib\xE9ration");
      }
    });
  }
  releaseAllReservations() {
    if (!confirm("Lib\xE9rer TOUTES les r\xE9servations de stock, sans recalcul ?\n\xC0 utiliser si le bouton pr\xE9c\xE9dent ne suffit pas \xE0 d\xE9bloquer des r\xE9servations rest\xE9es bloqu\xE9es (bons ou factures qui ne peuvent plus \xEAtre annul\xE9s). Cette action remet \xE0 z\xE9ro toutes les r\xE9servations, sans exception."))
      return;
    this.releasingAllReservations = true;
    this.clearMsgs();
    this.http.post(`${this.salesApi}/release-all-reservations?companyId=${this.companyId}`, null, { headers: this.authHeaders, responseType: "text" }).subscribe({
      next: (msg) => {
        this.releasingAllReservations = false;
        this.successMsg = msg || "Toutes les r\xE9servations ont \xE9t\xE9 lib\xE9r\xE9es";
      },
      error: (e) => {
        this.releasingAllReservations = false;
        this.errorMsg = this.formatError(e, "Erreur lors de la lib\xE9ration");
      }
    });
  }
  // ── UTILS ──────────────────────────────────────────────────
  triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
  clearMsgs() {
    this.successMsg = "";
    this.errorMsg = "";
  }
  /** Priorité à err.error.message (forme envoyée par LicenseEnforcementFilter en cas de licence
   *  bloquée/expirée), puis err.error.error (forme des contrôleurs de ce fichier) — sans ce
   *  premier cas, un blocage de licence retombait sur err.message, le texte brut Angular
   *  ("Http failure response for ... : 403 OK"), illisible pour l'utilisateur. Les requêtes en
   *  responseType:'text' reçoivent err.error comme une chaîne brute (pas un objet parsé) même
   *  pour une erreur JSON — on tente donc un JSON.parse avant de retomber sur la chaîne telle quelle. */
  formatError(e, fallback) {
    let body = e.error;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e2) {
      }
    }
    const msg = (typeof body === "object" && body ? body.message || body.error : body) || fallback;
    const contact = typeof body === "object" && body ? [body.contactEmail, body.contactPhone].filter(Boolean).join(" / ") : "";
    return contact ? `${msg} (Contact : ${contact})` : msg;
  }
  static {
    this.\u0275fac = function BackupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BackupComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BackupComponent, selectors: [["app-backup"]], decls: 122, vars: 13, consts: [[1, "backup-page"], [1, "page-title"], [1, "material-icons"], [1, "page-subtitle"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "section-label"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-desc"], [1, "info-row"], [1, "material-icons", "info-icon"], [1, "btn-primary", 3, "click", "disabled"], [1, "card", "card-danger"], [1, "card-header", "danger"], [1, "warning-banner"], [1, "file-section"], [1, "confirm-box"], [1, "section-label", 2, "margin-top", "36px"], [1, "config-domains"], [1, "domain-chip"], [1, "card", "card-warning"], [1, "card-header", "warning-header"], [1, "warning-banner", 2, "margin-top", "12px"], [1, "confirm-box", "confirm-box-blue"], [1, "btn-close-alert", 3, "click"], ["for", "restore-file-input", 1, "file-label"], ["id", "restore-file-input", "type", "file", "accept", ".zip", 1, "file-input", 3, "change"], [1, "btn-danger"], [1, "btn-danger", 3, "click"], [1, "material-icons", "confirm-icon"], [1, "confirm-warn"], [1, "confirm-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-danger", 3, "click", "disabled"], ["for", "restore-config-input", 1, "file-label"], ["id", "restore-config-input", "type", "file", "accept", ".zip", 1, "file-input", 3, "change"], [1, "btn-primary"], [1, "btn-primary", 3, "click"], [1, "material-icons", "confirm-icon-blue"], [1, "btn-row"], [1, "btn-warning", 3, "click", "disabled"]], template: function BackupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "backup");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(4, " Sauvegarde & Restauration ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6, " T\xE9l\xE9chargez une sauvegarde compl\xE8te de la base de donn\xE9es ou exportez uniquement le param\xE9trage m\xE9tier. ");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(7, BackupComponent_Conditional_7_Template, 6, 1, "div", 4);
        \u0275\u0275conditionalCreate(8, BackupComponent_Conditional_8_Template, 6, 1, "div", 5);
        \u0275\u0275domElementStart(9, "div", 6)(10, "span", 2);
        \u0275\u0275text(11, "storage");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(12, " Sauvegarde compl\xE8te de la base de donn\xE9es ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "div", 7)(14, "div", 8)(15, "span", 2);
        \u0275\u0275text(16, "cloud_download");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(17, " Cr\xE9er une sauvegarde BD ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(18, "div", 9)(19, "p", 10);
        \u0275\u0275text(20, " G\xE9n\xE8re un fichier ZIP contenant l'int\xE9gralit\xE9 de la base de donn\xE9es (toutes les transactions, stocks, comptabilit\xE9, historique complet). ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(21, "div", 11)(22, "span", 12);
        \u0275\u0275text(23, "info");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(24, "span");
        \u0275\u0275text(25, "Inclut : toutes les donn\xE9es (ventes, achats, stock, comptabilit\xE9, utilisateurs), configuration et journaux de synchronisation.");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(26, "button", 13);
        \u0275\u0275domListener("click", function BackupComponent_Template_button_click_26_listener() {
          return ctx.downloadBackup();
        });
        \u0275\u0275domElementStart(27, "span", 2);
        \u0275\u0275text(28);
        \u0275\u0275domElementEnd();
        \u0275\u0275text(29);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(30, "div", 14)(31, "div", 15)(32, "span", 2);
        \u0275\u0275text(33, "restore");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(34, " Restaurer la base de donn\xE9es ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(35, "div", 9)(36, "div", 16)(37, "span", 2);
        \u0275\u0275text(38, "warning");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(39, "div")(40, "strong");
        \u0275\u0275text(41, "Attention :");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(42, " Cette op\xE9ration remplace ");
        \u0275\u0275domElementStart(43, "strong");
        \u0275\u0275text(44, "toutes les donn\xE9es actuelles");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(45, " par celles du fichier de sauvegarde. Apr\xE8s la restauration, rechargez la page. ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(46, BackupComponent_Conditional_46_Template, 8, 2, "div", 17);
        \u0275\u0275conditionalCreate(47, BackupComponent_Conditional_47_Template, 17, 4, "div", 18);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(48, "div", 19)(49, "span", 2);
        \u0275\u0275text(50, "tune");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(51, " Sauvegarde du param\xE9trage m\xE9tier ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(52, "div", 7)(53, "div", 8)(54, "span", 2);
        \u0275\u0275text(55, "settings_backup_restore");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(56, " Exporter la configuration ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(57, "div", 9)(58, "p", 10);
        \u0275\u0275text(59, " Exporte uniquement le param\xE9trage m\xE9tier dans un fichier ZIP portable et l\xE9ger. Id\xE9al pour migrer la configuration vers une nouvelle instance ou la sauvegarder s\xE9par\xE9ment. ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(60, "div", 20)(61, "span", 21)(62, "span", 2);
        \u0275\u0275text(63, "account_balance");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(64, " Plan comptable");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(65, "span", 21)(66, "span", 2);
        \u0275\u0275text(67, "book");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(68, " Journaux comptables");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(69, "span", 21)(70, "span", 2);
        \u0275\u0275text(71, "people");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(72, " Clients & Fournisseurs");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(73, "span", 21)(74, "span", 2);
        \u0275\u0275text(75, "sell");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(76, " Prix pr\xE9f\xE9rentiels");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(77, "span", 21)(78, "span", 2);
        \u0275\u0275text(79, "local_shipping");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(80, " Frais d'enl\xE8vement");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(81, "span", 21)(82, "span", 2);
        \u0275\u0275text(83, "discount");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(84, " Ristournes");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(85, "span", 21)(86, "span", 2);
        \u0275\u0275text(87, "inventory_2");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(88, " Produits & Cat\xE9gories");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(89, "span", 21)(90, "span", 2);
        \u0275\u0275text(91, "manage_accounts");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(92, " Utilisateurs & R\xF4les");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(93, "button", 13);
        \u0275\u0275domListener("click", function BackupComponent_Template_button_click_93_listener() {
          return ctx.downloadConfigBackup();
        });
        \u0275\u0275domElementStart(94, "span", 2);
        \u0275\u0275text(95);
        \u0275\u0275domElementEnd();
        \u0275\u0275text(96);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(97, "div", 22)(98, "div", 23)(99, "span", 2);
        \u0275\u0275text(100, "upload_file");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(101, " Importer une configuration ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(102, "div", 9)(103, "div", 11)(104, "span", 12);
        \u0275\u0275text(105, "info");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(106, "span");
        \u0275\u0275text(107, "La restauration est ");
        \u0275\u0275domElementStart(108, "strong");
        \u0275\u0275text(109, "additive");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(110, " : les entr\xE9es existantes sont mises \xE0 jour, les nouvelles sont cr\xE9\xE9es. Aucune donn\xE9e transactionnelle n'est supprim\xE9e.");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(111, "div", 24)(112, "span", 2);
        \u0275\u0275text(113, "person_add");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(114, "div");
        \u0275\u0275text(115, "Les nouveaux utilisateurs import\xE9s re\xE7oivent le mot de passe temporaire ");
        \u0275\u0275domElementStart(116, "strong");
        \u0275\u0275text(117, "BlessingChange@2025!");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(118, " avec obligation de le changer \xE0 la premi\xE8re connexion.");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(119, BackupComponent_Conditional_119_Template, 8, 2, "div", 17);
        \u0275\u0275conditionalCreate(120, BackupComponent_Conditional_120_Template, 17, 4, "div", 25);
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(121, BackupComponent_Conditional_121_Template, 37, 6);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.successMsg ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 8 : -1);
        \u0275\u0275advance(18);
        \u0275\u0275domProperty("disabled", ctx.downloading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.downloading ? "hourglass_empty" : "download");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.downloading ? "G\xE9n\xE9ration en cours..." : "T\xE9l\xE9charger la sauvegarde BD", " ");
        \u0275\u0275advance(17);
        \u0275\u0275conditional(!ctx.confirmRestore ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmRestore ? 47 : -1);
        \u0275\u0275advance(46);
        \u0275\u0275domProperty("disabled", ctx.downloadingConfig);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.downloadingConfig ? "hourglass_empty" : "download");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.downloadingConfig ? "Export en cours..." : "T\xE9l\xE9charger la configuration", " ");
        \u0275\u0275advance(23);
        \u0275\u0275conditional(!ctx.confirmRestoreConfig ? 119 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmRestoreConfig ? 120 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSuperAdmin ? 121 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n.backup-page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  padding: 28px 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--text-primary, #1a202c);\n  margin-bottom: 6px;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary, #2563eb);\n  font-size: 1.5rem;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted, #64748b);\n  font-size: 0.93rem;\n  margin-bottom: 24px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  font-size: 0.9rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.alert.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.alert.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.btn-close-alert[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n}\n.btn-close-alert[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--surface, #fff);\n  border-radius: 12px;\n  border: 1px solid var(--border, #e2e8f0);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.card.card-danger[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 20px;\n  font-weight: 600;\n  font-size: 0.97rem;\n  background: var(--surface-raised, #f8fafc);\n  border-bottom: 1px solid var(--border, #e2e8f0);\n  color: var(--text-primary, #1a202c);\n}\n.card-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--primary, #2563eb);\n}\n.card-header.danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted, #64748b);\n  font-size: 0.9rem;\n  margin-bottom: 16px;\n  line-height: 1.55;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.87rem;\n  color: #1e40af;\n  margin-bottom: 20px;\n}\n.info-row[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.warning-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 0.88rem;\n  color: #92400e;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.warning-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ea580c;\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  margin-top: 1px;\n}\n.file-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.file-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border: 2px dashed var(--border, #cbd5e1);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--text-muted, #64748b);\n  transition: border-color 0.15s, color 0.15s;\n}\n.file-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.file-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #2563eb);\n  color: var(--primary, #2563eb);\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.confirm-box[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  border: 1px solid #fecdd3;\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n}\n.confirm-box[_ngcontent-%COMP%]   .confirm-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #dc2626;\n  display: block;\n  margin-bottom: 10px;\n}\n.confirm-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #374151;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n.confirm-box[_ngcontent-%COMP%]   .confirm-warn[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 600;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: var(--primary, #2563eb);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: var(--surface, #fff);\n  color: var(--text-primary, #374151);\n  border: 1px solid var(--border, #cbd5e1);\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--surface-raised, #f1f5f9);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-danger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted, #64748b);\n  margin-bottom: 12px;\n}\n.section-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.card-warning[_ngcontent-%COMP%] {\n  border-color: #fde68a;\n}\n.card-header.warning-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.config-domains[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.domain-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  color: #1e40af;\n}\n.domain-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: #d97706;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-warning[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.confirm-box-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n}\n.confirm-box-blue[_ngcontent-%COMP%]   .confirm-icon-blue[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #2563eb;\n  display: block;\n  margin-bottom: 10px;\n}\n.confirm-box-blue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #374151;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=backup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackupComponent, [{
    type: Component,
    args: [{ selector: "app-backup", standalone: true, imports: [CommonModule], template: `<div class="backup-page">
  <div class="page-title">
    <span class="material-icons">backup</span>
    Sauvegarde &amp; Restauration
  </div>
  <p class="page-subtitle">
    T\xE9l\xE9chargez une sauvegarde compl\xE8te de la base de donn\xE9es ou exportez uniquement le param\xE9trage m\xE9tier.
  </p>

  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span> {{ successMsg }}
      <button class="btn-close-alert" (click)="successMsg = ''">\xD7</button>
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-error">
      <span class="material-icons">error</span> {{ errorMsg }}
      <button class="btn-close-alert" (click)="errorMsg = ''">\xD7</button>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- SAUVEGARDE BASE DE DONN\xC9ES                                 -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="section-label">
    <span class="material-icons">storage</span>
    Sauvegarde compl\xE8te de la base de donn\xE9es
  </div>

  <div class="card">
    <div class="card-header">
      <span class="material-icons">cloud_download</span>
      Cr\xE9er une sauvegarde BD
    </div>
    <div class="card-body">
      <p class="card-desc">
        G\xE9n\xE8re un fichier ZIP contenant l'int\xE9gralit\xE9 de la base de donn\xE9es (toutes les transactions,
        stocks, comptabilit\xE9, historique complet).
      </p>
      <div class="info-row">
        <span class="material-icons info-icon">info</span>
        <span>Inclut : toutes les donn\xE9es (ventes, achats, stock, comptabilit\xE9, utilisateurs), configuration et journaux de synchronisation.</span>
      </div>
      <button class="btn-primary" (click)="downloadBackup()" [disabled]="downloading">
        <span class="material-icons">{{ downloading ? 'hourglass_empty' : 'download' }}</span>
        {{ downloading ? 'G\xE9n\xE9ration en cours...' : 'T\xE9l\xE9charger la sauvegarde BD' }}
      </button>
    </div>
  </div>

  <div class="card card-danger">
    <div class="card-header danger">
      <span class="material-icons">restore</span>
      Restaurer la base de donn\xE9es
    </div>
    <div class="card-body">
      <div class="warning-banner">
        <span class="material-icons">warning</span>
        <div>
          <strong>Attention :</strong> Cette op\xE9ration remplace <strong>toutes les donn\xE9es actuelles</strong> par celles du fichier de sauvegarde.
          Apr\xE8s la restauration, rechargez la page.
        </div>
      </div>

      @if (!confirmRestore) {
        <div class="file-section">
          <label class="file-label" for="restore-file-input">
            <span class="material-icons">folder_open</span>
            @if (selectedFile) { {{ selectedFile.name }} } @else { S\xE9lectionner un fichier ZIP de sauvegarde }
          </label>
          <input id="restore-file-input" type="file" accept=".zip"
                 class="file-input" (change)="onFileSelected($event)" />
          @if (selectedFile) {
            <button class="btn-danger" (click)="askConfirmRestore()">
              <span class="material-icons">restore</span>
              Restaurer depuis ce fichier
            </button>
          }
        </div>
      }

      @if (confirmRestore) {
        <div class="confirm-box">
          <span class="material-icons confirm-icon">warning</span>
          <p>Vous \xEAtes sur le point de restaurer la base de donn\xE9es depuis :<br>
            <strong>{{ selectedFile?.name }}</strong></p>
          <p class="confirm-warn">Cette action est irr\xE9versible. Toutes les donn\xE9es actuelles seront \xE9cras\xE9es.</p>
          <div class="confirm-actions">
            <button class="btn-secondary" (click)="cancelRestore()">Annuler</button>
            <button class="btn-danger" (click)="doRestore()" [disabled]="restoring">
              <span class="material-icons">{{ restoring ? 'hourglass_empty' : 'restore' }}</span>
              {{ restoring ? 'Restauration en cours...' : 'Confirmer la restauration' }}
            </button>
          </div>
        </div>
      }
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- SAUVEGARDE CONFIGURATION M\xC9TIER                            -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="section-label" style="margin-top: 36px;">
    <span class="material-icons">tune</span>
    Sauvegarde du param\xE9trage m\xE9tier
  </div>

  <div class="card">
    <div class="card-header">
      <span class="material-icons">settings_backup_restore</span>
      Exporter la configuration
    </div>
    <div class="card-body">
      <p class="card-desc">
        Exporte uniquement le param\xE9trage m\xE9tier dans un fichier ZIP portable et l\xE9ger.
        Id\xE9al pour migrer la configuration vers une nouvelle instance ou la sauvegarder s\xE9par\xE9ment.
      </p>
      <div class="config-domains">
        <span class="domain-chip"><span class="material-icons">account_balance</span> Plan comptable</span>
        <span class="domain-chip"><span class="material-icons">book</span> Journaux comptables</span>
        <span class="domain-chip"><span class="material-icons">people</span> Clients &amp; Fournisseurs</span>
        <span class="domain-chip"><span class="material-icons">sell</span> Prix pr\xE9f\xE9rentiels</span>
        <span class="domain-chip"><span class="material-icons">local_shipping</span> Frais d'enl\xE8vement</span>
        <span class="domain-chip"><span class="material-icons">discount</span> Ristournes</span>
        <span class="domain-chip"><span class="material-icons">inventory_2</span> Produits &amp; Cat\xE9gories</span>
        <span class="domain-chip"><span class="material-icons">manage_accounts</span> Utilisateurs &amp; R\xF4les</span>
      </div>
      <button class="btn-primary" (click)="downloadConfigBackup()" [disabled]="downloadingConfig">
        <span class="material-icons">{{ downloadingConfig ? 'hourglass_empty' : 'download' }}</span>
        {{ downloadingConfig ? 'Export en cours...' : 'T\xE9l\xE9charger la configuration' }}
      </button>
    </div>
  </div>

  <div class="card card-warning">
    <div class="card-header warning-header">
      <span class="material-icons">upload_file</span>
      Importer une configuration
    </div>
    <div class="card-body">
      <div class="info-row">
        <span class="material-icons info-icon">info</span>
        <span>La restauration est <strong>additive</strong> : les entr\xE9es existantes sont mises \xE0 jour, les nouvelles sont cr\xE9\xE9es.
          Aucune donn\xE9e transactionnelle n'est supprim\xE9e.</span>
      </div>
      <div class="warning-banner" style="margin-top: 12px;">
        <span class="material-icons">person_add</span>
        <div>Les nouveaux utilisateurs import\xE9s re\xE7oivent le mot de passe temporaire
          <strong>BlessingChange&#64;2025!</strong> avec obligation de le changer \xE0 la premi\xE8re connexion.</div>
      </div>

      @if (!confirmRestoreConfig) {
        <div class="file-section">
          <label class="file-label" for="restore-config-input">
            <span class="material-icons">folder_open</span>
            @if (selectedConfigFile) { {{ selectedConfigFile.name }} }
            @else { S\xE9lectionner un fichier ZIP de configuration }
          </label>
          <input id="restore-config-input" type="file" accept=".zip"
                 class="file-input" (change)="onConfigFileSelected($event)" />
          @if (selectedConfigFile) {
            <button class="btn-primary" (click)="askConfirmRestoreConfig()">
              <span class="material-icons">upload</span>
              Importer cette configuration
            </button>
          }
        </div>
      }

      @if (confirmRestoreConfig) {
        <div class="confirm-box confirm-box-blue">
          <span class="material-icons confirm-icon-blue">upload_file</span>
          <p>Vous \xEAtes sur le point d'importer la configuration depuis :<br>
            <strong>{{ selectedConfigFile?.name }}</strong></p>
          <p>Les donn\xE9es existantes seront mises \xE0 jour. Aucune suppression.</p>
          <div class="confirm-actions">
            <button class="btn-secondary" (click)="cancelRestoreConfig()">Annuler</button>
            <button class="btn-primary" (click)="doRestoreConfig()" [disabled]="restoringConfig">
              <span class="material-icons">{{ restoringConfig ? 'hourglass_empty' : 'upload' }}</span>
              {{ restoringConfig ? 'Import en cours...' : "Confirmer l'import" }}
            </button>
          </div>
        </div>
      }
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- MAINTENANCE (SUPERADMIN uniquement)                        -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (isSuperAdmin) {
    <div class="section-label" style="margin-top: 36px;">
      <span class="material-icons">build</span>
      Maintenance (SuperAdmin)
    </div>

    <div class="card card-warning">
      <div class="card-header warning-header">
        <span class="material-icons">lock_reset</span>
        Lib\xE9rer les stocks r\xE9serv\xE9s
      </div>
      <div class="card-body">
        <p class="card-desc">
          Remet \xE0 z\xE9ro toutes les quantit\xE9s r\xE9serv\xE9es puis les recalcule depuis les bons de commande
          confirm\xE9s actifs. \xC0 utiliser si des factures annul\xE9es ont laiss\xE9 du stock bloqu\xE9.
        </p>
        <div class="info-row">
          <span class="material-icons info-icon">info</span>
          <span>Les bons de commande en \xE9tat <strong>factur\xE9</strong> dont la facture est annul\xE9e seront
          automatiquement remis en \xE9tat <strong>confirm\xE9</strong> pour \xEAtre re-facturables.</span>
        </div>
        <div class="btn-row">
          <button class="btn-warning" (click)="releaseReservations()" [disabled]="releasingReservations">
            <span class="material-icons">{{ releasingReservations ? 'hourglass_empty' : 'lock_reset' }}</span>
            {{ releasingReservations ? 'Lib\xE9ration en cours...' : 'Lib\xE9rer les stocks r\xE9serv\xE9s' }}
          </button>
          <button class="btn-danger" (click)="releaseAllReservations()" [disabled]="releasingAllReservations">
            <span class="material-icons">{{ releasingAllReservations ? 'hourglass_empty' : 'delete_sweep' }}</span>
            {{ releasingAllReservations ? 'Lib\xE9ration en cours...' : 'Lib\xE9rer TOUT le stock r\xE9serv\xE9' }}
          </button>
        </div>
        <div class="info-row">
          <span class="material-icons info-icon">warning</span>
          <span>\xAB Lib\xE9rer TOUT le stock r\xE9serv\xE9 \xBB remet \xE0 z\xE9ro sans exception, sans recalcul \u2014 \xE0 utiliser
          si des r\xE9servations restent bloqu\xE9es malgr\xE9 le bouton pr\xE9c\xE9dent (bons ou factures qui ne
          peuvent plus \xEAtre annul\xE9s directement).</span>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/modules/config/components/backup/backup.component.scss */\n.backup-page {\n  max-width: 760px;\n  padding: 28px 24px;\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--text-primary, #1a202c);\n  margin-bottom: 6px;\n}\n.page-title .material-icons {\n  color: var(--primary, #2563eb);\n  font-size: 1.5rem;\n}\n.page-subtitle {\n  color: var(--text-muted, #64748b);\n  font-size: 0.93rem;\n  margin-bottom: 24px;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  font-size: 0.9rem;\n}\n.alert.alert-success {\n  background: #dcfce7;\n  color: #166534;\n}\n.alert.alert-success .material-icons {\n  color: #16a34a;\n}\n.alert.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.alert.alert-error .material-icons {\n  color: #dc2626;\n}\n.btn-close-alert {\n  margin-left: auto;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n}\n.btn-close-alert:hover {\n  opacity: 1;\n}\n.card {\n  background: var(--surface, #fff);\n  border-radius: 12px;\n  border: 1px solid var(--border, #e2e8f0);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.card.card-danger {\n  border-color: #fca5a5;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 20px;\n  font-weight: 600;\n  font-size: 0.97rem;\n  background: var(--surface-raised, #f8fafc);\n  border-bottom: 1px solid var(--border, #e2e8f0);\n  color: var(--text-primary, #1a202c);\n}\n.card-header .material-icons {\n  font-size: 1.1rem;\n  color: var(--primary, #2563eb);\n}\n.card-header.danger .material-icons {\n  color: #dc2626;\n}\n.card-body {\n  padding: 20px;\n}\n.card-desc {\n  color: var(--text-muted, #64748b);\n  font-size: 0.9rem;\n  margin-bottom: 16px;\n  line-height: 1.55;\n}\n.info-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.87rem;\n  color: #1e40af;\n  margin-bottom: 20px;\n}\n.info-row .info-icon {\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.warning-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 0.88rem;\n  color: #92400e;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.warning-banner .material-icons {\n  color: #ea580c;\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  margin-top: 1px;\n}\n.file-section {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.file-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border: 2px dashed var(--border, #cbd5e1);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--text-muted, #64748b);\n  transition: border-color 0.15s, color 0.15s;\n}\n.file-label .material-icons {\n  font-size: 1.1rem;\n}\n.file-label:hover {\n  border-color: var(--primary, #2563eb);\n  color: var(--primary, #2563eb);\n}\n.file-input {\n  display: none;\n}\n.confirm-box {\n  background: #fff1f2;\n  border: 1px solid #fecdd3;\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n}\n.confirm-box .confirm-icon {\n  font-size: 2.5rem;\n  color: #dc2626;\n  display: block;\n  margin-bottom: 10px;\n}\n.confirm-box p {\n  font-size: 0.92rem;\n  color: #374151;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n.confirm-box .confirm-warn {\n  color: #991b1b;\n  font-weight: 600;\n}\n.confirm-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 16px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: var(--primary, #2563eb);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 1rem;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: var(--surface, #fff);\n  color: var(--text-primary, #374151);\n  border: 1px solid var(--border, #cbd5e1);\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-secondary:hover {\n  background: var(--surface-raised, #f1f5f9);\n}\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-danger .material-icons {\n  font-size: 1rem;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.section-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted, #64748b);\n  margin-bottom: 12px;\n}\n.section-label .material-icons {\n  font-size: 1rem;\n}\n.card-warning {\n  border-color: #fde68a;\n}\n.card-header.warning-header .material-icons {\n  color: #d97706;\n}\n.config-domains {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.domain-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  color: #1e40af;\n}\n.domain-chip .material-icons {\n  font-size: 0.9rem;\n}\n.btn-warning {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: #d97706;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-warning .material-icons {\n  font-size: 1rem;\n}\n.btn-warning:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-warning:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.confirm-box-blue {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n}\n.confirm-box-blue .confirm-icon-blue {\n  font-size: 2.5rem;\n  color: #2563eb;\n  display: block;\n  margin-bottom: 10px;\n}\n.confirm-box-blue p {\n  font-size: 0.92rem;\n  color: #374151;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=backup.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BackupComponent, { className: "BackupComponent", filePath: "app/modules/config/components/backup/backup.component.ts", lineNumber: 14 });
})();
export {
  BackupComponent
};
//# sourceMappingURL=chunk-GTLHND5Y.js.map
