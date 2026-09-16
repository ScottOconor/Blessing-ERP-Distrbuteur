import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Warehouse } from '../../../stock/services/stock.service';
import { SalesService, SalesClient } from '../../../sales/services/sales.service';
import { RistourneService } from '../../../sales/services/ristourne.service';
import { PurchaseService } from '../../../purchases/services/purchase.service';
import { RemiseService } from '../../../purchases/services/remise.service';
import { AccountJournal, Partner } from '../../../../core/models/account.model';
import { exportRowsToExcel } from '../../../../core/utils/excel-export.util';

interface ExportItem {
  id: string;
  label: string;
  description: string;
  hasDateFilter: boolean;
  hasJournalFilter: boolean;
  hasPartnerFilter: boolean;
  partnerKind: 'client' | 'supplier' | null;
  hasWarehouseFilter: boolean;
  dateFrom: string;
  dateTo: string;
  journalId: number | null;
  partnerId: number | null;
  warehouseId: number | null;
  exporting: boolean;
}

interface ExportSection {
  title: string;
  icon: string;
  color: string;
  items: ExportItem[];
}

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss'
})
export class ExportComponent implements OnInit {
  sections: ExportSection[] = [];
  journals: AccountJournal[] = [];
  warehouses: Warehouse[] = [];
  clients: SalesClient[] = [];
  suppliers: Partner[] = [];
  errorMsg = '';
  successMsg = '';

  private companyId!: number;

  constructor(
    private authService: AuthService,
    private accountingService: AccountingService,
    private stockService: StockService,
    private salesService: SalesService,
    private ristourneService: RistourneService,
    private purchaseService: PurchaseService,
    private remiseService: RemiseService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(this.companyId).subscribe(j => this.journals = j);
    this.stockService.getWarehouses(this.companyId).subscribe(w => {
      this.warehouses = w.filter(x => x.active !== false);
    });
    this.salesService.getClients(this.companyId).subscribe(c => this.clients = c);
    this.accountingService.getPartners(this.companyId).subscribe(p => {
      this.suppliers = p.filter(x => x.type === 'supplier' || x.type === 'both');
    });
    this.sections = this.buildSections();
  }

  private defaultDateFrom(): string {
    return new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
  }
  private defaultDateTo(): string {
    return new Date().toISOString().split('T')[0];
  }

  private makeItem(partial: {
    id: string; label: string; description: string;
    hasDateFilter?: boolean; hasJournalFilter?: boolean;
    hasPartnerFilter?: boolean; partnerKind?: 'client' | 'supplier';
    hasWarehouseFilter?: boolean;
  }): ExportItem {
    const hasDateFilter = partial.hasDateFilter ?? false;
    return {
      id: partial.id, label: partial.label, description: partial.description,
      hasDateFilter, hasJournalFilter: partial.hasJournalFilter ?? false,
      hasPartnerFilter: partial.hasPartnerFilter ?? false, partnerKind: partial.partnerKind ?? null,
      hasWarehouseFilter: partial.hasWarehouseFilter ?? false,
      dateFrom: hasDateFilter ? this.defaultDateFrom() : '',
      dateTo: hasDateFilter ? this.defaultDateTo() : '',
      journalId: null, partnerId: null, warehouseId: null,
      exporting: false
    };
  }

  private buildSections(): ExportSection[] {
    return [
      {
        title: 'Comptabilité', icon: 'account_balance', color: '#2563EB',
        items: [
          this.makeItem({ id: 'pieces', label: 'Pièces comptables', description: 'Écritures comptables, filtrables par journal et période.', hasDateFilter: true, hasJournalFilter: true }),
          this.makeItem({ id: 'journaux', label: 'Journaux', description: 'Liste des journaux comptables configurés.' }),
          this.makeItem({ id: 'plan-comptable', label: 'Plan comptable', description: 'Tous les comptes du plan comptable OHADA.' }),
          this.makeItem({ id: 'partenaires', label: 'Clients & Fournisseurs', description: 'Tous les tiers (clients, fournisseurs).' }),
        ]
      },
      {
        title: 'Stock', icon: 'inventory_2', color: '#F97316',
        items: [
          this.makeItem({ id: 'articles', label: 'Articles', description: 'Catalogue complet : références, prix, stock, TVA.' }),
          this.makeItem({ id: 'mouvements', label: 'Mouvements de stock', description: 'Tous les mouvements de produits, filtrables par période.', hasDateFilter: true }),
          this.makeItem({ id: 'transferts', label: 'Transferts inter-dépôts', description: 'Transferts entre entrepôts, filtrables par période.', hasDateFilter: true }),
          this.makeItem({ id: 'expeditions', label: 'Expéditions inter-agences', description: 'Expéditions vers d\'autres agences, filtrables par période.', hasDateFilter: true }),
        ]
      },
      {
        title: 'Ventes', icon: 'point_of_sale', color: '#06B6D4',
        items: [
          this.makeItem({ id: 'commandes-ventes', label: 'Bons de commande', description: 'Commandes clients, filtrables par période, client et entrepôt.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'client', hasWarehouseFilter: true }),
          this.makeItem({ id: 'factures-ventes', label: 'Factures', description: 'Factures de vente, filtrables par période, client et entrepôt.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'client', hasWarehouseFilter: true }),
          this.makeItem({ id: 'avoirs-ventes', label: 'Avoirs', description: 'Avoirs clients, filtrables par période, client et entrepôt.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'client', hasWarehouseFilter: true }),
          this.makeItem({ id: 'remises-clients', label: 'Tarifs négociés clients', description: 'Tarifs négociés par client, avec le rabais calculé par article.', hasPartnerFilter: true, partnerKind: 'client' }),
          this.makeItem({ id: 'ristournes-config', label: 'Ristournes — Configuration', description: 'Taux de ristourne configurés par client et catégorie.', hasPartnerFilter: true, partnerKind: 'client' }),
          this.makeItem({ id: 'ristournes-paiements', label: 'Ristournes — Règlements', description: 'Règlements de ristournes, filtrables par période et client.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'client' }),
        ]
      },
      {
        title: 'Achats', icon: 'local_shipping', color: '#10B981',
        items: [
          this.makeItem({ id: 'commandes-achats', label: 'Bons de commande', description: 'Commandes fournisseurs, filtrables par période et fournisseur.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'supplier' }),
          this.makeItem({ id: 'factures-achats', label: 'Factures', description: 'Factures d\'achat, filtrables par période, fournisseur et entrepôt.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'supplier', hasWarehouseFilter: true }),
          this.makeItem({ id: 'avoirs-achats', label: 'Avoirs', description: 'Avoirs fournisseurs, filtrables par période, fournisseur et entrepôt.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'supplier', hasWarehouseFilter: true }),
          this.makeItem({ id: 'remises-fournisseurs', label: 'Tarifs négociés fournisseurs', description: 'Tarifs négociés par fournisseur, avec l\'écart calculé par article.', hasPartnerFilter: true, partnerKind: 'supplier' }),
          this.makeItem({ id: 'remises-config', label: 'Remises — Configuration', description: 'Taux de remise configurés par fournisseur et catégorie.', hasPartnerFilter: true, partnerKind: 'supplier' }),
          this.makeItem({ id: 'remises-paiements', label: 'Remises — Règlements', description: 'Règlements de remises, filtrables par période et fournisseur.', hasDateFilter: true, hasPartnerFilter: true, partnerKind: 'supplier' }),
        ]
      },
    ];
  }

  private findItem(id: string): ExportItem {
    for (const s of this.sections) {
      const it = s.items.find(i => i.id === id);
      if (it) return it;
    }
    throw new Error('Export inconnu : ' + id);
  }

  /** Filtre une liste par date (inclusive) via un accesseur, si from/to sont renseignés. */
  private filterByDate<T>(rows: T[], dateOf: (r: T) => string | undefined, from: string, to: string): T[] {
    if (!from && !to) return rows;
    return rows.filter(r => {
      const d = dateOf(r);
      if (!d) return true;
      if (from && d < from) return false;
      if (to && d > to) return false;
      return true;
    });
  }

  async runExport(id: string): Promise<void> {
    const item = this.findItem(id);
    item.exporting = true;
    this.errorMsg = '';
    try {
      switch (id) {
        case 'pieces': await this.exportPieces(item); break;
        case 'journaux': await this.exportJournaux(); break;
        case 'plan-comptable': await this.exportPlanComptable(); break;
        case 'partenaires': await this.exportPartenaires(); break;
        case 'articles': await this.exportArticles(); break;
        case 'mouvements': await this.exportMouvements(item); break;
        case 'transferts': await this.exportTransferts(item); break;
        case 'expeditions': await this.exportExpeditions(item); break;
        case 'commandes-ventes': await this.exportCommandesVentes(item); break;
        case 'factures-ventes': await this.exportFacturesVentes(item); break;
        case 'avoirs-ventes': await this.exportAvoirsVentes(item); break;
        case 'remises-clients': await this.exportRemisesClients(item); break;
        case 'ristournes-config': await this.exportRistournesConfig(item); break;
        case 'ristournes-paiements': await this.exportRistournesPaiements(item); break;
        case 'commandes-achats': await this.exportCommandesAchats(item); break;
        case 'factures-achats': await this.exportFacturesAchats(item); break;
        case 'avoirs-achats': await this.exportAvoirsAchats(item); break;
        case 'remises-fournisseurs': await this.exportRemisesFournisseurs(item); break;
        case 'remises-config': await this.exportRemisesConfig(item); break;
        case 'remises-paiements': await this.exportRemisesPaiements(item); break;
      }
      this.showSuccess(`Export "${item.label}" terminé`);
    } catch (e: any) {
      this.errorMsg = e?.error?.message || e?.message || 'Erreur lors de l\'export';
      setTimeout(() => this.errorMsg = '', 5000);
    } finally {
      item.exporting = false;
    }
  }

  private async toPromise<T>(obs: Observable<T>): Promise<T> {
    return new Promise((resolve, reject) => obs.subscribe({ next: resolve, error: reject }));
  }

  // ── Comptabilité ─────────────────────────────────────────────────────────

  private async exportPieces(item: ExportItem): Promise<void> {
    const moves = await this.toPromise(this.accountingService.getMoves(this.companyId, {
      journalId: item.journalId || undefined,
      dateFrom: item.dateFrom || undefined,
      dateTo: item.dateTo || undefined
    }));
    const rows = moves.map(m => [
      m.name || '', m.date, m.journalName || '', m.ref || '', m.partnerName || '',
      this.stateLabel(m.state), m.totalDebit ?? 0, m.totalCredit ?? 0
    ]);
    await exportRowsToExcel('Pièces comptables',
      ['Numéro', 'Date', 'Journal', 'Référence', 'Tiers', 'État', 'Total débit', 'Total crédit'],
      rows, this.fileName('pieces-comptables', item));
  }

  private async exportJournaux(): Promise<void> {
    const rows = this.journals.length ? this.journals : await this.toPromise(this.accountingService.getJournals(this.companyId));
    const mapped = rows.map(j => [j.code, j.name, j.type, j.defaultDebitAccountCode || '', j.defaultCreditAccountCode || '', j.active ? 'Oui' : 'Non']);
    await exportRowsToExcel('Journaux', ['Code', 'Nom', 'Type', 'Compte débit', 'Compte crédit', 'Actif'], mapped, this.fileName('journaux'));
  }

  private async exportPlanComptable(): Promise<void> {
    const accounts = await this.toPromise(this.accountingService.getAccounts(this.companyId));
    const rows = accounts.map(a => [a.code, a.name, a.accountType, a.internalType, a.reconcile ? 'Oui' : 'Non', a.deprecated ? 'Oui' : 'Non']);
    await exportRowsToExcel('Plan comptable', ['Code', 'Nom', 'Type de compte', 'Type interne', 'Lettrable', 'Déprécié'], rows, this.fileName('plan-comptable'));
  }

  private async exportPartenaires(): Promise<void> {
    const partners = await this.toPromise(this.accountingService.getPartners(this.companyId));
    const rows = partners.map(p => [p.ref || '', p.name, this.partnerTypeLabel(p.type), p.phone || '', p.email || '', p.address || '']);
    await exportRowsToExcel('Clients & Fournisseurs', ['Référence', 'Nom', 'Type', 'Téléphone', 'Email', 'Adresse'], rows, this.fileName('clients-fournisseurs'));
  }

  // ── Stock ────────────────────────────────────────────────────────────────

  private async exportArticles(): Promise<void> {
    const products = await this.toPromise(this.stockService.getProducts(this.companyId));
    const rows = products.map(p => [
      p.defaultCode || '', p.name, p.categoryName || '', this.productTypeLabel(p.type), p.uomName || '',
      p.standardPrice ?? 0, p.salePrice ?? 0, p.qtyOnHand ?? 0,
      p.exemptTva ? 'Oui' : 'Non', p.exemptTvaAchat ? 'Oui' : 'Non', p.active ? 'Oui' : 'Non'
    ]);
    await exportRowsToExcel('Articles',
      ['Référence', 'Nom', 'Catégorie', 'Type', 'Unité', 'Prix revient', 'Prix vente', 'Stock', 'Exempté TVA vente', 'Exempté TVA achat', 'Actif'],
      rows, this.fileName('articles'));
  }

  private async exportMouvements(item: ExportItem): Promise<void> {
    const moves = await this.toPromise(this.stockService.getMovements(this.companyId, {
      dateFrom: item.dateFrom || undefined, dateTo: item.dateTo || undefined
    }));
    const rows = moves.map(m => [
      m.pickingRef || '', m.dateDone || '', m.productCode || '', m.productName || '', m.categoryName || '',
      this.moveDirectionLabel(m.moveDirection), m.qtyDone ?? m.qtyDemanded ?? 0, m.uomName || '',
      m.locationName || '', m.locationDestName || '', this.stateLabel(m.state), m.partnerName || ''
    ]);
    await exportRowsToExcel('Mouvements de stock',
      ['Pièce', 'Date', 'Référence', 'Article', 'Catégorie', 'Sens', 'Quantité', 'Unité', 'Emplacement source', 'Emplacement dest.', 'État', 'Tiers'],
      rows, this.fileName('mouvements-stock', item));
  }

  private async exportTransferts(item: ExportItem): Promise<void> {
    const all = await this.toPromise(this.stockService.getTransferts(this.companyId));
    const rows = this.filterByDate(all, p => p.dateDone || p.scheduledDate, item.dateFrom, item.dateTo)
      .map(p => [p.name || '', p.scheduledDate || '', p.dateDone || '', p.sourceWarehouseName || '', p.destWarehouseName || '', this.stateLabel(p.state), p.origin || '']);
    await exportRowsToExcel('Transferts inter-dépôts',
      ['Référence', 'Date prévue', 'Date réalisée', 'Entrepôt source', 'Entrepôt destination', 'État', 'Origine'],
      rows, this.fileName('transferts', item));
  }

  private async exportExpeditions(item: ExportItem): Promise<void> {
    const all = await this.toPromise(this.stockService.getInterCompanyExpeditions(this.companyId));
    const rows = this.filterByDate(all, p => p.dateDone || p.scheduledDate, item.dateFrom, item.dateTo)
      .map(p => [p.name || '', p.scheduledDate || '', p.dateDone || '', p.agencyName || '', p.remoteAgencyName || '', this.stateLabel(p.state), p.origin || '']);
    await exportRowsToExcel('Expéditions inter-agences',
      ['Référence', 'Date prévue', 'Date réalisée', 'Agence source', 'Agence destination', 'État', 'Origine'],
      rows, this.fileName('expeditions', item));
  }

  // ── Ventes ───────────────────────────────────────────────────────────────

  private async exportCommandesVentes(item: ExportItem): Promise<void> {
    let orders = this.filterByDate(await this.toPromise(this.salesService.getOrders(this.companyId)), o => o.date, item.dateFrom, item.dateTo);
    if (item.partnerId) orders = orders.filter(o => o.partnerId === item.partnerId);
    if (item.warehouseId) orders = orders.filter(o => o.warehouseId === item.warehouseId);
    const rows = orders.map(o => [o.name || '', o.date, o.partnerName || '', this.stateLabel(o.state), o.warehouseName || '', o.journalName || '', o.totalHT ?? 0, o.totalTVA ?? 0, o.totalTTC ?? 0]);
    await exportRowsToExcel('Bons de commande ventes',
      ['Numéro', 'Date', 'Client', 'État', 'Entrepôt', 'Journal', 'Total HT', 'Total TVA', 'Total TTC'],
      rows, this.fileName('commandes-ventes', item));
  }

  private async exportFacturesVentes(item: ExportItem): Promise<void> {
    let invoices = this.filterByDate(await this.toPromise(this.salesService.getInvoices(this.companyId)), i => i.date, item.dateFrom, item.dateTo);
    if (item.partnerId) invoices = invoices.filter(i => i.partnerId === item.partnerId);
    if (item.warehouseId) invoices = invoices.filter(i => i.warehouseId === item.warehouseId);
    const rows = invoices.map(i => [i.name || '', i.date, i.partnerName || '', this.stateLabel(i.state), i.warehouseName || '', i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0, i.montantPaye ?? 0, i.montantDu ?? 0]);
    await exportRowsToExcel('Factures ventes',
      ['Numéro', 'Date', 'Client', 'État', 'Entrepôt', 'Total HT', 'Total TVA', 'Total TTC', 'Payé', 'Dû'],
      rows, this.fileName('factures-ventes', item));
  }

  private async exportAvoirsVentes(item: ExportItem): Promise<void> {
    let avoirs = this.filterByDate(await this.toPromise(this.salesService.getAvoirs(this.companyId)), i => i.date, item.dateFrom, item.dateTo);
    if (item.partnerId) avoirs = avoirs.filter(i => i.partnerId === item.partnerId);
    if (item.warehouseId) avoirs = avoirs.filter(i => i.warehouseId === item.warehouseId);
    const rows = avoirs.map(i => [i.name || '', i.date, i.partnerName || '', this.stateLabel(i.state), i.warehouseName || '', i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0]);
    await exportRowsToExcel('Avoirs ventes', ['Numéro', 'Date', 'Client', 'État', 'Entrepôt', 'Total HT', 'Total TVA', 'Total TTC'], rows, this.fileName('avoirs-ventes', item));
  }

  private async exportRemisesClients(item: ExportItem): Promise<void> {
    const targets = item.partnerId ? this.clients.filter(c => c.id === item.partnerId) : this.clients;
    const calls = targets.filter(c => c.id != null).map(c => this.salesService.getPrixClientByClient(c.id!, this.companyId));
    const results = calls.length ? await this.toPromise(forkJoin(calls)) : [];
    const rows = results.flat().map(p => [p.clientName || '', p.productCode || '', p.productName || '', p.salePriceStandard ?? 0, p.prixClient ?? 0, p.rabaisUnitaire ?? 0]);
    await exportRowsToExcel('Remises clients',
      ['Client', 'Code article', 'Article', 'Prix standard', 'Prix négocié', 'Rabais unitaire'],
      rows, this.fileName('remises-clients', item));
  }

  private async exportRistournesConfig(item: ExportItem): Promise<void> {
    let rows = item.partnerId
      ? await this.toPromise(this.ristourneService.getByPartner(item.partnerId, this.companyId))
      : await this.toPromise(this.ristourneService.getAll(this.companyId));
    const mapped = rows.map(r => [r.partnerName || '', r.categoryName || '', r.typeRistourne || '', r.montantFixe ?? 0, r.montantTTCUnitaire ?? 0, r.active === false ? 'Non' : 'Oui']);
    await exportRowsToExcel('Ristournes - Configuration',
      ['Client', 'Catégorie', 'Type', 'Montant fixe', 'Montant TTC unitaire', 'Actif'],
      mapped, this.fileName('ristournes-config', item));
  }

  private async exportRistournesPaiements(item: ExportItem): Promise<void> {
    let paiements = item.dateFrom && item.dateTo
      ? await this.toPromise(this.ristourneService.getRapport(this.companyId, item.dateFrom, item.dateTo))
      : await this.toPromise(this.ristourneService.getAllPaiements(this.companyId));
    if (item.partnerId) paiements = paiements.filter(p => p.partnerId === item.partnerId);
    const rows = paiements.map(p => [p.name || '', p.date || '', p.partnerName || '', this.stateLabel(p.state), p.typeRistourne || '', p.totalAmount ?? 0, p.generatedInvoiceName || p.invoiceName || '']);
    await exportRowsToExcel('Ristournes - Règlements',
      ['Référence', 'Date', 'Client', 'État', 'Type', 'Montant total', 'Facture générée'],
      rows, this.fileName('ristournes-paiements', item));
  }

  // ── Achats ───────────────────────────────────────────────────────────────

  private async exportCommandesAchats(item: ExportItem): Promise<void> {
    let orders = this.filterByDate(await this.toPromise(this.purchaseService.getOrders(this.companyId)), o => o.date, item.dateFrom, item.dateTo);
    if (item.partnerId) orders = orders.filter(o => o.partnerId === item.partnerId);
    const rows = orders.map(o => [o.name || '', o.date, o.partnerName || '', this.stateLabel(o.state), o.receptionWarehouseName || '', o.totalHT ?? 0, o.totalTVA ?? 0, o.totalTTC ?? 0]);
    await exportRowsToExcel('Bons de commande achats', ['Numéro', 'Date', 'Fournisseur', 'État', 'Entrepôt', 'Total HT', 'Total TVA', 'Total TTC'], rows, this.fileName('commandes-achats', item));
  }

  private async exportFacturesAchats(item: ExportItem): Promise<void> {
    let invoices = this.filterByDate(await this.toPromise(this.purchaseService.getInvoices(this.companyId)), i => i.date, item.dateFrom, item.dateTo);
    if (item.partnerId) invoices = invoices.filter(i => i.partnerId === item.partnerId);
    if (item.warehouseId) invoices = invoices.filter(i => i.warehouseId === item.warehouseId);
    const rows = invoices.map(i => [i.name || '', i.date, i.partnerName || '', this.stateLabel(i.state), i.warehouseName || '', i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0, i.montantPaye ?? 0, i.montantDu ?? 0]);
    await exportRowsToExcel('Factures achats',
      ['Numéro', 'Date', 'Fournisseur', 'État', 'Entrepôt', 'Total HT', 'Total TVA', 'Total TTC', 'Payé', 'Dû'],
      rows, this.fileName('factures-achats', item));
  }

  private async exportAvoirsAchats(item: ExportItem): Promise<void> {
    let avoirs = this.filterByDate(await this.toPromise(this.purchaseService.getAvoirs(this.companyId)), i => i.date, item.dateFrom, item.dateTo);
    if (item.partnerId) avoirs = avoirs.filter(i => i.partnerId === item.partnerId);
    if (item.warehouseId) avoirs = avoirs.filter(i => i.warehouseId === item.warehouseId);
    const rows = avoirs.map(i => [i.name || '', i.date, i.partnerName || '', this.stateLabel(i.state), i.warehouseName || '', i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0]);
    await exportRowsToExcel('Avoirs achats', ['Numéro', 'Date', 'Fournisseur', 'État', 'Entrepôt', 'Total HT', 'Total TVA', 'Total TTC'], rows, this.fileName('avoirs-achats', item));
  }

  private async exportRemisesFournisseurs(item: ExportItem): Promise<void> {
    const targets = item.partnerId ? this.suppliers.filter(s => s.id === item.partnerId) : this.suppliers;
    const calls = targets.filter(s => s.id != null).map(s => this.purchaseService.getPrixFournisseurByFournisseur(s.id!, this.companyId));
    const results = calls.length ? await this.toPromise(forkJoin(calls)) : [];
    const rows = results.flat().map(p => [p.fournisseurName || '', p.productCode || '', p.productName || '', p.standardPrice ?? 0, p.prixFournisseur ?? 0, p.ecartUnitaire ?? 0]);
    await exportRowsToExcel('Remises fournisseurs',
      ['Fournisseur', 'Code article', 'Article', 'Prix standard', 'Prix négocié', 'Écart unitaire'],
      rows, this.fileName('remises-fournisseurs', item));
  }

  private async exportRemisesConfig(item: ExportItem): Promise<void> {
    const rows = item.partnerId
      ? await this.toPromise(this.remiseService.getByPartner(item.partnerId, this.companyId))
      : await this.toPromise(this.remiseService.getAll(this.companyId));
    const mapped = rows.map(r => [r.partnerName || '', r.categoryName || '', r.typeRemise || '', r.montantFixe ?? 0, r.montantTTCUnitaire ?? 0, r.active === false ? 'Non' : 'Oui']);
    await exportRowsToExcel('Remises - Configuration',
      ['Fournisseur', 'Catégorie', 'Type', 'Montant fixe', 'Montant TTC unitaire', 'Actif'],
      mapped, this.fileName('remises-config', item));
  }

  private async exportRemisesPaiements(item: ExportItem): Promise<void> {
    let paiements = item.dateFrom && item.dateTo
      ? await this.toPromise(this.remiseService.getRapport(this.companyId, item.dateFrom, item.dateTo))
      : await this.toPromise(this.remiseService.getAllPaiements(this.companyId));
    if (item.partnerId) paiements = paiements.filter(p => p.partnerId === item.partnerId);
    const rows = paiements.map(p => [p.name || '', p.date || '', p.partnerName || '', this.stateLabel(p.state), p.typeRemise || '', p.totalAmount ?? 0, p.generatedInvoiceName || p.invoiceName || '']);
    await exportRowsToExcel('Remises - Règlements',
      ['Référence', 'Date', 'Fournisseur', 'État', 'Type', 'Montant total', 'Facture générée'],
      rows, this.fileName('remises-paiements', item));
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  partnerOptions(item: ExportItem): { id: number; name: string }[] {
    if (item.partnerKind === 'client') return this.clients.filter(c => c.id != null).map(c => ({ id: c.id!, name: c.name }));
    if (item.partnerKind === 'supplier') return this.suppliers.filter(s => s.id != null).map(s => ({ id: s.id!, name: s.name }));
    return [];
  }

  private fileName(prefix: string, item?: ExportItem): string {
    if (item?.hasDateFilter && (item.dateFrom || item.dateTo)) {
      return `${prefix}_${item.dateFrom || 'debut'}_${item.dateTo || 'fin'}.xlsx`;
    }
    return `${prefix}_${new Date().toISOString().split('T')[0]}.xlsx`;
  }

  private stateLabel(s?: string): string {
    return ({
      draft: 'Brouillon', confirmed: 'Confirmé', invoiced: 'Facturé', posted: 'Validée',
      paid: 'Payée', cancelled: 'Annulé', received: 'Reçu', extournee: 'Extournée',
      done: 'Terminé', assigned: 'Disponible', waiting: 'En attente'
    } as Record<string, string>)[s || ''] || s || '';
  }

  private moveDirectionLabel(d?: string): string {
    return ({ incoming: 'Entrée', outgoing: 'Sortie', internal: 'Interne' } as Record<string, string>)[d || ''] || d || '';
  }

  private partnerTypeLabel(t: string): string {
    return ({ customer: 'Client', supplier: 'Fournisseur', both: 'Client & Fournisseur' } as Record<string, string>)[t] || t;
  }

  private productTypeLabel(t: string): string {
    return ({ product: 'Stockable', service: 'Service', consu: 'Consommable' } as Record<string, string>)[t] || t;
  }

  private showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 3000);
  }
}
