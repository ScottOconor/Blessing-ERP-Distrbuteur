import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesInvoice, SalesInvoiceLine, SalesOrder } from '../../../modules/sales/services/sales.service';
import { StockPicking } from '../../../modules/stock/services/stock.service';
import { PurchaseInvoice, PurchaseInvoiceLine, PurchaseOrder } from '../../../modules/purchases/services/purchase.service';
import { CONSIGNE_CODES } from '../../constants/consigne-codes';

export type PrintFormat = 'a4' | 'a5' | 'ticket';
export type PrintDocType = 'invoice' | 'avoir' | 'bon' | 'purchase_invoice' | 'purchase_order' | 'sales_order';

export interface PrintCompanyInfo {
  name?: string;
  sigle?: string;
  rccm?: string;
  nif?: string;
  adresse?: string;
  telephone?: string;
  email?: string;
}

@Component({
  selector: 'app-print-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './print-preview.component.html',
  styleUrl: './print-preview.component.scss'
})
export class PrintPreviewComponent {
  @Input() invoice: SalesInvoice | null = null;
  @Input() picking: StockPicking | null = null;
  @Input() purchaseInvoice: PurchaseInvoice | null = null;
  @Input() purchaseOrder: PurchaseOrder | null = null;
  @Input() salesOrder: SalesOrder | null = null;
  @Input() docType: PrintDocType = 'invoice';
  @Input() companyName = '';
  @Input() companyPhone = '';
  @Input() companyLogoUrl = '';
  @Input() companyLogoDataUrl = '';
  @Input() companyInfo: PrintCompanyInfo | null = null;
  @Output() closed = new EventEmitter<void>();

  format: PrintFormat = 'a4';
  printing = false;

  readonly FORMATS: { value: PrintFormat; label: string; icon: string }[] = [
    { value: 'a4',     label: 'A4',     icon: 'description' },
    { value: 'a5',     label: 'A5',     icon: 'article'     },
    { value: 'ticket', label: 'Ticket', icon: 'receipt'      }
  ];

  get docTitle(): string {
    if (this.docType === 'bon') return 'BON DE LIVRAISON';
    if (this.docType === 'avoir') return 'AVOIR';
    if (this.docType === 'purchase_order') return 'BON DE COMMANDE';
    if (this.docType === 'sales_order') return 'BON DE COMMANDE';
    if (this.docType === 'purchase_invoice') return this.purchaseInvoice?.type === 'credit_note' ? 'AVOIR FOURNISSEUR' : 'FACTURE FOURNISSEUR';
    return 'FACTURE';
  }

  get docRef(): string { return this.invoice?.name ?? this.picking?.name ?? this.purchaseInvoice?.name ?? this.purchaseOrder?.name ?? this.salesOrder?.name ?? ''; }
  get client(): string { return this.invoice?.partnerName ?? this.picking?.partnerName ?? this.purchaseInvoice?.partnerName ?? this.purchaseOrder?.partnerName ?? this.salesOrder?.partnerName ?? ''; }
  get allLines(): SalesInvoiceLine[]  { return this.invoice?.lines ?? []; }
  /** Lignes normales : non-consigne ET quantité positive */
  get salesLines(): SalesInvoiceLine[] { return this.allLines.filter(l => !this.isConsigneLine(l) && (l.quantity ?? 0) >= 0); }
  /** Consignes livrées : consigne ET quantité positive */
  get consigneLines(): SalesInvoiceLine[] { return this.allLines.filter(l => this.isConsigneLine(l) && (l.quantity ?? 0) >= 0); }
  /** Déconsignes : toute ligne à quantité négative (retour emballage) */
  get deconsigneLines(): SalesInvoiceLine[] { return this.allLines.filter(l => (l.quantity ?? 0) < 0); }
  get pickingMoves() { return this.picking?.moves ?? []; }
  get totalPickingQty(): number { return this.pickingMoves.reduce((s, m) => s + (m.qtyDone ?? m.qtyDemanded ?? 0), 0); }
  get purchaseInvoiceLines(): PurchaseInvoiceLine[] { return this.purchaseInvoice?.lines ?? []; }
  get purchaseInvoiceHasRabais(): boolean { return this.purchaseInvoiceLines.some(l => (l.rabaisUnitaire ?? 0) > 0); }
  get purchaseNormalLines(): PurchaseInvoiceLine[] {
    return this.purchaseInvoiceLines.filter(l => !l.consigne && (l.quantity ?? 0) >= 0);
  }
  get purchaseConsigneLines(): PurchaseInvoiceLine[] {
    return this.purchaseInvoiceLines.filter(l => l.consigne === true && (l.quantity ?? 0) >= 0);
  }
  get purchaseDeconsigneLines(): PurchaseInvoiceLine[] {
    return this.purchaseInvoiceLines.filter(l => (l.quantity ?? 0) < 0);
  }
  get purchaseTotalColis(): number {
    return this.purchaseNormalLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get purchaseTotalPET(): number {
    return this.purchaseNormalLines
      .filter(l => l.categoryName?.trim().toUpperCase().startsWith('PET'))
      .reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get purchaseConsigneMontant(): number {
    return this.purchaseConsigneLines.reduce((s, l) => s + (l.montantTTC ?? 0), 0);
  }
  get purchaseDeconsigneMontant(): number {
    return this.purchaseDeconsigneLines.reduce((s, l) => s + Math.abs(l.montantTTC ?? 0), 0);
  }
  get purchaseQteConsigne(): number {
    return this.purchaseConsigneLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get purchaseQteDeconsigne(): number {
    return this.purchaseDeconsigneLines.reduce((s, l) => s + Math.abs(l.quantity ?? 0), 0);
  }
  get purchaseTotalRabaisHT(): number {
    return this.purchaseInvoiceLines.reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }
  get purchaseTotalRabaisTTC(): number {
    return this.purchaseInvoiceLines.reduce((s, l) => {
      const r = l.totalRabaisLigne ?? 0;
      return s + r * (1 + (l.tauxTVA ?? 0) / 100);
    }, 0);
  }

  get totalColis(): number {
    return this.salesLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get totalPET(): number {
    return this.salesLines.filter(l => l.categoryName?.trim().toUpperCase().startsWith('PET'))
      .reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get totalCasier(): number {
    return this.salesLines.filter(l => l.uomName?.toLowerCase().includes('casier'))
      .reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get consigneMontant(): number {
    return this.consigneLines.reduce((s, l) => s + (l.montantTTC ?? 0), 0);
  }
  get deconsigneMontant(): number {
    return this.deconsigneLines.reduce((s, l) => s + Math.abs(l.montantTTC ?? 0), 0);
  }
  get qteConsigne(): number {
    return this.consigneLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get qteDeconsigne(): number {
    return this.deconsigneLines.reduce((s, l) => s + Math.abs(l.quantity ?? 0), 0);
  }

  isConsigneLine(l: SalesInvoiceLine): boolean {
    return l.consigne === true || (!!l.productCode && CONSIGNE_CODES.has(l.productCode.trim().toUpperCase()));
  }

  isConsigne(code?: string): boolean {
    return !!code && CONSIGNE_CODES.has(code.trim().toUpperCase());
  }

  fmt(n?: number | null): string {
    if (n == null) return '0';
    return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n);
  }

  fmtDate(d?: string | null): string {
    if (!d) return '';
    try { return new Date(d).toLocaleDateString('fr-FR', { day:'2-digit', month:'2-digit', year:'numeric' }); }
    catch { return d; }
  }

  montantEnLettres(n?: number | null): string {
    return toFrenchWords(Math.round(n ?? 0)) + ' Francs CFA';
  }

  setFormat(f: PrintFormat) { this.format = f; }
  close() { this.closed.emit(); }

  print(): void {
    this.printing = true;
    const html = this.buildFullHtml();
    const w = window.open('', '_blank', 'width=1000,height=1100');
    if (!w) { this.printing = false; return; }
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => {
      w.print();
      w.onafterprint = () => { w.close(); this.printing = false; };
    }, 600);
  }

  // ─── HTML generation ──────────────────────────────────────────────────────

  private buildFullHtml(): string {
    let css: string;
    let body: string;
    if (this.docType === 'bon') {
      css = BON_CSS; body = this.buildBonBody();
    } else if (this.docType === 'purchase_order') {
      css = this.format === 'a5' ? A5_CSS : A4_CSS; body = this.buildPurchaseOrderBody();
    } else if (this.docType === 'sales_order') {
      css = this.format === 'a5' ? A5_CSS : A4_CSS; body = this.buildSalesOrderBody();
    } else if (this.docType === 'purchase_invoice') {
      css = this.format === 'ticket' ? TICKET_CSS : this.format === 'a5' ? A5_CSS : A4_CSS;
      body = this.format === 'ticket' ? this.buildPurchaseInvoiceTicketBody() : this.buildPurchaseInvoiceBody(this.format === 'a5');
    } else {
      css = this.format === 'ticket' ? TICKET_CSS : this.format === 'a5' ? A5_CSS : A4_CSS;
      body = this.format === 'ticket' ? this.buildTicketBody() : this.buildInvoiceBody(this.format === 'a5');
    }
    return `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>${this.docTitle} ${this.docRef}</title>
<style>${css}</style></head><body>${body}</body></html>`;
  }

  private h(s?: string | number | null): string {
    if (s == null) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  private logoImgHtml(): string {
    if (this.companyLogoDataUrl) {
      return `<img src="${this.companyLogoDataUrl}" class="co-logo" alt="logo">`;
    }
    if (!this.companyLogoUrl) return '';
    const abs = this.companyLogoUrl.startsWith('http')
      ? this.companyLogoUrl
      : `${window.location.origin}${this.companyLogoUrl}`;
    return `<img src="${abs}" class="co-logo" alt="logo">`;
  }

  private companyHeaderHtml(): string {
    const ci = this.companyInfo;
    const name    = ci?.name      || this.companyName  || '';
    const sigle   = ci?.sigle    || '';
    const rccm    = ci?.rccm     || '';
    const nif     = ci?.nif      || '';
    const adresse = ci?.adresse  || '';
    const tel     = ci?.telephone || this.companyPhone || '';
    const email   = ci?.email    || '';

    const sigleHtml   = sigle   ? ` <span class="co-sigle">(${this.h(sigle)})</span>` : '';
    const adresseHtml = adresse ? `<div class="co-info">${this.h(adresse)}</div>` : '';
    const rccmHtml    = rccm    ? `<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(rccm)}</div>` : '';
    const nifHtml     = nif     ? `<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(nif)}</div>` : '';
    const telHtml     = tel     ? `<div class="co-info"><span class="co-lbl">Tél :</span> ${this.h(tel)}</div>` : '';
    const emailHtml   = email   ? `<div class="co-info"><span class="co-lbl">Email :</span> ${this.h(email)}</div>` : '';

    return `${this.logoImgHtml()}
      <div class="co-name">${this.h(name)}${sigleHtml}</div>
      ${adresseHtml}${rccmHtml}${nifHtml}${telHtml}${emailHtml}`;
  }

  private ticketCompanyHtml(): string {
    const ci = this.companyInfo;
    const name  = ci?.name      || this.companyName  || '';
    const sigle = ci?.sigle    || '';
    const rccm  = ci?.rccm     || '';
    const nif   = ci?.nif      || '';
    const tel   = ci?.telephone || this.companyPhone || '';
    const email = ci?.email    || '';
    const logo  = this.logoImgHtml();

    return `
      ${logo ? `<div class="t-logo">${logo}</div>` : ''}
      <div class="t-company">${this.h(name)}${sigle ? ` (${this.h(sigle)})` : ''}</div>
      ${rccm  ? `<div class="t-coinfo">RCCM : ${this.h(rccm)}</div>` : ''}
      ${nif   ? `<div class="t-coinfo">NIF : ${this.h(nif)}</div>` : ''}
      ${tel   ? `<div class="t-coinfo">Tél : ${this.h(tel)}</div>` : ''}
      ${email ? `<div class="t-coinfo">Email : ${this.h(email)}</div>` : ''}`;
  }

  private buildInvoiceBody(compact = false): string {
    const inv = this.invoice!;
    const title = this.docType === 'avoir' ? 'AVOIR' : 'FACTURE';
    const linesHtml = this.salesLines.map(l => `
      <tr>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(l.prixUnitaire)}</td>
        <td class="r bold-teal">${this.fmt(l.prixUnitaireTTC ?? 0)}</td>
        <td class="r rabais">${(l.rabaisUnitaire ?? 0) > 0 ? '–' + this.fmt(l.rabaisUnitaire) : '—'}</td>
        <td class="r rabais-ttc">${(l.rabaisUnitaireTTC ?? 0) > 0 ? '–' + this.fmt(l.rabaisUnitaireTTC) : '—'}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(l.montantTTC)}</td>
      </tr>`).join('');

    const consigneHtml = this.consigneLines.length ? `
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.consigneLines.map(l => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(l.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join('')}` : '';

    const deconsigneHtml = this.deconsigneLines.length ? `
      <tr class="deconsigne-header"><td colspan="9">DÉCONSIGNES</td></tr>
      ${this.deconsigneLines.map(l => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(Math.abs(l.quantity ?? 0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join('')}` : '';

    // Ristournes : affichées à titre informatif seulement, NON déduites du total
    const ristourneHtml = inv.ristourneDetails?.length ? `
      <tr class="section-header"><td colspan="9">RISTOURNES (à récupérer séparément)</td></tr>
      ${inv.ristourneDetails.map(r => `
        <tr class="ristourne-row">
          <td colspan="2">${this.h(r.categoryName)}</td>
          <td class="r">${this.fmt(r.quantite)}</td>
          <td class="r">${this.fmt(r.montantUnitaire)}</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="r">${this.fmt(r.montantTotal)}</td>
          <td class="r">${this.fmt(r.montantTotal)}</td>
        </tr>`).join('')}` : '';

    const netAPayer = inv.netAPayer ?? (inv.totalTTC ?? 0) + (inv.fraisEnlevementTTC ?? 0);

    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${title}</div>
      <div class="doc-ref">${this.h(inv.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT</div>
      <div class="meta-value">${this.h(inv.partnerName)}</div>
      ${inv.warehouseName ? `<div class="meta-sub">Entrepôt : ${this.h(inv.warehouseName)}</div>` : ''}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(inv.date)}</span></div>
      ${inv.dateEcheance ? `<div class="meta-row"><span class="ml">Échéance</span><span>${this.fmtDate(inv.dateEcheance)}</span></div>` : ''}
      ${inv.salesOrderName ? `<div class="meta-row"><span class="ml">Commande</span><span>${this.h(inv.salesOrderName)}</span></div>` : ''}
      ${inv.notes ? `<div class="meta-row"><span class="ml">Réf. client</span><span>${this.h(inv.notes)}</span></div>` : ''}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">Désignation</th>
        <th class="r">Qté</th><th class="r">P.U.HT</th>
        <th class="r">P.U.TTC</th><th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${linesHtml}
      ${consigneHtml}
      ${deconsigneHtml}
      ${ristourneHtml}
    </tbody>
  </table>

  <table class="recap">
    <thead><tr>
      <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
      <th>Consigne (F)</th><th>Déconsigne (F)</th><th>Qté Csgn</th><th>Qté Dcsgn</th>
    </tr></thead>
    <tbody><tr>
      <td class="r">${this.fmt(this.totalColis)}</td>
      <td class="r">${this.fmt(this.totalPET)}</td>
      <td class="r">${this.fmt(this.totalCasier)}</td>
      <td class="r">${this.fmt(inv.totalLiquideNu ?? 0)}</td>
      <td class="r">${this.fmt(this.consigneMontant)}</td>
      <td class="r">– ${this.fmt(this.deconsigneMontant)}</td>
      <td class="r">${this.fmt(this.qteConsigne)}</td>
      <td class="r">– ${this.fmt(this.qteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(inv.totalTVA)} F</span></div>
      ${inv.totalPrecompte ? `<div class="tot-row"><span>Précompte (PSA)</span><span>${this.fmt(inv.totalPrecompte)} F</span></div>` : ''}
      ${(inv.fraisEnlevementTTC ?? 0) > 0 ? `<div class="tot-row enlevement"><span>Frais d'enlèvement</span><span>+ ${this.fmt(inv.fraisEnlevementTTC)} F</span></div>` : ''}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(inv.totalTTC)} F</span></div>
      ${(inv.totalRistourne ?? 0) > 0 ? `<div class="tot-row ristourne"><span>Ristournes (à récupérer)</span><span>${this.fmt(inv.totalRistourne)} F</span></div>` : ''}
      ${(inv.totalRabais ?? 0) > 0 ? `<div class="tot-row rabais"><span>Rabais HT</span><span>- ${this.fmt(inv.totalRabais)} F</span></div>` : ''}
      ${(inv.totalRabaisTTC ?? 0) > 0 ? `<div class="tot-row rabais"><span>Rabais TTC déduit</span><span>- ${this.fmt(inv.totalRabaisTTC)} F</span></div>` : ''}
      <div class="tot-row net"><span>NET À PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
      ${inv.montantPaye ? `<div class="tot-row paid"><span>Déjà payé</span><span>${this.fmt(inv.montantPaye)} F</span></div>` : ''}
      ${(inv.montantDu ?? 0) > 0.01 ? `<div class="tot-row due"><span>Reste dû</span><span>${this.fmt(inv.montantDu)} F</span></div>` : ''}
    </div>
  </div>

  <div class="lettres">
    Arrêté à la somme de : <strong>${this.montantEnLettres(netAPayer)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du livreur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature du client</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${inv.createdBy ? 'Agent : ' + this.h(inv.createdBy) + ' · ' : ''}${this.h(this.companyName)}</div>
</div>`;
  }

  private buildTicketBody(): string {
    const inv = this.invoice!;
    const title = this.docType === 'avoir' ? 'AVOIR' : 'FACTURE';
    const netAPayer = inv.netAPayer ?? (inv.totalTTC ?? 0) + (inv.fraisEnlevementTTC ?? 0);

    const linesHtml = this.salesLines.map(l => `
      <tr>
        <td class="tname">${this.h(l.productCode || l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}×${this.fmt(l.prixUnitaireTTC ?? l.prixUnitaire)}</td>
        <td class="r">${this.fmt(l.montantTTC)}</td>
      </tr>`).join('');

    const consignesHtml = this.consigneLines.length ? `
      <tr class="sep"><td colspan="3">— Consignes —</td></tr>
      ${this.consigneLines.map(l => `
        <tr><td class="tname">${this.h(l.productCode || l.description)}</td>
            <td class="r">${this.fmt(l.quantity)}</td>
            <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join('')}` : '';

    const deconsignesHtml = this.deconsigneLines.length ? `
      <tr class="sep"><td colspan="3">— Déconsignes —</td></tr>
      ${this.deconsigneLines.map(l => `
        <tr><td class="tname">${this.h(l.productCode || l.description)}</td>
            <td class="r">${this.fmt(Math.abs(l.quantity ?? 0))}</td>
            <td class="r">-${this.fmt(Math.abs(l.montantTTC ?? 0))}</td>
        </tr>`).join('')}` : '';

    return `
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${title}</div>
  <div class="t-ref">${this.h(inv.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(inv.date)}</span></div>
  <div class="t-line"><span>Client</span><span>${this.h(inv.partnerName)}</span></div>
  ${inv.notes ? `<div class="t-line"><span>Réf. client</span><span>${this.h(inv.notes)}</span></div>` : ''}
  <div class="t-sep"></div>
  <table class="t-lines">
    <tbody>${linesHtml}${consignesHtml}${deconsignesHtml}</tbody>
  </table>
  <div class="t-sep"></div>
  <div class="t-line small"><span>Total Colis</span><span>${this.fmt(this.totalColis)}</span></div>
  ${this.totalPET > 0 ? `<div class="t-line small"><span>Total PET</span><span>${this.fmt(this.totalPET)}</span></div>` : ''}
  ${this.totalCasier > 0 ? `<div class="t-line small"><span>Total Casier</span><span>${this.fmt(this.totalCasier)}</span></div>` : ''}
  ${(inv.totalLiquideNu ?? 0) > 0 ? `<div class="t-line small"><span>Liq. Nu</span><span>${this.fmt(inv.totalLiquideNu)} F</span></div>` : ''}
  ${this.consigneMontant > 0 ? `<div class="t-line small"><span>Consigne</span><span>${this.fmt(this.consigneMontant)} F</span></div>` : ''}
  ${this.deconsigneMontant > 0 ? `<div class="t-line small"><span>Déconsigne</span><span>– ${this.fmt(this.deconsigneMontant)} F</span></div>` : ''}
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
  <div class="t-line"><span>TVA 19,25%</span><span>${this.fmt(inv.totalTVA)} F</span></div>
  ${inv.totalPrecompte ? `<div class="t-line"><span>PSA</span><span>${this.fmt(inv.totalPrecompte)} F</span></div>` : ''}
  ${(inv.fraisEnlevementTTC ?? 0) > 0 ? `<div class="t-line t-enlevement"><span>Enlèvement</span><span>+ ${this.fmt(inv.fraisEnlevementTTC)} F</span></div>` : ''}
  <div class="t-line t-subtotal"><span>Total TTC</span><span>${this.fmt(inv.totalTTC)} F</span></div>
  ${(inv.totalRistourne ?? 0) > 0 ? `
  <div class="t-sep-dots"></div>
  <div class="t-ristourne-hdr">RISTOURNES (à récupérer)</div>
  <div class="t-line t-ristourne"><span>Total ristournes</span><span>${this.fmt(inv.totalRistourne)} F</span></div>
  <div class="t-sep-dots"></div>` : ''}
  <div class="t-sep"></div>
  <div class="t-total"><span>NET À PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
  ${inv.montantPaye ? `<div class="t-line"><span>Déjà payé</span><span>${this.fmt(inv.montantPaye)} F</span></div>` : ''}
  ${(inv.montantDu ?? 0) > 0.01 ? `<div class="t-line small"><span>Reste dû</span><span>${this.fmt(inv.montantDu)} F</span></div>` : ''}
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(netAPayer)}</div>
  <div class="t-thanks">Merci de votre confiance !</div>
  ${inv.createdBy ? `<div class="t-line small"><span>Agent</span><span>${this.h(inv.createdBy)}</span></div>` : ''}
  <div class="t-sep"></div>
  <div class="t-sig-box">
    <div class="t-sig-lbl">Signature du livreur</div>
    <div class="t-sig-name">Nom : ___________________________</div>
    <div class="t-sig-area"></div>
  </div>
  <div class="t-sig-gap"></div>
  <div class="t-sig-box">
    <div class="t-sig-lbl">Cachet &amp; signature client</div>
    <div class="t-sig-name">Nom : ___________________________</div>
    <div class="t-sig-area"></div>
  </div>
</div>`;
  }

  private buildPurchaseInvoiceBody(compact = false): string {
    const inv = this.purchaseInvoice!;
    const title = inv.type === 'credit_note' ? 'AVOIR FOURNISSEUR' : 'FACTURE FOURNISSEUR';
    const totalRabaisHT  = this.purchaseTotalRabaisHT;
    const totalRabaisTTC = this.purchaseTotalRabaisTTC;

    const linesHtml = this.purchaseNormalLines.map(l => {
      // prixUnitaire = prix catalogue (le tarif fournisseur est isolé en rabais, pas déduit du prix)
      const catHT  = (l.prixUnitaire ?? 0);
      const catTTC = catHT * (1 + (l.tauxTVA ?? 0) / 100);
      const rabHT  = l.rabaisUnitaire ?? 0;
      const rabTTC = rabHT * (1 + (l.tauxTVA ?? 0) / 100);
      const netTTC = (l.montantHT ?? 0) + (l.montantTVA ?? 0) + (l.precompte ?? 0);
      return `
      <tr>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(catHT)}</td>
        <td class="r bold-teal">${this.fmt(catTTC)}</td>
        <td class="r rabais">${rabHT > 0 ? '–' + this.fmt(rabHT) : '—'}</td>
        <td class="r rabais-ttc">${rabTTC > 0 ? '–' + this.fmt(rabTTC) : '—'}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(Math.round(netTTC))}</td>
      </tr>`;
    }).join('');

    const consigneHtml = this.purchaseConsigneLines.length ? `
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.purchaseConsigneLines.map(l => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(l.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join('')}` : '';

    const deconsigneHtml = this.purchaseDeconsigneLines.length ? `
      <tr class="deconsigne-header"><td colspan="9">DÉCONSIGNES</td></tr>
      ${this.purchaseDeconsigneLines.map(l => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(Math.abs(l.quantity ?? 0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join('')}` : '';

    const netAPayer = inv.netAPayer ?? inv.totalTTC ?? 0;

    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${title}</div>
      <div class="doc-ref">${this.h(inv.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">FOURNISSEUR</div>
      <div class="meta-value">${this.h(inv.partnerName)}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(inv.date)}</span></div>
      ${inv.dateEcheance ? `<div class="meta-row"><span class="ml">Échéance</span><span>${this.fmtDate(inv.dateEcheance)}</span></div>` : ''}
      ${inv.purchaseOrderName ? `<div class="meta-row"><span class="ml">Commande</span><span>${this.h(inv.purchaseOrderName)}</span></div>` : ''}
      ${inv.notes ? `<div class="meta-row"><span class="ml">Réf.</span><span>${this.h(inv.notes)}</span></div>` : ''}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">Désignation</th>
        <th class="r">Qté</th><th class="r">P.U.HT</th>
        <th class="r">P.U.TTC</th><th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${linesHtml}
      ${consigneHtml}
      ${deconsigneHtml}
    </tbody>
  </table>

  <table class="recap">
    <thead><tr>
      <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
      <th>Consigne (F)</th><th>Déconsigne (F)</th><th>Qté Csgn</th><th>Qté Dcsgn</th>
    </tr></thead>
    <tbody><tr>
      <td class="r">${this.fmt(this.purchaseTotalColis)}</td>
      <td class="r">${this.fmt(this.purchaseTotalPET)}</td>
      <td class="r">0</td>
      <td class="r">${this.fmt(inv.totalLiquideNu ?? 0)}</td>
      <td class="r">${this.fmt(this.purchaseConsigneMontant)}</td>
      <td class="r">– ${this.fmt(this.purchaseDeconsigneMontant)}</td>
      <td class="r">${this.fmt(this.purchaseQteConsigne)}</td>
      <td class="r">– ${this.fmt(this.purchaseQteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(inv.totalTVA)} F</span></div>
      ${inv.totalPrecompte ? `<div class="tot-row"><span>Précompte (PSA)</span><span>${this.fmt(inv.totalPrecompte)} F</span></div>` : ''}
      ${(inv.fraisEnlevementTTC ?? 0) > 0 ? `<div class="tot-row enlevement"><span>Frais d'enlèvement</span><span>+ ${this.fmt(inv.fraisEnlevementTTC)} F</span></div>` : ''}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(inv.totalTTC)} F</span></div>
      ${totalRabaisHT > 0 ? `<div class="tot-row ristourne"><span>Rabais HT (601901)</span><span>– ${this.fmt(Math.round(totalRabaisHT))} F</span></div>` : ''}
      ${totalRabaisTTC > 0 ? `<div class="tot-row rabais"><span>Rabais TTC déduit</span><span>– ${this.fmt(Math.round(totalRabaisTTC))} F</span></div>` : ''}
      <div class="tot-row net"><span>NET À PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
      ${inv.montantPaye ? `<div class="tot-row paid"><span>Déjà payé</span><span>${this.fmt(inv.montantPaye)} F</span></div>` : ''}
      ${(inv.montantDu ?? 0) > 0.01 ? `<div class="tot-row due"><span>Reste dû</span><span>${this.fmt(inv.montantDu)} F</span></div>` : ''}
    </div>
  </div>

  <div class="lettres">
    Arrêté à la somme de : <strong>${this.montantEnLettres(netAPayer)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du fournisseur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${inv.createdBy ? 'Agent : ' + this.h(inv.createdBy) + ' · ' : ''}${this.h(this.companyName)}</div>
</div>`;
  }

  private buildPurchaseInvoiceTicketBody(): string {
    const inv = this.purchaseInvoice!;
    const title = inv.type === 'credit_note' ? 'AVOIR FOURN.' : 'FACT. FOURN.';
    const netAPayer = inv.netAPayer ?? inv.totalTTC ?? 0;
    const linesHtml = this.purchaseInvoiceLines.map(l => `
      <tr>
        <td class="tname">${this.h(l.productCode || l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}×${this.fmt(l.prixUnitaire)}</td>
        <td class="r">${this.fmt(l.montantTTC)}</td>
      </tr>`).join('');
    return `
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${title}</div>
  <div class="t-ref">${this.h(inv.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(inv.date)}</span></div>
  <div class="t-line"><span>Fournisseur</span><span>${this.h(inv.partnerName)}</span></div>
  <div class="t-sep"></div>
  <table class="t-lines"><tbody>${linesHtml}</tbody></table>
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
  <div class="t-line"><span>TVA</span><span>${this.fmt(inv.totalTVA)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-total"><span>NET À PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(netAPayer)}</div>
</div>`;
  }

  private buildPurchaseOrderBody(): string {
    const po = this.purchaseOrder!;
    const linesHtml = (po.lines || []).map((l, i) => `
      <tr>
        <td class="r idx">${i + 1}</td>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(l.prixUnitaire)}</td>
        <td class="r">${l.tauxTVA ? l.tauxTVA + '%' : '—'}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(l.montantTTC)}</td>
      </tr>`).join('');
    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE COMMANDE</div>
      <div class="doc-ref">${this.h(po.name)}</div>
    </div>
  </div>
  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">FOURNISSEUR</div>
      <div class="meta-value">${this.h(po.partnerName || '—')}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(po.date)}</span></div>
      ${po.dateExpected ? `<div class="meta-row"><span class="ml">Livraison prévue</span><span>${this.fmtDate(po.dateExpected)}</span></div>` : ''}
      ${po.notes ? `<div class="meta-row"><span class="ml">Notes</span><span>${this.h(po.notes)}</span></div>` : ''}
    </div>
  </div>
  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th><th>Code</th><th class="desc">Désignation</th>
        <th class="r">Qté</th><th class="r">P.U. HT</th>
        <th class="r">TVA</th><th class="r">Total HT</th><th class="r">Total TTC</th>
      </tr>
    </thead>
    <tbody>${linesHtml}</tbody>
  </table>
  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(po.totalHT)} F</span></div>
      <div class="tot-row"><span>Taxes (TVA + PSA)</span><span>${this.fmt((po.totalTTC ?? 0) - (po.totalHT ?? 0))} F</span></div>
      <div class="tot-row net"><span>TOTAL TTC</span><span>${this.fmt(po.totalTTC)} F</span></div>
    </div>
  </div>
  <div class="lettres">Arrêté à la somme de : <strong>${this.montantEnLettres(po.totalTTC)}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le fournisseur</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la société</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Bon de commande soumis à acceptation du fournisseur · ${this.h(this.companyName)}</div>
</div>`;
  }

  private buildSalesOrderBody(): string {
    const so = this.salesOrder!;
    const printLines = (so.lines || []).filter(l => l.productId || (l.productCode && l.productCode.trim()));
    const linesHtml = printLines.map((l, i) => `
      <tr>
        <td class="r idx">${i + 1}</td>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(l.prixUnitaire)}</td>
        ${l.tauxRemise ? `<td class="r">${l.tauxRemise}%</td>` : '<td class="r">—</td>'}
        <td class="r">${l.tauxTVA ? l.tauxTVA + '%' : '—'}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(l.montantTTC)}</td>
      </tr>`).join('');
    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE COMMANDE</div>
      <div class="doc-ref">${this.h(so.name)}</div>
    </div>
  </div>
  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT</div>
      <div class="meta-value">${this.h(so.partnerName || '—')}</div>
      ${so.warehouseName ? `<div class="meta-sub">Entrepôt : ${this.h(so.warehouseName)}</div>` : ''}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(so.date)}</span></div>
      ${so.dateEcheance ? `<div class="meta-row"><span class="ml">Échéance</span><span>${this.fmtDate(so.dateEcheance)}</span></div>` : ''}
      ${so.invoiceName ? `<div class="meta-row"><span class="ml">Facture</span><span>${this.h(so.invoiceName)}</span></div>` : ''}
      ${so.notes ? `<div class="meta-row"><span class="ml">Notes</span><span>${this.h(so.notes)}</span></div>` : ''}
    </div>
  </div>
  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th><th>Code</th><th class="desc">Désignation</th>
        <th class="r">Qté</th><th class="r">P.U. HT</th>
        <th class="r">Remise</th><th class="r">TVA</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>${linesHtml}</tbody>
  </table>
  <div class="totals-wrap">
    <div class="totals">
      ${so.totalRemise ? `<div class="tot-row"><span>Remise totale</span><span>– ${this.fmt(so.totalRemise)} F</span></div>` : ''}
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(so.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(so.totalTVA)} F</span></div>
      ${(so.totalPrecompte ?? 0) > 0 ? `<div class="tot-row"><span>PSA (Précompte)</span><span>${this.fmt(so.totalPrecompte)} F</span></div>` : ''}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(so.totalTTC)} F</span></div>
      ${(so.fraisEnlevementTTC ?? 0) > 0 ? `<div class="tot-row"><span>Frais d'enlèvement</span><span>${this.fmt(so.fraisEnlevementTTC)} F</span></div>` : ''}
      <div class="tot-row net"><span>NET À PAYER</span><span>${this.fmt((so.totalTTC ?? 0) + (so.fraisEnlevementTTC ?? 0))} F</span></div>
    </div>
  </div>
  <div class="lettres">Arrêté à la somme de : <strong>${this.montantEnLettres((so.totalTTC ?? 0) + (so.fraisEnlevementTTC ?? 0))}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le client</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la société</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${so.createdBy ? 'Agent : ' + this.h(so.createdBy) + ' · ' : ''}Bon de commande · ${this.h(this.companyName)}</div>
</div>`;
  }

  private buildBonBody(): string {
    const p = this.picking!;
    const movesHtml = this.pickingMoves.map((m, i) => `
      <tr>
        <td class="r idx">${i + 1}</td>
        <td>${this.h(m.productCode)}</td>
        <td class="desc">${this.h(m.productName)}</td>
        <td class="r">${this.fmt(m.qtyDemanded)}</td>
        <td class="r bold">${this.fmt(m.qtyDone ?? m.qtyDemanded)}</td>
        <td>${this.h(m.uomName)}</td>
      </tr>`).join('');

    const totalQty = this.pickingMoves.reduce((s, m) => s + (m.qtyDone ?? m.qtyDemanded ?? 0), 0);

    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE LIVRAISON</div>
      <div class="doc-ref">${this.h(p.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT / DESTINATAIRE</div>
      <div class="meta-value">${this.h(p.partnerName || '—')}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(p.scheduledDate)}</span></div>
      ${p.origin ? `<div class="meta-row"><span class="ml">Origine</span><span>${this.h(p.origin)}</span></div>` : ''}
      ${p.notes  ? `<div class="meta-row"><span class="ml">Notes</span><span>${this.h(p.notes)}</span></div>` : ''}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th>
        <th>Code</th>
        <th class="desc">Désignation</th>
        <th class="r">Qté demandée</th>
        <th class="r">Qté livrée</th>
        <th>U.M.</th>
      </tr>
    </thead>
    <tbody>
      ${movesHtml}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="r total-lbl">TOTAL COLIS LIVRÉS</td>
        <td class="r bold total-val">${this.fmt(totalQty)}</td>
        <td></td>
      </tr>
    </tfoot>
  </table>

  <div class="signatures">
    <div class="sig">
      <div class="sig-lbl">Signature du livreur</div>
      <div class="sig-name">Nom : ____________________</div>
      <div class="sig-area"></div>
    </div>
    <div class="sig">
      <div class="sig-lbl">Cachet et signature du client</div>
      <div class="sig-name">Nom : ____________________</div>
      <div class="sig-area"></div>
    </div>
  </div>
  <div class="footer-note">Document non contractuel · ${this.h(this.companyName)}</div>
</div>`;
  }
}

// ─── Print CSS ────────────────────────────────────────────────────────────────

const BASE_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: Arial, sans-serif; }
.doc { padding: 14mm 14mm 10mm; max-width: 190mm; margin: 0 auto; }
.header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10mm; border-bottom: 2px solid #222; padding-bottom: 4mm; }
.co-logo { max-height: 52px; max-width: 130px; object-fit: contain; display: block; margin-bottom: 5px; }
.co-name { font-size: 14pt; font-weight: 700; color: #017E84; line-height: 1.2; }
.co-sigle { font-size: 10pt; font-weight: 500; color: #017E84; }
.co-info { font-size: 8.5pt; color: #444; margin-top: 2px; line-height: 1.3; }
.co-lbl { font-weight: 600; color: #222; }
.title-block { text-align: right; }
.doc-type { font-size: 18pt; font-weight: 800; letter-spacing: 1px; color: #222; }
.doc-ref { font-size: 11pt; font-weight: 600; color: #017E84; margin-top: 2px; }
.meta { display: flex; justify-content: space-between; margin-bottom: 8mm; }
.meta-label { font-size: 7pt; font-weight: 700; text-transform: uppercase; color: #888; margin-bottom: 2px; }
.meta-value { font-size: 12pt; font-weight: 700; }
.meta-sub { font-size: 8pt; color: #555; }
.meta-dates { text-align: right; }
.meta-row { display: flex; justify-content: space-between; gap: 12px; font-size: 9pt; margin-bottom: 2px; }
.ml { color: #888; font-size: 8pt; }
table.lines { width: 100%; border-collapse: collapse; margin-bottom: 5mm; font-size: 8.5pt; }
table.lines thead tr { background: #017E84; color: white; }
table.lines thead th { padding: 4px 6px; text-align: left; font-weight: 600; font-size: 7.5pt; }
table.lines tbody tr:nth-child(even) { background: #f7fafa; }
table.lines tbody td { padding: 3px 6px; border-bottom: 1px solid #e8e8e8; }
.r { text-align: right; }
.bold { font-weight: 700; }
.bold-teal { font-weight: 700; color: #017E84; }
.rabais { color: #e65100; font-weight: 600; }
.rabais-ttc { color: #c0392b; font-weight: 700; }
.desc { max-width: 120px; }
.consigne-header td, .section-header td { background: #e8f5f5; font-size: 7pt; font-weight: 700; color: #017E84; padding: 3px 6px; text-transform: uppercase; }
.deconsigne-header td { background: #fff3e0; font-size: 7pt; font-weight: 700; color: #e67e22; padding: 3px 6px; text-transform: uppercase; }
.consigne-row td, .ristourne-row td { background: #fafafa; color: #555; font-size: 8pt; }
table.recap { width: 100%; border-collapse: collapse; margin-bottom: 4mm; font-size: 7.5pt; }
table.recap thead tr { background: #e8f5f5; }
table.recap thead th { padding: 3px 5px; font-weight: 700; color: #017E84; text-align: right; border: 1px solid #cde; }
table.recap tbody td { padding: 3px 5px; border: 1px solid #e0e0e0; background: #fafafa; }
.totals-wrap { display: flex; justify-content: flex-end; margin-bottom: 5mm; }
.totals { width: 72mm; }
.tot-row { display: flex; justify-content: space-between; padding: 2px 6px; font-size: 9pt; border-bottom: 1px solid #eee; }
.tot-row.grand { font-weight: 700; background: #f0f8f8; }
.tot-row.taxes { font-weight: 600; color: #444; background: #f5f5f0; }
.tot-row.net { font-size: 11pt; font-weight: 800; background: #017E84; color: white; padding: 4px 6px; border-radius: 2px; }
.tot-row.deduct span:last-child { color: #c00; }
.tot-row.ristourne span:last-child { color: #2a7; }
.tot-row.enlevement span:last-child { color: #c60; font-weight: 600; }
.tot-row.paid span:last-child { color: #2a7; }
.tot-row.due { font-weight: 700; color: #c00; }
.lettres { font-size: 8.5pt; font-style: italic; border-top: 1px solid #ccc; padding-top: 3mm; margin-bottom: 8mm; }
.signatures { display: flex; justify-content: space-between; gap: 10mm; margin-top: 8mm; }
.sig { flex: 1; }
.sig-lbl { font-size: 8pt; font-weight: 700; margin-bottom: 2mm; }
.sig-name { font-size: 8pt; color: #555; margin-bottom: 2mm; }
.sig-area { height: 20mm; border: 1px solid #aaa; border-radius: 2px; }
.footer-note { font-size: 7pt; color: #aaa; text-align: center; margin-top: 6mm; border-top: 1px solid #eee; padding-top: 2mm; }
.idx { color: #aaa; font-size: 7pt; }
.total-lbl { font-size: 8.5pt; font-weight: 700; }
.total-val { font-size: 11pt; font-weight: 800; color: #017E84; }
table.lines tfoot td { border-top: 2px solid #017E84; padding: 4px 6px; background: #f0f8f8; }
@page { margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`;

const A4_CSS = BASE_CSS + `
body { font-size: 9pt; }
@page { size: A4 portrait; }
`;

const A5_CSS = BASE_CSS + `
body { font-size: 8pt; }
.doc { padding: 10mm 10mm 8mm; max-width: 138mm; }
.doc-type { font-size: 14pt; }
.doc-ref { font-size: 9.5pt; }
.co-name { font-size: 12pt; }
.co-info { font-size: 7.5pt; }
table.lines { font-size: 7.5pt; }
.tot-row.net { font-size: 9.5pt; }
.lettres { font-size: 7.5pt; }
.sig-area { height: 15mm; }
@page { size: A5 portrait; }
`;

const TICKET_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: 'Courier New', monospace; font-size: 9pt; font-weight: 700; width: 80mm; }
.ticket { width: 80mm; padding: 3mm 4mm; }
.t-logo { text-align: center; margin-bottom: 2mm; } .t-logo img { max-height: 32px; max-width: 60mm; object-fit: contain; }
.t-company { font-size: 12pt; font-weight: 800; text-align: center; margin-bottom: 1mm; }
.t-coinfo { font-size: 8pt; text-align: center; color: #555; margin-bottom: 1px; }
.t-phone { font-size: 8.5pt; text-align: center; color: #555; margin-bottom: 2mm; }
.t-sep { border-top: 1px dashed #666; margin: 2mm 0; }
.t-doctype { font-size: 13pt; font-weight: 800; text-align: center; letter-spacing: 2px; margin: 1mm 0; }
.t-ref { font-size: 10pt; font-weight: 700; text-align: center; color: #333; margin-bottom: 2mm; }
.t-line { display: flex; justify-content: space-between; font-size: 9pt; margin: 1px 0; }
.t-line.small { font-size: 8pt; color: #555; }
table.t-lines { width: 100%; border-collapse: collapse; margin: 1mm 0; }
table.t-lines td { padding: 1px 2px; font-size: 8.5pt; vertical-align: top; }
.tname { max-width: 40mm; }
.sep td { text-align: center; color: #222; font-size: 8.5pt; padding: 3px 0; font-weight: 700; border-top: 1px dotted #666; border-bottom: 1px dotted #666; }
.r { text-align: right; }
.t-subtotal { font-weight: 700; border-top: 1px solid #333; padding-top: 1px; }
.t-ristourne { font-weight: 700; }
.t-ristourne span:last-child { color: #1a7a3a; }
.t-ristourne-hdr { font-size: 8.5pt; font-weight: 800; text-align: center; color: #1a7a3a; padding: 2px 0; text-transform: uppercase; letter-spacing: 1px; }
.t-sep-dots { border-top: 1px dotted #666; margin: 2mm 0; }
.t-enlevement span:last-child { color: #c60; }
.t-total { display: flex; justify-content: space-between; font-size: 12pt; font-weight: 800; margin: 2mm 0; border-top: 2px solid #111; border-bottom: 2px solid #111; padding: 1mm 0; }
.t-lettres { font-size: 7.5pt; font-style: italic; text-align: center; margin: 2mm 0; color: #444; }
.t-thanks { font-size: 9pt; text-align: center; font-weight: 700; margin: 2mm 0; }
.t-sig-box { width: 100%; margin-top: 2mm; }
.t-sig-gap { height: 3mm; }
.t-sig-lbl { font-size: 8.5pt; font-weight: 700; margin-bottom: 1mm; text-align: center; }
.t-sig-name { font-size: 8pt; color: #444; margin-bottom: 1mm; }
.t-sig-area { height: 18mm; border: 1px solid #999; border-radius: 2px; width: 100%; }
@page { size: 80mm auto; margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`;

const BON_CSS = A4_CSS;

// ─── French number-to-words ───────────────────────────────────────────────────

function toFrenchWords(n: number): string {
  if (n === 0) return 'Zéro';
  if (n < 0) return 'Moins ' + toFrenchWords(-n);

  const units = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf',
    'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
  const tens  = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

  function below100(n: number): string {
    if (n < 20) return units[n];
    const t = Math.floor(n / 10), u = n % 10;
    if (t === 7) return 'soixante-' + (u === 1 ? 'et-onze' : units[10 + u]);
    if (t === 9) return 'quatre-vingt-' + (u === 0 ? '' : units[u]).replace(/^-/, '');
    const ten = tens[t];
    if (u === 0) return ten + (t === 8 ? 's' : '');
    if (u === 1 && t !== 8) return ten + '-et-un';
    return ten + '-' + units[u];
  }

  function below1000(n: number): string {
    if (n < 100) return below100(n);
    const h = Math.floor(n / 100), r = n % 100;
    const prefix = h === 1 ? 'cent' : below100(h) + ' cent';
    return r === 0 ? prefix + (h > 1 ? 's' : '') : prefix + ' ' + below100(r);
  }

  const parts: string[] = [];
  const billions  = Math.floor(n / 1_000_000_000); n %= 1_000_000_000;
  const millions  = Math.floor(n / 1_000_000);      n %= 1_000_000;
  const thousands = Math.floor(n / 1_000);           n %= 1_000;
  const remainder = n;

  if (billions)  parts.push(below1000(billions)  + (billions  === 1 ? ' milliard'  : ' milliards'));
  if (millions)  parts.push(below1000(millions)  + (millions  === 1 ? ' million'   : ' millions'));
  if (thousands) parts.push(thousands === 1 ? 'mille' : below1000(thousands) + ' mille');
  if (remainder) parts.push(below1000(remainder));

  const result = parts.join(' ').trim().replace(/\s+/g, ' ');
  return result.charAt(0).toUpperCase() + result.slice(1);
}
