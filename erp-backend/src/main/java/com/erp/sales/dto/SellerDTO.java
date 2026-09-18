package com.erp.sales.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SellerDTO {
    private Long id;
    private String ref;
    private String name;
    private String phone;
    private String email;
    private Long companyId;
    private String companyName;
    private boolean active;
}
