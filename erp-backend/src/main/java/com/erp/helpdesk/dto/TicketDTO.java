package com.erp.helpdesk.dto;

import com.erp.helpdesk.entity.TicketCategory;
import com.erp.helpdesk.entity.TicketPriority;
import com.erp.helpdesk.entity.TicketStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class TicketDTO {
    private Long id;
    private String ticketNumber;
    @NotBlank(message = "Le titre est obligatoire")
    @Size(max = 255, message = "Le titre ne doit pas dépasser 255 caractères")
    private String title;
    @Size(max = 10000, message = "La description ne doit pas dépasser 10000 caractères")
    private String description;
    private TicketStatus status;
    private TicketPriority priority;
    private TicketCategory category;
    private String createdByUsername;
    private String assignedToUsername;
    private Long companyId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime resolvedAt;
    private List<TicketCommentDTO> comments;
}
