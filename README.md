# Patryk Konefal — Technical Artist

Plain HTML/CSS/JS, no build step, no libraries. Hosted on GitHub Pages.

- `script.js` — **edit the `games` list at the top** to add, remove or reorder projects.
  `cat` picks its Game Select group (`tools`, `rig`, `team`, `early`); `featured: true` puts it in the big hero slider.
  The order of the list is the order everywhere on the site.
  The Games dropdown, Game Select, Videos and footer all build themselves from this list.
- `styles.css` — colours are the variables at the top: `--bg` (primary), `--bg-2` (secondary), `--accent` (blue).
- `assets/thumb/` small images · `assets/img/` full-size images and clips.

Every game has its own link, e.g. `https://konefalpatryk.github.io/#game/poplearner`
- `assets/video/showreel.mp4` — the showreel (music is original, synthesised, so it's free to use).
- Projects can have `links: [{ label, url }]` (shown as buttons on the game page) and an empty `media: []` / `video: ""` (those sections hide themselves).
- A project can use `clip: "file.mp4"` (in `assets/img`) instead of a YouTube `video` id; it then gets a "▶ Clip" button and a Video Previews tile.
- `lockedSlots` in `script.js` adds black "Coming Soon" slots in a "Next" group at the end of Game Select. Edit or remove entries there; turn one into a real project by adding it to `games`.
