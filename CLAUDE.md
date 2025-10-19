# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based static website using the [Hextra theme](https://github.com/imfing/hextra), which is imported as a Go module. The site is built with Hugo extended version 0.147.9 and uses Go 1.21+.

## Prerequisites

- Hugo Extended 0.147.9+ ([installation guide](https://gohugo.io/getting-started/installing/))
- Go 1.21+ ([installation guide](https://golang.org/doc/install))
- Git

## Development Commands

### Important: DO NOT run `hugo server`

The user will run the development server themselves. Never attempt to start the Hugo server.

### Local Development

```bash
# Initialize Hugo modules (run once or after module changes)
hugo mod tidy
```

### Update Theme

```bash
# Update the Hextra theme to the latest version
hugo mod get -u
hugo mod tidy
```

### Build

```bash
# Production build with garbage collection and minification
hugo --gc --minify

# Build output is generated in the public/ directory
```

## Project Structure

- `hugo.yaml` - Main Hugo configuration file
  - Defines site title, menu structure, and theme parameters
  - Configures Hextra theme via module imports
  - Enables raw HTML in markdown and syntax highlighting

- `content/` - All site content as markdown files
  - `_index.md` - Homepage (landing page with cards)
  - `about.md` - About page
  - `docs/` - Documentation section with nested pages
  - Uses Hugo's content organization with `_index.md` for section pages

- `public/` - Generated static site (build output, git-ignored)

- `go.mod` / `go.sum` - Go module files for managing the Hextra theme dependency

## Hugo Module System

This site uses Hugo Modules (Go modules) rather than git submodules or theme copying:
- Theme is declared in `hugo.yaml` under `module.imports`
- Theme version is pinned in `go.mod`
- Run `hugo mod tidy` after any module configuration changes
- Run `hugo mod get -u` to update theme versions

## Content Management

Content files use Hugo's front matter (YAML between `---` delimiters) and markdown body. Hextra provides custom shortcodes:
- `{{< cards >}}` / `{{< card >}}` - Card grid layouts
- Check [Hextra documentation](https://imfing.github.io/hextra) for available shortcodes and features

## Deployment

The site is configured for multiple deployment platforms:

- **GitHub Pages**: Automated via `.github/workflows/pages.yaml` workflow
  - Triggers on push to `main` branch
  - Requires Pages deployment source set to "GitHub Actions" in repository settings

- **Netlify**: Configuration in `netlify.toml`
  - Build command: `hugo --gc --minify -b ${DEPLOY_PRIME_URL}`
  - Publish directory: `public`

- **Vercel**: Supports deployment via Vercel's Hugo integration

## Configuration Notes

- The site uses Hugo's Goldmark markdown renderer with `unsafe: true` to allow raw HTML
- Syntax highlighting is enabled with `noClasses: false` for Hextra's theme
- Edit URLs are configured to point to GitHub repository (`editURL` in `hugo.yaml`)
- Navigation menu is defined in `hugo.yaml` under `menu.main`
