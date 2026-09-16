import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StockService, StockPicking, Product, Warehouse } from '../../services/stock.service';
import { ConfigService, RemoteAgency } from '../../../config/services/config.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { CompanyService } from '../../../../core/services/company.service';
import { AuditFooterComponent } from '../../../../shared/components/audit-footer/audit-footer.component';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';

@Component({
  selector: 'app-livraison-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, AuditFooterComponent, AuditTrailComponent],
  templateUrl: './livraison-detail.component.html',
  styleUrl: './livraison-detail.component.scss'
})
export class LivraisonDetailComponent implements OnInit {
  picking: StockPicking | null = null;
  remoteAgencies: RemoteAgency[] = [];
  products: Product[] = [];
  warehouses: Warehouse[] = [];
  loading = false;
  saving = false;
  validating = false;
  cancelling = false;
  confirming = false;
  retryingNotify = false;
  errorMsg = '';
  successMsg = '';
  warningMsg = '';
  isNew = false;
  isReadonly = false;

  selectedRemoteAgencyId: number | null = null;
  selectedWarehouseId: number | null = null;
  selectedDestLocationId: number | null = null;
  scheduledDate = '';
  origin = '';
  notes = '';

  lines: Array<{
    productId: number | null;
    qtyDemanded: number;
    qtyDone: number;
    priceUnit: number;
    uomName: string;
    availableQty: number;
  }> = [];

  // Autocomplete articles par ligne
  lineSearchTexts: string[] = [];
  openDropdownIndex: number | null = null;
  @ViewChildren('productInput') productInputs!: QueryList<ElementRef>;

  lineFilteredProducts(i: number): Product[] {
    const q = (this.lineSearchTexts[i] || '').toLowerCase();
    if (!q) return this.products.slice(0, 60);
    return this.products.filter(p =>
      p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q)
    ).slice(0, 60);
  }

  selectLineProduct(i: number, p: Product): void {
    this.lines[i].productId = p.id!;
    this.lineSearchTexts[i] = p.defaultCode ? `[${p.defaultCode}] ${p.name}` : p.name;
    this.openDropdownIndex = null;
    this.onProductChange(i);
  }

  onProductEnter(i: number, e: Event): void {
    e.preventDefault();
    const s = this.lineFilteredProducts(i);
    if (s.length > 0) { this.selectLineProduct(i, s[0]); return; }
    if (this.lines[i].productId) this.onLineEnter();
  }

  onLineEnter(): void {
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0) inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }

  onLineBlur(i: number): void { setTimeout(() => { if (this.openDropdownIndex === i) this.openDropdownIndex = null; }, 200); }

  private companyId!: number;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private stockService: StockService,
    private configService: ConfigService,
    public authService: AuthService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    const id = this.route.snapshot.paramMap.get('id');
    this.isNew = !id || id === 'new';

    forkJoin({
      agencies:   this.configService.getRemoteAgencies().pipe(catchError(() => of([]))),
      products:   this.stockService.getProducts(this.companyId).pipe(catchError(() => of([]))),
      warehouses: this.stockService.getWarehouses(this.companyId).pipe(catchError(() => of([])))
    }).subscribe(({ agencies, products, warehouses }) => {
      this.remoteAgencies = agencies as RemoteAgency[];
      this.products = (products as Product[]).filter(p => p.type === 'product' || p.type === 'consu');
      this.warehouses = warehouses as Warehouse[];

      if (this.isNew) {
        this.scheduledDate = new Date().toISOString().slice(0, 10);
        if (this.warehouses.length > 0) this.selectedWarehouseId = this.warehouses[0].id!;
        this.addLine();
      } else {
        this.loadPicking(Number(id));
      }
    });
  }

  loadPicking(id: number): void {
    this.loading = true;
    this.stockService.getInterCompanyExpedition(id).subscribe({
      next: (p) => {
        this.picking = p;
        this.selectedRemoteAgencyId = p.remoteAgencyId ?? null;
        this.selectedDestLocationId = p.locationDestId ?? null;
        this.scheduledDate = p.scheduledDate || '';
        this.origin = p.origin || '';
        this.notes = p.notes || '';
        // Readonly si pas brouillon, ou si c'est une réception (le récepteur ne modifie pas)
        this.isReadonly = p.state !== 'draft' || this.isIncomingPicking(p);
        const matchedWh = this.warehouses.find(w => w.stockLocationId === p.locationId);
        this.selectedWarehouseId = matchedWh?.id ?? (this.warehouses[0]?.id ?? null);

        this.lines = (p.moves || []).map(m => ({
          productId: m.productId,
          qtyDemanded: m.qtyDemanded,
          qtyDone: m.qtyDone ?? m.qtyDemanded,
          priceUnit: m.priceUnit ?? 0,
          uomName: m.uomName || '',
          availableQty: 0
        }));
        this.lineSearchTexts = (p.moves || []).map(m => {
          const prod = this.products.find(pr => pr.id === m.productId);
          return prod ? (prod.defaultCode ? `[${prod.defaultCode}] ${prod.name}` : prod.name) : (m.productName || '');
        });

        // Charger les quantités disponibles pour chaque ligne si émission en brouillon
        if (!this.isReadonly) {
          this.lines.forEach((_, i) => {
            if (this.lines[i].productId) this.refreshLineQty(i);
          });
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  /** Vrai si ce picking est une réception entrante (créée par un spoke distant) */
  private isIncomingPicking(p: StockPicking): boolean {
    return !!p.transferReception;
  }

  addLine(): void {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: '', availableQty: 0 });
    this.lineSearchTexts.push('');
  }
  removeLine(i: number): void { this.lines.splice(i, 1); this.lineSearchTexts.splice(i, 1); }

  get selectedWarehouse(): Warehouse | null {
    return this.warehouses.find(w => w.id === Number(this.selectedWarehouseId)) ?? null;
  }
  get selectedWarehouseLocationId(): number | undefined {
    return this.selectedWarehouse?.stockLocationId ?? undefined;
  }

  onWarehouseChange(): void {
    this.lines.forEach((_, i) => {
      if (this.lines[i].productId) this.refreshLineQty(i);
    });
  }

  onProductChange(i: number): void {
    if (!this.selectedWarehouseId) {
      this.errorMsg = "Sélectionnez d'abord l'entrepôt source.";
      this.lines[i].productId = null;
      setTimeout(() => this.errorMsg = '', 4000);
      return;
    }
    const prod = this.products.find(p => p.id === Number(this.lines[i].productId));
    if (prod) {
      this.lines[i].uomName = prod.uomName || '';
      this.lines[i].priceUnit = prod.standardPrice || 0;
      this.refreshLineQty(i);
    }
  }

  private refreshLineQty(i: number): void {
    const prodId = Number(this.lines[i].productId);
    if (!prodId) return;
    const locId = this.selectedWarehouseLocationId;
    if (!locId) { this.lines[i].availableQty = 0; return; }
    this.stockService.getQuants(this.companyId, locId, prodId).subscribe({
      next: q => { this.lines[i].availableQty = q.reduce((s, qq) => s + (qq.availableQuantity ?? 0), 0); },
      error: () => {}
    });
  }

  buildReq() {
    return {
      remoteAgencyId: this.selectedRemoteAgencyId,
      locationId: this.selectedWarehouseLocationId ?? null,
      locationDestId: this.selectedDestLocationId,
      scheduledDate: this.scheduledDate,
      origin: this.origin,
      notes: this.notes,
      companyId: this.companyId,
      moves: this.lines.filter(l => l.productId).map(l => ({
        productId: Number(l.productId),
        qtyDemanded: l.qtyDemanded,
        qtyDone: l.qtyDone,
        priceUnit: l.priceUnit
      }))
    };
  }

  save(): void {
    if (!this.selectedRemoteAgencyId) { this.errorMsg = "Sélectionner une agence distante destinataire"; return; }
    if (!this.selectedDestLocationId) { this.errorMsg = "Sélectionner un emplacement de destination"; return; }
    if (this.lines.filter(l => l.productId).length === 0) { this.errorMsg = 'Ajouter au moins un article'; return; }
    this.saving = true; this.errorMsg = '';
    const obs = this.isNew
      ? this.stockService.createInterCompanyExpedition(this.buildReq())
      : this.stockService.updateInterCompanyExpedition(this.picking!.id!, this.buildReq());
    obs.subscribe({
      next: (p) => {
        this.saving = false;
        if (this.isNew) {
          this.router.navigate(['/stock/expeditions', p.id]);
        } else {
          this.picking = p;
          this.successMsg = 'Expédition sauvegardée';
          setTimeout(() => this.successMsg = '', 3000);
        }
      },
      error: (e: any) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur de sauvegarde'; }
    });
  }

  validate(): void {
    if (!this.picking) return;
    this.validating = true; this.errorMsg = '';
    this.stockService.updateInterCompanyExpedition(this.picking.id!, this.buildReq()).subscribe({
      next: () => {
        this.stockService.validateInterCompanyExpedition(this.picking!.id!).subscribe({
          next: (p) => {
            this.validating = false; this.picking = p; this.isReadonly = true;
            this.successMsg = 'Expédition validée — agence destinataire notifiée';
            this.loadPicking(p.id!);
          },
          error: (e: any) => { this.validating = false; this.errorMsg = e.error?.message || 'Erreur de validation'; }
        });
      },
      error: (e: any) => { this.validating = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  cancel(): void {
    if (!this.picking || !confirm("Annuler cette expédition ?")) return;
    this.cancelling = true;
    this.stockService.cancelInterCompanyExpedition(this.picking.id!).subscribe({
      next: (p) => { this.cancelling = false; this.picking = p; this.isReadonly = true; },
      error: (e: any) => { this.cancelling = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  confirmReception(): void {
    if (!this.picking || !confirm("Confirmer la réception ? Le stock sera ajouté à cet entrepôt.")) return;
    this.confirming = true; this.errorMsg = ''; this.warningMsg = '';
    this.stockService.confirmInterCompanyReception(this.picking.id!).subscribe({
      next: (p) => {
        this.confirming = false; this.picking = p; this.isReadonly = true;
        if (p.senderNotifyWarning) {
          this.warningMsg = 'Réception confirmée localement, mais l\'expéditeur n\'a pas pu être notifié : ' + p.senderNotifyWarning;
        } else {
          this.successMsg = 'Réception confirmée — stock mis à jour, expéditeur notifié';
        }
        this.loadPicking(p.id!);
      },
      error: (e: any) => { this.confirming = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  retryNotifySender(): void {
    if (!this.picking) return;
    this.retryingNotify = true; this.errorMsg = '';
    this.stockService.retryNotifySender(this.picking.id!).subscribe({
      next: (p) => {
        this.retryingNotify = false;
        this.picking = p;
        if (p.senderNotifyWarning) {
          this.warningMsg = 'Toujours impossible de notifier l\'expéditeur : ' + p.senderNotifyWarning;
        } else {
          this.warningMsg = '';
          this.successMsg = 'Expéditeur notifié avec succès';
        }
      },
      error: (e: any) => { this.retryingNotify = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  private h(s?: string | number | null): string {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  printBordereau(): void {
    if (!this.picking) return;
    const p = this.picking;
    const ci = this.companyService.getCached();
    const logoDataUrl = this.companyService.getCachedLogoDataUrl();
    const logoUrl = logoDataUrl || `${window.location.origin}${this.companyService.getLogoUrl()}`;
    const agency = this.remoteAgencies.find(a => a.id === p.remoteAgencyId);
    const agencyName = agency?.name || p.remoteAgencyName || p.partnerName || '—';
    const isRec = this.isIncoming;
    const dateStr = p.scheduledDate ? new Date(p.scheduledDate).toLocaleDateString('fr-FR') : '—';
    const rows = (p.moves || []).map(m => {
      const qty = m.qtyDone ?? m.qtyDemanded ?? 0;
      const pu = m.priceUnit ?? 0;
      return `<tr>
        <td>${m.productCode ? '[' + this.h(m.productCode) + '] ' : ''}${this.h(m.productName || '')}</td>
        <td class="center">${this.h(m.uomName || '')}</td>
        <td class="right">${qty.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</td>
        <td class="right">${pu.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
        <td class="right">${(qty * pu).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
      </tr>`;
    }).join('');
    const total = (p.moves || []).reduce((s, m) => s + (m.qtyDone ?? m.qtyDemanded ?? 0) * (m.priceUnit ?? 0), 0);
    const stateMap: Record<string, string> = { draft: 'Brouillon', pending_reception: 'En attente de réception', done: 'Réceptionné', cancelled: 'Annulé' };
    const title = isRec ? 'Bordereau de Réception' : "Bordereau d'Expédition";

    const coHeader = `
      <div class="co-header">
        ${logoUrl ? `<img src="${logoUrl}" class="co-logo" alt="logo">` : ''}
        <div class="co-info">
          <div class="co-name">${this.h(ci?.name || '')}</div>
          ${ci?.sigle   ? `<div class="co-line">(${this.h(ci.sigle)})</div>` : ''}
          ${ci?.adresse ? `<div class="co-line">${this.h(ci.adresse)}</div>` : ''}
          ${ci?.rccm    ? `<div class="co-line"><b>RCCM :</b> ${this.h(ci.rccm)}</div>` : ''}
          ${ci?.nif     ? `<div class="co-line"><b>NIF :</b> ${this.h(ci.nif)}</div>` : ''}
          ${ci?.telephone ? `<div class="co-line"><b>Tél :</b> ${this.h(ci.telephone)}</div>` : ''}
          ${ci?.email   ? `<div class="co-line"><b>Email :</b> ${this.h(ci.email)}</div>` : ''}
        </div>
      </div>`;

    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
<title>${this.h(title)} ${this.h(p.name)}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;font-size:12px;color:#222;padding:14mm}
.page-header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #017E84;padding-bottom:8px;margin-bottom:14px}
.co-header{display:flex;align-items:flex-start;gap:10px}
.co-logo{max-height:52px;max-width:120px;object-fit:contain}
.co-name{font-size:14px;font-weight:700;color:#017E84}
.co-line{font-size:10px;color:#444;margin-top:2px}
.doc-block{text-align:right}
.doc-title{font-size:18px;font-weight:800;color:#222}
.doc-ref{font-size:11px;font-weight:600;color:#017E84;margin-top:2px}
.state-badge{display:inline-block;padding:2px 10px;border-radius:12px;background:#e0f7fa;color:#017E84;font-weight:bold;font-size:10px;margin-top:4px}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 32px;margin-bottom:14px;border:1px solid #ddd;padding:10px;border-radius:4px}
.info-row label{font-weight:700;display:block;font-size:9px;text-transform:uppercase;color:#888;margin-bottom:1px}
.info-row span{font-size:12px}
table{width:100%;border-collapse:collapse;margin-top:6px}
th{background:#017E84;color:white;padding:6px 8px;text-align:left;font-size:10px}
td{padding:5px 8px;border-bottom:1px solid #eee;font-size:11px}
.right{text-align:right}.center{text-align:center}
tfoot td{font-weight:bold;background:#f5f5f5;border-top:2px solid #017E84}
.signatures{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:36px}
.sig-box{border-top:1px solid #999;padding-top:6px;min-height:50px}
.sig-box label{font-size:9px;font-weight:700;text-transform:uppercase;color:#888}
@media print{body{padding:0}@page{margin:10mm}}
</style>
</head><body>
<div class="page-header">
  ${coHeader}
  <div class="doc-block">
    <div class="doc-title">${this.h(title)}</div>
    <div class="doc-ref">${this.h(p.name)}</div>
    <span class="state-badge">${this.h(stateMap[p.state || ''] || p.state)}</span>
  </div>
</div>
<div class="info-grid">
  <div class="info-row"><label>Agence émettrice</label><span>${this.h(isRec ? agencyName : (p.companyName || '—'))}</span></div>
  <div class="info-row"><label>Agence réceptrice</label><span>${this.h(isRec ? (p.companyName || '—') : agencyName)}</span></div>
  <div class="info-row"><label>Date planifiée</label><span>${this.h(dateStr)}</span></div>
  <div class="info-row"><label>Référence</label><span>${this.h(p.origin || '—')}</span></div>
  ${p.notes ? `<div class="info-row" style="grid-column:1/-1"><label>Notes</label><span>${this.h(p.notes)}</span></div>` : ''}
</div>
<table>
  <thead><tr><th style="width:38%">Article</th><th class="center">Unité</th><th class="right">Quantité</th><th class="right">Prix unit.</th><th class="right">Sous-total</th></tr></thead>
  <tbody>${rows}</tbody>
  <tfoot><tr><td colspan="4" class="right">TOTAL</td><td class="right">${total.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} FCFA</td></tr></tfoot>
</table>
<div class="signatures">
  <div class="sig-box"><label>Signature émetteur</label></div>
  <div class="sig-box"><label>Cachet & signature récepteur</label></div>
</div>
<script>window.onload=()=>{window.print()}</script>
</body></html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.write(html); w.document.close(); }
  }

  // ── Getters état ──────────────────────────────────────────────────────────

  /** Vrai si ce picking est une réception entrante (créée par un spoke émetteur distant) */
  get isIncoming(): boolean { return !!this.picking?.transferReception; }
  get isDraft(): boolean { return !this.picking || this.picking.state === 'draft'; }
  get isDone(): boolean { return this.picking?.state === 'done'; }
  get isCancelled(): boolean { return this.picking?.state === 'cancelled'; }
  get isPendingReception(): boolean { return this.picking?.state === 'pending_reception'; }
  get lineTotal(): number { return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0); }

  productName(id: number | null): string {
    return this.products.find(p => p.id === Number(id))?.name || '';
  }
  stateLabel(s: string): string {
    return ({ draft: 'Brouillon', pending_reception: 'En attente de réception', done: 'Réceptionné', cancelled: 'Annulé' } as any)[s] || s;
  }
}
