package com.erp.stock.service;

import com.erp.stock.entity.Product;
import com.erp.stock.entity.ProductWarehouseValuation;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.repository.ProductWarehouseValuationRepository;
import com.erp.stock.repository.StockLocationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
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
                BigDecimal.ZERO, new BigDecimal("100"), new BigDecimal("250"));

        assertThat(newCmup).isEqualByComparingTo("250");
        verify(warehouseValuationRepo).save(captor.capture());
        assertThat(captor.getValue().getStandardPrice()).isEqualByComparingTo("250");
    }

    @Test
    void recalcWarehouseCmupAveragesExistingStockWithIncomingStock() {
        ProductWarehouseValuation existing = ProductWarehouseValuation.builder()
                .productId(1L).warehouseId(5L).companyId(1L).standardPrice(new BigDecimal("200")).build();
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.of(existing));
        when(warehouseValuationRepo.save(any())).thenAnswer(inv -> inv.getArgument(0));

        // 100 unités déjà en stock à 200 FCFA (valeur = 20000) + 100 unités entrantes à 400 FCFA
        // (valeur = 40000) → nouveau CMUP = 60000 / 200 = 300.
        BigDecimal newCmup = service.recalcWarehouseCmup(1L, 5L, 1L,
                new BigDecimal("100"), new BigDecimal("100"), new BigDecimal("400"));

        assertThat(newCmup).isEqualByComparingTo("300");
    }

    @Test
    void recalcWarehouseCmupKeepsExistingPriceWhenIncomingPriceIsNull() {
        // priceUnit null → repli sur le CMUP courant de l'entrepôt (pas ZERO), pour ne pas fausser
        // durablement la moyenne pondérée avec un prix manquant traité comme gratuit.
        ProductWarehouseValuation existing = ProductWarehouseValuation.builder()
                .productId(1L).warehouseId(5L).companyId(1L).standardPrice(new BigDecimal("500")).build();
        when(warehouseValuationRepo.findByProductIdAndWarehouseId(1L, 5L)).thenReturn(Optional.of(existing));
        when(warehouseValuationRepo.save(any())).thenAnswer(inv -> inv.getArgument(0));

        BigDecimal newCmup = service.recalcWarehouseCmup(1L, 5L, 1L,
                new BigDecimal("10"), new BigDecimal("10"), null);

        // (10*500 + 10*500) / 20 = 500 — le prix courant sert de repli pour la portion entrante.
        assertThat(newCmup).isEqualByComparingTo("500");
    }
}
