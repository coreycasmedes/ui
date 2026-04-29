# Portfolio UI — Claude Guidelines

## Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (CSS-first config via `src/index.css`)
- **Animation**: Framer Motion (`framer-motion`) — use `motion/react` only when a library requires it
- **Icons**: Lucide React
- **Font**: Geist (sans), JetBrains Mono (mono) — loaded via Vercel Geist package

---

## Color System — White Elegance

Dark background theme. Light neutral foreground palette against carbon black.

### Raw Palette

| Name           | Hex       | CSS Variable       |
| -------------- | --------- | ------------------ |
| Carbon Black   | `#1c1c1c` | `--carbon-black`   |
| Alabaster Grey | `#daddd8` | `--alabaster-grey` |
| Soft Linen     | `#ecebe4` | `--soft-linen`     |
| Platinum       | `#eef0f2` | `--platinum`       |
| Ghost White    | `#fafaff` | `--ghost-white`    |

### Semantic Tokens

Defined in `src/index.css` under `@theme inline`. Tailwind generates utilities from every `--color-*` entry.

| Token                | Value     | Tailwind class              | Role                 |
| -------------------- | --------- | --------------------------- | -------------------- |
| `--color-background` | `#1c1c1c` | `bg-background`             | Page background      |
| `--color-card`       | `#252525` | `bg-card`                   | Dropdowns, modals    |
| `--color-surface`    | `#2a2a2a` | `bg-surface`                | Hover states, inputs |
| `--color-primary`    | `#fafaff` | `text-primary`              | Headings, key text   |
| `--color-secondary`  | `#daddd8` | `text-secondary`            | Body / muted text    |
| `--color-accent`     | `#ecebe4` | `bg-accent` / `text-accent` | Buttons, highlights  |
| `--color-border`     | `#daddd8` | `border-border`             | Dividers, strokes    |

### Rules

- **Never use raw hex values in component files.** Use semantic Tailwind classes.
- **Never use Tailwind gray-\*, neutral-\*, or white/black utilities.** Map to semantic tokens instead.
- Opacity modifiers are fine: `text-secondary/50`, `border-border/10`.
- Legacy components use `var(--color-bg)`, `var(--color-text)` etc. via `[var(--color-*)]` — these are aliased in `index.css` and acceptable until migrated.

---

## Component Standards

### File locations

```
src/
  components/
    home/        # Page-level components (Home.tsx)
    ui/          # Reusable primitives (navbar, hero, glowing-effect, etc.)
  assets/        # Static images (company logos, etc.)
  lib/           # Utilities (cn helper)
public/          # favicon.svg, static assets served at /
```

### Naming

- One component per file, named export matching the filename (e.g. `HeroSection` in `hero-section.tsx`).
- No default exports in component files.

### Styling

- Tailwind utility classes only — no inline `style` props except for CSS custom properties (e.g. Framer Motion `--start` vars).
- Use `cn()` from `src/lib/utils.ts` when merging conditional classes.
- No Tailwind `@apply` — keep styles in JSX.

### Animation

- Use `framer-motion` (`motion`, `AnimatePresence`) for all transitions.
- Prefer `layout` and `layoutId` for positional animations over manual x/y tweening.
- Keep `duration` under 0.4s for UI feedback; use spring physics (`type: "spring"`) for interactive elements.

### Accessibility

- All interactive elements must have accessible labels (`aria-label`, visible text, or `sr-only` span).
- Maintain WCAG AA contrast: primary text (`#fafaff`) on background (`#1c1c1c`) is ~15:1.
- Use `:focus-visible` ring (defined globally in `index.css`).

---

## Key Components

| Component                | File                       | Notes                                                                                 |
| ------------------------ | -------------------------- | ------------------------------------------------------------------------------------- |
| `Navbar`                 | `ui/navbar-menu.tsx`       | Fixed header, desktop dropdown + mobile accordion                                     |
| `HeroSection`            | `ui/hero-section.tsx`      | Full-screen hero with Aceternity border accents + word-by-word animation              |
| `GlowingEffect`          | `ui/glowing-effect.tsx`    | Aceternity cursor-tracking border glow — add to card wrappers with `disabled={false}` |
| `TypewriterEffectSmooth` | `ui/typewriter-effect.tsx` | Animated word-reveal used in About section                                            |

---

## Favicon

Generated via `node generate-favicon.js` (ES module). Uses `GeistPixel-Square.ttf` with opentype.js. Output: `public/favicon.svg`. Re-run after any changes to the script.
