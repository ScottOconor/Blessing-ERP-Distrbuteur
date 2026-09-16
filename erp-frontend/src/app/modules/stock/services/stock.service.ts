import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ProductCategory {
  id?: number;
  name: string;
  code?: string;
  stockAccountCode?: string;
  stockInAccountCode?: string;
  parentId?: number;
  parentName?: string;
  companyId: number;
}

export interface UnitOfMeasure {
  id?: number;
  name: string;
  code?: string;
  companyId: number;
}

export interface Product {
  id?: number;
  defaultCode?: string;
  name: string;
  categoryId?: number;
  categoryName?: string;
  uomName?: string;
  unitOfMeasureId?: number;
  standardPrice?: number;
  salePrice?: number;
  type: string; // product / service / consu
  stockAccountCode?: string;
  description?: string;
  active: boolean;
  exemptTva?: boolean;
  exemptTvaAchat?: boolean;
  companyId: number;
  qtyOnHand?: number;
  qtyReserved?: number;
  qtyAvailable?: number;
  createdAt?: string;
}

export interface Warehouse {
  id?: number;
  name: string;
  code: string;
  stockLocationId?: number;
  stockLocationName?: string;
  stockJournalId?: number;
  stockJournalName?: string;
  /** Journal de vente pré-chargé sur les bons de commande de cet entrepôt */
  salesJournalId?: number;
  salesJournalName?: string;
  /** Journal de caisse/banque pré-chargé sur les paiements des factures de cet entrepôt */
  cashJournalId?: number;
  cashJournalName?: string;
  /** ID de l'entrepôt Dépôt Achat (entrepôt séparé, zone de transit achats) */
  depotAchatWarehouseId?: number;
  depotAchatWarehouseName?: string;
  /** ID de l'entrepôt Avaries (entrepôt séparé, reçoit les reliquats) */
  avarWarehouseId?: number;
  avarWarehouseName?: string;
  /** Nom du responsable de l'entrepôt */
  responsableName?: string;
  companyId: number;
  active: boolean;
  isDefault?: boolean;
  locations?: StockLocation[];
}

export interface StockLocation {
  id?: number;
  name: string;
  completeName?: string;
  parentId?: number;
  parentName?: string;
  usage: string; // supplier/view/internal/customer/inventory/transit
  warehouseId?: number;
  warehouseName?: string;
  companyId?: number;
  active: boolean;
  children?: StockLocation[];
}

export interface StockPickingType {
  id?: number;
  name: string;
  code: string; // incoming/outgoing/internal
  warehouseId?: number;
  warehouseName?: string;
  defaultLocationSrcId?: number;
  defaultLocationSrcName?: string;
  defaultLocationDestId?: number;
  defaultLocationDestName?: string;
  sequencePrefix?: string;
  companyId: number;
}

export interface StockMove {
  id?: number;
  pickingId?: number;
  pickingRef?: string;
  productId: number;
  productCode?: string;
  productName?: string;
  uomName?: string;
  categoryId?: number;
  categoryName?: string;
  qtyDemanded: number;
  qtyDone?: number;
  priceUnit?: number;
  subtotalValue?: number;
  locationId?: number;
  locationName?: string;
  locationDestId?: number;
  locationDestName?: string;
  state?: string;
  companyId?: number;
  pickingTypeCode?: string;
  moveDirection?: string;  // 'incoming' | 'outgoing' | 'internal' — calculé depuis les emplacements
  dateDone?: string;
  partnerName?: string;
  availableQty?: number;
}

export interface StockPicking {
  id?: number;
  name?: string;
  pickingTypeId: number;
  pickingTypeName?: string;
  pickingTypeCode?: string;
  locationId?: number;
  locationName?: string;
  locationDestId?: number;
  locationDestName?: string;
  sourceWarehouseId?: number;
  sourceWarehouseName?: string;
  destWarehouseId?: number;
  destWarehouseName?: string;
  partnerId?: number;
  partnerName?: string;
  state?: string;
  scheduledDate?: string;
  dateDone?: string;
  origin?: string;
  notes?: string;
  accountMoveId?: number;
  accountMoveName?: string;
  agencyId?: number;
  agencyName?: string;
  remoteAgencyId?: number;
  remoteAgencyName?: string;
  companyId: number;
  companyName?: string;
  linkedPickingId?: number;
  linkedPickingName?: string;
  transferReception?: boolean;
  moves: StockMove[];
  totalValue?: number;
  createdAt?: string;
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
  /** Non-null si la réception a été validée mais que la notification de l'agence expéditrice a échoué. */
  senderNotifyWarning?: string;
}

export interface StockAdjustment {
  id?: number;
  productId: number;
  productCode?: string;
  productName?: string;
  uomName?: string;
  locationId: number;
  locationName?: string;
  qtyBefore?: number;
  qtyAfter?: number;
  qtyDiff?: number;
  unitCost?: number;
  valueDiff?: number;
  notes?: string;
  accountMoveId?: number;
  accountMoveName?: string;
  companyId: number;
  createdAt?: string;
}

export interface StockAdjustmentRequest {
  productId: number;
  locationId: number;
  newQty: number;
  notes?: string;
  companyId: number;
  date?: string;
}

export interface StockLossLine {
  id?: number;
  productId?: number;
  productCode?: string;
  description?: string;
  quantity: number;
  unitCost?: number;
  montantTotal?: number;
}

export interface StockLoss {
  id?: number;
  name?: string;
  date: string;
  warehouseId: number;
  warehouseName?: string;
  partnerId?: number;
  partnerName?: string;
  notes?: string;
  totalValue?: number;
  accountMoveId?: number;
  accountMoveName?: string;
  companyId: number;
  lines: StockLossLine[];
  createdBy?: string;
  createdAt?: string;
}

export interface StockLossLineRequest {
  productId?: number;
  productCode?: string;
  quantity: number;
}

export interface StockLossRequest {
  date: string;
  warehouseId: number;
  partnerId?: number;
  notes?: string;
  companyId: number;
  lines: StockLossLineRequest[];
}

export interface ValuationLayer {
  id?: number;
  productId: number;
  productCode?: string;
  productName?: string;
  uomName?: string;
  locationId?: number;
  locationName?: string;
  quantity: number;
  unitCost: number;
  value: number;
  description?: string;
  companyId: number;
  createdAt?: string;
}

export interface Agency {
  id?: number;
  name: string;
  code: string;
  address?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  companyId: number;
  active: boolean;
}

export interface StockQuant {
  id?: number;
  productId: number;
  productCode?: string;
  productName?: string;
  uomName?: string;
  categoryId?: number;
  categoryName?: string;
  locationId: number;
  locationName?: string;
  locationCompleteName?: string;
  quantity: number;
  reservedQuantity: number;
  availableQuantity: number;
  standardPrice?: number;
  totalValue?: number;
  companyId: number;
}

export interface BordereauLigne {
  moveId: number;
  productCode?: string;
  productName?: string;
  prixUnitaire: number;
  qteCommandee: number;
  qteRecue: number;
  reste: number;
}

export interface ReceptionBordereauDTO {
  pickingId: number;
  pickingName?: string;
  invoiceRef?: string;
  supplierName?: string;
  invoiceDate?: string;
  companyId: number;
  warehouseName?: string;
  operatorName?: string;
  state?: string;
  dateDone?: string;
  lignes: BordereauLigne[];
}

export interface BordereauLigneSaisie {
  moveId: number;
  qteRecue: number;
}

export interface InventorySheetLine {
  productCode?: string;
  productName: string;
  locationName: string;
  uomName?: string;
  systemQty?: number;
  countedQty?: number;
  diff?: number;
  unitCost?: number;
  valueDiff?: number;
}

export interface InventorySheetRequest {
  companyId?: number;
  companyName?: string;
  warehouseName?: string;
  responsableName?: string;
  date?: string;
  lines: InventorySheetLine[];
}


export interface StockDashboard {
  nbProducts: number;
  nbWarehouses: number;
  totalStockValue: number;
  nbReceptionsDraft: number;
  nbReceptionsDone: number;
  nbLivraisons: number;
  nbTransferts: number;
  nbTransfertsDone: number;
}

// ── Rapport de stock analytique ───────────────────────────────────────────────
export interface StockReportLine {
  productId: number;
  productCode?: string;
  productName: string;
  uomName?: string;
  initialQty: number;
  inQty: number;
  outQty: number;
  finalQty: number;
  unitCost: number;
  initialValue: number;
  inValue: number;
  outValue: number;
  finalValue: number;
}

export interface StockReportWarehouse {
  warehouseName: string;
  lines: StockReportLine[];
  totalInitialQty: number;
  totalInQty: number;
  totalOutQty: number;
  totalFinalQty: number;
  totalInitialValue: number;
  totalInValue: number;
  totalOutValue: number;
  totalFinalValue: number;
}

// ── Fiche de stock détaillée ──────────────────────────────────────────────────
export interface StockDetailedMove {
  date: string;
  ref: string;
  partner: string;
  qtyIn?: number;
  qtyOut?: number;
  qtyBalance: number;
  valueBalance: number;
}

export interface StockDetailedLocation {
  locationName: string;
  initialQty: number;
  initialValue: number;
  movements: StockDetailedMove[];
  finalQty: number;
  finalValue: number;
}

export interface StockDetailedProduct {
  productCode?: string;
  productName: string;
  unitCost: number;
  locations: StockDetailedLocation[];
}

export interface DirectReceptionLineItem {
  productId: number;
  quantity: number;
  prixUnitaire: number;
}

export interface DirectReceptionRequest {
  companyId: number;
  warehouseId?: number;
  supplierName?: string;
  reference?: string;
  date?: string;
  lines: DirectReceptionLineItem[];
}

@Injectable({ providedIn: 'root' })
export class StockService {
  private api = `${environment.apiUrl}/api/stock`;

  constructor(private http: HttpClient) {}

  // Categories
  getCategories(companyId: number): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.api}/categories`, { params: new HttpParams().set('companyId', companyId) });
  }
  createCategory(dto: ProductCategory): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(`${this.api}/categories`, dto);
  }
  updateCategory(id: number, dto: ProductCategory): Observable<ProductCategory> {
    return this.http.put<ProductCategory>(`${this.api}/categories/${id}`, dto);
  }
  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/categories/${id}`);
  }

  // Units of measure (UDM)
  getUnitsOfMeasure(companyId: number): Observable<UnitOfMeasure[]> {
    return this.http.get<UnitOfMeasure[]>(`${this.api}/units-of-measure`, { params: new HttpParams().set('companyId', companyId) });
  }
  createUnitOfMeasure(dto: UnitOfMeasure): Observable<UnitOfMeasure> {
    return this.http.post<UnitOfMeasure>(`${this.api}/units-of-measure`, dto);
  }
  updateUnitOfMeasure(id: number, dto: UnitOfMeasure): Observable<UnitOfMeasure> {
    return this.http.put<UnitOfMeasure>(`${this.api}/units-of-measure/${id}`, dto);
  }
  deleteUnitOfMeasure(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/units-of-measure/${id}`);
  }

  // Products
  getProducts(companyId: number, warehouseId?: number): Observable<Product[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (warehouseId) params = params.set('warehouseId', warehouseId);
    return this.http.get<Product[]>(`${this.api}/products`, { params });
  }

  searchProducts(query: string, companyId: number): Observable<Product[]> {
    let params = new HttpParams()
      .set('companyId', companyId)
      .set('search', query.trim());
    return this.http.get<Product[]>(`${this.api}/products`, { params });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/products/${id}`);
  }
  createProduct(dto: Product): Observable<Product> {
    return this.http.post<Product>(`${this.api}/products`, dto);
  }
  updateProduct(id: number, dto: Product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/products/${id}`, dto);
  }
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/products/${id}`);
  }

  // Warehouses
  getWarehouses(companyId: number): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.api}/warehouses`, { params: new HttpParams().set('companyId', companyId) });
  }
  getWarehouse(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${this.api}/warehouses/${id}`);
  }
  createWarehouse(dto: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(`${this.api}/warehouses`, dto);
  }
  updateWarehouse(id: number, dto: Warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>(`${this.api}/warehouses/${id}`, dto);
  }
  deleteWarehouse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/warehouses/${id}`);
  }
  setDefaultWarehouse(id: number): Observable<Warehouse> {
    return this.http.put<Warehouse>(`${this.api}/warehouses/${id}/set-default`, {});
  }

  // Locations
  getLocations(companyId: number): Observable<StockLocation[]> {
    return this.http.get<StockLocation[]>(`${this.api}/locations`, { params: new HttpParams().set('companyId', companyId) });
  }
  createLocation(dto: StockLocation): Observable<StockLocation> {
    return this.http.post<StockLocation>(`${this.api}/locations`, dto);
  }
  updateLocation(id: number, dto: StockLocation): Observable<StockLocation> {
    return this.http.put<StockLocation>(`${this.api}/locations/${id}`, dto);
  }
  deleteLocation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/locations/${id}`);
  }

  // Picking types
  getPickingTypes(companyId: number): Observable<StockPickingType[]> {
    return this.http.get<StockPickingType[]>(`${this.api}/picking-types`, { params: new HttpParams().set('companyId', companyId) });
  }

  // Pickings
  getPickings(companyId: number, type?: string): Observable<StockPicking[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (type) params = params.set('type', type);
    return this.http.get<StockPicking[]>(`${this.api}/pickings`, { params });
  }
  getReceptions(companyId: number): Observable<StockPicking[]> {
    return this.http.get<StockPicking[]>(`${this.api}/receptions`, { params: new HttpParams().set('companyId', companyId) });
  }
  getLivraisons(companyId: number): Observable<StockPicking[]> {
    return this.http.get<StockPicking[]>(`${this.api}/livraisons`, { params: new HttpParams().set('companyId', companyId) });
  }
  getTransferts(companyId: number): Observable<StockPicking[]> {
    return this.http.get<StockPicking[]>(`${this.api}/transferts`, { params: new HttpParams().set('companyId', companyId) });
  }
  getPicking(id: number): Observable<StockPicking> {
    return this.http.get<StockPicking>(`${this.api}/pickings/${id}`);
  }
  createPicking(req: Partial<StockPicking>): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/pickings`, req);
  }
  updatePicking(id: number, req: Partial<StockPicking>): Observable<StockPicking> {
    return this.http.put<StockPicking>(`${this.api}/pickings/${id}`, req);
  }
  validatePicking(id: number): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/pickings/${id}/validate`, {});
  }
  cancelPicking(id: number): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/pickings/${id}/cancel`, {});
  }

  // Quants
  getQuants(companyId: number, locationId?: number, productId?: number): Observable<StockQuant[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (locationId) params = params.set('locationId', locationId);
    if (productId) params = params.set('productId', productId);
    return this.http.get<StockQuant[]>(`${this.api}/quants`, { params });
  }

  // Dashboard
  getDashboard(companyId: number): Observable<StockDashboard> {
    return this.http.get<StockDashboard>(`${this.api}/dashboard`, { params: new HttpParams().set('companyId', companyId) });
  }

  // Rapport analytique
  getAnalyticalReport(params: {
    companyId: number; warehouseIds: number[];
    dateFrom: string; dateTo: string;
    productId?: number; categoryId?: number;
  }): Observable<StockReportWarehouse[]> {
    let p = new HttpParams()
      .set('companyId', params.companyId)
      .set('dateFrom', params.dateFrom)
      .set('dateTo', params.dateTo);
    params.warehouseIds.forEach(id => { p = p.append('warehouseIds', id); });
    if (params.productId)  p = p.set('productId',  params.productId);
    if (params.categoryId) p = p.set('categoryId', params.categoryId);
    return this.http.get<StockReportWarehouse[]>(`${this.api}/report/analytical`, { params: p });
  }

  // Fiche de stock détaillée
  getDetailedReport(params: {
    companyId: number; warehouseIds: number[];
    dateFrom: string; dateTo: string;
    productId?: number; categoryId?: number;
  }): Observable<StockDetailedProduct[]> {
    let p = new HttpParams()
      .set('companyId', params.companyId)
      .set('dateFrom', params.dateFrom)
      .set('dateTo', params.dateTo);
    params.warehouseIds.forEach(id => { p = p.append('warehouseIds', id); });
    if (params.productId)  p = p.set('productId',  params.productId);
    if (params.categoryId) p = p.set('categoryId', params.categoryId);
    return this.http.get<StockDetailedProduct[]>(`${this.api}/report/detailed`, { params: p });
  }

  // Ajustements de stock
  getAdjustments(companyId: number): Observable<StockAdjustment[]> {
    return this.http.get<StockAdjustment[]>(`${this.api}/adjustments`, { params: new HttpParams().set('companyId', companyId) });
  }
  createAdjustment(req: StockAdjustmentRequest): Observable<StockAdjustment> {
    return this.http.post<StockAdjustment>(`${this.api}/adjustments`, req);
  }
  createAdjustmentsBulk(requests: StockAdjustmentRequest[]): Observable<StockAdjustment[]> {
    return this.http.post<StockAdjustment[]>(`${this.api}/adjustments/bulk`, requests);
  }
  downloadCountingSheetPdf(dto: InventorySheetRequest): Observable<Blob> {
    return this.http.post(`${this.api}/adjustments/counting-sheet/pdf`, dto, { responseType: 'blob' });
  }
  downloadInventoryReportPdf(dto: InventorySheetRequest): Observable<Blob> {
    return this.http.post(`${this.api}/adjustments/inventory-report/pdf`, dto, { responseType: 'blob' });
  }

  // Trous & Casses
  getStockLosses(companyId: number, dateFrom?: string, dateTo?: string): Observable<StockLoss[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (dateFrom) params = params.set('dateFrom', dateFrom);
    if (dateTo) params = params.set('dateTo', dateTo);
    return this.http.get<StockLoss[]>(`${this.api}/casses`, { params });
  }
  createStockLoss(req: StockLossRequest): Observable<StockLoss> {
    return this.http.post<StockLoss>(`${this.api}/casses`, req);
  }
  downloadCasseBordereauPdf(stockLossId: number): Observable<Blob> {
    return this.http.get(`${this.api}/casses/${stockLossId}/bordereau/pdf`, { responseType: 'blob' });
  }

  downloadStockReportPdf(companyId: number): Observable<Blob> {
    return this.http.get(`${this.api}/report/pdf`, {
      params: new HttpParams().set('companyId', companyId),
      responseType: 'blob'
    });
  }

  downloadMovementsPdf(companyId: number, opts: { productId?: number; dateFrom?: string; dateTo?: string; limit?: number } = {}): Observable<Blob> {
    let params = new HttpParams().set('companyId', companyId).set('limit', opts.limit ?? 1000);
    if (opts.productId) params = params.set('productId', opts.productId);
    if (opts.dateFrom)  params = params.set('dateFrom', opts.dateFrom);
    if (opts.dateTo)    params = params.set('dateTo', opts.dateTo);
    return this.http.get(`${this.api}/movements/pdf`, { params, responseType: 'blob' });
  }

  downloadAnalyticalReportPdf(params: { companyId: number; warehouseIds: number[]; dateFrom: string; dateTo: string; productId?: number; categoryId?: number }): Observable<Blob> {
    let p = new HttpParams()
      .set('companyId', params.companyId)
      .set('dateFrom', params.dateFrom)
      .set('dateTo', params.dateTo);
    params.warehouseIds.forEach(id => { p = p.append('warehouseIds', id); });
    if (params.productId)  p = p.set('productId', params.productId);
    if (params.categoryId) p = p.set('categoryId', params.categoryId);
    return this.http.get(`${this.api}/report/analytical/pdf`, { params: p, responseType: 'blob' });
  }

  downloadDetailedReportPdf(params: { companyId: number; warehouseIds: number[]; dateFrom: string; dateTo: string; productId?: number; categoryId?: number }): Observable<Blob> {
    let p = new HttpParams()
      .set('companyId', params.companyId)
      .set('dateFrom', params.dateFrom)
      .set('dateTo', params.dateTo);
    params.warehouseIds.forEach(id => { p = p.append('warehouseIds', id); });
    if (params.productId)  p = p.set('productId', params.productId);
    if (params.categoryId) p = p.set('categoryId', params.categoryId);
    return this.http.get(`${this.api}/report/detailed/pdf`, { params: p, responseType: 'blob' });
  }

  // Analyse
  getStockReport(companyId: number): Observable<StockQuant[]> {
    return this.http.get<StockQuant[]>(`${this.api}/report`, { params: new HttpParams().set('companyId', companyId) });
  }
  getMovements(companyId: number, opts: { productId?: number; dateFrom?: string; dateTo?: string; limit?: number } = {}): Observable<StockMove[]> {
    let params = new HttpParams().set('companyId', companyId).set('limit', opts.limit ?? 1000);
    if (opts.productId) params = params.set('productId', opts.productId);
    if (opts.dateFrom)  params = params.set('dateFrom', opts.dateFrom);
    if (opts.dateTo)    params = params.set('dateTo', opts.dateTo);
    return this.http.get<StockMove[]>(`${this.api}/movements`, { params });
  }
  getValuation(companyId: number, productId?: number): Observable<ValuationLayer[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (productId) params = params.set('productId', productId);
    return this.http.get<ValuationLayer[]>(`${this.api}/valuation`, { params });
  }

  // Réception directe (sans facture achat)
  createDirectReception(req: DirectReceptionRequest): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/receptions/directe`, req);
  }

  // Bordereau de réception (Dépôt Achat)
  getPendingReceptions(companyId: number): Observable<StockPicking[]> {
    return this.http.get<StockPicking[]>(`${this.api}/receptions/pending`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  getBordereau(pickingId: number): Observable<ReceptionBordereauDTO> {
    return this.http.get<ReceptionBordereauDTO>(`${this.api}/receptions/${pickingId}/bordereau`);
  }

  validateBordereau(pickingId: number, lignes: BordereauLigneSaisie[]): Observable<ReceptionBordereauDTO> {
    return this.http.post<ReceptionBordereauDTO>(`${this.api}/receptions/${pickingId}/bordereau/validate`, lignes);
  }

  downloadBordereauPdf(pickingId: number): Observable<Blob> {
    return this.http.get(`${this.api}/receptions/${pickingId}/bordereau/pdf`, { responseType: 'blob' });
  }

  downloadBordereauExcel(pickingId: number): Observable<Blob> {
    return this.http.get(`${this.api}/receptions/${pickingId}/bordereau/excel`, { responseType: 'blob' });
  }

  // Transferts inter-dépôts — réceptions
  getTransferReceptions(companyId: number, all = false): Observable<StockPicking[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (all) params = params.set('all', true);
    return this.http.get<StockPicking[]>(`${this.api}/transferts/receptions`, { params });
  }

  getTransferBordereau(receptionId: number): Observable<ReceptionBordereauDTO> {
    return this.http.get<ReceptionBordereauDTO>(`${this.api}/transferts/receptions/${receptionId}/bordereau`);
  }

  downloadTransferBordereauPdf(receptionId: number): Observable<Blob> {
    return this.http.get(`${this.api}/transferts/receptions/${receptionId}/bordereau/pdf`, { responseType: 'blob' });
  }

  confirmTransferReception(receptionId: number, lignes: BordereauLigneSaisie[]): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/transferts/receptions/${receptionId}/confirm`, lignes);
  }

  // Agences distantes
  getAgencies(companyId: number): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${this.api}/agencies`, { params: new HttpParams().set('companyId', companyId) });
  }
  createAgency(dto: Agency): Observable<Agency> {
    return this.http.post<Agency>(`${this.api}/agencies`, dto);
  }
  updateAgency(id: number, dto: Agency): Observable<Agency> {
    return this.http.put<Agency>(`${this.api}/agencies/${id}`, dto);
  }

  // Expéditions inter-agences (agences distantes)
  getInterCompanyExpeditions(companyId: number): Observable<StockPicking[]> {
    return this.http.get<StockPicking[]>(`${this.api}/inter-company/expeditions`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  getInterCompanyExpedition(id: number): Observable<StockPicking> {
    return this.http.get<StockPicking>(`${this.api}/inter-company/expeditions/${id}`);
  }
  createInterCompanyExpedition(req: any): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/inter-company/expeditions`, req);
  }
  updateInterCompanyExpedition(id: number, req: any): Observable<StockPicking> {
    return this.http.put<StockPicking>(`${this.api}/inter-company/expeditions/${id}`, req);
  }
  validateInterCompanyExpedition(id: number): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/inter-company/expeditions/${id}/validate`, {});
  }
  cancelInterCompanyExpedition(id: number): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/inter-company/expeditions/${id}/cancel`, {});
  }
  confirmInterCompanyReception(id: number): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/inter-company/expeditions/${id}/confirm-reception`, {});
  }
  cancelInterCompanyReception(id: number): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/inter-company/expeditions/${id}/cancel-reception`, {});
  }
  retryNotifySender(id: number): Observable<StockPicking> {
    return this.http.post<StockPicking>(`${this.api}/inter-company/expeditions/${id}/retry-notify`, {});
  }
}
