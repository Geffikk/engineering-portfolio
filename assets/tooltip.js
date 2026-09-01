/* Hover and focus explanations for elements carrying data-tip.
   Positioned in JS rather than with a CSS pseudo-element so a chip near the
   edge of the viewport cannot push the panel off-screen and create a
   horizontal scrollbar. */
(function () {
  var panel = null;
  var current = null;

  function ensure() {
    if (panel) return panel;
    panel = document.createElement('div');
    panel.className = 'tip';
    panel.setAttribute('role', 'tooltip');
    panel.setAttribute('aria-hidden', 'true');
    document.body.appendChild(panel);
    return panel;
  }

  function show(el) {
    var text = el.getAttribute('data-tip');
    if (!text) return;
    current = el;

    var p = ensure();
    p.textContent = text;
    p.style.left = '0px';
    p.style.top = '0px';
    p.setAttribute('data-open', 'true');
    p.setAttribute('aria-hidden', 'false');

    var anchor = el.getBoundingClientRect();
    var tip = p.getBoundingClientRect();
    var margin = 10;

    var left = anchor.left + anchor.width / 2 - tip.width / 2;
    var maxLeft = document.documentElement.clientWidth - tip.width - margin;
    if (left > maxLeft) left = maxLeft;
    if (left < margin) left = margin;

    // above the element by default, below it when there is no room
    var top = anchor.top - tip.height - 9;
    if (top < margin) top = anchor.bottom + 9;

    p.style.left = Math.round(left) + 'px';
    p.style.top = Math.round(top) + 'px';
  }

  function hide() {
    current = null;
    if (!panel) return;
    panel.removeAttribute('data-open');
    panel.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('[data-tip]');
    if (!targets.length) return;

    Array.prototype.forEach.call(targets, function (el) {
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
      el.addEventListener('mouseenter', function () { show(el); });
      el.addEventListener('mouseleave', hide);
      el.addEventListener('focus', function () { show(el); });
      el.addEventListener('blur', hide);
    });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
    window.addEventListener('scroll', function () { if (current) show(current); }, { passive: true });
    window.addEventListener('resize', hide);
  });
})();
