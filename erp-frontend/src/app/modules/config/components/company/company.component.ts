import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyService } from '../../../../core/services/company.service';
import { CompanyInfo } from '../../services/config.service';
import { AppBrandingService } from '../../../../core/services/app-branding.service';

@Component({
  selector: 'app-config-company',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {
  company: CompanyInfo = { name: '', active: true };
  companyId = 1;

  loading = false;
  saving = false;
  savingAppName = false;
  uploadingLogo = false;
  uploadingAppLogo = false;
  errorMsg = '';
  successMsg = '';

  logoPreviewUrl: string | null = null;
  logoTimestamp = Date.now();
  appLogoPreviewUrl: string | null = null;
  appLogoTimestamp = Date.now();

  readonly fiscalMonths = [
    { value: 1,  label: 'Janvier' },  { value: 2,  label: 'Février' },
    { value: 3,  label: 'Mars' },     { value: 4,  label: 'Avril' },
    { value: 5,  label: 'Mai' },      { value: 6,  label: 'Juin' },
    { value: 7,  label: 'Juillet' },  { value: 8,  label: 'Août' },
    { value: 9,  label: 'Septembre' },{ value: 10, label: 'Octobre' },
    { value: 11, label: 'Novembre' }, { value: 12, label: 'Décembre' },
  ];

  constructor(
    private companyService: CompanyService,
    private brandingService: AppBrandingService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.companyService.load(this.companyId).subscribe({
      next: c => {
        this.company = c;
        if (!this.company.fiscalYearStartMonth) this.company.fiscalYearStartMonth = 1;
        this.brandingService.applyCompany(c);
        this.loading = false;
        this.logoTimestamp = Date.now();
        this.appLogoTimestamp = Date.now();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Impossible de charger les informations de l\'entreprise.';
      }
    });
  }

  save(): void {
    if (!this.company.name?.trim()) {
      this.errorMsg = 'Le nom de l\'entreprise est obligatoire.';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    this.successMsg = '';
    this.companyService.save(this.companyId, this.company).subscribe({
      next: updated => {
        this.company = updated;
        this.saving = false;
        this.successMsg = 'Informations enregistrées avec succès.';
        setTimeout(() => this.successMsg = '', 4000);
      },
      error: err => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'enregistrement.';
      }
    });
  }

  saveAppName(): void {
    if (!this.company.appName?.trim()) {
      this.errorMsg = 'Le nom de l\'application est obligatoire.';
      return;
    }
    this.savingAppName = true;
    this.errorMsg = '';
    this.successMsg = '';
    this.companyService.save(this.companyId, this.company).subscribe({
      next: updated => {
        this.company = updated;
        this.savingAppName = false;
        this.successMsg = 'Nom de l\'application enregistré.';
        this.brandingService.updateAppName(updated.appName);
        setTimeout(() => this.successMsg = '', 4000);
      },
      error: err => {
        this.savingAppName = false;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'enregistrement.';
      }
    });
  }

  onLogoSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { this.errorMsg = 'Veuillez sélectionner une image (PNG, JPG, SVG…)'; return; }
    if (file.size > 2 * 1024 * 1024) { this.errorMsg = 'Le logo ne doit pas dépasser 2 Mo.'; return; }

    const reader = new FileReader();
    reader.onload = e => { this.logoPreviewUrl = e.target?.result as string; };
    reader.readAsDataURL(file);

    this.uploadingLogo = true;
    this.errorMsg = '';
    this.companyService.uploadLogo(this.companyId, file).subscribe({
      next: () => {
        this.uploadingLogo = false;
        this.logoTimestamp = Date.now();
        this.companyService.clearCache();
        this.successMsg = 'Logo importé avec succès.';
        setTimeout(() => this.successMsg = '', 4000);
      },
      error: err => {
        this.uploadingLogo = false;
        this.logoPreviewUrl = null;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'import du logo.';
      }
    });
  }

  onAppLogoSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { this.errorMsg = 'Veuillez sélectionner une image (PNG, JPG, SVG…)'; return; }
    if (file.size > 2 * 1024 * 1024) { this.errorMsg = 'L\'icône ne doit pas dépasser 2 Mo.'; return; }

    const reader = new FileReader();
    reader.onload = e => { this.appLogoPreviewUrl = e.target?.result as string; };
    reader.readAsDataURL(file);

    this.uploadingAppLogo = true;
    this.errorMsg = '';
    this.companyService.uploadAppLogo(this.companyId, file).subscribe({
      next: () => {
        this.uploadingAppLogo = false;
        this.appLogoTimestamp = Date.now();
        this.company.hasAppLogo = true;
        this.successMsg = 'Icône importée avec succès.';
        this.brandingService.refreshAppLogo();
        setTimeout(() => this.successMsg = '', 4000);
      },
      error: err => {
        this.uploadingAppLogo = false;
        this.appLogoPreviewUrl = null;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'import de l\'icône.';
      }
    });
  }

  get currentLogoUrl(): string {
    return `${this.companyService.getLogoUrl(this.companyId)}?t=${this.logoTimestamp}`;
  }

  get currentAppLogoUrl(): string {
    return `${this.companyService.getAppLogoUrl(this.companyId)}?t=${this.appLogoTimestamp}`;
  }
}
