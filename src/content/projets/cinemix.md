---
title: Cinemix
excerpt: "Une histoire de musique"
image: /images/projets/cinemix.svg
meta: "Side project · 2026 · Python, SwiftBar · GitHub, Claude Code"
---

J’ai grandi en me réveillant au son du piano que jouait <a href="https://www.youtube.com/watch?v=uSIXzBHSRkQ" target="_blank" rel="noopener noreferrer">mon père</a>. Depuis, la musique a toujours gardé une place importante dans ma vie.

Quand je travaille, j’écoute surtout des musiques de films, et c’est comme ça que je suis tombé sur la radio <a href="https://cinemix.us/" target="_blank" rel="noopener noreferrer">Cinemix</a>. Au fil des morceaux, deux choses m’arrivent souvent :

- Vouloir connaître le morceau en cours pour l’ajouter à mes playlists
- Vérifier un titre après un petit blindtest perso

## Le raccourci qui faisait un détour

<figure class="ui-figure">

![Le début du raccourci Apple Shortcuts « What's playing on Cinemix? » : il récupère le contenu de la page de la radio, puis en extrait le titre, l'artiste et l'album.](/images/projets/cinemix-raccourci.png)

</figure>

Au départ, j’allais directement sur le site de la radio. Ensuite, je me suis créé un <a href="https://www.icloud.com/shortcuts/ace7f3cb0fb14ac8b454ff29578dd503" target="_blank" rel="noopener noreferrer">raccourci Apple</a> pour savoir en un clic quel morceau passait.

Cette solution fonctionnait, mais elle ne me satisfaisait pas entièrement. Il fallait la lancer, attendre le résultat, et ça me faisait sortir de ce que j’étais en train de faire.

## En un coup d’œil

Je ne voulais plus aller chercher l’information. Je voulais qu’elle soit déjà là, à portée d’œil, sans rien avoir à faire.

J’utilisais déjà la barre de menus pour quelques apps, dont <a href="https://github.com/damascenorafael/reminders-menubar" target="_blank" rel="noopener noreferrer">Reminders MenuBar</a> (que je recommande). Elle m’a paru être l’endroit idéal : toujours visible, quelle que soit la fenêtre au premier plan. C’était aussi le bon moment pour m’amuser à construire quelque chose avec une IA.

Je suis parti sur un plugin SwiftBar, basé sur un simple script Python.

<figure class="ui-figure">

<div class="ui-compare" data-compare><img class="ui-compare-after" src="/images/projets/cinemix-apres.webp" alt="Version finale du plugin : le menu affiche la jaquette, l'artiste, l'album et la durée, avec des liens vers Cinemix, Apple Music et les réglages." draggable="false"><div class="ui-compare-before"><img src="/images/projets/cinemix-avant.webp" alt="Première version du plugin : le menu liste le titre, l'artiste, l'album, la durée et les prochains morceaux, sans jaquette." draggable="false"></div><span class="ui-compare-tag ui-compare-tag-before">Avant</span><span class="ui-compare-tag ui-compare-tag-after">Après</span><div class="ui-compare-handle" data-compare-handle role="slider" tabindex="0" aria-label="Comparer la première version et la version finale" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"><span class="ui-compare-knob"><svg viewBox="0 0 24 24" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><path transform="translate(-5 0)" d="M8 13v-2h2v2H8Zm2-2V9h2v2h-2Zm0 4v-2h2v2h-2Zm2-6V7h2v2h-2Zm0 8v-2h2v2h-2Zm2-10V5h2v2h-2Zm0 12v-2h2v2h-2Z"/><path transform="translate(5 0)" d="M16 13v-2h-2v2h2Zm-2-2V9h-2v2h2Zm0 4v-2h-2v2h2Zm-2-6V7h-2v2h2Zm0 8v-2h-2v2h2ZM10 7V5H8v2h2Zm0 12v-2H8v2h2Z"/></svg></span></div></div>

</figure>

Une fois cette première version en place, il ne me restait plus qu’à l’ajuster à mes besoins :

- Ajouter la jaquette dans le menu et rendre les infos du morceau lisibles
- Ordonner les actions et ajouter l’option des plateformes
- Remplacer l’emoji par une icône native
- Masquer les éléments techniques de SwiftBar


## Ce que j’ai laissé de côté

<figure class="ui-figure">

![Animation : l'icône animée du plugin dans la barre de menus, que j'ai écartée, et la ligne « Ajouter aux favoris » barrée dans le menu.](/images/projets/cinemix-favoris.webp)

</figure>

- Le bouton "Ajouter aux favoris" semblait évident. J’aime → je clique → c’est dans ma playlist. Mais je suis parti du principe que la friction positive était ici mon alliée, pour éviter de me retrouver avec 1 000 chansons ajoutées sans trop savoir pourquoi.

  Le menu m’envoie plutôt sur Apple Music. J’écoute, je regarde, puis je décide. Un petit effort supplémentaire, mais chaque morceau gardé a été vraiment choisi.

- L’icône animée était sympa. Mais des barres qui bougent laissent penser que la musique joue, alors que le plugin ne lit rien. Elle n’aurait de sens que s’il devenait un vrai lecteur, animée pendant la lecture et figée en pause.

## Sans les mains

Ce projet, je ne l’aurais sûrement pas fait sans l’IA. Après seulement quelques prompts, ça fonctionnait.

Depuis des années, j’accumule des idées de projets que je laissais de côté, faute de pouvoir les mettre en place. Aujourd’hui, ça me semble possible.

Mais en même temps, je crée, je conçois, sans trop comprendre comment, sans vraiment mettre les mains dedans. Comme la sensation d’avoir sauté une étape.

## Et maintenant ?

Je l’utilise presque tous les jours et pour une raison que je n’avais pas prévue, son emplacement appelle à l’utilisation. Parfois, je le vois et je me dis : « Tiens, et si j’écoutais Cinemix ? »

Deux idées pour la suite :
- En faire un vrai lecteur, pour écouter Cinemix directement depuis la barre de menus. L’icône animée aurait alors enfin du sens.

- Raconter ce qui passe derrière chaque bande originale : il y a un film, un compositeur, une scène. J’aimerais en savoir plus d’un clic, comme si quelqu’un me racontait l’histoire du morceau pendant que je l’écoute.

En attendant, vous pouvez en profiter.

<a class="ui-project ui-gh-card" href="https://github.com/Romauge/Cinemix" target="_blank" rel="noopener noreferrer"><span class="ui-project-main"><svg class="ui-gh-icon" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" shape-rendering="crispEdges"><path d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"/></svg><span class="ui-project-text"><span class="ui-project-title">Romauge/Cinemix</span><span class="ui-project-sub">Le plugin SwiftBar, prêt à installer.</span></span></span><svg class="ui-project-arrow" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><path d="M9 17h2v-2h2v-2h2v-2h-2V9h-2V7H9v10Z"/></svg></a>


## Installation

L’installation prend deux minutes :

1. Installez SwiftBar avec `brew install --cask swiftbar`, ou téléchargez-le sur <a href="https://swiftbar.app" target="_blank" rel="noopener noreferrer">swiftbar.app</a>.
2. Lancez SwiftBar et choisissez un dossier de plugins.
3. Copiez `cinemix.30s.py` dans ce dossier, puis rendez-le exécutable depuis le Terminal, dans ce même dossier :

   ```bash
   chmod +x cinemix.30s.py
   ```

4. Dans SwiftBar, cliquez sur « Refresh All ».

