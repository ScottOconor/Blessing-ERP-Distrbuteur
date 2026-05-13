package com.erp.eleader.entity;

import com.erp.common.entity.Company;
import com.erp.sales.entity.SalesOrder;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "eleader_import_logs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EleaderImportLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Référence auto-générée ELIMP/00001 */
    private String reference;

    private String filename;

    /** parsing / creating / success / error / warning */
    private String status;

    /** BRASSERIES ou GUINNESS */
    @Column(name = "invoice_model")
    private String invoiceModel;

    /** Numéro de facture eLeader extrait du PDF */
    @Column(name = "eleader_reference")
    private String eleaderReference;

    /** Nom du client extrait du PDF */
    @Column(name = "client_name")
    private String clientName;

    /** Texte brut extrait du PDF */
    @Column(name = "raw_text", columnDefinition = "TEXT")
    private String rawText;

    /** Message de résultat ou d'erreur */
    @Column(columnDefinition = "TEXT")
    private String message;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sales_order_id")
    private SalesOrder salesOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @CreationTimestamp
    @Column(name = "import_date")
    private LocalDateTime importDate;
}
