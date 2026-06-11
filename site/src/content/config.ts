import { defineCollection, z } from 'astro:content';

// Chain profile collection — matches the 11-section template (L1-009)
const chains = defineCollection({
  type: 'content',
  schema: z.object({
    // Core identity
    name: z.string(),
    ticker: z.string(),
    tagline: z.string(),
    letter: z.string().length(1), // For A-Z directory

    // Key stats grid (10 stats in template)
    launched: z.string(),
    consensus: z.string(),
    language: z.string().optional(),
    tps: z.string().optional(),
    blockTime: z.string().optional(),
    marketCapRank: z.string().optional(),
    nativeToken: z.string(),
    supply: z.string().optional(),
    website: z.string().url(),
    explorer: z.string().url().optional(),

    // Taxonomy
    category: z.enum(['layer-1', 'layer-2', 'sidechain', 'rollup', 'appchain']),
    consensusType: z.enum(['pow', 'pos', 'dpos', 'poa', 'dag', 'other']),
    evmCompatible: z.boolean().default(false),

    // Comparison peers (for section 8)
    compareTo: z.array(z.string()).default([]),

    // Related chains (for section 9)
    relatedChains: z.array(z.string()).default([]),

    // Metadata
    lastUpdated: z.date(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    mitSource: z.string().optional(), // Link to MIT course material if applicable
  }),
});

// Concept page collection — matches the 7-section template (L1-011)
const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    // Core identity
    title: z.string(),
    definition: z.string(), // The pull-quote glossary definition
    category: z.enum([
      'consensus',
      'cryptography',
      'economics',
      'governance',
      'scaling',
      'security',
      'smart-contracts',
      'data-structures',
      'networking',
    ]),

    // Cross-links
    usedBy: z.array(z.string()).default([]), // Chain slugs that use this concept
    relatedConcepts: z.array(z.string()).default([]),
    alternativeTo: z.string().optional(), // e.g., PoW → PoS

    // Metadata
    lastUpdated: z.date(),
    status: z.enum(['published', 'draft', 'stub']).default('draft'),
    mitSource: z.string().optional(),
  }),
});

export const collections = { chains, concepts };
