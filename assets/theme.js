/* Theme toggle.
   Runs blocking in <head> so the stored choice is applied before first paint.
   No stored choice means "follow the operating system", which the CSS already
   handles through prefers-color-scheme. */
(function () {
  var root = document.documentElement;

  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);
  } catch (e) { /* private mode, blocked storage: fall back to the OS setting */ }

  function current() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function paint(btn) {
    var theme = current();
    var dark = theme === 'dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('title', dark ? 'Light theme' : 'Dark theme');
    var sun = btn.querySelector('.tl-sun');
    var moon = btn.querySelector('.tl-moon');
    if (sun) sun.style.display = dark ? 'none' : '';
    if (moon) moon.style.display = dark ? '' : 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    paint(btn);
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
      paint(btn);
    });
  });
})();
