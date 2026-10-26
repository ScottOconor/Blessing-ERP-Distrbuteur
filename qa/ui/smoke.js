// Test de fumée de l'interface (instance ISOLÉE de test) : connexion réelle puis visite des modules,
// relevé des erreurs JavaScript et des réponses API en erreur. Usage : node smoke.js <base> <user> <mdp>
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_CORE || path.join(__dirname, '../../video/node_modules/playwright-core'));
(async () => {
  const [base, user, pass] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [], apiErrors = [];
  page.on('pageerror', e => errors.push(String(e.message).slice(0, 160)));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 160)); });
  page.on('response', r => { if (r.url().includes('/api/') && r.status() >= 500) apiErrors.push(r.status() + ' ' + r.url().replace(base, '')); });
  await page.goto(base + '/login');
  await page.locator('input').first().fill(user);
  await page.locator('input[type="password"]').fill(pass);
  await page.locator('button[type="submit"]').click();
  await page.waitForURL(u => !u.toString().includes('/login'), { timeout: 15000 });
  console.log('connexion OK ->', page.url().replace(base, ''));
  for (const route of ['/welcome', '/sales', '/purchases', '/stock', '/accounting', '/caisses', '/config/users', '/config/backup', '/hr', '/helpdesk']) {
    await page.goto(base + route); await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    const title = (await page.locator('h1, h2, .page-title').first().textContent({ timeout: 2000 }).catch(() => '')) || '';
    console.log(`${route.padEnd(16)} -> ${page.url().replace(base, '').padEnd(24)} ${title.trim().slice(0, 40)}`);
  }
  console.log('erreurs JS :', errors.length, errors.slice(0, 5));
  console.log('réponses API 5xx :', apiErrors.length, apiErrors.slice(0, 5));
  await browser.close();
})().catch(e => { console.error('ÉCHEC', e.message); process.exit(1); });
