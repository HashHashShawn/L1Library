# L1 Library — Site Setup

## Quick Start

```bash
cd site
npm install
npm run dev
```

Open `http://localhost:4321` to see the site.

## Project Structure

```
site/
├── astro.config.mjs          # Astro + MDX + Tailwind + Vercel config
├── tailwind.config.mjs        # L1 design system (B&W palette, IBM Plex Mono, Inter)
├── package.json
├── public/
│   └── favicon.svg            # L1 lettermark
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collection schemas (chains + concepts)
│   │   ├── chains/            # Chain profile MDX files (one per chain)
│   │   │   └── bitcoin.mdx    # Starter: Bitcoin
│   │   └── concepts/          # Concept page MDX files (one per concept)
│   │       └── proof-of-work.mdx  # Starter: Proof of Work
│   ├── layouts/
│   │   └── BaseLayout.astro   # Shared HTML shell (head, header, footer)
│   ├── pages/
│   │   ├── index.astro        # Homepage (Variant D hybrid)
│   │   ├── chains/
│   │   │   └── [slug].astro   # Chain profile template (11 sections)
│   │   └── concepts/
│   │       └── [slug].astro   # Concept page template (7 sections)
│   ├── components/
│   │   ├── Header.astro       # Nameplate + nav + search
│   │   └── Footer.astro       # Stat band + footer links
│   └── styles/
│       └── global.css         # Design system CSS (double rules, watermark, kickers, etc.)
```

## Adding Content

### New chain profile
1. Create `src/content/chains/{slug}.mdx`
2. Add frontmatter matching the schema in `config.ts`
3. Write 11 sections using the Bitcoin template as reference

### New concept page
1. Create `src/content/concepts/{slug}.mdx`
2. Add frontmatter matching the schema in `config.ts`
3. Write 7 sections using the Proof of Work template as reference

## Design Decisions

See `docs/L1_Library_Decision_Log.md` for all architectural and design decisions (L1-001 through L1-011).

## Deploy

Connected to Vercel. Push to GitHub → auto-deploys.
```bash
npm run build    # Build static site
npm run preview  # Preview production build locally
```
