package com.erp.stock.service;

import com.erp.common.repository.CompanyRepository;
import com.erp.config.entity.RemoteAgency;
import com.erp.config.repository.RemoteAgencyRepository;
import com.erp.stock.dto.InterAgencyTransferPayload;
import com.erp.stock.entity.*;
import com.erp.stock.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;

/**
 * Traite les notifications de transfert reçues d'un spoke distant.
 * Crée une réception en attente dans le système local.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class InterAgencyReceptionService {

    private final CompanyRepository        companyRepo;
    private final RemoteAgencyRepository   remoteAgencyRepo;
    private final WarehouseRepository      warehouseRepo;
    private final StockLocationRepository  locationRepo;
    private final ProductValuationService  productValuationService;
    private final StockPickingTypeRepository pickingTypeRepo;
    private final StockPickingRepository   pickingRepo;
    private final ProductRepository        productRepo;
    private final StockQuantRepository     quantRepo;

    @Transactional
    public String createPendingReception(InterAgencyTransferPayload payload) {
        // 1. Trouver la société locale (spoke mono-entreprise → première de la liste)
        var company = companyRepo.findAll().stream().findFirst()
                .orElseThrow(() -> new IllegalStateException("Aucune société configurée"));

        // 1bis. Idempotence : un push HTTP retenté après un timeout/5xx recréerait sinon une
        // réception en double pour la même expédition — ce canal direct inter-agences n'a pas les
        // garanties de l'outbox RabbitMQ (pas de clé de dédoublonnage côté récepteur).
        if (payload.getExpeditionRef() != null && !payload.getExpeditionRef().isBlank()) {
            var existing = pickingRepo.findReceptionsByExpeditionRef(payload.getExpeditionRef()).stream()
                    .filter(p -> company.getId().equals(p.getCompanyId()))
                    .findFirst();
            if (existing.isPresent()) {
                log.info("Réception inter-agences déjà créée pour l'expédition {} : {} (doublon ignoré)",
                        payload.getExpeditionRef(), existing.get().getName());
                return existing.get().getName();
            }
        }

        // 2. Retrouver l'agence émettrice par son code
        RemoteAgency sender = remoteAgencyRepo.findByCode(payload.getSenderAgencyCode())
                .orElse(null);
        String senderName = sender != null ? sender.getName() : payload.getSenderAgencyName();
        Long senderRemoteAgencyId = sender != null ? sender.getId() : null;

        // 3. Trouver le Magasin Principal
        var warehouses = warehouseRepo.findByCompanyIdAndActiveTrue(company.getId());
        Warehouse mainWh = warehouses.stream()
                .filter(w -> w.getDepotAchatWarehouseId() != null)
                .findFirst()
                .orElse(warehouses.isEmpty() ? null : warehouses.get(0));
        if (mainWh == null)
            throw new IllegalStateException("Aucun entrepôt configuré pour recevoir des transferts");

        // 4. Trouver l'emplacement destination (stock principal)
        Long destLocationId = mainWh.getStockLocationId();
        if (destLocationId == null)
            throw new IllegalStateException("Magasin Principal sans emplacement de stock");

        // 5. Trouver un emplacement source virtuel (fournisseurs ou premier dispo)
        Long srcLocationId = locationRepo.findAll().stream()
                .filter(l -> "supplier".equals(l.getUsage()))
                .map(StockLocation::getId)
                .findFirst()
                .orElse(destLocationId);

        // 6. Trouver ou créer le type picking "incoming"
        var incomingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(company.getId(), "incoming");
        Long pickingTypeId = incomingTypes.isEmpty() ? null : incomingTypes.get(0).getId();

        // 7. Numéro de séquence
        Integer count = pickingRepo.countInterCompanyByCompany(company.getId());
        String name = "REC-IC/" + String.format("%05d", (count != null ? count : 0) + 1);

        // 8. Construire le picking de réception
        StockPicking reception = StockPicking.builder()
                .name(name)
                .pickingTypeId(pickingTypeId)
                .pickingTypeCode("inter_company")
                .locationId(srcLocationId)
                .locationDestId(destLocationId)
                .partnerName(senderName)
                .state("pending_reception")
                .scheduledDate(payload.getScheduledDate())
                .origin(payload.getExpeditionRef())
                .notes("Transfert de " + senderName + (payload.getNotes() != null ? " — " + payload.getNotes() : ""))
                .companyId(company.getId())
                .remoteAgencyId(senderRemoteAgencyId)
                .transferReception(true)
                .moves(new ArrayList<>())
                .build();

        // 9. Lignes — match par code article
        if (payload.getLines() != null) {
            for (InterAgencyTransferPayload.Line line : payload.getLines()) {
                Product product = productRepo.findFirstByDefaultCodeAndCompanyId(line.getProductCode(), company.getId()).orElse(null);
                if (product == null) {
                    log.warn("Produit inconnu reçu dans transfert inter-agences : code={}", line.getProductCode());
                    continue;
                }
                StockMove move = StockMove.builder()
                        .picking(reception)
                        .productId(product.getId())
                        .productCode(product.getDefaultCode())
                        .productName(product.getName())
                        .uomName(line.getUomName() != null ? line.getUomName() : product.getUomName())
                        .qtyDemanded(line.getQtyExpedied())
                        .qtyDone(line.getQtyExpedied())
                        .priceUnit(line.getPriceUnit() != null ? line.getPriceUnit()
                                : productValuationService.getWarehouseCmup(product.getId(),
                                        productValuationService.resolveWarehouseId(destLocationId), product))
                        .locationId(srcLocationId)
                        .locationDestId(destLocationId)
                        .state("confirmed")
                        .companyId(company.getId())
                        .build();
                reception.getMoves().add(move);
            }
        }

        StockPicking saved = pickingRepo.save(reception);
        log.info("Réception inter-agences créée : {} ← {} ({})", name, senderName, payload.getExpeditionRef());
        return saved.getName();
    }

    /**
     * Appelé par l'agence destinataire après confirmation de réception.
     * Marque l'expédition locale (côté émetteur) comme done.
     */
    @Transactional
    public void confirmExpeditionByRef(String expeditionRef) {
        pickingRepo.findExpeditionByName(expeditionRef).ifPresent(p -> {
            if ("pending_reception".equals(p.getState())) {
                p.setState("done");
                p.setDateDone(java.time.LocalDateTime.now());
                p.getMoves().forEach(m -> m.setState("done"));
                pickingRepo.save(p);
                log.info("Expédition {} confirmée par callback destinataire", expeditionRef);
            }
        });
    }

    /**
     * Appelé par l'agence expéditrice après annulation.
     * Annule la réception en attente côté destinataire.
     */
    @Transactional
    public void cancelReceptionByExpeditionRef(String expeditionRef) {
        pickingRepo.findReceptionsByExpeditionRef(expeditionRef).stream()
                .filter(p -> "pending_reception".equals(p.getState()))
                .findFirst()
                .ifPresent(p -> {
                    p.setState("cancelled");
                    p.getMoves().forEach(m -> m.setState("cancelled"));
                    pickingRepo.save(p);
                    log.info("Réception annulée par callback expéditeur (ref expédition: {})", expeditionRef);
                });
    }

    /**
     * Appelé par l'agence destinataire après annulation de SA réception (pas par l'expéditeur —
     * voir cancelReceptionByExpeditionRef pour le sens inverse). Marque l'expédition locale
     * (côté émetteur) comme annulée et restitue le stock déduit lors de sa validation, puisque
     * la marchandise n'a en réalité jamais été acceptée par le destinataire.
     */
    @Transactional
    public void cancelExpeditionByRef(String expeditionRef) {
        pickingRepo.findExpeditionByName(expeditionRef).ifPresent(p -> {
            if (!"pending_reception".equals(p.getState())) return;

            for (StockMove move : p.getMoves()) {
                BigDecimal qty = move.getQtyDone();
                if (qty == null || qty.compareTo(BigDecimal.ZERO) <= 0) continue;
                StockLocation srcLoc = locationRepo.findById(move.getLocationId()).orElse(null);
                if (srcLoc == null || !"internal".equals(srcLoc.getUsage())) continue;
                StockQuant quant = quantRepo.findFirstByProductIdAndLocationIdAndCompanyId(
                                move.getProductId(), move.getLocationId(), p.getCompanyId())
                        .orElseGet(() -> StockQuant.builder()
                                .productId(move.getProductId()).locationId(move.getLocationId())
                                .companyId(p.getCompanyId()).quantity(BigDecimal.ZERO).build());
                quant.setQuantity(quant.getQuantity().add(qty));
                quantRepo.save(quant);
            }

            p.setState("cancelled");
            p.getMoves().forEach(m -> m.setState("cancelled"));
            pickingRepo.save(p);
            log.info("Expédition {} annulée par callback destinataire (réception refusée/annulée)", expeditionRef);
        });
    }
}
