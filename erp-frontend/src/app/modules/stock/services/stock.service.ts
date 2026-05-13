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
  cogsAccountCode?: string;
  parentId?: number;
  parentName?: string;
  companyId: number;
}

export interface Product {
  id?: number;
  defaultCode?: string;
  name: string;
  categoryId?: number;
  categoryName?: string;
  uomName?: string;
  standardPrice?: number;
  salePrice?: number;
  type: string; // product / service / consu
  stockAccountCode?: string;
  cogsAccountCode?: string;
  description?: string;
  active: boolean;
  companyId: number;
  qtyOnHand?: number;
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
  /** ID de l'entrepôt Dépôt Achat (entrepôt séparé, zone de transit achats) */
  depotAchatWarehouseId?: number;
  depotAchatWarehouseName?: string;
  /** ID de l'entrepôt Avaries (entrepôt séparé, reçoit les reliquats) */
  avarWarehouseId?: number;
  avarWarehouseName?: string;
  companyId: number;
  active: boolean;
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
  accountCode?: string;
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
  companyId: number;
  moves: StockMove[];
  totalValue?: number;
  createdAt?: string;
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
  companyName?: string;
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

  // Products
  getProducts(companyId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/products`, { params: new HttpParams().set('companyId', companyId) });
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
}
