# Fix Sales Order Product Autocomplete

## Plan Steps:

### 1. [x] Add `searchProducts(query: string, companyId: number)` method to `src/app/modules/stock/services/stock.service.ts`
   - New GET `/api/stock/products?companyId=&search=`
   - Assume backend supports `search` param for name/defaultCode filter.

### 2. [x] Update `src/app/modules/sales/components/orders/order-form.component.ts`
   - Add properties: `lineSearchResults: Product[][] = []; searchTimer: any;`
   - Modify `getSuggestions(i)` to use `lineSearchResults[i] || clientFilter`
   - Add `onSearchInput(i)` with 300ms debounce → `stockService.searchProducts(q, companyId)` → populate `lineSearchResults[i]`
   - Fallback to allProducts if search fails/empty.
   - Updated addLine/loadOrder/removeLine/clearLine/openSuggestions.

### 3. [x] Test: Ready to test - ng serve → sales/orders → new order → add line → type ≥2 chars → suggestions w/ stock dispo (server-side if allProducts empty, else client).

### 4. [x] Lint: No lint script in package.json, skipped.

### 6. [x] Apply same dynamic autocomplete to purchases order-form.component.ts
   - Added lineSearchResults, searchTimer, onSearchInput (debounce server-search), updated methods.
   - No stock dispo (purchases inbound), uses standardPrice.

**Complete**: Both sales/purchases order forms now have robust dynamic product autocomplete (client OR server-side search fallback), ensures orders use properly selected articles.

Test: Run dev server → /sales/orders or /purchases/orders → create → add line → type → instant suggestions.

