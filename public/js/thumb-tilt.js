/* Accueil : la vignette d'un projet s'incline légèrement vers la souris et son reflet suit le pointeur. */
(function () {
    if (!window.matchMedia) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!matchMedia('(hover: hover)').matches) return;

    function clamp(v) { return Math.max(-1, Math.min(1, v)); }

    document.querySelectorAll('.ui-project').forEach(function (row) {
        var thumb = row.querySelector('.ui-thumb');
        if (!thumb) return;

        function reset() {
            ['--rx', '--ry', '--sx', '--sy'].forEach(function (p) { thumb.style.removeProperty(p); });
        }

        row.addEventListener('pointermove', function (e) {
            var t = thumb.getBoundingClientRect();
            var r = row.getBoundingClientRect();
            var nx = clamp((e.clientX - (t.left + t.width / 2)) / (r.width / 2));
            var ny = clamp((e.clientY - (t.top + t.height / 2)) / (r.height / 2));
            thumb.style.setProperty('--ry', (nx * 5).toFixed(2) + 'deg');
            thumb.style.setProperty('--rx', (-ny * 5).toFixed(2) + 'deg');
            thumb.style.setProperty('--sx', (50 + nx * 45).toFixed(1) + '%');
            thumb.style.setProperty('--sy', (50 + ny * 45).toFixed(1) + '%');
        });
        row.addEventListener('pointerleave', reset);
    });
})();
