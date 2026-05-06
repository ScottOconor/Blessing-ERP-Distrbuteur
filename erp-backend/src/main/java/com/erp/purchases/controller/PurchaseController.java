package com.erp.purchases.controller;

import com.erp.purchases.dto.*;
import com.erp.purchases.service.PurchaseService;
import com.erp.purchases.service.RemiseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/purchases")
@RequiredArgsConstructor
public class PurchaseController {

    private final PurchaseService purchaseService;
    private final RemiseService remiseService;

    // ===================== COMMANDES D'ACHAT =====================

    @GetMapping("/orders")
    public ResponseEntity<List<PurchaseOrderDTO>> getAllOrders(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllOrders(companyId));
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

    @GetMapping("/invoices")
    public ResponseEntity<List<PurchaseInvoiceDTO>> getAllInvoices(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllInvoices(companyId));
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

    @GetMapping("/avoirs")
    public ResponseEntity<List<PurchaseInvoiceDTO>> getAllAvoirs(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(purchaseService.getAllAvoirs(companyId));
    }

    @PostMapping("/invoices/{id}/avoir")
    public ResponseEntity<PurchaseInvoiceDTO> createAvoirFromInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(purchaseService.createAvoirFromInvoice(id));
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
}
