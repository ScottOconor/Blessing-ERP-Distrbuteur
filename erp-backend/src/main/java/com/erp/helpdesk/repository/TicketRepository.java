package com.erp.helpdesk.repository;

import com.erp.helpdesk.entity.Ticket;
import com.erp.helpdesk.entity.TicketStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    List<Ticket> findByCompanyIdAndStatusOrderByCreatedAtDesc(Long companyId, TicketStatus status);

    List<Ticket> findByCompanyIdAndCreatedByUsernameOrderByCreatedAtDesc(Long companyId, String createdBy);

    List<Ticket> findByCompanyIdAndStatusAndCreatedByUsernameOrderByCreatedAtDesc(Long companyId, TicketStatus status, String createdBy);

    List<Ticket> findByCompanyIdAndAssignedToUsernameOrderByCreatedAtDesc(Long companyId, String username);

    List<Ticket> findByCompanyIdAndStatusAndAssignedToUsernameOrderByCreatedAtDesc(Long companyId, TicketStatus status, String username);

    long countByCompanyIdAndStatus(Long companyId, TicketStatus status);

    long countByCompanyId(Long companyId);

    /** Plus grand numéro de ticket attribué (HD-2026-0042 -> 42), toutes années confondues, 0 si aucun. */
    @Query(value = "SELECT COALESCE(MAX(CAST(SUBSTRING(ticket_number FROM '^HD-[0-9]{4}-([0-9]+)$') AS BIGINT)), 0) " +
                   "FROM helpdesk_tickets WHERE company_id = :cid", nativeQuery = true)
    long findMaxNumberSequence(@Param("cid") Long companyId);
}
