/*
 * Contrôle du mode d'affichage (clair / sombre / système)
 *
 * Ordre de priorité : choix mémorisé (localStorage) > réglage par défaut > préférence du système.
 * En mode « système », on suit les changements du système en direct.
 * Un petit script dans <head> (layout) applique le mode avant l'affichage pour éviter un flash ;
 * ce fichier gère la barre de choix.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStored(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  }
  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyMode(mode) {
    var resolved = (mode === 'light' || mode === 'dark')
      ? mode
      : (systemPrefersDark() ? 'dark' : 'light');
    root.setAttribute('data-theme', resolved);
    root.setAttribute('data-theme-preference', mode === 'light' || mode === 'dark' ? mode : 'auto');
    root.classList.toggle('dark', resolved === 'dark');
  }

  function currentPreference() {
    return getStored() || root.getAttribute('data-theme-default') || 'auto';
  }

  // Suivre le système tant que le mode est « système »
  if (window.matchMedia) {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var handler = function () {
      if (currentPreference() === 'auto') applyMode('auto');
    };
    if (mql.addEventListener) mql.addEventListener('change', handler);
    else if (mql.addListener) mql.addListener(handler);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('[data-theme-option]');

    function mark(pref) {
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-theme-option') === pref;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        b.classList.toggle('is-on', on);
      });
    }

    var pref = currentPreference();
    applyMode(pref);
    mark(pref);

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        var choice = b.getAttribute('data-theme-option');
        setStored(choice);
        applyMode(choice);
        mark(choice);
      });
    });
  });
})();
