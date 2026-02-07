# Corque Website

English official site for **Corque** — a local-first personal AI assistant. Static site built for GitHub Pages.

## Structure

- **Landing**: One-line tagline, three selling points (Local-first, Tool Agent, Skills), shortest demo (≤10 lines).
- **Docs**: Getting Started, Concepts (Tools vs Skills, flow diagram), Cookbook, Registry (Tools/Skills list), Community.

## Local preview

Open `index.html` in a browser, or serve the repo root with any static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown).

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages** → Source: **Deploy from a branch**.
3. Branch: **main** (or your default), folder: **/ (root)**.
4. Save. The site will be at `https://<username>.github.io/Corque-website/` (or your repo name).

The repo includes a `.nojekyll` file so GitHub serves the static HTML/CSS/JS as-is.

## Assets

- `assets/Corque-icon-222deab8-fa22-4415-8a16-df64a60176ea.png` — Corque mascot (logo).
- `assets/Corque-conversation-46be4925-9e02-47f3-97f7-a52767ae4e44.png` — Chat UI / demo screenshot.

Keep these filenames so `index.html` and CSS references resolve correctly.

## Colors (green palette)

- `#386641` — dark green (primary)
- `#6A994E` — mid green
- `#A7C957` — light green (accent)
- `#F2E8CF` — cream (background)
- `#BC4749` — red (optional accent)

## License

Same as the Corque project.
