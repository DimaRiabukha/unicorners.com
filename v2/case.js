/* Case-page behaviour — the four animations the reference page runs:
   1. header condenses to a pill on scroll (same as the homepage)
   2. story slideshow: crossfade with a filling progress bar per frame
   3. scroll-linked text fill: ink sweeps through the paragraph as it passes
   4. impact carousel: arrows + snap scrolling
   Plus the shared reveal-on-scroll. All motion is skipped for
   prefers-reduced-motion. */

const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

/* 1 — header */
const topbar = document.getElementById('topbar');
if (topbar) {
  const onScroll = () => topbar.classList.toggle('stuck', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive: true});
}

/* mobile menu */
const burger = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.innerHTML = open ? '&#10005;' : '&#9776;';
  });
}

/* reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {rootMargin: '0px 0px -8% 0px', threshold: 0.08});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* 2 — story slideshow */
const story = document.querySelector('.story');
if (story) {
  const frames = [...story.querySelectorAll('.frames img')];
  const bars = [...story.querySelectorAll('.bar')];
  const HOLD = 4600;
  let idx = 0;

  const show = (i) => {
    frames.forEach((f, n) => f.classList.toggle('on', n === i));
    bars.forEach((b, n) => {
      b.classList.toggle('on', n === i);
      b.classList.toggle('done', n < i);
      if (n > i) b.classList.remove('done');
    });
  };
  show(0);
  if (frames.length > 1 && !reduce) {
    setInterval(() => {
      if (document.hidden) return;
      idx = (idx + 1) % frames.length;
      show(idx);
    }, HOLD);
  }
}

/* 3 — scroll-linked text fill */
const fills = [...document.querySelectorAll('.tsf span')];
if (fills.length) {
  const paint = () => {
    const vh = window.innerHeight || 800;
    fills.forEach(span => {
      const r = span.getBoundingClientRect();
      // 0 when the block's top reaches 80% of the viewport, 1 once its
      // bottom has risen past 35% — the text fills over that travel
      const start = vh * 0.8, end = vh * 0.35;
      const p = Math.min(1, Math.max(0, (start - r.top) / Math.max(1, (start - end) + r.height * 0.6)));
      const head = (p * 100).toFixed(1);
      const tail = Math.min(100, p * 100 + 9).toFixed(1);
      span.style.backgroundImage =
        `linear-gradient(90deg, var(--ink) ${head}%, #C9CDC8 ${tail}%)`;
    });
  };
  if (reduce) {
    fills.forEach(s => { s.style.backgroundImage = 'none'; s.style.color = 'var(--ink)'; });
  } else {
    paint();
    window.addEventListener('scroll', paint, {passive: true});
    window.addEventListener('resize', paint);
  }
}

/* 4 — impact carousel */
const rail = document.querySelector('.rail');
if (rail) {
  const prev = document.getElementById('rail-prev');
  const next = document.getElementById('rail-next');
  const step = () => {
    const card = rail.querySelector('.icard');
    return card ? card.getBoundingClientRect().width + 16 : rail.clientWidth * 0.8;
  };
  const sync = () => {
    if (!prev || !next) return;
    prev.disabled = rail.scrollLeft < 8;
    next.disabled = rail.scrollLeft > rail.scrollWidth - rail.clientWidth - 8;
  };
  prev && prev.addEventListener('click', () => rail.scrollBy({left: -step(), behavior: 'smooth'}));
  next && next.addEventListener('click', () => rail.scrollBy({left: step(), behavior: 'smooth'}));
  rail.addEventListener('scroll', sync, {passive: true});
  sync();
}
