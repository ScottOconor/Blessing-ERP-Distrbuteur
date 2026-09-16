package com.erp.purchases.repository;

import com.erp.purchases.entity.PrixFournisseurArticle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrixFournisseurArticleRepository extends JpaRepository<PrixFournisseurArticle, Long> {

    Optional<PrixFournisseurArticle> findByProductIdAndFournisseurIdAndCompanyId(Long productId, Long fournisseurId, Long companyId);

    List<PrixFournisseurArticle> findByFournisseurIdAndCompanyIdOrderByProductId(Long fournisseurId, Long companyId);

    List<PrixFournisseurArticle> findByProductIdAndCompanyId(Long productId, Long companyId);

    List<PrixFournisseurArticle> findByCompanyId(Long companyId);

    void deleteByProductIdAndFournisseurIdAndCompanyId(Long productId, Long fournisseurId, Long companyId);
}
