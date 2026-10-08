package com.erp.accounting.service;

import com.erp.accounting.dto.ServiceAccountsDTO;
import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import com.erp.stock.entity.Product;
import com.erp.stock.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Comptes de produit des ventes de services, paramétrés en comptabilité plutôt que figés dans le
 * code : à la validation d'une facture, une ligne de service est comptabilisée sur le compte du
 * service, à défaut sur le compte par défaut de la société, à défaut sur 706100.
 */
@Service
@RequiredArgsConstructor
public class ServiceAccountService {

    public static final String FALLBACK_SERVICE_ACCOUNT = "706100";

    private final ProductRepository productRepo;
    private final CompanyRepository companyRepo;
    private final AccountAccountRepository accountRepo;
    private final TenantGuard tenantGuard;

    @Transactional(readOnly = true)
    public ServiceAccountsDTO getServiceAccounts(Long companyId) {
        tenantGuard.check(companyId);
        Company company = companyRepo.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));
        String defaultCode = blankToNull(company.getServiceRevenueAccountCode());
        String effectiveDefault = defaultCode != null ? defaultCode : FALLBACK_SERVICE_ACCOUNT;
        List<ServiceAccountsDTO.Item> services = productRepo.findByCompanyIdAndActiveOrderByNameAsc(companyId, true).stream()
                .filter(p -> "service".equals(p.getType()))
                .map(p -> ServiceAccountsDTO.Item.builder()
                        .productId(p.getId())
                        .defaultCode(p.getDefaultCode())
                        .name(p.getName())
                        .incomeAccountCode(blankToNull(p.getIncomeAccountCode()))
                        .effectiveAccountCode(blankToNull(p.getIncomeAccountCode()) != null
                                ? p.getIncomeAccountCode().trim() : effectiveDefault)
                        .build())
                .toList();
        return ServiceAccountsDTO.builder()
                .defaultAccountCode(defaultCode)
                .effectiveDefaultAccountCode(effectiveDefault)
                .services(services)
                .build();
    }

    @Transactional
    public ServiceAccountsDTO setDefaultAccount(Long companyId, String accountCode) {
        tenantGuard.check(companyId);
        Company company = companyRepo.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));
        company.setServiceRevenueAccountCode(validateAccount(accountCode, companyId));
        companyRepo.save(company);
        return getServiceAccounts(companyId);
    }

    @Transactional
    public ServiceAccountsDTO setProductAccount(Long productId, String accountCode) {
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Service introuvable : " + productId));
        tenantGuard.check(product.getCompanyId());
        if (!"service".equals(product.getType())) {
            throw new IllegalArgumentException("« " + product.getName() + " » n'est pas un service");
        }
        product.setIncomeAccountCode(validateAccount(accountCode, product.getCompanyId()));
        productRepo.save(product);
        return getServiceAccounts(product.getCompanyId());
    }

    /** Code de compte à utiliser pour une vente de ce service (voir l'ordre de priorité en tête). */
    @Transactional(readOnly = true)
    public String resolveAccountCode(Product product, Company company) {
        String own = product != null ? blankToNull(product.getIncomeAccountCode()) : null;
        if (own != null) return own;
        String def = company != null ? blankToNull(company.getServiceRevenueAccountCode()) : null;
        return def != null ? def : FALLBACK_SERVICE_ACCOUNT;
    }

    /** Vide = retour au compte par défaut. Sinon le compte doit exister dans le plan comptable de
     *  la société, être actif et être un compte de produits (classe 7). */
    private String validateAccount(String accountCode, Long companyId) {
        String code = blankToNull(accountCode);
        if (code == null) return null;
        AccountAccount account = accountRepo.findFirstByCodeAndCompanyId(code, companyId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Compte " + code + " introuvable dans le plan comptable — créez-le d'abord"));
        if (account.isDeprecated()) {
            throw new IllegalArgumentException("Le compte " + code + " est désactivé");
        }
        if (!code.startsWith("7")) {
            throw new IllegalArgumentException("Le compte " + code + " n'est pas un compte de produits (classe 7)");
        }
        return code;
    }

    private static String blankToNull(String s) {
        return s == null || s.isBlank() ? null : s.trim();
    }
}
