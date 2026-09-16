import { Injectable } from '@angular/core';
import { CompanyService } from './company.service';
import { CompanyInfo } from '../../modules/config/services/config.service';

const DEFAULT_NAME = 'Blessing ERP';

@Injectable({ providedIn: 'root' })
export class AppBrandingService {
  appName = DEFAULT_NAME;
  hasAppLogo = false;

  get appLogoUrl(): string {
    return `${this.companyService.getAppLogoUrl(1)}?t=${this._logoTs}`;
  }

  private _logoTs = 0;

  constructor(private companyService: CompanyService) {
    // Initialise depuis le cache localStorage immédiatement (sans flash)
    const cached = this.companyService.getCached();
    if (cached) this.applyCompany(cached);
  }

  /** Appelé au démarrage de l'app — recharge depuis le serveur */
  apply(): void {
    this.companyService.load(1).subscribe(c => {
      this.applyCompany(c);
    });
  }

  applyCompany(company: CompanyInfo): void {
    this.appName = company.appName?.trim() || DEFAULT_NAME;
    this.hasAppLogo = !!company.hasAppLogo;
    this._logoTs = Date.now();
    this.applyTitle();
    if (this.hasAppLogo) this.applyFavicon();
  }

  updateAppName(name?: string): void {
    this.appName = name?.trim() || DEFAULT_NAME;
    this.applyTitle();
  }

  refreshAppLogo(): void {
    this.hasAppLogo = true;
    this._logoTs = Date.now();
    this.applyFavicon();
  }

  applyTitle(name?: string): void {
    const n = name ?? this.appName;
    if (n?.trim()) document.title = n.trim();
  }

  applyFavicon(): void {
    const url = this.appLogoUrl;
    let link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = url;
  }
}
