package com.erp.helpdesk.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class TicketStatsDTO {
    private long totalOuvert;
    private long totalEnCours;
    private long totalResolu;
    private long totalFerme;
    private long totalCritique;
    private long totalHaute;
}
