# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal placeholder site hosted on GitHub Pages. No build tools, no package manager, no frameworks — just three files served directly by GitHub Pages.

## Development

Open `index.html` directly in a browser. There is no build step, dev server, or install required.

## Architecture

The site is a single page composed of three files:

- **`index.html`** — full page structure: header with hamburger nav, centred hero text, footer. Tailwind CSS is loaded via CDN (`cdn.tailwindcss.com`).
- **`index.css`** — all custom styles: gradient background, `.accent` colour, `.coming-soon` text, nav underline hover effect, `fadeIn` keyframe animation, hamburger menu open state, and `@media (prefers-color-scheme: dark)` overrides.
- **`index.js`** — two behaviours: sets `#year` text to the current year; toggles `.open` on `#menu-container` when `#menu-toggle` is clicked.

### Hamburger menu

The mobile nav is hidden by default (`hidden sm:flex` via Tailwind). Clicking the hamburger button adds `.open` to `#menu-container`; `index.css` then makes `#menu` display as an absolute full-width dropdown. The desktop layout uses Tailwind responsive classes directly.

### Dark mode

Dark mode is CSS-only via `prefers-color-scheme: dark` in `index.css`. Tailwind's `dark:` utility classes are also used inline in `index.html` for text colours.

### Viewport height

`height: 100dvh` and `min-height: 100dvh` on `html, body` use dynamic viewport height to avoid the mobile browser chrome overlap issue that caused several fix attempts in recent commits.
