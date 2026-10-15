import { defineConfig } from 'astro/config';

// Site 100 % statique : `npm run build` produit le dossier `dist`,
// déployé sur GitHub Pages par .github/workflows/deploy.yml.
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Garde les apostrophes et guillemets droits du texte
  // (Astro les transformerait sinon en apostrophes courbes).
  markdown: { smartypants: false },
});
