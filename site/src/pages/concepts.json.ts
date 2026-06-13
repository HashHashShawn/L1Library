import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Serves /concepts.json — a machine-readable feed of structured concept metadata.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://l1library.com/').replace(/\/$/, '');

  const concepts = (await getCollection('concepts'))
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((c) => ({
      slug: c.slug,
      title: c.data.title,
      definition: c.data.definition,
      category: c.data.category,
      relatedConcepts: c.data.relatedConcepts ?? [],
      alternativeTo: c.data.alternativeTo ?? null,
      status: c.data.status,
      lastUpdated: c.data.lastUpdated.toISOString().split('T')[0],
      url: `${base}/concepts/${c.slug}`,
    }));

  const body = {
    name: 'L1 Library — Concepts',
    description: 'Structured metadata for every concept page in L1 Library.',
    license: 'See /about for content licensing.',
    generated: new Date().toISOString().split('T')[0],
    count: concepts.length,
    concepts,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
