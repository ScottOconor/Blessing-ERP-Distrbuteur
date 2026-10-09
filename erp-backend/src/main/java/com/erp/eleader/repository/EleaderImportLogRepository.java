package com.erp.eleader.repository;

import com.erp.eleader.entity.EleaderImportLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EleaderImportLogRepository extends JpaRepository<EleaderImportLog, Long> {
    List<EleaderImportLog> findByCompanyIdOrderByImportDateDesc(Long companyId);
    List<EleaderImportLog> findByEleaderReferenceAndCompanyIdOrderByImportDateDesc(String eleaderReference, Long companyId);
    long countByCompanyId(Long companyId);

    /** Délie les journaux d'import d'un bon supprimé (le doublon n'est plus bloqué : la facture
     *  eLeader peut être réimportée). */
    @org.springframework.data.jpa.repository.Modifying
    @org.springframework.data.jpa.repository.Query("UPDATE EleaderImportLog l SET l.salesOrder = null WHERE l.salesOrder.id = :orderId")
    int detachSalesOrder(@org.springframework.data.repository.query.Param("orderId") Long orderId);
}
