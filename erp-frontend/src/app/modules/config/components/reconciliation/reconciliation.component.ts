import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../../../../core/auth/auth.service';
import { environment } from '../../../../../environments/environment';

interface CmupChange {
  productCode?: string;
  productName: string;
  warehouseName?: string;
  oldCmup: number;
  newCmup: number;
}

interface Preview {
  purchasesReplayed: number;
  cmupChanges: number;
  changes: CmupChange[];
  salesLinesToFreeze: number;
  stocksToInitialize: number;
  stocksWithoutPrice: number;
}

/** TEMPORAIRE : reprise unique des achats passés, à retirer avec son service une fois exécutée. */
@Component({
  selector: 'app-reconciliation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reconciliation.component.html',
  styles: [`
    button { padding: 9px 18px; border: 0; border-radius: 6px; background: #2563eb; color: #fff; font-weight: 600; cursor: pointer; }
    button:disabled { opacity: .6; cursor: wait; }
    ul { margin: 16px 0; padding-left: 20px; line-height: 1.8; }
  `]
})
export class ReconciliationComponent implements OnInit {
  private api = `${environment.apiUrl}/api/stock/valuation/reconciliation`;

  preview: Preview | null = null;
  loading = false;
  running = false;
  message = '';
  error = '';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private get params(): HttpParams {
    return new HttpParams().set('companyId', this.auth.getCompanyId());
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.http.get<Preview>(this.api, { params: this.params }).subscribe({
      next: p => { this.preview = p; this.loading = false; },
      error: e => { this.loading = false; this.error = e?.error?.message || 'Lecture impossible.'; }
    });
  }

  run(): void {
    if (!confirm('Lancer la reprise ?\nLes CMUP actuels seront remplacés, et les ventes passées recevront leur coût et leur marge.\n' +
                 'Faites une sauvegarde avant. Les écritures comptables ne sont pas modifiées.')) return;
    this.running = true;
    this.message = '';
    this.error = '';
    this.http.post<any>(this.api, null, { params: this.params }).subscribe({
      next: r => {
        this.running = false;
        this.message = `${r.purchasesReplayed} achat(s) repris, ${r.cmupUpdated} CMUP mis à jour, ` +
          `${r.salesLinesFrozen} ligne(s) de vente mises à jour, ${r.stocksInitialized} stock(s) valorisé(s).`;
        this.load();
      },
      error: e => { this.running = false; this.error = e?.error?.message || 'La reprise a échoué, rien n\'a été modifié.'; }
    });
  }
}
