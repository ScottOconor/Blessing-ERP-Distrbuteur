package com.erp.stock.repository;

import com.erp.stock.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCompanyIdAndActiveOrderByNameAsc(Long companyId, boolean active);

    List<Product> findByCompanyIdOrderByNameAsc(Long companyId);
    Optional<Product> findFirstByDefaultCodeAndCompanyId(String defaultCode, Long companyId);
    Optional<Product> findFirstByCompanyIdAndDefaultCodeIgnoreCase(Long companyId, String defaultCode);

    /** Articles (actifs ou non) portant cette référence, comparée sans casse ni espaces. */
    @Query("SELECT p FROM Product p WHERE p.companyId = :cid AND LOWER(TRIM(p.defaultCode)) = LOWER(TRIM(:code))")
    List<Product> findByNormalizedCode(@Param("cid") Long companyId, @Param("code") String code);
    Optional<Product> findFirstByCompanyIdAndNameIgnoreCaseAndCategoryIdAndType(Long companyId, String name, Long categoryId, String type);

    @Query(value = """
        SELECT CASE WHEN
            EXISTS (SELECT 1 FROM stock_moves WHERE product_id = :productId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM stock_adjustments WHERE product_id = :productId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM stock_loss_lines l JOIN stock_losses s ON s.id = l.stock_loss_id WHERE l.product_id = :productId AND s.company_id = :companyId)
            OR EXISTS (SELECT 1 FROM sales_order_lines l JOIN sales_orders o ON o.id = l.order_id WHERE l.product_id = :productId AND o.company_id = :companyId)
            OR EXISTS (SELECT 1 FROM sales_invoice_lines l JOIN sales_invoices i ON i.id = l.invoice_id WHERE l.product_id = :productId AND i.company_id = :companyId)
            OR EXISTS (SELECT 1 FROM purchase_order_lines l JOIN purchase_orders o ON o.id = l.order_id WHERE l.product_id = :productId AND o.company_id = :companyId)
            OR EXISTS (SELECT 1 FROM purchase_invoice_lines l JOIN purchase_invoices i ON i.id = l.invoice_id WHERE l.product_id = :productId AND i.company_id = :companyId)
        THEN true ELSE false END
        """, nativeQuery = true)
    boolean hasOperationalReferences(@Param("productId") Long productId, @Param("companyId") Long companyId);

    @Query("SELECT p FROM Product p WHERE p.companyId = :cid AND p.active = true AND (LOWER(p.name) LIKE LOWER(CONCAT('%',:q,'%')) OR LOWER(p.defaultCode) LIKE LOWER(CONCAT('%',:q,'%'))) ORDER BY p.name")
    List<Product> search(@Param("cid") Long companyId, @Param("q") String query);

    List<Product> findByCompanyIdAndCategoryId(Long companyId, Long categoryId);
}
