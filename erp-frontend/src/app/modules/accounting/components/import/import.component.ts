import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountingService } from '../../services/accounting.service';
import { AnalyticService } from '../../services/analytic.service';
import { PrecompteService } from '../../../../shared/services/precompte.service';
import { StockService } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ImportResult } from '../../../../core/models/import-result.model';
import { parseExcelFile, exportRowsToExcel, yesNo, RowSelection } from '../../../../core/utils/excel-import.util';
import { accountImportType } from '../../../../core/utils/account-import-type';

/**
 * Export des données existantes au format relu par l'import de l'onglet : on coche des lignes,
 * on exporte, on modifie le fichier, on le réimporte → mise à jour (clé : id, code ou nom selon
 * l'onglet) au lieu de créer des doublons.
 */
interface ExportDef {
  load: () => Observable<any[]>;
  headers: string[];
  row: (item: any) => unknown[];
  /** Colonnes affichées dans la liste de sélection. */
  code: (item: any) => string;
  label: (item: any) => string;
  fileName: string;
  /** Clé de mise à jour expliquée à l'utilisateur. */
  keyHint: string;
}

interface ImportTab {
  id: string;
  label: string;
  icon: string;
  description: string;
  warning?: string;
  /** Colonnes à afficher en prévisualisation (dans l'ordre) */
  previewCols: { key: string; label: string }[];
  action: (file: File, companyId: number) => any;
  /** Action de téléchargement du modèle (optionnel) */
  templateAction?: () => any;
  templateFilename?: string;
  exportDef?: ExportDef;
}

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './import.component.html',
  styleUrl: './import.component.scss'
})
export class ImportComponent {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  activeTab = 'accounts';
  importing = false;
  result: ImportResult | null = null;
  errorMsg = '';
  selectedFileName = '';

  // ── Prévisualisation ──────────────────────────────────────────────────────
  showPreview   = false;
  previewRows   : Record<string, any>[] = [];
  previewCols   : { key: string; label: string }[] = [];
  previewHeaders: string[] = [];   // toutes les colonnes détectées dans le fichier
  pendingFile   : File | null = null;
  previewLoading = false;
  readonly PREVIEW_MAX = 100;

  tabs: ImportTab[] = [
    {
      id: 'accounts',
      label: 'Plan comptable',
      icon: 'account_tree',
      description: 'Importez le plan comptable depuis un fichier Excel Odoo (Compte - account.account). À faire EN PREMIER. L\'import remplace intégralement le plan comptable existant.',
      previewCols: [
        { key: 'code',         label: 'Code' },
        { key: 'name',         label: 'Intitulé' },
        { key: 'account_type', label: 'Type' },
        { key: 'deprecated',   label: 'Obsolète' },
        { key: 'reconcile',    label: 'Lettrage' },
      ],
      action: (f, c) => this.accountingService.importAccounts(f, c, true),
      templateAction: () => this.accountingService.downloadAccountsTemplate(),
      templateFilename: 'modele_plan_comptable.xlsx',
      exportDef: {
        load: () => this.accountingService.getAccounts(this.companyId),
        headers: ['code', 'name', 'account_type', 'reconcile'],
        row: a => [a.code, a.name, accountImportType(a.accountType, a.internalType), yesNo(a.reconcile)],
        code: a => a.code, label: a => a.name,
        fileName: 'export_plan_comptable',
        keyHint: 'la mise à jour se fait sur le code du compte',
      },
    },
    {
      id: 'analytic',
      label: 'Comptes analytiques',
      icon: 'analytics',
      description: 'Importez les comptes analytiques depuis un fichier Excel Odoo.',
      previewCols: [
        { key: 'code',      label: 'Code' },
        { key: 'name',      label: 'Intitulé' },
        { key: 'parent_id', label: 'Parent' },
      ],
      action: (f, c) => this.accountingService.importAnalyticAccounts(f, c),
      exportDef: {
        load: () => this.analyticService.getAccounts(this.companyId),
        headers: ['code', 'name', 'description', 'parent_id'],
        row: a => [a.code, a.name, a.description, a.parentCode ?? ''],
        code: a => a.code, label: a => a.name,
        fileName: 'export_comptes_analytiques',
        keyHint: 'la mise à jour se fait sur le code',
      },
    },
    {
      id: 'partners',
      label: 'Contacts / Partenaires',
      icon: 'people',
      description: 'Importez les contacts depuis un fichier Excel Odoo (Contact - res.partner).',
      previewCols: [
        { key: 'name',   label: 'Nom' },
        { key: 'ref',    label: 'Référence' },
        { key: 'phone',  label: 'Téléphone' },
        { key: 'email',  label: 'Email' },
        { key: 'street', label: 'Adresse' },
      ],
      action: (f, c) => this.accountingService.importPartners(f, c),
      exportDef: {
        load: () => this.accountingService.getPartners(this.companyId),
        headers: ['id', 'name', 'ref', 'phone', 'email', 'street', 'Type'],
        row: p => [p.id, p.name, p.ref, p.phone, p.email, p.address, p.type],
        code: p => p.ref || '', label: p => p.name,
        fileName: 'export_contacts',
        keyHint: 'la mise à jour se fait sur la colonne id (puis référence, puis nom)',
      },
    },
    {
      id: 'journals',
      label: 'Journaux',
      icon: 'book',
      description: 'Importez les journaux depuis un fichier Excel Odoo (Journal - account.journal).',
      warning: 'Le plan comptable doit être importé avant les journaux.',
      previewCols: [
        { key: 'code',               label: 'Code' },
        { key: 'name',               label: 'Nom' },
        { key: 'type',               label: 'Type' },
        { key: 'default_account_id', label: 'Compte par défaut' },
      ],
      action: (f, c) => this.accountingService.importJournals(f, c),
      templateAction: () => this.accountingService.downloadJournalsTemplate(),
      templateFilename: 'modele_journaux.xlsx',
      exportDef: {
        load: () => this.accountingService.getJournals(this.companyId),
        headers: ['id', 'code', 'name', 'type', 'default_account_id'],
        row: j => [j.id, j.code, j.name, j.type, j.defaultDebitAccountCode ?? j.defaultCreditAccountCode ?? ''],
        code: j => j.code, label: j => j.name,
        fileName: 'export_journaux',
        keyHint: 'la mise à jour se fait sur la colonne id (puis code)',
      },
    },
    {
      id: 'precomptes',
      label: 'Précomptes',
      icon: 'percent',
      description: 'Importez les précomptes (retenues à la source) depuis un fichier Excel Odoo (account.precompte). Colonnes attendues : partner_id (nom du partenaire), type_precompte (sale / purchase), taux_precompte.',
      previewCols: [
        { key: 'partner_id',      label: 'Partenaire' },
        { key: 'type_precompte',  label: 'Type' },
        { key: 'taux_precompte',  label: 'Taux (%)' },
      ],
      action: (f, c) => this.accountingService.importPrecomptes(f, c),
      exportDef: {
        load: () => this.precompteService.getAllPrecomptes(this.companyId),
        headers: ['partner_id', 'type_precompte', 'taux_precompte'],
        row: p => [p.partnerName, p.typePrecompte, p.tauxPrecompte],
        code: p => p.typePrecompte === 'sale' ? 'Ventes' : 'Achats', label: p => `${p.partnerName} — ${p.tauxPrecompte} %`,
        fileName: 'export_precomptes',
        keyHint: 'la mise à jour se fait sur le partenaire + le type',
      },
    },
    {
      id: 'warehouses',
      label: 'Entrepôts',
      icon: 'warehouse',
      description: 'Importez les entrepôts depuis un fichier Excel Odoo (stock.warehouse). Colonnes attendues : name, code.',
      previewCols: [
        { key: 'name',   label: 'Nom' },
        { key: 'code',   label: 'Code' },
        { key: 'active', label: 'Actif' },
      ],
      action: (f, c) => this.accountingService.importWarehouses(f, c),
      templateAction: () => this.accountingService.downloadWarehousesTemplate(),
      templateFilename: 'modele_entrepots.xlsx',
      exportDef: {
        load: () => this.stockService.getWarehouses(this.companyId),
        headers: ['id', 'name', 'code', 'active'],
        row: w => [w.id, w.name, w.code, yesNo(w.active !== false)],
        code: w => w.code, label: w => w.name,
        fileName: 'export_entrepots',
        keyHint: 'la mise à jour se fait sur la colonne id (puis code)',
      },
    }
  ];

  journalTypes = [
    { value: 'sale',     label: 'Vente',              icon: 'shopping_cart',   color: '#4caf50' },
    { value: 'purchase', label: 'Achat',               icon: 'local_shipping',  color: '#ff9800' },
    { value: 'cash',     label: 'Caisse / Espèces',    icon: 'payments',        color: '#2196f3' },
    { value: 'bank',     label: 'Banque',              icon: 'account_balance', color: '#9c27b0' },
    { value: 'general',  label: 'Opérations diverses', icon: 'sync_alt',        color: '#607d8b' }
  ];

  // ── Export des données existantes ────────────────────────────────────────
  exportItems: any[] = [];
  exportLoaded = false;
  exportLoading = false;
  exportSearch = '';
  exportSel = new RowSelection<any>();

  constructor(
    private accountingService: AccountingService,
    private analyticService: AnalyticService,
    private precompteService: PrecompteService,
    private stockService: StockService,
    private authService: AuthService
  ) {}

  private get companyId(): number { return this.authService.getCompanyId(); }

  /** Charge les données existantes de l'onglet actif pour choisir les lignes à exporter. */
  loadExportItems(): void {
    const def = this.activeTabDef.exportDef;
    if (!def) return;
    this.exportLoading = true;
    def.load().subscribe({
      next: items => {
        // Comptes analytiques : le parent s'exporte par son code (relu par l'import).
        if (this.activeTab === 'analytic') {
          const byId = new Map(items.map(a => [a.id, a.code]));
          items = items.map(a => ({ ...a, parentCode: a.parentId ? byId.get(a.parentId) : '' }));
        }
        this.exportItems = items;
        this.exportLoaded = true;
        this.exportLoading = false;
      },
      error: () => { this.exportLoading = false; this.errorMsg = 'Impossible de charger les données à exporter.'; }
    });
  }

  get filteredExportItems(): any[] {
    const def = this.activeTabDef.exportDef;
    const q = this.exportSearch.trim().toLowerCase();
    if (!def || !q) return this.exportItems;
    return this.exportItems.filter(x =>
      String(def.code(x) ?? '').toLowerCase().includes(q) || String(def.label(x) ?? '').toLowerCase().includes(q));
  }

  exportExcel(): void {
    const def = this.activeTabDef.exportDef;
    if (!def) return;
    const rows = this.exportSel.rowsToExport(this.exportItems, this.filteredExportItems).map(def.row);
    exportRowsToExcel(def.headers, rows, def.fileName);
  }

  private resetExport(): void {
    this.exportItems = [];
    this.exportLoaded = false;
    this.exportSearch = '';
    this.exportSel.clear();
  }

  get activeTabDef(): ImportTab {
    return this.tabs.find(t => t.id === this.activeTab)!;
  }

  setTab(id: string): void {
    this.activeTab = id;
    this.resetExport();
    this.result    = null;
    this.errorMsg  = '';
    this.selectedFileName = '';
    this.closePreview();
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.value = '';
    this.fileInput.nativeElement.click();
  }

  // ── Étape 1 : lire le fichier et afficher l'aperçu ───────────────────────
  async onFileChange(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (!file) return;

    this.previewLoading   = true;
    this.result           = null;
    this.errorMsg         = '';
    this.pendingFile      = file;
    this.selectedFileName = file.name;

    try {
      const allRows = await parseExcelFile(file);

      // Détecter toutes les colonnes présentes dans le fichier
      const colSet = new Set<string>();
      allRows.forEach(r => Object.keys(r).forEach(k => colSet.add(k)));
      this.previewHeaders = Array.from(colSet);

      // Colonnes à afficher : celles définies pour l'onglet ET présentes dans le fichier
      const tabCols = this.activeTabDef.previewCols;
      this.previewCols = tabCols.filter(c =>
        this.previewHeaders.some(h => h.toLowerCase() === c.key.toLowerCase())
      );

      // Si aucune colonne cible n'est trouvée, afficher les 5 premières colonnes brutes
      if (this.previewCols.length === 0) {
        this.previewCols = this.previewHeaders.slice(0, 5).map(h => ({ key: h, label: h }));
      }

      this.previewRows = allRows.slice(0, this.PREVIEW_MAX);
      this.showPreview = true;
    } catch (e: any) {
      this.errorMsg = 'Impossible de lire le fichier : ' + e.message;
    }

    this.previewLoading = false;
  }

  // ── Étape 2 : confirmer et envoyer au backend ─────────────────────────────
  confirmImport(): void {
    if (!this.pendingFile) return;

    this.importing   = true;
    this.errorMsg    = '';
    this.result      = null;

    const companyId = this.authService.getCompanyId();
    this.activeTabDef.action(this.pendingFile, companyId).subscribe({
      next: (res: ImportResult) => {
        this.result      = res;
        this.importing   = false;
        if (this.exportLoaded) { this.exportSel.clear(); this.loadExportItems(); }
        this.showPreview = false;
        this.pendingFile = null;
        this.selectedFileName = '';
      },
      error: (err: any) => {
        this.errorMsg    = err?.error?.message || 'Erreur lors de l\'import';
        this.importing   = false;
        this.showPreview = false;
        this.pendingFile = null;
        this.selectedFileName = '';
      }
    });
  }

  closePreview(): void {
    if (this.importing) return;
    this.showPreview      = false;
    this.previewRows      = [];
    this.previewCols      = [];
    this.pendingFile      = null;
    this.selectedFileName = '';
  }

  downloadTemplate(): void {
    const tab = this.activeTabDef;
    if (!tab.templateAction) return;
    tab.templateAction().subscribe({
      next: (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = tab.templateFilename || 'modele.xlsx';
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.errorMsg = 'Impossible de télécharger le modèle.'; }
    });
  }

  isActiveCol(header: string): boolean {
    return this.previewCols.some(c => c.key.toLowerCase() === header.toLowerCase());
  }

  getCellValue(row: Record<string, any>, col: { key: string; label: string }): string {
    // Cherche la clé en respectant la casse puis en minuscules
    const val = row[col.key] ?? row[col.key.toLowerCase()] ?? '';
    return String(val ?? '');
  }

  get importOrder(): { step: number; label: string; icon: string; tabId: string }[] {
    return [
      { step: 1, label: 'Plan comptable',      icon: 'account_tree', tabId: 'accounts'   },
      { step: 2, label: 'Comptes analytiques', icon: 'analytics',    tabId: 'analytic'   },
      { step: 3, label: 'Contacts',            icon: 'people',       tabId: 'partners'   },
      { step: 4, label: 'Journaux',            icon: 'book',         tabId: 'journals'   },
      { step: 5, label: 'Précomptes',          icon: 'percent',      tabId: 'precomptes' },
      { step: 6, label: 'Entrepôts',           icon: 'warehouse',    tabId: 'warehouses' },
    ];
  }
}
