# The Legend Archive website

This folder contains the public static website for **DanMachi: Retelling of the Legend**.

## Deployment

The workflow at `.github/workflows/pages.yml` deploys this folder to GitHub Pages when relevant files are pushed to `main`.

One-time repository setup:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions** and run **Deploy Legend Archive** (or push a change under `docs/`, `Wiki/`, or the workflow).
4. After the deployment succeeds, open the published URL shown in the workflow's `github-pages` environment.

The expected URL is `https://daoistbnacwv.github.io/danmachi-retelling-wiki/`, subject to GitHub Pages being enabled for this repository.

## Data model

- Article content is maintained in the main repository's `Wiki/` Markdown files.
- `assets/app.js` loads those public Markdown files at runtime and provides navigation, article rendering, full-text search, and a live chapter-folder listing.
- The chapter listing reads the public GitHub Contents API.
- Do not edit generated article copies in this folder; edit the source article under `Wiki/`.

## Known limits

- The first version is a read-only public encyclopedia. Editing is performed through the private maintainer workflow and repository commits.
- GitHub Pages is static hosting; it does not provide a private admin login or database.
- The native GitHub Wiki is a separate GitHub feature. The `Wiki/Home.md` file is prepared as its landing-page content, but the native Wiki repository must first be initialized from the repository's **Wiki** tab if it has not been enabled.
