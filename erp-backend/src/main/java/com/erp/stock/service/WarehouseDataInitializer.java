package com.erp.stock.service;

import com.erp.stock.entity.Warehouse;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.repository.WarehouseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Au démarrage, si un entrepôt a déjà un depotAchatWarehouseId configuré,
 * s'assure que son picking type "incoming" pointe bien vers le stock du Dépôt Achat.
 * Ne crée aucun entrepôt ni aucun emplacement automatiquement.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class WarehouseDataInitializer implements ApplicationRunner {

    private final WarehouseRepository warehouseRepo;
    private final StockPickingTypeRepository pickingTypeRepo;

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        List<Warehouse> warehouses = warehouseRepo.findAll();
        for (Warehouse wh : warehouses) {
            if (wh.getDepotAchatWarehouseId() == null) continue;
            Long daStockLocId = warehouseRepo.findById(wh.getDepotAchatWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(null);
            if (daStockLocId == null) continue;
            pickingTypeRepo.findByWarehouseIdOrderByNameAsc(wh.getId()).stream()
                    .filter(pt -> "incoming".equals(pt.getCode()))
                    .filter(pt -> !daStockLocId.equals(pt.getDefaultLocationDestId()))
                    .forEach(pt -> {
                        pt.setDefaultLocationDestId(daStockLocId);
                        pickingTypeRepo.save(pt);
                        log.info("Picking type incoming (id={}) → dest Dépôt Achat stock (id={})",
                                pt.getId(), daStockLocId);
                    });
        }
    }
}
