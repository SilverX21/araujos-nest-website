# Cinematic Revamp: Audit + MVP Storyboard

Phases 1–2 of `update.md`, scoped to the MVP.

**Decisions so far:** an original armoured suit (no Marvel IP), no model yet (build with a placeholder), drop the light theme, MVP first.

---

## 1. Audit

### Stack
| Area | Today | Impact |
|---|---|---|
| Framework | React 19 + Vite 8 + TS 6, no router | R3F fits directly |
| Styling | Tailwind v4 tokens in `index.css`, but most styling is **inline `style={{}}` objects** | Hero gets rewritten anyway; other sections stay as they are for now |
| Animation | Framer Motion (`whileInView` reveals in 8 components) | Keep for now. GSAP takes over scroll choreography only |
| Canvas | `ParticleCanvas`: 2D canvas, its own `requestAnimationFrame` loop, O(n²) links | **Delete.** It would be a second render loop, and the 3D scene replaces it |
| Theme | `App` state + `html.light` overrides + toggle buttons in `Navbar` | **Delete** (per decision) |
| Content | `src/data/*.ts` | Unchanged. The 3D layer never owns content |
| a11y | One `prefers-reduced-motion` block in CSS, semantic sections | Needs JS-side reduced-motion handling for the 3D layer |
| SEO | Title + description only | Add OG/Twitter tags and a canonical (cheap) |

### Refactor before adding 3D
1. **Remove the light theme:** `App.tsx` state, the `Navbar` props and buttons, and the `html.light` CSS blocks.
2. **Remove Marvel references:** `STARK.INDUSTRIES` (Hero), `JARVIS` comments (`index.css`, `SectionTitle`).
3. **Rebuild the Hero** from 633 lines of inline styles into a lean editorial composition. The circular photo moves to About, because the suit is now the hero visual.
4. **Remove `ParticleCanvas`.**
5. Remove the generic HUD decoration in the Hero (corner brackets, fake lat/lon/"SYS: ACTIVE" readouts). `update.md` §33 explicitly bans it.

### Reusable
- `SectionTitle`, the section components, `data/*`, and the section ids (anchors stay stable).
- Design tokens (`--color-*`, fonts: Syne / Outfit / JetBrains Mono).

---

## 2. Architecture (MVP)

```text
src/stage/                 # "experience" would collide with the Experience section
├── Stage.tsx              # lazy-loaded <Canvas>, fixed, aria-hidden, pointer-events:none
├── Suit.tsx               # loads SUIT_MODEL_URL (GLB) → falls back to placeholder; exposes reactor mesh
├── CameraRig.tsx          # applies rig state to camera (damped)
├── scenes.ts              # ALL choreography numbers: section anchors + keyframes, desktop/mobile
├── rig.ts                 # plain mutable object GSAP tweens and useFrame reads (no React state)
├── useChoreography.ts     # builds GSAP timelines + ScrollTriggers from scenes.ts
└── smoothScroll.ts        # Lenis ↔ gsap.ticker ↔ R3F advance()
```

**One loop:** `gsap.ticker` drives `lenis.raf()` and then R3F's `advance()` (`<Canvas frameloop="never">`). No competing RAF loops.

**Data flow:** `scroll → ScrollTrigger (scrub) → GSAP tweens rig values → useFrame applies rig to suit/camera/lights`. The DOM and Three.js only share `rig.ts`.

**Scene ranges are tied to sections, not to page-wide percentages.** Section heights vary a lot with content and breakpoint (the Experience timeline is long on mobile), so a global `0 → 1` would drift. Each scene has its own ScrollTrigger with `trigger: '#section-id'` and scrubs a local `0 → 1`. The same idea as the brief, and it holds up when content changes.

**Layering for depth typography:** `back text (z0) < canvas (z1) < front text (z2)`. Giant display words can sit behind the suit while the name and CTAs stay in front and readable.

**Dependencies:** `three`, `@react-three/fiber`, `@react-three/drei` (useGLTF, Draco/Meshopt loaders), `gsap` (ScrollTrigger is now free and bundled), `lenis`. Check the exact versions against the current docs at install time. **Deferred:** `@react-three/postprocessing`. The reactor glow uses emissive + additive sprites first, and bloom is only added if that looks flat.

---

## 3. Visual direction

- **Suit palette:** gunmetal/graphite armour, warm brass edge highlights, pale-blue/white reactor energy, **red only as a rare accent** (thruster core, one stripe). Red and gold across the whole suit would read as Iron Man trade dress. This palette is different from it and matches the existing cyan tokens.
- **Ground:** deep black (`--color-bg`), with light fog so the suit sits in depth.
- **Type:** Syne 800 at display sizes (clamp up to ~18vw for background words), Outfit for body, JetBrains Mono for small labels only.
- **No** HUD clutter, glowing borders everywhere, or particles that never stop.

---

## 4. MVP storyboard

Units: the suit is ~2 units tall with its origin at the chest. The camera looks at `target`. The numbers are **starting values** to tune in `scenes.ts`.

### Scene 01: ARRIVAL
**Trigger:** page load (time-based, ~2.4 s), **not scroll**. The visitor is at 0% scroll, so a scroll-driven arrival would never play. Scrolling during the intro fast-forwards it to the end.

| | Start → End |
|---|---|
| Suit | pos `[0, 0.4, -14]` → `[1.1, 0, 0]` (desktop) · rot Y `0.6 → -0.15` · pitch forward `0.5 → 0` (braking) |
| Camera | pos `[0, 0, 9]` → `[0, 0.1, 6]` · FOV `40 → 35` |
| Light | full black → reactor glow appears first (0–0.4 s), then the key/rim lights fade in as the suit arrives |
| Env | fog density falls · a few distant particles |
| DOM | back word `BACKEND` reveals line-masked behind the suit (~0.8 s). Name, role and CTAs stagger in front at the end |

**→ Next:** the suit settles into hover. No cut.

### Scene 02: HERO (+ activation on exit)
**Trigger:** `#hero`, `top top → bottom top`.

| | Rest (0 → 0.5) | Exit (0.5 → 1) |
|---|---|---|
| Suit | idle hover: y ±0.05, rot ±1.5° (a sine wave in useFrame, not GSAP) · pointer X → rot Y ±4°, damped | turns to a ¾ angle, leans forward 25° (flight prep), thruster glow on |
| Camera | pointer Y → pitch ±1.5° | drops 0.4, slides left 0.6 (lower, more dynamic angle) |
| DOM | `h1` Nuno Araújo · role · tagline · CTAs (in front) · `BACKEND` giant (behind) | back word drifts up and scales 1 → 1.15 (parallax). Front copy moves up at normal scroll speed |

**Mobile:** the suit sits centred in the top ~45% of the viewport, with the text block below and no overlap. There is no pointer input.

**→ Next:** the lean-forward pose leads straight into the fly-by.

### Scene 03: FLY-BY (transition About → Skills)
**Trigger:** `#about`, from `center center` to the end of the section. About's content is fully readable before this starts.

| | |
|---|---|
| Suit | full flight pose · path from the lower-left, far away `[-3, -1.5, -6]`, to the centre and then **past the camera** `[0.5, 0.3, 5.5]`. The armour fills the viewport for ~5% of the scrub |
| Camera | tracks the suit's target with lag · FOV `35 → 45` at the peak (a sense of speed) |
| Env | streak particles along the path · fog pushes back |
| DOM | nothing in front during the pass. Skills' title reveals when the suit clears the frame |

**Mobile:** the path runs vertically, bottom → top past the camera (the landscape diagonal doesn't fit portrait).

**→ Next:** the suit leaves the frame. Iron Man-style, *he* is the section wipe.

### Scene 04: OFFSTAGE (Skills → Projects)
**Trigger:** `#skills` top → `#projects` bottom.

This is the dense, recruiter-critical content (skills, experience, education, certs, projects). **The suit stays out of the way:** only a faint reactor-blue ambient glow and a few slow particles. The render loop drops to a throttled rate while nothing changes. The brief allows "occasionally leave viewport". For a CV site, readability wins here.

**→ Next:** a glow grows at screen edge as `#extracurricular` approaches.

### Scene 05: REACTOR → FINALE
**Trigger:** `#extracurricular` top → footer end.

| | Re-entry (0 → 0.3) | Close-up (0.3 → 0.7) | Finale (0.7 → 1) |
|---|---|---|---|
| Suit | rises into frame from below, facing the camera | still, hovering | hovers, centred slightly high |
| Camera | `[0, 0, 6]` | pushes to the chest: `[0, 0.1, 1.6]` · FOV `35 → 28` | pulls back to the full body `[0, 0.2, 7]` |
| Light | ambient dims | **the reactor becomes the only real light source**, intensity low → high → one pulse | key/rim return, softer |
| DOM | Extracurricular content (Scouts) | a single line reacts to the pulse: tracking opens and snaps back (one pass, stays readable) | closing CTA: **"Let's build the future!"** + LinkedIn / GitHub / email. The footer sits under the calm hover |

**End state:** a soft hover, with the reactor breathing. It never simply freezes.

### Deferred (post-MVP)
Repulsor charge/blast, a separate final fly-by, custom cursor, magnetic buttons, post-processing, KTX2, a tablet-specific choreography (tablet uses the desktop config with reduced travel).

### Changes after implementation (step 4)
- **Arrival:** the hero text is visible straight away instead of staggering in at the end of the intro. Hiding the `h1` would delay LCP by ~2 s, and the suit flying in behind already-present type still reads well.
- **Hero exit:** the suit leans *back* (rising launch) instead of forward, and the turn/launch runs at 25–90% of the hero, so it clears frame before About's title arrives.
- **Fly-by:** the canvas moves in front of the content (`.stage.is-front`) while the fly-by is active. Without that, the pass hid behind About's cards and Skills' opaque band. It stays `pointer-events: none`. Range: About `center center` → About bottom at 30% of the viewport.
- **Reactor → Finale:** runs inside a new `#contact` section (`Finale.tsx`) instead of over Extracurricular, whose opaque cards would cover the close-up. `#contact` is 180svh only while the choreography runs (`html.cinematic`); otherwise it's 100svh.
- **Title pulse:** "Let's build the future!" gets a one-shot tracking snap when it enters the viewport, rather than being scrubbed, because the scrubbed pulse happened before the title was on screen.

---

## 5. Responsive, a11y, fallback

| Case | Behaviour |
|---|---|
| Desktop ≥ 1024 | full choreography above, DPR ≤ 2 |
| Tablet 768–1023 | desktop keyframes × 0.7 travel, DPR ≤ 1.5, fewer particles |
| Mobile < 768 | `scenes.ts` mobile overrides (vertical fly-by, centred framing), DPR ≤ 1.5, no shadows, ~1/4 particles |
| `prefers-reduced-motion` | no Lenis, no intro, no fly-by. The suit is shown static in its hero pose, and the reactor close-up becomes a crossfade. Content is unchanged |
| No WebGL / model fails / `saveData` | the canvas is never mounted. The page is the plain DOM site with a CSS radial "reactor" glow behind the hero. Everything is still readable and navigable |
| Loading | the canvas is lazy (`React.lazy`) after first paint. The hero DOM shows immediately (LCP = text, not WebGL) |

Section ids and nav anchors stay the same. The canvas is `aria-hidden`.

---

## 6. The model

**Placeholder (dev only):** three.js `RobotExpressive.glb` (Quaternius, **CC0**, ~450 KB, rigged, with clips). It exercises the whole loader, rig and clip pipeline. It's cartoonish and clearly not the final asset.

**Final asset brief** (to commission, make in Blender, or AI-generate (Meshy/Tripo) + auto-rig via Mixamo):
- Original design, humanoid rig, ≤ 50k tris, ≤ 3 MB after Draco/Meshopt, 1–2k textures (KTX2 later).
- Named meshes: `Reactor` (emissive), `Thruster_L/R`, `Palm_L/R`, so the code can find them by name.
- Clips: `Hover`, `FlightPose`, (later) `ArmRaise`. Poses can be static one-frame clips. GSAP blends their weights.
- Origin at the chest, facing +Z, real-world scale ~1.8 m → normalised in `scenes.ts`.

---

## 7. Implementation order

1. Cleanup: light theme, Marvel references, ParticleCanvas, HUD clutter.
2. Foundation: deps, `smoothScroll.ts` (Lenis + ticker), lazy `Stage` + fallback detection, placeholder suit, lights. Check `build`, `lint`, and the browser.
3. New Hero composition (DOM only, works without WebGL).
4. Choreography: Arrival → Hero → Fly-by → Offstage → Reactor/Finale, one at a time, checked in the browser each time.
5. Mobile overrides + reduced-motion pass.
6. OG tags, a perf check (DevTools performance + Lighthouse mobile).
