package com.erp.sales.controller;

import com.erp.accounting.dto.PartnerDTO;
import com.erp.sales.dto.*;
import com.erp.sales.service.RistourneService;
import com.erp.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.util.List;

@RestController
@RequestMapping("/api/sales")
@RequiredArgsConstructor
@Slf4j
public class SalesController {

    private final SalesService salesService;
    private final RistourneService ristourneService;

    // ===================== BONS DE COMMANDE =====================

    /** Streaming — voir getInvoices plus bas pour le pourquoi. */
    @GetMapping("/orders")
    public ResponseEntity<StreamingResponseBody> getOrders(@RequestParam("companyId") Long companyId) {
        StreamingResponseBody body = out -> salesService.streamOrders(companyId, out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<SalesOrderDTO> getOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.getOrderById(id));
    }

    @PostMapping("/orders")
    public ResponseEntity<SalesOrderDTO> createOrder(@RequestBody SalesOrderRequest request) {
        return ResponseEntity.ok(salesService.createOrder(request));
    }

    @PutMapping("/orders/{id}")
    public ResponseEntity<SalesOrderDTO> updateOrder(@PathVariable("id") Long id,
                                                      @RequestBody SalesOrderRequest request) {
        return ResponseEntity.ok(salesService.updateOrder(id, request));
    }

    @PostMapping("/orders/{id}/confirm")
    public ResponseEntity<SalesOrderDTO> confirmOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.confirmOrder(id));
    }

    @PostMapping("/orders/{id}/cancel")
    public ResponseEntity<SalesOrderDTO> cancelOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.cancelOrder(id));
    }

    // ===================== FACTURES =====================

    /** Réponse en streaming : le JSON est écrit directement dans le flux HTTP au fil de la lecture
     *  en base (curseur serveur), sans jamais charger toute la liste des factures en mémoire —
     *  avec un très gros volume de factures, la version bufferisée (List&lt;SalesInvoiceDTO&gt;)
     *  faisait planter la JVM en OutOfMemoryError sur ce seul endpoint. Le JSON produit sur le fil
     *  est strictement identique (même tableau, mêmes champs) : aucun changement côté frontend. */
    @GetMapping("/invoices")
    public ResponseEntity<StreamingResponseBody> getInvoices(@RequestParam("companyId") Long companyId) {
        StreamingResponseBody body = out -> salesService.streamInvoices(companyId, "invoice", out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    @GetMapping("/invoices/{id}")
    public ResponseEntity<SalesInvoiceDTO> getInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.getInvoiceById(id));
    }

    @PostMapping("/invoices")
    public ResponseEntity<SalesInvoiceDTO> createInvoice(@RequestBody SalesInvoiceRequest request) {
        return ResponseEntity.ok(salesService.createInvoice(request));
    }

    @PutMapping("/invoices/{id}")
    public ResponseEntity<SalesInvoiceDTO> updateInvoice(@PathVariable("id") Long id,
                                                          @RequestBody SalesInvoiceRequest request) {
        return ResponseEntity.ok(salesService.updateInvoice(id, request));
    }

    @PostMapping("/invoices/{id}/post")
    public ResponseEntity<SalesInvoiceDTO> postInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.postInvoice(id));
    }

    @PatchMapping("/invoices/{id}/warehouse")
    public ResponseEntity<SalesInvoiceDTO> setWarehouse(@PathVariable Long id,
                                                         @RequestParam Long warehouseId) {
        return ResponseEntity.ok(salesService.setInvoiceWarehouse(id, warehouseId));
    }

    @PostMapping("/invoices/{id}/cancel")
    public ResponseEntity<SalesInvoiceDTO> cancelInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.cancelInvoice(id));
    }

    @PostMapping("/invoices/{id}/reverse-entries")
    public ResponseEntity<SalesInvoiceDTO> reverseInvoiceEntries(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.reverseInvoiceEntries(id));
    }

    @PostMapping("/invoices/{id}/generate-ristournes")
    public ResponseEntity<RistournePaiementDTO> generateRistournes(@PathVariable("id") Long id) {
        return ResponseEntity.ok(ristourneService.generateFromInvoice(id));
    }

    // ===================== AVOIRS =====================

    /** Streaming — voir getInvoices ci-dessus pour le pourquoi. */
    @GetMapping("/avoirs")
    public ResponseEntity<StreamingResponseBody> getAvoirs(@RequestParam("companyId") Long companyId) {
        StreamingResponseBody body = out -> salesService.streamInvoices(companyId, "credit_note", out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    @PostMapping("/invoices/{id}/avoir")
    public ResponseEntity<SalesInvoiceDTO> createAvoirFromInvoice(
            @PathVariable("id") Long id,
            @RequestBody(required = false) com.erp.sales.dto.AvoirRequest req) {
        return ResponseEntity.ok(salesService.createAvoirFromInvoice(id, req));
    }

    @PostMapping("/avoirs")
    public ResponseEntity<SalesInvoiceDTO> createAvoirManuel(@RequestBody SalesInvoiceRequest request) {
        return ResponseEntity.ok(salesService.createAvoirManuel(request));
    }

    @PostMapping("/invoices/{id}/apply-credit")
    public ResponseEntity<SalesInvoiceDTO> applyCredit(
            @PathVariable Long id,
            @RequestParam java.math.BigDecimal amount,
            @RequestParam Long companyId,
            @RequestParam(required = false) Long creditNoteId) {
        return ResponseEntity.ok(salesService.applyCreditToInvoice(id, amount, companyId, creditNoteId));
    }

    /** Liste détaillée des avoirs disponibles ("crédits en circulation") d'un client, un par avoir. */
    @GetMapping("/partners/{partnerId}/available-credits")
    public ResponseEntity<List<com.erp.sales.dto.AvailableCreditDTO>> getAvailableCredits(
            @PathVariable Long partnerId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getAvailableCredits(partnerId, companyId));
    }

    @GetMapping("/partners/{partnerId}/balance")
    public ResponseEntity<java.util.Map<String, java.math.BigDecimal>> getPartnerBalance(
            @PathVariable Long partnerId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getPartnerBalanceInfo(partnerId, companyId));
    }

    // ===================== PAIEMENTS =====================

    @GetMapping("/payments")
    public ResponseEntity<List<InvoicePaymentDTO>> getPayments(@RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getAllPayments(companyId));
    }

    @GetMapping("/payments/invoice/{invoiceId}")
    public ResponseEntity<List<InvoicePaymentDTO>> getPaymentsByInvoice(@PathVariable Long invoiceId) {
        return ResponseEntity.ok(salesService.getPaymentsByInvoice(invoiceId));
    }

    @PostMapping("/payments")
    public ResponseEntity<InvoicePaymentDTO> createPayment(@RequestBody InvoicePaymentRequest request) {
        return ResponseEntity.ok(salesService.createPayment(request));
    }

    @DeleteMapping("/payments/{id}")
    public ResponseEntity<InvoicePaymentDTO> reversePayment(@PathVariable Long id) {
        return ResponseEntity.ok(salesService.reversePayment(id));
    }

    // ===================== CLIENTS =====================

    @GetMapping("/clients")
    public ResponseEntity<List<PartnerDTO>> getClients(@RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getClients(companyId));
    }

    @PostMapping("/clients")
    public ResponseEntity<PartnerDTO> createClient(@RequestBody PartnerDTO dto) {
        return ResponseEntity.ok(salesService.createClient(dto));
    }

    @PutMapping("/clients/{id}")
    public ResponseEntity<PartnerDTO> updateClient(@PathVariable Long id, @RequestBody PartnerDTO dto) {
        return ResponseEntity.ok(salesService.updateClient(id, dto));
    }

    @DeleteMapping("/clients/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        salesService.deleteClient(id);
        return ResponseEntity.noContent().build();
    }

    // ===================== LETTRAGE FACTURES VENTES =====================

    @GetMapping("/invoices/{id}/available-moves")
    public ResponseEntity<java.util.List<AvailableMoveDTO>> getAvailableMoves(
            @PathVariable Long id,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getAvailableMovesForSalesReconciliation(id, companyId));
    }

    @GetMapping("/invoices/{id}/reconciliations")
    public ResponseEntity<java.util.List<SalesInvoiceReconciliationDTO>> getReconciliations(
            @PathVariable Long id) {
        return ResponseEntity.ok(salesService.getSalesReconciliations(id));
    }

    @PostMapping("/invoices/{id}/reconcile")
    public ResponseEntity<SalesInvoiceReconciliationDTO> reconcile(
            @PathVariable Long id,
            @RequestBody ReconcileRequest request) {
        return ResponseEntity.ok(salesService.reconcileSalesInvoice(id, request));
    }

    @DeleteMapping("/invoices/reconciliations/{reconciliationId}")
    public ResponseEntity<Void> unreconcile(@PathVariable Long reconciliationId) {
        salesService.unreconcileSalesInvoice(reconciliationId);
        return ResponseEntity.noContent().build();
    }

    // ===================== PRIX CLIENT PAR ARTICLE =====================

    /** Tous les prix configurés pour un client */
    @GetMapping("/client-prices")
    public ResponseEntity<List<PrixClientArticleDTO>> getPrixClientByClient(
            @RequestParam Long clientId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(salesService.getPrixClientByClient(clientId, companyId));
    }

    /** Prix pour un produit + client spécifique (null si aucun tarif configuré) */
    @GetMapping("/client-prices/product")
    public ResponseEntity<PrixClientArticleDTO> getPrixClientForProduct(
            @RequestParam Long productId,
            @RequestParam Long clientId,
            @RequestParam Long companyId) {
        PrixClientArticleDTO dto = salesService.getPrixClientForProduct(productId, clientId, companyId);
        return dto != null ? ResponseEntity.ok(dto) : ResponseEntity.noContent().build();
    }

    /** Créer ou mettre à jour un prix client pour un article */
    @PostMapping("/client-prices")
    public ResponseEntity<PrixClientArticleDTO> savePrixClient(@RequestBody PrixClientArticleDTO dto) {
        return ResponseEntity.ok(salesService.savePrixClient(dto));
    }

    /** Supprimer un prix client */
    @DeleteMapping("/client-prices/{id}")
    public ResponseEntity<Void> deletePrixClient(@PathVariable Long id) {
        salesService.deletePrixClient(id);
        return ResponseEntity.noContent().build();
    }

    /** Restaure le stock des factures annulées et recalcule les réservations depuis les bons confirmés */
    @PostMapping("/fix-reservations")
    public ResponseEntity<String> fixReservations(@RequestParam("companyId") Long companyId) {
        int restored = salesService.recalculateReservations(companyId);
        return ResponseEntity.ok("Réservations recalculées et stock restauré pour "
                + restored + " facture(s) annulée(s)");
    }

    /** Remet à zéro TOUTES les réservations de stock de la société, sans recalcul. */
    @PostMapping("/release-all-reservations")
    public ResponseEntity<String> releaseAllReservations(@RequestParam("companyId") Long companyId) {
        int cleared = salesService.releaseAllReservations(companyId);
        return ResponseEntity.ok(cleared + " réservation(s) de stock remise(s) à zéro");
    }
}
