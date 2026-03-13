# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pace to Speed — a Next.js running pace/speed converter with race finish time calculator and educational articles. Deployed at https://pacetospeed.xyz.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint (equivalent to `eslint .`)

No test framework is configured.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript (strict mode)
- Tailwind CSS 4 via PostCSS
- Deployed on Vercel

## Architecture

### Routing

All routes live under `/app` using Next.js App Router:

- `/` — pace/speed converter (main feature)
- `/finish-time` — distance selector for race calculator
- `/finish-time/[distance]` — race finish time calculator (5k, 10k, half-marathon, marathon, 50k, 100k, custom)
- `/articles` — article listing
- `/articles/[slug]` — individual article pages (static generation via `generateStaticParams`)

### Component Patterns

- **Server components by default**; client components (`'use client'`) only for interactive converters
- **Suspense + LoadingFallback** for async loading states
- **URL search params** persist user inputs (unit selection, etc.) for sharing/bookmarking

### Component Roles

Input components (`PaceInput`, `SpeedInput`, `TimeInput`, `DistanceInput`) handle validation and formatting. Each has a read-only display counterpart (`RenderPaceField`, `RenderSpeedField`, etc.).

Business logic lives in `ConverterClient` (home page converter), `FinishTimeCalculator` (preset distances), and `CustomFinishTimeCalculator` (user-defined distance).

### Key Conversion Logic

- **Pace → Speed**: `speed = 60 / pace_in_minutes`
- **Unit factor**: 1 mile = 1.60934 km
- **Finish time**: `time = pace × distance`
- Speed input auto-inserts decimal at position 2; pace input uses MM:SS format; time uses HH:MM:SS with overflow rollover

### Articles

Article metadata is defined in `/app/articles/data.ts` as an `ArticleEntry[]`. Each article is a static page generated from its slug. New articles: add an entry to `data.ts` and create the corresponding `[slug]/page.tsx`.

### SEO

Every page generates metadata via Next.js Metadata API. Sitemap is generated in `/app/sitemap.ts`. Structured data (JSON-LD) via `StructuredData` component. Google Analytics is integrated.

## Path Alias

`@/*` maps to the project root (e.g., `@/app/components/Header`).
