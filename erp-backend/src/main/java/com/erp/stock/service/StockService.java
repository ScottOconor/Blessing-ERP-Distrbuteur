package com.erp.stock.service;

import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.config.entity.RemoteAgency;
import com.erp.config.repository.RemoteAgencyRepository;
import com.erp.config.service.InterAgencyKeyService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;
import com.erp.stock.dto.*;
import com.erp.stock.entity.*;
import com.erp.stock.repository.*;
import com.erp.audit.service.AuditService;
import com.erp.auth.SecurityUtils;
import com.erp.common.service.TenantGuard;
import com.erp.accounting.service.FiscalLockGuard;
import com.erp.sync.service.SyncEventPublisher;
import com.erp.sync.entity.SyncEventType;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class StockService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final ProductCategoryRepository categoryRepo;
    private final UnitOfMeasureRepository uomRepo;
    private final ProductRepository productRepo;
    private final WarehouseRepository warehouseRepo;
    private final StockLocationRepository locationRepo;
    private final StockPickingTypeRepository pickingTypeRepo;
    private final StockPickingRepository pickingRepo;
    private final StockMoveRepository moveRepo;
    private final StockQuantRepository quantRepo;
    private final ValuationLayerRepository valuationRepo;
    private final ProductValuationService productValuationService;
    private final AgencyRepository agencyRepo;
    private final StockAdjustmentRepository adjustmentRepo;
    private final StockLossRepository stockLossRepo;

    // Accounting
    private final AccountMoveRepository accountMoveRepo;
    private final AccountMoveLineRepository accountMoveLineRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountAccountRepository accountRepo;
    private final CompanyRepository companyRepo;
    private final PartnerRepository partnerRepo;

    private final RemoteAgencyRepository remoteAgencyRepo;
    private final InterAgencyKeyService  interAgencyKeyService;
    private final RestTemplate           restTemplate;

    private final SyncEventPublisher syncEventPublisher;
    private final AuditService auditService;
    private final FiscalLockGuard fiscalLockGuard;
    private final TenantGuard tenantGuard;

    // ============================================================
    // MIGRATION AU DÉMARRAGE
    // ============================================================

    /**
     * Comble les dateDone null sur les pickings state=done au démarrage.
     * Les rapports de stock filtrent tous sur picking.dateDone — un null rend
     * les sorties ventes (et tout autre picking) totalement invisibles.
     */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void fixNullPickingDateDone() {
        int fixed = pickingRepo.fixNullDateDone();
        if (fixed > 0) {
            log.info("Migration stock : {} picking(s) sans dateDone corrigés (dateDone ← createdAt)", fixed);
        }
    }

    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void migrateStockLocationWarehouseId() {
        // Garantir que chaque emplacement stock principal d'entrepôt a son warehouseId renseigné.
        // Nécessaire pour les entrepôts créés avant l'ajout de ce champ.
        int fixed = 0;
        for (Warehouse wh : warehouseRepo.findAll()) {
            if (wh.getStockLocationId() == null) continue;
            var loc = locationRepo.findById(wh.getStockLocationId()).orElse(null);
            if (loc != null && loc.getWarehouseId() == null) {
                loc.setWarehouseId(wh.getId());
                locationRepo.save(loc);
                fixed++;
            }
        }
        if (fixed > 0) {
            log.info("Migration stock : {} emplacement(s) mis à jour avec leur warehouseId", fixed);
        }
    }

    /**
     * Corrige les réceptions d'achat historiques comptées deux fois dans la fiche de stock : le
     * mouvement "incoming" pointait directement vers le magasin principal au lieu du Dépôt Achat,
     * en plus du transfert interne (Dépôt Achat → magasin principal) qui déplaçait déjà la même
     * quantité vers la même destination. Le quant réel n'a jamais été affecté (déjà correct), seul
     * l'historique des mouvements gonflait le stock initial/final affiché dans les rapports.
     */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void fixDuplicateReceptionMoves() {
        int fixed = moveRepo.fixDuplicateReceptionDestinations();
        if (fixed > 0) {
            log.info("Migration stock : {} mouvement(s) de réception dupliqué(s) corrigé(s) (destination ← Dépôt Achat)", fixed);
        }
    }

    /**
     * Recrée le mouvement de stock manquant des ajustements historiques créés avant l'ajout de
     * {@link #createAdjustmentStockMove}. Ces ajustements ont mis à jour le quant réel à l'époque
     * mais n'ont laissé aucune trace dans l'historique des mouvements — la fiche de stock (qui se
     * base uniquement sur les mouvements) affiche donc un stock initial/final faux pour ces
     * produits, alors que la quantité réelle (articles, ajustements) est correcte. Idempotent :
     * ne recrée un mouvement que si aucun mouvement "done" correspondant (même produit, même
     * quantité, à quelques secondes de l'ajustement) n'existe déjà.
     */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void backfillMissingAdjustmentMoves() {
        int fixed = 0;
        for (StockAdjustment adj : adjustmentRepo.findAll()) {
            if (adj.getQtyDiff() == null || adj.getQtyDiff().compareTo(ZERO) == 0 || adj.getCreatedAt() == null) continue;

            BigDecimal absDiff = adj.getQtyDiff().abs();
            LocalDateTime from = adj.getCreatedAt().minusSeconds(60);
            LocalDateTime to = adj.getCreatedAt().plusSeconds(60);
            if (moveRepo.countMovesForAdjustment(adj.getProductId(), absDiff, from, to) > 0) continue;

            Product product = productRepo.findById(adj.getProductId()).orElse(null);
            if (product == null) continue;

            boolean isIncrease = adj.getQtyDiff().compareTo(ZERO) > 0;
            Long virtualLocId = resolveAdjustmentVirtualLocationId(isIncrease);
            if (virtualLocId == null) continue;

            String ptCode = isIncrease ? "incoming" : "outgoing";
            List<StockPickingType> pts = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(adj.getCompanyId(), ptCode);
            Long ptId = pts.isEmpty() ? null : pts.get(0).getId();

            String prefix = "STOCK-INIT";
            // Verrou pessimiste sur la société : sérialise ce générateur de numéro de bon jusqu'au
            // commit, pour qu'aucune transaction concurrente ne lise le même max avant écriture.
            companyRepo.findByIdForUpdate(adj.getCompanyId());
            Integer maxSeq = pickingRepo.findMaxSeq(adj.getCompanyId(), prefix);
            String pickingName = String.format("%s/%05d", prefix, (maxSeq != null ? maxSeq : 0) + 1);

            Long srcLocId  = isIncrease ? virtualLocId : adj.getLocationId();
            Long destLocId = isIncrease ? adj.getLocationId() : virtualLocId;
            String description = "Stock initial (backfill ajustement #" + adj.getId() + ")";

            StockPicking picking = StockPicking.builder()
                    .name(pickingName)
                    .pickingTypeId(ptId != null ? ptId : 1L)
                    .pickingTypeCode(ptCode)
                    .locationId(srcLocId)
                    .locationDestId(destLocId)
                    .state("done")
                    .scheduledDate(adj.getCreatedAt().toLocalDate())
                    .dateDone(adj.getCreatedAt())
                    .origin(description)
                    .notes(description)
                    .companyId(adj.getCompanyId())
                    .build();

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(absDiff)
                    .qtyDone(absDiff)
                    .priceUnit(adj.getUnitCost())
                    .locationId(srcLocId)
                    .locationDestId(destLocId)
                    .state("done")
                    .companyId(adj.getCompanyId())
                    .build();
            picking.getMoves().add(move);
            pickingRepo.save(picking);
            fixed++;
        }
        if (fixed > 0) {
            log.info("Migration stock : {} mouvement(s) manquant(s) pour ajustement(s) historique(s) recréé(s)", fixed);
        }
    }

    /**
     * Recale l'historique des mouvements (base de la Fiche de stock) sur le quant réel
     * (base d'Articles / Ajustements / Ventes) quand ils divergent. Cause historique : d'anciens
     * transferts Dépôt Achat → Magasin/Avaries plafonnaient silencieusement le quant à zéro en cas
     * de stock insuffisant tout en enregistrant la quantité demandée en entier dans le mouvement
     * (bug corrigé dans {@link #applyStockMovement}), ce qui fait dériver durablement la Fiche de
     * stock (recalculée à partir des mouvements) sous le quant réel. Le quant est considéré exact
     * (il n'est jamais modifié ici) : on insère un mouvement correctif via
     * {@link #createAdjustmentStockMove} pour que la Fiche de stock retombe sur la même quantité.
     * Idempotent : une fois l'écart résorbé, il n'est plus recréé au redémarrage suivant.
     */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void reconcileMovementLedgerWithQuants() {
        int fixed = 0;
        for (Company company : companyRepo.findAll()) {
            if (company.getStockLedgerReconciledAt() != null) continue;

            Long companyId = company.getId();
            Set<Long> stockLocIds = locationRepo.findInternalAndTransit(companyId).stream()
                    .map(StockLocation::getId).collect(Collectors.toSet());
            if (stockLocIds.isEmpty()) continue;

            Map<String, BigDecimal> ledger = new HashMap<>();
            for (StockMove m : moveRepo.findDoneOrInTransitByCompany(companyId, Pageable.unpaged())) {
                BigDecimal qty = m.getQtyDone() != null ? m.getQtyDone() : m.getQtyDemanded();
                if (qty == null) continue;
                if (m.getLocationDestId() != null && stockLocIds.contains(m.getLocationDestId())) {
                    ledger.merge(m.getProductId() + "|" + m.getLocationDestId(), qty, BigDecimal::add);
                }
                if (m.getLocationId() != null && stockLocIds.contains(m.getLocationId())) {
                    ledger.merge(m.getProductId() + "|" + m.getLocationId(), qty.negate(), BigDecimal::add);
                }
            }

            for (StockQuant q : quantRepo.findAllByCompanyId(companyId)) {
                if (!stockLocIds.contains(q.getLocationId())) continue;
                BigDecimal ledgerQty = ledger.getOrDefault(q.getProductId() + "|" + q.getLocationId(), ZERO);
                BigDecimal diff = q.getQuantity().subtract(ledgerQty);
                if (diff.abs().compareTo(new BigDecimal("0.001")) <= 0) continue;

                Product product = productRepo.findById(q.getProductId()).orElse(null);
                StockLocation location = locationRepo.findById(q.getLocationId()).orElse(null);
                if (product == null || location == null) continue;

                BigDecimal unitCost = getWarehouseCmup(product.getId(), location.getWarehouseId(), product);
                createAdjustmentStockMove(product, location, diff, unitCost, companyId,
                        "Correction d'écart fiche de stock (mouvement historique manquant)", LocalDate.now());
                fixed++;
            }

            company.setStockLedgerReconciledAt(LocalDateTime.now());
            companyRepo.save(company);
        }
        if (fixed > 0) {
            log.info("Migration stock : {} écart(s) entre quant réel et historique des mouvements corrigé(s) (fiche de stock recalée)", fixed);
        }
    }

    // ============================================================
    // PRODUCT CATEGORIES
    // ============================================================

    @Transactional(readOnly = true)
    public List<ProductCategoryDTO> getCategories(Long companyId) {
        return categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().map(this::toCategoryDTO).collect(Collectors.toList());
    }

    public ProductCategoryDTO createCategory(ProductCategoryDTO dto) {
        Long companyId = SecurityUtils.currentCompanyId();
        ProductCategory c = ProductCategory.builder()
                .name(dto.getName())
                .code(dto.getCode())
                .stockAccountCode(dto.getStockAccountCode() != null ? dto.getStockAccountCode() : "311000")
                .stockInAccountCode(dto.getStockInAccountCode() != null ? dto.getStockInAccountCode() : "603100")
                .parentId(dto.getParentId())
                .companyId(companyId)
                .build();
        return toCategoryDTO(categoryRepo.save(c));
    }

    public ProductCategoryDTO updateCategory(Long id, ProductCategoryDTO dto) {
        ProductCategory c = categoryRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Category not found: " + id));
        tenantGuard.check(c.getCompanyId());
        c.setName(dto.getName());
        c.setCode(dto.getCode());
        if (dto.getStockAccountCode() != null) c.setStockAccountCode(dto.getStockAccountCode());
        if (dto.getStockInAccountCode() != null) c.setStockInAccountCode(dto.getStockInAccountCode());
        c.setParentId(dto.getParentId());
        return toCategoryDTO(categoryRepo.save(c));
    }

    public void deleteCategory(Long id) {
        categoryRepo.deleteById(id);
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
                .parentId(c.getParentId()).parentName(parentName)
                .companyId(c.getCompanyId())
                .build();
    }

    // ============================================================
    // UNITÉS DE MESURE (UDM)
    // ============================================================

    @Transactional(readOnly = true)
    public List<UnitOfMeasureDTO> getUnitsOfMeasure(Long companyId) {
        return uomRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().map(this::toUomDTO).collect(Collectors.toList());
    }

    public UnitOfMeasureDTO createUnitOfMeasure(UnitOfMeasureDTO dto) {
        Long companyId = SecurityUtils.currentCompanyId();
        UnitOfMeasure u = UnitOfMeasure.builder()
                .name(dto.getName())
                .code(dto.getCode())
                .companyId(companyId)
                .build();
        return toUomDTO(uomRepo.save(u));
    }

    public UnitOfMeasureDTO updateUnitOfMeasure(Long id, UnitOfMeasureDTO dto) {
        UnitOfMeasure u = uomRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Unit of measure not found: " + id));
        tenantGuard.check(u.getCompanyId());
        u.setName(dto.getName());
        u.setCode(dto.getCode());
        return toUomDTO(uomRepo.save(u));
    }

    public void deleteUnitOfMeasure(Long id) {
        uomRepo.deleteById(id);
    }

    private UnitOfMeasureDTO toUomDTO(UnitOfMeasure u) {
        return UnitOfMeasureDTO.builder()
                .id(u.getId()).name(u.getName()).code(u.getCode())
                .companyId(u.getCompanyId())
                .build();
    }

    // ============================================================
    // PRODUCTS
    // ============================================================

    @Transactional(readOnly = true)
    public List<ProductDTO> getProducts(Long companyId) {
        return getProducts(companyId, null);
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> getProducts(Long companyId, Long warehouseId) {
        List<Product> products = new ArrayList<>(productRepo.findByCompanyIdOrderByNameAsc(companyId));
        Map<Long, BigDecimal> qtyMap      = new HashMap<>();
        Map<Long, BigDecimal> reservedMap = new HashMap<>();

        if (warehouseId != null) {
            Long locationId = warehouseRepo.findById(warehouseId)
                    .map(Warehouse::getStockLocationId).orElse(null);
            if (locationId != null) {
                quantRepo.findByLocationIdAndCompanyId(locationId, companyId).forEach(q -> {
                    qtyMap.merge(q.getProductId(), q.getQuantity(), BigDecimal::add);
                    reservedMap.merge(q.getProductId(), q.getReservedQuantity(), BigDecimal::add);
                });
            }
        } else {
            // Uniquement les emplacements de stock réels (internal/transit) — un quant qui existerait
            // par accident sur un emplacement virtuel (fournisseur, client) ne doit pas gonfler le
            // stock disponible affiché sur la fiche article.
            Set<Long> stockLocIds = locationRepo.findInternalAndTransit(companyId).stream()
                    .map(StockLocation::getId).collect(Collectors.toSet());
            quantRepo.findAllWithStock(companyId).stream()
                    .filter(q -> stockLocIds.contains(q.getLocationId()))
                    .forEach(q -> {
                qtyMap.merge(q.getProductId(), q.getQuantity(), BigDecimal::add);
                reservedMap.merge(q.getProductId(), q.getReservedQuantity(), BigDecimal::add);
            });
            Set<Long> ownProductIds = products.stream().map(Product::getId).collect(Collectors.toSet());
            for (Long productId : new HashSet<>(qtyMap.keySet())) {
                if (!ownProductIds.contains(productId)) {
                    productRepo.findById(productId).ifPresent(p -> {
                        if (p.isActive()) products.add(p);
                    });
                }
            }
        }

        Map<Long, String> catNames = categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                .collect(Collectors.toMap(ProductCategory::getId, ProductCategory::getName, (a, b) -> a));

        return products.stream()
                .map(p -> toProductDTO(p, qtyMap.getOrDefault(p.getId(), ZERO), reservedMap.getOrDefault(p.getId(), ZERO), catNames))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductDTO getProduct(Long id) {
        Product p = productRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Product not found: " + id));
        tenantGuard.check(p.getCompanyId());
        BigDecimal qty = quantRepo.findByProductIdAndCompanyId(p.getId(), p.getCompanyId())
                .stream().map(StockQuant::getQuantity).reduce(ZERO, BigDecimal::add);
        return toProductDTO(p, qty);
    }

    public ProductDTO createProduct(ProductDTO dto) {
        Long companyId = SecurityUtils.currentCompanyId();
        String stockCode = dto.getStockAccountCode();
        if (stockCode == null) stockCode = resolveStockAccountCode(dto.getCategoryId(), companyId);

        Product p = Product.builder()
                .defaultCode(dto.getDefaultCode())
                .name(dto.getName())
                .categoryId(dto.getCategoryId())
                .unitOfMeasureId(dto.getUnitOfMeasureId())
                .uomName(resolveUomName(dto.getUnitOfMeasureId(), dto.getUomName()))
                .standardPrice(dto.getStandardPrice() != null ? dto.getStandardPrice() : ZERO)
                .salePrice(dto.getSalePrice() != null ? dto.getSalePrice() : ZERO)
                .type(dto.getType() != null ? dto.getType() : "product")
                .stockAccountCode(stockCode)
                .description(dto.getDescription())
                .active(true)
                .exemptTva(dto.isExemptTva())
                .exemptTvaAchat(dto.isExemptTvaAchat())
                .companyId(companyId)
                .build();
        Product saved = productRepo.save(p);

        // Créer un quant dans le magasin principal avec qty=0 pour que le produit apparaisse dans les inventaires
        if ("product".equals(saved.getType()) || "consu".equals(saved.getType())) {
            List<Warehouse> whs = warehouseRepo.findByCompanyIdAndActiveTrue(companyId);
            Warehouse mainWh = findMainWarehouse(whs);
            if (mainWh != null && mainWh.getStockLocationId() != null) {
                boolean exists = quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(
                        saved.getId(), mainWh.getStockLocationId(), companyId).isPresent();
                if (!exists) {
                    quantRepo.save(StockQuant.builder()
                            .productId(saved.getId())
                            .locationId(mainWh.getStockLocationId())
                            .quantity(ZERO).reservedQuantity(ZERO)
                            .companyId(companyId).build());
                }
            }
        }
        return toProductDTO(saved, ZERO);
    }

    public ProductDTO updateProduct(Long id, ProductDTO dto) {
        Product p = productRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Product not found: " + id));
        tenantGuard.check(p.getCompanyId());
        if (dto.getDefaultCode() != null) p.setDefaultCode(dto.getDefaultCode());
        p.setName(dto.getName());
        if (dto.getCategoryId() != null) p.setCategoryId(dto.getCategoryId());
        if (dto.getUnitOfMeasureId() != null) {
            p.setUnitOfMeasureId(dto.getUnitOfMeasureId());
            p.setUomName(resolveUomName(dto.getUnitOfMeasureId(), dto.getUomName()));
        } else if (dto.getUomName() != null) {
            p.setUomName(dto.getUomName());
        }
        if (dto.getStandardPrice() != null) p.setStandardPrice(dto.getStandardPrice());
        if (dto.getSalePrice() != null) p.setSalePrice(dto.getSalePrice());
        if (dto.getType() != null) p.setType(dto.getType());
        if (dto.getStockAccountCode() != null) p.setStockAccountCode(dto.getStockAccountCode());
        if (dto.getDescription() != null) p.setDescription(dto.getDescription());
        p.setActive(dto.isActive());
        p.setExemptTva(dto.isExemptTva());
        p.setExemptTvaAchat(dto.isExemptTvaAchat());
        BigDecimal qty = quantRepo.findByProductIdAndCompanyId(p.getId(), p.getCompanyId())
                .stream().map(StockQuant::getQuantity).reduce(ZERO, BigDecimal::add);
        return toProductDTO(productRepo.save(p), qty);
    }

    public void deleteProduct(Long id) {
        Product p = productRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found: " + id));
        tenantGuard.check(p.getCompanyId());
        p.setActive(false);
        productRepo.save(p);
    }

    /**
     * Marque tous les produits des catégories contenant "EMBALLAG" comme exempts de TVA.
     * Idempotent : peut être appelé plusieurs fois sans effet de bord.
     */
    public int applyEmballagesTvaExempt(Long companyId) {
        List<ProductCategory> cats = categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream()
                .filter(c -> c.getName() != null && c.getName().toLowerCase().contains("emballag"))
                .collect(Collectors.toList());
        if (cats.isEmpty()) return 0;
        Set<Long> catIds = cats.stream().map(ProductCategory::getId).collect(Collectors.toSet());

        List<Product> products = productRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream()
                .filter(p -> p.getCategoryId() != null && catIds.contains(p.getCategoryId()))
                .filter(p -> !Boolean.TRUE.equals(p.getExemptTva()))
                .collect(Collectors.toList());

        for (Product p : products) {
            p.setExemptTva(true);
        }
        if (!products.isEmpty()) productRepo.saveAll(products);
        return products.size();
    }

    private ProductDTO toProductDTO(Product p, BigDecimal qtyOnHand) {
        return toProductDTO(p, qtyOnHand, ZERO);
    }

    private ProductDTO toProductDTO(Product p, BigDecimal qtyOnHand, BigDecimal qtyReserved) {
        String catName = p.getCategoryId() != null
                ? categoryRepo.findById(p.getCategoryId()).map(ProductCategory::getName).orElse(null) : null;
        return buildProductDTO(p, qtyOnHand, qtyReserved, catName);
    }

    /** Variante liste : le nom de catégorie vient d'une Map préchargée (évite un findById par produit). */
    private ProductDTO toProductDTO(Product p, BigDecimal qtyOnHand, BigDecimal qtyReserved, Map<Long, String> catNames) {
        String catName = p.getCategoryId() != null ? catNames.get(p.getCategoryId()) : null;
        return buildProductDTO(p, qtyOnHand, qtyReserved, catName);
    }

    private ProductDTO buildProductDTO(Product p, BigDecimal qtyOnHand, BigDecimal qtyReserved, String catName) {
        BigDecimal reserved  = qtyReserved != null ? qtyReserved : ZERO;
        BigDecimal available = qtyOnHand.subtract(reserved).max(ZERO);
        return ProductDTO.builder()
                .id(p.getId()).defaultCode(p.getDefaultCode()).name(p.getName())
                .categoryId(p.getCategoryId()).categoryName(catName)
                .uomName(p.getUomName()).unitOfMeasureId(p.getUnitOfMeasureId())
                .standardPrice(p.getStandardPrice())
                .salePrice(p.getSalePrice()).type(p.getType())
                .stockAccountCode(p.getStockAccountCode())
                .description(p.getDescription()).active(p.isActive())
                .exemptTva(Boolean.TRUE.equals(p.getExemptTva()))
                .exemptTvaAchat(Boolean.TRUE.equals(p.getExemptTvaAchat()))
                .companyId(p.getCompanyId()).qtyOnHand(qtyOnHand)
                .qtyReserved(reserved).qtyAvailable(available)
                .createdAt(p.getCreatedAt())
                .build();
    }

    /**
     * Quand un article est lié à une UDM gérée (unitOfMeasureId), le nom de l'UDM fait foi pour
     * uomName (chaîne dénormalisée lue partout ailleurs : mouvements, ventes, achats, rapports...).
     * Sans unitOfMeasureId, on garde uomName tel quel (texte libre, compat descendante).
     */
    private String resolveUomName(Long unitOfMeasureId, String fallbackUomName) {
        if (unitOfMeasureId != null) {
            return uomRepo.findById(unitOfMeasureId).map(UnitOfMeasure::getName).orElse(fallbackUomName);
        }
        return fallbackUomName;
    }

    private String resolveStockAccountCode(Long categoryId, Long companyId) {
        if (categoryId != null) {
            return categoryRepo.findById(categoryId)
                    .map(c -> c.getStockAccountCode() != null ? c.getStockAccountCode() : "311000")
                    .orElse("311000");
        }
        return "311000";
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
        tenantGuard.check(w.getCompanyId());
        return toWarehouseDTO(w, true);
    }

    public WarehouseDTO createWarehouse(WarehouseDTO dto) {
        Long companyId = SecurityUtils.currentCompanyId();
        if (warehouseRepo.existsByCodeAndCompanyId(dto.getCode().toUpperCase(), companyId)) {
            throw new IllegalStateException("Un entrepôt avec le code " + dto.getCode() + " existe déjà");
        }
        String code = dto.getCode().toUpperCase();

        // 1. Emplacements système (fournisseurs / clients)
        StockLocation supplierLoc = locationRepo.save(StockLocation.builder()
                .name("Fournisseurs").usage("supplier").companyId(null).active(true).build());
        StockLocation customerLoc = locationRepo.save(StockLocation.builder()
                .name("Clients").usage("customer").companyId(null).active(true).build());

        // 2. Un seul emplacement stock pour cet entrepôt
        StockLocation stockLoc = locationRepo.save(StockLocation.builder()
                .name(code + "/Stock").usage("internal")
                .companyId(companyId).active(true)
                .build());

        // 3. Créer l'entrepôt
        Warehouse wh = Warehouse.builder()
                .name(dto.getName()).code(code)
                .stockLocationId(stockLoc.getId())
                .stockJournalId(dto.getStockJournalId())
                .salesJournalId(dto.getSalesJournalId())
                .cashJournalId(dto.getCashJournalId())
                .depotAchatWarehouseId(dto.getDepotAchatWarehouseId())
                .avarWarehouseId(dto.getAvarWarehouseId())
                .responsableName(dto.getResponsableName())
                .companyId(companyId).active(true)
                .build();
        wh = warehouseRepo.save(wh);
        stockLoc.setWarehouseId(wh.getId());
        locationRepo.save(stockLoc);

        // 4. Créer les types d'opérations
        // incoming → destination = stock du Dépôt Achat si configuré, sinon stock principal
        Long incomingDestId = stockLoc.getId();
        if (wh.getDepotAchatWarehouseId() != null) {
            incomingDestId = warehouseRepo.findById(wh.getDepotAchatWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(stockLoc.getId());
        }

        pickingTypeRepo.save(StockPickingType.builder()
                .name("Réceptions").code("incoming").warehouseId(wh.getId())
                .defaultLocationSrcId(supplierLoc.getId())
                .defaultLocationDestId(incomingDestId)
                .sequencePrefix(code + "/IN")
                .companyId(companyId).build());

        pickingTypeRepo.save(StockPickingType.builder()
                .name("Sorties").code("outgoing").warehouseId(wh.getId())
                .defaultLocationSrcId(stockLoc.getId())
                .defaultLocationDestId(customerLoc.getId())
                .sequencePrefix(code + "/OUT")
                .companyId(companyId).build());

        pickingTypeRepo.save(StockPickingType.builder()
                .name("Retours").code("incoming").warehouseId(wh.getId())
                .defaultLocationSrcId(customerLoc.getId())
                .defaultLocationDestId(stockLoc.getId())
                .sequencePrefix(code + "/RET")
                .companyId(companyId).build());

        pickingTypeRepo.save(StockPickingType.builder()
                .name("Transferts internes").code("internal").warehouseId(wh.getId())
                .defaultLocationSrcId(stockLoc.getId())
                .defaultLocationDestId(stockLoc.getId())
                .sequencePrefix(code + "/INT")
                .companyId(companyId).build());

        return toWarehouseDTO(wh, true);
    }

    /** Ajoute les types d'opérations manquants (Retours) aux entrepôts existants. */
    public int migrateWarehousePickingTypes() {
        List<Warehouse> warehouses = warehouseRepo.findAll();
        int created = 0;
        for (Warehouse wh : warehouses) {
            if (wh.getCompanyId() == null || wh.getStockLocationId() == null) continue;
            List<StockPickingType> existing = pickingTypeRepo.findByWarehouseIdOrderByNameAsc(wh.getId());

            Long customerLocId = existing.stream()
                    .filter(pt -> "outgoing".equals(pt.getCode()))
                    .map(StockPickingType::getDefaultLocationDestId)
                    .filter(id -> id != null)
                    .findFirst().orElse(null);
            if (customerLocId == null) continue;

            String code = wh.getCode() != null ? wh.getCode() : "WH";
            boolean hasRetours = existing.stream()
                    .anyMatch(pt -> "Retours".equals(pt.getName()) || (pt.getSequencePrefix() != null && pt.getSequencePrefix().endsWith("/RET")));

            if (!hasRetours) {
                pickingTypeRepo.save(StockPickingType.builder()
                        .name("Retours").code("incoming").warehouseId(wh.getId())
                        .defaultLocationSrcId(customerLocId)
                        .defaultLocationDestId(wh.getStockLocationId())
                        .sequencePrefix(code + "/RET")
                        .companyId(wh.getCompanyId()).build());
                created++;
            }
        }
        return created;
    }

    public WarehouseDTO updateWarehouse(Long id, WarehouseDTO dto) {
        Warehouse wh = warehouseRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Warehouse not found: " + id));
        tenantGuard.check(wh.getCompanyId());
        wh.setName(dto.getName());
        if (dto.getStockJournalId() != null) wh.setStockJournalId(dto.getStockJournalId());
        wh.setSalesJournalId(dto.getSalesJournalId());
        wh.setCashJournalId(dto.getCashJournalId());
        wh.setDepotAchatWarehouseId(dto.getDepotAchatWarehouseId());
        wh.setAvarWarehouseId(dto.getAvarWarehouseId());
        wh.setResponsableName(dto.getResponsableName());
        wh.setActive(dto.isActive());

        // Mettre à jour le picking type "incoming" si le Dépôt Achat a changé
        if (dto.getDepotAchatWarehouseId() != null) {
            Long daStockLocId = warehouseRepo.findById(dto.getDepotAchatWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(null);
            if (daStockLocId != null) {
                pickingTypeRepo.findByWarehouseIdOrderByNameAsc(wh.getId()).stream()
                        .filter(pt -> "incoming".equals(pt.getCode()))
                        .forEach(pt -> {
                            pt.setDefaultLocationDestId(daStockLocId);
                            pickingTypeRepo.save(pt);
                        });
            }
        }

        return toWarehouseDTO(warehouseRepo.save(wh), false);
    }

    @Transactional
    public WarehouseDTO setDefaultWarehouse(Long id) {
        Warehouse wh = warehouseRepo.findById(id)
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Warehouse not found: " + id));
        warehouseRepo.clearDefaultForCompany(wh.getCompanyId());
        wh.setIsDefault(true);
        return toWarehouseDTO(warehouseRepo.save(wh), false);
    }

    public void deleteWarehouse(Long id) {
        Warehouse wh = warehouseRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Warehouse not found: " + id));
        tenantGuard.check(wh.getCompanyId());
        wh.setActive(false);
        warehouseRepo.save(wh);
    }

    // ============================================================
    // RÉCEPTIONS — Bordereau (Dépôt Achat → Magasin Principal)
    // ============================================================

    /**
     * Retourne les pickings incoming en attente (état confirmed) pour une société.
     * Ce sont les entrées Dépôt Achat créées lors de la validation des factures fournisseurs.
     */
    @Transactional(readOnly = true)
    public List<StockPickingDTO> getPendingReceptions(Long companyId) {
        return pickingRepo.findByCompanyIdAndPickingTypeCodeAndState(companyId, "incoming", "confirmed")
                .stream().map(p -> toPickingDTO(p, false)).collect(Collectors.toList());
    }

    /** Entrepôt principal associé à un picking, via son picking type (fiable) ou à défaut le
     *  premier entrepôt actif de la société — factorisé pour rester cohérent entre validateBordereau
     *  (qui l'utilise pour créer les transferts) et getBordereau (qui doit retrouver les mêmes
     *  transferts après coup). */
    private Warehouse resolveMainWarehouse(StockPicking picking) {
        Warehouse mainWarehouse = null;
        if (picking.getPickingTypeId() != null) {
            mainWarehouse = pickingTypeRepo.findById(picking.getPickingTypeId())
                    .filter(pt -> pt.getWarehouseId() != null)
                    .flatMap(pt -> warehouseRepo.findById(pt.getWarehouseId()))
                    .orElse(null);
        }
        if (mainWarehouse == null) {
            List<Warehouse> allWarehouses = warehouseRepo.findByCompanyIdAndActiveTrue(picking.getCompanyId());
            mainWarehouse = findMainWarehouse(allWarehouses);
            if (mainWarehouse == null && !allWarehouses.isEmpty()) mainWarehouse = allWarehouses.get(0);
        }
        return mainWarehouse;
    }

    /** [mainLocationId, avarLocationId] pour un picking — voir {@link #resolveMainWarehouse}. */
    private Long[] resolveMainAndAvarLocationIds(StockPicking picking) {
        Warehouse mainWarehouse = resolveMainWarehouse(picking);
        Long mainLocationId = mainWarehouse != null ? mainWarehouse.getStockLocationId() : picking.getLocationDestId();
        Long avarLocationId = mainWarehouse != null && mainWarehouse.getAvarWarehouseId() != null
                ? warehouseRepo.findById(mainWarehouse.getAvarWarehouseId())
                        .map(Warehouse::getStockLocationId).orElse(null)
                : null;
        return new Long[]{ mainLocationId, avarLocationId };
    }

    /**
     * Construit le bordereau de réception à partir d'un picking incoming.
     */
    @Transactional(readOnly = true)
    public ReceptionBordereauDTO getBordereau(Long pickingId) {
        StockPicking picking = pickingRepo.findById(pickingId)
                .orElseThrow(() -> new EntityNotFoundException("Picking introuvable: " + pickingId));

        // Une fois validé via un Dépôt Achat intermédiaire, les moves du picking d'origine
        // enregistrent la quantité TOTALE reçue du fournisseur (qtyDone = qteCommandee, y compris
        // la part qui repart ensuite en avaries — cf validateBordereau, "le picking initial
        // enregistre TOUTE la quantité reçue vers le Dépôt Achat"). La vraie répartition
        // magasin/avaries n'existe que sur les deux transferts internes générés à la validation.
        // Sans ceci, le bordereau affiché/exporté après validation montre "tout reçu au magasin"
        // au lieu du split réel saisi par l'utilisateur.
        Map<Long, BigDecimal> qteMagasinParProduit = new HashMap<>();
        Map<Long, BigDecimal> qteAvarieParProduit = new HashMap<>();
        boolean hasSplit = false;
        if ("done".equals(picking.getState()) && picking.getName() != null) {
            Long[] locs = resolveMainAndAvarLocationIds(picking);
            Long mainLocationId = locs[0], avarLocationId = locs[1];
            List<StockPicking> transfers = pickingRepo
                    .findByCompanyIdAndOrigin(picking.getCompanyId(), picking.getName()).stream()
                    .filter(p -> "internal".equals(p.getPickingTypeCode()))
                    .collect(Collectors.toList());
            for (StockPicking t : transfers) {
                Map<Long, BigDecimal> target;
                if (mainLocationId != null && mainLocationId.equals(t.getLocationDestId())) {
                    target = qteMagasinParProduit;
                } else if (avarLocationId != null && avarLocationId.equals(t.getLocationDestId())) {
                    target = qteAvarieParProduit;
                } else {
                    continue;
                }
                hasSplit = true;
                for (StockMove m : t.getMoves()) {
                    if (m.getProductId() == null) continue;
                    BigDecimal qty = m.getQtyDone() != null ? m.getQtyDone() : ZERO;
                    target.merge(m.getProductId(), qty, BigDecimal::add);
                }
            }
        }

        boolean finalHasSplit = hasSplit;
        List<ReceptionBordereauDTO.LigneBordereau> lignes = picking.getMoves().stream()
                .map(m -> {
                    BigDecimal qteCommandee = m.getQtyDemanded() != null ? m.getQtyDemanded() : ZERO;
                    BigDecimal qteRecue = finalHasSplit
                            ? qteMagasinParProduit.getOrDefault(m.getProductId(), ZERO)
                            : (m.getQtyDone() != null ? m.getQtyDone() : ZERO);
                    BigDecimal reste = finalHasSplit
                            ? qteAvarieParProduit.getOrDefault(m.getProductId(), ZERO)
                            : qteCommandee.subtract(qteRecue).max(ZERO);
                    return ReceptionBordereauDTO.LigneBordereau.builder()
                            .moveId(m.getId())
                            .productCode(m.getProductCode())
                            .productName(m.getProductName())
                            .prixUnitaire(m.getPriceUnit())
                            .qteCommandee(qteCommandee)
                            .qteRecue(qteRecue)
                            .reste(reste)
                            .build();
                })
                .collect(Collectors.toList());

        // Résoudre le nom de l'entrepôt destinataire
        String destWarehouseName = null;
        if (picking.getLocationDestId() != null) {
            StockLocation destLoc = locationRepo.findById(picking.getLocationDestId()).orElse(null);
            if (destLoc != null && destLoc.getWarehouseId() != null) {
                destWarehouseName = warehouseRepo.findById(destLoc.getWarehouseId())
                        .map(Warehouse::getName).orElse(null);
            }
        }
        // Opérateur = celui qui a créé le picking (ou validé)
        String operatorName = picking.getUpdatedBy() != null ? picking.getUpdatedBy() : picking.getCreatedBy();

        return ReceptionBordereauDTO.builder()
                .pickingId(picking.getId())
                .pickingName(picking.getName())
                .invoiceRef(picking.getOrigin())
                .supplierName(picking.getPartnerName())
                .invoiceDate(picking.getScheduledDate())
                .companyId(picking.getCompanyId())
                .warehouseName(destWarehouseName)
                .operatorName(operatorName)
                .state(picking.getState())
                .dateDone(picking.getDateDone())
                .lignes(lignes)
                .build();
    }

    /**
     * Valide un bordereau de réception via des transferts inter-dépôts :
     *   - Dépôt Achat → Magasin principal : quantités reçues
     *   - Dépôt Achat → Avaries : reliquats (quantités non reçues)
     *
     * Les deux transferts sont créés comme des StockPickings internes et immédiatement validés.
     */
    public ReceptionBordereauDTO validateBordereau(Long pickingId,
                                                    List<ReceptionBordereauDTO.LigneBordereau> lignesRecues) {
        StockPicking picking = pickingRepo.findById(pickingId)
                .orElseThrow(() -> new EntityNotFoundException("Picking introuvable: " + pickingId));

        if ("done".equals(picking.getState())) {
            throw new IllegalStateException("Ce bordereau est déjà validé");
        }

        Long companyId = picking.getCompanyId();
        fiscalLockGuard.assertPeriodOpen(companyId,
                picking.getScheduledDate() != null ? picking.getScheduledDate() : LocalDate.now());

        // Trouver l'entrepôt principal via le picking type (fiable, pas de reverse-lookup fragile)
        Warehouse mainWarehouse = resolveMainWarehouse(picking);

        Long mainLocationId = mainWarehouse != null ? mainWarehouse.getStockLocationId() : picking.getLocationDestId();
        // Dépôt Achat = entrepôt intermédiaire configuré sur le magasin principal
        Long depotAchatLocationId;
        if (mainWarehouse != null && mainWarehouse.getDepotAchatWarehouseId() != null) {
            depotAchatLocationId = warehouseRepo.findById(mainWarehouse.getDepotAchatWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(mainLocationId);
        } else {
            depotAchatLocationId = mainLocationId; // pas de dépôt achat → direct
        }
        Long avarLocationId = mainWarehouse != null && mainWarehouse.getAvarWarehouseId() != null
                ? warehouseRepo.findById(mainWarehouse.getAvarWarehouseId())
                        .map(Warehouse::getStockLocationId).orElse(null)
                : null;

        // Mapper les quantités reçues par moveId
        Map<Long, BigDecimal> qtesRecuesMap = new HashMap<>();
        if (lignesRecues != null) {
            for (ReceptionBordereauDTO.LigneBordereau l : lignesRecues) {
                if (l.getMoveId() != null && l.getQteRecue() != null) {
                    qtesRecuesMap.put(l.getMoveId(), l.getQteRecue());
                }
            }
        }

        // Date effective = date planifiée de la facture (respecte l'antidatage) ou maintenant par défaut
        LocalDateTime effectiveDate = picking.getScheduledDate() != null
                ? picking.getScheduledDate().atTime(LocalTime.now())
                : LocalDateTime.now();

        // Si pas de dépôt achat configuré : réception directe fournisseur → magasin principal
        boolean directToMain = depotAchatLocationId.equals(mainLocationId);
        if (directToMain) {
            // Pas de dépôt achat configuré : réception directe fournisseur → magasin principal (+ avaries si reste)
            for (StockMove move : picking.getMoves()) {
                BigDecimal qteCommandee = move.getQtyDemanded() != null ? move.getQtyDemanded() : ZERO;
                BigDecimal qteRecue = qtesRecuesMap.getOrDefault(move.getId(), ZERO);
                BigDecimal reste = qteCommandee.subtract(qteRecue).max(ZERO);
                move.setQtyDone(qteRecue);
                move.setState("done");
                if (qteRecue.compareTo(ZERO) > 0) {
                    applyStockMovement(move.getProductId(), move.getLocationId(), mainLocationId,
                            qteRecue, move.getPriceUnit(), companyId, picking.getName(), "incoming");
                }
                if (reste.compareTo(ZERO) > 0 && avarLocationId != null) {
                    applyStockMovement(move.getProductId(), move.getLocationId(), avarLocationId,
                            reste, move.getPriceUnit(), companyId, picking.getName() + " (Avarie)", "incoming");
                }
            }
            picking.setState("done");
            picking.setDateDone(effectiveDate);
            picking.setValidatedBy(auditService.getCurrentUsername());
            picking.setValidatedAt(LocalDateTime.now());
            pickingRepo.save(picking);
            ReceptionBordereauDTO bordereau = getBordereau(pickingId);
            syncEventPublisher.publish(SyncEventType.STOCK_BORDEREAU_VALIDATED, String.valueOf(pickingId), bordereau);
            auditService.log("STOCK_PICKING", pickingId, picking.getName(),
                    "VALIDATED", "Bordereau validé (réception directe magasin)", picking.getCompanyId());
            return bordereau;
        }

        // Trouver le picking type "internal" pour les transferts inter-dépôts
        List<StockPickingType> internalTypes = mainWarehouse != null
                ? pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "internal")
                : Collections.emptyList();
        StockPickingType internalType = internalTypes.isEmpty() ? null : internalTypes.get(0);

        // Construire les pickings de transfert inter-dépôts
        StockPicking transferMain = null;
        StockPicking transferAvar = null;

        if (internalType != null) {
            // Verrou pessimiste sur la société : sérialise les générateurs de numéro de bon ci-dessous.
            companyRepo.findByIdForUpdate(companyId);
            // Le transfert vers le magasin principal porte un préfixe dédié (MP/IN) pour le
            // distinguer d'un transfert inter-dépôts manuel dans la fiche de stock et les listes.
            String mpInPrefix = "MP/IN";
            Integer maxMpInSeq = pickingRepo.findMaxSeq(companyId, mpInPrefix);
            String nameMain = String.format("%s/%05d", mpInPrefix, (maxMpInSeq != null ? maxMpInSeq : 0) + 1);

            String intPrefix = internalType.getSequencePrefix() != null ? internalType.getSequencePrefix() : "INT";
            Integer maxIntSeq = pickingRepo.findMaxSeq(companyId, intPrefix);
            String nameAvar = String.format("%s/%05d", intPrefix, (maxIntSeq != null ? maxIntSeq : 0) + 1);

            // Transfert 1 : Dépôt Achat → Magasin principal
            transferMain = StockPicking.builder()
                    .name(nameMain)
                    .pickingTypeId(internalType.getId())
                    .pickingTypeCode("internal")
                    .locationId(depotAchatLocationId)
                    .locationDestId(mainLocationId)
                    .partnerId(picking.getPartnerId())
                    .partnerName(picking.getPartnerName())
                    .state("done")
                    .scheduledDate(picking.getScheduledDate())
                    .dateDone(effectiveDate)
                    .origin(picking.getName())
                    .notes("Transfert réception vers magasin principal - " + picking.getName())
                    .companyId(companyId)
                    .build();

            // Transfert 2 : Dépôt Achat → Avaries (si avar configuré)
            if (avarLocationId != null) {
                transferAvar = StockPicking.builder()
                        .name(nameAvar)
                        .pickingTypeId(internalType.getId())
                        .pickingTypeCode("internal")
                        .locationId(depotAchatLocationId)
                        .locationDestId(avarLocationId)
                        .partnerId(picking.getPartnerId())
                        .partnerName(picking.getPartnerName())
                        .state("done")
                        .scheduledDate(picking.getScheduledDate())
                        .dateDone(effectiveDate)
                        .origin(picking.getName())
                        .notes("Transfert avaries - " + picking.getName())
                        .companyId(companyId)
                        .build();
            }
        }

        boolean hasMainMoves = false;
        boolean hasAvarMoves = false;

        for (StockMove move : picking.getMoves()) {
            BigDecimal qteCommandee = move.getQtyDemanded() != null ? move.getQtyDemanded() : ZERO;
            BigDecimal qteRecue = qtesRecuesMap.getOrDefault(move.getId(), ZERO);
            BigDecimal reste = qteCommandee.subtract(qteRecue).max(ZERO);

            // Le picking initial enregistre TOUTE la quantité reçue vers le Dépôt Achat
            move.setQtyDone(qteCommandee);
            // La destination reste le Dépôt Achat (ne pas écraser vers le magasin principal)
            move.setState("done");

            // Appliquer le stock entrant Fournisseur → Dépôt Achat
            if (qteCommandee.compareTo(ZERO) > 0) {
                applyStockMovement(move.getProductId(), move.getLocationId(), depotAchatLocationId,
                        qteCommandee, move.getPriceUnit(), companyId, picking.getName(), "incoming");
            }

            // Transfert Dépôt Achat → Magasin principal
            if (qteRecue.compareTo(ZERO) > 0 && transferMain != null) {
                // Appliquer le mouvement de stock d'abord (typeCode "incoming" pour recalcul CMUP au MP) :
                // le mouvement enregistré doit refléter la quantité réellement transférée, jamais plus
                // que ce qui est disponible au Dépôt Achat, pour rester cohérent avec le quant réel.
                BigDecimal qteAppliquee = applyStockMovement(move.getProductId(), depotAchatLocationId, mainLocationId,
                        qteRecue, move.getPriceUnit(), companyId, picking.getName(), "incoming");
                if (qteAppliquee.compareTo(ZERO) > 0) {
                    StockMove tm = StockMove.builder()
                            .picking(transferMain)
                            .productId(move.getProductId())
                            .productCode(move.getProductCode())
                            .productName(move.getProductName())
                            .uomName(move.getUomName())
                            .qtyDemanded(qteRecue)
                            .qtyDone(qteAppliquee)
                            .priceUnit(move.getPriceUnit())
                            .locationId(depotAchatLocationId)
                            .locationDestId(mainLocationId)
                            .state("done")
                            .companyId(companyId)
                            .build();
                    transferMain.getMoves().add(tm);
                    hasMainMoves = true;
                }
            }

            // Transfert Dépôt Achat → Avaries
            if (reste.compareTo(ZERO) > 0 && transferAvar != null) {
                // Idem : plafonner le mouvement enregistré à la quantité réellement transférée.
                // typeCode "incoming" (comme pour le transfert vers le magasin principal ci-dessus) :
                // sans ça, le CMUP de l'entrepôt Avaries n'est jamais recalculé sur cette réception.
                BigDecimal qteAppliquee = applyStockMovement(move.getProductId(), depotAchatLocationId, avarLocationId,
                        reste, move.getPriceUnit(), companyId, picking.getName() + " (Avarie)", "incoming");
                if (qteAppliquee.compareTo(ZERO) > 0) {
                    StockMove ta = StockMove.builder()
                            .picking(transferAvar)
                            .productId(move.getProductId())
                            .productCode(move.getProductCode())
                            .productName(move.getProductName())
                            .uomName(move.getUomName())
                            .qtyDemanded(reste)
                            .qtyDone(qteAppliquee)
                            .priceUnit(move.getPriceUnit())
                            .locationId(depotAchatLocationId)
                            .locationDestId(avarLocationId)
                            .state("done")
                            .companyId(companyId)
                            .build();
                    transferAvar.getMoves().add(ta);
                    hasAvarMoves = true;
                }
            }
        }

        // Sauvegarder les pickings de transfert inter-dépôts
        if (transferMain != null && hasMainMoves) {
            pickingRepo.save(transferMain);
        }
        if (transferAvar != null && hasAvarMoves) {
            pickingRepo.save(transferAvar);
        }

        // Marquer le picking initial (Dépôt Achat) comme traité
        picking.setState("done");
        picking.setDateDone(effectiveDate);
        picking.setValidatedBy(auditService.getCurrentUsername());
        picking.setValidatedAt(LocalDateTime.now());
        pickingRepo.save(picking);

        ReceptionBordereauDTO bordereau = getBordereau(pickingId);
        syncEventPublisher.publish(SyncEventType.STOCK_BORDEREAU_VALIDATED, String.valueOf(pickingId), bordereau);
        auditService.log("STOCK_PICKING", pickingId, picking.getName(),
                "VALIDATED", "Bordereau de réception validé", picking.getCompanyId());
        return bordereau;
    }

    // ============================================================
    // RÉCEPTION DIRECTE (sans facture fournisseur)
    // ============================================================

    /**
     * Crée une réception directe Fournisseur → Stock principal, validée immédiatement.
     * Permet de recevoir de la marchandise sans passer par une facture d'achat.
     */
    public StockPickingDTO createDirectReception(com.erp.stock.dto.DirectReceptionRequest req) {
        if (req.getLines() == null || req.getLines().isEmpty()) {
            throw new IllegalArgumentException("Aucune ligne de réception fournie");
        }

        Long companyId = req.getCompanyId();
        LocalDate date = req.getDate() != null ? req.getDate() : LocalDate.now();

        // Trouver l'emplacement stock de l'entrepôt cible (ou entrepôt principal)
        Long destLocationId;
        if (req.getWarehouseId() != null) {
            destLocationId = warehouseRepo.findById(req.getWarehouseId())
                    .map(Warehouse::getStockLocationId)
                    .orElseThrow(() -> new EntityNotFoundException("Entrepôt introuvable: " + req.getWarehouseId()));
        } else {
            List<Warehouse> whs = warehouseRepo.findByCompanyIdAndActiveTrue(companyId);
            Warehouse mainWh = findMainWarehouse(whs);
            if (mainWh == null) throw new IllegalStateException("Aucun entrepôt configuré pour cette société");
            destLocationId = mainWh.getStockLocationId();
        }

        // Trouver un emplacement fournisseur (usage=supplier)
        StockLocation supplierLoc = locationRepo.findAll().stream()
                .filter(l -> "supplier".equals(l.getUsage()))
                .findFirst()
                .orElse(null);
        Long srcLocationId = supplierLoc != null ? supplierLoc.getId() : destLocationId;

        // Trouver le type de picking incoming
        List<StockPickingType> incomingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "incoming");
        Long pickingTypeId = incomingTypes.isEmpty() ? null : incomingTypes.get(0).getId();

        // Générer le nom du picking
        String prefix = "REC/DIR";
        companyRepo.findByIdForUpdate(companyId);
        Integer maxSeq = pickingRepo.findMaxSeq(companyId, prefix);
        String pickingName = String.format("%s/%05d", prefix, (maxSeq != null ? maxSeq : 0) + 1);

        StockPicking picking = StockPicking.builder()
                .name(pickingName)
                .pickingTypeId(pickingTypeId != null ? pickingTypeId : 1L)
                .pickingTypeCode("incoming")
                .locationId(srcLocationId)
                .locationDestId(destLocationId)
                .partnerName(req.getSupplierName())
                .state("done")
                .scheduledDate(date)
                .dateDone(date.atTime(LocalTime.now()))
                .origin(req.getReference())
                .notes("Réception directe")
                .companyId(companyId)
                .build();

        final Long finalDestLocationId = destLocationId;

        for (com.erp.stock.dto.DirectReceptionRequest.LineItem li : req.getLines()) {
            if (li.getProductId() == null || li.getQuantity() == null || li.getQuantity().compareTo(ZERO) <= 0) continue;
            Product product = productRepo.findById(li.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Produit introuvable: " + li.getProductId()));

            BigDecimal pu = li.getPrixUnitaire() != null ? li.getPrixUnitaire()
                    : getWarehouseCmup(product.getId(), resolveWarehouseId(finalDestLocationId), product);

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(li.getQuantity())
                    .qtyDone(li.getQuantity())
                    .priceUnit(pu)
                    .locationId(srcLocationId)
                    .locationDestId(finalDestLocationId)
                    .state("done")
                    .companyId(companyId)
                    .build();
            picking.getMoves().add(move);

            // Mise à jour stock + CMUP
            applyStockMovement(product.getId(), srcLocationId, finalDestLocationId,
                    li.getQuantity(), pu, companyId, pickingName, "incoming");
        }

        if (picking.getMoves().isEmpty()) {
            throw new IllegalArgumentException("Aucune ligne valide dans la réception");
        }

        picking.setValidatedBy(auditService.getCurrentUsername());
        picking.setValidatedAt(LocalDateTime.now());
        StockPicking saved = pickingRepo.save(picking);

        syncEventPublisher.publish(SyncEventType.STOCK_PICKING_VALIDATED, String.valueOf(saved.getId()),
                toPickingDTO(saved, false));
        auditService.log("STOCK_PICKING", saved.getId(), saved.getName(),
                "DIRECT_RECEPTION", "Réception directe créée et validée", companyId);

        return toPickingDTO(saved, true);
    }

    /**
     * Applique un mouvement de stock (mise à jour quants + CMUP).
     * Retourne la quantité réellement appliquée : si la source est un emplacement interne
     * dont le stock disponible est inférieur à la quantité demandée, le mouvement est
     * plafonné à ce qui est réellement disponible (source ET destination), pour ne jamais
     * créer de désynchronisation entre le quant réel et l'historique des mouvements (l'ancien
     * comportement plafonnait silencieusement le quant à zéro tout en laissant l'intégralité
     * de la quantité demandée dans le mouvement enregistré, faussant durablement la fiche de
     * stock qui se recalcule à partir de cet historique).
     */
    /** Résout l'entrepôt propriétaire d'un emplacement — délègue à ProductValuationService. */
    private Long resolveWarehouseId(Long locationId) {
        return productValuationService.resolveWarehouseId(locationId);
    }

    /** CMUP courant d'un produit dans un entrepôt donné — délègue à ProductValuationService. */
    private BigDecimal getWarehouseCmup(Long productId, Long warehouseId, Product fallback) {
        return productValuationService.getWarehouseCmup(productId, warehouseId, fallback);
    }

    /** Recalcule le CMUP d'un produit dans un entrepôt — délègue à ProductValuationService. */
    private BigDecimal recalcWarehouseCmup(Long productId, Long warehouseId, Long companyId,
                                            BigDecimal currentQty, BigDecimal incomingQty, BigDecimal incomingPrice) {
        return productValuationService.recalcWarehouseCmup(productId, warehouseId, companyId,
                currentQty, incomingQty, incomingPrice);
    }

    private BigDecimal applyStockMovement(Long productId, Long srcLocationId, Long destLocationId,
                                     BigDecimal qty, BigDecimal priceUnit,
                                     Long companyId, String ref, String typeCode) {
        Product product = productRepo.findById(productId).orElse(null);
        if (product == null || qty.compareTo(ZERO) <= 0) return ZERO;

        BigDecimal appliedQty = qty;

        // Source : diminuer si interne, plafonnée à la quantité réellement disponible
        StockLocation srcLoc = locationRepo.findById(srcLocationId).orElse(null);
        if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
            StockQuant srcQ = findOrCreateQuant(productId, srcLocationId, companyId);
            appliedQty = qty.min(srcQ.getQuantity().max(ZERO));
            if (appliedQty.compareTo(ZERO) <= 0) return ZERO;
            srcQ.setQuantity(srcQ.getQuantity().subtract(appliedQty));
            quantRepo.save(srcQ);
        }

        // Destination : augmenter + recalcul CMUP pour incoming
        StockLocation destLoc = locationRepo.findById(destLocationId).orElse(null);
        if (destLoc != null && "internal".equals(destLoc.getUsage())) {
            StockQuant destQ = findOrCreateQuant(productId, destLocationId, companyId);
            if ("incoming".equals(typeCode)) {
                Long destWarehouseId = resolveWarehouseId(destLocationId);
                BigDecimal pu = priceUnit != null ? priceUnit : getWarehouseCmup(productId, destWarehouseId, product);
                if (destWarehouseId != null) {
                    recalcWarehouseCmup(productId, destWarehouseId, companyId, destQ.getQuantity(), appliedQty, pu);
                }
            }
            destQ.setQuantity(destQ.getQuantity().add(appliedQty));
            quantRepo.save(destQ);
        }
        return appliedQty;
    }

    private WarehouseDTO toWarehouseDTO(Warehouse w, boolean withLocations) {
        String stockLocName = w.getStockLocationId() != null
                ? locationRepo.findById(w.getStockLocationId()).map(StockLocation::getName).orElse(null) : null;
        String journalName = w.getStockJournalId() != null
                ? journalRepo.findById(w.getStockJournalId()).map(AccountJournal::getName).orElse(null) : null;
        String salesJournalName = w.getSalesJournalId() != null
                ? journalRepo.findById(w.getSalesJournalId()).map(j -> j.getCode() + " - " + j.getName()).orElse(null) : null;
        String cashJournalName = w.getCashJournalId() != null
                ? journalRepo.findById(w.getCashJournalId()).map(j -> j.getCode() + " - " + j.getName()).orElse(null) : null;
        String depotAchatName = w.getDepotAchatWarehouseId() != null
                ? warehouseRepo.findById(w.getDepotAchatWarehouseId()).map(Warehouse::getName).orElse(null) : null;
        String avarName = w.getAvarWarehouseId() != null
                ? warehouseRepo.findById(w.getAvarWarehouseId()).map(Warehouse::getName).orElse(null) : null;

        List<StockLocationDTO> locations = null;
        if (withLocations) {
            locations = locationRepo.findByWarehouseIdOrderByNameAsc(w.getId())
                    .stream().map(l -> toLocationDTO(l, false)).collect(Collectors.toList());
        }
        return WarehouseDTO.builder()
                .id(w.getId()).name(w.getName()).code(w.getCode())
                .stockLocationId(w.getStockLocationId()).stockLocationName(stockLocName)
                .stockJournalId(w.getStockJournalId()).stockJournalName(journalName)
                .salesJournalId(w.getSalesJournalId()).salesJournalName(salesJournalName)
                .cashJournalId(w.getCashJournalId()).cashJournalName(cashJournalName)
                .depotAchatWarehouseId(w.getDepotAchatWarehouseId()).depotAchatWarehouseName(depotAchatName)
                .avarWarehouseId(w.getAvarWarehouseId()).avarWarehouseName(avarName)
                .responsableName(w.getResponsableName())
                .companyId(w.getCompanyId()).active(w.isActive())
                .isDefault(Boolean.TRUE.equals(w.getIsDefault()))
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
                .companyId(SecurityUtils.currentCompanyId())
                .active(true).build();
        return toLocationDTO(locationRepo.save(l), false);
    }

    public StockLocationDTO updateLocation(Long id, StockLocationDTO dto) {
        StockLocation l = locationRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Location not found: " + id));
        l.setName(dto.getName());
        l.setActive(dto.isActive());
        return toLocationDTO(locationRepo.save(l), false);
    }

    public void deleteLocation(Long id) {
        StockLocation l = locationRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Location not found: " + id));
        tenantGuard.check(l.getCompanyId());
        l.setActive(false);
        locationRepo.save(l);
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
                .companyId(l.getCompanyId())
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
        // Caches partagés pour toute la liste : de nombreux bons partagent le même type/entrepôt/
        // société, et sans ça toPickingDTO refaisait ~10 requêtes PAR LIGNE (dont deux doublons
        // exacts sur le même emplacement) — sur un écran de transferts/réceptions à plusieurs
        // milliers de bons, ça multipliait le nombre de requêtes par un facteur à deux chiffres.
        PickingDtoCaches caches = new PickingDtoCaches();
        return pickings.stream().map(p -> toPickingDTO(p, false, caches)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public StockPickingDTO getPicking(Long id) {
        StockPicking p = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        tenantGuard.check(p.getCompanyId());
        return toPickingDTO(p, true, null);
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
                // Vérifier le stock disponible (hors réservations) pour les transferts internes
                if ("internal".equals(pt.getCode()) && srcLocId != null) {
                    BigDecimal demanded = mr.getQtyDemanded() != null ? mr.getQtyDemanded() : ZERO;
                    StockQuant q = quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(mr.getProductId(), srcLocId, req.getCompanyId()).orElse(null);
                    BigDecimal available = q != null ? q.getQuantity().subtract(q.getReservedQuantity()).max(ZERO) : ZERO;
                    if (demanded.compareTo(available) > 0) {
                        throw new IllegalStateException(
                            "Stock insuffisant pour « " + product.getName() + " » — disponible : "
                            + available.toPlainString() + ", demandé : " + demanded.toPlainString());
                    }
                }
                Long moveSrcLocId = mr.getLocationId() != null ? mr.getLocationId() : srcLocId;
                Long moveDestLocId = mr.getLocationDestId() != null ? mr.getLocationDestId() : destLocId;
                // Prix par défaut (si non fourni) : pour un transfert INTERNE, c'est le coût de la
                // SOURCE qui doit être transféré — utiliser le CMUP de la destination ferait de la
                // moyenne pondérée à l'arrivée un no-op mathématique (on blenderait le CMUP de la
                // destination avec... lui-même) et empêcherait un écart de coût réel entre les deux
                // entrepôts de jamais se propager. Pour une réception externe ("incoming"), il n'y a
                // pas de coût source à hériter, donc le CMUP courant de la destination reste le repli
                // le plus sûr (laisser le CMUP inchangé plutôt que d'en fabriquer un arbitraire).
                BigDecimal defaultPriceUnit = "internal".equals(pt.getCode())
                        ? getWarehouseCmup(product.getId(), resolveWarehouseId(moveSrcLocId), product)
                        : getWarehouseCmup(product.getId(), resolveWarehouseId(moveDestLocId), product);
                StockMove move = StockMove.builder()
                        .picking(picking)
                        .productId(product.getId())
                        .productCode(product.getDefaultCode())
                        .productName(product.getName())
                        .uomName(product.getUomName())
                        .qtyDemanded(mr.getQtyDemanded())
                        .qtyDone(mr.getQtyDone() != null ? mr.getQtyDone() : mr.getQtyDemanded())
                        .priceUnit(mr.getPriceUnit() != null ? mr.getPriceUnit() : defaultPriceUnit)
                        .locationId(moveSrcLocId)
                        .locationDestId(moveDestLocId)
                        .state("draft")
                        .companyId(req.getCompanyId())
                        .build();
                picking.getMoves().add(move);
            }
        }

        // Pour les transferts internes entre entrepôts, utiliser le nom de l'entrepôt
        // destinataire comme partenaire (visible dans la fiche mouvements de produit).
        if ("internal".equals(pt.getCode()) && picking.getPartnerName() == null && destLocId != null) {
            locationRepo.findById(destLocId).ifPresent(loc -> {
                if (loc.getWarehouseId() != null) {
                    warehouseRepo.findById(loc.getWarehouseId())
                            .map(Warehouse::getName)
                            .ifPresent(picking::setPartnerName);
                }
            });
        }

        StockPicking saved = pickingRepo.save(picking);
        auditService.log("STOCK_PICKING", saved.getId(), saved.getName(),
                "CREATED", "Bon créé", saved.getCompanyId());
        return toPickingDTO(saved, true);
    }

    public StockPickingDTO updatePicking(Long id, StockPickingRequest req) {
        StockPicking p = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        tenantGuard.check(p.getCompanyId());
        if (!"draft".equals(p.getState())) throw new IllegalStateException("Seuls les transferts en brouillon peuvent être modifiés");

        if (req.getLocationId() != null) p.setLocationId(req.getLocationId());
        if (req.getLocationDestId() != null) p.setLocationDestId(req.getLocationDestId());
        if (req.getPartnerId() != null) p.setPartnerId(req.getPartnerId());
        if (req.getPartnerName() != null) p.setPartnerName(req.getPartnerName());
        if (req.getScheduledDate() != null) p.setScheduledDate(req.getScheduledDate());
        if (req.getOrigin() != null) p.setOrigin(req.getOrigin());
        if (req.getNotes() != null) p.setNotes(req.getNotes());

        // Mettre à jour les lignes
        Long srcLocId = req.getLocationId() != null ? req.getLocationId() : p.getLocationId();
        StockPickingType pt = pickingTypeRepo.findById(p.getPickingTypeId()).orElse(null);
        if (req.getMoves() != null) {
            p.getMoves().clear();
            for (StockPickingRequest.MoveRequest mr : req.getMoves()) {
                Product product = productRepo.findById(mr.getProductId())
                        .orElseThrow(() -> new EntityNotFoundException("Product not found: " + mr.getProductId()));
                // Vérifier le stock disponible (hors réservations) pour les transferts internes
                if (pt != null && "internal".equals(pt.getCode()) && srcLocId != null) {
                    BigDecimal demanded = mr.getQtyDemanded() != null ? mr.getQtyDemanded() : ZERO;
                    StockQuant q = quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(mr.getProductId(), srcLocId, p.getCompanyId()).orElse(null);
                    BigDecimal available = q != null ? q.getQuantity().subtract(q.getReservedQuantity()).max(ZERO) : ZERO;
                    if (demanded.compareTo(available) > 0) {
                        throw new IllegalStateException(
                            "Stock insuffisant pour « " + product.getName() + " » — disponible : "
                            + available.toPlainString() + ", demandé : " + demanded.toPlainString());
                    }
                }
                Long moveSrcLocId = mr.getLocationId() != null ? mr.getLocationId() : p.getLocationId();
                Long moveDestLocId = mr.getLocationDestId() != null ? mr.getLocationDestId() : p.getLocationDestId();
                // cf. createPicking : pour un transfert interne, le prix par défaut doit être le
                // CMUP de la SOURCE, pas celui de la destination (sinon la moyenne pondérée à
                // l'arrivée est un no-op).
                BigDecimal defaultPriceUnit = (pt != null && "internal".equals(pt.getCode()))
                        ? getWarehouseCmup(product.getId(), resolveWarehouseId(moveSrcLocId), product)
                        : getWarehouseCmup(product.getId(), resolveWarehouseId(moveDestLocId), product);
                StockMove move = StockMove.builder()
                        .picking(p)
                        .productId(product.getId())
                        .productCode(product.getDefaultCode())
                        .productName(product.getName())
                        .uomName(product.getUomName())
                        .qtyDemanded(mr.getQtyDemanded())
                        .qtyDone(mr.getQtyDone() != null ? mr.getQtyDone() : mr.getQtyDemanded())
                        .priceUnit(mr.getPriceUnit() != null ? mr.getPriceUnit() : defaultPriceUnit)
                        .locationId(moveSrcLocId)
                        .locationDestId(moveDestLocId)
                        .state("draft")
                        .companyId(p.getCompanyId())
                        .build();
                p.getMoves().add(move);
            }
        }
        return toPickingDTO(pickingRepo.save(p), true);
    }

    /**
     * Valider un transfert : met à jour le stock, CMUP, et crée l'écriture comptable.
     * Pour les transferts inter-dépôts (entrepôts différents) : destock source + crée réception en attente.
     */
    public StockPickingDTO validatePicking(Long id) {
        StockPicking picking = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        tenantGuard.check(picking.getCompanyId());
        if ("done".equals(picking.getState())) throw new IllegalStateException("Ce transfert est déjà validé");
        if ("cancelled".equals(picking.getState())) throw new IllegalStateException("Ce transfert est annulé");
        if ("pending_reception".equals(picking.getState())) throw new IllegalStateException("Ce transfert est déjà en attente de réception");
        fiscalLockGuard.assertPeriodOpen(picking.getCompanyId(),
                picking.getScheduledDate() != null ? picking.getScheduledDate() : LocalDate.now());

        List<StockMove> moves = picking.getMoves();
        if (moves.isEmpty()) throw new IllegalStateException("Aucune ligne à valider");

        // Détection transfert inter-dépôts (entrepôts différents) → flux en 2 étapes (déstockage source immédiat,
        // puis confirmation de réception à destination).
        if ("internal".equals(picking.getPickingTypeCode()) && !picking.isTransferReception()) {
            Long srcLocId = picking.getLocationId();
            Long dstLocId = picking.getLocationDestId();
            StockLocation srcLoc = srcLocId != null ? locationRepo.findById(srcLocId).orElse(null) : null;
            StockLocation dstLoc = dstLocId != null ? locationRepo.findById(dstLocId).orElse(null) : null;

            // Détection primaire via StockLocation.warehouseId
            boolean interDepot = srcLoc != null && dstLoc != null
                    && srcLoc.getWarehouseId() != null && dstLoc.getWarehouseId() != null
                    && !srcLoc.getWarehouseId().equals(dstLoc.getWarehouseId());

            // Fallback : comparer les locationId contre les stockLocationId de tous les entrepôts
            // (couvre les entrepôts dont la location n'a pas encore de warehouseId renseigné)
            if (!interDepot && srcLocId != null && dstLocId != null && !srcLocId.equals(dstLocId)) {
                List<Warehouse> allWh = warehouseRepo.findByCompanyIdAndActiveTrue(picking.getCompanyId());
                Long srcWhId = allWh.stream()
                        .filter(w -> srcLocId.equals(w.getStockLocationId()))
                        .map(Warehouse::getId).findFirst().orElse(null);
                Long dstWhId = allWh.stream()
                        .filter(w -> dstLocId.equals(w.getStockLocationId()))
                        .map(Warehouse::getId).findFirst().orElse(null);
                interDepot = srcWhId != null && dstWhId != null && !srcWhId.equals(dstWhId);
            }

            if (interDepot) {
                return validateInterDepotTransfer(picking, moves);
            }
        }

        // ---- Appliquer les mouvements de stock (transfert intra-dépôt ou réception) ----
        for (StockMove move : moves) {
            BigDecimal qty = move.getQtyDone();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;

            Product product = productRepo.findById(move.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Product not found: " + move.getProductId()));

            // --- Source : diminuer le stock (si emplacement interne) ---
            StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
            if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                StockQuant srcQuant = findOrCreateQuant(move.getProductId(), move.getLocationId(), picking.getCompanyId());
                // Vérifier le stock disponible avant toute sortie d'un emplacement interne (tous
                // types de picking confondus) : sans ce garde-fou, une sortie demandant plus que le
                // disponible plafonnait silencieusement le quant à zéro tout en laissant la quantité
                // demandée en entier dans le mouvement enregistré, faussant durablement la fiche de
                // stock (recalculée à partir de cet historique) par rapport au stock réel.
                BigDecimal available = srcQuant.getQuantity().subtract(srcQuant.getReservedQuantity()).max(ZERO);
                if (available.compareTo(qty) < 0) {
                    throw new IllegalStateException(
                        "Stock insuffisant pour « " + move.getProductName() + " » " +
                        "dans " + srcLoc.getName() + " — disponible : " + available.toPlainString() + ", demandé : " + qty.toPlainString());
                }
                srcQuant.setQuantity(srcQuant.getQuantity().subtract(qty).max(ZERO));
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

                // Mise à jour CMUP pour les réceptions (incoming) — par entrepôt de destination.
                Long destWarehouseId = resolveWarehouseId(move.getLocationDestId());
                BigDecimal priceUnit = move.getPriceUnit() != null ? move.getPriceUnit()
                        : getWarehouseCmup(move.getProductId(), destWarehouseId, product);
                if ("incoming".equals(picking.getPickingTypeCode()) || srcLoc == null || !"internal".equals(srcLoc.getUsage())) {
                    if (destWarehouseId != null) {
                        recalcWarehouseCmup(move.getProductId(), destWarehouseId, picking.getCompanyId(),
                                destQuant.getQuantity(), qty, priceUnit);
                    }
                }

                destQuant.setQuantity(destQuant.getQuantity().add(qty));
                quantRepo.save(destQuant);
            }

            // --- Couche de valorisation --- coût de sortie = CMUP de l'entrepôt SOURCE pour une
            // sortie/transfert, ou de l'entrepôt de destination pour une réception (mêmes règles
            // que le recalcul CMUP ci-dessus, pour rester cohérent avec l'entrepôt réellement débité).
            Long costWarehouseId = "incoming".equals(picking.getPickingTypeCode())
                    ? resolveWarehouseId(move.getLocationDestId())
                    : resolveWarehouseId(move.getLocationId());
            BigDecimal priceUnit = move.getPriceUnit() != null ? move.getPriceUnit()
                    : getWarehouseCmup(move.getProductId(), costWarehouseId, product);
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
        // Date effective = date planifiée du transfert (respecte l'antidatage) ou maintenant par défaut
        picking.setDateDone(picking.getScheduledDate() != null
                ? picking.getScheduledDate().atTime(LocalTime.now())
                : LocalDateTime.now());
        picking.setValidatedBy(auditService.getCurrentUsername());
        picking.setValidatedAt(LocalDateTime.now());

        StockPickingDTO result = toPickingDTO(pickingRepo.save(picking), true);
        syncEventPublisher.publish(SyncEventType.STOCK_PICKING_VALIDATED, String.valueOf(id), result);
        auditService.log("STOCK_PICKING", id, picking.getName(),
                "VALIDATED", "Transfert de stock validé", picking.getCompanyId());
        return result;
    }

    public StockPickingDTO cancelPicking(Long id) {
        StockPicking picking = pickingRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Picking not found: " + id));
        tenantGuard.check(picking.getCompanyId());
        if ("done".equals(picking.getState())) throw new IllegalStateException("Impossible d'annuler un transfert validé");

        // Pour un transfert inter-dépôts en pending_reception : restituer le stock à la source
        if ("pending_reception".equals(picking.getState()) && !picking.isTransferReception()) {
            for (StockMove move : picking.getMoves()) {
                BigDecimal qty = move.getQtyDone() != null ? move.getQtyDone() : move.getQtyDemanded();
                if (qty != null && qty.compareTo(ZERO) > 0) {
                    StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
                    if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                        StockQuant srcQ = findOrCreateQuant(move.getProductId(), move.getLocationId(), picking.getCompanyId());
                        srcQ.setQuantity(srcQ.getQuantity().add(qty));
                        quantRepo.save(srcQ);
                    }
                }
            }
            // Annuler aussi le picking de réception lié
            if (picking.getLinkedPickingId() != null) {
                pickingRepo.findById(picking.getLinkedPickingId()).ifPresent(linked -> {
                    linked.getMoves().forEach(m -> m.setState("cancelled"));
                    linked.setState("cancelled");
                    pickingRepo.save(linked);
                });
            }
        }

        // Pour une expédition inter-agences en pending_reception : restituer le stock à la source
        if ("pending_reception".equals(picking.getState()) && "inter_company".equals(picking.getPickingTypeCode())) {
            for (StockMove move : picking.getMoves()) {
                BigDecimal qty = move.getQtyDone();
                if (qty != null && qty.compareTo(ZERO) > 0) {
                    StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
                    if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                        StockQuant srcQ = findOrCreateQuant(move.getProductId(), move.getLocationId(), picking.getCompanyId());
                        srcQ.setQuantity(srcQ.getQuantity().add(qty));
                        quantRepo.save(srcQ);
                    }
                }
            }
        }

        // Libérer les réservations pour les pickings en draft/confirmed
        if ("draft".equals(picking.getState()) || "confirmed".equals(picking.getState())) {
            for (StockMove move : picking.getMoves()) {
                BigDecimal reserved = move.getQtyDemanded();
                if (reserved != null && reserved.compareTo(ZERO) > 0) {
                    quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(
                            move.getProductId(), move.getLocationId(), picking.getCompanyId())
                            .ifPresent(q -> {
                                q.setReservedQuantity(q.getReservedQuantity().subtract(reserved).max(ZERO));
                                quantRepo.save(q);
                            });
                }
            }
        }

        picking.getMoves().forEach(m -> m.setState("cancelled"));
        picking.setState("cancelled");
        picking.setCancelledBy(auditService.getCurrentUsername());
        picking.setCancelledAt(LocalDateTime.now());
        StockPickingDTO result = toPickingDTO(pickingRepo.save(picking), true);
        auditService.log("STOCK_PICKING", id, picking.getName(),
                "CANCELLED", "Transfert annulé", picking.getCompanyId());
        return result;
    }

    // ============================================================
    // TRANSFERTS INTER-DÉPÔTS — RÉCEPTIONS
    // ============================================================

    /**
     * Valide un transfert inter-dépôts :
     * - Destock immédiat de la source
     * - Crée un picking "réception en attente" côté destinataire
     * - Le transfert passe en état pending_reception
     */
    private StockPickingDTO validateInterDepotTransfer(StockPicking transfer, List<StockMove> moves) {
        Long companyId = transfer.getCompanyId();

        // Vérifier et déduire le stock source
        for (StockMove move : moves) {
            BigDecimal qty = move.getQtyDone() != null ? move.getQtyDone() : move.getQtyDemanded();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;
            StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
            if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                StockQuant srcQ = findOrCreateQuant(move.getProductId(), move.getLocationId(), companyId);
                if (srcQ.getQuantity().compareTo(qty) < 0) {
                    throw new IllegalStateException("Stock insuffisant pour " + move.getProductName()
                            + " (disponible: " + srcQ.getQuantity().toPlainString() + ")");
                }
                srcQ.setQuantity(srcQ.getQuantity().subtract(qty));
                quantRepo.save(srcQ);
            }
            move.setQtyDone(qty);
            move.setState("confirmed");
        }

        // Renommer le transfert sortant et la réception entrante avec le préfixe de l'entrepôt
        // concerné (ex : MP/OUT côté Magasin Principal, DJ/IN côté Dépôt Joel) pour les repérer
        // immédiatement dans les listes et la fiche de stock. Repli sur l'ancien préfixe générique
        // REC-INT si l'entrepôt source/destination n'a pas de code configuré.
        String srcCode = resolveWarehouseCode(transfer.getLocationId(), companyId);
        String dstCode = resolveWarehouseCode(transfer.getLocationDestId(), companyId);

        // Verrou pessimiste sur la société : sérialise les deux générateurs de numéro ci-dessous.
        companyRepo.findByIdForUpdate(companyId);
        if (srcCode != null && !srcCode.isBlank()) {
            String outPrefix = srcCode + "/OUT";
            Integer maxOutSeq = pickingRepo.findMaxSeq(companyId, outPrefix);
            transfer.setName(String.format("%s/%05d", outPrefix, (maxOutSeq != null ? maxOutSeq : 0) + 1));
        }

        String recPrefix = (dstCode != null && !dstCode.isBlank()) ? dstCode + "/IN" : "REC-INT";
        Integer maxSeq = pickingRepo.findMaxSeq(companyId, recPrefix);
        int nextSeq = (maxSeq != null ? maxSeq : 0) + 1;
        String recName = String.format("%s/%05d", recPrefix, nextSeq);

        // Créer le picking de réception en attente
        StockPicking reception = StockPicking.builder()
                .name(recName)
                .pickingTypeId(transfer.getPickingTypeId())
                .pickingTypeCode("internal")
                .locationId(transfer.getLocationId())
                .locationDestId(transfer.getLocationDestId())
                .state("pending_reception")
                .scheduledDate(transfer.getScheduledDate())
                .origin(transfer.getName())
                .notes("Réception en attente du transfert " + transfer.getName())
                .companyId(companyId)
                .transferReception(true)
                .linkedPickingId(transfer.getId())
                .build();

        for (StockMove move : moves) {
            BigDecimal qty = move.getQtyDone() != null ? move.getQtyDone() : move.getQtyDemanded();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;
            StockMove recMove = StockMove.builder()
                    .picking(reception)
                    .productId(move.getProductId())
                    .productCode(move.getProductCode())
                    .productName(move.getProductName())
                    .uomName(move.getUomName())
                    .qtyDemanded(qty)
                    .qtyDone(qty)
                    .priceUnit(move.getPriceUnit())
                    .locationId(transfer.getLocationId())
                    .locationDestId(transfer.getLocationDestId())
                    .state("draft")
                    .companyId(companyId)
                    .build();
            reception.getMoves().add(recMove);
        }

        StockPicking savedReception = pickingRepo.save(reception);

        // Lier le transfert à la réception et passer en pending_reception
        transfer.setLinkedPickingId(savedReception.getId());
        transfer.setState("pending_reception");
        transfer.setDateDone(null);
        pickingRepo.save(transfer);

        return toPickingDTO(transfer, true);
    }

    /**
     * Retourne les réceptions inter-dépôts en attente pour la société.
     */
    @Transactional(readOnly = true)
    public List<StockPickingDTO> getPendingTransferReceptions(Long companyId) {
        return pickingRepo.findPendingTransferReceptions(companyId)
                .stream().map(p -> toPickingDTO(p, true)).collect(Collectors.toList());
    }

    /**
     * Retourne toutes les réceptions inter-dépôts (historique).
     */
    @Transactional(readOnly = true)
    public List<StockPickingDTO> getAllTransferReceptions(Long companyId) {
        return pickingRepo.findAllTransferReceptions(companyId)
                .stream().map(p -> toPickingDTO(p, false)).collect(Collectors.toList());
    }

    /**
     * Confirme la réception d'un transfert inter-dépôts.
     * Applique les quantités reçues à la destination.
     * Renvoie le reliquat (qté transférée - qté reçue) à la source.
     */
    public StockPickingDTO confirmTransferReception(Long receptionId,
                                                    List<ReceptionBordereauDTO.LigneBordereau> lignesRecues) {
        StockPicking reception = pickingRepo.findById(receptionId)
                .orElseThrow(() -> new EntityNotFoundException("Réception introuvable: " + receptionId));
        if (!"pending_reception".equals(reception.getState()))
            throw new IllegalStateException("Cette réception n'est pas en attente de validation");

        Long companyId = reception.getCompanyId();
        Long srcLocationId = reception.getLocationId();
        Long destLocationId = reception.getLocationDestId();

        // Map moveId → qté reçue
        Map<Long, BigDecimal> receivedMap = new HashMap<>();
        if (lignesRecues != null) {
            for (ReceptionBordereauDTO.LigneBordereau l : lignesRecues) {
                if (l.getMoveId() != null && l.getQteRecue() != null) {
                    receivedMap.put(l.getMoveId(), l.getQteRecue());
                }
            }
        }

        for (StockMove move : reception.getMoves()) {
            BigDecimal demanded = move.getQtyDemanded() != null ? move.getQtyDemanded() : ZERO;
            BigDecimal received = receivedMap.getOrDefault(move.getId(), demanded);
            received = received.max(ZERO).min(demanded);
            BigDecimal remainder = demanded.subtract(received);

            // Appliquer la quantité reçue à la destination
            if (received.compareTo(ZERO) > 0) {
                StockLocation destLoc = locationRepo.findById(destLocationId).orElse(null);
                if (destLoc != null && "internal".equals(destLoc.getUsage())) {
                    StockQuant destQ = findOrCreateQuant(move.getProductId(), destLocationId, companyId);
                    // Recalcul CMUP à l'entrée — par entrepôt de destination.
                    Product product = productRepo.findById(move.getProductId()).orElse(null);
                    if (product != null && move.getPriceUnit() != null) {
                        Long destWarehouseId = resolveWarehouseId(destLocationId);
                        if (destWarehouseId != null) {
                            recalcWarehouseCmup(move.getProductId(), destWarehouseId, companyId,
                                    destQ.getQuantity(), received, move.getPriceUnit());
                        }
                    }
                    destQ.setQuantity(destQ.getQuantity().add(received));
                    quantRepo.save(destQ);
                }
            }

            // Renvoyer le reliquat à la source
            if (remainder.compareTo(ZERO) > 0) {
                StockLocation srcLoc = locationRepo.findById(srcLocationId).orElse(null);
                if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                    StockQuant srcQ = findOrCreateQuant(move.getProductId(), srcLocationId, companyId);
                    srcQ.setQuantity(srcQ.getQuantity().add(remainder));
                    quantRepo.save(srcQ);
                }
            }

            move.setQtyDone(received);
            move.setState("done");
        }

        // Écriture comptable
        Long accountMoveId = createStockAccountingEntry(reception);
        reception.setAccountMoveId(accountMoveId);
        reception.setState("done");
        // Date effective = date planifiée du transfert d'origine (respecte l'antidatage) ou maintenant par défaut
        LocalDateTime effectiveDate = reception.getScheduledDate() != null
                ? reception.getScheduledDate().atTime(LocalTime.now())
                : LocalDateTime.now();
        reception.setDateDone(effectiveDate);
        StockPicking savedReception = pickingRepo.save(reception);

        // Marquer le transfert initial comme done (transfert interne local)
        if (reception.getLinkedPickingId() != null) {
            pickingRepo.findById(reception.getLinkedPickingId()).ifPresent(transfer -> {
                transfer.setState("done");
                transfer.setDateDone(effectiveDate);
                pickingRepo.save(transfer);
            });
        }

        // Si réception inter-agences : notifier l'expéditeur pour mettre son expédition à done
        if (savedReception.isTransferReception() && savedReception.getRemoteAgencyId() != null) {
            notifySenderExpeditionDone(savedReception);
        }

        return toPickingDTO(savedReception, true);
    }

    /**
     * Retourne le bordereau d'une réception inter-dépôts (pour affichage et impression).
     */
    @Transactional(readOnly = true)
    public ReceptionBordereauDTO getTransferBordereau(Long receptionId) {
        StockPicking reception = pickingRepo.findById(receptionId)
                .orElseThrow(() -> new EntityNotFoundException("Réception introuvable: " + receptionId));

        // Nom de l'entrepôt source (émetteur)
        String srcWarehouseName = null;
        if (reception.getLocationId() != null) {
            StockLocation srcLoc = locationRepo.findById(reception.getLocationId()).orElse(null);
            if (srcLoc != null && srcLoc.getWarehouseId() != null) {
                srcWarehouseName = warehouseRepo.findById(srcLoc.getWarehouseId()).map(Warehouse::getName).orElse(null);
            }
        }

        // Nom de l'entrepôt destinataire
        String destWarehouseName = null;
        if (reception.getLocationDestId() != null) {
            StockLocation destLoc = locationRepo.findById(reception.getLocationDestId()).orElse(null);
            if (destLoc != null && destLoc.getWarehouseId() != null) {
                destWarehouseName = warehouseRepo.findById(destLoc.getWarehouseId()).map(Warehouse::getName).orElse(null);
            }
        }

        String operatorName = reception.getUpdatedBy() != null ? reception.getUpdatedBy() : reception.getCreatedBy();

        List<ReceptionBordereauDTO.LigneBordereau> lignes = reception.getMoves().stream()
                .map(m -> ReceptionBordereauDTO.LigneBordereau.builder()
                        .moveId(m.getId())
                        .productCode(m.getProductCode())
                        .productName(m.getProductName())
                        .prixUnitaire(m.getPriceUnit())
                        .qteCommandee(m.getQtyDemanded())
                        .qteRecue(m.getQtyDone() != null ? m.getQtyDone() : ZERO)
                        .reste(m.getQtyDemanded() != null && m.getQtyDone() != null
                                ? m.getQtyDemanded().subtract(m.getQtyDone()).max(ZERO) : ZERO)
                        .build())
                .collect(Collectors.toList());

        return ReceptionBordereauDTO.builder()
                .pickingId(reception.getId())
                .pickingName(reception.getName())
                .invoiceRef(reception.getOrigin())
                .supplierName(srcWarehouseName)
                .invoiceDate(reception.getScheduledDate())
                .companyId(reception.getCompanyId())
                .warehouseName(destWarehouseName)
                .operatorName(operatorName)
                .state(reception.getState())
                .dateDone(reception.getDateDone())
                .lignes(lignes)
                .build();
    }

    // ============================================================
    // STOCK QUANTS
    // ============================================================

    @Transactional(readOnly = true)
    public List<StockQuantDTO> getQuants(Long companyId, Long locationId, Long productId) {
        List<StockQuant> quants;
        if (locationId != null && productId != null) {
            // Filtre précis : produit + emplacement — cas de la dispo dans l'expédition
            quants = quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(productId, locationId, companyId)
                    .map(List::of).orElse(List.of());
        } else if (locationId != null) {
            quants = quantRepo.findByLocationIdAndCompanyId(locationId, companyId);
        } else if (productId != null) {
            quants = quantRepo.findByProductIdAndCompanyId(productId, companyId);
        } else {
            // Uniquement les emplacements de stock réels (internal/transit) : les emplacements
            // virtuels (fournisseur, client) n'ont pas vocation à porter un quant, mais si l'un
            // en portait un par accident, on ne veut pas le compter comme stock disponible.
            Set<Long> stockLocIds = locationRepo.findInternalAndTransit(companyId).stream()
                    .map(StockLocation::getId).collect(Collectors.toSet());
            quants = quantRepo.findAllByCompanyId(companyId).stream()
                    .filter(q -> stockLocIds.contains(q.getLocationId()))
                    .collect(Collectors.toList());
        }
        return mapQuantsBatched(quants);
    }

    /** Précharge produits/emplacements/catégories par lot (findAllById) + CMUP mémoïsé par couple
     *  (produit, entrepôt) au lieu d'une requête par quant — sur l'écran "stock disponible" sans
     *  filtre ou le rapport de stock (jusqu'à entrepôts × produits quants d'un coup), l'ancienne
     *  version ramenait 4 requêtes PAR QUANT (produit, emplacement, CMUP, catégorie), soit des
     *  dizaines de milliers de requêtes pour un seul chargement de page. */
    private List<StockQuantDTO> mapQuantsBatched(List<StockQuant> quants) {
        Map<Long, Product> productById = productRepo.findAllById(
                        quants.stream().map(StockQuant::getProductId).filter(java.util.Objects::nonNull).collect(Collectors.toSet()))
                .stream().collect(Collectors.toMap(Product::getId, p -> p));
        Map<Long, StockLocation> locationById = locationRepo.findAllById(
                        quants.stream().map(StockQuant::getLocationId).filter(java.util.Objects::nonNull).collect(Collectors.toSet()))
                .stream().collect(Collectors.toMap(StockLocation::getId, l -> l));
        Set<Long> categoryIds = productById.values().stream()
                .map(Product::getCategoryId).filter(java.util.Objects::nonNull).collect(Collectors.toSet());
        Map<Long, String> categoryNameById = categoryIds.isEmpty() ? Map.of()
                : categoryRepo.findAllById(categoryIds).stream()
                    .collect(Collectors.toMap(com.erp.stock.entity.ProductCategory::getId, com.erp.stock.entity.ProductCategory::getName));
        Map<String, BigDecimal> cmupCache = new HashMap<>();

        return quants.stream().map(q -> toQuantDTO(q, productById, locationById, categoryNameById, cmupCache)).collect(Collectors.toList());
    }

    private StockQuantDTO toQuantDTO(StockQuant q, Map<Long, Product> productById, Map<Long, StockLocation> locationById,
            Map<Long, String> categoryNameById, Map<String, BigDecimal> cmupCache) {
        Product product = productById.get(q.getProductId());
        StockLocation loc = locationById.get(q.getLocationId());
        Long warehouseId = loc != null ? loc.getWarehouseId() : null;
        BigDecimal price = product == null ? ZERO
                : cmupCache.computeIfAbsent(product.getId() + ":" + warehouseId,
                        k -> getWarehouseCmup(product.getId(), warehouseId, product));
        BigDecimal available = q.getQuantity().subtract(q.getReservedQuantity()).max(ZERO);

        Long categoryId = product != null ? product.getCategoryId() : null;
        String categoryName = categoryId != null ? categoryNameById.get(categoryId) : null;

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
                .categoryId(categoryId)
                .categoryName(categoryName)
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
        long nbRecDraft = allPickings.stream().filter(p -> "incoming".equals(p.getPickingTypeCode())
                && !"done".equals(p.getState()) && !"cancelled".equals(p.getState())).count();
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

    public List<StockAdjustmentDTO> createAdjustmentsBulk(List<StockAdjustmentRequest> requests) {
        return requests.stream()
                .map(this::createAdjustment)
                .filter(a -> a.getQtyDiff() != null && a.getQtyDiff().compareTo(ZERO) != 0)
                .collect(Collectors.toList());
    }

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
        if (qtyAfter.compareTo(ZERO) < 0) {
            throw new IllegalArgumentException(
                "Quantité comptée invalide pour " + product.getName() + " : " + qtyAfter.toPlainString()
                + " (une quantité physique ne peut pas être négative)");
        }
        BigDecimal diff = qtyAfter.subtract(qtyBefore);

        if (diff.compareTo(ZERO) == 0) {
            // Pas de différence, on retourne quand même un résultat
            return StockAdjustmentDTO.builder()
                    .productId(product.getId()).productCode(product.getDefaultCode())
                    .productName(product.getName()).uomName(product.getUomName())
                    .locationId(location.getId()).locationName(buildCompleteName(location))
                    .qtyBefore(qtyBefore).qtyAfter(qtyAfter).qtyDiff(ZERO)
                    .unitCost(getWarehouseCmup(product.getId(), location.getWarehouseId(), product)).valueDiff(ZERO)
                    .notes("Aucun écart").companyId(req.getCompanyId())
                    .createdAt(LocalDateTime.now())
                    .build();
        }

        BigDecimal unitCost = getWarehouseCmup(product.getId(), location.getWarehouseId(), product);
        BigDecimal valueDiff = diff.multiply(unitCost).setScale(2, RoundingMode.HALF_UP);
        LocalDate adjDate = req.getDate() != null ? req.getDate() : LocalDate.now();
        fiscalLockGuard.assertPeriodOpen(req.getCompanyId(), adjDate);

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
        Long accountMoveId = createAdjustmentAccountingEntry(product, location, diff, valueDiff, req.getCompanyId(), req.getNotes(), adjDate);

        // Mouvement de stock (visible dans la fiche de stock)
        createAdjustmentStockMove(product, location, diff, unitCost, req.getCompanyId(), req.getNotes(), adjDate);

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

        StockAdjustment savedAdj = adjustmentRepo.save(adj);
        auditService.log("STOCK_ADJUSTMENT", savedAdj.getId(), product.getDefaultCode(),
                "ADJUSTMENT_CREATED", "Ajustement d'inventaire",
                AuditService.details(java.util.Map.of(
                    "avant", qtyBefore.toPlainString(),
                    "après", qtyAfter.toPlainString(),
                    "écart", diff.toPlainString()
                )),
                req.getCompanyId());
        return toAdjustmentDTO(savedAdj);
    }

    /** Emplacement virtuel utilisé comme contrepartie d'un ajustement : d'abord "inventory", sinon
     *  "supplier" (entrée) ou "customer" (sortie). Ces emplacements existent toujours (créés à
     *  l'initialisation). */
    private Long resolveAdjustmentVirtualLocationId(boolean isIncrease) {
        String fallbackUsage = isIncrease ? "supplier" : "customer";
        return locationRepo.findAll().stream()
                .filter(l -> "inventory".equals(l.getUsage()) || fallbackUsage.equals(l.getUsage()))
                .sorted(Comparator.comparingInt(l -> "inventory".equals(l.getUsage()) ? 0 : 1))
                .map(StockLocation::getId)
                .findFirst()
                .orElse(null);
    }

    private void createAdjustmentStockMove(Product product, StockLocation location,
            BigDecimal diff, BigDecimal unitCost, Long companyId, String notes, LocalDate date) {
        try {
            boolean isIncrease = diff.compareTo(ZERO) > 0;
            BigDecimal absDiff = diff.abs();

            Long virtualLocId = resolveAdjustmentVirtualLocationId(isIncrease);

            if (virtualLocId == null) {
                log.warn("Aucun emplacement virtuel trouvé pour l'ajustement du produit {}", product.getName());
                return;
            }

            // Picking type : incoming si augmentation, outgoing si diminution
            String ptCode = isIncrease ? "incoming" : "outgoing";
            List<StockPickingType> pts = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, ptCode);
            Long ptId = pts.isEmpty() ? null : pts.get(0).getId();

            String prefix = "ADJ";
            companyRepo.findByIdForUpdate(companyId);
            Integer maxSeq = pickingRepo.findMaxSeq(companyId, prefix);
            String pickingName = String.format("%s/%05d", prefix, (maxSeq != null ? maxSeq : 0) + 1);

            Long srcLocId  = isIncrease ? virtualLocId     : location.getId();
            Long destLocId = isIncrease ? location.getId() : virtualLocId;

            String description = notes != null && !notes.isBlank()
                    ? notes : "Ajustement inventaire: " + product.getName();

            StockPicking picking = StockPicking.builder()
                    .name(pickingName)
                    .pickingTypeId(ptId != null ? ptId : 1L)
                    .pickingTypeCode(ptCode)
                    .locationId(srcLocId)
                    .locationDestId(destLocId)
                    .state("done")
                    .scheduledDate(date)
                    .dateDone(date.atTime(java.time.LocalTime.now()))
                    .origin(description)
                    .notes(description)
                    .companyId(companyId)
                    .build();

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(absDiff)
                    .qtyDone(absDiff)
                    .priceUnit(unitCost)
                    .locationId(srcLocId)
                    .locationDestId(destLocId)
                    .state("done")
                    .companyId(companyId)
                    .build();

            picking.getMoves().add(move);
            pickingRepo.save(picking);
        } catch (Exception e) {
            log.warn("Impossible de créer le mouvement de stock pour l'ajustement: {}", e.getMessage());
        }
    }

    private Long createAdjustmentAccountingEntry(Product product, StockLocation location,
            BigDecimal diff, BigDecimal valueDiff, Long companyId, String notes, LocalDate date) {
        try {
            Long journalId = resolveStockJournal(companyId);
            Company company = companyRepo.findById(companyId).orElse(null);
            if (journalId == null || company == null) return null;
            AccountJournal journal = journalRepo.findById(journalId).orElse(null);
            if (journal == null) return null;

            // Compte stock (311xxx)
            String stockCode = resolveStockAccountCode(product.getCategoryId(), companyId);
            if (product.getStockAccountCode() != null) stockCode = product.getStockAccountCode();
            AccountAccount stockAccount = accountRepo.findFirstByCodeAndCompanyId(stockCode, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("311000", companyId))
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("311", companyId))
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("31",  companyId))
                    .orElse(null);

            // Compte variation de stocks (603100)
            AccountAccount inventoryLossAccount = accountRepo.findFirstByCodeAndCompanyId("603100", companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("6031", companyId))
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("6032", companyId))
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("603",  companyId))
                    .orElse(null);

            if (stockAccount == null || inventoryLossAccount == null) return null;

            BigDecimal absValue = valueDiff.abs();
            boolean isIncrease = diff.compareTo(ZERO) > 0;
            String description = (notes != null && !notes.isBlank() ? notes : "Ajustement inventaire: " + product.getName());

            AccountMove move = AccountMove.builder()
                    .name("AJ/" + date.getYear() + "/" + System.currentTimeMillis() % 100000)
                    .date(date)
                    .ref(description)
                    .state("posted")
                    .journal(journal)
                    .company(company)
                    .build();

            List<AccountMoveLine> lines = new ArrayList<>();
            // Si augmentation: Dr Stock / Cr Perte inventaire
            // Si diminution:   Dr Perte inventaire / Cr Stock
            lines.add(AccountMoveLine.builder().move(move).account(stockAccount)
                    .name(description).date(date)
                    .debit(isIncrease ? absValue : ZERO)
                    .credit(isIncrease ? ZERO : absValue)
                    .journal(journal).company(company).build());
            lines.add(AccountMoveLine.builder().move(move).account(inventoryLossAccount)
                    .name(description).date(date)
                    .debit(isIncrease ? ZERO : absValue)
                    .credit(isIncrease ? absValue : ZERO)
                    .journal(journal).company(company).build());
            move.setLines(lines);
            return accountMoveRepo.save(move).getId();
        } catch (Exception e) {
            return null;
        }
    }

    // ============================================================
    // TROUS & CASSES (sortie de stock pour marchandises avariées/cassées)
    // ============================================================

    /** Données du bordereau imprimable pour une opération de Trous & Casses. */
    @Transactional(readOnly = true)
    public CasseBordereauDTO getCasseBordereau(Long stockLossId) {
        StockLoss loss = stockLossRepo.findById(stockLossId)
                .orElseThrow(() -> new EntityNotFoundException("Casse introuvable: " + stockLossId));
        Warehouse wh = warehouseRepo.findById(loss.getWarehouseId()).orElse(null);
        Partner partner = loss.getPartnerId() != null ? partnerRepo.findById(loss.getPartnerId()).orElse(null) : null;

        List<CasseBordereauDTO.LigneCasse> lignes = loss.getLines().stream()
                .map(l -> CasseBordereauDTO.LigneCasse.builder()
                        .productCode(l.getProductCode())
                        .productName(l.getDescription())
                        .quantite(l.getQuantity())
                        .unitCost(l.getUnitCost())
                        .montant(l.getMontantTotal())
                        .build())
                .collect(Collectors.toList());

        return CasseBordereauDTO.builder()
                .stockLossId(loss.getId()).name(loss.getName()).date(loss.getDate())
                .warehouseName(wh != null ? wh.getName() : null)
                .partnerName(partner != null ? partner.getName() : null)
                .notes(loss.getNotes()).totalValue(loss.getTotalValue())
                .operatorName(loss.getCreatedBy())
                .companyId(loss.getCompanyId())
                .lignes(lignes)
                .build();
    }

    @Transactional(readOnly = true)
    public List<StockLossDTO> getStockLosses(Long companyId, LocalDate dateFrom, LocalDate dateTo) {
        List<StockLoss> losses = (dateFrom != null && dateTo != null)
                ? stockLossRepo.findByCompanyIdAndDateBetweenOrderByDateAsc(companyId, dateFrom, dateTo)
                : stockLossRepo.findByCompanyIdOrderByDateDesc(companyId);
        return losses.stream().map(this::toStockLossDTO).collect(Collectors.toList());
    }

    private record ResolvedLossLine(Product product, BigDecimal qty, BigDecimal unitCost, BigDecimal montant) {}

    /**
     * Sortie de stock pour marchandises avariées/cassées (Trous &amp; Casses), à destination d'un
     * client/tiers (traçabilité uniquement, aucune facturation générée).
     * Écriture comptable unique : Dr 659300 (charge exceptionnelle) / Cr 6031 (variation de
     * stocks), pour la valeur totale (Σ quantité × CMUP) — pas de ligne par article.
     */
    public StockLossDTO createStockLoss(StockLossRequest req) {
        Long companyId = req.getCompanyId();
        Warehouse warehouse = warehouseRepo.findById(req.getWarehouseId())
                .orElseThrow(() -> new EntityNotFoundException("Entrepôt introuvable: " + req.getWarehouseId()));
        if (warehouse.getStockLocationId() == null) {
            throw new IllegalStateException("Cet entrepôt n'a pas d'emplacement de stock configuré");
        }
        Long srcLocId = warehouse.getStockLocationId();

        Partner partner = req.getPartnerId() != null
                ? partnerRepo.findById(req.getPartnerId()).orElse(null) : null;

        if (req.getLines() == null || req.getLines().isEmpty()) {
            throw new IllegalArgumentException("Aucun article renseigné");
        }
        LocalDate date = req.getDate() != null ? req.getDate() : LocalDate.now();
        fiscalLockGuard.assertPeriodOpen(companyId, date);

        // Résoudre les articles et vérifier le stock disponible AVANT toute décrémentation
        // (un trou/casse ne peut jamais faire passer le stock en négatif).
        List<ResolvedLossLine> resolved = new ArrayList<>();
        for (StockLossRequest.LineRequest lr : req.getLines()) {
            Product product = lr.getProductId() != null
                    ? productRepo.findById(lr.getProductId()).orElse(null)
                    : (lr.getProductCode() != null && !lr.getProductCode().isBlank()
                        ? productRepo.findFirstByDefaultCodeAndCompanyId(lr.getProductCode(), companyId).orElse(null)
                        : null);
            if (product == null) {
                throw new EntityNotFoundException("Article introuvable: "
                        + (lr.getProductCode() != null ? lr.getProductCode() : lr.getProductId()));
            }
            BigDecimal qty = lr.getQuantity() != null ? lr.getQuantity() : ZERO;
            if (qty.compareTo(ZERO) <= 0) {
                throw new IllegalArgumentException("Quantité invalide pour " + product.getName());
            }
            BigDecimal available = quantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), srcLocId, companyId)
                    .map(StockQuant::getQuantity).orElse(ZERO);
            if (qty.compareTo(available) > 0) {
                throw new IllegalStateException("Stock insuffisant pour \"" + product.getName() + "\" dans "
                        + warehouse.getName() + " : " + available.setScale(0, RoundingMode.HALF_UP)
                        + " en stock, " + qty.setScale(0, RoundingMode.HALF_UP) + " à sortir");
            }
            BigDecimal unitCost = getWarehouseCmup(product.getId(), warehouse.getId(), product);
            BigDecimal montant = qty.multiply(unitCost).setScale(2, RoundingMode.HALF_UP);
            resolved.add(new ResolvedLossLine(product, qty, unitCost, montant));
        }

        // Décrémenter le stock
        for (ResolvedLossLine rl : resolved) {
            StockQuant quant = findOrCreateQuant(rl.product().getId(), srcLocId, companyId);
            quant.setQuantity(quant.getQuantity().subtract(rl.qty()));
            quantRepo.save(quant);
        }

        BigDecimal totalValue = resolved.stream().map(ResolvedLossLine::montant).reduce(ZERO, BigDecimal::add);

        String description = "Casse/Avarie " + warehouse.getName()
                + (partner != null ? " - " + partner.getName() : "")
                + (req.getNotes() != null && !req.getNotes().isBlank() ? " (" + req.getNotes() + ")" : "");

        createStockLossPicking(resolved, srcLocId, companyId, description, date);
        Long accountMoveId = createStockLossAccountingEntry(totalValue, companyId, description, date);

        long seq = stockLossRepo.countByCompanyId(companyId) + 1;
        StockLoss loss = StockLoss.builder()
                .name(String.format("CASSE/%05d", seq))
                .date(date)
                .warehouseId(warehouse.getId())
                .partnerId(partner != null ? partner.getId() : null)
                .notes(req.getNotes())
                .totalValue(totalValue)
                .accountMoveId(accountMoveId)
                .companyId(companyId)
                .createdBy(auditService.getCurrentUsername())
                .build();

        List<StockLossLine> lines = resolved.stream().map(rl -> StockLossLine.builder()
                .stockLoss(loss)
                .productId(rl.product().getId())
                .productCode(rl.product().getDefaultCode())
                .description(rl.product().getName())
                .quantity(rl.qty())
                .unitCost(rl.unitCost())
                .montantTotal(rl.montant())
                .build()).collect(Collectors.toList());
        loss.setLines(lines);

        StockLoss saved = stockLossRepo.save(loss);
        auditService.log("STOCK_LOSS", saved.getId(), saved.getName(),
                "STOCK_LOSS_CREATED", "Trous & casses",
                AuditService.details(java.util.Map.of(
                        "valeur", totalValue.toPlainString(),
                        "entrepot", warehouse.getName())),
                companyId);

        StockLossDTO result = toStockLossDTO(saved);
        syncEventPublisher.publish(SyncEventType.STOCK_LOSS_CREATED, String.valueOf(saved.getId()), result);
        return result;
    }

    private void createStockLossPicking(List<ResolvedLossLine> lines, Long srcLocId, Long companyId,
                                         String description, LocalDate date) {
        try {
            Long virtualLocId = resolveAdjustmentVirtualLocationId(false);
            if (virtualLocId == null) {
                log.warn("Aucun emplacement virtuel trouvé pour la casse de stock");
                return;
            }
            List<StockPickingType> pts = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "outgoing");
            Long ptId = pts.isEmpty() ? null : pts.get(0).getId();

            companyRepo.findByIdForUpdate(companyId);
            Integer maxSeq = pickingRepo.findMaxSeq(companyId, "CASSE");
            String pickingName = String.format("CASSE/%05d", (maxSeq != null ? maxSeq : 0) + 1);

            StockPicking picking = StockPicking.builder()
                    .name(pickingName)
                    .pickingTypeId(ptId != null ? ptId : 1L)
                    .pickingTypeCode("outgoing")
                    .locationId(srcLocId)
                    .locationDestId(virtualLocId)
                    .state("done")
                    .scheduledDate(date)
                    .dateDone(date.atTime(java.time.LocalTime.now()))
                    .origin(description)
                    .notes(description)
                    .companyId(companyId)
                    .build();

            for (ResolvedLossLine rl : lines) {
                StockMove move = StockMove.builder()
                        .picking(picking)
                        .productId(rl.product().getId())
                        .productCode(rl.product().getDefaultCode())
                        .productName(rl.product().getName())
                        .uomName(rl.product().getUomName())
                        .qtyDemanded(rl.qty())
                        .qtyDone(rl.qty())
                        .priceUnit(rl.unitCost())
                        .locationId(srcLocId)
                        .locationDestId(virtualLocId)
                        .state("done")
                        .companyId(companyId)
                        .build();
                picking.getMoves().add(move);
            }
            pickingRepo.save(picking);
        } catch (Exception e) {
            log.warn("Impossible de créer le mouvement de stock pour la casse: {}", e.getMessage());
        }
    }

    private Long createStockLossAccountingEntry(BigDecimal totalValue, Long companyId,
                                                 String description, LocalDate date) {
        if (totalValue.compareTo(ZERO) == 0) return null;
        try {
            Long journalId = resolveStockJournal(companyId);
            Company company = companyRepo.findById(companyId).orElse(null);
            if (journalId == null || company == null) return null;
            AccountJournal journal = journalRepo.findById(journalId).orElse(null);
            if (journal == null) return null;

            AccountAccount lossAccount = findOrCreateAccount("659300",
                    "Charges exceptionnelles diverses - Pertes et casses de stock", "expense",
                    companyId, journal, company);
            AccountAccount stockVariationAccount = findOrCreateAccount("603100",
                    "Variation de stocks de marchandises", "expense", companyId, journal, company);

            AccountMove move = AccountMove.builder()
                    .name("CASSE/" + date.getYear() + "/" + System.currentTimeMillis() % 100000)
                    .date(date)
                    .ref(description)
                    .state("posted")
                    .journal(journal)
                    .company(company)
                    .build();

            List<AccountMoveLine> moveLines = new ArrayList<>();
            moveLines.add(AccountMoveLine.builder().move(move).account(lossAccount)
                    .name(description).date(date)
                    .debit(totalValue).credit(ZERO)
                    .journal(journal).company(company).build());
            moveLines.add(AccountMoveLine.builder().move(move).account(stockVariationAccount)
                    .name(description).date(date)
                    .debit(ZERO).credit(totalValue)
                    .journal(journal).company(company).build());
            move.setLines(moveLines);
            return accountMoveRepo.save(move).getId();
        } catch (Exception e) {
            log.warn("Impossible de créer l'écriture comptable de la casse: {}", e.getMessage());
            return null;
        }
    }

    private StockLossDTO toStockLossDTO(StockLoss loss) {
        Warehouse wh = warehouseRepo.findById(loss.getWarehouseId()).orElse(null);
        Partner partner = loss.getPartnerId() != null ? partnerRepo.findById(loss.getPartnerId()).orElse(null) : null;
        String moveName = loss.getAccountMoveId() != null
                ? accountMoveRepo.findById(loss.getAccountMoveId()).map(AccountMove::getName).orElse(null) : null;
        List<StockLossDTO.LineDTO> lineDTOs = loss.getLines().stream().map(l -> StockLossDTO.LineDTO.builder()
                        .id(l.getId()).productId(l.getProductId()).productCode(l.getProductCode())
                        .description(l.getDescription()).quantity(l.getQuantity())
                        .unitCost(l.getUnitCost()).montantTotal(l.getMontantTotal())
                        .build())
                .collect(Collectors.toList());
        return StockLossDTO.builder()
                .id(loss.getId()).name(loss.getName()).date(loss.getDate())
                .warehouseId(loss.getWarehouseId()).warehouseName(wh != null ? wh.getName() : null)
                .partnerId(loss.getPartnerId()).partnerName(partner != null ? partner.getName() : null)
                .notes(loss.getNotes()).totalValue(loss.getTotalValue())
                .accountMoveId(loss.getAccountMoveId()).accountMoveName(moveName)
                .companyId(loss.getCompanyId()).lines(lineDTOs)
                .createdBy(loss.getCreatedBy()).createdAt(loss.getCreatedAt())
                .build();
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
        return mapQuantsBatched(quantRepo.findAllWithStock(companyId));
    }

    @Transactional(readOnly = true)
    public List<StockMoveDTO> getMovements(Long companyId, Long productId,
                                           LocalDateTime dateFrom, LocalDateTime dateTo, int limit) {
        List<StockMove> moves;
        if (productId != null) {
            moves = moveRepo.findDoneByProduct(productId, companyId);
        } else if (dateFrom != null && dateTo != null) {
            moves = moveRepo.findDoneByCompanyBetween(companyId, dateFrom, dateTo, PageRequest.of(0, limit));
        } else if (dateFrom != null) {
            moves = moveRepo.findDoneByCompanyFrom(companyId, dateFrom, PageRequest.of(0, limit));
        } else if (dateTo != null) {
            moves = moveRepo.findDoneByCompanyTo(companyId, dateTo, PageRequest.of(0, limit));
        } else {
            moves = moveRepo.findAllDoneByCompany(companyId, PageRequest.of(0, limit));
        }
        return moves.stream().map(m -> toMoveDTO(m, m.getPicking())).collect(Collectors.toList());
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
                .companyId(SecurityUtils.currentCompanyId()).active(true)
                .build();
        return toAgencyDTO(agencyRepo.save(agency));
    }

    public AgencyDTO updateAgency(Long id, AgencyDTO dto) {
        Agency agency = agencyRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Agence introuvable: " + id));
        tenantGuard.check(agency.getCompanyId());
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
    // EXPÉDITIONS INTER-AGENCES (agences distantes via API)
    // ============================================================

    /** Trouve le Magasin Principal (celui qui a un dépôt achat lié), sinon retourne le premier. */
    private Warehouse findMainWarehouse(List<Warehouse> warehouses) {
        if (warehouses.isEmpty()) return null;
        return warehouses.stream()
                .filter(w -> w.getDepotAchatWarehouseId() != null)
                .findFirst()
                .orElse(warehouses.get(0));
    }

    @Transactional(readOnly = true)
    public List<StockPickingDTO> getInterCompanyExpeditions(Long companyId) {
        return pickingRepo.findInterCompanyByCompany(companyId)
                .stream().map(p -> toPickingDTO(p, false)).collect(Collectors.toList());
    }

    public StockPickingDTO createInterCompanyExpedition(StockPickingRequest req) {
        if (req.getRemoteAgencyId() == null)
            throw new IllegalArgumentException("L'agence distante destinataire est obligatoire");

        RemoteAgency remoteAgency = remoteAgencyRepo.findById(req.getRemoteAgencyId())
                .orElseThrow(() -> new EntityNotFoundException("Agence distante introuvable"));

        Long srcLocationId = req.getLocationId();
        if (srcLocationId == null) {
            List<Warehouse> srcWhs = warehouseRepo.findByCompanyIdAndActiveTrue(req.getCompanyId());
            if (srcWhs.isEmpty()) throw new IllegalStateException("Aucun entrepôt configuré pour l'entreprise source");
            Warehouse srcMain = findMainWarehouse(srcWhs);
            srcLocationId = srcMain != null ? srcMain.getStockLocationId() : null;
            if (srcLocationId == null) throw new IllegalStateException("Magasin Principal introuvable");
        }

        if (req.getLocationDestId() == null)
            throw new IllegalArgumentException("L'emplacement de destination est obligatoire pour une expédition inter-agences");

        Integer count = pickingRepo.countInterCompanyByCompany(req.getCompanyId());
        String name = String.format("IC/%05d", (count != null ? count : 0) + 1);

        final Long finalSrcLocId  = srcLocationId;
        final Long finalDestLocId = req.getLocationDestId();

        List<StockPickingType> outgoingPts = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(req.getCompanyId(), "outgoing");
        if (outgoingPts.isEmpty())
            throw new IllegalStateException("Aucun type d'opération 'Sortie' configuré pour cette entreprise");

        StockPicking picking = StockPicking.builder()
                .name(name)
                .pickingTypeId(outgoingPts.get(0).getId())
                .pickingTypeCode("inter_company")
                .locationId(finalSrcLocId)
                .locationDestId(req.getLocationDestId())
                .partnerName(remoteAgency.getName())
                .state("draft")
                .scheduledDate(req.getScheduledDate())
                .origin(req.getOrigin())
                .notes(req.getNotes())
                .remoteAgencyId(req.getRemoteAgencyId())
                .companyId(req.getCompanyId())
                .build();

        if (req.getMoves() != null) {
            for (StockPickingRequest.MoveRequest mr : req.getMoves()) {
                Product product = productRepo.findById(mr.getProductId())
                        .orElseThrow(() -> new EntityNotFoundException("Produit introuvable: " + mr.getProductId()));
                StockMove move = StockMove.builder()
                        .picking(picking)
                        .productId(product.getId())
                        .productCode(product.getDefaultCode())
                        .productName(product.getName())
                        .uomName(product.getUomName())
                        .qtyDemanded(mr.getQtyDemanded())
                        .qtyDone(mr.getQtyDone() != null ? mr.getQtyDone() : mr.getQtyDemanded())
                        .priceUnit(mr.getPriceUnit() != null ? mr.getPriceUnit()
                                : getWarehouseCmup(product.getId(), resolveWarehouseId(finalSrcLocId), product))
                        .locationId(finalSrcLocId)
                        .locationDestId(finalDestLocId)
                        .state("draft")
                        .companyId(req.getCompanyId())
                        .build();
                picking.getMoves().add(move);
            }
        }

        return toPickingDTO(pickingRepo.save(picking), true);
    }

    public StockPickingDTO updateInterCompanyExpedition(Long id, StockPickingRequest req) {
        StockPicking p = pickingRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Expédition introuvable: " + id));
        tenantGuard.check(p.getCompanyId());
        if (!"draft".equals(p.getState()))
            throw new IllegalStateException("Seules les expéditions en brouillon peuvent être modifiées");

        if (req.getScheduledDate() != null) p.setScheduledDate(req.getScheduledDate());
        if (req.getNotes() != null) p.setNotes(req.getNotes());
        if (req.getOrigin() != null) p.setOrigin(req.getOrigin());
        if (req.getLocationId() != null) p.setLocationId(req.getLocationId());

        if (req.getMoves() != null) {
            p.getMoves().clear();
            for (StockPickingRequest.MoveRequest mr : req.getMoves()) {
                Product product = productRepo.findById(mr.getProductId())
                        .orElseThrow(() -> new EntityNotFoundException("Produit introuvable: " + mr.getProductId()));
                StockMove move = StockMove.builder()
                        .picking(p)
                        .productId(product.getId())
                        .productCode(product.getDefaultCode())
                        .productName(product.getName())
                        .uomName(product.getUomName())
                        .qtyDemanded(mr.getQtyDemanded())
                        .qtyDone(mr.getQtyDone() != null ? mr.getQtyDone() : mr.getQtyDemanded())
                        .priceUnit(mr.getPriceUnit() != null ? mr.getPriceUnit()
                                : getWarehouseCmup(product.getId(), resolveWarehouseId(p.getLocationId()), product))
                        .locationId(p.getLocationId())
                        .locationDestId(p.getLocationDestId())
                        .state("draft")
                        .companyId(p.getCompanyId())
                        .build();
                p.getMoves().add(move);
            }
        }
        return toPickingDTO(pickingRepo.save(p), true);
    }

    public StockPickingDTO validateInterCompanyExpedition(Long id) {
        StockPicking picking = pickingRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Expédition introuvable: " + id));
        tenantGuard.check(picking.getCompanyId());
        if ("done".equals(picking.getState())) throw new IllegalStateException("Cette expédition est déjà validée");
        if ("cancelled".equals(picking.getState())) throw new IllegalStateException("Cette expédition est annulée");
        if ("pending_reception".equals(picking.getState())) throw new IllegalStateException("Cette expédition est déjà en attente de réception");
        if (!"inter_company".equals(picking.getPickingTypeCode()))
            throw new IllegalStateException("Ce picking n'est pas une expédition inter-agences");

        List<StockMove> moves = picking.getMoves();
        if (moves.isEmpty()) throw new IllegalStateException("Aucune ligne à valider");

        // Vérifier le stock ET déduire immédiatement (réservation = destock physique)
        for (StockMove move : moves) {
            BigDecimal qty = move.getQtyDone();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;
            Product product = productRepo.findById(move.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Produit introuvable: " + move.getProductId()));
            StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
            if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                StockQuant srcQuant = findOrCreateQuant(move.getProductId(), move.getLocationId(), picking.getCompanyId());
                if (srcQuant.getQuantity().compareTo(qty) < 0)
                    throw new IllegalStateException("Stock insuffisant pour " + product.getName()
                            + " (disponible: " + srcQuant.getQuantity().toPlainString() + ")");
                // Destock immédiat dès la validation (l'émetteur n'a plus ce stock)
                srcQuant.setQuantity(srcQuant.getQuantity().subtract(qty));
                quantRepo.save(srcQuant);
            }
            move.setState("confirmed");
        }

        picking.setState("pending_reception");
        StockPicking saved = pickingRepo.save(picking);

        // Notifier l'agence distante (non-bloquant : si elle est injoignable, l'expédition reste validée)
        notifyRemoteAgency(saved);

        return toPickingDTO(saved, true);
    }

    private void notifyRemoteAgency(StockPicking picking) {
        if (picking.getRemoteAgencyId() == null) return;
        RemoteAgency agency = remoteAgencyRepo.findById(picking.getRemoteAgencyId()).orElse(null);
        if (agency == null || !agency.isActive() || agency.getApiKey() == null) return;

        try {
            String myName  = companyRepo.findAll().stream().findFirst().map(c -> c.getName()).orElse("Spoke");
            String myCode  = interAgencyKeyService.getSpokeCode();

            InterAgencyTransferPayload payload = InterAgencyTransferPayload.builder()
                    .expeditionRef(picking.getName())
                    .senderAgencyName(myName)
                    .senderAgencyCode(myCode)
                    .scheduledDate(picking.getScheduledDate())
                    .origin(picking.getOrigin())
                    .notes(picking.getNotes())
                    .lines(picking.getMoves().stream()
                            .filter(m -> m.getQtyDone() != null && m.getQtyDone().compareTo(ZERO) > 0)
                            .map(m -> InterAgencyTransferPayload.Line.builder()
                                    .productCode(m.getProductCode())
                                    .productName(m.getProductName())
                                    .uomName(m.getUomName())
                                    .qtyExpedied(m.getQtyDone())
                                    .priceUnit(m.getPriceUnit())
                                    .build())
                            .collect(java.util.stream.Collectors.toList()))
                    .build();

            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Api-Key", agency.getApiKey());
            headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);
            HttpEntity<InterAgencyTransferPayload> entity = new HttpEntity<>(payload, headers);
            restTemplate.exchange(agency.getBaseUrl() + "/api/inter-agency/receptions",
                    HttpMethod.POST, entity, String.class);

            log.info("Agence {} notifiée de l'expédition {}", agency.getName(), picking.getName());
        } catch (Exception e) {
            log.warn("Impossible de notifier l'agence distante {} : {}", agency.getName(), e.getMessage());
        }
    }

    public StockPickingDTO confirmInterCompanyReception(Long id) {
        StockPicking picking = pickingRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Expédition introuvable: " + id));
        tenantGuard.check(picking.getCompanyId());
        if (!"pending_reception".equals(picking.getState()))
            throw new IllegalStateException("Cette expédition n'est pas en attente de réception");
        fiscalLockGuard.assertPeriodOpen(picking.getCompanyId(),
                picking.getScheduledDate() != null ? picking.getScheduledDate() : LocalDate.now());

        List<StockMove> moves = picking.getMoves();

        for (StockMove move : moves) {
            BigDecimal qty = move.getQtyDone();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;

            Product product = productRepo.findById(move.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Produit introuvable: " + move.getProductId()));

            Long destLocId = move.getLocationDestId();
            if (destLocId == null) destLocId = picking.getLocationDestId();

            // ── Valorisation positive (entrée en stock) ──────────────────────
            BigDecimal price = move.getPriceUnit() != null ? move.getPriceUnit()
                    : getWarehouseCmup(move.getProductId(), resolveWarehouseId(destLocId), product);

            // ── Entrée de stock dans l'entrepôt de destination ──────────────
            StockLocation destLoc = destLocId != null ? locationRepo.findById(destLocId).orElse(null) : null;
            if (destLoc != null && "internal".equals(destLoc.getUsage())) {
                StockQuant destQuant = findOrCreateQuant(move.getProductId(), destLocId, picking.getCompanyId());
                // Recalcul CMUP à l'entrée — par entrepôt de destination (cf. confirmTransferReception,
                // sans quoi une réception inter-agences ne fait jamais évoluer le coût moyen pondéré).
                Long destWarehouseId = resolveWarehouseId(destLocId);
                if (destWarehouseId != null) {
                    recalcWarehouseCmup(move.getProductId(), destWarehouseId, picking.getCompanyId(),
                            destQuant.getQuantity(), qty, price);
                }
                destQuant.setQuantity(destQuant.getQuantity().add(qty));
                quantRepo.save(destQuant);
            }
            valuationRepo.save(ValuationLayer.builder()
                    .productId(move.getProductId()).moveId(move.getId())
                    .quantity(qty)                                             // positif = entrée
                    .unitCost(price)
                    .value(qty.multiply(price).setScale(2, RoundingMode.HALF_UP))
                    .locationId(destLocId)                                     // destination, pas source
                    .description(picking.getName() + " (réception inter-agences) - " + product.getName())
                    .companyId(picking.getCompanyId())
                    .build());

            move.setState("done");
        }

        // ── Écriture comptable d'entrée (réception de marchandises) ─────────
        Long accountMoveId = createInterCompanyAccountingEntry(picking, picking.getCompanyId(), "incoming");
        picking.setAccountMoveId(accountMoveId);

        // Date effective = date planifiée de l'expédition (respecte l'antidatage) ou maintenant par défaut
        LocalDateTime effectiveDate = picking.getScheduledDate() != null
                ? picking.getScheduledDate().atTime(LocalTime.now())
                : LocalDateTime.now();

        picking.setState("done");
        picking.setDateDone(effectiveDate);
        StockPicking savedPicking = pickingRepo.save(picking);

        // Si c'est une REC-IC (côté destinataire) : notifier l'expéditeur pour marquer son IC comme done
        String senderNotifyWarning = null;
        if (savedPicking.isTransferReception() && savedPicking.getRemoteAgencyId() != null) {
            senderNotifyWarning = notifySenderExpeditionDone(savedPicking);
        }

        StockPickingDTO dto = toPickingDTO(savedPicking, true);
        dto.setSenderNotifyWarning(senderNotifyWarning);
        return dto;
    }

    private Long createInterCompanyAccountingEntry(StockPicking picking, Long companyId, String direction) {
        try {
            Long journalId = resolveStockJournal(companyId);
            if (journalId == null) return null;
            Company company = companyRepo.findById(companyId).orElse(null);
            if (company == null) return null;
            AccountJournal journal = journalRepo.findById(journalId).orElse(null);
            if (journal == null) return null;

            LocalDate icDate = picking.getScheduledDate() != null ? picking.getScheduledDate() : LocalDate.now();

            List<AccountMoveLine> lines = new ArrayList<>();
            BigDecimal totalValue = ZERO;

            for (StockMove move : picking.getMoves()) {
                BigDecimal qty = move.getQtyDone();
                if (qty == null || qty.compareTo(ZERO) <= 0) continue;
                Product product = productRepo.findById(move.getProductId()).orElse(null);
                if (product == null) continue;

                Long costLocId = "incoming".equals(direction) ? move.getLocationDestId() : move.getLocationId();
                BigDecimal price = move.getPriceUnit() != null ? move.getPriceUnit()
                        : getWarehouseCmup(move.getProductId(), resolveWarehouseId(costLocId), product);
                BigDecimal value = qty.multiply(price).setScale(2, RoundingMode.HALF_UP);
                totalValue = totalValue.add(value);

                String stockCode = resolveStockAccountCode(product.getCategoryId(), companyId);
                if (product.getStockAccountCode() != null) stockCode = product.getStockAccountCode();
                AccountAccount stockAccount = findOrCreateAccount(stockCode, "Stock de marchandises", "asset", companyId, journal, company);
                AccountAccount variationAccount = findOrCreateAccount("603100", "Variation de stocks de marchandises", "expense", companyId, journal, company);

                if ("incoming".equals(direction)) {
                    // Dr Stock / Cr 603100
                    lines.add(buildLine(null, stockAccount, product.getName(), icDate, value, ZERO, journal, company));
                    lines.add(buildLine(null, variationAccount, product.getName(), icDate, ZERO, value, journal, company));
                } else {
                    // Dr 603100 / Cr Stock
                    lines.add(buildLine(null, variationAccount, product.getName(), icDate, value, ZERO, journal, company));
                    lines.add(buildLine(null, stockAccount, product.getName(), icDate, ZERO, value, journal, company));
                }
            }

            if (lines.isEmpty() || totalValue.compareTo(ZERO) == 0) return null;

            int year = icDate.getYear();
            Integer maxSeq = accountMoveRepo.findMaxSequenceByJournalAndYear(journalId, year);
            int nextSeq = (maxSeq != null ? maxSeq : 0) + 1;
            String moveName = String.format("IC-%d-%05d", year, nextSeq);

            AccountMove accountMove = AccountMove.builder()
                    .name(moveName).date(icDate).ref(picking.getName())
                    .state("posted").journal(journal).company(company).build();
            for (AccountMoveLine line : lines) line.setMove(accountMove);
            accountMove.setLines(lines);
            return accountMoveRepo.save(accountMove).getId();
        } catch (Exception e) {
            return null;
        }
    }

    /** Retente la notification de l'expéditeur pour une réception déjà validée (state=done) dont
     *  la notification avait échoué au moment de confirmInterCompanyReception. */
    public StockPickingDTO retryNotifySender(Long id) {
        StockPicking picking = pickingRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Réception introuvable: " + id));
        tenantGuard.check(picking.getCompanyId());
        if (!picking.isTransferReception() || picking.getRemoteAgencyId() == null) {
            throw new IllegalStateException("Cette réception n'est pas liée à une agence distante");
        }
        String senderNotifyWarning = notifySenderExpeditionDone(picking);
        StockPickingDTO dto = toPickingDTO(picking, true);
        dto.setSenderNotifyWarning(senderNotifyWarning);
        return dto;
    }

    /** @return null si la notification a réussi, sinon un message explicatif (visible côté admin,
     *  pas seulement dans les logs serveur — un échec réseau ne doit jamais rester silencieux). */
    private String notifySenderExpeditionDone(StockPicking reception) {
        RemoteAgency sender = remoteAgencyRepo.findById(reception.getRemoteAgencyId()).orElse(null);
        if (sender == null) {
            return "Agence expéditrice introuvable dans la configuration locale.";
        }
        if (!sender.isActive()) {
            return "L'agence " + sender.getName() + " est désactivée localement — expéditeur non notifié.";
        }
        if (sender.getApiKey() == null || sender.getApiKey().isBlank()) {
            return "Aucune clé API configurée pour " + sender.getName() + " — expéditeur non notifié.";
        }
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Api-Key", sender.getApiKey());
            headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);
            // La référence IC/XXXXX contient '/', on la passe dans le corps
            HttpEntity<java.util.Map<String, String>> entity = new HttpEntity<>(
                    java.util.Map.of("expeditionRef", reception.getOrigin()), headers);
            restTemplate.exchange(sender.getBaseUrl() + "/api/inter-agency/expeditions/confirm",
                    HttpMethod.POST, entity, String.class);
            log.info("Expéditeur {} notifié : expédition {} réceptionnée", sender.getName(), reception.getOrigin());
            return null;
        } catch (Exception e) {
            String msg = "Impossible de notifier " + sender.getName() + " (" + sender.getBaseUrl() + ") : " + e.getMessage();
            log.warn("Impossible de notifier l'expéditeur de la réception de {} : {}", reception.getOrigin(), e.getMessage());
            return msg;
        }
    }

    private void notifyRemoteAgencyCancellation(StockPicking picking) {
        RemoteAgency agency = remoteAgencyRepo.findById(picking.getRemoteAgencyId()).orElse(null);
        if (agency == null || !agency.isActive() || agency.getApiKey() == null) return;
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Api-Key", agency.getApiKey());
            headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);
            HttpEntity<java.util.Map<String, String>> entity = new HttpEntity<>(
                    java.util.Map.of("expeditionRef", picking.getName()), headers);
            restTemplate.exchange(agency.getBaseUrl() + "/api/inter-agency/receptions/cancel",
                    HttpMethod.POST, entity, String.class);
            log.info("Agence {} notifiée de l'annulation de {}", agency.getName(), picking.getName());
        } catch (Exception e) {
            log.warn("Impossible de notifier l'annulation de {} à l'agence {} : {}", picking.getName(), agency.getName(), e.getMessage());
        }
    }

    /** Sens inverse de notifyRemoteAgencyCancellation : le DESTINATAIRE annule SA réception,
     *  l'expéditeur doit en être informé pour annuler son expédition et récupérer son stock.
     *  @return null si la notification a réussi, sinon un message explicatif (visible côté admin). */
    private String notifySenderExpeditionCancelled(StockPicking reception) {
        RemoteAgency sender = remoteAgencyRepo.findById(reception.getRemoteAgencyId()).orElse(null);
        if (sender == null) {
            return "Agence expéditrice introuvable dans la configuration locale.";
        }
        if (!sender.isActive()) {
            return "L'agence " + sender.getName() + " est désactivée localement — expéditeur non notifié.";
        }
        if (sender.getApiKey() == null || sender.getApiKey().isBlank()) {
            return "Aucune clé API configurée pour " + sender.getName() + " — expéditeur non notifié.";
        }
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Api-Key", sender.getApiKey());
            headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);
            HttpEntity<java.util.Map<String, String>> entity = new HttpEntity<>(
                    java.util.Map.of("expeditionRef", reception.getOrigin()), headers);
            restTemplate.exchange(sender.getBaseUrl() + "/api/inter-agency/expeditions/cancel",
                    HttpMethod.POST, entity, String.class);
            log.info("Expéditeur {} notifié : réception {} annulée", sender.getName(), reception.getOrigin());
            return null;
        } catch (Exception e) {
            String msg = "Impossible de notifier " + sender.getName() + " (" + sender.getBaseUrl() + ") : " + e.getMessage();
            log.warn("Impossible de notifier l'expéditeur de l'annulation de {} : {}", reception.getOrigin(), e.getMessage());
            return msg;
        }
    }

    /**
     * Annule une réception inter-agences en attente (côté destinataire) et notifie l'expéditeur
     * pour qu'il annule son expédition et récupère son stock — pendant qu'annuler via cancelPicking()
     * ne notifiait jamais l'expéditeur, laissant son expédition bloquée indéfiniment en attente.
     */
    public StockPickingDTO cancelInterCompanyReception(Long id) {
        StockPicking picking = pickingRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Réception introuvable: " + id));
        tenantGuard.check(picking.getCompanyId());
        if (!picking.isTransferReception() || !"pending_reception".equals(picking.getState()))
            throw new IllegalStateException("Cette réception n'est pas en attente");
        fiscalLockGuard.assertPeriodOpen(picking.getCompanyId(),
                picking.getScheduledDate() != null ? picking.getScheduledDate() : LocalDate.now());

        picking.getMoves().forEach(m -> m.setState("cancelled"));
        picking.setState("cancelled");
        picking.setCancelledBy(auditService.getCurrentUsername());
        picking.setCancelledAt(LocalDateTime.now());
        StockPicking saved = pickingRepo.save(picking);

        String senderNotifyWarning = null;
        if (saved.getRemoteAgencyId() != null) {
            senderNotifyWarning = notifySenderExpeditionCancelled(saved);
        }

        StockPickingDTO dto = toPickingDTO(saved, true);
        dto.setSenderNotifyWarning(senderNotifyWarning);
        auditService.log("STOCK_PICKING", id, picking.getName(),
                "CANCELLED", "Réception inter-agences annulée", picking.getCompanyId());
        return dto;
    }

    public StockPickingDTO cancelInterCompanyExpedition(Long id) {
        StockPicking picking = pickingRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Expédition introuvable: " + id));
        tenantGuard.check(picking.getCompanyId());
        if ("done".equals(picking.getState()))
            throw new IllegalStateException("Impossible d'annuler une expédition déjà validée");
        fiscalLockGuard.assertPeriodOpen(picking.getCompanyId(),
                picking.getScheduledDate() != null ? picking.getScheduledDate() : LocalDate.now());

        String prevState = picking.getState();

        // Restituer le stock si l'expédition était déjà validée (stock déduit lors de la validation)
        if ("pending_reception".equals(prevState)) {
            for (StockMove move : picking.getMoves()) {
                BigDecimal qty = move.getQtyDone();
                if (qty != null && qty.compareTo(ZERO) > 0) {
                    StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
                    if (srcLoc != null && "internal".equals(srcLoc.getUsage())) {
                        StockQuant srcQ = findOrCreateQuant(move.getProductId(), move.getLocationId(), picking.getCompanyId());
                        srcQ.setQuantity(srcQ.getQuantity().add(qty));
                        quantRepo.save(srcQ);
                    }
                }
            }
        }

        picking.getMoves().forEach(m -> m.setState("cancelled"));
        picking.setState("cancelled");
        StockPicking saved = pickingRepo.save(picking);

        // Notifier le destinataire pour annuler la réception en attente chez lui
        if ("pending_reception".equals(prevState) && saved.getRemoteAgencyId() != null) {
            notifyRemoteAgencyCancellation(saved);
        }

        return toPickingDTO(saved, true);
    }

    // ============================================================
    // HELPERS PRIVÉS
    // ============================================================

    private StockQuant findOrCreateQuant(Long productId, Long locationId, Long companyId) {
        return quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(productId, locationId, companyId)
                .orElseGet(() -> quantRepo.save(StockQuant.builder()
                        .productId(productId).locationId(locationId)
                        .quantity(ZERO).reservedQuantity(ZERO)
                        .companyId(companyId).build()));
    }

    private String generatePickingName(StockPickingType pt, Long companyId) {
        companyRepo.findByIdForUpdate(companyId);
        String prefix = pt.getSequencePrefix() != null ? pt.getSequencePrefix() : pt.getCode().toUpperCase();
        Integer maxSeq = pickingRepo.findMaxSeq(companyId, prefix);
        int next = (maxSeq != null ? maxSeq : 0) + 1;
        return String.format("%s/%05d", prefix, next);
    }

    /** Code de l'entrepôt propriétaire d'un emplacement (via warehouseId, ou en repli via
     *  stockLocationId si l'emplacement n'a pas encore de warehouseId renseigné). Null si
     *  l'emplacement ne correspond à aucun entrepôt ou que celui-ci n'a pas de code configuré. */
    private String resolveWarehouseCode(Long locationId, Long companyId) {
        if (locationId == null) return null;
        StockLocation loc = locationRepo.findById(locationId).orElse(null);
        Long whId = loc != null ? loc.getWarehouseId() : null;
        if (whId == null) {
            whId = warehouseRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                    .filter(w -> locationId.equals(w.getStockLocationId()))
                    .map(Warehouse::getId).findFirst().orElse(null);
        }
        if (whId == null) return null;
        return warehouseRepo.findById(whId).map(Warehouse::getCode).orElse(null);
    }

    /**
     * Crée l'écriture comptable OHADA pour un picking validé.
     * - Réception  : Dr 31xxx / Cr 6031
     * - Livraison  : Dr 6031  / Cr 31xxx
     * - Transfert interne (entre dépôts de la MÊME société) : aucune écriture — le compte de
     *   stock 31xxx n'est pas ventilé par entrepôt, donc les deux jambes (déstockage source +
     *   stockage destination) s'annulaient déjà exactement l'une l'autre ; générer quand même
     *   deux paires d'écritures readable qui se neutralisent n'apportait aucune information et
     *   polluait le journal. Seul le mouvement physique (quants) doit être appliqué.
     *   NB : "inter_company" (entre deux SOCIÉTÉS distinctes) n'est pas concerné — c'est un vrai
     *   transfert de valeur entre entités juridiques séparées, traité ailleurs.
     */
    private Long createStockAccountingEntry(StockPicking picking) {
        if ("internal".equals(picking.getPickingTypeCode())) return null;

        Long journalId = resolveStockJournal(picking.getCompanyId());
        if (journalId == null) return null;

        Company company = companyRepo.findById(picking.getCompanyId()).orElse(null);
        if (company == null) return null;

        AccountJournal journal = journalRepo.findById(journalId).orElse(null);
        if (journal == null) return null;

        LocalDate effectiveDate = picking.getScheduledDate() != null ? picking.getScheduledDate() : LocalDate.now();

        List<AccountMoveLine> lines = new ArrayList<>();
        BigDecimal totalValue = ZERO;

        for (StockMove move : picking.getMoves()) {
            BigDecimal qty = move.getQtyDone();
            if (qty == null || qty.compareTo(ZERO) <= 0) continue;

            Product product = productRepo.findById(move.getProductId()).orElse(null);
            if (product == null) continue;

            Long costLocId = "incoming".equals(picking.getPickingTypeCode()) ? move.getLocationDestId() : move.getLocationId();
            BigDecimal price = move.getPriceUnit() != null ? move.getPriceUnit()
                    : getWarehouseCmup(move.getProductId(), resolveWarehouseId(costLocId), product);
            BigDecimal value = qty.multiply(price).setScale(2, RoundingMode.HALF_UP);
            totalValue = totalValue.add(value);

            String stockCode = resolveStockAccountCode(product.getCategoryId(), picking.getCompanyId());
            if (product.getStockAccountCode() != null) stockCode = product.getStockAccountCode();
            AccountAccount stockAccount = findOrCreateAccount(stockCode, "Stock de marchandises", "asset", picking.getCompanyId(), journal, company);
            AccountAccount variationAccount = findOrCreateAccount("603100", "Variation de stocks de marchandises", "expense", picking.getCompanyId(), journal, company);

            if ("incoming".equals(picking.getPickingTypeCode())) {
                // Dr Stock / Cr 603100
                lines.add(buildLine(null, stockAccount, product.getName(), effectiveDate, value, ZERO, journal, company));
                lines.add(buildLine(null, variationAccount, product.getName(), effectiveDate, ZERO, value, journal, company));

            } else if ("outgoing".equals(picking.getPickingTypeCode())) {
                // Dr 603100 / Cr Stock
                lines.add(buildLine(null, variationAccount, product.getName(), effectiveDate, value, ZERO, journal, company));
                lines.add(buildLine(null, stockAccount, product.getName(), effectiveDate, ZERO, value, journal, company));
            }
            // "internal" (transfert entre dépôts) : aucune écriture — voir garde en tête de méthode.
        }

        if (lines.isEmpty() || totalValue.compareTo(ZERO) == 0) return null;

        // Numéro de pièce
        int year = effectiveDate.getYear();
        String prefix = "STK";
        Integer maxSeq = accountMoveRepo.findMaxSequenceByJournalAndYear(journalId, year);
        int nextSeq = (maxSeq != null ? maxSeq : 0) + 1;
        String moveName = String.format("%s-%d-%05d", prefix, year, nextSeq);

        AccountMove accountMove = AccountMove.builder()
                .name(moveName)
                .date(effectiveDate)
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
        return accountRepo.findFirstByCodeAndCompanyId(code, companyId)
                .map(existing -> {
                    if (!name.equals(existing.getName())) {
                        existing.setName(name);
                        return accountRepo.save(existing);
                    }
                    return existing;
                })
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

    /** Caches optionnels pour toPickingDTO — voir getPickings. Un même cache partagé entre plusieurs
     *  appels sur une liste évite de refaire une requête pour le même type/emplacement/entrepôt/
     *  société déjà résolu par un bon précédent (beaucoup de bons partagent le même entrepôt). */
    private static final class PickingDtoCaches {
        final Map<Long, StockPickingType> pickingTypes = new HashMap<>();
        final Map<Long, StockLocation> locations = new HashMap<>();
        final Map<Long, Warehouse> warehouses = new HashMap<>();
        final Map<Long, String> accountMoveNames = new HashMap<>();
        final Map<Long, String> agencyNames = new HashMap<>();
        final Map<Long, String> remoteAgencyNames = new HashMap<>();
        final Map<Long, String> companyNames = new HashMap<>();
        final Map<Long, String> pickingNames = new HashMap<>();
    }

    private StockPickingDTO toPickingDTO(StockPicking p, boolean withMoves) {
        return toPickingDTO(p, withMoves, null);
    }

    /** id -> valeur, avec ou sans cache partagé (c == null pour un appel isolé hors liste) — un seul
     *  appel au loader dans tous les cas, jamais un doublon comme l'ancienne version en ternaire. */
    private <T> T resolveCached(Long id, Map<Long, T> cache, java.util.function.Function<Long, T> loader) {
        if (id == null) return null;
        return cache != null ? cache.computeIfAbsent(id, loader) : loader.apply(id);
    }

    private StockPickingDTO toPickingDTO(StockPicking p, boolean withMoves, PickingDtoCaches c) {
        StockPickingType pt = resolveCached(p.getPickingTypeId(), c != null ? c.pickingTypes : null,
                id -> pickingTypeRepo.findById(id).orElse(null));
        String ptName = p.getPickingTypeId() != null
                ? (pt != null ? pt.getName() : null)
                : "Expédition inter-agences";

        // Chaque emplacement n'est chargé QU'UNE FOIS (avant : locationRepo.findById appelé deux
        // fois pour la même source, deux fois pour la même destination — nom d'affichage ET
        // entrepôt propriétaire lisaient chacun séparément le même StockLocation).
        StockLocation srcLoc = resolveCached(p.getLocationId(), c != null ? c.locations : null,
                id -> locationRepo.findById(id).orElse(null));
        StockLocation destLoc = resolveCached(p.getLocationDestId(), c != null ? c.locations : null,
                id -> locationRepo.findById(id).orElse(null));
        String srcName = srcLoc != null ? buildCompleteName(srcLoc) : null;
        String destName = destLoc != null ? buildCompleteName(destLoc) : null;

        // Entrepôts source et destination (depuis le warehouseId de l'emplacement déjà chargé ci-dessus)
        Long srcWarehouseId = srcLoc != null ? srcLoc.getWarehouseId() : null;
        Warehouse srcWarehouse = resolveCached(srcWarehouseId, c != null ? c.warehouses : null,
                id -> warehouseRepo.findById(id).orElse(null));
        String srcWarehouseName = srcWarehouse != null ? srcWarehouse.getName() : null;
        Long destWarehouseId = destLoc != null ? destLoc.getWarehouseId() : null;
        Warehouse destWarehouse = resolveCached(destWarehouseId, c != null ? c.warehouses : null,
                id -> warehouseRepo.findById(id).orElse(null));
        String destWarehouseName = destWarehouse != null ? destWarehouse.getName() : null;

        String accountMoveName = resolveCached(p.getAccountMoveId(), c != null ? c.accountMoveNames : null,
                id -> accountMoveRepo.findById(id).map(AccountMove::getName).orElse(null));
        String agencyName = resolveCached(p.getAgencyId(), c != null ? c.agencyNames : null,
                id -> agencyRepo.findById(id).map(Agency::getName).orElse(null));
        String remoteAgencyName = resolveCached(p.getRemoteAgencyId(), c != null ? c.remoteAgencyNames : null,
                id -> remoteAgencyRepo.findById(id).map(RemoteAgency::getName).orElse(null));
        String srcCompanyName = resolveCached(p.getCompanyId(), c != null ? c.companyNames : null,
                id -> companyRepo.findById(id).map(Company::getName).orElse(null));

        // Picking lié (transfert ↔ réception inter-dépôts)
        String linkedPickingName = resolveCached(p.getLinkedPickingId(), c != null ? c.pickingNames : null,
                id -> pickingRepo.findById(id).map(StockPicking::getName).orElse(null));

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
                .sourceWarehouseId(srcWarehouseId).sourceWarehouseName(srcWarehouseName)
                .destWarehouseId(destWarehouseId).destWarehouseName(destWarehouseName)
                .partnerId(p.getPartnerId()).partnerName(p.getPartnerName())
                .state(p.getState())
                .scheduledDate(p.getScheduledDate()).dateDone(p.getDateDone())
                .origin(p.getOrigin()).notes(p.getNotes())
                .accountMoveId(p.getAccountMoveId()).accountMoveName(accountMoveName)
                .agencyId(p.getAgencyId()).agencyName(agencyName)
                .remoteAgencyId(p.getRemoteAgencyId()).remoteAgencyName(remoteAgencyName)
                .companyId(p.getCompanyId()).companyName(srcCompanyName)
                .linkedPickingId(p.getLinkedPickingId()).linkedPickingName(linkedPickingName)
                .transferReception(p.isTransferReception())
                .moves(moveDTOs).totalValue(totalValue)
                .createdAt(p.getCreatedAt())
                .createdBy(p.getCreatedBy())
                .updatedBy(p.getUpdatedBy())
                .updatedAt(p.getUpdatedAt())
                .build();
    }

    private StockMoveDTO toMoveDTO(StockMove m, StockPicking picking) {
        StockLocation srcLoc  = locationRepo.findById(m.getLocationId()).orElse(null);
        StockLocation destLoc = locationRepo.findById(m.getLocationDestId()).orElse(null);
        String srcName  = srcLoc  != null ? buildCompleteName(srcLoc)  : null;
        String destName = destLoc != null ? buildCompleteName(destLoc) : null;

        BigDecimal price = m.getPriceUnit() != null ? m.getPriceUnit() : ZERO;
        BigDecimal qty = m.getQtyDone() != null ? m.getQtyDone() : m.getQtyDemanded();
        BigDecimal subtotal = qty.multiply(price).setScale(2, RoundingMode.HALF_UP);

        Long cid = picking != null ? picking.getCompanyId() : m.getCompanyId();
        BigDecimal available = quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(
                m.getProductId(), m.getLocationId(), cid)
                .map(q -> q.getQuantity().subtract(q.getReservedQuantity()).max(ZERO))
                .orElse(ZERO);

        // Catégorie du produit
        Product product = productRepo.findById(m.getProductId()).orElse(null);
        Long categoryId = product != null ? product.getCategoryId() : null;
        String categoryName = categoryId != null
                ? categoryRepo.findById(categoryId).map(c -> c.getName()).orElse(null)
                : null;

        // Direction réelle depuis les usages d'emplacements (fiable pour déconsignes)
        String srcUsage  = srcLoc  != null ? srcLoc.getUsage()  : null;
        String destUsage = destLoc != null ? destLoc.getUsage() : null;
        String moveDirection;
        if ("internal".equals(destUsage) && ("supplier".equals(srcUsage) || "customer".equals(srcUsage) || "transit".equals(srcUsage))) {
            moveDirection = "incoming";
        } else if ("customer".equals(destUsage) && "internal".equals(srcUsage)) {
            moveDirection = "outgoing";
        } else if ("internal".equals(srcUsage) && "internal".equals(destUsage)) {
            moveDirection = "internal";
        } else {
            // Fallback sur le picking type
            moveDirection = picking != null ? picking.getPickingTypeCode() : "internal";
        }

        return StockMoveDTO.builder()
                .id(m.getId())
                .pickingId(picking != null ? picking.getId() : null)
                .pickingRef(picking != null ? picking.getName() : null)
                .productId(m.getProductId()).productCode(m.getProductCode())
                .productName(m.getProductName()).uomName(m.getUomName())
                .categoryId(categoryId).categoryName(categoryName)
                .qtyDemanded(m.getQtyDemanded()).qtyDone(m.getQtyDone())
                .priceUnit(m.getPriceUnit()).subtotalValue(subtotal)
                .locationId(m.getLocationId()).locationName(srcName)
                .locationDestId(m.getLocationDestId()).locationDestName(destName)
                .state(m.getState()).companyId(m.getCompanyId())
                .pickingTypeCode(picking != null ? picking.getPickingTypeCode() : null)
                .moveDirection(moveDirection)
                .dateDone(picking != null ? picking.getDateDone() : null)
                .partnerName(picking != null ? picking.getPartnerName() : null)
                .availableQty(available)
                .build();
    }
}
