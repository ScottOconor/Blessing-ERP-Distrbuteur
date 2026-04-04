package com.erp.stock.service;

import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.stock.dto.*;
import com.erp.stock.entity.*;
import com.erp.stock.repository.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.PageRequest;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class StockService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final ProductCategoryRepository categoryRepo;
    private final ProductRepository productRepo;
    private final WarehouseRepository warehouseRepo;
    private final StockLocationRepository locationRepo;
    private final StockPickingTypeRepository pickingTypeRepo;
    private final StockPickingRepository pickingRepo;
    private final StockMoveRepository moveRepo;
    private final StockQuantRepository quantRepo;
    private final ValuationLayerRepository valuationRepo;
    private final AgencyRepository agencyRepo;
    private final StockAdjustmentRepository adjustmentRepo;

    // Accounting
    private final AccountMoveRepository accountMoveRepo;
    private final AccountMoveLineRepository accountMoveLineRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountAccountRepository accountRepo;
    private final CompanyRepository companyRepo;

    // ============================================================
    // PRODUCT CATEGORIES
    // ============================================================

    @Transactional(readOnly = true)
    public List<ProductCategoryDTO> getCategories(Long companyId) {
        return categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().map(this::toCategoryDTO).collect(Collectors.toList());
    }

    public ProductCategoryDTO createCategory(ProductCategoryDTO dto) {
        ProductCategory c = ProductCategory.builder()
                .name(dto.getName())
                .code(dto.getCode())
                .stockAccountCode(dto.getStockAccountCode() != null ? dto.getStockAccountCode() : "311000")
                .stockInAccountCode(dto.getStockInAccountCode() != null ? dto.getStockInAccountCode() : "6031")
                .cogsAccountCode(dto.getCogsAccountCode() != null ? dto.getCogsAccountCode() : "60500")
                .parentId(dto.getParentId())
                .companyId(dto.getCompanyId())
                .build();
        return toCategoryDTO(categoryRepo.save(c));
    }

    public ProductCategoryDTO updateCategory(Long id, ProductCategoryDTO dto) {
        ProductCategory c = categoryRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Category not found: " + id));
        c.setName(dto.getName());
        c.setCode(dto.getCode());
        if (dto.getStockAccountCode() != null) c.setStockAccountCode(dto.getStockAccountCode());
        if (dto.getStockInAccountCode() != null) c.setStockInAccountCode(dto.getStockInAccountCode());
        if (dto.getCogsAccountCode() != null) c.setCogsAccountCode(dto.getCogsAccountCode());
        c.setParentId(dto.getParentId());
        return toCategoryDTO(categoryRepo.save(c));
    }

    private ProductCategoryDTO toCategoryDTO(ProductCategory c) {
        String parentName = null;
        if (c.getParentId() != null) {
            parentName = categoryRepo.findById(c.getParentId()).map(ProductCategory::getName).orElse(null);
        }
        return ProductCategoryDTO.builder()
                .id(c.getId()).name(c.getName()).code(c.getCode())
                .stockAccountCode(c.getStockAccountCode())
                .stockInAccountCode(c.getStockInAccountCode())
                .cogsAccountCode(c.getCogsAccountCode())
                .parentId(c.getParentId()).parentName(parentName)
                .companyId(c.getCompanyId())
                .build();
    }

    // ============================================================
    // PRODUCTS
    // ============================================================

    @Transactional(readOnly = true)
    public List<ProductDTO> getProducts(Long companyId) {
        List<Product> products = productRepo.findByCompanyIdOrderByNameAsc(companyId);
        // Calculate on-hand qty for each product
        Map<Long, BigDecimal> qtyMap = new HashMap<>();
        quantRepo.findAllWithStock(companyId).forEach(q -> {
            qtyMap.merge(q.getProductId(), q.getQuantity(), BigDecimal::add);
        });
        return products.stream().map(p -> toProductDTO(p, qtyMap.getOrDefault(p.getId(), ZERO)))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductDTO getProduct(Long id) {
        Product p = productRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Product not found: " + id));
        BigDecimal qty = quantRepo.findByProductIdAndCompanyId(p.getId(), p.getCompanyId())
                .stream().map(StockQuant::getQuantity).reduce(ZERO, BigDecimal::add);
        return toProductDTO(p, qty);
    }

    public ProductDTO createProduct(ProductDTO dto) {
        // Hériter les comptes de la catégorie si non spécifiés
        String stockCode = dto.getStockAccountCode();
        String cogsCode = dto.getCogsAccountCode();
        if ((stockCode == null || cogsCode == null) && dto.getCategoryId() != null) {
            categoryRepo.findById(dto.getCategoryId()).ifPresent(cat -> {
            });
        }
        if (stockCode == null) stockCode = resolveStockAccountCode(dto.getCategoryId(), dto.getCompanyId());
        if (cogsCode == null) cogsCode = resolveCogsAccountCode(dto.getCategoryId(), dto.getCompanyId());

        Product p = Product.builder()
                .defaultCode(dto.getDefaultCode())
                .name(dto.getName())
                .categoryId(dto.getCategoryId())
                .uomName(dto.getUomName())
                .standardPrice(dto.getStandardPrice() != null ? dto.getStandardPrice() : ZERO)
                .salePrice(dto.getSalePrice() != null ? dto.getSalePrice() : ZERO)
                .type(dto.getType() != null ? dto.getType() : "product")
                .stockAccountCode(stockCode)
                .cogsAccountCode(cogsCode)
                .description(dto.getDescription())
                .active(true)
                .companyId(dto.getCompanyId())
                .build();
        return toProductDTO(productRepo.save(p), ZERO);
    }

    public ProductDTO updateProduct(Long id, ProductDTO dto) {
        Product p = productRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Product not found: " + id));
        if (dto.getDefaultCode() != null) p.setDefaultCode(dto.getDefaultCode());
        p.setName(dto.getName());
        if (dto.getCategoryId() != null) p.setCategoryId(dto.getCategoryId());
        if (dto.getUomName() != null) p.setUomName(dto.getUomName());
        if (dto.getStandardPrice() != null) p.setStandardPrice(dto.getStandardPrice());
        if (dto.getSalePrice() != null) p.setSalePrice(dto.getSalePrice());
        if (dto.getType() != null) p.setType(dto.getType());
        if (dto.getStockAccountCode() != null) p.setStockAccountCode(dto.getStockAccountCode());
        if (dto.getCogsAccountCode() != null) p.setCogsAccountCode(dto.getCogsAccountCode());
        if (dto.getDescription() != null) p.setDescription(dto.getDescription());
        p.setActive(dto.isActive());
        BigDecimal qty = quantRepo.findByProductIdAndCompanyId(p.getId(), p.getCompanyId())
                .stream().map(StockQuant::getQuantity).reduce(ZERO, BigDecimal::add);
        return toProductDTO(productRepo.save(p), qty);
    }

    private ProductDTO toProductDTO(Product p, BigDecimal qtyOnHand) {
        String catName = p.getCategoryId() != null
                ? categoryRepo.findById(p.getCategoryId()).map(ProductCategory::getName).orElse(null) : null;
        return ProductDTO.builder()
                .id(p.getId()).defaultCode(p.getDefaultCode()).name(p.getName())
                .categoryId(p.getCategoryId()).categoryName(catName)
                .uomName(p.getUomName()).standardPrice(p.getStandardPrice())
                .salePrice(p.getSalePrice()).type(p.getType())
                .stockAccountCode(p.getStockAccountCode()).cogsAccountCode(p.getCogsAccountCode())
                .description(p.getDescription()).active(p.isActive())
                .companyId(p.getCompanyId()).qtyOnHand(qtyOnHand)
                .createdAt(p.getCreatedAt())
                .build();
    }

    private String resolveStockAccountCode(Long categoryId, Long companyId) {
        if (categoryId != null) {
            return categoryRepo.findById(categoryId)
                    .map(c -> c.getStockAccountCode() != null ? c.getStockAccountCode() : "311000")
                    .orElse("311000");
        }
        return "311000";
    }

    private String resolveCogsAccountCode(Long categoryId, Long companyId) {
        if (categoryId != null) {
            return categoryRepo.findById(categoryId)
                    .map(c -> c.getCogsAccountCode() != null ? c.getCogsAccountCode() : "60500")
                    .orElse("60500");
        }
        return "60500";
    }

    // ============================================================
    // WAREHOUSES
    // ============================================================

    @Transactional(readOnly = true)
    public List<WarehouseDTO> getWarehouses(Long companyId) {
        return warehouseRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().map(w -> toWarehouseDTO(w, false)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public WarehouseDTO getWarehouse(Long id) {
        Warehouse w = warehouseRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Warehouse not found: " + id));
        return toWarehouseDTO(w, true);
    }

    public WarehouseDTO createWarehouse(WarehouseDTO dto) {
        if (warehouseRepo.existsByCodeAndCompanyId(dto.getCode().toUpperCase(), dto.getCompanyId())) {
            throw new IllegalStateException("Un entrepôt avec le code " + dto.getCode() + " existe déjà");
        }
        String code = dto.getCode().toUpperCase();

        // 1. Créer les emplacements système
        StockLocation supplierLoc = locationRepo.save(StockLocation.builder()
                .name("Fournisseurs").usage("supplier").companyId(null).active(true).build());
        StockLocation customerLoc = locationRepo.save(StockLocation.builder()
                .name("Clients").usage("customer").companyId(null).active(true).build());

        // 2. Emplacement vue (racine de l'entrepôt)
        StockLocation viewLoc = locationRepo.save(StockLocation.builder()
                .name(dto.getName()).usage("view").companyId(dto.getCompanyId()).active(true).build());

        // 3. Emplacement stock principal
        StockLocation stockLoc = locationRepo.save(StockLocation.builder()
                .name("Stock").usage("internal").parentId(viewLoc.getId())
                .companyId(dto.getCompanyId()).active(true)
                .accountCode(dto.getStockJournalId() != null ? null : "311000")
                .build());

        // 4. Emplacement transit inter-dépôts
        StockLocation transitLoc = locationRepo.save(StockLocation.builder()
                .name("Transit").usage("transit").parentId(viewLoc.getId())
                .companyId(dto.getCompanyId()).active(true).build());

        viewLoc.setWarehouseId(null); // vue n'a pas de warehouseId

        // 5. Créer l'entrepôt
        Warehouse wh = Warehouse.builder()
                .name(dto.getName()).code(code)
                .stockLocationId(stockLoc.getId())
                .stockJournalId(dto.getStockJournalId())
                .companyId(dto.getCompanyId()).active(true)
                .build();
        wh = warehouseRepo.save(wh);

        // 6. Mettre à jour les warehouseId sur les locations
        stockLoc.setWarehouseId(wh.getId());
        transitLoc.setWarehouseId(wh.getId());
        locationRepo.save(stockLoc);
        locationRepo.save(transitLoc);

        // 7. Créer les types d'opérations
        pickingTypeRepo.save(StockPickingType.builder()
                .name("Réceptions").code("incoming").warehouseId(wh.getId())
                .defaultLocationSrcId(supplierLoc.getId())
                .defaultLocationDestId(stockLoc.getId())
                .sequencePrefix(code + "/IN")
                .companyId(dto.getCompanyId()).build());

        pickingTypeRepo.save(StockPickingType.builder()
                .name("Livraisons").code("outgoing").warehouseId(wh.getId())
                .defaultLocationSrcId(stockLoc.getId())
                .defaultLocationDestId(customerLoc.getId())
                .sequencePrefix(code + "/OUT")
                .companyId(dto.getCompanyId()).build());

        pickingTypeRepo.save(StockPickingType.builder()
                .name("Transferts internes").code("internal").warehouseId(wh.getId())
                .defaultLocationSrcId(stockLoc.getId())
                .defaultLocationDestId(stockLoc.getId())
                .sequencePrefix(code + "/INT")
                .companyId(dto.getCompanyId()).build());

        return toWarehouseDTO(wh, true);
    }

    public WarehouseDTO updateWarehouse(Long id, WarehouseDTO dto) {
        Warehouse wh = warehouseRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Warehouse not found: " + id));
        wh.setName(dto.getName());
        if (dto.getStockJournalId() != null) wh.setStockJournalId(dto.getStockJournalId());
        wh.setActive(dto.isActive());
        return toWarehouseDTO(warehouseRepo.save(wh), false);
    }

    private WarehouseDTO toWarehouseDTO(Warehouse w, boolean withLocations) {
        String stockLocName = w.getStockLocationId() != null
                ? locationRepo.findById(w.getStockLocationId()).map(StockLocation::getName).orElse(null) : null;
        String journalName = w.getStockJournalId() != null
                ? journalRepo.findById(w.getStockJournalId()).map(AccountJournal::getName).orElse(null) : null;

        List<StockLocationDTO> locations = null;
        if (withLocations) {
            locations = locationRepo.findByWarehouseIdOrderByNameAsc(w.getId())
                    .stream().map(l -> toLocationDTO(l, false)).collect(Collectors.toList());
        }
        return WarehouseDTO.builder()
                .id(w.getId()).name(w.getName()).code(w.getCode())
                .stockLocationId(w.getStockLocationId()).stockLocationName(stockLocName)
                .stockJournalId(w.getStockJournalId()).stockJournalName(journalName)
                .companyId(w.getCompanyId()).active(w.isActive())
                .locations(locations)
                .build();
    }

    // ============================================================
    // LOCATIONS
    // ============================================================

    @Transactional(readOnly = true)
    public List<StockLocationDTO> getLocations(Long companyId) {
        return locationRepo.findAllForCompany(companyId)
                .stream().map(l -> toLocationDTO(l, false)).collect(Collectors.toList());
    }

    public StockLocationDTO createLocation(StockLocationDTO dto) {
        StockLocation l = StockLocation.builder()
                .name(dto.getName()).parentId(dto.getParentId())
                .usage(dto.getUsage() != null ? dto.getUsage() : "internal")
                .warehouseId(dto.getWarehouseId())
                .companyId(dto.getCompanyId())
                .accountCode(dto.getAccountCode())
                .active(true).build();
        return toLocationDTO(locationRepo.save(l), false);
    }

    public StockLocationDTO updateLocation(Long id, StockLocationDTO dto) {
        StockLocation l = locationRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Location not found: " + id));
        l.setName(dto.getName());
        if (dto.getAccountCode() != null) l.setAccountCode(dto.getAccountCode());
        l.setActive(dto.isActive());
        return toLocationDTO(locationRepo.save(l), false);
    }

    StockLocationDTO toLocationDTO(StockLocation l, boolean withChildren) {
        String parentName = l.getParentId() != null
                ? locationRepo.findById(l.getParentId()).map(StockLocation::getName).orElse(null) : null;
        String whName = l.getWarehouseId() != null
                ? warehouseRepo.findById(l.getWarehouseId()).map(Warehouse::getName).orElse(null) : null;
        List<StockLocationDTO> children = null;
        if (withChildren) {
            children = locationRepo.findByParentIdOrderByNameAsc(l.getId())
                    .stream().map(c -> toLocationDTO(c, false)).collect(Collectors.toList());
        }
        return StockLocationDTO.builder()
                .id(l.getId()).name(l.getName())
                .completeName(buildCompleteName(l))
                .parentId(l.getParentId()).parentName(parentName)
                .usage(l.getUsage()).warehouseId(l.getWarehouseId()).warehouseName(whName)
                .companyId(l.getCompanyId()).accountCode(l.getAccountCode())
                .active(l.isActive()).children(children)
                .build();
    }

    private String buildCompleteName(StockLocation loc) {
        List<String> parts = new ArrayList<>();
        parts.add(loc.getName());
        Long parentId = loc.getParentId();
        int depth = 0;
        while (parentId != null && depth++ < 5) {
            Long finalParentId = parentId;
            Optional<StockLocation> parent = locationRepo.findById(finalParentId);
            if (parent.isEmpty()) break;
            parts.add(0, parent.get().getName());
            parentId = parent.get().getParentId();
        }
        return String.join(" / ", parts);
    }

    // ============================================================
    // PICKING TYPES
    // ============================================================

    @Transactional(readOnly = true)
    public List<StockPickingTypeDTO> getPickingTypes(Long companyId) {
        return pickingTypeRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().map(this::toPickingTypeDTO).collect(Collectors.toList());
    }

    private StockPickingTypeDTO toPickingTypeDTO(StockPickingType pt) {
        String whName = pt.getWarehouseId() != null
                ? warehouseRepo.findById(pt.getWarehouseId()).map(Warehouse::getName).orElse(null) : null;
        String srcName = pt.getDefaultLocationSrcId() != null
                ? locationRepo.findById(pt.getDefaultLocationSrcId()).map(l -> buildCompleteName(l)).orElse(null) : null;
        String destName = pt.getDefaultLocationDestId() != null
                ? locationRepo.findById(pt.getDefaultLocationDestId()).map(l -> buildCompleteName(l)).orElse(null) : null;
        return StockPickingTypeDTO.builder()
                .id(pt.getId()).name(pt.getName()).code(pt.getCode())
                .warehouseId(pt.getWarehouseId()).warehouseName(whName)
                .defaultLocationSrcId(pt.getDefaultLocationSrcId()).defaultLocationSrcName(srcName)
                .defaultLocationDestId(pt.getDefaultLocationDestId()).defaultLocationDestName(destName)
                .sequencePrefix(pt.getSequencePrefix()).companyId(pt.getCompanyId())
                .build();
    }

    // ============================================================
    // PICKINGS (Transferts)
    // ============================================================

    @Transactional(readOnly = true)
    public List<StockPickingDTO> getPickings(Long companyId, String typeCode) {
        List<StockPicking> pickings = typeCode != null
                ? pickingRepo.findByCompanyAndType(companyId, typeCode)
                : pickingRepo.findByCompanyIdOrderByCreatedAtDesc(companyId);
        return pickings.stream().map(p -> toPickingDTO(p, false)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public StockPickingDTO getPicking(Long id) {
        StockPicking p = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        return toPickingDTO(p, true);
    }

    public StockPickingDTO createPicking(StockPickingRequest req) {
        StockPickingType pt = pickingTypeRepo.findById(req.getPickingTypeId())
                .orElseThrow(() -> new EntityNotFoundException("Picking type not found: " + req.getPickingTypeId()));

        Long srcLocId = req.getLocationId() != null ? req.getLocationId() : pt.getDefaultLocationSrcId();
        Long destLocId = req.getLocationDestId() != null ? req.getLocationDestId() : pt.getDefaultLocationDestId();

        String name = generatePickingName(pt, req.getCompanyId());

        StockPicking picking = StockPicking.builder()
                .name(name)
                .pickingTypeId(pt.getId())
                .pickingTypeCode(pt.getCode())
                .locationId(srcLocId)
                .locationDestId(destLocId)
                .partnerId(req.getPartnerId())
                .partnerName(req.getPartnerName())
                .state("draft")
                .scheduledDate(req.getScheduledDate())
                .origin(req.getOrigin())
                .notes(req.getNotes())
                .agencyId(req.getAgencyId())
                .companyId(req.getCompanyId())
                .build();

        if (req.getMoves() != null) {
            for (StockPickingRequest.MoveRequest mr : req.getMoves()) {
                Product product = productRepo.findById(mr.getProductId())
                        .orElseThrow(() -> new EntityNotFoundException("Product not found: " + mr.getProductId()));
                StockMove move = StockMove.builder()
                        .picking(picking)
                        .productId(product.getId())
                        .productCode(product.getDefaultCode())
                        .productName(product.getName())
                        .uomName(product.getUomName())
                        .qtyDemanded(mr.getQtyDemanded())
                        .qtyDone(mr.getQtyDone() != null ? mr.getQtyDone() : mr.getQtyDemanded())
                        .priceUnit(mr.getPriceUnit() != null ? mr.getPriceUnit() : product.getStandardPrice())
                        .locationId(mr.getLocationId() != null ? mr.getLocationId() : srcLocId)
                        .locationDestId(mr.getLocationDestId() != null ? mr.getLocationDestId() : destLocId)
                        .state("draft")
                        .companyId(req.getCompanyId())
                        .build();
                picking.getMoves().add(move);
            }
        }

        StockPicking saved = pickingRepo.save(picking);
        return toPickingDTO(saved, true);
    }

    public StockPickingDTO updatePicking(Long id, StockPickingRequest req) {
        StockPicking p = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        if (!"draft".equals(p.getState())) throw new IllegalStateException("Seuls les transferts en brouillon peuvent être modifiés");

        if (req.getLocationId() != null) p.setLocationId(req.getLocationId());
        if (req.getLocationDestId() != null) p.setLocationDestId(req.getLocationDestId());
        if (req.getPartnerId() != null) p.setPartnerId(req.getPartnerId());
        if (req.getPartnerName() != null) p.setPartnerName(req.getPartnerName());
        if (req.getScheduledDate() != null) p.setScheduledDate(req.getScheduledDate());
        if (req.getOrigin() != null) p.setOrigin(req.getOrigin());
        if (req.getNotes() != null) p.setNotes(req.getNotes());

        // Mettre à jour les lignes
        if (req.getMoves() != null) {
            p.getMoves().clear();
            for (StockPickingRequest.MoveRequest mr : req.getMoves()) {
                Product product = productRepo.findById(mr.getProductId())
                        .orElseThrow(() -> new EntityNotFoundException("Product not found: " + mr.getProductId()));
                StockMove move = StockMove.builder()
                        .picking(p)
                        .productId(product.getId())
                        .productCode(product.getDefaultCode())
                        .productName(product.getName())
                        .uomName(product.getUomName())
                        .qtyDemanded(mr.getQtyDemanded())
                        .qtyDone(mr.getQtyDone() != null ? mr.getQtyDone() : mr.getQtyDemanded())
                        .priceUnit(mr.getPriceUnit() != null ? mr.getPriceUnit() : product.getStandardPrice())
                        .locationId(mr.getLocationId() != null ? mr.getLocationId() : p.getLocationId())
                        .locationDestId(mr.getLocationDestId() != null ? mr.getLocationDestId() : p.getLocationDestId())
                        .state("draft")
                        .companyId(p.getCompanyId())
                        .build();
                p.getMoves().add(move);
            }
        }
        return toPickingDTO(pickingRepo.save(p), true);
    }

    /**
     * Valider un transfert : met à jour le stock, CMUP, et crée l'écriture comptable
     */
    public StockPickingDTO validatePicking(Long id) {
        StockPicking picking = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        if ("done".equals(picking.getState())) throw new IllegalStateException("Ce transfert est déjà validé");
        if ("cancelled".equals(picking.getState())) throw new IllegalStateException("Ce transfert est annulé");

        List<StockMove> moves = picking.getMoves();
        if (moves.isEmpty()) throw new IllegalStateException("Aucune ligne à valider");

        // ---- Appliquer les mouvements de stock ----
        for (StockMove move : moves) {
            BigDecimal qty = move.getQtyDone();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;

            Product product = productRepo.findById(move.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Product not found: " + move.getProductId()));

            // --- Source : diminuer le stock (si emplacement interne) ---
            StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
            if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                StockQuant srcQuant = findOrCreateQuant(move.getProductId(), move.getLocationId(), picking.getCompanyId());
                srcQuant.setQuantity(srcQuant.getQuantity().subtract(qty));
                if (srcQuant.getReservedQuantity().compareTo(qty) >= 0) {
                    srcQuant.setReservedQuantity(srcQuant.getReservedQuantity().subtract(qty));
                } else {
                    srcQuant.setReservedQuantity(ZERO);
                }
                quantRepo.save(srcQuant);
            }

            // --- Destination : augmenter le stock (si emplacement interne) ---
            StockLocation destLoc = locationRepo.findById(move.getLocationDestId()).orElse(null);
            if (destLoc != null && "internal".equals(destLoc.getUsage())) {
                StockQuant destQuant = findOrCreateQuant(move.getProductId(), move.getLocationDestId(), picking.getCompanyId());

                // Mise à jour CMUP pour les réceptions (incoming)
                BigDecimal priceUnit = move.getPriceUnit() != null ? move.getPriceUnit() : product.getStandardPrice();
                if ("incoming".equals(picking.getPickingTypeCode()) || srcLoc == null || !"internal".equals(srcLoc.getUsage())) {
                    BigDecimal currentQty = destQuant.getQuantity();
                    BigDecimal currentValue = currentQty.multiply(product.getStandardPrice() != null ? product.getStandardPrice() : ZERO);
                    BigDecimal incomingValue = qty.multiply(priceUnit);
                    BigDecimal newQty = currentQty.add(qty);
                    if (newQty.compareTo(ZERO) > 0) {
                        BigDecimal newCmup = currentValue.add(incomingValue)
                                .divide(newQty, 4, RoundingMode.HALF_UP);
                        product.setStandardPrice(newCmup);
                        productRepo.save(product);
                    }
                }

                destQuant.setQuantity(destQuant.getQuantity().add(qty));
                quantRepo.save(destQuant);
            }

            // --- Couche de valorisation ---
            BigDecimal priceUnit = move.getPriceUnit() != null ? move.getPriceUnit()
                    : (product.getStandardPrice() != null ? product.getStandardPrice() : ZERO);
            ValuationLayer layer = ValuationLayer.builder()
                    .productId(move.getProductId())
                    .moveId(move.getId())
                    .quantity("outgoing".equals(picking.getPickingTypeCode()) ? qty.negate() : qty)
                    .unitCost(priceUnit)
                    .value(qty.multiply(priceUnit).setScale(2, RoundingMode.HALF_UP))
                    .locationId(move.getLocationDestId())
                    .description(picking.getName() + " - " + product.getName())
                    .companyId(picking.getCompanyId())
                    .build();
            valuationRepo.save(layer);

            move.setState("done");
        }

        // ---- Écriture comptable ----
        Long moveAccountId = createStockAccountingEntry(picking);
        picking.setAccountMoveId(moveAccountId);
        picking.setState("done");
        picking.setDateDone(LocalDateTime.now());

        return toPickingDTO(pickingRepo.save(picking), true);
    }

    public StockPickingDTO cancelPicking(Long id) {
        StockPicking picking = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        if ("done".equals(picking.getState())) throw new IllegalStateException("Impossible d'annuler un transfert validé");

        // Libérer les réservations
        for (StockMove move : picking.getMoves()) {
            BigDecimal reserved = move.getQtyDemanded();
            if (reserved != null && reserved.compareTo(ZERO) > 0) {
                quantRepo.findByProductIdAndLocationIdAndCompanyId(
                        move.getProductId(), move.getLocationId(), picking.getCompanyId())
                        .ifPresent(q -> {
                            q.setReservedQuantity(q.getReservedQuantity().subtract(reserved).max(ZERO));
                            quantRepo.save(q);
                        });
            }
            move.setState("cancelled");
        }
        picking.setState("cancelled");
        return toPickingDTO(pickingRepo.save(picking), true);
    }

    // ============================================================
    // STOCK QUANTS
    // ============================================================

    @Transactional(readOnly = true)
    public List<StockQuantDTO> getQuants(Long companyId, Long locationId, Long productId) {
        List<StockQuant> quants;
        if (locationId != null) {
            quants = quantRepo.findByLocationIdAndCompanyId(locationId, companyId);
        } else if (productId != null) {
            quants = quantRepo.findByProductIdAndCompanyId(productId, companyId);
        } else {
            quants = quantRepo.findAllWithStock(companyId);
        }
        return quants.stream().map(this::toQuantDTO).collect(Collectors.toList());
    }

    private StockQuantDTO toQuantDTO(StockQuant q) {
        Product product = productRepo.findById(q.getProductId()).orElse(null);
        StockLocation loc = locationRepo.findById(q.getLocationId()).orElse(null);
        BigDecimal price = product != null && product.getStandardPrice() != null ? product.getStandardPrice() : ZERO;
        BigDecimal available = q.getQuantity().subtract(q.getReservedQuantity()).max(ZERO);
        return StockQuantDTO.builder()
                .id(q.getId())
                .productId(q.getProductId())
                .productCode(product != null ? product.getDefaultCode() : null)
                .productName(product != null ? product.getName() : "?")
                .uomName(product != null ? product.getUomName() : null)
                .locationId(q.getLocationId())
                .locationName(loc != null ? loc.getName() : null)
                .locationCompleteName(loc != null ? buildCompleteName(loc) : null)
                .quantity(q.getQuantity())
                .reservedQuantity(q.getReservedQuantity())
                .availableQuantity(available)
                .standardPrice(price)
                .totalValue(q.getQuantity().multiply(price).setScale(2, RoundingMode.HALF_UP))
                .companyId(q.getCompanyId())
                .build();
    }

    // ============================================================
    // DASHBOARD
    // ============================================================

    @Transactional(readOnly = true)
    public StockDashboardDTO getDashboard(Long companyId) {
        long nbProducts = productRepo.findByCompanyIdAndActiveOrderByNameAsc(companyId, true).size();
        long nbWarehouses = warehouseRepo.findByCompanyIdOrderByNameAsc(companyId).size();
        BigDecimal totalValue = quantRepo.computeTotalStockValue(companyId);

        List<StockPicking> allPickings = pickingRepo.findByCompanyIdOrderByCreatedAtDesc(companyId);
        long nbRecDraft = allPickings.stream().filter(p -> "incoming".equals(p.getPickingTypeCode()) && "draft".equals(p.getState())).count();
        long nbRecDone = allPickings.stream().filter(p -> "incoming".equals(p.getPickingTypeCode()) && "done".equals(p.getState())).count();
        long nbLiv = allPickings.stream().filter(p -> "outgoing".equals(p.getPickingTypeCode())).count();
        long nbTrans = allPickings.stream().filter(p -> "internal".equals(p.getPickingTypeCode())).count();
        long nbTransDone = allPickings.stream().filter(p -> "internal".equals(p.getPickingTypeCode()) && "done".equals(p.getState())).count();

        return StockDashboardDTO.builder()
                .nbProducts(nbProducts).nbWarehouses(nbWarehouses)
                .totalStockValue(totalValue != null ? totalValue : ZERO)
                .nbReceptionsDraft(nbRecDraft).nbReceptionsDone(nbRecDone)
                .nbLivraisons(nbLiv).nbTransferts(nbTrans).nbTransfertsDone(nbTransDone)
                .build();
    }

    // ============================================================
    // AJUSTEMENTS DE STOCK
    // ============================================================

    @Transactional(readOnly = true)
    public List<StockAdjustmentDTO> getAdjustments(Long companyId) {
        return adjustmentRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream().map(this::toAdjustmentDTO).collect(Collectors.toList());
    }

    /**
     * Crée un ajustement de stock (inventaire physique).
     * Logique Odoo: diff positive → Dr Stock / Cr Perte inventaire
     *               diff négative → Dr Perte inventaire / Cr Stock
     */
    public StockAdjustmentDTO createAdjustment(StockAdjustmentRequest req) {
        Product product = productRepo.findById(req.getProductId())
                .orElseThrow(() -> new EntityNotFoundException("Article introuvable: " + req.getProductId()));
        StockLocation location = locationRepo.findById(req.getLocationId())
                .orElseThrow(() -> new EntityNotFoundException("Emplacement introuvable: " + req.getLocationId()));

        // Quantité actuelle dans le quant
        StockQuant quant = findOrCreateQuant(req.getProductId(), req.getLocationId(), req.getCompanyId());
        BigDecimal qtyBefore = quant.getQuantity();
        BigDecimal qtyAfter = req.getNewQty() != null ? req.getNewQty() : ZERO;
        BigDecimal diff = qtyAfter.subtract(qtyBefore);

        if (diff.compareTo(ZERO) == 0) {
            // Pas de différence, on retourne quand même un résultat
            return StockAdjustmentDTO.builder()
                    .productId(product.getId()).productCode(product.getDefaultCode())
                    .productName(product.getName()).uomName(product.getUomName())
                    .locationId(location.getId()).locationName(buildCompleteName(location))
                    .qtyBefore(qtyBefore).qtyAfter(qtyAfter).qtyDiff(ZERO)
                    .unitCost(product.getStandardPrice()).valueDiff(ZERO)
                    .notes("Aucun écart").companyId(req.getCompanyId())
                    .createdAt(LocalDateTime.now())
                    .build();
        }

        BigDecimal unitCost = product.getStandardPrice() != null ? product.getStandardPrice() : ZERO;
        BigDecimal valueDiff = diff.multiply(unitCost).setScale(2, RoundingMode.HALF_UP);

        // Mettre à jour le quant
        quant.setQuantity(qtyAfter);
        quantRepo.save(quant);

        // Créer une couche de valorisation
        ValuationLayer layer = ValuationLayer.builder()
                .productId(product.getId())
                .quantity(diff)
                .unitCost(unitCost)
                .value(valueDiff)
                .locationId(location.getId())
                .description("Ajustement inventaire: " + product.getName())
                .companyId(req.getCompanyId())
                .build();
        valuationRepo.save(layer);

        // Écriture comptable d'ajustement
        Long accountMoveId = createAdjustmentAccountingEntry(product, location, diff, valueDiff, req.getCompanyId(), req.getNotes());

        // Enregistrer l'ajustement
        StockAdjustment adj = StockAdjustment.builder()
                .productId(product.getId())
                .locationId(location.getId())
                .qtyBefore(qtyBefore)
                .qtyAfter(qtyAfter)
                .qtyDiff(diff)
                .unitCost(unitCost)
                .valueDiff(valueDiff)
                .notes(req.getNotes())
                .accountMoveId(accountMoveId)
                .companyId(req.getCompanyId())
                .build();

        return toAdjustmentDTO(adjustmentRepo.save(adj));
    }

    private Long createAdjustmentAccountingEntry(Product product, StockLocation location,
            BigDecimal diff, BigDecimal valueDiff, Long companyId, String notes) {
        try {
            Long journalId = resolveStockJournal(companyId);
            Company company = companyRepo.findById(companyId).orElse(null);
            if (journalId == null || company == null) return null;
            AccountJournal journal = journalRepo.findById(journalId).orElse(null);
            if (journal == null) return null;

            // Compte stock (311xxx)
            String stockCode = resolveStockAccountCode(product.getCategoryId(), companyId);
            if (product.getStockAccountCode() != null) stockCode = product.getStockAccountCode();
            AccountAccount stockAccount = accountRepo.findByCodeAndCompanyId(stockCode, companyId)
                    .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("311", companyId)
                            .stream().findFirst().orElse(null));

            // Compte perte/gain inventaire (6031 par défaut)
            AccountAccount inventoryLossAccount = accountRepo.findByCodeAndCompanyId("6031", companyId)
                    .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("603", companyId)
                            .stream().findFirst().orElse(null));

            if (stockAccount == null || inventoryLossAccount == null) return null;

            BigDecimal absValue = valueDiff.abs();
            boolean isIncrease = diff.compareTo(ZERO) > 0;
            String description = (notes != null && !notes.isBlank() ? notes : "Ajustement inventaire: " + product.getName());

            AccountMove move = AccountMove.builder()
                    .name("AJ/" + LocalDate.now().getYear() + "/" + System.currentTimeMillis() % 100000)
                    .date(LocalDate.now())
                    .ref(description)
                    .state("posted")
                    .journal(journal)
                    .company(company)
                    .build();

            List<AccountMoveLine> lines = new ArrayList<>();
            // Si augmentation: Dr Stock / Cr Perte inventaire
            // Si diminution:   Dr Perte inventaire / Cr Stock
            lines.add(AccountMoveLine.builder().move(move).account(stockAccount)
                    .name(description).date(LocalDate.now())
                    .debit(isIncrease ? absValue : ZERO)
                    .credit(isIncrease ? ZERO : absValue)
                    .journal(journal).company(company).build());
            lines.add(AccountMoveLine.builder().move(move).account(inventoryLossAccount)
                    .name(description).date(LocalDate.now())
                    .debit(isIncrease ? ZERO : absValue)
                    .credit(isIncrease ? absValue : ZERO)
                    .journal(journal).company(company).build());
            move.setLines(lines);
            return accountMoveRepo.save(move).getId();
        } catch (Exception e) {
            return null;
        }
    }

    private StockAdjustmentDTO toAdjustmentDTO(StockAdjustment a) {
        Product product = productRepo.findById(a.getProductId()).orElse(null);
        StockLocation loc = locationRepo.findById(a.getLocationId()).orElse(null);
        String moveName = a.getAccountMoveId() != null
                ? accountMoveRepo.findById(a.getAccountMoveId()).map(AccountMove::getName).orElse(null) : null;
        return StockAdjustmentDTO.builder()
                .id(a.getId())
                .productId(a.getProductId())
                .productCode(product != null ? product.getDefaultCode() : null)
                .productName(product != null ? product.getName() : "?")
                .uomName(product != null ? product.getUomName() : null)
                .locationId(a.getLocationId())
                .locationName(loc != null ? buildCompleteName(loc) : null)
                .qtyBefore(a.getQtyBefore()).qtyAfter(a.getQtyAfter()).qtyDiff(a.getQtyDiff())
                .unitCost(a.getUnitCost()).valueDiff(a.getValueDiff())
                .notes(a.getNotes())
                .accountMoveId(a.getAccountMoveId()).accountMoveName(moveName)
                .companyId(a.getCompanyId()).createdAt(a.getCreatedAt())
                .build();
    }

    // ============================================================
    // ANALYSE — RAPPORTS
    // ============================================================

    @Transactional(readOnly = true)
    public List<StockQuantDTO> getStockReport(Long companyId) {
        // Tous les quants avec qty > 0, enrichis avec valeur totale
        return quantRepo.findAllWithStock(companyId)
                .stream().map(this::toQuantDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<StockMoveDTO> getMovements(Long companyId, Long productId, int limit) {
        List<StockMove> moves;
        if (productId != null) {
            moves = moveRepo.findDoneByProduct(productId, companyId);
        } else {
            moves = moveRepo.findAllDoneByCompany(companyId, PageRequest.of(0, limit));
        }
        return moves.stream().map(m -> {
            StockPicking picking = m.getPicking();
            return toMoveDTO(m, picking);
        }).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ValuationLayerDTO> getValuation(Long companyId, Long productId) {
        List<ValuationLayer> layers;
        if (productId != null) {
            layers = valuationRepo.findByProductIdAndCompanyIdOrderByCreatedAtDesc(productId, companyId);
        } else {
            layers = valuationRepo.findRecentByCompany(companyId, PageRequest.of(0, 200));
        }
        return layers.stream().map(this::toValuationDTO).collect(Collectors.toList());
    }

    private ValuationLayerDTO toValuationDTO(ValuationLayer v) {
        Product product = productRepo.findById(v.getProductId()).orElse(null);
        StockLocation loc = v.getLocationId() != null ? locationRepo.findById(v.getLocationId()).orElse(null) : null;
        return ValuationLayerDTO.builder()
                .id(v.getId())
                .productId(v.getProductId())
                .productCode(product != null ? product.getDefaultCode() : null)
                .productName(product != null ? product.getName() : "?")
                .uomName(product != null ? product.getUomName() : null)
                .locationId(v.getLocationId())
                .locationName(loc != null ? buildCompleteName(loc) : null)
                .quantity(v.getQuantity())
                .unitCost(v.getUnitCost())
                .value(v.getValue())
                .description(v.getDescription())
                .companyId(v.getCompanyId())
                .createdAt(v.getCreatedAt())
                .build();
    }

    // ============================================================
    // AGENCES DISTANTES
    // ============================================================

    @Transactional(readOnly = true)
    public List<AgencyDTO> getAgencies(Long companyId) {
        return agencyRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().map(this::toAgencyDTO).collect(Collectors.toList());
    }

    public AgencyDTO createAgency(AgencyDTO dto) {
        Agency agency = Agency.builder()
                .name(dto.getName()).code(dto.getCode())
                .address(dto.getAddress()).contactPerson(dto.getContactPerson())
                .phone(dto.getPhone()).email(dto.getEmail())
                .companyId(dto.getCompanyId()).active(true)
                .build();
        return toAgencyDTO(agencyRepo.save(agency));
    }

    public AgencyDTO updateAgency(Long id, AgencyDTO dto) {
        Agency agency = agencyRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Agence introuvable: " + id));
        agency.setName(dto.getName());
        agency.setCode(dto.getCode());
        agency.setAddress(dto.getAddress());
        agency.setContactPerson(dto.getContactPerson());
        agency.setPhone(dto.getPhone());
        agency.setEmail(dto.getEmail());
        agency.setActive(dto.isActive());
        return toAgencyDTO(agencyRepo.save(agency));
    }

    private AgencyDTO toAgencyDTO(Agency a) {
        return AgencyDTO.builder()
                .id(a.getId()).name(a.getName()).code(a.getCode())
                .address(a.getAddress()).contactPerson(a.getContactPerson())
                .phone(a.getPhone()).email(a.getEmail())
                .companyId(a.getCompanyId()).active(a.isActive())
                .build();
    }

    // ============================================================
    // HELPERS PRIVÉS
    // ============================================================

    private StockQuant findOrCreateQuant(Long productId, Long locationId, Long companyId) {
        return quantRepo.findByProductIdAndLocationIdAndCompanyId(productId, locationId, companyId)
                .orElseGet(() -> quantRepo.save(StockQuant.builder()
                        .productId(productId).locationId(locationId)
                        .quantity(ZERO).reservedQuantity(ZERO)
                        .companyId(companyId).build()));
    }

    private String generatePickingName(StockPickingType pt, Long companyId) {
        String prefix = pt.getSequencePrefix() != null ? pt.getSequencePrefix() : pt.getCode().toUpperCase();
        Integer maxSeq = pickingRepo.findMaxSeq(companyId, prefix);
        int next = (maxSeq != null ? maxSeq : 0) + 1;
        return String.format("%s/%05d", prefix, next);
    }

    /**
     * Crée l'écriture comptable OHADA pour un picking validé.
     * - Réception  : Dr 31xxx (Stock) / Cr 609xxx (Variation stocks - entrée)
     * - Livraison  : Dr 60500 (COGS)  / Cr 31xxx (Stock)
     * - Transfert  : Dr 31xxx (dest)  / Cr 31xxx (src)
     */
    private Long createStockAccountingEntry(StockPicking picking) {
        Long journalId = resolveStockJournal(picking.getCompanyId());
        if (journalId == null) return null;

        Company company = companyRepo.findById(picking.getCompanyId()).orElse(null);
        if (company == null) return null;

        AccountJournal journal = journalRepo.findById(journalId).orElse(null);
        if (journal == null) return null;

        List<AccountMoveLine> lines = new ArrayList<>();
        BigDecimal totalValue = ZERO;

        for (StockMove move : picking.getMoves()) {
            BigDecimal qty = move.getQtyDone();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;

            Product product = productRepo.findById(move.getProductId()).orElse(null);
            if (product == null) continue;

            BigDecimal price = move.getPriceUnit() != null ? move.getPriceUnit()
                    : (product.getStandardPrice() != null ? product.getStandardPrice() : ZERO);
            BigDecimal value = qty.multiply(price).setScale(2, RoundingMode.HALF_UP);
            totalValue = totalValue.add(value);

            String stockCode = product.getStockAccountCode() != null ? product.getStockAccountCode() : "311000";
            String cogsCode = product.getCogsAccountCode() != null ? product.getCogsAccountCode() : "60500";

            AccountAccount stockAccount = findOrCreateAccount(stockCode, "Stock - " + product.getName(), "asset", picking.getCompanyId(), journal, company);

            if ("incoming".equals(picking.getPickingTypeCode())) {
                // Dr Stock / Cr Variation stocks entrée
                AccountAccount variationAccount = findOrCreateAccount("6031", "Variation stocks - entrées", "expense", picking.getCompanyId(), journal, company);
                lines.add(buildLine(null, stockAccount, product.getName(), LocalDate.now(), value, ZERO, journal, company));
                lines.add(buildLine(null, variationAccount, product.getName(), LocalDate.now(), ZERO, value, journal, company));

            } else if ("outgoing".equals(picking.getPickingTypeCode())) {
                // Dr COGS / Cr Stock
                AccountAccount cogsAccount = findOrCreateAccount(cogsCode, "Coût des ventes", "expense", picking.getCompanyId(), journal, company);
                lines.add(buildLine(null, cogsAccount, product.getName(), LocalDate.now(), value, ZERO, journal, company));
                lines.add(buildLine(null, stockAccount, product.getName(), LocalDate.now(), ZERO, value, journal, company));

            } else {
                // Transfert interne : Dr stockDest / Cr stockSrc
                StockLocation destLoc = locationRepo.findById(move.getLocationDestId()).orElse(null);
                String destCode = (destLoc != null && destLoc.getAccountCode() != null) ? destLoc.getAccountCode() : stockCode;
                AccountAccount stockDest = findOrCreateAccount(destCode, "Stock dest", "asset", picking.getCompanyId(), journal, company);
                lines.add(buildLine(null, stockDest, product.getName(), LocalDate.now(), value, ZERO, journal, company));
                lines.add(buildLine(null, stockAccount, product.getName(), LocalDate.now(), ZERO, value, journal, company));
            }
        }

        if (lines.isEmpty() || totalValue.compareTo(ZERO) == 0) return null;

        // Numéro de pièce
        int year = LocalDate.now().getYear();
        String prefix = "STK";
        Integer maxSeq = accountMoveRepo.findMaxSequenceByJournalAndYear(journalId, year);
        int nextSeq = (maxSeq != null ? maxSeq : 0) + 1;
        String moveName = String.format("%s-%d-%05d", prefix, year, nextSeq);

        AccountMove accountMove = AccountMove.builder()
                .name(moveName)
                .date(LocalDate.now())
                .ref(picking.getName())
                .state("posted")
                .journal(journal)
                .company(company)
                .build();

        for (AccountMoveLine line : lines) {
            line.setMove(accountMove);
        }
        accountMove.setLines(lines);

        AccountMove saved = accountMoveRepo.save(accountMove);
        return saved.getId();
    }

    private AccountMoveLine buildLine(Partner partner, AccountAccount account, String label,
                                       LocalDate date, BigDecimal debit, BigDecimal credit,
                                       AccountJournal journal, Company company) {
        return AccountMoveLine.builder()
                .account(account).partner(partner).name(label).date(date)
                .debit(debit).credit(credit)
                .journal(journal).company(company)
                .build();
    }

    private AccountAccount findOrCreateAccount(String code, String name, String type, Long companyId,
                                                AccountJournal journal, Company company) {
        return accountRepo.findByCodeAndCompanyId(code, companyId)
                .orElseGet(() -> {
                    AccountAccount acc = AccountAccount.builder()
                            .code(code).name(name).accountType(type)
                            .internalType("other").deprecated(false).reconcile(false)
                            .company(company).build();
                    return accountRepo.save(acc);
                });
    }

    private Long resolveStockJournal(Long companyId) {
        // 1. Chercher un journal avec code STK
        return journalRepo.findAll().stream()
                .filter(j -> j.getCompany() != null && j.getCompany().getId().equals(companyId))
                .filter(j -> "STK".equalsIgnoreCase(j.getCode()) || "general".equalsIgnoreCase(j.getType()))
                .map(AccountJournal::getId)
                .findFirst()
                .orElse(null);
    }

    private StockPickingDTO toPickingDTO(StockPicking p, boolean withMoves) {
        String ptName = pickingTypeRepo.findById(p.getPickingTypeId()).map(StockPickingType::getName).orElse(null);
        String srcName = p.getLocationId() != null
                ? locationRepo.findById(p.getLocationId()).map(l -> buildCompleteName(l)).orElse(null) : null;
        String destName = p.getLocationDestId() != null
                ? locationRepo.findById(p.getLocationDestId()).map(l -> buildCompleteName(l)).orElse(null) : null;

        String accountMoveName = p.getAccountMoveId() != null
                ? accountMoveRepo.findById(p.getAccountMoveId()).map(AccountMove::getName).orElse(null) : null;
        String agencyName = p.getAgencyId() != null
                ? agencyRepo.findById(p.getAgencyId()).map(Agency::getName).orElse(null) : null;

        List<StockMoveDTO> moveDTOs = null;
        BigDecimal totalValue = ZERO;
        if (withMoves) {
            moveDTOs = p.getMoves().stream().map(m -> toMoveDTO(m, p)).collect(Collectors.toList());
            for (StockMoveDTO md : moveDTOs) {
                if (md.getSubtotalValue() != null) totalValue = totalValue.add(md.getSubtotalValue());
            }
        }

        return StockPickingDTO.builder()
                .id(p.getId()).name(p.getName())
                .pickingTypeId(p.getPickingTypeId()).pickingTypeName(ptName)
                .pickingTypeCode(p.getPickingTypeCode())
                .locationId(p.getLocationId()).locationName(srcName)
                .locationDestId(p.getLocationDestId()).locationDestName(destName)
                .partnerId(p.getPartnerId()).partnerName(p.getPartnerName())
                .state(p.getState())
                .scheduledDate(p.getScheduledDate()).dateDone(p.getDateDone())
                .origin(p.getOrigin()).notes(p.getNotes())
                .accountMoveId(p.getAccountMoveId()).accountMoveName(accountMoveName)
                .agencyId(p.getAgencyId()).agencyName(agencyName)
                .companyId(p.getCompanyId()).moves(moveDTOs).totalValue(totalValue)
                .createdAt(p.getCreatedAt())
                .build();
    }

    private StockMoveDTO toMoveDTO(StockMove m, StockPicking picking) {
        String srcName = locationRepo.findById(m.getLocationId()).map(l -> buildCompleteName(l)).orElse(null);
        String destName = locationRepo.findById(m.getLocationDestId()).map(l -> buildCompleteName(l)).orElse(null);

        BigDecimal price = m.getPriceUnit() != null ? m.getPriceUnit() : ZERO;
        BigDecimal qty = m.getQtyDone() != null ? m.getQtyDone() : m.getQtyDemanded();
        BigDecimal subtotal = qty.multiply(price).setScale(2, RoundingMode.HALF_UP);

        Long cid = picking != null ? picking.getCompanyId() : m.getCompanyId();
        BigDecimal available = quantRepo.findByProductIdAndLocationIdAndCompanyId(
                m.getProductId(), m.getLocationId(), cid)
                .map(q -> q.getQuantity().subtract(q.getReservedQuantity()).max(ZERO))
                .orElse(ZERO);

        return StockMoveDTO.builder()
                .id(m.getId()).pickingId(picking != null ? picking.getId() : null)
                .productId(m.getProductId()).productCode(m.getProductCode())
                .productName(m.getProductName()).uomName(m.getUomName())
                .qtyDemanded(m.getQtyDemanded()).qtyDone(m.getQtyDone())
                .priceUnit(m.getPriceUnit()).subtotalValue(subtotal)
                .locationId(m.getLocationId()).locationName(srcName)
                .locationDestId(m.getLocationDestId()).locationDestName(destName)
                .state(m.getState()).companyId(m.getCompanyId())
                .availableQty(available)
                .build();
    }
}
