package com.erp.stock.service;

import com.erp.audit.service.AuditService;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.ProductPriceHistory;
import com.erp.stock.entity.StockMove;
import com.erp.stock.entity.StockPicking;
import com.erp.stock.entity.ProductWarehouseValuation;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.repository.ProductPriceHistoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.ProductWarehouseValuationRepository;
import com.erp.stock.repository.StockMoveRepository;
import com.erp.stock.repository.StockQuantRepository;
import com.erp.stock.repository.StockLocationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Refonte de cette session : le CMUP (coût moyen unitaire pondéré) est désormais valorisé PAR
 * ENTREPÔT (ProductWarehouseValuation) au lieu d'un seul prix global sur Product.standardPrice.
 * Ces tests verrouillent le repli sur l'ancien prix global tant qu'aucune ligne n'existe encore
 * pour un couple (produit, entrepôt), et la formule de moyenne pondérée au recalcul.
 */
@ExtendWith(MockitoExtension.class)
class ProductValuationServiceTest {

    @Mock private ProductWarehouseValuationRepository warehouseValuationRepo;
    @Mock private StockLocationRepository locationRepo;
    @Mock private ProductPriceHistoryRepository priceHistoryRepo;
    @Mock private ProductRepository productRepo;
    @Mock private StockMoveRepository moveRepo;
    @Mock private AuditService auditService;
    @Mock private StockQuantRepository quantRepo;

    @InjectMocks
    private ProductValuationService service;

    @Test
    void resolvesWarehouseIdFromLocation() {
        StockLocation location = StockLocation.builder().id(10L).warehouseId(5L).build();
        when(locationRepo.findById(10L)).thenReturn(Optional.of(location));

        assertThat(service.resolveWarehouseId(10L)).isEqualTo(5L);
    }

    @Test
    void resolveWarehouseIdReturnsNullWhenLocationIdIsNull() {
        assertThat(service.resolveWarehouseId(null)).isNull();
    }

    @Test
    void getWarehouseCmupFallsBackToGlobalProductPriceWhenNoValuationRowExistsYet() {
        Product fallback = Product.builder().id(1L).standardPrice(new BigDecimal("1500")).build();
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.empty());

        BigDecimal result = service.getWarehouseCmup(1L, 5L, fallback);

        assertThat(result).isEqualByComparingTo("1500");
    }

    @Test
    void getWarehouseCmupUsesThePerWarehouseValueWhenPresentEvenIfGlobalDiffers() {
        Product fallback = Product.builder().id(1L).standardPrice(new BigDecimal("1500")).build();
        ProductWarehouseValuation valuation = ProductWarehouseValuation.builder()
                .productId(1L).warehouseId(5L).companyId(1L).standardPrice(new BigDecimal("2200")).build();
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.of(valuation));

        BigDecimal result = service.getWarehouseCmup(1L, 5L, fallback);

        assertThat(result).isEqualByComparingTo("2200");
    }

    @Test
    void getWarehouseCmupReturnsZeroWhenWarehouseIsNullAndProductHasNoStandardPrice() {
        Product fallback = Product.builder().id(1L).standardPrice(null).build();
        assertThat(service.getWarehouseCmup(1L, null, fallback)).isEqualByComparingTo("0");
    }

    @Test
    void recalcWarehouseCmupComputesWeightedAverageOnFirstIncomingStock() {
        // Aucune ligne existante pour ce (produit, entrepôt) → CMUP courant = 0, valeur actuelle = 0.
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.empty());
        ArgumentCaptor<ProductWarehouseValuation> captor = ArgumentCaptor.forClass(ProductWarehouseValuation.class);
        when(warehouseValuationRepo.save(any())).thenAnswer(inv -> inv.getArgument(0));

        // 0 en stock, entrée de 100 unités à 250 FCFA → nouveau CMUP = 250.
        BigDecimal newCmup = service.recalcWarehouseCmup(1L, 5L, 1L,
                new BigDecimal("100"), new BigDecimal("250"), null, null);

        assertThat(newCmup).isEqualByComparingTo("250");
        verify(warehouseValuationRepo).save(captor.capture());
        assertThat(captor.getValue().getStandardPrice()).isEqualByComparingTo("250");
    }

    @Test
    void recalcWarehouseCmupAveragesExistingStockWithIncomingStock() {
        ProductWarehouseValuation existing = ProductWarehouseValuation.builder()
                .productId(1L).warehouseId(5L).companyId(1L).standardPrice(new BigDecimal("200")).build();
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.of(existing));
        when(quantRepo.sumQuantityForProductInWarehouse(1L, 5L)).thenReturn(new BigDecimal("100"));
        when(warehouseValuationRepo.save(any())).thenAnswer(inv -> inv.getArgument(0));

        // 100 unités déjà dans l'entrepôt (tous emplacements confondus) à 200 FCFA (valeur = 20000) + 100 unités entrantes à 400 FCFA
        // (valeur = 40000) → nouveau CMUP = 60000 / 200 = 300.
        BigDecimal newCmup = service.recalcWarehouseCmup(1L, 5L, 1L,
                new BigDecimal("100"), new BigDecimal("400"), null, null);

        assertThat(newCmup).isEqualByComparingTo("300");
    }

    @Test
    void recalcWarehouseCmupKeepsExistingPriceWhenIncomingPriceIsNull() {
        // priceUnit null → repli sur le CMUP courant de l'entrepôt (pas ZERO), pour ne pas fausser
        // durablement la moyenne pondérée avec un prix manquant traité comme gratuit.
        ProductWarehouseValuation existing = ProductWarehouseValuation.builder()
                .productId(1L).warehouseId(5L).companyId(1L).standardPrice(new BigDecimal("500")).build();
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.of(existing));
        when(quantRepo.sumQuantityForProductInWarehouse(1L, 5L)).thenReturn(new BigDecimal("10"));
        when(warehouseValuationRepo.save(any())).thenAnswer(inv -> inv.getArgument(0));

        BigDecimal newCmup = service.recalcWarehouseCmup(1L, 5L, 1L,
                new BigDecimal("10"), null, null, null);

        // (10*500 + 10*500) / 20 = 500 — le prix courant sert de repli pour la portion entrante.
        assertThat(newCmup).isEqualByComparingTo("500");
    }

    // ── Historique des prix ──────────────────────────────────────────────────

    @Test
    @SuppressWarnings("unchecked")
    void recalcWarehouseCmupRecordsTheChangeAtTheMovementDate() {
        ProductWarehouseValuation existing = ProductWarehouseValuation.builder()
                .productId(1L).warehouseId(5L).companyId(1L).standardPrice(new BigDecimal("200")).build();
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.of(existing));
        when(quantRepo.sumQuantityForProductInWarehouse(1L, 5L)).thenReturn(new BigDecimal("100"));
        when(warehouseValuationRepo.save(any())).thenAnswer(inv -> inv.getArgument(0));
        LocalDateTime antidate = LocalDateTime.of(2025, 3, 10, 9, 0);

        service.recalcWarehouseCmup(1L, 5L, 1L,
                new BigDecimal("100"), new BigDecimal("400"), antidate, "REC/00012");

        ArgumentCaptor<ProductPriceHistory> captor = ArgumentCaptor.forClass(ProductPriceHistory.class);
        verify(priceHistoryRepo).save(captor.capture());
        ProductPriceHistory h = captor.getValue();
        assertThat(h.getPriceType()).isEqualTo(ProductPriceHistory.TYPE_CMUP);
        assertThat(h.getOldPrice()).isEqualByComparingTo("200");
        assertThat(h.getNewPrice()).isEqualByComparingTo("300");
        assertThat(h.getEffectiveDate()).isEqualTo(antidate);
        assertThat(h.getReference()).isEqualTo("REC/00012");
    }

    @Test
    void costTimelineReturnsThePriceInEffectAtEachDate() {
        LocalDateTime jan = LocalDateTime.of(2025, 1, 15, 10, 0);
        LocalDateTime jun = LocalDateTime.of(2025, 6, 15, 10, 0);
        ProductPriceHistory.ProductPriceHistoryBuilder row = ProductPriceHistory.builder()
                .productId(1L).warehouseId(5L).priceType(ProductPriceHistory.TYPE_CMUP);
        var timeline = new ProductValuationService.CostTimeline(
                Map.of(1L, List.of(
                        row.oldPrice(new BigDecimal("0")).newPrice(new BigDecimal("200")).effectiveDate(jan).build(),
                        row.oldPrice(new BigDecimal("200")).newPrice(new BigDecimal("300")).effectiveDate(jun).build())),
                Map.of(), Map.of(1L, new BigDecimal("300")));

        assertThat(timeline.costAt(1L, LocalDateTime.of(2025, 3, 1, 0, 0))).isEqualByComparingTo("200");
        assertThat(timeline.costAt(1L, jun)).isEqualByComparingTo("300");
        // Ouverture d'une période qui commence pile au changement : prix d'avant
        assertThat(timeline.costBefore(1L, jun)).isEqualByComparingTo("200");
        // Article sans historique : coût courant
        assertThat(timeline.costAt(2L, jun)).isEqualByComparingTo("0");
    }

    @Test
    @SuppressWarnings("unchecked")
    void rebuildReplaysEntriesAndExitsInChronologicalOrder() {
        StockLocation supplier = StockLocation.builder().id(1L).usage("supplier").build();
        StockLocation magasin = StockLocation.builder().id(10L).usage("internal").warehouseId(5L).build();
        StockLocation customer = StockLocation.builder().id(2L).usage("customer").build();
        when(locationRepo.findAll()).thenReturn(List.of(supplier, magasin, customer));
        when(moveRepo.findAllDoneChronological(1L)).thenReturn(List.of(
                move(1L, 10L, "100", "200", LocalDateTime.of(2025, 1, 10, 8, 0)),   // achat 100 à 200
                move(10L, 2L, "50", "0",    LocalDateTime.of(2025, 2, 10, 8, 0)),   // vente 50
                move(1L, 10L, "50", "400",  LocalDateTime.of(2025, 3, 10, 8, 0))));  // achat 50 à 400
        when(warehouseValuationRepo.findByCompanyId(1L)).thenReturn(List.of(ProductWarehouseValuation.builder()
                .productId(7L).warehouseId(5L).companyId(1L).standardPrice(new BigDecimal("300")).build()));

        ProductValuationService.RebuildResult result = service.rebuildCmupHistory(1L);

        ArgumentCaptor<List<ProductPriceHistory>> captor = ArgumentCaptor.forClass(List.class);
        verify(priceHistoryRepo).saveAll(captor.capture());
        List<ProductPriceHistory> rows = captor.getValue();
        assertThat(rows).hasSize(2);
        assertThat(rows.get(0).getNewPrice()).isEqualByComparingTo("200");
        // 50 restants à 200 + 50 entrants à 400 → 300, identique au CMUP courant : pas de recalage
        assertThat(rows.get(1).getQtyBefore()).isEqualByComparingTo("50");
        assertThat(rows.get(1).getNewPrice()).isEqualByComparingTo("300");
        assertThat(result.aligned()).isZero();
    }

    @Test
    void rebuildWeightsByTheWholeWarehouseNotJustTheDestinationLocation() {
        StockLocation supplier = StockLocation.builder().id(1L).usage("supplier").build();
        StockLocation rayonA = StockLocation.builder().id(10L).usage("internal").warehouseId(5L).build();
        StockLocation rayonB = StockLocation.builder().id(11L).usage("internal").warehouseId(5L).build();
        when(locationRepo.findAll()).thenReturn(List.of(supplier, rayonA, rayonB));
        when(moveRepo.findAllDoneChronological(1L)).thenReturn(List.of(
                move(1L, 10L, "100", "200", LocalDateTime.of(2025, 1, 10, 8, 0)),   // 100 à 200 dans A
                move(1L, 11L, "100", "400", LocalDateTime.of(2025, 2, 10, 8, 0))));  // 100 à 400 dans B
        when(warehouseValuationRepo.findByCompanyId(1L)).thenReturn(List.of());

        service.rebuildCmupHistory(1L);

        @SuppressWarnings("unchecked")
        ArgumentCaptor<List<ProductPriceHistory>> captor = ArgumentCaptor.forClass(List.class);
        verify(priceHistoryRepo).saveAll(captor.capture());
        // Les 100 unités de A comptent : (100×200 + 100×400) / 200 = 300, et non 400
        assertThat(captor.getValue().get(1).getQtyBefore()).isEqualByComparingTo("100");
        assertThat(captor.getValue().get(1).getNewPrice()).isEqualByComparingTo("300");
    }

    private static StockMove move(Long src, Long dest, String qty, String price, LocalDateTime date) {
        StockPicking picking = StockPicking.builder().name("P-" + date.getMonthValue()).dateDone(date).build();
        return StockMove.builder().productId(7L).locationId(src).locationDestId(dest)
                .qtyDone(new BigDecimal(qty)).priceUnit(new BigDecimal(price)).picking(picking).build();
    }
}
