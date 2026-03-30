/* ── CURSOR ── */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px' });
(function loop() { rx += (mx - rx) * .11; ry += (my - ry) * .11; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop) })();
document.querySelectorAll('a,button,.etab,.pcard').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.width = '16px'; cur.style.height = '16px'; cur.style.background = '#a78bfa'; ring.style.width = '52px'; ring.style.height = '52px'; ring.style.opacity = '.4' });
    el.addEventListener('mouseleave', () => { cur.style.width = '10px'; cur.style.height = '10px'; cur.style.background = '#7c6fff'; ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '1' });
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
function pills(arr) { return arr.map(t => `<div class="mpill"><div class="mpill-dot" style="background:${t.c}"></div><span>${t.n}</span></div>`).join('') }
document.getElementById('tr1').innerHTML = pills(r1) + pills(r1);
document.getElementById('tr2').innerHTML = pills(r2) + pills(r2);

/* ── SCROLL REVEAL ── */
const ro = new IntersectionObserver(entries => {
    entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('on'), i * 70) });
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
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 90) c = s.id });
    nas.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + c));
}, { passive: true });

/* ── FORM ── */
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
const btn = document.getElementById('themeBtn');
const isLight = () => document.body.classList.contains('light');
function applyTheme(light) {
    document.body.classList.toggle('light', light);
    btn.textContent = light ? '🌙' : '☀️';
    /* update marquee fade colours to match bg */
    document.querySelectorAll('.marquee-wrap::before,.marquee-wrap::after').forEach(() => { });
    localStorage.setItem('theme', light ? 'light' : 'dark');
}
btn.addEventListener('click', () => applyTheme(!isLight()));
/* restore saved preference */
if (localStorage.getItem('theme') === 'light') applyTheme(true);
