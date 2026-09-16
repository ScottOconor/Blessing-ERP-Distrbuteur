import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EleaderService, EleaderConfig, EleaderEmballageMapping } from '../../../services/eleader.service';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-eleader-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eleader-config.component.html',
  styleUrl: './eleader-config.component.scss'
})
export class EleaderConfigComponent implements OnInit {
  loading = false;
  saving  = false;
  successMsg = '';
  errorMsg   = '';

  config: EleaderConfig = {
    companyId: 0,
    psaProductCode: 'PRC01',
    fraisEnlevementCode: 'ELV01',
    autoConfirm: false,
    emballageMappings: [],
    extraConsigneCodes: []
  };

  // ── Emballage mappings ────────────────────────────────────────────────────
  showAddMapping = false;
  newMapping: EleaderEmballageMapping = { eleaderCode: '', erpProductCode: '', invoiceModel: 'ALL' };
  addingMapping = false;

  readonly MODELS = ['ALL', 'BRASSERIES', 'GUINNESS'];

  showLoadDefaultsConfirm = false;

  // ── Codes consignes supplémentaires ──────────────────────────────────────
  newConsigneCode = '';
  consigneCodeError = '';

  // Valeurs de référence eLeader — uniquement pour pré-remplir le formulaire.
  private readonly DEFAULTS: EleaderEmballageMapping[] = [
    // ── Brasseries ────────────────────────────────────────────────────────
    { eleaderCode: 'VCBB65',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCBB60',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCBB50',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCBV65',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCMU65',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCBA65',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCBA50',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCCC60',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCFA60',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCAP65',  erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VRACC12', erpProductCode: 'CB12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCCC30',  erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCFA30',  erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCAP33',  erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCBV33',  erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCBA33',  erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCMA30',  erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VCMB30',  erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VRACC24', erpProductCode: 'CB24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VIP12',   erpProductCode: 'CV12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VIP12M',  erpProductCode: 'CV12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VIP12R',  erpProductCode: 'CV12', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VIP24',   erpProductCode: 'CV24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VIP24B',  erpProductCode: 'CV24', invoiceModel: 'BRASSERIES' },
    { eleaderCode: 'VIP24R',  erpProductCode: 'CV24', invoiceModel: 'BRASSERIES' },
    // ── Guinness ──────────────────────────────────────────────────────────
    { eleaderCode: 'VCHP60',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VCGA65',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VCGA50',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VCGA33',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VCGM33',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VCFG33',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: '354111',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: '354112',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: '354113',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VRFG33',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VRGA33',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VRMG33',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VRHP60',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VRGA65',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VRGA50',  erpProductCode: 'CBG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VIP12G',  erpProductCode: 'CVG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VIP15G',  erpProductCode: 'CVG12', invoiceModel: 'GUINNESS' },
    { eleaderCode: 'VIP24G',  erpProductCode: 'CVG12', invoiceModel: 'GUINNESS' },
  ];

  constructor(
    private eleaderService: EleaderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const companyId = this.authService.getCompanyId();
    this.config.companyId = companyId;
    this.loading = true;
    this.eleaderService.getConfig(companyId).subscribe({
      next: (cfg) => {
        this.config = { ...cfg, extraConsigneCodes: cfg.extraConsigneCodes ?? [] };
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  save(): void {
    // Validation côté client
    const mappingError = this.checkMappingDuplicates();
    if (mappingError) { this.errorMsg = mappingError; return; }

    this.saving = true;
    this.errorMsg = '';
    this.successMsg = '';
    this.eleaderService.saveConfig(this.config).subscribe({
      next: (saved) => {
        this.config = { ...saved, extraConsigneCodes: saved.extraConsigneCodes ?? [] };
        this.successMsg = 'Configuration enregistrée. Codes consignes rechargés.';
        this.saving = false;
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Erreur lors de la sauvegarde.';
        this.saving = false;
      }
    });
  }

  // ── Gestion des mappings emballages ──────────────────────────────────────

  openAddMapping(): void {
    this.newMapping = { eleaderCode: '', erpProductCode: '', invoiceModel: 'ALL' };
    this.showAddMapping = true;
  }

  addMapping(): void {
    if (!this.newMapping.eleaderCode || !this.newMapping.erpProductCode) return;

    const key = this.newMapping.eleaderCode.trim().toUpperCase() + '|' + (this.newMapping.invoiceModel || 'ALL').toUpperCase();
    const duplicate = this.config.emballageMappings.some(m =>
      (m.eleaderCode.trim().toUpperCase() + '|' + (m.invoiceModel || 'ALL').toUpperCase()) === key
    );
    if (duplicate) {
      this.errorMsg = `Code eLeader '${this.newMapping.eleaderCode.toUpperCase()}' déjà mappé pour le modèle ${this.newMapping.invoiceModel}. Supprimez d'abord l'entrée existante.`;
      return;
    }

    this.config.emballageMappings = [
      ...this.config.emballageMappings,
      { ...this.newMapping }
    ];
    this.showAddMapping = false;
    this.errorMsg = '';
  }

  removeMapping(index: number): void {
    this.config.emballageMappings = this.config.emballageMappings.filter((_, i) => i !== index);
  }

  /** Détecte les doublons dans la liste de mappings en mémoire. */
  private checkMappingDuplicates(): string | null {
    const seen = new Set<string>();
    for (const m of this.config.emballageMappings) {
      if (!m.eleaderCode) continue;
      const key = m.eleaderCode.trim().toUpperCase() + '|' + (m.invoiceModel || 'ALL').toUpperCase();
      if (seen.has(key)) {
        return `Code eLeader en double : '${m.eleaderCode.toUpperCase()}' (modèle ${m.invoiceModel}). Supprimez le doublon.`;
      }
      seen.add(key);
    }
    return null;
  }

  // ── Gestion des codes consignes supplémentaires ───────────────────────────

  addConsigneCode(): void {
    this.consigneCodeError = '';
    const code = this.newConsigneCode.trim().toUpperCase();
    if (!code) return;

    if (this.config.extraConsigneCodes.includes(code)) {
      this.consigneCodeError = `Le code '${code}' est déjà dans la liste.`;
      return;
    }
    this.config.extraConsigneCodes = [...this.config.extraConsigneCodes, code].sort();
    this.newConsigneCode = '';
  }

  removeConsigneCode(index: number): void {
    this.config.extraConsigneCodes = this.config.extraConsigneCodes.filter((_, i) => i !== index);
    this.consigneCodeError = '';
  }

  // ── Chargement des défauts ───────────────────────────────────────────────

  /** Pré-remplit le tableau avec les codes de référence eLeader. */
  loadDefaults(): void {
    const existing = new Set(this.config.emballageMappings.map(m =>
      m.eleaderCode.toUpperCase() + '|' + (m.invoiceModel || 'ALL').toUpperCase()
    ));
    const toAdd = this.DEFAULTS.filter(d =>
      !existing.has(d.eleaderCode.toUpperCase() + '|' + (d.invoiceModel || 'ALL').toUpperCase())
    );
    this.config.emballageMappings = [...this.config.emballageMappings, ...toAdd];
    this.showLoadDefaultsConfirm = false;
  }

  trackByIndex = (i: number) => i;
}
