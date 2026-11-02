package com.erp.stock.service;

import com.erp.audit.service.AuditService;
import com.erp.sales.repository.SalesInvoiceLineRepository;
import com.erp.stock.entity.*;
import com.erp.stock.repository.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/** Reprise des achats passés : seuls les achats font évoluer le CMUP rejoué. */
@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class PurchaseReconciliationServiceTest {

    private static final long MAIN = 1L, DEPOT = 2L, LOC_MAIN = 10L, LOC_DEPOT = 20L, SUPPLIER = 30L, CUSTOMER = 40L, INVENTORY = 50L;

    @Mock private StockMoveRepository moveRepo;
    @Mock private StockLocationRepository locationRepo;
    @Mock private ProductRepository productRepo;
    @Mock private WarehouseRepository warehouseRepo;
    @Mock private ProductWarehouseValuationRepository warehouseValuationRepo;
    @Mock private ProductPriceHistoryRepository priceHistoryRepo;
    @Mock private SalesInvoiceLineRepository salesLineRepo;
    @Mock private ProductValuationService productValuationService;
    @Mock private StockLedgerService stockLedger;
    @Mock private AuditService auditService;

    @InjectMocks private PurchaseReconciliationService service;

    private final Product product = Product.builder().id(7L).name("A").companyId(1L).standardPrice(new BigDecimal("1000")).build();
    private final List<StockMove> moves = new ArrayList<>();
    private LocalDateTime clock = LocalDateTime.of(2026, 1, 1, 8, 0);

    @BeforeEach
    void setUp() {
        when(locationRepo.findAll()).thenReturn(List.of(
                location(LOC_MAIN, "internal", MAIN), location(LOC_DEPOT, "internal", DEPOT),
                location(SUPPLIER, "supplier", null), location(CUSTOMER, "customer", null), location(INVENTORY, "inventory", null)));
        when(moveRepo.findAllDoneChronological(1L)).thenReturn(moves);
        when(productRepo.findAllById(any())).thenReturn(List.of(product));
        when(productValuationService.loadCostTimeline(eq(null), any())).thenReturn(mockTimeline());
        when(warehouseRepo.findByCompanyIdOrderByNameAsc(1L)).thenReturn(List.of());
        when(warehouseValuationRepo.findByCompanyId(1L)).thenReturn(new ArrayList<>());
        when(stockLedger.previewInitialization(1L)).thenReturn(List.of());
        when(salesLineRepo.findWithoutFrozenCost(1L)).thenReturn(List.of());
    }

    private ProductValuationService.CostTimeline mockTimeline() {
        return org.mockito.Mockito.mock(ProductValuationService.CostTimeline.class);
    }

    @Test
    void cmupFollowsPurchasesOnly_notSalesReturnsNorInventory() {
        move("REC/1", "incoming", null, SUPPLIER, LOC_MAIN, "100", "1000");
        move("REC/2", "incoming", null, SUPPLIER, LOC_MAIN, "50", "1200");
        move("LIV/VTE/1", "outgoing", null, LOC_MAIN, CUSTOMER, "20", "1500");
        move("RET/VTE/1", "incoming", null, CUSTOMER, LOC_MAIN, "5", "1500");
        move("ADJ/1", "incoming", null, INVENTORY, LOC_MAIN, "3", "9000");

        PurchaseReconciliationService.Preview p = service.preview(1L);

        assertThat(p.purchasesReplayed()).isEqualTo(2);
        assertThat(p.changes()).singleElement().satisfies(c -> {
            assertThat(c.warehouseId()).isEqualTo(MAIN);
            assertThat(c.newCmup()).isEqualByComparingTo("1066.6667");
        });
    }

    @Test
    void depotPurchaseTransferKeepsInvoicePrice_manualTransferUsesPurchasePrice() {
        move("REC/1", "incoming", null, SUPPLIER, LOC_DEPOT, "10", "1200");
        move("MP/IN/1", "internal", "Transfert réception vers magasin principal - REC/1", LOC_DEPOT, LOC_MAIN, "10", "1200");
        move("REC/2", "incoming", null, SUPPLIER, LOC_DEPOT, "10", "1400");
        move("DA/IN/1", "internal", "Réception en attente", LOC_DEPOT, LOC_MAIN, "10", "1400");

        List<PurchaseReconciliationService.CmupChange> changes = service.preview(1L).changes();

        assertThat(changes).filteredOn(c -> c.warehouseId() == MAIN).singleElement()
                .satisfies(c -> assertThat(c.newCmup()).isEqualByComparingTo("1100")); // (10 × 1 200 + 10 × 1 000) / 20
    }

    @Test
    void firstQuantityWithoutPurchaseStartsAtFichePrice() {
        move("ADJ/1", "incoming", null, INVENTORY, LOC_MAIN, "100", "0");
        move("REC/1", "incoming", null, SUPPLIER, LOC_MAIN, "100", "2000");

        assertThat(service.preview(1L).changes()).singleElement()
                .satisfies(c -> assertThat(c.newCmup()).isEqualByComparingTo("1500"));
    }

    @Test
    void previewChangesNothing() {
        move("REC/1", "incoming", null, SUPPLIER, LOC_MAIN, "100", "1200");

        service.preview(1L);

        verify(priceHistoryRepo, never()).deleteCmupHistory(any());
        verify(warehouseValuationRepo, never()).save(any());
        verify(stockLedger, never()).initialize(any());
    }

    @Test
    void applyReplacesCurrentCmupAndInitializesStockValue() {
        move("REC/1", "incoming", null, SUPPLIER, LOC_MAIN, "100", "1200");
        ProductWarehouseValuation row = ProductWarehouseValuation.builder().productId(7L).warehouseId(MAIN)
                .companyId(1L).standardPrice(new BigDecimal("9999")).build();
        when(warehouseValuationRepo.findByCompanyId(1L)).thenReturn(List.of(row));
        when(stockLedger.initialize(1L)).thenReturn(new StockLedgerService.InitResult(1, 0));

        PurchaseReconciliationService.Result r = service.apply(1L);

        assertThat(row.getStandardPrice()).isEqualByComparingTo("1200");
        assertThat(r.cmupUpdated()).isEqualTo(1);
        assertThat(r.stocksInitialized()).isEqualTo(1);
        verify(priceHistoryRepo).deleteCmupHistory(1L);
    }

    private void move(String name, String code, String notes, long src, long dest, String qty, String priceUnit) {
        clock = clock.plusHours(1);
        StockPicking p = StockPicking.builder().name(name).pickingTypeCode(code).notes(notes).dateDone(clock).companyId(1L).build();
        moves.add(StockMove.builder().id((long) moves.size() + 1).picking(p).productId(7L).companyId(1L).state("done")
                .qtyDemanded(new BigDecimal(qty)).qtyDone(new BigDecimal(qty)).priceUnit(new BigDecimal(priceUnit))
                .locationId(src).locationDestId(dest).build());
    }

    private static StockLocation location(long id, String usage, Long warehouseId) {
        return StockLocation.builder().id(id).usage(usage).warehouseId(warehouseId).build();
    }
}
