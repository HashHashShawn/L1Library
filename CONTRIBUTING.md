# Contributing to L1 Library

Thank you for helping build the blockchain reference wiki. This guide covers how to contribute chain profiles, concept pages, bug fixes, and design improvements.

## Quick Start

1. Fork the repo
2. Create a branch: `git checkout -b add/chain-ethereum` or `fix/typo-proof-of-work`
3. Make your changes
4. Open a pull request

## Branch Naming

Use prefixes to signal intent:

- `add/chain-{slug}` — New chain profile
- `add/concept-{slug}` — New concept page
- `fix/{description}` — Bug fix or correction
- `improve/{description}` — Design, performance, or UX improvement
- `docs/{description}` — Documentation changes

## Adding a Chain Profile

Chain profiles live in `site/src/content/chains/`. Each is an MDX file with 11 sections.

### 1. Create the file

```
site/src/content/chains/{slug}.mdx
```

Slug should be the chain's common name in lowercase, hyphenated (e.g., `ethereum.mdx`, `solana.mdx`).

### 2. Add frontmatter

Use Bitcoin as your reference (`site/src/content/chains/bitcoin.mdx`). Required fields:

```yaml
---
name: "Ethereum"
ticker: "ETH"
letter: "E"
status: "draft"
launched: 2015
consensus: "Proof of Stake"
category: "Smart Contract Platform"
consensusType: "PoS"
tagline: "One-sentence description"
---
```

Set `status: "draft"` — reviewers will flip to `"published"` after editorial review.

### 3. Write the 11 sections

Follow the template structure from Bitcoin. Every section is required:

1. Overview
2. Architecture
3. Consensus Mechanism
4. Ecosystem
5. Governance
6. Token Economics
7. History & Timeline
8. Technical Specifications
9. Developer Resources
10. Comparisons
11. Sources

### 4. Editorial standards for chain profiles

- Use the chain's canonical name, not its ticker (e.g., "Ethereum" not "ETH")
- Cite sources — link to official documentation, whitepapers, or research papers
- Do not include price data, market cap, or investment commentary
- If information comes from outside the MIT curriculum, flag it with an MDX comment: `{/* Beyond MIT source */}`
- Keep the tone neutral and educational — this is a reference wiki, not advocacy

## Adding a Concept Page

Concept pages live in `site/src/content/concepts/`. Each has 7 sections.

### 1. Create the file

```
site/src/content/concepts/{slug}.mdx
```

### 2. Add frontmatter

Use Proof of Work as your reference (`site/src/content/concepts/proof-of-work.mdx`). Required fields:

```yaml
---
title: "Your Concept Title"
definition: "One-sentence definition that appears in the pull-quote block."
category: "Consensus" | "Cryptography" | "Economics" | "Architecture" | "Security" | "Scaling" | "Applications"
status: "draft"
usedBy: ["Bitcoin", "Litecoin"]
relatedConcepts: ["proof-of-stake", "mining-economics"]
---
```

### 3. Write the 7 sections

1. **Why It Matters** — Why should someone care about this concept?
2. **How It Works: Beginner** — Plain language, no jargon
3. **How It Works: Intermediate** — Technical but accessible
4. **How It Works: Builder** — Implementation details, code-level
5. **Examples** — Real chains or protocols that use this concept
6. **Tradeoffs** — Advantages and disadvantages
7. **Related Concepts** — Cross-links to other concept pages

### 4. Editorial standards for concept pages

- The definition field should be a single sentence that a nontechnical reader can understand
- Beginner sections must avoid jargon entirely — if you use a technical term, link to its concept page
- Builder sections can include pseudocode or references to specific implementations
- Cross-link generously — every concept should link to at least 2-3 related concepts

## Fixing Errors

If you find incorrect information, outdated claims, or broken links:

1. Open an issue describing the error with a source that shows the correct information
2. Or submit a PR with the fix — include the source in your PR description

We take accuracy seriously. Every factual claim should be verifiable.

## Design and Code Changes

For changes to the Astro site (components, CSS, layouts, pages):

- Follow the existing design system in `site/src/styles/global.css`
- Use the L1 design tokens (CSS custom properties) — don't introduce new colors outside the B&W palette
- Typography: IBM Plex Mono for headings/labels, Inter for body text
- Test your changes at desktop and mobile widths

## Code Style

- Astro components: `.astro` files with Astro template syntax
- Content: MDX with YAML frontmatter
- CSS: Tailwind utilities + custom component classes in `global.css`
- No client-side JavaScript unless absolutely necessary (Astro's zero-JS-by-default philosophy)

## Pull Request Process

1. **Title**: Use a clear, descriptive title (e.g., "Add Ethereum chain profile" not "Update")
2. **Description**: Explain what you changed and why. Link to relevant issues.
3. **Sources**: If you're adding content, include your sources
4. **Status**: All new content should be `status: "draft"` — maintainers review before publishing

PRs are reviewed for accuracy, consistency with the editorial style, and technical correctness. We aim to review within a few days.

## Content License

By contributing content (MDX files), you agree to license your contributions under [CC-BY-SA 4.0](LICENSE-CONTENT). Code contributions are licensed under [MIT](LICENSE).

## Questions?

Open an issue or start a discussion. We're building this together.
