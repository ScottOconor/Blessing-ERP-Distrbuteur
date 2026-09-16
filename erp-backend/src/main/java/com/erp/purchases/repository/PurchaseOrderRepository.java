package com.erp.purchases.repository;

import com.erp.purchases.entity.PurchaseOrder;
import org.hibernate.jpa.HibernateHints;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.query.Param;

import jakarta.persistence.QueryHint;
import java.util.List;
import java.util.stream.Stream;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {

    List<PurchaseOrder> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    /** Version streaming — évite l'OutOfMemoryError sur une liste de commandes trop volumineuse
     *  (voir SalesInvoiceRepository.streamByCompanyIdAndType pour le contexte complet). */
    @QueryHints(@QueryHint(name = HibernateHints.HINT_FETCH_SIZE, value = "50"))
    @Query("SELECT o FROM PurchaseOrder o WHERE o.company.id = :companyId ORDER BY o.createdAt DESC")
    Stream<PurchaseOrder> streamByCompanyId(@Param("companyId") Long companyId);

    /** Tous les bons de commande "actifs" (tout sauf brouillon) pour le snapshot — seul filet de
     *  sécurité de réconciliation pour PURCHASE_ORDER_RECEIVED côté Hub. */
    List<PurchaseOrder> findByCompanyIdAndStateNotOrderByCreatedAtDesc(Long companyId, String excludedState);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(p.name, 9) AS int)), 0) FROM PurchaseOrder p WHERE p.company.id = :cid AND p.name LIKE CONCAT('AC-', :year, '-%')")
    Integer findMaxSequenceByCompanyAndYear(@Param("cid") Long companyId, @Param("year") int year);
}
