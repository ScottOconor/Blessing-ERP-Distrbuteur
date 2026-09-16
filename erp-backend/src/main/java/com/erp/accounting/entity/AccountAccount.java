package com.erp.accounting.entity;

import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "account_accounts", indexes = {
    @Index(name = "idx_account_accounts_company_code", columnList = "company_id, code")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private String name;

    /**
     * accountType: asset / liability / equity / income / expense / other
     */
    private String accountType;

    /**
     * internalType: receivable / payable / liquidity / other
     */
    private String internalType;

    private boolean deprecated;

    private boolean reconcile;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;
}
