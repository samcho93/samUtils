import { TOOLS, DEFAULT_ALLOW } from './tools.js';

const tabbar = document.getElementById('tabbar');
const main = document.getElementById('main');
const btnReload = document.getElementById('btn-reload');
const btnOpen = document.getElementById('btn-open');

const frames = new Map(); // id -> { panel, iframe }
let current = null;

// ── 탭 생성 (그룹별) ──
let lastGroup = null;
for (const tool of TOOLS) {
  if (tool.group && tool.group !== lastGroup) {
    const label = document.createElement('span');
    label.className = 'tab-group';
    label.textContent = tool.group;
    tabbar.appendChild(label);
    lastGroup = tool.group;
  }
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.dataset.id = tool.id;
  btn.textContent = tool.name;
  btn.title = tool.desc || tool.name;
  btn.setAttribute('role', 'tab');
  btn.addEventListener('click', () => { location.hash = tool.id; });
  tabbar.appendChild(btn);
}

// ── 패널: iframe은 처음 열 때 생성하고 이후 유지 → 탭 전환 시 작업 상태 보존 ──
function ensureFrame(tool) {
  if (frames.has(tool.id)) return frames.get(tool.id);
  const panel = document.createElement('section');
  panel.className = 'panel loading';
  panel.setAttribute('role', 'tabpanel');

  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.textContent = `${tool.name} 불러오는 중…`;

  const iframe = document.createElement('iframe');
  iframe.title = tool.name;
  iframe.allow = [...DEFAULT_ALLOW, ...(tool.allow || [])].join('; ');
  iframe.allowFullscreen = true;
  iframe.addEventListener('load', () => panel.classList.remove('loading'));
  iframe.src = tool.url;

  panel.append(spinner, iframe);
  main.appendChild(panel);
  const entry = { panel, iframe };
  frames.set(tool.id, entry);
  return entry;
}

function activate(id) {
  const tool = TOOLS.find(t => t.id === id) || TOOLS[0];
  if (!tool) return;
  current = tool;
  const { iframe } = ensureFrame(tool);
  for (const [fid, f] of frames) f.panel.classList.toggle('active', fid === tool.id);
  for (const b of tabbar.querySelectorAll('button')) {
    const on = b.dataset.id === tool.id;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', String(on));
    if (on) b.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  document.title = `${tool.name} · samUtils`;
  iframe.focus();
}

btnReload.addEventListener('click', () => {
  const f = current && frames.get(current.id);
  if (!f) return;
  f.panel.classList.add('loading');
  f.iframe.src = current.url;
});
btnOpen.addEventListener('click', () => {
  if (current) window.open(current.url, '_blank', 'noopener');
});

window.addEventListener('hashchange', () => activate(location.hash.slice(1)));
activate(location.hash.slice(1));
