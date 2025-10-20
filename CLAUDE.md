# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Dboxed landing page and documentation website. Dboxed is an Open Source software that allows users to run cloud workloads on any server with a modern Linux kernel, providing cloud independence and portability.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Documentation**: Nextra 4.6 with nextra-theme-docs
- **Styling**: Tailwind CSS
- **Language**: TypeScript (with `strict: false`)
- **Package Manager**: pnpm (based on pnpm-lock.yaml)
- **Search**: Pagefind (post-build indexing)

## Common Commands

```bash
# Development
pnpm dev              # Start development server

# Building
pnpm build            # Build for production (includes pagefind indexing)
pnpm start            # Start production server

# Package management
pnpm install          # Install dependencies
```

## Architecture

### Directory Structure

**App Directory (`app/`)**: Next.js App Router structure
- `layout.tsx` - Root layout with Nextra theme components (Navbar, Footer, Layout)
- `[[...mdxPath]]/page.jsx` - Dynamic catch-all route for MDX pages using Nextra's `importPage` and `generateStaticParams`

**Content Directory (`content/`)**: All MDX documentation content
- Organized hierarchically (e.g., `docs/get-started/`, `docs/concepts/`)
- Each directory uses `_meta.ts` files to configure Nextra navigation/metadata
- `index.mdx` is the landing page, `docs/index.mdx` is the docs introduction

**Components Directory (`components/`)**: React components used in MDX pages
- All components use Tailwind CSS for styling

**Configuration Files**:
- `mdx-components.js` - Merges theme MDX components with custom components
- `next.config.mjs` - Nextra configuration with search and copy code enabled
- `tsconfig.json` - Uses `@/*` path alias for imports

### Page Rendering Flow

1. User navigates to a URL (e.g., `/docs/get-started/installation`)
2. `[[...mdxPath]]/page.jsx` catches the route via `generateStaticParams`
3. `importPage(params.mdxPath)` loads the corresponding MDX file from `content/`
4. MDX content is wrapped with Nextra theme's Wrapper component
5. Layout renders with page map (generated from `_meta.ts` files)

### Meta Files

Navigation structure and page metadata are controlled by `_meta.ts` files:
- Must export default object satisfying `MetaRecord` type (Nextra-specific)
- Keys correspond to file/folder names
- Values configure title, type, display options, theme settings
- Example: `content/_meta.ts` configures top-level navigation

### Search Implementation

Pagefind is used for static search indexing:
- Runs as postbuild step: `pagefind --site .next/server/app --output-path public/_pagefind`
- Indexes `.next/server/app` (Next.js App Router output)
- Outputs to `public/_pagefind` for client-side search

## Content Guidelines

When adding or modifying documentation:
- Add new MDX files to appropriate `content/` subdirectory
- Update corresponding `_meta.ts` file to include in navigation
- Use frontmatter for page metadata (title, etc.)
- Nextra supports standard MDX components and theme-specific components

## Important Notes

- TypeScript strict mode is disabled (`strict: false`)
- Base URL is configured to project root with `@/*` alias
- The project uses ES2017 target with ESNext modules
- Favicon configuration is extensive in `app/layout.tsx` (multiple sizes for PWA support)
