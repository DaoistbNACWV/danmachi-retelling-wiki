# DanMachi: Retelling of the Legend

This repository is the working source-control archive for the project.

## Project Wiki

The [Project Wiki](Wiki/README.md) is the navigable encyclopedia for characters, arcs, timeline checkpoints, abilities, worldbuilding, factions, and continuity standards. It is a derived reference layer; the manuscript and approved master continuity files remain authoritative.

## Repository guides

- `01_PROJECT_INSTRUCTIONS.md` — project operating rules.
- `02_MASTER_CONTINUITY.md` — supported continuity facts.
- `03_ARC_CHECKPOINTS.md` — arc handoffs and checkpoints.
- `04_CHARACTER_AND_WORLD_REFERENCE.md` — character and setting reference.
- `05_MANUSCRIPT_INDEX_AND_GAPS.md` — current manuscript inventory.
- `06_MANUSCRIPT_CROSS_REFERENCE.md` — cross-reference for Chapters 1–61.
- `ARC_1_TO_8_MIGRATION_STATUS.md` — migration ledger, known gaps, and next steps.
- `MASTER_WRITING_SYSTEM_Swiss_Knife_v1.0.md` — writing workflow.
- `BATCH-CHAPTER-WRITER-1.md` — optional multi-chapter workflow; 900–1,200 words per chapter, consecutive numbering, and natural narrative split points.
- `BATCH-CHAPTER-WRITER-1.md` — optional multi-chapter workflow; 900–1,200 words per chapter, consecutive numbering, and natural narrative split points.

## Source manuscripts committed

The original source PDFs are now stored at the repository root:

- `Chapter One- That Changes Everything (1).pdf` — 681 pages; Chapters 1–40.
- `Forty one .pdf` — 586 pages; Chapters 41–61.

These are preserved as source archives. They contain some chat/revision artifacts, so they are not yet clean, chapter-separated Markdown files. Consult the cross-reference and migration ledger before extracting, editing, or renumbering prose.

## Current manuscript layout

- `Arc 8 - Crescendo/` — contains the existing Arc 8 chapter files for Chapters 65–69 and the preserved historical Chapter 71 copy.
- `Manuscript/` — contains Chapter 070, the working Chapter 71 copy, and Chapters 072–078 plus working-draft files for Chapters 080–083 and a blank Chapter 084 placeholder. Chapters 072 “Purification,” 076 “Relief,” 077 “The Opposite of Despair,” and 080–083 are drafts; Chapter 078 “The Fool” is an author-accepted repository draft, not yet finalized/locked. Chapter 079 remains a gap. Keep Chapter 71 onward in `Manuscript/`; do not move or duplicate files.
- `Drafts/` — contains the revised Arc 1 Chapter 3 passage, explicitly marked as a draft and not finalized. It is separate from the working `Manuscript/` sequence.

- `Drafts/` — contains the revised Arc 1 Chapter 3 passage, explicitly marked as a draft and not finalized. It is separate from the working `Manuscript/` sequence.

- Chapters 1–61 are preserved in the two source PDFs, but have not yet been split into individual chapter files.
- Chapters 62–64 and other gaps require verification against the source material.

## Chapter storage rule

Keep current chapters from Chapter 71 onward in `Manuscript/`. Keep verified historical chapters in their respective arc folders. Do not overwrite source prose or silently resolve chapter-number conflicts.

## Public encyclopedia

- **Website:** https://daoistbnacwv.github.io/danmachi-retelling-wiki/ (GitHub Pages deployment verified successful on 2026-11-20; [workflow run](https://github.com/DaoistbNACWV/danmachi-retelling-wiki/actions/runs/44731180160)).
- **Repository wiki sources:** [Wiki/](Wiki/README.md). These Markdown pages are the source of truth for the public site's article content.
- **GitHub Wiki landing-page draft:** [Wiki/Home.md](Wiki/Home.md). The native GitHub Wiki is a separate feature and must be initialized once from the repository's Wiki tab before its pages can be mirrored there.
- **Website implementation and deployment instructions:** [docs/README.md](docs/README.md).
