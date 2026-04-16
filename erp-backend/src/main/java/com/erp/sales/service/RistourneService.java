package com.erp.sales.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.entity.Precompte;
import com.erp.common.repository.PrecompteRepository;
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
    @Lazy private final SalesService salesService;

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
        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));
        ProductCategory cat = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));

        Ristourne entity = ristourneRepo.findByPartnerIdAndCategoryIdAndCompanyId(
                dto.getPartnerId(), dto.getCategoryId(), dto.getCompanyId())
                .orElse(Ristourne.builder().build());

        entity.setPartner(partner);
        entity.setCategory(cat);
        entity.setMontantFixe(dto.getMontantFixe());
        entity.setTypeRistourne(dto.getTypeRistourne());
        entity.setCompanyId(dto.getCompanyId());
        entity.setActive(true);
        return toDTO(ristourneRepo.save(entity));
    }

    public void delete(Long id) {
        Ristourne r = ristourneRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ristourne introuvable"));
        r.setActive(false);
        ristourneRepo.save(r);
    }

    /**
     * Import bulk de ristournes depuis Excel.
     * Colonnes attendues : Client, Catégorie d'article, Type de ristourne, Montant de la ristourne, Actif
     */
    public List<RistourneDTO> importRistournes(List<RistourneImportRow> rows, Long companyId) {
        List<RistourneDTO> result = new java.util.ArrayList<>();
        for (RistourneImportRow row : rows) {
            try {
                Partner partner = partnerRepo.findByNameIgnoreCaseAndCompanyId(row.getClientName(), companyId)
                        .orElse(null);
                if (partner == null) continue;

                java.util.Optional<ProductCategory> catOpt = categoryRepo.findByNameIgnoreCaseAndCompanyId(
                        row.getCategoryName(), companyId);
                if (catOpt.isEmpty()) continue;

                Long categoryId = catOpt.get().getId();
                RistourneDTO dto = RistourneDTO.builder()
                        .partnerId(partner.getId())
                        .categoryId(categoryId)
                        .montantFixe(row.getMontantFixe() != null ? row.getMontantFixe() : BigDecimal.ZERO)
                        .typeRistourne(row.getTypeRistourne())
                        .companyId(companyId)
                        .build();
                result.add(save(dto));
            } catch (Exception ignored) {}
        }
        return result;
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
    public List<RistournePaiementDTO> getAllPaiements(Long companyId) {
        return paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream().map(this::toPaiementDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RistournePaiementDTO getPaiement(Long id) {
        return toPaiementDTO(paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable")));
    }

    public RistournePaiementDTO savePaiement(RistournePaiementDTO dto) {
        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        RistournePaiement entity = dto.getId() != null
                ? paiementRepo.findById(dto.getId()).orElse(RistournePaiement.builder().build())
                : RistournePaiement.builder().build();

        if (entity.getId() == null) {
            entity.setName(generateRstName(dto.getCompanyId()));
        }

        entity.setPartner(partner);
        entity.setDate(dto.getDate() != null ? dto.getDate() : LocalDate.now());
        entity.setState("draft");
        entity.setCompanyId(dto.getCompanyId());
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
                        montantTotal, partner.getId(), entity.getCompanyId());

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
        if (!"draft".equals(p.getState())) {
            throw new IllegalStateException("Seul un brouillon peut être confirmé");
        }
        p.setState("confirmed");
        return toPaiementDTO(paiementRepo.save(p));
    }

    public RistournePaiementDTO cancelPaiement(Long id) {
        RistournePaiement p = paiementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Règlement introuvable"));
        p.setState("cancelled");
        return toPaiementDTO(paiementRepo.save(p));
    }

    /**
     * Génère un règlement ristourne à partir d'une facture vente.
     * Pour chaque ristourne active du client, calcule la quantité vendue par catégorie
     * sur cette facture et crée les lignes correspondantes.
     */
    public RistournePaiementDTO generateFromInvoice(Long invoiceId) {
        SalesInvoice invoice = salesInvoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new IllegalArgumentException("Facture introuvable"));

        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures validées peuvent générer des règlements");
        }

        Long partnerId  = invoice.getPartner().getId();
        Long companyId  = invoice.getCompany().getId();

        Partner partner = partnerRepo.findById(partnerId)
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));

        // Taux précompte pour ce client (vente)
        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyId(partnerId, "sale", companyId)
                        .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);

        List<RistournePaiementLine> lines = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        for (Ristourne r : ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)) {
            Long catId = r.getCategory().getId();

            // Somme des quantités vendues dans cette catégorie sur la facture
            // resolveCategoryId fallback: si categoryId null sur la ligne, on cherche via le code produit
            BigDecimal qty = invoice.getLines().stream()
                    .filter(l -> !l.isConsigne())
                    .filter(l -> catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                    .map(l -> l.getQuantity() != null ? l.getQuantity() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            if (qty.compareTo(BigDecimal.ZERO) == 0) continue;

            // montantUnitaire = montantFixe (HT), montantTTC = HT × (1 + tauxPc/100) pour brasserie, HT pour guinness
            BigDecimal montantUnit = r.getMontantFixe();
            BigDecimal montantTotal = montantUnit.multiply(qty).setScale(2, RoundingMode.HALF_UP);
            BigDecimal montantTTC;
            if ("brasserie".equals(r.getTypeRistourne())) {
                BigDecimal coeff = BigDecimal.ONE.add(tauxPc.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP));
                montantTTC = montantTotal.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
            } else {
                montantTTC = montantTotal;
            }

            lines.add(RistournePaiementLine.builder()
                    .category(r.getCategory())
                    .quantite(qty)
                    .montantUnitaire(montantUnit)
                    .montantTotal(montantTotal)
                    .montantTTC(montantTTC)
                    .build());
            total = total.add(montantTTC);
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException("Aucune ristourne applicable sur cette facture (vérifiez les catégories des lignes)");
        }

        RistournePaiement entity = RistournePaiement.builder()
                .name(generateRstName(companyId))
                .partner(partner)
                .invoice(invoice)
                .date(invoice.getDate())
                .state("draft")
                .companyId(companyId)
                .notes("Généré depuis " + invoice.getName())
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
     * brasserie : montantHT × (1 + tauxPrecompte/100)
     * guinness  : montantHT = montantTTC (pas de précompte)
     * null/autre: montantHT brut
     */
    public BigDecimal computeRistourneTTC(BigDecimal montantHT, Long partnerId, Long companyId) {
        Partner partner = partnerRepo.findById(partnerId).orElse(null);
        if (partner == null) return montantHT;

        Ristourne ristourne = ristourneRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream().filter(r -> r.getPartner().getId().equals(partnerId))
                .findFirst().orElse(null);
        if (ristourne == null) return montantHT;

        String type = ristourne.getTypeRistourne();
        if ("brasserie".equals(type)) {
            BigDecimal taux = partner.getTauxPrecompte() != null
                    ? partner.getTauxPrecompte()
                    : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyId(partnerId, "sale", companyId)
                            .map(Precompte::getTauxPrecompte).orElse(BigDecimal.ZERO);
            BigDecimal coeff = BigDecimal.ONE.add(taux.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP));
            return montantHT.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
        } else if ("guinness".equals(type)) {
            return montantHT.setScale(2, RoundingMode.HALF_UP);
        }
        return montantHT.setScale(2, RoundingMode.HALF_UP);
    }

    // ======================== RÈGLEMENTS GROUPÉS ========================

    /** Retourne les règlements confirmés groupés par client. */
    @Transactional(readOnly = true)
    public List<PartnerGroup> getGroupedPaiements(Long companyId) {
        List<RistournePaiement> confirmed = paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream()
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

        // Trouver le journal de ventes
        Long journalId = journalRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .filter(j -> "sale".equals(j.getType()))
                .findFirst()
                .map(j -> j.getId())
                .orElseThrow(() -> new IllegalStateException("Aucun journal de ventes trouvé"));

        // Construire les lignes de la facture
        List<SalesInvoiceRequest.LineRequest> lines = new ArrayList<>();
        for (RistournePaiement p : paiements) {
            for (RistournePaiementLine l : p.getLines()) {
                lines.add(SalesInvoiceRequest.LineRequest.builder()
                        .description("Ristourne " + l.getCategory().getName()
                                + " — " + p.getName()
                                + (p.getInvoice() != null ? " / " + p.getInvoice().getName() : ""))
                        .quantity(l.getQuantite() != null ? l.getQuantite() : BigDecimal.ONE)
                        .prixUnitaire(l.getMontantUnitaire() != null ? l.getMontantUnitaire() : BigDecimal.ZERO)
                        .tauxRemise(BigDecimal.ZERO)
                        .tauxTVA(BigDecimal.ZERO)
                        .categoryId(null)   // pas de ristourne sur une facture ristourne
                        .consigne(false)
                        .build());
            }
        }

        if (lines.isEmpty()) {
            throw new IllegalStateException("Les règlements sélectionnés n'ont aucune ligne de détail");
        }

        String notes = "Facture ristournes — "
                + paiements.stream().map(RistournePaiement::getName).collect(Collectors.joining(", "));

        SalesInvoiceRequest req = SalesInvoiceRequest.builder()
                .partnerId(partnerId)
                .journalId(journalId)
                .date(LocalDate.now())
                .companyId(companyId)
                .type("invoice")
                .notes(notes)
                .lines(lines)
                .build();

        com.erp.sales.dto.SalesInvoiceDTO invoice = salesService.createInvoice(req);

        // Marquer les règlements comme "done" et lier la facture
        for (RistournePaiement p : paiements) {
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
        long count = paiementRepo.findByCompanyIdOrderByCreatedAtDesc(companyId).size() + 1;
        return String.format("RST-%d-%05d", java.time.Year.now().getValue(), count);
    }

    private RistourneDTO toDTO(Ristourne r) {
        return RistourneDTO.builder()
                .id(r.getId())
                .partnerId(r.getPartner().getId())
                .partnerName(r.getPartner().getName())
                .categoryId(r.getCategory().getId())
                .categoryName(r.getCategory().getName())
                .montantFixe(r.getMontantFixe())
                .typeRistourne(r.getTypeRistourne())
                .companyId(r.getCompanyId())
                .active(r.isActive())
                .build();
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
                .companyId(p.getCompanyId())
                .notes(p.getNotes())
                .createdAt(p.getCreatedAt())
                .lines(lines)
                .build();
    }
}
