import { defineConfig } from 'astro/config';

// Site 100 % statique : `npm run build` produit le dossier `dist`,
// déployé sur GitHub Pages par .github/workflows/deploy.yml.
export default defineConfig({
  site: 'https://romauge.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Garde les apostrophes et guillemets droits du texte
  // (Astro les transformerait sinon en apostrophes courbes).
  markdown: {
    smartypants: false,
    // Coloration du code : un thème clair et un thème sombre, choisis par le CSS selon le mode du site.
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false },
  },
});
