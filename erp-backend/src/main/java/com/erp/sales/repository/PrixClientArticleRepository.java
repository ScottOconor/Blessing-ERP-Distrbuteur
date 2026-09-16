package com.erp.sales.repository;

import com.erp.sales.entity.PrixClientArticle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrixClientArticleRepository extends JpaRepository<PrixClientArticle, Long> {

    Optional<PrixClientArticle> findByProductIdAndClientIdAndCompanyId(Long productId, Long clientId, Long companyId);

    List<PrixClientArticle> findByClientIdAndCompanyIdOrderByProductId(Long clientId, Long companyId);

    List<PrixClientArticle> findByProductIdAndCompanyId(Long productId, Long companyId);

    void deleteByProductIdAndClientIdAndCompanyId(Long productId, Long clientId, Long companyId);

    List<PrixClientArticle> findByCompanyId(Long companyId);
}
