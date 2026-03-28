/* ═══════════════════════════════════════════════════
   SASIKUMAR C — PORTFOLIO JS
   main.js
═══════════════════════════════════════════════════ */

/* ── CURSOR ── */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});
(function loop() {
  rx += (mx - rx) * .11; ry += (my - ry) * .11;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a,button,.etab,.pcard').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.width = '16px'; cur.style.height = '16px'; cur.style.background = '#a78bfa'; ring.style.width = '52px'; ring.style.height = '52px'; ring.style.opacity = '.4'; });
  el.addEventListener('mouseleave', () => { cur.style.width = '10px'; cur.style.height = '10px'; cur.style.background = '#7c6fff'; ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '1'; });
});

/* ── EXP TABS ── */
document.querySelectorAll('.etab').forEach(t => {
  t.addEventListener('click', () => {
    const i = t.dataset.i;
    document.querySelectorAll('.etab').forEach(x => x.classList.remove('on'));
    document.querySelectorAll('.epanel').forEach(x => x.classList.remove('on'));
    t.classList.add('on');
    document.querySelector(`.epanel[data-p="${i}"]`).classList.add('on');
  });
});

/* ── MARQUEES ── */
const r1 = [
  { n: 'Flutter', c: '#54C5F8' }, { n: 'Dart', c: '#00B4AB' }, { n: 'Android', c: '#78C257' },
  { n: 'iOS / Xcode', c: '#A2AAAD' }, { n: 'React.js', c: '#61DAFB' }, { n: 'JavaScript', c: '#F7DF1E' },
  { n: 'Firebase', c: '#FFA000' }, { n: 'REST APIs', c: '#7c6fff' }, { n: 'SQLite', c: '#5B9BD5' }, { n: 'Hive', c: '#FF9800' },
];
const r2 = [
  { n: 'Bloc / Cubit', c: '#a78bfa' }, { n: 'MVVM', c: '#7c6fff' }, { n: 'Git / GitHub', c: '#F05032' },
  { n: 'VS Code', c: '#007ACC' }, { n: 'HTML5', c: '#E34F26' }, { n: 'CSS3', c: '#264DE4' },
  { n: 'Java', c: '#ED8B00' }, { n: 'Python', c: '#3776AB' }, { n: 'OAuth2', c: '#7c6fff' }, { n: 'Agile', c: '#4ade80' },
];
function pills(arr) {
  return arr.map(t => `<div class="mpill"><div class="mpill-dot" style="background:${t.c}"></div><span>${t.n}</span></div>`).join('');
}
document.getElementById('tr1').innerHTML = pills(r1) + pills(r1);
document.getElementById('tr2').innerHTML = pills(r2) + pills(r2);

/* ── SCROLL REVEAL ── */
const ro = new IntersectionObserver(entries => {
  entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('on'), i * 70); });
}, { threshold: .08 });
document.querySelectorAll('.rv').forEach(el => ro.observe(el));

/* ── SKILL BARS ── */
const bo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.querySelectorAll('.sk-fill').forEach(b => b.style.width = b.dataset.w + '%');
  });
}, { threshold: .2 });
document.querySelectorAll('.skills-body').forEach(el => bo.observe(el));

/* ── NAV ACTIVE ── */
const secs = document.querySelectorAll('section[id]');
const nas = document.querySelectorAll('.nav-links a:not(.nav-hire)');
window.addEventListener('scroll', () => {
  let c = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 90) c = s.id; });
  nas.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + c));
}, { passive: true });

/* ── CONTACT FORM ── */
function doSubmit(e) {
  e.preventDefault();
  const b = document.getElementById('sendBtn');
  b.textContent = 'Sending…'; b.disabled = true;
  setTimeout(() => {
    document.getElementById('fOk').style.display = 'block';
    b.innerHTML = 'Sent ✓'; b.style.background = '#16a34a';
  }, 1200);
}

/* ── THEME TOGGLE ── */
const themeBtn = document.getElementById('themeBtn');
const isLight = () => document.body.classList.contains('light');
function applyTheme(light) {
  document.body.classList.toggle('light', light);
  themeBtn.textContent = light ? '🌙' : '☀️';
  localStorage.setItem('theme', light ? 'light' : 'dark');
  drawIso(); // redraw canvas with new palette
}
themeBtn.addEventListener('click', () => applyTheme(!isLight()));
if (localStorage.getItem('theme') === 'light') applyTheme(true);


/* ═══════════════════════════════════════════════════
   ISOMETRIC FLUTTER BUILDER ANIMATION
   Canvas-based: crane assembling a mobile phone
   with Flutter widget "blocks" being lowered in
═══════════════════════════════════════════════════ */
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

const W = 420, H = 480;
canvas.width = W;
canvas.height = H;

// Isometric helpers
const ISO_ANGLE = Math.PI / 6; // 30°
function isoX(x, y, z) { return W / 2 + (x - y) * Math.cos(ISO_ANGLE) * 32; }
function isoY(x, y, z) { return H / 2 - z * 22 + (x + y) * Math.sin(ISO_ANGLE) * 32 - 60; }

// Palette — recomputed on theme change
function palette() {
  const dark = !isLight();
  return {
    bg: dark ? 'transparent' : 'transparent',
    phoneSide: dark ? '#1a2340' : '#c8d4f0',
    phoneTop: dark ? '#243058' : '#dce8ff',
    phoneFront: dark ? '#0f1830' : '#b0c4e8',
    screen: dark ? '#080c18' : '#1a1f3a',
    craneSteel: dark ? '#2a3550' : '#8fa8cc',
    craneDark: dark ? '#1a2340' : '#6b8aaa',
    cableCol: dark ? 'rgba(124,111,255,0.5)' : 'rgba(80,60,200,0.5)',
    accent: '#7c6fff',
    accentL: '#a78bfa',
    green: '#4ade80',
    sky: '#38bdf8',
    amber: '#fbbf24',
    white: dark ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.95)',
    textMuted: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,10,0.4)',
    glow: dark ? 'rgba(124,111,255,0.15)' : 'rgba(124,111,255,0.08)',
  };
}

// Widget blocks to drop (label, color)
const WIDGETS = [
  { label: 'AppBar()', color: '#7c6fff', placed: false },
  { label: 'ListView()', color: '#4ade80', placed: false },
  { label: 'TextField()', color: '#38bdf8', placed: false },
  { label: 'Button()', color: '#f472b6', placed: false },
  { label: 'Card()', color: '#fbbf24', placed: false },
];

// Animation state
let tick = 0;
let currentWidget = 0;
let craneArmAngle = 0;
let dropY = 0;      // how far cable has extended (0=up, 1=placed)
let phase = 'swing'; // swing | drop | flash | pause | nextswing

const SWING_SPEED = 0.018;
const DROP_SPEED = 0.022;
const PAUSE_FRAMES = 52;
let pauseTimer = 0;
let flashAlpha = 0;

// Phone body: 3 unit box centered
const PHONE = { x: 0, y: 0, z: 0, w: 2.2, d: 1.2, h: 4.2 };

// Crane position (top-right area)
const CRANE_BASE = { x: 2.8, y: -1.6 };
const CRANE_HEIGHT = 5.2;
const ARM_LEN = 3.2;

// Where cable hangs from (end of arm)
function cableOrigin(ang) {
  const ex = CRANE_BASE.x + Math.cos(ang) * ARM_LEN;
  const ey = CRANE_BASE.y + Math.sin(ang) * ARM_LEN * 0.3;
  return { ex, ey };
}

// Target drop positions for each widget (stacked on phone)
function widgetDropTarget(idx) {
  return { tx: -0.3, ty: -0.1, tz: PHONE.h - 0.5 - idx * 0.72 };
}

// ── DRAW FUNCTIONS ──

function drawIsoBox(cx, cy, cz, bw, bd, bh, topC, rightC, leftC, alpha = 1) {
  ctx.globalAlpha = alpha;

  // top face
  const tl = [isoX(cx, cy, cz + bh), isoY(cx, cy, cz + bh)];
  const tr = [isoX(cx + bw, cy, cz + bh), isoY(cx + bw, cy, cz + bh)];
  const tc = [isoX(cx + bw, cy + bd, cz + bh), isoY(cx + bw, cy + bd, cz + bh)];
  const tbl = [isoX(cx, cy + bd, cz + bh), isoY(cx, cy + bd, cz + bh)];
  ctx.beginPath(); ctx.moveTo(...tl); ctx.lineTo(...tr); ctx.lineTo(...tc); ctx.lineTo(...tbl); ctx.closePath();
  ctx.fillStyle = topC; ctx.fill();

  // right face
  const rbl = [isoX(cx + bw, cy, cz), isoY(cx + bw, cy, cz)];
  const rbc = [isoX(cx + bw, cy + bd, cz), isoY(cx + bw, cy + bd, cz)];
  ctx.beginPath(); ctx.moveTo(...tr); ctx.lineTo(...rbl); ctx.lineTo(...rbc); ctx.lineTo(...tc); ctx.closePath();
  ctx.fillStyle = rightC; ctx.fill();

  // left face
  const lbl = [isoX(cx, cy + bd, cz), isoY(cx, cy + bd, cz)];
  ctx.beginPath(); ctx.moveTo(...tbl); ctx.lineTo(...tc); ctx.lineTo(...rbc); ctx.lineTo(...lbl); ctx.closePath();
  ctx.fillStyle = leftC; ctx.fill();

  ctx.globalAlpha = 1;
}

function drawPhone(p) {
  const { x, y, z, w, d, h } = p;
  const pal = palette();
  // body
  drawIsoBox(x - w / 2, y - d / 2, z, w, d, h, pal.phoneTop, pal.phoneSide, pal.phoneFront);
  // screen inset
  const sx = x - w / 2 + 0.18, sy = y - d / 2 + 0.12, sw = w - 0.36, sd = d - 0.24, sh = 0.04;
  drawIsoBox(sx, sy, z + h, sw, sd, sh, pal.screen, 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.3)');
  // home bar
  const bx = x - 0.25, by = y - d / 2 + 0.45, bz = z + 0.08;
  drawIsoBox(bx, by, bz, 0.5, 0.05, 0.04, pal.accentL, pal.accent, pal.accent);
}

function drawPlacedWidget(idx, pal) {
  const w = WIDGETS[idx];
  if (!w.placed) return;
  const { tx, ty, tz } = widgetDropTarget(idx);
  const bw = 1.7, bd = 0.9, bh = 0.6;
  const shade = w.color;
  const dark = shadeColor(shade, -30);
  const darker = shadeColor(shade, -50);
  drawIsoBox(tx - bw / 2, ty - bd / 2, tz - bh, bw, bd, bh, shade, dark, darker, 1);
  // label
  const lx = isoX(tx, ty, tz - bh / 2);
  const ly = isoY(tx, ty, tz - bh / 2) - 2;
  ctx.globalAlpha = 0.9;
  ctx.font = 'bold 9px JetBrains Mono, monospace';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText(w.label, lx, ly);
  ctx.globalAlpha = 1;
}

function drawCrane(pal) {
  // base tower
  const bx = CRANE_BASE.x, by = CRANE_BASE.y;
  drawIsoBox(bx - 0.18, by - 0.18, 0, 0.36, 0.36, CRANE_HEIGHT, pal.craneSteel, pal.craneDark, pal.craneDark);

  // horizontal arm
  const armEndX = bx + Math.cos(craneArmAngle) * ARM_LEN;
  const armEndY = by + Math.sin(craneArmAngle) * ARM_LEN * 0.35;
  const armZ = CRANE_HEIGHT;

  ctx.save();
  ctx.strokeStyle = pal.craneSteel;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(isoX(bx, by, armZ), isoY(bx, by, armZ));
  ctx.lineTo(isoX(armEndX, armEndY, armZ));
  ctx.stroke();

  // counterweight arm (opposite)
  const cwX = bx - Math.cos(craneArmAngle) * 1.1;
  const cwY = by - Math.sin(craneArmAngle) * 1.1 * 0.35;
  ctx.lineWidth = 3.5;
  ctx.strokeStyle = pal.craneDark;
  ctx.beginPath();
  ctx.moveTo(isoX(bx, by, armZ), isoY(bx, by, armZ));
  ctx.lineTo(isoX(cwX, cwY, armZ));
  ctx.stroke();

  // counterweight box
  drawIsoBox(cwX - 0.22, cwY - 0.14, armZ - 0.3, 0.44, 0.28, 0.3, pal.craneDark, pal.craneDark, pal.phoneFront);

  ctx.restore();

  return { ex: armEndX, ey: armEndY, ez: armZ };
}

function drawCableAndWidget(armEnd, pal) {
  if (currentWidget >= WIDGETS.length) return;
  const w = WIDGETS[currentWidget];
  const tgt = widgetDropTarget(currentWidget);

  // cable hangs from arm tip
  const cableTopX = isoX(armEnd.ex, armEnd.ey, armEnd.ez);
  const cableTopY = isoY(armEnd.ex, armEnd.ey, armEnd.ez);

  // interpolate widget position along drop
  const wz = armEnd.ez - dropY * (armEnd.ez - tgt.tz - 0.3);
  const wx = armEnd.ex + dropY * (tgt.tx - armEnd.ex);
  const wy = armEnd.ey + dropY * (tgt.ty - armEnd.ey);

  const widgetScreenX = isoX(wx, wy, wz);
  const widgetScreenY = isoY(wx, wy, wz);

  // cable line
  ctx.save();
  ctx.strokeStyle = pal.cableCol;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cableTopX, cableTopY);
  ctx.lineTo(widgetScreenX, widgetScreenY - 10);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  // widget box being lowered
  const bw = 1.7, bd = 0.9, bh = 0.6;
  const shade = w.color;
  const dark = shadeColor(shade, -28);
  const darker = shadeColor(shade, -50);
  drawIsoBox(wx - bw / 2, wy - bd / 2, wz - bh, bw, bd, bh, shade, dark, darker, 0.92);

  // flash effect on placement
  if (flashAlpha > 0) {
    const fx = isoX(tgt.tx, tgt.ty, tgt.tz);
    const fy = isoY(tgt.tx, tgt.ty, tgt.tz);
    ctx.save();
    ctx.globalAlpha = flashAlpha;
    const grad = ctx.createRadialGradient(fx, fy, 0, fx, fy, 60);
    grad.addColorStop(0, shade);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(fx, fy, 60, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  // label on widget
  ctx.globalAlpha = 0.85;
  ctx.font = 'bold 9px JetBrains Mono, monospace';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText(w.label, widgetScreenX, widgetScreenY - bh * 10);
  ctx.globalAlpha = 1;
}

function drawGlowPlate(pal) {
  // subtle glow under phone
  const cx = isoX(0, 0, 0), cy = isoY(0, 0, 0) + 20;
  ctx.save();
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 110);
  g.addColorStop(0, pal.glow);
  g.addColorStop(1, 'transparent');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.ellipse(cx, cy, 110, 50, 0, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

function drawFloatingLabels(pal) {
  // ambient floating tech labels
  const items = [
    { text: 'Bloc', x: isoX(-2.2, 1.5, 3) + Math.sin(tick * 0.03) * 6, y: isoY(-2.2, 1.5, 3) + Math.cos(tick * 0.025) * 5 },
    { text: 'MVVM', x: isoX(2.8, 0.5, 1.2) + Math.cos(tick * 0.02) * 7, y: isoY(2.8, 0.5, 1.2) + Math.sin(tick * 0.03) * 4 },
    { text: 'Dart', x: isoX(-1.5, -1.8, 2) + Math.sin(tick * 0.022) * 5, y: isoY(-1.5, -1.8, 2) + Math.cos(tick * 0.018) * 6 },
  ];
  items.forEach(it => {
    ctx.save();
    ctx.globalAlpha = 0.28;
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillStyle = pal.accent;
    ctx.textAlign = 'center';
    ctx.fillText(it.text, it.x, it.y);
    ctx.restore();
  });
}

// Color helper
function shadeColor(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + pct));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + pct));
  const b = Math.max(0, Math.min(255, (n & 0xff) + pct));
  return `rgb(${r},${g},${b})`;
}

// ── MAIN DRAW ──
function drawIso() {
  ctx.clearRect(0, 0, W, H);
  const pal = palette();

  drawGlowPlate(pal);
  drawPhone(PHONE);

  // placed widgets (already dropped)
  for (let i = 0; i < currentWidget; i++) drawPlacedWidget(i, pal);

  const armEnd = drawCrane(pal);
  drawCableAndWidget(armEnd, pal);
  drawFloatingLabels(pal);
}

// ── ANIMATION LOOP ──
function animate() {
  tick++;

  // state machine
  switch (phase) {
    case 'swing':
      craneArmAngle += SWING_SPEED * (currentWidget % 2 === 0 ? -1 : 1);
      // swing to target angle (roughly above phone)
      if (Math.abs(craneArmAngle) > 0.52) { phase = 'drop'; dropY = 0; }
      break;

    case 'drop':
      dropY += DROP_SPEED;
      if (dropY >= 1) {
        dropY = 1;
        WIDGETS[currentWidget].placed = true;
        flashAlpha = 0.7;
        phase = 'flash';
      }
      break;

    case 'flash':
      flashAlpha -= 0.035;
      if (flashAlpha <= 0) { flashAlpha = 0; pauseTimer = 0; phase = 'pause'; }
      break;

    case 'pause':
      pauseTimer++;
      if (pauseTimer >= PAUSE_FRAMES) {
        currentWidget++;
        if (currentWidget >= WIDGETS.length) {
          // reset everything after all placed
          setTimeout(() => {
            WIDGETS.forEach(w => w.placed = false);
            currentWidget = 0;
            craneArmAngle = 0;
            dropY = 0;
            phase = 'swing';
          }, 1800);
          phase = 'done';
        } else {
          craneArmAngle = 0;
          dropY = 0;
          phase = 'nextswing';
        }
      }
      break;

    case 'nextswing':
      craneArmAngle -= SWING_SPEED * 1.3;
      if (craneArmAngle < -0.1) { craneArmAngle = 0; phase = 'swing'; }
      break;

    case 'done':
      break;
  }

  drawIso();
  requestAnimationFrame(animate);
}

animate();
