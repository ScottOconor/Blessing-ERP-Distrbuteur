package com.erp.purchases.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.ConsigneCodes;
import com.erp.common.entity.Precompte;
import com.erp.common.repository.PrecompteRepository;
import com.erp.purchases.dto.PurchaseInvoiceRequest;
import com.erp.purchases.dto.RemiseDTO;
import com.erp.purchases.dto.RemisePaiementDTO;
import com.erp.purchases.entity.Remise;
import com.erp.purchases.entity.RemisePaiement;
import com.erp.purchases.entity.RemisePaiementLine;
import com.erp.purchases.entity.PurchaseInvoice;
import com.erp.purchases.repository.PurchaseInvoiceRepository;
import com.erp.purchases.repository.RemisePaiementRepository;
import com.erp.purchases.repository.RemiseRepository;
import com.erp.stock.entity.ProductCategory;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class RemiseService {

    private final RemiseRepository remiseRepo;
    private final RemisePaiementRepository paiementRepo;
    private final PartnerRepository partnerRepo;
    private final ProductCategoryRepository categoryRepo;
    private final PurchaseInvoiceRepository purchaseInvoiceRepo;
    private final PrecompteRepository precompteRepo;
    private final ProductRepository productRepo;
    private final AccountJournalRepository journalRepo;
    @Lazy private final PurchaseService purchaseService;

    // ======================== REMISES (configuration) ========================

    @Transactional(readOnly = true)
    public List<RemiseDTO> getAll(Long companyId) {
        return remiseRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<RemiseDTO> getByPartner(Long partnerId, Long companyId) {
        return remiseRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    public RemiseDTO save(RemiseDTO dto) {
        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));
        ProductCategory cat = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));

        Remise entity = remiseRepo.findByPartnerIdAndCategoryIdAndCompanyId(
                dto.getPartnerId(), dto.getCategoryId(), dto.getCompanyId())
                .orElse(Remise.builder().build());
        entity.setPartner(partner);
        entity.setCategory(cat);
        entity.setMontantFixe(dto.getMontantFixe());
        entity.setTypeRemise(dto.getTypeRemise());
        entity.setCompanyId(dto.getCompanyId());
        entity.setActive(true);
        return toDTO(remiseRepo.save(entity));
    }

    public void delete(Long id) {
        Remise r = remiseRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Remise introuvable"));
        r.setActive(false);
        remiseRepo.save(r);
    }

    public int importRemises(List<RemiseImportRow> rows, Long companyId) {
        int count = 0;
        for (RemiseImportRow row : rows) {
            Partner partner = partnerRepo.findByNameIgnoreCaseAndCompanyId(row.getSupplierName(), companyId)
                    .orElse(null);
            if (partner == null) continue;
            ProductCategory cat = categoryRepo.findByNameIgnoreCaseAndCompanyId(row.getCategoryName(), companyId)
                    .orElse(null);
            if (cat == null) continue;

            Remise entity = remiseRepo.findByPartnerIdAndCategoryIdAndCompanyId(
                    partner.getId(), cat.getId(), companyId)
                    .orElse(Remise.builder().build());
            entity.setPartner(partner);
            entity.setCategory(cat);
            entity.setMontantFixe(row.getMontantFixe() != null ? row.getMontantFixe() : java.math.BigDecimal.ZERO);
            entity.setTypeRemise(row.getTypeRemise());
            entity.setCompanyId(companyId);
            entity.setActive(row.getActive() == null || row.getActive());
            remiseRepo.save(entity);
            count++;
        }
        return count;
    }

    @lombok.Data
    public static class RemiseImportRow {
        private String supplierName;
        private String categoryName;
        private String typeRemise;
        private java.math.BigDecimal montantFixe;
        private Boolean active;
    }

    // ======================== REMISE PAIEMENTS ========================

    @Transactional(readOnly = true)
    public List<RemisePaiementDTO> getAllPaiements(Long companyId) {
        return paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream().map(this::toPaiementDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RemisePaiementDTO getPaiement(Long id) {
        return toPaiementDTO(paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable")));
    }

    public RemisePaiementDTO savePaiement(RemisePaiementDTO dto) {
        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        RemisePaiement entity = dto.getId() != null
                ? paiementRepo.findById(dto.getId()).orElse(RemisePaiement.builder().build())
                : RemisePaiement.builder().build();

        if (entity.getId() == null) {
            entity.setName(generateRmsName(dto.getCompanyId()));
        }
        entity.setPartner(partner);
        entity.setDate(dto.getDate() != null ? dto.getDate() : LocalDate.now());
        entity.setState("draft");
        entity.setCompanyId(dto.getCompanyId());
        entity.setNotes(dto.getNotes());

        entity.getLines().clear();
        BigDecimal total = BigDecimal.ZERO;

        if (dto.getLines() != null) {
            for (RemisePaiementDTO.LineDTO lineDto : dto.getLines()) {
                ProductCategory cat = categoryRepo.findById(lineDto.getCategoryId())
                        .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));
                BigDecimal montantTotal = lineDto.getMontantUnitaire()
                        .multiply(lineDto.getQuantite()).setScale(2, RoundingMode.HALF_UP);

                RemisePaiementLine line = RemisePaiementLine.builder()
                        .paiement(entity)
                        .category(cat)
                        .quantite(lineDto.getQuantite())
                        .montantUnitaire(lineDto.getMontantUnitaire())
                        .montantTotal(montantTotal)
                        .build();
                entity.getLines().add(line);
                total = total.add(montantTotal);
            }
        }
        entity.setTotalAmount(total);
        return toPaiementDTO(paiementRepo.save(entity));
    }

    public RemisePaiementDTO confirmPaiement(Long id) {
        RemisePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        if (!"draft".equals(p.getState())) {
            throw new IllegalStateException("Seul un brouillon peut être confirmé");
        }
        p.setState("confirmed");
        return toPaiementDTO(paiementRepo.save(p));
    }

    public RemisePaiementDTO cancelPaiement(Long id) {
        RemisePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        p.setState("cancelled");
        return toPaiementDTO(paiementRepo.save(p));
    }

    /**
     * Génère un règlement remise à partir d'une facture achat.
     * Pour chaque remise active du fournisseur, calcule la quantité achetée par catégorie
     * sur cette facture et crée les lignes correspondantes.
     * Formule :
     *   brasserie  → remiseTTC = montantFixe × qty × (1 + tauxPrécompte/100)
     *   guinness   → remiseTTC = montantFixe × qty
     */
    public RemisePaiementDTO generateFromInvoice(Long invoiceId) {
        PurchaseInvoice invoice = purchaseInvoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new IllegalArgumentException("Facture introuvable"));

        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures validées peuvent générer des règlements");
        }

        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();

        Partner partner = partnerRepo.findById(partnerId)
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyId(partnerId, "purchase", companyId)
                        .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);

        List<Remise> remisesFournisseur = remiseRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId);
        if (remisesFournisseur.isEmpty()) {
            throw new IllegalStateException(
                "Aucune remise configurée pour ce fournisseur. Configurez les remises dans le module Remises.");
        }

        List<RemisePaiementLine> lines = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        for (Remise r : remisesFournisseur) {
            if (r.getMontantFixe() == null) continue;
            Long catId = r.getCategory().getId();

            BigDecimal qty = invoice.getLines().stream()
                    .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode()) && !l.isConsigne()
                            && catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                    .map(l -> l.getQuantity() != null ? l.getQuantity() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            if (qty.compareTo(BigDecimal.ZERO) == 0) continue;

            BigDecimal montantUnit = r.getMontantFixe();
            BigDecimal montantHT = montantUnit.multiply(qty).setScale(2, RoundingMode.HALF_UP);
            // brasserie : HT × (1 + tauxPrécompte/100 + 0.1925) ; guinness et autres : HT × (1 + 0.1925)
            BigDecimal montantTTC;
            if ("brasserie".equals(r.getTypeRemise())) {
                BigDecimal pcRate = tauxPc.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
                BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(BigDecimal.valueOf(0.1925));
                montantTTC = montantHT.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
            } else {
                // guinness et autres : pas de précompte mais TVA 19.25%
                montantTTC = montantHT.multiply(BigDecimal.ONE.add(BigDecimal.valueOf(0.1925))).setScale(2, RoundingMode.HALF_UP);
            }

            lines.add(RemisePaiementLine.builder()
                    .category(r.getCategory())
                    .quantite(qty)
                    .montantUnitaire(montantUnit)
                    .montantTotal(montantTTC)
                    .build());
            total = total.add(montantTTC);
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException(
                "Les remises sont configurées pour ce fournisseur mais aucune ligne de facture ne correspond " +
                "aux catégories configurées. Vérifiez que les produits ont bien une catégorie assignée.");
        }

        RemisePaiement entity = RemisePaiement.builder()
                .name(generateRmsName(companyId))
                .partner(partner)
                .invoice(invoice)
                .date(invoice.getDate())
                .state("draft")
                .companyId(companyId)
                .notes("Généré depuis " + invoice.getName())
                .totalAmount(total)
                .lines(new ArrayList<>())
                .build();

        for (RemisePaiementLine line : lines) {
            line.setPaiement(entity);
            entity.getLines().add(line);
        }

        return toPaiementDTO(paiementRepo.save(entity));
    }

    private Long resolveCategoryId(Long categoryId, String productCode, Long companyId) {
        if (categoryId != null) return categoryId;
        if (productCode != null && !productCode.isBlank() && companyId != null) {
            return productRepo.findFirstByDefaultCodeAndCompanyId(productCode, companyId)
                    .map(com.erp.stock.entity.Product::getCategoryId)
                    .orElse(null);
        }
        return null;
    }

    // ======================== RÈGLEMENTS GROUPÉS ========================

    /** Retourne les règlements confirmés groupés par fournisseur. */
    @Transactional(readOnly = true)
    public List<PartnerGroup> getGroupedPaiements(Long companyId) {
        List<RemisePaiement> confirmed = paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream()
                .filter(p -> "confirmed".equals(p.getState()))
                .collect(Collectors.toList());

        Map<Long, PartnerGroup> byPartner = new LinkedHashMap<>();
        for (RemisePaiement p : confirmed) {
            Long pid = p.getPartner().getId();
            byPartner.computeIfAbsent(pid, id -> new PartnerGroup(
                    id, p.getPartner().getName(), BigDecimal.ZERO, new ArrayList<>()
            ));
            PartnerGroup group = byPartner.get(pid);
            group.getPaiements().add(toPaiementDTO(p));
            group.setTotalAmount(group.getTotalAmount().add(
                    p.getTotalAmount() != null ? p.getTotalAmount() : BigDecimal.ZERO));
        }
        return new ArrayList<>(byPartner.values());
    }

    /**
     * Génère une facture d'achat normale (FA-xxx) regroupant tous les règlements
     * remises confirmés d'une liste de paiementIds pour un fournisseur donné.
     * Chaque ligne = une ligne de règlement remise (catégorie + montantTotal).
     * Marque les règlements comme "done".
     */
    public Map<String, Object> generateFacture(List<Long> paiementIds, Long companyId) {
        if (paiementIds == null || paiementIds.isEmpty()) {
            throw new IllegalArgumentException("Aucun règlement sélectionné");
        }

        List<RemisePaiement> paiements = paiementRepo.findAllById(paiementIds);
        if (paiements.isEmpty()) throw new IllegalArgumentException("Règlements introuvables");

        for (RemisePaiement p : paiements) {
            if (!"confirmed".equals(p.getState())) {
                throw new IllegalStateException(
                    "Seuls les règlements confirmés peuvent être facturés. Problème : " + p.getName());
            }
            if (!companyId.equals(p.getCompanyId())) {
                throw new IllegalArgumentException("Société incohérente sur le règlement " + p.getName());
            }
        }

        Long partnerId = paiements.get(0).getPartner().getId();
        for (RemisePaiement p : paiements) {
            if (!partnerId.equals(p.getPartner().getId())) {
                throw new IllegalArgumentException(
                    "Tous les règlements doivent appartenir au même fournisseur");
            }
        }

        // Trouver le journal d'achats
        Long journalId = journalRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .filter(j -> "purchase".equals(j.getType()))
                .findFirst()
                .map(j -> j.getId())
                .orElseThrow(() -> new IllegalStateException("Aucun journal d'achats trouvé"));

        // Construire les lignes : quantity=1, prixUnitaire=montantTotal (TTC) comme Odoo
        List<PurchaseInvoiceRequest.LineRequest> lines = new ArrayList<>();
        for (RemisePaiement p : paiements) {
            for (RemisePaiementLine l : p.getLines()) {
                BigDecimal montantTTC = l.getMontantTotal() != null ? l.getMontantTotal() : BigDecimal.ZERO;
                lines.add(PurchaseInvoiceRequest.LineRequest.builder()
                        .description("Remise " + l.getCategory().getName()
                                + " — " + p.getName()
                                + (p.getInvoice() != null ? " / " + p.getInvoice().getName() : ""))
                        .quantity(BigDecimal.ONE)
                        .prixUnitaire(montantTTC)
                        .tauxTVA(BigDecimal.ZERO)
                        .categoryId(null)
                        .consigne(false)
                        .build());
            }
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException("Les règlements sélectionnés n'ont aucune ligne de détail");
        }

        String notes = "Avoir remises — "
                + paiements.stream().map(RemisePaiement::getName).collect(Collectors.joining(", "));

        PurchaseInvoiceRequest req = PurchaseInvoiceRequest.builder()
                .partnerId(partnerId)
                .journalId(journalId)
                .date(LocalDate.now())
                .companyId(companyId)
                .type("credit_note")
                .notes(notes)
                .lines(lines)
                .build();

        com.erp.purchases.dto.PurchaseInvoiceDTO draft = purchaseService.createInvoice(req);
        // Valider immédiatement l'avoir fournisseur (réduit la dette fournisseur dès la génération)
        com.erp.purchases.dto.PurchaseInvoiceDTO invoice = purchaseService.postInvoice(draft.getId());

        // Marquer les règlements comme "done" et lier la facture
        for (RemisePaiement p : paiements) {
            p.setState("done");
            p.setGeneratedInvoiceId(invoice.getId());
            p.setGeneratedInvoiceName(invoice.getName());
            paiementRepo.save(p);
        }

        return Map.of(
                "invoiceId",   invoice.getId(),
                "invoiceName", invoice.getName()
        );
    }

    @Data
    public static class PartnerGroup {
        private Long partnerId;
        private String partnerName;
        private BigDecimal totalAmount;
        private List<RemisePaiementDTO> paiements;

        public PartnerGroup(Long partnerId, String partnerName,
                            BigDecimal totalAmount, List<RemisePaiementDTO> paiements) {
            this.partnerId   = partnerId;
            this.partnerName = partnerName;
            this.totalAmount = totalAmount;
            this.paiements   = paiements;
        }
    }

    private String generateRmsName(Long companyId) {
        long count = paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId).size() + 1;
        return String.format("RMS-%d-%05d", java.time.Year.now().getValue(), count);
    }

    private RemiseDTO toDTO(Remise r) {
        BigDecimal taux = r.getPartner().getTauxPrecompte() != null
                ? r.getPartner().getTauxPrecompte() : BigDecimal.ZERO;
        BigDecimal ttcUnit = computeUnitTTC(r.getMontantFixe(), r.getTypeRemise(), taux);
        return RemiseDTO.builder()
                .id(r.getId())
                .partnerId(r.getPartner().getId())
                .partnerName(r.getPartner().getName())
                .categoryId(r.getCategory().getId())
                .categoryName(r.getCategory().getName())
                .montantFixe(r.getMontantFixe())
                .montantTTCUnitaire(ttcUnit)
                .typeRemise(r.getTypeRemise())
                .companyId(r.getCompanyId())
                .active(r.isActive())
                .build();
    }

    private BigDecimal computeUnitTTC(BigDecimal montantFixe, String type, BigDecimal tauxPrecompte) {
        if ("brasserie".equals(type)) {
            BigDecimal pcRate = tauxPrecompte.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
            BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(BigDecimal.valueOf(0.1925));
            return montantFixe.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
        }
        return montantFixe.multiply(BigDecimal.ONE.add(BigDecimal.valueOf(0.1925))).setScale(2, RoundingMode.HALF_UP);
    }

    private RemisePaiementDTO toPaiementDTO(RemisePaiement p) {
        List<RemisePaiementDTO.LineDTO> lines = p.getLines().stream()
                .map(l -> RemisePaiementDTO.LineDTO.builder()
                        .id(l.getId())
                        .categoryId(l.getCategory().getId())
                        .categoryName(l.getCategory().getName())
                        .quantite(l.getQuantite())
                        .montantUnitaire(l.getMontantUnitaire())
                        .montantTotal(l.getMontantTotal())
                        .build())
                .collect(Collectors.toList());

        return RemisePaiementDTO.builder()
                .id(p.getId())
                .name(p.getName())
                .partnerId(p.getPartner().getId())
                .partnerName(p.getPartner().getName())
                .date(p.getDate())
                .state(p.getState())
                .totalAmount(p.getTotalAmount())
                .invoiceId(p.getInvoice() != null ? p.getInvoice().getId() : null)
                .invoiceName(p.getInvoice() != null ? p.getInvoice().getName() : null)
                .generatedInvoiceId(p.getGeneratedInvoiceId())
                .generatedInvoiceName(p.getGeneratedInvoiceName())
                .companyId(p.getCompanyId())
                .notes(p.getNotes())
                .createdAt(p.getCreatedAt())
                .lines(lines)
                .build();
    }
}
