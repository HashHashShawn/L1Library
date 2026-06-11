# L1 Library

**Every chain. Explained.**

L1 Library is an open source blockchain knowledge wiki built on MIT curriculum. Chain profiles, concept explainers, and technical foundations — no price charts, no sponsored rankings, just clarity.

Live at [l1library.com](https://l1library.com)

---

## What's Inside

- **Chain Profiles** — Structured 11-section breakdowns of Layer 1 blockchains: overview, architecture, consensus, ecosystem, governance, economics, history, comparisons, and more.
- **Concept Pages** — Deep explainers on blockchain fundamentals (Proof of Work, Merkle Trees, Byzantine Fault Tolerance, etc.) with beginner/intermediate/builder depth levels.
- **A-Z Directory** — Browse all chains alphabetically. Built to scale to 300+.
- **Learning Paths** — Curated sequences from fundamentals to advanced topics.

## Content Sources

The knowledge base is grounded in MIT's blockchain curriculum (15.s12 / 15.395), including lecture materials, casebooks, and research papers by Catalini, Gans, and others. Content beyond the MIT source material is flagged inline and independently verified.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | [Astro](https://astro.build) (static, zero JS by default) |
| Content | MDX (Markdown + JSX) via Astro Content Collections |
| Styling | Tailwind CSS + custom design tokens (pure B&W) |
| Typography | IBM Plex Mono (headings) + Inter (body) |
| Search | Pagefind (static search index) |
| Deploy | Vercel (auto-deploys from `main`) |

## Run Locally

```bash
cd site
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Project Structure

```
L1Library/
├── site/                    # Astro project
│   ├── src/
│   │   ├── content/
│   │   │   ├── chains/      # Chain profile MDX files
│   │   │   └── concepts/    # Concept page MDX files
│   │   ├── components/      # Astro components (Header, Footer)
│   │   ├── layouts/         # Base layout
│   │   ├── pages/           # Route pages
│   │   └── styles/          # Design system CSS
│   ├── public/              # Static assets
│   ├── astro.config.mjs
│   └── package.json
├── docs/                    # Architecture docs, decision log
├── vault/                   # Concept notes (Obsidian format)
├── LICENSE                  # MIT (code)
└── LICENSE-CONTENT          # CC-BY-SA 4.0 (educational content)
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Adding new chain profiles
- Adding or improving concept pages
- Fixing errors or outdated information
- Improving the site design or functionality
- Translating content

Every contribution goes through editorial review to maintain accuracy and consistency.

## Content Status

| Type | Count | Status |
|---|---|---|
| Chain profiles | 1 (Bitcoin) | Published |
| Concept pages | 19 | Draft (in review) |
| Glossary | — | Planned |
| Learning paths | — | Planned |

## Support This Project

L1 Library is free, open source, and community-supported. If you find it useful:

- **GitHub Sponsors** — [Sponsor @HashHashShawn](https://github.com/sponsors/HashHashShawn)
- **Bitcoin** — `(wallet address coming soon)`
- **Ethereum** — `0xc3f8Ca91C3e14C41b7e7d97F423B702acb109a0A`
- **Star this repo** — It helps others find L1 Library

All donations go toward hosting, content development, and keeping the project independent.

## License

Code (Astro, JS, CSS, config) is [MIT](LICENSE).
Educational content (MDX files) is [CC-BY-SA 4.0](LICENSE-CONTENT).

---

Built by [pudgyaf](https://github.com/HashHashShawn) with help from the open source community.
