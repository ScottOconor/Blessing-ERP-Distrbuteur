package com.erp.helpdesk.repository;

import com.erp.helpdesk.entity.Ticket;
import com.erp.helpdesk.entity.TicketStatus;
import org.springframework.data.jpa.repository.JpaRepository;

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
}
