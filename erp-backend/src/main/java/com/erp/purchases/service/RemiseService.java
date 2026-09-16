package com.erp.purchases.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.accounting.service.FiscalLockGuard;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.service.SyncEventPublisher;
import com.erp.common.ConsigneCodes;
import com.erp.common.entity.Precompte;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.repository.PrecompteRepository;
import com.erp.common.service.TenantGuard;
import com.erp.purchases.dto.PurchaseInvoiceRequest;
import com.erp.purchases.dto.RemiseDTO;
import com.erp.purchases.dto.RemisePaiementDTO;
import com.erp.purchases.entity.Remise;
import com.erp.purchases.entity.RemisePaiement;
import com.erp.purchases.entity.RemisePaiementLine;
import com.erp.purchases.entity.PurchaseInvoice;
import com.erp.purchases.entity.PurchaseInvoiceLine;
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
    private final SyncEventPublisher syncPublisher;
    @Lazy private final PurchaseService purchaseService;
    private final TenantGuard tenantGuard;
    private final CompanyRepository companyRepo;
    private final FiscalLockGuard fiscalLockGuard;

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
        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance
        // pour déterminer sous quelle société l'entité est créée/mise à jour.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();

        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));
        ProductCategory cat = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));

        Remise entity = remiseRepo.findByPartnerIdAndCategoryIdAndCompanyId(
                dto.getPartnerId(), dto.getCategoryId(), companyId)
                .orElse(Remise.builder().build());
        entity.setPartner(partner);
        entity.setCategory(cat);
        entity.setMontantFixe(dto.getMontantFixe());
        entity.setTypeRemise(dto.getTypeRemise());
        entity.setCompanyId(companyId);
        entity.setActive(true);
        return toDTO(remiseRepo.save(entity));
    }

    public void delete(Long id) {
        Remise r = remiseRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Remise introuvable"));
        tenantGuard.check(r.getCompanyId());
        r.setActive(false);
        remiseRepo.save(r);
    }

    /** Précharge partenaires/catégories en 2 requêtes au lieu d'une paire par ligne Excel —
     *  même correctif que RistourneService.importRistournes côté ventes. */
    public int importRemises(List<RemiseImportRow> rows, Long companyId) {
        Map<String, Partner> partnersByName = partnerRepo.findByCompanyId(companyId)
                .stream().collect(Collectors.toMap(
                        p -> p.getName().toLowerCase().trim(), p -> p, (a, b) -> a));
        Map<String, ProductCategory> categoriesByName = categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().collect(Collectors.toMap(
                        c -> c.getName().toLowerCase().trim(), c -> c, (a, b) -> a));

        int count = 0;
        for (RemiseImportRow row : rows) {
            if (row.getSupplierName() == null || row.getCategoryName() == null) continue;
            Partner partner = partnersByName.get(row.getSupplierName().toLowerCase().trim());
            if (partner == null) continue;
            ProductCategory cat = categoriesByName.get(row.getCategoryName().toLowerCase().trim());
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
    public List<RemisePaiementDTO> getAllPaiements(Long companyId, String typeRemise) {
        return paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream()
                .filter(p -> typeRemise == null || typeRemise.equals(p.getTypeRemise()))
                .map(this::toPaiementDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RemisePaiementDTO getPaiement(Long id) {
        RemisePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        tenantGuard.check(p.getCompanyId());
        return toPaiementDTO(p);
    }

    public RemisePaiementDTO savePaiement(RemisePaiementDTO dto) {
        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        RemisePaiement entity = dto.getId() != null
                ? paiementRepo.findById(dto.getId()).orElse(RemisePaiement.builder().build())
                : RemisePaiement.builder().build();
        // Vérifier l'appartenance de l'entité EXISTANTE avant toute mutation, avec son companyId
        // chargé depuis la base — dto.getCompanyId() (écrasé juste après) vient du client et ne
        // doit jamais servir de base à un contrôle d'accès.
        if (entity.getId() != null) {
            tenantGuard.check(entity.getCompanyId());
        }

        if (entity.getId() == null) {
            // companyId vient du corps de la requête (client) — ne jamais lui faire confiance
            // pour la création : on utilise la société de l'utilisateur authentifié.
            Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();
            entity.setName(generateRmsName(companyId));
            entity.setCompanyId(companyId);
        }
        entity.setPartner(partner);
        entity.setDate(dto.getDate() != null ? dto.getDate() : LocalDate.now());
        entity.setState("draft");
        entity.setNotes(dto.getNotes());

        entity.getLines().clear();
        BigDecimal total = BigDecimal.ZERO;

        // Taux précompte du fournisseur — même calcul que generateFromInvoice, nécessaire pour
        // convertir le montant HT saisi manuellement en TTC (voir plus bas).
        BigDecimal tauxPcManuel = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partner.getId(), "purchase", entity.getCompanyId())
                        .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);

        if (dto.getLines() != null) {
            for (RemisePaiementDTO.LineDTO lineDto : dto.getLines()) {
                ProductCategory cat = categoryRepo.findById(lineDto.getCategoryId())
                        .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));
                BigDecimal montantHT = lineDto.getMontantUnitaire()
                        .multiply(lineDto.getQuantite()).setScale(2, RoundingMode.HALF_UP);

                // Convertir en TTC (comme generateFromInvoice) avant de stocker dans montantTotal —
                // ce champ sert directement de prixUnitaire TTC dans generateFacture. Sans cette
                // conversion, une ligne saisie manuellement était facturée au fournisseur pour son
                // montant HT brut, sous-évaluant la facture générée.
                String typeRemise = remiseRepo.findByPartnerIdAndCategoryIdAndCompanyId(
                                partner.getId(), cat.getId(), entity.getCompanyId())
                        .map(Remise::getTypeRemise).orElse(null);
                BigDecimal montantTotal = typeRemise != null
                        ? computeUnitTTC(montantHT, typeRemise, tauxPcManuel)
                        : montantHT;

                RemisePaiementLine line = RemisePaiementLine.builder()
                        .paiement(entity)
                        .category(cat)
                        .quantite(lineDto.getQuantite())
                        .montantUnitaire(lineDto.getMontantUnitaire())
                        .montantTotal(montantTotal)
                        .montantTTC(montantTotal)
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
        tenantGuard.check(p.getCompanyId());
        if (!"draft".equals(p.getState())) {
            throw new IllegalStateException("Seul un brouillon peut être confirmé");
        }
        p.setState("confirmed");
        RemisePaiement saved = paiementRepo.save(p);
        syncPublisher.publish(SyncEventType.REMISE_PAIEMENT_POSTED, "RMS_PAI_" + saved.getId(),
            java.util.Map.of(
                "id", saved.getId(), "name", saved.getName() != null ? saved.getName() : "",
                "partnerName", saved.getPartner() != null ? saved.getPartner().getName() : "",
                "typeRemise", saved.getTypeRemise() != null ? saved.getTypeRemise() : "",
                "totalAmount", saved.getTotalAmount() != null ? saved.getTotalAmount() : java.math.BigDecimal.ZERO,
                "date", saved.getDate() != null ? saved.getDate().toString() : "",
                "state", saved.getState(), "companyId", saved.getCompanyId()
            ));
        return toPaiementDTO(saved);
    }

    public RemisePaiementDTO cancelPaiement(Long id) {
        RemisePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        tenantGuard.check(p.getCompanyId());
        if ("cancelled".equals(p.getState())) {
            throw new IllegalStateException("Ce règlement est déjà annulé");
        }
        if ("done".equals(p.getState())) {
            // cf. RistourneService.cancelPaiement : déjà facturé, un vrai avoir posté existe —
            // ne jamais le désynchroniser silencieusement en annulant seulement le règlement.
            throw new IllegalStateException(
                "Ce règlement a déjà été facturé (" + (p.getGeneratedInvoiceName() != null ? p.getGeneratedInvoiceName() : "avoir généré")
                + ") — annulez/extournez d'abord cet avoir avant d'annuler le règlement.");
        }
        fiscalLockGuard.assertPeriodOpen(p.getCompanyId(), p.getDate() != null ? p.getDate() : LocalDate.now());
        p.setState("cancelled");
        RemisePaiement saved = paiementRepo.save(p);
        syncPublisher.publish(SyncEventType.REMISE_PAIEMENT_CANCELLED, "RMS_PAI_" + saved.getId(),
            java.util.Map.of(
                "id", saved.getId(), "name", saved.getName() != null ? saved.getName() : "",
                "partnerName", saved.getPartner() != null ? saved.getPartner().getName() : "",
                "typeRemise", saved.getTypeRemise() != null ? saved.getTypeRemise() : "",
                "totalAmount", saved.getTotalAmount() != null ? saved.getTotalAmount() : java.math.BigDecimal.ZERO,
                "date", saved.getDate() != null ? saved.getDate().toString() : "",
                "state", saved.getState(), "companyId", saved.getCompanyId()
            ));
        return toPaiementDTO(saved);
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
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        // "extournee" acceptée comme sur RistourneService.generateFromInvoice côté ventes : une
        // facture totalement extournée doit pouvoir générer/annuler son règlement de remise associé.
        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState()) && !"extournee".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures validées peuvent générer des règlements");
        }

        // Avoir fournisseur (retour de marchandise) : les quantités/montants doivent être négatifs
        // (annulation de la remise déjà générée sur la facture d'origine), même logique que
        // RistourneService.generateFromInvoice côté ventes — sans ce signe, un retour fournisseur
        // générait une remise supplémentaire au lieu de l'annuler.
        boolean isAvoir = "credit_note".equals(invoice.getType());

        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();

        Partner partner = partnerRepo.findById(partnerId)
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partnerId, "purchase", companyId)
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
                    .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode(), companyId) && !l.isConsigne()
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

            BigDecimal sign = isAvoir ? BigDecimal.ONE.negate() : BigDecimal.ONE;
            lines.add(RemisePaiementLine.builder()
                    .category(r.getCategory())
                    .quantite(qty.multiply(sign))
                    .montantUnitaire(montantUnit)
                    .montantTotal(montantTTC.multiply(sign))
                    .montantTTC(montantTTC.multiply(sign))
                    .build());
            total = total.add(montantTTC.multiply(sign));
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException(
                "Les remises sont configurées pour ce fournisseur mais aucune ligne de facture ne correspond " +
                "aux catégories configurées. Vérifiez que les produits ont bien une catégorie assignée.");
        }

        String notesPrefix = isAvoir ? "Annulation remise depuis avoir " : "Généré depuis ";
        RemisePaiement entity = RemisePaiement.builder()
                .name(generateRmsName(companyId))
                .partner(partner)
                .invoice(invoice)
                .date(invoice.getDate())
                .state("draft")
                .companyId(companyId)
                .notes(notesPrefix + invoice.getName())
                .totalAmount(total)
                .lines(new ArrayList<>())
                .build();

        for (RemisePaiementLine line : lines) {
            line.setPaiement(entity);
            entity.getLines().add(line);
        }

        return toPaiementDTO(paiementRepo.save(entity));
    }

    /** Génère les remises Brasseries pour un trimestre donné. */
    public Map<String, Object> generateByQuarter(int quarter, int year, Long companyId) {
        LocalDate dateStart, dateEnd;
        switch (quarter) {
            case 1 -> { dateStart = LocalDate.of(year, 1, 1);  dateEnd = LocalDate.of(year, 3, 31); }
            case 2 -> { dateStart = LocalDate.of(year, 4, 1);  dateEnd = LocalDate.of(year, 6, 30); }
            case 3 -> { dateStart = LocalDate.of(year, 7, 1);  dateEnd = LocalDate.of(year, 9, 30); }
            case 4 -> { dateStart = LocalDate.of(year, 10, 1); dateEnd = LocalDate.of(year, 12, 31); }
            default -> throw new IllegalArgumentException("Trimestre invalide : " + quarter);
        }
        return generateByPeriodInternal(dateStart, dateEnd, "brasserie", companyId);
    }

    /** Génère les remises Guinness pour une période libre. */
    public Map<String, Object> generateByPeriod(LocalDate dateStart, LocalDate dateEnd, Long companyId) {
        return generateByPeriodInternal(dateStart, dateEnd, "guinness", companyId);
    }

    private Map<String, Object> generateByPeriodInternal(
            LocalDate dateStart, LocalDate dateEnd, String typeRemise, Long companyId) {

        List<PurchaseInvoice> invoices = purchaseInvoiceRepo.findByCompanyAndDateRange(
                companyId, dateStart, dateEnd);
        // Avoirs fournisseurs (retours) sur la période — sans eux, la génération par période
        // surévaluait systématiquement les remises en ignorant les retours de marchandise.
        List<PurchaseInvoice> avoirs = purchaseInvoiceRepo.findAvoirsByCompanyAndDateRange(
                companyId, dateStart, dateEnd);

        int total = invoices.size() + avoirs.size();
        int generated = 0;
        int skipped = 0;

        for (PurchaseInvoice invoice : invoices) {
            if (paiementRepo.existsByInvoiceIdAndTypeRemise(invoice.getId(), typeRemise)) {
                skipped++; continue;
            }
            Long partnerId = invoice.getPartner().getId();
            List<Remise> remisesFournisseur = remiseRepo
                    .findByPartnerIdAndCompanyIdAndActiveTrueAndTypeRemise(partnerId, companyId, typeRemise);
            if (remisesFournisseur.isEmpty()) { skipped++; continue; }
            try {
                generateFromInvoiceForType(invoice, typeRemise, remisesFournisseur);
                generated++;
            } catch (IllegalStateException ignored) {
                skipped++;
            }
        }

        for (PurchaseInvoice avoir : avoirs) {
            if (paiementRepo.existsByInvoiceIdAndTypeRemise(avoir.getId(), typeRemise)) {
                skipped++; continue;
            }
            Long partnerId = avoir.getPartner().getId();
            List<Remise> remisesFournisseur = remiseRepo
                    .findByPartnerIdAndCompanyIdAndActiveTrueAndTypeRemise(partnerId, companyId, typeRemise);
            if (remisesFournisseur.isEmpty()) { skipped++; continue; }
            try {
                generateFromInvoiceForType(avoir, typeRemise, remisesFournisseur);
                generated++;
            } catch (IllegalStateException ignored) {
                skipped++;
            }
        }
        return Map.of("generated", generated, "skipped", skipped, "total", total);
    }

    private RemisePaiementDTO generateFromInvoiceForType(
            PurchaseInvoice invoice, String typeRemise, List<Remise> remises) {

        // Avoir fournisseur (retour de marchandise) : quantités/montants négatifs pour annuler la
        // remise déjà générée sur la facture d'origine — même correctif que generateFromInvoice
        // (règlement manuel), qui gère déjà ce signe ; la génération PAR PÉRIODE (celle-ci) ne le
        // faisait pas du tout, surévaluant les remises dès qu'un retour tombait dans la période.
        boolean isAvoir = "credit_note".equals(invoice.getType());
        BigDecimal sign = isAvoir ? BigDecimal.ONE.negate() : BigDecimal.ONE;

        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();

        Partner partner = partnerRepo.findById(partnerId)
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partnerId, "purchase", companyId)
                        .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);

        List<RemisePaiementLine> lines = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        for (Remise r : remises) {
            if (r.getMontantFixe() == null) continue;
            Long catId = r.getCategory().getId();

            BigDecimal qty = invoice.getLines().stream()
                    .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode(), companyId) && !l.isConsigne()
                            && catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                    .map(l -> l.getQuantity() != null ? l.getQuantity() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            if (qty.compareTo(BigDecimal.ZERO) == 0) continue;

            BigDecimal montantHT = r.getMontantFixe().multiply(qty).setScale(2, RoundingMode.HALF_UP);
            BigDecimal montantTTC;
            if ("brasserie".equals(typeRemise)) {
                BigDecimal pcRate = tauxPc.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
                BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(BigDecimal.valueOf(0.1925));
                montantTTC = montantHT.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
            } else {
                montantTTC = montantHT.multiply(BigDecimal.ONE.add(BigDecimal.valueOf(0.1925)))
                        .setScale(2, RoundingMode.HALF_UP);
            }
            lines.add(RemisePaiementLine.builder()
                    .category(r.getCategory())
                    .quantite(qty.multiply(sign))
                    .montantUnitaire(r.getMontantFixe())
                    .montantTotal(montantTTC.multiply(sign))
                    .montantTTC(montantTTC.multiply(sign))
                    .build());
            total = total.add(montantTTC.multiply(sign));
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException(
                "Aucune ligne de facture ne correspond aux catégories de remise configurées.");
        }

        RemisePaiement entity = RemisePaiement.builder()
                .name(generateRmsName(companyId))
                .partner(partner)
                .invoice(invoice)
                .typeRemise(typeRemise)
                .date(invoice.getDate())
                .state("draft")
                .companyId(companyId)
                .notes((isAvoir ? "Annulation remise depuis avoir " : "Généré depuis ")
                        + invoice.getName() + " [" + typeRemise + "]")
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

    /** Retourne les règlements confirmés groupés par fournisseur, filtrés par type. */
    @Transactional(readOnly = true)
    public List<PartnerGroup> getGroupedPaiements(Long companyId, String typeRemise) {
        List<RemisePaiement> confirmed = paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream()
                .filter(p -> "confirmed".equals(p.getState()))
                .filter(p -> typeRemise == null || typeRemise.equals(p.getTypeRemise()))
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
            // companyId vient du corps de requête client — ne jamais s'y fier pour un contrôle
            // d'accès. tenantGuard compare à la société de l'utilisateur authentifié (JWT).
            tenantGuard.check(p.getCompanyId());
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

        // Valider que tous les règlements sont du même type (brasserie ou guinness) — même
        // contrôle que RistourneService.generateFacture côté ventes. Contrairement aux ristournes,
        // le plan comptable seedé n'a pas de compte 409 dédié par type (pas d'équivalent aux
        // 419800/419801) : tout continue de poser sur le même 409, mais on interdit quand même de
        // mélanger deux types dans un même avoir pour rester cohérent et traçable par type.
        Set<String> types = paiements.stream()
                .map(p -> p.getTypeRemise() != null ? p.getTypeRemise() : "")
                .collect(Collectors.toSet());
        if (types.size() > 1) {
            throw new IllegalArgumentException(
                "Tous les règlements doivent être du même type. Séparez les remises brasserie et guinness.");
        }

        // Trouver le journal d'achats
        Long journalId = journalRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .filter(j -> "purchase".equals(j.getType()))
                .findFirst()
                .map(j -> j.getId())
                .orElseThrow(() -> new IllegalStateException("Aucun journal d'achats trouvé"));

        // Construire les lignes : quantity=1, prixUnitaire=montantTotal (TTC) comme Odoo
        // Compte 409 (Fournisseurs débiteurs) — sans accountCode explicite, PurchaseService.postInvoice
        // retomberait silencieusement sur le compte de charge par défaut (601100, achats ordinaires),
        // mélangeant les avoirs de remise avec les achats normaux au lieu de les isoler.
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
                        .accountCode("409")
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
            p.setDatePaiement(java.time.LocalDate.now());
            p.setGeneratedInvoiceId(invoice.getId());
            p.setGeneratedInvoiceName(invoice.getName());
            paiementRepo.save(p);
        }

        return Map.of(
                "invoiceId",   invoice.getId(),
                "invoiceName", invoice.getName()
        );
    }

    /** Rapport remises sur une période : liste des remises avec détail par fournisseur et catégorie. */
    @Transactional(readOnly = true)
    public List<RemisePaiementDTO> getRapportPeriode(LocalDate dateFrom, LocalDate dateTo, Long companyId) {
        return paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream()
                .filter(p -> p.getDate() != null
                        && !p.getDate().isBefore(dateFrom)
                        && !p.getDate().isAfter(dateTo))
                .filter(p -> !"cancelled".equals(p.getState()))
                .map(this::toPaiementDTO)
                .collect(Collectors.toList());
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

    private List<RemisePaiementDTO.ArticleLineDTO> buildRemiseArticleLines(
            RemisePaiement p, List<RemisePaiementDTO.LineDTO> categoryLines) {
        PurchaseInvoice inv = p.getInvoice();
        if (inv == null || inv.getLines() == null) return java.util.Collections.emptyList();

        // Map categoryId → remise line info
        Map<Long, RemisePaiementDTO.LineDTO> catMap = new java.util.HashMap<>();
        for (RemisePaiementLine l : p.getLines()) {
            if (l.getCategory() != null) catMap.put(l.getCategory().getId(), RemisePaiementDTO.LineDTO.builder()
                .categoryName(l.getCategory().getName())
                .montantUnitaire(l.getMontantUnitaire())
                .build());
        }

        List<RemisePaiementDTO.ArticleLineDTO> result = new java.util.ArrayList<>();
        for (PurchaseInvoiceLine line : inv.getLines()) {
            if (line.isConsigne() || line.getCategoryId() == null) continue;
            RemisePaiementDTO.LineDTO remiseLine = catMap.get(line.getCategoryId());
            if (remiseLine == null) continue;
            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ZERO;
            if (qty.compareTo(BigDecimal.ZERO) <= 0) continue;
            BigDecimal rate   = remiseLine.getMontantUnitaire() != null ? remiseLine.getMontantUnitaire() : BigDecimal.ZERO;
            BigDecimal montant = qty.multiply(rate).setScale(2, java.math.RoundingMode.HALF_UP);
            result.add(RemisePaiementDTO.ArticleLineDTO.builder()
                .productCode(line.getProductCode())
                .productName(line.getDescription())
                .categoryName(remiseLine.getCategoryName())
                .quantite(qty)
                .montantUnitaire(rate)
                .montantTotal(montant)
                .build());
        }
        return result;
    }

    private String generateRmsName(Long companyId) {
        companyRepo.findByIdForUpdate(companyId);
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

        // Lignes par article individuel depuis la facture d'achat liée
        List<RemisePaiementDTO.ArticleLineDTO> articleLines = buildRemiseArticleLines(p, lines);

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
                .typeRemise(p.getTypeRemise())
                .companyId(p.getCompanyId())
                .notes(p.getNotes())
                .createdAt(p.getCreatedAt())
                .lines(lines)
                .articleLines(articleLines)
                .build();
    }
}
