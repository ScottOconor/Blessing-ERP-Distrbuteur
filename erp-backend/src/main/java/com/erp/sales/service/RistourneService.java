package com.erp.sales.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.accounting.service.FiscalLockGuard;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.service.SyncEventPublisher;
import com.erp.common.entity.Precompte;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.repository.PrecompteRepository;
import com.erp.common.service.TenantGuard;
import com.erp.sales.dto.RistourneDTO;
import com.erp.sales.dto.RistournePaiementDTO;
import com.erp.sales.dto.SalesInvoiceRequest;
import com.erp.sales.entity.Ristourne;
import com.erp.sales.entity.RistournePaiement;
import com.erp.sales.entity.RistournePaiementLine;
import com.erp.sales.entity.SalesInvoice;
import com.erp.sales.repository.RistournePaiementRepository;
import com.erp.sales.repository.RistourneRepository;
import com.erp.sales.repository.SalesInvoiceRepository;
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
public class RistourneService {

    private final RistourneRepository ristourneRepo;
    private final RistournePaiementRepository paiementRepo;
    private final PartnerRepository partnerRepo;
    private final ProductCategoryRepository categoryRepo;
    private final PrecompteRepository precompteRepo;
    private final SalesInvoiceRepository salesInvoiceRepo;
    private final ProductRepository productRepo;
    private final AccountJournalRepository journalRepo;
    private final SyncEventPublisher syncPublisher;
    @Lazy private final SalesService salesService;
    private final TenantGuard tenantGuard;
    private final CompanyRepository companyRepo;
    private final FiscalLockGuard fiscalLockGuard;

    // ======================== RISTOURNES (configuration) ========================

    @Transactional(readOnly = true)
    public List<RistourneDTO> getAll(Long companyId) {
        return ristourneRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<RistourneDTO> getByPartner(Long partnerId, Long companyId) {
        return ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    public RistourneDTO save(RistourneDTO dto) {
        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance
        // pour déterminer sous quelle société l'entité est créée/mise à jour.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();

        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));
        ProductCategory cat = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));

        Ristourne entity = ristourneRepo.findByPartnerIdAndCategoryIdAndCompanyId(
                dto.getPartnerId(), dto.getCategoryId(), companyId)
                .orElse(Ristourne.builder().build());

        entity.setPartner(partner);
        entity.setCategory(cat);
        entity.setMontantFixe(dto.getMontantFixe());
        entity.setTypeRistourne(dto.getTypeRistourne());
        entity.setCompanyId(companyId);
        entity.setActive(true);
        return toDTO(ristourneRepo.save(entity));
    }

    public void delete(Long id) {
        Ristourne r = ristourneRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ristourne introuvable"));
        tenantGuard.check(r.getCompanyId());
        r.setActive(false);
        ristourneRepo.save(r);
    }

    /**
     * Import bulk de ristournes depuis Excel — version optimisée batch.
     * Précharge partenaires, catégories et ristournes existantes en 3 requêtes,
     * puis effectue un seul saveAll au lieu d'une requête par ligne.
     */
    public List<RistourneDTO> importRistournes(List<RistourneImportRow> rows, Long companyId) {
        Map<String, Partner> partnersByName = partnerRepo.findByCompanyId(companyId)
                .stream().collect(Collectors.toMap(
                        p -> p.getName().toLowerCase().trim(), p -> p, (a, b) -> a));

        Map<String, ProductCategory> categoriesByName = categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .stream().collect(Collectors.toMap(
                        c -> c.getName().toLowerCase().trim(), c -> c, (a, b) -> a));

        // Déduplique les lignes import sur (clientName, categoryName) pour éviter deux INSERTs sur la même clé
        Map<String, RistourneImportRow> deduped = new LinkedHashMap<>();
        for (RistourneImportRow row : rows) {
            if (row.getClientName() == null || row.getCategoryName() == null) continue;
            String key = row.getClientName().toLowerCase().trim() + "|" + row.getCategoryName().toLowerCase().trim();
            deduped.put(key, row);
        }

        List<RistourneDTO> saved = new ArrayList<>();
        for (RistourneImportRow row : deduped.values()) {
            Partner partner = partnersByName.get(row.getClientName().toLowerCase().trim());
            if (partner == null) continue;
            ProductCategory cat = categoriesByName.get(row.getCategoryName().toLowerCase().trim());
            if (cat == null) continue;

            Ristourne entity = ristourneRepo.findByPartnerIdAndCategoryIdAndCompanyId(
                    partner.getId(), cat.getId(), companyId)
                    .orElse(Ristourne.builder().build());
            entity.setPartner(partner);
            entity.setCategory(cat);
            entity.setMontantFixe(row.getMontantFixe() != null ? row.getMontantFixe() : BigDecimal.ZERO);
            entity.setTypeRistourne(row.getTypeRistourne());
            entity.setCompanyId(companyId);
            entity.setActive(true);
            saved.add(toDTO(ristourneRepo.save(entity)));
        }
        return saved;
    }

    @lombok.Data
    public static class RistourneImportRow {
        private String clientName;
        private String categoryName;
        private String typeRistourne;
        private BigDecimal montantFixe;
        private Boolean active;
    }

    // ======================== RISTOURNE PAIEMENTS ========================

    @Transactional(readOnly = true)
    public List<RistournePaiementDTO> getRapportPeriode(java.time.LocalDate dateFrom, java.time.LocalDate dateTo, Long companyId) {
        return paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream()
                .filter(p -> p.getDate() != null
                        && !p.getDate().isBefore(dateFrom)
                        && !p.getDate().isAfter(dateTo))
                .filter(p -> !"cancelled".equals(p.getState()))
                .map(this::toPaiementDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<RistournePaiementDTO> getAllPaiements(Long companyId) {
        return getAllPaiements(companyId, null);
    }

    @Transactional(readOnly = true)
    public List<RistournePaiementDTO> getAllPaiements(Long companyId, String type) {
        List<com.erp.sales.entity.RistournePaiement> list = (type != null && !type.isBlank())
                ? paiementRepo.findByCompanyIdAndTypeRistourneOrderByCreatedAtDesc(companyId, type)
                : paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId);
        return list.stream().map(this::toPaiementDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RistournePaiementDTO getPaiement(Long id) {
        RistournePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        tenantGuard.check(p.getCompanyId());
        return toPaiementDTO(p);
    }

    public RistournePaiementDTO savePaiement(RistournePaiementDTO dto) {
        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        RistournePaiement entity = dto.getId() != null
                ? paiementRepo.findById(dto.getId()).orElse(RistournePaiement.builder().build())
                : RistournePaiement.builder().build();
        // Vérifier l'appartenance de l'entité EXISTANTE avant toute mutation, avec son companyId
        // chargé depuis la base — dto.getCompanyId() (écrasé juste après) n'est pas fiable ici,
        // il vient du client et ne doit jamais servir de base à un contrôle d'accès.
        if (entity.getId() != null) {
            tenantGuard.check(entity.getCompanyId());
        }

        if (entity.getId() == null) {
            // companyId vient du corps de la requête (client) — ne jamais lui faire confiance
            // pour la création : on utilise la société de l'utilisateur authentifié.
            Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();
            entity.setName(generateRstName(companyId));
            entity.setCompanyId(companyId);
        }

        entity.setPartner(partner);
        entity.setDate(dto.getDate() != null ? dto.getDate() : LocalDate.now());
        entity.setState("draft");
        entity.setNotes(dto.getNotes());

        // Lines
        entity.getLines().clear();
        BigDecimal total = BigDecimal.ZERO;

        if (dto.getLines() != null) {
            for (RistournePaiementDTO.LineDTO lineDto : dto.getLines()) {
                ProductCategory cat = categoryRepo.findById(lineDto.getCategoryId())
                        .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));

                BigDecimal montantTotal = lineDto.getMontantUnitaire()
                        .multiply(lineDto.getQuantite()).setScale(2, RoundingMode.HALF_UP);

                BigDecimal montantTTC = computeRistourneTTC(
                        montantTotal, partner, entity.getCompanyId(), cat.getId());

                RistournePaiementLine line = RistournePaiementLine.builder()
                        .paiement(entity)
                        .category(cat)
                        .quantite(lineDto.getQuantite())
                        .montantUnitaire(lineDto.getMontantUnitaire())
                        .montantTotal(montantTotal)
                        .montantTTC(montantTTC)
                        .build();
                entity.getLines().add(line);
                total = total.add(montantTTC);
            }
        }
        entity.setTotalAmount(total);
        return toPaiementDTO(paiementRepo.save(entity));
    }

    public RistournePaiementDTO confirmPaiement(Long id) {
        RistournePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        tenantGuard.check(p.getCompanyId());
        if (!"draft".equals(p.getState())) {
            throw new IllegalStateException("Seul un brouillon peut être confirmé");
        }
        p.setState("confirmed");
        RistournePaiement saved = paiementRepo.save(p);
        syncPublisher.publish(SyncEventType.RISTOURNE_PAIEMENT_POSTED, "RST_PAI_" + saved.getId(),
            java.util.Map.of(
                "id", saved.getId(), "name", saved.getName() != null ? saved.getName() : "",
                "partnerName", saved.getPartner() != null ? saved.getPartner().getName() : "",
                "typeRistourne", saved.getTypeRistourne() != null ? saved.getTypeRistourne() : "",
                "totalAmount", saved.getTotalAmount() != null ? saved.getTotalAmount() : java.math.BigDecimal.ZERO,
                "date", saved.getDate() != null ? saved.getDate().toString() : "",
                "state", saved.getState(), "companyId", saved.getCompanyId()
            ));
        return toPaiementDTO(saved);
    }

    public RistournePaiementDTO cancelPaiement(Long id) {
        RistournePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        tenantGuard.check(p.getCompanyId());
        if ("cancelled".equals(p.getState())) {
            throw new IllegalStateException("Ce règlement est déjà annulé");
        }
        if ("done".equals(p.getState())) {
            // Déjà facturé (generateFacture) : un vrai avoir posté existe (generatedInvoiceId).
            // Passer directement en "cancelled" ici désynchroniserait silencieusement le règlement
            // de l'avoir réel, qui resterait posté et non référencé (même bug que PayrollService.cancel
            // avant son correctif cette session — extourner/annuler l'avoir d'abord, jamais l'inverse).
            throw new IllegalStateException(
                "Ce règlement a déjà été facturé (" + (p.getGeneratedInvoiceName() != null ? p.getGeneratedInvoiceName() : "avoir généré")
                + ") — annulez/extournez d'abord cet avoir avant d'annuler le règlement.");
        }
        fiscalLockGuard.assertPeriodOpen(p.getCompanyId(), p.getDate() != null ? p.getDate() : LocalDate.now());
        p.setState("cancelled");
        RistournePaiement saved = paiementRepo.save(p);
        syncPublisher.publish(SyncEventType.RISTOURNE_PAIEMENT_CANCELLED, "RST_PAI_" + saved.getId(),
            java.util.Map.of(
                "id", saved.getId(), "name", saved.getName() != null ? saved.getName() : "",
                "partnerName", saved.getPartner() != null ? saved.getPartner().getName() : "",
                "typeRistourne", saved.getTypeRistourne() != null ? saved.getTypeRistourne() : "",
                "totalAmount", saved.getTotalAmount() != null ? saved.getTotalAmount() : java.math.BigDecimal.ZERO,
                "date", saved.getDate() != null ? saved.getDate().toString() : "",
                "state", saved.getState(), "companyId", saved.getCompanyId()
            ));
        return toPaiementDTO(saved);
    }

    /**
     * Génère un règlement ristourne à partir d'une facture vente.
     * Pour chaque ristourne active du client, calcule la quantité vendue par catégorie
     * sur cette facture et crée les lignes correspondantes.
     */
    public RistournePaiementDTO generateFromInvoice(Long invoiceId) {
        SalesInvoice invoice = salesInvoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new IllegalArgumentException("Facture introuvable"));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState()) && !"extournee".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures/avoirs validés peuvent générer des règlements");
        }

        boolean isAvoir = "credit_note".equals(invoice.getType());

        Long partnerId  = invoice.getPartner().getId();
        Long companyId  = invoice.getCompany().getId();

        Partner partner = partnerRepo.findById(partnerId)
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        // Taux précompte pour ce client (vente)
        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partnerId, "sale", companyId)
                        .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);

        List<RistournePaiementLine> lines = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        for (Ristourne r : ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)) {
            if (r.getMontantFixe() == null) continue;
            Long catId = r.getCategory().getId();

            // Somme des quantités vendues dans cette catégorie sur la facture
            // resolveCategoryId fallback: si categoryId null sur la ligne, on cherche via le code produit
            BigDecimal qty = invoice.getLines().stream()
                    .filter(l -> !l.isConsigne())
                    .filter(l -> catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                    .map(l -> l.getQuantity() != null ? l.getQuantity() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            if (qty.compareTo(BigDecimal.ZERO) == 0) continue;

            BigDecimal montantUnit = r.getMontantFixe();
            BigDecimal montantTotal = montantUnit.multiply(qty).setScale(2, RoundingMode.HALF_UP);
            BigDecimal montantTTC;
            if ("brasserie".equals(r.getTypeRistourne())) {
                BigDecimal pcRate = tauxPc.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
                BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(BigDecimal.valueOf(0.1925));
                montantTTC = montantTotal.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
            } else {
                // guinness et autres : pas de précompte mais TVA 19.25%
                montantTTC = montantTotal.multiply(BigDecimal.ONE.add(BigDecimal.valueOf(0.1925))).setScale(2, RoundingMode.HALF_UP);
            }

            // Pour les avoirs : les montants sont négatifs (annulation de ristourne)
            BigDecimal sign = isAvoir ? BigDecimal.ONE.negate() : BigDecimal.ONE;
            lines.add(RistournePaiementLine.builder()
                    .category(r.getCategory())
                    .quantite(qty.multiply(sign))
                    .montantUnitaire(montantUnit)
                    .montantTotal(montantTotal.multiply(sign))
                    .montantTTC(montantTTC.multiply(sign))
                    .build());
            total = total.add(montantTTC.multiply(sign));
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException("Aucune ristourne applicable sur cette facture/avoir (vérifiez les catégories des lignes)");
        }

        String notesPrefix = isAvoir ? "Annulation ristourne depuis avoir " : "Généré depuis ";
        RistournePaiement entity = RistournePaiement.builder()
                .name(generateRstName(companyId))
                .partner(partner)
                .invoice(invoice)
                .date(invoice.getDate())
                .state("draft")
                .companyId(companyId)
                .notes(notesPrefix + invoice.getName())
                .totalAmount(total)
                .lines(new ArrayList<>())
                .build();

        for (RistournePaiementLine line : lines) {
            line.setPaiement(entity);
            entity.getLines().add(line);
        }

        return toPaiementDTO(paiementRepo.save(entity));
    }

    // ======================== GÉNÉRATION PAR TYPE / PÉRIODE ========================

    /**
     * Génère les règlements ristourne de type brasserie pour toutes les factures du trimestre donné.
     */
    public Map<String, Object> generateByQuarter(int quarter, int year, Long companyId) {
        LocalDate start = LocalDate.of(year, (quarter - 1) * 3 + 1, 1);
        LocalDate end   = start.plusMonths(3).minusDays(1);
        return generateByDateRange(start, end, "brasserie", companyId);
    }

    /**
     * Génère les règlements ristourne de type guinness pour toutes les factures de la période donnée.
     */
    public Map<String, Object> generateByPeriod(java.time.LocalDate dateStart, java.time.LocalDate dateEnd, Long companyId) {
        return generateByDateRange(dateStart, dateEnd, "guinness", companyId);
    }

    private Map<String, Object> generateByDateRange(LocalDate start, LocalDate end, String type, Long companyId) {
        List<SalesInvoice> invoices = salesInvoiceRepo.findPostedByCompanyAndDateRange(companyId, start, end);
        List<SalesInvoice> avoirs   = salesInvoiceRepo.findAvoirsByCompanyAndDateRange(companyId, start, end);

        int generated = 0, skipped = 0;

        // Factures normales
        for (SalesInvoice invoice : invoices) {
            if (paiementRepo.existsByInvoice_IdAndTypeRistourne(invoice.getId(), type)) {
                skipped++;
                continue;
            }
            try {
                generateFromInvoiceForType(invoice.getId(), type);
                generated++;
            } catch (IllegalStateException e) {
                // cf. RemiseService.generateByPeriodInternal : ne rattraper QUE le cas métier
                // attendu (déjà généré / état non éligible) — une exception plus large avalerait
                // silencieusement un vrai bug (NPE...) en le comptant comme "ignoré" sans trace.
                skipped++;
            }
        }

        // Avoirs — ristournes négatives
        for (SalesInvoice avoir : avoirs) {
            if (paiementRepo.existsByInvoice_IdAndTypeRistourne(avoir.getId(), type)) {
                skipped++;
                continue;
            }
            try {
                generateFromInvoiceForType(avoir.getId(), type);
                generated++;
            } catch (Exception e) {
                skipped++;
            }
        }

        int total = invoices.size() + avoirs.size();
        return Map.of("generated", generated, "skipped", skipped, "total", total);
    }

    /**
     * Comme generateFromInvoice mais filtre sur un type de ristourne (brasserie ou guinness).
     */
    public RistournePaiementDTO generateFromInvoiceForType(Long invoiceId, String typeRistourne) {
        SalesInvoice invoice = salesInvoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new IllegalArgumentException("Facture introuvable"));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        // "extournee" acceptée comme sur generateFromInvoice ci-dessus : cette variante par type
        // (utilisée par la génération par période) doit accepter exactement les mêmes états, sinon
        // une facture totalement extournée génère un règlement pour un type de ristourne mais pas
        // pour l'autre selon la méthode appelée.
        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState()) && !"extournee".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures/avoirs validés peuvent générer des règlements");
        }

        boolean isAvoir = "credit_note".equals(invoice.getType());
        BigDecimal sign = isAvoir ? BigDecimal.ONE.negate() : BigDecimal.ONE;

        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();

        Partner partner = partnerRepo.findById(partnerId)
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partnerId, "sale", companyId)
                        .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);

        List<Ristourne> ristournesFiltres = ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream()
                .filter(r -> typeRistourne.equals(r.getTypeRistourne()))
                .collect(Collectors.toList());

        if (ristournesFiltres.isEmpty()) {
            throw new IllegalStateException(
                "Aucune ristourne " + typeRistourne + " configurée pour ce client");
        }

        List<RistournePaiementLine> lines = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        for (Ristourne r : ristournesFiltres) {
            if (r.getMontantFixe() == null) continue;
            Long catId = r.getCategory().getId();
            BigDecimal qty = invoice.getLines().stream()
                    .filter(l -> !l.isConsigne())
                    .filter(l -> catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                    .map(l -> l.getQuantity() != null ? l.getQuantity() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            if (qty.compareTo(BigDecimal.ZERO) == 0) continue;

            BigDecimal montantUnit  = r.getMontantFixe();
            BigDecimal montantTotal = montantUnit.multiply(qty).setScale(2, RoundingMode.HALF_UP).multiply(sign);
            BigDecimal montantTTC;
            if ("brasserie".equals(r.getTypeRistourne())) {
                BigDecimal pcRate = tauxPc.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
                BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(BigDecimal.valueOf(0.1925));
                montantTTC = montantTotal.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
            } else {
                montantTTC = montantTotal.multiply(BigDecimal.ONE.add(BigDecimal.valueOf(0.1925))).setScale(2, RoundingMode.HALF_UP);
            }

            lines.add(RistournePaiementLine.builder()
                    .category(r.getCategory())
                    .quantite(qty.multiply(sign))
                    .montantUnitaire(montantUnit)
                    .montantTotal(montantTotal)
                    .montantTTC(montantTTC)
                    .build());
            total = total.add(montantTTC);
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException(
                "Aucune ligne " + typeRistourne + " applicable sur cette facture/avoir (vérifiez les catégories)");
        }

        String notesPrefix = isAvoir ? "Annulation ristourne depuis avoir " : "Généré depuis ";
        RistournePaiement entity = RistournePaiement.builder()
                .name(generateRstName(companyId))
                .partner(partner)
                .invoice(invoice)
                .date(invoice.getDate())
                .state("draft")
                .companyId(companyId)
                .typeRistourne(typeRistourne)
                .notes(notesPrefix + invoice.getName())
                .totalAmount(total)
                .lines(new ArrayList<>())
                .build();

        for (RistournePaiementLine line : lines) {
            line.setPaiement(entity);
            entity.getLines().add(line);
        }

        return toPaiementDTO(paiementRepo.save(entity));
    }

    // ======================== HELPERS ========================

    /**
     * Résout le categoryId d'une ligne: utilise celui de la ligne s'il est non-null,
     * sinon remonte au produit via son code.
     */
    private Long resolveCategoryId(Long categoryId, String productCode, Long companyId) {
        if (categoryId != null) return categoryId;
        if (productCode != null && !productCode.isBlank() && companyId != null) {
            return productRepo.findFirstByDefaultCodeAndCompanyId(productCode, companyId)
                    .map(com.erp.stock.entity.Product::getCategoryId)
                    .orElse(null);
        }
        return null;
    }

    /**
     * Calcule le montant TTC de ristourne à partir du type et du tauxPrecompte du client.
     * brasserie : montantHT × (1 + tauxPrecompte/100 + 0.1925)
     * guinness  : montantHT × (1 + 0.1925) — pas de précompte mais TVA s'applique
     */
    public BigDecimal computeRistourneTTC(BigDecimal montantHT, Long partnerId, Long companyId, Long categoryId) {
        Partner partner = partnerRepo.findById(partnerId).orElse(null);
        if (partner == null) return montantHT;
        return computeRistourneTTC(montantHT, partner, companyId, categoryId);
    }

    /** Variante évitant le rechargement du partenaire quand l'appelant l'a déjà en main (ex.
     *  savePaiement, qui l'appelle une fois par ligne du règlement — sans cette variante, chaque
     *  ligne refaisait un partnerRepo.findById pour le même partenaire déjà chargé une seule fois
     *  en tête de méthode). */
    public BigDecimal computeRistourneTTC(BigDecimal montantHT, Partner partner, Long companyId, Long categoryId) {
        // Filtré par catégorie de la ligne traitée : un même client peut avoir plusieurs
        // ristournes actives dans des catégories différentes (brasserie/guinness), chacune avec
        // son propre typeRistourne — prendre la première trouvée pour le partner (findFirst, sans
        // filtre catégorie) appliquait potentiellement le mauvais taux/coefficient à cette ligne.
        // findByPartnerIdAndCompanyIdAndActiveTrue (filtré en base) au lieu de
        // findByCompanyIdAndActiveTrue (TOUTES les ristournes actives de la société, filtrées par
        // partenaire ensuite en mémoire) — cette dernière était rechargée à l'identique à chaque
        // ligne du règlement dans savePaiement.
        Ristourne ristourne = ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partner.getId(), companyId)
                .stream()
                .filter(r -> categoryId == null || (r.getCategory() != null && categoryId.equals(r.getCategory().getId())))
                .findFirst().orElse(null);
        if (ristourne == null) return montantHT;

        String type = ristourne.getTypeRistourne();
        if ("brasserie".equals(type)) {
            BigDecimal taux = partner.getTauxPrecompte() != null
                    ? partner.getTauxPrecompte()
                    : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partner.getId(), "sale", companyId)
                            .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);
            BigDecimal pcRate = taux.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
            BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(BigDecimal.valueOf(0.1925));
            return montantHT.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
        } else if ("guinness".equals(type)) {
            // guinness : pas de précompte mais TVA 19.25%
            return montantHT.multiply(BigDecimal.ONE.add(BigDecimal.valueOf(0.1925))).setScale(2, RoundingMode.HALF_UP);
        }
        return montantHT.multiply(BigDecimal.ONE.add(BigDecimal.valueOf(0.1925))).setScale(2, RoundingMode.HALF_UP);
    }

    // ======================== RÈGLEMENTS GROUPÉS ========================

    /** Retourne les règlements confirmés groupés par client (filtrés par type si fourni). */
    @Transactional(readOnly = true)
    public List<PartnerGroup> getGroupedPaiements(Long companyId) {
        return getGroupedPaiements(companyId, null);
    }

    @Transactional(readOnly = true)
    public List<PartnerGroup> getGroupedPaiements(Long companyId, String type) {
        List<RistournePaiement> source = (type != null && !type.isBlank())
                ? paiementRepo.findByCompanyIdAndTypeRistourneOrderByCreatedAtDesc(companyId, type)
                : paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId);
        List<RistournePaiement> confirmed = source.stream()
                .filter(p -> "confirmed".equals(p.getState()))
                .collect(Collectors.toList());

        Map<Long, PartnerGroup> byPartner = new LinkedHashMap<>();
        for (RistournePaiement p : confirmed) {
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
     * Génère une facture de ventes normale (FV-xxx) regroupant tous les règlements
     * ristournes confirmés d'une liste de paiementIds pour un client donné.
     * Chaque ligne = une ligne de règlement ristourne (catégorie + montantTTC).
     * Marque les règlements comme "done".
     */
    public Map<String, Object> generateFacture(List<Long> paiementIds, Long companyId) {
        if (paiementIds == null || paiementIds.isEmpty()) {
            throw new IllegalArgumentException("Aucun règlement sélectionné");
        }

        List<RistournePaiement> paiements = paiementRepo.findAllById(paiementIds);
        if (paiements.isEmpty()) throw new IllegalArgumentException("Règlements introuvables");

        for (RistournePaiement p : paiements) {
            // companyId ici vient du corps de requête client — ne jamais s'y fier pour un contrôle
            // d'accès (il suffirait à l'attaquant de le renseigner avec la société de la victime).
            // tenantGuard compare à la société de l'utilisateur authentifié, dérivée du JWT.
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
        for (RistournePaiement p : paiements) {
            if (!partnerId.equals(p.getPartner().getId())) {
                throw new IllegalArgumentException("Tous les règlements doivent appartenir au même client");
            }
        }

        // Valider que tous les règlements sont du même type (brasserie ou guinness)
        Set<String> types = paiements.stream()
                .map(p -> p.getTypeRistourne() != null ? p.getTypeRistourne() : "")
                .collect(Collectors.toSet());
        if (types.size() > 1) {
            throw new IllegalArgumentException(
                "Tous les règlements doivent être du même type. Séparez les ristournes brasserie et guinness.");
        }
        String typeRistourne = types.iterator().next();
        // Compte comptable Odoo : 419800 = brasserie, 419801 = guinness
        String accountCode = "guinness".equals(typeRistourne) ? "419801" : "419800";

        // Trouver le journal de ventes
        Long journalId = journalRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .filter(j -> "sale".equals(j.getType()))
                .findFirst()
                .map(j -> j.getId())
                .orElseThrow(() -> new IllegalStateException("Aucun journal de ventes trouvé"));

        // Construire les lignes : quantity=1, prixUnitaire=montantTTC total de la ligne (comme Odoo)
        List<SalesInvoiceRequest.LineRequest> lines = new ArrayList<>();
        for (RistournePaiement p : paiements) {
            for (RistournePaiementLine l : p.getLines()) {
                BigDecimal montantTTC = l.getMontantTTC() != null ? l.getMontantTTC() : BigDecimal.ZERO;
                lines.add(SalesInvoiceRequest.LineRequest.builder()
                        .description("Ristourne " + l.getCategory().getName()
                                + " — " + p.getName()
                                + (p.getInvoice() != null ? " / " + p.getInvoice().getName() : ""))
                        .quantity(BigDecimal.ONE)
                        .prixUnitaire(montantTTC)
                        .tauxRemise(BigDecimal.ZERO)
                        .tauxTVA(BigDecimal.ZERO)
                        .accountCode(accountCode)
                        .categoryId(null)
                        .consigne(false)
                        .excludePrecompte(true)
                        .build());
            }
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException("Les règlements sélectionnés n'ont aucune ligne de détail");
        }

        String notes = "Avoir ristournes " + typeRistourne + " — "
                + paiements.stream().map(RistournePaiement::getName).collect(Collectors.joining(", "));

        SalesInvoiceRequest req = SalesInvoiceRequest.builder()
                .partnerId(partnerId)
                .journalId(journalId)
                .date(LocalDate.now())
                .companyId(companyId)
                .type("credit_note")
                .notes(notes)
                .lines(lines)
                .build();

        com.erp.sales.dto.SalesInvoiceDTO draft = salesService.createInvoice(req);
        com.erp.sales.dto.SalesInvoiceDTO invoice = salesService.postInvoice(draft.getId());

        for (RistournePaiement p : paiements) {
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

    @Data
    public static class PartnerGroup {
        private Long partnerId;
        private String partnerName;
        private BigDecimal totalAmount;
        private List<RistournePaiementDTO> paiements;

        public PartnerGroup(Long partnerId, String partnerName,
                            BigDecimal totalAmount, List<RistournePaiementDTO> paiements) {
            this.partnerId   = partnerId;
            this.partnerName = partnerName;
            this.totalAmount = totalAmount;
            this.paiements   = paiements;
        }
    }

    private String generateRstName(Long companyId) {
        companyRepo.findByIdForUpdate(companyId);
        long count = paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId).size() + 1;
        return String.format("RST-%d-%05d", java.time.Year.now().getValue(), count);
    }

    private RistourneDTO toDTO(Ristourne r) {
        BigDecimal taux = r.getPartner().getTauxPrecompte() != null
                ? r.getPartner().getTauxPrecompte() : BigDecimal.ZERO;
        BigDecimal ttcUnit = computeUnitTTC(r.getMontantFixe(), r.getTypeRistourne(), taux);
        return RistourneDTO.builder()
                .id(r.getId())
                .partnerId(r.getPartner().getId())
                .partnerName(r.getPartner().getName())
                .categoryId(r.getCategory().getId())
                .categoryName(r.getCategory().getName())
                .montantFixe(r.getMontantFixe())
                .montantTTCUnitaire(ttcUnit)
                .typeRistourne(r.getTypeRistourne())
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

    private RistournePaiementDTO toPaiementDTO(RistournePaiement p) {
        List<RistournePaiementDTO.LineDTO> lines = p.getLines().stream()
                .map(l -> RistournePaiementDTO.LineDTO.builder()
                        .id(l.getId())
                        .categoryId(l.getCategory().getId())
                        .categoryName(l.getCategory().getName())
                        .quantite(l.getQuantite())
                        .montantUnitaire(l.getMontantUnitaire())
                        .montantTotal(l.getMontantTotal())
                        .montantTTC(l.getMontantTTC())
                        .build())
                .collect(Collectors.toList());

        return RistournePaiementDTO.builder()
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
                .accountMoveId(p.getAccountMove() != null ? p.getAccountMove().getId() : null)
                .accountMoveName(p.getAccountMove() != null ? p.getAccountMove().getName() : null)
                .companyId(p.getCompanyId())
                .notes(p.getNotes())
                .typeRistourne(p.getTypeRistourne())
                .createdAt(p.getCreatedAt())
                .lines(lines)
                .build();
    }
}
