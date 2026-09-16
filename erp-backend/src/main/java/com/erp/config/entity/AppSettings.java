package com.erp.config.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "app_settings")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class AppSettings {

    @Id
    @Column(length = 100)
    private String key;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String value;
}
