package com.erp.sales.repository;

import com.erp.sales.entity.SalesOrder;
import org.hibernate.jpa.HibernateHints;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.persistence.QueryHint;
import java.util.List;
import java.util.stream.Stream;

@Repository
public interface SalesOrderRepository extends JpaRepository<SalesOrder, Long> {

    List<SalesOrder> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    /** Version streaming — voir SalesInvoiceRepository.streamByCompanyIdAndType pour le pourquoi
     *  (évite l'OutOfMemoryError sur une liste de commandes trop volumineuse). */
    @QueryHints(@QueryHint(name = HibernateHints.HINT_FETCH_SIZE, value = "50"))
    @Query("SELECT o FROM SalesOrder o WHERE o.company.id = :companyId ORDER BY o.date DESC, o.name DESC")
    Stream<SalesOrder> streamByCompanyId(@Param("companyId") Long companyId);

    List<SalesOrder> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    /** Tous les bons de commande "actifs" (tout sauf brouillon) pour le snapshot — seul filet de
     *  sécurité de réconciliation pour SALE_ORDER_CONFIRMED côté Hub. */
    List<SalesOrder> findByCompanyIdAndStateNotOrderByDateDescNameDesc(Long companyId, String excludedState);

    List<SalesOrder> findByCompanyIdAndPartnerIdOrderByDateDesc(Long companyId, Long partnerId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(o.name, LENGTH(o.name) - 4) AS int)), 0) " +
           "FROM SalesOrder o WHERE o.company.id = :companyId AND YEAR(o.date) = :year")
    Integer findMaxSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(o.name, LENGTH(o.name) - 4) AS int)), 0) " +
           "FROM SalesOrder o WHERE o.company.id = :companyId AND YEAR(o.date) = :year AND o.name LIKE 'EL-%'")
    Integer findMaxEleaderSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);
}
