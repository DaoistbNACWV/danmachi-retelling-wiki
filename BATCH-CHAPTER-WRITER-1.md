# BATCH-CHAPTER-WRITER
Version: 1.0
Status: ACTIVE WORKFLOW TOOL
Project: DanMachi: Retelling of the Legend

## Purpose
Draft several consecutive, independently publishable chapters as one continuous narrative batch. Replace the old practice of dividing one chapter into “Part 1 / Part 2 / Part 3” with properly numbered chapters, each having its own narrative purpose, title, and ending.

This is a reusable writing command/instruction module, not an autonomous program.

## Activation
Use:

`BATCH-CHAPTER-WRITER — Create Chapters [START]–[END]`

Then provide the batch premise, chapter-specific details, POV requirements, scene instructions, continuity constraints, and any required ending or transition.

Example:

`BATCH-CHAPTER-WRITER — Create Chapters 76–79`

Follow with the overall narrative direction and the details for Chapters 76, 77, 78, and 79.

The command may also be invoked through `DANMACHI-MASTER-COMMAND` by explicitly requesting the batch-chapter workflow.

## Core output standard
- Target **900–1,200 words per chapter**.
- Treat the range as a target, not a reason to damage a scene. A chapter may exceed it when the narrative genuinely requires more room; do not pad a short chapter merely to reach 900 words.
- Give every chapter its own consecutive chapter number and individual title.
- Never label these chapters as parts of a larger chapter.
- Do not reset numbering between batches. Continue from the supplied manuscript/project checkpoint.
- Present each chapter separately and clearly, with its own heading.

## Batch planning
Before drafting, organize the requested range into a coherent sequence:
1. Identify the batch's central narrative movement and intended outcome.
2. Assign each chapter a distinct dramatic function.
3. Allocate POV, scenes, character interactions, revelations, conflicts, and transitions according to the user's instructions.
4. Check that chapter boundaries fall at natural scene changes, emotional turns, revelations, decisions, or other meaningful beats.
5. Ensure the batch has a beginning, progression, and satisfying local payoff or forward-driving conclusion.

Do not force equal-sized chapters or divide the source material mechanically every 1,000 words. Chapter boundaries must serve the story.

## Chapter construction
Each chapter should:
- Have a clear purpose and meaningful change, development, discovery, decision, consequence, or emotional movement.
- Begin with enough orientation to make sense as an individual reading session without awkwardly repeating the previous chapter.
- Develop its assigned scenes with complete prose, purposeful dialogue, character reactions, and necessary interiority.
- End on an earned beat: a hook, revelation, decision, consequence, emotional resolution, or natural transition. Do not manufacture a cliffhanger for every chapter.
- Connect smoothly to the next chapter while remaining independently publishable.

## Drafting procedure
1. Consult the project's available reference hierarchy before writing:
   - Finalized manuscript (highest authority)
   - Story Bible and approved character/world references
   - Continuity ledger, arc checkpoints, and approved outlines
   - Explicitly approved decisions in conversation
   - Older drafts, only when not contradicted by higher-authority material
2. Respect content labels such as CANON, PROVISIONAL, DRAFT, and REJECTED. Never silently promote provisional or rejected material into established story facts.
3. Draft the chapters in numerical order. Maintain cause and effect across the entire batch.
4. Do not summarize a scene that deserves dramatization. Write the actual scene.
5. Preserve the user's requested POV, characterization, lore, tone, and plot trajectory.
6. Do not invent missing canon or claim to have checked files/repository material that is not accessible.
7. After drafting, review the full batch as one continuous narrative and then review each chapter as an individual reading unit.

## Quality and continuity checks
Check:
- Chapter numbering, titles, and word-count targets
- POV consistency and clean transitions
- Chronology, ages, locations, whereabouts, and character knowledge
- Relationships, motivations, injuries, and current status
- Falna levels, stats, skills, spells, techniques, and established limitations
- Magic rules, world lore, factions, Familia relationships, and causality
- Repeated exposition, redundant dialogue, accidental contradictions, and dropped instructions
- Whether each chapter has a distinct purpose and a satisfying ending
- Whether the batch's final chapter hands off naturally to the next planned narrative movement

Preserve intentional imperfections, minor mistakes, and deliberate inconsistencies when the user has established them as intentional. Do not automatically “correct” them as errors.

## Relationship to existing writing commands
- **NARRATIVE-EXPAND remains active.** Prioritize completeness, development, continuity, and literary quality over word count. Expand only where it adds value; never use filler.
- Existing dialogue, pacing, POV, continuity, lore, and editorial instructions remain in force.
- This tool changes the chapter packaging and drafting workflow, not the novel's voice, substance, canon, or quality standards.
- If instructions conflict, the user's latest explicit direction takes priority, followed by the project's established authority hierarchy.

## Expected response format
Start with a compact batch map, unless the user asks for direct drafting only:

| Chapter | Working title | Main purpose | POV | Target |
|---|---|---|---|---|
| [number] | [title] | [purpose] | [POV] | 900–1,200 words |

Then provide the complete chapters in order, each with its own heading. Do not replace requested prose with summaries, outlines, or placeholders. If the requested batch is too large for one response, continue in clearly identified consecutive chapters without renaming them as parts.

## Invocation examples
- `BATCH-CHAPTER-WRITER — Create Chapters 76–79`
- `DANMACHI-MASTER-COMMAND: BATCH-CHAPTER-WRITER — Create Chapters 80–83 using the approved Arc 8 outline`
- `BATCH-CHAPTER-WRITER — Reorganize this existing 4,000-word draft into four consecutive 900–1,200-word chapters without losing narrative substance`

For reorganization, split at natural narrative boundaries, preserve all meaningful material, and flag any unavoidable word-count exception rather than cutting essential content.
