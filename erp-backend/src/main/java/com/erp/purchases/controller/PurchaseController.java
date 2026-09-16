package com.erp.purchases.controller;

import com.erp.purchases.dto.*;
import com.erp.purchases.dto.PrixFournisseurArticleDTO;
import com.erp.purchases.service.PurchaseService;
import com.erp.purchases.service.RemiseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/purchases")
@RequiredArgsConstructor
public class PurchaseController {

    private final PurchaseService purchaseService;
    private final RemiseService remiseService;

    // ===================== FOURNISSEURS =====================

    /** Retourne le taux de précompte achat configuré pour ce fournisseur. */
    @GetMapping("/suppliers/{partnerId}/precompte-rate")
    public ResponseEntity<Map<String, BigDecimal>> getSupplierPrecompteRate(
            @PathVariable("partnerId") Long partnerId,
            @RequestParam("companyId") Long companyId) {
        BigDecimal rate = purchaseService.getPartnerPurchasePrecompteTaux(partnerId, companyId);
        return ResponseEntity.ok(Map.of("tauxPrecompte", rate));
    }

    // ===================== COMMANDES D'ACHAT =====================

    /** Streaming — voir getAllInvoices plus bas pour le pourquoi. */
    @GetMapping("/orders")
    public ResponseEntity<StreamingResponseBody> getAllOrders(@RequestParam("companyId") Long companyId) {
        StreamingResponseBody body = out -> purchaseService.streamOrders(companyId, out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<PurchaseOrderDTO> getOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.getOrderById(id));
    }

    @PostMapping("/orders")
    public ResponseEntity<PurchaseOrderDTO> createOrder(@RequestBody PurchaseOrderRequest req) {
        return ResponseEntity.ok(purchaseService.createOrder(req));
    }

    @PutMapping("/orders/{id}")
    public ResponseEntity<PurchaseOrderDTO> updateOrder(@PathVariable("id") Long id, @RequestBody PurchaseOrderRequest req) {
        return ResponseEntity.ok(purchaseService.updateOrder(id, req));
    }

    @PostMapping("/orders/{id}/confirm")
    public ResponseEntity<PurchaseOrderDTO> confirmOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.confirmOrder(id));
    }

    @PostMapping("/orders/{id}/receive")
    public ResponseEntity<PurchaseOrderDTO> receiveOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.receivePicking(id));
    }

    @PostMapping("/orders/{id}/cancel")
    public ResponseEntity<PurchaseOrderDTO> cancelOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.cancelOrder(id));
    }

    // ===================== FACTURES FOURNISSEURS =====================

    /** Réponse en streaming : le JSON est écrit directement dans le flux HTTP au fil de la lecture
     *  en base (curseur serveur), sans jamais charger toute la liste des factures en mémoire — avec
     *  un très gros volume de factures, la version bufferisée (List&lt;PurchaseInvoiceDTO&gt;)
     *  faisait planter la JVM en OutOfMemoryError. JSON produit strictement identique : aucun
     *  changement côté frontend. */
    @GetMapping("/invoices")
    public ResponseEntity<StreamingResponseBody> getAllInvoices(@RequestParam("companyId") Long companyId) {
        StreamingResponseBody body = out -> purchaseService.streamInvoices(companyId, "invoice", out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    @GetMapping("/invoices/{id}")
    public ResponseEntity<PurchaseInvoiceDTO> getInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.getInvoiceById(id));
    }

    @PostMapping("/invoices")
    public ResponseEntity<PurchaseInvoiceDTO> createInvoice(@RequestBody PurchaseInvoiceRequest req) {
        return ResponseEntity.ok(purchaseService.createInvoice(req));
    }

    @PutMapping("/invoices/{id}")
    public ResponseEntity<PurchaseInvoiceDTO> updateInvoice(@PathVariable("id") Long id, @RequestBody PurchaseInvoiceRequest req) {
        return ResponseEntity.ok(purchaseService.updateInvoice(id, req));
    }

    @PostMapping("/invoices/{id}/post")
    public ResponseEntity<PurchaseInvoiceDTO> postInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.postInvoice(id));
    }

    @PatchMapping("/invoices/{id}/warehouse")
    public ResponseEntity<PurchaseInvoiceDTO> setWarehouse(@PathVariable Long id,
                                                            @RequestParam Long warehouseId) {
        return ResponseEntity.ok(purchaseService.setInvoiceWarehouse(id, warehouseId));
    }

    @PostMapping("/invoices/{id}/cancel")
    public ResponseEntity<PurchaseInvoiceDTO> cancelInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.cancelInvoice(id));
    }

    @PostMapping("/invoices/{id}/reverse-entries")
    public ResponseEntity<PurchaseInvoiceDTO> reverseInvoiceEntries(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.reverseInvoiceEntries(id));
    }

    @PostMapping("/invoices/{id}/generate-remises")
    public ResponseEntity<RemisePaiementDTO> generateRemises(@PathVariable("id") Long id) {
        return ResponseEntity.ok(remiseService.generateFromInvoice(id));
    }

    // ===================== AVOIRS FOURNISSEURS =====================

    /** Streaming — voir getAllInvoices ci-dessus pour le pourquoi. */
    @GetMapping("/avoirs")
    public ResponseEntity<StreamingResponseBody> getAllAvoirs(@RequestParam("companyId") Long companyId) {
        StreamingResponseBody body = out -> purchaseService.streamInvoices(companyId, "credit_note", out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    @PostMapping("/invoices/{id}/avoir")
    public ResponseEntity<PurchaseInvoiceDTO> createAvoirFromInvoice(
            @PathVariable("id") Long id,
            @RequestBody(required = false) com.erp.purchases.dto.PurchaseAvoirRequest req) {
        return ResponseEntity.ok(purchaseService.createAvoirFromInvoice(id, req));
    }

    @PostMapping("/avoirs")
    public ResponseEntity<PurchaseInvoiceDTO> createAvoirManuel(@RequestBody PurchaseInvoiceRequest req) {
        return ResponseEntity.ok(purchaseService.createAvoirManuel(req));
    }

    // ===================== PAIEMENTS FOURNISSEURS =====================

    @GetMapping("/payments")
    public ResponseEntity<List<PurchaseInvoiceDTO.PaymentDTO>> getAllPayments(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllPayments(companyId));
    }

    @GetMapping("/payments/invoice/{invoiceId}")
    public ResponseEntity<List<PurchaseInvoiceDTO.PaymentDTO>> getPaymentsByInvoice(@PathVariable("invoiceId") Long invoiceId) {
        return ResponseEntity.ok(purchaseService.getPaymentsByInvoice(invoiceId));
    }

    @PostMapping("/payments")
    public ResponseEntity<PurchaseInvoiceDTO.PaymentDTO> createPayment(@RequestBody PurchaseInvoicePaymentRequest req) {
        return ResponseEntity.ok(purchaseService.createPayment(req));
    }

    @DeleteMapping("/payments/{id}")
    public ResponseEntity<PurchaseInvoiceDTO.PaymentDTO> reversePayment(@PathVariable Long id) {
        return ResponseEntity.ok(purchaseService.reversePayment(id));
    }

    @PostMapping("/invoices/{id}/apply-credit")
    public ResponseEntity<PurchaseInvoiceDTO> applyCredit(
            @PathVariable Long id,
            @RequestParam java.math.BigDecimal amount,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.applyCreditToInvoice(id, amount, companyId));
    }

    // ===================== LETTRAGE FACTURES ACHATS =====================

    @GetMapping("/invoices/{id}/available-moves")
    public ResponseEntity<List<PurchaseAvailableMoveDTO>> getAvailableMoves(
            @PathVariable Long id,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.getAvailableMovesForPurchaseReconciliation(id, companyId));
    }

    @GetMapping("/invoices/{id}/reconciliations")
    public ResponseEntity<List<PurchaseInvoiceReconciliationDTO>> getReconciliations(
            @PathVariable Long id) {
        return ResponseEntity.ok(purchaseService.getPurchaseReconciliations(id));
    }

    @PostMapping("/invoices/{id}/reconcile")
    public ResponseEntity<PurchaseInvoiceReconciliationDTO> reconcile(
            @PathVariable Long id,
            @RequestBody PurchaseReconcileRequest request) {
        return ResponseEntity.ok(purchaseService.reconcilePurchaseInvoice(id, request));
    }

    @DeleteMapping("/invoices/reconciliations/{reconciliationId}")
    public ResponseEntity<Void> unreconcile(@PathVariable Long reconciliationId) {
        purchaseService.unreconcilePurchaseInvoice(reconciliationId);
        return ResponseEntity.noContent().build();
    }

    // ===================== PRIX PRÉFÉRENTIELS FOURNISSEURS =====================

    @GetMapping("/suppliers/{fournisseurId}/prix-articles")
    public ResponseEntity<List<PrixFournisseurArticleDTO>> getPrixFournisseurByFournisseur(
            @PathVariable Long fournisseurId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.getPrixFournisseurByFournisseur(fournisseurId, companyId));
    }

    @GetMapping("/suppliers/prix-articles/by-product/{productId}")
    public ResponseEntity<List<PrixFournisseurArticleDTO>> getPrixFournisseurByProduct(
            @PathVariable Long productId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(purchaseService.getPrixFournisseurByProduct(productId, companyId));
    }

    @GetMapping("/suppliers/{fournisseurId}/prix-articles/product/{productId}")
    public ResponseEntity<PrixFournisseurArticleDTO> getPrixFournisseurForProduct(
            @PathVariable Long fournisseurId,
            @PathVariable Long productId,
            @RequestParam Long companyId) {
        PrixFournisseurArticleDTO dto = purchaseService.getPrixFournisseurForProduct(productId, fournisseurId, companyId);
        return dto != null ? ResponseEntity.ok(dto) : ResponseEntity.noContent().build();
    }

    @PostMapping("/suppliers/prix-articles")
    public ResponseEntity<PrixFournisseurArticleDTO> savePrixFournisseur(
            @RequestBody PrixFournisseurArticleDTO dto) {
        return ResponseEntity.ok(purchaseService.savePrixFournisseur(dto));
    }

    @DeleteMapping("/suppliers/prix-articles/{id}")
    public ResponseEntity<Void> deletePrixFournisseur(@PathVariable Long id) {
        purchaseService.deletePrixFournisseur(id);
        return ResponseEntity.noContent().build();
    }
}
