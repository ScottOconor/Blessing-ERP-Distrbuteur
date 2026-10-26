// Fiche facture (instance ISOLÉE) : ouverture/fermeture de la fenêtre de paiement, paiement saisi dans
// l'interface avec en-tête Idempotency-Key, aperçu avant impression.
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_CORE || path.join(__dirname, '../../video/node_modules/playwright-core'));
(async () => {
  const [base, user, pass, invoiceId] = process.argv.slice(2);
  const browser = await chromium.launch(); const page = await browser.newPage();
  const sent = [], errors = [];
  page.on('pageerror', e => errors.push(e.message.slice(0, 200)));
  page.on('console', m => { if (m.type() === 'error' && !m.text().includes('404')) errors.push(m.text().slice(0, 200)); });
  page.on('request', r => { if (r.method() === 'POST' && r.url().endsWith('/api/sales/payments')) sent.push(r.headers()['idempotency-key'] || '(aucune)'); });
  await page.goto(base + '/login');
  await page.locator('input').first().fill(user); await page.locator('input[type="password"]').fill(pass);
  await page.locator('button[type="submit"]').click(); await page.waitForURL(u => !u.toString().includes('/login'));
  await page.goto(base + '/sales/invoices/' + invoiceId); await page.waitForLoadState('networkidle');
  const open = () => page.locator('.btn-payment:visible').first().click();
  await open(); await page.locator('.pay-modal').waitFor({ timeout: 5000 });
  console.log('1. fenêtre de paiement ouverte :', await page.locator('.pay-modal').isVisible());
  await page.locator('.pay-modal-title').click();
  console.log('2a. clic dans la fenêtre -> toujours ouverte :', await page.locator('.pay-modal').isVisible());
  await page.locator('.pay-overlay').click({ position: { x: 5, y: 5 } });
  console.log('2b. clic sur le fond -> fermée :', !(await page.locator('.pay-modal').isVisible().catch(() => false)));
  await open(); await page.locator('.pay-modal').waitFor();
  // Le <select> natif est masqué par la liste avec recherche du projet : sélection sur l'élément natif.
  const chosen = await page.locator('.pay-modal select').first().evaluate(sel => {
    const opts = Array.from(sel.options); const i = opts.findIndex(o => /caisse/i.test(o.text));
    sel.selectedIndex = i > 0 ? i : 1; sel.dispatchEvent(new Event('change', { bubbles: true }));
    return sel.options[sel.selectedIndex].text.trim();
  });
  console.log('   journal choisi :', chosen);
  const resp = page.waitForResponse(r => r.url().endsWith('/api/sales/payments'));
  await page.locator('.pay-modal .pay-btn-save').click();
  const r = await resp;
  console.log('3. paiement saisi dans l\'interface ->', r.status(), '| Idempotency-Key envoyé :', sent[0] && sent[0] !== '(aucune)' ? 'oui (' + sent[0].length + ' car.)' : 'NON');
  await page.waitForLoadState('networkidle');
  await page.locator('button:has-text("Imprimer")').first().click();
  await page.locator('.pp-overlay').waitFor({ timeout: 5000 }).catch(() => {});
  console.log('4. aperçu avant impression ouvert :', await page.locator('.pp-overlay').isVisible().catch(() => false));
  console.log('erreurs JS :', errors.length ? errors : 'aucune');
  await browser.close();
})().catch(e => { console.error('ÉCHEC', e.message.split('\n')[0]); process.exit(1); });
