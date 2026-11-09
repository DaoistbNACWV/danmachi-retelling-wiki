# Arc 1–8 Migration Status

Last audited: 2026-11-09
Repository: https://github.com/aaronjamesgarcia681-sys/DANMACHI-RETELLING-OF-THE-LEGEND-
Branch: main

## Purpose

Track the transfer of the actual *DanMachi: Retelling of the Legend* source material into this repository. This file distinguishes confirmed source material from content that has not yet been copied. A Project URL is not treated as a manuscript export.

## Confirmed manuscript sources in ChatGPT Library

Two substantial PDF manuscripts were found in the Library:

1. `Chapter One- That Changes Everything (1).pdf` — 681 pages; the cross-reference identifies it as containing Chapters 1–40.
2. `Forty one  (1).pdf` — 586 pages; the cross-reference identifies it as containing Chapters 41–61.

The corresponding cross-reference has been copied into `06_MANUSCRIPT_CROSS_REFERENCE.md`.

**Important:** These PDFs have not yet been committed to this GitHub repository. Their extracted text includes chat/revision artifacts, assistant status messages, and promotional footers. Preserve the original PDFs as source archives; clean narrative chapter files should be produced only after chapter-by-chapter validation. Do not silently delete or rewrite author-approved prose during cleanup.

## Arc-by-arc status

| Arc | Project title | Current evidence | Migration status |
|---|---|---|---|
| 1 | New Beginning | Chapters 1–10 cover the opening foundation; exact Arc 1/2 split is not established by the cross-reference. | Source found; arc boundary and chapter files not yet migrated. |
| 2 | The Preparation | Arc 2 portable continuity handoff exists in the Library; opening manuscript material overlaps the Chapters 1–10 range. | Handoff found; exact chapter boundary and prose migration pending. |
| 3 | The Labyrinth City | Chapters 11–16 are explicitly identified as the Orario arrival / Labyrinth City sequence. | Chapter range identified; prose not yet migrated. |
| 4 | New Home | Later development begins in Chapters 17–40; exact Arc 4 boundary is not documented in the current cross-reference. | Source range exists; boundary needs verification. |
| 5 | Spectre | Arc 5 title is confirmed in a later handoff, but its detailed save was not found in the current source set. | Continuity gap; do not reconstruct from guesswork. |
| 6 | Point of Divergence | Chapter 39 is explicitly marked with the Arc 6 label in the first PDF; Chapter 40 follows as “The Camp.” | Partial boundary evidence; verify transition and full arc contents. |
| 7 | Rolling the Dice | Chapters 41–61 are in the second PDF; Chapter 46 “Arson” is the documented Arc 7 checkpoint. | Manuscript source found; chapter files not yet migrated. |
| 8 | Crescendo | Existing repository includes Chapters 65, 66, 67, 68, 69, and 71 in `Arc 8 - Crescendo/`; Chapter 70 is in `Manuscript/`. | Partially present; reconcile Chapter 70 and confirm missing chapters/gaps. |

## Known editorial issues to preserve during migration

- Chapter Thirty-Two was not found in the extracted heading structure.
- Two different chapters are numbered Thirty-Three: “Vacation” and “Limits — I.” Do not auto-renumber.
- Chapter Fifty-Nine uses a different heading format.
- Chapters 1–61 are represented by the two Library PDFs, but their existence does not prove every arc-specific finalized version or every later chapter is present.
- Arc 8 currently has a Chapter 71 duplicate in `Manuscript/` and `Arc 8 - Crescendo/`; their Git blob SHA was identical at the time of audit.
- Chapter 70 “New Girlfriend” currently resides in `Manuscript/`, consistent with the standing rule that new chapters from Chapter 71 onward are saved in `Manuscript/` (Chapter 70 is an existing exception).

## Safe migration procedure

1. Preserve the two original PDFs unchanged as source archives.
2. Extract chapter text individually and separate story prose from chat/revision artifacts.
3. Compare each extracted chapter against its source PDF before marking it finalized.
4. Keep chapter titles and numbering as authored; flag conflicts instead of auto-correcting.
5. Place finalized chapters in their verified arc folder. Keep post-Arc-8/current chapters in `Manuscript/` as already established.
6. Update this file and the manuscript index after each verified batch.

## Not yet done

- The two PDF source archives have not been uploaded to this repository.
- Chapters 1–61 have not been split into individual Markdown files here.
- Arc 1/2, Arc 4/5, and some Arc 6/7 boundaries still need source verification.
- No missing chapter has been recreated from summaries or continuity notes.
