import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Chaque dossier de src/content est une "collection" : un fichier .md = une page.
// `published: false` cache une page du site.
const base = {
  title: z.string(),
  published: z.boolean().default(true),
};

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({ ...base, excerpt: z.string().optional(), image: z.string().optional() }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({ ...base, excerpt: z.string().optional() }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object(base),
});

const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: z.object({
    title: z.string().optional(),
    name: z.string().optional(),
    role: z.string().optional(),
    class: z.string().optional(),
  }),
});

export const collections = { projets, writing, pages, home };
