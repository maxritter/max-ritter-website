# Design

The visual world of maxritter.net, derived from the shipped code in `src/index.css` and the page components. It replaces the earlier amber/cyan editorial look. The reference is the LinkedIn brand banner: a deep navy field, a single light line of blue, outlined pill chips, and a striped hexagon mark that runs from white to blue.

## Palette

Tokens live in `src/index.css` as HSL triplets and are consumed through Tailwind (`bg-primary`, `text-accent`, ...). Never write a color literal in a component.

| Token | Value | Role |
|---|---|---|
| `--background` | `218 70% 6%` (#050c1a) | Page ground, deep navy |
| `--foreground` | `214 40% 96%` | Ink, blue-tinted white |
| `--card` | `218 55% 9%` | Raised surface, chip fill at 70% |
| `--primary` | `212 100% 74%` (#7ab8ff) | The signal color: CTAs, active nav, hover, live tags |
| `--primary-foreground` | `220 70% 8%` | Navy text on primary fills (9:1) |
| `--primary-glow` | `205 100% 88%` | Ice: horizon core, CTA hover, gradient start |
| `--accent` | `214 95% 60%` (#388cfa) | Electric blue: chip outlines, company names, bullets, horizon ends (5.9:1 on ground) |
| `--muted-foreground` | `215 20% 68%` | Body copy (8.4:1) |
| `--faint` | `215 16% 56%` | Mono labels and metadata (5.7:1) |
| `--border` | `218 45% 17%` | Hairlines |

The ambient field is `body::before`: two fixed radial gradients, blue at top-left and bottom-right, so every page sits in the banner's light without any section painting its own background. Page wrappers therefore never set `bg-background`.

## Type

Switzer (300 to 700, self-hosted) for everything except labels and metadata, which use Geist Mono. Display headings: weight 500, tracking -0.034em, leading 1.03. Body: 15 to 18px, leading 1.6 to 1.7, measure 62 to 82ch. Mono labels: 10.5px uppercase, tracking 0.15em (`.caps`).

Headline accents (the trailing span of every h1) use `.ink-blue`: a gradient from `--primary-glow` to `--primary` clipped to the text. This is the banner's "Reality." treatment and the one place gradient text is allowed.

## Shape

`--radius` is 0.75rem. Buttons and status tags are full pills, the banner's chip. Containers (portrait, chips with wrapped text) use 12px. Hairlines are 1px `--border`.

## Components

- **Pill CTA**: `rounded-full bg-primary text-primary-foreground`, hover to `bg-primary-glow`. Heights 36px desktop, 44px touch.
- **Chip** (`.chip`): outlined pill, `border-accent/40` on `bg-card/70`, mono 12.5px, leading lucide icon in `text-accent`. Used for the Now strip on the home page. Hover lifts the border to `--primary`.
- **Tag** (`.tag`): small mono pill. `live` is filled primary, `beta` is outlined accent, `open` is outlined border.
- **Horizon** (`.horizon`): a 1px gradient line (accent, ice core, accent) with a blurred 3px copy beneath it. One per page at most. On the home page it separates the hero from the clients band.
- **Dash item** (`.dash-item`): 6px dash bullet in accent or primary.

## Motion

One authored entrance on the home page: staggered fade-up (18px, 0.5s ease-out) on hero, Now strip, clients and project rows. Route changes cross-fade. Hover moves are 150 to 300ms. All motion collapses under `prefers-reduced-motion`.

## Browser surfaces

`color-scheme: dark`, selection in primary with navy text, caret and form accent in primary, scrollbar in border color, focus ring 2px primary with a ground-colored offset.

## Copy

Plain, first-person, specific. No aphoristic pairs or chiasmus in headlines ("Nine years, five hats" style is out). Headlines say what the page is; subtitles carry the numbers and names. Product descriptions stay at two or three sentences, with detail in the "In the box" list.

## Assets

- `public/mark.svg`: the hexagon mark, five stripes, gradient white to blue. Used in the header and the OG image.
- `public/favicon.svg`, `public/favicon.ico` (16/32/48), `public/apple-touch-icon.png`: the mark on a navy tile.
- `public/og-image.png` (1200x630): navy field, mark, wordmark, hero headline, horizon line. Regenerate it when the hero headline changes.
