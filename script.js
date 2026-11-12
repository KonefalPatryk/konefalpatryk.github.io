/* ==========================================================
   GAMES — edit this list to add, remove or reorder projects.
   cat:      "tools" | "rig" | "team" | "early"  (groups in Game Select)
   featured: true → shows in the big hero slider at the top
   media:    files in assets/img (.webp names without extension, or .mp4)
   ========================================================== */
const SHOWREEL = "assets/video/showreel.mp4";

const games = [
  {
    id: "nanite-pcg",
    cat: "tools",
    featured: true,
    title: "Nanite PCG Artefact",
    genre: "World-building tool · Dissertation",
    engine: "UE5",
    pitch: "Paint a spline, get a forest. A procedural foliage tool for fast, photoreal environment prototyping.",
    video: "sjx6G3aaul8",
    description: "My dissertation project. I looked at how procedural content generation affects efficiency and scale in game dev, then built a tool so designers and environment artists can block out photoreal worlds in a fraction of the time and try more ideas along the way.",
    features: [
      "Built a foliage generation tool on the UE5.2 PCG plugin and PCG Graph",
      "Spline-driven placement so areas can be shaped in seconds",
      "Integrated Nanite foliage for high detail without the usual performance hit",
      "Automated the repetitive parts of world-building with Blueprints",
    ],
    req: { Engine: "Unreal Engine 5.2", Scripting: "Blueprint", Tech: "PCG Graph, Nanite, Splines" },
    tags: ["PCG", "Nanite", "Environment", "Tool"],
    cover: "artefact-artefact",
    media: ["artefact-artefact", "artefact-pcgnonanite", "artefact-pcgnanite"],
  },
  {
    id: "l-system-trees",
    cat: "tools",
    title: "L-System Tree Generator",
    genre: "Procedural tool",
    engine: "UE5",
    pitch: "Type in some rules, grow a tree. Plant generation straight out of The Algorithmic Beauty of Plants.",
    video: "BstpagjY4Jw",
    description: "A custom tree generator that grows branches from L-system rules and user inputs. Part of a module on building tools that speed up the work of artists, designers and technical designers.",
    features: [
      "Researched L-systems from The Algorithmic Beauty of Plants",
      "Turned the theory into a working design tool in C++ and Blueprint",
      "Exposed inputs so trees can be tweaked without touching code",
    ],
    req: { Engine: "Unreal Engine 5", Language: "C++, Blueprint", Tech: "L-systems, procedural meshes" },
    tags: ["PCG", "Tool", "Research"],
    cover: "lsystem-lsystem",
    media: ["lsystem-example", "lsystem-example2", "lsystem-example3", "lsystem-example4", "lsystem-example6", "lsystem-example7", "lsystem-example8"],
  },
  {
    id: "poplearner",
    cat: "tools",
    featured: true,
    title: "PopLearner",
    genre: "Educational mobile game · Android",
    engine: "UE5.6",
    pitch: "Pop bubbles, learn numbers and letters. Every level is generated, so it never plays the same twice.",
    video: "YuaU9PwrPJM",
    description: "A learning game for kids on Android. PCG builds the levels and menus, so new content scales easily, and players unlock more as they go, which turns repetition into progress.",
    features: [
      "Planned, built and optimised the whole prototype in C++ and Blueprints",
      "PCG Graph spawns interactable bubbles and assigns numbers or letters per level",
      "Level select UI generates itself from what the player has unlocked",
      "Child lock, inventory, progressive levels and a save system",
      "Set up the Android SDK, NDK and JDK and met Google Play's publishing requirements",
    ],
    req: { Engine: "Unreal Engine 5.6", Language: "C++, Blueprint", Platform: "Android", Tech: "PCG Graph, Niagara, Save Game" },
    tags: ["PCG", "Mobile", "Educational", "VFX"],
    cover: "poplearner-poplearner",
    media: ["poplearner-poplearnermenu", "poplearner-poplearnerexample.mp4", "poplearner-poplearnerexample2.mp4"],
  },
  {
    id: "lol-saber-mod",
    cat: "rig",
    featured: true,
    title: "Saber × Riven Mod",
    genre: "League of Legends custom mod · 2026",
    engine: "League of Legends",
    pitch: "Porting Saber onto Riven's Broken Covenant skin, rig and animations, then re-weighting her so she moves properly in game.",
    video: "",
    clip: "lol-saber-ingame.mp4",
    description: "A custom League of Legends mod. I ported a Saber model onto Riven's Broken Covenant skin, so she runs on that skin's skeleton and full animation set in game. Most of the work was re-weight painting the whole character to the new rig so the armour, skirt and sword deform cleanly in every animation.",
    features: [
      "Ported the Saber mesh onto Riven Broken Covenant's skeleton and animations",
      "Re-weight painted the whole character to the new rig, checking each animation in Blender against the original skin",
      "Riven's sword isn't one model: it's split into separate floating pieces that break apart in animations, to avoid mesh distortion. I split Saber's sword to match and weighted each piece to its own weapon bone (Weapon 1–4)",
      "Tested the result in game (see the clips below)",
    ],
    req: { Game: "League of Legends", Base: "Riven, Broken Covenant skin", Tools: "Blender, Flint, LTK Manager" },
    tags: ["Modding", "Porting", "Rigging", "Weight painting"],
    cover: "lol-saber-cover",
    media: ["lol-saber-ingame.mp4", "lol-saber-blender.mp4", "lol-saber-1", "lol-saber-2", "lol-saber-split-note", "lol-saber-weights", "lol-saber-side", "lol-saber-wire"],
  },
  {
    id: "battleforge-modding",
    cat: "rig",
    title: "BattleForge Modding",
    genre: "Modding · 2020",
    engine: "BattleForge",
    pitch: "Pulling BattleForge creatures out of the game, re-rigging them and getting them moving again.",
    video: "",
    clip: "battleforge-punch.mp4",
    description: "In 2020, before uni, I got into modding BattleForge through the Skylords Reborn community, the fan project that brought the game back online. I reverse-engineered the game's creature models so they could be used outside the game, then re-rigged them with new weight painting so they could be posed and animated again.",
    features: [
      "Reverse-engineered BattleForge's creature models and got them working outside the game",
      "Re-rigged the models and redid the weight painting",
      "Tested the deformation with a punch animation (see the clip below)",
      "Worked through tool problems with other modders on the Skylords Reborn forum",
    ],
    req: { Game: "BattleForge (Skylords Reborn)", Tools: "BFModelViewer", Year: "2020" },
    tags: ["Modding", "Reverse engineering", "Rigging", "Weight painting"],
    links: [{ label: "Forum thread ↗", url: "https://forum.skylords.eu/index.php?/topic/6846-problems-with-bfmodelviewer/" }],
    cover: "battleforge-1",
    media: ["battleforge-1", "battleforge-2", "battleforge-punch.mp4"],
  },
  {
    id: "3d-scanning",
    cat: "rig",
    title: "3D Scanning & Photogrammetry",
    genre: "3D capture · 2018 & 2023",
    engine: "KScan3D",
    pitch: "Turning real objects into 3D models: a 2018 passion project in KScan3D, then industry-level scanning with Creaform's VXelements / VXscan at uni in 2023.",
    video: "",
    description: "A passion project that grew into proper coursework. In 2018, before university, I scanned a figurine with KScan3D just to see how far I could take it, going from a rough, noisy capture to a clean, coloured mesh. In 2023 a university module covered motion tracking and photogrammetry at an industry level, and I used a Creaform handheld 3D scanner with VXelements / VXscan to capture a detailed mech model.",
    features: [
      "2018 passion project: scanned a figurine in KScan3D, aligning and combining multiple scans into one mesh",
      "Cleaned up and finalised the capture, from about 213k down to 178k vertices",
      "2023 uni module: motion tracking and photogrammetry with industry-level equipment",
      "Captured a detailed mech model with a Creaform handheld scanner in VXelements / VXscan",
    ],
    req: { "2018": "KScan3D", "2023": "Creaform VXelements / VXscan (handheld scanner)", Output: "Coloured 3D meshes" },
    tags: ["Photogrammetry", "3D scanning", "Motion tracking", "Mesh cleanup"],
    cover: "scan-cover",
    media: ["scan-figure", "scan-1", "scan-2", "scan-3", "scan-4", "scan-5"],
  },
  {
    id: "cleanslate",
    cat: "team",
    featured: true,
    title: "Cleanslate",
    genre: "First-person shooter · Team of 21",
    engine: "UE5",
    pitch: "A slimy FPS demo built with a 21-person team. I was the Technical Artist.",
    video: "WZ8CBVhFZDk",
    description: "An FPS demo in Unreal Engine 5 built around slime-based mechanics, made with concept artists, 3D artists, designers, programmers and an animator.",
    features: [
      "Technical Artist on a multidisciplinary team of 21",
      "Led discussions on mechanics, prototyping, testing and technical investigations",
      "Helped the team refine the demo to hit the project goals",
    ],
    req: { Engine: "Unreal Engine 5", Language: "C++", Role: "Technical Artist", Tech: "Object pooling" },
    tags: ["FPS", "Team", "Tech Art"],
    cover: "cleanslate-cleanslate",
    media: ["cleanslate-example1", "cleanslate-example2", "cleanslate-example3"],
  },
  {
    id: "amaurosis",
    cat: "team",
    title: "Amaurosis",
    genre: "Echolocation horror · Team project",
    engine: "Unity",
    pitch: "You can't see. Make noise to light up the world, but the monster hears it too.",
    video: "VYD3AC9eWao",
    description: "Walk and throw things to see by sound, fix every generator, and get out before the monster finds you. I handled the audio.",
    features: [
      "Sound Engineer: sound effects for mechanics and enemy AI",
      "Sounds triggered at world positions through the event system",
      "Object pooling to keep audio cheap",
      "Researched and edited audio to fit the gameplay",
    ],
    req: { Engine: "Unity", Language: "C#", Role: "Sound Engineer", Tech: "Event system, object pooling" },
    tags: ["Horror", "Audio", "Team"],
    cover: "amaurosis-amaurosis",
    media: ["amaurosis-amaurosis", "amaurosis-menu", "amaurosis-splash"],
  },
  {
    id: "vr-crane",
    cat: "early",
    title: "VR Sci-Fi Crane",
    genre: "VR / XR simulation · Early uni",
    engine: "Unity",
    pitch: "You're on border control. Grab humans, enemies and aliens with a crane and keep the aliens out.",
    video: "k7JC5rdAYdc",
    description: "A VR prototype where you protect humanity by sorting everyone at the gate, without letting aliens through the human entrance.",
    features: [
      "Crane controls on the joysticks with select and hold",
      "Hand-mounted camera and monitor for spotting aliens",
      "Score and penalty system",
      "Trigger-mapped shooting and toggleable tools",
    ],
    req: { Engine: "Unity", Language: "C#", Platform: "VR (OpenXR)", Tech: "Input System, XR Toolkit" },
    tags: ["VR", "Simulation"],
    cover: "vr-vr",
    media: ["vr-vr"],
  },
  {
    id: "vivifica",
    cat: "early",
    title: "Sci-Fi Third Person",
    genre: "Third-person demo · Early uni",
    engine: "Unity",
    pitch: "Sword fights in a moody sci-fi corridor, lit with Unity HDRP.",
    video: "It2Aa4V62eg",
    description: "A third-person sci-fi demo focused on combat feel and photoreal lighting.",
    features: [
      "Tuned Mixamo keyframes for smoother sword combat",
      "NavMesh enemy AI that reacts to distance and collisions",
      "Enemy death sequence driven by animation events",
      "Pause and roll with the new Input System",
      "HDRP sky and fog volumes, HDRI and lighting for the visuals",
    ],
    req: { Engine: "Unity (HDRP)", Language: "C#", Tech: "NavMesh, Input System, animation events" },
    tags: ["Third person", "Combat", "HDRP"],
    cover: "third-person-vivifica",
    media: ["third-person-vivifica"],
  },
  {
    id: "scavenger",
    cat: "early",
    title: "Scavenger",
    genre: "Top-down game · Early uni",
    engine: "Unity",
    pitch: "Drive a tank, dodge turrets, don't blow up.",
    video: "RqAUuYamIIQ",
    description: "A top-down tank game made in Unity.",
    features: [
      "AI turrets that track and fire when you enter their range",
      "Death sequence with particle effects",
      "Win and lose menus with cursor handling",
      "Health UI plus smoke for visual damage feedback",
    ],
    req: { Engine: "Unity", Language: "C#", Tech: "AI, particles, UI" },
    tags: ["Top-down", "AI"],
    cover: "tank-tank",
    media: ["tank-tank", "tank-unitytank"],
  },
];
/* Placeholder slots in Game Select for work that can't be shown (yet) */
const lockedSlots = [
  { label: "Coming Soon", title: "Coming Soon", genre: "In progress", pitch: "Something new is in progress." },
];

const CATS = [
  { id: "tools", label: "Tools & PCG" },
  { id: "rig", label: "Rigging & Capture" },
  { id: "team", label: "Team Projects" },
  { id: "early", label: "Early Uni · Unity" },
];

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const thumb = (n) => `assets/thumb/${n}.webp`;
const full = (n) => (n.endsWith(".mp4") ? `assets/img/${n}` : `assets/img/${n}.webp`);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const yt = (id, autoplay) =>
  `<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0${autoplay ? "&autoplay=1" : ""}" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
const link = (g) => `#game/${g.id}`;
const trailerAttr = (g) => (g.video ? `data-trailer="${g.video}"` : g.clip ? `data-local="${g.clip}"` : "");
const short = (s) => s.split("·")[0].trim();
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const featured = games.filter((g) => g.featured);

/* ---------- Nav: solid on scroll, mobile menu, active link ---------- */
const nav = $("#nav");
const burger = $(".burger");
const menu = $("#menu");
const onScroll = () => nav.classList.toggle("solid", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true });
onScroll();
const setMenu = (open) => {
  burger.setAttribute("aria-expanded", open);
  menu.classList.toggle("open", open);
  document.body.classList.toggle("locked", open);
};
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) setMenu(false); });

const navLinks = [...menu.querySelectorAll(":scope > a:not(.hexbtn), .dd > a")];
const spy = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) navLinks.forEach((a) => a.setAttribute("aria-current", a.hash === `#${en.target.id}`));
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);
["games", "videos", "profile", "contact"].forEach((id) => spy.observe(document.getElementById(id)));

/* ---------- Hero slider (auto-advances when each progress bar fills) ---------- */
$("#hero-slides").innerHTML = featured.map((g, i) => `
  <div class="hslide${i ? "" : " on"}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${featured.length}: ${esc(g.title)}" ${i ? "aria-hidden=\"true\"" : ""}>
    <img src="${full(g.cover)}" alt="" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}>
    <div class="hslide-in wrap">
      <p class="hslide-meta"><span class="pill">Featured</span>${String(i + 1).padStart(2, "0")} / ${String(featured.length).padStart(2, "0")}</p>
      <p class="stage-genre">${esc(g.genre)}</p>
      <h2 class="hslide-title">${esc(g.title)}</h2>
      <p class="hslide-pitch">${esc(g.pitch)}</p>
      <div class="stage-actions">
        <a class="hexbtn hexbtn-hue" href="${link(g)}"><span>Game Info</span></a>
        ${g.video || g.clip ? `<button type="button" class="hexbtn hexbtn-line" ${trailerAttr(g)}><span>▶ ${g.video ? "Trailer" : "Clip"}</span></button>` : ""}
      </div>
    </div>
  </div>`).join("");
$("#hero-tabs").innerHTML = featured.map((g, i) => `
  <button type="button" class="htab" data-h="${i}" aria-pressed="${!i}" aria-label="Show ${esc(g.title)}">
    <b>${String(i + 1).padStart(2, "0")}</b><span>${esc(g.title)}</span><i class="bar"></i>
  </button>`).join("");
const hSlides = [...document.querySelectorAll(".hslide")];
const hTabs = [...document.querySelectorAll(".htab")];
let hI = 0;
function showHero(n) {
  hI = (n + hSlides.length) % hSlides.length;
  hSlides.forEach((s, i) => {
    const on = i === hI;
    s.classList.toggle("on", on);
    s.toggleAttribute("aria-hidden", !on);
    s.querySelectorAll("a, button").forEach((el) => (el.tabIndex = on ? 0 : -1));
  });
  hTabs.forEach((t, i) => t.setAttribute("aria-pressed", i === hI));
}
hTabs.forEach((t) => t.addEventListener("click", () => showHero(+t.dataset.h)));
document.querySelectorAll("[data-hero]").forEach((b) => b.addEventListener("click", () => showHero(hI + +b.dataset.hero)));
$("#hero-tabs").addEventListener("animationend", () => showHero(hI + 1));
showHero(0);

/* ---------- Games dropdown, videos, footer list ---------- */
$("#dd-list").innerHTML = games.map((g) => `
  <li><a href="${link(g)}"><img src="${thumb(g.cover)}" alt="" loading="lazy"><span>${esc(g.title)}<small>${esc(short(g.genre))} · ${g.engine}</small></span></a></li>`).join("");

const playIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
$("#vids").innerHTML =
  `<li class="vid reel"><button type="button" data-showreel aria-label="Play showreel">
     <img src="assets/video/showreel-poster.webp" alt="" loading="lazy"><span class="play">${playIcon}</span>
     <span class="cap"><small>Best work · 1:21</small><strong>Showreel</strong></span></button></li>` +
  games.filter((g) => g.video || g.clip).map((g) => `
  <li class="vid"><button type="button" ${trailerAttr(g)} aria-label="Play ${esc(g.title)} video">
     <img src="${thumb(g.cover)}" alt="" loading="lazy"><span class="play">${playIcon}</span>
     <span class="cap"><small>${esc(short(g.genre))}</small><strong>${esc(g.title)}</strong></span></button></li>`).join("");

$("#footer-games").innerHTML = games.map((g) => `<li><a href="${link(g)}">${esc(g.title)}</a></li>`).join("");

/* ---------- Game select ---------- */
const section = $("#games");
const stage = $("#stage");
const LOCK_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V8a5 5 0 0110 0v2h1.5v11h-13V10zm2 0h6V8a3 3 0 00-6 0z"/></svg>';
const pickBtn = (g, i) => `
  <button type="button" class="pick" data-pick="${i}" aria-pressed="${!i}">
    <span class="pick-gem"><img src="${thumb(g.cover)}" alt="" loading="lazy"></span>
    <span class="pick-name">${esc(g.title)}</span>
  </button>`;
const lockBtn = (l, k) => `
  <button type="button" class="pick pick-locked" data-pick="${games.length + k}" aria-pressed="false">
    <span class="pick-gem"><span class="pick-lock">${LOCK_ICON}</span></span>
    <span class="pick-name">${esc(l.label)}</span>
  </button>`;
const groupBlock = (label, items) => `
  <div class="pick-group" style="--n:${items.length}">
    <p class="pick-group-h">${esc(label)}</p>
    <div class="pick-row">${items.join("")}</div>
  </div>`;
$("#picker").innerHTML =
  CATS.map((c) => groupBlock(c.label, games.map((g, i) => (g.cat === c.id ? pickBtn(g, i) : "")).filter(Boolean))).join("") +
  (lockedSlots.length ? groupBlock("Next", lockedSlots.map(lockBtn)) : "");
const TOTAL = games.length + lockedSlots.length;
const picks = [...document.querySelectorAll("[data-pick]")];
let sel = 0;
function selectGame(i, animate = true) {
  sel = i;
  const locked = i >= games.length;
  stage.classList.toggle("is-locked", locked);
  $("#s-lock").hidden = !locked; $("#s-img").hidden = locked;
  if (locked) {
    const l = lockedSlots[i - games.length];
    $("#select-bg").style.setProperty("--sel-img", "none");
    $("#s-num").textContent = String(i + 1).padStart(2, "0");
    $("#s-genre").textContent = l.genre;
    $("#s-title").textContent = l.title;
    $("#s-pitch").textContent = l.pitch;
    $("#s-tags").innerHTML = "";
    $("#s-info").hidden = !l.cta;
    if (l.cta) { $("#s-info").href = "#contact"; $("#s-info").querySelector("span").textContent = l.cta; }
    $("#s-art").href = "#contact"; $("#s-art").setAttribute("aria-label", `${l.title}: get in touch`);
    $("#s-lock-label").textContent = l.label;
    $("#s-trailer").hidden = true;
    picks.forEach((p, k) => p.setAttribute("aria-pressed", k === i));
    if (animate) { stage.classList.remove("swap"); void stage.offsetWidth; stage.classList.add("swap"); }
    return;
  }
  $("#s-info").hidden = false;
  $("#s-info").querySelector("span").textContent = "Game Info";
  const g = games[i];
  $("#select-bg").style.setProperty("--sel-img", `url("${thumb(g.cover)}")`);
  $("#s-num").textContent = String(i + 1).padStart(2, "0");
  $("#s-genre").textContent = g.genre;
  $("#s-title").textContent = g.title;
  $("#s-pitch").textContent = g.pitch;
  $("#s-tags").innerHTML = [g.engine, ...g.tags].map((t) => `<li>${esc(t)}</li>`).join("");
  $("#s-info").href = link(g);
  $("#s-art").href = link(g);
  $("#s-art").setAttribute("aria-label", `${g.title}: open game info`);
  $("#s-img").src = full(g.cover);
  const st = $("#s-trailer");
  st.removeAttribute("data-trailer"); st.removeAttribute("data-local");
  if (g.video) st.dataset.trailer = g.video; else if (g.clip) st.dataset.local = g.clip;
  st.querySelector("span").textContent = g.video ? "▶ Trailer" : "▶ Clip";
  st.hidden = !(g.video || g.clip);
  picks.forEach((p, k) => p.setAttribute("aria-pressed", k === i));
  if (animate) { stage.classList.remove("swap"); void stage.offsetWidth; stage.classList.add("swap"); }
}
picks.forEach((p) => p.addEventListener("click", () => {
  selectGame(+p.dataset.pick);
  // on phones the picker sits above the stage, so bring the selected project into view
  if (matchMedia("(max-width: 919px)").matches) stage.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}));
$("#picker").addEventListener("keydown", (e) => {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  const n = (sel + (e.key === "ArrowRight" ? 1 : -1) + TOTAL) % TOTAL;
  selectGame(n);
  picks[n].focus();
});
selectGame(0, false);

/* ---------- Dialogs ---------- */
const page = $("#game");
const viewer = $("#viewer");
const syncLock = () => document.body.classList.toggle("locked", page.open || viewer.open);
[page, viewer].forEach((d) => {
  d.addEventListener("click", (e) => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
  d.addEventListener("close", syncLock);
});

/* ---------- Game info (#game/<id>) ---------- */
let current = -1;
function openGame(i) {
  const g = games[i];
  current = i;
  $("#g-hero").style.backgroundImage = `url("${full(g.cover)}")`;
  $("#g-genre").textContent = g.genre;
  $("#g-title").textContent = g.title;
  $("#g-pitch").textContent = g.pitch;
  $("#g-desc").textContent = g.description;
  $("#g-video").innerHTML = g.video ? yt(g.video) : "";
  $("#g-feats").innerHTML = g.features.map((f) => `<li>${esc(f)}</li>`).join("");
  $("#g-req").innerHTML = Object.entries(g.req).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  $("#g-tags").innerHTML = g.tags.map((t) => `<li>${esc(t)}</li>`).join("");
  $("#g-links").innerHTML = (g.links || []).map((l) => `<a class="hexbtn hexbtn-line" href="${esc(l.url)}" target="_blank" rel="noopener"><span>${esc(l.label)}</span></a>`).join("");
  $("#g-shots-h").hidden = $("#g-shots").hidden = !g.media.length;
  $("#g-shots").innerHTML = g.media.map((m, k) =>
    m.endsWith(".mp4")
      ? `<button type="button" data-media="${m}" aria-label="Play clip ${k + 1}"><video src="${full(m)}" muted loop playsinline autoplay preload="metadata"></video></button>`
      : `<button type="button" data-media="${m}" aria-label="Enlarge screenshot ${k + 1}"><img src="${thumb(m)}" alt="${esc(g.title)} screenshot ${k + 1}" loading="lazy"></button>`
  ).join("");
  if (!page.open) page.showModal();
  page.scrollTop = 0;
  syncLock();
  selectGame(i, false); // keep Game Select in sync
}
function route() {
  const m = location.hash.match(/^#game\/(.+)$/);
  const i = m ? games.findIndex((g) => g.id === m[1]) : -1;
  if (i > -1) openGame(i);
  else if (page.open) page.close();
}
addEventListener("hashchange", route);
route();
page.addEventListener("close", () => {
  $("#g-video").innerHTML = "";
  if (location.hash.startsWith("#game/")) history.replaceState(null, "", "#games");
});
page.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => {
  location.hash = `game/${games[(current + +b.dataset.step + games.length) % games.length].id}`;
}));
page.addEventListener("keydown", (e) => {
  if (viewer.open) return;
  if (e.key === "ArrowRight") page.querySelector('[data-step="1"]').click();
  if (e.key === "ArrowLeft") page.querySelector('[data-step="-1"]').click();
});

/* ---------- Media viewer ---------- */
function openViewer(html) {
  $("#viewer-media").innerHTML = html;
  viewer.showModal();
  syncLock();
}
viewer.addEventListener("close", () => ($("#viewer-media").innerHTML = ""));
$("#g-shots").addEventListener("click", (e) => {
  const b = e.target.closest("[data-media]");
  if (!b) return;
  const m = b.dataset.media;
  openViewer(m.endsWith(".mp4") ? `<video src="${full(m)}" controls autoplay loop playsinline></video>` : `<img src="${full(m)}" alt="${esc(b.querySelector("img").alt)}">`);
});
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-trailer]");
  if (t) openViewer(yt(t.dataset.trailer, true));
  const l = e.target.closest("[data-local]");
  if (l) openViewer(`<video src="${full(l.dataset.local)}" controls autoplay loop playsinline></video>`);
  if (e.target.closest("[data-showreel]")) openViewer(`<video src="${SHOWREEL}" poster="assets/video/showreel-poster.webp" controls autoplay playsinline></video>`);
});

/* ---------- Contact form ---------- */
const form = $(".form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = $(".form-status");
  const btn = form.querySelector("[type=submit]");
  btn.disabled = true;
  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    form.reset();
    status.textContent = "Message sent! I'll get back to you soon.";
  } catch {
    status.textContent = "That didn't go through. Try again, or message me on LinkedIn.";
  } finally {
    btn.disabled = false;
  }
});

$("#year").textContent = new Date().getFullYear();

// Close the dropdown after picking a game (it stays open via :focus-within otherwise)
$("#dd-panel").addEventListener("click", (e) => { if (e.target.closest("a")) setTimeout(() => document.activeElement.blur(), 0); });
