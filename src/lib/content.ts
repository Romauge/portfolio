import { getCollection } from 'astro:content';

// HTML d'une page Markdown, déjà converti par Astro.
// Les `id` de titres générés par Astro sont retirés : le script des pages article les recrée
// (sans accents), pour garder des liens d'ancre stables.
export function htmlOf(entry: { rendered?: { html?: string } }): string {
  return (entry.rendered?.html ?? '').replace(/(<h[1-6])\s+id="[^"]*"/g, '$1');
}

// Projets publiés, dans l'ordre alphabétique des noms de fichier.
export async function getProjets() {
  const all = await getCollection('projets', (e) => e.data.published);
  return all.sort((a, b) => a.id.localeCompare(b.id));
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Sous-titre d'un projet : `excerpt` s'il existe, sinon le début du texte (110 caractères + …).
export function subtitleHtml(entry: { data: { excerpt?: string }; rendered?: { html?: string } }): string {
  const excerpt = entry.data.excerpt?.trim();
  if (excerpt) return escapeHtml(excerpt);
  const text = htmlOf(entry).replace(/<[^>]*>/g, '').trim();
  if (!text) return '';
  const chars = Array.from(text);
  return chars.length <= 110 ? text : chars.slice(0, 110).join('') + '&hellip;';
}
