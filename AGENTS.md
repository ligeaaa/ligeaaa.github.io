# Project Guide

## Overview

This repository is Lianggang Pan's personal academic website, published at
`https://ligeaaa.github.io`. It is based on the Academic Pages Jekyll template
and the Minimal Mistakes theme. GitHub Pages builds the production site from
the repository's Jekyll source.

## Main Structure

- `_config.yml`: site metadata, author profile, friends, projects, collections,
  plugins, and other global Jekyll settings.
- `_data/navigation.yml`: header navigation entries.
- `_pages/`: standalone pages such as About, Friends, Projects, and Publications.
- `_posts/`: dated blog posts.
- `_publications/`, `_talks/`, `_teaching/`, `_portfolio/`: Jekyll collections.
- `_includes/` and `_layouts/`: reusable Liquid templates and page layouts.
- `_sass/` and `assets/`: site styling, JavaScript, fonts, and other static assets.
- `images/` and `files/`: user-facing media and downloadable files.
- `_site/`: generated output; never edit it as source or commit it.
- `Dockerfile` and `docker-compose.yaml`: reproducible local Jekyll environment.

## Editing Conventions

- Preserve the existing YAML, Markdown, Liquid, HTML, and SCSS patterns.
- Add site-wide structured content, including friends and projects, in
  `_config.yml` unless an existing page defines a different source of truth.
- Keep changes focused and avoid modifying generated files in `_site/`.
- Do not add dependencies unless the requested work requires them.
- Preserve unrelated user changes in a dirty worktree.

## Internationalization

- English is the default language and keeps the root-level URLs.
- Simplified Chinese pages use matching paths below `/zh/`.
- Every localized page sets `lang` and `alternate_url` in its front matter.
- Shared interface copy lives in `_data/i18n.yml`; navigation labels live in
  `_data/navigation.yml` under `main` and `main_zh`.
- Friends and projects store localized text in `_en` and `_zh` fields in
  `_config.yml`. Publication documents use the same suffix convention.
- When adding or changing user-facing content on a main page, update both
  languages and verify both routes plus their language-switch links.

## Validation

- Run `git diff --check` after every change.
- For configuration changes, parse `_config.yml` and confirm the expected data.
- Build the complete site with:
  `docker compose -f docker-compose.yaml run --rm jekyll-site jekyll build --config _config.yml,_config_docker.yml`
- Inspect the generated page in `_site/` for the changed content or behavior.
- When external URLs are added, verify that they respond successfully when
  network access is available.

## Mandatory Local Deployment

After every completed modification, rebuild and restart the local deployment so
the user can verify the result. Use `docker compose -f docker-compose.yaml up
--build -d`, confirm the changed page responds over HTTP, keep the deployment
running, and report its local URL. If port `4000` is occupied by an unrelated
process, use the next available port and report that URL instead. A successful
build alone does not satisfy this requirement; the refreshed local deployment
must be reachable.
