/*
 * Comparateur avant / après : on glisse la poignée (souris, doigt ou flèches du clavier)
 * pour révéler l'image « avant » à gauche et l'image « après » à droite.
 */
(function () {
  'use strict';
  document.querySelectorAll('[data-compare]').forEach(function (box) {
    var handle = box.querySelector('[data-compare-handle]');
    if (!handle) return;
    var pos = 50;

    function set(p) {
      pos = Math.max(0, Math.min(100, p));
      box.style.setProperty('--pos', pos + '%');
      handle.setAttribute('aria-valuenow', Math.round(pos));
    }
    function fromEvent(e) {
      var r = box.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    }

    var dragging = false;
    box.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      box.classList.add('is-dragging');
      try { box.setPointerCapture(e.pointerId); } catch (err) {}
      fromEvent(e);
      handle.focus({ preventScroll: true });
      e.preventDefault();
    });
    box.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
    function stop() { dragging = false; box.classList.remove('is-dragging'); }
    box.addEventListener('pointerup', stop);
    box.addEventListener('pointercancel', stop);

    handle.addEventListener('keydown', function (e) {
      var step = e.shiftKey ? 10 : 2;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') set(pos - step);
      else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') set(pos + step);
      else if (e.key === 'Home') set(0);
      else if (e.key === 'End') set(100);
      else return;
      e.preventDefault();
    });

    set(50);
  });
})();
