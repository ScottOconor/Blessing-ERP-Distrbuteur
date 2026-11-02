package com.erp.stock.service;

import com.erp.audit.service.AuditService;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

/**
 * Valeur opérationnelle du stock au prix d'achat de la fiche : réception, partielle, transfert,
 * sortie, retours, annulation, épuisement, initialisation. Le CMUP ne doit jamais y entrer.
 */
@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class StockLedgerServiceTest {

    private static final long MAIN = 1L, DEPOT = 2L, LOC_MAIN = 10L, LOC_DEPOT = 20L, LOC_SUPPLIER = 30L, LOC_CUSTOMER = 40L;

    @Mock private StockValuationEntryRepository entryRepo;
    @Mock private ProductWarehouseValuationRepository warehouseValuationRepo;
    @Mock private ProductPriceHistoryRepository priceHistoryRepo;
    @Mock private ProductRepository productRepo;
    @Mock private StockQuantRepository quantRepo;
    @Mock private StockLocationRepository locationRepo;
    @Mock private StockMoveRepository moveRepo;
    @Mock private AuditService auditService;

    @InjectMocks private StockLedgerService ledger;

    private final Product product = Product.builder().id(7L).companyId(1L).standardPrice(bd("1000")).build();
    private final Map<Long, ProductWarehouseValuation> rows = new HashMap<>();
    private final Map<Long, BigDecimal> stock = new HashMap<>();
    private final List<StockValuationEntry> entries = new ArrayList<>();

    @BeforeEach
    void setUp() {
        when(productRepo.findById(7L)).thenReturn(Optional.of(product));
        location(LOC_MAIN, "internal", MAIN);
        location(LOC_DEPOT, "internal", DEPOT);
        location(LOC_SUPPLIER, "supplier", null);
        location(LOC_CUSTOMER, "customer", null);
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(eq(7L), anyLong()))
                .thenAnswer(i -> Optional.ofNullable(rows.get(i.getArgument(1, Long.class))));
        when(warehouseValuationRepo.save(any())).thenAnswer(i -> {
            ProductWarehouseValuation v = i.getArgument(0);
            rows.put(v.getWarehouseId(), v);
            return v;
        });
        when(quantRepo.sumQuantityForProductInWarehouse(eq(7L), anyLong()))
                .thenAnswer(i -> stock.getOrDefault(i.getArgument(1, Long.class), BigDecimal.ZERO));
        when(entryRepo.save(any())).thenAnswer(i -> {
            entries.add(i.getArgument(0));
            return i.getArgument(0);
        });
        when(entryRepo.existsByMoveIdAndWarehouseIdAndDirection(anyLong(), anyLong(), anyString())).thenAnswer(i ->
                entries.stream().anyMatch(e -> i.getArgument(0).equals(e.getMoveId())
                        && i.getArgument(1).equals(e.getWarehouseId()) && i.getArgument(2).equals(e.getDirection())));
    }

    @Test
    void receptionIsValuedAtFichePriceWhateverTheInvoicePrice() {
        // Fiche 1 000, facture 1 200 (priceUnit), 100 reçus : 100 000, pas 120 000.
        stock.put(MAIN, bd("100"));
        ledger.postPicking(picking("incoming", "REC/00001", move(1L, "100", "1200", null, LOC_SUPPLIER, LOC_MAIN)));

        assertValue(MAIN, "100000");
        StockValuationEntry e = entries.get(0);
        assertThat(e.getPurchasePrice()).isEqualByComparingTo("1000");
        assertThat(e.getMoveValue()).isEqualByComparingTo("100000");
        assertThat(e.getMoveType()).isEqualTo("RECEPTION");
    }

    @Test
    void cmupRecordedInARowNeverEntersTheStockValue() {
        rows.put(MAIN, ProductWarehouseValuation.builder().productId(7L).warehouseId(MAIN).companyId(1L)
                .standardPrice(bd("1066.67")).stockValue(bd("150000")).build());
        stock.put(MAIN, bd("130"));
        ledger.postPicking(picking("outgoing", "LIV/VTE/00001", move(2L, "20", "1500", null, LOC_MAIN, LOC_CUSTOMER)));

        assertValue(MAIN, "130000"); // 150 000 − 20 × 1 000 ; au CMUP on aurait 128 666,60
        assertThat(rows.get(MAIN).getStandardPrice()).isEqualByComparingTo("1066.67");
        assertThat(entries.get(0).getMoveType()).isEqualTo("VENTE");
    }

    @Test
    void changingTheFichePriceDoesNotRevalueStockAlreadyEntered() {
        stock.put(MAIN, bd("100"));
        ledger.postPicking(picking("incoming", "REC/00001", move(1L, "100", "1000", null, LOC_SUPPLIER, LOC_MAIN)));

        product.setStandardPrice(bd("1300"));
        assertValue(MAIN, "100000");

        stock.put(MAIN, bd("150"));
        ledger.postPicking(picking("incoming", "REC/00002", move(2L, "50", "1300", null, LOC_SUPPLIER, LOC_MAIN)));
        assertValue(MAIN, "165000");
    }

    @Test
    void aMoveWeighsOnlyOnceEvenIfPostedAgain() {
        stock.put(MAIN, bd("100"));
        StockPicking p = picking("incoming", "REC/00001", move(1L, "100", "1000", null, LOC_SUPPLIER, LOC_MAIN));
        ledger.postPicking(p);
        ledger.postPicking(p);

        assertValue(MAIN, "100000");
        assertThat(entries).hasSize(1);
    }

    @Test
    void transferKeepsTheSameValueBetweenSourceAndDestination() {
        rows.put(MAIN, valued(MAIN, "100000"));
        StockMove out = move(1L, "40", "1100", "1000", LOC_MAIN, LOC_DEPOT);
        StockPicking transfer = picking("internal", "MP/OUT/00001", out);
        stock.put(MAIN, bd("60"));
        ledger.postOut(transfer, out, MAIN, bd("40"));
        assertValue(MAIN, "60000");

        StockMove in = move(2L, "40", "1100", "1000", LOC_MAIN, LOC_DEPOT);
        stock.put(DEPOT, bd("30"));
        stock.put(MAIN, bd("70"));
        ledger.postIn(transfer, in, DEPOT, bd("30"));
        ledger.postReturn(transfer, in, MAIN, bd("10"));

        assertValue(DEPOT, "30000");
        assertValue(MAIN, "70000");
        assertThat(entries).allSatisfy(e -> assertThat(e.getMoveType()).isEqualTo("TRANSFERT"));
    }

    @Test
    void cancellingARecordedOutRestoresItsValueOnce() {
        rows.put(MAIN, valued(MAIN, "100000"));
        StockMove out = move(1L, "40", "1100", "1000", LOC_MAIN, LOC_DEPOT);
        StockPicking transfer = picking("internal", "MP/OUT/00001", out);
        stock.put(MAIN, bd("60"));
        ledger.postOut(transfer, out, MAIN, bd("40"));

        stock.put(MAIN, bd("100"));
        ledger.postCancelOut(transfer, out, bd("40"));
        ledger.postCancelOut(transfer, out, bd("40"));

        assertValue(MAIN, "100000");
    }

    @Test
    void cancellingAnOutThatPredatesTheJournalChangesNothing() {
        rows.put(MAIN, valued(MAIN, "60000"));
        stock.put(MAIN, bd("100"));
        ledger.postCancelOut(picking("internal", "OLD/1"), move(9L, "40", "0", "1000", LOC_MAIN, LOC_DEPOT), bd("40"));

        assertValue(MAIN, "60000");
        assertThat(entries).isEmpty();
    }

    @Test
    void customerReturnReentersAtThePriceFrozenOnTheOriginalSale() {
        product.setStandardPrice(bd("1300"));
        rows.put(MAIN, valued(MAIN, "80000"));
        stock.put(MAIN, bd("90"));
        ledger.postPicking(picking("incoming", "RET/VTE/00001", move(1L, "10", "1500", "1000", LOC_CUSTOMER, LOC_MAIN)));

        assertValue(MAIN, "90000");
        assertThat(entries.get(0).getMoveType()).isEqualTo("RETOUR_CLIENT");
    }

    @Test
    void supplierReturnLowersQuantityAndValueAtPurchasePrice() {
        rows.put(MAIN, valued(MAIN, "100000"));
        stock.put(MAIN, bd("90"));
        ledger.postPicking(picking("outgoing", "RET/ACH/00001", move(1L, "10", "1200", null, LOC_MAIN, LOC_SUPPLIER)));

        assertValue(MAIN, "90000");
        assertThat(entries.get(0).getMoveType()).isEqualTo("RETOUR_FOURNISSEUR");
    }

    @Test
    void depletedStockKeepsNoResidualValueAndNextCycleStartsClean() {
        rows.put(MAIN, valued(MAIN, "100000"));
        product.setStandardPrice(bd("1200"));
        stock.put(MAIN, bd("0"));
        ledger.postPicking(picking("outgoing", "LIV/VTE/00001", move(1L, "100", "1500", null, LOC_MAIN, LOC_CUSTOMER)));
        assertValue(MAIN, "0");

        stock.put(MAIN, bd("50"));
        ledger.postPicking(picking("incoming", "REC/00002", move(2L, "50", "1200", null, LOC_SUPPLIER, LOC_MAIN)));
        assertValue(MAIN, "60000");
    }

    @Test
    void existingStockStaysUnestablishedUntilInitializedAndNoValueIsInvented() {
        rows.put(MAIN, ProductWarehouseValuation.builder().productId(7L).warehouseId(MAIN).companyId(1L)
                .standardPrice(bd("950")).build());
        stock.put(MAIN, bd("130"));
        ledger.postPicking(picking("incoming", "REC/00001", move(1L, "30", "1000", null, LOC_SUPPLIER, LOC_MAIN)));

        assertThat(rows.get(MAIN).getStockValue()).isNull();
        assertThat(entries.get(0).getStockValueAfter()).isNull();
    }

    @Test
    void initializationUsesFichePriceKeepsCmupTracesAndSkipsUnpricedArticles() {
        Product unpriced = Product.builder().id(8L).companyId(1L).name("B").standardPrice(BigDecimal.ZERO).build();
        product.setName("A");
        rows.put(MAIN, ProductWarehouseValuation.builder().productId(7L).warehouseId(MAIN).companyId(1L)
                .standardPrice(bd("950")).build());
        when(locationRepo.findInternalAndTransit(1L)).thenReturn(List.of(
                StockLocation.builder().id(LOC_MAIN).usage("internal").warehouseId(MAIN).build()));
        when(quantRepo.findAllWithStock(1L)).thenReturn(List.of(
                StockQuant.builder().productId(7L).locationId(LOC_MAIN).quantity(bd("100")).build(),
                StockQuant.builder().productId(8L).locationId(LOC_MAIN).quantity(bd("5")).build()));
        when(warehouseValuationRepo.findByCompanyId(1L)).thenAnswer(i -> new ArrayList<>(rows.values()));
        when(productRepo.findAllById(any())).thenReturn(List.of(product, unpriced));

        StockLedgerService.InitResult result = ledger.initialize(1L);

        assertThat(result.initialized()).isEqualTo(1);
        assertThat(result.skipped()).isEqualTo(1);
        assertValue(MAIN, "100000");
        assertThat(rows.get(MAIN).getStandardPrice()).isEqualByComparingTo("950");
        assertThat(entries.get(0).getDirection()).isEqualTo(StockValuationEntry.DIRECTION_INIT);
        assertThat(ledger.initialize(1L).initialized()).isZero();
    }

    @Test
    void quantValueIsAShareOfWarehouseValueAndFallsBackOnPurchasePriceNeverCmup() {
        rows.put(MAIN, valued(MAIN, "100000"));
        rows.get(MAIN).setStandardPrice(bd("5000"));
        rows.put(DEPOT, ProductWarehouseValuation.builder().productId(7L).warehouseId(DEPOT).companyId(1L)
                .standardPrice(bd("5000")).build());
        StockQuant a = StockQuant.builder().productId(7L).locationId(LOC_MAIN).quantity(bd("100")).build();
        StockQuant b = StockQuant.builder().productId(7L).locationId(LOC_DEPOT).quantity(bd("10")).build();
        when(locationRepo.findInternalAndTransit(1L)).thenReturn(List.of(
                StockLocation.builder().id(LOC_MAIN).usage("internal").warehouseId(MAIN).build(),
                StockLocation.builder().id(LOC_DEPOT).usage("internal").warehouseId(DEPOT).build()));
        when(quantRepo.findAllWithStock(1L)).thenReturn(List.of(a, b));
        when(warehouseValuationRepo.findByCompanyId(1L)).thenReturn(new ArrayList<>(rows.values()));

        StockLedgerService.ValueView view = ledger.loadValues(1L);

        assertThat(view.valueOf(a, bd("1200"))).isEqualByComparingTo("100000");
        assertThat(view.valueOf(b, bd("1200"))).isEqualByComparingTo("12000");
        assertThat(view.isEstablished(a)).isTrue();
        assertThat(view.isEstablished(b)).isFalse();
    }

    private void assertValue(long warehouseId, String expected) {
        assertThat(rows.get(warehouseId).getStockValue()).isEqualByComparingTo(expected);
    }

    private ProductWarehouseValuation valued(long warehouseId, String value) {
        return ProductWarehouseValuation.builder().productId(7L).warehouseId(warehouseId).companyId(1L)
                .standardPrice(bd("1000")).stockValue(bd(value)).build();
    }

    private void location(long id, String usage, Long warehouseId) {
        when(locationRepo.findById(id)).thenReturn(Optional.of(
                StockLocation.builder().id(id).usage(usage).warehouseId(warehouseId).build()));
    }

    private static StockPicking picking(String code, String name, StockMove... moves) {
        StockPicking p = StockPicking.builder().name(name).pickingTypeCode(code).companyId(1L).build();
        p.setMoves(new ArrayList<>(List.of(moves)));
        return p;
    }

    private static StockMove move(Long id, String qty, String priceUnit, String purchasePrice, long src, long dest) {
        return StockMove.builder().id(id).productId(7L).companyId(1L).state("done")
                .qtyDemanded(bd(qty)).qtyDone(bd(qty)).priceUnit(bd(priceUnit))
                .purchasePrice(purchasePrice != null ? bd(purchasePrice) : null)
                .locationId(src).locationDestId(dest).build();
    }

    private static BigDecimal bd(String v) {
        return new BigDecimal(v);
    }
}
