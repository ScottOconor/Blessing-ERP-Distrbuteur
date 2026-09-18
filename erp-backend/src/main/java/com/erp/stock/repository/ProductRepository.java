package com.erp.stock.repository;

import com.erp.stock.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCompanyIdAndActiveOrderByNameAsc(Long companyId, boolean active);

    /** Snapshot incrémental (SnapshotService) : ne renvoie que les articles modifiés depuis le
     *  dernier snapshot réussi, au lieu du catalogue entier à chaque passage horaire. */
    List<Product> findByCompanyIdAndActiveAndUpdatedAtGreaterThanEqual(Long companyId, boolean active, java.time.LocalDateTime modifiedSince);
    List<Product> findByCompanyIdOrderByNameAsc(Long companyId);
    Optional<Product> findFirstByDefaultCodeAndCompanyId(String defaultCode, Long companyId);

    @Query("SELECT p FROM Product p WHERE p.companyId = :cid AND p.type = 'product' AND p.active = true ORDER BY p.name")
    List<Product> findStorableByCompanyId(@Param("cid") Long companyId);

    @Query("SELECT p FROM Product p WHERE p.companyId = :cid AND (LOWER(p.name) LIKE LOWER(CONCAT('%',:q,'%')) OR LOWER(p.defaultCode) LIKE LOWER(CONCAT('%',:q,'%'))) ORDER BY p.name")
    List<Product> search(@Param("cid") Long companyId, @Param("q") String query);

    List<Product> findByCompanyIdAndCategoryId(Long companyId, Long categoryId);
}
