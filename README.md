# jeremysorgen.com

One-page site: `index.html` (content), `styles.css` (look), `script.js` (nav highlight, mobile menu, publication filters). Images live in `images/`. No build step.

## Editing
- Text: edit `index.html`. Search for `TODO` to find things that still need your input.
- New publication: copy an `<li>` inside `<ol class="pubs">`; set `data-type="article"` or `"report"`.
- Headshot: replace `images/headshot.jpg` (portrait, 4:5, ~800×1000px).
- CV: replace `files/sorgen-cv.pdf` with a newer PDF (keep the same filename).
- Colors: change the variables at the top of `styles.css` (`--accent` is the blue).
- After editing `styles.css` or `script.js`, bump the `?v=2` after their names in `index.html` (to `?v=3`, etc.) so browsers load the new version.

## Publish free on GitHub Pages

1. Create a free account at github.com, then a **new public repository** named `jeremysorgen.com`.
2. On the repo page click **Add file → Upload files**, drag in everything in this folder (`index.html`, `styles.css`, `script.js`, `CNAME`, `README.md`, `images/`, `files/`), and click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, and Save.
4. Under **Custom domain** enter `jeremysorgen.com` and Save. (The `CNAME` file already says this.)

## Point the domain at GitHub (Spaceship)

In Spaceship: **Domains → jeremysorgen.com → Advanced DNS**. Delete any existing default/parking A or CNAME records for `@` and `www`, then add:

| Type  | Host | Value                     |
|-------|------|---------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| CNAME | www  | YOUR-GITHUB-USERNAME.github.io |

DNS can take from a few minutes up to a day. When GitHub's Pages settings show the domain check passed, tick **Enforce HTTPS**.

## Updating later
Edit the file on GitHub directly (pencil icon) or re-upload changed files. The site refreshes about a minute after each commit.
