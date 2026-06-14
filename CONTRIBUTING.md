# Contributing to L1 Library

Thank you for helping build a credible, neutral reference for how blockchains actually work. This guide covers how to contribute chain profiles, concept pages, and fixes — and, just as importantly, the editorial standards we hold every contribution to.

L1 Library is an encyclopedia, not a marketing site. The thing that makes it worth reading — and worth linking to — is that every page is factual, structured, sourced, and free of hype. Please read the rules below before you start; PRs that ignore them will be sent back for revision.

## Quick Start

1. Fork the repo
2. Create a branch: `git checkout -b add/chain-solana` (see Branch Naming)
3. Copy the template at [`templates/chain-profile-template.mdx`](templates/chain-profile-template.mdx) into `site/src/content/chains/<slug>.mdx` and fill it in
4. Run the build locally (`cd site && npm install && npm run build`) — it must pass
5. Open a pull request (you cannot push to `main` directly; see Pull Request Process)

## Branch Naming

- `add/chain-{slug}` — New chain profile
- `add/concept-{slug}` — New concept page
- `fix/{description}` — Correction or bug fix
- `improve/{description}` — Design, performance, or UX improvement
- `docs/{description}` — Documentation changes

## Editorial Rules (read this first)

These apply to all content. They are the point of the project.

- **Neutral and encyclopedic.** Write like a reference entry, not an advocate. No hype words ("revolutionary," "game-changer," "the best"), no emoji, no exclamation marks.
- **No price or investment content.** No price predictions, price history, market commentary, "should you buy," or token-as-investment framing. Market-cap *rank* is allowed as a neutral stat; dollar prices are not.
- **No taking sides.** When comparing chains, describe trade-offs factually. Don't declare a winner. A profile should read the same whether or not you hold the token.
- **Cite primary sources.** Link to whitepapers, protocol specifications, and official documentation. Prefer primary sources over news articles or price sites.
- **Every claim is verifiable.** If you can't source it, don't state it. Flag genuinely uncertain or contested facts as such.
- **Distinguish shipped from proposed.** Be explicit about what is live on mainnet versus in testnet, audit, or governance. Date-stamp anything volatile.
- **Three depth levels.** The "How It Works" section must be written at three levels — Beginner (plain language, no jargon), Intermediate (technical but accessible), and Builder (implementation detail). A non-technical reader should follow the Beginner level completely.
- **Add a freshness note.** Volatile figures (market-cap rank, validator counts, supply, upgrade status) change. End each profile with a short freshness note and a "Last updated" line, and set `lastUpdated` in frontmatter.
- **Match the existing bar.** Use the published profiles (Bitcoin, Ethereum, Solana, Cardano, Avalanche, Zcash, Polkadot, Cosmos, Algorand) as your reference for depth, structure, and tone.

## MDX Rules (so the build doesn't break)

Content is MDX, which is Markdown plus JSX. Two characters will break the build if misused:

- **Never write a bare `<` before a number or space.** MDX reads `<` as the start of a JSX tag, so `<1 sec` fails the build. Write `under 1 sec` or `~1 sec` instead.
- **Curly braces `{ }` are JSX.** Only use them for section markers like `{/* Section 4 */}`. Don't put stray `{` or `}` in prose.
- **Internal links must resolve.** Use `/chains/<slug>` and `/concepts/<slug>` only for pages that exist. For a chain or concept that isn't on the site yet, use plain bold text (e.g., `**Monero**`), not a link.
- **Run the build before opening a PR.** `cd site && npm run build`. A single malformed MDX file fails the entire build.

## Adding a Chain Profile

Chain profiles live in `site/src/content/chains/`. Each is an MDX file with the 11 sections below. The slug is the chain's common name, lowercase and hyphenated (`ethereum.mdx`, `bitcoin-cash.mdx`).

### Frontmatter

The schema is defined in `site/src/content/config.ts` — match it exactly. Use the exact enum values shown (they are lowercase).

```yaml
---
name: "Solana"                              # canonical name, not the ticker
ticker: "SOL"
tagline: "One neutral sentence. No hype."
letter: "S"                                 # single character, for the A–Z directory
launched: "March 16, 2020"                  # string, human-readable
consensus: "Proof of History + Tower BFT (Proof of Stake)"
language: "Rust, C"                          # optional
tps: "~1,000–4,000"                          # optional
blockTime: "~400 ms"                         # optional
marketCapRank: "7"                           # optional, string
nativeToken: "SOL"
supply: "~600M+ circulating; no hard cap"    # optional
website: "https://solana.com"                # required, must be a valid URL
explorer: "https://explorer.solana.com"      # optional, valid URL
category: "layer-1"          # layer-1 | layer-2 | sidechain | rollup | appchain
consensusType: "pos"         # pow | pos | dpos | poa | dag | other
evmCompatible: false         # boolean
compareTo: ["ethereum", "avalanche"]         # slugs used in the Comparison table
relatedChains: ["bitcoin", "ethereum"]       # slugs used in Related Chains
lastUpdated: 2026-06-13      # date, unquoted YYYY-MM-DD
status: "draft"              # always "draft" on submission; a maintainer publishes
---
```

### The 11 sections

Use the exact section order and headings (the template has them scaffolded):

1. **Overview** — Three short paragraphs: what it is, its core design idea, and where it stands today.
2. **Key Stats** — Rendered automatically from frontmatter. Leave the `{/* Section 2 */}` marker; don't write a table here.
3. **How It Works** — Beginner / Intermediate / Builder (all three required).
4. **Consensus Mechanism** — How blocks are produced and finalized, with key parameters; link to the relevant concept page.
5. **Use Cases** — What people actually do with it.
6. **Ecosystem** — Wallets, infrastructure, notable apps/chains, organizations.
7. **History & Timeline** — Dated milestones.
8. **Comparison** — A table against two relevant peers.
9. **Related Chains** — Short, linked descriptions of neighbors.
10. **Learning Resources** — Whitepaper, docs, and cross-links to concept pages.
11. **Sources & Citations** — Numbered list, then the freshness note and "Last updated" line.

## Adding a Concept Page

Concept pages live in `site/src/content/concepts/`. Each has 7 sections. Match the schema in `site/src/content/config.ts`.

### Frontmatter

```yaml
---
title: "Proof of Work"
definition: "One-sentence definition that appears in the pull-quote block."
category: "consensus"   # consensus | cryptography | economics | governance |
                        # scaling | security | smart-contracts | data-structures | networking
usedBy: ["bitcoin"]                          # chain slugs
relatedConcepts: ["proof-of-stake", "mining-economics"]
alternativeTo: "proof-of-stake"              # optional
lastUpdated: 2026-06-13
status: "draft"
---
```

### The 7 sections

1. **Definition** — The pull-quote; one sentence a non-technical reader understands.
2. **Why It Matters** — Why anyone should care.
3. **How It Works** — Beginner / Intermediate / Builder.
4. **Examples** — Real chains or protocols that use it.
5. **Tradeoffs** — Advantages and disadvantages, fairly stated.
6. **Related Concepts** — Cross-link to at least 2–3 other concept pages.
7. **Sources** — Citations and the "Last updated" line.

Use `proof-of-work.mdx` as your reference.

## Fixing Errors

Accuracy is the product. If you find an incorrect or outdated claim or a broken link:

1. Open an issue using the **Correction / bug** template, with a source showing the correct information, or
2. Submit a PR with the fix and the source in the description.

## Design and Code Changes

For changes to the Astro site (components, CSS, layouts, pages):

- Follow the design system in `site/src/styles/global.css`; use the existing tokens and the black-and-white palette.
- Typography: IBM Plex Mono for headings/labels, Inter for body.
- Keep it zero-JS by default (Astro philosophy); test at desktop and mobile widths.

## Pull Request Process

`main` is protected — direct pushes are rejected. All changes go through a pull request.

1. Push your branch and open a PR (the PR template includes a checklist — complete it).
2. **Title:** clear and descriptive ("Add Solana chain profile," not "Update").
3. **Description:** what changed and why; link any related issue; list your sources.
4. **Status:** new content ships as `status: "draft"`. A maintainer reviews for accuracy, neutrality, and structure, then flips it to `"published"`.
5. **Build:** confirm `npm run build` passes locally before requesting review.

PRs are reviewed for accuracy, consistency with these editorial rules, and technical correctness. We aim to review within a few days.

## Content License

By contributing content (MDX files), you agree to license it under [CC-BY-SA 4.0](LICENSE-CONTENT). Code contributions are licensed under [MIT](LICENSE).

## Questions?

Open an issue or start a discussion. We're building this together — thank you for keeping it accurate and neutral.
