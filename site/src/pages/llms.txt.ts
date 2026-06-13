import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Serves /llms.txt — a curated, link-rich index of the corpus for LLMs and
// AI answer engines, following the llmstxt.org convention. Generated from the
// content collections so it stays current as chains and concepts are added.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://l1library.com/').replace(/\/$/, '');

  const chains = (await getCollection('chains'))
    .filter((c) => c.data.status === 'published')
    .sort((a, b) => a.data.name.localeCompare(b.data.name));

  const concepts = (await getCollection('concepts'))
    .filter((c) => c.data.status === 'published')
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  const lines: string[] = [];
  lines.push('# L1 Library');
  lines.push('');
  lines.push(
    '> A free, neutral, structured reference for how Layer 1 blockchains actually work — architecture, consensus, and economics, not price or market data.'
  );
  lines.push('');
  lines.push(
    'Every chain profile follows the same 11-section template and every concept the same 7-section template. Content is educational-first, sourced, and written at three depth levels (beginner, intermediate, builder). No price charts, no rankings, no sponsored placement.'
  );
  lines.push('');

  lines.push('## Chains');
  for (const c of chains) {
    lines.push(`- [${c.data.name}](${base}/chains/${c.slug}): ${c.data.tagline}`);
  }
  lines.push('');

  lines.push('## Concepts');
  for (const c of concepts) {
    lines.push(`- [${c.data.title}](${base}/concepts/${c.slug}): ${c.data.definition}`);
  }
  lines.push('');

  lines.push('## Structured data');
  lines.push(`- [Chains (JSON)](${base}/chains.json): Machine-readable metadata for every chain profile.`);
  lines.push(`- [Concepts (JSON)](${base}/concepts.json): Machine-readable metadata for every concept page.`);
  lines.push('');

  lines.push('## About');
  lines.push(`- [About](${base}/about): Mission, methodology, and editorial standards.`);
  lines.push(`- [Glossary](${base}/glossary): Terminology used across the library.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
