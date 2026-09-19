# Product Roadmap — Kalighat Reframe

Reference: `docs/ART_DIRECTION.md` for the full creative system this roadmap builds. This is a **gated** roadmap — several early steps are hard legal/safety gates, not optional polish, because the whole v2 concept depends on claims (public-domain characters, child-safe scent ink, a magnet that survives real use) that must be verified before any tooling spend.

See `docs/RESOURCES.md` for the external labs, marketplaces, and formatting platforms referenced by name in the phases below.

## Phase 0 — Legal & Safety Clearance (blocking, do first)

| Task | Why it's a gate |
|---|---|
| IP/trademark clearance search on Ghatotkach, Betaal, Tenali Raman, Bal Hanuman, and Pingalaka/Damanaka visual treatments | Confirm no specific illustrated edition, serial, or comic's *particular* costume/color design is close enough to trigger a trade-dress claim (see `ART_DIRECTION.md` §2 legal note). *Resolved:* an earlier "Mowgli & Bagheera" concept for `SCROLL_NARRATIVE.md` Panels 4/8 was blocked (Disney trade-dress exposure + not actually Indian-mythology sourced) and replaced with Pingalaka & Damanaka from the Panchatantra — this pairing is very low IP risk (2,000+ year old Sanskrit public-domain text) but still goes through this same sweep like the rest of the roster. |
| Child-product toxicity + allergen certification scoping for micro-encapsulated scent ink | This is the single highest-risk material in the product — scent capsules touching toddler skin/mouth need certification before any other scent-ink work proceeds |
| Deboss paper vendor feasibility call (400gsm cotton pulp, deep blind deboss, fold durability) | Confirms the Topographic Channel concept is manufacturable at target unit cost before art is locked to it |

### Draft Test Protocol Targets (design hypotheses — confirm with lab before treating as spec)

These are engineering/test targets to hand Intertek and SGS (`docs/RESOURCES.md` §2) as a starting brief, **not confirmed certifications** — the specific section numbers and thresholds below need verification against the current standard text before anything is designed to them as a fixed spec:

**Mechanical (magnetic hinge, per Phase 1's cover prototype):**
- Target test protocol: toy magnet safety requirements under **ASTM F963** and, in the US, **16 CFR 1240** (the CPSC's dedicated magnet safety rule) — confirm with the lab which one actually governs an embedded, non-removable hinge magnet vs. a loose/accessible magnet, since the applicable requirement differs a lot between those two cases.
- A specific retention-force number (e.g., a "50 N" pull-force floor) should come *from* that lab consultation, not be set in advance — treat any number arriving without a cited clause as unverified. Same goes for a specific clause citation like "§4.38" — confirm it against the current standard text rather than treating a quoted section number as settled.
- **Selected engineering path — "permanent structural inaccessibility"**: the magnet is never a loose or extractable part, full stop, rather than relying on a pull-force floor to keep an accessible magnet in place. Candidate construction to bring to the lab as a starting hypothesis: magnets flush-seated into routed pockets in the greyboard cover plate, sealed with epoxy, then capped with a rigid shield layer laminated over the pocket and wrapped under the cover's fabric/canvas finish — i.e., a child would have to destroy the cover structure itself to reach a magnet. A front-cover-North/back-cover-South facing orientation is the correct polarity logic for a closure that attracts when folded shut. Exact material grades, magnet count/size, and pocket dimensions are open engineering choices for the Phase 1 prototype, not settled by this roadmap.
- Pinch-hazard mitigation at the spine hinge (a "scissor" fold point is a real toddler-finger risk) needs its own mechanical hazard review — likely under **EN71-1** (mechanical/physical toy safety, EU) alongside ASTM F963's equivalent mechanical hazard sections, not just the magnet-specific clauses. A flexible fabric expansion gap at the hinge is a reasonable starting mitigation to prototype and test, not a pre-verified fix.

**Chemical (scent ink, per Phase 1's scent-ink trial):**
- **ASTM D-4236** governs *labeling* of chronic-hazard art materials — it is not itself a child-safety pass/fail certification. The actual toy-safety chemical clearance to pursue is **ASTM F963** §4.3 (heavy elements / toxicological requirements) in the US and **EN71-3** (migration of certain elements) plus **EN71-9** (organic chemical compounds requirements) in the EU.
- "Phthalate-free, organic botanical isolates" is a formulation goal, not a certification — phthalate-free must still be verified analytically, and "organic" and "non-toxic" both need the lab's own test results before either claim goes on packaging.

## Phase 1 — Material R&D Prototypes

1. **Deboss trial:** run a test sheet of 400gsm cotton pulp through blind debossing at 2–3 candidate channel depths; test with an actual toddler hand/crayon for guidance efficacy and check for paper cracking at accordion fold lines. Starting dieline hypothesis to bring to the vendor: a 10-panel accordion, 210mm × 280mm closed, ~2107mm open span (8 interior panels at 210mm + 2 terminal panels at 213.5mm — the arithmetic checks out, but the paper vendor still needs to confirm a ±0.15mm tolerance and a deep U-profile calligraphy channel are both achievable on cotton pulp without cracking, especially on any panel where a channel sits close to a fold line).
2. **Scent-ink trial:** source 2–3 microencapsulation vendors; test friction-release reliability and scent longevity against realistic shelf/storage time (a capsule that's inert by the time the book reaches a shelf is a dead feature).
3. **Cover mechanism prototype:** build a rough Swiss-bound + magnetic fold-back cover mock-up; cycle-test the hinge (target: 500+ open/close cycles per §7 of the creative bible) and confirm the frame window dimension can be locked before scroll panel sizing is finalized.

## Phase 2 — Character & Scroll Art Production

1. Kalighat brush style guide: lock the 5-color palette, stroke-taper rules, and anatomy conventions into a reference sheet before any character art begins.
2. One full accordion-scroll per character, in the order Ghatotkach → Betaal → Tenali Raman → Bal Hanuman. A full 10-panel draft layout for the Ghatotkach scroll (including the now-resolved Pingalaka/Damanaka panels) is mapped in `docs/SCROLL_NARRATIVE.md`, pending the general Phase 0 IP sweep above and a cultural-consultant pass on that file's heritage-context copy.
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
