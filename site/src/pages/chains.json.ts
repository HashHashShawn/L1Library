import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Serves /chains.json — a machine-readable feed of structured chain metadata.
// The seed of a future public API; also a clean grounding source for AI agents.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://l1library.com/').replace(/\/$/, '');

  const chains = (await getCollection('chains'))
    .sort((a, b) => a.data.name.localeCompare(b.data.name))
    .map((c) => ({
      slug: c.slug,
      name: c.data.name,
      ticker: c.data.ticker,
      tagline: c.data.tagline,
      category: c.data.category,
      consensus: c.data.consensus,
      consensusType: c.data.consensusType,
      evmCompatible: c.data.evmCompatible,
      nativeToken: c.data.nativeToken,
      launched: c.data.launched,
      language: c.data.language ?? null,
      tps: c.data.tps ?? null,
      blockTime: c.data.blockTime ?? null,
      marketCapRank: c.data.marketCapRank ?? null,
      supply: c.data.supply ?? null,
      website: c.data.website,
      explorer: c.data.explorer ?? null,
      status: c.data.status,
      lastUpdated: c.data.lastUpdated.toISOString().split('T')[0],
      url: `${base}/chains/${c.slug}`,
    }));

  const body = {
    name: 'L1 Library — Chains',
    description: 'Structured metadata for every chain profile in L1 Library.',
    license: 'See /about for content licensing.',
    generated: new Date().toISOString().split('T')[0],
    count: chains.length,
    chains,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
