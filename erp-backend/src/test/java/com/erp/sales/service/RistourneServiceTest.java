package com.erp.sales.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.repository.PrecompteRepository;
import com.erp.common.service.TenantGuard;
import com.erp.sales.entity.Ristourne;
import com.erp.sales.repository.RistournePaiementRepository;
import com.erp.sales.repository.RistourneRepository;
import com.erp.sales.repository.SalesInvoiceRepository;
import com.erp.stock.entity.ProductCategory;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.sync.service.SyncEventPublisher;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

/**
 * computeRistourneTTC correctif de cette session : un même client peut avoir plusieurs ristournes
 * actives dans des catégories différentes (brasserie/guinness), chacune avec son propre coefficient
 * TVA/précompte — l'ancien code prenait la PREMIÈRE ristourne du partenaire trouvée (findFirst sans
 * filtre catégorie), risquant d'appliquer le mauvais taux à une ligne. Le correctif filtre par la
 * catégorie de la ligne réellement traitée.
 */
@ExtendWith(MockitoExtension.class)
class RistourneServiceTest {

    @Mock private RistourneRepository ristourneRepo;
    @Mock private RistournePaiementRepository paiementRepo;
    @Mock private PartnerRepository partnerRepo;
    @Mock private ProductCategoryRepository categoryRepo;
    @Mock private PrecompteRepository precompteRepo;
    @Mock private SalesInvoiceRepository salesInvoiceRepo;
    @Mock private ProductRepository productRepo;
    @Mock private AccountJournalRepository journalRepo;
    @Mock private SyncEventPublisher syncPublisher;
    @Mock private SalesService salesService;
    @Mock private TenantGuard tenantGuard;

    @InjectMocks
    private RistourneService ristourneService;

    private ProductCategory category(Long id) {
        return ProductCategory.builder().id(id).name("cat" + id).companyId(1L).build();
    }

    private Ristourne ristourne(Partner partner, Long categoryId, String type) {
        return Ristourne.builder().partner(partner).category(category(categoryId))
                .montantFixe(new BigDecimal("100")).typeRistourne(type).companyId(1L).active(true).build();
    }

    @Test
    void usesTheRistourneMatchingTheGivenCategoryNotJustTheFirstOne() {
        Partner partner = Partner.builder().id(10L).tauxPrecompte(BigDecimal.ZERO).build();
        when(partnerRepo.findById(10L)).thenReturn(Optional.of(partner));

        // Deux ristournes pour le même partenaire, catégories différentes, types différents.
        Ristourne brasserieRistourne = ristourne(partner, 1L, "brasserie");
        Ristourne guinnessRistourne = ristourne(partner, 2L, "guinness");
        when(ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(10L, 1L))
                .thenReturn(List.of(brasserieRistourne, guinnessRistourne));

        // On traite une ligne de catégorie 2 (guinness) : TOTAL TTC = TOTAL HT, le montant saisi
        // est déjà le TTC — aucune TVA/précompte à ajouter par-dessus.
        BigDecimal result = ristourneService.computeRistourneTTC(new BigDecimal("1000"), 10L, 1L, 2L);

        assertThat(result).isEqualByComparingTo("1000.00");
    }

    @Test
    void usesTheBrasserieRistourneWhenCategoryMatchesIt() {
        Partner partner = Partner.builder().id(10L).tauxPrecompte(new BigDecimal("5")).build();
        when(partnerRepo.findById(10L)).thenReturn(Optional.of(partner));

        Ristourne brasserieRistourne = ristourne(partner, 1L, "brasserie");
        Ristourne guinnessRistourne = ristourne(partner, 2L, "guinness");
        when(ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(10L, 1L))
                .thenReturn(List.of(guinnessRistourne, brasserieRistourne));

        // Catégorie 1 (brasserie) : coefficient = 1 + 5% + 19.25% = 1.2425.
        BigDecimal result = ristourneService.computeRistourneTTC(new BigDecimal("1000"), 10L, 1L, 1L);

        assertThat(result).isEqualByComparingTo("1242.50");
    }

    @Test
    void returnsRawAmountWhenNoRistourneMatchesTheCategory() {
        Partner partner = Partner.builder().id(10L).build();
        when(partnerRepo.findById(10L)).thenReturn(Optional.of(partner));
        when(ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(10L, 1L)).thenReturn(List.of(ristourne(partner, 1L, "brasserie")));

        BigDecimal result = ristourneService.computeRistourneTTC(new BigDecimal("1000"), 10L, 1L, 99L);

        assertThat(result).isEqualByComparingTo("1000");
    }

    @Test
    void returnsRawAmountWhenPartnerDoesNotExist() {
        when(partnerRepo.findById(10L)).thenReturn(Optional.empty());

        BigDecimal result = ristourneService.computeRistourneTTC(new BigDecimal("1000"), 10L, 1L, 1L);

        assertThat(result).isEqualByComparingTo("1000");
    }
}
