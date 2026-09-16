package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Catégorie de règle salariale : BASIC, ALW (indemnités), GROSS (brut),
 * DED (retenues salariales), NET, COMP (charges patronales).
 */
@Entity
@Table(name = "hr_salary_rule_categories",
       uniqueConstraints = @UniqueConstraint(name = "uk_salary_rule_category_company_code", columnNames = {"company_id", "code"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class SalaryRuleCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String code;

    @Builder.Default
    private int sequence = 10;

    @Column(nullable = false)
    private Long companyId;
}
