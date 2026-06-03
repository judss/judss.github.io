# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal portfolio site hosted on GitHub Pages. No build tools, no package manager, no frameworks — just vanilla HTML, CSS, and JS served via Jekyll.

## Development

No build step. Open `index.html` directly in a browser, or use any static server:

```bash
python3 -m http.server 4000
```

Serves at `http://localhost:4000`. `.nojekyll` in the repo root tells GitHub Pages to skip the Jekyll build and serve files directly.

## Architecture

The site is a single page composed of three files:

- **`index.html`** — full page structure: header with hamburger nav, centred hero text, footer.
- **`index.css`** — all styles: CSS custom properties (design tokens), reset, layout, component styles, animations, and responsive breakpoints. No external CSS dependencies.
- **`index.js`** — sets `#year` text to the current year; toggles `.open` on `#menu-container` when `#menu-toggle` is clicked; scroll reveal via IntersectionObserver; scroll-to-top button.

### Design tokens

Colours and values are defined as CSS custom properties on `:root` in `index.css`. Use these variables (`--accent`, `--bg`, `--muted`, etc.) rather than hardcoding hex values.

### Hamburger menu

The mobile nav (`#menu`) is hidden by default. Clicking the hamburger button adds `.open` to `#menu-container` (the header); `index.css` then makes `#menu` display as an absolute full-width dropdown below the header. On desktop (≥640px) the toggle button is hidden and the nav is displayed inline.

### Dark mode

The site is dark-first. Background and text colours are set globally via CSS custom properties — there are no light mode overrides.

### Viewport height

`min-height: 100dvh` on `body` uses dynamic viewport height to avoid the mobile browser chrome overlap issue.
