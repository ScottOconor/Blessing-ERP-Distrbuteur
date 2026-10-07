import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SalesInvoice } from '../../sales/services/sales.service';
import { CompanyService } from '../../../core/services/company.service';
import { PrintFormat, PrintPreviewComponent } from '../../../shared/components/print-preview/print-preview.component';

export interface InvoiceGenerationRequest {
  companyId: number;
  totalAmount: number;
  dateFrom: string;
  dateTo: string;
  minAmount: number;
  maxAmount: number;
  count: number;
  notes?: string;
}

export interface PlannedLine {
  productId: number;
  productCode?: string;
  productName: string;
  quantity: number;
  prixUnitaire: number;
  tauxTVA: number;
  montantTTC: number;
}

export interface PlannedInvoice {
  date: string;
  partnerId: number;
  partnerName: string;
  warehouseId: number;
  warehouseName: string;
  totalHT: number;
  totalTVA: number;
  netAPayer: number;
  lines: PlannedLine[];
}

export interface InvoiceGenerationPlan {
  companyId: number;
  notes?: string;
  dateFrom: string;
  dateTo: string;
  minAmount: number;
  maxAmount: number;
  requestedTotal: number;
  plannedTotal: number;
  invoices: PlannedInvoice[];
  warnings: string[];
}

export interface DeclarationBatch {
  id: number;
  createdAt: string;
  createdBy?: string;
  dateFrom: string;
  dateTo: string;
  minAmount: number;
  maxAmount: number;
  requestedTotal: number;
  generatedTotal: number;
  invoiceCount: number;
  notes?: string;
  status: 'RUNNING' | 'DONE' | 'FAILED';
  processedCount: number;
  errorMessage?: string;
  /** Renseigné uniquement par le détail d'une génération */
  invoices?: SalesInvoice[];
}

@Injectable({ providedIn: 'root' })
export class DeclarationService {
  private base = `${environment.apiUrl}/api/declaration`;

  constructor(private http: HttpClient, private companyService: CompanyService) {}

  getBatches(companyId: number): Observable<DeclarationBatch[]> {
    return this.http.get<DeclarationBatch[]>(`${this.base}/batches`, { params: { companyId } });
  }

  getBatch(id: number): Observable<DeclarationBatch> {
    return this.http.get<DeclarationBatch>(`${this.base}/batches/${id}`);
  }

  /** Imprime toutes les factures en une fois (une par page), avec l'en-tête société habituel. */
  printInvoices(invoices: SalesInvoice[], format: PrintFormat): void {
    if (!invoices.length) return;
    const printer = new PrintPreviewComponent();
    const company = this.companyService.getCached();
    printer.docType = 'invoice';
    printer.companyInfo = company;
    printer.companyName = company?.name ?? '';
    printer.companyPhone = company?.telephone ?? '';
    printer.companyLogoUrl = this.companyService.getLogoUrl();
    printer.companyLogoDataUrl = this.companyService.getCachedLogoDataUrl();
    printer.printInvoices(invoices, format);
  }

  preview(req: InvoiceGenerationRequest): Observable<InvoiceGenerationPlan> {
    return this.http.post<InvoiceGenerationPlan>(`${this.base}/invoices/preview`, req);
  }

  /** Lance la génération en arrière-plan ; l'avancement se suit avec getBatchStatus. */
  generate(plan: InvoiceGenerationPlan): Observable<DeclarationBatch> {
    return this.http.post<DeclarationBatch>(`${this.base}/invoices/generate`, plan);
  }

  getBatchStatus(id: number): Observable<DeclarationBatch> {
    return this.http.get<DeclarationBatch>(`${this.base}/batches/${id}/status`);
  }
}
