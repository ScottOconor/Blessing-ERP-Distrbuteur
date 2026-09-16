package com.erp.helpdesk.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "helpdesk_tickets")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Ticket {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ticket_number", nullable = false, unique = true)
    private String ticketNumber;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private TicketStatus status = TicketStatus.OUVERT;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private TicketPriority priority = TicketPriority.MOYENNE;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private TicketCategory category = TicketCategory.INCIDENT;

    @Column(nullable = false)
    private String createdByUsername;

    private String assignedToUsername;

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    private LocalDateTime resolvedAt;
}
