package com.erp.stock.dto;

import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class AgencyDTO {
    private Long id;
    private String name;
    private String code;
    private String address;
    private String contactPerson;
    private String phone;
    private String email;
    private Long companyId;
    private boolean active;
}
