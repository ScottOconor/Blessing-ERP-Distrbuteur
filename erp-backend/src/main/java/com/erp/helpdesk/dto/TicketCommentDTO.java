package com.erp.helpdesk.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class TicketCommentDTO {
    private Long id;
    private Long ticketId;
    private String content;
    private String authorUsername;
    private boolean internal;
    private boolean fromHub;
    private LocalDateTime createdAt;
}
