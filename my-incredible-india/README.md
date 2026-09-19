# My Incredible India — A Cultural Adventure Activity Book

An illustrated, print-ready activity ebook for children ages 6–10, exploring India
through geography, wildlife, food, art, architecture, clothing, celebrations,
storytelling, cinema, notable people and history. Built as plain, editable
HTML/CSS so every word, layout and colour can be changed without special
software — and exported to a polished PDF with one click of your browser's
print dialog.

## 1. Project structure

```
my-incredible-india/
├── index.html            All 46 pages of the book, in reading order
├── README.md             This file
├── css/
│   ├── reset.css         Minimal, print-safe CSS reset
│   ├── tokens.css        Every design decision as a CSS variable
│   ├── typography.css    Google Fonts import + type scale + text rules
│   ├── components.css    Reusable components (cards, badges, checklists…)
│   ├── pages.css         Page shell, 12-column grid, the 10 page templates
│   └── print.css         @page rules + exact page breaks for PDF export
├── js/
│   └── main.js           Screen-only conveniences (print button, mobile fit).
│                         Never used for layout — CSS does all visual work.
└── assets/
    ├── icons/sprite.svg  Source library of every motif/icon/badge/mascot
    │                     (the same symbols are inlined at the top of
    │                     index.html so <use> resolves reliably when the
    │                     file is opened straight from disk)
    ├── illustrations/    Drop finished illustration files here
    ├── images/           Drop photos/scans here
    └── patterns/         Drop seamless background/border patterns here
```

Every page in `index.html` is a single `<section class="page">`. Nothing is
flattened to an image — all text is real, selectable HTML, styled entirely
by the CSS files above.

## 2. How the design system works

All colours, type sizes, spacing, radii and page geometry live in
**`css/tokens.css`** as CSS custom properties. Nothing else in the project
hard-codes a colour or a pixel value — change a token once and it updates
everywhere.

- **Colour** → edit the hex values under `/* COLOUR PALETTE */` in `tokens.css`.
- **Type sizes** → edit `--fs-*` variables in `tokens.css`.
- **Spacing/radii** → edit `--space-*` / `--radius-*` variables.
- **Chapter colour-coding** → each chapter has a `--ch-0N` token; chapter
  openers and page headers reference `var(--ch-0N)` via an inline
  `style="--chapter-color:var(--ch-0N)"` on the page's `<section>`.

Reusable UI pieces (fact boxes, question boxes, recipe cards, badges,
checklists, timelines, etc.) are documented and styled in
**`css/components.css`**. Page-level layout — the shared page shell, the
12-column grid, and the ten page templates (hero, split, full-activity,
map, recipe, timeline, scavenger hunt, journal, design-challenge, chapter
opener) — lives in **`css/pages.css`**.

## 3. Fonts

Fonts load from Google Fonts via `@import` at the top of `css/typography.css`:

- **Bricolage Grotesque** (display/headings) — falls back to **Baloo 2**, then system sans-serif
- **Lora** (story/editorial serif text)
- **Nunito Sans** (body copy, instructions, captions)
- **Kalam** (handwritten accents — "Did You Know?", parent notes, journal prompts)

No installation is required to preview in a browser (it fetches the fonts
over the internet). For fully offline use or professional print production,
download the four families from [Google Fonts](https://fonts.google.com/),
place the font files in a new `assets/fonts/` folder, and replace the
`@import` line in `typography.css` with local `@font-face` declarations
pointing at those files.

## 4. Page size — and converting to A4

The book is built at **US Letter (8.5in × 11in)**, portrait, with a
0.6in preferred content margin (never closer than 0.5in to any edge).

To switch the whole book to A4:

1. In `css/tokens.css`, change:
   ```css
   --page-width: 8.5in;
   --page-height: 11in;
   ```
   to:
   ```css
   --page-width: 210mm;
   --page-height: 297mm;
   ```
2. In `css/print.css`, change `@page { size: letter portrait; }` to
   `@page { size: A4 portrait; }`.

Because every page component is built from the token-driven grid and
flexible layouts (not fixed pixel positions), content reflows correctly at
the new size without further edits.

## 5. Exporting to PDF with Chrome

1. Open `index.html` directly in Google Chrome (double-click the file, or
   `File → Open File…`).
2. Press **Ctrl/Cmd + P** to open the print dialog (or click the
   **"Print / Save as PDF"** button in the top-right corner of the screen
   preview — it calls `window.print()`).
3. Set **Destination** to "Save as PDF".
4. Set **Layout** to Portrait, **Paper size** to Letter (or A4, if you
   converted the tokens above), and **Margins** to "None".
5. **Turn on "Background graphics"** — this is essential, or the cream
   backgrounds, cards and colours will print white. `print.css` already
   sets `print-color-adjust: exact` to help Chrome keep colours accurate.
6. Save. Each `.page` section becomes exactly one PDF page
   (`break-after: page` in `print.css` forces this), so the exported PDF
   will have one page per book page with no content split across a break.

## 6. Printing with background graphics (recap)

Background colours and card fills only appear in print/PDF if "Background
graphics" (sometimes called "Print backgrounds") is checked in your
browser's print dialog. This is the single most common reason an exported
PDF looks washed out — always double-check that box.

## 7. Replacing content

- **Text**: everything is plain HTML inside each `<section class="page">`.
  Search `index.html` for the heading text you want to change and edit it
  directly — no build step, no compiler.
- **Illustrations**: every illustration is currently a labelled
  `<div class="illustration-placeholder">` containing a full art-direction
  prompt (subject, setting, style, colour, lighting, age-appropriateness,
  negative instructions) written in the SUBJECT/STYLE/COLOUR/NEGATIVE
  format used throughout the book. To drop in finished artwork, replace the
  placeholder `<div>` with an `<img src="assets/illustrations/your-file.png"
  alt="…">` (or set the placeholder's `div` as a background via CSS if you
  prefer to keep the rounded corners/shadow treatment).
- **Icons & motifs**: all recurring icons (lotus, sun, peacock feather,
  mascots, badges, activity icons) are defined once as `<symbol>` elements
  in the SVG block at the top of `index.html` (mirrored at
  `assets/icons/sprite.svg` for reference/export). Reuse any of them
  anywhere with:
  ```html
  <svg class="motif"><use href="#motif-lotus"/></svg>
  ```
  Recolour a motif by setting `color` via CSS (`currentColor` is used
  throughout) — e.g. `style="color:var(--terracotta)"`.

## 8. Adding additional pages

1. Copy an existing `<section class="page …">…</section>" block that uses
   the template closest to what you need (see the ten templates in
   `pages.css`, classed `.tpl-hero`, `.tpl-split`, `.tpl-full`, `.tpl-map`,
   `.tpl-recipe`, `.tpl-timeline`, `.tpl-hunt`, `.tpl-journal`,
   `.tpl-design`, and `.chapter-opener`).
2. Paste it where it belongs in reading order inside `<main class="book">`.
3. Update the `<span class="page-number">` in its footer, and renumber any
   following pages plus the Table of Contents page references.

## 9. Accessibility & content notes

- Body text is always dark charcoal (`--charcoal`) on light backgrounds —
  never light text on light backgrounds — to keep contrast strong for
  early readers.
- Colour is never the only signal: checklists use boxes and labels
  together, difficulty ratings pair icons with a text label ("Easy",
  "Medium", "Challenge").
- The history chapter (Chapter 12) discusses colonial rule in India in
  plain, age-appropriate, non-graphic language, and the "stories" chapter
  (Chapter 10) distinguishes religious tradition, mythology, folklore,
  fables and history rather than presenting sacred figures as cartoon
  mascots.
- All characters (the two child explorers and the parakeet) and all
  artwork prompts are original creations — nothing in this project
  reproduces copyrighted characters, franchises, or real people's
  likenesses, so the finished, illustrated book is intended to be
  commercially usable once the placeholder art is replaced with final
  illustrations.

## 10. Quick local preview

No build tools are required. Either:

- Double-click `index.html`, or
- Serve the folder locally (recommended, avoids any browser file:// quirks):
  ```bash
  cd my-incredible-india
  python3 -m http.server 8000
  # then open http://localhost:8000 in your browser
  ```
