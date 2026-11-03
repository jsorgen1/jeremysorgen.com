# jeremysorgen.com

One-page site: `index.html` (content), `styles.css` (look), `script.js` (nav highlight, mobile menu, publication filters). Images live in `images/`. No build step.

## Editing
- Text: edit `index.html`. Search for `TODO` to find things that still need your input.
- New publication: copy an `<li>` inside `<ol class="pubs">`; set `data-type="article"` or `"report"`.
- Headshot: replace `images/headshot.jpg` (portrait, 4:5, ~800×1000px).
- CV: replace `files/sorgen-cv.pdf` with a newer PDF (keep the same filename).
- Colors: change the variables at the top of `styles.css` (`--accent` is the blue).
- After editing `styles.css` or `script.js`, bump the `?v=2` after their names in `index.html` (to `?v=3`, etc.) so browsers load the new version.

## Where it lives

- Live site: https://jeremysorgen.com (www.jeremysorgen.com redirects there)
- Code: https://github.com/jsorgen1/jeremysorgen.com (public repo, GitHub Pages from the `main` branch)
- Domain: registered at Spaceship. Advanced DNS has four A records for `@` (185.199.108–111.153) and a CNAME `www` → `jsorgen1.github.io`. HTTPS is enforced in the repo's Settings → Pages.

## Publishing an update

Commit the change and push to `main`; GitHub Pages redeploys in about a minute:

```bash
git add -A && git commit -m "Describe the change" && git push
```

`git push` signs in through GitHub's command-line tool (`~/.local/bin/gh`), which is already authorized for the jsorgen1 account. You can also edit files directly on github.com (pencil icon) and commit there.
