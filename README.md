# Portfolio — Astro

Même site que la version Grav, mais statique (aucun PHP). Le site complet est un dossier de fichiers : `dist/`.

## Où modifier le contenu (sans toucher au code)

Tout est en Markdown dans `src/content/` :

| Dossier | Contenu |
|---|---|
| `home/hero.md` | nom, rôle et bio courte (onglet « Default ») |
| `home/bio-long.md` | bio longue (onglet « Long ») |
| `projets/*.md` | un fichier = un projet (apparaît sur l'accueil) |
| `writing/*.md` | articles (adresse `/writing/nom-du-fichier`) |
| `pages/*.md` | pages libres (`about`) |

En-tête d'un fichier (entre les `---`) :

- `title` : le titre (obligatoire)
- `excerpt` : sous-titre du projet sur l'accueil (sinon, début du texte)
- `published: false` : cache la page

Les projets sont classés par ordre alphabétique du nom de fichier.

## Commandes

```bash
npm install        # une seule fois
npm run dev        # aperçu local avec rechargement automatique
npm run build      # fabrique le site dans dist/
npm run preview    # teste le contenu de dist/
```

## Mise en ligne sur Cloudflare Pages

- Build command : `npm run build`
- Build output directory : `dist`
- Node : version 22 ou plus (indiquée dans `.node-version`)

## Styles, polices, scripts

Dans `public/` : `css/`, `fonts/`, `images/`, `js/`.
Les titres de section des pages article reçoivent leur lien d'ancre par `public/js/article.js`.
