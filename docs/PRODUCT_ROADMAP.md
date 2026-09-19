# Product Roadmap — Kalighat Reframe

Reference: `docs/ART_DIRECTION.md` for the full creative system this roadmap builds. This is a **gated** roadmap — several early steps are hard legal/safety gates, not optional polish, because the whole v2 concept depends on claims (public-domain characters, child-safe scent ink, a magnet that survives real use) that must be verified before any tooling spend.

See `docs/RESOURCES.md` for the external labs, marketplaces, and formatting platforms referenced by name in the phases below.

## Phase 0 — Legal & Safety Clearance (blocking, do first)

| Task | Why it's a gate |
|---|---|
| IP/trademark clearance search on Ghatotkach, Betaal, Tenali Raman, Bal Hanuman visual treatments | Confirm no specific illustrated edition, serial, or comic's *particular* costume/color design is close enough to trigger a trade-dress claim (see `ART_DIRECTION.md` §2 legal note) |
| Child-product toxicity + allergen certification scoping for micro-encapsulated scent ink | This is the single highest-risk material in the product — scent capsules touching toddler skin/mouth need certification before any other scent-ink work proceeds |
| Deboss paper vendor feasibility call (400gsm cotton pulp, deep blind deboss, fold durability) | Confirms the Topographic Channel concept is manufacturable at target unit cost before art is locked to it |

### Draft Test Protocol Targets (design hypotheses — confirm with lab before treating as spec)

These are engineering/test targets to hand Intertek and SGS (`docs/RESOURCES.md` §2) as a starting brief, **not confirmed certifications** — the specific section numbers and thresholds below need verification against the current standard text before anything is designed to them as a fixed spec:

**Mechanical (magnetic hinge, per Phase 1's cover prototype):**
- Target test protocol: toy magnet safety requirements under **ASTM F963** and, in the US, **16 CFR 1240** (the CPSC's dedicated magnet safety rule) — confirm with the lab which one actually governs an embedded, non-removable hinge magnet vs. a loose/accessible magnet, since the applicable requirement differs a lot between those two cases.
- A specific retention-force number (e.g., a "50 N" pull-force floor) should come *from* that lab consultation, not be set in advance — treat any number arriving without a cited clause as unverified.
- Candidate engineering approach for the hinge: encapsulated high-strength magnets shielded within the greyboard cover structure, so the magnet is never an accessible/loose part a child could extract — this is the actual safety-relevant property to test for, more than raw pull force alone.
- Pinch-hazard mitigation at the spine hinge (a "scissor" fold point is a real toddler-finger risk) needs its own mechanical hazard review — likely under **EN71-1** (mechanical/physical toy safety, EU) alongside ASTM F963's equivalent mechanical hazard sections, not just the magnet-specific clauses.

**Chemical (scent ink, per Phase 1's scent-ink trial):**
- **ASTM D-4236** governs *labeling* of chronic-hazard art materials — it is not itself a child-safety pass/fail certification. The actual toy-safety chemical clearance to pursue is **ASTM F963** §4.3 (heavy elements / toxicological requirements) in the US and **EN71-3** (migration of certain elements) plus **EN71-9** (organic chemical compounds requirements) in the EU.
- "Phthalate-free, organic botanical isolates" is a formulation goal, not a certification — phthalate-free must still be verified analytically, and "organic" and "non-toxic" both need the lab's own test results before either claim goes on packaging.

## Phase 1 — Material R&D Prototypes

1. **Deboss trial:** run a test sheet of 400gsm cotton pulp through blind debossing at 2–3 candidate channel depths; test with an actual toddler hand/crayon for guidance efficacy and check for paper cracking at accordion fold lines.
2. **Scent-ink trial:** source 2–3 microencapsulation vendors; test friction-release reliability and scent longevity against realistic shelf/storage time (a capsule that's inert by the time the book reaches a shelf is a dead feature).
3. **Cover mechanism prototype:** build a rough Swiss-bound + magnetic fold-back cover mock-up; cycle-test the hinge (target: 500+ open/close cycles per §7 of the creative bible) and confirm the frame window dimension can be locked before scroll panel sizing is finalized.

## Phase 2 — Character & Scroll Art Production

1. Kalighat brush style guide: lock the 5-color palette, stroke-taper rules, and anatomy conventions into a reference sheet before any character art begins.
2. One full accordion-scroll panel per character (Ghatotkach → Betaal → Tenali Raman → Bal Hanuman, in that order — Ghatotkach first as the flagship "giant scale" panel).
3. Debossed Topographic Channel overlay applied to the first completed panel as a combined art + tactile proof-of-concept.

## Phase 3 — Illustration Asset Library

1. Build out the full Midjourney v6 concept library (`docs/MIDJOURNEY_PROMPTS.md`) — all four variant types per character.
2. Hand off locked concepts to the illustrator for final print-ready Kalighat-brush redraws (Midjourney output is reference only, never final print art).

## Phase 4 — Integrated Physical Prototype

1. Combine one fully finished scroll panel + deboss + scent ink + magnetic shadow-box cover into a single hand-built sample.
2. Parent-and-toddler test the actual **Post-Dinner Living Frame ritual** end-to-end (§5 of the creative bible) — this is the point where the emotional hook gets validated or falsified with a real family, not a moodboard.
3. Confirm the perforated panel seats correctly in the frame window on the first try — this dimensional lock is the most fragile part of the whole product and must be verified before any print run commitment.

## Phase 5 — Commercial Launch Prep

1. Finalize tiering and unit economics per `docs/COMMERCIAL_STRATEGY.md`.
2. Build retail/DTC positioning copy for diaspora parent audience, anchored on the ritual (not the craft/coloring-book framing).
3. Plan a limited first print run sized to the Heirloom tier before scaling down-tier production.
