/**
 * Recherche dans les listes déroulantes, appliquée à TOUTE l'application.
 *
 * Chaque <select> (hors multiple / size > 1 / [data-native]) est masqué et remplacé à l'écran par
 * un champ de saisie : au clic la liste complète s'ouvre, la frappe filtre les options (sans tenir
 * compte des accents ni de la casse), flèches + Entrée ou clic pour choisir.
 *
 * Le <select> d'origine reste dans le DOM et reste la source de vérité : un choix écrit sa valeur
 * puis déclenche l'événement "change" — ngModel, formControlName et (change) fonctionnent donc sans
 * aucune modification des écrans. Les changements faits par le code (valeur, options, disabled)
 * sont recopiés périodiquement vers le champ affiché.
 */

const MAX_RESULTS = 300;
const SYNC_INTERVAL_MS = 250;
const STYLE_ID = 'ss-styles';
const COPIED_STYLES = [
  'font-size', 'font-family', 'font-weight', 'line-height', 'color', 'background-color',
  'padding-top', 'padding-bottom', 'padding-left',
  'border-top', 'border-right', 'border-bottom', 'border-left', 'border-radius',
  'height', 'min-height', 'box-shadow',
];

interface Enhanced {
  select: HTMLSelectElement;
  wrap: HTMLElement;
  input: HTMLInputElement;
  lastIndex: number;
  lastText: string;
}

const enhanced = new Map<HTMLSelectElement, Enhanced>();
let panel: HTMLElement | null = null;
let active: Enhanced | null = null;
let items: { option: HTMLOptionElement; el: HTMLElement }[] = [];
let highlighted = -1;
let typed = false;

const norm = (s: string) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

export function initSelectSearch(): () => void {
  injectStyles();
  scan(document.body);

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; scan(document.body); });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  const timer = setInterval(syncAll, SYNC_INTERVAL_MS);
  const reposition = () => { if (active) positionPanel(); };
  window.addEventListener('resize', reposition);
  window.addEventListener('scroll', reposition, true);

  return () => {
    observer.disconnect();
    clearInterval(timer);
    window.removeEventListener('resize', reposition);
    window.removeEventListener('scroll', reposition, true);
  };
}

function scan(root: ParentNode): void {
  root.querySelectorAll('select').forEach(s => {
    const select = s as HTMLSelectElement;
    if (enhanced.has(select) || select.multiple || select.size > 1 || select.hasAttribute('data-native')) return;
    enhance(select);
  });
}

function enhance(select: HTMLSelectElement): void {
  const cs = getComputedStyle(select);
  const wrap = document.createElement('div');
  wrap.className = 'ss-wrap';
  const input = document.createElement('input');
  input.type = 'text';
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.className = select.className + ' ss-input';
  input.setAttribute('role', 'combobox');
  if (select.title) input.title = select.title;
  if (select.id) input.setAttribute('aria-controls', select.id);

  // Mêmes attributs d'encapsulation Angular que le select → les règles CSS du composant
  // écrites par classe (.form-control, .filter-input...) s'appliquent aussi au champ.
  for (const attr of Array.from(select.attributes)) {
    if (attr.name.startsWith('_ngcontent')) {
      wrap.setAttribute(attr.name, '');
      input.setAttribute(attr.name, '');
    }
  }
  // Les règles écrites sur l'élément "select" ne s'appliquent pas à un input : recopier le rendu calculé
  for (const p of COPIED_STYLES) {
    const v = cs.getPropertyValue(p);
    if (v && v !== 'auto' && !(p === 'height' && v === '0px')) input.style.setProperty(p, v);
  }
  if (select.getAttribute('style')) wrap.setAttribute('style', select.getAttribute('style')!);
  const display = cs.display === 'none' ? (select.classList.contains('form-control') || select.classList.contains('form-select') ? 'block' : 'inline-block') : cs.display;
  wrap.style.display = display.startsWith('inline') ? 'inline-block' : display === 'flex' ? 'block' : display;
  if (wrap.style.display === 'inline-block' && !select.style.width) {
    const w = select.getBoundingClientRect().width;
    wrap.style.width = w > 0 ? `${Math.ceil(w)}px` : '';
    if (!(w > 0)) wrap.style.minWidth = '160px';
  }
  if (cs.flexGrow && cs.flexGrow !== '0') wrap.style.flexGrow = cs.flexGrow;
  if (cs.flex) wrap.style.flex = cs.flex;
  wrap.style.marginTop = cs.marginTop; wrap.style.marginBottom = cs.marginBottom;
  wrap.style.marginLeft = cs.marginLeft; wrap.style.marginRight = cs.marginRight;

  wrap.appendChild(input);
  select.insertAdjacentElement('afterend', wrap);
  select.classList.add('ss-hidden');

  const e: Enhanced = { select, wrap, input, lastIndex: -2, lastText: '' };
  enhanced.set(select, e);
  sync(e, true);

  input.addEventListener('focus', () => open(e));
  input.addEventListener('click', () => { if (active !== e) open(e); });
  input.addEventListener('input', () => { typed = true; render(e, input.value); });
  input.addEventListener('keydown', ev => onKey(e, ev));
  input.addEventListener('blur', () => setTimeout(() => { if (active === e && document.activeElement !== input) close(true); }, 0));
}

/** Recopie l'état du select (option choisie, disabled, présence dans le DOM) vers le champ affiché. */
function sync(e: Enhanced, force = false): void {
  const { select, input } = e;
  const opt = select.selectedIndex >= 0 ? select.options[select.selectedIndex] : null;
  const text = opt ? opt.text.trim() : '';
  input.disabled = select.disabled;
  input.required = select.required;
  // Classes du select recopiées en continu (validation Angular ng-invalid/ng-touched, is-invalid...)
  const cls = select.className.replace(/\bss-hidden\b/, '').trim() + ' ss-input';
  if (input.className !== cls) input.className = cls;
  if (active === e && !force) return;
  if (force || select.selectedIndex !== e.lastIndex || text !== e.lastText) {
    e.lastIndex = select.selectedIndex;
    e.lastText = text;
    const isPlaceholder = !opt || opt.value === '' || opt.value === 'null' || opt.value === 'undefined'
      || /^\d+: (null|undefined)$/.test(opt.value);
    const firstPlaceholder = Array.from(select.options).find(o => o.value === '' || /: (null|undefined)$/.test(o.value) || o.value === 'null');
    input.value = isPlaceholder ? '' : text;
    input.placeholder = isPlaceholder ? (text || firstPlaceholder?.text.trim() || 'Rechercher…') : 'Rechercher…';
  }
}

function syncAll(): void {
  for (const e of Array.from(enhanced.values())) {
    if (!e.select.isConnected) {
      e.wrap.remove();
      enhanced.delete(e.select);
      if (active === e) close(false);
      continue;
    }
    // Angular peut retirer le champ (re-rendu) en gardant le select : le remettre en place
    if (!e.wrap.isConnected) e.select.insertAdjacentElement('afterend', e.wrap);
    sync(e);
  }
}

function open(e: Enhanced): void {
  if (e.input.disabled) return;
  if (active && active !== e) close(true);
  active = e;
  typed = false;
  if (!panel) {
    panel = document.createElement('div');
    panel.className = 'ss-panel';
    panel.addEventListener('mousedown', ev => ev.preventDefault()); // garder le focus sur le champ
    document.body.appendChild(panel);
  }
  panel.style.display = 'block';
  render(e, '');
  positionPanel();
  e.input.select();
  e.wrap.classList.add('ss-open');
}

function close(restore: boolean): void {
  if (panel) panel.style.display = 'none';
  if (active) {
    active.wrap.classList.remove('ss-open');
    const e = active;
    active = null;
    if (restore) sync(e, true);
  }
  items = [];
  highlighted = -1;
}

function render(e: Enhanced, query: string): void {
  if (!panel) return;
  const words = norm(query).split(/\s+/).filter(Boolean);
  const all = Array.from(e.select.options).filter(o => !o.hidden);
  const matches = words.length ? all.filter(o => { const t = norm(o.text); return words.every(w => t.includes(w)); }) : all;

  panel.innerHTML = '';
  items = [];
  matches.slice(0, MAX_RESULTS).forEach(o => {
    const el = document.createElement('div');
    el.className = 'ss-item' + (o.disabled ? ' ss-disabled' : '') + (o.selected ? ' ss-selected' : '');
    el.textContent = o.text.trim() || ' ';
    if (!o.disabled) el.addEventListener('click', () => pick(e, o));
    panel!.appendChild(el);
    items.push({ option: o, el });
  });
  if (!matches.length) {
    const el = document.createElement('div');
    el.className = 'ss-empty';
    el.textContent = 'Aucun résultat';
    panel.appendChild(el);
  } else if (matches.length > MAX_RESULTS) {
    const el = document.createElement('div');
    el.className = 'ss-empty';
    el.textContent = `${matches.length - MAX_RESULTS} autres résultats — affinez la recherche`;
    panel.appendChild(el);
  }

  const selectedIdx = items.findIndex(i => i.option.selected && !i.option.disabled);
  highlighted = words.length ? items.findIndex(i => !i.option.disabled) : selectedIdx;
  highlight(highlighted, true);
}

function highlight(i: number, center = false): void {
  items.forEach((it, k) => it.el.classList.toggle('ss-active', k === i));
  highlighted = i;
  const el = items[i]?.el;
  if (el && panel) {
    if (center) panel.scrollTop = el.offsetTop - panel.clientHeight / 2;
    else el.scrollIntoView({ block: 'nearest' });
  }
}

function move(step: number): void {
  if (!items.length) return;
  let i = highlighted;
  for (let n = 0; n < items.length; n++) {
    i = (i + step + items.length) % items.length;
    if (!items[i].option.disabled) { highlight(i); return; }
  }
}

function pick(e: Enhanced, option: HTMLOptionElement): void {
  const changed = !option.selected;
  option.selected = true;
  if (changed) {
    e.select.dispatchEvent(new Event('input', { bubbles: true }));
    e.select.dispatchEvent(new Event('change', { bubbles: true }));
  }
  close(true);
}

function onKey(e: Enhanced, ev: KeyboardEvent): void {
  if (active !== e) {
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp' || (ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey)) open(e);
    else return;
  }
  switch (ev.key) {
    case 'ArrowDown': ev.preventDefault(); move(1); break;
    case 'ArrowUp': ev.preventDefault(); move(-1); break;
    case 'Enter': {
      // Pas de preventDefault/stopPropagation : la navigation Entrée → champ suivant (AppComponent) suit le choix
      const it = items[highlighted];
      if (it && !it.option.disabled) pick(e, it.option); else close(true);
      break;
    }
    case 'Tab': {
      const it = items[highlighted];
      if (typed && it && !it.option.disabled) pick(e, it.option); else close(true);
      break;
    }
    case 'Escape': ev.preventDefault(); ev.stopPropagation(); close(true); break;
  }
}

function positionPanel(): void {
  if (!panel || !active) return;
  const r = active.input.getBoundingClientRect();
  if (!r.width && !r.height) { close(true); return; }
  const below = window.innerHeight - r.bottom;
  const maxH = Math.min(320, Math.max(below, r.top) - 12);
  panel.style.left = `${Math.max(4, r.left)}px`;
  panel.style.minWidth = `${r.width}px`;
  panel.style.maxWidth = `${Math.max(r.width, 420)}px`;
  panel.style.maxHeight = `${maxH}px`;
  if (below < 200 && r.top > below) {
    panel.style.top = '';
    panel.style.bottom = `${window.innerHeight - r.top + 2}px`;
  } else {
    panel.style.bottom = '';
    panel.style.top = `${r.bottom + 2}px`;
  }
}

function injectStyles(): void {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    select.ss-hidden { display: none !important; }
    .ss-wrap { position: relative; min-width: 0; box-sizing: border-box; }
    .ss-wrap .ss-input {
      width: 100% !important; box-sizing: border-box; padding-right: 28px !important;
      text-overflow: ellipsis; cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E") !important;
      background-repeat: no-repeat !important; background-position: right 9px center !important; background-size: 12px !important;
    }
    .ss-wrap.ss-open .ss-input, .ss-wrap .ss-input:focus { cursor: text; outline: none; border-color: var(--border-focus, #1D4ED8) !important; }
    .ss-wrap .ss-input:disabled { cursor: not-allowed; opacity: .7; }
    .ss-panel {
      position: fixed; z-index: 100000; display: none; overflow-y: auto; box-sizing: border-box;
      background: var(--bg-surface, #fff); color: var(--text-primary, #0F172A);
      border: 1px solid var(--border, #E2E8F0); border-radius: 8px;
      box-shadow: var(--shadow-lg, 0 10px 28px rgba(0,0,0,.12)); padding: 4px; font-size: .875rem;
    }
    .ss-item { padding: 7px 10px; border-radius: 5px; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .ss-item.ss-selected { font-weight: 600; color: var(--primary, #1D4ED8); }
    .ss-item.ss-active { background: var(--bg-active, #EFF6FF); }
    .ss-item.ss-disabled { opacity: .45; cursor: default; }
    .ss-empty { padding: 8px 10px; color: var(--text-muted, #64748B); font-style: italic; }
  `;
  document.head.appendChild(style);
}
