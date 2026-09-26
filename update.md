# Iron Man 3D Cinematic Website Experience

I want you to transform the existing website into a premium, cinematic, highly interactive web experience centered around a real-time 3D Iron Man model.

The experience should feel comparable in quality and ambition to modern Awwwards-winning websites: immersive, fluid, responsive, visually striking, and carefully choreographed — not simply a normal website with a Three.js canvas placed in the background.

## Inspiration

Study these references before making design decisions:

- <https://landonorris.com/>
- <https://www.awwwards.com/websites/sites_of_the_year/>
- <https://dribbble.com/shots/popular/web-design>

Use them for inspiration regarding:

- scroll storytelling
- cinematic transitions
- typography
- composition
- interaction design
- 3D integration
- motion
- pacing
- section transitions
- navigation
- visual hierarchy
- micro-interactions

Do NOT directly clone any of these websites.

Extract their design principles and create an original experience appropriate for this website.

---

# 1. Start by auditing the existing project

Before changing anything:

1. Inspect the existing application architecture.
2. Determine:
   - framework
   - routing
   - styling approach
   - component structure
   - animation libraries already installed
   - existing assets
   - current responsive behavior
   - current page structure
3. Identify reusable components.
4. Identify architecture or code that should be refactored before adding the 3D experience.
5. Avoid installing libraries that duplicate functionality we already have.

Preserve the existing project architecture unless there is a clear technical reason to improve it.

Follow:

- KISS
- SOLID
- DRY
- YAGNI
- Separation of Concerns

Do not create one enormous component containing the whole experience.

---

# 2. Technology direction

The primary technologies should be:

- Three.js
- Lenis
- GSAP
- GSAP ScrollTrigger

If the existing project uses React or Next.js, strongly prefer:

- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `gsap`
- `lenis`

Use React Three Fiber rather than manually recreating React lifecycle management around Three.js unless there is a good technical reason not to.

Before installing anything, check the latest official documentation and ensure we use current APIs and recommended integration patterns.

Do not introduce unnecessary dependencies.

---

# 3. Overall creative direction

The site should feel like an interactive Iron Man cinematic sequence.

Visual direction:

- premium
- futuristic
- cinematic
- technological
- dark
- minimal but dramatic
- high contrast
- elegant rather than "gaming website"
- strong editorial typography
- subtle HUD-inspired elements
- metallic / glass / light effects
- deep blacks
- controlled reds
- warm metallic highlights
- white / pale-blue energy effects

Avoid filling the interface with generic sci-fi HUD graphics.

The 3D character should remain the star of the experience.

Typography and content should coexist with Iron Man instead of looking like two separate layers.

---

# 4. Define the cinematic storyboard before implementation

Before implementing the full animation system, create a storyboard for the entire page.

Treat the website as a cinematic sequence rather than a collection of unrelated sections.

Map the experience to normalized scroll progress from:

`0 → 1`

or conceptually:

`0% → 100%`

The initial target storyboard should follow approximately this structure:

| Scroll | Scene      | Iron Man                                | Camera / 3D                                | UI / Content                              |
| ------ | ---------- | --------------------------------------- | ------------------------------------------ | ----------------------------------------- |
| 0%     | Arrival    | Flies into scene and settles into hover | Camera pushes forward from darkness        | Logo / hero headline begin appearing      |
| 10%    | Hero       | Subtle hovering and mechanical movement | Small parallax and pointer response        | Hero copy and CTA                         |
| 25%    | Activation | Rotates and prepares to fly             | Camera shifts to a more dynamic angle      | Hero typography moves around / behind him |
| 40%    | Flight     | Flies across the scene                  | Camera tracks movement and increases depth | New content reveals                       |
| 60%    | Repulsor   | Stops, faces viewer, raises arm         | Camera pushes closer                       | UI fades back to focus attention          |
| 80%    | Reactor    | Reactor becomes dominant                | Cinematic chest close-up                   | Reactor pulse reveals next content        |
| 100%   | Finale     | Returns to controlled hover / landing   | Camera settles                             | Final CTA and closing composition         |

These percentages are guides, not arbitrary hard-coded pixel values.

The final sequence should be tuned based on the actual content and visual composition.

For every scene define:

- Iron Man position
- Iron Man rotation
- Iron Man animation state
- camera position
- camera rotation
- camera field of view
- lighting state
- environment state
- post-processing state
- particle state
- DOM typography
- DOM section visibility
- transition into the next scene

Do this before building the final GSAP timeline.

---

# 5. Detailed cinematic storyboard

## Scene 01 — Arrival

Approximate range:

`0% → 10%`

The experience begins in near darkness.

Sequence:

```text
darkness
↓
small arc reactor glow
↓
Iron Man silhouette appears in depth
↓
Iron Man flies toward the viewer
↓
thrusters decelerate
↓
controlled hover
```

The camera should slowly move forward as Iron Man approaches.

The entrance should feel cinematic rather than like the model simply faded in.

Possible supporting effects:

- subtle fog
- distant particles
- small environmental reflections
- increasing arc reactor intensity
- slight thruster illumination

The primary hero headline can begin appearing behind Iron Man.

Use large editorial typography.

Example composition:

```text
BUILD

        IRON MAN

THE FUTURE
```

Iron Man should overlap parts of the typography to create genuine visual depth.

---

# 6. Scene 02 — Hero interaction

Approximate range:

`10% → 25%`

This section should intentionally calm down.

Give the visitor time to understand the page.

Iron Man remains hovering within the hero composition.

Possible idle behavior:

```text
Y movement
+ small amount
- small amount

rotation
±1–2 degrees
```

Use subtle:

- breathing / hovering movement
- suit mechanical movement
- arc reactor pulsing
- metallic reflection changes
- tiny head movement
- shoulder adjustment

On desktop, pointer position can subtly influence:

- body rotation
- camera parallax
- environment lighting

For example conceptually:

```text
Pointer X
→ Iron Man rotation Y

Pointer Y
→ Camera rotation X
```

Keep this extremely restrained.

The user should never feel that Iron Man is attached directly to the mouse cursor.

---

# 7. Scene 03 — Suit activation

Approximate range:

`25% → 40%`

Scrolling should begin activating Iron Man.

Sequence:

```text
hover
↓
body rotation
↓
flight preparation
↓
lean forward
↓
thrusters activate
↓
flight pose
```

The camera should begin moving away from the static hero framing.

Example conceptually:

```text
camera

front
↓
three-quarter angle
↓
slightly lower perspective
↓
dynamic flight framing
```

Hero typography can begin moving in depth.

Iron Man may pass between foreground and background typography.

Example:

```text
EXPERIENCE

      IRON MAN

DIFFERENTLY
```

Some text can appear behind the character while other layers appear in front.

Use this carefully so readability remains excellent.

---

# 8. Scene 04 — Flight sequence

Approximate range:

`40% → 55%`

This should be one of the major cinematic moments.

Iron Man transitions fully into flight.

Possible movement:

```text
lower-left
↓
centre
↓
upper-right
↓
toward camera
```

Use position across:

- X
- Y
- Z

to create real depth.

For example conceptually:

```text
far away
↓
mid-distance
↓
close
↓
extremely close
```

The camera may:

- track Iron Man
- rotate slightly
- change focal framing
- push through the environment

Possible supporting effects:

- subtle light streaks
- controlled particles
- thruster glow
- environmental light changes
- mild directional blur illusion
- fog depth

At one point, Iron Man can fly very close to the camera.

His armor may temporarily occupy most of the viewport.

Use this as a natural section transition.

Concept:

```text
CURRENT SECTION

██████ IRON MAN PASSES CAMERA ██████

NEXT SECTION
```

Iron Man himself becomes the transition.

---

# 9. Scene 05 — Repulsor sequence

Approximate range:

`55% → 70%`

The experience slows down again.

Iron Man enters or settles into a stable position.

Sequence:

```text
flight
↓
deceleration
↓
turn toward camera
↓
raise arm
↓
repulsor charge
↓
blast
```

During the charge:

- light intensity increases
- particles converge toward the palm
- energy glow builds
- bloom increases slightly
- surrounding scene darkens

Then:

```text
charge

██████████

blast
```

The blast should NOT become a huge explosion.

Use it as a precise transition device.

For example:

```text
repulsor blast
↓
white radial light
↓
brief fullscreen transition
↓
next scene revealed
```

Keep flashing short and accessibility-safe.

---

# 10. Scene 06 — Arc Reactor

Approximate range:

`70% → 85%`

This scene becomes slower and more intimate.

The camera begins approaching Iron Man.

Sequence:

```text
full body
↓
upper body
↓
torso
↓
arc reactor
↓
cinematic close-up
```

The environment darkens.

The reactor becomes the main visual light source.

Possible behavior:

```text
reactor intensity

low
↓
medium
↓
high
↓
energy pulse
```

Typography may react to the pulse.

Example concept:

```text
TECHNOLOGY

TECHNO  LOGY

TECH     NOLOGY

TECHNOLOGY
```

Do not create unreadable typography.

The effect should be brief and art-directed.

The energy pulse can transition the page into the final sequence.

---

# 11. Scene 07 — Final flight / fly-by

Approximate range:

`85% → 95%`

Create one final burst of motion.

Iron Man can suddenly accelerate upward or across the viewport.

For example:

```text
        ↑
        ↑
     Iron Man
        ↑

────────────────
```

Another option:

Iron Man crosses extremely close to the camera once again, but from a different angle than before.

The camera may follow briefly before stopping.

This should feel like the climax of the cinematic section.

Do not simply repeat the earlier flight animation.

---

# 12. Scene 08 — Finale

Approximate range:

`95% → 100%`

The final scene becomes calm again.

Iron Man returns or settles into a final composition.

Possible sequence:

```text
flight
↓
deceleration
↓
hover / landing
↓
environment settles
↓
final CTA
```

Possible visual composition:

```text
            IRON MAN


      READY FOR THE FUTURE?

          [ EXPLORE ]
```

Iron Man remains subtly alive:

- soft hover
- small mechanical movements
- reactor glow
- subtle environmental reflections

The experience should feel intentionally completed.

Do not allow the 3D sequence to simply stop because the user reached the bottom.

---

# 13. Represent storyboard stages in code

Avoid tying animation logic directly to arbitrary scroll pixels.

Prefer normalized scene ranges.

Example:

```ts
export const SCENES = {
  ARRIVAL: {
    start: 0,
    end: 0.1,
  },

  HERO: {
    start: 0.1,
    end: 0.25,
  },

  ACTIVATION: {
    start: 0.25,
    end: 0.4,
  },

  FLIGHT: {
    start: 0.4,
    end: 0.55,
  },

  REPULSOR: {
    start: 0.55,
    end: 0.7,
  },

  REACTOR: {
    start: 0.7,
    end: 0.85,
  },

  FINAL_FLIGHT: {
    start: 0.85,
    end: 0.95,
  },

  FINALE: {
    start: 0.95,
    end: 1,
  },
};
```

These values must remain configurable.

Do not spread them throughout unrelated components.

---

# 14. Use semantic animation labels

The animation system should think in scenes.

Use concepts such as:

```text
ARRIVAL
HERO
ACTIVATION
FLIGHT
REPULSOR
REACTOR
FINAL_FLIGHT
FINALE
```

rather than:

```text
at 1340px move model
at 2120px rotate model
at 2865px increase light
```

Conceptually, the GSAP orchestration may resemble:

```ts
timeline
  .addLabel("arrival")
  // arrival animations

  .addLabel("hero")
  // hero animations

  .addLabel("activation")
  // activation animations

  .addLabel("flight")
  // flight animations

  .addLabel("repulsor")
  // repulsor animations

  .addLabel("reactor")
  // reactor animations

  .addLabel("finalFlight")
  // final flight animations

  .addLabel("finale");
```

Do not blindly copy this exact implementation.

Choose the architecture that best fits the existing application.

The goal is clear scene-based orchestration.

---

# 15. The 3D Iron Man model

Use a proper `.glb` / `.gltf` model.

The asset must come from a source the project owner has permission to use.

Do not scrape copyrighted 3D assets from websites.

Create the model-loading architecture so that the asset path is configurable.

Example conceptually:

`IRON_MAN_MODEL_URL`

If the final model is not yet available, prepare the entire architecture using a temporary development placeholder without pretending that it is the final asset.

Support GLTF optimizations such as:

- Draco where appropriate
- Meshopt where appropriate
- compressed textures
- KTX2 where appropriate

Correctly configure:

- model scale
- origin
- lighting
- shadows
- materials
- animations
- camera framing

If the model contains named bones or animation clips, inspect them and reuse them where possible.

Do not hard-code transformations throughout unrelated components.

Create a clean animation/controller abstraction for the character.

---

# 16. Iron Man must participate in the website

Iron Man should never simply rotate in the center of the screen.

His movement should communicate page progression.

The 3D character should:

- respond to scene changes
- participate in section transitions
- interact visually with typography
- change pose
- move through depth
- occasionally leave the viewport
- re-enter intentionally
- interact with lighting
- create major transition moments

Use the storyboard above as the baseline choreography.

---

# 17. Scroll experience

Implement Lenis smooth scrolling properly.

Scrolling should feel:

- responsive
- smooth
- weighted
- premium
- precise

Do not make scrolling excessively slow.

Synchronize Lenis correctly with GSAP / ScrollTrigger.

There should be one predictable animation lifecycle.

Avoid multiple independent RAF loops fighting each other.

Scroll should drive things such as:

- camera position
- camera rotation
- Iron Man position
- Iron Man rotation
- animation blending
- lighting
- particles
- typography
- opacity
- environment transitions
- section reveals

Use GSAP timelines for major cinematic sequences.

Use ScrollTrigger for orchestration.

Use CSS transitions or lighter animation techniques for simple UI interactions instead of putting everything into GSAP.

---

# 18. Scrollytelling

Think of the website as one continuous story.

Avoid:

```text
Hero
↓
Normal section
↓
Normal section
↓
Normal section
```

Instead create visual continuity.

Each section should naturally transition into the next.

Use techniques like:

- pinned storytelling sections
- sticky compositions
- overlapping layers
- text moving behind the 3D subject
- text moving in front of the 3D subject
- depth changes
- parallax
- camera transitions
- masked typography
- clip-path transitions
- scale transitions
- horizontal movement within vertical scroll
- subtle perspective distortion

Do not use every technique simultaneously.

Motion needs hierarchy.

---

# 19. Typography animation

Typography is extremely important.

Use large expressive headlines with strong composition.

Create animations such as:

- line reveals
- masked text reveals
- staggered word entrances
- kinetic typography
- characters moving slightly in depth
- text scaling as camera distance changes
- text disappearing behind Iron Man
- section labels moving independently

Avoid generic:

```text
opacity: 0
↓
opacity: 1
```

for every section.

Motion should reinforce the content.

---

# 20. Micro-interactions

Create premium micro-interactions throughout the UI.

Examples:

- magnetic CTA buttons
- subtle cursor reactions
- hover distortion
- animated navigation
- menu transitions
- text underline motion
- icon transitions
- interactive section indicators
- pointer-reactive lighting
- gentle depth/parallax

Keep interactions subtle.

The experience should feel polished, not noisy.

---

# 21. Cursor interaction

Desktop users can have a custom contextual cursor.

Possible states:

- default
- explore
- drag
- view
- activate

Allow Iron Man or certain environment elements to react subtly to pointer movement.

Do NOT replace expected browser behavior for links/forms in a way that hurts usability.

Disable unnecessary cursor effects on touch devices.

---

# 22. 3D environment

Do not necessarily create a literal environment.

A cinematic abstract environment may work better.

Possible elements:

- volumetric-looking light
- particles
- fog
- gradients
- reflective surfaces
- subtle grids
- energy fields
- light streaks
- metallic abstract geometry
- atmospheric particles

Keep the polygon count and shader complexity controlled.

The environment should support Iron Man rather than compete with him.

---

# 23. Lighting

Lighting must make the metallic armor look premium.

Consider:

- HDRI / environment lighting
- rim lights
- key light
- controlled red reflections
- blue-white energy illumination
- dynamic light from the arc reactor
- repulsor lights

Avoid flat lighting.

However, do not create a huge number of real-time lights if baked/material/environment lighting can produce the same result more efficiently.

---

# 24. Post-processing

Use post-processing only when it genuinely improves the scene.

Possible effects:

- bloom
- subtle vignette
- selective bloom
- mild depth-of-field
- very restrained chromatic aberration
- tone mapping

Do NOT stack every cinematic post-processing effect.

Bloom should primarily support:

- arc reactor
- repulsors
- specific highlights

The website must remain sharp and readable.

---

# 25. Responsive behavior

This experience must be fully responsive.

Do not simply scale down the desktop version.

Design separate compositions for:

## Desktop

Full cinematic experience.

## Tablet

Use:

- reduced camera travel where necessary
- simplified effects
- adjusted typography
- adjusted Iron Man positioning

## Mobile

Maintain the cinematic feeling while optimizing:

- camera framing
- model scale
- scroll distances
- pinned sections
- typography
- touch behavior
- GPU cost
- particle count
- shadow quality
- post-processing
- model detail

The Iron Man model must never:

- cover important text unintentionally
- become tiny
- be cropped incorrectly
- disappear outside the viewport

The storyboard can differ slightly between desktop and mobile if necessary.

Do not force identical camera choreography onto incompatible aspect ratios.

---

# 26. Performance is a feature

The website must remain smooth.

Target 60 FPS on capable desktop hardware while degrading gracefully on weaker devices.

Implement sensible performance controls.

Examples:

- compressed GLB assets
- optimized geometry
- optimized textures
- lazy loading
- code splitting
- dynamic import of WebGL components if appropriate
- avoid unnecessary React re-renders
- avoid allocating objects inside animation loops
- cache vectors/materials/geometries when appropriate
- reduce expensive shadows
- reduce particles on smaller devices
- cap device pixel ratio
- reduce or disable expensive effects on low-power/mobile devices
- pause unnecessary animation when the page is hidden
- avoid rendering expensive scenes that are no longer relevant

Do not sacrifice Core Web Vitals unnecessarily for animation.

Initial HTML/content must remain useful while the 3D bundle loads.

---

# 27. Progressive enhancement

The website must not depend entirely on WebGL to function.

Provide graceful fallbacks for:

- WebGL unavailable
- model load failure
- slow connection
- reduced motion
- low-power devices

The actual website content should remain accessible.

The 3D experience enhances the site instead of being required to access it.

---

# 28. Accessibility

Respect:

`prefers-reduced-motion`

For reduced-motion users:

- disable Lenis smoothing where appropriate
- drastically simplify 3D movement
- remove aggressive camera motion
- remove large parallax
- remove flash-style transitions
- preserve content and navigation

Also ensure:

- keyboard navigation
- visible focus states
- semantic HTML
- sufficient color contrast
- appropriate headings
- screen-reader accessibility
- canvas does not replace textual content

Do not sacrifice accessibility for aesthetics.

---

# 29. SEO

Do not render essential content exclusively inside WebGL.

All important content must exist in semantic HTML.

Maintain:

- metadata
- structured headings
- crawlable text
- internal links
- canonical handling
- Open Graph metadata
- correct image metadata

If this is Next.js, follow current Next.js SEO and metadata best practices.

---

# 30. Architecture

Keep rendering, scroll choreography and UI separated.

A possible architecture could resemble:

```text
experience/
├── IronManExperience
├── Scene
├── IronMan
├── Environment
├── Lighting
├── Effects
├── CameraRig
├── Particles
├── loaders/
├── hooks/
├── animations/
│   ├── arrival
│   ├── hero
│   ├── activation
│   ├── flight
│   ├── repulsor
│   ├── reactor
│   ├── final-flight
│   └── finale
└── config/
```

This is only an example.

Adapt it to the project's architecture.

Do NOT blindly create this structure if an existing structure already solves the problem elegantly.

Separate:

- scene rendering
- DOM UI
- animation orchestration
- configuration
- responsive behavior
- model logic

Keep animation constants centralized.

Avoid magic numbers scattered across components.

---

# 31. Animation configuration

Store important animation data in centralized configuration.

Examples:

- scene ranges
- model positions
- model rotations
- camera positions
- camera targets
- camera field of view
- lighting values
- effect intensity
- scroll timing
- breakpoint overrides

The developers should be able to tune choreography without rewriting components.

For example conceptually:

```ts
export const ironManScenes = {
  hero: {
    model: {
      position: [0.8, -0.2, 0],
      rotation: [0, -0.15, 0],
    },
    camera: {
      position: [0, 0.5, 5],
    },
  },

  flight: {
    model: {
      position: [3, 2, 1],
      rotation: [-0.4, 0.6, -0.2],
    },
    camera: {
      position: [-1, 1.2, 4],
    },
  },
};
```

This is conceptual only.

Do not over-engineer configuration if simpler code is clearer.

---

# 32. Design polish

Pay special attention to:

- spacing
- typography
- visual rhythm
- composition
- section heights
- responsive type scaling
- foreground/background depth
- navigation animation
- loaders
- transitions
- hover states
- lighting
- cinematic pacing

No element should feel like a default component.

At the same time, avoid unnecessary over-engineering.

---

# 33. Avoid common "AI website" patterns

Do NOT create:

- generic glassmorphism cards everywhere
- glowing borders around every component
- excessive gradients
- random floating blobs
- endless animated particles
- meaningless dashboard-like HUD elements
- giant pill buttons everywhere
- excessive text animations
- identical reveal animations on every element
- random animation purely because we can

Every effect must have purpose.

---

# 34. Implementation workflow

Work in stages.

## Phase 1 — Audit

Inspect the existing project.

Report:

- existing architecture
- relevant dependencies
- components that can be reused
- components requiring refactoring
- performance concerns
- recommended integration strategy

---

## Phase 2 — Storyboard

Before implementing Three.js choreography, produce the final storyboard.

For every scene provide:

### Scene name

Example:

`FLIGHT`

### Scroll range

Example:

`40% → 55%`

### Iron Man

- position
- rotation
- pose
- animation clip
- movement direction

### Camera

- position
- orientation
- movement
- framing
- FOV changes

### Environment

- lighting
- particles
- fog
- effects

### DOM

- headline
- supporting copy
- text transitions
- section visibility

### Transition

Explain exactly how this scene becomes the next one.

Only after this storyboard is coherent should the full choreography be implemented.

---

## Phase 3 — Experience plan

Define:

- visual direction
- section structure
- 3D behavior
- camera choreography
- Iron Man choreography
- scroll timeline
- responsive differences
- performance strategy

Keep this concise but concrete.

---

## Phase 4 — Foundation

Implement:

- Three.js / R3F scene
- model loading
- camera
- lighting
- Lenis
- GSAP integration
- ScrollTrigger
- responsive canvas
- loading state

Validate the foundation before adding complex sequences.

---

## Phase 5 — Cinematic choreography

Implement:

- arrival
- hero hover
- activation
- flight
- repulsor
- reactor
- final flight
- finale

Follow the approved storyboard rather than improvising arbitrary animations.

---

## Phase 6 — UI motion

Implement:

- typography
- navigation
- transitions
- micro-interactions
- cursor behavior

---

## Phase 7 — Optimization

Profile and optimize:

- JavaScript
- React rendering
- GPU performance
- textures
- GLB size
- shaders
- post-processing
- mobile performance

---

## Phase 8 — Final QA

Test:

- desktop
- tablet
- mobile
- Safari
- Chrome
- Firefox
- reduced-motion mode
- touch devices
- slow connection
- model loading failure
- resize/orientation changes

Fix visual and functional regressions.

---

# 35. Quality bar

Do not consider the task finished simply because:

- the model renders
- scrolling works
- animations execute

The finished result should feel intentionally art-directed.

Ask continually:

> Does this feel like an immersive digital experience, or does it feel like a normal website with a 3D model attached?

We want the first.

The final experience should feel worthy of being showcased alongside high-end interactive websites on Awwwards.

---

# 36. Important engineering rules

Do not:

- rewrite working architecture without justification
- duplicate logic
- create monolithic components
- leave temporary debug code
- leave dead CSS
- leave unused packages
- use enormous unoptimized assets
- execute expensive React state updates every animation frame
- tightly couple the DOM to Three.js implementation details
- hard-code model-specific values throughout the application
- break existing SEO or accessibility
- sacrifice usability for animation

Prefer simple, maintainable solutions.

---

# 37. Final deliverable

When implementation is complete, provide a concise technical summary containing:

## Architecture

What was added and how responsibilities are separated.

## Dependencies

What packages were introduced and why.

## Storyboard

Summarize the final scene sequence and any deviations from the original plan.

## 3D

How the Iron Man scene/model is implemented.

## Animation

How Lenis, GSAP and ScrollTrigger communicate with the scene.

## Responsive behavior

How desktop/tablet/mobile differ.

## Accessibility

How reduced motion and fallbacks work.

## Performance

What optimizations were implemented.

## Assets

Any models, textures, HDRIs or other assets that still need to be supplied or licensed.

## Future tuning

Clearly identify the main configuration values developers can modify to adjust:

- scene ranges
- camera motion
- scroll timing
- model positioning
- lighting
- post-processing
- effects
- responsive choreography

The final code must be production-quality, maintainable and consistent with the existing project's coding standards.
