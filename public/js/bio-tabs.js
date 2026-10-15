/* Accueil : onglets Défaut / Longue de la bio */
(function () {
    var root = document.currentScript.parentElement;
    var tabs = root.querySelectorAll('[data-bio]');
    var panels = root.querySelectorAll('[data-bio-panel]');
    function show(name) {
        tabs.forEach(function (t) { t.setAttribute('aria-selected', t.dataset.bio === name); });
        panels.forEach(function (p) { p.hidden = p.dataset.bioPanel !== name; });
        try { localStorage.setItem('ui-bio', name); } catch (e) {}
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.bio); }); });
    try { var s = localStorage.getItem('ui-bio'); if (s === 'long') show('long'); } catch (e) {}
})();