/* Pages article : liens d'ancre sur les titres */
(function () {
    var body = document.querySelector('.ui-article-body');
    if (!body) return;
    var used = {};
    body.querySelectorAll('h2, h3, h4').forEach(function (h) {
        var id = h.id || h.textContent.trim().toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        if (!id) return;
        if (used[id]) id += '-' + (++used[id]); else used[id] = 1;
        h.id = id;
        var a = document.createElement('a');
        a.className = 'ui-anchor';
        a.href = '#' + id;
        a.setAttribute('aria-label', 'Lien vers cette section');
        a.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><path d="M4 6h7v2H4zm0 10h7v2H4zM2 8h2v8H2zm18-2h-7v2h7zm0 10h-7v2h7zm2-8h-2v8h2zM7 11h10v2H7z"/></svg>';
        a.addEventListener('click', function (e) {
            e.preventDefault();
            history.replaceState(null, '', '#' + id);
            if (navigator.clipboard) navigator.clipboard.writeText(location.origin + location.pathname + '#' + id);
        });
        h.insertBefore(a, h.firstChild);
    });
    if (location.hash) {
        var t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (t) t.scrollIntoView();
    }
})();

