package com.erp.helpdesk.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "helpdesk_ticket_comments")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class TicketComment {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long ticketId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private String authorUsername;

    /** true = note interne non visible par le demandeur */
    @Builder.Default
    @Column(nullable = false)
    private boolean internal = false;

    /** true = commentaire reçu depuis le Hub (affiché avec badge "Support Hub") */
    @Builder.Default
    @Column(nullable = false)
    private boolean fromHub = false;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
