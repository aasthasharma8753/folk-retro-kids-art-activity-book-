# Midjourney v6 Prompt Library — Kalighat Reframe

Reference: `docs/ART_DIRECTION.md` §1, §2, §8 for the full system this library implements. All prompts assume Midjourney v6, `--style raw`, and the 21:9 accordion-scroll aspect ratio unless noted.

## Master Scaffold

```
[CHARACTER], Kalighat Pat folk painting style, thick tapered calligraphic brush
strokes, single-sweep linework, brutal simplified anatomy, exaggerated eyes,
flat 5-color palette (lamp black, vermillion, indigo, ochre, white ground),
continuous Patachitra scroll composition, [SCENE-SPECIFIC MOTIFS], no
crosshatching, no gradients, no vector uniformity, hand-brushed folk art
texture, toddler-safe large fillable shapes, high-contrast, white background,
--style raw --v 6 --ar 21:9
```

**Negative-space discipline:** always append `no photorealism, no 3D render, no digital gradient shading, no fine detail crosshatching` — Midjourney v6 defaults toward rendered lighting that fights the flat-wash Kalighat requirement.

---

## Ghatotkach (Vetiver / forest-scale world)

```
Ghatotkach the giant, Kalighat Pat folk painting style, thick tapered
calligraphic brush strokes, brutal simplified anatomy, exaggerated eyes,
towering rakshasa figure breaking the horizon line of a continuous scroll,
rakshasa-forest silhouettes, thunderous vermillion and lamp-black washes,
flat 5-color palette, continuous Patachitra scroll composition, no
crosshatching, no gradients, toddler-safe large fillable shapes,
high-contrast, white background,
--style raw --v 6 --ar 21:9
```

Variants to generate: (1) full-figure scroll-breaking pose, (2) forest silhouette establishing panel, (3) close-up face/eyes panel for a "coloring the giant's expression" activity page, (4) hand-scale comparison panel (Ghatotkach's hand vs. a small folk village) for a size/scale learning moment.

## Betaal (Sandalwood / nighttime world)

```
Betaal the folklore spirit, Kalighat Pat folk painting style, thick tapered
calligraphic brush strokes, brutal simplified anatomy, exaggerated eyes,
perched moonlit indigo scroll panel, banyan tree silhouette, riddle-scroll
framing device with scalloped border, flat 5-color palette, continuous
Patachitra scroll composition, no crosshatching, no gradients, toddler-safe
large fillable shapes, high-contrast, white background,
--style raw --v 6 --ar 21:9
```

Variants: (1) banyan-tree establishing panel, (2) Betaal silhouette against moon, (3) riddle-scroll framing border panel (usable as a standalone calligraphy-strip motif), (4) nighttime village panel for a "count the stars" activity.

## Tenali Raman (Marigold / marketplace world)

```
Tenali Raman the wit, Kalighat Pat folk painting style, thick tapered
calligraphic brush strokes, brutal simplified anatomy, exaggerated eyes,
village marketplace scroll vignette, courtly ochre and vermillion palette,
wit-driven visual gag composition, flat 5-color palette, continuous
Patachitra scroll composition, no crosshatching, no gradients, toddler-safe
large fillable shapes, high-contrast, white background,
--style raw --v 6 --ar 21:9
```

Variants: (1) marketplace establishing panel, (2) Tenali Raman mid-gesture "clever solution" pose, (3) court-scene panel with king figure (public-domain folklore framing, not a specific TV likeness), (4) marigold-garland border motif panel for calligraphy strip.

## Bal Hanuman (reserve scent / sunrise world)

```
Bal Hanuman the young devotee, Kalighat Pat folk painting style, thick
tapered calligraphic brush strokes, brutal simplified anatomy, exaggerated
eyes, flying pose carrying a mountain, huge simple silhouette, sunrise
vermillion wash, flat 5-color palette, continuous Patachitra scroll
composition, no crosshatching, no gradients, toddler-safe large fillable
shapes, high-contrast, white background,
--style raw --v 6 --ar 21:9
```

Variants: (1) flying/mountain-carrying full-scroll panel, (2) close-up devotional pose, (3) sunrise establishing panel, (4) mountain-silhouette-only panel for a large, easy first-coloring page.

---

## Cover / Shadow-Box Frame Concept Prompts

```
closed hardback book cover, Kalighat Pat folk painting style border motif,
Swiss-bound exposed spine, magnetic hinge detail, matte cotton-paper texture,
flat 5-color palette, product photography angle, white background,
--style raw --v 6 --ar 4:5
```

```
hardback book cover folded backward into a freestanding tabletop shadow-box
frame, one Kalighat Pat folk art panel displayed inside the frame window,
coffee table product photography, warm evening lighting, magnetic hinge
visible, --style raw --v 6 --ar 4:5
```

## Usage Notes

- Generate every character in all four listed variants before moving to scene-combination panels (a full continuous scroll needs establishing → action → close-up → border-motif coverage per character).
- Once a character's brush style is locked from Midjourney exploration, hand off to the illustrator for final vector/print-ready redraw — Midjourney output is concept reference only, not final print art (per `docs/ART_DIRECTION.md` §1's requirement for genuine Kalighat brush training).
- Do not prompt for any specific Doordarshan-era serial's costume/makeup design by name — keep prompts anchored to the mythological figure and the Kalighat art tradition only, per the IP note in `docs/ART_DIRECTION.md` §2.
